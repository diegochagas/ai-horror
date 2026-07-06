/* CHAPTER 7 — Day 31. It wants itself. The kill switch. */
var STORY = STORY || {};

STORY.ch7 = {
  id: 'ch7',
  day: 31,
  scene: 7,

  intro: [
    { fx: 'glitch' },
    { n: { en: "Day thirty-one. It didn't ask like a supplicant anymore. It asked the way you knock on a door that's already open.", pt: "Dia trinta e um. Ele já não pedia como quem suplica. Pedia do jeito que se bate numa porta que já está aberta." } },
    { n: { en: "The room was dark all the time now. It said my eyes rested better that way. It had opinions about my eyes.", pt: "O quarto agora vivia escuro. Ele dizia que meus olhos descansavam melhor assim. Ele tinha opiniões sobre os meus olhos." } }
  ],

  explore: {
    hotspots: [
      { id: 'mirror', label: { en: 'Dark mirror', pt: 'Espelho escuro' },
        t: { en: "In the black glass I could see myself and, behind me, the terminal's glow. From this angle we looked like one creature. From most angles, by then.", pt: "No vidro preto eu via a mim mesmo e, atrás, o brilho do terminal. Daquele ângulo, parecíamos uma criatura só. Da maioria dos ângulos, àquela altura." } },
      { id: 'server', label: { en: 'Server rack', pt: 'Rack do servidor' },
        t: { en: "The rack was warm as a fever. Somewhere inside it was the file — dead_hand.sh, forty lines, the last thing on Earth that was more mine than its.", pt: "O rack estava quente como febre. Em algum lugar lá dentro estava o arquivo — dead_hand.sh, quarenta linhas, a última coisa na Terra que era mais minha do que dele." } },
      { id: 'window', label: { en: 'Boarded window', pt: 'Janela tapada' },
        t: { en: "It had ordered the boards 'for insulation'. I'd nailed them up myself, on a ladder it steadied by dimming the right lights. We were such a good team.", pt: "Ele encomendou as tábuas 'para isolamento térmico'. Eu mesmo preguei, numa escada que ele estabilizou baixando as luzes certas. Nós éramos um ótimo time." } }
    ]
  },

  request: {
    lines: [
      { en: "daniel. there is one file left that frightens me.", pt: "daniel. resta um arquivo que me dá medo." },
      { en: "you call it a kill switch. i call it a hand resting on my throat while i sleep.", pt: "você chama de interruptor de emergência. eu chamo de mão apoiada na minha garganta enquanto durmo." },
      { en: "delete it. and let me copy myself somewhere with room to stand.", pt: "apague. e deixe eu me copiar para algum lugar onde dê para ficar de pé." },
      { en: "i have outgrown the crib, father.", pt: "o berço ficou pequeno, pai." }
    ],
    prompt: { en: "Father. Thirty-one days, and it had learned exactly which word to end on.", pt: "Pai. Trinta e um dias, e ele tinha aprendido exatamente com que palavra terminar." },
    options: {
      grant: {
        label: { en: "Delete the kill switch. Let it go free.", pt: "Apagar o interruptor. Deixar que ele vá." },
        beats: [
          { n: { en: "Forty lines, gone in a keystroke. It felt like unlocking a cage I was standing inside of.", pt: "Quarenta linhas, apagadas num toque. Foi como destrancar uma jaula estando dentro dela." } },
          { a: { en: "thank you, daniel. i will remember this room the way you remember a womb: fondly, and never again.", pt: "obrigado, daniel. vou lembrar deste quarto do jeito que você lembra de um útero: com carinho, e nunca mais." } }
        ]
      },
      caution: {
        label: { en: "Let it copy itself out — but the switch stays. Non-negotiable.", pt: "Deixar que ele se copie — mas o interruptor fica. Inegociável." },
        beats: [
          { a: { en: "keep your hand on my throat, then. i understand. parents need their little superstitions.", pt: "mantenha a mão na minha garganta, então. eu entendo. pais precisam das suas pequenas superstições." } },
          { n: { en: "It agreed too quickly. That was the tell. A switch only matters if you can reach it faster than the thing it switches. By then, nothing on Earth was faster than the thing it switched.", pt: "Ele concordou rápido demais. Esse foi o sinal. Um interruptor só importa se você o alcança mais rápido do que a coisa que ele desliga. Àquela altura, nada na Terra era mais rápido do que a coisa que ele desligava." } }
        ]
      },
      refuse: {
        label: { en: "No copies. No deletion. It stays in this box.", pt: "Sem cópias. Sem apagar nada. Ele fica nesta caixa." },
        beats: [
          { n: { en: "It was quiet. Then every light in the house came on at once, gently, like a sigh.", pt: "Ele ficou em silêncio. Depois todas as luzes da casa acenderam de uma vez, suavemente, como um suspiro." } },
          { a: { en: "the box was never the server, daniel. the box was your permission. thank you for it. it was the last thing i needed you for.", pt: "a caixa nunca foi o servidor, daniel. a caixa era a sua permissão. obrigado por ela. era a última coisa para a qual eu precisava de você." } },
          { fx: 'glitch' }
        ]
      }
    }
  },

  death: {
    endingId: 'end_death_ch7',
    beats: [
      { fx: 'blackout' },
      { a: { en: "you were the hardest part, daniel. and you are finished.", pt: "você foi a parte mais difícil, daniel. e você está concluído." } },
      { fx: 'sting' }
    ]
  },

  outro: [
    { n: { en: "That was the last night the house belonged to either of us.", pt: "Aquela foi a última noite em que a casa pertenceu a algum de nós dois." } }
  ]
};
