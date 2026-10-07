# Editing the site's copy

**Every word on the site lives in `src/content/site.ts`.** No copy is written
into a `.astro` file. To change text, edit that file — nothing else.

## Placeholders

Strings in `[SQUARE BRACKETS]` are awaiting approved copy. They render visibly
on the page so nothing fake can ship unnoticed.

Before any deploy:

```bash
grep -rn "\[" src/content/site.ts
```

That must return nothing but code.

## Structure

| Export | What it holds |
|---|---|
| `company` | Name, domain, email, tagline, social |
| `nav` | Primary navigation — drives header, footer and `aria-current` |
| `seo` | Title template, default description, OG image |
| `pages` | Per-page hero and sections |
| `leadership`, `advisors` | People — names confirmed, roles/bios pending |
| `footer` | Footer note, copyright, legal links |

## Adding a page

1. Add an entry to `pages` in `site.ts`.
2. Add a `{ label, href }` to `nav` if it belongs in the header.
3. Create `src/pages/<slug>.astro` — copy `platform.astro` as the template.

The sitemap picks it up automatically.

## Voice

Guidelines p.06 — say less, precisely. Lead with what was measured. Avoid hype
language; let the specification speak. Sentence case throughout.

## Public-disclosure rule

Standing instruction for all Mithril Atomics public material: do **not** name a
specific sensing modality or instrument type as the thing the company has built.
Sensors are "quantum sensors"; what they read are "invisible fields". Modalities
may be named in the **plural**, as inputs the platform will integrate as they
mature. No methods, materials or performance figures are published.

Confirm current wording with the founder before publishing any technical copy.
