import { redirect } from 'next/navigation'
import { getServerBoard } from './get-server-board'
import type { ExamBoard } from './board-store'

/**
 * Redirects the user to `fallback` if they have a board cookie set
 * but it's not in the `allowed` list. If they have no board set yet,
 * the page is allowed to render (board-select layer handles the prompt).
 */
export async function requireBoard(
  allowed: ExamBoard[],
  fallback = '/revision'
) {
  const board = await getServerBoard()
  if (board && !allowed.includes(board)) {
    redirect(fallback)
  }
}
