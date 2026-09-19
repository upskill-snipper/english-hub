import { describe, it, expect } from 'vitest'
import {
  ANTHOLOGY,
  ANTHOLOGY_SOURCE,
  anthologyEntry,
  anthologySlugsForBoard,
} from '@/lib/board/edexcel-igcse-anthology'
import { SET_TEXTS, getSetTextsForBoard } from '@/lib/board/set-texts'

/**
 * The set-text data against the anthology it claims to describe.
 *
 * WHAT WAS WRONG, found 19 September 2026 by reading the booklet. The Pearson
 * Edexcel International GCSE English Anthology is one document serving two
 * qualifications, and its parts are not shared: Parts 1 and 2 are English
 * Language A (4EA1), Part 3 is English Literature (4ET1), and the
 * specification says Part 3 is expressly not part of 4EA1.
 *
 * We had that backwards for every single one of the sixteen Part 3 poems.
 * Nine were tagged to Language, so students were being shown poems their paper
 * will never ask about. The other seven were not in the data at all - and four
 * of those (La Belle Dame sans Merci, The Tyger, Half-caste, Remember) had a
 * finished guide sitting published and unreachable, because nothing in the
 * data said the poem existed.
 *
 * We were also claiming thirty-five anthology texts for 4EA1. The anthology
 * prescribes twenty.
 *
 * WHY THE TEST IS SHAPED LIKE THIS. The data and the register could drift apart
 * in either direction, and only one of those is visible to a reader:
 *
 *   - a text in the anthology but missing from SET_TEXTS is INVISIBLE. That is
 *     how four written guides went unread. It fails loudly here.
 *   - a text tagged to a board whose anthology part does not contain it is a
 *     FALSE CLAIM about a child's exam. It fails loudly here too.
 *
 * The register itself is checked against the printed page number, so a row
 * edited without re-reading the booklet stands out.
 */

describe('the source is recorded precisely enough to re-check', () => {
  it('names the issue, not just the ISBN', () => {
    // The ISBN is stable across issues, so it identifies the anthology but not
    // the version. Pearson also overwrites asset paths in place and leaves
    // stale filenames, so the URL cannot be trusted to say which issue it is.
    expect(ANTHOLOGY_SOURCE.version).toBe('Issue 8, February 2026')
    expect(ANTHOLOGY_SOURCE.isbn).toBe('978 1 446 93108 0')
    expect(ANTHOLOGY_SOURCE.readOn).toBe('2026-09-19')
    expect(ANTHOLOGY_SOURCE.url).toContain('qualifications.pearson.com')
  })
})

describe('the register matches the printed booklet', () => {
  it('has three parts, split across the two qualifications', () => {
    expect(ANTHOLOGY.map((p) => p.part)).toEqual([1, 2, 3])
    expect(ANTHOLOGY.map((p) => p.board)).toEqual([
      'edexcel-igcse-lang',
      'edexcel-igcse-lang',
      'edexcel-igcse',
    ])
  })

  it('holds ten, ten and sixteen texts', () => {
    expect(ANTHOLOGY.map((p) => p.entries.length)).toEqual([10, 10, 16])
  })

  it('prescribes twenty texts for Language A and sixteen for Literature', () => {
    // The headline correction. We were claiming thirty-five for Language A.
    expect(anthologySlugsForBoard('edexcel-igcse-lang')).toHaveLength(20)
    expect(anthologySlugsForBoard('edexcel-igcse')).toHaveLength(16)
  })

  it('runs in printed page order within each part', () => {
    // Cheap, and it catches a row pasted into the wrong place - the most
    // likely way this file gets edited wrongly.
    for (const part of ANTHOLOGY) {
      const pages = part.entries.map((e) => e.page)
      expect(
        [...pages].sort((a, b) => a - b),
        `part ${part.part}`,
      ).toEqual(pages)
    }
  })

  it('uses each slug exactly once across the whole booklet', () => {
    const slugs = ANTHOLOGY.flatMap((p) => p.entries.map((e) => e.slug))
    expect(new Set(slugs).size).toBe(slugs.length)
  })
})

describe('every anthology text is in the set-text data', () => {
  const known = new Set(SET_TEXTS.map((t) => t.slug))

  it.each(ANTHOLOGY.flatMap((p) => p.entries.map((e) => [e.slug, p.part] as const)))(
    '%s (part %s) has a row',
    (slug) => {
      // A prescribed text with no row is invisible: no shelf, no index, no
      // search. Four written guides were lost this way.
      expect(known.has(slug), `${slug} is prescribed but absent from SET_TEXTS`).toBe(true)
    },
  )
})

describe('every anthology text is tagged to the board that examines it', () => {
  it.each(ANTHOLOGY.flatMap((p) => p.entries.map((e) => [e.slug, p.board] as const)))(
    '%s is on %s',
    (slug, board) => {
      const text = SET_TEXTS.find((t) => t.slug === slug)
      expect(text?.boards, `${slug} missing ${board}`).toContain(board)
    },
  )

  it('and no Part 3 poem is claimed for English Language A', () => {
    // The specific defect. The specification is explicit that Part 3 is not
    // part of 4EA1, and we had all sixteen the wrong way round.
    const part3 = ANTHOLOGY.find((p) => p.part === 3)
    const wrong = (part3?.entries ?? [])
      .map((e) => SET_TEXTS.find((t) => t.slug === e.slug))
      .filter((t) => t?.boards.includes('edexcel-igcse-lang'))
      .map((t) => t?.slug)
    expect(wrong).toEqual([])
  })

  it('and the sixteen really do reach the Literature shelf', () => {
    // The end-to-end form. The tagging above is only worth anything if
    // getSetTextsForBoard actually returns them.
    const onShelf = new Set(getSetTextsForBoard('edexcel-igcse').map((t) => t.slug))
    for (const slug of anthologySlugsForBoard('edexcel-igcse')) {
      expect(onShelf.has(slug), `${slug} is not on the Literature shelf`).toBe(true)
    }
  })
})

describe('the texts whose prescribed version is not the free one', () => {
  // A student revising the original answers on a text the examiner is not
  // reading, and for The Necklace we would also be publishing someone else's
  // copyright translation.
  it.each([
    ['explorers-or-boys-messing-about', 'adapted'],
    ['young-and-dyslexic', 'adapted'],
    ['the-necklace', 'translation'],
  ])('%s is recorded as %s', (slug, kind) => {
    const entry = anthologyEntry(slug)
    expect(entry?.altered).toBe(kind)
    expect(entry?.alteredNote, `${slug} says it is altered but not how`).toBeTruthy()
  })

  it('names the translator for The Necklace, because the free translations are not it', () => {
    expect(anthologyEntry('the-necklace')?.alteredNote).toContain('David Coward')
  })

  it('marks the eight extracts as extracts', () => {
    // Every Part 1 text with a "From" prefix in the booklet is an extract.
    const part1 = ANTHOLOGY.find((p) => p.part === 1)
    const fromPrefixed = (part1?.entries ?? []).filter((e) => e.title.startsWith('From '))
    expect(fromPrefixed).toHaveLength(8)
    for (const entry of fromPrefixed) {
      expect(entry.altered, `${entry.slug}`).toBe('extract')
    }
  })
})

describe('what the anthology says about copyright', () => {
  it('records Out, Out- as in copyright despite being free on American sites', () => {
    // Frost died 1963, so UK copyright runs to the end of 2033. American
    // revision sites reproduce it lawfully and we cannot.
    const frost = SET_TEXTS.find((t) => t.slug === 'out-out')
    expect(frost?.copyrightStatus).toBe('copyright')
    expect(frost?.ukRightsNotice).toBeTruthy()
  })

  it('does not claim public domain for any living author in Part 3', () => {
    const part3 = ANTHOLOGY.find((p) => p.part === 3)
    const living = ['blessing', 'search-for-my-tongue', 'poem-at-thirty-nine', 'half-caste']
    for (const slug of living) {
      expect(
        (part3?.entries ?? []).some((e) => e.slug === slug),
        slug,
      ).toBe(true)
      expect(SET_TEXTS.find((t) => t.slug === slug)?.copyrightStatus, slug).toBe('copyright')
    }
  })
})
