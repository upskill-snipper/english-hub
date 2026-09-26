// @vitest-environment node
import { describe, it, expect } from 'vitest'
import { join } from 'node:path'

import { frankensteinText } from '@/data/full-texts/frankenstein'
import { quotationsOn, sourcesUnder } from './helpers/quotations'

/**
 * Every quotation on a Frankenstein page is in the text the site prints.
 *
 * WHY (26 September 2026). Until the 1831 text was held, as
 * src/data/full-texts/frankenstein.ts, nothing could check the Frankenstein
 * pages: study-guides.test.ts checks the guide against a held edition, and no
 * test read these pages at all. The first check found the reader's own notes
 * and panels misquoting ("wedding night" for "wedding-night", a Chapter 10 line
 * printed as Chapter 24), the Creature's "Hateful day when I received life!"
 * run straight on into "Accursed creator!" with no mark that Shelley's "I
 * exclaimed in agony" had been cut, and "tomorrow" for the edition's
 * "to-morrow". Each was corrected to the held wording.
 *
 * The same scanner the fair-dealing guards use (./helpers/quotations.ts) finds
 * the quotations, including those in dictionary strings a page names. Words
 * are compared as study-guides.test.ts compares them: case, punctuation, dash
 * forms and the shape of quotation marks are forgiven, words are not, and
 * "..." or " / " may join parts that are each in the text.
 *
 * NOT_THE_NOVEL lists what the pages quote that is not Shelley's novel, with
 * where each comes from. The list is checked in both directions: an entry must
 * still be quoted somewhere, and must not be in the novel, so it can neither
 * go stale nor hide a real quotation.
 *
 * STRICTER THAN study-guides.test.ts, AND WHY (found reviewing this the same
 * day). That test skips a quotation of one word and matches a fragment
 * anywhere in the text, inside a word as readily as on its boundary. Both let
 * a misquotation through here: three pages analysed the Creature's "yearning"
 * where his heart "yearned", and "daemon" passed for Shelley's "dæmon"; and a
 * fragment ending "yellow eye" would have been found in "yellow eyes". So a
 * fragment here is matched as whole words, and one word is a quotation too.
 *
 * WHICH PAGES. Everything under the Frankenstein guide, and the second
 * Frankenstein guide in the revision-notes library, which no test read. It
 * put "You are my creator... you owe me." in the Creature's mouth; Shelley
 * wrote "the which thou owest me".
 */

const DIRS = [
  join('src', 'app', 'revision', 'texts', 'frankenstein'),
  join('src', 'app', 'resources', 'revision-notes', 'frankenstein'),
]

/** Normalised as study-guides.test.ts normalises. */
function norm(s: string): string {
  return s
    .replace(/<[^>]+>/g, ' ')
    .replace(/&[a-z]+;|&#\d+;/g, ' ')
    .replace(/[‘’ʼ`]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/[—–-]+/g, ' ')
    .replace(/[^\p{L}\p{N}' ]+/gu, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase()
}

/**
 * As whole words: padded with spaces, and with any apostrophe at the edge of a
 * word dropped, since a single quotation mark normalises to one.
 */
const words = (s: string) => ` ${s.replace(/(^| )'+|'+(?= |$)/g, '$1').trim()} `

/** A quotation may use an ellipsis or " / " to join parts; each must be there. */
const fragments = (q: string) =>
  q
    .split(/\s*(?:\.\.\.|…|\/)\s*/)
    .map(norm)
    .filter((f) => /[\p{L}\p{N}]/u.test(f))
    .map(words)

const HELD = words(norm(frankensteinText.sections.map((s) => s.content).join(' ')))

const NOT_THE_NOVEL: Record<string, string> = {
  'The Modern Prometheus': 'the subtitle, on the title page, which the held text leaves out',
  'Did I request thee, Maker, from my clay / To mould me man?':
    'Paradise Lost, the epigraph on the 1818 title page; the 1831 edition does not print it',
  'Let the day perish wherein I was born': 'the Book of Job, 3:3',
  'I wandered lonely as a cloud': 'Wordsworth',
  'Alastor; or, The Spirit of Solitude': "Percy Shelley's poem",
  'interrogate Nature with power': "Humphry Davy's lectures on chemistry",
  'animal electricity': "Galvani's term",
  'noble savage': "the phrase for Rousseau's idea",
  'The Vampyre': "Polidori's story",
  'Year Without a Summer': 'the name given to 1816',
  'What makes a monster?': 'the question an essay plan asks',
  'Who makes a monster?': 'the question an essay plan asks',
  'should I do this?': "the themes page's framing of Victor's choice",
  'can I do this?': "the themes page's framing of Victor's choice",
  'Shelley presents': 'exam advice: how to name the writer',
  'Shelley uses,': 'exam advice: how to name the writer',
  'the book says.': 'exam advice: what not to write',
  // The extract walkthrough quoting its own model paragraph back.
  "Shelley's most radical move...": 'the model paragraph',
  'The Creature does nothing in the extract...': 'the model paragraph',
  'Shelley uses past-perfect verbs...': 'the model paragraph',
  "This dovetails with Shelley's wider critique...": 'the model paragraph',
  'inverts the Petrarchan tradition...': 'the model paragraph',
  'the true monstrosity... is what he refuses to do next: stay.': 'the model paragraph',
  Alastor: "Percy Shelley's poem, by its short title",
  // The revision-notes guide.
  overturning: 'the Greek sense of "catastrophe", glossed',
  overreacher: "the critic's term for the Gothic hero who overreaches",
  'ghost story competition': 'the usual name for the contest of 1816',
  masculine: "a model answer's scare quotes",
  'How does Shelley present ideas about responsibility in Frankenstein?': 'an exam question',
  'Who is the real monster in Frankenstein? How does Shelley present ideas about monstrosity?':
    'an exam question',
  'How does Shelley present isolation in Frankenstein?': 'an exam question',
}
const EXCUSED = new Map(Object.keys(NOT_THE_NOVEL).map((q) => [norm(q), q]))

const FILES = DIRS.flatMap((d) => sourcesUnder(d))
const QUOTES = FILES.flatMap((f) => quotationsOn(f)).filter((q) => fragments(q.text).length > 0)

describe('the Frankenstein pages', () => {
  it('are found, with their quotations', () => {
    // The vacuity guard: a scanner that found nothing would pass everything.
    expect(FILES.some((f) => f.endsWith('read/notes.ts'))).toBe(true)
    expect(FILES.some((f) => f.endsWith('key-quotes/page.tsx'))).toBe(true)
    expect(FILES.some((f) => f.endsWith('revision-notes/frankenstein/page.tsx'))).toBe(true)
    expect(QUOTES.length).toBeGreaterThan(300)
  })

  it('match as whole words, so a changed ending is caught', () => {
    // The two misquotations that passed a substring match. If `words` stops
    // padding, both are found again and this fails.
    expect(fragments('yearning').some((f) => !HELD.includes(f))).toBe(true)
    expect(fragments('the dull yellow eyes').some((f) => !HELD.includes(f))).toBe(true)
    expect(fragments('the dull yellow eye').every((f) => HELD.includes(f))).toBe(true)
  })

  it('quote the held 1831 text, word for word', () => {
    const missing = QUOTES.filter((q) => !EXCUSED.has(norm(q.text)))
      .filter((q) => fragments(q.text).some((f) => !HELD.includes(f)))
      .map((q) => `${q.file}:${q.line}  ${q.text.replace(/\s+/g, ' ').slice(0, 90)}`)
    expect(missing).toEqual([])
  })

  it('excuse only what is quoted, and only what is not the novel', () => {
    const quoted = new Set(QUOTES.map((q) => norm(q.text)))
    const stale = [...EXCUSED].filter(([n]) => !quoted.has(n)).map(([, q]) => q)
    expect(stale, 'excused but no longer quoted anywhere').toEqual([])
    const inNovel = [...EXCUSED]
      .filter(([, q]) => fragments(q).every((f) => HELD.includes(f)))
      .map(([, q]) => q)
    expect(inNovel, 'excused but found in the novel').toEqual([])
  })
})
