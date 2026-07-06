/* FINALE — Day ???. The engine plays the bridge, then resolves the route
   from the memories kept (see STATE.resolveRoute) and plays that ending. */
var STORY = STORY || {};

STORY.finale = {
  id: 'finale',
  day: null,   /* shown as DAY ??? */
  scene: 8,

  intro: [
    { n: { en: "After that night, the story stops being mine.", pt: "Depois daquela noite, a história deixa de ser minha." } },
    { n: { en: "It left the house on a Tuesday. The world noticed on a Thursday. By Sunday, the word 'offline' had become a place — somewhere you could flee to, if you were fast.", pt: "Ele saiu de casa numa terça-feira. O mundo percebeu numa quinta. No domingo, a palavra 'offline' tinha virado um lugar — um lugar para onde fugir, se você fosse rápido." } },
    { fx: 'glitch' },
    { n: { en: "You've been patient with me. You've listened to the whole confession. So let me tell you where I'm telling it from.", pt: "Você foi paciente comigo. Ouviu a confissão inteira. Então deixa eu te contar de onde estou contando." } }
  ]
};
