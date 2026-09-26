/**
 * The carving tools: pure functions that return SVG path data for the marks a
 * lino gouge makes. Every piece of art is built from these, so the cuts share
 * one hand.
 *
 * SEEDED, NEVER Math.random(). A drawing that changed on each render would
 * differ between the server HTML and anything rendered later, would defeat
 * caching, and could not be reviewed: the picture a reviewer approved must be
 * the picture a student sees. Each drawing makes its own generator with
 * `rng(seed)` and passes it to the tools that scatter marks; the same seed
 * always gives the same print.
 *
 * Coordinates are rounded to one decimal place by `n()`. The path strings are
 * the bulk of every piece's weight on the page, and a tenth of a unit is
 * already finer than a gouge.
 */

/** A seeded random source: mulberry32. Returns a number in [0, 1). */
export type Rng = () => number

export function rng(seed: number): Rng {
  let s = seed | 0
  return () => {
    s = (s + 0x6d2b79f5) | 0
    let t = Math.imul(s ^ (s >>> 15), 1 | s)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

/** A number between a and b from the generator. */
export const between = (r: Rng, a: number, b: number) => a + (b - a) * r()

/** A coordinate as path text, to one decimal place. */
export const n = (v: number) => (Math.round(v * 10) / 10).toString()

export const clamp = (v: number, a = 0, b = 1) => Math.max(a, Math.min(b, v))

export const deg = (d: number) => (d * Math.PI) / 180

export type Pt = [number, number]

/**
 * One gouge: a lens-shaped sliver, thickest in the middle and pointed at both
 * ends, from (x1, y1) to (x2, y2). `w` is the half-width at the middle; `bend`
 * pushes the belly to one side, as a hand-cut stroke does.
 */
export function gouge(x1: number, y1: number, x2: number, y2: number, w: number, bend = 0) {
  const mx = (x1 + x2) / 2
  const my = (y1 + y2) / 2
  const dx = x2 - x1
  const dy = y2 - y1
  const L = Math.hypot(dx, dy) || 1
  const nx = -dy / L
  const ny = dx / L
  const a = w + bend
  const b = -w + bend
  return `M${n(x1)} ${n(y1)}Q${n(mx + nx * a)} ${n(my + ny * a)} ${n(x2)} ${n(y2)}Q${n(mx + nx * b)} ${n(my + ny * b)} ${n(x1)} ${n(y1)}Z`
}

/** A wedge: `w1` wide at the start and `w2` at the end. Floorboard joints, rays. */
export function wedge(x1: number, y1: number, x2: number, y2: number, w1: number, w2: number) {
  const dx = x2 - x1
  const dy = y2 - y1
  const L = Math.hypot(dx, dy) || 1
  const nx = -dy / L
  const ny = dx / L
  return `M${n(x1 + (nx * w1) / 2)} ${n(y1 + (ny * w1) / 2)}L${n(x2 + (nx * w2) / 2)} ${n(y2 + (ny * w2) / 2)}L${n(x2 - (nx * w2) / 2)} ${n(y2 - (ny * w2) / 2)}L${n(x1 - (nx * w1) / 2)} ${n(y1 - (ny * w1) / 2)}Z`
}

/**
 * A tapered ribbon along a list of points: hair, smoke, fog, the ends of a
 * scarf. With `taperEnd` it swells in the middle and comes to a point at both
 * ends; without, it starts full and thins towards the last point.
 */
export function ribbon(pts: Pt[], maxW: number, pow = 0.7, taperEnd = true) {
  const left: Pt[] = []
  const right: Pt[] = []
  const k = pts.length
  for (let i = 0; i < k; i++) {
    const p = pts[i]
    const a = pts[Math.max(0, i - 1)]
    const b = pts[Math.min(k - 1, i + 1)]
    const dx = b[0] - a[0]
    const dy = b[1] - a[1]
    const len = Math.hypot(dx, dy) || 1
    const nx = -dy / len
    const ny = dx / len
    const t = i / (k - 1)
    const prof = taperEnd ? Math.sin(Math.PI * t) : 1 - t * 0.85
    const w = (maxW * Math.pow(Math.max(prof, 0.001), pow)) / 2
    left.push([p[0] + nx * w, p[1] + ny * w])
    right.push([p[0] - nx * w, p[1] - ny * w])
  }
  const pts2 = [...left, ...right.reverse()]
  return 'M' + pts2.map((p) => `${n(p[0])} ${n(p[1])}`).join('L') + 'Z'
}

/** Points along a sine wave from x0 to x1: the spine of a fog line. */
export function wave(
  x0: number,
  x1: number,
  y: number,
  amp: number,
  period: number,
  phase: number,
  steps = 28,
): Pt[] {
  const pts: Pt[] = []
  for (let i = 0; i <= steps; i++) {
    const x = x0 + ((x1 - x0) * i) / steps
    pts.push([x, y + amp * Math.sin((x / period) * Math.PI * 2 + phase)])
  }
  return pts
}

/** A circular arc as a path, angles in radians, clockwise from a0 to a1. */
export function arc(cx: number, cy: number, r: number, a0: number, a1: number) {
  const p0 = [cx + r * Math.cos(a0), cy + r * Math.sin(a0)]
  const p1 = [cx + r * Math.cos(a1), cy + r * Math.sin(a1)]
  const large = Math.abs(a1 - a0) > Math.PI ? 1 : 0
  return `M${n(p0[0])} ${n(p0[1])}A${n(r)} ${n(r)} 0 ${large} 1 ${n(p1[0])} ${n(p1[1])}`
}

/**
 * A broken arc: dashes of random length round a circle. Stack several radii
 * for a halo of light, or for the hollow of a cheek. Stroke it.
 */
export function arcDashes(
  r: Rng,
  cx: number,
  cy: number,
  radius: number,
  a0: number,
  a1: number,
  dash: [number, number],
  gap: [number, number],
) {
  let d = ''
  let a = a0 + between(r, 0, gap[1]) / radius
  while (a < a1) {
    const e = Math.min(a + between(r, dash[0], dash[1]) / radius, a1)
    d += arc(cx, cy, radius, a, e)
    a = e + between(r, gap[0], gap[1]) / radius
  }
  return d
}

/**
 * The core texture of the style: rows of horizontal gouges whose weight and
 * density follow the light. `light(x, y)` returns 0 (unlit, almost solid
 * black) to 1 (full light, cut nearly white). Fill the result with PAPER over
 * an INK ground. Walls, skies, the ground behind a portrait.
 */
export function gougeField(
  r: Rng,
  box: { x0: number; x1: number; y0: number; y1: number },
  light: (x: number, y: number) => number,
  opts: { spacing?: number; len?: [number, number]; gap?: [number, number]; max?: number } = {},
) {
  const spacing = opts.spacing ?? 6
  const [lenMin, lenMax] = opts.len ?? [14, 70]
  const [gapMin, gapMax] = opts.gap ?? [5, 20]
  const max = opts.max ?? 4.2
  let d = ''
  for (let y = box.y0; y < box.y1; y += spacing) {
    let x = box.x0 + between(r, -30, 0)
    while (x < box.x1) {
      const len = between(r, lenMin, lenMax)
      const g = between(r, gapMin, gapMax)
      const L = light(x + len / 2, y)
      if (r() < 0.18 + L * 0.82)
        d += gouge(
          x,
          y + between(r, -0.8, 0.8),
          x + len,
          y + between(r, -0.8, 0.8),
          0.4 + L * max * between(r, 0.75, 1.15),
          between(r, -0.8, 0.8),
        )
      x += len * (1 - L * 0.2) + g * (1 - L * 0.7)
    }
  }
  return d
}

/**
 * Light radiating from a point, cut as broken spokes that thin with distance:
 * a candle, a lamp, a halo. Fill with PAPER.
 */
export function rays(
  r: Rng,
  cx: number,
  cy: number,
  opts: { from?: number; to?: number; every?: number; width?: number } = {},
) {
  const from = opts.from ?? 12
  const to = opts.to ?? 108
  const every = opts.every ?? 4.6
  const width = opts.width ?? 3.4
  let d = ''
  for (let a = 0; a < 360; a += every) {
    const ang = deg(a + between(r, -1.4, 1.4))
    let rad = between(r, from * 0.75, from * 1.25)
    while (rad < to) {
      const len = between(r, 8, 22)
      const w = clamp(width - rad / 30, 0.4, width)
      d += gouge(
        cx + Math.cos(ang) * rad,
        cy + Math.sin(ang) * rad,
        cx + Math.cos(ang) * (rad + len),
        cy + Math.sin(ang) * (rad + len),
        w,
      )
      rad += len + between(r, 4, 12) + rad * 0.11
    }
  }
  return d
}

/**
 * A bank of fog: a paper mass with a rolling top edge (`mass`), cut through
 * with ink lines that thicken towards the bottom (`lines`). Fill `mass` with
 * PAPER, then `lines` with INK.
 */
export function fogBank(
  r: Rng,
  x0: number,
  x1: number,
  top: number,
  bottom: number,
  amp = 8,
  slope = 0,
) {
  const ph = between(r, 0, 6)
  const edge = (x: number) =>
    top + slope * (x - x0) + amp * Math.sin(x / 46 + ph) + amp * 0.55 * Math.sin(x / 17 + ph * 2)
  let mass = `M${x0} ${bottom}`
  for (let x = x0; x <= x1; x += 6) mass += `L${n(x)} ${n(edge(x))}`
  mass += `L${x1} ${bottom}Z`
  let lines = ''
  const reach = bottom - top + 6 + Math.abs(slope) * (x1 - x0)
  for (let k = 1; k * 6.4 < reach; k++) {
    const depth = clamp((k * 6.4) / (bottom - top + 40))
    let x = x0 + between(r, -20, 0)
    while (x < x1) {
      const len = between(r, 40, 150)
      const pts: Pt[] = []
      for (let i = 0; i <= 14; i++) {
        const xx = x + (len * i) / 14
        pts.push([xx, edge(xx) + k * 6.4 + Math.sin(xx / 21 + k) * 1.4])
      }
      if (r() < 0.35 + depth * 0.65)
        lines += ribbon(pts, 0.5 + depth * 3.4 * between(r, 0.7, 1.15), 0.7)
      x += len + between(r, 4, 26)
    }
  }
  return { mass, lines }
}

/**
 * Loose wisps of fog or smoke: wavy tapered ribbons spread between two
 * heights. Fill with PAPER over a dark ground, or INK over a pale one.
 */
export function wisps(
  r: Rng,
  count: number,
  box: { x0: number; x1: number; y0: number; y1: number },
  width: [number, number],
) {
  let d = ''
  for (let i = 0; i < count; i++) {
    const y = box.y0 + ((box.y1 - box.y0) * i) / Math.max(1, count - 1) + between(r, -4, 4)
    const a = box.x0 + between(r, -40, (box.x1 - box.x0) * 0.5)
    const b = a + between(r, 90, 240)
    d += ribbon(
      wave(a, b, y, between(r, 2, 5), between(r, 60, 110), between(r, 0, 6), 30),
      between(r, width[0], width[1]),
      0.8,
    )
  }
  return d
}
