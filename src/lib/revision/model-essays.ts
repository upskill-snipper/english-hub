/**
 * The model-essay catalogue: which texts exist, and which essays each holds.
 *
 * WHY THIS IS A MODULE RATHER THAN LOCAL TO THE PAGE (20 September 2026).
 *
 * `src/app/revision/model-essays/[text]/[slug]/page.tsx` held all of this
 * privately, and its `generateStaticParams` was deliberately removed in June
 * 2026 to fix a real paywall bug: with it present Next prerendered every slug,
 * baking `hasAccess=false` into cached HTML, and a paying subscriber was served
 * a locked page. The comment left behind reads "SEO is unaffected - the page is
 * server-rendered with the crawlable teaser on every request."
 *
 * The teaser part is true. The rest is not. `generateStaticParams` was the only
 * enumeration of these 25 URLs anywhere in the repository, so when it went the
 * sitemap lost its only way to know they existed - and it has listed the hub
 * and none of the 25 leaves ever since. Verified on the live sitemap: one
 * model-essays URL, and it is /revision/model-essays.
 *
 * So the enumeration lives here, where the sitemap can read it without the
 * page having to prerender anything. The page keeps `force-dynamic` and the
 * per-request entitlement check exactly as they are.
 *
 * ONE LOADER, NOT TWO. The data files disagree about their own shape - `slug`
 * or `id`, `targetGrade` or `grade`, `title` or `topic`, and annotations that
 * are either a string or an AO1/AO2/AO3 object - so the normalisation is
 * fiddly, and a second copy of it in the sitemap would drift. Both callers use
 * this one.
 *
 * ─── AND THE FIFTH SHAPE, WHICH NOBODY HAD NOTICED ──────────────────────────
 *
 * `romeo-and-juliet.ts` does not carry `paragraphs` at all. It carries `essay`,
 * one string of about 750 words in seven blank-line-separated paragraphs, plus
 * `keyQuotations`, `contextPoints` and `structuralFeatures`. The old normaliser
 * only knew `paragraphs`, so it produced an empty array and every one of the
 * five Romeo and Juliet pages rendered its title, its "use this essay well"
 * box, its fair-dealing notice - and no essay. Verified live on
 * /revision/model-essays/romeo-and-juliet/rj-romeo-petrarchan-tragic-hero:
 * 200 OK, 491 visible words, none of them the essay.
 *
 * 3,765 words of checked-against-Folger-and-Arden writing, published and
 * invisible, on pages that looked complete. Nothing crashed and nothing said
 * anything was wrong, which is how it lasted. The fallback below splits that
 * string on blank lines. Those paragraphs have no marker annotation, so the
 * page renders them full width and the title does not call them annotated.
 */

export type ModelEssayParagraph = {
  content: string
  annotation: string
}

export type ModelEssay = {
  slug: string
  title: string
  text: string
  paragraphs: ModelEssayParagraph[]
  targetGrade: number | string
  wordCount: number
  keyTechniques: string[]
}

export type TextKey =
  | 'macbeth'
  | 'an-inspector-calls'
  | 'a-christmas-carol'
  | 'jekyll-and-hyde'
  | 'romeo-and-juliet'

export const TEXT_LABELS: Record<TextKey, string> = {
  macbeth: 'Macbeth',
  'an-inspector-calls': 'An Inspector Calls',
  'a-christmas-carol': 'A Christmas Carol',
  'jekyll-and-hyde': 'Jekyll and Hyde',
  'romeo-and-juliet': 'Romeo and Juliet',
}

export const ALL_TEXT_KEYS = Object.keys(TEXT_LABELS) as TextKey[]

export function isTextKey(s: string): s is TextKey {
  return (ALL_TEXT_KEYS as string[]).includes(s)
}

function camelKey(key: TextKey): string {
  return key.replace(/-([a-z])/g, (_, c: string) => c.toUpperCase())
}

/**
 * Sibling data files use one of two annotation shapes: a plain string
 * (macbeth.ts) or an object with AO1 / AO2 / AO3 keys (jekyll-and-hyde.ts).
 * Flatten the object form so the annotation column renders without a runtime
 * React error.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function flattenAnnotation(a: any): string {
  if (typeof a === 'string') return a
  if (a && typeof a === 'object') {
    const parts: string[] = []
    if (typeof a.AO1 === 'string') parts.push(`AO1 - ${a.AO1}`)
    if (typeof a.AO2 === 'string') parts.push(`AO2 - ${a.AO2}`)
    if (typeof a.AO3 === 'string') parts.push(`AO3 - ${a.AO3}`)
    if (parts.length > 0) return parts.join('\n\n')
  }
  return ''
}

/**
 * The paragraphs of one essay, from whichever field carries them.
 *
 * `paragraphs` when the file has it; otherwise `essay`, split on blank lines.
 * The second branch is the Romeo and Juliet shape, and until 20 September 2026
 * its absence meant five published pages rendered no essay at all.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function paragraphsOf(raw: any): ModelEssayParagraph[] {
  if (Array.isArray(raw?.paragraphs) && raw.paragraphs.length > 0) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return raw.paragraphs.map((p: any) => ({
      content: p?.content ?? p?.paragraph ?? '',
      annotation: flattenAnnotation(p?.annotation),
    }))
  }
  if (typeof raw?.essay === 'string' && raw.essay.trim()) {
    return raw.essay
      .split(/\n\s*\n/)
      .map((block: string) => block.trim())
      .filter(Boolean)
      .map((content: string) => ({ content, annotation: '' }))
  }
  return []
}

/**
 * The essays for one text. A missing or malformed data file degrades to an
 * empty array rather than throwing, which is what let this route compile
 * before all five files existed.
 */
export async function loadEssaysFor(key: TextKey): Promise<ModelEssay[]> {
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const mod: any = await import(`@/data/model-essays/${key}`)
    const candidates = [
      mod?.default,
      mod?.essays,
      mod?.modelEssays,
      mod?.[`${camelKey(key)}Essays`],
      mod?.[`${camelKey(key)}ModelEssays`],
    ]
    const arr = candidates.find((c) => Array.isArray(c))
    if (!Array.isArray(arr)) return []
    return (
      (arr as unknown[])
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .map((raw: any) => {
          const slug = typeof raw?.slug === 'string' && raw.slug.length > 0 ? raw.slug : raw?.id
          return {
            slug,
            title: raw?.title ?? raw?.topic,
            text: raw?.text,
            paragraphs: paragraphsOf(raw),
            targetGrade: raw?.targetGrade ?? raw?.grade,
            // `approximateWordCount` is the Romeo and Juliet spelling. Without
            // it those five pages showed no length either.
            wordCount: raw?.wordCount ?? raw?.approximateWordCount,
            keyTechniques: Array.isArray(raw?.keyTechniques) ? raw.keyTechniques : [],
          } as ModelEssay
        })
        .filter((e) => typeof e.slug === 'string' && e.slug.length > 0)
    )
  } catch {
    return []
  }
}

/**
 * Does this essay carry marker commentary?
 *
 * Twenty of the twenty-five do. The five Romeo and Juliet essays are prose
 * only, so the page renders them full width and neither the title nor the
 * description calls them annotated.
 */
export function isAnnotated(essay: ModelEssay): boolean {
  return essay.paragraphs.some((p) => p.annotation.trim().length > 0)
}

/** Every model-essay route, for the sitemap. Site-relative, no host. */
export async function modelEssayRoutes(): Promise<string[]> {
  const perText = await Promise.all(
    ALL_TEXT_KEYS.map(async (key) =>
      (await loadEssaysFor(key)).map((e) => `/revision/model-essays/${key}/${e.slug}`),
    ),
  )
  return perText.flat()
}
