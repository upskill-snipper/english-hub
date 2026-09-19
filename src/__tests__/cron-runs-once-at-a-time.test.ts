import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'

/**
 * The run lock (REL-8, 19 September 2026).
 *
 * WHY THIS IS NOT AN ADVISORY LOCK. The proposal was
 * `pg_try_advisory_xact_lock` through `prisma.$queryRaw`. Measured against
 * production on 19 September, the SECOND call for the same key returns true -
 * a bare `$queryRaw` is its own implicit transaction, so the transaction-scoped
 * lock dies the instant the statement returns. That guard would have answered
 * "lock acquired" to every concurrent run for ever while reporting that
 * overlapping crons were now impossible. The session-scoped variant is worse:
 * `DATABASE_URL` is pgBouncer on 6543 in transaction pooling mode, so lock and
 * unlock can land on different backends and the job wedges shut permanently.
 *
 * The lease-row version was verified against production the same day:
 * sequential claims give true then false, two claims inside concurrent open
 * transactions give true then false, a release lets the next claim through,
 * and an expired lease lets a crashed run's successor through.
 *
 * WHAT THESE TESTS COVER. The decisions that live in TypeScript: that a
 * contended run declines rather than fails, that an unreachable lock is a
 * failure rather than a skip, and that the lease is released on both paths.
 * They mock the database, which is the limitation this repository keeps
 * tripping over, so the SQL-level guarantees above were measured rather than
 * asserted here.
 */

const rpc = vi.fn()
vi.mock('@/lib/supabase/server', () => ({
  createServiceRoleClient: () => ({ rpc }),
}))

const captureException = vi.fn()
const captureMessage = vi.fn()
vi.mock('@sentry/nextjs', () => ({
  captureException: (...a: unknown[]) => captureException(...a),
  captureMessage: (...a: unknown[]) => captureMessage(...a),
  addBreadcrumb: vi.fn(),
}))

beforeEach(() => {
  rpc.mockReset()
  captureException.mockReset()
  captureMessage.mockReset()
  vi.spyOn(console, 'info').mockImplementation(() => {})
  vi.spyOn(console, 'warn').mockImplementation(() => {})
  vi.spyOn(console, 'error').mockImplementation(() => {})
})

afterEach(() => {
  vi.restoreAllMocks()
})

/** Answer `claim_cron_lock` with `claimed`, and accept any release. */
function lockAnswers(claimed: boolean | { error: string }) {
  rpc.mockImplementation(async (fn: string) => {
    if (fn === 'claim_cron_lock') {
      if (typeof claimed === 'object') return { data: null, error: { message: claimed.error } }
      return { data: claimed, error: null }
    }
    return { data: null, error: null }
  })
}

describe('a run that gets the lock', () => {
  it('runs the body and reports the result', async () => {
    lockAnswers(true)
    const { runCron } = await import('@/lib/cron/observability')
    const body = vi.fn().mockResolvedValue({ deleted: 3 })

    const res = await runCron('demo', body)
    const json = (await res.json()) as Record<string, unknown>

    expect(body).toHaveBeenCalledOnce()
    expect(res.status).toBe(200)
    expect(json.ok).toBe(true)
    expect(json.deleted).toBe(3)
  })

  it('gives the lease back afterwards', async () => {
    lockAnswers(true)
    const { runCron } = await import('@/lib/cron/observability')
    await runCron('demo', async () => ({}))
    expect(rpc).toHaveBeenCalledWith('release_cron_lock', { p_name: 'demo' })
  })

  it('gives the lease back even when the body throws', async () => {
    // Otherwise a failing nightly job holds its own lease and the next run
    // skips - one failure silently becomes two.
    lockAnswers(true)
    const { runCron } = await import('@/lib/cron/observability')
    const res = await runCron('demo', async () => {
      throw new Error('boom')
    })
    expect(res.status).toBe(500)
    expect(rpc).toHaveBeenCalledWith('release_cron_lock', { p_name: 'demo' })
    expect(captureException).toHaveBeenCalled()
  })
})

describe('a run that finds the lock held', () => {
  it('declines rather than failing', async () => {
    // 200, not 500. It did not break; it correctly did nothing.
    lockAnswers(false)
    const { runCron } = await import('@/lib/cron/observability')
    const body = vi.fn()

    const res = await runCron('demo', body)
    const json = (await res.json()) as Record<string, unknown>

    expect(body).not.toHaveBeenCalled()
    expect(res.status).toBe(200)
    expect(json.skipped).toBe('already-running')
  })

  it('says so somewhere countable', async () => {
    // A weekly job that skips every week has stopped running. Without a
    // signal that is exactly as visible as not being scheduled at all.
    lockAnswers(false)
    const { runCron } = await import('@/lib/cron/observability')
    await runCron('demo', async () => ({}))
    expect(captureMessage).toHaveBeenCalled()
    const [message, options] = captureMessage.mock.calls[0] as [string, { level: string }]
    expect(message).toContain('demo')
    expect(options.level).toBe('warning')
  })

  it('does not release a lease it never held', async () => {
    // Releasing here would hand the lock away from the run that owns it.
    lockAnswers(false)
    const { runCron } = await import('@/lib/cron/observability')
    await runCron('demo', async () => ({}))
    expect(rpc).not.toHaveBeenCalledWith('release_cron_lock', expect.anything())
  })
})

describe('a lock that cannot be reached at all', () => {
  it('fails, and is not mistaken for a lock that is held', async () => {
    // THE ASSERTION THIS FILE EXISTS FOR. If the table were dropped, or the
    // grant revoked, or the database unreachable, a version that treated the
    // error as "someone else is running" would silently stop every cron in
    // the product and report 200 for ever.
    lockAnswers({ error: 'relation "cron_runs" does not exist' })
    const { runCron } = await import('@/lib/cron/observability')
    const body = vi.fn()

    const res = await runCron('demo', body)
    const json = (await res.json()) as Record<string, unknown>

    expect(body).not.toHaveBeenCalled()
    expect(res.status).toBe(500)
    expect(json.ok).toBe(false)
    expect(json.skipped).toBeUndefined()
    expect(json.phase).toBe('lock')
    expect(captureException).toHaveBeenCalled()
  })

  it('treats a non-boolean answer as a fault too', async () => {
    // `.rpc()` returning null with no error would otherwise be falsy, and a
    // falsy value is indistinguishable from "held" unless it is checked.
    rpc.mockResolvedValue({ data: null, error: null })
    const { runCron } = await import('@/lib/cron/observability')
    const res = await runCron('demo', vi.fn())
    expect(res.status).toBe(500)
  })
})

describe('the lock name', () => {
  it('defaults to the cron name', async () => {
    lockAnswers(true)
    const { runCron } = await import('@/lib/cron/observability')
    await runCron('demo', async () => ({}))
    expect(rpc).toHaveBeenCalledWith('claim_cron_lock', {
      p_name: 'demo',
      p_lease_seconds: expect.any(Number),
    })
  })

  it('can be shared, which is what protects the two deletion jobs', async () => {
    lockAnswers(true)
    const { runCron } = await import('@/lib/cron/observability')
    const { CHILD_DELETION_LOCK } = await import('@/lib/cron/lock')
    await runCron('dormancy-purge', async () => ({}), { lockName: CHILD_DELETION_LOCK })
    expect(rpc).toHaveBeenCalledWith('claim_cron_lock', {
      p_name: CHILD_DELETION_LOCK,
      p_lease_seconds: expect.any(Number),
    })
  })
})

describe('the lease length', () => {
  it('outlasts any function timeout and falls short of the shortest interval', async () => {
    const { LOCK_LEASE_SECONDS } = await import('@/lib/cron/lock')
    // vercel.json caps API functions at 60s; three routes declare up to 300.
    expect(LOCK_LEASE_SECONDS).toBeGreaterThan(300)
    // The shortest schedule here is every 12 hours. A lease that outlived the
    // gap to the next run would turn one crashed run into a dead job.
    expect(LOCK_LEASE_SECONDS).toBeLessThan(12 * 60 * 60)
  })
})

describe('the migration that backs all of this', () => {
  const SQL = readFileSync(
    join(process.cwd(), 'supabase/migrations/20260919_cron_run_locks.sql'),
    'utf8',
  )

  it('claims the lease in a single statement', () => {
    // Read-then-write would have a window between the read and the write in
    // which both callers believe the lock is free.
    expect(SQL).toMatch(/INSERT INTO public\.cron_runs[\s\S]*?ON CONFLICT \(name\) DO UPDATE/)
    expect(SQL).toMatch(/WHERE c\.locked_until < now\(\)/)
  })

  it('leaves the lease expiring on its own', () => {
    // So a process killed mid-run cannot hold the job shut for ever.
    expect(SQL).toMatch(/make_interval\(secs => p_lease_seconds\)/)
  })

  it('does not hand the functions to anon', () => {
    expect(SQL).toMatch(/REVOKE ALL ON FUNCTION public\.claim_cron_lock/)
    expect(SQL).toMatch(
      /GRANT EXECUTE ON FUNCTION public\.claim_cron_lock\(text, integer\) TO service_role/,
    )
  })

  it('turns row-level security on for the table', () => {
    expect(SQL).toMatch(/ALTER TABLE public\.cron_runs ENABLE ROW LEVEL SECURITY/)
  })
})
