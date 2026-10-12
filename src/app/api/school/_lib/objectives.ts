// ─── Assessment-objective results across a school's marked essays ──────────
//
// WHY THIS EXISTS (12 October 2026)
// The proposal sent to the pilot school promises "a department view [that]
// shows which assessment objectives are costing marks, class by class, and
// for each pupil which objectives are strengths and which are holding them
// back". /api/school/analytics/marking built its "weaknesses" only from
// teacher corrections, so a school whose essays the AI had marked but no
// teacher had yet reviewed saw an empty page, and the only thing it could
// ever show was where teachers disagreed with the AI, not where pupils lose
// marks. It also read correction entries in shapes the review route never
// writes ({ ai, teacher } pairs), so the entries the review route does write
// counted as nothing at all.
//
// This module is the pure half. It parses what the marking spine stores and
// aggregates it; the routes do the scoped reads.
//
// WHAT IT READS
//   * marking_submissions.ai_ao_breakdown is MarkingResult.aoScores, written
//     by applyAiResult in src/lib/marking/persistence.ts:
//       [{ id: 'AO1', label, marks, maxMarks, band, justification, evidence? }]
//   * A teacher's per-objective correction, from POST
//     /api/marking/[submissionId]/review, is stored verbatim in
//     teacher_moderations.ao_corrections:
//       [{ ao: 'AO1', score, maxScore, comment }]
//     The newest moderation row whose ao_corrections is an ARRAY is the
//     teacher's current statement about the objective marks. An empty array
//     means "no adjustments". NULL means "this decision said nothing about
//     objective marks" and is skipped, so an approval sent without
//     corrections cannot silently erase an adjustment made earlier.
//   * Where a teacher adjusted an objective, the adjusted mark is used.
//
// WHAT IT NEVER DOES
//   * Turn anything into a grade. A share of the marks on one objective is
//     not a grade and must not be converted into one, predicted or otherwise.
//   * Merge objectives that only share a code. AO1 in English Language and
//     AO1 in English Literature are different objectives, so every objective
//     is keyed by its subject (board and subject) as well as its code.
//   * Hide how little it is based on. Every figure carries the number of
//     essays behind it, and fewer than SMALL_SAMPLE_ESSAYS is flagged.
// ────────────────────────────────────────────────────────────────────────────

/** Below this many essays a figure is labelled as a small sample. */
export const SMALL_SAMPLE_ESSAYS = 3

/**
 * Statuses at which the AI has marked an essay and the mark still stands.
 * 'rejected' is excluded: a teacher rejected that mark. 'submitted' and
 * 'pending' have no mark yet.
 */
export const MARKED_STATUSES: readonly string[] = [
  'ai_marked',
  'teacher_review_required',
  'teacher_reviewed',
  'approved',
  'returned',
  'training_ready',
  'excluded_from_training',
]

/** Statuses at which a teacher has finished with the essay. */
export const REVIEWED_STATUSES: readonly string[] = [
  'teacher_reviewed',
  'approved',
  'returned',
  'rejected',
  'training_ready',
  'excluded_from_training',
]

/** Statuses at which the essay is marked and waiting for its teacher. */
export const AWAITING_REVIEW_STATUSES: readonly string[] = ['ai_marked', 'teacher_review_required']

/** Statuses at which the AI has not yet produced a mark. */
export const NOT_YET_MARKED_STATUSES: readonly string[] = ['submitted', 'pending']

// ─── Parsing ────────────────────────────────────────────────────────────────

/** One objective as the AI marked it. */
export interface AoMark {
  /** Upper-cased objective code, e.g. "AO1". */
  ao: string
  label: string | null
  marks: number
  maxMarks: number
  /** The AI's justification for the mark, where it gave one. */
  comment: string | null
}

/** One objective as a teacher corrected it, from teacher_moderations. */
export interface AoCorrection {
  ao: string
  score: number | null
  maxScore: number | null
  comment: string | null
}

function normaliseAo(raw: unknown): string {
  return typeof raw === 'string' ? raw.trim().toUpperCase() : ''
}

function finite(value: unknown): number | null {
  return typeof value === 'number' && Number.isFinite(value) ? value : null
}

function text(value: unknown): string | null {
  return typeof value === 'string' && value.trim() ? value.trim() : null
}

/**
 * Parse marking_submissions.ai_ao_breakdown.
 *
 * Only the shape applyAiResult writes is accepted. An entry with no code, a
 * mark that is not a number, a maximum of zero or less, or a mark outside
 * 0..maximum is dropped rather than half-read: a mark above its own maximum
 * is an error in the record, and clamping it would present a guess as data.
 * A duplicated code keeps its first entry.
 */
export function parseAoBreakdown(raw: unknown): AoMark[] {
  if (!Array.isArray(raw)) return []
  const out: AoMark[] = []
  const seen = new Set<string>()
  for (const item of raw) {
    if (!item || typeof item !== 'object') continue
    const o = item as Record<string, unknown>
    const ao = normaliseAo(o.id)
    const marks = finite(o.marks)
    const maxMarks = finite(o.maxMarks)
    if (!ao || marks === null || maxMarks === null) continue
    if (maxMarks <= 0 || marks < 0 || marks > maxMarks) continue
    if (seen.has(ao)) continue
    seen.add(ao)
    out.push({ ao, label: text(o.label), marks, maxMarks, comment: text(o.justification) })
  }
  return out
}

/**
 * Parse teacher_moderations.ao_corrections.
 *
 * Returns null when the column is not an array: that decision made no
 * statement about objective marks. An array, even an empty one, is a
 * statement and replaces any earlier one.
 */
export function parseAoCorrections(raw: unknown): AoCorrection[] | null {
  if (!Array.isArray(raw)) return null
  const out: AoCorrection[] = []
  for (const item of raw) {
    if (!item || typeof item !== 'object') continue
    const o = item as Record<string, unknown>
    const ao = normaliseAo(o.ao)
    if (!ao) continue
    out.push({
      ao,
      score: finite(o.score),
      maxScore: finite(o.maxScore),
      comment: text(o.comment),
    })
  }
  return out
}

export interface ModerationLike {
  submission_id: string
  ao_corrections: unknown
  created_at: string | null
}

/**
 * The teacher's current objective corrections for each submission: from the
 * newest moderation row whose ao_corrections is an array. Rows are sorted
 * here, so callers need not rely on the order the database returned.
 */
export function latestCorrectionsBySubmission(
  rows: readonly ModerationLike[],
): Map<string, AoCorrection[]> {
  const sorted = [...rows].sort(
    (a, b) => Date.parse(b.created_at ?? '') - Date.parse(a.created_at ?? ''),
  )
  const out = new Map<string, AoCorrection[]>()
  for (const row of sorted) {
    if (out.has(row.submission_id)) continue
    const parsed = parseAoCorrections(row.ao_corrections)
    if (parsed !== null) out.set(row.submission_id, parsed)
  }
  return out
}

/** One objective with the teacher's adjustment, if any, applied. */
export interface EffectiveAoMark {
  ao: string
  label: string | null
  /** The mark that counts: the teacher's where they adjusted it, else the AI's. */
  marks: number
  maxMarks: number
  aiMarks: number
  adjusted: boolean
  aiComment: string | null
  teacherComment: string | null
}

/**
 * Apply a teacher's corrections to the AI's objective marks.
 *
 * A correction counts only when its score lies within 0..the objective's
 * maximum. The maximum itself always comes from the AI breakdown, which
 * comes from the mark scheme: a teacher adjusts a mark, not the tariff.
 */
export function applyCorrections(
  ai: readonly AoMark[],
  corrections: readonly AoCorrection[] | null | undefined,
): EffectiveAoMark[] {
  const byAo = new Map((corrections ?? []).map((c) => [c.ao, c]))
  return ai.map((a) => {
    const c = byAo.get(a.ao)
    const usable = c !== undefined && c.score !== null && c.score >= 0 && c.score <= a.maxMarks
    const marks = usable ? (c.score as number) : a.marks
    return {
      ao: a.ao,
      label: a.label,
      marks,
      maxMarks: a.maxMarks,
      aiMarks: a.marks,
      adjusted: usable && marks !== a.marks,
      aiComment: a.comment,
      teacherComment: c?.comment ?? null,
    }
  })
}

// ─── Aggregation ────────────────────────────────────────────────────────────

/** One marked essay, reduced to what the objective views need. */
export interface MarkedEssay {
  submissionId: string
  studentId: string
  classId: string | null
  /** Board and subject, e.g. "AQA|English Literature". Part of every objective key. */
  subjectKey: string
  /** Human label for the subject, e.g. "AQA English Literature". */
  subjectLabel: string | null
  aos: EffectiveAoMark[]
}

/** How a group of essays did on one objective. */
export interface ObjectiveStat {
  /** subjectKey and objective code together; unique within a response. */
  key: string
  ao: string
  label: string | null
  subjectLabel: string | null
  /** Essays that assessed this objective. */
  essays: number
  /** Mean over those essays of marks / maximum, 0 to 1. Never a grade. */
  meanShare: number
  /** How many of those essays carry a teacher-adjusted mark here. */
  adjustedEssays: number
  smallSample: boolean
}

export interface ObjectiveGroup {
  /** Essays in the group with at least one objective mark. */
  essays: number
  smallSample: boolean
  /** Weakest first. */
  objectives: ObjectiveStat[]
}

export interface ClassObjectives extends ObjectiveGroup {
  classId: string
}

export interface PupilObjectives {
  studentId: string
  essays: number
  smallSample: boolean
  /** Strongest first. */
  objectives: ObjectiveStat[]
  /**
   * Null unless the pupil has at least two objectives AND they differ. With
   * one objective, or every objective at the same share, naming one of them
   * "strongest" would describe a difference that is not there.
   */
  strongest: ObjectiveStat | null
  weakest: ObjectiveStat | null
}

function round(n: number, places: number): number {
  const f = 10 ** places
  return Math.round(n * f) / f
}

function objectiveKey(subjectKey: string, ao: string): string {
  return `${subjectKey}::${ao}`
}

function aggregate(essays: readonly MarkedEssay[]): ObjectiveStat[] {
  const acc = new Map<
    string,
    {
      ao: string
      label: string | null
      subjectLabel: string | null
      n: number
      share: number
      adjusted: number
    }
  >()
  for (const essay of essays) {
    for (const a of essay.aos) {
      const key = objectiveKey(essay.subjectKey, a.ao)
      const entry = acc.get(key) ?? {
        ao: a.ao,
        label: a.label,
        subjectLabel: essay.subjectLabel,
        n: 0,
        share: 0,
        adjusted: 0,
      }
      entry.n += 1
      entry.share += a.marks / a.maxMarks
      if (a.adjusted) entry.adjusted += 1
      if (!entry.label && a.label) entry.label = a.label
      acc.set(key, entry)
    }
  }
  return Array.from(acc.entries()).map(([key, e]) => ({
    key,
    ao: e.ao,
    label: e.label,
    subjectLabel: e.subjectLabel,
    essays: e.n,
    meanShare: round(e.share / e.n, 4),
    adjustedEssays: e.adjusted,
    smallSample: e.n < SMALL_SAMPLE_ESSAYS,
  }))
}

const weakestFirst = (a: ObjectiveStat, b: ObjectiveStat) =>
  a.meanShare - b.meanShare || a.key.localeCompare(b.key)

const strongestFirst = (a: ObjectiveStat, b: ObjectiveStat) =>
  b.meanShare - a.meanShare || a.key.localeCompare(b.key)

function withMarks(essays: readonly MarkedEssay[]): MarkedEssay[] {
  return essays.filter((e) => e.aos.length > 0)
}

/** Every essay in scope taken together. */
export function summariseObjectives(essays: readonly MarkedEssay[]): ObjectiveGroup {
  const counted = withMarks(essays)
  return {
    essays: counted.length,
    smallSample: counted.length < SMALL_SAMPLE_ESSAYS,
    objectives: aggregate(counted).sort(weakestFirst),
  }
}

/**
 * Per class, weakest objective first. Essays with no class (the class was
 * deleted after they were written) are left out of this view; they still
 * count in the school-wide summary and in their pupil's own view.
 */
export function objectivesByClass(essays: readonly MarkedEssay[]): ClassObjectives[] {
  const byClass = new Map<string, MarkedEssay[]>()
  for (const e of withMarks(essays)) {
    if (!e.classId) continue
    const list = byClass.get(e.classId) ?? []
    list.push(e)
    byClass.set(e.classId, list)
  }
  return Array.from(byClass.entries()).map(([classId, list]) => ({
    classId,
    essays: list.length,
    smallSample: list.length < SMALL_SAMPLE_ESSAYS,
    objectives: aggregate(list).sort(weakestFirst),
  }))
}

/** Per pupil, strongest objective first, with the strongest and weakest named. */
export function objectivesByPupil(essays: readonly MarkedEssay[]): PupilObjectives[] {
  const byPupil = new Map<string, MarkedEssay[]>()
  for (const e of withMarks(essays)) {
    const list = byPupil.get(e.studentId) ?? []
    list.push(e)
    byPupil.set(e.studentId, list)
  }
  return Array.from(byPupil.entries()).map(([studentId, list]) => {
    const objectives = aggregate(list).sort(strongestFirst)
    const first = objectives[0]
    const last = objectives[objectives.length - 1]
    const differs = objectives.length >= 2 && first.meanShare > last.meanShare
    return {
      studentId,
      essays: list.length,
      smallSample: list.length < SMALL_SAMPLE_ESSAYS,
      objectives,
      strongest: differs ? first : null,
      weakest: differs ? last : null,
    }
  })
}

/** Where teachers changed the AI's objective marks, most-changed first. */
export interface AdjustmentStat {
  key: string
  ao: string
  label: string | null
  subjectLabel: string | null
  /** Essays on which a teacher changed this objective's mark. */
  adjustedEssays: number
  /** Mean of (teacher mark minus AI mark) over those essays, in marks. */
  meanChange: number
}

export function adjustmentsByObjective(essays: readonly MarkedEssay[]): AdjustmentStat[] {
  const acc = new Map<string, AdjustmentStat & { sum: number }>()
  for (const essay of essays) {
    for (const a of essay.aos) {
      if (!a.adjusted) continue
      const key = objectiveKey(essay.subjectKey, a.ao)
      const entry = acc.get(key) ?? {
        key,
        ao: a.ao,
        label: a.label,
        subjectLabel: essay.subjectLabel,
        adjustedEssays: 0,
        meanChange: 0,
        sum: 0,
      }
      entry.adjustedEssays += 1
      entry.sum += a.marks - a.aiMarks
      acc.set(key, entry)
    }
  }
  return Array.from(acc.values())
    .map(({ sum, ...rest }) => ({ ...rest, meanChange: round(sum / rest.adjustedEssays, 2) }))
    .sort((a, b) => b.adjustedEssays - a.adjustedEssays || a.key.localeCompare(b.key))
}

/** How a question went across the essays that answered it. */
export interface QuestionStat {
  key: string
  text: string | null
  essays: number
  /** Mean over those essays of total marks / total available, 0 to 1. */
  meanShare: number
  smallSample: boolean
}

/**
 * Questions by the share of available marks pupils achieved, lowest first.
 *
 * Replaces a "hardest questions" figure that averaged teacher_grade, a 9-1
 * grade, as if it were a mark out of ai_max_marks: a grade 6 on a 40-mark
 * question read as 15 per cent.
 */
export function questionsByShare(
  essays: ReadonlyArray<{
    questionKey: string
    questionText: string | null
    aos: EffectiveAoMark[]
  }>,
): QuestionStat[] {
  const acc = new Map<string, { text: string | null; n: number; share: number }>()
  for (const e of essays) {
    const max = e.aos.reduce((sum, a) => sum + a.maxMarks, 0)
    if (max <= 0) continue
    const got = e.aos.reduce((sum, a) => sum + a.marks, 0)
    const entry = acc.get(e.questionKey) ?? { text: e.questionText, n: 0, share: 0 }
    entry.n += 1
    entry.share += got / max
    acc.set(e.questionKey, entry)
  }
  return Array.from(acc.entries())
    .map(([key, e]) => ({
      key,
      text: e.text,
      essays: e.n,
      meanShare: round(e.share / e.n, 4),
      smallSample: e.n < SMALL_SAMPLE_ESSAYS,
    }))
    .sort((a, b) => a.meanShare - b.meanShare || a.key.localeCompare(b.key))
}

/**
 * How often a teacher's review changed the AI's total, in marks. Built from
 * the objective marks, so "raised" and "lowered" are measured in the same
 * unit on both sides: the AI's total against the total after the teacher's
 * objective adjustments.
 */
export interface MarkAgreement {
  reviewed: number
  unchanged: number
  raised: number
  lowered: number
  /** Mean absolute change in total marks over the essays a teacher changed. */
  meanAbsChangeWhenChanged: number
}

export function markAgreement(
  essays: ReadonlyArray<MarkedEssay & { reviewed: boolean }>,
): MarkAgreement {
  let reviewed = 0
  let unchanged = 0
  let raised = 0
  let lowered = 0
  let absSum = 0
  for (const e of essays) {
    if (!e.reviewed || e.aos.length === 0) continue
    reviewed += 1
    const change = e.aos.reduce((sum, a) => sum + (a.marks - a.aiMarks), 0)
    if (change === 0) unchanged += 1
    else {
      absSum += Math.abs(change)
      if (change > 0) raised += 1
      else lowered += 1
    }
  }
  const changed = raised + lowered
  return {
    reviewed,
    unchanged,
    raised,
    lowered,
    meanAbsChangeWhenChanged: changed > 0 ? round(absSum / changed, 2) : 0,
  }
}
