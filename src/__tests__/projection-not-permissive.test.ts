import { describe, it, expect, vi, beforeEach } from 'vitest'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'

/**
 * A projection makes an account ADDRESSABLE. It must never make a gate
 * PERMISSIVE.
 *
 * Two code paths used to write an invented profile for a real person -
 * `firstName: 'Pending'`, `country: 'GB'`, `dateOfBirth: 2000-01-01` and
 * `isMinor: false` - one in the admin verify-user route and one in the
 * prepared backfill script. The invented date computes to an adult age, and
 * the parental-consent gate treated it as conclusive, so running either
 * would have switched child protections off for whoever held the account.
 *
 * These tests pin the two halves of the fix:
 *   1. neither path writes invented personal data any more, and
 *   2. an account whose age is not known is still BLOCKED - proved against
 *      the real gate, not a source scan.
 */

// ─── Mocks for the behavioural half ─────────────────────────────────────

const mockReadIdentityProfile = vi.fn()
const mockFindExistingUser = vi.fn()
const mockTryPrismaUserId = vi.fn()

vi.mock('@/lib/identity', async () => {
  const age = await vi.importActual<typeof import('@/lib/identity/age')>('@/lib/identity/age')
  return {
    ...age,
    // resolveAgeBand and requiresGuardianConsent stay REAL: they are the
    // logic under test. Only their two data reads are mocked.
    readIdentityProfile: (...args: unknown[]) => mockReadIdentityProfile(...args),
    findExistingUser: (...args: unknown[]) => mockFindExistingUser(...args),
    tryPrismaUserId: (...args: unknown[]) => mockTryPrismaUserId(...args),
  }
})

vi.mock('@/lib/identity/profiles', () => ({
  readIdentityProfile: (...args: unknown[]) => mockReadIdentityProfile(...args),
}))

vi.mock('@/lib/identity/lookup', () => ({
  findExistingUser: (...args: unknown[]) => mockFindExistingUser(...args),
}))

const mockUserFindUnique = vi.fn()

vi.mock('@/lib/prisma', () => ({
  prisma: {
    user: { findUnique: (...args: unknown[]) => mockUserFindUnique(...args) },
    consent: { findFirst: vi.fn().mockResolvedValue(null) },
    parentalConsent: { findFirst: vi.fn().mockResolvedValue(null) },
  },
}))

const supabaseChain = {
  select: vi.fn(() => supabaseChain),
  eq: vi.fn(() => supabaseChain),
  limit: vi.fn(() => supabaseChain),
  single: vi.fn().mockResolvedValue({ data: null, error: { message: 'none' } }),
  maybeSingle: vi.fn().mockResolvedValue({ data: null, error: null }),
}

vi.mock('@/lib/supabase/server', () => ({
  createServerSupabaseClient: () => ({ from: () => supabaseChain }),
  createServiceRoleClient: () => ({ from: () => supabaseChain }),
}))

beforeEach(() => {
  vi.clearAllMocks()
  mockReadIdentityProfile.mockResolvedValue(null)
  mockFindExistingUser.mockResolvedValue(null)
  mockUserFindUnique.mockResolvedValue(null)
})

// ─── 1. No invented personal data is written ────────────────────────────

describe('no projection path invents personal data', () => {
  const paths = ['src/app/api/admin/verify-user/route.ts', 'scripts/backfill-prisma-users.mjs']

  for (const path of paths) {
    const source = readFileSync(join(process.cwd(), path), 'utf8')
    // Strip comments so the explanations of the old defect (which quote it)
    // do not trip the scan. Only executable code is examined.
    const code = source
      .replace(/\/\*[\s\S]*?\*\//g, '')
      .split('\n')
      .filter((line) => !line.trim().startsWith('//'))
      .join('\n')

    it(`${path} never writes isMinor: false`, () => {
      expect(code).not.toMatch(/isMinor:\s*false/)
    })

    it(`${path} never writes a placeholder date of birth`, () => {
      expect(code).not.toMatch(/Date\.UTC\(\s*2000\s*,\s*0\s*,\s*1\s*\)/)
      expect(code).not.toMatch(/dateOfBirth:\s*PLACEHOLDER_DOB\b/)
    })

    it(`${path} never writes an invented name or country`, () => {
      expect(code).not.toMatch(/firstName:\s*'Pending'/)
      expect(code).not.toMatch(/lastName:\s*'Setup'/)
      expect(code).not.toMatch(/country:\s*'GB'/)
    })
  }

  it('the backfill script reads the profiles row that signup actually writes', () => {
    const source = readFileSync(join(process.cwd(), 'scripts/backfill-prisma-users.mjs'), 'utf8')
    expect(source).toMatch(/from\('profiles'\)/)
    expect(source).toMatch(/date_of_birth/)
  })

  it('the admin route delegates to the identity module rather than creating a row', () => {
    const source = readFileSync(
      join(process.cwd(), 'src/app/api/admin/verify-user/route.ts'),
      'utf8',
    )
    expect(source).toContain('projectSupabaseUser')
    expect(source).not.toMatch(/prisma\s*\.\s*user\s*\.\s*create\s*\(/)
  })
})

// ─── 2. A child without guardian consent is still blocked ───────────────

describe('the parental gate after the projection change', () => {
  it('blocks an account whose date of birth is not held - a projection is not an adulthood claim', async () => {
    const { checkParentalConsent } = await import('@/lib/consent-check')

    // What a projection with no profile looks like: nothing known.
    mockReadIdentityProfile.mockResolvedValue(null)
    mockFindExistingUser.mockResolvedValue({
      id: 'cuid-1',
      supabaseUserId: 'uuid-1',
      dateOfBirth: null,
      isMinor: true,
    })

    const result = await checkParentalConsent('uuid-1')
    expect(result.allowed).toBe(false)
  })

  it('blocks a 13-year-old with no linked parent and no approved consent', async () => {
    const { checkParentalConsent } = await import('@/lib/consent-check')

    const thirteenYearsAgo = new Date()
    thirteenYearsAgo.setUTCFullYear(thirteenYearsAgo.getUTCFullYear() - 13)

    mockReadIdentityProfile.mockResolvedValue({
      id: 'uuid-2',
      email: null,
      full_name: null,
      date_of_birth: thirteenYearsAgo.toISOString().slice(0, 10),
      is_minor: true,
      role: 'student',
      school_name: null,
      exam_board: null,
      created_at: null,
    })

    const result = await checkParentalConsent('uuid-2')
    expect(result.allowed).toBe(false)
    expect(result.reason).toBeTruthy()
  })

  it('control: a learner with a real date of birth over 16 is allowed, so the refusals above are not vacuous', async () => {
    const { checkParentalConsent } = await import('@/lib/consent-check')

    const twentyYearsAgo = new Date()
    twentyYearsAgo.setUTCFullYear(twentyYearsAgo.getUTCFullYear() - 20)

    mockReadIdentityProfile.mockResolvedValue({
      id: 'uuid-4',
      email: null,
      full_name: null,
      date_of_birth: twentyYearsAgo.toISOString().slice(0, 10),
      is_minor: false,
      role: 'student',
      school_name: null,
      exam_board: null,
      created_at: null,
    })

    const result = await checkParentalConsent('uuid-4')
    expect(result.allowed).toBe(true)
  })

  it('still blocks when the row carries the old 2000-01-01 placeholder, which is not a birth date', async () => {
    const { checkParentalConsent } = await import('@/lib/consent-check')

    // A row written by the OLD backfill: placeholder date, isMinor false.
    mockReadIdentityProfile.mockResolvedValue(null)
    mockFindExistingUser.mockResolvedValue({
      id: 'cuid-3',
      supabaseUserId: 'uuid-3',
      dateOfBirth: new Date('2000-01-01T00:00:00.000Z'),
      isMinor: false,
    })

    const result = await checkParentalConsent('uuid-3')
    expect(result.allowed).toBe(false)
  })
})
