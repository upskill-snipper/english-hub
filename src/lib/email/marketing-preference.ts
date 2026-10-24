// ─── Marketing email preference: one read, one write ─────────────────────────
//
// WHY THIS EXISTS (19 September 2026, RET-7)
// The product kept a person's marketing-email preference in THREE places that
// never spoke to each other:
//
//   1. `PrivacySettings.marketingEnabled` (Prisma) - the ONLY one any send path
//      has ever gated on. Written by the toggle at /dashboard/privacy.
//   2. `profiles.marketing_opt_in` (Supabase) - written at signup, read by
//      nothing. No cron, no email path, no API.
//   3. The `Consent` ledger's MARKETING purpose - grantable at
//      /dashboard/consent, mirrored into neither of the others.
//
// And /dashboard/settings, where a user would look first, has no toggle at all:
// it tells them their email choices "are managed in one place: the consent
// centre" - which is store 3, the one no sender reads. So a user could withdraw
// marketing consent in the place the product told them to, and keep receiving
// marketing email, correctly, forever.
//
// ── WHY THE READ IS AN `OR` AND NOT A MIGRATION ─────────────────────────────
// The obvious fix is to make `profiles.marketing_opt_in` the single source of
// truth. That would have been a serious mistake, and it is worth writing down
// why so nobody redoes it:
//
// `marketing_opt_in` is `NOT NULL DEFAULT FALSE`, the signup trigger inserts a
// hardcoded literal `FALSE` for adults and minors alike, nothing in the product
// writes `true` to it ever, and there has been no backfill. **It is FALSE on
// 100% of rows.** Switching the live weekly-student-reports cron to read it
// would have taken the one lifecycle cron that is actually switched on to a
// zero-send audience, and silently discarded the consent of every user who had
// opted in through the privacy centre.
//
// So the read is the UNION of both stores, and the legacy arm stays until
// somebody verifies a backfill against production. That work needs the owner
// and real data; this does not, and the dead unsubscribe link cannot wait for
// it.
//
// The WRITE goes to both, so an unsubscribe actually silences the store that
// the senders read - which is the entire point of the exercise.
//
// ── STORE 3 IS NOW HONOURED FOR WITHDRAWAL (24 October 2026) ────────────────
// A MARKETING withdrawal in the consent centre still changed neither store
// above, so isMarketingAllowed answered yes to someone who had just been told
// their consent was withdrawn. It now refuses while the ledger's latest
// MARKETING row is a withdrawal, and DELETE /api/consent calls
// optOutOfMarketing so all three stores agree from that moment. A ledger
// GRANT is still not read as permission: switching marketing on stays the
// /dashboard/privacy toggle's job, and old grants are not mirrored here.
// ────────────────────────────────────────────────────────────────────────────

import type { ConsentType } from '@prisma/client'
import { prisma } from '@/lib/prisma'
import { createServiceRoleClient } from '@/lib/supabase/server'
import { tryPrismaUserId } from '@/lib/identity'

/**
 * May we send marketing email to this Supabase user?
 *
 * TRUE only if one of the two stores says so AND the consent centre's ledger
 * does not record a withdrawal as the latest MARKETING decision. A missing
 * row, an unresolvable identity or a failed read all answer FALSE - marketing
 * email is the one category where "we are not sure" must mean "do not send".
 *
 * THE LEDGER LEG (added 24 October 2026). Withdrawing MARKETING at
 * /dashboard/consent writes a Consent row (granted false, withdrawnAt set)
 * and, until that day, changed neither store this function read. So an adult
 * who switched marketing on at /dashboard/privacy and then withdrew it in the
 * consent centre, and was told it had been withdrawn, would still have
 * received the day-14 and day-30 trial emails with the price. DELETE
 * /api/consent now also writes false to both stores, and this reads the
 * ledger as well, which covers every withdrawal made before that change.
 *
 * One consequence, chosen on purpose: the /dashboard/privacy switch writes no
 * ledger row, so someone who withdrew in the consent centre and later switched
 * marketing on at /dashboard/privacy is still refused until they grant it in
 * the consent centre again, where the grant is recorded. A missed email is
 * recoverable; marketing sent over a recorded objection (UK GDPR Art 21(3),
 * PECR reg 22) is not.
 */
export async function isMarketingAllowed(supabaseUserId: string | null): Promise<boolean> {
  if (!supabaseUserId) return false

  // Store 2: profiles.marketing_opt_in.
  let newStore = false
  try {
    const svc = createServiceRoleClient()
    const { data } = await svc
      .from('profiles')
      .select('marketing_opt_in')
      .eq('id', supabaseUserId)
      .maybeSingle()
    newStore = (data as { marketing_opt_in?: boolean } | null)?.marketing_opt_in === true
  } catch {
    newStore = false
  }

  // Both the legacy store and the ledger are keyed on the Prisma id. Without
  // it neither can be read, and an unread ledger may hold a withdrawal.
  const prismaUserId = await tryPrismaUserId(supabaseUserId)
  if (!prismaUserId) return false

  // Store 1: PrivacySettings.marketingEnabled. Still the real one today.
  let legacyStore = false
  if (!newStore) {
    try {
      const row = await prisma.privacySettings.findUnique({
        where: { userId: prismaUserId },
        select: { marketingEnabled: true },
      })
      legacyStore = row?.marketingEnabled === true
    } catch {
      legacyStore = false
    }
  }
  if (!newStore && !legacyStore) return false

  return !(await marketingWithdrawnInLedger(prismaUserId))
}

/**
 * Is the latest MARKETING row in the Consent ledger a withdrawal? No row at
 * all is not a withdrawal: most consent to marketing is given at
 * /dashboard/privacy, which writes no ledger row. A failed read answers true,
 * so the caller refuses.
 */
async function marketingWithdrawnInLedger(prismaUserId: string): Promise<boolean> {
  try {
    const latest = await prisma.consent.findFirst({
      where: { userId: prismaUserId, consentType: 'MARKETING' as ConsentType },
      orderBy: [{ grantedAt: 'desc' }, { id: 'desc' }],
      select: { granted: true, withdrawnAt: true },
    })
    if (!latest) return false
    return latest.granted !== true || latest.withdrawnAt !== null
  } catch (err) {
    console.error(
      '[marketing-preference] MARKETING_LEDGER_READ_FAILED, refusing marketing:',
      err instanceof Error ? err.message : String(err),
    )
    return true
  }
}

export interface MarketingOptOutResult {
  /** True when at least one store was updated. */
  changed: boolean
  profilesUpdated: boolean
  privacySettingsUpdated: boolean
}

/**
 * Turn marketing email OFF for this user, in every store that governs it.
 *
 * Deliberately one-directional. This module never turns marketing ON: an
 * opt-IN is a consent event that belongs in the consent centre with its audit
 * trail, and - since many of these accounts belong to children - is not
 * something an emailed link should be able to do. A token that could only ever
 * silence email is a token that cannot be abused into subscribing anybody.
 *
 * Both writes are attempted independently: a failure in one must not leave the
 * other store still sending.
 */
export async function optOutOfMarketing(supabaseUserId: string): Promise<MarketingOptOutResult> {
  let profilesUpdated = false
  let privacySettingsUpdated = false

  try {
    const svc = createServiceRoleClient()
    const { error } = await svc
      .from('profiles')
      .update({ marketing_opt_in: false })
      .eq('id', supabaseUserId)
    profilesUpdated = !error
  } catch (err) {
    console.error('[marketing-preference] profiles opt-out failed', err)
  }

  try {
    const prismaUserId = await tryPrismaUserId(supabaseUserId)
    if (prismaUserId) {
      await prisma.privacySettings.upsert({
        where: { userId: prismaUserId },
        update: { marketingEnabled: false },
        // An account with no PrivacySettings row has never opted in, but
        // creating the row makes the opt-out durable rather than implicit.
        create: { userId: prismaUserId, marketingEnabled: false },
      })
      privacySettingsUpdated = true
    }
  } catch (err) {
    console.error('[marketing-preference] privacySettings opt-out failed', err)
  }

  return {
    changed: profilesUpdated || privacySettingsUpdated,
    profilesUpdated,
    privacySettingsUpdated,
  }
}
