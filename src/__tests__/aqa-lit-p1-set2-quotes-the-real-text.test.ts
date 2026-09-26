// @vitest-environment node
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { describe, it, expect } from 'vitest'

import type { TextData } from '@/components/study/InteractiveTextViewer'
import { aqaLitP1MocksSet2 } from '@/data/mock-exams-aqa-lit-p1-set2'
import { frankensteinText } from '@/data/full-texts/frankenstein'
import { muchAdoAboutNothingText } from '@/data/full-texts/much-ado-about-nothing'
import { theMerchantOfVeniceText } from '@/data/full-texts/the-merchant-of-venice'
import { theSignOfFourText } from '@/data/full-texts/the-sign-of-four'
import { theTempestText } from '@/data/full-texts/the-tempest'
import { passage } from '@/lib/study-guides/passage'

/**
 * The second AQA Literature Paper 1 bank prints the held editions' words, and
 * its model answers quote only what the paper prints or the edition holds.
 *
 * WHY IT EXISTS (27 September 2026). src/data/mock-exams-aqa-lit-p1-set2.ts
 * printed eighteen extracts under the names of real works and none was that
 * work's text: three labelled "Mary Shelley, Frankenstein (1818)" were mostly
 * sentences in no edition, and the model answers analysed the invented lines
 * as Shelley's. The file's docblock records what was found and changed.
 *
 * The extracts there are strings, cut by script with passage() and written
 * in, because scripts/check-mock-exam-extracts.mjs reads them as literals.
 * Nothing ran that checker mechanically, so this test is what stops the
 * strings drifting from the editions. It reads every extract constant from
 * the file's source, the thirteen no question prints as well as the five the
 * paper prints, cuts each again from the held edition and compares them
 * word for word and mark for mark, ignoring only brackets round stage
 * directions, the editions' italic underscores and line breaks.
 *
 * WHAT IT CANNOT SEE. Pride and Prejudice is not held on this site. Its three
 * extracts were cut by script from Project Gutenberg #1342 and compared with
 * that file when cut; here they are only checked to be the passages the
 * docblock names, by their first and last words. One quotation in the
 * Question 4 answers, Charlotte Lucas's "a comfortable home" (Chapter 22), is
 * outside the extract and was checked against #1342 by hand; it is listed
 * below rather than skipped silently.
 */

const FILE = join(process.cwd(), 'src/data/mock-exams-aqa-lit-p1-set2.ts')
const SOURCE = readFileSync(FILE, 'utf8')

/** Every `const X_EXTRACT_NN = \`...\`` in the file, by name. */
const EXTRACTS = new Map(
  [...SOURCE.matchAll(/^const (\w+_EXTRACT_\d+) = `([^`]*)`/gm)].map((m) => [m[1], m[2]]),
)

/** Words and marks only: brackets, underscores and line breaks are layout. */
const flat = (s: string) =>
  s
    .replace(/[[\]_]/g, '')
    .replace(/\s+/g, ' ')
    .trim()

const CUTS: [string, TextData, string, string, string][] = [
  ['TEMPEST_EXTRACT_01', theTempestText, 'activ-scenei', 'You do look, my son', 'Even to roaring'],
  ['TEMPEST_EXTRACT_02', theTempestText, 'actiii-sceneii', 'I am full of pleasure', 'Exeunt'],
  ['TEMPEST_EXTRACT_03', theTempestText, 'activ-scenei', 'my King, be quiet', 'hunted soundly'],
  [
    'MUCH_ADO_EXTRACT_01',
    muchAdoAboutNothingText,
    'actv-sceneii',
    'Yea, signior; and depart',
    'It appears not in this confession',
  ],
  [
    'MUCH_ADO_EXTRACT_02',
    muchAdoAboutNothingText,
    'actii-sceneiii',
    'but I would have thee hence',
    'kid-fox',
  ],
  [
    'MUCH_ADO_EXTRACT_03',
    muchAdoAboutNothingText,
    'actiii-scenei',
    'the only man of Italy',
    'What fire is in mine ears',
  ],
  [
    'MERCHANT_EXTRACT_01',
    theMerchantOfVeniceText,
    'actiii-scenei',
    'thou wilt not take his flesh',
    'better the instruction',
  ],
  [
    'MERCHANT_EXTRACT_02',
    theMerchantOfVeniceText,
    'activ-scenei',
    'Then must the Jew be merciful',
    'quality of mercy',
  ],
  [
    'MERCHANT_EXTRACT_03',
    theMerchantOfVeniceText,
    'acti-scenei',
    'In sooth I know not why',
    'had I such venture',
  ],
  [
    'FRANKENSTEIN_EXTRACT_01',
    frankensteinText,
    'section-7',
    'I am by birth a Genevese',
    'As the circumstances of his marriage',
  ],
  [
    'FRANKENSTEIN_EXTRACT_02',
    frankensteinText,
    'section-19',
    'The words induced me to turn towards myself',
    'Of what a strange nature is knowledge',
  ],
  [
    'FRANKENSTEIN_EXTRACT_03',
    frankensteinText,
    'section-11',
    'The different accidents of life',
    'The different accidents of life',
  ],
  [
    'SIGN_OF_FOUR_EXTRACT_01',
    theSignOfFourText,
    'section-1',
    'from the H. W. upon the back',
    'Ah, that is good luck',
  ],
  [
    'SIGN_OF_FOUR_EXTRACT_02',
    theSignOfFourText,
    'section-6',
    'This is all very well',
    'Of course he did. He must have',
  ],
  [
    'SIGN_OF_FOUR_EXTRACT_03',
    theSignOfFourText,
    'section-12',
    'the end of our little drama',
    'remains the cocaine-bottle',
  ],
]

/** The Pride and Prejudice extracts, by the first and last words #1342 gives them. */
const PRIDE: [string, string, string][] = [
  [
    'PRIDE_AND_PREJUDICE_EXTRACT_01',
    'It is a truth universally acknowledged',
    'as soon as he comes.”',
  ],
  ['PRIDE_AND_PREJUDICE_EXTRACT_02', '“In vain have I struggled.', 'after this explanation.”'],
  [
    'PRIDE_AND_PREJUDICE_EXTRACT_03',
    'It was absolutely necessary to interrupt him now.',
    'for the situation.”',
  ],
]

describe('the second AQA Literature Paper 1 bank prints the held editions', () => {
  it('reads all eighteen extracts from the file', () => {
    // A regex that matched nothing would pass every comparison below.
    expect(EXTRACTS.size).toBe(18)
    expect(CUTS.length + PRIDE.length).toBe(18)
  })

  it.each(CUTS)('%s is the held text, cut again', (name, text, sec, from, to) => {
    const printed = EXTRACTS.get(name) ?? ''
    expect(printed.length).toBeGreaterThan(800)
    expect(flat(printed)).toBe(flat(passage(text, sec, from, to)))
  })

  it.each(PRIDE)('%s is the passage the docblock names', (name, first, last) => {
    const printed = EXTRACTS.get(name) ?? ''
    expect(printed.startsWith(first)).toBe(true)
    expect(printed.endsWith(last)).toBe(true)
  })

  it('names the chapter or scene and the edition on every label', () => {
    const labels = [...SOURCE.matchAll(/^const \w+_EXTRACT_\d+_SOURCE =\s*'([^']+)'/gm)].map(
      (m) => m[1],
    )
    expect(labels).toHaveLength(18)
    for (const l of labels)
      expect(l).toMatch(/(Act \d, Scene \d|Chapter \d+) \((Project Gutenberg|1831) text\)$/)
    // The 1831 text is the one held; no label may claim the 1818.
    expect(labels.filter((l) => /1818/.test(l))).toEqual([])
  })
})

const held = (t: TextData) =>
  t.sections
    .map((s) =>
      s.content
        .replace(/<br\s*\/?>/g, ' ')
        .replace(/<\/p>/g, ' ')
        .replace(/<[^>]+>/g, ' '),
    )
    .join(' ')
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&amp;/g, '&')

/** Case, punctuation, hyphens and apostrophe shapes forgiven; words not. */
const words = (s: string) =>
  ` ${s
    .toLowerCase()
    .replace(/(\p{L})-(?=\p{L})/gu, '$1')
    .replace(/['‘’]/g, '')
    .replace(/[^\p{L}\p{N}]+/gu, ' ')
    .trim()} `

const quotations = (t: string) =>
  [...t.matchAll(/"([^"]+)"/g)].map((m) => m[1].trim()).filter((q) => q.split(/\s+/).length >= 2)

/** Checked against Project Gutenberg #1342, which this site does not hold. */
const PRIDE_OUTSIDE_THE_EXTRACT = [words('a comfortable home')]

const TEMPEST = words(held(theTempestText))
const FRANKENSTEIN = words(held(frankensteinText))
const SIGN_OF_FOUR = words(held(theSignOfFourText))

const question = (id: string) => {
  const q = aqaLitP1MocksSet2
    .flatMap((p) => p.sections)
    .flatMap((s) => s.questions)
    .find((x) => x.id === id)
  if (!q) throw new Error(`no question ${id}`)
  return q
}

const QUESTIONS: [string, () => string[]][] = [
  ['tempest-q1', () => [words(question('tempest-q1').extract ?? ''), TEMPEST]],
  ['tempest-q2', () => [words(question('tempest-q2').extract ?? ''), TEMPEST]],
  ['frankenstein-q1', () => [words(question('frankenstein-q1').extract ?? ''), FRANKENSTEIN]],
  [
    'pride-prejudice-q1',
    () => [words(question('pride-prejudice-q1').extract ?? ''), ...PRIDE_OUTSIDE_THE_EXTRACT],
  ],
  ['sign-of-four-q1', () => [words(question('sign-of-four-q1').extract ?? ''), SIGN_OF_FOUR]],
]

/** The quotations in `printed` that no text in `hay` contains, and those found. */
function audit(printed: string[], hay: string[]) {
  const found: string[] = []
  const missing: string[] = []
  for (const t of printed) {
    for (const quote of quotations(t)) {
      const parts = quote
        .split(/\s*(?:\.\.\.|\s\/\s)\s*/)
        .map(words)
        .filter((p) => p.trim())
      if (hay.some((h) => parts.every((p) => h.includes(p)))) found.push(quote)
      else missing.push(quote)
    }
  }
  return { found, missing }
}

describe('the second bank’s model answers quote only the texts they are about', () => {
  it.each(QUESTIONS)('%s', (id, texts) => {
    const q = question(id)
    const { found, missing } = audit(
      [
        ...Object.values(q.modelAnswers ?? {}).flat(),
        ...(Array.isArray(q.markScheme) ? q.markScheme : []),
        q.questionText,
      ],
      texts(),
    )
    expect(missing).toEqual([])
    // A scanner that found nothing would pass everything.
    expect(found.length).toBeGreaterThan(5)
  })

  it('keys each answer by a grade band the mock-exam page shows', () => {
    // src/app/dashboard/mock-exam/page.tsx looks up these three and no other;
    // this file's old keys ("Grade 7-9", "5-6", "3-4") would never have shown.
    for (const [id] of QUESTIONS) {
      expect(Object.keys(question(id).modelAnswers ?? {})).toEqual([
        'Grade 8-9',
        'Grade 6-7',
        'Grade 4-5',
      ])
    }
  })

  it('gives the paper the marks of AQA 8702/1', () => {
    const [paper] = aqaLitP1MocksSet2
    expect(paper.sections.map((s) => s.totalMarks)).toEqual([34, 30])
    expect(paper.totalMarks).toBe(64)
    for (const s of paper.sections) for (const q of s.questions) expect(q.marks).toBe(s.totalMarks)
  })

  it('fails an invented line, and passes the real one', () => {
    // The reverse test. The old Question 3 answers quoted a creature who
    // claimed "a far greater degree of sensibility than man"; Shelley never
    // wrote it. "a blot upon the earth" she did.
    expect(
      audit(['"a far greater degree of sensibility than man"'], [FRANKENSTEIN]).missing,
    ).toHaveLength(1)
    expect(audit(['"a blot upon the earth"'], [FRANKENSTEIN]).missing).toHaveLength(0)
    // And a real line on the wrong paper: Holmes is not in Frankenstein.
    expect(audit(['"the balance of probability"'], [FRANKENSTEIN]).missing).toHaveLength(1)
  })
})
