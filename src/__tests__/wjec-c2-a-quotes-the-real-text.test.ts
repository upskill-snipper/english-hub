// @vitest-environment node
import { describe, it, expect } from 'vitest'

import { wjecC2A } from '@/data/mock-exams/wjec-c2-a'

/**
 * The five WJEC Component 2 papers in src/data/mock-exams/wjec-c2-a.ts print
 * a genuine 19th-century Source B, and every quotation in their answers and
 * notes is in the extract the question prints.
 *
 * WHY IT EXISTS (27 September 2026). All five papers are live, and every
 * Source B was invented: a Cadair Idris climb credited to Borrow's Wild Wales
 * and four pieces credited to 19th-century writers and papers that could not
 * be traced, with model answers analysing the invented lines as the period's
 * words. The fix put in genuine passages from Engels, Mayhew, Borrow, Thoreau
 * and Mill, cut by script from the Project Gutenberg texts. It was checked by
 * scripts/check-mock-exam-extracts.mjs, which compares quotations without
 * regard to case, only from four words, and against every passage the paper
 * prints. A review then found answers quoting "ragged schools" for Mayhew's
 * "Ragged Schools" and "the Old World ... the New" for Thoreau's lower case,
 * and answers that misread what they quoted (the file's docblock lists them).
 *
 * WHAT IT CHECKS. A quotation must be in its own question's extract, as whole
 * words, with case: finding "persevere" inside "persevered" is not finding it.
 * A capital at the start of a quotation and a stop at either end are
 * forgiven, as any essay changes them, and "..." may join parts that come in
 * that order. A question 2 answer must quote Source A, which is all its
 * question prints.
 *
 * WHAT IT DOES NOT CHECK. That Source B is its author's words: the texts are
 * not held in src/data/full-texts, so that is the scanner's job (run it with
 * --file wjec-c2-a). This test pins each passage's length and first and last
 * words so that an edit to one fails here until it has been re-cut and
 * re-checked. Nor can it tell whether what an answer says about the words is
 * true: a review has to read that. The Source A articles are written for this
 * bank and attributed to no one real, so there is no text to hold them to.
 */

const allQuestions = wjecC2A.flatMap((p) =>
  p.sections.flatMap((s) => s.questions.map((q) => ({ paper: p.id, q }))),
)
const reading = allQuestions.filter(({ q }) => q.extract)

/** Quotation marks, apostrophes and dashes to one shape each, spaces to one. */
const flat = (s: string) =>
  s.replace(/[“”]/g, '"').replace(/[‘’]/g, "'").replace(/[—–]/g, '-').replace(/\s+/g, ' ')

/** The quotations in double marks, straight or curly. */
const quotations = (t: string) =>
  [...flat(t).matchAll(/"([^"]+)"/g)].map((m) => m[1].trim()).filter(Boolean)

const isLetter = (c: string | undefined) => !!c && /\p{L}/u.test(c)

/** Where `part` is in `hay` as whole words at or after `from`, or -1. */
function wholeAt(hay: string, part: string, from: number): number {
  for (let i = hay.indexOf(part, from); i >= 0; i = hay.indexOf(part, i + 1)) {
    if (!isLetter(hay[i - 1]) && !isLetter(hay[i + part.length])) return i
  }
  return -1
}

/** Whether `quote` is in `hay`, its "..." parts in order. */
function quotedFrom(hay: string, quote: string): boolean {
  const parts = quote
    .split(/\s*\.\.\.\s*/)
    .map((p) => p.replace(/^[.,;:!?]+|[.,;:!?]+$/g, '').trim())
    .filter(Boolean)
  let from = 0
  for (const part of parts) {
    const lower = part[0].toLowerCase() + part.slice(1)
    const at = [part, lower].map((p) => wholeAt(hay, p, from)).filter((i) => i >= 0)
    if (at.length === 0) return false
    from = Math.min(...at) + part.length
  }
  return true
}

/** Everything a question prints as its own: answers, mark scheme and question text. */
const printedBy = (q: (typeof allQuestions)[number]['q']): string[] => [
  q.questionText,
  ...Object.values(q.modelAnswers ?? {}).flat(),
  ...(Array.isArray(q.markScheme) ? q.markScheme : Object.values(q.markScheme ?? {}).flat()),
]

function audit(q: (typeof allQuestions)[number]['q']) {
  const hay = flat(q.extract ?? '')
  const found: string[] = []
  const missing: string[] = []
  for (const text of printedBy(q))
    for (const quote of quotations(text)) (quotedFrom(hay, quote) ? found : missing).push(quote)
  return { found, missing }
}

describe('the wjec-c2-a answers quote their own extracts', () => {
  it('reads every reading question on all five papers', () => {
    expect(wjecC2A).toHaveLength(5)
    expect(reading).toHaveLength(20)
    const total = reading.reduce((n, { q }) => n + audit(q).found.length, 0)
    // 390 on 27 September 2026: a count near zero means the check found nothing to check.
    expect(total).toBeGreaterThan(350)
  })

  it.each(reading.map(({ q }) => [q.id, q] as const))('%s', (_id, q) => {
    expect(audit(q).missing).toEqual([])
  })

  it('fails a quotation with the wrong case or a changed word', () => {
    const q = reading.find(({ q }) => q.id === 'wjec-c2-02-q3')!.q
    const answers = Object.values(q.modelAnswers ?? {}).flat()
    expect(answers.some((a) => a.includes('"are sent even to the Ragged Schools"'))).toBe(true)
    const hay = flat(q.extract ?? '')
    expect(quotedFrom(hay, 'are sent even to the Ragged Schools')).toBe(true)
    expect(quotedFrom(hay, 'are sent even to the ragged schools')).toBe(false)
    const borrow = flat(reading.find(({ q }) => q.id === 'wjec-c2-03-q3')!.q.extract ?? '')
    expect(quotedFrom(borrow, 'the gallant girl, however, persevered')).toBe(true)
    expect(quotedFrom(borrow, 'the gallant girl, however, persevere')).toBe(false)
    expect(quotedFrom(borrow, 'Peaks and pinnacles ... in deep shade')).toBe(true)
    expect(quotedFrom(borrow, 'in deep shade ... Peaks and pinnacles')).toBe(false)
  })
})

/** Paper, author, Gutenberg number, words between spaces ([...] not counted), first and last words. */
const SOURCE_B: [string, RegExp, number, number, string, string][] = [
  [
    'wjec-c2-01',
    /^Friedrich Engels, /,
    17306,
    375,
    'If the peasantry of England',
    'humorous Rebecca masquerades.',
  ],
  [
    'wjec-c2-02',
    /^Henry Mayhew, /,
    55998,
    342,
    'I have used the heading',
    'without the least restraint.',
  ],
  ['wjec-c2-03', /^George Borrow, /, 648, 564, 'Here we got down at', 'valleys at his feet.'],
  [
    'wjec-c2-04',
    /^Henry David Thoreau, /,
    205,
    259,
    'As with our colleges, so',
    'peck of corn to mill.',
  ],
  [
    'wjec-c2-05',
    /^John Stuart Mill, /,
    27083,
    379,
    'Neither does it avail anything',
    'other half in the snow.',
  ],
]

describe('the wjec-c2-a sources are what their labels say', () => {
  it.each(SOURCE_B)(
    '%s prints the passage it was cut to',
    (paper, author, pg, words, first, last) => {
      const q3 = reading.find(({ q }) => q.id === `${paper}-q3`)!.q
      const passage = (q3.extract ?? '').replace(/^Source B:\n/, '')
      expect(q3.extractSource).toMatch(author)
      expect(q3.extractSource).toMatch(new RegExp(`Project Gutenberg (text \\()?#${pg}\\)$`))
      expect(passage.split(/\s+/).filter((w) => w !== '[...]').length).toBe(words)
      expect(passage.startsWith(first)).toBe(true)
      expect(passage.endsWith(last)).toBe(true)
    },
  )

  it('labels every Source A as written for the paper, under no real outlet', () => {
    for (const p of wjecC2A) {
      const q2 = reading.find(({ q }) => q.id === `${p.id}-q2`)!.q
      expect(q2.extractSource).toMatch(
        /^Specially written for this practice paper \(not a published text\): /,
      )
    }
  })

  it('prints none of the invented sources, bylines, figures or false facts', () => {
    const printed = JSON.stringify(wjecC2A)
    for (const gone of [
      // Wales were relegated from League A in 2023-24, and nothing supports
      // the article's charge that the Western Mail put their news beneath a
      // dog show.
      /Western Mail/,
      /promotion play-offs/,
      // The Foundation's 3.8 million figure was for 2022, reported in 2023.
      /In 2024,? the Joseph Rowntree/,
      /Thomas Rees/,
      /Eleanor Davies/,
      /Cardiff Times/,
      /The Cambrian/,
      /Quarterly Review/,
      /James Phillips/,
      /Cadair Idris/,
      /Miss Evans/,
      /map made flesh/,
      /Nia Griffiths/,
      /Wales Online/,
      /TES Cymru/,
      /National Geographic/,
      /Golwg360/,
      /Guardian/,
      /169%/,
      /since 2010/,
      /any one of us/,
    ])
      expect(printed).not.toMatch(gone)
  })
})
