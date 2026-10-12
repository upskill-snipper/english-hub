import { describe, it, expect, vi } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'

/**
 * What /marking/results/[id] shows a pupil (12 October 2026).
 *
 * THREE DEFECTS, each pinned below:
 *  1. The teacher's decision never reached the pupil. The page read the
 *     teacher's mark and comments as camelCase fields, and the API returns the
 *     table's snake_case columns, so an approved or returned essay showed only
 *     the AI's draft.
 *  2. The page accepted only 'approved' for class work, with its own copy of
 *     the visibility rule. It now asks the one rule the API applies, which
 *     since Calum's decision shows a class pupil their AI mark straight away.
 *  3. "Submit a new version" went to a bare /marking/submit.
 *
 * Rendered with renderToStaticMarkup in the node environment; useT is the
 * identity, so the components' English fallbacks are what is asserted.
 */

vi.mock('@/lib/i18n/use-t', () => ({ useT: () => (key: string) => key }))

import {
  canStudentSeeFeedback,
  hiddenStateFor,
  redraftLink,
  reviewDecisionOf,
  serverToStoredResult,
} from '@/lib/marking/results-view'
import { studentCanSeeGrade } from '@/lib/marking/persistence'
import { resolvePrefill } from '@/lib/marking/submit-prefill'
import { MARK_SCHEMES } from '@/lib/marking/mark-schemes'
import { ReviewDecisionCard, SchoolReviewNote } from '@/components/marking/ReviewDecisionCard'
import { AiMarkingNotice } from '@/components/ai/AiMarkingNotice'

const STATUSES = [
  'submitted',
  'pending',
  'ai_marked',
  'teacher_review_required',
  'teacher_reviewed',
  'approved',
  'rejected',
  'returned',
  'training_ready',
  'excluded_from_training',
]

/** A row as GET /api/marking/[submissionId] returns it: snake_case. */
function row(over: Record<string, unknown> = {}) {
  return {
    id: 'sub-1',
    source: 'b2b_class',
    status: 'approved',
    exam_board: 'AQA',
    paper: 'English Literature - Paper 1',
    question_text: 'How does Shakespeare present ambition?',
    essay_text: 'One two three four.',
    ai_result: {
      predictedGrade: '6',
      totalMarks: 20,
      maxMarks: 30,
      summary: 'The AI summary.',
      aoScores: [],
    },
    ai_grade: '6',
    teacher_grade: '7',
    teacher_comment: 'Strong on context. Tighten the conclusion.',
    final_teacher_mark: '7',
    final_teacher_feedback: 'Strong on context. Tighten the conclusion.',
    mark_scheme_id: 'aqa-lit-paper1',
    rubric_ref: 'Q1',
    studied_text: 'Macbeth',
    submitted_at: '2026-11-16T09:30:00.000Z',
    ...over,
  }
}

// ─── Defect 2: one visibility rule ─────────────────────────────────────────

describe('the page and the API apply one visibility rule', () => {
  it.each(STATUSES.flatMap((s) => [[s, 'b2b_class'] as const, [s, 'b2c_self'] as const]))(
    '%s / %s',
    (status, source) => {
      expect(canStudentSeeFeedback({ status, source })).toBe(studentCanSeeGrade(status, source))
    },
  )

  it('so a class pupil sees their AI mark straight away, and the teacher’s decisions after', () => {
    for (const status of ['ai_marked', 'approved', 'returned', 'teacher_reviewed']) {
      expect(canStudentSeeFeedback({ status, source: 'b2b_class' })).toBe(true)
    }
  })

  it('and a hidden result gets a message true for its status', () => {
    expect(hiddenStateFor({ status: 'submitted', source: 'b2b_class' })).toBe('unmarked')
    expect(hiddenStateFor({ status: 'pending', source: 'b2c_self' })).toBe('unmarked')
    expect(hiddenStateFor({ status: 'teacher_review_required', source: 'b2b_class' })).toBe(
      'reviewing',
    )
    // A self-study essay has no teacher to be reviewing it.
    expect(hiddenStateFor({ status: 'teacher_review_required', source: 'b2c_self' })).toBe(
      'unavailable',
    )
    expect(hiddenStateFor({ status: 'rejected', source: 'b2b_class' })).toBe('rejected')
    expect(hiddenStateFor({ status: 'training_ready', source: 'b2b_class' })).toBe('unavailable')
  })
})

// ─── Defect 1: the teacher's decision, read from the real columns ──────────

describe('the teacher’s decision', () => {
  it('is read from the snake_case columns the API returns', () => {
    const result = serverToStoredResult(row())
    expect(result.review).toEqual({
      status: 'approved',
      mark: '7',
      comment: 'Strong on context. Tighten the conclusion.',
      byTeacher: true,
    })
  })

  it('stays apart from the AI’s result, so a pupil can tell whose mark is whose', () => {
    const result = serverToStoredResult(row())
    // The AI's own grade and summary, not the teacher's.
    expect(result.grade).toBe(6)
    expect(result.summary).toBe('The AI summary.')
  })

  it('takes the latest decision: the override writes teacher_grade and leaves final_teacher_mark stale', () => {
    const decision = reviewDecisionOf(
      row({
        status: 'teacher_reviewed',
        teacher_grade: '5',
        teacher_comment: 'Revised after moderation.',
        final_teacher_mark: '7',
        final_teacher_feedback: 'Earlier approval.',
      }),
    )
    expect(decision).toMatchObject({ mark: '5', comment: 'Revised after moderation.' })
  })

  it('exists only once a person has decided', () => {
    expect(reviewDecisionOf(row({ status: 'ai_marked' }))).toBeNull()
    expect(
      reviewDecisionOf(row({ status: 'returned', teacher_grade: null, final_teacher_mark: null })),
    ).toMatchObject({ status: 'returned', mark: null })
  })

  it('never shows a raw mark total as a grade', () => {
    // The old mapping fell back to ai_score, so 24 marks read as "Grade 24".
    const result = serverToStoredResult(
      row({ ai_result: { totalMarks: 24, maxMarks: 40 }, ai_grade: null, ai_score: 24 }),
    )
    expect(result.grade).not.toBe(24)
    expect(result.scorePercent).toBe(60)
  })

  it('renders as its own card, with the mark and the comments', () => {
    const html = renderToStaticMarkup(
      <ReviewDecisionCard review={serverToStoredResult(row()).review!} />,
    )
    expect(html).toContain('Your teacher&#x27;s decision')
    expect(html).toContain('This mark has been checked and approved.')
    expect(html).toContain('>7<')
    expect(html).toContain('Strong on context. Tighten the conclusion.')
  })

  it('names a reviewer, not a teacher, on self-study work', () => {
    const html = renderToStaticMarkup(
      <ReviewDecisionCard review={serverToStoredResult(row({ source: 'b2c_self' })).review!} />,
    )
    expect(html).toContain('A reviewer&#x27;s decision')
    expect(html).not.toContain('Your teacher&#x27;s decision')
  })

  it('says a returned essay was sent back, and claims no mark it was not given', () => {
    const html = renderToStaticMarkup(
      <ReviewDecisionCard
        review={
          reviewDecisionOf(
            row({ status: 'returned', teacher_grade: null, final_teacher_mark: null }),
          )!
        }
      />,
    )
    expect(html).toContain('This essay has been sent back to you with comments.')
    expect(html).not.toContain('data-testid="review-mark"')
  })
})

describe('the labels around the AI’s mark', () => {
  it('a class pupil is told their teacher will review it', () => {
    expect(renderToStaticMarkup(<SchoolReviewNote />)).toContain(
      'Your teacher will look at this AI mark and may change it.',
    )
  })

  it('the AI notice stops claiming no human has checked it once one has', () => {
    expect(renderToStaticMarkup(<AiMarkingNotice />)).toContain('ai_marking_notice.body <a')
    const reviewed = renderToStaticMarkup(<AiMarkingNotice reviewed />)
    expect(reviewed).toContain('ai_marking_notice.body_reviewed <a')
    expect(reviewed).not.toContain('ai_marking_notice.body <a')
  })
})

// ─── Defect 3: "Submit a new version" ──────────────────────────────────────

describe('"Submit a new version"', () => {
  const schemes = Object.values(MARK_SCHEMES)
  const boards = [{ value: 'AQA', schemes: schemes.filter((s) => s.id.startsWith('aqa-')) }]

  it('carries the paper and question the essay was marked against, which the form fills in', () => {
    const scheme = MARK_SCHEMES['aqa-lit-paper1']
    const question = scheme.questions[0].id
    const { href, prefilled } = redraftLink(
      serverToStoredResult(row({ mark_scheme_id: scheme.id, rubric_ref: question })),
    )
    expect(prefilled).toBe(true)
    expect(href.startsWith('/marking/submit?')).toBe(true)

    // Round trip through the form's own resolver against the live registry.
    const out = resolvePrefill(new URLSearchParams(href.split('?')[1]), boards, schemes)
    expect(out).toMatchObject({
      board: 'AQA',
      paper: scheme.id,
      question,
      studiedText: 'Macbeth',
    })
  })

  it('falls back to the bare form, and says so, when the essay carries no scheme', () => {
    expect(redraftLink({})).toEqual({ href: '/marking/submit', prefilled: false })
    expect(redraftLink({ markSchemeId: 'aqa-lit-paper1' }).prefilled).toBe(false)
  })
})
