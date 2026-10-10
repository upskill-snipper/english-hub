import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  between,
  clamp,
  gouge,
  gougeField,
  n,
  rays,
  ribbon,
  rng,
  wedge,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import {
  BERTHA_HAIR,
  BerthaFace,
  Figure,
  HEAD_BERTHA,
  HEAD_JANE,
  HOLD_HAND,
  JaneFace,
  LOOSE_HAND,
  gown,
  headAt,
  woman,
  type P,
} from './people'

/**
 * Chapter 25: "The torn veil", the fourteenth moment in the guide's
 * timeline. Every detail is from the held edition
 * (src/data/full-texts/jane-eyre.ts).
 *
 * THE MOMENT DRAWN. The stranger in Jane's room, the veil torn: "It seemed,
 * sir, a woman, tall and large, with thick and dark hair hanging long down
 * her back. I know not what dress she had on: it was white and straight";
 * she "rent it in two parts, and flinging both on the floor, trampled on
 * them". So Bertha stands holding one torn half up from her hand, the other
 * half lies at her feet, and nobody is touched.
 *
 * BERTHA is drawn as a woman, with the same dignity as every other figure
 * (the rule in ../index.ts), as the figure kit cuts her (./people.tsx) and
 * as her portrait draws her: upright, her face calm and grave, cut in paper
 * where the candle lights it, her thick dark hair hanging long down her
 * back, a plain white gown, straight from the shoulder, its back in shadow.
 * None of the novel's words that make her less than human is drawn.
 *
 * - "There was a light in the dressing-table, and the door of the closet,
 *   where, before going to bed, I had hung my wedding-dress and veil, stood
 *   open"; "I saw the reflection of the visage and features quite distinctly
 *   in the dark oblong glass". So the candle on the dressing-table is the one
 *   light, the dark oblong glass hangs over it, and the closet stands open
 *   with the wedding-dress inside. Jane's trunks stand corded along the wall.
 * - "I had risen up in bed, I bent forward". So Jane, in her white
 *   night-dress, sits up in her bed at the left, as the kit cuts her grown.
 *
 * The candle's flame is the spot colour, on the table and in the glass,
 * well away from both women.
 *
 * Seeds: 1401 to 1408.
 */

const W = 860
const H = 340
const FLOOR = 268
/** The candle on the dressing-table, and the dark oblong glass above it. */
const CANDLE = { x: 664, y: 206 }
const GLASS = { x0: 626, x1: 724, top: 40, bottom: 190 }
const TABLE = { x0: 588, x1: 772, top: 226 }
/** The closet, its door standing open, where the wedding-dress hangs. */
const CLOSET = { x0: 282, x1: 346, top: 64 }
/** Jane's bed, its head against the wall on the left. */
const BED = { x0: 24, x1: 262, deck: 238 }

type Marks = {
  wall: string
  floor: string
  candleRays: string
  embroidery: string
  gownShade: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // Night: the one light is the candle on the dressing-table.
  const light = (x: number, y: number) =>
    Math.max(clamp(1 - Math.hypot((x - CANDLE.x) * 0.72, (y - CANDLE.y) * 1.05) / 360) ** 1.4, 0.03)
  const wall = gougeField(rng(1401), { x0: 0, x1: W, y0: 6, y1: FLOOR }, light, {
    spacing: 6.6,
    len: [16, 60],
  })
  const r = rng(1402)
  let floor = ''
  const V = [560, 40]
  for (let xt = -480; xt < 1500; xt += 36) {
    const xb = V[0] + (xt - V[0]) * ((H - V[1]) / (FLOOR - V[1]))
    let t0 = 0
    while (t0 < 1) {
      const t1 = Math.min(1, t0 + between(r, 0.3, 0.8))
      const xa = xt + (xb - xt) * t0
      const L = light(xa, FLOOR + 30)
      if (r() < 0.25 + L * 1.4)
        floor += wedge(
          xa,
          FLOOR + (H - FLOOR) * t0,
          xt + (xb - xt) * t1,
          FLOOR + (H - FLOOR) * t1,
          0.6 + L * 3,
          0.6 + L * 3,
        )
      t0 = t1 + between(r, 0.02, 0.07)
    }
  }
  const candleRays = rays(rng(1403), CANDLE.x, CANDLE.y - 10, {
    from: 18,
    to: 170,
    every: 6,
    width: 2.6,
  })
  // The veil's embroidery: small sprigs scattered over both halves.
  const re = rng(1404)
  let embroidery = ''
  for (const [x0, y0, x1, y1, count] of [
    [VEIL.x0 + 6, VEIL.top + 10, VEIL.x1 - 8, VEIL.hem - 8, 16],
    [FALLEN.x0 + 8, FALLEN.y - 8, FALLEN.x1 - 10, FALLEN.y + 6, 7],
  ]) {
    for (let i = 0; i < count; i++) {
      const x = between(re, x0, x1)
      const y = between(re, y0, y1)
      embroidery += `M${n(x)} ${n(y)}m-1.1 0a1.1 1.1 0 1 0 2.2 0a1.1 1.1 0 1 0 -2.2 0`
    }
  }
  const rh = rng(1405)
  // The back of her gown, away from the candle, goes into the shadow.
  let gownShade = ''
  for (let x = 424; x < 470; x += 4.6) {
    const top = 150 + (470 - x) * 0.3
    gownShade += gouge(x, top, x - 10, 316, 0.75, between(rh, -0.4, 0.4))
  }
  cached = { wall, floor, candleRays, embroidery, gownShade }
  return cached
}

// ── THE VEIL ────────────────────────────────────────────────────────────────

/**
 * The half she still holds up, hanging from her hand by its corner: the
 * scalloped border down one side, the torn edge ragged down the other.
 */
const VEIL = { x0: 532, x1: 584, top: 138, hem: 262 }
const VEIL_HELD = (() => {
  let torn = ''
  for (let y = VEIL.top + 26; y < VEIL.hem - 4; y += 10) {
    const k = (y - VEIL.top) / (VEIL.hem - VEIL.top)
    torn += `L${n(VEIL.x1 + k * 8 + 5)} ${y}L${n(VEIL.x1 + k * 8 - 2)} ${y + 5}`
  }
  // The top edge droops from the corner in her hand to the far corner.
  return `M${VEIL.x0 + 4} ${VEIL.top}Q${VEIL.x0 + 26} ${VEIL.top + 6} ${VEIL.x1 - 2} ${VEIL.top + 20}${torn}L${VEIL.x1 + 10} ${VEIL.hem}Q${VEIL.x0 + 18} ${VEIL.hem + 6} ${VEIL.x0 - 6} ${VEIL.hem - 4}C${VEIL.x0 - 4} ${VEIL.top + 80} ${VEIL.x0 + 2} ${VEIL.top + 30} ${VEIL.x0 + 4} ${VEIL.top}Z`
})()
/** Its scalloped border, down the edge that is not torn. */
const VEIL_BORDER = (() => {
  let d = `M${VEIL.x0 + 6} ${VEIL.top + 6}`
  for (let k = 0; k < 11; k++) {
    const y = VEIL.top + 6 + k * 10.6
    const x = VEIL.x0 + 6 - k * 1.1
    d += `Q${n(x + 5)} ${n(y + 5.3)} ${n(x - 1.1)} ${n(y + 10.6)}`
  }
  return d
})()
/** Folds down the half she holds. */
const VEIL_FOLDS = `M${VEIL.x0 + 22} ${VEIL.top + 8}Q${VEIL.x0 + 18} ${VEIL.top + 70} ${VEIL.x0 + 16} ${VEIL.hem - 6}M${VEIL.x0 + 38} ${VEIL.top + 8}Q${VEIL.x0 + 38} ${VEIL.top + 70} ${VEIL.x0 + 42} ${VEIL.hem - 4}`
/**
 * The other half, flung down on the floor at her feet: spread and crumpled,
 * its torn edge ragged towards her, its scalloped border away from her.
 */
const FALLEN = { x0: 512, x1: 640, y: 312 }
const VEIL_FALLEN = (() => {
  // The torn edge along the top, in sharp teeth; the scalloped border below.
  let edge = ''
  for (let k = 1; k * 10 < FALLEN.x1 - FALLEN.x0 - 6; k++)
    edge += `L${FALLEN.x0 + k * 10 - 5} ${FALLEN.y - 12}L${FALLEN.x0 + k * 10} ${FALLEN.y - 3}`
  let hem = ''
  for (let x = FALLEN.x1 - 6; x > FALLEN.x0 + 6; x -= 12)
    hem += `Q${x - 6} ${FALLEN.y + 20} ${x - 12} ${FALLEN.y + 14}`
  return `M${FALLEN.x0} ${FALLEN.y + 6}L${FALLEN.x0 + 2} ${FALLEN.y - 4}${edge}L${FALLEN.x1} ${FALLEN.y - 2}L${FALLEN.x1 - 4} ${FALLEN.y + 12}L${FALLEN.x1 - 6} ${FALLEN.y + 14}${hem}Q${FALLEN.x0 - 2} ${FALLEN.y + 14} ${FALLEN.x0} ${FALLEN.y + 6}Z`
})()
const FALLEN_FOLDS = `M${FALLEN.x0 + 16} ${FALLEN.y + 2}Q${FALLEN.x0 + 44} ${FALLEN.y + 8} ${FALLEN.x0 + 64} ${FALLEN.y + 2}M${FALLEN.x0 + 60} ${FALLEN.y + 9}Q${FALLEN.x0 + 90} ${FALLEN.y + 3} ${FALLEN.x1 - 14} ${FALLEN.y + 7}`

// ── THE PEOPLE ──────────────────────────────────────────────────────────────

/**
 * Bertha, as the kit cuts her (HEAD_BERTHA, BerthaFace) and the portrait
 * draws her: a tall woman, upright, her face calm and grave, cut in PAPER
 * where the candle in front of her lights it; her thick dark hair loose over
 * the ear and long down her back; a plain white gown, straight from the
 * shoulder, its back in the shadow.
 */
const B_HEAD = { d: HEAD_BERTHA, at: [470, 100] as P, rot: 5, scale: 1.24 }
/** Her gown's outline, the same one the figure is cut with: the shadow is clipped to it. */
const B_GOWN = gown([468, 132], [466, 196], 318, 1, {
  shoulder: 34,
  waistW: 30,
  front: 34,
  back: 40,
})
/** Her near arm raised, the torn half of the veil hanging from her hand. */
const B_NEAR: P[] = [
  [476, 142],
  [500, 172],
  [528, 144],
]
const BERTHA = woman({
  facing: 1,
  neck: [468, 132],
  waist: [466, 196],
  hemY: 318,
  head: B_HEAD,
  hair: BERTHA_HAIR,
  skirt: B_GOWN,
  arm: 9,
  paperGown: true,
  arms: 'bare',
  near: { arm: B_NEAR, hand: { parts: HOLD_HAND, scale: 1.1, rot: 40 } },
  far: {
    arm: [
      [464, 142],
      [458, 186],
      [466, 226],
    ],
    hand: { parts: LOOSE_HAND, scale: 1.05, rot: 6 },
  },
})

/** Her body, and her near arm and hand, which go over the veil she holds. */
const ARM_FROM = BERTHA.findIndex((q) => q.d === HEAD_BERTHA) + 1
const BERTHA_BODY = BERTHA.slice(0, ARM_FROM)
const BERTHA_ARM = BERTHA.slice(ARM_FROM)

/**
 * Jane, risen up in bed and bent forward: "I had risen up in bed, I bent
 * forward". Her night-dress is white; the coverlet is over her to the waist.
 */
const J_HEAD = { at: [164, 156] as P, rot: 14, scale: 1.04 }
const JANE = woman({
  facing: 1,
  neck: [156, 183],
  waist: [138, 214],
  hemY: 240,
  head: { d: HEAD_JANE, ...J_HEAD },
  gown: { shoulder: 22, waistW: 18, front: 18, back: 18 },
  arm: 7,
  paperGown: true,
  arms: 'bare',
  near: {
    arm: [
      [160, 190],
      [180, 210],
      [202, 228],
    ],
    hand: { parts: HOLD_HAND, scale: 0.9, rot: 10 },
  },
  far: {
    arm: [
      [152, 190],
      [162, 214],
      [182, 232],
    ],
    hand: { parts: HOLD_HAND, scale: 0.88, rot: 6 },
  },
})

function TheTornVeil({ uid }: ArtProps) {
  const m = marks()
  const id = { glass: `${uid}-glass`, gown: `${uid}-gown` }
  const bt = headAt(1, B_HEAD.at, B_HEAD.rot, B_HEAD.scale)
  const jt = headAt(1, J_HEAD.at, J_HEAD.rot, J_HEAD.scale)
  return (
    <>
      <defs>
        <clipPath id={id.glass}>
          <rect
            x={GLASS.x0}
            y={GLASS.top}
            width={GLASS.x1 - GLASS.x0}
            height={GLASS.bottom - GLASS.top}
          />
        </clipPath>
        <clipPath id={id.gown}>
          <path d={B_GOWN} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [520, 200], push: 1.03 })}>
        <path d={m.wall} fill={PAPER} />
        <path d={m.candleRays} fill={PAPER} />
        <path d={m.floor} fill={PAPER} />

        {/* the closet, its door standing open, the wedding-dress inside */}
        <rect
          x={CLOSET.x0 - 6}
          y={CLOSET.top - 6}
          width={CLOSET.x1 - CLOSET.x0 + 12}
          height={FLOOR - CLOSET.top + 6}
          fill={PAPER}
        />
        <rect
          x={CLOSET.x0}
          y={CLOSET.top}
          width={CLOSET.x1 - CLOSET.x0}
          height={FLOOR - CLOSET.top}
          fill={INK}
        />
        <path
          d={`M${CLOSET.x0 + 10} ${CLOSET.top + 14}H${CLOSET.x1 - 10}`}
          stroke={PAPER}
          strokeWidth={1.4}
        />
        <path
          d={`M${CLOSET.x0 + 30} ${CLOSET.top + 14}L${CLOSET.x0 + 22} ${CLOSET.top + 26}L${CLOSET.x0 + 16} ${CLOSET.top + 60}L${CLOSET.x0 + 8} ${FLOOR - 40}L${CLOSET.x1 - 8} ${FLOOR - 40}L${CLOSET.x1 - 16} ${CLOSET.top + 60}L${CLOSET.x1 - 22} ${CLOSET.top + 26}Z`}
          fill={PAPER}
          stroke={INK}
          strokeWidth={LINE.fine}
        />
        <path
          d={`M${CLOSET.x0 + 24} ${CLOSET.top + 64}L${CLOSET.x0 + 18} ${FLOOR - 44}M${CLOSET.x0 + 34} ${CLOSET.top + 64}V${FLOOR - 44}M${CLOSET.x1 - 22} ${CLOSET.top + 64}L${CLOSET.x1 - 16} ${FLOOR - 44}`}
          stroke={INK}
          strokeWidth={0.8}
        />
        <path
          d={`M${CLOSET.x1} ${CLOSET.top}L${CLOSET.x1 + 24} ${CLOSET.top + 12}L${CLOSET.x1 + 24} ${FLOOR + 10}L${CLOSET.x1} ${FLOOR}Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />

        {/* the trunks, packed and corded, along the wall */}
        <g fill={INK} stroke={PAPER} strokeWidth={LINE.carve}>
          <path
            d={`M784 ${FLOOR}V${FLOOR - 40}Q784 ${FLOOR - 46} 790 ${FLOOR - 46}H848Q854 ${FLOOR - 46} 854 ${FLOOR - 40}V${FLOOR}Z`}
          />
          <path
            d={`M792 ${FLOOR - 46}V${FLOOR - 78}Q792 ${FLOOR - 84} 798 ${FLOOR - 84}H842Q848 ${FLOOR - 84} 848 ${FLOOR - 78}V${FLOOR - 46}Z`}
          />
        </g>
        <path
          d={`M804 ${FLOOR - 84}V${FLOOR}M834 ${FLOOR - 84}V${FLOOR}M784 ${FLOOR - 22}H854M792 ${FLOOR - 64}H848`}
          stroke={PAPER}
          strokeWidth={LINE.fine}
        />

        {/* the dressing-table and the dark oblong glass */}
        <rect
          x={GLASS.x0 - 8}
          y={GLASS.top - 8}
          width={GLASS.x1 - GLASS.x0 + 16}
          height={GLASS.bottom - GLASS.top + 16}
          fill={PAPER}
        />
        <rect
          x={GLASS.x0}
          y={GLASS.top}
          width={GLASS.x1 - GLASS.x0}
          height={GLASS.bottom - GLASS.top}
          fill={INK}
        />
        <g clipPath={`url(#${id.glass})`}>
          {/* the candle's flame, small and dim in the glass */}
          <path
            d={`M${CANDLE.x + 10} 178C${CANDLE.x + 7} 174 ${CANDLE.x + 8} 168 ${CANDLE.x + 10} 162C${CANDLE.x + 12} 168 ${CANDLE.x + 13} 174 ${CANDLE.x + 10} 178Z`}
            fill={RED}
          />
          <path
            d={
              gouge(GLASS.x0 + 12, GLASS.top + 16, GLASS.x0 + 34, GLASS.top + 70, 1.4) +
              gouge(GLASS.x1 - 22, GLASS.top + 20, GLASS.x1 - 10, GLASS.top + 50, 0.9)
            }
            fill={PAPER}
          />
        </g>
        <rect x={TABLE.x0} y={TABLE.top} width={TABLE.x1 - TABLE.x0} height={9} fill={PAPER} />
        <path
          d={`M${TABLE.x0 + 10} ${TABLE.top + 9}V${FLOOR + 4}M${TABLE.x1 - 10} ${TABLE.top + 9}V${FLOOR + 4}`}
          stroke={PAPER}
          strokeWidth={3.4}
        />
        {/* the candle in its stick */}
        <path
          d={`M${CANDLE.x - 13} ${TABLE.top}H${CANDLE.x + 13}L${CANDLE.x + 7} ${TABLE.top - 5}H${CANDLE.x - 7}Z`}
          fill={PAPER}
        />
        <rect
          x={CANDLE.x - 3.4}
          y={CANDLE.y}
          width={6.8}
          height={TABLE.top - CANDLE.y - 5}
          fill={PAPER}
        />
        <path
          className="lc-flicker"
          d={`M${CANDLE.x} ${CANDLE.y - 1}C${CANDLE.x - 5} ${CANDLE.y - 6} ${CANDLE.x - 4} ${CANDLE.y - 13} ${CANDLE.x} ${CANDLE.y - 21}C${CANDLE.x + 4} ${CANDLE.y - 13} ${CANDLE.x + 5} ${CANDLE.y - 6} ${CANDLE.x} ${CANDLE.y - 1}Z`}
          fill={RED}
        />

        {/* Jane's bed, and Jane risen up in it, bent forward */}
        <rect
          x={BED.x0}
          y={120}
          width={14}
          height={FLOOR - 120}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <Figure parts={JANE}>
          <JaneFace t={jt} tucker={false} />
        </Figure>
        <path
          d={`M${BED.x0 + 14} ${BED.deck}C80 226 150 228 186 232C214 230 240 232 ${BED.x1} ${BED.deck}L${BED.x1 + 4} ${BED.deck + 26}L${BED.x0 + 14} ${BED.deck + 26}Z`}
          fill={PAPER}
          stroke={INK}
          strokeWidth={LINE.fine}
        />
        <path
          d="M70 244Q120 238 170 244M90 254Q150 249 210 255"
          stroke={INK}
          strokeWidth={0.9}
          fill="none"
        />
        <rect
          x={BED.x0 + 14}
          y={BED.deck + 26}
          width={BED.x1 - BED.x0 - 10}
          height={FLOOR - BED.deck - 26}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.fine}
        />
        <rect
          x={BED.x1 - 6}
          y={BED.deck - 20}
          width={12}
          height={FLOOR - BED.deck + 20}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />

        {/* the half of the veil flung down at her feet */}
        <path d={VEIL_FALLEN} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
        <path d={FALLEN_FOLDS} fill="none" stroke={INK} strokeWidth={0.8} />

        {/* Bertha, the torn half of the veil in her hand */}
        <Figure parts={BERTHA_BODY}>
          <g clipPath={`url(#${id.gown})`}>
            <path d={m.gownShade} fill={INK} />
          </g>
          <BerthaFace t={bt} />
        </Figure>
        <path
          d={VEIL_HELD}
          fill={PAPER}
          stroke={INK}
          strokeWidth={LINE.fine}
          strokeLinejoin="round"
        />
        <path d={VEIL_BORDER + VEIL_FOLDS} fill="none" stroke={INK} strokeWidth={0.9} />
        <path d={m.embroidery} fill={INK} />
        <Figure parts={BERTHA_ARM} halo={0} />
      </g>
    </>
  )
}

export const theTornVeil: LinocutArt = { width: W, height: H, Draw: TheTornVeil }
