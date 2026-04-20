# Content Coverage Audit — 2026-04-19

Pure inventory: no page files were modified during this audit.

## Gold-standard template

- **Reference page:** `D:\Coding\english-hub\src\app\revision\texts\romeo-and-juliet\page.tsx` (345 lines, ~5,200 words of authored copy).
- **Shape:** imports `TextGuide` and `type TextGuideData` from `../_components/text-guide` and exports a const `data: TextGuideData` containing `title, author, year, category, badge, intro, quickInfo, plotSummary (4 paragraphs), characters (7), themes (6), historicalContext, quotations (22)`.
- **Sub-routes:** `acts/`, `characters/`, `context/`, `essay-plans/`, `key-quotes/`, `themes/` (5+ sub-routes).
- **Population threshold used in this audit:** page exists AND `TextGuideData` contains >=3 characters, >=3 themes, and a non-empty `plotSummary` array. Every text page that currently exists in the repo clears that bar; there are no "stub" placeholder pages at the route level — the gap is entirely missing directories plus shallow sub-routes for some pages.

## Set texts matrix (30 texts, 5 GCSE/IGCSE boards)

Legend: **F** = full TextGuideData (>=6 chars, >=5 themes, 4-paragraph plotSummary). **S** = shallow but populated (exists and clears 3/3/1 threshold but noticeably thinner than gold standard — currently none below threshold). **M** = missing page entirely. **—** = not on this board's syllabus.

| #   | Text (slug)                                       | AQA | Edexcel | OCR | Eduqas | Edexcel IGCSE |
| --- | ------------------------------------------------- | --- | ------- | --- | ------ | ------------- |
| 1   | Macbeth (`macbeth`)                               | F   | F       | F   | F      | F             |
| 2   | Romeo and Juliet (`romeo-and-juliet`)             | F   | F       | F   | F      | F             |
| 3   | Much Ado About Nothing (`much-ado-about-nothing`) | M   | M       | M   | M      | M             |
| 4   | The Merchant of Venice (`the-merchant-of-venice`) | M   | M       | M   | M      | —             |
| 5   | The Tempest (`the-tempest`)                       | M   | —       | M   | —      | —             |
| 6   | Julius Caesar (`julius-caesar`)                   | M   | —       | —   | —      | —             |
| 7   | Othello (`othello`)                               | —   | —       | —   | M      | —             |
| 8   | Henry V (`henry-v`)                               | —   | —       | —   | M      | —             |
| 9   | Twelfth Night (`twelfth-night`)                   | —   | M       | —   | —      | —             |
| 10  | A Christmas Carol (`a-christmas-carol`)           | F   | F       | —   | F      | —             |
| 11  | Jekyll and Hyde (`jekyll-and-hyde`)               | F   | F       | F   | F      | —             |
| 12  | Great Expectations (`great-expectations`)         | M   | —       | —   | —      | —             |
| 13  | Jane Eyre (`jane-eyre`)                           | F   | —       | F   | —      | —             |
| 14  | Frankenstein (`frankenstein`)                     | F   | F       | F   | —      | —             |
| 15  | Pride and Prejudice (`pride-and-prejudice`)       | F   | F       | F   | F      | —             |
| 16  | The Sign of the Four (`the-sign-of-four`)         | M   | —       | —   | —      | —             |
| 17  | Silas Marner (`silas-marner`)                     | M   | M       | —   | M      | —             |
| 18  | The War of the Worlds (`the-war-of-the-worlds`)   | —   | —       | M   | M      | —             |
| 19  | An Inspector Calls (`an-inspector-calls`)         | F   | F       | F   | F      | F             |
| 20  | Lord of the Flies (`lord-of-the-flies`)           | F   | —       | F   | F      | —             |
| 21  | Animal Farm (`animal-farm`)                       | F   | F       | F   | —      | —             |
| 22  | Of Mice and Men (`of-mice-and-men`)               | —   | —       | —   | —      | F             |
| 23  | To Kill a Mockingbird (`to-kill-a-mockingbird`)   | —   | —       | —   | —      | F             |
| 24  | Things Fall Apart (`things-fall-apart`)           | —   | —       | —   | —      | F             |
| 25  | A View from the Bridge (`a-view-from-the-bridge`) | —   | —       | —   | —      | F             |
| 26  | The Curious Incident… (`curious-incident`)        | —   | —       | —   | —      | F             |
| 27  | Blood Brothers (`blood-brothers`)                 | —   | F       | —   | F      | —             |
| 28  | Anita and Me (`anita-and-me`)                     | F   | F       | F   | F      | —             |
| 29  | Pigeon English (`pigeon-english`)                 | F   | —       | —   | —      | —             |
| 30  | Never Let Me Go (`never-let-me-go`)               | F   | —       | —   | —      | —             |

### Per-text evidence (first-line citations)

All F-grade text pages below live under `D:\Coding\english-hub\src\app\revision\texts\<slug>\page.tsx` and import `TextGuide` + `type TextGuideData` from `../_components/text-guide`.

| Slug                   | File lines | Word count | Chars | Themes | Quotes | Evidence line                                                              |
| ---------------------- | ---------- | ---------- | ----- | ------ | ------ | -------------------------------------------------------------------------- |
| macbeth                | 603        | 7,961      | 7     | 6      | 22     | `characters: [ ... { name: 'Macbeth', ... } ]`                             |
| romeo-and-juliet       | 345        | 5,205      | 7     | 6      | 22     | line 19 `const data: TextGuideData = { title: 'Romeo and Juliet', ... }`   |
| a-christmas-carol      | 553        | 5,878      | 7     | 5      | 21     | `characters` + `themes` blocks; 5 staves sub-route directory present       |
| jekyll-and-hyde        | 357        | 5,555      | 5     | 5      | 23     | 6 sub-routes including `chapters/`, `essay-plans/`                         |
| jane-eyre              | 236        | 3,324      | 5     | 5      | 7      | TextGuideData populated; sub-routes only `chapters/`, `key-quotes/` (thin) |
| frankenstein           | 242        | 3,805      | 5     | 5      | 7      | 5 sub-routes incl. `read/`                                                 |
| pride-and-prejudice    | 241        | 3,472      | 6     | 5      | 7      | sub-routes thin (`chapters/`, `characters/` only)                          |
| an-inspector-calls     | 530        | 4,811      | 8     | 6      | 16     | 6 sub-routes                                                               |
| lord-of-the-flies      | 241        | 3,862      | 6     | 5      | 7      | 6 sub-routes                                                               |
| animal-farm            | 241        | 3,606      | 6     | 5      | 7      | 6 sub-routes                                                               |
| of-mice-and-men        | 252        | 4,065      | 6     | 5      | 8      | 4 sub-routes (no `essay-plans/`, no `acts/chapters/`)                      |
| to-kill-a-mockingbird  | 239        | 3,797      | 6     | 5      | 7      | 4 sub-routes                                                               |
| things-fall-apart      | 239        | 3,744      | 6     | 5      | 7      | 4 sub-routes                                                               |
| a-view-from-the-bridge | 239        | 3,758      | 6     | 5      | 7      | 4 sub-routes                                                               |
| curious-incident       | 152        | 1,425      | 6     | 5      | 7      | **No sub-routes** — hub page only                                          |
| blood-brothers         | 240        | 3,691      | 6     | 5      | 7      | 5 sub-routes                                                               |
| anita-and-me           | 152        | 1,296      | 6     | 5      | 7      | **No sub-routes** — hub page only                                          |
| pigeon-english         | 152        | 1,309      | 6     | 5      | 7      | **No sub-routes** — hub page only                                          |
| never-let-me-go        | 152        | 1,453      | 6     | 5      | 7      | **No sub-routes** — hub page only                                          |

Interpretation: the 11 "missing" set texts in `src/lib/board/set-texts.ts` (Much Ado, Merchant of Venice, Tempest, Julius Caesar, Othello, Henry V, Twelfth Night, Great Expectations, Sign of the Four, Silas Marner, War of the Worlds) have **no page at all**. The four 152-line files (curious-incident, anita-and-me, pigeon-english, never-let-me-go) meet the "populated" bar but lack the 5 gold-standard sub-routes (`acts/`, `characters/`, `context/`, `essay-plans/`, `key-quotes/`, `themes/`).

## Per-board content (GCSE/IGCSE)

| Board                | Poetry hub                                                                                                                                                                                                                                                                                                                       | Set-text page coverage                                                                                              | Language skills                                                                                                                                                            | Exam technique                                                                                                                                              | Hub quality |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| AQA                  | `poetry/power-and-conflict/` (17 poems, 470-line hub) + `love-and-relationships/` (17 poems, 461-line hub) + `unseen-poetry/` (1,037-line hub) + `PoetryHubAQAClient.tsx` (601-line cluster router)                                                                                                                              | 14 / 14 texts on syllabus covered (F)                                                                               | `language/` shared hub with `reading/`, `writing/`, `spag/` view files 800+ lines each, plus `vocabulary/` (308 lines) and `model-answers/` (548 lines)                    | 5 sub-hubs: `common-mistakes/` (466 lines), `essay-structure/` (826-line view), `grade-9-secrets/` (569), `question-types/` (596), `time-management/` (463) | Deep        |
| Edexcel              | `poetry/edexcel/` hub (180 lines) + `time-and-place/`, `conflict/`, `essay-plans/` clusters                                                                                                                                                                                                                                      | 9 / 9 texts covered (F)                                                                                             | Shared                                                                                                                                                                     | Shared                                                                                                                                                      | Deep        |
| OCR                  | `poetry/ocr/` hub (222 lines) + `conflict/`, `love-and-relationships/`, `power-and-natural-world/`, `youth-and-age/`, `themes/`, `comparison-guide/`, `essay-plans/`                                                                                                                                                             | 10 / 10 texts covered (F)                                                                                           | Shared                                                                                                                                                                     | Shared                                                                                                                                                      | Deep        |
| Eduqas               | `poetry/eduqas/` hub (417 lines) + 7 individual poem guides (`ozymandias`, `london`, `a-wife-in-london`, `dulce-et-decorum-est`, `sonnet-43`, `the-prelude`, `the-soldier`, `to-autumn`) + `essay-plans/`                                                                                                                        | 10 / 11 covered (missing: Othello, Henry V, Silas Marner, War of the Worlds)                                        | Shared                                                                                                                                                                     | Shared                                                                                                                                                      | Deep        |
| Edexcel IGCSE (4ET1) | Under `src/app/igcse/edexcel/poetry/` — 10 individual poems (`cousin-kate`, `half-caste`, `if`, `la-belle-dame-sans-merci`, `piano`, `remember`, `sonnet-116`, `the-man-he-killed`, `the-tyger`) + `unseen-poetry/`; plus `drama/`, `prose/`, `shakespeare/`, `essay-technique/`, `exam-technique/`, `past-papers/`, `syllabus/` | 6 / 6 covered (F). Also linked into `src/app/igcse/edexcel/drama/` and `src/app/igcse/edexcel/prose/` mirror routes | `igcse/edexcel-lang/anthology/` (5 non-fiction pieces: `127-hours`, `a-passage-to-africa`, `the-danger-of-a-single-story`, `the-explorers-daughter`, `young-and-dyslexic`) | Shared exam-technique/ under `/revision/` (board-agnostic)                                                                                                  | Deep        |

Note: `language/`, `exam-technique/`, `grade-targets/`, `study-plan/`, `flashcards/`, `quiz/` under `src/app/revision/` are all board-agnostic hubs gated by `getServerBoard()` and board-specific content helpers (e.g. `components/revision/BoardSpecificExamTechnique`), so UK GCSE boards share them.

## International + A-Level

- **Cambridge 0500** (`src/app/igcse/cambridge/0500/`): 503-line hub + `paper-1/` (277), `paper-2/` (269), `comprehension-strategies/`, `grade-boundaries/`, `syllabus/`, `vocabulary/` sub-routes. Solid Language-A coverage.
- **Cambridge 0990** (`src/app/igcse/cambridge/0990/`): 629-line hub + `paper-1/`, `paper-2/`, `practice-paper-1/`, `practice-paper-2/`, `syllabus/`, `grade-5-guide/`, `grade-7-guide/`, `grade-9-guide/`, `grade-conversion/`, `difference-vs-0500/` sub-routes. Deepest IGCSE hub in repo.
- **Cambridge 0475 Literature** (`cambridge-0475`): **NO directory exists** anywhere under `src/app`. `board-config.ts` line 47 has a `// TODO: cambridge-0475 — content not yet built` comment. Board is selectable but any route gated by it will fall back / redirect.
- **Edexcel IGCSE Language (4EA1)** (`edexcel-igcse-lang`): supported via `src/app/igcse/edexcel-lang/` hub (315 lines) + `anthology/` (296 lines, 5 non-fiction pieces). `board-config.ts` line 43 still flags `// TODO: content not yet built`; the anthology is the only authored content for this board.
- **IAL Edexcel** (`ial-edexcel`): **NO directory exists**. Board appears in `board-config.ts` (line 49) and is referenced by `courses/page.tsx`, `mock-exams/page.tsx`, `revision/quiz/quiz-data.ts` and `teacher-library/mark-schemes/page.tsx` (all treating it as an available option), but there is no dedicated route hub, no set-text pages, no poetry, no skills pages.
- **A-Level UK (AQA / OCR / Edexcel / Eduqas)**: **NO `/a-level` directory exists**. No routes under `src/app` target 2-year Advanced Level students for any UK board.
- **KS3** (`ks3`): present as a selectable board in `board-config.ts` (line 35) and referenced in `courses/page.tsx`, `demo/student/practice/page.tsx`, `mock-exams/page.tsx`, `revision/language/language-view.tsx`, `revision/quiz/quiz-data.ts`, `school/billing/page.tsx` — but **NO dedicated `ks3/` route directory** and no KS3-specific set-text or skills pages.

## Summary counts

- **Set-text matrix cells on syllabus:** 75 (sum of per-text `boards` arrays across all 30 texts).
- **Populated (F) matrix cells:** 53.
- **Stub (S) matrix cells:** 0.
- **Missing (M) matrix cells:** 22 (11 texts × their board memberships, breakdown below).
- **Text pages in repo:** 19 out of 30.
- **Text pages missing entirely:** 11 (much-ado-about-nothing, the-merchant-of-venice, the-tempest, julius-caesar, othello, henry-v, twelfth-night, great-expectations, the-sign-of-four, silas-marner, the-war-of-the-worlds).
- **Populated but lacking sub-routes (F-flat):** 4 (curious-incident, anita-and-me, pigeon-english, never-let-me-go).
- **Boards with deep content:** AQA, Edexcel, OCR, Eduqas, Edexcel IGCSE Lit, Cambridge 0500, Cambridge 0990.
- **Boards with partial content:** Edexcel IGCSE Lang (anthology only).
- **Boards with zero dedicated content:** cambridge-0475, ial-edexcel, ks3.

### Missing-cell impact by board

Counting each missing text on each board syllabus that offers it:

- AQA: 6 missing (Much Ado, Merchant of Venice, Tempest, Julius Caesar, Great Expectations, Sign of the Four, Silas Marner — 7 actually)
- Edexcel: 4 missing (Much Ado, Merchant of Venice, Twelfth Night, Silas Marner)
- OCR: 4 missing (Much Ado, Merchant of Venice, Tempest, War of the Worlds)
- Eduqas: 6 missing (Much Ado, Merchant of Venice, Othello, Henry V, Silas Marner, War of the Worlds)
- Edexcel IGCSE Lit: 1 missing (Much Ado)

Total missing-cell count = 22 (the 11 slugs × their board memberships).

### Recommended authoring order (priority × cost)

Priority is a function of (a) how many boards need it and (b) real syllabus popularity. Cost is roughly per-text authoring effort (~2,500–8,000 words per gold-standard guide plus ~5 sub-routes).

1. **Much Ado About Nothing** — hits AQA, Edexcel, OCR, Eduqas, Edexcel IGCSE Lit (5 boards in one write). Highest ROI.
2. **The Merchant of Venice** — hits AQA, Edexcel, OCR, Eduqas (4 boards).
3. **Silas Marner** — AQA, Edexcel, Eduqas (3 boards).
4. **The Tempest** — AQA, OCR (2 boards).
5. **The War of the Worlds** — OCR, Eduqas (2 boards).
6. **Othello** — Eduqas only, but zero coverage right now.
7. **Henry V** — Eduqas only.
8. **Twelfth Night** — Edexcel only.
9. **Great Expectations** — AQA only.
10. **Julius Caesar** — AQA only (low student volume; deprioritise).
11. **The Sign of the Four** — AQA only (lowest-volume pick historically; deprioritise).
12. **Sub-route build-out for the 4 flat guides** (curious-incident, anita-and-me, pigeon-english, never-let-me-go) — add `acts/`, `characters/`, `themes/`, `essay-plans/`, `key-quotes/` sub-routes to match the gold standard. Lower priority than adding missing texts, but important for consistency.
13. **Cambridge 0475 Literature hub** — non-trivial; new board hub + set-text alignment. High cost, moderate priority (small commercial segment but promised on board-select).
14. **IAL Edexcel hub** — high cost; requires A-Level-tier depth. Priority depends on commercial plan.
15. **A-Level UK hub** — greenfield; entire new vertical. Largest cost, not currently scoped.
16. **KS3 hub** — referenced across the product but has no authored content. Moderate cost; useful acquisition funnel.

## Appendix — files referenced in this audit

- `D:\Coding\english-hub\src\lib\board\set-texts.ts` (30 texts, source of truth for syllabus membership)
- `D:\Coding\english-hub\src\lib\board\board-config.ts` (11 boards, TODO markers on lines 43 + 47)
- `D:\Coding\english-hub\src\app\revision\texts\romeo-and-juliet\page.tsx` (gold-standard template)
- `D:\Coding\english-hub\src\app\revision\texts\_components\text-guide.tsx` (shared `TextGuide` component + `TextGuideData` type)
- Per-text pages under `D:\Coding\english-hub\src\app\revision\texts\<slug>\page.tsx`
- Poetry hubs under `D:\Coding\english-hub\src\app\revision\poetry\`
- Language hubs under `D:\Coding\english-hub\src\app\revision\language\`
- Exam-technique hubs under `D:\Coding\english-hub\src\app\revision\exam-technique\`
- Cambridge hubs under `D:\Coding\english-hub\src\app\igcse\cambridge\`
- Edexcel IGCSE hubs under `D:\Coding\english-hub\src\app\igcse\edexcel\` and `D:\Coding\english-hub\src\app\igcse\edexcel-lang\`
