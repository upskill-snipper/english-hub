import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, gougeField, n, rays, rng } from '@/components/comics/linocut/carve'

import { flagFloor } from '../../romeo-and-juliet/panels/acts-3-4-kit'
import { TorchFlame } from './people'
import { gothicArch, type Light, type P } from './venice-night'

/**
 * THE COUNCIL CHAMBER IN VENICE, cut once for the two panels of Act 1, Scene
 * 3: "Before the senate", with the Duke and senators sitting, and "Iago's
 * plan is born", when they have gone. It is one room seen twice, from the
 * same place, so a student knows it again: the same long table under its
 * cloth, the Duke's high chair, the same candles, the arched door on the
 * left, the panelled walls and the tall windows on the night.
 *
 * WHAT THE PLAY SAYS, and so what is drawn (the held edition,
 * src/data/full-texts/othello.ts, Project Gutenberg #1531):
 * - "Venice. A council chamber. The Duke and Senators sitting at a table;
 *   Officers attending." So a long table, the Duke in the middle of it in a
 *   high chair, and the senators beside him.
 * - It is the middle of the night: the senate has been "rais'd and met" by
 *   the news from Cyprus (1.2), and Brabantio says "In this time of the
 *   night?" So the windows are black and the light is the candles' on the
 *   table, printed in the spot colour, cut into the wall behind them.
 * - "My letters say a hundred and seven galleys." "And mine a hundred and
 *   forty." So letters lie open on the table.
 * - The Duke sends for Desdemona and she comes in with Iago ("Enter
 *   Desdemona, Iago and Attendants"): the arched door on the left, lit from
 *   the passage beyond it.
 *
 * Nothing is taken from a film or stage production. Each panel passes its own
 * seeds.
 */

/** Where the walls meet the floor. */
export const FLOOR = 262
/** The table: its top edge, the left end of it, and the floor under its cloth. */
export const TABLE = { x0: 548, x1: 868, top: 212 }
/** The arched door on the left. */
export const DOOR = { x0: 28, x1: 132, top: 92 }
/** The Duke's high chair. */
export const CHAIR = { x0: 692, x1: 758, top: 66 }
/** The senators' chairs, either side of it. */
export const SENATOR_CHAIRS = [618, 832]
/** The tall windows, dark on the night. */
export const WINDOWS = [
  { x0: 402, x1: 458, top: 22, bottom: 146 },
  { x0: 586, x1: 640, top: 22, bottom: 130 },
]
/** The candles on the table: where each flame stands. */
export const CANDLES: P[] = [
  [580, 178],
  [662, 176],
  [790, 176],
  [858, 178],
]

/** The candles' light on the room, brightest over the table. */
export function candleLight(flames: P[], reach = 300): Light {
  return (x, y) =>
    Math.max(...flames.map(([fx, fy]) => clamp(1 - Math.hypot(x - fx, (y - fy) * 1.15) / reach)))
}

/**
 * The marks of the room under a given light: the wall above the panelling,
 * cut where the light reaches it (`wall`, fill PAPER over INK), and the stone
 * floor's joints (`floor`, fill INK over PAPER).
 */
export function chamberMarks(seed: number, light: Light, W: number, H: number) {
  const wall = gougeField(
    rng(seed),
    { x0: 0, x1: W, y0: 6, y1: 184 },
    (x, y) => clamp(light(x, y) * 1.1) * 0.85 + 0.02,
    { spacing: 6.4, len: [20, 70], gap: [6, 20], max: 3.2 },
  )
  const floor = flagFloor(rng(seed + 1), W, H, FLOOR, [430, 120], 64, 5)
  return { wall, floor }
}

/** The panelling round the room below the dado rail: frames cut in paper on the ink. */
export function wainscot(W: number) {
  let d = ''
  for (let x = 6; x < W - 30; x += 58) {
    d += `M${x} 196H${x + 46}V250H${x}Z`
  }
  return d
}

/** A tall window on the night: its leaded lights, cut in paper on the black. Stroke PAPER. */
export function nightWindow(w: { x0: number; x1: number; top: number; bottom: number }) {
  const frame = gothicArch(w.x0, w.x1, w.top, w.bottom, 0.66)
  const mid = (w.x0 + w.x1) / 2
  let lead = `M${n(mid)} ${n(w.top + 18)}V${n(w.bottom)}`
  for (let y = w.top + 34; y < w.bottom - 4; y += 18) lead += `M${n(w.x0)} ${n(y)}H${n(w.x1)}`
  return { frame, lead }
}

/**
 * The Duke's high chair: a tall back with a pointed cresting and two
 * finials, its panels cut in paper. Fill INK, edged in PAPER.
 */
export function dukeChair() {
  const { x0, x1, top } = CHAIR
  const mid = (x0 + x1) / 2
  const back =
    `M${x0} ${TABLE.top}V${top + 26}L${mid} ${top}L${x1} ${top + 26}V${TABLE.top}Z` +
    `M${x0 - 5} ${top + 30}h8v-12h-8zM${x1 - 3} ${top + 30}h8v-12h-8z`
  const panel = gothicArch(x0 + 10, x1 - 10, top + 20, TABLE.top - 8, 0.8)
  return { back, panel }
}

/** A senator's chair: a lower back, square-topped. */
export function senatorChair(x: number, top = 118) {
  return `M${x - 22} ${TABLE.top}V${top + 6}Q${x} ${top - 6} ${x + 22} ${top + 6}V${TABLE.top}Z`
}

/**
 * The long table: its top seen edge-on as a paper strip, and the heavy cloth
 * falling to the floor, its folds cut in paper.
 */
export function tableMarks(seed: number, W: number) {
  const r = rng(seed)
  let folds = ''
  for (let x = TABLE.x0 + 14; x < W; x += between(r, 22, 34)) {
    folds += gouge(
      x,
      TABLE.top + 12,
      x + between(r, -3, 3),
      FLOOR + 6,
      between(r, 1, 1.8),
      between(r, -1, 1),
    )
  }
  const cloth = `M${TABLE.x0} ${TABLE.top + 6}H${W + 10}V${FLOOR + 10}H${TABLE.x0 - 4}Z`
  const fringe = `M${TABLE.x0} ${TABLE.top + 8}H${W + 10}`
  return { cloth, folds, fringe }
}

/**
 * A candle in a short candlestick on the table, its flame at `at`: the stick
 * edged in paper, the candle in paper, the flame in the spot colour. `out`
 * leaves it snuffed, with a thread of smoke, for the emptied room.
 */
export function Candle({
  at,
  out = false,
  s = 1,
  delay = 0,
}: {
  at: P
  out?: boolean
  s?: number
  delay?: number
}) {
  const [x, y] = at
  const base = TABLE.top + 2
  const stick =
    `M${n(x - 9 * s)} ${n(base)}H${n(x + 9 * s)}L${n(x + 4 * s)} ${n(base - 6 * s)}H${n(x + 2.4 * s)}` +
    `V${n(y + 16 * s)}H${n(x + 6 * s)}V${n(y + 12.6 * s)}H${n(x - 6 * s)}V${n(y + 16 * s)}H${n(x - 2.4 * s)}` +
    `V${n(base - 6 * s)}H${n(x - 4 * s)}Z`
  const wax = `M${n(x - 3 * s)} ${n(y + 12.6 * s)}V${n(y + (out ? 6 : 1) * s)}H${n(x + 3 * s)}V${n(y + 12.6 * s)}Z`
  return (
    <g>
      <path d={stick} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={wax} fill={PAPER} stroke={INK} strokeWidth={1} />
      {out ? (
        <path
          className="lc-rise"
          d={`M${n(x)} ${n(y + 5 * s)}C${n(x - 4 * s)} ${n(y - 4 * s)} ${n(x + 5 * s)} ${n(y - 10 * s)} ${n(x)} ${n(y - 20 * s)}`}
          fill="none"
          stroke={PAPER}
          strokeWidth={1}
          strokeLinecap="round"
        />
      ) : (
        <TorchFlame at={[x, y + 1]} s={0.62 * s} rays={false} delay={delay} />
      )}
    </g>
  )
}

/** Letters lying open on the table, with lines of writing in ink. */
export function letters(sheets: [number, number, number][]) {
  let paper = ''
  let lines = ''
  for (const [x, y, w] of sheets) {
    paper += `M${n(x)} ${n(y)}L${n(x + w)} ${n(y - 2)}L${n(x + w + 3)} ${n(y + 5)}L${n(x + 2)} ${n(y + 7)}Z`
    lines += `M${n(x + 4)} ${n(y + 2.4)}H${n(x + w - 4)}M${n(x + 5)} ${n(y + 4.6)}H${n(x + w - 6)}`
  }
  return { paper, lines }
}

/** The arched door on the left, open on the lit passage: the opening, and its light as cuts. */
export function doorMarks(seed: number) {
  const opening = `M${DOOR.x0} ${FLOOR}V${DOOR.top + 52}A52 52 0 0 1 ${DOOR.x1} ${DOOR.top + 52}V${FLOOR}Z`
  const light = rays(rng(seed), (DOOR.x0 + DOOR.x1) / 2, DOOR.top + 60, {
    from: 30,
    to: 120,
    every: 14,
    width: 2,
  })
  return { opening, light }
}
