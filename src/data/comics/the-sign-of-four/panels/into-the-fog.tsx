import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  arcDashes,
  between,
  clamp,
  gouge,
  gougeField,
  n,
  rays,
  ribbon,
  rng,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { Horse } from '../../animal-farm/panels/people'
import { HEAD_GUEST } from '../../jekyll-and-hyde/panels/investigation-kit'
import { LOW_HAT, LOW_HAT_BAND } from '../../jekyll-and-hyde/panels/people'
import {
  BOWLER,
  BOWLER_BAND,
  COLLAR,
  Figure,
  GRIP_HAND,
  HEAD_HOLMES,
  HEAD_WATSON,
  HOLMES_CUTS,
  HOLMES_PUPIL,
  HolmesHands,
  LONG_HAND,
  Mary,
  TOP_HAT,
  TOP_HAT_BAND,
  WATSON_CUTS,
  WATSON_PUPIL,
  gent,
  headAt,
  type P,
  type Part,
} from './people'

/**
 * Chapter 3, "In Quest of a Solution": "Into the fog", the fourth moment in
 * the guide's timeline. The picture is the four-wheeler going down the Strand
 * to the Lyceum, the paragraph the guide's quotation comes from, and every
 * detail is from the held edition:
 *
 * - "It was a September evening, and not yet seven o'clock, but the day had
 *   been a dreary one, and a dense drizzly fog lay low upon the great city.
 *   Mud-coloured clouds drooped sadly over the muddy streets." So the sky is
 *   cut as low swags of cloud that sag, and the fog thickens to the right,
 *   the way the cab is going: a bank of it ahead, reaching back into the
 *   dark in ragged fingers, a lamp far off in it no more than a red smear
 *   (as the pilot's far candles are), and low layers of mist across the road
 *   in which the horse's legs are lost. (A solid low bank was tried first;
 *   its sloping top read as a drift of snow.)
 * - "Down the Strand the lamps were but misty splotches of diffused light
 *   which threw a feeble circular glimmer upon the slimy pavement." So each
 *   street lamp is a red core in rings of broken light, and under it a ring
 *   of glimmer on the wet stones.
 * - "The yellow glare from the shop-windows streamed out into the steamy,
 *   vaporous air ... There was, to my mind, something eerie and ghost-like in
 *   the endless procession of faces which flitted across these narrow bars of
 *   light". So a shop window glows on the far pavement, its light streams out
 *   across the road in bars, and small dark figures pass across them. The
 *   print has no yellow: the glare is the paper.
 * - "Ah, here is a four-wheeler, and Miss Morstan is inside." So it is a
 *   closed cab on four wheels, the back pair larger, a cabman up on the box
 *   and one horse in the shafts. The cabman is not described, so he is
 *   plain, in a low hat; his whip stands upright, touching nothing.
 * - Inside, seen through its two windows: "I picked up my hat and my heaviest
 *   stick", so Watson wears his bowler, his hand on the head of his stick;
 *   "Miss Morstan was muffled in a dark cloak, and her sensitive face was
 *   composed, but pale", so Mary is cloaked and her face is cut white
 *   (Mary's `pale` in ./people.tsx); "Miss Morstan and I chatted in an
 *   undertone", so they face each other across the pillar of the door; and
 *   Holmes, in the plain top hat the kit gives him out of doors, is bent over
 *   his knee: "He held his open note-book upon his knee, and from time to
 *   time he jotted down figures and memoranda in the light of his
 *   pocket-lantern." The lantern's flame is the spot colour, and the light
 *   inside the cab comes from it.
 *
 * WHAT IS NOT DRAWN. "Holmes took his revolver from his drawer and slipped it
 * into his pocket": it stays in his pocket. The plan with "The sign of the
 * four" written on it is examined on this drive too, but at the size it
 * could be drawn here it would be a white scrap, so the panel keeps to the
 * fog and the guide's quotation; Holmes's paper is his note-book.
 *
 * The horse is the plain cart-horse of the site's figure kits
 * (src/data/comics/animal-farm/panels/people.tsx), in its gallop, and the
 * cabman's head and hat are the plain man's of the Jekyll and Hyde kits, so
 * the one hand runs through every text.
 *
 * Seeds: 1401, 1407 and 1408 (the air), 1402 (the clouds), 1403 (the light
 * in the cab), 1404 (the fog ahead, and the steam in the shop's light), 1405
 * (the lamps), 1406 (the low mist).
 */

const W = 860
const H = 340
/** The far kerb, where the shop front and the lamp-posts stand. */
const KERB = 272
/** Where the wheels and the horse's feet meet the road. */
const ROAD = 326
/** The street lamps: the centre of each misty splotch, and how big its rings are. */
const LAMPS: { at: P; r: number }[] = [
  { at: [44, 126], r: 1 },
  { at: [212, 118], r: 1.1 },
  { at: [830, 146], r: 0.8 },
]
/** The shop window on the far pavement, and the bars of its light. */
const SHOP = { x: 72, y: 166, w: 112, h: 92 }
/** The cab's two side windows, rear and door: x, width (both from TOP to BOTTOM). */
const WIN = {
  top: 96,
  bottom: 202,
  rear: [262, 76] as [number, number],
  door: [354, 98] as [number, number],
}
/** The pocket-lantern, in Holmes's hand. */
const LANTERN: P = [428, 182]

type Marks = {
  air: string
  clouds: string
  halos: string[]
  glimmers: string
  bars: string
  barCuts: string
  inside: string
  insideRays: string
  ahead: { mass: string; cuts: string }
  low: string
  road: string
  spokes: string
}

/**
 * The fog ahead: a paper mass whose left edge is ragged, with fingers of fog
 * reaching back from it into the dark, so it thickens out of the air rather
 * than standing in it like a wall.
 */
function fogAhead(seed: number, x0: number, top: number, bottom: number) {
  const r = rng(seed)
  const ph = between(r, 0, 6)
  const edgeX = (y: number) => x0 + 22 * Math.sin(y / 21 + ph) + 11 * Math.sin(y / 8 + ph * 1.7)
  const topY = (x: number) => top + 9 * Math.sin(x / 34 + ph) + 4 * Math.sin(x / 13 + ph)
  let mass = `M${W + 10} ${bottom}`
  for (let y = bottom; y >= top + 6; y -= 8) mass += `L${n(edgeX(y))} ${n(y)}`
  for (let x = edgeX(top) + 8; x <= W + 10; x += 10) mass += `L${n(x)} ${n(topY(x))}`
  mass += 'Z'
  let fingers = ''
  for (let y = top + 10; y < bottom; y += 9) {
    const len = between(r, 18, 70)
    const x = edgeX(y) + 6
    fingers += gouge(x - len, y + between(r, -2, 2), x, y, between(r, 1.2, 2.8), between(r, -1, 1))
  }
  let cuts = ''
  for (let y = top + 14; y < bottom; y += 8) {
    let x = edgeX(y) + between(r, 10, 40)
    while (x < W) {
      const len = between(r, 30, 90)
      if (r() < 0.4) cuts += gouge(x, y, x + len, y + between(r, -1, 1), between(r, 0.35, 0.8))
      x += len + between(r, 16, 50)
    }
  }
  return { mass: mass + fingers, cuts }
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // The air: dark on the left, where the lamps make their splotches, and
  // paling into fog to the right, where the cab is going.
  const lampLight = (x: number, y: number) =>
    Math.max(
      ...LAMPS.slice(0, 2).map(
        ({ at, r }) => clamp(1 - Math.hypot(x - at[0], (y - at[1]) * 1.2) / (120 * r)) * 0.9,
      ),
    )
  const light = (x: number, y: number) =>
    Math.max(lampLight(x, y), clamp((x - 500) / 210) ** 1.2, 0.05)
  const field = (seed: number, box: { x0: number; x1: number; y0: number; y1: number }) =>
    gougeField(rng(seed), box, light, { spacing: 6, len: [16, 60] })
  // only where it shows: beside the cab, under it, and in front of it
  const air =
    field(1401, { x0: 0, x1: 250, y0: 92, y1: H }) +
    field(1407, { x0: 250, x1: 560, y0: 254, y1: H }) +
    field(1408, { x0: 556, x1: 760, y0: 92, y1: H })
  // "Mud-coloured clouds drooped sadly": swags that sag between their ends.
  const c = rng(1402)
  let clouds = ''
  for (let y = 12; y < 84; y += 13) {
    let x = between(c, -40, 0)
    while (x < W) {
      const len = between(c, 50, 110)
      if (c() < 0.75)
        clouds += gouge(x, y, x + len, y + between(c, -2, 2), 0.8 + (y / 84) * 0.8, 5 + len * 0.05)
      x += len + between(c, 6, 30)
    }
  }
  // Each lamp: rings of broken light round it, "misty splotches of diffused light".
  const lr = rng(1405)
  const halos = LAMPS.slice(0, 2).map(({ at, r }) => {
    let d = ''
    for (const [rad, dash] of [
      [13, [5, 9]],
      [20, [6, 12]],
      [28, [5, 12]],
      [37, [4, 12]],
    ] as [number, [number, number]][])
      d += arcDashes(lr, at[0], at[1], rad * r, 0, Math.PI * 2, dash, [3, 8])
    return d
  })
  // and under it, "a feeble circular glimmer upon the slimy pavement"
  let glimmers = ''
  for (const { at, r } of LAMPS.slice(0, 2))
    for (let k = 0; k < 3; k++) {
      const rx = (18 + k * 9) * r
      const y = KERB + 3 + k * 2.4
      glimmers += gouge(at[0] - rx, y, at[0] - rx * 0.3, y + 1.2, 0.9 - k * 0.15, 0.6)
      glimmers += gouge(at[0] + rx * 0.3, y + 1.2, at[0] + rx, y, 0.9 - k * 0.15, 0.6)
    }
  // The shop's glare, streaming across the road towards us in bars.
  const bars =
    `M${SHOP.x + 6} ${KERB}L${SHOP.x + 34} ${KERB}L${SHOP.x + 52} ${H}L${SHOP.x - 6} ${H}Z` +
    `M${SHOP.x + 52} ${KERB}L${SHOP.x + 80} ${KERB}L${SHOP.x + 140} ${H}L${SHOP.x + 82} ${H}Z` +
    `M${SHOP.x + 92} ${KERB}L${SHOP.x + 108} ${KERB}L${SHOP.x + 196} ${H}L${SHOP.x + 160} ${H}Z`
  // the steamy air inside the bars, cut back across them in ink
  const b = rng(1404)
  let barCuts = ''
  for (let y = KERB + 6; y < H; y += 6)
    barCuts += gouge(SHOP.x - 10, y, SHOP.x + 210, y + between(b, -1, 1), 0.5 + between(b, 0, 0.6))
  // Inside the cab, the pocket-lantern's light on the far wall.
  const inLight = (x: number, y: number) =>
    clamp(1 - Math.hypot(x - LANTERN[0], (y - LANTERN[1]) * 1.1) / 190) ** 0.9
  const inside = gougeField(
    rng(1403),
    { x0: 258, x1: 456, y0: WIN.top + 2, y1: WIN.bottom },
    inLight,
    { spacing: 5.2, len: [10, 34] },
  )
  const insideRays = rays(rng(1403), LANTERN[0], LANTERN[1] - 4, {
    from: 10,
    to: 46,
    every: 14,
    width: 1.8,
  })
  // The fog the cab is driving into, and the low fog the horse's legs are lost in.
  const ahead = fogAhead(1404, 722, 112, H + 6)
  // the low fog: layers of mist lying across the road, thicker and longer
  // the further right they lie, so the horse's legs are lost in them
  const lr2 = rng(1406)
  let low = ''
  for (let k = 0; k < 11; k++) {
    const y = 250 + k * 8.4
    const a = 560 + between(lr2, 0, 90) - k * 6
    const pts: P[] = []
    for (let i = 0; i <= 18; i++) {
      const x = a + ((W + 60 - a) * i) / 18
      pts.push([x, y + 2.4 * Math.sin(x / 31 + k) + between(lr2, -0.6, 0.6)])
    }
    low += ribbon(pts, 6 + k * 0.9, 0.5)
  }
  // The road near us: wet, with the lamps' light lying on it in streaks.
  let road = ''
  for (const { at } of LAMPS.slice(0, 2))
    for (let k = 0; k < 4; k++)
      road += gouge(at[0] - 6 + k * 4, KERB + 14 + k * 9, at[0] - 4 + k * 4, KERB + 26 + k * 9, 0.9)
  // The spokes of the two wheels.
  let spokes = ''
  for (const [cx, cy, r] of WHEELS)
    for (let a = 0; a < 360; a += 30) {
      const t = (a * Math.PI) / 180
      spokes += `M${n(cx + Math.cos(t) * 7)} ${n(cy + Math.sin(t) * 7)}L${n(cx + Math.cos(t) * (r - 6))} ${n(cy + Math.sin(t) * (r - 6))}`
    }
  cached = {
    air,
    clouds,
    halos,
    glimmers,
    bars,
    barCuts,
    inside,
    insideRays,
    ahead,
    low,
    road,
    spokes,
  }
  return cached
}

/** The wheels: rear and front, [cx, cy, radius]; each meets the road. */
const WHEELS: [number, number, number][] = [
  [302, ROAD - 44, 44],
  [516, ROAD - 33, 33],
]

/** The four-wheeler, facing right: the body with the box at its front, and its roof. */
const CAB = {
  body: 'M246 90H514V150C532 150 548 160 552 176L558 236C558 250 548 258 534 258H260C252 258 246 252 246 244Z',
  roof: 'M238 90Q238 80 248 80H512Q522 80 522 90Z',
  rail: 'M248 80V70M290 80V72M334 80V72M378 80V72M422 80V72M466 80V72M510 80V70M246 71H512',
  /** The door, round the door window, and its handle. */
  door: 'M346 92H462V252H346Z',
  handle: 'M446 214H456',
  /** Mouldings along the body. */
  lines: 'M250 212H342M466 212H512M250 246H556',
  /** The step under the door. */
  step: 'M372 258V266H438V258',
  /** The box the cabman sits on, and his footboard. */
  box: 'M508 150H548V158H508Z',
  footboard: 'M546 172L574 168L575 173L548 177Z',
}

// ── The three inside ─────────────────────────────────────────────────────────

/** Watson in the rear window, facing Mary, in his bowler, a hand on his stick. */
const WAT_HEAD = { d: HEAD_WATSON, at: [300, 138] as P, rot: 2, scale: 1 }
const WAT_NEAR: P[] = [
  [296, 174],
  [306, 200],
  [322, 194],
]
const WATSON: Part[] = gent({
  facing: 1,
  neck: [292, 164],
  hip: [288, 214],
  head: WAT_HEAD,
  hat: BOWLER,
  body: { width: 30, hem: 10, flare: 3 },
  arm: 8,
  leg: 9,
  near: {
    arm: WAT_NEAR,
    leg: [
      [290, 214],
      [326, 212],
      [330, 256],
    ],
    hand: { parts: GRIP_HAND, scale: 0.9, rot: -70 },
  },
  far: {
    arm: [
      [288, 174],
      [294, 202],
      [312, 200],
    ],
    leg: [
      [286, 216],
      [318, 218],
      [320, 256],
    ],
  },
})

/** Mary in the door window, cloaked and pale, turned to Watson. */
const MARY = {
  facing: -1 as const,
  head: { at: [384, 146] as P, rot: 4, scale: 0.95 },
  neck: [390, 172] as P,
  waist: [396, 214] as P,
  knee: [360, 212] as P,
  floor: 256,
  near: {
    arm: [
      [386, 182],
      [380, 206],
      [366, 204],
    ] as P[],
    hand: { parts: LONG_HAND, scale: 0.7, rot: 0 },
  },
  far: {
    arm: [
      [394, 182],
      [392, 206],
      [374, 206],
    ] as P[],
    hand: { parts: LONG_HAND, scale: 0.7, rot: 0 },
  },
}

/** Holmes, bent over the note-book on his knee, the lantern in his other hand. */
const HOL_HEAD = { d: HEAD_HOLMES, at: [440, 140] as P, rot: -16, scale: 1 }
const HOL_PEN: P[] = [
  [444, 176],
  [436, 202],
  [416, 196],
]
const HOL_LAMP: P[] = [
  [452, 176],
  [454, 200],
  [434, 190],
]
const HOLMES: Part[] = gent({
  facing: -1,
  neck: [448, 166],
  hip: [456, 214],
  head: HOL_HEAD,
  hat: TOP_HAT,
  body: { width: 24, hem: 10, flare: 3 },
  arm: 7.5,
  leg: 8.5,
  near: {
    arm: HOL_PEN,
    leg: [
      [452, 214],
      [410, 206],
      [412, 256],
    ],
  },
  far: {
    arm: HOL_LAMP,
    leg: [
      [458, 216],
      [420, 214],
      [422, 256],
    ],
  },
})

// ── The cabman on his box ───────────────────────────────────────────────────
const CABMAN_HEAD = { d: HEAD_GUEST, at: [534, 82] as P, rot: 4, scale: 1 }
const CABMAN: Part[] = gent({
  facing: 1,
  neck: [528, 108],
  hip: [526, 150],
  head: CABMAN_HEAD,
  hat: LOW_HAT,
  body: { width: 30, hem: 8, flare: 4 },
  arm: 8,
  leg: 9,
  near: {
    // the reins, held low in front of him
    arm: [
      [530, 118],
      [540, 140],
      [558, 132],
    ],
    leg: [
      [530, 150],
      [552, 152],
      [558, 170],
    ],
    hand: { parts: GRIP_HAND, scale: 0.9 },
  },
  far: {
    // the whip, held upright
    arm: [
      [524, 118],
      [536, 136],
      [550, 124],
    ],
    leg: [
      [524, 152],
      [546, 156],
      [550, 172],
    ],
    hand: { parts: GRIP_HAND, scale: 0.85, rot: -60 },
  },
})

/** The horse, where its feet meet the road, and its size. */
const HORSE_AT: P = [704, ROAD]
const HORSE_S = 1.1

/** A passer-by on the far pavement, a small dark figure: feet at (x, KERB), facing `f`. */
function walker(x: number, f: 1 | -1, h: number, hat: 'top' | 'bonnet' | 'cap' | 'bowler'): string {
  const s = h / 50
  const X = (v: number) => n(x + f * v * s)
  const Y = (v: number) => n(KERB - v * s)
  const head = `M${X(-4)} ${Y(41)}C${X(-5)} ${Y(47)} ${X(-1)} ${Y(50)} ${X(2)} ${Y(50)}C${X(6)} ${Y(50)} ${X(7)} ${Y(46)} ${X(7)} ${Y(44)}L${X(9)} ${Y(42)}L${X(6.5)} ${Y(41)}C${X(6)} ${Y(38)} ${X(4)} ${Y(37)} ${X(1)} ${Y(37)}Z`
  const body =
    hat === 'bonnet'
      ? `M${X(-3)} ${Y(38)}C${X(-9)} ${Y(30)} ${X(-11)} ${Y(12)} ${X(-12)} ${Y(0)}H${X(10)}C${X(8)} ${Y(14)} ${X(7)} ${Y(30)} ${X(4)} ${Y(38)}Z`
      : `M${X(-3)} ${Y(38)}C${X(-7)} ${Y(32)} ${X(-7)} ${Y(22)} ${X(-6)} ${Y(14)}L${X(-7)} ${Y(0)}H${X(-3)}L${X(0)} ${Y(12)}L${X(3)} ${Y(0)}H${X(7)}L${X(5)} ${Y(14)}C${X(6)} ${Y(24)} ${X(6)} ${Y(32)} ${X(4)} ${Y(38)}Z`
  const top =
    hat === 'top'
      ? `M${X(-5)} ${Y(48)}H${X(8)}V${Y(49)}L${X(6.5)} ${Y(58)}H${X(-3.5)}L${X(-5)} ${Y(49)}Z`
      : hat === 'bowler'
        ? `M${X(-6)} ${Y(47)}C${X(-5)} ${Y(55)} ${X(7)} ${Y(55)} ${X(8)} ${Y(47)}Z`
        : hat === 'cap'
          ? `M${X(-5)} ${Y(47)}C${X(-4)} ${Y(53)} ${X(6)} ${Y(53)} ${X(7)} ${Y(48)}L${X(11)} ${Y(47)}Z`
          : `M${X(-6)} ${Y(38)}C${X(-8)} ${Y(48)} ${X(-2)} ${Y(55)} ${X(5)} ${Y(53)}L${X(8)} ${Y(46)}C${X(4)} ${Y(46)} ${X(0)} ${Y(42)} ${X(-1)} ${Y(38)}Z`
  return head + body + top
}
/** "the endless procession of faces which flitted across these narrow bars of light". */
const WALKERS =
  walker(86, 1, 46, 'top') +
  walker(124, -1, 42, 'bonnet') +
  walker(160, 1, 44, 'cap') +
  walker(196, -1, 45, 'bowler')

function IntoTheFog({ uid }: ArtProps) {
  const m = marks()
  const clip = `${uid}-cab-windows`
  const wt = headAt(1, WAT_HEAD.at, WAT_HEAD.rot, WAT_HEAD.scale)
  const ht = headAt(-1, HOL_HEAD.at, HOL_HEAD.rot, HOL_HEAD.scale)
  const [lx, ly] = LANTERN
  const [hx, hy] = HORSE_AT
  const at = (x: number, y: number): P => [hx + x * HORSE_S, hy + y * HORSE_S]
  const shoulder = at(46, -84)
  const mouth = at(100, -116)
  const rein = `M566 132Q${n((566 + mouth[0]) / 2)} ${n(mouth[1] + 30)} ${n(mouth[0])} ${n(mouth[1])}`
  const [fx, fy] = LAMPS[2].at
  return (
    <>
      <defs>
        <clipPath id={clip}>
          <rect
            x={WIN.rear[0]}
            y={WIN.top}
            width={WIN.rear[1]}
            height={WIN.bottom - WIN.top}
            rx={6}
          />
          <rect
            x={WIN.door[0]}
            y={WIN.top}
            width={WIN.door[1]}
            height={WIN.bottom - WIN.top}
            rx={6}
          />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [430, 190], push: 1.03 })}>
        {/* the clouds drooping over the street, the air, and the fog ahead */}
        <path d={m.clouds} fill={PAPER} />
        <path d={m.air} fill={PAPER} />
        <path d={m.ahead.mass} fill={PAPER} />
        <path d={m.ahead.cuts} fill={INK} />
        {/* a lamp far off in the fog: only a red smear */}
        <path d={`M${fx} ${fy + 14}V${KERB}`} stroke={INK} strokeWidth={1.6} />
        <path
          d={`M${fx - 6} ${fy}C${fx - 5} ${fy - 7} ${fx + 5} ${fy - 7} ${fx + 6} ${fy}C${fx + 5} ${fy + 6} ${fx - 5} ${fy + 6} ${fx - 6} ${fy}Z`}
          fill={RED}
        />

        {/* the far pavement: the shop window and its glare */}
        <rect
          x={SHOP.x - 14}
          y={SHOP.y - 14}
          width={SHOP.w + 28}
          height={KERB - SHOP.y + 14}
          fill={INK}
        />
        <rect x={SHOP.x} y={SHOP.y} width={SHOP.w} height={SHOP.h} fill={PAPER} />
        <path
          d={`M${SHOP.x + SHOP.w / 3} ${SHOP.y}V${SHOP.y + SHOP.h}M${SHOP.x + (SHOP.w * 2) / 3} ${SHOP.y}V${SHOP.y + SHOP.h}M${SHOP.x} ${SHOP.y + 30}H${SHOP.x + SHOP.w}`}
          stroke={INK}
          strokeWidth={3}
        />
        <path d={m.bars} fill={PAPER} />
        <path d={m.barCuts} fill={INK} />
        <path d={`M0 ${KERB}H560`} stroke={PAPER} strokeWidth={LINE.carve} />
        <Figure parts={[{ d: WALKERS }]} halo={1.4} />
        <path d={m.road} fill={PAPER} />
        <path d={m.glimmers} fill={PAPER} />

        {/* "the lamps were but misty splotches of diffused light" */}
        {LAMPS.slice(0, 2).map(({ at: [x, y], r }, i) => (
          <g key={x}>
            <path
              d={m.halos[i]}
              fill="none"
              stroke={PAPER}
              strokeWidth={1.6 * r}
              strokeLinecap="round"
            />
            <path
              d={`M${x} ${y + 12}V${KERB}M${x - 7} ${KERB}H${x + 7}`}
              stroke={INK}
              strokeWidth={4}
            />
            <path
              d={`M${x - 7 * r} ${y - 9 * r}H${x + 7 * r}L${x + 5 * r} ${y + 9 * r}H${x - 5 * r}Z`}
              fill={INK}
              stroke={PAPER}
              strokeWidth={LINE.fine}
            />
            <ellipse
              className="lc-glow"
              style={timing({ delay: 0.3 * i })}
              cx={x}
              cy={y}
              rx={4.2 * r}
              ry={6 * r}
              fill={RED}
            />
          </g>
        ))}

        {/* the four-wheeler */}
        <path
          d={CAB.body}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
          strokeLinejoin="round"
        />
        {/* inside, through its two windows: the far wall lit by the pocket-lantern, and the three */}
        <g clipPath={`url(#${clip})`}>
          <path d={m.inside} fill={PAPER} />
          <path d={m.insideRays} fill={PAPER} />
          <Figure parts={WATSON}>
            <path d={WATSON_CUTS + COLLAR} transform={wt} fill={PAPER} />
            <path d={WATSON_PUPIL} transform={wt} fill={INK} />
            <path d={BOWLER_BAND} transform={wt} fill={PAPER} />
          </Figure>
          {/* the head of his heaviest stick, under his hand */}
          <path d="M327 214L329 196" stroke={PAPER} strokeWidth={6} strokeLinecap="round" />
          <path d="M327 214L329 196" stroke={INK} strokeWidth={3.6} strokeLinecap="round" />
          <Figure parts={WATSON.slice(-1)} />
          <Mary uid={uid} {...MARY} cloak pale />
          <Figure parts={HOLMES}>
            <path d={HOLMES_CUTS + COLLAR} transform={ht} fill={PAPER} />
            <path d={HOLMES_PUPIL} transform={ht} fill={INK} />
            <path d={TOP_HAT_BAND} transform={ht} fill={PAPER} />
          </Figure>
          {/* the open note-book on his knee, and the pencil */}
          <path
            d="M398 202L410 196L424 200L424 205L410 201L398 207Z"
            fill={PAPER}
            stroke={INK}
            strokeWidth={0.9}
          />
          <path d="M410 196V201" stroke={INK} strokeWidth={0.8} />
          <HolmesHands
            facing={-1}
            arms={[
              { arm: HOL_PEN, hand: { parts: LONG_HAND, scale: 0.85, rot: 10 } },
              { arm: HOL_LAMP, hand: { parts: GRIP_HAND, scale: 0.8, rot: 0 } },
            ]}
          />
          <path d="M408 190L401 200" stroke={INK} strokeWidth={1.2} />
          {/* the pocket-lantern */}
          <path
            d={`M${lx - 5} ${ly - 6}H${lx + 5}V${ly + 6}H${lx - 5}Z`}
            fill={INK}
            stroke={PAPER}
            strokeWidth={1.2}
          />
          <path
            className="lc-flicker"
            d={`M${lx} ${ly + 4}C${lx - 3} ${ly + 1} ${lx - 2} ${ly - 2} ${lx} ${ly - 6}C${lx + 2} ${ly - 2} ${lx + 3} ${ly + 1} ${lx} ${ly + 4}Z`}
            fill={RED}
          />
        </g>
        <g fill="none" stroke={PAPER}>
          <rect
            x={WIN.rear[0]}
            y={WIN.top}
            width={WIN.rear[1]}
            height={WIN.bottom - WIN.top}
            rx={6}
            strokeWidth={LINE.carve}
          />
          <rect
            x={WIN.door[0]}
            y={WIN.top}
            width={WIN.door[1]}
            height={WIN.bottom - WIN.top}
            rx={6}
            strokeWidth={LINE.carve}
          />
          <path d={CAB.door} strokeWidth={LINE.fine} />
          <path d={CAB.lines} strokeWidth={LINE.fine} />
          <path d={CAB.handle} strokeWidth={3} strokeLinecap="round" />
          <path d={CAB.step} strokeWidth={LINE.carve} />
        </g>
        <path d={CAB.roof} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={CAB.rail} fill="none" stroke={PAPER} strokeWidth={1.6} />
        <path d={CAB.box} fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />

        {/* the cabman on his box, the reins in one hand and the whip upright in the other */}
        <path
          d="M554 122C556 92 560 64 566 40"
          fill="none"
          stroke={PAPER}
          strokeWidth={4.4}
          strokeLinecap="round"
        />
        <path
          d="M554 122C556 92 560 64 566 40"
          fill="none"
          stroke={INK}
          strokeWidth={2}
          strokeLinecap="round"
        />
        <path d="M566 40C574 36 580 40 584 48" fill="none" stroke={INK} strokeWidth={1.2} />
        <Figure parts={CABMAN}>
          <path
            d={LOW_HAT_BAND}
            transform={headAt(1, CABMAN_HEAD.at, CABMAN_HEAD.rot, CABMAN_HEAD.scale)}
            fill={PAPER}
          />
        </Figure>
        <path d={CAB.footboard} fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />

        {/* the wheels, their spokes cut in paper */}
        {WHEELS.map(([cx, cy, r]) => (
          <circle
            key={cx}
            cx={cx}
            cy={cy}
            r={r - 2.4}
            fill="none"
            stroke={PAPER}
            strokeWidth={11}
          />
        ))}
        {WHEELS.map(([cx, cy, r]) => (
          <circle key={cx} cx={cx} cy={cy} r={r - 2.4} fill="none" stroke={INK} strokeWidth={6.4} />
        ))}
        <path d={m.spokes} stroke={PAPER} strokeWidth={1.8} />
        {WHEELS.map(([cx, cy]) => (
          <circle key={cx} cx={cx} cy={cy} r={6.5} fill={INK} stroke={PAPER} strokeWidth={1.4} />
        ))}

        {/* the horse in the shafts, and the reins */}
        <Horse at={HORSE_AT} s={HORSE_S} who="plain" pose="gallop" />
        <path
          d={`M556 236L${n(shoulder[0])} ${n(shoulder[1])}`}
          stroke={PAPER}
          strokeWidth={7}
          strokeLinecap="round"
        />
        <path
          d={`M556 236L${n(shoulder[0])} ${n(shoulder[1])}`}
          stroke={INK}
          strokeWidth={4.2}
          strokeLinecap="round"
        />
        <path d={rein} fill="none" stroke={PAPER} strokeWidth={2.6} />
        <path d={rein} fill="none" stroke={INK} strokeWidth={1} />

        {/* "a dense drizzly fog lay low upon the great city": the horse goes into it */}
        <g className="lc-drift">
          <path d={m.low} fill={PAPER} />
        </g>
      </g>
    </>
  )
}

export const intoTheFog: LinocutArt = { width: W, height: H, Draw: IntoTheFog }
