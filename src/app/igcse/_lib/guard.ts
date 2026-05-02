/**
 * IGCSE board guard helpers.
 *
 * Two APIs:
 * - getBoardMismatchState(allowed) — preferred. Returns { matched, currentBoard }
 *   for use with <BoardMismatchBanner>. Never redirects.
 * - requireIgcseBoard(allowed) — legacy no-op shim retained for backward compat
 *   while the 127 existing callers across /igcse/* migrate to the new pattern.
 *
 * Migration: each page that currently calls `await requireIgcseBoard(['edexcel-igcse'])`
 * should add `const mismatch = await getBoardMismatchState(['edexcel-igcse'])` and
 * render `<BoardMismatchBanner pageBoard="edexcel-igcse" />` when `!mismatch.matched`.
 *
 * See business-docs/BOARD_NAVIGATION_MODEL.md (02 May 2026) for context.
 */

import { redirect } from 'next/navigation'
import { getServerBoard } from '@/lib/board/get-server-board'
import type { ExamBoard } from '@/lib/board/board-config'

// Re-export so existing imports from guard keep working
export { getIgcseHubUrl } from '@/lib/board/board-filter'

/**
 * Result of the board-mismatch check.
 * - `matched: true` if the user's cookie matches one of the page's allowed
 *   boards, OR if no cookie is set (boardless users see content as-is).
 * - `currentBoard`: the user's cookie board, or null.
 */
export interface BoardMismatchState {
  matched: boolean
  currentBoard: ExamBoard | null
}

/**
 * Server-side helper for IGCSE pages (and other board-pinned pages) to
 * determine whether the user's cookie matches the page's expected board(s).
 *
 * Pages call this and pass the result into <BoardMismatchBanner> so the user
 * gets a non-blocking notice when their cookie disagrees with the URL they're
 * on. Replaces the prior `requireIgcseBoard` redirect-or-noop pattern.
 */
export async function getBoardMismatchState(
  allowed: readonly ExamBoard[],
): Promise<BoardMismatchState> {
  const board = await getServerBoard()
  if (!board) {
    // No cookie → no mismatch (treat boardless users as "no opinion").
    return { matched: true, currentBoard: null }
  }
  return {
    matched: allowed.includes(board),
    currentBoard: board,
  }
}

/**
 * @deprecated Use `getBoardMismatchState` with `<BoardMismatchBanner>` instead.
 *
 * Legacy no-op shim. Awaits `getServerBoard()` for parity with consumers but
 * never redirects. Retained while the ~127 existing callers across the IGCSE
 * tree migrate to the new pattern.
 */
export async function requireIgcseBoard(
  _allowed: ExamBoard[],
  _fallback: string = '/revision',
): Promise<void> {
  await getServerBoard()
  // Intentional no-op. The redirect import is retained so re-enabling the
  // guard is a one-line edit if abuse ever surfaces.
  void redirect
}

/** Convenience: all IGCSE boards. */
export const ALL_IGCSE_BOARDS: ExamBoard[] = [
  'edexcel-igcse',
  'edexcel-igcse-lang',
  'cambridge-0500',
  'cambridge-0990',
  'cambridge-0475',
]

/** Convenience: both Cambridge boards (for shared reading/composition). */
export const CAMBRIDGE_BOARDS: ExamBoard[] = ['cambridge-0500', 'cambridge-0990']

/** Convenience: GCSE-only boards (for detection). */
export const GCSE_BOARDS: ExamBoard[] = ['aqa', 'edexcel', 'ocr', 'eduqas']
