import { headers } from 'next/headers'

/**
 * A BreadcrumbList derived from the URL the visitor is on.
 *
 * THE DEFECT (measured 20 September 2026 across all 1,329 sitemap URLs). 426 of
 * them - 32.1% - emitted no BreadcrumbList at all:
 *
 *     /resources 181    /ielts 43    /marking 7    /help 4
 *     /igcse      93    /legal 10    /ks3    7    and a tail
 *     /revision   61
 *
 * Breadcrumbs are one of the few structured-data types Google renders visibly
 * in a result, and they are how an answer engine reads where a page sits in a
 * site. A third of the site was silent about it, and the deep pages that most
 * need the context - a poem inside an anthology inside a board inside IGCSE -
 * were the ones missing it.
 *
 * WHY THIS IS SAFE IN A LAYOUT, when a LearningResource or Course node is not.
 * Those carry a hard-coded url and describe one page, so a layout mount stamps
 * a false identity onto every descendant - the defect fixed earlier today
 * across nine layouts. A breadcrumb is different in kind: it is COMPUTED from
 * the path of whatever page renders it, so mounting it once at the root gives
 * every URL its own correct trail. `src/__tests__/no-hub-schema-in-layouts.test.ts`
 * states that distinction and deliberately leaves BreadcrumbJsonLd out of its
 * list.
 *
 * WHY IT DOES NOT REPLACE THE HAND-WRITTEN TRAILS. 903 pages already emit one,
 * and some of those describe a hierarchy the URL does not - an analysis page
 * filed under Revision, say. Replacing them would change the declared structure
 * of 903 working pages to fix 426 broken ones, which is the wrong trade.
 * Google's own guidance covers the overlap: "If there are multiple breadcrumb
 * trails to reach a page, you can add multiple breadcrumb trails to the page."
 * Consolidating onto one trail is worth doing later, deliberately, and is not
 * worth risking tonight.
 *
 * THE ARABIC SURFACE. The middleware stamps the STRIPPED path on x-pathname,
 * because /ar/revision renders the /revision route. A trail built from that
 * would send an Arabic reader to English URLs, so when x-lang-source says the
 * locale came from the URL, every item is prefixed back to /ar. That is the
 * same mistake CUI-9 fixed in the redirect tables in September, in a new place.
 */

const SITE = 'https://theenglishhub.app'

/** Words that stay lower case inside a title, unless they lead it. */
const SMALL = new Set([
  'a',
  'an',
  'and',
  'as',
  'at',
  'by',
  'for',
  'from',
  'in',
  'of',
  'on',
  'or',
  'the',
  'to',
  'vs',
  'with',
])

/**
 * Segments whose humanised form would be wrong or unhelpful. Kept short on
 * purpose: this is a label map, not a second route table, and anything not
 * listed falls through to the slug rules below.
 */
const LABELS: Record<string, string> = {
  igcse: 'IGCSE',
  gcse: 'GCSE',
  ks3: 'KS3',
  eal: 'EAL',
  ielts: 'IELTS',
  ial: 'IAL',
  aqa: 'AQA',
  ocr: 'OCR',
  eduqas: 'Eduqas',
  wjec: 'WJEC',
  edexcel: 'Edexcel',
  caie: 'Cambridge',
  cambridge: 'Cambridge',
  'a-level': 'A-Level',
  ao1: 'AO1',
  ao2: 'AO2',
  ao3: 'AO3',
  ao4: 'AO4',
  ao5: 'AO5',
  faqs: 'FAQs',
  llms: 'LLMs',
  'sitemap-html': 'Sitemap',
  ai: 'AI',
  uk: 'UK',
  gcc: 'GCC',
}

/** "a-christmas-carol" -> "A Christmas Carol"; "0500" -> "0500"; "4et1" -> "4ET1". */
export function labelFor(segment: string): string {
  const known = LABELS[segment.toLowerCase()]
  if (known) return known
  // Specification codes and paper numbers: 0500, 4ET1, 8702, j351.
  if (/^[a-z]?\d[a-z0-9]*$/i.test(segment)) return segment.toUpperCase()
  return segment
    .split('-')
    .map((word, i) => {
      const lower = word.toLowerCase()
      if (LABELS[lower]) return LABELS[lower]
      if (i > 0 && SMALL.has(lower)) return lower
      return lower.charAt(0).toUpperCase() + lower.slice(1)
    })
    .join(' ')
}

export async function PathBreadcrumbJsonLd() {
  const h = await headers()
  const path = h.get('x-pathname') ?? '/'
  const nonce = h.get('x-nonce') ?? undefined
  // The Arabic surface is served by an internal rewrite, so the path here is
  // the English route. Send the reader's own URLs back.
  const arabic = h.get('x-lang-source') === 'url'
  const prefix = arabic ? '/ar' : ''

  const segments = path.split('/').filter(Boolean)
  // A one-item trail on the homepage says nothing a crawler does not know.
  if (segments.length === 0) return null

  const items = [{ name: 'Home', url: `${SITE}${prefix || '/'}` }]
  let acc = ''
  for (const segment of segments) {
    acc += `/${segment}`
    items.push({ name: labelFor(segment), url: `${SITE}${prefix}${acc}` })
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return (
    <script
      type="application/ld+json"
      nonce={nonce}
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
