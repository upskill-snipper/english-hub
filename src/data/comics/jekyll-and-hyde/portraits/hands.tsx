import type { ReactNode } from 'react'

import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { n, type Pt } from '@/components/comics/linocut/carve'

import { smooth } from './common'

/**
 * A hand seen from the back, cut in paper on the black: the one tool the
 * Jekyll and Hyde portraits need that the pilot did not, because Stevenson
 * sets the two men's hands side by side in Jekyll's statement (Chapter 10):
 * Jekyll's "large, firm, white and comely", Hyde's "lean, corded, knuckly".
 *
 * THE FINGERS STAY APART. The pilot's reviewers found that hands whose
 * fingers merge read as fists at panel size. So every finger is its own
 * round-ended stroke with an ink edge, laid one after another so each edge
 * cuts a clear line between it and the last, and the back of the hand is
 * redrawn over their roots so they join it as fingers do.
 */

export type HandSpec = {
  /** The two sides of the wrist, where the cuff ends. */
  wrist: [Pt, Pt]
  /** The knuckle of each finger, index to little finger. */
  knuckles: Pt[]
  /** The tip of each finger, in the same order. */
  tips: Pt[]
  /** Each finger's width. */
  width: number[]
  /** How far each finger bows sideways, as a hand at rest does. */
  bow?: number[]
  /**
   * A thumb from its root to its tip, or null where it is out of sight. It is
   * drawn behind the hand unless `front` (a thumb pressed over something held).
   */
  thumb: { root: Pt; tip: Pt; width: number; bow?: number; front?: boolean } | null
}

export type HandPaths = {
  back: string
  fingers: { d: string; w: number }[]
  thumb: { d: string; w: number; front: boolean } | null
  knuckles: string
}

/** A gently bowed stroke from a to b: a finger, a thumb. */
function bowed(a: Pt, b: Pt, bow: number, back: Pt | null): string {
  const dx = b[0] - a[0]
  const dy = b[1] - a[1]
  const L = Math.hypot(dx, dy) || 1
  const cx = (a[0] + b[0]) / 2 + (-dy / L) * bow
  const cy = (a[1] + b[1]) / 2 + (dx / L) * bow
  // Start a little inside the hand, towards the wrist, so the root is covered.
  let sx = a[0]
  let sy = a[1]
  if (back) {
    const bx = back[0] - a[0]
    const by = back[1] - a[1]
    const bl = Math.hypot(bx, by) || 1
    sx += (bx / bl) * 5
    sy += (by / bl) * 5
  }
  return `M${n(sx)} ${n(sy)}Q${n(cx)} ${n(cy)} ${n(b[0])} ${n(b[1])}`
}

/** The outline of the back of the hand, and each finger as a stroke. */
export function handPaths(spec: HandSpec): HandPaths {
  const [w0, w1] = spec.wrist
  const k = spec.knuckles
  const first = k[0]
  const last = k[k.length - 1]
  // The back of the hand runs from the wrist to just past the outer knuckles.
  const out = (p: Pt, q: Pt, by: number): Pt => {
    const dx = p[0] - q[0]
    const dy = p[1] - q[1]
    const L = Math.hypot(dx, dy) || 1
    return [p[0] + (dx / L) * by, p[1] + (dy / L) * by]
  }
  const back = smooth([
    w0,
    [(w0[0] + first[0]) / 2, (w0[1] + first[1]) / 2 - 1],
    out(first, k[1], spec.width[0] * 0.45),
    ...k.slice(1, -1).map((p): Pt => [p[0] + 1.5, p[1]]),
    out(last, k[k.length - 2], spec.width[k.length - 1] * 0.45),
    [(w1[0] + last[0]) / 2, (w1[1] + last[1]) / 2 + 1],
    w1,
  ])
  const mid: Pt = [(w0[0] + w1[0]) / 2, (w0[1] + w1[1]) / 2]
  const fingers = k.map((p, i) => ({
    d: bowed(p, spec.tips[i], spec.bow?.[i] ?? 0, mid),
    w: spec.width[i],
  }))
  const thumb = spec.thumb
    ? {
        d: bowed(spec.thumb.root, spec.thumb.tip, spec.thumb.bow ?? 0, null),
        w: spec.thumb.width,
        front: spec.thumb.front ?? false,
      }
    : null
  // A small arc over each knuckle.
  const knuckles = k
    .map((p, i) => {
      const w = spec.width[i] * 0.42
      return `M${n(p[0] - 1)} ${n(p[1] - w)}Q${n(p[0] + 2.2)} ${n(p[1])} ${n(p[0] - 1)} ${n(p[1] + w)}`
    })
    .join('')
  return { back, fingers, thumb, knuckles }
}

/**
 * The hand, drawn: the thumb behind, then the back of the hand, then each
 * finger with its ink edge, then the back again over the fingers' roots.
 * `knuckly` cuts the knuckles bold; `children` is drawn over the back of the
 * hand, for marks on the skin (Hyde's cords and hair).
 */
export function Hand({
  paths,
  knuckly = false,
  children,
}: {
  paths: HandPaths
  knuckly?: boolean
  children?: ReactNode
}) {
  const thumb = paths.thumb && (
    <>
      <path d={paths.thumb.d} fill="none" stroke={INK} strokeWidth={paths.thumb.w + 3.4} />
      <path d={paths.thumb.d} fill="none" stroke={PAPER} strokeWidth={paths.thumb.w} />
    </>
  )
  return (
    <g strokeLinecap="round" strokeLinejoin="round">
      {paths.thumb && !paths.thumb.front && thumb}
      <path d={paths.back} fill={PAPER} stroke={INK} strokeWidth={3.4} />
      {paths.fingers.map((f) => (
        <g key={f.d}>
          <path d={f.d} fill="none" stroke={INK} strokeWidth={f.w + 3.2} />
          <path d={f.d} fill="none" stroke={PAPER} strokeWidth={f.w} />
        </g>
      ))}
      <path d={paths.back} fill={PAPER} />
      {children}
      <path
        d={paths.knuckles}
        fill="none"
        stroke={INK}
        strokeWidth={knuckly ? LINE.fine : LINE.hairline}
      />
      {paths.thumb?.front && thumb}
    </g>
  )
}
