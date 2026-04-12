/**
 * ICO Children's Code (Age Appropriate Design Code) - Standard 3: Age-appropriate application
 *
 * Default privacy settings for child accounts (users under 16).
 * All behavioural nudges, personalised recommendations, and non-essential
 * data collection must be OFF by default per the "high privacy by default"
 * requirement.
 *
 * These defaults satisfy the P1 gap identified in the gap analysis:
 *   - Personalised recommendations ON by default  -> now OFF
 *   - Streak / nudge notifications ON by default  -> now OFF
 *
 * @see business-docs/compliance/childrens-code/01-assessment/gap-analysis.md
 */

export const CHILD_DEFAULT_SETTINGS = {
  /** Personalised content / revision recommendations */
  personalisedRecommendations: false,
  /** Daily-streak notifications that encourage continued use */
  streakNotifications: false,
  /** "Come back" / engagement nudge notifications */
  nudgeNotifications: false,
  /** Analytics beyond what is strictly necessary for the service */
  analyticsOptIn: false,
  /** Marketing emails and promotional messages */
  marketingOptIn: false,
} as const

export type ChildPrivacySettings = typeof CHILD_DEFAULT_SETTINGS

/**
 * Returns a copy of the child-safe defaults.
 * Use this when creating a new child account or resetting to defaults.
 */
export function getChildDefaults(): ChildPrivacySettings {
  return { ...CHILD_DEFAULT_SETTINGS }
}
