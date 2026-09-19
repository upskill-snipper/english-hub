/**
 * A lock that stops the same scheduled job running twice at once.
 *
 * WHY (19 September 2026, REL-8). Vercel's cron documentation says a second
 * instance can start while the first is still running, and that duplicate
 * invocations happen. Two of the scheduled jobs here delete children's
 * accounts - `data-retention` runs the Children's Code dormancy pass, and
 * `dormancy-purge` runs `purgeDormantAccount`, which the other one does not
 * wrap in a transaction. Two of those overlapping is a half-deleted child
 * account, which is the worst outcome available to this codebase.
 *
 * WHY NOT `pg_try_advisory_xact_lock`, WHICH IS WHAT WAS PROPOSED. Measured
 * against production on 19 September: called through a bare `$queryRaw` it
 * returns TRUE on the second call for the same key, because the statement is
 * its own implicit transaction and the transaction-scoped lock dies with it.
 * It would have reported "lock acquired" to every concurrent run for ever. The
 * session-scoped variant is worse, not better: `DATABASE_URL` is pgBouncer on
 * 6543 in transaction pooling mode, so the lock and its unlock can land on
 * different backends and the job wedges shut permanently.
 *
 * So the lease lives in a row. See `supabase/migrations/20260919_cron_run_locks.sql`
 * for the claim statement and why it is atomic.
 */

import { createServiceRoleClient } from '@/lib/supabase/server'

/**
 * How long a claimed lease lasts.
 *
 * It has to be longer than any run can possibly take and shorter than the gap
 * to the next scheduled run, so that a process killed mid-flight cannot hold
 * the job shut. `vercel.json` caps API functions at 60 seconds and three
 * routes declare `maxDuration` up to 300; which of those wins is an open
 * question for the Vercel dashboard (REL-8, Calum's part). Fifteen minutes is
 * comfortably above either and far below the shortest cron interval here,
 * which is 12 hours, so the answer does not change the safety of this number.
 */
export const LOCK_LEASE_SECONDS = 15 * 60

/**
 * Take the lease for `lockName`.
 *
 * Returns `false` when another run holds it. THROWS when the database cannot
 * be reached or the function is missing, and that is deliberate: a lock whose
 * storage is broken must not be indistinguishable from a lock that is held.
 * Swallowing the error here would turn "the lock table was dropped" into
 * "another run is in progress", permanently and silently, which is the exact
 * failure shape this repository keeps finding.
 */
export async function claimCronLock(
  lockName: string,
  leaseSeconds: number = LOCK_LEASE_SECONDS,
): Promise<boolean> {
  const supabase = createServiceRoleClient()
  const { data, error } = await supabase.rpc('claim_cron_lock', {
    p_name: lockName,
    p_lease_seconds: leaseSeconds,
  })

  if (error) {
    throw new Error(`could not claim the run lock for "${lockName}": ${error.message}`)
  }
  if (typeof data !== 'boolean') {
    throw new Error(
      `claim_cron_lock("${lockName}") returned ${JSON.stringify(data)} rather than a boolean`,
    )
  }
  return data
}

/**
 * Give the lease back.
 *
 * Never throws. A release that fails costs at most one lease period of delay
 * for the next run, whereas a throw here would mask the result of the job that
 * has just finished - including its failure. The failure is logged so a
 * release that is failing every night is still visible.
 */
export async function releaseCronLock(lockName: string): Promise<void> {
  try {
    const supabase = createServiceRoleClient()
    const { error } = await supabase.rpc('release_cron_lock', { p_name: lockName })
    if (error) {
      console.error(`[cron-lock] could not release "${lockName}": ${error.message}`)
    }
  } catch (err) {
    console.error(`[cron-lock] could not release "${lockName}":`, err)
  }
}

/**
 * Jobs that must not run at the same time as each other, not merely not twice.
 *
 * The per-name lease handles Vercel delivering the SAME job twice. It does
 * nothing about two DIFFERENT jobs colliding, and `data-retention` and
 * `dormancy-purge` both delete dormant children's accounts. Sharing one lock
 * name is what actually makes a partial purge impossible; moving their
 * schedules apart (which `vercel.json` now also does) only narrows the window.
 *
 * The cost is real and is the right way round: if the two do collide, the
 * weekly purge is delayed by a week and `cron_runs.skip_count` counts it. The
 * alternative is a child account half-deleted by two writers.
 */
export const CHILD_DELETION_LOCK = 'child-account-deletion'
