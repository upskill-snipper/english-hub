import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, gougeField, n, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import {
  COLLAR,
  Figure,
  HEAD_WATSON,
  Mary,
  OPEN_HAND,
  SHAKE_HAND,
  WATSON_CUTS,
  WATSON_FLUSH,
  WATSON_HAIR,
  WATSON_PUPIL,
  dressSeated,
  floorBoards,
  gent,
  handAt,
  headAt,
  type P,
  type Part,
} from './people'

/**
 * Chapter 9, "A Break in the Chain": "Mary's indifference to the fortune",
 * the tenth moment in the guide's timeline. Every detail is from the held
 * edition:
 *
 * - "At Camberwell I found Miss Morstan a little weary after her night's
 *   adventures, but very eager to hear the news. Mrs. Forrester, too, was
 *   full of curiosity. I told them all that we had done". It is late in the
 *   afternoon ("It was late in the afternoon before I woke"; "It was evening
 *   before I left Camberwell"), so the window is light.
 * - "'Why, Mary, your fortune depends upon the issue of this search. I don't
 *   think that you are nearly excited enough. Just imagine what it must be to
 *   be so rich, and to have the world at your feet!'" So Mrs Forrester leans
 *   towards Mary with both hands held open.
 * - "It sent a little thrill of joy to my heart to notice that she showed no
 *   sign of elation at the prospect. On the contrary, she gave a toss of her
 *   proud head, as though the matter were one in which she took small
 *   interest. 'It is for Mr. Thaddeus Sholto that I am anxious,' she said."
 *   So Mary sits with her hands folded in her lap, her head tossed up and
 *   turned away from Mrs Forrester, and Watson watches her, the spot colour
 *   on his cheekbone (WATSON_FLUSH): his joy, and the panel's only red.
 * - MARY is drawn from Mary() in ./people.tsx: fair hair, the plain greyish
 *   dress, pale hands. At home she is bareheaded (Mary({ bare })), with the
 *   crown of her hair that "The empty box" gives her in this same room.
 * - MRS FORRESTER: "a middle-aged, graceful woman", "how tenderly her arm
 *   stole round the other's waist and how motherly was the voice in which she
 *   greeted her" (Chapter 7). Nothing else of her is described, so she is
 *   plain: a woman of middle years, her dark hair drawn up into a knot, in a
 *   dark dress of 1888 with a narrow white band at the neck. She is in no
 *   other moment, so she is cut here and not in the kit.
 * - The room is "the drawing-room" at Mrs. Cecil Forrester's of Chapter 11,
 *   which gives it "the open window", "the basket chair" Mary sits in and "a shaded
 *   lamp", so all three are here, the lamp unlit by day. Nothing else of it
 *   is described, so it is plain. Watson is bareheaded indoors.
 *
 * Seeds: 1001 (the wall), 1002 (the floor), 1003 (the houses opposite), 1004
 * (the weave of the basket chair).
 */

const W = 860
const H = 340
/** The foot of the far wall. */
const FLOOR = 256
const WIN = { x: 500, y: 30, w: 124, h: 166 }

type Marks = { wall: string; floor: string; houses: string; hatch: string; weave: string }

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // the afternoon light from the window
  const light = (x: number, y: number) =>
    Math.max(
      clamp(1 - Math.hypot((x - (WIN.x + WIN.w / 2)) * 0.6, (y - 110) * 1.1) / 320) * 1.1,
      0.07,
    )
  const wall = gougeField(rng(1001), { x0: 0, x1: W, y0: 6, y1: FLOOR - 2 }, light, {
    spacing: 7,
    len: [16, 60],
  })
  const floor = floorBoards(rng(1002), W, H, FLOOR, [430, 60], 34)
  // the houses across the road, faint in the light
  const r = rng(1003)
  let houses = `M${WIN.x} ${WIN.y + WIN.h}`
  let x = WIN.x
  while (x < WIN.x + WIN.w) {
    const w = between(r, 30, 46)
    const y = WIN.y + WIN.h * between(r, 0.5, 0.6)
    houses += `L${n(x)} ${n(y)}L${n(x + w * 0.2)} ${n(y)}V${n(y - between(r, 8, 13))}H${n(x + w * 0.32)}V${n(y)}L${n(x + w)} ${n(y)}`
    x += w
  }
  houses += `L${WIN.x + WIN.w} ${WIN.y + WIN.h}Z`
  let hatch = ''
  for (let hx = WIN.x - WIN.h; hx < WIN.x + WIN.w; hx += 5)
    hatch += `M${n(hx)} ${WIN.y + WIN.h}L${n(hx + WIN.h * 0.6)} ${WIN.y}`
  // the weave of the basket chair: paper lines both ways
  const wr = rng(1004)
  let weave = ''
  for (let wx = 348; wx < 470; wx += 6.4) {
    const j = between(wr, -0.6, 0.6)
    weave += `M${n(wx + j)} 150L${n(wx + 34 + j)} 318M${n(wx + 34 + j)} 150L${n(wx + j)} 318`
  }
  cached = { wall, floor, houses, hatch, weave }
  return cached
}

// ── WATSON, on a plain chair, watching her ──────────────────────────────────
const WAT_HEAD = { d: HEAD_WATSON, at: [194, 122] as P, rot: 2, scale: 1.4 }
const WATSON: Part[] = gent({
  facing: 1,
  neck: [186, 158],
  hip: [172, 236],
  head: WAT_HEAD,
  body: { width: 36, hem: 14, flare: 4 },
  arm: 9.2,
  leg: 10,
  near: {
    arm: [
      [188, 166],
      [200, 200],
      [220, 226],
    ],
    leg: [
      [176, 236],
      [224, 240],
      [226, 318],
    ],
    hand: { parts: OPEN_HAND, scale: 0.92, rot: 26 },
  },
  far: {
    arm: [
      [182, 166],
      [190, 200],
      [208, 228],
    ],
    leg: [
      [168, 238],
      [214, 246],
      [212, 318],
    ],
    hand: { parts: OPEN_HAND, scale: 0.9, rot: 26 },
  },
})
/** "a little thrill of joy": the corner of his mouth turned up. */
const WATSON_SMILE = gouge(8.2, 10, 9.8, 11.8, 0.45)
const WAT_CHAIR = {
  back: 'M144 240V150H152V240Z',
  seat: 'M140 236H216V244H140Z',
  legs: 'M146 244L144 318M210 244L214 318',
}

// ── MARY, in the basket chair, her head tossed ──────────────────────────────
const MARY = {
  facing: -1 as const,
  head: { at: [408, 135] as P, rot: 20, scale: 1.2 },
  neck: [398, 162] as P,
  waist: [406, 212] as P,
  knee: [356, 238] as P,
  floor: 318,
  near: {
    arm: [
      [394, 170],
      [386, 198],
      [368, 214],
    ] as P[],
    hand: { parts: SHAKE_HAND, scale: 0.8, rot: 8 },
  },
  far: {
    arm: [
      [402, 170],
      [400, 200],
      [378, 216],
    ] as P[],
    hand: { parts: SHAKE_HAND, scale: 0.78, rot: 8 },
  },
}
/** The basket chair, facing left: its rounded wicker back, the seat, the woven skirt. */
const BASKET =
  'M466 318C468 280 470 236 468 196C466 168 456 148 438 146C424 146 418 158 420 176L422 230H352C346 230 344 236 346 242L352 318Z'

// ── MRS FORRESTER, leaning towards her, both hands open ─────────────────────
/** A woman's head of middle years, facing right, in the frame of the kit's heads. */
const HEAD_FORRESTER =
  'M-7.4 24C-9.4 19 -14 15 -15 6C-16 -9 -7.6 -19.6 3 -19.6C11 -19.6 15.4 -14.8 15.4 -8.8L15.6 -4.6L20.6 4L15.8 5.6L16.2 8.4L15 9.8L16 12.2C15.8 17.4 12.6 20.4 7.8 20.8L6.4 24Z'
/** Her dark hair drawn up into a knot at the back of the crown. */
const FORRESTER_KNOT = 'M-22 -13a7.6 6.8 0 1 0 15.2 0a7.6 6.8 0 1 0 -15.2 0Z'
/**
 * Her features in paper: a brow, a kind eye, the line of middle age from the
 * nose to the mouth, the mouth open as she speaks; her hair combed back to the
 * knot, and the twist of the knot.
 */
const FORRESTER_CUTS =
  gouge(5.6, -7.8, 13.6, -7.2, 0.75) +
  'M6.6 -3.4Q9.8 -6 13 -3.8Q9.8 -1.6 6.6 -3.4Z' +
  gouge(10.6, 3.4, 11.4, 9.8, 0.4, -0.5) +
  'M16.4 10.6L12.4 12L16.4 13.8Z' +
  gouge(10, -16.6, -8, -15.6, 0.55, -1.2) +
  gouge(9, -13.2, -11.6, -8, 0.55, 1.4) +
  gouge(-4.6, -1, -3.6, 6, 0.6, -1.2) +
  gouge(-19.6, -15.6, -10, -16.4, 0.5, -1) +
  gouge(-19.4, -11, -10.4, -10.6, 0.5, 1)
const FORRESTER_PUPIL = 'M9.6 -3.7a1.2 1.2 0 1 0 2.4 0a1.2 1.2 0 1 0 -2.4 0Z'
/** A narrow white band at the neck of her dark dress. */
const FORRESTER_BAND = 'M-1 21.4L10 20.2L9.4 24L-0.4 24.6Z'
const FOR_HEAD = { at: [573, 131] as P, rot: -2, scale: 1.3 }
const FOR_NECK: P = [574, 162]
const FOR_WAIST: P = [584, 214]
const FOR_KNEE: P = [536, 240]
const FOR_NEAR: P[] = [
  [570, 170],
  [548, 192],
  [526, 182],
]
const FOR_FAR: P[] = [
  [578, 170],
  [566, 198],
  [546, 196],
]
const FOR_HT = headAt(-1, FOR_HEAD.at, FOR_HEAD.rot, FOR_HEAD.scale)
const FOR_DRESS = dressSeated(FOR_NECK, FOR_WAIST, FOR_KNEE, 318, -1)
const FORRESTER: Part[] = [
  { d: 'M' + FOR_FAR.map(([x, y]) => `${x} ${y}`).join('L'), w: 6.8 },
  ...OPEN_HAND.map((q) => ({
    ...q,
    t: handAt(FOR_FAR, -1, { parts: OPEN_HAND, scale: 0.86, rot: -14 }),
  })),
  { d: FOR_DRESS },
  { d: HEAD_FORRESTER, t: FOR_HT },
  { d: FORRESTER_KNOT, t: FOR_HT },
  { d: 'M' + FOR_NEAR.map(([x, y]) => `${x} ${y}`).join('L'), w: 6.8, sep: 1.3 },
  ...OPEN_HAND.map((q) => ({
    ...q,
    t: handAt(FOR_NEAR, -1, { parts: OPEN_HAND, scale: 0.9, rot: -26 }),
  })),
]
/** The folds of her skirt over her knees and down to the floor. */
const FORRESTER_FOLDS =
  gouge(560, 224, 540, 236, 0.7, 0.6) +
  gouge(548, 252, 546, 312, 0.8, -0.6) +
  gouge(566, 250, 570, 314, 0.8, 0.4) +
  gouge(584, 228, 592, 312, 0.7, 0.8)
const FOR_CHAIR = {
  back: 'M600 240V150H608V240Z',
  seat: 'M536 238H612V246H536Z',
  legs: 'M542 246L540 318M606 246L610 318',
}

// ── The shaded lamp on its table, unlit by day ──────────────────────────────
const TABLE_TOP = 'M680 214H812V222H680Z'
const TABLE_LEGS = 'M692 222L688 318M800 222L804 318M694 280H798'
const LAMP_BASE = 'M734 214C734 206 738 202 746 202C754 202 758 206 758 214Z'
const LAMP_COLUMN = 'M743 202V148H749V202Z'
const LAMP_SHADE = 'M724 146L734 116H758L768 146Z'

function MarysIndifference({ uid }: ArtProps) {
  const m = marks()
  const winClip = `${uid}-win`
  const houseClip = `${uid}-houses`
  const chairClip = `${uid}-basket`
  const wt = headAt(1, WAT_HEAD.at, WAT_HEAD.rot, WAT_HEAD.scale)
  return (
    <>
      <defs>
        <clipPath id={winClip}>
          <rect x={WIN.x} y={WIN.y} width={WIN.w} height={WIN.h} />
        </clipPath>
        <clipPath id={houseClip}>
          <path d={m.houses} />
        </clipPath>
        <clipPath id={chairClip}>
          <path d={BASKET} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [390, 170], push: 1.03 })}>
        {/* the drawing-room wall, lit from the window */}
        <path d={m.wall} fill={PAPER} />
        <rect x={0} y={FLOOR - 4} width={W} height={4} fill={PAPER} />
        <rect x={0} y={FLOOR} width={W} height={H - FLOOR} fill={PAPER} />
        <path d={m.floor} fill={INK} />

        {/* the window on the afternoon, the houses across the road */}
        <rect x={WIN.x - 9} y={WIN.y - 9} width={WIN.w + 18} height={WIN.h + 18} fill={INK} />
        <rect x={WIN.x} y={WIN.y} width={WIN.w} height={WIN.h} fill={PAPER} />
        <g clipPath={`url(#${winClip})`}>
          <g clipPath={`url(#${houseClip})`}>
            <path d={m.hatch} stroke={INK} strokeWidth={LINE.hairline} />
          </g>
          <path d={m.houses} fill="none" stroke={INK} strokeWidth={1.3} />
        </g>
        <g fill={INK}>
          <rect x={WIN.x} y={WIN.y} width={WIN.w} height={4} />
          <rect x={WIN.x} y={WIN.y + WIN.h - 4} width={WIN.w} height={4} />
          <rect x={WIN.x} y={WIN.y} width={4} height={WIN.h} />
          <rect x={WIN.x + WIN.w - 4} y={WIN.y} width={4} height={WIN.h} />
          <rect x={WIN.x} y={WIN.y + WIN.h / 2 - 3} width={WIN.w} height={6} />
          <rect x={WIN.x + WIN.w / 2 - 2} y={WIN.y} width={4} height={WIN.h} />
        </g>
        <rect x={WIN.x - 16} y={WIN.y + WIN.h + 9} width={WIN.w + 32} height={6} fill={PAPER} />
        <rect x={WIN.x - 16} y={WIN.y + WIN.h + 15} width={WIN.w + 32} height={2} fill={INK} />

        {/* the shaded lamp on its table */}
        <path d={TABLE_LEGS} stroke={INK} strokeWidth={5} />
        <path d={TABLE_TOP} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path
          d={LAMP_BASE + LAMP_COLUMN + LAMP_SHADE}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
          strokeLinejoin="round"
        />
        <path d={gouge(732, 140, 760, 140, 0.8) + gouge(735, 128, 757, 128, 0.7)} fill={PAPER} />

        {/* Watson, on a plain chair, watching her, flushed with joy */}
        <path d={WAT_CHAIR.legs} stroke={INK} strokeWidth={5} />
        <path
          d={WAT_CHAIR.back + WAT_CHAIR.seat}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <Figure parts={WATSON}>
          <g transform={wt}>
            <path d={WATSON_CUTS + WATSON_HAIR + COLLAR + WATSON_SMILE} fill={PAPER} />
            <path d={WATSON_PUPIL} fill={INK} />
            <path
              d={WATSON_FLUSH}
              fill="none"
              stroke={RED}
              strokeWidth={2.2}
              strokeLinecap="round"
            />
          </g>
        </Figure>

        {/* the basket chair, and Mary in it */}
        <path
          d={BASKET}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
          strokeLinejoin="round"
        />
        <g clipPath={`url(#${chairClip})`}>
          <path d={m.weave} stroke={PAPER} strokeWidth={0.9} />
        </g>
        <Mary uid={uid} bare {...MARY} />

        {/* Mrs Forrester, leaning towards her, both hands open */}
        <path d={FOR_CHAIR.legs} stroke={INK} strokeWidth={5} />
        <path
          d={FOR_CHAIR.back + FOR_CHAIR.seat}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <Figure parts={FORRESTER}>
          <g transform={FOR_HT}>
            <path d={FORRESTER_CUTS + FORRESTER_BAND} fill={PAPER} />
            <path d={FORRESTER_PUPIL} fill={INK} />
          </g>
          <path d={FORRESTER_FOLDS} fill={PAPER} />
        </Figure>
      </g>
    </>
  )
}

export const marysIndifferenceToTheFortune: LinocutArt = {
  width: W,
  height: H,
  Draw: MarysIndifference,
}
