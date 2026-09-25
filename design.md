# berkaycubuk.com — Design System

The visual language of the site. Reference this when building new pages or
components so everything reads as one system.

---

## 1. Art direction

**Editorial workshop.** A magazine feature about someone who builds real
things: a giant serif name, full-bleed photography of the work, numbered
chapters for case studies, and small mono labels like figure captions in an
engineer's notebook. Quiet off-white paper — the photos supply the colour.

Audience: operations managers at factories and workshops, not engineers. It
should read as confident and trustworthy first, a little technical second.

**Principles**
- **Photos carry the page.** Show the device, the wiring, the install. Real
  workshop photos beat illustrations.
- **Type does the rest.** Big serif display, plain sans body, tiny mono labels.
  Contrast comes from scale, never from bold.
- **Photos as prints.** Small supporting photos sit in a white frame with a soft
  shadow, tilted a few degrees, captioned in mono (`FIG. A — AVAILABLE`).
- **One accent, used sparingly.** Red-orange for numbers and figure tags only.
  Green only for the "available" status dot.
- **Hairline structure.** 1px rules divide sections; no boxes or gradients.
- **Motion is optional.** CSS-only hover and scroll reveals, all disabled
  under `prefers-reduced-motion`. No animation library.

---

## 2. Color tokens

CSS custom properties in `src/styles/global.css`, redefined under `html.dark`.

| Token      | Light     | Dark      | Use |
|------------|-----------|-----------|-----|
| `--paper`  | `#f5f3ee` | `#0e0e0d` | Page background |
| `--ink`    | `#121211` | `#f0eee8` | Text, rules, buttons |
| `--ink-dim`| `#6f6c65` | `#8f8c84` | Secondary text, captions |
| `--line`   | `#dedad1` | `#2a2926` | Hairline rules |
| `--print`  | `#ffffff` | `#1c1c1a` | Photo-print frames |
| `--accent` | `#d23a1f` | `#ef5a3c` | Section numbers, figure tags, eyebrow dot |
| `--ok`     | `#1f9d55` | `#1f9d55` | "Available" status dot |

The older `--color-*` semantic tokens map onto these and are still used by
inner pages, prose and Tailwind arbitrary values.

---

## 3. Typography

Self-hosted in `public/fonts/` (latin + latin-ext for Turkish), declared in
`global.css`. No third-party font requests.

| Role     | Font              | Token            | Notes |
|----------|-------------------|------------------|-------|
| Display  | Instrument Serif  | `--font-display` | One weight (400) + italic. **Never bold it.** |
| Body     | Inter Tight       | `--font-body`    | Variable weight; 600 for buttons/links only |
| Labels   | JetBrains Mono    | `--font-mono`    | `.mono`: 11–12px, uppercase, `0.06em` tracking |

- Display sizes are fluid: name `19vw`, page titles `clamp(64px, 13vw, 180px)`,
  section headings `clamp(40px, 6vw, 88px)`, line-height 0.8–1.
- Italic serif marks emphasis: the surname, results, the closing "Write to me."
- `.page-title` carries `padding-bottom: 0.14em` so descenders don't collide.

---

## 4. Components (global classes)

- `.btn` — ink pill, the one loud CTA. Primary action is always **email**.
- `.pill` — outline pill (header "Email me").
- `.print` — framed photo with mono `figcaption`.
- `.mono`, `.eyebrow` + `.dot` — labels.
- `.page-title`, `.lede` — inner-page masthead.
- `.entry` — hairline-separated list row (writings, notes, projects, tools).
- `.shell` — 1200px frame with `--pad` gutters; `.measure` — 720px reading width.

Header and footer (`Header.astro`, `Footer.astro`) take `lang` for Turkish
labels; the footer ends inner pages with a large "Write to me →".

---

## 5. Performance rules

- Static HTML; the only JS is the mobile menu and theme toggle.
- Images go through `astro:assets` `<Image>` as WebP with `widths`/`sizes`;
  only the hero is `loading="eager"`.
- Video: short, muted, re-encoded (~1MB), `preload="none"` with a poster.
- Two fonts preloaded in `BaseLayout.astro`; everything else loads on demand.
