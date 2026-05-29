import { describe, it, expect } from 'vitest'

import {
  MARKING_MODELS,
  MARKER_MODEL,
  ESCALATION_MODEL,
  CLASSIFIER_MODEL,
  assertNotHaiku,
  type MarkingModelTier,
} from '@/lib/marking/engine/models'

describe('MARKING_MODELS', () => {
  const tiers: MarkingModelTier[] = ['classifier', 'marker', 'escalation']

  it('resolves every tier to a non-empty callable id', () => {
    for (const tier of tiers) {
      const id = MARKING_MODELS[tier]
      expect(typeof id).toBe('string')
      expect(id.trim().length).toBeGreaterThan(0)
    }
  })

  it('points each tier at the confirmed latest-family id (Decision A / OQ-1)', () => {
    // marker = latest Sonnet, escalation = latest Opus, classifier = latest
    // Haiku — the newest callable id per family confirmed on the prod key.
    expect(MARKING_MODELS.marker).toBe(MARKER_MODEL)
    expect(MARKING_MODELS.escalation).toBe(ESCALATION_MODEL)
    expect(MARKING_MODELS.classifier).toBe(CLASSIFIER_MODEL)
    expect(MARKER_MODEL).toBe('claude-sonnet-4-6')
    expect(ESCALATION_MODEL).toBe('claude-opus-4-8')
    expect(CLASSIFIER_MODEL).toBe('claude-haiku-4-5')
  })

  it('does not use the bare family `-latest` aliases (they 404 on this account)', () => {
    for (const id of Object.values(MARKING_MODELS)) {
      expect(id).not.toMatch(/-latest$/)
    }
  })

  it('uses a genuinely stronger escalation model than the marker (OQ-1 resolved)', () => {
    // Escalation (Opus) must NOT be the same id as the marker (Sonnet); it is a
    // stronger model now, not just a same-model re-run.
    expect(MARKING_MODELS.escalation).not.toBe(MARKING_MODELS.marker)
    expect(MARKING_MODELS.marker.toLowerCase()).toContain('sonnet')
    expect(MARKING_MODELS.escalation.toLowerCase()).toContain('opus')
  })

  it('keeps a Haiku-class model only on the routing tier, never on marker/escalation', () => {
    expect(MARKING_MODELS.classifier.toLowerCase()).toContain('haiku')
    expect(MARKING_MODELS.marker.toLowerCase()).not.toContain('haiku')
    expect(MARKING_MODELS.escalation.toLowerCase()).not.toContain('haiku')
  })

  it('does not carry an `effort` field on the tiering object', () => {
    // Per-role parameters (effort/thinking/temperature) live at the call sites,
    // not on this pure id map (doc 22 §3).
    expect(MARKING_MODELS).not.toHaveProperty('effort')
  })
})

describe('assertNotHaiku', () => {
  it('passes for the configured marker and escalation tiers', () => {
    expect(() => assertNotHaiku(MARKING_MODELS.marker)).not.toThrow()
    expect(() => assertNotHaiku(MARKING_MODELS.escalation)).not.toThrow()
  })

  it('passes for a non-Haiku callable id', () => {
    expect(() => assertNotHaiku('claude-sonnet-4-20250514')).not.toThrow()
    expect(() => assertNotHaiku('claude-sonnet-4-6')).not.toThrow()
    expect(() => assertNotHaiku('claude-opus-4-8')).not.toThrow()
  })

  it('throws on the classifier (Haiku) tier — proving the guard would catch a misrouted marker', () => {
    // The classifier IS a Haiku-class id; assertNotHaiku must reject it, which
    // is exactly why module-load only runs the guard on marker + escalation.
    expect(() => assertNotHaiku(MARKING_MODELS.classifier)).toThrow(/haiku/i)
  })

  it('throws on a Haiku-class id (IELTS §1: never mark on Haiku)', () => {
    expect(() => assertNotHaiku('claude-3-5-haiku-20241022')).toThrow(/haiku/i)
    expect(() => assertNotHaiku('claude-haiku-4-5')).toThrow(/haiku/i)
  })

  it('throws on a Haiku id regardless of casing', () => {
    expect(() => assertNotHaiku('Claude-Future-HAIKU-x')).toThrow(/haiku/i)
  })

  it('throws on an empty or blank id', () => {
    expect(() => assertNotHaiku('')).toThrow()
    expect(() => assertNotHaiku('   ')).toThrow()
  })
})
