import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ANALYSIS_PAGE_MAP, ANALYSIS_PAGES, type AnalysisPageEntry } from '@/data/analysis'
import { getCategoryContext } from '@/data/analysis/category-context'
import { buildAnalysisJsonLdPayloads } from '@/lib/seo/json-ld-hashes'
import { t } from '@/lib/i18n/t'

// ---------------------------------------------------------------------------
// ISR: pages are generated on first request and cached for 24 hours.
// ---------------------------------------------------------------------------
export const revalidate = 86400
export const dynamic = 'force-static'
export const dynamicParams = true

interface Props {
  params: Promise<{ slug: string[] }>
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params
  const key = params.slug.join('/')
  const entry = ANALYSIS_PAGE_MAP.get(key)

  if (!entry) {
    return { title: 'Page Not Found' }
  }

  const canonical = `https://theenglishhub.app/analysis/${key}`

  return {
    title: entry.title,
    description: entry.description,
    alternates: { canonical },
    openGraph: {
      title: entry.title,
      description: entry.description,
      url: canonical,
      type: 'article',
      siteName: 'The English Hub',
    },
    twitter: {
      card: 'summary_large_image',
      title: entry.title,
      description: entry.description,
    },
  }
}

const CATEGORY_LABELS: Record<string, string> = {
  macbeth: 'Macbeth',
  'inspector-calls': 'An Inspector Calls',
  'christmas-carol': 'A Christmas Carol',
  'jekyll-hyde': 'Jekyll and Hyde',
  'aqa-love-relationships': 'AQA Love & Relationships',
  'aqa-power-conflict': 'AQA Power & Conflict',
  'language-paper': 'Language Paper',
  revision: 'Revision',
}

function cleanTitle(title: string): string {
  return title.replace(/ \| .+$/, '')
}

function relatedEntries(category: string, currentKey: string): AnalysisPageEntry[] {
  return ANALYSIS_PAGES.filter(
    (e) => e.category === category && e.slug.join('/') !== currentKey,
  ).slice(0, 6)
}

function capitalise(str: string): string {
  return str
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')
}

export default async function AnalysisPage(props: Props) {
  const params = await props.params
  const key = params.slug.join('/')
  const entry = ANALYSIS_PAGE_MAP.get(key)

  if (!entry) {
    notFound()
  }

  const category = entry.category
  const categoryLabel = CATEGORY_LABELS[category] ?? capitalise(category)
  const pageTitle = cleanTitle(entry.title)
  const ctx = getCategoryContext(category)
  const related = relatedEntries(category, key)
  const pageSlug = entry.slug[1]
  const pageTopic = capitalise(pageSlug)

  const { articleJsonLd, breadcrumbJsonLd, faqJsonLd } = buildAnalysisJsonLdPayloads(entry, ctx)

  // Chrome translation. Body content (entry.description, ctx.about,
  // ctx.keyQuotes, ctx.faqs, examTips) stays in source language —
  // literary/exam-board content per task scope.
  const tBreadAnalysis = await t('analysis.breadcrumb.analysis')
  const tByline = await t('analysis.slug.byline_prefix')
  const tCoversAll = await t('analysis.slug.covers_all_boards')
  const tWhatNeed = await t('analysis.slug.what_you_need')
  const tAbout = await t('analysis.slug.about')
  const tAssessed = await t('analysis.slug.how_assessed')
  const tMarks = await t('analysis.slug.marks_label')
  const tRecommended = await t('analysis.slug.recommended_label')
  const tKeyQuotes = await t('analysis.slug.key_quotes_h2')
  const tExamTipsFor = await t('analysis.slug.exam_tips_for')
  const tGrade9H2 = await t('analysis.slug.grade9_h2')
  const tApplyingTo = await t('analysis.slug.applying_to')
  const tApplyingBody = await t('analysis.slug.applying_body')
  const tCtaBlock = await t('analysis.slug.cta_block_prompt')
  const tGetFeedback = await t('analysis.slug.cta_get_feedback')
  const tSeePricing = await t('analysis.slug.cta_see_pricing')
  const tFaqs = await t('analysis.slug.faqs_h2')
  const tRelated = await t('analysis.slug.related_prefix')
  const tBackToAll = await t('analysis.slug.back_to_all')

  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      <nav className="mb-4 text-sm text-muted-foreground" aria-label="Breadcrumb">
        <Link href="/analysis" className="hover:text-foreground">
          {tBreadAnalysis}
        </Link>
        <span className="mx-2">/</span>
        <Link href={`/analysis/${category}`} className="hover:text-foreground">
          {categoryLabel}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">{pageTitle}</span>
      </nav>

      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{pageTitle}</h1>
      <p className="mt-3 text-sm text-muted-foreground">
        {tByline} &middot; {ctx?.boards?.join(', ') ?? tCoversAll}
      </p>

      <article className="mt-10 space-y-10 text-muted-foreground leading-relaxed">
        <section>
          <p className="text-lg text-foreground">{entry.description}</p>
        </section>

        {ctx && (
          <section className="rounded-lg border border-border bg-muted/30 p-6">
            <h2 className="text-xl font-semibold text-foreground">
              {tWhatNeed} {ctx.label}
            </h2>
            <p className="mt-3">{ctx.overview}</p>
          </section>
        )}

        {ctx?.about?.length && (
          <section>
            <h2 className="text-xl font-semibold text-foreground">
              {tAbout} {ctx.label}
            </h2>
            <div className="mt-4 space-y-4">
              {ctx.about.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </section>
        )}

        {ctx?.assessmentContext?.length ? (
          <section>
            <h2 className="text-xl font-semibold text-foreground">{tAssessed}</h2>
            <div className="mt-4 space-y-6">
              {ctx.assessmentContext.map((ac, i) => (
                <div key={i} className="rounded-lg border border-border p-5">
                  <h3 className="font-medium text-foreground">{ac.board}</h3>
                  <p className="mt-1 text-sm">
                    {ac.paper} &middot; {ac.section}
                  </p>
                  <p className="mt-1 text-sm">
                    <strong className="text-foreground">
                      {ac.marks} {tMarks}
                    </strong>{' '}
                    &middot; {ac.timeGuide} {tRecommended}
                  </p>
                  <ul className="mt-3 space-y-1 text-sm">
                    {ac.aoWeighting.map((ao, j) => (
                      <li key={j}>
                        <strong className="text-foreground">{ao.ao}</strong> ({ao.weight}) —{' '}
                        {ao.description}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {ctx?.keyQuotes?.length ? (
          <section>
            <h2 className="text-xl font-semibold text-foreground">{tKeyQuotes}</h2>
            <div className="mt-4 space-y-5">
              {ctx.keyQuotes.map((q, i) => (
                <blockquote key={i} className="border-l-2 border-primary/50 pl-4">
                  <p className="font-medium text-foreground">{q.quote}</p>
                  <p className="mt-1 text-sm italic">{q.source}</p>
                  <p className="mt-2 text-sm">{q.analysis}</p>
                </blockquote>
              ))}
            </div>
          </section>
        ) : null}

        {ctx?.examTips?.length ? (
          <section>
            <h2 className="text-xl font-semibold text-foreground">
              {tExamTipsFor} {ctx.label}
            </h2>
            <ol className="mt-4 list-decimal space-y-2 pl-6">
              {ctx.examTips.map((tip, i) => (
                <li key={i}>{tip}</li>
              ))}
            </ol>
          </section>
        ) : null}

        {ctx?.grade9Indicators?.length ? (
          <section>
            <h2 className="text-xl font-semibold text-foreground">{tGrade9H2}</h2>
            <ul className="mt-4 list-disc space-y-2 pl-6">
              {ctx.grade9Indicators.map((g, i) => (
                <li key={i}>{g}</li>
              ))}
            </ul>
          </section>
        ) : null}

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            {tApplyingTo} {pageTopic}
          </h2>
          <p className="mt-4">
            {entry.description} {tApplyingBody}
          </p>
          <p className="mt-4">
            <strong className="text-foreground">{tCtaBlock}</strong>
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/marking"
              className="inline-block rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            >
              {tGetFeedback}
            </Link>
            <Link
              href="/pricing"
              className="inline-block rounded-md border border-border px-4 py-2 text-sm font-medium hover:bg-muted"
            >
              {tSeePricing}
            </Link>
          </div>
        </section>

        {ctx?.faqs?.length ? (
          <section>
            <h2 className="text-xl font-semibold text-foreground">{tFaqs}</h2>
            <div className="mt-4 space-y-4">
              {ctx.faqs.map((f, i) => (
                <div key={i}>
                  <h3 className="font-medium text-foreground">{f.question}</h3>
                  <p className="mt-1">{f.answer}</p>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {related.length > 0 && (
          <section>
            <h2 className="text-xl font-semibold text-foreground">
              {tRelated} {categoryLabel}
            </h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {related.map((r) => (
                <li key={r.slug.join('/')}>
                  <Link
                    href={`/analysis/${r.slug.join('/')}`}
                    className="block rounded-md border border-border p-4 hover:bg-muted"
                  >
                    <p className="font-medium text-foreground">{cleanTitle(r.title)}</p>
                    <p className="mt-1 text-sm">{r.description}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="border-t border-border pt-8">
          <Link href={`/analysis/${category}`} className="text-sm underline hover:no-underline">
            &larr; {tBackToAll} {categoryLabel}
          </Link>
        </section>
      </article>
    </main>
  )
}
