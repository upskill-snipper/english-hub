import type { ReactNode } from 'react'

import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, gougeField, rng, wedge } from '@/components/comics/linocut/carve'

/**
 * The rooms of Leonato's house, for "Don John's accusation" (Act 3, Scene 2,
 * "A Room in Leonato's House") and "Too busy to listen" (Act 3, Scene 5,
 * "Another Room in Leonato's House"). The play says nothing of the rooms but
 * that they are in the Governor's house in Messina, so they are drawn plainly,
 * as a house of the play's Sicily: a lime-washed wall, a tiled floor and a
 * round-arched window with its shutters folded back. Both panels are cut from
 * this one room so a student knows the house again.
 *
 * The wall is lit from the window and the floor tiles run back to a point
 * near it; the view through the window belongs to each panel (`outside`).
 */

export const W = 860
export const H = 340
/** Where the wall meets the floor. */
export const FLOOR = 250

export type Win = { x0: number; x1: number; top: number; bottom: number }

/** A round-arched opening. */
export function arch({ x0, x1, top, bottom }: Win) {
  const r = (x1 - x0) / 2
  return `M${x0} ${bottom}V${top + r}A${r} ${r} 0 0 1 ${x1} ${top + r}V${bottom}Z`
}

const cache = new Map<string, { wall: string; floor: string; shade: string }>()

/** The wall's cuts and the floor's joints, lit from `win`. One seed per panel. */
export function roomMarks(seed: number, win: Win) {
  const key = `${seed}:${win.x0}:${win.x1}`
  const hit = cache.get(key)
  if (hit) return hit
  const r = rng(seed)
  const cx = (win.x0 + win.x1) / 2
  const cy = (win.top + win.bottom) / 2
  const light = (x: number, y: number) =>
    Math.max(clamp(1 - Math.hypot((x - cx) * 0.7, y - cy) / 260) * 0.85, 0.08)
  const wall = gougeField(r, { x0: 0, x1: W, y0: 4, y1: FLOOR - 16 }, light, {
    spacing: 6.4,
    len: [20, 70],
    gap: [6, 20],
    max: 3.6,
  })
  // Square tiles: joints running back to a point below the window, and
  // cross-joints closing up with distance.
  let floor = ''
  const V: [number, number] = [cx, 150]
  for (let xt = -900; xt < 1800; xt += 52) {
    const xb = V[0] + (xt - V[0]) * ((H - V[1]) / (FLOOR - V[1]))
    const x0 = V[0] + (xt - V[0])
    floor += wedge(x0, FLOOR, xb, H, 0.8, 2.6)
  }
  for (const y of [258, 270, 286, 308, 334])
    floor += gouge(-10, y, W + 10, y + between(r, -0.8, 0.8), 0.6 + (y - FLOOR) * 0.02)
  // The floor darkens away from the window's light.
  let shade = ''
  for (let y = FLOOR + 4; y < H; y += 4.4) {
    let x = between(r, -30, 0)
    while (x < W) {
      const len = between(r, 16, 50)
      const L = clamp(1 - Math.hypot(x - cx, (y - FLOOR) * 2.2) / 320)
      if (r() > 0.3 + L * 0.9) shade += gouge(x, y, x + len, y + between(r, -0.5, 0.5), 0.9)
      x += len + between(r, 6, 18)
    }
  }
  const out = { wall, floor, shade }
  cache.set(key, out)
  return out
}

/** The wall, the dado and the tiled floor. Draw first. */
export function Room({ seed, win }: { seed: number; win: Win }) {
  const m = roomMarks(seed, win)
  return (
    <>
      <path d={m.wall} fill={PAPER} />
      <rect x={0} y={FLOOR - 14} width={W} height={3} fill={PAPER} />
      <rect x={0} y={FLOOR} width={W} height={H - FLOOR} fill={PAPER} />
      <path d={m.floor} fill={INK} />
      <path d={m.shade} fill={INK} />
      <rect x={0} y={FLOOR - 2} width={W} height={4} fill={INK} />
    </>
  )
}

/**
 * The window: a deep reveal, the view (`outside`, clipped to the opening), a
 * mullion and transom, the sill, and the two shutter leaves folded back
 * against the wall.
 */
export function Window({ uid, win, outside }: { uid: string; win: Win; outside: ReactNode }) {
  const clip = `${uid}-win`
  const cx = (win.x0 + win.x1) / 2
  const r = (win.x1 - win.x0) / 2
  const shutter = (x: number, dir: 1 | -1) =>
    `M${x} ${win.top + r}L${x + dir * 30} ${win.top + r + 8}V${win.bottom + 2}L${x} ${win.bottom}Z`
  return (
    <>
      <defs>
        <clipPath id={clip}>
          <path d={arch(win)} />
        </clipPath>
      </defs>
      <path
        d={arch({ x0: win.x0 - 10, x1: win.x1 + 10, top: win.top - 10, bottom: win.bottom + 4 })}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />
      <path d={arch(win)} fill={PAPER} />
      <g clipPath={`url(#${clip})`}>{outside}</g>
      <path
        d={`M${cx} ${win.top}V${win.bottom}M${win.x0} ${win.top + r + 6}H${win.x1}`}
        stroke={INK}
        strokeWidth={4}
      />
      <path d={arch(win)} fill="none" stroke={INK} strokeWidth={3} />
      {/* the shutters, folded back */}
      <path
        d={shutter(win.x0 - 12, -1) + shutter(win.x1 + 12, 1)}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />
      <path
        d={
          gouge(win.x0 - 28, win.top + r + 12, win.x0 - 28, win.bottom - 4, 1.2) +
          gouge(win.x1 + 28, win.top + r + 12, win.x1 + 28, win.bottom - 4, 1.2)
        }
        fill={PAPER}
      />
      {/* the sill */}
      <path
        d={`M${win.x0 - 18} ${win.bottom}H${win.x1 + 18}V${win.bottom + 7}H${win.x0 - 18}Z`}
        fill={PAPER}
        stroke={INK}
        strokeWidth={1.4}
      />
    </>
  )
}
