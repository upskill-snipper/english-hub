import { between, gouge, n, ribbon, type Pt, type Rng } from '@/components/comics/linocut/carve'

/**
 * The little copse at Longbourn, cut once for the two moments set in it:
 * "Darcy’s secret" (Chapter 52), where Elizabeth reads her aunt's letter
 * there, and "Lady Catherine’s visit" (Chapter 56), where Lady Catherine
 * makes her demand there. The same kind of trees and the same gravel walk, so
 * a student sees one place in both. Only "Darcy’s secret" draws a bench, the
 * one Elizabeth sits on to read (cut in ./darcys-secret.tsx); in "Lady
 * Catherine’s visit" the two women stand where the walk enters the copse.
 *
 * What the text says of it (the held edition,
 * src/data/full-texts/pride-and-prejudice.ts):
 * - "hurrying into the little copse, where she was least likely to be
 *   interrupted, she sat down on one of the benches" (Chapter 52);
 * - "there seemed to be a prettyish kind of a little wilderness on one side of
 *   your lawn"; "They proceeded in silence along the gravel walk that led to
 *   the copse" (Chapter 56);
 * - "he is walking towards the little copse" (Chapter 49), across the lawn
 *   from the house.
 * So: a small wood on one side of the lawn, with garden benches and a gravel
 * walk, the lawn and the house seen between the trunks. Nothing else of it is
 * described, so the trees are plain broad-leaved trees and the bench a plain
 * wooden garden bench of the period.
 */

export type P = [number, number]

const r1 = (v: number) => Math.round(v * 10) / 10

/** One tree: its trunk's centre line, foot first, the width at each point, and its boughs. */
export type Tree = { spine: P[]; w: number[]; side: 1 | -1; boughs?: P[][] }

/**
 * A trunk as one closed outline up its centre line `spine` (foot first), `w`
 * wide at each point, the foot flaring into roots along the ground.
 */
export function trunk(spine: P[], w: number[]): string {
  const left: P[] = []
  const right: P[] = []
  for (let i = 0; i < spine.length; i++) {
    const a = spine[Math.max(0, i - 1)]
    const b = spine[Math.min(spine.length - 1, i + 1)]
    const dx = b[0] - a[0]
    const dy = b[1] - a[1]
    const L = Math.hypot(dx, dy) || 1
    const nx = -dy / L
    const ny = dx / L
    const h = w[i] / 2
    left.push([r1(spine[i][0] + nx * h), r1(spine[i][1] + ny * h)])
    right.push([r1(spine[i][0] - nx * h), r1(spine[i][1] - ny * h)])
  }
  const [fx, fy] = spine[0]
  const h0 = w[0] / 2
  const pts = [
    ...left,
    ...right.reverse(),
    [r1(fx + h0 * 1.9), r1(fy + 1)] as P,
    [r1(fx), r1(fy + 3)] as P,
    [r1(fx - h0 * 1.9), r1(fy + 1)] as P,
  ]
  // The roots: the last three points sweep the outline out along the ground.
  return 'M' + pts.map(([x, y]) => `${x} ${y}`).join('L') + 'Z'
}

/** A tree's boughs, as tapered ribbons from the trunk up into the leaves. Fill with INK. */
export function boughs(t: Tree, width = 9): string {
  return (t.boughs ?? []).map((b) => ribbon(b as Pt[], width, 0.6, false)).join('')
}

/**
 * The bark: long gouges up a trunk, closer and heavier on the lit side
 * (`side` 1 for light from the right of the trunk, -1 from the left). Fill
 * with PAPER over the inked trunk.
 */
export function bark(r: Rng, t: Tree, count: number): string {
  const { spine, w, side } = t
  let d = ''
  for (let k = 0; k < count; k++) {
    // across the trunk, from the shaded edge to the lit edge
    const across = -0.5 + (1.4 * (k + between(r, 0.2, 0.8))) / count
    const i0 = Math.floor(between(r, 0, spine.length - 1.01))
    const i1 = Math.min(spine.length - 1, i0 + 1)
    const at = (i: number, t2: number): P => {
      const [x, y] = spine[i]
      const [x2, y2] = spine[Math.min(spine.length - 1, i + 1)]
      const xx = x + (x2 - x) * t2
      const yy = y + (y2 - y) * t2
      const ww = w[i] + (w[Math.min(w.length - 1, i + 1)] - w[i]) * t2
      return [xx + side * across * (ww / 2) * 0.82, yy]
    }
    const a = at(i0, between(r, 0, 0.4))
    const b = at(i1 === i0 ? i0 : i0, between(r, 0.6, 1))
    const lit = (across + 0.5) / 1.4
    d += gouge(a[0], a[1], b[0], b[1], 0.35 + lit * 1.2, between(r, -0.8, 0.8))
  }
  return d
}

/**
 * A mass of foliage: an ink cloud of overlapping rounds `blobs` ([cx, cy,
 * rad]), returned as one path. Fill with INK.
 */
export function foliage(blobs: [number, number, number][]): string {
  return blobs
    .map(
      ([cx, cy, rad]) =>
        `M${n(cx - rad)} ${n(cy)}a${n(rad)} ${n(rad)} 0 1 0 ${n(2 * rad)} 0a${n(rad)} ${n(rad)} 0 1 0 ${n(-2 * rad)} 0Z`,
    )
    .join('')
}

/**
 * The leaves cut into a foliage mass: short paper gouges, thicker and closer
 * where `light` is high, none outside the picture (`box`). Fill with PAPER.
 */
export function leafCuts(
  r: Rng,
  blobs: [number, number, number][],
  light: (x: number, y: number) => number,
  box: { x0: number; x1: number; y0: number; y1: number },
  density = 0.012,
): string {
  let d = ''
  for (const [cx, cy, rad] of blobs) {
    const count = Math.round(Math.PI * rad * rad * density)
    for (let k = 0; k < count; k++) {
      const a = between(r, 0, Math.PI * 2)
      const rr = rad * Math.sqrt(r()) * 0.9
      const x = cx + Math.cos(a) * rr
      const y = cy + Math.sin(a) * rr
      if (x < box.x0 || x > box.x1 || y < box.y0 || y > box.y1) continue
      const L = light(x, y)
      if (r() > 0.2 + L * 0.8) continue
      const len = between(r, 4.5, 8)
      const tilt = between(r, -0.8, 0.25)
      d += gouge(
        x,
        y,
        x + len * Math.cos(tilt),
        y + len * Math.sin(tilt),
        0.55 + L * 1.4,
        between(r, -0.6, 0.6),
      )
    }
  }
  return d
}

/** Gravel: small ink dots scattered where `keep` allows, larger towards the front. */
export function gravel(
  r: Rng,
  box: { x0: number; x1: number; y0: number; y1: number },
  keep: (x: number, y: number) => boolean,
  count: number,
): string {
  let d = ''
  for (let k = 0; k < count; k++) {
    const x = between(r, box.x0, box.x1)
    const y = between(r, box.y0, box.y1)
    if (!keep(x, y)) continue
    const s = 0.6 + ((y - box.y0) / (box.y1 - box.y0)) * 1.1 * between(r, 0.6, 1.2)
    d += `M${n(x - s)} ${n(y)}a${n(s)} ${n(s * 0.7)} 0 1 0 ${n(2 * s)} 0a${n(s)} ${n(s * 0.7)} 0 1 0 ${n(-2 * s)} 0Z`
  }
  return d
}

/**
 * Patches of sun on the shaded floor of the copse: flat paper lenses, wider
 * than they are tall, as light through leaves falls on the ground. Fill with
 * PAPER over the ink of the shade.
 */
export function dapples(
  r: Rng,
  box: { x0: number; x1: number; y0: number; y1: number },
  keep: (x: number, y: number) => boolean,
  count: number,
): string {
  let d = ''
  for (let k = 0; k < count; k++) {
    const x = between(r, box.x0, box.x1)
    const y = between(r, box.y0, box.y1)
    if (!keep(x, y)) continue
    const depth = (y - box.y0) / (box.y1 - box.y0)
    const len = between(r, 8, 22) * (0.6 + depth)
    d += gouge(x, y, x + len, y + between(r, -0.6, 0.6), between(r, 1.2, 2.6) * (0.6 + depth * 0.8))
  }
  return d
}
