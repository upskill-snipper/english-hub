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
  type Pt,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

/**
 * THE ROOMS OF ELSINORE: the stone walls, the flagged floors, the doorways
 * and the candles of the castle, cut once here so that the castle reads as
 * one building from panel to panel. First cut for the panels of moments 11 to
 * 15 (Act 3, Scene 3 to Act 4, Scene 5): "The King at prayer", "The closet
 * scene", "Sent to England" and "Ophelia mad, Laertes in arms". The lobby
 * (./lobby.tsx) and the other castle rooms take their stone and flags from
 * here too, so a change to `roomMarks`, `Floor` or the constants below
 * changes every one of them: preview them all before changing one.
 *
 * WHAT THE PLAY SAYS, and so what is drawn (the held edition,
 * src/data/full-texts/hamlet.ts):
 *
 * - A castle: "Elsinore. A room in the Castle." So the walls are plain stone,
 *   cut as the house style cuts a wall (rows of gouges that follow the light),
 *   over a floor of stone flags, as the Othello and Macbeth castles are cut.
 * - The hour and the light are each panel's own, passed to `roomMarks` as a
 *   light function; the play names no lamp. Act 3, Scene 3 to Act 4, Scene 3
 *   follow the play-scene by night without a break ("'Tis now the very
 *   witching time of night", 3.2; "I'll call upon you ere you go to bed",
 *   3.3; "I'll have him hence tonight", 4.3). So "The King at prayer" and
 *   "The closet scene" are lit by one candle (`CandleStand`, `CandleStick`),
 *   its flame the spot colour, and every cut in the wall and the floor is
 *   widest round it (`flameLight`); "Sent to England" is lit from the passage
 *   beyond its door.
 *
 * A light function must stay between 0 and 1 everywhere in the panel: a
 * negative number raised to a power is NaN, and a NaN in a path is dropped by
 * the browser with an error (it was, once, in a corner of "Ophelia mad,
 * Laertes in arms"; `clamp` it). Seeds are the panel's own, passed in: each
 * panel records its seeds in its docblock.
 */

export const W = 860
export const H = 340
/** Where the back wall meets the floor. */
export const FLOOR = 264

export type Light = (x: number, y: number) => number

/** The light of one flame at `at`: bright round it, falling away to the corners. */
export function flameLight(at: Pt, reach = 360, least = 0.04): Light {
  return (x, y) =>
    Math.max(clamp(1 - Math.hypot((x - at[0]) * 0.8, (y - at[1]) * 1.1) / reach) ** 1.3, least)
}

/** Keep only the gouges of a field whose first point is not hidden behind something. */
export function keep(d: string, hidden: (x: number, y: number) => boolean): string {
  return d
    .split('M')
    .filter((c) => {
      if (!c) return false
      const [x, y] = c.split(/[ Q]/).map(Number)
      return !hidden(x, y)
    })
    .map((c) => 'M' + c)
    .join('')
}

/**
 * The stone of the walls and the flags of the floor, lit by `light`.
 * `hidden` says where something stands in front of the wall, so no cut is
 * spent there: every cut is weight on the page.
 */
export function roomMarks(
  seed: number,
  light: Light,
  hidden: (x: number, y: number) => boolean = () => false,
): { wall: string; joints: string; flags: string } {
  const r = rng(seed)
  const wall = keep(
    gougeField(r, { x0: 0, x1: W, y0: 8, y1: FLOOR - 6 }, light, {
      spacing: 6.8,
      len: [16, 60],
      gap: [6, 22],
      max: 3.2,
    }),
    hidden,
  )
  // The flags: rows that widen towards us, their joints running back to a
  // point above the middle of the room. A joint is cut wider in the light.
  const V: Pt = [430, 30]
  const rows = [FLOOR, 275, 289, 307, 330, H + 6]
  const X = (u: number, y: number) => V[0] + ((u - V[0]) * (y - V[1])) / (FLOOR - V[1])
  let joints = ''
  for (let i = 1; i < rows.length - 1; i++) {
    const y = rows[i]
    let x = between(r, -12, 0)
    while (x < W) {
      const len = between(r, 50, 130)
      const L = light(x + len / 2, y - 70)
      joints += gouge(x, y, x + len, y + between(r, -0.5, 0.5), 0.5 + L * 1.4 + i * 0.12)
      x += len + between(r, 1, 5)
    }
  }
  for (let i = 0; i < rows.length - 1; i++) {
    const y0 = rows[i] + 1.5
    const y1 = Math.min(rows[i + 1], H) - 1.5
    const off = i % 2 ? 31 : 0
    for (let u = -240 + off; u < W + 240; u += 62) {
      const xa = X(u, y0)
      const xb = X(u, y1)
      if (Math.max(xa, xb) < -4 || Math.min(xa, xb) > W + 4) continue
      const L = light((xa + xb) / 2, y0 - 70)
      joints += gouge(xa, y0, xb, y1, 0.4 + L * 1.2 + i * 0.1)
    }
  }
  // the worn faces of the flags, catching the light only near the flame
  let flags = ''
  for (let y = FLOOR + 5; y < H; y += 4.6) {
    let x = between(r, -20, 0)
    while (x < W) {
      const len = between(r, 10, 34)
      const L = light(x + len / 2, y - 80)
      if (L > 0.16 && r() < L * 1.1)
        flags += gouge(x, y, x + len, y + between(r, -0.4, 0.4), 0.3 + L * 1.8)
      x += len + between(r, 5, 18)
    }
  }
  return { wall, joints, flags }
}

/** The floor in front of the wall, with its flags, and the paper line of the wall's foot. */
export function Floor({ marks }: { marks: { joints: string; flags: string } }) {
  return (
    <>
      <rect x={0} y={FLOOR} width={W} height={H - FLOOR} fill={INK} />
      <path d={marks.flags} fill={PAPER} />
      <path d={marks.joints} fill={PAPER} />
      <rect x={0} y={FLOOR - 3} width={W} height={3} fill={PAPER} />
    </>
  )
}

/** A soft pool of shadow on the floor under a figure or a piece of furniture. */
export function shadowPool(cx: number, cy: number, half: number, rows = 5): string {
  let d = ''
  for (let k = 0; k < rows; k++) {
    const y = cy - rows * 1.6 + k * 3.2
    const w = half * (1 - Math.abs(k - (rows - 1) / 2) / rows)
    d += gouge(cx - w, y, cx + w, y + 0.4, 1.3 + (1 - Math.abs(k - (rows - 1) / 2) / rows) * 1.2)
  }
  return d
}

// ── The one light ───────────────────────────────────────────────────────────

/** The flame's light thrown on the wall round it: broken spokes, for under everything else. */
export function flameGlow(seed: number, flame: Pt, to = 92): string {
  return rays(rng(seed), flame[0], flame[1] - 6, { from: 14, to, every: 7.5, width: 2.6 })
}

/** A candle's flame in the spot colour, its foot at `at`, flickering, with a paper heart. */
export function Flame({ at, s = 1, delay = 0.3 }: { at: Pt; s?: number; delay?: number }) {
  const [x, y] = at
  return (
    <g>
      <path
        className="lc-flicker"
        style={timing({ dur: 0.9, delay })}
        d={`M${n(x)} ${n(y + 2 * s)}C${n(x - 5 * s)} ${n(y - 2 * s)} ${n(x - 4 * s)} ${n(y - 9 * s)} ${n(x)} ${n(y - 17 * s)}C${n(x + 4 * s)} ${n(y - 9 * s)} ${n(x + 5 * s)} ${n(y - 2 * s)} ${n(x)} ${n(y + 2 * s)}Z`}
        fill={RED}
      />
      <path
        d={`M${n(x)} ${n(y)}C${n(x - 1.8 * s)} ${n(y - 2 * s)} ${n(x - 1.4 * s)} ${n(y - 5 * s)} ${n(x)} ${n(y - 8 * s)}C${n(x + 1.4 * s)} ${n(y - 5 * s)} ${n(x + 1.8 * s)} ${n(y - 2 * s)} ${n(x)} ${n(y)}Z`}
        fill={PAPER}
      />
    </g>
  )
}

/**
 * A candle on a tall iron stand: three feet on the floor at `floor`, the
 * shaft, a drip-pan, the candle in paper, and its flame. `flame` is the
 * flame's foot.
 */
export function CandleStand({ flame, floor }: { flame: Pt; floor: number }) {
  const [x, y] = flame
  const pan = y + 26
  const iron = `M${n(x)} ${n(pan + 4)}V${n(floor - 10)}M${n(x - 18)} ${n(floor)}L${n(x)} ${n(floor - 14)}L${n(x + 18)} ${n(floor)}`
  return (
    <g>
      <path d={iron} stroke={PAPER} strokeWidth={6.6} fill="none" strokeLinejoin="round" />
      <path d={iron} stroke={INK} strokeWidth={3.8} fill="none" strokeLinejoin="round" />
      <path
        d={`M${n(x - 12)} ${n(pan)}H${n(x + 12)}L${n(x + 8)} ${n(pan + 5)}H${n(x - 8)}Z`}
        fill={INK}
        stroke={PAPER}
        strokeWidth={1.2}
      />
      <rect
        x={n(x - 4)}
        y={n(y + 2)}
        width={8}
        height={pan - y - 2}
        fill={PAPER}
        stroke={INK}
        strokeWidth={0.9}
      />
      <Flame at={flame} />
    </g>
  )
}

/**
 * A candle in a plain stick on a table or a ledge: the flame's foot at
 * `flame`, the base resting on `base`.
 */
export function CandleStick({ flame, base }: { flame: Pt; base: number }) {
  const [x, y] = flame
  return (
    <g>
      <path
        d={`M${n(x - 9)} ${n(base)}Q${n(x - 8)} ${n(base - 6)} ${n(x - 2.6)} ${n(base - 7)}V${n(y + 24)}H${n(x + 2.6)}V${n(base - 7)}Q${n(x + 8)} ${n(base - 6)} ${n(x + 9)} ${n(base)}Z`}
        fill={INK}
        stroke={PAPER}
        strokeWidth={1.4}
        strokeLinejoin="round"
      />
      <path
        d={`M${n(x - 7)} ${n(y + 24)}H${n(x + 7)}L${n(x + 5)} ${n(y + 28)}H${n(x - 5)}Z`}
        fill={INK}
        stroke={PAPER}
        strokeWidth={1.1}
      />
      <rect
        x={n(x - 3.6)}
        y={n(y + 2)}
        width={7.2}
        height={22}
        fill={PAPER}
        stroke={INK}
        strokeWidth={0.9}
      />
      <Flame at={flame} />
    </g>
  )
}

// ── Doorways ────────────────────────────────────────────────────────────────

/**
 * An arched doorway in the castle wall, its stones cut in paper round the
 * arch, standing open on the dark of the passage beyond. `x0` and `x1` are the
 * jambs, `top` the crown of the arch. Its leaf is not drawn: a panel that needs
 * one draws it, open or broken.
 */
export function Doorway({ x0, x1, top }: { x0: number; x1: number; top: number }) {
  const w = x1 - x0
  const r = w / 2
  const cx = (x0 + x1) / 2
  let stones = ''
  for (let k = 1; k < 8; k++) {
    const a = (Math.PI * k) / 8
    stones += gouge(
      cx - Math.cos(a) * (r + 1.5),
      top + r - Math.sin(a) * (r + 1.5),
      cx - Math.cos(a) * (r + 11),
      top + r - Math.sin(a) * (r + 11),
      1,
    )
  }
  for (let y = top + r + 16; y < FLOOR - 8; y += 22) {
    stones += gouge(x0 - 11, y, x0 - 1.5, y, 0.9) + gouge(x1 + 1.5, y, x1 + 11, y, 0.9)
  }
  return (
    <g>
      <path
        d={`M${n(x0 - 12)} ${FLOOR}V${n(top + r)}A${n(r + 12)} ${n(r + 12)} 0 0 1 ${n(x1 + 12)} ${n(top + r)}V${FLOOR}Z`}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />
      <path d={stones} fill={PAPER} />
      <path
        d={`M${n(x0)} ${FLOOR}V${n(top + r)}A${n(r)} ${n(r)} 0 0 1 ${n(x1)} ${n(top + r)}V${FLOOR}Z`}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />
    </g>
  )
}

/** The flags of the passage seen through a doorway: a few lit cuts on its floor. */
export function passageFloor(x0: number, x1: number, seed: number): string {
  const r = rng(seed)
  let d = ''
  for (let k = 0, y = FLOOR - 16; y < FLOOR - 2; k++, y += 3.6 + k) {
    let x = x0 + between(r, 2, 8)
    while (x < x1 - 6) {
      const len = between(r, 8, 22)
      d += gouge(x, y, Math.min(x + len, x1 - 4), y + between(r, -0.3, 0.3), 0.4 + k * 0.25)
      x += len + between(r, 4, 10)
    }
  }
  return d
}

/** A plank's grain, cut in paper down a door leaf from `top` to `foot`. */
export function planks(x0: number, x1: number, top: number, foot: number, k = 5): string {
  let d = ''
  const w = (x1 - x0) / k
  for (let i = 1; i < k; i++) d += wedge(x0 + i * w, top + 4, x0 + i * w, foot - 4, 1.4, 1)
  return d
}
