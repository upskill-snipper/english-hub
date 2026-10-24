import { describe, it, expect } from 'vitest'
import { MARK_SCHEMES } from '@/lib/marking/mark-schemes'
import type { AssessmentObjective, QuestionScheme } from '@/lib/marking/mark-schemes/types'
import { derivePack } from '@/lib/marking/examiner/packs/derive'
import { GUIDE as LANG_GUIDE } from '@/data/mark-scheme-guides/edexcel-igcse-lang-paper1'
import { GUIDE as LIT_GUIDE } from '@/data/mark-scheme-guides/edexcel-igcse-lit'
import type { GuideQuestion, MarkSchemeGuide } from '@/data/mark-scheme-guides/types'

/**
 * Pearson Edexcel International GCSE English Language A (4EA1) Paper 1 and
 * English Literature (4ET1) Paper 1: the AI marker held to the guides that
 * were checked against Pearson's own documents (24 October 2026).
 *
 * WHAT WAS WRONG. Literature Sections B and C were each two objectives on
 * ladders of the marker's own, scored separately and added (B: AO2 15 + AO3
 * 15; C: AO1 20 + AO4 20), where Pearson marks each section on one grid (B:
 * Level 1 1-6 to Level 5 25-30; C: 1-8 to 33-40). With two ladders nothing
 * held an answer on only one poem to the 12 marks at the top of Pearson's
 * Level 2. Language Questions 1 to 3 were scored on two bands of the marker's
 * own where Pearson counts points; Question 3 capped an answer that only
 * selects quotations at 1 mark, which neither Pearson's sample assessment
 * materials nor its 2024 and 2025 mark schemes do; and Question 6 offered a
 * "report", a form Pearson no longer sets.
 *
 * HOW THIS HOLDS IT. Each guide was written and then checked by a second
 * reader against Pearson's specification, sample assessment materials and
 * June 2025 mark scheme, which its docblock names. The first half of this file
 * reads every question, objective split and level range from the guide and
 * requires the marker's to be the same. The second half pins Pearson's figures
 * themselves, so a change has to disagree with a document rather than with an
 * opinion, and an edit that moved the guide and the marker together in the
 * same wrong direction still fails. Nothing here can read Pearson's documents:
 * when Pearson changes a paper, the guide is re-checked first and this file
 * follows it.
 */

const PAPERS: readonly (readonly [string, MarkSchemeGuide])[] = [
  ['edexcel-igcse-lang-paper1', LANG_GUIDE],
  ['edexcel-igcse-lit', LIT_GUIDE],
]

/**
 * The guide names a combined grid's objectives 'AO2 and AO3'; the marker's id
 * for that grid is 'AO2+AO3' (an id with spaces and lower case would never
 * match, because feedback-generator.ts upper-cases what the model returns).
 */
const markerObjectiveId = (guideId: string) => guideId.split(' and ').join('+')

/**
 * A guide question's levels, grid by grid. A question with two grids names its
 * levels 'AO4: Level 1' and so on; a question with one grid names them
 * 'Level 1', and that grid is keyed ''.
 */
function guideGrids(q: GuideQuestion): Map<string, [string, string][]> {
  const grids = new Map<string, [string, string][]>()
  for (const l of q.levels) {
    const m = /^(AO\d): (Level \d)$/.exec(l.name)
    const grid = m ? m[1]! : ''
    const name = m ? m[2]! : l.name
    grids.set(grid, [...(grids.get(grid) ?? []), [name, l.marks]])
  }
  return grids
}

/** An objective's bands as the guide writes levels: ['Level 1', '1-4']. */
const bandsOf = (ao: AssessmentObjective): [string, string][] =>
  ao.bands.map((b) => [b.band, `${b.minMarks}-${b.maxMarks}`])

/** An objective's ranges, lowest first, for the pinned figures. */
const ranges = (ao: AssessmentObjective | undefined): [number, number][] =>
  (ao?.bands ?? []).map((b) => [b.minMarks, b.maxMarks])

/** Every guide question with the marker question it names. */
function pairs(schemeId: string, guide: MarkSchemeGuide) {
  const scheme = MARK_SCHEMES[schemeId]!
  return guide.sections
    .flatMap((s) => s.questions)
    .map((g) => ({ g, q: scheme.questions.find((x) => x.id === g.markerQuestionId) }))
}

// ─── The marker against the guide ───────────────────────────────────────────

describe.each(PAPERS)('%s: the marker is the paper its guide describes', (schemeId, guide) => {
  const scheme = MARK_SCHEMES[schemeId]

  it('is registered under the id the guide names', () => {
    expect(scheme, `${schemeId} is not a registered scheme`).toBeDefined()
    expect(guide.schemeId).toBe(schemeId)
  })

  it('has the guide total and duration, and its questions add up to the total', () => {
    expect(scheme!.totalMarks).toBe(guide.totalMarks)
    expect(scheme!.durationMinutes).toBe(guide.durationMinutes)
    expect(scheme!.questions.reduce((n, q) => n + q.totalMarks, 0)).toBe(guide.totalMarks)
  })

  it('has one question for each question in the guide, and no other', () => {
    // A question the paper does not have, or one it has that the marker
    // lacks, shows up here as a mismatch in either direction.
    const named = pairs(schemeId, guide).map(({ g }) => g.markerQuestionId)
    expect(named, 'every guide question names a marker question').not.toContain(null)
    expect([...named].sort()).toEqual(scheme!.questions.map((q) => q.id).sort())
  })

  it.each(pairs(schemeId, guide).map(({ g, q }) => [g.label, g, q] as const))(
    '%s: the guide marks, objective split and levels',
    (_label, g, q) => {
      const question = q as QuestionScheme
      expect(question, `${g.markerQuestionId} is not in the marker`).toBeDefined()
      expect(question.totalMarks).toBe(g.marks)

      expect(question.assessmentObjectives.map((a) => [a.id, a.maxMarks])).toEqual(
        g.objectives.map((o) => [markerObjectiveId(o.id), o.marks]),
      )
      for (const a of question.assessmentObjectives) {
        expect(a.weighting, `${a.id} weighting is its share of the question`).toBeCloseTo(
          a.maxMarks / question.totalMarks,
        )
      }

      const grids = guideGrids(g)
      if (grids.size === 0) {
        // Point-marked in the guide: one mark per valid point, no levels. One
        // band covers the whole tariff, and it is not called a level.
        expect(question.assessmentObjectives).toHaveLength(1)
        expect(bandsOf(question.assessmentObjectives[0]!)).toEqual([
          ['Point-marked', `1-${g.marks}`],
        ])
        return
      }
      for (const a of question.assessmentObjectives) {
        const expected = grids.get(grids.has('') ? '' : a.id)
        expect(expected, `the guide has no levels for ${a.id}`).toBeDefined()
        expect(bandsOf(a), `${g.label} ${a.id}`).toEqual(expected)
      }
    },
  )

  it('uses objective ids the engine can match, each opening its own label', () => {
    // Both prompt builders show the model the label, not the id, and
    // feedback-generator.ts upper-cases the id the model returns. So an id must
    // be upper case and must be the first thing in its label.
    for (const q of scheme!.questions) {
      for (const a of q.assessmentObjectives) {
        expect(a.id, `${q.id} ${a.id}`).toBe(a.id.toUpperCase())
        expect(a.label.startsWith(`${a.id} - `), `${q.id}: "${a.label}"`).toBe(true)
      }
    }
  })
})

// ─── Pearson's figures, pinned ──────────────────────────────────────────────

describe('International GCSE English Language A, Paper 1 (4EA1/01)', () => {
  const scheme = MARK_SCHEMES['edexcel-igcse-lang-paper1']!
  const question = (id: string) => scheme.questions.find((q) => q.id === id)
  const objective = (id: string, ao: string) =>
    question(id)?.assessmentObjectives.find((a) => a.id === ao)

  it('is 90 marks in 2 hours 15 minutes, with the questions and tariffs Pearson prints', () => {
    expect(scheme.totalMarks).toBe(90)
    expect(scheme.durationMinutes).toBe(135)
    expect(scheme.questions.map((q) => [q.id, q.totalMarks])).toEqual([
      ['Q1', 2],
      ['Q2', 4],
      ['Q3', 5],
      ['Q4', 12],
      ['Q5', 22],
      ['Q6', 45],
    ])
  })

  it('keeps Q4 and Q6, which saved essays name', () => {
    expect(question('Q4')).toBeDefined()
    expect(question('Q6')).toBeDefined()
  })

  it("has Pearson's level ranges on every levelled grid", () => {
    expect(ranges(objective('Q4', 'AO2'))).toEqual([
      [1, 2],
      [3, 4],
      [5, 7],
      [8, 10],
      [11, 12],
    ])
    expect(ranges(objective('Q5', 'AO3'))).toEqual([
      [1, 4],
      [5, 8],
      [9, 13],
      [14, 18],
      [19, 22],
    ])
    expect(ranges(objective('Q6', 'AO4'))).toEqual([
      [1, 5],
      [6, 11],
      [12, 17],
      [18, 22],
      [23, 27],
    ])
    expect(ranges(objective('Q6', 'AO5'))).toEqual([
      [1, 3],
      [4, 7],
      [8, 11],
      [12, 15],
      [16, 18],
    ])
  })

  it.each([
    ['Q1', 2],
    ['Q2', 4],
    ['Q3', 5],
  ])('marks %s one mark per valid point, up to %i, with no levels', (id, max) => {
    // Was two bands of the marker's own, 'Partial' and 'Secure'.
    const q = question(id)!
    expect(q.assessmentObjectives.map((a) => [a.id, a.maxMarks])).toEqual([['AO1', max]])
    expect(ranges(q.assessmentObjectives[0])).toEqual([[1, max]])
    expect(q.assessmentObjectives[0]!.bands.map((b) => b.band)).not.toContain('Partial')
    expect(q.examinerNotes).toMatch(/point-marked, no levels/i)
    expect(q.examinerNotes).toMatch(/one mark for each/i)
    expect(q.examinerNotes).toContain(`up to ${max}`)
  })

  it('does not cap a Q3 answer that only selects quotations at 1 mark', () => {
    // Not in Pearson's sample assessment materials (Issue 4) or the June 2024,
    // November 2024 and June 2025 mark schemes. A quotation with no
    // explanation earns nothing for that point; the rest still count.
    const notes = question('Q3')!.examinerNotes ?? ''
    expect(notes).not.toMatch(/\bcap\b|maximum of 1\b|selection only/i)
    expect(notes).toMatch(/no explanation earns nothing for that point/i)
    expect(notes).toMatch(/explains or describes/i)
    expect(question('Q3')!.taskDescription).toMatch(/explain or describe/i)
  })

  it('keeps the Q5 limit on an answer about one text, at the top of Level 2', () => {
    const q5 = question('Q5')!
    expect(q5.examinerNotes).toMatch(/only ONE of the two texts/i)
    expect(q5.examinerNotes).toContain('8 marks')
    expect(q5.assessmentObjectives[0]!.bands.find((b) => b.band === 'Level 2')?.maxMarks).toBe(8)
  })

  it('gives the Q6 task the six forms Pearson sets, and no report', () => {
    const task = question('Q6')!.taskDescription
    for (const form of ['article', 'speech', 'letter', 'guide', 'review', 'leaflet']) {
      expect(task, form).toMatch(new RegExp(`\\b${form}\\b`, 'i'))
    }
    expect(task).not.toMatch(/\breport\b/i)
  })

  it('stays points-counted for Q1 to Q3 in the examiner tool', () => {
    // derive.ts treats an objective with three or more bands as a level grid.
    // One band keeps the point-marked questions counted, not levelled.
    const kinds = derivePack(scheme).questions.map((q) => [q.id, q.kind])
    expect(kinds).toEqual([
      ['Q1', 'count'],
      ['Q2', 'count'],
      ['Q3', 'count'],
      ['Q4', 'level'],
      ['Q5', 'level'],
      ['Q6', 'writing'],
    ])
  })
})

describe('International GCSE English Literature, Paper 1 (4ET1/01)', () => {
  const scheme = MARK_SCHEMES['edexcel-igcse-lit']!
  const section = (id: string) => scheme.questions.find((q) => q.id === id)
  const grid = (id: string) => section(id)?.assessmentObjectives[0]

  it('is 90 marks in 2 hours, in three sections of 20, 30 and 40', () => {
    expect(scheme.totalMarks).toBe(90)
    expect(scheme.durationMinutes).toBe(120)
    expect(scheme.questions.map((q) => [q.id, q.totalMarks])).toEqual([
      ['Section A', 20],
      ['Section B', 30],
      ['Section C', 40],
    ])
  })

  it('marks each section on one grid, as Pearson does', () => {
    // Sections B and C were AO2 15 + AO3 15 and AO1 20 + AO4 20, scored
    // separately. Pearson gives one mark per section from one grid.
    expect(
      scheme.questions.map((q) => q.assessmentObjectives.map((a) => [a.id, a.maxMarks])),
    ).toEqual([[['AO2', 20]], [['AO2+AO3', 30]], [['AO1+AO4', 40]]])
    for (const q of scheme.questions) expect(q.assessmentObjectives[0]!.weighting).toBe(1)
  })

  it("has Pearson's level ranges on each grid", () => {
    expect(ranges(grid('Section A'))).toEqual([
      [1, 4],
      [5, 8],
      [9, 12],
      [13, 16],
      [17, 20],
    ])
    expect(ranges(grid('Section B'))).toEqual([
      [1, 6],
      [7, 12],
      [13, 18],
      [19, 24],
      [25, 30],
    ])
    expect(ranges(grid('Section C'))).toEqual([
      [1, 8],
      [9, 16],
      [17, 24],
      [25, 32],
      [33, 40],
    ])
    for (const id of ['Section A', 'Section B', 'Section C']) {
      expect(grid(id)!.bands.map((b) => b.band)).toEqual([
        'Level 1',
        'Level 2',
        'Level 3',
        'Level 4',
        'Level 5',
      ])
    }
  })

  it('holds an answer on only one poem to the top of Level 2, 12 marks', () => {
    // Nothing in the old data could: there was no 30-mark Level 2 to stop at.
    const notes = section('Section B')!.examinerNotes ?? ''
    expect(notes).toMatch(/only one poem cannot go above the top of Level 2 \(12 marks\)/i)
    expect(grid('Section B')!.bands.find((b) => b.band === 'Level 2')?.maxMarks).toBe(12)
  })

  it('describes the Section B choice as the papers set it, with every poem printed', () => {
    const b = section('Section B')!
    expect(b.taskDescription).toMatch(/one question names both poems and the other names one/i)
    expect(b.taskDescription).toMatch(/sample paper and recent papers/i)
    expect(b.examinerNotes).toMatch(/Poetry Booklet/)
  })

  it('does not grade subject terminology on the Section A and B grids', () => {
    // Pearson's grids for these sections do not mention terminology; the old
    // bands graded it at every level, in the wording of the England GCSE.
    for (const id of ['Section A', 'Section B']) {
      for (const b of grid(id)!.bands) {
        expect(`${b.descriptor} ${b.indicators.join(' ')}`, `${id} ${b.band}`).not.toMatch(
          /terminology/i,
        )
      }
    }
  })

  it('describes AO1 as 4ET1 does, and does not demand quotations in a closed-book essay', () => {
    const c = grid('Section C')!
    expect(c.description).toMatch(/close knowledge/i)
    expect(c.description).toMatch(/critical style/i)
    expect(c.description).toMatch(/personal/i)
    expect(c.label).not.toMatch(/Read, understand and respond/i)
    for (const text of [c.description, ...c.bands.map((b) => b.descriptor)]) {
      expect(text).not.toMatch(/quotation/i)
    }
    expect(section('Section C')!.examinerNotes).toMatch(/quotations are not required/i)
  })

  it('says on every section that spelling, punctuation and grammar are not marked', () => {
    for (const q of scheme.questions) {
      expect(q.examinerNotes, q.id).toMatch(/spelling, punctuation and grammar are not marked/i)
    }
  })

  it("links to Pearson's live qualification page", () => {
    expect(scheme.sourceUrl).toBe(
      'https://qualifications.pearson.com/en/qualifications/edexcel-international-gcses/international-gcse-english-literature-2016.html',
    )
  })

  it('keeps Section A, Section B and Section C, which saved essays name', () => {
    for (const id of ['Section A', 'Section B', 'Section C']) expect(section(id)).toBeDefined()
  })

  it('is one levelled grid per section in the examiner tool', () => {
    // Sections B and C were derived as two grids levelled separately and
    // summed ('writing'); one grid each is a levelled question.
    expect(derivePack(scheme).questions.map((q) => [q.id, q.kind])).toEqual([
      ['Section A', 'level'],
      ['Section B', 'level'],
      ['Section C', 'level'],
    ])
  })
})
