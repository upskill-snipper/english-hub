// @vitest-environment node
import { describe, it, expect } from 'vitest'

import { aqaLitP1Mocks } from '@/data/mock-exams-aqa-lit-p1'
import { aChristmasCarolText } from '@/data/full-texts/a-christmas-carol'
import { macbethText } from '@/data/full-texts/macbeth'
import { romeoAndJulietText } from '@/data/full-texts/romeo-and-juliet'
import { theMerchantOfVeniceText } from '@/data/full-texts/the-merchant-of-venice'
import { theTempestText } from '@/data/full-texts/the-tempest'
import { passage, playPassage } from '@/lib/study-guides/passage'

/**
 * The six AQA Literature Paper 1 mock papers in src/data/mock-exams-aqa-lit-p1.ts
 * print the editions' words, and each paper's model answers quote only the
 * extract printed above them.
 *
 * WHY IT EXISTS (27 September 2026). Every extract in that file was invented
 * or altered, several labelled "fabricated practice composition" under a
 * question on the real play or novel, and the second paper on each text
 * printed the first paper's model answers, quoting a passage it did not
 * print. The file's docblock says what was found and changed. Its extracts
 * are strings, cut by script and written in; this test is what stops them
 * drifting from the editions, and stops an answer quoting words that are not
 * on the page.
 *
 * The eight extracts from held editions are cut again and compared word for
 * word and mark for mark. Only the page's layout is ignored: a line break
 * between speeches and " / " between verse lines, since the file sets
 * speeches on their own lines and joins one line of Prospero's that the
 * edition breaks only to fit a stage direction.
 *
 * WHAT IT CANNOT SEE. Jane Eyre (Gutenberg #1260) and Great Expectations
 * (#1400) are not held on this site, so their four extracts are not cut
 * again here; scripts/check-mock-exam-extracts.mjs --fetch compares them with
 * the Gutenberg texts. Their answers are still checked against the extract
 * each paper prints.
 */

const questions = aqaLitP1Mocks.flatMap((p) => p.sections.map((s) => s.questions[0]))
const question = (id: string) => {
  const q = questions.find((x) => x.id === id)
  if (!q) throw new Error(`no question ${id}`)
  return q
}

/** Words and marks only: line breaks and verse-line marks are the page's layout. */
const flat = (s: string) =>
  s
    .replace(/\s*\/\s*|\n/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()

const CUTS: [string, () => string, string][] = [
  [
    'aqa-lit-p1-01-q1',
    () =>
      playPassage(macbethText, 'actv-scenei', 'Yet here’s a spot', 'To bed, to bed', {
        prose: true,
      }),
    'William Shakespeare, Macbeth, Act 5 Scene 1',
  ],
  [
    'aqa-lit-p1-02-q1',
    () =>
      playPassage(
        macbethText,
        'actv-scenev',
        'I have almost forgot the taste',
        'Signifying nothing',
      ),
    'William Shakespeare, Macbeth, Act 5 Scene 5',
  ],
  [
    'aqa-lit-p1-03-q1',
    () => playPassage(romeoAndJulietText, 'actii-sceneii', 'He jests at scars', 'touch that cheek'),
    'William Shakespeare, Romeo and Juliet, Act 2 Scene 2',
  ],
  [
    'aqa-lit-p1-04-q1',
    () =>
      playPassage(
        romeoAndJulietText,
        'actii-sceneii',
        'wherefore art thou Romeo',
        'I take thee at thy word',
      ),
    'William Shakespeare, Romeo and Juliet, Act 2 Scene 2',
  ],
  [
    'aqa-lit-p1-05-q1',
    () =>
      playPassage(
        theTempestText,
        'activ-scenei',
        'I had forgot that foul conspiracy',
        'beating mind',
      ),
    'William Shakespeare, The Tempest, Act 4 Scene 1',
  ],
  [
    'aqa-lit-p1-06-q1',
    () =>
      playPassage(
        theMerchantOfVeniceText,
        'acti-sceneiii',
        'shall we be beholding to you',
        'I am as like to call thee',
      ),
    'William Shakespeare, The Merchant of Venice, Act 1 Scene 3',
  ],
  [
    'aqa-lit-p1-01-q2',
    () =>
      passage(
        aChristmasCarolText,
        'section-5',
        'A merry Christmas, Bob!',
        'God bless Us, Every One',
      ),
    'Charles Dickens, A Christmas Carol (1843), Stave 5',
  ],
  [
    'aqa-lit-p1-02-q2',
    () =>
      passage(
        aChristmasCarolText,
        'section-1',
        'At this festive season of the year',
        'Good afternoon, gentlemen',
      ),
    'Charles Dickens, A Christmas Carol (1843), Stave 1',
  ],
]

describe('the aqa-lit-p1 extracts from held editions are those editions', () => {
  it.each(CUTS)('%s is cut again and matches', (id, cut, label) => {
    const q = question(id)
    const printed = q.extract ?? ''
    expect(printed.length).toBeGreaterThan(800)
    expect(flat(printed)).toBe(flat(cut()))
    expect(q.extractSource).toMatch(
      new RegExp(`^${label.replace(/[()]/g, '\\$&')} \\(text: Project Gutenberg #\\d+\\)$`),
    )
  })

  it('labels the four novels that are not held with their chapter and edition', () => {
    expect(question('aqa-lit-p1-03-q2').extractSource).toBe(
      'Charlotte Brontë, Jane Eyre (1847), Chapter 23 (text: Project Gutenberg #1260)',
    )
    expect(question('aqa-lit-p1-04-q2').extractSource).toBe(
      'Charlotte Brontë, Jane Eyre (1847), Chapter 27 (text: Project Gutenberg #1260)',
    )
    expect(question('aqa-lit-p1-05-q2').extractSource).toBe(
      'Charles Dickens, Great Expectations (1861), Chapter 44 (text: Project Gutenberg #1400)',
    )
    expect(question('aqa-lit-p1-06-q2').extractSource).toBe(
      'Charles Dickens, Great Expectations (1861), Chapter 8 (text: Project Gutenberg #1400)',
    )
  })

  it('labels no extract as a composition or a paraphrase', () => {
    expect(questions).toHaveLength(12)
    for (const q of questions)
      expect(q.extractSource ?? '').not.toMatch(
        /fabricat|composition|in the style of|paraphras|verify/i,
      )
  })
})

/** Case, punctuation and apostrophe shapes forgiven; words not. */
const words = (s: string) =>
  ` ${s
    .toLowerCase()
    .replace(/(\p{L})-(?=\p{L})/gu, '$1')
    .replace(/['‘’]/g, '')
    .replace(/[^\p{L}\p{N}]+/gu, ' ')
    .trim()} `

const quotations = (t: string) =>
  [...t.matchAll(/"([^"]+)"/g)].map((m) => m[1].trim()).filter((q) => q.split(/\s+/).length >= 2)

/** The quotations in `printed` that `hay` does not contain, and those it does. */
function audit(printed: string[], hay: string) {
  const found: string[] = []
  const missing: string[] = []
  for (const t of printed)
    for (const quote of quotations(t)) {
      const parts = quote
        .split(/\s*(?:\.\.\.|…|\s\/\s)\s*/)
        .map(words)
        .filter((p) => p.trim())
      if (parts.every((p) => hay.includes(p))) found.push(quote)
      else missing.push(quote)
    }
  return { found, missing }
}

describe('each aqa-lit-p1 model answer quotes only its own extract', () => {
  it.each(questions.map((q) => [q.id]))('%s', (id) => {
    const q = question(id)
    const { found, missing } = audit(
      [
        ...Object.values(q.modelAnswers ?? {}).flat(),
        ...(Array.isArray(q.markScheme) ? q.markScheme : []),
        q.questionText,
      ],
      words(q.extract ?? ''),
    )
    expect(missing).toEqual([])
    // A scanner that found nothing would pass everything.
    expect(found.length).toBeGreaterThan(15)
  })

  it('gives every paper its own answers', () => {
    const grade9 = questions.map((q) => q.modelAnswers?.['Grade 9'])
    expect(new Set(grade9).size).toBe(questions.length)
  })

  it('fails an invented or borrowed line, and passes the real one', () => {
    // The reverse test. The old Merchant extract opened with Desdemona's "I
    // am not merry" from Othello, and paper 2's answers quoted the Stave 5
    // extract under a Stave 1 passage.
    const merchant = words(question('aqa-lit-p1-06-q1').extract ?? '')
    expect(audit(['"I am not merry"'], merchant).missing).toHaveLength(1)
    expect(audit(['"Hath a dog money?"'], merchant).missing).toHaveLength(0)
    const stave1 = words(question('aqa-lit-p1-02-q2').extract ?? '')
    expect(audit(['"a second father"'], stave1).missing).toHaveLength(1)
    expect(audit(['"Are there no prisons?"'], stave1).missing).toHaveLength(0)
  })
})
