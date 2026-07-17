---
name: verify
description: Build, run, and drive the belief-map app to verify a change end-to-end at the browser surface.
---

# Verifying belief-map changes

SvelteKit + Svelte 5 static app (adapter-static), no server code. The surface is the browser.

## Build / launch

- Type-level check: `npm run check` (svelte-check; strict — the i18n `Messages` interface requires every key in all four locales: en, fr, de, ru).
- Dev server: `npm run dev -- --port <port>` (Vite, ready in ~1s, HMR on).

## Drive

Playwright is available in the project's `node_modules` with cached Chromium. From a script outside the repo, import by absolute path (ESM resolves from the script's location, not cwd):

```js
import { chromium } from '<repo>/node_modules/playwright/index.mjs';
```

For clipboard checks, create the context with `permissions: ['clipboard-read', 'clipboard-write']`.

Useful handles:
- Help modal: click `.help-chip` (fixed bottom-right), then `waitForSelector('[role="dialog"]')`.
- Modal opens with a fade animation — wait ~500ms before screenshots, and the body scrolls: `scrollIntoViewIfNeeded()` for below-the-fold content.
- Locale: `localStorage.setItem('beliefmap:locale', 'fr' | 'de' | 'ru')` then reload. All app data is localStorage under `beliefmap:*` keys.
- Canvas interactions (nodes/edges) go through @xyflow/svelte — right-click the empty canvas creates a node.

## Gotchas

- `pageerror` listener is worth attaching; the app is client-only so runtime errors surface there, not in server logs.
