import { describe, it, expect } from 'vitest'

import { ANTHROPIC_MODEL } from '@/lib/anthropic-client'
import { MARKING_MODELS, assertNotHaiku, type MarkingModelTier } from '@/lib/marking/engine/models'

describe('MARKING_MODELS', () => {
  const tiers: MarkingModelTier[] = ['classifier', 'marker', 'escalation']

  it('resolves every tier to a non-empty callable id', () => {
    for (const tier of tiers) {
      const id = MARKING_MODELS[tier]
      expect(typeof id).toBe('string')
      expect(id.trim().length).toBeGreaterThan(0)
    }
  })

  it('defaults all tiers to the single confirmed callable id (ANTHROPIC_MODEL)', () => {
    expect(MARKING_MODELS.classifier).toBe(ANTHROPIC_MODEL)
    expect(MARKING_MODELS.marker).toBe(ANTHROPIC_MODEL)
    expect(MARKING_MODELS.escalation).toBe(ANTHROPIC_MODEL)
  })

  it('treats escalation as a same-model re-run until OQ-1 is resolved', () => {
    // Escalation today === marker (same-model re-run, not a stronger model).
    expect(MARKING_MODELS.escalation).toBe(MARKING_MODELS.marker)
  })

  it('does not hard-code an unconfirmed spec id or an effort field', () => {
    // The spec's aspirational ids must not have leaked into the constants.
    const values = Object.values(MARKING_MODELS)
    for (const id of values) {
      expect(id).not.toMatch(/sonnet-4-6/)
      expect(id).not.toMatch(/opus-4-8/)
    }
    // No `effort` key on the tiering object.
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
  })

  it('throws on a Haiku-class id (IELTS §1: never mark on Haiku)', () => {
    expect(() => assertNotHaiku('claude-3-5-haiku-20241022')).toThrow(/haiku/i)
  })

  it('throws on a Haiku id regardless of casing', () => {
    expect(() => assertNotHaiku('Claude-Future-HAIKU-x')).toThrow(/haiku/i)
  })

  it('throws on an empty or blank id', () => {
    expect(() => assertNotHaiku('')).toThrow()
    expect(() => assertNotHaiku('   ')).toThrow()
  })
})
