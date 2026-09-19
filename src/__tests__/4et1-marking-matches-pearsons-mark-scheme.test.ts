import { describe, it, expect } from 'vitest'
import { getMarkScheme } from '@/lib/marking/mark-schemes'

/**
 * The 4ET1 marker against Pearson's own published mark scheme.
 *
 * WHAT WAS WRONG (EXAM-5, corrected 19 September 2026). Every number and every
 * objective on this paper was wrong, checked against Mark Scheme (Results) June
 * 2024, Pearson Edexcel International GCSE in English Literature (4ET1) Paper
 * 1R: Poetry and Modern Prose.
 *
 *   declared            actual
 *   60 marks, 1h45      90 marks, 2h
 *   A: 20 AO1 10+AO2 10 A: 20  AO2 20
 *   B: 20 AO1 6+AO2 6+AO4 8   B: 30  AO2 15 + AO3 15
 *   C: 20 AO1 10+AO3 10 C: 40  AO1 20 + AO4 20
 *
 * TWO OF THOSE DO REAL DAMAGE, and they are different kinds of damage.
 *
 * The totals contradicted our own site. The product page for Section C tells a
 * student it is worth 40 marks; the marker returned a score out of 20. A head
 * of English comparing the two finds it in one session, and they are the buyer.
 *
 * The objectives were SWAPPED, which is worse, because the feedback text is
 * generated from the objective. AO3 in 4ET1 is "Explore links and connections
 * between texts" and AO4 is "Show understanding of the relationships between
 * texts and the contexts in which they were written". The code had AO3 as
 * Context and AO4 as Explore connections. So Section B, the comparison
 * question, was marked for context, and Section C, the context question, was
 * marked for comparison. Every student on this paper was advised to do the
 * opposite of what the question asks, on both questions, with the authority of
 * a mark scheme behind it.
 *
 * Section A was also given an AO1 allocation it does not have. It is AO2 only,
 * and no context is credited.
 *
 * WHAT IS DELIBERATELY NOT ASSERTED HERE. Paper 2. The item proposed adding it
 * at 60 marks, but the only primary document read was the Paper 1R mark scheme,
 * which says nothing about Paper 2. A test asserting an unverified tariff would
 * be the same defect one paper along.
 */

const SCHEME = getMarkScheme('edexcel-igcse-lit')

describe('the paper', () => {
  it('exists', () => {
    expect(SCHEME).toBeTruthy()
  })

  it('is 90 marks in two hours, not 60 in 1h45', () => {
    expect(SCHEME?.totalMarks).toBe(90)
    expect(SCHEME?.durationMinutes).toBe(120)
  })

  it('has three sections whose marks sum to the paper total', () => {
    const qs = SCHEME?.questions ?? []
    expect(qs).toHaveLength(3)
    expect(qs.reduce((n, q) => n + q.totalMarks, 0)).toBe(90)
  })
})

describe('each section carries the tariff Pearson prints', () => {
  const section = (id: string) => SCHEME?.questions.find((q) => q.id === id)

  it('Section A is 20 marks of AO2 alone', () => {
    const a = section('Section A')
    expect(a?.totalMarks).toBe(20)
    expect(a?.assessmentObjectives.map((o) => o.id)).toEqual(['AO2'])
    expect(a?.assessmentObjectives[0]?.maxMarks).toBe(20)
  })

  it('Section B is 30 marks, AO2 15 and AO3 15', () => {
    const b = section('Section B')
    expect(b?.totalMarks).toBe(30)
    expect(b?.assessmentObjectives.map((o) => [o.id, o.maxMarks])).toEqual([
      ['AO2', 15],
      ['AO3', 15],
    ])
  })

  it('Section C is 40 marks, AO1 20 and AO4 20', () => {
    const c = section('Section C')
    expect(c?.totalMarks).toBe(40)
    expect(c?.assessmentObjectives.map((o) => [o.id, o.maxMarks])).toEqual([
      ['AO1', 20],
      ['AO4', 20],
    ])
  })

  it('and no section still carries the old equal-thirds shape', () => {
    // The specific wrong answer, named. All three sections at 20 was the shape
    // that made the paper add up to 60.
    const totals = (SCHEME?.questions ?? []).map((q) => q.totalMarks)
    expect(totals).not.toEqual([20, 20, 20])
  })
})

describe('the objectives are not swapped', () => {
  const objectivesOn = (id: string) =>
    SCHEME?.questions.find((q) => q.id === id)?.assessmentObjectives ?? []

  it('the comparison question is marked for comparison', () => {
    // Section B is the anthology comparison. AO3 is the comparison objective.
    const ids = objectivesOn('Section B').map((o) => o.id)
    expect(ids).toContain('AO3')
    expect(ids, 'Section B was marked for context, which is not assessed on it').not.toContain(
      'AO4',
    )
  })

  it('the context question is marked for context', () => {
    const ids = objectivesOn('Section C').map((o) => o.id)
    expect(ids).toContain('AO4')
    expect(ids, 'Section C was marked for comparison, which is not assessed on it').not.toContain(
      'AO3',
    )
  })

  it('labels AO3 as connections and AO4 as context, not the reverse', () => {
    const all = (SCHEME?.questions ?? []).flatMap((q) => q.assessmentObjectives)
    const ao3 = all.filter((o) => o.id === 'AO3')
    const ao4 = all.filter((o) => o.id === 'AO4')
    expect(ao3.length).toBeGreaterThan(0)
    expect(ao4.length).toBeGreaterThan(0)
    for (const o of ao3) expect(o.label).toMatch(/connection/i)
    for (const o of ao4) expect(o.label).toMatch(/context/i)
  })
})

describe('the bands still reach the tariff they are scaled to', () => {
  it('every objective can actually award its maximum', () => {
    // Changing a tariff without rescaling the bands would cap a student below
    // the marks the paper says are available - the defect found on OCR
    // Literature earlier in this backlog.
    for (const q of SCHEME?.questions ?? []) {
      for (const ao of q.assessmentObjectives) {
        const top = Math.max(...ao.bands.map((b) => b.maxMarks))
        expect(top, `${q.id}/${ao.id} tops out at ${top} of ${ao.maxMarks}`).toBe(ao.maxMarks)
      }
      const sum = q.assessmentObjectives.reduce((n, o) => n + o.maxMarks, 0)
      expect(sum, `${q.id} objectives sum to ${sum}, not ${q.totalMarks}`).toBe(q.totalMarks)
    }
  })
})
