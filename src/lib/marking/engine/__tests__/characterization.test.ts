// ─── Marking Engine — Characterization (Golden) Tests ────────────────────────
// WHY: Phase 1 of the grounded Marking Engine is ADDITIVE + PROTECTIVE. Before
// any later phase refactors the scoring/rounding/boundary code, we must LOCK the
// engine's CURRENT observable behaviour so a regression cannot slip through
// silently (plan constraint 6 — "golden tests pin today's behaviour").
//
// These tests deliberately DESCRIBE what the code does today; they do NOT assert
// what it *should* do. If a later change is intended to alter behaviour, the
// author must consciously update the expectation here — that is the whole point.
// None of the modules under test are imported for mutation; we only read them.
//
// Three behaviours are pinned:
//   1. IELTS overall-band half-band rounding (src/lib/ielts/bands.ts).
//   2. Mark-scheme resolution: known id → scheme, unknown id → null
//      (src/lib/marking/mark-schemes/index.ts).
//   3. Grade-boundary "verified-or-null, never guess" gate
//      (src/lib/marking/grade-boundaries/index.ts).
// ────────────────────────────────────────────────────────────────────────────

import { describe, it, expect } from 'vitest'

import { overallBand, roundToBand } from '@/lib/ielts/bands'
import type { Band } from '@/lib/ielts/types'

import { getMarkScheme, listMarkSchemeIds } from '@/lib/marking/mark-schemes'

import {
  getBoundaryTable,
  getUsableBoundaryTable,
  hasUsableThresholds,
  normaliseBoardId,
} from '@/lib/marking/grade-boundaries'
import type { GradeThreshold } from '@/lib/marking/grade-boundaries/types'

// ─── 1. IELTS half-band rounding (overallBand) ───────────────────────────────
//
// CURRENT RULE (bands.ts:overallBand): mean of the four skill bands, then
//   frac < 0.25            → round DOWN to the whole band (floor)
//   0.25 <= frac < 0.75    → round to the .5 half-band (floor + 0.5)
//   frac >= 0.75           → round UP to the next whole band (floor + 1)
// The result is then passed through roundToBand (snap to nearest 0.5 step).
// `null` is returned until all four skill bands are present.
describe('characterization: IELTS overallBand half-band rounding', () => {
  // The four fractional boundaries called out by the plan. We feed each fraction
  // to all four criteria so mean === frac-of-6, isolating the rounding branch.
  it('.24 fractional part rounds DOWN (frac < 0.25)', () => {
    // mean = 6.24 → floor 6, frac 0.24 < 0.25 → 6
    expect(overallBand([6.24 as Band, 6.24 as Band, 6.24 as Band, 6.24 as Band])).toBe(6)
  })

  it('.25 fractional part rounds to the half band (frac === 0.25)', () => {
    // mean = 6.25 → floor 6, frac 0.25 (not < 0.25, < 0.75) → 6.5
    expect(overallBand([6.25 as Band, 6.25 as Band, 6.25 as Band, 6.25 as Band])).toBe(6.5)
  })

  it('.74 fractional part stays at the half band (frac < 0.75)', () => {
    // mean = 6.74 → floor 6, frac 0.74 < 0.75 → 6.5
    expect(overallBand([6.74 as Band, 6.74 as Band, 6.74 as Band, 6.74 as Band])).toBe(6.5)
  })

  it('.75 fractional part rounds UP to the next whole band (frac >= 0.75)', () => {
    // mean = 6.75 → floor 6, frac 0.75 → 7
    expect(overallBand([6.75 as Band, 6.75 as Band, 6.75 as Band, 6.75 as Band])).toBe(7)
  })

  // Realistic four-criterion combinations (values are valid IELTS bands). Each
  // expected value was captured from the CURRENT implementation, not derived
  // from an external spec — these are the golden outputs.
  it.each<[string, [Band, Band, Band, Band], Band]>([
    // [reading, writing, listening, speaking] → expected overall
    ['mean 6.25 (R6.5 W6.5 L6.5 S5.5)', [6.5, 6.5, 6.5, 5.5], 6.5],
    ['mean 5.75 (R6 W6 L6 S5)', [6, 6, 6, 5], 6],
    ['mean 6.75 (R6.5 W6.5 L7 S7)', [6.5, 6.5, 7, 7], 7],
    ['mean 6.75 (R7 W7 L7 S6)', [7, 7, 7, 6], 7],
    ['mean 7.25 (R8 W7 L7 S7)', [8, 7, 7, 7], 7.5],
    ['mean 6.5 (R5 W6 L7 S8)', [5, 6, 7, 8], 6.5],
    ['mean 6.0 (all 6)', [6, 6, 6, 6], 6],
    ['mean 6.625 (R7 W7 L7 S5.5)', [7, 7, 7, 5.5], 6.5],
  ])('combination %s rounds to %s', (_label, bands, expected) => {
    expect(overallBand(bands)).toBe(expected)
  })

  it('returns null until all four skill bands are present', () => {
    expect(overallBand([6, 6, 6, null])).toBeNull()
    expect(overallBand([7, 7, null, null])).toBeNull()
    expect(overallBand([])).toBeNull()
  })

  it('roundToBand snaps to the nearest 0.5 step and clamps to [0, 9]', () => {
    // Captured behaviour of the standalone snapper used inside overallBand.
    // NOTE the tie-break: the loop keeps the FIRST step with a strictly smaller
    // distance, so an exact midpoint (6.25, equidistant from 6 and 6.5) snaps
    // DOWN to 6 because 6 is visited first. This is pinned deliberately.
    expect(roundToBand(6.7)).toBe(6.5)
    expect(roundToBand(6.74)).toBe(6.5)
    expect(roundToBand(6.25)).toBe(6) // exact tie → lower step (first-wins)
    expect(roundToBand(6.26)).toBe(6.5) // just past the midpoint → up
    expect(roundToBand(-1)).toBe(0)
    expect(roundToBand(99)).toBe(9)
  })
})

// ─── 2. Mark-scheme registry resolution ──────────────────────────────────────
//
// CURRENT BEHAVIOUR (mark-schemes/index.ts:getMarkScheme): a registered id
// resolves to its MarkScheme object; an unknown id resolves to `null`
// (via `MARK_SCHEMES[id] ?? null`). Locking this prevents a future refactor
// from accidentally throwing, returning undefined, or auto-selecting a default.
describe('characterization: getMarkScheme resolution', () => {
  it('resolves a known id to its scheme object', () => {
    const scheme = getMarkScheme('aqa-lit-paper1')
    expect(scheme).not.toBeNull()
    expect(scheme?.id).toBe('aqa-lit-paper1')
  })

  it('every registered id round-trips to a scheme whose id matches the key', () => {
    // The registry is keyed by scheme.id; this invariant must not drift.
    for (const id of listMarkSchemeIds()) {
      const scheme = getMarkScheme(id)
      expect(scheme).not.toBeNull()
      expect(scheme?.id).toBe(id)
    }
  })

  it('returns null (not undefined / not a throw) for an unknown id', () => {
    expect(getMarkScheme('does-not-exist')).toBeNull()
    expect(getMarkScheme('')).toBeNull()
  })
})

// ─── 3. Grade-boundary "verified-or-null, never guess" gate ───────────────────
//
// CURRENT BEHAVIOUR (grade-boundaries/index.ts):
//   • getBoundaryTable() — RAW accessor: returns the registered table whether or
//     not it is verified; returns null only when the board can't be mapped.
//   • getUsableBoundaryTable() — the PREDICTOR gate: returns the table ONLY when
//     it is registered AND verified === true AND has >= 1 usable (finite,
//     non-null) percentage threshold. Otherwise null → caller falls back to the
//     AQA proxy + indicative-only flag. It NEVER guesses a table for an unknown
//     or unverified board.
// As of today EVERY board table ships verified:false, so getUsableBoundaryTable
// returns null for ALL boards and the predictor always falls back to the AQA
// proxy + indicative-only flag. cambridge-0990 ADDITIONALLY carries only null
// thresholds, so it would stay gated even if a human flipped its verified flag.
// These tests pin that safe-by-default state.
describe('characterization: grade-boundary verified-or-null gate', () => {
  it('normaliseBoardId maps display strings and ids to canonical keys', () => {
    expect(normaliseBoardId('AQA')).toBe('aqa')
    expect(normaliseBoardId('aqa-lang-paper1')).toBe('aqa')
    expect(normaliseBoardId('Pearson Edexcel')).toBe('edexcel')
    expect(normaliseBoardId('WJEC Eduqas')).toBe('eduqas')
    expect(normaliseBoardId('OCR')).toBe('ocr')
    expect(normaliseBoardId('Cambridge')).toBe('cambridge-0500')
  })

  it('returns null from normaliseBoardId for unmappable / empty input', () => {
    expect(normaliseBoardId(undefined)).toBeNull()
    expect(normaliseBoardId(null)).toBeNull()
    expect(normaliseBoardId('')).toBeNull()
    expect(normaliseBoardId('   ')).toBeNull()
    expect(normaliseBoardId('not-a-real-board')).toBeNull()
  })

  it('raw getBoundaryTable returns a table even though it is unverified', () => {
    const table = getBoundaryTable('aqa')
    expect(table).not.toBeNull()
    expect(table?.board).toBe('aqa')
    // Pinned: AQA currently ships UNVERIFIED.
    expect(table?.verified).toBe(false)
  })

  it('raw getBoundaryTable returns null for an unknown board', () => {
    expect(getBoundaryTable('not-a-real-board')).toBeNull()
    expect(getBoundaryTable(undefined)).toBeNull()
  })

  it('usable gate returns null for an unverified board (never guesses)', () => {
    // All boards are verified:false today → no usable table for the predictor.
    expect(getUsableBoundaryTable('aqa')).toBeNull()
    expect(getUsableBoundaryTable('edexcel')).toBeNull()
    expect(getUsableBoundaryTable('ocr')).toBeNull()
    expect(getUsableBoundaryTable('eduqas')).toBeNull()
    expect(getUsableBoundaryTable('cambridge-0500')).toBeNull()
  })

  it('cambridge-0990 is double-gated: unverified AND has no usable thresholds', () => {
    // cambridge-0990 ships verified:false (first gate) and ALSO carries only
    // null thresholds (second gate), so even flipping verified would not make it
    // usable. This pins the "never guess from an empty table" safety contract.
    const raw = getBoundaryTable('cambridge-0990')
    expect(raw).not.toBeNull()
    expect(raw?.verified).toBe(false)
    expect(hasUsableThresholds(raw?.thresholds ?? [])).toBe(false)
    expect(getUsableBoundaryTable('cambridge-0990')).toBeNull()
  })

  it('usable gate returns null for an unknown board', () => {
    expect(getUsableBoundaryTable('not-a-real-board')).toBeNull()
    expect(getUsableBoundaryTable(undefined)).toBeNull()
  })

  it('hasUsableThresholds: empty / all-null is false, one finite pct is true', () => {
    expect(hasUsableThresholds([])).toBe(false)
    const allNull: GradeThreshold[] = [
      { grade: '9', pct: null, rawMark: null, rawMax: null },
      { grade: '8', pct: null, rawMark: null, rawMax: null },
    ]
    expect(hasUsableThresholds(allNull)).toBe(false)
    const oneUsable: GradeThreshold[] = [
      { grade: '9', pct: null, rawMark: null, rawMax: null },
      { grade: '8', pct: 80, rawMark: 128, rawMax: 160 },
    ]
    expect(hasUsableThresholds(oneUsable)).toBe(true)
  })
})
