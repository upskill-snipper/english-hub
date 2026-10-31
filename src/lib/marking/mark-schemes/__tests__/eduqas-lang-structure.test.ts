import { describe, it, expect } from 'vitest'
import { MARK_SCHEMES } from '@/lib/marking/mark-schemes'
import type { AssessmentObjective, QuestionScheme } from '@/lib/marking/mark-schemes/types'
import { KNOWN_TOTAL_MISMATCHES, isSpecVerified } from '@/lib/marking/examiner/verification'
import { derivePack } from '@/lib/marking/examiner/packs/derive'
import { GUIDE as LANG1_GUIDE } from '@/data/mark-scheme-guides/eduqas-lang-comp1'
import { GUIDE as LANG2_GUIDE } from '@/data/mark-scheme-guides/eduqas-lang-comp2'
import type { MarkSchemeGuide } from '@/data/mark-scheme-guides/types'

/**
 * WJEC Eduqas GCSE English Language (C700QS) against its mark-scheme guides.
 *
 * Until 24 October 2026 both components declared 80 marks and their questions
 * added up to 75, a fault recorded on 18 September 2026 in
 * KNOWN_TOTAL_MISMATCHES and left open because the missing marks could not be
 * invented. The guides (src/data/mark-scheme-guides/eduqas-lang-comp1.ts and
 * eduqas-lang-comp2.ts), checked twice against Eduqas's Summer 2025 question
 * papers and marking schemes, showed that no question was short: each Section
 * A had a proofreading question the paper does not have and lacked questions
 * it does have (Component 1's Question 04; Component 2's 1.4 and 1.5), and
 * Component 2's two compulsory writing tasks were offered as a choice. The
 * founder approved the correction that day (document 30).
 *
 * The ids follow Eduqas's sample assessment materials, A1 to A5 and B1, and A1
 * to A6, B1 and B2, one for one with the live papers' numbering, which each
 * questionType carries. Component 1's A2 is kept because saved essays name it.
 * This file pins the figures, and the last block holds the scheme to the
 * guides themselves, so a change to either that the other does not share
 * fails here.
 */

const c1 = MARK_SCHEMES['eduqas-lang-comp1']!
const c2 = MARK_SCHEMES['eduqas-lang-comp2']!

function question(scheme: typeof c1, questionId: string): QuestionScheme {
  const q = scheme.questions.find((x) => x.id === questionId)
  if (!q) throw new Error(`${scheme.id} has no ${questionId}`)
  return q
}

function tariffs(scheme: typeof c1, questionId: string): [string, number][] {
  return question(scheme, questionId).assessmentObjectives.map((a) => [a.id, a.maxMarks])
}

function ranges(ao: AssessmentObjective): [number, number][] {
  return ao.bands.map((b) => [b.minMarks, b.maxMarks])
}

/** The live paper's number for a question, as its questionType carries it. */
function liveNumber(q: QuestionScheme): string | undefined {
  return /\(Question ([\d.]+)\)$/.exec(q.questionType)?.[1]
}

const ONE_TO_TEN: [number, number][] = [
  [1, 2],
  [3, 4],
  [5, 6],
  [7, 8],
  [9, 10],
]

describe('Eduqas English Language Component 1 (C700U10-1)', () => {
  it('is 80 marks in 1 hour 45 minutes, and its questions add up to it', () => {
    expect(c1.totalMarks).toBe(80)
    expect(c1.durationMinutes).toBe(105)
    expect(c1.questions.reduce((s, q) => s + q.totalMarks, 0)).toBe(80)
  })

  it('numbers its questions as Eduqas does, keeping A2, which saved essays name', () => {
    expect(c1.questions.map((q) => q.id)).toEqual(['A1', 'A2', 'A3', 'A4', 'A5', 'B1'])
    expect(c1.questions.map(liveNumber)).toEqual(['01', '02', '03', '04', '05', '11'])
  })

  it.each([
    ['A1', 5, [['AO1', 5]]],
    // Until 24 October 2026, AO1 3 + AO2 2: Eduqas's Question 02 is all AO2.
    ['A2', 5, [['AO2', 5]]],
    ['A3', 10, [['AO2', 10]]],
    // Question 04, language and structure. Until 24 October 2026 A4 was the
    // evaluation and the marker had nothing for Question 04.
    ['A4', 10, [['AO2', 10]]],
    // Question 05, the evaluation. Until 24 October 2026 A5 was a 5-mark
    // proofreading question the paper does not have.
    ['A5', 10, [['AO4', 10]]],
    [
      'B1',
      40,
      [
        ['AO5', 24],
        ['AO6', 16],
      ],
    ],
  ] as const)('%s is %i marks: %j', (questionId, total, expected) => {
    expect(tariffs(c1, questionId)).toEqual(expected)
    expect(question(c1, questionId).totalMarks).toBe(total)
  })

  it('marks Question 01 point by point, one band across its five marks', () => {
    const ao = question(c1, 'A1').assessmentObjectives[0]!
    expect(ao.bands.map((b) => [b.band, b.minMarks, b.maxMarks])).toEqual([['Points', 1, 5]])
    expect(question(c1, 'A1').examinerNotes).toMatch(/point by point/)
    // Eduqas credits what the lines suggest as well as what they state.
    expect(question(c1, 'A1').examinerNotes).toMatch(/suggest counts as well as one they state/)
  })

  it('marks Question 02 on five one-mark bands, and Questions 03 to 05 on 1-2 to 9-10', () => {
    expect(ranges(question(c1, 'A2').assessmentObjectives[0]!)).toEqual([
      [1, 1],
      [2, 2],
      [3, 3],
      [4, 4],
      [5, 5],
    ])
    for (const id of ['A3', 'A4', 'A5']) {
      expect(ranges(question(c1, id).assessmentObjectives[0]!), id).toEqual(ONE_TO_TEN)
    }
  })

  it('marks Question 11 on Eduqas’s two writing grids, AO5 1-4 to 20-24 and AO6 1-3 to 14-16', () => {
    const [ao5, ao6] = question(c1, 'B1').assessmentObjectives
    expect(ranges(ao5!)).toEqual([
      [1, 4],
      [5, 9],
      [10, 14],
      [15, 19],
      [20, 24],
    ])
    expect(ranges(ao6!)).toEqual([
      [1, 3],
      [4, 6],
      [7, 10],
      [11, 13],
      [14, 16],
    ])
  })

  it('asks for structure on Question 04 and not on Question 03', () => {
    expect(question(c1, 'A3').examinerNotes).toMatch(
      /assesses language\. Do not look for comment on structure/,
    )
    expect(question(c1, 'A4').examinerNotes).toMatch(/assesses language and structure together/)
  })

  it('holds writing that only describes below the top of the range on Question 11', () => {
    const b1 = question(c1, 'B1')
    expect(b1.taskDescription).not.toMatch(/descriptive/i)
    expect(b1.examinerNotes).toMatch(/should be a narrative/)
    expect(b1.examinerNotes).toMatch(
      /only describes, without telling a story, cannot reach the top/,
    )
  })
})

describe('Eduqas English Language Component 2 (C700U20-1)', () => {
  it('is 80 marks in 2 hours, and its questions add up to it', () => {
    expect(c2.totalMarks).toBe(80)
    expect(c2.durationMinutes).toBe(120)
    expect(c2.questions.reduce((s, q) => s + q.totalMarks, 0)).toBe(80)
  })

  it('numbers its questions as Eduqas does: A1 to A6 are 1.1 to 1.6, B1 and B2 are 2.1 and 2.2', () => {
    expect(c2.questions.map((q) => q.id)).toEqual(['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'B1', 'B2'])
    expect(c2.questions.map(liveNumber)).toEqual([
      '1.1',
      '1.2',
      '1.3',
      '1.4',
      '1.5',
      '1.6',
      '2.1',
      '2.2',
    ])
  })

  it.each([
    // Until 24 October 2026 the reading questions were A1 5 AO1, A2 5 (AO1 3 +
    // AO2 2), A3 10 AO2 on the 19th-century text, A4 10 AO3 and A5 5 AO6
    // proofreading: 35 marks where Eduqas sets 40.
    ['A1', 3, [['AO1', 3]]],
    ['A2', 10, [['AO2', 10]]],
    ['A3', 3, [['AO1', 3]]],
    ['A4', 10, [['AO4', 10]]],
    ['A5', 4, [['AO1', 4]]],
    ['A6', 10, [['AO3', 10]]],
    [
      'B1',
      20,
      [
        ['AO5', 12],
        ['AO6', 8],
      ],
    ],
    [
      'B2',
      20,
      [
        ['AO5', 12],
        ['AO6', 8],
      ],
    ],
  ] as const)('%s is %i marks: %j', (questionId, total, expected) => {
    expect(tariffs(c2, questionId)).toEqual(expected)
    expect(question(c2, questionId).totalMarks).toBe(total)
  })

  it('marks 1.1 and 1.3 point by point, one band across their three marks', () => {
    for (const id of ['A1', 'A3']) {
      const ao = question(c2, id).assessmentObjectives[0]!
      expect(
        ao.bands.map((b) => [b.band, b.minMarks, b.maxMarks]),
        id,
      ).toEqual([['Points', 1, 3]])
      expect(question(c2, id).examinerNotes, id).toMatch(/point by point/)
    }
  })

  it('marks 1.2, 1.4 and 1.6 on 1-2 to 9-10, and 1.5 on four one-mark bands', () => {
    for (const id of ['A2', 'A4', 'A6']) {
      expect(ranges(question(c2, id).assessmentObjectives[0]!), id).toEqual(ONE_TO_TEN)
    }
    expect(ranges(question(c2, 'A5').assessmentObjectives[0]!)).toEqual([
      [1, 1],
      [2, 2],
      [3, 3],
      [4, 4],
    ])
  })

  it('sets the language question on the 21st-century text and the evaluation on the 19th-century one', () => {
    // Until 24 October 2026 the 10-mark language question was on the
    // 19th-century text and there was no evaluation at all.
    expect(question(c2, 'A2').taskDescription).toMatch(/21st-century text/)
    expect(question(c2, 'A2').taskDescription).not.toMatch(/19th/)
    expect(question(c2, 'A4').taskDescription).toMatch(/19th-century text/)
  })

  it('holds a synthesis drawn from one text to Band 1', () => {
    expect(question(c2, 'A5').examinerNotes).toMatch(/uses only one text stays in Band 1, 1 mark/)
  })

  it('sets both writing tasks as compulsory, each on Eduqas’s grids, AO5 1-2 to 11-12 and AO6 1 to 8', () => {
    for (const id of ['B1', 'B2']) {
      const q = question(c2, id)
      expect(`${q.taskDescription} ${q.examinerNotes}`, id).toMatch(/compulsory/i)
      expect(q.taskDescription, id).not.toMatch(/choose one/i)
      const [ao5, ao6] = q.assessmentObjectives
      expect(ranges(ao5!), id).toEqual([
        [1, 2],
        [3, 4],
        [5, 7],
        [8, 10],
        [11, 12],
      ])
      expect(ranges(ao6!), id).toEqual([
        [1, 1],
        [2, 3],
        [4, 5],
        [6, 7],
        [8, 8],
      ])
    }
  })
})

describe('both components', () => {
  const both = [c1, c2]

  it('have no proofreading question, and no AO6 in Section A', () => {
    for (const s of both) {
      const words = s.questions.map((q) => `${q.questionType} ${q.taskDescription}`).join(' ')
      expect(words, s.id).not.toMatch(/proofread/i)
      const sectionA = s.questions.filter((q) => q.id.startsWith('A'))
      expect(
        sectionA.flatMap((q) => q.assessmentObjectives.map((a) => a.id)),
        s.id,
      ).not.toContain('AO6')
      expect(
        sectionA.reduce((n, q) => n + q.totalMarks, 0),
        `${s.id} Section A`,
      ).toBe(40)
    }
  })

  it('are no longer recorded as short, and say they are unverified', () => {
    for (const s of both) {
      expect(KNOWN_TOTAL_MISMATCHES[s.id], s.id).toBeUndefined()
      // The correction followed the guides; it was not a check by a person.
      expect(isSpecVerified(s.id), s.id).toBe(false)
    }
  })

  it('run every ladder contiguously from 1, with each share of its question stated', () => {
    // The local rescaler this file used until 24 October 2026 rounded both
    // edges of each band, and put one mark in two bands on A2 and A5.
    for (const s of both) {
      for (const q of s.questions) {
        for (const a of q.assessmentObjectives) {
          const r = ranges(a)
          expect(r[0]![0], `${s.id} ${q.id} ${a.id}`).toBe(1)
          expect(r[r.length - 1]![1], `${s.id} ${q.id} ${a.id}`).toBe(a.maxMarks)
          for (let i = 1; i < r.length; i++) {
            expect(r[i]![0], `${s.id} ${q.id} ${a.id}`).toBe(r[i - 1]![1] + 1)
          }
          expect(a.weighting, `${s.id} ${q.id} ${a.id}`).toBeCloseTo(a.maxMarks / q.totalMarks, 6)
        }
      }
    }
  })

  it('are read by the examiner tool as Eduqas marks them: counted, levelled or two writing grids', () => {
    const shape = (id: string) =>
      derivePack(MARK_SCHEMES[id]!).questions.map((q) =>
        q.kind === 'writing'
          ? [q.id, q.kind, q.grids.map((g) => g.id)]
          : q.kind === 'level'
            ? [q.id, q.kind, q.grid.levels.length]
            : [q.id, q.kind],
      )
    expect(shape('eduqas-lang-comp1')).toEqual([
      ['A1', 'count'],
      ['A2', 'level', 5],
      ['A3', 'level', 5],
      ['A4', 'level', 5],
      ['A5', 'level', 5],
      ['B1', 'writing', ['AO5', 'AO6']],
    ])
    expect(shape('eduqas-lang-comp2')).toEqual([
      ['A1', 'count'],
      ['A2', 'level', 5],
      ['A3', 'count'],
      ['A4', 'level', 5],
      ['A5', 'level', 4],
      ['A6', 'level', 5],
      ['B1', 'writing', ['AO5', 'AO6']],
      ['B2', 'writing', ['AO5', 'AO6']],
    ])
  })
})

// ─── The marker held to its guide ───────────────────────────────────────────

/** "1-5" or "4" as a range. */
function span(marks: string): [number, number] {
  const [lo, hi] = marks.split('-').map(Number)
  return [lo!, hi ?? lo!]
}

/**
 * One objective's range in a guide level. A writing level reads
 * "AO5 1-4, AO6 1-3"; a reading level is a bare "1-2".
 */
function rangeIn(marks: string, aoId: string): [number, number] {
  const parts = marks.split(', ')
  if (parts.length === 1 && !/^AO\d /.test(marks)) return span(marks)
  const part = parts.find((p) => p.startsWith(`${aoId} `))
  if (!part) throw new Error(`no ${aoId} in "${marks}"`)
  return span(part.slice(aoId.length + 1))
}

function holdToGuide(guide: MarkSchemeGuide) {
  const scheme = MARK_SCHEMES[guide.schemeId]!
  expect(scheme.totalMarks, 'paper total').toBe(guide.totalMarks)
  expect(scheme.durationMinutes, 'duration').toBe(guide.durationMinutes)
  const guided = guide.sections.flatMap((s) => s.questions)
  // Every question the marker has is one the paper has, and the reverse: each
  // guide question points at the marker question that matches it.
  expect(scheme.questions.map((q) => q.id).sort()).toEqual(
    guided.map((g) => g.markerQuestionId).sort(),
  )
  for (const s of guide.sections) {
    const letter = s.name.match(/^Section ([A-Z])/)![1]
    const marker = scheme.questions.filter((q) => q.id.startsWith(letter!))
    expect(
      marker.reduce((n, q) => n + q.totalMarks, 0),
      s.name,
    ).toBe(s.marks)
  }
  for (const g of guided) {
    const q = scheme.questions.find((x) => x.id === g.markerQuestionId)!
    expect(q.totalMarks, `${g.label}: marks`).toBe(g.marks)
    expect(
      q.assessmentObjectives.map((a) => [a.id, a.maxMarks]),
      `${g.label}: objectives`,
    ).toEqual(g.objectives.map((o) => [o.id, o.marks]))
    for (const a of q.assessmentObjectives) {
      if (g.levels.length === 0) {
        // Marked point by point: no levels, one band across the tariff.
        expect(ranges(a), `${g.label} ${a.id}: points`).toEqual([[1, a.maxMarks]])
        continue
      }
      expect(ranges(a), `${g.label} ${a.id}: level ranges`).toEqual(
        g.levels.map((l) => rangeIn(l.marks, a.id)),
      )
      expect(
        a.bands.map((b) => b.band),
        `${g.label} ${a.id}: level names`,
      ).toEqual(g.levels.map((l) => l.name))
    }
  }
}

describe('the marker agrees with its guide', () => {
  it.each([
    ['eduqas-lang-comp1', LANG1_GUIDE],
    ['eduqas-lang-comp2', LANG2_GUIDE],
  ] as const)(
    '%s: every question, objective, grid and level range, and the paper total',
    (_id, guide) => {
      holdToGuide(guide)
    },
  )
})
