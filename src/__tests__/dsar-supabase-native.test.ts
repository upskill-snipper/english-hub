/**
 * Critical 2, part 2 - the subject-rights surfaces that key on the same
 * missing Prisma row.
 *
 * `/api/dsar` answered "User not found" (404) and `/api/dsar/export`
 * refused to export, for accounts that exist only in Supabase. Both were
 * refusing statutory requests for data the product demonstrably holds.
 *
 * Also covered: `hardDeleteUser()`, the retention-cron path that is
 * supposed to make the 30-day purge date true. Its Supabase step used
 * `listUsers()` with no arguments, which pages at 50 rows - so on a
 * project with 200 accounts the email fallback silently found nobody and
 * the auth identity survived a "completed" erasure.
 */
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { NextRequest } from 'next/server'

// ─── Supabase admin mock ────────────────────────────────────────────────

interface AdminConfig {
  residualProfile?: Record<string, unknown> | null
  profileRow?: Record<string, unknown> | null
  authUser?: Record<string, unknown> | null
  tableRows?: Record<string, Record<string, unknown>[]>
  /** auth.users pages, as listUsers() returns them. */
  userPages?: { id: string; email: string }[][]
}

let adminConfig: AdminConfig = {}
let profileDeletes: string[] = []
let authDeletes: string[] = []
let listUserCalls: { page?: number; perPage?: number }[] = []

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
        delete: () => ({
          eq: (_c: string, value: string) => {
            if (table === 'profiles') profileDeletes.push(value)
            return queryResult({ data: null, error: null })
          },
        }),
        select: () => ({
          eq: (_c: string, _value: string) => {
            if (table === 'profiles') {
              return queryResult({
                data:
                  adminConfig.residualProfile !== undefined
                    ? adminConfig.residualProfile
                    : (adminConfig.profileRow ?? null),
                error: null,
              })
            }
            return queryResult({ data: adminConfig.tableRows?.[table] ?? [], error: null })
          },
        }),
      }
    },
    auth: {
      admin: {
        deleteUser: vi.fn(async (id: string) => {
          authDeletes.push(id)
          return { data: null, error: null }
        }),
        getUserById: vi.fn(async () => {
          if (adminConfig.authUser !== undefined) {
            return { data: { user: adminConfig.authUser }, error: null }
          }
          return { data: { user: null }, error: { message: 'User not found', status: 404 } }
        }),
        listUsers: vi.fn(async (params?: { page?: number; perPage?: number }) => {
          listUserCalls.push(params ?? {})
          const pages = adminConfig.userPages ?? []
          const page = params?.page ?? 1
          return { data: { users: pages[page - 1] ?? [] }, error: null }
        }),
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

const txMock = vi.hoisted(() => ({
  user: { findUnique: vi.fn(), delete: vi.fn() },
  essay: { findMany: vi.fn(), deleteMany: vi.fn() },
  aIFeedback: { deleteMany: vi.fn() },
  consent: { deleteMany: vi.fn() },
  privacySettings: { deleteMany: vi.fn() },
  dataAccessRequest: { deleteMany: vi.fn() },
  subscription: { delete: vi.fn() },
  auditLog: { updateMany: vi.fn(), create: vi.fn() },
  safeguardingReport: { findMany: vi.fn(), deleteMany: vi.fn() },
  cookieConsent: { deleteMany: vi.fn() },
}))

const prismaMock = vi.hoisted(() => ({
  user: { findUnique: vi.fn(), findFirst: vi.fn() },
  auditLog: { create: vi.fn(), findMany: vi.fn() },
  dataAccessRequest: { findFirst: vi.fn(), create: vi.fn(), findMany: vi.fn(), update: vi.fn() },
  freeAllowanceUsage: { deleteMany: vi.fn() },
  $transaction: vi.fn(),
}))

vi.mock('@/lib/prisma', () => ({ prisma: prismaMock }))

vi.mock('@/lib/rate-limit', () => ({
  rateLimit: vi.fn().mockResolvedValue({ success: true, remaining: 5, resetAt: Date.now() + 1000 }),
  getClientIp: vi.fn().mockReturnValue('127.0.0.1'),
}))

const sendEmail = vi.hoisted(() => vi.fn())
vi.mock('@/lib/email', () => ({ sendEmail }))

vi.mock('@/lib/privacy/dormancy', () => ({ processChildDormancy: vi.fn() }))

// ─── Imports under test ─────────────────────────────────────────────────

import { POST as DSAR_POST, GET as DSAR_GET } from '@/app/api/dsar/route'
import { GET as DSAR_EXPORT } from '@/app/api/dsar/export/route'
import { DPO_EMAIL, hardDeleteUser } from '@/lib/data-retention'

const SUPABASE_UUID = '99999999-8888-4777-8666-555555555555'
const SUBJECT_EMAIL = 'student@example.invalid'

function dsarRequest(body: Record<string, unknown>): NextRequest {
  return new NextRequest(new URL('http://localhost:3000/api/dsar'), {
    method: 'POST',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' },
  })
}

beforeEach(() => {
  vi.clearAllMocks()
  adminConfig = {}
  profileDeletes = []
  authDeletes = []
  listUserCalls = []

  mockGetUser.mockResolvedValue({
    data: { user: { id: SUPABASE_UUID, email: SUBJECT_EMAIL } },
    error: null,
  })
  prismaMock.user.findUnique.mockResolvedValue(null)
  prismaMock.user.findFirst.mockResolvedValue(null)
  prismaMock.auditLog.create.mockResolvedValue({ id: 'audit_x' })
  prismaMock.auditLog.findMany.mockResolvedValue([])
  prismaMock.freeAllowanceUsage.deleteMany.mockResolvedValue({ count: 0 })
  sendEmail.mockResolvedValue({ success: true, messageId: 'm1' })
})

// ─── POST /api/dsar for a Supabase-native account ───────────────────────

describe('POST /api/dsar - account with no Prisma row', () => {
  it('accepts the request instead of answering "User not found"', async () => {
    const res = await DSAR_POST(dsarRequest({ type: 'ERASURE', details: 'Please delete me' }))
    const body = await res.json()

    expect(res.status).toBe(202)
    expect(body.referenceNumber).toMatch(/^DSAR-\d{8}-[A-Z0-9]{4}$/)
    expect(body.recordedInAuditLog).toBe(true)
    expect(body.dpoNotified).toBe(true)
    expect(body.dpoEmail).toBe(DPO_EMAIL)
  })

  it('writes a durable record that survives the user it describes', async () => {
    await DSAR_POST(dsarRequest({ type: 'ACCESS' }))

    const entry = prismaMock.auditLog.create.mock.calls[0][0].data
    expect(entry.action).toBe('DSAR_CREATED_UNLINKED')
    expect(entry.userId).toBeNull()
    expect(entry.details.supabaseUserId).toBe(SUPABASE_UUID)
    expect(entry.details.type).toBe('ACCESS')
  })

  it('hands the request to a human, because no DataAccessRequest row can be created', async () => {
    await DSAR_POST(dsarRequest({ type: 'ERASURE' }))

    expect(prismaMock.dataAccessRequest.create).not.toHaveBeenCalled()
    expect(sendEmail).toHaveBeenCalledTimes(1)
    expect(sendEmail.mock.calls[0][0]).toBe(DPO_EMAIL)
  })

  it('does not claim the DPO was notified when the send failed', async () => {
    sendEmail.mockResolvedValue({ success: false, error: 'smtp down' })

    const res = await DSAR_POST(dsarRequest({ type: 'ERASURE' }))
    const body = await res.json()

    expect(res.status).toBe(202)
    expect(body.dpoNotified).toBe(false)
    expect(body.message).toContain(DPO_EMAIL)
    expect(body.message).not.toMatch(/sent to our data protection officer/i)
  })

  it('refuses honestly when neither the log nor the hand-off worked', async () => {
    prismaMock.auditLog.create.mockRejectedValue(new Error('db down'))
    sendEmail.mockResolvedValue({ success: false, error: 'smtp down' })

    const res = await DSAR_POST(dsarRequest({ type: 'ERASURE' }))
    const body = await res.json()

    expect(res.status).toBe(503)
    expect(body.error).toContain(DPO_EMAIL)
    expect(body).not.toHaveProperty('referenceNumber')
  })
})

// ─── GET /api/dsar for a Supabase-native account ────────────────────────

describe('GET /api/dsar - account with no Prisma row', () => {
  it('lists the requests that were logged, rather than an empty list', async () => {
    prismaMock.auditLog.findMany.mockResolvedValue([
      {
        id: 'audit_1',
        resourceId: 'DSAR-20260917-AB12',
        details: { type: 'ERASURE', supabaseUserId: SUPABASE_UUID },
        timestamp: new Date('2026-09-10T10:00:00.000Z'),
      },
    ])

    const res = await DSAR_GET(new NextRequest(new URL('http://localhost:3000/api/dsar')))
    const body = await res.json()

    expect(res.status).toBe(200)
    expect(body.requests).toHaveLength(1)
    expect(body.requests[0].referenceNumber).toBe('DSAR-20260917-AB12')
    expect(body.requests[0].type).toBe('ERASURE')
    expect(body.requests[0].handledBy).toBe(DPO_EMAIL)
  })
})

// ─── GET /api/dsar/export for a Supabase-native account ─────────────────

describe('GET /api/dsar/export - account with no Prisma row', () => {
  it('exports what we hold instead of returning 404', async () => {
    adminConfig.authUser = {
      id: SUPABASE_UUID,
      email: SUBJECT_EMAIL,
      created_at: '2026-02-01T00:00:00.000Z',
      user_metadata: {},
    }
    adminConfig.profileRow = { id: SUPABASE_UUID, full_name: 'Alex Rivers', year_group: 'Year 9' }

    const res = await DSAR_EXPORT(
      new NextRequest(new URL('http://localhost:3000/api/dsar/export?format=json')),
    )

    expect(res.status).toBe(200)
    const payload = JSON.parse(await res.text())
    expect(payload.source).toBe('supabase-identity')
    expect(payload.profile.year_group).toBe('Year 9')
    expect(payload.coverage).toContain(DPO_EMAIL)
  })

  it('renders the same data as text when asked', async () => {
    adminConfig.authUser = { id: SUPABASE_UUID, email: SUBJECT_EMAIL, user_metadata: {} }
    adminConfig.profileRow = { id: SUPABASE_UUID, full_name: 'Alex Rivers' }

    const res = await DSAR_EXPORT(
      new NextRequest(new URL('http://localhost:3000/api/dsar/export?format=text')),
    )

    expect(res.status).toBe(200)
    expect(res.headers.get('Content-Type')).toContain('text/plain')
    const text = await res.text()
    expect(text).toContain('PERSONAL DATA EXPORT')
    expect(text).toContain('Alex Rivers')
  })
})

// ─── hardDeleteUser: the cron path that makes a purge date true ─────────

describe('hardDeleteUser', () => {
  function primeTransaction(user: {
    id: string
    email: string
    supabaseUserId: string | null
    isMinor?: boolean
    dateOfBirth?: Date | null
  }) {
    txMock.user.findUnique.mockResolvedValue({
      isMinor: false,
      dateOfBirth: new Date('2000-01-01T00:00:00.000Z'),
      ...user,
    })
    txMock.safeguardingReport.findMany.mockResolvedValue([])
    txMock.essay.findMany.mockResolvedValue([])
    txMock.essay.deleteMany.mockResolvedValue({ count: 0 })
    txMock.aIFeedback.deleteMany.mockResolvedValue({ count: 0 })
    txMock.consent.deleteMany.mockResolvedValue({ count: 0 })
    txMock.privacySettings.deleteMany.mockResolvedValue({ count: 0 })
    txMock.dataAccessRequest.deleteMany.mockResolvedValue({ count: 0 })
    txMock.subscription.delete.mockResolvedValue({})
    txMock.auditLog.updateMany.mockResolvedValue({ count: 0 })
    txMock.safeguardingReport.deleteMany.mockResolvedValue({ count: 0 })
    txMock.cookieConsent.deleteMany.mockResolvedValue({ count: 0 })
    txMock.user.delete.mockResolvedValue({})
    txMock.auditLog.create.mockResolvedValue({ id: 'tx_audit' })
    prismaMock.$transaction.mockImplementation(async (cb: (tx: unknown) => unknown) => cb(txMock))
  }

  it('erases the Supabase profile and auth user, not just the Prisma row', async () => {
    primeTransaction({ id: 'ckuser1', email: SUBJECT_EMAIL, supabaseUserId: SUPABASE_UUID })

    await hardDeleteUser('ckuser1')

    expect(txMock.user.delete).toHaveBeenCalledWith({ where: { id: 'ckuser1' } })
    expect(profileDeletes).toEqual([SUPABASE_UUID])
    expect(authDeletes).toEqual([SUPABASE_UUID])
  })

  it('pages through auth.users when the row carries no supabaseUserId', async () => {
    // 1000 rows on page 1 means "there may be more" - the old
    // implementation stopped at the default 50-row first page and found
    // nobody, leaving the auth identity behind.
    const pageOne = Array.from({ length: 1000 }, (_, i) => ({
      id: `other-${i}`,
      email: `other${i}@example.invalid`,
    }))
    adminConfig.userPages = [pageOne, [{ id: SUPABASE_UUID, email: SUBJECT_EMAIL }]]

    primeTransaction({ id: 'ckuser2', email: SUBJECT_EMAIL, supabaseUserId: null })

    await hardDeleteUser('ckuser2')

    expect(listUserCalls.length).toBe(2)
    expect(listUserCalls[0]).toMatchObject({ page: 1, perPage: 1000 })
    expect(authDeletes).toEqual([SUPABASE_UUID])
  })

  it('records an audit entry when no Supabase identity can be matched', async () => {
    adminConfig.userPages = [[]]
    primeTransaction({ id: 'ckuser3', email: SUBJECT_EMAIL, supabaseUserId: null })

    await hardDeleteUser('ckuser3')

    expect(authDeletes).toEqual([])
    const actions = prismaMock.auditLog.create.mock.calls.map((c) => c[0].data.action)
    expect(actions).toContain('USER_SUPABASE_IDENTITY_NOT_FOUND')
  })

  it('records an audit entry when the Supabase erasure fails', async () => {
    // The profiles row survives its delete, so eraseSupabaseIdentity
    // throws. The Prisma data has already gone, so the cron must not
    // retry - but the failure has to be evidenced somewhere durable.
    adminConfig.residualProfile = { id: SUPABASE_UUID }
    primeTransaction({ id: 'ckuser4', email: SUBJECT_EMAIL, supabaseUserId: SUPABASE_UUID })

    await expect(hardDeleteUser('ckuser4')).resolves.toBeUndefined()

    const failure = prismaMock.auditLog.create.mock.calls.find(
      (c) => c[0].data.action === 'USER_SUPABASE_ERASURE_FAILED',
    )
    expect(failure).toBeDefined()
    expect(failure![0].data.details.step).toBe('profiles_verify')
  })
})
