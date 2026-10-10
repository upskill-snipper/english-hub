import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  between,
  clamp,
  gouge,
  gougeField,
  n,
  ribbon,
  rng,
  wedge,
  type Rng,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import {
  Figure,
  HEAD_JANE,
  HEAD_ROCHESTER,
  JaneFace,
  LOOSE_HAND,
  OPEN_HAND,
  ROCHESTER_CUTS,
  ROCHESTER_EAR,
  ROCHESTER_HAIR,
  ROCHESTER_HAIRLINE,
  ROCHESTER_HAIR_CUTS,
  ROCHESTER_NECKCLOTH,
  headAt,
  man,
  shawl,
  shawlBorder,
  woman,
  type P,
  type Part,
} from './people'

/**
 * Chapter 23: "The proposal in the orchard", the twelfth moment in the
 * guide's timeline. Every detail is from the held edition
 * (src/data/full-texts/jane-eyre.ts).
 *
 * THE MOMENT DRAWN. "Another effort set me at liberty, and I stood erect
 * before him." "'And your will shall decide your destiny,' he said: 'I offer
 * you my hand, my heart, and a share of all my possessions.'" So Jane stands
 * upright before him on the walk, and Rochester, on the seat round the tree,
 * holds out his open hand to her. The storm that splits the tree that night
 * is not drawn.
 *
 * - "a winding walk, bordered with laurels and terminating in a giant
 *   horse-chestnut, circled at the base by a seat, led down to the fence. At
 *   the bottom was a sunk fence; its sole separation from lonely fields";
 *   "here is the bench at its old roots". So the laurels border the walk at
 *   the left, the great chestnut and the seat round its roots stand at the
 *   right, and the shorn fields lie beyond the sunk fence.
 * - "spread a solemn purple, burning with the light of red jewel and furnace
 *   flame at one point, on one hill-peak"; "the moon, not yet risen high";
 *   "I hear a nightingale warbling in a wood half a mile off". So the moon
 *   is low at the left, a dark wood lies under it on the horizon, and the
 *   last of the sunset burns in the spot colour on one hill-peak at the
 *   right. Stars are cut in the sky.
 * - "He was taking off my shawl in the hall" when they come in, so Jane
 *   wears her shawl, pinned, as the figure kit cuts her grown; Rochester, as
 *   the kit cuts him, wears his white neckcloth, so his head reads off his
 *   coat.
 *
 * Seeds: 1201 to 1209.
 */

const W = 860
const H = 340
/** The top of the far hills, and the line of the sunk fence below them. */
const HILLS = 214
const FIELDS = 230
const FENCE = 248
const MOON = { x: 118, y: 84, r: 23 }
/** The one hill-peak where the sunset still burns. */
const PEAK = { x: 806, y: 194 }
/** The great horse-chestnut: its trunk at the bench, and the seat round it. */
const TRUNK = { x: 668, top: 112, base: 318 }
/** The great limbs, curving up from the head of the trunk into the crown: [points, width]. */
const LIMBS: [[number, number][], number][] = [
  [
    [
      [656, 176],
      [636, 146],
      [606, 118],
      [576, 96],
      [548, 76],
    ],
    30,
  ],
  [
    [
      [668, 160],
      [664, 124],
      [654, 92],
      [640, 62],
    ],
    22,
  ],
  [
    [
      [684, 170],
      [714, 136],
      [752, 108],
      [792, 88],
      [834, 74],
    ],
    30,
  ],
  [
    [
      [698, 188],
      [742, 168],
      [792, 148],
      [846, 128],
      [868, 122],
    ],
    18,
  ],
]
const SEAT = { cx: 652, cy: 262, rx: 112, ry: 16 }

/** The crown of the chestnut: overlapping rounds [cx, cy, r]. */
const CROWN: [number, number, number][] = [
  [496, 58, 32],
  [530, 26, 42],
  [574, 64, 30],
  [600, -8, 56],
  [640, 56, 38],
  [692, -20, 64],
  [712, 52, 40],
  [774, -2, 58],
  [770, 62, 32],
  [840, 30, 48],
  [862, 66, 28],
]
const inCrown = (x: number, y: number) =>
  CROWN.some(([cx, cy, r]) => Math.hypot(x - cx, y - cy) < r - 4)

type Marks = {
  sky: string
  stars: string
  hills: string
  hillCuts: string
  wood: string
  fields: string
  laurels: string
  laurelCuts: string
  leaves: string
  crownCuts: string
  bark: string
  turf: string
  walk: string
  glow: string
}

/** A palmate leaf: five leaflets fanned from one point, cut in paper. */
function palm(r: Rng, x: number, y: number, size: number, angle: number) {
  let d = ''
  for (let k = -2; k <= 2; k++) {
    const a = angle + k * 0.42 + between(r, -0.08, 0.08)
    const len = size * (1 - Math.abs(k) * 0.18)
    d += gouge(
      x,
      y,
      x + Math.cos(a) * len,
      y + Math.sin(a) * len,
      size * 0.17,
      between(r, -0.3, 0.3),
    )
  }
  return d
}

/** A rounded mass of bushes along a base line: a bumpy top, flat below. */
function bushes(r: Rng, x0: number, x1: number, base: number, top: number, swing = 12) {
  let d = `M${n(x0)} ${n(base)}L${n(x0)} ${n(top + 20)}`
  let x = x0
  let last = top
  while (x < x1 - 20) {
    const w = between(r, 30, 58)
    const h = top + between(r, -swing, swing)
    d += `Q${n(x + w * 0.04)} ${n(h)} ${n(x + w * 0.5)} ${n(h - 3)}Q${n(x + w * 0.96)} ${n(h)} ${n(x + w)} ${n(h + 18)}`
    x += w * 0.78
    last = h
  }
  // The last bush rounds down to the ground instead of ending in a cut.
  return d + `Q${n(x + 30)} ${n(last + 30)} ${n(x + 16)} ${n(base)}Z`
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // The sky is lit from two sides: the moon rising low on the left, and the
  // last of the sunset burning on one hill-peak far on the right.
  const light = (x: number, y: number) => {
    const moon = clamp(1 - Math.hypot(x - MOON.x, (y - MOON.y) * 1.25) / 290) ** 1.25
    const west = clamp(1 - Math.hypot((x - PEAK.x) * 0.75, (y - PEAK.y) * 1.7) / 240) ** 1.6 * 0.7
    // A midsummer night is never black: the whole sky keeps a little light,
    // so the chestnut stands dark against it.
    return Math.max(moon, west, 0.2 + (y / HILLS) * 0.12)
  }
  const field = gougeField(rng(1201), { x0: 0, x1: W, y0: 6, y1: HILLS + 4 }, light, {
    spacing: 6.2,
    len: [20, 80],
    gap: [6, 22],
  })
  // Keep only the cuts the crown does not cover: the plate is fetched whole.
  const sky = (field.match(/M[^M]+/g) ?? [])
    .filter((s) => {
      const [x, y] = s.slice(1).split(/[ Q]/).map(Number)
      return !inCrown(x + 20, y) && Math.hypot(x - MOON.x + 10, y - MOON.y) > MOON.r + 5
    })
    .join('')

  // "while the stars enter into their shining life up in heaven yonder"
  let stars = ''
  for (const [x, y, s] of [
    [236, 34, 3.4],
    [318, 62, 2.6],
    [372, 22, 3],
    [200, 128, 2.2],
    [418, 96, 2.4],
    [40, 30, 2.6],
  ]) {
    stars += gouge(x - s, y, x + s, y, 0.55) + gouge(x, y - s, x, y + s, 0.55)
  }

  // The far hills, one peak rising on the right.
  const rh = rng(1202)
  let hills = `M0 ${FIELDS}L0 ${HILLS + 6}`
  for (let x = 0; x <= W; x += 10) {
    const peak = Math.max(0, 1 - Math.abs(x - PEAK.x) / 70) ** 1.4 * (HILLS + 6 - PEAK.y)
    hills += `L${x} ${n(HILLS + 4 + Math.sin(x / 70) * 3 + Math.sin(x / 23) * 1.2 - peak + between(rh, -0.6, 0.6))}`
  }
  hills += `L${W} ${FIELDS}Z`
  let hillCuts = ''
  for (let y = HILLS + 8; y < FIELDS; y += 4.4) {
    let x = between(rh, 0, 30)
    while (x < W) {
      const len = between(rh, 18, 50)
      const L = Math.max(light(x, y) * 1.2, 0.2)
      if (rh() < 0.6) hillCuts += gouge(x, y, x + len, y + between(rh, -0.3, 0.3), 0.3 + L * 0.8)
      x += len + between(rh, 8, 26)
    }
  }

  // "a nightingale warbling in a wood half a mile off": a dark wood on the
  // horizon under the moon.
  const wood = bushes(rng(1203), 150, 360, FIELDS + 1, HILLS - 18)

  // The shorn fields beyond the sunk fence, pale in the moonlight: rows that
  // close up with distance.
  const rf = rng(1204)
  let fields = ''
  for (let y = FIELDS + 2.6; y < FENCE - 1; y += 2.6 + (y - FIELDS) * 0.12) {
    let x = between(rf, -10, 10)
    while (x < W) {
      const len = between(rf, 20, 64)
      if (rf() < 0.7)
        fields += gouge(x, y, x + len, y + between(rf, -0.2, 0.2), 0.35 + (y - FIELDS) * 0.03)
      x += len + between(rf, 6, 20)
    }
  }

  // "a winding walk, bordered with laurels": the laurels on the left, their
  // glossy leaves catching the moon on the side towards it.
  const rl = rng(1205)
  const laurels = bushes(rl, -10, 250, 262, 168, 16) + bushes(rl, -10, 214, 282, 204, 10)
  let laurelCuts = ''
  for (let i = 0; i < 120; i++) {
    const x = between(rl, 0, 258)
    const y = between(rl, 166, 262)
    const L = clamp(1 - Math.hypot(x - MOON.x, y - 150) / 190)
    if (rl() > 0.25 + L) continue
    const a = between(rl, -2.6, -0.6)
    laurelCuts += gouge(
      x,
      y,
      x + Math.cos(a) * 7,
      y + Math.sin(a) * 7,
      1.1 + L * 0.6,
      between(rl, -0.4, 0.4),
    )
  }

  // The chestnut's leaves: palmate fans cut round the edge of the crown on
  // the side the moon reaches, and faint cuts within.
  const rc = rng(1206)
  let leaves = ''
  for (const [cx, cy, r] of CROWN) {
    for (let k = 0; k < 12; k++) {
      const a = between(rc, Math.PI * 0.55, Math.PI * 1.6)
      const rr = r - between(rc, 4, 14)
      const x = cx + Math.cos(a) * rr
      const y = cy + Math.sin(a) * rr
      if (x > W - 6 || y < 4) continue
      if (
        CROWN.some(
          ([ox, oy, or]) => (ox !== cx || oy !== cy) && Math.hypot(x - ox, y - oy) < or - 10,
        )
      )
        continue
      const L = clamp(1 - Math.hypot(x - MOON.x, y - MOON.y) / 720)
      if (rc() > 0.35 + L) continue
      leaves += palm(rc, x, y, between(rc, 7, 10), a + between(rc, -0.5, 0.5))
    }
  }
  let crownCuts = ''
  for (let i = 0; i < 110; i++) {
    const x = between(rc, 440, W)
    const y = between(rc, 8, 168)
    if (!inCrown(x, y)) continue
    const L = clamp(1 - (x - 440) / 520) * 0.8
    if (rc() > 0.2 + L) continue
    crownCuts += gouge(x, y, x + between(rc, 6, 16), y + between(rc, -2, 2), 0.4 + L * 0.7)
  }

  // Bark: long cuts down the trunk, heavier on the side towards the moon.
  const rb = rng(1207)
  let bark = ''
  for (let x = TRUNK.x - 30; x < TRUNK.x + 30; x += 5.2) {
    const t = (x - (TRUNK.x - 30)) / 60
    let y = 150 + between(rb, 0, 20)
    while (y < TRUNK.base - 30) {
      const len = between(rb, 14, 34)
      bark += gouge(
        x + between(rb, -1, 1),
        y,
        x + between(rb, -1.5, 1.5),
        y + len,
        0.4 + (1 - t) * 1.1,
      )
      y += len + between(rb, 4, 12)
    }
  }

  // The orchard turf, dark, its grass cut in short strokes where the moon
  // falls; the gravel walk pale between.
  const rt = rng(1208)
  let turf = ''
  for (let i = 0; i < 300; i++) {
    const x = between(rt, 0, W)
    const y = between(rt, FENCE + 4, H - 4)
    const k = (y - FENCE) / (H - FENCE)
    const L = clamp(0.9 - x / 1100)
    if (rt() > 0.3 + L * 0.6) continue
    turf += gouge(x, y, x + between(rt, -2, 2), y - between(rt, 3, 7) * (0.6 + k), 0.4 + k * 0.5)
  }
  const walk =
    `M-4 ${H - 22}C80 316 180 309 300 309C400 309 480 311 560 313L600 314` +
    `L600 324C480 323 400 324 300 328C180 332 80 338 -4 ${H + 4}Z`
  let walkSpecks = ''
  for (let i = 0; i < 90; i++) {
    const t = between(rt, 0, 1)
    const x = -4 + t * 604
    const y = 326 - t * 8 + between(rt, -4, 4) * (1 - t * 0.6)
    walkSpecks += gouge(x, y, x + between(rt, 2, 5), y + between(rt, -0.4, 0.4), 0.45)
  }

  // "burning with the light of red jewel and furnace flame at one point, on
  // one hill-peak": the last of the sunset, three bars of light over the peak.
  const glow =
    ribbon(
      [
        [PEAK.x - 70, PEAK.y - 6],
        [PEAK.x - 20, PEAK.y - 9],
        [PEAK.x + 30, PEAK.y - 7],
        [PEAK.x + 70, PEAK.y - 10],
      ],
      3.2,
      0.6,
    ) +
    ribbon(
      [
        [PEAK.x - 40, PEAK.y - 17],
        [PEAK.x, PEAK.y - 19],
        [PEAK.x + 46, PEAK.y - 18],
      ],
      2.2,
      0.6,
    )

  cached = {
    sky,
    stars,
    hills,
    hillCuts,
    wood,
    fields,
    laurels,
    laurelCuts,
    leaves,
    crownCuts,
    bark,
    turf: turf + walkSpecks,
    walk,
    glow,
  }
  return cached
}

/** The trunk, flaring into its old roots at the foot. */
const TRUNK_PATH = `M${TRUNK.x - 16} ${TRUNK.top}C${TRUNK.x - 26} 150 ${TRUNK.x - 36} 230 ${TRUNK.x - 52} 290C${TRUNK.x - 60} 306 ${TRUNK.x - 76} 314 ${TRUNK.x - 90} ${TRUNK.base}L${TRUNK.x + 100} ${TRUNK.base}C${TRUNK.x + 80} 312 ${TRUNK.x + 60} 300 ${TRUNK.x + 52} 284C${TRUNK.x + 38} 230 ${TRUNK.x + 30} 150 ${TRUNK.x + 18} ${TRUNK.top}Z`
/** The trunk and the limbs, as one carved shape. */
const TREE = [TRUNK_PATH, ...LIMBS.map(([pts, w]) => ribbon(pts, w, 0.6, false))]

/** The seat that circles the base of the tree: its near half, in front of the trunk. */
const SEAT_TOP = `M${SEAT.cx - SEAT.rx} ${SEAT.cy}A${SEAT.rx} ${SEAT.ry} 0 0 0 ${SEAT.cx + SEAT.rx} ${SEAT.cy}L${SEAT.cx + SEAT.rx - 8} ${SEAT.cy - 6}A${SEAT.rx - 8} ${SEAT.ry - 6} 0 0 1 ${SEAT.cx - SEAT.rx + 8} ${SEAT.cy - 6}Z`
const SEAT_EDGE = `M${SEAT.cx - SEAT.rx} ${SEAT.cy}A${SEAT.rx} ${SEAT.ry} 0 0 0 ${SEAT.cx + SEAT.rx} ${SEAT.cy}L${SEAT.cx + SEAT.rx} ${SEAT.cy + 7}A${SEAT.rx} ${SEAT.ry} 0 0 1 ${SEAT.cx - SEAT.rx} ${SEAT.cy + 7}Z`
const SEAT_LEGS = [-96, -44, 34, 92].map((dx) => {
  const x = SEAT.cx + dx
  const y = SEAT.cy + 7 + SEAT.ry * Math.sqrt(Math.max(0, 1 - (dx / SEAT.rx) ** 2)) - 2
  return `M${n(x)} ${n(y)}L${n(x)} ${n(y + 30)}`
})

// ── THE FIGURES ─────────────────────────────────────────────────────────────

/**
 * Jane, standing erect before him, facing right: "Another effort set me at
 * liberty, and I stood erect before him." Her head is up, her arms down at
 * her sides, the hands open. Her shawl is over her shoulders, pinned at the
 * breast: "He was taking off my shawl in the hall" when they came in.
 */
const J_NECK: P = [328, 137]
const J_WAIST: P = [327, 171]
const J_SHAWL = { width: 30, point: 40, front: 8 }
const J_HEAD = { d: HEAD_JANE, at: [331, 108] as P, rot: -4, scale: 1.16 }
const JANE: Part[] = [
  ...woman({
    facing: 1,
    neck: J_NECK,
    waist: J_WAIST,
    hemY: 318,
    head: J_HEAD,
    gown: { shoulder: 26, waistW: 18, front: 30, back: 36 },
    toes: [
      [322, 316],
      [336, 317],
    ],
    near: {
      arm: [
        [331, 144],
        [337, 180],
        [339, 211],
      ],
      hand: { parts: LOOSE_HAND, scale: 1, rot: 4 },
    },
    far: {
      arm: [
        [325, 144],
        [319, 180],
        [321, 210],
      ],
      hand: { parts: LOOSE_HAND, scale: 0.98, rot: 0 },
    },
  }),
  { d: shawl(J_NECK, J_WAIST, 1, J_SHAWL) },
]
const J_T = headAt(1, J_HEAD.at, J_HEAD.rot, J_HEAD.scale)
/** The folds of the frock below its high waist, cut in paper. */
const JANE_FOLDS =
  gouge(318, 184, 304, 312, 0.8, 0.8) +
  gouge(329, 186, 330, 314, 0.8, -0.4) +
  gouge(340, 184, 352, 312, 0.7, -1)

/**
 * Rochester on the seat, facing left towards her and looking up at her, his
 * hand held out to her, open: "I offer you my hand, my heart".
 */
const ROCH_HEAD = { d: HEAD_ROCHESTER, at: [530, 136] as P, rot: 6, scale: 1.2 }
const ROCH_REACH: P[] = [
  [535, 176],
  [506, 199],
  [474, 202],
]
const ROCHESTER: Part[] = man({
  facing: -1,
  neck: [538, 167],
  hip: [553, 248],
  head: ROCH_HEAD,
  hair: ROCHESTER_HAIR,
  body: { width: 40, tails: 20, front: 2 },
  arm: 10,
  leg: 11,
  shoe: 1.1,
  near: {
    arm: ROCH_REACH,
    hand: { parts: OPEN_HAND, scale: 1.2, rot: 6 },
    leg: [
      [556, 248],
      [508, 252],
      [505, 314],
    ],
  },
  far: {
    arm: [
      [541, 176],
      [530, 212],
      [512, 234],
    ],
    hand: { parts: LOOSE_HAND, scale: 1.05, rot: 24 },
    leg: [
      [550, 246],
      [500, 246],
      [492, 311],
    ],
  },
})
const ROCH_T = headAt(-1, ROCH_HEAD.at, ROCH_HEAD.rot, ROCH_HEAD.scale)
/** Folds of his coat, and the edge of its front, cut in paper. */
const ROCH_CUTS = gouge(540, 184, 536, 236, 0.9, 0.8) + gouge(560, 186, 566, 238, 0.8, -0.6)

/** Jane's shadow, thrown long across the walk by the low moon behind her. */
const JANE_SHADOW =
  'M318 319C360 316 410 317 462 320C470 321 470 324 462 325C410 327 360 325 318 323Z'

function ProposalInTheOrchard({ uid }: ArtProps) {
  const m = marks()
  const id = { moon: `${uid}-moon` }
  return (
    <>
      <defs>
        <clipPath id={id.moon}>
          <circle cx={MOON.x} cy={MOON.y} r={MOON.r} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [480, 220], push: 1.03 })}>
        {/* the night sky, lit by the rising moon and the last of the sunset */}
        <path d={m.sky} fill={PAPER} />
        <path d={m.stars} fill={PAPER} />
        {/* the moon, "not yet risen high" */}
        <circle cx={MOON.x} cy={MOON.y} r={MOON.r + 4} fill={INK} />
        <circle cx={MOON.x} cy={MOON.y} r={MOON.r} fill={PAPER} />
        <g clipPath={`url(#${id.moon})`}>
          <path
            d={
              gouge(MOON.x - 14, MOON.y - 6, MOON.x + 2, MOON.y - 8, 1.2) +
              gouge(MOON.x - 4, MOON.y + 6, MOON.x + 14, MOON.y + 4, 1) +
              gouge(MOON.x - 16, MOON.y + 12, MOON.x - 6, MOON.y + 13, 0.8)
            }
            fill={INK}
          />
        </g>

        {/* the last of the sunset over one hill-peak */}
        <path className="lc-glow" style={timing({ delay: 0.6 })} d={m.glow} fill={RED} />

        {/* the far hills and the wood, the shorn fields, the sunk fence */}
        <path d={m.hills} fill={INK} />
        {/* "red jewel and furnace flame at one point, on one hill-peak": the
            glow sits on the summit itself, printed over the hill. FIXED 10
            October 2026: it was printed under the hills and was covered. */}
        <path
          d={`M${PEAK.x - 15} ${PEAK.y + 5}Q${PEAK.x} ${PEAK.y - 9} ${PEAK.x + 15} ${PEAK.y + 5}Q${PEAK.x} ${PEAK.y + 1} ${PEAK.x - 15} ${PEAK.y + 5}Z`}
          fill={RED}
        />
        <path d={m.hillCuts} fill={PAPER} />
        <path d={m.wood} fill={INK} stroke={PAPER} strokeWidth={LINE.hairline} />
        <rect x={0} y={FIELDS} width={W} height={FENCE - FIELDS} fill={PAPER} />
        <path d={m.fields} fill={INK} />
        <rect x={0} y={FENCE} width={W} height={H - FENCE} fill={INK} />
        <path d={gouge(0, FENCE + 1.5, W, FENCE + 1.5, 1.6)} fill={PAPER} />

        {/* the turf and the gravel walk winding down to the tree */}
        <path d={m.walk} fill={PAPER} />
        <path d={m.turf} fill={PAPER} />

        {/* the laurels bordering the walk */}
        <path d={m.laurels} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={m.laurelCuts} fill={PAPER} />

        {/* the giant horse-chestnut and the seat round its old roots */}
        {/* trunk and limbs carved as one shape: one paper edge round them all */}
        <g fill={PAPER} stroke={PAPER} strokeWidth={LINE.carve * 2} strokeLinejoin="round">
          {TREE.map((d) => (
            <path key={d} d={d} />
          ))}
        </g>
        <g fill={INK}>
          {TREE.map((d) => (
            <path key={d} d={d} />
          ))}
        </g>
        <path d={m.bark} fill={PAPER} />
        <g fill={INK} stroke={PAPER} strokeWidth={LINE.carve * 2}>
          {CROWN.map(([cx, cy, r]) => (
            <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={r} />
          ))}
        </g>
        <g fill={INK}>
          {CROWN.map(([cx, cy, r]) => (
            <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={r} />
          ))}
        </g>
        <path d={m.crownCuts} fill={PAPER} />
        <path d={m.leaves} fill={PAPER} />
        <g stroke={INK} strokeWidth={5} strokeLinecap="round">
          {SEAT_LEGS.map((d) => (
            <path key={d} d={d} />
          ))}
        </g>
        <path d={SEAT_EDGE} fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />
        <path d={SEAT_TOP} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
        <path
          d={wedge(SEAT.cx - 60, SEAT.cy - 2, SEAT.cx + 80, SEAT.cy - 1, 0.6, 2.4)}
          fill={INK}
        />

        {/* Rochester on the seat, his hand held out to her, the moon on his face */}
        <Figure parts={ROCHESTER} cuts={ROCH_CUTS}>
          <g transform={ROCH_T}>
            <clipPath id={`${uid}-face`}>
              <rect x={5} y={-15} width={24} height={40} />
            </clipPath>
            <path d={ROCHESTER_HAIR_CUTS + ROCHESTER_CUTS} fill={PAPER} />
            <path
              d={ROCHESTER_HAIRLINE + ROCHESTER_EAR}
              fill="none"
              stroke={PAPER}
              strokeWidth={1.1}
              strokeLinecap="round"
            />
            <path d={ROCHESTER_NECKCLOTH} fill={PAPER} />
            <path
              d={HEAD_ROCHESTER}
              clipPath={`url(#${uid}-face)`}
              fill="none"
              stroke={PAPER}
              strokeWidth={1.6}
            />
          </g>
        </Figure>

        {/* Jane, erect before him, her long shadow across the walk */}
        <path d={JANE_SHADOW} fill={INK} />
        <Figure parts={JANE} cuts={JANE_FOLDS}>
          <path d={shawlBorder(J_NECK, J_WAIST, 1, J_SHAWL)} fill={PAPER} />
          <JaneFace t={J_T} />
        </Figure>
      </g>
    </>
  )
}

export const theProposalInTheOrchard: LinocutArt = {
  width: W,
  height: H,
  Draw: ProposalInTheOrchard,
}
