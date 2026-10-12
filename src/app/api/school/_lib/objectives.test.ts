// @vitest-environment node
import { describe, it, expect } from 'vitest'
import {
  SMALL_SAMPLE_ESSAYS,
  adjustmentsByObjective,
  applyCorrections,
  latestCorrectionsBySubmission,
  markAgreement,
  objectivesByClass,
  objectivesByPupil,
  parseAoBreakdown,
  parseAoCorrections,
  summariseObjectives,
  type MarkedEssay,
} from './objectives'

/**
 * The department and pupil objective views (12 October 2026).
 *
 * The pilot school was promised a view of which assessment objectives cost
 * marks, class by class, and each pupil's strongest and weakest objectives.
 * These tests pin the arithmetic and, as much, what it refuses to claim:
 * small samples are labelled, a single objective is not called a strength,
 * Language AO1 is not Literature AO1, and nothing becomes a grade.
 */

/** The shape applyAiResult writes to marking_submissions.ai_ao_breakdown. */
const aiBreakdown = (marks: Record<string, [number, number]>) =>
  Object.entries(marks).map(([id, [m, max]]) => ({
    id,
    label: `${id} label`,
    marks: m,
    maxMarks: max,
    band: 'Level 4',
    justification: `${id} because`,
    evidence: ['a quotation'],
  }))

const LIT = { subjectKey: 'AQA|English Literature', subjectLabel: 'AQA English Literature' }
const LANG = { subjectKey: 'AQA|English Language', subjectLabel: 'AQA English Language' }

function essay(
  id: string,
  studentId: string,
  classId: string | null,
  marks: Record<string, [number, number]>,
  subject = LIT,
): MarkedEssay {
  return {
    submissionId: id,
    studentId,
    classId,
    ...subject,
    aos: applyCorrections(parseAoBreakdown(aiBreakdown(marks)), null),
  }
}

describe('reading what the marking spine stores', () => {
  it('parses the breakdown applyAiResult writes', () => {
    const parsed = parseAoBreakdown(aiBreakdown({ AO1: [9, 12], AO2: [6, 12] }))
    expect(parsed).toEqual([
      { ao: 'AO1', label: 'AO1 label', marks: 9, maxMarks: 12, comment: 'AO1 because' },
      { ao: 'AO2', label: 'AO2 label', marks: 6, maxMarks: 12, comment: 'AO2 because' },
    ])
  })

  it('drops entries it cannot trust rather than guessing', () => {
    const parsed = parseAoBreakdown([
      { id: 'AO1', marks: 13, maxMarks: 12 }, // above its own maximum
      { id: 'AO2', marks: 3, maxMarks: 0 },
      { id: '', marks: 3, maxMarks: 6 },
      { id: 'AO3', marks: '4', maxMarks: 6 }, // not a number
      { id: 'ao4', marks: 2, maxMarks: 4 },
      null,
    ])
    expect(parsed.map((p) => p.ao)).toEqual(['AO4'])
  })

  it('treats anything but an array as no breakdown', () => {
    expect(parseAoBreakdown(null)).toEqual([])
    expect(parseAoBreakdown({ AO1: { marks: 1, maxMarks: 2 } })).toEqual([])
  })

  it('reads corrections in the shape the review route stores', () => {
    expect(parseAoCorrections([{ ao: 'ao2', score: 8, maxScore: 12, comment: ' fair ' }])).toEqual([
      { ao: 'AO2', score: 8, maxScore: 12, comment: 'fair' },
    ])
    expect(parseAoCorrections(null)).toBeNull()
    expect(parseAoCorrections([])).toEqual([])
  })
})

describe("the teacher's adjustment is the mark that counts", () => {
  const ai = parseAoBreakdown(aiBreakdown({ AO1: [9, 12], AO2: [6, 12] }))

  it('replaces the AI mark where a teacher adjusted it', () => {
    const effective = applyCorrections(ai, [{ ao: 'AO2', score: 8, maxScore: 12, comment: 'x' }])
    expect(effective[1]).toMatchObject({ ao: 'AO2', marks: 8, aiMarks: 6, adjusted: true })
    expect(effective[0]).toMatchObject({ ao: 'AO1', marks: 9, adjusted: false })
  })

  it('ignores a correction outside the objective’s range', () => {
    const effective = applyCorrections(ai, [{ ao: 'AO1', score: 40, maxScore: 40, comment: null }])
    expect(effective[0]).toMatchObject({ marks: 9, maxMarks: 12, adjusted: false })
  })

  it('uses the newest decision that said anything about objective marks', () => {
    const latest = latestCorrectionsBySubmission([
      {
        submission_id: 's1',
        ao_corrections: [{ ao: 'AO1', score: 5 }],
        created_at: '2026-11-01T09:00:00Z',
      },
      // A later approval sent without corrections must not erase them.
      { submission_id: 's1', ao_corrections: null, created_at: '2026-11-02T09:00:00Z' },
      {
        submission_id: 's2',
        ao_corrections: [{ ao: 'AO1', score: 5 }],
        created_at: '2026-11-01T09:00:00Z',
      },
      // A later empty list is a statement: no adjustments any more.
      { submission_id: 's2', ao_corrections: [], created_at: '2026-11-03T09:00:00Z' },
    ])
    expect(latest.get('s1')).toEqual([{ ao: 'AO1', score: 5, maxScore: null, comment: null }])
    expect(latest.get('s2')).toEqual([])
  })
})

describe('the department view, by class', () => {
  it('is empty, not invented, when there is nothing marked', () => {
    expect(summariseObjectives([])).toEqual({ essays: 0, smallSample: true, objectives: [] })
    expect(objectivesByClass([])).toEqual([])
    expect(objectivesByPupil([])).toEqual([])
  })

  it('gives each class the mean share of marks per objective, weakest first', () => {
    const classes = objectivesByClass([
      essay('s1', 'p1', 'c1', { AO1: [6, 12], AO2: [3, 12] }),
      essay('s2', 'p2', 'c1', { AO1: [12, 12], AO2: [6, 12] }),
      essay('s3', 'p3', 'c1', { AO1: [9, 12], AO2: [0, 12] }),
      essay('s4', 'p4', 'c2', { AO1: [3, 12] }),
    ])
    const c1 = classes.find((c) => c.classId === 'c1')!
    expect(c1.essays).toBe(3)
    expect(c1.smallSample).toBe(false)
    expect(c1.objectives.map((o) => [o.ao, o.meanShare, o.essays])).toEqual([
      ['AO2', 0.25, 3],
      ['AO1', 0.75, 3],
    ])
    const c2 = classes.find((c) => c.classId === 'c2')!
    expect(c2).toMatchObject({ essays: 1, smallSample: true })
    expect(c2.objectives[0]).toMatchObject({ ao: 'AO1', meanShare: 0.25, smallSample: true })
  })

  it(`labels fewer than ${SMALL_SAMPLE_ESSAYS} essays as a small sample, and ${SMALL_SAMPLE_ESSAYS} as not`, () => {
    const two = summariseObjectives([
      essay('s1', 'p1', 'c1', { AO1: [6, 12] }),
      essay('s2', 'p2', 'c1', { AO1: [6, 12] }),
    ])
    expect(two.smallSample).toBe(true)
    expect(two.objectives[0].smallSample).toBe(true)
    const three = summariseObjectives([
      essay('s1', 'p1', 'c1', { AO1: [6, 12] }),
      essay('s2', 'p2', 'c1', { AO1: [6, 12] }),
      essay('s3', 'p3', 'c1', { AO1: [6, 12] }),
    ])
    expect(three.smallSample).toBe(false)
    expect(three.objectives[0].smallSample).toBe(false)
  })

  it('never merges Language AO1 with Literature AO1', () => {
    const all = summariseObjectives([
      essay('s1', 'p1', 'c1', { AO1: [12, 12] }, LIT),
      essay('s2', 'p1', 'c1', { AO1: [0, 8] }, LANG),
    ])
    expect(all.objectives).toHaveLength(2)
    expect(all.objectives.map((o) => [o.subjectLabel, o.ao, o.meanShare])).toEqual([
      ['AQA English Language', 'AO1', 0],
      ['AQA English Literature', 'AO1', 1],
    ])
  })

  it('counts teacher-adjusted marks and says how many were adjusted', () => {
    const adjusted: MarkedEssay = {
      ...essay('s1', 'p1', 'c1', {}),
      aos: applyCorrections(parseAoBreakdown(aiBreakdown({ AO2: [6, 12] })), [
        { ao: 'AO2', score: 12, maxScore: 12, comment: null },
      ]),
    }
    const o = summariseObjectives([adjusted]).objectives[0]
    expect(o).toMatchObject({ ao: 'AO2', meanShare: 1, adjustedEssays: 1 })
  })

  it('leaves out essays with no objective marks instead of counting them as zero', () => {
    const summary = summariseObjectives([
      essay('s1', 'p1', 'c1', { AO1: [6, 12] }),
      { ...essay('s2', 'p2', 'c1', {}), aos: [] },
    ])
    expect(summary.essays).toBe(1)
    expect(summary.objectives[0].meanShare).toBe(0.5)
  })

  it('reports shares between 0 and 1 and nothing shaped like a grade', () => {
    const summary = summariseObjectives([essay('s1', 'p1', 'c1', { AO1: [7, 12] })])
    const json = JSON.stringify(summary)
    expect(json).not.toMatch(/grade/i)
    expect(summary.objectives[0].meanShare).toBeGreaterThanOrEqual(0)
    expect(summary.objectives[0].meanShare).toBeLessThanOrEqual(1)
  })
})

describe('the pupil view', () => {
  it('names the strongest and weakest objective across their essays', () => {
    const [pupil] = objectivesByPupil([
      essay('s1', 'p1', 'c1', { AO1: [10, 12], AO2: [4, 12], AO3: [3, 6] }),
      essay('s2', 'p1', 'c1', { AO1: [8, 12], AO2: [2, 12], AO3: [3, 6] }),
    ])
    expect(pupil.essays).toBe(2)
    expect(pupil.smallSample).toBe(true)
    expect(pupil.strongest).toMatchObject({ ao: 'AO1', essays: 2 })
    expect(pupil.weakest).toMatchObject({ ao: 'AO2', essays: 2 })
    expect(pupil.objectives.map((o) => o.ao)).toEqual(['AO1', 'AO3', 'AO2'])
  })

  it('does not call a lone objective a strength', () => {
    const [pupil] = objectivesByPupil([essay('s1', 'p1', 'c1', { AO1: [10, 12] })])
    expect(pupil.objectives).toHaveLength(1)
    expect(pupil.strongest).toBeNull()
    expect(pupil.weakest).toBeNull()
  })

  it('does not invent a difference between equal objectives', () => {
    const [pupil] = objectivesByPupil([essay('s1', 'p1', 'c1', { AO1: [6, 12], AO2: [6, 12] })])
    expect(pupil.strongest).toBeNull()
    expect(pupil.weakest).toBeNull()
  })

  it('keeps pupils apart', () => {
    const pupils = objectivesByPupil([
      essay('s1', 'p1', 'c1', { AO1: [12, 12], AO2: [0, 12] }),
      essay('s2', 'p2', 'c1', { AO1: [0, 12], AO2: [12, 12] }),
    ])
    const byId = Object.fromEntries(pupils.map((p) => [p.studentId, p]))
    expect(byId.p1.strongest?.ao).toBe('AO1')
    expect(byId.p2.strongest?.ao).toBe('AO2')
  })
})

describe('where teachers changed the AI', () => {
  const reviewed = (
    aiMarks: number,
    teacherMarks: number | null,
  ): MarkedEssay & { reviewed: boolean } => ({
    ...essay('s', 'p1', 'c1', {}),
    aos: applyCorrections(
      parseAoBreakdown(aiBreakdown({ AO1: [aiMarks, 12] })),
      teacherMarks === null
        ? null
        : [{ ao: 'AO1', score: teacherMarks, maxScore: 12, comment: null }],
    ),
    reviewed: true,
  })

  it('measures the change in marks on both sides, never a grade against marks', () => {
    expect(markAgreement([reviewed(6, null), reviewed(6, 8), reviewed(6, 3)])).toEqual({
      reviewed: 3,
      unchanged: 1,
      raised: 1,
      lowered: 1,
      meanAbsChangeWhenChanged: 2.5,
    })
  })

  it('counts nothing a teacher has not reviewed', () => {
    expect(markAgreement([{ ...reviewed(6, 8), reviewed: false }]).reviewed).toBe(0)
  })

  it('lists the objectives teachers adjust, with the mean change in marks', () => {
    const list = adjustmentsByObjective([reviewed(6, 8), reviewed(6, 10), reviewed(6, null)])
    expect(list).toEqual([expect.objectContaining({ ao: 'AO1', adjustedEssays: 2, meanChange: 3 })])
  })
})
