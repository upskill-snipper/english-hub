import type { ReactNode } from 'react'

import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, gougeField, n, rng, wedge } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

/**
 * The church of Act 4, Scene 1 and Act 5, Scene 3, for "“Kill Claudio”" (the
 * church emptied after the failed wedding, by day) and "At the tomb" (the
 * same church at midnight, at Leonato's family monument), and for "The
 * wedding" if its artist wants it, so a student knows the church again.
 *
 * The held edition heads both scenes "The Inside of a Church." and says
 * nothing more of it but that Leonato's family has its "old monument" there
 * (the Friar, 4.1: "on your family's old monument / Hang mournful epitaphs").
 * So it is drawn plainly, as a church of the play's Sicily: stone walls cut
 * in courses, round arches, stone pillars, a flagged floor, and an altar with
 * a white cloth, a plain cross and two candles. Nothing is taken from a film
 * or stage production.
 *
 * The wall is ink, lit by whatever lights the panel has (`Light`); the
 * pillars and the altar cloth are pale stone and linen, so a figure in front
 * of them reads black against them.
 */

export const W = 860
export const H = 340
/** Where the wall meets the floor. */
export const FLOOR = 250

export type P = [number, number]
/** A light on the wall: its centre, its reach, and how bright it is (0 to 1). */
export type Light = { at: P; reach: number; power: number }
export type Opening = { x0: number; x1: number; top: number; bottom: number }

/**
 * The church as "The wedding" and "“Kill Claudio”" see it, the same view in
 * both so the church a student sees emptied is the one the wedding was broken
 * off in: the altar under its window on the left, a pillar of the nave, and
 * the west door on the right standing open on the day. These are the numbers
 * "The wedding" draws with; a panel of this view takes them from here, so
 * the two cannot drift apart again (they did twice while both were drawn at
 * once, on 26 September 2026).
 */
export const NAVE_VIEW = {
  altar: 123,
  win: { x0: 96, x1: 150, top: 30, bottom: 118 } as Opening,
  pillars: [262],
  door: { x0: 648, x1: 752, top: 92, bottom: FLOOR } as Opening,
}

/** A round-arched opening. */
export function arch({ x0, x1, top, bottom }: Opening) {
  const r = (x1 - x0) / 2
  return `M${n(x0)} ${n(bottom)}V${n(top + r)}A${n(r)} ${n(r)} 0 0 1 ${n(x1)} ${n(top + r)}V${n(bottom)}Z`
}

const cache = new Map<string, { wall: string; courses: string; floor: string; shade: string }>()

/**
 * The wall's cuts, the joints of its stone courses, and the floor's flags
 * with the shade across them away from the light. One seed per panel.
 *
 * By `night` the floor is ink, not paper: the flags are cut in paper only
 * where a light reaches them, as the wall is, so a church lit by a few
 * tapers is not given a floor in daylight.
 */
export function naveMarks(seed: number, lights: Light[], vanish: P = [430, 120], night = false) {
  const key = `${seed}`
  const hit = cache.get(key)
  if (hit) return hit
  const r = rng(seed)
  const light = (x: number, y: number) =>
    Math.max(
      0.05,
      ...lights.map(
        (l) => clamp(1 - Math.hypot(x - l.at[0], (y - l.at[1]) * 0.85) / l.reach) * l.power,
      ),
    )
  const wall = gougeField(r, { x0: 0, x1: W, y0: 4, y1: FLOOR - 3 }, light, {
    spacing: 6,
    len: [16, 56],
    gap: [6, 20],
    max: 3.4,
  })
  // The courses of the stone: a paper joint every 34 units, and the upright
  // joints staggered between them, cut only where some light falls.
  let courses = ''
  for (let row = 0, y = 30; y < FLOOR - 10; row++, y += 34) {
    let x = between(r, -10, 10)
    while (x < W) {
      const len = between(r, 30, 90)
      if (light(x + len / 2, y) > 0.14)
        courses += gouge(x, y, x + len, y + between(r, -0.6, 0.6), 0.8)
      x += len + between(r, 2, 8)
    }
    for (let xj = (row % 2) * 40 + between(r, 0, 30); xj < W; xj += between(r, 70, 110))
      if (light(xj, y + 17) > 0.2) courses += gouge(xj, y + 3, xj, y + 31, 0.7)
  }
  // Flags: joints running back towards `vanish`, cross-joints closing up
  // with distance.
  let floor = ''
  if (night) {
    const lit = (x: number, y: number) => light(x, FLOOR - (y - FLOOR) * 1.6) * 0.9
    floor = gougeField(r, { x0: 0, x1: W, y0: FLOOR + 5, y1: H }, lit, {
      spacing: 5.4,
      len: [12, 40],
      gap: [6, 18],
      max: 2.6,
    })
    const out = { wall, courses, floor, shade: '' }
    cache.set(key, out)
    return out
  }
  for (let xt = -900; xt < 1800; xt += 50) {
    const xb = vanish[0] + (xt - vanish[0]) * ((H - vanish[1]) / (FLOOR - vanish[1]))
    floor += wedge(xt, FLOOR, xb, H, 0.9, 3)
  }
  for (const y of [258, 270, 287, 309, 336])
    floor += gouge(-10, y, W + 10, y + between(r, -0.8, 0.8), 0.7 + (y - FLOOR) * 0.024)
  let shade = ''
  for (let y = FLOOR + 4; y < H; y += 4.2) {
    let x = between(r, -30, 0)
    while (x < W) {
      const len = between(r, 16, 54)
      const L = light(x + len / 2, FLOOR - (y - FLOOR) * 1.4)
      if (r() > 0.2 + L * 1.1) shade += gouge(x, y, x + len, y + between(r, -0.5, 0.5), 1)
      x += len + between(r, 6, 18)
    }
  }
  const out = { wall, courses, floor, shade }
  cache.set(key, out)
  return out
}

/** The wall and the flagged floor. Draw first. */
export function Nave({
  seed,
  lights,
  vanish,
  night = false,
}: {
  seed: number
  lights: Light[]
  vanish?: P
  night?: boolean
}) {
  const m = naveMarks(seed, lights, vanish, night)
  if (night)
    return (
      <>
        <path d={m.wall} fill={PAPER} />
        <path d={m.courses} fill={PAPER} />
        <path d={m.floor} fill={PAPER} />
        <path d={`M0 ${FLOOR}H${W}`} stroke={PAPER} strokeWidth={LINE.fine} />
      </>
    )
  return (
    <>
      <path d={m.wall} fill={PAPER} />
      <path d={m.courses} fill={PAPER} />
      <rect x={0} y={FLOOR} width={W} height={H - FLOOR} fill={PAPER} />
      <path d={m.floor} fill={INK} />
      <path d={m.shade} fill={INK} />
      <rect x={0} y={FLOOR - 2} width={W} height={4} fill={INK} />
    </>
  )
}

/**
 * A stone pillar from `top` to the floor: pale, shaded down its far side,
 * with a square capital and base. `lit` is the side the light comes from.
 */
export function Pillar({ x, top = 24, lit = -1 }: { x: number; top?: number; lit?: 1 | -1 }) {
  const s = -lit
  return (
    <g>
      <rect x={x - 16} y={top} width={32} height={FLOOR - top} fill={PAPER} />
      <path
        d={
          gouge(x + s * 8, top + 16, x + s * 8, FLOOR - 14, 2.2) +
          gouge(x + s * 12.5, top + 14, x + s * 12.5, FLOOR - 12, 1.6) +
          gouge(x + s * 3, top + 30, x + s * 3.5, FLOOR - 30, 0.9)
        }
        fill={INK}
      />
      <path
        d={`M${x - 24} ${top - 8}H${x + 24}V${top}H${x - 24}ZM${x - 19} ${top}H${x + 19}L${x + 16} ${top + 7}H${x - 16}Z`}
        fill={PAPER}
        stroke={INK}
        strokeWidth={2}
        strokeLinejoin="round"
      />
      <path
        d={`M${x - 22} ${FLOOR - 12}H${x + 22}V${FLOOR}H${x - 22}Z`}
        fill={PAPER}
        stroke={INK}
        strokeWidth={2}
      />
    </g>
  )
}

/** A round-arched window, deep in the wall: its reveal, the view, the leading. */
export function ChurchWindow({
  uid,
  win,
  outside,
}: {
  uid: string
  win: Opening
  outside?: ReactNode
}) {
  const clip = `${uid}-cw-${win.x0}`
  const cx = (win.x0 + win.x1) / 2
  const r = (win.x1 - win.x0) / 2
  return (
    <>
      <defs>
        <clipPath id={clip}>
          <path d={arch(win)} />
        </clipPath>
      </defs>
      <path
        d={arch({ x0: win.x0 - 9, x1: win.x1 + 9, top: win.top - 9, bottom: win.bottom + 5 })}
        fill={PAPER}
      />
      <path
        d={arch({ x0: win.x0 - 4, x1: win.x1 + 4, top: win.top - 4, bottom: win.bottom + 2 })}
        fill={INK}
      />
      <path d={arch(win)} fill={PAPER} />
      {outside && <g clipPath={`url(#${clip})`}>{outside}</g>}
      <path
        d={`M${n(cx)} ${win.top}V${win.bottom}M${win.x0} ${n(win.top + r + 8)}H${win.x1}M${win.x0} ${n((win.top + r + 8 + win.bottom) / 2)}H${win.x1}`}
        stroke={INK}
        strokeWidth={2.4}
      />
    </>
  )
}

/**
 * The altar, centred on `x`: two steps, the table under a white cloth, a
 * plain cross and two candles. `flames` lights them, in the spot colour.
 */
export function Altar({ x, flames = true }: { x: number; flames?: boolean }) {
  return (
    <g>
      <path
        d={`M${x - 118} ${FLOOR + 10}H${x + 118}V${FLOOR}H${x + 104}V${FLOOR - 8}H${x - 104}V${FLOOR}H${x - 118}Z`}
        fill={PAPER}
        stroke={INK}
        strokeWidth={2}
      />
      <path d={`M${x - 104} ${FLOOR}H${x + 104}`} stroke={INK} strokeWidth={1.6} />
      <path
        d={`M${x - 74} ${FLOOR - 8}V194H${x + 74}V${FLOOR - 8}Z`}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />
      {/* the cloth, falling in folds at the front */}
      <path
        d={`M${x - 80} 190H${x + 80}V216C${x + 50} 220 ${x - 50} 220 ${x - 80} 216Z`}
        fill={PAPER}
        stroke={INK}
        strokeWidth={2}
      />
      <path
        d={
          gouge(x - 56, 196, x - 58, 214, 1) +
          gouge(x - 18, 196, x - 18, 216, 1) +
          gouge(x + 20, 196, x + 21, 216, 1) +
          gouge(x + 58, 196, x + 58, 214, 1)
        }
        fill={INK}
      />
      {/* the cross and the candlesticks, ink cut free of the dark wall by a paper edge */}
      <g stroke={PAPER} strokeLinejoin="round">
        <path d={`M${x} 190V136M${x - 13} 150H${x + 13}`} strokeWidth={8.4} />
        <path
          d={
            `M${x - 10} 190H${x + 10}L${x + 6} 184H${x - 6}Z` +
            [x - 52, x + 52]
              .map((c) => `M${c - 8} 190H${c + 8}L${c + 3} 183V170H${c - 3}V183Z`)
              .join('')
          }
          strokeWidth={3.4}
        />
      </g>
      <path d={`M${x} 190V136M${x - 13} 150H${x + 13}`} stroke={INK} strokeWidth={5} />
      <path d={`M${x - 10} 190H${x + 10}L${x + 6} 184H${x - 6}Z`} fill={INK} />
      {/* the candles */}
      {[x - 52, x + 52].map((c, i) => (
        <g key={c}>
          <path d={`M${c - 8} 190H${c + 8}L${c + 3} 183V170H${c - 3}V183Z`} fill={INK} />
          <rect
            x={c - 2.6}
            y={152}
            width={5.2}
            height={18}
            fill={PAPER}
            stroke={INK}
            strokeWidth={1.2}
          />
          {flames && (
            <path
              className="lc-flicker"
              style={timing({ dur: 0.8, delay: i * 0.3 })}
              d={`M${c} 150C${c - 4} 146 ${c - 3} 141 ${c} 133C${c + 3} 141 ${c + 4} 146 ${c} 150Z`}
              fill={RED}
            />
          )}
        </g>
      ))}
    </g>
  )
}
