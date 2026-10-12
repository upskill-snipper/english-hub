// @vitest-environment node
import { describe, it, expect } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { StatusBadge } from './StatusBadge'
import { ObjectiveMarksEditor, type ObjectiveRow } from './ObjectiveMarksEditor'
import { statusInfo } from './status'
import { buildAoCorrections, buildReviewBody, initialEdit, totals } from './review-body'

/**
 * The teacher marking queue, rebuilt 12 October 2026.
 *
 * Rendered in node with renderToStaticMarkup: these assert the words and
 * numbers a teacher is shown, and the body their decision sends.
 */

const objectives: ObjectiveRow[] = [
  {
    ao: 'AO1',
    label: 'Read, understand and respond',
    marks: 8,
    maxMarks: 12,
    aiMarks: 8,
    teacherComment: null,
    aiComment: 'A clear personal response.',
  },
  {
    ao: 'AO2',
    label: 'Language, form and structure',
    marks: 7,
    maxMarks: 12,
    aiMarks: 5,
    teacherComment: 'Better than the AI allowed.',
    aiComment: 'Some analysis of language.',
  },
]

describe('statuses, in the words a teacher reads', () => {
  it('says an AI-marked essay is waiting for the teacher', () => {
    expect(renderToStaticMarkup(<StatusBadge status="ai_marked" />)).toContain(
      'AI-marked, awaiting your review',
    )
    expect(statusInfo('ai_marked').bucket).toBe('awaiting')
  })

  it('keeps an adjusted but unapproved essay in the teacher’s queue', () => {
    expect(statusInfo('teacher_review_required').bucket).toBe('awaiting')
  })

  it('puts essays the AI has not marked in their own bucket', () => {
    expect(statusInfo('submitted').bucket).toBe('not_marked')
    expect(renderToStaticMarkup(<StatusBadge status="submitted" />)).toContain(
      'Waiting for the AI to mark',
    )
  })

  it('shows an unknown status only under All, rather than guessing', () => {
    expect(statusInfo('something_new').bucket).toBeNull()
  })
})

describe("each objective's mark", () => {
  const html = renderToStaticMarkup(
    <ObjectiveMarksEditor objectives={objectives} edits={{}} invalid={[]} onChange={() => {}} />,
  )

  it("shows the AI's mark against the maximum, with its comment", () => {
    expect(html).toContain('AO1')
    expect(html).toContain('Read, understand and respond')
    expect(html).toContain('8 / 12')
    expect(html).toContain('5 / 12')
    expect(html).toContain('A clear personal response.')
  })

  it("starts each input at the mark that counts now, the teacher's where they adjusted it", () => {
    expect(html).toMatch(/id="ao-mark-AO1"[^>]*value="8"|value="8"[^>]*id="ao-mark-AO1"/)
    expect(html).toMatch(/id="ao-mark-AO2"[^>]*value="7"|value="7"[^>]*id="ao-mark-AO2"/)
    expect(html).toContain('Adjusted')
  })

  it('gives the totals for the AI and for the teacher', () => {
    expect(html).toContain('Total: AI 13 out of 24; with your marks 15 out of 24')
  })

  it('says plainly when the AI recorded no objective marks', () => {
    const empty = renderToStaticMarkup(
      <ObjectiveMarksEditor objectives={[]} edits={{}} invalid={[]} onChange={() => {}} />,
    )
    // renderToStaticMarkup escapes the apostrophe, so match the rest.
    expect(empty).toContain('mark for each objective was not recorded for this essay.')
  })
})

describe('the body a decision sends to the review route', () => {
  it('lists only objectives the teacher changed or commented on', () => {
    const result = buildAoCorrections(objectives, {})
    expect(result).toEqual({
      ok: true,
      corrections: [{ ao: 'AO2', score: 7, maxScore: 12, comment: 'Better than the AI allowed.' }],
    })
  })

  it('sends an empty list, not nothing, when every mark is back to the AI’s', () => {
    const result = buildAoCorrections(objectives, {
      AO2: { mark: '5', comment: '' },
    })
    expect(result).toEqual({ ok: true, corrections: [] })
    const body = buildReviewBody(
      'approve',
      { grade: '6', feedback: ' ', reason: '', notes: '' },
      result.ok ? result.corrections : [],
    )
    expect(body.aoCorrections).toEqual([])
    expect(body).toMatchObject({ decision: 'approve', teacherGrade: '6', teacherFeedback: null })
  })

  it('refuses the whole decision when a mark is blank or out of range', () => {
    expect(
      buildAoCorrections(objectives, {
        AO1: { mark: '', comment: '' },
        AO2: { mark: '13', comment: '' },
      }),
    ).toEqual({ ok: false, invalid: ['AO1', 'AO2'] })
  })

  it('never asks to train the AI on a pupil’s essay', () => {
    expect(
      buildReviewBody('approve', { grade: '', feedback: '', reason: '', notes: '' }, [])
        .trainingEligible,
    ).toBeNull()
  })

  it('totals only valid marks', () => {
    expect(
      totals(objectives, { AO1: { ...initialEdit(objectives[0]), mark: 'x' } }).yours,
    ).toBeNull()
    expect(totals(objectives, {})).toEqual({ ai: 13, yours: 15, max: 24 })
  })
})
