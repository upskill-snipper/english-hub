import { describe, it, expect } from 'vitest'
import {
  LITERATURE_4ET1,
  LITERATURE_4ET1_SOURCE,
  MODERN_PROSE,
  MODERN_DRAMA,
  LITERARY_HERITAGE,
  literature4et1Slugs,
} from '@/lib/board/edexcel-igcse-literature'
import { anthologySlugsForBoard } from '@/lib/board/edexcel-igcse-anthology'
import { SET_TEXTS, getSetTextsForBoard } from '@/lib/board/set-texts'

/**
 * The Edexcel International GCSE Literature shelf against the specification.
 *
 * WHAT WAS WRONG, found 19 September 2026 by reading Issue 3 of the 4ET1
 * specification. The tagging was wrong in three directions at once.
 *
 * EIGHT prescribed texts were missing from the data entirely, so no 4ET1
 * student could see them listed as an option for their own paper: The Whale
 * Rider, The Joy Luck Club, Kindertransport, Death and the King's Horseman,
 * The Scarlet Letter, and both 2024 additions, Klara and the Sun and Western
 * Lane.
 *
 * THREE that we do hold, with real guides - The Merchant of Venice, Pride and
 * Prejudice, Great Expectations - were tagged to four UK boards and not to the
 * international one that also prescribes them.
 *
 * SIX were claimed for 4ET1 that it does not prescribe. Much Ado About Nothing
 * is not on any 4ET1 list. The other five - Disabled, An Unknown Girl, The
 * Bright Lights of Sarajevo, Still I Rise and Out, Out- - are anthology Part 2,
 * which belongs to English Language A.
 *
 * WHY THE SHAPE OF THE QUALIFICATION MATTERS, because that is where the errors
 * came from. 4ET1 does not look like a UK GCSE. There is no separate
 * Shakespeare component, and a candidate can avoid Shakespeare's plays entirely
 * by taking Austen, Dickens or Hawthorne as the literary heritage text. Assuming
 * the UK shape is what produced a Shakespeare tag on a play 4ET1 never sets.
 *
 * THE INVARIANT. The Literature shelf must hold the 34 texts the specification
 * prescribes: 16 anthology poems, 7 modern prose, 5 modern drama, 6 literary
 * heritage. Not 33, and not 35. Both directions are checked, because a missing
 * text is invisible to the student and an extra one is a false claim about
 * their exam.
 */

describe('the source is recorded precisely enough to re-check', () => {
  it('names the issue and the variant', () => {
    expect(LITERATURE_4ET1_SOURCE.version).toBe('Issue 3, August 2025')
    expect(LITERATURE_4ET1_SOURCE.isbn).toBe('978 1 446 95435 5')
    expect(LITERATURE_4ET1_SOURCE.readOn).toBe('2026-09-19')
    // Pearson publishes a separate modular specification. These rows are not
    // interchangeable with it and the file has to say which one it is.
    expect(LITERATURE_4ET1_SOURCE.variant).toBe('linear')
  })
})

describe('the register matches the specification', () => {
  it('is three choice lists of seven, five and six', () => {
    expect(LITERATURE_4ET1.map((c) => c.entries.length)).toEqual([7, 5, 6])
  })

  it('has the candidate take exactly one from each', () => {
    for (const choice of LITERATURE_4ET1) expect(choice.choose).toBe(1)
  })

  it('dates the two texts that were not assessable before 2026', () => {
    // Klara and the Sun and Western Lane are first teaching September 2024,
    // first assessment May 2026. Showing them to a 2025 resit candidate as an
    // option would be wrong.
    const dated = MODERN_PROSE.entries.filter((e) => e.firstAssessment)
    expect(dated.map((e) => e.slug).sort()).toEqual(['klara-and-the-sun', 'western-lane'])
    for (const entry of dated) expect(entry.firstAssessment).toBe('May 2026')
  })

  it('lets a candidate avoid Shakespeare entirely', () => {
    // Not a curiosity. It is the structural fact that makes 4ET1 unlike a UK
    // GCSE, and assuming otherwise is what produced the mis-tagging.
    const nonShakespeare = LITERARY_HERITAGE.entries.filter(
      (e) => e.author !== 'William Shakespeare',
    )
    expect(nonShakespeare.map((e) => e.slug).sort()).toEqual([
      'great-expectations',
      'pride-and-prejudice',
      'the-scarlet-letter',
    ])
  })

  it('uses each slug exactly once', () => {
    const slugs = literature4et1Slugs()
    expect(new Set(slugs).size).toBe(slugs.length)
  })
})

describe('every prescribed whole text is in the data and on the shelf', () => {
  const onShelf = new Set(getSetTextsForBoard('edexcel-igcse').map((t) => t.slug))

  it.each(literature4et1Slugs())('%s has a row tagged to edexcel-igcse', (slug) => {
    const text = SET_TEXTS.find((t) => t.slug === slug)
    expect(text, `${slug} is prescribed but absent from SET_TEXTS`).toBeTruthy()
    expect(onShelf.has(slug), `${slug} is not on the Literature shelf`).toBe(true)
  })

  it.each([
    'the-whale-rider',
    'the-joy-luck-club',
    'klara-and-the-sun',
    'western-lane',
    'kindertransport',
    'death-and-the-kings-horseman',
    'the-scarlet-letter',
  ])('%s was one of the seven missing entirely', (slug) => {
    // Named individually. A count would pass just as happily with the wrong
    // seven.
    expect(SET_TEXTS.some((t) => t.slug === slug)).toBe(true)
  })

  it.each(['the-merchant-of-venice', 'pride-and-prejudice', 'great-expectations'])(
    '%s is tagged to the international board as well as the UK ones',
    (slug) => {
      const text = SET_TEXTS.find((t) => t.slug === slug)
      expect(text?.boards).toContain('edexcel-igcse')
      // And it must not have LOST its UK tags in the process, which is the
      // obvious way to break this while making the assertion above pass.
      expect(text?.boards).toContain('aqa')
      expect(text?.boards).toContain('edexcel')
    },
  )
})

describe('nothing is claimed for 4ET1 that it does not prescribe', () => {
  const PRESCRIBED = new Set([...literature4et1Slugs(), ...anthologySlugsForBoard('edexcel-igcse')])

  it('the shelf is exactly the specification, in both directions', () => {
    const shelf = getSetTextsForBoard('edexcel-igcse').map((t) => t.slug)
    const extra = shelf.filter((s) => !PRESCRIBED.has(s))
    const missing = [...PRESCRIBED].filter((s) => !shelf.includes(s))
    expect({ extra, missing }).toEqual({ extra: [], missing: [] })
  })

  it('is thirty-four texts', () => {
    // 16 anthology poems + 7 prose + 5 drama + 6 heritage.
    expect(PRESCRIBED.size).toBe(34)
    expect(getSetTextsForBoard('edexcel-igcse')).toHaveLength(34)
  })

  it.each(['much-ado-about-nothing'])('%s is no longer claimed for 4ET1', (slug) => {
    const text = SET_TEXTS.find((t) => t.slug === slug)
    expect(text?.boards).not.toContain('edexcel-igcse')
    // It is still a real AQA and Edexcel GCSE text. Dropping it from the data
    // rather than from the one wrong tag would be a worse fix.
    expect(text?.boards).toContain('aqa')
  })

  it.each([
    'disabled',
    'an-unknown-girl',
    'the-bright-lights-of-sarajevo',
    'still-i-rise',
    'out-out',
  ])('%s is Language A only, because anthology Part 2 is not on the Literature paper', (slug) => {
    const text = SET_TEXTS.find((t) => t.slug === slug)
    expect(text?.boards).toEqual(['edexcel-igcse-lang'])
  })
})
