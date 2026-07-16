# Filament

Trace the threads of your evolving worldview — a local-first canvas for mapping beliefs.
Each node is a belief; its children are the premises that support it. Every node is drawn
as a **donut chart** whose arcs show the mix of its children's **source categories**, with
each arc's opacity reflecting **confidence**. Categories and confidence levels are fully
customizable per map.

This is a **local-first** app: it runs entirely in your browser. Maps are stored as JSON
in `localStorage` — nothing is sent anywhere. You can keep several named maps, and import
or export any map as a `.json` file.

## Stack

- [SvelteKit](https://kit.svelte.dev/) (Svelte 5, runes) — static SPA (`adapter-static`, SSR off)
- [`d3-hierarchy`](https://github.com/d3/d3-hierarchy) + [`d3-shape`](https://github.com/d3/d3-shape) — tree layout math only
- Hand-rolled CSS + inline SVG icons (no UI framework)

## Develop

```bash
npm install
npm run dev        # http://localhost:5173
```

## Test / check / build

```bash
npm test           # vitest — tree operations + layout
npm run check      # svelte-check (types)
npm run build      # static build in ./build
npm run preview    # serve the build
```

## Data

Maps live in `localStorage` under `beliefmap:*` keys as **plain JSON** (no encryption).
Sample data to try the importer with is in `static/samples/`.

Notes on the rewrite (the previous Nuxt 2 / Vue 2 version is preserved in git history):
legacy exported maps still load — the importer normalizes older/invalid belief types
(e.g. `null`, `"StatedByAuthority"`, `"personalObservation"`) and fills in missing fields.
