import type { BoxAt, LinocutArt, PortraitMarker } from '@/lib/comics/types'

import { PAPER, RED, SERIF } from './palette'
import { Plate } from './plate'
import { LinocutStyles, timing } from './styles'
import { PaperGrain } from './textures'

/**
 * The frames every piece is shown in: a panel on its sheet with its boxes, and
 * a portrait with its numbered markers. Server components, pure SVG, HTML and
 * CSS; the drawings they hold are the same.
 */

/** A line of narration, in the guide's words. */
export function CaptionBox({ text, at = 'top-left' }: { text: string; at?: BoxAt }) {
  return (
    <p className={`lc-box lc-pop lc-at-${at}`} style={timing({ delay: 0.8 })}>
      {text}
    </p>
  )
}

/**
 * A quotation from the text: italic, with the spot colour down its edge and
 * on its marks. The marks are decoration; the <blockquote> is what tells a
 * screen reader it is a quotation.
 */
export function QuoteBox({ text, at = 'bottom-right' }: { text: string; at?: BoxAt }) {
  return (
    <blockquote className={`lc-box lc-quote lc-pop lc-at-${at}`} style={timing({ delay: 1.1 })}>
      <p>
        <span className="lc-qm" aria-hidden="true">
          &#8220;
        </span>
        {text}
        <span className="lc-qm" aria-hidden="true">
          &#8221;
        </span>
      </p>
    </blockquote>
  )
}

/**
 * One panel: the print on its sheet of bone paper, wiped in from the left,
 * with its caption and quotation pasted on. `lang="en"` because the art, its
 * alt text and its quotation are English on every locale, as the guide
 * content is.
 */
export function PanelFrame({
  uid,
  art,
  alt,
  quote,
  quoteAt,
  caption,
  captionAt,
}: {
  uid: string
  art: LinocutArt
  alt: string
  quote?: string
  quoteAt?: BoxAt
  caption?: string
  captionAt?: BoxAt
}) {
  const Draw = art.Draw
  return (
    <figure className="lc-sheet lc-panel" lang="en" dir="ltr">
      <LinocutStyles />
      <div className="lc-print lc-reveal">
        <Plate uid={uid} width={art.width} height={art.height} label={alt}>
          <Draw uid={uid} />
        </Plate>
      </div>
      {caption && <CaptionBox text={caption} at={captionAt} />}
      {quote && <QuoteBox text={quote} at={quoteAt} />}
      <PaperGrain uid={uid} />
    </figure>
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
 * A portrait plate with its numbered markers, crisp above the roughened
 * drawing. The numbers are in the picture for sighted readers; the alt text
 * says what each one marks, and the card beside it prints the words.
 */
export function PortraitFrame({
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
    <div className="lc-print lc-reveal">
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
    </div>
  )
}
