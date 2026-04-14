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
    it('contains all 7 exam boards', () => {
      expect(BOARDS).toHaveLength(7)
    })

    it('includes all expected board IDs', () => {
      const ids = BOARDS.map((b) => b.id)
      expect(ids).toContain('aqa')
      expect(ids).toContain('edexcel')
      expect(ids).toContain('ocr')
      expect(ids).toContain('eduqas')
      expect(ids).toContain('edexcel-igcse')
      expect(ids).toContain('cambridge-0500')
      expect(ids).toContain('cambridge-0990')
    })

    it('has unique IDs', () => {
      const ids = BOARDS.map((b) => b.id)
      expect(new Set(ids).size).toBe(ids.length)
    })

    it('marks GCSE and IGCSE boards correctly', () => {
      const gcse = BOARDS.filter((b) => b.type === 'gcse')
      const igcse = BOARDS.filter((b) => b.type === 'igcse')
      expect(gcse).toHaveLength(4)
      expect(igcse).toHaveLength(3)
    })

    it('every board has required fields', () => {
      for (const board of BOARDS) {
        expect(board.id).toBeTruthy()
        expect(board.name).toBeTruthy()
        expect(board.fullName).toBeTruthy()
        expect(board.shortName).toBeTruthy()
        expect(board.description).toBeTruthy()
        expect(['gcse', 'igcse']).toContain(board.type)
        expect(board.examCode).toBeTruthy()
        expect(board.category).toBeTruthy()
      }
    })

    it('every board has a valid category', () => {
      const validCategories = ['gcse', 'igcse-literature', 'igcse-language-a', 'igcse-language-b']
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

    it('IGCSE boards each have a distinct IGCSE category', () => {
      const igcse = BOARDS.filter((b) => b.type === 'igcse')
      const categories = igcse.map((b) => b.category)
      expect(categories).toContain('igcse-literature')
      expect(categories).toContain('igcse-language-a')
      expect(categories).toContain('igcse-language-b')
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

    it('returns "IGCSE Literature" for edexcel-igcse', () => {
      expect(getDisplayName('edexcel-igcse')).toBe('IGCSE Literature')
    })

    it('returns "IGCSE Language A" for cambridge-0500', () => {
      expect(getDisplayName('cambridge-0500')).toBe('IGCSE Language A')
    })

    it('returns "IGCSE Language B" for cambridge-0990', () => {
      expect(getDisplayName('cambridge-0990')).toBe('IGCSE Language B')
    })

    it('returns the name field for every known board', () => {
      for (const board of BOARDS) {
        expect(getDisplayName(board.id)).toBe(board.name)
      }
    })
  })
})
