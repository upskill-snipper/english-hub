import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  between,
  clamp,
  gouge,
  gougeField,
  n,
  rng,
  wedge,
  type Pt,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { Wolfdog } from './people'

/**
 * Chapter 7: "The hens' revolt", the nineteenth moment in the guide's
 * timeline. Every detail is from the text (the held edition,
 * src/data/full-texts/animal-farm.ts):
 *
 * - "It was a bitter winter. The stormy weather was followed by sleet and
 *   snow, and then by a hard frost which did not break till well into
 *   February." So through the open door of the henhouse the yard lies under
 *   snow, and snow is falling.
 * - "Led by three young Black Minorca pullets, the hens made a determined
 *   effort to thwart Napoleon's wishes. Their method was to fly up to the
 *   rafters and there lay their eggs, which smashed to pieces on the floor."
 *   So the hens stand along the tie-beam under the roof, one more is flying
 *   up to join them, an egg is falling from the beam, and broken shells lie
 *   on the floor below. All the hens are black; the three pullets stand
 *   together near the middle, and the spot colour is their combs: the three
 *   who lead the revolt. The comb stands on the crown, well clear of the
 *   beak, and the wattles under the beak stay ink, so no red is near a mouth.
 * - "They were just getting their clutches ready for the spring sitting". So
 *   the nesting boxes along the back wall have straw in them and stand empty.
 * - "He ordered the hens' rations to be stopped, and decreed that any animal
 *   giving so much as a grain of corn to a hen should be punished by death.
 *   The dogs saw to it that these orders were carried out." So one of
 *   Napoleon's dogs, the kit's Wolfdog (./people.tsx), stands on guard in the
 *   doorway, looking in. It watches; it does nothing else.
 *
 * The hens are cut here rather than taken from the kit, whose hen is a small
 * roosting silhouette with no comb, drawn for a window-sill in Chapter 1:
 * this moment needs hens standing on their legs, a hen in flight and the
 * Minorca's comb. They are cut in the kit's manner, black with a paper halo.
 *
 * What the revolt costs ("Nine hens had died in the meantime") is left to the
 * words, as the style guide asks: no hen is drawn hurt, and the panel shows
 * the protest, not its end.
 *
 * Nothing is taken from a film, television or stage production. Seeds: 1901
 * (the wall), 1902 (the floor), 1903 (the snow outside), 1904 (the straw),
 * 1911 to 1913 (the three broken eggs).
 */

const W = 860
const H = 340
const FLOOR = 262
/** The tie-beam the hens stand on: its top edge and depth. */
const BEAM = { y: 84, h: 15 }
/** The open door on the left, and what shows through it. */
const DOOR = { x0: 34, x1: 150, top: 118 }
/** The row of nesting boxes on the back wall, right of the middle. */
const NESTS = { x0: 586, x1: 842, top: 170, bottom: 226 }

type Marks = {
  wall: string
  joints: string
  roof: string
  floor: string
  patch: string
  patchStraw: string
  outside: string
  snow: string
  straw: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // The henhouse is lit only by the winter daylight through the door.
  const light = (x: number, y: number) =>
    Math.max(clamp(1 - Math.hypot((x - 110) * 0.5, (y - 190) * 1.0) / 390) * 0.9, 0.12)
  const r = rng(1901)
  const wall = gougeField(r, { x0: 0, x1: W, y0: BEAM.y + BEAM.h, y1: FLOOR - 2 }, light, {
    spacing: 7,
    len: [10, 46],
  })
  // The planks of the wall stand upright: their joints are long vertical cuts.
  let joints = ''
  for (let x = 170; x < W; x += 31) {
    const L = light(x, 180)
    let y = BEAM.y + BEAM.h + between(r, 0, 12)
    while (y < FLOOR - 6) {
      const len = between(r, 30, 90)
      joints += wedge(
        x,
        y,
        x + between(r, -0.6, 0.6),
        Math.min(y + len, FLOOR - 4),
        0.6,
        0.9 + L * 2,
      )
      y += len + between(r, 6, 20)
    }
  }
  // Under the roof, above the beam: the rafters rise to the ridge, dark,
  // with the boards between them cut faintly.
  const roofLight = (x: number, y: number) => clamp(0.34 - Math.abs(x - 300) / 2400 - y / 900)
  const roof = gougeField(r, { x0: 0, x1: W, y0: 4, y1: BEAM.y - 2 }, roofLight, {
    spacing: 8,
    len: [20, 60],
  })

  // The floor: beaten earth and old straw, cut in short broken strokes, and
  // the pale patch of daylight thrown in through the door.
  const f = rng(1902)
  const floorLight = (x: number, y: number) =>
    clamp(0.26 - Math.abs(x - 220) / 2600 + (y - FLOOR) / 500)
  const floor = gougeField(f, { x0: 0, x1: W, y0: FLOOR + 4, y1: H }, floorLight, {
    spacing: 6,
    len: [8, 30],
    gap: [6, 18],
  })
  const patch = `M${DOOR.x0} ${FLOOR}L${DOOR.x1} ${FLOOR}L360 ${H}L${DOOR.x0 - 4} ${H}Z`
  let patchStraw = ''
  for (let k = 0; k < 70; k++) {
    const y = between(f, FLOOR + 4, H - 2)
    const t = (y - FLOOR) / (H - FLOOR)
    const x = between(f, DOOR.x0 + 2, DOOR.x1 + (360 - DOOR.x1) * t - 6)
    const a = between(f, -0.5, 0.5)
    const len = between(f, 7, 18)
    patchStraw += gouge(x, y, x + Math.cos(a) * len, y + Math.sin(a) * len, 0.7)
  }

  // Outside the door: a snowy yard, a fence along it, a low grey sky.
  const s = rng(1903)
  let outside = ''
  for (let y = DOOR.top + 4; y < 206; y += 6)
    outside += gouge(
      DOOR.x0,
      y + between(s, -1, 1),
      DOOR.x1,
      y + between(s, -1, 1),
      0.5 + (y - DOOR.top) / 180,
    )
  let snow = ''
  for (let k = 0; k < 26; k++) {
    const x = between(s, DOOR.x0 + 4, DOOR.x1 - 4)
    const y = between(s, DOOR.top + 6, FLOOR - 8)
    snow += `M${n(x)} ${n(y)}m-1.4 0a1.4 1.4 0 1 0 2.8 0a1.4 1.4 0 1 0 -2.8 0`
  }

  // Straw in the nesting boxes, spilling over their lips.
  const st = rng(1904)
  let straw = ''
  const boxW = (NESTS.x1 - NESTS.x0) / 4
  for (let b = 0; b < 4; b++) {
    const x0 = NESTS.x0 + b * boxW + 8
    for (let k = 0; k < 14; k++) {
      const x = between(st, x0, x0 + boxW - 18)
      const y = between(st, NESTS.bottom - 16, NESTS.bottom - 6)
      const a = between(st, -0.9, 0.9)
      straw += gouge(x, y, x + Math.cos(a) * 12, y + Math.sin(a) * 6, 0.7)
    }
  }

  cached = { wall, joints, roof, floor, patch, patchStraw, outside, snow, straw }
  return cached
}

// ── The hens, in profile facing right, feet at (0, 0), about 50 tall ────────

/** A hen standing on a perch: a full breast, a short fan of tail, a small head. */
const HEN =
  'M-20 -16C-25 -21 -28 -29 -30 -39L-26.4 -40.6L-24.6 -35.6L-21.2 -42L-17.8 -35.8C-14 -33.6 -10 -33.2 -6 -34C-1.6 -35 2 -36 4 -38C4 -44 8 -49 13 -48.5C17 -48 19.4 -45 19.4 -41.6L26 -39.6L19.6 -37C19 -35 18.6 -33 18 -31.4C20 -25 18.6 -15 12.4 -10C6 -6 -4 -6 -10 -9C-15 -11 -18 -13 -20 -16Z'
/** The large single comb of a Minorca, standing on the crown. */
const COMB =
  'M5.8 -45.6C5.4 -49.6 6.4 -52.4 7.6 -54L9.4 -50.4L11.2 -56.6L13.4 -51.4L15.8 -56L17 -50.8L19.4 -52.6C19.8 -49.4 18.8 -46.8 16.8 -45.4C13 -47.4 9.4 -47.6 5.8 -45.6Z'
/** A hen's legs to the perch, stroked. */
const HEN_LEGS = 'M-2 -8L-3 0M5 -8L6.4 0'
/** The toes gripping the perch, stroked. */
const HEN_TOES = 'M-8 0.4L3 0.4M1 0.4L12 0.4'
/** The folded wing, the eye and the lines of the tail, cut in paper. */
const HEN_CUTS =
  gouge(-13, -22, 9, -27, 1.3, 1.6) +
  gouge(-11, -16.4, 6, -19.6, 1, 1.2) +
  gouge(-15, -27.4, -2, -30.6, 0.8, 0.6) +
  gouge(-24.6, -23, -28, -36.6, 0.7) +
  gouge(-20.6, -24, -20.8, -36, 0.6)
const HEN_EYE: [number, number, number] = [14.6, -43, 1.5]

/**
 * A hen flying up to the beam: the body tilted up, both wings raised with the
 * long flight feathers cut apart, the legs trailing. Same frame and size.
 */
const FLYER_BODY =
  'M-22 6C-26 -2 -20 -10 -10 -13C-2 -15.4 6 -16 11 -20C13 -25 17.4 -27.4 21 -25.6L27.6 -24.4L21.6 -21C20.6 -16.6 18 -12 13.6 -7.6C7 -1.6 -4 4.6 -13 7Z'
const FLYER_TAIL = 'M-19 3L-35 7L-32 1.6L-37 -3.6L-22 -3Z'
/**
 * The raised wings: each one shape with its long flight feathers parted at
 * the tips, the near one large and the far one smaller behind it. Cut apart
 * at the tips so that at phone width they read as wings, not as a fan.
 */
const FLYER_WING_NEAR =
  'M-4 -12C0 -24 4 -34 6.6 -45L0.6 -41.4L-1.8 -48.4L-7.6 -42.6L-12.2 -47.8L-15.8 -40L-21.4 -42.6L-22.4 -33.4C-18 -24 -12 -16 -8 -10Z'
const FLYER_WING_FAR =
  'M1 -14C5 -24 8 -34 10 -46L12.6 -41L15.8 -44.4L15.2 -37.6L17.4 -36.8L12 -25C8 -20 5 -16 1 -14Z'
/** The shafts of the near wing's feathers, cut in paper. */
const FLYER_WING_CUTS =
  gouge(-5.6, -16, 0.6, -39.6, 0.7) +
  gouge(-8.6, -17, -7.2, -40, 0.7) +
  gouge(-11.4, -18, -15, -38.4, 0.7)
const FLYER_LEGS = 'M-6 4L-13 13M-1 3L-5 13.6'

function Hen({
  at,
  scale = 1,
  facing = 1,
  comb = false,
  tilt = 0,
}: {
  at: Pt
  scale?: number
  facing?: 1 | -1
  comb?: boolean
  tilt?: number
}) {
  return (
    <g transform={`translate(${at[0]} ${at[1]}) rotate(${tilt}) scale(${facing * scale} ${scale})`}>
      {/* a paper edge round the whole bird, to lift it off the dark roof */}
      <path d={HEN} fill={PAPER} stroke={PAPER} strokeWidth={3.4} strokeLinejoin="round" />
      <path d={COMB} fill={PAPER} stroke={PAPER} strokeWidth={3.4} strokeLinejoin="round" />
      <path d={HEN_LEGS} stroke={PAPER} strokeWidth={5} strokeLinecap="round" />
      <path d={HEN} fill={INK} />
      <path d={HEN_LEGS} stroke={INK} strokeWidth={2.2} strokeLinecap="round" />
      <path d={HEN_TOES} stroke={INK} strokeWidth={1.6} strokeLinecap="round" />
      <path d={HEN_CUTS} fill={PAPER} />
      <circle cx={HEN_EYE[0]} cy={HEN_EYE[1]} r={HEN_EYE[2]} fill={PAPER} />
      <path d={COMB} fill={comb ? RED : INK} />
      {!comb && <path d="M7.4 -47.6L16.8 -47.4" stroke={PAPER} strokeWidth={0.9} />}
    </g>
  )
}

function Flyer({ at, scale = 1 }: { at: Pt; scale?: number }) {
  return (
    <g transform={`translate(${at[0]} ${at[1]}) scale(${scale})`}>
      <g fill={PAPER} stroke={PAPER} strokeWidth={3.4} strokeLinejoin="round">
        <path d={FLYER_WING_FAR} />
        <path d={FLYER_TAIL} />
        <path d={FLYER_BODY} />
        <path d={FLYER_WING_NEAR} />
      </g>
      <path d={FLYER_LEGS} stroke={PAPER} strokeWidth={5} strokeLinecap="round" />
      <path d={FLYER_WING_FAR} fill={INK} />
      <path d={FLYER_TAIL} fill={INK} />
      <path d={FLYER_BODY} fill={INK} />
      <path d={FLYER_LEGS} stroke={INK} strokeWidth={2.2} strokeLinecap="round" />
      {/* the near wing, cut free of the body by its own paper edge */}
      <path d={FLYER_WING_NEAR} fill={INK} stroke={PAPER} strokeWidth={1.2} />
      <path d={gouge(-14, -2, 6, -10, 1, 1) + FLYER_WING_CUTS} fill={PAPER} />
      <circle cx={17} cy={-21.4} r={1.4} fill={PAPER} />
      <path
        d="M11 -26.8C11 -30.4 12.2 -32.8 13.4 -34.2L15 -30.8L17 -35.6L18.8 -30.6L21 -33.4C21.6 -30 20.8 -27.6 19 -26.4C16.2 -27.6 13.6 -27.8 11 -26.8Z"
        fill={INK}
        stroke={PAPER}
        strokeWidth={1}
      />
    </g>
  )
}

/** An egg, whole: a paper oval with an ink rim. */
function Egg({ at, rot = 0 }: { at: Pt; rot?: number }) {
  return (
    <g transform={`translate(${at[0]} ${at[1]}) rotate(${rot}) scale(1.7)`}>
      <path
        d="M0 -7.4C4 -7.4 5.6 -2.6 5.6 1C5.6 4.8 3 7.2 0 7.2C-3 7.2 -5.6 4.8 -5.6 1C-5.6 -2.6 -4 -7.4 0 -7.4Z"
        fill={PAPER}
        stroke={INK}
        strokeWidth={1.2}
      />
      <path d="M-2.6 -3.6Q-3.4 -1 -3 1.6" stroke={INK} strokeWidth={0.8} fill="none" />
    </g>
  )
}

/**
 * An egg broken on the floor, seen from a little above: the spill in a flat
 * ragged pool, the yolk a round in it, and two pieces of shell with jagged
 * rims. All paper and ink; the print has no yellow.
 */
function smashed(cx: number, cy: number, s: number, seed: number) {
  const r = rng(seed)
  // The spill: a flat pool with short splash points round its rim, drawn as
  // a smooth closed curve through alternating inner and outer points.
  const k = 16
  const pts: Pt[] = []
  for (let i = 0; i < k; i++) {
    const a = (i / k) * Math.PI * 2 + between(r, -0.08, 0.08)
    const rad = (i % 2 ? between(r, 1.25, 1.6) : between(r, 0.85, 1)) * s
    pts.push([cx + Math.cos(a) * rad * 1.6, cy + Math.sin(a) * rad * 0.62])
  }
  let spill = `M${n((pts[0][0] + pts[k - 1][0]) / 2)} ${n((pts[0][1] + pts[k - 1][1]) / 2)}`
  for (let i = 0; i < k; i++) {
    const p = pts[i]
    const q = pts[(i + 1) % k]
    spill += `Q${n(p[0])} ${n(p[1])} ${n((p[0] + q[0]) / 2)} ${n((p[1] + q[1]) / 2)}`
  }
  spill += 'Z'
  // Two halves of the shell beside it, each a cup with a jagged rim.
  const shell = (x: number, y: number, w: number, up: number) =>
    `M${n(x - w)} ${n(y)}C${n(x - w)} ${n(y + w * 1.1 * up)} ${n(x + w)} ${n(y + w * 1.1 * up)} ${n(x + w)} ${n(y)}L${n(x + w * 0.62)} ${n(y - w * 0.46 * up)}L${n(x + w * 0.26)} ${n(y + w * 0.08 * up)}L${n(x - w * 0.12)} ${n(y - w * 0.52 * up)}L${n(x - w * 0.5)} ${n(y + w * 0.04 * up)}L${n(x - w * 0.78)} ${n(y - w * 0.36 * up)}Z`
  return {
    spill,
    yolk: [cx + between(r, -2, 2), cy - s * 0.04, s * 0.5, s * 0.34] as [
      number,
      number,
      number,
      number,
    ],
    shells:
      shell(cx - s * 2.2, cy - s * 0.3, s * 0.62, 1) +
      shell(cx + s * 2.3, cy + s * 0.2, s * 0.54, 1),
  }
}
const SMASHES = [
  smashed(318, 292, 13, 1911),
  smashed(420, 314, 15, 1912),
  smashed(476, 280, 11, 1913),
]

/** The hens on the beam: [x, scale, facing, one of the three pullets]. */
const PERCHED: [number, number, 1 | -1, boolean][] = [
  [300, 1.02, 1, false],
  [372, 1.2, 1, true],
  [444, 1.2, 1, true],
  [516, 1.2, -1, true],
  [596, 1, -1, false],
  [664, 0.98, 1, false],
  [742, 1, -1, false],
]

/** Where the dog stands, and how big: one of the "nine enormous dogs" (the kit's Wolfdog). */
const GUARD = { at: [90, FLOOR + 2] as Pt, s: 0.9 }

function TheHensRevolt({ uid }: ArtProps) {
  const m = marks()
  const clip = `${uid}-door`
  return (
    <>
      <defs>
        <clipPath id={clip}>
          <rect x={DOOR.x0} y={DOOR.top} width={DOOR.x1 - DOOR.x0} height={FLOOR - DOOR.top} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [440, 150], push: 1.03 })}>
        {/* the plank wall, lit from the door */}
        <path d={m.wall} fill={PAPER} />
        <path d={m.joints} fill={INK} />
        {/* the underside of the roof, and the rafters rising to the ridge */}
        <path d={m.roof} fill={PAPER} />
        <path
          d={
            wedge(160, BEAM.y, 330, 2, 7, 7) +
            wedge(430, BEAM.y, 430, 2, 7, 7) +
            wedge(700, BEAM.y, 560, 2, 7, 7)
          }
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />

        {/* the doorway and the snowy yard beyond it */}
        <rect
          x={DOOR.x0 - 10}
          y={DOOR.top - 10}
          width={DOOR.x1 - DOOR.x0 + 20}
          height={FLOOR - DOOR.top + 10}
          fill={PAPER}
        />
        <rect
          x={DOOR.x0 - 6}
          y={DOOR.top - 6}
          width={DOOR.x1 - DOOR.x0 + 12}
          height={FLOOR - DOOR.top + 6}
          fill={INK}
        />
        <g clipPath={`url(#${clip})`}>
          <rect
            x={DOOR.x0}
            y={DOOR.top}
            width={DOOR.x1 - DOOR.x0}
            height={FLOOR - DOOR.top}
            fill={PAPER}
          />
          <path d={m.outside} fill={INK} />
          {/* the far fence along the edge of the yard */}
          <path
            d={`M${DOOR.x0} 200L${DOOR.x1} 194M${DOOR.x0} 210L${DOOR.x1} 205`}
            stroke={INK}
            strokeWidth={2}
          />
          <path d="M52 214V192M86 211V189M120 208V186" stroke={INK} strokeWidth={3.2} />
          <path d={`M${DOOR.x0} 214L${DOOR.x1} 208L${DOOR.x1} 216L${DOOR.x0} 222Z`} fill={PAPER} />
          <path d={m.snow} fill={INK} />
        </g>

        {/* the floor, and the daylight thrown across it */}
        <rect x={0} y={FLOOR} width={W} height={H - FLOOR} fill={INK} />
        <path d={m.floor} fill={PAPER} />
        <path d={m.patch} fill={PAPER} />
        <path d={m.patchStraw} fill={INK} />
        <rect x={0} y={FLOOR - 2} width={W} height={3} fill={PAPER} />

        {/* the nesting boxes, with straw in them, and no hen */}
        <g>
          <rect
            x={NESTS.x0 - 6}
            y={NESTS.bottom}
            width={NESTS.x1 - NESTS.x0 + 12}
            height={7}
            fill={INK}
            stroke={PAPER}
            strokeWidth={LINE.carve}
          />
          <path
            d={`M${NESTS.x0 + 4} ${NESTS.bottom + 7}V${FLOOR}M${NESTS.x1 - 4} ${NESTS.bottom + 7}V${FLOOR}`}
            stroke={PAPER}
            strokeWidth={6}
          />
          <path
            d={`M${NESTS.x0 + 4} ${NESTS.bottom + 7}V${FLOOR}M${NESTS.x1 - 4} ${NESTS.bottom + 7}V${FLOOR}`}
            stroke={INK}
            strokeWidth={3.4}
          />
          {[0, 1, 2, 3].map((b) => {
            const w = (NESTS.x1 - NESTS.x0) / 4
            const x = NESTS.x0 + b * w
            return (
              <g key={b}>
                <rect
                  x={x + 2}
                  y={NESTS.top}
                  width={w - 4}
                  height={NESTS.bottom - NESTS.top}
                  fill={INK}
                  stroke={PAPER}
                  strokeWidth={LINE.carve}
                />
                <rect
                  x={x + 7}
                  y={NESTS.top + 6}
                  width={w - 14}
                  height={NESTS.bottom - NESTS.top - 12}
                  fill={INK}
                  stroke={PAPER}
                  strokeWidth={LINE.hairline}
                />
              </g>
            )
          })}
          <path d={m.straw} fill={PAPER} />
          <rect
            x={NESTS.x0}
            y={NESTS.bottom - 6}
            width={NESTS.x1 - NESTS.x0}
            height={6}
            fill={INK}
            stroke={PAPER}
            strokeWidth={LINE.fine}
          />
        </g>

        {/* the broken eggs on the floor under the beam */}
        {SMASHES.map((sm, i) => (
          <g key={i}>
            <path d={sm.spill} fill={PAPER} stroke={INK} strokeWidth={1.2} />
            <ellipse
              cx={sm.yolk[0]}
              cy={sm.yolk[1]}
              rx={sm.yolk[2]}
              ry={sm.yolk[3]}
              fill={PAPER}
              stroke={INK}
              strokeWidth={1.8}
            />
            <path
              d={sm.shells}
              fill={PAPER}
              stroke={INK}
              strokeWidth={1.1}
              strokeLinejoin="round"
            />
          </g>
        ))}

        {/* the tie-beam under the roof */}
        <rect
          x={0}
          y={BEAM.y}
          width={W}
          height={BEAM.h}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <path
          d={
            gouge(20, BEAM.y + 5, 300, BEAM.y + 5.6, 0.9) +
            gouge(340, BEAM.y + 9, 820, BEAM.y + 8.4, 0.9)
          }
          fill={PAPER}
        />
        {/* a post under it, by the door */}
        <rect
          x={170}
          y={BEAM.y + BEAM.h}
          width={14}
          height={FLOOR - BEAM.y - BEAM.h}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />

        {/* the hens along the beam, the three pullets in the middle */}
        {PERCHED.map(([x, s, f, comb]) => (
          <Hen key={x} at={[x, BEAM.y]} scale={s} facing={f} comb={comb} />
        ))}
        {/* one more flying up from the floor to join them */}
        <g className="lc-rise" style={timing({ delay: 0.5, dur: 1.2 })}>
          <Flyer at={[236, 176]} scale={1.1} />
        </g>
        {/* an egg falling from the beam, and the lines of its fall */}
        <g className="lc-fade-in" style={timing({ delay: 1.2, dur: 0.5 })}>
          <path
            d={
              gouge(424, 110, 424, 146, 1.6) +
              gouge(414, 118, 414, 150, 1.1) +
              gouge(434, 118, 434, 150, 1.1)
            }
            fill={PAPER}
          />
          <Egg at={[424, 168]} rot={8} />
        </g>

        {/* one of Napoleon's dogs on guard in the doorway, looking in */}
        <Wolfdog at={GUARD.at} s={GUARD.s} />
      </g>
    </>
  )
}

export const theHensRevolt: LinocutArt = { width: W, height: H, Draw: TheHensRevolt }
