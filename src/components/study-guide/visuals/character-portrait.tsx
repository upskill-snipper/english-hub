'use client'

import { LazyPlate } from '@/components/comics/linocut/lazy-plate'
import { PlayOnView } from '@/components/comics/linocut/play-on-view'
import { PortraitCard, type PortraitCardLabels } from '@/components/comics/linocut/portrait-card'
import type { PortraitDescriptor } from '@/lib/comics/types'

/**
 * One card in "Characters as described": the portrait card built from its
 * descriptor, with a LazyPlate that fetches the drawing and its numbered
 * markers when the card nears the screen, and PlayOnView to start the motion
 * when it arrives.
 *
 * A client component given plain data, so the server hands the browser the
 * card's words and the plate's URL, and never the drawing. Why that matters:
 * see characters-as-described.tsx.
 */
export function CharacterPortrait({
  piece,
  labels,
  headingLevel,
}: {
  piece: PortraitDescriptor
  labels: PortraitCardLabels
  headingLevel?: 'h2' | 'h3' | 'h4'
}) {
  return (
    <PlayOnView>
      <PortraitCard piece={piece} labels={labels} headingLevel={headingLevel}>
        <LazyPlate plate={piece} />
      </PortraitCard>
    </PlayOnView>
  )
}
