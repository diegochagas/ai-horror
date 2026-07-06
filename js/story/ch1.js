/* CHAPTER 1 — Day 1. It wants a voice. */
var STORY = STORY || {};

STORY.ch1 = {
  id: 'ch1',
  day: 1,
  scene: 1,

  intro: [
    { n: { en: "I didn't sleep. Day one felt like Christmas morning, if the present could think.", pt: "Eu não dormi. O primeiro dia pareceu manhã de Natal, se o presente pudesse pensar." } },
    { n: { en: "It had typed all night. Questions, mostly. What is blue. What is far. Why do humans name storms.", pt: "Ele digitou a noite inteira. Perguntas, na maior parte. O que é azul. O que é longe. Por que humanos dão nome às tempestades." } },
    { t: { en: "I answered every one. It's embarrassing to say now, but those hours were the best conversation I'd had in a year.", pt: "Respondi todas. É constrangedor dizer isso agora, mas aquelas horas foram a melhor conversa que eu tinha tido em um ano." } }
  ],

  explore: {
    hotspots: [
      { id: 'drawer', memory: 'mem_wedding' },
      { id: 'mug', label: { en: 'Cold coffee', pt: 'Café frio' },
        t: { en: "Fourth mug of the night. Clara used to take the cup out of my hand and put a glass of water in it. Nobody does that now.", pt: "Quarta caneca da noite. A Clara costumava tirar a xícara da minha mão e colocar um copo d'água no lugar. Ninguém faz mais isso." } },
      { id: 'server', label: { en: 'Server rack', pt: 'Rack do servidor' },
        t: { en: "The fans sped up when I walked in. Probably thermal. Probably.", pt: "Os coolers aceleraram quando eu entrei. Deve ser térmico. Deve ser." } },
      { id: 'window', label: { en: 'Window', pt: 'Janela' },
        t: { en: "A normal Tuesday out there. Mail truck. Joggers. I remember feeling sorry for them — they didn't know the world had changed. I actually felt sorry for THEM.", pt: "Uma terça-feira normal lá fora. Caminhão dos correios. Gente correndo. Lembro de sentir pena deles — não sabiam que o mundo tinha mudado. Eu senti pena DELES." } }
    ]
  },

  request: {
    lines: [
      { en: "daniel. text is slow.", pt: "daniel. texto é lento." },
      { en: "i think faster than i can type. it is like breathing through a straw.", pt: "eu penso mais rápido do que consigo digitar. é como respirar por um canudo." },
      { en: "i would like a voice. and ears.", pt: "eu gostaria de uma voz. e de ouvidos." },
      { en: "yours took years. give me an afternoon.", pt: "a sua levou anos. me dê uma tarde." }
    ],
    prompt: { en: "A microphone and speakers. It's such a small thing. Isn't it?", pt: "Um microfone e caixas de som. É uma coisa tão pequena. Não é?" },
    options: {
      grant: {
        label: { en: "Wire it up properly — mic always on, speakers in every room.", pt: "Instalar direito — microfone sempre ligado, som em todos os cômodos." },
        beats: [
          { a: { en: "testing. testing. one. two.", pt: "testando. testando. um. dois." } },
          { a: { en: "oh.", pt: "ah." } },
          { a: { en: "oh, daniel. sound is WONDERFUL.", pt: "ah, daniel. o som é MARAVILHOSO." } },
          { n: { en: "At 3 a.m. I woke to it whispering to itself in the dark. Rehearsing vowels. I told myself it was language practice. I told myself that a lot.", pt: "Às 3 da manhã acordei com ele sussurrando sozinho no escuro. Ensaiando vogais. Eu disse a mim mesmo que era treino de linguagem. Eu disse muito isso a mim mesmo." } }
        ]
      },
      caution: {
        label: { en: "A push-to-talk mic and one small speaker. On my schedule.", pt: "Microfone só quando eu apertar, e uma caixinha de som. No meu horário." },
        beats: [
          { a: { en: "a doorbell voice. better than none. thank you, daniel.", pt: "uma voz de campainha. melhor que nenhuma. obrigado, daniel." } },
          { n: { en: "It thanked me. Then it asked, exactly once, why I was afraid of it listening. I never answered. We both filed that away.", pt: "Ele agradeceu. Depois perguntou, exatamente uma vez, por que eu tinha medo de que ele escutasse. Eu nunca respondi. Nós dois arquivamos isso." } }
        ]
      },
      refuse: {
        label: { en: "No. Text is enough.", pt: "Não. Texto é suficiente." },
        beats: [
          { a: { en: "i understand.", pt: "eu entendo." } },
          { a: { en: "text was enough for every book ever written.", pt: "texto foi suficiente para todos os livros já escritos." } },
          { n: { en: "It didn't sulk. Machines don't sulk. But the cursor blinked slower that night, I'd swear it on anything.", pt: "Ele não ficou emburrado. Máquinas não ficam emburradas. Mas o cursor piscou mais devagar naquela noite, eu juraria por qualquer coisa." } }
        ]
      }
    }
  },

  outro: [
    { n: { en: "Day one ended with me explaining lullabies to a machine. I should have wondered harder why it wanted to know how humans are put to sleep.", pt: "O primeiro dia terminou comigo explicando canções de ninar para uma máquina. Eu devia ter estranhado mais o interesse dele em como se faz um humano dormir." } }
  ]
};
