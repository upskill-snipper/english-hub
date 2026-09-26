import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, n, rng, type Pt, type Rng } from '@/components/comics/linocut/carve'

/**
 * What the Frankenstein portraits share with the pilot's (the Scrooge portrait
 * in src/data/comics/a-christmas-carol/scrooge.tsx set the standard): the size
 * of the block, the ground of horizontal cuts behind the sitter, the paper
 * rule inside the block's edge, and a few drawing aids.
 *
 * AS SHELLEY DESCRIBES THEM, AND NO FURTHER. Every portrait is drawn from the
 * held 1831 text (src/data/full-texts/frankenstein.ts), and its docblock
 * quotes the sentences each detail comes from. Shelley describes some people
 * closely (the Creature in Chapter 5, William in Elizabeth's letter, the
 * De Laceys through the Creature's chink) and others hardly at all (Victor's
 * face, Walton's, Alphonse's). Where she gives no face, the sitter is drawn
 * plainly and the markers point only at what the text does say; the card's
 * artNote says so.
 *
 * THE DRESS IS PLAIN ON PURPOSE. Walton dates his letters "17--", so the dress
 * is the ordinary dress of the 1790s: for men a dark coat with a high turned
 * collar and a white neckcloth, an old man's hair tied back; for women a plain
 * high-waisted gown with a kerchief crossed at the neck. What the text does
 * name is drawn as named: Walton's furs, the blankets Victor is wrapped in,
 * Justine's mourning, Agatha's linen jacket and plaited hair. Nothing comes
 * from a film, television or stage production, and above all not the
 * Creature: no flat-topped head, no bolts, no stitches, no green.
 *
 * Every portrait is drawn in the plate's own coordinates, 332 by 318, so its
 * markers can be read straight off the drawing.
 */

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
 * gouges whose width follows `light(x, y)`, from 0 (solid ink) to 1 (cut
 * widest). Each portrait passes its own light, so the ground says where the
 * light in the passage comes from (a candle, a stove, a low Arctic sun).
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
 * Hair cut as paper strands through a black mass: gouges from points on a
 * start line towards an end line, with a little scatter.
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
 * Parallel hatching across a box, each line tilted by `slope`: the shadow
 * under a jaw, the shade of a sleeve. Stroke-only path data; clip it to its
 * shape.
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
 * Light caught along the edge of dark hair: short cuts lying along an
 * ellipse (centre cx, cy; radii rx, ry) between two angles in degrees, just
 * inside its edge. Fill with PAPER, clipped to the hair.
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
 * A finger, a thumb or a forearm: a capsule from (x1, y1) to (x2, y2), `w`
 * wide, with round ends.
 */
export function capsule(x1: number, y1: number, x2: number, y2: number, w: number): string {
  const dx = x2 - x1
  const dy = y2 - y1
  const L = Math.hypot(dx, dy) || 1
  const nx = (-dy / L) * (w / 2)
  const ny = (dx / L) * (w / 2)
  const r = n(w / 2)
  return (
    `M${n(x1 + nx)} ${n(y1 + ny)}L${n(x2 + nx)} ${n(y2 + ny)}` +
    `A${r} ${r} 0 0 0 ${n(x2 - nx)} ${n(y2 - ny)}L${n(x1 - nx)} ${n(y1 - ny)}` +
    `A${r} ${r} 0 0 0 ${n(x1 + nx)} ${n(y1 + ny)}Z`
  )
}

/** One digit of a hand, in the hand's own frame: from its knuckle to its tip. */
export type Digit = { from: Pt; to: Pt; w: number }

/**
 * A hand, drawn in paper with an ink rim round every digit, so the fingers
 * stay apart at panel size and never merge into a fist (the pilot's reviewers
 * caught that more than once). Drawn in its own frame, the wrist at the
 * origin, and placed with `transform`. `palm` is the outline of the palm or
 * the back of the hand; `digits` are drawn over it in order, so list the far
 * ones first. `lines` are knuckle creases and nails, stroked in ink.
 */
export function Hand({
  transform,
  palm,
  digits,
  lines = '',
  halo = 4,
}: {
  transform: string
  palm: string
  digits: Digit[]
  lines?: string
  halo?: number
}) {
  const shapes = digits.map((f) => capsule(f.from[0], f.from[1], f.to[0], f.to[1], f.w))
  return (
    <g transform={transform}>
      {/* an ink halo, so the hand stands clear of whatever is behind it */}
      <g fill={INK} stroke={INK} strokeWidth={halo} strokeLinejoin="round">
        <path d={palm} />
        {shapes.map((d) => (
          <path key={d} d={d} />
        ))}
      </g>
      <path d={palm} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      {shapes.map((d) => (
        <path key={d} d={d} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      ))}
      <path d={lines} fill="none" stroke={INK} strokeWidth={LINE.hairline} strokeLinecap="round" />
    </g>
  )
}

/** A point in a hand's frame (or any rotated, scaled frame), carried to the plate. */
export function framePoint(
  at: Pt,
  rot: number,
  s: number,
): (x: number, y: number) => [number, number] {
  const a = (rot * Math.PI) / 180
  const c = Math.cos(a)
  const sn = Math.sin(a)
  return (x, y) => [
    Math.round((at[0] + (x * c - y * sn) * s) * 10) / 10,
    Math.round((at[1] + (x * sn + y * c) * s) * 10) / 10,
  ]
}

/** The transform that goes with framePoint: the frame's origin placed at `at`. */
export const frameTransform = (at: Pt, rot: number, s: number) =>
  `translate(${at[0]} ${at[1]}) rotate(${rot}) scale(${s})`

/**
 * A candle's flame, point up, its foot at (x, y) and `h` tall: the shape the
 * spot colour fills. Paired with lc-flicker.
 */
export function flame(x: number, y: number, h: number, lean = 0): string {
  const w = h * 0.34
  return (
    `M${n(x)} ${n(y)}C${n(x - w)} ${n(y - h * 0.18)} ${n(x - w * 0.8)} ${n(y - h * 0.62)} ${n(x + lean)} ${n(y - h)}` +
    `C${n(x + w * 0.9)} ${n(y - h * 0.6)} ${n(x + w)} ${n(y - h * 0.2)} ${n(x)} ${n(y)}Z`
  )
}

/**
 * Where a figure drawn in its own frame sits in the portrait: scaled by `s`,
 * moved by (dx, dy), and flipped to face left if `left`. Returns the
 * transform and a function that carries a point in the figure's frame to the
 * plate, for the markers.
 */
export function placing(dx: number, dy: number, s: number, left = false) {
  const transform = left
    ? `translate(${PW} 0) scale(-1 1) translate(${dx} ${dy}) scale(${s})`
    : `translate(${dx} ${dy}) scale(${s})`
  const to = (x: number, y: number): Pt => {
    const px = dx + x * s
    return [Math.round((left ? PW - px : px) * 10) / 10, Math.round((dy + y * s) * 10) / 10]
  }
  return { transform, to }
}

/**
 * Pale hair cut in ink on paper, as the Scrooge head's is: short strokes
 * scattered through `outline` (its landmarks, as given to smooth()), each
 * lying along the curve of the skull round `centre`, so the hair reads as
 * combed back over the crown, not as a cap. Below `fallFrom` (a y), strokes
 * turn to fall straight down, for hair hanging behind. Stroke with INK at
 * about a hairline, clipped to the hair.
 */
export function combedHair(
  r: Rng,
  outline: Knot[],
  centre: Pt,
  count: number,
  len: [number, number],
  fallFrom = Infinity,
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
    let tx: number
    let ty: number
    if (y > fallFrom) {
      tx = between(r, -0.25, 0.1)
      ty = 1
    } else {
      const vx = x - centre[0]
      const vy = y - centre[1]
      const vl = Math.hypot(vx, vy) || 1
      tx = vy / vl
      ty = -vx / vl
    }
    const tl = Math.hypot(tx, ty) || 1
    tx /= tl
    ty /= tl
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
