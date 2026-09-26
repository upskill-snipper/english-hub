import { PAPER, LINE } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, n, rng, type Pt, type Rng } from '@/components/comics/linocut/carve'

/**
 * What the Jekyll and Hyde portraits share with the pilot's (the Scrooge
 * portrait in src/data/comics/a-christmas-carol/scrooge.tsx set the
 * standard): the size of the block, the ground of horizontal cuts behind the
 * sitter, the paper rule inside the block's edge, and two small drawing aids.
 *
 * THE DRESS IS PLAIN ON PURPOSE. Stevenson describes faces, hands and
 * manners, and almost never clothes: the one suit he dwells on is the one
 * Hyde wears "enormously too large for him" in Lanyon's narrative. So every
 * sitter here wears the ordinary dress of a London gentleman, or a
 * gentleman's servant, in the 1880s (a dark coat, a white collar, a dark tie),
 * and nothing from a film, television or stage production. Where Stevenson
 * gives no face at all (Enfield, Guest), the man is drawn plainly and his
 * markers point only at what the text says he does.
 *
 * Each portrait is drawn in the plate's own coordinates, so its markers can be
 * read straight off the drawing.
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
 * the light in the passage comes from (a fire, a street lamp, the moon).
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
 * cubic Beziers), so a head or a hand can be drawn by placing its landmarks.
 * A point given as [x, y, 1] is a corner: the curve arrives at it and leaves
 * it without rounding, as at the tip of a nose or the corner of a collar.
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

/**
 * Hair cut as white strands through a black mass: gouges from points on a
 * start line towards an end line, with a little scatter. The same tool the
 * Macbeth portraits use for hair and beards.
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

/**
 * Light caught along the edge of dark hair: short cuts lying along an
 * ellipse (centre cx, cy; radii rx, ry) between two angles in degrees, just
 * inside its edge. It lifts a dark head off a dark ground the way a printer
 * would, by cutting, rather than with an outline. Fill with PAPER, clipped to
 * the head.
 */
export function rimLight(
  r: Rng,
  e: { cx: number; cy: number; rx: number; ry: number },
  from: number,
  to: number,
  count: number,
  width = 1,
): string {
  let d = ''
  for (let i = 0; i < count; i++) {
    const a = ((from + ((to - from) * (i + between(r, 0.1, 0.9))) / count) * Math.PI) / 180
    const inset = between(r, 2, 9)
    const x = e.cx + Math.cos(a) * (e.rx - inset)
    const y = e.cy + Math.sin(a) * (e.ry - inset)
    const tx = -Math.sin(a) * e.rx
    const ty = Math.cos(a) * e.ry
    const tl = Math.hypot(tx, ty) || 1
    const L = between(r, 6, 14)
    d += gouge(
      x + (tx / tl) * L * 0.5,
      y + (ty / tl) * L * 0.5,
      x - (tx / tl) * L * 0.5,
      y - (ty / tl) * L * 0.5,
      between(r, 0.5, 1) * width * (inset < 5 ? 1.2 : 0.8),
      between(r, -1, 1),
    )
  }
  return d
}

/**
 * Pale hair cut in ink on paper, as the Scrooge head's is: short strokes
 * scattered through `outline` (its landmarks, as given to smooth()), each
 * lying along the curve of the skull round `centre`, so the hair reads as
 * combed back over the crown and down behind, not as a cap. Stroke with INK
 * at about a hairline, clipped to the hair.
 */
export function combedHair(
  r: Rng,
  outline: Knot[],
  centre: Pt,
  count: number,
  len: [number, number],
): string {
  const poly = outline.map(([x, y]): Pt => [x, y])
  const xs = poly.map((p) => p[0])
  const ys = poly.map((p) => p[1])
  const [x0, x1] = [Math.min(...xs), Math.max(...xs)]
  const [y0, y1] = [Math.min(...ys), Math.max(...ys)]
  let d = ''
  for (let i = 0, tries = 0; i < count && tries < count * 40; tries++) {
    const x = between(r, x0, x1)
    const y = between(r, y0, y1)
    if (!inside(poly, x, y)) continue
    const vx = x - centre[0]
    const vy = y - centre[1]
    const vl = Math.hypot(vx, vy) || 1
    const tx = vy / vl
    const ty = -vx / vl
    const L = between(r, len[0], len[1])
    const bend = between(r, -1.5, 1.5)
    d += `M${n(x)} ${n(y)}q${n(tx * L * 0.5 - ty * bend)} ${n(ty * L * 0.5 + tx * bend)} ${n(tx * L)} ${n(ty * L)}`
    i++
  }
  return d
}

/** Is (x, y) inside the polygon? (Ray casting.) */
export function inside(poly: Pt[], x: number, y: number): boolean {
  let hit = false
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const [xi, yi] = poly[i]
    const [xj, yj] = poly[j]
    if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) hit = !hit
  }
  return hit
}

/** A point on a straight line from a to b. */
export const lerp2 =
  (a: Pt, b: Pt) =>
  (t: number): Pt => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t]

/**
 * Parallel hatching across a box at an angle: the shadow under a jaw, the
 * shade of a sleeve. Returns stroke-only path data; clip it to its shape.
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
