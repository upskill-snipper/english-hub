import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, n, rng, type Pt, type Rng } from '@/components/comics/linocut/carve'

/**
 * What the Romeo and Juliet portraits share: the size of the block, the cut
 * ground behind each head, the paper rule inside the border, a smooth-outline
 * helper for drawing heads, and the few pieces of dress the play leaves
 * undescribed.
 *
 * THE DRESS IS PLAIN ON PURPOSE. Shakespeare describes almost no one's looks,
 * so nobody here wears anything the play does not give them beyond the
 * ordinary dress of a city like Verona as his first audience would have
 * pictured it, in the 1590s: men in doublets buttoned down the front, with a
 * falling linen band or a small ruff at the neck and a soft flat cap; older
 * men in long gowns; women in a fitted bodice with a high linen collar, their
 * hair dressed under a caul or a linen coif; a Franciscan friar in his habit.
 * The play names the doublet (3.1), the rapier (1.5) and the Friar's order
 * ("Holy Saint Francis", 2.3). None of it comes from a film, television or
 * stage production. The markers on each portrait point only at what the play
 * does say.
 *
 * Every figure is drawn facing right in its own 0..240 by 0..332 frame and
 * placed with a transform; one that faces left is flipped with scale(-1 1),
 * so a head can be reused in a panel the way Scrooge's is.
 */

export const PW = 332
export const PH = 318

const grounds = new Map<string, string>()

/**
 * Horizontal cuts behind a head, as on Scrooge's portrait: `light(x, y)` from 0
 * (almost solid ink) to 1 (cut nearly white). Cached by `key`, since a ground
 * never changes.
 */
export function portraitGround(
  key: string,
  seed: number,
  light: (x: number, y: number) => number,
): string {
  const hit = grounds.get(key)
  if (hit) return hit
  const r = rng(seed)
  let d = ''
  for (let y = 12; y < PH - 8; y += 5.2) {
    let x = 10 + between(r, 0, 8)
    while (x < PW - 10) {
      const len = between(r, 20, 90)
      const x2 = Math.min(x + len, PW - 10)
      const L = clamp(light((x + x2) / 2, y))
      if (L > 0.02)
        d += gouge(
          x,
          y + between(r, -0.5, 0.5),
          x2,
          y + between(r, -0.5, 0.5),
          0.3 + L * 2.4 * between(r, 0.7, 1.1),
        )
      x += len + between(r, 4, 12)
    }
  }
  grounds.set(key, d)
  return d
}

/** The thin paper rule cut just inside the block's edge. */
export function PortraitRule() {
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

/** A point on an outline; a third value of 1 makes it a sharp corner. */
export type SP = [number, number] | [number, number, 1]

/**
 * A smooth outline through the given points (a Catmull-Rom curve written as
 * cubic Béziers), closed unless `closed` is false. A point marked as a corner
 * keeps its sharp angle: the notch under a nose, the corner of a mouth.
 */
export function spline(pts: SP[], closed = true, k = 1 / 6): string {
  const N = pts.length
  const at = (i: number): SP => (closed ? pts[(i + N) % N] : pts[Math.max(0, Math.min(N - 1, i))])
  let d = `M${n(pts[0][0])} ${n(pts[0][1])}`
  const segs = closed ? N : N - 1
  for (let i = 0; i < segs; i++) {
    const p0 = at(i - 1)
    const p1 = at(i)
    const p2 = at(i + 1)
    const p3 = at(i + 2)
    const c1 = p1[2] ? p1 : [p1[0] + (p2[0] - p0[0]) * k, p1[1] + (p2[1] - p0[1]) * k]
    const c2 = p2[2] ? p2 : [p2[0] - (p3[0] - p1[0]) * k, p2[1] - (p3[1] - p1[1]) * k]
    d += `C${n(c1[0])} ${n(c1[1])} ${n(c2[0])} ${n(c2[1])} ${n(p2[0])} ${n(p2[1])}`
  }
  return d + (closed ? 'Z' : '')
}

/**
 * Where a figure sits in the portrait: scaled by `s`, moved by (dx, dy), and
 * flipped to face left if `left`. Returns the transform and a function that
 * takes a point in the figure's frame to the portrait's, for the markers.
 */
export function placing(dx: number, dy: number, s: number, left = false) {
  const transform = left
    ? `translate(${PW} 0) scale(-1 1) translate(${dx} ${dy}) scale(${s})`
    : `translate(${dx} ${dy}) scale(${s})`
  const to = (x: number, y: number): [number, number] => {
    const px = dx + x * s
    return [Math.round((left ? PW - px : px) * 10) / 10, Math.round((dy + y * s) * 10) / 10]
  }
  return { transform, to }
}

/**
 * Hair, a beard or fur cut as strands: gouges from points on a start line
 * towards an end line, with a little scatter.
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
 * Rows of hatching, cut as short strokes between two edges that follow a
 * curve: shadow in a fold, the turn of a cheek. Stroke it with INK or PAPER.
 */
export function hatch(
  r: Rng,
  from: (t: number) => Pt,
  to: (t: number) => Pt,
  count: number,
  jitter = 1,
): string {
  let d = ''
  for (let i = 0; i < count; i++) {
    const t = (i + 0.5) / count
    const [x1, y1] = from(t)
    const [x2, y2] = to(t)
    d += `M${n(x1 + between(r, -jitter, jitter))} ${n(y1)}L${n(x2 + between(r, -jitter, jitter))} ${n(y2)}`
  }
  return d
}

/**
 * The buttons down the front of a doublet: small paper discs along a line,
 * each with an ink rim, so they read as buttons and not as holes.
 */
export function Buttons({ pts, r = 2.6 }: { pts: Pt[]; r?: number }) {
  return (
    <g>
      {pts.map(([x, y]) => (
        <circle
          key={`${x}-${y}`}
          cx={x}
          cy={y}
          r={r}
          fill={PAPER}
          stroke={INK}
          strokeWidth={LINE.hairline}
        />
      ))}
    </g>
  )
}

/**
 * A small ruff round the neck, seen from the side: a band of linen with a
 * scalloped edge top and bottom (`ruff`, fill with PAPER and rim in INK), and
 * its pleats (`pleats`, stroke in INK). From x0 to x1, its top at `top` and
 * its foot at `foot`, each pleat `step` wide; `rise` tilts it, higher at the
 * front.
 */
export function ruffBand(x0: number, x1: number, top: number, foot: number, step = 7, rise = 0.06) {
  const xs: number[] = []
  for (let x = x0; x <= x1; x += step) xs.push(x)
  const topAt = (x: number) => top - (x - x0) * rise
  const footAt = (x: number) => foot - (x - x0) * rise * 0.33
  let ruff = `M${n(x0)} ${n(topAt(x0) + 2)}`
  for (let i = 1; i < xs.length; i++) {
    const a = xs[i - 1]
    const b = xs[i]
    ruff += `Q${n((a + b) / 2)} ${n(topAt(b) - 6)} ${n(b)} ${n(topAt(b))}`
  }
  const last = xs[xs.length - 1]
  ruff += `L${n(last + 2)} ${n(footAt(last))}`
  for (let i = xs.length - 1; i > 0; i--) {
    const a = xs[i]
    const b = xs[i - 1]
    ruff += `Q${n((a + b) / 2)} ${n(footAt(b) + 6)} ${n(b)} ${n(footAt(b))}`
  }
  ruff += 'Z'
  let pleats = ''
  for (let x = x0 + step / 2; x < last; x += step)
    pleats += `M${n(x)} ${n(topAt(x) + 1)}C${n(x - 3)} ${n(top + 8)} ${n(x + 3)} ${n(foot - 8)} ${n(x)} ${n(footAt(x))}`
  return { ruff, pleats }
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
 * A hand, drawn in paper with an ink rim round every digit, so that the
 * fingers stay apart at panel size and never merge into a fist (the pilot's
 * reviewers caught that more than once). Draw it in its own frame, with the
 * wrist at the origin, and place it with `transform`.
 *
 * `palm` is the outline of the palm or the back of the hand; `digits` are
 * drawn over it in order, so list the far ones first. `lines` are knuckle
 * creases and nails, stroked in ink.
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

/** A point in a hand's frame, carried to the frame it is placed in. */
export function handPoint(
  at: Pt,
  rot: number,
  s: number,
): (x: number, y: number) => [number, number] {
  const a = (rot * Math.PI) / 180
  const c = Math.cos(a)
  const sn = Math.sin(a)
  return (x, y) => [at[0] + (x * c - y * sn) * s, at[1] + (x * sn + y * c) * s]
}
