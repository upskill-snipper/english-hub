/**
 * Tests for the DP-5 right-to-erasure routine (PLAN P5.4).
 *
 * WHY these cases: the design contract has three load-bearing guarantees we lock
 * against regression —
 *   1. deletion targets EVERY first-party surface (the spine row AND the audit
 *      log), each scoped to the learner;
 *   2. a learner with no rows is a NO-OP (resolves, does not throw);
 *   3. a partial failure THROWS (never a silent half-delete of a child's data),
 *      and downstream surfaces are not attempted.
 * Prisma is mocked so the routine is asserted entirely offline, as the injected
 * design intends.
 */
import { describe, it, expect, vi } from 'vitest'
import { deleteLearnerMarkingData, RETENTION_POLICY, type RetentionPrismaSlice } from '../retention'

/**
 * Build a mock Prisma slice whose two `deleteMany` methods are `vi.fn()`s.
 * Each defaults to a clean `{count:0}` resolve so a test only overrides the
 * surface it cares about. Returns the slice plus the spies for assertions.
 */
function makePrismaMock(
  overrides: Partial<{
    submission: ReturnType<typeof vi.fn>
    audit: ReturnType<typeof vi.fn>
  }> = {},
): {
  prisma: RetentionPrismaSlice
  submission: ReturnType<typeof vi.fn>
  audit: ReturnType<typeof vi.fn>
} {
  const submission = overrides.submission ?? vi.fn().mockResolvedValue({ count: 0 })
  const audit = overrides.audit ?? vi.fn().mockResolvedValue({ count: 0 })

  // WHY the casts: a bare `vi.fn()` is typed as a loose Mock that does not
  // structurally satisfy the precise `deleteMany(args) => Promise<{count}>`
  // signature on RetentionPrismaSlice. The localized `as unknown as` cast (the
  // same pattern the sibling persist.test.ts uses for its spy writer) keeps the
  // mock honest at runtime while satisfying the compiler, with no `any`.
  const prisma: RetentionPrismaSlice = {
    markingSubmission: {
      deleteMany: submission as unknown as RetentionPrismaSlice['markingSubmission']['deleteMany'],
    },
    auditLog: {
      deleteMany: audit as unknown as RetentionPrismaSlice['auditLog']['deleteMany'],
    },
  }

  return { prisma, submission, audit }
}

describe('deleteLearnerMarkingData', () => {
  it('deletes every surface for the learner and returns per-surface counts', async () => {
    const { prisma, submission, audit } = makePrismaMock({
      submission: vi.fn().mockResolvedValue({ count: 3 }),
      audit: vi.fn().mockResolvedValue({ count: 5 }),
    })

    const result = await deleteLearnerMarkingData('user_1', { prisma })

    // Spine row is keyed by studentId (the learner's id on the spine); the audit
    // log is keyed by userId. Both scoped to the same learner.
    expect(submission).toHaveBeenCalledWith({ where: { studentId: 'user_1' } })
    expect(audit).toHaveBeenCalledWith({ where: { userId: 'user_1' } })

    // The single submissions count covers essay_text + aiResult + feedback +
    // analytics projection (all columns on the spine row).
    expect(result).toEqual({ markingSubmissions: 3, aiAuditLog: 5 })
  })

  it('deletes the audit log before the spine row', async () => {
    // WHY order matters: a failure must abort BEFORE the recoverable source data
    // is touched. Proven with a shared call-order log, not incidental success.
    const order: string[] = []
    const submission = vi.fn(async () => {
      order.push('submission')
      return { count: 1 }
    })
    const audit = vi.fn(async () => {
      order.push('audit')
      return { count: 1 }
    })
    const { prisma } = makePrismaMock({ submission, audit })

    await deleteLearnerMarkingData('user_1', { prisma })

    expect(order).toEqual(['audit', 'submission'])
  })

  it('is a no-op (resolves with zero counts, does not throw) when the learner has no rows', async () => {
    const { prisma, submission, audit } = makePrismaMock()

    const result = await deleteLearnerMarkingData('ghost_user', { prisma })

    // Both surfaces are still ASKED (we cannot know up front there are no rows),
    // but every count is zero and nothing throws.
    expect(audit).toHaveBeenCalledOnce()
    expect(submission).toHaveBeenCalledOnce()
    expect(result).toEqual({ markingSubmissions: 0, aiAuditLog: 0 })
  })

  it('throws on the first surface failing and does NOT attempt the spine delete', async () => {
    // audit is the first delete; if it throws, the spine delete must NOT run — a
    // silent half-delete of a child's data is a reportable breach.
    const boom = new Error('db connection lost')
    const audit = vi.fn().mockRejectedValue(boom)
    const { prisma, submission } = makePrismaMock({ audit })

    await expect(deleteLearnerMarkingData('user_1', { prisma })).rejects.toThrow(
      'db connection lost',
    )

    expect(submission).not.toHaveBeenCalled()
  })

  it('throws if the spine delete fails, after the audit log was already deleted', async () => {
    // Surfaces the honest "this surface failed" signal even when the earlier
    // surface succeeded — the caller turns this into a 500 + alert, never "done".
    const boom = new Error('submissions delete failed')
    const submission = vi.fn().mockRejectedValue(boom)
    const { prisma, audit } = makePrismaMock({ submission })

    await expect(deleteLearnerMarkingData('user_1', { prisma })).rejects.toThrow(
      'submissions delete failed',
    )

    expect(audit).toHaveBeenCalledOnce()
  })
})

describe('RETENTION_POLICY re-export (single source of truth)', () => {
  it('is re-exported from retention.ts and carries the expected first-party classes', () => {
    // Guards against a future fork: retention.ts must surface the SAME policy
    // (an array of RetentionRule), never a copy.
    const firstPartyClasses = RETENTION_POLICY.filter(
      (rule) => rule.controller === 'first_party',
    ).map((rule) => rule.dataClass)

    // Every class the erasure routine must cover is present in the policy.
    expect(firstPartyClasses).toEqual(
      expect.arrayContaining([
        'marking_submission_essay_text',
        'marking_ai_result',
        'feedback',
        'analytics_projection',
        'ai_audit_log',
      ]),
    )
  })

  it('keeps undecided windows as null (no invented retention figures)', () => {
    // Per the build rule "do not invent figures": every window is still null +
    // a todo. If a real window is ever set, this is the test to update.
    for (const rule of RETENTION_POLICY) {
      expect(rule.windowDays).toBeNull()
      expect(rule.todo).not.toBeNull()
    }
  })
})
