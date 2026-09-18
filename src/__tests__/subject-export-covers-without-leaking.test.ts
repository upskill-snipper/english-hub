import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { SUPABASE_SUBJECT_TABLES } from '@/lib/data-retention'

/**
 * A subject-access export that missed seven tables, and would have leaked
 * children's work if it had not (PAY-9).
 *
 * THE DEFECT (19 September 2026). `SUPABASE_SUBJECT_TABLES` listed 11 tables.
 * Seven more are keyed to `auth.users` and were absent, so an export said
 * nothing about them at all - not "we hold none", simply nothing, while the
 * module's own header claimed the map exists so an export "can enumerate what
 * it read instead of implying a completeness it cannot prove".
 *
 * THE TRAP IN THE OBVIOUS FIX, WHICH IS WHY `columns` EXISTS. The compiler runs
 * `.from(table).select('*')` with a SERVICE-ROLE client, so RLS gives no
 * protection. Two of the seven are keyed on a TEACHER and every substantive
 * field in them describes a PUPIL: `teacher_moderations` holds grades, AO
 * corrections and feedback about a submission, and `examiner_marking_runs`
 * holds an actual transcript of a child's handwriting plus a candidate label
 * that may be their name.
 *
 * Adding those two the obvious way would have sent one child's marked work to a
 * different person on request - a disclosure, dressed as a compliance fix, in
 * the exact feature that exists to satisfy the law. UK GDPR Art. 15(4) and DPA
 * 2018 Sch. 2 para. 16 both say the right of access stops at another
 * individual's data.
 *
 * So entries may now carry an explicit column projection, and the two
 * teacher-keyed tables carry one that proves the work happened without
 * describing it.
 */

const DATA_RETENTION = readFileSync(join(process.cwd(), 'src/lib/data-retention.ts'), 'utf8')

function entry(table: string) {
  const found = SUPABASE_SUBJECT_TABLES.find((t) => t.table === table)
  expect(found, `${table} is not in SUPABASE_SUBJECT_TABLES`).toBeDefined()
  return found!
}

// ─── Coverage ───────────────────────────────────────────────────────────────

describe('the tables an export reads', () => {
  it.each([
    ['school_students', 'user_id'],
    ['trustpilot_invite', 'user_id'],
    ['examiner_mark_schemes', 'owner_id'],
    ['consent_tokens', 'student_id'],
    ['affiliate_accounts', 'user_id'],
    ['teacher_moderations', 'reviewer_user_id'],
    ['examiner_marking_runs', 'owner_id'],
  ])('now includes %s, keyed on %s', (table, column) => {
    expect(entry(table).column).toBe(column)
  })

  it('keeps everything it already covered', () => {
    for (const table of [
      'enrolments',
      'module_progress',
      'assessment_attempts',
      'certificates',
      'practice_sessions',
      'parental_consents',
      'human_review_requests',
      'quiz_responses',
      'marking_submissions',
      'class_students',
      'school_members',
    ]) {
      expect(SUPABASE_SUBJECT_TABLES.map((t) => t.table)).toContain(table)
    }
  })

  it('has no duplicate entries', () => {
    const names = SUPABASE_SUBJECT_TABLES.map((t) => t.table)
    expect(names.length).toBe(new Set(names).size)
  })
})

// ─── The part that must never regress ───────────────────────────────────────

describe('tables keyed on a teacher but describing a pupil', () => {
  it('teacher_moderations exports the fact, never the content', () => {
    const cols = entry('teacher_moderations').columns
    expect(cols, 'a projection is mandatory here').toBeDefined()
    expect([...cols!].sort()).toEqual(['created_at', 'decision', 'id', 'submission_id'])
  })

  it.each([
    'ai_grade',
    'teacher_grade',
    'ai_score',
    'teacher_score',
    'ao_corrections',
    'feedback_before',
    'feedback_after',
    'adjustment_reason',
    'moderation_notes',
  ])('teacher_moderations never exports %s', (col) => {
    // Every one of these describes a pupil's submission, not the reviewer.
    expect(entry('teacher_moderations').columns).not.toContain(col)
  })

  it.each(['transcript', 'transcript_notes', 'commentary', 'candidate_label', 'mark_note'])(
    'examiner_marking_runs never exports %s',
    (col) => {
      // `transcript` is a transcription of a child's handwritten answer;
      // `candidate_label` may be that child's name.
      expect(entry('examiner_marking_runs').columns).not.toContain(col)
    },
  )

  it('examiner_marking_runs still proves the run happened', () => {
    const cols = entry('examiner_marking_runs').columns!
    for (const col of ['id', 'pack_id', 'question_id', 'mark', 'max_mark', 'created_at']) {
      expect(cols).toContain(col)
    }
  })
})

describe('credentials and financial identifiers', () => {
  it('never exports a live consent token', () => {
    // The token is the primary key AND a live credential: whoever holds it can
    // grant or withdraw parental consent for the account.
    expect(entry('consent_tokens').columns).not.toContain('token')
  })

  it('never exports the parent email from a consent token', () => {
    expect(entry('consent_tokens').columns).not.toContain('parent_email')
  })

  it.each(['bank_account_number', 'bank_sort_code', 'bank_account_name'])(
    'keeps %s out of a self-service download',
    (col) => {
      expect(entry('affiliate_accounts').columns).not.toContain(col)
    },
  )

  it('still exports the affiliate data that is not a bank identifier', () => {
    const cols = entry('affiliate_accounts').columns!
    for (const col of ['code', 'status', 'tier', 'confirmed_referral_count', 'payout_method']) {
      expect(cols).toContain(col)
    }
  })
})

// ─── Every narrowed table has to say why ────────────────────────────────────

describe('a narrowed export is honest about being narrowed', () => {
  it.each(SUPABASE_SUBJECT_TABLES.filter((t) => t.columns).map((t) => t.table))(
    '%s carries a reason',
    (table) => {
      // Without this, a projection silently implies "this is everything we
      // hold", which is the completeness claim this module exists to avoid.
      expect(entry(table).note, `${table} is narrowed with no stated reason`).toBeTruthy()
      expect(entry(table).note!.length).toBeGreaterThan(40)
    },
  )

  it('sends the reason out with the data', () => {
    expect(DATA_RETENTION).toMatch(/\.\.\.\(note \? \{ note \} : \{\}\)/)
  })
})

// ─── The compiler actually honours the projection ───────────────────────────

describe('the export compiler', () => {
  it('selects the projection rather than everything', () => {
    expect(DATA_RETENTION).toMatch(/const projection = columns && columns\.length > 0/)
    expect(DATA_RETENTION).toMatch(/\.select\(projection\)/)
  })

  it('no longer hard-codes select(*) for subject tables', () => {
    const compiler = DATA_RETENTION.slice(
      DATA_RETENTION.indexOf('export async function compileSupabaseNativeSubjectData'),
    )
    expect(compiler).not.toMatch(/\.from\(table\)\.select\('\*'\)/)
  })
})
