# DishTap 🌍🍜

## ▶️ [PLAY THE GAME → elianagoldin.github.io/dishtap](https://elianagoldin.github.io/dishtap/)

A food-geography game: we name a famous dish, you spin the globe and tap the
country it was born in. Tap anywhere in the right country for a bullseye.

Built with Svelte 5 + three.js. Country geometry from Natural Earth
(`world-atlas`), food photos from Wikipedia / Wikimedia Commons (per-image
attribution in `public/images/dishtap/SOURCES.json`).

The canonical source lives in the Recess monolith (`apps/web/src/routes/dishtap`);
this repo is the standalone build deployed to GitHub Pages.

```bash
pnpm install
pnpm run dev      # local dev
pnpm run build    # static build in dist/
```
