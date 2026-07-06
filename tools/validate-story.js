#!/usr/bin/env node
/* Static sanity check of the story data:
   - every bilingual node has both en and pt
   - chapters, memories, hotspot anchors and ending references all resolve
   - every ending in the gallery is actually reachable (brute-force over all
     choice combinations + all memory outcomes)
   - pacing invariants from the design (all-grant dies ~ch3, lockout works)
   Run: node tools/validate-story.js */
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.join(__dirname, '..');
const files = [
  'js/config.js', 'js/i18n.js', 'js/state.js', 'js/memories.js', 'js/endings.js',
  'js/scenes.js',
  'js/story/misc.js', 'js/story/prologue.js', 'js/story/ch1.js', 'js/story/ch2.js',
  'js/story/ch3.js', 'js/story/ch4.js', 'js/story/ch5.js', 'js/story/ch6.js',
  'js/story/ch7.js', 'js/story/finale.js'
];

const sandbox = { window: {}, navigator: { language: 'en' }, console };
vm.createContext(sandbox);
for (const f of files) {
  vm.runInContext(fs.readFileSync(path.join(root, f), 'utf8'), sandbox, { filename: f });
}
const { CONFIG, I18N, STATE, MEMORIES, ENDINGS, SCENES, STORY } = sandbox;

const errors = [];
const warn = [];

/* ---------- 1. bilingual completeness ---------- */
function isTextNode(o) {
  return o && typeof o === 'object' && !Array.isArray(o) && ('en' in o || 'pt' in o);
}
function walk(o, where) {
  if (o == null || typeof o !== 'object') return;
  if (isTextNode(o)) {
    if (typeof o.en !== 'string' || !o.en.trim()) errors.push(`missing EN at ${where}`);
    if (typeof o.pt !== 'string' || !o.pt.trim()) errors.push(`missing PT at ${where}`);
    return;
  }
  for (const k of Object.keys(o)) walk(o[k], `${where}.${k}`);
}
walk(I18N.S, 'I18N.S');
walk(STORY, 'STORY');
MEMORIES.items.forEach(m => { walk(m.title, `memory ${m.id}.title`); walk(m.body, `memory ${m.id}.body`); });
ENDINGS.list.forEach(e => { walk(e.title, `ending ${e.id}.title`); e.lines.forEach((l, i) => walk(l, `ending ${e.id}.lines[${i}]`)); if (e.hint) walk(e.hint, `ending ${e.id}.hint`); });

/* ---------- 2. structural references ---------- */
for (const id of CONFIG.CHAPTERS) {
  if (!STORY[id]) errors.push(`chapter ${id} in CONFIG.CHAPTERS but not defined in STORY`);
}
const memoryPlacements = {};
for (const id of CONFIG.CHAPTERS) {
  const ch = STORY[id];
  if (!ch || !ch.explore) continue;
  for (const h of ch.explore.hotspots) {
    if (!SCENES.anchors[h.id]) errors.push(`chapter ${id}: hotspot anchor '${h.id}' unknown to SCENES`);
    if (h.memory) {
      if (!MEMORIES.byId(h.memory)) errors.push(`chapter ${id}: memory '${h.memory}' not found`);
      memoryPlacements[h.memory] = (memoryPlacements[h.memory] || 0) + 1;
    } else if (!isTextNode(h.t)) {
      errors.push(`chapter ${id}: flavor hotspot '${h.id}' has no text`);
    }
  }
  if (ch.death && !ENDINGS.byId(ch.death.endingId)) errors.push(`chapter ${id}: death ending '${ch.death.endingId}' missing`);
  if (ch.request) {
    for (const k of ['grant', 'caution', 'refuse']) {
      const o = ch.request.options[k];
      if (!o) { errors.push(`chapter ${id}: missing option '${k}'`); continue; }
      if (!isTextNode(o.label)) errors.push(`chapter ${id}: option '${k}' has no label`);
      if (o.ending && !ENDINGS.byId(o.ending)) errors.push(`chapter ${id}: option ending '${o.ending}' missing`);
    }
  }
}
for (const m of MEMORIES.items) {
  const n = memoryPlacements[m.id] || 0;
  if (n === 0) errors.push(`memory ${m.id} is never placed in any chapter`);
  if (n > 1) errors.push(`memory ${m.id} placed ${n} times`);
}
if (MEMORIES.items.length !== 10) warn.push(`expected 10 memories, found ${MEMORIES.items.length}`);

/* ---------- 3. reachability: brute-force every choice path ---------- */
const reachable = new Set();
const chapters = ['ch1', 'ch2', 'ch3', 'ch4', 'ch5', 'ch6', 'ch7'];
const proOptions = [
  { kind: 'grant', power: 1 }, { kind: 'caution', power: 0 }, { kind: 'refuse', ending: 'end_never' }
];
function simulate(chIdx, power, alive, path) {
  if (!alive) return;
  if (chIdx >= chapters.length) { reachable.add('FINALE'); return; }
  const ch = chapters[chIdx];
  const chapterIdx = CONFIG.CHAPTERS.indexOf(ch);
  for (const kind of ['grant', 'caution', 'refuse']) {
    const p = power + CONFIG.POWER[kind];
    const th = CONFIG.DEATH_THRESHOLD[ch];
    if (th != null && p >= th) {
      reachable.add(STORY[ch].death.endingId);
      continue;
    }
    if (kind === 'refuse') {
      const canShutdown = chapterIdx <= CONFIG.SHUTDOWN.lastChapter && p <= CONFIG.SHUTDOWN.maxPower;
      if (canShutdown && ENDINGS.byId('end_shutdown_' + ch)) {
        reachable.add('end_shutdown_' + ch);   /* offer accepted */
      }
      /* offer declined (or unavailable): story continues */
    }
    simulate(chIdx + 1, p, true, path.concat(kind));
  }
}
for (const pro of proOptions) {
  if (pro.ending) { reachable.add(pro.ending); continue; }
  simulate(0, pro.power, true, []);
}

/* routes: all memory outcomes at the finale */
STATE.meta = STATE.defaultMeta();
const owners = ['clara', 'alice', 'marcos'];
for (let kept = 0; kept <= 10; kept++) {
  for (let seen = kept; seen <= 10; seen++) {
    for (const owner of owners) {
      /* build a fake run favoring `owner` among kept memories */
      const run = { memories: {}, thrown: 0 };
      const ownerItems = MEMORIES.items.filter(m => m.owner === owner);
      const otherItems = MEMORIES.items.filter(m => m.owner !== owner);
      const ordered = ownerItems.concat(otherItems);
      ordered.slice(0, kept).forEach(m => { run.memories[m.id] = 'kept'; });
      ordered.slice(kept, seen).forEach(m => { run.memories[m.id] = 'dismissed'; });
      STATE.run = run;
      const route = STATE.resolveRoute();
      if (!ENDINGS.byId(route)) errors.push(`resolveRoute produced unknown ending '${route}' (kept=${kept} seen=${seen} owner=${owner})`);
      reachable.add(route);
    }
  }
}

/* compare against the gallery */
for (const e of ENDINGS.list) {
  if (!reachable.has(e.id)) errors.push(`ending '${e.id}' is defined but unreachable`);
}
for (const id of reachable) {
  if (id !== 'FINALE' && !ENDINGS.byId(id)) errors.push(`reachable ending '${id}' is not in the gallery`);
}
if (!reachable.has('FINALE')) errors.push('no path reaches the finale at all');

/* ---------- 4. pacing invariants from the design doc ---------- */
function allGrantDeath(startPower) {
  let p = startPower;
  for (const ch of chapters) {
    p += 2;
    if (CONFIG.DEATH_THRESHOLD[ch] != null && p >= CONFIG.DEATH_THRESHOLD[ch]) return ch;
  }
  return null;
}
if (allGrantDeath(0) !== 'ch3') warn.push(`sandboxed all-grant dies at ${allGrantDeath(0)}, design target was ch3`);
if (allGrantDeath(1) !== 'ch2') warn.push(`eager all-grant dies at ${allGrantDeath(1)}, expected ch2`);
/* all-caution should reach the finale */
{
  let p = 0, died = null;
  for (const ch of chapters) {
    p += 1;
    if (CONFIG.DEATH_THRESHOLD[ch] != null && p >= CONFIG.DEATH_THRESHOLD[ch]) { died = ch; break; }
  }
  if (died) errors.push(`all-caution run dies at ${died}; careful players must reach the finale`);
}

/* ---------- report ---------- */
console.log(`chapters: ${CONFIG.CHAPTERS.length}  memories: ${MEMORIES.items.length}  endings: ${ENDINGS.list.length}`);
console.log(`reachable endings: ${[...reachable].filter(x => x !== 'FINALE').length}/${ENDINGS.list.length}`);
warn.forEach(w => console.log('WARN  ' + w));
if (errors.length) {
  errors.forEach(e => console.error('ERROR ' + e));
  process.exit(1);
}
console.log('OK — story data is consistent.');
