/**
 * Export utility functions for school data exports.
 *
 * Handles CSV generation, Excel-compatible encoding (BOM + proper escaping),
 * and formatting for common school MIS/grading systems (SIMS, ALPS).
 */

import type { StudentAnalytics, ClassAnalytics } from '@/lib/types'

/* ── CSV Primitives ─────────────────────────────────────────────────────────── */

/** Escape a single CSV field: handles commas, quotes, newlines, and formula injection. */
export function escapeCsvField(value: string | number | boolean | null | undefined): string {
  if (value === null || value === undefined) return ''
  const str = String(value)
  // Prevent CSV formula injection - prefix dangerous leading characters
  const safe = /^[=+\-@\t\r]/.test(str) ? `'${str}` : str
  if (safe.includes(',') || safe.includes('"') || safe.includes('\n') || safe.includes('\r')) {
    return `"${safe.replace(/"/g, '""')}"`
  }
  return safe
}

/** Build a complete CSV string from headers and row data. Includes UTF-8 BOM for Excel compatibility. */
export function buildCsvString(
  headers: string[],
  rows: (string | number | boolean | null | undefined)[][],
): string {
  const BOM = '\uFEFF'
  const headerLine = headers.map(escapeCsvField).join(',')
  const dataLines = rows.map((row) => row.map(escapeCsvField).join(','))
  return BOM + [headerLine, ...dataLines].join('\r\n')
}

/** Trigger a CSV file download in the browser. */
export function downloadCsv(csvContent: string, filename: string): void {
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = filename.endsWith('.csv') ? filename : `${filename}.csv`
  link.style.display = 'none'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}

/* ── Generic Export ──────────────────────────────────────────────────────────── */

/**
 * Generate and download a CSV from arbitrary data.
 * @param data - Array of row objects
 * @param headers - Column definitions: { key, label }
 * @param filename - Download filename (without extension)
 */
export function exportToCSV<T extends Record<string, unknown>>(
  data: T[],
  headers: { key: keyof T & string; label: string }[],
  filename: string,
): void {
  const headerLabels = headers.map((h) => h.label)
  const rows = data.map((item) => headers.map((h) => item[h.key] as string | number | null))
  const csv = buildCsvString(headerLabels, rows)
  downloadCsv(csv, filename)
}

/* ── Class Report ────────────────────────────────────────────────────────────── */

/**
 * Export a comprehensive class report CSV with summary stats and per-student rows.
 */
export function exportClassReport(
  classAnalytics: ClassAnalytics,
  students: StudentAnalytics[],
  filename?: string,
): void {
  const headers = [
    'Student Name',
    'Year Group',
    'Modules Completed',
    'Total Modules',
    'Completion %',
    'Avg Quiz Score',
    'Time Spent (hrs)',
    'Practice Sessions',
    'Certificates',
    'Trajectory',
    'Predicted Grade',
    'Strengths',
    'Weaknesses',
  ]

  // Summary rows at top
  const summaryRows: (string | number | null)[][] = [
    ['CLASS SUMMARY', '', '', '', '', '', '', '', '', '', '', '', ''],
    [
      'Class',
      classAnalytics.class_name,
      'Students',
      classAnalytics.student_count,
      'Avg Score',
      classAnalytics.avg_score,
      'Completion',
      `${classAnalytics.completion_rate}%`,
      'At Risk',
      classAnalytics.students_at_risk,
      '',
      '',
      '',
    ],
    ['', '', '', '', '', '', '', '', '', '', '', '', ''],
    ['STUDENT DATA', '', '', '', '', '', '', '', '', '', '', '', ''],
  ]

  const studentRows: (string | number | null)[][] = students.map((s) => [
    s.student_name,
    s.year_group,
    s.modules_completed,
    s.total_modules,
    Math.round(s.completion_rate),
    Math.round(s.avg_quiz_score),
    Math.round((s.total_time_spent_seconds / 3600) * 10) / 10,
    s.practice_sessions_count,
    s.certificates_count,
    s.trajectory,
    s.predicted_grade,
    s.strengths.join('; '),
    s.weaknesses.join('; '),
  ])

  const allRows = [...summaryRows, ...studentRows]
  const csv = buildCsvString(headers, allRows)
  const fname =
    filename ||
    `class-report-${classAnalytics.class_name.replace(/\s+/g, '-').toLowerCase()}-${todayISO()}`
  downloadCsv(csv, fname)
}

/* ── Individual Student Report ───────────────────────────────────────────────── */

/**
 * Export a single student's data as CSV.
 */
export function exportStudentReport(student: StudentAnalytics, filename?: string): void {
  const headers = ['Field', 'Value']
  const rows: (string | number | null)[][] = [
    ['Name', student.student_name],
    ['Year Group', student.year_group],
    ['Modules Completed', student.modules_completed],
    ['Total Modules', student.total_modules],
    ['Completion Rate', `${Math.round(student.completion_rate)}%`],
    ['Average Quiz Score', Math.round(student.avg_quiz_score)],
    ['Time Spent (hours)', Math.round((student.total_time_spent_seconds / 3600) * 10) / 10],
    ['Practice Sessions', student.practice_sessions_count],
    ['Average Practice Rating', student.avg_practice_rating],
    ['Certificates', student.certificates_count],
    ['Trajectory', student.trajectory],
    ['Predicted Grade', student.predicted_grade],
    ['Last Active', student.last_active_at],
    ['Strengths', student.strengths.join('; ')],
    ['Weaknesses', student.weaknesses.join('; ')],
  ]

  const csv = buildCsvString(headers, rows)
  const fname =
    filename ||
    `student-report-${student.student_name.replace(/\s+/g, '-').toLowerCase()}-${todayISO()}`
  downloadCsv(csv, fname)
}

/* ── Attendance / Engagement Data ────────────────────────────────────────────── */

export interface AttendanceRow {
  student_name: string
  last_active_at: string | null
  modules_this_week: number
  practice_this_week: number
  total_time_this_week_minutes: number
  streak_days: number
  engagement_level: 'high' | 'medium' | 'low' | 'inactive'
}

/**
 * Export engagement/activity data for a class.
 * The caller provides the attendance rows (fetched from the API).
 */
export function exportAttendanceData(
  attendanceRows: AttendanceRow[],
  classId: string,
  filename?: string,
): void {
  const headers = [
    'Student Name',
    'Last Active',
    'Modules This Week',
    'Practice This Week',
    'Time This Week (mins)',
    'Streak (days)',
    'Engagement Level',
  ]

  const rows: (string | number | null)[][] = attendanceRows.map((r) => [
    r.student_name,
    r.last_active_at ? new Date(r.last_active_at).toLocaleDateString('en-GB') : 'Never',
    r.modules_this_week,
    r.practice_this_week,
    r.total_time_this_week_minutes,
    r.streak_days,
    r.engagement_level,
  ])

  const csv = buildCsvString(headers, rows)
  const fname = filename || `engagement-data-${classId}-${todayISO()}`
  downloadCsv(csv, fname)
}

/* ── Grade Data with Targets & Gaps ──────────────────────────────────────────── */

export interface GradeRow {
  student_name: string
  year_group: string | null
  current_grade: string | null
  target_grade: string | null
  gap: string
  avg_score: number
  trajectory: string
}

/**
 * Export grades with target grades and gaps.
 */
export function exportGradeData(
  students: StudentAnalytics[],
  targetGrades?: Map<string, string>,
  filename?: string,
): void {
  const headers = [
    'Student Name',
    'Year Group',
    'Predicted Grade',
    'Target Grade',
    'Gap',
    'Avg Score',
    'Trajectory',
    'Modules Completed',
    'Completion %',
  ]

  const rows: (string | number | null)[][] = students.map((s) => {
    const target = targetGrades?.get(s.student_id) ?? ''
    const gap = computeGradeGap(s.predicted_grade, target)
    return [
      s.student_name,
      s.year_group,
      s.predicted_grade,
      target,
      gap,
      Math.round(s.avg_quiz_score),
      s.trajectory,
      s.modules_completed,
      Math.round(s.completion_rate),
    ]
  })

  const csv = buildCsvString(headers, rows)
  const fname = filename || `grade-data-${todayISO()}`
  downloadCsv(csv, fname)
}

/* ── SIMS Format ─────────────────────────────────────────────────────────────── */

/**
 * Format student data for SIMS (School Information Management System) import.
 * SIMS expects specific column names and date formats (DD/MM/YYYY).
 */
export function formatForSIMS(students: StudentAnalytics[]): string {
  const headers = [
    'Forename',
    'Surname',
    'Year Group',
    'Subject',
    'Assessment Name',
    'Assessment Date',
    'Grade',
    'Score',
    'Comment',
  ]

  const rows: (string | number | null)[][] = students.map((s) => {
    const nameParts = splitName(s.student_name)
    return [
      nameParts.forename,
      nameParts.surname,
      s.year_group ?? '',
      'English',
      'Platform Progress Assessment',
      formatDateDDMMYYYY(new Date()),
      s.predicted_grade ?? '',
      Math.round(s.avg_quiz_score),
      `Completion: ${Math.round(s.completion_rate)}% | Trajectory: ${s.trajectory}`,
    ]
  })

  return buildCsvString(headers, rows)
}

/**
 * Download student data formatted for SIMS.
 */
export function exportForSIMS(students: StudentAnalytics[], filename?: string): void {
  const csv = formatForSIMS(students)
  const fname = filename || `sims-export-english-${todayISO()}`
  downloadCsv(csv, fname)
}

/* ── ALPS Format ─────────────────────────────────────────────────────────────── */

/**
 * Format student data for ALPS (A Level Performance System) grading.
 * ALPS uses a numeric grade scale and expects specific headers.
 */
export function formatForALPS(students: StudentAnalytics[]): string {
  const headers = [
    'Candidate Name',
    'Candidate Number',
    'Subject',
    'Qualification',
    'Prior Attainment',
    'Current Grade',
    'ALPS Score',
    'Value Added',
    'Teaching Group',
  ]

  const rows: (string | number | null)[][] = students.map((s) => {
    const alpsScore = computeALPSScore(s.avg_quiz_score, s.completion_rate)
    const gradeNumeric = gradeToNumeric(s.predicted_grade)
    return [
      s.student_name,
      s.student_id.substring(0, 8).toUpperCase(),
      'English',
      inferQualification(s.year_group),
      '',
      s.predicted_grade ?? '',
      alpsScore,
      alpsScore <= 3 ? 'Positive' : alpsScore <= 5 ? 'Neutral' : 'Negative',
      s.year_group ?? '',
    ]
  })

  return buildCsvString(headers, rows)
}

/**
 * Download student data formatted for ALPS.
 */
export function exportForALPS(students: StudentAnalytics[], filename?: string): void {
  const csv = formatForALPS(students)
  const fname = filename || `alps-export-english-${todayISO()}`
  downloadCsv(csv, fname)
}

/* ── Preview Helpers ─────────────────────────────────────────────────────────── */

export type ExportType =
  | 'class-report'
  | 'student-report'
  | 'attendance'
  | 'grades'
  | 'sims'
  | 'alps'
export type DateRange = 'this-term' | 'this-year' | 'all-time'
export type ExportFormat = 'csv' | 'print'

/**
 * Generate a preview of export data (first N rows) for display before downloading.
 */
export function generatePreview(
  csvContent: string,
  maxRows: number = 5,
): { headers: string[]; rows: string[][] } {
  // Strip BOM if present
  const content = csvContent.replace(/^\uFEFF/, '')
  const lines = content.split(/\r?\n/).filter((l) => l.length > 0)
  if (lines.length === 0) return { headers: [], rows: [] }

  const headers = parseCsvLine(lines[0])
  const rows = lines.slice(1, 1 + maxRows).map(parseCsvLine)
  return { headers, rows }
}

/** Simple CSV line parser that handles quoted fields. */
function parseCsvLine(line: string): string[] {
  const result: string[] = []
  let current = ''
  let inQuotes = false

  for (let i = 0; i < line.length; i++) {
    const ch = line[i]
    if (inQuotes) {
      if (ch === '"') {
        if (i + 1 < line.length && line[i + 1] === '"') {
          current += '"'
          i++
        } else {
          inQuotes = false
        }
      } else {
        current += ch
      }
    } else {
      if (ch === '"') {
        inQuotes = true
      } else if (ch === ',') {
        result.push(current)
        current = ''
      } else {
        current += ch
      }
    }
  }
  result.push(current)
  return result
}

/* ── Internal Helpers ────────────────────────────────────────────────────────── */

function todayISO(): string {
  return new Date().toISOString().split('T')[0]
}

function splitName(fullName: string): { forename: string; surname: string } {
  const parts = fullName.trim().split(/\s+/)
  if (parts.length <= 1) return { forename: fullName, surname: '' }
  return { forename: parts[0], surname: parts.slice(1).join(' ') }
}

function formatDateDDMMYYYY(date: Date): string {
  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const year = date.getFullYear()
  return `${day}/${month}/${year}`
}

/** Map grade string (e.g. "Grade 7") to numeric value for ALPS. */
function gradeToNumeric(grade: string | null): number {
  if (!grade) return 0
  const match = grade.match(/(\d+)/)
  return match ? parseInt(match[1], 10) : 0
}

/**
 * Compute an ALPS-style score (1-9, lower is better).
 * This is a simplified heuristic; real ALPS uses national benchmarks.
 */
function computeALPSScore(avgScore: number, completionRate: number): number {
  const combined = avgScore * 0.7 + completionRate * 0.3
  if (combined >= 85) return 1
  if (combined >= 75) return 2
  if (combined >= 65) return 3
  if (combined >= 55) return 4
  if (combined >= 45) return 5
  if (combined >= 35) return 6
  if (combined >= 25) return 7
  if (combined >= 15) return 8
  return 9
}

/** Compute the gap between predicted and target grades. */
function computeGradeGap(predicted: string | null, target: string): string {
  if (!predicted || !target) return ''
  const predNum = gradeToNumeric(predicted)
  const targetNum = gradeToNumeric(target)
  if (predNum === 0 || targetNum === 0) return ''
  const diff = predNum - targetNum
  if (diff > 0) return `+${diff}`
  if (diff < 0) return String(diff)
  return 'On target'
}

/** Infer qualification level from year group. */
function inferQualification(yearGroup: string | null): string {
  if (!yearGroup) return ''
  if (yearGroup.includes('12') || yearGroup.includes('13')) return 'A Level'
  if (yearGroup.includes('10') || yearGroup.includes('11')) return 'GCSE'
  return 'KS3'
}
