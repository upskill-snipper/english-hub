/**
 * Canonical Trustpilot trigger names shared by the BCC pipeline (server-side
 * `sendEmail` integration) and the InviteJS client-side path.
 *
 * These must stay in sync with the `trigger` CHECK constraint in the
 * `trustpilot_invite` Supabase table. The legacy `email-templates.ts` file
 * defines a superset used by the transactional-email cron flow; the four
 * names below are the canonical BCC + InviteJS surface.
 */

export const TRUSTPILOT_TRIGGERS = [
  'student_first_mark',
  'student_90d_retention',
  'teacher_first_bulk_mark',
  'teacher_month_3_streak',
] as const

export type TrustpilotBccTrigger = (typeof TRUSTPILOT_TRIGGERS)[number]

export function isTrustpilotBccTrigger(value: string): value is TrustpilotBccTrigger {
  return (TRUSTPILOT_TRIGGERS as readonly string[]).includes(value)
}
