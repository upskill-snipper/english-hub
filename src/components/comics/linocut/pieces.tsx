import { describePanel, describePortrait } from '@/lib/comics/descriptors'
import type { ComicPanel, Portrait } from '@/lib/comics/types'

import { PanelFrame } from './frames'
import { PlateBox } from './lazy-plate'
import { PortraitCard, type PortraitCardLabels } from './portrait-card'

/**
 * A registered piece exactly as a student's browser ends up showing it: the
 * frame the page builds from the piece's descriptor, with its served plate
 * file inlined where the LazyPlate was. The preview script and the comics
 * tests render through these two, with the file src/lib/comics/plate-file.tsx
 * renders, so a preview is what a student sees.
 *
 * The site itself never renders these. Until 26 September 2026 it did, on the
 * server, with the drawing inside, and every drawing of a text rode in every
 * page that showed it; the site now hands the browser descriptors and the
 * browser fetches each plate (see story-visuals.tsx). `plate` is the served
 * file: its path and its text.
 */

type Served = { src: string; svg: string }

export function RegisteredPanel({
  slug,
  panel,
  plate,
}: {
  slug: string
  panel: ComicPanel
  plate: Served
}) {
  const piece = describePanel(slug, panel, plate.src)
  return (
    <PanelFrame piece={piece}>
      <PlateBox plate={piece} svg={plate.svg} />
    </PanelFrame>
  )
}

export function RegisteredPortrait({
  slug,
  portrait,
  labels,
  headingLevel,
  plate,
}: {
  slug: string
  portrait: Portrait
  labels: PortraitCardLabels
  headingLevel?: 'h2' | 'h3' | 'h4'
  plate: Served
}) {
  const piece = describePortrait(slug, portrait, plate.src)
  return (
    <PortraitCard piece={piece} labels={labels} headingLevel={headingLevel}>
      <PlateBox plate={piece} svg={plate.svg} />
    </PortraitCard>
  )
}
