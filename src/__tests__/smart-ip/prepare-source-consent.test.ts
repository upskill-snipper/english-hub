// ─── Smart-IP · prepareTrainingRecord — SOURCE-AWARE consent gate ────────────
//
// Companion to prepare-gates.test.ts. Proves the source-aware behaviour added
// for the paid-marker drive:
//
//   • source 'commissioned' / 'specimen' have NO pupil data subject — the
//     consent / student-resolution / minor checks are SKIPPED entirely and the
//     anonymised row is still INSERTED, status flipped approved→training_ready,
//     audit written with consentExempt:true. Prisma user.findUnique &
//     checkMinorAIConsent are NEVER called.
//   • source 'b2c_self' / 'b2b_class' (real pupil work) are STILL blocked
//     without the right consent posture — byte-identical to before.
//   • The existing 8 ordered gates are unaffected for pupil sources.
//
// Everything external is mocked exactly like prepare-gates.test.ts (same
// programmable per-table Supabase stub, prisma, consent-check, ai-audit-log).
// ────────────────────────────────────────────────────────────────────────────

import { describe, it, expect, vi, beforeEach } from 'vitest'

// ── Supabase stub (identical contract to prepare-gates.test.ts) ──────────────

interface TableFixture {
  select?: { data: unknown; error: unknown }
  insert?: { data: unknown; error: unknown }
}

let tables: Record<string, TableFixture> = {}
const insertCalls: Array<{ table: string; row: Record<string, unknown> }> = []
const updateCalls: Array<{
  table: string
  patch: Record<string, unknown>
  eqs: Array<[string, unknown]>
}> = []

function makeQuery(table: string) {
  const eqs: Array<[string, unknown]> = []
  const builder: Record<string, unknown> = {}

  builder.select = () => builder
  builder.order = () => builder
  builder.limit = () => builder
  builder.eq = (col: string, val: unknown) => {
    eqs.push([col, val])
    return builder
  }
  builder.maybeSingle = async () => tables[table]?.select ?? { data: null, error: null }
  builder.single = async () =>
    builder._mode === 'insert'
      ? (tables[table]?.insert ?? { data: null, error: null })
      : (tables[table]?.select ?? { data: null, error: null })
  builder.insert = (row: Record<string, unknown>) => {
    insertCalls.push({ table, row })
    builder._mode = 'insert'
    return builder
  }
  builder.update = (patch: Record<string, unknown>) => {
    const localEqs: Array<[string, unknown]> = []
    const upd: Record<string, unknown> = {
      eq: (c: string, v: unknown) => {
        localEqs.push([c, v])
        return upd
      },
      then: (resolve: (r: { data: unknown; error: unknown }) => void) => {
        updateCalls.push({ table, patch, eqs: localEqs })
        return Promise.resolve({ data: { id: 'x' }, error: null }).then(resolve)
      },
    }
    return upd
  }
  return builder
}

const createServiceRoleClient = vi.fn(() => ({
  from: (table: string) => makeQuery(table),
}))

vi.mock('@/lib/supabase/server', () => ({
  createServiceRoleClient: () => createServiceRoleClient(),
}))

const mockUserFindUnique = vi.fn()
interface AuditCreateArg {
  data: { details: Record<string, unknown>; [k: string]: unknown }
}
const mockAuditCreate = vi.fn(async (_arg: AuditCreateArg) => ({ id: 'audit-1' }))

vi.mock('@/lib/prisma', () => ({
  prisma: {
    user: { findUnique: (...a: unknown[]) => mockUserFindUnique(...a) },
    auditLog: { create: (a: AuditCreateArg) => mockAuditCreate(a) },
  },
}))

const mockCheckMinorAIConsent = vi.fn()
vi.mock('@/lib/consent-check', () => ({
  checkMinorAIConsent: (...a: unknown[]) => mockCheckMinorAIConsent(...a),
}))

vi.mock('@/lib/ai-audit-log', () => ({
  hashAuditInput: (v: string) => `H(${v})`,
}))

// ── Fixtures ─────────────────────────────────────────────────────────────────

function approvedSubmissionRow(over: Record<string, unknown> = {}) {
  return {
    id: 'sub-1',
    student_id: 'auth-stu-1',
    school_id: 'sch-1',
    class_id: 'cls-1',
    source: 'b2b_class',
    status: 'approved',
    training_eligible: true,
    exam_board: 'AQA',
    qualification: 'GCSE',
    paper: 'Paper 1',
    question_text: 'Q',
    question_type: 'extended',
    rubric_ref: 'aqa-lit-p1',
    essay_text: 'A real student answer that is long enough.',
    ai_score: 20,
    ai_feedback: 'ai fb',
    ai_grade_band: 'Grade 6-7',
    ai_ao_breakdown: [{ id: 'AO1', marks: 10 }],
    ai_confidence: 0.6,
    final_teacher_mark: '23',
    final_teacher_feedback: 'teacher fb',
    teacher_adjustment_reason: 'reason',
    approved_at: '2026-05-10T00:00:00.000Z',
    model_version_id: null,
    prompt_version_id: null,
    ...over,
  }
}

function activeStudentUser(over: Record<string, unknown> = {}) {
  return {
    id: 'prisma-stu-1',
    accountStatus: 'ACTIVE',
    privacySettings: { aiTrainingOptIn: true, schoolSharingEnabled: true },
    ...over,
  }
}

function resetAll() {
  tables = {}
  insertCalls.length = 0
  updateCalls.length = 0
  createServiceRoleClient.mockClear()
  mockUserFindUnique.mockReset()
  mockAuditCreate.mockClear()
  mockCheckMinorAIConsent.mockReset()
  mockCheckMinorAIConsent.mockResolvedValue({ allowed: true })
}

async function run(id = 'sub-1') {
  const { prepareTrainingRecord } = await import('@/lib/training/prepare')
  return prepareTrainingRecord(id)
}

beforeEach(resetAll)

// ── commissioned / specimen: consent BYPASSED, row still inserted ────────────

describe('Source-aware consent — commissioned / specimen bypass the gate', () => {
  for (const source of ['commissioned', 'specimen'] as const) {
    it(`${source}: NO consent checks, anonymises + inserts, status flipped, consentExempt audit`, async () => {
      // No pupil → student_id null (matches the migration: nullable for these
      // sources). school_id/class_id null too. NO privacySettings on file.
      tables['marking_submissions'] = {
        select: {
          data: approvedSubmissionRow({
            source,
            student_id: null,
            school_id: null,
            class_id: null,
          }),
          error: null,
        },
      }
      tables['training_data'] = {
        select: { data: null, error: null },
        insert: { data: { id: `tr-${source}` }, error: null },
      }
      tables['teacher_moderations'] = {
        select: {
          data: {
            decision: 'corrected',
            teacher_score: 22,
            teacher_grade: '7',
            ao_corrections: null,
            feedback_after: 'moderated fb',
            adjustment_reason: 'AO2 raised',
            created_at: '2026-05-10T01:00:00.000Z',
          },
          error: null,
        },
      }

      const res = await run()
      expect(res).toEqual({ ok: true, trainingId: `tr-${source}` })

      // Consent machinery NEVER touched — no pupil data subject.
      expect(mockUserFindUnique).not.toHaveBeenCalled()
      expect(mockCheckMinorAIConsent).not.toHaveBeenCalled()

      // Row WAS anonymised + inserted into training_data.
      const trInsert = insertCalls.find((c) => c.table === 'training_data')
      expect(trInsert).toBeTruthy()
      const row = trInsert!.row
      expect(row.anon_submission_id).toBe('H(sub-1)')
      expect(row.source).toBe(source)
      expect(row.student_answer).toBe('A real student answer that is long enough.')
      // anonymiser still strips any incidental PII keys.
      expect(Object.keys(row)).not.toContain('student_name')
      expect(Object.keys(row)).not.toContain('student_email')

      // status advanced approved → training_ready (guarded by .eq status).
      const upd = updateCalls.find((u) => u.table === 'marking_submissions')
      expect(upd?.patch).toEqual({ status: 'training_ready' })
      expect(upd?.eqs).toEqual(
        expect.arrayContaining([
          ['id', 'sub-1'],
          ['status', 'approved'],
        ]),
      )

      // audit: prepared + consentExempt:true.
      const detail = mockAuditCreate.mock.calls.at(-1)![0].data.details
      expect(detail.outcome).toBe('prepared')
      expect(detail.source).toBe(source)
      expect(detail.consentExempt).toBe(true)
      expect(detail.trainingId).toBe(`tr-${source}`)
    })
  }

  it('commissioned with NO student account on file still inserts (no resolution attempted)', async () => {
    tables['marking_submissions'] = {
      select: {
        data: approvedSubmissionRow({ source: 'commissioned', student_id: null }),
        error: null,
      },
    }
    // Prisma would return null if asked — assert it is never asked.
    mockUserFindUnique.mockResolvedValue(null)
    tables['training_data'] = {
      select: { data: null, error: null },
      insert: { data: { id: 'tr-c2' }, error: null },
    }

    const res = await run()
    expect(res).toEqual({ ok: true, trainingId: 'tr-c2' })
    expect(mockUserFindUnique).not.toHaveBeenCalled()
    expect(insertCalls.filter((c) => c.table === 'training_data')).toHaveLength(1)
  })

  it('commissioned still enforces the teacher-approval gate (status must be approved)', async () => {
    tables['marking_submissions'] = {
      select: {
        data: approvedSubmissionRow({ source: 'commissioned', status: 'ai_marked' }),
        error: null,
      },
    }
    const res = await run()
    expect(res.ok).toBe(false)
    if (!res.ok) expect(res.reason).toMatch(/not approved/i)
    expect(insertCalls.filter((c) => c.table === 'training_data')).toHaveLength(0)
    expect(mockCheckMinorAIConsent).not.toHaveBeenCalled()
  })

  it('specimen still enforces training_eligible', async () => {
    tables['marking_submissions'] = {
      select: {
        data: approvedSubmissionRow({ source: 'specimen', training_eligible: false }),
        error: null,
      },
    }
    const res = await run()
    expect(res.ok).toBe(false)
    if (!res.ok) expect(res.reason).toMatch(/training-eligible/i)
    expect(insertCalls.filter((c) => c.table === 'training_data')).toHaveLength(0)
  })

  it('specimen still enforces a non-empty answer', async () => {
    tables['marking_submissions'] = {
      select: {
        data: approvedSubmissionRow({ source: 'specimen', essay_text: '   ' }),
        error: null,
      },
    }
    const res = await run()
    expect(res.ok).toBe(false)
    if (!res.ok) expect(res.reason).toMatch(/no student answer/i)
    expect(insertCalls.filter((c) => c.table === 'training_data')).toHaveLength(0)
  })
})

// ── pupil sources STILL blocked without consent (byte-identical) ─────────────

describe('Source-aware consent — pupil sources still consent-gated', () => {
  it('b2c_self blocked when aiTrainingOptIn !== true (NO training_data insert)', async () => {
    tables['marking_submissions'] = {
      select: {
        data: approvedSubmissionRow({ source: 'b2c_self', school_id: null, class_id: null }),
        error: null,
      },
    }
    mockUserFindUnique.mockResolvedValue(
      activeStudentUser({
        privacySettings: { aiTrainingOptIn: false, schoolSharingEnabled: true },
      }),
    )
    const res = await run()
    expect(res.ok).toBe(false)
    if (!res.ok) expect(res.reason).toMatch(/aiTrainingOptIn/i)
    expect(insertCalls.filter((c) => c.table === 'training_data')).toHaveLength(0)
    // consent machinery WAS exercised for a pupil source.
    expect(mockUserFindUnique).toHaveBeenCalledTimes(1)
    const detail = mockAuditCreate.mock.calls.at(-1)![0].data.details
    expect(detail.outcome).toBe('rejected')
    expect(detail.reason).toBe('no_ai_training_opt_in')
  })

  it('b2b_class blocked when schoolSharingEnabled !== true (NO training_data insert)', async () => {
    tables['marking_submissions'] = {
      select: { data: approvedSubmissionRow({ source: 'b2b_class' }), error: null },
    }
    mockUserFindUnique.mockResolvedValue(
      activeStudentUser({
        privacySettings: { aiTrainingOptIn: true, schoolSharingEnabled: false },
      }),
    )
    const res = await run()
    expect(res.ok).toBe(false)
    if (!res.ok) expect(res.reason).toMatch(/school data sharing/i)
    expect(insertCalls.filter((c) => c.table === 'training_data')).toHaveLength(0)
  })

  it('b2b_class blocked by checkMinorAIConsent even with the privacy flag on', async () => {
    tables['marking_submissions'] = {
      select: { data: approvedSubmissionRow({ source: 'b2b_class' }), error: null },
    }
    mockUserFindUnique.mockResolvedValue(activeStudentUser())
    mockCheckMinorAIConsent.mockResolvedValue({
      allowed: false,
      reason: 'Parental consent missing.',
    })
    const res = await run()
    expect(res.ok).toBe(false)
    if (!res.ok) expect(res.reason).toBe('Parental consent missing.')
    expect(mockCheckMinorAIConsent).toHaveBeenCalledWith('prisma-stu-1')
    expect(insertCalls.filter((c) => c.table === 'training_data')).toHaveLength(0)
  })

  it('unknown/null source is treated as a pupil source (conservative) and still gated', async () => {
    tables['marking_submissions'] = {
      select: { data: approvedSubmissionRow({ source: null }), error: null },
    }
    mockUserFindUnique.mockResolvedValue(
      activeStudentUser({
        privacySettings: { aiTrainingOptIn: true, schoolSharingEnabled: false },
      }),
    )
    const res = await run()
    expect(res.ok).toBe(false)
    if (!res.ok) expect(res.reason).toMatch(/school data sharing/i)
    expect(insertCalls.filter((c) => c.table === 'training_data')).toHaveLength(0)
    expect(mockUserFindUnique).toHaveBeenCalledTimes(1)
  })

  it('b2c_self happy path still inserts with consentExempt:false', async () => {
    tables['marking_submissions'] = {
      select: {
        data: approvedSubmissionRow({ source: 'b2c_self', school_id: null, class_id: null }),
        error: null,
      },
    }
    mockUserFindUnique.mockResolvedValue(activeStudentUser())
    tables['training_data'] = {
      select: { data: null, error: null },
      insert: { data: { id: 'tr-b2c' }, error: null },
    }
    const res = await run()
    expect(res).toEqual({ ok: true, trainingId: 'tr-b2c' })
    expect(mockUserFindUnique).toHaveBeenCalledTimes(1)
    expect(mockCheckMinorAIConsent).toHaveBeenCalledWith('prisma-stu-1')
    const detail = mockAuditCreate.mock.calls.at(-1)![0].data.details
    expect(detail.outcome).toBe('prepared')
    expect(detail.consentExempt).toBe(false)
  })
})
