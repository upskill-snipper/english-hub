import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import LevelChip, { type Level } from '@/components/home/LevelChip'
import { boardHasShelf } from '@/lib/board/board-landing'
import type { Board, BoardGroups } from './boards'
import { resolveCopy } from './copy'

/**
 * "Pick your exam board": seven cards, four GCSE and three International GCSE,
 * directly under the hero search.
 *
 * WHY IT IS HERE AND WHY IT SAYS WHAT IT SAYS. The founder's words on 20
 * October 2026: "an emphasis fail safe of which board which text is on so
 * people are not studying the incorrect texts". Choosing a board is what
 * filters the shelves to a student's own texts: each card's href carries
 * ?setBoard=<id>, the middleware writes the cookie and redirects to the board's
 * own shelf (/set-texts/<id>), which lists only the texts that board sets. The
 * sentence under the heading says exactly that and no more. It does not say a
 * text page warns about the wrong board, because the text page does not: a text
 * the chosen board does not set gets the full library as its back link, and no
 * warning. The search results carry each text's board tags; they do not yet
 * filter by the remembered board.
 *
 * The cards themselves are declared in src/app/page.tsx (see boards.ts for
 * why) and arrive here as props.
 */
export async function BoardPickerStrip({ boards }: { boards: BoardGroups }) {
  const c = await resolveCopy({
    heading: 'home.story.boards.heading',
    sub: 'home.story.boards.sub',
    gcse: 'home.story.boards.gcse',
    igcse: 'home.story.boards.igcse',
    openShelf: 'home.story.boards.open_shelf',
    openHub: 'home.story.boards.open_hub',
  })

  return (
    <div
      role="region"
      aria-labelledby="boards-h"
      className="mt-10 border-t border-border/60 pt-8 md:mt-12 md:pt-10"
    >
      <div className="grid gap-6">
        <div className="flex flex-wrap items-baseline gap-x-8 gap-y-2">
          <h2
            id="boards-h"
            className="font-serif text-2xl font-semibold tracking-tight text-foreground md:text-[28px]"
          >
            {c.heading}
          </h2>
          <p className="max-w-[62ch] text-base leading-relaxed text-muted-foreground">{c.sub}</p>
        </div>
        {/* Seven cards across the full width from 768px: beside the heading
            they were 140px wide at 1440 and the level chip sat on the name. */}
        <div className="grid gap-5 md:grid-cols-[4fr_3fr] md:gap-6">
          <BoardGroup
            label={c.gcse}
            level="gcse"
            boards={boards.gcse}
            action={{ shelf: c.openShelf, hub: c.openHub }}
            columns="grid-cols-2 sm:grid-cols-4"
          />
          <BoardGroup
            label={c.igcse}
            level="igcse"
            boards={boards.igcse}
            action={{ shelf: c.openShelf, hub: c.openHub }}
            columns="grid-cols-1 sm:grid-cols-3"
          />
        </div>
      </div>
    </div>
  )
}

function BoardGroup({
  label,
  level,
  boards,
  action,
  columns,
}: {
  label: string
  level: Level
  boards: Board[]
  action: { shelf: string; hub: string }
  columns: string
}) {
  const groupId = `boards-${level}`
  return (
    <div>
      <p
        id={groupId}
        className="mb-2 font-mono text-xs uppercase tracking-[0.1em] text-muted-foreground"
      >
        {label}
      </p>
      <ul aria-labelledby={groupId} className={`grid gap-2 ${columns}`}>
        {boards.map((b) => (
          <li key={b.id} className="min-w-0">
            <Link
              href={b.href}
              aria-label={`${b.name}, ${label}`}
              className="group flex h-full min-h-[84px] min-w-0 flex-col gap-2 rounded-2xl border border-border bg-card p-3.5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background motion-reduce:transform-none"
            >
              {/* The chip sits above the name rather than beside it: a grid
                  item's content may not shrink below its minimum width by
                  default, and at 1280px the longest IGCSE name pushed a chip
                  beside it 30px past the viewport. */}
              <LevelChip level={level} className="self-start text-xs" />
              <span className="min-w-0 break-words text-base font-semibold leading-tight text-foreground">
                {b.name}
              </span>
              <span className="mt-auto inline-flex items-center gap-1 pt-1 text-base font-medium text-primary">
                {boardHasShelf(b.id) ? action.shelf : action.hub}
                <ArrowRight
                  aria-hidden="true"
                  className="size-3.5 transition-transform group-hover:translate-x-0.5 rtl:rotate-180 rtl:group-hover:-translate-x-0.5 motion-reduce:transition-none"
                />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
