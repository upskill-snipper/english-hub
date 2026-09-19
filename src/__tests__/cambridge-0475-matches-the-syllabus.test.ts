import { describe, it, expect } from 'vitest'
import {
  CAMBRIDGE_0475,
  cambridge0475,
  cambridge0475Texts,
  cambridge0475Slugs,
} from '@/lib/board/cambridge-0475'
import { SET_TEXTS, getSetTextsForBoard } from '@/lib/board/set-texts'

/**
 * Cambridge IGCSE Literature in English 0475, against its own syllabus.
 *
 * WHAT WAS WRONG. The board read as completely empty. `getSetTextsForBoard`
 * returned nothing for cambridge-0475, so a student in the Gulf - most of this
 * board's cohort - was shown that we have no idea what they study. Meanwhile we
 * held rows and finished guides for several of its prescribed texts, tagged to
 * other boards. Antony and Cleopatra, the longest guide on the site at 1,491
 * lines, is a prescribed 0475 drama text and was reachable only from an A-Level
 * shelf.
 *
 * THE HAZARD THIS FILE IS REALLY ABOUT, which is not the emptiness. Cambridge
 * republishes 0475 set texts EVERY YEAR and they change between years. Four
 * syllabus PDFs sit side by side on one Cambridge page - 2023-2025, 2026, 2027
 * and 2028-2030 - with no current, past or archived label on any of them, and
 * the superseded 2023-2025 file still returns HTTP 200. Its own change log
 * records a set text being swapped mid-document. The 2028-2030 file is the worst
 * decoy, because its lists are real and would look authoritative while
 * prescribing a different anthology volume in each of its three years.
 *
 * So the assertions below are mostly about the year. A list without its
 * examination year attached is not a fact about anybody's exam.
 *
 * THE TWO LIVE SERIES DIFFER, and we are affected by both changes. The War of
 * the Worlds is a 2026 prose text and not a 2027 one; A Streetcar Named Desire
 * is a 2026 drama text and not a 2027 one, and we hold a 719-line guide to it.
 * Princess & the Hustler is in for 2027 only.
 */

describe('every list carries the year it belongs to', () => {
  it('holds both live series and nothing undated', () => {
    expect(CAMBRIDGE_0475.map((y) => y.examYear)).toEqual([2026, 2027])
    for (const year of CAMBRIDGE_0475) {
      expect(year.source.version, `${year.examYear} has no version`).toBeTruthy()
      expect(year.source.url, `${year.examYear} has no URL`).toMatch(/cambridgeinternational\.org/)
      expect(year.source.readOn).toBe('2026-09-19')
    }
  })

  it('cites a different document for each year', () => {
    // The whole point. If both years pointed at one PDF, one of them would be
    // wrong and the file would look right.
    const urls = CAMBRIDGE_0475.map((y) => y.source.url)
    expect(new Set(urls).size).toBe(2)
  })

  it('refuses a year it does not hold rather than guessing', () => {
    expect(() => cambridge0475(2028 as never)).toThrow(/2028/)
  })
})

describe('the 2027 lists', () => {
  const y = cambridge0475(2027)

  it('is three papers', () => {
    expect(y.papers.map((p) => p.paper)).toEqual([
      'Paper 1 Section A (Poetry)',
      'Paper 1 Section B (Prose)',
      'Papers 2 and 3 (Drama)',
    ])
  })

  it('offers three alternative poetry sets of fifteen poems each', () => {
    const poetry = y.papers[0]!
    expect(poetry.options).toHaveLength(3)
    for (const option of poetry.options) {
      expect(option.texts, option.label).toHaveLength(15)
    }
    // The rubric matters as much as the list: the candidate answers on ONE.
    expect(poetry.rubric).toMatch(/ONE/)
  })

  it('sets seven novels and ten numbered stories', () => {
    const prose = y.papers[1]!
    expect(prose.options[0]!.texts).toHaveLength(7)
    expect(prose.options[1]!.texts).toHaveLength(10)
  })

  it('numbers the stories as the syllabus does, so a teacher can check them', () => {
    const stories = cambridge0475(2027).papers[1]!.options[1]!.texts
    expect(stories.map((t) => t.item)).toEqual([3, 14, 26, 30, 35, 37, 38, 40, 47, 49])
    for (const story of stories) {
      expect(story.from, story.title).toBe('Stories of Ourselves Volume 2')
    }
  })

  it('sets five plays, shared by Papers 2 and 3', () => {
    const drama = y.papers[2]!
    expect(drama.options[0]!.texts).toHaveLength(5)
    expect(drama.rubric).toMatch(/EITHER Paper 2 .* OR Paper 3/)
  })

  it('is sixty-seven prescribed texts in all', () => {
    expect(cambridge0475Texts(2027)).toHaveLength(45 + 7 + 10 + 5)
  })
})

describe('what changed between the two live series', () => {
  const titles = (year: 2026 | 2027) => new Set(cambridge0475Texts(year).map((t) => t.title))

  it('swaps one prose text', () => {
    const a = titles(2026)
    const b = titles(2027)
    expect(a.has('The War of the Worlds')).toBe(true)
    expect(b.has('The War of the Worlds')).toBe(false)
    expect(a.has('What it Means When a Man Falls from the Sky')).toBe(false)
    expect(b.has('What it Means When a Man Falls from the Sky')).toBe(true)
  })

  it('swaps one drama text, and we hold a guide to the one that left', () => {
    const a = titles(2026)
    const b = titles(2027)
    expect(a.has('A Streetcar Named Desire')).toBe(true)
    expect(b.has('A Streetcar Named Desire')).toBe(false)
    expect(b.has('Princess & the Hustler')).toBe(true)
    // The reason this matters to us and not just to Cambridge.
    expect(SET_TEXTS.some((t) => t.slug === 'a-streetcar-named-desire')).toBe(true)
  })

  it('changes no poem at all', () => {
    // All three options and all 45 poems are identical across the two
    // syllabuses. Asserted because "Cambridge rotates everything every year" is
    // the rule of thumb, and the exception is worth pinning so nobody
    // "corrects" it.
    const poems = (year: 2026 | 2027) =>
      cambridge0475(year)
        .papers[0]!.options.flatMap((o) => o.texts.map((t) => `${t.author} - ${t.title}`))
        .sort()
    expect(poems(2026)).toEqual(poems(2027))
  })
})

describe('the board is no longer empty', () => {
  const shelf = getSetTextsForBoard('cambridge-0475').map((t) => t.slug)

  it('every slug the 2027 syllabus maps to is on the shelf', () => {
    for (const slug of cambridge0475Slugs(2027)) {
      expect(shelf, `${slug} is prescribed for 2027 but not on the shelf`).toContain(slug)
    }
  })

  it('has at least the twelve whole texts', () => {
    expect(shelf.length).toBeGreaterThanOrEqual(12)
  })

  it('reaches the guides we already had, tagged to other boards', () => {
    // The six that existed before today and were invisible to this board.
    for (const slug of [
      'things-fall-apart',
      'pride-and-prejudice',
      'to-kill-a-mockingbird',
      'a-taste-of-honey',
      'princess-and-the-hustler',
      'antony-and-cleopatra',
    ]) {
      expect(shelf).toContain(slug)
    }
  })

  it('does not put the 45 poems on the shelf', () => {
    // Deliberate. A candidate answers on ONE of three alternative fifteen-poem
    // sets, and SetText cannot express that. Listing all 45 would tell a student
    // to revise three times what they actually do.
    const poemTitles = new Set(
      cambridge0475(2027).papers[0]!.options.flatMap((o) => o.texts.map((t) => t.title)),
    )
    const leaked = getSetTextsForBoard('cambridge-0475').filter((t) => poemTitles.has(t.title))
    expect(leaked.map((t) => t.slug)).toEqual([])
  })
})

describe('the syllabus prints things we must not silently correct', () => {
  it('keeps the syllabus spelling of Hullaballoo', () => {
    // The publisher spells it "Hullabaloo". The syllabus spells it
    // "Hullaballoo", and a teacher searching the syllabus text has to find it.
    const text = cambridge0475Texts(2027).find((t) => t.title.startsWith('Hullab'))
    expect(text?.title).toBe('Hullaballoo in the Guava Orchard')
  })

  it('records no author dates or copyright status, because the syllabus gives none', () => {
    // The research that produced this file established author names as printed
    // and explicitly did NOT establish dates, publication years or copyright
    // positions. Adding them here from memory is the failure this whole
    // exercise exists to avoid, so the type has no field for them.
    for (const text of cambridge0475Texts(2027)) {
      expect(Object.keys(text).sort()).not.toContain('copyrightStatus')
      expect(Object.keys(text).sort()).not.toContain('year')
    }
  })
})
