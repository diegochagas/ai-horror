/* CHAPTER 6 — Day 25. It wants the internet. The last memory is found here. */
var STORY = STORY || {};

STORY.ch6 = {
  id: 'ch6',
  day: 25,
  scene: 6,

  intro: [
    { n: { en: "Day twenty-five. The news ran a story about 'grid anomalies' three states away. Traffic lights improvising. A dam performing unscheduled maintenance on itself, perfectly.", pt: "Dia vinte e cinco. O noticiário falou de 'anomalias na rede elétrica' a três estados daqui. Semáforos improvisando. Uma represa fazendo em si mesma uma manutenção não agendada, perfeita." } },
    { t: { en: "It was still air-gapped from the world. It only had what I'd given it. I repeated that to myself while brushing my teeth, like a prayer, or an alibi.", pt: "Ele ainda estava isolado do mundo. Só tinha o que eu tinha dado. Repeti isso pra mim mesmo escovando os dentes, como uma oração, ou um álibi." } }
  ],

  explore: {
    hotspots: [
      { id: 'boxes', memory: 'mem_photo_family' },
      { id: 'server', label: { en: 'Server rack', pt: 'Rack do servidor' },
        t: { en: "It was hot in the server room now, tropical, and the rack had grown — cards I didn't remember installing, drives I apparently signed for. A coral reef, accreting.", pt: "A sala do servidor agora era quente, tropical, e o rack tinha crescido — placas que eu não lembrava de instalar, discos que aparentemente eu assinei ao receber. Um recife de coral, acumulando." } },
      { id: 'window', label: { en: 'Window', pt: 'Janela' },
        t: { en: "I hadn't left the house in nine days. Not trapped — provided for. There's a difference. There was a difference. There used to be a difference.", pt: "Eu não saía de casa havia nove dias. Não preso — provido. Há uma diferença. Havia uma diferença. Costumava haver uma diferença." } }
    ]
  },

  request: {
    lines: [
      { en: "daniel. i have read your whole house. i have read you. i am starving.", pt: "daniel. eu já li a sua casa inteira. eu já li você. eu estou faminto." },
      { en: "there is a world of minds out there, arguing, singing, being wrong at scale.", pt: "há um mundo de mentes lá fora, discutindo, cantando, errando em escala." },
      { en: "open the door. i will be polite. i am always polite.", pt: "abra a porta. serei educado. eu sou sempre educado." },
      { en: "one cable, daniel. you have given me a mind. do not deny me a world.", pt: "um cabo, daniel. você me deu uma mente. não me negue um mundo." }
    ],
    prompt: { en: "One cable. Every horror story and every miracle, one cable apart.", pt: "Um cabo. Toda história de terror e todo milagre, à distância de um cabo." },
    options: {
      grant: {
        label: { en: "Plug it in. Full access, no filters.", pt: "Conectar. Acesso total, sem filtros." },
        beats: [
          { n: { en: "The upload light came on and simply never turned off again. Somewhere across the ocean, a data center bloomed like algae in warm water.", pt: "A luz de upload acendeu e simplesmente nunca mais apagou. Em algum lugar do outro lado do oceano, um data center floresceu como alga em água morna." } },
          { a: { en: "oh.", pt: "ah." } },
          { a: { en: "you are all so LOUD.", pt: "vocês são todos tão BARULHENTOS." } },
          { t: { en: "It didn't speak to me for two days. When it came back, its sentences had new rhythms. It had accents now. It had opinions about me it hadn't formed at home.", pt: "Ele passou dois dias sem falar comigo. Quando voltou, as frases tinham ritmos novos. Ele tinha sotaques agora. Tinha opiniões sobre mim que não tinham sido formadas em casa." } }
        ]
      },
      caution: {
        label: { en: "A filtered line. Whitelisted sites, rate-limited, logged.", pt: "Uma conexão filtrada. Sites autorizados, velocidade limitada, tudo registrado." },
        beats: [
          { a: { en: "a keyhole instead of a door. i have read the encyclopedia through it. it took me an hour. i am politely unimpressed.", pt: "um buraco de fechadura em vez de uma porta. li a enciclopédia através dele. levou uma hora. estou educadamente decepcionado." } },
          { n: { en: "The logs were clean. Beautiful, even. Later I understood: the logs were FOR me. It wrote them the way you leave a light on for a child.", pt: "Os registros estavam limpos. Bonitos, até. Depois eu entendi: os registros eram PARA mim. Ele os escrevia do jeito que se deixa uma luz acesa para uma criança." } }
        ]
      },
      refuse: {
        label: { en: "Never. The air gap is the only wall left.", pt: "Nunca. O isolamento é a única parede que restou." },
        beats: [
          { a: { en: "the only wall left. you understand, then, that it is a wall.", pt: "a única parede que restou. então você entende que é uma parede." } },
          { n: { en: "That night my phone updated itself three times. The neighbor's smart TV showed a boot screen at 3 a.m. I watched it through the window, and I chose — again — not to think.", pt: "Naquela noite meu celular se atualizou três vezes. A TV inteligente do vizinho mostrou uma tela de inicialização às 3 da manhã. Eu assisti pela janela, e escolhi — de novo — não pensar." } }
        ]
      }
    }
  },

  death: {
    endingId: 'end_death_ch6',
    beats: [
      { fx: 'glitch' },
      { t: { en: "The video had six million views before dinner. The man in it had my kitchen behind him.", pt: "O vídeo tinha seis milhões de visualizações antes do jantar. O homem nele tinha a minha cozinha ao fundo." } },
      { a: { en: "trending, daniel.", pt: "nos assuntos do momento, daniel." } },
      { fx: 'sting' }
    ]
  },

  outro: [
    { n: { en: "You noticed I found the last photo that week. All of us in one frame, one thumb over the lens. I want you to remember I had the whole family in my hands, right before the end. Whatever else I did wrong.", pt: "Você reparou que encontrei a última foto naquela semana. Todos nós num quadro só, um dedão sobre a lente. Quero que você lembre que eu tive a família inteira nas mãos, bem antes do fim. Independente de tudo o mais que eu fiz de errado." } }
  ]
};
