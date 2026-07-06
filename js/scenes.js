/* The room, first-person, drawn as SVG. One base room that decays/escalates
   with the chapter level (0..8): more cables, more server LEDs, darker,
   boarded window late game. Hotspots are SVG groups with data-id. */
var SCENES = {

  /* anchor points for hotspots, in the 360x640 viewBox */
  anchors: {
    window:     [90, 165],
    shelf:      [285, 128],
    door:       [32, 330],
    server:     [303, 330],
    monitor:    [180, 372],
    drawer:     [117, 466],
    mug:        [247, 435],
    fridge:     [50, 483],
    books:      [88, 553],
    boxes:      [272, 553],
    phone:      [43, 405],
    thermostat: [148, 232],
    mirror:     [225, 225]
  },

  render: function (container, chapterId, level, hotspots) {
    var adam = CONFIG.ADAM_COLOR[chapterId] || '#7fff9e';
    var s = '';

    /* --- walls & floor --- */
    s += '<rect width="360" height="640" fill="#0b0d0e"/>';
    s += '<rect x="0" y="500" width="360" height="140" fill="#0f1112"/>';
    s += '<line x1="0" y1="500" x2="360" y2="500" stroke="#050606" stroke-width="3"/>';
    /* floorboards */
    for (var fb = 1; fb < 6; fb++) {
      s += '<line x1="0" y1="' + (500 + fb * 24) + '" x2="360" y2="' + (500 + fb * 24) + '" stroke="#0a0c0c" stroke-width="1.5"/>';
    }

    /* --- window (boarded from level 7) --- */
    s += '<rect x="38" y="98" width="104" height="134" fill="#11161f" stroke="#1a2027" stroke-width="5"/>';
    s += '<line x1="90" y1="98" x2="90" y2="232" stroke="#1a2027" stroke-width="4"/>';
    s += '<line x1="38" y1="165" x2="142" y2="165" stroke="#1a2027" stroke-width="4"/>';
    s += '<circle cx="118" cy="128" r="13" fill="#c9d4d8" opacity="' + (level >= 7 ? 0.08 : 0.5) + '"/>';
    if (level >= 7) {
      s += '<rect x="30" y="115" width="120" height="16" fill="#241d15" transform="rotate(-4 90 123)"/>';
      s += '<rect x="30" y="160" width="120" height="16" fill="#201a13" transform="rotate(3 90 168)"/>';
      s += '<rect x="30" y="205" width="120" height="16" fill="#241d15" transform="rotate(-2 90 213)"/>';
    }

    /* --- door --- */
    s += '<rect x="6" y="252" width="58" height="230" fill="#12100d" stroke="#1c1813" stroke-width="3"/>';
    s += '<circle cx="55" cy="368" r="4" fill="#3a3226"/>';

    /* --- shelf --- */
    s += '<rect x="238" y="138" width="96" height="9" fill="#1c1813"/>';
    s += '<rect x="244" y="108" width="10" height="30" fill="#232019"/>';
    s += '<rect x="257" y="112" width="9" height="26" fill="#1e2419"/>';
    s += '<rect x="269" y="105" width="11" height="33" fill="#241a1a"/>';
    s += '<rect x="286" y="114" width="26" height="24" fill="#20242a"/>';   /* frame */
    s += '<rect x="290" y="118" width="18" height="16" fill="#0d1013"/>';

    /* --- server rack (right) --- */
    s += '<rect x="268" y="272" width="72" height="192" rx="4" fill="#14171a" stroke="#1e2328" stroke-width="3"/>';
    for (var u = 0; u < 8; u++) {
      s += '<rect x="276" y="' + (282 + u * 22) + '" width="56" height="14" fill="#0c0f11"/>';
      var lit = u < (level + 1);
      var col = lit ? (u >= 6 ? '#e0483c' : adam) : '#1d2328';
      s += '<circle cx="286" cy="' + (289 + u * 22) + '" r="2.6" fill="' + col + '"' +
           (lit ? ' opacity="0.95"' : '') + '/>';
      if (lit && level >= 3) s += '<circle cx="296" cy="' + (289 + u * 22) + '" r="2.2" fill="' + col + '" opacity="0.6"/>';
    }

    /* --- desk + CRT monitor (center) --- */
    s += '<rect x="92" y="446" width="176" height="14" fill="#1e1913"/>';
    s += '<rect x="100" y="460" width="12" height="64" fill="#171310"/>';
    s += '<rect x="248" y="460" width="12" height="64" fill="#171310"/>';
    /* drawer */
    s += '<rect x="100" y="462" width="44" height="18" fill="#221c15" stroke="#15110d" stroke-width="2"/>';
    s += '<rect x="116" y="469" width="12" height="3" fill="#3a3226"/>';
    /* CRT */
    s += '<rect x="134" y="330" width="92" height="84" rx="8" fill="#20242a"/>';
    s += '<rect x="142" y="338" width="76" height="60" rx="4" fill="#040705"/>';
    s += '<rect x="142" y="338" width="76" height="60" rx="4" fill="' + adam + '" opacity="' + (0.10 + level * 0.02) + '"/>';
    s += '<text x="180" y="372" font-family="monospace" font-size="11" fill="' + adam + '" text-anchor="middle" opacity="0.9">&gt;_</text>';
    s += '<rect x="160" y="414" width="40" height="10" fill="#1a1e23"/>';
    s += '<rect x="150" y="424" width="60" height="6" fill="#14171a"/>';
    /* glow on desk */
    s += '<ellipse cx="180" cy="448" rx="70" ry="10" fill="' + adam + '" opacity="' + (0.05 + level * 0.012) + '"/>';
    /* keyboard + mug */
    s += '<rect x="146" y="438" width="52" height="8" rx="2" fill="#181c20"/>';
    s += '<rect x="238" y="426" width="16" height="18" rx="2" fill="#26211a"/>';
    s += '<path d="M254 430 q8 4 0 10" stroke="#26211a" stroke-width="3" fill="none"/>';

    /* --- mini fridge --- */
    s += '<rect x="26" y="448" width="50" height="70" rx="3" fill="#191d20" stroke="#22272c" stroke-width="2"/>';
    s += '<line x1="30" y1="470" x2="72" y2="470" stroke="#22272c" stroke-width="2"/>';
    s += '<rect x="42" y="454" width="18" height="12" fill="#c9c2a8" opacity="0.75" transform="rotate(-3 51 460)"/>';

    /* --- side table + phone/answering machine (ch3+) --- */
    if (level >= 3) {
      s += '<rect x="20" y="416" width="52" height="8" fill="#1c1813"/>';
      s += '<rect x="28" y="424" width="8" height="24" fill="#171310"/>';
      s += '<rect x="30" y="400" width="30" height="14" rx="2" fill="#20242a"/>';
      s += '<circle cx="54" cy="407" r="2.5" fill="#e0483c" opacity="0.9"><animate attributeName="opacity" values="0.9;0.1;0.9" dur="1.8s" repeatCount="indefinite"/></circle>';
    }

    /* --- thermostat (ch4+) --- */
    if (level >= 4) {
      s += '<circle cx="148" cy="232" r="13" fill="#1a1e23" stroke="#262b31" stroke-width="2"/>';
      s += '<circle cx="148" cy="232" r="5" fill="' + adam + '" opacity="0.55"/>';
    }

    /* --- mirror (ch5+) --- */
    if (level >= 5) {
      s += '<rect x="206" y="188" width="42" height="76" rx="4" fill="#0c1013" stroke="#242a2f" stroke-width="3"/>';
      s += '<polygon points="212,258 224,196 232,196 218,258" fill="#ffffff" opacity="0.05"/>';
      s += '<rect x="206" y="188" width="42" height="76" rx="4" fill="' + adam + '" opacity="0.04"/>';
    }

    /* --- floor clutter: books & boxes --- */
    s += '<rect x="66" y="556" width="46" height="9" fill="#2a2118" transform="rotate(-2 89 560)"/>';
    s += '<rect x="70" y="546" width="40" height="9" fill="#1e2419" transform="rotate(2 90 550)"/>';
    s += '<rect x="74" y="537" width="34" height="9" fill="#241a1a"/>';
    s += '<rect x="246" y="528" width="56" height="42" fill="#1d1812" stroke="#26201700" stroke-width="0"/>';
    s += '<line x1="246" y1="549" x2="302" y2="549" stroke="#12100c" stroke-width="2"/>';
    s += '<rect x="252" y="512" width="44" height="16" fill="#221c15"/>';
    s += '<line x1="274" y1="512" x2="274" y2="528" stroke="#3a3226" stroke-width="2" opacity="0.5"/>';

    /* --- cables: multiply with level --- */
    var cables = Math.min(level + 1, 8);
    for (var c = 0; c < cables; c++) {
      var y0 = 462 + (c % 3) * 8, sway = 14 + c * 9;
      s += '<path d="M268 ' + (300 + c * 18) + ' q-' + sway + ' ' + (60 + c * 12) + ' -' + (sway + 24) + ' ' + (166 - c * 6) +
           '" stroke="#181d20" stroke-width="' + (2 + (c % 2)) + '" fill="none" opacity="0.85"/>';
      if (c > 2) {
        s += '<path d="M92 ' + y0 + ' q-20 ' + (26 + c * 6) + ' -44 ' + (34 + c * 8) + '" stroke="#161a1d" stroke-width="2" fill="none"/>';
      }
    }

    /* --- creeping darkness --- */
    s += '<rect width="360" height="640" fill="#000" opacity="' + Math.min(level * 0.045, 0.4) + '"/>';

    /* --- hotspots --- */
    (hotspots || []).forEach(function (h) {
      var a = SCENES.anchors[h.anchor];
      if (!a) return;
      var cls = 'hotspot ' + h.cls;
      s += '<g class="' + cls + '" data-id="' + h.id + '">' +
        '<circle class="hs-hit" cx="' + a[0] + '" cy="' + a[1] + '" r="30" fill="rgba(0,0,0,0.01)"/>' +
        '<circle class="hs-ring" cx="' + a[0] + '" cy="' + a[1] + '" r="21"/>' +
        '</g>';
    });

    container.innerHTML =
      '<svg viewBox="0 0 360 640" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">' + s + '</svg>';
  }
};
