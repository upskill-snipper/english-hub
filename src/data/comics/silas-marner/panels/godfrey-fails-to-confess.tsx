import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  between,
  clamp,
  gouge,
  gougeField,
  ribbon,
  rng,
  wedge,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import {
  Figure,
  GODFREY_CURLS,
  GODFREY_CUTS,
  GODFREY_HAIR,
  HEAD_GODFREY,
  HEAD_SQUIRE,
  NECKCLOTH,
  OPEN_HAND,
  PaperHair,
  SQUIRE_CUTS,
  SQUIRE_FLUSH,
  SQUIRE_HAIR,
  bootTop,
  coat,
  handAt,
  headAt,
  line,
  man,
  type P,
  type Part,
} from './people'

/**
 * Chapter 9: "Godfrey fails to confess", the sixth moment in the guide's
 * timeline. Every detail is from the text (the held edition,
 * src/data/full-texts/silas-marner.ts):
 *
 * - "Godfrey rose and took his own breakfast earlier than usual, but lingered
 *   in the wainscoted parlour", the room Chapter 3 shows: "the walls
 *   decorated with guns, whips, and foxes' brushes, on coats and hats flung on
 *   the chairs, on tankards sending forth a scent of flat ale, and on a
 *   half-choked fire, with pipes propped up in the chimney-corners". So the
 *   walls are dark panelled wood, two guns, a whip and a fox's brush hang by
 *   the chimney, tankards stand on the chimney-piece, the fire is low, and a
 *   long clay pipe leans in each corner of the grate. The Part Two parlour
 *   (./polished-parlour.tsx) keeps this arrangement, fire on the left and
 *   window on the right, so the room is recognisably the same room.
 * - "The table had been spread with substantial eatables"; the Squire "cut a
 *   piece of beef, and held it up before the deer-hound that had come in with
 *   him. 'Ring the bell for my ale'"; "Fleet, the deer-hound". So a joint of
 *   beef, a loaf and a tankard stand on a white cloth, and Fleet stands by the
 *   Squire's chair with his head up, waiting for more. A deer-hound is cut as
 *   the breed is built: long legs, a deep chest tucked up at the loin, a long
 *   neck, a narrow head with a rough beard, a long low tail, a rough coat.
 * - "a tall, stout man of sixty, with a face in which the knit brow and
 *   rather hard glance seemed contradicted by the slack and feeble mouth. His
 *   person showed marks of habitual neglect, his dress was slovenly"; "The
 *   Squire had laid down his knife and fork, and was staring at his son";
 *   "The Squire was purple with anger". So he leans forward over the table,
 *   one hand laid flat on the cloth by his plate, the knife and fork put down
 *   beside it, his pale waistcoat strained over his stomach and unbuttoned at
 *   the foot, and the spot colour flushes his cheek (never his mouth or chin,
 *   where red reads as blood). His face is the figure kit's (./people.tsx).
 * - "What do you stand talking there for?" So Godfrey stands, between the
 *   table and the door he will leave by, against the window's morning light:
 *   "That big muscular frame of his", the broadest man in the room. "'Why,
 *   sir,' he said, trying to speak with careless ease, 'it was a little affair
 *   between me and Dunsey'": one open hand is turned out in a shrug, and his
 *   head is bowed, his eyes off his father's. (An earlier draft raised the
 *   hand to his chest, which read as reaching for something.)
 *
 * The spot colour marks the two things the moment turns on: the Squire's
 * anger, and the half-choked fire.
 *
 * Seeds: 601 (the wainscot), 602 (the floor), 603 (the window), 604 (the
 * hound's coat), 605 (the tree beyond the glass).
 */

const W = 860
const H = 340
/** The skirting: the wall stands on it and the floor runs from it. */
const FLOOR = 236

type Marks = {
  wall: string
  floor: string
  pool: string
  sky: string
  sun: string
  twigs: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const r = rng(601)
  // The room is lit from the window on the right, and faintly by the fire.
  const light = (x: number, y: number) => {
    const l1 = clamp(1 - Math.hypot((x - 640) * 0.7, (y - 100) * 1.1) / 420)
    const l2 = clamp(1 - Math.hypot(x - 72, y - 200) / 110) * 0.4
    const room = clamp((x - 130) / 260) * 0.34
    return Math.max(l1 * 0.85, l2, room, 0.04)
  }
  const wall = gougeField(r, { x0: 0, x1: W, y0: 6, y1: FLOOR - 8 }, light, { spacing: 6.4 })

  // Floor: paper boards, ink joints running to a vanishing point.
  const f = rng(602)
  let floor = ''
  const V = [430, 20]
  for (let xt = -600; xt < 1500; xt += 32) {
    const xb = V[0] + (xt - V[0]) * ((H - V[1]) / (FLOOR - V[1]))
    let t0 = 0
    while (t0 < 1) {
      const t1 = Math.min(1, t0 + between(f, 0.3, 0.8))
      floor += wedge(
        xt + (xb - xt) * t0,
        FLOOR + (H - FLOOR) * t0,
        xt + (xb - xt) * t1,
        FLOOR + (H - FLOOR) * t1,
        0.8 + t0 * 3,
        0.8 + t1 * 3,
      )
      t0 = t1 + between(f, 0.02, 0.07)
    }
  }
  // Shade across the floor on the side away from the window, and pools
  // under the table and the chair, under Godfrey, and under the hound.
  let pool = ''
  for (let y = FLOOR + 2; y < H - 4; y += 3.2) {
    const k = (y - FLOOR) / (H - FLOOR)
    pool += gouge(-10, y, 150 - k * 60, y + 0.6, 1.2 + (1 - k) * 1.8)
  }
  for (let y = 290; y < 316; y += 3.4) {
    const w = 1 - Math.abs(y - 303) / 15
    pool += gouge(226 - w * 10, y, 520 + w * 16, y + 1, 0.8 + w * 2)
  }
  for (let y = 262; y < 274; y += 3) {
    const w = 1 - Math.abs(y - 268) / 7
    pool += gouge(616 - w * 6, y, 690 + w * 6, y + 0.5, 0.6 + w * 1.4)
  }
  for (let y = 298; y < 310; y += 3) {
    const w = 1 - Math.abs(y - 304) / 7
    pool += gouge(84 - w * 6, y, 200 + w * 6, y + 0.5, 0.6 + w * 1.4)
  }

  // Outside the window: a pale morning, cut almost clean, darker at the foot.
  const s = rng(603)
  let sky = ''
  for (let y = 40; y < 150; y += between(s, 9, 16)) {
    const x = between(s, 570, 660)
    sky += gouge(x, y, x + between(s, 30, 70), y + between(s, -1, 1), between(s, 0.5, 1.1))
  }
  // Bare twigs of a tree beyond the glass.
  const t = rng(605)
  let twigs = ''
  const branch = (x: number, y: number, a: number, len: number, w: number, depth: number) => {
    const x2 = x + Math.cos(a) * len
    const y2 = y + Math.sin(a) * len
    twigs += wedge(x, y, x2, y2, w, w * 0.6)
    if (depth > 0) {
      branch(x2, y2, a - between(t, 0.25, 0.6), len * 0.72, w * 0.6, depth - 1)
      branch(x2, y2, a + between(t, 0.2, 0.5), len * 0.66, w * 0.6, depth - 1)
    }
  }
  branch(704, 150, -2.3, 44, 3.4, 3)
  branch(704, 96, -2.7, 30, 2.2, 2)
  // The light the window lays on the boards, falling away to the left.
  let sun = ''
  for (let k = 0; k < 6; k++) {
    const x = 590 + k * 21
    sun += wedge(x, FLOOR + 4, x - 70 - k * 10, 334, 6, 13)
  }

  cached = { wall, floor, pool, sky, sun, twigs }
  return cached
}

/** The near leg is cut free of the coat behind it by its own paper edge. */
const sepLeg = (parts: Part[], leg: P[]) =>
  parts.map((q) => (q.d === line(leg) ? { ...q, sep: 1.2 } : q))

// ── GODFREY, standing against the window between the table and the door ─────
const GOD_HEAD = { d: HEAD_GODFREY, at: [634, 68] as P, rot: -10, scale: 1.08 }
const GOD_NEAR_LEG: P[] = [
  [648, 184],
  [640, 224],
  [634, 266],
]
const GOD_FAR_LEG: P[] = [
  [658, 184],
  [668, 224],
  [676, 262],
]
/** The shrug of "careless ease": the forearm turned out from the waist, the hand open. */
const GOD_ARM: P[] = [
  [636, 108],
  [628, 150],
  [606, 170],
]
const GODFREY: Part[] = sepLeg(
  man({
    facing: -1,
    neck: [642, 96],
    hip: [652, 182],
    head: GOD_HEAD,
    body: { width: 60, tails: 54, front: 4, flare: 6 },
    arm: 13.5,
    leg: 16,
    near: { arm: GOD_ARM, leg: GOD_NEAR_LEG, hand: { parts: OPEN_HAND, scale: 1.25, rot: 22 } },
    far: {
      // the far hand pushed into his breeches pocket, out of sight
      arm: [
        [660, 108],
        [676, 142],
        [668, 172],
      ],
      leg: GOD_FAR_LEG,
    },
  }),
  GOD_NEAR_LEG,
)
const GOD_T = headAt(-1, GOD_HEAD.at, GOD_HEAD.rot, GOD_HEAD.scale)
/** Folds of his coat, the edge of the far coat-front, the crease behind the knee. */
const GOD_CUTS =
  gouge(656, 114, 666, 172, 0.9, -0.8) +
  gouge(640, 120, 636, 166, 0.8, 0.6) +
  gouge(664, 190, 672, 216, 0.8, -0.6)
const GOD_BOOTS = bootTop(GOD_NEAR_LEG, 13) + bootTop(GOD_FAR_LEG, 13)

// ── THE SQUIRE, in his chair at the end of the table, leaning at his son ────
const SQ_HEAD = { d: HEAD_SQUIRE, at: [314, 114] as P, rot: -3, scale: 1.2 }
const SQ_NECK: P = [298, 148]
const SQ_HIP: P = [270, 234]
const SQ_NEAR_LEG: P[] = [
  [272, 238],
  [320, 242],
  [316, 298],
]
const SQ_FAR_LEG: P[] = [
  [266, 234],
  [314, 234],
  [328, 292],
]
/** His near arm, the hand laid flat on the cloth by the plate he has pushed from. */
const SQ_ARM: P[] = [
  [304, 160],
  [318, 192],
  [342, 197],
]
/**
 * A hand laid flat on the cloth, seen from the side: one low shape, the
 * fingers together and cut apart by paper lines. (HOLD_HAND was tried first:
 * its separate fingers, each with its halo, read at panel size as a hand
 * reaching out.)
 */
const FLAT_HAND: Part[] = [
  {
    d: 'M-0.8 -4.4C4 -5.6 10 -5.4 15.6 -3.8C18.8 -2.8 20.6 -1 20.2 0.8L19.8 2.6C14 3.8 6 4.4 -0.8 4Z',
  },
]
const FLAT_CUTS =
  gouge(8.6, -1, 18.6, -0.4, 0.45) + gouge(8.2, 1.6, 17.8, 2, 0.4) + gouge(5, -4.2, 8.6, -2.4, 0.4)
const SQ_HAND = { parts: FLAT_HAND, scale: 1.3, rot: -4 }
/**
 * His stomach, pushed forward over the table's edge. Added to the coat as one
 * shape, so the stout man is one silhouette.
 */
const SQ_BELLY =
  'M296 160C312 164 326 180 330 200C332 214 324 228 306 234L272 236C268 210 272 184 296 160Z'
/**
 * The waistcoat strained over it, unbuttoned at the foot: its edge cut in
 * PAPER. (Printed pale at first, it read as a bib.)
 */
const SQ_WAISTCOAT =
  'M300 156C312 162 322 176 325 194C327 208 322 220 312 228L304 222L298 230C296 210 296 186 300 156Z'
const SQUIRE: Part[] = sepLeg(
  man({
    facing: 1,
    neck: SQ_NECK,
    hip: SQ_HIP,
    head: SQ_HEAD,
    robe: coat(SQ_NECK, SQ_HIP, 1, { width: 48, tails: 12, front: 8, flare: 1 }) + SQ_BELLY,
    body: { width: 50 },
    arm: 12,
    leg: 14,
    near: { arm: SQ_ARM, leg: SQ_NEAR_LEG, hand: SQ_HAND },
    far: {
      arm: [
        [292, 158],
        [302, 190],
        [326, 196],
      ],
      leg: SQ_FAR_LEG,
    },
  }),
  SQ_NEAR_LEG,
)
const SQ_T = headAt(1, SQ_HEAD.at, SQ_HEAD.rot, SQ_HEAD.scale)
/** The creases across the strained waistcoat, cut in PAPER, and the folds of his coat. */
const SQ_CREASES = 'M306 176Q314 184 318 198M302 196Q308 204 312 214M310 166Q318 170 322 182'
const SQ_BUTTONS: P[] = [
  [303, 168],
  [305, 180],
  [306, 192],
  [306, 204],
]
const SQ_CUTS =
  gouge(282, 170, 278, 220, 0.9, -0.8) +
  gouge(290, 166, 290, 196, 0.7, 0.4) +
  gouge(278, 240, 312, 244, 0.8, 0.6)

/** His chair: the back behind him, the seat and the legs below it. */
const CHAIR =
  'M230 142L238 142L246 300L238 300ZM234 238H292V246H234ZM286 246L293 246L291 300L284 300Z'

// ── FLEET, the deer-hound, standing by the Squire's chair ───────────────────
/**
 * In its own frame: standing in profile facing right, the ground at y 0, the
 * nose at x 121. Placed with HOUND_AT.
 */
const HOUND_AT = 'translate(84 306) scale(0.9)'
const HOUND =
  'M2 -70C10 -78 20 -82 30 -80C42 -78 54 -78 62 -80C68 -86 74 -98 82 -106C86 -110 92 -112 98 -110C104 -108 110 -104 120 -100L121 -97C118 -94 112 -92 106 -93C100 -92 94 -88 90 -82C86 -74 82 -66 78 -58C76 -50 72 -44 68 -42L69 -8C70 -4 72 -2 77 -1L77 0L62 0C62 -4 63 -8 62 -12L60 -38C54 -40 46 -42 40 -46C34 -52 30 -56 26 -54C22 -50 20 -46 18 -40C16 -32 14 -24 13 -14C13 -8 14 -4 19 -1L19 0L4 0C4 -6 2 -14 -2 -24C-4 -34 -6 -46 -4 -56C-2 -62 0 -66 2 -70Z'
/** The far pair of legs, behind the body, as strokes, with their paws. */
const HOUND_FAR_LEGS = 'M54 -42L52 -4M10 -48L4 -26L10 -4'
const HOUND_FAR_PAWS = 'M48 -5H60Q62 -1 58 0H48ZM6 -5H18Q20 -1 16 0H6Z'
/** The long tail, carried low with a lift at the tip. */
const HOUND_TAIL = ribbon(
  [
    [2, -70],
    [-6, -58],
    [-10, -42],
    [-10, -26],
    [-6, -15],
    [1, -10],
  ],
  7,
  0.6,
  false,
)

let houndCuts: string | undefined
/** The rough coat, the folded ear, the eye, the beard, cut in paper. */
function houndMarks(): string {
  if (houndCuts) return houndCuts
  const r = rng(604)
  let d = ''
  // "rough coat": short strokes down the neck, the back and the haunch.
  const along: [number, number][] = [
    [80, -96],
    [72, -84],
    [60, -74],
    [46, -72],
    [32, -74],
    [18, -72],
    [8, -62],
    [4, -46],
  ]
  for (const [x, y] of along) {
    for (let k = 0; k < 2; k++) {
      const x0 = x + between(r, -4, 4)
      const y0 = y + 4 + k * 7 + between(r, -1.5, 1.5)
      d += gouge(x0, y0, x0 - between(r, 1, 4), y0 + between(r, 5, 8), 0.7, between(r, -0.6, 0.6))
    }
  }
  // the line of the shoulder and the haunch
  d += gouge(66, -70, 62, -46, 0.9, 1)
  d += gouge(16, -66, 20, -48, 0.9, -1)
  // the small ear, folded back along the neck
  d += gouge(88, -105, 78, -101, 0.8, 0.8)
  // the eye, and the beard under the muzzle
  d += gouge(97, -104, 102, -104.4, 0.9)
  d +=
    gouge(108, -95, 112, -90, 0.5) + gouge(113, -96, 116, -91, 0.5) + gouge(104, -94, 106, -89, 0.5)
  houndCuts = d
  return d
}

/** Two guns on pegs over the chimney-piece, a hunting whip and a fox's brush. */
function ChimneyWall() {
  const gun = (y: number, x0: number, x1: number) => (
    <g key={y}>
      {/* barrel and stock */}
      <path d={wedge(x0 + 34, y, x1, y - 2, 3.6, 2.4)} fill={PAPER} />
      <path
        d={`M${x0} ${y + 6}L${x0 + 6} ${y - 3}L${x0 + 40} ${y - 1.6}L${x0 + 40} ${y + 2.2}L${x0 + 14} ${y + 3}L${x0 + 8} ${y + 9}Z`}
        fill={PAPER}
      />
      <path d={`M${x0 + 36} ${y + 1.6}q3 5 -1 7`} fill="none" stroke={PAPER} strokeWidth={1.2} />
    </g>
  )
  return (
    <>
      {/* pegs */}
      <g fill={PAPER}>
        <rect x={34} y={30} width={4} height={8} />
        <rect x={114} y={30} width={4} height={8} />
        <rect x={34} y={50} width={4} height={8} />
        <rect x={114} y={50} width={4} height={8} />
      </g>
      {gun(40, 14, 146)}
      {gun(60, 18, 150)}
      {/* a hunting whip hung in a loop from a peg */}
      <circle cx={160} cy={30} r={2.4} fill={PAPER} />
      <path d="M160 32L162 70" stroke={PAPER} strokeWidth={3} strokeLinecap="round" />
      <path
        d="M161 36C176 44 180 62 170 74C164 80 156 76 158 68"
        fill="none"
        stroke={PAPER}
        strokeWidth={1.2}
      />
      {/* a fox's brush, hung from its root */}
      <circle cx={196} cy={34} r={2.2} fill={PAPER} />
      <path
        d={ribbon(
          [
            [196, 36],
            [198, 48],
            [197, 62],
            [193, 76],
            [190, 86],
          ],
          13,
          0.55,
        )}
        fill={PAPER}
      />
      <path d={gouge(197, 44, 195, 72, 0.9) + gouge(192, 56, 190, 80, 0.7)} fill={INK} />
      <path d="M190 80L189 88" stroke={INK} strokeWidth={2.2} />
    </>
  )
}

/** The chimney-piece, the grate with its half-choked fire, and the pipes in its corners. */
function Chimney() {
  return (
    <>
      <rect x={10} y={96} width={128} height={FLOOR - 96} fill={PAPER} />
      <rect x={4} y={90} width={140} height={8} fill={PAPER} />
      <rect x={4} y={98} width={140} height={2} fill={INK} />
      <path
        d={
          gouge(18, 108, 18, 230, 1.4) +
          gouge(130, 108, 130, 230, 1.4) +
          gouge(40, 110, 108, 110, 1.1)
        }
        fill={INK}
      />
      {/* tankards on the chimney-piece */}
      <g fill={PAPER}>
        <path d="M26 72H42V90H26Z" />
        <path d="M104 74H118V90H104Z" />
      </g>
      <path
        d="M42 76q6 1 5 7q-1 4 -5 4M104 78q-5 1 -4 6q1 3 4 3"
        fill="none"
        stroke={PAPER}
        strokeWidth={1.6}
      />
      <path d="M28 76H40M106 78H116" stroke={INK} strokeWidth={1} />
      {/* the opening, black, with the low fire at its foot */}
      <path d={`M32 ${FLOOR}V170Q32 124 74 124Q116 124 116 170V${FLOOR}Z`} fill={INK} />
      <path
        d={`M44 ${FLOOR - 16}H104M46 ${FLOOR - 10}H102M50 ${FLOOR - 16}V${FLOOR}M98 ${FLOOR - 16}V${FLOOR}`}
        fill="none"
        stroke={PAPER}
        strokeWidth={1.4}
      />
      <g fill={RED}>
        <path
          d={`M56 ${FLOOR - 16}C56 ${FLOOR - 21} 62 ${FLOOR - 24} 67 ${FLOOR - 20}C70 ${FLOOR - 24} 78 ${FLOOR - 24} 81 ${FLOOR - 19}C86 ${FLOOR - 22} 93 ${FLOOR - 20} 92 ${FLOOR - 16}Z`}
        />
        <path
          className="lc-flicker"
          style={timing({ dur: 1.1 })}
          d={`M70 ${FLOOR - 20}C69 ${FLOOR - 25} 72 ${FLOOR - 28} 73 ${FLOOR - 32}C75 ${FLOOR - 28} 78 ${FLOOR - 25} 76 ${FLOOR - 20}Z`}
        />
      </g>
      {/* a long clay pipe propped in each corner */}
      <path d={wedge(38, FLOOR - 2, 50, 134, 2.6, 1.8)} fill={PAPER} />
      <path d={`M36 ${FLOOR - 4}q-4 -1 -4 -6q2 -2 6 0Z`} fill={PAPER} />
      <path d={wedge(110, FLOOR - 2, 98, 138, 2.6, 1.8)} fill={PAPER} />
      <path d={`M112 ${FLOOR - 4}q4 -1 4 -6q-2 -2 -6 0Z`} fill={PAPER} />
      {/* hearth-stone */}
      <rect x={0} y={FLOOR} width={150} height={9} fill={PAPER} />
      <rect x={0} y={FLOOR + 9} width={150} height={2} fill={INK} />
    </>
  )
}

/** The window: a sash of small panes on a pale morning, in a deep reveal. */
function Window({ clip }: { clip: string }) {
  const m = marks()
  return (
    <>
      <rect x={570} y={20} width={144} height={178} fill={INK} />
      <rect x={580} y={30} width={124} height={158} fill={INK} />
      <g clipPath={`url(#${clip})`}>
        <rect x={580} y={30} width={124} height={158} fill={PAPER} />
        <path d={m.sky} fill={INK} />
        <path d={m.twigs} fill={INK} />
        {/* the far hedge and a line of field */}
        <path d="M580 176Q610 168 640 172T704 170V188H580Z" fill={INK} />
      </g>
      <g fill={INK}>
        {[580, 620.5, 661, 700].map((x) => (
          <rect key={x} x={x} y={30} width={4} height={158} />
        ))}
        {[30, 68, 106, 146, 184].map((y) => (
          <rect key={y} x={580} y={y} width={124} height={y === 106 ? 6 : 4} />
        ))}
      </g>
      {/* sill */}
      <rect x={562} y={196} width={160} height={7} fill={PAPER} />
      <rect x={562} y={203} width={160} height={2} fill={INK} />
    </>
  )
}

/** The door Godfrey leaves by, shut, in the panelled wall. */
function Door() {
  return (
    <>
      <rect x={742} y={30} width={100} height={FLOOR - 30} fill={INK} />
      <path
        d={`M744 32V${FLOOR}M840 32V${FLOOR}M744 32H840`}
        fill="none"
        stroke={PAPER}
        strokeWidth={3}
      />
      <g fill="none" stroke={PAPER} strokeWidth={LINE.fine}>
        <rect x={756} y={46} width={30} height={78} />
        <rect x={798} y={46} width={30} height={78} />
        <rect x={756} y={140} width={30} height={84} />
        <rect x={798} y={140} width={30} height={84} />
      </g>
      <circle cx={760} cy={138} r={3} fill={PAPER} />
    </>
  )
}

const BEEF =
  'M434 195C432 190 438 186 442 186C444 175 458 168 474 170C488 172 496 180 496 186C502 187 504 192 500 195Z'
const LOAF = 'M506 194C505 184 516 179 526 182C531 185 532 190 530 194Z'
const TANKARD = 'M404 162H424V194H404Z'

/** The breakfast table in its white cloth, with the beef, a loaf and the Squire's ale. */
function Table() {
  return (
    <>
      {/* legs */}
      <path d="M344 244V300M506 244V300M364 244V292M488 244V292" stroke={INK} strokeWidth={6} />
      {/* the cloth, its top seen a little from above, its fall to the floor */}
      <path
        d="M330 194L520 194L530 206L322 206Z"
        fill={PAPER}
        stroke={INK}
        strokeWidth={LINE.fine}
      />
      <path d="M322 206L530 206L532 250C470 256 380 256 320 250Z" fill={PAPER} />
      <path
        d={
          gouge(350, 210, 348, 250, 0.9, 0.6) +
          gouge(398, 210, 398, 253, 0.9) +
          gouge(452, 210, 454, 253, 0.9) +
          gouge(502, 210, 506, 250, 0.9, -0.6)
        }
        fill={INK}
      />
      <path d="M322 206L530 206" stroke={INK} strokeWidth={1.6} />
      {/* the things on the cloth, each cut free of the dark wall by a paper edge */}
      <g fill={PAPER} stroke={PAPER} strokeWidth={3.4} strokeLinejoin="round">
        <path d={BEEF} />
        <path d={LOAF} />
        <path d={TANKARD} />
      </g>
      <path d="M424 168q10 2 9 11q-1 8 -9 9" fill="none" stroke={PAPER} strokeWidth={6} />
      {/* the joint of beef on its dish */}
      <path d={BEEF} fill={INK} />
      <path d={gouge(448, 186, 474, 175, 1.2) + gouge(458, 190, 488, 180, 1)} fill={PAPER} />
      <path d="M430 196H504" stroke={INK} strokeWidth={2.2} />
      {/* a loaf */}
      <path d={LOAF} fill={INK} />
      <path d={gouge(512, 186, 524, 183, 0.9)} fill={PAPER} />
      {/* the tankard of ale */}
      <path d={TANKARD} fill={INK} />
      <path d="M424 168q10 2 9 11q-1 8 -9 9" fill="none" stroke={INK} strokeWidth={3} />
      <path d="M404 168H424" stroke={PAPER} strokeWidth={1.2} />
      <path d={gouge(408, 172, 409, 190, 1)} fill={PAPER} />
      {/* his plate, and the knife and fork laid down across the cloth */}
      <ellipse cx={382} cy={198} rx={18} ry={3.4} fill={INK} />
      <path d="M362 202.6L398 201.2" stroke={INK} strokeWidth={1.6} />
      <path d="M368 204.6L400 204" stroke={INK} strokeWidth={1.4} />
    </>
  )
}

function GodfreyFailsToConfess({ uid }: ArtProps) {
  const m = marks()
  const id = { win: `${uid}-win` }
  const [fx, fy, frx, fry] = SQUIRE_FLUSH
  return (
    <>
      <defs>
        <clipPath id={id.win}>
          <rect x={580} y={30} width={124} height={158} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [480, 170], push: 1.03 })}>
        {/* the wainscot: dark panelled wood, lit from the window */}
        <path d={m.wall} fill={PAPER} />
        <g fill="none" stroke={PAPER} strokeWidth={LINE.fine}>
          {[226, 344, 462].map((x) => (
            <rect key={x} x={x} y={20} width={98} height={112} />
          ))}
          {[160, 262, 364, 466].map((x) => (
            <rect key={x} x={x} y={160} width={88} height={64} />
          ))}
        </g>
        <rect x={150} y={142} width={420} height={6} fill={PAPER} />
        <rect x={150} y={151} width={420} height={1.6} fill={PAPER} />
        <rect x={0} y={FLOOR - 6} width={W} height={8} fill={PAPER} />
        <rect x={0} y={FLOOR - 3} width={W} height={1.4} fill={INK} />
        <rect x={0} y={FLOOR + 2} width={W} height={H - FLOOR - 2} fill={PAPER} />
        <path d={m.floor} fill={INK} />
        <path d={m.pool} fill={INK} />
        <path d={m.sun} fill={PAPER} />

        <ChimneyWall />
        <Chimney />
        <Window clip={id.win} />
        <Door />

        {/* Godfrey, against the window, the hand turned out in a shrug */}
        <Figure parts={GODFREY} cuts={GOD_CUTS} halo={2}>
          <path d={GOD_BOOTS} fill={PAPER} />
          <path d={NECKCLOTH} transform={GOD_T} fill={PAPER} />
          <path d={GODFREY_CUTS} transform={GOD_T} fill={PAPER} />
          <PaperHair t={GOD_T} d={GODFREY_HAIR} lines={GODFREY_CURLS} />
        </Figure>

        {/* Fleet, by the Squire's chair, waiting for more beef */}
        <Figure
          transform={HOUND_AT}
          parts={[
            { d: HOUND_TAIL },
            { d: HOUND_FAR_LEGS, w: 6.4 },
            { d: HOUND_FAR_PAWS },
            { d: HOUND },
          ]}
          cuts={houndMarks()}
          halo={2.2}
        />

        {/* the table, then the Squire's chair, and the Squire, leaning at his son */}
        <Table />
        <path d={CHAIR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <Figure parts={SQUIRE} cuts={SQ_CUTS} halo={2}>
          <path
            d={SQ_WAISTCOAT}
            fill="none"
            stroke={PAPER}
            strokeWidth={1.3}
            strokeLinejoin="round"
          />
          <path d={SQ_CREASES} fill="none" stroke={PAPER} strokeWidth={0.9} />
          <g fill={PAPER}>
            {SQ_BUTTONS.map(([x, y]) => (
              <circle key={y} cx={x} cy={y} r={1.5} />
            ))}
          </g>
          <path d={NECKCLOTH} transform={SQ_T} fill={PAPER} />
          <path d={SQUIRE_CUTS + SQUIRE_HAIR} transform={SQ_T} fill={PAPER} />
          {/* "purple with anger before his son had done speaking" */}
          <g transform={SQ_T}>
            <ellipse
              className="lc-fade-in"
              style={timing({ delay: 1, dur: 1.4 })}
              cx={fx}
              cy={fy}
              rx={frx}
              ry={fry}
              fill={RED}
            />
          </g>
          <path d={FLAT_CUTS} transform={handAt(SQ_ARM, 1, SQ_HAND)} fill={PAPER} />
        </Figure>
      </g>
    </>
  )
}

export const godfreyFailsToConfess: LinocutArt = {
  width: W,
  height: H,
  Draw: GodfreyFailsToConfess,
}
