import { describe, it, expect } from 'vitest'
import { readFileSync, existsSync } from 'node:fs'
import { join } from 'node:path'
import { SET_TEXTS, getSetText } from '@/lib/board/set-texts'
import { PLACEHOLDER_TEXT_SLUGS } from '@/lib/revision/placeholder-texts.generated'
import { GUIDE_LOCATIONS } from '@/lib/revision/guide-locations.generated'
import { guideElsewhere } from '@/lib/revision/guide-href'
import { stubCanonical } from '@/app/revision/texts/_components/stub-study-guide'

/**
 * A placeholder never says "in production" about a guide that is written.
 *
 * THE DEFECT, found 26 September 2026. StubStudyGuide printed "Study guide in
 * production" unconditionally. Sixteen of the pages that render it are for
 * texts whose guide was finished and live on another route: the nine Language A
 * anthology extracts at /igcse/edexcel-lang/anthology, four Part 2 poems at
 * /igcse/edexcel/poetry, and The Door, The Yellow Wallpaper and When Greek Meets
 * Greek in the revision-notes library. A student who reached one by search was
 * told the guide did not exist yet, and offered two links that led away from
 * it. Every page was also self-canonical and in the sitemap, so it competed in
 * search with the guide it was apologising for.
 *
 * The shelf and every internal link already went past these pages to the
 * guide (textGuideHref). The placeholder itself was the one surface that did
 * not know.
 *
 * The rule now: when `guideElsewhere` finds the guide, the placeholder links
 * to it instead of the notice, canonicalises to it, and leaves the sitemap.
 */

const ROOT = process.cwd()
const TEXTS = join(ROOT, 'src/app/revision/texts')
const BASE = 'https://theenglishhub.app'
const PEARSON = readFileSync(
  join(ROOT, 'src/app/revision/poetry/pearson-igcse/[slug]/page.tsx'),
  'utf8',
)

const stripComments = (s: string) => s.replace(/\/\*[\s\S]*?\*\//g, '').replace(/^\s*\/\/.*$/gm, '')

/** The page file a site path is served from, when it is a static route. */
function pageFor(href: string): string {
  return join(ROOT, 'src/app', href, 'page.tsx')
}

const TEXT_PLACEHOLDERS = [...PLACEHOLDER_TEXT_SLUGS]
const SIGNPOSTS = TEXT_PLACEHOLDERS.filter((slug) => guideElsewhere(slug) !== null)

describe('guideElsewhere', () => {
  it('finds nothing for a text with no guide anywhere', () => {
    expect(guideElsewhere('no-such-text')).toBeNull()
  })

  it("prefers the location on the text's own board", () => {
    // Chosen from the data, not named, so this still tests something if the
    // one text with two guides today gains or loses one.
    const shared = [...GUIDE_LOCATIONS].find(
      ([, locs]) => locs.length > 1 && new Set(locs.map((l) => l.board)).size > 1,
    )
    expect(shared, 'no text has guides on two boards any more').toBeDefined()
    const [slug, locs] = shared!
    for (const loc of locs) {
      expect(guideElsewhere(slug, [String(loc.board)])?.href).toBe(loc.href)
    }
    // No board match falls back to the first, as textGuideHref does.
    expect(guideElsewhere(slug, ['ks3'])?.href).toBe(locs[0].href)
  })
})

describe('the placeholders whose guide is written elsewhere', () => {
  it('are the texts we know about, not an empty set', () => {
    // What this file would report if guideElsewhere always returned null: every
    // assertion below would pass over nothing. Sixteen today, less the ones
    // that gain a real page of their own.
    expect(SIGNPOSTS.length).toBeGreaterThanOrEqual(12)
    expect(SIGNPOSTS).toContain('a-passage-to-africa')
    expect(SIGNPOSTS).toContain('the-yellow-wallpaper')
  })

  it.each(SIGNPOSTS)('%s points at a real guide, not another placeholder', (slug) => {
    const { href } = guideElsewhere(slug, getSetText(slug)?.boards)!
    expect(href.startsWith('/revision/texts/'), `${slug} points back into the placeholders`).toBe(
      false,
    )
    const page = pageFor(href)
    expect(existsSync(page), `${slug}: ${href} has no page.tsx`).toBe(true)
    expect(readFileSync(page, 'utf8')).not.toMatch(/StubStudyGuide/)
  })

  it.each(SIGNPOSTS)('%s canonicalises to the guide', (slug) => {
    const { href } = guideElsewhere(slug, getSetText(slug)?.boards)!
    expect(stubCanonical(slug, `/revision/texts/${slug}`)).toBe(`${BASE}${href}`)
  })

  it.each(SIGNPOSTS)('%s does not describe itself as unwritten', (slug) => {
    const src = readFileSync(join(TEXTS, slug, 'page.tsx'), 'utf8')
    const description = /description:\s*(['"`])((?:\\.|(?!\1).)*)\1/.exec(src)?.[2] ?? ''
    expect(description, `${slug} has no description`).not.toBe('')
    expect(description).not.toMatch(/in production|\bstub\b/i)
  })
})

describe('every placeholder page', () => {
  it.each(TEXT_PLACEHOLDERS)('%s takes its canonical from stubCanonical', (slug) => {
    // Hard-coding the self-canonical is how a guide written later on another
    // route leaves this page ranking against it. Through the helper, writing
    // the guide flips the canonical with no edit here.
    const src = readFileSync(join(TEXTS, slug, 'page.tsx'), 'utf8')
    expect(src).toMatch(/canonical:\s*stubCanonical\(SLUG,/)
  })

  it.each(TEXT_PLACEHOLDERS)('%s claims 4EA1 only if the text is on 4EA1', (slug) => {
    // Four of these descriptions called the text part of a "4EA1 Section C
    // prose anthology". The anthology has no Section C, and none of the four
    // is in it.
    const src = readFileSync(join(TEXTS, slug, 'page.tsx'), 'utf8')
    const description = /description:\s*(['"`])((?:\\.|(?!\1).)*)\1/.exec(src)?.[2] ?? ''
    const onLangA = getSetText(slug)?.boards.includes('edexcel-igcse-lang') ?? false
    if (!onLangA) expect(description).not.toMatch(/4EA1|Language A/)
    expect(description).not.toMatch(/Section C/)
  })

  it('reach the Pearson route through the same helper', () => {
    // The four Part 2 poems that route renders as placeholders have their
    // guides under /igcse/edexcel/poetry. Sarajevo is the one guide on that
    // route and keeps its own canonical.
    const code = stripComments(PEARSON)
    expect(code).toMatch(/stubCanonical\(text\.slug,/)
    expect(code).toMatch(/text\.slug === 'the-bright-lights-of-sarajevo'/)
  })
})

// What the page renders is tested in a-stub-claims-only-its-own-exam.test.tsx,
// which renders the component. This file holds the data and metadata rules.

describe('the set texts this rule covers', () => {
  it('are all real set texts', () => {
    const known = new Set(SET_TEXTS.map((t) => t.slug))
    for (const slug of SIGNPOSTS) expect(known.has(slug), slug).toBe(true)
  })
})
