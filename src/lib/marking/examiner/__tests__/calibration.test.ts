import { describe, expect, it } from 'vitest'
import {
  anchorsForQuestion,
  buildCalibrationBlock,
  calibrationSetsFor,
  hasCalibration,
  summariseCalibration,
} from '../calibration'
import { anchorTotal, describeAnchor } from '../calibration/types'
import { getExaminerPack } from '../registry'
import type { ExaminerAnchor } from '../calibration/types'

const PACK_ID = 'edexcel-igcse-lang-paper1'
const pack = getExaminerPack(PACK_ID)!

function total(a: ExaminerAnchor): number | null {
  return anchorTotal(a)
}

describe('the calibration corpus', () => {
  it('is registered against a pack that exists', () => {
    expect(pack).toBeTruthy()
    expect(hasCalibration(PACK_ID)).toBe(true)
    expect(hasCalibration('aqa-lang-paper1')).toBe(false)
  })

  it('every anchor names a question the pack actually has, and no mark exceeds its maximum', () => {
    for (const set of calibrationSetsFor(PACK_ID)) {
      for (const a of set.anchors) {
        const q = pack.questions.find((x) => x.id === a.questionId)
        expect(q, `${set.series}: question ${a.questionId} is not in the pack`).toBeTruthy()
        if (a.mark !== undefined) {
          expect(a.mark, `${a.questionId} mark within range`).toBeGreaterThanOrEqual(0)
          expect(a.mark, `${a.questionId} mark within range`).toBeLessThanOrEqual(q!.max)
        }
        if (a.award) {
          // Every grid named in an award must exist on that writing question.
          expect(q!.kind, `${a.questionId} award needs a writing question`).toBe('writing')
          if (q!.kind === 'writing') {
            for (const [gridId, mark] of Object.entries(a.award)) {
              const grid = q!.grids.find((g) => g.id === gridId)
              expect(grid, `${a.questionId}: grid ${gridId} is not on this question`).toBeTruthy()
              expect(mark).toBeGreaterThanOrEqual(0)
              expect(mark, `${a.questionId} ${gridId} within grid maximum`).toBeLessThanOrEqual(
                grid!.max,
              )
            }
          }
          expect(total(a)!, `${a.questionId} total within question maximum`).toBeLessThanOrEqual(
            q!.max,
          )
        }
        // An anchor is only useful if it says where the response landed. A
        // numeric award is best; a level alone is acceptable, and is what a
        // published commentary gives when it prints no number. Neither is not.
        expect(
          a.mark !== undefined || a.award !== undefined || a.level !== undefined,
          `${a.questionId}: an anchor must carry a mark, an award or a level`,
        ).toBe(true)
      }
    }
  })

  it('a stated level agrees with the mark against the published grid', () => {
    for (const set of calibrationSetsFor(PACK_ID)) {
      for (const a of set.anchors) {
        if (a.level === undefined || a.mark === undefined) continue
        const q = pack.questions.find((x) => x.id === a.questionId)!
        if (q.kind !== 'level') continue
        const band = q.grid.levels[a.level - 1]
        expect(band, `${a.questionId}: level ${a.level} exists`).toBeTruthy()
        expect(
          a.mark,
          `${a.questionId}: ${a.mark} sits inside level ${a.level}`,
        ).toBeGreaterThanOrEqual(band!.lo)
        expect(
          a.mark,
          `${a.questionId}: ${a.mark} sits inside level ${a.level}`,
        ).toBeLessThanOrEqual(band!.hi)
      }
    }
  })

  it('covers every question on the paper with a spread of marks', () => {
    for (const q of pack.questions) {
      const anchors = anchorsForQuestion(PACK_ID, q.id)
      expect(anchors.length, `${q.id} has anchors`).toBeGreaterThanOrEqual(2)
      const marks = anchors.map(total).filter((m): m is number => m !== null)
      expect(marks.length, `${q.id} has numeric awards`).toBeGreaterThanOrEqual(2)
      expect(Math.max(...marks) - Math.min(...marks), `${q.id} spans a range`).toBeGreaterThan(0)
      // anchorsForQuestion returns lowest first, unmarked anchors last.
      expect(marks).toEqual([...marks].sort((x, y) => x - y))
    }
  })

  it('never stores candidate writing, only examiner annotation', () => {
    // A candidate's script would be long prose. Annotations are short notes.
    for (const set of calibrationSetsFor(PACK_ID)) {
      for (const a of set.anchors) {
        for (const n of a.notes) {
          expect(n.length, `annotation is a note, not a script: "${n.slice(0, 40)}"`).toBeLessThan(
            320,
          )
        }
      }
    }
  })

  it('labels an inferred mark so it can never be read as an award', () => {
    const line = describeAnchor(
      { questionId: 'Q4', mark: 8, level: 4, inferred: true, notes: ['x'] },
      12,
    )
    expect(line).toContain('not printed in the source')
    const stated = describeAnchor({ questionId: 'Q4', mark: 8, notes: ['x'] }, 12)
    expect(stated).not.toContain('not printed in the source')
  })
})

describe('the calibration prompt block', () => {
  const q4 = pack.questions.find((q) => q.id === 'Q4')!
  const block = buildCalibrationBlock(PACK_ID, q4)

  it('is built for a calibrated question and empty for an uncalibrated pack', () => {
    expect(block).toContain('STANDARDISATION')
    const aqa = getExaminerPack('aqa-lang-paper1')!
    expect(buildCalibrationBlock(aqa.id, aqa.questions[0]!)).toBe('')
  })

  it('carries the series, the awards and the examiner words for that question only', () => {
    expect(block).toContain('2606GQ, June 2026')
    expect(block).toContain('Awarded 7/12')
    expect(block).toContain('lack of referencing which is a limiting factor')
    // Q5's distinctive note must not leak into the Q4 block.
    expect(block).not.toContain('struggling to access the question')
  })

  it('tells the model the anchors are calibration and not a content checklist', () => {
    expect(block).toContain('not a checklist')
    expect(block).toContain('different task')
  })

  it('renders a writing question as its per-objective award and names the alternative', () => {
    const q67 = pack.questions.find((q) => q.id === 'Q67')!
    const wBlock = buildCalibrationBlock(PACK_ID, q67)
    // Q6 and Q7 are two alternative tasks sharing one pack question and both
    // grids, so both sets of anchors belong in the block, each labelled.
    expect(wBlock).toContain('AO4 25, AO5 17')
    expect(wBlock).toContain('on Q6')
    expect(wBlock).toContain('on Q7')
    expect(wBlock).toContain('it was awarded 14')
    const line = describeAnchor(
      { questionId: 'Q6', award: { AO4: 22, AO5: 15 }, level: 4, notes: ['met all level 4'] },
      45,
    )
    expect(line).toContain('AO4 22, AO5 15')
    expect(line).toContain('total 37/45')
  })

  it('summarises its provenance for the interface', () => {
    const s = summariseCalibration(PACK_ID)
    expect(s.length).toBeGreaterThanOrEqual(2)
    expect(s[0]!.source).toContain('Pearson')
    expect(s.some((x) => x.sourceKind === 'standardisation-epack')).toBe(true)
    expect(s.some((x) => x.sourceKind === 'published-exemplars')).toBe(true)
  })
})
