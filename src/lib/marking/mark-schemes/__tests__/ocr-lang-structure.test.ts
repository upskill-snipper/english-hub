import { describe, it, expect } from 'vitest'
import { MARK_SCHEMES } from '@/lib/marking/mark-schemes'
import { MARKER_NOT_ALIGNED } from '@/lib/marking/guide-links'
import { GUIDE as guide01 } from '@/data/mark-scheme-guides/ocr-lang-component01'
import { GUIDE as guide02 } from '@/data/mark-scheme-guides/ocr-lang-component02'
import type { MarkSchemeGuide } from '@/data/mark-scheme-guides/types'

/**
 * OCR GCSE English Language (J351) against its two guides, which were checked
 * twice on 24 October 2026 against OCR's J351/01 and J351/02 mark schemes for
 * June 2024 and the J351 specification (Version 2.0).
 *
 * Until 24 October 2026 the marker did not mark OCR's questions. Component 01
 * marked Question 4 as a 10-mark comparison (OCR: 18 marks, AO3 6 and AO4 12 on
 * two grids) and had an 8-mark proofreading question, Q5-SPaG, that the paper
 * does not have. Component 02's reading questions were 16, 16 and 8 marks with
 * the writing as Q4, where OCR sets 4, 6, 12 and 18 and the writing is
 * Question 5 or 6. The founder approved the correction (document 30). These
 * tests hold every question's marks, each objective's marks and each grid's
 * level ranges to the guides, and to the figures themselves.
 */

const ONE_MARK_SIX = [1, 2, 3, 4, 5, 6].map((n) => [n, n])
const TWO_MARK_SIX = [1, 2, 3, 4, 5, 6].map((n) => [n * 2 - 1, n * 2])
const FOUR_MARK_SIX = [1, 2, 3, 4, 5, 6].map((n) => [n * 4 - 3, n * 4])
const FOUR_MARK_FOUR = [1, 2, 3, 4].map((n) => [n * 4 - 3, n * 4])
const POINT_MARKED_4 = [[1, 4]]

/** Each question: its id, its marks, and each grid's objective, marks and ranges. */
const EXPECTED: Record<string, [string, number, [string, number, number[][]][]][]> = {
  'ocr-lang-component01': [
    ['Q1', 4, [['AO1', 4, POINT_MARKED_4]]],
    [
      'Q2',
      6,
      [
        [
          'AO1',
          6,
          [
            [1, 2],
            [3, 4],
            [5, 6],
          ],
        ],
      ],
    ],
    ['Q3', 12, [['AO2', 12, TWO_MARK_SIX]]],
    [
      'Q4',
      18,
      [
        ['AO3', 6, ONE_MARK_SIX],
        ['AO4', 12, TWO_MARK_SIX],
      ],
    ],
    [
      'Q5/Q6',
      40,
      [
        ['AO5', 24, FOUR_MARK_SIX],
        ['AO6', 16, FOUR_MARK_FOUR],
      ],
    ],
  ],
  'ocr-lang-component02': [
    ['Q1', 4, [['AO1', 4, POINT_MARKED_4]]],
    ['Q2', 6, [['AO2', 6, ONE_MARK_SIX]]],
    ['Q3', 12, [['AO2', 12, TWO_MARK_SIX]]],
    [
      'Q4',
      18,
      [
        ['AO3', 6, ONE_MARK_SIX],
        ['AO4', 12, TWO_MARK_SIX],
      ],
    ],
    [
      'Q5/Q6',
      40,
      [
        ['AO5', 24, FOUR_MARK_SIX],
        ['AO6', 16, FOUR_MARK_FOUR],
      ],
    ],
  ],
}

function scheme(id: string) {
  const s = MARK_SCHEMES[id]
  if (!s) throw new Error(`${id} is not registered`)
  return s
}

function question(id: string, questionId: string) {
  const q = scheme(id).questions.find((x) => x.id === questionId)
  if (!q) throw new Error(`${id} has no ${questionId}`)
  return q
}

function ranges(bands: readonly { minMarks: number; maxMarks: number }[]): number[][] {
  return [...bands].sort((a, b) => a.minMarks - b.minMarks).map((b) => [b.minMarks, b.maxMarks])
}

/** A guide level's marks, "7-8" or "4", as a range. */
function guideRange(marks: string): number[] {
  const [lo, hi] = marks.split('-').map(Number)
  return [lo!, hi ?? lo!]
}

describe('OCR English Language J351, question by question', () => {
  it.each(Object.keys(EXPECTED))('%s is 80 marks in 120 minutes, in OCR’s five questions', (id) => {
    const s = scheme(id)
    expect(s.totalMarks).toBe(80)
    expect(s.durationMinutes).toBe(120)
    expect(s.questions.map((q) => [q.id, q.totalMarks])).toEqual(
      EXPECTED[id]!.map(([qid, marks]) => [qid, marks]),
    )
    expect(s.questions.reduce((n, q) => n + q.totalMarks, 0)).toBe(80)
  })

  const rows = Object.entries(EXPECTED).flatMap(([id, qs]) =>
    qs.map(([qid, marks, grids]) => [id, qid, marks, grids] as const),
  )

  it.each(rows)('%s %s: %i marks, on its grids at OCR’s ranges', (id, qid, marks, grids) => {
    const q = question(id, qid)
    expect(q.totalMarks).toBe(marks)
    expect(
      q.assessmentObjectives.map((a) => [a.id, a.maxMarks, ranges(a.bands)]),
      'objective, marks and level ranges',
    ).toEqual(grids)
    for (const a of q.assessmentObjectives) {
      // The share of the question's marks, as the engine reads it.
      expect(a.weighting, `${qid} ${a.id} weighting`).toBeCloseTo(a.maxMarks / marks, 5)
    }
  })

  it.each([
    ['ocr-lang-component01', { AO1: 10, AO2: 12, AO3: 6, AO4: 12, AO5: 24, AO6: 16 }],
    ['ocr-lang-component02', { AO1: 4, AO2: 18, AO3: 6, AO4: 12, AO5: 24, AO6: 16 }],
  ])('%s adds up, objective by objective, as the guide says', (id, totals) => {
    // Until 24 October 2026: Component 01 AO3 10 and AO4 8; Component 02 AO1 0,
    // AO2 16, AO3 8 and AO4 16.
    const byAO: Record<string, number> = {}
    for (const q of scheme(id).questions) {
      for (const a of q.assessmentObjectives) byAO[a.id] = (byAO[a.id] ?? 0) + a.maxMarks
    }
    expect(byAO).toEqual(totals)
  })
})

describe('OCR English Language J351, against its guides', () => {
  it.each([
    ['ocr-lang-component01', guide01],
    ['ocr-lang-component02', guide02],
  ] as [string, MarkSchemeGuide][])(
    '%s: every guide question names the marker question that marks it as OCR does',
    (id, guide) => {
      const s = scheme(id)
      expect(guide.schemeId).toBe(id)
      expect(s.totalMarks).toBe(guide.totalMarks)
      expect(s.durationMinutes).toBe(guide.durationMinutes)
      const guided = guide.sections.flatMap((sec) => sec.questions)
      // One guide question for each marker question, and no marker question left over.
      expect(guided.map((g) => g.markerQuestionId)).toEqual(s.questions.map((q) => q.id))
      for (const g of guided) {
        const q = question(id, g.markerQuestionId!)
        expect(q.totalMarks, g.label).toBe(g.marks)
        expect(
          q.assessmentObjectives.map((a) => [a.id, a.maxMarks]),
          `${g.label}: objectives`,
        ).toEqual(g.objectives.map((o) => [o.id, o.marks]))
        for (const a of q.assessmentObjectives) {
          // "Level 1 (AO3)" names its grid; a question on one grid says "Level 1".
          const own = g.levels.filter((l) =>
            q.assessmentObjectives.length === 1 ? true : l.name.endsWith(`(${a.id})`),
          )
          if (own.length === 0) {
            // Marked point by point: no levels in the guide, one band in the marker.
            expect(ranges(a.bands), `${g.label} ${a.id}`).toEqual([[1, a.maxMarks]])
          } else {
            expect(ranges(a.bands), `${g.label} ${a.id}`).toEqual(
              own.map((l) => guideRange(l.marks)),
            )
          }
        }
      }
    },
  )

  it('takes both components off the guides’ list of papers the marker does not follow', () => {
    expect(MARKER_NOT_ALIGNED.has('ocr-lang-component01')).toBe(false)
    expect(MARKER_NOT_ALIGNED.has('ocr-lang-component02')).toBe(false)
  })
})

describe('OCR English Language J351, the rules in the examiner notes', () => {
  it('has no proofreading question, which OCR does not set', () => {
    // Q5-SPaG was 8 marks of "AO4" for correcting a passage. AO4 in English
    // Language is critical evaluation; spelling and punctuation are AO6.
    for (const id of Object.keys(EXPECTED)) {
      const types = scheme(id).questions.map((q) => `${q.id} ${q.questionType}`)
      expect(
        types.filter((t) => /SPaG|proofread|editing/i.test(t)),
        id,
      ).toEqual([])
    }
  })

  it.each(Object.keys(EXPECTED))('%s marks Question 1 point by point, not on levels', (id) => {
    const q = question(id, 'Q1')
    expect(q.assessmentObjectives).toHaveLength(1)
    expect(q.assessmentObjectives[0]!.bands).toHaveLength(1)
    expect(q.examinerNotes).toMatch(/point by point, not on levels/)
    expect(q.examinerNotes).toMatch(/lines the question names/)
  })

  it.each(Object.keys(EXPECTED))(
    '%s marks Question 4 on two grids that are added, evaluation and comparison',
    (id) => {
      const q = question(id, 'Q4')
      expect(q.examinerNotes).toMatch(/Two grids, marked separately and added/)
      expect(q.examinerNotes).toMatch(/AO4, 12 marks/)
      expect(q.examinerNotes).toMatch(/AO3, 6 marks/)
      expect(q.taskDescription).toMatch(/statement about both texts/)
    },
  )

  it.each(Object.keys(EXPECTED))('%s sets the writing as Question 5 or 6, one chosen', (id) => {
    const q = question(id, 'Q5/Q6')
    expect(q.examinerNotes).toMatch(/answers one task, Question 5 or Question 6/)
    expect(q.examinerNotes).toMatch(/AO5, 24 marks/)
    expect(q.examinerNotes).toMatch(/AO6, 16 marks/)
  })

  it('asks for language and structure together, as OCR’s levels do', () => {
    for (const [id, qid] of [
      ['ocr-lang-component01', 'Q3'],
      ['ocr-lang-component02', 'Q2'],
      ['ocr-lang-component02', 'Q3'],
    ]) {
      expect(question(id!, qid!).examinerNotes, `${id} ${qid}`).toMatch(
        /Language and structure both count/,
      )
    }
  })

  it('keeps Component 02 to 20th- and 21st-century prose, with no 19th-century source', () => {
    // The old Q1 allowed "a 19th-century or literary non-fiction source"; the
    // specification sets no 19th-century text in this component.
    for (const q of scheme('ocr-lang-component02').questions) {
      expect(`${q.questionType} ${q.taskDescription}`, q.id).not.toMatch(/19th/)
    }
  })

  it('gives every objective an upper-case id, which the feedback normaliser needs', () => {
    for (const id of Object.keys(EXPECTED)) {
      for (const q of scheme(id).questions) {
        for (const a of q.assessmentObjectives) expect(a.id).toBe(a.id.toUpperCase())
      }
    }
  })
})
