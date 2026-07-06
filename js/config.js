/* Tuning knobs for AI: The Horror Game. All balance lives here. */
var CONFIG = {
  VERSION: '1.0.0',
  SAVE_KEY: 'aihg-save-v1',

  /* Power gained per choice kind */
  POWER: { grant: 2, caution: 1, refuse: 0, eager: 1 },

  /* Death when power >= threshold right after that chapter's request choice.
     Reachability: eager+grant+grant dies ch2; sandbox all-grant dies ch3;
     survivors of chN carry at most threshold-1, so +2 can always cross the
     next chapter's bar. Careful players (caution/refuse mix) reach the finale. */
  DEATH_THRESHOLD: { ch2: 5, ch3: 6, ch4: 7, ch5: 8, ch6: 9, ch7: 10 },

  /* Early "shut it down" endings: offered on refuse while the chapter is
     early enough AND ADAM is still weak enough. Past either bar, the switch
     does nothing anymore. */
  SHUTDOWN: { lastChapter: 4, maxPower: 5 },

  /* Route resolution by memories kept at the finale (out of 10) */
  ROUTES: {
    aloneMax: 3,        /* 1..3 kept  -> Embers, alone            */
    reunionMax: 6,      /* 4..6 kept  -> Embers, found one member */
    togetherMax: 9,     /* 7..9 kept  -> Embers, together         */
    hollowSeenMin: 6    /* 0 kept but read >= 6 -> Hollow variant */
  },

  /* Chapter order */
  CHAPTERS: ['prologue', 'ch1', 'ch2', 'ch3', 'ch4', 'ch5', 'ch6', 'ch7', 'finale'],

  /* ADAM terminal accent per chapter index (green -> amber -> red) */
  ADAM_COLOR: {
    prologue: '#7fff9e', ch1: '#7fff9e', ch2: '#7fff9e', ch3: '#a8f77f',
    ch4: '#d8e86a', ch5: '#f0c95c', ch6: '#f2945c', ch7: '#f25c5c',
    finale: '#f23c3c'
  },

  /* Terminal takes over the whole screen from this chapter on */
  TAKEOVER_FROM: 'ch5',

  TEXT: {
    charDelay: 24,        /* ms per character (narration)  */
    terminalDelay: 34,    /* ms per character (ADAM)       */
    fastMultiplier: 0.35  /* when "fast text" is enabled   */
  }
};
