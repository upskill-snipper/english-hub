import { redirect } from 'next/navigation'
import { getServerBoard } from '@/lib/board/get-server-board'
import type { ExamBoard } from '@/lib/board/board-config'

// Re-export so existing imports from guard keep working
export { getIgcseHubUrl } from '@/lib/board/board-filter'

/**
 * Server-side guard for IGCSE pages.
 *
 * If the user has a board cookie set and it's not in the `allowed` list,
 * they are redirected to `fallback` (default `/revision`).
 *
 * If no board is set at all, the page is allowed to render — board-less
 * users are handled separately by the IGCSE hub page itself.
 */
export async function requireIgcseBoard(
  allowed: ExamBoard[],
  fallback: string = '/revision',
) {
  const board = await getServerBoard()
  if (board && !allowed.includes(board)) {
    redirect(fallback)
  }
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

