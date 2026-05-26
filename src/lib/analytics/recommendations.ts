// ─── Recommendation Engine ──────────────────────────────────────────────────

import type { WeakArea, ClassAnalytics, Recommendation, StudentAnalytics } from './types'
import { percentageToGCSEGradeLabel } from '@/lib/grades'

// Modules/topics that are commonly tested heavily by each exam board.
// These get priority 3 recommendations when students are weak in them.
const HIGH_WEIGHT_TOPICS: Record<string, string[]> = {
  AQA: [
    'creative-writing',
    'language-analysis',
    'unseen-poetry',
    'shakespeare',
    'narrative-voice',
    'structure-analysis',
  ],
  Edexcel: [
    'transactional-writing',
    'language-analysis',
    'shakespeare',
    'poetry-anthology',
    'prose-study',
    'spoken-language',
  ],
  OCR: [
    'creative-writing',
    'reading-comprehension',
    'shakespeare',
    'modern-prose',
    'poetry-comparison',
  ],
  WJEC: [
    'oracy',
    'reading-comprehension',
    'creative-prose',
    'shakespeare',
    'poetry-comparison',
    'transactional-writing',
  ],
}

/**
 * Generate class-level recommendations based on weak areas and class data.
 */
export function generateRecommendations(
  weakAreas: WeakArea[],
  classData: ClassAnalytics,
  examBoard?: string,
): Recommendation[] {
  const recommendations: Recommendation[] = []

  // ── Priority 1: Critical weak areas (avg < 40%) ────────────────────────
  const criticalAreas = weakAreas.filter((w) => w.severity === 'critical')
  for (const area of criticalAreas) {
    // Find which students are struggling in this module
    const affectedStudents = classData.students.filter((s) =>
      s.quizScores.some((q) => q.moduleId === area.moduleId && q.score < 50),
    )

    recommendations.push({
      priority: 1,
      title: `Urgent: ${area.moduleName} needs attention`,
      description: `Average is ${percentageToGCSEGradeLabel(area.avgScore)} across ${area.totalStudentsAttempted} students in "${area.courseName}". ${area.studentsBelowThreshold} student(s) scored below Grade 5.`,
      affectedStudentCount: affectedStudents.length,
      affectedStudentIds: affectedStudents.map((s) => s.studentId),
      suggestedAction: `Schedule a targeted revision session on "${area.moduleName}". Consider re-teaching core concepts and assigning additional practice from the "${area.courseName}" course.`,
      courseIds: [area.courseId],
    })
  }

  // ── Priority 2: Areas where >50% of class is struggling ───────────────
  const widespreadAreas = weakAreas.filter(
    (w) =>
      w.severity !== 'critical' &&
      w.totalStudentsAttempted > 0 &&
      w.studentsBelowThreshold / w.totalStudentsAttempted > 0.5,
  )

  for (const area of widespreadAreas) {
    const affectedStudents = classData.students.filter((s) =>
      s.quizScores.some((q) => q.moduleId === area.moduleId && q.score < 50),
    )

    recommendations.push({
      priority: 2,
      title: `Widespread gap: ${area.moduleName}`,
      description: `Over half the class (${area.studentsBelowThreshold}/${area.totalStudentsAttempted}) scored below Grade 5 on "${area.moduleName}" in "${area.courseName}".`,
      affectedStudentCount: affectedStudents.length,
      affectedStudentIds: affectedStudents.map((s) => s.studentId),
      suggestedAction: `This is a whole-class issue. Consider a group activity or guided practice session on "${area.moduleName}" before moving on.`,
      courseIds: [area.courseId],
    })
  }

  // ── Priority 3: High-weight exam topics that are weak ─────────────────
  if (examBoard) {
    const highWeightTopics = HIGH_WEIGHT_TOPICS[examBoard] ?? []
    const highWeightWeakAreas = weakAreas.filter(
      (w) =>
        w.severity !== 'critical' && // already covered in P1
        highWeightTopics.some(
          (topic) =>
            w.moduleId.toLowerCase().includes(topic) ||
            w.moduleName.toLowerCase().includes(topic.replace(/-/g, ' ')),
        ),
    )

    for (const area of highWeightWeakAreas) {
      // Avoid duplicating a P2 recommendation
      const alreadyRecommended = recommendations.some(
        (r) => r.courseIds.includes(area.courseId) && r.title.includes(area.moduleName),
      )
      if (alreadyRecommended) continue

      recommendations.push({
        priority: 3,
        title: `Exam focus: ${area.moduleName}`,
        description: `"${area.moduleName}" is heavily weighted on the ${examBoard} exam and students averaged ${area.avgScore}% in "${area.courseName}".`,
        affectedStudentCount: area.totalStudentsAttempted,
        affectedStudentIds: classData.students
          .filter((s) => s.quizScores.some((q) => q.moduleId === area.moduleId))
          .map((s) => s.studentId),
        suggestedAction: `Prioritise this topic in upcoming lessons. Assign the "${area.courseName}" modules as homework and revisit before mocks.`,
        courseIds: [area.courseId],
      })
    }
  }

  // Sort by priority, then by affected student count descending
  recommendations.sort((a, b) => {
    if (a.priority !== b.priority) return a.priority - b.priority
    return b.affectedStudentCount - a.affectedStudentCount
  })

  return recommendations
}

/**
 * Generate personalised recommendations for a single student.
 * Returns an array of human-readable recommendation strings.
 */
export function generateStudentRecommendations(
  studentAnalytics: StudentAnalytics,
  weakAreas: WeakArea[],
  classAvgQuizScore?: number,
): string[] {
  const recs: string[] = []

  // ── Weak modules: student is significantly below average ──────────────
  for (const weakness of studentAnalytics.weaknesses) {
    const classWeak = weakAreas.find((w) => w.courseId === weakness.courseId)
    if (classWeak) {
      recs.push(
        `Focus on "${weakness.courseName}" - your average is ${percentageToGCSEGradeLabel(weakness.avgScore)} vs the class average of ${percentageToGCSEGradeLabel(classWeak.avgScore)}.`,
      )
    } else {
      recs.push(
        `Focus on "${weakness.courseName}" - your average is ${percentageToGCSEGradeLabel(weakness.avgScore)}. Try revisiting the course modules.`,
      )
    }
  }

  // ── Strengths: positive reinforcement ─────────────────────────────────
  for (const strength of studentAnalytics.strengths.slice(0, 2)) {
    if (classAvgQuizScore && strength.avgScore > classAvgQuizScore * 1.2) {
      recs.push(
        `Great work on "${strength.courseName}" - you're performing above the class average!`,
      )
    }
  }

  // ── Completion rate recommendations ───────────────────────────────────
  if (studentAnalytics.completionRate < 30) {
    recs.push(
      `You've completed ${studentAnalytics.completionRate}% of your modules. Try to work through at least one module per week to stay on track.`,
    )
  } else if (studentAnalytics.completionRate < 60) {
    recs.push(
      `Good progress - ${studentAnalytics.completionRate}% of modules completed. Keep up the momentum to improve your predicted grade.`,
    )
  }

  // ── Trajectory-based advice ───────────────────────────────────────────
  if (studentAnalytics.trajectory === 'declining') {
    recs.push(
      'Your scores have been declining recently. Consider revisiting earlier modules or asking your teacher for help.',
    )
  } else if (studentAnalytics.trajectory === 'improving') {
    recs.push(
      'Your scores are improving - great effort! Keep going to push your predicted grade higher.',
    )
  }

  // ── Practice encouragement ────────────────────────────────────────────
  if (studentAnalytics.practiceSessions < 5) {
    recs.push(
      'Try using the practice question tool more regularly - it helps reinforce what you learn in courses.',
    )
  }

  return recs
}
