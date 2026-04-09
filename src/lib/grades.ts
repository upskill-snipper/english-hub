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
 * Format a percentage with its GCSE grade — grade first, percentage in brackets.
 * e.g. "Grade 7 (72%)"
 *
 * @param percentage - Score as a percentage (0-100)
 * @returns Formatted string e.g. "Grade 7 (72%)"
 */
export function formatPercentageWithGrade(percentage: number): string {
  return `Grade ${percentageToGCSEGrade(percentage)} (${Math.round(percentage)}%)`
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

// ─── Working At / Predicted / Target Grade Utilities ─────────────────────────

/**
 * Calculate a "Working At" grade from recent assessment scores.
 * Takes the average of the last N scores and converts to a GCSE grade.
 *
 * @param recentScores - Array of percentage scores (most recent last)
 * @param count - How many recent scores to use (default 5)
 */
export function calculateWorkingAtGrade(recentScores: number[], count = 5): GCSEGrade {
  if (recentScores.length === 0) return 1
  const recent = recentScores.slice(-count)
  const avg = recent.reduce((a, b) => a + b, 0) / recent.length
  return percentageToGCSEGrade(avg)
}

/**
 * Calculate a "Predicted" grade based on the student's trajectory.
 * If scores are improving, predicts higher; if declining, predicts lower.
 *
 * @param recentScores - Array of percentage scores (most recent last)
 * @param count - How many recent scores to analyse (default 5)
 */
export function calculatePredictedGrade(recentScores: number[], count = 5): GCSEGrade {
  if (recentScores.length < 2) return calculateWorkingAtGrade(recentScores, count)

  const recent = recentScores.slice(-count)
  const avg = recent.reduce((a, b) => a + b, 0) / recent.length

  // Calculate trend: compare first half average to second half average
  const mid = Math.floor(recent.length / 2)
  const firstHalf = recent.slice(0, mid)
  const secondHalf = recent.slice(mid)
  const firstAvg = firstHalf.reduce((a, b) => a + b, 0) / firstHalf.length
  const secondAvg = secondHalf.reduce((a, b) => a + b, 0) / secondHalf.length
  const trend = secondAvg - firstAvg

  // Project forward: add the trend to the current average
  const projected = Math.max(0, Math.min(100, avg + trend * 0.75))
  return percentageToGCSEGrade(projected)
}

/**
 * Calculate a target grade: 1-2 grades above working at grade.
 * Caps at 9.
 */
export function calculateTargetGrade(workingAtGrade: GCSEGrade): GCSEGrade {
  // Students at grade 7+ get +1, others get +2 (more room to improve)
  const boost = workingAtGrade >= 7 ? 1 : 2
  return Math.min(9, workingAtGrade + boost) as GCSEGrade
}

/**
 * Get the colour class for the predicted vs working-at comparison.
 * Green if predicted > working at, amber if same, red if predicted < working at.
 */
export function predictedGradeColor(predicted: number, workingAt: number): string {
  if (predicted > workingAt) return 'text-emerald-400'
  if (predicted === workingAt) return 'text-amber-400'
  return 'text-red-400'
}

/**
 * Get the background colour for predicted vs working-at comparison.
 */
export function predictedGradeBg(predicted: number, workingAt: number): string {
  if (predicted > workingAt) return 'bg-emerald-500/10 border-emerald-500/20'
  if (predicted === workingAt) return 'bg-amber-500/10 border-amber-500/20'
  return 'bg-red-500/10 border-red-500/20'
}

/**
 * Get "how to get to the next grade" recommendation text.
 * Specific to English GCSE grade transitions.
 */
export function getGradeRecommendation(currentGrade: number): string {
  switch (currentGrade) {
    case 1:
    case 2:
      return 'Focus on reading fluency and writing in full sentences. Practise basic SPaG rules daily.'
    case 3:
      return 'Build paragraph structure using PEEL. Identify basic language techniques and their effects.'
    case 4:
      return 'Use evidence to support points consistently. Begin to explain how writers use language for effect.'
    case 5:
      return 'Develop analysis beyond surface level, begin embedding quotations into sentences fluently.'
    case 6:
      return 'Consistently analyse language effects, use subject terminology accurately, and structure essays with a clear argument.'
    case 7:
      return 'Explore alternative interpretations, integrate context throughout, and use precise academic vocabulary.'
    case 8:
      return 'Produce perceptive, original analysis with sophisticated expression. Evaluate critically across the whole text.'
    case 9:
      return 'Maintain exceptional analytical depth, conceptualised response, and assured scholarly voice throughout.'
    default:
      return ''
  }
}

/**
 * Get personalised recommendations based on the student's weak areas.
 * Returns an array of specific, actionable recommendations.
 */
export function getPersonalisedRecommendations(
  currentGrade: number,
  weakAreas: string[]
): string[] {
  const baseRec = getGradeRecommendation(currentGrade)
  const recs: string[] = []

  if (baseRec) {
    recs.push(`To reach Grade ${currentGrade + 1}: ${baseRec}`)
  }

  // Add weak-area-specific recommendations
  for (const area of weakAreas.slice(0, 3)) {
    const lowerArea = typeof area === 'string' ? area.toLowerCase() : ''
    if (lowerArea.includes('spelling') || lowerArea.includes('spag') || lowerArea.includes('grammar'))
      recs.push('Practise SPaG rules daily using the Grammar & Spelling flashcards.')
    else if (lowerArea.includes('paragraph') || lowerArea.includes('structure'))
      recs.push('Use PEEL paragraph frames to structure analytical responses.')
    else if (lowerArea.includes('quotation') || lowerArea.includes('evidence'))
      recs.push('Practise embedding quotations into analytical sentences.')
    else if (lowerArea.includes('vocabulary') || lowerArea.includes('vocab'))
      recs.push('Learn 5 new academic vocabulary words per week from the Vocabulary Builder.')
    else if (lowerArea.includes('reading') || lowerArea.includes('comprehension'))
      recs.push('Complete daily 10-minute reading exercises to improve comprehension speed.')
    else if (lowerArea.includes('exam') || lowerArea.includes('timed') || lowerArea.includes('time'))
      recs.push('Practise timed responses: 5 minutes planning, 35 minutes writing per essay.')
    else if (lowerArea.includes('analytical') || lowerArea.includes('analysis'))
      recs.push('Focus on explaining HOW and WHY writers use specific techniques.')
    else if (lowerArea.includes('creative') || lowerArea.includes('writing'))
      recs.push('Vary sentence structures: short for impact, complex for description.')
    else if (lowerArea.includes('poetry') || lowerArea.includes('comparison'))
      recs.push('Practise annotating unseen poems under timed conditions using the Poetry Toolkit.')
    else if (lowerArea.includes('context'))
      recs.push('Integrate contextual knowledge throughout responses, not just in the introduction.')
  }

  return recs
}

/**
 * Check whether a year group is post-Y9 (i.e. should use GCSE grades only).
 */
export function isGCSEYearGroup(yearGroup: string | number): boolean {
  const num = typeof yearGroup === 'string'
    ? parseInt(yearGroup.replace(/\D/g, ''), 10)
    : yearGroup
  return num >= 10
}

/**
 * Format a score display based on year group.
 * Post-Y9: shows "Grade X" only (no percentages).
 * Y7-Y9: shows "X%" with grade in brackets.
 */
export function formatScoreForYearGroup(percentage: number, yearGroup: string | number): string {
  if (isGCSEYearGroup(yearGroup)) {
    return `Grade ${percentageToGCSEGrade(percentage)}`
  }
  return formatPercentageWithGrade(percentage)
}
