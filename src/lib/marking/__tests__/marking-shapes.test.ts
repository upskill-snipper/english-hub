import { describe, it, expect } from 'vitest'
import {
  resolveMarkingShape,
  validateOverallMark,
  validateCriterionBand,
  GCSE_SHAPE,
  IELTS_WRITING_SHAPE,
  KS3_SHAPE,
  EAL_SHAPE,
  GCSE_GRADES,
  IELTS_WRITING_CRITERIA,
} from '../marking-shapes'

describe('resolveMarkingShape', () => {
  it('resolves IELTS from the board token', () => {
    expect(resolveMarkingShape('IELTS')).toBe(IELTS_WRITING_SHAPE)
  })
  it('resolves IELTS from the qualification token even if board is generic', () => {
    expect(resolveMarkingShape(null, 'IELTS Academic Writing')).toBe(IELTS_WRITING_SHAPE)
  })
  it('resolves EAL', () => {
    expect(resolveMarkingShape('EAL')).toBe(EAL_SHAPE)
    expect(resolveMarkingShape(null, 'EAL writing')).toBe(EAL_SHAPE)
  })
  it('resolves KS3 from qualification', () => {
    expect(resolveMarkingShape(null, 'KS3 English')).toBe(KS3_SHAPE)
    expect(resolveMarkingShape(null, 'Key Stage 3')).toBe(KS3_SHAPE)
  })
  it('resolves all GCSE/IGCSE boards to the GCSE grade shape', () => {
    for (const b of [
      'AQA',
      'EDEXCEL',
      'OCR',
      'EDUQAS',
      'EDEXCEL_IGCSE',
      'CAMBRIDGE_0500',
      'CAMBRIDGE_0990',
    ]) {
      expect(resolveMarkingShape(b)).toBe(GCSE_SHAPE)
    }
  })
  it('normalises spacing/case/hyphens', () => {
    expect(resolveMarkingShape('cambridge-0500')).toBe(GCSE_SHAPE)
    expect(resolveMarkingShape('Cambridge 0990')).toBe(GCSE_SHAPE)
  })
  it('falls back to GCSE for unknown/legacy rows (no regression)', () => {
    expect(resolveMarkingShape(null, null)).toBe(GCSE_SHAPE)
    expect(resolveMarkingShape('something-unknown')).toBe(GCSE_SHAPE)
  })
})

describe('validateOverallMark — gcse_grade', () => {
  it('accepts every allowed grade', () => {
    for (const g of GCSE_GRADES) {
      expect(validateOverallMark(GCSE_SHAPE, g)).toBeNull()
    }
  })
  it('rejects a non-grade', () => {
    expect(validateOverallMark(GCSE_SHAPE, '10')).not.toBeNull()
    expect(validateOverallMark(GCSE_SHAPE, 7)).not.toBeNull() // number, not the string
  })
})

describe('validateOverallMark — band (IELTS)', () => {
  it('accepts in-range half-step bands', () => {
    for (const b of [0, 4, 4.5, 6.5, 9]) {
      expect(validateOverallMark(IELTS_WRITING_SHAPE, b)).toBeNull()
    }
  })
  it('accepts a numeric string', () => {
    expect(validateOverallMark(IELTS_WRITING_SHAPE, '6.5')).toBeNull()
  })
  it('rejects out-of-range', () => {
    expect(validateOverallMark(IELTS_WRITING_SHAPE, 9.5)).not.toBeNull()
    expect(validateOverallMark(IELTS_WRITING_SHAPE, -1)).not.toBeNull()
  })
  it('rejects off-grid (not a 0.5 step)', () => {
    expect(validateOverallMark(IELTS_WRITING_SHAPE, 6.25)).not.toBeNull()
  })
  it('rejects non-numeric', () => {
    expect(validateOverallMark(IELTS_WRITING_SHAPE, 'band six')).not.toBeNull()
  })
  it('exposes the four criteria', () => {
    expect(IELTS_WRITING_CRITERIA.map((c) => c.code)).toEqual(['TR', 'CC', 'LR', 'GRA'])
  })
})

describe('validateOverallMark — level (KS3 / EAL)', () => {
  it('accepts a valid KS3 level', () => {
    expect(validateOverallMark(KS3_SHAPE, 'Secure')).toBeNull()
  })
  it('accepts a valid EAL stage', () => {
    expect(validateOverallMark(EAL_SHAPE, 'B2')).toBeNull()
  })
  it('rejects an unknown level', () => {
    expect(validateOverallMark(KS3_SHAPE, 'Wizard')).not.toBeNull()
    expect(validateOverallMark(EAL_SHAPE, 'D9')).not.toBeNull()
  })
})

describe('validateCriterionBand', () => {
  it('validates a band for a band-shape', () => {
    expect(validateCriterionBand(IELTS_WRITING_SHAPE, 7)).toBeNull()
    expect(validateCriterionBand(IELTS_WRITING_SHAPE, 7.25)).not.toBeNull()
  })
  it('refuses criterion bands on a non-band shape', () => {
    expect(validateCriterionBand(GCSE_SHAPE, 7)).not.toBeNull()
  })
})
