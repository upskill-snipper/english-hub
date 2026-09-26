# Content, curriculum and the learning surfaces

This is what the product actually sells: roughly 34 MB of exam-board-aligned English teaching material and the ~1,043 page routes that render it. There is no CMS and no database behind any of it - every lesson, quote bank, mark scheme and model answer is either a TypeScript module under [`src/data`](../../src/data), an MDX file under [`content/`](../../content), or prose typed directly into a `page.tsx`. Understanding which of the three a given piece of content lives in is the first thing you need, because the three have entirely different authoring, review and shipping paths, and only one of them has any automated quality gate.

## Where content lives

| Store                       | Size                                                | Authoring                                   | Rendered by                 | Gate                                  |
| --------------------------- | --------------------------------------------------- | ------------------------------------------- | --------------------------- | ------------------------------------- |
| `src/data/**/*.ts`          | 34.6 MB, 397 modules                                | Hand-written or agent-written TS, committed | Loaders plus client islands | None. 221 of 397 carry `@ts-nocheck`  |
| `content/**/*.mdx`          | 122 files (82 blog, 20 printables, 20 lesson plans) | Frontmatter plus Markdown                   | `next-mdx-remote/rsc`       | `check-mdx-compile.mjs` in `prebuild` |
| `src/app/**/page.tsx` prose | unmeasured, large                                   | Typed straight into the route               | React                       | Only `check-placeholders.mjs`         |

The third store is easy to miss and it is the biggest single surface for the set texts. `/revision/texts/macbeth` and its eleven sub-routes are 10,188 lines of hand-written TSX with the quotations, analysis and essay plans as inline constants. No data file feeds them.

## src/data: the corpus and its loader pattern

### What is in it

The top level is a flat pile of large board and text modules (`gcse-courses.ts` 384 KB, `edexcel-igcse-lit-drama-courses.ts` 348 KB, `mock-exams-ocr.ts` 336 KB) plus ten subdirectories:

| Directory          | Size             | Holds                                                             |
| ------------------ | ---------------- | ----------------------------------------------------------------- |
| `lesson-plans/`    | 8.4 MB, 75 files | Teacher lesson plans, the `LessonPlan` type from `@/types`        |
| `curriculum/`      | 7.6 MB, 78 files | Year-group schemes of work, workbooks, homework banks, CPD packs  |
| `mock-exams/`      | 3.1 MB, 36 files | 24 chunked paper banks plus generated index and generator scripts |
| `flashcards/`      | 724 KB           | 45 decks, 2,093 cards, index plus per-deck loaders                |
| `practice/`        | 652 KB           | Per-board practice question banks                                 |
| `demo/`            | 500 KB           | The fabricated school used by `/demo/*`                           |
| `exam-guides/`     | 357 KB           | Per-board examiner guidance                                       |
| `ilowersecondary/` | 320 KB           | Pearson iLowerSecondary papers and quiz banks                     |
| `teaching-guides/` | 296 KB           | Long-form teacher CPD prose                                       |
| `model-essays/`    | 196 KB           | Grade 9 exemplars, five texts                                     |

### The index-plus-lazy-loader pattern, and why it is everywhere

Six subsystems independently converged on the same two-tier shape, each after the same production defect: a `'use client'` route statically imported an aggregator barrel and shipped the whole corpus in its First Load JS. The fix in each case was a generated metadata index for listing UI plus a `Record<key, () => import(...)>` map for content.

| Subsystem    | Index (listings)                                                                                                            | Lazy loader (content)                                                                               | What the barrel cost |
| ------------ | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | -------------------- |
| Courses      | [`src/data/course-index.ts`](../../src/data/course-index.ts) `COURSE_INDEX`, 87 entries, ~107 KB                            | [`src/data/course-loader.ts:22`](../../src/data/course-loader.ts) `BOARD_LOADERS`, 27 board modules | 7.2 MB               |
| Mock exams   | [`src/data/mock-exams/paper-index.ts`](../../src/data/mock-exams/paper-index.ts) from generated `index-data.ts`, 178 papers | [`src/data/mock-exam-loader.ts`](../../src/data/mock-exam-loader.ts)                                | 2.8 MB               |
| Practice     | none (board-sliced)                                                                                                         | [`src/data/practice/load.ts:20`](../../src/data/practice/load.ts)                                   | 636 KB               |
| Flashcards   | [`src/data/flashcards/deck-index.ts`](../../src/data/flashcards/deck-index.ts), 45 decks                                    | [`src/data/flashcards/deck-loaders.ts`](../../src/data/flashcards/deck-loaders.ts)                  | 1.2 MB               |
| Exam guides  | `exam-guides/index.ts` (eager barrel, server only)                                                                          | [`src/data/exam-guides/load-guide.ts`](../../src/data/exam-guides/load-guide.ts)                    | 349 KB               |
| Lesson plans | [`src/data/lesson-plans/metadata.ts`](../../src/data/lesson-plans/metadata.ts) server projection                            | none, barrel only                                                                                   | 8.4 MB               |

The rule these encode: **never import an aggregator barrel from a client component, and never dynamic-import one either.** A dynamic import of a module that statically imports 24 chunks still fetches all 24. `mock-exam-loader.ts` carries this lesson in its header because an earlier version made exactly that mistake and the "lazy" chunk was the entire bank.

`course-index.ts` and `mock-exams/index-data.ts` are **generated** and committed. The course index has no committed generator script - the regeneration recipe lives only in its own header comment (bundle `./courses` with esbuild, map every course through `toIndexEntry()`). Mock exams do have one: [`src/data/mock-exams/_build-index.mjs`](../../src/data/mock-exams/_build-index.mjs), with a verifier alongside it. Drift in the course index is caught at runtime by `verifyCourseIndex()` ([`course-loader.ts:265`](../../src/data/course-loader.ts)), called from [`src/app/courses/page.tsx:62`](../../src/app/courses/page.tsx) behind a `NODE_ENV !== 'production'` guard, so a stale index is loud in development and silent in production.

### Board resolution has a fallback that used to be the primary

`loadCourseById()` needs to know which board module holds a course. It asks the generated `COURSE_BOARD_KEYS` map first and only falls back to `getBoardForCourseByPrefix()` ([`course-loader.ts:63`](../../src/data/course-loader.ts)). That prefix heuristic is order-sensitive and, on its own, mis-routed 13 of the 87 courses - and a mis-route returns `undefined` rather than throwing, so the course player 404s with no error anywhere. Leave the generated map as the primary. If you add a course, regenerate the index rather than adding a prefix rule.

### 126 modules, 10.8 MB, that nothing imports

Resolving every static and dynamic import specifier in `src/` and `scripts/` against the 397 `.ts` files in `src/data` leaves 126 modules - 10.8 MB, 31% of the directory - with no importer at all. This includes:

- The whole of `src/data/curriculum/` bar a handful of `y*-modules.ts` files. 54 of its 78 modules are unreachable.
- `src/data/macbeth-course.ts` (34 KB, `id: 'macbeth-full'`). Not in `courses.ts`, not in `COURSE_INDEX`, not imported anywhere. It looks exactly like a live course and is not one.
- Every legacy top-level `mock-exams-*-lang-*.ts` file and `mock-exams-{aqa,ocr,wjec-lit,igcse-lang,ks3}.ts`, superseded by the chunked `mock-exams/` tree. `mock-exams-aqa.ts` alone is 296 KB.
- 13 of the 75 `lesson-plans/` modules, including `macbeth-pptx-lessons.ts` and all four `*-language-plans.ts`.

The one false-positive class in that scan is `src/data/model-essays/*` - those five are reached through the only template-literal dynamic import in the codebase, `import(\`@/data/model-essays/${key}\`)` at [`src/app/revision/model-essays/page.tsx:96`](../../src/app/revision/model-essays/page.tsx). They are live. Everything else on the list is dead as far as any import graph can tell. I have not checked whether any of it is referenced by tooling outside `src/`and`scripts/`.

Even the modules that are live are barely so. The 8.4 MB `lesson-plans/` tree has exactly one consumer: [`src/app/school/lessons/page.tsx:84`](../../src/app/school/lessons/page.tsx), which calls `recommendLessonsMetadata(areas, 'AQA', 6)` to pick six cards on a robots-disallowed, auth-gated page. The re-export barrel [`src/lib/lesson-plans/index.ts`](../../src/lib/lesson-plans/index.ts) that exists to make that corpus convenient to import has no consumers of its own.

### @ts-nocheck

221 of the 397 data modules open with `// @ts-nocheck`. Type errors in content modules are therefore invisible to `tsc --noEmit` in CI. A course whose `moduleList` entry is missing `quiz`, or whose `correct` index points past the end of `options`, will compile and ship. Treat the `CourseData` / `CourseModule` / `CourseQuiz` interfaces in [`src/data/courses.ts`](../../src/data/courses.ts) (lines 1-35) as documentation of intent, not as an enforced contract.

### Nothing generates this corpus

There is no generator for the course, lesson-plan, curriculum, practice or mock-exam content. It was authored - largely by agents, judging by the uniform comment style and the `@ts-nocheck` headers - and committed. The only automated content generation in the repo is the blog pipeline below. If you need more of any of this, you write it.

## The MDX tree

[`src/lib/mdx.ts`](../../src/lib/mdx.ts) is the shared reader: `resolveContentDir` joins under `process.cwd()/content`, `listMdxSlugs` lists, `readMdxFile` parses with `gray-matter`. It is server-only (`node:fs`).

The single most important line in it is `LOCALE_VARIANT_SUFFIX` at [`src/lib/mdx.ts:57`](../../src/lib/mdx.ts). Locale siblings (`<slug>.ar.mdx`) must not be listed as slugs. When they were, the site published 40 phantom `/blog/<slug>.ar` URLs serving an Arabic body inside English chrome, doubled every card on the blog index, and put the phantom URLs in the sitemap. The middleware now permanently redirects any surviving `.ar` URL to `/ar/blog/<slug>` ([`src/middleware.ts:497-503`](../../src/middleware.ts)), with an explicit 308.

### Blog

42 English posts and 40 Arabic siblings in [`content/blog`](../../content/blog). [`src/lib/blog/posts.ts`](../../src/lib/blog/posts.ts) validates frontmatter and **throws** on a missing `title`/`description`/`date` or an `educationalLevel` outside `KS3 | GCSE | IGCSE | A-Level`. `getBlogPost(slug, 'ar')` serves the `.ar` sibling when present and silently falls back to English when not.

[`src/app/blog/[slug]/page.tsx`](../../src/app/blog/[slug]/page.tsx) compiles with `compileMDX` per request. Read its header comment before changing anything there - it is the most honest rendering-model note in the repo. Two consequences it documents:

- The route is **dynamically rendered by design**, because i18n flows cookie or URL to middleware to an `x-lang` header, and both the page and the root layout read `headers()`. `dynamicParams = false` is therefore meaningless here; unknown slugs are checked against the catalogue and `notFound()` is called explicitly. Even then, Next 15.2 streams the shell with a committed 200 before metadata can change the status, so the page ships an explicit `robots: noindex` for unknown slugs instead.
- A post that fails MDX compilation throws per request and collapses to an empty shell **without failing the build**. Nineteen posts shipped broken this way until August 2026, because HTML `<!-- -->` comments are invalid MDX. [`scripts/check-mdx-compile.mjs`](../../scripts/check-mdx-compile.mjs) now runs in `prebuild` and compiles every file under `content/` with the same `@mdx-js/mdx` core the app uses.

### The blog pipeline, and the gate that does not run

[`content/blog/PIPELINE.md`](../../content/blog/PIPELINE.md) describes the loop: Vercel Cron hits `GET /api/cron/blog-generate` every 12 hours, the route takes the first `status: "pending"` topic from [`content/blog/_queue.json`](../../content/blog/_queue.json), calls Claude with a house-style prompt, runs the quality checks in-process, and on a pass opens a GitHub pull request on branch `blog/auto/<slug>`. Nothing publishes without a human merge. That part is accurate.

What is not accurate: both `PIPELINE.md` and the header of [`scripts/check-blog-quality.mjs`](../../scripts/check-blog-quality.mjs) state that the gate "runs in `prebuild`". It does not. The `prebuild` chain in [`package.json`](../../package.json) is `check-mdx-compile` followed by the five generators, and [`.github/workflows/ci.yml`](../../.github/workflows/ci.yml) runs only `check-placeholders.mjs`, the EAL duplicate check (report-only), `next lint` and `tsc`. `check-blog-quality.mjs` is reachable only as `npm run blog:quality-check`, by hand. A hand-written post that is 400 words, has no internal links, or near-duplicates an existing post will merge and deploy with nothing complaining.

The same applies to [`scripts/check-copy-quality.mjs`](../../scripts/check-copy-quality.mjs), whose header also claims `prebuild`. It is in neither `prebuild` nor CI. That is why 111 of the 122 MDX files contain em dashes despite the house style banning them.

`check-placeholders.mjs` is the one content gate that genuinely runs, in the husky `pre-commit` hook and in CI. It fails on `[DSL_`, `[FACT-CHECK`, `[PLACEHOLDER`, `[VERIFY` and `[Address -` tokens reaching `src/app`, `content`, `src/lib/i18n`, `src/components` or `public`.

### Printables and teaching lesson plans

20 files each, under [`content/printables`](../../content/printables) and [`content/lesson-plans`](../../content/lesson-plans). [`src/lib/printables/list.ts`](../../src/lib/printables/list.ts) validates frontmatter against closed sets and throws on an unknown value rather than defaulting. **All 40 carry `status: coming-soon`.** No printable has a `pdfUrl`; the slug page renders the MDX body and a "coming soon" badge ([`src/app/resources/teaching/printables/[slug]/page.tsx:81`](../../src/app/resources/teaching/printables/[slug]/page.tsx)). These are lead-magnet stubs, and all 40 are in the sitemap. Printables use `compileMDX`; lesson plans use `MDXRemote` directly ([`src/app/resources/teaching/lesson-plans/[slug]/page.tsx:171`](../../src/app/resources/teaching/lesson-plans/[slug]/page.tsx)). There is no reason for the difference beyond who wrote which.

Note the name collision: `LessonPlan` from [`src/lib/lesson-plans/list.ts`](../../src/lib/lesson-plans/list.ts) (MDX-driven, 20 files) is a different type from `LessonPlan` re-exported by [`src/lib/lesson-plans/index.ts`](../../src/lib/lesson-plans/index.ts) (the `@/types` interactive one, backing the 8.4 MB data tree). The list module says so in its own header. Import from the specific path, never from the directory.

## A text end to end: Macbeth

Macbeth exists in five unconnected places. There is no single source of truth for a set text, and this is the shape you should expect for every text.

1. **Registry.** `SET_TEXTS` in [`src/lib/board/set-texts.ts`](../../src/lib/board/set-texts.ts) holds 73 entries; Macbeth is the first, tagged `category: 'shakespeare'`, `boards: ['aqa','edexcel','ocr','eduqas','edexcel-igcse']`, `copyrightStatus: 'public-domain'`. This registry drives the sitemap, `generateStaticParams` for the `[slug]` route, and board gating.
2. **Study hub, hand-coded.** [`src/app/revision/texts/macbeth/page.tsx`](../../src/app/revision/texts/macbeth/page.tsx) is 981 lines with `TOP_FIVE_QUOTES`, `COMPARISON_CARDS` and a `TextGuideData` object as inline constants, composed with `TextGuide`, `TextStudyHub` and `InlineStudyEngine`. Eleven sub-routes (`act-1`, `act-2`, `act-3`, `acts`, `characters`, `context`, `essay-plans`, `extract-walkthrough`, `key-quotes`, `read`, `themes`) add another 9,200 lines. `read` was 2,507 lines until 26 September 2026: twelve of the 28 scenes, in eleven sections, typed in the Folger Shakespeare Library's wording, which Folger licenses for non-commercial use only; it now imports the whole play from the held edition, [`src/data/full-texts/macbeth.ts`](../../src/data/full-texts/macbeth.ts) (Project Gutenberg #1533), and keeps its notes and panels in `read/notes.ts`.
3. **Generic fallback.** [`src/app/revision/texts/[slug]/page.tsx`](../../src/app/revision/texts/[slug]/page.tsx) serves any `SET_TEXTS` slug with no dedicated directory - 18 of the 73. It applies a **strict** board guard at line 165: if the cookie board does not study the text, it redirects to `/revision/texts` rather than rendering. Which sub-page tiles it offers is filtered against `TEXT_SUBPAGE_ROUTES`, generated by [`scripts/generate-text-subpage-map.mjs`](../../scripts/generate-text-subpage-map.mjs) in `prebuild`, because `TextStudyHub` is a client component and cannot check the filesystem.
4. **Analysis pages.** 25 Macbeth entries in `ANALYSIS_PAGES` ([`src/data/analysis/index.ts:26`](../../src/data/analysis/index.ts)), served by the catch-all [`src/app/analysis/[...slug]/page.tsx`](../../src/app/analysis/[...slug]/page.tsx). The registry carries only slug, title, description and category; the page body is assembled at render time from `CATEGORY_CONTEXT.macbeth` ([`src/data/analysis/category-context.ts:50`](../../src/data/analysis/category-context.ts)), which supplies the about-prose, AO weightings, key quotes, exam tips and FAQs shared by all 25. The hub at `/analysis/macbeth` hard-codes its own list of 15 quote slugs and 10 theme slugs rather than calling `getPagesByCategory('macbeth')`, so the two can drift.
5. **Dead course.** [`src/data/macbeth-course.ts`](../../src/data/macbeth-course.ts), described above. Nothing reaches it.

Two traps in the analysis layer:

- `ANALYSIS_PAGES` is generated by [`scripts/generate-analysis-data.js`](../../scripts/generate-analysis-data.js), which scrapes `title:` and `description:` out of `page.tsx` files in **`../../english-hub-analysis-backup/analysis`** - a sibling directory outside the repo. It exists on this machine. It is not in version control, so a fresh clone cannot regenerate the registry.
- That scraper did not decode JSON escapes. Twenty-one descriptions in the generated file contain a literal backslash-u-2019 sequence, for example `Waterhouse’s` at [`src/data/analysis/index.ts:39`](../../src/data/analysis/index.ts). Those strings go straight into `<meta name="description">` and the Article JSON-LD. Fix them in place; regenerating will reintroduce them.

The catch-all is `force-static` with `revalidate = 86400` and `dynamicParams = true`, so pages are generated on first request and cached for a day. Because it cannot receive a per-request CSP nonce, its three JSON-LD scripts are hashed instead. [`src/lib/seo/json-ld-hashes.ts`](../../src/lib/seo/json-ld-hashes.ts) owns the payload builders so the hashed bytes and the rendered bytes cannot diverge. If you change what that page emits as JSON-LD, change it there, or the scripts get blocked by CSP in Chrome, Edge and Firefox.

`cleanTitle()` at line 66 strips a baked `" | The English Hub"` suffix from about 88 of the registry titles for the document title, because the root layout's title template appends the brand again. OpenGraph and Twitter keep the branded form, since those fields are not templated.

There are 192 analysis pages across 8 categories: 25 each for `macbeth`, `language-paper`, `inspector-calls`, `christmas-carol`, `aqa-power-conflict` and `aqa-love-relationships`, 23 for `revision`, 19 for `jekyll-hyde`. All 8 have a `CATEGORY_CONTEXT` block.

## The learning surfaces, and which store feeds each

`src/data` is not the only content home. Four whole curricula live under `src/lib` instead, because they carry behaviour (level banding, CEFR scoring, readiness stores) as well as prose:

| Curriculum      | Module                                                                                              | Size              | Feeds                                           |
| --------------- | --------------------------------------------------------------------------------------------------- | ----------------- | ----------------------------------------------- |
| KS3             | [`src/lib/ks3`](../../src/lib/ks3) `curriculum.ts`, `year-7/8/9.ts`, `rubrics.ts`                   | 540 KB            | `/ks3`, `/ks3/year-N` and term/week drill-downs |
| IELTS           | [`src/lib/ielts`](../../src/lib/ielts) `curriculum.ts`, `lessons/`, `band-descriptors.ts`           | 324 KB            | `/ielts/learn/<skill>/<slug>`                   |
| EAL             | [`src/lib/eal`](../../src/lib/eal) `curriculum.ts`, `cefr.ts`, `diagnostic-bank.ts`                 | 156 KB            | `/eal/<topic>` and its four skill pages         |
| iLowerSecondary | [`src/lib/ilowersecondary/spec.ts`](../../src/lib/ilowersecondary) plus `src/data/ilowersecondary/` | 24 KB plus 320 KB | `/ks3/ilowersecondary/*`                        |

The revision tree under [`src/app/revision`](../../src/app/revision) is the largest student-facing surface and is almost entirely hand-coded TSX:

| Sub-tree                     | What feeds it                                                                                                                              |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `texts/`                     | 55 dedicated directories plus the `[slug]` fallback over `SET_TEXTS`                                                                       |
| `poetry/`                    | Per-cluster hand-coded hubs: AQA power-and-conflict, love-and-relationships, worlds-and-lives, Eduqas, OCR, Edexcel, Pearson IGCSE, unseen |
| `exam-technique/`            | Hand-coded views plus `BoardSpecificExamTechnique` reading the board cookie                                                                |
| `grade-targets/grade-1..9`   | Nine hand-coded pages with a `_shared` module                                                                                              |
| `flashcards/`, `quiz/`       | `flashcards/deck-index.ts` plus `deck-loaders.ts`; quiz engine writes `english-hub-quiz-history`                                           |
| `model-essays/[text]/[slug]` | The five `src/data/model-essays/*` modules, via template-literal dynamic import                                                            |
| `analytics/`, `study-plan/`  | Noindex personal surfaces, excluded from the sitemap                                                                                       |

Note the two different board gates and the reason they differ. Set-text pages use a **strict** gate: `[slug]/page.tsx` calls `getServerBoard()` and `textAvailableForBoard()` and redirects to `/revision/texts` when the cookie board does not study the text. A harder variant, `requireBoard(allowed, fallback)` in [`src/lib/board/board-guard.ts`](../../src/lib/board/board-guard.ts), gates `/mock-exams/[id]` and the Inspector Calls marking sample to `['aqa']` only. Analysis pages use a **soft** gate: `AnalysisBoardGate` (one small wrapper per category, for example [`src/app/analysis/macbeth/_components/AnalysisBoardGate.tsx`](../../src/app/analysis/macbeth/_components/AnalysisBoardGate.tsx)) renders `<WrongBoardBanner>` above the article and then renders the article in full. The banner is a client component that only appears after hydration, so crawlers and first-time visitors with no board always see the whole page. That is deliberate: the analysis tree is the organic-search surface and must never be gated away from a crawler. Do not "tidy" it into the strict pattern.

## Exam boards and board selection

### The live mechanism

A board is one of 15 ids in `ExamBoard` ([`src/lib/board/board-config.ts:5`](../../src/lib/board/board-config.ts)), with metadata in the `BOARDS` array at line 43. `board-config.ts` deliberately has no `'use client'`, so both server and client can import it.

**The cookie `english-hub-board` is authoritative.** The chain:

| Step                                                                                | Where                                                                                                |
| ----------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| A surface links to `...?setBoard=<id>`                                              | Homepage cards, `/exam-boards`, `BoardSwitcher`, `BoardSelectorSection`                              |
| Middleware validates against `BOARDS`, sets the cookie, strips the param, redirects | [`src/middleware.ts:437`](../../src/middleware.ts)                                                   |
| `?resetBoard=1` expires the cookie the same way                                     | [`src/middleware.ts:470`](../../src/middleware.ts)                                                   |
| Server components read it                                                           | `getServerBoard()` in [`src/lib/board/get-server-board.ts`](../../src/lib/board/get-server-board.ts) |
| Client reads it via a zustand store, `localStorage`-persisted for fast first paint  | [`src/lib/board/board-store.ts`](../../src/lib/board/board-store.ts)                                 |

The `onRehydrateStorage` bridge at [`board-store.ts:79`](../../src/lib/board/board-store.ts) is load-bearing: the cookie always wins over cached `localStorage`, and a missing cookie is repaired from the store. The previous `if (!state.board)` version meant that once a user had any board in `localStorage`, every later cookie change was ignored - the header chip stayed on the old board and clicking "AQA" still rendered IGCSE content. Reported in the wild on ship day, 2 May 2026. All three cookie writers (store, middleware `setBoard`, middleware `resetBoard`) must agree on `path=/`, one-year max-age and `SameSite=Lax`, or the server reader sees a different cookie scope from the client store.

An earlier `BOARD_LANDING_REDIRECTS` map that silently set the cookie on first visit to `/igcse/edexcel` and similar landing paths was removed. It rewrote deep links to `/revision`, and six of the seven homepage cards bypassed it anyway. Cross-board mismatch is now handled per page by `<BoardMismatchBanner>`, not by redirecting.

### Where board filtering applies

[`src/lib/board/gated-paths.ts`](../../src/lib/board/gated-paths.ts) is the single source of truth, shared by the middleware and `BoardGate`. It is a **deny-list** of 12 board-specific prefixes (`/revision`, `/practice`, `/mock-exams`, `/games`, `/assessment`, `/courses`, `/igcse`, `/a-level`, `/learn`, `/marking`, `/toolkit`, `/dashboard`). It used to be an allow-list of routes where the picker must _not_ appear, which meant any route the author forgot was gated by default - that is how `/blog`, the main organic entry point, and `/ielts`, where the question has no correct answer, both ended up behind a full-screen modal with no close button. Inverting it makes a forgotten route fail open. Keep it that way, and keep the modal a nudge: Escape, the backdrop and an explicit dismiss all work on every path.

Two distinct filters with confusingly similar paths, both live:

- [`src/lib/board/board-filter.ts`](../../src/lib/board/board-filter.ts) - type predicates (`isGcseBoard`, `isIgcseBoard`) and hub-URL helpers.
- [`src/lib/board-filter.ts`](../../src/lib/board-filter.ts) - maps a board id to the **legacy display-name strings** content data is tagged with (`'AQA'`, `'WJEC'`, `'CAIE'`). Content was tagged with display names before the id scheme existed, and this is the bridge. `practice/load.ts` mirrors part of that mapping and says so, because the canonical copy is module-private.

A third mapping, [`src/lib/board/prisma-board-map.ts`](../../src/lib/board/prisma-board-map.ts), converts between the app ids and the seven-value Prisma `ExamBoard` enum. KS3, Cambridge 0475, IAL and all four A-Level ids have no Prisma counterpart, so `APP_TO_PRISMA` is `Partial`.

### ExamBoardContext is dead

[`src/contexts/ExamBoardContext.tsx`](../../src/contexts/ExamBoardContext.tsx) is a complete parallel board system - uppercase ids (`'AQA' | 'EDEXCEL' | 'CAMBRIDGE' | 'CAIE' | 'OCR'`), a `teh_selected_exam_board` localStorage key, a `LANGUAGE | LITERATURE` subject toggle, a profile fetch from `/api/user/profile`, and its own `<BoardSelector>` UI. **Nothing imports it.** `ExamBoardProvider` is mounted nowhere and `useExamBoard` is called nowhere. It is convincing dead code and it contradicts the live model on every axis: different id casing, different storage, different valid set. Do not extend it, and do not let its `ExamBoard` type be mistaken for the one in `board-config.ts`.

## Games and practice surfaces

37 game directories under [`src/app/games`](../../src/app/games), all 37 built on [`src/components/games/GameShell.tsx`](../../src/components/games/GameShell.tsx) - there is no dynamic `[game]` route, each is its own page with its own `layout.tsx`. The hub at [`src/app/games/page.tsx`](../../src/app/games/page.tsx) is a further 2,437 lines that includes its own inline games (word scramble and others) alongside the cards.

Scores go two places. `saveGameScore()` writes `eh_game_<gameId>` in localStorage ([`src/lib/game-scores.ts:35`](../../src/lib/game-scores.ts)) and drives the learning profile; `GameShell` then fires a best-effort `POST /api/progress/games` with `keepalive` and swallows every error ([`GameShell.tsx:289`](../../src/components/games/GameShell.tsx)). Guests receive 401 by design. See the next section for why the signed-in path does not work either.

`/practice` is board-sliced through `practice/load.ts`. A KS3 student maps to no slice at all, deliberately: no question in the bank is tagged KS3, so the previous behaviour was to filter the whole bank down to an empty state. `/mock-exams` lists from `MOCK_EXAM_INDEX` (178 papers) and loads one chunk when a paper is opened.

`/toolkit` is a trap. Its root redirects to `/revision` via `RETIRED_PAGE_REDIRECTS` ([`src/middleware.ts:484-486`](../../src/middleware.ts)) - and it emits a **307**, not a 308, because the call passes no status argument and `NextResponse.redirect` defaults to 307. The two deliberately permanent redirects in the same file pass 308 explicitly (www to apex at line 405, the phantom `.ar` blog URLs at line 502), so this is an oversight rather than a decision: a 307 is temporary, so Google keeps the retired `/toolkit` URL indexed and passes no link equity to `/revision`. Its six sub-routes (`critic`, `my-materials`, `personalised-revision`, `progress`, `revision-builder`, `test-builder`) still render and are reachable by direct link. The sitemap generator excludes the whole prefix.

Course module bodies are HTML strings. The player sanitises with DOMPurify before `dangerouslySetInnerHTML` ([`src/app/learn/[courseId]/[moduleId]/client-page.tsx:561`](../../src/app/learn/[courseId]/[moduleId]/client-page.tsx)). Keep that. Note the server half of that route statically imports `allCourses` - the full 7.2 MB - purely for `generateMetadata`.

## Progress tracking is silently dead

Four tables - `progress_poems`, `progress_games`, `progress_quizzes`, `progress_reading_age` - are declared in [`supabase/migrations/20260512_progress_tables.sql`](../../supabase/migrations/20260512_progress_tables.sql). That filename sorts before the `BASELINE_CUTOFF` of `20260530` in [`scripts/apply-migrations.mjs:42`](../../scripts/apply-migrations.mjs), so it was **recorded as applied without being executed**. The tables do not exist. Verify against `information_schema` before trusting anything here; [`scripts/check-schema-drift.mjs`](../../scripts/check-schema-drift.mjs) reports the current picture, and its header documents the identical failure that hid `profiles.is_minor` for four months.

What this means in practice:

- `POST /api/progress/sync` ([`src/app/api/progress/sync/route.ts`](../../src/app/api/progress/sync/route.ts)) and the four per-domain routes under `/api/progress/*` write to tables that are not there. Every call errors.
- `GameShell` swallows that error by design, so a student sees a normal results screen and nothing is stored beyond their own browser.
- [`src/lib/analytics/aggregate-progress.ts`](../../src/lib/analytics/aggregate-progress.ts) powers the public leaderboards endpoint from the same absent tables.

Three further problems sit on top, each of which would still need fixing after the migration is applied for real:

1. **Column mismatch.** [`aggregate-progress.ts:137`](../../src/lib/analytics/aggregate-progress.ts) selects `poem_id` from `progress_poems`. The migration declares `poem_slug`, and `/api/progress/poems` uses `poem_slug` throughout. One of the two is wrong.
2. **A fifth table that was never migrated at all.** [`src/lib/progress/sync.ts`](../../src/lib/progress/sync.ts) reads and writes `student_progress`, which exists only in [`supabase/migrations-pending/004_progress_tables.sql`](../../supabase/migrations-pending/004_progress_tables.sql) - a directory the migration runner does not read. `GET /api/progress` queries it too.
3. **Four incompatible localStorage schemes for the same four domains.** The migration comments describe `eh:poems:*`; [`sync.ts:41`](../../src/lib/progress/sync.ts) reads `english-hub-studied-poems`, `english-hub-game-scores`, `english-hub-quiz-history`, `english-hub-revision-progress`; [`useProgressSync.ts:10`](../../src/hooks/useProgressSync.ts) reads `english-hub:progress:poems` and siblings; `game-scores.ts` writes `eh_game_<id>`. Only the `english-hub-*` set has any writer in the app (`visit-tracker.tsx`, `quiz-engine.tsx`, `PoetryHubAQAClient.tsx`). `useProgressSync` is mounted nowhere and reads keys nothing writes: dead twice over. `saveCEFRDiagnostic` in `sync.ts` is the only function in that file with a live caller, from [`src/app/eal/diagnostic/page.tsx:91`](../../src/app/eal/diagnostic/page.tsx), and it targets `progress_cefr` from a migration that was also baselined.

The continuity layer that does work is purely client-side: [`src/app/revision/_components/visit-tracker.tsx`](../../src/app/revision/_components/visit-tracker.tsx) mounts once in the revision layout and records visited pages into `english-hub-recently-studied`. Its header notes that until it was added, nothing in the codebase wrote any of the keys the "In Progress" lens reads, so that panel was permanently empty.

## SEO and discovery

Content exists to be found, and the discovery layer is one of the better-engineered parts of this codebase.

**The sitemap is filesystem-driven.** [`scripts/generate-sitemap-routes.mjs`](../../scripts/generate-sitemap-routes.mjs) runs in `prebuild`, walks `src/app/**/page.tsx` and emits 856 static routes to `src/lib/seo/static-routes.json`, minus one explicit exclusion policy: robots-disallowed prefixes, redirect sources, and noindex surfaces. [`src/app/sitemap.ts`](../../src/app/sitemap.ts) reads that JSON and appends dynamic routes from their own data sources (courses, blog slugs plus `/ar/blog/*` where a translation exists, `SET_TEXTS`, `ANALYSIS_PAGES`, KS3 years, EAL topics and skills, IELTS lessons, lesson plans, printables). The predecessor was a 1,450-line hand-maintained list that had drifted about 200 pages behind the route tree and listed three redirecting URLs - that drift is what produced the "Discovered, currently not indexed" backlog in Search Console. The JSON is committed so a bare `npx next build` still ships a complete sitemap.

Everything goes through a `Map` keyed by URL, last-writer-wins, so `PRIORITY_OVERRIDES` and `DEMOTED` can adjust a page without removing it. `DEMOTED` drops pre-2025 Eduqas anthology poems to priority 0.1 rather than deleting pages that still take archived study traffic.

**llms.txt is generated from the same list.** [`scripts/generate-llms-txt.mjs`](../../scripts/generate-llms-txt.mjs) sections the 856 routes by prefix and writes [`public/llms.txt`](../../public/llms.txt) (98 KB) in `prebuild`, so it can never list a redirecting or noindex URL again. Note that [`public/llms-full.txt`](../../public/llms-full.txt) (102 KB, last written 23 May 2026) has **no generator** and nothing references it. It is a stale orphan.

**Structured data** lives in [`src/components/seo/json-ld.tsx`](../../src/components/seo/json-ld.tsx): `CourseJsonLd`, `BreadcrumbJsonLd`, `FAQPageJsonLd`, `ArticleJsonLd`, `HowToJsonLd`, `LearningResourceJsonLd`, `QuizJsonLd`, `ReviewedBylineJsonLd`, `SoftwareApplicationJsonLd`. Most take a `nonce` prop read from the `x-nonce` request header; the analysis catch-all is the CSP-hash exception described above.

**Canonicals.** [`src/lib/seo/canonical.ts`](../../src/lib/seo/canonical.ts) exists because Next inherits `alternates.canonical` down the layout tree, which silently gives every sub-page a parent-pointing canonical and suppresses its ranking. Every leaf route intended to rank sets its own `selfCanonical('/path')`.

**Hreflang is minimal and the root layout's comment is now wrong.** [`src/app/layout.tsx`](../../src/app/layout.tsx) (lines 87-96) declares only `en-GB` and `x-default` at the root, with a comment explaining that an `ar` alternate was removed because "there is no `/ar` route directory and no `/ar` URLs in the sitemap". Both halves of that are stale: the middleware rewrites `/ar/*` to the neutral route with `x-lang: ar` ([`src/middleware.ts:569`](../../src/middleware.ts)), and `sitemap.ts` lists `/ar/blog/<slug>` for all 40 translated posts. Per-page alternates are correct - `/blog/[slug]` emits an `en-GB` / `ar` / `x-default` cluster when a translation exists. Only the root comment and its reasoning are out of date. There is no Spanish content: `LOCALE_VARIANT_SUFFIX` accepts `.es`, `getBlogPost` accepts `'es'`, and zero `.es.mdx` files exist.

**AI crawlers are not blocked in code.** [`src/app/robots.ts`](../../src/app/robots.ts) has a single `userAgent: '*'` rule with no `GPTBot`, `CCBot` or `Google-Extended` differentiation, and `/demo/` was deliberately unblocked in June 2026 because the demo dashboards are the institutional conversion path. The Cloudflare edge AI-crawler block is a dashboard setting with no representation in this repo; [`LAUNCH-READINESS-2026-08-18.md`](../../LAUNCH-READINESS-2026-08-18.md) records it as **off** as of 18 August 2026. I could not verify its current state from the code, and nothing here can.

## How to add things

### A new blog post

Write `content/blog/<slug>.mdx` with every field `toBlogPost` validates: `title`, `description`, `slug`, `date`, `author`, `cover`, `tags`, `excerpt`, `category`, `educationalLevel` (one of the four levels, or the build throws). Use an `/api/og?title=...` URL for `cover`. Include at least two in-body links matching `/(revision|resources|practice|igcse|courses)/` and write over 1,200 words - not because a gate will stop you, but because `check-blog-quality.mjs` encodes the anti-scaled-content policy and only the cron generator currently enforces it. Run `npm run blog:quality-check` and `node scripts/check-mdx-compile.mjs` yourself. No `<!-- -->` comments. The sitemap picks the post up automatically. For Arabic, add `<slug>.ar.mdx` alongside; the canonical slug stays the English one.

### A new set text

1. Add a `SetText` to `SET_TEXTS` with the correct `boards` array. That alone gives you `/revision/texts/<slug>` via the generic route, a sitemap entry and board gating.
2. Set `copyrightStatus` honestly, and `ukRightsNotice` for anything public-domain in the United States but not the United Kingdom.
3. For a full hub, create `src/app/revision/texts/<slug>/page.tsx` and its sub-routes, then run `node scripts/generate-text-subpage-map.mjs` or the tiles will not appear.
4. For analysis pages, add entries to `ANALYSIS_PAGES` and a `CATEGORY_CONTEXT` block keyed by the same category slug. The catch-all renders nothing substantial without the context block. Add the category to `CATEGORY_LABELS` in **both** `[...slug]/page.tsx` (line 55) and `json-ld-hashes.ts`, or the breadcrumb and the hashed JSON-LD disagree and CSP blocks the script.
5. Hand-edit `src/data/analysis/index.ts` rather than running the generator, unless you have the out-of-repo backup directory and are prepared to re-fix the 21 escape-sequence descriptions.

### A new exam board

1. Add the id to the `ExamBoard` union and a `BoardConfig` to `BOARDS` in `board-config.ts`. The middleware, `getServerBoard` and the store all derive their valid set from `BOARDS`, so this one edit covers validation everywhere.
2. Add it to `BOARD_ID_TO_GUIDE_KEY` in [`src/data/exam-guides/board-guide-map.ts`](../../src/data/exam-guides/board-guide-map.ts) or students on that board silently lose their examiner tips.
3. Add it to `legacyDisplayNamesForBoard` in `src/lib/board-filter.ts` and to `BOARD_TO_SLICES` in `practice/load.ts`. Too narrow an entry silently shrinks the question pool; too broad cannot leak another syllabus, because `matchesPracticeBoard()` still runs over whatever the hint returns.
4. If it needs to persist on a user, add the enum value to the Prisma schema and to both directions of `prisma-board-map.ts`.
5. Tag content with the new board in `SET_TEXTS.boards`, the practice bank and `src/lib/board/flashcard-deck-boards.ts`.

Board coverage is uneven and the code admits it: `edexcel-igcse-lang` carries a `TODO` in `board-config.ts` noting its content is not yet built and that it currently falls back to `edexcel-igcse` filtering.
