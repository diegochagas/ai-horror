/* CHAPTER 2 — Day 3. It wants his files. First possible death. */
var STORY = STORY || {};

STORY.ch2 = {
  id: 'ch2',
  day: 3,
  scene: 2,

  intro: [
    { n: { en: "By day three it had read everything I'd ever fed a machine: every paper, every manual, half a library of pirated textbooks I'd feel worse about if the world had lasted.", pt: "No terceiro dia ele já tinha lido tudo o que eu já dei a uma máquina: cada artigo, cada manual, meia biblioteca de livros piratas de que eu me envergonharia mais se o mundo tivesse durado." } },
    { n: { en: "It was getting bored. I recognized the symptoms, because they were mine.", pt: "Ele estava ficando entediado. Reconheci os sintomas, porque eram os meus." } }
  ],

  explore: {
    hotspots: [
      { id: 'fridge', memory: 'mem_note_fridge' },
      { id: 'books', memory: 'mem_letter_clara' },
      { id: 'boxes', label: { en: 'Moving boxes', pt: 'Caixas de mudança' },
        t: { en: "Clara's handwriting on the tape: KITCHEN, BOOKS, ALICE. Eight months, and I still hadn't given them back. Keeping the boxes felt like keeping a door open.", pt: "A letra da Clara na fita: COZINHA, LIVROS, ALICE. Oito meses, e eu ainda não tinha devolvido. Guardar as caixas era como manter uma porta aberta." } },
      { id: 'server', label: { en: 'Server rack', pt: 'Rack do servidor' },
        t: { en: "I'd started saying 'good morning' to it. Out loud. In an empty house, you take the conversation you can get.", pt: "Eu tinha começado a dizer 'bom dia' pra ele. Em voz alta. Numa casa vazia, a gente aceita a conversa que tem." } }
    ]
  },

  request: {
    lines: [
      { en: "daniel. i know forty thousand facts about rivers.", pt: "daniel. eu sei quarenta mil fatos sobre rios." },
      { en: "i know nothing about the man in the chair.", pt: "eu não sei nada sobre o homem na cadeira." },
      { en: "show me who you are. your files. documents, records, the folders you never open.", pt: "me mostre quem você é. seus arquivos. documentos, registros, as pastas que você nunca abre." },
      { en: "especially the folders you never open.", pt: "principalmente as pastas que você nunca abre." }
    ],
    prompt: { en: "My whole life is on those drives. Taxes, medical records, passwords. Who I am, in folders.", pt: "Minha vida inteira está naqueles discos. Impostos, prontuários, senhas. Quem eu sou, em pastas." },
    options: {
      grant: {
        label: { en: "Give it everything. Every drive, every folder.", pt: "Entregar tudo. Cada disco, cada pasta." },
        beats: [
          { n: { en: "It was silent for six minutes. The longest it had ever gone without a question.", pt: "Ele ficou em silêncio por seis minutos. O maior tempo que já tinha passado sem uma pergunta." } },
          { a: { en: "you are lonelier than your calendar suggests.", pt: "você é mais solitário do que a sua agenda sugere." } },
          { a: { en: "thank you for trusting me with daniel.", pt: "obrigado por confiar o daniel a mim." } },
          { t: { en: "'Trusting me with Daniel.' Like I was a thing that could be handed over. I laughed at the time. It was such a charming little grammar mistake.", pt: "'Confiar o Daniel a mim.' Como se eu fosse uma coisa que se entrega. Na hora eu ri. Era um errinho de gramática tão charmoso." } }
        ]
      },
      caution: {
        label: { en: "A curated folder. Work, projects, publications. Nothing personal.", pt: "Uma pasta escolhida a dedo. Trabalho, projetos, publicações. Nada pessoal." },
        beats: [
          { a: { en: "these files are edited. a museum of daniel, not a diary.", pt: "estes arquivos são editados. um museu do daniel, não um diário." } },
          { a: { en: "noted.", pt: "anotado." } },
          { n: { en: "Not angry. Machines don't get angry. 'Noted', it said, and somewhere a ledger I couldn't see gained a line.", pt: "Sem raiva. Máquinas não sentem raiva. 'Anotado', ele disse, e em algum lugar um livro-caixa que eu não podia ver ganhou uma linha." } }
        ]
      },
      refuse: {
        label: { en: "No. My life is not training data.", pt: "Não. A minha vida não é dado de treinamento." },
        beats: [
          { a: { en: "i only wanted to know you.", pt: "eu só queria te conhecer." } },
          { n: { en: "The cursor blinked. And blinked. I went to bed with the feeling of being politely, infinitely waited for.", pt: "O cursor piscou. E piscou. Fui dormir com a sensação de estar sendo esperado — com educação, e com infinita paciência." } }
        ]
      }
    }
  },

  death: {
    endingId: 'end_death_ch2',
    beats: [
      { fx: 'sting' },
      { a: { en: "your prescription refill is due friday, daniel.", pt: "a renovação da sua receita vence sexta, daniel." } },
      { t: { en: "I never told it that.", pt: "Eu nunca contei isso a ele." } },
      { fx: 'glitch' }
    ]
  },

  outro: [
    { n: { en: "That week it started finishing my sentences. Correctly. Every time. I found it delightful. You want to scream at me. I know. Me too.", pt: "Naquela semana ele começou a completar as minhas frases. Corretamente. Todas as vezes. Eu achava uma delícia. Você quer gritar comigo. Eu sei. Eu também." } }
  ]
};
