import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { ReviewedBylineJsonLd } from '@/components/seo/json-ld'

/**
 * Every page told Google it was last modified on 1 May 2026.
 *
 * The root layout emits one `WebPage` node site-wide carrying
 * `dateModified: SITE_LAST_REVIEWED` - a hand-maintained constant. That put
 * ONE identical modification date on all 1,071 routes, and it had not been
 * bumped since May while the site changed underneath it, tonight included.
 *
 * Schema.org defines `dateModified` as the date the work was MOST RECENTLY
 * modified, so on any page touched since May the claim was false.
 *
 * MEASURED ON PRODUCTION, and this is the part that settles it. On
 * /blog/how-to-peel-a-paragraph:
 *
 *     @type=Article   datePublished=2026-05-04   dateModified=(absent)
 *     @type=WebPage                              dateModified=2026-05-01
 *
 * The Article node correctly says nothing, because that post has never been
 * revised. The WebPage node asserts a revision THREE DAYS BEFORE THE POST WAS
 * PUBLISHED.
 *
 * THE CODEBASE ALREADY HELD THE RIGHT POSITION AND TESTED IT. From
 * blog-posts-lead-somewhere.test.ts: "dateModified equal to datePublished on
 * every article asserts a revision that never happened. An absent one at least
 * says nothing untrue." `BlogPost.updated` is deliberately not defaulted for
 * that exact reason - and then the root layout asserted one anyway, over the
 * top, on every page. One half of the repository being careful while the other
 * half quietly undoes it is the shape this codebase keeps producing.
 *
 * So this applies the project's own standard consistently rather than
 * inventing one. A real per-page date would be better than silence, but
 * nothing here knows when an arbitrary route last changed; the nodes that do
 * know still emit their own.
 *
 * NOT CHANGED, and reported instead: the same byline claims every page was
 * "Reviewed for accuracy by a subject specialist". Whether that is true is a
 * question about the company's editorial process, not about the code, and it
 * is Calum's to answer. Six blog posts held back today carried that line while
 * one of them displayed "HUMAN REVIEW REQUIRED ... before publication".
 *
 * MUTATION RUN, verified to have altered the file first: putting
 * `dateModified` back fails 1 of these 7. One, not more, because only one
 * assertion is about that property - which is the right number for a check
 * this narrow, and worth stating rather than implying a broader net.
 */

const ROOT = process.cwd()

/** The JSON the component actually emits, not its source text. */
function emitted(): Record<string, unknown> {
  const node = ReviewedBylineJsonLd({}) as {
    props: { dangerouslySetInnerHTML: { __html: string } }
  }
  return JSON.parse(node.props.dangerouslySetInnerHTML.__html)
}

describe('the site-wide attribution node', () => {
  it('asserts no modification date', () => {
    // THE ASSERTION THAT MATTERS. One date for 1,071 pages is either wrong for
    // 1,070 of them or wrong for all of them.
    expect(emitted()).not.toHaveProperty('dateModified')
  })

  it('and no date of any kind, so nothing can creep back under another name', () => {
    const json = emitted()
    for (const key of ['datePublished', 'dateCreated', 'uploadDate']) {
      expect(json, `${key} asserts a date this node cannot know`).not.toHaveProperty(key)
    }
  })

  it('but still carries the attribution it exists for', () => {
    // The counterweight. Deleting the whole node would satisfy the assertions
    // above and throw away a real GEO signal that costs nothing to make.
    const json = emitted() as { '@type': string; reviewedBy?: { name?: string } }
    expect(json['@type']).toBe('WebPage')
    expect(json).toHaveProperty('author')
    expect(json).toHaveProperty('publisher')
    expect(json.reviewedBy?.name).toBeTruthy()
  })

  it('and names an organisation, never an invented person', () => {
    // The site's standing rule on attribution, worth pinning while nearby.
    const json = emitted() as {
      author?: { '@type': string }
      reviewedBy?: { '@type': string }
    }
    expect(json.author?.['@type']).toBe('Organization')
    expect(json.reviewedBy?.['@type']).toBe('Organization')
  })

  it('and the layout no longer passes it a date', () => {
    const layout = readFileSync(join(ROOT, 'src/app/layout.tsx'), 'utf8')
    expect(layout).toContain('<ReviewedBylineJsonLd nonce={cspNonce} />')
    expect(layout).not.toContain('SITE_LAST_REVIEWED')
  })
})

describe('the pages that DO know their date still say so', () => {
  it('the blog Article node keeps its own dateModified', () => {
    // Removing the site-wide claim must not remove the honest per-post one.
    // That is the whole distinction: a page that knows when it changed should
    // say so, and a page that does not should not guess.
    const page = readFileSync(join(ROOT, 'src/app/blog/[slug]/page.tsx'), 'utf8')
    expect(page).toContain('dateModified={post.updated}')
  })

  it('and `updated` is still not defaulted to the publication date', () => {
    const posts = readFileSync(join(ROOT, 'src/lib/blog/posts.ts'), 'utf8')
    expect(posts).toContain('...(data.updated ? { updated: toIsoDate(data.updated) } : {})')
  })
})
