/**
 * Pure eligibility gate for BCC'ing Trustpilot on outbound transactional mail.
 *
 * Called by the canonical `sendEmail()` wrapper when the caller tags an
 * email with a `trustpilotTrigger`. Returns `{ ok: true }` if the invite
 * address should be appended to BCC and a `trustpilot_invite` row written
 * with status `sent`; otherwise `{ ok: false, reason }` and the row is
 * written with status `skipped`.
 *
 * Rules (in order of evaluation):
 *   1. `TRUSTPILOT_ENABLED === 'true'`
 *   2. `TRUSTPILOT_INVITE_EMAIL` env is non-empty
 *   3. Trigger is a known `TrustpilotBccTrigger`
 *   4. User exists, not soft-deleted
 *   5. User is 18+ (dateOfBirth older than 18 years)
 *   6. PrivacySettings allows: marketingEnabled !== false AND aiOptOut !== true
 *   7. Dedup: 12-month per-trigger AND 90-day global windows both clear
 *
 * British English: this is an eligibility check, not a marketing opt-out.
 * Users with `marketingEnabled=false` are excluded because Trustpilot BCC is
 * marketing-adjacent under UK GDPR (legitimate-interest balancing).
 */

import type { PrismaClient } from '@prisma/client'
import { checkDedup } from './dedup'
import {
  isTrustpilotBccTrigger,
  type TrustpilotBccTrigger,
} from './trigger-names'

export type ShouldBccReason =
  | 'flag_off'
  | 'env_empty'
  | 'unknown_trigger'
  | 'user_not_found'
  | 'soft_deleted'
  | 'under_18'
  | 'marketing_opt_out'
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

export async function shouldBccTrustpilot(
  input: ShouldBccInput,
): Promise<ShouldBccResult> {
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
      dateOfBirth: true,
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

  if (user.isMinor || !isAdultOn(user.dateOfBirth, now)) {
    return { ok: false, reason: 'under_18' }
  }

  // 6. Privacy preferences.
  const privacy = user.privacySettings
  if (privacy && privacy.marketingEnabled === false) {
    return { ok: false, reason: 'marketing_opt_out' }
  }
  if (privacy && privacy.aiOptOut === true) {
    return { ok: false, reason: 'ai_opt_out' }
  }

  // 7. Dedup windows.
  const dedup = await checkDedup({ userId, trigger: typedTrigger, now })
  if (!dedup.ok) return { ok: false, reason: dedup.reason }

  return { ok: true }
}

function isAdultOn(dob: Date | null | undefined, on: Date): boolean {
  if (!dob) return false
  const eighteenth = new Date(dob)
  eighteenth.setFullYear(eighteenth.getFullYear() + 18)
  return eighteenth.getTime() <= on.getTime()
}
