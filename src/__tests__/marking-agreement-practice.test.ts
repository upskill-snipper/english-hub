import { describe, it, expect } from 'vitest'
import { boardAgreementFromRows } from '@/lib/marking/agreement'
import { comparePractice } from '@/lib/marking/practice'

describe('boardAgreementFromRows', () => {
  it('computes exact / within-1 / mean-abs-error per board and ignores incomplete rows', () => {
    const out = boardAgreementFromRows([
      { exam_board: 'EDEXCEL_IGCSE', ai_predicted_mark: 9, teacher_final_mark: 9 }, // exact
      { exam_board: 'EDEXCEL_IGCSE', ai_predicted_mark: 8, teacher_final_mark: 9 }, // within 1
      { exam_board: 'EDEXCEL_IGCSE', ai_predicted_mark: 5, teacher_final_mark: 9 }, // off by 4
      { exam_board: 'EDEXCEL_IGCSE', ai_predicted_mark: null, teacher_final_mark: 9 }, // ignored
      { exam_board: '', ai_predicted_mark: 1, teacher_final_mark: 1 }, // ignored (no board)
      { exam_board: 'AQA', ai_predicted_mark: 6, teacher_final_mark: 6 },
    ])
    const edexcel = out.find((b) => b.board === 'EDEXCEL_IGCSE')!
    expect(edexcel.n).toBe(3)
    expect(edexcel.exactPct).toBe(33.3)
    expect(edexcel.within1Pct).toBe(66.7)
    expect(edexcel.meanAbsError).toBe(round2((0 + 1 + 4) / 3))
    // sorted by sample size desc → EDEXCEL_IGCSE (3) before AQA (1)
    expect(out[0].board).toBe('EDEXCEL_IGCSE')
  })

  it('returns [] for no usable rows', () => {
    expect(boardAgreementFromRows([])).toEqual([])
  })
})

function round2(n: number): number {
  return Math.round(n * 100) / 100
}

describe('comparePractice', () => {
  it('flags an exact match', () => {
    const c = comparePractice({ mark: 9, grade: '7' }, { score: 9, grade: '7' })
    expect(c.verdict).toBe('exact')
    expect(c.markDelta).toBe(0)
    expect(c.gradeMatch).toBe(true)
  })
  it('flags close (within 1) and signed delta', () => {
    const c = comparePractice({ mark: 9, grade: null }, { score: 10 })
    expect(c.verdict).toBe('close')
    expect(c.markDelta).toBe(1)
    expect(c.gradeMatch).toBeNull()
  })
  it('flags off (>1) and compares per-AO', () => {
    const c = comparePractice(
      { mark: 12, grade: '8', ao: { AO2: 12 } },
      { score: 6, grade: '5', ao: { AO2: 6 } },
    )
    expect(c.verdict).toBe('off')
    expect(c.absError).toBe(6)
    expect(c.gradeMatch).toBe(false)
    expect(c.aoComparison[0]).toMatchObject({ ao: 'AO2', expected: 12, yours: 6, delta: -6 })
  })
  it('returns unknown when marks are missing', () => {
    const c = comparePractice({ mark: null, grade: null }, { score: null })
    expect(c.verdict).toBe('unknown')
  })
})
