import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, n, rng, wedge } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { mitt } from '../../much-ado-about-nothing/panels/people'
import {
  BROW_FINE,
  Cut,
  EAR,
  EYE,
  FLUSH,
  HEAD_PIP_YOUTH,
  PIP_HAIR_LINES,
  Person,
  TOP_HAT,
  TOP_HAT_BAND,
  coat,
  heavyBoot,
  limb,
  type P,
  type Piece,
  type Pose,
} from './people'

/**
 * Chapter 27: "Joe's visit to London", the eighth moment in the guide's
 * timeline. Every detail is from the held edition (src/data/full-texts/
 * great-expectations.ts):
 *
 * - "I came into town on the Monday night to be ready for Joe, and I got up
 *   early in the morning, and caused the sitting-room and breakfast-table to
 *   assume their most splendid appearance. Unfortunately the morning was
 *   drizzly, and an angel could not have concealed the fact that Barnard was
 *   shedding sooty tears outside the window, like some weak giant of a Sweep."
 *   So it is a grey morning: rain falls past the window, soot runs down the
 *   glass, and across the court stand the shabby chambers of Chapter 21,
 *   "the windows ... in every stage of dilapidated blind and curtain,
 *   crippled flower-pot, cracked glass", with "the most dismal trees".
 * - The room has "the pattern of the paper on the wall", the breakfast table
 *   with its tea and toast, the slop-basin, and the chimney-piece on which
 *   Joe stood his hat "on an extreme corner ... from which it ever afterwards
 *   fell off at intervals".
 * - Herbert "left us for the city" before Joe's message, so his chair stands
 *   pushed back from the table, empty.
 * - The moment drawn is the parting, just before the panel's quotation: "Our
 *   eyes met, and all the 'Sir' melted out of that manly heart as he gave me
 *   his hand." So Joe, the kit's Joe, stiff in his holiday clothes ("I'm
 *   wrong in these clothes"), with the shirt-collar he "scrape[s] himself"
 *   with standing up at his jaw and his cravat knotted big, gives Pip his
 *   hand, and holds his hat to his chest in the other, as he has held it all
 *   morning, "carefully with both hands, like a bird's-nest with eggs in it".
 * - Pip, grown, wears "the flowered pattern of my dressing-gown", and his face
 *   is flushed on the cheekbone: "I felt my face fire up as I looked at Joe",
 *   when Joe gives him Miss Havisham's message a few minutes before. The
 *   flush is the panel's one red, and is kept on the cheekbone, away from the
 *   mouth and from the hands.
 *
 * Seeds: 2701 (the wall), 2702 (the rain and soot), 2703 (the floor).
 */

const W = 860
const H = 340
/** Where the back wall meets the floor. */
const FLOOR = 252
/** The window, on the left: its outer frame. */
const WIN = { x0: 96, x1: 286, y0: 26, y1: 214 }
/** The breakfast table: its top's back and front edges, its ends, its feet. */
const TABLE = { back: 194, front: 210, x0: 520, x1: 704, feet: 306 }
/** The chimney-piece, on the right. */
const CHIMNEY = { x0: 734, x1: 846, shelf: 142, foot: FLOOR }

/** The grey light of the window: 1 at the glass, falling away across the room. */
function light(x: number, y: number) {
  const d = Math.hypot((x - 190) * 0.8, (y - 120) * 1.1)
  return clamp(1 - d / 520) ** 1.3
}

type Marks = {
  paper: string
  floor: string
  rain: string
  soot: string
  court: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // "the pattern of the paper on the wall": a trellis of fine paper lines
  // with a dot in each diamond, fainter where the light falls off.
  let paper = ''
  const cell = 26
  for (let row = 0, y = 12; y < FLOOR - 14; row++, y += cell)
    for (let x = (row % 2) * (cell / 2) - cell; x < W + cell; x += cell) {
      if (x > WIN.x0 - 22 && x < WIN.x1 + 22 && y < WIN.y1 + 24) continue
      if (x > CHIMNEY.x0 - 14 && y > CHIMNEY.shelf - 16) continue
      const L = light(x, y)
      const w = 0.4 + L * 1.1
      paper +=
        gouge(x - cell / 2, y, x, y - cell / 2, w) +
        gouge(x, y - cell / 2, x + cell / 2, y, w) +
        `M${n(x - 1.3)} ${n(y - cell / 2 + 0.4)}a1.3 1.3 0 1 0 2.6 0a1.3 1.3 0 1 0 -2.6 0Z`
    }
  // The floor: boards running away from the eye.
  const r = rng(2703)
  let floor = ''
  const V: [number, number] = [380, 50]
  for (let xt = -700; xt < 1500; xt += 30) {
    const xb = V[0] + (xt - V[0]) * ((H - V[1]) / (FLOOR - V[1]))
    let t0 = 0
    while (t0 < 1) {
      const t1 = Math.min(1, t0 + between(r, 0.14, 0.32))
      const x0 = xt + (xb - xt) * t0
      const y0 = FLOOR + (H - FLOOR) * t0
      const x1 = xt + (xb - xt) * t1
      const y1 = FLOOR + (H - FLOOR) * t1
      const L = light((x0 + x1) / 2, (y0 + y1) / 2 - 90)
      floor += wedge(x0, y0, x1, y1, (0.4 + t0) * (0.5 + L * 3), (0.4 + t1) * (0.5 + L * 3))
      t0 = t1 + between(r, 0.03, 0.08)
    }
  }
  // Rain falling past the glass, and soot running down it in streaks.
  const w = rng(2702)
  let rain = ''
  for (let k = 0; k < 80; k++) {
    const x = between(w, WIN.x0, WIN.x1 + 20)
    const y = between(w, WIN.y0, WIN.y1)
    rain += `M${n(x)} ${n(y)}l${n(-4)} ${n(between(w, 9, 16))}`
  }
  let soot = ''
  for (let k = 0; k < 16; k++) {
    const x = between(w, WIN.x0 + 10, WIN.x1 - 10)
    const y = between(w, WIN.y0 + 6, WIN.y0 + 90)
    const len = between(w, 30, 110)
    soot += gouge(x, y, x + between(w, -2, 2), Math.min(y + len, WIN.y1 - 8), between(w, 0.9, 1.6))
  }
  // Across the court, the dingy chambers: a wall hatched grey through the
  // rain, the hatching heavier towards the foot.
  let court = ''
  for (let y = WIN.y0 + 4; y < WIN.y1; y += 4.2) {
    let x = WIN.x0 + between(w, -10, 0)
    while (x < WIN.x1) {
      const len = between(w, 10, 36)
      court += gouge(
        x,
        y,
        x + len,
        y + between(w, -0.3, 0.3),
        0.35 + ((y - WIN.y0) / (WIN.y1 - WIN.y0)) * 0.5,
      )
      x += len + between(w, 3, 9)
    }
  }
  cached = { paper, floor, rain, soot, court }
  return cached
}

/** The window: outer frame, the bars of the sash, and the sill. */
function Window({ clip }: { clip: string }) {
  const m = marks()
  const { x0, x1, y0, y1 } = WIN
  const my = (y0 + y1) / 2
  return (
    <g>
      <rect
        x={x0 - 8}
        y={y0 - 8}
        width={x1 - x0 + 16}
        height={y1 - y0 + 16}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.fine}
      />
      <rect x={x0} y={y0} width={x1 - x0} height={y1 - y0} fill={PAPER} />
      <g clipPath={`url(#${clip})`}>
        {/* the chambers across the court, grey in the rain: a hatched wall,
            dark windows, one with its blind hanging askew, one pane cracked */}
        <path d={m.court} fill={INK} />
        <g fill={INK}>
          <rect x={118} y={58} width={34} height={46} />
          <rect x={174} y={58} width={34} height={46} />
          <rect x={230} y={58} width={34} height={46} />
          <rect x={118} y={132} width={34} height={46} />
          <rect x={174} y={132} width={34} height={46} />
          <rect x={230} y={132} width={34} height={46} />
        </g>
        <path d="M176 60H206V64L178 80Z" fill={PAPER} />
        <path d="M232 134H262V150H232Z" fill={PAPER} />
        <path
          d="M122 136L134 150L130 170M134 150L146 146"
          fill="none"
          stroke={PAPER}
          strokeWidth={1.1}
        />
        <path d="M100 196H282" stroke={INK} strokeWidth={5} />
        <path d={m.rain} stroke={INK} strokeWidth={0.8} strokeLinecap="round" />
        {/* "Barnard was shedding sooty tears outside the window" */}
        <path d={m.soot} fill={INK} />
      </g>
      {/* the sash bars: six panes over six, the meeting rail heavier */}
      <g fill={INK}>
        <rect x={x0} y={my - 4} width={x1 - x0} height={8} />
        <rect x={x0 + (x1 - x0) / 3 - 2} y={y0} width={4} height={y1 - y0} />
        <rect x={x0 + ((x1 - x0) * 2) / 3 - 2} y={y0} width={4} height={y1 - y0} />
        <rect x={x0} y={(y0 + my) / 2 - 2} width={x1 - x0} height={4} />
        <rect x={x0} y={(my + y1) / 2 - 2} width={x1 - x0} height={4} />
      </g>
      <rect x={x0 - 16} y={y1 + 8} width={x1 - x0 + 32} height={8} fill={PAPER} />
      <rect x={x0 - 16} y={y1 + 16} width={x1 - x0 + 32} height={2} fill={INK} />
    </g>
  )
}

/** The breakfast table, its cloth, the tea things and the slop-basin. */
function Table() {
  const { back, front, x0, x1, feet } = TABLE
  return (
    <g>
      {/* Herbert's chair, pushed back from the table and empty */}
      <g stroke={PAPER} strokeWidth={1.4} fill={INK} strokeLinejoin="round">
        <path d="M716 300L720 226H724L722 300ZM750 300L748 226H752L756 300Z" />
        <path d="M712 230L716 218H760L758 230Z" />
        <path d="M752 218L756 150H764L760 218Z" />
        <path d="M756 160H766M755 182H765M754 202H764" />
      </g>
      <path
        d={`M${x0} ${front}L${x0 + 12} ${back}H${x1 - 12}L${x1} ${front}Z`}
        fill={PAPER}
        stroke={INK}
        strokeWidth={1.2}
      />
      {/* the cloth hanging over the front */}
      <path
        d={`M${x0} ${front}H${x1}V${front + 34}H${x0}Z`}
        fill={PAPER}
        stroke={INK}
        strokeWidth={1.2}
      />
      <path
        d={`M${x0 + 30} ${front + 4}V${front + 32}M${x0 + 92} ${front + 4}V${front + 32}M${x1 - 30} ${front + 4}V${front + 32}`}
        stroke={INK}
        strokeWidth={0.9}
      />
      <path
        d={`M${x0 + 14} ${front + 34}V${feet}M${x1 - 14} ${front + 34}V${feet}`}
        stroke={INK}
        strokeWidth={6}
      />
      <path
        d={`M${x0 + 14} ${front + 34}V${feet}M${x1 - 14} ${front + 34}V${feet}`}
        stroke={PAPER}
        strokeWidth={0.9}
      />
      {/* the teapot, two cups, the toast-rack and the slop-basin */}
      <path
        d="M560 196C556 186 560 176 572 174C584 174 590 182 588 196Z"
        fill={INK}
        stroke={PAPER}
        strokeWidth={1.2}
      />
      <path d="M588 182Q598 176 600 168" stroke={INK} strokeWidth={3} fill="none" />
      <path d="M560 180Q550 182 552 190" stroke={INK} strokeWidth={2.4} fill="none" />
      <path d="M568 174Q572 168 576 174Z" fill={INK} />
      <path
        d="M612 198Q612 188 622 188Q632 188 632 198Z"
        fill={INK}
        stroke={PAPER}
        strokeWidth={1}
      />
      <path
        d="M648 200Q648 190 658 190Q668 190 668 200Z"
        fill={INK}
        stroke={PAPER}
        strokeWidth={1}
      />
      <path
        d="M676 198Q678 186 690 186Q700 188 700 198Z"
        fill={INK}
        stroke={PAPER}
        strokeWidth={1}
      />
      <path d="M534 196V184M540 196V182M546 196V184M530 196H550" stroke={INK} strokeWidth={2} />
    </g>
  )
}

/**
 * The chimney-piece on the right: its two jambs, the frieze and the shelf on
 * which Joe stood his hat, and the dark opening with its grate and fender.
 * No fire is drawn, because the chapter mentions none.
 */
function ChimneyPiece() {
  const { x0, x1, shelf, foot } = CHIMNEY
  const j = 22
  return (
    <g>
      <path
        d={`M${x0} ${foot}V${shelf}H${x1}V${foot}Z`}
        fill={PAPER}
        stroke={INK}
        strokeWidth={1.4}
      />
      <path d={`M${x0 + j} ${foot}V${shelf + 26}H${x1 - j}V${foot}Z`} fill={INK} />
      <path d={`M${x0 - 8} ${shelf + 1}H${x1 + 8}V${shelf - 8}H${x0 - 8}Z`} fill={INK} />
      <path
        d={`M${x0 + 4} ${shelf + 6}V${foot - 2}M${x0 + j - 4} ${shelf + 30}V${foot - 2}M${x1 - 4} ${shelf + 6}V${foot - 2}M${x1 - j + 4} ${shelf + 30}V${foot - 2}M${x0 + 4} ${shelf + 18}H${x1 - 4}`}
        stroke={INK}
        strokeWidth={0.9}
      />
      {/* the grate, cold, and the fender */}
      <path
        d={`M${x0 + j + 12} ${foot - 30}H${x1 - j - 12}M${x0 + j + 12} ${foot - 22}H${x1 - j - 12}M${x0 + j + 12} ${foot - 14}H${x1 - j - 12}`}
        stroke={PAPER}
        strokeWidth={1.4}
      />
      <path
        d={`M${x0 + j + 12} ${foot - 34}V${foot - 8}M${x1 - j - 12} ${foot - 34}V${foot - 8}`}
        stroke={PAPER}
        strokeWidth={1.4}
      />
      <path d={`M${x0 - 4} ${foot + 8}H${x1 + 4}`} stroke={PAPER} strokeWidth={3.6} />
      <path d={`M${x0 - 4} ${foot + 8}H${x1 + 4}`} stroke={INK} strokeWidth={1.2} />
    </g>
  )
}

// ── THE PEOPLE ──────────────────────────────────────────────────────────────

/**
 * Joe, facing right, against the window: stiff in his holiday clothes, giving
 * Pip his right hand, his hat held to his chest in the other "like a
 * bird's-nest with eggs in it". From the figure kit, in his coat; his
 * "preposterous" cravat and the shirt-collar he scrapes himself with are
 * added over his own head's frame.
 */
const JOE_AT: P = [238, 324]
const JOE: Pose = {
  look: 'joe',
  head: { at: [4, -160], rot: 2 },
  near: {
    pts: [
      [4, -128],
      [26, -112],
      [50, -106],
    ],
    hand: 'open',
    deg: -6,
    thumb: -1,
    size: 17,
    spread: 13,
  },
  far: {
    pts: [
      [-3, -128],
      [6, -100],
      [16, -106],
    ],
    hand: 'none',
  },
}
/** Joe's head transform, as the kit sets it: its centre, tilt and scale. */
const JOE_HEAD = 'translate(4 -160) rotate(2)'
/**
 * In Joe's head frame: the point of his shirt-collar standing up against his
 * jaw, and the cravat knotted big at his throat. "Why should a man scrape
 * himself to that extent, before he could consider himself full dressed?"
 */
const JOE_SHIRT_COLLAR = 'M4 24.6L6.4 15.6L11.6 21.4Z'
const JOE_CRAVAT =
  'M6 25.4C9 22.6 14.6 22.8 17 25.6C17.6 28 16 30.6 12.8 31C9.6 31.4 6.4 29.8 6 25.4Z' +
  'M9.6 30L7.4 39.6L11.6 38.4L12.4 30.8ZM13.4 30.6L15.4 39.4L18.6 37L15.6 30Z'
/** His hat, held crown down against his chest, and the hand under it, in his own frame. */
const JOE_HAT = 'translate(26 -112) rotate(172) scale(0.9)'

/**
 * Pip at twenty-one or so, in "the flowered pattern of my dressing-gown":
 * the figure kit cannot dress a man in a gown, so he is cut here from the
 * kit's own pieces (the grown Pip's head, hair and features, its limbs, coat
 * and boots), in its frame for a man, facing right before he is flipped to
 * face Joe. His right hand, the far one, goes out to Joe's.
 */
const PIP_AT: P = [384, 322]
const PIP_SCALE = 1.3
const PIP_NECK: P = [-2, -138]
const PIP_HIP: P = [0, -70]
const PIP_HEAD = 'translate(1.6 -160) rotate(4)'
const PIP_FAR_ARM: P[] = [
  [-4, -129],
  [18, -112],
  [42, -109],
]
const PIP_NEAR_ARM: P[] = [
  [3, -129],
  [9, -100],
  [12, -76],
]
const PIP_LEGS: { far: P[]; near: P[] } = {
  far: [
    [-3, -70],
    [-4, -36],
    [-6, -3],
  ],
  near: [
    [3, -70],
    [4, -36],
    [5, -3],
  ],
}

let gownCache: { body: Piece[]; near: Piece[]; flowers: string; edges: string } | undefined
function pipInGown() {
  if (gownCache) return gownCache
  const robe = coat(PIP_NECK, PIP_HIP, { width: 36, tails: 50, flare: 9, long: true })
  const body: Piece[] = [
    { d: limb(PIP_FAR_ARM), w: 10 },
    mitt(PIP_FAR_ARM[2], -2, 1),
    { d: limb(PIP_LEGS.far), w: 10 },
    heavyBoot([PIP_LEGS.far[2][0], PIP_LEGS.far[2][1] + 3], 0.92),
    { d: limb(PIP_LEGS.near), w: 10 },
    heavyBoot([PIP_LEGS.near[2][0], PIP_LEGS.near[2][1] + 3], 0.92),
    { d: limb([PIP_NECK, PIP_HIP]), w: 24 },
    { d: robe },
    { d: HEAD_PIP_YOUTH, t: PIP_HEAD },
  ]
  const near: Piece[] = [
    { d: limb(PIP_NEAR_ARM), w: 10, sep: 1.6 },
    { ...mitt(PIP_NEAR_ARM[2], 84, 1), sep: 1.6 },
  ]
  // "the flowered pattern": small rosettes cut in paper over the gown, each a
  // ring of paper round an ink heart, set in loose rows and kept off the edges.
  const r = rng(2704)
  let flowers = ''
  for (let row = 0; row < 8; row++)
    for (let col = 0; col < 4; col++) {
      const y = -126 + row * 13.4 + between(r, -1.4, 1.4)
      const halfW = y < -70 ? 12 : 14 + ((y + 70) / 50) * 7
      const step = (halfW * 2 - 8) / 4
      const x = -halfW + 4 + col * step + ((row % 3) * step) / 3 + between(r, -1.2, 1.2)
      if (x > halfW - 4) continue
      flowers +=
        `M${n(x - 2.6)} ${n(y)}a2.6 2.6 0 1 0 5.2 0a2.6 2.6 0 1 0 -5.2 0Z` +
        `M${n(x - 1)} ${n(y)}a1 1 0 1 1 2 0a1 1 0 1 1 -2 0Z`
    }
  // The gown's shawl collar and front edge, and its cord at the waist.
  const edges =
    gouge(4, -138, 12, -98, 0.9, 1) +
    gouge(12, -98, 13, -24, 0.8) +
    gouge(-15, -74, 16, -76, 1.1, -0.6) +
    gouge(14, -75, 18, -56, 0.8) +
    gouge(17, -75, 22, -58, 0.8)
  gownCache = { body, near, flowers, edges }
  return gownCache
}

function PipInGown() {
  const g = pipInGown()
  const [fx, fy, frx, fry] = FLUSH
  return (
    <g transform={`translate(${PIP_AT[0]} ${PIP_AT[1]}) scale(${-PIP_SCALE} ${PIP_SCALE})`}>
      <Cut parts={g.body}>
        <path d={g.flowers + g.edges} fill={PAPER} />
        <g transform={PIP_HEAD}>
          <path d={PIP_HAIR_LINES} fill="none" stroke={PAPER} strokeWidth={1.1} />
          <path d={EAR} fill="none" stroke={PAPER} strokeWidth={1.1} />
          <path d={EYE + BROW_FINE} fill={PAPER} />
          {/* "I felt my face fire up as I looked at Joe" */}
          <ellipse cx={fx} cy={fy} rx={frx} ry={fry} fill={RED} />
        </g>
      </Cut>
      <Cut parts={g.near} />
    </g>
  )
}

function JoeInHolidayClothes() {
  return (
    <Person pose={JOE} at={JOE_AT} scale={1.3}>
      <g transform={JOE_HEAD}>
        <path
          d={JOE_SHIRT_COLLAR + JOE_CRAVAT}
          fill={PAPER}
          stroke={INK}
          strokeWidth={0.9}
          strokeLinejoin="round"
        />
      </g>
      {/* the hat held to his chest, and his hand under its brim */}
      <g transform={JOE_HAT}>
        <path d={TOP_HAT} fill={INK} stroke={PAPER} strokeWidth={2.4} strokeLinejoin="round" />
        <path d={TOP_HAT} fill={INK} />
        <path d={TOP_HAT_BAND} fill={PAPER} />
      </g>
      <Cut parts={[mitt([16, -98], -50, 1.2)]} />
    </Person>
  )
}

function JoesVisitToLondon({ uid }: ArtProps) {
  const m = marks()
  const id = { glass: `${uid}-glass` }
  return (
    <>
      <defs>
        <clipPath id={id.glass}>
          <rect x={WIN.x0} y={WIN.y0} width={WIN.x1 - WIN.x0} height={WIN.y1 - WIN.y0} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [380, 170], push: 1.03 })}>
        <path d={m.paper} fill={PAPER} />
        <rect x={0} y={FLOOR - 6} width={W} height={6} fill={PAPER} />
        <path d={m.floor} fill={PAPER} />
        <Window clip={id.glass} />
        <ChimneyPiece />
        <Table />
        <PipInGown />
        <JoeInHolidayClothes />
      </g>
    </>
  )
}

export const joesVisitToLondon: LinocutArt = { width: W, height: H, Draw: JoesVisitToLondon }
