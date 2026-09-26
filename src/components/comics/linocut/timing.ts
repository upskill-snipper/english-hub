import type { CSSProperties } from 'react'

/**
 * Timing for one element, as CSS custom properties the motion rules in
 * styles.tsx read: `delay` and `dur` in seconds, `push` for the push-in scale,
 * `i` for a marker's place in the stagger.
 *
 * In a file of its own so that the frames, which the browser renders, can use
 * it without importing styles.tsx and the whole stylesheet string with it.
 * styles.tsx re-exports it, so a drawing imports it from either.
 */
export function timing(t: {
  delay?: number
  dur?: number
  push?: number
  i?: number
  origin?: [number, number]
}): CSSProperties {
  const s: Record<string, string | number> = {}
  if (t.delay !== undefined) s['--lc-delay'] = `${t.delay}s`
  if (t.dur !== undefined) s['--lc-dur'] = `${t.dur}s`
  if (t.push !== undefined) s['--lc-push'] = t.push
  if (t.i !== undefined) s['--lc-i'] = t.i
  if (t.origin) s.transformOrigin = `${t.origin[0]}px ${t.origin[1]}px`
  return s as CSSProperties
}
