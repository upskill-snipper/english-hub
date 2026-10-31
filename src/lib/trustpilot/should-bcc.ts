/**
 * Eligibility gate for a Trustpilot invitation outside triggerTrustpilotInvite.
 *
 * Three callers: the canonical `sendEmail()` wrapper when the caller tags an
 * email with a `trustpilotTrigger` (the BCC), /api/trustpilot/fired-check
 * (InviteJS in the browser), and /api/cron/trustpilot-retention-invite, which
 * sends its own review request only when this says yes. Returns
 * `{ ok: true }` if the invitation may go and a `trustpilot_invite` row be
 * written with status `sent`; otherwise `{ ok: false, reason }`.
 *
 * Rules (in order of evaluation):
 *   1. `TRUSTPILOT_ENABLED === 'true'`
 *   2. `TRUSTPILOT_INVITE_EMAIL` env is non-empty
 *   3. Trigger is a known `TrustpilotBccTrigger`
 *   4. User exists, not soft-deleted, and has a Supabase identity
 *   5. User is a KNOWN adult: the email age group (resolveEmailAgeGroup) is
 *      ADULT, which needs a real date of birth 18 or over
 *   6. PrivacySettings does not refuse (marketingEnabled false, aiOptOut
 *      true), AND isMarketingAllowed says yes
 *   7. Dedup: 12-month per-trigger AND 90-day global windows both clear,
 *      under the Prisma id and the Supabase uuid alike
 *
 * ─── The strict reading, here too (31 October 2026) ───────────────────────
 * 7e701d004 (24 October 2026) gave triggerTrustpilotInvite the strict
 * reading: a known adult whom isMarketingAllowed clears, since a review
 * request is marketing in all but name. This gate kept the lax one. Its own
 * age check read only `User.dateOfBirth` and counted the 2000-01-01
 * placeholder (PLACEHOLDER_DOB_ISO, written with isMinor false by the
 * pre-17-September admin verify route and the backfill, and never an age) as
 * an adult; it ignored `profiles.date_of_birth` and `is_minor`; and a missing
 * PrivacySettings row counted as consent (production held only two
 * PrivacySettings rows on 12 October 2026), with the consent ledger's
 * withdrawal never read. So the BCC, InviteJS for every 'pro' user
 * on /account/billing, and the retention cron's own email could all reach a
 * child or an adult who had refused marketing. Steps 5 and 6 now ask what
 * triggerTrustpilotInvite asks, keyed on the Supabase uuid, so every
 * Trustpilot path shares one rule. Whether a review request needs consent or
 * only the absence of an objection is still the founder's call.
 *
 * Dedup under both ids: the rows this file's callers write carry the Prisma
 * id, and triggerTrustpilotInvite's carry the Supabase uuid, so a window
 * read under one id alone did not see the other path's invitation.
 */

import type { PrismaClient } from '@prisma/client'
import { isAdultForEmail, resolveEmailAgeGroup } from '@/lib/identity'
import { isMarketingAllowed } from '@/lib/email/marketing-preference'
import { checkDedup } from './dedup'
import { isTrustpilotBccTrigger, type TrustpilotBccTrigger } from './trigger-names'

const UUID_SHAPE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i

export type ShouldBccReason =
  | 'flag_off'
  | 'env_empty'
  | 'unknown_trigger'
  | 'user_not_found'
  | 'soft_deleted'
  | 'no_supabase_identity'
  | 'under_18'
  /** No real date of birth showing 18 or over: unknown is treated as a child. */
  | 'not_known_adult'
  | 'marketing_opt_out'
  /** isMarketingAllowed said no, or could not say. */
  | 'no_marketing_consent'
  | 'ai_opt_out'
  | 'duplicate_trigger_12m'
  | 'global_90d_window'

export type ShouldBccResult = { ok: true } | { ok: false; reason: ShouldBccReason }

export type ShouldBccInput = {
  userId: string
  trigger: string
  prisma: PrismaClient
  now?: Date
}

export async function shouldBccTrustpilot(input: ShouldBccInput): Promise<ShouldBccResult> {
  const { userId, trigger, prisma } = input
  const now = input.now ?? new Date()

  // 1. Feature flag.
  if (process.env.TRUSTPILOT_ENABLED !== 'true') {
    return { ok: false, reason: 'flag_off' }
  }

  // 2. Env address present.
  const inviteEmail = process.env.TRUSTPILOT_INVITE_EMAIL
  if (!inviteEmail || inviteEmail.trim() === '') {
    return { ok: false, reason: 'env_empty' }
  }

  // 3. Trigger validation.
  if (!isTrustpilotBccTrigger(trigger)) {
    return { ok: false, reason: 'unknown_trigger' }
  }
  const typedTrigger: TrustpilotBccTrigger = trigger

  // 4. + 5. User lookup, soft-delete, age gate.
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: {
      id: true,
      supabaseUserId: true,
      isMinor: true,
      deletedAt: true,
      privacySettings: {
        select: {
          marketingEnabled: true,
          aiOptOut: true,
        },
      },
    },
  })

  if (!user) return { ok: false, reason: 'user_not_found' }
  if (user.deletedAt) return { ok: false, reason: 'soft_deleted' }

  if (user.isMinor) return { ok: false, reason: 'under_18' }

  // The age and marketing reads are keyed on the Supabase uuid. A legacy row
  // whose primary key IS the uuid (src/lib/identity/lookup.ts) has none in
  // `supabaseUserId`; a row with neither cannot be asked, so it is refused.
  const supabaseUserId = user.supabaseUserId ?? (UUID_SHAPE.test(user.id) ? user.id : null)
  if (!supabaseUserId) return { ok: false, reason: 'no_supabase_identity' }

  // 5. A KNOWN adult: a real date of birth 18 or over, from the profile or the
  // Prisma row (the younger wins), never the placeholder. Unknown is a child.
  const ageGroup = await resolveEmailAgeGroup(supabaseUserId, now)
  if (!isAdultForEmail(ageGroup)) {
    return { ok: false, reason: ageGroup === 'UNKNOWN' ? 'not_known_adult' : 'under_18' }
  }

  // 6. Privacy preferences, then the read every marketing email uses: an
  // unknown or failed read means do not send.
  const privacy = user.privacySettings
  if (privacy && privacy.marketingEnabled === false) {
    return { ok: false, reason: 'marketing_opt_out' }
  }
  if (privacy && privacy.aiOptOut === true) {
    return { ok: false, reason: 'ai_opt_out' }
  }
  if (!(await isMarketingAllowed(supabaseUserId))) {
    return { ok: false, reason: 'no_marketing_consent' }
  }

  // 7. Dedup windows, under both ids (see the header).
  for (const id of new Set([userId, supabaseUserId])) {
    const dedup = await checkDedup({ userId: id, trigger: typedTrigger, now })
    if (!dedup.ok) return { ok: false, reason: dedup.reason }
  }

  return { ok: true }
}
