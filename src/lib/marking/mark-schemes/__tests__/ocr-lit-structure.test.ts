import { describe, it, expect } from 'vitest'
import { MARK_SCHEMES } from '@/lib/marking/mark-schemes'

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
 */

function tariffs(id: string, questionId: string): [string, number][] {
  const q = MARK_SCHEMES[id]!.questions.find((x) => x.id === questionId)
  if (!q) throw new Error(`${id} has no ${questionId}`)
  return q.assessmentObjectives.map((a) => [a.id, a.maxMarks])
}

describe('OCR English Literature J352', () => {
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
  ] as const)('%s %s carries %j', (id, questionId, expected) => {
    expect(tariffs(id, questionId)).toEqual(expected)
  })

  it.each(['ocr-lit-component01', 'ocr-lit-component02'])(
    '%s is 80 marks in two 20-mark parts and a 40-mark essay',
    (id) => {
      const scheme = MARK_SCHEMES[id]!
      expect(scheme.questions.map((q) => q.totalMarks)).toEqual([20, 20, 40])
      expect(scheme.totalMarks).toBe(80)
    },
  )

  it('assesses AO4 in Section B of each component only, 4 marks each', () => {
    const ao4 = ['ocr-lit-component01', 'ocr-lit-component02'].flatMap((id) =>
      MARK_SCHEMES[id]!.questions.flatMap((q) =>
        q.assessmentObjectives
          .filter((a) => a.id === 'AO4')
          .map((a) => `${id} ${q.id} ${a.maxMarks}`),
      ),
    )
    expect(ao4).toEqual(['ocr-lit-component01 Section B 4', 'ocr-lit-component02 Section B 4'])
  })

  it('puts Shakespeare in Component 02 and 19th-century prose in Component 01', () => {
    expect(MARK_SCHEMES['ocr-lit-component02']!.questions[2]!.questionType).toMatch(/Shakespeare/)
    const prose = MARK_SCHEMES['ocr-lit-component01']!.questions[2]!
    expect(prose.questionType).toMatch(/19th-century prose/)
    expect(prose.taskDescription).not.toMatch(/Shakespeare|Romeo/)
  })

  it('marks AO4 in OCR’s three performance levels, 1, 2-3 and 4', () => {
    const ao4 = MARK_SCHEMES['ocr-lit-component02']!.questions[2]!.assessmentObjectives.find(
      (a) => a.id === 'AO4',
    )!
    expect(ao4.bands.map((b) => [b.minMarks, b.maxMarks])).toEqual([
      [1, 1],
      [2, 3],
      [4, 4],
    ])
  })
})
