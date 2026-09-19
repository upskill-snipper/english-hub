import { describe, it, expect } from 'vitest'
import { buildShelf, groupShelf, classifyReadiness, CATEGORY_ORDER } from '@/lib/revision/shelf'
import { BOARDS } from '@/lib/board/board-config'
import { PLACEHOLDER_TEXT_SLUGS } from '@/lib/revision/placeholder-texts.generated'
import { isStubSetText } from '@/lib/seo/set-text-stubs'
import { SET_TEXTS } from '@/lib/board/set-texts'

/**
 * The board shelf, and the one thing it must never do.
 *
 * WHY IT EXISTS. Choosing a board used to land every student on /revision, a
 * board-agnostic hub. There was no page anywhere that answered "what am I
 * actually studying?". This is that page.
 *
 * WHY IT HAS TO BE HONEST. Of 73 set texts, 33 have a real guide, 20 render a
 * "study guide in production" placeholder and 20 have no page of their own. On
 * Edexcel IGCSE Literature that is 9 real out of 17. A shelf that presents all
 * seventeen as equal would send nearly half its clicks into an apology, from a
 * page whose entire job is to look authoritative.
 *
 * So the invariant below is the point of the file: a card may never claim a
 * guide exists when the destination is a placeholder. Everything else here is
 * scaffolding around that one assertion.
 */

describe('the honesty invariant', () => {
  it('never marks a placeholder as having a guide', () => {
    // The assertion that makes the shelf safe to show a student.
    const liars: string[] = []
    for (const board of BOARDS) {
      for (const entry of buildShelf(board.id)) {
        const isPlaceholder =
          PLACEHOLDER_TEXT_SLUGS.has(entry.text.slug) || isStubSetText(entry.text.slug)
        if (isPlaceholder && entry.readiness !== 'none') {
          liars.push(`${board.id}/${entry.text.slug} claimed "${entry.readiness}"`)
        }
      }
    }
    expect(liars).toEqual([])
  })

  it('finds placeholders to be honest about, so that is not vacuous', () => {
    // If both registers emptied, the test above would pass by proving nothing.
    expect(PLACEHOLDER_TEXT_SLUGS.size).toBeGreaterThan(15)
    const anyNone = BOARDS.flatMap((b) => buildShelf(b.id)).filter((e) => e.readiness === 'none')
    expect(anyNone.length).toBeGreaterThan(15)
  })

  it('still marks the real guides as real, so it is not honest by saying no to everything', () => {
    // AQA is the best-covered board: a page for all twenty texts, and nine of
    // them with three or more sections. A model that returned `none` for
    // everything would satisfy the invariant above perfectly, so this is the
    // counterweight.
    const aqa = buildShelf('aqa')
    expect(aqa.filter((e) => e.readiness === 'full').length).toBeGreaterThanOrEqual(8)
    expect(aqa.filter((e) => e.readiness === 'none')).toEqual([])
  })

  it('records the depth of coverage, which is not the same as having a page', () => {
    // Worth pinning, because "every AQA text has a guide" and "every AQA text
    // has a DEEP guide" are different claims and only the first is true. Eleven
    // of AQA's twenty are a single page with no sub-sections. If that ratio
    // improves, this assertion should be raised deliberately rather than
    // quietly drifting.
    const aqa = buildShelf('aqa')
    expect(aqa.filter((e) => e.readiness === 'partial').length).toBeGreaterThanOrEqual(8)
  })
})

describe('classifyReadiness', () => {
  it.each([
    ['macbeth', 'full'],
    ['an-inspector-calls', 'full'],
    ['jekyll-and-hyde', 'full'],
  ])('%s has a full guide', (slug, expected) => {
    expect(classifyReadiness(slug).readiness).toBe(expected)
  })

  it('calls a single-page guide partial rather than full', () => {
    // Much Ado has a real page of its own and no sub-pages. Calling that a full
    // guide would overstate it; calling it nothing would understate it.
    expect(classifyReadiness('much-ado-about-nothing').readiness).toBe('partial')
  })

  it.each([
    ['explorers-or-boys-messing-about', 'a placeholder page'],
    ['a-passage-to-africa', 'a placeholder page'],
    ['disabled', 'no page of its own'],
    ['war-photographer', 'no page of its own'],
  ])('%s is none (%s)', (slug) => {
    expect(classifyReadiness(slug).readiness).toBe('none')
    expect(classifyReadiness(slug).sections).toBe(0)
  })
})

describe('every board', () => {
  it('builds a shelf without throwing', () => {
    for (const board of BOARDS) {
      expect(() => buildShelf(board.id), board.id).not.toThrow()
    }
  })

  it.each(['ks3', 'cambridge-0500', 'cambridge-0990', 'cambridge-0475'] as const)(
    '%s has no set texts, which the page handles rather than rendering an empty grid',
    (board) => {
      // Four of fifteen prescribe nothing. For the two Cambridge language specs
      // that is correct by design. The page must not present it as a gap.
      expect(buildShelf(board)).toEqual([])
    },
  )

  it('covers the boards that do have texts', () => {
    expect(buildShelf('aqa').length).toBeGreaterThan(15)
    expect(buildShelf('edexcel-igcse').length).toBeGreaterThan(10)
  })
})

describe('groupShelf', () => {
  const groups = groupShelf(buildShelf('edexcel-igcse'))

  it('drops empty categories rather than rendering an empty heading', () => {
    expect(groups.every((g) => g.entries.length > 0)).toBe(true)
  })

  it('keeps the specification order', () => {
    const order = groups.map((g) => g.category)
    const expected = CATEGORY_ORDER.filter((c) => order.includes(c))
    expect(order).toEqual(expected)
  })

  it('puts what we can teach above what we cannot', () => {
    // A student scanning for tonight's revision should not read past four
    // placeholders to reach the guide.
    for (const group of groups) {
      const rank = { full: 0, partial: 1, none: 2 } as const
      const ranks = group.entries.map((e) => rank[e.readiness])
      expect(
        [...ranks].sort((a, b) => a - b),
        group.category,
      ).toEqual(ranks)
    }
  })
})

describe('the full-text flag', () => {
  it('is set only where we publish the complete work', () => {
    // Only two texts have a `read` route today, both public domain. The flag
    // drives a visible "Full text included" badge, so a false positive is a
    // promise the page cannot keep.
    const withFullText = SET_TEXTS.filter((t) =>
      buildShelf('aqa').some((e) => e.hasFullText && e.text.slug === t.slug),
    )
    expect(withFullText.map((t) => t.slug).sort()).toEqual(['frankenstein', 'macbeth'])
  })
})
