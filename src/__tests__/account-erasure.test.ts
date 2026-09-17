/**
 * Critical 2 - account deletion must either actually erase, or honestly
 * refuse.
 *
 * The defect these tests lock down: ~96% of accounts exist only in
 * Supabase (an `auth.users` row plus a `public.profiles` row) with no
 * Prisma `User` row. DELETE /api/account/delete answered those requests
 * with `{ success: true, scheduledPurgeAt: <now + 30 days> }` having
 * deleted nothing at all - no auth user, no profile, no audit entry.
 *
 * Every test below asserts one of three properties:
 *   1. erasure of a Supabase-native account really removes the profiles
 *      row and the auth user;
 *   2. a failure returns an error and NO purge date;
 *   3. the audit entry is written on every branch.
 */
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { NextRequest } from 'next/server'

// ─── Supabase admin mock ────────────────────────────────────────────────

interface AdminConfig {
  /** Row returned by the post-delete verification read of `profiles`. */
  residualProfile?: Record<string, unknown> | null
  profileDeleteError?: { message: string; status?: number } | null
  profileVerifyError?: { message: string; status?: number } | null
  authDeleteError?: { message: string; status?: number } | null
  /** User returned by getUserById after the delete (null = gone). */
  residualAuthUser?: { id: string; email?: string } | null
  /** User returned by getUserById when compiling an export. */
  authUser?: Record<string, unknown> | null
  profileRow?: Record<string, unknown> | null
  tableRows?: Record<string, Record<string, unknown>[]>
  tableErrors?: Record<string, { message: string }>
}

interface AdminCalls {
  profileDeletes: string[]
  authDeletes: string[]
  deletedTables: string[]
  selects: { table: string; column: string; value: string }[]
}

let adminConfig: AdminConfig = {}
let adminCalls: AdminCalls = {
  profileDeletes: [],
  authDeletes: [],
  deletedTables: [],
  selects: [],
}

/** Awaitable result that also answers `.maybeSingle()`, like PostgREST. */
function queryResult(result: { data: unknown; error: unknown }) {
  return Object.assign(Promise.resolve(result), {
    maybeSingle: () => Promise.resolve(result),
    single: () => Promise.resolve(result),
  })
}

function createAdminMock() {
  return {
    from(table: string) {
      return {
        delete() {
          return {
            eq(_column: string, value: string) {
              adminCalls.deletedTables.push(table)
              if (table === 'profiles') adminCalls.profileDeletes.push(value)
              return queryResult({
                data: null,
                error: adminConfig.profileDeleteError ?? null,
              })
            },
          }
        },
        select(_columns: string) {
          return {
            eq(column: string, value: string) {
              adminCalls.selects.push({ table, column, value })
              if (table === 'profiles') {
                // A `select` on profiles is either the post-delete
                // verification or the export read.
                if (adminConfig.profileVerifyError) {
                  return queryResult({ data: null, error: adminConfig.profileVerifyError })
                }
                return queryResult({
                  data:
                    adminConfig.residualProfile !== undefined
                      ? adminConfig.residualProfile
                      : (adminConfig.profileRow ?? null),
                  error: null,
                })
              }
              const error = adminConfig.tableErrors?.[table]
              if (error) return queryResult({ data: null, error })
              return queryResult({ data: adminConfig.tableRows?.[table] ?? [], error: null })
            },
          }
        },
      }
    },
    auth: {
      admin: {
        deleteUser: vi.fn(async (id: string) => {
          adminCalls.authDeletes.push(id)
          return { data: null, error: adminConfig.authDeleteError ?? null }
        }),
        getUserById: vi.fn(async (id: string) => {
          if (adminConfig.authUser !== undefined) {
            return { data: { user: adminConfig.authUser }, error: null }
          }
          const residual = adminConfig.residualAuthUser ?? null
          if (residual && residual.id === id) {
            return { data: { user: residual }, error: null }
          }
          return { data: { user: null }, error: { message: 'User not found', status: 404 } }
        }),
        listUsers: vi.fn(async () => ({ data: { users: [] }, error: null })),
      },
    },
  }
}

const mockGetUser = vi.fn()

vi.mock('@/lib/supabase/server', () => ({
  createServerSupabaseClient: () => ({
    auth: { getUser: mockGetUser, signOut: vi.fn(async () => ({ error: null })) },
  }),
  createServiceRoleClient: () => createAdminMock(),
}))

// ─── Prisma mock ────────────────────────────────────────────────────────

const prismaMock = vi.hoisted(() => ({
  user: {
    findFirst: vi.fn(),
    findUnique: vi.fn(),
    update: vi.fn(),
    create: vi.fn(),
  },
  auditLog: {
    create: vi.fn(),
    findMany: vi.fn(),
  },
  dataAccessRequest: {
    findFirst: vi.fn(),
    create: vi.fn(),
  },
  consent: {
    create: vi.fn(),
    upsert: vi.fn(),
  },
  subscription: {
    create: vi.fn(),
    upsert: vi.fn(),
  },
  freeAllowanceUsage: {
    deleteMany: vi.fn(),
  },
}))

vi.mock('@/lib/prisma', () => ({ prisma: prismaMock }))

vi.mock('@/lib/rate-limit', () => ({
  rateLimit: vi.fn().mockResolvedValue({ success: true, remaining: 0, resetAt: Date.now() + 1000 }),
  getClientIp: vi.fn().mockReturnValue('127.0.0.1'),
}))

const sendViaResend = vi.fn().mockResolvedValue({ sent: true, messageId: 'test' })
vi.mock('@/lib/email/resend', () => ({
  sendViaResend: (...args: unknown[]) => sendViaResend(...args),
  escapeHtml: (s: string) => s,
}))

const sendEmail = vi.fn().mockResolvedValue({ success: true, messageId: 'test' })
vi.mock('@/lib/email', () => ({
  sendEmail: (...args: unknown[]) => sendEmail(...args),
}))

vi.mock('@/lib/privacy/dormancy', () => ({
  processChildDormancy: vi.fn(),
}))

// ─── Imports under test (after the mocks) ───────────────────────────────

import { DELETE } from '@/app/api/account/delete/route'
import { POST as EXPORT_POST } from '@/app/api/account/export/route'
import {
  DPO_EMAIL,
  ErasureIncompleteError,
  compileSupabaseNativeSubjectData,
  eraseSupabaseIdentity,
} from '@/lib/data-retention'

// ─── Fixtures ───────────────────────────────────────────────────────────

const SUPABASE_UUID = '11111111-2222-4333-8444-555555555555'
const SUBJECT_EMAIL = 'learner@example.invalid'

function deleteRequest(body: Record<string, unknown> = { confirm: 'DELETE' }): NextRequest {
  return new NextRequest(new URL('http://localhost:3000/api/account/delete'), {
    method: 'DELETE',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json', 'x-real-ip': '203.0.113.7' },
  })
}

function exportRequest(): NextRequest {
  return new NextRequest(new URL('http://localhost:3000/api/account/export'), { method: 'POST' })
}

function signedIn(): void {
  mockGetUser.mockResolvedValue({
    data: { user: { id: SUPABASE_UUID, email: SUBJECT_EMAIL } },
    error: null,
  })
}

beforeEach(() => {
  vi.clearAllMocks()
  adminConfig = {}
  adminCalls = { profileDeletes: [], authDeletes: [], deletedTables: [], selects: [] }

  signedIn()
  prismaMock.user.findFirst.mockResolvedValue(null)
  prismaMock.user.findUnique.mockResolvedValue(null)
  prismaMock.user.update.mockResolvedValue({})
  prismaMock.auditLog.create.mockResolvedValue({ id: 'audit_1' })
  prismaMock.auditLog.findMany.mockResolvedValue([])
  prismaMock.dataAccessRequest.findFirst.mockResolvedValue(null)
  prismaMock.dataAccessRequest.create.mockResolvedValue({ id: 'dar_1' })
  prismaMock.freeAllowanceUsage.deleteMany.mockResolvedValue({ count: 2 })
})

// ─── 1. Supabase-native erasure really erases ───────────────────────────

describe('DELETE /api/account/delete - account with no Prisma row', () => {
  it('deletes the profiles row and the Supabase auth user', async () => {
    const res = await DELETE(deleteRequest())
    const body = await res.json()

    expect(res.status).toBe(200)
    expect(body.success).toBe(true)
    expect(body.erased).toBe(true)

    // The two rows that actually hold this person's data.
    expect(adminCalls.profileDeletes).toEqual([SUPABASE_UUID])
    expect(adminCalls.authDeletes).toEqual([SUPABASE_UUID])
  })

  it('returns no purge date, because nothing is pending - it is already done', async () => {
    const res = await DELETE(deleteRequest())
    const body = await res.json()

    expect(body).not.toHaveProperty('scheduledPurgeAt')
    expect(JSON.stringify(body)).not.toContain('scheduledPurgeAt')
    expect(typeof body.erasedAt).toBe('string')
  })

  it('writes an audit entry recording what was erased', async () => {
    await DELETE(deleteRequest())

    expect(prismaMock.auditLog.create).toHaveBeenCalledTimes(1)
    const entry = prismaMock.auditLog.create.mock.calls[0][0].data
    expect(entry.action).toBe('USER_ERASED')
    expect(entry.resourceId).toBe(SUPABASE_UUID)
    expect(entry.userId).toBeNull()
    expect(entry.details.profileRowDeleted).toBe(true)
    expect(entry.details.authUserDeleted).toBe(true)
  })

  it('removes the free-allowance counters, which have no foreign key to cascade from', async () => {
    await DELETE(deleteRequest())

    expect(prismaMock.freeAllowanceUsage.deleteMany).toHaveBeenCalledWith({
      where: { subjectType: 'user', subjectKey: { in: [SUPABASE_UUID] } },
    })
  })

  it('grants nothing on the way out: no User row, no consent, no subscription', async () => {
    // Erasing an account must never be the moment we first write that
    // person into a second store, and must never touch a consent ledger.
    await DELETE(deleteRequest())

    expect(prismaMock.user.create).not.toHaveBeenCalled()
    expect(prismaMock.consent.create).not.toHaveBeenCalled()
    expect(prismaMock.consent.upsert).not.toHaveBeenCalled()
    expect(prismaMock.subscription.create).not.toHaveBeenCalled()
    expect(prismaMock.subscription.upsert).not.toHaveBeenCalled()

    // The only Supabase table written to is `profiles`; parental_consents
    // and the rest go by database cascade, never by hand.
    expect([...new Set(adminCalls.deletedTables)]).toEqual(['profiles'])
  })

  it('tells the account holder the deletion is done, not scheduled', async () => {
    await DELETE(deleteRequest())

    expect(sendViaResend).toHaveBeenCalledTimes(1)
    const email = sendViaResend.mock.calls[0][0]
    expect(email.to).toBe(SUBJECT_EMAIL)
    expect(email.subject).toMatch(/has been deleted/i)
    expect(email.text).not.toMatch(/scheduled for deletion/i)
  })
})

// ─── 2. Failure returns an error and NOT a purge date ───────────────────

describe('DELETE /api/account/delete - erasure that cannot be completed', () => {
  it('refuses honestly when the profiles row survives the delete', async () => {
    adminConfig.residualProfile = { id: SUPABASE_UUID }

    const res = await DELETE(deleteRequest())
    const body = await res.json()

    expect(res.status).toBe(503)
    expect(body.success).toBe(false)
    expect(body).not.toHaveProperty('scheduledPurgeAt')
    expect(JSON.stringify(body)).not.toContain('scheduledPurgeAt')
    expect(body.dpoEmail).toBe(DPO_EMAIL)
    expect(body.error).toContain(DPO_EMAIL)
  })

  it('refuses honestly when the auth user survives the delete', async () => {
    adminConfig.residualAuthUser = { id: SUPABASE_UUID }

    const res = await DELETE(deleteRequest())
    const body = await res.json()

    expect(res.status).toBe(503)
    expect(body.success).toBe(false)
    expect(body).not.toHaveProperty('scheduledPurgeAt')
  })

  it('refuses honestly when the Supabase admin call errors', async () => {
    adminConfig.authDeleteError = { message: 'service unavailable', status: 503 }

    const res = await DELETE(deleteRequest())
    const body = await res.json()

    expect(res.status).toBe(503)
    expect(body.error).toContain(DPO_EMAIL)
    expect(body).not.toHaveProperty('erasedAt')
  })

  it('writes an audit entry on the failure path too', async () => {
    adminConfig.residualProfile = { id: SUPABASE_UUID }

    await DELETE(deleteRequest())

    expect(prismaMock.auditLog.create).toHaveBeenCalledTimes(1)
    const entry = prismaMock.auditLog.create.mock.calls[0][0].data
    expect(entry.action).toBe('USER_ERASURE_FAILED')
    expect(entry.resourceId).toBe(SUPABASE_UUID)
    expect(entry.details.step).toBe('profiles_verify')
  })

  it('sends no "your account has been deleted" email when it has not been', async () => {
    adminConfig.residualProfile = { id: SUPABASE_UUID }

    await DELETE(deleteRequest())

    expect(sendViaResend).not.toHaveBeenCalled()
  })
})

// ─── 3. The Prisma-row branch: audit always, plus a traceable request ───

describe('DELETE /api/account/delete - account with a Prisma row', () => {
  const PRISMA_USER = {
    id: 'ckuser0001',
    email: SUBJECT_EMAIL,
    firstName: 'Sam',
    accountStatus: 'ACTIVE',
  }

  it('soft-deletes, schedules a purge, and records a DataAccessRequest', async () => {
    prismaMock.user.findFirst.mockResolvedValue(PRISMA_USER)

    const res = await DELETE(deleteRequest())
    const body = await res.json()

    expect(res.status).toBe(200)
    expect(body.success).toBe(true)
    expect(body.erased).toBe(false)
    expect(typeof body.scheduledPurgeAt).toBe('string')

    expect(prismaMock.user.update).toHaveBeenCalledWith(
      expect.objectContaining({
        where: { id: PRISMA_USER.id },
        data: expect.objectContaining({ accountStatus: 'DELETED' }),
      }),
    )

    const dar = prismaMock.dataAccessRequest.create.mock.calls[0][0].data
    expect(dar.userId).toBe(PRISMA_USER.id)
    expect(dar.type).toBe('ERASURE')
    expect(dar.status).toBe('PENDING')
  })

  it('writes the audit entry even when the account was already soft-deleted', async () => {
    // The old route nested the audit write inside `if (accountStatus !==
    // 'DELETED')`, so a repeat request left no trace at all.
    prismaMock.user.findFirst.mockResolvedValue({ ...PRISMA_USER, accountStatus: 'DELETED' })

    const res = await DELETE(deleteRequest())
    expect(res.status).toBe(200)

    expect(prismaMock.user.update).not.toHaveBeenCalled()
    expect(prismaMock.auditLog.create).toHaveBeenCalledTimes(1)
    const entry = prismaMock.auditLog.create.mock.calls[0][0].data
    expect(entry.action).toBe('USER_REQUESTED_DELETION')
    expect(entry.details.alreadyDeleted).toBe(true)
  })

  it('does not create a second DataAccessRequest when one is already pending', async () => {
    prismaMock.user.findFirst.mockResolvedValue(PRISMA_USER)
    prismaMock.dataAccessRequest.findFirst.mockResolvedValue({ id: 'dar_existing' })

    const res = await DELETE(deleteRequest())
    const body = await res.json()

    expect(prismaMock.dataAccessRequest.create).not.toHaveBeenCalled()
    expect(body.dataRequestId).toBe('dar_existing')
  })

  it('still returns a purge date when the DataAccessRequest write fails, and records why', async () => {
    prismaMock.user.findFirst.mockResolvedValue(PRISMA_USER)
    prismaMock.dataAccessRequest.findFirst.mockRejectedValue(new Error('db down'))

    const res = await DELETE(deleteRequest())
    const body = await res.json()

    // The soft-delete DID happen, so the purge date is true.
    expect(res.status).toBe(200)
    expect(typeof body.scheduledPurgeAt).toBe('string')
    const entry = prismaMock.auditLog.create.mock.calls[0][0].data
    expect(entry.details.dataAccessRequestError).toBe('db down')
  })
})

// ─── 4. Guard rails on the route itself ─────────────────────────────────

describe('DELETE /api/account/delete - request handling', () => {
  it('rejects an unauthenticated caller', async () => {
    mockGetUser.mockResolvedValue({ data: { user: null }, error: null })

    const res = await DELETE(deleteRequest())
    expect(res.status).toBe(401)
    expect(adminCalls.authDeletes).toEqual([])
  })

  it('erases nothing without the typed confirmation', async () => {
    const res = await DELETE(deleteRequest({ confirm: 'yes' }))

    expect(res.status).toBe(400)
    expect(adminCalls.profileDeletes).toEqual([])
    expect(adminCalls.authDeletes).toEqual([])
    expect(prismaMock.auditLog.create).not.toHaveBeenCalled()
  })
})

// ─── 5. eraseSupabaseIdentity, directly ─────────────────────────────────

describe('eraseSupabaseIdentity', () => {
  it('reports the erasure only once both rows are verified gone', async () => {
    const result = await eraseSupabaseIdentity(SUPABASE_UUID)

    expect(result.profileRowDeleted).toBe(true)
    expect(result.authUserDeleted).toBe(true)
    expect(result.warnings).toEqual([])
  })

  it('throws rather than report success when the profiles row remains', async () => {
    adminConfig.residualProfile = { id: SUPABASE_UUID }

    await expect(eraseSupabaseIdentity(SUPABASE_UUID)).rejects.toBeInstanceOf(
      ErasureIncompleteError,
    )
  })

  it('throws rather than report success when the deletion cannot be verified', async () => {
    adminConfig.profileVerifyError = { message: 'permission denied', status: 403 }

    await expect(eraseSupabaseIdentity(SUPABASE_UUID)).rejects.toMatchObject({
      name: 'ErasureIncompleteError',
      step: 'profiles_verify',
    })
  })

  it('marks an auth-side failure as partial, because the profile has already gone', async () => {
    adminConfig.authDeleteError = { message: 'boom' }

    await expect(eraseSupabaseIdentity(SUPABASE_UUID)).rejects.toMatchObject({
      step: 'auth_user_delete',
      partial: true,
    })
  })

  it('downgrades a free-allowance failure to a warning without hiding it', async () => {
    prismaMock.freeAllowanceUsage.deleteMany.mockRejectedValue(new Error('counter table locked'))

    const result = await eraseSupabaseIdentity(SUPABASE_UUID)

    expect(result.authUserDeleted).toBe(true)
    expect(result.warnings).toHaveLength(1)
    expect(result.warnings[0]).toContain('counter table locked')
  })
})

// ─── 6. Subject access for the same accounts ────────────────────────────

describe('POST /api/account/export - account with no Prisma row', () => {
  it('exports the data we hold instead of claiming there is none', async () => {
    adminConfig.authUser = {
      id: SUPABASE_UUID,
      email: SUBJECT_EMAIL,
      created_at: '2026-01-05T09:00:00.000Z',
      last_sign_in_at: '2026-09-01T09:00:00.000Z',
      user_metadata: { yearGroup: 'Year 10' },
    }
    adminConfig.profileRow = { id: SUPABASE_UUID, email: SUBJECT_EMAIL, full_name: 'Sam Patel' }

    const res = await EXPORT_POST(exportRequest())

    expect(res.status).toBe(200)
    const payload = JSON.parse(await res.text())
    expect(payload.account.supabaseUserId).toBe(SUPABASE_UUID)
    expect(payload.profile.full_name).toBe('Sam Patel')
    expect(payload.dataController.contact).toBe(DPO_EMAIL)
  })
})

describe('compileSupabaseNativeSubjectData', () => {
  it('reports a table it could not read rather than omitting it', async () => {
    adminConfig.authUser = { id: SUPABASE_UUID, email: SUBJECT_EMAIL, user_metadata: {} }
    adminConfig.profileRow = { id: SUPABASE_UUID }
    adminConfig.tableRows = { marking_submissions: [{ id: 'sub_1' }] }
    adminConfig.tableErrors = { quiz_responses: { message: 'relation does not exist' } }

    const payload = await compileSupabaseNativeSubjectData(SUPABASE_UUID)

    const marking = payload.records.find((r) => r.table === 'marking_submissions')
    expect(marking?.status).toBe('read')
    expect(marking?.rowCount).toBe(1)

    const quiz = payload.records.find((r) => r.table === 'quiz_responses')
    expect(quiz?.status).toBe('could-not-be-read')
    expect(quiz?.note).toContain('relation does not exist')
  })
})
