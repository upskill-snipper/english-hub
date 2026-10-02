import { between, deg, n, type Rng } from '@/components/comics/linocut/carve'

/**
 * Small cutting helpers for the King Lear panels drawn in the open air and on
 * pale ground: "Poor Tom in the hovel" (the heath at night), "The blind led by
 * the mad" (the heath the morning after) and "Albany turns" (a windy court).
 *
 * The marks here are STROKED, not cut as gouge shapes: a field of gouges
 * across a whole sky or ground cost twenty kilobytes in a first draft of the
 * hovel, where the same rows drawn as stroked lines, grouped by weight into
 * four paths, cost two. On a pale ground a mark printed in ink is a line the
 * gouge left standing, so the look is the same.
 */

/** A short straight mark as path data: from (x, y), `len` long at `a` degrees clockwise from the right. */
export const tick = (x: number, y: number, a: number, len: number) =>
  `M${n(x)} ${n(y)}l${n(Math.cos(deg(a)) * len)} ${n(Math.sin(deg(a)) * len)}`

/** The stroke widths of `inkRows`' four paths, lightest first. */
export const ROW_W = [0.9, 1.7, 2.6, 3.6]

/**
 * Rows of ink strokes across a pale ground: longer, closer and heavier where
 * `dark(x, y)` (0 to 1) is higher. Four paths of path data, one per weight in
 * ROW_W, to be stroked in INK with round caps. `len` is the range of a
 * stroke's length before `dark` stretches it.
 */
export function inkRows(
  r: Rng,
  box: { x0: number; x1: number; y0: number; y1: number },
  dark: (x: number, y: number) => number,
  { spacing = 4.6, len = [18, 70] }: { spacing?: number; len?: [number, number] } = {},
): string[] {
  const out = ROW_W.map(() => '')
  for (let y = box.y0; y < box.y1; y += spacing) {
    let x = box.x0 - between(r, 0, 30)
    while (x < box.x1) {
      const L = between(r, len[0], len[1])
      const d = dark(x + L / 2, y)
      if (r() < 0.1 + d * 0.9) {
        const k = Math.min(3, Math.floor(d * 4 * between(r, 0.8, 1.15)))
        out[k] += `M${n(x)} ${n(y + between(r, -0.6, 0.6))}h${n(L * (0.6 + d * 0.5))}`
      }
      x += L + between(r, 6, 26) * (1.2 - d)
    }
  }
  return out
}

/**
 * Tufts of rough grass across a ground from `y0` to `y1`, larger towards the
 * reader: four blades each, leaning `lean` degrees from upright (negative
 * leans them to the left, as a wind from the right would). Stroke in INK.
 */
export function grassTufts(
  r: Rng,
  y0: number,
  y1: number,
  width: number,
  lean = 0,
  every: [number, number] = [40, 90],
): string {
  let d = ''
  for (let y = y0; y < y1; y += 9 + (y - y0) * 0.12) {
    const s = 0.6 + (y - y0) / 110
    for (let x = between(r, -10, 30); x < width; x += between(r, every[0], every[1]) * s) {
      if (r() < 0.25) continue
      for (let k = 0; k < 4; k++)
        d += tick(
          x + k * 2.6 * s,
          y,
          -90 + lean + (k - 1.5) * 8 + between(r, -4, 4),
          between(r, 6, 10) * s,
        )
    }
  }
  return d
}
