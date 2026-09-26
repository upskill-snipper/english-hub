import { ScanFace } from 'lucide-react'

import { LinocutStyles } from '@/components/comics/linocut/styles'
import { loadComics } from '@/lib/comics/load'
import { servedPortrait } from '@/lib/comics/served'
import { t } from '@/lib/i18n/t'
import type { StudyGuide } from '@/lib/study-guides/types'

import { CharacterPortrait } from './character-portrait'

/**
 * "Characters as described": a linocut portrait of each character the text
 * describes, with numbered markers on the features and, beside it, the words
 * the markers point to. For a student who learns by seeing, the description
 * becomes a face; for one revising quotations, the face is a way to hold the
 * words.
 *
 * A server component that hands each card a descriptor (src/lib/comics/
 * descriptors.ts): the character's name, the words, and the URL, size and alt
 * text of the portrait's plate file. CharacterPortrait renders the card and
 * fetches the plate when the card nears the screen. Renders nothing for a text
 * with no portraits yet, so GuideSupplement can mount it for every text.
 *
 * WHAT BROKE, AND WHY (26 September 2026). The portraits used to be rendered
 * here in full and passed to PlayOnView as children. Children a server
 * component hands a client component are serialised into the RSC payload as
 * well as the HTML, so every portrait was on the page twice, whether or not
 * the student scrolled to it: all ten of A Christmas Carol's portraits, 23 to
 * 78 KB of markup each, were in its HTML and again in its payload. Now the
 * page carries a few kilobytes per portrait, and
 * src/__tests__/comics-delivery.test.ts fails if a drawing is ever handed to
 * the client again.
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
  const labels = { markers }

  return (
    <section aria-labelledby={id}>
      {/* The cards' stylesheet, hoisted into <head> once. The cards are
          rendered by the client and do not carry it (see styles.tsx). */}
      <LinocutStyles />
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
          <CharacterPortrait
            key={portrait.name}
            piece={servedPortrait(guide.slug, portrait)}
            labels={labels}
            headingLevel={headingLevel === 'h2' ? 'h3' : 'h4'}
          />
        ))}
      </div>
    </section>
  )
}
