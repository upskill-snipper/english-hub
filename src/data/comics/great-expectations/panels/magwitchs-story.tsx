import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { gouge } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { Person, seatedLegs, type P } from './people'
import { H, TempleRoom, W } from './temple-chambers'

/**
 * Chapters 41 and 42: "Magwitch's story", the twelfth moment in the guide's
 * timeline. Pip's chambers in the Temple again (./temple-chambers.tsx), the
 * room of the night of the storm, now by day: the guide sets the moment "at
 * breakfast", and the convict tells his life when the meal is over. From the
 * held edition (src/data/full-texts/great-expectations.ts):
 *
 * - "When he had made an end of his breakfast ... He took out his black pipe
 *   and was going to fill it with negro-head ... He put it back again, stuck
 *   his pipe in a buttonhole of his coat, spread a hand on each knee, and,
 *   after turning an angry eye on the fire for a few silent moments, looked
 *   around at us and said what follows" (Chapter 41). So he sits forward by
 *   the fire with a hand spread on each knee and the short black pipe in his
 *   buttonhole, and looks round at the two young men as he talks.
 * - His chair is the easy-chair he falls asleep in, "his knotted hands
 *   clutching the sides of the easy-chair" (Chapter 40), the one Herbert
 *   starts out of because it is his (Chapter 41).
 * - By now "he wore his grizzled hair cut short", in a dress "more like a
 *   prosperous farmer's" (Chapter 40): the kit's Magwitch at sixty
 *   ('magwitch60' in ./people.tsx), `cropped`, in a coat.
 * - "Herbert had been writing with his pencil in the cover of a book. He
 *   softly pushed the book over to me, as Provis stood smoking with his eyes
 *   on the fire, and I read in it: 'Young Havisham's name was Arthur.
 *   Compeyson is the man who professed to be Miss Havisham's lover'" (Chapter
 *   42). So Herbert, at the breakfast table behind Pip, bends over a book with
 *   its cover open and writes in it, and the panel's quotation is what he
 *   writes. Herbert is the kit's: a pale young gentleman with light hair.
 * - Pip sits facing the convict, listening.
 *
 * Nothing of the story itself is drawn: Compeyson, the trial and the hulks
 * are in the telling, not in the room. Nobody's knife is drawn. The spot
 * colour is the fire alone.
 */

/** Where each sits: the convict in the easy-chair by the fire, Pip facing him, Herbert at the table. */
const MAGWITCH_AT: P = [196, 326]
const PIP_AT: P = [384, 326]
const HERBERT_AT: P = [520, 326]
const FIG = 1.27
/** The breakfast table, seen side on: its top and its ends. */
const TABLE = { x0: 410, x1: 604, top: 238 }

/** The easy-chair by the fire: a high padded back behind him, a seat and a front leg. */
function EasyChair() {
  return (
    <g strokeLinejoin="round">
      <path
        d="M150 168C150 160 160 156 170 158L184 162C188 196 190 230 192 262L152 264C150 232 148 200 150 168Z"
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />
      <path
        d={gouge(160, 172, 164, 252, 1.3, 0.6) + gouge(172, 170, 176, 254, 1, 0.4)}
        fill={PAPER}
      />
      <path d="M146 262H252L250 276H148Z" fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d="M152 276V322M246 276V322" stroke={PAPER} strokeWidth={8} strokeLinecap="round" />
      <path d="M152 276V322M246 276V322" stroke={INK} strokeWidth={5} strokeLinecap="round" />
    </g>
  )
}

/**
 * The breakfast table, side on: a dark top with its edge cut in paper, an
 * apron and two legs, and a cup on its saucer and a plate on it. Dark wood,
 * not a white cloth, so that the open book and Herbert's pale hands show on
 * it at panel size (on a cloth they were lost).
 */
function BreakfastTable() {
  const { x0, x1, top } = TABLE
  const legs = `M${x0 + 10} ${top + 12}V322M${x1 - 10} ${top + 12}V322`
  return (
    <g strokeLinejoin="round">
      <path d={legs} stroke={PAPER} strokeWidth={8} strokeLinecap="round" />
      <path d={legs} stroke={INK} strokeWidth={5} />
      <rect
        x={x0}
        y={top}
        width={x1 - x0}
        height={14}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />
      <path d={gouge(x0 + 4, top + 3, x1 - 4, top + 3, 1.1)} fill={PAPER} />
      <path d={gouge(x0 + 30, top + 9, x1 - 60, top + 9.6, 0.8, 0.3)} fill={PAPER} />
      {/* a cup on its saucer, and a plate */}
      <path
        d={`M${x1 - 46} ${top - 1}H${x1 - 22}M${x1 - 42} ${top - 2}L${x1 - 40} ${top - 12}H${x1 - 28}L${x1 - 26} ${top - 2}Z`}
        fill={PAPER}
        stroke={INK}
        strokeWidth={1.2}
      />
      <path
        d={`M${x1 - 27} ${top - 10}C${x1 - 21} ${top - 10} ${x1 - 21} ${top - 4} ${x1 - 26.6} ${top - 4.6}`}
        fill="none"
        stroke={PAPER}
        strokeWidth={1.4}
      />
      <path
        d={`M${x1 - 82} ${top - 1}Q${x1 - 68} ${top - 6} ${x1 - 54} ${top - 1}Z`}
        fill={PAPER}
        stroke={INK}
        strokeWidth={1.2}
      />
    </g>
  )
}

/**
 * The book, lying open on the table under Herbert's hands: its dark boards
 * and, inside the cover, the pencilled lines. Drawn after the table.
 */
function OpenBook() {
  const x = 420
  const y = TABLE.top
  return (
    <g strokeLinejoin="round">
      <path
        d={`M${x - 3} ${y}L${x + 1} ${y - 12}L${x + 32} ${y - 10}L${x + 66} ${y - 13}L${x + 70} ${y}Z`}
        fill={INK}
        stroke={PAPER}
        strokeWidth={1.2}
      />
      <path
        d={`M${x + 2} ${y - 1.4}L${x + 5} ${y - 9.4}L${x + 31} ${y - 8}L${x + 33} ${y - 1.4}ZM${x + 33} ${y - 1.4}L${x + 35} ${y - 8}L${x + 62} ${y - 10.4}L${x + 66} ${y - 1.4}Z`}
        fill={PAPER}
      />
      <path
        d={`M${x + 38} ${y - 7.2}L${x + 60} ${y - 8.6}M${x + 38} ${y - 4.4}L${x + 61} ${y - 5.4}M${x + 8} ${y - 6.6}L${x + 28} ${y - 5.8}M${x + 8} ${y - 3.8}L${x + 22} ${y - 3.4}`}
        stroke={INK}
        strokeWidth={0.9}
      />
    </g>
  )
}

function MagwitchsStory({ uid }: ArtProps) {
  return (
    <g className="lc-push" style={timing({ origin: [330, 200], push: 1.03 })}>
      <TempleRoom uid={uid} night={false} />
      <EasyChair />

      {/* the convict in his easy-chair, a hand spread on each knee, telling his life */}
      <Person
        at={MAGWITCH_AT}
        scale={FIG}
        pose={{
          look: 'magwitch60',
          cropped: true,
          dress: 'coat',
          eye: 'glare',
          head: { rot: 6 },
          body: { neck: [16, -114], hip: [0, -48] },
          legs: seatedLegs(46, 40),
          // A hand spread on each knee: side on, the far one is hidden by the
          // near (both drawn, they merged into what read as clasped hands).
          far: {
            pts: [
              [12, -107],
              [14, -82],
              [18, -64],
            ],
            hand: 'none',
          },
          near: {
            pts: [
              [18, -105],
              [24, -79],
              [31, -58],
            ],
            hand: 'open',
            deg: 16,
            thumb: -1,
            size: 16,
            spread: 20,
          },
        }}
      >
        {/* the short black pipe stuck in his buttonhole */}
        <path d="M24.6 -90.4L30.4 -106.4" stroke={PAPER} strokeWidth={4.6} strokeLinecap="round" />
        <path
          d="M28.4 -108.6C28 -114.4 33.6 -116.6 37.4 -114L36.8 -106.4C34.6 -104.2 29.8 -104.4 28.4 -108.6Z"
          fill={INK}
          stroke={PAPER}
          strokeWidth={1.6}
          strokeLinejoin="round"
        />
        <path d="M24.6 -90.4L30.4 -106.4" stroke={INK} strokeWidth={2} strokeLinecap="round" />
      </Person>

      {/* Herbert at the table, bent over the book, writing in its cover */}
      <Person
        at={HERBERT_AT}
        scale={FIG}
        flip
        pose={{
          look: 'herbert',
          eye: 'down',
          head: { rot: 16 },
          body: { neck: [14, -112], hip: [0, -48] },
          legs: seatedLegs(46, 34),
          far: {
            pts: [
              [10, -105],
              [22, -86],
              [36, -74],
            ],
            hand: 'mitt',
            deg: 8,
          },
          near: {
            pts: [
              [16, -103],
              [30, -86],
              [44, -76],
            ],
            hand: 'grip',
            deg: 14,
          },
        }}
      >
        {/* his pencil, its point on the page */}
        <path d="M45.4 -86.4L53.6 -72.6" stroke={PAPER} strokeWidth={4.4} strokeLinecap="round" />
        <path d="M45.4 -86.4L53.6 -72.6" stroke={INK} strokeWidth={2} strokeLinecap="round" />
      </Person>
      <BreakfastTable />
      <OpenBook />

      {/* Pip's chair, side on, its back behind him */}
      <path
        d="M370 272V322M404 272V322M406 268V194"
        stroke={PAPER}
        strokeWidth={8}
        strokeLinecap="round"
      />
      <path
        d="M370 272V322M404 272V322M406 268V194"
        stroke={INK}
        strokeWidth={5}
        strokeLinecap="round"
      />
      <rect
        x={362}
        y={265}
        width={50}
        height={7}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />

      {/* Pip, facing him, listening */}
      <Person
        at={PIP_AT}
        scale={FIG}
        flip
        pose={{
          look: 'pip',
          age: 'man',
          head: { rot: 2 },
          body: { neck: [5, -116], hip: [0, -48] },
          legs: seatedLegs(46, 38),
          far: {
            pts: [
              [2, -108],
              [8, -82],
              [24, -62],
            ],
            hand: 'mitt',
            deg: 8,
          },
          near: {
            pts: [
              [7, -106],
              [14, -80],
              [31, -60],
            ],
            hand: 'mitt',
            deg: 6,
          },
        }}
      />
    </g>
  )
}

export const magwitchsStory: LinocutArt = { width: W, height: H, Draw: MagwitchsStory }
