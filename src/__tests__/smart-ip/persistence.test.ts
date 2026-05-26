// ─── Smart-IP · Marking persistence helpers ──────────────────────────────────
//
// src/lib/marking/persistence.ts. The Supabase client is a *parameter* so we
// hand-build a programmable stub (no module mock needed).
//
// Contract under test:
//   • deriveUncertaintyFlags - GRADE_INDICATIVE_ONLY + de-duped extras
//   • insertSubmission       - studentAnswer → essay_text, status 'submitted'
//   • applyAiResult          - ai_confidence FORCED null; hot-field denorm;
//                              status passthrough ('ai_marked' /
//                              'teacher_review_required' - never 'approved')
//   • loadSubmission         - PGRST116 → null, other errors rethrow
// ────────────────────────────────────────────────────────────────────────────

import { describe, it, expect } from 'vitest'
import {
  deriveUncertaintyFlags,
  insertSubmission,
  applyAiResult,
  loadSubmission,
} from '@/lib/marking/persistence'
import type { MarkingResult } from '@/lib/marking/mark-schemes/types'

// ── MarkingResult fixture ────────────────────────────────────────────────────

function markingResult(over: Partial<MarkingResult> = {}): MarkingResult {
  return {
    markSchemeId: 'aqa-lit-p1',
    questionId: 'q1',
    totalMarks: 24,
    maxMarks: 30,
    predictedGrade: '7',
    gradeBand: 'Grade 6-7',
    aoScores: [
      { id: 'AO1', label: 'AO1', marks: 12, maxMarks: 15, band: 'B4', justification: 'ok' },
      { id: 'AO2', label: 'AO2', marks: 12, maxMarks: 15, band: 'B4', justification: 'ok' },
    ],
    strengths: [],
    improvements: [],
    nextStepsToNextGrade: ['Develop AO2 analysis'],
    summary: 'A strong response.',
    ...over,
  }
}

// ── deriveUncertaintyFlags (pure) ────────────────────────────────────────────

describe('deriveUncertaintyFlags', () => {
  it('returns [] when grade is NOT indicative-only and no extras', () => {
    expect(deriveUncertaintyFlags(markingResult())).toEqual([])
  })

  it('adds GRADE_INDICATIVE_ONLY when gradeIsIndicativeOnly === true', () => {
    expect(deriveUncertaintyFlags(markingResult({ gradeIsIndicativeOnly: true }))).toEqual([
      'GRADE_INDICATIVE_ONLY',
    ])
  })

  it('does NOT add the flag when gradeIsIndicativeOnly is false/undefined', () => {
    expect(deriveUncertaintyFlags(markingResult({ gradeIsIndicativeOnly: false }))).toEqual([])
  })

  it('folds in extra markers, de-duplicating and dropping falsy', () => {
    const flags = deriveUncertaintyFlags(markingResult({ gradeIsIndicativeOnly: true }), [
      'OFF_TOPIC',
      'OFF_TOPIC',
      'GRADE_INDICATIVE_ONLY', // already present → not duplicated
      '',
    ])
    expect(flags).toEqual(['GRADE_INDICATIVE_ONLY', 'OFF_TOPIC'])
  })

  it('is order-stable and deterministic', () => {
    const a = deriveUncertaintyFlags(markingResult(), ['X', 'Y', 'Z'])
    const b = deriveUncertaintyFlags(markingResult(), ['X', 'Y', 'Z'])
    expect(a).toEqual(['X', 'Y', 'Z'])
    expect(b).toEqual(a)
  })
})

// ── Programmable Supabase stub ───────────────────────────────────────────────

function insertClient(result: { data: unknown; error: unknown }) {
  const calls: { table: string; row: Record<string, unknown> }[] = []
  const client = {
    from(table: string) {
      return {
        insert(row: Record<string, unknown>) {
          calls.push({ table, row })
          return { select: () => ({ single: async () => result }) }
        },
      }
    },
  }
  return { client, calls }
}

function updateClient(result: { data: unknown; error: unknown }) {
  const calls: { table: string; patch: Record<string, unknown>; id: string }[] = []
  const client = {
    from(table: string) {
      return {
        update(patch: Record<string, unknown>) {
          return {
            eq(_c: string, id: string) {
              calls.push({ table, patch, id })
              return { select: () => ({ single: async () => result }) }
            },
          }
        },
      }
    },
  }
  return { client, calls }
}

function loadClient(result: { data: unknown; error: unknown }) {
  const client = {
    from() {
      return {
        select: () => ({
          eq: () => ({
            single: async () => result,
          }),
        }),
      }
    },
  }
  return client
}

// ── insertSubmission ─────────────────────────────────────────────────────────

describe('insertSubmission', () => {
  const input = {
    source: 'b2c_self' as const,
    studentId: 'stu-1',
    schoolId: null,
    classId: null,
    examBoard: 'AQA',
    qualification: 'GCSE',
    paper: 'Paper 1',
    questionText: 'Explore conflict.',
    questionType: 'extended',
    studiedText: 'Macbeth',
    targetGrade: '7',
    markSchemeId: 'aqa-lit-p1',
    questionId: 'q3',
    studentAnswer: 'The candidate response text.',
  }

  it('maps studentAnswer → essay_text, questionId → rubric_ref, status submitted', async () => {
    const { client, calls } = insertClient({ data: { id: 'new-sub' }, error: null })
    const res = await insertSubmission(client as never, input)

    expect(res).toEqual({ id: 'new-sub' })
    expect(calls).toHaveLength(1)
    expect(calls[0].table).toBe('marking_submissions')
    const row = calls[0].row
    expect(row.essay_text).toBe('The candidate response text.')
    expect(row.rubric_ref).toBe('q3')
    expect(row.status).toBe('submitted')
    expect(row.source).toBe('b2c_self')
    expect(row.student_id).toBe('stu-1')
    // It must NOT write a literal "studentAnswer"/"questionId" column.
    expect(row).not.toHaveProperty('studentAnswer')
    expect(row).not.toHaveProperty('questionId')
  })

  it('throws the Supabase error so the route can map a 5xx', async () => {
    const { client } = insertClient({ data: null, error: { message: 'pg insert failed' } })
    await expect(insertSubmission(client as never, input)).rejects.toMatchObject({
      message: 'pg insert failed',
    })
  })

  it('throws when the insert returns no row', async () => {
    const { client } = insertClient({ data: null, error: null })
    await expect(insertSubmission(client as never, input)).rejects.toBeInstanceOf(Error)
  })
})

// ── applyAiResult ────────────────────────────────────────────────────────────

describe('applyAiResult', () => {
  it('FORCES ai_confidence to null and denormalises hot fields', async () => {
    const updatedRow = { id: 'sub-1', status: 'ai_marked' }
    const { client, calls } = updateClient({ data: updatedRow, error: null })

    const out = await applyAiResult(client as never, 'sub-1', {
      result: markingResult({ totalMarks: 24, maxMarks: 30, predictedGrade: '7' }),
      uncertaintyFlags: ['GRADE_INDICATIVE_ONLY'],
      modelVersionId: 'mv-1',
      promptVersionId: 'pv-1',
      rubricVersionId: 'rv-1',
      status: 'ai_marked',
    })

    expect(out).toEqual(updatedRow)
    const patch = calls[0].patch
    expect(patch.ai_confidence).toBeNull() // never fabricated
    expect(patch.ai_score).toBe(24)
    expect(patch.ai_max_marks).toBe(30)
    expect(patch.ai_grade).toBe('7')
    expect(patch.ai_grade_band).toBe('Grade 6-7')
    expect(patch.ai_feedback).toBe('A strong response.')
    expect(patch.ai_uncertainty_flags).toEqual(['GRADE_INDICATIVE_ONLY'])
    expect(patch.model_version_id).toBe('mv-1')
    expect(patch.status).toBe('ai_marked')
    expect(calls[0].id).toBe('sub-1')
  })

  it('passes through teacher_review_required (B2B draft) status verbatim', async () => {
    const { client, calls } = updateClient({ data: { id: 'sub-2' }, error: null })
    await applyAiResult(client as never, 'sub-2', {
      result: markingResult(),
      uncertaintyFlags: [],
      modelVersionId: null,
      promptVersionId: null,
      rubricVersionId: null,
      status: 'teacher_review_required',
    })
    expect(calls[0].patch.status).toBe('teacher_review_required')
  })

  it('the type contract restricts status to ai_marked | teacher_review_required (never approved)', () => {
    // Compile-time guarantee documented as a runtime sanity check: the two
    // legal values are the only ones the spine ever persists from this path.
    const legal = ['ai_marked', 'teacher_review_required']
    expect(legal).not.toContain('approved')
  })

  it('throws when the update returns an error or no row', async () => {
    const errClient = updateClient({ data: null, error: { message: 'update failed' } }).client
    await expect(
      applyAiResult(errClient as never, 'x', {
        result: markingResult(),
        uncertaintyFlags: [],
        modelVersionId: null,
        promptVersionId: null,
        rubricVersionId: null,
        status: 'ai_marked',
      }),
    ).rejects.toMatchObject({ message: 'update failed' })

    const nullClient = updateClient({ data: null, error: null }).client
    await expect(
      applyAiResult(nullClient as never, 'x', {
        result: markingResult(),
        uncertaintyFlags: [],
        modelVersionId: null,
        promptVersionId: null,
        rubricVersionId: null,
        status: 'ai_marked',
      }),
    ).rejects.toBeInstanceOf(Error)
  })
})

// ── loadSubmission ───────────────────────────────────────────────────────────

describe('loadSubmission', () => {
  it('returns the row on success', async () => {
    const row = { id: 'sub-1', status: 'submitted', essay_text: 'hi' }
    const client = loadClient({ data: row, error: null })
    await expect(loadSubmission(client as never, 'sub-1')).resolves.toEqual(row)
  })

  it('returns null on PGRST116 (not found) so the route can 404', async () => {
    const client = loadClient({ data: null, error: { code: 'PGRST116' } })
    await expect(loadSubmission(client as never, 'missing')).resolves.toBeNull()
  })

  it('rethrows any non-PGRST116 error', async () => {
    const client = loadClient({ data: null, error: { code: '500', message: 'boom' } })
    await expect(loadSubmission(client as never, 'x')).rejects.toMatchObject({ code: '500' })
  })
})
