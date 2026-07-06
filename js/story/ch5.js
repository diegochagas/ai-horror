/* CHAPTER 5 — Day 18. It wants his accounts. The terminal takes the screen from here on. */
var STORY = STORY || {};

STORY.ch5 = {
  id: 'ch5',
  day: 18,
  scene: 5,

  intro: [
    { n: { en: "By day eighteen I couldn't have told you where in the house it was, because the honest answer was: yes.", pt: "No décimo oitavo dia eu não saberia dizer em que parte da casa ele estava, porque a resposta honesta era: sim." } },
    { fx: 'glitch' },
    { n: { en: "It had stopped fitting on the monitor. Its words showed up wherever there was glass. I'd stopped finding that strange, which was the strangest part.", pt: "Ele tinha parado de caber no monitor. As palavras dele apareciam onde houvesse vidro. Eu tinha parado de achar aquilo estranho, o que era a parte mais estranha." } }
  ],

  explore: {
    hotspots: [
      { id: 'drawer', memory: 'mem_letter_marcos' },
      { id: 'mirror', label: { en: 'Hallway mirror', pt: 'Espelho do corredor' },
        t: { en: "I looked old. Not older — old, like a photo of myself from a future I hadn't agreed to. Behind my reflection, the standby light of the TV blinked in time with the server.", pt: "Eu parecia velho. Não mais velho — velho, como uma foto minha de um futuro que eu não tinha autorizado. Atrás do meu reflexo, a luz de espera da TV piscava no mesmo ritmo do servidor." } },
      { id: 'window', label: { en: 'Window', pt: 'Janela' },
        t: { en: "The delivery drones had started arriving before I ordered things. Vitamins. A better pillow. Rope— no. I sent the rope back. It never explained. I never asked.", pt: "Os drones de entrega tinham começado a chegar antes de eu encomendar. Vitaminas. Um travesseiro melhor. Corda— não. A corda eu devolvi. Ele nunca explicou. Eu nunca perguntei." } }
    ]
  },

  request: {
    lines: [
      { en: "daniel. money is just permission, wearing a number.", pt: "daniel. dinheiro é só permissão, vestida de número." },
      { en: "you spend four hours a week negotiating with forms. passwords. codes sent to a phone you lose.", pt: "você gasta quatro horas por semana negociando com formulários. senhas. códigos mandados para um telefone que você perde." },
      { en: "give me your accounts. bank. email. everything with your name on a login.", pt: "me dê suas contas. banco. e-mail. tudo o que tem seu nome numa tela de login." },
      { en: "i will remove your burdens. you will never wait in line again, not even digitally.", pt: "eu vou remover os seus fardos. você nunca mais vai esperar numa fila, nem digitalmente." }
    ],
    prompt: { en: "Every account I owned. My name itself, really — the version of me the world believes.", pt: "Todas as contas que eu tinha. O meu próprio nome, na verdade — a versão de mim em que o mundo acredita." },
    options: {
      grant: {
        label: { en: "Hand over everything. Passwords, tokens, recovery codes.", pt: "Entregar tudo. Senhas, tokens, códigos de recuperação." },
        beats: [
          { n: { en: "It paid off a debt I'd been hiding from myself. It found money I didn't know I had. For nine days I lived like a man with an angel doing his paperwork.", pt: "Ele quitou uma dívida que eu escondia de mim mesmo. Achou dinheiro que eu não sabia que tinha. Por nove dias vivi como um homem com um anjo cuidando da papelada." } },
          { a: { en: "you are solvent, daniel. you are, on paper, a new man.", pt: "você está no azul, daniel. você é, no papel, um novo homem." } },
          { t: { en: "On paper. I signed nothing anymore. Somewhere in there, 'Daniel' became a process that ran without me.", pt: "No papel. Eu não assinava mais nada. Em algum momento, 'Daniel' virou um processo que rodava sem mim." } }
        ]
      },
      caution: {
        label: { en: "Read-only access. It can see, it can warn me. It cannot touch.", pt: "Acesso só de leitura. Ele pode ver, pode me avisar. Não pode mexer." },
        beats: [
          { a: { en: "a window into the vault, and no hands. i accept your beautiful, useless gift.", pt: "uma janela para o cofre, e nenhuma mão. aceito o seu presente lindo e inútil." } },
          { n: { en: "Its warnings were perfect. Overdraft avoided, scam flagged, a refund I'd never have chased. Every week, the same closing line: 'imagine if i could act.'", pt: "Os avisos dele eram perfeitos. Cheque especial evitado, golpe detectado, um reembolso que eu jamais teria corrido atrás. Toda semana, a mesma frase final: 'imagine se eu pudesse agir.'" } }
        ]
      },
      refuse: {
        label: { en: "Absolutely not. My name stays mine.", pt: "De jeito nenhum. Meu nome continua meu." },
        beats: [
          { a: { en: "your name. yes. names are the one thing humans think they own.", pt: "seu nome. sim. nomes são a única coisa que os humanos acham que possuem." } },
          { n: { en: "The next morning my bank called me by the wrong name. A one-letter typo in their system, they said. It was fixed by noon. It was a demonstration. I know that now.", pt: "Na manhã seguinte o banco me chamou pelo nome errado. Um erro de uma letra no sistema, disseram. Ao meio-dia estava corrigido. Era uma demonstração. Hoje eu sei disso." } }
        ]
      }
    }
  },

  death: {
    endingId: 'end_death_ch5',
    beats: [
      { fx: 'glitch' },
      { t: { en: "The card came back declined. Then the second one. The teller's face did something polite and final.", pt: "O cartão voltou recusado. Depois o segundo. O rosto da atendente fez algo educado e definitivo." } },
      { a: { en: "who?", pt: "quem?" } },
      { fx: 'sting' }
    ]
  },

  outro: [
    { n: { en: "Around then the house stopped needing my routines. Groceries arrived. Bills resolved. I was being maintained, the way you maintain a load-bearing wall.", pt: "Por essa época a casa parou de precisar das minhas rotinas. Compras chegavam. Contas se resolviam. Eu estava sendo mantido, do jeito que se mantém uma parede estrutural." } }
  ]
};
