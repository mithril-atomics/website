# Design system

Implementation of **Mithril Atomics Brand Guidelines v2.0** (`brand/Brand_design_guidelines.pdf`)
for the web. Everything here is enforced in `src/styles/tokens.css` — that file is
the contract, this document explains it.

---

## 1. The one deviation from the PDF

The guidelines reserve **Steel blue** for the single dot on the icon, and say the
palette carries "two accent colors, each reserved for a single, specific role".

**Approved change (Oct 2026):** on the website, Steel blue is promoted to the
**interactive / accent** role — links, buttons, section rules, eyebrow labels.

This is contained, not open-ended:

- The ramp keeps the brand hue (**206.8°**) and saturation (**40.7%**) at every
  step, so nothing drifts into a second blue.
- No gradients, glows or shadows are introduced — the "avoid" list on p.04 still
  holds in full.
- **Signal red stays locked.** It appears nowhere except inside the wordmark's
  "O", exactly as p.04 requires. It is declared in `tokens.css` so the logo
  renders, and is referenced by no component. If you find `--brand-signal-red`
  in a component, that is a bug.

---

## 2. Colour

### Brand constants

| Token | Hex | Role (per the PDF) |
|---|---|---|
| `--brand-graphite` | `#0E1013` | Primary ink on light backgrounds |
| `--brand-platinum` | `#C7CCD1` | Primary ink on dark backgrounds |
| `--brand-steel-blue` | `#365F80` | Accent |
| `--brand-signal-red` | `#963939` | **Locked** — wordmark "O" only |
| `--brand-off-white` | `#F5F6F7` | Light ground |
| `--brand-muted-grey` | `#5B6570` | Secondary / supporting text |

### Ramps

Generated from the brand hue, every step contrast-measured.

**Steel** — `hsl(206.8, 40.7%, L)`

| Token | Hex | On off-white | On graphite |
|---|---|---|---|
| `--steel-700` | `#2A4B64` | 8.48 | — |
| `--steel-600` | `#305573` | 7.26 | — |
| `--steel-500` | `#365F80` | **6.25** | 2.82 |
| `--steel-400` | `#4478A1` | 4.36 | 4.03 |
| `--steel-300` | `#7AA5C7` | 2.42 | **7.29** |
| `--steel-200` | `#B0C9DE` | 1.58 | 11.12 |
| `--steel-100` | `#DBE7F0` | — | — |
| `--steel-050` | `#EFF4F8` | — | — |

**Neutral** — `hsl(211.4, 10.3%, L)`, anchored on Muted grey

| Token | Hex | On off-white | On graphite |
|---|---|---|---|
| `--ink-700` | `#3B4249` | 9.41 | — |
| `--ink-500` | `#5B6570` | **5.48** | 3.21 |
| `--ink-400` | `#788491` | 3.52 | **5.00** |
| `--ink-200` | `#D5D9DD` | hairlines | — |

### Semantic roles — use these, never the ramps

| Role | Light surface | Inverse surface |
|---|---|---|
| `--surface` | `#F5F6F7` | `#0E1013` |
| `--ink` | Graphite · **17.6:1** | Platinum · **11.8:1** |
| `--ink-muted` | `--ink-500` · **5.5:1** | `--ink-400` · **5.0:1** |
| `--accent` | `--steel-500` · **6.3:1** | `--steel-300` · **7.3:1** |
| `--accent-hover` | `--steel-700` | `--steel-200` |
| `--line` | `--ink-200` | `--ink-800` |

Every pairing above clears **WCAG AA (4.5:1)** for body text. White on
`--accent` is 6.76:1, so solid buttons pass too.

### Flipping a surface

Put `data-surface="inverse"` on any element. All roles flip; components need no
dark-mode CSS of their own.

```astro
<Section surface="inverse" heading="…" />
```

`accent` (steel wash) and `raised` (white) are also available.

> There is no user-facing light/dark toggle. The site is light-primary by
> decision; `inverse` is a compositional band, not a theme.

---

## 3. Typography

**IBM Plex Sans**, self-hosted, variable weight axis, width pinned to 100.
Subset to Latin + Latin Extended: **74 KB** upright, **80 KB** italic.

### Weights — two only

| Token | Value | Use |
|---|---|---|
| `--weight-regular` | 400 | Body |
| `--weight-medium` | 500 | Subheads, nav, buttons, labels |
| `--weight-bold` | 700 | h1–h3 |

Light and Thin are **forbidden** (p.05) — they undercut the engineered feel at
small sizes. They are not in the token file; do not add them.

### Scale

Fluid via `clamp()`. No bare `vw` units anywhere.

| Token | Min → Max |
|---|---|
| `--text-caption` | 13px |
| `--text-sm` | 14px |
| `--text-base` | 16 → 17px |
| `--text-lg` | 18 → 20px |
| `--text-2xl` | 24 → 30px |
| `--text-3xl` | 30 → 40px |
| `--text-4xl` | 36 → 56px |
| `--text-5xl` | 42 → 72px |

### Rules

- **Sentence case** for all running copy.
- **Full caps only** on `.label` — short labels, always with `--tracking-label`
  (0.08em). Nowhere else.
- Measure capped at `--measure` (68ch) — the PDF's 60–75 characters per line.
- Headlines get negative tracking; body sits at 0.
- The styled "O" is a logo-only exception. Never stylise a letter in running text.

---

## 4. Space and layout

4px base, geometric above 16px: `--space-3xs` (4) through `--space-4xl` (128).

| Token | Value |
|---|---|
| `--section-y` | `clamp(64px, 6vw, 128px)` — vertical rhythm of a band |
| `--gutter` | `clamp(16px, 4vw, 48px)` — page inset |
| `--width-full` | 1280px |
| `--width-wide` | 1088px |
| `--width-content` | 768px |
| `--width-narrow` | 576px |

Wrappers: `.wrap`, `.wrap--wide`, `.wrap--content`, `.wrap--narrow`.

---

## 5. Shape, depth and motion

The guidelines forbid drop shadows, glows and gradients (p.04). There is **no
shadow token**. Depth is expressed only two ways:

1. a 1px hairline (`--line`)
2. a shift in surface tone (`--surface-raised`, `--surface-accent`)

Radii stay near-square: 2 / 3 / 4px. Motion is 120–360ms with a flat ease; nothing
bounces, scales or pulses. `prefers-reduced-motion` is honoured globally.

---

## 6. The logo

Component: `src/components/Logo.astro`. The 12 SVGs in `src/assets/logo/` are
**trimmed** copies — the originals in `brand/Logo_Files/` are 1500×1500 squares
with ~45% padding, unusable in a header. Each trimmed file's `viewBox` was
measured from the real rendered bounding box; no path data was altered.

| Prop | Values | Notes |
|---|---|---|
| `ink` | `graphite` \| `platinum` | **Must** match the background. Never guessed. |
| `variant` | `lockup` \| `mark` | Lockup = icon + wordmark. |
| `height` | number, default 44 | Lockup minimum **40px**. |

- Lockup ratio **1.749:1**; mark ratio **1.786:1**.
- Below 40px the ribbon hairlines stop resolving — measured, not estimated.
  Use `variant="mark"` instead. Dev builds warn on this.
- The component never recolours, rotates or filters the mark.

---

## 7. Accessibility baseline

- All text pairings ≥ 4.5:1. Verified, not assumed.
- Real `<a>`, `<button>`, `<label>` elements. No `role`+`onClick` on a div.
- One focus treatment everywhere: 2px `--focus-ring`, 3px offset. Never removed.
- Touch targets ≥ 44px in every interactive component.
- Skip link to `#main` as the first focusable element.
- Nav wraps rather than collapsing behind a JS toggle — the site ships **zero
  client-side JavaScript**.
- Current page marked with `aria-current="page"`, not colour alone.

---

## 8. Voice (p.06) — applies to copy, enforced by review

- Lead with what was measured, not with adjectives.
- No "revolutionary", "game-changing", or similar.
- Active, technical language over marketing language.

Imagery: macro photography of metal, lab equipment, instrumentation. Controlled
directional lighting. **No** neon circuitry, holograms or outer-space backdrops.

---

## 9. Checklist before any merge

- [ ] No raw hex outside `tokens.css` — three sanctioned exceptions only:
      the two `<meta name="theme-color">` tags in `BaseLayout.astro` (meta
      content cannot read a CSS variable) and the `@media print` override in
      `global.css`
- [ ] No `--brand-signal-red` outside the logo
- [ ] No `box-shadow`, `filter: drop-shadow`, or `linear-gradient`
- [ ] No Light/Thin font weights
- [ ] Full caps only on `.label`
- [ ] Logo `ink` matches its surface; lockup ≥ 40px
- [ ] No `[PLACEHOLDER]` strings left in `src/content/site.ts`
- [ ] `npm run build` passes (`astro check` runs first)
