import { describe, it, expect } from 'vitest'
import { MARK_SCHEMES } from '@/lib/marking/mark-schemes'
import { isSpecVerified } from '@/lib/marking/examiner/verification'

/**
 * AQA GCSE English Literature (8702) against AQA's own mark schemes.
 *
 * Paper 2 had no scheme until 9 October 2026, so the 8702/2 mocks and every
 * AQA modern-text, anthology and unseen-poetry answer got general feedback with
 * no marks. Its tariffs here are AQA's June 2023 8702/2 mark scheme: Section A
 * 30 (AO1 12, AO2 12, AO3 6) and 4 for AO4, "assessed on Section A only";
 * Section B 30 (AO1 12, AO2 12, AO3 6); 27.1 24 (AO1 12, AO2 12); 27.2 8 (AO2).
 * Paper 1's are its June 2023 8702/1 mark scheme: AO4 on Section A only.
 */

const lit1 = MARK_SCHEMES['aqa-lit-paper1']!
const lit2 = MARK_SCHEMES['aqa-lit-paper2']!

function tariffs(id: string, questionId: string): [string, number][] {
  const q = MARK_SCHEMES[id]!.questions.find((x) => x.id === questionId)!
  return q.assessmentObjectives.map((a) => [a.id, a.maxMarks])
}

describe('AQA English Literature Paper 2 (8702/2)', () => {
  it('is 96 marks in 2 hours 15 minutes', () => {
    expect(lit2.totalMarks).toBe(96)
    expect(lit2.durationMinutes).toBe(135)
    expect(lit2.questions.reduce((s, q) => s + q.totalMarks, 0)).toBe(96)
  })

  it.each([
    [
      'Section A',
      34,
      [
        ['AO1', 12],
        ['AO2', 12],
        ['AO3', 6],
        ['AO4', 4],
      ],
    ],
    [
      'Section B',
      30,
      [
        ['AO1', 12],
        ['AO2', 12],
        ['AO3', 6],
      ],
    ],
    [
      'Section C (a)',
      24,
      [
        ['AO1', 12],
        ['AO2', 12],
      ],
    ],
    ['Section C (b)', 8, [['AO2', 8]]],
  ] as const)('%s is %i marks: %j', (questionId, total, expected) => {
    expect(tariffs('aqa-lit-paper2', questionId)).toEqual(expected)
    expect(lit2.questions.find((q) => q.id === questionId)!.totalMarks).toBe(total)
  })

  it('gives the anthology comparison no SPaG, and calls its second poem studied', () => {
    const b = lit2.questions.find((q) => q.id === 'Section B')!
    expect(b.assessmentObjectives.map((a) => a.id)).not.toContain('AO4')
    expect(b.taskDescription).not.toMatch(/unseen/i)
  })

  it('marks question 27.2 in AQA’s four levels, 1-2 to 7-8', () => {
    const ao = lit2.questions.find((q) => q.id === 'Section C (b)')!.assessmentObjectives[0]!
    expect(ao.bands.map((b) => [b.minMarks, b.maxMarks])).toEqual([
      [1, 2],
      [3, 4],
      [5, 6],
      [7, 8],
    ])
  })

  it('says it is unverified, because its descriptors are paraphrases', () => {
    expect(isSpecVerified('aqa-lit-paper2')).toBe(false)
  })
})

describe('AQA English Literature: AO4 on each paper', () => {
  it('assesses AO4 on Section A of each paper only, 4 marks each, 8 in all', () => {
    const ao4 = [lit1, lit2].flatMap((p) =>
      p.questions.flatMap((q) =>
        q.assessmentObjectives
          .filter((a) => a.id === 'AO4')
          .map((a) => `${p.id} ${q.id} ${a.maxMarks}`),
      ),
    )
    expect(ao4).toEqual(['aqa-lit-paper1 Section A 4', 'aqa-lit-paper2 Section A 4'])
  })
})
