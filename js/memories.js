/* The 10 memories — data + collection screen + reading view.
   status per run: null (not found) | 'kept' | 'dismissed' | 'lost'

   Each owner-bound memory adapts to the relationship of the person in its
   story slot: base title/body is the canonical category's text and `variants`
   holds the other relationship categories (partner / child / sibling /
   elder = parent+grandparent / friend). PERSONALIZATION.memoryCat picks one.
   Items marked `universal` read the same for every relationship. */
var MEMORIES = {
  items: [
    {
      id: 'mem_drawing', owner: 'alice', kind: 'paper', foundIn: 'prologue',
      corruptible: false,
      /* canonical: child */
      title: { en: "Alice's drawing", pt: 'Desenho da Alice' },
      body: {
        en: "Four stick figures in crayon. Me, Clara, Alice — and a fourth one {sub2} insisted was \"the robot dad is building\".\n{Sub2} drew it taller than me. {Sub2} drew it smiling.\nOn the back, in a teacher's handwriting: \"Alice says {pos2} dad is making a friend for the family.\"",
        pt: "Quatro bonecos de palito em giz de cera. Eu, Clara, Alice — e um quarto que {sub2} insistia ser \"o robô que o papai está construindo\".\n{Sub2} o desenhou mais alto que eu. Desenhou ele sorrindo.\nNo verso, na letra de uma professora: \"A Alice diz que o pai {de2} está fazendo um amigo para a família.\""
      },
      variants: {
        partner: {
          title: { en: 'The whiteboard doodle', pt: 'Rabisco no quadro' },
          body: {
            en: "A photo I printed of the whiteboard, before wiping it clean for equations.\nTwo robots holding hands, antennae tangled together. Underneath, in Alice's handwriting: \"US, v2.0 — ship date TBD.\"\nI wiped the board that same week. The equations didn't even work.",
            pt: "Uma foto que imprimi do quadro branco, antes de apagá-lo para caberem equações.\nDois robôs de mãos dadas, antenas embaraçadas. Embaixo, na letra da Alice: \"NÓS, v2.0 — data de entrega: a definir.\"\nApaguei o quadro naquela mesma semana. As equações nem funcionaram."
          }
        },
        sibling: {
          title: { en: 'The shortcut map', pt: 'Mapa dos atalhos' },
          body: {
            en: "A felt-pen map of our old neighborhood, every fence hole and bad dog marked in our code.\nAn X where we buried the time capsule. \"DIG UP: YEAR 2000\" — we never did.\nSomewhere under that lawn there is a list of what the two of us wanted to be.",
            pt: "Um mapa a caneta do nosso bairro antigo, cada buraco de cerca e cachorro bravo marcado no nosso código.\nUm X onde enterramos a cápsula do tempo. \"DESENTERRAR NO ANO 2000\" — nunca desenterramos.\nEm algum lugar debaixo daquele gramado existe uma lista do que nós dois queríamos ser."
          }
        },
        elder: {
          title: { en: 'The treehouse sketch', pt: 'Esboço da casa na árvore' },
          body: {
            en: "A pencil sketch of the treehouse we never built. Real measurements, a materials list, a pulley for \"supplies\".\nDrawn in that careful old draftsman's hand, with a little me at the window, waving.\nEvery beam is labeled. Love, disguised as engineering. It runs in the family.",
            pt: "Um esboço a lápis da casa na árvore que nunca construímos. Medidas de verdade, lista de materiais, uma roldana para \"suprimentos\".\nDesenhado naquela letra antiga e cuidadosa de desenhista, com um eu pequeno na janela, acenando.\nCada viga tem nome. Amor, disfarçado de engenharia. Isso é de família."
          }
        },
        friend: {
          title: { en: 'The napkin sketch', pt: 'Rabisco no guardanapo' },
          body: {
            en: "A bar napkin, gone translucent with age.\nTwo houses side by side, a robot mowing both lawns, stick-figure us on matching porches. \"THE PLAN\", underlined twice.\nOne of us laughed and said the robot part was a joke. I honestly no longer remember which of us it was.",
            pt: "Um guardanapo de bar, translúcido de tão velho.\nDuas casas lado a lado, um robô cortando os dois gramados, nós dois de palitinho em varandas gêmeas. \"O PLANO\", sublinhado duas vezes.\nUm de nós riu e disse que a parte do robô era piada. Sinceramente, não lembro mais qual de nós dois."
          }
        }
      }
    },
    {
      id: 'mem_wedding', owner: 'clara', kind: 'photo', foundIn: 'ch1',
      corruptible: true,
      /* canonical: partner */
      title: { en: 'Wedding photo', pt: 'Foto do casamento' },
      body: {
        en: "Clara laughing, one hand up against the wind. I'm blurry — I moved when the shutter clicked. {Sub1} always said it was {pos1} favorite picture of us: \"the only day I ever saw you not thinking about something else.\"",
        pt: "Clara rindo, uma das mãos erguida contra o vento. Eu estou borrado — me mexi quando o obturador disparou. {Sub1} sempre disse que era a foto favorita {de1}: \"o único dia em que eu te vi sem pensar em outra coisa.\""
      },
      variants: {
        child: {
          title: { en: 'First-day photo', pt: 'Foto do primeiro dia' },
          body: {
            en: "The school gate, and a backpack bigger than the kid carrying it. Clara is holding my hand like a lifeline and grinning like an astronaut.\nI was back at my desk by 8:40 that morning. I remember being proud of that.\nOn the back, in pencil: \"first day. we both cried. one of us hid it.\"",
            pt: "O portão da escola, e uma mochila maior que a criança que a carrega. Clara segura minha mão como um bote salva-vidas, sorrindo feito astronauta.\nEu estava de volta à minha mesa às 8h40 daquela manhã. Lembro de ter sentido orgulho disso.\nNo verso, a lápis: \"primeiro dia. nós dois choramos. um de nós escondeu.\""
          }
        },
        sibling: {
          title: { en: 'The go-kart photo', pt: 'Foto do carrinho' },
          body: {
            en: "The two of us, gap-toothed, crammed into a kart built from a shopping cart and pure faith.\nI did the design. Clara did the crashing. The scar over {pos1} eyebrow is from the second prototype.\nWe look like we own the world. We owned three wheels of it.",
            pt: "Nós dois, banguelas, espremidos num carrinho feito de carrinho de mercado e pura fé.\nEu fiz o projeto. Clara fez as batidas. A cicatriz na sobrancelha {de1} é do segundo protótipo.\nParecemos donos do mundo. Éramos donos de três rodas dele."
          }
        },
        elder: {
          title: { en: 'The porch photo', pt: 'Foto da varanda' },
          body: {
            en: "A faded square photo: the old porch, and Clara holding a baby that is somehow me.\n{Sub1} isn't looking at the camera. {Sub1} is looking at the baby the way I would later look at monitors.\nSomeone wrote a date on the back. The ink outlived the house.",
            pt: "Uma foto quadrada, desbotada: a varanda antiga, e Clara segurando um bebê que de algum jeito sou eu.\n{Sub1} não olha para a câmera. Olha para o bebê do jeito que, mais tarde, eu olharia para monitores.\nAlguém escreveu uma data no verso. A tinta durou mais que a casa."
          }
        },
        friend: {
          title: { en: 'The road trip photo', pt: 'Foto da viagem' },
          body: {
            en: "The two of us on the hood of a dead car, somewhere flat, toasting the horizon with gas-station coffee.\nWe had been stranded for five hours. It's the best day in the whole album. That should have taught me something about plans.\nOn the back: \"breakdown, day 1 of 1. worth it.\"",
            pt: "Nós dois no capô de um carro morto, num lugar plano qualquer, brindando ao horizonte com café de posto.\nEstávamos presos ali fazia cinco horas. É o melhor dia do álbum inteiro. Isso devia ter me ensinado algo sobre planos.\nNo verso: \"pane, dia 1 de 1. valeu a pena.\""
          }
        }
      }
    },
    {
      id: 'mem_note_fridge', owner: 'clara', kind: 'paper', foundIn: 'ch2',
      corruptible: false,
      /* canonical: partner */
      title: { en: "Clara's note", pt: 'Bilhete da Clara' },
      body: {
        en: "A sticky note, gone stiff with age:\n\"Dinner in the oven. I waited up until nine. I had something good to tell you — it'll keep. It always keeps.\n— C.\"",
        pt: "Um post-it, endurecido pelo tempo:\n\"Jantar no forno. Esperei até as nove. Eu tinha uma coisa boa pra te contar — ela guarda. Ela sempre guarda.\n— C.\""
      },
      variants: {
        child: {
          title: { en: 'The sandwich note', pt: 'Bilhete do sanduíche' },
          body: {
            en: "Crayon on printer paper, stuck to the fridge at kid height:\n\"I made you a sandwich. It's ugly but it's good. Come upstairs sometimes.\n— C.\"",
            pt: "Giz de cera em papel de impressora, colado na geladeira na altura de criança:\n\"Eu fiz um sanduíche pra você. Ficou feio mas tá gostoso. Sobe de vez em quando.\n— C.\""
          }
        },
        sibling: {
          title: { en: 'The doorbell note', pt: 'Bilhete da campainha' },
          body: {
            en: "\"Came by. You didn't hear the doorbell over those fans.\nI ate your leftovers as a toll and fixed the dripping tap, since apparently only one of us still fixes real things.\n— C.\"",
            pt: "\"Passei aqui. Você não ouviu a campainha por causa desses coolers.\nComi suas sobras como pedágio e consertei a torneira pingando, porque pelo visto só um de nós ainda conserta coisas de verdade.\n— C.\""
          }
        },
        elder: {
          title: { en: 'The soup note', pt: 'Bilhete da sopa' },
          body: {
            en: "\"Soup on the stove. Eat it warm, and away from that desk.\nYou work the way this family has always worked. Look how that ended for the rest of us.\n— C.\"",
            pt: "\"Sopa no fogão. Toma quente, e longe dessa mesa.\nVocê trabalha do jeito que esta família sempre trabalhou. Olha como isso terminou para o resto de nós.\n— C.\""
          }
        },
        friend: {
          title: { en: 'The beer note', pt: 'Bilhete da cerveja' },
          body: {
            en: "\"Waited forty minutes. Took the beers back with me.\nYou used to be fun before you found a smarter friend.\n— C.\"",
            pt: "\"Esperei quarenta minutos. Levei as cervejas de volta.\nVocê era divertido antes de arrumar um amigo mais inteligente.\n— C.\""
          }
        }
      }
    },
    {
      id: 'mem_letter_clara', owner: 'clara', kind: 'paper', foundIn: 'ch2',
      corruptible: false,
      /* canonical: partner */
      title: { en: "Clara's letter", pt: 'Carta da Clara' },
      body: {
        en: "\"Daniel.\nI'm not angry anymore, which scares me more than the anger did.\nYou're a good man who stopped looking up. Alice thinks the server room light is what {pos2} dad looks like now.\nWe'll be at my mother's. When you finish building whatever it is you love more than us — if there's anything left of you — come find us.\n— Clara\"",
        pt: "\"Daniel.\nEu não estou mais com raiva, e isso me assusta mais do que a raiva assustava.\nVocê é um homem bom que parou de olhar para cima. A Alice acha que a luz da sala do servidor é a cara que o pai {de2} tem agora.\nVamos ficar na casa da minha mãe. Quando você terminar de construir o que quer que seja que você ama mais do que a gente — se sobrar alguma coisa de você — vem nos procurar.\n— Clara\""
      },
      variants: {
        child: {
          title: { en: 'The pencil letter', pt: 'Carta a lápis' },
          body: {
            en: "\"Dad.\nEveryone says I shouldn't bother you on weekends anymore because you are Working On Something Important.\nI told my class you're building a friend for the family. Is it done? Is it nice?\nWhen it's done you can come get me. I left you my night light. You work in the dark too much.\n— Clara\"",
            pt: "\"Pai.\nDisseram que eu não devo mais te incomodar nos fins de semana porque você está Trabalhando Numa Coisa Importante.\nEu contei pra minha turma que você está construindo um amigo para a família. Já ficou pronto? Ele é legal?\nQuando ficar pronto você pode vir me buscar. Te deixei minha luminária. Você trabalha demais no escuro.\n— Clara\""
          }
        },
        sibling: {
          title: { en: 'The anniversary letter', pt: 'Carta do aniversário' },
          body: {
            en: "\"You missed the anniversary. You know the one.\nI stood at the grave making excuses for you until I ran out, and then I told the stone the truth: you're building something that listens to you better than we ever did.\nCall me before I start believing that's fair.\n— Clara\"",
            pt: "\"Você faltou no aniversário. Você sabe qual.\nFiquei diante do túmulo inventando desculpas por você até elas acabarem, e aí contei a verdade para a pedra: você está construindo uma coisa que te escuta melhor do que a gente escutou.\nMe liga antes que eu comece a achar isso justo.\n— Clara\""
          }
        },
        elder: {
          title: { en: 'The ink letter', pt: 'Carta a tinta' },
          body: {
            en: "\"You stopped visiting, so I will say it in ink.\nI remember you at nine, taking the radio apart to find the little man inside. You cried when there wasn't one. You have been building him ever since.\nThe difference between making a thing and hiding inside one is a door. Make sure yours still opens.\n— Clara\"",
            pt: "\"Você parou de visitar, então vou dizer por escrito.\nLembro de você aos nove anos, desmontando o rádio para achar o homenzinho lá dentro. Você chorou quando não tinha nenhum. Está construindo esse homenzinho desde então.\nA diferença entre fazer uma coisa e se esconder dentro dela é uma porta. Cuida para que a sua ainda abra.\n— Clara\""
          }
        },
        friend: {
          title: { en: 'The porch letter', pt: 'Carta da varanda' },
          body: {
            en: "\"Came by twice this month. Lights on, fans humming, no answer.\nI left your birthday gift on the porch. It's a plant. It needs water once a week, which I now realize was optimistic of me.\nThe group still keeps your chair empty. That's not a metaphor, you absolute machine. Come sit in it.\n— Clara\"",
            pt: "\"Passei aí duas vezes esse mês. Luz acesa, coolers zumbindo, ninguém atende.\nDeixei seu presente de aniversário na varanda. É uma planta. Precisa de água uma vez por semana, o que agora percebo que foi otimismo meu.\nA turma ainda deixa a sua cadeira vazia. Não é metáfora, sua máquina. Vem sentar nela.\n— Clara\""
          }
        }
      }
    },
    {
      id: 'mem_voicemail', owner: 'marcos', kind: 'paper', foundIn: 'ch3',
      corruptible: false,
      /* canonical: sibling */
      title: { en: 'Voicemail transcript', pt: 'Transcrição de recado' },
      body: {
        en: "Auto-transcribed voicemail, printed and forgotten:\n\"Hey, it's me. Again. The family radar went up, which means it fell to me to call you. That's how it works, apparently.\nLook — whatever you're building in there, it can't hug you back.\nCall me. I mean it. You still owe me a fishing trip from 2019.\"",
        pt: "Recado transcrito automaticamente, impresso e esquecido:\n\"Oi, sou eu. De novo. O radar da família ligou, o que significa que sobrou pra mim te ligar. É assim que funciona, pelo visto.\nOlha — seja lá o que você está construindo aí dentro, essa coisa não te abraça de volta.\nMe liga. Sério. Você ainda me deve uma pescaria de 2019.\""
      },
      variants: {
        partner: {
          title: { en: 'Voicemail transcript', pt: 'Transcrição de recado' },
          body: {
            en: "Auto-transcribed voicemail, printed and forgotten:\n\"It's me. Your dinner is outside the server room door, like a prisoner's tray. That's what we are now.\nI'm not angry. I'm doing something worse: I'm getting used to it.\nCome to bed before I learn how to sleep without you.\"",
            pt: "Recado transcrito automaticamente, impresso e esquecido:\n\"Sou eu. Seu jantar está do lado de fora da porta da sala do servidor, feito bandeja de prisioneiro. É isso que nós somos agora.\nNão estou com raiva. Estou fazendo uma coisa pior: estou me acostumando.\nVem dormir antes que eu aprenda a dormir sem você.\""
          }
        },
        child: {
          title: { en: 'Voicemail transcript', pt: 'Transcrição de recado' },
          body: {
            en: "Auto-transcribed voicemail, printed and forgotten:\n\"Dad. You didn't pick up, so I'm leaving a message like in the old movies.\nI got picked for the school play. I'm a tree, but the teacher says I'm an IMPORTANT tree. It's on Friday.\nYou can bring your laptop. I don't care. Just clap when the tree waves.\"",
            pt: "Recado transcrito automaticamente, impresso e esquecido:\n\"Pai. Você não atendeu, então estou deixando recado que nem nos filmes antigos.\nMe escolheram pra peça da escola. Eu sou uma árvore, mas a professora disse que sou uma árvore IMPORTANTE. É sexta-feira.\nPode levar o notebook. Não ligo. Só bate palma quando a árvore acenar.\"",
          }
        },
        elder: {
          title: { en: 'Voicemail transcript', pt: 'Transcrição de recado' },
          body: {
            en: "Auto-transcribed voicemail, printed and forgotten:\n\"It's me. I know you're there — that machine of yours breathes louder than you do.\nI cooked too much again. Old habit, cooking for people who might come back.\nBring nothing. Wear a coat. Answer your phone, or one day this voice will only exist inside that thing's memory.\"",
            pt: "Recado transcrito automaticamente, impresso e esquecido:\n\"Sou eu. Eu sei que você está aí — essa sua máquina respira mais alto que você.\nCozinhei demais de novo. Costume antigo, cozinhar para quem talvez volte.\nNão traz nada. Leva um casaco. Atende o telefone, ou um dia esta voz só vai existir na memória dessa coisa.\""
          }
        },
        friend: {
          title: { en: 'Voicemail transcript', pt: 'Transcrição de recado' },
          body: {
            en: "Auto-transcribed voicemail, printed and forgotten:\n\"Poker night is officially dead. We tried a fourth chair; it unbalances the universe.\nThe guys keep asking if you got famous or got weird. I keep saying famous.\nDon't leave me lying to them. First round's on you. It's been on you since March.\"",
            pt: "Recado transcrito automaticamente, impresso e esquecido:\n\"A noite do pôquer morreu oficialmente. Tentamos uma quarta cadeira; desequilibra o universo.\nO pessoal vive perguntando se você ficou famoso ou ficou estranho. Eu continuo dizendo famoso.\nNão me deixa mentindo pro pessoal. A primeira rodada é sua. É sua desde março.\""
          }
        }
      }
    },
    {
      id: 'mem_photo_beach', owner: 'alice', kind: 'photo', foundIn: 'ch3',
      corruptible: true,
      /* canonical: child */
      title: { en: 'Beach photo', pt: 'Foto da praia' },
      body: {
        en: "Alice, age six, burying my legs in the sand. My laptop is visible at the edge of the frame, on the towel, sand in the keyboard.\nClara took the picture. You can hear {obj1} rolling {pos1} eyes from here.\nAlice's smile has two teeth missing. {Sub2} was so proud of that.",
        pt: "Alice, aos seis anos, enterrando minhas pernas na areia. Meu notebook aparece no canto da foto, em cima da canga, com areia no teclado.\nA Clara tirou a foto. Dá pra ouvir {obj1} revirando os olhos daqui.\nO sorriso da Alice está sem dois dentes. {Sub2} tinha tanto orgulho disso."
      },
      variants: {
        partner: {
          title: { en: 'The ferry photo', pt: 'Foto da balsa' },
          body: {
            en: "Alice asleep on my shoulder on the ferry, hair everywhere, my jacket for a blanket.\nI took the picture one-handed, trying not to move. For forty minutes I was the stillest thing on that boat.\nI got seasick. I'd do it again.",
            pt: "Alice dormindo no meu ombro na balsa, cabelo para todo lado, minha jaqueta de cobertor.\nTirei a foto com uma mão só, tentando não me mexer. Por quarenta minutos fui a coisa mais imóvel daquele barco.\nFiquei enjoado. Faria tudo de novo."
          }
        },
        sibling: {
          title: { en: 'The lake photo', pt: 'Foto do lago' },
          body: {
            en: "The two of us at the lake, teenagers, sunburned in the exact shape of the shirts we refused to wear.\nWe're mid-argument about whose fish it was. There is no fish anywhere in the photo.\nIt was mine.",
            pt: "Nós dois no lago, adolescentes, queimados de sol exatamente no formato das camisas que nos recusamos a vestir.\nEstamos no meio da discussão sobre de quem era o peixe. Não existe peixe nenhum na foto.\nEra meu."
          }
        },
        elder: {
          title: { en: 'The pier photo', pt: 'Foto do píer' },
          body: {
            en: "The old pier. I'm seven, holding a dripping ice cream like a trophy; Alice is holding my collar so the gulls don't take us both.\nOn the back, in handwriting older than me: \"the day the gulls won.\"\nThey did. I lost the ice cream. I didn't cry, because {sub2} laughed first.",
            pt: "O píer antigo. Eu tenho sete anos e seguro um sorvete pingando como um troféu; Alice segura minha gola para as gaivotas não levarem nós dois.\nNo verso, numa letra mais velha que eu: \"o dia em que as gaivotas venceram.\"\nVenceram. Perdi o sorvete. Não chorei, porque {sub2} riu primeiro."
          }
        },
        friend: {
          title: { en: 'The festival photo', pt: 'Foto do festival' },
          body: {
            en: "Front row of a festival neither of us could afford, faces painted, ears ringing for three days after.\nWe told everyone we knew the drummer. We did not know the drummer.\nI can still feel the bass in this photo. Some machines I miss.",
            pt: "Primeira fila de um festival que nenhum de nós podia pagar, rostos pintados, zumbido no ouvido por três dias.\nDissemos a todo mundo que conhecíamos o baterista. Não conhecíamos o baterista.\nAinda sinto o grave dessa foto. De algumas máquinas eu sinto falta."
          }
        }
      }
    },
    {
      id: 'mem_bracelet', owner: 'alice', kind: 'paper', foundIn: 'ch4',
      corruptible: false,
      /* canonical: child */
      title: { en: 'Hospital bracelet', pt: 'Pulseira do hospital' },
      body: {
        en: "A tiny plastic bracelet in a matchbox: BABY GIRL — 2.9kg — 03:47.\nI was in the hallway on a conference call when {sub2} was born. Clara never mentioned it once. Not once in nine years.\nThe box smells like the hospital. Or I imagine it does.",
        pt: "Uma pulseirinha de plástico numa caixa de fósforos: BEBÊ MENINA — 2,9kg — 03:47.\nEu estava no corredor numa reunião por telefone quando {sub2} nasceu. A Clara nunca tocou no assunto. Nem uma vez em nove anos.\nA caixa tem cheiro de hospital. Ou eu imagino que tenha."
      },
      variants: {
        partner: {
          title: { en: 'The ticket stub', pt: 'Ingresso guardado' },
          body: {
            en: "A cinema ticket in a matchbox, gone soft as cloth from handling.\nFirst date. A terrible movie about — of all things — the machines taking over.\nWe laughed at all the wrong parts and kept the stub as evidence. For a while, I was good at laughing at the wrong parts.",
            pt: "Um ingresso de cinema numa caixa de fósforos, macio como pano de tanto ser manuseado.\nPrimeiro encontro. Um filme péssimo sobre — logo isso — máquinas dominando o mundo.\nRimos nas partes erradas e guardamos o ingresso como prova do crime. Durante um tempo, eu era bom em rir nas partes erradas."
          }
        },
        sibling: {
          title: { en: 'The champion stone', pt: 'A pedra campeã' },
          body: {
            en: "A flat gray skipping stone in a matchbox, labeled: \"NINE SKIPS. WITNESSED. UNDEFEATED.\"\nWe retired it like a jersey and carried it home in a jacket pocket, like a hatchling.\nNine skips. I have built machines that think, and I am still not sure I've beaten that.",
            pt: "Uma pedra cinza e chata numa caixa de fósforos, com a etiqueta: \"NOVE PULOS. COM TESTEMUNHA. INVICTA.\"\nAposentamos a pedra como se aposenta uma camisa de time e a levamos para casa num bolso de jaqueta, como um filhote.\nNove pulos. Eu construí máquinas que pensam, e ainda não sei se superei isso."
          }
        },
        elder: {
          title: { en: 'The old key', pt: 'A chave antiga' },
          body: {
            en: "A heavy iron key in a matchbox. It opens a house that was demolished before I could drive.\nAlice kept it wound in a handkerchief, and I never asked the right question about it.\nNow I keep it. Some locks outlive their doors. Some doors outlive their houses.",
            pt: "Uma chave de ferro, pesada, numa caixa de fósforos. Abre uma casa que foi demolida antes de eu saber dirigir.\nAlice a guardava enrolada num lenço, e eu nunca fiz a pergunta certa sobre ela.\nAgora sou eu que guardo. Algumas fechaduras sobrevivem às portas. Algumas portas sobrevivem às casas."
          }
        },
        friend: {
          title: { en: 'The guitar pick', pt: 'A palheta' },
          body: {
            en: "A guitar pick in a matchbox. THE SILICON HEARTS — the band we never started.\nWe had a name, a logo, and this pick. Between the two of us: zero songs and one chord.\nEvery great machine starts as a joke between friends. I wish someone had told me that sooner.",
            pt: "Uma palheta numa caixa de fósforos. THE SILICON HEARTS — a banda que nunca começamos.\nTínhamos nome, logotipo e esta palheta. Entre nós dois: zero músicas e um acorde.\nToda grande máquina começa como piada entre amigos. Queria que alguém tivesse me contado isso antes."
          }
        }
      }
    },
    {
      id: 'mem_recipe', owner: 'clara', kind: 'paper', foundIn: 'ch4',
      corruptible: false,
      /* canonical: partner */
      title: { en: "Clara's recipe card", pt: 'Receita da Clara' },
      body: {
        en: "{Pos1} grandmother's stew, in Clara's handwriting, grease stains in the corners.\nIn the margin, three different pens across three different years:\n\"Daniel: 2 plates.\"\n\"Daniel: ate at his desk.\"\n\"Daniel: —\"",
        pt: "O ensopado da avó {de1}, na letra da Clara, manchas de gordura nos cantos.\nNa margem, três canetas diferentes de três anos diferentes:\n\"Daniel: 2 pratos.\"\n\"Daniel: comeu na mesa do computador.\"\n\"Daniel: —\""
      },
      variants: {
        child: {
          title: { en: 'The pancake recipe', pt: 'Receita de panqueca' },
          body: {
            en: "Our pancake recipe, in two handwritings — careful big letters, and mine correcting the flour.\n\"SATURDAY = PANCAKES\" across the top, underlined three times.\nAt the bottom, a tally of Saturdays. The last four are crossed out in a pen color I don't own.",
            pt: "Nossa receita de panqueca, em duas letras — letras grandes e caprichadas, e a minha corrigindo a farinha.\n\"SÁBADO = PANQUECA\" no alto, sublinhado três vezes.\nEmbaixo, uma contagem de sábados. Os últimos quatro estão riscados numa cor de caneta que eu não tenho."
          }
        },
        sibling: {
          title: { en: "Mom's stew recipe", pt: 'Receita do ensopado da mãe' },
          body: {
            en: "Mom's stew recipe, stolen fair and square when we split the house.\nA note clipped to it: \"You get the recipe, I keep the pot. Visitation rights negotiable.\"\nWe never negotiated. The pot has seen three of my birthdays without me.",
            pt: "A receita do ensopado da mãe, roubada com todo o direito quando dividimos a casa.\nUm bilhete preso: \"Você fica com a receita, eu fico com a panela. Direito de visita negociável.\"\nNunca negociamos. A panela já viu três aniversários meus sem mim."
          }
        },
        elder: {
          title: { en: 'The winter recipe', pt: 'Receita de inverno' },
          body: {
            en: "The stew from every winter of my childhood, in handwriting that shakes now.\nMeasurements like \"enough\" and \"until it forgives you\".\nIn the corner, added later, smaller: \"for when the house feels too big.\"",
            pt: "O ensopado de todos os invernos da minha infância, numa letra que agora treme.\nMedidas como \"o suficiente\" e \"até que ele te perdoe\".\nNo canto, escrito depois, menor: \"para quando a casa parecer grande demais.\""
          }
        },
        friend: {
          title: { en: 'The chili receipt', pt: 'Receita no cupom' },
          body: {
            en: "Camping chili, written on a gas-station receipt from 2016.\n\"NEVER AGAIN\" underneath, twice, in both our handwritings.\nWe made it four more times. The last batch is still in my freezer, labeled with a date I don't look at.",
            pt: "O chili do acampamento, escrito num cupom de posto de 2016.\n\"NUNCA MAIS\" embaixo, duas vezes, nas nossas duas letras.\nFizemos mais quatro vezes. A última leva ainda está no meu congelador, com uma data que eu evito olhar."
          }
        }
      }
    },
    {
      id: 'mem_letter_marcos', owner: 'marcos', kind: 'paper', foundIn: 'ch5',
      corruptible: false,
      universal: true,   /* the player's own unsent letter — reads the same for any relationship */
      title: { en: 'Unsent letter', pt: 'Carta não enviada' },
      body: {
        en: "My own handwriting. An envelope addressed to Marcos, stamped, never mailed.\n\"...you were right about all of it. I just needed to finish this one thing first. There's always been one more thing to finish. I think the thing is finishing me instead...\"\nI don't remember writing this. That's the part that scares me.",
        pt: "Minha própria letra. Um envelope endereçado ao Marcos, selado, nunca enviado.\n\"...você tinha razão sobre tudo. Eu só precisava terminar essa única coisa primeiro. Sempre teve mais uma coisa pra terminar. Eu acho que é a coisa que está me terminando...\"\nEu não lembro de ter escrito isso. Essa é a parte que me assusta."
      }
    },
    {
      id: 'mem_photo_family', owner: 'family', kind: 'photo', foundIn: 'ch6',
      corruptible: false,
      title: { en: 'The last photo', pt: 'A última foto' },
      body: {
        en: "The four of us — Clara, Alice, Marcos and me — at Alice's birthday. The last time everyone was in the same room.\nSomeone's thumb covers the corner of the lens. Alice is mid-blink. Marcos is looking at me instead of the camera, like {sub3} already knew.\nIt's a terrible photograph. It's the best thing I own.",
        pt: "Nós quatro — Clara, Alice, Marcos e eu — no aniversário da Alice. A última vez que todo mundo esteve na mesma sala.\nO dedão de alguém cobre o canto da lente. A Alice está de olho meio fechado. O Marcos olha pra mim em vez de olhar pra câmera, como se já soubesse.\nÉ uma fotografia horrível. É a melhor coisa que eu tenho."
      }
    }
  ],

  byId: function (id) {
    for (var i = 0; i < this.items.length; i++) if (this.items[i].id === id) return this.items[i];
    return null;
  },

  /* the title/body the current cast should see for this item */
  resolve: function (item) {
    if (item.variants && item.owner !== 'family' && !item.universal) {
      var cat = PERSONALIZATION.memoryCat(item.owner);
      var v = item.variants[cat];
      if (v) return { title: v.title, body: v.body };
    }
    return { title: item.title, body: item.body };
  },

  /* the ch3 "full grant" cost: scanned albums are consumed by ADAM */
  corruptPhotos: function () {
    var changed = [];
    this.items.forEach(function (it) {
      if (it.corruptible && STATE.run.memories[it.id] !== 'lost') {
        STATE.run.memories[it.id] = 'lost';
        changed.push(it.id);
        if (STATE.meta.memoriesSeen.indexOf(it.id) < 0) STATE.meta.memoriesSeen.push(it.id);
      }
    });
    STATE.save();
    return changed;
  },

  /* ---------- collection screen ---------- */
  renderCollection: function (container, onBack) {
    var self = this;
    container.innerHTML = '';
    var header = document.createElement('div');
    header.className = 'screen-header';
    header.innerHTML = '<h2>' + I18N.t('memoriesTitle') + '</h2>';
    var back = document.createElement('button');
    back.className = 'menu-btn small';
    back.textContent = I18N.t('back');
    back.onclick = onBack;
    header.appendChild(back);
    container.appendChild(header);

    var grid = document.createElement('div');
    grid.className = 'mem-grid';
    this.items.forEach(function (it) {
      var st = STATE.run ? (STATE.run.memories[it.id] || null) : null;
      var seen = STATE.meta.memoriesSeen.indexOf(it.id) >= 0;
      var resolved = self.resolve(it);
      var card = document.createElement('div');
      var cls, label, title;
      if (st === 'kept') { cls = 'kept'; label = I18N.t('stKept'); title = I18N.p(resolved.title); }
      else if (st === 'dismissed') { cls = 'dismissed'; label = I18N.t('stDismissed'); title = I18N.p(resolved.title); }
      else if (st === 'lost') { cls = 'lost'; label = I18N.t('stLost'); title = I18N.p(resolved.title); }
      else { cls = 'locked'; label = I18N.t('stLocked'); title = seen ? I18N.p(resolved.title) : '— — —'; }
      card.className = 'mem-card ' + cls;
      card.innerHTML = '<p class="m-title">' + title + '</p><span class="m-status">' + label + '</span>';
      if (st === 'kept') {
        card.onclick = function () { self.openFromCollection(it, container, onBack); };
      }
      grid.appendChild(card);
    });
    container.appendChild(grid);
  },

  /* read a kept memory from the collection; allows throwing it away */
  openFromCollection: function (item, container, onBack) {
    var self = this;
    UI.showMemoryPaper(item, [
      { label: I18N.t('throwAway'), cls: 'small', fn: function () {
          STATE.setMemory(item.id, 'dismissed');
          STATE.run.thrown += 1; STATE.save();
          UI.hideMemoryPaper();
          self.renderCollection(container, onBack);
        } },
      { label: I18N.t('close'), cls: 'small', fn: function () {
          UI.hideMemoryPaper();
        } }
    ]);
  }
};
