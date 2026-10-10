import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  between,
  clamp,
  gouge,
  gougeField,
  n,
  rays,
  rng,
  wedge,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import {
  Figure,
  HEAD_JANE,
  HEAD_MRS_REED,
  HOLD_HAND,
  JaneFace,
  LOOSE_HAND,
  MRS_REED_CAP,
  MRS_REED_CAP_FRILL,
  MRS_REED_CUTS,
  MRS_REED_HAIR,
  MRS_REED_HAIR_LINES,
  OPEN_HAND,
  handAt,
  headAt,
  line,
  woman,
  type P,
  type Part,
} from './people'

/**
 * Chapter 21: "Mrs Reed's confession", the eleventh moment in the guide's
 * timeline. Every detail is from the held edition
 * (src/data/full-texts/jane-eyre.ts).
 *
 * THE MOMENT DRAWN. The end of the confession, when Jane offers her
 * forgiveness and her aunt draws away: "you have my full and free
 * forgiveness: ask now for God's, and be at peace"; "I covered her ice-cold
 * and clammy hand with mine: the feeble fingers shrank from my touch".
 * Nothing that follows that night is drawn or captioned.
 *
 * - "There was the great four-post bed with amber hangings as of old; there
 *   the toilet-table, the armchair, and the footstool, at which I had a
 *   hundred times been sentenced to kneel"; "Go to my dressing-case, open it,
 *   and take out a letter you will see there". So the great bed stands with
 *   its hangings, the toilet-table and the open dressing-case are at the
 *   left, and the footstool stands on the floor; Jane has John Eyre's letter
 *   in her hand. The amber of the hangings is left to the words.
 * - "It was a wet and windy afternoon"; "The rain beat strongly against the
 *   panes, the wind blew tempestuously"; "the fire was dying in the grate. I
 *   renewed the fuel". So rain slants across the window, and a low fire,
 *   the spot colour, burns at the right, well away from both women.
 * - "the patient lay still ... her livid face sunk in the pillows". So Mrs
 *   Reed lies propped on her piled pillows, her face turned from Jane, as the
 *   figure kit cuts her, in her white cap.
 * - Jane as the kit cuts her grown, in her black frock, at the bedside.
 *
 * Seeds: 1101 to 1106.
 */

const W = 860
const H = 340
/** Where the wall meets the floor. */
const FLOOR = 262
const WIN = { x0: 40, x1: 144, top: 34, sill: 194 }
const BED = { head: 304, foot: 694, top: 26, deck: 204, side: 250 }
const FIRE = { x0: 742, x1: 856, mantel: 150, grate: [772, 830] as [number, number] }

type Marks = {
  wall: string
  floor: string
  shade: string
  rain: string
  glass: string
  hangings: string
  coverlet: string
  fireRays: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // The grey light of a wet afternoon from the window, and a little from the
  // fire on the right.
  const light = (x: number, y: number) => {
    const win = clamp(1 - Math.hypot((x - 92) * 0.8, y - 112) / 300) ** 1.2
    const fire = clamp(1 - Math.hypot(x - 800, (y - 236) * 1.3) / 150) * 0.45
    return Math.max(win, fire, 0.06)
  }
  const wall = gougeField(rng(1101), { x0: 0, x1: W, y0: 6, y1: FLOOR }, light, {
    spacing: 6.4,
    len: [16, 64],
  })
  // Floorboards running to a vanishing point behind the bed.
  const r = rng(1102)
  let floor = ''
  const V = [480, 40]
  for (let xt = -520; xt < 1400; xt += 34) {
    const xb = V[0] + (xt - V[0]) * ((H - V[1]) / (FLOOR - V[1]))
    let t0 = 0
    while (t0 < 1) {
      const t1 = Math.min(1, t0 + between(r, 0.3, 0.8))
      floor += wedge(
        xt + (xb - xt) * t0,
        FLOOR + (H - FLOOR) * t0,
        xt + (xb - xt) * t1,
        FLOOR + (H - FLOOR) * t1,
        0.8 + t0 * 2.6,
        0.8 + t1 * 2.6,
      )
      t0 = t1 + between(r, 0.02, 0.07)
    }
  }
  let shade = ''
  for (let y = FLOOR + 1; y < FLOOR + 20; y += 3)
    shade += gouge(0, y, W, y, 2.6 - (y - FLOOR) * 0.12)
  // "The rain beat strongly against the panes, the wind blew tempestuously":
  // long slanting strokes across the pale glass, driven by the wind.
  const rr = rng(1103)
  let rain = ''
  for (let i = 0; i < 64; i++) {
    const x = between(rr, WIN.x0 - 10, WIN.x1)
    const y = between(rr, WIN.top - 6, WIN.sill - 10)
    const len = between(rr, 10, 24)
    rain += gouge(x + len * 0.45, y, x, y + len, between(rr, 0.4, 0.7))
  }
  // The wet grey sky through the glass: broken rows of ink, heavier below.
  const glass = gougeField(
    rng(1104),
    { x0: WIN.x0, x1: WIN.x1, y0: WIN.top + 4, y1: WIN.sill },
    (x, y) => 0.12 + (y - WIN.top) / 520,
    { spacing: 6, len: [10, 30], gap: [6, 16], max: 2.2 },
  )
  // The hangings of the great four-post bed, behind the pillows: long folds.
  const rh = rng(1105)
  let hangings = ''
  for (let x = BED.head + 18; x < BED.foot - 14; x += 11) {
    const L = clamp(1 - Math.abs(x - 360) / 420) * 0.9 + 0.1
    hangings += wedge(
      x + between(rh, -1, 1),
      60,
      x + between(rh, -2, 2),
      BED.deck - 6,
      0.6,
      0.6 + L * 2.6,
    )
  }
  // The folds of the coverlet as it falls over the side of the bed.
  let coverlet = ''
  for (let x = 520; x < BED.foot - 10; x += 16) {
    coverlet += gouge(
      x + between(rh, -2, 2),
      BED.deck + 12,
      x + between(rh, -4, 4),
      BED.side - 2,
      0.9,
      between(rh, -1, 1),
    )
  }
  const fireRays = rays(rng(1106), 801, 250, { from: 12, to: 40, every: 10, width: 1.4 })
  cached = { wall, floor, shade, rain, glass, hangings, coverlet, fireRays }
  return cached
}

/** A post of the bed: a turned column on a square foot. */
function post(x: number) {
  return `M${x - 5} ${BED.top + 10}L${x + 5} ${BED.top + 10}L${x + 4} ${FLOOR - 30}L${x + 7} ${FLOOR - 26}L${x + 7} ${FLOOR}L${x - 7} ${FLOOR}L${x - 7} ${FLOOR - 26}L${x - 4} ${FLOOR - 30}Z`
}

/** The valance under the tester: a scalloped edge. */
const VALANCE = (() => {
  let d = `M${BED.head - 10} ${BED.top + 8}L${BED.foot + 10} ${BED.top + 8}L${BED.foot + 10} ${BED.top + 24}`
  for (let x = BED.foot + 10; x > BED.head - 10; x -= 26) {
    const x1 = Math.max(x - 26, BED.head - 10)
    d += `Q${(x + x1) / 2} ${BED.top + 36} ${x1} ${BED.top + 24}`
  }
  return d + 'Z'
})()

/** A curtain gathered and tied back at a post: full above the tie, a tail below. */
function gathered(x: number, dir: 1 | -1) {
  const f = dir
  return `M${x} ${BED.top + 30}C${x + f * 26} ${BED.top + 60} ${x + f * 30} 110 ${x + f * 10} 132C${x + f * 22} 160 ${x + f * 26} 210 ${x + f * 16} ${FLOOR - 6}L${x - f * 2} ${FLOOR - 6}C${x - f * 2} 200 ${x - f * 2} 150 ${x} 132Z`
}

// ── THE PEOPLE ──────────────────────────────────────────────────────────────

/**
 * Mrs Reed, propped on the high-piled pillows and turned from Jane towards
 * the wall: the kit's head, cap and features, the head laid back.
 */
const MR_HEAD = { at: [364, 160] as P, rot: 22, scale: 1.2 }
const MR_T = headAt(-1, MR_HEAD.at, MR_HEAD.rot, MR_HEAD.scale)
/** Her shoulders in a dark bed-gown, sunk in the pillows, and her arm on the sheet. */
const MR_SHOULDERS =
  'M372 186C380 180 396 178 408 182C418 186 424 194 426 204L380 206C374 200 370 192 372 186Z'
/** Her hand, drawing back from Jane's along the sheet. */
const MR_ARM: P[] = [
  [404, 192],
  [416, 204],
  [436, 207],
]
const MR_ARM_PARTS: Part[] = [
  { d: line(MR_ARM), w: 7.6, sep: 1.2 },
  ...LOOSE_HAND.map((q) => ({
    ...q,
    t: handAt(MR_ARM, 1, { parts: LOOSE_HAND, scale: 0.92, rot: 6 }),
  })),
]
const MRS_REED: Part[] = [{ d: MR_SHOULDERS }, ...MR_ARM_PARTS, { d: HEAD_MRS_REED, t: MR_T }]

/**
 * Jane, standing at the bedside and leaning over it, facing her aunt: her
 * near hand held out to cover her aunt's, the letter from the dressing-case
 * in her other hand.
 */
const J_HEAD = { d: HEAD_JANE, at: [486, 118] as P, rot: -14, scale: 1.1 }
const J_REACH: P[] = [
  [490, 152],
  [470, 182],
  [450, 204],
]
const J_LETTER_ARM: P[] = [
  [496, 152],
  [512, 186],
  [516, 218],
]
const JANE = woman({
  facing: -1,
  neck: [494, 146],
  waist: [502, 180],
  hemY: 322,
  head: J_HEAD,
  gown: { shoulder: 26, waistW: 18, front: 30, back: 36 },
  toes: [
    [482, 321],
    [494, 322],
  ],
  near: { arm: J_REACH, hand: { parts: OPEN_HAND, scale: 0.95, rot: 10 } },
  far: { arm: J_LETTER_ARM, hand: { parts: HOLD_HAND, scale: 0.95, rot: 30 } },
})
const J_T = headAt(-1, J_HEAD.at, J_HEAD.rot, J_HEAD.scale)
/** The folds of her black frock, cut in paper. */
const JANE_FOLDS =
  gouge(506, 192, 524, 316, 0.8, -0.6) +
  gouge(498, 194, 500, 318, 0.8, 0.4) +
  gouge(490, 192, 478, 314, 0.7, 0.8)
/** John Eyre's letter, open in her hand: a sheet with lines of writing. */
const LETTER = 'M506 222L534 216L540 252L512 258Z'
const LETTER_LINES = 'M512 228L532 224M513 234L533 230M514 240L534 236M515 246L528 243'

function MrsReedsConfession({ uid }: ArtProps) {
  const m = marks()
  const id = { glass: `${uid}-glass` }
  return (
    <>
      <defs>
        <clipPath id={id.glass}>
          <rect x={WIN.x0} y={WIN.top} width={WIN.x1 - WIN.x0} height={WIN.sill - WIN.top} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [440, 190], push: 1.03 })}>
        <path d={m.wall} fill={PAPER} />
        <rect x={0} y={FLOOR} width={W} height={H - FLOOR} fill={PAPER} />
        <path d={m.floor} fill={INK} />
        <path d={m.shade} fill={INK} />

        {/* the window: grey daylight, and the rain beating on the panes */}
        <rect
          x={WIN.x0 - 8}
          y={WIN.top - 8}
          width={WIN.x1 - WIN.x0 + 16}
          height={WIN.sill - WIN.top + 16}
          fill={INK}
        />
        <rect
          x={WIN.x0}
          y={WIN.top}
          width={WIN.x1 - WIN.x0}
          height={WIN.sill - WIN.top}
          fill={PAPER}
        />
        <g clipPath={`url(#${id.glass})`}>
          <path d={m.glass} fill={INK} />
          <g className="lc-drift-r">
            <path d={m.rain} fill={INK} />
          </g>
        </g>
        <g fill={INK}>
          <rect x={WIN.x0} y={110} width={WIN.x1 - WIN.x0} height={5} />
          <rect x={(WIN.x0 + WIN.x1) / 2 - 2} y={WIN.top} width={4} height={WIN.sill - WIN.top} />
          <rect x={WIN.x0} y={70} width={WIN.x1 - WIN.x0} height={2.6} />
          <rect x={WIN.x0} y={152} width={WIN.x1 - WIN.x0} height={2.6} />
        </g>
        <rect
          x={WIN.x0 - 14}
          y={WIN.sill + 4}
          width={WIN.x1 - WIN.x0 + 28}
          height={6}
          fill={PAPER}
        />
        {/* the window curtains, drawn back */}
        <path
          d={`M${WIN.x0 - 8} 18C${WIN.x0 + 4} 60 ${WIN.x0 - 2} 120 ${WIN.x0 - 12} ${FLOOR}L${WIN.x0 - 26} ${FLOOR}L${WIN.x0 - 26} 18Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.fine}
        />
        <path
          d={`M${WIN.x1 + 8} 18C${WIN.x1 - 4} 60 ${WIN.x1 + 2} 120 ${WIN.x1 + 12} ${FLOOR}L${WIN.x1 + 26} ${FLOOR}L${WIN.x1 + 26} 18Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.fine}
        />

        {/* the toilet-table, its glass, and the dressing-case standing open */}
        <rect x={180} y={194} width={104} height={8} fill={PAPER} />
        <path d="M186 202V262M278 202V262" stroke={PAPER} strokeWidth={3} />
        <ellipse cx={208} cy={164} rx={17} ry={24} fill={PAPER} />
        <ellipse cx={208} cy={164} rx={13} ry={20} fill={INK} />
        <path d={gouge(200, 152, 206, 176, 1.2, -1)} fill={PAPER} />
        <path d="M208 188V194M198 194H218" stroke={PAPER} strokeWidth={2.4} />
        <rect
          x={236}
          y={180}
          width={42}
          height={14}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.fine}
        />
        <path
          d="M238 180L232 156L272 152L276 180Z"
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.fine}
        />
        <path d="M240 178L236 160L270 157L272 178Z" fill={PAPER} />

        {/* the great four-post bed with its hangings */}
        <rect x={BED.head} y={56} width={BED.foot - BED.head} height={BED.deck - 56} fill={INK} />
        <path d={m.hangings} fill={PAPER} />
        <path d={post(BED.head)} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={post(BED.foot)} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <rect
          x={BED.head - 12}
          y={BED.top}
          width={BED.foot - BED.head + 24}
          height={10}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <path d={VALANCE} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={gouge(BED.head, BED.top + 18, BED.foot, BED.top + 18, 1)} fill={PAPER} />
        <path d={gathered(BED.head + 6, 1)} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={gathered(BED.foot - 6, -1)} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        {/* the high-piled pillows */}
        <g fill={PAPER} stroke={INK} strokeWidth={LINE.fine}>
          <path d="M318 210C316 198 322 190 336 190L404 194C414 196 416 204 412 212Z" />
          <path d="M318 192C314 180 322 170 336 170L392 174C402 176 404 186 398 194Z" />
          <path d="M320 172C316 158 326 150 340 150L380 154C390 156 392 166 386 174Z" />
        </g>

        {/* Mrs Reed, sunk in the pillows, her face turned from Jane */}
        <Figure parts={MRS_REED}>
          <g transform={MR_T}>
            <path d={MRS_REED_CUTS + MRS_REED_HAIR} fill={PAPER} />
            <path d={MRS_REED_HAIR_LINES} fill="none" stroke={INK} strokeWidth={0.8} />
            <path
              d={MRS_REED_CAP}
              fill={PAPER}
              stroke={INK}
              strokeWidth={1}
              strokeLinejoin="round"
            />
            <path d={MRS_REED_CAP_FRILL} fill="none" stroke={INK} strokeWidth={0.8} />
          </g>
        </Figure>
        {/* the coverlet over her, and falling over the side of the bed */}
        <path
          d={`M${BED.head + 14} 206C360 204 390 206 424 206C470 198 530 196 590 198C620 196 650 194 ${BED.foot - 14} 200L${BED.foot - 12} ${BED.side + 4}L${BED.head + 12} ${BED.side + 4}Z`}
          fill={PAPER}
          stroke={INK}
          strokeWidth={LINE.fine}
        />
        <path d={m.coverlet} fill={INK} />
        <path
          d="M430 214Q500 208 580 212M440 226Q520 220 600 226"
          stroke={INK}
          strokeWidth={0.8}
          fill="none"
        />
        <rect
          x={BED.head + 12}
          y={BED.side + 4}
          width={BED.foot - BED.head - 24}
          height={FLOOR - BED.side - 4}
          fill={INK}
        />
        {/* her hand on the sheet, outside the coverlet */}
        <Figure parts={MR_ARM_PARTS} halo={1.4} />

        {/* the fire burning low in the grate */}
        <rect
          x={FIRE.x0}
          y={FIRE.mantel}
          width={FIRE.x1 - FIRE.x0}
          height={FLOOR - FIRE.mantel}
          fill={PAPER}
        />
        <rect
          x={FIRE.x0 - 6}
          y={FIRE.mantel - 8}
          width={FIRE.x1 - FIRE.x0 + 12}
          height={8}
          fill={INK}
        />
        <rect
          x={FIRE.x0 - 10}
          y={FIRE.mantel - 12}
          width={FIRE.x1 - FIRE.x0 + 20}
          height={4}
          fill={PAPER}
        />
        <path
          d={`M${FIRE.grate[0]} ${FLOOR}V214Q${FIRE.grate[0]} 198 ${FIRE.grate[0] + 16} 198H${FIRE.grate[1] - 16}Q${FIRE.grate[1]} 198 ${FIRE.grate[1]} 214V${FLOOR}Z`}
          fill={INK}
        />
        <path d={m.fireRays} fill={PAPER} />
        <path
          d="M782 252H820M784 258H818M788 246V262M814 246V262"
          stroke={PAPER}
          strokeWidth={1.4}
          fill="none"
        />
        <g fill={RED}>
          <path d="M786 252C788 246 796 245 800 249C804 245 812 246 815 252Z" />
          <path
            className="lc-flicker"
            d="M795 247C793 242 795 238 797 234C799 238 801 242 799 247Z"
          />
          <path
            className="lc-flicker"
            style={timing({ dur: 0.8, delay: 0.4 })}
            d="M805 247C804 243 806 240 807 237C809 240 810 243 808 247Z"
          />
        </g>
        <rect x={FIRE.x0 - 4} y={FLOOR} width={FIRE.x1 - FIRE.x0 + 8} height={6} fill={PAPER} />

        {/* the footstool, where she was once sentenced to kneel */}
        <path
          d="M604 300C604 292 610 290 628 290C646 290 652 292 652 300L650 306H606Z"
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <path
          d="M610 306L608 320M646 306L648 320"
          stroke={INK}
          strokeWidth={3.4}
          strokeLinecap="round"
        />

        {/* Jane at the bedside, her hand held out to her aunt's, the letter in the other */}
        <Figure parts={JANE} cuts={JANE_FOLDS}>
          <path d={LETTER} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
          <path d={LETTER_LINES} stroke={INK} strokeWidth={0.8} />
          <JaneFace t={J_T} />
        </Figure>
      </g>
    </>
  )
}

export const mrsReedsConfession: LinocutArt = { width: W, height: H, Draw: MrsReedsConfession }
