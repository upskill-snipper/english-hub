// ─── Demo Aggregates ──────────────────────────────────────────────────────────
// Roll-ups the demo dashboards read. These are small, so they stay eagerly
// importable; the per-student records behind them do not.
// ──────────────────────────────────────────────────────────────────────────────

import type { DemoYearGroupStats } from './types'
import { DEMO_SCHOOL } from './school'
import { DEMO_TEACHERS } from './teachers'
import { DEMO_CLASSES } from './classes'
import { DEMO_STUDENT_INDEX } from './students-index'

export const DEMO_YEAR_GROUP_STATS: DemoYearGroupStats[] = [
  {
    yearGroup: 'Year 7',
    year: 7,
    label: 'Year 7',
    studentCount: 71,
    classCount: 5,
    averageScore: 66,
    avgProgress: 69,
    completionRate: 70,
    atRiskCount: 1,
    excellingCount: 1,
    topModule: 'Descriptive Writing',
    weakestModule: 'Poetry Introduction',
  },
  {
    yearGroup: 'Year 8',
    year: 8,
    label: 'Year 8',
    studentCount: 72,
    classCount: 5,
    averageScore: 70,
    avgProgress: 72,
    completionRate: 72,
    atRiskCount: 1,
    excellingCount: 1,
    topModule: 'Gothic Literature',
    weakestModule: 'Shakespeare Introduction',
  },
  {
    yearGroup: 'Year 9',
    year: 9,
    label: 'Year 9',
    studentCount: 63,
    classCount: 5,
    averageScore: 69,
    avgProgress: 71,
    completionRate: 72,
    atRiskCount: 0,
    excellingCount: 1,
    topModule: 'Romeo and Juliet',
    weakestModule: 'Unseen Poetry',
  },
  {
    yearGroup: 'Year 10',
    year: 10,
    label: 'Year 10',
    studentCount: 56,
    classCount: 6,
    averageScore: 68,
    avgProgress: 70,
    completionRate: 70,
    atRiskCount: 1,
    excellingCount: 1,
    topModule: 'An Inspector Calls',
    weakestModule: 'Poetry Anthology',
  },
  {
    yearGroup: 'Year 11',
    year: 11,
    label: 'Year 11',
    studentCount: 44,
    classCount: 6,
    averageScore: 72,
    avgProgress: 74,
    completionRate: 76,
    atRiskCount: 1,
    excellingCount: 1,
    topModule: 'Macbeth',
    weakestModule: 'Unseen Poetry',
  },
  {
    yearGroup: 'Year 12',
    year: 12,
    label: 'Year 12',
    studentCount: 20,
    classCount: 5,
    averageScore: 76,
    avgProgress: 78,
    completionRate: 78,
    atRiskCount: 0,
    excellingCount: 1,
    topModule: 'Language and Gender',
    weakestModule: 'Language Investigation Prep',
  },
  {
    yearGroup: 'Year 13',
    year: 13,
    label: 'Year 13',
    studentCount: 16,
    classCount: 4,
    averageScore: 72,
    avgProgress: 74,
    completionRate: 76,
    atRiskCount: 1,
    excellingCount: 1,
    topModule: 'Language Investigation',
    weakestModule: 'Pre-1900 Drama',
  },
]

export const DEMO_YEAR_GROUPS = DEMO_YEAR_GROUP_STATS

// Derived from the compact student index rather than the full roster: these are
// five scalar roll-ups and must not drag ~320 KB of detail into every dashboard.
export const DEMO_STATS = {
  totalStudents: DEMO_SCHOOL.studentCount,
  totalTeachers: DEMO_SCHOOL.teacherCount,
  totalClasses: DEMO_SCHOOL.classCount,
  avgScore: Math.round(
    DEMO_STUDENT_INDEX.reduce((sum, s) => sum + s.averageScore, 0) / DEMO_STUDENT_INDEX.length,
  ),
  avgProgress: Math.round(
    DEMO_STUDENT_INDEX.reduce((sum, s) => sum + s.overallProgress, 0) / DEMO_STUDENT_INDEX.length,
  ),
  atRiskCount: DEMO_STUDENT_INDEX.filter((s) => s.status === 'at-risk').length,
  activeClasses: DEMO_CLASSES.length,
  activeThisWeek: DEMO_TEACHERS.filter((t) => t.activeThisWeek).length,
}
