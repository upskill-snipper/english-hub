import { between, clamp, n, rng } from '@/components/comics/linocut/carve'

/**
 * Light cuts: the carving tools' horizontal gouges, written short.
 *
 * WHY (2 October 2026). The sea under the fight at Actium, cut with the
 * Othello kit's seaLines, came to 53 KB of path data on its own, before a
 * single figure was drawn, against the style guide's 90 KB for the whole
 * plate. A gouge from carve.ts writes every point absolute; one that runs
 * near level can be written relative, with the same lens to the tenth of a
 * unit, in about two thirds of the bytes. The marks are the same marks:
 * `cut` draws exactly the shape `gouge(x, y, x + len, y + dy, w, bend)`
 * draws, so a sea or a sky cut here prints as the rest of the site's do.
 */

const f = (v: number) => n(v)
/** Path numbers joined as SVG allows: a minus sign is its own separator. */
const join = (...v: number[]) => v.map(f).join(' ').replace(/ -/g, '-')

/**
 * One near-level gouge from (x, y), `len` long, ending `dy` lower, `w` its
 * half-width at the middle as in carve.ts, `bend` pushing its belly down.
 */
export function cut(x: number, y: number, len: number, w: number, dy = 0, bend = 0): string {
  const L = Math.hypot(len, dy) || 1
  // the unit normal, as gouge() takes it
  const nx = -dy / L
  const ny = len / L
  const a = w + bend
  const b = -w + bend
  return (
    `M${join(x, y)}q${join(len / 2 + nx * a, dy / 2 + ny * a, len, dy)}` +
    `q${join(-len / 2 + nx * b, -dy / 2 + ny * b, -len, -dy)}z`
  )
}

export type Box = { x0: number; x1: number; y0: number; y1: number }

/**
 * A bright sky, as the Othello kit's daySky cuts it: the paper all but bare,
 * scored with long, thin ink lines, closer towards the top. Fill with INK
 * over PAPER. `dark` is 0 (bare paper) to 1 (heavily scored).
 */
export function skyLines(seed: number, box: Box, dark: (x: number, y: number) => number): string {
  const r = rng(seed)
  let d = ''
  for (let y = box.y0 + 4; y < box.y1; y += between(r, 6.5, 9)) {
    let x = box.x0 + between(r, -40, 0)
    while (x < box.x1) {
      const len = between(r, 30, 120)
      const D = clamp(dark(x + len / 2, y))
      if (r() < 0.25 + D * 0.7)
        d += cut(x, y, len, 0.35 + D * 1.3, between(r, -1, 1), between(r, -0.5, 0.5))
      x += len + between(r, 10, 70) * (1.2 - D)
    }
  }
  return d
}

/**
 * The sea in daylight, as the Othello kit's seaLines cuts it but lighter: ink
 * strokes on paper, long and fine far off, shorter, heavier and further apart
 * near the shore. Only where `open(x, y)` is true, so no bytes are spent
 * under the land. Fill with INK.
 */
export function seaCuts(seed: number, box: Box, open: (x: number, y: number) => boolean): string {
  const r = rng(seed)
  let d = ''
  for (let y = box.y0 + 1.5; y < box.y1; ) {
    const t = (y - box.y0) / (box.y1 - box.y0)
    let x = box.x0 + between(r, -20, 0)
    while (x < box.x1) {
      const len = between(r, 22, 74) * (1.2 - t * 0.45)
      if (r() < 0.8 && open(x + len / 2, y))
        d += cut(x, y, len, 0.7 + t * 1.3, between(r, -0.8, 0.8), between(r, -0.4, 0.4))
      x += len + between(r, 6, 20)
    }
    y += 3 + t * 4.4
  }
  return d
}

/**
 * Rows of cuts whose weight and number follow the light, as carve.ts's
 * gougeField cuts them (walls, grounds, night skies). Fill with PAPER over
 * INK. `light` is 0 (unlit, almost solid black) to 1 (cut nearly white).
 */
export function lightField(
  seed: number,
  box: Box,
  light: (x: number, y: number) => number,
  o: { spacing?: number; len?: [number, number]; gap?: [number, number]; max?: number } = {},
): string {
  const r = rng(seed)
  const spacing = o.spacing ?? 6
  const [lenMin, lenMax] = o.len ?? [14, 70]
  const [gapMin, gapMax] = o.gap ?? [5, 20]
  const max = o.max ?? 4.2
  let d = ''
  for (let y = box.y0; y < box.y1; y += spacing) {
    let x = box.x0 + between(r, -30, 0)
    while (x < box.x1) {
      const len = between(r, lenMin, lenMax)
      const g = between(r, gapMin, gapMax)
      const L = light(x + len / 2, y)
      if (r() < 0.18 + L * 0.82)
        d += cut(
          x,
          y + between(r, -0.8, 0.8),
          len,
          0.4 + L * max * between(r, 0.75, 1.15),
          between(r, -1.2, 1.2),
          between(r, -0.8, 0.8),
        )
      x += len * (1 - L * 0.2) + g * (1 - L * 0.7)
    }
  }
  return d
}
