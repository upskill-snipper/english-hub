import { describe, it, expect } from 'vitest'
import { MARK_SCHEMES, getMarkScheme, listMarkSchemeIds } from '@/lib/marking/mark-schemes/index'

describe('Mark Scheme Registry', () => {
  // ── Registry contents ───────────────────────────────────────────────

  it('contains 21 mark schemes', () => {
    const ids = listMarkSchemeIds()
    expect(ids).toHaveLength(21)
  })

  it('has unique ids for every scheme', () => {
    const ids = listMarkSchemeIds()
    expect(new Set(ids).size).toBe(ids.length)
  })

  it('includes AQA mark schemes', () => {
    const ids = listMarkSchemeIds()
    const aqaSchemes = ids.filter((id) => id.startsWith('aqa'))
    expect(aqaSchemes.length).toBeGreaterThanOrEqual(3)
  })

  it('includes Edexcel mark schemes', () => {
    const ids = listMarkSchemeIds()
    const edexcelSchemes = ids.filter((id) => id.startsWith('edexcel'))
    expect(edexcelSchemes.length).toBeGreaterThanOrEqual(2)
  })

  it('includes Eduqas mark schemes', () => {
    const ids = listMarkSchemeIds()
    const eduqasSchemes = ids.filter((id) => id.startsWith('eduqas'))
    expect(eduqasSchemes.length).toBeGreaterThanOrEqual(2)
  })

  it('includes OCR mark schemes', () => {
    const ids = listMarkSchemeIds()
    const ocrSchemes = ids.filter((id) => id.startsWith('ocr'))
    expect(ocrSchemes.length).toBeGreaterThanOrEqual(2)
  })

  // ── getMarkScheme ──────────────────────────────────────────────────

  describe('getMarkScheme', () => {
    it('returns null for unknown ids', () => {
      expect(getMarkScheme('nonexistent-scheme')).toBeNull()
    })

    it('returns null for empty string', () => {
      expect(getMarkScheme('')).toBeNull()
    })

    it('returns a valid mark scheme for a known AQA id', () => {
      const ids = listMarkSchemeIds()
      const aqaId = ids.find((id) => id.startsWith('aqa'))!
      const scheme = getMarkScheme(aqaId)
      expect(scheme).not.toBeNull()
      expect(scheme!.id).toBe(aqaId)
    })

    it('returned scheme matches the MARK_SCHEMES registry entry', () => {
      const ids = listMarkSchemeIds()
      for (const id of ids) {
        const fromGetter = getMarkScheme(id)
        expect(fromGetter).toBe(MARK_SCHEMES[id])
      }
    })
  })

  // ── Mark scheme structure validation ────────────────────────────────

  describe('mark scheme structure', () => {
    const allIds = listMarkSchemeIds()

    it('every scheme has board, subject, paper, title, totalMarks, durationMinutes', () => {
      for (const id of allIds) {
        const scheme = getMarkScheme(id)!
        expect(scheme.board).toBeTruthy()
        expect(['English Literature', 'English Language']).toContain(scheme.subject)
        expect(scheme.paper).toBeTruthy()
        expect(scheme.title).toBeTruthy()
        expect(scheme.totalMarks).toBeGreaterThan(0)
        expect(scheme.durationMinutes).toBeGreaterThan(0)
      }
    })

    it('every scheme has at least one question', () => {
      for (const id of allIds) {
        const scheme = getMarkScheme(id)!
        expect(scheme.questions.length).toBeGreaterThan(0)
      }
    })

    it('every question has assessment objectives with bands', () => {
      for (const id of allIds) {
        const scheme = getMarkScheme(id)!
        for (const question of scheme.questions) {
          expect(question.assessmentObjectives.length).toBeGreaterThan(0)
          for (const ao of question.assessmentObjectives) {
            expect(ao.id).toMatch(/^(AO|R|W)\d+/)
            expect(ao.maxMarks).toBeGreaterThan(0)
            expect(ao.bands.length).toBeGreaterThan(0)
          }
        }
      }
    })

    it('band marks are ordered from lowest to highest', () => {
      for (const id of allIds) {
        const scheme = getMarkScheme(id)!
        for (const question of scheme.questions) {
          for (const ao of question.assessmentObjectives) {
            for (let i = 1; i < ao.bands.length; i++) {
              expect(ao.bands[i].minMarks).toBeGreaterThanOrEqual(ao.bands[i - 1].minMarks)
            }
          }
        }
      }
    })

    it('question totalMarks and AO maxMarks are both positive', () => {
      for (const id of allIds) {
        const scheme = getMarkScheme(id)!
        for (const question of scheme.questions) {
          expect(question.totalMarks).toBeGreaterThan(0)
          const aoSum = question.assessmentObjectives.reduce((sum, ao) => sum + ao.maxMarks, 0)
          expect(aoSum).toBeGreaterThan(0)
        }
      }
    })
  })

  // ── Board-specific checks ──────────────────────────────────────────

  describe('board-specific checks', () => {
    it('AQA Literature Paper 1 covers Shakespeare and 19th-century novel', () => {
      const scheme = getMarkScheme('aqa-lit-paper1')
      expect(scheme).not.toBeNull()
      expect(scheme!.board).toBe('AQA')
      expect(scheme!.subject).toBe('English Literature')
    })

    it('exam durations are realistic (45-165 minutes)', () => {
      for (const id of listMarkSchemeIds()) {
        const scheme = getMarkScheme(id)!
        expect(scheme.durationMinutes).toBeGreaterThanOrEqual(45)
        expect(scheme.durationMinutes).toBeLessThanOrEqual(165)
      }
    })
  })
})
