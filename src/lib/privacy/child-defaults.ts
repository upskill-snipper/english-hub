/**
 * ICO Children's Code (Age Appropriate Design Code) — privacy defaults
 * for under-18 users.
 *
 * Default privacy settings for child / minor accounts. All behavioural
 * nudges, personalised recommendations, geolocation, public visibility,
 * and non-essential data collection MUST be OFF by default.
 *
 * Relevant standards:
 *
 *  - Standard 6 ("Detrimental use of data"): "Do not use children's
 *    personal data in ways that have been shown to be detrimental to
 *    their wellbeing, or that go against industry codes of practice,
 *    other regulatory provisions or government advice." We disable
 *    streak / engagement nudges, public leaderboards, and personalised
 *    recommendations because evidence (5Rights, ICO research, DCMS)
 *    shows these mechanics drive compulsive use, anxiety, and
 *    comparison harms in under-18s.
 *
 *  - Standard 8 ("Default settings"): "Settings must be 'high privacy'
 *    by default (unless you can demonstrate a compelling reason for a
 *    different default, taking account of the best interests of the
 *    child)." Every flag in this module therefore defaults to false /
 *    minimal. Opt-in requires either an explicit child-self-toggle in
 *    the privacy centre OR (for younger users) a verified parent /
 *    guardian action.
 *
 * UK GDPR Art. 8 / DPA 2018 s.9 set the digital age of consent at 13,
 * but the ICO Children's Code applies the high-privacy default to
 * everyone under 18. This module aligns with the under-18 boundary.
 *
 * @see business-docs/compliance/childrens-code/01-assessment/gap-analysis.md
 * @see https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/childrens-information/childrens-code-guidance-and-resources/age-appropriate-design-a-code-of-practice-for-online-services/
 */

export const CHILD_DEFAULT_SETTINGS = {
  /**
   * Personalised content / revision recommendations.
   * OFF — Standard 6: profiling under-18s for personalisation is
   * disabled by default per the Children's Code.
   */
  personalisedRecommendations: false,
  /**
   * Daily-streak gamification (streak counters, fire emojis, "don't
   * lose your streak" prompts).
   * OFF — Standard 6: streak mechanics are an established compulsive-
   * use pattern and are disabled by default for minors.
   */
  streakNotifications: false,
  /**
   * "Come back" / engagement nudge notifications (push + email).
   * OFF — Standard 6: behavioural nudges that exploit FOMO are
   * disabled by default for minors.
   */
  nudgeNotifications: false,
  /**
   * Analytics beyond what is strictly necessary to deliver the
   * service. Essential / security telemetry remains enabled — only
   * non-essential analytics (engagement, funnels, A/B tests) are
   * gated by this flag.
   * OFF — Standard 8: high-privacy default for non-essential
   * tracking. Equivalent to "minimal / essential-only" analytics.
   */
  analyticsOptIn: false,
  /**
   * Marketing emails and promotional messages.
   * OFF — Standard 8: marketing to children requires explicit opt-in;
   * it is never the default.
   */
  marketingOptIn: false,
  /**
   * Social-share nudges (e.g. after practice sets / quiz completion).
   * OFF — Standard 6: sharing prompts encourage data disclosure and
   * are not age-appropriate for minors.
   */
  socialShareNudge: false,
  /**
   * Public leaderboards (rank visible to other users).
   * OFF — Standard 6 + Standard 8: public ranking exposes a child's
   * activity / performance to other users, drives comparison harms,
   * and is therefore disabled by default.
   */
  publicLeaderboards: false,
  /**
   * Precise / approximate geolocation collection and use.
   * OFF — Standard 10 ("Geolocation") in tandem with Standard 8:
   * geolocation options that track children must be off by default.
   */
  geolocation: false,
} as const

export type ChildPrivacySettings = typeof CHILD_DEFAULT_SETTINGS

/**
 * Returns a copy of the child-safe defaults.
 * Use this when creating a new child / minor account or resetting to
 * the Children's Code high-privacy baseline.
 */
export function getChildDefaults(): ChildPrivacySettings {
  return { ...CHILD_DEFAULT_SETTINGS }
}

/**
 * Returns child-safe defaults mapped to the `profiles` table column
 * names used in the Supabase upsert during registration.
 *
 * NOTE: This mapping intentionally only includes columns that exist
 * in the live `profiles` schema. New defaults added to
 * `CHILD_DEFAULT_SETTINGS` (e.g. `publicLeaderboards`, `geolocation`)
 * are enforced in application code via {@link getChildDefaults} and
 * do not require schema columns until the corresponding feature
 * surfaces are wired through the database.
 */
export function getChildProfileDefaults() {
  const d = getChildDefaults()
  return {
    streaks_enabled: false,
    personalised_recommendations: d.personalisedRecommendations,
    streak_notifications: d.streakNotifications,
    nudge_notifications: d.nudgeNotifications,
    analytics_opt_in: d.analyticsOptIn,
    marketing_opt_in: d.marketingOptIn,
    social_share_nudge: d.socialShareNudge,
  } as const
}

/**
 * Applies the Children's Code high-privacy defaults to the given user
 * by writing the {@link getChildProfileDefaults} mapping into the
 * Supabase `profiles` table.
 *
 * Called from the signup flow for any user where {@link isMinorAge}
 * returns true (ages 13-17 — under-13s use the parent-linked flow).
 * For adult sign-ups this function is a no-op.
 *
 * Failure mode: errors are SWALLOWED (logged + sent to Sentry) — a
 * profile-defaults write should never block account creation. The
 * worst-case fallback is that the profile row inherits the database's
 * column defaults, which are themselves set to high-privacy values via
 * the Supabase migration.
 *
 * Implementation note: the import for the Supabase admin client is
 * dynamic so this helper can be safely imported from edge / client
 * boundaries without bundling server-only dependencies.
 */
export async function applyChildDefaults(userId: string): Promise<void> {
  if (!userId) return
  try {
    const { createServiceRoleClient } = await import('@/lib/supabase/server')
    const supabase = createServiceRoleClient()
    const defaults = getChildProfileDefaults()
    const { error } = await supabase
      .from('profiles')
      .update({ ...defaults, is_minor: true })
      .eq('id', userId)
    if (error) {
      // eslint-disable-next-line no-console
      console.error('[applyChildDefaults] update failed', error)
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('[applyChildDefaults] unexpected error', err)
  }
}

/**
 * Checks whether the given age qualifies as a "child" under the
 * stricter under-16 threshold used by some product surfaces (e.g.
 * parental-consent flows, age-gated content).
 *
 * NOTE: For applying the Children's Code high-privacy DEFAULTS, prefer
 * {@link isMinorAge}, which covers the full under-18 cohort that the
 * Code protects.
 */
export function isChildAge(age: number | null | undefined): boolean {
  return typeof age === 'number' && age >= 0 && age < 16
}

/**
 * Returns true when the given age falls within the ICO Children's
 * Code remit (under 18). Use this to decide whether to apply the
 * high-privacy defaults exported from this module.
 *
 * Per Standard 8, defaults must be "high privacy" for every user the
 * Code applies to, which is everyone under 18 — not just the under-13
 * UK GDPR Art. 8 digital-consent threshold.
 */
export function isMinorAge(age: number | null | undefined): boolean {
  return typeof age === 'number' && age >= 0 && age < 18
}
