// ─── Grade Predictor ─────────────────────────────────────────────────────────
// Convert raw AO marks on an AQA GCSE English paper into a predicted 1-9 grade.
//
// AQA does not publish a fixed mark-to-grade table — grade boundaries move
// year on year based on cohort performance. The thresholds below are averaged
// from the past five years of published AQA grade boundaries for 8700 and 8702.
// They are intentionally presented as "indicative" to the student.
//
// Source: https://filestore.aqa.org.uk/sites/default/files/resources/grade-boundaries
// ────────────────────────────────────────────────────────────────────────────

import type { AOScore } from "./mark-schemes/types"

// ─── Types ───────────────────────────────────────────────────────────────────

export interface GradePrediction {
  /** Numeric GCSE grade ("9" = highest, "1" = lowest, "U" = ungraded). */
  grade: string
  /** Grade band, used for UI colour coding and summary messaging. */
  band: "Grade 1-3" | "Grade 4-5" | "Grade 6-7" | "Grade 8-9"
  /** Percentage mark (0-100). */
  percentage: number
  /** Total marks awarded out of the max available. */
  totalMarks: number
  /** Maximum marks available on the paper (or question). */
  maxMarks: number
  /** Distance (in marks) to the next grade up. */
  marksToNextGrade: number
  /** The grade above the current one, if any. */
  nextGrade?: string
}

// ─── Thresholds ──────────────────────────────────────────────────────────────

/**
 * Indicative percentage thresholds (5-year rolling average) for the AQA
 * English Language (8700) and Literature (8702) full-paper grade boundaries.
 * These are *lower* bounds — a mark >= threshold earns that grade.
 */
const AQA_ENGLISH_THRESHOLDS: ReadonlyArray<{ grade: string; pct: number }> = [
  { grade: "9", pct: 82 },
  { grade: "8", pct: 73 },
  { grade: "7", pct: 64 },
  { grade: "6", pct: 55 },
  { grade: "5", pct: 46 },
  { grade: "4", pct: 37 },
  { grade: "3", pct: 28 },
  { grade: "2", pct: 19 },
  { grade: "1", pct: 10 },
]

// ─── Public API ──────────────────────────────────────────────────────────────

/**
 * Predict an indicative GCSE grade from a list of per-AO scores.
 *
 * @param aoScores - Marks awarded per assessment objective.
 * @param questionMaxMarks - Optional override for the denominator. If omitted
 *                           we sum each AO's maxMarks.
 */
export function predictGrade(
  aoScores: readonly AOScore[],
  questionMaxMarks?: number,
): GradePrediction {
  const totalMarks = aoScores.reduce((sum, ao) => sum + ao.marks, 0)
  const maxMarks =
    questionMaxMarks ?? aoScores.reduce((sum, ao) => sum + ao.maxMarks, 0)

  const percentage = maxMarks > 0 ? (totalMarks / maxMarks) * 100 : 0

  const { grade, nextGrade } = pickGrade(percentage)
  const band = toGradeBand(grade)
  const marksToNextGrade = calculateMarksToNextGrade(
    totalMarks,
    maxMarks,
    nextGrade,
  )

  return {
    grade,
    band,
    percentage: round(percentage, 1),
    totalMarks,
    maxMarks,
    marksToNextGrade,
    nextGrade,
  }
}

/**
 * Predict a grade from a total mark / max mark pair (no AO breakdown).
 */
export function predictGradeFromTotals(
  totalMarks: number,
  maxMarks: number,
): GradePrediction {
  const synthetic: AOScore[] = [
    {
      id: "TOTAL",
      label: "Total",
      marks: totalMarks,
      maxMarks,
      band: "",
      justification: "",
    },
  ]
  return predictGrade(synthetic, maxMarks)
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function pickGrade(percentage: number): { grade: string; nextGrade?: string } {
  for (let i = 0; i < AQA_ENGLISH_THRESHOLDS.length; i++) {
    const threshold = AQA_ENGLISH_THRESHOLDS[i]
    if (percentage >= threshold.pct) {
      const above = i > 0 ? AQA_ENGLISH_THRESHOLDS[i - 1].grade : undefined
      return { grade: threshold.grade, nextGrade: above }
    }
  }
  return { grade: "U", nextGrade: "1" }
}

function toGradeBand(grade: string): GradePrediction["band"] {
  switch (grade) {
    case "9":
    case "8":
      return "Grade 8-9"
    case "7":
    case "6":
      return "Grade 6-7"
    case "5":
    case "4":
      return "Grade 4-5"
    default:
      return "Grade 1-3"
  }
}

function calculateMarksToNextGrade(
  totalMarks: number,
  maxMarks: number,
  nextGrade?: string,
): number {
  if (!nextGrade || maxMarks === 0) return 0
  const next = AQA_ENGLISH_THRESHOLDS.find((t) => t.grade === nextGrade)
  if (!next) return 0
  const marksNeeded = Math.ceil((next.pct / 100) * maxMarks)
  return Math.max(0, marksNeeded - totalMarks)
}

function round(value: number, dp: number): number {
  const factor = Math.pow(10, dp)
  return Math.round(value * factor) / factor
}
