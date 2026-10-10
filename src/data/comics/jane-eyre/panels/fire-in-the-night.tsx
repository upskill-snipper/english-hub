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
  wisps,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import {
  Figure,
  HEAD_JANE,
  HEAD_ROCHESTER,
  HOLD_HAND,
  JaneFace,
  OPEN_HAND,
  ROCHESTER_CUTS,
  ROCHESTER_EAR,
  ROCHESTER_HAIR,
  ROCHESTER_HAIRLINE,
  ROCHESTER_HAIR_CUTS,
  handAt,
  headAt,
  line,
  woman,
  type P,
  type Part,
} from './people'

/**
 * Chapter 15: "Fire in the night", the eighth moment in the guide's
 * timeline. Every detail is from the held edition
 * (src/data/full-texts/jane-eyre.ts).
 *
 * THE MOMENT DRAWN. Jane putting the fire out with her own water-jug: "I
 * rushed to his basin and ewer ... deluged the bed and its occupant, flew
 * back to my own room, brought my own water-jug, baptized the couch afresh".
 * The fire is in the curtains only, and no flame touches a person: the
 * water flies from the jug at the burning curtain at the foot of the bed,
 * and Rochester, at its head and well away from the flames, is raised on his
 * elbow, roused at last: "I heard him fulminating strange anathemas at
 * finding himself lying in a pool of water".
 *
 * - "I hurried on my frock and a shawl; I withdrew the bolt and opened the
 *   door with a trembling hand. There was a candle burning just outside, and
 *   on the matting in the gallery." So the door to the gallery stands open at
 *   the left, the candle on the matting outside it, and Jane wears her frock
 *   and a shawl, as the figure kit cuts her grown.
 * - "Tongues of flame darted round the bed: the curtains were on fire. In the
 *   midst of blaze and vapour, Mr. Rochester lay stretched motionless"; "the
 *   smoke rushed in a cloud from thence". So red tongues of flame run along
 *   the valance and climb the curtain at the bed's foot, and the smoke rolls
 *   along the ceiling and out over the door, cut as billows.
 * - "the carpet round swimming in water". So the floor shines with water.
 * - Rochester as the kit cuts him, in a white nightshirt, the coverlet over
 *   him to the waist.
 *
 * The laugh that wakes Jane, and whoever set the fire, are not drawn.
 *
 * Seeds: 801 to 809.
 */

const W = 860
const H = 340
/** Where the back wall meets the floor. */
const BASE = 296
/** The bed: its two posts, its tester and valance, the mattress, its side. */
const BED = { x0: 346, x1: 640, top: 46, valance: 66, mattress: 214, side: 254, foot: 284 }
/** The door to the gallery, standing ajar. */
const DOOR = { x0: 22, x1: 96, top: 92 }
/** "There was a candle burning just outside, and on the matting in the gallery." */
const CANDLE: P = [58, 282]
/** The heart of the fire, at the foot of the bed: the light comes from here. */
const FIRE: P = [380, 110]

/**
 * The smoke: a bank of rounded billows rolling up off the burning curtains,
 * along under the ceiling and out over the door. Each billow is [x, y, r].
 */
const BILLOWS: [number, number, number][] = [
  [400, 28, 24],
  [430, 34, 18],
  [366, 20, 22],
  [334, 32, 20],
  [302, 22, 24],
  [268, 32, 20],
  [236, 22, 22],
  [204, 34, 20],
  [172, 24, 22],
  [140, 38, 20],
  [112, 52, 19],
  [88, 68, 17],
  [70, 86, 15],
]
const circle = ([x, y, r]: [number, number, number]) =>
  `M${x - r} ${y}a${r} ${r} 0 1 0 ${r * 2} 0a${r} ${r} 0 1 0 ${-r * 2} 0Z`
const SMOKE = BILLOWS.map(circle).join('')

type Marks = {
  wall: string
  floor: string
  gallery: string
  candleRays: string
  curtains: string
  smoke: string
  curls: string
  glow: string
  wallGlow: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // The room is dark but for the fire: the plaster lightens round the
  // burning curtains and falls away into the corners.
  const light = (x: number, y: number) =>
    Math.max(clamp(1 - Math.hypot((x - FIRE[0]) * 0.8, y - FIRE[1]) / 420) ** 1.5, 0.05)
  const wall = gougeField(rng(801), { x0: 0, x1: W, y0: 0, y1: BASE }, light, {
    spacing: 7.4,
    len: [16, 54],
    gap: [8, 22],
    max: 3.6,
  })
  // The floor: boards running away from us, the firelight along them.
  const rf = rng(802)
  let floor = ''
  for (let y = BASE + 4; y < H; y += 5.5 + (y - BASE) * 0.1) {
    let x = between(rf, -20, 0)
    while (x < W) {
      const len = between(rf, 24, 80)
      const L = light(x + len / 2, y - 140)
      if (rf() < 0.3 + L) floor += gouge(x, y, x + len, y + between(rf, -0.4, 0.4), 0.5 + L * 2.6)
      x += len + between(rf, 6, 18)
    }
  }
  // The gallery through the door: dim, the candle's light on the matting.
  const gallery = gougeField(
    rng(803),
    { x0: DOOR.x0, x1: DOOR.x1, y0: DOOR.top, y1: BASE },
    (x, y) => clamp(1 - Math.hypot(x - CANDLE[0], (y - CANDLE[1]) * 1.4) / 110) * 0.8,
    { spacing: 5.5, len: [6, 18], gap: [5, 12], max: 2 },
  )
  const candleRays = rays(rng(804), CANDLE[0], CANDLE[1] - 18, {
    from: 9,
    to: 40,
    every: 13,
    width: 1.8,
  })
  // The curtains behind the bed: their folds cut in paper, brightest nearest
  // the fire.
  const rc = rng(805)
  let curtains = ''
  for (let x = BED.x0 + 18; x < BED.x1 - 8; x += between(rc, 10, 16)) {
    const L = light(x, 150)
    curtains += gouge(
      x,
      BED.valance + 20,
      x + between(rc, -3, 3),
      BED.mattress - 2,
      0.6 + L * 2.4,
      between(rc, -1, 1),
    )
  }
  const glow = rays(rng(808), FIRE[0] + 30, FIRE[1] + 30, {
    from: 40,
    to: 120,
    every: 9,
    width: 2.4,
  })
  // The firelight thrown on the wall round the bed's foot.
  const wallGlow = rays(rng(809), FIRE[0], FIRE[1], { from: 70, to: 170, every: 7, width: 2.2 })
  // The smoke, cut grey: curling strokes inside the billows.
  const smoke = wisps(rng(806), 9, { x0: 40, x1: 470, y0: 6, y1: 96 }, [2.4, 4.6])
  // The rolling edges of the billows, cut in ink.
  let curls = ''
  for (const [x, y, r] of BILLOWS)
    curls += `M${n(x - r * 0.7)} ${n(y + r * 0.45)}Q${n(x)} ${n(y + r * 0.1)} ${n(x + r * 0.6)} ${n(y + r * 0.55)}`
  cached = { wall, floor, gallery, candleRays, curtains, smoke, curls, glow, wallGlow }
  return cached
}

/**
 * A tongue of flame: a pointed lick curving up from its root, as the
 * counting-house fire's are cut. [x, y of its root, height, lean].
 */
type Lick = [number, number, number, number]
function lick([x, y, h, lean]: Lick) {
  const w = h * 0.3
  return (
    `M${n(x - w)} ${n(y)}` +
    `C${n(x - w * 1.3)} ${n(y - h * 0.35)} ${n(x - w * 0.2 + lean * 0.4)} ${n(y - h * 0.55)} ${n(x - w * 0.5 + lean * 0.6)} ${n(y - h * 0.75)}` +
    `C${n(x + lean * 0.5)} ${n(y - h * 0.82)} ${n(x + lean * 0.8)} ${n(y - h * 0.9)} ${n(x + lean)} ${n(y - h)}` +
    `C${n(x + w * 0.9 + lean * 0.6)} ${n(y - h * 0.62)} ${n(x + w * 1.5)} ${n(y - h * 0.32)} ${n(x + w)} ${n(y)}Z`
  )
}
/**
 * "Tongues of flame darted round the bed: the curtains were on fire." They
 * run along the valance over the foot of the bed and climb the curtain
 * gathered at the foot, and stop well short of the bedclothes and the
 * pillow: no flame touches a person.
 */
const LICKS: Lick[] = [
  // along the valance
  [344, 62, 42, -6],
  [360, 58, 58, 4],
  [378, 62, 50, -5],
  [396, 56, 66, 7],
  [414, 62, 52, -4],
  [432, 58, 58, 5],
  [450, 62, 42, -3],
  [468, 62, 34, 4],
  [486, 64, 24, -2],
  // up the curtain at the foot
  [356, 186, 46, -5],
  [374, 180, 58, 6],
  [390, 188, 40, -4],
  [362, 140, 44, 5],
  [382, 132, 52, -6],
  [358, 100, 38, 4],
  [378, 96, 46, -3],
]
/** The cut up the middle of each lick, so the blaze reads as many tongues. */
const LICK_CUTS = LICKS.map(([x, y, h, lean]) =>
  gouge(x, y - 3, x + lean * 0.5, y - h * 0.62, h * 0.035, lean * 0.08),
).join('')

// ── THE PEOPLE ──────────────────────────────────────────────────────────────

/**
 * Jane, "I hurried on my frock and a shawl", heaving her own water-jug at the
 * burning curtains: she leans into it, both hands on the jug, and the water
 * flies out of its lip onto the foot of the bed.
 */
const JANE_HEAD = { d: HEAD_JANE, at: [232, 152] as P, rot: 8, scale: 1.14 }
const JANE_T = headAt(1, JANE_HEAD.at, JANE_HEAD.rot, JANE_HEAD.scale)
const JANE_WAIST: P = [218, 214]
const JANE_NEAR: P[] = [
  [234, 190],
  [256, 200],
  [278, 190],
]
const JANE_FAR: P[] = [
  [226, 188],
  [248, 178],
  [268, 166],
]
const JANE = woman({
  facing: 1,
  neck: [230, 178],
  waist: JANE_WAIST,
  hemY: 322,
  head: JANE_HEAD,
  arm: 8,
  gown: { shoulder: 25, waistW: 17, front: 30, back: 30 },
  near: { arm: JANE_NEAR, hand: { parts: HOLD_HAND, scale: 0.92, rot: -70 } },
  far: { arm: JANE_FAR, hand: { parts: HOLD_HAND, scale: 0.92, rot: 30 } },
  toes: [[246, 320]],
})
/** Her shawl, round her shoulders and crossed at her breast. Cut grey. */
const SHAWL =
  'M214 176C222 172 234 174 240 180L244 202L234 216L222 208C216 216 208 228 202 238L198 214C200 198 206 184 214 176Z'
const SHAWL_CUTS = Array.from({ length: 7 }, (_, i) =>
  gouge(205 + i * 4, 184 + i * 2, 201 + i * 3, 228 - i * 3, 0.6),
).join('')
/**
 * Her water-jug, tipped forward, its lip at the right. In its own frame: the
 * foot at the origin, standing about 34 high; turned with JUG_T.
 */
const JUG =
  'M-12 0C-14 -10 -14 -19 -10 -26C-8 -30 -8 -32 -10 -35L12 -37C11 -33 11 -30 13 -26C17 -19 17 -10 13 0Z'
const JUG_LIP = 'M12 -37L19 -38L14 -32Z'
const JUG_HANDLE = 'M-11 -30C-19 -30 -21 -21 -19 -14C-17 -10 -14 -10 -13 -12'
const JUG_T = 'translate(276 184) rotate(70)'
/**
 * The water: three streams out of the lip, spreading as they fly and
 * breaking into drops over the foot of the bed. Stroked in PAPER over an ink
 * edge, so they read as water on the dark, and never as one blade.
 */
const STREAMS = [
  'M312 168C326 150 344 142 362 148',
  'M312 172C330 160 348 158 366 168',
  'M310 176C326 172 342 176 354 190',
]
const DROPS: [number, number, number][] = [
  [368, 142, 2.4],
  [376, 152, 2],
  [372, 164, 2.6],
  [380, 176, 2],
  [362, 186, 2.2],
  [358, 198, 1.8],
  [384, 190, 1.6],
  [350, 138, 1.6],
]

/**
 * Rochester, roused at last by the water: "I knew he was awake; because I
 * heard him fulminating strange anathemas at finding himself lying in a pool
 * of water." He has lifted his head and shoulders off the pillow at the head
 * of the bed, propped on his elbow, far from the burning curtains at its
 * foot, in his white nightshirt, his face turned towards Jane.
 */
const ROCH_HEAD = { d: HEAD_ROCHESTER, at: [596, 182] as P, rot: -16, scale: 1.12 }
const ROCH_T = headAt(-1, ROCH_HEAD.at, ROCH_HEAD.rot, ROCH_HEAD.scale)
/** His shoulders and chest in the nightshirt, propped up: PAPER, edged in ink. */
const NIGHTSHIRT =
  'M614 204C606 196 590 196 580 202C568 210 558 220 552 230L612 232C620 224 620 212 614 204Z'
/** His near arm, down to the elbow on the mattress and forward along it. */
const ROCH_ARM: P[] = [
  [584, 208],
  [574, 228],
  [552, 230],
]
const ROCH_PARTS: Part[] = [
  { d: NIGHTSHIRT, paper: true, edge: 1.2 },
  { d: HEAD_ROCHESTER, t: ROCH_T },
  { d: ROCHESTER_HAIR, t: ROCH_T },
  { d: line(ROCH_ARM), w: 9, paper: true, edge: 1 },
  ...OPEN_HAND.map((q) => ({
    ...q,
    t: handAt(ROCH_ARM, -1, { parts: OPEN_HAND, scale: 0.86, rot: 4 }),
  })),
]
/** The pillow at the head of the bed. */
const PILLOW =
  'M578 212C580 202 606 196 630 200C638 202 638 214 632 220C610 222 592 222 580 220C576 218 576 214 578 212Z'
/** The coverlet over him from the waist down, its foot short of the burning curtain. */
const COVERLET =
  'M560 230C536 226 506 224 476 225C454 226 436 226 414 228L412 252C460 256 530 256 600 254L634 252L634 234C612 234 586 232 560 230Z'
const COVERLET_CUTS =
  gouge(430, 238, 500, 242, 1, 1) +
  gouge(512, 236, 560, 238, 1, -1) +
  gouge(436, 248, 560, 250, 0.9)
/** The sheet at the foot of the bed, bare. */
const SHEET = 'M354 222L414 226L412 252L354 250Z'

function FireInTheNight({ uid }: ArtProps) {
  const m = marks()
  const id = { door: `${uid}-door`, bed: `${uid}-bed`, smoke: `${uid}-smoke`, wall: `${uid}-wall` }
  return (
    <>
      <defs>
        <clipPath id={id.door}>
          <rect x={DOOR.x0} y={DOOR.top} width={DOOR.x1 - DOOR.x0} height={BASE - DOOR.top} />
        </clipPath>
        <clipPath id={id.bed}>
          <rect
            x={BED.x0 + 8}
            y={BED.valance + 14}
            width={BED.x1 - BED.x0 - 16}
            height={BED.mattress - BED.valance - 14}
          />
        </clipPath>
        <clipPath id={id.smoke}>
          <path d={SMOKE} />
        </clipPath>
        <clipPath id={id.wall}>
          <path d={`M0 0H${BED.x0 - 10}V${BASE}H0Z`} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [400, 180], push: 1.03 })}>
        {/* the room by firelight */}
        <path d={m.wall} fill={PAPER} />
        <g clipPath={`url(#${id.wall})`}>
          <path d={m.wallGlow} fill={PAPER} />
        </g>
        <rect x={0} y={BASE} width={W} height={H - BASE} fill={INK} />
        <path d={m.floor} fill={PAPER} />
        <path d={`M0 ${BASE}H${W}`} stroke={PAPER} strokeWidth={LINE.fine} />

        {/* the door to the gallery, ajar, and the candle left burning on the
            matting outside it */}
        <rect
          x={DOOR.x0 - 6}
          y={DOOR.top - 6}
          width={DOOR.x1 - DOOR.x0 + 12}
          height={BASE - DOOR.top + 6}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <rect
          x={DOOR.x0}
          y={DOOR.top}
          width={DOOR.x1 - DOOR.x0}
          height={BASE - DOOR.top}
          fill={INK}
        />
        <g clipPath={`url(#${id.door})`}>
          <path d={m.gallery} fill={PAPER} />
          <path d={m.candleRays} fill={PAPER} />
        </g>
        <path
          d={`M${CANDLE[0] - 9} ${CANDLE[1] + 2}h18v4h-18Z`}
          fill={PAPER}
          stroke={INK}
          strokeWidth={1}
        />
        <rect
          x={CANDLE[0] - 3}
          y={CANDLE[1] - 14}
          width={6}
          height={16}
          fill={PAPER}
          stroke={INK}
          strokeWidth={1}
        />
        <path
          className="lc-flicker"
          style={timing({ dur: 0.8 })}
          d={`M${CANDLE[0]} ${CANDLE[1] - 15}C${CANDLE[0] - 3.5} ${CANDLE[1] - 19} ${CANDLE[0] - 2} ${CANDLE[1] - 24} ${CANDLE[0]} ${CANDLE[1] - 29}C${CANDLE[0] + 2} ${CANDLE[1] - 24} ${CANDLE[0] + 3.5} ${CANDLE[1] - 19} ${CANDLE[0]} ${CANDLE[1] - 15}Z`}
          fill={PAPER}
        />
        {/* the leaf of the door, swung back into the room */}
        <path
          d={`M${DOOR.x1} ${DOOR.top}L${DOOR.x1 + 26} ${DOOR.top - 12}L${DOOR.x1 + 26} ${BASE + 16}L${DOOR.x1} ${BASE}Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <path d={gouge(DOOR.x1 + 13, DOOR.top + 14, DOOR.x1 + 13, BASE - 10, 0.9)} fill={PAPER} />
        <circle cx={DOOR.x1 + 20} cy={200} r={2.2} fill={PAPER} />

        {/* his washstand, and the basin she emptied first, put back on it */}
        <g fill={INK} stroke={PAPER} strokeWidth={LINE.carve}>
          <rect x={700} y={208} width={86} height={8} />
          <path d="M706 216V292M780 216V292M706 262H780" fill="none" strokeWidth={4} />
        </g>
        <path
          d="M718 206C720 196 766 196 768 206Z"
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.fine}
        />
        {/* "the carpet round swimming in water" */}
        <path
          d={
            gouge(440, 304, 540, 306, 1.4) +
            gouge(560, 310, 680, 309, 1.2) +
            gouge(380, 318, 480, 320, 1.2) +
            gouge(520, 326, 640, 328, 1)
          }
          fill={PAPER}
        />

        {/* the bed: the curtains behind, its tester and valance, the curtain
            gathered at its foot, the curtain at its head */}
        <rect
          x={BED.x0 + 6}
          y={BED.valance + 8}
          width={BED.x1 - BED.x0 - 12}
          height={BED.mattress - BED.valance - 8}
          fill={INK}
        />
        <g clipPath={`url(#${id.bed})`}>
          <path d={m.glow} fill={PAPER} />
        </g>
        <path d={m.curtains} fill={PAPER} />
        <rect
          x={BED.x0 - 8}
          y={BED.top}
          width={BED.x1 - BED.x0 + 16}
          height={BED.valance - BED.top}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <path
          d={`M${BED.x0 - 8} ${BED.valance}${Array.from({ length: 12 }, (_, i) => {
            const step = (BED.x1 - BED.x0 + 16) / 12
            const x = BED.x0 - 8 + (i + 1) * step
            return `Q${n(x - step / 2)} ${BED.valance + 18} ${n(x)} ${BED.valance}`
          }).join('')}Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.fine}
        />
        <path
          d={`M${BED.x0 + 6} ${BED.valance + 8}C${BED.x0 + 46} ${BED.valance + 70} ${BED.x0 + 40} 210 ${BED.x0 + 22} ${BED.side + 10}L${BED.x0 + 4} ${BED.side + 10}Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.fine}
        />
        <path
          d={`M${BED.x1 - 6} ${BED.valance + 8}C${BED.x1 - 40} ${BED.valance + 70} ${BED.x1 - 34} 200 ${BED.x1 - 20} ${BED.side + 10}L${BED.x1 - 4} ${BED.side + 10}Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.fine}
        />
        <path d={gouge(BED.x1 - 12, BED.valance + 24, BED.x1 - 18, BED.side, 1, -2)} fill={PAPER} />

        {/* the mattress and the bed's side, the sheet at its foot, the
            pillow, Rochester, the coverlet over him */}
        <path
          d={`M${BED.x0 + 4} ${BED.mattress + 12}L${BED.x1 - 4} ${BED.mattress + 12}L${BED.x1 - 4} ${BED.foot}L${BED.x0 + 4} ${BED.foot}Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <path d={gouge(BED.x0 + 16, BED.side + 8, BED.x1 - 16, BED.side + 8, 1.4)} fill={PAPER} />
        <path d={SHEET} fill={PAPER} stroke={INK} strokeWidth={1} />
        <path d={PILLOW} fill={PAPER} stroke={INK} strokeWidth={1.2} />
        <path d={COVERLET} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={COVERLET_CUTS} fill={PAPER} />
        <Figure parts={ROCH_PARTS}>
          <g transform={ROCH_T}>
            <path d={ROCHESTER_HAIR_CUTS + ROCHESTER_CUTS} fill={PAPER} />
            <path
              d={ROCHESTER_HAIRLINE + ROCHESTER_EAR}
              fill="none"
              stroke={PAPER}
              strokeWidth={1.1}
              strokeLinecap="round"
            />
          </g>
        </Figure>
        {/* the posts, foot and head */}
        <g fill={INK} stroke={PAPER} strokeWidth={LINE.carve}>
          <rect x={BED.x0 - 7} y={BED.top - 8} width={13} height={BED.foot + 14 - BED.top} />
          <rect x={BED.x1 - 6} y={BED.top - 8} width={13} height={BED.foot + 14 - BED.top} />
        </g>
        <path
          d={
            wedge(BED.x0 - 1, BED.top + 6, BED.x0 - 1, BED.foot, 1.6, 1.6) +
            wedge(BED.x1, BED.top + 6, BED.x1, BED.foot, 1.2, 1.2)
          }
          fill={PAPER}
        />

        {/* "Tongues of flame darted round the bed: the curtains were on fire" */}
        <g fill={RED}>
          {LICKS.map((l, i) => (
            <path
              key={l[0] * 1000 + l[1]}
              className="lc-flicker"
              style={timing({ dur: 0.7 + (i % 3) * 0.15, delay: (i % 4) * 0.12 })}
              d={lick(l)}
            />
          ))}
        </g>
        <path d={LICK_CUTS} fill={INK} />

        {/* the smoke, rolling up along the ceiling and out over the door: a
            paper edge round the whole bank, then the bank, then its curls */}
        <g className="lc-drift-r" style={timing({ dur: 3.4 })}>
          <path d={SMOKE} fill={PAPER} stroke={PAPER} strokeWidth={3.2} />
          <path d={SMOKE} fill={INK} />
          <g clipPath={`url(#${id.smoke})`}>
            <path d={m.smoke} fill={PAPER} />
          </g>
          <path d={m.curls} fill="none" stroke={PAPER} strokeWidth={1.3} strokeLinecap="round" />
        </g>

        {/* the water, flung from the jug */}
        <g className="lc-fade-in" style={timing({ delay: 0.5, dur: 0.5 })}>
          <path
            d={STREAMS.join('')}
            fill="none"
            stroke={INK}
            strokeWidth={6}
            strokeLinecap="round"
          />
          <path
            d={STREAMS.join('')}
            fill="none"
            stroke={PAPER}
            strokeWidth={3.2}
            strokeLinecap="round"
          />
          <g fill={PAPER} stroke={INK} strokeWidth={1}>
            {DROPS.map(([x, y, r]) => (
              <circle key={x * 1000 + y} cx={x} cy={y} r={r} />
            ))}
          </g>
        </g>

        {/* Jane, with the jug */}
        <Figure parts={JANE}>
          <path d={SHAWL} fill={INK} stroke={PAPER} strokeWidth={1.2} />
          <path d={SHAWL_CUTS} fill={PAPER} />
          <JaneFace t={JANE_T} tucker={false} />
        </Figure>
        <g transform={JUG_T}>
          <path
            d={JUG + JUG_LIP}
            fill={INK}
            stroke={PAPER}
            strokeWidth={1.8}
            strokeLinejoin="round"
          />
          <path d={JUG_HANDLE} fill="none" stroke={PAPER} strokeWidth={6} strokeLinecap="round" />
          <path d={JUG_HANDLE} fill="none" stroke={INK} strokeWidth={3.6} strokeLinecap="round" />
          <path d={gouge(5, -5, 7, -28, 1.4, -0.6)} fill={PAPER} />
        </g>
      </g>
    </>
  )
}

export const fireInTheNight: LinocutArt = { width: W, height: H, Draw: FireInTheNight }
