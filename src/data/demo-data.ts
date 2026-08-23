// ─── Demo Data (moved) ────────────────────────────────────────────────────────
// This file used to hold every record behind the free interactive school demo in
// one 432 KB module. Around 24 'use client' pages under /demo/school and
// /demo/teacher imported it at module scope, so all 432 KB landed in each of
// those routes' First Load JS - the exact funnel a prospective school buyer hits
// from a sales email, usually on a cold first load.
//
// The data now lives in src/data/demo/, split so a page pays only for what it
// renders:
//
//   ./demo/types            shapes only, erased at compile time
//   ./demo/school           DEMO_SCHOOL
//   ./demo/teachers         DEMO_TEACHERS, DEMO_TEACHER, getDemoTeacherById
//   ./demo/classes          DEMO_CLASSES, TEACHER_DEMO_CLASSES, class lookups
//   ./demo/students-index   DEMO_STUDENT_INDEX - the compact per-student record
//                           that every list, table and roll-up surface reads
//   ./demo/students-detail  the full roster, ~320 KB; LAZY IMPORT ONLY
//   ./demo/use-demo-students  the hook detail screens use to load the roster
//   ./demo/aggregates       year-group stats and DEMO_STATS
//   ./demo/at-risk          DEMO_AT_RISK_STUDENTS (only the insights panel reads it)
//   ./demo/teacher-surfaces TEACHER_DEMO_LESSONS, TEACHER_DEMO_SUBMISSIONS
//   ./demo/unused-surfaces  authored demo data no page imports today
//
// Only the types are re-exported here, so an old value import fails at type-check
// rather than quietly pulling the roster back into a client bundle. Import the
// module you need directly.
// ──────────────────────────────────────────────────────────────────────────────

export type {
  DemoTeacher,
  DemoModuleProgress,
  DemoMockExam,
  DemoEssay,
  DemoQuizAttempt,
  DemoActivity,
  DemoStudent,
  DemoStudentSummary,
  DemoClass,
  DemoYearGroupStats,
  DemoAtRiskStudent,
  DemoWeeklyActivity,
  DemoResourceUsage,
  DemoAssignmentOverview,
  DemoInterventionLog,
  DemoMockAttempt,
} from './demo/types'
