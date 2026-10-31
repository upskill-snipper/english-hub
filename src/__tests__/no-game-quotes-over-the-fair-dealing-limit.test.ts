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
  // Added with the rebuild for depth, 24 October 2026.
  'Example speech': 'site',
  'The Eagle - Tennyson': 'public-domain', // Tennyson died in 1892
  'Jekyll and Hyde - Stevenson': 'public-domain', // Stevenson died in 1894
  'Disabled - Owen': 'public-domain', // Owen died in 1918
  'La Belle Dame sans Merci - Keats': 'public-domain', // Keats died in 1821
  'A Christmas Carol - Dickens': 'public-domain', // Dickens died in 1870
  'The Great Gatsby - Fitzgerald': 'public-domain', // Fitzgerald died in 1940: free from 2011
  'Piano - Lawrence': 'public-domain', // D. H. Lawrence died in 1930: free from 2001
  'Romeo and Juliet - Shakespeare': 'public-domain', // Shakespeare died in 1616
  'If - Kipling': 'public-domain', // Kipling died in 1936: free from 2007
  'Exposure - Owen': 'public-domain', // Owen died in 1918
  'Frankenstein - Mary Shelley': 'public-domain', // Mary Shelley died in 1851
  'Sonnet 116 - Shakespeare': 'public-domain', // Shakespeare died in 1616
  'The Destruction of Sennacherib - Byron': 'public-domain', // Byron died in 1824
  // Carol Ann Duffy is living: protected until 70 years after her death.
  'War Photographer - Duffy': 'copyright',
  'Twelfth Night - Shakespeare': 'public-domain', // Shakespeare died in 1616
  'Hamlet - Shakespeare': 'public-domain', // Shakespeare died in 1616
  'Julius Caesar - Shakespeare': 'public-domain', // Shakespeare died in 1616
  'Animal Farm - Orwell': 'public-domain', // Orwell died in 1950: free from 2021
  'Remember - Rossetti': 'public-domain', // Christina Rossetti died in 1894
  'Pride and Prejudice - Austen': 'public-domain', // Austen died in 1817
  'Composed upon Westminster Bridge - Wordsworth': 'public-domain', // Wordsworth died in 1850
  'My Last Duchess - Browning': 'public-domain', // Robert Browning died in 1889
  'Crossing the Bar - Tennyson': 'public-domain', // Tennyson died in 1892
  'Sonnet 43 - Barrett Browning': 'public-domain', // Elizabeth Barrett Browning died in 1861
  'Henry V - Shakespeare': 'public-domain', // Shakespeare died in 1616
  'London - Blake': 'public-domain', // Blake died in 1827
  'Cousin Kate - Rossetti': 'public-domain', // Christina Rossetti died in 1894
  'The Merchant of Venice - Shakespeare': 'public-domain', // Shakespeare died in 1616
  'Great Expectations - Dickens': 'public-domain', // Dickens died in 1870
  'Jane Eyre - Charlotte Brontë': 'public-domain', // Charlotte Brontë died in 1855
  'King Lear - Shakespeare': 'public-domain', // Shakespeare died in 1616
  'The Tempest - Shakespeare': 'public-domain', // Shakespeare died in 1616
  "A Midsummer Night's Dream - Shakespeare": 'public-domain', // Shakespeare died in 1616
  'The Prelude - Wordsworth': 'public-domain', // Wordsworth died in 1850
  'The Soldier - Brooke': 'public-domain', // Rupert Brooke died in 1915
  'When We Two Parted - Byron': 'public-domain', // Byron died in 1824
  'She Walks in Beauty - Byron': 'public-domain', // Byron died in 1824
  'Neutral Tones - Hardy': 'public-domain', // Hardy died in 1928: free from 1999
  'Othello - Shakespeare': 'public-domain', // Shakespeare died in 1616
  'Much Ado About Nothing - Shakespeare': 'public-domain', // Shakespeare died in 1616
  'The War of the Worlds - Wells': 'public-domain', // H. G. Wells died in 1946: free from 2017
  'The Sign of Four - Conan Doyle': 'public-domain', // Conan Doyle died in 1930: free from 2001
  "The Farmer's Bride - Mew": 'public-domain', // Charlotte Mew died in 1928: free from 1999
  'A Poison Tree - Blake': 'public-domain', // Blake died in 1827
  'The Man He Killed - Hardy': 'public-domain', // Hardy died in 1928: free from 1999
  'The Schoolboy - Blake': 'public-domain', // Blake died in 1827
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

  it('quotes a text in copyright within the limit in its options too', () => {
    // A "which line supports the point" question (24 October 2026) shows its
    // quotations as the options: four lines from the text, each a quotation
    // in its own right, so each is held to the limit, and a poem's line count
    // too.
    const over = QUOTE_DETECTIVE.items
      .filter((q) => status(q.text) === 'copyright' && q.kind === 'point')
      .flatMap((q) => (q.options ?? []).map((o) => ({ q, o })))
      .filter(
        ({ o }) => wordCount(o) > FAIR_DEALING.quoteWords || lines(o) > FAIR_DEALING.poemQuoteLines,
      )
      .map(({ q, o }) => `${q.text}: ${wordCount(o)} words: ${o.slice(0, 40)}`)
    expect(over).toEqual([])
    expect(QUOTE_DETECTIVE.items.some((q) => q.kind === 'point')).toBe(true)
  })

  it('has quotations in copyright to hold', () => {
    expect(QUOTE_DETECTIVE.items.some((q) => status(q.text) === 'copyright')).toBe(true)
  })
})
