import type { ArtProps, ComicPanel, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import {
  between,
  clamp,
  gouge,
  gougeField,
  n,
  ribbon,
  rng,
  wedge,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/timing'

import { Person, type P, type Pose } from './people'

/**
 * Chapters 19 and 20: "Mr Collins proposes", the fifth moment in the guide's
 * timeline. Drawn at the proposal itself, in the breakfast-room at Longbourn.
 * Every detail is from the held text
 * (src/data/full-texts/pride-and-prejudice.ts):
 *
 * - "On finding Mrs. Bennet, Elizabeth, and one of the younger girls
 *   together, soon after breakfast, he addressed the mother"; "Mrs. Bennet and
 *   Kitty walked off". So it is morning, and the two are alone: the door on
 *   the left is shut behind the mother and Kitty. Mrs Bennet waits outside it
 *   "in the vestibule" (Chapter 20), unseen. The room is the
 *   "breakfast-room" (Chapter 20).
 * - "she sat down again, and tried to conceal by incessant employment the
 *   feelings which were divided between distress and diversion." So
 *   Elizabeth sits with her needlework, a white piece of work in her lap and
 *   her work-basket on the floor beside her chair.
 * - "'I am not now to learn,' replied Mr. Collins, with a formal wave of the
 *   hand". So he stands before her, upright and solemn, the kit's tall,
 *   heavy clergyman all in black, one hand lifted open in that wave, his
 *   mouth open: he is talking.
 * - "Do not consider me now as an elegant female intending to plague you,
 *   but as a rational creature speaking the truth from her heart." So
 *   Elizabeth looks up at him, her chin up, and lifts her hand, open, to stop
 *   him. A refusal is a word, not a gesture, in the text; the raised hand is
 *   the print's way of showing the word at panel size.
 * - Mr Collins came "Monday, November 18th" (Chapter 13), and the ball was on
 *   the Tuesday after, so this is a late November morning: through the window
 *   the sky is pale and the one tree beyond the glass is bare. No fire is
 *   mentioned, so none is lit, and nothing in this print is red.
 *
 * The breakfast-room is not described, so it is plain: a panelled door, a
 * sash window, a side table, a boarded floor. Mr Collins's head is set
 * against the window, the lightest thing in the room, so his profile reads
 * first; Elizabeth's pale gown stands against the darker wall away from it.
 * Nothing is taken from any film or television production.
 *
 * Seeds: 1501 (the wall), 1502 (the floor), 1503 (the tree), 1504 (the
 * door's grain).
 */

const W = 860
const H = 340
/** The foot of the back wall. */
const BASE = 262
/** The window's glass. */
const WIN = { x0: 236, x1: 376, y0: 30, y1: 206 }

type Marks = {
  wall: string
  wains: string
  floor: string
  shade: string
  tree: string
  grain: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const r = rng(1501)
  // The morning comes in at the window; the wall is cut away round it and
  // darkens towards the right, behind Elizabeth.
  const light = (x: number, y: number) => {
    const l = clamp(1 - Math.hypot((x - 306) * 0.62, (y - 118) * 0.95) / 300)
    return Math.max(l, 0.06)
  }
  const wall = gougeField(r, { x0: 0, x1: W, y0: 4, y1: 192 }, light, {
    spacing: 6.6,
    len: [16, 64],
  })
  let wains = ''
  for (let x = 4; x < W; x += 10) {
    if (x > 18 && x < 136) continue
    const L = light(x, 226)
    wains += wedge(
      x + between(r, -0.6, 0.6),
      204,
      x + between(r, -0.6, 0.6),
      BASE - 8,
      0.4,
      0.5 + L * 2.8,
    )
  }

  // Boards to a point under the window, and the light thrown on them.
  const f = rng(1502)
  let floor = ''
  const V: P = [306, 30]
  for (let xt = -800; xt < 1600; xt += 36) {
    const xb = V[0] + (xt - V[0]) * ((H - V[1]) / (BASE - V[1]))
    let t0 = 0
    while (t0 < 1) {
      const t1 = Math.min(1, t0 + between(f, 0.3, 0.8))
      floor += wedge(
        xt + (xb - xt) * t0,
        BASE + (H - BASE) * t0,
        xt + (xb - xt) * t1,
        BASE + (H - BASE) * t1,
        0.8 + t0 * 2.6,
        0.8 + t1 * 2.6,
      )
      t0 = t1 + between(f, 0.02, 0.07)
    }
  }
  let shade = ''
  for (let y = BASE + 2; y < BASE + 16; y += 3) shade += gouge(0, y, W, y, 2.2 - (y - BASE) * 0.12)
  // The right of the room, away from the window, in shadow across the boards.
  for (let y = BASE + 6; y < H; y += 3.2) {
    const t = (y - BASE) / (H - BASE)
    shade += gouge(700 - t * 40, y, W, y + between(f, -0.5, 0.5), 1 + t * 0.6)
  }
  // Pools of shadow under the two of them.
  for (const [x0, x1, yc] of [
    [258, 360, 326],
    [548, 690, 324],
  ]) {
    for (let y = yc - 7; y < yc + 8; y += 3) {
      const w = 1 - Math.abs(y - yc) / 8
      shade += gouge(x0 - w * 8, y, x1 + w * 8, y + 0.5, 0.6 + w * 1.8)
    }
  }

  // Beyond the glass, one bare tree: a trunk and its branches as tapering
  // ribbons, and the hedge low along the bottom.
  const t = rng(1503)
  let tree = ribbon(
    [
      [338, 206],
      [336, 170],
      [332, 140],
      [330, 110],
    ],
    7,
    0.4,
    false,
  )
  const branch = (pts: P[], w: number) => {
    tree += ribbon(pts, w, 0.6, false)
  }
  branch(
    [
      [333, 150],
      [318, 132],
      [300, 118],
      [288, 112],
    ],
    3.6,
  )
  branch(
    [
      [334, 132],
      [350, 112],
      [362, 98],
      [370, 94],
    ],
    3.2,
  )
  branch(
    [
      [331, 118],
      [326, 96],
      [318, 78],
      [312, 68],
    ],
    2.8,
  )
  branch(
    [
      [332, 112],
      [342, 92],
      [344, 76],
      [350, 64],
    ],
    2.4,
  )
  for (let k = 0; k < 18; k++) {
    const x = between(t, 280, 372)
    const y = between(t, 60, 130)
    const a = between(t, -2.4, -0.7)
    const len = between(t, 6, 14)
    tree += gouge(x, y, x + Math.cos(a) * len, y + Math.sin(a) * len, 0.6)
  }
  tree += `M${WIN.x0} ${WIN.y1}L${WIN.x0} 190`
  for (let x = WIN.x0; x <= WIN.x1; x += 6) tree += `L${n(x)} ${n(188 + between(t, -3, 3))}`
  tree += `L${WIN.x1} ${WIN.y1}Z`

  // The grain of the door's panels.
  const g = rng(1504)
  let grain = ''
  for (const [x0, x1, y0, y1] of [
    [40, 70, 56, 120],
    [80, 110, 56, 120],
    [40, 70, 136, 246],
    [80, 110, 136, 246],
  ]) {
    for (let x = x0 + 5; x < x1 - 2; x += 6)
      grain += gouge(
        x + between(g, -0.6, 0.6),
        y0 + 4,
        x + between(g, -1, 1),
        y1 - 4,
        0.5,
        between(g, -0.6, 0.6),
      )
  }
  cached = { wall, wains, floor, shade, tree, grain }
  return cached
}

/** Mr Collins, upright and solemn, one hand lifted open in "a formal wave of the hand", talking. */
const COLLINS: Pose = {
  look: 'collins',
  mouth: 'open',
  head: { rot: 2 },
  near: {
    pts: [
      [3, -132],
      [20, -114],
      [36, -122],
    ],
    hand: 'open',
    deg: -38,
    spread: 16,
    thumb: -1,
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
      [-5, -38],
      [-7, -4],
    ],
    near: [
      [3, -72],
      [8, -38],
      [12, -4],
    ],
  },
}

/** Elizabeth, at her work, looking up at him and lifting her hand to stop him. */
const ELIZABETH: Pose = {
  look: 'elizabeth',
  seated: true,
  body: { neck: [2, -100], hip: [0, -50] },
  head: { rot: -8 },
  legs: {
    far: [
      [-2, -50],
      [28, -52],
      [27, -4],
    ],
    near: [
      [2, -50],
      [32, -52],
      [32, -4],
    ],
  },
  // The arm held out at length, the hand up, well clear of her face: cut
  // first with the hand close in, it read as a hand put to her mouth.
  near: {
    pts: [
      [4, -94],
      [24, -90],
      [42, -94],
    ],
    hand: 'open',
    deg: -80,
    spread: 15,
    size: 14,
    thumb: 1,
  },
  far: {
    pts: [
      [-2, -94],
      [0, -72],
      [18, -62],
    ],
    hand: 'grip',
  },
}
/** Her needlework, a white piece of work over her lap, in her own frame. */
const WORK = 'M8 -60C14 -66 26 -66 34 -62L38 -52C30 -48 18 -48 10 -51Z'
const WORK_STITCH = 'M14 -58L32 -59M16 -54L34 -55'

/** A plain side chair of the time, seen from the side, its back to the right. */
function Chair({ x }: { x: number }) {
  return (
    <g>
      <path
        d={`M${x + 52} 166L${x + 59} 166L${x + 61} 266L${x} 266L${x} 273L${x + 59} 273L${x + 61} 322L${x + 54} 322L${x + 52} 273L${x + 8} 273L${x + 8} 322L${x + 1} 322L${x - 1} 266Z`}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
        strokeLinejoin="round"
      />
      <path
        d={`M${x + 53} 186H${x + 60}M${x + 53} 206H${x + 60}`}
        stroke={PAPER}
        strokeWidth={1.2}
      />
    </g>
  )
}

/** The work-basket on the floor beside her chair: a round basket, its handle, white work spilling from it. */
function WorkBasket({ at: [x, y] }: { at: P }) {
  return (
    <g>
      <path
        d={`M${x - 20} ${y - 30}Q${x} ${y - 66} ${x + 20} ${y - 30}`}
        fill="none"
        stroke={PAPER}
        strokeWidth={5.6}
      />
      <path
        d={`M${x - 20} ${y - 30}Q${x} ${y - 66} ${x + 20} ${y - 30}`}
        fill="none"
        stroke={INK}
        strokeWidth={3}
      />
      <path
        d={`M${x - 24} ${y - 30}H${x + 24}L${x + 19} ${y}H${x - 19}Z`}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
        strokeLinejoin="round"
      />
      <path
        d={`M${x - 22} ${y - 22}H${x + 22}M${x - 21} ${y - 14}H${x + 21}M${x - 20} ${y - 6}H${x + 20}`}
        stroke={PAPER}
        strokeWidth={1.2}
      />
      <path
        d={`M${x - 14} ${y - 30}C${x - 12} ${y - 40} ${x + 4} ${y - 42} ${x + 10} ${y - 32}C${x + 18} ${y - 26} ${x + 26} ${y - 22} ${x + 28} ${y - 14}L${x + 22} ${y - 12}C${x + 18} ${y - 20} ${x + 10} ${y - 26} ${x + 2} ${y - 30}Z`}
        fill={PAPER}
        stroke={INK}
        strokeWidth={1}
      />
    </g>
  )
}

function MrCollinsProposes({ uid }: ArtProps) {
  const m = marks()
  const win = `${uid}-win`
  return (
    <>
      <defs>
        <clipPath id={win}>
          <rect x={WIN.x0} y={WIN.y0} width={WIN.x1 - WIN.x0} height={WIN.y1 - WIN.y0} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [440, 170], push: 1.03 })}>
        {/* the wall, its dado and panelling, and the floor */}
        <path d={m.wall} fill={PAPER} />
        <rect x={0} y={194} width={W} height={6} fill={PAPER} />
        <rect x={0} y={202} width={W} height={1.6} fill={PAPER} />
        <path d={m.wains} fill={PAPER} />
        <rect x={0} y={BASE - 6} width={W} height={6} fill={PAPER} />
        <rect x={0} y={BASE} width={W} height={H - BASE} fill={PAPER} />
        <path d={m.floor} fill={INK} />
        <path d={m.shade} fill={INK} />

        {/* the door on the left, shut behind Mrs Bennet and Kitty */}
        <rect x={22} y={34} width={106} height={BASE - 34} fill={INK} />
        <rect x={30} y={42} width={90} height={BASE - 42} fill={PAPER} />
        <path d={m.grain} fill={INK} />
        <g fill="none" stroke={INK} strokeWidth={LINE.bold}>
          <rect x={40} y={56} width={30} height={64} />
          <rect x={80} y={56} width={30} height={64} />
          <rect x={40} y={136} width={30} height={110} />
          <rect x={80} y={136} width={30} height={110} />
        </g>
        <circle cx={114} cy={150} r={3.2} fill={INK} />

        {/* the window: a pale November sky, a bare tree, the hedge */}
        <rect
          x={WIN.x0 - 10}
          y={WIN.y0 - 10}
          width={WIN.x1 - WIN.x0 + 20}
          height={WIN.y1 - WIN.y0 + 16}
          fill={INK}
        />
        <rect x={WIN.x0} y={WIN.y0} width={WIN.x1 - WIN.x0} height={WIN.y1 - WIN.y0} fill={PAPER} />
        <g clipPath={`url(#${win})`}>
          <path d={m.tree} fill={INK} />
        </g>
        <g fill={INK}>
          <rect x={WIN.x0 - 2} y={116} width={WIN.x1 - WIN.x0 + 4} height={5} />
          <rect x={WIN.x0} y={73} width={WIN.x1 - WIN.x0} height={2.4} />
          <rect x={WIN.x0} y={160} width={WIN.x1 - WIN.x0} height={2.4} />
          <rect x={WIN.x0 + 45} y={WIN.y0} width={2.4} height={WIN.y1 - WIN.y0} />
          <rect x={WIN.x0 + 92} y={WIN.y0} width={2.4} height={WIN.y1 - WIN.y0} />
        </g>
        <rect x={WIN.x0 - 14} y={WIN.y1 + 2} width={WIN.x1 - WIN.x0 + 28} height={6} fill={PAPER} />
        <rect x={WIN.x0 - 14} y={WIN.y1 + 8} width={WIN.x1 - WIN.x0 + 28} height={2} fill={INK} />

        {/* the side table against the wall behind her, and its two candlesticks, unlit */}
        <path
          d="M712 196H836V204H712ZM720 204L718 262M828 204L830 262"
          fill={INK}
          stroke={INK}
          strokeWidth={4}
        />
        <path d="M710 194H838" stroke={PAPER} strokeWidth={1.4} />
        {[738, 810].map((x) => (
          <g key={x}>
            <path
              d={`M${x - 7} 194H${x + 7}L${x + 3} 188H${x + 1.6}V170H${x - 1.6}V188H${x - 3}Z`}
              fill={INK}
              stroke={PAPER}
              strokeWidth={1}
            />
            <rect
              x={x - 1.8}
              y={154}
              width={3.6}
              height={16}
              fill={PAPER}
              stroke={INK}
              strokeWidth={0.6}
            />
          </g>
        ))}

        {/* Elizabeth at her work, her chair and her basket */}
        <Chair x={542} />
        <WorkBasket at={[642, 318]} />
        <Person pose={ELIZABETH} at={[600, 322]} scale={1.46} flip>
          <path d={WORK} fill={PAPER} stroke={INK} strokeWidth={0.9} />
          <path d={WORK_STITCH} stroke={INK} strokeWidth={0.6} fill="none" />
        </Person>

        {/* Mr Collins, with a formal wave of the hand */}
        <Person pose={COLLINS} at={[300, 326]} scale={1.4} />
      </g>
    </>
  )
}

export const mrCollinsProposesArt: LinocutArt = { width: W, height: H, Draw: MrCollinsProposes }

export const mrCollinsProposes: ComicPanel = {
  moment: 'Mr Collins proposes',
  art: mrCollinsProposesArt,
  alt: "A linocut print of the breakfast-room at Longbourn on a November morning, lit by a tall sash window through which a bare tree stands against a pale sky. On the left is a shut panelled door. In front of the window Mr Collins stands upright and solemn, tall and heavy in his clergyman's black from collar to shoe, his mouth open as he talks and one hand lifted open in a formal wave. On the right, Elizabeth sits on a plain chair in a pale gown with a white piece of needlework in her lap and her work-basket on the floor beside her. She looks up at him, her chin raised, and lifts one open hand to stop him. A side table with two unlit candlesticks stands against the darker wall behind her.",
  quote: 'a rational creature speaking the truth from her heart',
  quoteAt: 'top-right',
}
