import { describe, it, expect } from 'vitest'
import { MARK_SCHEMES } from '@/lib/marking/mark-schemes'
import type {
  AssessmentObjective,
  MarkScheme,
  QuestionScheme,
} from '@/lib/marking/mark-schemes/types'
import { guideForScheme } from '@/data/mark-scheme-guides'
import type { GuideQuestion } from '@/data/mark-scheme-guides/types'

/**
 * Edexcel 1EN0 and 1ET0 against Pearson's own breakdown of assessment
 * objectives by component, and, since 24 October 2026, against the guide to
 * each paper (src/data/mark-scheme-guides/edexcel-*.ts), which two agents
 * checked that day against Pearson's Summer 2025 mark schemes.
 *
 * Both files used to be AQA's papers with Edexcel's totals written on them.
 * Language Paper 1 had 4/8/8/20 questions where Pearson's are 1/2/6/15;
 * Literature invented an "AO4 - Comparison" worth 16 marks while the same file,
 * forty lines away, defined AO4 correctly as spelling, punctuation and grammar
 * (worth 8, and assessed once in the whole qualification).
 *
 * The first tests are built around the QUALIFICATION AO TOTALS: any single
 * tariff can be typed wrongly and still look plausible; the totals only
 * reconcile if the whole structure is right.
 *
 * THE GUIDES FOUND MORE (24 October 2026), and 'each paper follows its guide'
 * below holds the corrections. The questions and marks were right, but: the
 * Language writing grids' level ranges were an equal split of the marks, not
 * Pearson's (AO5 Level 1 1-5 where Pearson has 1-4; AO6 7-10 where Pearson has
 * 8-10); Question 7(a) was marked a point at a time where Pearson has three
 * levels; Question 7(b)'s ranges were wrong; and Literature gave each objective
 * its own ladder where Pearson marks the whole answer on ONE grid. The
 * contiguity tests passed throughout, because every one of those ladders was
 * contiguous. Only comparing the ranges themselves with the board's finds it.
 */

const lang1 = MARK_SCHEMES['edexcel-lang-paper1']!
const lang2 = MARK_SCHEMES['edexcel-lang-paper2']!
const lit1 = MARK_SCHEMES['edexcel-lit-paper1']!
const lit2 = MARK_SCHEMES['edexcel-lit-paper2']!

/**
 * The marks of each objective an entry covers. A plain entry ('AO2') is its
 * own marks. A combined grid ('AO1+AO3', one grid for two objectives, as
 * Pearson marks Literature) states each objective's share in its description,
 * "AO1 (15 marks)", which is what the model is told; a share that is missing
 * or does not add up to the grid's marks fails here.
 */
function split(ao: AssessmentObjective): Record<string, number> {
  const parts = ao.id.split('+')
  if (parts.length === 1) return { [ao.id]: ao.maxMarks }
  const out: Record<string, number> = {}
  for (const part of parts) {
    const m = new RegExp(`\\b${part} \\((\\d+) marks\\)`).exec(ao.description)
    if (!m) throw new Error(`${ao.id}: the description does not give ${part}'s marks`)
    out[part] = Number(m[1])
  }
  const sum = Object.values(out).reduce((a, b) => a + b, 0)
  if (sum !== ao.maxMarks) throw new Error(`${ao.id}: its parts sum to ${sum}, not ${ao.maxMarks}`)
  return out
}

/** Marks per assessment objective across a set of papers. */
function aoTotals(...papers: MarkScheme[]): Record<string, number> {
  const out: Record<string, number> = {}
  for (const p of papers) {
    for (const q of p.questions) {
      for (const ao of q.assessmentObjectives) {
        for (const [id, marks] of Object.entries(split(ao))) out[id] = (out[id] ?? 0) + marks
      }
    }
  }
  return out
}

/** Tariffs in paper order, for comparison with the question paper itself. */
function tariffs(p: MarkScheme): number[] {
  return p.questions.map((q) => q.totalMarks)
}

function question(p: MarkScheme, id: string): QuestionScheme {
  const q = p.questions.find((x) => x.id === id)
  if (!q) throw new Error(`${p.id} has no ${id}`)
  return q
}

// ─── English Language 1EN0 ──────────────────────────────────────────────

describe('Edexcel GCSE English Language (1EN0)', () => {
  it('has Pearson question tariffs on Paper 1, not AQA ones', () => {
    // Was 4, 8, 8, 20, 24. Pearson: Q1 1, Q2 2, Q3 6, Q4 15, then a choice of
    // one 40-mark writing task. The product's own /resources page for this
    // paper already said 1, 2, 6, 15.
    expect(tariffs(lang1)).toEqual([1, 2, 6, 15, 40])
    expect(lang1.totalMarks).toBe(64)
  })

  it('has Pearson question tariffs on Paper 2', () => {
    // Was 4, 8, 12, 16, 28, 28 - including two 28-mark writing tasks when a
    // candidate answers only one.
    expect(tariffs(lang2)).toEqual([2, 2, 15, 1, 1, 15, 6, 14, 40])
    expect(lang2.totalMarks).toBe(96)
  })

  it('splits Paper 2 as 56 reading and 40 writing, not the reverse', () => {
    const writing = lang2.questions.filter((q) =>
      q.assessmentObjectives.some((ao) => ao.id === 'AO5'),
    )
    const writingMarks = writing.reduce((a, q) => a + q.totalMarks, 0)
    expect(writingMarks).toBe(40)
    expect(lang2.totalMarks - writingMarks).toBe(56)
  })

  it("reconciles against the specification's AO breakdown table", () => {
    // AO1 15, AO2 21, AO3 14, AO4 30, AO5 48, AO6 32 = 160.
    expect(aoTotals(lang1, lang2)).toEqual({
      AO1: 15,
      AO2: 21,
      AO3: 14,
      AO4: 30,
      AO5: 48,
      AO6: 32,
    })
  })

  it('assesses AO3 on Paper 2 only, where the two texts are compared', () => {
    expect(aoTotals(lang1).AO3).toBeUndefined()
    const q7b = question(lang2, 'Q7b')
    expect(q7b.assessmentObjectives.map((a) => a.id)).toEqual(['AO3'])
    expect(q7b.totalMarks).toBe(14)
  })

  it('gives each writing task 24 for AO5 and 16 for AO6', () => {
    for (const paper of [lang1, lang2]) {
      const writing = paper.questions.find((q) =>
        q.assessmentObjectives.some((ao) => ao.id === 'AO5'),
      )!
      const byId = Object.fromEntries(writing.assessmentObjectives.map((a) => [a.id, a.maxMarks]))
      expect(byId).toEqual({ AO5: 24, AO6: 16 })
    }
  })
})

// ─── English Literature 1ET0 ────────────────────────────────────────────

describe('Edexcel GCSE English Literature (1ET0)', () => {
  it('no longer invents a 16-mark comparison objective', () => {
    // The file defined "AO4 - Comparison" worth 16 on Paper 2 Section B while
    // also defining AO4 as spelling, punctuation and grammar. Comparison is
    // AO3, and AO4 is worth 8 in the entire qualification.
    for (const paper of [lit1, lit2]) {
      for (const q of paper.questions) {
        for (const ao of q.assessmentObjectives) {
          if (ao.id !== 'AO4') continue
          expect(ao.label.toLowerCase(), `${paper.id} ${q.id}`).not.toContain('comparison')
          expect(ao.label.toLowerCase()).toContain('spelling')
        }
      }
    }
  })

  it('assesses AO4 exactly once, on Paper 1 Section B, for 8 marks, on its own grid', () => {
    expect(aoTotals(lit1, lit2).AO4).toBe(8)
    const withAo4 = [...lit1.questions, ...lit2.questions].filter((q) =>
      q.assessmentObjectives.some((ao) => Object.keys(split(ao)).includes('AO4')),
    )
    expect(withAo4.map((q) => q.id)).toEqual(['Section B'])
    expect(withAo4[0]!.assessmentObjectives.find((ao) => ao.id === 'AO4')?.maxMarks).toBe(8)
  })

  it("reconciles against the specification's AO breakdown table", () => {
    // AO1 59, AO2 67, AO3 26, AO4 8 = 160, counted through each combined
    // grid's stated split (AO1+AO3 on Paper 1 part (b) is AO1 15 and AO3 5).
    expect(aoTotals(lit1, lit2)).toEqual({ AO1: 59, AO2: 67, AO3: 26, AO4: 8 })
  })

  it('marks each extract question on AO2 alone', () => {
    // Both extract questions used to carry AO1, AO2 and AO3 together.
    for (const paper of [lit1, lit2]) {
      const a = question(paper, 'Section A (a)')
      expect(
        a.assessmentObjectives.map((x) => x.id),
        paper.id,
      ).toEqual(['AO2'])
      expect(a.totalMarks).toBe(20)
    }
  })

  it('does not assess AO3 anywhere in Paper 2 Section A', () => {
    const sectionA = lit2.questions.filter((q) => q.id.startsWith('Section A'))
    const ids = sectionA.flatMap((q) =>
      q.assessmentObjectives.flatMap((a) => Object.keys(split(a))),
    )
    expect(ids).not.toContain('AO3')
  })

  it('does not assess AO2 in Paper 1 Section B', () => {
    // Was ['AO1', 'AO3', 'AO4'], one ladder each. Since 24 October 2026 AO1
    // and AO3 are one grid, as Pearson marks them, and AO4 keeps its own.
    const b = question(lit1, 'Section B')
    expect(b.assessmentObjectives.map((a) => a.id)).toEqual(['AO1+AO3', 'AO4'])
    expect(b.assessmentObjectives.flatMap((a) => Object.keys(split(a)))).not.toContain('AO2')
  })
})

// ─── Invariants that hold however the papers are shaped ─────────────────

describe('both Edexcel qualifications', () => {
  it.each([
    ['language', lang1, lang2],
    ['literature', lit1, lit2],
  ] as const)('%s is worth 160 marks across its two papers', (_name, a, b) => {
    expect(a.totalMarks + b.totalMarks).toBe(160)
  })

  it.each([lang1, lang2, lit1, lit2])('$id questions sum to the paper total', (paper) => {
    const sum = paper.questions.reduce((a, q) => a + q.totalMarks, 0)
    expect(sum).toBe(paper.totalMarks)
  })

  it.each([lang1, lang2, lit1, lit2])('$id objectives sum to each question total', (paper) => {
    for (const q of paper.questions) {
      const sum = q.assessmentObjectives.reduce((a, ao) => a + ao.maxMarks, 0)
      expect(sum, `${paper.id} ${q.id}`).toBe(q.totalMarks)
    }
  })

  it.each([lang1, lang2, lit1, lit2])('$id has contiguous bands reaching each maximum', (paper) => {
    for (const q of paper.questions) {
      for (const ao of q.assessmentObjectives) {
        const bands = [...ao.bands].sort((x, y) => x.minMarks - y.minMarks)
        expect(bands[0]!.minMarks, `${paper.id} ${q.id} ${ao.id} starts above 1`).toBe(1)
        expect(
          bands[bands.length - 1]!.maxMarks,
          `${paper.id} ${q.id} ${ao.id} cannot award its top mark`,
        ).toBe(ao.maxMarks)
        for (let i = 1; i < bands.length; i++) {
          expect(bands[i]!.minMarks, `${paper.id} ${q.id} ${ao.id} band ${i + 1}`).toBe(
            bands[i - 1]!.maxMarks + 1,
          )
        }
      }
    }
  })

  it.each([lang1, lang2, lit1, lit2])(
    '$id gives each objective its share of the question',
    (paper) => {
      // Was its share of the PAPER, so the prompt called AO5 "38%" of a writing
      // task in which it carries 24 of the 40 marks.
      for (const q of paper.questions) {
        for (const ao of q.assessmentObjectives) {
          expect(ao.weighting, `${paper.id} ${q.id} ${ao.id}`).toBeCloseTo(
            ao.maxMarks / q.totalMarks,
          )
        }
      }
    },
  )
})

/**
 * Pearson's five levels, not the site's six (9 October 2026), and one grid per
 * answer, not one ladder per objective (24 October 2026).
 *
 * Until 9 October every Literature ladder had six levels topping out at 16, so
 * a 20-mark question had a "Level 6" of 17-20, a level Pearson does not have.
 * Until 24 October, part (b) on Paper 1 was AO1 /15 plus AO3 /5, Section B
 * AO1 /16 plus AO3 /16, and the two poetry parts AO2 /15 plus AO3 /5 and AO1 /8
 * plus AO2 /12, each on a ladder of its own; Pearson places the whole answer in
 * one level of one grid (1ET0/01 and 1ET0/02 mark schemes, Summer 2025).
 */
describe('Edexcel Literature levels are Pearson’s', () => {
  const FIVE_20 = [
    [1, 4],
    [5, 8],
    [9, 12],
    [13, 16],
    [17, 20],
  ]

  function ranges(id: string, questionId: string, aoId: string): number[][] {
    const q = question(MARK_SCHEMES[id]!, questionId)
    const ao = q.assessmentObjectives.find((a) => a.id === aoId)
    if (!ao) throw new Error(`${id} ${questionId} has no ${aoId}`)
    return [...ao.bands]
      .sort((x, y) => x.minMarks - y.minMarks)
      .map((b) => [b.minMarks, b.maxMarks])
  }

  it.each([
    ['edexcel-lit-paper1', 'Section A (a)', 'AO2', FIVE_20],
    ['edexcel-lit-paper1', 'Section A (b)', 'AO1+AO3', FIVE_20],
    [
      'edexcel-lit-paper1',
      'Section B',
      'AO1+AO3',
      [
        [1, 6],
        [7, 12],
        [13, 19],
        [20, 26],
        [27, 32],
      ],
    ],
    [
      'edexcel-lit-paper1',
      'Section B',
      'AO4',
      [
        [1, 2],
        [3, 5],
        [6, 8],
      ],
    ],
    ['edexcel-lit-paper2', 'Section A (a)', 'AO2', FIVE_20],
    ['edexcel-lit-paper2', 'Section A (b)', 'AO1', FIVE_20],
    ['edexcel-lit-paper2', 'Section B Part 1', 'AO2+AO3', FIVE_20],
    ['edexcel-lit-paper2', 'Section B Part 2', 'AO1+AO2', FIVE_20],
  ] as const)('%s %s %s runs %j', (id, questionId, aoId, expected) => {
    expect(ranges(id, questionId, aoId)).toEqual(expected)
  })

  it('marks each answer on one grid, except Section B, whose AO4 Pearson marks apart', () => {
    for (const paper of [lit1, lit2]) {
      for (const q of paper.questions) {
        const want = paper === lit1 && q.id === 'Section B' ? 2 : 1
        expect(q.assessmentObjectives.length, `${paper.id} ${q.id}`).toBe(want)
      }
    }
  })

  it('names no level Pearson does not have', () => {
    const names = [lit1, lit2].flatMap((s) =>
      s.questions.flatMap((q) => q.assessmentObjectives.flatMap((a) => a.bands.map((b) => b.band))),
    )
    expect(names.filter((n) => !/^Level [1-5]$/.test(n))).toEqual([])
  })
})

// ─── Each paper follows its guide ───────────────────────────────────────

/** "1-4" or "3" as [min, max]. */
function range(marks: string): [number, number] {
  const m = /^(\d+)(?:-(\d+))?$/.exec(marks)
  if (!m) throw new Error(`"${marks}" is not a mark range`)
  return [Number(m[1]), Number(m[2] ?? m[1])]
}

interface GuideGrid {
  /** The objectives the grid covers, joined as the marker's id is. */
  id: string
  marks: number
  split: Record<string, number>
  levels: { band: string; range: [number, number] }[]
}

/**
 * The grids a guide question describes. Its levels are named "Level 1" when
 * one grid covers every objective the question carries, or "AO5: Level 1" and
 * "AO1 and AO3: Level 1" when the question has more than one grid; the
 * objectives a grid covers are the ones its prefix names.
 */
function guideGrids(q: GuideQuestion): GuideGrid[] {
  const byPrefix = new Map<string, GuideGrid['levels']>()
  for (const l of q.levels) {
    const m = /^(?:(.*): )?(Level \d+)$/.exec(l.name)
    if (!m) throw new Error(`${q.label}: level "${l.name}" is not named as Pearson names levels`)
    const prefix = m[1] ?? ''
    if (!byPrefix.has(prefix)) byPrefix.set(prefix, [])
    byPrefix.get(prefix)!.push({ band: m[2]!, range: range(l.marks) })
  }
  return [...byPrefix].map(([prefix, levels]) => {
    const ids = prefix ? (prefix.match(/AO\d/g) ?? []) : q.objectives.map((o) => o.id)
    const objectives = q.objectives.filter((o) => ids.includes(o.id))
    expect(objectives.length, `${q.label} ${prefix}: objectives the guide does not list`).toBe(
      ids.length,
    )
    return {
      id: objectives.map((o) => o.id).join('+'),
      marks: objectives.reduce((a, o) => a + o.marks, 0),
      split: Object.fromEntries(objectives.map((o) => [o.id, o.marks])),
      levels,
    }
  })
}

describe('each paper follows its guide', () => {
  it.each([lang1, lang2, lit1, lit2])('$id has the guide paper total and time', (paper) => {
    const guide = guideForScheme(paper.id)!
    expect(guide, `${paper.id} has no guide`).toBeTruthy()
    expect(paper.totalMarks).toBe(guide.totalMarks)
    expect(paper.durationMinutes).toBe(guide.durationMinutes)
  })

  it.each([lang1, lang2, lit1, lit2])(
    '$id has exactly the guide questions, in order, with their marks',
    (paper) => {
      const guide = guideForScheme(paper.id)!
      const guideQuestions = guide.sections.flatMap((s) => s.questions)
      expect(paper.questions.map((q) => q.id)).toEqual(
        guideQuestions.map((g) => g.markerQuestionId),
      )
      for (const g of guideQuestions) {
        expect(question(paper, g.markerQuestionId!).totalMarks, g.label).toBe(g.marks)
      }
    },
  )

  it.each([lang1, lang2, lit1, lit2])(
    '$id marks every question on the guide grids: objectives, marks, levels and ranges',
    (paper) => {
      const guide = guideForScheme(paper.id)!
      let compared = 0
      for (const g of guide.sections.flatMap((s) => s.questions)) {
        const q = question(paper, g.markerQuestionId!)
        if (g.levels.length === 0) {
          // Marked a point at a time: one objective, one band, no levels.
          expect(g.objectives.length, g.label).toBe(1)
          expect(
            q.assessmentObjectives.map((a) => [a.id, a.maxMarks]),
            g.label,
          ).toEqual([[g.objectives[0]!.id, g.marks]])
          const bands = q.assessmentObjectives[0]!.bands
          expect(
            bands.map((b) => [b.band, b.minMarks, b.maxMarks]),
            g.label,
          ).toEqual([['Points', 1, g.marks]])
          expect(q.examinerNotes, `${g.label}: how the marks are given`).toMatch(/One mark/)
          compared += 1
          continue
        }
        const grids = guideGrids(g)
        expect(
          q.assessmentObjectives.map((a) => a.id),
          `${g.label}: one objective per grid`,
        ).toEqual(grids.map((x) => x.id))
        for (const want of grids) {
          const ao = q.assessmentObjectives.find((a) => a.id === want.id)!
          expect(ao.maxMarks, `${g.label} ${want.id}`).toBe(want.marks)
          expect(split(ao), `${g.label} ${want.id}: the split the model is told`).toEqual(
            want.split,
          )
          expect(
            ao.bands.map((b) => [b.band, b.minMarks, b.maxMarks]),
            `${g.label} ${want.id}: the guide levels`,
          ).toEqual(want.levels.map((l) => [l.band, ...l.range]))
          compared += 1
        }
      }
      // Every objective the marker has was compared with a guide grid.
      expect(compared).toBe(paper.questions.reduce((n, q) => n + q.assessmentObjectives.length, 0))
    },
  )

  it('compares a realistic number of grids, so the comparison is not vacuous', () => {
    const levelled = [lang1, lang2, lit1, lit2].flatMap((p) =>
      p.questions.flatMap((q) => q.assessmentObjectives.filter((a) => a.bands.length > 1)),
    )
    expect(levelled.length).toBe(18)
  })

  it.each([lit1, lit2])('$id: each combined grid tells the model it is one mark', (paper) => {
    // The prompts show labels, not ids, and the engine matches the id the
    // model returns exactly (after upper-casing). A model that split a
    // combined grid into AO1 and AO3 would not match it.
    const combined = paper.questions.flatMap((q) =>
      q.assessmentObjectives.filter((a) => a.id.includes('+')).map((a) => ({ q, a })),
    )
    expect(combined.length).toBeGreaterThan(0)
    for (const { q, a } of combined) {
      expect(a.id, 'upper case, or the engine never matches it').toBe(a.id.toUpperCase())
      expect(a.label.startsWith(`${a.id} - `), a.label).toBe(true)
      expect(a.description).toMatch(/one mark for the grid/i)
      expect(q.examinerNotes, `${paper.id} ${q.id}`).toContain(a.id)
    }
  })
})

// ─── The caps and rules Pearson applies ─────────────────────────────────

describe('the caps and rules Pearson applies are in the examiner notes', () => {
  // Each was missing, or contradicted, until 24 October 2026. Board documents:
  // 1EN0/01, 1EN0/02, 1ET0/02 mark schemes, Summer 2025 (and earlier series).
  const notes = (p: MarkScheme, id: string) => question(p, id).examinerNotes ?? ''
  const task = (p: MarkScheme, id: string) => question(p, id).taskDescription

  it('Language Paper 1 Q3: language only, structure only or unbalanced stays in Level 1', () => {
    expect(notes(lang1, 'Q3')).toMatch(
      /only language, or only structure, cannot go above the top of Level 1/,
    )
    expect(notes(lang1, 'Q3')).toMatch(/unbalanced/)
  })

  it('Language Paper 2 Q3: language only or structure only stays in Level 2', () => {
    expect(notes(lang2, 'Q3')).toMatch(
      /only language, or only structure, cannot go above the top of Level 2/,
    )
    expect(notes(lang2, 'Q3')).toMatch(/unbalanced[^.]*cannot reach Level 3/)
  })

  it.each([
    ['edexcel-lang-paper1', 'Q4'],
    ['edexcel-lang-paper2', 'Q6'],
  ])('%s %s credits techniques only in support of the judgement', (schemeId, id) => {
    expect(notes(MARK_SCHEMES[schemeId]!, id)).toMatch(
      /From Level 2 upwards, references to the writer's techniques earn credit only where they support the judgement/,
    )
  })

  it('Language Paper 1 Q4 no longer says a named section limits what is rewarded', () => {
    // The June 2023 to June 2025 papers all asked about the whole extract.
    expect(notes(lang1, 'Q4') + task(lang1, 'Q4')).not.toMatch(/names a section|outside it/i)
    expect(task(lang1, 'Q4')).toMatch(/extract as a whole/)
  })

  it('Language Paper 2 Q7(a): both texts for any mark, and similarities only', () => {
    expect(notes(lang2, 'Q7a')).toMatch(/Both texts must be drawn on for any mark/)
    expect(notes(lang2, 'Q7a')).not.toMatch(/still creditable/)
    expect(task(lang2, 'Q7a')).toMatch(/similarities/)
    expect(task(lang2, 'Q7a')).not.toMatch(/differences/)
  })

  it('Language Paper 2 Q7(b): one text in detail stays in Level 2, unbalanced below Level 3', () => {
    expect(notes(lang2, 'Q7b')).toMatch(
      /only one text in detail cannot go above the top of Level 2/,
    )
    expect(notes(lang2, 'Q7b')).toMatch(/unbalanced[^.]*cannot reach Level 3/)
  })

  it.each(['Section B Part 1', 'Section B Part 2'])(
    'Literature Paper 2 %s: one poem stays in Level 2, very unbalanced below Level 3',
    (id) => {
      expect(notes(lit2, id)).toMatch(/only one poem cannot go above the top of Level 2/)
      expect(notes(lit2, id)).toMatch(/considerably unbalanced[^.]*cannot reach Level 3/)
    },
  )

  it('Literature part (b) asks about elsewhere in the text, not the text as a whole', () => {
    expect(task(lit1, 'Section A (b)')).toMatch(
      /elsewhere in the play, outside the printed extract/,
    )
    expect(task(lit2, 'Section A (b)')).toMatch(
      /elsewhere in the novel, outside the printed extract/,
    )
    for (const p of [lit1, lit2]) expect(task(p, 'Section A (b)')).not.toMatch(/as a whole/)
  })

  it('Literature Paper 2 Part 1: the second poem comes from the same collection', () => {
    expect(task(lit2, 'Section B Part 1')).toMatch(/same anthology collection/)
    expect(task(lit2, 'Section B Part 1')).not.toMatch(/of your choice/)
  })

  it('carries none of the rules no board document contains (the guides: NOT CONFIRMED)', () => {
    // A rule nobody can source should not decide a student's mark.
    expect(notes(lang1, 'Q1')).not.toMatch(/deduct/i)
    expect(notes(lang1, 'Q5/Q6')).not.toMatch(/better/i)
    expect(notes(lang2, 'Q8/Q9')).not.toMatch(/wrong form|form marks/i)
  })
})
