import { describe, it, expect, vi, beforeEach } from 'vitest'

/**
 * The blog catalogue was re-read and re-parsed on every call.
 *
 * THE DEFECT (19 September 2026). `getAllBlogPosts()` called
 * `readAllMdxFiles()`, which does a synchronous `readdirSync` over
 * content/blog - 84 entries - then a synchronous `readFileSync` per slug,
 * parsed frontmatter with gray-matter, validated it, and ran `reading-time`
 * over the full body of all 42 posts. Every call. There was no
 * `unstable_cache`, no React `cache`, and neither blog route sets `revalidate`
 * or `generateStaticParams`.
 *
 * The blog index calls it once per render and the post page calls it again to
 * build its related-posts list, so one cold request parsed the whole corpus
 * twice, on a serverless function with no warm filesystem cache.
 *
 * The tests below count filesystem calls rather than timing anything: a timing
 * assertion on a fast machine is a flaky test that proves nothing.
 */

const readAll = vi.fn()
const readOne = vi.fn()
const listSlugs = vi.fn()
const fileExists = vi.fn()

vi.mock('@/lib/mdx', () => ({
  readAllMdxFiles: (...a: unknown[]) => readAll(...a),
  readMdxFile: (...a: unknown[]) => readOne(...a),
  listMdxSlugs: (...a: unknown[]) => listSlugs(...a),
  mdxFileExists: (...a: unknown[]) => fileExists(...a),
}))

import {
  getAllBlogPosts,
  getBlogPost,
  getBlogSlugs,
  hasArabicVariant,
  __resetBlogMemoForTests,
} from '@/lib/blog/posts'

const FRONTMATTER = {
  title: 'A post',
  description: 'About something',
  date: '2026-09-01',
  author: 'The English Hub',
  tags: ['gcse'],
  educationalLevel: 'GCSE',
}

beforeEach(() => {
  vi.clearAllMocks()
  __resetBlogMemoForTests()
  readAll.mockReturnValue([
    { slug: 'older', data: { ...FRONTMATTER, date: '2026-08-01' }, content: 'Body one.' },
    { slug: 'newer', data: { ...FRONTMATTER, date: '2026-09-01' }, content: 'Body two.' },
  ])
  readOne.mockReturnValue({ slug: 'older', data: FRONTMATTER, content: 'Body one.' })
  listSlugs.mockReturnValue(['older', 'newer'])
  fileExists.mockReturnValue(true)
})

// ─── The defect ─────────────────────────────────────────────────────────

describe('getAllBlogPosts', () => {
  it('reads the corpus once, however often it is called', () => {
    getAllBlogPosts()
    getAllBlogPosts()
    getAllBlogPosts()
    expect(readAll).toHaveBeenCalledTimes(1)
  })

  it('returns the same posts every time', () => {
    const a = getAllBlogPosts()
    const b = getAllBlogPosts()
    expect(b.map((p) => p.slug)).toEqual(a.map((p) => p.slug))
  })

  it('still sorts newest first', () => {
    expect(getAllBlogPosts().map((p) => p.slug)).toEqual(['newer', 'older'])
  })

  it('re-reads after the memo is dropped, so a deploy is not stale', () => {
    getAllBlogPosts()
    __resetBlogMemoForTests()
    getAllBlogPosts()
    expect(readAll).toHaveBeenCalledTimes(2)
  })
})

describe('getBlogSlugs', () => {
  /**
   * This used to assert `listMdxSlugs` was called once, because `getBlogSlugs`
   * listed the directory without parsing anything. It no longer can: a draft
   * post is a file on disk that is not published, so the slug list has to come
   * from parsed frontmatter (19 September 2026).
   *
   * The memo guarantee is unchanged and is what these still measure - the
   * corpus is read once per process, however many callers ask. The sitemap is
   * the only caller that now parses where it did not before; the article route
   * already called `getAllBlogPosts()` on every render.
   */
  it('reads the corpus once, however often it is called', () => {
    getBlogSlugs()
    getBlogSlugs()
    expect(readAll).toHaveBeenCalledTimes(1)
  })

  it('and shares that one read with the catalogue', () => {
    getAllBlogPosts()
    getBlogSlugs()
    expect(readAll).toHaveBeenCalledTimes(1)
  })

  it('returns published slugs, alphabetically', () => {
    expect(getBlogSlugs()).toEqual(['newer', 'older'])
  })

  it('and a draft is not among them', () => {
    // The whole point of moving this off the directory listing. `held-back`
    // exists on disk; it must not be a slug, because this one list decides
    // both what /blog/<slug> serves and what goes in the sitemap.
    readAll.mockReturnValue([
      { slug: 'live', data: { ...FRONTMATTER }, content: 'Body.' },
      { slug: 'held-back', data: { ...FRONTMATTER, draft: true }, content: 'Body.' },
    ])
    __resetBlogMemoForTests()
    expect(getBlogSlugs()).toEqual(['live'])
  })
})

describe('hasArabicVariant', () => {
  it('probes the filesystem once per slug', () => {
    hasArabicVariant('older')
    hasArabicVariant('older')
    expect(fileExists).toHaveBeenCalledTimes(1)
  })

  it('probes separately for a different slug', () => {
    hasArabicVariant('older')
    hasArabicVariant('newer')
    expect(fileExists).toHaveBeenCalledTimes(2)
  })

  it('caches a negative answer too, rather than re-probing a missing file', () => {
    fileExists.mockReturnValue(false)
    expect(hasArabicVariant('nope')).toBe(false)
    expect(hasArabicVariant('nope')).toBe(false)
    expect(fileExists).toHaveBeenCalledTimes(1)
  })
})

// ─── The trap in memoising getBlogPost ──────────────────────────────────

describe('getBlogPost', () => {
  it('reads a post once', () => {
    getBlogPost('older')
    getBlogPost('older')
    expect(readOne).toHaveBeenCalledTimes(1)
  })

  it('keys the memo by locale, not by slug alone', () => {
    // The Arabic variant is a different body under the same canonical slug.
    // A slug-only key would serve whichever language asked first to everyone
    // afterwards - an English reader getting Arabic, or the reverse.
    readOne.mockImplementation((_dir: string, slug: string) =>
      slug.endsWith('.ar')
        ? { slug, data: { ...FRONTMATTER, title: 'مقال' }, content: 'Arabic body.' }
        : { slug, data: FRONTMATTER, content: 'English body.' },
    )
    const en = getBlogPost('older', 'en')
    const ar = getBlogPost('older', 'ar')
    expect(en?.content).toBe('English body.')
    expect(ar?.content).toBe('Arabic body.')
    expect(getBlogPost('older', 'en')?.content).toBe('English body.')
  })

  it('caches a miss, so a bad slug does not hit the disk repeatedly', () => {
    // A crawler walking guessed URLs would otherwise cause one filesystem
    // probe per request, forever.
    readOne.mockReturnValue(null)
    expect(getBlogPost('does-not-exist')).toBeNull()
    expect(getBlogPost('does-not-exist')).toBeNull()
    expect(readOne).toHaveBeenCalledTimes(1)
  })

  it('still falls back to English when no Arabic variant exists', () => {
    readOne.mockImplementation((_dir: string, slug: string) =>
      slug.endsWith('.ar') ? null : { slug, data: FRONTMATTER, content: 'English body.' },
    )
    expect(getBlogPost('older', 'ar')?.content).toBe('English body.')
  })
})
