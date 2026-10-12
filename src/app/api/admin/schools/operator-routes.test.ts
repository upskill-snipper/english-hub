/**
 * The operator's school setup routes, /api/admin/schools/**.
 *
 * Every route: site administrators only (verifyAdmin: 401 signed out, 403
 * otherwise), the school taken from the path and checked to exist (404), never
 * derived from the caller, whose only "school" is the synthetic
 * '__site_admin__'. Then each route's own rules: the AI authorisation's
 * confirmation and note, the classes' teacher as a school_members id, the
 * pupils through the same pipeline as a school's own upload.
 *
 * Table calls go to FakeSupabase (src/lib/school/__tests__/fake-supabase.ts),
 * which holds the live columns and unique keys and refuses what production
 * refuses.
 *
 * MUTATIONS RUN on 12 October 2026, each seen to fail here and then restored:
 *   - `body.confirmed !== true` loosened to `!body.confirmed`: the string
 *     'true' was accepted as a confirmation;
 *   - the class's teacher_id set from the teacher's account id instead of
 *     their school_members id: the teacher test fails.
 */

import { describe, it, expect, vi, beforeEach } from 'vitest'
import { NextRequest } from 'next/server'

import { FakeSupabase } from '@/lib/school/__tests__/fake-supabase'

const OPERATOR = { id: '0be00000-0000-4000-8000-0000000000aa', email: 'op@example.com' }

const env = vi.hoisted(() => ({
  fake: null as unknown,
  admin: { user: null as unknown, error: null as 'Unauthorized' | 'Forbidden' | null },
  audit: [] as Array<Record<string, unknown>>,
  auditFails: false,
  jobs: [] as Array<Record<string, unknown>>,
  users: [] as Array<{ id: string; email: string; supabaseUserId: string | null }>,
}))

vi.mock('@/lib/admin-auth', () => ({
  verifyAdmin: vi.fn(async () => env.admin),
}))
vi.mock('@/lib/rate-limit', () => ({
  rateLimit: vi.fn(async () => ({ success: true, resetAt: 0 })),
  getClientIp: () => '203.0.113.1',
}))
vi.mock('@/lib/supabase/server', () => ({
  createServiceRoleClient: () => env.fake,
  createServerSupabaseClient: () => {
    throw new Error('an operator route must not read through the session client')
  },
}))
vi.mock('@/lib/email', () => ({
  sendEmail: vi.fn(async () => ({ success: true, messageId: 'm-1' })),
  sendEmailBatch: vi.fn(async (m: unknown[]) => ({ sent: m.length, failed: [] })),
}))

const prismaMock = {
  auditLog: {
    create: vi.fn(async ({ data }: { data: Record<string, unknown> }) => {
      if (env.auditFails) throw new Error('simulated AuditLog failure')
      env.audit.push(data)
      return data
    }),
    findMany: vi.fn(async () =>
      env.audit.map((a) => ({ resourceId: a.resourceId, details: a.details })).reverse(),
    ),
  },
  bulkUploadJob: {
    findUnique: vi.fn(
      async ({ where }: { where: { idempotencyKey: string } }) =>
        env.jobs.find((j) => j.idempotencyKey === where.idempotencyKey) ?? null,
    ),
    create: vi.fn(async ({ data }: { data: Record<string, unknown> }) => {
      env.jobs.push({ ...data })
      return data
    }),
    update: vi.fn(
      async ({ where, data }: { where: { id: string }; data: Record<string, unknown> }) => {
        const job = env.jobs.find((j) => j.id === where.id)
        if (job) Object.assign(job, data)
        return job
      },
    ),
  },
  user: {
    findMany: vi.fn(async ({ where }: { where: { email: { in: string[] } } }) =>
      env.users.filter((u) => where.email.in.includes(u.email)),
    ),
    createMany: vi.fn(
      async ({ data }: { data: Array<{ email: string; supabaseUserId: string }> }) => {
        for (const d of data) {
          env.users.push({
            id: `ck-${env.users.length}`,
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
  prisma: new Proxy({}, { get: (_t, p) => (prismaMock as Record<string | symbol, unknown>)[p] }),
}))

import { GET as listSchools } from './route'
import { POST as authorise } from './[schoolId]/ai-authorisation/route'
import { POST as staffStep } from './[schoolId]/staff/route'
import { POST as classesStep } from './[schoolId]/classes/route'
import { POST as pupilsStep } from './[schoolId]/pupils/route'
import { AI_AUTHORISATION_STATEMENT } from '@/lib/school/ai-authorisation'

const SCHOOL = '5c400000-0000-4000-8000-000000000001'
const ELSEWHERE = '5c400000-0000-4000-8000-000000000002'
const UNKNOWN = '5c400000-0000-4000-8000-0000000000ff'

let fake: FakeSupabase

function post(path: string, body: unknown) {
  return new NextRequest(`http://localhost${path}`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(body),
  })
}
const params = (schoolId: string) => ({ params: Promise.resolve({ schoolId }) })

type Step = (req: NextRequest, p: ReturnType<typeof params>) => Promise<Response>
const STEPS: Array<[string, Step, Record<string, unknown>]> = [
  [
    'ai-authorisation',
    authorise,
    { confirmed: true, note: 'Email from the head, in the school folder' },
  ],
  [
    'staff',
    staffStep,
    { csv: 'First name,Last name,School email address,Role\nA,B,a@x.sch.uk,Teacher' },
  ],
  [
    'classes',
    classesStep,
    { csv: "Class code,Year group,Teacher's school email address,Exam board\n10A,Year 10,,AQA" },
  ],
  [
    'pupils',
    pupilsStep,
    {
      csv: 'First name,Last name,Email address,Year group,Class code\nA,B,p@x.sch.uk,Year 10,10A',
      idempotencyKey: 'operator-test-key-000001',
    },
  ],
]

beforeEach(() => {
  fake = new FakeSupabase()
  env.fake = fake
  env.admin = { user: OPERATOR, error: null }
  env.audit.length = 0
  env.auditFails = false
  env.jobs.length = 0
  env.users.length = 0
  fake.seed('schools', [
    { id: SCHOOL, name: 'Sample Academy', access_type: 'paid', access_until: '2027-07-31' },
    { id: ELSEWHERE, name: 'Another School' },
  ])
})

// ─── The gate ───────────────────────────────────────────────────────────────

describe('every route is for site administrators only', () => {
  it.each([
    ['Unauthorized', 401],
    ['Forbidden', 403],
  ] as const)('a %s caller gets %i from the list, and nothing is read', async (error, status) => {
    env.admin = { user: error === 'Forbidden' ? { id: 'someone', email: 'x@y.z' } : null, error }
    const res = await listSchools()
    expect(res.status).toBe(status)
    expect(fake.calls).toHaveLength(0)
  })

  it.each(STEPS)(
    'POST %s: 401 signed out, 403 for a non-admin, and nothing written',
    async (_name, step, body) => {
      env.admin = { user: null, error: 'Unauthorized' }
      expect((await step(post('/x', body), params(SCHOOL))).status).toBe(401)
      env.admin = { user: { id: 'teacher-1', email: 'teacher@x.sch.uk' }, error: 'Forbidden' }
      expect((await step(post('/x', body), params(SCHOOL))).status).toBe(403)
      expect(fake.calls).toHaveLength(0)
      expect(env.audit).toHaveLength(0)
    },
  )
})

describe('the school comes from the path, and must exist', () => {
  it.each(STEPS)('POST %s: 404 for a school that does not exist', async (_name, step, body) => {
    const res = await step(post('/x', body), params(UNKNOWN))
    expect(res.status).toBe(404)
    expect(fake.calls.filter((c) => c.op !== 'select')).toHaveLength(0)
  })

  it.each(STEPS)(
    "POST %s: 404 for the synthetic '__site_admin__' school, without querying",
    async (_name, step, body) => {
      const res = await step(post('/x', body), params('__site_admin__'))
      expect(res.status).toBe(404)
      expect(fake.calls).toHaveLength(0)
    },
  )
})

// ─── The list ───────────────────────────────────────────────────────────────

describe('GET /api/admin/schools', () => {
  it('lists each school with its access, authorisation and counts', async () => {
    fake.seed('school_members', [
      { school_id: SCHOOL, role: 'admin', email: 'head@x.sch.uk', invite_status: 'accepted' },
      { school_id: SCHOOL, role: 'teacher', email: 't@x.sch.uk', invite_status: 'pending' },
      {
        school_id: SCHOOL,
        role: 'student',
        email: 'p@x.sch.uk',
        invite_status: 'accepted',
        user_id: 'aaaa0000-0000-4000-8000-000000000001',
      },
    ])
    fake.seed('classes', [
      { school_id: SCHOOL, name: '10A' },
      { school_id: SCHOOL, name: 'old', is_active: false },
    ])
    const res = await listSchools()
    expect(res.status).toBe(200)
    const { schools } = await res.json()
    const sample = schools.find((s: { id: string }) => s.id === SCHOOL)
    expect(sample).toMatchObject({
      name: 'Sample Academy',
      access_type: 'paid',
      ai_authorised_at: null,
      counts: { members: 2, pendingInvites: 1, classes: 1, pupils: 1 },
      problems: [],
    })
  })

  it('shows a count it could not read as unknown, with the reason, never as 0', async () => {
    fake.failOn('classes', 'select', { code: '57014', message: 'statement timeout' })
    const { schools } = await (await listSchools()).json()
    const sample = schools.find((s: { id: string }) => s.id === SCHOOL)
    expect(sample.counts.classes).toBeNull()
    expect(sample.problems.join(' ')).toContain('statement timeout')
  })
})

// ─── AI authorisation ───────────────────────────────────────────────────────

describe('POST /api/admin/schools/[schoolId]/ai-authorisation', () => {
  const school = () => fake.rows('schools').find((s) => s.id === SCHOOL)

  it.each([
    ['no confirmation', { note: 'held in the folder' }],
    ['confirmed false', { confirmed: false, note: 'held in the folder' }],
    ['confirmed as a string', { confirmed: 'true', note: 'held in the folder' }],
    ['no note', { confirmed: true }],
    ['an empty note', { confirmed: true, note: '' }],
    ['a blank note', { confirmed: true, note: '   ' }],
    ['a note that is not text', { confirmed: true, note: 42 }],
    ['a note far too long', { confirmed: true, note: 'x'.repeat(1001) }],
  ])('refuses %s with 422 and records nothing', async (_label, body) => {
    const res = await authorise(post('/x', body), params(SCHOOL))
    expect(res.status).toBe(422)
    expect(school()?.ai_authorised_at).toBeNull()
    expect(env.audit).toHaveLength(0)
  })

  it('records the time, the operator, and the note with the statement', async () => {
    const before = Date.now()
    const res = await authorise(
      post('/x', {
        confirmed: true,
        note: '  Email from the head, 10 Nov, in the school folder  ',
      }),
      params(SCHOOL),
    )
    expect(res.status).toBe(200)
    expect(school()?.ai_authorised_by).toBe(OPERATOR.id)
    expect(new Date(school()?.ai_authorised_at as string).getTime()).toBeGreaterThanOrEqual(
      before - 1000,
    )
    expect(env.audit).toEqual([
      expect.objectContaining({
        action: 'SCHOOL_AI_AUTHORISED',
        resource: 'School',
        resourceId: SCHOOL,
        details: expect.objectContaining({
          statement: AI_AUTHORISATION_STATEMENT,
          note: 'Email from the head, 10 Nov, in the school folder',
          authorisedBy: OPERATOR.id,
        }),
      }),
    ])
  })

  it('undoes the authorisation if its note cannot be stored, and says so', async () => {
    env.auditFails = true
    const res = await authorise(
      post('/x', { confirmed: true, note: 'in the folder' }),
      params(SCHOOL),
    )
    expect(res.status).toBe(500)
    expect((await res.json()).error).toMatch(/not recorded/i)
    expect(school()?.ai_authorised_at).toBeNull()
    expect(school()?.ai_authorised_by).toBeNull()
  })

  it('touches no other school', async () => {
    await authorise(post('/x', { confirmed: true, note: 'in the folder' }), params(SCHOOL))
    expect(fake.rows('schools').find((s) => s.id === ELSEWHERE)?.ai_authorised_at).toBeNull()
  })
})

// ─── Staff ──────────────────────────────────────────────────────────────────

describe('POST /api/admin/schools/[schoolId]/staff', () => {
  it('invites each row, accepts a sheet pasted from Excel, and reports every row', async () => {
    fake.seed('school_members', [
      { school_id: ELSEWHERE, role: 'teacher', email: 'moved@x.sch.uk', invite_status: 'accepted' },
    ])
    const tsv = [
      'First name\tLast name\tSchool email address\tRole (Head of department | Teacher)\tClasses taught (class codes, comma-separated)',
      'Nia\tJones\tnia@x.sch.uk\tHead of department\t10A, 11C',
      'Sam\tMoved\tmoved@x.sch.uk\tTeacher\t',
      'Pat\tTypo\tnot-an-email\tTeacher\t',
    ].join('\n')
    const res = await staffStep(post('/x', { csv: tsv }), params(SCHOOL))
    expect(res.status).toBe(200)
    const json = await res.json()

    expect(json.totalRows).toBe(3)
    expect(json.created).toEqual([expect.objectContaining({ row: 2, subject: 'nia@x.sch.uk' })])
    expect(json.skipped).toEqual([
      expect.objectContaining({
        row: 3,
        subject: 'moved@x.sch.uk',
        detail: expect.stringMatching(/another school/),
      }),
    ])
    expect(json.failed).toEqual([expect.objectContaining({ row: 4 })])

    const here = fake.rows('school_members').filter((m) => m.school_id === SCHOOL)
    expect(here).toEqual([
      expect.objectContaining({
        email: 'nia@x.sch.uk',
        role: 'head_of_department',
        full_name: 'Nia Jones',
      }),
    ])
  })

  it('refuses a sheet whose header is missing a column, doing nothing', async () => {
    const res = await staffStep(post('/x', { csv: 'Name,Email\nA,a@x.sch.uk' }), params(SCHOOL))
    expect(res.status).toBe(422)
    expect(fake.callsTo('school_members', 'insert')).toHaveLength(0)
  })
})

// ─── Classes ────────────────────────────────────────────────────────────────

describe('POST /api/admin/schools/[schoolId]/classes', () => {
  const HEADER = "Class code,Year group,Teacher's school email address,Exam board"

  it("sets the teacher as the school_members row id, not the person's account id", async () => {
    const [teacher] = fake.seed('school_members', [
      {
        school_id: SCHOOL,
        user_id: 'acc00000-0000-4000-8000-000000000001',
        role: 'teacher',
        email: 'nia@x.sch.uk',
        invite_status: 'accepted',
      },
    ])
    const [pending] = fake.seed('school_members', [
      { school_id: SCHOOL, role: 'teacher', email: 'new@x.sch.uk', invite_status: 'pending' },
    ])
    const csv = [HEADER, '10A,Year 10,Nia@x.sch.uk,aqa', '11C,Year 11,new@x.sch.uk,Eduqas'].join(
      '\n',
    )
    const res = await classesStep(post('/x', { csv }), params(SCHOOL))
    expect(res.status).toBe(200)
    const json = await res.json()
    expect(json.failed).toEqual([])
    expect(json.created).toHaveLength(2)

    const classes = fake.rows('classes')
    expect(classes.find((c) => c.name === '10A')).toMatchObject({
      school_id: SCHOOL,
      teacher_id: teacher.id,
      year_group: 'Year 10',
      exam_board: 'AQA',
      is_active: true,
    })
    // An invited teacher who has not accepted yet already has a row to point at.
    expect(classes.find((c) => c.name === '11C')?.teacher_id).toBe(pending.id)
    expect(classes.find((c) => c.name === '10A')?.academic_year).toMatch(/^\d{4}-\d{4}$/)
  })

  it('reports a teacher not found, and still creates the class with no teacher', async () => {
    const csv = [HEADER, '10A,Year 10,nobody@x.sch.uk,AQA'].join('\n')
    const json = await (await classesStep(post('/x', { csv }), params(SCHOOL))).json()
    expect(json.created).toHaveLength(1)
    expect(json.failed).toEqual([
      expect.objectContaining({
        row: 2,
        subject: '10A',
        detail: expect.stringContaining('nobody@x.sch.uk'),
      }),
    ])
    expect(fake.rows('classes')[0].teacher_id).toBeNull()
  })

  it("updates a class by its code, leaves one that matches alone, and never another school's", async () => {
    fake.seed('classes', [
      { school_id: SCHOOL, name: '10a', exam_board: 'OCR', year_group: 'Year 10' },
      { school_id: SCHOOL, name: '11C', exam_board: 'AQA', year_group: 'Year 11' },
      { school_id: ELSEWHERE, name: '10A', exam_board: 'OCR', year_group: 'Year 10' },
    ])
    const csv = [HEADER, '10A,Year 10,,AQA', '11C,Year 11,,AQA'].join('\n')
    const json = await (await classesStep(post('/x', { csv }), params(SCHOOL))).json()
    expect(json.updated).toEqual([
      expect.objectContaining({ row: 2, detail: expect.stringContaining('OCR to AQA') }),
    ])
    expect(json.skipped).toEqual([expect.objectContaining({ row: 3 })])
    expect(fake.rows('classes').find((c) => c.school_id === ELSEWHERE)?.exam_board).toBe('OCR')
    expect(fake.rows('classes').filter((c) => c.school_id === SCHOOL)).toHaveLength(2)
  })

  it('refuses an exam board the sheet does not offer', async () => {
    const csv = [HEADER, '10A,Year 10,,WJEC'].join('\n')
    const json = await (await classesStep(post('/x', { csv }), params(SCHOOL))).json()
    expect(json.failed).toEqual([
      expect.objectContaining({ row: 2, detail: expect.stringContaining('WJEC') }),
    ])
    expect(fake.rows('classes')).toHaveLength(0)
  })
})

// ─── Pupils ─────────────────────────────────────────────────────────────────

describe('POST /api/admin/schools/[schoolId]/pupils', () => {
  const HEADER = 'First name,Last name,Email address,Year group,Class code'

  beforeEach(() => {
    fake.seed('classes', [{ school_id: SCHOOL, name: '10A' }])
  })

  it('creates, links and places each pupil, with the operator as the actor', async () => {
    const csv = [
      HEADER,
      'Alex,Morgan,alex@x.sch.uk,Year 10,10A',
      'Priya,Patel,priya@x.sch.uk,Year 10,10a',
    ].join('\n')
    const res = await pupilsStep(
      post('/x', { csv, idempotencyKey: 'operator-test-key-000002' }),
      params(SCHOOL),
    )
    expect(res.status).toBe(200)
    const json = await res.json()

    expect(json.failed).toEqual([])
    expect(json.created.map((r: { subject: string }) => r.subject)).toEqual([
      'alex@x.sch.uk',
      'priya@x.sch.uk',
    ])
    expect(json.created[0].detail).toContain('placed in 10A')
    expect(fake.rows('school_members').filter((m) => m.role === 'student')).toHaveLength(2)
    expect(fake.rows('class_students')).toHaveLength(2)
    expect(env.jobs[0]).toMatchObject({ schoolId: SCHOOL, adminUserId: OPERATOR.id })
  })

  it('refuses a row whose class does not exist before any account is made', async () => {
    const csv = [
      HEADER,
      'Alex,Morgan,alex@x.sch.uk,Year 10,10A',
      'Sam,Lost,sam@x.sch.uk,Year 10,99Z',
    ].join('\n')
    const json = await (
      await pupilsStep(
        post('/x', { csv, idempotencyKey: 'operator-test-key-000003' }),
        params(SCHOOL),
      )
    ).json()
    expect(json.created).toHaveLength(1)
    expect(json.failed).toEqual([
      expect.objectContaining({ row: 3, detail: expect.stringContaining('99Z') }),
    ])
    expect(fake.authUsers.map((u) => u.email)).toEqual(['alex@x.sch.uk'])
  })

  it('needs an idempotency key, so a repeated press cannot upload twice', async () => {
    const res = await pupilsStep(
      post('/x', { csv: `${HEADER}\nA,B,a@x.sch.uk,Year 10,10A` }),
      params(SCHOOL),
    )
    expect(res.status).toBe(422)
    expect(env.jobs).toHaveLength(0)
  })
})
