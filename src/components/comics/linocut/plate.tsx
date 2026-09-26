import type { ReactNode } from 'react'

import type { LinocutArt, PortraitMarker } from '@/lib/comics/types'

import { INK, LINE, PAPER, RED, SERIF } from './palette'
import { PlateFilters, textureIds } from './textures'
import { timing } from './timing'

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
 *
 * WHERE A PLATE GOES. Never into a page's markup. Each plate is rendered once,
 * at build time, into a file of its own (src/lib/comics/plate-file.tsx, run by
 * scripts/generate-comic-plates.mjs), and the page fetches that file when the
 * piece is about to be seen (lazy-plate.tsx). Only the build and the preview
 * script import this module; nothing the browser runs may, and the comics test
 * follows every client module's imports to make sure.
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

/** A panel's plate: its drawing on the block, labelled with its alt text. */
export function PanelPlate({ uid, art, alt }: { uid: string; art: LinocutArt; alt: string }) {
  const Draw = art.Draw
  return (
    <Plate uid={uid} width={art.width} height={art.height} label={alt}>
      <Draw uid={uid} />
    </Plate>
  )
}

/** One numbered disc, and the line to the feature it marks. */
function Marker({ i, marker }: { i: number; marker: PortraitMarker }) {
  const [x, y] = marker.at
  return (
    <g className="lc-marker" style={timing({ i })}>
      {marker.to && (
        <path
          d={`M${x} ${y}L${marker.to[0]} ${marker.to[1]}`}
          stroke={RED}
          strokeWidth={1.5}
          fill="none"
        />
      )}
      <circle cx={x} cy={y} r={9.5} fill={RED} stroke={PAPER} strokeWidth={1.6} />
      <text
        x={x}
        y={y + 4}
        textAnchor="middle"
        fontSize={11.5}
        fontWeight={700}
        fill={PAPER}
        fontFamily={SERIF}
      >
        {i + 1}
      </text>
    </g>
  )
}

/**
 * A portrait's plate, with its numbered markers crisp above the roughened
 * drawing. The numbers are in the picture for sighted readers; the alt text
 * says what each one marks, and the card beside it prints the words.
 */
export function PortraitPlate({
  uid,
  art,
  alt,
  markers,
}: {
  uid: string
  art: LinocutArt
  alt: string
  markers: PortraitMarker[]
}) {
  const Draw = art.Draw
  return (
    <Plate
      uid={uid}
      width={art.width}
      height={art.height}
      label={alt}
      overlay={
        <g>
          {markers.map((m, i) => (
            <Marker key={m.phrase} i={i} marker={m} />
          ))}
        </g>
      }
    >
      <Draw uid={uid} />
    </Plate>
  )
}
