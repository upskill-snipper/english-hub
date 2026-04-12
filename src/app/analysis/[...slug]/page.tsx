import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ANALYSIS_PAGE_MAP, ANALYSIS_PAGES } from '@/data/analysis'

// ---------------------------------------------------------------------------
// ISR: pages are generated on first request and cached for 24 hours.
// This avoids the Vercel build OOM that 210 statically-generated pages caused.
// ---------------------------------------------------------------------------
export const revalidate = 86400

// ---------------------------------------------------------------------------
// Do NOT pre-render any sub-pages at build time — they are generated on-demand.
// The 8 hub pages are separate static routes and are unaffected.
// ---------------------------------------------------------------------------
export function generateStaticParams() {
  return []
}

// ---------------------------------------------------------------------------
// Human-readable category labels for breadcrumbs
// ---------------------------------------------------------------------------
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

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------
interface Props {
  params: { slug: string[] }
}

export function generateMetadata({ params }: Props): Metadata {
  const key = params.slug.join('/')
  const entry = ANALYSIS_PAGE_MAP.get(key)

  if (!entry) {
    return { title: 'Page Not Found | The English Hub' }
  }

  return {
    title: entry.title,
    description: entry.description,
    alternates: {
      canonical: `https://theenglishhub.app/analysis/${key}`,
    },
    openGraph: {
      title: entry.title,
      description: entry.description,
    },
  }
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------
export default function AnalysisPage({ params }: Props) {
  const key = params.slug.join('/')
  const entry = ANALYSIS_PAGE_MAP.get(key)

  if (!entry) {
    notFound()
  }

  const category = entry.category
  const categoryLabel = CATEGORY_LABELS[category] ?? category

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: entry.title.replace(/ \| .+$/, ''),
    author: { '@type': 'Organization', name: 'The English Hub — GCSE Examiners' },
    publisher: { '@type': 'Organization', name: 'The English Hub' },
    description: entry.description,
    mainEntityOfPage: `https://theenglishhub.app/analysis/${key}`,
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb */}
      <nav className="mb-4 text-sm text-muted-foreground">
        <Link href={`/analysis/${category}`} className="hover:text-foreground">
          {categoryLabel} Analysis
        </Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">
          {entry.title.replace(/ \| .+$/, '')}
        </span>
      </nav>

      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {entry.title.replace(/ \| .+$/, '')}
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">Written by GCSE examiners</p>

      <article className="mt-8 space-y-5 text-muted-foreground leading-relaxed">
        <p>{entry.description}</p>

        <div className="mt-8 rounded-lg border border-border bg-muted/30 p-6 text-center">
          <p className="text-base font-medium text-foreground">
            Full analysis content is being migrated to our new platform.
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            This page will be fully restored shortly. In the meantime, explore
            the {categoryLabel} hub for more analysis.
          </p>
          <Link
            href={`/analysis/${category}`}
            className="mt-4 inline-block rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Browse {categoryLabel} Analysis
          </Link>
        </div>
      </article>
    </main>
  )
}
