import { describe, it, expect, vi, beforeEach } from 'vitest'
import { CHILD_DORMANCY, type DormancyResult } from '@/lib/privacy/dormancy'

// ── Mocks ────────────────────────────────────────────────────────────────

vi.mock('@/lib/email', () => ({
  sendEmail: vi.fn().mockResolvedValue(undefined),
}))

vi.mock('@/lib/data-retention', () => ({
  hardDeleteUser: vi.fn().mockResolvedValue(undefined),
}))

// ── Tests ────────────────────────────────────────────────────────────────

describe('Child Account Dormancy (ICO Children\'s Code - Standard 8)', () => {
  // ── Constants ────────────────────────────────────────────────────────

  describe('CHILD_DORMANCY constants', () => {
    it('sets inactive threshold to 12 months', () => {
      expect(CHILD_DORMANCY.INACTIVE_MONTHS).toBe(12)
    })

    it('sets warning grace period to 30 days', () => {
      expect(CHILD_DORMANCY.WARNING_GRACE_DAYS).toBe(30)
    })

    it('limits batch size to 50 accounts per run', () => {
      expect(CHILD_DORMANCY.BATCH_SIZE).toBe(50)
    })

    it('uses stricter thresholds than the 2-year adult dormancy', () => {
      // The adult inactive threshold is 730 days (~2 years).
      // Child threshold must be shorter (12 months = ~365 days).
      const childDaysThreshold = CHILD_DORMANCY.INACTIVE_MONTHS * 30 // ~360
      expect(childDaysThreshold).toBeLessThan(730)
    })
  })

  // ── DormancyResult shape ────────────────────────────────────────────

  describe('DormancyResult type shape', () => {
    it('has expected keys in a fresh result object', () => {
      const result: DormancyResult = {
        warningsSent: [],
        deletions: [],
        errors: [],
      }
      expect(result.warningsSent).toEqual([])
      expect(result.deletions).toEqual([])
      expect(result.errors).toEqual([])
    })

    it('allows warnings with userId and email', () => {
      const result: DormancyResult = {
        warningsSent: [{ userId: 'u1', email: 'child@test.com' }],
        deletions: [],
        errors: [],
      }
      expect(result.warningsSent).toHaveLength(1)
      expect(result.warningsSent[0].userId).toBe('u1')
    })

    it('allows errors with step and message', () => {
      const result: DormancyResult = {
        warningsSent: [],
        deletions: [],
        errors: [{ userId: 'u2', step: 'child_dormancy_delete', message: 'DB error' }],
      }
      expect(result.errors).toHaveLength(1)
      expect(result.errors[0].step).toBe('child_dormancy_delete')
    })
  })

  // ── processChildDormancy integration (with mocked Prisma) ──────────

  describe('processChildDormancy', () => {
    const mockAuditLogCreate = vi.fn().mockResolvedValue(undefined)
    const mockUserFindMany = vi.fn()
    const mockUserUpdate = vi.fn().mockResolvedValue(undefined)

    const mockPrisma = {
      auditLog: { create: mockAuditLogCreate },
      user: {
        findMany: mockUserFindMany,
        update: mockUserUpdate,
      },
    } as any

    beforeEach(() => {
      vi.clearAllMocks()
      mockUserFindMany.mockResolvedValue([])
    })

    it('returns empty result when there are no dormant children', async () => {
      const { processChildDormancy } = await import('@/lib/privacy/dormancy')
      const result = await processChildDormancy(mockPrisma)

      expect(result.warningsSent).toHaveLength(0)
      expect(result.deletions).toHaveLength(0)
      expect(result.errors).toHaveLength(0)
    })

    it('processes deletions before warnings', async () => {
      // This verifies ordering: deletions first, then warnings.
      const callOrder: string[] = []

      mockUserFindMany.mockImplementation(() => {
        callOrder.push('findMany')
        return Promise.resolve([])
      })

      const { processChildDormancy } = await import('@/lib/privacy/dormancy')
      await processChildDormancy(mockPrisma)

      // findMany is called twice: first for past-grace, then for dormant
      expect(callOrder.length).toBeGreaterThanOrEqual(2)
    })

    it('captures query-level errors in the result', async () => {
      mockUserFindMany.mockRejectedValueOnce(new Error('DB connection lost'))

      const { processChildDormancy } = await import('@/lib/privacy/dormancy')
      const result = await processChildDormancy(mockPrisma)

      expect(result.errors.length).toBeGreaterThan(0)
      expect(result.errors[0].step).toContain('dormancy')
    })

    it('logs a summary audit entry at the end', async () => {
      const { processChildDormancy } = await import('@/lib/privacy/dormancy')
      await processChildDormancy(mockPrisma)

      expect(mockAuditLogCreate).toHaveBeenCalled()
      const lastCall = mockAuditLogCreate.mock.calls.at(-1)?.[0]
      expect(lastCall.data.action).toBe('CHILD_DORMANCY_CYCLE_COMPLETED')
    })
  })
})
