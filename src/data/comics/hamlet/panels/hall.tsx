import type { ReactNode } from 'react'

import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, gougeField, rng, type Pt } from '@/components/comics/linocut/carve'

/**
 * THE HALL OF ACT 5, SCENE 2, cut once for the three moments the guide sets
 * there, one after another on one afternoon: "The readiness is all", "The
 * duel" and "The rest is silence". The geometry, the light and the seeds are
 * the ones "The rest is silence" (./the-rest-is-silence.tsx) cut the hall
 * with first, reproduced here draw for draw, so the three panels show one
 * room: the same stone, the same flags, the same great window on the right
 * with the same land beyond it. A panel draws `HallBack` first and passes what
 * it sees through the window (nothing, or Fortinbras's column on the road) as
 * `children`, which are clipped to the window.
 *
 * WHAT THE PLAY SAYS, and so what is drawn (the held edition,
 * src/data/full-texts/hamlet.ts, Project Gutenberg #1524):
 *
 * - "A hall in the Castle." It is day: Hamlet will "walk here in the hall
 *   ... it is the breathing time of day with me", and Osric finds the day
 *   "very sultry". So the hall is lit by the day through one great window,
 *   and every cut in the wall and the floor is widest near it; the light it
 *   throws lies across the flags.
 *
 * Seeds: 2101 (the wall and the flags), 2102 (the sky and the land in the
 * window), as in "The rest is silence".
 */

export const W = 860
export const H = 340
/** Where the back wall meets the floor. */
export const FLOOR = 258

/** The great window: the opening, its round head springing at `spring`, its sill. */
export const WIN = { x0: 606, x1: 798, spring: 118, sill: 214 }
export const WIN_R = (WIN.x1 - WIN.x0) / 2
export const WIN_C = (WIN.x0 + WIN.x1) / 2
export const WINDOW_D = `M${WIN.x0} ${WIN.sill}V${WIN.spring}A${WIN_R} ${WIN_R} 0 0 1 ${WIN.x1} ${WIN.spring}V${WIN.sill}Z`
/** The splayed stone round it, lit by the day. */
const REVEAL = 12
const REVEAL_D = `M${WIN.x0 - REVEAL} ${WIN.sill + 6}V${WIN.spring}A${WIN_R + REVEAL} ${WIN_R + REVEAL} 0 0 1 ${WIN.x1 + REVEAL} ${WIN.spring}V${WIN.sill + 6}Z`
/** The crest of the road beyond the window. */
export const ROAD = 207

/** The light of the day through the window, on the wall and the floor. */
export const light = (x: number, y: number) =>
  Math.min(
    Math.max(clamp(1 - Math.hypot((x - WIN_C) * 0.62, (y - 150) * 1.1) / 440) ** 1.15, 0.05),
    0.78,
  )

/** The patch of sunlight on the flags, thrown in from the window towards us. */
export const SUN = `M${WIN.x0 + 6} ${FLOOR}L${WIN.x1 - 4} ${FLOOR}L742 ${H}L452 ${H}Z`

type Marks = {
  wall: string
  joints: string
  sunJoints: string
  sky: string
  land: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const r = rng(2101)
  const inWindow = (x: number, y: number) =>
    x > WIN.x0 - REVEAL - 2 &&
    x < WIN.x1 + REVEAL + 2 &&
    y < WIN.sill + 8 &&
    (y > WIN.spring || Math.hypot(x - WIN_C, y - WIN.spring) < WIN_R + REVEAL + 2)
  const field = gougeField(r, { x0: 0, x1: W, y0: 6, y1: FLOOR - 6 }, light, {
    spacing: 6.8,
    len: [16, 60],
    gap: [6, 22],
    max: 3.2,
  })
  const wall = field
    .split('M')
    .filter((c) => {
      if (!c) return false
      const [x, y] = c.split(/[ Q]/).map(Number)
      return !inWindow(x, y)
    })
    .map((c) => 'M' + c)
    .join('')

  // The flags: rows widening towards us, joints running back to a point above
  // the middle of the hall.
  const V: Pt = [430, 30]
  const rows = [FLOOR, 270, 285, 304, 328, H + 6]
  const X = (u: number, y: number) => V[0] + ((u - V[0]) * (y - V[1])) / (FLOOR - V[1])
  let joints = ''
  let sunJoints = ''
  for (let i = 1; i < rows.length - 1; i++) {
    const y = rows[i]
    let x = between(r, -12, 0)
    while (x < W) {
      const len = between(r, 50, 130)
      joints += gouge(x, y, x + len, y + between(r, -0.5, 0.5), 0.6 + i * 0.16)
      sunJoints += gouge(x, y, x + len, y + between(r, -0.5, 0.5), 0.5 + i * 0.12)
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
      joints += gouge(xa, y0, xb, y1, 0.5 + i * 0.12)
      sunJoints += gouge(xa, y0, xb, y1, 0.45 + i * 0.1)
    }
  }

  // The sky in the window: cut darkest at the top of the arch, clearing
  // towards the road, where the sun is.
  const s = rng(2102)
  let sky = ''
  for (let y = WIN.spring - WIN_R + 6; y < 176; y += 5.2) {
    const depth = clamp(1 - (y - (WIN.spring - WIN_R)) / 150)
    let x = WIN.x0 + between(s, -20, 0)
    while (x < WIN.x1) {
      const len = between(s, 14, 46)
      if (s() < depth * 0.9)
        sky += gouge(x, y, x + len, y + between(s, -0.4, 0.4), 0.4 + depth * 1.8)
      x += len + between(s, 6, 20)
    }
  }
  // The ground falling away below the road: furrows, darker towards the sill.
  let land = ''
  for (let y = ROAD + 3; y < WIN.sill; y += 2.6) {
    const t = (y - ROAD) / (WIN.sill - ROAD)
    let x = WIN.x0 + between(s, -16, 0)
    while (x < WIN.x1) {
      const len = between(s, 12, 40)
      land += gouge(x, y, x + len, y + between(s, -0.3, 0.3), 0.5 + t * 1.2)
      x += len + between(s, 3, 10) * (1.2 - t)
    }
  }
  cached = { wall, joints, sunJoints, sky, land }
  return cached
}

/**
 * The hall: its wall of cut stone, its floor of flags with the day's light
 * thrown across them, and the great window with the sky and the land beyond.
 * `children` are drawn inside the window, clipped to it, in the panel's frame.
 */
export function HallBack({ uid, children }: { uid: string; children?: ReactNode }) {
  const m = marks()
  const win = `${uid}-hall-win`
  const sun = `${uid}-hall-sun`
  return (
    <g>
      <defs>
        <clipPath id={win}>
          <path d={WINDOW_D} />
        </clipPath>
        <clipPath id={sun}>
          <path d={SUN} />
        </clipPath>
      </defs>
      <path d={m.wall} fill={PAPER} />
      {/* the floor of flags, ink, its joints cut */}
      <rect x={0} y={FLOOR} width={W} height={H - FLOOR} fill={INK} />
      <path d={m.joints} fill={PAPER} />
      {/* the day's light thrown in across the flags */}
      <path d={SUN} fill={PAPER} />
      <g clipPath={`url(#${sun})`}>
        <path d={m.sunJoints} fill={INK} />
      </g>
      <rect x={0} y={FLOOR - 3} width={W} height={3} fill={PAPER} />

      {/* the window: its lit stone reveal, then the day beyond */}
      <path d={REVEAL_D} fill={PAPER} />
      <path d={WINDOW_D} fill={PAPER} stroke={INK} strokeWidth={LINE.bold} />
      <g clipPath={`url(#${win})`}>
        <path d={m.sky} fill={INK} />
        <path d={m.land} fill={INK} />
        {children}
      </g>
      <rect
        x={WIN.x0 - REVEAL - 4}
        y={WIN.sill}
        width={WIN.x1 - WIN.x0 + REVEAL * 2 + 8}
        height={7}
        fill={PAPER}
      />
      <rect
        x={WIN.x0 - REVEAL - 4}
        y={WIN.sill + 7}
        width={WIN.x1 - WIN.x0 + REVEAL * 2 + 8}
        height={2.4}
        fill={INK}
      />
    </g>
  )
}

// ── The table ───────────────────────────────────────────────────────────────

/**
 * The table against the wall at the left, under its white cloth, where the
 * King has the wine set: "Set me the stoups of wine upon that table." As "The
 * rest is silence" cuts it. `Table` draws the legs and the cloth; the stoups
 * are drawn by `stoup`, each a tall lidded flagon with a handle.
 */
export const TABLE_TOP = 214
const CLOTH = `M18 ${TABLE_TOP}H154L158 ${TABLE_TOP + 34}C130 ${TABLE_TOP + 37} 46 ${TABLE_TOP + 37} 14 ${TABLE_TOP + 34}Z`
const TABLE_LEGS = `M26 ${TABLE_TOP + 34}H34V${FLOOR + 8}H26ZM138 ${TABLE_TOP + 34}H146V${FLOOR + 8}H138Z`
const CLOTH_FOLDS =
  gouge(40, TABLE_TOP + 6, 38, TABLE_TOP + 33, 1.3) +
  gouge(72, TABLE_TOP + 6, 73, TABLE_TOP + 34, 1.2) +
  gouge(104, TABLE_TOP + 6, 106, TABLE_TOP + 34, 1.2) +
  gouge(134, TABLE_TOP + 6, 138, TABLE_TOP + 33, 1.3)

/** A stoup of wine: a tall lidded flagon with a handle, its foot on the table at x. */
export function stoup(x: number, h = 34): string {
  const y = TABLE_TOP
  return (
    `M${x - 8} ${y}L${x - 6} ${y - h + 6}L${x - 7} ${y - h + 2}L${x + 7} ${y - h + 2}L${x + 6} ${y - h + 6}L${x + 8} ${y}Z` +
    `M${x - 7.6} ${y - h + 2}Q${x} ${y - h - 6} ${x + 7.6} ${y - h + 2}Z` +
    `M${x + 7} ${y - h + 8}C${x + 15} ${y - h + 8} ${x + 15} ${y - 10} ${x + 7.4} ${y - 8}L${x + 7.4} ${y - 11}C${x + 11.6} ${y - 12} ${x + 11.6} ${y - h + 11} ${x + 6.6} ${y - h + 11}Z`
  )
}

/** The table and its cloth. */
export function Table() {
  return (
    <g>
      <path d={TABLE_LEGS} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={CLOTH} fill={PAPER} />
      <path d={CLOTH_FOLDS} fill={INK} />
    </g>
  )
}
