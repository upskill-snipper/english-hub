import { describe, it, expect } from 'vitest'
import { allMockExamPapers } from '@/data/mock-exams'
import { practiceQuestions } from '@/data/practice-data'
import { examQuestions } from '@/data/exam-questions'
import { MARK_SCHEMES } from '../mark-schemes'
import { isEssayQuestion } from '../essay-feedback'
import {
  bankQuestionsFor,
  bankTargets,
  resolveMockFeedback,
  resolvePracticeFeedback,
  schemeIdForPaperCode,
  subjectForPaper,
  subjectForPractice,
  type FeedbackRef,
  type MockQuestionRef,
} from '../essay-feedback-targets'

/**
 * Which scheme question an answer from elsewhere on the site is marked against.
 *
 * Until 9 October 2026 the inline feedback on the mock-exam and practice pages
 * sent "Paper 1" or "Paper 2" for every answer, and the route read that as the
 * board's Language paper: every Literature mock answer was marked against
 * Language objectives. The resolvers name a scheme question only when they can
 * be sure of it, and these tests run them over every mock, practice question
 * and bank entry the site serves, so a wrong match anywhere fails here.
 */

function refsFor(paperId: string): (FeedbackRef | null)[] {
  const paper = allMockExamPapers.find((p) => p.id === paperId)
  if (!paper) throw new Error(`no mock ${paperId}`)
  return paper.sections.flatMap((s) =>
    s.questions.map((q, i) => resolveMockFeedback(mockRef(paper, s, q, i))),
  )
}

function mockRef(
  paper: (typeof allMockExamPapers)[number],
  section: (typeof allMockExamPapers)[number]['sections'][number],
  q: (typeof allMockExamPapers)[number]['sections'][number]['questions'][number],
  indexInSection: number,
): MockQuestionRef {
  return {
    paperText: `${paper.subtitle} ${paper.code} ${paper.title}`,
    sectionTitle: section.title,
    indexInSection,
    questionNumber: q.questionNumber,
    marks: q.marks,
    questionType: q.questionType,
  }
}

function refString(ref: FeedbackRef | null): string | null {
  return ref ? `${ref.schemeId}/${ref.questionId}` : null
}

// ─── Paper codes ────────────────────────────────────────────────────────

describe('paper codes', () => {
  it.each([
    ['8700/1', 'aqa-lang-paper1'],
    ['8700/2', 'aqa-lang-paper2'],
    ['8702/1', 'aqa-lit-paper1'],
    ['8702/2', 'aqa-lit-paper2'],
    ['1EN0/01', 'edexcel-lang-paper1'],
    ['1EN0/02', 'edexcel-lang-paper2'],
    ['1ET0/01', 'edexcel-lit-paper1'],
    ['1ET0/02', 'edexcel-lit-paper2'],
    ['J351/01', 'ocr-lang-component01'],
    ['J351/02', 'ocr-lang-component02'],
    ['J352/01', 'ocr-lit-component01'],
    ['J352/02', 'ocr-lit-component02'],
    ['C700U10-1', 'eduqas-lang-comp1'],
    ['C700U20-1', 'eduqas-lang-comp2'],
    ['C720/01', 'eduqas-lit-comp1'],
    ['C720/02', 'eduqas-lit-comp2'],
  ])('%s is %s, a scheme on the site', (code, schemeId) => {
    expect(schemeIdForPaperCode(`Paper ${code} mock`)).toBe(schemeId)
    expect(MARK_SCHEMES[schemeId]).toBeDefined()
  })

  it('says nothing without a code', () => {
    // 8702/2 was the one known code with no scheme, until 9 October 2026.
    expect(schemeIdForPaperCode('Paper 2')).toBeUndefined()
  })

  it.each([
    ['1ET0/02 Paper 2: 19th-century Novel and Poetry since 1789', 'English Literature'],
    ['8700/1 Paper 1: Explorations in Creative Reading and Writing', 'English Language'],
    // Eduqas Language Component 1 names Literature in its title. Codes first.
    [
      'Component 1: 20th Century Literature Reading and Creative Prose Writing C700U10-1',
      'English Language',
    ],
    ['Cambridge IGCSE English Literature', 'English Literature'],
    ['Paper 1', null],
  ])('%s is %s', (text, subject) => {
    expect(subjectForPaper(text)).toBe(subject)
  })
})

// ─── Every mock the site serves ─────────────────────────────────────────

describe('mock papers', () => {
  const all = allMockExamPapers.flatMap((paper) =>
    paper.sections.flatMap((s) =>
      s.questions.map((q, i) => {
        const ref = mockRef(paper, s, q, i)
        return { paper, q, ref, target: resolveMockFeedback(ref) }
      }),
    ),
  )
  const mapped = all.filter((m) => m.target)

  it('maps a substantial share, so a resolver that matched nothing would fail', () => {
    // 225 of 854 on 9 October 2026; the rest get general feedback.
    expect(all.length).toBeGreaterThan(800)
    expect(mapped.length).toBeGreaterThanOrEqual(200)
  })

  it('never marks an answer against the other subject', () => {
    const wrong = mapped.filter(
      (m) => MARK_SCHEMES[m.target!.schemeId].subject !== subjectForPaper(m.ref.paperText),
    )
    expect(wrong.map((m) => `${m.paper.id} Q${m.q.questionNumber}`)).toEqual([])
  })

  it('maps only to an essay question with the same tariff', () => {
    for (const m of mapped) {
      const question = MARK_SCHEMES[m.target!.schemeId].questions.find(
        (q) => q.id === m.target!.questionId,
      )!
      expect(question.totalMarks, `${m.paper.id} Q${m.q.questionNumber}`).toBe(m.q.marks)
      expect(isEssayQuestion(question)).toBe(true)
    }
  })

  it('marks every Edexcel Literature mock answer against its own question', () => {
    const edexcelLit = all.filter((m) => /1ET0/.test(m.ref.paperText))
    expect(edexcelLit.length).toBeGreaterThan(0)
    expect(edexcelLit.filter((m) => !m.target).map((m) => m.paper.id)).toEqual([])
  })

  it('maps Edexcel Literature Paper 2 part by part', () => {
    expect(refsFor('edexcel-lit-p2-a').map(refString)).toEqual([
      'edexcel-lit-paper2/Section A (a)',
      'edexcel-lit-paper2/Section A (b)',
      'edexcel-lit-paper2/Section B Part 1',
      'edexcel-lit-paper2/Section B Part 2',
    ])
  })

  it('maps AQA Language Paper 1 by question number, and leaves out the 4-mark retrieval', () => {
    expect(refsFor('aqa-lang-p1').map(refString)).toEqual([
      null,
      'aqa-lang-paper1/Q2',
      'aqa-lang-paper1/Q3',
      'aqa-lang-paper1/Q4',
      'aqa-lang-paper1/Q5',
    ])
  })

  it('does not mark an OCR poetry answer against the prose question it shares a tariff with', () => {
    // These mocks carry J352/01, whose Section B is a 40-mark prose or drama
    // essay, and their own Section B is 40-mark "Poetry Across Time".
    expect(refsFor('ocr-lit-01').every((r) => r === null)).toBe(true)
  })

  it('maps AQA Literature Paper 2 question by question where a mock is set as AQA sets it', () => {
    // Until 9 October 2026 there was no 8702/2 scheme and every answer got
    // general feedback. Papers 04 and 05 are AQA's shape: 34, 30, 24 and 8.
    for (const id of ['aqa-lit-p2-04', 'aqa-lit-p2-05']) {
      expect(refsFor(id).map(refString)).toEqual([
        'aqa-lit-paper2/Section A',
        'aqa-lit-paper2/Section B',
        'aqa-lit-paper2/Section C (a)',
        'aqa-lit-paper2/Section C (b)',
      ])
    }
  })

  it('does not map AQA Literature Paper 2 mocks whose sections are not AQA’s', () => {
    // Papers 01 to 03 are 100 marks: a 40-mark modern-text essay, a 40-mark
    // analysis of one anthology poem and a 20-mark anthology comparison.
    for (const id of ['aqa-lit-p2-01', 'aqa-lit-p2-02', 'aqa-lit-p2-03']) {
      expect(refsFor(id).every((r) => r === null)).toBe(true)
    }
  })
})

// ─── Practice questions ─────────────────────────────────────────────────

describe('practice questions', () => {
  it('names one question, with an agreeing tariff, or none', () => {
    expect(
      refString(
        resolvePracticeFeedback({
          board: 'AQA',
          paper: 1,
          questionType: 'Language Analysis (Q2)',
          marks: 8,
        }),
      ),
    ).toBe('aqa-lang-paper1/Q2')
    expect(
      refString(
        resolvePracticeFeedback({
          board: 'AQA',
          paper: 2,
          questionType: 'Writing to Argue/Persuade (Q5)',
          marks: 40,
        }),
      ),
    ).toBe('aqa-lang-paper2/Q5')
  })

  it.each([
    ['no tariff', { board: 'AQA', paper: 1, questionType: 'Language Analysis (Q2)' }],
    [
      'a tariff that disagrees',
      { board: 'Edexcel', paper: 1, questionType: 'Language Analysis (Q3)', marks: 15 },
    ],
    // Forty marks and question 5, like Paper 1's imaginative writing, and not it.
    [
      'the wrong kind of writing',
      { board: 'Edexcel', paper: 1, questionType: 'Transactional Writing (Q5)', marks: 40 },
    ],
    [
      'a range of questions',
      { board: 'Edexcel', paper: 1, questionType: 'Comprehension and Inference (Q1-2)', marks: 10 },
    ],
    ['no question number', { board: 'AQA', paper: 2, type: 'Persuasive Writing', marks: 40 }],
    [
      'a board with no practice table',
      { board: 'CAIE', paper: 1, type: 'Argumentative Writing', marks: 50 },
    ],
  ])('names none for %s', (_label, q) => {
    expect(resolvePracticeFeedback(q)).toBeNull()
  })

  it('maps no real practice question to the wrong subject or tariff', () => {
    for (const q of practiceQuestions) {
      const ref = resolvePracticeFeedback(q)
      if (!ref) continue
      const question = MARK_SCHEMES[ref.schemeId].questions.find((s) => s.id === ref.questionId)!
      expect(question.totalMarks, q.id).toBe(q.marks)
      expect(MARK_SCHEMES[ref.schemeId].subject).toBe(subjectForPractice(q))
    }
  })

  it('names a subject for every practice question, Literature where the labels say so', () => {
    // The subject is what keeps general feedback on a Literature question off
    // the Language objectives.
    expect(practiceQuestions.filter((q) => !subjectForPractice(q)).map((q) => q.id)).toEqual([])
    const literature = practiceQuestions.filter((q) =>
      /poetry|shakespeare|character|theme|extract-based/i.test(`${q.questionType} ${q.type}`),
    )
    expect(literature.length).toBeGreaterThan(0)
    for (const q of literature) expect(subjectForPractice(q), q.id).toBe('English Literature')
  })
})

// ─── The question bank ──────────────────────────────────────────────────

describe('question bank', () => {
  it('maps every entry it maps to a real essay question', () => {
    let mapped = 0
    for (const q of examQuestions) {
      for (const t of bankTargets(q)) {
        mapped++
        const question = MARK_SCHEMES[t.schemeId]?.questions.find((s) => s.id === t.questionId)
        expect(question, `${q.id} -> ${t.schemeId}/${t.questionId}`).toBeDefined()
        expect(isEssayQuestion(question!), q.id).toBe(true)
        if (q.paper === 'Literature') {
          expect(MARK_SCHEMES[t.schemeId].subject, q.id).toBe('English Literature')
        }
      }
    }
    // 269 entries on 9 October 2026, some to two Eduqas questions.
    expect(mapped).toBeGreaterThanOrEqual(250)
  })

  it.each([
    ['edx-lit-eba-1', ['edexcel-lit-paper1/Section A (a)']],
    ['edx-lit-er-1', ['edexcel-lit-paper1/Section A (b)']],
    ['edx-lit-er-3', ['edexcel-lit-paper1/Section B']],
    // An Inspector Calls with a printed extract: Edexcel's Section B prints none.
    ['edx-lit-eba-3', []],
    ['edx-lit-eba-2', ['edexcel-lit-paper2/Section A (a)']],
    ['edx-lit-ta-4', ['edexcel-lit-paper2/Section A (b)']],
    ['edx-lit-pc-1', ['edexcel-lit-paper2/Section B Part 1']],
    ['edx-lit-up-1', ['edexcel-lit-paper2/Section B Part 2']],
    // AQA Paper 2, since 9 October 2026: the modern text (no extract printed),
    // the anthology, and the two unseen questions, 27.1 and 27.2.
    ['aqa-lit-er-1', ['aqa-lit-paper2/Section A']],
    ['aqa-lit-eba-3', []],
    ['aqa-lit-pc-1', ['aqa-lit-paper2/Section B']],
    ['aqa-lit-up-1', ['aqa-lit-paper2/Section C (a)']],
    ['aqa-lit-up-3', ['aqa-lit-paper2/Section C (b)']],
    ['aqa-p2-cwv-1', ['aqa-lang-paper2/Q4']],
    ['wjec-p1-ec-1', ['eduqas-lang-comp1/A4']],
    ['wjec-p2-pw-1', ['eduqas-lang-comp2/B1', 'eduqas-lang-comp2/B2']],
    ['edx-p2-pw-custom', []],
  ])('maps %s to %j', (id, expected) => {
    const q = examQuestions.find((e) => e.id === id)
    expect(q, id).toBeDefined()
    expect(bankTargets(q!).map(refString)).toEqual(expected)
  })

  it.each([
    // Filed as "Non-Fiction Writing", and a summary, a comparison and an
    // analysis: not the 40-mark writing question.
    ['edexcel-p2-nf-1'],
    ['edexcel-p2-nf-2'],
    ['edexcel-p2-nf-3'],
    // Filed as "Language Analysis", and asks for two adverts to be compared.
    ['lang-analysis-2'],
  ])('does not take %s at its label', (id) => {
    const q = examQuestions.find((e) => e.id === id)
    expect(q, id).toBeDefined()
    expect(bankTargets(q!)).toEqual([])
  })

  it('still maps the one "Non-Fiction Writing" entry that is a writing task', () => {
    const q = examQuestions.find((e) => e.id === 'edexcel-p2-nf-4')!
    expect(bankTargets(q).map(refString)).toEqual(['edexcel-lang-paper2/Q8/Q9'])
  })

  it('offers only that question’s entries under a scheme question', () => {
    const ids = bankQuestionsFor(examQuestions, 'edexcel-lit-paper2', 'Section B Part 1').map(
      (q) => q.id,
    )
    expect(ids.length).toBeGreaterThan(0)
    expect(ids.every((id) => id.startsWith('edx-lit-pc-'))).toBe(true)
  })
})
