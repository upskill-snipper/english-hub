import * as Sentry from '@sentry/nextjs'

/**
 * Cron observability helper.
 *
 * Every `/api/cron/*` route does three things consistently wrong:
 *   1. Fails silently on unexpected errors (returns 500 or swallows into a
 *      response.errors[] that Vercel sees as 200).
 *   2. Never logs duration, so slow crons are invisible until Vercel's
 *      function timeout hits.
 *   3. Never emits to Sentry — the server config only scrubs events, not
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
 *             returns `500`. Vercel's cron retry will fire.
 */
export async function runCron<T extends Record<string, unknown>>(
  name: string,
  body: () => Promise<T>,
): Promise<Response> {
  const started = Date.now()
  try {
    const result = await body()
    const durationMs = Date.now() - started
    // Breadcrumb only on success — individual cron results are high-volume.
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
    // 500 so Vercel retries per its cron policy.
    return Response.json(
      {
        ok: false,
        error: err instanceof Error ? err.message : 'Unknown error',
        durationMs,
      },
      { status: 500 },
    )
  }
}
