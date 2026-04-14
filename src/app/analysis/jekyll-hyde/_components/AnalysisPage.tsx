import Link from 'next/link'
import { ArrowLeft, ArrowRight, BookOpen, GraduationCap, PenLine } from 'lucide-react'

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

export function ArticleJsonLd({
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

export function AnalysisPage({
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
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link href="/analysis/jekyll-hyde" className="hover:text-foreground">
              Jekyll &amp; Hyde Analysis
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
        All Jekyll &amp; Hyde analyses
      </Link>

      <header className="mb-8 border-b border-border pb-6">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-violet-500/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-violet-700 dark:text-violet-300">
            Jekyll &amp; Hyde
          </span>
          <span className="rounded-full bg-primary/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-primary">
            GCSE Analysis
          </span>
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{h1}</h1>
        <p className="mt-3 text-lg text-muted-foreground">{intro}</p>

        {/* Author byline */}
        <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
          <GraduationCap className="size-4 text-primary" aria-hidden="true" />
          <span>
            Written by <strong className="text-foreground">GCSE markers</strong> at The English
            Hub
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
            <h2 className="text-lg font-bold text-foreground">
              Ready to revise the whole novella?
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Get the complete Jekyll and Hyde study guide — chapter summaries, every key
              quotation, every theme, and exam-ready essay plans for AQA, Edexcel and OCR.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="/revision/texts/jekyll-and-hyde"
                className="inline-flex items-center gap-1.5 rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
              >
                Full revision guide
                <ArrowRight className="size-3.5" />
              </Link>
              <Link
                href="/resources/revision-notes/jekyll-and-hyde"
                className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
              >
                <BookOpen className="size-3.5" />
                Revision notes
              </Link>
            </div>
          </div>
        </div>
      </aside>

      {/* Related */}
      {related.length > 0 && (
        <section className="mt-10">
          <h2 className="mb-4 text-xl font-bold text-foreground">Related analyses</h2>
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
