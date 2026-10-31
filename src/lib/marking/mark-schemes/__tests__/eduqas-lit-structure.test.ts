import { describe, it, expect } from 'vitest'
import { MARK_SCHEMES } from '@/lib/marking/mark-schemes'
import type { AssessmentObjective, QuestionScheme } from '@/lib/marking/mark-schemes/types'
import { isSpecVerified } from '@/lib/marking/examiner/verification'
import { derivePack } from '@/lib/marking/examiner/packs/derive'
import { generateFeedback } from '@/lib/marking/feedback-generator'
import { buildMarkingPrompt } from '@/lib/marking/prompt-builder'
import { formatSchemeForFeedback, normaliseAoScores } from '@/lib/marking/essay-feedback'
import { GUIDE as LIT1_GUIDE } from '@/data/mark-scheme-guides/eduqas-lit-comp1'
import { GUIDE as LIT2_GUIDE } from '@/data/mark-scheme-guides/eduqas-lit-comp2'
import type { MarkSchemeGuide } from '@/data/mark-scheme-guides/types'

/**
 * WJEC Eduqas GCSE English Literature (C720QS) against Eduqas's own documents.
 *
 * Until 9 October 2026 each component was two 40-mark questions: Component 1
 * put AO3 on Shakespeare and AO4 on poetry, the reverse of what Eduqas
 * assesses, and Component 2 was 80 marks with no unseen poetry, where Eduqas
 * sets 120 marks in three sections. Eduqas's specification (pages 7 to 10) and
 * its Summer 2024 mark schemes (C720U10-1, C720U20-1) set:
 *   - Component 1, 80 marks: Shakespeare, an extract question of 15 (AO1, AO2)
 *     and an essay of 20 plus 5 for AO4; poetry, a named anthology poem of 15
 *     and a comparison with a second of 25 (AO1, AO2, AO3).
 *   - Component 2, 120 marks: post-1914 prose or drama, 35 (AO1, AO2) plus 5
 *     for AO4; 19th-century prose, 40 (AO1, AO2, AO3); unseen poetry, 15 and
 *     25 (AO1, AO2).
 *
 * 24 October 2026: both components were corrected to their mark-scheme guides
 * (src/data/mark-scheme-guides/eduqas-lit-comp1.ts and eduqas-lit-comp2.ts),
 * which follow Eduqas's Summer 2025 mark schemes, with the founder's approval
 * (document 30). This file used to pin a tariff for each objective, because
 * the scheme split each question's marks between them (15 as AO1 8 + AO2 7, 40
 * as 14 + 13 + 13) and gave each its own ladder. Eduqas marks an answer once,
 * on one grid covering all its objectives, so the pins are now one grid per
 * question, 'AO1-AO2' or 'AO1-AO3', at Eduqas's band ranges, beside AO4's own
 * grid on the two questions that carry it. The last blocks hold the scheme to
 * the guides themselves and push a combined grid's id through the engine.
 */

const c1 = MARK_SCHEMES['eduqas-lit-comp1']!
const c2 = MARK_SCHEMES['eduqas-lit-comp2']!

function question(id: string, questionId: string): QuestionScheme {
  const q = MARK_SCHEMES[id]!.questions.find((x) => x.id === questionId)
  if (!q) throw new Error(`${id} has no ${questionId}`)
  return q
}

function tariffs(id: string, questionId: string): [string, number][] {
  return question(id, questionId).assessmentObjectives.map((a) => [a.id, a.maxMarks])
}

function ranges(ao: AssessmentObjective): [number, number][] {
  return [...ao.bands].sort((x, y) => x.minMarks - y.minMarks).map((b) => [b.minMarks, b.maxMarks])
}

/** The objectives a grid's id covers: 'AO1-AO3' is AO1, AO2 and AO3. */
function covers(id: string): string[] {
  const m = /^AO(\d)-AO(\d)$/.exec(id)
  if (!m) return [id]
  const out: string[] = []
  for (let n = Number(m[1]); n <= Number(m[2]); n++) out.push(`AO${n}`)
  return out
}

/** Eduqas's five bands for a grid of `max` marks, each a fifth of it. */
function fifths(max: number): [number, number][] {
  const step = max / 5
  return [1, 2, 3, 4, 5].map((n) => [(n - 1) * step + 1, n * step])
}

const AO4_LEVELS: [number, number][] = [
  [1, 1],
  [2, 3],
  [4, 5],
]

describe('Eduqas English Literature C720', () => {
  it.each([
    ['eduqas-lit-comp1', 'Section A (a)', [['AO1-AO2', 15]]],
    [
      'eduqas-lit-comp1',
      'Section A (b)',
      [
        ['AO1-AO2', 20],
        ['AO4', 5],
      ],
    ],
    ['eduqas-lit-comp1', 'Section B (a)', [['AO1-AO3', 15]]],
    ['eduqas-lit-comp1', 'Section B (b)', [['AO1-AO3', 25]]],
    [
      'eduqas-lit-comp2',
      'Section A',
      [
        ['AO1-AO2', 35],
        ['AO4', 5],
      ],
    ],
    ['eduqas-lit-comp2', 'Section B', [['AO1-AO3', 40]]],
    ['eduqas-lit-comp2', 'Section C (a)', [['AO1-AO2', 15]]],
    ['eduqas-lit-comp2', 'Section C (b)', [['AO1-AO2', 25]]],
  ] as const)('%s %s carries %j', (id, questionId, expected) => {
    expect(tariffs(id, questionId)).toEqual(expected)
  })

  it('sets Component 1 as 15 + 25 + 15 + 25 = 80 marks in two hours', () => {
    expect(c1.questions.map((q) => q.totalMarks)).toEqual([15, 25, 15, 25])
    expect(c1.questions.reduce((s, q) => s + q.totalMarks, 0)).toBe(80)
    expect(c1.totalMarks).toBe(80)
    expect(c1.durationMinutes).toBe(120)
  })

  it('sets Component 2 as 40 + 40 + 15 + 25 = 120 marks in two and a half hours', () => {
    expect(c2.questions.map((q) => q.totalMarks)).toEqual([40, 40, 15, 25])
    expect(c2.questions.reduce((s, q) => s + q.totalMarks, 0)).toBe(120)
    expect(c2.totalMarks).toBe(120)
    expect(c2.durationMinutes).toBe(150)
  })

  it('keeps the question ids saved essays and the mock hand-offs name, Section B (a) among them', () => {
    expect(c1.questions.map((q) => q.id)).toEqual([
      'Section A (a)',
      'Section A (b)',
      'Section B (a)',
      'Section B (b)',
    ])
    expect(c2.questions.map((q) => q.id)).toEqual([
      'Section A',
      'Section B',
      'Section C (a)',
      'Section C (b)',
    ])
  })

  it('assesses AO4 on the Shakespeare essay and the post-1914 question only, and AO3 on the anthology poems and the 19th-century novel only', () => {
    const where = (aoId: string) =>
      ['eduqas-lit-comp1', 'eduqas-lit-comp2'].flatMap((id) =>
        MARK_SCHEMES[id]!.questions.filter((q) =>
          q.assessmentObjectives.some((a) => covers(a.id).includes(aoId)),
        ).map((q) => `${id} ${q.id}`),
      )
    expect(where('AO4')).toEqual(['eduqas-lit-comp1 Section A (b)', 'eduqas-lit-comp2 Section A'])
    expect(where('AO3')).toEqual([
      'eduqas-lit-comp1 Section B (a)',
      'eduqas-lit-comp1 Section B (b)',
      'eduqas-lit-comp2 Section B',
    ])
  })

  it('marks AO4 on Eduqas’s three performance levels, 1, 2-3 and 4-5, on its own grid', () => {
    for (const [id, qid] of [
      ['eduqas-lit-comp1', 'Section A (b)'],
      ['eduqas-lit-comp2', 'Section A'],
    ]) {
      const ao4 = question(id!, qid!).assessmentObjectives.find((a) => a.id === 'AO4')!
      expect(ranges(ao4)).toEqual(AO4_LEVELS)
      expect(ao4.bands.map((b) => b.band)).toEqual(['Threshold', 'Intermediate', 'High'])
    }
  })

  it('marks every answer on one grid of Eduqas’s five bands, a fifth of its marks each', () => {
    // Until 24 October 2026 each objective had its own ladder, scaled from a
    // 20-mark one: AO1 out of 8 ran 1-2, 3, 4-5, 6, 7-8.
    for (const s of [c1, c2]) {
      for (const q of s.questions) {
        const grid = q.assessmentObjectives[0]!
        expect(grid.id, `${s.id} ${q.id}`).toMatch(/^AO1-AO[23]$/)
        expect(ranges(grid), `${s.id} ${q.id}`).toEqual(fifths(grid.maxMarks))
        expect(
          grid.bands.map((b) => b.band),
          `${s.id} ${q.id}`,
        ).toEqual(['Band 1', 'Band 2', 'Band 3', 'Band 4', 'Band 5'])
        expect(
          q.assessmentObjectives.slice(1).map((a) => a.id),
          `${s.id} ${q.id}`,
        ).toEqual(q.assessmentObjectives.length > 1 ? ['AO4'] : [])
      }
    }
  })

  it('tells the model to judge each grid once, as a whole, and names the id to score it under', () => {
    for (const s of [c1, c2]) {
      for (const q of s.questions) {
        const notes = q.examinerNotes ?? ''
        expect(notes, `${s.id} ${q.id}`).toMatch(/one grid on which/)
        for (const a of q.assessmentObjectives) expect(notes, `${s.id} ${q.id}`).toContain(a.id)
      }
    }
  })

  it('keeps an unbalanced anthology comparison out of the higher bands, as the guide says', () => {
    const notes = question('eduqas-lit-comp1', 'Section B (b)').examinerNotes!
    expect(notes).toMatch(
      /spends most of its length on the printed poem cannot reach the higher bands/,
    )
    const guideAvoid = LIT1_GUIDE.sections[1]!.questions[1]!.avoid.join(' ')
    expect(guideAvoid).toMatch(/cannot reach the higher bands/)
  })

  it('describes the poetry question as two anthology poems and unseen poetry as Component 2', () => {
    expect(c1.questions[3]!.taskDescription).toMatch(/one other poem from the anthology/)
    expect(c1.questions.map((q) => q.taskDescription).join(' ')).not.toMatch(/unseen/i)
    expect(c2.questions[2]!.questionType).toMatch(/unseen/i)
    expect(c2.questions[1]!.taskDescription).toMatch(/printed extract/)
  })

  it('says it is unverified: the correction was not a check by a person', () => {
    expect(isSpecVerified('eduqas-lit-comp1')).toBe(false)
    expect(isSpecVerified('eduqas-lit-comp2')).toBe(false)
  })
})

// ─── The marker held to its guide ───────────────────────────────────────────

/** "1-5" or "4" as a range. */
function span(marks: string): [number, number] {
  const [lo, hi] = marks.split('-').map(Number)
  return [lo!, hi ?? lo!]
}

function holdToGuide(guide: MarkSchemeGuide) {
  const scheme = MARK_SCHEMES[guide.schemeId]!
  expect(scheme.totalMarks, 'paper total').toBe(guide.totalMarks)
  expect(scheme.durationMinutes, 'duration').toBe(guide.durationMinutes)
  const guided = guide.sections.flatMap((s) => s.questions)
  expect(scheme.questions.map((q) => q.id).sort()).toEqual(
    guided.map((g) => g.markerQuestionId).sort(),
  )
  for (const g of guided) {
    const q = scheme.questions.find((x) => x.id === g.markerQuestionId)!
    expect(q.totalMarks, `${g.label}: marks`).toBe(g.marks)
    // The guide lists objectives that share a grid under one figure
    // ('AO1, AO2': 15), as the marker gives them one objective ('AO1-AO2').
    expect(
      q.assessmentObjectives.map((a) => [covers(a.id).join(', '), a.maxMarks]),
      `${g.label}: objectives`,
    ).toEqual(g.objectives.map((o) => [o.id, o.marks]))
    for (const a of q.assessmentObjectives) {
      expect(a.weighting, `${g.label} ${a.id}: share of the question`).toBeCloseTo(
        a.maxMarks / q.totalMarks,
        6,
      )
    }
    // The guide's levels are the main grid's; AO4's are in its rewards.
    const grid = q.assessmentObjectives[0]!
    expect(ranges(grid), `${g.label}: level ranges`).toEqual(g.levels.map((l) => span(l.marks)))
    expect(
      grid.bands.map((b) => b.band),
      `${g.label}: level names`,
    ).toEqual(g.levels.map((l) => l.name))
    const ao4 = q.assessmentObjectives.find((a) => a.id === 'AO4')
    if (ao4) {
      const m = /threshold \((\d+) mark\).*intermediate \((\d+)-(\d+)\).*high \((\d+)-(\d+)\)/.exec(
        g.rewards.join(' '),
      )
      expect(m, `${g.label}: the guide states AO4's levels`).toBeTruthy()
      const [, t, i1, i2, h1, h2] = m!.map(Number)
      expect(ranges(ao4), `${g.label}: AO4 levels`).toEqual([
        [t, t],
        [i1, i2],
        [h1, h2],
      ])
    }
  }
}

describe('the marker agrees with its guide', () => {
  it.each([
    ['eduqas-lit-comp1', LIT1_GUIDE],
    ['eduqas-lit-comp2', LIT2_GUIDE],
  ] as const)(
    '%s: every question, objective, grid and level range, and the paper total',
    (_id, guide) => {
      holdToGuide(guide)
    },
  )
})

// ─── The combined grids reach the model and come back ───────────────────────

describe('a combined grid survives the marking engine', () => {
  const essay = question('eduqas-lit-comp1', 'Section A (b)')

  it('opens its label with its id, because the model is shown the label and not the id', () => {
    for (const s of [c1, c2]) {
      for (const q of s.questions) {
        for (const a of q.assessmentObjectives) {
          expect(a.id, `${s.id} ${q.id}`).toBe(a.id.toUpperCase())
          expect(a.label.startsWith(`${a.id} - `), `${s.id} ${q.id} ${a.label}`).toBe(true)
        }
      }
    }
    const prompt = buildMarkingPrompt({
      scheme: c1,
      questionId: 'Section A (b)',
      questionText: 'Q',
      essay: 'E',
    }).systemPrompt
    expect(prompt).toContain('## AO1-AO2 - ')
    expect(prompt).toContain('## AO4 - ')
    expect(formatSchemeForFeedback({ scheme: c1, question: essay })).toMatch(
      /^AO1-AO2 - .* - maximum 20 marks\./m,
    )
  })

  it('matches a mark returned under the grid id, in either case, to the grid', () => {
    const raw = JSON.stringify({
      aoScores: [
        { id: 'ao1-ao2', marks: 14, band: 'Band 4', justification: 'x' },
        { id: 'AO4', marks: 3, band: 'Intermediate', justification: 'y' },
      ],
      strengths: [{ point: 'a', quote: 'b' }],
      improvements: [{ point: 'c', suggestion: 'd' }],
      nextStepsToNextGrade: ['e'],
      summary: 'f',
    })
    const out = generateFeedback({ scheme: c1, questionId: 'Section A (b)', rawResponseText: raw })
    expect(out.ok).toBe(true)
    if (!out.ok) return
    expect(out.result.aoScores.map((a) => [a.id, a.marks, a.maxMarks, a.label])).toEqual([
      ['AO1-AO2', 14, 20, essay.assessmentObjectives[0]!.label],
      ['AO4', 3, 5, essay.assessmentObjectives[1]!.label],
    ])
    expect(out.result.totalMarks).toBe(17)
    expect(out.result.maxMarks).toBe(25)
  })

  it('is matched by essay feedback too, with the scheme’s own maximum', () => {
    const scores = normaliseAoScores(
      [{ id: 'ao1-ao3', score: 30, comment: 'x' }],
      question('eduqas-lit-comp2', 'Section B'),
    )
    expect(scores?.map((s) => [s.id, s.score, s.maxScore])).toEqual([['AO1-AO3', 30, 40]])
    // A reply that splits the grid back into objectives marks nothing: the
    // route refuses it rather than show marks against the wrong grid.
    expect(
      normaliseAoScores(
        [
          { id: 'AO1', score: 10 },
          { id: 'AO2', score: 10 },
          { id: 'AO3', score: 10 },
        ],
        question('eduqas-lit-comp2', 'Section B'),
      ),
    ).toBeNull()
  })

  it('is read by the examiner tool as one grid, with AO4 beside it on the two questions that carry it', () => {
    const shape = (id: string) =>
      derivePack(MARK_SCHEMES[id]!).questions.map((q) =>
        q.kind === 'writing'
          ? [q.id, q.kind, q.grids.map((g) => [g.id, g.levels.map((l) => [l.lo, l.hi])])]
          : q.kind === 'level'
            ? [q.id, q.kind, q.grid.id, q.grid.levels.length]
            : [q.id, q.kind],
      )
    expect(shape('eduqas-lit-comp1')).toEqual([
      ['Section A (a)', 'level', 'AO1-AO2', 5],
      [
        'Section A (b)',
        'writing',
        [
          ['AO1-AO2', fifths(20)],
          ['AO4', AO4_LEVELS],
        ],
      ],
      ['Section B (a)', 'level', 'AO1-AO3', 5],
      ['Section B (b)', 'level', 'AO1-AO3', 5],
    ])
    expect(shape('eduqas-lit-comp2')).toEqual([
      [
        'Section A',
        'writing',
        [
          ['AO1-AO2', fifths(35)],
          ['AO4', AO4_LEVELS],
        ],
      ],
      ['Section B', 'level', 'AO1-AO3', 5],
      ['Section C (a)', 'level', 'AO1-AO2', 5],
      ['Section C (b)', 'level', 'AO1-AO2', 5],
    ])
  })
})
