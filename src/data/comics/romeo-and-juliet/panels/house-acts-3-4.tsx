import {
  between,
  clamp,
  gouge,
  gougeField,
  wedge,
  type Rng,
} from '@/components/comics/linocut/carve'

import type { P } from './acts-3-4-kit'

/**
 * Capulet's house, for the three panels set in it among moments 11 to 15:
 * "Thursday" (Act 3, Scene 4, a room late at night), "Dawn, and a father's
 * rage" (Act 3, Scene 5, the gallery to Juliet's chamber at dawn) and "Juliet
 * drinks the potion" (Act 4, Scene 3, her chamber at night). The play gives
 * the house no description beyond its rooms, so its walls are the plain
 * plaster and wooden wainscot of a rich man's house, the same in all three,
 * with a boarded floor, so a student knows the house again.
 *
 * `light(x, y)` is 0 for unlit (almost solid ink) to 1 for full light, as in
 * gougeField. Fill every result with PAPER over an ink ground, except
 * `boards`, which are ink joints over a paper floor.
 */

type Box = { x0: number; x1: number; y0: number; y1: number }

/** Plaster above, and a wainscot of framed panels from `rail` down to `floor`. */
export function houseWall(
  r: Rng,
  W: number,
  rail: number,
  floor: number,
  light: (x: number, y: number) => number,
  skip?: (x: number) => boolean,
) {
  const plaster = gougeField(r, { x0: 0, x1: W, y0: 4, y1: rail - 6 }, light, {
    spacing: 6.4,
    len: [18, 66],
  })
  // the dado rail, and the panels below it, each framed by a paper edge
  // where the light reaches it and a shadow line under its top rail
  let wains = ''
  for (let x = 6; x < W - 20; x += 64) {
    if (skip?.(x + 28)) continue
    const L = clamp(light(x + 28, (rail + floor) / 2))
    if (L < 0.08) continue
    const w = 0.5 + L * 1.4
    const x1 = x + 52
    const y0 = rail + 10
    const y1 = floor - 10
    wains +=
      wedge(x, y0, x1, y0, w, w) +
      wedge(x, y1, x1, y1, w, w) +
      wedge(x, y0, x, y1, w, w) +
      wedge(x1, y0, x1, y1, w, w)
    for (let y = y0 + 6; y < y1 - 4; y += 7)
      if (r() < 0.25 + L * 0.6)
        wains += gouge(x + 6, y, x1 - 6, y + between(r, -0.5, 0.5), 0.3 + L * 1.4)
  }
  return { plaster, wains }
}

/** Boards on a paper floor: joints running back to a vanishing point, and a shadow at the skirting. */
export function boards(r: Rng, W: number, H: number, top: number, vanish: P, box?: Box) {
  let d = ''
  const [vx, vy] = vanish
  for (let xt = -900; xt < W + 900; xt += 26) {
    const xb = vx + (xt - vx) * ((H - vy) / (top - vy))
    let t0 = 0
    while (t0 < 1) {
      const t1 = Math.min(1, t0 + between(r, 0.3, 0.8))
      const xa = xt + (xb - xt) * t0
      const xz = xt + (xb - xt) * t1
      if (!box || (Math.max(xa, xz) > box.x0 && Math.min(xa, xz) < box.x1))
        d += wedge(
          xa,
          top + (H - top) * t0,
          xz,
          top + (H - top) * t1,
          0.7 + t0 * 2.4,
          0.7 + t1 * 2.4,
        )
      t0 = t1 + between(r, 0.02, 0.07)
    }
  }
  for (let y = top + 1; y < top + 16; y += 3) d += gouge(0, y, W, y, 2.4 - (y - top) * 0.14)
  return d
}
