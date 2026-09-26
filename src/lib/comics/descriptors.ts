import type { ComicPanel, PanelDescriptor, Portrait, PortraitDescriptor } from './types'
import { pieceUid } from './uid'

/**
 * A registered piece as the page is given it: plain data, no drawing. The
 * drawing is the file at `src`, fetched by the browser when the piece is about
 * to be seen (src/components/comics/linocut/lazy-plate.tsx).
 *
 * `src` is passed in rather than looked up here, so the build that writes the
 * plate files (src/lib/comics/plate-file.tsx) can describe a piece by the file
 * it has just rendered, without importing the manifest it is about to write.
 * The site looks it up in that manifest through ./served.ts.
 *
 * Optional fields are left out rather than set to undefined, so what reaches
 * the page is exactly what the piece has.
 */

export function describePanel(slug: string, panel: ComicPanel, src: string): PanelDescriptor {
  return {
    uid: pieceUid(slug, panel.moment),
    src,
    width: panel.art.width,
    height: panel.art.height,
    alt: panel.alt,
    ...(panel.quote !== undefined && { quote: panel.quote }),
    ...(panel.quoteAt !== undefined && { quoteAt: panel.quoteAt }),
    ...(panel.caption !== undefined && { caption: panel.caption }),
    ...(panel.captionAt !== undefined && { captionAt: panel.captionAt }),
  }
}

export function describePortrait(
  slug: string,
  portrait: Portrait,
  src: string,
): PortraitDescriptor {
  return {
    uid: pieceUid(slug, portrait.name),
    src,
    width: portrait.art.width,
    height: portrait.art.height,
    alt: portrait.alt,
    name: portrait.name,
    where: portrait.where,
    phrases: portrait.describedBy.map((m) => m.phrase),
    ...(portrait.passage !== undefined && { passage: portrait.passage }),
    ...(portrait.note !== undefined && { note: portrait.note }),
    ...(portrait.artNote !== undefined && { artNote: portrait.artNote }),
  }
}
