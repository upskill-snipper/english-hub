import Link from 'next/link'
import { BookOpen } from 'lucide-react'
import { TextSearchBox } from '@/components/search/text-search-box'
import { getServerBoard } from '@/lib/board/get-server-board'
import { boardHasShelf, boardShelfHref } from '@/lib/board/board-landing'
import { BoardPickerStrip } from './BoardPickerStrip'
import { Plate } from './Plate'
import { PrimaryCta } from './PrimaryCta'
import { boardLabel, type BoardGroups } from './boards'
import { fill, resolveCopy } from './copy'

/**
 * The first screen: one headline, one line of subline, the one call to action,
 * the text search, and two of the site's own drawings. The board picker strip
 * follows the search in the same section with nothing between them, because
 * choosing the board is how the site shows a student the right texts (see
 * BoardPickerStrip). So the copy column ends with the search, and the strip is
 * the first thing under it on every width.
 *
 * WHEN A BOARD IS REMEMBERED. The middleware writes the english-hub-board
 * cookie when a student chooses a board; getServerBoard reads it. The hero
 * then says so in words ("You study AQA.") with a link to change it and a link
 * to that board's shelf, so a student who chose the wrong board sees it on the
 * first screen rather than on a text page. No second board store is involved:
 * this reads the same cookie the header, the shelves and the games hub read.
 */
export async function HomeHero({ boards }: { boards: BoardGroups }) {
  const board = await getServerBoard()
  const c = await resolveCopy({
    eyebrow: 'home.story.hero.eyebrow',
    h1: 'home.story.hero.h1',
    sub: 'home.story.hero.sub',
    searchPrompt: 'search.texts.sub',
    quietBefore: 'home.story.hero.quiet_before',
    quietLink: 'home.story.hero.quiet_link',
    quietAfter: 'home.story.hero.quiet_after',
    youStudy: 'home.story.hero.you_study',
    changeBoard: 'home.story.hero.change_board',
    yourShelf: 'home.story.hero.your_shelf',
    yourHub: 'home.story.hero.your_hub',
    plate1Alt: 'home.story.hero.plate1_alt',
    plate1Caption: 'home.story.hero.plate1_caption',
    plate2Alt: 'home.story.hero.plate2_alt',
    plate2Caption: 'home.story.hero.plate2_caption',
  })

  const boardName = board ? boardLabel(board, boards) : null
  // A board with no shelf (KS3, Cambridge 0500 and 0990) sets no texts, so its
  // link is to its hub and says so.
  const boardLink =
    board && boardName
      ? {
          href: boardShelfHref(board),
          label: fill(boardHasShelf(board) ? c.yourShelf : c.yourHub, { board: boardName }),
        }
      : null

  return (
    <section aria-labelledby="hero-h" className="border-b border-border/60">
      <div className="mx-auto w-full max-w-[1400px] px-4 pb-10 pt-7 md:pb-14 md:pt-10 lg:pb-16 lg:pt-12">
        <div className="grid gap-7 lg:grid-cols-[7fr_5fr] lg:items-center lg:gap-12">
          <div className="grid content-center gap-[18px]">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-clay-700 dark:text-clay-300">
              {c.eyebrow}
            </p>
            <h1
              id="hero-h"
              className="max-w-[12ch] text-balance font-serif text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:max-w-[14ch]"
            >
              {c.h1}
            </h1>
            <p className="max-w-[40ch] text-lg leading-snug text-muted-foreground sm:text-xl">
              {c.sub}
            </p>

            {boardName && boardLink ? (
              <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-base text-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <BookOpen aria-hidden="true" className="size-4 text-muted-foreground" />
                  {fill(c.youStudy, { board: boardName })}
                </span>
                <Link
                  href="/board-select?change=1"
                  className="font-medium text-primary underline decoration-1 underline-offset-4 hover:decoration-2"
                >
                  {c.changeBoard}
                </Link>
                <Link
                  href={boardLink.href}
                  className="font-medium text-primary underline decoration-1 underline-offset-4 hover:decoration-2"
                >
                  {boardLink.label}
                </Link>
              </p>
            ) : null}

            <PrimaryCta />

            <p className="text-base text-muted-foreground">
              {c.quietBefore}{' '}
              <Link
                href="/games/texts"
                className="font-medium text-primary underline decoration-1 underline-offset-4 hover:decoration-2"
              >
                {c.quietLink}
              </Link>{' '}
              {c.quietAfter}
            </p>

            {/* The search: a labelled combobox in its own search landmark,
                with a plain form fallback to /revision/texts. Chapters link
                back to this anchor. The board strip begins straight after it. */}
            <div id="find-your-text" className="max-w-[640px] scroll-mt-28">
              <p className="mb-2 text-base font-medium text-muted-foreground">{c.searchPrompt}</p>
              <TextSearchBox size="hero" />
            </div>
          </div>

          <div className="order-first grid content-center gap-4 md:grid-cols-2 lg:order-none lg:grid-cols-1">
            <Plate
              src="/comics/macbeth/the-witches-meet.15c1c1a68696.svg"
              alt={c.plate1Alt}
              caption={c.plate1Caption}
              priority
            />
            <Plate
              src="/comics/macbeth/lady-macbeth-s-invocation.34a54b24838f.svg"
              alt={c.plate2Alt}
              caption={c.plate2Caption}
              className="hidden md:grid"
            />
          </div>
        </div>

        <BoardPickerStrip boards={boards} />
      </div>
    </section>
  )
}
