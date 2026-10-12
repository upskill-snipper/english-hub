/**
 * Unit tests for POST /api/school/bulk-upload/commit.
 *
 * Four binding behaviours under test:
 *   1. RBAC - a signed-in user who is NOT a school admin receives 403.
 *   2. Idempotency - the same idempotencyKey submitted twice returns the
 *      cached response and does not create users a second time.
 *   3. Transactional rollback - a Prisma failure mid-batch reverts every
 *      User create AND every auth user created in the same request.
 *   4. Welcome emails wait for the commit. Until 11 October 2026 each was
 *      sent from inside the transaction, so a rollback left pupils holding
 *      passwords for accounts that had just been deleted.
 *   5. A real school fits the platform's limits (11 October 2026): no Supabase
 *      call inside the transaction, which has explicit options; accounts made
 *      a few at a time and revoked if they run out of time; emails in one
 *      batch; a failed attempt never replayed as success; an existing pupil
 *      linked to school_members by their Supabase id.
 *
 * Since 12 October 2026 the pipeline lives in src/lib/school/bulk-upload-commit.ts
 * (its own tests cover the member link's key, class places and the reporting);
 * these tests run it through the school's route. Table calls go to
 * FakeSupabase, which holds the live columns and unique keys, so the member
 * link, the staff check and the class places run as they would in production.
 */

import { describe, it, expect, vi, beforeEach } from 'vitest'
import { NextRequest } from 'next/server'

import { FakeSupabase } from '@/lib/school/__tests__/fake-supabase'

const SCHOOL_ID = '5c400000-0000-4000-8000-000000000001'

// ---------------------------------------------------------------------------
// Mocks
// ---------------------------------------------------------------------------

// Supabase auth: default to a signed-in user; tests flip to anon for the
// Unauthorized case.
let authUser: { id: string; email: string } | null = {
  id: 'supa-admin-1',
  email: 'admin@example.school.uk',
}

const getUserMock = vi.fn(async () => ({
  data: { user: authUser },
  error: null,
}))

vi.mock('@/lib/supabase/server', () => ({
  createServerSupabaseClient: () => ({
    auth: { getUser: getUserMock },
  }),
  createServiceRoleClient: () => serviceRoleClientMock,
}))

// verifySchoolMember: flip between admin / teacher / null based on the
// mocked user id. `memberSchoolId` lets a test be the site administrator,
// whose synthetic membership carries '__site_admin__' (src/lib/school-auth.ts).
let memberRole: 'admin' | 'teacher' | null = 'admin'
let memberSchoolId = SCHOOL_ID
vi.mock('@/lib/school-auth', () => ({
  verifySchoolMember: vi.fn(async (_userId: string, roles?: string[]) => {
    if (memberRole === null) return null
    if (roles && !roles.includes(memberRole)) return null
    return {
      id: 'member-1',
      user_id: 'supa-admin-1',
      school_id: memberSchoolId,
      role: memberRole,
      invite_status: 'accepted',
      schools: { id: memberSchoolId, name: 'Test Academy' },
    }
  }),
}))

// Rate limiter: permissive by default.
vi.mock('@/lib/rate-limit', () => ({
  rateLimit: vi.fn(async () => ({ success: true, resetAt: Date.now() + 60_000 })),
  getClientIp: vi.fn(() => '127.0.0.1'),
}))

// Email sink.
vi.mock('@/lib/email', () => ({
  sendEmail: vi.fn(async () => ({ success: true, messageId: 'm-1' })),
  sendEmailBatch: vi.fn(async (messages: unknown[]) => ({ sent: messages.length, failed: [] })),
}))

// Service role client - auth admin + supabase-table helpers.
const createdAuthUsers: Array<{ email: string; id: string }> = []
const deletedAuthUserIds: string[] = []
let fake = new FakeSupabase()
/** What the member link upserted, in call order. */
const memberUpserts = () =>
  fake.callsTo('school_members', 'upsert').map((c) => c.payload as Record<string, unknown>)
let authCreateUserShouldFail = false
// What the account calls saw: whether a transaction was open, how many ran at
// once, and a hook a test can use to move a fake clock on.
let insideTransaction = false
let createUserCalledInsideTransaction = false
let createUserInFlight = 0
let createUserMostInFlight = 0
let onCreateUser: (() => void) | null = null
const serviceRoleClientMock = {
  auth: {
    admin: {
      createUser: vi.fn(async ({ email }: { email: string }) => {
        if (insideTransaction) createUserCalledInsideTransaction = true
        onCreateUser?.()
        createUserInFlight += 1
        createUserMostInFlight = Math.max(createUserMostInFlight, createUserInFlight)
        await new Promise((resolve) => setTimeout(resolve, 0))
        createUserInFlight -= 1
        if (authCreateUserShouldFail) {
          return { data: null, error: { message: 'create failed' } }
        }
        const id = `authid-${createdAuthUsers.length + 1}`
        createdAuthUsers.push({ email, id })
        return { data: { user: { id, email } }, error: null }
      }),
      deleteUser: vi.fn(async (id: string) => {
        deletedAuthUserIds.push(id)
        return { data: null, error: null }
      }),
    },
  },
  from: (table: string) => fake.from(table),
}

// Prisma mock - in-memory state so idempotency and rollback can be asserted.
interface JobRow {
  id: string
  idempotencyKey: string
  adminUserId: string
  schoolId: string
  fileName: string
  rowCount: number
  successCount: number
  createdCount: number
  updatedCount: number
  skippedCount: number
  errorCount: number
  errorsJson: unknown
  status: string
  createdAt: Date
  completedAt: Date | null
}

let jobs: JobRow[] = []
let users: Array<{ id: string; email: string }> = []
let userCreateShouldFailOn: string | null = null

const prismaMock = {
  bulkUploadJob: {
    findUnique: vi.fn(
      async ({ where }: { where: { idempotencyKey?: string; id?: string } }) =>
        jobs.find(
          (j) =>
            (where.idempotencyKey !== undefined && j.idempotencyKey === where.idempotencyKey) ||
            (where.id !== undefined && j.id === where.id),
        ) ?? null,
    ),
    create: vi.fn(async ({ data }: { data: Partial<JobRow> }) => {
      const row: JobRow = {
        id: data.id ?? `job-${jobs.length + 1}`,
        idempotencyKey: data.idempotencyKey ?? '',
        adminUserId: data.adminUserId ?? '',
        schoolId: data.schoolId ?? '',
        fileName: data.fileName ?? '',
        rowCount: data.rowCount ?? 0,
        successCount: 0,
        createdCount: 0,
        updatedCount: 0,
        skippedCount: 0,
        errorCount: 0,
        errorsJson: null,
        status: data.status ?? 'pending',
        createdAt: new Date(),
        completedAt: null,
      }
      jobs.push(row)
      return row
    }),
    update: vi.fn(async ({ where, data }: { where: { id: string }; data: Partial<JobRow> }) => {
      const row = jobs.find((j) => j.id === where.id)
      if (row) Object.assign(row, data)
      return row as JobRow
    }),
  },
  user: {
    findMany: vi.fn(
      async () => [] as Array<{ id: string; email: string; supabaseUserId?: string | null }>,
    ),
    create: vi.fn(async ({ data }: { data: { email: string } }) => {
      if (userCreateShouldFailOn && data.email === userCreateShouldFailOn) {
        throw new Error('simulated Prisma failure')
      }
      const row = { id: `u-${users.length + 1}`, email: data.email }
      users.push(row)
      return row
    }),
    createMany: vi.fn(async ({ data }: { data: Array<{ email: string }> }) => {
      if (userCreateShouldFailOn && data.some((d) => d.email === userCreateShouldFailOn)) {
        throw new Error('simulated Prisma failure')
      }
      for (const d of data) users.push({ id: `u-${users.length + 1}`, email: d.email })
      return { count: data.length }
    }),
  },
  // Provide a real transaction runner that calls the callback with a tx
  // handle pointing at the same mocks, then rolls back on throw by wiping
  // any users it created during the callback.
  $transaction: vi.fn(async (cb: (tx: unknown) => Promise<unknown>, _options?: unknown) => {
    const snapshotUsers = users.slice()
    const snapshotJobs = jobs.map((j) => ({ ...j }))
    insideTransaction = true
    try {
      return await cb(prismaMock)
    } catch (e) {
      users = snapshotUsers
      jobs = snapshotJobs
      throw e
    } finally {
      insideTransaction = false
    }
  }),
}

// `vi.mock` is hoisted above the module-level const declarations, so we
// cannot close over `prismaMock` directly - it would be in the temporal
// dead zone when the route imports `@/lib/prisma` and the factory fires.
// A Proxy defers the lookup until a property is actually accessed, by
// which time the module-level constants have been initialised.
vi.mock('@/lib/prisma', () => ({
  prisma: new Proxy(
    {},
    {
      get: (_target, prop) => (prismaMock as Record<string | symbol, unknown>)[prop],
    },
  ),
}))

// Import the handler AFTER the mocks are registered.
import { POST, maxDuration } from './route'
import { sendEmail, sendEmailBatch } from '@/lib/email'

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function makeRequest(body: unknown): NextRequest {
  return new NextRequest('http://localhost/api/school/bulk-upload/commit', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(body),
  })
}

const baseRow = {
  row: 2,
  firstName: 'Alex',
  lastName: 'Morgan',
  email: 'alex@example.school.uk',
  yearGroup: 'Year 10',
  classCode: '10A',
}

function freshBody(overrides: Partial<{ idempotencyKey: string }> = {}) {
  return {
    fileName: 'students.csv',
    idempotencyKey: overrides.idempotencyKey ?? `idem-${randomKey()}`,
    rows: [
      { ...baseRow, row: 2 },
      { ...baseRow, row: 3, email: 'priya@example.school.uk', firstName: 'Priya' },
    ],
  }
}

function randomKey() {
  // Produce a 16-char base-36 suffix. `Math.random().toString(36)` can
  // return short strings when the underlying float has leading base-36
  // zeros (e.g. `0.4xyz`), which made the generated idempotency key
  // drop below the route's 16-char minimum and flip the tests to 422.
  // Zero-padding keeps the length invariant regardless of entropy.
  return Math.random().toString(36).slice(2).padEnd(16, '0').slice(0, 16)
}

// ---------------------------------------------------------------------------
// Test resets
// ---------------------------------------------------------------------------

beforeEach(() => {
  jobs = []
  users = []
  createdAuthUsers.length = 0
  deletedAuthUserIds.length = 0
  authCreateUserShouldFail = false
  userCreateShouldFailOn = null
  authUser = { id: 'supa-admin-1', email: 'admin@example.school.uk' }
  memberRole = 'admin'
  memberSchoolId = SCHOOL_ID
  fake = new FakeSupabase()
  fake.seed('schools', [{ id: SCHOOL_ID, name: 'Test Academy' }])
  fake.seed('classes', [{ school_id: SCHOOL_ID, name: '10A' }])
  insideTransaction = false
  createUserCalledInsideTransaction = false
  createUserInFlight = 0
  createUserMostInFlight = 0
  onCreateUser = null
  vi.clearAllMocks()
  // Re-attach default prisma findMany behaviour (cleared by clearAllMocks).
  prismaMock.user.findMany.mockImplementation(async () => [])
  vi.mocked(sendEmail).mockImplementation(async () => ({ success: true, messageId: 'm-1' }))
  vi.mocked(sendEmailBatch).mockImplementation(async (messages) => ({
    sent: messages.length,
    failed: [],
  }))
})

// ---------------------------------------------------------------------------
// Tests
// ---------------------------------------------------------------------------

describe('POST /api/school/bulk-upload/commit', () => {
  it('returns 401 when the user is not signed in', async () => {
    authUser = null
    const res = await POST(makeRequest(freshBody()))
    expect(res.status).toBe(401)
  })

  it('returns 403 when the signed-in user is not a school admin (RBAC)', async () => {
    memberRole = 'teacher'
    const res = await POST(makeRequest(freshBody()))
    expect(res.status).toBe(403)
    const json = await res.json()
    expect(json.error).toMatch(/admin/i)
  })

  it('creates new users on the happy path and returns per-row outcomes', async () => {
    const res = await POST(makeRequest(freshBody()))
    expect(res.status).toBe(200)
    const json = await res.json()
    expect(json.created).toBe(2)
    expect(json.updated).toBe(0)
    expect(json.skipped).toBe(0)
    expect(json.outcomes).toHaveLength(2)
    expect(users).toHaveLength(2)
    expect(createdAuthUsers).toHaveLength(2)
    // The job row is flipped to 'completed' inside the transaction.
    expect(jobs[0].status).toBe('completed')
    expect(jobs[0].completedAt).not.toBeNull()
  })

  it('is idempotent: the same key twice returns the cached response without re-creating users', async () => {
    const body = freshBody({ idempotencyKey: 'idem-fixed-key-12345' })
    const first = await POST(makeRequest(body))
    expect(first.status).toBe(200)
    const firstJson = await first.json()
    expect(firstJson.created).toBe(2)

    // Second call with the same key - no new auth users, no new User rows.
    const second = await POST(makeRequest(body))
    expect(second.status).toBe(200)
    const secondJson = await second.json()
    expect(secondJson.jobId).toBe(firstJson.jobId)
    expect(secondJson.idempotent).toBe(true)
    expect(createdAuthUsers).toHaveLength(2) // unchanged
    expect(users).toHaveLength(2) // unchanged
    expect(jobs).toHaveLength(1) // still one job row
  })

  it('rolls back every create when Prisma throws mid-batch', async () => {
    // Force the second user.create to throw.
    userCreateShouldFailOn = 'priya@example.school.uk'
    const res = await POST(makeRequest(freshBody()))
    expect(res.status).toBe(500)
    const json = await res.json()
    expect(json.error).toMatch(/commit failed/i)
    // Prisma tx rolled back → users wiped.
    expect(users).toHaveLength(0)
    // Auth users created before the failure were revoked.
    expect(deletedAuthUserIds.length).toBeGreaterThan(0)
    // Job row reflects the failure.
    expect(jobs[0].status).toBe('failed')
    // And nobody was emailed a password for an account that was just deleted.
    // The first pupil's account existed for a moment before the rollback;
    // until 11 October 2026 their welcome had already gone out.
    expect(sendEmail).not.toHaveBeenCalled()
    expect(sendEmailBatch).not.toHaveBeenCalled()
  })

  it('sends the welcome emails only after the accounts are committed, in one batch', async () => {
    const events: string[] = []
    prismaMock.$transaction.mockImplementationOnce(
      async (cb: (tx: unknown) => Promise<unknown>) => {
        const result = await cb(prismaMock)
        events.push('committed')
        return result
      },
    )
    vi.mocked(sendEmailBatch).mockImplementation(async (messages) => {
      events.push(`welcomes:${messages.map((m) => m.to).join(',')}`)
      return { sent: messages.length, failed: [] }
    })

    const res = await POST(makeRequest(freshBody()))
    expect(res.status).toBe(200)
    expect(events).toEqual(['committed', 'welcomes:alex@example.school.uk,priya@example.school.uk'])
    // One batch, not a request per pupil: Resend allows 10 requests a second.
    expect(sendEmailBatch).toHaveBeenCalledOnce()
    expect(sendEmail).not.toHaveBeenCalled()
  })

  it('and each email carries the password that pupil was created with', async () => {
    const res = await POST(makeRequest(freshBody()))
    expect(res.status).toBe(200)
    // The mock declares only `email`; the route also passes `password`.
    const created = vi.mocked(serviceRoleClientMock.auth.admin.createUser).mock
      .calls as unknown as [{ email: string; password: string }][]
    const passwords = new Map(created.map(([arg]) => [arg.email, arg.password]))
    expect(passwords.size).toBe(2)
    const messages = vi.mocked(sendEmailBatch).mock.calls[0][0]
    expect(messages).toHaveLength(2)
    for (const { to, subject, html } of messages) {
      expect(subject).toBe('Your English Hub account')
      expect(html).toContain(`<code>${passwords.get(to)}</code>`)
    }
  })

  it('and a pupil who already had an account gets no welcome email', async () => {
    prismaMock.user.findMany.mockImplementation(async () => [
      { id: 'u-existing', email: 'alex@example.school.uk', supabaseUserId: 'supa-alex' },
    ])
    const res = await POST(makeRequest(freshBody()))
    expect(res.status).toBe(200)
    const messages = vi.mocked(sendEmailBatch).mock.calls[0][0]
    expect(messages.map((m) => m.to)).toEqual(['priya@example.school.uk'])
  })

  // ── Fitting a real school into the platform's limits (11 October 2026) ──

  /** A file of `n` new pupils. */
  const classOf = (n: number) => ({
    fileName: 'class.csv',
    idempotencyKey: `idem-${randomKey()}`,
    rows: Array.from({ length: n }, (_, i) => ({
      ...baseRow,
      row: i + 2,
      email: `pupil${i}@example.school.uk`,
      firstName: `Pupil${i}`,
    })),
  })

  it('makes no Supabase call inside the transaction, which has explicit limits', async () => {
    const res = await POST(makeRequest(freshBody()))
    expect(res.status).toBe(200)
    expect(
      createUserCalledInsideTransaction,
      "an account was created while the transaction was open, under Prisma's 5 s default",
    ).toBe(false)
    const options = prismaMock.$transaction.mock.calls[0][1] as
      | { timeout?: number; maxWait?: number }
      | undefined
    expect(options?.timeout).toBeGreaterThan(5_000)
    expect((options?.timeout ?? 0) + (options?.maxWait ?? 0)).toBeLessThan(maxDuration * 1000)
  })

  it('gives the function the time a full file needs, and no more than Cloudflare waits', () => {
    expect(maxDuration).toBeGreaterThanOrEqual(120)
    expect(maxDuration).toBeLessThan(125)
  })

  it('creates the accounts a few at a time, not one after another', async () => {
    const res = await POST(makeRequest(classOf(12)))
    expect(res.status).toBe(200)
    expect((await res.json()).created).toBe(12)
    expect(createUserMostInFlight).toBeGreaterThan(1)
    expect(createUserMostInFlight).toBeLessThanOrEqual(5)
  })

  it('stops an upload that runs out of time, revokes every account and saves nothing', async () => {
    // Each account call moves the clock on ten seconds, so the sixty-second
    // budget runs out part-way through twelve pupils.
    let clock = 1_000_000
    const now = vi.spyOn(Date, 'now').mockImplementation(() => clock)
    onCreateUser = () => {
      clock += 10_000
    }
    try {
      const res = await POST(makeRequest(classOf(12)))
      expect(res.status).toBe(503)
      expect((await res.json()).error).toMatch(/took too long/i)
      expect(createdAuthUsers.length).toBeGreaterThan(0)
      expect(createdAuthUsers.length).toBeLessThan(12)
      expect([...deletedAuthUserIds].sort()).toEqual(createdAuthUsers.map((u) => u.id).sort())
      expect(users).toHaveLength(0)
      expect(jobs[0].status).toBe('failed')
      expect(sendEmailBatch).not.toHaveBeenCalled()
    } finally {
      now.mockRestore()
    }
  })

  it.each(['failed', 'pending'])(
    'refuses to replay a %s job as success, so a retry is not told it worked',
    async (status) => {
      await prismaMock.bulkUploadJob.create({
        data: { idempotencyKey: 'idem-earlier-attempt-01', status },
      })
      const res = await POST(makeRequest(freshBody({ idempotencyKey: 'idem-earlier-attempt-01' })))
      expect(res.status).toBe(409)
      expect(await res.json()).toMatchObject({ jobStatus: status })
      expect(createdAuthUsers).toHaveLength(0)
    },
  )

  it('links a pupil who already had an account by their Supabase id, not their Prisma id', async () => {
    prismaMock.user.findMany.mockImplementation(async () => [
      { id: 'ckprismacuid0001', email: 'alex@example.school.uk', supabaseUserId: 'supa-alex' },
    ])
    const res = await POST(makeRequest(freshBody()))
    expect(res.status).toBe(200)
    const alex = memberUpserts().find((r) => r.email === 'alex@example.school.uk')
    expect(alex?.user_id).toBe('supa-alex')
  })

  it('links and places every pupil, and reports nothing failed, on the happy path', async () => {
    const res = await POST(makeRequest(freshBody()))
    const json = await res.json()
    expect(res.status).toBe(200)
    expect(json.memberLinkFailures).toEqual([])
    expect(json.unmatchedClassCodes).toEqual([])
    expect(json.placementFailures).toEqual([])
    expect(fake.rows('school_members')).toHaveLength(2)
    expect(fake.rows('class_students')).toHaveLength(2)
  })

  it("refuses a site administrator's synthetic school, so no account is made against it", async () => {
    // verifySchoolMember gives a site admin school_id '__site_admin__'. Before
    // 12 October 2026 this route created real accounts against it.
    memberSchoolId = '__site_admin__'
    const res = await POST(makeRequest(freshBody()))
    expect(res.status).toBe(422)
    expect((await res.json()).error).toMatch(/admin\/schools/)
    expect(createdAuthUsers).toHaveLength(0)
    expect(jobs).toHaveLength(0)
  })

  it('skips a repeat of an email earlier in the file, with the reason', async () => {
    const res = await POST(
      makeRequest({
        fileName: 'repeat.csv',
        idempotencyKey: `idem-${randomKey()}`,
        rows: [
          { ...baseRow, row: 2 },
          { ...baseRow, row: 3 },
        ],
      }),
    )
    expect(res.status).toBe(200)
    const json = await res.json()
    expect(json.created).toBe(1)
    expect(json.skipped).toBe(1)
    expect(json.errors).toEqual([
      expect.objectContaining({ row: 3, code: 'DUPLICATE_EMAIL_IN_FILE' }),
    ])
    expect(createdAuthUsers).toHaveLength(1)
  })

  it('rejects commits missing an idempotency key', async () => {
    const bad = freshBody()
    // deliberately break the key
    ;(bad as { idempotencyKey: string }).idempotencyKey = 'x'
    const res = await POST(makeRequest(bad))
    expect(res.status).toBe(422)
  })

  it('rejects an empty rows array', async () => {
    const res = await POST(
      makeRequest({
        fileName: 'empty.csv',
        idempotencyKey: 'idem-' + randomKey(),
        rows: [],
      }),
    )
    expect(res.status).toBe(422)
  })
})
