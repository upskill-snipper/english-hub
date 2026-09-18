// ─── Rescaling an assessment objective's band ladder ─────────────────────────
//
// WHY THIS IS SHARED (19 September 2026, EXAM-7)
//
// Several schemes define one base AO with a full Level 1-6 ladder and then
// reuse it at different tariffs per question. The idiom for that was an object
// spread:
//
//     { ...ao1, maxMarks: 16, weighting: 16 / 40 }
//
// which overrides the DECLARED total and leaves the band ladder exactly as it
// was. In `ocr-lit.ts` the base ladder tops out at 12, so four sections of OCR
// Literature told the marker the objective was worth 16 marks and then offered
// it a grid whose highest level was "11-12 marks". **A candidate who deserved
// 16 could not be awarded more than 12.** Six objectives across three sections
// were in that state.
//
// Nothing detected it because every total in the file still added up: the
// question and paper totals are computed from `maxMarks`, which was correct.
// It was only the grid the model actually marks against that was short.
//
// The fix is derivable with no board document, which is why it is safe to make
// unilaterally: the target is the objective's OWN declared `maxMarks`. No new
// claim about any board's published scheme is involved - it is the internal
// contradiction that is being removed.
//
// ── THE ROUNDING BUG THIS ALREADY SURVIVED ──────────────────────────────────
// The first version of this function (written for edexcel-lit.ts earlier the
// same night) rounded each band edge independently. That left gaps and
// overlaps: scaling a 16-mark ladder to 20 produced a band ending at 17
// followed by one starting at 18, so a response worth 18 fell between two
// levels and the model had no band to place it in.
//
// Rounding is applied to the UPPER edge only, and each band starts one mark
// above the previous band's top - so the ladder is contiguous by construction,
// starts at 1, and always reaches `maxMarks`. A band squeezed out of existence
// by the rescale is dropped rather than left inverted.
// ────────────────────────────────────────────────────────────────────────────

import type { AssessmentObjective, BandDescriptor } from './types'

/** An AO without its per-question tariff - the reusable half. */
export type BaseAssessmentObjective = Omit<AssessmentObjective, 'maxMarks' | 'weighting'>

/**
 * Scale a base AO's level ladder to a per-question allocation.
 *
 * @param base The AO with its full ladder, minus tariff and weighting.
 * @param maxMarks The marks this objective is worth on THIS question.
 * @param weighting Its share of the question, 0-1.
 */
export function scaleAO(
  base: BaseAssessmentObjective,
  maxMarks: number,
  weighting: number,
): AssessmentObjective {
  const sorted = [...base.bands].sort((a, b) => a.minMarks - b.minMarks)
  const originalMax = Math.max(...sorted.map((b) => b.maxMarks))

  // Nothing to do, and no rounding to risk.
  if (originalMax === maxMarks) {
    return { ...base, maxMarks, weighting, bands: sorted }
  }

  // Preserve the ladder's own starting mark. Several papers open at 0 with a
  // "nothing creditable" band, which is a real feature of published schemes -
  // forcing every ladder to start at 1 would silently delete that band and
  // leave a zero-mark answer with nowhere to sit.
  const ratio = maxMarks / originalMax
  const scaled: BandDescriptor[] = []
  let lo = Math.min(...sorted.map((b) => b.minMarks)) <= 0 ? 0 : 1

  for (let i = 0; i < sorted.length; i++) {
    const band = sorted[i]!
    const hi = i === sorted.length - 1 ? maxMarks : Math.round(band.maxMarks * ratio)
    if (hi < lo) continue // the rescale collapsed this level; drop it
    scaled.push({ ...band, minMarks: lo, maxMarks: Math.min(hi, maxMarks) })
    lo = Math.min(hi, maxMarks) + 1
  }

  // Guarantee the top mark is awardable even if rounding stopped short. This is
  // the assertion the whole module exists for.
  const last = scaled[scaled.length - 1]
  if (last && last.maxMarks < maxMarks) last.maxMarks = maxMarks

  return { ...base, maxMarks, weighting, bands: scaled }
}
