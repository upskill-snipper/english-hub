// ─── Trajectory & Grade Prediction ──────────────────────────────────────────

const GRADE_BOUNDARIES: Record<string, { grade: string; min: number }[]> = {
  Edexcel: [
    { grade: '9', min: 83 },
    { grade: '8', min: 77 },
    { grade: '7', min: 71 },
    { grade: '6', min: 65 },
    { grade: '5', min: 59 },
    { grade: '4', min: 53 },
    { grade: '3', min: 40 },
    { grade: '2', min: 28 },
    { grade: '1', min: 16 },
  ],
  AQA: [
    { grade: '9', min: 76 },
    { grade: '8', min: 69 },
    { grade: '7', min: 64 },
    { grade: '6', min: 58 },
    { grade: '5', min: 51 },
    { grade: '4', min: 46 },
    { grade: '3', min: 34 },
    { grade: '2', min: 22 },
    { grade: '1', min: 10 },
  ],
  OCR: [
    { grade: '9', min: 80 },
    { grade: '8', min: 73 },
    { grade: '7', min: 67 },
    { grade: '6', min: 60 },
    { grade: '5', min: 53 },
    { grade: '4', min: 47 },
    { grade: '3', min: 35 },
    { grade: '2', min: 23 },
    { grade: '1', min: 11 },
  ],
  WJEC: [
    { grade: '9', min: 82 },
    { grade: '8', min: 75 },
    { grade: '7', min: 69 },
    { grade: '6', min: 62 },
    { grade: '5', min: 55 },
    { grade: '4', min: 49 },
    { grade: '3', min: 37 },
    { grade: '2', min: 25 },
    { grade: '1', min: 13 },
  ],
  default: [
    { grade: '9', min: 90 },
    { grade: '8', min: 80 },
    { grade: '7', min: 70 },
    { grade: '6', min: 60 },
    { grade: '5', min: 50 },
    { grade: '4', min: 40 },
    { grade: '3', min: 30 },
    { grade: '2', min: 20 },
    { grade: '1', min: 0 },
  ],
}

/**
 * Calculate trajectory from a series of dated scores.
 * Uses a comparison of the most recent 2-week average vs the previous 2-week average.
 * Falls back to comparing the last half of scores against the first half.
 */
export function calculateTrajectory(
  scores: { date: string; score: number }[]
): 'improving' | 'stable' | 'declining' {
  if (scores.length < 3) return 'stable'

  // Sort chronologically
  const sorted = [...scores].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  )

  const now = new Date()
  const twoWeeksAgo = new Date(now.getTime() - 14 * 24 * 60 * 60 * 1000)
  const fourWeeksAgo = new Date(now.getTime() - 28 * 24 * 60 * 60 * 1000)

  const recentScores = sorted.filter((s) => new Date(s.date) >= twoWeeksAgo)
  const previousScores = sorted.filter(
    (s) => new Date(s.date) >= fourWeeksAgo && new Date(s.date) < twoWeeksAgo
  )

  let recentAvg: number
  let previousAvg: number

  if (recentScores.length >= 2 && previousScores.length >= 2) {
    // Use the time-window approach
    recentAvg = recentScores.reduce((s, x) => s + x.score, 0) / recentScores.length
    previousAvg = previousScores.reduce((s, x) => s + x.score, 0) / previousScores.length
  } else {
    // Fall back to splitting the array in half
    const mid = Math.floor(sorted.length / 2)
    const firstHalf = sorted.slice(0, mid)
    const secondHalf = sorted.slice(mid)

    previousAvg = firstHalf.reduce((s, x) => s + x.score, 0) / firstHalf.length
    recentAvg = secondHalf.reduce((s, x) => s + x.score, 0) / secondHalf.length
  }

  const diff = recentAvg - previousAvg

  if (diff > 5) return 'improving'
  if (diff < -5) return 'declining'
  return 'stable'
}

/**
 * Predict a GCSE grade (1-9) from quiz/assessment performance.
 *
 * - Base grade from average score mapped against exam board boundaries
 * - Boost by +1 if trajectory is improving AND completion rate > 70%
 * - Penalise by -1 if trajectory is declining AND completion rate < 40%
 */
export function predictGrade(
  avgScore: number,
  completionRate: number,
  trajectory: 'improving' | 'stable' | 'declining',
  examBoard?: string
): string {
  const boundaries =
    (examBoard && GRADE_BOUNDARIES[examBoard]) || GRADE_BOUNDARIES.default

  let baseGrade = 1
  for (const { grade, min } of boundaries) {
    if (avgScore >= min) {
      baseGrade = Number(grade)
      break
    }
  }

  // Adjust based on trajectory and engagement
  let adjustedGrade = baseGrade
  if (trajectory === 'improving' && completionRate > 70) {
    adjustedGrade = Math.min(9, baseGrade + 1)
  } else if (trajectory === 'declining' && completionRate < 40) {
    adjustedGrade = Math.max(1, baseGrade - 1)
  }

  return String(adjustedGrade)
}
