/**
 * Tests for the marking data-posture module (DP-2 / DP-5).
 *
 * The load-bearing guarantee (doc 19 §0, §5 highest risk = claim drift): while
 * `isZeroRetentionConfigured()` is FALSE, no unconditional "we do not train" /
 * "instantly deleted" / "zero retention" claim may surface in the UI-safe
 * output. These tests pin that, plus the typed posture/retention shape.
 *
 * Today's real state (anthropic-client.ts): all three pending flags are false,
 * so `isZeroRetentionConfigured()` returns false - we assert against that real
 * state directly (no mocking) so the test fails loudly if anyone flips a flag
 * in code without the corresponding written confirmation.
 */

import { describe, it, expect } from 'vitest'

import { isZeroRetentionConfigured } from '@/lib/anthropic-client'
import {
  MARKING_DATA_POSTURE,
  MARKING_PRIVACY_CLAIMS,
  RETENTION_POLICY,
  describeDataPosture,
} from '@/lib/marking/privacy/data-posture'

// Patterns that must NEVER appear unconditionally while ZDR is unconfirmed.
const FORBIDDEN_WHILE_PENDING: readonly RegExp[] = [
  /do not train/i,
  /don't train/i,
  /never train/i,
  /not used to train/i,
  /instantly deleted/i,
  /deleted immediately/i,
  /immediately deleted/i,
  /zero[- ]?retention/i,
  /not retained/i,
]

describe('marking data-posture: claim-drift guard (doc 19 §0/§5)', () => {
  it('reflects the real pending state (sanity: ZDR not configured today)', () => {
    // If this ever flips true, it must be because counsel obtained the written
    // confirmations and the flags in anthropic-client.ts were set accordingly.
    expect(isZeroRetentionConfigured()).toBe(false)
  })

  it('describeDataPosture() contains NO unconditional no-train / deletion / ZDR claim while pending', () => {
    const claims = describeDataPosture()
    const joined = claims.join('\n')
    for (const forbidden of FORBIDDEN_WHILE_PENDING) {
      expect(
        forbidden.test(joined),
        `forbidden phrase ${forbidden} leaked into describeDataPosture() while ZDR is unconfirmed`,
      ).toBe(false)
    }
  })

  it('describeDataPosture() still surfaces the enforced-in-code claims', () => {
    const claims = describeDataPosture()
    // PII-minimisation and minor-oversight are enforced in code -> always shown.
    expect(claims.some((c) => /never sent/i.test(c))).toBe(true)
    expect(claims.some((c) => /under-18s|parental consent/i.test(c))).toBe(true)
  })

  it('no_training and zero_retention are structurally not-claimable while pending', () => {
    expect(MARKING_DATA_POSTURE.noTraining.status).toBe('contractual_pending')
    expect(MARKING_DATA_POSTURE.noTraining.claimableInUI).toBe(false)
    expect(MARKING_DATA_POSTURE.zeroRetention.status).toBe('contractual_pending')
    expect(MARKING_DATA_POSTURE.zeroRetention.claimableInUI).toBe(false)

    expect(MARKING_PRIVACY_CLAIMS.no_training.claimableInUI).toBe(false)
    expect(MARKING_PRIVACY_CLAIMS.no_training.tier).toBe('pending')
    expect(MARKING_PRIVACY_CLAIMS.zero_retention.claimableInUI).toBe(false)
    expect(MARKING_PRIVACY_CLAIMS.zero_retention.tier).toBe('pending')
  })

  it('the pending claims are EXCLUDED from describeDataPosture() output', () => {
    const claims = describeDataPosture()
    expect(claims).not.toContain(MARKING_PRIVACY_CLAIMS.no_training.text)
    expect(claims).not.toContain(MARKING_PRIVACY_CLAIMS.zero_retention.text)
  })
})

describe('marking data-posture: derived from real anthropic-client state', () => {
  it('claimability of contractual-pending claims equals isZeroRetentionConfigured()', () => {
    const expected = isZeroRetentionConfigured()
    expect(MARKING_DATA_POSTURE.noTraining.claimableInUI).toBe(expected)
    expect(MARKING_DATA_POSTURE.zeroRetention.claimableInUI).toBe(expected)
  })

  it('enforced-in-code claims are always claimable', () => {
    expect(MARKING_PRIVACY_CLAIMS.no_pii_to_model.claimableInUI).toBe(true)
    expect(MARKING_PRIVACY_CLAIMS.no_pii_to_model.tier).toBe('enforced_in_code')
    expect(MARKING_PRIVACY_CLAIMS.human_review_for_minors.claimableInUI).toBe(true)
  })

  it('surfaces provider/region straight from ANTHROPIC_DATA_POLICY', () => {
    expect(MARKING_DATA_POSTURE.modelProcessingRegion).toBe('US')
    expect(MARKING_DATA_POSTURE.provider).toBe('Anthropic, PBC')
  })
})

describe('marking data-posture: claim map shape', () => {
  it('exposes exactly the five doc-19 §2 claim keys', () => {
    expect(Object.keys(MARKING_PRIVACY_CLAIMS).sort()).toEqual(
      [
        'eu_uk_at_rest',
        'human_review_for_minors',
        'no_pii_to_model',
        'no_training',
        'zero_retention',
      ].sort(),
    )
  })

  it('every claim text is non-empty and self-keyed', () => {
    for (const [key, claim] of Object.entries(MARKING_PRIVACY_CLAIMS)) {
      expect(claim.key).toBe(key)
      expect(claim.text.length).toBeGreaterThan(0)
    }
  })
})

describe('retention policy (DP-5): documented, never invented', () => {
  it('covers every marking data class doc 19 §4 Step 4 names', () => {
    const classes = new Set(RETENTION_POLICY.map((r) => r.dataClass))
    expect(classes.has('marking_submission_essay_text')).toBe(true)
    expect(classes.has('marking_ai_result')).toBe(true)
    expect(classes.has('ai_audit_log')).toBe(true)
    expect(classes.has('feedback')).toBe(true)
    expect(classes.has('analytics_projection')).toBe(true)
  })

  it('does NOT invent retention windows: undecided figures are null + TODO', () => {
    for (const rule of RETENTION_POLICY) {
      if (rule.windowDays === null) {
        expect(
          rule.todo,
          `data class ${rule.dataClass} has a null window but no TODO explaining the missing decision`,
        ).toBeTruthy()
      }
    }
  })

  it('tracks provider-side Anthropic retention as a contractual class gated on the pending confirmation', () => {
    const providerRules = RETENTION_POLICY.filter((r) => r.controller === 'processor_contractual')
    expect(providerRules.length).toBeGreaterThan(0)
    // Provider-side retention cannot be asserted while ZDR is unconfirmed.
    for (const rule of providerRules) {
      expect(rule.windowDays).toBeNull()
      expect(rule.todo).toBeTruthy()
    }
  })
})
