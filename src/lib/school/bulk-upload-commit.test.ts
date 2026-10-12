/**
 * commitBulkUpload: the pupil upload both the school and the operator run.
 *
 * Against FakeSupabase (./__tests__/fake-supabase.ts), which holds the live
 * columns and unique keys of the school tables and refuses what production
 * refuses: an ON CONFLICT that names no unique key (42P10), an unknown column.
 * The defects fixed on 12 October 2026, each held here:
 *
 *   1. The member upsert named onConflict 'school_id,user_id'. The only unique
 *      key school_members has, besides its id, is (school_id, email), so
 *      Postgres refused every row: no pupil was ever linked to a school.
 *   2. The class code was required and then ignored: no pupil was placed in a
 *      class. Now each is, by classes.name, and a code with no class is
 *      reported per row, never dropped.
 *   3. The welcome email linked /login, a 404. It is /auth/login.
 *   4. Failures after the commit reached nobody. Each is in the response, per
 *      row, and on the job the upload log reads.
 *
 * MUTATIONS RUN on 12 October 2026, each made in the source and seen to fail
 * here, then restored:
 *   - the member upsert's onConflict back to 'school_id,user_id': four tests
 *     fail, every pupil refused with 42P10 exactly as production refused them;
 *   - LOGIN_URL back to /login: the welcome email test fails;
 *   - the unmatched class code not pushed: three tests fail;
 *   - the class looked up by the raw code, not classKey: six tests fail.
 */

import { describe, it, expect, vi, beforeEach } from 'vitest'

import { FakeSupabase } from './__tests__/fake-supabase'
import type { StudentRow } from './csv-parse'

const holder = vi.hoisted(() => ({ fake: null as unknown }))

vi.mock('@/lib/supabase/server', () => ({
  createServiceRoleClient: () => holder.fake,
  createServerSupabaseClient: () => {
    throw new Error('the shared upload must not read the caller session')
  },
}))

vi.mock('@/lib/email', () => ({
  sendEmail: vi.fn(async () => ({ success: true })),
  sendEmailBatch: vi.fn(async (messages: unknown[]) => ({ sent: messages.length, failed: [] })),
}))

// ─── Prisma: the job table and User rows, in memory ─────────────────────────

interface Job {
  id: string
  idempotencyKey: string
  schoolId: string
  adminUserId: string
  status: string
  createdCount: number
  updatedCount: number
  skippedCount: number
  errorCount: number
  errorsJson: unknown
  [k: string]: unknown
}

const state = vi.hoisted(() => ({
  jobs: [] as Job[],
  users: [] as Array<{ id: string; email: string; supabaseUserId: string | null }>,
  failLateJobUpdate: false,
}))

const prismaMock = {
  bulkUploadJob: {
    findUnique: vi.fn(
      async ({ where }: { where: { idempotencyKey: string } }) =>
        state.jobs.find((j) => j.idempotencyKey === where.idempotencyKey) ?? null,
    ),
    create: vi.fn(async ({ data }: { data: Partial<Job> }) => {
      const job = {
        createdCount: 0,
        updatedCount: 0,
        skippedCount: 0,
        errorCount: 0,
        errorsJson: null,
        ...data,
      } as Job
      state.jobs.push(job)
      return job
    }),
    update: vi.fn(async ({ where, data }: { where: { id: string }; data: Partial<Job> }) => {
      const job = state.jobs.find((j) => j.id === where.id)
      // The update after the commit is the only one without a status.
      if (state.failLateJobUpdate && data.status === undefined) {
        throw new Error('simulated job update failure')
      }
      if (job) Object.assign(job, data)
      return job
    }),
  },
  user: {
    findMany: vi.fn(async ({ where }: { where: { email: { in: string[] } } }) =>
      state.users.filter((u) => where.email.in.includes(u.email)),
    ),
    createMany: vi.fn(
      async ({ data }: { data: Array<{ email: string; supabaseUserId: string }> }) => {
        for (const d of data) {
          state.users.push({
            id: `ck-${state.users.length + 1}`,
            email: d.email,
            supabaseUserId: d.supabaseUserId,
          })
        }
        return { count: data.length }
      },
    ),
  },
  $transaction: vi.fn(async (cb: (tx: unknown) => Promise<unknown>) => cb(prismaMock)),
}

vi.mock('@/lib/prisma', () => ({
  prisma: new Proxy(
    {},
    { get: (_t, prop) => (prismaMock as Record<string | symbol, unknown>)[prop] },
  ),
}))

import { commitBulkUpload, type CommitBulkUploadBody } from './bulk-upload-commit'
import { sendEmailBatch } from '@/lib/email'

// ─── Fixtures ───────────────────────────────────────────────────────────────

const SCHOOL = '11111111-1111-4111-8111-111111111111'
const OTHER_SCHOOL = '22222222-2222-4222-8222-222222222222'
const OPERATOR = '33333333-3333-4333-8333-333333333333'

let fake: FakeSupabase
let keySeq = 0

function pupil(n: number, classCode: string, extra: Partial<StudentRow> = {}): StudentRow {
  return {
    row: n + 1,
    firstName: `Pupil${n}`,
    lastName: 'Example',
    email: `pupil${n}@example.school.uk`,
    yearGroup: 'Year 10',
    classCode,
    ...extra,
  }
}

async function upload(rows: StudentRow[], schoolId = SCHOOL) {
  keySeq += 1
  return commitBulkUpload({
    schoolId,
    actorUserId: OPERATOR,
    fileName: 'pupils.csv',
    idempotencyKey: `test-key-${String(keySeq).padStart(12, '0')}`,
    rows,
  })
}

function fresh(result: Awaited<ReturnType<typeof upload>>): CommitBulkUploadBody {
  expect(result.status).toBe(200)
  expect('idempotent' in result.body).toBe(false)
  return result.body as CommitBulkUploadBody
}

beforeEach(() => {
  fake = new FakeSupabase()
  holder.fake = fake
  state.jobs.length = 0
  state.users.length = 0
  state.failLateJobUpdate = false
  vi.mocked(sendEmailBatch).mockClear()
  fake.seed('schools', [
    { id: SCHOOL, name: 'Sample Academy' },
    { id: OTHER_SCHOOL, name: 'Other School' },
  ])
  fake.seed('classes', [
    { id: 'c10a0000-0000-4000-8000-000000000001', school_id: SCHOOL, name: '10A' },
    { id: 'c11c0000-0000-4000-8000-000000000002', school_id: SCHOOL, name: '11C' },
    // Same name, another school: never a match for SCHOOL's pupils.
    { id: 'c10a0000-0000-4000-8000-0000000000ff', school_id: OTHER_SCHOOL, name: '10A' },
    // Same name as a code below, but inactive.
    { id: 'c9z00000-0000-4000-8000-000000000003', school_id: SCHOOL, name: '9Z', is_active: false },
  ])
})

// ─── 1. The member link ─────────────────────────────────────────────────────

describe('the school_members link', () => {
  it('links every pupil, upserting on (school_id, email), the key the table has', async () => {
    const body = fresh(await upload([pupil(1, '10A'), pupil(2, '11C')]))

    expect(body.memberLinkFailures).toEqual([])
    const upserts = fake.callsTo('school_members', 'upsert')
    expect(upserts).toHaveLength(2)
    for (const call of upserts) expect(call.onConflict).toBe('school_id,email')

    const members = fake.rows('school_members').filter((m) => m.school_id === SCHOOL)
    expect(members).toHaveLength(2)
    for (const m of members) {
      expect(m.role).toBe('student')
      expect(m.invite_status).toBe('accepted')
      // The Supabase auth uuid, not a Prisma cuid (CLAUDE.md, structural fact 1).
      expect(fake.authUsers.map((u) => u.id)).toContain(m.user_id)
    }
  })

  it('updates the same row on a second upload instead of refusing or duplicating it', async () => {
    fresh(await upload([pupil(1, '10A')]))
    const again = fresh(await upload([pupil(1, '10A', { yearGroup: 'Year 11' })]))

    expect(again.updated).toBe(1)
    expect(again.memberLinkFailures).toEqual([])
    const members = fake
      .rows('school_members')
      .filter((m) => m.email === 'pupil1@example.school.uk')
    expect(members).toHaveLength(1)
    expect(members[0].year_group).toBe('Year 11')
  })

  it('reports a link the database refuses, per row, with its reason', async () => {
    fake.failOn(
      'school_members',
      'upsert',
      { code: '23514', message: 'new row violates check constraint' },
      (call) => (call.payload as { email?: string }).email === 'pupil2@example.school.uk',
    )
    const body = fresh(await upload([pupil(1, '10A'), pupil(2, '10A')]))

    expect(body.memberLinkFailures).toEqual([
      { row: 3, email: 'pupil2@example.school.uk', reason: 'new row violates check constraint' },
    ])
    // And the upload log counts it.
    const job = state.jobs[0]
    expect(job.errorCount).toBe(1)
    expect(job.errorsJson).toEqual([
      expect.objectContaining({ row: 3, code: 'MEMBER_LINK_FAILED' }),
    ])
  })

  it('never makes a member of staff a pupil: the row is refused before any account', async () => {
    fake.seed('school_members', [
      {
        school_id: SCHOOL,
        user_id: null,
        role: 'admin',
        email: 'head@example.school.uk',
        invite_status: 'accepted',
        full_name: 'The Head',
      },
    ])
    const body = fresh(
      await upload([pupil(1, '10A'), pupil(2, '10A', { email: 'head@example.school.uk' })]),
    )

    expect(body.skipped).toBe(1)
    expect(body.errors).toEqual([expect.objectContaining({ row: 3, code: 'INVALID_ROLE' })])
    expect(fake.authUsers.map((u) => u.email)).not.toContain('head@example.school.uk')
    const head = fake.rows('school_members').find((m) => m.email === 'head@example.school.uk')
    expect(head?.role).toBe('admin')
  })

  it('uploads nothing when the staff list cannot be read', async () => {
    fake.failOn('school_members', 'select', { code: '08006', message: 'connection failure' })
    const result = await upload([pupil(1, '10A')])
    expect(result.status).toBe(500)
    expect(state.jobs).toHaveLength(0)
    expect(fake.authUsers).toHaveLength(0)
  })
})

// ─── 2. Class places ────────────────────────────────────────────────────────

describe('class places', () => {
  it('places each pupil in the class named by their code, trimmed and in any case', async () => {
    const body = fresh(await upload([pupil(1, ' 10a '), pupil(2, '11C')]))
    const authId = (email: string) => fake.authUsers.find((u) => u.email === email)?.id

    expect(body.unmatchedClassCodes).toEqual([])
    expect(body.placementFailures).toEqual([])
    expect(fake.rows('class_students')).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          class_id: 'c10a0000-0000-4000-8000-000000000001',
          student_id: authId('pupil1@example.school.uk'),
          is_active: true,
          removed_at: null,
        }),
        expect.objectContaining({
          class_id: 'c11c0000-0000-4000-8000-000000000002',
          student_id: authId('pupil2@example.school.uk'),
        }),
      ]),
    )
    for (const call of fake.callsTo('class_students', 'upsert')) {
      expect(call.onConflict).toBe('class_id,student_id')
    }

    const enrolment = fake
      .rows('school_students')
      .find((s) => s.user_id === authId('pupil1@example.school.uk'))
    expect(enrolment).toMatchObject({
      school_id: SCHOOL,
      status: 'active',
      year_group: 'Year 10',
      class_name: '10A',
    })
    for (const call of fake.callsTo('school_students', 'upsert')) {
      expect(call.onConflict).toBe('school_id,user_id')
    }

    expect(body.outcomes.map((o) => o.placedInClass)).toEqual(['10A', '11C'])
  })

  it("recounts each touched class's student_count from its active places", async () => {
    fresh(await upload([pupil(1, '10A'), pupil(2, '10A'), pupil(3, '11C')]))
    const count = (id: string) => fake.rows('classes').find((c) => c.id === id)?.student_count
    expect(count('c10a0000-0000-4000-8000-000000000001')).toBe(2)
    expect(count('c11c0000-0000-4000-8000-000000000002')).toBe(1)

    // A second upload of the same pupils places nobody twice and counts nobody twice.
    fresh(await upload([pupil(1, '10A'), pupil(2, '10A')]))
    expect(count('c10a0000-0000-4000-8000-000000000001')).toBe(2)
    expect(fake.rows('class_students')).toHaveLength(3)
  })

  it('reports, per row, a code with no active class at this school, and places that pupil nowhere', async () => {
    const body = fresh(await upload([pupil(1, '10A'), pupil(2, 'ZZ9'), pupil(3, '9Z')]))

    // ZZ9 is no class; 9Z is inactive; another school's 10A would not count either.
    expect(body.unmatchedClassCodes).toEqual([
      { row: 3, email: 'pupil2@example.school.uk', classCode: 'ZZ9' },
      { row: 4, email: 'pupil3@example.school.uk', classCode: '9Z' },
    ])
    expect(body.created).toBe(3)
    expect(fake.rows('class_students')).toHaveLength(1)
    expect(body.outcomes.find((o) => o.row === 3)?.placedInClass).toBeUndefined()

    const job = state.jobs[0]
    expect(job.errorCount).toBe(2)
    expect(job.errorsJson).toEqual([
      expect.objectContaining({ row: 3, code: 'UNKNOWN_CLASS' }),
      expect.objectContaining({ row: 4, code: 'UNKNOWN_CLASS' }),
    ])
  })

  it('never matches a class at another school', async () => {
    fake.tables.classes = fake.rows('classes').filter((c) => c.school_id === OTHER_SCHOOL)
    const body = fresh(await upload([pupil(1, '10A')]))
    expect(body.unmatchedClassCodes).toHaveLength(1)
    expect(fake.rows('class_students')).toHaveLength(0)
  })

  it('reports a place the database refuses, and a school_students row it refuses', async () => {
    fake.failOn(
      'class_students',
      'upsert',
      { code: '23503', message: 'foreign key violation' },
      (c) =>
        fake.authUsers.find((u) => u.email === 'pupil1@example.school.uk')?.id ===
        (c.payload as { student_id?: string }).student_id,
    )
    fake.failOn(
      'school_students',
      'upsert',
      { code: '42501', message: 'permission denied' },
      (c) =>
        fake.authUsers.find((u) => u.email === 'pupil2@example.school.uk')?.id ===
        (c.payload as { user_id?: string }).user_id,
    )
    const body = fresh(await upload([pupil(1, '10A'), pupil(2, '10A')]))

    expect(body.placementFailures).toEqual([
      expect.objectContaining({ row: 2, email: 'pupil1@example.school.uk', classCode: '10A' }),
      expect.objectContaining({ row: 3, email: 'pupil2@example.school.uk', classCode: '10A' }),
    ])
    expect(body.placementFailures[0].reason).toContain('foreign key violation')
    expect(body.placementFailures[1].reason).toContain('permission denied')
  })

  it('reports a class whose count could not be updated', async () => {
    fake.failOn('classes', 'update', { code: '57014', message: 'statement timeout' })
    const body = fresh(await upload([pupil(1, '10A')]))
    expect(body.classCountFailures).toEqual([{ classCode: '10A', reason: 'statement timeout' }])
  })

  it('places nobody, and says so for every row, when the classes cannot be read', async () => {
    fake.failOn('classes', 'select', { code: '08006', message: 'connection failure' })
    const body = fresh(await upload([pupil(1, '10A'), pupil(2, '11C')]))
    expect(body.placementFailures).toHaveLength(2)
    expect(fake.rows('class_students')).toHaveLength(0)
  })
})

// ─── 3. The welcome email ───────────────────────────────────────────────────

describe('the welcome email', () => {
  it('links the sign-in page that exists, /auth/login, not the /login 404', async () => {
    fresh(await upload([pupil(1, '10A')]))
    const [messages] = vi.mocked(sendEmailBatch).mock.calls[0]
    expect(messages).toHaveLength(1)
    expect(messages[0].html).toContain('href="https://theenglishhub.app/auth/login"')
    expect(messages[0].html).not.toMatch(/theenglishhub\.app\/login/)
  })
})

// ─── 4. Nothing dropped, nothing passed off ────────────────────────────────

describe('what the response owns up to', () => {
  it('reports a row it cannot use instead of filtering it out', async () => {
    const broken = { ...pupil(2, '10A'), classCode: '   ' }
    const body = fresh(await upload([pupil(1, '10A'), broken]))
    expect(body.skipped).toBe(1)
    expect(body.errors).toEqual([expect.objectContaining({ row: 3, code: 'MISSING_REQUIRED' })])
    expect(body.outcomes).toHaveLength(2)
  })

  it('reports an account that could not be made, with the reason', async () => {
    fake.authUsers.push({ id: 'existing-auth', email: 'pupil1@example.school.uk' })
    const body = fresh(await upload([pupil(1, '10A')]))
    expect(body.errors).toEqual([
      expect.objectContaining({
        code: 'ACCOUNT_NOT_CREATED',
        message: expect.stringContaining('already been registered'),
      }),
    ])
  })

  it('says when the upload log could not take the late failures', async () => {
    state.failLateJobUpdate = true
    const body = fresh(await upload([pupil(1, 'ZZ9')]))
    expect(body.unmatchedClassCodes).toHaveLength(1)
    expect(body.failuresNotLogged).toBe(true)
  })

  it("refuses a site administrator's synthetic school before anything is made", async () => {
    const result = await upload([pupil(1, '10A')], '__site_admin__')
    expect(result.status).toBe(422)
    expect(state.jobs).toHaveLength(0)
    expect(fake.authUsers).toHaveLength(0)
  })

  it('records the actor it was given on the job', async () => {
    fresh(await upload([pupil(1, '10A')]))
    expect(state.jobs[0]).toMatchObject({ adminUserId: OPERATOR, schoolId: SCHOOL })
  })
})
