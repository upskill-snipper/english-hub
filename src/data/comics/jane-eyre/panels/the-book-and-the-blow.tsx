import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, gougeField, n, rng, wedge } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import {
  Figure,
  HEAD_JOHN_REED,
  JOHN_REED_CUTS,
  JOHN_REED_HAIR,
  JOHN_REED_HAIR_CUTS,
  JaneGirl,
  LOOSE_HAND,
  SPREAD_HAND,
  headAt,
  man,
  type P,
} from './people'

/**
 * Chapter 1: "The book and the blow", the first moment in the guide's
 * timeline. Every detail is from the held edition
 * (src/data/full-texts/jane-eyre.ts).
 *
 * THE MOMENT DRAWN. Jane is ten, so the blow itself is never drawn: no book
 * in the air, no fall, no cut. The panel takes the moment after, when the
 * book lies where it fell and Jane, on her feet again by the door, answers
 * John for the first time: "Wicked and cruel boy!" I said. There is no red
 * anywhere near her head, her face or her hands; the one red is the curtain
 * she hid behind, on the far side of the room.
 *
 * - "A breakfast-room adjoined the drawing-room, I slipped in there. It
 *   contained a bookcase"; "I mounted into the window-seat ... having drawn
 *   the red moreen curtain nearly close"; "Folds of scarlet drapery shut in my
 *   view to the right hand; to the left were the clear panes of glass". So the
 *   bookcase stands on the back wall with a gap on its shelf, and the window
 *   recess on the right is hung with the red moreen curtain, printed in the
 *   spot colour, pushed back where she came out.
 * - "the drear November day ... Afar, it offered a pale blank of mist and
 *   cloud; near a scene of wet lawn and storm-beat shrub, with ceaseless rain
 *   sweeping away wildly before a long and lamentable blast". So the panes
 *   are pale mist above a dark lawn and a wind-bent shrub, cut through with
 *   slanting rain.
 * - "seating himself in an arm-chair"; "Go and stand by the door, out of the
 *   way of the mirror and the windows"; "the volume was flung, it hit me, and
 *   I fell". So John's arm-chair is beside him, Jane stands by the door on
 *   the far side of the room from the window, and Bewick's History of
 *   British Birds lies open on the floor between them, its leaves splayed.
 * - "Wicked and cruel boy!" I said. "You are like a murderer"; and John's
 *   answer, "What! what! ... Did she say that to me?" So Jane leans towards
 *   him, her mouth open and her brow drawn down, one hand thrown out at him
 *   with the fingers spread; John, the bully, starts back from her words with
 *   his mouth open and one hand up.
 * - John "was a schoolboy of fourteen years old ... large and stout for his
 *   age, with a dingy and unwholesome skin; thick lineaments in a spacious
 *   visage, heavy limbs and large extremities ... a dim and bleared eye and
 *   flabby cheeks". So he is a head and more taller than Jane and twice her
 *   bulk, his face heavy and jowled with a small dull eye (./people.tsx).
 *   His dress is not described: a schoolboy's short jacket and trousers of
 *   about 1800, with a wide open shirt collar. He stands against the window,
 *   a black shape on the grey light.
 * - Jane as ./people.tsx cuts her: small, her face and arms pale, her dark
 *   hair loose, a pinafore over her dark frock (Bessie takes it off her in
 *   Chapter 4, so she wears one at home).
 *
 * Eliza and Georgiana, whom John calls to, are left out: the text does not
 * say where they stand. Mrs Reed and Bessie come only after the fight.
 *
 * Seeds: 1101 (the wall), 1102 (the wainscot and floor), 1103 (the rain),
 * 1104 (the shrub), 1105 (the books).
 */

const W = 860
const H = 340
/** The foot of the back wall. */
const FLOOR = 252
/** The window: the recess, and the panes inside it. */
const REC = { x0: 516, x1: 772, y0: 20, y1: 214 }
const PANE = { x0: 540, x1: 750, y0: 36, y1: 204 }

type Marks = {
  wall: string
  wains: string
  floor: string
  pools: string
  rain: string
  shrub: string
  books: string
  bookLines: string
  bookText: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // The light is the grey light of the window, falling off towards the door.
  const light = (x: number, y: number) =>
    Math.max(clamp(1 - Math.hypot((x - 640) * 0.7, (y - 110) * 1.1) / 360), 0.05)
  const wall = gougeField(rng(1101), { x0: 0, x1: W, y0: 4, y1: 184 }, light, {
    spacing: 6.5,
    len: [16, 60],
    gap: [6, 20],
    max: 3.8,
  })
  // The wainscot below the chair rail: upright cuts, wider where it is lit.
  const r = rng(1102)
  let wains = ''
  for (let x = 2; x < W; x += 9) {
    if (x > 6 && x < 128) continue
    if (x > 292 && x < 428) continue
    if (x > 508 && x < 780) continue
    const L = light(x, 214)
    wains += wedge(x + between(r, -0.6, 0.6), 196, x + between(r, -0.6, 0.6), 242, 0.4, 0.8 + L * 3)
  }
  // Floor: paper boards, ink joints running to a point above the middle.
  let floor = ''
  const V: P = [420, 30]
  for (let xt = -760; xt < 1700; xt += 34) {
    const xb = V[0] + (xt - V[0]) * ((H - V[1]) / (FLOOR - V[1]))
    let t0 = 0
    while (t0 < 1) {
      const t1 = Math.min(1, t0 + between(r, 0.3, 0.8))
      floor += wedge(
        xt + (xb - xt) * t0,
        FLOOR + (H - FLOOR) * t0,
        xt + (xb - xt) * t1,
        FLOOR + (H - FLOOR) * t1,
        0.8 + t0 * 3,
        0.8 + t1 * 3,
      )
      t0 = t1 + between(r, 0.02, 0.07)
    }
  }
  // Shadow under the wall, and pools under Jane, the book, John and his chair.
  let pools = ''
  for (let y = FLOOR + 1; y < FLOOR + 14; y += 3)
    pools += gouge(0, y, W, y, 2.4 - (y - FLOOR) * 0.15)
  const pool = (cx: number, cy: number, rx: number, ry: number) => {
    for (let y = cy - ry; y < cy + ry; y += 3.2) {
      const w = 1 - Math.abs(y - cy) / ry
      pools += gouge(cx - rx * w, y, cx + rx * w, y + 0.6, 0.6 + w * 2.2)
    }
  }
  pool(196, 318, 40, 7)
  pool(312, 322, 40, 5)
  pool(604, 326, 62, 9)
  pool(700, 306, 46, 6)
  // Slanting rain across the panes, blown from the left.
  const rr = rng(1103)
  let rain = ''
  for (let k = 0; k < 90; k++) {
    const x = between(rr, PANE.x0 - 50, PANE.x1)
    const y = between(rr, PANE.y0 - 10, PANE.y1)
    const len = between(rr, 12, 30)
    rain += gouge(x, y, x + len * 0.55, y + len, between(rr, 0.4, 0.65))
  }
  // A storm-beat shrub on the wet lawn, bent before the wind.
  const rs = rng(1104)
  let shrub =
    'M640 204L644 170C654 158 668 150 684 148C696 146 708 152 720 160C730 166 742 172 750 174L750 204Z'
  for (let k = 0; k < 16; k++) {
    const x = between(rs, 652, 726)
    const y = between(rs, 152, 172)
    shrub += gouge(x, y, x + between(rs, 14, 28), y + between(rs, 4, 12), between(rs, 0.8, 1.5))
  }
  // The books on the shelves: paper spines, with one gap where Bewick was.
  const rb = rng(1105)
  let books = ''
  let bookLines = ''
  const shelves = [
    { y0: 44, y1: 84 },
    { y0: 92, y1: 132 },
    { y0: 140, y1: 180 },
    { y0: 188, y1: 236 },
  ]
  shelves.forEach(({ y0, y1 }, s) => {
    let x = 306
    while (x < 414) {
      const w = between(rb, 6, 11)
      // The gap on the second shelf, where the book came from.
      if (s === 1 && x > 344 && x < 372) {
        x += 26
        continue
      }
      if (x + w > 414) break
      const top = y0 + between(rb, 0, 10)
      books += `M${n(x)} ${n(y1)}V${n(top)}H${n(x + w - 1.4)}V${n(y1)}Z`
      bookLines += `M${n(x + 1)} ${n(top + 5)}H${n(x + w - 2.4)}M${n(x + 1)} ${n(y1 - 6)}H${n(x + w - 2.4)}`
      x += w
    }
  })
  // Lines of letterpress on the open book's right-hand page, and under the
  // vignette on the left, following its tilt on the floor.
  let bookText = ''
  for (let k = 0; k < 5; k++) {
    const y = 309 + k * 3.4
    bookText += `M${n(316)} ${n(y + 0.6)}L${n(346 + k * 0.6)} ${n(y + 5.4 - k * 0.2)}`
  }
  bookText += 'M276 324L304 323M276 320.8L285 320.6'
  cached = { wall, wains, floor, pools, rain, shrub, books, bookLines, bookText }
  return cached
}

/**
 * Jane, by the door, facing right towards John: leaning in, her near arm
 * thrown out at him with the fingers spread, her far arm down at her side.
 */
const JANE_POSE = {
  facing: 1 as const,
  neck: [194, 159] as P,
  waist: [191, 191] as P,
  hemY: 274,
  head: { at: [198, 136] as P, rot: -7, scale: 0.9 },
  frock: { shoulder: 21, waistW: 16, front: 17, back: 20 },
  arm: 7.4,
  leg: 8,
  shoe: 0.82,
  near: {
    arm: [
      [197, 167],
      [220, 183],
      [246, 184],
    ] as P[],
    leg: [
      [195, 210],
      [203, 262],
      [211, 312],
    ] as P[],
    hand: { parts: SPREAD_HAND, scale: 0.92, rot: -6 },
  },
  far: {
    arm: [
      [187, 168],
      [179, 199],
      [176, 227],
    ] as P[],
    leg: [
      [187, 210],
      [183, 262],
      [179, 312],
    ] as P[],
    hand: { parts: LOOSE_HAND, scale: 0.92 },
  },
}

/** Her pinafore: paper over the front of her frock, from the bib to above the hem. */
const PINAFORE =
  'M195 166C198 165 201 165 203 167L200 191C203 214 206 244 207 267L184 269C183 250 185 222 188 196L191 169C192 167 193 166 195 166Z'
/** Folds and the waist-tie of the pinafore, in ink. */
const PINAFORE_FOLDS = 'M196 202L194 262M202 204L203 262M188 194Q194 196 200 193'

/** John, by his arm-chair, facing left: starting back, his near hand up, his mouth open. */
const JOHN_HEAD = { d: HEAD_JOHN_REED, at: [606, 87] as P, rot: 9, scale: 1.12 }
const JOHN_T = headAt(-1, JOHN_HEAD.at, JOHN_HEAD.rot, JOHN_HEAD.scale)
const JOHN = man({
  facing: -1,
  neck: [601, 117],
  hip: [607, 212],
  head: JOHN_HEAD,
  hair: JOHN_REED_HAIR,
  near: {
    arm: [
      [590, 133],
      [563, 160],
      [552, 130],
    ],
    leg: [
      [599, 216],
      [588, 268],
      [582, 318],
    ],
    hand: { parts: SPREAD_HAND, scale: 1.18, rot: -16 },
  },
  far: {
    arm: [
      [616, 134],
      [628, 175],
      [629, 210],
    ],
    leg: [
      [614, 216],
      [622, 268],
      [632, 318],
    ],
    hand: { parts: LOOSE_HAND, scale: 1.22 },
  },
  body: { width: 56, tails: 12, front: 6, flare: 3, long: true },
  arm: 15,
  leg: 18,
  shoe: 1.4,
})
/** His wide open shirt collar, in the head's frame. */
const JOHN_COLLAR =
  'M-11 21C-5 25 5 26 13 21.6L17 26.4C12 30.6 4 32.4 -4 31.6C-9 31 -13 28.8 -15 26.4Z'
/** The front edge and buttons of his jacket, its back seam, the creases of his trousers. */
const JOHN_CUTS =
  gouge(586, 140, 583, 214, 1.2, 0.6) +
  gouge(618, 146, 626, 214, 1, -0.6) +
  gouge(594, 236, 586, 304, 1.1, 0.6) +
  gouge(618, 238, 626, 304, 1, -0.4)

function BookAndBlow({ uid }: ArtProps) {
  const m = marks()
  const id = { pane: `${uid}-pane` }
  return (
    <>
      <defs>
        <clipPath id={id.pane}>
          <rect x={PANE.x0} y={PANE.y0} width={PANE.x1 - PANE.x0} height={PANE.y1 - PANE.y0} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [400, 170], push: 1.03 })}>
        {/* the wall, the chair rail, the wainscot and the skirting */}
        <path d={m.wall} fill={PAPER} />
        <rect x={0} y={186} width={W} height={5} fill={PAPER} />
        <rect x={0} y={193} width={W} height={1.6} fill={PAPER} />
        <path d={m.wains} fill={PAPER} />
        <rect x={0} y={243} width={W} height={9} fill={PAPER} />
        <rect x={0} y={246} width={W} height={1.4} fill={INK} />
        {/* the floor */}
        <rect x={0} y={FLOOR} width={W} height={H - FLOOR} fill={PAPER} />
        <path d={m.floor} fill={INK} />
        <path d={m.pools} fill={INK} />

        {/* the door, panelled mahogany in a paper architrave */}
        <rect x={6} y={0} width={122} height={FLOOR} fill={PAPER} />
        <rect x={12} y={0} width={110} height={FLOOR} fill={INK} />
        <g fill="none" stroke={PAPER} strokeWidth={LINE.fine}>
          <path d={`M9 0V${FLOOR}M125 0V${FLOOR}`} />
          <rect x={26} y={30} width={36} height={86} />
          <rect x={72} y={30} width={36} height={86} />
          <rect x={26} y={132} width={36} height={104} />
          <rect x={72} y={132} width={36} height={104} />
        </g>
        <path
          d={
            gouge(29, 34, 29, 112, 0.8) +
            gouge(75, 34, 75, 112, 0.8) +
            gouge(29, 136, 29, 232, 0.8) +
            gouge(75, 136, 75, 232, 0.8)
          }
          fill={PAPER}
        />
        <circle cx={112} cy={150} r={3.8} fill={PAPER} />
        <circle cx={112} cy={150} r={1.5} fill={INK} />

        {/* the bookcase, with the gap Bewick was taken from */}
        <rect x={296} y={26} width={128} height={FLOOR - 26} fill={PAPER} />
        <rect x={302} y={32} width={116} height={FLOOR - 32} fill={INK} />
        <path d={m.books} fill="none" stroke={PAPER} strokeWidth={1.2} strokeLinejoin="round" />
        <path d={m.bookLines} fill="none" stroke={PAPER} strokeWidth={1} />
        <g fill={PAPER}>
          {[86, 134, 182].map((y) => (
            <rect key={y} x={302} y={y} width={116} height={4.5} />
          ))}
        </g>
        <rect x={292} y={20} width={136} height={7} fill={PAPER} />

        {/* the window recess, the panes and the weather */}
        <rect
          x={REC.x0 - 6}
          y={REC.y0 - 6}
          width={REC.x1 - REC.x0 + 12}
          height={REC.y1 - REC.y0 + 6}
          fill={PAPER}
        />
        <rect x={REC.x0} y={REC.y0} width={REC.x1 - REC.x0} height={REC.y1 - REC.y0} fill={INK} />
        <rect
          x={PANE.x0}
          y={PANE.y0}
          width={PANE.x1 - PANE.x0}
          height={PANE.y1 - PANE.y0}
          fill={PAPER}
        />
        <g clipPath={`url(#${id.pane})`}>
          {/* banks of far mist; the dark wet lawn below, and the shrub */}
          <path
            d={
              gouge(548, 66, 640, 62, 1.1) +
              gouge(600, 84, 744, 80, 1) +
              gouge(552, 100, 690, 104, 0.9)
            }
            fill={INK}
          />
          <path
            d="M540 132C580 128 640 126 690 128C720 130 740 132 750 134L750 204L540 204Z"
            fill={INK}
          />
          <path d={m.shrub} fill={INK} />
          <path
            d={
              gouge(548, 144, 640, 142, 1) +
              gouge(560, 160, 636, 162, 0.9) +
              gouge(550, 190, 740, 194, 1.1)
            }
            fill={PAPER}
          />
          <g className="lc-drift-r" style={timing({ dur: 3 })}>
            <path d={m.rain} fill={INK} />
          </g>
        </g>
        <g fill={INK}>
          <rect x={PANE.x0} y={PANE.y0} width={PANE.x1 - PANE.x0} height={4} />
          <rect x={PANE.x0} y={PANE.y1 - 4} width={PANE.x1 - PANE.x0} height={4} />
          <rect x={643} y={PANE.y0} width={5} height={PANE.y1 - PANE.y0} />
          <rect x={PANE.x0} y={118} width={PANE.x1 - PANE.x0} height={4.5} />
        </g>
        {/* the window-seat */}
        <rect x={REC.x0 - 6} y={204} width={REC.x1 - REC.x0 + 12} height={9} fill={PAPER} />
        <rect x={REC.x0 - 6} y={213} width={REC.x1 - REC.x0 + 12} height={FLOOR - 213} fill={INK} />
        <path
          d={`M${REC.x0 - 3} ${FLOOR}V216M${REC.x1 + 3} ${FLOOR}V216`}
          stroke={PAPER}
          strokeWidth={LINE.fine}
        />
        {/* the red moreen curtain, pushed back where she came out */}
        <path
          d="M748 30C760 31 780 31 798 29L800 70C796 110 798 160 806 206L808 214C792 218 770 218 744 214L750 160C744 120 744 70 748 30Z"
          fill={RED}
        />
        <path
          d="M508 12H806V30C796 36 784 36 774 30C764 36 752 36 742 30C732 36 720 36 710 30C700 36 688 36 678 30C668 36 656 36 646 30C636 36 624 36 614 30C604 36 592 36 582 30C572 36 560 36 550 30C540 36 528 36 518 30C514 34 510 34 508 32Z"
          fill={RED}
        />
        <g fill="none" stroke={INK} strokeWidth={1.6} strokeLinecap="round">
          <path d="M760 40C758 90 758 150 762 212" />
          <path d="M774 40C774 96 778 152 784 214" />
          <path d="M788 38C790 100 794 154 800 210" />
          <path d="M508 18H806" strokeWidth={1.2} />
        </g>

        {/* John's arm-chair, beside him */}
        <path
          d="M666 176C678 166 712 166 724 176L726 262L664 262Z"
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
          strokeLinejoin="round"
        />
        <path d="M656 228H736L738 276H654Z" fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path
          d="M658 276L660 306M734 276L732 306"
          stroke={INK}
          strokeWidth={6}
          strokeLinecap="round"
        />
        <path
          d={
            gouge(674, 184, 674, 254, 0.9) +
            gouge(695, 178, 696, 254, 0.9) +
            gouge(716, 184, 718, 254, 0.9)
          }
          fill={PAPER}
        />

        {/* Bewick's History of British Birds, where it fell, open, its leaves splayed */}
        <path d="M266 316L310 306L356 314L358 330L310 334L264 331Z" fill={INK} />
        <path
          d="M272 313L309 304L310 327L270 327Z"
          fill={PAPER}
          stroke={INK}
          strokeWidth={1.1}
          strokeLinejoin="round"
        />
        <path
          d="M311 304L349 311L352 325L311 327Z"
          fill={PAPER}
          stroke={INK}
          strokeWidth={1.1}
          strokeLinejoin="round"
        />
        <path d={m.bookText} fill="none" stroke={INK} strokeWidth={0.9} />
        {/* a vignette on the left-hand page: a bird on a rock */}
        <path
          d="M282 316C284 312 290 311 294 313L298 312L295 315C294 318 289 319 285 318L281 319Z"
          fill={INK}
        />
        <path d="M280 321H300" stroke={INK} strokeWidth={1.6} />
        {/* leaves standing up from the spine, splayed */}
        <path
          d="M311 304C318 292 330 288 342 290L340 296C330 295 320 298 313 306Z"
          fill={PAPER}
          stroke={INK}
          strokeWidth={1}
          strokeLinejoin="round"
        />
        <path
          d="M311 305C316 296 324 293 333 293L332 298C324 299 318 302 313 307Z"
          fill={PAPER}
          stroke={INK}
          strokeWidth={0.9}
          strokeLinejoin="round"
        />

        {/* John */}
        <Figure parts={JOHN} cuts={JOHN_CUTS} halo={1.8}>
          <path d={JOHN_REED_HAIR_CUTS} transform={JOHN_T} fill={PAPER} />
          <path d={JOHN_COLLAR} transform={JOHN_T} fill={PAPER} stroke={INK} strokeWidth={0.9} />
          <path d={JOHN_REED_CUTS} transform={JOHN_T} fill={PAPER} />
        </Figure>

        {/* Jane */}
        <JaneGirl
          pose={JANE_POSE}
          dress="pinafore"
          eye="fierce"
          mouth="open"
          pinafore={PINAFORE}
          inkOver={PINAFORE_FOLDS}
        />
      </g>
    </>
  )
}

export const theBookAndTheBlow: LinocutArt = { width: W, height: H, Draw: BookAndBlow }
