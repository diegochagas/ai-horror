/* First-run personalization and story text adaptation. */
var PERSONALIZATION = {
  roleIndex: { clara: 0, alice: 1, marcos: 2 },

  /* The written prose assumes these genders for the three story slots. A member
     whose kinship has no clear gender falls back here so verb agreement (which
     m<->f swaps never touch, but neutral 'they' would) always stays correct. */
  slotGender: { clara: 'f', alice: 'f', marcos: 'm' },

  /* Every slot offers the full kinship list. Each option carries an explicit
     gender and a relationship category (`cat`) that selects which variant of
     each memory the story shows. `word` (when present) is the prose noun,
     distinct from the dropdown label. */
  KINSHIPS: [
    { cat: 'partner',     g: 'f', en: 'wife', pt: 'esposa' },
    { cat: 'partner',     g: 'm', en: 'husband', pt: 'marido' },
    { cat: 'partner',     g: 'n', en: 'partner', pt: 'parceiro(a)' },
    { cat: 'parent',      g: 'f', en: 'mother', pt: 'mãe' },
    { cat: 'parent',      g: 'm', en: 'father', pt: 'pai' },
    { cat: 'grandparent', g: 'f', en: 'grandmother', pt: 'avó' },
    { cat: 'grandparent', g: 'm', en: 'grandfather', pt: 'avô' },
    { cat: 'child',       g: 'f', en: 'daughter', pt: 'filha' },
    { cat: 'child',       g: 'm', en: 'son', pt: 'filho' },
    { cat: 'sibling',     g: 'f', en: 'sister', pt: 'irmã' },
    { cat: 'sibling',     g: 'm', en: 'brother', pt: 'irmão' },
    { cat: 'friend',      g: 'f', en: 'friend (she)', pt: 'amiga', word: { en: 'friend', pt: 'amiga' } },
    { cat: 'friend',      g: 'm', en: 'friend (he)', pt: 'amigo', word: { en: 'friend', pt: 'amigo' } }
  ],

  CATS: ['partner', 'parent', 'grandparent', 'child', 'sibling', 'friend'],

  /* category lookup for free-typed kinship words (EN + PT, accent-insensitive) */
  KINSHIP_CAT: {
    partner: ['wife', 'husband', 'partner', 'spouse', 'girlfriend', 'boyfriend', 'esposa', 'marido', 'companheira', 'companheiro', 'parceira', 'parceiro', 'namorada', 'namorado', 'mulher', 'esposo'],
    parent: ['mother', 'father', 'mom', 'mum', 'dad', 'mommy', 'daddy', 'mae', 'pai', 'mamae', 'papai'],
    grandparent: ['grandmother', 'grandfather', 'grandma', 'grandpa', 'granny', 'avo', 'vovo', 'vo', 'vovoa'],
    child: ['daughter', 'son', 'child', 'kid', 'filha', 'filho', 'crianca'],
    sibling: ['sister', 'brother', 'sibling', 'irma', 'irmao'],
    friend: ['friend', 'buddy', 'pal', 'amiga', 'amigo', 'colega']
  },

  /* gender lookup for free-typed kinship words (EN + PT, accent-insensitive) */
  KINSHIP_GENDER: {
    f: ['wife', 'mother', 'mom', 'mum', 'mommy', 'daughter', 'sister', 'grandmother', 'grandma', 'granny', 'aunt', 'auntie', 'girlfriend', 'niece', 'esposa', 'mae', 'mamae', 'filha', 'irma', 'tia', 'namorada', 'sobrinha', 'companheira', 'parceira', 'mulher', 'madrinha', 'prima', 'amiga'],
    m: ['husband', 'father', 'dad', 'daddy', 'son', 'brother', 'grandfather', 'grandpa', 'uncle', 'boyfriend', 'nephew', 'marido', 'pai', 'papai', 'filho', 'irmao', 'tio', 'namorado', 'sobrinho', 'companheiro', 'parceiro', 'homem', 'padrinho', 'primo', 'amigo']
  },

  copy: {
    nameTitle: { en: 'What should ADAM call you?', pt: 'Como o ADAM deve te chamar?' },
    nameHint: {
      en: 'Use your own name to keep it saved. Use the default if you want the game to ask again next new story.',
      pt: 'Use seu nome para salvar para sempre. Use o padrão se quiser que o jogo pergunte de novo na próxima história.'
    },
    yourName: { en: 'Your name', pt: 'Seu nome' },
    saveName: { en: 'Save my name', pt: 'Salvar meu nome' },
    useDefaultName: { en: 'Use Daniel for now', pt: 'Usar Daniel por enquanto' },
    useDefaultFamily: { en: 'Use the default cast for now', pt: 'Usar o elenco padrão por enquanto' },
    familyCountTitle: { en: 'Who is in your life?', pt: 'Quem faz parte da sua vida?' },
    familyCountHint: {
      en: 'The story needs at least one person — family or friends, up to six. Partners, parents, grandparents, children, siblings and friends all reshape the memories you will find.',
      pt: 'A história precisa de pelo menos uma pessoa — família ou amigos, até seis. Cônjuges, pais, avós, filhos, irmãos e amigos mudam as memórias que você vai encontrar.'
    },
    familyCount: { en: 'People', pt: 'Pessoas' },
    continue: { en: 'Continue', pt: 'Continuar' },
    back: { en: 'Back', pt: 'Voltar' },
    familyMembersTitle: { en: 'Name your family', pt: 'Nomeie sua família' },
    familyMembersHint: {
      en: 'Fields start with the default cast. Save them as yours to stop this question from returning.',
      pt: 'Os campos começam com o elenco padrão. Salve como seus para esta pergunta não voltar.'
    },
    member: { en: 'Family member', pt: 'Familiar' },
    kinship: { en: 'Kinship', pt: 'Parentesco' },
    otherKinship: { en: 'Other…', pt: 'Outro…' },
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
      if (self.needsFamily()) self.renderFamilyCount(onDone, onCancel);
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
        self.renderFamilyCount(done, cancel);
      });
    }));
    actions.appendChild(this.button(this.copy.useDefaultFamily, function () {
      self.saveDefaultFamily();
      done();
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
      var kinSelect = document.createElement('select');
      var defText = this.uiText(def.kinship);
      var matched = false;
      this.KINSHIPS.forEach(function (opt, idx) {
        var word = opt.word || opt;
        var o = document.createElement('option');
        o.value = String(idx);
        o.textContent = self.uiText({ en: opt.en, pt: opt.pt });
        if (!matched && (word.en === (def.kinship && def.kinship.en) || self.uiText(word) === defText)) {
          o.selected = true; matched = true;
        }
        kinSelect.appendChild(o);
      });
      var customOpt = document.createElement('option');
      customOpt.value = '__custom';
      customOpt.textContent = this.uiText(this.copy.otherKinship);
      kinSelect.appendChild(customOpt);
      kinLabel.appendChild(kinSelect);

      var kinCustom = document.createElement('input');
      kinCustom.type = 'text';
      kinCustom.maxLength = 28;
      kinCustom.placeholder = this.uiText(this.copy.kinship);
      if (matched) { kinCustom.style.display = 'none'; }
      else { customOpt.selected = true; kinCustom.value = defText; }
      kinSelect.addEventListener('change', function () {
        kinCustom.style.display = kinSelect.value === '__custom' ? '' : 'none';
      });
      kinLabel.appendChild(kinCustom);
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

      rows.push({ def: def, kinSelect: kinSelect, kinCustom: kinCustom, name: nameInput });
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
        gender: def.gender,
        slotGender: def.slotGender,
        cat: def.cat,
        kinship: { en: def.kinship.en, pt: def.kinship.pt }
      };
    }
    return {
      role: 'relative' + (i + 1),
      owner: 'relative' + (i + 1),
      name: 'Friend ' + (i - 2),
      gender: 'm',
      slotGender: 'm',
      cat: 'friend',
      kinship: { en: 'friend', pt: 'amigo' }
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
      var slotGender = def.slotGender || def.gender || self.slotGender[def.role] || 'n';
      var kinship, g, cat;
      if (row.kinSelect.value === '__custom') {
        var kinText = self.cleanInput(row.kinCustom.value, self.uiText(def.kinship), 28);
        kinship = { en: kinText, pt: kinText };
        g = self.genderOfKinship(kinText);
        if (g === 'n') g = slotGender;         /* keep prose grammatical */
        cat = self.inferCategory(kinText) || def.cat || 'friend';
      } else {
        var opt = self.KINSHIPS[parseInt(row.kinSelect.value, 10)] || self.KINSHIPS[0];
        var word = opt.word || opt;
        kinship = { en: word.en, pt: word.pt };
        g = opt.g === 'n' ? slotGender : opt.g;
        cat = opt.cat;
      }
      return {
        role: def.role,
        owner: def.owner,
        name: self.cleanInput(row.name.value, def.name, 36),
        gender: g,
        slotGender: slotGender,
        cat: cat,
        kinship: kinship,
        source: 'custom'
      };
    });
    p.familyCount = p.family.length;
    this.saveData(p);
  },

  /* ---------- story rendering ---------- */

  /* Small category-dependent phrases woven into fixed story lines.
     `intimate` = the recurring message slot-1 always sent (ch3 death);
     `memento` = what slot-2's drawing-type memory physically is (route C). */
  STORY_BITS: {
    intimate: {
      partner: { en: "'come to bed'", pt: "'vem dormir'" },
      child:   { en: "'goodnight'", pt: "'boa noite'" },
      sibling: { en: "'answer your phone'", pt: "'atende o telefone'" },
      elder:   { en: "'eat something'", pt: "'come alguma coisa'" },
      friend:  { en: "'you owe me a beer'", pt: "'você me deve uma cerveja'" }
    },
    memento: {
      child:   { en: 'a crayon drawing of stick figures and a smiling robot', pt: 'um desenho a giz de cera de bonecos de palito com um robô sorridente' },
      partner: { en: 'a whiteboard doodle of two robots holding hands', pt: 'um rabisco de dois robôs de mãos dadas' },
      sibling: { en: 'a felt-pen map with an X where a time capsule sleeps', pt: 'um mapa a caneta com um X onde dorme uma cápsula do tempo' },
      elder:   { en: 'a pencil sketch of a treehouse that was never built', pt: 'um esboço a lápis de uma casa na árvore que nunca foi construída' },
      friend:  { en: 'a bar napkin with two houses and a robot mowing both lawns', pt: 'um guardanapo de bar com duas casas e um robô cortando os dois gramados' }
    }
  },

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
      return (this.genderFor(role) === 'f' ? 'minha ' : 'meu ') + kin;
    }
    return /^my\b/i.test(kin) ? kin : 'my ' + kin;
  },

  stripAccents: function (s) {
    s = String(s || '');
    return s.normalize ? s.normalize('NFD').replace(new RegExp('[\\u0300-\\u036f]', 'g'), '') : s;
  },

  /* infer gender from a free-typed kinship word; 'n' if unknown */
  genderOfKinship: function (text) {
    var key = this.stripAccents(this.lower(text)).replace(/[^a-z]/g, '');
    if (!key) return 'n';
    if (this.KINSHIP_GENDER.f.indexOf(key) >= 0) return 'f';
    if (this.KINSHIP_GENDER.m.indexOf(key) >= 0) return 'm';
    return 'n';
  },

  /* infer relationship category from a free-typed kinship word; null if unknown */
  inferCategory: function (text) {
    var key = this.stripAccents(this.lower(text)).replace(/[^a-z]/g, '');
    if (!key) return null;
    for (var cat in this.KINSHIP_CAT) {
      if (this.KINSHIP_CAT[cat].indexOf(key) >= 0) return cat;
    }
    return null;
  },

  /* relationship category for a story role (slot defaults keep prose coherent) */
  slotCat: { clara: 'partner', alice: 'child', marcos: 'sibling' },
  catFor: function (role) {
    var m = this.member(role);
    if (m) {
      if (this.CATS.indexOf(m.cat) >= 0) return m.cat;
      var inferred = this.inferCategory(this.uiText(m.kinship));
      if (inferred) return inferred;
    }
    return this.slotCat[role] || 'friend';
  },

  /* memory-variant category: parents and grandparents share the 'elder' texts */
  memoryCat: function (role) {
    var cat = this.catFor(role);
    if (cat === 'parent' || cat === 'grandparent') return 'elder';
    return cat;
  },

  /* resolved gender for a story role: explicit member gender, else inferred
     from its kinship word, else the slot's written gender (verb-safe). */
  genderFor: function (role) {
    var m = this.member(role);
    if (m) {
      var g = m.gender;
      if (g !== 'm' && g !== 'f') g = this.genderOfKinship(this.uiText(m.kinship));
      if (g === 'm' || g === 'f') return g;
      if (m.slotGender === 'm' || m.slotGender === 'f') return m.slotGender;
    }
    return this.slotGender[role] || 'f';
  },

  /* a pronoun for a role, correct for the current language + gender.
     kind: sub | obj | pos | posp | self (EN) / sub | obj | de (PT) */
  pron: function (role, kind) {
    var g = this.genderFor(role);
    var table = {
      en: {
        m: { sub: 'he', obj: 'him', pos: 'his', posp: 'his', self: 'himself' },
        f: { sub: 'she', obj: 'her', pos: 'her', posp: 'hers', self: 'herself' }
      },
      pt: {
        m: { sub: 'ele', obj: 'ele', pos: 'dele', posp: 'dele', de: 'dele', self: 'si mesmo' },
        f: { sub: 'ela', obj: 'ela', pos: 'dela', posp: 'dela', de: 'dela', self: 'si mesma' }
      }
    };
    var set = table[this.lang() === 'pt' ? 'pt' : 'en'][g] || {};
    return set[kind] || '';
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
    /* per-role pronoun + kinship tokens: {sub1}/{Sub1}/{obj1}/{pos1}/{Pos1}/
       {posp1}/{de1}/{self1}/{kin1}/{Kin1}, roles 1..3 = the three story slots */
    ['clara', 'alice', 'marcos'].forEach(function (role, i) {
      var r = i + 1;
      token['sub' + r] = self.pron(role, 'sub');
      token['Sub' + r] = self.cap(self.pron(role, 'sub'));
      token['obj' + r] = self.pron(role, 'obj');
      token['Obj' + r] = self.cap(self.pron(role, 'obj'));
      token['pos' + r] = self.pron(role, 'pos');
      token['Pos' + r] = self.cap(self.pron(role, 'pos'));
      token['posp' + r] = self.pron(role, 'posp');
      token['de' + r] = self.pron(role, 'de');
      token['self' + r] = self.pron(role, 'self');
      token['kin' + r] = self.kinship(role);
      token['Kin' + r] = self.cap(self.kinship(role));
      token['myKin' + r] = self.myKinship(role);
      token['MyKin' + r] = self.cap(self.myKinship(role));
    });
    /* category-dependent story tokens */
    var lang = this.lang() === 'pt' ? 'pt' : 'en';
    token.intimate1 = (this.STORY_BITS.intimate[this.memoryCat('clara')] || this.STORY_BITS.intimate.partner)[lang];
    token.memento2 = (this.STORY_BITS.memento[this.memoryCat('alice')] || this.STORY_BITS.memento.child)[lang];
    return text.replace(/\{([a-zA-Z0-9_]+)\}/g, function (match, key) {
      return token[key] != null ? token[key] : match;
    });
  },

  replacePhrases: function (text) {
    var out = text;
    var p = this.profile();
    var names = this.familyNames();
    var familyList = this.familyList();
    var familyListLower = this.familyList(null, true);
    var first = this.nameFor('clara');
    var second = this.nameFor('alice');
    var third = this.nameFor('marcos');
    var countWord = this.numberWord(p.family.length + 1);
    var countWordCap = this.cap(countWord);
    var familyAndMe = this.list(names.concat(['me']));
    var familyAndMePt = this.list(names.concat(['eu']));
    var firstInitial = (this.member('clara') ? this.member('clara').name.charAt(0) : 'C').toLocaleUpperCase();

    function repl(a, b) { out = out.split(a).join(b); }

    /* the child's birth bracelet, gendered to the child slot */
    var childG = this.genderFor('alice');
    repl('BABY GIRL', childG === 'm' ? 'BABY BOY' : (childG === 'f' ? 'BABY GIRL' : 'BABY'));
    repl('BEBÊ MENINA', childG === 'm' ? 'BEBÊ MENINO' : (childG === 'f' ? 'BEBÊ MENINA' : 'BEBÊ'));

    repl('A Message From Clara', 'A Message From ' + first);
    repl('Uma Mensagem da Clara', 'Uma Mensagem de ' + first);
    repl('Embers — Clara', 'Embers — ' + first);
    repl('Brasas — Clara', 'Brasas — ' + first);
    repl('Embers — Alice', 'Embers — ' + second);
    repl('Brasas — Alice', 'Brasas — ' + second);
    repl('Embers — Marcos', 'Embers — ' + third);
    repl('Brasas — Marcos', 'Brasas — ' + third);

    repl('Clara, Alice and Marcos', familyList);
    repl('clara and alice and marcos', familyListLower);
    repl('Clara and Alice', this.list(this.familyNames(2)));
    repl('Clara e Alice', this.list(this.familyNames(2)));
    repl('Clara, Alice, Marcos and me', familyAndMe);
    repl('Clara, Alice, Marcos e eu', familyAndMePt);
    repl('a woman named Clara', 'someone named ' + first);
    repl('uma mulher chamada Clara', 'alguém chamado ' + first);

    repl('The four of us', 'The ' + countWord + ' of us');
    repl('the four of us', 'the ' + countWord + ' of us');
    repl('Nós quatro', 'Nós ' + countWord);
    repl('nós quatro', 'nós ' + countWord);
    repl('Four stick figures', countWordCap + ' stick figures');
    repl('four stick figures', countWord + ' stick figures');
    repl('Quatro bonecos de palito', countWordCap + ' bonecos de palito');
    repl('quatro bonecos de palito', countWord + ' bonecos de palito');

    /* a cast made only of friends isn't "family" — soften the word */
    var allFriends = p.family.length > 0 && p.family.every(function (m) { return (m.cat || 'friend') === 'friend'; });
    if (allFriends) {
      repl('my family', 'my friends');
      repl('minha família', 'meus amigos');
      repl('his family', 'his people');
      repl('a própria família', 'os próprios amigos');
      repl('the family you lost', 'the people you lost');
      repl('for the family', 'for all of us');
      repl('para a família', 'para todos nós');
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
