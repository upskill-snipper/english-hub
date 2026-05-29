/**
 * Tests for the knowledge-pack loader (design doc 11 §6, §3 acceptance).
 *
 * WHY these tests: they lock in the verified-or-null contract (the loader must
 * never fabricate a pack), the immutability guarantee (deep freeze for
 * reproducibility), the graceful zero-exemplar / "uncalibrated" handling, and
 * the sourcing-manifest invariant (no board-secure material).
 */

import { describe, it, expect } from 'vitest'
import {
  loadKnowledgePack,
  parsePackRef,
  isPackUsable,
  isPackCalibrated,
  getPackUsability,
} from '../loader'

const STUB_REF = 'ielts_writing_v2025.1'

/**
 * Assert that a value and everything reachable from it is frozen. WHY a custom
 * walk: `Object.isFrozen` is shallow, but doc 11 §2.3 requires a *deeply* frozen
 * pack so no nested array/object can be mutated mid-run.
 */
function expectDeeplyFrozen(value: unknown): void {
  if (value !== null && typeof value === 'object') {
    expect(Object.isFrozen(value)).toBe(true)
    for (const v of Object.values(value as Record<string, unknown>)) {
      expectDeeplyFrozen(v)
    }
  }
}

describe('parsePackRef', () => {
  it('round-trips a valid fullId, splitting on the trailing version token', () => {
    expect(parsePackRef(STUB_REF)).toEqual({
      idStem: 'ielts_writing',
      version: 'v2025.1',
    })
  })

  it('returns null for garbage / unparseable refs', () => {
    expect(parsePackRef('garbage')).toBeNull()
    expect(parsePackRef('')).toBeNull()
    expect(parsePackRef('_v2025.1')).toBeNull() // empty id stem
    expect(parsePackRef('ielts_writing')).toBeNull() // no version token
    expect(parsePackRef('ielts_writing_v2025')).toBeNull() // malformed version
  })
})

describe('loadKnowledgePack', () => {
  it('resolves the IELTS WT2 stub pack', () => {
    const pack = loadKnowledgePack(STUB_REF)
    expect(pack).not.toBeNull()
    expect(pack?.version).toBe(STUB_REF)
    expect(pack?.manifest.fullId).toBe(STUB_REF)
    expect(pack?.manifest.board).toBe('ielts')
    expect(pack?.manifest.taskType).toBe('task2')
    expect(pack?.manifest.criteriaModel).toBe('ielts_4criteria')
  })

  it('exposes exactly the four TR/CC/LR/GRA criteria built from public descriptors', () => {
    const pack = loadKnowledgePack(STUB_REF)
    expect(pack?.criteria.map((c) => c.code)).toEqual(['TR', 'CC', 'LR', 'GRA'])
    // Each criterion carries a per-band descriptor table, highest band first.
    const tr = pack?.criteria[0]
    expect(tr?.bands[0].band).toBe(9)
    expect(tr?.bands[0].descriptor.length).toBeGreaterThan(0)
  })

  it('returns null for an unknown version', () => {
    expect(loadKnowledgePack('ielts_writing_v9999.9')).toBeNull()
  })

  it('returns null for an unknown id', () => {
    expect(loadKnowledgePack('unknown_pack_v2025.1')).toBeNull()
  })

  it('returns null for an unparseable ref (never guesses)', () => {
    expect(loadKnowledgePack('garbage')).toBeNull()
  })

  it('returns a deeply-frozen pack (immutable / reproducible)', () => {
    const pack = loadKnowledgePack(STUB_REF)
    expect(pack).not.toBeNull()
    expectDeeplyFrozen(pack)
  })
})

describe('zero-exemplar (uncalibrated) handling', () => {
  it('loads the zero-exemplar stub and flags it usable-but-uncalibrated', () => {
    const pack = loadKnowledgePack(STUB_REF)
    expect(pack).not.toBeNull()
    if (!pack) return
    // The bank is intentionally empty at scaffold time (doc 11 §1.5, filled via doc 23).
    expect(pack.exemplars).toHaveLength(0)
    expect(isPackUsable(pack)).toBe(true)
    expect(isPackCalibrated(pack)).toBe(false)
    expect(getPackUsability(pack)).toEqual({ usable: true, calibrated: false })
  })
})

describe('sourcing manifest (no board-secure material)', () => {
  it('exposes a present manifest with containsBoardSecureMaterial false', () => {
    const pack = loadKnowledgePack(STUB_REF)
    expect(pack).not.toBeNull()
    if (!pack) return
    const sourcing = pack.manifest.sourcing
    expect(sourcing).toBeDefined()
    expect(sourcing.containsBoardSecureMaterial).toBe(false)
    expect(sourcing.descriptorSource).toBe('own_paraphrase')
    expect(sourcing.exemplarSource).toBe('own_expert_marked')
    expect((sourcing.licenceNote ?? '').length).toBeGreaterThan(0)
  })
})
