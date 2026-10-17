---
title: "runmap"
icon: "/images/tools/runmap.svg"
description: "Turn a workout GPX file into a clean, minimal map poster, right in your browser."
---

Turn a workout GPX file into a clean, minimal map poster: your route as a smooth line,
optionally colored by elevation or pace, with an elevation profile, a scale bar and a
stats block. Print it and hang it.

## Try it

Open the web version — no install, works on desktop and mobile:

- [runmap.berkay.tools](https://runmap.berkay.tools)

## How it works

- **Your GPX never leaves your machine.** Workout files contain your home address, so
  everything is processed locally — nothing is uploaded.
- Computes distance, **moving** time, pace and climb, and keeps GPS gaps as separate
  segments instead of drawing straight lines across them.
- Themes (dark, paper, midnight, forest, sunset), several poster sizes, and PNG export.
- A pure Go pipeline compiled to **WebAssembly**, so the same engine powers the CLI and
  the site.

## Support

Found a bug or have feedback? Send me an e-mail: berkay@berkaycubuk.com
