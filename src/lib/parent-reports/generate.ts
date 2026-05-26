/**
 * Weekly Parent Report generator.
 *
 * Pure function. No I/O. Callers (cron, tests) pass in the pre-fetched slice
 * and receive the minimised, Children's-Code-compliant report payload back.
 *
 * Children's Code alignment:
 *   - §5 Detrimental use      → weaknesses re-framed constructively, never
 *                               "Ava is struggling" - always "room to grow".
 *   - §8 Data minimisation    → NEVER includes essay body, AI marking rationale,
 *                               feedback narrative, or predicted-grade labels.
 *                               Only counts, averages, category labels, and one
 *                               rule-based suggestion.
 *
 * British English throughout.
 */

import type { Subject } from '@prisma/client'

// ─── Types ───────────────────────────────────────────────────────────────

export type AssessmentObjective = 'AO1' | 'AO2' | 'AO3' | 'AO4'

/**
 * Minimal shape of the child record the generator needs. We intentionally
 * narrow this so callers (and tests) cannot accidentally leak extra PII
 * into the rendering pipeline.
 */
export interface ReportChild {
  readonly id: string
  readonly firstName: string
  readonly dateOfBirth: Date
  readonly privacy: {
    readonly aiOptOut: boolean
    readonly profileVisibility: 'PRIVATE' | 'SCHOOL_ONLY' | 'PUBLIC'
  }
}

/**
 * Per-essay summary supplied to the generator. The body is deliberately
 * absent - if a caller needs it, it must be fetched separately and never
 * re-enters this pipeline.
 */
export interface ReportEssaySummary {
  readonly id: string
  readonly subject: Subject
  readonly createdAt: Date
  /** 0-100 overall score. Null if unmarked. */
  readonly overallScore: number | null
  /**
   * Per-AO scores (0-100). Keys match the four AO buckets exposed by
   * the AIFeedback row (grammar → AO1, structure → AO2, argument → AO3,
   * vocabulary → AO4). Any key may be absent if the mark did not cover it.
   */
  readonly aoScores: Partial<Record<AssessmentObjective, number>>
}

/**
 * Derived progress signals for the week. Computed outside this module
 * (from essays + assignment submissions + session logs) and passed in flat.
 */
export interface ReportProgress {
  /** Minutes spent across the week on-platform. */
  readonly timeSpentMinutes: number
  /** Consecutive days active ending at `weekEndsAt`. */
  readonly streakDays: number
  /** Count of assignments the child completed this week. */
  readonly assignmentsCompleted: number
  /** True if the streak was broken (≥1 gap day) within the week. */
  readonly streakBrokenMidWeek: boolean
}

export interface GenerateOptions {
  /** Week boundary (Sunday 00:00 UTC). */
  readonly weekStartsAt: Date
  /** Week boundary (following Sunday 00:00 UTC, exclusive). */
  readonly weekEndsAt: Date
}

export type IneligibleReason = 'CHILD_UNDER_13' | 'AI_OPT_OUT' | 'PROFILE_PRIVATE'

/** The Children's-Code-compliant report payload. Never contains prose from
 *  marking rationale, teacher notes, or essay bodies. */
export interface WeeklyReportPayload {
  readonly childId: string
  readonly childFirstName: string
  readonly weekStartsAt: Date
  readonly weekEndsAt: Date
  readonly essaysCompleted: number
  readonly averageScore: number | null
  readonly strongestAO: AssessmentObjective | null
  readonly weakestAO: AssessmentObjective | null
  readonly timeSpentMinutes: number
  readonly streakDays: number
  readonly streakBrokenMidWeek: boolean
  readonly assignmentsCompleted: number
  /** 3 short positive bullets. Empty array if no data. */
  readonly strengths: readonly string[]
  /** 3 short constructive bullets. Empty array if no data. */
  readonly focusAreas: readonly string[]
  /** Exactly one suggestion, or null if no data. */
  readonly suggestion: string | null
}

export type GenerateResult =
  | { readonly ok: true; readonly report: WeeklyReportPayload }
  | { readonly ok: false; readonly reason: IneligibleReason }

// ─── AO copy (constructive framing - Children's Code §5) ─────────────────

/**
 * Positive / constructive phrases keyed by AO. "Strong" is used when the AO
 * is the child's top-scoring objective, "Growing" when it is the lowest.
 * Every "Growing" line uses belief-forward language - never deficit language.
 */
const AO_STRENGTH_COPY: Record<AssessmentObjective, string> = {
  AO1: 'Clear, controlled writing - technical accuracy shone this week.',
  AO2: 'Strong structural choices - ideas flowed in a deliberate order.',
  AO3: 'Thoughtful arguments - evidence was selected with real care.',
  AO4: 'Rich vocabulary - language choices carried the writing.',
}

const AO_FOCUS_COPY: Record<AssessmentObjective, string> = {
  AO1: 'Room to grow on technical accuracy - a proof-read pass can lift marks quickly.',
  AO2: 'Room to grow on structure - planning paragraphs before writing helps.',
  AO3: 'Room to grow on evidence and analysis - one more quote per point goes a long way.',
  AO4: 'Room to grow on vocabulary - noting new words while reading builds range.',
}

const AO_SUGGESTION: Record<AssessmentObjective, string> = {
  AO1: 'Try a five-minute proof-read on the next essay. Small fixes make a real difference.',
  AO2: 'Spend two minutes planning the paragraph order before writing the next essay.',
  AO3: 'Add one extra quotation per argument in the next essay to deepen analysis.',
  AO4: 'Pick three new words from this week\u2019s reading and use them in the next essay.',
}

// ─── Helpers ─────────────────────────────────────────────────────────────

function calculateAgeYears(dob: Date, on: Date): number {
  let age = on.getUTCFullYear() - dob.getUTCFullYear()
  const monthDelta = on.getUTCMonth() - dob.getUTCMonth()
  if (monthDelta < 0 || (monthDelta === 0 && on.getUTCDate() < dob.getUTCDate())) {
    age -= 1
  }
  return age
}

/**
 * Average the per-AO scores across the provided essays, returning the AO
 * with the highest and lowest averages. Ignores AOs with zero samples so
 * a single un-scored AO does not skew the ranking.
 */
function rankAOs(essays: readonly ReportEssaySummary[]): {
  strongest: AssessmentObjective | null
  weakest: AssessmentObjective | null
} {
  const totals: Record<AssessmentObjective, { sum: number; n: number }> = {
    AO1: { sum: 0, n: 0 },
    AO2: { sum: 0, n: 0 },
    AO3: { sum: 0, n: 0 },
    AO4: { sum: 0, n: 0 },
  }

  for (const essay of essays) {
    for (const ao of ['AO1', 'AO2', 'AO3', 'AO4'] as const) {
      const score = essay.aoScores[ao]
      if (typeof score === 'number' && Number.isFinite(score)) {
        totals[ao].sum += score
        totals[ao].n += 1
      }
    }
  }

  const averaged = (['AO1', 'AO2', 'AO3', 'AO4'] as const)
    .filter((ao) => totals[ao].n > 0)
    .map((ao) => ({ ao, avg: totals[ao].sum / totals[ao].n }))

  if (averaged.length === 0) {
    return { strongest: null, weakest: null }
  }

  averaged.sort((a, b) => b.avg - a.avg)
  const strongest = averaged[0]!.ao
  const weakest = averaged[averaged.length - 1]!.ao
  // If only one AO has data, don't surface a "weakest" - it would be the
  // same as the strongest and read as contradictory to the parent.
  return {
    strongest,
    weakest: averaged.length > 1 ? weakest : null,
  }
}

function clampRound(value: number): number {
  return Math.round(Math.max(0, Math.min(100, value)))
}

// ─── Entry point ─────────────────────────────────────────────────────────

/**
 * Generate a weekly parent report. Pure - no database, no email, no logging.
 *
 * Eligibility (Children's Code §5 + §8):
 *   1. Child must be ≥ 13 (belt-and-braces; platform enforces this upstream).
 *   2. Child must not have `aiOptOut`.
 *   3. Child's `profileVisibility` must not be `PRIVATE`.
 *
 * Any fail returns `{ ok: false, reason }` and the caller skips persistence
 * and delivery for that child.
 */
export function generateWeeklyReport(
  child: ReportChild,
  essays: readonly ReportEssaySummary[],
  progress: ReportProgress,
  options: GenerateOptions,
): GenerateResult {
  // ── Eligibility gates ────────────────────────────────────────────────

  const age = calculateAgeYears(child.dateOfBirth, options.weekEndsAt)
  if (age < 13) {
    return { ok: false, reason: 'CHILD_UNDER_13' }
  }
  if (child.privacy.aiOptOut) {
    return { ok: false, reason: 'AI_OPT_OUT' }
  }
  if (child.privacy.profileVisibility === 'PRIVATE') {
    return { ok: false, reason: 'PROFILE_PRIVATE' }
  }

  // ── Aggregate essay stats ────────────────────────────────────────────

  const essaysCompleted = essays.length
  const scoredEssays = essays.filter(
    (e) => typeof e.overallScore === 'number' && Number.isFinite(e.overallScore),
  )

  const averageScore =
    scoredEssays.length > 0
      ? clampRound(
          scoredEssays.reduce((acc, e) => acc + (e.overallScore as number), 0) /
            scoredEssays.length,
        )
      : null

  const { strongest, weakest } = rankAOs(essays)

  // ── Compose strengths / focus bullets ────────────────────────────────

  const strengths: string[] = []
  const focusAreas: string[] = []

  if (strongest) {
    strengths.push(AO_STRENGTH_COPY[strongest])
  }
  if (progress.streakDays >= 3 && !progress.streakBrokenMidWeek) {
    strengths.push(`Showed up on ${progress.streakDays} days in a row - consistency is building.`)
  }
  if (progress.assignmentsCompleted > 0) {
    strengths.push(
      progress.assignmentsCompleted === 1
        ? 'Completed an assignment this week.'
        : `Completed ${progress.assignmentsCompleted} assignments this week.`,
    )
  }
  if (essaysCompleted > 0 && averageScore !== null && averageScore >= 70) {
    strengths.push(
      `Held a strong average of ${averageScore}% across ${essaysCompleted} essay${essaysCompleted === 1 ? '' : 's'}.`,
    )
  }

  if (weakest) {
    focusAreas.push(AO_FOCUS_COPY[weakest])
  }
  if (progress.streakBrokenMidWeek) {
    focusAreas.push(
      'Room to grow on consistency - a short session on most days tends to stick better than one long one.',
    )
  }
  if (essaysCompleted === 0) {
    focusAreas.push(
      'No essays this week - a single short response next week will keep momentum going.',
    )
  }
  if (progress.timeSpentMinutes > 0 && progress.timeSpentMinutes < 30) {
    focusAreas.push('A little more time on the platform next week will help ideas settle.')
  }

  // Cap at 3 bullets each - parents skim these.
  const strengthsCapped = strengths.slice(0, 3)
  const focusCapped = focusAreas.slice(0, 3)

  // ── Suggestion (rule-based, single string) ───────────────────────────

  let suggestion: string | null = null
  if (weakest) {
    suggestion = AO_SUGGESTION[weakest]
  } else if (strongest) {
    // High-performer / single-AO case: still offer a forward-looking nudge.
    suggestion =
      'Keep going with the current approach - try stretching by choosing a slightly harder prompt next week.'
  } else if (essaysCompleted === 0) {
    suggestion = 'One short essay next week is the simplest way to get started again.'
  }

  return {
    ok: true,
    report: {
      childId: child.id,
      childFirstName: child.firstName,
      weekStartsAt: options.weekStartsAt,
      weekEndsAt: options.weekEndsAt,
      essaysCompleted,
      averageScore,
      strongestAO: strongest,
      weakestAO: weakest,
      timeSpentMinutes: progress.timeSpentMinutes,
      streakDays: progress.streakDays,
      streakBrokenMidWeek: progress.streakBrokenMidWeek,
      assignmentsCompleted: progress.assignmentsCompleted,
      strengths: strengthsCapped,
      focusAreas: focusCapped,
      suggestion,
    },
  }
}
