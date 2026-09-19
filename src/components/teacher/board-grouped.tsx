import type { ReactNode } from 'react'
import { TeacherResourceGrid } from '@/components/teacher/ResourceCard'

/**
 * Showing a teacher their own board's resources without hiding the rest.
 *
 * WHAT THIS REPLACES, on two pages and counting. Each filtered its list to the
 * reader's board and rendered whatever survived. For a board the list does not
 * cover that is nothing at all: the teacher mark-scheme library served KS3 and
 * all three Cambridge syllabuses a heading, a promise of cards "for every major
 * GCSE English exam board", a badge reading "For KS3" and an empty grid.
 * Revision Packs did the same for KS3 and Cambridge 0500. Reported from the
 * live site, and found on the sibling page by looking for it.
 *
 * Hiding also breaks deep links. An anchor only exists on a card that renders,
 * so the marking hub's twelve links into the mark-scheme page landed on the
 * page and jumped nowhere for any reader whose board was not the one linked.
 *
 * THE RULE. Narrow, never hide. The reader's own board comes first under its
 * own heading, everything else follows under "Other boards", and a board we
 * hold nothing for is told so in a sentence rather than shown a blank page.
 * `boardHasOwn` is false when the board matches nothing OR matches everything,
 * because in both cases there is no meaningful split to show.
 */

export interface BoardGrouping<T> {
  /** Items for the reader's board, or all of them when no board is set. */
  mine: readonly T[]
  /** Everything else. Empty when no board is set. */
  others: readonly T[]
  /** True only when the board genuinely splits the list into two non-empty halves. */
  boardHasOwn: boolean
}

export function groupForBoard<T>(
  items: readonly T[],
  matchesBoard: (item: T) => boolean,
  board: string | null,
): BoardGrouping<T> {
  const mine = items.filter(matchesBoard)
  const others = items.filter((i) => !mine.includes(i))
  return { mine, others, boardHasOwn: Boolean(board) && mine.length > 0 && others.length > 0 }
}

export function BoardGroupedResources<T>({
  grouping,
  all,
  boardShortName,
  noun,
  renderItem,
}: {
  grouping: BoardGrouping<T>
  /** The whole list, shown when the board splits nothing. */
  all: readonly T[]
  boardShortName?: string | null
  /** What the reader is looking at, for the "we have none" line. */
  noun: string
  renderItem: (item: T) => ReactNode
}) {
  const { mine, others, boardHasOwn } = grouping
  return (
    <div className="space-y-12">
      {boardHasOwn && (
        <div>
          <h2 className="mb-4 text-xl font-semibold text-foreground">For {boardShortName}</h2>
          <TeacherResourceGrid>{mine.map(renderItem)}</TeacherResourceGrid>
        </div>
      )}

      {!boardHasOwn && mine.length === 0 && (
        <p className="rounded-lg border border-border/60 bg-card p-4 text-sm text-muted-foreground">
          We do not have {noun} for{' '}
          <span className="font-medium text-foreground">{boardShortName ?? 'your board'}</span> yet.
          Everything we do have is below.
        </p>
      )}

      <div>
        {boardHasOwn && (
          <h2 className="mb-4 text-xl font-semibold text-foreground">Other boards</h2>
        )}
        <TeacherResourceGrid>{(boardHasOwn ? others : all).map(renderItem)}</TeacherResourceGrid>
      </div>
    </div>
  )
}
