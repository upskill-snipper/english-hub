/**
 * The JSON-LD payloads for the /analysis/[...slug] pages.
 *
 * THE CSP HASHES THAT USED TO LIVE HERE WERE REMOVED ON 26 SEPTEMBER 2026,
 * because they blanked every page they were for. The middleware appended a
 * 'sha256-...' source for each JSON-LD body to script-src. Since 2 May 2026
 * that directive has relied on 'unsafe-inline' (the nonce was dropped when
 * Next stopped stamping it on framework scripts), and a browser ignores
 * 'unsafe-inline' as soon as a hash or nonce source is present. So on these
 * pages, and only these, every inline script was refused: Next's RSC stream
 * and React's streaming reveal among them. The pages rendered blank for every
 * visitor with JavaScript, 192 URLs in the sitemap. The hashes were never
 * needed: a script of type application/ld+json is a data block, which the
 * browser never executes, so script-src does not govern it.
 *
 * What remains is the payload builder, shared by the page so there is one
 * definition of each script body.
 *
 * THE ORIGINAL RATIONALE, kept for the record:
 *
 * Why: that route is `force-static` + 24 h ISR, so the middleware cannot
 * thread a per-request nonce onto the three inline <script type="application/ld+json">
 * tags it renders. Under the nonce-based CSP in `src/middleware.ts`, a
 * browser that honours `'strict-dynamic'` ignores the `'unsafe-inline'`
 * fallback - so without an accompanying hash those scripts are blocked in
 * Chrome / Edge / Firefox.
 *
 * Solution: compute a SHA-256 hash of each rendered JSON-LD body and emit
 * `'sha256-<base64>'` sources in the CSP's `script-src` directive. Hashes
 * are content-addressed (not session-addressed) so they're safe to reuse
 * across requests and deploys as long as the underlying data is stable.
 *
 * Correctness constraint: the hashed string MUST be BYTE-IDENTICAL to what
 * React renders as the `<script>` body. React serialises
 * `dangerouslySetInnerHTML={{ __html: JSON.stringify(X) }}` verbatim, so
 * `JSON.stringify(X)` with the SAME object graph is the right input.
 *
 * Hence we centralise the JSON-LD object builder here and the page imports
 * it - guaranteeing there's only one definition of what goes into each
 * script body.
 */
import { ANALYSIS_PAGE_MAP, type AnalysisPageEntry } from '@/data/analysis'
import { getCategoryContext, type CategoryContext } from '@/data/analysis/category-context'

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

function capitalise(str: string): string {
  return str
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')
}

export interface AnalysisJsonLdPayloads {
  articleJsonLd: Record<string, unknown>
  breadcrumbJsonLd: Record<string, unknown>
  faqJsonLd: Record<string, unknown> | null
}

/**
 * Builds the exact JSON-LD objects emitted by `/analysis/[...slug]/page.tsx`.
 * The page imports this so renderer + hasher share one source of truth.
 */
export function buildAnalysisJsonLdPayloads(
  entry: AnalysisPageEntry,
  ctx: CategoryContext | null,
): AnalysisJsonLdPayloads {
  const key = entry.slug.join('/')
  const canonical = `https://theenglishhub.app/analysis/${key}`
  const category = entry.category
  const categoryLabel = CATEGORY_LABELS[category] ?? capitalise(category)
  const pageTitle = cleanTitle(entry.title)

  const articleJsonLd: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: pageTitle,
    author: {
      '@type': 'Organization',
      name: 'The English Hub - GCSE Markers',
      url: 'https://theenglishhub.app',
    },
    publisher: {
      '@type': 'Organization',
      name: 'The English Hub',
      url: 'https://theenglishhub.app',
    },
    description: entry.description,
    mainEntityOfPage: canonical,
    about: ctx?.label ?? categoryLabel,
    educationalLevel: 'GCSE',
    inLanguage: 'en-GB',
  }

  const breadcrumbJsonLd: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Analysis',
        item: 'https://theenglishhub.app/analysis',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: categoryLabel,
        item: `https://theenglishhub.app/analysis/${category}`,
      },
      { '@type': 'ListItem', position: 3, name: pageTitle, item: canonical },
    ],
  }

  const faqJsonLd: Record<string, unknown> | null = ctx?.faqs?.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: ctx.faqs.map((f) => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: { '@type': 'Answer', text: f.answer },
        })),
      }
    : null

  return { articleJsonLd, breadcrumbJsonLd, faqJsonLd }
}
