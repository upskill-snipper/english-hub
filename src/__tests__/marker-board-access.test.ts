import { describe, it, expect } from 'vitest'
import { normaliseBoard, isRequestableBoard, REQUESTABLE_BOARDS } from '@/lib/marker-board-access'

describe('normaliseBoard', () => {
  it('trims and upper-cases', () => {
    expect(normaliseBoard('  aqa ')).toBe('AQA')
    expect(normaliseBoard('Cambridge_0500')).toBe('CAMBRIDGE_0500')
  })
})

describe('isRequestableBoard', () => {
  it('accepts every requestable board (case-insensitive)', () => {
    for (const b of REQUESTABLE_BOARDS) {
      expect(isRequestableBoard(b)).toBe(true)
      expect(isRequestableBoard(b.toLowerCase())).toBe(true)
    }
  })
  it('includes the GCSE boards, IELTS, KS3, EAL', () => {
    expect(REQUESTABLE_BOARDS).toContain('AQA')
    expect(REQUESTABLE_BOARDS).toContain('EDEXCEL_IGCSE')
    expect(REQUESTABLE_BOARDS).toContain('IELTS')
    expect(REQUESTABLE_BOARDS).toContain('KS3')
    expect(REQUESTABLE_BOARDS).toContain('EAL')
  })
  it('rejects unknown boards', () => {
    expect(isRequestableBoard('WJEC')).toBe(false)
    expect(isRequestableBoard('')).toBe(false)
    expect(isRequestableBoard('nonsense')).toBe(false)
  })
})
