import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  between,
  clamp,
  deg,
  gouge,
  gougeField,
  n,
  rng,
  wedge,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import {
  AARON_MAN_CUTS,
  DollyHead,
  EppieGrownHead,
  Figure,
  GRIP_CUTS,
  GRIP_HAND,
  HEAD_AARON_MAN,
  HEAD_DOLLY,
  HEAD_EPPIE_GROWN,
  HEAD_SILAS,
  HOLD_CUTS,
  HOLD_HAND,
  OPEN_HAND,
  SHIRT_COLLAR,
  SilasFace,
  gown,
  handAt,
  headAt,
  line,
  man,
  type P,
  type Part,
} from './people'

/**
 * The Conclusion: "The wedding", the nineteenth and last moment in the
 * guide's timeline. Every detail is from the text (the held edition,
 * src/data/full-texts/silas-marner.ts):
 *
 * - "It was when the great lilacs and laburnums in the old-fashioned gardens
 *   showed their golden and purple wealth above the lichen-tinted walls";
 *   "Happily the sunshine fell more warmly than usual on the lilac tufts the
 *   morning that Eppie was married". So the sun blazes, and on the left, the
 *   way they have come from the church, lilac tufts stand over an old wall
 *   spotted with lichen, the tower beyond. (Purple and gold cannot be
 *   printed and are left to the words.)
 * - "Seen at a little distance as she walked across the churchyard and down
 *   the village, she seemed to be attired in pure white, and her hair looked
 *   like the dash of gold on a lily. One hand was on her husband's arm, and
 *   with the other she clasped the hand of her father Silas." So Eppie walks
 *   in white between them, her hand on Aaron's arm and her other hand closed
 *   round her father's; her hair is the kit's paper hair (./people.tsx). The
 *   "tiniest pink sprig" of the dress is too small to be seen "at a little
 *   distance", so the dress is printed plain paper.
 * - "Dolly Winthrop walked behind with her husband"; Ben Winthrop then "found
 *   it agreeable to turn in" at the Rainbow, so it is "the four united
 *   people" who come home: Dolly walks behind, in her cap, "bordered by grey
 *   hairs" (Chapter 21). Mr Macey, in his arm-chair at his own door, is passed
 *   earlier in the village and is not in this picture.
 * - "Eppie had a larger garden than she had ever expected there now; and in
 *   other ways there had been alterations ... to suit Silas's larger family";
 *   Mr Cass "built us up the new end o' the cottage" (Chapter 16). "The garden
 *   was fenced with stones on two sides, but in front there was an open
 *   fence, through which the flowers shone with answering gladness, as the
 *   four united people came within sight of them." So on the right is the
 *   stone cottage with its new end, the garden before it walled in stone at
 *   the side and open-fenced in front, and the flowers through the pales are
 *   the spot colour: the one thing in the print the text makes glad. The
 *   cottage's roof is slated, not thatched: "Marner's cottage had no thatch"
 *   (Chapter 4).
 * - "we shall take the furze bush into the garden; it'll come into the
 *   corner" (Chapter 16): the furze bush stands in the garden's corner,
 *   "yallow with flowers" in spring, cut in small paper stars.
 * - Aaron is "That good-looking young fellow, in a new fustian suit" (Chapter
 *   16): the kit's grown Aaron, in a short working man's coat. Silas is the
 *   kit's Silas of Part Two, white-haired, his pale face turned to the home
 *   ahead.
 *
 * Seeds: 1901 (the sun's rays), 1902 (the lilacs), 1903 (the lane), 1904
 * (the cottage's stone and slates), 1905 (the flowers), 1906 (the hedge),
 * 1907 (the garden wall).
 */

const W = 860
const H = 340
/** The far edge of the lane; the hedge, the wall and the fence stand on it. */
const GROUND = 262
const FEET = 324
const SUN: P = [70, 36]

type Marks = {
  rays: string
  lilac: string
  lilacCuts: string
  leaves: string
  wall: string
  lichen: string
  lane: string
  hedge: string
  stones: string
  newStones: string
  gardenWall: string
  slates: string
  flowers: string
  eyes: string
  daisies: string
  stems: string
  furze: string
}

/**
 * Rough stones laid in uneven courses across a box: paper shapes with ink
 * joints between, each course its own height and each stone its own width
 * and lean, so the wall reads as laid stone and not as brick.
 */
function courses(
  r: () => number,
  x0: number,
  x1: number,
  y0: number,
  y1: number,
  h: number,
  w: [number, number],
) {
  let d = ''
  let y = y0
  while (y < y1 - 3) {
    const ch = Math.min(h * (0.75 + r() * 0.6), y1 - y)
    let x = x0 - r() * w[0]
    while (x < x1) {
      const sw = w[0] + (w[1] - w[0]) * r()
      const xa = Math.max(x, x0) + 1.4
      const xb = Math.min(x + sw, x1) - 1.4
      const t = y + 1.4 + r() * 1.2
      const b = y + ch - 1.4 - r() * 1.2
      if (xb - xa > 3 && b - t > 2)
        d += `M${n(xa)} ${n(t + r() * 1.5)}Q${n((xa + xb) / 2)} ${n(t - 1)} ${n(xb)} ${n(t + r() * 1.5)}L${n(xb - r())} ${n(b)}Q${n((xa + xb) / 2)} ${n(b + 1.2)} ${n(xa + r())} ${n(b)}Z`
      x += sw + 1.8
    }
    y += ch
  }
  return d
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // The sun's rays scored across the white sky.
  const r0 = rng(1901)
  let rays = ''
  for (let a = -10; a < 200; a += 9) {
    const ang = deg(a + between(r0, -2, 2))
    const from = between(r0, 24, 30)
    const to = between(r0, 70, 110)
    rays += wedge(
      SUN[0] + Math.cos(ang) * from,
      SUN[1] + Math.sin(ang) * from,
      SUN[0] + Math.cos(ang) * to,
      SUN[1] + Math.sin(ang) * to,
      1.8,
      0.3,
    )
  }
  // The lilac tufts: cones of blossom, paper, over a dark mass of leaves.
  const r = rng(1902)
  let lilac = ''
  let lilacCuts = ''
  const tufts: [number, number, number][] = [
    [18, 150, 1],
    [44, 128, 1.15],
    [74, 144, 1],
    [102, 122, 1.2],
    [132, 142, 0.95],
    [158, 130, 1.05],
  ]
  // Each tuft a cone of small florets, widest at the foot, a point at the top.
  for (const [x, y, s] of tufts) {
    const h = 34 * s
    for (let k = 0; k < 7; k++) {
      const t = k / 6
      const yy = y - h + h * t
      const half = (2.5 + t * 9) * s
      const count = 1 + Math.round(t * 3)
      for (let i = 0; i < count; i++) {
        const fx =
          x - half + (count === 1 ? half : (2 * half * i) / (count - 1)) + between(r, -1, 1)
        const fr = (2.6 + t * 1.2) * s
        lilac += `M${n(fx - fr)} ${n(yy)}a${n(fr)} ${n(fr)} 0 1 0 ${n(2 * fr)} 0a${n(fr)} ${n(fr)} 0 1 0 ${n(-2 * fr)} 0Z`
      }
    }
    lilacCuts += `M${n(x)} ${n(y + 2)}V${n(y + 12)}`
  }
  let leaves = ''
  for (let k = 0; k < 26; k++) {
    const x = between(r, 4, 176)
    const y = between(r, 128, 186)
    leaves += gouge(x, y, x + between(r, 6, 11), y - between(r, 1, 4), 1.6)
  }
  // The old wall below them, its stones spotted with lichen.
  const t = rng(1904)
  const wall = courses(t, 0, 186, 184, GROUND, 11, [14, 24])
  let lichen = ''
  for (let k = 0; k < 18; k++) {
    const x = between(t, 6, 180)
    const y = between(t, 188, 256)
    lichen += `M${n(x)} ${n(y)}a1.6 1.2 0 1 0 3.2 0a1.6 1.2 0 1 0 -3.2 0Z`
  }
  // The lane in sunshine: short ink strokes, a few ruts.
  const g = rng(1903)
  let lane = ''
  for (let y = GROUND + 6; y < H; y += 7 + (y - GROUND) * 0.05) {
    let x = between(g, -20, 0)
    while (x < W) {
      const len = between(g, 10, 34)
      if (g() < 0.45)
        lane += gouge(x, y, x + len, y + between(g, -0.5, 0.5), 0.5 + (y - GROUND) * 0.016)
      x += len + between(g, 10, 34)
    }
  }
  // The hedgerow behind the lane: dark, with leaves cut along its top.
  const hg = rng(1906)
  const hedge = gougeField(
    hg,
    { x0: 184, x1: 488, y0: 160, y1: GROUND - 4 },
    (_x, y) => 0.08 + clamp(1 - (y - 160) / 60) * 0.3,
    {
      spacing: 7,
      len: [6, 14],
      gap: [6, 16],
      max: 1.8,
    },
  )
  // The cottage: laid stone, the new end's stone squarer and paler, and slates.
  const stones = courses(t, 548, 760, 132, GROUND - 26, 12, [16, 28])
  const newStones = courses(t, 764, W, 146, GROUND - 26, 14, [26, 36])
  const gardenWall = courses(rng(1907), 500, 560, 204, GROUND, 10, [12, 20])
  let slates = ''
  for (let y = 74; y < 126; y += 7) {
    const off = ((y - 74) / 7) % 2 ? 0 : 7
    for (let x = 600 - (y - 74) * 0.7 + off; x < 760; x += 14) slates += `M${n(x)} ${y}v6`
  }
  // The garden's flowers, seen through the open fence, and a few double daisies.
  const f = rng(1905)
  let flowers = ''
  let daisies = ''
  let stems = ''
  let eyes = ''
  for (let x = 572; x < W - 6; x += between(f, 12, 18)) {
    const top = between(f, 212, 236)
    stems += `M${n(x)} ${GROUND + 6}Q${n(x + between(f, -4, 4))} ${n((top + GROUND) / 2)} ${n(x + between(f, -3, 3))} ${n(top)}`
    stems += gouge(x, (top + GROUND) / 2 + 6, x + between(f, -9, 9), (top + GROUND) / 2 - 2, 1.8)
    // a cluster of heads at the top of each stem: red, or now and then a pale daisy
    for (let k = 0; k < 3; k++) {
      const hx = x + between(f, -6, 6)
      const hy = top + between(f, -4, 8) + k * 3
      const s = between(f, 4.2, 6)
      if (f() < 0.8) {
        flowers += `M${n(hx - s)} ${n(hy)}a${n(s)} ${n(s * 0.9)} 0 1 0 ${n(2 * s)} 0a${n(s)} ${n(s * 0.9)} 0 1 0 ${n(-2 * s)} 0Z`
        eyes += `M${n(hx - 1.3)} ${n(hy)}a1.3 1.3 0 1 0 2.6 0a1.3 1.3 0 1 0 -2.6 0Z`
      } else daisies += `M${n(hx - 3)} ${n(hy)}a3 3 0 1 0 6 0a3 3 0 1 0 -6 0Z`
    }
  }
  // The furze bush in the corner: spiky, with small flowers cut in paper.
  let furze = ''
  for (let k = 0; k < 14; k++) {
    const x = between(f, 526, 560)
    const y = between(f, 214, 252)
    const k2 = between(f, 1.4, 2.2)
    furze += `M${n(x - k2)} ${n(y)}L${n(x)} ${n(y - k2 * 0.4)}L${n(x + k2)} ${n(y)}L${n(x)} ${n(y + k2 * 0.4)}ZM${n(x)} ${n(y - k2)}L${n(x + k2 * 0.4)} ${n(y)}L${n(x)} ${n(y + k2)}L${n(x - k2 * 0.4)} ${n(y)}Z`
  }
  cached = {
    rays,
    lilac,
    lilacCuts,
    leaves,
    wall,
    lichen,
    lane,
    hedge,
    stones,
    newStones,
    gardenWall,
    slates,
    flowers,
    eyes,
    daisies,
    stems,
    furze,
  }
  return cached
}

// ── DOLLY, walking behind ───────────────────────────────────────────────────
const DOL_T = headAt(1, [206, 120], 0, 1.14)
const DOLLY: Part[] = [
  { d: 'M204 156L198 190L210 212', w: 7 },
  { d: gown([206, 150], [210, FEET], { width: 28, waist: 22, foot: 48, bust: 4 }) },
  { d: HEAD_DOLLY, t: DOL_T },
  { d: 'M212 158L220 192L230 210', w: 7, sep: 1.4 },
  ...HOLD_HAND.map((q) => ({
    ...q,
    t: handAt(
      [
        [220, 192],
        [230, 210],
      ],
      1,
      { parts: HOLD_HAND, scale: 0.9, rot: 0 },
    ),
  })),
]
/** Her white kerchief over the shoulders, and a few folds of her gown. */
const DOLLY_KERCHIEF = 'M193 150C201 146 213 146 221 150L218 166C210 172 200 170 194 164Z'
const DOLLY_CUTS = gouge(204, 186, 198, 300, 0.8, 0.6) + gouge(214, 190, 220, 306, 0.8, -0.6)

// ── SILAS, his hand in hers ─────────────────────────────────────────────────
const SIL_HEAD = { d: HEAD_SILAS, at: [282, 110] as P, rot: 4, scale: 1.26 }
const SIL_NEAR_ARM: P[] = [
  [288, 152],
  [300, 186],
  [318, 200],
]
const SILAS: Part[] = man({
  facing: 1,
  neck: [280, 144],
  hip: [276, 224],
  head: SIL_HEAD,
  body: { width: 30, tails: 38, front: 4, flare: 5, swing: 3 },
  arm: 8,
  leg: 9,
  near: {
    arm: SIL_NEAR_ARM,
    leg: [
      [278, 224],
      [292, 272],
      [302, FEET - 2],
    ],
    hand: { parts: HOLD_HAND, scale: 0.95, rot: -6 },
  },
  far: {
    arm: [
      [274, 152],
      [266, 188],
      [270, 220],
    ],
    leg: [
      [274, 226],
      [266, 274],
      [258, FEET],
    ],
  },
})

// ── AARON, her hand on his arm ──────────────────────────────────────────────
const AAR_HEAD = { d: HEAD_AARON_MAN, at: [428, 98] as P, rot: 0, scale: 1.26 }
const AAR_FAR_ARM: P[] = [
  [418, 142],
  [398, 180],
  [418, 198],
]
const AARON: Part[] = man({
  facing: 1,
  neck: [424, 132],
  hip: [420, 214],
  head: AAR_HEAD,
  body: { width: 34, tails: 18, front: 4, flare: 4, swing: 3 },
  arm: 9,
  leg: 10,
  near: {
    arm: [
      [430, 142],
      [440, 180],
      [446, 214],
    ],
    leg: [
      [422, 214],
      [436, 266],
      [448, FEET - 2],
    ],
    hand: { parts: OPEN_HAND, scale: 1, rot: 70 },
  },
  far: {
    arm: AAR_FAR_ARM,
    leg: [
      [418, 216],
      [408, 268],
      [398, FEET],
    ],
    hand: { parts: HOLD_HAND, scale: 0.95, rot: -20 },
  },
})

// ── EPPIE, in white, between them ───────────────────────────────────────────
const EPP_T = headAt(1, [354, 114], -2, 1.16)
const EPP_NECK: P = [354, 146]
/** Her near hand rests on Aaron's arm, at his elbow. */
const EPP_NEAR_ARM: P[] = [
  [360, 154],
  [376, 186],
  [394, 184],
]
/** Her far hand reaches back and closes round her father's. */
const EPP_FAR_ARM: P[] = [
  [348, 154],
  [338, 188],
  [320, 202],
]
const EPP_NEAR_HAND = { parts: HOLD_HAND, scale: 0.9, rot: -14 }
const EPP_GRIP = { parts: GRIP_HAND, scale: 0.95, rot: 10 }
const EPP_DRESS = gown(EPP_NECK, [358, FEET + 2], { width: 26, waist: 22, foot: 54, bust: 3 })
const EPPIE: Part[] = [
  { d: line(EPP_FAR_ARM), w: 8 },
  ...GRIP_HAND.map((q) => ({ ...q, t: handAt(EPP_FAR_ARM, 1, EPP_GRIP) })),
  { d: EPP_DRESS },
  { d: HEAD_EPPIE_GROWN, t: EPP_T },
  { d: line(EPP_NEAR_ARM), w: 8, sep: 1.4 },
  ...HOLD_HAND.map((q) => ({ ...q, t: handAt(EPP_NEAR_ARM, 1, EPP_NEAR_HAND) })),
]
/** The folds of the white dress, its high waist, in ink. */
const EPP_FOLDS =
  'M343 168Q354 171 366 168' +
  'M350 176Q347 240 342 318M358 178Q360 250 364 320M352 200Q352 260 352 318'
const EPP_THROAT =
  'M0.6 20.2C3 20.8 5.4 20.8 7.4 20.4L6.2 24L7.4 27C3.4 27.8 -0.8 27.6 -3.4 26.8C-1.4 24.8 -0.2 22.6 0.6 20.2Z'

/** The fence's pales and rails, in front of the garden. */
const PALES =
  Array.from({ length: 12 }, (_, i) => `M${570 + i * 25} 246V290`).join('') +
  `M562 256H${W}M562 280H${W}`

function TheWedding({ uid }: ArtProps) {
  const m = marks()
  const st = headAt(1, SIL_HEAD.at, SIL_HEAD.rot, SIL_HEAD.scale)
  const at = headAt(1, AAR_HEAD.at, AAR_HEAD.rot, AAR_HEAD.scale)
  return (
    <g className="lc-push" style={timing({ origin: [380, 210], push: 1.03 })}>
      {/* the sky in sunshine, and the sun's rays scored across it */}
      <rect x={0} y={0} width={W} height={GROUND} fill={PAPER} />
      <path d={m.rays} fill={INK} />
      <circle cx={SUN[0]} cy={SUN[1]} r={17} fill={PAPER} stroke={INK} strokeWidth={LINE.bold} />

      {/* the church tower they have come from, beyond the village */}
      <path d="M156 128V58H160V52H165V58H170V52H175V58H180V52H184V128Z" fill={INK} />
      <path d="M166 74Q170 68 174 74V86H166Z" fill={PAPER} />

      {/* the lilacs over the lichen-tinted wall */}
      <path d="M0 116Q30 96 60 104T120 96T188 112V190H0Z" fill={INK} />
      <path d={m.leaves} fill={PAPER} />
      <path d={m.lilac} fill={PAPER} stroke={INK} strokeWidth={0.9} />
      <path d={m.lilacCuts} stroke={PAPER} strokeWidth={1.4} />
      <rect x={0} y={180} width={188} height={GROUND - 180} fill={INK} />
      <path d={m.wall} fill={PAPER} />
      <path d={m.lichen} fill={INK} />
      <rect
        x={0}
        y={176}
        width={190}
        height={6}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.fine}
      />

      {/* the hedgerow behind the lane */}
      <path
        d="M184 262V168Q198 152 214 162Q230 148 248 160Q266 146 284 158Q302 146 320 160Q338 148 356 158Q374 146 392 160Q410 150 428 160Q446 148 464 160Q480 154 492 166V262Z"
        fill={INK}
      />
      <path d={m.hedge} fill={PAPER} />

      {/* the cottage, stone-roofed, with its new end */}
      <path d="M548 132L604 70H760V132Z" fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.slates} stroke={PAPER} strokeWidth={1.1} />
      <path d="M594 82H760M584 94H760M574 106H760M564 118H760" stroke={PAPER} strokeWidth={1} />
      <path d="M638 70V40H660V70Z" fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d="M634 38H664V44H634Z" fill={INK} stroke={PAPER} strokeWidth={1} />
      <rect x={548} y={132} width={212} height={GROUND - 132} fill={INK} />
      <path d={m.stones} fill={PAPER} />
      <path d="M760 146L782 92H860V146Z" fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d="M776 104H860M770 118H860M764 132H860" stroke={PAPER} strokeWidth={1} />
      <rect x={760} y={146} width={W - 760} height={GROUND - 146} fill={INK} />
      <path d={m.newStones} fill={PAPER} />
      <path d="M760 132V262" stroke={INK} strokeWidth={3} />
      {/* the door and the windows */}
      <path
        d="M650 236V176Q650 168 658 168H682Q690 168 690 176V236Z"
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />
      <path d="M708 158H744V196H708Z" fill={INK} stroke={PAPER} strokeWidth={2} />
      <path d="M726 158V196M708 177H744" stroke={PAPER} strokeWidth={1.4} />
      <path d="M800 166H834V200H800Z" fill={INK} stroke={PAPER} strokeWidth={2} />
      <path d="M817 166V200M800 183H834" stroke={PAPER} strokeWidth={1.4} />

      {/* the garden: walled in stone at the side, the furze bush in its corner */}
      <rect x={496} y={200} width={66} height={GROUND - 200} fill={INK} />
      <path d={m.gardenWall} fill={PAPER} />
      <path
        d="M520 256C514 236 520 214 536 206C548 200 562 206 566 220C570 236 566 252 560 258Z"
        fill={INK}
        stroke={PAPER}
        strokeWidth={1.2}
      />
      <path d={m.furze} fill={PAPER} />
      {/* the garden's bed, and the flowers shining through the open fence */}
      <rect x={562} y={GROUND} width={W - 562} height={22} fill={INK} />
      <path d={m.stems} stroke={INK} strokeWidth={1.4} fill="none" />
      <path d={m.flowers} fill={RED} />
      <path d={m.eyes} fill={PAPER} />
      <path d={m.daisies} fill={PAPER} stroke={INK} strokeWidth={0.9} />
      <path d={PALES} stroke={PAPER} strokeWidth={6.4} fill="none" />
      <path d={PALES} stroke={INK} strokeWidth={3.6} fill="none" />

      {/* the lane, in sunshine */}
      <rect x={0} y={GROUND} width={W} height={H - GROUND} fill={PAPER} />
      <path d={m.lane} fill={INK} />

      {/* their short noon shadows on the lane */}
      <g fill={INK}>
        {[
          [208, 30],
          [282, 34],
          [358, 34],
          [426, 34],
        ].map(([x, w]) => (
          <ellipse key={x} cx={x} cy={FEET + 4} rx={w} ry={4} />
        ))}
      </g>

      {/* Dolly, walking behind */}
      <Figure parts={DOLLY}>
        <path d={DOLLY_KERCHIEF} fill={PAPER} stroke={INK} strokeWidth={0.9} />
        <path d={DOLLY_CUTS} fill={PAPER} />
        <DollyHead t={DOL_T} bloom={false} />
      </Figure>

      {/* Silas */}
      <Figure parts={SILAS}>
        <path d={SHIRT_COLLAR} transform={st} fill={PAPER} />
        <SilasFace t={st} white look={0.8} />
        <path d={gouge(286, 160, 288, 216, 0.9, -0.8)} fill={PAPER} />
      </Figure>

      {/* Aaron, in his new suit */}
      <Figure parts={AARON}>
        <path d={AARON_MAN_CUTS} transform={at} fill={PAPER} />
        <path d={SHIRT_COLLAR} transform={at} fill={PAPER} />
        <path d={gouge(428, 150, 432, 206, 0.9, -0.8)} fill={PAPER} />
      </Figure>

      {/* Eppie, in white, one hand on her husband's arm, the other in her father's */}
      <Figure parts={EPPIE}>
        {/* the far sleeve, then the dress over it, then the near sleeve over the dress */}
        <path
          d={line(EPP_FAR_ARM)}
          fill="none"
          stroke={PAPER}
          strokeWidth={5}
          strokeLinecap="round"
        />
        <path d={EPP_DRESS} fill={PAPER} stroke={INK} strokeWidth={1.4} strokeLinejoin="round" />
        <path d={EPP_FOLDS} fill="none" stroke={INK} strokeWidth={1} />
        <path
          d={line(EPP_NEAR_ARM)}
          fill="none"
          stroke={INK}
          strokeWidth={8}
          strokeLinecap="round"
        />
        <path
          d={line(EPP_NEAR_ARM)}
          fill="none"
          stroke={PAPER}
          strokeWidth={5}
          strokeLinecap="round"
        />
        <EppieGrownHead t={EPP_T} />
        <path d={EPP_THROAT} transform={EPP_T} fill={PAPER} stroke={INK} strokeWidth={0.8} />
        <path d={GRIP_CUTS} transform={handAt(EPP_FAR_ARM, 1, EPP_GRIP)} fill={PAPER} />
        <path d={HOLD_CUTS} transform={handAt(EPP_NEAR_ARM, 1, EPP_NEAR_HAND)} fill={PAPER} />
      </Figure>
    </g>
  )
}

export const theWedding: LinocutArt = { width: W, height: H, Draw: TheWedding }
