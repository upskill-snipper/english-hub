import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  between,
  clamp,
  gouge,
  gougeField,
  n,
  rays,
  rng,
  type Pt,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

/**
 * THE BEDCHAMBER of Act 5, Scene 2, cut once for the panels set in it, so a
 * student meets the same room from the candle to the last speech: "Emilia
 * speaks" and "Othello's last words" (moments 16 and 17) use it, and "The
 * murder" (moment 15) may. Change a shape here and every panel that uses it
 * changes: preview them all.
 *
 * WHAT THE PLAY SAYS OF THE ROOM, and so what is drawn (the held edition,
 * src/data/full-texts/othello.ts, Project Gutenberg #1531):
 *
 * - "Cyprus. A Bedchamber in the castle." So the walls are a castle's: plain
 *   stone, cut as the house style cuts a wall, rows of gouges that follow the
 *   light, over a floor of stone flags.
 * - "Desdemona in bed asleep; a light burning." One light, and it is the
 *   only light in the room: a candle on a tall iron stand, its flame the spot
 *   colour, and every cut in the wall and the floor is widest round it.
 * - "Soft, by and by; let me the curtains draw." Othello draws the bed's
 *   curtains before he lets Emilia in, and at the end Lodovico orders of the
 *   bed "Let it be hid". So in the panels after the murder the bed is a
 *   four-poster with its curtains drawn all along its side, from the valance
 *   to the coverlet: the bodies on it are left to the words, as the Romeo and
 *   Juliet panel "Wedding turned to funeral" leaves Juliet. Nothing of anyone
 *   on the bed is drawn, and nothing that could be read as a shape under the
 *   coverlet.
 * - "[Unlocks the door.]" So there is a door, and after Emilia it stands
 *   open on the dark of the passage: Montano, Gratiano and Iago come in by it,
 *   and later Lodovico, Cassio and the officers with Iago.
 * - "you chaste stars"; "you ever-burning lights above" (3.3). It is night,
 *   so a narrow window in the castle wall shows the stars.
 *
 * Seeds are the panel's own, passed in: each panel records its seeds in its
 * docblock.
 */

export const W = 860
export const H = 340
/** Where the back wall meets the floor. */
export const FLOOR = 266

export type Light = (x: number, y: number) => number

/** The light of the one candle, its flame at `flame`: bright round it, falling away to the corners. */
export function candleLight(flame: Pt, reach = 380): Light {
  return (x, y) =>
    Math.max(
      clamp(1 - Math.hypot((x - flame[0]) * 0.8, (y - flame[1]) * 1.15) / reach) ** 1.25,
      0.04,
    )
}

/** Keep only the gouges of a field whose first point is not hidden behind something. */
function keep(d: string, hidden: (x: number, y: number) => boolean): string {
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
 * The stone of the walls and the flags of the floor, lit by the candle.
 * `hidden` says where something stands in front of the wall (the bed, the
 * door), so no cut is spent there: every cut is weight on the page.
 */
export function chamberMarks(
  seed: number,
  light: Light,
  hidden: (x: number, y: number) => boolean = () => false,
): { wall: string; joints: string; flags: string } {
  const r = rng(seed)
  const wall = keep(
    gougeField(r, { x0: 0, x1: W, y0: 8, y1: FLOOR - 8 }, light, {
      spacing: 6.6,
      len: [16, 64],
      gap: [6, 22],
      max: 3.3,
    }),
    hidden,
  )
  // The flags: rows that widen towards us, their joints running back to a
  // point above the middle of the room. A joint is cut wider in the light.
  const V: Pt = [430, 40]
  const rows = [FLOOR, 277, 291, 309, 332, H + 6]
  const X = (u: number, y: number) => V[0] + ((u - V[0]) * (y - V[1])) / (FLOOR - V[1])
  let joints = ''
  for (let i = 1; i < rows.length - 1; i++) {
    const y = rows[i]
    let x = between(r, -12, 0)
    while (x < W) {
      const len = between(r, 50, 130)
      const L = light(x + len / 2, y - 60)
      joints += gouge(x, y, x + len, y + between(r, -0.5, 0.5), 0.45 + L * 1.4 + i * 0.12)
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
      const L = light((xa + xb) / 2, y0 - 60)
      joints += gouge(xa, y0, xb, y1, 0.35 + L * 1.2 + i * 0.1)
    }
  }
  // the worn faces of the flags, catching the light only near the candle
  let flags = ''
  for (let y = FLOOR + 5; y < H; y += 4.6) {
    let x = between(r, -20, 0)
    while (x < W) {
      const len = between(r, 10, 34)
      const L = light(x + len / 2, y - 70)
      if (L > 0.18 && r() < L * 1.1)
        flags += gouge(x, y, x + len, y + between(r, -0.4, 0.4), 0.3 + L * 1.8)
      x += len + between(r, 5, 18)
    }
  }
  return { wall, joints, flags }
}

/** The floor of the chamber, in front of the wall, with its flags. */
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

// ── The bed, its curtains drawn ─────────────────────────────────────────────

export interface Bed {
  /** The posts at the head and the foot. */
  x0: number
  x1: number
  /** The floor under its feet. */
  foot: number
  /** The top of its cornice. */
  top: number
}

/** Where the curtains hang from, and down to: in the frame of the panel. */
const curtainTop = (b: Bed) => b.top + 26
const curtainFoot = (b: Bed) => b.foot - 64

/** The folds of the drawn curtains and of the coverlet below them. */
export function bedMarks(seed: number, b: Bed, light: Light): { folds: string; cover: string } {
  const r = rng(seed)
  const top = curtainTop(b)
  const bot = curtainFoot(b)
  let folds = ''
  for (let x = b.x0 + 10; x < b.x1 - 6; x += between(r, 11, 16)) {
    const L = light(x, (top + bot) / 2)
    folds += gouge(
      x,
      top + 8,
      x + between(r, -2.4, 2.4),
      bot - 3,
      0.8 + L * 2.2,
      between(r, -1.6, 1.6),
    )
    if (r() < 0.4)
      folds += gouge(x + 5, top + 22, x + 4 + between(r, -2, 2), bot - 12, 0.55 + L * 0.9, 0.8)
  }
  let cover = ''
  for (let x = b.x0 + 20; x < b.x1 - 12; x += between(r, 22, 32))
    cover += gouge(x, bot + 9, x + between(r, -3, 3), b.foot - 33, 1, between(r, -1.2, 1.2))
  return { folds, cover }
}

/**
 * The four-poster with its curtains drawn all along its side: cornice,
 * scalloped valance, the curtains in heavy folds meeting in the middle, the
 * coverlet hanging below them over the side rail, and the posts. Nothing of
 * anyone on the bed shows.
 */
export function CurtainedBed({ b, marks }: { b: Bed; marks: { folds: string; cover: string } }) {
  const { x0, x1, foot, top } = b
  const ct = curtainTop(b)
  const cb = curtainFoot(b)
  const mid = (x0 + x1) / 2
  // the valance: a band under the cornice, its lower edge scalloped
  const span = x1 - x0 + 12
  const k = Math.max(4, Math.round(span / 19))
  const s = span / k
  let valance = `M${n(x0 - 6)} ${top + 10}H${n(x1 + 6)}V${top + 24}`
  for (let i = 0; i < k; i++) {
    const xa = x1 + 6 - i * s
    valance += `Q${n(xa - s / 2)} ${top + 34} ${n(xa - s)} ${top + 24}`
  }
  valance += 'Z'
  // the coverlet: from under the curtains to a hem that falls in soft waves
  const hemY = foot - 30
  let cover = `M${n(x0 + 2)} ${cb - 4}H${n(x1 - 2)}V${hemY - 4}`
  const kk = Math.max(4, Math.round((x1 - x0) / 30))
  const ss = (x1 - 4 - (x0 + 2)) / kk
  for (let i = 0; i < kk; i++) {
    const xa = x1 - 2 - i * ss
    cover += `Q${n(xa - ss / 2)} ${hemY + 5} ${n(xa - ss)} ${hemY - 4}`
  }
  cover += 'Z'
  const ring = (x: number, y: number) => gouge(x - 4.4, y, x + 4.4, y, 1.1)
  return (
    <g>
      {/* the curtains, drawn all along the bed's side */}
      <path
        d={`M${n(x0)} ${ct}H${n(x1)}V${cb}H${n(x0)}Z`}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />
      <path d={marks.folds} fill={PAPER} />
      {/* where the two curtains meet, overlapping a little */}
      <path
        d={`M${n(mid + 3)} ${ct + 2}C${n(mid + 5)} ${ct + 60} ${n(mid + 1)} ${cb - 60} ${n(mid + 4)} ${cb}`}
        stroke={PAPER}
        strokeWidth={2.4}
        fill="none"
      />
      {/* the coverlet, hanging over the side rail below them */}
      <path
        d={`M${n(x0)} ${cb}H${n(x1)}V${hemY + 2}H${n(x0)}Z`}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />
      <path d={cover} fill={PAPER} />
      <path d={marks.cover} fill={INK} />
      {/* the side rail, and the shadow under the bed */}
      <path d={`M${n(x0)} ${hemY + 2}H${n(x1)}V${foot - 6}H${n(x0)}Z`} fill={INK} />
      <path d={gouge(x0 + 8, hemY + 9, x1 - 8, hemY + 9, 1.2)} fill={PAPER} />
      {/* the valance and the cornice above it */}
      <path d={valance} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <path d={gouge(x0 + 2, top + 17, x1 - 2, top + 17, 1.1)} fill={PAPER} />
      <rect
        x={x0 - 16}
        y={top}
        width={x1 - x0 + 32}
        height={11}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />
      {/* the posts, turned, with a knob above the cornice */}
      <path
        d={`M${n(x0 - 8)} ${top - 6}V${foot}M${n(x1 + 8)} ${top - 6}V${foot}`}
        stroke={PAPER}
        strokeWidth={11.6}
      />
      <path
        d={`M${n(x0 - 8)} ${top - 6}V${foot}M${n(x1 + 8)} ${top - 6}V${foot}`}
        stroke={INK}
        strokeWidth={8.4}
      />
      <g fill={INK} stroke={PAPER} strokeWidth={1.4}>
        <circle cx={n(x0 - 8)} cy={top - 9} r={5.4} />
        <circle cx={n(x1 + 8)} cy={top - 9} r={5.4} />
      </g>
      <path
        d={
          ring(x0 - 8, ct + 30) +
          ring(x0 - 8, cb + 6) +
          ring(x0 - 8, foot - 22) +
          ring(x1 + 8, ct + 30) +
          ring(x1 + 8, cb + 6) +
          ring(x1 + 8, foot - 22)
        }
        fill={PAPER}
      />
    </g>
  )
}

// ── The one light ───────────────────────────────────────────────────────────

/** The candle's light thrown on the wall round it: broken spokes, for under everything else. */
export function candleGlow(seed: number, flame: Pt, to = 88): string {
  return rays(rng(seed), flame[0], flame[1] - 4, { from: 13, to, every: 8, width: 2.6 })
}

/**
 * The candle on its tall iron stand: three feet on the floor at `floor`, the
 * shaft, a drip-pan, the candle in paper, and its flame in the spot colour,
 * flickering. `flame` is the flame's foot.
 */
export function CandleStand({ flame, floor }: { flame: Pt; floor: number }) {
  const [x, y] = flame
  const pan = y + 28
  return (
    <g>
      <path
        d={`M${n(x)} ${n(pan + 4)}V${n(floor - 10)}M${n(x - 18)} ${n(floor)}L${n(x)} ${n(floor - 14)}L${n(x + 18)} ${n(floor)}`}
        stroke={PAPER}
        strokeWidth={6.6}
        fill="none"
        strokeLinejoin="round"
      />
      <path
        d={`M${n(x)} ${n(pan + 4)}V${n(floor - 10)}M${n(x - 18)} ${n(floor)}L${n(x)} ${n(floor - 14)}L${n(x + 18)} ${n(floor)}`}
        stroke={INK}
        strokeWidth={3.8}
        fill="none"
        strokeLinejoin="round"
      />
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
      <path
        className="lc-flicker"
        style={timing({ dur: 0.9, delay: 0.3 })}
        d={`M${n(x)} ${n(y + 2)}C${n(x - 5)} ${n(y - 2)} ${n(x - 4)} ${n(y - 9)} ${n(x)} ${n(y - 17)}C${n(x + 4)} ${n(y - 9)} ${n(x + 5)} ${n(y - 2)} ${n(x)} ${n(y + 2)}Z`}
        fill={RED}
      />
    </g>
  )
}

// ── The door and the window ─────────────────────────────────────────────────

/**
 * The door Othello unlocked, standing open on the dark of the passage: the
 * doorway an arch, its stones cut in paper; the door itself swung back flat
 * against the wall beside it, planked, with two iron straps.
 */
export function OpenDoor({ x0, x1, top }: { x0: number; x1: number; top: number }) {
  const w = x1 - x0
  const r = w / 2
  const arch = `M${n(x0)} ${FLOOR}V${n(top + r)}A${n(r)} ${n(r)} 0 0 1 ${n(x1)} ${n(top + r)}V${FLOOR}Z`
  const leaf = `M${n(x1 + 10)} ${FLOOR}V${n(top + r)}A${n(r)} ${n(r)} 0 0 1 ${n(x1 + 10 + w)} ${n(top + r)}V${FLOOR}Z`
  let planks = ''
  for (let x = x1 + 10 + w / 5; x < x1 + 10 + w - 4; x += w / 5)
    planks += gouge(x, top + 8 + Math.abs(x - (x1 + 10 + r)) * 0.4, x, FLOOR - 4, 0.9)
  let stones = ''
  for (let k = 1; k < 7; k++) {
    const a = (Math.PI * k) / 7
    const cx = (x0 + x1) / 2
    stones += gouge(
      cx - Math.cos(a) * (r + 1),
      top + r - Math.sin(a) * (r + 1),
      cx - Math.cos(a) * (r + 10),
      top + r - Math.sin(a) * (r + 10),
      0.9,
    )
  }
  return (
    <g>
      <path
        d={`M${n(x0 - 10)} ${FLOOR}V${n(top + r)}A${n(r + 10)} ${n(r + 10)} 0 0 1 ${n(x1 + 10)} ${n(top + r)}V${FLOOR}Z`}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />
      <path d={stones} fill={PAPER} />
      <path d={arch} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={leaf} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={planks} fill={PAPER} />
      <path
        d={`M${n(x1 + 12)} ${n(top + r + 18)}H${n(x1 + 6 + w)}M${n(x1 + 12)} ${FLOOR - 28}H${n(x1 + 6 + w)}`}
        stroke={PAPER}
        strokeWidth={2.4}
      />
      <circle cx={n(x1 + w - 2)} cy={n((top + r + FLOOR) / 2)} r={2.6} fill={PAPER} />
    </g>
  )
}

/** A narrow window in the castle wall, arched, with the night sky and its stars. */
export function NightWindow({ x, top, w, h }: { x: number; top: number; w: number; h: number }) {
  const r = w / 2
  const outer = `M${n(x - 7)} ${n(top + h)}V${n(top + r)}A${n(r + 7)} ${n(r + 7)} 0 0 1 ${n(x + w + 7)} ${n(top + r)}V${n(top + h)}Z`
  const inner = `M${n(x)} ${n(top + h)}V${n(top + r)}A${n(r)} ${n(r)} 0 0 1 ${n(x + w)} ${n(top + r)}V${n(top + h)}Z`
  const star = (cx: number, cy: number, s: number) =>
    gouge(cx - s, cy, cx + s, cy, 0.6) + gouge(cx, cy - s, cx, cy + s, 0.6)
  return (
    <g>
      <path d={outer} fill={PAPER} />
      <path d={inner} fill={INK} />
      <path
        d={
          star(x + w * 0.3, top + r * 0.9, 3.2) +
          star(x + w * 0.72, top + r * 1.7, 2.4) +
          star(x + w * 0.36, top + h * 0.62, 2.8) +
          star(x + w * 0.7, top + h * 0.84, 2)
        }
        fill={PAPER}
      />
      <rect x={n(x - 10)} y={n(top + h)} width={w + 20} height={6} fill={PAPER} />
    </g>
  )
}
