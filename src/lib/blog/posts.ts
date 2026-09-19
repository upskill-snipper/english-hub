/**
 * Blog post catalogue.
 *
 * Reads MDX files from `content/blog/`, validates the frontmatter and
 * exposes typed `BlogPost` objects to the rest of the app. Posts are
 * sorted newest-first (by ISO `date`) so callers don't need to repeat
 * that work.
 *
 * Server-only - `src/lib/mdx.ts` reads the filesystem.
 */

import readingTime from 'reading-time'

import { listMdxSlugs, mdxFileExists, readAllMdxFiles, readMdxFile } from '@/lib/mdx'

const BLOG_DIR = 'blog'

// ─── Memoisation ────────────────────────────────────────────────────────────
//
// THE DEFECT THIS FIXES (19 September 2026)
//
// `getAllBlogPosts()` called `readAllMdxFiles()`, which does a synchronous
// `readdirSync` over content/blog (84 entries) and then a synchronous
// `readFileSync` per slug, parsed the frontmatter with gray-matter, validated
// it and ran `reading-time` over the full body of all 42 posts - on EVERY
// call. Nothing cached: no `unstable_cache`, no React `cache`, and neither
// blog route sets `revalidate` or `generateStaticParams`.
//
// The blog index calls it once per render and the post page calls it again for
// its related-posts list, so a single cold request parsed the corpus twice on
// a serverless function with no warm filesystem cache.
//
// WHY A MODULE-LEVEL MEMO IS THE RIGHT SCOPE. Blog content is files in the
// repository: it can only change on deploy, and a deploy is a new process. A
// new Vercel lambda starts with an empty memo and fills it on its first
// request, which is exactly the desired behaviour. This is the same shape as
// the existing import-job cache.
//
// It is deliberately NOT a time-based cache. A TTL would add a class of bug
// (stale content for N seconds after a deploy) to solve a problem that does
// not exist, because the input cannot change within a process lifetime.
//
// `__resetBlogMemoForTests` exists so a test can write a fixture and re-read
// it; nothing in the application should call it.
// ────────────────────────────────────────────────────────────────────────────

let allPostsMemo: BlogPost[] | null = null
let slugsMemo: string[] | null = null
const postMemo = new Map<string, BlogPost | null>()
const arVariantMemo = new Map<string, boolean>()

/** Test seam. Drops every memo so a fixture change is picked up. */
export function __resetBlogMemoForTests(): void {
  allPostsMemo = null
  slugsMemo = null
  postMemo.clear()
  arVariantMemo.clear()
}

/** Educational levels we support across the platform. */
export type EducationalLevel = 'KS3' | 'GCSE' | 'IGCSE' | 'A-Level'

/**
 * A fully-resolved blog post - i.e. frontmatter + raw MDX body + computed
 * fields like `readingTime`. Pages render this directly.
 */
export type BlogPost = {
  slug: string
  title: string
  description: string
  /** ISO `YYYY-MM-DD`. */
  date: string
  /**
   * ISO `YYYY-MM-DD`, when the post was last substantively revised (SEO-5).
   *
   * Optional and deliberately not defaulted to `date`. `dateModified` equal to
   * `datePublished` on every article tells a search engine nothing; an absent
   * one at least does not assert something untrue. It is surfaced as
   * `dateModified` in the Article JSON-LD and as a visible "Updated" line, so
   * setting it is a claim that the post really was checked on that day.
   */
  updated?: string
  author: string
  /** Either an `/api/og?title=…` URL or a `/images/blog/<slug>.png` path. */
  cover: string
  tags: string[]
  /** 140-180 character teaser used on the index card. */
  excerpt: string
  category: string
  educationalLevel: EducationalLevel
  /** Minutes - computed from the MDX body via `reading-time`. */
  readingTime: number
  /** Raw MDX body (post-frontmatter) - passed to `compileMDX`. */
  content: string
}

/** Frontmatter shape we expect from each `.mdx` file. */
type BlogPostFrontmatter = {
  title: string
  description: string
  slug: string
  date: string | Date
  updated?: string | Date
  author: string
  cover: string
  tags: string[]
  excerpt: string
  category: string
  educationalLevel: EducationalLevel
}

const VALID_LEVELS: readonly EducationalLevel[] = ['KS3', 'GCSE', 'IGCSE', 'A-Level']

/** Normalise a frontmatter `date` (which may be a Date object after YAML parsing) to ISO YYYY-MM-DD. */
function toIsoDate(value: string | Date): string {
  if (value instanceof Date) {
    // `toISOString()` gives us `YYYY-MM-DDTHH:mm:ss.sssZ`; we want just the date portion.
    return value.toISOString().slice(0, 10)
  }
  return value
}

/**
 * Build a `BlogPost` from the raw frontmatter + MDX body.
 *
 * Throws if a required field is missing or the educational level is
 * outside our allow-list - better to fail loudly at build time than to
 * ship a half-broken post.
 */
function toBlogPost(slug: string, data: BlogPostFrontmatter, content: string): BlogPost {
  if (!data.title || !data.description || !data.date) {
    throw new Error(`Blog post '${slug}' is missing required frontmatter (title/description/date).`)
  }
  if (!VALID_LEVELS.includes(data.educationalLevel)) {
    throw new Error(
      `Blog post '${slug}' has invalid educationalLevel '${String(data.educationalLevel)}'. ` +
        `Expected one of: ${VALID_LEVELS.join(', ')}.`,
    )
  }

  const minutes = Math.max(1, Math.round(readingTime(content).minutes))

  return {
    slug,
    title: data.title,
    description: data.description,
    date: toIsoDate(data.date),
    ...(data.updated ? { updated: toIsoDate(data.updated) } : {}),
    author: data.author,
    cover: data.cover,
    tags: Array.isArray(data.tags) ? data.tags : [],
    excerpt: data.excerpt,
    category: data.category,
    educationalLevel: data.educationalLevel,
    readingTime: minutes,
    content,
  }
}

/**
 * Returns every blog post, newest-first.
 *
 * The returned array is the memo itself, so callers must not mutate it. Every
 * caller today either maps, filters or slices, all of which copy.
 */
export function getAllBlogPosts(): BlogPost[] {
  if (allPostsMemo) return allPostsMemo
  const files = readAllMdxFiles<BlogPostFrontmatter>(BLOG_DIR)
  allPostsMemo = files
    .map((file) => toBlogPost(file.slug, file.data, file.content))
    .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0))
  return allPostsMemo
}

/**
 * Returns one blog post by slug, or `null` if it doesn't exist.
 *
 * When `locale === 'ar'` and a sibling `<slug>.ar.mdx` file exists,
 * we serve the Arabic variant - its frontmatter overrides title and
 * description, and its body is rendered instead of the English one.
 * If no AR sibling exists, we fall back gracefully to the English
 * post so the URL still resolves (better UX than a 404 mid-rollout
 * while translations are still landing one-by-one).
 */
export function getBlogPost(slug: string, locale: 'en' | 'ar' | 'es' = 'en'): BlogPost | null {
  // Keyed by locale as well as slug: the Arabic variant is a different post
  // body under the same canonical slug, so a slug-only key would serve the
  // wrong language to whichever caller arrived second.
  const key = `${locale}:${slug}`
  const cached = postMemo.get(key)
  if (cached !== undefined) return cached
  const resolved = resolveBlogPost(slug, locale)
  postMemo.set(key, resolved)
  return resolved
}

function resolveBlogPost(slug: string, locale: 'en' | 'ar' | 'es'): BlogPost | null {
  if (locale === 'ar') {
    const arFile = readMdxFile<BlogPostFrontmatter>(BLOG_DIR, `${slug}.ar`)
    if (arFile) {
      // We use the AR slug variant for the file lookup, but the post's
      // canonical slug stays the English one so internal links / sitemap
      // entries continue to work.
      return toBlogPost(slug, arFile.data, arFile.content)
    }
    // Fall through to English - graceful degradation while the AR
    // translation pipeline backfills the corpus.
  }
  const file = readMdxFile<BlogPostFrontmatter>(BLOG_DIR, slug)
  if (!file) return null
  return toBlogPost(file.slug, file.data, file.content)
}

/**
 * Returns the slugs of every blog post, sorted alphabetically.
 *
 * Used by the slug-existence guard and the sitemap - both of those care
 * about coverage, not order, so we keep this lightweight (no MDX parse).
 * Locale variants (`<slug>.ar.mdx`) are excluded by `listMdxSlugs`.
 */
export function getBlogSlugs(): string[] {
  if (!slugsMemo) slugsMemo = listMdxSlugs(BLOG_DIR)
  return slugsMemo
}

/**
 * True when `content/blog/<slug>.ar.mdx` exists - i.e. the post has a
 * human-reviewed Arabic translation servable at `/ar/blog/<slug>`.
 * Cheap existence probe (no parse) so metadata/hreflang can call it
 * per-request without cost.
 */
export function hasArabicVariant(slug: string): boolean {
  const cached = arVariantMemo.get(slug)
  if (cached !== undefined) return cached
  const exists = mdxFileExists(BLOG_DIR, `${slug}.ar`)
  arVariantMemo.set(slug, exists)
  return exists
}
