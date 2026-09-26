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
 *
 * ── AND THEN THE RULE WAS HALF RIGHT (26 September 2026) ────────────────────
 *
 * Choosing Cambridge First Language English (0500) landed the student on a page
 * headed "Your set texts" that said the specification has no prescribed set
 * texts. True, and useless: the founder's words were "If there is no texts for
 * this, why is it there? Remove it if not serving any purpose." KS3, 0500 and
 * 0990 set no texts at all - by design, not as a gap - so for them "your set
 * texts" is an empty page and the useful next page is the specification's own
 * hub, which has the papers, the skills and the practice.
 *
 * So the question "which boards have no shelf, and where do they go instead" is
 * answered HERE, once, and everything that could send a student to an empty
 * shelf asks this file: the two helpers below, the shelf page itself, the
 * middleware's permanent redirect for old links, the sitemap, and every board
 * picker. It is a hand-written list rather than a computation over the set-text
 * register because this file is imported by the middleware and by client
 * components, and neither should carry 1,400 lines of set-text data to learn
 * three board ids. The list cannot drift silently:
 * a-board-with-no-texts-lands-on-its-hub.test.ts recomputes it from buildShelf
 * and fails in both directions.
 */

import type { ExamBoard } from './board-config'

/**
 * The boards that prescribe no set texts, each mapped to the page a student
 * should land on instead of an empty shelf.
 *
 * Every entry must be a real page; the test named above checks each one exists.
 */
export const SHELFLESS_BOARD_HUBS = {
  ks3: '/ks3',
  'cambridge-0500': '/igcse/cambridge/0500',
  'cambridge-0990': '/igcse/cambridge/0990',
} as const satisfies Partial<Record<ExamBoard, string>>

/**
 * Every board with a hand-built specification hub worth linking to.
 *
 * Those pages carry paper-by-paper structure the shelf deliberately does not
 * duplicate, so the shelf links to them. The shelfless boards are included
 * because their hub is where they land.
 */
const SPEC_HUBS: Partial<Record<ExamBoard, string>> = {
  ...SHELFLESS_BOARD_HUBS,
  'edexcel-igcse': '/igcse/edexcel',
  'edexcel-igcse-lang': '/igcse/edexcel-lang',
  'ial-edexcel': '/revision/ial',
}

/**
 * An own key, not an inherited one, so `constructor` or `toString` arriving from
 * a URL segment is not mistaken for a board. Not `Object.hasOwn`: this file runs
 * in the browser and that is missing before Safari 15.4.
 */
function own(map: object, key: string): boolean {
  return Object.prototype.hasOwnProperty.call(map, key)
}

/**
 * The hub a shelfless board is sent to, or null for a board that has a shelf.
 *
 * Accepts any string because callers include the middleware, which reads the
 * board from a URL segment before anything has validated it.
 */
export function shelflessBoardHub(board: ExamBoard | string): string | null {
  return own(SHELFLESS_BOARD_HUBS, board)
    ? SHELFLESS_BOARD_HUBS[board as keyof typeof SHELFLESS_BOARD_HUBS]
    : null
}

/** True when /set-texts/<board> is a page worth showing a student. */
export function boardHasShelf(board: ExamBoard | string): boolean {
  return shelflessBoardHub(board) === null
}

/** The specification's own hub page, where one exists. */
export function specHubHref(board: ExamBoard | string): string | null {
  return own(SPEC_HUBS, board) ? (SPEC_HUBS[board as ExamBoard] ?? null) : null
}

/**
 * The page a student lands on after picking `board`.
 *
 * Both halves carry the same id: the path decides what is shown, the query
 * tells the middleware what to remember. A board with no set texts lands on its
 * hub instead of an empty shelf, with the query kept for the same reason.
 */
export function boardLandingHref(board: ExamBoard | string): string {
  const hub = shelflessBoardHub(board)
  if (hub) return `${hub}?setBoard=${board}`
  return `/set-texts/${board}?setBoard=${board}`
}

/**
 * The board shelf itself, with no cookie write.
 *
 * For links used when the board is already known and stored - a sidebar entry,
 * a breadcrumb - where re-setting the cookie would be a pointless redirect. For
 * a board with no set texts this is its hub, for the reason given above.
 */
export function boardShelfHref(board: ExamBoard | string): string {
  return shelflessBoardHub(board) ?? `/set-texts/${board}`
}
