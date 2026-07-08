---
title: "dotart"
icon: "/images/tools/dotart.svg"
description: "Turn any image into retro dithered pixel art, right in your browser."
---

Turn any image into retro dithered pixel art — the dotted, halftone look of old print
and early displays. Drop in a photo and dotart re-renders it with a reduced palette and
classic dithering, all in your browser. Nothing is uploaded; the conversion runs locally
via WebAssembly.

## Try it

Open the web version — no install, works on desktop and mobile:

- [dotart.berkay.tools](https://dotart.berkay.tools)

## How it works

- **Median-cut palette** reduces the image to a small, coherent set of colors.
- **Floyd–Steinberg and Bayer dithering** trade solid tones for patterns of dots, so
  gradients survive even with just a handful of colors.
- Compiled from a pure Go core to **WebAssembly**, so the same engine powers the CLI and
  the site.

## Command-line version

Prefer the terminal? The Go CLI is open source:

- [Source on GitHub](https://github.com/berkaycubuk/dotart)

## Support

Found a bug or have feedback? Send me an e-mail: berkay@berkaycubuk.com
