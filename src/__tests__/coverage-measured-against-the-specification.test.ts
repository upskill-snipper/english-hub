import { describe, it, expect } from 'vitest'
import { PRESCRIBED } from '@/lib/board/prescribed-texts'
import { SET_TEXTS, getSetTextsForBoard } from '@/lib/board/set-texts'

/**
 * Coverage measured against the boards, not against ourselves.
 *
 * THE FALLACY THIS EXISTS TO KILL. Coverage was being reported as "AQA 20 of
 * 20, Edexcel 14 of 14, 100%". Both numerator and denominator came from our own
 * SET_TEXTS. A list compared against itself is always complete, and the figure
 * could not have been anything but 100%. It was a denominator that cannot fail.
 *
 * Measured against the specifications instead, on 19 September 2026, fifteen
 * prescribed titles had no row in this codebase at all - twenty board-title
 * pairs across AQA, Edexcel, OCR and Eduqas. DNA, A Taste of Honey, Telling
 * Tales, Princess & The Hustler, Leave Taking, My Name is Leon, Hobson's
 * Choice, Journey's End, The Woman in Black, The Empress, Refugee Boy, Coram
 * Boy, Boys Don't Cry, Oranges are not the Only Fruit and The History Boys. A
 * student searching for their own set text was told their board does not set
 * it.
 *
 * SO THE DENOMINATOR HERE IS PRESCRIBED_TEXTS, which is read from the awarding
 * bodies' own documents and records the version and the date it was read. That
 * is the only way this assertion can mean anything.
 *
 * TITLE MATCHING IS DELIBERATELY FORGIVING, and that is a real risk worth
 * stating. The specifications print "Dr Jekyll and Mr Hyde" where we hold "The
 * Strange Case of Dr Jekyll and Mr Hyde"; "Princess & The Hustler" against
 * "Princess & The Hustler". A strict comparison reports gaps that are only
 * spelling, and the first run of this diff did exactly that - it flagged Jekyll
 * on two boards as missing when we have had a full guide for it all along.
 * Normalising risks the opposite error, silently matching two different works.
 * That is accepted here because the failure mode is visible: a wrongly matched
 * title shows up as a text on a shelf whose guide is about something else.
 */

/** Strip the differences that are spelling rather than substance. */
function norm(title: string): string {
  return title
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/['’]/g, '')
    .replace(/^(the|a) /, '')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim()
}

const HELD = new Map(SET_TEXTS.map((t) => [norm(t.title), t]))

/**
 * Find the row for a prescribed title.
 *
 * Containment, not equality, because the boards and we abbreviate differently
 * in both directions: they print "Dr Jekyll and Mr Hyde" where we hold "The
 * Strange Case of Dr Jekyll and Mr Hyde". Exact matching reported that as a
 * missing text on two boards while we have had a full guide for it throughout.
 */
function held(title: string) {
  const n = norm(title)
  const exact = HELD.get(n)
  if (exact) return exact
  for (const [key, text] of HELD) {
    if (key.includes(n) || n.includes(key)) return text
  }
  return undefined
}

/** Every (board, title) pair the five verified specifications prescribe. */
const PAIRS = PRESCRIBED.flatMap((list) =>
  [...list.shakespeare, ...list.nineteenthCentury, ...list.modern].map(
    (title) => [list.board, title] as const,
  ),
)

describe('the verified record is worth measuring against', () => {
  it('covers four specifications and records how to re-check each', () => {
    // FOUR, NOT FIVE. The file's own docblock claimed five and listed Cambridge
    // 0475 among them; the array has never contained it. That is the house
    // failure mode - a document asserting what the code does not do - inside
    // the file written to stop board data being wrong. The docblock is now
    // corrected and Cambridge 0475 lives in its own module, because its shape
    // (a choice of three alternative anthologies, rotated every year) will not
    // fit a flat shakespeare/nineteenth/modern list.
    expect(PRESCRIBED).toHaveLength(4)
    expect(PRESCRIBED.map((l) => l.board).sort()).toEqual(['aqa', 'edexcel', 'eduqas', 'ocr'])
    for (const list of PRESCRIBED) {
      expect(list.version, `${list.board} has no document version`).toBeTruthy()
      expect(list.readOn, `${list.board} has no read date`).toBeTruthy()
      expect(list.source, `${list.board} has no source URL`).toMatch(/^https:\/\//)
    }
  })

  it('is big enough that a pass means something', () => {
    // If PRESCRIBED emptied, every assertion below would pass by proving
    // nothing. That is the exact shape of the bug this file replaces.
    expect(PAIRS.length).toBeGreaterThan(80)
  })
})

describe('every prescribed text has a row', () => {
  it.each(PAIRS)('%s prescribes %s', (_board, title) => {
    expect(Boolean(held(title)), `${title} is prescribed but has no row in SET_TEXTS`).toBe(true)
  })
})

describe('every prescribed text is tagged to the board that prescribes it', () => {
  it('has no untagged pairs', () => {
    const untagged: string[] = []
    for (const [board, title] of PAIRS) {
      const text = held(title)
      if (!text) continue // reported by the block above
      if (!text.boards.includes(board)) untagged.push(`${board}: ${title}`)
    }
    expect(untagged).toEqual([])
  })
})

describe('the fifteen that were missing', () => {
  // Named individually, because a count would pass just as happily with the
  // wrong fifteen, and because these are the specific rows the 100% figure hid.
  const ADDED: [string, string][] = [
    ['dna', 'aqa'],
    ['a-taste-of-honey', 'aqa'],
    ['telling-tales', 'aqa'],
    ['princess-and-the-hustler', 'aqa'],
    ['leave-taking', 'aqa'],
    ['my-name-is-leon', 'aqa'],
    ['hobsons-choice', 'edexcel'],
    ['journeys-end', 'edexcel'],
    ['the-woman-in-black', 'edexcel'],
    ['the-empress', 'edexcel'],
    ['refugee-boy', 'edexcel'],
    ['coram-boy', 'edexcel'],
    ['boys-dont-cry', 'edexcel'],
    ['oranges-are-not-the-only-fruit', 'eduqas'],
    ['the-history-boys', 'eduqas'],
  ]

  it.each(ADDED)('%s is on the %s shelf', (slug, board) => {
    const shelf = getSetTextsForBoard(board as never).map((t) => t.slug)
    expect(shelf).toContain(slug)
  })

  it('is fifteen titles covering twenty prescribed UK GCSE pairs', () => {
    expect(ADDED).toHaveLength(15)
    // Counted against the four UK GCSE boards only. Two of the fifteen -
    // A Taste of Honey and Princess & The Hustler - are ALSO prescribed by
    // Cambridge 0475 and were tagged to it in the same pass, so a raw
    // boards.length sum is 22, not 20. Counting the wrong thing here would
    // have made this assertion drift every time an unrelated board was fixed.
    const UK = ['aqa', 'edexcel', 'ocr', 'eduqas']
    const pairs = ADDED.reduce((n, [slug]) => {
      const text = SET_TEXTS.find((t) => t.slug === slug)
      return n + (text?.boards.filter((b) => UK.includes(b)).length ?? 0)
    }, 0)
    expect(pairs).toBe(20)
  })
})

describe('the two texts whose prescribed edition is not settled', () => {
  // Refugee Boy and Coram Boy each exist as a novel and as a stage adaptation
  // by a different writer. The specification's editions appendix has not been
  // read, so the ambiguity is recorded rather than resolved. The Necklace is
  // the precedent for why that matters: its prescribed text is a copyright
  // translation, and assuming the free one would have published the wrong work.
  it.each(['refugee-boy', 'coram-boy'])('%s records the original author', (slug) => {
    const text = SET_TEXTS.find((t) => t.slug === slug)
    expect(text?.author).toBeTruthy()
    expect(text?.copyrightStatus).toBe('copyright')
  })
})

describe('The History Boys is not offered to an AQA student', () => {
  it('is Eduqas only', () => {
    // AQA's list carries "Last exam 2024" against it. Two of the errors this
    // area has already produced were withdrawn texts still being shown, so the
    // live/withdrawn distinction gets its own assertion.
    const text = SET_TEXTS.find((t) => t.slug === 'the-history-boys')
    expect(text?.boards).toEqual(['eduqas'])
  })
})
