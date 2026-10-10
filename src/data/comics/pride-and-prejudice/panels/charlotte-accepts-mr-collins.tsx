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
  type Pt,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { Person, TALL_HAT, TALL_HAT_BAND, type Pose } from './people'

/**
 * Chapter 22: "Charlotte accepts Mr Collins", the sixth moment in the guide's
 * timeline. The moment has two places on two mornings, so the block is cut in
 * two, as Animal Farm's "Mollie leaves" is: the lane at Lucas Lodge on the
 * left, and Longbourn the next morning on the right. Every detail is from the
 * held text (src/data/full-texts/pride-and-prejudice.ts):
 *
 * LEFT, THE LANE AT LUCAS LODGE.
 * - Collins went "to Lucas Lodge to throw himself at her feet"; "Miss Lucas
 *   perceived him from an upper window as he walked towards the house, and
 *   instantly set out to meet him accidentally in the lane. But little had she
 *   dared to hope that so much love and eloquence awaited her there." "In as
 *   short a time as Mr. Collins's long speeches would allow, every thing was
 *   settled between them". So the house stands behind its hedge with its upper
 *   windows looking down the lane, and in the lane Collins bows over his
 *   speech, his hat held to his coat and his other hand held out to her, while
 *   Charlotte, come out in her bonnet, stands composed with her hands folded.
 *   (To "throw himself at her feet" is the phrase for proposing; he is not
 *   drawn on his knees.)
 * - Lucas Lodge is only "a house about a mile from Meryton" (Chapter 5), so it
 *   is a plain square house of the period. Collins came on "Monday, November
 *   18th" and stays "till the Saturday se'night following" (Chapter 13), so it
 *   is the end of November: a grey sky and a bare tree.
 * - Collins and Charlotte are the shared kit's (./people.tsx): he "a tall,
 *   heavy looking young man" in a clergyman's black; she plain, in a dark gown.
 *
 * RIGHT, LONGBOURN, THE NEXT MORNING.
 * - "Miss Lucas called soon after breakfast, and in a private conference with
 *   Elizabeth related the event of the day before." So Charlotte is a morning
 *   caller in her bonnet, and the two are alone in a room with a window on a
 *   grey morning and a bare tree in the garden.
 * - "her astonishment was consequently so great as to overcome at first the
 *   bounds of decorum, and she could not help crying out"; "The steady
 *   countenance which Miss Lucas had commanded"; "she soon regained her
 *   composure, and calmly replied". So Elizabeth, standing, is drawn back with
 *   one hand at her breast, her brow raised and her mouth open, while
 *   Charlotte sits upright and still with her hands in her lap. Then come the
 *   words on the panel.
 *
 * Mr Collins left Longbourn early that morning ("he was to begin his journey
 * too early on the morrow to see any of the family"), so he is not in the
 * right-hand scene. Nothing in either scene is given a colour, so the print
 * has no red.
 *
 * Seeds: 601 (sky), 602 (fields), 603 (hedges and ruts), 604 (the tree), 605
 * (the wall at Longbourn), 606 (the floor), 607 (the tree outside the window).
 */

const W = 860
const H = 340
/** The gutter between the two scenes. */
const GUTTER = { x0: 336, x1: 348 }
/** Left: the line of the far fields. Right: the window, and the skirting. */
const HORIZON = 202
const WIN = { x0: 548, x1: 680, y0: 92, y1: 234 }
const SKIRT = 270

type Marks = {
  sky: string
  fields: string
  hedgeL: string
  hedgeR: string
  ruts: string
  tree: string
  twigs: string
  facade: string
  wall: string
  floor: string
  view: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // LEFT. A grey November morning: the sky palest at the horizon.
  const sky = gougeField(
    rng(601),
    { x0: 0, x1: GUTTER.x0, y0: 4, y1: HORIZON },
    (_x, y) => 0.72 + 0.28 * clamp(y / HORIZON),
    { spacing: 5.4, len: [26, 80], gap: [3, 8], max: 4.6 },
  )
  // The fields beyond the hedges: dark, cut with a few furrows.
  const f = rng(602)
  let fields = ''
  for (let y = HORIZON + 4; y < 236; y += 5) {
    let x = between(f, -20, 0)
    while (x < GUTTER.x0) {
      const len = between(f, 18, 50)
      if (f() < 0.6)
        fields += gouge(x, y, x + len, y + between(f, -0.6, 0.6), 0.5 + (y - HORIZON) * 0.02)
      x += len + between(f, 6, 22)
    }
  }
  // Hedge banks either side of the lane, in ink, cut with sprigs.
  const h = rng(603)
  const sprigs = (x0: number, x1: number, y0: number, y1: number, count: number) => {
    let d = ''
    for (let i = 0; i < count; i++) {
      const x = between(h, x0, x1)
      const y = between(h, y0, y1)
      const a = between(h, -0.9, 0.9) - Math.PI / 2
      const L = between(h, 4, 9)
      d += gouge(x, y, x + Math.cos(a) * L, y + Math.sin(a) * L, 0.7)
    }
    return d
  }
  const hedgeL = sprigs(0, 196, 236, 258, 70)
  const hedgeR = sprigs(150, GUTTER.x0, 214, 232, 60) + sprigs(268, GUTTER.x0, 236, 316, 40)
  // Two wheel ruts in the lane, curving down from the gate, and a few stones.
  let ruts =
    ribbon(
      [
        [244, 226],
        [226, 244],
        [196, 268],
        [150, 300],
        [96, 336],
      ],
      3.4,
      0.6,
      false,
    ) +
    ribbon(
      [
        [256, 226],
        [252, 248],
        [240, 276],
        [222, 306],
        [200, 340],
      ],
      3.4,
      0.6,
      false,
    )
  for (let i = 0; i < 18; i++) {
    const t = between(h, 0.1, 0.95)
    const x = 250 - 150 * t + between(h, -50, 70) * t
    const y = 228 + 104 * t
    ruts += gouge(x, y, x + between(h, 4, 9) * t + 2, y + between(h, -0.6, 0.6), 0.5 + t * 0.6)
  }
  // The bare tree by the lane: limbs as tapered ribbons, then twigs.
  const t = rng(604)
  const limbs: Pt[][] = [
    [
      [36, 300],
      [38, 240],
      [42, 180],
      [48, 120],
      [52, 70],
      [58, 20],
    ],
    [
      [42, 176],
      [66, 150],
      [92, 132],
      [120, 120],
      [146, 112],
    ],
    [
      [46, 132],
      [30, 104],
      [16, 82],
      [4, 64],
    ],
    [
      [50, 96],
      [74, 72],
      [96, 54],
      [116, 34],
    ],
    [
      [40, 222],
      [18, 206],
      [2, 198],
    ],
    [
      [54, 60],
      [40, 40],
      [32, 18],
    ],
  ]
  let tree = ''
  limbs.forEach((l, i) => (tree += ribbon(l, i === 0 ? 20 : 8, 0.45, false)))
  let twigs = ''
  for (const l of limbs) {
    for (let i = 1; i < l.length; i++) {
      const [x, y] = l[i]
      for (let k = 0; k < 3; k++) {
        const a = between(t, -2.6, -0.5)
        const L = between(t, 10, 24)
        twigs += `M${n(x)} ${n(y)}q${n(Math.cos(a) * L * 0.5 + between(t, -3, 3))} ${n(Math.sin(a) * L * 0.5)} ${n(Math.cos(a) * L)} ${n(Math.sin(a) * L)}`
      }
    }
  }
  // Lucas Lodge's front: pale stucco, the shadow of the eaves cut along its
  // top, and its corner stones.
  let facade = ''
  for (let y = 108; y < 120; y += 3) facade += gouge(188, y, 316, y, 1.3 - (y - 108) * 0.09)
  for (let y = 110; y < 204; y += 9) facade += `M188 ${y}h7M309 ${y}h7`
  // RIGHT. The morning room at Longbourn, lit from its one window.
  const light = (x: number, y: number) =>
    Math.max(clamp(1 - Math.hypot((x - 614) * 0.8, (y - 150) * 1.1) / 240) * 0.9, 0.05)
  const wall = gougeField(rng(605), { x0: GUTTER.x1, x1: W, y0: 6, y1: 244 }, light, {
    spacing: 6,
    len: [14, 56],
  })
  const fl = rng(606)
  let floor = ''
  const V: Pt = [614, 120]
  for (let xt = -400; xt < 1700; xt += 30) {
    const xb = V[0] + (xt - V[0]) * ((H - V[1]) / (SKIRT - V[1]))
    let t0 = 0
    while (t0 < 1) {
      const t1 = Math.min(1, t0 + between(fl, 0.3, 0.8))
      floor += wedge(
        xt + (xb - xt) * t0,
        SKIRT + (H - SKIRT) * t0,
        xt + (xb - xt) * t1,
        SKIRT + (H - SKIRT) * t1,
        0.8 + t0 * 2.6,
        0.8 + t1 * 2.6,
      )
      t0 = t1 + between(fl, 0.03, 0.08)
    }
  }
  for (let y = SKIRT + 2; y < SKIRT + 12; y += 3)
    floor += gouge(GUTTER.x1, y, W, y, 1.8 - (y - SKIRT) * 0.14)
  // Through the window: the bare boughs of a tree in the garden.
  const v = rng(607)
  let view = ''
  const boughs: Pt[][] = [
    [
      [552, 214],
      [580, 186],
      [606, 172],
      [640, 160],
    ],
    [
      [580, 186],
      [588, 150],
      [602, 120],
    ],
    [
      [606, 172],
      [632, 132],
      [652, 108],
    ],
  ]
  for (const b of boughs) view += ribbon(b, 4.4, 0.5, false)
  for (const b of boughs)
    for (const [x, y] of b.slice(1)) {
      for (let k = 0; k < 3; k++) {
        const a = between(v, -2.4, -0.3)
        const L = between(v, 8, 16)
        view += gouge(x, y, x + Math.cos(a) * L, y + Math.sin(a) * L, 0.6)
      }
    }
  cached = { sky, fields, hedgeL, hedgeR, ruts, tree, twigs, facade, wall, floor, view }
  return cached
}

/** Lucas Lodge: a plain square house of the period, its windows in ink. */
function LucasLodge() {
  const m = marks()
  const windows: [number, number, number, number][] = [
    [200, 122, 18, 26],
    [243, 122, 18, 26],
    [286, 122, 18, 26],
    [200, 164, 18, 28],
    [286, 164, 18, 28],
  ]
  return (
    <g>
      {/* roof, hipped, and its two chimneys */}
      <path d="M180 106L204 78H300L324 106Z" fill={INK} />
      <path d="M214 80V62H226V80M278 80V62H290V80Z" fill={INK} />
      <path d={gouge(206, 92, 298, 92, 0.8) + gouge(198, 100, 306, 100, 0.8)} fill={PAPER} />
      {/* the front, in pale stucco */}
      <rect x={186} y={106} width={132} height={104} fill={PAPER} />
      <path d={m.facade} fill={INK} stroke={INK} strokeWidth={1.4} />
      <rect x={186} y={106} width={132} height={104} fill="none" stroke={INK} strokeWidth={2} />
      <path d="M182 106H322" stroke={INK} strokeWidth={4} />
      {windows.map(([x, y, w, hh]) => (
        <g key={`${x}-${y}`}>
          <rect x={x} y={y} width={w} height={hh} fill={INK} />
          <path
            d={`M${x + w / 2} ${y}V${y + hh}M${x} ${y + hh / 2}H${x + w}`}
            stroke={PAPER}
            strokeWidth={1.2}
          />
          <rect x={x - 2} y={y + hh} width={w + 4} height={2.4} fill={INK} />
        </g>
      ))}
      {/* the door, under a fanlight */}
      <path d="M242 210V176Q252 166 262 176V210Z" fill={INK} />
      <path d="M244.6 177Q252 170 259.4 177" fill="none" stroke={PAPER} strokeWidth={1} />
      <path d="M252 181V210" stroke={PAPER} strokeWidth={0.9} />
    </g>
  )
}

// ── THE PEOPLE, from the shared kit (./people.tsx) ──────────────────────────

/**
 * Mr Collins in the lane, bowing over his speech: leaning forward from the
 * hip, his head bowed, his hat held to his breast and his other hand held out
 * to her.
 */
const COLLINS: Pose = {
  look: 'collins',
  body: { neck: [24, -130], hip: [0, -72] },
  head: { at: [31, -153], rot: 22 },
  far: {
    pts: [
      [26, -126],
      [46, -108],
      [64, -98],
    ],
    hand: 'open',
    deg: 22,
    thumb: -1,
  },
  near: {
    pts: [
      [22, -124],
      [14, -98],
      [32, -104],
    ],
    hand: 'grip',
  },
  legs: {
    far: [
      [-2, -72],
      [-8, -38],
      [-12, -4],
    ],
    near: [
      [2, -72],
      [10, -38],
      [14, -4],
    ],
  },
}
/** His hat, held by the brim against his coat, the crown hanging down. In his own frame. */
const COLLINS_HAT = 'translate(38 -114) rotate(180) scale(0.82)'

/** Charlotte in the lane, come out to meet him: composed, her hands folded, her head inclined. */
const CHARLOTTE_LANE: Pose = {
  look: 'charlotte',
  hat: true,
  head: { rot: 7 },
  far: {
    pts: [
      [-3, -126],
      [-1, -104],
      [8, -100],
    ],
    hand: 'mitt',
    deg: 104,
  },
  near: {
    pts: [
      [3, -126],
      [6, -104],
      [11, -99],
    ],
    hand: 'mitt',
    deg: 112,
  },
}

/** Charlotte at Longbourn the next morning: seated, upright, her bonnet on, her hands in her lap. */
const CHARLOTTE_ROOM: Pose = {
  look: 'charlotte',
  hat: true,
  seated: true,
  body: { neck: [3, -104], hip: [0, -54] },
  head: { rot: 2 },
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
  far: {
    pts: [
      [-1, -98],
      [2, -74],
      [22, -66],
    ],
    hand: 'mitt',
    deg: 8,
  },
  near: {
    pts: [
      [5, -98],
      [8, -74],
      [28, -64],
    ],
    hand: 'mitt',
    deg: 8,
  },
}
/** A plain chair of the time behind her: the back, the seat and the legs. */
const CHAIR =
  'M452 164L460 164L466 244L514 244L514 250L468 250L466 306L460 306L458 250L450 250Z' +
  'M508 250L514 250L516 306L510 306Z'

/** Elizabeth, standing, drawn back from the news, one hand at her breast and her brow raised. */
const ELIZABETH: Pose = {
  look: 'elizabeth',
  head: { rot: -7 },
  brow: 'arch',
  mouth: 'open',
  near: {
    pts: [
      [3, -126],
      [-3, -104],
      [9, -114],
    ],
    hand: 'open',
    deg: -72,
    size: 13,
    spread: 20,
    thumb: -1,
  },
  far: {
    pts: [
      [-3, -126],
      [-8, -104],
      [-9, -84],
    ],
    hand: 'mitt',
  },
}

function CharlotteAcceptsMrCollins({ uid }: ArtProps) {
  const m = marks()
  const left = `${uid}-left`
  const right = `${uid}-right`
  const glass = `${uid}-glass`
  return (
    <>
      <defs>
        <clipPath id={left}>
          <rect x={0} y={0} width={GUTTER.x0} height={H} />
        </clipPath>
        <clipPath id={right}>
          <rect x={GUTTER.x1} y={0} width={W - GUTTER.x1} height={H} />
        </clipPath>
        <clipPath id={glass}>
          <rect x={WIN.x0} y={WIN.y0} width={WIN.x1 - WIN.x0} height={WIN.y1 - WIN.y0} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [430, 180], push: 1.025 })}>
        {/* ── LEFT: the lane by Lucas Lodge ── */}
        <g clipPath={`url(#${left})`}>
          <path d={m.sky} fill={PAPER} />
          {/* the far hedgerows along the horizon */}
          <path
            d={`M0 ${HORIZON}C20 196 40 199 60 195C84 191 100 198 120 196C150 192 170 199 186 198V214H0Z`}
            fill={INK}
          />
          <rect x={0} y={HORIZON} width={GUTTER.x0} height={60} fill={INK} />
          <path d={m.fields} fill={PAPER} />
          <LucasLodge />
          {/* the garden hedge before the house, and its gate */}
          <path d="M150 232C156 218 172 212 190 212L238 212V236H150Z" fill={INK} />
          <path d="M262 212H330C334 214 336 220 336 236H262Z" fill={INK} />
          <path d={m.hedgeR} fill={PAPER} />
          <path
            d="M238 214V234M262 214V234M238 220H262M238 228H262"
            stroke={PAPER}
            strokeWidth={1.6}
          />
          {/* the lane: pale, between dark banks */}
          <path
            d="M0 262C60 258 140 250 200 238L238 226H262C268 252 300 300 336 324V340H0Z"
            fill={PAPER}
          />
          <path d="M0 236C60 234 140 236 200 238C140 250 60 258 0 262Z" fill={INK} />
          <path d="M262 226C268 252 300 300 336 324V236L270 232Z" fill={INK} />
          <path d={m.hedgeL} fill={PAPER} />
          <path
            d="M0 262C60 258 140 250 200 238L238 226M262 226C268 252 300 300 336 324"
            fill="none"
            stroke={INK}
            strokeWidth={LINE.bold}
          />
          <path d={m.ruts} fill={INK} />
          {/* the bare tree */}
          <path d={m.tree} fill={INK} stroke={PAPER} strokeWidth={1.2} />
          <path d={m.twigs} fill="none" stroke={INK} strokeWidth={1.2} strokeLinecap="round" />

          {/* Mr Collins, bowing, in a clergyman's black, his hat at his breast */}
          <Person pose={COLLINS} at={[116, 326]} scale={1.12}>
            <g transform={COLLINS_HAT}>
              <path d={TALL_HAT} fill={INK} stroke={PAPER} strokeWidth={1.8} />
              <path d={TALL_HAT_BAND} fill={PAPER} />
            </g>
          </Person>
          {/* Charlotte, in her bonnet, her hands folded */}
          <Person pose={CHARLOTTE_LANE} at={[252, 320]} scale={1.12} flip />
        </g>

        {/* ── RIGHT: the morning after, at Longbourn ── */}
        <g clipPath={`url(#${right})`}>
          <rect x={GUTTER.x1} y={0} width={W - GUTTER.x1} height={H} fill={INK} />
          <path d={m.wall} fill={PAPER} />
          {/* the window on the garden: a grey sky and a bare tree */}
          <rect
            x={WIN.x0 - 8}
            y={WIN.y0 - 8}
            width={WIN.x1 - WIN.x0 + 16}
            height={WIN.y1 - WIN.y0 + 16}
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
          <rect
            x={WIN.x0}
            y={WIN.y0}
            width={WIN.x1 - WIN.x0}
            height={WIN.y1 - WIN.y0}
            fill={PAPER}
          />
          <g clipPath={`url(#${glass})`}>
            <path
              d="M548 206C574 202 600 206 626 203C650 200 666 204 680 202V234H548Z"
              fill={INK}
            />
            <path d={m.view} fill={INK} />
          </g>
          <g fill={INK}>
            <rect x={WIN.x0} y={WIN.y0} width={WIN.x1 - WIN.x0} height={3} />
            <rect x={WIN.x0} y={WIN.y1 - 3} width={WIN.x1 - WIN.x0} height={3} />
            <rect x={WIN.x0 + 42} y={WIN.y0} width={3} height={WIN.y1 - WIN.y0} />
            <rect x={WIN.x0 + 87} y={WIN.y0} width={3} height={WIN.y1 - WIN.y0} />
            <rect x={WIN.x0} y={WIN.y0 + 36} width={WIN.x1 - WIN.x0} height={2.4} />
            <rect x={WIN.x0} y={WIN.y0 + 70} width={WIN.x1 - WIN.x0} height={4} />
            <rect x={WIN.x0} y={WIN.y0 + 106} width={WIN.x1 - WIN.x0} height={2.4} />
          </g>
          <rect
            x={WIN.x0 - 14}
            y={WIN.y1 + 6}
            width={WIN.x1 - WIN.x0 + 28}
            height={6}
            fill={PAPER}
          />
          {/* the dado rail, the wainscot below it, the skirting */}
          <rect x={GUTTER.x1} y={244} width={W - GUTTER.x1} height={3} fill={PAPER} />
          <rect x={GUTTER.x1} y={SKIRT - 4} width={W - GUTTER.x1} height={4} fill={PAPER} />
          <rect x={GUTTER.x1} y={SKIRT} width={W - GUTTER.x1} height={H - SKIRT} fill={PAPER} />
          <path d={m.floor} fill={INK} />

          {/* Charlotte, seated, composed */}
          <path d={CHAIR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
          <Person pose={CHARLOTTE_ROOM} at={[470, 306]} scale={1.25} />
          {/* Elizabeth, drawn back, her hand at her breast */}
          <Person pose={ELIZABETH} at={[706, 326]} scale={1.3} flip />
        </g>

        {/* the gutter between the two scenes */}
        <rect x={GUTTER.x0} y={0} width={GUTTER.x1 - GUTTER.x0} height={H} fill={PAPER} />
        <path d={`M${GUTTER.x0} 0V${H}M${GUTTER.x1} 0V${H}`} stroke={INK} strokeWidth={LINE.bold} />
      </g>
    </>
  )
}

export const charlotteAcceptsMrCollinsArt: LinocutArt = {
  width: W,
  height: H,
  Draw: CharlotteAcceptsMrCollins,
}

export const charlotteAcceptsMrCollins: ComicPanel = {
  moment: 'Charlotte accepts Mr Collins',
  art: charlotteAcceptsMrCollinsArt,
  alt: "A linocut print in two scenes. On the left, a country lane on a grey November morning, with a bare tree beside it and Lucas Lodge, a plain square house, behind its hedge and gate. In the lane Mr Collins, tall and heavy in a clergyman's black, bows low over his speech, his tall hat held against his coat and his other hand held out open towards Charlotte Lucas, who faces him in a dark bonnet and dark gown with her hands folded. On the right, the next morning in a room at Longbourn, Charlotte, still in her bonnet, sits upright on a plain chair with her hands in her lap. Across the room, beyond a window on a bare tree in the garden, Elizabeth stands in a pale gown, drawn back with one hand raised to her breast, her brow lifted and her mouth open in astonishment.",
  quote: 'I am not romantic you know. I never was. I ask only a comfortable home',
  quoteAt: 'top-right',
}
