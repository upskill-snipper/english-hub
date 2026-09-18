// ─── Examiner calibration registry ──────────────────────────────────────────
//
// Calibration sets are looked up by pack id. A pack may have several: a
// standardisation ePACK from one series and a published exemplar document from
// another both describe the same level boundaries from different angles, and
// both are useful, provided each says which series it came from.
//
// The block this builds goes into the marking prompt directly after the pack
// briefing and before the teacher's own mark scheme, and it is cached, so in a
// bulk run of a class it is written once and read back for every candidate.
// ────────────────────────────────────────────────────────────────────────────

import type { ExaminerQuestionSpec } from '../types'
import { pearson4ea1Paper1June2026 } from './pearson-4ea1-p1-2606gq'
import { pearson4ea1Paper1Published } from './pearson-4ea1-p1-published'
import {
  anchorTotal,
  describeAnchor,
  type ExaminerAnchor,
  type ExaminerCalibrationSet,
} from './types'

export type { ExaminerAnchor, ExaminerCalibrationSet } from './types'
export { anchorTotal, describeAnchor } from './types'

const SETS: readonly ExaminerCalibrationSet[] = [
  pearson4ea1Paper1June2026,
  pearson4ea1Paper1Published,
]

/** Every calibration set registered for a pack, in registration order. */
export function calibrationSetsFor(packId: string): ExaminerCalibrationSet[] {
  return SETS.filter((s) => s.packId === packId)
}

/** True when a pack has any real marked anchors behind it. */
export function hasCalibration(packId: string): boolean {
  return SETS.some((s) => s.packId === packId && s.anchors.length > 0)
}

export interface CalibrationSummary {
  series: string
  sourceKind: ExaminerCalibrationSet['sourceKind']
  source: string
  anchorCount: number
  /** Question ids this set covers. */
  questions: string[]
}

/** What the interface shows a teacher about where a pack's anchors came from. */
export function summariseCalibration(packId: string): CalibrationSummary[] {
  return calibrationSetsFor(packId).map((s) => ({
    series: s.series,
    sourceKind: s.sourceKind,
    source: s.source,
    anchorCount: s.anchors.length,
    questions: [...new Set(s.anchors.map((a) => a.questionId))],
  }))
}

/**
 * Anchors for one question, across every set, lowest mark first. Anchors the
 * source placed in a level without printing a number sort last, so the ladder
 * a marker reads is the ladder of real awards.
 */
export function anchorsForQuestion(packId: string, questionId: string): ExaminerAnchor[] {
  const out: ExaminerAnchor[] = []
  for (const set of calibrationSetsFor(packId)) {
    out.push(...set.anchors.filter((a) => a.questionId === questionId))
  }
  const rank = (a: ExaminerAnchor) => anchorTotal(a) ?? Number.POSITIVE_INFINITY
  return out.sort((x, y) => rank(x) - rank(y))
}

/**
 * The prompt block for one question: the examiner's overview for the series
 * where there is one, then every anchor as a marked example with the
 * examiner's reasoning. Returns an empty string when the pack has no
 * calibration, so the caller can simply omit the block.
 */
export function buildCalibrationBlock(packId: string, question: ExaminerQuestionSpec): string {
  const sets = calibrationSetsFor(packId).filter((s) =>
    s.anchors.some((a) => a.questionId === question.id),
  )
  if (!sets.length) return ''

  const parts: string[] = [
    '=== STANDARDISATION: REAL MARKS AWARDED BY EXAMINERS ON THIS PAPER ===',
    '',
    'These are marks awarded by the awarding body’s own examiners to real responses to this question, with the examiners’ own words. Use them the way a marker uses standardisation scripts: to calibrate where the level boundaries actually fall and how severely or generously the criteria are applied in practice. They are not a checklist and the candidate you are marking answered a different task, so never expect the same content. Indicative content is specific to its series.',
    '',
  ]

  for (const set of sets) {
    const anchors = set.anchors.filter((a) => a.questionId === question.id)
    parts.push(
      `SERIES: ${set.series} (${set.sourceKind === 'standardisation-epack' ? 'standardisation pack, live margin annotations' : 'published exemplar commentaries'})`,
    )
    const task = set.taskContext?.[question.id]
    if (task) parts.push(`TASK THAT SERIES SET: ${task}`)
    const overview = set.overviews?.[question.id]
    if (overview) parts.push(`EXAMINER OVERVIEW: ${overview}`)
    parts.push('')
    for (const a of anchors) parts.push(describeAnchor(a, question.max))
    parts.push('')
  }

  parts.push(
    'Before you settle the mark, place the response against this ladder and say which anchor it sits between. Where your judgement disagrees with the ladder, say so and why in the commentary.',
  )
  return parts.join('\n')
}
