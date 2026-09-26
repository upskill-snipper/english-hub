import type { ReactNode } from 'react'

import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, gougeField, n, rng, wedge } from '@/components/comics/linocut/carve'

/**
 * A street in Venice beside a canal, by day: the ground of the three street
 * panels of moments 6 to 10, "My daughter, my ducats" (Act 2, Scene 8), "Hath
 * not a Jew eyes?" (Act 3, Scene 1) and "I'll have my bond" (Act 3, Scene 3).
 * The held edition heads all three "Venice. A street." and says nothing more
 * of the place, so it is drawn plainly, as a street of the play's Venice: a
 * paved walk along a canal, and across the water a row of tall houses with
 * pointed windows, their chimneys flared at the top, and a gap where a side
 * canal runs off under a small bridge. The three panels are cut from this one
 * street, each from its own seed, so a student knows the place again.
 *
 * It is daylight in all three. In Act 2, Scene 8 it is the day after Jessica's
 * flight ("I saw Bassanio under sail"); in Act 3, Scene 1 the news is "on the
 * Rialto", where merchants meet by day; in Act 3, Scene 3 Antonio is taken
 * through the street under guard, and the trial is "Tomorrow". So the sky is
 * paper cut with ink, the houses across the water are pale stone in the sun,
 * and the water carries their light, which keeps the black figures on the
 * walk clear of their ground.
 *
 * Nothing is taken from a film or stage production. Seeds: each panel passes
 * its own.
 */

export const W = 860
export const H = 340
/** The foot of the houses across the canal: the far bank. */
export const FAR = 212
/** The near edge of the canal, where the paved walk begins. */
export const WALK = 248
/** Where everyone's feet stand on the walk. */
export const FEET = 322

export type P = [number, number]

/** One house across the canal: its left and right edge, and the line of its roof. */
type House = { x0: number; x1: number; top: number }

/**
 * The row of houses across the water, left to right, with the side canal
 * between `gap` and `gap + 64`. Heights vary as a real row does.
 */
function housesFor(gap: number): House[] {
  const out: House[] = []
  const tops = [96, 74, 104, 86, 66, 98, 80, 108, 90, 72, 100, 84]
  let x = -12
  let k = 0
  while (x < W + 12) {
    const w = [118, 96, 84, 128, 102, 90][k % 6]
    let x1 = x + w
    if (x < gap && x1 > gap) x1 = gap
    if (x1 - x > 30) out.push({ x0: x, x1, top: tops[k % tops.length] })
    x = x1 >= gap && x < gap + 64 ? gap + 64 : x1
    k++
  }
  return out
}

type Marks = {
  sky: string
  walls: string
  windows: string
  sills: string
  roofs: string
  chimneys: string
  water: string
  walk: string
  edge: string
  beyond: string
}

const cache = new Map<string, Marks>()

function marks(seed: number, gap: number): Marks {
  const key = `${seed}:${gap}`
  const hit = cache.get(key)
  if (hit) return hit
  const r = rng(seed)
  const houses = housesFor(gap)

  // Daylight: a paper sky cut with ink, the strokes heavier towards the top
  // of the block and thinning to the roofs.
  const sky = gougeField(
    r,
    { x0: 0, x1: W, y0: 8, y1: 110 },
    (x, y) => clamp(0.58 - y / 200 + 0.06 * Math.sin(x / 70 + y / 22)),
    { spacing: 6, len: [40, 140], gap: [12, 40], max: 2.6 },
  )

  let walls = ''
  let windows = ''
  let sills = ''
  let roofs = ''
  let chimneys = ''
  // A pointed (Gothic) window: straight sides and a two-centred arch.
  const pointed = (x: number, y: number, w: number, h: number) => {
    const a = w * 0.9
    return `M${n(x)} ${n(y + h)}V${n(y + a * 0.55)}Q${n(x)} ${n(y + a * 0.12)} ${n(x + w / 2)} ${n(y)}Q${n(x + w)} ${n(y + a * 0.12)} ${n(x + w)} ${n(y + a * 0.55)}V${n(y + h)}Z`
  }
  houses.forEach((h, i) => {
    // The stone courses: fine ink lines, a little closer on alternate houses
    // so each reads as its own house.
    const step = i % 2 ? 9 : 11
    for (let y = h.top + 12; y < FAR - 2; y += step)
      walls += gouge(h.x0 + 2, y, h.x1 - 2, y + between(r, -0.5, 0.5), 0.45 + (i % 2) * 0.15)
    // the joint between two houses
    walls += wedge(h.x0, h.top, h.x0, FAR, 2.4, 2.4)
    // Windows: a row of single lights above, and on the main floor a group of
    // three joined under one sill, as the houses of Venice have them.
    const w = h.x1 - h.x0
    const cols = Math.max(2, Math.floor(w / 30))
    const pitch = w / cols
    for (let c = 0; c < cols; c++) {
      const cx = h.x0 + pitch * (c + 0.5)
      windows += pointed(cx - 5, h.top + 16, 10, 20)
      if (FAR - h.top > 116) windows += pointed(cx - 5, FAR - 44, 10, 22)
    }
    const mid = (h.x0 + h.x1) / 2
    const main = h.top + 48
    for (const dx of [-15, 0, 15]) windows += pointed(mid + dx - 6, main, 12, 30)
    sills += `M${n(mid - 25)} ${n(main + 31)}h50v4h-50Z`
    sills += `M${n(h.x0 + 6)} ${n(h.top + 38)}h${n(w - 12)}v2.4h${n(-(w - 12))}Z`
    // A water door at the foot of every other house.
    if (i % 2 === 0) windows += pointed(mid - 10, FAR - 30, 20, 30)
    // The cornice and the low tiled roof over it.
    roofs += `M${n(h.x0 - 3)} ${n(h.top)}H${n(h.x1 + 3)}V${n(h.top + 5)}H${n(h.x0 - 3)}Z`
    roofs += `M${n(h.x0)} ${n(h.top)}L${n(h.x0 + 10)} ${n(h.top - 9)}H${n(h.x1 - 10)}L${n(h.x1)} ${n(h.top)}Z`
    // Chimneys, their flues flared into a funnel at the top.
    for (const f of i % 3 === 0 ? [0.28, 0.74] : [0.6]) {
      const cx = h.x0 + w * f
      const base = h.top - 6
      chimneys += `M${n(cx - 3)} ${n(base)}V${n(base - 18)}H${n(cx + 3)}V${n(base)}Z`
      chimneys += `M${n(cx - 3)} ${n(base - 17)}L${n(cx - 9)} ${n(base - 29)}H${n(cx + 9)}L${n(cx + 3)} ${n(base - 17)}Z`
    }
  })

  // The canal: ink water cut through with the light of the houses it
  // mirrors, brightest near the far bank.
  const water = gougeField(
    r,
    { x0: 0, x1: W, y0: FAR + 3, y1: WALK - 2 },
    (x, y) => clamp(0.86 - (y - FAR) / 52 + 0.12 * Math.sin(x / 33)),
    { spacing: 4.2, len: [16, 64], gap: [4, 14], max: 3 },
  )

  // The walk: pale paving, its joints in ink, the courses closing up with
  // distance and the flags wider towards the front.
  let walk = ''
  const rows = [WALK + 10, WALK + 24, WALK + 42, WALK + 64, WALK + 90]
  let prev = WALK + 4
  for (const y of rows) {
    walk += gouge(-10, y, W + 10, y + between(r, -0.8, 0.8), 0.7 + (y - WALK) * 0.012)
    const len = 40 + (y - WALK) * 1.4
    let x = between(r, -len, 0)
    while (x < W) {
      walk += gouge(x, prev + 2, x + between(r, -2, 2), y - 1, 0.6 + (y - WALK) * 0.01)
      x += len * between(r, 0.8, 1.2)
    }
    prev = y
  }
  // The front of the walk, nearest the block's edge, darkens a little.
  walk += gougeField(
    r,
    { x0: 0, x1: W, y0: WALK + 56, y1: H },
    (_x, y) => clamp((y - WALK - 56) / 40) * 0.45,
    { spacing: 5, len: [20, 70], gap: [12, 34], max: 1.6 },
  )
  // The kerb along the canal: a line of edge stones, lit on top.
  let edge = `M0 ${WALK - 2}H${W}V${WALK + 4}H0Z`
  for (let x = between(r, -30, 0); x < W; x += between(r, 26, 40))
    edge += `M${n(x)} ${WALK - 2}V${WALK + 4}`
  // The houses beyond the side canal, far off: grey, so the gap is the
  // lightest opening in the row.
  const beyond = gougeField(r, { x0: gap, x1: gap + 64, y0: 118, y1: FAR }, () => 0.62, {
    spacing: 4.6,
    len: [10, 30],
    gap: [3, 8],
    max: 2.4,
  })
  const out = { sky, walls, windows, sills, roofs, chimneys, water, walk, edge, beyond }
  cache.set(key, out)
  return out
}

/** The small bridge over the side canal, seen side-on: an arch and its parapet. */
function bridge(gap: number) {
  const x0 = gap - 6
  const x1 = gap + 70
  const top = FAR - 34
  return `M${x0} ${FAR}V${top + 4}Q${(x0 + x1) / 2} ${top - 10} ${x1} ${top + 4}V${FAR}H${x1 - 10}Q${(x0 + x1) / 2} ${top + 6} ${x0 + 10} ${FAR}Z`
}

/**
 * The street, by day, in the ink and paper of the block. `gap` is where the
 * side canal opens between the houses (its left edge). `sky` is drawn over
 * the sky and behind the houses (the sun). `near` is drawn after the far bank
 * and before the walk's kerb: a house or a mooring post on the near side
 * belongs there.
 */
export function VeniceCanal({
  seed,
  gap = 520,
  sky,
  near,
}: {
  seed: number
  gap?: number
  sky?: ReactNode
  near?: ReactNode
}) {
  const m = marks(seed, gap)
  return (
    <>
      <rect x={0} y={0} width={W} height={FAR} fill={PAPER} />
      <path d={m.sky} fill={INK} />
      {sky}
      {/* the side canal: the far houses beyond it, small and grey */}
      <path
        d={`M${gap} ${FAR}V132H${gap + 22}V120H${gap + 46}V138H${gap + 64}V${FAR}Z`}
        fill={INK}
      />
      <path d={m.beyond} fill={PAPER} />
      <path d={bridge(gap)} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={gouge(gap - 2, FAR - 34, gap + 66, FAR - 34, 1.2)} fill={PAPER} />
      <path d={m.walls} fill={INK} />
      <path d={m.windows} fill={INK} />
      <path d={m.sills} fill={INK} />
      <path d={m.roofs} fill={INK} />
      <path d={m.chimneys} fill={INK} />
      <rect x={0} y={FAR} width={W} height={WALK - FAR} fill={INK} />
      <path d={m.water} fill={PAPER} />
      <rect x={0} y={WALK} width={W} height={H - WALK} fill={PAPER} />
      <path d={m.walk} fill={INK} />
      {near}
      <path d={m.edge} fill={INK} stroke={INK} strokeWidth={1.2} />
      <path d={gouge(0, WALK - 1, W, WALK - 1, 0.9)} fill={PAPER} />
    </>
  )
}

/**
 * A mooring post standing in the canal, banded as the posts of Venice are:
 * `x` its centre, from the water up to `top`.
 */
export function MooringPost({ x, top }: { x: number; top: number }) {
  let bands = ''
  for (let y = top + 8; y < WALK - 8; y += 14) bands += `M${x - 4} ${y}h8v6h-8Z`
  return (
    <>
      <path
        d={`M${x - 4.5} ${WALK}V${top + 4}Q${x} ${top - 2} ${x + 4.5} ${top + 4}V${WALK}Z`}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />
      <path d={bands} fill={PAPER} />
    </>
  )
}

/**
 * The short shadow at a figure's feet on the paving: the sun is high, so it
 * lies close under them. Fill with ink.
 */
export function footShadow(cx: number, halfW: number, y = FEET) {
  let d = ''
  for (let k = 0; k < 3; k++)
    d += gouge(
      cx - halfW + k * 4,
      y + 1 + k * 3,
      cx + halfW - k * 4,
      y + 1.5 + k * 3,
      1.8 - k * 0.45,
    )
  return d
}
