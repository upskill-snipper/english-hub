// ─── Examiner calibration: real awarded marks, with the examiner's reasons ──
//
// WHAT THIS ADDS TO A PACK
// A pack's grids say what each level requires and its triggers say what lifts
// or caps a response. Neither tells the marker what a 7 out of 12 actually
// looks like on this paper. Standardisation is the step where a human examiner
// is shown five marked scripts and told "this one is a 7, and here is why";
// this module is that step, as data.
//
// Each anchor is one candidate response from an official pack, carrying the
// mark the examiner awarded and the examiner's own margin annotations,
// verbatim. No candidate writing is stored: the scripts are images in the
// source PDFs and are deliberately not extracted, quoted or shipped. What is
// stored is the examiner's reasoning, which is the thing that transfers.
//
// The anchors go into the marking prompt as a cached block, so in a bulk run
// they are written once and read from cache for every candidate after.
//
// PROVENANCE IS NOT OPTIONAL. Every set names its series and its source
// document. Indicative content is series-specific, so an anchor from one
// series is evidence about how the level boundaries behave, never a checklist
// for another series' task. The block says so to the model in those words.
// ────────────────────────────────────────────────────────────────────────────

/** One marked response: what it scored and why. */
export interface ExaminerAnchor {
  /**
   * Question id **within the pack**, e.g. 'Q4'. Where a pack models two
   * alternative tasks as one question (Pearson's Q6 or Q7 share both grids),
   * this is the pack's id and `sourceQuestion` records which alternative the
   * script actually answered.
   */
  questionId: string
  /** The awarding body's own question id, when it differs from `questionId`. */
  sourceQuestion?: string
  /**
   * Award for a single-grid question, as a mark out of the question maximum.
   * Mutually exclusive with `award`.
   */
  mark?: number
  /**
   * Award for a multi-grid writing question, keyed by grid id, e.g.
   * `{ AO4: 22, AO5: 15 }`.
   */
  award?: Readonly<Record<string, number>>
  /** The level the examiner placed it in, where the annotations state one. */
  level?: number
  /**
   * The examiner's margin annotations, verbatim apart from expanded
   * abbreviations. Short, and never the candidate's own words.
   */
  notes: readonly string[]
  /**
   * One sentence naming what decided this mark rather than the one above or
   * below it. Written from the annotations, not invented.
   */
  decisive?: string
  /**
   * True when the mark was not printed as a number in the source and has been
   * derived from the annotations (for example "top of level 4" against a
   * 14 to 18 band). The prompt block labels these, so the model is never told
   * an inference is an award.
   */
  inferred?: boolean
}

export type CalibrationSourceKind =
  /** An OLS standardisation ePACK: scripts plus live margin annotations. */
  | 'standardisation-epack'
  /** A published exemplar-responses document with written commentaries. */
  | 'published-exemplars'

/** Every anchor drawn from one source document, for one paper. */
export interface ExaminerCalibrationSet {
  /** Pack this calibrates, matching ExaminerPack.id. */
  packId: string
  /** Awarding body series label, e.g. '2606GQ, June 2026'. */
  series: string
  sourceKind: CalibrationSourceKind
  /** Full provenance sentence, shown in the interface. */
  source: string
  /** The task each question set in this series, so an anchor is readable. */
  taskContext?: Readonly<Record<string, string>>
  /**
   * The examiner's overview of a question for this series, where the source
   * provides one. Keyed by question id.
   */
  overviews?: Readonly<Record<string, string>>
  anchors: readonly ExaminerAnchor[]
}

/**
 * The anchor's total mark, or null when the source placed it in a level
 * without printing a number. Used for ordering and for tests, so that both
 * agree on what "no mark" means.
 */
export function anchorTotal(a: ExaminerAnchor): number | null {
  if (a.mark !== undefined) return a.mark
  if (a.award) {
    const values = Object.values(a.award)
    if (values.length) return values.reduce((s, v) => s + v, 0)
  }
  return null
}

/** Format one anchor as a single prompt line. */
export function describeAnchor(a: ExaminerAnchor, max: number): string {
  const award = a.award
    ? Object.entries(a.award)
        .map(([k, v]) => `${k} ${v}`)
        .join(', ') + ` (total ${Object.values(a.award).reduce((s, v) => s + v, 0)}/${max})`
    : a.mark !== undefined
      ? `${a.mark}/${max}`
      : 'no numeric mark printed in the source'
  const from =
    a.sourceQuestion && a.sourceQuestion !== a.questionId ? ` on ${a.sourceQuestion}` : ''
  const level = a.level ? `, level ${a.level}` : ''
  const inferred = a.inferred
    ? ' (mark derived from the annotation, not printed in the source)'
    : ''
  const why = a.decisive ? ` Decisive: ${a.decisive}` : ''
  const notes = a.notes.length ? ` Examiner wrote: ${a.notes.map((n) => `"${n}"`).join(' ')}` : ''
  return `- Awarded ${award}${from}${level}${inferred}.${notes}${why}`
}
