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
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import {
  Figure,
  HEAD_JANE,
  HOLD_CUTS,
  HOLD_HAND,
  JaneFace,
  STRAW_BONNET,
  STRAW_BONNET_LINING,
  STRAW_BONNET_PLAIT,
  STRAW_BONNET_TIES,
  handAt,
  headAt,
  shawl,
  shawlBorder,
  shawlPin,
  woman,
  type P,
} from './people'

/**
 * Chapter 27: "Flight from Thornfield", the sixteenth moment in the guide's
 * timeline. Every detail is from the held edition
 * (src/data/full-texts/jane-eyre.ts).
 *
 * THE MOMENT DRAWN. Jane outside the gates at dawn, walking away: "Dim dawn
 * glimmered in the yard. The great gates were closed and locked; but a
 * wicket in one of them was only latched. Through that I departed: it, too,
 * I shut; and now I was out of Thornfield. A mile off, beyond the fields,
 * lay a road ... thither I bent my steps. No reflection was to be allowed
 * now: not one glance was to be cast back".
 *
 * - "It was yet night, but July nights are short: soon after midnight, dawn
 *   comes." So the sky is night over the house and pales to the dawn low
 *   ahead of her, where two bars of cloud catch the first light in the spot
 *   colour.
 * - The great gates are shut and locked between their piers in the yard
 *   wall, the wicket shut behind her; the grey battlemented front of the
 *   house and its rookery rise behind the wall ("the grey and battlemented
 *   hall ... its woods and dark rookery", Chapter 12).
 * - "I tied on my straw bonnet, pinned my shawl, took the parcel and my
 *   slippers, which I would not put on yet" (Chapter 27). So she wears the
 *   straw bonnet and the pinned shawl of the figure kit (./people.tsx) and
 *   carries her parcel, tied with string; the track across the fields leads
 *   on to the far road.
 *
 * Seeds: 1601 to 1611.
 */

const W = 860
const H = 340
/** The foot of the yard wall; the lane runs along in front of it. */
const WALL_FOOT = 296
const WALL_TOP = 200
/** The wall stops at the right-hand gate-pier; open country beyond. */
const WALL_END = 588
/** The far horizon, where the dawn comes up. */
const HORIZON = 244
const GATE = { x0: 336, x1: 556, top: 132, mid: 446 }
const PIERS: [number, number][] = [
  [308, 336],
  [556, 584],
]
/** The wicket in the right-hand leaf, shut behind her. */
const WICKET = { x0: 488, x1: 538, top: 192 }
const HOUSE = { x0: 40, x1: 290, top: 106, storey: 152 }
/** The near edge of the fields; the lane runs along below it. */
const VERGE = 304
/** A track across the fields, running out of sight towards the far road. */
const VANISH: P = [800, HORIZON + 3]
const TRACK = `M612 ${VERGE}L${VANISH[0]} ${VANISH[1]}L742 ${VERGE}Z`

/** The dawn: night over the house, brightest low on the horizon ahead of her. */
const dawn = (x: number, y: number) =>
  Math.max(clamp(1 - Math.hypot((x - 870) * 0.4, (y - 252) * 1.0) / 360) ** 1.2, 0.02)

/** Is (x, y) on the track across the fields? */
function onTrack(x: number, y: number) {
  if (y < VANISH[1] || y > VERGE) return false
  const t = (y - VANISH[1]) / (VERGE - VANISH[1])
  return x > VANISH[0] + (612 - VANISH[0]) * t - 2 && x < VANISH[0] + (742 - VANISH[0]) * t + 2
}

type Marks = {
  sky: string
  facade: string
  joints: string
  wall: string
  grain: string
  lane: string
  meadow: string
  hedges: string
  crowns: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // The sky: almost solid night over the house, the cuts widening into the
  // glow over the horizon until they run together.
  const sky = gougeField(rng(1601), { x0: 0, x1: W, y0: 4, y1: HORIZON }, dawn, {
    spacing: 6,
    len: [30, 110],
    gap: [5, 18],
    max: 6.4,
  })
  // The grey front in the first grey light: courses of ashlar, the joints
  // between the blocks cut in ink.
  const rf = rng(1602)
  let facade = ''
  let joints = ''
  for (let y = HOUSE.top + 8; y < WALL_TOP; y += 8) {
    facade += `M${HOUSE.x0} ${y}H${HOUSE.x1}`
    for (let x = HOUSE.x0 + between(rf, 4, 20); x < HOUSE.x1 - 6; x += between(rf, 22, 34))
      joints += `M${n(x)} ${y}V${y + 8}`
  }
  // The yard wall: rough coursed stone, its joints cut where the light reaches.
  const rw = rng(1603)
  let wall = ''
  for (let y = WALL_TOP + 9; y < WALL_FOOT - 2; y += 10) {
    let x = between(rw, -10, 4)
    while (x < WALL_END) {
      const len = between(rw, 18, 40)
      const L = 0.3 + dawn(x, y) * 1.4
      if (!(x + len > PIERS[0][0] - 2 && x < PIERS[1][1] + 2))
        wall += gouge(
          x,
          y,
          Math.min(x + len, WALL_END - 2),
          y + between(rw, -0.5, 0.5),
          0.5 + L * 1.3,
        )
      x += len + between(rw, 3, 7)
    }
  }
  // The gates' planks: a fine grain, the dawn catching the edge of each.
  const rg = rng(1611)
  let grain = ''
  for (let x = GATE.x0 + 4; x < GATE.x1 - 4; x += 18) {
    grain += wedge(x + 16, GATE.top + 6, x + 16, WALL_FOOT - 2, 1.1, 1.6)
    for (let k = 0; k < 4; k++) {
      const gx = x + 3 + k * 3.4
      if (gx > WICKET.x0 - 2 && gx < WICKET.x1 + 2) continue
      let y = GATE.top + 8 + between(rg, 0, 20)
      while (y < WALL_FOOT - 6) {
        const len = between(rg, 14, 40)
        grain += gouge(gx, y, gx + between(rg, -0.4, 0.4), Math.min(y + len, WALL_FOOT - 4), 0.45)
        y += len + between(rg, 6, 18)
      }
    }
  }
  // The pale lane and the track, rutted, the ruts closing up into the distance.
  const rl = rng(1604)
  let lane = ''
  for (let i = 0; i < 200; i++) {
    const x = between(rl, -4, W)
    const y = between(rl, VERGE + 3, H - 2)
    const k = (y - VERGE) / (H - VERGE)
    lane += gouge(x, y, x + between(rl, 8, 26), y + between(rl, -0.4, 0.4), 0.45 + k * 0.7)
  }
  for (let i = 0; i < 60; i++) {
    const y = between(rl, VANISH[1] + 4, VERGE - 2)
    const t = (y - VANISH[1]) / (VERGE - VANISH[1])
    const x0 = VANISH[0] + (612 - VANISH[0]) * t
    const x1 = VANISH[0] + (742 - VANISH[0]) * t
    const x = between(rl, x0 + 2, x1 - 6)
    lane += gouge(x, y, x + between(rl, 3, 12) * (0.4 + t), y, 0.3 + t * 0.5)
  }
  // The fields either side of the track: rows that close up with distance
  // and brighten towards the dawn.
  const rm = rng(1605)
  let meadow = ''
  for (let y = HORIZON + 4; y < VERGE; y += 2.8 + (y - HORIZON) * 0.07) {
    let x = WALL_END - 20 + between(rm, -6, 6)
    while (x < W) {
      const len = between(rm, 10, 34)
      const L = dawn(x, y)
      if (!onTrack(x, y) && !onTrack(x + len, y) && rm() < 0.5 + L * 0.5)
        meadow += gouge(x, y, x + len, y + between(rm, -0.3, 0.3), 0.5 + L * 1.9)
      x += len + between(rm, 4, 12)
    }
  }
  // Hedgerows across the fields, low and black, their tops rough.
  const hedgeLine = (x0: number, x1: number, y: number, h: number, seed: number) => {
    const r = rng(seed)
    let d = `M${n(x0)} ${n(y + 1)}`
    for (let x = x0; x <= x1; x += 4) d += `L${n(x)} ${n(y - h * (0.55 + 0.45 * r()))}`
    return d + `L${n(x1)} ${n(y + 1)}Z`
  }
  const hedges =
    hedgeLine(WALL_END - 4, W + 4, HORIZON + 2, 5, 1606) +
    hedgeLine(WALL_END - 4, 690, HORIZON + 14, 6, 1607)
  // The rookery's crowns behind the house: a few twigs cut free.
  const rc = rng(1609)
  let crowns = ''
  for (let i = 0; i < 40; i++) {
    const x = between(rc, 0, 340)
    const y = between(rc, 50, 104)
    if (x > 120 && x < 256) continue
    crowns += gouge(x, y, x + between(rc, -5, 5), y - between(rc, 5, 11), 0.55)
  }
  cached = { sky, facade, joints, wall, grain, lane, meadow, hedges, crowns }
  return cached
}

/** The battlements round the top of the house. */
const BATTLEMENTS = (() => {
  let d = `M${HOUSE.x0 - 4} ${HOUSE.top + 6}`
  for (let x = HOUSE.x0 - 4; x < HOUSE.x1 + 4; x += 21) {
    const x1 = Math.min(x + 11, HOUSE.x1 + 4)
    d += `L${x} ${HOUSE.top - 7}L${x1} ${HOUSE.top - 7}L${x1} ${HOUSE.top + 1}L${Math.min(x + 21, HOUSE.x1 + 4)} ${HOUSE.top + 1}`
  }
  return d + `L${HOUSE.x1 + 4} ${HOUSE.top + 6}Z`
})()

/** Two storeys of tall sash windows above the wall, dark at this hour. */
const WINDOWS: [number, number, number, number][] = []
for (let k = 0; k < 6; k++) {
  const x = HOUSE.x0 + 16 + k * 40
  WINDOWS.push([x, HOUSE.top + 14, 18, 24], [x, HOUSE.storey, 18, 34])
}

/** The rookery: a black wall of crowns behind the house, carved round. */
const ROOKERY =
  'M0 116C0 92 8 72 24 66C30 50 46 42 60 46C70 34 92 34 102 48C114 50 122 62 120 76L124 104H252C250 86 258 70 274 66C282 52 302 48 314 58C330 60 344 74 342 92C350 104 348 120 344 136L344 202H0Z'

// ── JANE, walking away from the gate with her parcel ────────────────────────
const JANE_HEAD = { d: HEAD_JANE, at: [690, 120] as P, rot: 2, scale: 0.86 }
const JANE_HT = headAt(1, JANE_HEAD.at, JANE_HEAD.rot, JANE_HEAD.scale)
const NECK: P = [683, 141]
const WAIST: P = [686, 180]
const NEAR_ARM: P[] = [
  [688, 149],
  [695, 188],
  [706, 220],
]
const PARCEL_HAND = { parts: HOLD_HAND, scale: 1.2, rot: -72 }
const JANE = woman({
  facing: 1,
  neck: NECK,
  waist: WAIST,
  hemY: 334,
  head: JANE_HEAD,
  arm: 8.8,
  near: { arm: NEAR_ARM, hand: PARCEL_HAND },
  // the far arm is under the shawl
  far: { arm: [] },
  gown: { shoulder: 34, waistW: 24, front: 30, back: 50 },
  toes: [[712, 334]],
  shoe: 1,
})
const SHAWL = { width: 46, point: 50, front: 11 }
/** The parcel: her linen and her few things, tied up with string. */
const PARCEL =
  'M698 224C706 220 722 220 730 224C733 232 733 240 730 247C721 251 707 251 699 247C696 240 696 231 698 224Z'
const PARCEL_STRING = 'M714 222V249M697 235.4H732'
const PARCEL_FOLDS = 'M702 228Q710 232 716 230M718 242Q724 238 728 240'

function FlightFromThornfield({ uid }: ArtProps) {
  const m = marks()
  const id = { front: `${uid}-front` }
  return (
    <>
      <defs>
        <clipPath id={id.front}>
          <rect
            x={HOUSE.x0}
            y={HOUSE.top}
            width={HOUSE.x1 - HOUSE.x0}
            height={WALL_TOP - HOUSE.top}
          />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [640, 230], push: 1.03 })}>
        {/* the sky: night over the house, the dawn low ahead */}
        <path d={m.sky} fill={PAPER} />
        {/* "Dim dawn": two bars of cloud lit from below, low in the east */}
        <g fill={RED}>
          <path
            d={ribbon(
              [
                [796, 214],
                [826, 211],
                [866, 212],
              ],
              4.4,
              0.6,
            )}
          />
          <path
            d={ribbon(
              [
                [784, 196],
                [818, 194],
                [848, 195],
                [866, 193],
              ],
              3,
              0.6,
            )}
          />
        </g>

        {/* the rookery behind the house, and the house: three storeys of grey
            front, battlements round the top */}
        <path
          d={ROOKERY}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
          strokeLinejoin="round"
        />
        <path d={m.crowns} fill={PAPER} />
        <rect
          x={HOUSE.x0}
          y={HOUSE.top}
          width={HOUSE.x1 - HOUSE.x0}
          height={WALL_TOP - HOUSE.top}
          fill={PAPER}
        />
        <g clipPath={`url(#${id.front})`} fill="none" stroke={INK}>
          <path d={m.facade} strokeWidth={3.2} />
          <path d={m.joints} strokeWidth={1.4} />
        </g>
        <path
          d={BATTLEMENTS}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
          strokeLinejoin="round"
        />
        <g fill={INK} stroke={INK} strokeWidth={3}>
          {WINDOWS.map(([x, y, w, h]) => (
            <rect key={`${x}-${y}`} x={x} y={y} width={w} height={h} />
          ))}
        </g>
        <g fill="none" stroke={PAPER} strokeWidth={LINE.hairline}>
          {WINDOWS.map(([x, y, w, h]) => (
            <path key={`${x}-${y}`} d={`M${x + w / 2} ${y}V${y + h}M${x} ${y + h / 2}H${x + w}`} />
          ))}
        </g>
        <path d={`M${HOUSE.x0} ${HOUSE.storey - 9}H${HOUSE.x1}`} stroke={INK} strokeWidth={4} />

        {/* the open country ahead: fields, hedgerows, a track to the road */}
        <rect
          x={WALL_END - 20}
          y={HORIZON}
          width={W - WALL_END + 24}
          height={VERGE - HORIZON + 2}
          fill={INK}
        />
        <path d={m.meadow} fill={PAPER} />
        <path d={m.hedges} fill={INK} />
        <path d={TRACK} fill={PAPER} />

        {/* the yard wall and its coping */}
        <rect x={-4} y={WALL_TOP} width={WALL_END + 4} height={WALL_FOOT - WALL_TOP} fill={INK} />
        <path d={m.wall} fill={PAPER} />
        <rect
          x={-4}
          y={WALL_TOP - 7}
          width={WALL_END + 4}
          height={8}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.fine}
        />

        {/* the great gates, closed and locked */}
        <rect
          x={GATE.x0}
          y={GATE.top}
          width={GATE.x1 - GATE.x0}
          height={WALL_FOOT - GATE.top}
          fill={INK}
        />
        <path d={m.grain} fill={PAPER} />
        <path d={`M${GATE.mid} ${GATE.top}V${WALL_FOOT}`} stroke={INK} strokeWidth={4} />
        <g fill={INK} stroke={PAPER} strokeWidth={LINE.fine}>
          <rect x={GATE.x0} y={GATE.top + 16} width={GATE.x1 - GATE.x0} height={9} />
          <rect x={GATE.x0} y={WALL_FOOT - 30} width={GATE.x1 - GATE.x0} height={9} />
        </g>
        <path
          d={`M${GATE.x0 + 4} ${WALL_FOOT - 30}L${GATE.mid - 4} ${GATE.top + 25}M${GATE.x1 - 4} ${WALL_FOOT - 30}L${GATE.mid + 4} ${GATE.top + 25}`}
          stroke={INK}
          strokeWidth={8}
        />
        <path
          d={`M${GATE.x0 + 7} ${WALL_FOOT - 30}L${GATE.mid - 1} ${GATE.top + 25}M${GATE.x1 - 1} ${WALL_FOOT - 30}L${GATE.mid + 7} ${GATE.top + 25}`}
          stroke={PAPER}
          strokeWidth={LINE.fine}
        />
        {/* the lock at the meeting of the leaves */}
        <rect
          x={GATE.mid - 8}
          y={212}
          width={16}
          height={18}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.fine}
        />
        <path d={`M${GATE.mid} 218V224`} stroke={PAPER} strokeWidth={1.6} />
        {/* the wicket, shut behind her: its frame and its latch */}
        <rect
          x={WICKET.x0}
          y={WICKET.top}
          width={WICKET.x1 - WICKET.x0}
          height={WALL_FOOT - WICKET.top - 2}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <path d={`M${WICKET.x0 + 6} 246H${WICKET.x0 + 16}`} stroke={PAPER} strokeWidth={2.2} />

        {/* the gate-piers and their caps */}
        {PIERS.map(([x0, x1]) => (
          <g key={x0}>
            <rect
              x={x0}
              y={GATE.top - 18}
              width={x1 - x0}
              height={WALL_FOOT - GATE.top + 18}
              fill={INK}
              stroke={PAPER}
              strokeWidth={LINE.carve}
            />
            <rect
              x={x0 - 5}
              y={GATE.top - 27}
              width={x1 - x0 + 10}
              height={9}
              fill={INK}
              stroke={PAPER}
              strokeWidth={LINE.carve}
            />
            <circle
              cx={(x0 + x1) / 2}
              cy={GATE.top - 37}
              r={9}
              fill={INK}
              stroke={PAPER}
              strokeWidth={LINE.carve}
            />
            <path
              d={
                gouge(x1 - 5, GATE.top - 12, x1 - 5, WALL_FOOT - 6, 1.4) +
                gouge(x1 - 11, GATE.top + 30, x1 - 11, WALL_FOOT - 40, 0.7)
              }
              fill={PAPER}
            />
          </g>
        ))}

        {/* the lane along the wall: the verge, then the pale road */}
        <rect x={-4} y={WALL_FOOT} width={WALL_END + 4} height={VERGE - WALL_FOOT} fill={INK} />
        <rect x={-4} y={VERGE} width={W + 8} height={H - VERGE + 4} fill={PAPER} />
        <path d={m.lane} fill={INK} />
        <path d={`M-4 ${VERGE}H${W + 4}`} stroke={INK} strokeWidth={2.4} />

        {/* Jane: straw bonnet, shawl pinned, her parcel in her hand, walking
            away from the gate, looking ahead and never back */}
        <Figure parts={JANE}>
          <path d={PARCEL} fill={PAPER} stroke={INK} strokeWidth={1.3} strokeLinejoin="round" />
          <path d={PARCEL_STRING + PARCEL_FOLDS} fill="none" stroke={INK} strokeWidth={1.1} />
          <path d={HOLD_CUTS} transform={handAt(NEAR_ARM, 1, PARCEL_HAND)} fill={INK} />
          <path
            d={shawl(NECK, WAIST, 1, SHAWL)}
            fill={INK}
            stroke={PAPER}
            strokeWidth={LINE.carve}
            strokeLinejoin="round"
          />
          <path d={shawlBorder(NECK, WAIST, 1, SHAWL)} fill={PAPER} />
          <circle
            cx={shawlPin(NECK, 1, SHAWL.front)[0]}
            cy={shawlPin(NECK, 1, SHAWL.front)[1]}
            r={1.8}
            fill={PAPER}
          />
          <JaneFace t={JANE_HT} hair={false} tucker={false} />
          <g transform={JANE_HT}>
            <path d={STRAW_BONNET_TIES} fill={INK} stroke={PAPER} strokeWidth={0.9} />
            <path
              d={STRAW_BONNET}
              fill={PAPER}
              stroke={INK}
              strokeWidth={1.4}
              strokeLinejoin="round"
            />
            <path d={STRAW_BONNET_PLAIT} fill="none" stroke={INK} strokeWidth={1.1} />
            <path d={STRAW_BONNET_LINING} fill={INK} />
          </g>
        </Figure>
      </g>
    </>
  )
}

export const flightFromThornfield: LinocutArt = { width: W, height: H, Draw: FlightFromThornfield }
