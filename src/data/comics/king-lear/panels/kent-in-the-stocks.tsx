import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, n, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import {
  CASTLE_RIGHT,
  CastleFront,
  GROUND,
  H,
  HORIZON,
  LEG_HOLES,
  STOCKED_FOOT,
  STOCKED_SOLE,
  Stocks,
  W,
  castleMarks,
  countryMarks,
} from './gloucesters-castle'
import { Letter, Person } from './people'

/**
 * Act 2, Scene 2: "Kent in the stocks". The end of the scene, at dawn, when
 * Gloucester has gone and Kent is left alone in the stocks before the gate:
 *
 *   "Approach, thou beacon to this under globe, That by thy comfortable beams
 *   I may Peruse this letter. Nothing almost sees miracles But misery. I know
 *   'tis from Cordelia" ... "All weary and o'erwatch'd, Take vantage, heavy
 *   eyes, not to behold This shameful lodging."
 *
 * Every detail is from the scene (the held edition, src/data/full-texts/
 * king-lear.ts):
 * - "Before Gloucester's Castle": the castle, gate and stocks are shared with
 *   "Stripped of his knights" (./gloucesters-castle.tsx). It is dawn: Oswald
 *   arrived with "Good dawning to thee, friend", Kent has sat there all night,
 *   and he calls the sun up to read by. So the sun, the one red in the panel,
 *   is half risen on the right over bare country ("For many miles about
 *   There's scarce a bush", 2.4), the sky cut clear round it and still dark
 *   in the west.
 * - "Fetch forth the stocks!", "Put in his legs." So Kent sits on the low
 *   bench of the stocks with his legs out before him, his ankles locked
 *   between two boards held by posts, his feet standing up out of the holes
 *   (the kit's `seated` for a man in a tunic, added for this panel).
 * - He is still Caius, the disguise he took in 1.4: the kit's 'caius', hooded,
 *   his grey beard showing ("Spare my grey beard", 2.2), and without a sword.
 * - He holds Cordelia's letter up to the light in both hands, and his eyes
 *   are heavy. Hardship, not injury: nothing in the panel is hurt.
 *
 * Nothing is taken from a film or stage production.
 *
 * Seeds: 7201 (the sky and the ground), 7203 (the country), 7204 (the castle
 * front), 7302 (the stocks' grain).
 */

/** The sun, rising on the right. */
const SUN: [number, number] = [736, HORIZON]
/**
 * Where the stocks stand, and Kent's feet on the ground behind them (he sits
 * on the bench), both brought forward and drawn at STOCKS_SCALE.
 */
const STOCKS_AT: [number, number] = [566, 330]
const KENT_AT: [number, number] = [504, 330]
const STOCKS_SCALE = 1.16
/** The holes his ankles are locked in, in his own frame. */
const KENT_HOLES = LEG_HOLES.map(([x, y]): [number, number] => [
  x + (STOCKS_AT[0] - KENT_AT[0]) / STOCKS_SCALE,
  y + (STOCKS_AT[1] - KENT_AT[1]) / STOCKS_SCALE,
])
const STOCKS_T = `translate(${STOCKS_AT[0]} ${STOCKS_AT[1]}) scale(${STOCKS_SCALE})`

/** The dawn: the sky cut almost clear round the sun, dark still in the west. */
const skyLight = (x: number, y: number) =>
  clamp(1.2 - Math.hypot((x - SUN[0]) * 0.5, (y - SUN[1]) * 0.8) / 360, 0.04)
/** The castle front, lit from the east at a raking angle: brighter to the right. */
const castleLight = (x: number, y: number) =>
  clamp(0.1 + 0.55 * (x / CASTLE_RIGHT) - (y - 150) * 0.0006)
/** The far country, still in shadow, catching the light only towards the sun. */
const landLight = (x: number, y: number) => clamp(0.85 - Math.abs(x - SUN[0]) / 330) * 0.85

/**
 * Two bare trees on the skyline, dark against the dawn: "For many miles about
 * There's scarce a bush" (2.4), so there are few, and none near. Strokes:
 * [path, width].
 */
const TREES: [string, number][] = (() => {
  const tree = (x: number, h: number): [string, number][] => [
    [`M${x} ${HORIZON}V${n(HORIZON - h * 0.55)}`, 3],
    [
      `M${x} ${n(HORIZON - h * 0.5)}L${n(x - h * 0.3)} ${n(HORIZON - h * 0.85)}M${x} ${n(HORIZON - h * 0.55)}L${n(x + h * 0.05)} ${n(HORIZON - h)}M${x} ${n(HORIZON - h * 0.45)}L${n(x + h * 0.32)} ${n(HORIZON - h * 0.8)}`,
      1.8,
    ],
    [
      `M${n(x - h * 0.2)} ${n(HORIZON - h * 0.72)}L${n(x - h * 0.38)} ${n(HORIZON - h * 0.74)}M${n(x + h * 0.22)} ${n(HORIZON - h * 0.68)}L${n(x + h * 0.4)} ${n(HORIZON - h * 0.66)}M${n(x + h * 0.03)} ${n(HORIZON - h * 0.85)}L${n(x - h * 0.12)} ${n(HORIZON - h * 0.98)}`,
      1.1,
    ],
  ]
  return [...tree(654, 30), ...tree(812, 22)]
})()

type Marks = { sky: string; country: string; ground: string }
let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const r = rng(7201)
  // The dawn sky: long level cuts that widen towards the sun until they run
  // together into clear paper round it.
  let sky = ''
  for (let y = 8; y < HORIZON - 2; y += 4.6) {
    let x = CASTLE_RIGHT - 40 + between(r, -20, 0)
    while (x < W) {
      const len = between(r, 60, 180)
      const L = skyLight(x + len / 2, y)
      if (r() < 0.2 + L * 0.8)
        sky += gouge(
          x,
          y + between(r, -0.4, 0.4),
          x + len,
          y + between(r, -0.4, 0.4),
          0.35 + Math.pow(L, 1.5) * 7,
          between(r, -0.5, 0.5),
        )
      x += len + between(r, 3, 12)
    }
  }
  const country = countryMarks(7203, landLight)
  let ground = ''
  for (let y = GROUND + 3; y < H; y += 3.6 + (y - GROUND) * 0.05) {
    let x = between(r, -20, 0)
    while (x < W) {
      const len = between(r, 20, 80)
      const L = skyLight(x + len / 2, HORIZON) * 0.8 + 0.2
      if (r() < 0.2 + (1 - L) * 0.7)
        ground += gouge(x, y, x + len, y + between(r, -0.4, 0.4), 0.4 + (1 - L) * 1.6)
      x += len + between(r, 6, 22)
    }
  }
  cached = { sky, country, ground }
  return cached
}

function KentInTheStocks({ uid }: ArtProps) {
  const m = marks()
  const c = castleMarks(7204, castleLight)
  const skyClip = `${uid}-sky`
  return (
    <>
      <defs>
        <clipPath id={skyClip}>
          <rect x={0} y={0} width={W} height={HORIZON} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [480, 240], push: 1.03 })}>
        {/* the dawn sky, cut paler towards the rising sun */}
        <path d={m.sky} fill={PAPER} />
        <g clipPath={`url(#${skyClip})`}>
          <circle
            className="lc-fade-in"
            style={timing({ delay: 0.3, dur: 1.6 })}
            cx={SUN[0]}
            cy={SUN[1]}
            r={26}
            fill={RED}
          />
        </g>
        {/* the bare country to the right */}
        <rect
          x={CASTLE_RIGHT}
          y={HORIZON}
          width={W - CASTLE_RIGHT}
          height={GROUND - HORIZON}
          fill={INK}
        />
        <path d={m.country} fill={PAPER} />
        <path d={`M${CASTLE_RIGHT} ${HORIZON}H${W}`} stroke={PAPER} strokeWidth={LINE.fine} />
        {/* two bare trees on the skyline, dark against the dawn */}
        <g fill="none" stroke={INK} strokeLinecap="round">
          {TREES.map(([d, w]) => (
            <path key={d} d={d} strokeWidth={w} />
          ))}
        </g>
        <CastleFront m={c} />
        {/* the open ground before the gate */}
        <rect x={0} y={GROUND} width={W} height={H - GROUND} fill={PAPER} />
        <path d={m.ground} fill={INK} />
        {/* Kent in the stocks, reading Cordelia's letter by the rising sun */}
        <Stocks transform={STOCKS_T} part="back" />
        <Person
          pose={{
            look: 'caius',
            seated: { seat: 24 },
            eye: 'down',
            head: { rot: -8 },
            body: { neck: [-14, -96], hip: [0, -30] },
            legs: {
              far: [[-2, -32], [36, -48], KENT_HOLES[1]],
              near: [[2, -30], [30, -40], KENT_HOLES[0]],
            },
            far: {
              pts: [
                [-9, -86],
                [10, -100],
                [24, -116],
              ],
              hand: 'grip',
              deg: -60,
            },
            near: {
              pts: [
                [-9, -86],
                [12, -88],
                [24, -102],
              ],
              hand: 'grip',
              deg: -50,
            },
          }}
          at={KENT_AT}
          scale={STOCKS_SCALE / 1.01}
        >
          <Letter at={[34, -112]} rot={-14} scale={0.85} open />
        </Person>
        <Stocks transform={STOCKS_T} part="front" />
        {/* his feet, standing up out of the holes */}
        <g transform={STOCKS_T}>
          <path
            d={LEG_HOLES.map(([x, y]) => STOCKED_FOOT(x, y)).join('')}
            fill={INK}
            stroke={PAPER}
            strokeWidth={1.8}
            strokeLinejoin="round"
          />
          <path
            d={LEG_HOLES.map(([x, y]) => STOCKED_SOLE(x, y)).join('')}
            fill="none"
            stroke={PAPER}
            strokeWidth={1.1}
            strokeLinecap="round"
          />
        </g>
      </g>
    </>
  )
}

export const kentInTheStocks: LinocutArt = { width: W, height: H, Draw: KentInTheStocks }
