# ITEM I6 — EAL `/eal/*/level/{a2,b1,b2,c1}` Level-Differentiation Diff Sweep

**Status:** READ-ONLY analysis. No source files modified.
**Date:** 2026-05-19
**Feeds:** REMEDIATION-LOG

## Scope

The H1 audit confirmed `/eal/articles/level/{b1,b2,c1}` and
`/eal/past-tenses/level/{b1,b2,c1}` serve content that is not
differentiated from their native band, and suspected the issue
spans all topics × 4 levels. This sweep establishes the real
content model and quantifies the gap.

## Root cause (architectural, not per-topic)

The non-differentiation is **structural in the rendering layer and
the data model** — it is not a per-topic data defect.

### Data model — `src/lib/eal/types.ts`

`EALTopic` (lines 119–142) carries exactly **one** of each content
field, with **no per-band variants**:

- `cefr: CEFRBand` (line 127) — a single scalar; the topic's one
  native band.
- `concept: LocalizedString` (line 133) — one body.
- `examples: EALExample[]` (line 135) — one list.
- `commonErrors: EALError[]` (line 137) — one list.
- `exercises: EALExercise[]` (line 139) — one list.

There is no `Record<CEFRBand, ...>`, no `byLevel`, no array keyed by
band anywhere in the type. The schema **cannot** express
level-differentiated content as written.

### Renderer — `src/app/eal/[slug]/level/[cefr]/page.tsx`

The page accepts `cefr` from the URL, derives `band` (lines 33–38),
then renders the **same** `topic.concept` (line 73),
`topic.examples.slice(0,6)` (line 77) and
`topic.commonErrors.slice(0,5)` (line 92) **regardless of `band`**.
`band` only influences: the H1 label / CEFR descriptor (lines
57–62), the practice link `mock-exam-${level}` (line 123), and an
honesty banner.

Lines 45–50 are explicit:

> `// Level-specific B1/B2/C1 material is still in development; non-native`
> `// bands currently present the topic's native treatment`

`inDevelopment = !showsNativeBand` (line 50) drives a visible
amber banner (lines 64–70) that openly states the page is showing
the native-band treatment, e.g. _"This is our B1-level treatment of
… Level-specific C1 material is in development."_ So the product
already discloses the gap to users; it is not silently misleading.

### Audit-premise correction

The audit stated `articles` and `past-tenses` both serve "duplicate
A2 content". Per `curriculum.ts`: `articles` is **A2** (line 25) but
`past-tenses` is **B1** (line 509). The duplication is real but the
shared body is each topic's _own native band_, not universally A2.

## Per-topic table

Native `cefr` from `src/lib/eal/curriculum.ts`. "Level-differentiated
content?" = does any non-native band render content authored for that
band? For every topic the answer is **No**, because the renderer and
schema share one body across all four level URLs.

| #   | Topic (`id`)             | Native CEFR | Has level-differentiated content? | Evidence                                                             |
| --- | ------------------------ | ----------- | --------------------------------- | -------------------------------------------------------------------- |
| 1   | `articles`               | A2          | No                                | `curriculum.ts:25` single `cefr`; `page.tsx:73,77,92` reuse one body |
| 2   | `word-order`             | A2          | No                                | `curriculum.ts:198`; `page.tsx:73,77,92`                             |
| 3   | `present-perfect`        | B1          | No                                | `curriculum.ts:354`; `page.tsx:73,77,92`                             |
| 4   | `past-tenses`            | B1          | No                                | `curriculum.ts:510`; `page.tsx:73,77,92`                             |
| 5   | `subject-verb-agreement` | A2          | No                                | `curriculum.ts:646`; `page.tsx:73,77,92`                             |
| 6   | `plurals-uncountable`    | A2          | No                                | `curriculum.ts:740`; `page.tsx:73,77,92`                             |
| 7   | `prepositions`           | B1          | No                                | `curriculum.ts:840`; `page.tsx:73,77,92`                             |
| 8   | `phrasal-verbs`          | B2          | No                                | `curriculum.ts:926`; `page.tsx:73,77,92`                             |
| 9   | `capitals-punctuation`   | A2          | No                                | `curriculum.ts:1013`; `page.tsx:73,77,92`                            |
| 10  | `common-arabic-errors`   | B1          | No                                | `curriculum.ts:1113`; `page.tsx:73,77,92`                            |

**Result: 0 of 10 topics have any level-differentiated content.**
The single field `EALTopic.concept` / `.examples` / `.commonErrors`
is reused verbatim across all 4 band URLs (`types.ts:133,135,137`).

## Non-differentiated (topic, level) pair count

Product bands: `A2, B1, B2, C1` (`cefr.ts:28`). Each topic has 4
level routes; the native band renders that topic's own (correct)
content, the other 3 are the same body relabelled.

- Total (topic, level) routes: 10 × 4 = **40**
- Native-band pairs (content matches the level it claims): **10**
- **Non-differentiated pairs: 30** — the 3 non-native bands per
  topic, each serving the native body with only a label change.

| Native band | Topics                                                                                      | Non-differentiated pairs (3 each) |
| ----------- | ------------------------------------------------------------------------------------------- | --------------------------------- |
| A2          | articles, word-order, subject-verb-agreement, plurals-uncountable, capitals-punctuation (5) | 15                                |
| B1          | present-perfect, past-tenses, prepositions, common-arabic-errors (4)                        | 12                                |
| B2          | phrasal-verbs (1)                                                                           | 3                                 |
| C1          | — (0)                                                                                       | 0                                 |
| **Total**   | **10**                                                                                      | **30**                            |

Note: **no topic is natively C1**, so every single `/eal/*/level/c1`
route (all 10) is non-differentiated — C1 is entirely unauthored.

## Prioritised remediation note

The fix is **content authoring + a schema/renderer change**, not a
per-page patch. Recommended order:

1. **Schema (prerequisite, blocks everything).** Extend `EALTopic`
   so `concept`/`examples`/`commonErrors`/`exercises` can vary by
   band (e.g. an optional `byBand?: Partial<Record<CEFRBand, …>>`
   overlay falling back to the native body). Until this lands, no
   amount of authoring can surface differentiated content.

2. **C1 first — highest exposure.** 10/10 C1 routes are unauthored
   and 0 topics are natively C1, so C1 is the weakest band across
   the whole product. Author C1 treatments for the topics most
   likely to be hit by advanced learners: `phrasal-verbs`,
   `present-perfect`, `past-tenses`, `prepositions`,
   `common-arabic-errors`.

3. **A2-native topics' upper bands (15 pairs, largest bucket).**
   `articles`, `word-order`, `subject-verb-agreement`,
   `plurals-uncountable`, `capitals-punctuation` need genuine
   B1/B2/C1 treatments. `articles` is flagged in `curriculum.ts:28`
   as "the single biggest grammar gap for Arabic speakers" → author
   its B1/B2/C1 first within this bucket.

4. **B1-native topics' B2/C1 + B2-native's A2/C1.** Remaining 15
   pairs: lower priority since the native band already gives a
   credible mid-level treatment and the in-development banner is
   shown honestly.

5. **Interim mitigation (no code edit here — for REMEDIATION-LOG).**
   The honesty banner (`page.tsx:64–70`) already prevents the page
   from _falsely claiming_ differentiation, so this is a
   completeness/SEO gap, not a correctness/trust regression. Until
   authoring lands, consider down-ranking non-native level URLs in
   the sitemap / adding `noindex` to avoid thin-content duplication
   penalties across 30 near-identical pages.
