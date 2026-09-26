/**
 * The way back out of a set text.
 *
 * WHAT WAS REPORTED. A student on /revision/texts/the-merchant-of-venice with
 * the board cookie set to Edexcel IGCSE Language clicked "All your set texts"
 * and landed in the language anthology. They had been reading Shakespeare.
 *
 * WHY IT HAPPENED, and it is not the obvious reason. The link was not broken
 * and the shelf was not empty: 4EA1 has twenty set texts, all of them anthology
 * prose and poetry. The back link went to `/set-texts/<board>` unconditionally,
 * so it was answering "what are this student's set texts" when the question a
 * back link answers is "where was I". Those are the same page only while the
 * text is one the board actually sets. The Merchant of Venice is set by AQA,
 * Edexcel, OCR, Eduqas and Edexcel IGCSE Literature. It is not on 4EA1, so the
 * destination could not contain the thing the student was looking at.
 *
 * THE RULE. Never send "back" to a list that does not contain the page you are
 * leaving. So the board shelf is used only when we positively know this text is
 * on that board, and /revision/texts - which holds all of them - is used when
 * we do not. Positively: an unrecognised slug is not evidence that a text is
 * off-course, it is evidence that we have no record of it, and the two must not
 * produce the same answer. That distinction is the same one that stopped this
 * rail telling an AQA student A Christmas Carol was not on their course.
 *
 * The caller needs `isBoardShelf` as well as the href, because the label has to
 * agree with the destination. "All your set texts" pointing at every text on
 * the site is the same class of mistake in the other direction.
 */

import { textAvailableForBoard } from '@/lib/board/set-texts'
import type { ExamBoard } from '@/lib/board/board-config'
import { boardHasShelf, boardShelfHref } from '@/lib/board/board-landing'
import { canonicalTextSlug, isKnownSetText } from '@/lib/revision/text-slug-aliases'

/** Every set text on the site, across all fifteen specifications. */
export const ALL_TEXTS_HREF = '/revision/texts'

export interface TextBackLink {
  href: string
  /** True when the destination is the student's own board shelf. */
  isBoardShelf: boolean
}

/**
 * Where "back" should go from the page for `slug`.
 *
 * `board` is null before hydration on the client, and that is not a problem:
 * the all-texts index is the correct answer when the board is unknown, rather
 * than a guess at the wrong one.
 */
export function textBackLink(slug: string, board: ExamBoard | null | undefined): TextBackLink {
  if (!board) return { href: ALL_TEXTS_HREF, isBoardShelf: false }
  // `boardHasShelf` cannot change the answer today - a board with no shelf sets
  // no text, so `textAvailableForBoard` is already false - but it keeps "your set
  // texts" from ever labelling a specification hub if the two lists drift.
  const onThisBoard =
    boardHasShelf(board) &&
    isKnownSetText(slug) &&
    textAvailableForBoard(canonicalTextSlug(slug), board)
  return onThisBoard
    ? { href: boardShelfHref(board), isBoardShelf: true }
    : { href: ALL_TEXTS_HREF, isBoardShelf: false }
}
