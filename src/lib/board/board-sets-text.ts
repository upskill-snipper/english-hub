/**
 * Does this board set this text in any exam series we hold?
 *
 * WHY THIS IS NOT textAvailableForBoard. That reads `boards` in set-texts.ts,
 * and for cambridge-0475 those rows record one series, 2027, because they also
 * fill the student's shelf. Cambridge rotates its list every year, and
 * cambridge-0475.ts holds 2026, 2027 and 2028. So on 23 October 2026, for a
 * Cambridge reader of An Inspector Calls or The Tempest (2028 drama texts),
 * the rail said "Not on your course. Your board does not set this text." while
 * the placement card beside it, which reads every held series, said "For the
 * exam series 2028 ... You study one of these five plays." A 2028 candidate,
 * who began a two-year course in September 2026, was given both answers and
 * the rail's was false. The War of the Worlds, a 2026 prose text, had the same
 * contradiction for a 2026 candidate.
 *
 * "Your board does not set this" is the strong claim, so it now needs every
 * held series to agree. The shelf is untouched: a 2027-only shelf is a
 * separate decision, and putting a 2028 text on it would tell a 2026 or 2027
 * candidate to revise a play that is not on their paper.
 *
 * Only Cambridge rotates among the boards we hold placements for. Every other
 * board is answered by set-texts.ts alone.
 */

import type { ExamBoard } from './board-config'
import { CAMBRIDGE_0475 } from './cambridge-0475'
import { textAvailableForBoard } from './set-texts'

/** Every slug some held Cambridge 0475 series sets, on any paper. */
const CAMBRIDGE_ANY_SERIES: ReadonlySet<string> = new Set(
  CAMBRIDGE_0475.flatMap((year) =>
    year.papers.flatMap((paper) =>
      paper.options.flatMap((option) => option.texts.map((text) => text.slug)),
    ),
  ).filter((slug): slug is string => slug !== null),
)

/**
 * True when `board` sets `slug` in at least one series we hold, or when no
 * board is known (as textAvailableForBoard answers). Pass the canonical
 * set-text slug.
 */
export function boardSetsText(slug: string, board: ExamBoard | null): boolean {
  if (textAvailableForBoard(slug, board)) return true
  return board === 'cambridge-0475' && CAMBRIDGE_ANY_SERIES.has(slug)
}
