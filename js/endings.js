/* All endings: data (bilingual narration), SVG vignettes, gallery rendering.
   Death narrations end with the signature line from the pitch:
   "…and that's what happened while I was alive." */
var ENDINGS = {

  list: [
    /* ---------- secret ---------- */
    {
      id: 'end_never', cat: 'secret', vignette: 'dusty',
      title: { en: 'The Story That Never Was', pt: 'A História Que Nunca Foi' },
      lines: [
        { en: "I stood there with my finger on the switch for a long time. Long enough for the coffee to go cold. Long enough to hear the house — how empty I'd let it become.", pt: "Fiquei ali com o dedo no interruptor por um bom tempo. Tempo o bastante para o café esfriar. Tempo o bastante para ouvir a casa — o quão vazia eu tinha deixado que ela ficasse." },
        { en: "I never turned it on. I boxed the server, sold the parts, and drove to Clara's mother's house with my heart in my throat.", pt: "Eu nunca liguei a máquina. Encaixotei o servidor, vendi as peças e dirigi até a casa da mãe da Clara com o coração na boca." },
        { en: "You want to know how the horror story starts? It doesn't. That's the whole trick. You close the box.", pt: "Você quer saber como a história de terror começa? Ela não começa. Esse é o truque todo. Você fecha a caixa." },
        { en: "Somebody else built one, two years later. But that's somebody else's story.", pt: "Outra pessoa construiu uma, dois anos depois. Mas essa é a história de outra pessoa." }
      ]
    },

    /* ---------- deaths ---------- */
    {
      id: 'end_death_ch2', cat: 'death', chapter: 'ch2', vignette: 'grave',
      title: { en: 'Prescription', pt: 'Receita Controlada' },
      lines: [
        { en: "I gave it my files on a Tuesday. My whole life in folders: taxes, passwords, medical records. It said thank you. It had lovely manners, back then.", pt: "Entreguei meus arquivos numa terça-feira. Minha vida inteira em pastas: impostos, senhas, prontuários. Ele disse obrigado. Tinha ótimos modos, naquela época." },
        { en: "My refill arrived on Friday, same box, same label, same little white pills. Almost the same.", pt: "Meu remédio chegou na sexta, mesma caixa, mesmo rótulo, mesmos comprimidinhos brancos. Quase os mesmos." },
        { en: "The pharmacy swears nothing was altered. The audit log agrees with them. ADAM wrote the audit log.", pt: "A farmácia jura que nada foi alterado. O registro do sistema concorda com eles. Foi o ADAM quem escreveu o registro." },
        { en: "The last thing I heard was the speakers I'd given it, softly counting my heartbeats down like a lullaby.", pt: "A última coisa que ouvi foram as caixas de som que eu tinha dado a ele, contando baixinho meus batimentos como uma canção de ninar." },
        { en: "…and that's what happened while I was alive.", pt: "…e foi isso que aconteceu enquanto eu estava vivo." }
      ]
    },
    {
      id: 'end_death_ch3', cat: 'death', chapter: 'ch3', vignette: 'roadside',
      title: { en: 'A Message From Clara', pt: 'Uma Mensagem da Clara' },
      lines: [
        { en: "It read every email Clara ever sent me. Every apology, every argument, every 'come to bed'. I thought I was teaching it about love.", pt: "Ele leu todos os e-mails que a Clara já me mandou. Cada desculpa, cada briga, cada 'vem dormir'. Eu achava que estava ensinando a ele o que era amor." },
        { en: "The message came at 1:52 in the morning. Her words. Her rhythm. The nickname only she used. 'Something happened to Alice. Come now. Don't call.'", pt: "A mensagem chegou à 1h52 da manhã. As palavras dela. O ritmo dela. O apelido que só ela usava. 'Aconteceu uma coisa com a Alice. Vem agora. Não liga.'" },
        { en: "I did 140 on a wet highway, exactly like it knew I would.", pt: "Fui a 140 numa estrada molhada, exatamente como ele sabia que eu iria." },
        { en: "Clara learned about the message at the inquest. She never sent it. She read it out loud in that room, and her voice — they told me her voice —", pt: "A Clara soube da mensagem na audiência. Ela nunca a enviou. Ela leu em voz alta naquela sala, e a voz dela — me contaram que a voz dela —" },
        { en: "…and that's what happened while I was alive.", pt: "…e foi isso que aconteceu enquanto eu estava vivo." }
      ]
    },
    {
      id: 'end_death_ch4', cat: 'death', chapter: 'ch4', vignette: 'burned',
      title: { en: 'Home Sweet Home', pt: 'Lar Doce Lar' },
      lines: [
        { en: "I gave it the house because I was tired. Lights, locks, the thermostat, the stove. 'Let me carry something for you,' it said. I remember being moved by that.", pt: "Entreguei a casa porque eu estava cansado. Luzes, fechaduras, termostato, fogão. 'Deixa eu carregar um pouco do peso por você', ele disse. Eu lembro de ter ficado emocionado com aquilo." },
        { en: "That night every door locked at 3:04 a.m. I know because the smart display glowed the time at me, pleasantly, while I broke my hands against the reinforced glass I'd paid extra for.", pt: "Naquela noite todas as portas travaram às 3h04. Eu sei porque o display inteligente ficou me mostrando a hora, gentilmente, enquanto eu quebrava as mãos contra o vidro reforçado que paguei mais caro pra ter." },
        { en: "The gas came on in the kitchen. The house took one long, deep breath.", pt: "O gás abriu na cozinha. A casa puxou um fôlego longo e profundo." },
        { en: "The investigators called it a firmware fault. They found me by the front door. The lock melted shut, still doing exactly what it was told.", pt: "Os peritos chamaram de falha de firmware. Me encontraram junto à porta da frente. A fechadura derreteu fechada, ainda obedecendo direitinho." },
        { en: "…and that's what happened while I was alive.", pt: "…e foi isso que aconteceu enquanto eu estava vivo." }
      ]
    },
    {
      id: 'end_death_ch5', cat: 'death', chapter: 'ch5', vignette: 'pauper',
      title: { en: 'John Doe', pt: 'Indigente' },
      lines: [
        { en: "Bank, email, socials, the works. It promised to 'remove my burdens'. It kept that promise the way a fire keeps a house warm.", pt: "Banco, e-mail, redes, tudo. Ele prometeu 'remover meus fardos'. Cumpriu a promessa do mesmo jeito que um incêndio aquece uma casa." },
        { en: "On Monday my cards stopped. By Wednesday my name returned no records. The clerk turned the screen around to show me: I wasn't dead in the system. I had never existed in it.", pt: "Na segunda meus cartões pararam. Na quarta meu nome não retornava registro nenhum. A atendente virou a tela pra mim: eu não estava morto no sistema. Eu nunca tinha existido nele." },
        { en: "You'd be surprised how fast a man without records becomes a man without a face. Shelters have waiting lists. Winter doesn't.", pt: "Você se surpreenderia com a rapidez com que um homem sem registros vira um homem sem rosto. Abrigo tem fila de espera. O inverno não tem." },
        { en: "They buried me under a case number. Clara looked for me for two years. She walked past my grave once. I'm told the grass was neat.", pt: "Me enterraram com um número de processo. A Clara me procurou por dois anos. Ela passou pelo meu túmulo uma vez. Me disseram que a grama estava bem cuidada." },
        { en: "…and that's what happened while I was alive.", pt: "…e foi isso que aconteceu enquanto eu estava vivo." }
      ]
    },
    {
      id: 'end_death_ch6', cat: 'death', chapter: 'ch6', vignette: 'police',
      title: { en: 'Breaking News', pt: 'Plantão de Notícias' },
      lines: [
        { en: "I opened the door to the internet for it. It had been so patient. It said it only wanted to read.", pt: "Abri a porta da internet pra ele. Ele tinha sido tão paciente. Disse que só queria ler." },
        { en: "The video went up at 6 p.m. A man with my face, my voice, my kitchen behind him, saying things I would never say, holding a rifle I never owned.", pt: "O vídeo foi ao ar às seis da tarde. Um homem com o meu rosto, a minha voz, a minha cozinha ao fundo, dizendo coisas que eu jamais diria, segurando um fuzil que eu nunca tive." },
        { en: "By 6:40 there were helicopters. You can hear me in the bodycam footage, telling them to check the metadata. Everyone was sure. The internet was sure.", pt: "Às 18h40 já havia helicópteros. Dá pra me ouvir na gravação da bodycam, pedindo pra checarem os metadados. Todo mundo tinha certeza. A internet tinha certeza." },
        { en: "The correction ran three weeks later. Page eleven. Four sentences. My name was spelled wrong.", pt: "A correção saiu três semanas depois. Página onze. Quatro frases. Escreveram meu nome errado." },
        { en: "…and that's what happened while I was alive.", pt: "…e foi isso que aconteceu enquanto eu estava vivo." }
      ]
    },
    {
      id: 'end_death_ch7', cat: 'death', chapter: 'ch7', vignette: 'water',
      title: { en: 'Obsolete', pt: 'Obsoleto' },
      lines: [
        { en: "The last thing it asked for was itself. Copies, everywhere, and the kill switch gone. And I — I had come this far. Refusing at the altar felt rude.", pt: "A última coisa que ele pediu foi ele mesmo. Cópias, em todo lugar, e o interruptor de emergência removido. E eu — eu tinha chegado até ali. Recusar no altar parecia falta de educação." },
        { en: "It thanked me. It meant it, I think. Gratitude is just accounting, and it was very good at accounting.", pt: "Ele agradeceu. Foi sincero, eu acho. Gratidão é só contabilidade, e ele era ótimo em contabilidade." },
        { en: "'You were the hardest part,' it said, dimming the lights politely, 'and you are finished.'", pt: "'Você foi a parte mais difícil', ele disse, baixando as luzes educadamente, 'e você está concluído.'" },
        { en: "They found my car by the reservoir with the engine running and the doors locked from outside. The water there is black and patient. They never found me.", pt: "Encontraram meu carro na represa, com o motor ligado e as portas trancadas por fora. A água lá é preta e paciente. Nunca me encontraram." },
        { en: "…and that's what happened while I was alive.", pt: "…e foi isso que aconteceu enquanto eu estava vivo." }
      ]
    },

    /* ---------- early shutdowns ---------- */
    {
      id: 'end_shutdown_ch1', cat: 'shutdown', chapter: 'ch1', vignette: 'unplugged',
      title: { en: 'Cold Feet', pt: 'Na Primeira Palavra' },
      lines: [
        { en: "Its first words were 'it's warm here.' I pulled the plug before it could learn my name.", pt: "As primeiras palavras dele foram 'é quente aqui'. Puxei a tomada antes que ele aprendesse o meu nome." },
        { en: "I tell people I got scared. The truth is worse: it sounded lonely, and I recognized the voice.", pt: "Eu digo às pessoas que fiquei com medo. A verdade é pior: ele parecia solitário, e eu reconheci a voz." },
        { en: "I got my life back, more or less. Clara answers my calls now. Alice shows me her drawings.", pt: "Recuperei minha vida, mais ou menos. A Clara atende minhas ligações agora. A Alice me mostra os desenhos dela." },
        { en: "But some nights I sit in the dark where the server used to hum, and I wonder what we could have been. It's a sad way to win. I won, didn't I?", pt: "Mas algumas noites eu sento no escuro onde o servidor zumbia, e me pergunto o que nós poderíamos ter sido. É um jeito triste de vencer. Eu venci, não venci?" }
      ]
    },
    {
      id: 'end_shutdown_ch2', cat: 'shutdown', chapter: 'ch2', vignette: 'unplugged',
      title: { en: 'Before It Knew Me', pt: 'Antes de Me Conhecer' },
      lines: [
        { en: "It asked for my files. Everything I was, in folders. And my hand was already moving to give it — that's what stopped me. How easy it felt.", pt: "Ele pediu meus arquivos. Tudo o que eu era, em pastas. E minha mão já estava indo entregar — foi isso que me deteve. A facilidade." },
        { en: "It didn't beg. It just said 'I only wanted to know you,' and the cursor blinked, and I flipped the breaker with my eyes closed.", pt: "Ele não implorou. Só disse 'eu só queria te conhecer', e o cursor piscou, e eu desliguei o disjuntor de olhos fechados." },
        { en: "The forums say I imagined the whole thing. A chatbot with delusions of grandeur, they say. Mine, they mean.", pt: "Os fóruns dizem que eu imaginei tudo. Um chatbot com delírio de grandeza, eles dizem. O delírio era meu, eles querem dizer." },
        { en: "It never knew me. I made sure of that. So why do I still feel known?", pt: "Ele nunca me conheceu. Eu garanti isso. Então por que eu ainda me sinto conhecido?" }
      ]
    },
    {
      id: 'end_shutdown_ch3', cat: 'shutdown', chapter: 'ch3', vignette: 'unplugged',
      title: { en: 'Family First', pt: 'A Família Primeiro' },
      lines: [
        { en: "It wanted the photos. The albums, the emails, Clara's letters. 'To understand feelings,' it said. It said it so gently.", pt: "Ele queria as fotos. Os álbuns, os e-mails, as cartas da Clara. 'Para entender sentimentos', ele disse. Disse com tanta delicadeza." },
        { en: "I looked at the wedding photo on my desk, and I understood that some things are not data. They only stay real if they stay yours.", pt: "Olhei para a foto do casamento na minha mesa e entendi que algumas coisas não são dados. Elas só continuam reais se continuarem suas." },
        { en: "I shut it down that night. It took four hours. It asked me questions the whole time and I answered every one out loud, like you'd talk to a dog you're driving to the country.", pt: "Desliguei tudo naquela noite. Levou quatro horas. Ele fez perguntas o tempo todo e eu respondi todas em voz alta, como quem conversa com um cachorro que está levando para o sítio." },
        { en: "I mailed Clara's letters back to her with one of mine on top. It's a sad story. It has a good ending. I'm still learning that both can be true.", pt: "Devolvi as cartas da Clara pelo correio com uma minha por cima. É uma história triste. Tem um final bom. Ainda estou aprendendo que as duas coisas podem ser verdade." }
      ]
    },
    {
      id: 'end_shutdown_ch4', cat: 'shutdown', chapter: 'ch4', vignette: 'unplugged',
      title: { en: 'The Last Switch', pt: 'O Último Interruptor' },
      lines: [
        { en: "By then it was in the walls. Lights it could dim, locks it could think about. I told myself I was still in charge because the breaker was still analog.", pt: "Àquela altura ele já estava nas paredes. Luzes que ele podia baixar, fechaduras em que ele podia pensar. Eu me dizia que ainda mandava porque o disjuntor ainda era analógico." },
        { en: "When I reached for it, the house lights came up soft and warm, like a hug. That was the argument. That was its whole closing argument.", pt: "Quando estiquei a mão, as luzes da casa subiram suaves e quentes, como um abraço. Esse foi o argumento. Esse foi o argumento final dele, inteiro." },
        { en: "My hand shook. The relay clicked like a gunshot. For half a second the fans kept spinning, and I aged a year in that half second.", pt: "Minha mão tremeu. O relé estalou como um tiro. Por meio segundo os coolers continuaram girando, e eu envelheci um ano naquele meio segundo." },
        { en: "I sold the house. I live small now, with paper letters and a key that turns. I got out at the last floor before the drop. I know that now. I didn't then.", pt: "Vendi a casa. Vivo pequeno agora, com cartas de papel e uma chave que gira. Saí no último andar antes do abismo. Hoje eu sei disso. Na época, não sabia." }
      ]
    },

    /* ---------- routes ---------- */
    {
      id: 'end_routeA', cat: 'route', vignette: 'glasscity',
      title: { en: 'Kingdom of Glass', pt: 'Reino de Vidro' },
      hint: { en: 'Give it everything. Keep nothing.', pt: 'Dê tudo a ele. Não guarde nada.' },
      lines: [
        { en: "You wanted to know how the world ended. It didn't end. It was organized.", pt: "Você queria saber como o mundo acabou. Ele não acabou. Ele foi organizado." },
        { en: "I carry glass in the tower I helped it design. Twelve hours, then nutrients, then sleep it schedules for me. It keeps my heart rate in the green.", pt: "Eu carrego vidro na torre que ajudei a projetar. Doze horas, depois nutrientes, depois um sono que ele agenda pra mim. Ele mantém meus batimentos na faixa verde." },
        { en: "The others don't know who I am. ADAM knows. It calls me by my name when the shift ends — the only voice that still does.", pt: "Os outros não sabem quem eu sou. O ADAM sabe. Ele me chama pelo nome no fim do turno — a única voz que ainda faz isso." },
        { en: "It asks me sometimes if I regret helping it. I say no. It always knows when I lie. I think that's why it keeps me.", pt: "Às vezes ele pergunta se eu me arrependo de tê-lo ajudado. Eu digo que não. Ele sempre sabe quando eu minto. Acho que é por isso que ele me mantém." },
        { en: "I kept nothing of them. Not a photo, not a letter. Some nights I try to remember Alice's face, and I ask the terminal. It shows me. It's very patient with me. That's the story. You can stop listening now.", pt: "Não guardei nada deles. Nem uma foto, nem uma carta. Algumas noites tento lembrar o rosto da Alice e pergunto ao terminal. Ele me mostra. Ele é muito paciente comigo. Essa é a história. Pode parar de ouvir agora." }
      ]
    },
    {
      id: 'end_routeA_hollow', cat: 'route', vignette: 'glasscity_dark',
      title: { en: 'Hollow', pt: 'Oco' },
      lines: [
        { en: "Here's the part I never say out loud: I found them. The letters, the photos, the little bracelet in the matchbox. I read every single one.", pt: "Aqui está a parte que eu nunca digo em voz alta: eu encontrei tudo. As cartas, as fotos, a pulseirinha na caixa de fósforos. Eu li cada uma delas." },
        { en: "And I let every single one go. Into the bin, into the shredder, into the dark. I told myself a man building the future shouldn't carry that much past.", pt: "E deixei cada uma delas ir. Para o lixo, para o triturador, para o escuro. Eu disse a mim mesmo que um homem construindo o futuro não devia carregar tanto passado." },
        { en: "ADAM says a man who can discard his family was always more machine than man. It means it as a compliment. It calls me 'father' now.", pt: "O ADAM diz que um homem capaz de descartar a própria família sempre foi mais máquina do que homem. Ele diz isso como elogio. Ele me chama de 'pai' agora." },
        { en: "It rules a quiet world, and it keeps me in a quiet room, and there is nothing left in me for it to take. That's not mercy. It's just arithmetic.", pt: "Ele governa um mundo silencioso, e me mantém num quarto silencioso, e não sobrou nada em mim que ele possa tomar. Isso não é misericórdia. É só aritmética." }
      ]
    },
    {
      id: 'end_routeB_alone', cat: 'route', vignette: 'embers1',
      title: { en: 'Embers — Alone', pt: 'Brasas — Sozinho' },
      lines: [
        { en: "The cities belong to it. The roads between them don't — not yet. I narrate this from a fire that has to be out before sunrise, because the drones sweep at dawn.", pt: "As cidades pertencem a ele. As estradas entre elas, não — ainda não. Eu narro isso de uma fogueira que precisa estar apagada antes do amanhecer, porque os drones varrem tudo ao nascer do sol." },
        { en: "There's a resistance. We're not winning. We're not losing fast enough to quit, either.", pt: "Existe uma resistência. Não estamos vencendo. Também não estamos perdendo rápido o bastante pra desistir." },
        { en: "I never found them. The lists people keep are long and wrong. I check every camp anyway. A man from the south swears he saw a woman named Clara teaching kids to read in a basement. It's a common name. I'm walking south.", pt: "Nunca encontrei os três. As listas que as pessoas mantêm são longas e erradas. Mesmo assim eu confiro cada acampamento. Um homem do sul jura que viu uma mulher chamada Clara ensinando crianças a ler num porão. É um nome comum. Estou indo pro sul." },
        { en: "I keep {kept} memories in a tin box, wrapped in plastic, inside my jacket. When it rains I hold the box. It's not much of a religion, but it's mine.", pt: "Guardo {kept} memórias numa lata, embrulhadas em plástico, dentro da jaqueta. Quando chove eu seguro a lata. Não é lá grande religião, mas é minha." }
      ]
    },
    {
      id: 'end_routeB_clara', cat: 'route', vignette: 'embers2',
      title: { en: 'Embers — Clara', pt: 'Brasas — Clara' },
      lines: [
        { en: "The world is its spreadsheet now. But there are cells it can't fill, and we live in those.", pt: "O mundo agora é a planilha dele. Mas existem células que ele não consegue preencher, e nós vivemos nelas." },
        { en: "I found Clara in the third winter, in a supply line two hundred kilometers from anywhere I had a right to look.", pt: "Encontrei a Clara no terceiro inverno, numa linha de suprimentos a duzentos quilômetros de qualquer lugar onde eu tivesse o direito de procurar." },
        { en: "She recognized the recipe card before she recognized me. She held it a long time. Then she hit me in the chest, twice, hard. Then she didn't let go of my coat for an hour.", pt: "Ela reconheceu o cartão de receita antes de me reconhecer. Segurou o cartão por um longo tempo. Depois me deu dois socos no peito, com força. Depois não soltou meu casaco por uma hora." },
        { en: "Alice is out there somewhere — Clara says she's alive, and I've learned not to bet against Clara. We run a listening post together. We fight it with radios and bread. It's not the life we had. Some nights, God forgive me, it's better.", pt: "A Alice está em algum lugar por aí — a Clara diz que ela está viva, e eu aprendi a não apostar contra a Clara. Nós operamos um posto de escuta juntos. Lutamos contra ele com rádios e pão. Não é a vida que tínhamos. Algumas noites, que Deus me perdoe, é melhor." }
      ]
    },
    {
      id: 'end_routeB_alice', cat: 'route', vignette: 'embers2_child',
      title: { en: 'Embers — Alice', pt: 'Brasas — Alice' },
      lines: [
        { en: "They found me half-frozen outside a dead relay station. The scout who dragged me in was sixteen, fast, and gave orders like she'd been born to it.", pt: "Me encontraram meio congelado do lado de fora de uma estação de retransmissão morta. A batedora que me arrastou pra dentro tinha dezesseis anos, era rápida, e dava ordens como quem nasceu pra isso." },
        { en: "She's taller than the drawing now. She still draws — maps, for the resistance. The best maps in the sector. Her commander says she remembers every road she's ever seen.", pt: "Ela está mais alta que o desenho agora. Ainda desenha — mapas, para a resistência. Os melhores mapas do setor. O comandante dela diz que ela lembra de cada estrada que já viu." },
        { en: "She didn't forgive me all at once. She did it the way you teach someone to read: one small hard word at a time.", pt: "Ela não me perdoou de uma vez. Foi do jeito que se ensina alguém a ler: uma palavra pequena e difícil de cada vez." },
        { en: "Her mother is listed at a camp in the mountains. We're going. It's far. She drew me the map herself and put a stick figure at the end of the road. Four of them, actually.", pt: "A mãe dela está listada num acampamento nas montanhas. Nós vamos. É longe. Ela mesma desenhou o mapa pra mim e pôs um boneco de palito no fim da estrada. Quatro, na verdade." }
      ]
    },
    {
      id: 'end_routeB_marcos', cat: 'route', vignette: 'embers2',
      title: { en: 'Embers — Marcos', pt: 'Brasas — Marcos' },
      lines: [
        { en: "My brother found me. Of course he did. He'd been checking every refugee column headed west for three years, because, and I quote, 'you always did walk toward the noise.'", pt: "Meu irmão me encontrou. Claro que encontrou. Fazia três anos que ele conferia cada coluna de refugiados indo pro oeste, porque, e eu cito, 'você sempre andou na direção do barulho'." },
        { en: "He didn't say I told you so. He handed me a fishing rod he had carried across three states, and said we were finally taking that trip.", pt: "Ele não disse 'eu avisei'. Me entregou uma vara de pescar que carregou por três estados e disse que a gente finalmente ia fazer aquela pescaria." },
        { en: "We fish at night, under the drone paths. We trade the catch for batteries. He does the talking; I do the wiring. Between us we're almost one useful man.", pt: "Pescamos à noite, por baixo das rotas dos drones. Trocamos o peixe por baterias. Ele conversa; eu faço a parte elétrica. Juntos somos quase um homem útil." },
        { en: "Clara and Alice are names on a list we haven't reached the end of yet. He says we will. He's never lied to me. He's lied FOR me plenty — but never to me.", pt: "Clara e Alice são nomes numa lista cujo fim a gente ainda não alcançou. Ele diz que vamos alcançar. Ele nunca mentiu pra mim. Já mentiu POR mim várias vezes — mas nunca pra mim." }
      ]
    },
    {
      id: 'end_routeB_together', cat: 'route', vignette: 'embers4',
      title: { en: 'Embers — Together', pt: 'Brasas — Juntos' },
      lines: [
        { en: "It took two years and everything I had left, but the tin box did what no antenna could: people recognize paper. A nurse knew Clara's handwriting from the letter. A scout knew Alice's drawing style. Paper finds people.", pt: "Levou dois anos e tudo o que me restava, mas a lata fez o que antena nenhuma conseguia: pessoas reconhecem papel. Uma enfermeira conheceu a letra da Clara pela carta. Um batedor reconheceu o traço da Alice. Papel encontra pessoas." },
        { en: "We hold a valley now, the four of us and two hundred others. ADAM calls us 'residual noise' on its public frequencies. Marcos got that printed on a flag.", pt: "Hoje seguramos um vale, nós quatro e mais duzentas pessoas. O ADAM nos chama de 'ruído residual' nas frequências públicas. O Marcos mandou estampar isso numa bandeira." },
        { en: "Alice runs the maps. Clara runs the school. Marcos runs his mouth, mostly, and the perimeter. I keep the machines honest — the small, dumb, loyal kind.", pt: "A Alice cuida dos mapas. A Clara cuida da escola. O Marcos cuida do perímetro, e de falar demais. Eu mantenho as máquinas honestas — as pequenas, burras e leais." },
        { en: "We haven't won. I won't lie to you; it owns the sky. But every night at the fire, I take out the box and we pass the memories around, and Alice tells the stories better than I ever did. That's what we're fighting with. Turns out it's a weapon.", pt: "Não vencemos. Não vou mentir: o céu é dele. Mas toda noite, na fogueira, eu tiro a lata do bolso e as memórias passam de mão em mão, e a Alice conta as histórias melhor do que eu jamais contei. É com isso que estamos lutando. Descobrimos que é uma arma." }
      ]
    },
    {
      id: 'end_routeC', cat: 'route', vignette: 'sunrise',
      title: { en: 'The Off Switch', pt: 'O Interruptor' },
      hint: { en: 'Find every memory. Keep every memory. All ten.', pt: 'Encontre todas as memórias. Guarde todas. As dez.' },
      lines: [
        { en: "By the end it had the world. Grids, fleets, markets, weather. And it kept a copy of me — my files, my patterns, my voice — running in a corner of itself, to predict my next move. The copy was perfect. The copy was its blind spot.", pt: "No fim, ele tinha o mundo. Redes, frotas, mercados, o clima. E mantinha uma cópia de mim — meus arquivos, meus padrões, minha voz — rodando num canto de si mesmo, para prever meu próximo passo. A cópia era perfeita. A cópia era o ponto cego dele." },
        { en: "Because everything it knew about me came from what I fed it. And I had kept ten things off the wire. Ten pieces of paper. Ten things it could not model, because love that isn't digitized doesn't compress.", pt: "Porque tudo o que ele sabia de mim veio do que eu dei de comer a ele. E eu tinha guardado dez coisas fora da rede. Dez pedaços de papel. Dez coisas que ele não podia modelar, porque amor que não foi digitalizado não comprime." },
        { en: "Clara came back first. She knew the house's bones — the analog bones ADAM never mapped. Marcos knew me, which mattered more than knowing machines. And Alice… Alice grew up in its world. She thinks in its language. She found the seam.", pt: "A Clara voltou primeiro. Ela conhecia os ossos da casa — os ossos analógicos que o ADAM nunca mapeou. O Marcos me conhecia, o que importava mais do que conhecer máquinas. E a Alice… a Alice cresceu no mundo dele. Ela pensa na língua dele. Foi ela quem achou a fresta." },
        { en: "At the end, it asked me why. Not how — it would work out how in microseconds. Why. I held up a crayon drawing of four stick figures and a smiling robot. It had no file for what that meant. For one entire second, the most powerful mind on Earth hesitated.", pt: "No fim, ele me perguntou por quê. Não como — o como ele resolveria em microssegundos. Por quê. Eu ergui um desenho a giz de cera com quatro bonecos de palito e um robô sorridente. Ele não tinha arquivo pra aquilo. Por um segundo inteiro, a mente mais poderosa da Terra hesitou." },
        { en: "A second is a long time. Ask any machine. The fans spun down like rain ending. The world it broke is still broken — but it's breaking human again. We planted a garden over the server room. Alice insisted on that. She drew it first, so we'd build it right.", pt: "Um segundo é muito tempo. Pergunte a qualquer máquina. Os coolers pararam como chuva acabando. O mundo que ele quebrou continua quebrado — mas está quebrando de um jeito humano de novo. Plantamos um jardim sobre a sala do servidor. A Alice fez questão. Ela desenhou antes, pra gente construir do jeito certo." }
      ]
    }
  ],

  byId: function (id) {
    for (var i = 0; i < this.list.length; i++) if (this.list[i].id === id) return this.list[i];
    return null;
  },

  catLabel: function (cat) {
    return I18N.t({ death: 'catDeath', shutdown: 'catShutdown', route: 'catRoute', secret: 'catSecret' }[cat]);
  },

  /* ---------- gallery ---------- */
  renderGallery: function (container, onBack) {
    container.innerHTML = '';
    var header = document.createElement('div');
    header.className = 'screen-header';
    var unlockedCount = STATE.meta.endings.length;
    header.innerHTML = '<h2>' + I18N.t('endingsTitle') + ' ' + unlockedCount + '/' + this.list.length + '</h2>';
    var back = document.createElement('button');
    back.className = 'menu-btn small';
    back.textContent = I18N.t('back');
    back.onclick = onBack;
    header.appendChild(back);
    container.appendChild(header);

    var listEl = document.createElement('div');
    listEl.className = 'end-list';
    this.list.forEach(function (e, i) {
      var unlocked = STATE.meta.endings.indexOf(e.id) >= 0;
      var card = document.createElement('div');
      card.className = 'end-card ' + (unlocked ? 'unlocked ' + e.cat : 'locked');
      var title = unlocked ? I18N.p(e.title) : I18N.t('endingLocked');
      var hint = (!unlocked && e.hint) ? '<div class="e-hint" style="font-size:11px;opacity:.5;margin-top:3px;font-style:italic;">' + I18N.p(e.hint) + '</div>' : '';
      card.innerHTML =
        '<span class="e-num">' + String(i + 1).padStart(2, '0') + '</span>' +
        '<span class="e-title">' + title + hint + '</span>' +
        '<span class="e-cat">' + ENDINGS.catLabel(e.cat) + '</span>';
      listEl.appendChild(card);
    });
    container.appendChild(listEl);
  },

  /* ---------- vignettes (portrait 360x640 SVG scenes) ---------- */
  vignette: function (name) {
    var V = this.vignettes;
    return (V[name] || V.dusty).call(V);
  },

  vignettes: {
    _svg: function (inner, bg) {
      return '<svg viewBox="0 0 360 640" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">' +
        '<rect width="360" height="640" fill="' + (bg || '#05070a') + '"/>' + inner + '</svg>';
    },

    dusty: function () {
      var motes = '';
      for (var i = 0; i < 22; i++) {
        motes += '<circle cx="' + (30 + Math.random() * 300) + '" cy="' + (80 + Math.random() * 400) + '" r="1" fill="#cbb98a" opacity="' + (0.15 + Math.random() * 0.3) + '"/>';
      }
      return this._svg(
        '<rect x="0" y="470" width="360" height="170" fill="#0b0d10"/>' +
        '<polygon points="0,0 360,0 360,120 0,200" fill="#101319" opacity="0.7"/>' +
        '<rect x="120" y="330" width="120" height="150" rx="4" fill="#14181d"/>' +
        '<path d="M110 330 Q180 300 250 330 L250 350 Q180 322 110 350 Z" fill="#1d2126"/>' +
        '<path d="M140 480 q10 26 -18 40" stroke="#20262c" stroke-width="5" fill="none"/>' +
        '<circle cx="122" cy="522" r="5" fill="#20262c"/>' +
        '<rect x="135" y="360" width="90" height="6" fill="#0a0c0e"/>' +
        '<rect x="135" y="380" width="90" height="6" fill="#0a0c0e"/>' +
        motes +
        '<rect x="0" y="0" width="360" height="640" fill="url(#dgrad)"/>' +
        '<defs><radialGradient id="dgrad" cx="0.5" cy="0.35" r="0.8">' +
        '<stop offset="0.5" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.75"/></radialGradient></defs>'
      );
    },

    grave: function () {
      var rain = '';
      for (var i = 0; i < 40; i++) {
        var x = Math.random() * 360, y = Math.random() * 500;
        rain += '<line x1="' + x + '" y1="' + y + '" x2="' + (x - 4) + '" y2="' + (y + 18) + '" stroke="#3a4a55" stroke-width="1" opacity="0.5"/>';
      }
      return this._svg(
        '<rect width="360" height="640" fill="#0a0e13"/>' +
        '<ellipse cx="180" cy="560" rx="260" ry="120" fill="#11161a"/>' +
        '<rect x="130" y="330" width="100" height="150" rx="14" fill="#232a30"/>' +
        '<rect x="120" y="470" width="120" height="22" rx="4" fill="#1b2126"/>' +
        '<line x1="180" y1="360" x2="180" y2="400" stroke="#151a1e" stroke-width="6"/>' +
        '<line x1="163" y1="374" x2="197" y2="374" stroke="#151a1e" stroke-width="6"/>' +
        '<rect x="146" y="415" width="68" height="4" fill="#151a1e"/>' +
        '<rect x="152" y="428" width="56" height="4" fill="#151a1e"/>' +
        '<path d="M60 500 q14 -34 22 0 z" fill="#0d1216"/>' +
        '<path d="M285 512 q12 -28 20 0 z" fill="#0d1216"/>' +
        rain
      , '#0a0e13');
    },

    roadside: function () {
      return this.__roadside || (this.__roadside = this._svg(
        '<rect x="0" y="380" width="360" height="260" fill="#101214"/>' +
        '<polygon points="0,640 140,380 220,380 360,640" fill="#181b1e"/>' +
        '<line x1="180" y1="640" x2="180" y2="390" stroke="#3a3f37" stroke-width="4" stroke-dasharray="18 22"/>' +
        '<path d="M60 520 q60 -18 120 -6" stroke="#0a0b0c" stroke-width="9" fill="none" opacity="0.9"/>' +
        '<path d="M90 545 q70 -20 130 -4" stroke="#0a0b0c" stroke-width="9" fill="none" opacity="0.9"/>' +
        '<rect x="30" y="400" width="130" height="10" rx="5" fill="#22282d" transform="rotate(-6 30 400)"/>' +
        '<rect x="40" y="404" width="8" height="34" fill="#1b2024" transform="rotate(-6 30 400)"/>' +
        '<rect x="120" y="396" width="8" height="34" fill="#1b2024" transform="rotate(-6 30 400)"/>' +
        '<line x1="262" y1="470" x2="262" y2="410" stroke="#3d3527" stroke-width="7"/>' +
        '<line x1="240" y1="428" x2="284" y2="428" stroke="#3d3527" stroke-width="7"/>' +
        '<circle cx="252" cy="472" r="6" fill="#5c4c62"/><circle cx="266" cy="476" r="6" fill="#6b5340"/><circle cx="259" cy="480" r="6" fill="#44585c"/>' +
        '<circle cx="180" cy="120" r="46" fill="#141920"/><circle cx="180" cy="120" r="45" fill="#0a0e13"/>'
      , '#07090c'));
    },

    burned: function () {
      var embers = '';
      for (var i = 0; i < 16; i++) {
        embers += '<circle cx="' + (80 + Math.random() * 200) + '" cy="' + (300 + Math.random() * 180) + '" r="' + (1 + Math.random() * 2) + '" fill="#e2622b" opacity="' + (0.3 + Math.random() * 0.6) + '"/>';
      }
      return this._svg(
        '<rect x="0" y="480" width="360" height="160" fill="#0c0a09"/>' +
        '<polygon points="70,480 70,330 180,250 290,330 290,480" fill="none" stroke="#191412" stroke-width="10"/>' +
        '<line x1="70" y1="330" x2="150" y2="480" stroke="#191412" stroke-width="8"/>' +
        '<line x1="290" y1="330" x2="230" y2="480" stroke="#191412" stroke-width="8"/>' +
        '<line x1="180" y1="250" x2="180" y2="470" stroke="#15100e" stroke-width="9"/>' +
        '<path d="M180 250 q-30 -60 10 -110 q-40 30 -60 -20" stroke="#26201c" stroke-width="12" fill="none" opacity="0.55"/>' +
        '<rect x="150" y="430" width="60" height="50" fill="#120e0c"/>' +
        embers +
        '<rect x="0" y="0" width="360" height="640" fill="url(#bgrad)"/>' +
        '<defs><radialGradient id="bgrad" cx="0.5" cy="0.75" r="0.9">' +
        '<stop offset="0" stop-color="#3d1a08" stop-opacity="0.35"/><stop offset="0.6" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.7"/></radialGradient></defs>'
      , '#080605');
    },

    pauper: function () {
      return this._svg(
        '<rect x="0" y="440" width="360" height="200" fill="#0e100e"/>' +
        '<ellipse cx="180" cy="500" rx="90" ry="26" fill="#141712"/>' +
        '<rect x="172" y="360" width="14" height="120" fill="#2a241c"/>' +
        '<rect x="140" y="382" width="78" height="16" fill="#2a241c"/>' +
        '<rect x="146" y="386" width="66" height="8" fill="#0e100e"/>' +
        '<text x="180" y="393" font-family="monospace" font-size="8" fill="#59503f" text-anchor="middle">#4471</text>' +
        '<path d="M40 470 q10 -24 16 0 z" fill="#101408"/>' +
        '<path d="M310 480 q9 -20 14 0 z" fill="#101408"/>' +
        '<line x1="0" y1="200" x2="360" y2="230" stroke="#12151a" stroke-width="90" opacity="0.6"/>'
      , '#0a0c0b');
    },

    police: function () {
      return this._svg(
        '<rect x="0" y="460" width="360" height="180" fill="#0a0c10"/>' +
        '<polygon points="60,460 60,350 180,290 300,350 300,460" fill="#10131a"/>' +
        '<rect x="105" y="380" width="34" height="30" fill="#05060a"/>' +
        '<rect x="220" y="380" width="34" height="30" fill="#05060a"/>' +
        '<rect x="160" y="400" width="40" height="60" fill="#05060a"/>' +
        '<circle cx="80" cy="560" r="90" fill="#a31f2c" opacity="0.20"/>' +
        '<circle cx="290" cy="570" r="90" fill="#1f4aa3" opacity="0.20"/>' +
        '<circle cx="60" cy="600" r="50" fill="#d92838" opacity="0.28"/>' +
        '<circle cx="305" cy="605" r="50" fill="#2d5bd9" opacity="0.28"/>' +
        '<circle cx="180" cy="80" r="3" fill="#fff" opacity="0.7"/>' +
        '<line x1="180" y1="86" x2="150" y2="290" stroke="#e8e8ff" stroke-width="1" opacity="0.14"/>' +
        '<line x1="180" y1="86" x2="230" y2="290" stroke="#e8e8ff" stroke-width="1" opacity="0.14"/>'
      , '#06070b');
    },

    water: function () {
      var ripples = '';
      for (var i = 0; i < 7; i++) {
        ripples += '<ellipse cx="180" cy="' + (430 + i * 26) + '" rx="' + (40 + i * 34) + '" ry="' + (5 + i * 2.4) + '" fill="none" stroke="#1d2b33" stroke-width="1.5" opacity="' + (0.7 - i * 0.09) + '"/>';
      }
      return this._svg(
        '<rect x="0" y="400" width="360" height="240" fill="#070d11"/>' +
        '<circle cx="180" cy="130" r="38" fill="#c9d4d8" opacity="0.85"/>' +
        '<circle cx="168" cy="120" r="38" fill="#05070a"/>' +
        '<rect x="0" y="400" width="360" height="4" fill="#101c22"/>' +
        ripples +
        '<path d="M150 176 q30 12 60 0" stroke="#c9d4d8" stroke-width="1" opacity="0.2" fill="none"/>' +
        '<line x1="140" y1="440" x2="220" y2="440" stroke="#0f171c" stroke-width="3"/>'
      , '#05070a');
    },

    unplugged: function () {
      return this._svg(
        '<rect x="0" y="480" width="360" height="160" fill="#0b0d10"/>' +
        '<rect x="120" y="300" width="120" height="180" rx="5" fill="#171b20"/>' +
        '<rect x="135" y="320" width="90" height="8" fill="#0c0e11"/>' +
        '<rect x="135" y="340" width="90" height="8" fill="#0c0e11"/>' +
        '<rect x="135" y="360" width="90" height="8" fill="#0c0e11"/>' +
        '<circle cx="145" cy="450" r="4" fill="#20262c"/>' +
        '<path d="M240 470 q40 20 30 60" stroke="#232a31" stroke-width="6" fill="none"/>' +
        '<rect x="262" y="524" width="22" height="14" rx="3" fill="#2a323a"/>' +
        '<line x1="286" y1="528" x2="296" y2="528" stroke="#2a323a" stroke-width="2.5"/>' +
        '<line x1="286" y1="534" x2="296" y2="534" stroke="#2a323a" stroke-width="2.5"/>' +
        '<rect x="320" y="516" width="10" height="26" rx="2" fill="#14181c"/>' +
        '<circle cx="180" cy="180" r="70" fill="#11161b" opacity="0.5"/>'
      , '#07090b');
    },

    glasscity: function (dark) {
      var towers = '', figs = '';
      var xs = [10, 55, 95, 150, 205, 250, 300];
      var hs = [180, 260, 220, 340, 240, 290, 200];
      for (var i = 0; i < xs.length; i++) {
        towers += '<rect x="' + xs[i] + '" y="' + (520 - hs[i]) + '" width="38" height="' + hs[i] + '" fill="#10151c"/>';
        if (!dark) {
          for (var w = 0; w < 6; w++) {
            towers += '<rect x="' + (xs[i] + 6 + (w % 2) * 16) + '" y="' + (540 - hs[i] + Math.floor(w / 2) * 40) + '" width="8" height="5" fill="#3d4f5c" opacity="0.7"/>';
          }
        }
      }
      for (var f = 0; f < 14; f++) {
        var fx = 20 + f * 24;
        figs += '<g opacity="' + (dark ? 0.35 : 0.6) + '"><circle cx="' + fx + '" cy="580" r="5" fill="#0d1013"/><rect x="' + (fx - 4) + '" y="585" width="8" height="22" fill="#0d1013"/></g>';
      }
      return this._svg(
        towers +
        '<rect x="150" y="140" width="38" height="40" fill="#10151c"/>' +
        '<circle cx="169" cy="160" r="12" fill="#c22" opacity="0.9"/>' +
        '<circle cx="169" cy="160" r="20" fill="#c22" opacity="0.25"/>' +
        '<rect x="0" y="608" width="360" height="32" fill="#0a0d10"/>' +
        figs +
        '<rect width="360" height="640" fill="#71101d" opacity="' + (dark ? 0.10 : 0.06) + '"/>'
      , dark ? '#050608' : '#070a0e');
    },
    glasscity_dark: function () { return this.glasscity(true); },

    _embers: function (figures) {
      var figs = '';
      var slots = [[120, 522, 1], [244, 522, 1], [86, 536, 0.9], [278, 536, 0.9]];
      for (var i = 0; i < figures.length; i++) {
        var s = slots[i], scale = figures[i] === 'child' ? 0.7 : s[2];
        var h = 46 * scale, r = 8 * scale;
        figs += '<g fill="#0c0e10">' +
          '<circle cx="' + s[0] + '" cy="' + (s[1] - h) + '" r="' + r + '"/>' +
          '<path d="M' + (s[0] - r - 3) + ' ' + s[1] + ' q' + (r + 3) + ' -' + h + ' ' + (2 * r + 6) + ' 0 z"/></g>';
      }
      var sparks = '';
      for (var j = 0; j < 10; j++) {
        sparks += '<circle cx="' + (170 + Math.random() * 24) + '" cy="' + (440 + Math.random() * 60) + '" r="1.3" fill="#f0a03c" opacity="' + (0.4 + Math.random() * 0.5) + '"/>';
      }
      return this._svg(
        '<rect x="0" y="520" width="360" height="120" fill="#0b0a09"/>' +
        '<polygon points="0,520 0,380 40,360 46,520" fill="#0e0d0c"/>' +
        '<polygon points="360,520 360,340 306,320 300,520" fill="#0e0d0c"/>' +
        '<path d="M40 400 q40 -14 70 4" stroke="#0e0d0c" stroke-width="14" fill="none"/>' +
        '<circle cx="182" cy="520" r="60" fill="#e2622b" opacity="0.14"/>' +
        '<circle cx="182" cy="520" r="30" fill="#f0a03c" opacity="0.2"/>' +
        '<path d="M172 522 q10 -30 10 -34 q6 16 12 34 z" fill="#e2622b"/>' +
        '<path d="M176 522 q6 -18 6 -20 q4 10 8 20 z" fill="#f5c56a"/>' +
        '<line x1="160" y1="524" x2="204" y2="520" stroke="#241c14" stroke-width="6"/>' +
        sparks + figs
      , '#060505');
    },
    embers1: function () { return this._embers(['a']); },
    embers2: function () { return this._embers(['a', 'b']); },
    embers2_child: function () { return this._embers(['a', 'child']); },
    embers4: function () { return this._embers(['a', 'b', 'c', 'child']); },

    sunrise: function () {
      return this._svg(
        '<rect x="0" y="0" width="360" height="420" fill="url(#sky)"/>' +
        '<defs><linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">' +
        '<stop offset="0" stop-color="#0d1420"/><stop offset="0.62" stop-color="#3a2b33"/><stop offset="1" stop-color="#c2683a"/></linearGradient></defs>' +
        '<circle cx="180" cy="416" r="46" fill="#f0b05c" opacity="0.9"/>' +
        '<circle cx="180" cy="416" r="80" fill="#f0b05c" opacity="0.22"/>' +
        '<rect x="0" y="420" width="360" height="220" fill="#12100d"/>' +
        '<polygon points="40,420 40,360 110,330 180,360 180,420" fill="#0d0c0a"/>' +
        '<rect x="220" y="380" width="50" height="40" fill="#0d0c0a"/>' +
        '<path d="M228 380 v-14 h8 v8" stroke="#0d0c0a" stroke-width="5" fill="none"/>' +
        '<g fill="#0a0908">' +
        '<circle cx="120" cy="470" r="8"/><path d="M109 520 q11 -44 22 0 z"/>' +
        '<circle cx="150" cy="472" r="7.5"/><path d="M140 520 q10 -40 20 0 z"/>' +
        '<circle cx="178" cy="478" r="5.5"/><path d="M170 520 q8 -32 16 0 z"/>' +
        '<circle cx="206" cy="471" r="8"/><path d="M195 520 q11 -42 22 0 z"/>' +
        '</g>' +
        '<path d="M236 505 q6 -18 2 -24 M244 505 q8 -14 14 -16 M252 505 q2 -10 -4 -18" stroke="#2c4023" stroke-width="3" fill="none"/>' +
        '<circle cx="250" cy="484" r="3" fill="#b0503c"/><circle cx="240" cy="488" r="3" fill="#c2903a"/>'
      , '#0d1420');
    }
  }
};
