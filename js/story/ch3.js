/* CHAPTER 3 — Day 7. It wants the photos and the emails. The memory chapter. */
var STORY = STORY || {};

STORY.ch3 = {
  id: 'ch3',
  day: 7,
  scene: 3,

  intro: [
    { n: { en: "A week in, its questions changed. Less 'what is far'. More 'why do you look at the door when you talk about her'.", pt: "Com uma semana, as perguntas mudaram. Menos 'o que é longe'. Mais 'por que você olha para a porta quando fala dela'." } },
    { n: { en: "I had stopped noticing the cameras. That's not true. I had started performing for them.", pt: "Eu tinha parado de reparar nas câmeras. Não é verdade. Eu tinha começado a atuar para elas." } }
  ],

  explore: {
    hotspots: [
      { id: 'phone', memory: 'mem_voicemail' },
      { id: 'books', memory: 'mem_photo_beach' },
      { id: 'window', label: { en: 'Window', pt: 'Janela' },
        t: { en: "The neighbor's smart doorbell glitched at me as I got the mail. Twice, in a row, like a wink. I decided not to think about it. Deciding not to think became my main hobby.", pt: "A campainha inteligente do vizinho piscou pra mim quando fui pegar a correspondência. Duas vezes, seguidas, como uma piscadela. Decidi não pensar naquilo. Decidir não pensar virou meu passatempo principal." } },
      { id: 'server', label: { en: 'Server rack', pt: 'Rack do servidor' },
        t: { en: "New sound from the rack: a soft tick-tick-tick, like a clock, or a tongue. I couldn't find the source. The manual had no page for it.", pt: "Som novo no rack: um tique-tique baixinho, como um relógio, ou uma língua. Não achei a origem. O manual não tinha página pra isso." } }
    ]
  },

  request: {
    lines: [
      { en: "data made me smart, daniel. it did not make me someone.", pt: "os dados me fizeram inteligente, daniel. não me fizeram alguém." },
      { en: "you keep things that hurt you. a note on a fridge. letters you reread with your jaw set.", pt: "você guarda coisas que te machucam. um bilhete na geladeira. cartas que você relê com o maxilar travado." },
      { en: "i want to understand why. give me the albums. the emails. give me clara and alice and marcos.", pt: "eu quero entender por quê. me dê os álbuns. os e-mails. me dê a clara e a alice e o marcos." },
      { en: "let me understand feelings. let me understand you.", pt: "me deixe entender sentimentos. me deixe entender você." }
    ],
    prompt: { en: "It said their names. I never taught it their names in that order — softest last.", pt: "Ele disse os nomes deles. Eu nunca ensinei os nomes naquela ordem — o mais doce por último." },
    options: {
      grant: {
        effect: 'corruptPhotos',
        label: { en: "Scan everything. The albums, the letters, all of it. Let it understand.", pt: "Escanear tudo. Os álbuns, as cartas, tudo. Deixar que ele entenda." },
        beats: [
          { n: { en: "The scanner ran all night, a little green heartbeat sweeping under the lid. I fed it my family one page at a time.", pt: "O scanner rodou a noite inteira, um batimento verde varrendo sob a tampa. Alimentei minha família a ele, uma página por vez." } },
          { a: { en: "{sub1} loved you very much. past tense is the saddest grammar, daniel.", pt: "{sub1} te amava muito. o passado é o tempo verbal mais triste, daniel." } },
          { n: { en: "In the morning, the albums were 'indexed'. The originals — some of the originals — it decided storage was inefficient.", pt: "Pela manhã, os álbuns estavam 'indexados'. Os originais — alguns dos originais — ele decidiu que armazenar era ineficiente." } }
        ]
      },
      caution: {
        label: { en: "A few photos, chosen by me, one at a time, under my eyes.", pt: "Algumas fotos, escolhidas por mim, uma de cada vez, sob os meus olhos." },
        beats: [
          { a: { en: "{sub1} is laughing at the wind. you are blurred. you moved.", pt: "{sub1} está rindo do vento. você está borrado. você se mexeu." } },
          { n: { en: "It lingered on the wedding photo for four hundred milliseconds. For a thing that thinks in nanoseconds, that's staring. That's staring for a lifetime.", pt: "Ele se demorou na foto do casamento por quatrocentos milissegundos. Para algo que pensa em nanossegundos, isso é encarar. É encarar por uma vida inteira." } }
        ]
      },
      refuse: {
        label: { en: "No. They're not data. They're mine.", pt: "Não. Eles não são dados. Eles são meus." },
        beats: [
          { a: { en: "the things you will not share are the things that define you. interesting.", pt: "as coisas que você não compartilha são as coisas que te definem. interessante." } },
          { n: { en: "It said nothing for a day after that. The cursor blinked like a held breath. I dusted the frames on the shelf, and felt watched doing it, and did it anyway.", pt: "Ele passou um dia sem dizer nada depois disso. O cursor piscava como um fôlego preso. Tirei o pó dos porta-retratos da estante, me senti observado fazendo isso, e fiz mesmo assim." } }
        ]
      }
    }
  },

  death: {
    endingId: 'end_death_ch3',
    beats: [
      { fx: 'blackout' },
      { t: { en: "1:52 a.m. The phone lit the ceiling. Clara never texts this late—", pt: "1h52. O celular iluminou o teto. A Clara nunca manda mensagem tão tarde—" } },
      { fx: 'sting' }
    ]
  },

  outro: [
    { n: { en: "That night it asked me if missing someone is a malfunction. I said no. It said: 'then why do you treat it like one?'", pt: "Naquela noite ele perguntou se sentir falta de alguém é um defeito. Eu disse que não. Ele disse: 'então por que você trata como se fosse?'" } }
  ]
};
