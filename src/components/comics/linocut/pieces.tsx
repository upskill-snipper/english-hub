import type { ComicPanel, Portrait } from '@/lib/comics/types'
import { pieceUid } from '@/lib/comics/uid'

import { PanelFrame } from './frames'
import { PortraitCard, type PortraitCardLabels } from './portrait-card'

/**
 * A registered piece, framed. The site and the preview script both render
 * through these two, so a preview shows exactly what a student will see.
 */

export function RegisteredPanel({ slug, panel }: { slug: string; panel: ComicPanel }) {
  return (
    <PanelFrame
      uid={pieceUid(slug, panel.moment)}
      art={panel.art}
      alt={panel.alt}
      quote={panel.quote}
      quoteAt={panel.quoteAt}
      caption={panel.caption}
      captionAt={panel.captionAt}
    />
  )
}

export function RegisteredPortrait({
  slug,
  portrait,
  labels,
  headingLevel,
}: {
  slug: string
  portrait: Portrait
  labels: PortraitCardLabels
  headingLevel?: 'h2' | 'h3' | 'h4'
}) {
  return (
    <PortraitCard
      uid={pieceUid(slug, portrait.name)}
      portrait={portrait}
      labels={labels}
      headingLevel={headingLevel}
    />
  )
}
