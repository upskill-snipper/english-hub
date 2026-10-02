import type { CSSProperties } from 'react'

import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, gouge, n, rng, type Rng } from '@/components/comics/linocut/carve'

import { flagFloor, stoneWall } from '../../romeo-and-juliet/panels/acts-3-4-kit'

/**
 * The room of state in Lear's palace, Act 1, Scene 1 ("A Room of State in
 * King Lear's Palace"), where the first two moments of the guide's timeline
 * happen: "The love test" and "Kent banished, Cordelia taken by France". Cut
 * once here so that the two panels are plainly the same room: a stone hall
 * lit from one tall round-arched window, the King's high seat on a dais under
 * a cloth of state, flagstones, and the map Lear calls for ("Give me the map
 * there").
 *
 * The play describes none of the room beyond its name and the map. It is
 * drawn plainly, as a hall of the old Britain the play is set in: dressed
 * stone, a round arch, a carved wooden seat; nothing from a film or a stage
 * production.
 *
 * Every piece is drawn in the panel's own coordinates (860 by 340), with the
 * floor meeting the wall at FLOOR_Y.
 */

export const W = 860
export const H = 340
export const FLOOR_Y = 222

type Light = (x: number, y: number) => number

/** The stone wall, its cuts following the light. Fill both with PAPER over the ink ground. */
export function wallMarks(seed: number, light: Light) {
  return stoneWall(rng(seed), { x0: 0, x1: W, y0: 4, y1: FLOOR_Y - 4 }, light, 30)
}

/** The flagstone floor, its joints running to a point at the back of the room. */
export function floorMarks(seed: number, vanish: [number, number]) {
  return flagFloor(rng(seed), W, H, FLOOR_Y, vanish, 62, 6)
}

/**
 * A tall round-arched window in the wall, lit: the light in paper with a
 * mullion and a transom in ink, a deep ink reveal round it and a paper sill.
 * `x`, `y` are the top of the arch's opening; `w`, `h` its width and height.
 */
export function ArchedWindow({ x, y, w, h }: { x: number; y: number; w: number; h: number }) {
  const r = w / 2
  const open = `M${x - r} ${y + h}V${y + r}A${r} ${r} 0 0 1 ${x + r} ${y + r}V${y + h}Z`
  const R = r + 9
  const reveal = `M${x - R} ${y + h + 6}V${y + r}A${R} ${R} 0 0 1 ${x + R} ${y + r}V${y + h + 6}Z`
  return (
    <g>
      <path d={reveal} fill={INK} stroke={PAPER} strokeWidth={2.4} />
      <path d={open} fill={PAPER} />
      <path
        d={`M${x} ${y}V${y + h}M${x - r} ${y + h * 0.56}H${x + r}`}
        stroke={INK}
        strokeWidth={4}
      />
      <path
        d={`M${x - R - 6} ${y + h + 6}H${x + R + 6}V${y + h + 13}H${x - R - 6}Z`}
        fill={PAPER}
      />
      <path d={`M${x - R - 6} ${y + h + 13}H${x + R + 6}`} stroke={INK} strokeWidth={1.6} />
    </g>
  )
}

/**
 * The cloth of state behind the King's seat: a dark hanging with a broad
 * border cut in paper, small rosettes cut over it, and a dagged valance along
 * its top.
 */
export function ClothOfState({
  x0,
  x1,
  y0,
  y1,
  seed,
}: {
  x0: number
  x1: number
  y0: number
  y1: number
  seed: number
}) {
  const r = rng(seed)
  let rosettes = ''
  for (let y = y0 + 34; y < y1 - 14; y += 30)
    for (let x = x0 + 22 + (((y - y0) / 30) % 2) * 15; x < x1 - 14; x += 30) {
      const cx = x + between(r, -2, 2)
      const cy = y + between(r, -2, 2)
      for (let k = 0; k < 4; k++) {
        const a = (k * Math.PI) / 2 + Math.PI / 4
        rosettes += gouge(cx, cy, cx + Math.cos(a) * 5.6, cy + Math.sin(a) * 5.6, 1.5)
      }
    }
  let valance = `M${x0 - 4} ${y0 - 6}H${x1 + 4}V${y0 + 14}`
  for (let x = x1 + 4; x > x0 - 4; x -= 16)
    valance += `L${n(x - 8)} ${y0 + 24}L${n(x - 16)} ${y0 + 14}`
  valance += 'Z'
  return (
    <g>
      <path d={`M${x0} ${y0}H${x1}V${y1}H${x0}Z`} fill={INK} stroke={PAPER} strokeWidth={2} />
      <path
        d={`M${x0 + 7} ${y0 + 7}H${x1 - 7}V${y1 - 7}H${x0 + 7}Z`}
        fill="none"
        stroke={PAPER}
        strokeWidth={3.4}
      />
      <path d={rosettes} fill={PAPER} />
      <path d={valance} fill={INK} stroke={PAPER} strokeWidth={1.8} strokeLinejoin="round" />
      <path d={`M${x0} ${y0 + 6}H${x1}`} stroke={PAPER} strokeWidth={LINE.fine} />
    </g>
  )
}

/**
 * The King's seat: a high-backed chair of pale carved wood, so that the King
 * sits black against it, with a round-headed back, two knobs, arms and short
 * legs. `x` is the middle of the seat's front edge, `seatY` the top of the
 * seat, `top` the top of the back, `floor` where the legs stand.
 */
export function Throne({
  x,
  seatY,
  top,
  floor = seatY + 50,
}: {
  x: number
  seatY: number
  top: number
  floor?: number
}) {
  const back = `M${x - 58} ${seatY}V${top + 34}Q${x - 58} ${top} ${x - 18} ${top}Q${x + 22} ${top} ${x + 22} ${top + 34}V${seatY}Z`
  const inner = `M${x - 48} ${seatY - 6}V${top + 38}Q${x - 48} ${top + 10} ${x - 18} ${top + 10}Q${x + 12} ${top + 10} ${x + 12} ${top + 38}V${seatY - 6}Z`
  return (
    <g>
      <path d={back} fill={PAPER} stroke={INK} strokeWidth={2.4} strokeLinejoin="round" />
      <path d={inner} fill="none" stroke={INK} strokeWidth={LINE.fine} />
      <path
        d={
          gouge(x - 40, top + 46, x - 40, seatY - 14, 1.2) +
          gouge(x + 4, top + 46, x + 4, seatY - 14, 1.2)
        }
        fill={INK}
      />
      <circle cx={x - 58} cy={top + 30} r={6} fill={PAPER} stroke={INK} strokeWidth={2} />
      <circle cx={x + 22} cy={top + 30} r={6} fill={PAPER} stroke={INK} strokeWidth={2} />
      {/* the seat and its front rail, and the legs */}
      <path
        d={`M${x - 64} ${seatY}H${x + 34}V${seatY + 12}H${x - 64}Z`}
        fill={PAPER}
        stroke={INK}
        strokeWidth={2.2}
      />
      <path
        d={`M${x - 58} ${seatY + 12}V${floor}M${x + 28} ${seatY + 12}V${floor}`}
        stroke={INK}
        strokeWidth={6}
      />
      <path
        d={`M${x - 58} ${seatY + 12}V${floor}M${x + 28} ${seatY + 12}V${floor}`}
        stroke={PAPER}
        strokeWidth={2.4}
      />
    </g>
  )
}

/** The arm of the King's seat, in front of the figure: drawn after him. */
export function ThroneArm({ x, seatY }: { x: number; seatY: number }) {
  return (
    <g>
      <path
        d={`M${x - 16} ${seatY - 30}H${x + 34}V${seatY - 22}H${x - 16}Z`}
        fill={PAPER}
        stroke={INK}
        strokeWidth={2}
      />
      <path d={`M${x + 28} ${seatY - 22}V${seatY}`} stroke={INK} strokeWidth={6} />
      <path d={`M${x + 28} ${seatY - 22}V${seatY}`} stroke={PAPER} strokeWidth={2.2} />
      <circle cx={x + 34} cy={seatY - 26} r={5} fill={PAPER} stroke={INK} strokeWidth={2} />
    </g>
  )
}

/** The dais: two steps of pale stone, from the left edge to `x1`, its top at `y`. */
export function Dais({ x1, y }: { x1: number; y: number }) {
  return (
    <g>
      <path d={`M-6 ${y}H${x1}V${y + 16}H-6Z`} fill={PAPER} stroke={INK} strokeWidth={2.2} />
      <path d={`M-6 ${y + 16}H${x1}V${y + 22}H-6Z`} fill={INK} />
      <path
        d={`M-6 ${y + 22}H${x1 + 18}V${y + 38}H-6Z`}
        fill={PAPER}
        stroke={INK}
        strokeWidth={2.2}
      />
      <path d={`M-6 ${y + 38}H${x1 + 18}V${y + 44}H-6Z`} fill={INK} />
    </g>
  )
}

// ── The map ─────────────────────────────────────────────────────────────────

/**
 * The island, in the map's own frame (0 to 100 across, 0 to 130 down): a
 * plain old map of Britain, the north narrow and the south broad, with a tail
 * to the south-west. Not traced from any map; drawn by hand to read as an
 * island at panel size.
 */
const ISLAND: [number, number][] = [
  [46, 4],
  [54, 2],
  [60, 8],
  [56, 14],
  [62, 21],
  [57, 28],
  [52, 34],
  [56, 41],
  [54, 47],
  [59, 53],
  [63, 59],
  [67, 67],
  [71, 75],
  [76, 81],
  [84, 86],
  [91, 91],
  [88, 99],
  [85, 105],
  [92, 111],
  [80, 115],
  [66, 117],
  [54, 119],
  [44, 121],
  [32, 125],
  [19, 129],
  [15, 125],
  [25, 117],
  [33, 111],
  [29, 106],
  [23, 100],
  [25, 92],
  [31, 86],
  [35, 80],
  [39, 72],
  [35, 66],
  [39, 60],
  [35, 54],
  [31, 48],
  [35, 40],
  [29, 34],
  [33, 26],
  [27, 20],
  [33, 14],
  [38, 8],
]

/**
 * The lines of division, "even from this line to this": the north from the
 * rest, and the west from the east. Each is a cubic: start, two controls, end.
 */
const DIVISIONS: [number, number][][] = [
  [
    [31, 50],
    [40, 48],
    [48, 52],
    [57, 50],
  ],
  [
    [39, 73],
    [42, 86],
    [44, 100],
    [50, 120],
  ],
]

/**
 * Lear's map of the kingdom ("Give me the map there", 1.1): a sheet of
 * parchment hanging from a rod on a stand, the island cut in ink on it with
 * its "shadowy forests", "plenteous rivers" and "wide-skirted meads", and the
 * two lines that divide it in three printed in the spot colour: the scene is
 * the dividing of the kingdom. `x`, `y` are the top left of the sheet; `w`,
 * `h` its size. With `seed` for the scatter of the meadows.
 */
export function KingdomMap({
  x,
  y,
  w,
  h,
  seed,
  stand = true,
  redStyle,
}: {
  x: number
  y: number
  w: number
  h: number
  seed: number
  stand?: boolean
  /** With a timing style, the red lines fade in (lc-fade-in) after the print arrives. */
  redStyle?: CSSProperties
}) {
  const r: Rng = rng(seed)
  const sx = (w - 16) / 100
  const sy = (h - 22) / 130
  const ox = x + 8
  const oy = y + 12
  const P = (a: number, b: number) => `${n(ox + a * sx)} ${n(oy + b * sy)}`
  const island = 'M' + ISLAND.map(([a, b]) => P(a, b)).join('L') + 'Z'
  // forests: little clumps of three trees
  let forests = ''
  for (const [a, b] of [
    [44, 24],
    [50, 64],
    [62, 88],
    [36, 100],
    [72, 104],
  ]) {
    for (const [da, db] of [
      [0, 0],
      [5, 1],
      [2.4, -4],
    ]) {
      const cx = ox + (a + da) * sx
      const cy = oy + (b + db) * sy
      forests += `M${n(cx - 2.4)} ${n(cy)}a2.4 2.6 0 1 0 4.8 0a2.4 2.6 0 1 0 -4.8 0Z`
      forests += `M${n(cx - 0.5)} ${n(cy + 2)}h1v2.6h-1Z`
    }
  }
  // rivers, wandering from the hills to the sea
  const rivers =
    `M${P(48, 72)}C${P(54, 78)} ${P(50, 86)} ${P(58, 92)}S${P(70, 98)} ${P(80, 102)}` +
    `M${P(40, 30)}C${P(46, 34)} ${P(44, 38)} ${P(52, 40)}` +
    `M${P(44, 104)}C${P(40, 110)} ${P(36, 112)} ${P(30, 118)}`
  // meads: rows of small ticks
  let meads = ''
  for (let k = 0; k < 26; k++) {
    const a = between(r, 42, 78)
    const b = between(r, 74, 112)
    meads += `M${P(a, b)}l1.4 -1.6`
  }
  const sheet = `M${x} ${y + 6}H${x + w}V${y + h - 6}H${x}Z`
  const divisions = DIVISIONS.map(
    ([a, b, c, d]) => `M${P(...a)}C${P(...b)} ${P(...c)} ${P(...d)}`,
  ).join('')
  return (
    <g>
      {stand && (
        <path
          d={`M${x + 10} ${y + h + 30}L${x + w / 2 - 6} ${y - 14}M${x + w - 10} ${y + h + 30}L${x + w / 2 + 6} ${y - 14}M${x + w / 2} ${y - 12}V${y + h + 34}`}
          stroke={INK}
          strokeWidth={5}
          fill="none"
        />
      )}
      {stand && (
        <path
          d={`M${x + 10} ${y + h + 30}L${x + w / 2 - 6} ${y - 14}M${x + w - 10} ${y + h + 30}L${x + w / 2 + 6} ${y - 14}`}
          stroke={PAPER}
          strokeWidth={1.4}
          fill="none"
        />
      )}
      <path d={sheet} fill={PAPER} stroke={INK} strokeWidth={2} />
      {/* the rods at the top and the foot of the sheet */}
      <path
        d={`M${x - 6} ${y + 1}H${x + w + 6}V${y + 9}H${x - 6}ZM${x - 4} ${y + h - 9}H${x + w + 4}V${y + h - 1}H${x - 4}Z`}
        fill={INK}
        stroke={PAPER}
        strokeWidth={1.2}
      />
      <path d={island} fill="none" stroke={INK} strokeWidth={1.8} strokeLinejoin="round" />
      <path d={forests} fill={INK} />
      <path d={rivers} fill="none" stroke={INK} strokeWidth={1.1} strokeLinecap="round" />
      <path d={meads} fill="none" stroke={INK} strokeWidth={0.9} strokeLinecap="round" />
      <g className={redStyle ? 'lc-fade-in' : undefined} style={redStyle}>
        <path d={divisions} fill="none" stroke={RED} strokeWidth={3} strokeLinecap="round" />
      </g>
    </g>
  )
}
