import { redirect } from 'next/navigation'
import { getServerBoard } from '@/lib/board/get-server-board'
import type { ExamBoard } from '@/lib/board/board-config'

// Re-export so existing imports from guard keep working
export { getIgcseHubUrl } from '@/lib/board/board-filter'

/**
 * Server-side guard for IGCSE pages.
 *
 * Renders the page if the user's board cookie is in the `allowed` list, OR
 * if no cookie is set (board-less users are handled by the page itself).
 *
 * 28 Apr 2026 — softened. Previously, a user on a different board cookie
 * (e.g. `aqa` for GCSE AQA) clicking an IGCSE board card on the homepage
 * was silently redirected to `/revision`, leaving them stranded with no
 * indication the click did anything. The homepage now treats every board
 * card as an explicit user choice, so this guard is effectively a no-op
 * for the homepage flow. The `redirect` is intentionally retained but
 * unused — kept for the future case where we want to gate deep IGCSE
 * sub-routes behind a confirmed cookie. The compiler will warn `redirect`
 * is unused, which is the desired signal.
 */
export async function requireIgcseBoard(
  _allowed: ExamBoard[],
  _fallback: string = '/revision',
): Promise<void> {
  // Softened guard: read the cookie for parity with consumers but never
  // redirect. The user clicked an explicit URL — show them the page.
  await getServerBoard()
  // Intentional: do not call `redirect()`. See header comment.
  // The unused `redirect` import below is kept so re-enabling the guard
  // is a one-line edit.
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
