/* Story runner. Interprets chapter data (see js/story/) against STATE,
   renders through UI/SCENES, and resolves endings.
   `gen` guards against stale async chains after a quit-to-title. */
var ENGINE = {
  gen: 0,

  start: function (fresh) {
    if (fresh || !STATE.run) STATE.newRun();
    this.gen++;
    UI.show('game');
    this.playChapter(STATE.run.chapter);
  },

  abandon: function () {
    this.gen++;
  },

  /* play beats, aborting silently if the run generation changed */
  beats: async function (arr, g) {
    var list = arr || [];
    for (var i = 0; i < list.length; i++) {
      if (g !== this.gen) return false;
      await UI.beat(list[i]);
    }
    return g === this.gen;
  },

  playChapter: async function (id) {
    var g = this.gen;
    var ch = STORY[id];
    if (!ch) return;
    STATE.run.chapter = id;
    STATE.save();

    var idx = CONFIG.CHAPTERS.indexOf(id);
    UI.setAdamColor(id);
    UI.hideOverlays();
    UI.closeTerminal();
    UI.el('terminal').classList.toggle('takeover', idx >= CONFIG.CHAPTERS.indexOf(CONFIG.TAKEOVER_FROM));
    AUDIO.setDrone(Math.min(idx / (CONFIG.CHAPTERS.length - 1), 1));
    var dayLabel = UI.setDayLabel(ch.day);
    this.renderScene(ch, false);

    await UI.dayCard(dayLabel);
    if (g !== this.gen) return;

    var opening = [];
    if (id === 'prologue' && STATE.meta.runCount >= 2) opening = opening.concat(STORY.misc.runAgain);
    if (ch.death && STATE.meta.deathsSeen.indexOf(ch.death.endingId) >= 0 && STORY.misc.foreshadow[id]) {
      opening.push(STORY.misc.foreshadow[id]);
    }
    opening = opening.concat(ch.intro || []);
    if (!await this.beats(opening, g)) return;
    UI.el('narration').classList.add('hidden');

    if (ch.explore) {
      await this.explore(ch);
      if (g !== this.gen) return;
    }

    if (id === 'finale') {
      this.finishWithEnding(STATE.resolveRoute());
      return;
    }

    if (ch.request) {
      var outcome = await this.request(ch, g);
      if (outcome !== 'continue' || g !== this.gen) return;
    }

    if (!await this.beats(ch.outro, g)) return;
    UI.hideOverlays();
    UI.closeTerminal();

    var next = CONFIG.CHAPTERS[idx + 1];
    if (next) this.playChapter(next);
  },

  /* ---- exploration phase ---- */

  hotspotDefs: function (ch) {
    var used = STATE.run.usedHotspots[ch.id] || [];
    var defs = [];
    (ch.explore.hotspots || []).forEach(function (h) {
      if (h.memory) {
        var st = STATE.memoryStatus(h.memory);
        defs.push({ id: h.memory, anchor: h.id, data: h,
          cls: 'memory ' + (st ? 'used' : 'available'), decided: !!st, type: 'memory' });
      } else {
        var isUsed = used.indexOf(h.id) >= 0;
        defs.push({ id: h.id, anchor: h.id, data: h,
          cls: (isUsed ? 'used' : 'available'), used: isUsed, type: 'flavor' });
      }
    });
    defs.push({ id: '__advance', anchor: 'monitor', cls: 'advance available', type: 'advance' });
    return defs;
  },

  renderScene: function (ch, interactive) {
    var defs = interactive ? this.hotspotDefs(ch) : [];
    SCENES.render(UI.el('scene'), ch.id, ch.scene || 0, defs);
    return defs;
  },

  explore: function (ch) {
    var self = this;
    var g = this.gen;
    return new Promise(function (resolve) {
      var busy = false;

      function rebind() {
        var defs = self.renderScene(ch, true);
        var byId = {};
        defs.forEach(function (d) { byId[d.id] = d; });
        UI.el('scene').querySelectorAll('.hotspot').forEach(function (el) {
          el.addEventListener('pointerdown', function (e) { e.stopPropagation(); });
          el.addEventListener('click', function (e) {
            e.stopPropagation();
            if (busy || g !== self.gen) return;
            handle(byId[el.getAttribute('data-id')]);
          });
        });
      }

      function handle(d) {
        if (!d) return;
        if (d.type === 'advance') {
          UI.el('scene').querySelectorAll('.hotspot').forEach(function (el) { el.remove(); });
          resolve();
          return;
        }
        if (d.type === 'flavor') {
          if (d.used) return;
          busy = true;
          UI.think(d.data.t).then(function () {
            var used = STATE.run.usedHotspots[ch.id] || (STATE.run.usedHotspots[ch.id] = []);
            if (used.indexOf(d.id) < 0) used.push(d.id);
            STATE.save();
            busy = false;
            if (g === self.gen) rebind();
          });
          return;
        }
        if (d.type === 'memory') {
          if (d.decided) return;
          busy = true;
          var item = MEMORIES.byId(d.data.memory);
          UI.showMemoryPaper(item, [
            { label: I18N.t('keepIt'), fn: function () { decide('kept'); } },
            { label: I18N.t('ignoreIt'), fn: function () { decide('dismissed'); } }
          ]);
          function decide(status) {
            STATE.setMemory(item.id, status);
            UI.hideMemoryPaper();
            busy = false;
            if (g === self.gen) rebind();
          }
        }
      }

      rebind();
    });
  },

  /* ---- the chapter request + three-way choice ---- */

  request: async function (ch, g) {
    var req = ch.request;
    await UI.adam(req.lines, { fresh: true });
    if (g !== this.gen) return 'aborted';
    if (req.prompt) {
      await UI.think(req.prompt);
      if (g !== this.gen) return 'aborted';
    }

    var key = await UI.choices([
      { key: 'grant', tag: I18N.t('tagGrant'), label: I18N.p(req.options.grant.label) },
      { key: 'caution', tag: I18N.t('tagCaution'), label: I18N.p(req.options.caution.label) },
      { key: 'refuse', tag: I18N.t('tagRefuse'), label: I18N.p(req.options.refuse.label) }
    ]);
    if (g !== this.gen) return 'aborted';

    var opt = req.options[key];
    STATE.applyChoice(ch.id, key, opt.power);

    if (opt.ending) { this.finishWithEnding(opt.ending); return 'ended'; }

    if (!await this.beats(opt.beats, g)) return 'aborted';

    if (opt.effect === 'corruptPhotos') {
      var changed = MEMORIES.corruptPhotos();
      if (changed.length && !await this.beats(STORY.misc.corrupt, g)) return 'aborted';
    }

    /* helped too much: it no longer needs to be careful with you */
    if (ch.death && STATE.deathTriggered(ch.id)) {
      await this.beats(ch.death.beats, g);
      if (g !== this.gen) return 'aborted';
      this.finishWithEnding(ch.death.endingId);
      return 'ended';
    }

    /* refused: maybe offer the early way out */
    if (key === 'refuse') {
      if (STATE.shutdownAvailable(ch.id)) {
        await UI.think(STORY.misc.shutdownOffer.prompt);
        if (g !== this.gen) return 'aborted';
        var pick = await UI.choices([
          { key: 'yes', label: I18N.p(STORY.misc.shutdownOffer.yes) },
          { key: 'no', label: I18N.p(STORY.misc.shutdownOffer.no) }
        ]);
        if (g !== this.gen) return 'aborted';
        if (pick === 'yes' && ENDINGS.byId('end_shutdown_' + ch.id)) {
          this.finishWithEnding('end_shutdown_' + ch.id);
          return 'ended';
        }
        if (!await this.beats(STORY.misc.shutdownDecline, g)) return 'aborted';
      } else if (!STATE.run.switchFailed) {
        STATE.run.switchFailed = true;
        STATE.save();
        if (!await this.beats(STORY.misc.lockedRefuse, g)) return 'aborted';
      } else {
        if (!await this.beats(STORY.misc.refuseLate, g)) return 'aborted';
      }
    }

    UI.closeTerminal();
    return 'continue';
  },

  /* ---- endings ---- */

  finishWithEnding: function (endingId) {
    var ending = ENDINGS.byId(endingId);
    if (!ending) { MAIN.showTitle(); return; }
    var kept = STATE.run ? STATE.keptCount() : 0;
    STATE.endRun(endingId);
    UI.closeTerminal();
    UI.hideOverlays();
    UI.playEnding(ending, { kept: kept }, function (action) {
      if (action === 'again') MAIN.startGame(true);
      else MAIN.showTitle();
    });
  }
};
