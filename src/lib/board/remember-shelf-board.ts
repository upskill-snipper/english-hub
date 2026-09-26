/**
 * Should a /set-texts/<board> URL be remembered as the visitor's board?
 *
 * THE DEFECT (19 September 2026). Choosing a board sends a student to
 * /set-texts/<id>?setBoard=<id>, and the middleware writes the cookie from that
 * parameter. But arriving at /set-texts/aqa DIRECTLY - from Google, a shared
 * link, a bookmark - carries no parameter, so nothing was written. The student
 * saw the right shelf, clicked a text, and was asked "which exam board do you
 * study?" while looking at it. Confirmed on production before this was added.
 *
 * The URL names the board explicitly and the page is titled with it, so it is
 * as clear a choice as clicking a card.
 *
 * THREE DELIBERATE LIMITS, because this area has a history worth respecting.
 *
 * NO REDIRECT. The `BOARD_LANDING_REDIRECTS` map that used to live in the
 * middleware did redirect, and that was its bug: deep links were rewritten to
 * /revision and the visitor lost the page they had clicked. The caller attaches
 * a cookie to the response for the page that was actually requested.
 *
 * ONE EXCEPTION, AND IT IS NOT THIS FUNCTION'S. Since 26 September 2026 a board
 * that sets no texts (see SHELFLESS_BOARD_HUBS in board-landing.ts) has no shelf
 * page: the middleware 308s /set-texts/<board> to the board's hub. It calls this
 * as well, so the visitor arriving by that old URL is remembered exactly as they
 * were before, under the same never-overwrite rule. This function still only
 * answers "which board", and still never redirects anything itself.
 *
 * NEVER OVERWRITES. A student with AQA stored who opens a shared Edexcel shelf
 * link keeps AQA. Silently reassigning the board their whole account is filtered
 * by - their sidebar, their texts, their mark schemes - because they followed a
 * friend's link would be a worse bug than the one being fixed. The page shows a
 * mismatch banner instead.
 *
 * VALIDATED. A junk path segment writes nothing, so a crawler cannot put an
 * arbitrary value into a visitor's cookie jar.
 */

import { BOARDS } from './board-config'
import type { ExamBoard } from './board-config'

/** Exactly /set-texts/<segment>, with or without a trailing slash. */
const SHELF_PATH = /^\/set-texts\/([a-z0-9-]+)\/?$/

/**
 * The board to write, or null to leave the cookie alone.
 *
 * `existingBoard` is the current cookie value, or null/undefined when absent.
 */
export function boardToRememberFromPath(
  pathname: string | null | undefined,
  existingBoard: string | null | undefined,
): ExamBoard | null {
  if (!pathname) return null
  // A board already chosen is the visitor's, not the link's.
  if (existingBoard) return null

  const match = SHELF_PATH.exec(pathname)
  if (!match) return null

  const candidate = match[1]
  if (!candidate) return null

  const valid = BOARDS.some((b) => b.id === candidate)
  return valid ? (candidate as ExamBoard) : null
}
