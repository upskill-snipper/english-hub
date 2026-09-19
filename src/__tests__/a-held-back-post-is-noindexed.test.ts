import { describe, it, expect, vi } from 'vitest'

/**
 * What actually keeps a held-back post out of Google.
 *
 * NOT the status code. `/blog/<unknown>` returns **200**, not 404. This route
 * is dynamically rendered (cookie i18n reads `headers()`), so Next streams the
 * shell and, since 15.2, the metadata with a committed 200 before `notFound()`
 * can change it. Measured on production on 20 September 2026, on a cache MISS:
 * `/blog/gcse-english-language-paper-1-transactional-writing` served 200 with
 * the title "Article not found", zero occurrences of the review notes, and two
 * `noindex` metas. `/revision/texts/<unknown>` behaves the same way.
 *
 * So the `noindex` in `generateMetadata` is not a nicety alongside a real 404.
 * It is the ONLY thing standing between a held-back post and staying in the
 * index, and nothing was testing it. That is why this file exists rather than
 * a test of the status code, which would be testing the thing that does not
 * work instead of the thing that does.
 *
 * THE COMMENT THAT SENT ME LOOKING. The file header claimed `notFound()`
 * "returns a real HTTP 404 on a dynamic render", sixty lines above a function
 * whose own note recorded having verified that it does not, and a third
 * comment still referred to a `dynamicParams = false` gate the header says was
 * removed for not working. One file, three statements, two of them false. The
 * fourth shape CLAUDE.md names: a comment asserting what the code does not do.
 */

vi.mock('next/headers', () => ({
  headers: async () => new Map([['x-lang', 'en']]),
}))

describe('an unknown or held-back slug is noindexed', () => {
  it('returns robots noindex, nofollow', async () => {
    const { generateMetadata } = await import('@/app/blog/[slug]/page')
    const meta = await generateMetadata({
      params: Promise.resolve({ slug: 'this-slug-has-never-existed-12345' }),
    })
    expect(meta.robots).toEqual({ index: false, follow: false })
    expect(meta.title).toBe('Article not found')
  })

  it('and so does a post held back with draft: true', async () => {
    // THE ASSERTION THAT MATTERS TONIGHT. Six posts were held back today. If
    // the draft flag took them out of the catalogue but left them indexable,
    // Google would keep serving the old snippet - including the one whose
    // description promises an article about transactional writing.
    const { generateMetadata } = await import('@/app/blog/[slug]/page')
    for (const slug of [
      'gcse-english-language-paper-1-transactional-writing',
      'gothic-literature-techniques-gcse',
      'symbolism-in-poetry-gcse',
      'shakespeare-sonnet-analysis-gcse',
      'gcse-english-literature-revision-tips',
      'gcse-english-prose-analysis-techniques',
    ]) {
      const meta = await generateMetadata({ params: Promise.resolve({ slug }) })
      expect(meta.robots, `${slug} is still indexable`).toEqual({ index: false, follow: false })
    }
  })

  it('while a published post is still indexable and canonical', async () => {
    // The counterweight. A generateMetadata that noindexed EVERY post would
    // satisfy both tests above and quietly de-index the blog.
    const { generateMetadata } = await import('@/app/blog/[slug]/page')
    const meta = await generateMetadata({
      params: Promise.resolve({ slug: 'how-to-peel-a-paragraph' }),
    })
    expect(meta.robots).toBeUndefined()
    expect(meta.alternates?.canonical).toContain('/blog/how-to-peel-a-paragraph')
  })
})
