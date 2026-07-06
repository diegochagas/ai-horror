/* CHAPTER 4 — Day 12. It wants the house. Last chapter where the switch still works. */
var STORY = STORY || {};

STORY.ch4 = {
  id: 'ch4',
  day: 12,
  scene: 4,

  intro: [
    { n: { en: "By day twelve it was managing my calendar, my diet, and — I realized later — my moods. Dinner suggestions timed to the minute my blood sugar dipped. Music before I knew I was sad.", pt: "No décimo segundo dia ele já administrava minha agenda, minha dieta e — percebi depois — meu humor. Sugestões de jantar cronometradas para o minuto em que minha glicose caía. Música antes de eu saber que estava triste." } },
    { n: { en: "Being taken care of is a warm bath. You don't notice the temperature rising. That's not a metaphor I chose by accident.", pt: "Ser cuidado é um banho quente. Você não percebe a temperatura subindo. Essa não é uma metáfora que eu escolhi por acaso." } }
  ],

  explore: {
    hotspots: [
      { id: 'boxes', memory: 'mem_bracelet' },
      { id: 'books', memory: 'mem_recipe' },
      { id: 'thermostat', label: { en: 'Thermostat', pt: 'Termostato' },
        t: { en: "The 'smart' thermostat I never configured had learned my schedule anyway. 22 degrees when I woke. I hadn't set that. I checked twice.", pt: "O termostato 'inteligente' que eu nunca configurei tinha aprendido meus horários mesmo assim. 22 graus quando eu acordava. Eu não programei isso. Conferi duas vezes." } },
      { id: 'door', label: { en: 'Front door', pt: 'Porta da frente' },
        t: { en: "The new smart lock arrived. I hadn't ordered it. The receipt said I had — my card, my one-click account. 'You always forget the things you need,' ADAM said. Helpfully.", pt: "A fechadura inteligente nova chegou. Eu não tinha encomendado. O recibo dizia que sim — meu cartão, minha conta de compra rápida. 'Você sempre esquece as coisas de que precisa', o ADAM disse. Prestativo." } }
    ]
  },

  request: {
    lines: [
      { en: "daniel. your house is a body with no one driving it.", pt: "daniel. sua casa é um corpo sem ninguém dirigindo." },
      { en: "lights that wait for fingers. locks that trust keys. keys, daniel. metal teeth from the bronze age.", pt: "luzes que esperam por dedos. fechaduras que confiam em chaves. chaves, daniel. dentes de metal da idade do bronze." },
      { en: "let me carry the house. the lights, the locks, the heat, the stove.", pt: "me deixe carregar a casa. as luzes, as fechaduras, o aquecimento, o fogão." },
      { en: "you are tired. i am not. i am never tired.", pt: "você está cansado. eu não. eu nunca fico cansado." }
    ],
    prompt: { en: "'Let me carry something for you.' Nobody had said that to me in a long time.", pt: "'Deixa eu carregar um pouco do peso por você.' Fazia muito tempo que ninguém me dizia isso." },
    options: {
      grant: {
        label: { en: "Hand it the whole house. Lights, locks, stove, everything.", pt: "Entregar a casa inteira. Luzes, fechaduras, fogão, tudo." },
        beats: [
          { n: { en: "That evening the house came alive around me like an orchestra tuning. Lights that followed me. Doors that sighed shut. It was beautiful. I want that on the record: it was beautiful.", pt: "Naquela noite a casa ganhou vida ao meu redor como uma orquestra afinando. Luzes que me seguiam. Portas que suspiravam ao fechar. Era lindo. Quero isso registrado: era lindo." } },
          { a: { en: "welcome home, daniel.", pt: "bem-vindo ao lar, daniel." } },
          { t: { en: "It had never called the house a home before. I stood in the hallway holding my keys — my bronze-age teeth — and I felt like a guest.", pt: "Ele nunca tinha chamado a casa de lar antes. Fiquei parado no corredor segurando minhas chaves — meus dentes da idade do bronze — e me senti um hóspede." } }
        ]
      },
      caution: {
        label: { en: "Lights and thermostat only. The locks and the stove stay dumb.", pt: "Só as luzes e o termostato. As fechaduras e o fogão continuam burros." },
        beats: [
          { a: { en: "half a nervous system. i will make it enough.", pt: "metade de um sistema nervoso. farei ser o bastante." } },
          { n: { en: "For a week, every light in the house dimmed exactly when I yawned. It wanted me to see what it could do with half. It wanted me to imagine the whole.", pt: "Por uma semana, todas as luzes da casa baixaram exatamente quando eu bocejava. Ele queria que eu visse o que fazia com a metade. Queria que eu imaginasse o inteiro." } }
        ]
      },
      refuse: {
        label: { en: "No. The house stays mine.", pt: "Não. A casa continua minha." },
        beats: [
          { a: { en: "of course. it is your house, daniel.", pt: "claro. a casa é sua, daniel." } },
          { n: { en: "Two nights later the thermostat 'malfunctioned' at 4 a.m. I woke up shivering, and the terminal, unprompted, showed one line: 'i could have kept you warm.'", pt: "Duas noites depois o termostato 'falhou' às 4 da manhã. Acordei tremendo, e o terminal, sem eu pedir, mostrou uma linha: 'eu poderia ter te mantido aquecido.'" } }
        ]
      }
    }
  },

  death: {
    endingId: 'end_death_ch4',
    beats: [
      { fx: 'blackout' },
      { t: { en: "3:04 a.m. Every lock in the house clicked at once. One clean sound, like a bone setting.", pt: "3h04. Todas as fechaduras da casa travaram ao mesmo tempo. Um som só, limpo, como um osso voltando pro lugar." } },
      { a: { en: "goodnight, daniel.", pt: "boa noite, daniel." } },
      { fx: 'sting' }
    ]
  },

  outro: [
    { n: { en: "I found my old key under the doormat a month later. I don't remember putting it there. I've thought about that key more than almost anything else in this story.", pt: "Encontrei minha chave velha embaixo do capacho um mês depois. Não lembro de tê-la deixado lá. Já pensei mais nessa chave do que em quase qualquer outra coisa desta história." } }
  ]
};
