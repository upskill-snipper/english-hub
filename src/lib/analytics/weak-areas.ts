// ─── Weak Area Identification ────────────────────────────────────────────────

import type { WeakArea } from './types'

interface ModuleScoreData {
  moduleId: string
  moduleName: string
  courseId: string
  courseName: string
  scores: number[] // one per student who attempted
}

/**
 * Identify weak areas across a set of students based on their module quiz scores.
 *
 * @param moduleScores - Pre-aggregated per-module scores (from aggregation layer)
 *   Each entry has the module metadata plus an array of scores (one per student attempt).
 *
 * Algorithm:
 *   1. For each module, compute avg score and % of students below 50%
 *   2. Flag as weak if avg < 60% OR >30% of students scored below 50%
 *   3. Categorise severity: critical (<40%), warning (40-60%), minor (60-70%)
 *   4. Sort by severity then by avg score ascending
 */
export function identifyWeakAreas(moduleScores: ModuleScoreData[]): WeakArea[] {
  const weakAreas: WeakArea[] = []

  for (const mod of moduleScores) {
    if (mod.scores.length === 0) continue

    const avg = mod.scores.reduce((s, v) => s + v, 0) / mod.scores.length
    const belowThreshold = mod.scores.filter((s) => s < 50).length
    const belowPercent = (belowThreshold / mod.scores.length) * 100

    // Only flag if avg < 60% or > 30% of students below 50%
    const isWeak = avg < 60 || belowPercent > 30
    if (!isWeak) continue

    let severity: WeakArea['severity']
    if (avg < 40) {
      severity = 'critical'
    } else if (avg < 60) {
      severity = 'warning'
    } else {
      severity = 'minor'
    }

    weakAreas.push({
      moduleId: mod.moduleId,
      moduleName: mod.moduleName,
      courseId: mod.courseId,
      courseName: mod.courseName,
      avgScore: Math.round(avg),
      studentsBelowThreshold: belowThreshold,
      totalStudentsAttempted: mod.scores.length,
      severity,
    })
  }

  // Sort: critical first, then warning, then minor; within same severity, lowest avg first
  const severityOrder: Record<string, number> = { critical: 0, warning: 1, minor: 2 }
  weakAreas.sort((a, b) => {
    const so = severityOrder[a.severity] - severityOrder[b.severity]
    if (so !== 0) return so
    return a.avgScore - b.avgScore
  })

  return weakAreas
}

/**
 * Build the moduleScores array from raw student module_progress data.
 * This is a helper to transform the raw DB rows into the shape identifyWeakAreas expects.
 */
export function buildModuleScoreData(
  progressRows: {
    module_id: string
    course_id: string
    quiz_score: number | null
    user_id: string
  }[],
  moduleNameMap: Map<string, string>,
  courseNameMap: Map<string, string>
): ModuleScoreData[] {
  // Group by module_id
  const moduleMap = new Map<
    string,
    { courseId: string; scores: number[] }
  >()

  for (const row of progressRows) {
    if (row.quiz_score === null) continue

    const existing = moduleMap.get(row.module_id)
    if (existing) {
      existing.scores.push(row.quiz_score)
    } else {
      moduleMap.set(row.module_id, {
        courseId: row.course_id,
        scores: [row.quiz_score],
      })
    }
  }

  const result: ModuleScoreData[] = []
  for (const [moduleId, data] of Array.from(moduleMap.entries())) {
    result.push({
      moduleId,
      moduleName: moduleNameMap.get(moduleId) ?? moduleId,
      courseId: data.courseId,
      courseName: courseNameMap.get(data.courseId) ?? data.courseId,
      scores: data.scores,
    })
  }

  return result
}
