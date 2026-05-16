'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import { DEMO_TEACHERS, DEMO_CLASSES, DEMO_STUDENTS } from '@/data/demo-data'
import DemoBanner from '@/components/demo/DemoBanner'
import { percentageToGCSEGrade } from '@/lib/grades'

const ROLE_MAP: Record<string, 'HOD' | 'Teacher'> = {
  't-001': 'HOD',
  't-003': 'HOD',
}

function getRole(id: string): 'HOD' | 'Teacher' {
  return ROLE_MAP[id] || 'Teacher'
}

function getTeacherClasses(teacherId: string) {
  return DEMO_CLASSES.filter((c) => c.teacherId === teacherId)
}

function getClassStudents(classId: string) {
  return DEMO_STUDENTS.filter((s) => s.classId === classId)
}

function getProgressColor(value: number): string {
  if (value >= 80) return 'text-primary'
  if (value >= 60) return 'text-amber-700 dark:text-amber-300'
  return 'text-red-700 dark:text-red-300'
}

function getProgressBarColor(value: number): string {
  if (value >= 80) return 'bg-primary'
  if (value >= 60) return 'bg-amber-500'
  return 'bg-red-500'
}

export default function TeacherDetailPage() {
  const params = useParams()
  const teacherId = params.id as string

  const teacher = DEMO_TEACHERS.find((t) => t.id === teacherId)
  if (!teacher) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-light text-foreground mb-2">Teacher not found</h1>
          <p className="text-muted-foreground text-sm mb-6">
            No teacher exists with ID &quot;{teacherId}&quot;.
          </p>
          <Link
            href="/demo/school/teachers"
            className="text-sm text-primary hover:text-primary/80 transition-colors"
          >
            &larr; Back to teachers
          </Link>
        </div>
      </div>
    )
  }

  const role = getRole(teacher.id)
  const classes = getTeacherClasses(teacher.id)
  const allStudents = classes.flatMap((c) => getClassStudents(c.id))

  // Performance summary
  const avgStudentScore =
    allStudents.length > 0
      ? Math.round(allStudents.reduce((sum, s) => sum + s.overallProgress, 0) / allStudents.length)
      : 0

  const totalAssignmentsSet = classes.reduce((sum, c) => sum + c.assignmentsSet, 0)
  const totalAssignmentsCompleted = classes.reduce((sum, c) => sum + c.assignmentsCompleted, 0)
  const completionRate =
    totalAssignmentsSet > 0
      ? Math.round((totalAssignmentsCompleted / totalAssignmentsSet) * 100)
      : 0

  const atRiskCount = allStudents.filter((s) => s.atRisk).length

  // Find a Y10 class for the personalised report
  const reportClass =
    classes.find((c) => String(c.yearGroup) === 'Year 10' || (c as any).yearGroup === 10) ||
    classes[0]
  const reportClassStudents = reportClass ? getClassStudents(reportClass.id) : []
  const reportClassAvg =
    reportClassStudents.length > 0
      ? Math.round(
          reportClassStudents.reduce((sum, s) => sum + s.overallProgress, 0) /
            reportClassStudents.length,
        )
      : 0
  const reportAtRisk = reportClassStudents.filter((s) => s.atRisk).length

  // Compare with other classes in the same year group
  const sameYearClasses = reportClass
    ? DEMO_CLASSES.filter((c) => c.yearGroup === reportClass.yearGroup && c.id !== reportClass.id)
    : []
  const sameYearAvg =
    sameYearClasses.length > 0
      ? Math.round(
          sameYearClasses.reduce((sum, c) => sum + c.avgProgress, 0) / sameYearClasses.length,
        )
      : 0

  return (
    <div className="min-h-screen bg-background text-foreground">
      <DemoBanner message="You are viewing an interactive demo with sample data. No real teacher data is used." />

      <div className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Back link */}
        <Link
          href="/demo/school/teachers"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-muted-foreground transition-colors mb-6"
        >
          &larr; All teachers
        </Link>

        {/* Teacher profile header */}
        <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-8">
          <div className="h-14 w-14 shrink-0 rounded-full bg-gradient-to-br from-primary/10 to-primary/20 border border-border flex items-center justify-center text-lg font-light text-muted-foreground">
            {teacher.name
              .split(' ')
              .map((n) => n[0])
              .join('')
              .slice(0, 2)}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 mb-1">
              <h1 className="text-2xl sm:text-3xl font-light tracking-tight text-foreground">
                {teacher.name}
              </h1>
              <span
                className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-medium tracking-wide ${
                  role === 'HOD'
                    ? 'bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/20'
                    : 'bg-muted text-muted-foreground border border-border'
                }`}
              >
                {role}
              </span>
            </div>
            <p className="text-sm text-muted-foreground mb-1">{teacher.email}</p>
            <p className="text-sm text-muted-foreground">
              {teacher.department} &middot; {classes.length} class{classes.length !== 1 ? 'es' : ''}
            </p>
          </div>
        </div>

        {/* Performance summary */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          <div className="rounded-xl border border-border bg-card p-5">
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1">
              Avg Student Score
            </p>
            <p className={`text-3xl font-light tabular-nums ${getProgressColor(avgStudentScore)}`}>
              {avgStudentScore}%
              <span className="text-lg text-muted-foreground ml-1">
                (Grade {percentageToGCSEGrade(avgStudentScore)})
              </span>
            </p>
            <p className="text-[11px] text-muted-foreground mt-1">
              Across {allStudents.length} tracked student{allStudents.length !== 1 ? 's' : ''}
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card p-5">
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1">
              Assignment Completion
            </p>
            <p className={`text-3xl font-light tabular-nums ${getProgressColor(completionRate)}`}>
              {completionRate}%
            </p>
            <p className="text-[11px] text-muted-foreground mt-1">
              {totalAssignmentsCompleted}/{totalAssignmentsSet} completed
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card p-5">
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1">
              At-Risk Students
            </p>
            <p
              className={`text-3xl font-light tabular-nums ${
                atRiskCount > 0 ? 'text-red-700 dark:text-red-300' : 'text-primary'
              }`}
            >
              {atRiskCount}
            </p>
            <p className="text-[11px] text-muted-foreground mt-1">
              {atRiskCount > 0 ? 'Requires attention' : 'No concerns'}
            </p>
          </div>
        </div>

        {/* Classes grid */}
        <div className="mb-10">
          <h2 className="text-lg font-light text-foreground mb-4">Classes ({classes.length})</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {classes.map((cls) => {
              const students = getClassStudents(cls.id)
              const classAtRisk = students.filter((s) => s.atRisk).length

              return (
                <Link
                  key={cls.id}
                  href={`/demo/school/classes/${cls.id}`}
                  className="group rounded-xl border border-border bg-card p-5 hover:bg-muted hover:border-border transition-all"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className="text-sm font-medium text-foreground group-hover:text-foreground transition-colors">
                        {cls.name}
                      </p>
                      <p className="text-[11px] text-muted-foreground">
                        Year {cls.yearGroup} &middot; {cls.studentCount} students
                      </p>
                    </div>
                    <span className="text-muted-foreground group-hover:text-muted-foreground transition-colors text-lg">
                      &rarr;
                    </span>
                  </div>

                  {/* Progress bar */}
                  <div className="mb-2">
                    <div className="flex items-center justify-between text-[11px] mb-1">
                      <span className="text-muted-foreground">Avg progress</span>
                      <span className={`tabular-nums ${getProgressColor(cls.avgProgress)}`}>
                        {cls.avgProgress}%
                      </span>
                    </div>
                    <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all ${getProgressBarColor(cls.avgProgress)}`}
                        style={{ width: `${cls.avgProgress}%` }}
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-muted-foreground">
                      {cls.assignmentsCompleted}/{cls.assignmentsSet} assignments
                    </span>
                    {classAtRisk > 0 && (
                      <span className="text-red-700 dark:text-red-300">{classAtRisk} at risk</span>
                    )}
                  </div>
                </Link>
              )
            })}
          </div>
        </div>

        {/* Student list per class */}
        <div className="mb-10">
          <h2 className="text-lg font-light text-foreground mb-4">Students by Class</h2>
          <div className="space-y-6">
            {classes.map((cls) => {
              const students = getClassStudents(cls.id)
              if (students.length === 0) return null

              return (
                <div
                  key={cls.id}
                  className="rounded-xl border border-border bg-card overflow-hidden"
                >
                  <div className="px-5 py-3 border-b border-border flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-foreground">{cls.name}</p>
                      <p className="text-[11px] text-muted-foreground">
                        {students.length} student{students.length !== 1 ? 's' : ''} tracked
                      </p>
                    </div>
                    <Link
                      href={`/demo/school/classes/${cls.id}`}
                      className="text-[11px] text-primary/70 hover:text-primary transition-colors"
                    >
                      View class &rarr;
                    </Link>
                  </div>

                  {students.map((student) => (
                    <Link
                      key={student.id}
                      href={`/demo/school/students/${student.id}`}
                      className="group flex items-center justify-between gap-4 px-5 py-3 border-b border-border/60 last:border-0 hover:bg-muted transition-colors"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div
                          className={`h-2 w-2 shrink-0 rounded-full ${
                            student.atRisk ? 'bg-red-500' : 'bg-primary/60'
                          }`}
                        />
                        <div className="min-w-0">
                          <p className="text-sm text-foreground group-hover:text-foreground transition-colors truncate">
                            {student.name}
                          </p>
                          <p className="text-[11px] text-muted-foreground">
                            Year {student.yearGroup} &middot; {student.lastActive}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 shrink-0">
                        <div className="text-right">
                          <p
                            className={`text-sm tabular-nums ${getProgressColor(student.overallProgress)}`}
                          >
                            {student.overallProgress}%
                            <span className="text-muted-foreground ml-1 text-xs">
                              (G{percentageToGCSEGrade(student.overallProgress)})
                            </span>
                          </p>
                        </div>
                        {student.atRisk && (
                          <span className="inline-flex items-center rounded-full px-2 py-0.5 text-[9px] font-medium bg-red-500/15 text-red-700 dark:text-red-300 border border-red-500/20 uppercase tracking-wider">
                            At risk
                          </span>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              )
            })}

            {/* Empty state for classes with no tracked students */}
            {classes.filter((c) => getClassStudents(c.id).length === 0).length > 0 && (
              <div className="rounded-xl border border-border bg-card p-5">
                <p className="text-sm text-muted-foreground">
                  {classes.filter((c) => getClassStudents(c.id).length === 0).length} class
                  {classes.filter((c) => getClassStudents(c.id).length === 0).length !== 1
                    ? 'es have'
                    : ' has'}{' '}
                  no individually tracked students in the demo dataset.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Personalised class report */}
        {reportClass && (
          <div className="rounded-xl border border-border bg-card overflow-hidden mb-10">
            <div className="px-5 py-4 border-b border-border bg-gradient-to-r from-primary/5 to-transparent">
              <h2 className="text-base font-medium text-foreground">
                {reportClass.name} &mdash; {teacher.name}&apos;s Report
              </h2>
              <p className="text-[11px] text-muted-foreground mt-0.5">
                Personalised class performance summary
              </p>
            </div>

            <div className="p-5 space-y-6">
              {/* Class performance summary */}
              <div>
                <h3 className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-3">
                  Performance Summary
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div>
                    <p className="text-[11px] text-muted-foreground mb-0.5">Class Average</p>
                    <p
                      className={`text-xl font-light tabular-nums ${getProgressColor(reportClassAvg)}`}
                    >
                      {reportClassAvg}%{' '}
                      <span className="text-sm text-muted-foreground">
                        (G{percentageToGCSEGrade(reportClassAvg)})
                      </span>
                    </p>
                  </div>
                  <div>
                    <p className="text-[11px] text-muted-foreground mb-0.5">Students</p>
                    <p className="text-xl font-light text-muted-foreground tabular-nums">
                      {reportClassStudents.length > 0
                        ? reportClassStudents.length
                        : reportClass.studentCount}
                    </p>
                  </div>
                  <div>
                    <p className="text-[11px] text-muted-foreground mb-0.5">At-Risk</p>
                    <p
                      className={`text-xl font-light tabular-nums ${
                        reportAtRisk > 0 ? 'text-red-700 dark:text-red-300' : 'text-primary'
                      }`}
                    >
                      {reportAtRisk}
                    </p>
                  </div>
                  <div>
                    <p className="text-[11px] text-muted-foreground mb-0.5">Completion</p>
                    <p className="text-xl font-light text-muted-foreground tabular-nums">
                      {reportClass.assignmentsCompleted}/{reportClass.assignmentsSet}
                    </p>
                  </div>
                </div>
              </div>

              {/* Trends */}
              <div>
                <h3 className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-3">
                  Trends
                </h3>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="text-primary mt-0.5 shrink-0">&uarr;</span>
                    <p className="text-sm text-muted-foreground">
                      Class average has improved by 4% over the last half-term, driven by stronger
                      performance on language analysis tasks.
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-amber-700 dark:text-amber-300 mt-0.5 shrink-0">
                      &rarr;
                    </span>
                    <p className="text-sm text-muted-foreground">
                      Assignment completion is steady but below the year group target of 85%. Three
                      students have outstanding submissions.
                    </p>
                  </div>
                  {reportAtRisk > 0 && (
                    <div className="flex items-start gap-2">
                      <span className="text-red-700 dark:text-red-300 mt-0.5 shrink-0">&darr;</span>
                      <p className="text-sm text-muted-foreground">
                        {reportAtRisk} student{reportAtRisk !== 1 ? 's' : ''} flagged as at-risk.
                        Engagement has declined over the past 2 weeks &mdash; consider individual
                        check-ins or differentiated tasks.
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Recommendations */}
              <div>
                <h3 className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-3">
                  Recommendations
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-primary mt-0.5 shrink-0">1.</span>
                    Schedule catch-up sessions with at-risk students before the next assessment
                    window. Focus on foundational skills they are missing.
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-primary mt-0.5 shrink-0">2.</span>
                    Set shorter, more frequent assignments to improve completion rate. Consider
                    scaffolded tasks for lower-attaining pupils.
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-primary mt-0.5 shrink-0">3.</span>
                    Share high-performing student responses as model answers to raise expectations
                    across the group.
                  </li>
                </ul>
              </div>

              {/* Year group comparison */}
              {sameYearClasses.length > 0 && (
                <div>
                  <h3 className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-3">
                    Comparison with Other Year {reportClass.yearGroup} Classes
                  </h3>
                  <div className="rounded-lg border border-border bg-muted/40 overflow-hidden">
                    {/* This class */}
                    <div className="flex items-center justify-between px-4 py-3 border-b border-border/60">
                      <div className="flex items-center gap-2">
                        <div className="h-2.5 w-2.5 rounded-full bg-cyan-400" />
                        <p className="text-sm text-foreground">{reportClass.name}</p>
                        <span className="text-[10px] text-muted-foreground">(this class)</span>
                      </div>
                      <p
                        className={`text-sm tabular-nums ${getProgressColor(reportClass.avgProgress)}`}
                      >
                        {reportClass.avgProgress}%
                      </p>
                    </div>

                    {/* Other classes in same year */}
                    {sameYearClasses.map((c) => (
                      <div
                        key={c.id}
                        className="flex items-center justify-between px-4 py-3 border-b border-border/60 last:border-0"
                      >
                        <div className="flex items-center gap-2">
                          <div className="h-2.5 w-2.5 rounded-full bg-muted-foreground/40" />
                          <p className="text-sm text-muted-foreground">{c.name}</p>
                          <span className="text-[11px] text-muted-foreground">{c.teacher}</span>
                        </div>
                        <p className={`text-sm tabular-nums ${getProgressColor(c.avgProgress)}`}>
                          {c.avgProgress}%
                        </p>
                      </div>
                    ))}

                    {/* Year group average */}
                    <div className="flex items-center justify-between px-4 py-3 bg-card border-t border-border">
                      <p className="text-[11px] text-muted-foreground uppercase tracking-wider">
                        Year {reportClass.yearGroup} Average (excl. this class)
                      </p>
                      <p
                        className={`text-sm font-medium tabular-nums ${getProgressColor(sameYearAvg)}`}
                      >
                        {sameYearAvg}%
                      </p>
                    </div>
                  </div>

                  {reportClass.avgProgress >= sameYearAvg ? (
                    <p className="text-[11px] text-primary/70 mt-2">
                      This class is performing {reportClass.avgProgress - sameYearAvg}% above the
                      Year {reportClass.yearGroup} average.
                    </p>
                  ) : (
                    <p className="text-[11px] text-amber-700 dark:text-amber-300 mt-2">
                      This class is performing {sameYearAvg - reportClass.avgProgress}% below the
                      Year {reportClass.yearGroup} average. Targeted interventions recommended.
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Footer */}
        <p className="text-center text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          Demo data &middot; {teacher.name} &middot; {classes.length} class
          {classes.length !== 1 ? 'es' : ''}
        </p>
      </div>
    </div>
  )
}
