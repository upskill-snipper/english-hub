import { describe, it, expect, vi, beforeEach } from 'vitest'
import { Prisma } from '@prisma/client'

/**
 * Identity projection - the safety properties.
 *
 * A projection makes a Supabase-native account ADDRESSABLE in Prisma. The
 * whole risk of this change is that it becomes PERMISSIVE instead: the
 * prepared backfill script, run as written, would have written an invented
 * date of birth that computes to an adult age and so switched the parental
 * consent gate OFF for children. These tests pin the projection to
 * "addressable, never permissive".
 */

// ─── In-memory Prisma ───────────────────────────────────────────────────

interface UserRow {
  id: string
  supabaseUserId: string | null
  email: string
  passwordHash: string
  firstName: string
  lastName: string
  dateOfBirth: Date | null
  country: string | null
  school: string | null
  role: string
  selectedExamBoard: string | null
  isMinor: boolean
  accountStatus: string
  parentId: string | null
  linkedTeacherId: string | null
  createdAt: Date
  lastLoginAt: Date | null
}

const db: { users: UserRow[] } = { users: [] }
const userCreateCalls: Record<string, unknown>[] = []

/** Throws the way Prisma throws on a unique-constraint violation. */
function uniqueViolation(target: string) {
  return new Prisma.PrismaClientKnownRequestError('Unique constraint failed', {
    code: 'P2002',
    clientVersion: 'test',
    meta: { target: [target] },
  })
}

const consentCreate = vi.fn()
const subscriptionCreate = vi.fn()
const subscriptionUpsert = vi.fn()

vi.mock('@/lib/prisma', () => ({
  prisma: {
    user: {
      findFirst: vi.fn(async ({ where }: { where: { supabaseUserId?: string } }) => {
        if (!where?.supabaseUserId) return null
        return db.users.find((u) => u.supabaseUserId === where.supabaseUserId) ?? null
      }),
      findUnique: vi.fn(async ({ where }: { where: { id?: string; email?: string } }) => {
        if (where?.id) return db.users.find((u) => u.id === where.id) ?? null
        if (where?.email) return db.users.find((u) => u.email === where.email) ?? null
        return null
      }),
      create: vi.fn(async ({ data }: { data: Record<string, unknown> }) => {
        userCreateCalls.push(data)
        if (db.users.some((u) => u.email === data.email)) throw uniqueViolation('email')
        if (db.users.some((u) => u.supabaseUserId === data.supabaseUserId)) {
          throw uniqueViolation('supabaseUserId')
        }
        const row: UserRow = {
          id: `cuid_${db.users.length + 1}`,
          supabaseUserId: null,
          email: '',
          passwordHash: '',
          firstName: '',
          lastName: '',
          dateOfBirth: null,
          country: null,
          school: null,
          role: 'STUDENT',
          selectedExamBoard: null,
          isMinor: false,
          accountStatus: 'ACTIVE',
          parentId: null,
          linkedTeacherId: null,
          createdAt: new Date(),
          lastLoginAt: null,
          ...(data as Partial<UserRow>),
        }
        db.users.push(row)
        return row
      }),
      update: vi.fn(
        async ({ where, data }: { where: { id: string }; data: Record<string, unknown> }) => {
          const row = db.users.find((u) => u.id === where.id)
          if (!row) throw new Error('not found')
          Object.assign(row, data)
          return row
        },
      ),
    },
    consent: { create: consentCreate },
    subscription: { create: subscriptionCreate, upsert: subscriptionUpsert },
    auditLog: { create: vi.fn() },
  },
}))

// ─── Supabase service-role client ───────────────────────────────────────

const profileRow = vi.fn((): Record<string, unknown> | null => null)
const authUserRow = vi.fn((): Record<string, unknown> | null => null)

/** Any write through the service-role client is a failure, not a fixture. */
const supabaseWrite = vi.fn(() => {
  throw new Error('identity must never write to Supabase')
})

const fromCalls: string[] = []

vi.mock('@/lib/supabase/server', () => ({
  createServiceRoleClient: () => ({
    from: (table: string) => {
      fromCalls.push(table)
      return {
        select: () => ({
          eq: () => ({
            maybeSingle: async () => ({ data: profileRow(), error: null }),
            single: async () => ({ data: profileRow(), error: null }),
          }),
        }),
        insert: supabaseWrite,
        update: supabaseWrite,
        upsert: supabaseWrite,
        delete: supabaseWrite,
      }
    },
    auth: {
      admin: {
        getUserById: async () => {
          const user = authUserRow()
          return { data: { user }, error: user ? null : { message: 'not found' } }
        },
      },
    },
  }),
  createServerSupabaseClient: () => ({ auth: { getUser: vi.fn() } }),
}))

// ─── Helpers ────────────────────────────────────────────────────────────

const UUID = '11111111-2222-3333-4444-555555555555'
const OTHER_UUID = '99999999-8888-7777-6666-555555555555'

function yearsAgoIso(years: number): string {
  const d = new Date()
  d.setUTCFullYear(d.getUTCFullYear() - years)
  return d.toISOString().slice(0, 10)
}

beforeEach(() => {
  db.users = []
  userCreateCalls.length = 0
  fromCalls.length = 0
  profileRow.mockReturnValue(null)
  authUserRow.mockReturnValue({
    id: UUID,
    email: 'Learner@Example.com',
    created_at: '2026-01-15T09:00:00.000Z',
    user_metadata: {},
  })
  consentCreate.mockClear()
  subscriptionCreate.mockClear()
  subscriptionUpsert.mockClear()
  supabaseWrite.mockClear()
})

// ─── Tests ──────────────────────────────────────────────────────────────

describe('projectSupabaseUser - grants nothing', () => {
  it('creates a row that carries no consent, no parent link and no subscription', async () => {
    const { projectSupabaseUser } = await import('@/lib/identity')
    const result = await projectSupabaseUser({
      id: UUID,
      email: 'Learner@Example.com',
      created_at: '2026-01-15T09:00:00.000Z',
      user_metadata: {},
    })

    expect(result.created).toBe(true)
    expect(db.users).toHaveLength(1)

    // SAFETY RULE 1: a projection makes the ledger addressable. It never
    // makes it permissive.
    expect(consentCreate).not.toHaveBeenCalled()
    expect(subscriptionCreate).not.toHaveBeenCalled()
    expect(subscriptionUpsert).not.toHaveBeenCalled()
    expect(supabaseWrite).not.toHaveBeenCalled()

    const payload = userCreateCalls[0]
    expect(payload.parentId).toBeUndefined()
    expect(payload.linkedTeacherId).toBeUndefined()
    expect(db.users[0].parentId).toBeNull()
    expect(db.users[0].lastLoginAt).toBeNull()

    // Only `profiles` is ever read, and only read.
    expect(fromCalls.every((t) => t === 'profiles')).toBe(true)
    expect(fromCalls).not.toContain('parental_consents')
  })

  it('never invents a date of birth or a country', async () => {
    const { projectSupabaseUser } = await import('@/lib/identity')
    await projectSupabaseUser({ id: UUID, email: 'learner@example.com', user_metadata: {} })

    const payload = userCreateCalls[0]
    expect(payload.dateOfBirth).toBeNull()
    expect(payload.country).toBeNull()

    // The 2026-04-20 backfill wrote this date when it could not find one. It
    // computes to an adult age, which is how the parental gate was opened
    // for children. It must appear nowhere in the payload.
    expect(JSON.stringify(payload)).not.toContain('2000-01-01')
  })

  it('takes the protective isMinor posture when the date of birth is unknown', async () => {
    const { projectSupabaseUser } = await import('@/lib/identity')
    const result = await projectSupabaseUser({ id: UUID, email: 'learner@example.com' })

    // `false` is the permissive value and must never be written on a guess.
    expect(userCreateCalls[0].isMinor).toBe(true)
    expect(result.isMinorPosture).toBe(true)
    expect(result.dateOfBirthUnknown).toBe(true)
  })

  it('never derives a name from the email local part', async () => {
    profileRow.mockReturnValue({ id: UUID, full_name: null, created_at: null })

    const { projectSupabaseUser } = await import('@/lib/identity')
    await projectSupabaseUser({ id: UUID, email: 'jane.doe.1998@example.com' })

    expect(userCreateCalls[0].firstName).toBe('')
    expect(userCreateCalls[0].lastName).toBe('')
  })
})

describe('projectSupabaseUser - honest field derivation', () => {
  it('copies the real date of birth from profiles and derives isMinor from it', async () => {
    profileRow.mockReturnValue({
      id: UUID,
      full_name: 'Amira Khan',
      date_of_birth: yearsAgoIso(14),
      role: 'student',
      school_name: 'Northgate High',
      exam_board: 'Edexcel',
      created_at: '2026-02-01T00:00:00.000Z',
    })

    const { projectSupabaseUser } = await import('@/lib/identity')
    await projectSupabaseUser({ id: UUID, email: 'AMIRA@example.com' })

    const payload = userCreateCalls[0]
    expect(payload.firstName).toBe('Amira')
    expect(payload.lastName).toBe('Khan')
    expect(payload.email).toBe('amira@example.com')
    expect(payload.isMinor).toBe(true)
    expect(payload.school).toBe('Northgate High')
    expect(payload.selectedExamBoard).toBe('EDEXCEL')
    expect((payload.dateOfBirth as Date).toISOString().slice(0, 10)).toBe(yearsAgoIso(14))
    // createdAt comes from the profile, not from @default(now()): letting the
    // default fire would reset the 730-day dormancy clock.
    expect((payload.createdAt as Date).toISOString()).toBe('2026-02-01T00:00:00.000Z')
  })

  it('refuses to map an exam board it cannot map exactly, and never grants ADMIN', async () => {
    profileRow.mockReturnValue({
      id: UUID,
      exam_board: 'WJEC',
      role: 'admin',
      created_at: null,
    })

    const { projectSupabaseUser } = await import('@/lib/identity')
    await projectSupabaseUser({ id: UUID, email: 'learner@example.com' })

    expect(userCreateCalls[0].selectedExamBoard).toBeNull()
    expect(userCreateCalls[0].role).toBe('STUDENT')
  })

  it('stores no credential of its own', async () => {
    const { projectSupabaseUser, SUPABASE_MANAGED_SENTINEL } = await import('@/lib/identity')
    await projectSupabaseUser({ id: UUID, email: 'learner@example.com' })

    expect(userCreateCalls[0].passwordHash).toBe(SUPABASE_MANAGED_SENTINEL)
    // The sentinel cannot parse as bcrypt, so a comparison fails closed.
    expect(String(userCreateCalls[0].passwordHash).startsWith('$2')).toBe(false)
  })
})

describe('projectSupabaseUser - existing rows', () => {
  it('adopts an unlinked row by email, writing only supabaseUserId', async () => {
    db.users.push({
      id: 'cuid_existing',
      supabaseUserId: null,
      email: 'learner@example.com',
      passwordHash: 'SUPABASE_MANAGED',
      firstName: 'Existing',
      lastName: 'Learner',
      dateOfBirth: new Date('2010-05-05T00:00:00.000Z'),
      country: 'GB',
      school: null,
      role: 'STUDENT',
      selectedExamBoard: null,
      isMinor: true,
      accountStatus: 'ACTIVE',
      parentId: null,
      linkedTeacherId: null,
      createdAt: new Date('2025-01-01T00:00:00.000Z'),
      lastLoginAt: null,
    })

    const { projectSupabaseUser } = await import('@/lib/identity')
    const result = await projectSupabaseUser({ id: UUID, email: 'learner@example.com' })

    expect(result.adopted).toBe(true)
    expect(result.prismaUserId).toBe('cuid_existing')
    expect(userCreateCalls).toHaveLength(0)
    // Adoption writes exactly one column.
    expect(db.users[0].supabaseUserId).toBe(UUID)
    expect(db.users[0].isMinor).toBe(true)
    expect(db.users[0].firstName).toBe('Existing')
    expect(db.users[0].dateOfBirth?.toISOString()).toBe('2010-05-05T00:00:00.000Z')
  })

  it('refuses to re-link a row that belongs to a different Supabase user', async () => {
    db.users.push({
      id: 'cuid_existing',
      supabaseUserId: OTHER_UUID,
      email: 'learner@example.com',
      passwordHash: 'SUPABASE_MANAGED',
      firstName: 'Someone',
      lastName: 'Else',
      dateOfBirth: null,
      country: null,
      school: null,
      role: 'STUDENT',
      selectedExamBoard: null,
      isMinor: true,
      accountStatus: 'ACTIVE',
      parentId: null,
      linkedTeacherId: null,
      createdAt: new Date(),
      lastLoginAt: null,
    })

    const { projectSupabaseUser, IdentityConflict } = await import('@/lib/identity')

    await expect(
      projectSupabaseUser({ id: UUID, email: 'learner@example.com' }),
    ).rejects.toBeInstanceOf(IdentityConflict)

    expect(db.users[0].supabaseUserId).toBe(OTHER_UUID)
    expect(userCreateCalls).toHaveLength(0)
  })

  it('returns one row when two requests project the same account in parallel', async () => {
    const { projectSupabaseUser } = await import('@/lib/identity')

    const [a, b] = await Promise.all([
      projectSupabaseUser({ id: UUID, email: 'learner@example.com' }),
      projectSupabaseUser({ id: UUID, email: 'learner@example.com' }),
    ])

    expect(db.users).toHaveLength(1)
    expect(a.prismaUserId).toBe(b.prismaUserId)
  })

  it('refuses to project an account with no email rather than inventing one', async () => {
    const { projectSupabaseUser, IdentityUnresolved } = await import('@/lib/identity')

    await expect(projectSupabaseUser({ id: UUID, email: null })).rejects.toBeInstanceOf(
      IdentityUnresolved,
    )
    expect(db.users).toHaveLength(0)
  })
})

describe('requirePrismaUserId / tryPrismaUserId', () => {
  it('projects just in time from a bare Supabase uuid', async () => {
    const { requirePrismaUserId } = await import('@/lib/identity')
    const id = await requirePrismaUserId(UUID)

    expect(db.users).toHaveLength(1)
    expect(id).toBe(db.users[0].id)
  })

  it('throws when there is no auth record to project from', async () => {
    authUserRow.mockReturnValue(null)

    const { requirePrismaUserId, IdentityUnresolved } = await import('@/lib/identity')
    await expect(requirePrismaUserId(UUID)).rejects.toBeInstanceOf(IdentityUnresolved)
  })

  it('returns null instead of throwing for best-effort read callers', async () => {
    authUserRow.mockReturnValue(null)

    const { tryPrismaUserId } = await import('@/lib/identity')
    await expect(tryPrismaUserId(UUID)).resolves.toBeNull()
  })
})

describe('resolveAgeBand', () => {
  it('reads the exact age from profiles.date_of_birth', async () => {
    profileRow.mockReturnValue({ id: UUID, date_of_birth: yearsAgoIso(14), is_minor: false })

    const { resolveAgeBand } = await import('@/lib/identity')
    await expect(resolveAgeBand(UUID)).resolves.toBe('UNDER_16')
  })

  it('treats 16 and over as consenting for themselves', async () => {
    profileRow.mockReturnValue({ id: UUID, date_of_birth: yearsAgoIso(17), is_minor: true })

    const { resolveAgeBand } = await import('@/lib/identity')
    await expect(resolveAgeBand(UUID)).resolves.toBe('SIXTEEN_OR_OVER')
  })

  it('does NOT treat profiles.is_minor === false as evidence of adulthood', async () => {
    // The column is NOT NULL DEFAULT false and its only writer ever writes
    // `true`, so a `false` carries no information about age at all.
    profileRow.mockReturnValue({ id: UUID, date_of_birth: null, is_minor: false })

    const { resolveAgeBand } = await import('@/lib/identity')
    await expect(resolveAgeBand(UUID)).resolves.toBe('UNKNOWN')
  })

  it('treats profiles.is_minor === true as a child of imprecise age', async () => {
    profileRow.mockReturnValue({ id: UUID, date_of_birth: null, is_minor: true })

    const { resolveAgeBand, requiresGuardianConsent } = await import('@/lib/identity')
    const band = await resolveAgeBand(UUID)
    expect(band).toBe('UNDER_18_IMPRECISE')
    expect(requiresGuardianConsent(band)).toBe(true)
  })

  it('refuses to read an age from the 2000-01-01 placeholder', async () => {
    db.users.push({
      id: 'cuid_placeholder',
      supabaseUserId: UUID,
      email: 'learner@example.com',
      passwordHash: 'SUPABASE_MANAGED',
      firstName: '',
      lastName: '',
      dateOfBirth: new Date('2000-01-01T00:00:00.000Z'),
      country: null,
      school: null,
      role: 'STUDENT',
      selectedExamBoard: null,
      isMinor: false,
      accountStatus: 'ACTIVE',
      parentId: null,
      linkedTeacherId: null,
      createdAt: new Date(),
      lastLoginAt: null,
    })

    const { resolveAgeBand } = await import('@/lib/identity')
    await expect(resolveAgeBand(UUID)).resolves.toBe('UNKNOWN')
  })

  it('is UNKNOWN when there is no profiles row at all', async () => {
    const { resolveAgeBand } = await import('@/lib/identity')
    await expect(resolveAgeBand(UUID)).resolves.toBe('UNKNOWN')
  })
})
