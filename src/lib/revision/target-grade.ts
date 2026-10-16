/**
 * The target grade a student set for themselves, read from this device.
 *
 * Two places can hold it. 'english-hub-target-grade' is a direct choice and is
 * read first. The Study Plan saves its answers under 'english-hub-study-plan',
 * with the grade as a range ('4-5', '6-7' or '8-9'), whose upper value is the
 * target.
 *
 * THERE IS NO DEFAULT, and that is the point of this file (16 October 2026).
 * The /revision sidebar had its own reader that fell back to 7, so every
 * visitor who had set nothing, a brand-new 14-year-old included, was shown
 * "Target grade: Grade 7". The hub's hero pill already read the same keys
 * honestly, returning nothing when nothing was set; the two readers had simply
 * drifted apart. Both now use this one. A target is the student's own choice,
 * or it is absent.
 */

export const TARGET_GRADE_KEY = 'english-hub-target-grade'
export const STUDY_PLAN_KEY = 'english-hub-study-plan'

export type TargetGrade = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9

/** The grade the student explicitly set, or null if they never did. */
export function readExplicitTargetGrade(): TargetGrade | null {
  try {
    const direct = localStorage.getItem(TARGET_GRADE_KEY)
    if (direct) {
      const parsed = parseInt(direct, 10)
      if (!Number.isNaN(parsed) && parsed >= 1 && parsed <= 9) return parsed as TargetGrade
    }
    const plan = localStorage.getItem(STUDY_PLAN_KEY)
    if (plan) {
      const parsed = JSON.parse(plan) as { answers?: { grade?: string } }
      const g = parsed?.answers?.grade
      if (g === '4-5') return 5
      if (g === '6-7') return 7
      if (g === '8-9') return 9
    }
  } catch {
    // Absent, blocked or malformed storage means "not set".
  }
  return null
}
