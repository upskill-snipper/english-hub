import { describe, it, expect, vi, beforeEach } from 'vitest'

/**
 * The retention jobs must report how much of the user base they can see.
 *
 * Every retention and dormancy path enumerates `prisma.user`, which held 8
 * rows against 200 real accounts. The crons returned 200 with low counts,
 * which reads as "nothing to do". This helper turns the shortfall into a
 * number in the run's own result.
 *
 * The property that matters most: a count it cannot read is reported as
 * UNKNOWN, never as zero. Zero would restore the same false reassurance.
 */

const mockUserCount = vi.fn()

vi.mock('@/lib/prisma', () => ({
  prisma: { user: { count: (...args: unknown[]) => mockUserCount(...args) } },
}))

const mockProfilesCount = vi.fn()

vi.mock('@/lib/supabase/server', () => ({
  createServiceRoleClient: () => ({
    from: () => ({
      select: () => mockProfilesCount(),
    }),
  }),
}))

beforeEach(() => {
  vi.clearAllMocks()
  vi.spyOn(console, 'error').mockImplementation(() => {})
})

describe('measureRetentionCoverage', () => {
  it('reports the gap when Prisma holds fewer rows than Supabase has accounts', async () => {
    const { measureRetentionCoverage } = await import('@/lib/cron/coverage')
    mockUserCount.mockResolvedValue(8)
    mockProfilesCount.mockResolvedValue({ count: 200, error: null })

    const coverage = await measureRetentionCoverage('test-job')

    expect(coverage.prismaUsers).toBe(8)
    expect(coverage.supabaseProfiles).toBe(200)
    expect(coverage.unprojectedAccounts).toBe(192)
    expect(coverage.incomplete).toBe(true)
  })

  it('logs the shortfall rather than leaving it in the response for nobody to read', async () => {
    const { measureRetentionCoverage } = await import('@/lib/cron/coverage')
    mockUserCount.mockResolvedValue(8)
    mockProfilesCount.mockResolvedValue({ count: 200, error: null })

    await measureRetentionCoverage('test-job')

    expect(console.error).toHaveBeenCalledWith(expect.stringContaining('COVERAGE INCOMPLETE'))
  })

  it('reports complete coverage when the two populations agree', async () => {
    const { measureRetentionCoverage } = await import('@/lib/cron/coverage')
    mockUserCount.mockResolvedValue(200)
    mockProfilesCount.mockResolvedValue({ count: 200, error: null })

    const coverage = await measureRetentionCoverage('test-job')

    expect(coverage.unprojectedAccounts).toBe(0)
    expect(coverage.incomplete).toBe(false)
  })

  it('reports UNKNOWN, not zero, when the Supabase count cannot be read', async () => {
    const { measureRetentionCoverage } = await import('@/lib/cron/coverage')
    mockUserCount.mockResolvedValue(8)
    mockProfilesCount.mockResolvedValue({ count: null, error: { message: 'boom' } })

    const coverage = await measureRetentionCoverage('test-job')

    expect(coverage.supabaseProfiles).toBeNull()
    expect(coverage.unprojectedAccounts).toBeNull()
    expect(coverage.incomplete).toBe(true)
    expect(coverage.note).toBeTruthy()
  })

  it('never throws, so a coverage check cannot fail a retention run', async () => {
    const { measureRetentionCoverage } = await import('@/lib/cron/coverage')
    mockUserCount.mockRejectedValue(new Error('database down'))

    await expect(measureRetentionCoverage('test-job')).resolves.toMatchObject({
      incomplete: true,
      unprojectedAccounts: null,
    })
  })
})
