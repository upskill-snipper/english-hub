// ─── Smart-IP · POST /api/marking/[submissionId]/review ──────────────────────
//
// The teacher-in-the-loop decision endpoint (handleReview).
//
// Contract under test:
//   • decision → status transition table:
//       approve   → approved   (+ approved_by / approved_at)
//       reject    → rejected
//       correct   → teacher_review_required
//       send_back → teacher_review_required
//   • API verb → past-tense teacher_moderations.decision:
//       approve→approved, reject→rejected, correct→corrected, send_back→sent_back
//   • the immutable teacher_moderations row is INSERTed BEFORE the spine UPDATE
//   • teacherGrade validation - only {9..1, U}
//   • only an explicit approve sets approved_by / approved_at
// ────────────────────────────────────────────────────────────────────────────

import { describe, it, expect, vi, beforeEach } from 'vitest'
import { NextRequest } from 'next/server'

interface Session {
  user: { id: string; email?: string | null } | null
  error: { message: string } | null
}
let session: Session = { user: { id: 'admin-1', email: 'admin@site.test' }, error: null }
let rlResult = { success: true, remaining: 29, resetAt: Date.now() + 60_000 }
let siteAdmin = true
let submissionFixture: Record<string, unknown> | null = null

// Ordered log of every DB operation so we can assert moderation-before-spine.
const opLog: string[] = []
let moderationInsertResult: { data: unknown; error: unknown } = {
  data: { id: 'mod-1', decision: 'approved', created_at: '2026-05-17T00:00:00.000Z' },
  error: null,
}
let spineUpdateResult: { data: unknown; error: unknown } = { data: null, error: null }
const moderationRows: Record<string, unknown>[] = []
const spineUpdates: Record<string, unknown>[] = []

function makeAdminClient() {
  return {
    from(table: string) {
      if (table === 'marking_submissions') {
        return {
          // initial submission lookup: select(...).eq('id').single()
          select: () => ({
            eq: () => ({
              single: async () => {
                opLog.push('submission.select')
                return submissionFixture
                  ? { data: submissionFixture, error: null }
                  : { data: null, error: { message: 'not found' } }
              },
            }),
          }),
          // spine update: update(...).eq('id').select(HYDRATE).single()
          update: (patch: Record<string, unknown>) => ({
            eq: () => ({
              select: () => ({
                single: async () => {
                  opLog.push('spine.update')
                  spineUpdates.push(patch)
                  // An injected error/explicit-null result must propagate so
                  // the route's `if (updateErr || !updatedRaw)` 500 path runs.
                  if (spineUpdateResult.data || spineUpdateResult.error) {
                    return spineUpdateResult
                  }
                  return {
                    data: {
                      id: 'sub-1',
                      student_id: 'stu-1',
                      class_id: null,
                      exam_board: 'AQA',
                      essay_title: 't',
                      essay_text: 'e',
                      source: submissionFixture?.source ?? 'b2b_class',
                      status: patch.status,
                      submitted_at: '2026-05-01T00:00:00.000Z',
                      ai_grade: '6',
                      ai_confidence: null,
                      ai_feedback: 'aifb',
                      ai_band_marks: [],
                      ai_result: {},
                      ai_score: 18,
                      ai_max_marks: 30,
                      ai_grade_band: 'Grade 6-7',
                      ai_ao_breakdown: [],
                      teacher_grade: patch.teacher_grade ?? null,
                      teacher_comment: patch.teacher_comment ?? null,
                      teacher_reviewed_by: patch.teacher_reviewed_by ?? null,
                      teacher_reviewed_at: patch.teacher_reviewed_at ?? null,
                      final_teacher_mark: patch.final_teacher_mark ?? null,
                      final_teacher_feedback: patch.final_teacher_feedback ?? null,
                      teacher_adjustment_reason: patch.teacher_adjustment_reason ?? null,
                      moderation_notes: patch.moderation_notes ?? null,
                      training_eligible: patch.training_eligible ?? null,
                      approved_by: patch.approved_by ?? null,
                      approved_at: patch.approved_at ?? null,
                    },
                    error: null,
                  }
                },
              }),
            }),
          }),
        }
      }
      if (table === 'teacher_moderations') {
        return {
          insert: (row: Record<string, unknown>) => ({
            select: () => ({
              single: async () => {
                opLog.push('moderation.insert')
                moderationRows.push(row)
                return moderationInsertResult
              },
            }),
          }),
        }
      }
      if (table === 'school_members' || table === 'classes') {
        return {
          select: () => ({
            eq: () => ({ maybeSingle: async () => ({ data: null, error: null }) }),
          }),
        }
      }
      // classes / class_students (teacher-of-class lookup path, unused for admin)
      return {
        select: () => ({
          eq: () => ({
            eq: () => ({ data: [], error: null }),
          }),
        }),
      }
    },
  }
}

vi.mock('@/lib/supabase/server', () => ({
  createServerSupabaseClient: () => ({
    auth: { getUser: async () => ({ data: { user: session.user }, error: session.error }) },
  }),
  createServiceRoleClient: () => makeAdminClient(),
}))
vi.mock('@/lib/rate-limit', () => ({
  rateLimit: async () => rlResult,
  getClientIp: () => '127.0.0.1',
}))
vi.mock('@/lib/site-admin', () => ({
  isSiteAdmin: () => siteAdmin,
}))
vi.mock('@/lib/school-auth', () => ({
  verifySchoolMember: async () => null,
}))
// These cases exercise the TEACHER/ADMIN decision contract - the caller is
// not a paid marker, so getCurrentMarker() resolves to null (the real
// behaviour for an admin/teacher), keeping handledByMarker=false and the
// original path under test byte-for-byte. The marker branch is covered
// separately by the marker-console workstream's own tests.
vi.mock('@/lib/marker-auth', () => ({
  getCurrentMarker: async () => null,
  requireMarker: async () => ({ ok: false as const, response: undefined }),
}))

function makeReq(body: unknown, json = true): NextRequest {
  const headers: Record<string, string> = {}
  if (json) headers['content-type'] = 'application/json'
  return new NextRequest('http://localhost/api/marking/sub-1/review', {
    method: 'POST',
    headers,
    body: typeof body === 'string' ? body : JSON.stringify(body),
  })
}

async function handleReview(req: NextRequest, id = 'sub-1', forced?: string) {
  const mod = await import('@/app/api/marking/[submissionId]/review/route')
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (mod as any).handleReview(req, id, forced)
}

beforeEach(() => {
  session = { user: { id: 'admin-1', email: 'admin@site.test' }, error: null }
  rlResult = { success: true, remaining: 29, resetAt: Date.now() + 60_000 }
  siteAdmin = true
  // B2C self-study row → platform admin path (simplest authz to exercise).
  submissionFixture = {
    id: 'sub-1',
    student_id: 'stu-1',
    school_id: null,
    class_id: null,
    source: 'b2c_self',
    status: 'teacher_review_required',
    ai_grade: '6',
    ai_score: 18,
    ai_feedback: 'ai feedback',
  }
  opLog.length = 0
  moderationRows.length = 0
  spineUpdates.length = 0
  moderationInsertResult = {
    data: { id: 'mod-1', decision: 'approved', created_at: '2026-05-17T00:00:00.000Z' },
    error: null,
  }
  spineUpdateResult = { data: null, error: null }
})

describe('review - preconditions', () => {
  it('415 when not application/json', async () => {
    const res = await handleReview(makeReq({ decision: 'approve' }, false))
    expect(res.status).toBe(415)
  })

  it('401 when unauthenticated', async () => {
    session = { user: null, error: { message: 'x' } }
    const res = await handleReview(makeReq({ decision: 'approve' }))
    expect(res.status).toBe(401)
  })

  it('400 on an invalid decision verb', async () => {
    const res = await handleReview(makeReq({ decision: 'nuke' }))
    expect(res.status).toBe(400)
    expect((await res.json()).error).toMatch(/decision must be one of/i)
  })

  it('404 when the submission is absent', async () => {
    submissionFixture = null
    const res = await handleReview(makeReq({ decision: 'approve' }))
    expect(res.status).toBe(404)
  })

  it('403 for a B2C row when caller is not a site admin', async () => {
    siteAdmin = false
    const res = await handleReview(makeReq({ decision: 'approve' }))
    expect(res.status).toBe(403)
    expect(opLog).not.toContain('moderation.insert')
  })
})

describe('review - teacherGrade validation {9..1,U}', () => {
  it('rejects an out-of-range grade', async () => {
    const res = await handleReview(makeReq({ decision: 'correct', teacherGrade: '10' }))
    expect(res.status).toBe(400)
    expect((await res.json()).error).toMatch(/teacherGrade must be one of/i)
  })

  it('accepts "U"', async () => {
    const res = await handleReview(makeReq({ decision: 'correct', teacherGrade: 'U' }))
    expect(res.status).toBe(200)
  })

  it.each(['9', '5', '1'])('accepts grade %s', async (g) => {
    const res = await handleReview(makeReq({ decision: 'correct', teacherGrade: g }))
    expect(res.status).toBe(200)
  })
})

describe('review - moderation row inserted BEFORE the spine update', () => {
  it('ordered: submission.select → moderation.insert → spine.update', async () => {
    const res = await handleReview(makeReq({ decision: 'approve', teacherGrade: '7' }))
    expect(res.status).toBe(200)
    expect(opLog).toEqual(['submission.select', 'moderation.insert', 'spine.update'])
  })

  it('if the moderation insert fails the spine is NEVER updated (audit-first)', async () => {
    moderationInsertResult = { data: null, error: { message: 'insert failed' } }
    const res = await handleReview(makeReq({ decision: 'approve' }))
    expect(res.status).toBe(500)
    expect(opLog).toContain('moderation.insert')
    expect(opLog).not.toContain('spine.update')
  })
})

describe('review - decision → status transition table', () => {
  it.each([
    ['approve', 'approved', 'approved'],
    ['reject', 'rejected', 'rejected'],
    ['correct', 'teacher_review_required', 'corrected'],
    ['send_back', 'teacher_review_required', 'sent_back'],
  ])(
    'verb %s ⇒ spine status %s AND teacher_moderations.decision %s',
    async (verb, expectedStatus, expectedModDecision) => {
      const res = await handleReview(makeReq({ decision: verb, teacherGrade: '6' }))
      expect(res.status).toBe(200)

      // teacher_moderations.decision is the past-tense canonical value.
      expect(moderationRows[0].decision).toBe(expectedModDecision)
      // spine status transition.
      expect(spineUpdates[0].status).toBe(expectedStatus)
    },
  )

  it('ONLY approve sets approved_by / approved_at', async () => {
    await handleReview(makeReq({ decision: 'approve', teacherGrade: '8' }))
    expect(spineUpdates[0].approved_by).toBe('admin-1')
    expect(typeof spineUpdates[0].approved_at).toBe('string')

    // reset and try a non-approve decision
    spineUpdates.length = 0
    opLog.length = 0
    await handleReview(makeReq({ decision: 'reject' }))
    expect(spineUpdates[0].approved_by).toBeUndefined()
    expect(spineUpdates[0].approved_at).toBeUndefined()
    expect(spineUpdates[0].status).toBe('rejected')
  })
})

describe('review - forced decision wrappers (approve/reject)', () => {
  it('forcedDecision overrides the body decision', async () => {
    // Body says "reject" but the approve wrapper forces approve.
    const res = await handleReview(
      makeReq({ decision: 'reject', teacherGrade: '7' }),
      'sub-1',
      'approve',
    )
    expect(res.status).toBe(200)
    expect(moderationRows[0].decision).toBe('approved')
    expect(spineUpdates[0].status).toBe('approved')
  })

  it('approve wrapper tolerates an empty/invalid body', async () => {
    const res = await handleReview(makeReq('not json'), 'sub-1', 'approve')
    expect(res.status).toBe(200)
    expect(spineUpdates[0].status).toBe('approved')
  })
})

describe('review - moderation label snapshot', () => {
  it('records ai vs teacher grade + before/after feedback on the moderation row', async () => {
    await handleReview(
      makeReq({
        decision: 'correct',
        teacherGrade: '7',
        teacherFeedback: 'Better than the AI thought.',
        adjustmentReason: 'AO2 underrated',
      }),
    )
    const row = moderationRows[0]
    expect(row.submission_id).toBe('sub-1')
    expect(row.reviewer_user_id).toBe('admin-1')
    expect(row.ai_grade).toBe('6')
    expect(row.teacher_grade).toBe('7')
    expect(row.ai_score).toBe(18)
    expect(row.teacher_score).toBe(7) // gradeToScore('7')
    expect(row.feedback_before).toBe('ai feedback')
    expect(row.feedback_after).toBe('Better than the AI thought.')
    expect(row.adjustment_reason).toBe('AO2 underrated')
  })

  it('"U" teacher grade has no numeric teacher_score', async () => {
    await handleReview(makeReq({ decision: 'correct', teacherGrade: 'U' }))
    expect(moderationRows[0].teacher_score).toBeNull()
  })
})

describe('review - spine update failure after moderation persisted', () => {
  it('returns 500 but the moderation row is already saved (audit preserved)', async () => {
    spineUpdateResult = { data: null, error: { message: 'spine boom' } }
    const res = await handleReview(makeReq({ decision: 'approve' }))
    expect(res.status).toBe(500)
    expect(moderationRows).toHaveLength(1) // audit trail kept
    expect((await res.json()).error).toMatch(/failed to update the submission/i)
  })
})

// ─── Stage 3: board-aware band/level marks (non-GCSE) ────────────────────────
describe('review - board-aware teacherBandMarks (IELTS / KS3 / EAL)', () => {
  it('accepts a valid IELTS band mark and persists it to teacher_band_marks', async () => {
    submissionFixture = {
      ...(submissionFixture as Record<string, unknown>),
      exam_board: 'IELTS',
      qualification: 'IELTS Academic Writing',
    }
    const res = await handleReview(
      makeReq({
        decision: 'approve',
        teacherBandMarks: {
          kind: 'band',
          overall: 6.5,
          criteria: { TR: 6, CC: 7, LR: 6.5, GRA: 6 },
        },
      }),
    )
    expect(res.status).toBe(200)
    expect(spineUpdates[0].teacher_band_marks).toEqual({
      kind: 'band',
      overall: 6.5,
      criteria: { TR: 6, CC: 7, LR: 6.5, GRA: 6 },
    })
  })

  it('rejects a band mark on a GCSE-graded row (wrong shape)', async () => {
    submissionFixture = {
      ...(submissionFixture as Record<string, unknown>),
      exam_board: 'AQA',
      qualification: null,
    }
    const res = await handleReview(
      makeReq({ decision: 'approve', teacherBandMarks: { kind: 'band', overall: 6.5 } }),
    )
    expect(res.status).toBe(400)
    expect((await res.json()).error).toMatch(/not valid for a GCSE/i)
  })

  it('rejects an off-grid IELTS band (not a 0.5 step)', async () => {
    submissionFixture = {
      ...(submissionFixture as Record<string, unknown>),
      exam_board: 'IELTS',
      qualification: 'IELTS',
    }
    const res = await handleReview(
      makeReq({ decision: 'approve', teacherBandMarks: { kind: 'band', overall: 6.25 } }),
    )
    expect(res.status).toBe(400)
    expect((await res.json()).error).toMatch(/overall/i)
  })

  it('rejects an unknown IELTS criterion code', async () => {
    submissionFixture = {
      ...(submissionFixture as Record<string, unknown>),
      exam_board: 'IELTS',
      qualification: 'IELTS',
    }
    const res = await handleReview(
      makeReq({
        decision: 'approve',
        teacherBandMarks: { kind: 'band', overall: 6, criteria: { XX: 6 } },
      }),
    )
    expect(res.status).toBe(400)
    expect((await res.json()).error).toMatch(/unknown criterion/i)
  })

  it('accepts a valid KS3 level mark', async () => {
    submissionFixture = {
      ...(submissionFixture as Record<string, unknown>),
      exam_board: 'KS3',
      qualification: 'KS3 English',
    }
    const res = await handleReview(
      makeReq({ decision: 'approve', teacherBandMarks: { kind: 'level', overall: 'Secure' } }),
    )
    expect(res.status).toBe(200)
    expect(spineUpdates[0].teacher_band_marks).toEqual({
      kind: 'level',
      overall: 'Secure',
      criteria: null,
    })
  })

  it('rejects an unknown KS3 level', async () => {
    submissionFixture = {
      ...(submissionFixture as Record<string, unknown>),
      exam_board: 'KS3',
      qualification: 'KS3 English',
    }
    const res = await handleReview(
      makeReq({ decision: 'approve', teacherBandMarks: { kind: 'level', overall: 'Wizard' } }),
    )
    expect(res.status).toBe(400)
    expect((await res.json()).error).toMatch(/overall/i)
  })

  it('a GCSE row with no band marks is byte-identical (teacher_band_marks unset)', async () => {
    // The original fixture has no exam_board → resolves to GCSE → band column
    // is never written.
    const res = await handleReview(makeReq({ decision: 'approve', teacherGrade: '7' }))
    expect(res.status).toBe(200)
    expect(spineUpdates[0].teacher_band_marks).toBeUndefined()
  })
})
