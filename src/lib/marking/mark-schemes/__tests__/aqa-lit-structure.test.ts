import { describe, it, expect } from 'vitest'
import { MARK_SCHEMES } from '@/lib/marking/mark-schemes'
import type { AssessmentObjective, QuestionScheme } from '@/lib/marking/mark-schemes/types'
import { isSpecVerified } from '@/lib/marking/examiner/verification'
import { derivePack } from '@/lib/marking/examiner/packs/derive'
import { generateFeedback } from '@/lib/marking/feedback-generator'
import { buildMarkingPrompt } from '@/lib/marking/prompt-builder'
import { formatSchemeForFeedback, normaliseAoScores } from '@/lib/marking/essay-feedback'
import { GUIDE as LIT1_GUIDE } from '@/data/mark-scheme-guides/aqa-lit-paper1'
import { GUIDE as LIT2_GUIDE } from '@/data/mark-scheme-guides/aqa-lit-paper2'
import type { MarkSchemeGuide } from '@/data/mark-scheme-guides/types'

/**
 * AQA GCSE English Literature (8702) against AQA's own mark schemes.
 *
 * Paper 2 had no scheme until 9 October 2026, so the 8702/2 mocks and every
 * AQA modern-text, anthology and unseen-poetry answer got general feedback with
 * no marks. Its tariffs were then checked against AQA's June 2023 8702/2 mark
 * scheme: AO4 on Section A only, and the same split of each answer's marks
 * that is still pinned below.
 *
 * 24 October 2026: both papers were corrected to their mark-scheme guides
 * (src/data/mark-scheme-guides/aqa-lit-paper1.ts and aqa-lit-paper2.ts), which
 * follow AQA's June 2025 mark schemes. This file used to pin a tariff for each
 * objective, AO1 12, AO2 12 and AO3 6, because the scheme gave each its own
 * ladder; AQA marks those three together on one six-level grid, so the pins
 * are now one 30-mark grid, 'AO1-AO3', beside AO4's own 4 (and one 24-mark
 * 'AO1-AO2' grid on 28.1). The marks did not change: 12, 12 and 6 are the
 * weights inside the grid, which the guides record and the last block here
 * still checks. The unseen questions are 28.1 and 28.2 since June 2025; this
 * file called them 27.1 and 27.2.
 */

const lit1 = MARK_SCHEMES['aqa-lit-paper1']!
const lit2 = MARK_SCHEMES['aqa-lit-paper2']!

function question(id: string, questionId: string): QuestionScheme {
  const q = MARK_SCHEMES[id]!.questions.find((x) => x.id === questionId)
  if (!q) throw new Error(`${id} has no ${questionId}`)
  return q
}

function tariffs(id: string, questionId: string): [string, number][] {
  return question(id, questionId).assessmentObjectives.map((a) => [a.id, a.maxMarks])
}

function ranges(ao: AssessmentObjective): [string, number, number][] {
  return ao.bands.map((b) => [b.band, b.minMarks, b.maxMarks])
}

const SIX_OF_FIVE: [string, number, number][] = [
  ['Level 1', 1, 5],
  ['Level 2', 6, 10],
  ['Level 3', 11, 15],
  ['Level 4', 16, 20],
  ['Level 5', 21, 25],
  ['Level 6', 26, 30],
]

const SIX_OF_FOUR: [string, number, number][] = [
  ['Level 1', 1, 4],
  ['Level 2', 5, 8],
  ['Level 3', 9, 12],
  ['Level 4', 13, 16],
  ['Level 5', 17, 20],
  ['Level 6', 21, 24],
]

const AO4_BANDS: [string, number, number][] = [
  ['Threshold', 1, 1],
  ['Intermediate', 2, 3],
  ['High', 4, 4],
]

describe('AQA English Literature Paper 1 (8702/1)', () => {
  it('is 64 marks in 1 hour 45 minutes, and its questions add up to it', () => {
    expect(lit1.totalMarks).toBe(64)
    expect(lit1.durationMinutes).toBe(105)
    expect(lit1.questions.reduce((s, q) => s + q.totalMarks, 0)).toBe(64)
  })

  it('keeps the question ids that saved essays name', () => {
    expect(lit1.questions.map((q) => q.id)).toEqual(['Section A', 'Section B'])
  })

  it.each([
    [
      'Section A',
      34,
      [
        ['AO1-AO3', 30],
        ['AO4', 4],
      ],
    ],
    ['Section B', 30, [['AO1-AO3', 30]]],
  ] as const)('%s is %i marks: %j', (questionId, total, expected) => {
    expect(tariffs('aqa-lit-paper1', questionId)).toEqual(expected)
    expect(question('aqa-lit-paper1', questionId).totalMarks).toBe(total)
  })

  it.each(['Section A', 'Section B'])(
    'marks %s on one six-level grid, Level 1 1-5 to Level 6 26-30',
    (questionId) => {
      const grid = question('aqa-lit-paper1', questionId).assessmentObjectives[0]!
      expect(grid.id).toBe('AO1-AO3')
      expect(ranges(grid)).toEqual(SIX_OF_FIVE)
    },
  )

  it('gives AO4 its own three bands, 1, 2-3 and 4, in Section A only', () => {
    const ao4 = question('aqa-lit-paper1', 'Section A').assessmentObjectives[1]!
    expect(ao4.id).toBe('AO4')
    expect(ranges(ao4)).toEqual(AO4_BANDS)
  })

  it.each([
    ['Section A', 'play'],
    ['Section B', 'novel'],
  ])(
    'caps a %s answer without the extract or the rest of the %s at the top of Level 2',
    (questionId, text) => {
      const notes = question('aqa-lit-paper1', questionId).examinerNotes!
      expect(notes).toMatch(
        new RegExp(`leaves out either the printed extract or the rest of the ${text}`),
      )
      expect(notes).toMatch(/cannot go above the top of Level 2 \(10 of 30\)/)
    },
  )

  it('starts Section B from a printed extract, as the paper does, not from a theme', () => {
    const task = question('aqa-lit-paper1', 'Section B').taskDescription
    expect(task).toMatch(/Starting with an extract/)
    expect(task).toMatch(/printed on the paper/)
    expect(task).toMatch(/the novel as a whole/)
  })

  it('says it is unverified: the correction was not a check by a person', () => {
    expect(isSpecVerified('aqa-lit-paper1')).toBe(false)
  })
})

describe('AQA English Literature Paper 2 (8702/2)', () => {
  it('is 96 marks in 2 hours 15 minutes', () => {
    expect(lit2.totalMarks).toBe(96)
    expect(lit2.durationMinutes).toBe(135)
    expect(lit2.questions.reduce((s, q) => s + q.totalMarks, 0)).toBe(96)
  })

  it('keeps the question ids that saved essays and the mock hand-offs name', () => {
    expect(lit2.questions.map((q) => q.id)).toEqual([
      'Section A',
      'Section B',
      'Section C (a)',
      'Section C (b)',
    ])
  })

  it.each([
    [
      'Section A',
      34,
      [
        ['AO1-AO3', 30],
        ['AO4', 4],
      ],
    ],
    ['Section B', 30, [['AO1-AO3', 30]]],
    ['Section C (a)', 24, [['AO1-AO2', 24]]],
    ['Section C (b)', 8, [['AO2', 8]]],
  ] as const)('%s is %i marks: %j', (questionId, total, expected) => {
    expect(tariffs('aqa-lit-paper2', questionId)).toEqual(expected)
    expect(question('aqa-lit-paper2', questionId).totalMarks).toBe(total)
  })

  it.each(['Section A', 'Section B'])(
    'marks %s on one six-level grid, Level 1 1-5 to Level 6 26-30',
    (questionId) => {
      const grid = question('aqa-lit-paper2', questionId).assessmentObjectives[0]!
      expect(ranges(grid)).toEqual(SIX_OF_FIVE)
    },
  )

  it('marks question 28.1 on one six-level grid, Level 1 1-4 to Level 6 21-24', () => {
    const grid = question('aqa-lit-paper2', 'Section C (a)').assessmentObjectives[0]!
    expect(ranges(grid)).toEqual(SIX_OF_FOUR)
  })

  it('marks question 28.2 in AQA’s four levels, 1-2 to 7-8', () => {
    const ao = question('aqa-lit-paper2', 'Section C (b)').assessmentObjectives[0]!
    expect(ao.bands.map((b) => [b.minMarks, b.maxMarks])).toEqual([
      [1, 2],
      [3, 4],
      [5, 6],
      [7, 8],
    ])
  })

  it('gives AO4 its own three bands, 1, 2-3 and 4, in Section A', () => {
    const ao4 = question('aqa-lit-paper2', 'Section A').assessmentObjectives[1]!
    expect(ao4.id).toBe('AO4')
    expect(ranges(ao4)).toEqual(AO4_BANDS)
  })

  it('numbers the unseen questions 28.1 and 28.2, as AQA has since June 2025', () => {
    expect(question('aqa-lit-paper2', 'Section C (a)').taskDescription).toMatch(/^Question 28\.1:/)
    expect(question('aqa-lit-paper2', 'Section C (b)').taskDescription).toMatch(/^Question 28\.2:/)
    const words = lit2.questions.map(
      (q) => `${q.questionType} ${q.taskDescription} ${q.examinerNotes}`,
    )
    expect(words.join(' ')).not.toMatch(/\b27\.[12]\b/)
  })

  it('caps a Section B answer without the named poem, or across clusters, at the top of Level 2', () => {
    const notes = question('aqa-lit-paper2', 'Section B').examinerNotes!
    expect(notes).toMatch(/leaves out the named poem/)
    expect(notes).toMatch(/writes about only one poem/)
    expect(notes).toMatch(/second poem from another cluster/)
    expect(notes).toMatch(/cannot go above the top of Level 2 \(10 of 30\)/)
  })

  it('marks Telling Tales on the named story and one other, and gives comparison nothing', () => {
    const a = question('aqa-lit-paper2', 'Section A')
    expect(a.taskDescription).toMatch(/Telling Tales/)
    expect(a.taskDescription).toMatch(/names one story/)
    expect(a.examinerNotes).toMatch(/whole text means the named story and the one other/)
    expect(a.examinerNotes).toMatch(/comparison is not assessed and earns no credit/)
  })

  it('gives the anthology comparison no SPaG, and calls its second poem studied', () => {
    const b = question('aqa-lit-paper2', 'Section B')
    expect(b.assessmentObjectives.map((a) => a.id)).not.toContain('AO4')
    expect(b.taskDescription).not.toMatch(/unseen/i)
  })

  it('says it is unverified: the correction was not a check by a person', () => {
    expect(isSpecVerified('aqa-lit-paper2')).toBe(false)
  })
})

describe('AQA English Literature: AO4 on each paper', () => {
  it('assesses AO4 on Section A of each paper only, 4 marks each, 8 in all', () => {
    const ao4 = [lit1, lit2].flatMap((p) =>
      p.questions.flatMap((q) =>
        q.assessmentObjectives
          .filter((a) => a.id === 'AO4')
          .map((a) => `${p.id} ${q.id} ${a.maxMarks}`),
      ),
    )
    expect(ao4).toEqual(['aqa-lit-paper1 Section A 4', 'aqa-lit-paper2 Section A 4'])
  })
})

// ─── The marker held to its guide ───────────────────────────────────────────

/** The objectives a grid's id covers: 'AO1-AO3' is AO1, AO2 and AO3. */
function covers(id: string): string[] {
  const m = /^AO(\d)-AO(\d)$/.exec(id)
  if (!m) return [id]
  const out: string[] = []
  for (let n = Number(m[1]); n <= Number(m[2]); n++) out.push(`AO${n}`)
  return out
}

/** "1-5" or "4" as a range. */
function span(marks: string): [number, number] {
  const [lo, hi] = marks.split('-').map(Number)
  return [lo!, hi ?? lo!]
}

/**
 * The marker's grid a guide level belongs to. "AO4 High performance" and
 * "AO5 Level 1" name theirs; a bare "Level 1" is the question's main grid.
 */
function gridFor(levelName: string, q: QuestionScheme): AssessmentObjective | undefined {
  const named = /^(AO\d)\b/.exec(levelName)?.[1]
  return named ? q.assessmentObjectives.find((a) => a.id === named) : q.assessmentObjectives[0]
}

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
    const fromGuide = new Map(g.objectives.map((o) => [o.id, o.marks]))
    expect(
      q.assessmentObjectives.flatMap((a) => covers(a.id)).sort(),
      `${g.label}: objectives`,
    ).toEqual([...fromGuide.keys()].sort())
    for (const a of q.assessmentObjectives) {
      const sum = covers(a.id).reduce((n, id) => n + (fromGuide.get(id) ?? 0), 0)
      expect(a.maxMarks, `${g.label} ${a.id}: marks`).toBe(sum)
      expect(a.weighting, `${g.label} ${a.id}: share of the question`).toBeCloseTo(
        a.maxMarks / q.totalMarks,
        6,
      )
    }
    for (const a of q.assessmentObjectives) {
      const levels = g.levels.filter((l) => gridFor(l.name, q) === a)
      expect(levels.length, `${g.label} ${a.id}: the guide has levels for it`).toBeGreaterThan(0)
      expect(
        a.bands.map((b) => [b.minMarks, b.maxMarks]),
        `${g.label} ${a.id}: level ranges`,
      ).toEqual(levels.map((l) => span(l.marks)))
      a.bands.forEach((b, i) => {
        expect(levels[i]!.name, `${g.label} ${a.id}: level names`).toContain(b.band)
      })
    }
  }
}

describe('the marker agrees with its guide', () => {
  it.each([
    ['aqa-lit-paper1', LIT1_GUIDE],
    ['aqa-lit-paper2', LIT2_GUIDE],
  ] as const)(
    '%s: every question, objective, grid and level range, and the paper total',
    (_id, guide) => {
      holdToGuide(guide)
    },
  )
})

// ─── The combined grids reach the model and come back ───────────────────────

describe('a combined grid survives the marking engine', () => {
  const sectionA = question('aqa-lit-paper1', 'Section A')

  it('opens its label with its id, because the model is shown the label and not the id', () => {
    for (const p of [lit1, lit2]) {
      for (const q of p.questions) {
        for (const a of q.assessmentObjectives) {
          expect(a.id, `${p.id} ${q.id}`).toBe(a.id.toUpperCase())
          expect(a.label.startsWith(`${a.id} - `), `${p.id} ${q.id} ${a.label}`).toBe(true)
        }
      }
    }
    const prompt = buildMarkingPrompt({
      scheme: lit1,
      questionId: 'Section A',
      questionText: 'Q',
      essay: 'E',
    }).systemPrompt
    expect(prompt).toContain('## AO1-AO3 - ')
    expect(prompt).toContain('## AO4 - ')
    // The model is told a combined grid is one entry under the id its heading
    // begins with: a reply split into AO1, AO2 and AO3 would match no grid.
    expect(prompt).toContain('never split into its objectives')
    expect(formatSchemeForFeedback({ scheme: lit1, question: sectionA })).toMatch(
      /^AO1-AO3 - .* - maximum 30 marks\./m,
    )
  })

  it('names the objectives in a combined label and no skill a revision link could be chosen by', () => {
    // The results page picks a revision link from the weakest objective's
    // label: "context" sends a student to the context page. A label for the
    // whole essay must not.
    const combined = [lit1, lit2].flatMap((p) =>
      p.questions.flatMap((q) => q.assessmentObjectives.filter((a) => a.id.includes('-'))),
    )
    expect([...new Set(combined.map((a) => a.label))].sort()).toEqual([
      'AO1-AO2 - AO1 and AO2, marked together on one grid',
      'AO1-AO3 - AO1, AO2 and AO3, marked together on one grid',
    ])
    for (const a of combined) {
      expect(a.label).not.toMatch(/context|analys|respon|compar|language|structure|form|quotation/i)
    }
  })

  it('matches a mark returned under the grid id, in either case, to the grid', () => {
    const raw = JSON.stringify({
      aoScores: [
        { id: 'ao1-ao3', marks: 22, band: 'Level 5', justification: 'x' },
        { id: 'AO4', marks: 3, band: 'Intermediate', justification: 'y' },
      ],
      strengths: [{ point: 'a', quote: 'b' }],
      improvements: [{ point: 'c', suggestion: 'd' }],
      nextStepsToNextGrade: ['e'],
      summary: 'f',
    })
    const out = generateFeedback({ scheme: lit1, questionId: 'Section A', rawResponseText: raw })
    expect(out.ok).toBe(true)
    if (!out.ok) return
    expect(out.result.aoScores.map((a) => [a.id, a.marks, a.maxMarks, a.label])).toEqual([
      ['AO1-AO3', 22, 30, sectionA.assessmentObjectives[0]!.label],
      ['AO4', 3, 4, sectionA.assessmentObjectives[1]!.label],
    ])
    expect(out.result.totalMarks).toBe(25)
    expect(out.result.maxMarks).toBe(34)
  })

  it('is matched by essay feedback too, with the scheme’s own maximum', () => {
    const scores = normaliseAoScores(
      [
        { id: 'ao1-ao3', score: 22, comment: 'x' },
        { id: 'AO4', score: 9, comment: 'y' },
      ],
      sectionA,
    )
    expect(scores?.map((s) => [s.id, s.score, s.maxScore])).toEqual([
      ['AO1-AO3', 22, 30],
      ['AO4', 4, 4],
    ])
  })

  it('is read by the examiner tool as one grid, with AO4 beside it in Section A', () => {
    const shape = (id: string) =>
      derivePack(MARK_SCHEMES[id]!).questions.map((q) =>
        q.kind === 'writing'
          ? [q.id, q.kind, q.grids.map((g) => [g.id, g.levels.map((l) => [l.lo, l.hi])])]
          : q.kind === 'level'
            ? [q.id, q.kind, q.grid.id, q.grid.levels.length]
            : [q.id, q.kind],
      )
    const sixOfFive = SIX_OF_FIVE.map(([, lo, hi]) => [lo, hi])
    const ao4 = AO4_BANDS.map(([, lo, hi]) => [lo, hi])
    expect(shape('aqa-lit-paper1')).toEqual([
      [
        'Section A',
        'writing',
        [
          ['AO1-AO3', sixOfFive],
          ['AO4', ao4],
        ],
      ],
      ['Section B', 'level', 'AO1-AO3', 6],
    ])
    expect(shape('aqa-lit-paper2')).toEqual([
      [
        'Section A',
        'writing',
        [
          ['AO1-AO3', sixOfFive],
          ['AO4', ao4],
        ],
      ],
      ['Section B', 'level', 'AO1-AO3', 6],
      ['Section C (a)', 'level', 'AO1-AO2', 6],
      ['Section C (b)', 'level', 'AO2', 4],
    ])
  })
})
