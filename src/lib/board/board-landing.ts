/**
 * Where choosing an exam board actually takes you.
 *
 * THE DEFECT. Every board picker on the site sent the student to `/revision`,
 * a board-agnostic hub, and the destination was hard-coded as a string literal
 * in thirty-six places across four files - the homepage, /board-select,
 * /exam-boards and the three-step wizard. There was no map and no single place
 * to change it. A student answered "which board do you study?" and landed on a
 * page that did not mention their board, let alone their texts.
 *
 * The founder's instruction was explicit: after choosing a board, the next page
 * should be their set texts. That is what this returns.
 *
 * WHY THE QUERY PARAMETER IS STILL THERE. `?setBoard=<id>` is what the
 * middleware reads to write the `english-hub-board` cookie; it then redirects to
 * the clean URL, so the student never sees it. Dropping it would land them on
 * the right page with the wrong board remembered, which is worse than before.
 * The id therefore appears twice on purpose - once in the path, once in the
 * query - and a test asserts the two always agree, because a mismatch would set
 * one board and display another.
 *
 * That duplication is also a small safety gain over the old shape. The previous
 * regression this area is tested for - a GCSE card carrying an IGCSE board id -
 * was invisible in `/revision?setBoard=edexcel-igcse`. In
 * `/set-texts/edexcel-igcse?setBoard=edexcel-igcse` it is in the path, where a
 * reader will see it.
 */

import type { ExamBoard } from './board-config'

/**
 * The page a student lands on after picking `board`.
 *
 * Both halves carry the same id: the path decides what is shown, the query
 * tells the middleware what to remember.
 */
export function boardLandingHref(board: ExamBoard | string): string {
  return `/set-texts/${board}?setBoard=${board}`
}

/**
 * The board shelf itself, with no cookie write.
 *
 * For links used when the board is already known and stored - a sidebar entry,
 * a breadcrumb - where re-setting the cookie would be a pointless redirect.
 */
export function boardShelfHref(board: ExamBoard | string): string {
  return `/set-texts/${board}`
}
