# Working on this repo

## Before you do anything

**Read `PROJECT_STATUS.md` first.** It is the handover note between sessions:
current state, decisions on record with their reasoning, known issues, open
questions for the founder, and environment gotchas that will otherwise cost you
a debugging cycle.

Then, depending on the task:

- **Styling or layout** → `docs/DESIGN-SYSTEM.md`
- **Copy** → `docs/CONTENT-GUIDE.md`

## Before you finish

**Update `PROJECT_STATUS.md`.** Section 9 of that file says exactly how.
A session that changes the repo and leaves the status file stale has left the
next session with a wrong map.

## Two rules

1. **No copy outside `src/content/site.ts`.**
2. **No raw hex, font size or spacing value outside `src/styles/tokens.css`.**

## Hard brand constraints

These come from `brand/Brand_design_guidelines.pdf` and are not style
preferences — breaking them is a bug:

- **Signal red `#963939` appears only inside the wordmark's "O".** Never in UI.
- **No shadows, gradients or glows.** Depth is a 1px hairline or a surface tone.
  There is no shadow token; do not add one.
- **Two font weights only** (400, and 500/700 for headings). No Light or Thin.
- **Full caps only on `.label`**, always with letter-spacing.
- **The logo's `ink` prop must match its background.** Never infer it.
- Minimum logo lockup height is **40px**. Below that use `variant="mark"`.

## Checks before any commit

```bash
npm run build        # astro check runs first; must be 0 errors
grep -rn "\[" src/content/site.ts                                   # no placeholders
grep -rniE 'box-shadow|drop-shadow|linear-gradient|text-shadow' src # must be empty
grep -rn 'signal-red' src --include='*.astro' --include='*.ts'      # must be empty
```

Also confirm: no horizontal overflow at 390px, and contrast ≥4.5:1 for any new
colour pairing. Measure these — do not assume them.

## Environment note

In Cowork's Linux sandbox, file deletion is off by default and **both git and
the Astro build need it** to remove their own temp files. Request delete
permission for the folder before running either, or you will hit
`EPERM … unlink` and a stale `.git/HEAD.lock`.
