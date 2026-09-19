import * as Sentry from '@sentry/nextjs'
import { claimCronLock, releaseCronLock, LOCK_LEASE_SECONDS } from './lock'

/**
 * Cron observability helper.
 *
 * Every `/api/cron/*` route does three things consistently wrong:
 *   1. Fails silently on unexpected errors (returns 500 or swallows into a
 *      response.errors[] that Vercel sees as 200).
 *   2. Never logs duration, so slow crons are invisible until Vercel's
 *      function timeout hits.
 *   3. Never emits to Sentry - the server config only scrubs events, not
 *      creates them; nothing calls `captureException` directly.
 *
 * This helper closes those gaps in one place. Wrap a cron's main body:
 *
 *   return runCron('expire-invites', async () => {
 *     const result = await admin.from(...).update(...)
 *     return { expired: result.data?.length ?? 0 }
 *   })
 *
 * On success: returns `200` with `{ ...result, durationMs }`.
 * On failure: captures to Sentry with tag `cron: <name>`, logs, and
 *             returns `500`, which is visible in the Vercel log and in
 *             Sentry. NOTE: Vercel cron jobs are NOT retried on failure -
 *             the next attempt is the next scheduled run (REL-6).
 *
 * It also takes a run lock before entering the body (REL-8, 19 September
 * 2026). Vercel can start a second instance of a schedule while the first is
 * still running; two of these jobs delete children's accounts and one of them
 * does not use a transaction. A contended run answers `200` with
 * `skipped: 'already-running'` - it did not fail, it declined - while a lock
 * that cannot be reached at all is a `500`, because an unreachable lock must
 * never look like a held one. See `./lock`.
 */
export async function runCron<T extends Record<string, unknown>>(
  name: string,
  body: () => Promise<T>,
  options: { lockName?: string; leaseSeconds?: number } = {},
): Promise<Response> {
  const started = Date.now()
  const lockName = options.lockName ?? name
  const leaseSeconds = options.leaseSeconds ?? LOCK_LEASE_SECONDS

  let held = false
  try {
    held = await claimCronLock(lockName, leaseSeconds)
  } catch (err) {
    // Not a skip. The storage behind the lock is broken, which is a fault in
    // its own right and has to be reported as one.
    Sentry.captureException(err, { tags: { cron: name, phase: 'lock' } })
    console.error(`[cron:${name}] LOCK UNAVAILABLE`, { lockName, error: err })
    return Response.json(
      {
        ok: false,
        error: err instanceof Error ? err.message : 'Unknown error',
        phase: 'lock',
        durationMs: Date.now() - started,
      },
      { status: 500 },
    )
  }

  if (!held) {
    // A warning rather than an exception: one skip is the lock doing its job,
    // but a weekly job that skips every week has silently stopped running, and
    // only a countable signal makes that visible. `cron_runs.skip_count` holds
    // the running total.
    Sentry.captureMessage(`cron ${name} skipped: ${lockName} already held`, {
      level: 'warning',
      tags: { cron: name },
    })
    console.warn(`[cron:${name}] skipped - "${lockName}" is already held by a running instance`)
    return Response.json({
      ok: true,
      skipped: 'already-running',
      lock: lockName,
      durationMs: Date.now() - started,
    })
  }

  try {
    const result = await body()
    const durationMs = Date.now() - started
    // Breadcrumb only on success - individual cron results are high-volume.
    Sentry.addBreadcrumb({
      category: 'cron',
      message: `${name} ok`,
      level: 'info',
      data: { durationMs, ...result },
    })
    console.info(`[cron:${name}] ok`, { durationMs, ...result })
    return Response.json({ ok: true, durationMs, ...result })
  } catch (err) {
    const durationMs = Date.now() - started
    Sentry.captureException(err, {
      tags: { cron: name },
      extra: { durationMs },
    })
    console.error(`[cron:${name}] FAILED`, { durationMs, error: err })
    // 500 so the failure is visible in the Vercel log and in Sentry.
    // It is NOT retried: Vercel cron jobs fire on schedule and a failed run
    // is simply a missed run until the next one (REL-6, 19 September 2026).
    return Response.json(
      {
        ok: false,
        error: err instanceof Error ? err.message : 'Unknown error',
        durationMs,
      },
      { status: 500 },
    )
  } finally {
    // Both paths, so a failed run does not hold the lease until it expires.
    await releaseCronLock(lockName)
  }
}
