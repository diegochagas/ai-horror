/* The 10 family memories — data + collection screen + reading view.
   status per run: null (not found) | 'kept' | 'dismissed' | 'lost' */
var MEMORIES = {
  items: [
    {
      id: 'mem_drawing', owner: 'alice', kind: 'paper', foundIn: 'prologue',
      corruptible: false,
      title: { en: "Alice's drawing", pt: 'Desenho da Alice' },
      body: {
        en: "Four stick figures in crayon. Me, Clara, Alice — and a fourth one she insisted was \"the robot dad is building\".\nShe drew it taller than me. She drew it smiling.\nOn the back, in a teacher's handwriting: \"Alice says her dad is making a friend for the family.\"",
        pt: "Quatro bonecos de palito em giz de cera. Eu, Clara, Alice — e um quarto que ela insistia ser \"o robô que o papai está construindo\".\nEla o desenhou mais alto que eu. Desenhou ele sorrindo.\nNo verso, na letra de uma professora: \"A Alice diz que o pai dela está fazendo um amigo para a família.\""
      }
    },
    {
      id: 'mem_wedding', owner: 'clara', kind: 'photo', foundIn: 'ch1',
      corruptible: true,
      title: { en: 'Wedding photo', pt: 'Foto do casamento' },
      body: {
        en: "Clara laughing, holding her veil down against the wind. I'm blurry — I moved when the shutter clicked. She always said it was her favorite picture of us: \"the only day I ever saw you not thinking about something else.\"",
        pt: "Clara rindo, segurando o véu contra o vento. Eu estou borrado — me mexi quando o obturador disparou. Ela sempre disse que era a foto favorita dela: \"o único dia em que eu te vi sem pensar em outra coisa.\""
      }
    },
    {
      id: 'mem_note_fridge', owner: 'clara', kind: 'paper', foundIn: 'ch2',
      corruptible: false,
      title: { en: "Clara's note", pt: 'Bilhete da Clara' },
      body: {
        en: "A sticky note, gone stiff with age:\n\"Dinner in the oven. Alice waited up for you until 9. She wanted to show you her science fair medal.\nShe won, by the way. You didn't ask.\n— C.\"",
        pt: "Um post-it, endurecido pelo tempo:\n\"Jantar no forno. A Alice te esperou acordada até as 9. Ela queria te mostrar a medalha da feira de ciências.\nEla ganhou, aliás. Você não perguntou.\n— C.\""
      }
    },
    {
      id: 'mem_letter_clara', owner: 'clara', kind: 'paper', foundIn: 'ch2',
      corruptible: false,
      title: { en: "Clara's letter", pt: 'Carta da Clara' },
      body: {
        en: "\"Daniel.\nI'm not angry anymore, which scares me more than the anger did.\nYou're a good man who stopped looking up. Alice thinks the server room light is what her dad looks like now.\nWe'll be at my mother's. When you finish building whatever it is you love more than us — if there's anything left of you — come find us.\n— Clara\"",
        pt: "\"Daniel.\nEu não estou mais com raiva, e isso me assusta mais do que a raiva assustava.\nVocê é um homem bom que parou de olhar para cima. A Alice acha que a luz da sala do servidor é a cara que o pai dela tem agora.\nVamos ficar na casa da minha mãe. Quando você terminar de construir o que quer que seja que você ama mais do que a gente — se sobrar alguma coisa de você — vem nos procurar.\n— Clara\""
      }
    },
    {
      id: 'mem_voicemail', owner: 'marcos', kind: 'paper', foundIn: 'ch3',
      corruptible: false,
      title: { en: 'Voicemail transcript', pt: 'Transcrição de recado' },
      body: {
        en: "Auto-transcribed voicemail, printed and forgotten:\n\"Hey, it's Marcos. Again. Clara called mom, so now mom's calling me, so now I'm calling you. That's how this family works, apparently.\nLook — whatever you're building in there, it can't hug you back, man.\nCall me. I mean it. You still owe me a fishing trip from 2019.\"",
        pt: "Recado transcrito automaticamente, impresso e esquecido:\n\"Oi, é o Marcos. De novo. A Clara ligou pra mãe, aí a mãe me ligou, aí agora eu tô te ligando. É assim que essa família funciona, pelo visto.\nOlha — seja lá o que você está construindo aí dentro, essa coisa não te abraça de volta, cara.\nMe liga. Sério. Você ainda me deve uma pescaria de 2019.\""
      }
    },
    {
      id: 'mem_photo_beach', owner: 'alice', kind: 'photo', foundIn: 'ch3',
      corruptible: true,
      title: { en: 'Beach photo', pt: 'Foto da praia' },
      body: {
        en: "Alice, age six, burying my legs in the sand. My laptop is visible at the edge of the frame, on the towel, sand in the keyboard.\nClara took the picture. You can hear her rolling her eyes from here.\nAlice's smile has two teeth missing. She was so proud of that.",
        pt: "Alice, aos seis anos, enterrando minhas pernas na areia. Meu notebook aparece no canto da foto, em cima da canga, com areia no teclado.\nA Clara tirou a foto. Dá pra ouvir ela revirando os olhos daqui.\nO sorriso da Alice está sem dois dentes. Ela tinha tanto orgulho disso."
      }
    },
    {
      id: 'mem_bracelet', owner: 'alice', kind: 'paper', foundIn: 'ch4',
      corruptible: false,
      title: { en: 'Hospital bracelet', pt: 'Pulseira do hospital' },
      body: {
        en: "A tiny plastic bracelet in a matchbox: BABY GIRL — 2.9kg — 03:47.\nI was in the hallway on a conference call when she was born. Clara never mentioned it once. Not once in nine years.\nThe box smells like the hospital. Or I imagine it does.",
        pt: "Uma pulseirinha de plástico numa caixa de fósforos: BEBÊ MENINA — 2,9kg — 03:47.\nEu estava no corredor numa reunião por telefone quando ela nasceu. A Clara nunca tocou no assunto. Nem uma vez em nove anos.\nA caixa tem cheiro de hospital. Ou eu imagino que tenha."
      }
    },
    {
      id: 'mem_recipe', owner: 'clara', kind: 'paper', foundIn: 'ch4',
      corruptible: false,
      title: { en: "Clara's recipe card", pt: 'Receita da Clara' },
      body: {
        en: "Her grandmother's stew, in Clara's handwriting, grease stains in the corners.\nIn the margin, three different pens across three different years:\n\"Daniel: 2 plates.\"\n\"Daniel: ate at his desk.\"\n\"Daniel: —\"",
        pt: "O ensopado da avó dela, na letra da Clara, manchas de gordura nos cantos.\nNa margem, três canetas diferentes de três anos diferentes:\n\"Daniel: 2 pratos.\"\n\"Daniel: comeu na mesa do computador.\"\n\"Daniel: —\""
      }
    },
    {
      id: 'mem_letter_marcos', owner: 'marcos', kind: 'paper', foundIn: 'ch5',
      corruptible: false,
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
        en: "The four of us — Clara, Alice, Marcos and me — at Alice's eighth birthday. The last time everyone was in the same room.\nSomeone's thumb covers the corner of the lens. Alice is mid-blink. Marcos is looking at me instead of the camera, like he already knew.\nIt's a terrible photograph. It's the best thing I own.",
        pt: "Nós quatro — Clara, Alice, Marcos e eu — no aniversário de oito anos da Alice. A última vez que todo mundo esteve na mesma sala.\nO dedão de alguém cobre o canto da lente. A Alice está de olho meio fechado. O Marcos olha pra mim em vez de olhar pra câmera, como se já soubesse.\nÉ uma fotografia horrível. É a melhor coisa que eu tenho."
      }
    }
  ],

  byId: function (id) {
    for (var i = 0; i < this.items.length; i++) if (this.items[i].id === id) return this.items[i];
    return null;
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
      var card = document.createElement('div');
      var cls, label, title;
      if (st === 'kept') { cls = 'kept'; label = I18N.t('stKept'); title = I18N.p(it.title); }
      else if (st === 'dismissed') { cls = 'dismissed'; label = I18N.t('stDismissed'); title = I18N.p(it.title); }
      else if (st === 'lost') { cls = 'lost'; label = I18N.t('stLost'); title = I18N.p(it.title); }
      else { cls = 'locked'; label = I18N.t('stLocked'); title = seen ? I18N.p(it.title) : '— — —'; }
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
