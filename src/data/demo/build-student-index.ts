/**
 * Generator for src/data/demo/students-index.ts.
 *
 * WHY this exists: the full demo roster (students-detail.ts) is ~320 KB of static
 * data. Because ~19 'use client' demo pages imported it at module scope, all of it
 * landed in each of those routes' First Load JS - on the exact funnel a prospective
 * school hits from a sales email, usually on a cold first load. Almost all of those
 * pages only render list rows, table cells and roll-ups, so this script projects the
 * roster down to the fields those surfaces actually read and writes it out as a
 * compact, positionally-encoded index.
 *
 * Regenerate after editing students-detail.ts:
 *   npx tsx src/data/demo/build-student-index.ts
 *
 * Fail if the checked-in index has drifted from the roster (safe for CI):
 *   npx tsx src/data/demo/build-student-index.ts --check
 */

import { writeFileSync, readFileSync, existsSync } from 'node:fs'
import { join } from 'node:path'
import { DEMO_STUDENTS } from './students-detail'
import type { DemoStudent } from './types'

const OUT_PATH = join(process.cwd(), 'src', 'data', 'demo', 'students-index.ts')

type ClassRow = [className: string, yearGroup: string, teacher: string]

function buildClassTable(students: DemoStudent[]): Record<string, ClassRow> {
  const table: Record<string, ClassRow> = {}
  for (const s of students) {
    const existing = table[s.classId]
    const row: ClassRow = [s.className, s.yearGroup, s.teacher]
    if (existing && JSON.stringify(existing) !== JSON.stringify(row)) {
      throw new Error(
        `classId "${s.classId}" maps to more than one class/year/teacher combination; ` +
          `the index cannot derive those fields from classId any more.`,
      )
    }
    table[s.classId] = row
  }
  return table
}

function buildLastActiveTable(students: DemoStudent[]): string[] {
  return [...new Set(students.map((s) => s.lastActive))]
}

function render(students: DemoStudent[]): string {
  const classes = buildClassTable(students)
  const lastActive = buildLastActiveTable(students)

  for (const s of students) {
    // teacherName is a pure duplicate of teacher throughout the roster, so the
    // index derives it rather than storing 200 more copies of the same strings.
    if (s.teacherName !== s.teacher) {
      throw new Error(`student ${s.id}: teacherName no longer duplicates teacher`)
    }
  }

  const classLines = Object.entries(classes)
    .map(([id, row]) => `  ${JSON.stringify(id)}: ${JSON.stringify(row)},`)
    .join('\n')

  const rowLines = students
    .map((s) => {
      const cells = [
        JSON.stringify(s.id),
        JSON.stringify(s.name),
        JSON.stringify(s.email),
        JSON.stringify(s.classId),
        JSON.stringify(s.status),
        String(s.atRisk),
        JSON.stringify(s.riskReason),
        String(s.overallProgress),
        String(s.averageScore),
        String(s.assignmentsCompleted),
        String(s.assignmentsTotal),
        String(lastActive.indexOf(s.lastActive)),
        String(s.workingAtGrade),
        String(s.predictedGrade),
        String(s.targetGrade),
        s.readingAge === null ? 'null' : String(s.readingAge),
        JSON.stringify(s.strengths),
        JSON.stringify(s.weaknesses),
        JSON.stringify(s.recommendations),
        JSON.stringify(s.mockExamResults.map((m) => m.grade)),
        String(s.isEal === true),
        s.ealProficiency ? JSON.stringify(s.ealProficiency) : 'null',
      ]
      return `  [${cells.join(',')}],`
    })
    .join('\n')

  return `// ─── Demo Student Index (GENERATED - do not edit by hand) ─────────────────────
// Regenerate:  npx tsx src/data/demo/build-student-index.ts
// Check drift:  npx tsx src/data/demo/build-student-index.ts --check
//
// WHY this file exists: the full roster in ./students-detail.ts is ~320 KB of
// static data, and ~19 'use client' demo pages imported it at module scope, which
// put the whole roster into each of those routes' client bundles. Those pages only
// render list rows, table cells and roll-ups, so this index carries just those
// fields. It is positionally encoded (a tuple per student plus two small lookup
// tables) because repeating 20 field names across 200 records costs more bytes
// than the values themselves.
//
// Anything that needs a student's essays, mocks, quizzes, modules, activity
// timeline or score history must load ./students-detail lazily instead - see
// ./use-demo-students.
// ──────────────────────────────────────────────────────────────────────────────

import type { DemoStudentSummary } from './types'

/** classId -> [class name, year group, teacher]. One row per class, not per student. */
const CLASSES: Record<string, [className: string, yearGroup: string, teacher: string]> = {
${classLines}
}

/** Distinct "last active" labels; rows below store an index into this list. */
const LAST_ACTIVE: string[] = ${JSON.stringify(lastActive)}

type Row = [
  id: string,
  name: string,
  email: string,
  classId: string,
  status: DemoStudentSummary['status'],
  atRisk: boolean,
  riskReason: string,
  overallProgress: number,
  averageScore: number,
  assignmentsCompleted: number,
  assignmentsTotal: number,
  lastActiveIndex: number,
  workingAtGrade: number,
  predictedGrade: number,
  targetGrade: number,
  readingAge: number | null,
  strengths: (string | { name: string; score: number })[],
  weaknesses: (string | { name: string; score: number })[],
  recommendations: string[],
  mockGrades: string[],
  isEal: boolean,
  ealProficiency: DemoStudentSummary['ealProficiency'],
]

const ROWS: Row[] = [
${rowLines}
]

export const DEMO_STUDENT_INDEX: DemoStudentSummary[] = ROWS.map((r) => {
  const [className, yearGroup, teacher] = CLASSES[r[3]]
  return {
    id: r[0],
    name: r[1],
    email: r[2],
    yearGroup,
    className,
    classId: r[3],
    teacher,
    // teacherName duplicated teacher in every record, so it is derived here.
    teacherName: teacher,
    status: r[4],
    atRisk: r[5],
    riskReason: r[6],
    overallProgress: r[7],
    averageScore: r[8],
    assignmentsCompleted: r[9],
    assignmentsTotal: r[10],
    lastActive: LAST_ACTIVE[r[11]],
    workingAtGrade: r[12],
    predictedGrade: r[13],
    targetGrade: r[14],
    readingAge: r[15],
    strengths: r[16],
    weaknesses: r[17],
    recommendations: r[18],
    mockGrades: r[19],
    isEal: r[20],
    ealProficiency: r[21],
  }
})

/** Convenience lookup used by the demo list surfaces. */
export function getDemoStudentSummaryById(studentId: string): DemoStudentSummary | undefined {
  return DEMO_STUDENT_INDEX.find((s) => s.id === studentId)
}
`
}

const output = render(DEMO_STUDENTS)

if (process.argv.includes('--check')) {
  const current = existsSync(OUT_PATH) ? readFileSync(OUT_PATH, 'utf8') : ''
  if (current !== output) {
    console.error(
      'students-index.ts is out of date with students-detail.ts. Run: npx tsx src/data/demo/build-student-index.ts',
    )
    process.exit(1)
  }
  console.log('students-index.ts is in sync.')
} else {
  writeFileSync(OUT_PATH, output, 'utf8')
  console.log(`Wrote ${OUT_PATH} (${DEMO_STUDENTS.length} students).`)
}
