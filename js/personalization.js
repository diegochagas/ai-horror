/* First-run personalization and story text adaptation. */
var PERSONALIZATION = {
  roleIndex: { clara: 0, alice: 1, marcos: 2 },

  copy: {
    nameTitle: { en: 'What should ADAM call you?', pt: 'Como o ADAM deve te chamar?' },
    nameHint: {
      en: 'Use your own name to keep it saved. Use the default if you want the game to ask again next new story.',
      pt: 'Use seu nome para salvar para sempre. Use o padrão se quiser que o jogo pergunte de novo na próxima história.'
    },
    yourName: { en: 'Your name', pt: 'Seu nome' },
    saveName: { en: 'Save my name', pt: 'Salvar meu nome' },
    useDefaultName: { en: 'Use Daniel for now', pt: 'Usar Daniel por enquanto' },
    familyTitle: { en: 'Do you have family?', pt: 'Você tem família?' },
    familyHint: {
      en: 'The default story remembers Clara, Alice, and Marcos. You can replace them with your own people.',
      pt: 'A história padrão lembra Clara, Alice e Marcos. Você pode trocar por pessoas suas.'
    },
    yesFamily: { en: 'Yes', pt: 'Sim' },
    noFamily: { en: 'No', pt: 'Não' },
    useDefaultFamily: { en: 'Use default family for now', pt: 'Usar família padrão por enquanto' },
    familyCountTitle: { en: 'How many family members?', pt: 'Quantos familiares?' },
    familyCountHint: {
      en: 'The story can remember up to six names. The first three fill the original Clara, Alice, and Marcos story roles.',
      pt: 'A história pode lembrar até seis nomes. Os três primeiros ocupam os papéis originais de Clara, Alice e Marcos.'
    },
    familyCount: { en: 'Family members', pt: 'Familiares' },
    continue: { en: 'Continue', pt: 'Continuar' },
    back: { en: 'Back', pt: 'Voltar' },
    familyMembersTitle: { en: 'Name your family', pt: 'Nomeie sua família' },
    familyMembersHint: {
      en: 'Fields start with the default cast. Save them as yours to stop this question from returning.',
      pt: 'Os campos começam com o elenco padrão. Salve como seus para esta pergunta não voltar.'
    },
    member: { en: 'Family member', pt: 'Familiar' },
    kinship: { en: 'Kinship', pt: 'Parentesco' },
    name: { en: 'Name', pt: 'Nome' },
    saveFamily: { en: 'Save my family', pt: 'Salvar minha família' },
    cancel: { en: 'Cancel', pt: 'Cancelar' }
  },

  data: function () {
    if (!STATE.meta.personalization) {
      STATE.meta.personalization = STATE.defaultPersonalization();
    }
    STATE.meta.personalization = STATE.normalizePersonalization(STATE.meta.personalization);
    return STATE.meta.personalization;
  },

  saveData: function (data) {
    STATE.meta.personalization = STATE.normalizePersonalization(data);
    STATE.save();
  },

  uiText: function (node) {
    if (node == null) return '';
    if (typeof node === 'string') return node;
    return node[this.lang()] != null ? node[this.lang()] : (node.en || '');
  },

  needsPlayerName: function () {
    return this.data().playerNameSource !== 'custom';
  },

  needsFamily: function () {
    return this.data().familySource === 'default';
  },

  needsSetup: function () {
    return this.needsPlayerName() || this.needsFamily();
  },

  runSetup: function (onDone, onCancel) {
    var self = this;
    UI.show('title');
    UI.setAdamColor('prologue');
    UI.el('rec-day').textContent = '';

    function familyStep() {
      if (self.needsFamily()) self.renderFamilyChoice(onDone, onCancel);
      else onDone();
    }

    if (this.needsPlayerName()) this.renderNameForm(familyStep, onCancel);
    else familyStep();
  },

  cleanInput: function (value, fallback, max) {
    var text = String(value || '')
      .replace(/[\u0000-\u001f\u007f]/g, '')
      .replace(/[<>]/g, '')
      .replace(/\s+/g, ' ')
      .trim();
    if (!text) text = fallback;
    return text.slice(0, max || 36);
  },

  panel: function (title, hint, onCancel) {
    var scr = UI.el('screen-title');
    scr.innerHTML = '';

    var panel = document.createElement('div');
    panel.className = 'personal-panel';
    panel.addEventListener('pointerdown', function (e) { e.stopPropagation(); });

    var h = document.createElement('h2');
    h.textContent = this.uiText(title);
    panel.appendChild(h);

    if (hint) {
      var p = document.createElement('p');
      p.className = 'personal-hint';
      p.textContent = this.uiText(hint);
      panel.appendChild(p);
    }

    scr.appendChild(panel);
    UI.show('title');
    return panel;
  },

  button: function (label, fn, small) {
    var b = document.createElement('button');
    b.type = 'button';
    b.className = 'menu-btn' + (small ? ' small' : '');
    b.textContent = this.uiText(label);
    b.addEventListener('pointerdown', function (e) { e.stopPropagation(); });
    b.addEventListener('click', function (e) {
      e.stopPropagation();
      AUDIO.ensure();
      fn();
    });
    return b;
  },

  renderNameForm: function (next, cancel) {
    var self = this;
    var data = this.data();
    var panel = this.panel(this.copy.nameTitle, this.copy.nameHint, cancel);
    var form = document.createElement('form');
    form.className = 'personal-form';

    var label = document.createElement('label');
    label.textContent = this.uiText(this.copy.yourName);
    var input = document.createElement('input');
    input.type = 'text';
    input.maxLength = 36;
    input.autocomplete = 'name';
    input.value = data.playerName || CONFIG.DEFAULT_CAST.playerName;
    label.appendChild(input);
    form.appendChild(label);

    var actions = document.createElement('div');
    actions.className = 'personal-actions';
    actions.appendChild(this.button(this.copy.saveName, function () {
      var p = self.data();
      p.playerName = self.cleanInput(input.value, CONFIG.DEFAULT_CAST.playerName, 36);
      p.playerNameSource = 'custom';
      self.saveData(p);
      next();
    }));
    actions.appendChild(this.button(this.copy.useDefaultName, function () {
      var p = self.data();
      p.playerName = CONFIG.DEFAULT_CAST.playerName;
      p.playerNameSource = 'default';
      self.saveData(p);
      next();
    }, true));
    actions.appendChild(this.button(this.copy.cancel, cancel, true));
    form.appendChild(actions);

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      actions.querySelector('button').click();
    });
    panel.appendChild(form);
    setTimeout(function () { input.focus(); input.select(); }, 0);
  },

  renderFamilyChoice: function (done, cancel) {
    var self = this;
    var panel = this.panel(this.copy.familyTitle, this.copy.familyHint, cancel);
    var actions = document.createElement('div');
    actions.className = 'personal-actions stacked';
    actions.appendChild(this.button(this.copy.yesFamily, function () {
      self.renderFamilyCount(done, cancel);
    }));
    actions.appendChild(this.button(this.copy.noFamily, function () {
      var p = self.data();
      p.hasFamily = false;
      p.familySource = 'none';
      p.familyCount = 0;
      p.family = [];
      self.saveData(p);
      done();
    }));
    actions.appendChild(this.button(this.copy.useDefaultFamily, function () {
      self.saveDefaultFamily();
      done();
    }, true));
    actions.appendChild(this.button(this.copy.cancel, cancel, true));
    panel.appendChild(actions);
  },

  renderFamilyCount: function (done, cancel) {
    var self = this;
    var data = this.data();
    var panel = this.panel(this.copy.familyCountTitle, this.copy.familyCountHint, cancel);
    var form = document.createElement('form');
    form.className = 'personal-form';

    var label = document.createElement('label');
    label.textContent = this.uiText(this.copy.familyCount);
    var input = document.createElement('input');
    input.type = 'number';
    input.min = '1';
    input.max = String(CONFIG.DEFAULT_CAST.maxFamily);
    input.step = '1';
    input.inputMode = 'numeric';
    input.value = String(data.familyCount || CONFIG.DEFAULT_CAST.family.length);
    label.appendChild(input);
    form.appendChild(label);

    var actions = document.createElement('div');
    actions.className = 'personal-actions';
    actions.appendChild(this.button(this.copy.continue, function () {
      var count = parseInt(input.value, 10);
      if (!isFinite(count)) count = CONFIG.DEFAULT_CAST.family.length;
      count = Math.max(1, Math.min(CONFIG.DEFAULT_CAST.maxFamily, count));
      self.renderFamilyMembers(count, done, function () {
        self.renderFamilyChoice(done, cancel);
      });
    }));
    actions.appendChild(this.button(this.copy.back, function () {
      self.renderFamilyChoice(done, cancel);
    }, true));
    form.appendChild(actions);

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      actions.querySelector('button').click();
    });
    panel.appendChild(form);
    setTimeout(function () { input.focus(); input.select(); }, 0);
  },

  renderFamilyMembers: function (count, done, back) {
    var self = this;
    var panel = this.panel(this.copy.familyMembersTitle, this.copy.familyMembersHint, back);
    var form = document.createElement('form');
    form.className = 'personal-form family-editor';
    var rows = [];

    for (var i = 0; i < count; i++) {
      var def = this.defaultMember(i);
      var row = document.createElement('div');
      row.className = 'family-row';

      var title = document.createElement('div');
      title.className = 'family-row-title';
      title.textContent = this.uiText(this.copy.member) + ' ' + (i + 1);
      row.appendChild(title);

      var kinLabel = document.createElement('label');
      kinLabel.textContent = this.uiText(this.copy.kinship);
      var kinInput = document.createElement('input');
      kinInput.type = 'text';
      kinInput.maxLength = 28;
      kinInput.value = this.uiText(def.kinship);
      kinLabel.appendChild(kinInput);
      row.appendChild(kinLabel);

      var nameLabel = document.createElement('label');
      nameLabel.textContent = this.uiText(this.copy.name);
      var nameInput = document.createElement('input');
      nameInput.type = 'text';
      nameInput.maxLength = 36;
      nameInput.autocomplete = 'off';
      nameInput.value = def.name;
      nameLabel.appendChild(nameInput);
      row.appendChild(nameLabel);

      rows.push({ def: def, kin: kinInput, name: nameInput });
      form.appendChild(row);
    }

    var actions = document.createElement('div');
    actions.className = 'personal-actions';
    actions.appendChild(this.button(this.copy.saveFamily, function () {
      self.saveCustomFamily(rows);
      done();
    }));
    actions.appendChild(this.button(this.copy.useDefaultFamily, function () {
      self.saveDefaultFamily();
      done();
    }, true));
    actions.appendChild(this.button(this.copy.back, back, true));
    form.appendChild(actions);

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      actions.querySelector('button').click();
    });
    panel.appendChild(form);
    setTimeout(function () {
      if (rows[0]) { rows[0].name.focus(); rows[0].name.select(); }
    }, 0);
  },

  defaultMember: function (i) {
    var def = CONFIG.DEFAULT_CAST.family[i];
    if (def) {
      return {
        role: def.role,
        owner: def.owner,
        name: def.name,
        kinship: { en: def.kinship.en, pt: def.kinship.pt }
      };
    }
    return {
      role: 'relative' + (i + 1),
      owner: 'relative' + (i + 1),
      name: 'Relative ' + (i + 1),
      kinship: { en: 'relative', pt: 'parente' }
    };
  },

  saveDefaultFamily: function () {
    var p = this.data();
    var base = STATE.defaultPersonalization();
    p.hasFamily = true;
    p.familySource = 'default';
    p.familyCount = base.familyCount;
    p.family = base.family;
    this.saveData(p);
  },

  saveCustomFamily: function (rows) {
    var self = this;
    var p = this.data();
    p.hasFamily = true;
    p.familySource = 'custom';
    p.family = rows.map(function (row, i) {
      var def = row.def || self.defaultMember(i);
      var defaultKin = self.uiText(def.kinship);
      var kinText = self.cleanInput(row.kin.value, defaultKin, 28);
      var kinship = kinText === defaultKin
        ? { en: def.kinship.en, pt: def.kinship.pt }
        : { en: kinText, pt: kinText };
      return {
        role: def.role,
        owner: def.owner,
        name: self.cleanInput(row.name.value, def.name, 36),
        kinship: kinship,
        source: 'custom'
      };
    });
    p.familyCount = p.family.length;
    this.saveData(p);
  },

  /* ---------- story rendering ---------- */

  render: function (text) {
    if (!text) return text;
    var out = this.replaceTokens(text);
    out = this.replacePhrases(out);
    out = this.replaceNames(out);
    return out;
  },

  profile: function () {
    var data = (typeof STATE !== 'undefined' && STATE.meta) ? this.data() : {
      playerName: CONFIG.DEFAULT_CAST.playerName,
      hasFamily: true,
      family: CONFIG.DEFAULT_CAST.family
    };
    return {
      playerName: data.playerName || CONFIG.DEFAULT_CAST.playerName,
      hasFamily: data.hasFamily && data.family && data.family.length > 0,
      family: data.family || []
    };
  },

  member: function (role) {
    var p = this.profile();
    if (!p.hasFamily) return null;
    var idx = this.roleIndex[role];
    if (idx == null) idx = 0;
    return p.family[idx] || p.family[p.family.length - 1] || null;
  },

  memberAt: function (index) {
    var p = this.profile();
    if (!p.hasFamily) return null;
    return p.family[index] || p.family[p.family.length - 1] || null;
  },

  lang: function () {
    return (typeof I18N !== 'undefined' && I18N.lang) || 'en';
  },

  lower: function (text) {
    return String(text || '').toLocaleLowerCase(this.lang() === 'pt' ? 'pt-BR' : 'en-US');
  },

  cap: function (text) {
    text = String(text || '');
    return text ? text.charAt(0).toLocaleUpperCase(this.lang() === 'pt' ? 'pt-BR' : 'en-US') + text.slice(1) : text;
  },

  noOne: function (cap) {
    var text = this.lang() === 'pt' ? 'ninguém' : 'no one';
    return cap ? this.cap(text) : text;
  },

  nameFor: function (role, lower) {
    var m = this.member(role);
    var name = m ? m.name : this.noOne(false);
    return lower ? this.lower(name) : name;
  },

  possessive: function (name) {
    if (this.lang() === 'pt') return 'de ' + name;
    return /s$/i.test(name) ? name + "'" : name + "'s";
  },

  kinship: function (role) {
    var m = this.member(role) || this.memberAt(0);
    if (!m) return this.noOne(false);
    return this.uiText(m.kinship);
  },

  myKinship: function (role) {
    var kin = this.kinship(role);
    if (kin === this.noOne(false)) return kin;
    if (this.lang() === 'pt') {
      var k = this.lower(kin);
      var feminine = /^(mae|mãe|esposa|filha|irma|irmã|tia|avo|avó|prima|namorada|companheira)\b/.test(k);
      return (feminine ? 'minha ' : 'meu ') + kin;
    }
    return /^my\b/i.test(kin) ? kin : 'my ' + kin;
  },

  list: function (items) {
    items = (items || []).filter(Boolean);
    if (!items.length) return this.noOne(false);
    if (items.length === 1) return items[0];
    var sep = this.lang() === 'pt' ? ' e ' : ' and ';
    if (items.length === 2) return items[0] + sep + items[1];
    var last = items[items.length - 1];
    return items.slice(0, -1).join(', ') + (this.lang() === 'pt' ? ' e ' : ', and ') + last;
  },

  familyNames: function (limit) {
    var p = this.profile();
    if (!p.hasFamily) return [];
    var arr = p.family;
    if (limit != null) arr = arr.slice(0, limit);
    return arr.map(function (m) { return m.name; });
  },

  familyList: function (limit, lower) {
    var text = this.list(this.familyNames(limit));
    return lower ? this.lower(text) : text;
  },

  numberWord: function (n) {
    var en = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven'];
    var pt = ['zero', 'um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete'];
    var arr = this.lang() === 'pt' ? pt : en;
    return arr[n] || String(n);
  },

  replaceTokens: function (text) {
    var self = this;
    var p = this.profile();
    var token = {
      playerName: p.playerName,
      playerNameLower: this.lower(p.playerName),
      familyList: this.familyList(),
      familyListLower: this.familyList(null, true),
      family1Name: this.nameFor('clara'),
      family2Name: this.nameFor('alice'),
      family3Name: this.nameFor('marcos'),
      family1Kinship: this.kinship('clara'),
      family2Kinship: this.kinship('alice'),
      family3Kinship: this.kinship('marcos')
    };
    return text.replace(/\{([a-zA-Z0-9_]+)\}/g, function (match, key) {
      return token[key] != null ? token[key] : match;
    });
  },

  replacePhrases: function (text) {
    var out = text;
    var p = this.profile();
    var hasFamily = p.hasFamily;
    var names = this.familyNames();
    var familyList = this.familyList();
    var familyListLower = this.familyList(null, true);
    var first = this.nameFor('clara');
    var second = this.nameFor('alice');
    var third = this.nameFor('marcos');
    var countWithMe = hasFamily ? p.family.length + 1 : 1;
    var countWord = this.numberWord(countWithMe);
    var countWordCap = this.cap(countWord);
    var familyAndMe = hasFamily ? this.list(names.concat(['me'])) : 'me';
    var familyAndMePt = hasFamily ? this.list(names.concat(['eu'])) : 'eu';
    var firstInitial = (this.member('clara') ? this.member('clara').name.charAt(0) : 'N').toLocaleUpperCase();

    function repl(a, b) { out = out.split(a).join(b); }

    repl('A Message From Clara', hasFamily ? 'A Message From ' + first : 'A Message From Nowhere');
    repl('Uma Mensagem da Clara', hasFamily ? 'Uma Mensagem de ' + first : 'Uma Mensagem de Lugar Nenhum');
    repl('Embers — Clara', hasFamily ? 'Embers — ' + first : 'Embers — The Letter');
    repl('Brasas — Clara', hasFamily ? 'Brasas — ' + first : 'Brasas — A Carta');
    repl('Embers — Alice', hasFamily ? 'Embers — ' + second : 'Embers — The Drawing');
    repl('Brasas — Alice', hasFamily ? 'Brasas — ' + second : 'Brasas — O Desenho');
    repl('Embers — Marcos', hasFamily ? 'Embers — ' + third : 'Embers — The Voice');
    repl('Brasas — Marcos', hasFamily ? 'Brasas — ' + third : 'Brasas — A Voz');

    repl('Clara, Alice and Marcos', familyList);
    repl('clara and alice and marcos', familyListLower);
    repl('Clara and Alice', this.list(this.familyNames(2)));
    repl('Clara e Alice', this.list(this.familyNames(2)));
    repl('Clara, Alice, Marcos and me', familyAndMe);
    repl('Clara, Alice, Marcos e eu', familyAndMePt);
    repl('a woman named Clara', hasFamily ? 'someone named ' + first : 'someone with my eyes');
    repl('uma mulher chamada Clara', hasFamily ? 'alguém chamado ' + first : 'alguém com os meus olhos');

    repl('The four of us', hasFamily ? 'The ' + countWord + ' of us' : 'Me alone');
    repl('the four of us', hasFamily ? 'the ' + countWord + ' of us' : 'me alone');
    repl('Nós quatro', hasFamily ? 'Nós ' + countWord : 'Eu, sozinho');
    repl('nós quatro', hasFamily ? 'nós ' + countWord : 'eu, sozinho');
    repl('Four stick figures', hasFamily ? countWordCap + ' stick figures' : 'One stick figure');
    repl('four stick figures', hasFamily ? countWord + ' stick figures' : 'one stick figure');
    repl('Quatro bonecos de palito', hasFamily ? countWordCap + ' bonecos de palito' : 'Um boneco de palito');
    repl('quatro bonecos de palito', hasFamily ? countWord + ' bonecos de palito' : 'um boneco de palito');
    repl('The last time everyone was in the same room.', hasFamily ? 'The last time everyone was in the same room.' : 'The last proof that the room had ever held more than the machine and me.');
    repl('A última vez que todo mundo esteve na mesma sala.', hasFamily ? 'A última vez que todo mundo esteve na mesma sala.' : 'A última prova de que aquela sala já tinha guardado algo além da máquina e de mim.');
    repl('All of us in one frame', hasFamily ? 'All of us in one frame' : 'Me in one frame');
    repl('Todos nós num quadro só', hasFamily ? 'Todos nós num quadro só' : 'Eu num quadro só');

    if (!hasFamily) {
      repl('my marriage', 'the life I kept postponing');
      repl('meu casamento', 'a vida que eu continuava adiando');
      repl('The house is quiet. Clara took Alice to her mother\'s eight months ago.', 'The house is quiet. It has always been quiet. No one left; there was only less and less of me in it.');
      repl('A casa está silenciosa. A Clara levou a Alice pra casa da mãe dela há oito meses.', 'A casa está silenciosa. Sempre foi silenciosa. Ninguém foi embora; só havia cada vez menos de mim nela.');
      repl('my family', 'what I had left');
      repl('minha família', 'o que me restava');
      repl('the whole family', 'everything I had left');
      repl('a família inteira', 'tudo o que me restava');
      repl('his family', 'his empty house');
      repl('a própria família', 'a própria vida');
      repl('the family you lost', 'the life you lost');
      repl('a family', 'someone');
      repl('uma família', 'alguém');
      repl('That\'s how this family works', 'That is how loneliness works');
      repl('É assim que essa família funciona', 'É assim que a solidão funciona');
      repl('I never found them.', 'I never found a way back.');
      repl('Nunca encontrei os três.', 'Nunca encontrei um caminho de volta.');
      repl("It's a common name.", 'It was probably another ghost.');
      repl('É um nome comum.', 'Provavelmente era outro fantasma.');
      repl('I kept nothing of them.', 'I kept nothing of myself.');
      repl('Não guardei nada deles.', 'Não guardei nada de mim.');
      repl('Her mother is listed at a camp in the mountains.', 'There is a camp in the mountains.');
      repl('A mãe dela está listada num acampamento nas montanhas.', 'Existe um acampamento nas montanhas.');
    }

    repl('my brother', this.myKinship('marcos'));
    repl('My brother', this.cap(this.myKinship('marcos')));
    repl('meu irmão', this.myKinship('marcos'));
    repl('Meu irmão', this.cap(this.myKinship('marcos')));
    repl('— C.', '— ' + firstInitial + '.');

    return out;
  },

  replaceNames: function (text) {
    var out = text;
    var player = this.profile().playerName;
    var playerLower = this.lower(player);
    var first = this.nameFor('clara');
    var second = this.nameFor('alice');
    var third = this.nameFor('marcos');
    var firstLower = this.nameFor('clara', true);
    var secondLower = this.nameFor('alice', true);
    var thirdLower = this.nameFor('marcos', true);

    function rx(pattern, value) {
      out = out.replace(pattern, function () { return value; });
    }

    rx(/\bDaniel\b/g, player);
    rx(/\bdaniel\b/g, playerLower);

    rx(/\bClara's\b/g, this.possessive(first));
    rx(/\bAlice's\b/g, this.possessive(second));
    rx(/\bMarcos's\b/g, this.possessive(third));

    rx(/\bda Clara\b/g, 'de ' + first);
    rx(/\bDa Clara\b/g, 'De ' + first);
    rx(/\bda Alice\b/g, 'de ' + second);
    rx(/\bDa Alice\b/g, 'De ' + second);
    rx(/\bdo Marcos\b/g, 'de ' + third);
    rx(/\bDo Marcos\b/g, 'De ' + third);
    rx(/\bA Clara\b/g, first);
    rx(/\ba Clara\b/g, first);
    rx(/\bA Alice\b/g, second);
    rx(/\ba Alice\b/g, second);
    rx(/\bO Marcos\b/g, third);
    rx(/\bo Marcos\b/g, third);

    rx(/\bClara\b/g, first);
    rx(/\bclara\b/g, firstLower);
    rx(/\bAlice\b/g, second);
    rx(/\balice\b/g, secondLower);
    rx(/\bMarcos\b/g, third);
    rx(/\bmarcos\b/g, thirdLower);

    return out;
  }
};
