# Project status — Mithril Atomics website

> **Read this file at the start of every session. Update it at the end.**
> It is the handover note between sessions: what is built, what is decided,
> what is broken, what comes next.

**Last updated:** 2026-10-07 · **Branch:** `main` · **Last commit:** `de7d6db`
**Overall status:** 🟡 Buildable and reviewable locally. **Not ready to deploy** —
see [Blockers](#blockers-before-first-deploy).

---

## 1. What this is

Static marketing site for **Mithril Atomics Pvt. Ltd.** (`mithrilatomics.com`),
a quantum sensing company building a Quantum Field Intelligence Platform.

- **Repo root:** `~/Documents/Mith_Web` (local git, **no remote yet**)
- **Stack:** Astro 7 (Vite + TypeScript) → static HTML, **zero client-side JS**
- **Target host:** Vercel (config committed, project not yet created)
- **Design authority:** `brand/Brand_design_guidelines.pdf` (Brand Guidelines v2.0, Aug 2026)

### Commands

```bash
cd ~/Documents/Mith_Web
npm install
npm run dev        # http://localhost:4321
npm run build      # astro check + static build to dist/
npm run preview    # serve dist/ as Vercel will
```

---

## 2. Current state

### Done ✅

| Area | State |
|---|---|
| Repo + build pipeline | Astro 7, static output, `astro check` in the build, GitHub Actions CI |
| Vercel config | `vercel.json` — clean URLs, immutable cache headers, security headers |
| Design tokens | `src/styles/tokens.css` — full colour/type/space/shape system |
| Fonts | IBM Plex Sans variable, subset + self-hosted (74 KB + 80 KB woff2) |
| Logo system | 12 SVGs re-cropped to true bbox; `Logo.astro` with ink/variant/height |
| Components | Logo, Header, Footer, Seo, Section, Button, KeyGrid, Steps, Chain, Pullquote, Person, Cta |
| Pages | Home, Platform, Team, Contact, 404 |
| Copy | All approved copy in place (`src/content/site.ts`) |
| SEO | Per-page title/description/canonical, OG + Twitter tags, Organization JSON-LD, sitemap, robots.txt |
| Accessibility | Skip link, `aria-current`, visible focus, ≥44px targets, real semantic elements |
| Docs | `README.md`, `docs/DESIGN-SYSTEM.md`, `docs/CONTENT-GUIDE.md` |
| **v3 redesign ported** (2026-10-07) | Dark-primary (`data-surface="inverse"` on `<html>`), Home + Team match `Mith_Web_mockup/` v3. Images in `public/images/`. Nav = Solutions · Technology · Team · Talk to us. Platform and Contact restyled but not in the nav. Uncommitted |

### Verified, not assumed

Each of these was measured on a real render, not eyeballed:

- `astro check` — **0 errors / 0 warnings** across 20 files
- **No horizontal overflow** at 390px on any page
- **Contrast:** every text node measured against its real computed background
  clears WCAG AA on all four pages
- Logo minimum legible lockup height is **40px** (at 28px the ribbon hairlines
  stop resolving) — enforced by a dev-mode warning in `Logo.astro`
- Build output: **596 KB** total, 5 routes

### Not built ❌

- Privacy policy and Terms pages (`footer.links` is deliberately empty)
- OG social-share image (`public/og/` is empty → `/og/default.png` 404s)
- Contact form (Contact page is email + address only; static host, so a form
  needs a third-party endpoint or a serverless function)
- Any imagery — the site is currently type-and-rule only
- Analytics
- Custom 404 styling beyond the default Section layout

---

## 3. Architecture and conventions

```
Mith_Web/
├── brand/              Source of truth: guidelines PDF, logos, fonts, favicons. Archive — do not edit.
├── docs/
│   ├── DESIGN-SYSTEM.md   How the guidelines map to tokens. Read before styling.
│   └── CONTENT-GUIDE.md   How to edit copy. Read before writing.
├── public/             Served verbatim at site root (fonts, favicons, robots.txt)
└── src/
    ├── assets/logo/    Trimmed logo SVGs (originals are 1500² with ~45% padding)
    ├── components/     12 components, all scoped-CSS
    ├── content/site.ts ← ALL COPY LIVES HERE
    ├── layouts/        BaseLayout
    ├── pages/          One file per route
    └── styles/         tokens.css ← THE DESIGN CONTRACT
```

### Two rules that keep this maintainable

1. **No copy outside `src/content/site.ts`.**
2. **No raw hex, font size or spacing value outside `src/styles/tokens.css`.**
   Three sanctioned exceptions, all documented in the design doc checklist:
   two `<meta name="theme-color">` tags and the `@media print` override.

### Brand rules enforced in code

- **Signal red `#963939` is locked to the wordmark's "O"** — declared in
  `tokens.css` so the logo renders, referenced by **no** component.
- **No shadow, gradient or glow tokens exist.** Depth is a 1px hairline or a
  surface tone. The guidelines' "avoid" list (p.04) is a hard constraint.
- **Two font weights only** — Regular 400 and Medium 500 / Bold 700. Light and
  Thin are forbidden (p.05) and absent from the tokens.
- **Full caps only on `.label`**, always with `--tracking-label`.

### Surface flipping

Put `data-surface="inverse"` (or `"accent"` / `"raised"`) on any element and
every colour role flips. Components need no dark-mode CSS of their own. There
is **no user-facing light/dark toggle** — the site is light-primary by decision;
`inverse` is a compositional band.

---

## 4. Decisions on record

| # | Decision | Rationale |
|---|---|---|
| D1 | **Astro, not React SPA** | Same Vite+TS toolchain, but emits real static HTML per page, ships zero JS, better SEO, no adapter needed on Vercel |
| D2 | **Light-primary surface** (Off-white ground, Graphite ink) | Founder's call |
| D3 | **Steel blue `#365F80` promoted to the accent role** (links, buttons, rules) | Founder's call, deviating from the PDF which reserves it for the icon dot. Contained: the ramp holds the brand hue (206.8°) and saturation (40.7%) at every step. Rationale and limits in `docs/DESIGN-SYSTEM.md §1` |
| D4 | **Steel blue swaps to `#7AA5C7` on dark surfaces** | `#365F80` is only 2.82:1 on Graphite — fails AA. Handled automatically by `[data-surface="inverse"]` |
| D5 | **CSS custom properties + scoped CSS, not Tailwind** | Brand constraints live in one readable file; harder to drift off-palette |
| D6 | **Self-hosted fonts, not Google Fonts CDN** | No third-party request, no layout shift, exact cut controlled |
| D7 | **Applications dropped from the nav** | Supplied copy is two pages plus team. Sectors live on Home ("Where We Apply It"), verb framing on Platform ("One Platform. Multiple Frontiers."). A fifth page would duplicate copy verbatim. **To re-add:** one entry in `nav[]` + a page file |
| D8 | **Logo `ink` prop is explicit, never inferred** | Guidelines p.06 require the ink variant to match the background; guessing it is how that rule gets broken silently |

---

## 5. Known issues

### Blockers before first deploy

| # | Issue | Fix |
|---|---|---|
| B1 | `[LINKEDIN URL]` placeholder in `site.ts:19` | Supply the URL, or delete the field — the footer and contact page both render conditionally |
| B2 | `[REGISTERED ADDRESS]` placeholder in `site.ts:20` | Same |
| B3 | `/og/default.png` does not exist → 404 on every social share | Create a 1200×630 image into `public/og/`. `brand/LinkedIn Background.jpeg` may be a starting point |
| B4 | Footer links to `/privacy` and `/terms` | Currently `footer.links` is empty so nothing 404s. Add the pages, or leave empty |
| B5 | No git remote | `git remote add origin … && git push -u origin main` |

Check B1/B2 with:

```bash
grep -n "\[" src/content/site.ts    # should return only code, no placeholders
```

### Open questions for the founder

| # | Question |
|---|---|
| Q1 | **Heading case.** Supplied copy uses Title Case ("Where We Apply It"); guidelines p.05 say sentence case for all running copy, caps reserved for short labels. Copy was kept verbatim rather than silently rewritten. Which wins? One-pass change in `site.ts` |
| Q2 | **Team list.** Supplied content puts Srikrishna Vadrevu under Advisors (Finance & Strategy), and does not list Rahul Rai or Vijay Yadav, both of whom appeared in earlier company material. Intentional? |
| Q3 | Does Contact need a working form, or is `mailto:` enough? |

### Environment gotchas

| # | Gotcha |
|---|---|
| E1 | **Cowork's Linux sandbox cannot delete files by default.** Git and Astro both need to unlink their own temp files — without delete permission, `npm run build` fails with `EPERM … unlink` and git leaves a stale `.git/HEAD.lock` that blocks the next command. Request delete permission for the folder at the start of any session that will run git or a build |
| E2 | **`node_modules` installed from the sandbox is Linux-resolved.** If `sharp` or `lightningcss` misbehave on the Mac, `rm -rf node_modules && npm install` |
| E3 | `.preview/` is a gitignored scratch copy of `dist/` used for screenshotting. Safe to delete |

### Gotchas in the code worth knowing

| # | Gotcha |
|---|---|
| C1 | **Astro scoped styles do not reach a child component's root unless that child spreads rest props.** `Pullquote` learned this the hard way — a parent's spacing rule silently failed to match. Its spacing now also goes through a `--pullquote-space` custom property, which cascades regardless. **If you pass a class to a component and the style does nothing, this is why** |
| C2 | **`KeyGrid` uses explicit column counts, not `auto-fit`.** `auto-fit` landed 4 items in a 3-column track and left the grid's own background showing as dead grey cells |
| C3 | The hairline grid in `KeyGrid` works by making the **gap** the rule — the grid has a background and the items sit on `--surface`. Adding borders to items will double the lines |

---

## 6. Next steps

### Immediate (to ship a v1)

1. Resolve **B1–B4** (placeholders, OG image, legal pages)
2. Answer **Q1** (heading case) — affects every heading, cheapest to settle before more copy lands
3. Create the GitHub repo and push (**B5**)
4. Import to Vercel, add `mithrilatomics.com`

### After launch

- Imagery pass. Guidelines p.06: macro photography of metal, lab equipment and
  instrumentation; controlled directional lighting. **No** neon circuitry,
  holograms or space backdrops. The site is deliberately image-free until real
  photography exists — stock "tech" imagery would break the brand
- Contact form, if Q3 says so
- Privacy / Terms
- Analytics (privacy-respecting; the site currently ships zero JS, worth keeping)
- Lighthouse + axe pass on the deployed URL

### Deliberately not planned

- A CMS. Copy volume is low and `site.ts` is typed and reviewable in a PR
- A blog, until there is a cadence to sustain it
- Client-side JS, unless a feature genuinely requires it

---

## 7. Disclosure rule — applies to all public copy

Standing instruction for Mithril Atomics public material:

- **Do not name a specific sensing modality or instrument type** as the thing
  the company has built. Sensors are "quantum sensors"; what they read are
  "invisible fields".
- Modalities **may** be named in the **plural**, as inputs the platform will
  integrate as they mature (magnetic, gravimetric, electromagnetic and beyond).
- **No methods, materials or performance figures** are published.

Confirm any new technical copy with the founder before publishing.

---

## 8. Session log

| Date | Commit | What changed |
|---|---|---|
| 2026-10-04 | `e6f5a0a` | Repo scaffold, build pipeline, full design-token system, font subsetting, logo trimming, docs |
| 2026-10-04 | `5b0c3d0` | Documented the three sanctioned raw-hex exceptions |
| 2026-10-04 | `de7d6db` | All approved copy in; Home/Platform/Team/Contact built; Steps, Chain, KeyGrid, Pullquote, Person, Cta components; fixed KeyGrid dead cells and the Pullquote scope bug |
| 2026-10-07 | — (uncommitted) | Ported v3 mock to Astro: tokens (display scale, light/inverse role sets, `--btn-*`, scrims), Header/Footer/Button/Cta/Person rebuilt, Home + Team rewritten, team photos + LinkedIn in `site.ts`, Vashishtha Kochar added (bio pending, renders nothing), `isSet()` hides `[PLACEHOLDER]` values. `astro check` 0/0/0; no overflow at 390px |

---

## 9. How to update this file

At the end of a session:

1. Update **Last updated**, **Last commit**, **Overall status**
2. Move anything finished out of §2 "Not built" and into "Done"
3. Add or close entries in §5 "Known issues" — **a closed issue gets deleted,
   not struck through**; the git history is the archive
4. Record new decisions in §4 with the reasoning, not just the outcome
5. Re-prioritise §6
6. Append a row to §8
