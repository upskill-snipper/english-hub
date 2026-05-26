/**
 * Shared dedup utilities for the Trustpilot invite pipeline. Both the BCC
 * path (server-side `sendEmail`) and the InviteJS path (via
 * `/api/trustpilot/fired-check`) import from here so the rules stay in one
 * place.
 *
 * Rules:
 *   • 12 months per (user, trigger) - a user can only be invited against a
 *     given trigger once a year.
 *   • 90 days global - a user should never receive more than one Trustpilot
 *     invite in any 90-day window, regardless of trigger.
 *
 * A row in `trustpilot_invite` with status in ('sent', 'reserved') counts
 * against both windows; 'skipped' and 'failed' rows do not.
 */

import { createServiceRoleClient } from '@/lib/supabase/server'
import type { TrustpilotBccTrigger } from './trigger-names'

export const TWELVE_MONTHS_MS = 365 * 24 * 60 * 60 * 1000
export const NINETY_DAYS_MS = 90 * 24 * 60 * 60 * 1000

export type DedupReason = 'duplicate_trigger_12m' | 'global_90d_window'

export type DedupCheck = { ok: true } | { ok: false; reason: DedupReason }

type MinimalClient = ReturnType<typeof createServiceRoleClient>

/**
 * Check both dedup windows for a user + trigger. `now` is injectable for tests.
 */
export async function checkDedup(args: {
  userId: string
  trigger: TrustpilotBccTrigger
  now?: Date
  client?: MinimalClient
}): Promise<DedupCheck> {
  const now = args.now ?? new Date()
  const client = args.client ?? createServiceRoleClient()

  const twelveMonthsAgo = new Date(now.getTime() - TWELVE_MONTHS_MS).toISOString()
  const ninetyDaysAgo = new Date(now.getTime() - NINETY_DAYS_MS).toISOString()

  // 12-month per-trigger check.
  const { data: perTrigger } = await client
    .from('trustpilot_invite')
    .select('id')
    .eq('user_id', args.userId)
    .eq('trigger', args.trigger)
    .in('status', ['sent', 'reserved'])
    .gte('sent_at', twelveMonthsAgo)
    .limit(1)

  if (perTrigger && perTrigger.length > 0) {
    return { ok: false, reason: 'duplicate_trigger_12m' }
  }

  // 90-day global window.
  const { data: globalWindow } = await client
    .from('trustpilot_invite')
    .select('id')
    .eq('user_id', args.userId)
    .in('status', ['sent', 'reserved'])
    .gte('sent_at', ninetyDaysAgo)
    .limit(1)

  if (globalWindow && globalWindow.length > 0) {
    return { ok: false, reason: 'global_90d_window' }
  }

  return { ok: true }
}

/**
 * Atomic "check and reserve" - inserts a `reserved` row if and only if dedup
 * passes. Uses the UNIQUE(user_id, trigger) constraint for atomicity; a
 * concurrent second caller will get 23505 and we treat that as
 * `duplicate_trigger_12m`. Returns the reserved row id on success so the
 * caller can update it to `sent` / `failed` / `skipped` afterwards.
 */
export async function reserveInvite(args: {
  userId: string
  trigger: TrustpilotBccTrigger
  now?: Date
  client?: MinimalClient
}): Promise<{ ok: true; id: string } | { ok: false; reason: DedupReason }> {
  const client = args.client ?? createServiceRoleClient()
  const dedup = await checkDedup({ ...args, client })
  if (!dedup.ok) return dedup

  const { data, error } = await client
    .from('trustpilot_invite')
    .insert({
      user_id: args.userId,
      trigger: args.trigger,
      status: 'reserved',
    })
    .select('id')
    .single()

  if (error) {
    // 23505 - unique_violation. A concurrent caller beat us.
    if (error.code === '23505') {
      return { ok: false, reason: 'duplicate_trigger_12m' }
    }
    // Treat any other DB error defensively as "already reserved" rather than
    // fire twice. Logged elsewhere.
    return { ok: false, reason: 'duplicate_trigger_12m' }
  }

  return { ok: true, id: data.id }
}
