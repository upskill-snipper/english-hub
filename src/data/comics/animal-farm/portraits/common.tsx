import { LINE, PAPER } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, n, rng, type Pt, type Rng } from '@/components/comics/linocut/carve'

/**
 * What the Animal Farm portraits share: the size of the block, the ground of
 * horizontal cuts behind the sitter (as on the Scrooge portrait, which set the
 * standard: src/data/comics/a-christmas-carol/scrooge.tsx), the paper rule
 * inside the block's edge, and the drawing aids for hide, hair and feathers.
 *
 * HOW EACH ANIMAL IS CUT, AND WHY. Orwell gives most of the animals a breed,
 * a size, a colour or a single mark, and almost nothing else, so each is cut
 * from exactly that and drawn as the ordinary farm animal the words name:
 *
 * - NAPOLEON is "a large, rather fierce-looking Berkshire boar, the only
 *   Berkshire on the farm" (Chapter 2). A Berkshire is a black pig, so he is
 *   the one pig cut in INK, heavy and low-headed, his light made by cuts.
 * - OLD MAJOR is "the prize Middle White boar" (Chapter 1), so he is a white
 *   pig cut in PAPER, old and stout, with the uncut "tushes" the text gives
 *   him.
 * - SNOWBALL and SQUEALER are given no colour or breed, only "the only
 *   Berkshire" beside them; so they are cut pale, like Major, which also keeps
 *   them apart from Napoleon at a glance. Squealer is "a small fat pig" with
 *   "very round cheeks". Nothing else is added to either.
 * - BOXER is "nearly eighteen hands high" with "A white stripe down his nose"
 *   (Chapter 1). A white stripe shows only on a darker coat, so he is cut in
 *   INK with the stripe cut clean through to the paper.
 * - CLOVER is "a stout motherly mare" (Chapter 1), with no colour given. She is
 *   cut dark but thickly hatched, a softer tone than Boxer's solid black, and
 *   with no stripe, so the two cart-horses are never confused.
 * - MOLLIE is "the foolish, pretty white mare", with "red ribbons" plaited in
 *   her "white mane" (Chapter 1): PAPER, and the ribbons in the spot colour.
 * - BENJAMIN is a donkey, "the oldest animal on the farm", later "a little
 *   greyer about the muzzle" (Chapter 10): dark, with a pale, grizzled muzzle.
 * - MOSES is "the tame raven" with "black wings" (Chapters 1 and 9): INK.
 * - THE DOGS are "nine enormous dogs wearing brass-studded collars", "as
 *   fierce-looking as wolves" (Chapter 5): dark, with the studs cut as bright
 *   points, since the print has no brass colour.
 *
 * The four men (Mr Jones, Mr Pilkington, Mr Frederick, Mr Whymper) are given
 * almost no looks at all, beyond Whymper's "side whiskers". They wear the
 * plain working or town dress of rural England in the 1940s, when the book was
 * written: a cap or a hat, a jacket or a suit, a collar and tie. Nothing here
 * comes from a film, television or stage production of the book, and the
 * markers point only at what the text does say.
 *
 * Every portrait is drawn in the plate's own coordinates, so its markers can
 * be read straight off the drawing.
 */

/** Every portrait is drawn 332 by 318, as the style guide sets. */
export const PW = 332
export const PH = 318

/** A value computed once, on first use, and kept: a drawing never changes. */
export function once<T>(make: () => T): () => T {
  let value: T | undefined
  return () => {
    if (value === undefined) value = make()
    return value
  }
}

/**
 * The ground behind a sitter, as on the Scrooge portrait: rows of horizontal
 * gouges whose width follows `light(x, y)`, from 0 (almost solid ink) to 1
 * (cut widest). Each portrait passes its own light, so the ground says where
 * the light in the passage comes from (a lantern, a window, the open sky).
 */
export function portraitGround(seed: number, light: (x: number, y: number) => number): string {
  const r = rng(seed)
  let d = ''
  for (let y = 12; y < PH - 8; y += 5.2) {
    let x = 10 + between(r, 0, 8)
    while (x < PW - 10) {
      const len = between(r, 20, 90)
      const end = Math.min(x + len, PW - 10)
      const L = clamp(light((x + end) / 2, y))
      if (L > 0.02)
        d += gouge(
          x,
          y + between(r, -0.5, 0.5),
          end,
          y + between(r, -0.5, 0.5),
          0.3 + L * 2.4 * between(r, 0.7, 1.1),
        )
      x += len + between(r, 4, 12)
    }
  }
  return d
}

/** The fine paper rule inside the block's edge, as on the Scrooge portrait. */
export function InnerRule() {
  return (
    <rect
      x={8}
      y={8}
      width={PW - 16}
      height={PH - 16}
      fill="none"
      stroke={PAPER}
      strokeWidth={LINE.carve}
    />
  )
}

/**
 * A smooth outline through a list of points (a Catmull-Rom curve, written as
 * cubic Beziers), so a head can be drawn by placing its landmarks. A point
 * given as [x, y, 1] is a corner: the curve arrives at it and leaves it
 * without rounding, as at the tip of a snout or an ear.
 */
export type Knot = [number, number] | [number, number, 1]
export function smooth(pts: Knot[], closed = true): string {
  const k = pts.length
  const at = (i: number) => (closed ? pts[(i + k) % k] : pts[Math.max(0, Math.min(k - 1, i))])
  let d = `M${n(pts[0][0])} ${n(pts[0][1])}`
  const segs = closed ? k : k - 1
  for (let i = 0; i < segs; i++) {
    const p0 = at(i - 1)
    const p1 = at(i)
    const p2 = at(i + 1)
    const p3 = at(i + 2)
    const c1: Pt = p1[2]
      ? [p1[0], p1[1]]
      : [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6]
    const c2: Pt = p2[2]
      ? [p2[0], p2[1]]
      : [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6]
    d += `C${n(c1[0])} ${n(c1[1])} ${n(c2[0])} ${n(c2[1])} ${n(p2[0])} ${n(p2[1])}`
  }
  return closed ? d + 'Z' : d
}

/** Is (x, y) inside the polygon of an outline's landmarks? (Ray casting.) */
export function inside(poly: Knot[], x: number, y: number): boolean {
  let hit = false
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const [xi, yi] = poly[i]
    const [xj, yj] = poly[j]
    if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) hit = !hit
  }
  return hit
}

/**
 * Hair cut as white strands through a black mass: gouges from points on a
 * start line towards an end line, with a little scatter. A mane, a forelock,
 * a tail.
 */
export function strands(
  r: Rng,
  count: number,
  from: (t: number) => Pt,
  to: (t: number) => Pt,
  width: [number, number],
  bend = 1,
): string {
  let d = ''
  for (let i = 0; i < count; i++) {
    const t = (i + between(r, 0.1, 0.9)) / count
    const [x1, y1] = from(t)
    const [x2, y2] = to(t)
    d += gouge(
      x1 + between(r, -1.5, 1.5),
      y1 + between(r, -1.5, 1.5),
      x2 + between(r, -2, 2),
      y2 + between(r, -2, 2),
      between(r, width[0], width[1]),
      between(r, -bend, bend),
    )
  }
  return d
}

/** A point on a straight line from a to b. */
export const lerp2 =
  (a: Pt, b: Pt) =>
  (t: number): Pt => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t]

/** A point on a quadratic curve from a through the pull of c to b. */
export const quad2 =
  (a: Pt, c: Pt, b: Pt) =>
  (t: number): Pt => [
    (1 - t) * (1 - t) * a[0] + 2 * (1 - t) * t * c[0] + t * t * b[0],
    (1 - t) * (1 - t) * a[1] + 2 * (1 - t) * t * c[1] + t * t * b[1],
  ]

/**
 * The lie of a coat or a hide: short marks scattered through an outline, each
 * laid along the direction `dir(x, y)` returns (in radians), and weighted by
 * `light(x, y)` from 0 (no mark) to 1 (the widest). As gouges (the default)
 * they are paper cuts on a black animal, filled with PAPER; with `stroke`
 * they are fine ink strokes on a pale one, stroked with INK. Clip to the
 * animal.
 */
export function coat(
  r: Rng,
  outline: Knot[],
  count: number,
  dir: (x: number, y: number) => number,
  light: (x: number, y: number) => number,
  opts: { len?: [number, number]; width?: number; stroke?: boolean } = {},
): string {
  const [l0, l1] = opts.len ?? [6, 14]
  const width = opts.width ?? 1.4
  const xs = outline.map((p) => p[0])
  const ys = outline.map((p) => p[1])
  const [x0, x1] = [Math.min(...xs), Math.max(...xs)]
  const [y0, y1] = [Math.min(...ys), Math.max(...ys)]
  let d = ''
  for (let i = 0, tries = 0; i < count && tries < count * 30; tries++) {
    const x = between(r, x0, x1)
    const y = between(r, y0, y1)
    if (!inside(outline, x, y)) continue
    const L = clamp(light(x, y))
    if (L < 0.04 || r() > 0.25 + L * 0.75) continue
    const a = dir(x, y) + between(r, -0.18, 0.18)
    const len = between(r, l0, l1) * (0.6 + L * 0.4)
    const dx = (Math.cos(a) * len) / 2
    const dy = (Math.sin(a) * len) / 2
    if (opts.stroke)
      d += `M${n(x - dx)} ${n(y - dy)}q${n(dx + between(r, -1, 1))} ${n(dy + between(r, -1, 1))} ${n(dx * 2)} ${n(dy * 2)}`
    else
      d += gouge(x - dx, y - dy, x + dx, y + dy, width * (0.35 + L * 0.65), between(r, -0.6, 0.6))
    i++
  }
  return d
}

/**
 * Parallel hatching across a box at a slope: the shadow under a jaw, the shade
 * of a flank. Stroke-only path data; clip it to its shape.
 */
export function hatch(
  r: Rng,
  box: { x0: number; x1: number; y0: number; y1: number },
  step: number,
  slope = 0,
  jitter = 0.6,
): string {
  let d = ''
  for (let y = box.y0; y <= box.y1; y += step) {
    const a = y + between(r, -jitter, jitter)
    const b = y + slope * (box.x1 - box.x0) + between(r, -jitter, jitter)
    d += `M${n(box.x0)} ${n(a)}L${n(box.x1)} ${n(b)}`
  }
  return d
}

/**
 * Hatching that carries the light: parallel cuts across a box at a slope,
 * each broken into short gouges whose width follows `light(x, y)`, from 0 (a
 * hairline, almost solid ink) to 1 (cut wide, almost paper). A hatched animal
 * then keeps its roundness instead of printing one flat grey. Fill with PAPER
 * and clip to the shape; pass `keep` (say, inside() of the shape's outline) to
 * leave out the cuts that the clip would hide anyway, which keeps the file
 * light.
 */
export function toneHatch(
  r: Rng,
  box: { x0: number; x1: number; y0: number; y1: number },
  step: number,
  slope: number,
  light: (x: number, y: number) => number,
  seg = 16,
  keep: (x: number, y: number) => boolean = () => true,
): string {
  let d = ''
  const len = Math.hypot(1, slope)
  for (let y = box.y0; y <= box.y1; y += step) {
    let x = box.x0 + between(r, 0, seg)
    while (x < box.x1) {
      const L = between(r, seg * 0.7, seg * 1.3)
      const x2 = Math.min(box.x1, x + L / len)
      const ya = y + slope * (x - box.x0)
      const yb = y + slope * (x2 - box.x0)
      const w = 0.25 + clamp(light((x + x2) / 2, (ya + yb) / 2)) * 1.5
      if (keep(x, ya) || keep(x2, yb))
        d += gouge(x, ya + between(r, -0.3, 0.3), x2, yb + between(r, -0.3, 0.3), w)
      x = x2 + between(r, 0.5, 2)
    }
  }
  return d
}

/**
 * A finger, a leg or a stick: a capsule from (x1, y1) to (x2, y2), `w` wide,
 * with round ends.
 */
export function capsule(x1: number, y1: number, x2: number, y2: number, w: number): string {
  const dx = x2 - x1
  const dy = y2 - y1
  const L = Math.hypot(dx, dy) || 1
  const nx = (-dy / L) * (w / 2)
  const ny = (dx / L) * (w / 2)
  const rr = n(w / 2)
  return (
    `M${n(x1 + nx)} ${n(y1 + ny)}L${n(x2 + nx)} ${n(y2 + ny)}` +
    `A${rr} ${rr} 0 0 0 ${n(x2 - nx)} ${n(y2 - ny)}L${n(x1 - nx)} ${n(y1 - ny)}` +
    `A${rr} ${rr} 0 0 0 ${n(x1 + nx)} ${n(y1 + ny)}Z`
  )
}
