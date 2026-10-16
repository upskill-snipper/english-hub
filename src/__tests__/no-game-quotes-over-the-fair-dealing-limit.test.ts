import { describe, it, expect } from 'vitest'
import { FAIR_DEALING } from '@/lib/study-guides/fair-dealing'
import { wordCount } from '@/lib/study-guides/validate'
import { SET_TEXTS } from '@/lib/board/set-texts'
import { QUESTIONS as SPEED_ANALYSIS } from '@/data/games/banks/speed-analysis'
import { BANK as QUOTE_DETECTIVE } from '@/data/games/banks/quote-detective'

/**
 * The games quote set texts and poems in copyright no further than the guides
 * may (16 October 2026).
 *
 * THE GAP. no-quote-over-the-fair-dealing-limit.test.ts holds the guide pages,
 * and any page that states a fifteen-word rule, to FAIR_DEALING. No game page
 * ever stated the rule in words that test recognises, so the games were never
 * measured, and when their questions moved into src/data/games/banks they were
 * outside src/app altogether. Measured that day, two Speed Analysis extracts
 * from Eliot's Prufrock, in UK copyright until the end of 2035, ran to 23
 * words over three lines and to 16 words. Both were cut by deletion only (the
 * bank's docblock says how).
 *
 * WHAT IS HELD. Each game whose data says where a quotation comes from:
 *   - Speed Analysis, by each extract's `source`: every source is placed below
 *     as the site's own, public domain or in copyright, and a new source fails
 *     until someone places it;
 *   - Quote Detective, by each quotation's `text`, through the set-text
 *     register's own copyrightStatus.
 * A quotation from a work in copyright may run to FAIR_DEALING.quoteWords
 * words and, from a poem, FAIR_DEALING.poemQuoteLines lines. Explanations are
 * not measured here: they are checked by a reader before they ship, and they
 * quote nothing beyond what their question shows.
 */

/** Where each Speed Analysis extract comes from. UK law: the author's life plus 70 years. */
const SPEED_SOURCES: Record<string, 'site' | 'public-domain' | 'copyright'> = {
  'Example prose': 'site',
  'Example dialogue': 'site',
  'Traditional tongue-twister': 'public-domain',
  'Prufrock - Eliot': 'copyright', // T. S. Eliot died in 1965: protected to the end of 2035
  'Fog - Sandburg': 'copyright', // Carl Sandburg died in 1967: to the end of 2037
  // Robert Frost died in 1963: protected to the end of 2033.
  '"Stopping by Woods on a Snowy Evening" - Robert Frost (fair-dealing extract; UK copyright until 2034)':
    'copyright',
  "Porphyria's Lover - Browning": 'public-domain',
  'Macbeth - Shakespeare': 'public-domain',
  'To Autumn - Keats': 'public-domain',
  'The Tyger - Blake': 'public-domain',
  'The Little Black Boy - Blake': 'public-domain',
  'The Garden - Marvell': 'public-domain',
  'Song of Myself - Whitman': 'public-domain',
  'Ozymandias - Shelley': 'public-domain',
  'My Heart Leaps Up - Wordsworth': 'public-domain',
  'Daffodils - Wordsworth': 'public-domain',
  'Dulce et Decorum Est - Owen': 'public-domain', // Owen died in 1918
  'Devotions - Donne': 'public-domain',
  'Charge of the Light Brigade - Tennyson': 'public-domain',
  'A Tale of Two Cities - Dickens': 'public-domain',
  'A Red, Red Rose - Burns': 'public-domain',
}

/** Quote Detective names texts as the game shows them; the register's titles where they differ. */
const REGISTER_TITLE: Record<string, string> = {
  'Jekyll and Hyde': 'Strange Case of Dr Jekyll and Mr Hyde',
}

const lines = (extract: string) => extract.split('\n').filter((l) => l.trim()).length

describe('Speed Analysis', () => {
  it('knows where every extract comes from', () => {
    const unplaced = [...new Set(SPEED_ANALYSIS.map((q) => q.source))].filter(
      (s) => !(s in SPEED_SOURCES),
    )
    expect(unplaced, 'a source nobody has said is public domain or in copyright').toEqual([])
  })

  it('quotes a work in copyright within the limit', () => {
    const over = SPEED_ANALYSIS.filter((q) => SPEED_SOURCES[q.source] === 'copyright')
      .filter(
        (q) =>
          wordCount(q.extract) > FAIR_DEALING.quoteWords ||
          lines(q.extract) > FAIR_DEALING.poemQuoteLines,
      )
      .map((q) => `${q.source}: ${wordCount(q.extract)} words, ${lines(q.extract)} lines`)
    expect(over).toEqual([])
  })

  it('still has extracts in copyright to hold, so this is not passing on nothing', () => {
    expect(SPEED_ANALYSIS.some((q) => SPEED_SOURCES[q.source] === 'copyright')).toBe(true)
  })
})

describe('Quote Detective', () => {
  const status = (text: string) =>
    SET_TEXTS.find((t) => t.title === (REGISTER_TITLE[text] ?? text))?.copyrightStatus

  it('finds every text it quotes in the set-text register', () => {
    const unknown = [...new Set(QUOTE_DETECTIVE.items.map((q) => q.text))].filter((t) => !status(t))
    expect(unknown).toEqual([])
  })

  it('quotes a text in copyright within the limit', () => {
    const over = QUOTE_DETECTIVE.items
      .filter((q) => status(q.text) === 'copyright')
      .filter((q) => wordCount(q.quote) > FAIR_DEALING.quoteWords)
      .map((q) => `${q.text}: ${wordCount(q.quote)} words: ${q.quote.slice(0, 40)}`)
    expect(over).toEqual([])
  })

  it('has quotations in copyright to hold', () => {
    expect(QUOTE_DETECTIVE.items.some((q) => status(q.text) === 'copyright')).toBe(true)
  })
})
