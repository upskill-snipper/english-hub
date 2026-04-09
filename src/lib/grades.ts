// ─── GCSE Grade Utilities ────────────────────────────────────────────────────
// UK GCSE 1-9 grading system. Used across the entire platform to convert
// percentage scores to GCSE grades.
// ──────────────────────────────────────────────────────────────────────────────

export type GCSEGrade = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9

/**
 * Grade boundaries for the UK GCSE 1-9 system.
 * Each entry defines the minimum percentage required for that grade.
 */
export const GCSE_GRADE_BOUNDARIES: { grade: GCSEGrade; minPercentage: number }[] = [
  { grade: 9, minPercentage: 90 },
  { grade: 8, minPercentage: 80 },
  { grade: 7, minPercentage: 70 },
  { grade: 6, minPercentage: 60 },
  { grade: 5, minPercentage: 50 },
  { grade: 4, minPercentage: 40 },
  { grade: 3, minPercentage: 30 },
  { grade: 2, minPercentage: 20 },
  { grade: 1, minPercentage: 0 },
]

/**
 * Convert a percentage score (0-100) to a GCSE grade (1-9).
 *
 * @param percentage - Score as a percentage (0-100)
 * @returns The GCSE grade number (1-9)
 *
 * @example
 * percentageToGCSEGrade(92) // => 9
 * percentageToGCSEGrade(75) // => 7
 * percentageToGCSEGrade(15) // => 1
 */
export function percentageToGCSEGrade(percentage: number): GCSEGrade {
  const clamped = Math.max(0, Math.min(100, percentage))
  for (const { grade, minPercentage } of GCSE_GRADE_BOUNDARIES) {
    if (clamped >= minPercentage) return grade
  }
  return 1
}

/**
 * Convert a percentage to a formatted grade string like "Grade 7".
 *
 * @param percentage - Score as a percentage (0-100)
 * @returns Formatted string e.g. "Grade 7"
 */
export function percentageToGCSEGradeLabel(percentage: number): string {
  return `Grade ${percentageToGCSEGrade(percentage)}`
}

/**
 * Format a percentage with its GCSE grade in brackets.
 * e.g. "72% (Grade 7)"
 *
 * @param percentage - Score as a percentage (0-100)
 * @returns Formatted string e.g. "72% (Grade 7)"
 */
export function formatPercentageWithGrade(percentage: number): string {
  return `${Math.round(percentage)}% (Grade ${percentageToGCSEGrade(percentage)})`
}

/**
 * Get a colour class for a GCSE grade (for use in Tailwind).
 * Grade 9-8: gold/emerald (excellent)
 * Grade 7-6: blue (good)
 * Grade 5-4: amber (pass)
 * Grade 3-1: red (below standard pass)
 */
export function gcseGradeColor(grade: number): string {
  if (grade >= 8) return 'text-emerald-400'
  if (grade >= 6) return 'text-blue-400'
  if (grade >= 4) return 'text-amber-400'
  return 'text-red-400'
}

/**
 * Get a background colour class for a GCSE grade.
 */
export function gcseGradeBg(grade: number): string {
  if (grade >= 8) return 'bg-emerald-500/10'
  if (grade >= 6) return 'bg-blue-500/10'
  if (grade >= 4) return 'bg-amber-500/10'
  return 'bg-red-500/10'
}

/**
 * Get the grade band label for a GCSE grade.
 * Used in charts and grade distribution displays.
 */
export function gcseGradeBand(grade: number): string {
  if (grade >= 8) return 'Grade 8-9'
  if (grade >= 6) return 'Grade 6-7'
  if (grade >= 4) return 'Grade 4-5'
  if (grade >= 2) return 'Grade 2-3'
  return 'Grade 1'
}

/**
 * Convert a letter grade (A*, A, B, C, D, E, F, U) to a GCSE 1-9 grade.
 * Useful for migrating legacy data.
 */
export function letterGradeToGCSE(letter: string): GCSEGrade {
  switch (letter.toUpperCase().trim()) {
    case 'A*': return 9
    case 'A': return 8
    case 'B': return 7
    case 'C': return 6
    case 'D': return 5
    case 'E': return 4
    case 'F': return 3
    case 'U': return 1
    default: return 1
  }
}
