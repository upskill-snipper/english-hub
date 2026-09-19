import { describe, it, expect } from 'vitest'
import { readFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'
import matter from 'gray-matter'

/**
 * Forty-two posts with nine links to anything that sells (SEO-5).
 *
 * THE DEFECT. Across all 42 English post bodies there were about nine links to
 * /pricing, /marking, /teachers, /students, /toolkit or registration combined.
 * The template added exactly one contextual onward link per post, and its
 * destination set never included /marking/submit or the examiner tool - so a
 * reader who had just finished an explanation of how AO2 is marked was offered
 * a revision hub and nothing else. The keyword map's own section calls this
 * linking audit "worth more than the next ten articles".
 *
 * Every post was also undated after publication: `posts.ts` had no `updated`
 * field, so ArticleJsonLd emitted `datePublished` and no `dateModified`, and
 * every article read to Google and to a head of department as a May 2026 page.
 *
 * WHAT WAS DONE AND WHAT WAS NOT. The mechanism is here: an `updated` field
 * that flows into both the JSON-LD and a visible line, one money-page offer
 * where the subject makes it the obvious next action, and three-to-five
 * descriptive internal links per post from the destinations the post already
 * matched. The hand-written prose pass - a "Spec check" line wherever a tariff
 * is asserted, a "* Source:" footnote naming the specification - is NOT done,
 * and is recorded rather than half-done: those are editorial judgements about
 * 42 individual articles, and done mechanically they produce worse writing than
 * leaving them alone.
 */

const ROOT = process.cwd()
const PAGE = readFileSync(join(ROOT, 'src/app/blog/[slug]/page.tsx'), 'utf8')
const POSTS = readFileSync(join(ROOT, 'src/lib/blog/posts.ts'), 'utf8')

/** Source with comments removed, so an assertion cannot match its own docblock. */
const code = (src: string) => src.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/.*/g, '')

const ENGLISH_POSTS = readdirSync(join(ROOT, 'content/blog'))
  .filter((f) => f.endsWith('.mdx') && !/\.(ar|es)\.mdx$/.test(f))
  .map((f) => {
    const { data } = matter(readFileSync(join(ROOT, 'content/blog', f), 'utf8'))
    return {
      slug: String(data.slug ?? f),
      tags: ((data.tags as string[]) ?? []).map((t) => String(t).toLowerCase()),
      draft: data.draft === true,
    }
  })

describe('the corpus', () => {
  it('is the 42 English post FILES this item is about', () => {
    // Files on disk, not published posts. Since 20 September six of these are
    // held back with `draft: true` and serve nobody, so 36 are live. Both
    // numbers were "42" until then, and one number meaning two things is how a
    // guard stops guarding without anybody noticing.
    expect(ENGLISH_POSTS.length).toBe(42)
  })

  it('and six of them are held back, so the live count is 36', () => {
    const held = ENGLISH_POSTS.filter((p) => p.draft)
    expect(held.length, 'a held-back post has been republished or deleted').toBe(6)
    expect(ENGLISH_POSTS.length - held.length).toBe(36)
  })
})

// ─── The money-page offer ───────────────────────────────────────────────────

describe('the money-page offer', () => {
  it('exists at all, which it did not', () => {
    expect(code(PAGE)).toContain('resolveMoneyDestination')
    expect(code(PAGE)).toContain("href: '/marking/submit'")
    expect(code(PAGE)).toContain("href: '/toolkit/examiner'")
  })

  it('points teachers at a route that exists', () => {
    // The item named /teachers/examiner-marking-tool, which has never been
    // built. Linking to it would have put a 404 at the foot of every teacher
    // post - a fix that reads as a fix and is worse than the defect.
    expect(code(PAGE)).not.toContain('/teachers/examiner-marking-tool')
  })

  it('is additive, not a replacement for the contextual link', () => {
    // The onward destination's own comment says there is "no blanket advert".
    // Swapping a relevant revision page for a sales page on every post trades
    // the thing that makes the blog worth reading for a click.
    expect(code(PAGE)).toContain('resolveOnwardDestination(post)')
    expect(code(PAGE)).toContain('resolveMoneyDestination(post)')
  })

  it('offers nothing on a parent post', () => {
    // A sales box under "how to help your child" reads badly, and the rule is
    // checked before the marking rules so a parent post tagged 'revision'
    // cannot fall through to one.
    const fn = code(PAGE).slice(code(PAGE).indexOf('function resolveMoneyDestination'))
    const parentRule = fn.indexOf("tagMentions('parent')")
    const markRule = fn.indexOf('MONEY.markEssay')
    expect(parentRule).toBeGreaterThan(-1)
    expect(parentRule).toBeLessThan(markRule)
  })

  it('matches a tag by substring, not by equality', () => {
    // Exact matching missed `understanding-ao1-in-gcse-english-language`,
    // whose tag is 'gcse english language ao1'. A post whose entire subject is
    // an assessment objective was offered nothing.
    const post = ENGLISH_POSTS.find((p) => p.slug.includes('understanding-ao1'))
    expect(post, 'the AO1 post has gone').toBeTruthy()
    expect(post!.tags.some((t) => t === 'ao1')).toBe(false)
    expect(post!.tags.some((t) => t.includes('ao1'))).toBe(true)
    expect(code(PAGE)).toContain('tag.includes(needle)')
  })
})

// ─── Internal links ─────────────────────────────────────────────────────────

describe('the internal links', () => {
  it('offers more than the single destination it used to', () => {
    expect(code(PAGE)).toContain('matchingDestinations')
    expect(code(PAGE)).toContain('alsoRelevant')
  })

  it('does not repeat the link it has already shown', () => {
    expect(code(PAGE)).toMatch(/filter\(\(d\) => d !== onward && d\.href !== money\?\.href\)/)
  })

  it('caps the list, so a heavily-tagged post does not become a link farm', () => {
    expect(code(PAGE)).toMatch(/\.slice\(0, 4\)/)
  })

  it('keeps the first match identical to what the old function returned', () => {
    // The refactor must not silently re-rank anybody's onward destination.
    const fn = code(PAGE).slice(code(PAGE).indexOf('function resolveOnwardDestination'))
    expect(fn.slice(0, 300)).toContain('const [first] = matchingDestinations(post)')
    expect(fn.slice(0, 300)).toContain('if (first) return first')
  })
})

// ─── Dates ──────────────────────────────────────────────────────────────────

describe('when a post was last revised', () => {
  it('can be recorded at all', () => {
    expect(code(POSTS)).toMatch(/updated\?: string/)
  })

  it('is not defaulted to the publication date', () => {
    // dateModified equal to datePublished on every article asserts a revision
    // that never happened. An absent one at least says nothing untrue.
    expect(code(POSTS)).toContain('...(data.updated ? { updated: toIsoDate(data.updated) } : {})')
    expect(code(POSTS)).not.toMatch(/updated:\s*toIsoDate\(data\.updated \?\? data\.date\)/)
  })

  it('reaches the Article JSON-LD', () => {
    expect(code(PAGE)).toContain('dateModified={post.updated}')
  })

  it('is visible on the page, not only in the markup', () => {
    // A reader deciding whether a 2026 exam-technique post still applies needs
    // the revision date on the page.
    expect(code(PAGE)).toContain("tSync('blog.updated_on', locale)")
    expect(code(PAGE)).toContain('<time dateTime={post.updated}>')
  })

  it('has the label in all three languages', () => {
    const dict = readFileSync(join(ROOT, 'src/lib/i18n/dictionary.ts'), 'utf8')
    const at = dict.indexOf("'blog.updated_on'")
    expect(at).toBeGreaterThan(-1)
    const entry = dict.slice(at, at + 200)
    for (const locale of ['en:', 'ar:', 'es:']) expect(entry).toContain(locale)
  })
})
