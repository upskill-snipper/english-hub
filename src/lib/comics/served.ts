import { describePanel, describePortrait } from './descriptors'
import { PLATE_SRC } from './plates.generated'
import type { ComicPanel, PanelDescriptor, Portrait, PortraitDescriptor } from './types'
import { pieceUid } from './uid'

/**
 * The served file of a registered piece, from the manifest that
 * scripts/generate-comic-plates.mjs writes (./plates.generated.ts).
 *
 * Throws for a piece with no file rather than render it without its drawing.
 * That cannot happen in a deployed build, where prebuild regenerates the
 * manifest and the files from the same registry the build compiles; it can
 * in development, straight after a piece is registered or redrawn, and there
 * it should stop the page and say what to run.
 */
export function servedSrc(uid: string): string {
  const src = PLATE_SRC[uid]
  if (!src)
    throw new Error(
      `No served file for the linocut piece "${uid}". Run: node scripts/generate-comic-plates.mjs`,
    )
  return src
}

export function servedPanel(slug: string, panel: ComicPanel): PanelDescriptor {
  return describePanel(slug, panel, servedSrc(pieceUid(slug, panel.moment)))
}

export function servedPortrait(slug: string, portrait: Portrait): PortraitDescriptor {
  return describePortrait(slug, portrait, servedSrc(pieceUid(slug, portrait.name)))
}
