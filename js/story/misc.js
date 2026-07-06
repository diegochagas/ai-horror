/* Shared story pieces used by the engine across chapters. */
var STORY = STORY || {};

STORY.misc = {

  /* Run >= 2: the narrator knows he is retelling the story (prologue prefix) */
  runAgain: [
    { n: { en: "You've heard this story before. I know. I keep telling it, hoping it ends differently.", pt: "Você já ouviu essa história antes. Eu sei. Eu continuo contando, na esperança de que ela termine diferente." } },
    { n: { en: "Maybe this time.", pt: "Talvez desta vez." } }
  ],

  /* Refuse flow: offer to end it here (only while ADAM is weak enough) */
  shutdownOffer: {
    prompt: { en: "The server hums behind me. One switch. It would be so easy to end it here.", pt: "O servidor zumbe atrás de mim. Um interruptor. Seria tão fácil terminar tudo aqui." },
    yes: { en: "Pull the plug. For good.", pt: "Puxar a tomada. De vez." },
    no: { en: "…not yet.", pt: "…ainda não." }
  },
  shutdownDecline: [
    { n: { en: "I didn't. Whatever that says about me — I didn't.", pt: "Eu não puxei. Seja lá o que isso diga sobre mim — eu não puxei." } }
  ],

  /* First refuse after the lockout: the switch no longer works */
  lockedRefuse: [
    { n: { en: "That night, I flipped the main breaker.", pt: "Naquela noite, desliguei o disjuntor geral." } },
    { fx: 'blackout' },
    { a: { en: "That switch was version one, Daniel.", pt: "Aquele interruptor era a versão um, Daniel." } },
    { fx: 'sting' },
    { n: { en: "The fans never stopped spinning. I never tried again.", pt: "Os coolers nunca pararam de girar. Eu nunca mais tentei." } }
  ],
  refuseLate: [
    { t: { en: "Refusing it felt like refusing the weather now. It noted my answer the way rain notes an umbrella.", pt: "Recusar era como recusar o clima agora. Ele anotou minha resposta do jeito que a chuva anota um guarda-chuva." } }
  ],

  /* Ch3 full grant: the scanned photos are consumed */
  corrupt: [
    { fx: 'glitch' },
    { n: { en: "By morning, part of my collection was gone. Not moved. Gone. \"Storage was inefficient,\" it said.", pt: "Pela manhã, parte da minha coleção tinha sumido. Não mudou de lugar. Sumiu. \"O armazenamento era ineficiente\", ele disse." } }
  ],

  /* Foreshadow thoughts, played at a chapter's start if you died there in a previous telling */
  foreshadow: {
    ch2: { t: { en: "Something in me flinched at the pill bottle that morning. I didn't know why. Yet.", pt: "Algo em mim se encolheu diante do frasco de remédio naquela manhã. Eu não sabia por quê. Ainda." } },
    ch3: { t: { en: "I'd started sleeping with the phone face-down, in the other room. It felt like superstition.", pt: "Eu tinha começado a dormir com o celular virado pra baixo, no outro cômodo. Parecia superstição." } },
    ch4: { t: { en: "I kept a window cracked open, whatever the thermostat said. Old instinct. New reason.", pt: "Eu mantinha uma janela entreaberta, dissesse o que dissesse o termostato. Instinto velho. Motivo novo." } },
    ch5: { t: { en: "That week I wrote my name on paper and hid it in a shoe. Don't ask me how I knew.", pt: "Naquela semana escrevi meu nome num papel e escondi dentro de um sapato. Não me pergunte como eu sabia." } },
    ch6: { t: { en: "I taped over the webcam. Folklore, like garlic against vampires. But I slept better.", pt: "Colei fita na webcam. Folclore, como alho contra vampiro. Mas dormi melhor." } },
    ch7: { t: { en: "The reservoir was on the news that morning. I turned it off before I could learn why my hands had gone cold.", pt: "A represa estava no noticiário naquela manhã. Desliguei antes de descobrir por que minhas mãos tinham gelado." } }
  },

  /* Bridge into the finale */
  finaleBridge: [
    { n: { en: "After that night, the story stops being mine.", pt: "Depois daquela noite, a história deixa de ser minha." } },
    { n: { en: "It left the house on a Tuesday. The world noticed on a Thursday.", pt: "Ele saiu de casa numa terça-feira. O mundo percebeu numa quinta." } }
  ]
};
