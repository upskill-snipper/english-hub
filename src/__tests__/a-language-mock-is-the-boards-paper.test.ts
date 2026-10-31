import { describe, expect, it } from 'vitest'

import { loadMockExamPaper } from '@/data/mock-exam-loader'
import { MOCK_EXAM_INDEX } from '@/data/mock-exams/index-data'
import type { MockExamPaper } from '@/data/mock-exams/types'
import { isEssayQuestion } from '@/lib/marking/essay-feedback'
import {
  resolveMockFeedback,
  schemeIdForPaperCode,
  subjectForPaper,
} from '@/lib/marking/essay-feedback-targets'
import { MARK_SCHEMES } from '@/lib/marking/mark-schemes'

/**
 * Every English Language mock paper is its board's real paper (24 October
 * 2026).
 *
 * THE DEFECT. The day the AI marker was corrected to the boards' papers
 * (src/lib/marking/mark-schemes/, each scheme held to a guide checked twice
 * against the board's documents), the Language mocks turned out to carry the
 * same wrong idea of the papers. An Edexcel Paper 1 mock set questions worth
 * 4, 16, 16, 16 and 24, where Pearson's paper is 1, 2, 6 and 15, then one
 * 40-mark writing task; OCR mocks set 4, 8, 12, 16 and 40, where OCR's are 4,
 * 6, 12, 18 and 40; Eduqas mocks five reading questions of the wrong worth.
 * A student practising a mock sat an exam that does not exist, and an answer
 * handed to the marker found no question of its tariff, so it got general
 * feedback with no marks.
 *
 * WHAT IS HELD, for every Language mock whose code names a scheme: its
 * questions, in order, are worth what the scheme's questions are; its total
 * and time are the paper's; and each essay question's answer reaches the
 * scheme question it is (resolveMockFeedback), so the mark it gets is the
 * board's question's mark.
 */

interface Row {
  id: string
  paper: MockExamPaper
  schemeId: string
}

const papers: Row[] = []
for (const s of MOCK_EXAM_INDEX) {
  const paper = await loadMockExamPaper(s.id)
  if (!paper) continue
  const text = `${paper.subtitle} ${paper.code} ${paper.title}`
  if (subjectForPaper(text) !== 'English Language') continue
  const schemeId = schemeIdForPaperCode(text)
  if (!schemeId) continue
  papers.push({ id: s.id, paper, schemeId })
}

describe('the Language mock papers', () => {
  it('are found, so this is not passing on nothing', () => {
    expect(papers.length).toBeGreaterThan(100)
    for (const board of ['AQA', 'Edexcel', 'OCR', 'WJEC', 'CAIE'])
      expect(
        papers.some((p) => p.paper.board === board),
        board,
      ).toBe(true)
  })
})

describe.each(papers.map((p) => [p.id, p] as const))('%s', (_id, { paper, schemeId }) => {
  const scheme = MARK_SCHEMES[schemeId]
  const questions = paper.sections.flatMap((section) =>
    section.questions.map((q, indexInSection) => ({ q, section, indexInSection })),
  )

  it(`sets ${schemeId}'s questions, each worth what the board's is`, () => {
    expect(questions.map(({ q }) => q.marks)).toEqual(scheme.questions.map((q) => q.totalMarks))
  })

  it("has the paper's total and time", () => {
    expect(paper.totalMarks).toBe(scheme.totalMarks)
    expect(questions.reduce((n, { q }) => n + q.marks, 0)).toBe(scheme.totalMarks)
    for (const section of paper.sections)
      expect(section.totalMarks, section.title).toBe(
        section.questions.reduce((n, q) => n + q.marks, 0),
      )
    expect(paper.totalTimeMinutes).toBe(scheme.durationMinutes)
  })

  it('sends each essay answer to the question it is', () => {
    const wrong: string[] = []
    questions.forEach(({ q, section, indexInSection }, i) => {
      const target = scheme.questions[i]
      if (!target || !isEssayQuestion(target)) return
      const ref = resolveMockFeedback({
        paperText: `${paper.subtitle} ${paper.code} ${paper.title}`,
        sectionTitle: section.title,
        indexInSection,
        questionNumber: q.questionNumber,
        marks: q.marks,
        questionType: q.questionType,
      })
      if (ref?.questionId !== target.id)
        wrong.push(
          `${q.label ?? q.questionNumber}: ${ref?.questionId ?? 'nothing'}, not ${target.id}`,
        )
    })
    expect(wrong).toEqual([])
  })
})
