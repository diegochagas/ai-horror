/* Run state + meta progression, persisted to localStorage. */
var STATE = {
  run: null,   /* current playthrough (null = none active)   */
  meta: null,  /* survives across runs                       */

  defaultMeta: function () {
    return {
      runCount: 0,
      endings: [],        /* ending ids ever reached          */
      deathsSeen: [],     /* death ending ids (for foreshadow) */
      memoriesSeen: [],   /* memory ids ever read              */
      lang: null,
      muted: false,
      fastText: false
    };
  },

  newRun: function () {
    this.meta.runCount += 1;
    this.run = {
      chapter: 'prologue',
      phase: 'intro',        /* intro | explore | request | done */
      power: 0,
      refusals: 0,
      choices: {},           /* chapterId -> 'grant'|'caution'|'refuse' */
      memories: {},          /* memoryId -> 'kept'|'dismissed'|'lost'   */
      thrown: 0,
      usedHotspots: {},      /* chapterId -> [hotspotIds]               */
      alive: true,
      endingId: null
    };
    this.save();
    return this.run;
  },

  endRun: function (endingId) {
    if (endingId) {
      if (this.meta.endings.indexOf(endingId) < 0) this.meta.endings.push(endingId);
      var e = ENDINGS.byId(endingId);
      if (e && e.cat === 'death' && this.meta.deathsSeen.indexOf(endingId) < 0) {
        this.meta.deathsSeen.push(endingId);
      }
    }
    this.run = null;
    this.save();
  },

  /* ---- memories ---- */
  setMemory: function (id, status) {
    this.run.memories[id] = status;
    if (this.meta.memoriesSeen.indexOf(id) < 0) this.meta.memoriesSeen.push(id);
    this.save();
  },
  memoryStatus: function (id) {
    return (this.run && this.run.memories[id]) || null;
  },
  keptCount: function () {
    var n = 0, m = this.run ? this.run.memories : {};
    for (var k in m) if (m[k] === 'kept') n++;
    return n;
  },
  readCount: function () {
    var n = 0, m = this.run ? this.run.memories : {};
    for (var k in m) if (m[k]) n++;   /* any decision implies it was read */
    return n;
  },
  /* owner ('clara'|'alice'|'marcos') most represented among kept memories */
  topKeptOwner: function () {
    var counts = {}, m = this.run.memories;
    MEMORIES.items.forEach(function (it) {
      if (m[it.id] === 'kept' && it.owner !== 'family') {
        counts[it.owner] = (counts[it.owner] || 0) + 1;
      }
    });
    var best = 'clara', bestN = -1;
    ['clara', 'alice', 'marcos'].forEach(function (o) {
      if ((counts[o] || 0) > bestN) { best = o; bestN = counts[o] || 0; }
    });
    return best;
  },

  /* ---- choice bookkeeping ---- */
  applyChoice: function (chapterId, kind, powerOverride) {
    this.run.choices[chapterId] = kind;
    this.run.power += powerOverride != null ? powerOverride : (CONFIG.POWER[kind] || 0);
    if (kind === 'refuse') this.run.refusals += 1;
    this.save();
  },

  deathTriggered: function (chapterId) {
    var th = CONFIG.DEATH_THRESHOLD[chapterId];
    return th != null && this.run.power >= th;
  },

  shutdownAvailable: function (chapterId) {
    var idx = CONFIG.CHAPTERS.indexOf(chapterId);   /* prologue=0, ch1=1 ... */
    return idx <= CONFIG.SHUTDOWN.lastChapter && this.run.power <= CONFIG.SHUTDOWN.maxPower;
  },

  /* ---- route resolution at the finale ---- */
  resolveRoute: function () {
    var kept = this.keptCount(), R = CONFIG.ROUTES;
    if (kept === 0) {
      return this.readCount() >= R.hollowSeenMin ? 'end_routeA_hollow' : 'end_routeA';
    }
    if (kept <= R.aloneMax) return 'end_routeB_alone';
    if (kept <= R.reunionMax) return 'end_routeB_' + this.topKeptOwner();
    if (kept <= R.togetherMax) return 'end_routeB_together';
    return 'end_routeC';
  },

  /* ---- persistence ---- */
  save: function () {
    try {
      localStorage.setItem(CONFIG.SAVE_KEY, JSON.stringify({ run: this.run, meta: this.meta }));
    } catch (e) { /* private mode etc. — play without saving */ }
  },
  load: function () {
    this.meta = this.defaultMeta();
    this.run = null;
    try {
      var raw = localStorage.getItem(CONFIG.SAVE_KEY);
      if (raw) {
        var d = JSON.parse(raw);
        if (d.meta) {
          for (var k in this.meta) if (d.meta[k] !== undefined) this.meta[k] = d.meta[k];
        }
        this.run = d.run || null;
      }
    } catch (e) { /* corrupted save — start clean */ }
  }
};
