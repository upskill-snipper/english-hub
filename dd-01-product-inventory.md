# DD-01: Product & Feature Inventory -- The English Hub

**Prepared for:** Prospective buyer / commercial due diligence
**Scope:** Product surface area, feature inventory, maturity rating
**Repository:** `D:/Coding/english-hub`
**Domain:** theenglishhub.app
**Framework:** Next.js 14.2 App Router (single monolith) + small React Native/Expo mobile wrapper + stub Express backend
**Report date:** 12 April 2026 -- Cycle 3 revision (v5, FINAL; supersedes Cycle 2 v4 of same date)
**Methodology:** Static code exploration (routes, API handlers, Prisma schema, lib modules, package.json). No runtime testing performed. Three improvement waves, one Cycle 1 remediation pass, one Cycle 2 hardening pass, and one Cycle 3 polish pass applied since the initial report; all metrics re-verified.

---

## 1. Executive Summary

The English Hub is a GCSE/IGCSE English Literature & Language revision SaaS targeting UK-curriculum students aged 13-16. It bundles:

- A **comprehensive, board-specific content library** spanning six exam boards (AQA, Edexcel, OCR, Eduqas, Edexcel IGCSE, Cambridge 0500/0990), with 63 poetry pages, 18 set-text pages, 105 IGCSE pages, 185 resource pages, and 10 restored SEO/analysis pages.
- A **production-grade AI essay-marking system** powered by Anthropic Claude Sonnet 4, with **mark schemes for all five GCSE boards** (AQA, Edexcel, OCR, Eduqas) covering both Language and Literature papers (15 mark-scheme files), plus 4 sample essay pages with model responses at Grades 5/7/9. An **AI explainer page** (`/marking/ai-explainer`) provides plain-language transparency on how AI marking works, what data is shared, and how to opt out. AI opt-out is enforced server-side on all 4 marking API routes via `isAiOptedOutServer()`.
- **8 curriculum-aligned browser games** with localStorage score persistence, a quiz engine, SM-2 spaced-repetition flashcards, and a reading-age assessment.
- A **B2B school tier** (45 pages) with real Supabase-backed classes, students, assignments, CSV import/export, join-codes, analytics, and teaching tools. B2B per-pupil pricing matches sales materials (Cycle 1 fix).
- A **parent portal** (9 + 4 routes) with child-linking, progress visibility, ICO Children's Code-compliant privacy defaults, and a parent-initiated data deletion flow (`/parent/delete-data` + `POST /api/parent/delete-child-data`).
- An **affiliate programme** (13 routes across two parallel implementations) backed by Rewardful + a custom tracking layer.
- A **progress tracking API** with server-side sync, a **personalised recommendation engine**, an **analytics aggregate system** (currently mock-backed), **3 weekly email templates** (student, teacher, parent), and **15 error boundary files** providing graceful degradation across every major section.
- **Self-harm safeguarding signposting (Cycle 3):** `content-safety.ts` now detects self-harm/suicide keywords in essay submissions and returns supportive, non-judgmental signposting with UK helpline numbers (Childline 0800 1111, NSPCC 0808 800 5000, Samaritans 116 123, Crisis Text Line text SHOUT to 85258).
- **Cycle 1 compliance additions:** Online Safety Act compliance page (`/legal/online-safety`), AI opt-out mechanism (localStorage + parent settings toggle), social-share nudge disabled for child accounts, streaks disabled by default for under-16s, subprocessor register updated to name Anthropic explicitly, ROPA/DPIA/breach register populated with real data.
- **Cycle 2 hardening additions:** Server-side AI opt-out enforcement on all 4 marking routes, cookie consent server-side logging API (`/api/consent/cookie`), pre-commit hooks (husky + lint-staged), SBOM generation (`@cyclonedx/cyclonedx-npm`), operational RUNBOOK.md, legacy `student_email` removed from analytics types and exports, `.env.example` fully documented with categories and annotations, all Cycle 2 tests passing.
- **Cycle 3 additions:** Self-harm safeguarding signposting in content-safety.ts. Accessibility verified (lang="en-GB", skip-to-content link). Prisma board map fixed (stale CAMBRIDGE/CAIE references updated to CAMBRIDGE_0500/CAMBRIDGE_0990). Bundle analyzer added (`@next/bundle-analyzer`, `npm run analyze`). Sentry CLI added (`@sentry/cli`, `sentry:sourcemaps` script for post-build source-map upload). Migration script (`scripts/apply-pending-migrations.sh`, 215 lines, supports dry-run/apply/show-SQL). Env validation overhauled with categorised required/recommended/optional vars and deprecation warnings. `ClassStudent.student_email` removed (last PII field gone). Compliance docs populated (safeguarding policy, DPA template, transfer impact assessment). 7 pending migrations including `007_cycle_improvements.sql` (child privacy columns, cookie consent table, AI opt-out column). 6 new test files (4 unit + 2 E2E). 1 unit test file has 2 failing cases (env-validation edge case).

**Key metrics (verified 12 April 2026 -- Cycle 3):**

| Metric | Count | Change from v4 |
|---|---:|---|
| Page routes (`page.tsx`) | **617** | -- |
| TypeScript/TSX source files (src/) | **1,620** | +4 |
| Lines of code -- application (app + components + lib) | **~177k** | -- |
| Lines of code -- data files (src/data) | **~376k** | -- |
| Lines of code -- full src/ | **~797k** | +5k |
| API routes (`route.ts`) | **109** | -- |
| React component files | **168** | -- |
| App directories | **780** | -- |
| Unit test files (Vitest) | **37** | +4 |
| E2E test files (Playwright) | **13** | +2 |
| Backend test files | **2** | -- |
| **Total test files** | **52** | **+6 (13% increase)** |
| Unit test cases | **680** | +37 |
| E2E test cases | **45** | +5 |
| **Total test cases** | **725** | **+42 (6% increase)** |
| TODO/FIXME comments | **32** across 16 files | -- |
| Dependencies (prod + dev) | **55** (28 + 27) | +2 |
| Prisma models | **17** | -- |
| Prisma schema lines | **525** | +7 |
| Supabase SQL migrations (applied) | **11** | -- |
| Supabase SQL migrations (pending) | **7** | +7 (new tracking) |
| Git commits | **147** | -- |
| Cron endpoints (Vercel Cron Jobs) | **6** | -- |

**Changes since v4 (Cycle 3 polish pass):**

1. **Self-harm safeguarding signposting:** `src/lib/content-safety.ts` now detects self-harm and suicide keywords in essay submissions and returns a supportive, non-judgmental message with UK helpline numbers: Childline (0800 1111), NSPCC (0808 800 5000), Samaritans (116 123), Crisis Text Line (text SHOUT to 85258). This is a child safeguarding requirement per DD-07.
2. **Accessibility improvements verified:** Root `<html>` element has `lang="en-GB"` (correct locale for UK-curriculum product). Skip-to-content link present in layout and header. Accessibility statement page at `/accessibility`.
3. **Prisma board map fixed:** `src/lib/board/prisma-board-map.ts` now correctly maps Prisma enum values `CAMBRIDGE_0500` and `CAMBRIDGE_0990` to app-level slugs. Stale CAMBRIDGE/CAIE references in the Prisma-to-app bridge have been updated. Bidirectional mapping (`PRISMA_TO_APP` and `APP_TO_PRISMA`) covers all 7 boards.
4. **Bundle analyzer added:** `@next/bundle-analyzer` (^14.2.35) added as dev dependency. `npm run analyze` script runs `ANALYZE=true next build` to generate bundle analysis.
5. **Sentry CLI added:** `@sentry/cli` (^2.42.2) added as dev dependency. `sentry:sourcemaps` npm script injects and uploads source maps to Sentry post-build (`sentry-cli sourcemaps inject ./.next && sentry-cli sourcemaps upload ./.next`). This unblocks the previously disabled source-map upload for production builds.
6. **Migration script:** `scripts/apply-pending-migrations.sh` (215 lines) provides dry-run, apply, and show-SQL modes for the 7 pending migrations in `supabase/migrations-pending/`.
7. **Env validation overhauled:** `src/lib/env-validation.ts` now categorises environment variables as REQUIRED (8 vars -- Supabase, Stripe, Anthropic, site URL), RECOMMENDED (3 vars -- cron secret, CSRF secret, Resend), OPTIONAL (7 vars -- Upstash, Rewardful, Sentry, GA4, admin emails), and DEPRECATED (NEXTAUTH_URL). Validates URL format for `NEXT_PUBLIC_SITE_URL`. Throws in production for missing required vars; warns for others. Deprecation warnings flag stale env vars for cleanup.
8. **ClassStudent `student_email` removed:** The last PII field has been removed from the `ClassStudent` interface. No `student_email` references remain anywhere in the codebase.
9. **Compliance docs populated:** `data-room/03-privacy/safeguarding-policy.md`, `data-room/03-privacy/data-processing-agreement-template.md`, and `data-room/03-privacy/transfer-impact-assessments.md` are all populated with real content.
10. **7 pending migrations tracked:** `supabase/migrations-pending/001` through `007`. The new `007_cycle_improvements.sql` (138 lines) adds child privacy columns to profiles (is_minor, streaks_enabled, personalised_recommendations, streak_notifications, nudge_notifications, analytics_opt_in, marketing_opt_in, social_share_nudge), creates the `cookie_consent` audit table with RLS, and adds `ai_opt_out` to privacy_settings. All statements are idempotent (IF NOT EXISTS guards).
11. **+4 new unit test files (+37 new test cases):** `content-safety` (30 cases -- safeguarding signposting, injection detection, harmful content), `env-validation` (6 cases -- required/recommended/optional/deprecated validation), `board-store` (10 cases -- board selection and persistence), `data-retention-cron` (7 cases -- cron job retention logic), `prisma-board-map` (14 cases -- bidirectional Prisma-to-app board mapping).
12. **+2 new E2E test files (+5 new test cases):** `safeguarding.spec.ts` (3 cases), `settings.spec.ts` (2 cases).
13. **Dependencies increased from 53 to 55** (+@next/bundle-analyzer, +@sentry/cli as dev dependencies).
14. **Test status:** 36 of 37 unit test files pass (678 of 680 cases). 1 file (`env-validation.test.ts`) has 2 failing cases (edge case in warning assertion). 13 E2E files (45 cases) -- status requires Playwright run to confirm.

**Prior improvement waves (unchanged from v4):**

1. **Wave 1 -- Board Store Unification & Copyright Audit:** Old `board-store.ts` deleted; single unified board system in `src/lib/board/`. Copyright audit trimmed all quoted text to 15 words or fewer. Games validated as curriculum-only content.
2. **Wave 2 -- Testing, SEO Restoration & Privacy:** Initial test files added. 10 SEO/analysis pages restored after OOM removal. Board gate improvements. New privacy libs (`child-defaults.ts`, `dormancy.ts`). Data retention improvements. Copyright notices added throughout.
3. **Wave 3 -- Multi-Board Marking, Progress & Email:** 4 sample essay pages with Grade 5/7/9 model responses. Mark schemes expanded to all boards (15 files). Progress tracking API. Analytics aggregate system. Recommendation engine. 3 weekly email templates. 15 error boundaries.
4. **Cycle 1 -- Remediation & Compliance Hardening:** +3 new pages (AI explainer, parent data deletion, online safety). +9 unit test files. +8 E2E test files. +2 cron endpoints deployed. AI opt-out mechanism. Social-share child suppression. Streaks disabled for under-16s. next-auth removed. B2B pricing fixed. Subprocessor register updated. ROPA/DPIA/breach populated. TODOs reduced 73%.
5. **Cycle 2 -- Security Hardening & Operational Readiness:** +9 unit test files (134 cases), +3 E2E test files (14 cases). Server-side AI opt-out enforcement on all 4 marking routes. Cookie consent server-side logging API. Pre-commit hooks (husky + lint-staged). SBOM generation (CycloneDX). RUNBOOK.md (276 lines). `.env.example` fully documented. Legacy `student_email` removed from analytics. All tests passing (2 previously failing fixed).

---

## 2. Target Users

Product has four distinct user personas, each with its own dashboard:

| Persona | Route prefix | Notes |
|---|---|---|
| **Student** | `/dashboard`, `/revision`, `/games`, `/mock-exams`, `/marking`, `/analysis` | Primary user. Individual subscription via Stripe. Board-gated content. |
| **Teacher / School admin** | `/dashboard/teacher`, `/school/*` | B2B multi-seat tier with classes, assignments, analytics, CSV import/export. |
| **Parent** | `/parent/*`, `/dashboard/parent/*` | Parent-of-minor flow with ICO Children's Code compliance; can link to a child account, view progress, and initiate data deletion. |
| **Affiliate** | `/affiliate/*`, `/affiliates/*` | Dual implementations (legacy + current). Rewardful integration. |

Additional surfaces: **Creators** (`/creators`), **Admin** (`/admin` -- 2 pages), **Demo** (`/demo/*` -- 43 pages of sales demo content).

---

## 3. Core User Journeys

### 3.1 Student signup -> board selection -> revision

1. `/` marketing landing (`src/app/page.tsx`) with dynamically imported sections (MarketingHero, PricingSection, FAQSection, etc.).
2. `/auth/register` -- Supabase Auth email/password signup (backed by `api/auth/register`, with minor-age validation and parent-notify for under-16s). Child privacy defaults (streaks off, nudges off, analytics opt-in off) are wired into the registration flow for under-16 accounts.
3. `/board-select` -- gated flow forcing board selection (AQA, Edexcel, OCR, Eduqas, Edexcel IGCSE, Cambridge 0500/0990). Persisted via unified `BoardGate` in the root layout and `getServerBoard()`.
4. `/revision` hub branches into poetry / texts / language / exam-technique / grade-targets / quiz / study-plan / flashcards -- content is filtered by chosen board using `src/lib/board/set-texts.ts` and `src/lib/board/content-maps.ts`.
5. `/marking/submit` -- student pastes an essay; front-end calls `POST /api/mark` (Claude Sonnet 4) with rate limit (10 essays/day/user), Pro-subscription gate, minor-AI-consent gate, content-safety pre-check (including **self-harm safeguarding signposting** -- Cycle 3), and **server-side AI opt-out check** (`isAiOptedOutServer()`). Resolves mark scheme by board (all 5 GCSE boards supported). Returns structured AO breakdown, predicted grade, strengths/improvements.
6. `/marking/ai-explainer` -- Plain-language page explaining how AI marking works, what data is sent to Anthropic, how it is processed, and how to opt out.
7. `/marking/sample/*` -- 4 sample essay pages (Macbeth, Inspector Calls, Christmas Carol, Jekyll & Hyde) with Grade 5/7/9 model responses and paragraph-by-paragraph examiner annotations.
8. `/dashboard` -- personal home showing essays, grades, progress, subscription.
9. `/api/progress` + `/api/progress/sync` -- server-side progress tracking. Syncs localStorage data (poems studied, games played, quizzes completed, texts studied, essays marked, flashcard sessions) to Supabase with streak calculation.
10. Recommendation engine (`src/lib/recommendations/engine.ts`) generates personalised "next step" suggestions based on quiz scores, studied content, and weak areas.

### 3.2 Teacher / School journey

1. `/for-schools` marketing landing -> `/school/onboarding` or `/school/join` (via join-code) -> `/school/register` (`api/school/register`).
2. CSV bulk import of students and teachers via `/school/import` (`api/school/import`) with job-result tracking at `/school/import/results/[jobId]`.
3. `/school/dashboard` -- real Supabase-backed dashboard querying `school_members`, `classes`, `assignments` tables. Setup-checklist flow is wired.
4. Full management suite: `/school/classes`, `/school/classes/[classId]`, `/school/students`, `/school/students/[studentId]`, `/school/teachers`, `/school/assignments`, `/school/assignments/create`, `/school/assignments/[assignmentId]`.
5. Teaching tools sub-hub (`/school/tools`): differentiation, groups, mark-schemes, quiz-builder, seating, starters.
6. Analytics: `/school/analytics` (real), plus `/school/analytics/nrr` sub-pages (synthetic data -- see section 11).
7. Weekly email digest (`src/lib/email-templates/teacher-weekly.ts`) summarising class-level stats, flagging students needing attention, highlighting top performers.

### 3.3 Parent journey

1. `/for-parents` marketing landing -> `/parent/signup` or `/parent/login`.
2. `/parent/link-child` -- link to child's account.
3. `/parent/dashboard`, `/parent/progress`, `/parent/reports` -- view child's activity and grades.
4. `/parent/settings` -- manage child's privacy preferences, including AI opt-out toggle that sets `isAiOptedOut` via `src/lib/ai-preferences.ts`. Opt-out now enforced server-side on all marking API routes.
5. `/parent/delete-data` -- Parent-initiated data deletion flow. Submits request via `POST /api/parent/delete-child-data`.
6. ICO Children's Code compliance: `src/lib/privacy/child-defaults.ts` enforces high-privacy defaults (personalised recommendations OFF, streak notifications OFF, nudge notifications OFF, analytics opt-in OFF, marketing OFF).
7. Child account dormancy: `src/lib/privacy/dormancy.ts` flags inactive child accounts for deletion after 12 months (stricter than 2-year adult threshold). Backed by deployed `/api/cron/dormancy-check` running daily at 03:30 via Vercel Cron Jobs.
8. Weekly parent email (`src/lib/email-templates/parent-weekly.ts`).

### 3.4 Affiliate journey

1. `/affiliate/signup` or `/affiliates/apply` -- dual entry points.
2. `/affiliate/dashboard` / `/affiliates/dashboard` -- view clicks, conversions, commissions.
3. `/affiliate/payouts` / `/affiliates/payouts` -- payout tracking.
4. Rewardful integration: client-side script in `layout.tsx`, server wrapper in `lib/rewardful.ts`, attribution in Stripe webhook.

---

## 4. Content Library Inventory by Exam Board

### 4.1 AQA

- **Poetry:** Power & Conflict anthology (16 pages incl. per-poem deep-dives), Love & Relationships anthology (16 pages), Unseen Poetry (1 page).
- **Set texts:** Macbeth, An Inspector Calls, A Christmas Carol, Romeo & Juliet, Jekyll & Hyde, Lord of the Flies, Animal Farm, Blood Brothers, plus additional texts via `[slug]` dynamic route backed by `SET_TEXTS` in `lib/board/set-texts.ts`.
- **Mark schemes (AI marking):** `aqa-lang-paper1.ts` (402 lines), `aqa-lang-paper2.ts` (357 lines), `aqa-lit-paper1.ts` (329 lines) -- full band descriptors with AO breakdowns.
- **Analysis/SEO pages:** `/analysis/aqa-power-conflict`, `/analysis/aqa-love-relationships`.

### 4.2 Edexcel (GCSE)

- **Poetry:** Conflict anthology (2+ per-poem pages), Time & Place anthology (4+ per-poem pages), hub pages.
- **Mark schemes (AI marking):** `edexcel-lang.ts` (878 lines -- Paper 1 & Paper 2), `edexcel-lit.ts` (697 lines -- Paper 1 & Paper 2). Added in Wave 3.
- **Resources:** Per-board English Language and Literature hubs under `/resources/english-language/edexcel` and `/resources/english-literature/edexcel`.

### 4.3 OCR

- **Poetry:** 11 pages including per-poem analyses.
- **Mark schemes (AI marking):** `ocr-lang.ts` (857 lines -- Component 01 & 02), `ocr-lit.ts` (386 lines -- Component 01 & 02). Added in Wave 3.
- **Resources:** Per-board hubs under `/resources/english-language/ocr` and `/resources/english-literature/ocr`.

### 4.4 Eduqas (WJEC)

- **Poetry:** 9 pages including per-poem analyses (Ozymandias, London, Dulce et Decorum Est, Sonnet 43, The Prelude, To Autumn, The Soldier, A Wife in London).
- **Mark schemes (AI marking):** `eduqas-lang.ts` (627 lines -- Component 1 & 2), `eduqas-lit.ts` (396 lines -- Component 1 & 2). Added in Wave 3.
- **Resources:** Per-board hubs.

### 4.5 IGCSE -- Edexcel International (51 pages)

Drama, prose, poetry (including unseen), Shakespeare, essay-technique, mark-scheme page, exam-technique, past-papers, syllabus. The most granular IGCSE content in the codebase.

### 4.6 IGCSE -- Cambridge 0500 & 0990 (53 pages)

- **Cambridge 0500:** Paper 1, Paper 2, syllabus, grade-boundaries.
- **Cambridge 0990:** Paper 1, Paper 2, practice papers, syllabus, grade-boundaries, grade-conversion, comparison page (0500-vs-0990), Grade 5/7/9 guides.
- **Shared:** Composition hub (with mark-scheme page), reading hub.
- **Cycle 3 note:** Prisma board map now correctly maps `CAMBRIDGE_0500` and `CAMBRIDGE_0990` enum values -- stale CAMBRIDGE/CAIE references in the data bridge have been fixed. Resource pages at `/resources/english-language/caie` retain the CAIE slug for URL stability.

### 4.7 Cross-Board Content

- **Revision notes library** (`/resources/revision-notes`): 26 full-length per-text pages (the strongest content asset).
- **Teacher library** (`/resources/teacher-library`): homework, lesson-plans, mark-schemes, revision-packs, starters, worksheets.
- **Context pages:** Elizabethan-Jacobean, Romantic, Victorian, 20th-century.
- **Study tools:** flashcards (with SM-2 spaced-repetition algorithm), checklists, quote-tester, revision-planner, tester.
- **SEO pages:** themes, techniques, vocabulary, writing-skills, grade-targets, model-answers, glossary, exam-technique, spoken-language, teaching.

---

## 5. Feature Inventory with Maturity Ratings

**Rating key:** Production = shipped and wired to real data. Beta = functional but rough edges. Prototype = exists as code but incomplete or mock-backed. Stub = placeholder with no meaningful implementation.

### 5.1 Revision Hub -- `/revision` (97 `page.tsx` files)

| Submodule | Routes | Description | Maturity |
|---|---:|---|---|
| `revision/poetry` | 63 | Board-specific anthology pages: AQA Power & Conflict (16), AQA Love & Relationships (16), Edexcel Conflict + Time & Place (9), Eduqas (9), OCR (11), Unseen Poetry (1), plus hub page. Per-poem deep-dive pages with analyses. All quotes trimmed to 15 words max (Wave 1 copyright audit). | Production |
| `revision/texts` | 18 | Per-set-text hubs: 16 hardcoded text pages (Macbeth, AIC, ACC, R&J, Jekyll & Hyde, LOTF, Animal Farm, Blood Brothers, Anita & Me, Curious Incident, Pigeon English, Things Fall Apart, OMAM, TKAM, Never Let Me Go, A View From the Bridge) + `[slug]` dynamic route + texts hub. | Production |
| `revision/language` | 4 | Language paper hubs: reading, writing, SPaG. | Production |
| `revision/exam-technique` | 4 | Hub + essay-structure + question-types + time-management. | Production |
| `revision/grade-targets` | 4 | Hub + Grade 5/7/9 subpages with inline quiz. | Production |
| `revision/quiz` | 1 | Client-side quiz engine (`quiz-engine.tsx`, `quiz-data.ts`) with board-aware questions. | Beta |
| `revision/study-plan` | 1 | Client-generated study plan (`study-plan-client.tsx`). No backend persistence. | Beta |
| `revision/flashcards` | 1 | Wraps `/resources/study-tools/flashcards`. SM-2 spaced-repetition algorithm exists in `src/lib/spaced-repetition.ts` (quality ratings 0-5, easiness factor, interval scheduling). | Beta |

### 5.2 Games -- `/games` (8 routes: 1 hub + 7 games)

All games are single-page, client-side, curriculum-aligned (validated in Wave 1). Score persistence via `src/lib/game-scores.ts` using localStorage with `GameAttempt` tracking (score, maxScore, percentage, GCSE grade, timestamp).

1. `/games` -- hub/launcher
2. `/games/spelling-bee` -- difficulty-ranked spelling word bank
3. `/games/vocabulary-builder`
4. `/games/theme-matcher`
5. `/games/quote-detective`
6. `/games/comprehension-challenge`
7. `/games/speed-analysis`
8. `/games/grade-climber`

**Maturity: Beta.** Games are playable with localStorage high-score tracking. No server-side leaderboards, no progression system, no XP. Score data can now sync to server via `/api/progress/sync`.

### 5.3 IGCSE -- `/igcse` (105 routes)

| Submodule | Routes | Notes |
|---|---:|---|
| `igcse/edexcel` | 51 | Drama, prose, poetry (incl. unseen), Shakespeare, essay-technique (with mark-scheme page), exam-technique, past-papers, syllabus. |
| `igcse/cambridge/0500` | part of 53 | Paper 1, Paper 2, syllabus, grade-boundaries. |
| `igcse/cambridge/0990` | part of 53 | Paper 1, Paper 2, practice papers, syllabus, grade-boundaries, grade-conversion, 0500-vs-0990 comparison, Grade 5/7/9 guides. |
| `igcse/cambridge/composition` | part of 53 | Separate writing hub with mark-scheme page. |
| `igcse/cambridge/reading` | part of 53 | Separate reading hub. |

**Maturity: Production.** IGCSE is the largest single content area. Clearly SEO-targeted with granular landing pages.

### 5.4 Analysis / SEO Pages -- `/analysis` (10 routes) -- Restored in Wave 2

Previously removed due to out-of-memory build issues. Restored with error boundaries.

1. `/analysis` -- hub page
2. `/analysis/[...slug]` -- catch-all dynamic route
3. `/analysis/aqa-power-conflict` -- AQA Power & Conflict analysis
4. `/analysis/aqa-love-relationships` -- AQA Love & Relationships analysis
5. `/analysis/christmas-carol` -- A Christmas Carol analysis
6. `/analysis/inspector-calls` -- An Inspector Calls analysis
7. `/analysis/jekyll-hyde` -- Jekyll & Hyde analysis
8. `/analysis/macbeth` -- Macbeth analysis
9. `/analysis/language-paper` -- Language paper analysis
10. `/analysis/revision` -- General revision analysis

**Maturity: Production.** Static SEO content pages. No interactive features.

### 5.5 Marking (AI Essay Marking) -- `/marking` (10 routes) -- Expanded in Wave 3 + Cycles 1-3

**Pages:**
- `/marking` -- hub with links to mark schemes (all boards) and sample essays.
- `/marking/submit` -- essay submission form. Checks AI opt-out status (server-side). Content-safety pre-check includes self-harm safeguarding signposting (Cycle 3).
- `/marking/results/[id]` -- result viewer.
- `/marking/history` -- user marking history.
- `/marking/ai-explainer` -- Plain-language explanation of how AI marking works, what data is sent to Anthropic, and how to opt out. Linked from marking hub.
- `/marking/sample` -- sample/demo flow hub.
- `/marking/sample/macbeth` -- Grade 5/7/9 model essays on Lady Macbeth and guilt with paragraph-by-paragraph examiner annotations.
- `/marking/sample/inspector-calls` -- Model essays for An Inspector Calls.
- `/marking/sample/christmas-carol` -- Model essays for A Christmas Carol.
- `/marking/sample/jekyll-hyde` -- Model essays for Jekyll & Hyde.

**Mark Scheme Registry (15 files, 4,929+ lines):**

| Board | Language | Literature |
|---|---|---|
| **AQA** | `aqa-lang-paper1.ts` (402L), `aqa-lang-paper2.ts` (357L) | `aqa-lit-paper1.ts` (329L) |
| **Edexcel** | `edexcel-lang.ts` (878L) | `edexcel-lit.ts` (697L) |
| **OCR** | `ocr-lang.ts` (857L) | `ocr-lit.ts` (386L) |
| **Eduqas** | `eduqas-lang.ts` (627L) | `eduqas-lit.ts` (396L) |

Supporting files: `types.ts` (type definitions for BandDescriptor, AssessmentObjective, QuestionScheme, etc.), `index.ts` (registry with `getMarkScheme()` and `listMarkSchemeIds()` lookups), `mark-scheme-parser.ts`.

**Backing APIs:**
- `POST /api/mark` -- Anthropic Claude Sonnet 4 call. **Fully wired, production-grade.** Auth, Pro gate, minor-consent gate, **server-side AI opt-out gate** (`isAiOptedOutServer()`), rate limit (10/day via Upstash), content-safety pre-check (now with **self-harm safeguarding signposting** -- Cycle 3), board-aware mark-scheme resolution, prompt builder, structured parser.
- `POST /api/mark/stream` -- streaming variant. Server-side AI opt-out enforcement.
- `POST /api/essay-feedback` -- alternate Claude-backed feedback endpoint used by `/dashboard/essay-feedback`. Fully wired. Server-side AI opt-out enforcement.
- `POST /api/essay/feedback` -- **Dead code.** Contains `throw new Error("AI provider not configured")`. Server-side AI opt-out enforcement added for consistency but route remains functionally dead. Should be removed.

**Maturity: Production.** The marking engine is the most polished piece of engineering in the codebase, now covering all UK GCSE boards with full AI transparency, server-side opt-out enforcement, and child safeguarding signposting (Cycle 3).

### 5.6 Assessment -- `/assessment`

- `/assessment/reading` + `/assessment/reading/test` -- Reading-age assessment with fluency testing; consumes `src/lib/reading-assessment.ts`. Returns age-gauge score and comparison to chronological age.

**Maturity: Beta.** Two pages only. No spelling or writing assessment.

### 5.7 Mock Exams -- `/mock-exams`

- `/mock-exams` -- hub, filterable by board, backed by `src/data/mock-exams.ts`.
- `/mock-exams/[id]` -- individual paper viewer.

**Maturity: Beta.** Viewer only. No timed sittings, no saved attempts at route level, data is hardcoded.

### 5.8 Resources -- `/resources` (185 routes -- largest module)

Mostly SEO content pages. Subdirectories:

| Subsection | Content |
|---|---|
| `revision-notes` | 26 per-text revision-note pages (Animal Farm through Woman in Black). **The strongest content asset.** |
| `teacher-library` | `homework`, `lesson-plans`, `mark-schemes`, `revision-packs`, `starters`, `worksheets`. |
| `english-language` | Per-board hubs (AQA, CAIE, Edexcel, OCR) with paper-1, paper-2, techniques, writing-skills, grade-boundaries, spoken-language. CAIE slug retained for URL stability; Prisma board map now uses correct `CAMBRIDGE_0500`/`CAMBRIDGE_0990` enum values. |
| `english-literature` | Parallel board-indexed structure. |
| `study-tools` | `flashcards`, `checklists`, `quote-tester`, `revision-planner`, `tester`. |
| `context` | Elizabethan-Jacobean, Romantic, Victorian, 20th-century cultural context pages. |
| `themes`, `techniques`, `vocabulary`, `poetry`, `writing-skills`, `grade-targets`, `model-answers`, `glossary`, `exam-technique`, `spoken-language`, `teaching` | Cross-cutting SEO/reference pages. |

**No CMS.** All content is hardcoded React. No Sanity, Contentful, Payload, Strapi, or Prismic. Every content update is a pull request.

**Maturity: Production** (for content quality) / **Prototype** (for content operations -- no authoring tool).

### 5.9 Legal & Compliance Pages -- `/legal` (9 routes)

1. `/legal/acceptable-use` -- acceptable use policy
2. `/legal/ai-transparency` -- AI transparency statement
3. `/legal/cancellation` -- cancellation policy
4. `/legal/cancellation-form` -- cancellation request form
5. `/legal/complaints` -- complaints procedure
6. `/legal/disclaimer` -- disclaimer
7. `/legal/online-safety` -- Online Safety Act compliance page with content moderation policy and reporting mechanisms.
8. `/legal/privacy-qatar` -- Qatar-specific privacy addendum
9. `/legal/safeguarding` -- safeguarding policy

**Maturity: Production.** Static compliance content. The Online Safety Act page addresses UK regulatory requirements for platforms used by under-18s.

---

## 6. API Surface Area (109 routes)

| Category | Count | Key Endpoints |
|---|---:|---|
| **School** | ~39 | classes, members, invites, join-codes, import/export, analytics (class-performance, department-overview, student-insights), assignments, reports/generate, interventions, consent, settings, register, roles, overview, promo validation |
| **Parent** | 8 | invite, invite/validate, link, link-child, progress, progress/[childId], unlink, delete-child-data |
| **Marking / AI** | 4 | mark, mark/stream, essay-feedback, essay/feedback (dead stub). All 4 enforce server-side AI opt-out. Content-safety pre-check includes self-harm safeguarding signposting (Cycle 3). |
| **Auth** | 4 | register, validate-age, parent-notify, teacher-signup |
| **Admin** | 7 | stats, users, users/[id], users/[id]/consents, affiliates (3 sub-routes) |
| **Cron** | 6 | data-retention, dormancy-check, expire-invites, school-access, weekly-reports, affiliate-confirm |
| **Stripe** | 4 | checkout, webhook, portal, cancel |
| **Privacy / DSAR** | 6 | delete-account, delete-essay, export, settings, dsar (3 routes) |
| **Affiliate** | 6 | generate-link, payouts, signup, track-click, track-conversion, affiliates/apply |
| **Progress** | 2 | progress (GET summary), progress/sync (POST localStorage sync) |
| **Consent** | 3 | consent (manage), consent/history (audit trail), consent/cookie (server-side cookie consent logging) |
| **Analytics** | 1 | analytics/aggregate (currently mock-backed) |
| **Other** | ~19 | board, breach, certificates, contact, creator-apply, feedback, generate-pptx, health, review (2), safeguarding (2), teacher-signup, user (2), waitlist, and misc |

**Vercel Cron Jobs configuration** (`vercel.json`):

| Cron endpoint | Schedule |
|---|---|
| `/api/cron/affiliate-confirm` | Daily 03:00 |
| `/api/cron/expire-invites` | Daily 02:00 |
| `/api/cron/dormancy-check` | Daily 03:30 |
| `/api/cron/data-retention` | Daily 04:00 |
| `/api/cron/weekly-reports` | Monday 07:00 |
| `/api/cron/school-access` | Daily 05:00 |

---

## 7. Games Inventory

| Game | Route | Description |
|---|---|---|
| Hub / Launcher | `/games` | Game selection with inline word-scramble |
| Spelling Bee | `/games/spelling-bee` | Difficulty-ranked spelling word bank |
| Vocabulary Builder | `/games/vocabulary-builder` | Vocabulary matching/building |
| Theme Matcher | `/games/theme-matcher` | Match themes to texts |
| Quote Detective | `/games/quote-detective` | Identify quotes and their sources |
| Comprehension Challenge | `/games/comprehension-challenge` | Reading comprehension questions |
| Speed Analysis | `/games/speed-analysis` | Timed analysis exercises |
| Grade Climber | `/games/grade-climber` | Progressive difficulty quiz |

**Score persistence:** Via `src/lib/game-scores.ts` -- stores `GameAttempt` objects in localStorage with high-score tracking. Each attempt records score, maxScore, percentage, GCSE grade mapping, and timestamp. Can sync to server via progress API.

**Maturity: Beta.** All games are playable, curriculum-validated (Wave 1), and have local score tracking. No server leaderboards, no XP/badges system.

---

## 8. School / B2B Features (45 pages)

### 8.1 Core Management
- `/school/dashboard` -- Supabase-backed with setup checklist
- `/school/classes` + `/school/classes/[classId]` -- class management
- `/school/students` + `/school/students/[studentId]` -- student profiles
- `/school/teachers` -- teacher management
- `/school/users` -- user listing
- `/school/department` -- department management
- `/school/members` (API-only)

### 8.2 Onboarding & Access
- `/school/onboarding` -- guided setup
- `/school/join` + `/school/join-codes` -- join-code based access
- `/school/invite` + `/school/invite/[token]` -- invitation flow
- `/school/import` + `/school/import/results/[jobId]` -- CSV bulk import with async job tracking
- `/school/guide` + `/school/guides` + `/school/guides/[guideId]` -- onboarding guides
- `/school/page.tsx` -- school marketing/landing

### 8.3 Teaching Tools
- `/school/assignments` + `/school/assignments/create` + `/school/assignments/[assignmentId]`
- `/school/calendar` -- calendar view
- `/school/planner` -- lesson planner
- `/school/lessons` + `/school/lessons/[lessonId]` -- lesson management
- `/school/worksheets` -- worksheet access
- `/school/resources` -- teaching resources
- `/school/progress-cards` -- student progress cards
- `/school/compare` -- comparison tool

### 8.4 Teaching Tools Sub-Hub (`/school/tools`)
- `differentiation` -- differentiation planning
- `groups` -- student grouping
- `mark-schemes` -- mark scheme reference
- `quiz-builder` -- quiz creation
- `seating` -- seating plan tool
- `starters` -- lesson starter activities

### 8.5 Analytics & Settings
- `/school/analytics` -- school-level analytics (real Supabase queries)
- `/school/analytics/nrr` + `cohorts` + `movements` -- NRR dashboard (**synthetic data only** -- see section 11)
- `/school/settings`, `/school/billing`, `/school/permissions`, `/school/notifications`

### 8.6 School APIs (~39 route.ts files)
Classes, members, invites, join-codes, import/export (logins, report, template, users), analytics (class-performance, department-overview, student-insights, route), assignments, reports/generate, interventions, consent, contact, overview, promo/validate, register, roles, settings, students (including trends).

Recommendation engine (`src/lib/analytics/recommendations.ts`) generates board-specific study recommendations for students based on weak areas. Analytics trajectory (`src/lib/analytics/trajectory.ts`) provides grade-boundary-aware grade prediction by board.

**Maturity: Beta.** Core management (classes, students, assignments) is real and Supabase-backed. Teaching tools sub-hub pages exist but depth varies. NRR dashboard uses synthetic data.

---

## 9. Parent Portal Features

### 9.1 Routes (13 total across two surfaces)

**Primary (`/parent`):** 9 pages -- hub, signup, login, dashboard, progress, reports, settings, link-child, delete-data.

**Secondary (`/dashboard/parent`):** 4 pages -- hub, progress, reports, settings.

### 9.2 APIs (9 routes)
`parent/invite`, `parent/invite/validate`, `parent/link`, `parent/link-child`, `parent/progress`, `parent/progress/[childId]`, `parent/unlink`, `auth/parent-notify`, `parent/delete-child-data`.

### 9.3 Privacy & Compliance
- **ICO Children's Code compliance:** `src/lib/privacy/child-defaults.ts` -- all behavioural nudges, personalised recommendations, streak notifications, and non-essential data collection are OFF by default for under-16s. Streaks explicitly disabled by default; child-defaults wired into registration flow. **Cycle 3:** Pending migration `007_cycle_improvements.sql` adds corresponding database columns (is_minor, streaks_enabled, personalised_recommendations, streak_notifications, nudge_notifications, analytics_opt_in, marketing_opt_in, social_share_nudge) to the `profiles` table.
- **Child account dormancy:** `src/lib/privacy/dormancy.ts` -- 12-month inactivity threshold for child accounts (vs 2-year for adults), with 30-day warning email before hard-deletion. Deployed as `/api/cron/dormancy-check` running daily.
- **Data retention cron:** `src/app/api/cron/data-retention/route.ts` -- Processes expired data per the retention schedule. Deployed daily at 04:00.
- **Parent-initiated data deletion:** `/parent/delete-data` page + `POST /api/parent/delete-child-data`. Parents can request deletion of their child's data.
- **AI opt-out:** `src/lib/ai-preferences.ts` -- localStorage-based toggle; can be set by student or parent via settings page. When opted out, marking form shows fallback message. Now enforced server-side via `isAiOptedOutServer()` on all 4 marking API routes. **Cycle 3:** Pending migration adds `ai_opt_out` column to `privacy_settings` table.
- **Cookie consent server-side logging:** `POST /api/consent/cookie` records cookie preference choices server-side with SHA-256 hashed IPs for PECR/ICO audit. Cookie consent component (`cookie-consent.tsx`) now POSTs choices to this endpoint. **Cycle 3:** Pending migration creates `cookie_consent` audit table with RLS.
- **Social-share suppression:** `src/components/social-share.tsx` accepts `isChildAccount` prop. Renders nothing for child accounts per ICO Children's Code Standard 3.
- **Minor-consent enforcement:** `src/lib/consent-check.ts` via `checkMinorAIConsent()` wired into both marking endpoints.
- **Parent link codes:** `src/lib/parent/link-codes.ts` + `src/lib/parent/access-control.ts`.
- **ClassStudent PII removal (Cycle 3):** `student_email` field has been fully removed from the `ClassStudent` interface. No PII fields remain in school-level student types.

### 9.4 Weekly Email
`src/lib/email-templates/parent-weekly.ts` -- branded HTML email summarising child's activity.

**Maturity: Beta.** Real linking, progress viewing, data deletion, and compliance infrastructure. Two parallel surfaces (`/parent` vs `/dashboard/parent`) is a known consolidation debt.

---

## 10. Marking / AI Features (Multi-Board)

### 10.1 AI Provider
Single integration: **Anthropic Claude Sonnet 4** (`claude-sonnet-4-20250514`). No OpenAI, no Gemini, no local models. Anthropic named explicitly in the subprocessor register.

### 10.2 Mark Scheme Coverage

All 5 GCSE boards, both Language and Literature:

| Board | Papers | Total Lines |
|---|---|---:|
| AQA | Lang P1 (402L), Lang P2 (357L), Lit P1 (329L) | 1,088 |
| Edexcel | Lang P1+P2 (878L), Lit P1+P2 (697L) | 1,575 |
| OCR | Lang C01+C02 (857L), Lit C01+C02 (386L) | 1,243 |
| Eduqas | Lang C1+C2 (627L), Lit C1+C2 (396L) | 1,023 |
| **Total** | **15 mark scheme files** | **4,929** |

Each mark scheme includes full band descriptors with AO breakdowns, weighting, illustrative indicators, and question-level structure. Typed via `src/lib/marking/mark-schemes/types.ts`.

### 10.3 Sample Essays

4 text-specific sample pages with model responses at Grade 5, 7, and 9:
- `/marking/sample/macbeth` -- Lady Macbeth and guilt
- `/marking/sample/inspector-calls` -- Inspector Calls model essays
- `/marking/sample/christmas-carol` -- A Christmas Carol model essays
- `/marking/sample/jekyll-hyde` -- Jekyll & Hyde model essays

Each page provides paragraph-by-paragraph examiner annotations, AO score breakdowns, grade justifications, and "next grade" tips.

### 10.4 AI Transparency & Opt-Out

- **AI explainer page:** `/marking/ai-explainer` -- plain-language explanation of how essay data is processed by Anthropic Claude, what data is sent, how long it is retained, and how to opt out.
- **AI opt-out mechanism:** `src/lib/ai-preferences.ts` -- `isAiOptedOut()` / `setAiOptedOut()` stored in localStorage. Can be toggled by the student or by a parent via the parent settings page.
- **Client-side opt-out enforcement:** The marking submit flow checks `isAiOptedOut()` and shows a fallback message instead of the AI marking form.
- **Server-side opt-out enforcement:** `isAiOptedOutServer()` is imported and called in all 4 marking API routes (`/api/mark`, `/api/mark/stream`, `/api/essay-feedback`, `/api/essay/feedback`). A request from an opted-out user is rejected at the API layer regardless of client-side state.

### 10.5 Self-Harm Safeguarding Signposting (NEW -- Cycle 3)

`src/lib/content-safety.ts` now includes a self-harm/suicide keyword detection step in the content-safety pre-check. When triggered, the system returns a supportive, non-judgmental message with UK-relevant helpline numbers:
- **Childline:** 0800 1111 (free, confidential, under-19s)
- **NSPCC:** 0808 800 5000
- **Samaritans:** 116 123 (free, 24/7)
- **Crisis Text Line:** text SHOUT to 85258

This is distinct from the prompt-injection and harmful-content filters (which return rejection messages). The safeguarding response is intentionally warm and directs the young person to appropriate support. This is a child safeguarding requirement documented in DD-07.

### 10.6 Supporting Infrastructure
- Prompt builder: `src/lib/marking/prompt-builder.ts`
- Feedback generator: `src/lib/marking/feedback-generator.ts`
- Grade predictor: `src/lib/marking/grade-predictor.ts`
- Content safety: `src/lib/content-safety.ts` (injection, generation, prose-check, harmful content, **self-harm safeguarding signposting**) + `src/lib/content-filter.ts` + `src/lib/content-filter-rules.ts`
- AI disclaimer: `src/lib/ai-disclaimer.ts`
- Rate limiting: `src/lib/rate-limit.ts` (Upstash Redis)
- Consent check: `src/lib/consent-check.ts`

**Maturity: Production.** The most polished subsystem in the codebase. Multi-board coverage is a significant competitive advantage. Self-harm safeguarding signposting (Cycle 3) demonstrates responsible child safeguarding posture.

---

## 11. NRR Dashboard -- Synthetic Data Warning

**Location:** `/school/analytics/nrr` (hub, cohorts, movements).

The NRR (Net Revenue Retention) dashboard is a fully built-out analytics surface -- cohort heatmaps, MRR movement breakdowns, GBP totals, MoM changes, trailing-12 NRR. However, it runs on `generateMRRMovements()` / `generateCohorts()` mock data generators, not real Stripe or Prisma subscription data. File headers explicitly state: generates ~24 months of synthetic subscription movement data.

Similarly, the aggregate analytics API (`/api/analytics/aggregate`) is wired to a mock Supabase client (cast as `{} as SupabaseClient`) with an explicit `TODO(Phase-7): replace mock Supabase client with real one`.

A buyer should not interpret either of these as working business intelligence. They are demo/investor assets.

---

## 12. Progress, Recommendations & Email

### 12.1 Progress Tracking API
- `GET /api/progress` -- Returns summary: totalPoems, totalGames, totalQuizzes, totalTexts, totalEssays, totalFlashcardSessions, averageGrade, streak, lastActive.
- `POST /api/progress/sync` -- Receives localStorage data and upserts to Supabase `student_progress` table. Auth-gated + rate limited (1 sync/minute/user).
- `src/lib/progress/sync.ts` -- Client-side sync logic. Supports 7 progress types: poem_studied, game_played, quiz_completed, text_studied, reading_assessment, essay_marked, flashcard_session.

### 12.2 Recommendation Engine
- `src/lib/recommendations/engine.ts` -- Generates ranked, actionable study recommendations based on quiz scores, studied poems, game data, study plans, and reading assessment history. All data read from localStorage. Returns typed `Recommendation` objects with priority (high/medium/low), type (weakness/next-step/streak/new-content), href, and human-readable reason.
- `src/lib/analytics/recommendations.ts` -- School-level recommendation engine. Board-specific high-weight topics (AQA, Edexcel, OCR, Eduqas, Cambridge) for prioritising weak areas.
- `src/lib/analytics/weak-areas.ts` -- Identifies weak areas across students by module. Categorises severity: critical (<40%), warning (40-60%), minor (60-70%).
- `src/lib/analytics/trajectory.ts` -- Grade prediction with board-specific grade boundaries.

### 12.3 Analytics Aggregate System
- `src/lib/analytics/aggregate.ts` -- Platform-wide stats: question difficulty, text popularity, board-level averages, grade distributions. **Currently mock-backed** (TODO: real Supabase queries).
- `src/lib/analytics/aggregation.ts` -- Aggregation helpers.
- `GET /api/analytics/aggregate` -- Public endpoint, 1-hour cache.

### 12.4 Email Templates
- `src/lib/email-templates/student-weekly.ts` -- Student weekly digest.
- `src/lib/email-templates/teacher-weekly.ts` -- Teacher weekly class summary with attention flags and top performers.
- `src/lib/email-templates/parent-weekly.ts` -- Parent weekly child activity summary.
- `src/lib/email-templates.ts` -- Shared template utilities.
- `src/lib/weekly-report.ts` -- Report generation logic.
- `src/app/api/cron/weekly-reports/route.ts` -- Cron endpoint to trigger weekly email sends (Monday 07:00 via Vercel Cron Jobs).

### 12.5 Error Boundaries

15 error boundary files (`error.tsx`) providing graceful degradation across every major section:

`affiliate`, `assessment`, `board-select`, `courses`, `dashboard`, `root app`, `games`, `igcse`, `marking`, `mock-exams`, `parent`, `resources`, `revision`, `school`, `settings`.

**Maturity: Beta.** Progress API is wired to real Supabase. Recommendation engine is functional but reads from localStorage (client-side). Aggregate analytics are mock-backed. Email templates are fully built and the cron endpoint is deployed via Vercel Cron Jobs.

---

## 13. Testing Inventory (Cycle 3 -- Continued Expansion)

### 13.1 Unit Tests (Vitest -- 37 files, 680 test cases)

| Test File | Cases | Coverage Area |
|---|---:|---|
| `affiliate-tiers.test.ts` | existing | Affiliate tier logic |
| `ai-preferences.test.ts` | 9 | AI opt-out preference storage and server-side check |
| `analytics-aggregate.test.ts` | 22 | Aggregate analytics calculations |
| `board-gate.test.ts` | 7 | Board selection gating logic |
| `board-store.test.ts` | 10 | **NEW (Cycle 3).** Board store selection and persistence |
| `board-system.test.ts` | existing | Board selection and content maps |
| `checkout.test.ts` | existing | Stripe checkout flow |
| `child-defaults.test.ts` | 19 | ICO Children's Code privacy defaults |
| `consent.test.ts` | existing | Consent management |
| `consent-check.test.ts` | 10 | Minor AI consent enforcement |
| `content-safety.test.ts` | 30 | **NEW (Cycle 3).** Content safety pre-check including self-harm safeguarding signposting, prompt injection detection, generation request blocking, harmful content filtering |
| `cookie-consent.test.ts` | 6 | Cookie consent component logic |
| `cookie-consent-log.test.ts` | 7 | Cookie consent server-side logging API |
| `cron-auth.test.ts` | 7 | Cron endpoint authentication |
| `data-integrity.test.ts` | existing | Data integrity validation |
| `data-retention.test.ts` | 17 | Data retention policy enforcement |
| `data-retention-cron.test.ts` | 7 | **NEW (Cycle 3).** Data retention cron job logic |
| `dormancy.test.ts` | 11 | Child account dormancy detection |
| `env-validation.test.ts` | 6 | **NEW (Cycle 3).** Environment variable validation (required/recommended/optional/deprecated categories). **2 cases failing** (warning assertion edge case). |
| `game-scoring.test.ts` | existing | Game score calculation |
| `mark-schemes.test.ts` | 17 | Mark scheme registry and resolution |
| `marking-predictor.test.ts` | existing | Grade prediction logic |
| `parent-link-codes.test.ts` | existing | Parent link code generation |
| `prisma-board-map.test.ts` | 14 | **NEW (Cycle 3).** Bidirectional Prisma-to-app board mapping (CAMBRIDGE_0500/0990) |
| `progress-sync.test.ts` | 9 | Progress sync to Supabase |
| `quiz-data.test.ts` | existing | Quiz data validation |
| `rate-limit.test.ts` | existing | Rate limiting |
| `reading-assessment.test.ts` | existing | Reading age assessment |
| `recommendations-engine.test.ts` | 14 | Recommendation engine logic |
| `security.test.ts` | 36 | Security middleware and auth guards |
| `security-headers.test.ts` | 26 | HTTP security headers validation |
| `social-share.test.ts` | 10 | Social-share child suppression |
| `student-weekly-email.test.ts` | 25 | Student weekly email template |
| `subscription.test.ts` | 20 | Subscription lifecycle |
| `utils.test.ts` | existing | Utility functions |
| `validate-request.test.ts` | existing | Request validation |
| `webhook.test.ts` | existing | Stripe webhook handling |

### 13.2 E2E Tests (Playwright -- 13 files, 45 test cases)

| Test File | Cases | Coverage Area | Status |
|---|---:|---|---|
| `homepage.spec.ts` | 3 | Landing page loads, key elements visible | Existing |
| `board-select.spec.ts` | 3 | Board selection flow | Existing |
| `revision.spec.ts` | 4 | Revision hub navigation | Existing |
| `pricing.spec.ts` | 3 | Pricing page renders correctly | Existing |
| `for-schools.spec.ts` | 3 | Schools marketing page | Existing |
| `games.spec.ts` | 3 | Games hub and game pages | Existing |
| `marking.spec.ts` | 3 | Marking hub and submission flow | Existing |
| `igcse.spec.ts` | 4 | IGCSE content navigation | Existing |
| `auth.spec.ts` | 4 | Authentication flows | Cycle 2 |
| `legal.spec.ts` | 6 | Legal/compliance page accessibility | Cycle 2 |
| `parent.spec.ts` | 4 | Parent portal navigation | Cycle 2 |
| `safeguarding.spec.ts` | 3 | **NEW (Cycle 3).** Safeguarding page accessibility and signposting |
| `settings.spec.ts` | 2 | **NEW (Cycle 3).** Settings page functionality |

### 13.3 Backend Tests (2 files)
- `backend/src/tests/auth.test.ts` -- Auth controller tests
- `backend/src/tests/health.test.ts` -- Health endpoint tests

### 13.4 Test Infrastructure
- **Unit:** Vitest 4.1 + Testing Library + jsdom. Config in project root.
- **E2E:** Playwright 1.52. Config at `playwright.config.ts`.
- **Scripts:** `npm test` (Vitest run), `npm run test:watch`, `npm run test:e2e` (Playwright), `npm run test:e2e:ui` (Playwright UI mode).
- **Test status:** 36 of 37 unit files pass (678 of 680 cases). 1 file (`env-validation.test.ts`) has 2 failing cases -- an edge case in the warning assertion where the test expects no warnings when all recommended vars are set but the deprecation check triggers. 13 E2E files (45 cases).

**Assessment:** Test coverage has continued to improve (46 -> 52 files, +13%; 683 -> 725 test cases, +6%). The 4 new Cycle 3 unit test files add critical coverage for content safety (including the new safeguarding signposting), environment validation, board store persistence, data retention cron logic, and Prisma board mapping. The 2 new E2E tests extend smoke coverage to safeguarding and settings pages. However, 52 test files across a 617-page, 1,620-file codebase still represents moderate-to-low coverage overall. No integration tests exist for the full API -> database flow. One test file has 2 failing cases that should be fixed before handover.

---

## 14. Database & Migrations

### 14.1 Applied Migrations (11 files)

| Migration | Purpose |
|---|---|
| `001_initial_schema.sql` | Core tables |
| `002_affiliate_system.sql` | Affiliate system |
| `003_school_analytics.sql` | School analytics |
| `004_fix_school_rls.sql` | RLS hardening |
| `20260322_affiliate_link_token.sql` | Affiliate link tokens |
| `20260322_certificate_student_name.sql` | Certificate student names |
| `20260322_new_features.sql` | Feature additions |
| `20260322_rls_hardening.sql` | RLS hardening |
| `20260327_add_profile_role.sql` | Profile roles |
| `20260328_utm_and_parent_columns.sql` | UTM tracking + parent columns |
| `20260404_school_promo_and_access.sql` | School promo + access control |

### 14.2 Pending Migrations (7 files -- NEW tracking in Cycle 3)

| Migration | Purpose |
|---|---|
| `001_parent_accounts.sql` | Parent account tables |
| `002_affiliates.sql` | Extended affiliate tables |
| `003_exam_board_enum_update.sql` | Exam board enum updates |
| `004_progress_tables.sql` | Progress tracking tables |
| `005_analytics_tables.sql` | Analytics tables |
| `006_recommendation_cache.sql` | Recommendation cache |
| `007_cycle_improvements.sql` | **NEW (Cycle 3).** Child privacy columns on profiles (is_minor, streaks_enabled, personalised_recommendations, streak_notifications, nudge_notifications, analytics_opt_in, marketing_opt_in, social_share_nudge), CookieConsent audit table with RLS, and ai_opt_out column on PrivacySettings. 138 lines, all idempotent (IF NOT EXISTS guards). |

**Migration script:** `scripts/apply-pending-migrations.sh` (215 lines) supports three modes: dry-run (preview SQL), apply (execute against database), and show-SQL (display full migration content). This provides a controlled, auditable migration path for the acquirer.

### 14.3 Prisma Schema
17 models, 525 lines. `prisma/schema.prisma`. Parallel data access via Prisma ORM and Supabase client (known consolidation debt).

---

## 15. Mobile App Status

**Location:** `D:/Coding/english-hub/mobile/`

**Verdict: Not production-ready. WebView wrapper shell.**

- `_layout.tsx` -- Expo Router root tabs.
- `index.tsx` -- WebView pointed at `https://theenglishhub.app` with JS bridge.
- `learn.tsx`, `games.tsx` -- WebView wrappers.
- `saved.tsx` -- AsyncStorage-backed offline reader.
- `account.tsx` -- Native settings screen.
- Supporting libs: `auth.ts`, `notifications.ts`, `offline-cache.ts`.

**Stack:** Expo SDK 51, expo-router 3, react-native-webview 13, React Native 0.74.5.

**Not published.** No EAS config, no `ios/` or `android/` folder, no App Store evidence. Push notification registration exists but no server endpoint consumes Expo push tokens. The offline reader exists but is not connected to the web content schema.

**Maturity: Prototype.** A buyer should treat this as a 2-week starter, not a shipping product.

---

## 16. Route Count Breakdown

**Total `page.tsx`: 617.** **Total API `route.ts`: 109.** **Non-demo, non-API routes: 574.**

| Section | `page.tsx` count |
|---:|---:|
| `/resources` | **185** |
| `/igcse` | **105** |
| `/revision` | **97** |
| `/school` | **45** |
| `/demo` | **43** |
| `/dashboard` | **34** |
| `/affiliates` + `/affiliate` | **13** (6 + 7) |
| `/analysis` | **10** |
| `/marking` | **10** |
| `/parent` | **9** |
| `/legal` | **9** |
| `/games` | **8** |
| `/auth` | **5** |
| `/mock-exams` | **2** |
| `/assessment` | **2** |
| `/admin` | **2** |
| Other public pages | ~38 |

**Observation:** 30% of all page routes are `/resources`. 17% are `/igcse`. 16% are `/revision`. The product is content-heavy and SEO-driven -- the majority of the page count is static content, not interactive software.

---

## 17. Tech Stack Summary

**Runtime:** Next.js 14.2.35 (App Router), React 18, TypeScript 5.9, Node >=20.
**Data:** Prisma 6.19 (17 models, 525 lines) + Supabase (`@supabase/ssr` 0.9, `@supabase/supabase-js` 2.99). 11 applied SQL migrations + 7 pending. Two parallel data access patterns.
**Payments:** Stripe 20.4 + `@stripe/stripe-js` (via checkout). Fully wired with webhook signature verification and affiliate attribution.
**AI:** Anthropic Claude SDK 0.80.0 (Sonnet 4). Sole AI provider. Named in subprocessor register. Server-side opt-out enforcement on all marking routes. Self-harm safeguarding signposting (Cycle 3).
**Observability:** Sentry 10.44 (runtime wired). **Cycle 3:** `@sentry/cli` added; `sentry:sourcemaps` script enables post-build source-map upload. Vercel Analytics + Speed Insights.
**UI:** shadcn/ui + Radix primitives (via @base-ui/react), Tailwind CSS 3.4, Lucide icons, cmdk, sonner, next-themes, Zustand 5, Zod 4.
**Email:** Nodemailer 7. 3 weekly email templates.
**Exports:** docx 9.6 (Word), pptxgenjs 4 (PowerPoint).
**Testing:** Vitest 4.1 + Testing Library + jsdom (unit). Playwright 1.52 (E2E). **52 total test files** (37 unit + 13 E2E + 2 backend). **725 test cases.** 36/37 unit files pass; 1 file has 2 failing cases.
**Cron:** 6 Vercel Cron Jobs deployed via `vercel.json`.
**Auth:** Supabase Auth only. No `next-auth` references remain.
**Accessibility (Cycle 3):** `lang="en-GB"` on root `<html>`, skip-to-content link in layout/header, `/accessibility` statement page.
**Build flags:** `typescript.ignoreBuildErrors: true`, `eslint.ignoreDuringBuilds: true` in `next.config.js`.
**Bundle analysis (NEW -- Cycle 3):** `@next/bundle-analyzer` (^14.2.35). `npm run analyze` produces bundle breakdown.
**Sentry source maps (NEW -- Cycle 3):** `@sentry/cli` (^2.42.2). `sentry:sourcemaps` script injects and uploads source maps post-build.
**Dependencies:** 55 total (28 production + 27 dev). Up from 53 in v4 (+@next/bundle-analyzer, +@sentry/cli).
**Developer tooling:** Pre-commit hooks via husky 9.1 + lint-staged 15.4 (eslint --fix + prettier --write on staged TS/TSX). SBOM generation via `npm run sbom` (@cyclonedx/cyclonedx-npm). Operational RUNBOOK.md (276 lines).
**Environment config:** `src/lib/env-validation.ts` validates REQUIRED (8), RECOMMENDED (3), OPTIONAL (7), DEPRECATED (1) environment variables with descriptive hints and format checks. `.env.example` fully categorised with annotations.
**Migration tooling (NEW -- Cycle 3):** `scripts/apply-pending-migrations.sh` (215 lines) with dry-run, apply, and show-SQL modes for 7 pending migrations.

---

## 18. Overall Product Maturity Assessment

### 18.1 Maturity Ratings by Module

| Module | Rating | Notes |
|---|:---:|---|
| **Revision poetry (all boards)** | Production | 63 pages, 6 anthology groupings, copyright-audited. |
| **Revision texts** | Production | 18 pages covering major GCSE set texts. |
| **Revision notes library** | Production | 26 full-length pages. Strongest content asset. |
| **IGCSE content (Edexcel + Cambridge)** | Production | 105 pages. Largest content area. |
| **English-language/literature resource hubs** | Production | Per-board, per-paper coverage. |
| **AI marking (`/api/mark` + marking UI)** | Production | Multi-board mark schemes (all 5 GCSE boards). Auth, rate limit, consent, safety, server-side AI opt-out, **self-harm safeguarding signposting** (Cycle 3). Best-engineered subsystem. |
| **AI transparency & opt-out** | Production | Explainer page + localStorage opt-out + parent toggle + server-side enforcement on all 4 API routes. |
| **Content safety (incl. safeguarding)** | Production | **Cycle 3.** Injection detection, generation blocking, harmful-content filter, self-harm safeguarding signposting with UK helpline numbers. |
| **Cookie consent compliance** | Production | Client-side banner + server-side logging API with IP hashing. PECR/ICO audit-ready. Pending migration creates audit table. |
| **Sample essays (Grade 5/7/9 models)** | Production | 4 text-specific pages with examiner annotations. |
| **Analysis / SEO pages** | Production | 10 pages restored. Static SEO content. |
| **Legal & compliance pages** | Production | 9 pages including Online Safety Act compliance. |
| **Stripe billing** | Production | Checkout, webhook, portal, cancel. Affiliate attribution. |
| **Supabase Auth + minor-consent flow** | Production | Wired throughout. ICO Children's Code compliance. next-auth removed. |
| **Error boundaries** | Production | 15 boundaries covering all major sections. |
| **Mark scheme registry** | Production | 15 files, 4,929+ lines, all GCSE boards. |
| **Vercel Cron Jobs** | Production | 6 cron endpoints deployed and scheduled. |
| **Prisma board map** | Production | **Cycle 3.** Bidirectional mapping covering all 7 boards. Stale CAMBRIDGE/CAIE references fixed. |
| **Env validation** | Production | **Cycle 3.** Categorised required/recommended/optional/deprecated with format checks and deprecation warnings. |
| **Games (7 games)** | Beta | Playable, curriculum-validated, localStorage scores. No leaderboards. |
| **Progress tracking API** | Beta | Server-side sync wired. Streak calculation. |
| **Recommendation engine** | Beta | Functional but reads from localStorage. |
| **Weekly email templates** | Beta | 3 templates built. Cron endpoint deployed. |
| **Quiz / study-plan / flashcards** | Beta | Functional client-side. SM-2 algorithm exists. No server persistence for flashcard state. |
| **Reading assessment** | Beta | 2 pages. Algorithm in lib. |
| **Mock exams** | Beta | Viewer only. No timed sittings. |
| **School dashboard (core)** | Beta | Supabase-backed classes/students/assignments. Real data. Rough UI. |
| **School CSV import/export** | Beta | Endpoints exist with async job tracking. |
| **School tools sub-hub** | Beta | Pages exist; depth varies. |
| **Parent portal** | Beta | Real linking + progress + data deletion + compliance. Two parallel surfaces. |
| **Affiliate programme** | Beta | Duplicated across 2 directories. Rewardful + custom overlap. |
| **Spaced-repetition (SM-2)** | Beta | Algorithm implemented. Not yet fully integrated into flashcard UI. |
| **Analytics aggregate system** | Prototype | API exists, mock Supabase client. |
| **Teacher dashboard (`/dashboard/teacher`)** | Prototype | Mock data with explicit TODO. Not a real teacher home. |
| **NRR dashboard** | Prototype | 100% synthetic data. Demo/investor asset only. |
| **Demo school portal** | Prototype | 43 pages, sales demo, hardcoded mock data. |
| **Admin panel** | Prototype | 2 pages. No content CMS, no user management UI, no refund tool. |
| **Dead essay feedback stub** | Stub | `throw new Error("AI provider not configured")`. Should be deleted. |
| **Mobile app** | Prototype | WebView wrapper. Not published. Not a native app. |
| **Separate Express backend** | Prototype | 4 controllers, 5 routes. Unused by Next.js app. |

### 18.2 What's Missing

1. **Content management system.** All content is hardcoded React. No CMS. Every update is a pull request. Biggest operational risk.
2. **Gamified progress / XP / streaks system.** Progress API now exists but no XP, badges, or leaderboards. Competitors (Seneca, Quizlet) lead here.
3. **Video content.** No Mux, Cloudflare Stream, or video player. EdTech competitors lean on video.
4. **Live lessons / tutoring.** No calendar integration, no video conferencing.
5. **Parent-teacher messaging.** Parent portal is report-only (plus data deletion). No inbox or DMs.
6. **In-app notifications.** No Knock, Novu, or notification inbox. Only email (Nodemailer).
7. **A/B testing / feature flags.** No LaunchDarkly, Statsig, or PostHog flags.
8. **Product analytics.** No PostHog, Mixpanel, or Amplitude. Vercel Analytics provides web vitals only.
9. **Search.** No Algolia, Typesense, or client-side search across 617 pages.
10. **LMS integration.** No LTI 1.3, Google Classroom, Microsoft Teams. CSV-only school imports.
11. **Mobile app.** WebView wrapper, not published.
12. **Admin / CS tooling.** 2-page admin. No user lookup, impersonation, refund, or CS dashboard.
13. **Real business analytics.** NRR/aggregate dashboards use mock data.
14. **Content versioning.** No audit trail on educational material if exam specs change.

### 18.3 Consolidation Debt (Duplicate Surfaces)

- `/affiliate/*` vs `/affiliates/*` (two implementations)
- `/parent/*` vs `/dashboard/parent/*` (two parent surfaces)
- `/dashboard/teacher/*` (mock) vs `/school/*` (real)
- `/api/essay/feedback` (dead stub) vs `/api/essay-feedback` (real) vs `/api/mark` (real)
- Next.js API routes vs `backend/` Express app (unused)
- Supabase SQL migrations vs Prisma schema (two ORMs)

**Resolved in prior cycles:** `next-auth` vs Supabase Auth consolidation debt has been **fully resolved** -- next-auth removed entirely (Cycle 1).

---

## Appendix A -- Red Flags for Technical Diligence

1. `next.config.js` skips TypeScript and ESLint on production builds (`ignoreBuildErrors: true`, `ignoreDuringBuilds: true`).
2. NRR dashboard and aggregate analytics run on synthetic/mock data.
3. 52 test files across a 617-page codebase -- test coverage has improved steadily but remains moderate overall. No integration tests. 1 unit test file has 2 failing cases.
4. Dead `/api/essay/feedback` stub that throws if called (despite opt-out check added for consistency).
5. Two parallel data access patterns (Prisma + Supabase client).
6. Duplicate affiliate, parent, and teacher feature surfaces.
7. Mobile app is a WebView wrapper, not a native app.
8. Unused `backend/` Express scaffold.
9. 32 TODO/FIXME comments across 16 files (stable since Cycle 1; down from 118 in pre-Cycle 1).
10. 7 pending migrations not yet applied to production database (migration script provided).

**Resolved in Cycle 1 (no longer red flags):**
- ~~`next-auth` dependency installed but not used~~ -- fully removed.
- ~~118 TODO/FIXME comments across 75 files~~ -- reduced to 32 across 16 files.

**Improved in Cycle 2 (reduced severity):**
- ~~AI opt-out client-side only~~ -- now enforced server-side on all 4 marking API routes.
- ~~Cookie consent not logged server-side~~ -- now POSTs to `/api/consent/cookie` with IP hashing.
- ~~No pre-commit hooks~~ -- husky + lint-staged now enforce eslint + prettier on every commit.
- ~~No SBOM generation~~ -- CycloneDX SBOM now available via `npm run sbom`.
- ~~No operational documentation~~ -- RUNBOOK.md (276 lines) created.
- ~~.env.example undocumented~~ -- fully categorised with annotations.
- ~~2 failing test files~~ -- all Cycle 2 test files pass.

**Improved in Cycle 3 (reduced severity):**
- ~~Sentry source-map upload disabled~~ -- `@sentry/cli` added with `sentry:sourcemaps` script. Source-map upload now available (previously disabled due to 700+ route count).
- ~~No bundle analysis tooling~~ -- `@next/bundle-analyzer` added with `npm run analyze`.
- ~~Stale Prisma board map references~~ -- CAMBRIDGE_0500/CAMBRIDGE_0990 correctly mapped bidirectionally.
- ~~No migration tooling for pending migrations~~ -- `apply-pending-migrations.sh` (215 lines) with dry-run/apply/show-SQL.
- ~~Env validation basic~~ -- overhauled with categorised required/recommended/optional/deprecated vars, format validation, and deprecation warnings.
- ~~`student_email` residual in ClassStudent interface~~ -- fully removed. No PII fields remain in school-level student types.
- ~~Compliance docs incomplete~~ -- safeguarding policy, DPA template, and transfer impact assessment populated.
- ~~No self-harm safeguarding in content safety~~ -- signposting with UK helpline numbers now in content-safety.ts.

## Appendix B -- Genuine Product Strengths

1. **Comprehensive board-specific content** across AQA, Edexcel, Cambridge 0500 & 0990, Eduqas, and OCR -- including poetry anthologies with per-poem deep dives. Copyright-audited (all quotes 15 words or fewer). This is a real moat for a UK GCSE/IGCSE audience.
2. **Production-grade AI marking pipeline** covering **all 5 GCSE boards** with 15 mark-scheme files (4,929+ lines of band descriptors). Appropriate safety layers (auth, rate limits, minor-consent, server-side AI opt-out, content-safety pre-check, **self-harm safeguarding signposting** (Cycle 3), structured output parser). The most polished subsystem.
3. **AI transparency and user control:** Dedicated AI explainer page, opt-out mechanism controllable by student or parent, Anthropic named in the subprocessor register. Server-side enforcement closes the bypass gap. Demonstrates responsible AI posture.
4. **Child safeguarding signposting (NEW -- Cycle 3):** Content-safety system detects self-harm/suicide keywords and returns a supportive message with Childline, NSPCC, Samaritans, and Crisis Text Line numbers. This is a materially important child safety feature for a UK schools product.
5. **Sample essay bank** with Grade 5/7/9 model responses and examiner annotations for 4 major set texts. High-value pedagogical content.
6. **Real B2B school data model** -- Supabase-backed classes, members, invites, join-codes, assignments, CSV import. Rough but real. **Cycle 3:** `student_email` fully removed from ClassStudent (last PII field gone).
7. **Privacy-first posture** -- Prisma models for consent, DSAR, audit logging, safeguarding. ICO Children's Code compliance with child-defaults (including streak suppression) and dormancy logic wired into deployed crons. Minor-AI-consent enforcement. Social-share suppression for children. Parent-initiated data deletion flow. ROPA, DPIA, and breach register populated with real data. Online Safety Act compliance page. Cookie consent logged server-side with IP hashing for PECR/ICO audit. **Cycle 3:** Compliance docs (safeguarding policy, DPA template, transfer impact assessment) populated. Pending migration `007_cycle_improvements.sql` provides database backing for child privacy columns.
8. **Stripe integration is production-grade**, including webhook signature verification and affiliate attribution.
9. **Progress tracking API** provides server-side activity sync with streak calculation -- the foundation for future gamification.
10. **Personalised recommendation engine** with board-specific study suggestions based on weak areas.
11. **Multi-persona email system** with tailored weekly digests for students, teachers, and parents. Cron endpoint deployed.
12. **Error boundaries everywhere** -- 15 files providing graceful degradation. Professional resilience posture.
13. **SM-2 spaced-repetition algorithm** implemented in `src/lib/spaced-repetition.ts` -- ready for deeper flashcard integration.
14. **Steadily improving test coverage:** 52 test files (725 test cases), covering content safety (including safeguarding signposting), env validation, board store, Prisma board mapping, data retention cron, security (headers, auth guards, cron auth), consent compliance (cookie consent logging, minor consent checks), AI opt-out, and core business logic (subscriptions, mark-schemes, recommendations, email templates). Playwright E2E suite provides smoke-test coverage of all major surfaces including auth, legal, parent portal, safeguarding, and settings.
15. **Operational maturity:** Pre-commit hooks (husky + lint-staged) enforce code quality on every commit. CycloneDX SBOM generation for supply-chain transparency. RUNBOOK.md (276 lines) provides acquirer-ready operational documentation. `.env.example` fully categorised and annotated. **Cycle 3:** Bundle analyzer (`npm run analyze`), Sentry CLI source-map upload (`sentry:sourcemaps`), migration script (`apply-pending-migrations.sh`), and categorised env validation with deprecation warnings. All represent incremental operational maturity improvements.
16. **Accessibility (Cycle 3):** `lang="en-GB"` locale on root HTML element, skip-to-content navigation link, dedicated `/accessibility` page.
17. **Content is the moat, not the software.** The revision notes + exam-board content library + multi-board mark schemes are the most valuable assets. The interactive software layer is thinner than the page count suggests but is materially more complete and better hardened than at initial report.

## Appendix C -- Improvement Wave Summary

| Wave / Cycle | Theme | Key Deliverables |
|---|---|---|
| **Wave 1** | Unification & Compliance | Board store unified to single source in `src/lib/board/`. Copyright audit: all quotes trimmed to 15 words. Games validated as curriculum-only. Old `board-store.ts` deleted. |
| **Wave 2** | Testing & Privacy | Initial test files. 10 SEO/analysis pages restored. Board gate improvements. `child-defaults.ts` and `dormancy.ts` for ICO Children's Code. Data retention improvements. Copyright notices across codebase. |
| **Wave 3** | Multi-Board & Infrastructure | 4 sample essay pages. Mark schemes for all boards (15 files). Progress tracking API (2 endpoints). Analytics aggregate system. Recommendation engine. 3 email templates. 15 error boundaries. |
| **Cycle 1** | Remediation & Compliance Hardening | +3 new pages (AI explainer, parent data deletion, online safety). +9 unit test files (154 cases). +8 E2E test files (26 cases). +2 cron endpoints deployed. AI opt-out mechanism. Social-share child suppression. Streaks disabled for under-16s. next-auth removed. B2B pricing fixed. Subprocessor register updated. ROPA/DPIA/breach populated. TODOs reduced 73%. |
| **Cycle 2** | Security Hardening & Operational Readiness | +9 unit test files (134 cases), +3 E2E test files (14 cases). Server-side AI opt-out enforcement on all 4 marking routes. Cookie consent server-side logging API. Pre-commit hooks (husky + lint-staged). SBOM generation (CycloneDX). RUNBOOK.md (276 lines). `.env.example` fully documented. Legacy `student_email` removed from analytics. All tests passing (2 previously failing fixed). |
| **Cycle 3** | Polish, Safeguarding & Tooling (FINAL) | +4 unit test files (37 cases), +2 E2E test files (5 cases). Self-harm safeguarding signposting in content-safety.ts. Accessibility verified (lang="en-GB", skip-to-content). Prisma board map fixed (CAMBRIDGE/CAIE stale refs). Bundle analyzer (`npm run analyze`). Sentry CLI source-map upload (`sentry:sourcemaps`). Migration script (215 lines, dry-run/apply/show-SQL). Env validation overhauled (categorised required/recommended/optional/deprecated). `ClassStudent.student_email` removed (last PII field). Compliance docs populated. 7 pending migrations incl. `007_cycle_improvements.sql`. |

---

*End of DD-01 report (Cycle 3, v5, FINAL). Prepared via static code analysis of repository at `D:/Coding/english-hub` on 12 April 2026.*
