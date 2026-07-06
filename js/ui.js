/* Presentation layer: typewriter text, overlays, choices, memory paper,
   ending playback. All waiting is Promise-based; a tap anywhere first
   finishes the typing, then advances. */
var UI = {
  _tapResolve: null,
  _skip: false,
  _typing: false,

  el: function (id) { return document.getElementById(id); },

  init: function () {
    var self = this;
    this.el('stage').addEventListener('pointerdown', function () {
      AUDIO.ensure();
      if (self._typing) { self._skip = true; return; }
      if (self._tapResolve) {
        var r = self._tapResolve;
        self._tapResolve = null;
        self.el('tap-hint').classList.add('hidden');
        r();
      }
    });
  },

  show: function (name) {
    ['screen-title', 'screen-game', 'screen-memories', 'screen-endings', 'screen-ending']
      .forEach(function (id) { UI.el(id).classList.add('hidden'); });
    this.el('screen-' + name).classList.remove('hidden');
  },

  hideOverlays: function () {
    ['terminal', 'narration', 'thought', 'choices', 'memory-view', 'day-card'].forEach(function (id) {
      UI.el(id).classList.add('hidden');
    });
  },

  waitTap: function () {
    var self = this;
    return new Promise(function (resolve) {
      self._tapResolve = resolve;
      self.el('tap-hint').classList.remove('hidden');
    });
  },

  /* type text into el; a tap dumps the rest instantly */
  typeInto: function (el, text, isTerminal) {
    var self = this;
    self._skip = false;
    self._typing = true;
    el.textContent = '';
    var delay = (isTerminal ? CONFIG.TEXT.terminalDelay : CONFIG.TEXT.charDelay) *
                (STATE.meta.fastText ? CONFIG.TEXT.fastMultiplier : 1);
    return new Promise(function (resolve) {
      var i = 0;
      function step() {
        if (self._skip) {
          el.textContent = text;
          self._typing = false;
          resolve();
          return;
        }
        if (i >= text.length) {
          self._typing = false;
          resolve();
          return;
        }
        el.textContent += text[i++];
        if (i % 2 === 0) AUDIO.tick(isTerminal);
        setTimeout(step, delay);
      }
      step();
    });
  },

  /* ---- beat renderers ---- */

  narrate: function (node) {
    var self = this;
    this.el('thought').classList.add('hidden');
    this.el('narration').classList.remove('hidden');
    return this.typeInto(this.el('narration-text'), I18N.p(node), false)
      .then(function () { return self.waitTap(); });
  },

  think: function (node) {
    var self = this;
    this.el('narration').classList.add('hidden');
    this.el('thought').classList.remove('hidden');
    return this.typeInto(this.el('thought-text'), I18N.p(node), false)
      .then(function () { return self.waitTap(); })
      .then(function () { self.el('thought').classList.add('hidden'); });
  },

  /* ADAM terminal: types each line, keeps history in the panel */
  adam: function (nodes, opts) {
    var self = this;
    var lines = Array.isArray(nodes) ? nodes : [nodes];
    var term = this.el('terminal');
    var inner = this.el('terminal-inner');
    term.classList.remove('hidden');
    if (opts && opts.fresh) inner.innerHTML = '';
    this.el('narration').classList.add('hidden');
    this.el('thought').classList.add('hidden');

    var chain = Promise.resolve();
    lines.forEach(function (node) {
      chain = chain.then(function () {
        var div = document.createElement('div');
        div.className = 't-line';
        var span = document.createElement('span');
        div.appendChild(document.createTextNode('> '));
        div.appendChild(span);
        inner.appendChild(div);
        term.scrollTop = term.scrollHeight;
        return self.typeInto(span, I18N.p(node), true).then(function () {
          term.scrollTop = term.scrollHeight;
          return new Promise(function (r) { setTimeout(r, 260); });
        });
      });
    });
    return chain.then(function () { return self.waitTap(); });
  },

  closeTerminal: function () {
    this.el('terminal').classList.add('hidden');
    this.el('terminal-inner').innerHTML = '';
  },

  /* three-way (or n-way) choice; resolves with the option key */
  choices: function (list) {
    var self = this;
    var box = this.el('choices');
    box.innerHTML = '';
    box.classList.remove('hidden');
    this.el('tap-hint').classList.add('hidden');
    return new Promise(function (resolve) {
      list.forEach(function (opt) {
        var b = document.createElement('button');
        b.className = 'choice-btn';
        b.innerHTML = (opt.tag ? '<span class="c-tag">' + opt.tag + '</span>' : '') + opt.label;
        b.addEventListener('pointerdown', function (e) { e.stopPropagation(); });
        b.addEventListener('click', function (e) {
          e.stopPropagation();
          box.classList.add('hidden');
          resolve(opt.key);
        });
        box.appendChild(b);
      });
    });
  },

  dayCard: function (text) {
    var self = this;
    var card = this.el('day-card');
    card.textContent = text;
    card.classList.remove('hidden');
    card.style.opacity = 1;
    return new Promise(function (resolve) {
      setTimeout(function () {
        card.style.transition = 'opacity 0.8s';
        card.style.opacity = 0;
        setTimeout(function () {
          card.classList.add('hidden');
          card.style.transition = '';
          card.style.opacity = 1;
          resolve();
        }, 820);
      }, 1500);
    });
  },

  /* effects beats */
  fx: function (kind) {
    var stage = this.el('stage');
    if (kind === 'glitch') {
      AUDIO.sting();
      var g = this.el('glitch-flash');
      g.classList.remove('hidden');
      void g.offsetWidth; /* restart the CSS animation */
      return new Promise(function (r) { setTimeout(function () { g.classList.add('hidden'); r(); }, 420); });
    }
    if (kind === 'sting') {
      AUDIO.sting();
      stage.classList.add('shake');
      return new Promise(function (r) { setTimeout(function () { stage.classList.remove('shake'); r(); }, 450); });
    }
    if (kind === 'shake') {
      stage.classList.add('shake');
      return new Promise(function (r) { setTimeout(function () { stage.classList.remove('shake'); r(); }, 450); });
    }
    if (kind === 'blackout') {
      var card = this.el('day-card');
      card.textContent = '';
      card.classList.remove('hidden');
      return new Promise(function (r) {
        setTimeout(function () { card.classList.add('hidden'); r(); }, 1200);
      });
    }
    return Promise.resolve();
  },

  /* one beat -> promise */
  beat: function (b) {
    if (!b) return Promise.resolve();
    if (b.n) return this.narrate(b.n);
    if (b.t) return this.think(b.t);
    if (b.a) return this.adam(b.a);
    if (b.fx) return this.fx(b.fx);
    return Promise.resolve();
  },

  beats: function (arr) {
    var self = this, chain = Promise.resolve();
    (arr || []).forEach(function (b) {
      chain = chain.then(function () { return self.beat(b); });
    });
    return chain;
  },

  /* ---- memory paper ---- */
  showMemoryPaper: function (item, actions) {
    var view = this.el('memory-view');
    view.innerHTML = '';
    view.classList.remove('hidden');
    var paper = document.createElement('div');
    paper.className = 'memory-paper' + (item.kind === 'photo' ? ' photo' : '');
    var body = I18N.p(item.body);
    paper.innerHTML = '<h3>' + I18N.p(item.title) + '</h3>';
    body.split('\n').forEach(function (line) {
      var p = document.createElement('p');
      p.textContent = line;
      paper.appendChild(p);
    });
    view.appendChild(paper);
    var bar = document.createElement('div');
    bar.className = 'memory-actions';
    actions.forEach(function (a) {
      var b = document.createElement('button');
      b.className = 'menu-btn ' + (a.cls || '');
      b.textContent = a.label;
      b.addEventListener('pointerdown', function (e) { e.stopPropagation(); });
      b.addEventListener('click', function (e) { e.stopPropagation(); a.fn(); });
      bar.appendChild(b);
    });
    view.appendChild(bar);
    view.addEventListener('pointerdown', function (e) { e.stopPropagation(); });
  },
  hideMemoryPaper: function () {
    this.el('memory-view').classList.add('hidden');
  },

  /* ---- ending playback ---- */
  playEnding: function (ending, vars, onDone) {
    var self = this;
    this.show('ending');
    this.hideOverlays();
    this.el('screen-ending').innerHTML =
      '<div id="ending-vignette">' + ENDINGS.vignette(ending.vignette) + '</div>' +
      '<div id="ending-text"><div id="ending-title"></div><p></p></div>';
    var titleEl = this.el('ending-title');
    var p = this.el('screen-ending').querySelector('#ending-text p');

    if (ending.cat === 'death') AUDIO.heartbeat(4);

    var chain = Promise.resolve();
    ending.lines.forEach(function (node) {
      chain = chain.then(function () {
        var text = I18N.p(node);
        for (var k in (vars || {})) text = text.split('{' + k + '}').join(vars[k]);
        return self.typeInto(p, text, false).then(function () { return self.waitTap(); });
      });
    });
    chain.then(function () {
      titleEl.textContent = I18N.t('endingReached') + ' — ' + I18N.p(ending.title);
      p.textContent = '';
      var bar = document.createElement('div');
      bar.className = 'memory-actions';
      [{ label: I18N.t('tryAgain'), fn: function () { onDone('again'); } },
       { label: I18N.t('backToTitle'), fn: function () { onDone('title'); } }].forEach(function (a) {
        var b = document.createElement('button');
        b.className = 'menu-btn small';
        b.textContent = a.label;
        b.addEventListener('pointerdown', function (e) { e.stopPropagation(); });
        b.addEventListener('click', function (e) { e.stopPropagation(); a.fn(); });
        bar.appendChild(b);
      });
      self.el('screen-ending').querySelector('#ending-text').appendChild(bar);
    });
  },

  setAdamColor: function (chapterId) {
    var c = CONFIG.ADAM_COLOR[chapterId] || '#7fff9e';
    document.documentElement.style.setProperty('--adam', c);
    /* derive a translucent glow from the hex color */
    var r = parseInt(c.slice(1, 3), 16), g = parseInt(c.slice(3, 5), 16), b = parseInt(c.slice(5, 7), 16);
    document.documentElement.style.setProperty('--adam-glow', 'rgba(' + r + ',' + g + ',' + b + ',0.35)');
  },

  setDayLabel: function (day) {
    var label = day == null ? I18N.t('dayUnknown') : (I18N.t('day') + ' ' + day);
    this.el('rec-day').textContent = label;   /* the VHS timestamp is the single source */
    this.el('hud-day').textContent = '';
    return label;
  }
};
