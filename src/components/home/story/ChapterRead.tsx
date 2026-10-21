import { getSetText } from '@/lib/board/set-texts'
import { boardHasShelf, boardShelfHref } from '@/lib/board/board-landing'
import type { ExamBoard } from '@/lib/board/board-config'
import { Chapter, ChapterLinks, ChapterText } from './Chapter'
import { Plate } from './Plate'
import { Shot } from './Shot'
import { TextLink } from './TextLink'
import { boardLabel, type BoardGroups } from './boards'
import { fill, joinList, resolveCopy } from './copy'

export type ChapterContext = {
  numeral: string
  eyebrow: string
  /** The remembered board, if any, and its printed name. */
  board: ExamBoard | null
  boardName: string | null
  boards: BoardGroups
  /** "Browse every set text", or the remembered board's shelf. */
  library: { href: string; label: string }
}

/**
 * Chapter I: the reader. On a laptop the frame shows the contents list beside
 * Act 1, Scene 1 with a key quotation highlighted. On a phone the same capture
 * is cropped to the text column around that highlight, with its own caption,
 * so "with the key lines marked" is shown and not only said.
 *
 * WHICH BOARDS SET MACBETH is read from the set-text registry at render time
 * and never typed here. When the remembered board is not among them the
 * chapter says so and points at that board's own shelf: the page's part of
 * the board fail-safe.
 */
export async function ChapterRead({ ctx }: { ctx: ChapterContext }) {
  const c = await resolveCopy({
    h2: 'home.story.read.h2',
    p1: 'home.story.read.p1',
    p2: 'home.story.read.p2',
    boards: 'home.story.read.boards',
    notYourBoard: 'home.story.read.not_your_board',
    yourShelf: 'home.story.hero.your_shelf',
    yourHub: 'home.story.hero.your_hub',
    link: 'home.story.read.link',
    shotAlt: 'home.story.read.shot_alt',
    shotCaption: 'home.story.read.shot_caption',
    phoneAlt: 'home.story.read.shot_phone_alt',
    phoneCaption: 'home.story.read.shot_phone_caption',
    plateAlt: 'home.story.read.plate_alt',
    plateCaption: 'home.story.read.plate_caption',
    and: 'home.story.and',
    sep: 'home.story.list_sep',
  })

  const macbeth = getSetText('macbeth')
  const setBy = (macbeth?.boards ?? []).map((id) => boardLabel(id, ctx.boards))
  const boardsSentence =
    setBy.length > 0 ? fill(c.boards, { boards: joinList(setBy, c.sep, c.and) }) : null
  const notYours =
    ctx.board && ctx.boardName && macbeth && !macbeth.boards.includes(ctx.board)
      ? {
          text: fill(c.notYourBoard, { board: ctx.boardName }),
          href: boardShelfHref(ctx.board),
          label: fill(boardHasShelf(ctx.board) ? c.yourShelf : c.yourHub, {
            board: ctx.boardName,
          }),
        }
      : null

  return (
    <Chapter
      id="read"
      numeral={ctx.numeral}
      eyebrow={ctx.eyebrow}
      heading={c.h2}
      ink
      media={
        <>
          <Shot
            className="hidden md:grid"
            src="/home/macbeth-reader-desktop.png"
            iw={1440}
            ih={900}
            x={424}
            y={104}
            w={880}
            h={660}
            alt={c.shotAlt}
            caption={c.shotCaption}
            onInk
          />
          <Shot
            className="md:hidden"
            src="/home/macbeth-reader-desktop.png"
            iw={1440}
            ih={900}
            x={720}
            y={330}
            w={400}
            h={520}
            alt={c.phoneAlt}
            caption={c.phoneCaption}
            onInk
          />
        </>
      }
    >
      <ChapterText ink>{c.p1}</ChapterText>
      <ChapterText ink>{c.p2}</ChapterText>
      {boardsSentence ? <ChapterText ink>{boardsSentence}</ChapterText> : null}
      {notYours ? (
        <ChapterText ink>
          {notYours.text}{' '}
          <TextLink href={notYours.href} onInk className="min-h-0">
            {notYours.label}
          </TextLink>
        </ChapterText>
      ) : null}
      <ChapterLinks>
        <TextLink href="/revision/texts/macbeth/read" onInk>
          {c.link}
        </TextLink>
        <TextLink href={ctx.library.href} onInk muted>
          {ctx.library.label}
        </TextLink>
      </ChapterLinks>
      <Plate
        src="/comics/macbeth/the-prophecies.391a31a9214f.svg"
        alt={c.plateAlt}
        caption={c.plateCaption}
        onInk
        className="mt-3 max-w-[520px]"
      />
    </Chapter>
  )
}
