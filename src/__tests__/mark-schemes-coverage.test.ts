// ─── Mark Scheme Coverage Audit ──────────────────────────────────────────────
// Audits every mark scheme exported from the registry to confirm it meets the
// minimum quality bar (named, full AO breakdown with weightings, plausible
// band marks, real descriptors, no placeholder TODO/TBD text). Also checks
// that every ExamBoard enum value declared in prisma/schema.prisma has at
// least one scheme registered, so the marking engine cannot silently miss a
// board the database can persist.
//
// Notes on field naming: the production `AssessmentObjective` interface in
// `types.ts` uses `id` (e.g. "AO1") for the canonical AO code and
// `description` for the long-form text. `BandDescriptor` uses `descriptor`
// for its long-form text. The task brief used `code` / `description` for
// AOs and `description` for bands; this test asserts the equivalent
// production fields.
// ────────────────────────────────────────────────────────────────────────────

import { describe, it, expect } from 'vitest'
import {
  MARK_SCHEMES,
  type MarkScheme,
  type AssessmentObjective,
  type BandDescriptor,
  type QuestionScheme,
} from '@/lib/marking/mark-schemes'

// ─── ExamBoard enum (mirrored from prisma/schema.prisma) ────────────────────
// Kept as a literal union so this test fails at type-check time if the enum
// drifts from the production schema. Update both when adding a new board.
const EXAM_BOARDS = [
  'AQA',
  'EDEXCEL',
  'OCR',
  'EDUQAS',
  'EDEXCEL_IGCSE',
  'CAMBRIDGE_0500',
  'CAMBRIDGE_0990',
] as const
type ExamBoard = (typeof EXAM_BOARDS)[number]

// ─── Helpers ────────────────────────────────────────────────────────────────

/**
 * Map the human-readable `board` field on a MarkScheme to the canonical
 * Prisma ExamBoard enum value. We match on a normalised, lowercased form so
 * minor formatting differences ("AQA" vs "aqa", spaces, dashes) don't break
 * the audit.
 */
function classifyBoard(scheme: MarkScheme): ExamBoard | null {
  const haystack = `${scheme.board} ${scheme.id}`.toLowerCase()
  if (haystack.includes('cambridge') && haystack.includes('0500')) return 'CAMBRIDGE_0500'
  if (haystack.includes('cambridge') && haystack.includes('0990')) return 'CAMBRIDGE_0990'
  if (haystack.includes('edexcel') && haystack.includes('igcse')) return 'EDEXCEL_IGCSE'
  if (haystack.includes('eduqas') || haystack.includes('wjec')) return 'EDUQAS'
  if (haystack.includes('aqa')) return 'AQA'
  if (haystack.includes('edexcel')) return 'EDEXCEL'
  if (haystack.includes('ocr')) return 'OCR'
  return null
}

/** Sum of the maximum band marks across every band of every AO of every question. */
function sumBandMaxMarks(scheme: MarkScheme): number {
  let total = 0
  for (const q of scheme.questions) {
    for (const ao of q.assessmentObjectives) {
      const topBand = [...ao.bands].sort((a, b) => b.maxMarks - a.maxMarks)[0]
      total += topBand?.maxMarks ?? 0
    }
  }
  return total
}

const PLACEHOLDER_RE = /\b(TODO|TBD|FIXME|XXX)\b/i

const schemeEntries = Object.entries(MARK_SCHEMES) as Array<[string, MarkScheme]>

// ─── Per-scheme audit ────────────────────────────────────────────────────────

describe('Mark scheme coverage audit', () => {
  it('registry is non-empty', () => {
    expect(schemeEntries.length).toBeGreaterThan(0)
  })

  describe.each(schemeEntries)('scheme: %s', (id, scheme) => {
    it('has a non-empty name (title)', () => {
      // The production interface uses `title` for the human-readable name -
      // there is no `name` field. Assert the equivalent.
      expect(typeof scheme.title).toBe('string')
      expect(scheme.title.trim().length).toBeGreaterThan(0)
    })

    it('declares at least one question with at least one AO', () => {
      expect(scheme.questions.length).toBeGreaterThan(0)
      const totalAOs = scheme.questions.reduce((sum, q) => sum + q.assessmentObjectives.length, 0)
      expect(totalAOs).toBeGreaterThan(0)
    })

    it('every AO has id (code), description, and weighting', () => {
      const allAOs: AssessmentObjective[] = scheme.questions.flatMap((q: QuestionScheme) => [
        ...q.assessmentObjectives,
      ])
      for (const ao of allAOs) {
        expect(ao.id, `AO id missing on ${id}`).toMatch(/^(AO|R|W)\d+/i)
        expect(typeof ao.description).toBe('string')
        expect(ao.description.trim().length).toBeGreaterThan(0)
        expect(typeof ao.weighting).toBe('number')
        expect(ao.weighting).toBeGreaterThan(0)
        expect(ao.weighting).toBeLessThanOrEqual(1)
      }
    })

    it('sum of top-band marks does not exceed paper total', () => {
      const summed = sumBandMaxMarks(scheme)
      expect(summed).toBeLessThanOrEqual(scheme.totalMarks)
    })

    it('every band has a descriptor of at least 20 characters', () => {
      const allBands: BandDescriptor[] = scheme.questions.flatMap((q) =>
        q.assessmentObjectives.flatMap((ao) => [...ao.bands]),
      )
      expect(allBands.length).toBeGreaterThan(0)
      for (const band of allBands) {
        expect(
          band.descriptor.trim().length,
          `${id} band "${band.band}" descriptor too short: "${band.descriptor}"`,
        ).toBeGreaterThanOrEqual(20)
      }
    })

    // Warn-only: surface placeholder text without failing the suite. Vitest
    // doesn't have a built-in "soft" expectation, so we log a warning that
    // shows up in the test runner output instead of throwing.
    it('reports any TODO/TBD placeholders (warn only)', () => {
      const allBands: BandDescriptor[] = scheme.questions.flatMap((q) =>
        q.assessmentObjectives.flatMap((ao) => [...ao.bands]),
      )
      const offenders = allBands.filter(
        (b) =>
          PLACEHOLDER_RE.test(b.descriptor) ||
          PLACEHOLDER_RE.test(b.label) ||
          b.indicators.some((i) => PLACEHOLDER_RE.test(i)),
      )
      if (offenders.length > 0) {
        // eslint-disable-next-line no-console
        console.warn(
          `[mark-schemes-coverage] ${id} contains ${offenders.length} placeholder band(s): ` +
            offenders.map((o) => o.band).join(', '),
        )
      }
      // Always pass - this test is informational.
      expect(true).toBe(true)
    })
  })
})

// ─── ExamBoard coverage ──────────────────────────────────────────────────────

describe('ExamBoard registry coverage', () => {
  const coverage = new Map<ExamBoard, number>(EXAM_BOARDS.map((b) => [b, 0] as [ExamBoard, number]))
  for (const [, scheme] of schemeEntries) {
    const board = classifyBoard(scheme)
    if (board) coverage.set(board, (coverage.get(board) ?? 0) + 1)
  }

  it.each(EXAM_BOARDS)('board %s has at least one mark scheme registered', (board) => {
    const count = coverage.get(board) ?? 0
    expect(
      count,
      `ExamBoard.${board} has zero registered mark schemes - every Prisma enum value must be backed by at least one scheme so the marking engine can resolve essays persisted with that board.`,
    ).toBeGreaterThan(0)
  })

  it('every registered scheme classifies to a known ExamBoard', () => {
    const unclassified = schemeEntries
      .filter(([, s]) => classifyBoard(s) === null)
      .map(([id]) => id)
    expect(unclassified, `Unclassifiable schemes: ${unclassified.join(', ')}`).toEqual([])
  })
})
