import { ScanFace } from 'lucide-react'

import { RegisteredPortrait } from '@/components/comics/linocut/pieces'
import { PlayOnView } from '@/components/comics/linocut/play-on-view'
import { loadComics } from '@/lib/comics/load'
import { t } from '@/lib/i18n/t'
import type { StudyGuide } from '@/lib/study-guides/types'

/**
 * "Characters as described": a linocut portrait of each character the text
 * describes, with numbered markers on the features and, beside it, the words
 * the markers point to. For a student who learns by seeing, the description
 * becomes a face; for one revising quotations, the face is a way to hold the
 * words.
 *
 * A server component. The portraits come from src/data/comics/<slug>/ and are
 * rendered here; PlayOnView, the one client piece, only adds the class that
 * starts their motion when they scroll into view. Renders nothing for a text
 * with no portraits yet, so GuideSupplement can mount it for every text.
 */
export async function CharactersAsDescribed({
  guide,
  headingLevel = 'h2',
}: {
  guide: StudyGuide
  headingLevel?: 'h2' | 'h3'
}) {
  const comics = await loadComics(guide.slug)
  if (!comics || comics.portraits.length === 0) return null

  const [heading, intro, markers] = await Promise.all([
    t('study_guide.comics.gallery_heading'),
    t('study_guide.comics.gallery_intro'),
    t('study_guide.comics.markers_label'),
  ])
  const Heading = headingLevel
  const id = `guide-${guide.slug}-characters-as-described`
  const several = comics.portraits.length > 1

  return (
    <section aria-labelledby={id}>
      <div className="mb-5 flex items-center gap-3">
        <ScanFace className="size-5 text-primary" aria-hidden="true" />
        <div>
          <Heading id={id} className="font-heading text-heading-lg text-foreground">
            {heading}
          </Heading>
          <p className="text-body-sm text-muted-foreground">{intro}</p>
        </div>
      </div>
      <div className={several ? 'grid gap-6 lg:grid-cols-2' : undefined}>
        {comics.portraits.map((portrait) => (
          <PlayOnView key={portrait.name}>
            <RegisteredPortrait
              slug={guide.slug}
              portrait={portrait}
              labels={{ markers }}
              headingLevel={headingLevel === 'h2' ? 'h3' : 'h4'}
            />
          </PlayOnView>
        ))}
      </div>
    </section>
  )
}
