# Mithril Atomics — website

Static marketing site for **Mithril Atomics Pvt. Ltd.** Built with
[Astro](https://astro.build) (TypeScript + Vite), deployed to Vercel.

Ships **zero client-side JavaScript**. Every page is plain HTML on the wire.

---

## Project status

**[`PROJECT_STATUS.md`](PROJECT_STATUS.md)** is the current state of play —
what is built, what is decided and why, what is blocking a deploy, and the open
questions. Read it before picking up work; update it when you put work down.

## Quick start

```bash
nvm use            # Node 22 (see .nvmrc)
npm install
npm run dev        # http://localhost:4321
```

| Command | Does |
|---|---|
| `npm run dev` | Dev server with HMR |
| `npm run build` | `astro check` (typecheck) then static build to `dist/` |
| `npm run preview` | Serve the built `dist/` locally |
| `npm run check` | Typecheck only |

---

## Where things are

```
.
├── brand/                  Source of truth — guidelines PDF, logos, fonts, favicons.
│                           Not served. Never edit; it is the brand's archive.
├── docs/
│   ├── DESIGN-SYSTEM.md    How the guidelines map to tokens. Read before styling.
│   └── CONTENT-GUIDE.md    How to edit copy. Read before writing.
├── public/                 Served verbatim at the site root.
│   ├── fonts/              IBM Plex Sans, subset woff2 (74 KB + 80 KB)
│   └── favicon.*           From brand/Favicon_package
└── src/
    ├── assets/logo/        Trimmed logo SVGs (originals are 1500² with padding)
    ├── components/         Logo, Header, Footer, Section, Button, Seo
    ├── content/site.ts     ← ALL COPY LIVES HERE
    ├── layouts/            BaseLayout — head, header, footer
    ├── pages/              One file per route
    └── styles/
        ├── tokens.css      ← THE DESIGN CONTRACT. Every colour, size, space.
        ├── fonts.css       @font-face
        ├── reset.css
        └── global.css      Base type, links, focus, layout primitives
```

**Two rules keep this maintainable:**

1. No copy outside `src/content/site.ts`.
2. No raw hex, px size or spacing value outside `src/styles/tokens.css`.

---

## Design

The site implements Brand Guidelines v2.0 (`brand/Brand_design_guidelines.pdf`).

- **Light-primary**: Off-white `#F5F6F7` ground, Graphite `#0E1013` ink.
- **Steel blue `#365F80` carries the accent role** — links, buttons, rules.
  This is a deliberate, founder-approved extension of the PDF, which reserves
  Steel blue for the icon dot. Rationale and limits: `docs/DESIGN-SYSTEM.md §1`.
- **Signal red `#963939` is locked to the wordmark's "O"** and appears nowhere
  else, exactly as the guidelines require.
- No gradients, shadows or glows. Depth is a hairline or a surface tone.
- All text pairings measured at ≥ 4.5:1 contrast.

---

## Content status

The structure is complete; the copy is not. Strings in `[SQUARE BRACKETS]` in
`src/content/site.ts` are placeholders and render visibly on the page.

```bash
grep -rn "\[" src/content/site.ts   # must be clean before deploy
```

---

## Deploying to Vercel

1. Push this repo to GitHub.
2. In Vercel: **Add New → Project → Import** the repo.
3. Vercel detects Astro. `vercel.json` already sets the build command, output
   directory, clean URLs and cache headers — accept the defaults.
4. Add the domain `mithrilatomics.com` under **Settings → Domains**.

No adapter and no serverless functions: the build emits static files only.

---

## Licence

Site code: proprietary, © Mithril Atomics Pvt. Ltd.
IBM Plex Sans: SIL Open Font Licence 1.1 — see `brand/IBM_Plex_Sans_Fonts/OFL.txt`.
