import { describe, it, expect } from 'vitest'
import { MARK_SCHEMES } from '@/lib/marking/mark-schemes'
import type { AssessmentObjective, QuestionScheme } from '@/lib/marking/mark-schemes/types'
import { derivePack } from '@/lib/marking/examiner/packs/derive'
import { GUIDE as LANG1_GUIDE } from '@/data/mark-scheme-guides/aqa-lang-paper1'
import { GUIDE as LANG2_GUIDE } from '@/data/mark-scheme-guides/aqa-lang-paper2'
import type { MarkSchemeGuide } from '@/data/mark-scheme-guides/types'

/**
 * AQA GCSE English Language (8700) against AQA's own mark schemes
 * (24 October 2026).
 *
 * The mark-scheme guides for both papers (src/data/mark-scheme-guides/
 * aqa-lang-paper1.ts and aqa-lang-paper2.ts), checked against AQA's 2026
 * sample question papers and mark schemes, found that the marker had not
 * followed AQA's summer 2026 rewording. On Paper 1, Question 1 is four
 * multiple-choice parts, a mark each with no levels, where the marker had
 * "list four things" on a four-level ladder; Question 3 asks about one named
 * effect; Question 4 asks how far you agree and/or disagree; the Question 2
 * note demanded precise quotation, which AQA does not; and two caps were
 * missing. On Paper 2, Question 2 asks what you can infer about the
 * differences, not for a summary, Question 4's note demanded a sustained
 * comparison, which no level asks for, and the caps on one source, the focus
 * and the wrong lines were missing. Marks, objectives and level ranges
 * already agreed; this file pins them with the corrections, and holds both
 * papers to their guides.
 */

const lang1 = MARK_SCHEMES['aqa-lang-paper1']!
const lang2 = MARK_SCHEMES['aqa-lang-paper2']!

function question(id: string, questionId: string): QuestionScheme {
  const q = MARK_SCHEMES[id]!.questions.find((x) => x.id === questionId)
  if (!q) throw new Error(`${id} has no ${questionId}`)
  return q
}

function tariffs(id: string, questionId: string): [string, number][] {
  return question(id, questionId).assessmentObjectives.map((a) => [a.id, a.maxMarks])
}

function ranges(ao: AssessmentObjective): [number, number][] {
  return ao.bands.map((b) => [b.minMarks, b.maxMarks])
}

const FOUR_OF_TWO: [number, number][] = [
  [1, 2],
  [3, 4],
  [5, 6],
  [7, 8],
]
const AO5_LEVELS: [number, number][] = [
  [1, 6],
  [7, 12],
  [13, 18],
  [19, 24],
]
const AO6_LEVELS: [number, number][] = [
  [1, 4],
  [5, 8],
  [9, 12],
  [13, 16],
]

describe('AQA English Language Paper 1 (8700/1)', () => {
  it('is 80 marks in 1 hour 45 minutes, and its questions add up to it', () => {
    expect(lang1.totalMarks).toBe(80)
    expect(lang1.durationMinutes).toBe(105)
    expect(lang1.questions.reduce((s, q) => s + q.totalMarks, 0)).toBe(80)
  })

  it('keeps the question ids that saved essays and the mock hand-offs name', () => {
    expect(lang1.questions.map((q) => q.id)).toEqual(['Q1', 'Q2', 'Q3', 'Q4', 'Q5'])
  })

  it.each([
    ['Q1', 4, [['AO1', 4]]],
    ['Q2', 8, [['AO2', 8]]],
    ['Q3', 8, [['AO2', 8]]],
    ['Q4', 20, [['AO4', 20]]],
    [
      'Q5',
      40,
      [
        ['AO5', 24],
        ['AO6', 16],
      ],
    ],
  ] as const)('%s is %i marks: %j', (questionId, total, expected) => {
    expect(tariffs('aqa-lang-paper1', questionId)).toEqual(expected)
    expect(question('aqa-lang-paper1', questionId).totalMarks).toBe(total)
  })

  it('marks Question 1 a point at a time, with no levels', () => {
    // It was a four-level ladder, 1 to 4, ending "Level 4: Perceptive".
    const q1 = question('aqa-lang-paper1', 'Q1')
    const ao = q1.assessmentObjectives[0]!
    expect(ao.bands).toHaveLength(1)
    expect(ranges(ao)).toEqual([[1, 4]])
    expect(ao.bands[0]!.band).not.toMatch(/Level/)
    expect(q1.questionType).toMatch(/Multiple choice/)
    expect(q1.taskDescription).toMatch(/1\.1 to 1\.4/)
    expect(q1.examinerNotes).toMatch(/one mark for each part answered correctly, 4 in all/)
    // The mock exams still set the list of four things it replaced.
    expect(q1.examinerNotes).toMatch(/four things listed from the named lines/)
    const pack = derivePack(lang1).questions.find((q) => q.id === 'Q1')!
    expect(pack.kind).toBe('count')
  })

  it('keeps the four-level grids of Questions 2 to 5', () => {
    expect(ranges(question('aqa-lang-paper1', 'Q2').assessmentObjectives[0]!)).toEqual(FOUR_OF_TWO)
    expect(ranges(question('aqa-lang-paper1', 'Q3').assessmentObjectives[0]!)).toEqual(FOUR_OF_TWO)
    expect(ranges(question('aqa-lang-paper1', 'Q4').assessmentObjectives[0]!)).toEqual([
      [1, 5],
      [6, 10],
      [11, 15],
      [16, 20],
    ])
    const [ao5, ao6] = question('aqa-lang-paper1', 'Q5').assessmentObjectives
    expect(ranges(ao5!)).toEqual(AO5_LEVELS)
    expect(ranges(ao6!)).toEqual(AO6_LEVELS)
  })

  it('sets no quotation rule on Question 2, and caps an answer outside the printed lines', () => {
    const notes = question('aqa-lang-paper1', 'Q2').examinerNotes!
    expect(notes).not.toMatch(/Precise quotation is essential/)
    expect(notes).toMatch(/no rule that quotation must be precise/)
    expect(notes).toMatch(/only about language outside the lines printed in the question/)
    expect(notes).toMatch(/Level 1 or Level 2, 4 marks at most/)
  })

  it('asks Question 3 about the effect the question names', () => {
    const q3 = question('aqa-lang-paper1', 'Q3')
    expect(q3.taskDescription).toMatch(/the effect the question names/)
    expect(q3.examinerNotes).toMatch(/linked to the effect the question names/)
  })

  it('asks Question 4 how far you agree and/or disagree, about a named part', () => {
    const q4 = question('aqa-lang-paper1', 'Q4')
    expect(q4.taskDescription).toMatch(/names a part of the source/)
    expect(q4.taskDescription).toMatch(/agree and\/or disagree/)
  })

  it('sets Question 5 as AQA does from 2026, and caps AO5 at 12 off the task’s focus', () => {
    const q5 = question('aqa-lang-paper1', 'Q5')
    expect(q5.taskDescription).toMatch(/a picture may be given for ideas only/)
    expect(q5.taskDescription).not.toMatch(/describe a scene suggested by a picture/)
    expect(q5.examinerNotes).toMatch(
      /does not address the focus of the task cannot score more than 12 of the 24 AO5 marks/,
    )
  })
})

describe('AQA English Language Paper 2 (8700/2)', () => {
  it('is 80 marks in 1 hour 45 minutes, and its questions add up to it', () => {
    expect(lang2.totalMarks).toBe(80)
    expect(lang2.durationMinutes).toBe(105)
    expect(lang2.questions.reduce((s, q) => s + q.totalMarks, 0)).toBe(80)
  })

  it('keeps the question ids that saved essays and the mock hand-offs name', () => {
    expect(lang2.questions.map((q) => q.id)).toEqual(['Q1', 'Q2', 'Q3', 'Q4', 'Q5'])
  })

  it.each([
    ['Q1', 4, [['AO1', 4]]],
    ['Q2', 8, [['AO1', 8]]],
    ['Q3', 12, [['AO2', 12]]],
    ['Q4', 16, [['AO3', 16]]],
    [
      'Q5',
      40,
      [
        ['AO5', 24],
        ['AO6', 16],
      ],
    ],
  ] as const)('%s is %i marks: %j', (questionId, total, expected) => {
    expect(tariffs('aqa-lang-paper2', questionId)).toEqual(expected)
    expect(question('aqa-lang-paper2', questionId).totalMarks).toBe(total)
  })

  it('keeps its grids: Question 1 a mark a statement, Questions 2 to 5 in four levels', () => {
    expect(ranges(question('aqa-lang-paper2', 'Q1').assessmentObjectives[0]!)).toEqual([[1, 4]])
    expect(ranges(question('aqa-lang-paper2', 'Q2').assessmentObjectives[0]!)).toEqual(FOUR_OF_TWO)
    expect(ranges(question('aqa-lang-paper2', 'Q3').assessmentObjectives[0]!)).toEqual([
      [1, 3],
      [4, 6],
      [7, 9],
      [10, 12],
    ])
    expect(ranges(question('aqa-lang-paper2', 'Q4').assessmentObjectives[0]!)).toEqual([
      [1, 4],
      [5, 8],
      [9, 12],
      [13, 16],
    ])
    const [ao5, ao6] = question('aqa-lang-paper2', 'Q5').assessmentObjectives
    expect(ranges(ao5!)).toEqual(AO5_LEVELS)
    expect(ranges(ao6!)).toEqual(AO6_LEVELS)
  })

  it('asks Question 2 what you can infer about the differences, not for a summary', () => {
    const q2 = question('aqa-lang-paper2', 'Q2')
    expect(q2.taskDescription).toMatch(/infer about the differences the question names/)
    const words = [
      q2.questionType,
      q2.taskDescription,
      ...q2.assessmentObjectives.flatMap((a) => [
        a.label,
        a.description,
        ...a.bands.map((b) => b.descriptor),
      ]),
    ].join(' ')
    expect(words).not.toMatch(/summar|similarities/i)
    expect(q2.examinerNotes).toMatch(/only one source scores 3 marks at most/)
    expect(q2.examinerNotes).toMatch(/Level 3 and above need both sources and the focus/)
  })

  it('names one source and its lines on Question 3, and caps the wrong ones', () => {
    const q3 = question('aqa-lang-paper2', 'Q3')
    expect(q3.taskDescription).toMatch(/names one source and a set of lines in it/)
    expect(q3.examinerNotes).toMatch(/other source, or about lines outside the ones named/)
    expect(q3.examinerNotes).toMatch(/bottom of the level it would otherwise reach/)
    expect(q3.examinerNotes).toMatch(/Level 3 and above need the focus the question names/)
  })

  it('needs both sources on Question 4, and no level a sustained comparison', () => {
    const q4 = question('aqa-lang-paper2', 'Q4')
    expect(q4.examinerNotes).not.toMatch(/Sustained comparison is required/)
    expect(q4.examinerNotes).toMatch(/only one source scores 6 marks at most/)
    expect(q4.examinerNotes).toMatch(/Level 3 and above need both sources/)
    const level3 = q4.assessmentObjectives[0]!.bands.find((b) => b.band === 'Level 3')!
    expect(level3.indicators.join(' ')).not.toMatch(/sustained/i)
  })

  it('caps AO5 on Question 5 at 12 when the writing misses the task’s focus', () => {
    expect(question('aqa-lang-paper2', 'Q5').examinerNotes).toMatch(
      /cannot score more than 12 of the 24 AO5 marks/,
    )
  })
})

// ─── The marker held to its guide ───────────────────────────────────────────

/** "1-6" or "4" as a range. */
function span(marks: string): [number, number] {
  const [lo, hi] = marks.split('-').map(Number)
  return [lo!, hi ?? lo!]
}

/** The marker's grid a guide level belongs to: "AO5 Level 1" names it; a bare "Level 1" is the main one. */
function gridFor(levelName: string, q: QuestionScheme): AssessmentObjective | undefined {
  const named = /^(AO\d)\b/.exec(levelName)?.[1]
  return named ? q.assessmentObjectives.find((a) => a.id === named) : q.assessmentObjectives[0]
}

/**
 * The Language files give `weighting` as a share of the paper (Q2's AO2 is
 * 0.1, 8 of 80), not of the question as the Literature files do. The guides
 * do not touch it, so it is unchanged and not held here.
 */
function holdToGuide(guide: MarkSchemeGuide) {
  const scheme = MARK_SCHEMES[guide.schemeId]!
  expect(scheme.totalMarks, 'paper total').toBe(guide.totalMarks)
  expect(scheme.durationMinutes, 'duration').toBe(guide.durationMinutes)
  const guided = guide.sections.flatMap((s) => s.questions)
  // Every question the marker has is one the paper has, and the reverse.
  expect(scheme.questions.map((q) => q.id).sort()).toEqual(
    guided.map((g) => g.markerQuestionId).sort(),
  )
  for (const g of guided) {
    const q = scheme.questions.find((x) => x.id === g.markerQuestionId)!
    expect(q.totalMarks, `${g.label}: marks`).toBe(g.marks)
    expect(
      q.assessmentObjectives.map((a) => [a.id, a.maxMarks]),
      `${g.label}: objectives`,
    ).toEqual(g.objectives.map((o) => [o.id, o.marks]))
    for (const a of q.assessmentObjectives) {
      const levels = g.levels.filter((l) => gridFor(l.name, q) === a)
      if (g.levels.length === 0) {
        // Point-marked: one band from the first mark to the last, no levels.
        expect(ranges(a), `${g.label}: point-marked`).toEqual([[1, a.maxMarks]])
        continue
      }
      expect(ranges(a), `${g.label} ${a.id}: level ranges`).toEqual(
        levels.map((l) => span(l.marks)),
      )
      a.bands.forEach((b, i) => {
        expect(levels[i]!.name, `${g.label} ${a.id}: level names`).toContain(b.band)
      })
    }
  }
}

describe('the marker agrees with its guide', () => {
  it.each([
    ['aqa-lang-paper1', LANG1_GUIDE],
    ['aqa-lang-paper2', LANG2_GUIDE],
  ] as const)(
    '%s: every question, objective, grid and level range, and the paper total',
    (_id, guide) => {
      holdToGuide(guide)
    },
  )
})
