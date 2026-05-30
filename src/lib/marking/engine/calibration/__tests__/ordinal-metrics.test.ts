import { describe, it, expect } from 'vitest'
import {
  orderedLabels,
  summariseOrdinal,
  assessOrdinalGate,
  type OrdinalPair,
} from '../ordinal-metrics'
import { GCSE_SHAPE, KS3_SHAPE, IELTS_WRITING_SHAPE } from '@/lib/marking/marking-shapes'

describe('orderedLabels', () => {
  it('orders GCSE grades worst→best with U lowest', () => {
    expect(orderedLabels(GCSE_SHAPE)).toEqual(['U', '1', '2', '3', '4', '5', '6', '7', '8', '9'])
  })
  it('keeps KS3 levels worst→best', () => {
    expect(orderedLabels(KS3_SHAPE)).toEqual([
      'Emerging',
      'Developing',
      'Securing',
      'Secure',
      'Mastery',
    ])
  })
  it('returns null for a band shape', () => {
    expect(orderedLabels(IELTS_WRITING_SHAPE)).toBeNull()
  })
})

describe('summariseOrdinal — GCSE grades', () => {
  it('computes exact, within-one and distance', () => {
    const pairs: OrdinalPair[] = [
      { ai: '6', human: '6' }, // exact
      { ai: '7', human: '6' }, // one step
      { ai: '5', human: '6' }, // one step
      { ai: '8', human: '6' }, // two steps
    ]
    const r = summariseOrdinal(GCSE_SHAPE, pairs)
    expect(r.count).toBe(4)
    expect(r.exactAgreement).toBe(0.25)
    expect(r.withinOneStep).toBe(0.75)
    expect(r.meanAbsDistance).toBeCloseTo((0 + 1 + 1 + 2) / 4)
    expect(r.perLabelCoverage['6']).toBe(4)
  })
  it('treats U as one step below grade 1', () => {
    const r = summariseOrdinal(GCSE_SHAPE, [{ ai: 'U', human: '1' }])
    expect(r.withinOneStep).toBe(1)
    expect(r.exactAgreement).toBe(0)
  })
  it('drops pairs with unknown labels', () => {
    const r = summariseOrdinal(GCSE_SHAPE, [{ ai: 'X', human: '6' }])
    expect(r.count).toBe(0)
  })
})

describe('summariseOrdinal — KS3 levels', () => {
  it('scores level distance', () => {
    const r = summariseOrdinal(KS3_SHAPE, [
      { ai: 'Secure', human: 'Secure' },
      { ai: 'Securing', human: 'Secure' },
      { ai: 'Emerging', human: 'Secure' },
    ])
    expect(r.exactAgreement).toBeCloseTo(1 / 3)
    expect(r.withinOneStep).toBeCloseTo(2 / 3)
  })
})

describe('assessOrdinalGate', () => {
  function cov(label: string, n: number): OrdinalPair[] {
    return Array.from({ length: n }, () => ({ ai: label, human: label }))
  }
  it('passes a green set (≥50, ≥2 labels, ≥5 each, perfect agreement)', () => {
    const pairs = [...cov('5', 20), ...cov('6', 20), ...cov('7', 15)]
    const r = summariseOrdinal(GCSE_SHAPE, pairs)
    const g = assessOrdinalGate(r)
    expect(g.green).toBe(true)
  })
  it('fails sufficient-n', () => {
    const r = summariseOrdinal(GCSE_SHAPE, [...cov('5', 5), ...cov('6', 5)])
    const g = assessOrdinalGate(r)
    expect(g.green).toBe(false)
    expect(g.checks[0].check).toBe('sufficient-n')
  })
  it('fails label-coverage when concentrated in one grade', () => {
    const r = summariseOrdinal(GCSE_SHAPE, cov('6', 60))
    const g = assessOrdinalGate(r)
    expect(g.green).toBe(false)
    expect(g.checks[0].check).toBe('label-coverage')
  })
  it('fails within-one-floor on poor agreement', () => {
    // AI always two grades above human → within-one = 0.
    const pairs: OrdinalPair[] = [
      ...Array.from({ length: 20 }, () => ({ ai: '7', human: '5' })),
      ...Array.from({ length: 20 }, () => ({ ai: '8', human: '6' })),
      ...Array.from({ length: 15 }, () => ({ ai: '9', human: '7' })),
    ]
    const r = summariseOrdinal(GCSE_SHAPE, pairs)
    const g = assessOrdinalGate(r)
    expect(g.green).toBe(false)
    expect(g.checks[0].check).toBe('within-one-floor')
  })
})
