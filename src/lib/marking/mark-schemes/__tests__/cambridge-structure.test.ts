import { describe, it, expect } from 'vitest'
import { cambridge0500Paper1, cambridge0500Paper2 } from '../cambridge-0500'
import { cambridge0990Paper1, cambridge0990Paper2 } from '../cambridge-0990'
import type { MarkScheme } from '../types'
import { derivePack } from '@/lib/marking/examiner/packs/derive'
import type { MarkSchemeGuide } from '@/data/mark-scheme-guides/types'
import { GUIDE as GUIDE_0500_P1 } from '@/data/mark-scheme-guides/cambridge-0500-paper1'
import { GUIDE as GUIDE_0500_P2 } from '@/data/mark-scheme-guides/cambridge-0500-paper2'
import { GUIDE as GUIDE_0990_P1 } from '@/data/mark-scheme-guides/cambridge-0990-paper1'
import { GUIDE as GUIDE_0990_P2 } from '@/data/mark-scheme-guides/cambridge-0990-paper2'

/**
 * Cambridge 0500 and 0990, held to their mark-scheme guides (24 October 2026).
 *
 * THE DEFECT. The marks and totals agreed with Cambridge; how the marks are
 * given inside a question did not. Paper 1 Question 1, which Cambridge marks
 * point by point, was marked in three bands. Questions 2 and 3, which it marks
 * in separately marked parts, each with its own levels, were marked on one
 * grid each. Paper 2's writing grids had five levels where Cambridge has six,
 * and several grids described the 2024-2026 papers (two texts, two
 * paragraphs, spelling marked on Paper 1). The guides in
 * src/data/mark-scheme-guides, each checked twice against Cambridge's 2027-2029
 * syllabus and its specimen mark schemes, listed every difference; the founder
 * approved correcting the marker that day (document 30).
 *
 * THE RULE. Each guide question (a paper's question, or a separately marked
 * part of one) links to a marker question, and each of its grids is one
 * objective there with the guide's marks, codes and level ranges; a part the
 * guide gives no levels is one band a mark at a time. The table below names
 * which objective holds which grid, so the comparison is exact rather than
 * inferred. 0990 is checked against its own guides, which are 0500's content
 * under 0990's name, as its marker schemes are.
 *
 * Imports are the Cambridge modules themselves, not the registry, so another
 * board's work in progress cannot stop this file from running.
 */

/** The guide's question label to [objective id, the guide's prefix on that grid's level names]. */
type GridTable = Readonly<Record<string, readonly (readonly [string, string])[]>>

const PAPER_1: GridTable = {
  'Question 1': [['R1/R2/R3/R4/R5', '']],
  'Question 2(a)': [
    ['R1/R2/R5', 'Reading: '],
    ['W1/W2/W3', 'Writing: '],
  ],
  'Question 2(b)': [['R2/R3', '']],
  'Question 3: short-answer parts': [['R1/R2/R4-SHORT-ANSWERS', '']],
  'Question 3: language task': [['R1/R2/R4-LANGUAGE-TASK', '']],
  'Question 4': [
    ['R1/R2/R3/R5', 'Reading: '],
    ['W1/W2/W3/W4', 'Writing: '],
  ],
}

const PAPER_2: GridTable = {
  'Question 1(a)': [['R3/R4', '']],
  'Question 1(b)': [
    ['R1/R2/R3/R5', 'Reading: '],
    ['W1/W2/W3/W4/W5', 'Writing: '],
  ],
  'Question 2, 3, 4 or 5 (answer one)': [
    ['W1/W2', 'Content and structure: '],
    ['W3/W4/W5', 'Style and accuracy: '],
  ],
}

const PAPERS: readonly (readonly [string, MarkScheme, MarkSchemeGuide, GridTable])[] = [
  ['cambridge-0500-paper1', cambridge0500Paper1, GUIDE_0500_P1, PAPER_1],
  ['cambridge-0500-paper2', cambridge0500Paper2, GUIDE_0500_P2, PAPER_2],
  ['cambridge-0990-paper1', cambridge0990Paper1, GUIDE_0990_P1, PAPER_1],
  ['cambridge-0990-paper2', cambridge0990Paper2, GUIDE_0990_P2, PAPER_2],
]

/** '7-8' to [7, 8]; '1' to [1, 1]. */
function range(marks: string): [number, number] {
  const [lo, hi] = marks.split('-').map(Number)
  return [lo!, hi ?? lo!]
}

/** The guide's questions, in order, each with the marker question it links to. */
function guideQuestions(guide: MarkSchemeGuide) {
  return guide.sections.flatMap((s) => s.questions)
}

describe.each(PAPERS)('%s against its guide', (schemeId, scheme, guide, grids) => {
  it('is the guide paper: same id, marks and time', () => {
    expect(scheme.id).toBe(schemeId)
    expect(guide.schemeId).toBe(schemeId)
    expect(scheme.totalMarks).toBe(guide.totalMarks)
    expect(scheme.durationMinutes).toBe(guide.durationMinutes)
    expect(scheme.questions.reduce((n, q) => n + q.totalMarks, 0)).toBe(scheme.totalMarks)
  })

  it("has one question for each marker question the guide links to, with the guide's marks", () => {
    const expected = new Map<string, number>()
    for (const g of guideQuestions(guide)) {
      expect(g.markerQuestionId, `${g.label} links to nothing`).not.toBeNull()
      const id = g.markerQuestionId!
      expected.set(id, (expected.get(id) ?? 0) + g.marks)
    }
    expect(scheme.questions.map((q) => [q.id, q.totalMarks])).toEqual([...expected.entries()])
  })

  it("gives each grid the guide's objectives, marks and level ranges", () => {
    for (const g of guideQuestions(guide)) {
      const rows = grids[g.label]
      expect(rows, `no grid table entry for "${g.label}"`).toBeDefined()
      expect(rows!.length, `${g.label}: one objective per grid`).toBe(g.objectives.length)
      const question = scheme.questions.find((q) => q.id === g.markerQuestionId)!
      rows!.forEach(([id, prefix], i) => {
        const where = `${g.label} ${id}`
        const ao = question.assessmentObjectives.find((a) => a.id === id)
        expect(ao, `${where} is missing`).toBeDefined()
        // The codes are the guide's, in its order: 'R1, R2, R5' is 'R1/R2/R5'.
        expect(id.split('-')[0], where).toBe(g.objectives[i]!.id.split(', ').join('/'))
        expect(ao!.maxMarks, where).toBe(g.objectives[i]!.marks)

        const levels = g.levels.filter((l) =>
          prefix ? l.name.startsWith(prefix) : !l.name.includes(': '),
        )
        if (g.levels.length === 0) {
          // Marked point by point: no levels, one band a mark at a time.
          expect(
            ao!.bands.map((b) => [b.band, b.minMarks, b.maxMarks]),
            where,
          ).toEqual([['Per mark', 1, ao!.maxMarks]])
        } else {
          expect(levels.length, `${where}: the guide has levels for this grid`).toBeGreaterThan(0)
          expect(
            ao!.bands.map((b) => [b.band, b.minMarks, b.maxMarks]),
            `${where}: the guide's level names and ranges`,
          ).toEqual(levels.map((l) => [l.name.slice(prefix.length), ...range(l.marks)]))
        }
      })
    }
  })

  it('carries no objective the guide does not, and in its order', () => {
    for (const q of scheme.questions) {
      const expected = guideQuestions(guide)
        .filter((g) => g.markerQuestionId === q.id)
        .flatMap((g) => grids[g.label]!.map(([id]) => id))
      expect(
        q.assessmentObjectives.map((a) => a.id),
        q.id,
      ).toEqual(expected)
    }
  })

  it('names every objective so the engine can find it again', () => {
    for (const q of scheme.questions) {
      const ids = q.assessmentObjectives.map((a) => a.id)
      expect(new Set(ids).size, `${q.id}: ids repeat`).toBe(ids.length)
      for (const ao of q.assessmentObjectives) {
        // feedback-generator.ts upper-cases the id the model returns, and the
        // prompts show only the label, so the label must start with the id.
        expect(ao.id, `${q.id}: upper case`).toBe(ao.id.toUpperCase())
        expect(ao.id).toMatch(/^(AO|R|W)\d+/)
        expect(ao.label.startsWith(`${ao.id} - `), `${q.id}: "${ao.label}"`).toBe(true)
        expect(ao.weighting, `${q.id} ${ao.id}: share of the question`).toBeCloseTo(
          ao.maxMarks / q.totalMarks,
          10,
        )
      }
    }
  })

  it('says in the examiner notes how marks are given', () => {
    for (const q of scheme.questions) {
      const parts = guideQuestions(guide).filter((g) => g.markerQuestionId === q.id)
      const notes = q.examinerNotes ?? ''
      if (parts.some((g) => g.levels.length === 0)) {
        expect(notes, `${q.id}: point marking`).toMatch(/one mark for each correct/i)
      }
      if (q.assessmentObjectives.length > 1) {
        expect(notes, `${q.id}: grids added`).toMatch(/added/)
      }
      if (parts.length > 1) {
        // A part with no answer must not borrow marks from the other part.
        expect(notes, `${q.id}: each part on its own`).toMatch(
          /Mark each part only on what the student wrote for it/,
        )
      }
    }
  })

  it('keeps the house style', () => {
    const text = JSON.stringify(scheme)
    expect(text, 'an em or en dash').not.toMatch(/[\u2013\u2014]/)
    expect(text, 'an exclamation mark').not.toMatch(/!/)
  })
})

describe('the rules the guides record', () => {
  const p1 = (id: string) => cambridge0500Paper1.questions.find((q) => q.id === id)!
  const p2 = (id: string) => cambridge0500Paper2.questions.find((q) => q.id === id)!
  const bandText = (q: ReturnType<typeof p1>, id: string) =>
    q.assessmentObjectives
      .find((a) => a.id === id)!
      .bands.map((b) => [b.descriptor, ...b.indicators].join(' '))
      .join(' ')

  it('limits the Paper 1 summary to 120 words of continuous writing', () => {
    expect(p1('Q2').examinerNotes).toMatch(/no more than 120 words/)
    expect(p1('Q2').examinerNotes).toMatch(/not notes or bullet points/)
  })

  it('answers Paper 1 Question 4 from Text C alone and marks no accuracy there', () => {
    // The old reading bands wanted ideas "from both texts" and the old writing
    // bands marked spelling, punctuation and grammar, which Paper 1 does not
    // assess (2027-2029 syllabus p. 15; specimen mark scheme, Table G).
    expect(p1('Q4').examinerNotes).toMatch(/Text C alone/)
    expect(bandText(p1('Q4'), 'R1/R2/R3/R5')).not.toMatch(/both texts/i)
    expect(bandText(p1('Q4'), 'W1/W2/W3/W4')).not.toMatch(/spelling|punctuation|grammar/i)
  })

  it('analyses one extract in the Paper 1 language task, not two paragraphs', () => {
    expect(bandText(p1('Q3'), 'R1/R2/R4-LANGUAGE-TASK')).not.toMatch(/paragraphs/i)
    expect(p1('Q3').examinerNotes).toMatch(/only on top of comments on the words/)
  })

  it('marks spelling, punctuation and grammar in Paper 2, in both writing grids', () => {
    expect(
      p2('Section A').assessmentObjectives.find((a) => a.id === 'W1/W2/W3/W4/W5')!.description,
    ).toMatch(/spelling, punctuation and grammar/)
    expect(
      p2('Section B').assessmentObjectives.find((a) => a.id === 'W3/W4/W5')!.description,
    ).toMatch(/spelling, punctuation and grammar/)
  })
})

describe('the ids saved essays and mock exams name', () => {
  it.each([cambridge0500Paper2, cambridge0990Paper2])(
    '$id keeps Section A, covering both parts of Question 1, and Section B',
    (scheme) => {
      expect(scheme.questions.map((q) => q.id)).toEqual(['Section A', 'Section B'])
      const a = scheme.questions[0]!
      expect(a.assessmentObjectives.map((o) => o.id)).toEqual([
        'R3/R4',
        'R1/R2/R3/R5',
        'W1/W2/W3/W4/W5',
      ])
    },
  )

  it('keeps Q1 to Q4 on Paper 1, which the mock hand-off matches by number', () => {
    for (const scheme of [cambridge0500Paper1, cambridge0990Paper1]) {
      expect(scheme.questions.map((q) => q.id)).toEqual(['Q1', 'Q2', 'Q3', 'Q4'])
    }
  })
})

describe('0990 is 0500 under its own name', () => {
  it.each([
    [cambridge0500Paper1, cambridge0990Paper1, '0990/1 (2027-2029)'],
    [cambridge0500Paper2, cambridge0990Paper2, '0990/2 (2027-2029)'],
  ])(
    '%#: correcting 0500 corrects 0990, and the 0990 fields are its own',
    (base, nine, version) => {
      // The same question objects, so a correction to 0500 cannot miss 0990.
      expect(nine.questions).toBe(base.questions)
      expect(nine.id).toBe(base.id.replace('0500', '0990'))
      expect(nine.board).toBe('Cambridge (9-1)')
      expect(nine.version).toBe(version)
      expect(nine.title).toBe(base.title)
      expect(nine.paper).toBe(base.paper)
      expect(nine.sourceUrl).toMatch(/first-language-english-0990/)
    },
  )
})

describe('the examiner packs built from these papers', () => {
  it.each([cambridge0500Paper1, cambridge0990Paper1])(
    '$id: Question 1 is counted, Question 3 levels only its language task',
    (scheme) => {
      const pack = derivePack(scheme)
      const kinds = pack.questions.map((q) => [q.id, q.kind, q.max])
      expect(kinds).toEqual([
        ['Q1', 'count', 20],
        ['Q2', 'writing', 20],
        // The short answers are counted point by point beside the levelled
        // language task; the level grid carries 10 of the 20 and says so.
        ['Q3', 'level', 10],
        ['Q4', 'writing', 20],
      ])
      expect(pack.questions[2]!.meta).toMatch(/10 of 20 marks.*marked separately/)
    },
  )

  it.each([cambridge0500Paper2, cambridge0990Paper2])(
    '$id: each section is its grids, summed',
    (scheme) => {
      const pack = derivePack(scheme)
      for (const q of pack.questions) {
        expect(q.kind).toBe('writing')
        if (q.kind === 'writing') {
          expect(q.grids.reduce((n, g) => n + g.max, 0)).toBe(40)
        }
      }
    },
  )
})
