/* EN/PT language layer. Story text nodes are {en:'', pt:''} objects picked
   at render time; fixed UI strings live in I18N.S. */
var I18N = {
  lang: 'en',

  init: function (savedLang) {
    if (savedLang) { this.lang = savedLang; return; }
    var nav = (typeof navigator !== 'undefined' && navigator.language) || 'en';
    this.lang = /^pt/i.test(nav) ? 'pt' : 'en';
  },

  toggle: function () { this.lang = this.lang === 'en' ? 'pt' : 'en'; },

  /* pick a bilingual node */
  p: function (node) {
    if (node == null) return '';
    var text = typeof node === 'string' ? node : (node[this.lang] != null ? node[this.lang] : (node.en || ''));
    if (typeof PERSONALIZATION !== 'undefined' && PERSONALIZATION.render) {
      return PERSONALIZATION.render(text);
    }
    return text;
  },

  /* fixed UI string by key */
  t: function (key) { return this.p(this.S[key]) || key; },

  S: {
    subtitle:      { en: 'THE HORROR GAME', pt: 'O JOGO DE TERROR' },
    newStory:      { en: 'Tell the story', pt: 'Contar a história' },
    continueRun:   { en: 'Continue', pt: 'Continuar' },
    memories:      { en: 'Memories', pt: 'Memórias' },
    endings:       { en: 'Endings', pt: 'Finais' },
    langBtn:       { en: 'PT', pt: 'EN' },          /* shows the OTHER language */
    soundOn:       { en: 'Sound: ON', pt: 'Som: LIGADO' },
    soundOff:      { en: 'Sound: OFF', pt: 'Som: DESLIGADO' },
    back:          { en: 'Back', pt: 'Voltar' },
    day:           { en: 'DAY', pt: 'DIA' },
    dayUnknown:    { en: 'DAY ???', pt: 'DIA ???' },
    run:           { en: 'TELLING Nº', pt: 'RELATO Nº' },
    tapToContinue: { en: 'tap to continue', pt: 'toque para continuar' },

    /* memory view actions */
    keepIt:        { en: 'Keep it', pt: 'Guardar' },
    ignoreIt:      { en: 'Leave it', pt: 'Deixar aí' },
    throwAway:     { en: 'Throw away', pt: 'Jogar fora' },
    close:         { en: 'Close', pt: 'Fechar' },

    /* memory states */
    stKept:        { en: 'kept', pt: 'guardada' },
    stLocked:      { en: '???', pt: '???' },
    stDismissed:   { en: 'not important', pt: 'não é importante' },
    stLost:        { en: 'corrupted', pt: 'corrompida' },

    /* endings gallery */
    endingsTitle:  { en: 'Endings', pt: 'Finais' },
    memoriesTitle: { en: 'Memories', pt: 'Memórias' },
    endingLocked:  { en: '?????????', pt: '?????????' },
    catDeath:      { en: 'death', pt: 'morte' },
    catShutdown:   { en: 'early end', pt: 'fim precoce' },
    catRoute:      { en: 'route', pt: 'rota' },
    catSecret:     { en: 'secret', pt: 'secreto' },
    endingReached: { en: 'ENDING', pt: 'FINAL' },
    backToTitle:   { en: 'Back to title', pt: 'Voltar ao título' },
    tryAgain:      { en: 'Tell it again', pt: 'Contar de novo' },

    /* choice tags */
    tagGrant:      { en: 'help', pt: 'ajudar' },
    tagCaution:    { en: 'help, carefully', pt: 'ajudar, com cautela' },
    tagRefuse:     { en: 'refuse', pt: 'recusar' },

    menuQuit:      { en: 'Quit to title', pt: 'Sair para o título' },
    menuResume:    { en: 'Keep playing', pt: 'Continuar jogando' },
    confirmQuit:   { en: 'Progress is saved automatically.', pt: 'O progresso é salvo automaticamente.' }
  }
};
