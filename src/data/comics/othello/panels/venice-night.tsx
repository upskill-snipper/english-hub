import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, gougeField, n, rng } from '@/components/comics/linocut/carve'

import { TorchFlame } from './people'

/**
 * VENICE BY NIGHT, cut once for the two street panels of Act 1, "Iago wakes
 * Venice" (1.1) and "Othello will not hide" (1.2), so a student knows the
 * city again: the same pointed windows, the same funnel-topped chimneys and
 * bell tower against a dark sky, the same canal and stone bridge, the same
 * torchlight cut into stone and paving. Each panel passes its own seeds.
 *
 * WHAT THE PLAY SAYS, and so what is drawn (the held edition,
 * src/data/full-texts/othello.ts, Project Gutenberg #1531):
 * - "Venice. A street." and "Venice. Another street." It is the middle of the
 *   night: "At this odd-even and dull watch o' the night" (1.1); "The
 *   goodness of the night upon you, friends!" (1.2). So the sky is ink, with
 *   a few stars, and the only light is what the people carry or what burns at
 *   a door.
 * - Brabantio: "This is Venice. My house is not a grange" (1.1), and
 *   Desdemona was carried off "with no worse nor better guard, / But with a
 *   knave of common hire, a gondolier" (1.1). So the street runs beside a
 *   canal, with a stone bridge over it, and the houses are the city's: stone
 *   fronts with pointed windows and chimneys flared at the top.
 * - "Attendants with torches", "Officers with torches", "Servants and
 *   torches" (1.1, 1.2). The flames are printed in the spot colour
 *   (`TorchFlame`, from the figure kit) and their light is cut into the
 *   stone round them; nothing else is red.
 *
 * Nothing is taken from a film or stage production.
 */

export const W = 860
export const H = 340

export type P = [number, number]
export type Box = { x0: number; x1: number; y0: number; y1: number }
export type Light = (x: number, y: number) => number

/** Light falling off from a point: 1 at the source, 0 at `reach`. `squash` flattens it. */
export const glowFrom =
  (at: P, reach: number, squash = 1): Light =>
  (x, y) =>
    clamp(1 - Math.hypot(x - at[0], (y - at[1]) * squash) / reach)

/** The brighter of several lights. */
export const lights =
  (...ls: Light[]): Light =>
  (x, y) =>
    Math.max(...ls.map((l) => l(x, y)))

/**
 * The night sky: ink, cut with faint gouges that grow paler towards the
 * roofs, so the city stands black against it. Fill PAPER.
 */
export function nightSky(seed: number, box: Box, pale = 0.8): string {
  return gougeField(
    rng(seed),
    box,
    (_x, y) => clamp((y - box.y0) / (box.y1 - box.y0)) * pale + 0.03,
    { spacing: 6.6, len: [26, 84], gap: [8, 26], max: 3 },
  )
}

/** A few stars, cut as small crosses, kept out of `avoid`. Stroke PAPER about 1. */
export function stars(seed: number, box: Box, count: number, avoid?: Box): string {
  const r = rng(seed)
  let d = ''
  for (let k = 0; k < count; k++) {
    const x = between(r, box.x0, box.x1)
    const y = between(r, box.y0, box.y1)
    if (avoid && x > avoid.x0 && x < avoid.x1 && y > avoid.y0 && y < avoid.y1) continue
    const a = between(r, 1.2, 2.4)
    d += `M${n(x - a)} ${n(y)}L${n(x + a)} ${n(y)}M${n(x)} ${n(y - a)}L${n(x)} ${n(y + a)}`
  }
  return d
}

/**
 * A pointed opening, as the windows and doors of Venice are cut: straight
 * sides from `bottom` up, then two arcs meeting in a point at `top`. `sharp`
 * is the arcs' radius against the span (1 is the equilateral arch; 0.6 is
 * flatter).
 */
export function gothicArch(x0: number, x1: number, top: number, bottom: number, sharp = 0.8) {
  const w = x1 - x0
  const r = w * sharp
  const h = Math.sqrt(r * r - (r - w / 2) * (r - w / 2))
  const spring = top + h
  const mid = (x0 + x1) / 2
  return `M${n(x0)} ${n(bottom)}V${n(spring)}A${n(r)} ${n(r)} 0 0 1 ${n(mid)} ${n(top)}A${n(r)} ${n(r)} 0 0 1 ${n(x1)} ${n(spring)}V${n(bottom)}Z`
}

/**
 * A Venetian chimney: a stack whose top flares out like an upturned bell,
 * standing on a roof at `base`, its rim at `top`. Fill INK.
 */
export function chimney(x: number, top: number, base: number, s = 1) {
  return (
    `M${n(x - 7 * s)} ${n(top)}H${n(x + 7 * s)}L${n(x + 3 * s)} ${n(top + 9 * s)}` +
    `V${n(base)}H${n(x - 3 * s)}V${n(top + 9 * s)}Z`
  )
}

/**
 * A bell tower: a plain shaft, a belfry whose arches are cut through to the
 * sky (`arches`, fill with the sky's PAPER), and a pyramid spire. `x` is its
 * middle, `w` its width.
 */
export function campanile(x: number, base: number, top: number, w: number) {
  const h = base - top
  // the spire takes the top quarter, the belfry the fifth below it
  const eave = top + h * 0.26
  const bel = eave + h * 0.2
  const half = w / 2
  const body =
    `M${n(x - half)} ${n(base)}V${n(bel)}H${n(x - half - 2.4)}V${n(eave)}` +
    `H${n(x + half + 2.4)}V${n(bel)}H${n(x + half)}V${n(base)}Z` +
    `M${n(x - half - 3)} ${n(eave + 0.6)}L${n(x)} ${n(top)}L${n(x + half + 3)} ${n(eave + 0.6)}Z`
  const aw = (w - 7) / 2
  const arches =
    gothicArch(x - half + 1.6, x - half + 1.6 + aw, eave + 4, bel - 3, 0.7) +
    gothicArch(x + half - 1.6 - aw, x + half - 1.6, eave + 4, bel - 3, 0.7)
  return { body, arches }
}

/**
 * A row of houses seen across the water: each a block with a low pitched
 * roof, given as [x0, x1, eave, ridge], standing on `base`. Fill INK, edged
 * in PAPER, with chimneys added by the panel.
 */
export function houseRow(base: number, houses: [number, number, number, number][]) {
  return houses
    .map(
      ([x0, x1, eave, ridge]) =>
        `M${n(x0)} ${n(base)}V${n(eave)}L${n((x0 + x1) / 2)} ${n(ridge)}L${n(x1)} ${n(eave)}V${n(base)}Z`,
    )
    .join('')
}

/**
 * The courses of a stone house front by night: cut in paper only where the
 * light reaches, finer and fainter as it falls away, with the upright joints
 * where it is brightest. Fill PAPER over an INK front.
 */
export function stoneByNight(seed: number, box: Box, light: Light, course = 13) {
  const r = rng(seed)
  let d = ''
  let row = 0
  for (let y = box.y0 + course * 0.6; y < box.y1 - 3; y += course, row++) {
    let x = box.x0 + between(r, -12, 0)
    while (x < box.x1) {
      const len = between(r, 24, 62)
      const L = light(x + len / 2, y)
      if (L > 0.04) d += gouge(x, y + between(r, -0.5, 0.5), x + len, y, 0.45 + L * 1.5)
      x += len + between(r, 2, 6)
    }
    for (let x2 = box.x0 + 12 + (row % 2) * 22; x2 < box.x1; x2 += 44) {
      const L = light(x2, y - course / 2)
      if (L > 0.18) d += gouge(x2, y - course + 2, x2, y - 2, 0.4 + L * 0.8)
    }
  }
  return d
}

/**
 * The paving of a street at night: rows of cuts that thicken and close up
 * where the light falls, and thin out into the dark. Fill PAPER over INK.
 */
export function nightStreet(seed: number, box: Box, light: Light) {
  const r = rng(seed)
  let d = ''
  for (let y = box.y0 + 4; y < box.y1; y += 5.6 + (y - box.y0) * 0.03) {
    let x = box.x0 + between(r, -20, 0)
    while (x < box.x1) {
      const len = between(r, 16, 54)
      const L = light(x + len / 2, y)
      if (r() < 0.22 + L * 0.85) d += gouge(x, y, x + len, y + between(r, -0.5, 0.5), 0.5 + L * 2.6)
      x += len + between(r, 6, 20) * (1 - L * 0.55)
    }
  }
  return d
}

/**
 * Canal water at night: short ripples cut in paper, brighter under a light
 * and in a broken column below it (its reflection). Fill PAPER over INK.
 */
export function nightWater(seed: number, box: Box, light: Light, glints: number[] = []) {
  const r = rng(seed)
  let d = ''
  for (let y = box.y0 + 2; y < box.y1; ) {
    const t = (y - box.y0) / (box.y1 - box.y0)
    let x = box.x0 + between(r, -16, 0)
    while (x < box.x1) {
      const len = between(r, 8, 26) * (0.7 + t)
      const L = Math.max(
        light(x + len / 2, y),
        ...glints.map((g) => clamp(1 - Math.abs(x + len / 2 - g) / 16) * 0.9),
      )
      if (r() < 0.25 + L * 0.75)
        d += gouge(x, y, x + len, y + between(r, -0.4, 0.4), 0.4 + L * 1.6 + t * 0.5)
      x += len + between(r, 8, 22) * (1 - L * 0.5)
    }
    y += 3.4 + t * 3.6
  }
  return d
}

/**
 * A humpbacked stone bridge over a canal, from `x0` to `x1`, its deck rising
 * to `top` and its arch springing from the water at `water`: the deck and
 * parapet (`deck`, fill INK, edged in PAPER) and the dark opening of the
 * arch (`arch`).
 */
export function bridge(x0: number, x1: number, top: number, water: number) {
  const mid = (x0 + x1) / 2
  const span = x1 - x0
  const deck =
    `M${n(x0)} ${n(water - 10)}Q${n(mid)} ${n(top - (water - top) * 0.6)} ${n(x1)} ${n(water - 10)}` +
    `V${n(water)}H${n(x0)}Z`
  const ax0 = x0 + span * 0.2
  const ax1 = x1 - span * 0.2
  const arch = `M${n(ax0)} ${n(water)}Q${n(mid)} ${n(top + 4)} ${n(ax1)} ${n(water)}Z`
  const rail = `M${n(x0 + 4)} ${n(water - 14)}Q${n(mid)} ${n(top - (water - top) * 0.6 - 9)} ${n(x1 - 4)} ${n(water - 14)}`
  return { deck, arch, rail }
}

/**
 * A torch in an iron bracket on a wall, burning: the bracket from the wall at
 * `wall` out to the cup under the flame at `at`, then the flame in the spot
 * colour (the kit's TorchFlame) and its light cut round it.
 */
export function WallTorch({ wall, at, s = 1 }: { wall: P; at: P; s?: number }) {
  const [x, y] = at
  const shaft = `M${n(x - 2 * s)} ${n(y + 1)}L${n(x - 1.4 * s)} ${n(y + 22 * s)}H${n(x + 1.4 * s)}L${n(x + 2 * s)} ${n(y + 1)}Z`
  const cup = `M${n(x - 5.4 * s)} ${n(y - 1)}H${n(x + 5.4 * s)}L${n(x + 3 * s)} ${n(y + 5 * s)}H${n(x - 3 * s)}Z`
  const arm = `M${n(wall[0])} ${n(wall[1])}L${n(x)} ${n(y + 12 * s)}`
  return (
    <g>
      <path d={arm} fill="none" stroke={PAPER} strokeWidth={6.4 * s} strokeLinecap="round" />
      <path d={arm} fill="none" stroke={INK} strokeWidth={3.2 * s} strokeLinecap="round" />
      <path d={shaft + cup} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <TorchFlame at={[x, y - 1]} s={s * 1.1} />
    </g>
  )
}
