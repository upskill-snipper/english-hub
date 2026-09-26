import type { ReactNode } from 'react'

import { INK, LINE } from './palette'
import { PlateFilters, textureIds } from './textures'

/**
 * The block itself: the <svg> root every piece is printed from. It owns what
 * must be the same on every piece, so no drawing can leave it out:
 *
 * - role="img" and the alt text as aria-label, so assistive technology reads
 *   one description instead of hundreds of unlabelled paths;
 * - the ink ground, with the drawing roughened by the `rough` filter;
 * - the rough ink border of the block and the ink voids over everything.
 *
 * `overlay` is drawn above the roughened drawing but under the voids: crisp
 * marks such as a portrait's numbered markers.
 */
export function Plate({
  uid,
  width,
  height,
  label,
  children,
  overlay,
}: {
  uid: string
  width: number
  height: number
  label: string
  children: ReactNode
  overlay?: ReactNode
}) {
  const id = textureIds(uid)
  return (
    <svg className="lc-plate" viewBox={`0 0 ${width} ${height}`} role="img" aria-label={label}>
      <PlateFilters uid={uid} />
      <rect width={width} height={height} fill={INK} />
      <g filter={`url(#${id.rough})`}>{children}</g>
      {overlay}
      <rect
        x={2.5}
        y={2.5}
        width={width - 5}
        height={height - 5}
        fill="none"
        stroke={INK}
        strokeWidth={LINE.frame}
        filter={`url(#${id.rough})`}
      />
      <rect
        width={width}
        height={height}
        filter={`url(#${id.voids})`}
        opacity={0.7}
        pointerEvents="none"
      />
    </svg>
  )
}
