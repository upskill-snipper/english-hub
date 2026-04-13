import { describe, it, expect } from 'vitest'
import {
  CHILD_DEFAULT_SETTINGS,
  getChildDefaults,
  getChildProfileDefaults,
  isChildAge,
  type ChildPrivacySettings,
} from '@/lib/privacy/child-defaults'

describe('Child Privacy Defaults (ICO Children\'s Code - Standard 3)', () => {
  // ── CHILD_DEFAULT_SETTINGS constant ────────────────────────────────────

  it('disables personalised recommendations by default', () => {
    expect(CHILD_DEFAULT_SETTINGS.personalisedRecommendations).toBe(false)
  })

  it('disables streak notifications by default', () => {
    expect(CHILD_DEFAULT_SETTINGS.streakNotifications).toBe(false)
  })

  it('disables nudge notifications by default', () => {
    expect(CHILD_DEFAULT_SETTINGS.nudgeNotifications).toBe(false)
  })

  it('disables analytics opt-in by default', () => {
    expect(CHILD_DEFAULT_SETTINGS.analyticsOptIn).toBe(false)
  })

  it('disables marketing opt-in by default', () => {
    expect(CHILD_DEFAULT_SETTINGS.marketingOptIn).toBe(false)
  })

  it('disables social share nudge by default', () => {
    expect(CHILD_DEFAULT_SETTINGS.socialShareNudge).toBe(false)
  })

  it('has exactly 6 settings keys', () => {
    const keys = Object.keys(CHILD_DEFAULT_SETTINGS)
    expect(keys).toHaveLength(6)
    expect(keys).toEqual(
      expect.arrayContaining([
        'personalisedRecommendations',
        'streakNotifications',
        'nudgeNotifications',
        'analyticsOptIn',
        'marketingOptIn',
        'socialShareNudge',
      ])
    )
  })

  it('has every setting set to false (high privacy by default)', () => {
    for (const [_key, value] of Object.entries(CHILD_DEFAULT_SETTINGS)) {
      expect(value).toBe(false)
    }
  })

  // ── getChildDefaults() ─────────────────────────────────────────────────

  it('returns a copy of the defaults, not the same reference', () => {
    const defaults = getChildDefaults()
    expect(defaults).not.toBe(CHILD_DEFAULT_SETTINGS)
    expect(defaults).toEqual(CHILD_DEFAULT_SETTINGS)
  })

  it('returns an independent copy each time (mutations do not propagate)', () => {
    const a = getChildDefaults()
    const b = getChildDefaults()
    ;(a as Record<string, boolean>).personalisedRecommendations = true
    expect(b.personalisedRecommendations).toBe(false)
    expect(CHILD_DEFAULT_SETTINGS.personalisedRecommendations).toBe(false)
  })

  it('satisfies the ChildPrivacySettings type shape', () => {
    const defaults: ChildPrivacySettings = getChildDefaults()
    expect(typeof defaults.personalisedRecommendations).toBe('boolean')
    expect(typeof defaults.streakNotifications).toBe('boolean')
    expect(typeof defaults.nudgeNotifications).toBe('boolean')
    expect(typeof defaults.analyticsOptIn).toBe('boolean')
    expect(typeof defaults.marketingOptIn).toBe('boolean')
    expect(typeof defaults.socialShareNudge).toBe('boolean')
  })

  // ── getChildProfileDefaults() ──────────────────────────────────────────

  describe('getChildProfileDefaults', () => {
    it('returns Supabase column-name mapped defaults', () => {
      const profile = getChildProfileDefaults()
      expect(profile.streaks_enabled).toBe(false)
      expect(profile.personalised_recommendations).toBe(false)
      expect(profile.streak_notifications).toBe(false)
      expect(profile.nudge_notifications).toBe(false)
      expect(profile.analytics_opt_in).toBe(false)
      expect(profile.marketing_opt_in).toBe(false)
      expect(profile.social_share_nudge).toBe(false)
    })

    it('all profile defaults are false', () => {
      const profile = getChildProfileDefaults()
      for (const [_key, value] of Object.entries(profile)) {
        expect(value).toBe(false)
      }
    })
  })

  // ── isChildAge() ───────────────────────────────────────────────────────

  describe('isChildAge', () => {
    it('returns true for ages 0-15', () => {
      for (let age = 0; age <= 15; age++) {
        expect(isChildAge(age)).toBe(true)
      }
    })

    it('returns false for age 16 (boundary)', () => {
      expect(isChildAge(16)).toBe(false)
    })

    it('returns false for adults (age 18+)', () => {
      expect(isChildAge(18)).toBe(false)
      expect(isChildAge(25)).toBe(false)
      expect(isChildAge(65)).toBe(false)
    })

    it('returns false for null', () => {
      expect(isChildAge(null)).toBe(false)
    })

    it('returns false for undefined', () => {
      expect(isChildAge(undefined)).toBe(false)
    })

    it('returns false for negative ages', () => {
      expect(isChildAge(-1)).toBe(false)
      expect(isChildAge(-100)).toBe(false)
    })
  })
})
