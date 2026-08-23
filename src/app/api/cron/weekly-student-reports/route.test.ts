/**
 * Tests for the weekly-student-reports cron route.
 *
 * Vercel Cron invokes GET with `Authorization: Bearer ${CRON_SECRET}`.
 * The route was historically POST-only (so the schedule 405ed forever);
 * these tests pin the GET + Bearer contract and the delegation to the
 * existing send logic. No kill switch is expected here: the digest goes
 * to the account holder and is gated on their own
 * PrivacySettings.marketingEnabled preference.
 *
 * They also pin the 2026-08 reliability fixes:
 *   • the body runs inside runCron('weekly-student-reports', ...) so
 *     failures and durations reach Sentry;
 *   • a WeeklyStudentDigest ledger row per (student, week) is checked
 *     before generating and written after a confirmed send, so a retry
 *     cannot re-send a digest that already went out;
 *   • a single student's prep or send failure is counted and reported but
 *     never aborts the batch;
 *   • a run where every send failed throws, so an outage is not reported
 *     as a 200.
 */

import { describe, it, expect, vi, beforeEach } from 'vitest'
import { NextRequest } from 'next/server'

// ─── Mocks ───────────────────────────────────────────────────────────────

type StudentRow = {
  id: string
  email: string
  firstName: string
  dateOfBirth: Date
  isMinor: boolean
  privacySettings: { aiOptOut: boolean; marketingEnabled: boolean } | null
}

type EssayRow = {
  id: string
  title: string | null
  subject: 'LANGUAGE' | 'LITERATURE'
  createdAt: Date
  aiFeedback: {
    overallScore: number
    grammarScore: number
    structureScore: number
    argumentScore: number
    vocabularyScore: number
  } | null
}

type LedgerRow = { studentId: string; weekStarting: Date }

const state: {
  students: StudentRow[]
  essaysByStudent: Record<string, EssayRow[]>
  /** Student ids whose essay query should throw (prep failure). */
  essayQueryFailures: Set<string>
  /** Recipient addresses whose send should throw (transport failure). */
  sendFailures: Set<string>
  digestLedger: LedgerRow[]
} = {
  students: [],
  essaysByStudent: {},
  essayQueryFailures: new Set(),
  sendFailures: new Set(),
  digestLedger: [],
}

// The ledger create enforces the real unique constraint on
// (student_id, week_starting) so a duplicate write surfaces the same way it
// would in Postgres.
const digestCreateSpy = vi.fn(async ({ data }: { data: LedgerRow }) => {
  const duplicate = state.digestLedger.some(
    (row) =>
      row.studentId === data.studentId &&
      row.weekStarting.getTime() === data.weekStarting.getTime(),
  )
  if (duplicate) {
    throw new Error('Unique constraint failed on the fields: (`student_id`,`week_starting`)')
  }
  state.digestLedger.push({ studentId: data.studentId, weekStarting: data.weekStarting })
  return { id: `wsd_${state.digestLedger.length}` }
})

const digestFindManySpy = vi.fn(
  async ({ where }: { where: { weekStarting: Date; studentId: { in: string[] } } }) => {
    return state.digestLedger
      .filter(
        (row) =>
          row.weekStarting.getTime() === where.weekStarting.getTime() &&
          where.studentId.in.includes(row.studentId),
      )
      .map((row) => ({ studentId: row.studentId }))
  },
)

vi.mock('@/lib/prisma', () => ({
  prisma: {
    user: {
      findMany: vi.fn(async () => state.students),
    },
    essay: {
      findMany: vi.fn(async ({ where }: { where: { userId: string } }) => {
        if (state.essayQueryFailures.has(where.userId)) {
          throw new Error(`essay query exploded for ${where.userId}`)
        }
        return state.essaysByStudent[where.userId] ?? []
      }),
    },
    weeklyStudentDigest: {
      findMany: digestFindManySpy,
      create: digestCreateSpy,
    },
  },
}))

const sendViaResendMock = vi.fn(async (opts: { to: string }) => {
  if (state.sendFailures.has(opts.to)) {
    // Thrown, not returned: a rejecting send used to reject the batch's
    // Promise.all and abort the entire run.
    throw new Error(`resend transport failure for ${opts.to}`)
  }
  return { sent: true as const, messageId: 'm_1' }
})
vi.mock('@/lib/email/resend', () => ({
  sendViaResend: (...args: unknown[]) => sendViaResendMock(...(args as [{ to: string }])),
}))

vi.mock('@/lib/email/templates/weekly-student', () => ({
  renderWeeklyStudentEmail: vi.fn(async () => '<html>digest</html>'),
  renderWeeklyStudentText: vi.fn(() => 'digest'),
}))

// runCron wraps body() - mirror its envelope (success spread at the top
// level, 500 + ok:false on throw) so the tests exercise the real contract.
const runCronMock = vi.fn(
  async (_name: string, body: () => Promise<Record<string, unknown>>): Promise<Response> => {
    try {
      const result = await body()
      return Response.json({ ok: true, durationMs: 0, ...result })
    } catch (err) {
      return Response.json(
        { ok: false, error: err instanceof Error ? err.message : 'Unknown error', durationMs: 0 },
        { status: 500 },
      )
    }
  },
)
vi.mock('@/lib/cron/observability', () => ({
  runCron: (name: string, body: () => Promise<Record<string, unknown>>) => runCronMock(name, body),
}))

beforeEach(() => {
  process.env.CRON_SECRET = 'test-secret-abcdef'
  state.students = []
  state.essaysByStudent = {}
  state.essayQueryFailures = new Set()
  state.sendFailures = new Set()
  state.digestLedger = []
  sendViaResendMock.mockClear()
  digestCreateSpy.mockClear()
  digestFindManySpy.mockClear()
  runCronMock.mockClear()
})

// ─── Import AFTER mocks are registered ───────────────────────────────────

const { GET } = await import('./route')

// ─── Helpers ─────────────────────────────────────────────────────────────

type DigestBody = {
  ok?: boolean
  error?: string
  candidates?: number
  sent?: number
  skipped?: number
  alreadySent?: number
  failed?: number
  unrecorded?: number
  errors?: string[]
}

function buildGetRequest(authorization?: string): NextRequest {
  return new NextRequest('http://localhost/api/cron/weekly-student-reports', {
    method: 'GET',
    headers: authorization ? { authorization } : {},
  })
}

/** Mirrors weekStartingFor() in the route: start of the week being reported on. */
function currentWeekStarting(): Date {
  const weekEndsAt = new Date()
  weekEndsAt.setUTCHours(0, 0, 0, 0)
  weekEndsAt.setUTCDate(weekEndsAt.getUTCDate() - weekEndsAt.getUTCDay())
  return new Date(weekEndsAt.getTime() - 7 * 24 * 60 * 60 * 1000)
}

function seedStudentWithEssay(id: string): void {
  state.students.push({
    id,
    email: `student-${id}@example.com`,
    firstName: `Student${id}`,
    dateOfBirth: new Date('2008-01-01T00:00:00.000Z'),
    isMinor: false,
    privacySettings: { aiOptOut: false, marketingEnabled: true },
  })
  state.essaysByStudent[id] = [
    {
      id: `e-${id}-1`,
      title: 'Macbeth ambition essay',
      subject: 'LITERATURE',
      createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000),
      aiFeedback: {
        overallScore: 70,
        grammarScore: 72,
        structureScore: 68,
        argumentScore: 66,
        vocabularyScore: 74,
      },
    },
  ]
}

async function runDigest(): Promise<{ status: number; body: DigestBody }> {
  const res = await GET(buildGetRequest('Bearer test-secret-abcdef'))
  return { status: res.status, body: (await res.json()) as DigestBody }
}

// ─── Tests ───────────────────────────────────────────────────────────────

describe('cron /api/cron/weekly-student-reports', () => {
  it('GET rejects a missing or invalid Bearer token', async () => {
    const missing = await GET(buildGetRequest())
    expect(missing.status).toBe(401)

    const wrong = await GET(buildGetRequest('Bearer wrong-secret'))
    expect(wrong.status).toBe(401)

    // Auth failures must not be recorded as cron failures.
    expect(runCronMock).not.toHaveBeenCalled()
  })

  it('GET with a valid Bearer token runs the digest (Vercel Cron convention)', async () => {
    seedStudentWithEssay('s1')

    const { status, body } = await runDigest()
    expect(status).toBe(200)
    expect(body.ok).toBe(true)
    expect(body.sent).toBe(1)
    expect(body.errors).toEqual([])
    expect(sendViaResendMock).toHaveBeenCalledTimes(1)
  })

  it('runs inside the runCron observability wrapper under its own cron name', async () => {
    seedStudentWithEssay('s1')

    await runDigest()

    expect(runCronMock).toHaveBeenCalledTimes(1)
    expect(runCronMock.mock.calls[0][0]).toBe('weekly-student-reports')
  })

  it('GET with a valid Bearer token and no eligible students sends nothing', async () => {
    const { status, body } = await runDigest()
    expect(status).toBe(200)
    expect(body.sent).toBe(0)
    expect(sendViaResendMock).not.toHaveBeenCalled()
    expect(digestCreateSpy).not.toHaveBeenCalled()
  })

  it('records a ledger row for this week after a successful send', async () => {
    seedStudentWithEssay('s1')

    const { body } = await runDigest()
    expect(body.sent).toBe(1)
    expect(body.unrecorded).toBe(0)

    expect(digestCreateSpy).toHaveBeenCalledTimes(1)
    const written = digestCreateSpy.mock.calls[0][0].data
    expect(written.studentId).toBe('s1')
    expect(written.weekStarting.getTime()).toBe(currentWeekStarting().getTime())
    expect(state.digestLedger).toHaveLength(1)
  })

  it('skips a student who already has this week ledger row and never re-sends', async () => {
    seedStudentWithEssay('s1')
    seedStudentWithEssay('s2')
    // s1 was already delivered earlier in the week.
    state.digestLedger.push({ studentId: 's1', weekStarting: currentWeekStarting() })

    const { status, body } = await runDigest()
    expect(status).toBe(200)
    expect(body.alreadySent).toBe(1)
    expect(body.sent).toBe(1)

    expect(sendViaResendMock).toHaveBeenCalledTimes(1)
    expect(sendViaResendMock.mock.calls[0][0].to).toBe('student-s2@example.com')
  })

  it('is idempotent across re-invocations - a second run sends nothing', async () => {
    seedStudentWithEssay('s1')

    const first = await runDigest()
    expect(first.body.sent).toBe(1)

    sendViaResendMock.mockClear()

    // Manual retry / Vercel cron retry / duplicated schedule.
    const second = await runDigest()
    expect(second.status).toBe(200)
    expect(second.body.sent).toBe(0)
    expect(second.body.alreadySent).toBe(1)
    expect(sendViaResendMock).not.toHaveBeenCalled()
  })

  it('survives a single-student send failure - the rest of the batch still goes out', async () => {
    seedStudentWithEssay('s1')
    seedStudentWithEssay('s2')
    seedStudentWithEssay('s3')
    state.sendFailures.add('student-s2@example.com')

    const { status, body } = await runDigest()
    expect(status).toBe(200)
    expect(body.ok).toBe(true)
    expect(body.sent).toBe(2)
    expect(body.failed).toBe(1)
    expect(body.errors).toHaveLength(1)
    expect(body.errors?.[0]).toContain('s2')

    // The failed student gets no ledger row, so the next run retries them.
    expect(state.digestLedger.map((r) => r.studentId).sort()).toEqual(['s1', 's3'])
  })

  it('survives a single-student prep failure - the rest of the batch still goes out', async () => {
    seedStudentWithEssay('s1')
    seedStudentWithEssay('s2')
    state.essayQueryFailures.add('s2')

    const { status, body } = await runDigest()
    expect(status).toBe(200)
    expect(body.sent).toBe(1)
    expect(body.failed).toBe(1)
    expect(body.errors?.[0]).toContain('prep s2')
    expect(state.digestLedger.map((r) => r.studentId)).toEqual(['s1'])
  })

  it('escalates a total delivery failure so it is not reported as success', async () => {
    seedStudentWithEssay('s1')
    seedStudentWithEssay('s2')
    state.sendFailures.add('student-s1@example.com')
    state.sendFailures.add('student-s2@example.com')

    const { status, body } = await runDigest()
    expect(status).toBe(500)
    expect(body.ok).toBe(false)
    expect(body.error).toContain('all 2 student digest sends failed')
    expect(state.digestLedger).toHaveLength(0)
  })
})
