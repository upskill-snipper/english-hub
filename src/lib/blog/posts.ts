/**
 * Blog post catalogue.
 *
 * Reads MDX files from `content/blog/`, validates the frontmatter and
 * exposes typed `BlogPost` objects to the rest of the app. Posts are
 * sorted newest-first (by ISO `date`) so callers don't need to repeat
 * that work.
 *
 * Server-only — `src/lib/mdx.ts` reads the filesystem.
 */

import readingTime from 'reading-time'

import { listMdxSlugs, readAllMdxFiles, readMdxFile } from '@/lib/mdx'

const BLOG_DIR = 'blog'

/** Educational levels we support across the platform. */
export type EducationalLevel = 'KS3' | 'GCSE' | 'IGCSE' | 'A-Level'

/**
 * A fully-resolved blog post — i.e. frontmatter + raw MDX body + computed
 * fields like `readingTime`. Pages render this directly.
 */
export type BlogPost = {
  slug: string
  title: string
  description: string
  /** ISO `YYYY-MM-DD`. */
  date: string
  author: string
  /** Either an `/api/og?title=…` URL or a `/images/blog/<slug>.png` path. */
  cover: string
  tags: string[]
  /** 140–180 character teaser used on the index card. */
  excerpt: string
  category: string
  educationalLevel: EducationalLevel
  /** Minutes — computed from the MDX body via `reading-time`. */
  readingTime: number
  /** Raw MDX body (post-frontmatter) — passed to `compileMDX`. */
  content: string
}

/** Frontmatter shape we expect from each `.mdx` file. */
type BlogPostFrontmatter = {
  title: string
  description: string
  slug: string
  date: string | Date
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
 * outside our allow-list — better to fail loudly at build time than to
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

/** Returns every blog post, newest-first. */
export function getAllBlogPosts(): BlogPost[] {
  const files = readAllMdxFiles<BlogPostFrontmatter>(BLOG_DIR)
  return files
    .map((file) => toBlogPost(file.slug, file.data, file.content))
    .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0))
}

/** Returns one blog post by slug, or `null` if it doesn't exist. */
export function getBlogPost(slug: string): BlogPost | null {
  const file = readMdxFile<BlogPostFrontmatter>(BLOG_DIR, slug)
  if (!file) return null
  return toBlogPost(file.slug, file.data, file.content)
}

/**
 * Returns the slugs of every blog post, sorted alphabetically.
 *
 * Used by `generateStaticParams` and the sitemap — both of those care
 * about coverage, not order, so we keep this lightweight (no MDX parse).
 */
export function getBlogSlugs(): string[] {
  return listMdxSlugs(BLOG_DIR)
}
