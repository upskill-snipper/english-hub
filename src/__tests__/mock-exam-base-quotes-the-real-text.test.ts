// @vitest-environment node
import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { describe, it, expect } from 'vitest'

import { mockExamPapers } from '@/data/mock-exams/base'

/**
 * The base mock-exam bank prints real writers' words under their names, and
 * its model answers quote only what each question prints.
 *
 * WHY IT EXISTS (27 September 2026). src/data/mock-exams/base.ts, which is
 * live, printed three extracts under real names that were not those writers'
 * words: "Adapted from Charles Dickens, Great Expectations", a Mayhew passage
 * about a family of eight in one room, and a "letter by Matthew Arnold" to
 * The Times. Fifty quotations of four words or more in the model answers
 * quoted the invented lines back as Dickens's and Mayhew's. A comment in the
 * file had said since April that two of them were not verbatim; the labels
 * stayed, and nothing checked either. The file's docblock records what was
 * found and changed.
 *
 * WHAT IT CHECKS. The three passages were cut by script from Project
 * Gutenberg (#1400, #57060, #55998) and compared with those files paragraph
 * by paragraph. None of those texts is held on this site, so a test cannot
 * cut them again; instead each is pinned by a hash of its words, taken when
 * it was compared. A change to one fails here, and the fix is to cut it
 * again from Gutenberg and re-run
 *   node scripts/check-mock-exam-extracts.mjs --fetch --file base
 * before moving the pin, never to move the pin alone. It also checks that
 * every quotation in every answer and mark-scheme note is in the extract its
 * question prints, that no question asks for line numbers the mock-exam page
 * never shows, and that the invented bylines are gone.
 *
 * WHAT IT CANNOT SEE. Whether an answer's claims about the words are true
 * (that a phrase is a metaphor, that a paragraph is the third) is a reader's
 * judgement, not a string match.
 */

const SOURCE = readFileSync(join(process.cwd(), 'src/data/mock-exams/base.ts'), 'utf8')

const literal = (name: string) => {
  const m = SOURCE.match(new RegExp(`^const ${name} = \`([^\`]*)\``, 'm'))
  if (!m) throw new Error(`no const ${name}`)
  return m[1]
}

/** Words and marks only: line breaks and the file's line endings are layout. */
const flat = (s: string) => s.replace(/\s+/g, ' ').trim()
const sha = (s: string) => createHash('sha256').update(flat(s)).digest('hex')

const PINNED: [string, string, number, string, string][] = [
  [
    'AQA_P1_EXTRACT',
    '40f078c75500f2ee785d625f720cae15efc9836b5b3d2f8d83c3cf79b80dbf6d',
    436,
    'Ours was the marsh country',
    'ate the bread ravenously.',
  ],
  [
    'AQA_P2_SOURCE_B',
    '9ebf4d1ee33fe8908fedaea846008d4fd238cb8990ea2b0c90dfbb4bb4e46742',
    357,
    'It is a terrible thing, indeed',
    'genius or energy for the work?',
  ],
  [
    'EDEXCEL_P2_SOURCE_B',
    'c4a3af99311dbc0b0178a50c8d16ef9a0f949932ce56b0ef0c2b081e47d7b260',
    391,
    'The little watercress girl',
    'should slip off her feet.',
  ],
]

const questions = mockExamPapers.flatMap((p) => p.sections).flatMap((s) => s.questions)

/** Quotation marks, dashes, spacing and case forgiven; words not. */
const norm = (s: string) =>
  flat(s.replace(/[“”]/g, '"').replace(/[‘’]/g, "'").replace(/[—–]/g, '-')).toLowerCase()

describe('the base mock-exam bank prints the real texts', () => {
  it('reads the three passages attributed to real works', () => {
    expect(questions.length).toBeGreaterThan(30)
    expect(PINNED).toHaveLength(3)
  })

  it.each(PINNED)('%s is the passage cut from Gutenberg', (name, hash, n, first, last) => {
    const printed = literal(name)
    expect(printed.startsWith(first)).toBe(true)
    expect(printed.endsWith(last)).toBe(true)
    expect(flat(printed).split(' ')).toHaveLength(n)
    expect(sha(printed)).toBe(hash)
  })

  it('labels each with its work, place and the edition it was cut from', () => {
    const labels = questions.map((q) => q.extractSource ?? '').join('\n')
    expect(labels).toContain(
      'Charles Dickens, Great Expectations (1861), from Chapter 1, in the text of the 1867 edition',
    )
    expect(labels).toContain('Henry Mayhew, London Labour and the London Poor, Volume 3 (1861)')
    expect(labels).toContain('Henry Mayhew, London Labour and the London Poor, Volume 1 (1851)')
    expect(labels).not.toMatch(/Adapted from|Matthew Arnold/)
  })

  it('marks the one cut in the Mayhew passage', () => {
    expect(literal('AQA_P2_SOURCE_B').match(/\[\.\.\.\]/g)).toHaveLength(1)
    const labels = questions.map((q) => q.extractSource ?? '')
    expect(labels.some((l) => /Volume 3 .*Words left out are marked \[\.\.\.\]/.test(l))).toBe(true)
  })
})

/** Every string a question's answers and mark scheme hold, whichever shape they take. */
const answerTexts = (q: (typeof questions)[number]): string[] => [
  ...Object.values(q.modelAnswers ?? {}).flat(),
  ...(Array.isArray(q.markScheme) ? q.markScheme : Object.values(q.markScheme ?? {}).flat()),
]

/** Each quoted piece in a question's answers and mark scheme; a marked cut splits a quotation. */
const quotedPieces = (q: (typeof questions)[number]): string[] =>
  answerTexts(q).flatMap((t) =>
    [...t.matchAll(/"([^"]+)"/g)].flatMap((m) =>
      m[1]
        .split(/\s*(?:\.\.\.|…)\s*/)
        .map((piece: string) => norm(piece).replace(/^[\s.,;:!?'-]+|[\s.,;:!?'-]+$/g, ''))
        .filter(Boolean),
    ),
  )

describe('the base bank quotes only what each question prints', () => {
  const printed = questions.filter((q) => q.extract)

  it('finds the quotations it checks', () => {
    // A pattern that matched nothing would pass every question below.
    expect(printed.length).toBeGreaterThan(25)
    expect(printed.flatMap(quotedPieces).length).toBeGreaterThan(300)
  })

  it.each(printed.map((q) => [q.id, q] as const))('%s', (_id, q) => {
    const hay = norm(q.extract ?? '')
    const missing = quotedPieces(q)
      .filter((p) => !hay.includes(p))
      .map((p) => p.split(' ').slice(0, 8).join(' '))
    expect(missing).toEqual([])
  })

  it('never sends the student to a line number the page does not print', () => {
    const asks = questions.filter((q) => /\blines? \d/i.test(q.questionText)).map((q) => q.id)
    expect(asks).toEqual([])
  })

  it('names no invented writer', () => {
    const everything = JSON.stringify(mockExamPapers)
    expect(everything.match(/\b(Chen|Mitchell|Arnold)\b/g)).toBeNull()
  })
})
