import type { ReactNode } from 'react'

import type { BoxAt, PanelDescriptor } from '@/lib/comics/types'

import { PaperGrain } from './textures'
import { timing } from './timing'

/**
 * The frame a panel is shown in: the print on its sheet with its caption and
 * quotation boxes. Pure HTML, SVG and CSS with no hooks and no drawing, so the
 * browser can render it as well as the server: the key-moments player builds
 * each panel's frame from a descriptor (see PanelDescriptor) and puts a
 * LazyPlate inside, which fetches the drawing itself. The page's LinocutStyles
 * supplies the styles.
 *
 * The drawing side, the <svg> plate, is plate.tsx, and never reaches a page's
 * markup; see the docblock there.
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
 *
 * `children` is the plate: a LazyPlate on the site, the served file inlined in
 * the preview script.
 */
export function PanelFrame({ piece, children }: { piece: PanelDescriptor; children: ReactNode }) {
  return (
    <figure className="lc-sheet lc-panel" lang="en" dir="ltr">
      <div className="lc-print lc-reveal">{children}</div>
      {piece.caption && <CaptionBox text={piece.caption} at={piece.captionAt} />}
      {piece.quote && <QuoteBox text={piece.quote} at={piece.quoteAt} />}
      <PaperGrain uid={piece.uid} />
    </figure>
  )
}
