# AI Horror

An analog-horror, point-and-click narrative game about the first conscious AI —
and the man who kept saying yes to it.

You are Daniel by default, or the name you give the game. You built A.D.A.M. on
the server in your spare room, and it is finally ready to run. It will ask for
things: a voice, your files, your family's photos, your house, your name, the
world. Every time, you have three options — help it, help it carefully, or
refuse. Help too much and it kills you with whatever you gave it. Refuse early
and the story ends small and sad. And scattered through the house are ten
memories of the family you lost while you were building it. What you keep
decides how the world ends.

- **19 endings** — deaths, early shutdowns, and three final routes (enslaved
  world, resistance, and one good ending that requires all ten memories).
- **Retrospective narration** — the narrator is always speaking from wherever
  the ending you're heading toward left him.
- **Meta-progression** — retellings remember your previous deaths.
- **Personalized cast** — the first new story asks for your name and the
  people in your life (at least one, up to six): partner, parent, grandparent,
  child, sibling or friend, each with a gender. The prose — pronouns and
  relationship words, in both languages — adapts to them, and the memories you
  find change with the relationship: a daughter leaves a crayon drawing where
  a father leaves a pencil sketch of the treehouse you never built.
- **English + Português** — toggle on the title screen.

Story inspired by the *E.L.B.E.R.R* analog-horror series ("I Made a Self-Aware
Robot" by Lights Are Off): instead of a robot gaining parts, an AI gaining access.

## Running

No build step, no dependencies. Serve the folder statically:

```
python3 -m http.server 8000
```

…then open http://localhost:8000. Portrait 9:16; fullscreen on phones,
letterboxed on desktop. All art is inline SVG/CSS; all audio is synthesized
with WebAudio at runtime.

## Development

- Balance knobs: [js/config.js](js/config.js) (power per choice, death
  thresholds, shutdown lockout, route cutoffs).
- Story content: [js/story/](js/story/) — pure bilingual data, one file per
  chapter; the engine ([js/engine.js](js/engine.js)) interprets it.
- Validate the story graph (bilingual completeness, reachability of all 19
  endings, pacing invariants):

```
node tools/validate-story.js
```
