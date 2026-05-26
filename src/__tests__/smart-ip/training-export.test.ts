// ─── Smart-IP · GET /api/training/export ─────────────────────────────────────
//
// The shaper helpers (toJsonlRecord/toEvalCase/csvCell/assertNoPii) are NOT
// exported from the route module, so they are tested through the route's
// PUBLIC SURFACE: we mock Supabase/site-admin/rate-limit, feed crafted
// training_data rows, and parse the streamed response body.
//
// Contract under test:
//   • jsonl - EXACT { input, expected_output, metadata } shape
//   • csv   - header order + quoting/escaping; FK/PII columns absent
//   • eval  - matches evals/types.ts GoldStandardCase (gold = teacher marks)
//   • the PII assertion SKIPS a poisoned row and COUNTS it in
//     X-Training-Skipped-Pii (never emitted)
// ────────────────────────────────────────────────────────────────────────────

import { describe, it, expect, vi, beforeEach } from 'vitest'
import { NextRequest } from 'next/server'
import type { GoldStandardCase } from '../../../evals/types'

interface Session {
  user: { id: string; email?: string | null } | null
  error: { message: string } | null
}
let session: Session = { user: { id: 'admin-1', email: 'admin@site.test' }, error: null }
let siteAdmin = true
let rlResult = { success: true, remaining: 9, resetAt: Date.now() + 60_000 }
let queryResult: { data: unknown; error: unknown } = { data: [], error: null }

vi.mock('@/lib/supabase/server', () => ({
  createServerSupabaseClient: () => ({
    auth: { getUser: async () => ({ data: { user: session.user }, error: session.error }) },
  }),
  createServiceRoleClient: () => ({
    from: () => ({
      select: () => ({
        order: () => ({
          limit: async () => queryResult,
        }),
      }),
    }),
  }),
}))
vi.mock('@/lib/site-admin', () => ({ isSiteAdmin: () => siteAdmin }))
vi.mock('@/lib/rate-limit', () => ({
  rateLimit: async () => rlResult,
  getClientIp: () => '127.0.0.1',
}))

function row(over: Record<string, unknown> = {}) {
  return {
    anon_submission_id: 'a'.repeat(64), // 64-hex, no dashes → passes PII guard
    source_submission_id: '11111111-2222-3333-4444-555555555555',
    exam_board: 'AQA',
    qualification: 'GCSE',
    paper: 'Paper 1',
    question: 'Explore conflict.',
    question_type: 'extended',
    rubric_version: 'aqa-lit-p1@v2',
    student_answer: 'The candidate wrote this.',
    ai_predicted_mark: 20,
    teacher_final_mark: 23,
    mark_delta: 3,
    ai_feedback: 'AI said this.',
    teacher_final_feedback: 'Teacher said this.',
    teacher_correction_reason: 'AO2 underrated;Develop structure',
    grade_band: 'Grade 6-7',
    ao_scores: [{ id: 'AO1', marks: 11, maxMarks: 15 }],
    confidence_score: null,
    approved_at: '2026-05-10T00:00:00.000Z',
    model_version: 'anthropic/claude',
    prompt_version: 'aqa:scheme@abcd',
    anon_school_id: 'b'.repeat(64),
    anon_class_id: null,
    source: 'b2b_class',
    created_at: '2026-05-11T00:00:00.000Z',
    ...over,
  }
}

async function GET(url: string) {
  const mod = await import('@/app/api/training/export/route')
  return mod.GET(new NextRequest(url))
}

beforeEach(() => {
  session = { user: { id: 'admin-1', email: 'admin@site.test' }, error: null }
  siteAdmin = true
  rlResult = { success: true, remaining: 9, resetAt: Date.now() + 60_000 }
  queryResult = { data: [], error: null }
})

describe('training/export - auth & params', () => {
  it('401 when unauthenticated', async () => {
    session = { user: null, error: { message: 'x' } }
    const res = await GET('http://localhost/api/training/export?format=jsonl')
    expect(res.status).toBe(401)
  })

  it('403 when not a site admin', async () => {
    siteAdmin = false
    const res = await GET('http://localhost/api/training/export?format=jsonl')
    expect(res.status).toBe(403)
  })

  it('429 when rate-limited', async () => {
    rlResult = { success: false, remaining: 0, resetAt: Date.now() + 1000 }
    const res = await GET('http://localhost/api/training/export')
    expect(res.status).toBe(429)
  })

  it('400 on an unknown format', async () => {
    const res = await GET('http://localhost/api/training/export?format=xml')
    expect(res.status).toBe(400)
  })

  it('defaults to jsonl when format is omitted', async () => {
    queryResult = { data: [row()], error: null }
    const res = await GET('http://localhost/api/training/export')
    expect(res.status).toBe(200)
    expect(res.headers.get('Content-Type')).toMatch(/x-ndjson/)
  })
})

describe('training/export - JSONL exact shape', () => {
  it('emits exactly { input, expected_output, metadata } with teacher gold', async () => {
    queryResult = { data: [row()], error: null }
    const res = await GET('http://localhost/api/training/export?format=jsonl')
    expect(res.status).toBe(200)
    const text = await res.text()
    const lines = text.trim().split('\n')
    expect(lines).toHaveLength(1)
    const rec = JSON.parse(lines[0])

    expect(Object.keys(rec).sort()).toEqual(['expected_output', 'input', 'metadata'])
    expect(rec.input).toEqual({
      exam_board: 'AQA',
      qualification: 'GCSE',
      paper: 'Paper 1',
      question: 'Explore conflict.',
      question_type: 'extended',
      rubric: 'aqa-lit-p1@v2',
      student_answer: 'The candidate wrote this.',
    })
    expect(rec.expected_output).toEqual({
      mark: 23, // teacher_final_mark, the gold label
      grade_band: 'Grade 6-7',
      ao_breakdown: [{ id: 'AO1', marks: 11, maxMarks: 15 }],
      feedback: 'Teacher said this.',
      improvement_targets: ['AO2 underrated', 'Develop structure'], // split on ';'
    })
    expect(rec.metadata).toEqual({
      rubric_version: 'aqa-lit-p1@v2',
      teacher_approved: true,
      source: 'teacher_moderated',
      model_version: 'anthropic/claude',
      prompt_version: 'aqa:scheme@abcd',
    })
    // The raw FK must never appear anywhere in the serialised record.
    expect(lines[0]).not.toContain('11111111-2222-3333-4444-555555555555')
  })

  it('Content-Disposition is an attachment and X-Training-Records counts emitted rows', async () => {
    queryResult = { data: [row(), row({ anon_submission_id: 'c'.repeat(64) })], error: null }
    const res = await GET('http://localhost/api/training/export?format=jsonl')
    expect(res.headers.get('Content-Disposition')).toMatch(/attachment; filename="training-jsonl-/)
    expect(res.headers.get('X-Training-Records')).toBe('2')
    expect(res.headers.get('X-Training-Skipped-Pii')).toBe('0')
  })
})

describe('training/export - CSV header & escaping', () => {
  it('first line is the exact CSV header (FK / PII columns absent)', async () => {
    queryResult = { data: [], error: null }
    const res = await GET('http://localhost/api/training/export?format=csv')
    const text = await res.text()
    const header = text.split('\n')[0]
    expect(header).toBe(
      [
        'anon_submission_id',
        'source',
        'exam_board',
        'qualification',
        'paper',
        'question',
        'question_type',
        'rubric_version',
        'student_answer',
        'ai_predicted_mark',
        'teacher_final_mark',
        'mark_delta',
        'ai_feedback',
        'teacher_final_feedback',
        'teacher_correction_reason',
        'grade_band',
        'ao_scores',
        'confidence_score',
        'model_version',
        'prompt_version',
        'anon_school_id',
        'anon_class_id',
        'approved_at',
        'created_at',
      ].join(','),
    )
    expect(header).not.toContain('source_submission_id')
    expect(res.headers.get('Content-Type')).toMatch(/text\/csv/)
  })

  it('quotes every cell and escapes embedded quotes; strips CR; JSON-encodes objects', async () => {
    queryResult = {
      data: [
        row({
          student_answer: 'She said "hello"\r\nthen left,with a comma',
          ao_scores: [{ id: 'AO1', marks: 9, maxMarks: 15 }],
        }),
      ],
      error: null,
    }
    const res = await GET('http://localhost/api/training/export?format=csv')
    const text = await res.text()
    const dataLine = text.split('\n').slice(1).join('\n')
    // embedded double-quotes doubled
    expect(dataLine).toContain('"She said ""hello""')
    // CR removed (no \r in the output)
    expect(dataLine).not.toContain('\r')
    // object column serialised as JSON inside a quoted cell
    expect(dataLine).toContain('"[{""id"":""AO1"",""marks"":9,""maxMarks"":15}]"')
  })
})

describe('training/export - eval shape (GoldStandardCase)', () => {
  it('matches the evals/types.ts GoldStandardCase contract with teacher gold', async () => {
    queryResult = { data: [row()], error: null }
    const res = await GET('http://localhost/api/training/export?format=eval')
    const text = await res.text()
    const parsed = JSON.parse(text.trim().split('\n')[0])

    // Structurally assignable to GoldStandardCase.
    const evalCase: GoldStandardCase = parsed
    expect(evalCase.id).toBe(`teh-train-${'a'.repeat(16)}`)
    expect(evalCase.board).toBe('AQA')
    expect(evalCase.paper).toBe('Paper 1')
    expect(evalCase.markSchemeId).toBe('aqa-lit-p1@v2')
    expect(evalCase.studentAnswer).toBe('The candidate wrote this.')
    expect(evalCase.examinerMarks).toEqual([{ id: 'AO1', marks: 11, maxMarks: 15 }])
    expect(evalCase.examinerGrade).toBe('23') // teacher_final_mark as the gold
    expect(evalCase.synthetic).toBe(false)
    expect(evalCase.provenance).toContain('teacher-moderated')
    expect(evalCase.provenance).toContain('a'.repeat(64))
    // Must NOT smuggle the raw FK.
    expect(text).not.toContain('11111111-2222-3333-4444-555555555555')
  })

  it('examinerGrade falls back to "U" when teacher_final_mark is null', async () => {
    queryResult = { data: [row({ teacher_final_mark: null })], error: null }
    const res = await GET('http://localhost/api/training/export?format=eval')
    const parsed = JSON.parse((await res.text()).trim())
    expect(parsed.examinerGrade).toBe('U')
  })
})

describe('training/export - PII guard (strip + skip + count)', () => {
  it('defence-in-depth: a stray forbidden key (student_email) is STRIPPED, never emitted, row still safe', async () => {
    // stripForbidden() deletes every FORBIDDEN_EXPORT_KEY before assertNoPii,
    // so a leaked column is scrubbed (not skipped) and the row is still emitted
    // WITHOUT the email anywhere in the output.
    queryResult = {
      data: [
        row({ anon_submission_id: 'a'.repeat(64) }), // clean
        row({
          anon_submission_id: 'd'.repeat(64),
          student_email: 'leak@example.com',
          source_submission_id: '11111111-2222-3333-4444-555555555555',
        }),
      ],
      error: null,
    }
    const res = await GET('http://localhost/api/training/export?format=jsonl')
    const text = await res.text()
    const lines = text.trim().split('\n').filter(Boolean)

    expect(lines).toHaveLength(2) // both emitted; forbidden key scrubbed
    expect(text).not.toContain('leak@example.com')
    expect(text).not.toContain('11111111-2222-3333-4444-555555555555')
    expect(res.headers.get('X-Training-Records')).toBe('2')
    expect(res.headers.get('X-Training-Skipped-Pii')).toBe('0')
  })

  it('a row whose anon id is actually a raw UUID is treated as un-anonymised, SKIPPED and counted', async () => {
    queryResult = {
      data: [
        row({ anon_submission_id: '99999999-8888-7777-6666-555555555555' }), // looks raw
      ],
      error: null,
    }
    const res = await GET('http://localhost/api/training/export?format=eval')
    const text = await res.text()
    expect(text.trim()).toBe('') // nothing safe to emit
    expect(res.headers.get('X-Training-Skipped-Pii')).toBe('1')
    expect(res.headers.get('X-Training-Records')).toBe('0')
  })

  it('an email smuggled into anon_school_id trips the guard and is skipped+counted', async () => {
    queryResult = {
      data: [
        row({ anon_submission_id: 'a'.repeat(64), anon_school_id: 'pupil@leak.com' }),
        row({ anon_submission_id: 'e'.repeat(64) }), // clean → emitted
      ],
      error: null,
    }
    const res = await GET('http://localhost/api/training/export?format=jsonl')
    const text = await res.text()
    const lines = text.trim().split('\n').filter(Boolean)
    expect(lines).toHaveLength(1)
    expect(text).not.toContain('pupil@leak.com')
    expect(res.headers.get('X-Training-Skipped-Pii')).toBe('1')
    expect(res.headers.get('X-Training-Records')).toBe('1')
  })

  it('500 when the corpus query itself fails', async () => {
    queryResult = { data: null, error: { message: 'pg boom' } }
    const res = await GET('http://localhost/api/training/export?format=jsonl')
    expect(res.status).toBe(500)
  })
})
