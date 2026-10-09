import { describe, it, expect } from 'vitest'
import { MARK_SCHEMES } from '@/lib/marking/mark-schemes'

/**
 * WJEC Eduqas GCSE English Literature (C720QS) against Eduqas's own documents.
 *
 * Until 9 October 2026 each component was two 40-mark questions: Component 1
 * put AO3 on Shakespeare and AO4 on poetry, the reverse of what Eduqas
 * assesses, and Component 2 was 80 marks with no unseen poetry, where Eduqas
 * sets 120 marks in three sections. Eduqas's specification (pages 7 to 10) and
 * its Summer 2024 mark schemes (C720U10-1, C720U20-1) set:
 *   - Component 1, 80 marks: Shakespeare, an extract question of 15 (AO1, AO2)
 *     and an essay of 20 plus 5 for AO4; poetry, a named anthology poem of 15
 *     and a comparison with a second of 25 (AO1, AO2, AO3).
 *   - Component 2, 120 marks: post-1914 prose or drama, 35 (AO1, AO2) plus 5
 *     for AO4; 19th-century prose, 40 (AO1, AO2, AO3); unseen poetry, 15 and
 *     25 (AO1, AO2).
 * The mark schemes weight a question's objectives equally; the corpus splits
 * each total that way, AO1 taking any odd mark.
 */

function tariffs(id: string, questionId: string): [string, number][] {
  const q = MARK_SCHEMES[id]!.questions.find((x) => x.id === questionId)
  if (!q) throw new Error(`${id} has no ${questionId}`)
  return q.assessmentObjectives.map((a) => [a.id, a.maxMarks])
}

function ranges(id: string, questionId: string, aoId: string): number[][] {
  const q = MARK_SCHEMES[id]!.questions.find((x) => x.id === questionId)!
  const ao = q.assessmentObjectives.find((a) => a.id === aoId)!
  return [...ao.bands].sort((x, y) => x.minMarks - y.minMarks).map((b) => [b.minMarks, b.maxMarks])
}

describe('Eduqas English Literature C720', () => {
  it.each([
    [
      'eduqas-lit-comp1',
      'Section A (a)',
      [
        ['AO1', 8],
        ['AO2', 7],
      ],
    ],
    [
      'eduqas-lit-comp1',
      'Section A (b)',
      [
        ['AO1', 10],
        ['AO2', 10],
        ['AO4', 5],
      ],
    ],
    [
      'eduqas-lit-comp1',
      'Section B (a)',
      [
        ['AO1', 5],
        ['AO2', 5],
        ['AO3', 5],
      ],
    ],
    [
      'eduqas-lit-comp1',
      'Section B (b)',
      [
        ['AO1', 9],
        ['AO2', 8],
        ['AO3', 8],
      ],
    ],
    [
      'eduqas-lit-comp2',
      'Section A',
      [
        ['AO1', 18],
        ['AO2', 17],
        ['AO4', 5],
      ],
    ],
    [
      'eduqas-lit-comp2',
      'Section B',
      [
        ['AO1', 14],
        ['AO2', 13],
        ['AO3', 13],
      ],
    ],
    [
      'eduqas-lit-comp2',
      'Section C (a)',
      [
        ['AO1', 8],
        ['AO2', 7],
      ],
    ],
    [
      'eduqas-lit-comp2',
      'Section C (b)',
      [
        ['AO1', 13],
        ['AO2', 12],
      ],
    ],
  ] as const)('%s %s carries %j', (id, questionId, expected) => {
    expect(tariffs(id, questionId)).toEqual(expected)
  })

  it('sets Component 1 as 15 + 25 + 15 + 25 = 80 marks in two hours', () => {
    const c1 = MARK_SCHEMES['eduqas-lit-comp1']!
    expect(c1.questions.map((q) => q.totalMarks)).toEqual([15, 25, 15, 25])
    expect(c1.totalMarks).toBe(80)
    expect(c1.durationMinutes).toBe(120)
  })

  it('sets Component 2 as 40 + 40 + 15 + 25 = 120 marks in two and a half hours', () => {
    const c2 = MARK_SCHEMES['eduqas-lit-comp2']!
    expect(c2.questions.map((q) => q.totalMarks)).toEqual([40, 40, 15, 25])
    expect(c2.totalMarks).toBe(120)
    expect(c2.durationMinutes).toBe(150)
  })

  it('assesses AO4 on the Shakespeare essay and the post-1914 question only, and AO3 on the anthology poems and the 19th-century novel only', () => {
    const where = (aoId: string) =>
      ['eduqas-lit-comp1', 'eduqas-lit-comp2'].flatMap((id) =>
        MARK_SCHEMES[id]!.questions.filter((q) =>
          q.assessmentObjectives.some((a) => a.id === aoId),
        ).map((q) => `${id} ${q.id}`),
      )
    expect(where('AO4')).toEqual(['eduqas-lit-comp1 Section A (b)', 'eduqas-lit-comp2 Section A'])
    expect(where('AO3')).toEqual([
      'eduqas-lit-comp1 Section B (a)',
      'eduqas-lit-comp1 Section B (b)',
      'eduqas-lit-comp2 Section B',
    ])
  })

  it('marks AO4 on Eduqas’s three performance levels, 1, 2-3 and 4-5', () => {
    for (const [id, qid] of [
      ['eduqas-lit-comp1', 'Section A (b)'],
      ['eduqas-lit-comp2', 'Section A'],
    ]) {
      expect(ranges(id!, qid!, 'AO4')).toEqual([
        [1, 1],
        [2, 3],
        [4, 5],
      ])
    }
  })

  it('gives every other objective five bands, starting at 1 and reaching its share', () => {
    for (const id of ['eduqas-lit-comp1', 'eduqas-lit-comp2']) {
      for (const q of MARK_SCHEMES[id]!.questions) {
        for (const ao of q.assessmentObjectives.filter((a) => a.id !== 'AO4')) {
          const r = ranges(id, q.id, ao.id)
          expect(r, `${id} ${q.id} ${ao.id}`).toHaveLength(5)
          expect(r[0]![0], `${id} ${q.id} ${ao.id}`).toBe(1)
          expect(r[4]![1], `${id} ${q.id} ${ao.id}`).toBe(ao.maxMarks)
        }
      }
    }
  })

  it('describes the poetry question as two anthology poems and unseen poetry as Component 2', () => {
    const c1 = MARK_SCHEMES['eduqas-lit-comp1']!
    expect(c1.questions[3]!.taskDescription).toMatch(/one other poem from the anthology/)
    expect(c1.questions.map((q) => q.taskDescription).join(' ')).not.toMatch(/unseen/i)
    const c2 = MARK_SCHEMES['eduqas-lit-comp2']!
    expect(c2.questions[2]!.questionType).toMatch(/unseen/i)
    expect(c2.questions[1]!.taskDescription).toMatch(/printed extract/)
  })
})
