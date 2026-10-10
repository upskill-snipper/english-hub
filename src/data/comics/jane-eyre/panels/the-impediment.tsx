import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, gougeField, n, rng, wedge } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import {
  Figure,
  HEAD_JANE,
  HEAD_MASON,
  HEAD_ROCHESTER,
  HOLD_HAND,
  JaneFace,
  LOOSE_HAND,
  MasonFace,
  OPEN_HAND,
  ROCHESTER_CUTS,
  ROCHESTER_EAR,
  ROCHESTER_HAIR,
  ROCHESTER_HAIRLINE,
  ROCHESTER_HAIR_CUTS,
  ROCHESTER_NECKCLOTH,
  handAt,
  headAt,
  line,
  man,
  woman,
  type P,
  type Part,
} from './people'

/**
 * Chapter 26: "The impediment", the fifteenth moment in the guide's
 * timeline. Every detail is from the held edition
 * (src/data/full-texts/jane-eyre.ts).
 *
 * THE MOMENT DRAWN. The church, as the clergyman reaches the question: "his
 * hand was already stretched towards Mr. Rochester, as his lips unclosed to
 * ask, 'Wilt thou have this woman for thy wedded wife?'—when a distinct and
 * near voice said—". So Mr Wood stands beyond the communion rails with his
 * hand held out, Rochester stands rigid at the rails, Jane has turned her
 * head back towards the voice, and Briggs stands behind them in the
 * chancel. The third storey, where the guide's moment ends, is not drawn.
 *
 * - "We entered the quiet and humble temple; the priest waited in his white
 *   surplice at the lowly altar, the clerk beside him. All was still: two
 *   shadows only moved in a remote corner. My conjecture had been correct:
 *   the strangers had slipped in before us, and they now stood by the vault
 *   of the Rochesters"; "a kneeling angel" on the "time-stained marble tomb".
 *   So the clerk stands by the clergyman, and Mason, "the second stranger,
 *   who had hitherto lingered in the background", stands by the vault at the
 *   left, where the angel kneels on the tomb behind its rails.
 * - "a rook wheeling round the steeple, of a ruddy morning sky beyond". So
 *   the east window over the altar is the spot colour, the ruddy sky.
 * - Jane in her wedding-dress and "the plain square of blond after all"
 *   fastened to her hair with a brooch; Rochester and Mason as the figure
 *   kit cuts them. The clergyman, the clerk and Briggs are not described,
 *   and are drawn plainly.
 *
 * Seeds: 1501 to 1503.
 */

const W = 860
const H = 340
const FLOOR = 258
/**
 * The east window over the altar, and the altar under it. Set high, its sill
 * above the clerk's head: FIXED 10 October 2026, when the clerk's dark head
 * was first printed against the red of the window, and red round a face
 * reads at a glance as something else.
 */
const EAST = { x0: 778, x1: 836, top: 32, sill: 92 }
const ALTAR = { x0: 752, x1: 856, top: 202 }
/** A lancet in the north wall, giving the grey light of the nave. */
const NORTH = { x0: 300, x1: 336, top: 52, sill: 150 }
/** The communion rails, between the couple and the clergyman. */
const RAIL = { x0: 600, x1: 708, top: 226, foot: 296 }
/** The Rochester vault: the marble tomb behind its rails, in a remote corner. */
const TOMB = { x0: 34, x1: 186, top: 206 }

type Marks = {
  wall: string
  courses: string
  floor: string
  shade: string
  stains: string
  diamonds: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // Morning light from the east window on the right; the nave behind them
  // darker, and darkest in the remote corner where the strangers wait.
  const light = (x: number, y: number) =>
    Math.max(
      clamp(1 - Math.hypot((x - 806) * 0.66, (y - 92) * 0.9) / 560) ** 1.3,
      clamp(1 - Math.hypot(x - 318, (y - 100) * 0.8) / 150) * 0.5,
      0.05,
    )
  const wall = gougeField(rng(1501), { x0: 0, x1: W, y0: 30, y1: FLOOR }, light, {
    spacing: 6.6,
    len: [14, 52],
  })
  // The grey stone in courses: the joints between the stones staggered, cut
  // in paper where the light reaches.
  const r = rng(1502)
  let courses = ''
  for (let y = 52, row = 0; y < FLOOR - 4; y += 22, row++) {
    for (let x = (row % 2) * 34 + between(r, 0, 8); x < W; x += 68 + between(r, -6, 6)) {
      const L = light(x, y + 10)
      if (L < 0.12) continue
      courses += gouge(x, y + 3, x + between(r, -0.6, 0.6), y + 19, 0.3 + L * 0.9)
    }
  }
  // The flagged floor: wide stones, lit towards the altar.
  let floor = ''
  for (let y = FLOOR + 12, k = 0; y < H; y += 14 + k * 6, k++) {
    floor += gouge(0, y, W, y + between(r, -0.6, 0.6), 0.8 + k * 0.4)
  }
  const V = [580, 120]
  for (let xt = -600; xt < 1500; xt += 70) {
    const xb = V[0] + (xt - V[0]) * ((H - V[1]) / (FLOOR - V[1]))
    floor += wedge(xt, FLOOR, xb, H, 0.8, 2.6)
  }
  let shade = ''
  for (let y = FLOOR + 1; y < FLOOR + 12; y += 3)
    shade += gouge(0, y, W, y, 2.2 - (y - FLOOR) * 0.14)
  // Dark at the nave end of the floor, where the light does not reach.
  for (let y = FLOOR + 6; y < H; y += 4)
    shade += gouge(-20, y, 220 - (y - FLOOR) * 0.6, y + 0.4, 1.3)
  // The tomb is "time-stained": the marble flecked with ink.
  const rs = rng(1503)
  let stains = ''
  for (let i = 0; i < 24; i++) {
    const x = between(rs, TOMB.x0 + 6, TOMB.x1 - 6)
    const y = between(rs, TOMB.top + 8, FLOOR - 6)
    stains += gouge(x, y, x + between(rs, 3, 9), y + between(rs, -1, 2), 0.7)
  }
  // Diamond leading in the north lancet.
  let diamonds = ''
  for (let k = -6; k < 12; k++) {
    const x = NORTH.x0 + k * 12
    diamonds += `M${x} ${NORTH.top}L${x + 110} ${NORTH.top + 110}M${x + 36} ${NORTH.top}L${x - 74} ${NORTH.top + 110}`
  }
  cached = { wall, courses, floor, shade, stains, diamonds }
  return cached
}

/** A pointed window: its outline as a path. */
function lancet(x0: number, x1: number, top: number, sill: number) {
  const mid = (x0 + x1) / 2
  const spring = top + (x1 - x0) * 0.62
  return `M${x0} ${sill}V${n(spring)}Q${x0} ${top + 6} ${mid} ${top}Q${x1} ${top + 6} ${x1} ${n(spring)}V${sill}Z`
}

/**
 * "a kneeling angel": the marble figure on the tomb, kneeling in profile
 * towards the altar, the wings folded down its back, the head bowed, the
 * hands together. Cut in PAPER with ink lines.
 */
const ANGEL = [
  'M96 178C88 168 84 152 86 136C87 128 90 122 95 118C95 132 98 148 104 160C104 172 102 188 100 202L93 202C93 192 95 186 96 178Z',
  'M100 168C104 161 113 160 118 165C122 171 122 180 119 187C126 189 133 195 137 201L139 206L97 206C95 196 95 181 100 168Z',
  'M108 152C108 145 114 141 120 142C125 143 128 148 127 154C126 159 121 162 115 161C111 160 108 157 108 152Z',
  // the hands together in prayer: a short rounded almond before the breast.
  // (Cut first as a thin bar, which read at panel size as a blade.)
  'M121 177C119.6 171 121 165.6 125 162C128.8 165.6 129.6 171 128 177Z',
]
const ANGEL_LINES =
  'M90 136C92 148 95 160 99 172M95 128C97 142 99 154 102 164M107 172L105 204M114 174L118 204M124 192L132 204M124.6 165V175'

// ── THE PEOPLE ──────────────────────────────────────────────────────────────

/**
 * A plain man's head, for the people the text does not describe: the
 * clergyman, the clerk and the solicitor. Facing right, in the frame of the
 * kit's heads. Their features and plain dark hair are cut in PAPER.
 */
const HEAD_PLAIN =
  'M-8 26C-9 20 -14 15 -15.5 6C-17 -9 -8 -20 3 -20C11 -20 15.5 -15 15.5 -9L16 -5.5L22 5L16.5 6.6L17 9.4L15.5 11L16.8 13.6C17 18.6 15 22 10 23L7.5 26Z'
const PLAIN_CUTS =
  'M6.6 -3.6Q10 -5.8 13.2 -3.8Q10 -1.8 6.6 -3.6Z' +
  gouge(6.4, -7.8, 13.8, -7.2, 0.8) +
  gouge(11.2, 11.4, 15.8, 11, 0.5) +
  gouge(-3.8, -1, -2.8, 6, 0.6, -1.2) +
  gouge(10, -17.2, -6, -17.4, 0.5, -1.2) +
  gouge(4, -14.6, -13, -7, 0.55, -1.6) +
  gouge(-2, -10.4, -14.6, 2, 0.5, -1.2)
/** A white neckcloth at the throat. PAPER. */
const NECKCLOTH =
  'M-4 24.6C0 23.4 5 23.6 8.6 25C9.4 28 8.6 31 7 33C3 33.6 -1.6 33 -4.6 31.4C-5.4 29 -5.2 26.6 -4 24.6Z'
/** A clergyman's white bands, falling from the neckcloth. PAPER. */
const BANDS = 'M3 31L6.4 31L7.4 42L2.4 42ZM-1.6 31L1.8 31L1.4 42L-3.4 42Z'

/**
 * Briggs, a few paces behind them in the chancel, facing the altar: "a
 * gentleman, evidently", in a dark coat, one hand a little forward as he
 * speaks, "distinctly, calmly, steadily, but not loudly".
 */
const BRIGGS_HEAD = { d: HEAD_PLAIN, at: [318, 112] as P, rot: 0, scale: 1.14 }
const BRIGGS_T = headAt(1, BRIGGS_HEAD.at, BRIGGS_HEAD.rot, BRIGGS_HEAD.scale)
const BRIGGS: Part[] = man({
  facing: 1,
  neck: [314, 141],
  hip: [312, 214],
  head: BRIGGS_HEAD,
  body: { width: 36, tails: 50, front: 4, flare: 7 },
  arm: 9.6,
  leg: 10.6,
  shoe: 1.05,
  near: {
    arm: [
      [318, 150],
      [332, 182],
      [352, 190],
    ],
    hand: { parts: OPEN_HAND, scale: 1.05, rot: -8 },
    leg: [
      [316, 214],
      [326, 266],
      [330, 320],
    ],
  },
  far: {
    arm: [
      [310, 150],
      [304, 186],
      [302, 216],
    ],
    hand: { parts: LOOSE_HAND, scale: 1.05, rot: 0 },
    leg: [
      [308, 214],
      [302, 266],
      [298, 318],
    ],
  },
})

/**
 * Mason, the second stranger, who "had hitherto lingered in the background",
 * by the rails of the Rochester vault: the kit's pale face, a dark surtout.
 */
const MASON_HEAD = { d: HEAD_MASON, at: [222, 140] as P, rot: 2, scale: 0.94 }
const MASON_T = headAt(1, MASON_HEAD.at, MASON_HEAD.rot, MASON_HEAD.scale)
const MASON: Part[] = man({
  facing: 1,
  neck: [219, 163],
  hip: [218, 222],
  head: MASON_HEAD,
  body: { width: 30, tails: 46, flare: 6, long: true },
  arm: 8,
  leg: 8.6,
  shoe: 0.85,
  near: {
    arm: [
      [222, 170],
      [226, 198],
      [228, 222],
    ],
    hand: { parts: LOOSE_HAND, scale: 0.86, rot: 0 },
    leg: [
      [221, 222],
      [224, 262],
      [226, 290],
    ],
  },
  far: {
    arm: [],
    leg: [
      [215, 222],
      [212, 262],
      [210, 288],
    ],
  },
})

/**
 * Jane at the rails in her wedding-dress, the plain square of blond fastened
 * to her hair: her body to the altar, her head turned back over her shoulder
 * to the voice behind them. "a robed and veiled figure".
 */
const J_HEAD = { d: HEAD_JANE, at: [458, 120] as P, rot: -6, scale: 1.08 }
const J_T = headAt(-1, J_HEAD.at, J_HEAD.rot, J_HEAD.scale)
const JANE: Part[] = woman({
  facing: 1,
  neck: [456, 147],
  waist: [455, 180],
  hemY: 322,
  head: J_HEAD,
  gown: { shoulder: 26, waistW: 18, front: 32, back: 38 },
  paperGown: true,
  arms: 'bare',
  toes: [
    [452, 320],
    [466, 321],
  ],
  near: {
    arm: [
      [460, 155],
      [470, 186],
      [482, 210],
    ],
    hand: { parts: LOOSE_HAND, scale: 0.92, rot: 4 },
  },
  far: {
    arm: [
      [452, 155],
      [448, 186],
      [452, 212],
    ],
    hand: { parts: LOOSE_HAND, scale: 0.9, rot: 0 },
  },
}).map((q) => (q.d === HEAD_JANE ? { ...q, t: J_T } : q))
/**
 * "the plain square of blond after all", fastened to her hair with a brooch:
 * a square of plain silk lace over the back of her head, falling to her
 * shoulders. In the frame of her head (turned), PAPER with an ink edge.
 */
const VEIL =
  'M14 -17C6 -23 -8 -23 -16 -14C-22 -6 -24 10 -26 30L-28 50L-2 52C-4 40 -6 26 -4 12C-2 0 4 -10 14 -17Z'
const VEIL_LINES = 'M-12 -10C-16 4 -18 22 -20 46M-6 -6C-9 10 -10 28 -11 48'
/** The folds of the wedding-dress, in ink. */
const JANE_FOLDS = 'M450 192L438 318M458 194L460 320M466 192L478 318'

/**
 * Rochester beside her at the rails, rigid, "not turning his head or eyes":
 * facing the altar, his arms at his sides.
 */
const ROCH_HEAD = { d: HEAD_ROCHESTER, at: [530, 100] as P, rot: -2, scale: 1.2 }
const ROCH_T = headAt(1, ROCH_HEAD.at, ROCH_HEAD.rot, ROCH_HEAD.scale)
const ROCHESTER: Part[] = man({
  facing: 1,
  neck: [526, 131],
  hip: [524, 208],
  head: ROCH_HEAD,
  hair: ROCHESTER_HAIR,
  body: { width: 40, tails: 52, front: 4, flare: 7 },
  arm: 10,
  leg: 11,
  shoe: 1.1,
  near: {
    arm: [
      [530, 140],
      [536, 178],
      [534, 212],
    ],
    hand: { parts: LOOSE_HAND, scale: 1.1, rot: 2 },
    leg: [
      [528, 208],
      [536, 264],
      [540, 320],
    ],
  },
  far: {
    arm: [],
    leg: [
      [520, 208],
      [516, 264],
      [512, 318],
    ],
  },
})
const ROCH_CUTS = gouge(538, 148, 546, 210, 0.8, -0.6)

/**
 * Mr Wood, the clergyman, beyond the rails, facing them: "the priest waited
 * in his white surplice at the lowly altar"; "his hand was already stretched
 * towards Mr. Rochester"; "The clergyman looked up at the speaker and stood
 * mute". His book in his other hand. The cassock is black below the surplice.
 */
const WOOD_HEAD = { d: HEAD_PLAIN, at: [742, 106] as P, rot: 8, scale: 1.12 }
const WOOD_T = headAt(-1, WOOD_HEAD.at, WOOD_HEAD.rot, WOOD_HEAD.scale)
const WOOD_REACH: P[] = [
  [738, 146],
  [714, 170],
  [688, 168],
]
const WOOD_BOOK_ARM: P[] = [
  [746, 146],
  [752, 176],
  [732, 178],
]
const WOOD: Part[] = [
  { d: line(WOOD_BOOK_ARM), w: 9.4 },
  ...HOLD_HAND.map((q) => ({
    ...q,
    t: handAt(WOOD_BOOK_ARM, -1, { parts: HOLD_HAND, scale: 1, rot: 0 }),
  })),
  // the black cassock to the ground
  { d: 'M728 140C744 136 756 140 760 150L766 296L722 296L726 150Z' },
  { d: 'M726 296L740 296L740 300L722 300Z' },
  // the white surplice over it, wide, to the shin
  {
    d: 'M726 138C736 134 750 134 758 140L770 196C774 222 776 248 776 272L716 272C716 248 718 222 722 196Z',
    paper: true,
    edge: 1.2,
  },
  { d: HEAD_PLAIN, t: WOOD_T },
  // the near arm in the surplice's wide white sleeve, stretched out
  { d: line(WOOD_REACH), w: 13, paper: true, edge: 1.1 },
  ...OPEN_HAND.map((q) => ({
    ...q,
    t: handAt(WOOD_REACH, -1, { parts: OPEN_HAND, scale: 1.05, rot: 10 }),
  })),
]
/** His book, held to his breast. */
const WOOD_BOOK = 'M714 166L734 162L736 184L716 188Z'
const SURPLICE_FOLDS = 'M734 200L728 270M746 198L748 270M758 200L766 270'

/** The clerk beside him, in a plain dark coat, looking up at the speaker. */
const CLERK_HEAD = { d: HEAD_PLAIN, at: [812, 118] as P, rot: 6, scale: 1.04 }
const CLERK_T = headAt(-1, CLERK_HEAD.at, CLERK_HEAD.rot, CLERK_HEAD.scale)
const CLERK: Part[] = man({
  facing: -1,
  neck: [814, 145],
  hip: [816, 212],
  head: CLERK_HEAD,
  body: { width: 32, tails: 46, front: 4, flare: 6 },
  arm: 8.6,
  leg: 9.6,
  near: {
    arm: [
      [810, 152],
      [806, 184],
      [808, 212],
    ],
    hand: { parts: LOOSE_HAND, scale: 0.95, rot: 0 },
    leg: [
      [814, 212],
      [810, 256],
      [808, 294],
    ],
  },
  far: {
    arm: [],
    leg: [
      [820, 212],
      [824, 256],
      [826, 292],
    ],
  },
})

function TheImpediment({ uid }: ArtProps) {
  const m = marks()
  const id = { east: `${uid}-east`, north: `${uid}-north` }
  return (
    <>
      <defs>
        <clipPath id={id.east}>
          <path d={lancet(EAST.x0, EAST.x1, EAST.top, EAST.sill)} />
        </clipPath>
        <clipPath id={id.north}>
          <path d={lancet(NORTH.x0, NORTH.x1, NORTH.top, NORTH.sill)} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [500, 200], push: 1.03 })}>
        <path d={m.wall} fill={PAPER} />
        <path d={m.courses} fill={PAPER} />
        {/* the roof: a tie-beam across the top and the feet of the rafters */}
        <rect x={0} y={0} width={W} height={26} fill={INK} />
        <path d={gouge(0, 24, W, 24, 1.6)} fill={PAPER} />
        <g stroke={PAPER} strokeWidth={LINE.fine}>
          {Array.from({ length: 9 }, (_, k) => (
            <path key={k} d={`M${40 + k * 100} 0L${40 + k * 100} 22`} />
          ))}
        </g>
        <rect x={0} y={FLOOR} width={W} height={H - FLOOR} fill={PAPER} />
        <path d={m.floor} fill={INK} />
        <path d={m.shade} fill={INK} />

        {/* the north lancet, grey light through plain leaded glass */}
        <path d={lancet(NORTH.x0 - 6, NORTH.x1 + 6, NORTH.top - 8, NORTH.sill + 6)} fill={PAPER} />
        <path
          d={lancet(NORTH.x0, NORTH.x1, NORTH.top, NORTH.sill)}
          fill={PAPER}
          stroke={INK}
          strokeWidth={LINE.bold}
        />
        <g clipPath={`url(#${id.north})`}>
          <path d={m.diamonds} stroke={INK} strokeWidth={0.9} fill="none" />
        </g>

        {/* the east window: "a ruddy morning sky beyond" */}
        <path d={lancet(EAST.x0 - 8, EAST.x1 + 8, EAST.top - 10, EAST.sill + 6)} fill={PAPER} />
        <path d={lancet(EAST.x0, EAST.x1, EAST.top, EAST.sill)} fill={RED} />
        <g clipPath={`url(#${id.east})`} stroke={INK} fill="none">
          <path d={`M${(EAST.x0 + EAST.x1) / 2} ${EAST.top}V${EAST.sill}`} strokeWidth={3} />
          <path d={`M${EAST.x0} 72H${EAST.x1}`} strokeWidth={1.6} />
        </g>

        {/* the lowly altar, its white cloth to the floor */}
        <rect
          x={ALTAR.x0}
          y={ALTAR.top}
          width={ALTAR.x1 - ALTAR.x0}
          height={FLOOR - ALTAR.top}
          fill={PAPER}
          stroke={INK}
          strokeWidth={LINE.fine}
        />
        <path
          d={`M${ALTAR.x0 + 20} ${ALTAR.top + 6}V${FLOOR}M${ALTAR.x0 + 50} ${ALTAR.top + 6}V${FLOOR}M${ALTAR.x0 + 80} ${ALTAR.top + 6}V${FLOOR}`}
          stroke={INK}
          strokeWidth={0.8}
        />
        <rect
          x={ALTAR.x0 - 4}
          y={ALTAR.top - 5}
          width={ALTAR.x1 - ALTAR.x0 + 8}
          height={7}
          fill={INK}
        />

        {/* the Rochester vault: the marble tomb and its kneeling angel, behind rails */}
        <rect
          x={TOMB.x0}
          y={TOMB.top}
          width={TOMB.x1 - TOMB.x0}
          height={FLOOR - TOMB.top}
          fill={PAPER}
          stroke={INK}
          strokeWidth={LINE.fine}
        />
        <path d={m.stains} fill={INK} />
        <path
          d={`M${TOMB.x0 + 14} ${TOMB.top + 14}h${TOMB.x1 - TOMB.x0 - 28}v${FLOOR - TOMB.top - 26}h-${TOMB.x1 - TOMB.x0 - 28}Z`}
          fill="none"
          stroke={INK}
          strokeWidth={LINE.fine}
        />
        <rect
          x={TOMB.x0 - 6}
          y={TOMB.top - 6}
          width={TOMB.x1 - TOMB.x0 + 12}
          height={8}
          fill={PAPER}
          stroke={INK}
          strokeWidth={LINE.fine}
        />
        <g fill={PAPER} stroke={INK} strokeWidth={LINE.fine} strokeLinejoin="round">
          {ANGEL.map((d) => (
            <path key={d} d={d} />
          ))}
        </g>
        <path d={ANGEL_LINES} stroke={INK} strokeWidth={0.9} fill="none" />
        <g stroke={INK} strokeWidth={2.6}>
          {Array.from({ length: 12 }, (_, k) => {
            const x = 26 + k * 15
            return <path key={x} d={`M${x} ${FLOOR + 6}V${TOMB.top - 22}`} />
          })}
          <path
            d={`M22 ${TOMB.top - 14}H${26 + 11 * 15 + 4}M22 ${FLOOR - 6}H${26 + 11 * 15 + 4}`}
            strokeWidth={3.4}
          />
        </g>
        <g fill={INK}>
          {Array.from({ length: 12 }, (_, k) => {
            const x = 26 + k * 15
            return (
              <path
                key={x}
                d={`M${x - 3.4} ${TOMB.top - 22}L${x} ${TOMB.top - 31}L${x + 3.4} ${TOMB.top - 22}Z`}
              />
            )
          })}
        </g>

        {/* Mason, in the background by the vault */}
        <Figure parts={MASON}>
          <MasonFace t={MASON_T} />
          <path d={NECKCLOTH} transform={MASON_T} fill={PAPER} />
        </Figure>

        {/* the clerk, and the clergyman with his hand stretched out, beyond the rails */}
        <Figure parts={CLERK}>
          <path d={PLAIN_CUTS} transform={CLERK_T} fill={PAPER} />
          <path d={NECKCLOTH} transform={CLERK_T} fill={PAPER} />
        </Figure>
        <Figure parts={WOOD}>
          <path d={SURPLICE_FOLDS} stroke={INK} strokeWidth={0.9} fill="none" />
          <path d={PLAIN_CUTS} transform={WOOD_T} fill={PAPER} />
          <path d={NECKCLOTH + BANDS} transform={WOOD_T} fill={PAPER} />
          <path d={WOOD_BOOK} fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />
        </Figure>

        {/* the communion rails */}
        <g stroke={INK} strokeWidth={4.4} strokeLinecap="round">
          {Array.from({ length: 6 }, (_, k) => (
            <path key={k} d={`M${RAIL.x0 + 6 + k * 19} ${RAIL.top + 6}V${RAIL.foot}`} />
          ))}
        </g>
        <rect
          x={RAIL.x0 - 4}
          y={RAIL.top - 4}
          width={RAIL.x1 - RAIL.x0 + 8}
          height={9}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <path d={gouge(RAIL.x0, RAIL.top - 1, RAIL.x1, RAIL.top - 1, 0.8)} fill={PAPER} />
        <rect
          x={RAIL.x0 - 8}
          y={RAIL.foot}
          width={RAIL.x1 - RAIL.x0 + 16}
          height={6}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.fine}
        />

        {/* Rochester, rigid at the rails */}
        <Figure parts={ROCHESTER} cuts={ROCH_CUTS}>
          <g transform={ROCH_T}>
            <path d={ROCHESTER_HAIR_CUTS + ROCHESTER_CUTS} fill={PAPER} />
            <path
              d={ROCHESTER_HAIRLINE + ROCHESTER_EAR}
              fill="none"
              stroke={PAPER}
              strokeWidth={1.1}
              strokeLinecap="round"
            />
            <path d={ROCHESTER_NECKCLOTH} fill={PAPER} />
          </g>
        </Figure>

        {/* Jane in her wedding-dress and veil, looking back at the voice */}
        <Figure parts={JANE}>
          <path d={JANE_FOLDS} stroke={INK} strokeWidth={0.9} fill="none" />
          <JaneFace t={J_T} tucker={false} />
          <g transform={J_T}>
            <path d={VEIL} fill={PAPER} stroke={INK} strokeWidth={1} strokeLinejoin="round" />
            <path d={VEIL_LINES} stroke={INK} strokeWidth={0.7} fill="none" />
            <circle cx={-2} cy={-14} r={2} fill={INK} />
          </g>
        </Figure>

        {/* Briggs, behind them, declaring the impediment */}
        <Figure parts={BRIGGS}>
          <path d={PLAIN_CUTS} transform={BRIGGS_T} fill={PAPER} />
          <path d={NECKCLOTH} transform={BRIGGS_T} fill={PAPER} />
        </Figure>
      </g>
    </>
  )
}

export const theImpediment: LinocutArt = { width: W, height: H, Draw: TheImpediment }
