import { describe, it, expect } from 'vitest'
import { MARK_SCHEMES } from '@/lib/marking/mark-schemes'
import type { MarkScheme } from '@/lib/marking/mark-schemes/types'

/**
 * Edexcel 1EN0 and 1ET0 against Pearson's own breakdown of assessment
 * objectives by component.
 *
 * Both files used to be AQA's papers with Edexcel's totals written on them.
 * Language Paper 1 had 4/8/8/20 questions where Pearson's are 1/2/6/15;
 * Literature invented an "AO4 - Comparison" worth 16 marks while the same file,
 * forty lines away, defined AO4 correctly as spelling, punctuation and grammar
 * (worth 8, and assessed once in the whole qualification).
 *
 * Edexcel is the second GCSE cohort in England and the board most often chosen
 * by the academies a solo teacher works in. Until this was fixed the product
 * marked their students against a paper that does not exist, and the product's
 * own public pages already stated the correct Paper 1 tariffs - so the site
 * contradicted its own marking engine.
 *
 * The tests below are deliberately built around the QUALIFICATION AO TOTALS.
 * Any single tariff can be typed wrongly and still look plausible; the six
 * totals only reconcile if the whole structure is right. That is the check.
 */

const lang1 = MARK_SCHEMES['edexcel-lang-paper1']!
const lang2 = MARK_SCHEMES['edexcel-lang-paper2']!
const lit1 = MARK_SCHEMES['edexcel-lit-paper1']!
const lit2 = MARK_SCHEMES['edexcel-lit-paper2']!

/** Marks per assessment objective across a set of papers. */
function aoTotals(...papers: MarkScheme[]): Record<string, number> {
  const out: Record<string, number> = {}
  for (const p of papers) {
    for (const q of p.questions) {
      for (const ao of q.assessmentObjectives) {
        out[ao.id] = (out[ao.id] ?? 0) + ao.maxMarks
      }
    }
  }
  return out
}

/** Tariffs in paper order, for comparison with the question paper itself. */
function tariffs(p: MarkScheme): number[] {
  return p.questions.map((q) => q.totalMarks)
}

// ─── English Language 1EN0 ──────────────────────────────────────────────

describe('Edexcel GCSE English Language (1EN0)', () => {
  it('has Pearson question tariffs on Paper 1, not AQA ones', () => {
    // Was 4, 8, 8, 20, 24. Pearson: Q1 1, Q2 2, Q3 6, Q4 15, then a choice of
    // one 40-mark writing task. The product's own /resources page for this
    // paper already said 1, 2, 6, 15.
    expect(tariffs(lang1)).toEqual([1, 2, 6, 15, 40])
    expect(lang1.totalMarks).toBe(64)
  })

  it('has Pearson question tariffs on Paper 2', () => {
    // Was 4, 8, 12, 16, 28, 28 - including two 28-mark writing tasks when a
    // candidate answers only one.
    expect(tariffs(lang2)).toEqual([2, 2, 15, 1, 1, 15, 6, 14, 40])
    expect(lang2.totalMarks).toBe(96)
  })

  it('splits Paper 2 as 56 reading and 40 writing, not the reverse', () => {
    const writing = lang2.questions.filter((q) =>
      q.assessmentObjectives.some((ao) => ao.id === 'AO5'),
    )
    const writingMarks = writing.reduce((a, q) => a + q.totalMarks, 0)
    expect(writingMarks).toBe(40)
    expect(lang2.totalMarks - writingMarks).toBe(56)
  })

  it("reconciles against the specification's AO breakdown table", () => {
    // AO1 15, AO2 21, AO3 14, AO4 30, AO5 48, AO6 32 = 160.
    expect(aoTotals(lang1, lang2)).toEqual({
      AO1: 15,
      AO2: 21,
      AO3: 14,
      AO4: 30,
      AO5: 48,
      AO6: 32,
    })
  })

  it('assesses AO3 on Paper 2 only, where the two texts are compared', () => {
    expect(aoTotals(lang1).AO3).toBeUndefined()
    const q7b = lang2.questions.find((q) => q.id === 'Q7b')
    expect(q7b?.assessmentObjectives.map((a) => a.id)).toEqual(['AO3'])
    expect(q7b?.totalMarks).toBe(14)
  })

  it('gives each writing task 24 for AO5 and 16 for AO6', () => {
    for (const paper of [lang1, lang2]) {
      const writing = paper.questions.find((q) =>
        q.assessmentObjectives.some((ao) => ao.id === 'AO5'),
      )!
      const byId = Object.fromEntries(writing.assessmentObjectives.map((a) => [a.id, a.maxMarks]))
      expect(byId).toEqual({ AO5: 24, AO6: 16 })
    }
  })
})

// ─── English Literature 1ET0 ────────────────────────────────────────────

describe('Edexcel GCSE English Literature (1ET0)', () => {
  it('no longer invents a 16-mark comparison objective', () => {
    // The file defined "AO4 - Comparison" worth 16 on Paper 2 Section B while
    // also defining AO4 as spelling, punctuation and grammar. Comparison is
    // AO3, and AO4 is worth 8 in the entire qualification.
    for (const paper of [lit1, lit2]) {
      for (const q of paper.questions) {
        for (const ao of q.assessmentObjectives) {
          if (ao.id !== 'AO4') continue
          expect(ao.label.toLowerCase(), `${paper.id} ${q.id}`).not.toContain('comparison')
          expect(ao.label.toLowerCase()).toContain('spelling')
        }
      }
    }
  })

  it('assesses AO4 exactly once, on Paper 1 Section B, for 8 marks', () => {
    expect(aoTotals(lit1, lit2).AO4).toBe(8)
    const withAo4 = [...lit1.questions, ...lit2.questions].filter((q) =>
      q.assessmentObjectives.some((ao) => ao.id === 'AO4'),
    )
    expect(withAo4.map((q) => q.id)).toEqual(['Section B'])
  })

  it("reconciles against the specification's AO breakdown table", () => {
    // AO1 59, AO2 67, AO3 26, AO4 8 = 160.
    expect(aoTotals(lit1, lit2)).toEqual({ AO1: 59, AO2: 67, AO3: 26, AO4: 8 })
  })

  it('marks each extract question on AO2 alone', () => {
    // Both extract questions used to carry AO1, AO2 and AO3 together.
    for (const paper of [lit1, lit2]) {
      const a = paper.questions.find((q) => q.id === 'Section A (a)')!
      expect(
        a.assessmentObjectives.map((x) => x.id),
        paper.id,
      ).toEqual(['AO2'])
      expect(a.totalMarks).toBe(20)
    }
  })

  it('does not assess AO3 anywhere in Paper 2 Section A', () => {
    const sectionA = lit2.questions.filter((q) => q.id.startsWith('Section A'))
    const ids = sectionA.flatMap((q) => q.assessmentObjectives.map((a) => a.id))
    expect(ids).not.toContain('AO3')
  })

  it('does not assess AO2 in Paper 1 Section B', () => {
    const b = lit1.questions.find((q) => q.id === 'Section B')!
    expect(b.assessmentObjectives.map((a) => a.id)).toEqual(['AO1', 'AO3', 'AO4'])
  })
})

// ─── Invariants that hold however the papers are shaped ─────────────────

describe('both Edexcel qualifications', () => {
  it.each([
    ['language', lang1, lang2],
    ['literature', lit1, lit2],
  ] as const)('%s is worth 160 marks across its two papers', (_name, a, b) => {
    expect(a.totalMarks + b.totalMarks).toBe(160)
  })

  it.each([lang1, lang2, lit1, lit2])('$id questions sum to the paper total', (paper) => {
    const sum = paper.questions.reduce((a, q) => a + q.totalMarks, 0)
    expect(sum).toBe(paper.totalMarks)
  })

  it.each([lang1, lang2, lit1, lit2])('$id objectives sum to each question total', (paper) => {
    for (const q of paper.questions) {
      const sum = q.assessmentObjectives.reduce((a, ao) => a + ao.maxMarks, 0)
      expect(sum, `${paper.id} ${q.id}`).toBe(q.totalMarks)
    }
  })

  it.each([lang1, lang2, lit1, lit2])('$id has contiguous bands reaching each maximum', (paper) => {
    for (const q of paper.questions) {
      for (const ao of q.assessmentObjectives) {
        const bands = [...ao.bands].sort((x, y) => x.minMarks - y.minMarks)
        expect(bands[0]!.minMarks, `${paper.id} ${q.id} ${ao.id} starts above 1`).toBe(1)
        expect(
          bands[bands.length - 1]!.maxMarks,
          `${paper.id} ${q.id} ${ao.id} cannot award its top mark`,
        ).toBe(ao.maxMarks)
        for (let i = 1; i < bands.length; i++) {
          expect(bands[i]!.minMarks, `${paper.id} ${q.id} ${ao.id} band ${i + 1}`).toBe(
            bands[i - 1]!.maxMarks + 1,
          )
        }
      }
    }
  })
})
