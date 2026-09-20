// @vitest-environment node
import { describe, it, expect } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { ArticleJsonLd } from '@/components/seo/json-ld'

/**
 * 122 URLs told Google that the company is a person.
 *
 * THE DEFECT (20 September 2026). `ArticleJsonLd` chose the author's schema
 * type like this:
 *
 *     '@type': authorName ? 'Person' : 'Organization'
 *
 * with a comment explaining that when no author is supplied it falls back to
 * the site, which schema.org models as an Organization. That reasoning is right
 * about the fallback and blind to the case that actually occurs. Every one of
 * the 82 blog posts carries `author: 'The English Hub'` in its frontmatter and
 * `src/app/blog/[slug]/page.tsx` passes it through, so `authorName` is always
 * present, the ternary always takes the Person branch, and every post - plus
 * the 40 Arabic variants - published
 *
 *     "author": { "@type": "Person", "name": "The English Hub" }
 *
 * Verified live on /blog/how-to-peel-a-paragraph before changing anything.
 *
 * IT ALSO CONTRADICTED THE SITE'S OWN RULE. `ReviewedByline` exists because,
 * in its words, "the site bans fabricated named people", and it credits "The
 * English Hub editorial team" rather than inventing one. The structured data
 * was asserting exactly the thing the visible byline is careful to avoid.
 *
 * The type now follows the NAME rather than whether one was supplied, which is
 * the question that was always being asked.
 *
 * MUTATIONS RUN, each verified to have altered the file first: restoring the
 * original ternary fails; comparing with `===` against the un-lowercased name
 * fails on a post that spells it differently; dropping the url from the
 * Organization branch fails.
 */

const POSTS = 'content/blog'

function nodeFor(props: Partial<Parameters<typeof ArticleJsonLd>[0]> = {}) {
  const html = renderToStaticMarkup(
    <ArticleJsonLd
      headline="H"
      description="D"
      datePublished="2026-05-04"
      url="https://theenglishhub.app/blog/x"
      {...props}
    />,
  )
  const json = /<script[^>]*>([\s\S]*?)<\/script>/.exec(html)?.[1] ?? '{}'
  return JSON.parse(
    json
      .replace(/&quot;/g, '"')
      .replace(/&#x27;/g, "'")
      .replace(/&amp;/g, '&'),
  )
}

describe('an Article names its author as what it actually is', () => {
  it('the site itself is an Organization, however it arrives', () => {
    // Both routes into the same name: passed explicitly, which is what every
    // blog post does, and omitted, which is the fallback the old comment was
    // written for. They must agree.
    expect(nodeFor({ authorName: 'The English Hub' }).author['@type']).toBe('Organization')
    expect(nodeFor({}).author['@type']).toBe('Organization')
    expect(nodeFor({ authorName: 'the english hub' }).author['@type']).toBe('Organization')
    expect(nodeFor({ authorName: '  The English Hub  ' }).author['@type']).toBe('Organization')
  })

  it('and carries a url, so the entity is identifiable', () => {
    expect(nodeFor({}).author.url).toBe('https://theenglishhub.app')
  })

  it('but a real named person is still a Person', () => {
    // The counterweight. Making every author an Organization would satisfy the
    // assertions above and would be wrong the moment a guest writer appears.
    const node = nodeFor({ authorName: 'Jane Doe', authorUrl: 'https://example.com/jane' })
    expect(node.author['@type']).toBe('Person')
    expect(node.author.name).toBe('Jane Doe')
    expect(node.author.url).toBe('https://example.com/jane')
  })

  it('and every post really does name the site, which is why this mattered', () => {
    // Vacuity guard with teeth: if the posts named real people, the defect
    // would never have fired and this file would be guarding nothing.
    const authors = new Set<string>()
    let posts = 0
    for (const f of readdirSync(POSTS).filter((f) => f.endsWith('.mdx'))) {
      const src = readFileSync(join(POSTS, f), 'utf8')
      const author = /^author:\s*'(.*)'$/m.exec(src)?.[1]
      if (author) {
        authors.add(author)
        posts++
      }
    }
    expect(posts).toBeGreaterThan(80)
    expect([...authors]).toEqual(['The English Hub'])
  })

  it('the publisher is unchanged and still an Organization', () => {
    // It always was. Asserted so that a future "simplify the author logic"
    // cannot quietly take the publisher with it.
    const node = nodeFor({})
    expect(node.publisher['@type']).toBe('Organization')
    expect(node.publisher.name).toBe('The English Hub')
  })
})
