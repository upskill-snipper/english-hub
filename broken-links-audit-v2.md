# Broken Internal Links Audit v2 (Final Verification)

Run date: 2026-04-10T14:27:03.395Z

## Summary

- Total internal hrefs scanned: **3203**
- Unique href/location entries: **3203**
- Static routes discovered: **769**
- Dynamic route patterns discovered: **26**
- API route endpoints discovered: **105**
- **Broken internal links: 2**
- Files containing broken links: **2**
- Previous audit (v1) broken count: 43
- Improvement: **41** fewer broken links (95% reduction)

## Broken link categories

| Category | Count |
|---|---|
| `/resources/english-literature/caie` | 1 |
| `other` | 1 |

## Broken links by file

### `src/app/resources/english-literature/caie/page.tsx`

| Line | Href | Normalized | Reason |
|---|---|---|---|
| 154 | `/resources/english-literature/caie/war-of-the-worlds` | `/resources/english-literature/caie/war-of-the-worlds` | No matching static route or dynamic pattern |

### `src/components/school/SkillGapAnalysis.tsx`

| Line | Href | Normalized | Reason |
|---|---|---|---|
| 104 | `/flashcards?skill=${slug}` | `/flashcards` | No matching static route or dynamic pattern |

## Unique broken hrefs (deduplicated)

| Normalized href | Occurrences |
|---|---|
| `/flashcards` | 1 |
| `/resources/english-literature/caie/war-of-the-worlds` | 1 |

## Route discovery notes

- Walked `src/app` and registered every directory containing a `page.tsx`/`page.ts`/`page.jsx`/`page.js` file as a route.
- Route groups `(group)` were collapsed (do not appear in URL paths).
- Dynamic segments `[slug]`, `[id]`, catch-all `[...slug]`, and optional catch-all `[[...slug]]` were handled when matching hrefs.
- Template literal hrefs (e.g. `` `/revision/poetry/${slug}` ``) were normalized by replacing `${...}` with `*` and then matched against dynamic patterns.
- Asset paths (images, PDFs, fonts, etc.) and external links were excluded from the audit.
