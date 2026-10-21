import { getServerBoard } from '@/lib/board/get-server-board'
import { boardHasShelf, boardShelfHref } from '@/lib/board/board-landing'
import { ChapterIndex } from './ChapterIndex'
import { ChapterPlay } from './ChapterPlay'
import { ChapterRead, type ChapterContext } from './ChapterRead'
import { ChapterRevise } from './ChapterRevise'
import { ChapterSit } from './ChapterSit'
import { ChapterWrite } from './ChapterWrite'
import { CHAPTERS } from './chapters'
import { boardLabel, type BoardGroups } from './boards'
import { fill, resolveCopy } from './copy'

/**
 * The story: one student takes Macbeth from the first page to the exam room,
 * in five chapters, with a chapter index that follows the reader.
 *
 * The lede says what is true of every text and what is true only of some:
 * every set text has a study guide and quests; the reader, the comic, mock
 * papers and AI marking exist where the text has them. The old draft said the
 * same path was there for any text a student searched, which it is not: most
 * texts have no full text or comic, and A level has no mocks or AI marking.
 *
 * EVERY CHAPTER LEADS BACK OUT. Each has its Macbeth link and a second link
 * to the library, or, when a board is remembered, to that board's own shelf;
 * chapter IV links back to the search instead. No chapter is a dead end.
 */
export async function StoryChapters({
  boards,
  questHref,
}: {
  boards: BoardGroups
  questHref: string
}) {
  const board = await getServerBoard()
  const c = await resolveCopy({
    ledeEyebrow: 'home.story.lede.eyebrow',
    lede: 'home.story.lede.body',
    indexLabel: 'home.story.index.label',
    eyebrow: 'home.story.chapter_eyebrow',
    read: 'home.story.index.read',
    readShort: 'home.story.index.read_short',
    play: 'home.story.index.play',
    playShort: 'home.story.index.play_short',
    revise: 'home.story.index.revise',
    reviseShort: 'home.story.index.revise_short',
    write: 'home.story.index.write',
    writeShort: 'home.story.index.write_short',
    sit: 'home.story.index.sit',
    sitShort: 'home.story.index.sit_short',
    library: 'home.story.library',
    libraryBoard: 'home.story.library_board',
  })

  const boardName = board ? boardLabel(board, boards) : null
  // A board with no shelf sets no texts, so its name does not go on the
  // library link; the full library is the honest destination.
  const library =
    board && boardName && boardHasShelf(board)
      ? { href: boardShelfHref(board), label: fill(c.libraryBoard, { board: boardName }) }
      : { href: '/revision/texts', label: c.library }

  const items = CHAPTERS.map((ch) => ({
    id: ch.id,
    numeral: ch.numeral,
    label: c[ch.id],
    short: c[`${ch.id}Short` as const],
  }))
  const ctxFor = (id: (typeof CHAPTERS)[number]['id']): ChapterContext => {
    const item = items.find((i) => i.id === id)!
    return {
      numeral: item.numeral,
      eyebrow: fill(c.eyebrow, { n: item.numeral, title: item.label }),
      board,
      boardName,
      boards,
      library,
    }
  }

  return (
    <div className="relative">
      <div className="mx-auto grid w-full max-w-[760px] gap-3 px-4 pb-2 pt-11 xl:max-w-[min(1000px,100vw_-_440px)]">
        <p className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-clay-700 dark:text-clay-300">
          {c.ledeEyebrow}
        </p>
        <p className="max-w-[34ch] font-serif text-2xl leading-[1.3] tracking-tight text-foreground md:text-3xl">
          {c.lede}
        </p>
      </div>

      <ChapterIndex items={items} label={c.indexLabel} />

      <ChapterRead ctx={ctxFor('read')} />
      <ChapterPlay ctx={ctxFor('play')} questHref={questHref} />
      <ChapterRevise ctx={ctxFor('revise')} />
      <ChapterWrite ctx={ctxFor('write')} />
      <ChapterSit ctx={ctxFor('sit')} />
    </div>
  )
}
