/* Boot, title screen, screen routing. */
var MAIN = {

  boot: function () {
    STATE.load();
    I18N.init(STATE.meta.lang);
    UI.init();

    /* overlay screens must not feed taps to the game underneath */
    ['screen-memories', 'screen-endings'].forEach(function (id) {
      UI.el(id).addEventListener('pointerdown', function (e) { e.stopPropagation(); });
    });

    UI.el('hud-memories').addEventListener('click', function (e) {
      e.stopPropagation();
      MEMORIES.renderCollection(UI.el('screen-memories'), function () { UI.show('game'); });
      UI.show('memories');
    });
    UI.el('hud-memories').addEventListener('pointerdown', function (e) { e.stopPropagation(); });

    UI.el('hud-menu').addEventListener('click', function (e) {
      e.stopPropagation();
      MAIN.openPause();
    });
    UI.el('hud-menu').addEventListener('pointerdown', function (e) { e.stopPropagation(); });

    /* the pause overlay swallows taps so the game underneath never advances */
    UI.el('pause-menu').addEventListener('pointerdown', function (e) { e.stopPropagation(); });

    UI.el('hud-memories').textContent = '◱';
    UI.el('hud-menu').textContent = '≡';

    this.showTitle();
  },

  quitToTitle: function () {
    this.closePause();
    ENGINE.abandon();
    UI._tapResolve = null;
    UI.hideOverlays();
    UI.closeTerminal();
    UI.el('tap-hint').classList.add('hidden');
    this.showTitle();
  },

  /* In-game pause. Purely an overlay: it never touches the engine, so
     resuming drops the player back on the exact same beat and day. */
  openPause: function () {
    var pm = UI.el('pause-menu');
    pm.innerHTML = '';

    var panel = document.createElement('div');
    panel.className = 'pause-panel';

    var h = document.createElement('div');
    h.className = 'pause-title';
    h.textContent = 'ADAM';
    panel.appendChild(h);

    function btn(label, fn, small) {
      var b = document.createElement('button');
      b.className = 'menu-btn' + (small ? ' small' : '');
      b.textContent = label;
      UI.bindButtonTap(b, function () { AUDIO.ensure(); fn(); });
      return b;
    }

    panel.appendChild(btn(I18N.t('menuResume'), function () { MAIN.closePause(); }));
    panel.appendChild(btn(I18N.t('memories'), function () {
      MAIN.closePause();
      MEMORIES.renderCollection(UI.el('screen-memories'), function () { UI.show('game'); });
      UI.show('memories');
    }));

    var row = document.createElement('div');
    row.className = 'pause-row';
    row.appendChild(btn(I18N.t('langBtn'), function () {
      I18N.toggle();
      STATE.meta.lang = I18N.lang;
      STATE.save();
      MAIN.openPause();                 /* re-render labels in the new language */
    }, true));
    row.appendChild(btn(I18N.t(STATE.meta.muted ? 'soundOff' : 'soundOn'), function () {
      STATE.meta.muted = !STATE.meta.muted;
      STATE.save();
      AUDIO.setMuted(STATE.meta.muted);
      MAIN.openPause();
    }, true));
    panel.appendChild(row);

    panel.appendChild(btn(I18N.t('menuQuit'), function () { MAIN.quitToTitle(); }, true));

    pm.appendChild(panel);
    pm.classList.remove('hidden');
  },

  closePause: function () {
    UI.el('pause-menu').classList.add('hidden');
  },

  showTitle: function () {
    UI.setAdamColor('prologue');
    UI.el('rec-day').textContent = '';
    var scr = UI.el('screen-title');
    scr.innerHTML = '';

    if (STATE.meta.runCount > 0) {
      var rc = document.createElement('div');
      rc.className = 'title-runcount';
      rc.textContent = I18N.t('run') + ' ' + (STATE.meta.runCount + (STATE.run ? 0 : 1));
      scr.appendChild(rc);
    }

    var logo = document.createElement('div');
    logo.className = 'title-logo';
    logo.innerHTML = '<div class="t-ai">AI</div><div class="t-sub">' + I18N.t('subtitle') + '</div>';
    scr.appendChild(logo);

    function btn(label, fn, small) {
      var b = document.createElement('button');
      b.className = 'menu-btn' + (small ? ' small' : '');
      b.textContent = label;
      b.addEventListener('pointerdown', function (e) { e.stopPropagation(); });
      b.addEventListener('click', function (e) { e.stopPropagation(); AUDIO.ensure(); fn(); });
      return b;
    }

    if (STATE.run) {
      scr.appendChild(btn(I18N.t('continueRun'), function () { MAIN.startGame(false); }));
    }
    scr.appendChild(btn(I18N.t('newStory'), function () { MAIN.startGame(true); }));
    scr.appendChild(btn(I18N.t('memories'), function () {
      MEMORIES.renderCollection(UI.el('screen-memories'), function () { MAIN.showTitle(); });
      UI.show('memories');
    }));
    scr.appendChild(btn(I18N.t('endings'), function () {
      ENDINGS.renderGallery(UI.el('screen-endings'), function () { MAIN.showTitle(); });
      UI.show('endings');
    }));

    var footer = document.createElement('div');
    footer.className = 'title-footer';
    footer.appendChild(btn(I18N.t('langBtn'), function () {
      I18N.toggle();
      STATE.meta.lang = I18N.lang;
      STATE.save();
      MAIN.showTitle();
    }, true));
    footer.appendChild(btn(I18N.t(STATE.meta.muted ? 'soundOff' : 'soundOn'), function () {
      STATE.meta.muted = !STATE.meta.muted;
      STATE.save();
      AUDIO.setMuted(STATE.meta.muted);
      MAIN.showTitle();
    }, true));
    scr.appendChild(footer);

    UI.show('title');
  },

  startGame: function (fresh) {
    var begin = function () { ENGINE.start(fresh); };
    ENGINE.abandon();
    UI._tapResolve = null;
    UI.hideOverlays();
    UI.closeTerminal();
    UI.el('tap-hint').classList.add('hidden');
    if (fresh && PERSONALIZATION.needsSetup()) {
      PERSONALIZATION.runSetup(begin, function () { MAIN.showTitle(); });
      return;
    }
    begin();
  }
};

if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', function () { MAIN.boot(); });
}
