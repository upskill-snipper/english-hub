import { describe, it, expect } from 'vitest'
import { MARK_SCHEMES } from '@/lib/marking/mark-schemes'
import type { AssessmentObjective } from '@/lib/marking/mark-schemes/types'

/**
 * An objective whose grid marks something else (EXAM-7, the half a label fix
 * cannot reach).
 *
 * On 19 September 2026 `ao4Lit` in eduqas-lit.ts and `ao4` in ocr-lit.ts had
 * their LABEL and DESCRIPTION corrected from "Compare and contrast" and
 * "Relate texts" to technical accuracy, which is what England's GCSE
 * Literature AO4 is. The BAND DESCRIPTORS were not touched, and those are the
 * criteria fed to the model. So the objective read:
 *
 *   "AO4 - Technical accuracy: use a range of vocabulary and sentence
 *    structures for clarity, purpose and effect, with accurate spelling and
 *    punctuation"
 *
 * and then handed the marker a ladder running from "Basic connections between
 * texts" to "Perceptive comparison". Five bands out of five on Eduqas, four out
 * of four on OCR.
 *
 * The marker follows the grid, because the grid is the thing with the mark
 * numbers next to it. Correcting the label changed what a human reading the
 * file believed and nothing about the marks a candidate received - arguably
 * worse than before, since the contradiction was now invisible to anyone who
 * read only the top of the object.
 *
 * WHAT THIS ASSERTS. That an AO4 which says it measures technical accuracy does
 * not hand the marker a comparison ladder. It is deliberately narrow: it makes
 * no claim about which questions carry AO4 or what any board's published band
 * wording is. Both of those need the specification, they are the rest of
 * EXAM-7, and inventing them is what EXAM-1 exists to prevent.
 */

/** Every AO on every registered scheme, with enough context to name it. */
function allObjectives(): { scheme: string; question: string; ao: AssessmentObjective }[] {
  const out: { scheme: string; question: string; ao: AssessmentObjective }[] = []
  for (const scheme of Object.values(MARK_SCHEMES)) {
    for (const question of scheme.questions) {
      for (const ao of question.assessmentObjectives) {
        out.push({ scheme: scheme.id, question: question.id, ao })
      }
    }
  }
  return out
}

const COMPARISON = /\bcompar|\bconnections? between texts|\brelate texts|\bcross-reference/i

describe('there are objectives to check', () => {
  it('found a realistic number', () => {
    // Vacuity guard. Every assertion below passes on an empty list, which is
    // how a check over a registry goes quiet when the registry moves.
    const all = allObjectives()
    expect(all.length).toBeGreaterThan(50)
    expect(new Set(all.map((o) => o.scheme)).size).toBeGreaterThan(10)
  })
})

describe('an objective that says it measures accuracy does not grade comparison', () => {
  it('no technical-accuracy AO has a comparison ladder', () => {
    const offenders: string[] = []

    for (const { scheme, question, ao } of allObjectives()) {
      const saysAccuracy =
        /technical accuracy|spelling, punctuation|spelling and punctuation/i.test(ao.label) ||
        /accurate spelling and punctuation/i.test(ao.description)
      if (!saysAccuracy) continue

      for (const band of ao.bands) {
        const text = `${band.label} ${band.descriptor} ${(band.indicators ?? []).join(' ')}`
        if (COMPARISON.test(text)) {
          offenders.push(
            `${scheme} ${question} ${ao.id} "${band.label}": ${band.descriptor.slice(0, 60)}`,
          )
        }
      }
    }

    expect(
      offenders,
      'this objective tells the marker it measures written accuracy and then grades comparison. The marker follows the grid.',
    ).toEqual([])
  })

  it('and its examiner notes do not either', () => {
    // The Eduqas poetry question said "AO4 rewards genuine comparison rather
    // than sequential treatment" three lines below a label reading technical
    // accuracy. That text is fed to the model verbatim.
    const offenders: string[] = []
    for (const scheme of Object.values(MARK_SCHEMES)) {
      for (const question of scheme.questions) {
        const notes = question.examinerNotes ?? ''
        if (!/AO4/.test(notes)) continue
        // "AO4 rewards comparison" is the fault. "comparison is rewarded within
        // AO1 and AO2" is the correction, and says AO4 is something else.
        if (/AO4[^.]{0,40}(rewards|assesses|measures)[^.]{0,30}compar/i.test(notes)) {
          offenders.push(`${scheme.id} ${question.id}: ${notes.slice(0, 80)}`)
        }
      }
    }
    expect(offenders).toEqual([])
  })
})

describe('the accuracy objectives still say what they are', () => {
  it('Eduqas and OCR Literature both label AO4 as accuracy', () => {
    // The counterweight to the test above: relabelling AO4 back to "compare"
    // would make the comparison ladders consistent again and silence it.
    // The ids are asserted, not skipped past. A first version named
    // `ocr-lit-paper1` and `ocr-lit-paper2`, which do not exist - the schemes
    // are `component01` and `component02` - so half this test quietly checked
    // nothing while reporting green.
    let checked = 0
    for (const id of [
      'eduqas-lit-comp1',
      'eduqas-lit-comp2',
      'ocr-lit-component01',
      'ocr-lit-component02',
    ]) {
      const scheme = MARK_SCHEMES[id]
      expect(scheme, `${id} is not a registered scheme - has it been renamed?`).toBeDefined()
      const ao4s = scheme!.questions
        .flatMap((q) => q.assessmentObjectives)
        .filter((ao) => ao.id === 'AO4')
      for (const ao of ao4s) {
        checked += 1
        expect(ao.label, `${id} AO4 has drifted back`).toMatch(
          /technical accuracy|spelling, punctuation/i,
        )
      }
    }
    expect(checked, 'no AO4 was examined on any of the four schemes').toBeGreaterThan(0)
  })

  it('and their grids still reach the marks they claim', () => {
    // Rewriting descriptors must not move a band boundary: the top band has to
    // still reach the objective's maximum, which is the original EXAM-7 defect.
    for (const { scheme, question, ao } of allObjectives()) {
      if (!ao.bands.length) continue
      const top = Math.max(...ao.bands.map((b) => b.maxMarks))
      expect(top, `${scheme} ${question} ${ao.id} tops out below its maximum`).toBe(ao.maxMarks)
    }
  })
})
