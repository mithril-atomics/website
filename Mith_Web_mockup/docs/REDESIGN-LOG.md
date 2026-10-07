# Redesign log

## v3 — dark, solution-led (2026-10-07, second pass) ← CURRENT

**Brief:** take cues from exodigo.com (type scale, colour pairing, dark ground);
use AI-generated imagery/video; remove the lab photographs; read as a
**solutions company**, not an academic lab.

**Files:** `Home v3.dc.html`, `Team v3.dc.html`. v2 files and all Wikimedia
lab/stock photos (`assets/photos/`) were **deleted**; the v2 notes below are kept
as history only.

### What changed from v2

| Area | v2 | v3 | Why |
|---|---|---|---|
| Ground | Off-white, light-primary | **Graphite #0E1013**, dark-primary; one Off-white band (Technology) for rhythm | Exodigo-style dark presentation. **Reverses D2** — founder to confirm |
| Display type | 72px max, Medium | **up to 108px**, Medium 500, −0.035em, line-height 0.98 | Exodigo-scale headlines; still IBM Plex Sans, still two weights |
| Ink on dark | — | Headings Off-white #F5F6F7, body Platinum #C7CCD1, secondary #A5ADB6, labels Steel-300 #7AA5C7 | All existing tokens; contrast ≥ 7:1 except labels (7.3:1) |
| Primary button | Steel fill | **Off-white fill, Graphite text** | Highest-contrast object on a dark page; steel kept for labels/rules |
| Narrative | Platform → capabilities → applications | **Challenge → Solutions → Technology (how it works) → Reach → Team → Contact** | Problem/solution/outcome order used by solution companies |
| Nav | Platform · Applications · Team | **Solutions · Technology · Team · Talk to us** | Solution framing |
| Imagery | Wikimedia lab photos (duotone) | **5 AI-generated photographs** (`assets/ai/`) — field deployment, not labs | Brief |
| Hero | Split, framed lab photo | **Full-bleed AI image with slow drift motion** (24s, CSS); `heroVideoUrl` prop swaps in an MP4 | "Video" feel; see limitation below |
| Reach | Text row | **Scrolling Land · Air · Sea · Subsurface · Space marquee** (CSS) | Motion, solution scope |

All copy is still verbatim from `src/content/site.ts` (home, platform.pipeline,
platform.frontiers, platform.reach, cta, team). Only UI labels are new:
"The challenge", "Solutions", "Technology", "Explore solutions", "Meet the team".

### AI imagery

Generated with Gamma (photo model), 7 Oct 2026. Prompts asked for controlled
directional light, desaturated steel/graphite grade, **no neon, glow, holograms,
text or logos** (brand p.06). Footer marks them "AI-generated, illustrative".

| File | Use | Prompt summary |
|---|---|---|
| `hero_drone.jpg` 2400×1340 | Hero | Survey drone over desert canyon, blue hour |
| `sol_explore.jpg` 967×1200 | Geophysical Exploration | Aerial terraced open-pit site |
| `sol_inspect.jpg` | Structural & Infrastructure NDT | Engineer under highway bridge / pipeline |
| `sol_detect.jpg` | Threat Detection | Container port at night, patrol vehicle |
| `sol_navigate.jpg` | GNSS-Denied Navigation | Survey aircraft in cloud over mountains |

**Limitations (honest):**
- **No AI video was produced.** The connected generator only makes stills, and
  the workspace ran out of credits after 5 images (free plan: 50 credits left,
  70 per image). Three more prompts (sensor pod product shot, survey vessel,
  operations room) failed and are not in the design.
- To add video: generate an MP4 (e.g. Veo / Runway / Sora; 8–12s, seamless loop,
  1920×1080, < 6 MB, no audio) and paste its URL into the Home v3
  `heroVideoUrl` tweak. The still remains the poster frame.
- Check the AI generator's licence terms before publishing commercially.

### Brand-rule check (v3)

- [x] Signal red only in the wordmark; logo is the platinum-ink variant on dark (D8)
- [x] No box-shadow / text-shadow / gradients / glows. Image darkening is flat
      Graphite layers at fixed opacity (two stacked flat layers in the hero, not a gradient)
- [x] Two weights (400/500); caps only on short labels with tracking
- [x] Disclosure rule: imagery shows deployments generically; no modality named
- [ ] **D2 reversed (dark-primary)** — needs founder sign-off
- [ ] Re-measure contrast over the hero/solution images after the Astro port

### Port notes

Add `[data-surface="inverse"]` as the page default (tokens already flip
correctly), one new token `--text-display: clamp(2.75rem, 1.2rem + 5.6vw, 6.75rem)`,
and `Hero.astro` (image | video), `SolutionCard.astro`, `Marquee.astro`
(CSS-only, honours `prefers-reduced-motion`). Still zero client JS.

---

## v2 — light, minimal-technical (2026-10-07, first pass) — SUPERSEDED, files deleted


**Session date:** 2026-10-07 · **Author:** Claude (design session) · **Repo commit at start:** `de7d6db`

This session produced **design mocks**, not repo changes. Nothing in `src/` was
edited. The mocks are the spec for the next build session; §6 is the port plan.

---

## 1. Brief

1. Add team photos and LinkedIn profiles (source: `Team Mithril .pdf`).
2. Add real-life photography to make the site more attractive.
3. Take cues from best-in-class deep-tech sites.
4. Minimal, elegant, technical.

## 2. What was read first (per `CLAUDE.md`)

`README.md` → `CLAUDE.md` → `PROJECT_STATUS.md` → `docs/DESIGN-SYSTEM.md` →
`docs/CONTENT-GUIDE.md` → `brand/Brand_design_guidelines.pdf` (all 6 pages) →
`src/content/site.ts` → `src/styles/{tokens,global,reset,fonts}.css` →
`src/layouts/BaseLayout.astro` → every component in `src/components/` →
`src/pages/{index,team,platform,contact}.astro` → `Team Mithril .pdf`.

## 3. Deliverables

| File | What it is |
|---|---|
| `Home Current.dc.html` | Faithful recreation of today's `/` from source — the baseline |
| `Team Current.dc.html` | Faithful recreation of today's `/team` from source |
| `Home v2.dc.html` | Redesigned home *(deleted in v3)* |
| `Team v2.dc.html` | Redesigned team page *(deleted in v3)* |
| `assets/team/*.jpg` | 9 portraits, extracted from the team PDF, cropped 4:5 at 640×800 |
| `assets/photos/*.jpg` *(deleted in v3)* | 7 photographs, 1600–1920px, licences in `assets/photos/credits.json` |

## 4. Changes, and why

### 4.1 Team photos + LinkedIn

- Portraits were extracted from `Team Mithril .pdf` (embedded images) and mapped
  to names **by their x-position on the page**, matched against the text layer.
  LinkedIn URLs come from the PDF's link annotations — none were typed by hand.
- Cropped to a uniform 4:5, head-and-shoulders. Two source images are circular
  crops on black (Rahul Rai, Prof. Raavi); their 4:5 crop stays inside the circle.
  Dr. Myneni's source is only 200×300 px — **request a larger original**.
- Display: monochrome by default, natural colour on hover (360ms, flat ease).
  Keeps nine photos taken in nine different lights reading as one set.
- Each card: index · name · role (`.label` caps) · bio · `LinkedIn ↗` button
  (≥44px target, `target=_blank` + `rel="noopener noreferrer"`, descriptive
  `aria-label`).

| Person | LinkedIn |
|---|---|
| Devendra Mishra | https://www.linkedin.com/in/devendra-mishra444 |
| Rikteem Bhowmick | https://www.linkedin.com/in/rikteem-bhowmick-aa3050228 |
| Abhijeet Ghodgaonkar | https://www.linkedin.com/in/abhijeet-ghodgaonkar-%E0%A4%85%E0%A4%AD%E0%A4%BF%E0%A4%9C%E0%A5%80%E0%A4%A4-%E0%A4%98%E0%A5%8B%E0%A4%A1%E0%A4%97%E0%A4%BE%E0%A4%B5%E0%A4%95%E0%A4%B0-85779957 |
| Rahul Rai | https://www.linkedin.com/in/raitherahul |
| Srikrishna Vadrevu | https://www.linkedin.com/in/srivadrevu |
| Prof. B. S. Murty | https://www.linkedin.com/in/bs-murty-78b996290/ |
| Prof. Sai Santosh Kumar Raavi | https://www.linkedin.com/in/sai-santosh-kumar-raavi-28715882/ |
| Dr. Niranjan Myneni | https://www.linkedin.com/in/niranjan-myneni-43a141159/ |
| Vijay Yadav | https://www.linkedin.com/in/vijay-yadav-52b80016b |

**Roster conflict (see PROJECT_STATUS Q2).** The PDF lists Founding Team =
Devendra, Rikteem, Abhijeet, Srikrishna, **Rahul Rai**; Advisory = Murty, Raavi,
Myneni, **Vijay Yadav**. `site.ts` lists Srikrishna as an advisor and omits Rahul
and Vijay. The mock defaults to the PDF and carries a **`rosterSource` tweak** to
flip to the `site.ts` roster, so the founder can see both. Rahul and Vijay have no
approved role/bio, so they render as visible `[ROLE]` / `[BIO]` placeholders,
per `CONTENT-GUIDE.md`. Nothing was invented.

### 4.2 Real photography

Guidelines p.06: macro/lab/instrumentation, controlled directional light; no
neon circuitry, holograms or space backdrops. Chosen from Wikimedia Commons,
licence-checked, downloaded locally (no hotlinking):

| File | Use | Credit | Licence |
|---|---|---|---|
| `lab_ytterbium.jpg` | Home hero, FIG. 01 | NIST | Public domain |
| `lab_bec.jpg` | Platform section, FIG. 02 | Steve Jurvetson | CC BY 2.0 |
| `lab_tvac.jpg` | "Bigger picture" band, FIG. 03 | NASA JSC | Public domain |
| `lab_scope.jpg` | Team page band, FIG. 04 | Radarvector | CC BY-SA 4.0 |
| `app_core.jpg` | Geophysical Exploration | kallerna | CC BY-SA 4.0 |
| `app_bridge.jpg` | Structural & Infrastructure NDT | Higad Rail Fan | CC BY-SA 4.0 |
| `app_ship.jpg` | Threat Detection | Masahiko Ohkubo | CC BY 2.0 |
| `app_terrain.jpg` | GNSS-Denied Navigation | Paul Gilmore | CC0 |

Rejected: a Himalaya aerial (author asks to be contacted before commercial use),
two laser shots with neon/green-glow lighting (p.06 "avoid"), and
`brand/LinkedIn Background.jpeg` (glow effects — p.04 "avoid").

Every photo is credited in its figure caption and again in the footer. CC BY /
BY-SA require attribution; CC BY-SA additionally means **modified versions**
(our duotone) inherit BY-SA. Fine for a website; record it.

**Treatment.** Default is a steel duotone: `filter: grayscale(1)` + a
`--brand-steel-blue` layer at `mix-blend-mode: color`, 85%. It re-colours
off-brand stock into the palette and makes eight sources read as one shoot.
Tweak `photoTreatment` offers Monochrome and Natural. No gradients, shadows or
glows are used anywhere — the darkened bands are a flat Graphite layer at
fixed opacity, not a gradient.

> These are placeholders for **Mithril's own photography**. When the lab can be
> shot, replace file-for-file; the layout does not change.

### 4.3 What was borrowed from the best sites

Studied as patterns, not copied: Anduril and SandboxAQ (photography carries the
page; copy is short and declarative), Linear and Vercel (visible grid, hairline
discipline, restrained motion), scientific-instrument datasheets (figure numbers,
captions, indices).

| Pattern | Where |
|---|---|
| **Visible page frame** — a 1280px column drawn with 1px side rules, every band separated by a hairline | All v2 pages |
| **Datasheet indexing** — `01 — The platform`, `A.01`, `FIG. 01` | Section labels, application cards, captions |
| **Split hero** — headline left, framed instrument photo right with registration marks | Home hero (tweak: `heroLayout` → Full-bleed) |
| **Hairline cell grids** — the KeyGrid "gap is the rule" technique extended to capabilities, applications and people | Home, Team |
| **One quiet motion** — a thin steel field trace scrolling under the pullquote, labelled *illustrative*; CSS-only, off under `prefers-reduced-motion` | Home "Signal" band (tweak: `signalTrace`) |
| **Full-bleed statement band** over a darkened photograph | "The Bigger Picture" |
| **Sticky translucent header** with a single outlined CTA | All v2 pages |

### 4.4 Type and layout adjustments

- Display headings at **Medium 500** instead of Bold 700 (both permitted by p.05);
  at 56–72px Medium reads more precise, less loud. Tracking −0.025em.
- Copy is **unchanged** from `site.ts`. Heading case is still Title Case pending Q1.
- Home now previews the three uncontested founders and links to Team.
- CTA and footer merged into one inverse block; the CTA button is a `mailto:`
  until Q3 (contact form) is answered.

## 5. Brand-rule check on the mocks

- [x] Signal red only in the wordmark (logo SVGs untouched)
- [x] No `box-shadow`, `drop-shadow`, `text-shadow`, `linear-gradient`
- [x] Two weights only (400 / 500); no Light/Thin
- [x] Full caps only on short labels, always tracked 0.08em
- [x] Logo ink matches surface (graphite in header, platinum in footer); lockup 44 / 48px ≥ 40px
- [x] Text pairings from the measured token table only; captions on dark photo
      bands use Platinum / `--ink-300` over a 62–74% Graphite layer
- [x] Disclosure rule: no modality named as built; captions describe the
      *photograph*, not Mithril hardware
- [ ] 390px overflow and contrast to be **measured** again after the Astro port

## 6. Port plan (next build session)

1. `public/images/team/` ← `assets/team/*.jpg`; `public/images/photos/` ← `assets/photos/*.jpg`.
   Prefer `src/assets/` + Astro `<Image>` for AVIF/WebP and width sets.
2. `site.ts`: extend `Person` with `photo`, `linkedin`; add Rahul Rai and Vijay
   Yadav once Q2 is answered; add `figures[]` `{ src, alt, caption, credit }`.
3. Tokens: add `--frame-line: var(--line)` and a `--photo-tint-opacity: 0.85`;
   no new colours are needed — every value in the mocks is an existing token.
4. Components: `Figure.astro` (photo + caption + optional registration marks),
   extend `Person.astro` (photo, LinkedIn button), `AppCard.astro`, `Trace.astro`
   (static SVG + CSS keyframe — still zero client JS).
5. Footer: add photo credits line.
6. Re-run the `CLAUDE.md` checks; measure 390px overflow and contrast.

## 7. Open items raised by this session

- Q2 roster (PDF vs `site.ts`) — tweak in `Team v2` shows both.
- Roles and bios for **Rahul Rai** and **Vijay Yadav**.
- Higher-resolution portrait of **Dr. Niranjan Myneni** (source is 200×300).
- Founder sign-off on the steel duotone photo treatment — it is a new use of the
  accent (D3 covers links/buttons/rules, not imagery).
- Commission or shoot Mithril's own lab photography to replace the stock set.
