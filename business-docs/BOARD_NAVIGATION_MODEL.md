# Board Navigation Model — Canonical Spec (v2)

**Date**: 2026-05-02
**Trigger**: Lauren Johnson reported on 02 May that "clicking an exam board takes you to a specific text, not the main hub. Click back, the board changes silently."
**Status**: Implementation in progress.

---

## Problem statement (from a 10-agent read-only audit)

The site has five interlocking bugs that conspire to produce the user-reported symptom:

1. **Homepage cards bypass cookie write.** 6 of 7 board cards (`AQA`, `Pearson Edexcel GCSE`, `OCR`, `Eduqas`, `Cambridge IGCSE`, `Pearson Edexcel IGCSE Lang A`) navigate to a content URL that's not in `BOARD_LANDING_REDIRECTS`. No cookie is ever set.
2. **First-visit silent redirect.** The 7th card (`Pearson Edexcel IGCSE Lit` → `/igcse/edexcel`) IS in the redirect map. Middleware silently rewrites the URL to `/revision`, so the user ends up on the unified hub instead of the IGCSE-specific page they clicked. From `/revision`, clicking "Poetry" leads to `/revision/poetry` which (for `edexcel-igcse` cookie) offers a single CTA to `/igcse/edexcel/poetry` — a list of specific poems. This is the "lands on a specific text" symptom.
3. **No cookie → store bridge.** When middleware sets the cookie, the Zustand store (which `useBoard()` reads) stays empty. Sidebar / badge / footer components show "no board" while server-rendered content shows the new board. This is the "different board without my knowledge" symptom.
4. **Sidebar reads cookie, page reads URL.** When a user with `aqa` cookie deep-links to `/igcse/edexcel`, the page renders Edexcel-IGCSE content (URL-driven) but the sidebar shows AQA (cookie-driven). The two disagree.
5. **`requireIgcseBoard` is a no-op.** Allows mismatch to fester silently with no banner or notice.

## Design principles

1. **The cookie reflects the user's currently-selected board.** Always.
2. **Cookie writes happen ONLY on explicit board choices.** Homepage cards, board-select cards, BoardSwitcher menu, BoardSelectorSection wizard.
3. **Deep-link navigation NEVER writes the cookie.** A user who visits `/igcse/edexcel` from email or a bookmark sees that page's content as-is. If their cookie says a different board, they see a non-blocking banner.
4. **Cookie and Zustand store stay in sync.** Bidirectional repair on hydration. Single `setBoard()` API writes both.
5. **`/revision` is the canonical "Your Hub".** Every board card lands the user on `/revision` (after cookie write). The hub renders per-board content via `getServerBoard()` dispatch (already correct).

## Mechanism

### Explicit board choice → URL with `?setBoard=<id>`

Every board-card / board-switcher action navigates to a URL with a `?setBoard=<board-id>` query parameter. The destination is `/revision` (the unified hub).

Example: clicking the homepage's "AQA" card navigates to `/revision?setBoard=aqa`.

### Middleware handles `?setBoard=<id>` first

Before any other logic, middleware checks for the `?setBoard=<id>` query param:

```ts
const setBoardParam = request.nextUrl.searchParams.get('setBoard')
if (setBoardParam && isValidBoard(setBoardParam)) {
  const cleanUrl = new URL(request.nextUrl)
  cleanUrl.searchParams.delete('setBoard')
  const response = NextResponse.redirect(cleanUrl)
  response.cookies.set('english-hub-board', setBoardParam, BOARD_COOKIE_OPTS)
  return response
}
```

Effect: cookie is written, URL is cleaned, user lands on the destination URL with the new board active.

### Remove `BOARD_LANDING_REDIRECTS` first-visit cookie-write

The unconditional first-visit redirect at `middleware.ts:311–325` is removed. Direct visits to `/igcse/edexcel`, `/igcse/cambridge/0500`, etc. render their pages as-is (no silent URL rewrite, no silent cookie set). If a user wants to set the cookie, they go through the explicit `?setBoard=<id>` mechanism above.

### Cookie → store bridge

`board-store.ts onRehydrateStorage` is updated to also pull the cookie value into the store when the cookie has a board but localStorage is empty. After hydration, store and cookie always agree.

### `requireIgcseBoard` becomes `getBoardMismatchState()`

Returns `{ matched: boolean, currentBoard: ExamBoard | null }`. Pages use it to decide whether to render `<BoardMismatchBanner>`. Never redirects.

### `<BoardMismatchBanner>` component

Non-blocking, dismissable amber banner at the top of board-specific pages. Renders when cookie ≠ page's intended board. Two CTAs:
- "Switch to {pageBoard}" — calls `setBoard(pageBoard)` and refreshes the page (cookie + store + URL all match).
- "Stay on {cookieBoard}" — dismisses the banner; the user continues to view this page's content with their existing cookie.

## Acceptance criteria

A. **Click any of the 7 homepage cards** → cookie is set to that board → user lands on `/revision` → hero says "Your {board} Hub" → sidebar matches → footer matches.
B. **Click browser back** → returns to homepage → cookie unchanged → no flips.
C. **Click a different homepage card** → cookie updates to new board → `/revision` re-renders for new board → sidebar/footer update.
D. **Deep-link to `/igcse/edexcel` with `aqa` cookie** → page renders Edexcel IGCSE Lit content + banner shows "viewing IGCSE Edexcel; your board is AQA — switch?".
E. **Click "Switch" on banner** → cookie + store update → page re-renders with sidebar matching.
F. **Open `/revision` with no cookie** → boardless hub shown OR redirect to `/board-select` (TBD per page; the existing fallback is acceptable).
G. **`/revision/poetry` for A-Level/IAL/KS3/cambridge-0475/edexcel-igcse-lang** → shows a board-appropriate "your board doesn't sit poetry separately, here's where to go" branch instead of "Choose your exam board".
H. `npm run typecheck` and `npm run build` pass.

## Implementation surfaces (15 file partitions)

| # | File / surface | Change |
|---|---|---|
| I1 | `src/middleware.ts` | Add `?setBoard=<id>` handler at top. Remove BOARD_LANDING_REDIRECTS first-visit cookie-write block. |
| I2 | `src/app/page.tsx` | Update all 7 board card hrefs to `/revision?setBoard=<id>`. |
| I3 | `src/app/board-select/page.tsx` | Same href update + ensure BoardCard wraps Link with the right href. |
| I4 | `src/lib/board/board-store.ts` | Add cookie → store bridge in `onRehydrateStorage`. |
| I5 | `src/components/board/BoardMismatchBanner.tsx` (NEW) | Non-blocking banner component. |
| I6 | `src/app/igcse/_lib/guard.ts` | Replace `requireIgcseBoard` no-op with `getBoardMismatchState()`. |
| I7 | `src/app/igcse/edexcel/page.tsx` + `src/app/igcse/cambridge/page.tsx` + `src/app/igcse/edexcel-lang/page.tsx` | Use `getBoardMismatchState()` + render `<BoardMismatchBanner>` when mismatched. |
| I8 | `src/app/revision/poetry/page.tsx` | Add proper branches for A-Level/IAL/KS3/cambridge-0475/edexcel-igcse-lang (replace boardless-fallback). |
| I9 | `src/components/layout/header.tsx` | Update BoardSwitcher to use `?setBoard=<id>` mechanism for consistency. |
| I10 | `src/components/board/BoardSelectorSection.tsx` | Ensure `handleSelect` writes both cookie and store; redirect to `/revision`. |
| I11 | Dead code cleanup: `src/components/layout/board-sidebar.tsx`, `src/lib/board/board-filter.ts BOARD_SPECIFIC_PATH_PREFIXES`, `src/components/board/BoardGate.tsx initialBoard`, `src/components/board/BoardGuard.tsx` | Remove or document. |
| I12 | `src/app/revision/_components/recently-studied.tsx` | Filter candidate poem paths by current board cookie. |
| I13 | `src/components/layout/header.tsx` | Make nav links more board-id-aware (if applicable). |
| I14 | `src/__tests__/board-navigation.test.ts` (NEW) | Smoke tests for the model. |
| I15 | This doc (already written) | Reference. |

## QA gates

- Q1. `npm run typecheck` passes.
- Q2. `npm run build` passes.
- Q3. Smoke test each of the 7 cards in code: click → cookie + URL + content all consistent.
- Q4. Cross-board deep-link banner verification.
- Q5. Browser back/forward preserves cookie state.
