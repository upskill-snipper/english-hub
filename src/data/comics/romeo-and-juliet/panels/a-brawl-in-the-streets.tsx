import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, gougeField, rng, wedge } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'
import { posed } from '@/data/comics/macbeth/panels/cut-figure'

import {
  BEARD_CUTS,
  CAP,
  CAP_BAND,
  CAP_FLAT,
  CIRCLET,
  CutFigure,
  EYE,
  FEATHER,
  FEATHER_QUILL,
  FULL_BEARD,
  FULL_BEARD_STRANDS,
  HAIR_CUTS,
  HEAD_BEARD,
  HEAD_MAN,
  HEAD_WOMAN,
  OLD_BEARD,
  OLD_HAIR,
  VEIL,
  VEIL_BAND,
  WHITE_BROW,
  openArm,
  doublet,
  gown,
  headAt,
  limb,
  rapier,
  shoe,
  type P,
  type Part,
  type Piece,
} from './people'

/**
 * Act 1, Scene 1: "A brawl in the streets", the second moment in the guide's
 * timeline. A public place in Verona in the morning ("Is the day so young?"
 * "But new struck nine."), at the height of the fight, as the Prince comes
 * in. Every detail is from the held edition:
 *
 * - "What, drawn, and talk of peace? I hate the word / As I hate hell, all
 *   Montagues, and thee: / Have at thee, coward." In the middle Tybalt, in
 *   his feathered cap, lunges with his rapier raised over his head, and
 *   strikes no one. Facing him Benvolio, who has just "Beats down their
 *   swords", holds his own sword lowered, pointing at the ground, and puts up
 *   an open hand: "I do but keep the peace, put up thy sword".
 * - "Enter three or four Citizens with clubs." "Clubs, bills and partisans!
 *   Strike! Beat them down!" The servants who began it came "armed with
 *   swords and bucklers". Behind the pair, small, two servants with bucklers
 *   cross swords on the left, and on the right a servant raises his buckler
 *   against a citizen swinging a club.
 * - "Enter Capulet in his gown, and Lady Capulet." "Give me my long sword,
 *   ho!" "A crutch, a crutch! Why call you for a sword?" On the left old
 *   Capulet, white-bearded, in his long gown and his cap, reaches forward
 *   with an open hand for a sword, and his wife holds him back by the arm.
 * - "Old Montague is come, / And flourishes his blade in spite of me."
 *   "Thou villain Capulet! Hold me not, let me go." "Thou shalt not stir one
 *   foot to seek a foe." On the right old Montague, white-haired,
 *   white-bearded and bareheaded, brandishes his sword, and Lady Montague
 *   holds him back.
 * - "Enter Prince Escalus, with Attendants." "Throw your mistemper'd weapons
 *   to the ground". At the back, in the middle arch of a loggia across the
 *   square, the Prince points at the ground, with an attendant holding a
 *   partisan in the arch on either side. They are cut in white, the one still
 *   group in the square, and the Prince's circlet carries the spot colour:
 *   his is the power that ends the scene with "Your lives shall pay the
 *   forfeit of the peace".
 *
 * Nobody is wounded and no blow lands: every blade is raised or lowered, and
 * none touches anyone. Romeo, in the guide's list for this moment, comes in
 * after the fight and is not drawn. The people are cut as the other Romeo and
 * Juliet panels cut them (./people.tsx). Nothing is taken from a film or
 * stage production. Seeds: 2101 (sky), 2102 (walls), 2103 (paving).
 */

const W = 860
const H = 340
/** The foot of the buildings across the square. */
const HORIZON = 206
/** Where the joints of the paving run to. */
const VP: P = [440, 150]

type Marks = { sky: string; walls: string; ground: string }

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // Morning sky: pale, the cuts closing up towards the top of the block.
  const sky = gougeField(
    rng(2101),
    { x0: 0, x1: W, y0: 8, y1: 150 },
    (_x, y) => clamp(0.55 - y / 170) + 0.05,
    { spacing: 7, len: [30, 120], gap: [14, 40], max: 3 },
  )
  // The houses across the square, lit by the morning sun: bare paper with a
  // light ink grain, darker towards the ground, so the black figures in
  // front of them stand clear.
  const walls = gougeField(
    rng(2102),
    { x0: 0, x1: W, y0: 118, y1: HORIZON },
    (_x, y) => 0.32 + clamp((y - 130) / 80) * 0.3,
    { spacing: 6.5, len: [30, 90], gap: [10, 26], max: 2.2 },
  )
  // The paving, its joints running back to the loggia.
  const g = rng(2103)
  let ground = ''
  for (let xb = -600; xb < 1500; xb += 46) {
    const t0 = (HORIZON + 2 - VP[1]) / (H - VP[1])
    ground += wedge(VP[0] + (xb - VP[0]) * t0, HORIZON + 2, xb, H + 4, 0.5, 2.4)
  }
  for (let k = 0; k < 9; k++) {
    const y = HORIZON + 6 + Math.pow(k, 1.55) * 5.4
    let x = between(g, -30, 0)
    while (x < W) {
      const len = between(g, 60, 180)
      ground += gouge(x, y, x + len, y + between(g, -0.6, 0.6), 0.5 + k * 0.16)
      x += len + between(g, 4, 18)
    }
  }
  cached = { sky, walls, ground }
  return cached
}

/** The houses round the square, the loggia and its bell tower, as one ink shape. */
const BUILDINGS = `M0 ${HORIZON}V118H120V138H250V128H350V124H418V34L440 12L462 34V124H530V132H650V116H760V136H860V${HORIZON}Z`
/** Arched windows and doors in the houses: solid shadow. */
const OPENINGS = (() => {
  let d = ''
  const win = (x: number, y: number, w: number, h: number) =>
    (d += `M${x} ${y + h}V${y + w / 2}A${w / 2} ${w / 2} 0 0 1 ${x + w} ${y + w / 2}V${y + h}Z`)
  for (const x of [18, 58, 94]) win(x, 132, 16, 26)
  for (const x of [136, 176, 216]) win(x, 150, 14, 22)
  for (const x of [270, 318]) win(x, 142, 16, 24)
  for (const x of [546, 590]) win(x, 146, 16, 24)
  for (const x of [668, 708]) win(x, 130, 16, 28)
  for (const x of [780, 822]) win(x, 150, 14, 22)
  win(40, 176, 26, 30)
  win(292, 178, 24, 28)
  win(596, 178, 24, 28)
  win(800, 180, 24, 26)
  return d
})()
/** The loggia's three arches and the belfry, open on shadow. */
const ARCHES = [360, 416, 472]
  .map((x) => `M${x} ${HORIZON}V164A24 24 0 0 1 ${x + 48} 164V${HORIZON}Z`)
  .join('')
const BELFRY = 'M428 72V52A12 12 0 0 1 452 52V72Z'
/** Just under each roofline: the eaves' shadow, with the tile ends cut in it. */
const EAVES = 'M0 122H120M120 142H250M250 132H350M350 128H530M530 136H650M650 120H760M760 140H860'
/** The side of the bell tower turned from the sun, cut as close ink gouges. */
const TOWER_SHADE = (() => {
  let d = ''
  for (let y = 38; y < 124; y += 4.2) d += gouge(446, y, 463, y + 0.4, 1.3)
  return d
})()

const fist = ([x, y]: P, r = 5): Part => ({
  d: `M${x - r} ${y}a${r} ${r} 0 1 0 ${2 * r} 0a${r} ${r} 0 1 0 ${-2 * r} 0Z`,
})

// ── Tybalt, lunging, rapier raised ───────────────────────────────────────────
const T_NECK: P = [368, 166]
const T_HIP: P = [346, 232]
const T_HEAD = headAt(1, [377, 144], 12)
const T_GRIP: P = [364, 100]
const TYBALT: Piece[] = [
  {
    d: limb([
      [343, 232],
      [314, 274],
      [288, 314],
    ]),
    w: 9,
  },
  shoe([288, 315], 1),
  { d: limb([T_NECK, T_HIP]), w: 22 },
  { d: doublet(T_NECK, T_HIP, 1, { width: 28, hem: 16, flare: 7, swing: 8 }) },
  {
    d: limb([
      [350, 232],
      [384, 270],
      [402, 314],
    ]),
    w: 9,
  },
  shoe([404, 315], 1),
  { d: HEAD_MAN, t: T_HEAD },
  { d: CAP_FLAT, t: T_HEAD },
  // the free arm thrust forward, the fist clenched
  [
    {
      d: limb([
        [372, 174],
        [396, 184],
        [416, 178],
      ]),
      w: 8.4,
      sep: 1.4,
    },
    { ...fist([418, 178], 5.4), sep: 1.4 },
  ],
  // the sword arm, raised back over his head
  [
    { d: limb([[364, 174], [350, 134], T_GRIP]), w: 8.6, sep: 1.5 },
    { ...fist(T_GRIP, 5.6), sep: 1.5 },
  ],
]
const TYBALT_CUTS =
  gouge(338, 206, 360, 207, 1) +
  gouge(356, 176, 348, 226, 0.8, 0.6) +
  gouge(334, 234, 350, 242, 0.7)

// ── Benvolio, sword lowered, a hand up to part them ─────────────────────────
const B_NECK: P = [554, 166]
const B_HIP: P = [562, 234]
const B_HEAD = headAt(-1, [548, 144], -6)
const B_GRIP: P = [583, 238]
const BENVOLIO: Piece[] = [
  {
    d: limb([
      [566, 234],
      [580, 276],
      [592, 314],
    ]),
    w: 9,
  },
  shoe([592, 315], -1),
  { d: limb([B_NECK, B_HIP]), w: 22 },
  { d: doublet(B_NECK, B_HIP, -1, { width: 28, hem: 16, flare: 6 }) },
  {
    d: limb([
      [558, 234],
      [546, 276],
      [532, 314],
    ]),
    w: 9,
  },
  shoe([530, 315], -1),
  { d: HEAD_MAN, t: B_HEAD },
  { d: CAP_FLAT, t: B_HEAD },
  // the sword arm, low, the blade pointing at the ground
  [
    { d: limb([[560, 176], [576, 208], B_GRIP]), w: 8.4, sep: 1.4 },
    { ...fist(B_GRIP, 5.4), sep: 1.4 },
  ],
  // the near hand put up, open, between him and Tybalt, at the height of
  // his chest: raised to his face on a vertical forearm, as it was first
  // cut, it came close to a salute at phone width (review of 26 September
  // 2026)
  openArm(
    [
      [550, 176],
      [532, 196],
      [512, 190],
    ],
    -112,
    { w: 8.4, sep: 1.5, size: 17, spread: 18, thumb: 1 },
  ),
]
const BENVOLIO_CUTS =
  gouge(546, 206, 570, 207, 1) +
  gouge(556, 178, 562, 226, 0.8, -0.6) +
  gouge(556, 236, 570, 242, 0.7)

// ── Capulet in his gown, reaching for a sword, held back by his wife ─────────
const C_HEAD = headAt(1, [164, 140], 8)
const CAPULET: Piece[] = [
  // the far arm, pulled back by his wife
  {
    d: limb([
      [150, 172],
      [134, 192],
      [118, 198],
    ]),
    w: 8.6,
  },
  { d: gown([158, 162], [146, 226], 328, 1, { shoulder: 28, waistW: 20, front: 30, back: 36 }) },
  shoe([168, 329], 1),
  { d: FULL_BEARD, t: C_HEAD },
  { d: HEAD_MAN, t: C_HEAD },
  { d: CAP, t: C_HEAD },
  // the near arm reaching forward at the height of his chest, the elbow
  // bent, the hand open and the fingers spread to grasp a sword. It was once
  // raised at a slant above his head, a straight arm and flat hand that read
  // as a salute at panel size (review of 26 September 2026).
  openArm(
    [
      [162, 170],
      [184, 188],
      [210, 184],
    ],
    -8,
    { w: 8.6, sep: 1.5, size: 16, spread: 19, thumb: -1 },
  ),
]
const CAPULET_CUTS =
  gouge(150, 190, 132, 322, 1, 1) +
  gouge(160, 232, 172, 322, 0.9, -0.6) +
  gouge(146, 228, 118, 322, 0.9, 1.2)

const LC_HEAD = headAt(1, [72, 150], -14, 0.96)
const LADY_CAPULET: Piece[] = [
  { d: gown([66, 170], [74, 232], 328, 1, { shoulder: 25, waistW: 17, front: 30, back: 36 }) },
  { d: HEAD_WOMAN, t: LC_HEAD },
  { d: VEIL, t: LC_HEAD, sep: 1.2 },
  // both hands on her husband's arm
  [
    {
      d: limb([
        [64, 180],
        [90, 202],
        [114, 202],
      ]),
      w: 7.6,
      sep: 1.4,
    },
    { ...fist([116, 202], 5), sep: 1.4 },
  ],
  [
    {
      d: limb([
        [72, 178],
        [96, 190],
        [118, 192],
      ]),
      w: 7.6,
      sep: 1.4,
    },
    { ...fist([120, 192], 5), sep: 1.4 },
  ],
]
const LADY_C_CUTS = gouge(70, 196, 50, 322, 0.9, 1) + gouge(78, 236, 96, 322, 0.9, -0.6)

// ── Montague, blade brandished, held back by his wife ───────────────────────
const M_HEAD = headAt(-1, [712, 140], -8)
const M_GRIP: P = [694, 128]
const MONTAGUE: Piece[] = [
  // the far arm, held by his wife
  {
    d: limb([
      [730, 172],
      [750, 192],
      [768, 198],
    ]),
    w: 8.6,
  },
  { d: gown([718, 162], [730, 226], 328, -1, { shoulder: 28, waistW: 20, front: 30, back: 36 }) },
  shoe([706, 329], -1),
  { d: HEAD_MAN, t: M_HEAD },
  { d: OLD_HAIR, t: M_HEAD },
  { d: OLD_BEARD, t: M_HEAD },
  // the sword arm, the blade flourished at the Capulets
  [
    { d: limb([[714, 172], [700, 156], M_GRIP]), w: 8.6, sep: 1.5 },
    { ...fist(M_GRIP, 5.6), sep: 1.5 },
  ],
]
const MONTAGUE_CUTS =
  gouge(720, 190, 740, 322, 1, -1) +
  gouge(712, 232, 698, 322, 0.9, 0.6) +
  gouge(730, 228, 758, 322, 0.9, -1.2)

const LM_HEAD = headAt(-1, [808, 150], 14, 0.96)
const LADY_MONTAGUE: Piece[] = [
  { d: gown([804, 170], [796, 232], 328, -1, { shoulder: 25, waistW: 17, front: 30, back: 36 }) },
  { d: HEAD_WOMAN, t: LM_HEAD },
  { d: VEIL, t: LM_HEAD, sep: 1.2 },
  [
    {
      d: limb([
        [806, 180],
        [780, 202],
        [772, 204],
      ]),
      w: 7.6,
      sep: 1.4,
    },
    { ...fist([770, 204], 5), sep: 1.4 },
  ],
  [
    {
      d: limb([
        [798, 178],
        [782, 190],
        [772, 194],
      ]),
      w: 7.6,
      sep: 1.4,
    },
    { ...fist([770, 193], 5), sep: 1.4 },
  ],
]
const LADY_M_CUTS = gouge(800, 196, 820, 322, 0.9, -1) + gouge(792, 236, 774, 322, 0.9, 0.6)

// ── The citizens and servants behind, small ─────────────────────────────────
/** A man in a short coat from its joints, in his own frame (feet at 0, 0). */
function brawler(facing: 1 | -1, near: P[], far: P[], extra: Part[]): Part[] {
  const head = { d: HEAD_MAN, at: [facing * 4, -126] as P, rot: facing * 6 }
  return [
    ...extra,
    ...posed({
      facing,
      neck: [0, -106],
      hip: [-facing * 4, -52],
      head,
      body: { width: 26, hem: 22, flare: 7, swing: 6 },
      arm: 7,
      leg: 9,
      near: {
        arm: near,
        leg: [
          [0, -52],
          [facing * 18, -26],
          [facing * 26, 0],
        ],
      },
      far: {
        arm: far,
        leg: [
          [-facing * 6, -52],
          [-facing * 18, -24],
          [-facing * 26, 0],
        ],
      },
    }),
    { d: CAP_FLAT, t: headAt(facing, head.at, head.rot) },
  ]
}
/** Two servants on the left, sword and buckler, their blades crossed between them. */
const SERVANT_L = brawler(
  1,
  [
    [0, -100],
    [16, -116],
    [30, -128],
  ],
  [
    [2, -100],
    [18, -96],
    [22, -86],
  ],
  [{ d: 'M30 -128L64 -154', w: 3 }],
)
const SERVANT_R = brawler(
  -1,
  [
    [0, -100],
    [-16, -116],
    [-30, -128],
  ],
  [
    [-2, -100],
    [-18, -96],
    [-22, -86],
  ],
  [{ d: 'M-30 -128L-64 -154', w: 3 }],
)
/** On the right, a servant fending with his buckler raised, and a citizen with a club. */
const FENDER = brawler(
  1,
  [
    [0, -100],
    [12, -84],
    [26, -80],
  ],
  [
    [2, -100],
    [14, -118],
    [24, -132],
  ],
  [{ d: 'M26 -80L58 -70', w: 3 }],
)
const CLUB_R = brawler(
  -1,
  [
    [0, -100],
    [-8, -130],
    [-4, -156],
  ],
  [
    [-2, -100],
    [-14, -90],
    [-24, -94],
  ],
  [{ d: 'M-4 -156L-34 -184', w: 7.5 }],
)
/** A round buckler on the far arm, cut as a boss in a rim. */
function Buckler({ x, y }: { x: number; y: number }) {
  return (
    <g>
      <circle cx={x} cy={y} r={12} fill={INK} stroke={PAPER} strokeWidth={2.6} />
      <circle cx={x} cy={y} r={7} fill="none" stroke={PAPER} strokeWidth={1.8} />
      <circle cx={x} cy={y} r={2.6} fill={PAPER} />
    </g>
  )
}

// ── The Prince and his attendants, in the loggia (own frame, feet at 0, 0) ──
const P_HEAD = headAt(1, [3, -176], 0)
const PRINCE: Piece[] = [
  { d: gown([0, -160], [0, -98], 0, 1, { shoulder: 28, waistW: 20, front: 28, back: 30 }) },
  { d: HEAD_BEARD, t: P_HEAD },
  // pointing at the ground: "Throw your mistemper'd weapons to the ground"
  {
    d: limb([
      [6, -150],
      [26, -132],
      [42, -108],
    ]),
    w: 9,
    sep: 2,
  },
  { ...fist([43, -106], 6), sep: 2 },
  {
    d: limb([
      [45, -100],
      [54, -84],
    ]),
    w: 4.6,
    sep: 2,
  },
]
const ATTENDANT: Piece[] = [
  { d: 'M24 -214V0', w: 4 },
  { d: 'M24 -214L17 -236L24 -250L31 -236Z' },
  { d: 'M13 -226H35', w: 3.4 },
  { d: gown([0, -160], [0, -98], 0, 1, { shoulder: 28, waistW: 20, front: 26, back: 28 }) },
  { d: HEAD_MAN, t: P_HEAD },
  {
    d: limb([
      [6, -150],
      [16, -136],
      [22, -130],
    ]),
    w: 9,
  },
  fist([24, -130], 6),
]

function ABrawlInTheStreets({ uid }: ArtProps) {
  const m = marks()
  const wallClip = `${uid}-walls`
  return (
    <>
      <defs>
        <clipPath id={wallClip}>
          <path d={BUILDINGS} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [440, 200], push: 1.03 })}>
        {/* the morning sky */}
        <rect x={0} y={0} width={W} height={HORIZON} fill={PAPER} />
        <path d={m.sky} fill={INK} />

        {/* the houses round the square, the loggia and its bell tower, sunlit */}
        <path d={BUILDINGS} fill={PAPER} />
        <g clipPath={`url(#${wallClip})`}>
          <path d={m.walls} fill={INK} />
          {/* the shaded side of the tower */}
          <path d={TOWER_SHADE} fill={INK} />
        </g>
        {/* the shadow under the eaves, and the ends of the tiles over it */}
        <path d={EAVES} fill="none" stroke={INK} strokeWidth={7} />
        <path d={EAVES} fill="none" stroke={PAPER} strokeWidth={3} strokeDasharray="1.8 4.6" />
        <path
          d={BUILDINGS}
          fill="none"
          stroke={INK}
          strokeWidth={LINE.bold}
          strokeLinejoin="round"
        />
        <path d={OPENINGS} fill={INK} />
        <path d={ARCHES} fill={INK} stroke={INK} strokeWidth={LINE.bold} />
        <path d={BELFRY} fill={INK} />
        <path d="M418 34H462M418 124H462" stroke={INK} strokeWidth={LINE.bold} />

        {/* the Prince, pointing at the ground, and his attendants */}
        <CutFigure
          parts={ATTENDANT}
          tone="paper"
          halo={3}
          transform={`translate(378 ${HORIZON}) scale(0.28)`}
        >
          <path d={EYE} transform={P_HEAD} fill={INK} />
        </CutFigure>
        <CutFigure
          parts={ATTENDANT}
          tone="paper"
          halo={3}
          transform={`translate(502 ${HORIZON}) scale(-0.28 0.28)`}
        >
          <path d={EYE} transform={P_HEAD} fill={INK} />
        </CutFigure>
        <CutFigure
          parts={PRINCE}
          tone="paper"
          halo={3}
          transform={`translate(434 ${HORIZON}) scale(0.32)`}
        >
          <path d={EYE} transform={P_HEAD} fill={INK} />
          <path d={BEARD_CUTS} transform={P_HEAD} fill={INK} />
          <path d={gouge(-9, -150, 13, -124, 1.4, 3)} fill={INK} />
          <path
            d={CIRCLET}
            transform={P_HEAD}
            fill={RED}
            stroke={INK}
            strokeWidth={2.4}
            strokeLinejoin="round"
          />
        </CutFigure>

        {/* the square */}
        <rect x={0} y={HORIZON} width={W} height={H - HORIZON} fill={PAPER} />
        <path d={m.ground} fill={INK} />
        <path d={`M0 ${HORIZON + 1}H${W}`} stroke={INK} strokeWidth={LINE.bold} />
        {/* shadows under the people, cast by the morning light */}
        <path
          d={
            gouge(20, 332, 200, 334, 3) +
            gouge(270, 320, 440, 322, 3) +
            gouge(500, 320, 640, 322, 3) +
            gouge(680, 332, 848, 334, 3) +
            gouge(196, 266, 292, 267, 1.8) +
            gouge(588, 267, 690, 268, 1.8)
          }
          fill={INK}
        />

        {/* citizens and servants behind the pair, small */}
        <CutFigure parts={SERVANT_L} halo={2.4} transform="translate(222 264) scale(0.58)">
          <path d={EYE} transform={headAt(1, [4, -126], 6)} fill={PAPER} />
          <Buckler x={22} y={-86} />
        </CutFigure>
        <CutFigure parts={SERVANT_R} halo={2.4} transform="translate(292 266) scale(0.58)">
          <path d={EYE} transform={headAt(-1, [-4, -126], -6)} fill={PAPER} />
          <Buckler x={-22} y={-86} />
        </CutFigure>
        <CutFigure parts={FENDER} halo={2.4} transform="translate(624 266) scale(0.6)">
          <path d={EYE} transform={headAt(1, [4, -126], 6)} fill={PAPER} />
          <Buckler x={24} y={-132} />
        </CutFigure>
        <CutFigure parts={CLUB_R} halo={2.4} transform="translate(676 264) scale(0.6)">
          <path d={EYE} transform={headAt(-1, [-4, -126], -6)} fill={PAPER} />
        </CutFigure>

        {/* the Capulets, on the left */}
        <CutFigure parts={LADY_CAPULET} cuts={LADY_C_CUTS} halo={2}>
          <g transform={LC_HEAD}>
            <path d={VEIL_BAND} fill={PAPER} />
            <path d={EYE} fill={PAPER} />
          </g>
        </CutFigure>
        <CutFigure parts={CAPULET} cuts={CAPULET_CUTS} halo={2}>
          <g transform={C_HEAD}>
            {/* Capulet's long white beard and white brow, as in every other panel and his portrait */}
            <path d={FULL_BEARD} fill={PAPER} stroke={INK} strokeWidth={0.9} />
            <path d={FULL_BEARD_STRANDS} fill="none" stroke={INK} strokeWidth={0.8} />
            <path d={WHITE_BROW} fill={PAPER} />
            <path d={CAP_BAND} fill={PAPER} />
            <path d={EYE} fill={PAPER} />
          </g>
        </CutFigure>

        {/* Tybalt and Benvolio */}
        <CutFigure parts={TYBALT} cuts={TYBALT_CUTS} halo={2}>
          <path d={rapier(T_GRIP, -118, 86)} fill={PAPER} stroke={INK} strokeWidth={1} />
          <g transform={T_HEAD}>
            <path d={EYE} fill={PAPER} />
            <path d={FEATHER} fill={PAPER} stroke={INK} strokeWidth={1.4} strokeLinejoin="round" />
            <path d={FEATHER_QUILL} fill="none" stroke={INK} strokeWidth={1} />
          </g>
        </CutFigure>
        <CutFigure parts={BENVOLIO} cuts={BENVOLIO_CUTS} halo={2}>
          <path d={rapier(B_GRIP, 64, 82)} fill={PAPER} stroke={INK} strokeWidth={1} />
          <g transform={B_HEAD}>
            <path d={HAIR_CUTS} fill={PAPER} />
            <path d={EYE} fill={PAPER} />
          </g>
        </CutFigure>

        {/* the Montagues, on the right */}
        <CutFigure parts={LADY_MONTAGUE} cuts={LADY_M_CUTS} halo={2}>
          <path d={EYE} transform={LM_HEAD} fill={PAPER} />
        </CutFigure>
        <CutFigure parts={MONTAGUE} cuts={MONTAGUE_CUTS} halo={2}>
          <path d={rapier(M_GRIP, -164, 70)} fill={PAPER} stroke={INK} strokeWidth={1} />
          <g transform={M_HEAD}>
            <path d={OLD_HAIR} fill={PAPER} stroke={INK} strokeWidth={1.3} strokeLinejoin="round" />
            <path
              d={OLD_BEARD}
              fill={PAPER}
              stroke={INK}
              strokeWidth={1.3}
              strokeLinejoin="round"
            />
            <path
              d="M15 10C16 17 15 24 12 30M11.5 18C12 23 11 27 9.5 30.5"
              fill="none"
              stroke={INK}
              strokeWidth={0.8}
            />
            <path d={HAIR_CUTS} fill={PAPER} />
            <path d={EYE} fill={PAPER} />
          </g>
        </CutFigure>
      </g>
    </>
  )
}

export const aBrawlInTheStreets: LinocutArt = { width: W, height: H, Draw: ABrawlInTheStreets }
