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
// ────────────────────────────────────────────────────────────────────────────

import { prisma } from '@/lib/prisma'
import { createServiceRoleClient } from '@/lib/supabase/server'
import { tryPrismaUserId } from '@/lib/identity'

/**
 * May we send marketing email to this Supabase user?
 *
 * TRUE only if one of the two stores says so. A missing row, an unresolvable
 * identity or a failed read all answer FALSE - marketing email is the one
 * category where "we are not sure" must mean "do not send".
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
  if (newStore) return true

  // Store 1: PrivacySettings.marketingEnabled. Still the real one today.
  try {
    const prismaUserId = await tryPrismaUserId(supabaseUserId)
    if (!prismaUserId) return false
    const row = await prisma.privacySettings.findUnique({
      where: { userId: prismaUserId },
      select: { marketingEnabled: true },
    })
    return row?.marketingEnabled === true
  } catch {
    return false
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
