import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  between,
  clamp,
  gouge,
  gougeField,
  rays,
  rng,
  wedge,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { Person, type Pose } from './people'

/**
 * Chapter 18: "Great expectations", the sixth moment in the guide's timeline.
 * Every detail is from the held edition (src/data/full-texts/
 * great-expectations.ts):
 *
 * - "Our conference was held in the state parlour, which was feebly lighted
 *   by one candle." It is a Saturday night; the candle is the one light and
 *   the spot colour, and the wall is cut lighter only round it. The press in
 *   which Joe keeps Pip's indentures stands in this room ("Joe brought out my
 *   indentures from the press in the best parlour", Chapter 19).
 * - "It began with the strange gentleman's sitting down at the table, drawing
 *   the candle to him ... He then put up the pocketbook and set the candle a
 *   little aside". So the candle stands on the table at his side.
 * - "Finding that he could not see us very well from where he sat, he got up,
 *   and threw one leg over the back of a chair and leaned upon it; thus
 *   having one foot on the seat of a chair, and one foot on the ground." So
 *   Mr Jaggers stands with one foot up on the seat of a chair, leaning on it,
 *   and "This was the first time he had taken his leg from the chair" comes
 *   only after the announcement.
 * - "'I am instructed to communicate to him,' said Mr. Jaggers, throwing his
 *   finger at me sideways, 'that he will come into a handsome property'".
 *   So his forefinger is thrown out at Pip.
 * - "Joe and I gasped, and looked at one another." So Joe and Pip stand
 *   together in the half-dark, turned to each other, mouths open; Joe "stood
 *   looking on, motionless".
 *
 * Biddy, named in the guide for this moment, is not drawn: she is in the
 * kitchen, and hears the news afterwards. Seeds: 1801 (the wall), 1802 (the
 * floor), 1803 (the candle's light).
 */

const W = 860
const H = 340
/** Where the back wall meets the floor. */
const FLOOR = 246
/** The candle's flame, on the table. */
const FLAME: [number, number] = [356, 150]
/** The table: the back and front of its top, its ends, its feet. */
const TABLE = { back: 196, front: 206, x0: 290, x1: 446, feet: 300 }
/** The press against the back wall, on the right. */
const PRESS = { x0: 722, x1: 830, top: 52 }

/** The candle's light: 1 at the flame, falling away into the dark room. */
function light(x: number, y: number) {
  const d = Math.hypot(x - FLAME[0], (y - FLAME[1]) * 1.1)
  return Math.pow(clamp(1 - d / 400), 1.6)
}

type Marks = {
  wall: string
  glow: string
  floor: string
  rail: string
  pool: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const wall = gougeField(rng(1801), { x0: 0, x1: W, y0: 6, y1: FLOOR - 26 }, (x, y) =>
    Math.max(light(x, y) * 0.95, 0.04),
  )
  const glow = rays(rng(1803), FLAME[0], FLAME[1], { from: 16, to: 120, every: 6, width: 2.6 })
  // The floor: dark boards running away from the eye, the light of the
  // candle catching their edges only near the table.
  const r = rng(1802)
  let floor = ''
  const V: [number, number] = [380, 40]
  const floorLight = (x: number, y: number) => light(x, y - 70)
  for (let xt = -700; xt < 1500; xt += 30) {
    const xb = V[0] + (xt - V[0]) * ((H - V[1]) / (FLOOR - V[1]))
    let t0 = 0
    while (t0 < 1) {
      const t1 = Math.min(1, t0 + between(r, 0.12, 0.3))
      const x0 = xt + (xb - xt) * t0
      const y0 = FLOOR + (H - FLOOR) * t0
      const x1 = xt + (xb - xt) * t1
      const y1 = FLOOR + (H - FLOOR) * t1
      const L = floorLight((x0 + x1) / 2, (y0 + y1) / 2)
      if (L > 0.02 || r() < 0.35)
        floor += wedge(x0, y0, x1, y1, (0.3 + t0) * (0.4 + L * 3.4), (0.3 + t1) * (0.4 + L * 3.4))
      t0 = t1 + between(r, 0.03, 0.09)
    }
  }
  // The dado rail along the wall, and the skirting.
  const rail = gouge(0, FLOOR - 22, W, FLOOR - 22, 1.6) + gouge(0, FLOOR - 4, W, FLOOR - 4, 1.2)
  // Shadow pools under the table and under the people.
  let pool = ''
  const shade = (x0: number, x1: number, yc: number, h: number) => {
    for (let y = yc - h; y < yc + h; y += 3.2) {
      const w = 1 - Math.abs(y - yc) / h
      pool += gouge(x0 - w * 10, y, x1 + w * 10, y + 0.6, 0.6 + w * 1.9)
    }
  }
  shade(TABLE.x0, TABLE.x1, 304, 8)
  shade(120, 280, 312, 7)
  shade(490, 700, 314, 8)
  cached = { wall, glow, floor, rail, pool }
  return cached
}

/** The press: a tall cupboard with two panelled doors, in the shadow on the right. */
function Press() {
  const { x0, x1, top } = PRESS
  const mid = (x0 + x1) / 2
  return (
    <g>
      <path
        d={`M${x0} ${FLOOR + 10}V${top}H${x1}V${FLOOR + 10}Z`}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />
      <path
        d={`M${x0 - 6} ${top}H${x1 + 6}V${top - 8}H${x0 - 6}Z`}
        fill={INK}
        stroke={PAPER}
        strokeWidth={1.2}
      />
      <g fill="none" stroke={PAPER} strokeWidth={LINE.fine}>
        <rect x={x0 + 8} y={top + 12} width={mid - x0 - 12} height={96} />
        <rect x={mid + 4} y={top + 12} width={x1 - mid - 12} height={96} />
        <rect x={x0 + 8} y={top + 120} width={mid - x0 - 12} height={60} />
        <rect x={mid + 4} y={top + 120} width={x1 - mid - 12} height={60} />
      </g>
      <path d={`M${mid} ${top}V${FLOOR + 10}`} stroke={PAPER} strokeWidth={LINE.hairline} />
      <circle cx={mid - 5} cy={top + 112} r={1.8} fill={PAPER} />
      <circle cx={mid + 5} cy={top + 112} r={1.8} fill={PAPER} />
    </g>
  )
}

/** The table, its top lit by the candle, and the candle in its stick. */
function Table() {
  const { back, front, x0, x1, feet } = TABLE
  return (
    <g>
      <path
        d={`M${x0} ${front}L${x0 + 10} ${back}H${x1 - 10}L${x1} ${front}Z`}
        fill={PAPER}
        stroke={INK}
        strokeWidth={1.2}
      />
      <rect x={x0} y={front} width={x1 - x0} height={9} fill={INK} stroke={PAPER} strokeWidth={1} />
      <path
        d={`M${x0 + 10} ${front + 9}V${feet}M${x1 - 10} ${front + 9}V${feet}M${x0 + 30} ${front + 9}L${x0 + 34} ${feet - 12}M${x1 - 30} ${front + 9}L${x1 - 34} ${feet - 12}`}
        stroke={INK}
        strokeWidth={6}
      />
      <path
        d={
          gouge(x0 + 10, front + 14, x0 + 10, feet - 6, 0.8) +
          gouge(x1 - 10, front + 14, x1 - 10, feet - 6, 0.8)
        }
        fill={PAPER}
      />
      {/* the candlestick and the candle */}
      <path
        d={`M${FLAME[0] - 13} ${back + 4}Q${FLAME[0]} ${back - 4} ${FLAME[0] + 13} ${back + 4}Z`}
        fill={INK}
      />
      <rect x={FLAME[0] - 3} y={170} width={6} height={back - 170} fill={INK} />
      <rect x={FLAME[0] - 5.5} y={166} width={11} height={5} fill={INK} />
      <rect
        x={FLAME[0] - 3.5}
        y={FLAME[1] + 5}
        width={7}
        height={12}
        fill={PAPER}
        stroke={INK}
        strokeWidth={0.8}
      />
      <path
        className="lc-flicker"
        d={`M${FLAME[0]} ${FLAME[1] + 6}C${FLAME[0] - 4.5} ${FLAME[1] + 2} ${FLAME[0] - 3} ${FLAME[1] - 5} ${FLAME[0]} ${FLAME[1] - 13}C${FLAME[0] + 3} ${FLAME[1] - 5} ${FLAME[0] + 4.5} ${FLAME[1] + 2} ${FLAME[0]} ${FLAME[1] + 6}Z`}
        fill={RED}
      />
    </g>
  )
}

// ── THE PEOPLE, from the figure kit (./people.tsx) ──────────────────────────

/**
 * Mr Jaggers, facing right: his far leg standing, his near leg thrown over
 * the back of the chair with the foot on its seat, leaning on it, the far
 * forearm on the raised knee, the near hand throwing its forefinger at Pip.
 */
const JAGGERS_AT: [number, number] = [146, 318]
const JAGGERS: Pose = {
  look: 'jaggers',
  body: { neck: [14, -132], hip: [0, -70] },
  head: { at: [20, -153], rot: 8 },
  legs: {
    far: [
      [-2, -70],
      [-4, -36],
      [-5, -3],
    ],
    near: [
      [2, -72],
      [30, -76],
      [40, -44],
    ],
  },
  far: {
    pts: [
      [10, -126],
      [17, -98],
      [32, -86],
    ],
    hand: 'mitt',
  },
  near: {
    pts: [
      [16, -126],
      [40, -118],
      [62, -124],
    ],
    hand: 'point',
    deg: -4,
  },
}
/** The chair he leans on, its back towards him, in the panel's own units. */
const CHAIR = { back: 188, front: 236, seat: 260, top: 222, foot: 320 }

/** Pip, the apprentice, turned to Joe with his mouth open. */
const PIP_AT: [number, number] = [530, 320]
const PIP: Pose = {
  look: 'pip',
  age: 'youth',
  eye: 'wide',
  brow: 'up',
  head: { rot: -4 },
  near: {
    pts: [
      [3, -114],
      [13, -90],
      [21, -104],
    ],
    hand: 'open',
    deg: -70,
    spread: 20,
  },
}
/** Joe, facing left towards Pip, as amazed. */
const JOE_AT: [number, number] = [656, 322]
const JOE: Pose = { look: 'joe', eye: 'wide', brow: 'up', head: { rot: -3 } }

/**
 * A mouth open in a gasp, cut in paper, in the frame of a head; placed with
 * the head's own transform as the kit sets it (its centre, tilt and scale).
 */
const GASP = 'M13.6 9.6a2.1 1.5 0 1 0 4.2 0a2.1 1.5 0 1 0 -4.2 0Z'
const PIP_HEAD = 'translate(2.8 -147) rotate(-4) scale(0.95)'
const JOE_HEAD = 'translate(3 -160) rotate(-3) scale(1)'

function Chair() {
  const { back, front, seat, top, foot } = CHAIR
  return (
    <g stroke={PAPER} strokeWidth={1.4} strokeLinejoin="round" fill={INK}>
      <path d={`M${back - 3} ${foot}V${top}H${back + 4}V${foot}Z`} />
      <path d={`M${back} ${seat}H${front + 4}V${seat + 6}H${back}Z`} />
      <path d={`M${front - 1} ${seat + 6}V${foot}H${front + 5}V${seat + 6}Z`} />
      <path d={`M${back} ${top + 8}H${back + 4}M${back} ${top + 22}H${back + 4}`} />
    </g>
  )
}

function GreatExpectations({ uid: _uid }: ArtProps) {
  const m = marks()
  return (
    <>
      <g className="lc-push" style={timing({ origin: [380, 170], push: 1.03 })}>
        {/* the dark wall of the state parlour, lit only round the candle */}
        <path d={m.wall} fill={PAPER} />
        <path d={m.glow} fill={PAPER} />
        <circle cx={FLAME[0]} cy={FLAME[1] - 3} r={11} fill={INK} />
        <path d={m.rail} fill={PAPER} />
        {/* the floor, dark but where the candle reaches */}
        <path d={m.floor} fill={PAPER} />
        <path d={m.pool} fill={INK} />
        <Press />
        <Table />
        <Chair />
        <Person pose={JAGGERS} at={JAGGERS_AT} scale={1.32} />
        {/* "Joe and I gasped, and looked at one another." */}
        <Person pose={PIP} at={PIP_AT} scale={1.32}>
          <path d={GASP} transform={PIP_HEAD} fill={PAPER} />
        </Person>
        <Person pose={JOE} at={JOE_AT} scale={1.32} flip>
          <path d={GASP} transform={JOE_HEAD} fill={PAPER} />
        </Person>
      </g>
    </>
  )
}

export const greatExpectations: LinocutArt = { width: W, height: H, Draw: GreatExpectations }
