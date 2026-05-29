// Offline unit tests for the Marking Engine V2 persistence ADAPTER (P5.2).
//
// WHY OFFLINE: the adapter takes an INJECTED writer (EngineSubmissionWriter), so
// these tests pass a hand-written mock and assert the row SHAPE that WOULD be
// written — there is no real database connection and no Prisma client import. The
// guarantee we are protecting: a validated MarkingResultV2 maps onto exactly the
// expected `marking_submissions` columns (the full result into `aiResult`,
// confidence + versions + packVersion carried, needsHumanReview persisted).

import { describe, it, expect, vi } from 'vitest'
import type { MarkingErrorType, MarkingErrorSeverity } from '../../error-taxonomy'
import type { MarkingResultV2 } from '../../result-schema'
import {
  mapEngineResultToRow,
  persistEngineResult,
  type EngineSubmissionRow,
  type EngineSubmissionWriter,
} from '../persist'

// ─── Fixtures ─────────────────────────────────────────────────────────────────

/**
 * A minimal but VALID band-scale (IELTS) MarkingResultV2. Built field-by-field so
 * each assertion can point at a known input value. `overall.kind === 'band'`
 * exercises the proposedOverallBand + bandRange projections.
 */
function makeBandResult(overrides: Partial<MarkingResultV2> = {}): MarkingResultV2 {
  const base: MarkingResultV2 = {
    schemaVersion: 2,
    packVersion: 'ielts_writing_v2025.1',
    module: 'ielts_writing',
    board: 'IELTS',
    taskType: 'IELTS_Writing_Task2',
    criteria: [
      {
        scale: 'band',
        code: 'TR',
        label: 'Task Response',
        descriptorMatched: 'addresses all parts of the task',
        evidence: [
          {
            quote: 'In conclusion, both views have merit.',
            explanation: 'Signposted conclusion addressing the prompt.',
            verified: true,
          },
        ],
        confidence: 0.82,
        rationale: 'All parts addressed with a clear position.',
        band: 7,
        maxBand: 9,
      },
    ],
    overall: {
      kind: 'band',
      overallBand: 6.5,
      proposedOverallBand: 7,
      bandRange: [6, 7],
    },
    errors: [],
    integrityFlags: {
      under_length: false,
      off_topic: false,
      likely_memorised: false,
      copied_from_prompt: false,
    },
    validationFlags: {
      unverifiedEvidenceCount: 0,
      overallDisagreement: false,
      selfConsistencyRun: true,
      selfConsistencyDiverged: true,
    },
    overallConfidence: 0.78,
    needsHumanReview: true,
    feedback: {
      strengths: [{ point: 'Clear position throughout.' }],
      improvements: [{ point: 'Develop the second body paragraph.' }],
      nextAction: 'Add a concrete example to paragraph two.',
      summary: 'A solid Band 6.5 response with room to develop ideas.',
    },
    holisticNote: 'Competent response, borderline 6.5/7.',
    borderlineFlags: ['TR borderline 6/7: development thin'],
    provenance: {
      modelVersionId: 'mv-123',
      promptVersionId: 'pv-456',
      rubricVersionId: 'rv-789',
      markedAt: '2026-05-29T12:00:00.000Z',
      runCount: 3,
    },
  }
  return { ...base, ...overrides }
}

/**
 * A minimal VALID grade-scale (GCSE) MarkingResultV2. `overall.kind === 'grade'`
 * proves the band-only projections (proposedOverallBand / bandRange) fall to null.
 */
function makeGradeResult(): MarkingResultV2 {
  return {
    schemaVersion: 2,
    packVersion: 'aqa_english_lang_v2025.1',
    module: 'gcse_english',
    board: 'AQA',
    subject: 'LANGUAGE',
    qualification: 'GCSE',
    taskType: 'AQA_Paper1_Q5',
    criteria: [
      {
        scale: 'marks',
        code: 'AO5',
        label: 'Content and Organisation',
        descriptorMatched: 'Level 4: convincing, compelling writing',
        evidence: [{ quote: 'The storm raged on.', explanation: 'Vivid imagery.', verified: true }],
        confidence: 0.7,
        rationale: 'Compelling and consistently crafted.',
        awardedMarks: 20,
        maxMarks: 24,
        band: 'Level 4',
      },
    ],
    overall: {
      kind: 'grade',
      totalMarks: 32,
      maxMarks: 40,
      predictedGrade: '7',
      gradeBand: 'Grade 7',
    },
    errors: [],
    integrityFlags: {
      under_length: false,
      off_topic: false,
      likely_memorised: false,
      copied_from_prompt: false,
    },
    validationFlags: {
      unverifiedEvidenceCount: 0,
      overallDisagreement: false,
      selfConsistencyRun: false,
      selfConsistencyDiverged: false,
      gradeIndicativeOnly: true,
    },
    overallConfidence: 0.65,
    needsHumanReview: false,
    feedback: {
      strengths: [{ point: 'Strong imagery.' }],
      improvements: [{ point: 'Vary sentence openings.' }],
      nextAction: 'Reduce repetition of "the".',
      summary: 'A secure Grade 7 piece.',
    },
    provenance: {
      markedAt: '2026-05-29T12:00:00.000Z',
      runCount: 1,
    },
  }
}

/**
 * A spy writer satisfying EngineSubmissionWriter. Records the `update` args so a
 * test can assert the row SHAPE; resolves to a sentinel so we can also prove the
 * adapter returns the writer's result unchanged.
 */
function makeSpyWriter(): {
  writer: EngineSubmissionWriter
  update: ReturnType<typeof vi.fn>
} {
  const update = vi.fn(async () => ({ id: 'updated-row' }))
  const writer: EngineSubmissionWriter = {
    markingSubmission: {
      update: update as unknown as EngineSubmissionWriter['markingSubmission']['update'],
    },
  }
  return { writer, update }
}

// ─── mapEngineResultToRow ───────────────────────────────────────────────────────

describe('mapEngineResultToRow', () => {
  it('writes the FULL MarkingResultV2 verbatim to aiResult (audit source of truth)', () => {
    const result = makeBandResult()
    const row = mapEngineResultToRow(result)
    // Same object identity is fine — the adapter stores the result as-is. Assert
    // deep equality so an accidental projection/strip is caught.
    expect(row.aiResult).toEqual(result)
  })

  it('carries overallConfidence into aiConfidence', () => {
    const row = mapEngineResultToRow(makeBandResult({ overallConfidence: 0.42 }))
    expect(row.aiConfidence).toBe(0.42)
  })

  it('carries packVersion and schemaVersion', () => {
    const row = mapEngineResultToRow(makeBandResult())
    expect(row.packVersion).toBe('ielts_writing_v2025.1')
    expect(row.resultSchemaVersion).toBe(2)
  })

  it('persists needsHumanReview', () => {
    expect(mapEngineResultToRow(makeBandResult({ needsHumanReview: true })).needsHumanReview).toBe(
      true,
    )
    expect(mapEngineResultToRow(makeBandResult({ needsHumanReview: false })).needsHumanReview).toBe(
      false,
    )
  })

  it('carries provenance version ids', () => {
    const row = mapEngineResultToRow(makeBandResult())
    expect(row.modelVersionId).toBe('mv-123')
    expect(row.promptVersionId).toBe('pv-456')
    expect(row.rubricVersionId).toBe('rv-789')
  })

  it('projects absent provenance ids to null (column is nullable)', () => {
    const result = makeBandResult({
      provenance: { markedAt: '2026-05-29T12:00:00.000Z', runCount: 1 },
    })
    const row = mapEngineResultToRow(result)
    expect(row.modelVersionId).toBeNull()
    expect(row.promptVersionId).toBeNull()
    expect(row.rubricVersionId).toBeNull()
  })

  it('projects proposedOverallBand + bandRange from a band-scale overall', () => {
    const row = mapEngineResultToRow(makeBandResult())
    expect(row.proposedOverallBand).toBe(7)
    expect(row.bandRange).toEqual([6, 7])
  })

  it('nulls bandRange when a band overall has no divergence range', () => {
    const result = makeBandResult({
      overall: { kind: 'band', overallBand: 7, proposedOverallBand: 7 },
    })
    const row = mapEngineResultToRow(result)
    expect(row.proposedOverallBand).toBe(7)
    expect(row.bandRange).toBeNull()
  })

  it('nulls band-only projections for a grade-scale (GCSE) overall', () => {
    const row = mapEngineResultToRow(makeGradeResult())
    expect(row.proposedOverallBand).toBeNull()
    expect(row.bandRange).toBeNull()
  })

  it('projects errors into markingErrors as a fresh array (for §4 analytics)', () => {
    // Build one taxonomy-tagged error. We do not hardcode taxonomy spellings into
    // a literal-typed slot; a localized cast keeps the fixture compiling against
    // whatever the closed taxonomy defines, without `any`.
    const errorType = 'GRAMMAR' as MarkingErrorType
    const severity = 'minor' as MarkingErrorSeverity
    const result = makeBandResult({
      errors: [
        {
          type: errorType,
          quote: 'he go',
          correction: 'he goes',
          severity,
          verified: true,
        },
      ],
    })
    const row = mapEngineResultToRow(result)
    expect(row.markingErrors).toHaveLength(1)
    expect(row.markingErrors[0]).toMatchObject({ quote: 'he go', correction: 'he goes' })
    // Fresh array: not the same reference as the input (defensive copy).
    expect(row.markingErrors).not.toBe(result.errors)
  })

  it('defaults markingErrors to an empty array when there are no errors', () => {
    const row = mapEngineResultToRow(makeBandResult({ errors: [] }))
    expect(row.markingErrors).toEqual([])
  })
})

// ─── persistEngineResult ────────────────────────────────────────────────────────

describe('persistEngineResult', () => {
  it('UPDATEs the row keyed by submissionId with the mapped data (offline mock)', async () => {
    const { writer, update } = makeSpyWriter()
    const result = makeBandResult()

    await persistEngineResult(writer, { submissionId: 'sub-1' }, result)

    expect(update).toHaveBeenCalledTimes(1)
    const args = update.mock.calls[0]?.[0] as {
      where: { id: string }
      data: EngineSubmissionRow
    }
    expect(args.where).toEqual({ id: 'sub-1' })
    // The written data is exactly the pure mapping — assert SHAPE, not a live insert.
    expect(args.data).toEqual(mapEngineResultToRow(result))
  })

  it('returns whatever the injected writer resolves to', async () => {
    const { writer } = makeSpyWriter()
    const out = await persistEngineResult<{ id: string }>(
      writer,
      { submissionId: 'sub-2' },
      makeBandResult(),
    )
    expect(out).toEqual({ id: 'updated-row' })
  })

  it('is idempotent: re-running with the same id + result writes identical data', async () => {
    const { writer, update } = makeSpyWriter()
    const result = makeBandResult()

    await persistEngineResult(writer, { submissionId: 'sub-3' }, result)
    await persistEngineResult(writer, { submissionId: 'sub-3' }, result)

    expect(update).toHaveBeenCalledTimes(2)
    const first = update.mock.calls[0]?.[0]
    const second = update.mock.calls[1]?.[0]
    expect(second).toEqual(first)
  })
})
