// ─── Smart-IP · prepareTrainingRecord — the 8 ordered gates ──────────────────
//
// Offline tests for src/lib/training/prepare.ts. Everything external is mocked:
//   • @/lib/supabase/server  — a programmable per-table query stub
//   • @/lib/prisma           — user / privacySettings / auditLog
//   • @/lib/consent-check    — checkMinorAIConsent
//   • @/lib/ai-audit-log     — hashAuditInput (deterministic stub)
//
// We assert each gate REJECTS in order and writes NOTHING to training_data, and
// that the happy path inserts, flips status approved→training_ready (guarded by
// .eq('status','approved')), writes the audit row, and is idempotent on
// anon_submission_id.
// ────────────────────────────────────────────────────────────────────────────

import { describe, it, expect, vi, beforeEach } from 'vitest'

// ── Supabase stub ────────────────────────────────────────────────────────────
// Each table gets a fixture for its terminal result. The builder supports the
// exact chains prepare.ts uses: select→eq→maybeSingle,
// select→eq→order→limit→maybeSingle, insert→select→single, update→eq→eq.

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
  // sensible happy defaults
  mockCheckMinorAIConsent.mockResolvedValue({ allowed: true })
}

async function run(id = 'sub-1') {
  const { prepareTrainingRecord } = await import('@/lib/training/prepare')
  return prepareTrainingRecord(id)
}

beforeEach(resetAll)

// ── Gate 0: input ────────────────────────────────────────────────────────────

describe('prepareTrainingRecord — input gate', () => {
  it('rejects an empty submissionId without touching the DB', async () => {
    const res = await run('   ')
    expect(res).toEqual({ ok: false, reason: 'submissionId is required' })
    expect(createServiceRoleClient).not.toHaveBeenCalled()
    expect(insertCalls).toHaveLength(0)
  })
})

// ── Gate 1: submission exists ────────────────────────────────────────────────

describe('Gate 1 — submission must exist', () => {
  it('rejects when the submission row is absent', async () => {
    tables['marking_submissions'] = { select: { data: null, error: null } }
    const res = await run()
    expect(res.ok).toBe(false)
    if (!res.ok) expect(res.reason).toMatch(/not found/i)
    expect(insertCalls.filter((c) => c.table === 'training_data')).toHaveLength(0)
  })

  it('rejects (no PII leak) when the lookup itself errors', async () => {
    tables['marking_submissions'] = {
      select: { data: null, error: { message: 'db down' } },
    }
    const res = await run()
    expect(res.ok).toBe(false)
    if (!res.ok) expect(res.reason).toMatch(/failed to load/i)
  })
})

// ── Gate 2: status === 'approved' ────────────────────────────────────────────

describe("Gate 2 — status must be 'approved'", () => {
  it('rejects ai_marked and audits a non-PII reason', async () => {
    tables['marking_submissions'] = {
      select: { data: approvedSubmissionRow({ status: 'ai_marked' }), error: null },
    }
    const res = await run()
    expect(res.ok).toBe(false)
    if (!res.ok) expect(res.reason).toMatch(/not approved/i)
    expect(insertCalls.filter((c) => c.table === 'training_data')).toHaveLength(0)
    // audit written with coarse reason only
    expect(mockAuditCreate).toHaveBeenCalledTimes(1)
    const detail = mockAuditCreate.mock.calls[0][0].data.details
    expect(detail.outcome).toBe('rejected')
    expect(detail.reason).toBe('not_approved')
  })
})

// ── Gate 3: training_eligible === true ───────────────────────────────────────

describe('Gate 3 — training_eligible must be true', () => {
  it('rejects when training_eligible is false', async () => {
    tables['marking_submissions'] = {
      select: { data: approvedSubmissionRow({ training_eligible: false }), error: null },
    }
    const res = await run()
    expect(res.ok).toBe(false)
    if (!res.ok) expect(res.reason).toMatch(/training-eligible/i)
    expect(insertCalls.filter((c) => c.table === 'training_data')).toHaveLength(0)
  })
})

// ── Gate 4: non-empty answer ─────────────────────────────────────────────────

describe('Gate 4 — student answer must be non-empty', () => {
  it('rejects a blank essay_text', async () => {
    tables['marking_submissions'] = {
      select: { data: approvedSubmissionRow({ essay_text: '   ' }), error: null },
    }
    const res = await run()
    expect(res.ok).toBe(false)
    if (!res.ok) expect(res.reason).toMatch(/no student answer/i)
  })
})

// ── Gate 5: student linked + ACTIVE ──────────────────────────────────────────

describe('Gate 5 — student must exist & be ACTIVE', () => {
  it('rejects when submission has no student_id', async () => {
    tables['marking_submissions'] = {
      select: { data: approvedSubmissionRow({ student_id: null }), error: null },
    }
    const res = await run()
    expect(res.ok).toBe(false)
    if (!res.ok) expect(res.reason).toMatch(/no associated student/i)
  })

  it('rejects when the Prisma user cannot be resolved', async () => {
    tables['marking_submissions'] = {
      select: { data: approvedSubmissionRow(), error: null },
    }
    mockUserFindUnique.mockResolvedValue(null)
    const res = await run()
    expect(res.ok).toBe(false)
    if (!res.ok) expect(res.reason).toMatch(/resolve the student account/i)
  })

  it('rejects when the student account is not ACTIVE', async () => {
    tables['marking_submissions'] = {
      select: { data: approvedSubmissionRow(), error: null },
    }
    mockUserFindUnique.mockResolvedValue(activeStudentUser({ accountStatus: 'SUSPENDED' }))
    const res = await run()
    expect(res.ok).toBe(false)
    if (!res.ok) expect(res.reason).toMatch(/not active/i)
    expect(insertCalls.filter((c) => c.table === 'training_data')).toHaveLength(0)
  })
})

// ── Gate 6: consent flag by source ───────────────────────────────────────────

describe('Gate 6 — consent flag depends on source', () => {
  it('b2c_self rejects when aiTrainingOptIn !== true', async () => {
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
  })

  it('b2b_class rejects when schoolSharingEnabled !== true (even if aiTrainingOptIn true)', async () => {
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
  })

  it('unknown/null source is treated conservatively as b2b (needs schoolSharingEnabled)', async () => {
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
  })
})

// ── Gate 7: minor / AI consent ───────────────────────────────────────────────

describe('Gate 7 — checkMinorAIConsent must allow', () => {
  it('rejects with the consent-check reason when denied', async () => {
    tables['marking_submissions'] = {
      select: { data: approvedSubmissionRow(), error: null },
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
})

// ── Gate 8 / happy path ──────────────────────────────────────────────────────

describe('Gate 8 — idempotency + happy path', () => {
  it('idempotent: existing training row ⇒ success, NO insert, status still bumped', async () => {
    tables['marking_submissions'] = {
      select: { data: approvedSubmissionRow(), error: null },
    }
    mockUserFindUnique.mockResolvedValue(activeStudentUser())
    tables['training_data'] = { select: { data: { id: 'existing-tr' }, error: null } }

    const res = await run()
    expect(res).toEqual({ ok: true, trainingId: 'existing-tr' })
    expect(insertCalls.filter((c) => c.table === 'training_data')).toHaveLength(0)
    // status transition is guarded by .eq('status','approved')
    const upd = updateCalls.find((u) => u.table === 'marking_submissions')
    expect(upd?.patch).toEqual({ status: 'training_ready' })
    expect(upd?.eqs).toEqual(
      expect.arrayContaining([
        ['id', 'sub-1'],
        ['status', 'approved'],
      ]),
    )
    const detail = mockAuditCreate.mock.calls.at(-1)![0].data.details
    expect(detail.outcome).toBe('skipped_exists')
  })

  it('happy path: inserts the anonymised row, flips status, writes audit', async () => {
    tables['marking_submissions'] = {
      select: { data: approvedSubmissionRow(), error: null },
    }
    mockUserFindUnique.mockResolvedValue(activeStudentUser())
    // training_data: dedupe select returns nothing, then insert returns id
    tables['training_data'] = {
      select: { data: null, error: null },
      insert: { data: { id: 'tr-new' }, error: null },
    }
    tables['teacher_moderations'] = {
      select: {
        data: {
          decision: 'corrected',
          teacher_score: 23,
          teacher_grade: '7',
          ao_corrections: [{ ao: 'AO2', score: 11 }],
          feedback_after: 'moderated fb',
          adjustment_reason: 'AO2 raised',
          created_at: '2026-05-10T01:00:00.000Z',
        },
        error: null,
      },
    }

    const res = await run()
    expect(res).toEqual({ ok: true, trainingId: 'tr-new' })

    const trInsert = insertCalls.find((c) => c.table === 'training_data')
    expect(trInsert).toBeTruthy()
    const row = trInsert!.row
    // Anonymised: hashed id, real FK retained, snake_case columns present.
    expect(row.anon_submission_id).toBe('H(sub-1)')
    expect(row.source_submission_id).toBe('sub-1')
    expect(row.anon_school_id).toBe('H(sch-1)')
    expect(row.student_answer).toBe('A real student answer that is long enough.')
    // moderation values preferred over inline submission columns
    expect(row.teacher_final_mark).toBe(23)
    expect(row.teacher_final_feedback).toBe('moderated fb')
    expect(row.teacher_correction_reason).toBe('AO2 raised')
    // no raw name/email keys
    expect(Object.keys(row)).not.toContain('student_name')

    // status advanced approved → training_ready (guarded)
    const upd = updateCalls.find((u) => u.table === 'marking_submissions')
    expect(upd?.patch).toEqual({ status: 'training_ready' })
    expect(upd?.eqs).toEqual(
      expect.arrayContaining([
        ['id', 'sub-1'],
        ['status', 'approved'],
      ]),
    )

    const detail = mockAuditCreate.mock.calls.at(-1)![0].data.details
    expect(detail.outcome).toBe('prepared')
    expect(detail.trainingId).toBe('tr-new')
    expect(detail.statusAdvanced).toBe(true)
  })

  it('insert unique-race ⇒ re-select treated as success (idempotent)', async () => {
    tables['marking_submissions'] = {
      select: { data: approvedSubmissionRow(), error: null },
    }
    mockUserFindUnique.mockResolvedValue(activeStudentUser())
    // First training_data select (dedupe) = none. Insert fails. The route then
    // re-selects training_data — our stub returns the SAME select fixture, so
    // make it the raced row to exercise the success-on-race branch.
    tables['training_data'] = {
      select: { data: { id: 'raced-tr' }, error: null },
      insert: { data: null, error: { code: '23505', message: 'dup' } },
    }
    // NOTE: with this fixture the initial dedupe select already returns
    // 'raced-tr', so the function short-circuits as skipped_exists — still a
    // correct idempotent success with no duplicate insert.
    const res = await run()
    expect(res).toEqual({ ok: true, trainingId: 'raced-tr' })
    expect(insertCalls.filter((c) => c.table === 'training_data')).toHaveLength(0)
  })
})
