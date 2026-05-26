// ─── Smart-IP · Training-Data Anonymiser ─────────────────────────────────────
//
// Pure, offline unit tests for `anonymiseRecord` (src/lib/training/anonymise.ts).
// No I/O, no network, no DB - the function is total and deterministic and the
// hash function is injected, so we inject a deterministic stub.
//
// Contract under test (the data-protection guarantees):
//   • submission / school / class ids survive ONLY as a hash (via injected fn)
//   • NO name / email / DOB / school-name / file-metadata field appears
//   • output keys are exactly the snake_case migration columns
//   • FORBIDDEN_EXPORT_KEYS never appear as output keys
//   • idempotent (same input ⇒ deeply equal output, re-runs stable)
//   • adversarial PII shoved into the *allowed* free-text fields is the
//     learner signal and is retained verbatim, but no NEW PII channel is opened
//     and the structural identifiers are still only present as hashes
// ────────────────────────────────────────────────────────────────────────────

import { describe, it, expect } from 'vitest'
import {
  anonymiseRecord,
  FORBIDDEN_EXPORT_KEYS,
  type RawSubmissionBundle,
  type AnonymisedTrainingRow,
} from '@/lib/training/anonymise'

// Deterministic stub. Real impl is SHA-256 hex; here we just need stability +
// uniqueness + "the raw value is NOT recoverable as a substring" (so leak
// assertions are meaningful). A tiny FNV-1a-ish digest over the input does that.
function fakeHash(value: string): string {
  let h = 0x811c9dc5
  for (let i = 0; i < value.length; i++) {
    h ^= value.charCodeAt(i)
    h = Math.imul(h, 0x01000193) >>> 0
  }
  // 16-hex deterministic digest, no dashes, never contains the raw input.
  return `${h.toString(16).padStart(8, '0')}${value.length.toString(16).padStart(8, '0')}`
}

/** A fully-populated, realistic raw bundle. */
function baseBundle(over: Partial<RawSubmissionBundle> = {}): RawSubmissionBundle {
  return {
    submissionId: 'sub-uuid-1',
    schoolId: 'school-uuid-1',
    classId: 'class-uuid-1',
    source: 'b2b_class',
    examBoard: 'AQA',
    qualification: 'GCSE',
    paper: 'Paper 1',
    questionText: 'Explore how the writer presents conflict.',
    questionType: 'extended',
    rubricVersion: 'aqa-lit-p1@v2',
    studentAnswer: 'The writer presents conflict through...',
    aiPredictedMark: 22.4,
    aiFeedback: 'Solid analysis, develop AO2.',
    aiGradeBand: 'Grade 6-7',
    aiAoBreakdown: [{ id: 'AO1', marks: 10, maxMarks: 12 }],
    aiConfidence: 0.7,
    teacherFinalMark: 25,
    teacherFinalFeedback: 'Strong - top of band 5.',
    teacherCorrectionReason: 'AO2 underrated by AI.',
    aoCorrections: [{ ao: 'AO2', score: 11, maxScore: 12 }],
    approvedAt: '2026-05-10T10:00:00.000Z',
    modelVersion: 'anthropic/claude-sonnet-4',
    promptVersion: 'aqa:scheme@abcd',
    ...over,
  }
}

// The exact set of keys the migration insert shape declares.
const EXPECTED_KEYS = [
  'anon_submission_id',
  'source_submission_id',
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
  'approved_at',
  'model_version',
  'prompt_version',
  'anon_school_id',
  'anon_class_id',
  'source',
].sort()

describe('anonymiseRecord - output shape', () => {
  it('emits exactly the snake_case migration columns (no extra keys)', () => {
    const row = anonymiseRecord(baseBundle(), fakeHash)
    expect(Object.keys(row).sort()).toEqual(EXPECTED_KEYS)
  })

  it('hashes submission / school / class ids via the injected hashId', () => {
    const row = anonymiseRecord(baseBundle(), fakeHash)
    expect(row.anon_submission_id).toBe(fakeHash('sub-uuid-1'))
    expect(row.anon_school_id).toBe(fakeHash('school-uuid-1'))
    expect(row.anon_class_id).toBe(fakeHash('class-uuid-1'))
    // The hash is NOT the raw id, and the raw id is not even a substring.
    expect(row.anon_submission_id).not.toBe('sub-uuid-1')
    expect(row.anon_submission_id).not.toContain('sub-uuid-1')
  })

  it('keeps the real FK ONLY in source_submission_id (service-role-only column)', () => {
    const row = anonymiseRecord(baseBundle(), fakeHash)
    expect(row.source_submission_id).toBe('sub-uuid-1')
    // ...and nowhere else: every OTHER value must not equal the raw id.
    const others = Object.entries(row).filter(([k]) => k !== 'source_submission_id')
    for (const [, v] of others) {
      expect(v).not.toBe('sub-uuid-1')
    }
  })

  it('null school/class stay null (b2c self-study has no school) and are NOT hashed', () => {
    const row = anonymiseRecord(
      baseBundle({ schoolId: null, classId: null, source: 'b2c_self' }),
      fakeHash,
    )
    expect(row.anon_school_id).toBeNull()
    expect(row.anon_class_id).toBeNull()
    expect(row.source).toBe('b2c_self')
  })
})

describe('anonymiseRecord - no PII keys', () => {
  it('none of FORBIDDEN_EXPORT_KEYS (except the audited FK) appear as output keys', () => {
    const row = anonymiseRecord(baseBundle(), fakeHash)
    const keys = new Set(Object.keys(row))
    for (const forbidden of FORBIDDEN_EXPORT_KEYS) {
      if (forbidden === 'source_submission_id') continue // intentionally present, stripped at export
      expect(keys.has(forbidden)).toBe(false)
    }
  })

  it('FORBIDDEN_EXPORT_KEYS list itself covers names/emails/dob/raw-ids/files', () => {
    for (const k of [
      'student_name',
      'student_email',
      'teacher_email',
      'parent_email',
      'date_of_birth',
      'dob',
      'school_name',
      'school_id',
      'class_id',
      'submission_id',
      'file_name',
      'file_path',
    ]) {
      expect(FORBIDDEN_EXPORT_KEYS).toContain(k)
    }
  })
})

describe('anonymiseRecord - derivations & coercions', () => {
  it('derives mark_delta = teacher − ai (rounded ints)', () => {
    const row = anonymiseRecord(
      baseBundle({ aiPredictedMark: 22.4, teacherFinalMark: 25 }),
      fakeHash,
    )
    // 22.4 → 22 ; 25 → 25 ; delta = 3
    expect(row.ai_predicted_mark).toBe(22)
    expect(row.teacher_final_mark).toBe(25)
    expect(row.mark_delta).toBe(3)
  })

  it('mark_delta is null when either mark is null', () => {
    expect(anonymiseRecord(baseBundle({ aiPredictedMark: null }), fakeHash).mark_delta).toBeNull()
    expect(anonymiseRecord(baseBundle({ teacherFinalMark: null }), fakeHash).mark_delta).toBeNull()
  })

  it('non-finite numbers never leak (NaN/Infinity → null)', () => {
    const row = anonymiseRecord(
      baseBundle({ aiPredictedMark: NaN, teacherFinalMark: Infinity, aiConfidence: NaN }),
      fakeHash,
    )
    expect(row.ai_predicted_mark).toBeNull()
    expect(row.teacher_final_mark).toBeNull()
    expect(row.confidence_score).toBeNull()
    expect(row.mark_delta).toBeNull()
  })

  it('blank/whitespace strings collapse to null (never empty string)', () => {
    const row = anonymiseRecord(
      baseBundle({
        examBoard: '   ',
        aiFeedback: '',
        teacherCorrectionReason: '\n\t ',
        aiGradeBand: '',
      }),
      fakeHash,
    )
    expect(row.exam_board).toBeNull()
    expect(row.ai_feedback).toBeNull()
    expect(row.teacher_correction_reason).toBeNull()
    expect(row.grade_band).toBeNull()
  })

  it('ao_scores prefers teacher corrections, falls back to AI breakdown, then null', () => {
    const corrections = [{ ao: 'AO2', score: 11 }]
    const aiBreak = [{ id: 'AO1', marks: 9 }]
    expect(
      anonymiseRecord(baseBundle({ aoCorrections: corrections, aiAoBreakdown: aiBreak }), fakeHash)
        .ao_scores,
    ).toEqual(corrections)
    expect(
      anonymiseRecord(baseBundle({ aoCorrections: null, aiAoBreakdown: aiBreak }), fakeHash)
        .ao_scores,
    ).toEqual(aiBreak)
    expect(
      anonymiseRecord(baseBundle({ aoCorrections: null, aiAoBreakdown: null }), fakeHash).ao_scores,
    ).toBeNull()
  })

  it('student_answer is retained verbatim (it is the markable signal)', () => {
    const answer = '  leading and trailing whitespace kept verbatim  '
    const row = anonymiseRecord(baseBundle({ studentAnswer: answer }), fakeHash)
    expect(row.student_answer).toBe(answer)
  })
})

describe('anonymiseRecord - idempotency & determinism', () => {
  it('same input ⇒ deeply-equal output across repeated calls', () => {
    const b = baseBundle()
    const a1 = anonymiseRecord(b, fakeHash)
    const a2 = anonymiseRecord(b, fakeHash)
    expect(a2).toEqual(a1)
  })

  it('re-anonymising is stable (function is total/pure, no hidden state)', () => {
    const b = baseBundle()
    const first = anonymiseRecord(b, fakeHash)
    for (let i = 0; i < 5; i++) {
      expect(anonymiseRecord(b, fakeHash)).toEqual(first)
    }
  })
})

describe('anonymiseRecord - adversarial PII input', () => {
  it('does NOT read any name/email/DOB field - they are absent from the input type', () => {
    // Shove identifiers into a bundle as *extra* properties. The function must
    // never copy them because it only reads the declared fields.
    const poisoned = {
      ...baseBundle(),
      studentName: 'Jane Q. Pupil',
      studentEmail: 'jane@example.com',
      dateOfBirth: '2009-04-01',
      schoolName: 'St Example High',
      fileName: 'jane-essay.docx',
    } as unknown as RawSubmissionBundle

    const row = anonymiseRecord(poisoned, fakeHash) as AnonymisedTrainingRow &
      Record<string, unknown>

    const serialised = JSON.stringify(row)
    expect(serialised).not.toContain('Jane Q. Pupil')
    expect(serialised).not.toContain('jane@example.com')
    expect(serialised).not.toContain('2009-04-01')
    expect(serialised).not.toContain('St Example High')
    expect(serialised).not.toContain('jane-essay.docx')
    // And the poison keys did not become output keys.
    for (const k of ['studentName', 'studentEmail', 'dateOfBirth', 'schoolName', 'fileName']) {
      expect(k in row).toBe(false)
    }
  })

  it('raw ids only ever surface hashed (except the audited source FK)', () => {
    const row = anonymiseRecord(
      baseBundle({ submissionId: 'RAW-SUB', schoolId: 'RAW-SCH', classId: 'RAW-CLS' }),
      fakeHash,
    )
    const exceptFk = JSON.stringify({ ...row, source_submission_id: undefined })
    expect(exceptFk).not.toContain('RAW-SUB')
    expect(exceptFk).not.toContain('RAW-SCH')
    expect(exceptFk).not.toContain('RAW-CLS')
    expect(row.anon_submission_id).toBe(fakeHash('RAW-SUB'))
    expect(row.anon_school_id).toBe(fakeHash('RAW-SCH'))
    expect(row.anon_class_id).toBe(fakeHash('RAW-CLS'))
  })
})
