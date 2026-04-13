// ─── CSV Export ──────────────────────────────────────────────────────────────

import type { StudentAnalytics } from './types'

/**
 * Escape a CSV field value.
 * Wraps in double quotes if the value contains commas, quotes, or newlines.
 */
function escapeCSV(value: string): string {
  if (
    value.includes(',') ||
    value.includes('"') ||
    value.includes('\n') ||
    value.includes('\r')
  ) {
    return `"${value.replace(/"/g, '""')}"`
  }
  return value
}

function formatHours(seconds: number): string {
  return (seconds / 3600).toFixed(1)
}

/**
 * Generate a CSV string from student analytics data.
 * Each row is one student; columns cover all key metrics.
 */
export function generateCSV(
  students: StudentAnalytics[],
  className: string
): string {
  const headers = [
    'Student ID',
    'Student Name',
    'Year Group',
    'Modules Completed',
    'Total Modules',
    'Completion %',
    'Avg Quiz Score',
    'Avg Assessment Score',
    'Time Spent (hrs)',
    'Practice Sessions',
    'Certificates',
    'Trajectory',
    'Predicted Grade',
    'Strengths',
    'Weaknesses',
  ]

  const rows: string[][] = []

  for (const s of students) {
    const strengthsStr = s.strengths
      .map((st) => `${st.courseName} (${st.avgScore}%)`)
      .join('; ')
    const weaknessesStr = s.weaknesses
      .map((w) => `${w.courseName} (${w.avgScore}%)`)
      .join('; ')

    rows.push([
      s.studentId,
      s.fullName ?? 'Unknown',
      s.yearGroup ?? '',
      String(s.modulesCompleted),
      String(s.totalModules),
      String(s.completionRate),
      String(s.avgQuizScore),
      String(s.avgAssessmentScore),
      formatHours(s.timeSpentSeconds),
      String(s.practiceSessions),
      String(s.certificates),
      s.trajectory,
      s.predictedGrade,
      strengthsStr || 'N/A',
      weaknessesStr || 'N/A',
    ])
  }

  // Sort rows by student name
  rows.sort((a, b) => a[0].localeCompare(b[0]))

  const csvLines = [
    `Class: ${escapeCSV(className)}`,
    `Exported: ${new Date().toISOString().split('T')[0]}`,
    `Students: ${students.length}`,
    '', // blank line before data
    headers.map(escapeCSV).join(','),
    ...rows.map((row) => row.map(escapeCSV).join(',')),
  ]

  return csvLines.join('\r\n')
}
