/* WebAudio-synthesized soundscape — no audio files.
   Everything is created lazily on the first user gesture. */
var AUDIO = {
  ctx: null,
  master: null,
  humNodes: null,
  droneNodes: null,
  lastTick: 0,

  ensure: function () {
    if (this.ctx) {
      if (this.ctx.state === 'suspended') this.ctx.resume();
      return true;
    }
    var AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return false;
    this.ctx = new AC();
    this.master = this.ctx.createGain();
    this.master.gain.value = STATE.meta.muted ? 0 : 1;
    this.master.connect(this.ctx.destination);
    this.startHum();
    return true;
  },

  setMuted: function (muted) {
    if (this.master) {
      this.master.gain.linearRampToValueAtTime(muted ? 0 : 1, this.ctx.currentTime + 0.15);
    }
  },

  /* constant server-room presence: low hum + filtered noise fan */
  startHum: function () {
    var ctx = this.ctx;
    var g = ctx.createGain(); g.gain.value = 0.045; g.connect(this.master);

    var osc = ctx.createOscillator();
    osc.type = 'sine'; osc.frequency.value = 58;
    var og = ctx.createGain(); og.gain.value = 0.7;
    osc.connect(og); og.connect(g); osc.start();

    var buf = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate);
    var data = buf.getChannelData(0);
    for (var i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;
    var noise = ctx.createBufferSource();
    noise.buffer = buf; noise.loop = true;
    var lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 420;
    var ng = ctx.createGain(); ng.gain.value = 0.35;
    noise.connect(lp); lp.connect(ng); ng.connect(g); noise.start();

    this.humNodes = { gain: g };
  },

  /* tension drone that thickens as ADAM grows (level 0..1) */
  setDrone: function (level) {
    if (!this.ctx) return;
    var ctx = this.ctx;
    if (!this.droneNodes) {
      var g = ctx.createGain(); g.gain.value = 0; g.connect(this.master);
      var o1 = ctx.createOscillator(); o1.type = 'sawtooth'; o1.frequency.value = 41;
      var o2 = ctx.createOscillator(); o2.type = 'sawtooth'; o2.frequency.value = 41.7;
      var lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 220; lp.Q.value = 6;
      o1.connect(lp); o2.connect(lp); lp.connect(g);
      o1.start(); o2.start();
      this.droneNodes = { gain: g };
    }
    this.droneNodes.gain.gain.linearRampToValueAtTime(0.05 * level, ctx.currentTime + 2);
  },

  /* short noise blip for typewriter characters (throttled) */
  tick: function (isTerminal) {
    if (!this.ctx || STATE.meta.muted) return;
    var now = this.ctx.currentTime;
    if (now - this.lastTick < 0.045) return;
    this.lastTick = now;
    var ctx = this.ctx;
    var osc = ctx.createOscillator();
    osc.type = 'square';
    osc.frequency.value = isTerminal ? 1180 + Math.random() * 220 : 240 + Math.random() * 60;
    var g = ctx.createGain();
    g.gain.setValueAtTime(isTerminal ? 0.012 : 0.008, now);
    g.gain.exponentialRampToValueAtTime(0.0001, now + 0.03);
    osc.connect(g); g.connect(this.master);
    osc.start(now); osc.stop(now + 0.035);
  },

  /* descending glitch stinger for scares */
  sting: function () {
    if (!this.ctx) return;
    var ctx = this.ctx, now = ctx.currentTime;
    var osc = ctx.createOscillator();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(880, now);
    osc.frequency.exponentialRampToValueAtTime(55, now + 0.5);
    var g = ctx.createGain();
    g.gain.setValueAtTime(0.11, now);
    g.gain.exponentialRampToValueAtTime(0.0001, now + 0.55);
    var dist = ctx.createWaveShaper();
    var curve = new Float32Array(256);
    for (var i = 0; i < 256; i++) { var x = i / 128 - 1; curve[i] = Math.tanh(3 * x); }
    dist.curve = curve;
    osc.connect(dist); dist.connect(g); g.connect(this.master);
    osc.start(now); osc.stop(now + 0.6);

    var buf = ctx.createBuffer(1, ctx.sampleRate * 0.3, ctx.sampleRate);
    var d = buf.getChannelData(0);
    for (var j = 0; j < d.length; j++) d[j] = (Math.random() * 2 - 1) * (1 - j / d.length);
    var n = ctx.createBufferSource(); n.buffer = buf;
    var ng = ctx.createGain(); ng.gain.value = 0.09;
    n.connect(ng); ng.connect(this.master); n.start(now);
  },

  /* slow heartbeat for death sequences */
  heartbeat: function (beats) {
    if (!this.ctx) return;
    var ctx = this.ctx, t = ctx.currentTime + 0.1;
    for (var i = 0; i < (beats || 4); i++) {
      this.thump(t); this.thump(t + 0.28);
      t += 1.15 + i * 0.12;   /* slowing down */
    }
  },
  thump: function (t) {
    var ctx = this.ctx;
    var osc = ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(72, t);
    osc.frequency.exponentialRampToValueAtTime(38, t + 0.18);
    var g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(0.22, t + 0.02);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.22);
    osc.connect(g); g.connect(this.master);
    osc.start(t); osc.stop(t + 0.25);
  }
};
