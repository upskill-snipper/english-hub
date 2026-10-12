import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { fakeSupabaseTables, daysFromNow, type FakeTable } from './helpers/fake-supabase-tables'

/**
 * getPupilSchoolAccess: is this person a pupil of a school whose access is
 * live, and has that school recorded its authorisation for AI marking?
 *
 * Calum decided on 12 October 2026 that a school pupil's AI access comes from
 * the school's live pilot, checked at the moment of use, and that a school's
 * recorded AI authorisation stands in for the per-pupil parental step. Both
 * the paid-access choke point and the consent gate ask this one function, so
 * it is driven here against a fake of the four tables it reads, with the REAL
 * isSchoolAccessActive rule from src/lib/school-access.ts deciding liveness.
 */

const PUPIL = '0a6b2f4e-1c3d-4e5f-8a9b-0c1d2e3f4a5b'
const SCHOOL_A = '11111111-1111-4111-8111-111111111111'
const SCHOOL_B = '22222222-2222-4222-8222-222222222222'

let tables: Record<string, FakeTable> = {}
let fake = fakeSupabaseTables(tables)
let clientThrows = false

vi.mock('@/lib/supabase/server', () => ({
  createServiceRoleClient: () => {
    if (clientThrows) throw new Error('service role key missing')
    return fake.client
  },
  createServerSupabaseClient: () => fake.client,
}))

import { getPupilSchoolAccess } from '@/lib/school-entitlement'

/** A school row whose access is live: a paid pilot ending in thirty days. */
function liveSchool(id: string, over: Record<string, unknown> = {}) {
  return {
    id,
    access_type: 'paid',
    access_until: daysFromNow(30),
    subscription_status: 'active',
    ai_authorised_at: null,
    ...over,
  }
}

function setTables(next: Record<string, FakeTable>) {
  tables = {
    school_members: { rows: [] },
    school_students: { rows: [] },
    class_students: { rows: [] },
    schools: { rows: [] },
    ...next,
  }
  fake = fakeSupabaseTables(tables)
}

let errorSpy: ReturnType<typeof vi.spyOn>

beforeEach(() => {
  clientThrows = false
  setTables({})
  errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {})
})

afterEach(() => {
  errorSpy.mockRestore()
})

// ─── The three ways of being a pupil ───────────────────────────────────────

describe('the three ways of being a pupil of a school', () => {
  it('an accepted school_members row with role student (bulk upload)', async () => {
    setTables({
      school_members: {
        rows: [{ user_id: PUPIL, school_id: SCHOOL_A, role: 'student', invite_status: 'accepted' }],
      },
      schools: { rows: [liveSchool(SCHOOL_A)] },
    })
    await expect(getPupilSchoolAccess(PUPIL)).resolves.toEqual({
      schoolId: SCHOOL_A,
      aiAuthorised: false,
    })
  })

  it('an active school_students row (join code)', async () => {
    setTables({
      school_students: { rows: [{ user_id: PUPIL, school_id: SCHOOL_A, status: 'active' }] },
      schools: { rows: [liveSchool(SCHOOL_A)] },
    })
    await expect(getPupilSchoolAccess(PUPIL)).resolves.toEqual({
      schoolId: SCHOOL_A,
      aiAuthorised: false,
    })
  })

  it('an active class_students row in an active class (class enrolment)', async () => {
    setTables({
      class_students: {
        rows: [
          {
            student_id: PUPIL,
            class_id: 'class-1',
            is_active: true,
            classes: { school_id: SCHOOL_A, is_active: true },
          },
        ],
      },
      schools: { rows: [liveSchool(SCHOOL_A)] },
    })
    await expect(getPupilSchoolAccess(PUPIL)).resolves.toEqual({
      schoolId: SCHOOL_A,
      aiAuthorised: false,
    })
  })

  it('is not fooled by rows that are not a live pupil membership', async () => {
    setTables({
      school_members: {
        rows: [
          // Staff, not a pupil.
          { user_id: PUPIL, school_id: SCHOOL_A, role: 'teacher', invite_status: 'accepted' },
          // An invitation nobody has accepted.
          { user_id: PUPIL, school_id: SCHOOL_A, role: 'student', invite_status: 'pending' },
        ],
      },
      // Removed from the school.
      school_students: { rows: [{ user_id: PUPIL, school_id: SCHOOL_A, status: 'removed' }] },
      class_students: {
        rows: [
          // Taken out of the class.
          {
            student_id: PUPIL,
            class_id: 'c1',
            is_active: false,
            classes: { school_id: SCHOOL_A, is_active: true },
          },
          // A class that has been closed.
          {
            student_id: PUPIL,
            class_id: 'c2',
            is_active: true,
            classes: { school_id: SCHOOL_A, is_active: false },
          },
        ],
      },
      schools: { rows: [liveSchool(SCHOOL_A)] },
    })
    await expect(getPupilSchoolAccess(PUPIL)).resolves.toBeNull()
  })

  it('answers null for someone with no school at all, and does not ask about schools', async () => {
    await expect(getPupilSchoolAccess(PUPIL)).resolves.toBeNull()
    expect(fake.calls.map((c) => c.table)).not.toContain('schools')
  })

  it('reads each membership table keyed on the Supabase uuid it was given', async () => {
    await getPupilSchoolAccess(PUPIL)
    const keyed = Object.fromEntries(
      fake.calls.map((c) => [c.table, c.filters.find(([, col]) => col.endsWith('_id'))]),
    )
    expect(keyed.school_members).toEqual(['eq', 'user_id', PUPIL])
    expect(keyed.school_students).toEqual(['eq', 'user_id', PUPIL])
    expect(keyed.class_students).toEqual(['eq', 'student_id', PUPIL])
  })
})

// ─── The school must be live ───────────────────────────────────────────────

describe('the school must be live by the one rule in school-access.ts', () => {
  const pupilOf = (school: Record<string, unknown>) =>
    setTables({
      school_students: { rows: [{ user_id: PUPIL, school_id: SCHOOL_A, status: 'active' }] },
      schools: { rows: [school] },
    })

  it('a school whose last day has passed gives its pupils nothing', async () => {
    pupilOf(liveSchool(SCHOOL_A, { access_until: daysFromNow(-1) }))
    await expect(getPupilSchoolAccess(PUPIL)).resolves.toBeNull()
  })

  it('nor does a school marked expired', async () => {
    pupilOf(liveSchool(SCHOOL_A, { access_type: 'expired', access_until: null }))
    await expect(getPupilSchoolAccess(PUPIL)).resolves.toBeNull()
  })

  it('a trial school is live until its end', async () => {
    pupilOf(liveSchool(SCHOOL_A, { access_type: 'trial', access_until: daysFromNow(3) }))
    await expect(getPupilSchoolAccess(PUPIL)).resolves.toEqual({
      schoolId: SCHOOL_A,
      aiAuthorised: false,
    })
  })
})

// ─── The school's AI authorisation ─────────────────────────────────────────

describe('aiAuthorised', () => {
  it('is true when the school has recorded ai_authorised_at', async () => {
    setTables({
      school_students: { rows: [{ user_id: PUPIL, school_id: SCHOOL_A, status: 'active' }] },
      schools: { rows: [liveSchool(SCHOOL_A, { ai_authorised_at: '2026-10-12T09:00:00Z' })] },
    })
    await expect(getPupilSchoolAccess(PUPIL)).resolves.toEqual({
      schoolId: SCHOOL_A,
      aiAuthorised: true,
    })
  })

  it('is false when it has not', async () => {
    setTables({
      school_students: { rows: [{ user_id: PUPIL, school_id: SCHOOL_A, status: 'active' }] },
      schools: { rows: [liveSchool(SCHOOL_A, { ai_authorised_at: null })] },
    })
    await expect(getPupilSchoolAccess(PUPIL)).resolves.toMatchObject({ aiAuthorised: false })
  })

  it('is false for a value that is not a timestamp: fail closed', async () => {
    setTables({
      school_students: { rows: [{ user_id: PUPIL, school_id: SCHOOL_A, status: 'active' }] },
      schools: { rows: [liveSchool(SCHOOL_A, { ai_authorised_at: 'yes' })] },
    })
    await expect(getPupilSchoolAccess(PUPIL)).resolves.toMatchObject({ aiAuthorised: false })
  })

  it('one school’s authorisation never stands in for another live school that has not given one', async () => {
    setTables({
      school_students: {
        rows: [
          { user_id: PUPIL, school_id: SCHOOL_A, status: 'active' },
          { user_id: PUPIL, school_id: SCHOOL_B, status: 'active' },
        ],
      },
      schools: {
        rows: [
          liveSchool(SCHOOL_A, { ai_authorised_at: '2026-10-12T09:00:00Z' }),
          liveSchool(SCHOOL_B, { ai_authorised_at: null }),
        ],
      },
    })
    await expect(getPupilSchoolAccess(PUPIL)).resolves.toEqual({
      schoolId: SCHOOL_B,
      aiAuthorised: false,
    })
  })

  it('but an expired second school does not hold back a live, authorised one', async () => {
    setTables({
      school_students: {
        rows: [
          { user_id: PUPIL, school_id: SCHOOL_A, status: 'active' },
          { user_id: PUPIL, school_id: SCHOOL_B, status: 'active' },
        ],
      },
      schools: {
        rows: [
          liveSchool(SCHOOL_A, { ai_authorised_at: '2026-10-12T09:00:00Z' }),
          liveSchool(SCHOOL_B, { access_until: daysFromNow(-2) }),
        ],
      },
    })
    await expect(getPupilSchoolAccess(PUPIL)).resolves.toEqual({
      schoolId: SCHOOL_A,
      aiAuthorised: true,
    })
  })
})

// ─── Failing closed ────────────────────────────────────────────────────────

describe('any read that fails means "not a school pupil"', () => {
  const memberRows = {
    school_members: {
      rows: [{ user_id: PUPIL, school_id: SCHOOL_A, role: 'student', invite_status: 'accepted' }],
    },
    schools: { rows: [liveSchool(SCHOOL_A, { ai_authorised_at: '2026-10-12T09:00:00Z' })] },
  }

  it.each(['school_members', 'school_students', 'class_students', 'schools'])(
    'a failed read of %s answers null and is logged under the marker',
    async (table) => {
      setTables({ ...memberRows, [table]: { error: { code: '42P17', message: 'boom' } } })
      await expect(getPupilSchoolAccess(PUPIL)).resolves.toBeNull()
      expect(errorSpy).toHaveBeenCalledWith(
        expect.stringContaining('SCHOOL_ENTITLEMENT_READ_FAILED'),
        expect.objectContaining({ source: table }),
      )
    },
  )

  it('a client that throws answers null rather than throwing', async () => {
    clientThrows = true
    await expect(getPupilSchoolAccess(PUPIL)).resolves.toBeNull()
  })

  it('a Prisma cuid is refused before any query: the two identities are crossed', async () => {
    await expect(getPupilSchoolAccess('clx9z8y7w6v5u4t3s2r1q0p')).resolves.toBeNull()
    expect(fake.calls).toEqual([])
    expect(errorSpy).toHaveBeenCalledWith(
      expect.stringContaining('SCHOOL_ENTITLEMENT_READ_FAILED'),
      expect.objectContaining({ code: 'not_a_uuid' }),
    )
  })
})
