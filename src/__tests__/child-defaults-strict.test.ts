/**
 * Strict Children's Code defaults coverage.
 *
 * Asserts that, for every age in the 13–17 cohort (the under-18 group
 * the ICO Children's Code applies to), every privacy / engagement
 * setting that the Code requires to be "high privacy by default" is
 * OFF unless explicitly opted in.
 *
 *  - Standard 6 ("Detrimental use of data"): personalisation, streak /
 *    nudge gamification, public leaderboards, social-share nudges
 *  - Standard 8 ("Default settings"): every flag must default to high-
 *    privacy; opt-in must be explicit (child self-toggle in privacy
 *    centre, or verified parent / guardian action)
 *  - Standard 10 ("Geolocation"): geolocation OFF by default
 *
 * This file is companion coverage to `child-defaults.test.ts` and
 * focuses specifically on the under-18 default enforcement contract.
 */

import { describe, it, expect } from 'vitest'
import {
  CHILD_DEFAULT_SETTINGS,
  getChildDefaults,
  getChildProfileDefaults,
  isChildAge,
  isMinorAge,
  type ChildPrivacySettings,
} from '@/lib/privacy/child-defaults'

const TEEN_AGES = [13, 14, 15, 16, 17] as const

/**
 * Every flag the Children's Code requires to default to high-privacy
 * for under-18 users. Keeping this list explicit (rather than just
 * iterating `Object.keys`) makes it impossible for a future PR to
 * silently weaken the contract by renaming a key — the test will fail
 * loudly if the constant no longer exposes one of these names.
 */
const REQUIRED_OFF_BY_DEFAULT: ReadonlyArray<keyof ChildPrivacySettings> = [
  'personalisedRecommendations',
  'streakNotifications',
  'nudgeNotifications',
  'analyticsOptIn',
  'marketingOptIn',
  'socialShareNudge',
  'publicLeaderboards',
  'geolocation',
]

describe("ICO Children's Code — strict under-18 defaults", () => {
  describe('isMinorAge() covers the full 13-17 cohort', () => {
    it.each(TEEN_AGES)('treats age %i as a minor', (age) => {
      expect(isMinorAge(age)).toBe(true)
    })

    it('treats age 18 (boundary) as NOT a minor', () => {
      expect(isMinorAge(18)).toBe(false)
    })

    it('treats adults as NOT minors', () => {
      for (const age of [19, 25, 40, 65, 99]) {
        expect(isMinorAge(age)).toBe(false)
      }
    })

    it('returns false for null / undefined / negative', () => {
      expect(isMinorAge(null)).toBe(false)
      expect(isMinorAge(undefined)).toBe(false)
      expect(isMinorAge(-1)).toBe(false)
    })
  })

  describe('Every required flag is OFF by default for ages 13-17', () => {
    it.each(TEEN_AGES)("age %i: every Children's Code flag defaults to false", (age) => {
      // Sanity: this age must qualify as a minor.
      expect(isMinorAge(age)).toBe(true)

      const defaults = getChildDefaults()
      for (const key of REQUIRED_OFF_BY_DEFAULT) {
        expect(
          defaults[key],
          `Setting "${String(key)}" must default to false for age ${age} ` +
            "(ICO Children's Code Standard 8 — high privacy by default)",
        ).toBe(false)
      }
    })

    it('CHILD_DEFAULT_SETTINGS exposes every required flag as false', () => {
      for (const key of REQUIRED_OFF_BY_DEFAULT) {
        expect(CHILD_DEFAULT_SETTINGS).toHaveProperty(key)
        expect(CHILD_DEFAULT_SETTINGS[key]).toBe(false)
      }
    })

    it('No setting in the constant is true (no silent loosening)', () => {
      for (const [key, value] of Object.entries(CHILD_DEFAULT_SETTINGS)) {
        expect(value, `Setting "${key}" leaked a true default`).toBe(false)
      }
    })

    it('analytics defaults to minimal (essential-only) — opt-in is false', () => {
      // Standard 6 / Standard 8: only essential analytics may be on by
      // default; the user-facing opt-in flag must be false until the
      // child (or a verified parent) explicitly turns it on.
      expect(CHILD_DEFAULT_SETTINGS.analyticsOptIn).toBe(false)
    })
  })

  describe('Defaults flip to ON only via explicit opt-in', () => {
    // The defaults module deliberately exports an `as const` object,
    // so each field's type is the literal `false`. To model a real
    // opt-in we widen the values to plain `boolean` here.
    type MutableSettings = { -readonly [K in keyof ChildPrivacySettings]: boolean }

    function applyOptIn(
      base: ChildPrivacySettings,
      patch: Partial<MutableSettings>,
    ): MutableSettings {
      return { ...(base as unknown as MutableSettings), ...patch }
    }

    it.each(REQUIRED_OFF_BY_DEFAULT)('a self-toggle on "%s" only flips that one key', (key) => {
      const base = getChildDefaults()
      const next = applyOptIn(base, { [key]: true } as Partial<MutableSettings>)

      expect(next[key]).toBe(true)
      for (const other of REQUIRED_OFF_BY_DEFAULT) {
        if (other === key) continue
        expect(next[other], `Toggling "${String(key)}" must not enable "${String(other)}"`).toBe(
          false,
        )
      }
    })

    it('an adult / parent-applied bulk opt-in only enables what they pass in', () => {
      // e.g. a verified parent re-enables personalisation + analytics
      // for their teen via the privacy centre. Nothing else should move.
      const base = getChildDefaults()
      const parentPatch: Partial<MutableSettings> = {
        personalisedRecommendations: true,
        analyticsOptIn: true,
      }
      const next = applyOptIn(base, parentPatch)

      expect(next.personalisedRecommendations).toBe(true)
      expect(next.analyticsOptIn).toBe(true)
      // Everything else stays OFF.
      expect(next.streakNotifications).toBe(false)
      expect(next.nudgeNotifications).toBe(false)
      expect(next.marketingOptIn).toBe(false)
      expect(next.socialShareNudge).toBe(false)
      expect(next.publicLeaderboards).toBe(false)
      expect(next.geolocation).toBe(false)
    })

    it('mutating one returned defaults object does not leak into the next call', () => {
      const a = getChildDefaults()
      ;(a as Record<string, boolean>).publicLeaderboards = true
      const b = getChildDefaults()
      expect(b.publicLeaderboards).toBe(false)
      expect(CHILD_DEFAULT_SETTINGS.publicLeaderboards).toBe(false)
    })
  })

  describe('Profile-column mapping retains high-privacy defaults', () => {
    it('every mapped column is false', () => {
      const profile = getChildProfileDefaults()
      for (const [key, value] of Object.entries(profile)) {
        expect(value, `Profile column "${key}" leaked a true default`).toBe(false)
      }
    })

    it('marketing + analytics columns are OFF (Standard 8)', () => {
      const profile = getChildProfileDefaults()
      expect(profile.marketing_opt_in).toBe(false)
      expect(profile.analytics_opt_in).toBe(false)
    })

    it('streak / nudge gamification columns are OFF (Standard 6)', () => {
      const profile = getChildProfileDefaults()
      expect(profile.streaks_enabled).toBe(false)
      expect(profile.streak_notifications).toBe(false)
      expect(profile.nudge_notifications).toBe(false)
    })
  })

  describe('isChildAge() retains its under-16 semantics', () => {
    // Sanity check that the stricter helper used by parental-consent
    // flows is unchanged. The under-18 default contract lives on
    // isMinorAge() — see above.
    it('treats 13-15 as children', () => {
      expect(isChildAge(13)).toBe(true)
      expect(isChildAge(14)).toBe(true)
      expect(isChildAge(15)).toBe(true)
    })

    it('treats 16 and 17 as NOT children (but they are still minors)', () => {
      expect(isChildAge(16)).toBe(false)
      expect(isChildAge(17)).toBe(false)
      expect(isMinorAge(16)).toBe(true)
      expect(isMinorAge(17)).toBe(true)
    })
  })
})
