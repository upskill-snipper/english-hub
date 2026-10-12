/**
 * School bulk-upload records must not outlive their purpose.
 *
 * BulkUploadJob.errors_json can name a pupil's email address. Calum asked on
 * 11 October 2026 for a retention rule before the table first existed in
 * production: the error detail is cleared after 30 days and the row deleted
 * after 12 months (cleanupExpiredData step 7).
 */
import { Prisma } from '@prisma/client'
import { describe, expect, it, vi } from 'vitest'

const updateMany = vi.fn(async (_args: unknown) => ({ count: 3 }))
const deleteMany = vi.fn(async (_args: unknown) => ({ count: 2 }))
const auditCreate = vi.fn(async (_args: unknown) => ({}))

// Only what step 7 and the audit trail touch. Every other step finds its
// model missing, throws, and is recorded in summary.errors by its own catch.
vi.mock('@/lib/prisma', () => ({
  prisma: {
    bulkUploadJob: { updateMany, deleteMany },
    auditLog: { create: auditCreate },
  },
}))
vi.mock('@/lib/email', () => ({ sendEmail: vi.fn() }))
vi.mock('@/lib/supabase/server', () => ({ createServiceRoleClient: vi.fn() }))
vi.mock('@/lib/privacy/dormancy', () => ({
  processChildDormancy: vi.fn(async () => ({ warningsSent: [], deletions: [], errors: [] })),
}))

const DAY = 24 * 60 * 60 * 1000

describe('bulk-upload records in the nightly retention sweep', () => {
  it('clears error detail after 30 days, deletes rows after 12 months, and audits it', async () => {
    const { cleanupExpiredData } = await import('@/lib/data-retention')
    const before = Date.now()
    const summary = await cleanupExpiredData()

    const clearArgs = updateMany.mock.calls[0]?.[0] as {
      where: { createdAt: { lte: Date }; errorsJson: { not: unknown } }
      data: { errorsJson: unknown }
    }
    expect(clearArgs.data.errorsJson).toBe(Prisma.DbNull)
    // Only rows still holding detail, so the audit counts what changed.
    expect(clearArgs.where.errorsJson.not).toBe(Prisma.DbNull)
    const clearAge = (before - clearArgs.where.createdAt.lte.getTime()) / DAY
    expect(clearAge).toBeGreaterThan(29.9)
    expect(clearAge).toBeLessThan(30.1)

    const deleteArgs = deleteMany.mock.calls[0]?.[0] as { where: { createdAt: { lte: Date } } }
    const deleteAge = (before - deleteArgs.where.createdAt.lte.getTime()) / DAY
    expect(deleteAge).toBeGreaterThan(360)
    expect(deleteAge).toBeLessThan(370)

    expect(summary.bulkUploadErrorsCleared).toBe(3)
    expect(summary.bulkUploadRecordsPurged).toBe(2)
    expect(summary.errors.find((e) => e.step === 'bulk_upload_cleanup')).toBeUndefined()

    const actions = auditCreate.mock.calls.map(
      (c) => (c[0] as { data: { action: string } }).data.action,
    )
    expect(actions).toContain('BULK_UPLOAD_RECORDS_PURGED')
  })
})
