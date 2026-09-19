/**
 * Which board shelves rest on a specification we have actually read.
 *
 * WHY THIS EXISTS, and it is a correction of my own work. On 19 September 2026
 * the board shelves were added to the sitemap, because they are the page every
 * board picker points at and none of them was being submitted. That was right
 * for most of them and wrong for five.
 *
 * The four A-Level boards carry a BYTE-IDENTICAL nine-text list:
 *
 *   A Doll's House, A Streetcar Named Desire, Antony and Cleopatra, Hamlet,
 *   King Lear, Othello, The Great Gatsby, The Handmaid's Tale, The Waste Land
 *
 * Four different awarding bodies do not set the same nine texts. That is the
 * signature of one list copied four times, and prescribed-texts.ts has said so
 * since it was written. Edexcel IAL's twelve are equally unread.
 *
 * Submitting those five to Google meant asking for traffic to a page whose
 * content I already knew was unverified - which is a worse failure than not
 * submitting them, because it is one I introduced while fixing something else.
 *
 * WHAT THIS DOES NOT DO. It does not hide the pages. They still render and
 * remain reachable; a student who lands on one is better off than on nothing,
 * and the shelf is honest about which texts have guides. It only stops us
 * ASKING for that traffic, and stops the board pickers advertising a shelf we
 * cannot stand behind.
 */

import type { ExamBoard } from './board-config'
import { isVerifiedBoard } from './prescribed-texts'

/**
 * Boards whose set-text list was read from a specification after
 * prescribed-texts.ts was written, so `isVerifiedBoard` does not know them.
 *
 * Each has its own module recording the document and version:
 *   edexcel-igcse-anthology.ts, edexcel-igcse-literature.ts, cambridge-0475.ts
 */
const VERIFIED_SINCE: ExamBoard[] = ['edexcel-igcse', 'edexcel-igcse-lang', 'cambridge-0475']

/**
 * Boards whose set-text list has NOT been read from a specification.
 *
 * BELT AND BRACES, AND THAT IS WORTH SAYING PLAINLY. None of these appears in
 * PRESCRIBED either, so `isVerifiedBoard` already returns false for all five
 * and this list changes no behaviour today - a mutation test removing it killed
 * nothing, which is how that was established rather than assumed.
 *
 * It stays for two reasons. It records WHY each is unverified where a reader
 * will find it, and it fails safe if somebody later adds an A-Level board to
 * PRESCRIBED without having read the document - which is exactly the mistake
 * this file exists to catch.
 */
const UNVERIFIED: ExamBoard[] = [
  // Byte-identical nine-text lists. One list, copied four times.
  'aqa-a-level',
  'edexcel-a-level',
  'ocr-a-level',
  'eduqas-a-level',
  // Twelve texts, never read from the IAL specification. Its structure was
  // established on 19 September 2026 - 21 prescribed poems in Unit 1, 79 in
  // Unit 4 - and that is not yet reflected in the set-text data.
  'ial-edexcel',
]

/** Is this shelf backed by a specification somebody has read? */
export function shelfIsVerified(board: ExamBoard): boolean {
  if (UNVERIFIED.includes(board)) return false
  return isVerifiedBoard(board) || VERIFIED_SINCE.includes(board)
}

/** The unverified shelves, for a caller that wants to say so. */
export function unverifiedShelves(): readonly ExamBoard[] {
  return UNVERIFIED
}
