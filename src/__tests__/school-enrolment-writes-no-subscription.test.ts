import { describe, it, expect, vi, beforeEach } from 'vitest'
import { NextRequest } from 'next/server'

/**
 * Joining a school, and being put in a class, write nothing to the pupil's
 * profiles.subscription_status (12 October 2026).
 *
 * THE DEFECTS (as at d682afc1):
 *  - /api/school/join and POST /api/school/classes/[classId]/students wrote
 *    'pro' to the pupil's profile when the school's own subscription_status
 *    was 'active' or 'trialing'. That field is one per PERSON (CLAUDE.md,
 *    structural fact 2): the trial-expiry cron wiped the grant after seven
 *    days, a grant made before first sign-in never expired, and nothing took
 *    it back when the pilot ended. Calum decided a school pupil's access
 *    comes from the school's live pilot, checked at the moment of use.
 *  - /api/school/join branched on `joinCode.role`, a column that does not
 *    exist; the code's kind is `type`. Every teacher code enrolled the
 *    teacher as a pupil.
 *  - The class-enrolment route admitted any school member, a pupil included,
 *    to list, add and remove a class's pupils. Enrolment now confers AI
 *    access and can stand in for a parent's consent, so it is staff-only.
 *
 * The routes run for real against a recording stand-in for the service-role
 * client, so each assertion is about what was actually written.
 */

const USER = 'a0000000-0000-4000-8000-0000000000a1'
const SCHOOL = 'a0000000-0000-4000-8000-0000000000c3'
const CLASS = 'a0000000-0000-4000-8000-0000000000e5'

interface Op {
  table: string
  op: 'select' | 'insert' | 'update' | 'delete' | 'upsert'
  payload?: unknown
}

let ops: Op[] = []
let joinCodeRow: Record<string, unknown> = {}
let member: { school_id: string; role: string; id: string } | null = null
const verifyCalls: unknown[][] = []

function respond(op: Op, mode: 'single' | 'maybeSingle' | 'many') {
  if (op.table === 'school_members' && op.op === 'select' && mode === 'many') {
    // The pupil being enrolled is one of the school's own: since 16 October
    // 2026 only a school's own pupils can be put in its classes.
    return { data: [{ user_id: USER }], error: null }
  }
  if (op.table === 'school_join_codes' && op.op === 'select') {
    return { data: joinCodeRow, error: null }
  }
  if (op.table === 'schools' && op.op === 'update') {
    return { data: { id: SCHOOL, seats_used: 1 }, error: null }
  }
  if (op.table === 'schools' && op.op === 'select') {
    // 'active' is what triggered the old 'pro' grant, so the tests below
    // would catch it coming back.
    return { data: { seat_limit: 100, seats_used: 0, subscription_status: 'active' }, error: null }
  }
  if (op.table === 'classes' && op.op === 'select') {
    return mode === 'many'
      ? { data: [{ id: CLASS }], error: null }
      : { data: { id: CLASS }, error: null }
  }
  if (op.op === 'select' && mode !== 'many') {
    // No existing membership, enrolment or profile detail.
    return { data: null, error: { code: 'PGRST116', message: 'none' } }
  }
  if (op.op === 'insert' && op.table === 'class_students') {
    return { data: [{ id: 'row-1', student_id: USER }], error: null }
  }
  return { data: mode === 'many' ? [] : null, error: null, count: 1 }
}

vi.mock('@/lib/supabase/server', () => ({
  createServerSupabaseClient: () => ({
    auth: {
      getUser: async () => ({
        data: { user: { id: USER, email: 'person@school.example' } },
        error: null,
      }),
    },
  }),
  createServiceRoleClient: () => ({
    from(table: string) {
      const op: Op = { table, op: 'select' }
      ops.push(op)
      const chain: Record<string, unknown> = {
        select: () => chain,
        insert: (payload: unknown) => {
          op.op = 'insert'
          op.payload = payload
          return chain
        },
        update: (payload: unknown) => {
          op.op = 'update'
          op.payload = payload
          return chain
        },
        upsert: (payload: unknown) => {
          op.op = 'upsert'
          op.payload = payload
          return chain
        },
        delete: () => {
          op.op = 'delete'
          return chain
        },
        eq: () => chain,
        neq: () => chain,
        not: () => chain,
        in: () => chain,
        lt: () => chain,
        limit: () => chain,
        single: async () => respond(op, 'single'),
        maybeSingle: async () => respond(op, 'maybeSingle'),
        then: (resolve: (v: unknown) => unknown, reject: (e: unknown) => unknown) =>
          Promise.resolve(respond(op, 'many')).then(resolve, reject),
      }
      return chain
    },
    rpc: async () => ({ data: 1, error: null }),
  }),
}))

vi.mock('@/lib/rate-limit', () => ({
  rateLimit: async () => ({ success: true, remaining: 4, resetAt: Date.now() + 1000 }),
  getClientIp: () => '127.0.0.1',
}))

vi.mock('@/lib/school-auth', () => ({
  verifySchoolMember: async (...args: unknown[]) => {
    verifyCalls.push(args)
    const roles = args[1] as string[] | undefined
    if (!member) return null
    if (roles && !roles.includes(member.role)) return null
    return member
  },
}))

function request(url: string, method: string, body: unknown) {
  return new NextRequest(url, {
    method,
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(body),
  })
}

const profileWrites = () => ops.filter((o) => o.table === 'profiles' && o.op !== 'select')

beforeEach(() => {
  ops = []
  verifyCalls.length = 0
  member = null
  joinCodeRow = {
    id: 'code-1',
    code: 'JOIN42',
    is_active: true,
    max_uses: 0,
    uses: 0,
    expires_at: null,
    school_id: SCHOOL,
    class_id: null,
    type: 'student',
    // 'active' is what triggered the old 'pro' grant.
    schools: {
      id: SCHOOL,
      name: 'Eastwood',
      seat_limit: 100,
      seats_used: 0,
      subscription_status: 'active',
    },
    classes: null,
  }
})

describe('POST /api/school/join', () => {
  async function join() {
    const { POST } = await import('@/app/api/school/join/route')
    const res = await POST(request('http://localhost/api/school/join', 'POST', { code: 'join42' }))
    return { status: res.status, body: await res.json() }
  }

  it('a pupil code enrols a pupil and writes nothing to their subscription_status', async () => {
    const { status, body } = await join()
    expect(status).toBe(200)
    expect(body.role).toBe('student')
    expect(ops.some((o) => o.table === 'school_students' && o.op === 'insert')).toBe(true)
    expect(profileWrites()).toEqual([])
  })

  it('even when the code also puts them in a class', async () => {
    joinCodeRow = { ...joinCodeRow, class_id: CLASS, classes: { id: CLASS, name: '10X' } }
    const { status } = await join()
    expect(status).toBe(200)
    expect(ops.some((o) => o.table === 'class_students' && o.op === 'insert')).toBe(true)
    expect(profileWrites()).toEqual([])
  })

  it('a teacher code, recorded in `type`, makes the person staff', async () => {
    joinCodeRow = { ...joinCodeRow, type: 'teacher' }
    const { status, body } = await join()
    expect(status).toBe(200)
    expect(body.role).toBe('teacher')
    const insert = ops.find((o) => o.table === 'school_members' && o.op === 'insert')
    expect(insert?.payload).toMatchObject({ role: 'teacher', invite_status: 'accepted' })
    expect(ops.some((o) => o.table === 'school_students' && o.op === 'insert')).toBe(false)
  })

  it('reads `type`, not the `role` column that never existed', async () => {
    // A stray `role` must not decide anything: the kind of code is `type`.
    joinCodeRow = { ...joinCodeRow, type: 'student', role: 'teacher' }
    const { body } = await join()
    expect(body.role).toBe('student')
    expect(ops.some((o) => o.table === 'school_members' && o.op === 'insert')).toBe(false)
  })

  it('a code with no recognisable kind is a pupil code, never a staff one', async () => {
    joinCodeRow = { ...joinCodeRow, type: null }
    const { body } = await join()
    expect(body.role).toBe('student')
  })
})

describe('/api/school/classes/[classId]/students', () => {
  const params = { params: Promise.resolve({ classId: CLASS }) }
  async function load() {
    return import('@/app/api/school/classes/[classId]/students/route')
  }

  it('adding a pupil to a class writes nothing to their subscription_status', async () => {
    member = { school_id: SCHOOL, role: 'teacher', id: 'mem-1' }
    const { POST } = await load()
    const res = await POST(
      request(`http://localhost/api/school/classes/${CLASS}/students`, 'POST', {
        studentIds: [USER],
      }),
      params,
    )
    expect(res.status).toBe(201)
    expect(ops.some((o) => o.table === 'class_students' && o.op === 'insert')).toBe(true)
    expect(profileWrites()).toEqual([])
  })

  it.each(['GET', 'POST', 'DELETE'] as const)(
    '%s is refused to a pupil member of the school',
    async (method) => {
      member = { school_id: SCHOOL, role: 'student', id: 'mem-pupil' }
      const route = await load()
      const url = `http://localhost/api/school/classes/${CLASS}/students`
      const res =
        method === 'GET'
          ? await route.GET(new NextRequest(url), params)
          : await route[method](
              request(url, method, { studentIds: [USER], studentId: USER }),
              params,
            )
      expect(res.status).toBe(403)
      expect(ops.filter((o) => o.table === 'class_students' && o.op !== 'select')).toEqual([])
    },
  )

  it.each(['admin', 'head_of_department', 'teacher'])('is open to a %s', async (role) => {
    member = { school_id: SCHOOL, role, id: 'mem-1' }
    const { GET } = await load()
    const res = await GET(
      new NextRequest(`http://localhost/api/school/classes/${CLASS}/students`),
      params,
    )
    expect(res.status).toBe(200)
    expect(verifyCalls.at(-1)?.[1]).toEqual(['admin', 'head_of_department', 'teacher'])
  })
})
