'use client'

import Link from 'next/link'
import { EnglishText } from '@/components/i18n/EnglishText'
import { ArrowLeft, BookOpen } from 'lucide-react'
import { InteractiveTextViewer, type TextData } from '@/components/study/InteractiveTextViewer'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
import { useT } from '@/lib/i18n/use-t'
import { textGuideHref } from '@/lib/revision/guide-href'
import { TEXT_ANNOTATIONS } from '@/data/text-annotations.generated'

/**
 * A complete public-domain text, with the guide it belongs to one click away.
 *
 * WHY ONE COMPONENT AND NOT TWELVE PAGES. Twelve plays were added at once. Each
 * route is a four-line file that hands this its own data, so the reading
 * experience, the breadcrumb and the way back to the study guide are identical
 * on all of them and cannot drift apart one play at a time - which is how
 * twelve mark-scheme links went silently inert earlier in this backlog.
 *
 * WHAT IT DELIBERATELY DOES NOT SHOW. The viewer has panels for characters,
 * themes and context. These twelve plays carry none, and the panels are not
 * offered rather than opened empty. The text is real - copied from a published
 * edition, never reproduced from memory - and the analysis is not written yet.
 * Filling those panels to make the page look complete is the one thing this
 * whole exercise exists to avoid.
 *
 * WHAT IT NOW DOES SHOW, and the distinction is the same one. Reported from the
 * live site twice. First: the reader offered five annotation overlays and
 * highlighted nothing on every text. Then, after the first fix: it highlighted
 * key quotations only - on A Christmas Carol, seven spans and 136 words of a
 * 28,862-word novella, with Language, Themes, Characters and Context still
 * controls for an empty set.
 *
 * None of that analysis was missing. It had been written, by a person, in each
 * text's guide: `themes[]`, `characters[]` and `historicalContext[]` all quote
 * the text while discussing it, and the key-quotes pages carry explicit theme
 * tags and technique analysis per quotation.
 * `scripts/generate-text-annotations.mjs` connects them to the line they are
 * about and does nothing else - it locates each authored quotation in our own
 * edition and records the exact span. A quotation it cannot locate is left out
 * rather than approximated, so an overlay still shows only what somebody
 * actually wrote, and twelve texts with no guide still show nothing.
 */
export function FullTextReader({
  data,
  slug,
  year,
}: {
  data: TextData
  /** The set-text slug, so the page can link back to that text's guide. */
  slug: string
  /** First performance or publication, where it is uncontested. */
  year?: string
}) {
  const t = useT()
  const guideHref = textGuideHref(slug)

  // Merge the located quotations into the sections the viewer renders. The
  // generated map is keyed by slug then section id, so a text with none is
  // untouched and its overlays stay closed.
  const located = TEXT_ANNOTATIONS[slug]
  const annotated: TextData = located
    ? {
        ...data,
        sections: data.sections.map((section) =>
          located[section.id]?.length
            ? { ...section, annotations: [...(section.annotations ?? []), ...located[section.id]] }
            : section,
        ),
      }
    : data

  return (
    <div className="mx-auto max-w-5xl px-4 pb-16 pt-8 sm:px-6">
      <BreadcrumbJsonLd
        items={[
          { name: 'Set texts', url: 'https://theenglishhub.app/revision/texts' },
          { name: data.title, url: `https://theenglishhub.app${guideHref}` },
          { name: t('fulltext.crumb'), url: `https://theenglishhub.app${guideHref}/read` },
        ]}
      />

      <Link
        href={guideHref}
        className="mb-4 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft aria-hidden="true" className="size-3.5" />
        {t('fulltext.back_to_guide')}
      </Link>

      {/* The title and the author are the work's, in every locale. */}
      <EnglishText as="h1" className="font-heading text-display-sm text-foreground sm:text-display">
        {data.title}
      </EnglishText>
      <EnglishText as="p" className="mt-2 text-body-lg text-muted-foreground">
        {data.author}
        {year ? ` (${year})` : null}
      </EnglishText>

      {/* The rights position, stated plainly. A student who has met American
          revision sites hosting texts we cannot should be able to see why this
          one is here. */}
      <p className="mt-4 flex items-start gap-2 text-body-sm text-muted-foreground">
        <BookOpen aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
        <span>{t('fulltext.public_domain')}</span>
      </p>

      <div className="mt-8">
        <InteractiveTextViewer
          data={annotated}
          storageKey={slug}
          /* This component already renders the page heading above, with the
           same text. Without this the 26 pages using FullTextReader served
           two h1s saying the same thing. */
          titleAs="h2"
        />
      </div>
    </div>
  )
}
