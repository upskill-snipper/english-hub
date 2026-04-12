import { describe, it, expect } from 'vitest'
import { predictGrade, predictGradeFromTotals } from '@/lib/marking/grade-predictor'
import type { AOScore } from '@/lib/marking/mark-schemes/types'

// ─── Helpers ────────────────────────────────────────────────────────────────────

/** Build a minimal AOScore for testing. */
function ao(id: string, marks: number, maxMarks: number): AOScore {
  return { id, label: id, marks, maxMarks, band: '', justification: '' }
}

// ─── predictGrade — various AO score combinations ──────────────────────────────

describe('predictGrade', () => {
  it('returns Grade 9 for 82%+ (AQA boundary)', () => {
    const result = predictGrade([ao('AO1', 42, 50)])
    // 42/50 = 84%
    expect(result.grade).toBe('9')
    expect(result.band).toBe('Grade 8-9')
  })

  it('returns Grade 8 for 73-81%', () => {
    const result = predictGrade([ao('AO1', 75, 100)])
    expect(result.grade).toBe('8')
    expect(result.band).toBe('Grade 8-9')
  })

  it('returns Grade 7 for 64-72%', () => {
    const result = predictGrade([ao('AO1', 65, 100)])
    expect(result.grade).toBe('7')
    expect(result.band).toBe('Grade 6-7')
  })

  it('returns Grade 6 for 55-63%', () => {
    const result = predictGrade([ao('AO1', 58, 100)])
    expect(result.grade).toBe('6')
    expect(result.band).toBe('Grade 6-7')
  })

  it('returns Grade 5 for 46-54%', () => {
    const result = predictGrade([ao('AO1', 50, 100)])
    expect(result.grade).toBe('5')
    expect(result.band).toBe('Grade 4-5')
  })

  it('returns Grade 4 for 37-45%', () => {
    const result = predictGrade([ao('AO1', 40, 100)])
    expect(result.grade).toBe('4')
    expect(result.band).toBe('Grade 4-5')
  })

  it('returns Grade 3 for 28-36%', () => {
    const result = predictGrade([ao('AO1', 30, 100)])
    expect(result.grade).toBe('3')
    expect(result.band).toBe('Grade 1-3')
  })

  it('returns Grade 2 for 19-27%', () => {
    const result = predictGrade([ao('AO1', 20, 100)])
    expect(result.grade).toBe('2')
    expect(result.band).toBe('Grade 1-3')
  })

  it('returns Grade 1 for 10-18%', () => {
    const result = predictGrade([ao('AO1', 15, 100)])
    expect(result.grade).toBe('1')
    expect(result.band).toBe('Grade 1-3')
  })

  it('returns U for less than 10%', () => {
    const result = predictGrade([ao('AO1', 5, 100)])
    expect(result.grade).toBe('U')
    expect(result.band).toBe('Grade 1-3')
  })

  it('sums marks across multiple AOs', () => {
    const scores = [
      ao('AO1', 20, 25),
      ao('AO2', 18, 25),
      ao('AO3', 15, 25),
      ao('AO4', 12, 25),
    ]
    // Total: 65/100 = 65%
    const result = predictGrade(scores)
    expect(result.totalMarks).toBe(65)
    expect(result.maxMarks).toBe(100)
    expect(result.grade).toBe('7') // 65% >= 64 threshold
  })

  it('respects questionMaxMarks override', () => {
    // AO maxMarks sum to 50, but question is marked out of 80
    const scores = [ao('AO1', 30, 25), ao('AO2', 20, 25)]
    // 50/80 = 62.5%
    const result = predictGrade(scores, 80)
    expect(result.maxMarks).toBe(80)
    expect(result.totalMarks).toBe(50)
    expect(result.grade).toBe('6') // 62.5% >= 55 threshold
  })

  it('calculates marksToNextGrade correctly', () => {
    // 65/100 = 65% => Grade 7. Next grade is 8 at 73%.
    // Marks needed for grade 8 = ceil(73/100 * 100) = 73. Gap = 73 - 65 = 8.
    const result = predictGrade([ao('AO1', 65, 100)])
    expect(result.marksToNextGrade).toBe(8)
    expect(result.nextGrade).toBe('8')
  })

  it('returns marksToNextGrade of 0 for top grade', () => {
    // 95% => Grade 9, no next grade
    const result = predictGrade([ao('AO1', 95, 100)])
    expect(result.grade).toBe('9')
    expect(result.marksToNextGrade).toBe(0)
    expect(result.nextGrade).toBeUndefined()
  })

  it('provides nextGrade of "1" when grade is U', () => {
    const result = predictGrade([ao('AO1', 3, 100)])
    expect(result.grade).toBe('U')
    expect(result.nextGrade).toBe('1')
  })
})

// ─── Grade boundary mapping ─────────────────────────────────────────────────────

describe('grade boundary mapping', () => {
  it('maps 82% exactly to Grade 9', () => {
    const result = predictGrade([ao('AO1', 82, 100)])
    expect(result.grade).toBe('9')
  })

  it('maps 81% to Grade 8 (just below Grade 9 boundary)', () => {
    const result = predictGrade([ao('AO1', 81, 100)])
    expect(result.grade).toBe('8')
  })

  it('maps 73% exactly to Grade 8', () => {
    const result = predictGrade([ao('AO1', 73, 100)])
    expect(result.grade).toBe('8')
  })

  it('maps 64% exactly to Grade 7', () => {
    const result = predictGrade([ao('AO1', 64, 100)])
    expect(result.grade).toBe('7')
  })

  it('maps 55% exactly to Grade 6', () => {
    const result = predictGrade([ao('AO1', 55, 100)])
    expect(result.grade).toBe('6')
  })

  it('maps 46% exactly to Grade 5', () => {
    const result = predictGrade([ao('AO1', 46, 100)])
    expect(result.grade).toBe('5')
  })

  it('maps 37% exactly to Grade 4', () => {
    const result = predictGrade([ao('AO1', 37, 100)])
    expect(result.grade).toBe('4')
  })

  it('maps 28% exactly to Grade 3', () => {
    const result = predictGrade([ao('AO1', 28, 100)])
    expect(result.grade).toBe('3')
  })

  it('maps 19% exactly to Grade 2', () => {
    const result = predictGrade([ao('AO1', 19, 100)])
    expect(result.grade).toBe('2')
  })

  it('maps 10% exactly to Grade 1', () => {
    const result = predictGrade([ao('AO1', 10, 100)])
    expect(result.grade).toBe('1')
  })

  it('maps 9% to U (below Grade 1 boundary)', () => {
    const result = predictGrade([ao('AO1', 9, 100)])
    expect(result.grade).toBe('U')
  })
})

// ─── Edge cases ─────────────────────────────────────────────────────────────────

describe('edge cases', () => {
  it('handles 0 marks gracefully', () => {
    const result = predictGrade([ao('AO1', 0, 100)])
    expect(result.grade).toBe('U')
    expect(result.totalMarks).toBe(0)
    expect(result.percentage).toBe(0)
    expect(result.band).toBe('Grade 1-3')
  })

  it('handles max marks (100/100)', () => {
    const result = predictGrade([ao('AO1', 100, 100)])
    expect(result.grade).toBe('9')
    expect(result.percentage).toBe(100)
    expect(result.totalMarks).toBe(100)
    expect(result.maxMarks).toBe(100)
  })

  it('handles 0 maxMarks without dividing by zero', () => {
    const result = predictGrade([ao('AO1', 0, 0)])
    expect(result.percentage).toBe(0)
    expect(result.grade).toBe('U')
  })

  it('handles empty AO scores array', () => {
    const result = predictGrade([])
    expect(result.totalMarks).toBe(0)
    expect(result.maxMarks).toBe(0)
    expect(result.percentage).toBe(0)
  })

  it('handles a single AO with 1 mark out of 1', () => {
    const result = predictGrade([ao('AO1', 1, 1)])
    expect(result.grade).toBe('9')
    expect(result.percentage).toBe(100)
  })

  it('rounds percentage to 1 decimal place', () => {
    // 1/3 = 33.333...%
    const result = predictGrade([ao('AO1', 1, 3)])
    expect(result.percentage).toBe(33.3)
  })
})

// ─── predictGradeFromTotals ─────────────────────────────────────────────────────

describe('predictGradeFromTotals', () => {
  it('converts total/max to a grade prediction', () => {
    const result = predictGradeFromTotals(82, 100)
    expect(result.grade).toBe('9')
    expect(result.totalMarks).toBe(82)
    expect(result.maxMarks).toBe(100)
  })

  it('handles 0/0 without crashing', () => {
    const result = predictGradeFromTotals(0, 0)
    expect(result.percentage).toBe(0)
    expect(result.grade).toBe('U')
  })

  it('handles 0 out of positive max', () => {
    const result = predictGradeFromTotals(0, 50)
    expect(result.grade).toBe('U')
    expect(result.percentage).toBe(0)
  })
})
