# Mithril Atomics — website redesign (v3)

## Open
Serve this folder from any static server (e.g. `npx serve .`) and open `Home v3.dc.html`. Pages need `support.js` beside them and load `team.json` by fetch, so opening via `file://` may block the team data.

## Edit the team
Edit `team.json` only — see `TEAM-EDIT.md`. Order in file = order on site.

## Contents
- `Home v3.dc.html`, `Team v3.dc.html` — the pages (Design Components)
- `team.json` — team names, roles, bios, photos, LinkedIn
- `assets/` — logos, team portraits (`team/`), AI imagery (`ai/`), favicon
- `fonts/` — IBM Plex Sans (variable)
- `docs/REDESIGN-LOG.md`, `PROJECT_STATUS.md` — change log and decisions
- `guidelines/` — CLAUDE.md, content guide, design system, brand guidelines PDF, team PDF, `site.ts` (approved copy)

## Porting to the Astro repo (`Mith_Web`)
The Astro source is in your local `Mith_Web/` folder and was not modified. Port notes are in `docs/REDESIGN-LOG.md`. Team data in `src/content/site.ts` should mirror `team.json`.
