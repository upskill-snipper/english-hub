import type { ArtProps, ComicPanel, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import {
  between,
  clamp,
  gouge,
  gougeField,
  n,
  rng,
  wedge,
  type Pt,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { Person, type Pose } from './people'

/**
 * Chapter 34 (Volume II, Chapter 11): "The first proposal", the seventh
 * moment in the guide's timeline. Every detail is from the held text
 * (src/data/full-texts/pride-and-prejudice.ts):
 *
 * - "Elizabeth, as if intending to exasperate herself as much as possible
 *   against Mr. Darcy, chose for her employment the examination of all the
 *   letters which Jane had written to her since her being in Kent." So Jane's
 *   letters lie spread on a little table, and one is still in her hand.
 * - It is evening: the Collinses have gone to Rosings, and she thinks of
 *   Colonel Fitzwilliam, "who had once before called late in the evening". So
 *   the one light is the window, the sky pale low down and clouding over above
 *   the dark garden. The parsonage has "the green pales and the laurel hedge"
 *   (Chapter 28) and the ladies' room "was backwards" (Chapter 30), on the
 *   garden, so the window shows a hedge and trees, not the road.
 * - "After a silence of several minutes he came towards her in an agitated
 *   manner, and thus began, 'In vain have I struggled.'" So Darcy has crossed
 *   the room to her and leans in, one hand held out as he speaks.
 * - "Elizabeth's astonishment was beyond expression. She stared, coloured,
 *   doubted, and was silent." So she has turned in her chair from the table
 *   and stares up at him, her brow raised, and the spot colour is her flush,
 *   one patch on the cheek, the kit's (./people.tsx), clear of the mouth.
 * - "Mr. Darcy, who was leaning against the mantle-piece" a little later, and
 *   the room has a "fender" (Chapter 28): so the chimney-piece stands behind
 *   him, with its fender before a grate. No fire is mentioned, so none is lit.
 *
 * Darcy is in evening dress, the kit's breeches and pale stockings: he has
 * walked over from Rosings, where the party is at tea.
 *
 * Seeds: 701 (the wall), 702 (the sky), 703 (the hedge and trees), 704 (the
 * floor and its shadow), 705 (the stone of the chimney-piece).
 */

const W = 860
const H = 340
/** The window on the garden, the dado rail and the skirting. */
const WIN = { x0: 486, x1: 666, y0: 40, y1: 220 }
const RAIL = 226
const SKIRT = 268

type Marks = {
  wall: string
  dusk: string
  hedge: string
  floor: string
  shaft: string
  stone: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // The room is lit only by the evening at the window.
  const light = (x: number, y: number) =>
    Math.max(clamp(1 - Math.hypot((x - 576) * 0.7, (y - 130) * 1.2) / 300) * 0.8, 0.04)
  const wall = gougeField(rng(701), { x0: 0, x1: W, y0: 6, y1: RAIL - 2 }, light, {
    spacing: 6.2,
    len: [14, 54],
  })
  // The evening sky, printed paper: long ink bands of cloud, heavier and
  // closer towards the top as the light goes, and clear above the trees.
  const sk = rng(702)
  let dusk = ''
  for (let y = WIN.y0 + 3; y < 168; y += 5.2) {
    const dark = clamp(1 - (y - WIN.y0) / 120)
    let x = WIN.x0 + between(sk, -30, 0)
    while (x < WIN.x1) {
      const len = between(sk, 24, 80)
      if (sk() < 0.25 + dark * 0.7)
        dusk += gouge(x, y, x + len, y + between(sk, -0.6, 0.6), 0.5 + dark * 2.2)
      x += len + between(sk, 6, 30) * (1.2 - dark)
    }
  }
  // The garden's laurel hedge and the trees beyond it, black against the sky.
  const hd = rng(703)
  let hedge = `M${WIN.x0} ${WIN.y1}`
  for (let x = WIN.x0; x <= WIN.x1; x += 5)
    hedge += `L${n(x)} ${n(184 + Math.sin(x / 7) * 2.6 + between(hd, -2, 2))}`
  hedge += `L${WIN.x1} ${WIN.y1}Z`
  // Beyond the hedge, a line of trees, ragged with spring leaf: crowns of
  // different heights run together along the top.
  const bumps: [number, number, number][] = [
    [500, 14, 14],
    [536, 24, 18],
    [584, 10, 12],
    [624, 20, 16],
    [660, 12, 12],
  ]
  const crown = (x: number) =>
    180 - bumps.reduce((s, [c, h, w]) => s + h * Math.exp(-(((x - c) / w) ** 2)), 0)
  hedge += `M${WIN.x0} 192`
  for (let x = WIN.x0; x <= WIN.x1; x += 3)
    hedge += `L${n(x)} ${n(crown(x) + between(hd, -1.8, 1.8))}`
  hedge += `L${WIN.x1} 192Z`
  // The floor: boards running to a vanishing point by the window.
  const f = rng(704)
  let floor = ''
  const V: Pt = [576, 90]
  for (let xt = -500; xt < 1600; xt += 32) {
    const xb = V[0] + (xt - V[0]) * ((H - V[1]) / (SKIRT - V[1]))
    let t0 = 0
    while (t0 < 1) {
      const t1 = Math.min(1, t0 + between(f, 0.3, 0.8))
      floor += wedge(
        xt + (xb - xt) * t0,
        SKIRT + (H - SKIRT) * t0,
        xt + (xb - xt) * t1,
        SKIRT + (H - SKIRT) * t1,
        0.8 + t0 * 2.6,
        0.8 + t1 * 2.6,
      )
      t0 = t1 + between(f, 0.03, 0.08)
    }
  }
  for (let y = SKIRT + 2; y < SKIRT + 12; y += 3)
    floor += gouge(0, y, W, y, 1.8 - (y - SKIRT) * 0.14)
  // Away from the window the floor falls into shadow: ink cut across the boards.
  let shaft = ''
  for (let y = SKIRT + 4; y < H; y += 3.2) {
    const t = (y - SKIRT) / (H - SKIRT)
    const l = 470 - t * 80
    const r = 690 + t * 90
    shaft += gouge(0, y, l, y + between(f, -0.5, 0.5), 1.1 + t * 0.6)
    shaft += gouge(r, y, W, y + between(f, -0.5, 0.5), 1.1 + t * 0.6)
  }
  // The stone of the chimney-piece, in the dusk away from the window:
  // close ink hatching, thinning towards the light.
  const st = rng(705)
  let stone = ''
  for (let x = 62; x < 240; x += 3.4) {
    const lit = clamp((x - 60) / 200)
    let y = 152 + between(st, 0, 8)
    while (y < SKIRT - 4) {
      const len = between(st, 10, 30)
      if (st() < 0.85 - lit * 0.45)
        stone += gouge(x, y, x + between(st, -0.4, 0.4), y + len, 0.9 - lit * 0.4)
      y += len + between(st, 3, 9)
    }
  }
  cached = { wall, dusk, hedge, floor, shaft, stone }
  return cached
}

/**
 * Darcy, come towards her in an agitated manner: leaning in, one hand held out
 * to her as he speaks.
 */
const DARCY: Pose = {
  look: 'darcy',
  body: { neck: [7, -138], hip: [0, -72] },
  head: { at: [11, -160], rot: 3 },
  near: {
    pts: [
      [5, -132],
      [18, -110],
      [36, -108],
    ],
    hand: 'open',
    deg: -8,
    thumb: -1,
    size: 15,
    spread: 14,
  },
  far: {
    pts: [
      [-4, -132],
      [-9, -104],
      [-7, -80],
    ],
    hand: 'mitt',
  },
  legs: {
    far: [
      [-3, -72],
      [-7, -38],
      [-10, -4],
    ],
    near: [
      [3, -72],
      [12, -38],
      [18, -4],
    ],
  },
}

/**
 * Elizabeth, turned in her chair from Jane's letters on the table behind her:
 * she stares up at him, coloured, one letter still in her hand.
 */
const ELIZABETH: Pose = {
  look: 'elizabeth',
  seated: true,
  flush: true,
  brow: 'arch',
  body: { neck: [-3, -104], hip: [0, -54] },
  head: { rot: -9 },
  legs: {
    far: [
      [-2, -52],
      [32, -55],
      [30, -4],
    ],
    near: [
      [2, -52],
      [38, -54],
      [38, -4],
    ],
  },
  near: {
    pts: [
      [1, -98],
      [8, -74],
      [26, -66],
    ],
    hand: 'grip',
  },
  far: {
    pts: [
      [-4, -98],
      [-14, -78],
      [-30, -72],
    ],
    hand: 'mitt',
    deg: 186,
  },
}
/** The letter in her hand, in her own frame: a folded sheet, its lines of writing in ink. */
const HELD_LETTER = 'M24 -76L42 -82L46 -66L28 -60Z'
const HELD_LINES = 'M28 -74L41 -78.4M29 -70.4L42 -74.8M30 -66.8L43 -71.2'

/** Jane's letters, spread on the table: [x, y, rotation]. */
const LETTERS: [number, number, number][] = [
  [742, 230, -8],
  [770, 226, 6],
  [796, 232, -3],
]

function TheFirstProposal({ uid }: ArtProps) {
  const m = marks()
  const glass = `${uid}-glass`
  return (
    <>
      <defs>
        <clipPath id={glass}>
          <rect x={WIN.x0} y={WIN.y0} width={WIN.x1 - WIN.x0} height={WIN.y1 - WIN.y0} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [500, 170], push: 1.03 })}>
        <path d={m.wall} fill={PAPER} />
        {/* the window on the garden at evening */}
        <rect
          x={WIN.x0 - 9}
          y={WIN.y0 - 9}
          width={WIN.x1 - WIN.x0 + 18}
          height={WIN.y1 - WIN.y0 + 18}
          fill={INK}
        />
        <rect
          x={WIN.x0 - 5}
          y={WIN.y0 - 5}
          width={WIN.x1 - WIN.x0 + 10}
          height={WIN.y1 - WIN.y0 + 10}
          fill="none"
          stroke={PAPER}
          strokeWidth={LINE.fine}
        />
        <g clipPath={`url(#${glass})`}>
          <rect
            x={WIN.x0}
            y={WIN.y0}
            width={WIN.x1 - WIN.x0}
            height={WIN.y1 - WIN.y0}
            fill={PAPER}
          />
          <path d={m.dusk} fill={INK} />
          <path d={m.hedge} fill={INK} />
        </g>
        <g fill={INK}>
          <rect x={WIN.x0} y={WIN.y0} width={WIN.x1 - WIN.x0} height={3} />
          <rect x={WIN.x0} y={WIN.y1 - 3} width={WIN.x1 - WIN.x0} height={3} />
          <rect x={WIN.x0 + 48} y={WIN.y0} width={3} height={WIN.y1 - WIN.y0} />
          <rect x={WIN.x0 + 97} y={WIN.y0} width={3} height={WIN.y1 - WIN.y0} />
          <rect x={WIN.x0} y={WIN.y0 + 42} width={WIN.x1 - WIN.x0} height={2.4} />
          <rect x={WIN.x0} y={WIN.y0 + 86} width={WIN.x1 - WIN.x0} height={4} />
          <rect x={WIN.x0} y={WIN.y0 + 130} width={WIN.x1 - WIN.x0} height={2.4} />
        </g>
        <rect x={WIN.x0 - 16} y={WIN.y1 + 4} width={WIN.x1 - WIN.x0 + 32} height={6} fill={PAPER} />

        {/* the chimney-piece, the mantelpiece he will lean on, and the fender */}
        <rect x={60} y={150} width={180} height={SKIRT - 150} fill={PAPER} />
        <path d={m.stone} fill={INK} />
        <path d="M46 138H254V150H46Z" fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />
        <rect x={42} y={134} width={216} height={4} fill={PAPER} />
        <path
          d={
            gouge(74, 158, 74, 262, 1.4) +
            gouge(226, 158, 226, 262, 1.4) +
            gouge(104, 158, 196, 158, 1.1)
          }
          fill={INK}
        />
        <path d={`M98 ${SKIRT}V200Q98 180 118 180H182Q202 180 202 200V${SKIRT}Z`} fill={INK} />
        <path
          d="M118 244H182M120 252H180M122 244V262M178 244V262"
          fill="none"
          stroke={PAPER}
          strokeWidth={1.4}
        />

        {/* the dado rail, the skirting and the floor */}
        <rect x={0} y={RAIL} width={60} height={3} fill={PAPER} />
        <rect x={240} y={RAIL} width={W - 240} height={3} fill={PAPER} />
        <rect x={0} y={SKIRT - 4} width={W} height={4} fill={PAPER} />
        <rect x={0} y={SKIRT} width={W} height={H - SKIRT} fill={PAPER} />
        <path d={m.floor} fill={INK} />
        <path d={m.shaft} fill={INK} />
        <path d="M80 272H220L230 284H70Z" fill={INK} />
        <path d="M70 284H230" stroke={PAPER} strokeWidth={1.2} />

        {/* the little table with Jane's letters, and Elizabeth's chair */}
        <path
          d="M714 238H820V244H714ZM722 244L718 318M812 244L816 318"
          fill={INK}
          stroke={INK}
          strokeWidth={4}
        />
        <path d="M712 236H822" stroke={PAPER} strokeWidth={1.4} />
        {LETTERS.map(([x, y, a]) => (
          <g key={x} transform={`translate(${x} ${y}) rotate(${a})`}>
            <rect x={-12} y={-7} width={24} height={14} fill={PAPER} stroke={INK} strokeWidth={1} />
            <path d="M-9 -3H8M-9 0H9M-9 3H6" stroke={INK} strokeWidth={0.8} />
          </g>
        ))}
        <path
          d="M694 150L701 150L703 240L642 240L642 247L701 247L703 318L696 318L694 247L650 247L650 318L643 318L641 240Z"
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />

        {/* Darcy, come towards her; Elizabeth, staring, coloured */}
        <Person pose={DARCY} at={[420, 328]} scale={1.4} />
        <Person pose={ELIZABETH} at={[672, 318]} scale={1.45} flip>
          <path d={HELD_LETTER} fill={PAPER} stroke={INK} strokeWidth={1} />
          <path d={HELD_LINES} stroke={INK} strokeWidth={0.8} />
        </Person>
      </g>
    </>
  )
}

export const theFirstProposalArt: LinocutArt = { width: W, height: H, Draw: TheFirstProposal }

export const theFirstProposal: ComicPanel = {
  moment: 'The first proposal',
  art: theFirstProposalArt,
  alt: "A linocut print of the sitting-room at Hunsford parsonage in the evening. On the left stands a pale stone chimney-piece with its mantelpiece and an unlit grate. In the middle, Mr Darcy, tall in a dark tailcoat, white neckcloth and pale stockings, has come across the room towards Elizabeth and holds one hand out to her as he speaks. Between them a window shows the evening sky over the dark tops of the garden trees. On the right, Elizabeth, in a pale gown, sits turned in her chair from a small table where Jane's letters lie spread; another letter is in her hand, and she stares up at him with her brow raised and her cheek flushed red.",
  quote: 'You must allow me to tell you how ardently I admire and love you.',
  quoteAt: 'top-left',
}
