import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { arcDashes, clamp, gouge, gougeField, n, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { flagFloor, footShadow } from './acts-3-4-kit'
import { CAP, CAP_FLAT, FEATHER, FEATHER_QUILL, HAIR_CUTS } from './people'
import {
  arm,
  CutFigure,
  doublet,
  EYE,
  HEAD_MAN,
  HEAD_ROMEO,
  headAt,
  limb,
  rapier,
  ROMEO_HAIR_CUTS,
  sheathed,
  shoe,
  type P,
  type Part,
  type Piece,
} from './verona-kit'

/**
 * Act 3, Scene 1: "Two deaths and a banishment", the ninth moment in the
 * guide's timeline, and its turning point. The picture is the instant before
 * the first death, when Romeo steps between the two swordsmen. Every detail
 * is from the scene in the held edition (Project Gutenberg #1513,
 * src/data/full-texts/romeo-and-juliet.ts):
 *
 * - "A public Place." "The day is hot, the Capulets abroad ... For now these
 *   hot days, is the mad blood stirring." So a square in Verona at midday,
 *   the sky white with heat, the shadows short under the men's feet, and the
 *   sun a disc of the spot colour: the heat and the "mad blood" of the scene.
 * - "Gentle Mercutio, put thy rapier up." "Come, sir, your passado." "They
 *   fight." "Draw, Benvolio; beat down their weapons. Gentlemen, for shame,
 *   forbear this outrage". And in Benvolio's account: "Romeo he cries aloud,
 *   'Hold, friends! Friends, part!' and swifter than his tongue, His agile
 *   arm beats down their fatal points, And 'twixt them rushes". So Romeo, in
 *   the middle, has rushed between them, his arms spread and both hands up,
 *   open, one to each: Mercutio lunging from the left, Tybalt en garde on the
 *   right, their rapiers beaten down, both points at the ground.
 * - "Tybalt, you rat-catcher", "Good King of Cats", "a braggart, a rogue, a
 *   villain, that fights by the book of arithmetic". Tybalt stands in a
 *   fencer's guard, his free hand on his hip, in the feathered cap the brawl
 *   panel gives him (./a-brawl-in-the-streets.tsx); "Enter Tybalt and
 *   others", so one of his followers stands behind him with a hand on his
 *   hilt. Benvolio, in his flat cap, calls to them from the left.
 *
 * SAFEGUARDING. Nothing that follows is drawn: not the thrust "under your
 * arm", not Mercutio hurt, not Tybalt's death, no body. No blade touches
 * anyone; both points are down at the paving, clear of every foot. The red
 * is the sun, never blood. The quotation, Mercutio's curse, carries what
 * happens next.
 *
 * The young men are cut as in the other panels (./verona-kit.tsx for Romeo,
 * ./people.tsx for the caps and Tybalt's feather); Mercutio goes bareheaded
 * as in "Queen Mab and a warning". Nothing is taken from a film or stage
 * production. Seeds: 901 (sky), 902 (walls), 903 (paving).
 */

const W = 860
const H = 340
/** The foot of the houses across the square. */
const HORIZON = 206
const SUN: P = [700, 58]

/** The houses round the square, and a tower, as one ink shape. */
const BUILDINGS = `M0 ${HORIZON}V112H96V126H214V116H330V172H524V140H624V122H792V36L812 18L832 36V124H860V${HORIZON}Z`
/** Arched windows and doors: solid shadow. */
const OPENINGS = (() => {
  let d = ''
  const win = (x: number, y: number, w: number, h: number) =>
    (d += `M${x} ${y + h}V${y + w / 2}A${w / 2} ${w / 2} 0 0 1 ${x + w} ${y + w / 2}V${y + h}Z`)
  for (const x of [20, 60]) win(x, 128, 16, 26)
  for (const x of [230, 280]) win(x, 132, 14, 24)
  for (const x of [546, 588]) win(x, 152, 14, 22)
  for (const x of [646, 700]) win(x, 136, 16, 26)
  win(806, 60, 12, 20)
  win(116, 168, 26, 38)
  win(360, 180, 22, 26)
  win(676, 178, 24, 28)
  return d
})()
const EAVES = `M0 116H96M96 130H214M214 120H330M330 176H524M524 144H624M624 126H792M832 128H860`

type Marks = { sky: string; heat: string; walls: string; paving: string }

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // A white-hot sky: ink only at the top, thinning to nothing at the roofs.
  const sky = gougeField(
    rng(901),
    { x0: 0, x1: W, y0: 6, y1: 110 },
    (x, y) => clamp(0.55 - y / 150 - Math.max(0, 1 - Math.hypot(x - SUN[0], y - SUN[1]) / 120)),
    { spacing: 7, len: [30, 100], gap: [12, 40], max: 2 },
  )
  // Heat round the sun: broken rings of haze, cut in ink on the white sky.
  const r = rng(904)
  let heat = ''
  for (const [rad, dash, gap] of [
    [32, [10, 22], [5, 12]],
    [40, [8, 18], [8, 16]],
    [49, [6, 14], [12, 22]],
  ] as [number, [number, number], [number, number]][])
    heat += arcDashes(r, SUN[0], SUN[1], rad, 0, Math.PI * 2, dash, gap)
  // The house fronts in the glare: pale, shaded lightly under the eaves and
  // towards the ground, as the brawl panel cuts the same square.
  const walls = gougeField(
    rng(902),
    { x0: 0, x1: W, y0: 18, y1: HORIZON },
    (x, y) => clamp(0.08 + (y - 150) / 260),
    { spacing: 6.4, len: [20, 60], gap: [10, 30], max: 1.4 },
  )
  const paving = flagFloor(rng(903), W, H, HORIZON, [440, 120], 44, 7)
  cached = { sky, heat, walls, paving }
  return cached
}

const fist = ([x, y]: P, r = 5.2): Part => ({
  d: `M${n(x - r)} ${n(y)}a${r} ${r} 0 1 0 ${n(2 * r)} 0a${r} ${r} 0 1 0 ${n(-2 * r)} 0Z`,
})

// ── Benvolio, on the left, calling to them to hold ─────────────────────────
const B_HEAD = headAt(1, [144, 148], 0)
const B_SWORD = sheathed([130, 230], 1, 76)
const BENVOLIO: Piece[] = [
  {
    d: limb([
      [128, 236],
      [122, 272],
      [114, 306],
    ]),
    w: 9,
  },
  shoe([113, 307], 1),
  B_SWORD.scabbard,
  {
    d: limb([
      [136, 170],
      [132, 236],
    ]),
    w: 22,
  },
  { d: doublet([136, 170], [132, 236], 1) },
  {
    d: limb([
      [136, 236],
      [144, 272],
      [150, 306],
    ]),
    w: 9,
  },
  shoe([151, 307], 1),
  { d: HEAD_MAN, t: B_HEAD },
  { d: CAP_FLAT, t: B_HEAD },
  // the far hand on his hilt
  [
    {
      d: limb([
        [132, 180],
        [126, 206],
        [140, 224],
      ]),
      w: 8,
      sep: 1.4,
    },
    { ...fist([141, 225], 4.8), sep: 1.4 },
  ],
  // the near hand put up to them, open: "Hold"
  arm(
    [
      [142, 178],
      [162, 188],
      [180, 176],
    ],
    -58,
    { w: 8, sep: 1.5, size: 15, spread: 16, thumb: -1 },
  ),
]
const BENVOLIO_CUTS = gouge(122, 226, 146, 227, 1.8) + gouge(130, 190, 126, 222, 1.6, 0.6)

// ── Mercutio, lunging in from the left, his point beaten down ──────────────
const M_HEAD = headAt(1, [308, 148], 8)
const M_GRIP: P = [342, 208]
const MERCUTIO: Piece[] = [
  {
    d: limb([
      [278, 236],
      [254, 270],
      [228, 305],
    ]),
    w: 9,
  },
  shoe([227, 306], 1),
  {
    d: limb([
      [300, 170],
      [282, 236],
    ]),
    w: 22,
  },
  { d: doublet([300, 170], [282, 236], 1, { swing: 6 }) },
  {
    d: limb([
      [286, 236],
      [316, 266],
      [332, 305],
    ]),
    w: 9,
  },
  shoe([333, 306], 1),
  { d: HEAD_MAN, t: M_HEAD },
  // the free arm flung back and down
  arm(
    [
      [294, 180],
      [276, 198],
      [262, 214],
    ],
    140,
    { w: 8, sep: 1.4, size: 14, spread: 14, thumb: 1 },
  ),
  // the sword arm, thrust forward and down
  [
    {
      d: limb([[304, 178], [322, 196], M_GRIP]),
      w: 8.4,
      sep: 1.5,
    },
    { ...fist(M_GRIP), sep: 1.5 },
  ],
]
const MERCUTIO_CUTS = gouge(278, 224, 302, 226, 1.8) + gouge(296, 184, 286, 220, 1.6, 0.6)

// ── Romeo, between them, his hands up to part them ─────────────────────────
const R_HEAD = headAt(1, [456, 146], -4)
const R_SWORD = sheathed([442, 230], 1, 60)
const ROMEO: Piece[] = [
  {
    d: 'M440 164C430 172 422 192 418 216C415 234 414 246 416 256L434 252C432 234 434 210 440 190Z',
  },
  {
    d: limb([
      [440, 236],
      [430, 270],
      [424, 305],
    ]),
    w: 9,
  },
  shoe([423, 306], 1),
  R_SWORD.scabbard,
  {
    d: limb([
      [448, 168],
      [444, 236],
    ]),
    w: 22,
  },
  { d: doublet([448, 168], [444, 236], 1) },
  {
    d: limb([
      [448, 236],
      [462, 270],
      [470, 305],
    ]),
    w: 9,
  },
  shoe([471, 306], 1),
  { d: HEAD_ROMEO, t: R_HEAD },
  // the far hand, up and open, back towards Mercutio
  arm(
    [
      [444, 178],
      [420, 186],
      [400, 176],
    ],
    -124,
    { w: 8, sep: 1.5, size: 15, spread: 16, thumb: 1 },
  ),
  // the near hand, up and open, towards Tybalt
  arm(
    [
      [454, 178],
      [478, 184],
      [498, 172],
    ],
    -58,
    { w: 8, sep: 1.5, size: 15, spread: 16, thumb: -1 },
  ),
]
const ROMEO_CUTS = gouge(436, 226, 456, 227, 1.8) + gouge(434, 196, 424, 250, 1.8, 0.6)

// ── Tybalt, en garde, facing left ──────────────────────────────────────────
const T_HEAD = headAt(-1, [598, 146], -4)
const T_GRIP: P = [564, 210]
const TYBALT: Piece[] = [
  {
    d: limb([
      [616, 236],
      [636, 270],
      [652, 305],
    ]),
    w: 9,
  },
  shoe([653, 306], -1),
  // the free hand set on his hip
  [
    {
      d: limb([
        [612, 180],
        [634, 204],
        [620, 226],
      ]),
      w: 8,
    },
    fist([619, 226], 4.8),
  ],
  {
    d: limb([
      [604, 168],
      [612, 236],
    ]),
    w: 22,
  },
  { d: doublet([604, 168], [612, 236], -1) },
  {
    d: limb([
      [608, 236],
      [588, 268],
      [572, 305],
    ]),
    w: 9,
  },
  shoe([571, 306], -1),
  { d: HEAD_MAN, t: T_HEAD },
  { d: CAP_FLAT, t: T_HEAD },
  // the sword arm, held out, the point low
  [
    {
      d: limb([[598, 178], [582, 198], T_GRIP]),
      w: 8.4,
      sep: 1.5,
    },
    { ...fist(T_GRIP), sep: 1.5 },
  ],
]
const TYBALT_CUTS = gouge(598, 226, 622, 227, 1.8) + gouge(606, 184, 614, 220, 1.6, -0.6)

// ── One of Tybalt's followers, behind him ──────────────────────────────────
const F_HEAD = headAt(-1, [746, 152], 0, 0.95)
const F_SWORD = sheathed([758, 232], -1, 70)
const FOLLOWER: Piece[] = [
  {
    d: limb([
      [760, 238],
      [764, 272],
      [768, 305],
    ]),
    w: 8.6,
  },
  shoe([769, 306], -1),
  F_SWORD.scabbard,
  {
    d: limb([
      [752, 172],
      [756, 238],
    ]),
    w: 21,
  },
  { d: doublet([752, 172], [756, 238], -1, { width: 27 }) },
  {
    d: limb([
      [752, 238],
      [750, 272],
      [746, 305],
    ]),
    w: 8.6,
  },
  shoe([745, 306], -1),
  { d: HEAD_MAN, t: F_HEAD },
  { d: CAP, t: F_HEAD },
  [
    {
      d: limb([
        [748, 182],
        [740, 208],
        [752, 226],
      ]),
      w: 8,
      sep: 1.4,
    },
    { ...fist([753, 226], 4.8), sep: 1.4 },
  ],
]

function TwoDeathsAndABanishment({ uid }: ArtProps) {
  const m = marks()
  const sky = `${uid}-sky`
  return (
    <>
      <defs>
        <clipPath id={sky}>
          <path d={BUILDINGS} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [450, 200], push: 1.03 })}>
        {/* the white-hot sky, and the sun: "The day is hot" */}
        <rect x={0} y={0} width={W} height={HORIZON} fill={PAPER} />
        <path d={m.sky} fill={INK} />
        <g className="lc-glow" style={timing({ delay: 0.4 })}>
          <path d={m.heat} fill="none" stroke={INK} strokeWidth={1.8} strokeLinecap="round" />
        </g>
        <circle cx={SUN[0]} cy={SUN[1]} r={24} fill={RED} stroke={INK} strokeWidth={1.4} />

        {/* the houses round the square */}
        <path d={BUILDINGS} fill={PAPER} />
        <g clipPath={`url(#${sky})`}>
          <path d={m.walls} fill={INK} />
        </g>
        <path d={BUILDINGS} fill="none" stroke={INK} strokeWidth={LINE.bold} />
        <path d={OPENINGS} fill={INK} />
        <path d={EAVES} stroke={INK} strokeWidth={3.4} fill="none" />

        {/* the paving, and the short noon shadows */}
        <rect x={0} y={HORIZON} width={W} height={H - HORIZON} fill={PAPER} />
        <path d={m.paving} fill={INK} />
        <path
          d={
            footShadow(132, 309, 30) +
            footShadow(282, 309, 50) +
            footShadow(446, 309, 36) +
            footShadow(612, 309, 44) +
            footShadow(756, 309, 26)
          }
          fill={INK}
        />

        {/* Tybalt's follower, and Benvolio */}
        <CutFigure parts={FOLLOWER} halo={2}>
          <path d={EYE} transform={F_HEAD} fill={PAPER} />
          <path d={F_SWORD.hilt} fill={PAPER} stroke={INK} strokeWidth={0.8} />
        </CutFigure>
        <CutFigure parts={BENVOLIO} cuts={BENVOLIO_CUTS} halo={2}>
          <g transform={B_HEAD}>
            <path d={HAIR_CUTS} fill={PAPER} />
            <path d={EYE} fill={PAPER} />
          </g>
          <path d={B_SWORD.hilt} fill={PAPER} stroke={INK} strokeWidth={0.8} />
        </CutFigure>

        {/* the two rapiers, beaten down, their points at the paving */}
        <path
          d={rapier(M_GRIP, 67, 94) + rapier(T_GRIP, 124, 96)}
          fill={PAPER}
          stroke={INK}
          strokeWidth={0.9}
        />

        {/* Mercutio and Tybalt, and Romeo between them */}
        <CutFigure parts={MERCUTIO} cuts={MERCUTIO_CUTS} halo={2}>
          <g transform={M_HEAD}>
            <path d={HAIR_CUTS} fill={PAPER} />
            <path d={EYE} fill={PAPER} />
          </g>
        </CutFigure>
        <CutFigure parts={TYBALT} cuts={TYBALT_CUTS} halo={2}>
          <g transform={T_HEAD}>
            <path d={EYE} fill={PAPER} />
            <path d={FEATHER} fill={PAPER} stroke={INK} strokeWidth={1.4} />
            <path d={FEATHER_QUILL} fill="none" stroke={INK} strokeWidth={1} />
          </g>
        </CutFigure>
        <CutFigure parts={ROMEO} cuts={ROMEO_CUTS} halo={2}>
          <g transform={R_HEAD}>
            <path d={ROMEO_HAIR_CUTS} fill={PAPER} />
            <path d={EYE} fill={PAPER} />
          </g>
          <path d={R_SWORD.hilt} fill={PAPER} stroke={INK} strokeWidth={0.8} />
        </CutFigure>
      </g>
    </>
  )
}

export const twoDeathsAndABanishment: LinocutArt = {
  width: W,
  height: H,
  Draw: TwoDeathsAndABanishment,
}
