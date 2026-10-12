/**
 * /api/school/register must be able to create a school that pays for a term,
 * and must refuse to create one that would be locked out at once.
 *
 * Until 12 October 2026 it could only write access_type 'trial' with no end
 * date, or 'founder' with the FOUNDER code's 2026-08-31, which had already
 * passed. It also wrote profiles.role 'school_admin', which the profiles CHECK
 * rejects, so that upsert always failed quietly.
 */
import { NextRequest } from 'next/server'
import { beforeEach, describe, expect, it, vi } from 'vitest'

const inserts: Record<string, Record<string, unknown>[]> = {}
const upserts: Record<string, Record<string, unknown>[]> = {}
const createUser = vi.fn(async () => ({ data: { user: { id: 'admin-user-1' } }, error: null }))

function from(table: string) {
  const builder: Record<string, unknown> = {
    select: () => builder,
    eq: () => builder,
    // Every slug is free.
    maybeSingle: async () => ({ data: null, error: null }),
    insert: (row: Record<string, unknown>) => {
      ;(inserts[table] ??= []).push(row)
      return {
        select: () => ({ single: async () => ({ data: { id: 'school-1' }, error: null }) }),
        then: (resolve: (v: unknown) => void) => resolve({ error: null }),
      }
    },
    upsert: async (row: Record<string, unknown>) => {
      ;(upserts[table] ??= []).push(row)
      return { error: null }
    },
    delete: () => builder,
  }
  return builder
}

vi.mock('@/lib/supabase/server', () => ({
  createServiceRoleClient: () => ({
    from,
    rpc: () => Promise.resolve({ error: null }),
    auth: {
      admin: {
        createUser,
        updateUserById: async () => ({ data: {}, error: null }),
        deleteUser: async () => ({ error: null }),
      },
    },
  }),
}))
vi.mock('@/lib/admin-auth', () => ({
  verifyAdmin: vi.fn(async () => ({
    user: { id: 'operator', email: 'op@example.com' },
    error: null,
  })),
}))
vi.mock('@/lib/rate-limit', () => ({
  rateLimit: vi.fn(async () => ({ success: true, resetAt: 0 })),
  getClientIp: () => '203.0.113.1',
}))

const BASE = {
  schoolName: 'Sample Academy',
  schoolType: 'academy',
  examBoard: 'AQA',
  curriculum: ['GCSE'],
  adminFirstName: 'Sam',
  adminLastName: 'Sample',
  email: 'admin@sample.sch.uk',
  password: 'a-long-temporary-password',
}

async function register(extra: Record<string, unknown>) {
  const { POST } = await import('@/app/api/school/register/route')
  const res = await POST(
    new NextRequest('http://localhost/api/school/register', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ ...BASE, ...extra }),
    }),
  )
  return { status: res.status, body: (await res.json()) as Record<string, unknown> }
}

beforeEach(() => {
  for (const k of Object.keys(inserts)) delete inserts[k]
  for (const k of Object.keys(upserts)) delete upserts[k]
  createUser.mockClear()
})

describe('provisioning a school', () => {
  it('creates a paid school whose access ends at the close of its last day', async () => {
    const { status, body } = await register({ accessType: 'paid', accessUntil: '2099-07-31' })
    expect(status).toBe(201)
    expect(body.accessType).toBe('paid')
    const school = inserts.schools?.[0]
    expect(school?.access_type).toBe('paid')
    expect(school?.access_until).toBe('2099-07-31T23:59:59.000Z')
    expect(school?.subscription_status).toBe('active')
    expect(school?.exam_board).toBe('AQA')
  })

  it('gives the school administrator a profile role the CHECK accepts', async () => {
    await register({ accessType: 'paid', accessUntil: '2099-07-31' })
    expect(upserts.profiles?.[0]?.role).toBe('teacher')
  })

  it('refuses a paid school with no last day, a past one, or one that is not a real date', async () => {
    for (const accessUntil of [undefined, '2020-01-31', '2099-02-30', '31/07/2099']) {
      const { status } = await register({ accessType: 'paid', accessUntil })
      expect(status, String(accessUntil)).toBe(422)
    }
    expect(createUser).not.toHaveBeenCalled()
  })

  it('refuses the FOUNDER code, whose access period has ended, instead of creating a locked-out school', async () => {
    const { status, body } = await register({ promoCode: 'FOUNDER' })
    expect(status).toBe(422)
    expect(String(body.error)).toContain('2026-08-31')
    expect(createUser).not.toHaveBeenCalled()
  })

  it('refuses an access type it does not know', async () => {
    const { status } = await register({ accessType: 'lifetime' })
    expect(status).toBe(422)
  })

  it('still creates a trial school with no end date when no access type is given', async () => {
    const { status } = await register({})
    expect(status).toBe(201)
    const school = inserts.schools?.[0]
    expect(school?.access_type).toBe('trial')
    expect(school?.access_until).toBeNull()
    expect(school?.subscription_status).toBe('trialing')
  })
})
