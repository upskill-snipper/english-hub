// @vitest-environment node
import { describe, it, expect, vi, beforeEach } from 'vitest'

vi.mock('@/lib/supabase/server', () => ({ createServiceRoleClient: vi.fn() }))
vi.mock('@/lib/prisma', () => ({ prisma: { auditLog: { create: vi.fn() } } }))
vi.mock('@/lib/email', () => ({ sendEmail: vi.fn() }))
vi.mock('@/lib/privacy/dormancy', () => ({ processChildDormancy: vi.fn() }))

import { createServiceRoleClient } from '@/lib/supabase/server'
import { prisma } from '@/lib/prisma'
import {
  purgeExpiredLearningRecords,
  RETENTION_PERIODS,
  SUPABASE_SUBJECT_TABLES,
} from '@/lib/data-retention'

/**
 * The retention and access promises for saved game results, held to what the
 * code does (13 October 2026).
 *
 * The privacy notice now says game results are kept for 24 months and deleted
 * with the account. A period in a notice with no sweep behind it is the PAY-9
 * defect again, so the sweep arrives with the table and is tested by what it
 * deletes, not by reading its source. And the results are the student's, so
 * they are in the subject-access export from the first row.
 */

const NOW = new Date('2026-10-13T00:00:00Z')

let calls: { table: string; column: string; cutoff: string }[]
let counts: Record<string, number | null>
let errors: Record<string, string | undefined>

beforeEach(() => {
  vi.clearAllMocks()
  calls = []
  counts = { game_rounds: 3, coach_reports: 0 }
  errors = {}
  vi.mocked(createServiceRoleClient).mockReturnValue({
    from: (table: string) => ({
      delete: (opts: unknown) => {
        expect(opts).toEqual({ count: 'exact' })
        return {
          lt: async (column: string, cutoff: string) => {
            calls.push({ table, column, cutoff })
            return errors[table]
              ? { count: null, error: { message: errors[table] } }
              : { count: counts[table], error: null }
          },
        }
      },
    }),
  } as unknown as ReturnType<typeof createServiceRoleClient>)
  vi.mocked(prisma.auditLog.create).mockResolvedValue({} as never)
})

describe('the sweep', () => {
  it('deletes rounds finished more than 24 months ago and reports older than 12', async () => {
    const out = await purgeExpiredLearningRecords(NOW)
    expect(RETENTION_PERIODS.GAME_ROUNDS_DAYS).toBe(730)
    expect(RETENTION_PERIODS.COACH_REPORTS_DAYS).toBe(365)
    expect(calls).toEqual([
      { table: 'game_rounds', column: 'finished_at', cutoff: '2024-10-13T00:00:00.000Z' },
      { table: 'coach_reports', column: 'created_at', cutoff: '2025-10-13T00:00:00.000Z' },
    ])
    expect(out).toMatchObject({ gameRoundsPurged: 3, coachReportsPurged: 0, errors: [] })
  })

  it('by date alone, never by account', async () => {
    await purgeExpiredLearningRecords(NOW)
    // Only .lt on a date column was called: no .eq on a user id anywhere.
    expect(calls.every((c) => c.column === 'finished_at' || c.column === 'created_at')).toBe(true)
  })

  it('leaves an audit row when it deletes something, and none when it deletes nothing', async () => {
    await purgeExpiredLearningRecords(NOW)
    expect(prisma.auditLog.create).toHaveBeenCalledOnce()
    expect(vi.mocked(prisma.auditLog.create).mock.calls[0][0]).toMatchObject({
      data: { action: 'LEARNING_RECORDS_EXPIRED', details: { table: 'game_rounds', deleted: 3 } },
    })
  })

  it('reports a failure rather than swallowing it, and still runs the other sweep', async () => {
    errors.game_rounds = 'statement timeout'
    const out = await purgeExpiredLearningRecords(NOW)
    expect(out.errors).toEqual([{ step: 'game_rounds_retention', message: 'statement timeout' }])
    expect(calls.map((c) => c.table)).toEqual(['game_rounds', 'coach_reports'])
  })
})

describe('the export', () => {
  it('includes every saved round, all columns', () => {
    const e = SUPABASE_SUBJECT_TABLES.find((t) => t.table === 'game_rounds')
    expect(e).toMatchObject({ table: 'game_rounds', column: 'user_id' })
    expect(e?.columns).toBeUndefined()
  })

  it('includes every coach report in full, but not which teacher or school asked', () => {
    const e = SUPABASE_SUBJECT_TABLES.find((t) => t.table === 'coach_reports')
    expect(e?.column).toBe('user_id')
    expect(e?.columns).toContain('report')
    expect(e?.columns).not.toContain('requested_by')
    expect(e?.columns).not.toContain('school_id')
    expect(e?.note).toBeTruthy()
  })
})
