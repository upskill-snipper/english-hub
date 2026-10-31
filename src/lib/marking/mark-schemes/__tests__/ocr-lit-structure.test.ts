import { describe, it, expect } from 'vitest'
import { MARK_SCHEMES } from '@/lib/marking/mark-schemes'
import { GUIDE as guide01 } from '@/data/mark-scheme-guides/ocr-lit-component01'
import { GUIDE as guide02 } from '@/data/mark-scheme-guides/ocr-lit-component02'
import type { MarkSchemeGuide } from '@/data/mark-scheme-guides/types'

/**
 * OCR GCSE English Literature (J352) against OCR's own mark schemes.
 *
 * Until 9 October 2026 each component's Section A was one 40-mark question,
 * Component 01 put 8 marks of AO4 in Section A, and Component 02 put AO3 8 and
 * AO4 8 in its poetry; both Section B notes said AO4 was not assessed there.
 * OCR's mark schemes (J352/01 June 2023, J352/02 June 2018) give each
 * question's intended weighting as a share of the GCSE; on an 80-mark paper
 * worth 50%, 1% is 1.6 marks. AO4 is assessed in Section B of each component
 * only (specification, Version 3.0, page 18).
 *
 * Until 24 October 2026 each objective then had a ladder of its own, scaled
 * from a twelve-mark base, where OCR marks each answer as a whole on one
 * six-level grid and AO4 on its own small grid in Section B. Each answer is now
 * one objective for its grid ('AO1-AO3', 'AO1-AO2') at OCR's ranges, which the
 * founder approved (document 30). These tests hold the grids, and the weighting
 * inside each, to the two guides checked twice that day against OCR's June 2024
 * mark schemes (src/data/mark-scheme-guides/ocr-lit-component01.ts, ...02.ts).
 */

const PART = [
  [1, 3],
  [4, 6],
  [7, 10],
  [11, 14],
  [15, 17],
  [18, 20],
]
const ESSAY = [
  [1, 6],
  [7, 12],
  [13, 18],
  [19, 24],
  [25, 30],
  [31, 36],
]
const AO4_LEVELS = [
  [1, 1],
  [2, 3],
  [4, 4],
]

function question(id: string, questionId: string) {
  const q = MARK_SCHEMES[id]!.questions.find((x) => x.id === questionId)
  if (!q) throw new Error(`${id} has no ${questionId}`)
  return q
}

function ranges(bands: readonly { minMarks: number; maxMarks: number }[]): number[][] {
  return [...bands].sort((a, b) => a.minMarks - b.minMarks).map((b) => [b.minMarks, b.maxMarks])
}

/** The objectives a grid covers: 'AO1-AO3' is AO1, AO2 and AO3. */
function covers(gridId: string): string[] {
  const m = /^AO(\d)-AO(\d)$/.exec(gridId)
  if (!m) return [gridId]
  const out: string[] = []
  for (let n = Number(m[1]); n <= Number(m[2]); n++) out.push(`AO${n}`)
  return out
}

/** A guide level's marks, "7-10" or "4", as a range. */
function guideRange(marks: string): number[] {
  const [lo, hi] = marks.split('-').map(Number)
  return [lo!, hi ?? lo!]
}

describe('OCR English Literature J352', () => {
  it.each([
    ['ocr-lit-component01', 'Section A (a)', [['AO1-AO3', 20, PART]]],
    ['ocr-lit-component01', 'Section A (b)', [['AO1-AO2', 20, PART]]],
    [
      'ocr-lit-component01',
      'Section B',
      [
        ['AO1-AO3', 36, ESSAY],
        ['AO4', 4, AO4_LEVELS],
      ],
    ],
    ['ocr-lit-component02', 'Section A (a)', [['AO1-AO2', 20, PART]]],
    ['ocr-lit-component02', 'Section A (b)', [['AO1-AO2', 20, PART]]],
    [
      'ocr-lit-component02',
      'Section B',
      [
        ['AO1-AO3', 36, ESSAY],
        ['AO4', 4, AO4_LEVELS],
      ],
    ],
  ] as const)('%s %s is marked on one grid, as OCR marks it', (id, questionId, expected) => {
    // Until 24 October 2026 these were per-objective ladders: part (a) of
    // Component 01, for one, was AO1 8, AO2 4 and AO3 8 on three ladders, AO2's
    // with four one-mark levels named 1, 3, 4 and 6.
    const q = question(id, questionId)
    expect(q.assessmentObjectives.map((a) => [a.id, a.maxMarks, ranges(a.bands)])).toEqual(expected)
    for (const a of q.assessmentObjectives) {
      expect(a.weighting, `${a.id} weighting`).toBeCloseTo(a.maxMarks / q.totalMarks, 5)
    }
  })

  it.each([
    [
      'ocr-lit-component01',
      'Section A (a)',
      [
        ['AO1', 8],
        ['AO2', 4],
        ['AO3', 8],
      ],
    ],
    [
      'ocr-lit-component01',
      'Section A (b)',
      [
        ['AO1', 10],
        ['AO2', 10],
      ],
    ],
    [
      'ocr-lit-component01',
      'Section B',
      [
        ['AO1', 14],
        ['AO2', 14],
        ['AO3', 8],
        ['AO4', 4],
      ],
    ],
    [
      'ocr-lit-component02',
      'Section A (a)',
      [
        ['AO1', 8],
        ['AO2', 12],
      ],
    ],
    [
      'ocr-lit-component02',
      'Section A (b)',
      [
        ['AO1', 10],
        ['AO2', 10],
      ],
    ],
    [
      'ocr-lit-component02',
      'Section B',
      [
        ['AO1', 14],
        ['AO2', 14],
        ['AO3', 8],
        ['AO4', 4],
      ],
    ],
  ] as const)('%s %s keeps OCR’s weighting %j inside its grids', (id, questionId, split) => {
    const q = question(id, questionId)
    for (const a of q.assessmentObjectives) {
      const inside = split.filter(([ao]) => covers(a.id).includes(ao))
      expect(
        inside.reduce((n, [, marks]) => n + marks, 0),
        `${a.id}: its marks are its objectives'`,
      ).toBe(a.maxMarks)
      if (inside.length > 1) {
        // The model is told the balance OCR intends, in the grid it marks on.
        for (const [ao, marks] of inside) {
          expect(a.description, `${a.id} states ${ao} ${marks}`).toMatch(
            new RegExp(`\\b${ao} ${marks}\\b`),
          )
        }
      }
    }
    expect(q.assessmentObjectives.flatMap((a) => covers(a.id))).toEqual(split.map(([ao]) => ao))
  })

  it.each(['ocr-lit-component01', 'ocr-lit-component02'])(
    '%s is 80 marks in two 20-mark parts and a 40-mark essay',
    (id) => {
      const scheme = MARK_SCHEMES[id]!
      expect(scheme.questions.map((q) => q.totalMarks)).toEqual([20, 20, 40])
      expect(scheme.totalMarks).toBe(80)
      expect(scheme.durationMinutes).toBe(120)
      // Saved essays name these ids (ocr-lit-component02 Section B on
      // 24 October 2026), and the mocks hand off to them: they never change.
      expect(scheme.questions.map((q) => q.id)).toEqual([
        'Section A (a)',
        'Section A (b)',
        'Section B',
      ])
    },
  )

  it('assesses AO4 in Section B of each component only, 4 marks each', () => {
    const ao4 = ['ocr-lit-component01', 'ocr-lit-component02'].flatMap((id) =>
      MARK_SCHEMES[id]!.questions.flatMap((q) =>
        q.assessmentObjectives
          .filter((a) => covers(a.id).includes('AO4'))
          .map((a) => `${id} ${q.id} ${a.id} ${a.maxMarks}`),
      ),
    )
    expect(ao4).toEqual([
      'ocr-lit-component01 Section B AO4 4',
      'ocr-lit-component02 Section B AO4 4',
    ])
  })

  it('puts Shakespeare in Component 02 and 19th-century prose in Component 01', () => {
    expect(MARK_SCHEMES['ocr-lit-component02']!.questions[2]!.questionType).toMatch(/Shakespeare/)
    const prose = MARK_SCHEMES['ocr-lit-component01']!.questions[2]!
    expect(prose.questionType).toMatch(/19th-century prose/)
    expect(prose.taskDescription).not.toMatch(/Shakespeare|Romeo/)
  })

  it.each(['ocr-lit-component01', 'ocr-lit-component02'])(
    '%s marks AO4 in OCR’s three performance levels, 1, 2-3 and 4',
    (id) => {
      const ao4 = MARK_SCHEMES[id]!.questions[2]!.assessmentObjectives.find((a) => a.id === 'AO4')!
      expect(ao4.bands.map((b) => [b.minMarks, b.maxMarks])).toEqual(AO4_LEVELS)
      expect(ao4.bands.map((b) => b.label)).toEqual([
        'Threshold performance',
        'Intermediate performance',
        'High performance',
      ])
    },
  )

  it('names each grid for the objectives it covers, in the upper case the normaliser needs', () => {
    // feedback-generator.ts upper-cases the id the model returns and looks it
    // up exactly, so an id with a lower-case letter never matches its grid; and
    // the prompt shows the label, not the id, so the label must start with it.
    for (const id of ['ocr-lit-component01', 'ocr-lit-component02']) {
      for (const q of MARK_SCHEMES[id]!.questions) {
        for (const a of q.assessmentObjectives) {
          expect(a.id).toBe(a.id.toUpperCase())
          expect(a.label.startsWith(`${a.id} - `), `${id} ${q.id} ${a.label}`).toBe(true)
        }
      }
    }
  })

  it('carries OCR’s caps and rubric rules in the examiner notes', () => {
    const notes = (id: string, qid: string) => question(id, qid).examinerNotes ?? ''
    expect(notes('ocr-lit-component01', 'Section A (b)')).toMatch(
      /discusses only the part \(a\) extract scores 0/,
    )
    expect(notes('ocr-lit-component01', 'Section B')).toMatch(
      /stays inside the extract, or a discursive answer on one moment only, cannot go above Level 3/,
    )
    expect(notes('ocr-lit-component01', 'Section B')).toMatch(/June 2023 [^.]*Level 4/)
    expect(notes('ocr-lit-component02', 'Section A (a)')).toMatch(
      /only one poem is unlikely to rise above Level 2 and cannot go above Level 3/,
    )
    expect(notes('ocr-lit-component02', 'Section A (b)')).toMatch(
      /a poem from another cluster scores 0/,
    )
    expect(notes('ocr-lit-component02', 'Section B')).toMatch(
      /cannot go above Level 3, and [^.]*cannot go above Level 4/,
    )
  })
})

describe('OCR English Literature J352, against its guides', () => {
  it.each([
    ['ocr-lit-component01', guide01],
    ['ocr-lit-component02', guide02],
  ] as [string, MarkSchemeGuide][])(
    '%s: every grid and level range is the guide’s',
    (id, guide) => {
      const scheme = MARK_SCHEMES[id]!
      expect(guide.schemeId).toBe(id)
      expect(scheme.totalMarks).toBe(guide.totalMarks)
      expect(scheme.durationMinutes).toBe(guide.durationMinutes)
      const guided = guide.sections.flatMap((s) => s.questions)
      expect(guided.map((g) => g.markerQuestionId)).toEqual(scheme.questions.map((q) => q.id))
      for (const g of guided) {
        const q = question(id, g.markerQuestionId!)
        expect(q.totalMarks, g.label).toBe(g.marks)
        // Every objective the guide lists is in exactly one grid, and each grid
        // carries exactly the marks of the objectives it covers.
        expect(
          q.assessmentObjectives.flatMap((a) => covers(a.id)),
          `${g.label}: objectives`,
        ).toEqual(g.objectives.map((o) => o.id))
        for (const a of q.assessmentObjectives) {
          const marks = g.objectives
            .filter((o) => covers(a.id).includes(o.id))
            .reduce((n, o) => n + o.marks, 0)
          expect(a.maxMarks, `${g.label} ${a.id}`).toBe(marks)
        }
        // "AO4: Threshold performance" is AO4's own grid; the guide's other
        // levels are the main grid's.
        const named = (name: string) => /^(AO\d):/.exec(name)?.[1]
        const namedAOs = new Set(g.levels.map((l) => named(l.name)).filter(Boolean))
        for (const a of q.assessmentObjectives) {
          const own = g.levels.filter((l) => {
            const n = named(l.name)
            return n ? covers(a.id).includes(n) : !covers(a.id).some((x) => namedAOs.has(x))
          })
          expect(ranges(a.bands), `${g.label} ${a.id}`).toEqual(own.map((l) => guideRange(l.marks)))
        }
      }
    },
  )
})
