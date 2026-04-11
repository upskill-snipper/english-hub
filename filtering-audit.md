# The English Hub — Strict Exam Board Filtering Audit

**Audit scope:** Find every page that shows content from exam boards other than the user's chosen board (cookie `english-hub-board`).
**Audit date:** 2026-04-10
**Boards in use:** `aqa`, `edexcel`, `ocr`, `eduqas`, `edexcel-igcse`, `cambridge-0500`, `cambridge-0990`

---

## Executive summary

| Area | Status |
|---|---|
| `/revision/*` (primary revision app) | Mostly well-gated (server-side redirects in layouts) |
| `/igcse/*` (IGCSE app) | Well-gated (every subpage calls `requireIgcseBoard`) |
| `/analysis/*` (SEO articles) | Gated only via client-side `WrongBoardBanner` overlay (see caveats) |
| `/resources/revision-notes/*` (text study guides) | **BROKEN** — 24 text pages completely unfiltered |
| `/revision/texts/[slug]` (dynamic study guide) | **BROKEN** — no `textAvailableForBoard` check |
| `/resources/english-literature/*` | **BROKEN** — ~64 sub-board pages with zero gating |
| `/resources/english-language/*` | **BROKEN** — all sub-board pages with zero gating |
| `/resources/poetry/power-and-conflict` & `/love-and-relationships` | **BROKEN** — AQA-only content, no guard |
| Teacher library | Partial — `homework`, `starters`, `worksheets` read the board but do not filter |

---

## 1. `/resources/revision-notes/` — Individual text study guides

### 1.1 Hub page `/resources/revision-notes/page.tsx` — MEDIUM

**Status:** Partial. Client-side filter with its own hardcoded TEXTS array that is divergent from `src/lib/board/set-texts.ts` (authoritative source).

**Problems found:**
- Uses a client-side `boardToLabels` switch mapping `eduqas` to `['AQA','Edexcel','OCR']` — Eduqas users see the AQA/Edexcel/OCR list, not Eduqas-specific text list. Real Eduqas texts (Blood Brothers, Anita and Me, Silas Marner, Christmas Carol, Pigeon English, etc.) are not marked as Eduqas in the local TEXTS array, so Eduqas users see an inaccurate union.
- `edexcel-igcse` is mapped to `['Edexcel']` — pulls in GCSE Edexcel texts (Macbeth, Merchant of Venice, An Inspector Calls, etc.) that are also on IGCSE but also items that are GCSE-only like Blood Brothers, Woman in Black, Sign of the Four.
- Cambridge (`cambridge-0500`, `cambridge-0990`) → `['CAIE']`. These boards are **language-only** and have no set-text study list, but the user is still shown the CAIE label set.
- Uses `useBoard` client hook, so during SSR + hydration the user briefly sees the entire unfiltered list (all 24 cards) before the filter kicks in.

**File:** `D:/Coding/english-hub/src/app/resources/revision-notes/page.tsx`

**Suggested fix:**
1. Convert to a server component that calls `getServerBoard()` and uses `getSetTextsForBoard(board)` from `@/lib/board/set-texts` as the single source of truth.
2. Redirect boardless users to `/board-select?next=/resources/revision-notes` (matching `/revision/texts/page.tsx` behaviour).
3. Delete the hardcoded local `TEXTS` array and `boardToLabels` mapping.

---

### 1.2 All 24 individual text pages — HIGH

Every text subpage under `/resources/revision-notes/` is a `"use client"` page with a metadata-only `layout.tsx`. None check the board. A Cambridge 0500 user can go directly to `/resources/revision-notes/macbeth` and see the complete Macbeth study guide even though Cambridge 0500 is a language-only spec with no set texts.

**Files affected** (all under `D:/Coding/english-hub/src/app/resources/revision-notes/`):
- `animal-farm/page.tsx` (AQA, Edexcel, OCR only)
- `blood-brothers/page.tsx` (Edexcel, Eduqas only)
- `christmas-carol/page.tsx` (AQA, Edexcel, Eduqas only)
- `frankenstein/page.tsx` (AQA, Edexcel, OCR only)
- `great-expectations/page.tsx` (AQA only)
- `inspector-calls/page.tsx` (AQA, Edexcel, OCR, Eduqas, Edexcel IGCSE only)
- `jane-eyre/page.tsx` (AQA, OCR only)
- `jekyll-and-hyde/page.tsx` (AQA, Edexcel, OCR, Eduqas only)
- `lord-of-the-flies/page.tsx` (AQA, OCR, Eduqas only)
- `macbeth/page.tsx` (AQA, Edexcel, OCR, Eduqas, Edexcel IGCSE only)
- `merchant-of-venice/page.tsx` (AQA, Edexcel, OCR, Eduqas only)
- `much-ado/page.tsx` & `much-ado-about-nothing/page.tsx` (AQA, Edexcel, OCR, Eduqas, Edexcel IGCSE) — also a duplicate route
- `never-let-me-go/page.tsx` (AQA only)
- `of-mice-and-men/page.tsx` (Edexcel IGCSE only) — note: **no layout.tsx**, only `page.tsx`
- `othello/page.tsx` (Eduqas only)
- `pride-and-prejudice/page.tsx` (AQA, Edexcel, OCR, Eduqas only)
- `romeo-and-juliet/page.tsx` (all GCSE/IGCSE Lit boards)
- `sign-of-four/page.tsx` (AQA only)
- `silas-marner/page.tsx` (AQA, Edexcel, Eduqas only)
- `the-crucible/page.tsx` (not in set-texts.ts — stale page)
- `the-tempest/page.tsx` (AQA, OCR only)
- `view-from-the-bridge/page.tsx` (Edexcel IGCSE only)
- `woman-in-black/page.tsx` (not in set-texts.ts — stale page)

**Severity:** HIGH. A user browsing their "for OCR" revision-notes hub can still click through a cross-linked card and land on an AQA-only text page with no warning.

**Suggested fix:** Per-subdir `layout.tsx` that calls `getServerBoard()` and `redirect('/resources/revision-notes')` if board is set and not in the text's allowed boards list. Model this on `/revision/texts/of-mice-and-men/page.tsx` (which is the only text there that's properly guarded). Alternatively, wrap each page with `WrongBoardBanner contentBoards={[...]}` for the softer SEO-preserving variant.

---

## 2. `/resources/poetry/` — Poetry hub and cluster pages

### 2.1 `PoetryHubClient.tsx` — LOW/MEDIUM

**Status:** Filters anthology sections by board using client-side `useBoard`, but during hydration shows nothing (not a leak, but a flash of empty). Shows AQA Top-10 most-tested poems (`TOP_TEN_POEMS`) **only** when `showAQA` — correct. Shows Edexcel sections when `showEdexcel`, Eduqas when `showEduqas`. OCR and Edexcel IGCSE get a placeholder card.

**Minor issues:**
- Hard-codes anthology section lists rather than deriving from a shared source (drift risk).
- During initial SSR + hydration window, all "show*" booleans start `false` (because `board` is initially `null` from `useBoard`) until hydration, so a wrong-board user sees no anthology section momentarily before their correct one appears. This is acceptable but slightly jarring.

**File:** `D:/Coding/english-hub/src/app/resources/poetry/PoetryHubClient.tsx`

---

### 2.2 `/resources/poetry/power-and-conflict/` — HIGH

**Status:** `layout.tsx` is metadata-only. No board check. An OCR student navigating to `/resources/poetry/power-and-conflict` sees the entire AQA Power and Conflict study guide with all 15 poems.

**Files affected:**
- `D:/Coding/english-hub/src/app/resources/poetry/power-and-conflict/layout.tsx` — metadata only
- `D:/Coding/english-hub/src/app/resources/poetry/power-and-conflict/page.tsx` — unfiltered

**Suggested fix:** Either make `layout.tsx` a server component that calls `getServerBoard()` and `redirect('/resources/poetry')` if board is set and not `'aqa'`, or wrap with `<WrongBoardBanner contentBoards={['aqa']} contentName="AQA Power and Conflict poetry" redirectTo="/resources/poetry" />`. (The `/revision/poetry/power-and-conflict/layout.tsx` equivalent does the former correctly.)

---

### 2.3 `/resources/poetry/love-and-relationships/` — HIGH

**Same as 2.2.** AQA-only content, metadata-only layout, no guard.

**Files affected:**
- `D:/Coding/english-hub/src/app/resources/poetry/love-and-relationships/layout.tsx`
- `D:/Coding/english-hub/src/app/resources/poetry/love-and-relationships/page.tsx`

**Suggested fix:** Mirror `/revision/poetry/love-and-relationships/layout.tsx` which correctly redirects wrong-board users.

---

### 2.4 `/resources/poetry/edexcel-anthology/` — HIGH

**Status:** Metadata-only `layout.tsx`, Edexcel-specific content, no guard.

**Files affected:**
- `D:/Coding/english-hub/src/app/resources/poetry/edexcel-anthology/layout.tsx`
- `D:/Coding/english-hub/src/app/resources/poetry/edexcel-anthology/page.tsx`

**Suggested fix:** Server `layout.tsx` that redirects non-Edexcel users.

---

## 3. `/resources/english-literature/` and `/resources/english-language/` — HIGH (system-wide)

### 3.1 `/resources/english-literature/page.tsx` — MEDIUM

**Status:** Completely unfiltered server component. Lists hard-coded `TEXT_GUIDES` and `POETRY_SECTIONS` with fixed links to `/resources/english-literature/aqa/*`, `/resources/english-literature/edexcel/*`, `/resources/english-literature/ocr/*`, `/resources/english-literature/caie/*`. Every user sees every link regardless of board.

**File:** `D:/Coding/english-hub/src/app/resources/english-literature/page.tsx`

**Suggested fix:** Read `getServerBoard()` and either (a) redirect the user straight to the board-scoped subpath (e.g. AQA user → `/resources/english-literature/aqa`), or (b) filter `TEXT_GUIDES`, `POETRY_SECTIONS`, and `EXAM_INFO_LINKS` down to items matching the user's board.

---

### 3.2 `/resources/english-literature/{aqa,edexcel,ocr,caie,wjec}/**` — HIGH (64 pages)

**Status:** Zero board filtering in this entire subtree. No file under `/resources/english-literature/*` imports `getServerBoard`, `useBoard`, `WrongBoardBanner`, or `requireIgcseBoard`. Every board's sub-hub and every text/poetry/paper subpage renders for every user.

Any user can go directly to e.g. `/resources/english-literature/aqa/macbeth`, `/resources/english-literature/ocr/jekyll-and-hyde`, `/resources/english-literature/caie/songs-of-ourselves-v1`, `/resources/english-literature/wjec/*`, etc. and get the full article with a canonical tag pointing to the wrong-board URL.

**Representative files** (64 total — see grep output in audit):
- `D:/Coding/english-hub/src/app/resources/english-literature/aqa/page.tsx`
- `D:/Coding/english-hub/src/app/resources/english-literature/aqa/macbeth/page.tsx`
- `D:/Coding/english-hub/src/app/resources/english-literature/aqa/inspector-calls/page.tsx`
- `D:/Coding/english-hub/src/app/resources/english-literature/aqa/jekyll-and-hyde/page.tsx`
- `D:/Coding/english-hub/src/app/resources/english-literature/aqa/christmas-carol/page.tsx`
- `D:/Coding/english-hub/src/app/resources/english-literature/aqa/poetry/page.tsx`
- `D:/Coding/english-hub/src/app/resources/english-literature/aqa/romeo-and-juliet/page.tsx`
- `D:/Coding/english-hub/src/app/resources/english-literature/aqa/grade-boundaries/page.tsx`
- `D:/Coding/english-hub/src/app/resources/english-literature/aqa/paper-2/page.tsx`
- `D:/Coding/english-hub/src/app/resources/english-literature/edexcel/page.tsx` + `macbeth`, `inspector-calls`, `jekyll-and-hyde`, `christmas-carol`, `animal-farm`, `lord-of-the-flies`, `romeo-and-juliet`, `poetry`, `paper-1`, `paper-2`, `grade-boundaries`
- `D:/Coding/english-hub/src/app/resources/english-literature/ocr/page.tsx` + `macbeth`, `inspector-calls`, `jekyll-and-hyde`, `christmas-carol`, `romeo-and-juliet`, `poetry`, `paper-1`, `paper-2`, `grade-boundaries`
- `D:/Coding/english-hub/src/app/resources/english-literature/caie/page.tsx` + 16 sub-pages (macbeth, christmas-carol, inspector-calls, jekyll-and-hyde, great-expectations, things-fall-apart, to-kill-a-mockingbird, rebecca, songs-of-ourselves-v1/v2, picnic-at-hanging-rock, blues-for-an-alabama-sky, fire-on-the-mountain, a-taste-of-honey, a-midsummer-nights-dream, a-streetcar-named-desire, unseen, poetry, paper-1, paper-2)
- `D:/Coding/english-hub/src/app/resources/english-literature/wjec/grade-boundaries/page.tsx`

**Suggested fix:** Add a top-level `layout.tsx` under each board subdir (`aqa`, `edexcel`, `ocr`, `caie`, `wjec`) that does:
```
const board = await getServerBoard()
const allowed: ExamBoard[] = ['aqa']  // or corresponding board per folder
if (board && !allowed.includes(board)) redirect('/resources/english-literature')
```
This would be 5 new layout files and would cover all 64 subpages in one stroke. Note `caie` should map to both `cambridge-0500` and `cambridge-0990`, and `wjec` should map to `eduqas`.

---

### 3.3 `/resources/english-language/{aqa,edexcel,ocr,caie,wjec}/**` — HIGH

**Status:** Same as 3.2. No board guarding anywhere in the `/resources/english-language/*` subtree. `aqa/paper-1`, `aqa/paper-2`, `aqa/techniques`, `aqa/writing-skills`, `aqa/grade-boundaries`, `edexcel/paper-1`, `edexcel/paper-2`, `edexcel/techniques`, `edexcel/writing-skills`, `edexcel/grade-boundaries` are all wide open.

**Files affected:** all pages under `D:/Coding/english-hub/src/app/resources/english-language/{aqa,edexcel,ocr,caie,wjec}/*`.

**Suggested fix:** Same as 3.2 — one `layout.tsx` per board subfolder with a server-side redirect.

---

## 4. `/revision/texts/[slug]` — HIGH

**File:** `D:/Coding/english-hub/src/app/revision/texts/[slug]/page.tsx`

**Status:** This dynamic catch-all renders a study guide for every `SET_TEXTS` slug. It calls `getSetText(slug)` but does NOT call `textAvailableForBoard(slug, board)`. It does not import `getServerBoard` at all.

**Impact:** A Cambridge 0500 user can visit `/revision/texts/macbeth` or `/revision/texts/twelfth-night` and see the full study guide even though those texts are not on their spec. This also defeats the server-side board gating that `/revision/texts/page.tsx` does at the hub level.

**Suggested fix:** Add at the top of `TextStudyGuidePage`:
```
const board = await getServerBoard()
if (board && !textAvailableForBoard(slug, board)) {
  redirect('/revision/texts')
}
```
Also restrict `generateStaticParams` to board-neutral slugs if you want to avoid building pages that will always redirect.

---

## 5. `/revision/texts/*` (individual subdirs) — OK

Verified all 11 individual subdirs (`animal-farm`, `a-view-from-the-bridge`, `anita-and-me`, `blood-brothers`, `curious-incident`, `lord-of-the-flies`, `never-let-me-go`, `of-mice-and-men`, `pigeon-english`, `things-fall-apart`, `to-kill-a-mockingbird`) have `getServerBoard()` + per-page `allowedBoards` redirects. Good.

---

## 6. `/revision/poetry/*` cluster layouts — OK

Verified:
- `/revision/poetry/power-and-conflict/layout.tsx` — redirects non-AQA
- `/revision/poetry/love-and-relationships/layout.tsx` — redirects non-AQA
- `/revision/poetry/edexcel/layout.tsx` — redirects non-Edexcel
- `/revision/poetry/ocr/layout.tsx` — redirects non-OCR
- `/revision/poetry/eduqas/layout.tsx` — redirects non-Eduqas

`/revision/poetry/unseen-poetry/` has no layout, but content is board-generic — acceptable.

---

## 7. `/igcse/*` — OK

All 104 subpages (excluding the top-level `/igcse/page.tsx` hub) use `requireIgcseBoard([...])`. The hub `/igcse/page.tsx` itself redirects GCSE users to `/revision?notice=igcse-not-in-spec`, and redirects specific IGCSE boards to their correct subpath.

**Only file without a guard:** `D:/Coding/english-hub/src/app/igcse/page.tsx` — intentional (it IS the dispatcher).

---

## 8. `/analysis/*` — MEDIUM (uses client-side banner, not redirect)

### 8.1 Folders with proper gating:

- `/analysis/macbeth/layout.tsx` — wraps with `WrongBoardBanner contentBoards={['aqa','edexcel','ocr','eduqas','edexcel-igcse']}`
- `/analysis/aqa-power-conflict/layout.tsx` — `contentBoards={['aqa']}`
- `/analysis/aqa-love-relationships/layout.tsx` — `contentBoards={['aqa']}`
- `/analysis/jekyll-hyde/layout.tsx` — uses `AnalysisBoardGate` → `['aqa','edexcel','ocr','eduqas']`
- `/analysis/christmas-carol/layout.tsx` — uses `AnalysisBoardGate` → `['aqa','edexcel','eduqas']`
- `/analysis/inspector-calls/layout.tsx` — uses `AnalysisBoardGate` → `['aqa','edexcel','ocr','eduqas','edexcel-igcse']`
- `/analysis/language-paper/layout.tsx` — uses `AnalysisBoardGate` → `['aqa']`

### 8.2 `/analysis/revision/*` — no layout (intentional)

These 23 generic revision methodology pages (`3-month-gcse-english-revision-plan`, `active-recall-techniques-gcse-english`, `night-before-gcse-english-exam`, `how-to-memorise-quotes-gcse-english`, etc.) don't need board gating — acceptable.

### 8.3 Caveat — `WrongBoardBanner` behaviour

`WrongBoardBanner` is a `'use client'` component that only renders after hydration (`if (!isHydrated) return null`). For wrong-board users:
- First paint: full article renders underneath (preserves SEO).
- After hydration: fixed-position backdrop (`z-[60]`) covers the article.

This means:
- Wrong-board users briefly see the article before the banner locks it. **LOW severity** for content leakage, but noticeable.
- Keyboard/screen reader users may still navigate the article underneath the overlay (the overlay has `role="dialog"` but does not use `inert` or hide the background from assistive tech).
- Users with JS disabled see the article indefinitely.

**If STRICT gating is the requirement, these 7 `/analysis/*` layouts should be converted to server-side `redirect()` layouts like `/revision/poetry/power-and-conflict/layout.tsx` instead of the client banner.**

---

## 9. Teacher Library — partial leakage

### 9.1 `/resources/teacher-library/lesson-plans/page.tsx` — OK

Filters `LESSON_PLANS` by `lessonPlanMatchesBoard(p.examBoard, board)`. Good.

### 9.2 `/resources/teacher-library/mark-schemes/page.tsx` — OK

Similar filter. Good.

### 9.3 `/resources/teacher-library/revision-packs/page.tsx` — OK

Similar filter. Good.

### 9.4 `/resources/teacher-library/homework/page.tsx` — LOW

Reads `getServerBoard()` and renders the board badge, but does NOT filter the `HOMEWORK` array. In practice the listed homework tasks are pedagogically generic (Year 10–11 tagging, no text-specific entries matched for Macbeth/Inspector Calls/etc.), so no cross-board content is visible — but the plumbing suggests a filter is expected and was forgotten.

**File:** `D:/Coding/english-hub/src/app/resources/teacher-library/homework/page.tsx`

**Suggested fix:** Either drop the `getServerBoard()` call if no filtering is intended, or add a filter for consistency with siblings.

### 9.5 `/resources/teacher-library/starters/page.tsx` — LOW

Same pattern as 9.4. Board read but not used for filtering. Content is generic.

### 9.6 `/resources/teacher-library/worksheets/page.tsx` — LOW

Same pattern as 9.4. Board read but not used for filtering. Content is generic.

### 9.7 `/resources/teacher-library/page.tsx` (hub) — LOW

No board check at all. The hub lists 6 category cards which are all generic — not a content leak, just inconsistent with sibling pages.

---

## 10. Mock exams — OK

- `/mock-exams/page.tsx` — filters `EXAM_CARDS` by user board via `useBoard`, shows "coming soon" for non-AQA.
- `/mock-exams/[id]/layout.tsx` — uses `requireBoard(['aqa'], '/mock-exams')`. Good.

---

## 11. Navigation, homepage, sidebar — OK

- `/app/page.tsx` — reads `getServerBoard()` and conditionally renders `BoardDashboardHero` (board-aware) or `MarketingHero` (no board).
- `BoardDashboardHero` — quick links generated per board.
- `WhatsInsideSection` — takes `board` prop and filters.
- `MockExamsSection` — takes `board` prop.
- `CourseGridSection` — takes `board` prop.
- `BoardSidebar` — uses a separate, legacy `useBoardStore` (`KS3`/`AQA`/`Edexcel`/`CAIE`/`OCR`/`WJEC`) which is NOT the `english-hub-board` cookie. This may be a secondary source of bugs where the two stores drift, but it is not itself a content leak — it only controls sidebar visibility/header labels.
- `/revision/_components/revision-shell.tsx` — filters nav items by board via `boards` property on each item, honouring `igcseOnly` / `gcseOnly` flags. Good.

**Risk:** The existence of TWO parallel board stores (`@/lib/board/board-store` + cookie, vs. `@/store/board-store` Zustand for the sidebar/practice) is a long-term data-consistency risk — `/practice/page.tsx` filters on `useBoardStore().selectedBoard`, which is not the cookie. Outside the scope of this audit to fix, but worth flagging.

---

## 12. Miscellaneous scattered leaks

### 12.1 `/resources/model-answers/page.tsx` — LOW

Lists generic question-type categories (language analysis, creative writing, literature essay, persuasive writing) with description text that name-drops Macbeth, A Christmas Carol, An Inspector Calls. The links go to `/resources/model-answers/[slug]` category pages. No board filter.

**Severity:** LOW — metadata-only leakage (text mention in description).

### 12.2 `/resources/context/`, `/resources/themes/`, `/resources/writing-skills/`, `/resources/glossary/` — LOW

Name-drop board-specific texts in descriptive copy. No board gate. LOW severity — generic reference material, useful to any board.

### 12.3 `/resources/study-tools/flashcards/page.tsx` — OK

Uses `useBoard` to filter decks. Good.

### 12.4 `/revision/flashcards/page.tsx` — OK

Re-exports the flashcards page. Inherits the filter.

---

## Summary of required fixes by severity

### HIGH — wrong-board content visible in the main revision UX

1. **24 text pages under `/resources/revision-notes/*`** — add layout.tsx guards.
2. **`/revision/texts/[slug]/page.tsx`** — add `textAvailableForBoard` check.
3. **`/resources/english-literature/{aqa,edexcel,ocr,caie,wjec}/**`** (~64 files) — add 5 layout.tsx guards.
4. **`/resources/english-language/{aqa,edexcel,ocr,caie,wjec}/**`** — add 5 layout.tsx guards.
5. **`/resources/poetry/power-and-conflict/layout.tsx`** — convert to server redirect (non-AQA).
6. **`/resources/poetry/love-and-relationships/layout.tsx`** — convert to server redirect (non-AQA).
7. **`/resources/poetry/edexcel-anthology/layout.tsx`** — convert to server redirect (non-Edexcel).

### MEDIUM — hub-level filter drift or partial gating

1. **`/resources/revision-notes/page.tsx`** — delete local `TEXTS`/`boardToLabels`, use `getSetTextsForBoard`, convert to server component.
2. **`/resources/english-literature/page.tsx`** — filter `TEXT_GUIDES` / `POETRY_SECTIONS` / `EXAM_INFO_LINKS` by board.
3. **`/analysis/macbeth`, `/analysis/aqa-*`, `/analysis/jekyll-hyde`, `/analysis/christmas-carol`, `/analysis/inspector-calls`, `/analysis/language-paper`** — if STRICT gating is required, replace client `WrongBoardBanner` with server redirect. If SEO fallback is intentional, keep as-is.

### LOW — metadata leaks or non-filtering board reads

1. `/resources/teacher-library/homework/page.tsx` — inconsistent pattern, no content leak.
2. `/resources/teacher-library/starters/page.tsx` — same.
3. `/resources/teacher-library/worksheets/page.tsx` — same.
4. `/resources/teacher-library/page.tsx` — no board context at all.
5. `/resources/model-answers/page.tsx` — name-drops board-specific texts.
6. `/resources/context`, `/resources/themes`, `/resources/writing-skills`, `/resources/glossary` — name-drops.

### Data consistency (out of scope, but noted)

- Two parallel board stores: `english-hub-board` cookie (`@/lib/board/board-store`, `@/hooks/useBoard`) vs. Zustand `@/store/board-store` (`KS3`/`AQA`/etc). Sidebar, `/practice`, and `/mock-exams` touch both. Risk of desync.
- `/resources/revision-notes/page.tsx` has its own hard-coded `TEXTS` array divergent from `src/lib/board/set-texts.ts`.
- `/resources/poetry/PoetryHubClient.tsx` has its own hard-coded `ANTHOLOGY_SECTIONS`, `EDEXCEL_SECTIONS`, `EDUQAS_SECTIONS`.
