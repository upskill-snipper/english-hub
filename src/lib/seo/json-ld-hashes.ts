/**
 * CSP hash-source generation for the /analysis/[...slug] JSON-LD scripts.
 *
 * Why: that route is `force-static` + 24 h ISR, so the middleware cannot
 * thread a per-request nonce onto the three inline <script type="application/ld+json">
 * tags it renders. Under the nonce-based CSP in `src/middleware.ts`, a
 * browser that honours `'strict-dynamic'` ignores the `'unsafe-inline'`
 * fallback — so without an accompanying hash those scripts are blocked in
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
 * it — guaranteeing there's only one definition of what goes into each
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
      name: 'The English Hub — GCSE Markers',
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

// ─── SHA-256 → base64 via Web Crypto (edge + Node 20 compatible) ────────

async function sha256Base64(text: string): Promise<string> {
  const bytes = new TextEncoder().encode(text)
  const digest = await globalThis.crypto.subtle.digest('SHA-256', bytes)
  // Convert ArrayBuffer → base64 without Buffer (edge-safe).
  const view = new Uint8Array(digest)
  let binary = ''
  for (let i = 0; i < view.byteLength; i++) binary += String.fromCharCode(view[i])
  // btoa is available in both edge runtime and Node 20+.
  return btoa(binary)
}

// Per-process memoisation: first request for a slug hashes its payloads,
// every subsequent request in the same isolate returns the cached result.
const HASH_CACHE = new Map<string, string[]>()

/**
 * Returns the CSP `'sha256-...'` source tokens for every JSON-LD script
 * rendered by `/analysis/[...slug]/page.tsx` for the given slug.
 *
 * @param slugKey 'category/subSlug' — the same string used as ANALYSIS_PAGE_MAP key
 * @returns Array of `'sha256-<base64>'` tokens (2 or 3 entries) or [] if slug unknown
 */
export async function computeJsonLdHashes(slugKey: string): Promise<string[]> {
  const cached = HASH_CACHE.get(slugKey)
  if (cached) return cached

  const entry = ANALYSIS_PAGE_MAP.get(slugKey)
  if (!entry) return []

  const ctx = getCategoryContext(entry.category)
  const { articleJsonLd, breadcrumbJsonLd, faqJsonLd } = buildAnalysisJsonLdPayloads(entry, ctx)

  const bodies: string[] = [JSON.stringify(articleJsonLd), JSON.stringify(breadcrumbJsonLd)]
  if (faqJsonLd) bodies.push(JSON.stringify(faqJsonLd))

  const hashes = await Promise.all(
    bodies.map(async (body) => `'sha256-${await sha256Base64(body)}'`),
  )

  HASH_CACHE.set(slugKey, hashes)
  return hashes
}

/**
 * Parse a request pathname and return the analysis slug key if it matches
 * the `/analysis/[category]/[sub-slug]` pattern, else null.
 *
 * Accepts paths with / without trailing slash and ignores query strings
 * (the caller already provides pathname only).
 */
export function extractAnalysisSlugKey(pathname: string): string | null {
  if (!pathname.startsWith('/analysis/')) return null
  // Strip prefix, trailing slash, and any further segments beyond the
  // two-level slug the catch-all route accepts.
  const rest = pathname.slice('/analysis/'.length).replace(/\/$/, '')
  const parts = rest.split('/')
  if (parts.length !== 2) return null
  const key = `${parts[0]}/${parts[1]}`
  // Only return a key if we actually have that page registered — avoids
  // wasting a hash compute on 404s and keeps CSP lean.
  return ANALYSIS_PAGE_MAP.has(key) ? key : null
}
