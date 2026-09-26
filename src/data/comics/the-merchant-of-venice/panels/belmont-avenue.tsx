import type { ReactNode } from 'react'

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
  type Rng,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

/**
 * The avenue to Portia's house at Belmont by moonlight: Act 5, Scene 1, the
 * one place of the play's last scene, cut for "In such a night" in the same
 * view, with the same moon, house, trees and bank, as "The ring quarrel"
 * (./the-ring-quarrel.tsx) draws them later the same night, so a student
 * knows the place again. The numbers below are that panel's; change one
 * and change it there.
 *
 * From the held edition (src/data/full-texts/the-merchant-of-venice.ts):
 * - "Belmont. The avenue to Portia's house." So two rows of tall trees run
 *   back to the house door, and the ground either side of the walk is grass.
 * - LORENZO: "The moon shines bright. In such a night as this, / When the
 *   sweet wind did gently kiss the trees". So a full moon stands high over
 *   the bank.
 * - LORENZO: "Look how the floor of heaven / Is thick inlaid with patens of
 *   bright gold." So the sky is thick with stars, some cut as round patens.
 * - LORENZO: "How sweet the moonlight sleeps upon this bank!" So the bank in
 *   the foreground is the palest ground in the print.
 * - PORTIA: "That light we see is burning in my hall. / How far that little
 *   candle throws his beams!" So one window of the house is lit, in the spot
 *   colour, with its beams cut round it.
 *
 * Nothing is taken from a film or stage production. Each panel passes its
 * own seed; the marks come from seed, seed + 1, ... seed + 4.
 */

export const W = 860
export const H = 340
/** The moon, high over the bank. */
export const MOON: Pt = [214, 74]
/** Portia's house at the end of the avenue, and the lit window of the hall. */
export const HOUSE = { x0: 598, x1: 764, eaves: 150, ground: 214 }
export const HALL_WIN: Pt = [712, 182]
/** The vanishing point of the avenue, at the house door. */
export const VP: Pt = [650, 214]
/** The bank in the foreground, where the moonlight sleeps. */
export const BANK =
  'M-10 350V262C40 244 120 234 200 236C280 238 350 248 410 264C440 272 470 290 492 350Z'

type Tree = { cx: number; base: number; h: number; w: number }
/** The two rows of cypresses running back to the house door. */
const TREES: Tree[] = [
  { cx: 426, base: 272, h: 194, w: 31 },
  { cx: 502, base: 238, h: 132, w: 23 },
  { cx: 560, base: 228, h: 100, w: 17 },
  { cx: 602, base: 220, h: 74, w: 13 },
  { cx: 630, base: 216, h: 52, w: 9 },
  { cx: 826, base: 272, h: 196, w: 32 },
  { cx: 782, base: 240, h: 122, w: 21 },
]

/** A cypress: a flame-shaped crown, widest a third of the way up, dark to the ground. */
function cypress(t: Tree) {
  const { cx, base, h, w } = t
  const top = base - h
  return (
    `M${n(cx - w * 0.5)} ${n(base)}` +
    `C${n(cx - w * 0.85)} ${n(base - h * 0.1)} ${n(cx - w)} ${n(base - h * 0.3)} ${n(cx - w * 0.82)} ${n(base - h * 0.5)}` +
    `C${n(cx - w * 0.6)} ${n(top + h * 0.22)} ${n(cx - w * 0.2)} ${n(top + h * 0.06)} ${n(cx)} ${n(top)}` +
    `C${n(cx + w * 0.2)} ${n(top + h * 0.06)} ${n(cx + w * 0.6)} ${n(top + h * 0.22)} ${n(cx + w * 0.82)} ${n(base - h * 0.5)}` +
    `C${n(cx + w)} ${n(base - h * 0.3)} ${n(cx + w * 0.85)} ${n(base - h * 0.1)} ${n(cx + w * 0.5)} ${n(base)}Z`
  )
}

/** The half-width of a cypress's crown at height y. */
function halfAt(t: Tree, y: number) {
  const f = clamp((t.base - y) / t.h)
  return t.w * 0.92 * Math.max(Math.sin(Math.PI * Math.pow(f, 0.62)), f < 0.3 ? 0.55 : 0)
}

/** The foliage's cuts: short upward sprays, most on the side towards the moon. */
function foliage(r: Rng, t: Tree) {
  let d = ''
  for (let y = t.base - t.h + 10; y < t.base - t.h * 0.1; y += between(r, 6.5, 9)) {
    const half = halfAt(t, y)
    if (half < 3) continue
    for (let k = 0; k < 4; k++) {
      const u = between(r, -0.95, 0.55)
      const x = t.cx + u * half
      const L = clamp(0.62 - u * 0.5 - ((y - (t.base - t.h)) / t.h) * 0.35)
      if (r() > L) continue
      const len = between(r, 4, 8) * (0.8 + L * 0.5)
      d += gouge(x, y, x - len * 0.5, y - len, 0.45 + L * 1.2, -0.6)
    }
  }
  return d
}

type Marks = {
  sky: string
  stars: string
  patens: Pt[]
  crowns: string
  lit: string
  grass: string
  bankMarks: string
  beams: string
  house: string
}

const cache = new Map<number, Marks>()
function marks(seed: number): Marks {
  const hit = cache.get(seed)
  if (hit) return hit
  const sky = gougeField(
    rng(seed),
    { x0: 0, x1: W, y0: 4, y1: 214 },
    (x, y) => Math.max(clamp(1 - Math.hypot(x - MOON[0], (y - MOON[1]) * 1.2) / 240) * 0.8, 0.03),
    { spacing: 6.6, len: [26, 96], gap: [8, 28], max: 2.8 },
  )
  const s = rng(seed + 1)
  let stars = ''
  const patens: Pt[] = []
  for (let i = 0; i < 60; i++) {
    const x = between(s, 14, W - 14)
    const y = between(s, 14, 150)
    if (Math.hypot(x - MOON[0], y - MOON[1]) < 70) continue
    if (i % 5 === 0) {
      patens.push([x, y])
      continue
    }
    const sz = between(s, 1.6, 3.4)
    stars += `M${n(x - sz)} ${n(y)}L${n(x)} ${n(y - sz * 0.4)}L${n(x + sz)} ${n(y)}L${n(x)} ${n(y + sz * 0.4)}ZM${n(x)} ${n(y - sz)}L${n(x + sz * 0.4)} ${n(y)}L${n(x)} ${n(y + sz)}L${n(x - sz * 0.4)} ${n(y)}Z`
  }
  const tr = rng(seed + 2)
  const crowns = TREES.map(cypress).join('')
  const lit = TREES.map((t) => foliage(tr, t)).join('')
  const g = rng(seed + 3)
  const grass = gougeField(
    g,
    { x0: 0, x1: W, y0: 218, y1: H },
    (x, y) => clamp(0.18 + (y - 218) / 500 - Math.max(0, x - 560) / 700),
    { spacing: 5.2, len: [8, 26], gap: [5, 16], max: 2 },
  )
  let bankMarks = ''
  for (let y = 258; y < H; y += 6) {
    let x = between(g, -20, 0)
    while (x < 440) {
      const len = between(g, 10, 30)
      const dark = clamp((x - 280) / 190 + (y - 310) / 90)
      if (g() < dark * 0.8)
        bankMarks += gouge(x, y + between(g, -0.6, 0.6), x + len, y, 0.5 + dark * 1.4)
      else if (g() < 0.22) bankMarks += gouge(x, y, x + len * 0.4, y - between(g, 3, 7), 0.5)
      x += len + between(g, 3, 10)
    }
  }
  const beams = rays(rng(seed + 4), HALL_WIN[0], HALL_WIN[1], {
    from: 14,
    to: 58,
    every: 15,
    width: 1.6,
  })
  let house = ''
  for (let y = HOUSE.eaves + 10; y < HOUSE.ground; y += 9)
    house += gouge(HOUSE.x0 + 4, y, HOUSE.x1 - 4, y + between(tr, -0.5, 0.5), 0.55)
  const out = { sky, stars, patens, crowns, lit, grass, bankMarks, beams, house }
  cache.set(seed, out)
  return out
}

/**
 * The avenue by moonlight. `walk` is drawn over the avenue and under the
 * trees, for people far up it; the people on the bank are drawn after this.
 */
export function Avenue({ seed, walk }: { seed: number; walk?: ReactNode }) {
  const m = marks(seed)
  const h = HOUSE
  return (
    <>
      {/* the night sky, pale round the moon, and the stars and patens */}
      <rect x={0} y={0} width={W} height={H} fill={INK} />
      <path d={m.sky} fill={PAPER} />
      <path d={m.stars} fill={PAPER} />
      <g fill={PAPER}>
        {m.patens.map(([x, y]) => (
          <circle key={`${x}-${y}`} cx={n(x)} cy={n(y)} r={2.4} />
        ))}
      </g>
      <circle cx={MOON[0]} cy={MOON[1]} r={34} fill={PAPER} />
      <path
        d={
          gouge(MOON[0] - 20, MOON[1] - 8, MOON[0] + 6, MOON[1] - 10, 1.4) +
          gouge(MOON[0] - 6, MOON[1] + 6, MOON[0] + 22, MOON[1] + 3, 1.6) +
          gouge(MOON[0] - 22, MOON[1] + 16, MOON[0] - 2, MOON[1] + 18, 1.1)
        }
        fill={INK}
      />

      {/* the house at the end of the avenue, and the candle in its hall */}
      <path
        d={`M${h.x0} ${h.ground}V${h.eaves}L${h.x0 + 40} ${h.eaves - 30}H${h.x1 - 40}L${h.x1} ${h.eaves}V${h.ground}Z`}
        fill={PAPER}
        stroke={INK}
        strokeWidth={LINE.bold}
        strokeLinejoin="round"
      />
      <path d={`M${h.x0 - 6} ${h.eaves}H${h.x1 + 6}`} stroke={INK} strokeWidth={3} />
      <path d={m.house} fill={INK} />
      <g fill={INK}>
        {[618, 648, 736].map((x) => (
          <path key={x} d={`M${x} 196V178Q${x + 7} 170 ${x + 14} 178V196Z`} />
        ))}
        <path
          d={`M${VP[0] - 10} ${h.ground}V${h.ground - 28}Q${VP[0]} ${h.ground - 38} ${VP[0] + 10} ${h.ground - 28}V${h.ground}Z`}
        />
      </g>
      <path d={m.beams} fill={INK} />
      <path
        className="lc-glow"
        style={timing({ delay: 0.6 })}
        d={`M${HALL_WIN[0] - 8} 196V178Q${HALL_WIN[0]} 170 ${HALL_WIN[0] + 8} 178V196Z`}
        fill={RED}
      />

      {/* the grass, and the pale avenue running up to the door */}
      <rect x={0} y={214} width={W} height={H - 214} fill={INK} />
      <path d={m.grass} fill={PAPER} />
      <path
        d={`M${VP[0] - 12} ${h.ground}L${VP[0] + 12} ${h.ground}L${W + 60} ${H}L400 ${H}Z`}
        fill={PAPER}
      />
      <path
        d={gouge(VP[0] + 4, h.ground + 6, 700, H, 1.2) + gouge(VP[0] - 4, h.ground + 10, 520, H, 1)}
        fill={INK}
      />
      {walk}

      {/* the trees of the avenue */}
      <path
        d={m.crowns}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
        strokeLinejoin="round"
      />
      <path d={m.lit} fill={PAPER} />

      {/* the bank where the moonlight sleeps */}
      <path d={BANK} fill={PAPER} stroke={INK} strokeWidth={LINE.bold} />
      <path d={m.bankMarks} fill={INK} />
    </>
  )
}
