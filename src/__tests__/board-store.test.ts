import { describe, it, expect } from 'vitest'
import { BOARDS, getBoardConfig, getDisplayName } from '@/lib/board/board-config'
import type { ExamBoard } from '@/lib/board/board-config'

// ---------------------------------------------------------------------------
// Board config & store tests.
//
// The board store (zustand + persist) is difficult to unit-test in isolation
// because of browser-only APIs (localStorage, document.cookie). These tests
// cover the server-safe board-config module which the store re-exports.
// ---------------------------------------------------------------------------

describe('Board configuration', () => {
  // ── BOARDS constant ──────────────────────────────────────────────────────

  describe('BOARDS array', () => {
    // Matrix updated 2026-04: now 15 entries covering KS3, GCSE, IGCSE,
    // IAL and UK A-Level.
    it('contains all 15 exam boards', () => {
      expect(BOARDS).toHaveLength(15)
    })

    it('includes all expected board IDs', () => {
      const ids = BOARDS.map((b) => b.id)
      expect(ids).toContain('ks3')
      expect(ids).toContain('aqa')
      expect(ids).toContain('edexcel')
      expect(ids).toContain('ocr')
      expect(ids).toContain('eduqas')
      expect(ids).toContain('edexcel-igcse')
      expect(ids).toContain('edexcel-igcse-lang')
      expect(ids).toContain('cambridge-0500')
      expect(ids).toContain('cambridge-0990')
      expect(ids).toContain('cambridge-0475')
      expect(ids).toContain('ial-edexcel')
      expect(ids).toContain('aqa-a-level')
      expect(ids).toContain('edexcel-a-level')
      expect(ids).toContain('ocr-a-level')
      expect(ids).toContain('eduqas-a-level')
    })

    it('has unique IDs', () => {
      const ids = BOARDS.map((b) => b.id)
      expect(new Set(ids).size).toBe(ids.length)
    })

    it('marks each board-type cohort correctly', () => {
      const counts = {
        ks3: BOARDS.filter((b) => b.type === 'ks3').length,
        gcse: BOARDS.filter((b) => b.type === 'gcse').length,
        igcse: BOARDS.filter((b) => b.type === 'igcse').length,
        ial: BOARDS.filter((b) => b.type === 'ial').length,
        'a-level': BOARDS.filter((b) => b.type === 'a-level').length,
      }
      expect(counts.ks3).toBe(1)
      expect(counts.gcse).toBe(4)
      expect(counts.igcse).toBe(5)
      expect(counts.ial).toBe(1)
      expect(counts['a-level']).toBe(4)
    })

    it('every board has required fields', () => {
      for (const board of BOARDS) {
        expect(board.id).toBeTruthy()
        expect(board.name).toBeTruthy()
        expect(board.fullName).toBeTruthy()
        expect(board.shortName).toBeTruthy()
        expect(board.description).toBeTruthy()
        expect(['ks3', 'gcse', 'igcse', 'ial', 'a-level']).toContain(board.type)
        expect(board.examCode).toBeTruthy()
        expect(board.category).toBeTruthy()
      }
    })

    it('every board has a valid category', () => {
      const validCategories = [
        'ks3',
        'gcse',
        'igcse-literature',
        'igcse-language-a',
        'igcse-language-b',
        'igcse-language',
        'ial',
        'a-level',
      ]
      for (const board of BOARDS) {
        expect(validCategories).toContain(board.category)
      }
    })

    it('GCSE boards have category "gcse"', () => {
      const gcse = BOARDS.filter((b) => b.type === 'gcse')
      for (const board of gcse) {
        expect(board.category).toBe('gcse')
      }
    })

    it('IGCSE boards span multiple IGCSE categories', () => {
      const igcse = BOARDS.filter((b) => b.type === 'igcse')
      const categories = igcse.map((b) => b.category)
      expect(categories).toContain('igcse-literature')
      expect(categories).toContain('igcse-language-a')
      expect(categories).toContain('igcse-language-b')
      expect(categories).toContain('igcse-language')
    })
  })

  // ── getBoardConfig ────────────────────────────────────────────────────────

  describe('getBoardConfig', () => {
    it('returns config for a valid board', () => {
      const config = getBoardConfig('aqa')
      expect(config).not.toBeNull()
      expect(config?.id).toBe('aqa')
      expect(config?.name).toBe('AQA')
    })

    it('returns config for each IGCSE board', () => {
      const igcseBoards: ExamBoard[] = ['edexcel-igcse', 'cambridge-0500', 'cambridge-0990']
      for (const id of igcseBoards) {
        const config = getBoardConfig(id)
        expect(config).not.toBeNull()
        expect(config?.type).toBe('igcse')
      }
    })

    it('returns null for null input', () => {
      expect(getBoardConfig(null)).toBeNull()
    })

    it('returns null for an unknown board ID', () => {
      // @ts-expect-error — testing runtime safety with an invalid value
      expect(getBoardConfig('unknown-board')).toBeNull()
    })

    it('returns the correct full name for edexcel', () => {
      const config = getBoardConfig('edexcel')
      expect(config?.fullName).toContain('Pearson Edexcel')
    })

    it('returns examCode and category for edexcel-igcse', () => {
      const config = getBoardConfig('edexcel-igcse')
      expect(config?.examCode).toBe('4ET1')
      expect(config?.category).toBe('igcse-literature')
    })

    it('returns examCode and category for cambridge-0500', () => {
      const config = getBoardConfig('cambridge-0500')
      expect(config?.examCode).toBe('0500')
      expect(config?.category).toBe('igcse-language-a')
    })

    it('returns examCode and category for cambridge-0990', () => {
      const config = getBoardConfig('cambridge-0990')
      expect(config?.examCode).toBe('0990')
      expect(config?.category).toBe('igcse-language-b')
    })
  })

  // ── getDisplayName ─────────────────────────────────────────────────────

  describe('getDisplayName', () => {
    it('returns "AQA" for aqa', () => {
      expect(getDisplayName('aqa')).toBe('AQA')
    })

    it('returns the Edexcel IGCSE Literature label (with exam code) for edexcel-igcse', () => {
      expect(getDisplayName('edexcel-igcse')).toBe('Edexcel IGCSE Literature (4ET1)')
    })

    it('returns "Cambridge (A*-G)" for the legacy cambridge-0500 spec', () => {
      expect(getDisplayName('cambridge-0500')).toBe('Cambridge (A*-G)')
    })

    it('returns "Cambridge (9-1)" for cambridge-0990', () => {
      expect(getDisplayName('cambridge-0990')).toBe('Cambridge (9-1)')
    })

    it('returns the name field for every known board', () => {
      for (const board of BOARDS) {
        expect(getDisplayName(board.id)).toBe(board.name)
      }
    })
  })
})
