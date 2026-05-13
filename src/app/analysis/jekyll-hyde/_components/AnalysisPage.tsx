import { headers } from 'next/headers'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, BookOpen, GraduationCap, PenLine } from 'lucide-react'
import { t } from '@/lib/i18n/t'

/* ── Shared building block for Jekyll and Hyde analysis sub-pages ─────
 *
 * Server component. Chrome strings (breadcrumb labels, byline, "Ready
 * to revise", CTAs, related-analyses heading) route through
 * `analysis.subpage.*` for Khaleeji AR. Literary body content stays
 * in source language — children pass through untouched.
 * ───────────────────────────────────────────────────────────────────── */

type Related = {
  title: string
  href: string
}

export type AnalysisPageProps = {
  slug: string
  h1: string
  intro: string
  headline: string
  schemaDescription: string
  datePublished?: string
  dateModified?: string
  children: React.ReactNode
  related: Related[]
}

const SITE = 'https://theenglishhub.app'
const AUTHOR = 'The English Hub GCSE Markers'

export async function ArticleJsonLd({
  slug,
  headline,
  description,
  datePublished = '2026-04-10',
  dateModified = '2026-04-10',
}: {
  slug: string
  headline: string
  description: string
  datePublished?: string
  dateModified?: string
}) {
  const nonce = (await headers()).get('x-nonce') ?? undefined
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    author: {
      '@type': 'Organization',
      name: AUTHOR,
      url: `${SITE}/about`,
    },
    publisher: {
      '@type': 'Organization',
      name: 'The English Hub',
      url: SITE,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE}/icon.svg`,
      },
    },
    datePublished,
    dateModified,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE}/analysis/jekyll-hyde/${slug}`,
    },
    inLanguage: 'en-GB',
    isPartOf: {
      '@type': 'WebSite',
      name: 'The English Hub',
      url: SITE,
    },
    about: {
      '@type': 'Book',
      name: 'Strange Case of Dr Jekyll and Mr Hyde',
      author: {
        '@type': 'Person',
        name: 'Robert Louis Stevenson',
      },
      datePublished: '1886',
    },
  }

  return (
    <script
      type="application/ld+json"
      nonce={nonce}
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export function Quote({
  text,
  speaker,
  chapter,
}: {
  text: string
  speaker?: string
  chapter?: string
}) {
  return (
    <blockquote className="my-4 rounded-lg border-l-4 border-violet-400 bg-violet-500/5 p-4">
      <p className="text-base italic text-foreground">&ldquo;{text}&rdquo;</p>
      {(speaker || chapter) && (
        <footer className="mt-2 text-xs text-muted-foreground">
          {speaker && <span className="font-medium">{speaker}</span>}
          {speaker && chapter && <span> &middot; </span>}
          {chapter && <span>{chapter}</span>}
        </footer>
      )}
    </blockquote>
  )
}

export async function AnalysisPage({
  slug,
  h1,
  intro,
  headline,
  schemaDescription,
  datePublished,
  dateModified,
  children,
  related,
}: AnalysisPageProps) {
  // Chrome translations — async server component handles them inline.
  const homeLabel = await t('analysis.subpage.home_breadcrumb')
  const hubLink = await t('analysis.subpage.jekyll_hub_link')
  const allLink = await t('analysis.subpage.jekyll_all_link')
  const chip = await t('analysis.subpage.jekyll_chip')
  const gcseChip = await t('analysis.subpage.cat_chip_gcse')
  const bylinePrefix = await t('analysis.byline.written_by')
  const bylineMarkers = await t('analysis.byline.markers_short')
  const bylineAt = await t('analysis.byline.at_brand')
  const readyH2 = await t('analysis.subpage.ready_to_revise_h2')
  const readyBody = await t('analysis.subpage.jekyll_blurb')
  const fullCta = await t('analysis.subpage.cta_full_revision')
  const notesCta = await t('analysis.subpage.cta_revision_notes')
  const relatedH2 = await t('analysis.subpage.related_h2')

  return (
    <article className="mx-auto max-w-3xl px-4 pb-16 pt-8 sm:px-6">
      <ArticleJsonLd
        slug={slug}
        headline={headline}
        description={schemaDescription}
        datePublished={datePublished}
        dateModified={dateModified}
      />

      {/* Breadcrumbs */}
      <nav className="mb-6 text-xs text-muted-foreground" aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-1">
          <li>
            <Link href="/" className="hover:text-foreground">
              {homeLabel}
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link href="/analysis/jekyll-hyde" className="hover:text-foreground">
              {hubLink}
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-foreground">{h1}</li>
        </ol>
      </nav>

      <Link
        href="/analysis/jekyll-hyde"
        className="mb-4 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="size-3.5" />
        {allLink}
      </Link>

      <header className="mb-8 border-b border-border pb-6">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-violet-500/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-violet-700 dark:text-violet-300">
            {chip}
          </span>
          <span className="rounded-full bg-primary/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-primary">
            {gcseChip}
          </span>
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{h1}</h1>
        <p className="mt-3 text-lg text-muted-foreground">{intro}</p>

        {/* Author byline */}
        <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
          <GraduationCap className="size-4 text-primary" aria-hidden="true" />
          <span>
            {bylinePrefix} <strong className="text-foreground">{bylineMarkers}</strong> {bylineAt}
          </span>
        </div>
      </header>

      {/* Body */}
      <div className="prose prose-sm prose-invert max-w-none space-y-5 text-[15px] leading-relaxed text-foreground/90 [&_h2]:mb-3 [&_h2]:mt-8 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-foreground [&_h3]:mb-2 [&_h3]:mt-6 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-foreground [&_li]:my-1 [&_p]:my-3 [&_strong]:text-foreground [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-5">
        {children}
      </div>

      {/* CTA */}
      <aside className="mt-12 rounded-2xl border border-border bg-gradient-to-br from-card to-violet-500/5 p-6 sm:p-8">
        <div className="flex items-start gap-3">
          <PenLine className="mt-1 size-5 shrink-0 text-violet-400" aria-hidden="true" />
          <div className="flex-1">
            <h2 className="text-lg font-bold text-foreground">{readyH2}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{readyBody}</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="/revision/texts/jekyll-and-hyde"
                className="inline-flex items-center gap-1.5 rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
              >
                {fullCta}
                <ArrowRight className="size-3.5" />
              </Link>
              <Link
                href="/resources/revision-notes/jekyll-and-hyde"
                className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
              >
                <BookOpen className="size-3.5" />
                {notesCta}
              </Link>
            </div>
          </div>
        </div>
      </aside>

      {/* Related */}
      {related.length > 0 && (
        <section className="mt-10">
          <h2 className="mb-4 text-xl font-bold text-foreground">{relatedH2}</h2>
          <ul className="grid gap-3 sm:grid-cols-2">
            {related.map((r) => (
              <li key={r.href}>
                <Link
                  href={r.href}
                  className="group flex items-center justify-between gap-2 rounded-xl border border-border bg-card px-4 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:bg-muted"
                >
                  <span>{r.title}</span>
                  <ArrowRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </article>
  )
}
