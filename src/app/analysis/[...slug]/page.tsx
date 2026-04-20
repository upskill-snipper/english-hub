import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ANALYSIS_PAGE_MAP, ANALYSIS_PAGES, type AnalysisPageEntry } from '@/data/analysis'
import { getCategoryContext } from '@/data/analysis/category-context'
import { buildAnalysisJsonLdPayloads } from '@/lib/seo/json-ld-hashes'

// ---------------------------------------------------------------------------
// ISR: pages are generated on first request and cached for 24 hours.
// Avoids the Vercel build OOM that 210 statically-generated pages caused.
//
// We intentionally do NOT export generateStaticParams here. In Next.js 14,
// combining `generateStaticParams() { return [] }` with dynamic ISR causes
// a runtime "Page changed from static to dynamic" 500 on first render. By
// omitting it entirely, Next.js treats this as a dynamic route with ISR,
// which is what we want: generated on-demand, cached 24 h, no build-time
// pre-render of the 201 slugs.
// ---------------------------------------------------------------------------
export const revalidate = 86400
export const dynamic = 'force-static'
export const dynamicParams = true

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

// ---------------------------------------------------------------------------
// Helpers
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
  const categoryLabel = CATEGORY_LABELS[category] ?? capitalise(category)
  const pageTitle = cleanTitle(entry.title)
  const ctx = getCategoryContext(category)
  const related = relatedEntries(category, key)
  const pageSlug = entry.slug[1]
  const pageTopic = capitalise(pageSlug)

  // ---- Structured data ---------------------------------------------------
  // Constructed via the shared builder so the CSP hash helper in
  // src/lib/seo/json-ld-hashes.ts hashes the exact same bytes that render
  // here. Any divergence would break the `'sha256-...'` CSP match for
  // modern browsers that ignore `'unsafe-inline'` under `'strict-dynamic'`.
  const { articleJsonLd, breadcrumbJsonLd, faqJsonLd } = buildAnalysisJsonLdPayloads(entry, ctx)

  // ---- Render ------------------------------------------------------------
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

      {/* Breadcrumb */}
      <nav className="mb-4 text-sm text-muted-foreground" aria-label="Breadcrumb">
        <Link href="/analysis" className="hover:text-foreground">
          Analysis
        </Link>
        <span className="mx-2">/</span>
        <Link href={`/analysis/${category}`} className="hover:text-foreground">
          {categoryLabel}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">{pageTitle}</span>
      </nav>

      {/* Title */}
      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{pageTitle}</h1>
      <p className="mt-3 text-sm text-muted-foreground">
        Written by GCSE markers &middot; Covers {ctx?.boards?.join(', ') ?? 'all UK exam boards'}
      </p>

      <article className="mt-10 space-y-10 text-muted-foreground leading-relaxed">
        {/* Intro — uses the entry description as the opening paragraph */}
        <section>
          <p className="text-lg text-foreground">{entry.description}</p>
        </section>

        {/* Quick orientation */}
        {ctx && (
          <section className="rounded-lg border border-border bg-muted/30 p-6">
            <h2 className="text-xl font-semibold text-foreground">
              What you need to know about {ctx.label}
            </h2>
            <p className="mt-3">{ctx.overview}</p>
          </section>
        )}

        {/* About the text / anthology */}
        {ctx?.about?.length && (
          <section>
            <h2 className="text-xl font-semibold text-foreground">About {ctx.label}</h2>
            <div className="mt-4 space-y-4">
              {ctx.about.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </section>
        )}

        {/* Assessment context */}
        {ctx?.assessmentContext?.length ? (
          <section>
            <h2 className="text-xl font-semibold text-foreground">How this is assessed</h2>
            <div className="mt-4 space-y-6">
              {ctx.assessmentContext.map((ac, i) => (
                <div key={i} className="rounded-lg border border-border p-5">
                  <h3 className="font-medium text-foreground">{ac.board}</h3>
                  <p className="mt-1 text-sm">
                    {ac.paper} &middot; {ac.section}
                  </p>
                  <p className="mt-1 text-sm">
                    <strong className="text-foreground">{ac.marks} marks</strong> &middot;{' '}
                    {ac.timeGuide} recommended
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

        {/* Key quotes */}
        {ctx?.keyQuotes?.length ? (
          <section>
            <h2 className="text-xl font-semibold text-foreground">Key quotes and analysis</h2>
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

        {/* Exam tips */}
        {ctx?.examTips?.length ? (
          <section>
            <h2 className="text-xl font-semibold text-foreground">Exam tips for {ctx.label}</h2>
            <ol className="mt-4 list-decimal space-y-2 pl-6">
              {ctx.examTips.map((tip, i) => (
                <li key={i}>{tip}</li>
              ))}
            </ol>
          </section>
        ) : null}

        {/* Grade 9 indicators */}
        {ctx?.grade9Indicators?.length ? (
          <section>
            <h2 className="text-xl font-semibold text-foreground">What makes a Grade 9 answer</h2>
            <ul className="mt-4 list-disc space-y-2 pl-6">
              {ctx.grade9Indicators.map((g, i) => (
                <li key={i}>{g}</li>
              ))}
            </ul>
          </section>
        ) : null}

        {/* Topic-specific section — generated from slug */}
        <section>
          <h2 className="text-xl font-semibold text-foreground">Applying this to {pageTopic}</h2>
          <p className="mt-4">
            {entry.description} Use the context, quotes, and exam tips above to structure your
            answer on {pageTopic.toLowerCase()}. A Grade 9 response will connect at least two of the
            points above, name the writer&rsquo;s methods explicitly, and return to the
            question&rsquo;s wording in the final paragraph.
          </p>
          <p className="mt-4">
            <strong className="text-foreground">
              Want the board-specific marking for this topic?
            </strong>{' '}
            Write your own practice paragraph and upload it to our AI marker — it applies your exam
            board&rsquo;s specific AO weighting and returns feedback in the lexis of that
            board&rsquo;s mark scheme.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/marking"
              className="inline-block rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            >
              Get AI feedback on your essay
            </Link>
            <Link
              href="/pricing"
              className="inline-block rounded-md border border-border px-4 py-2 text-sm font-medium hover:bg-muted"
            >
              See pricing
            </Link>
          </div>
        </section>

        {/* FAQs */}
        {ctx?.faqs?.length ? (
          <section>
            <h2 className="text-xl font-semibold text-foreground">Frequently asked questions</h2>
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

        {/* Related pages */}
        {related.length > 0 && (
          <section>
            <h2 className="text-xl font-semibold text-foreground">
              Related {categoryLabel} analysis
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

        {/* Hub link */}
        <section className="border-t border-border pt-8">
          <Link href={`/analysis/${category}`} className="text-sm underline hover:no-underline">
            &larr; Back to all {categoryLabel} analysis
          </Link>
        </section>
      </article>
    </main>
  )
}
