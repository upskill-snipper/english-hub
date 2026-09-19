import { describe, it, expect } from 'vitest'
import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { buildShelf, groupShelf, classifyReadiness, CATEGORY_ORDER } from '@/lib/revision/shelf'
import { BOARDS } from '@/lib/board/board-config'
import { PLACEHOLDER_TEXT_SLUGS } from '@/lib/revision/placeholder-texts.generated'
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
 *
 * RESTATED 19 September 2026, AND MADE STRONGER. The invariant used to be
 * checked against the SLUG: if the text was in PLACEHOLDER_TEXT_SLUGS the card
 * had to say `none`. That was right only while every card linked to
 * /revision/texts/<slug>. Twenty-eight texts keep their guide in another tree -
 * the Edexcel anthology and poetry sets, the AQA Power and Conflict cluster,
 * the revision-notes library - and for those the slug-based test was asserting
 * the bug: it required the shelf to call an 856-line guide non-existent because
 * the canonical page was a placeholder.
 *
 * It is now checked against the DESTINATION, on disk. A card that claims a
 * guide must link to a page.tsx that exists and does not render the placeholder
 * component. That covers the old case (a canonical placeholder is still caught)
 * and the new one (a register entry that rots is caught too), and it cannot be
 * satisfied by a lie in either direction.
 */

/** The component a placeholder page renders. */
const PLACEHOLDER_MARKER = 'StubStudyGuide'

/** Is there a real, non-placeholder page behind this href? */
function realPageAt(href: string): boolean {
  const page = join(process.cwd(), 'src/app', href.replace(/^\//, ''), 'page.tsx')
  if (!existsSync(page)) return false
  return !readFileSync(page, 'utf8').includes(PLACEHOLDER_MARKER)
}

describe('the honesty invariant', () => {
  it('never claims a guide that is not at the other end of the link', () => {
    // The assertion that makes the shelf safe to show a student. Checked
    // against the destination on disk, not against the slug - see the docblock.
    const liars: string[] = []
    for (const board of BOARDS) {
      for (const entry of buildShelf(board.id)) {
        if (entry.readiness === 'none') continue
        if (!realPageAt(entry.href)) {
          liars.push(`${board.id}/${entry.text.slug} claimed "${entry.readiness}" at ${entry.href}`)
        }
      }
    }
    expect(liars).toEqual([])
  })

  it('and never hides a guide that is there', () => {
    // The other direction, which the slug-based version of this test used to
    // REQUIRE. A card saying `none` while a real guide sits at its own href is
    // the defect that stranded twenty-eight guides.
    const hidden: string[] = []
    for (const board of BOARDS) {
      for (const entry of buildShelf(board.id)) {
        if (entry.readiness !== 'none') continue
        if (realPageAt(entry.href)) {
          hidden.push(`${board.id}/${entry.text.slug} said "none" but ${entry.href} is real`)
        }
      }
    }
    expect(hidden).toEqual([])
  })

  it('finds placeholders to be honest about, so that is not vacuous', () => {
    // If both registers emptied, the test above would pass by proving nothing.
    expect(PLACEHOLDER_TEXT_SLUGS.size).toBeGreaterThan(15)
    const anyNone = BOARDS.flatMap((b) => buildShelf(b.id)).filter((e) => e.readiness === 'none')
    expect(anyNone.length).toBeGreaterThan(15)
  })

  it('still marks the real guides as real, so it is not honest by saying no to everything', () => {
    // AQA is the best-covered board. A model that returned `none` for
    // everything would satisfy the invariant above perfectly, so this is the
    // counterweight.
    //
    // THIS USED TO ASSERT THAT AQA HAD NO GAPS AT ALL, and it passed, because
    // the shelf was built from our own list of AQA texts. Reading AQA's
    // specification on 19 September 2026 added six texts we had never held -
    // DNA, A Taste of Honey, Telling Tales, Princess & The Hustler, Leave
    // Taking and My Name is Leon - and none of them has a guide. So the board
    // now has six honest gaps where it previously had a perfect score measured
    // against itself. The perfect score was the bug.
    const aqa = buildShelf('aqa')
    expect(aqa.filter((e) => e.readiness === 'full').length).toBeGreaterThanOrEqual(8)
    expect(aqa.filter((e) => e.readiness === 'none').length).toBeLessThanOrEqual(6)
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
    ['explorers-or-boys-messing-about', 'canonical page is a placeholder'],
    ['a-passage-to-africa', 'canonical page is a placeholder'],
    ['disabled', 'no canonical page at all'],
    ['war-photographer', 'no canonical page at all'],
  ])('%s is partial, because the guide is in another tree (%s)', (slug) => {
    // These four were asserted as `none` until 19 September 2026. Each has a
    // real guide of 344 to 856 lines somewhere else, so `none` was the wrong
    // answer and the shelf was repeating it to students. `partial` is the
    // honest label: a real guide, but a single page rather than a sectioned one.
    expect(classifyReadiness(slug).readiness).toBe('partial')
    expect(classifyReadiness(slug).sections).toBe(0)
  })

  it.each([
    ['night', 'a placeholder with no guide anywhere'],
    ['the-necklace', 'a placeholder with no guide anywhere'],
  ])('%s is still none (%s)', (slug) => {
    // The counterweight. If everything became `partial` the invariant above
    // would be satisfied by saying yes to everything.
    expect(classifyReadiness(slug).readiness).toBe('none')
  })
})

describe('every board', () => {
  it('builds a shelf without throwing', () => {
    for (const board of BOARDS) {
      expect(() => buildShelf(board.id), board.id).not.toThrow()
    }
  })

  it.each(['cambridge-0500', 'cambridge-0990'] as const)(
    '%s has no set texts, and that is the specification, not a gap',
    (board) => {
      // VERIFIED 19 September 2026 against both syllabuses, not assumed. Neither
      // prescribes any literary work, anthology or named author: reading content
      // is defined by genre and period only, the passages are printed on the
      // question paper insert, and Cambridge explicitly delegates text choice to
      // the centre. So an empty shelf here is correct and the page must not
      // present it as something we have failed to build.
      expect(buildShelf(board)).toEqual([])
    },
  )

  it('ks3 still has no set texts', () => {
    // Different reason, and not yet verified. England's National Curriculum is
    // understood to name categories rather than titles, leaving the choice to
    // the school, but that has not been read from the programme of study. It is
    // grouped separately from the two Cambridge specs so the verified negative
    // and the unverified one are not confused.
    expect(buildShelf('ks3')).toEqual([])
  })

  it('cambridge-0475 is no longer empty', () => {
    // It used to be, and that was the defect. 0475 prescribes set texts and we
    // held rows and finished guides for several of them tagged to other boards,
    // so a student in the Gulf - most of this board's cohort - was shown that we
    // had no idea what they study. Twelve whole texts now, for the 2027 series.
    //
    // The 45 prescribed poems and 10 short stories are deliberately NOT here:
    // Paper 1 Section A is a choice of three alternative fifteen-poem sets and a
    // candidate answers on one, which SetText cannot express. Listing all 45
    // would tell a student to revise three times what they do. They are held in
    // src/lib/board/cambridge-0475.ts until a surface can show the choice.
    expect(buildShelf('cambridge-0475').length).toBeGreaterThanOrEqual(12)
  })

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
