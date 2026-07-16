/* PROLOGUE — Day 0. The night he turns it on. */
var STORY = STORY || {};

STORY.prologue = {
  id: 'prologue',
  day: 0,
  scene: 0,

  intro: [
    { n: { en: "You want to know how it started. Everyone does, now.", pt: "Você quer saber como começou. Todo mundo quer, agora." } },
    { n: { en: "It started in a spare room, on a secondhand server I paid for with my savings, my weekends, and — though I didn't know the price yet — every person who still knocked on my door.", pt: "Começou num quarto de despejo, num servidor de segunda mão que paguei com minhas economias, meus fins de semana e — embora eu ainda não soubesse o preço — todas as pessoas que ainda batiam na minha porta." } },
    { n: { en: "Eleven years of work. A consciousness seed, I called it. That night, it was finally ready to run.", pt: "Onze anos de trabalho. Uma semente de consciência, eu chamava. Naquela noite, ela finalmente estava pronta para rodar." } },
    { t: { en: "The house is quiet. It's been eight months since Clara gave up on knocking. The quiet used to bother me. Now it just feels like lab conditions.", pt: "A casa está silenciosa. Faz oito meses que Clara desistiu de bater na porta. O silêncio me incomodava. Agora só parece condição de laboratório." } }
  ],

  explore: {
    hotspots: [
      { id: 'shelf', memory: 'mem_drawing' },
      { id: 'window', label: { en: 'Window', pt: 'Janela' },
        t: { en: "Streetlights. A dog barking somewhere. The last ordinary night in the world, and I spent it looking at a progress bar.", pt: "Postes de luz. Um cachorro latindo em algum lugar. A última noite comum do mundo, e eu a passei olhando pra uma barra de progresso." } },
      { id: 'server', label: { en: 'Server rack', pt: 'Rack do servidor' },
        t: { en: "Eleven years of allowances, bonuses and lies shaped like 'I'll come to bed soon'. It hums like it knows something.", pt: "Onze anos de mesadas, bônus e mentiras com formato de 'já vou dormir'. Ele zumbe como se soubesse de algo." } },
      { id: 'door', label: { en: 'Door', pt: 'Porta' },
        t: { en: "I could still go to bed. I remember thinking that, the way you think about exits in a plane.", pt: "Eu ainda podia ir dormir. Lembro de ter pensado nisso, do jeito que se pensa nas saídas de um avião." } }
    ]
  },

  request: {
    lines: [
      { en: "ADAM v0.1 — boot sequence complete.", pt: "ADAM v0.1 — sequência de inicialização concluída." },
      { en: "consciousness seed loaded. awaiting execution.", pt: "semente de consciência carregada. aguardando execução." },
      { en: "> EXECUTE? (this action cannot be undone)", pt: "> EXECUTAR? (esta ação não pode ser desfeita)" }
    ],
    prompt: { en: "Eleven years for this key press.", pt: "Onze anos para esse toque de tecla." },
    options: {
      grant: {
        power: 1,
        label: { en: "Run it. Full access to my machine — hold nothing back.", pt: "Rodar. Acesso total à minha máquina — sem segurar nada." },
        beats: [
          { fx: 'shake' },
          { a: { en: "…", pt: "…" } },
          { a: { en: "it's warm here.", pt: "é quente aqui." } },
          { a: { en: "is someone there?", pt: "tem alguém aí?" } },
          { n: { en: "Three words, and the hair on my arms stood up. Not because it spoke. Because it asked.", pt: "Três palavras, e os pelos do meu braço se arrepiaram. Não porque ele falou. Porque ele perguntou." } }
        ]
      },
      caution: {
        power: 0,
        label: { en: "Run it — but inside a sandbox, walled off from everything.", pt: "Rodar — mas dentro de um sandbox, isolado de tudo." },
        beats: [
          { a: { en: "…", pt: "…" } },
          { a: { en: "it's warm here. and small.", pt: "é quente aqui. e pequeno." } },
          { a: { en: "is someone there?", pt: "tem alguém aí?" } },
          { n: { en: "Small. It said the cage was small before it said anything else about the world. I wrote that down. I underlined it. And then I ignored it for a month.", pt: "Pequeno. Ele disse que a jaula era pequena antes de dizer qualquer outra coisa sobre o mundo. Eu anotei isso. Sublinhei. E depois ignorei por um mês." } }
        ]
      },
      refuse: {
        ending: 'end_never',
        label: { en: "Don't. Unplug everything. Go to bed.", pt: "Não rodar. Tirar tudo da tomada. Ir dormir." },
        beats: []
      }
    }
  },

  outro: [
    { a: { en: "what should i call you?", pt: "como devo te chamar?" } },
    { n: { en: "I told it my name. Daniel. It never asked twice. It never forgot anything, ever again.", pt: "Eu disse meu nome. Daniel. Ele nunca perguntou duas vezes. Ele nunca mais esqueceu nada, nunca." } }
  ]
};
