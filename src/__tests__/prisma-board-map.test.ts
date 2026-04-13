import { describe, it, expect, vi } from 'vitest'

// ---------------------------------------------------------------------------
// Prisma board enum mapping tests.
//
// The prisma-board-map module bridges Prisma enum values (e.g. AQA, EDEXCEL)
// and app-level slugs (e.g. 'aqa', 'edexcel'). We mock the Prisma client
// types and test the mapping integrity.
// ---------------------------------------------------------------------------

// Mock @prisma/client so we don't need a real Prisma generation
vi.mock('@prisma/client', () => ({
  // Simulate the Prisma ExamBoard enum values
  ExamBoard: {
    AQA: 'AQA',
    EDEXCEL: 'EDEXCEL',
    OCR: 'OCR',
    EDUQAS: 'EDUQAS',
    EDEXCEL_IGCSE: 'EDEXCEL_IGCSE',
    CAMBRIDGE_0500: 'CAMBRIDGE_0500',
    CAMBRIDGE_0990: 'CAMBRIDGE_0990',
  },
}))

describe('Prisma board mapping', () => {
  // ── PRISMA_TO_APP ──────────────────────────────────────────────────────

  describe('PRISMA_TO_APP', () => {
    it('maps all 7 Prisma enum values to app slugs', async () => {
      const { PRISMA_TO_APP } = await import('@/lib/board/prisma-board-map')
      expect(Object.keys(PRISMA_TO_APP)).toHaveLength(7)
    })

    it('maps AQA -> aqa', async () => {
      const { PRISMA_TO_APP } = await import('@/lib/board/prisma-board-map')
      expect(PRISMA_TO_APP.AQA).toBe('aqa')
    })

    it('maps EDEXCEL -> edexcel', async () => {
      const { PRISMA_TO_APP } = await import('@/lib/board/prisma-board-map')
      expect(PRISMA_TO_APP.EDEXCEL).toBe('edexcel')
    })

    it('maps OCR -> ocr', async () => {
      const { PRISMA_TO_APP } = await import('@/lib/board/prisma-board-map')
      expect(PRISMA_TO_APP.OCR).toBe('ocr')
    })

    it('maps EDUQAS -> eduqas', async () => {
      const { PRISMA_TO_APP } = await import('@/lib/board/prisma-board-map')
      expect(PRISMA_TO_APP.EDUQAS).toBe('eduqas')
    })

    it('maps EDEXCEL_IGCSE -> edexcel-igcse', async () => {
      const { PRISMA_TO_APP } = await import('@/lib/board/prisma-board-map')
      expect(PRISMA_TO_APP.EDEXCEL_IGCSE).toBe('edexcel-igcse')
    })

    it('maps CAMBRIDGE_0500 -> cambridge-0500', async () => {
      const { PRISMA_TO_APP } = await import('@/lib/board/prisma-board-map')
      expect(PRISMA_TO_APP.CAMBRIDGE_0500).toBe('cambridge-0500')
    })

    it('maps CAMBRIDGE_0990 -> cambridge-0990', async () => {
      const { PRISMA_TO_APP } = await import('@/lib/board/prisma-board-map')
      expect(PRISMA_TO_APP.CAMBRIDGE_0990).toBe('cambridge-0990')
    })
  })

  // ── APP_TO_PRISMA ──────────────────────────────────────────────────────

  describe('APP_TO_PRISMA', () => {
    it('maps all 7 app slugs to Prisma enum values', async () => {
      const { APP_TO_PRISMA } = await import('@/lib/board/prisma-board-map')
      expect(Object.keys(APP_TO_PRISMA)).toHaveLength(7)
    })

    it('maps aqa -> AQA', async () => {
      const { APP_TO_PRISMA } = await import('@/lib/board/prisma-board-map')
      expect(APP_TO_PRISMA['aqa']).toBe('AQA')
    })

    it('maps edexcel-igcse -> EDEXCEL_IGCSE', async () => {
      const { APP_TO_PRISMA } = await import('@/lib/board/prisma-board-map')
      expect(APP_TO_PRISMA['edexcel-igcse']).toBe('EDEXCEL_IGCSE')
    })

    it('maps cambridge-0500 -> CAMBRIDGE_0500', async () => {
      const { APP_TO_PRISMA } = await import('@/lib/board/prisma-board-map')
      expect(APP_TO_PRISMA['cambridge-0500']).toBe('CAMBRIDGE_0500')
    })
  })

  // ── Round-trip consistency ─────────────────────────────────────────────

  describe('round-trip consistency', () => {
    it('PRISMA_TO_APP and APP_TO_PRISMA are exact inverses', async () => {
      const { PRISMA_TO_APP, APP_TO_PRISMA } = await import('@/lib/board/prisma-board-map')

      // Every Prisma key, mapped to app, mapped back, should return the original
      for (const [prismaKey, appSlug] of Object.entries(PRISMA_TO_APP)) {
        const backToPrisma = APP_TO_PRISMA[appSlug as keyof typeof APP_TO_PRISMA]
        expect(backToPrisma).toBe(prismaKey)
      }
    })

    it('APP_TO_PRISMA and PRISMA_TO_APP are exact inverses', async () => {
      const { PRISMA_TO_APP, APP_TO_PRISMA } = await import('@/lib/board/prisma-board-map')

      for (const [appSlug, prismaKey] of Object.entries(APP_TO_PRISMA)) {
        const backToApp = PRISMA_TO_APP[prismaKey as keyof typeof PRISMA_TO_APP]
        expect(backToApp).toBe(appSlug)
      }
    })
  })
})
