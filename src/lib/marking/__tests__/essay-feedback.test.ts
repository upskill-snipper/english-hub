import { describe, it, expect } from 'vitest'
import { MARK_SCHEMES } from '../mark-schemes'
import {
  feedbackColumns,
  feedbackSchemesFor,
  feedbackSubject,
  formatSchemeForFeedback,
  isEssayQuestion,
  normaliseAoScores,
  questionLabel,
  resolveSchemeTarget,
  schemeLabel,
  type FeedbackAoScore,
} from '../essay-feedback'

/**
 * What /api/essay-feedback marks against, and what it keeps.
 *
 * Until 9 October 2026 essay feedback read a second mark-scheme corpus, sent
 * every inline Literature answer to the board's Language paper, took each
 * objective's maximum from the model's own reply, and stored the first four
 * objectives into AIFeedback's columns by position. These tests hold each of
 * those shut. src/__tests__/second-mark-scheme-corpus.test.ts holds the corpus.
 */

function question(schemeId: string, questionId: string) {
  const t = resolveSchemeTarget(schemeId, questionId)
  if (!t) throw new Error(`${schemeId} has no question ${questionId}`)
  return t.question
}

function score(id: string, s: number, max: number): FeedbackAoScore {
  return { id, label: id, score: s, maxScore: max, comment: '' }
}

describe('resolveSchemeTarget', () => {
  it('finds a scheme and its own question', () => {
    const t = resolveSchemeTarget('edexcel-lit-paper2', 'Section B Part 1')
    expect(t?.scheme.id).toBe('edexcel-lit-paper2')
    expect(t?.question.id).toBe('Section B Part 1')
  })

  it.each([
    ['an unknown scheme', 'edexcel-lit-paper3', 'Section A (a)'],
    ['another scheme’s question', 'edexcel-lit-paper2', 'Q4'],
    ['a near miss', 'edexcel-lit-paper2', 'Section B part 1'],
    ['a prototype key', '__proto__', 'Q1'],
    ['an inherited method', 'toString', 'Q1'],
    ['a number', 1 as unknown as string, 'Q1'],
    ['nothing', undefined, undefined],
  ])('refuses %s rather than guess', (_label, schemeId, questionId) => {
    expect(resolveSchemeTarget(schemeId, questionId)).toBeNull()
  })
})

describe('the corpus as essay feedback reads it', () => {
  it('gives every question unique objective ids, which the normaliser relies on', () => {
    for (const scheme of Object.values(MARK_SCHEMES)) {
      for (const q of scheme.questions) {
        const ids = q.assessmentObjectives.map((a) => a.id)
        expect(new Set(ids).size, `${scheme.id} ${q.id}`).toBe(ids.length)
      }
    }
  })

  it('offers at least one essay question on every scheme', () => {
    for (const scheme of Object.values(MARK_SCHEMES)) {
      expect(scheme.questions.some(isEssayQuestion), scheme.id).toBe(true)
    }
  })

  it.each([
    ['aqa-lang-paper1', 'Q1', false],
    ['aqa-lang-paper2', 'Q1', false],
    ['edexcel-igcse-lang-paper1', 'Q2', false],
    ['cambridge-0500-paper1', 'Q3', false],
    ['ocr-lang-component01', 'Q5-SPaG', false],
    ['aqa-lang-paper1', 'Q2', true],
    ['edexcel-lang-paper2', 'Q7a', true],
    ['edexcel-lit-paper2', 'Section B Part 2', true],
  ])('%s %s is an essay question: %s', (schemeId, questionId, expected) => {
    expect(isEssayQuestion(question(schemeId, questionId))).toBe(expected)
  })
})

describe('the feedback page pickers', () => {
  it('lists a board’s schemes, Literature first', () => {
    const ids = feedbackSchemesFor('Edexcel').map((s) => s.id)
    expect(ids).toEqual(expect.arrayContaining(['edexcel-lit-paper1', 'edexcel-lit-paper2']))
    const subjects = feedbackSchemesFor('Edexcel').map((s) => s.subject)
    expect(subjects.indexOf('English Language')).toBeGreaterThan(
      subjects.lastIndexOf('English Literature'),
    )
  })

  it('lists nothing for no board or an unknown one', () => {
    expect(feedbackSchemesFor(null)).toEqual([])
    expect(feedbackSchemesFor('Not a board')).toEqual([])
  })

  it('says when a scheme is unverified, and only then', () => {
    expect(schemeLabel(MARK_SCHEMES['aqa-lang-paper1'])).not.toMatch(/unverified/)
    expect(schemeLabel(MARK_SCHEMES['edexcel-lit-paper2'])).toMatch(
      /\(unverified - marks are indicative only\)$/,
    )
  })

  it('names a question with its own tariff', () => {
    expect(questionLabel(question('edexcel-lit-paper2', 'Section B Part 1'))).toBe(
      'Section B Part 1 - Poetry anthology comparison (20 marks)',
    )
  })
})

describe('formatSchemeForFeedback', () => {
  it('names the paper, the question and its task', () => {
    const t = resolveSchemeTarget('edexcel-lit-paper2', 'Section A (b)')!
    const prompt = formatSchemeForFeedback(t)
    expect(prompt).toContain('Edexcel English Literature, Paper 2')
    expect(prompt).toContain('Question: Section A (b) - 19th-century novel whole text (20 marks)')
    expect(prompt).toContain(`Task: ${t.question.taskDescription}`)
  })

  it('lists every band of every objective the question carries', () => {
    const t = resolveSchemeTarget('aqa-lang-paper1', 'Q5')!
    const prompt = formatSchemeForFeedback(t)
    for (const ao of t.question.assessmentObjectives) {
      for (const band of ao.bands) {
        expect(prompt).toContain(`(${band.minMarks}-${band.maxMarks} marks): ${band.label}.`)
      }
    }
  })
})

describe('normaliseAoScores', () => {
  const part1 = () => question('edexcel-lit-paper2', 'Section B Part 1') // AO2 15, AO3 5

  it('keeps the scheme’s maximums and labels, never the model’s', () => {
    const out = normaliseAoScores(
      [
        { id: 'AO2', label: 'Made up', score: 12, maxScore: 40, comment: 'Good.' },
        { id: 'AO3', label: 'Made up', score: 3, maxScore: 40, comment: 'Some context.' },
      ],
      part1(),
    )
    expect(out).toEqual([
      {
        id: 'AO2',
        label: 'AO2 - Analyse language, form and structure',
        score: 12,
        maxScore: 15,
        comment: 'Good.',
      },
      { id: 'AO3', label: 'AO3 - Context', score: 3, maxScore: 5, comment: 'Some context.' },
    ])
  })

  it('rounds, and clamps to the objective’s range', () => {
    const out = normaliseAoScores(
      [
        { id: 'AO2', score: 18.6 },
        { id: 'AO3', score: -2 },
      ],
      part1(),
    )
    expect(out?.map((a) => a.score)).toEqual([15, 0])
  })

  it('drops objectives the question does not carry, and keeps the scheme’s order', () => {
    const out = normaliseAoScores(
      [
        { id: 'AO4', score: 8 },
        { id: 'ao3 ', score: 4 },
        { id: 'AO1', score: 10 },
        { id: 'AO2', score: 9 },
      ],
      part1(),
    )
    expect(out?.map((a) => a.id)).toEqual(['AO2', 'AO3'])
  })

  it.each([
    ['an objective is missing', [{ id: 'AO2', score: 9 }]],
    [
      'a mark is not a number',
      [
        { id: 'AO2', score: 'nine' },
        { id: 'AO3', score: 4 },
      ],
    ],
    ['a mark is absent', [{ id: 'AO2' }, { id: 'AO3', score: 4 }]],
    ['the reply is not a list', { AO2: 9, AO3: 4 }],
  ])('refuses the reply when %s', (_label, raw) => {
    expect(normaliseAoScores(raw, part1())).toBeNull()
  })
})

describe('feedbackColumns', () => {
  it('takes each column from the objective that means it, neutral where none does', () => {
    // Edexcel Literature Paper 2, Section B Part 1: AO2 15 and AO3 5.
    expect(
      feedbackColumns(
        [score('AO2', 15, 15), score('AO3', 4, 5)],
        'Grade 8-9',
        'English Literature',
      ),
    ).toEqual({
      overallScore: 95,
      structureScore: 100,
      argumentScore: 95,
      vocabularyScore: 95,
      grammarScore: 95,
    })
  })

  it('reads Literature AO4 as accuracy, and AO1 as argument', () => {
    // Edexcel Literature Paper 1, Section B: AO1 16, AO3 16, AO4 8.
    expect(
      feedbackColumns(
        [score('AO1', 12, 16), score('AO3', 8, 16), score('AO4', 6, 8)],
        'Grade 6-7',
        'English Literature',
      ),
    ).toEqual({
      overallScore: 65,
      argumentScore: 75,
      structureScore: 65,
      vocabularyScore: 75,
      grammarScore: 75,
    })
  })

  it('reads Language AO6 as accuracy, and AO5 as argument when AO1 and AO4 are absent', () => {
    // AQA Language Paper 1, Question 5: AO5 24, AO6 16.
    expect(
      feedbackColumns([score('AO5', 18, 24), score('AO6', 8, 16)], 'Grade 6-7', 'English Language'),
    ).toEqual({
      overallScore: 65,
      argumentScore: 75,
      structureScore: 65,
      vocabularyScore: 50,
      grammarScore: 50,
    })
  })

  it('never reads Language AO4, which is evaluation, as accuracy', () => {
    // The positional mapping before 9 October put Language AO4 into "grammar".
    const columns = feedbackColumns([score('AO4', 4, 20)], 'Grade 4-5', 'English Language')
    expect(columns.grammarScore).toBe(columns.overallScore)
    expect(columns.argumentScore).toBe(20)
  })

  it.each([
    ['Grade 4-5', 46],
    ['Grade 6-7', 64],
    ['Grade 8-9', 86],
  ])('stores the middle of %s for general feedback, in every column', (band, mid) => {
    expect(new Set(Object.values(feedbackColumns([], band, null)))).toEqual(new Set([mid]))
  })
})

describe('feedbackSubject', () => {
  it.each([
    ['English Literature', 'English Literature'],
    ['Literature', 'English Literature'],
    ['English Language', 'English Language'],
    ['Maths', null],
    [42, null],
    [undefined, null],
  ])('reads %j as %j', (hint, expected) => {
    expect(feedbackSubject(hint)).toBe(expected)
  })
})
