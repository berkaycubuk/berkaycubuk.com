# berkaycubuk.com — Design System

The visual language of the site. Reference this when building new pages or
components so everything reads as one system.

---

## 1. Art direction

**Swiss editorial × halftone print.** A gallery-print / magazine-cover feel:
ink on warm paper, a strict type hierarchy, hairline rules, and a single red
accent. Interactive/graphic elements are treated as *plates* — framed, captioned
like figures in a book.

The mood board it's drawn from: mid-century Helvetica advertising, Swiss poster
design (e.g. the *Severance* poster), dithered/halftone photographic prints,
dot-matrix portraits, and analog-tech nostalgia (typewriters, dot matrix). The
recurring **dot/cell grid** is why Conway's Game of Life is the hero graphic —
its cellular field is a living halftone.

**Principles**
- **Ink on paper, not black on white.** Warm off-white background, near-black
  warm ink. Never pure `#000`/`#fff`.
- **One accent, used sparingly.** Red, almost always just the status dot.
- **Hairline structure.** Thin rules (top/bottom bars, figure borders) divide
  the page; no boxes, shadows, or gradients.
- **Type does the work.** A big grotesque headline, mono uppercase labels, a
  restrained serif-free body. Contrast comes from scale and weight.
- **Everything is a figure.** Graphics sit inside a bordered plate with a mono
  placard caption (`FIG. 01 · …`). Editorial, not "UI".
- **Break the grid on purpose.** The text sits in a narrow column; the hero
  plate breaks full-bleed. That width contrast is the signature move.
- **Print texture.** A faint riso/newsprint grain over the whole surface.

---

## 2. Color tokens

Defined as CSS custom properties, scoped and inverted for dark mode via
`html.dark`. Warm-neutral palette — every value carries a little warmth.

| Token          | Light                     | Dark                        | Use |
|----------------|---------------------------|-----------------------------|-----|
| `--paper`      | `#e9e5db`                 | `#131210`                   | Page background |
| `--ink`        | `#16130f`                 | `#e7e3d8`                   | Primary text, rules, borders |
| `--ink-dim`    | `#6f6a5f`                 | `#8b8578`                   | Secondary text (lede, captions) |
| `--line`       | `rgba(22,19,15,0.14)`     | `rgba(231,227,216,0.16)`    | Subtle borders (buttons) |
| `--accent`     | `#bf1b1b`                 | `#e5433c`                   | The single red accent (status dot) |
| `--grid-line`  | `rgba(22,19,15,0.10)`     | `rgba(231,227,216,0.10)`    | Game of Life grid lines |
| `--alive`      | `#16130f`                 | `#e7e3d8`                   | Game of Life live cells (= ink) |

Body background is also set directly on `<body>` (`#e9e5db` / `#131210`) so the
page never flashes white before the section paints.

**Rules**
- Text is `--ink`; anything secondary is `--ink-dim`. Don't introduce new greys.
- The accent is for the dot. Adding red elsewhere should be a deliberate,
  rare decision.
- Canvas/graphic colors are read from these tokens at runtime so plates invert
  with the theme.

---

## 3. Typography

Three roles only. Fonts loaded in `BaseLayout.astro` (DM Sans + Rock Salt from
Google Fonts); Helvetica Neue is used from the system where available.

### Display / headline
```
font-family: 'Helvetica Neue', 'DM Sans', Helvetica, Arial, sans-serif;
font-weight: 700;
font-size: clamp(32px, 11vw, 148px);
line-height: 0.9;
letter-spacing: -0.035em;
```
Tight, oversized grotesque. Negative tracking + `line-height: 0.9` for the
poster-headline feel. `overflow-wrap: break-word` so it never overflows narrow
screens.

### Body / lede
```
font-family: 'DM Sans', …;   /* inherited base */
font-size: clamp(16px, 2vw, 21px);
line-height: 1.45;
color: var(--ink-dim);
max-width: 34ch;             /* keep measure readable */
```

### Mono label (`.mono`)
```
font-family: 'SF Mono', 'JetBrains Mono', ui-monospace, 'Menlo', monospace;
font-size: 11px;
letter-spacing: 0.22em;
text-transform: uppercase;
```
Used for eyebrows, corner labels, figure placards, button text, and metadata.
This is the "instrument panel" voice of the design.

> Rock Salt (the old handwritten signature font) is retained in `BaseLayout` for
> legacy pages but is **not** part of this system.

---

## 4. Layout

- **Content column:** `max-width: 1120px`, centered (`margin: 0 auto`).
- **Frame padding:** `clamp(16px, 4vw, 44px)` — the page gutter.
- **Vertical rhythm:** stack sections with `gap: clamp(20px, 3.5vw, 40px)`.
- **Full-bleed break-out** (for hero plates / wide bands):
  ```
  width: 100vw;
  margin-left: 50%;
  transform: translateX(-50%);
  padding: 0 clamp(16px, 3vw, 40px);   /* its own gutter */
  ```
  Requires `overflow-x: hidden` on the section to avoid a scrollbar from `100vw`.
- Text stays in the 1120 column; graphics may break out. Keep that contrast.

**Rules (hairlines).** Section dividers are `1px solid var(--ink)`:
top bar → `border-bottom`, bottom bar → `border-top`, figures → full `border`.

---

## 5. Components

### Top / bottom bar
Hairline-ruled rows. `display: flex; justify-content: space-between`. Left =
wordmark/nav, right = metadata/controls. Mono labels. Bottom bar uses
`margin-top: auto` so it pins to the viewport bottom in a min-height section.

### Masthead
`eyebrow → title → lede`, stacked.
- **Eyebrow:** `.mono` row with a leading red **status dot** (`8px` circle,
  `--accent`) then an uppercase positioning line.
- **Title:** the display headline (the name).
- **Lede:** one-sentence value prop in `--ink-dim`, extra `margin-top`
  (`clamp(10px, 1.6vw, 20px)`) so descenders don't crowd it.

### Plate (framed figure)
A `<figure>` holding a graphic plus a placard.
```
.plate-inner {              /* the frame */
  height: clamp(440px, 66vh, 780px);
  padding: 10px;            /* paper "mat" between grid and border */
  border: 1px solid var(--ink);
  background: var(--paper);
}
```
- **Placard** (`<figcaption>`): mono, `space-between`, wraps on small screens.
  Left = `FIG. NN · TITLE`; right = controls + live metadata (e.g. `GEN 0000`).

### Buttons
- **Control buttons** (`.ctrl`): mono uppercase, `1px solid var(--line)`,
  `border-radius: 2px` (near-sharp), `padding: 5px 9px`. Hover →
  `border-color: var(--ink)`. Flat, no fill.
- **Icon toggle** (`.toggle`): `34px` circle, `1px solid var(--line)`, hover
  darkens border. Used for the theme switch (sun/moon).

### Links (`.nav`)
Plain ink text, no underline at rest; an animated 1px underline wipes in on
hover (`transform: scaleX(0 → 1)` from the left). Wrap-friendly row.

---

## 6. Texture & motion

- **Grain overlay.** An inline SVG `feTurbulence` (fractal noise) tiled as a
  background image on the section, `background-blend-mode: multiply` (light) /
  `screen` (dark), low opacity. Gives the riso/newsprint surface. Keep it subtle.
- **Transitions.** Short and functional: `0.15s ease` for color/border hovers,
  `0.2s` for the underline wipe. No easing flourishes, no entrance animations.
- **Respect the medium.** Motion is reserved for the live graphic (the Game of
  Life), not for decorating the layout.

---

## 7. The hero graphic — Conway's Game of Life

The signature plate. A live, canvas-rendered Game of Life that reads as a
halftone dot field.

- **Rendering:** HTML `<canvas>` (fast; never DOM cells). Live cells fill with
  `--alive`; grid lines use `--grid-line`. Colors are read from the CSS tokens
  at runtime and re-read on theme toggle so the plate inverts with the page.
- **Cells:** target `CELL ≈ 14px`. The canvas fills the plate exactly — cell
  size is computed as `viewW / cols` (fractional) and the far edge grid lines
  are pinned to the border, so the grid meets all four edges with **no leftover
  gap**. Cells snap to rounded pixel bounds to tile seamlessly.
- **World:** toroidal (edges wrap). ~130ms tick.
- **Seeding:** a deterministic pattern (Gosper glider gun + gliders) so it's
  visibly *alive*, not random mush. Falls back to a random soup when the grid is
  too small (`cols < 40`). Auto-reseeds when the board dies out or stalls.
- **Controls** (in the placard): Play/Pause, Random (soup), Reset (initial
  pattern, zeroes the counter), and a live `GEN` generation counter.

**Reuse idea:** any hero/section graphic should follow the same *plate + placard*
treatment (bordered frame, mono `FIG. NN` caption) to stay on-system.

---

## 8. Responsive

- Fully fluid **down to 260px** — verified no horizontal scroll.
- Type scales via `clamp()`; the headline can wrap on tiny screens.
- At `≤640px`: shorter plate, hide the placard's long descriptor.
- At `≤400px`: tighter mono tracking, smaller labels, wrapping top/bottom bars,
  wrapping controls, smaller toggle.
- Grids too small for the seed pattern fall back to a random soup automatically.

---

## 9. Don'ts

- No pure black/white, no cool greys — everything warm.
- No shadows, gradients, rounded cards, or drop-shadow "elevation".
- No second accent color; red is it.
- Don't put graphics on the page bare — frame them as plates.
- Don't animate the layout; keep motion in the live graphic and hovers.
