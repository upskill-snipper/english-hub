/**
 * Content contract for the composed IELTS Writing Task 2 knowledge pack
 * (knowledge-pack design doc 11 §3 acceptance; plan R-COPY).
 *
 * WHY these tests: they lock in the authored-content invariants that the loader
 * and the rest of the engine rely on — the four TR/CC/LR/GRA criteria are all
 * present and ordered; every whole band 4–9 carries a non-empty descriptor for
 * every criterion (so the {{BAND_DESCRIPTORS}} rubric block is complete); the
 * sourcing manifest asserts no board-secure material (the copyright guardrail);
 * and the exemplar bank is empty + the pack is flagged uncalibrated (doc 11
 * §1.5 — the bank is filled later via the marker drive, doc 23).
 */

import { describe, it, expect } from 'vitest'
import { ieltsWritingTask2Pack, IELTS_WT2_FULL_ID, IELTS_WT2_UNCALIBRATED } from '../index'
import { getPackUsability } from '../../../loader'

/** The four IELTS Writing Task 2 criterion codes, in spec §4 canonical order. */
const EXPECTED_CRITERION_CODES = ['TR', 'CC', 'LR', 'GRA'] as const

/**
 * The bands the brief requires to be fully authored with non-empty descriptors
 * for every criterion (the markable range; bands 0–3 are characterised in the
 * descriptor modules' below-assessable notes, not as per-band descriptors).
 */
const REQUIRED_BANDS = [4, 5, 6, 7, 8, 9] as const

describe('IELTS Writing Task 2 pack — identity', () => {
  it('carries the canonical pack_version / fullId', () => {
    expect(ieltsWritingTask2Pack.version).toBe(IELTS_WT2_FULL_ID)
    expect(ieltsWritingTask2Pack.manifest.fullId).toBe(IELTS_WT2_FULL_ID)
  })

  it('declares the IELTS Writing Task 2 academic four-criteria model', () => {
    const m = ieltsWritingTask2Pack.manifest
    expect(m.board).toBe('ielts')
    expect(m.subjectOrExam).toBe('writing')
    expect(m.taskType).toBe('task2')
    expect(m.criteriaModel).toBe('ielts_4criteria')
  })
})

describe('IELTS Writing Task 2 pack — criteria coverage', () => {
  it('exposes exactly the four TR/CC/LR/GRA criteria in canonical order', () => {
    expect(ieltsWritingTask2Pack.criteria.map((c) => c.code)).toEqual([...EXPECTED_CRITERION_CODES])
  })

  it('gives every criterion a human-readable label', () => {
    for (const criterion of ieltsWritingTask2Pack.criteria) {
      expect(criterion.label.trim().length).toBeGreaterThan(0)
    }
  })

  it('provides a non-empty descriptor for every band 4–9 of every criterion', () => {
    for (const criterion of ieltsWritingTask2Pack.criteria) {
      for (const band of REQUIRED_BANDS) {
        const bd = criterion.bands.find((b) => b.band === band)
        expect(bd, `${criterion.code} is missing a band ${band} descriptor`).toBeDefined()
        expect(bd!.descriptor.trim().length).toBeGreaterThan(0)
      }
    }
  })

  it('orders each criterion’s bands highest-first (band 9 leads)', () => {
    for (const criterion of ieltsWritingTask2Pack.criteria) {
      expect(criterion.bands[0].band).toBe(9)
    }
  })
})

describe('IELTS Writing Task 2 pack — conventions & pitfalls', () => {
  it('carries the authored conventions, pitfalls and integrity guidance', () => {
    const conv = ieltsWritingTask2Pack.conventions as Record<string, unknown>
    expect(Array.isArray(conv.conventions)).toBe(true)
    expect((conv.conventions as unknown[]).length).toBeGreaterThan(0)
    expect(Array.isArray(conv.pitfalls)).toBe(true)
    expect((conv.pitfalls as unknown[]).length).toBeGreaterThan(0)
    expect(Array.isArray(conv.integrity)).toBe(true)
    expect((conv.integrity as unknown[]).length).toBeGreaterThan(0)
  })
})

describe('IELTS Writing Task 2 pack — sourcing (copyright guardrail, R-COPY)', () => {
  it('declares no board-secure material and own-paraphrase descriptors', () => {
    const s = ieltsWritingTask2Pack.manifest.sourcing
    expect(s.containsBoardSecureMaterial).toBe(false)
    expect(s.descriptorSource).toBe('own_paraphrase')
    expect(s.exemplarSource).toBe('own_expert_marked')
    expect((s.licenceNote ?? '').length).toBeGreaterThan(0)
  })
})

describe('IELTS Writing Task 2 pack — calibration (zero-exemplar)', () => {
  it('ships with an empty exemplar bank', () => {
    expect(ieltsWritingTask2Pack.exemplars).toEqual([])
  })

  it('is flagged uncalibrated', () => {
    expect(IELTS_WT2_UNCALIBRATED).toBe(true)
    expect((ieltsWritingTask2Pack.conventions as Record<string, unknown>).uncalibrated).toBe(true)
  })

  it('is usable-but-uncalibrated per the loader’s derived view', () => {
    expect(getPackUsability(ieltsWritingTask2Pack)).toEqual({
      usable: true,
      calibrated: false,
    })
  })
})
