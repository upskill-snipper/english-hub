import { describe, it, expect } from 'vitest'
import {
  CAMBRIDGE_0475,
  cambridge0475,
  cambridge0475Texts,
  cambridge0475Slugs,
  type Cambridge0475ExamYear,
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
 * THE LIVE SERIES DIFFER, and we are affected by every change. The War of the
 * Worlds is a 2026 prose text and not a 2027 one; A Streetcar Named Desire is a
 * 2026 drama text and not a 2027 one, and we hold a 719-line guide to it.
 * Princess & the Hustler is in for 2027 only. 2028 (added 23 October 2026 from
 * the 2028-2030 syllabus, Version 2, September 2026, pages 9 and 11-13) drops
 * six 2027 texts and adds An Inspector Calls and The Tempest among others.
 *
 * PAPER 2 IS TWO TEXTS, PAPER 3 IS ONE. The 2027 syllabus, page 13: Paper 2,
 * "Candidates must answer on two different set texts from the following";
 * Paper 3, "Candidates must answer on one set text from the following". The
 * placement card printed "One of 5 set texts" for both until 23 October 2026,
 * computed from the list length. The selection sentence now lives on the paper
 * and is asserted here.
 */

describe('every list carries the year it belongs to', () => {
  it('holds the three series we have read and nothing undated', () => {
    expect(CAMBRIDGE_0475.map((y) => y.examYear)).toEqual([2026, 2027, 2028])
    for (const year of CAMBRIDGE_0475) {
      expect(year.source.version, `${year.examYear} has no version`).toBeTruthy()
      expect(year.source.url, `${year.examYear} has no URL`).toMatch(/cambridgeinternational\.org/)
      expect(year.source.readOn, `${year.examYear} has no read date`).toMatch(/^\d{4}-\d{2}-\d{2}$/)
    }
  })

  it('cites a different document for each year', () => {
    // The whole point. If two years pointed at one PDF, one of them would be
    // wrong and the file would look right. (2028, 2029 and 2030 do share one
    // document; only 2028 is held, so the three URLs here are still distinct.)
    const urls = CAMBRIDGE_0475.map((y) => y.source.url)
    expect(new Set(urls).size).toBe(3)
  })

  it('refuses a year it does not hold rather than guessing', () => {
    // 2029 is in the 2028-2030 document with different lists. It is not held,
    // and asking for it must not quietly return a neighbour.
    expect(() => cambridge0475(2029 as never)).toThrow(/2029/)
  })

  it('every paper says how many texts a candidate studies, in words', () => {
    for (const year of CAMBRIDGE_0475) {
      for (const paper of year.papers) {
        expect(paper.selection, `${year.examYear} ${paper.paper}`).toMatch(
          /\byou (study|answer)\b/i,
        )
        expect(paper.selection).not.toMatch(/One of \d/)
      }
    }
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
    // Matched without case since 24 October 2026, when the rubrics moved to
    // the card's sentence case and second person ("You answer on one...").
    expect(poetry.rubric).toMatch(/\bone of three\b/i)
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
    expect(drama.rubric).toMatch(/either Paper 2 .* or Paper 3 .*not both/i)
  })

  it('asks for two texts on Paper 2 and one on Paper 3, as page 13 says', () => {
    // THE CORRECTION OF 23 OCTOBER 2026. "One of 5 set texts" was wrong for
    // Paper 2, which most candidates sit.
    const drama = y.papers[2]!
    expect(drama.selection).toMatch(/Paper 2 .*two different set texts/)
    expect(drama.selection).toMatch(/Paper 3 .*one set text/)
    // 2026 shares the wording word for word (its page 13).
    expect(cambridge0475(2026).papers[2]!.selection).toBe(drama.selection)
  })

  it('is sixty-seven prescribed texts in all', () => {
    expect(cambridge0475Texts(2027)).toHaveLength(45 + 7 + 10 + 5)
  })
})

describe('the 2028 lists', () => {
  const y = cambridge0475(2028)

  it('is three papers, renamed because Paper 3 no longer exists', () => {
    // 2028-2030 syllabus, page 9: Paper 1 Poetry and Prose (Open text) and
    // EITHER Paper 2 Drama and Unseen (Open text) OR Component 3 Coursework.
    expect(y.papers.map((p) => p.paper)).toEqual([
      'Paper 1 Section A (Poetry, Open Text)',
      'Paper 1 Section B (Prose, Open Text)',
      'Paper 2 Section A (Drama, Open Text)',
    ])
  })

  it('swaps Songs of Ourselves Volume 2 Part 3 for Volume 3 and keeps the other two sets', () => {
    const poetry = y.papers[0]!
    expect(poetry.options.map((o) => o.label)).toEqual([
      'Songs of Ourselves Volume 1',
      'Songs of Ourselves Volume 3',
      'Kayo Chingonyi, from Kumukanda',
    ])
    for (const option of poetry.options) {
      expect(option.texts, option.label).toHaveLength(15)
    }
  })

  it('sets six novels and ten stories from Stories of Ourselves Volume 3', () => {
    const prose = y.papers[1]!
    expect(prose.options[0]!.texts).toHaveLength(6)
    expect(prose.options[1]!.texts).toHaveLength(10)
    for (const story of prose.options[1]!.texts) {
      expect(story.from, story.title).toBe('Stories of Ourselves Volume 3')
    }
  })

  it('sets five plays and asks for one of them', () => {
    const drama = y.papers[2]!
    expect(drama.options[0]!.texts).toHaveLength(5)
    // "of these five" until 24 October 2026; the card shows no list for
    // "these" to point at.
    expect(drama.selection).toMatch(/one of the five set plays/)
  })

  it('speaks to the reader and does not repeat the paper name', () => {
    // The card prints `${paper}. ${rubric}`. Each 2028 rubric opened "Open
    // text." after a paper name ending "Open Text)", and said "Candidates
    // answer ONE" beside a selection line saying "you".
    for (const year of CAMBRIDGE_0475) {
      for (const paper of year.papers) {
        const where = `${year.examYear} ${paper.paper}`
        expect(paper.rubric, where).not.toMatch(/^Open text/i)
        expect(paper.rubric, where).not.toMatch(/\bCandidates\b/)
        expect(paper.rubric, where).not.toMatch(/\b(ONE|EITHER|OR)\b/)
        expect(paper.selection, where).not.toMatch(/\bthese\b|\blisted\b|this list/)
      }
    }
  })

  it('is sixty-six prescribed texts in all', () => {
    expect(cambridge0475Texts(2028)).toHaveLength(45 + 6 + 10 + 5)
  })
})

describe('what changed between the live series', () => {
  const titles = (year: Cambridge0475ExamYear) =>
    new Set(cambridge0475Texts(year).map((t) => t.title))

  it('swaps one prose text between 2026 and 2027', () => {
    const a = titles(2026)
    const b = titles(2027)
    expect(a.has('The War of the Worlds')).toBe(true)
    expect(b.has('The War of the Worlds')).toBe(false)
    expect(a.has('What it Means When a Man Falls from the Sky')).toBe(false)
    expect(b.has('What it Means When a Man Falls from the Sky')).toBe(true)
  })

  it('swaps one drama text between 2026 and 2027, and we hold a guide to the one that left', () => {
    const a = titles(2026)
    const b = titles(2027)
    expect(a.has('A Streetcar Named Desire')).toBe(true)
    expect(b.has('A Streetcar Named Desire')).toBe(false)
    expect(b.has('Princess & the Hustler')).toBe(true)
    // The reason this matters to us and not just to Cambridge.
    expect(SET_TEXTS.some((t) => t.slug === 'a-streetcar-named-desire')).toBe(true)
  })

  it('changes no poem at all between 2026 and 2027', () => {
    // All three options and all 45 poems are identical across the two
    // syllabuses. Asserted because "Cambridge rotates everything every year" is
    // the rule of thumb, and the exception is worth pinning so nobody
    // "corrects" it.
    const poems = (year: Cambridge0475ExamYear) =>
      cambridge0475(year)
        .papers[0]!.options.flatMap((o) => o.texts.map((t) => `${t.author} - ${t.title}`))
        .sort()
    expect(poems(2026)).toEqual(poems(2027))
  })

  it('drops six whole texts for 2028 and brings in five, three of which we hold', () => {
    // 2028-2030 syllabus, page 13, against the 2027 syllabus, pages 12-13.
    const gone = cambridge0475Slugs(2027).filter((s) => !cambridge0475Slugs(2028).includes(s))
    expect(gone.sort()).toEqual(
      [
        'things-fall-apart',
        'fire-on-the-mountain',
        'to-kill-a-mockingbird',
        'a-taste-of-honey',
        'a-midsummer-nights-dream',
        'antony-and-cleopatra',
      ].sort(),
    )
    // By slug where we hold one, because the 2028-2030 document respells three
    // continuing titles (Hullabaloo, What It Means, Princess & The Hustler).
    const held2027 = new Set(cambridge0475Slugs(2027))
    const arrived = cambridge0475Texts(2028)
      .filter((t) => !t.from)
      .filter((t) => (t.slug ? !held2027.has(t.slug) : !titles(2027).has(t.title)))
      .map((t) => t.title)
    expect(arrived.sort()).toEqual(
      [
        'When We Were Birds',
        'Brooklyn',
        'An Inspector Calls',
        'The Tempest',
        'The Importance of Being Earnest',
      ].sort(),
    )
    for (const slug of ['an-inspector-calls', 'the-tempest']) {
      expect(cambridge0475Slugs(2028)).toContain(slug)
      expect(
        SET_TEXTS.some((t) => t.slug === slug),
        `${slug} has vanished`,
      ).toBe(true)
    }
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
    // The publisher spells it "Hullabaloo". The 2027 syllabus spells it
    // "Hullaballoo", and a teacher searching the syllabus text has to find it.
    // The 2028-2030 syllabus prints "Hullabaloo", and that year's row follows
    // its own document; both point at the same slug.
    const text = cambridge0475Texts(2027).find((t) => t.title.startsWith('Hullab'))
    expect(text?.title).toBe('Hullaballoo in the Guava Orchard')
    const text2028 = cambridge0475Texts(2028).find((t) => t.title.startsWith('Hullab'))
    expect(text2028?.title).toBe('Hullabaloo in the Guava Orchard')
    expect(text2028?.slug).toBe(text?.slug)
  })

  it('records no author dates or copyright status, because the syllabus gives none', () => {
    // The research that produced this file established author names as printed
    // and explicitly did NOT establish dates, publication years or copyright
    // positions. Adding them here from memory is the failure this whole
    // exercise exists to avoid, so the type has no field for them.
    for (const year of [2026, 2027, 2028] as const) {
      for (const text of cambridge0475Texts(year)) {
        expect(Object.keys(text).sort()).not.toContain('copyrightStatus')
        expect(Object.keys(text).sort()).not.toContain('year')
      }
    }
  })
})
