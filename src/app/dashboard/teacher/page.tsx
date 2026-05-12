import Link from 'next/link'
import { percentageToGCSEGrade, percentageToGCSEGradeLabel, gcseGradeColor } from '@/lib/grades'
import { tMany } from '@/lib/i18n/t'

const MOCK_TEACHER = { firstName: 'Ms. Williams' }

const MOCK_CLASS_STATS = {
  totalStudents: 32,
  activeStudents: 28,
  averageScore: 71,
  submissionsThisWeek: 18,
}

const MOCK_RECENT_SUBMISSIONS = [
  {
    id: 's1',
    studentName: 'Emma Thompson',
    essayTitle: 'An Inspector Calls: Responsibility Theme',
    subject: 'English Literature',
    score: 82,
    submittedAt: '2026-03-23T10:30:00',
    status: 'graded' as const,
  },
  {
    id: 's2',
    studentName: 'Oliver Chen',
    essayTitle: 'Persuasive Writing: Climate Change',
    subject: 'English Language',
    score: null,
    submittedAt: '2026-03-23T09:15:00',
    status: 'pending' as const,
  },
  {
    id: 's3',
    studentName: 'Amira Patel',
    essayTitle: 'Macbeth: Power and Ambition',
    subject: 'English Literature',
    score: 77,
    submittedAt: '2026-03-22T16:45:00',
    status: 'graded' as const,
  },
  {
    id: 's4',
    studentName: 'James Walker',
    essayTitle: 'Creative Writing: The Storm',
    subject: 'English Language',
    score: null,
    submittedAt: '2026-03-22T14:20:00',
    status: 'pending' as const,
  },
  {
    id: 's5',
    studentName: 'Sophie Liu',
    essayTitle: 'A Christmas Carol: Redemption',
    subject: 'English Literature',
    score: 88,
    submittedAt: '2026-03-21T11:00:00',
    status: 'graded' as const,
  },
]

const MOCK_PROGRESS_GRID = [
  { name: 'Emma T.', weeks: [3, 2, 3, 3, 2, 3] },
  { name: 'Oliver C.', weeks: [1, 2, 1, 0, 2, 1] },
  { name: 'Amira P.', weeks: [2, 3, 2, 3, 3, 2] },
  { name: 'James W.', weeks: [0, 1, 1, 2, 1, 0] },
  { name: 'Sophie L.', weeks: [3, 3, 3, 2, 3, 3] },
  { name: 'Liam R.', weeks: [1, 0, 1, 1, 2, 1] },
  { name: 'Chloe M.', weeks: [2, 2, 3, 2, 2, 3] },
  { name: 'Daniel K.', weeks: [0, 1, 0, 1, 0, 1] },
]

const WEEK_LABELS = ['W1', 'W2', 'W3', 'W4', 'W5', 'W6']

function heatmapColor(level: number): string {
  if (level === 3) return 'bg-accent'
  if (level === 2) return 'bg-primary/30'
  if (level === 1) return 'bg-primary/15'
  return 'bg-muted'
}

function statusBadge(status: 'graded' | 'pending') {
  return status === 'graded' ? 'bg-green-500/10 text-green-600' : 'bg-amber-500/10 text-amber-600'
}

export const metadata = { title: 'Teacher Dashboard' }

export default async function TeacherDashboardPage() {
  const teacher = MOCK_TEACHER
  const stats = MOCK_CLASS_STATS

  const [
    welcomePrefix,
    welcomeSuffix,
    intro,
    statTotalStudents,
    statActiveWeek,
    gradePrefix,
    statAvgGrade,
    statSubmissionsWeek,
    actionViewStudentWork,
    actionAssignTasks,
    actionCreateAssessment,
    actionViewAnalytics,
    recentSubmissionsLabel,
    viewAllLabel,
    statusGraded,
    statusPending,
    studentActivityLabel,
    colStudent,
    activityNone,
    activityLow,
    activityMedium,
    activityHigh,
    legendLess,
    legendMore,
  ] = await tMany([
    'teacher.home.welcome_prefix',
    'teacher.home.welcome_suffix',
    'teacher.home.intro',
    'teacher.home.stat.total_students',
    'teacher.home.stat.active_week',
    'teacher.home.grade_prefix',
    'teacher.home.stat.avg_grade',
    'teacher.home.stat.submissions_week',
    'teacher.home.action.view_student_work',
    'teacher.home.action.assign_tasks',
    'teacher.home.action.create_assessment',
    'teacher.home.action.view_analytics',
    'teacher.home.recent_submissions',
    'teacher.home.view_all',
    'teacher.home.status.graded',
    'teacher.home.status.pending',
    'teacher.home.student_activity',
    'teacher.home.col.student',
    'teacher.home.activity.none',
    'teacher.home.activity.low',
    'teacher.home.activity.medium',
    'teacher.home.activity.high',
    'teacher.home.legend.less',
    'teacher.home.legend.more',
  ])

  const activityLabel = (level: number) =>
    level === 0
      ? activityNone
      : level === 1
        ? activityLow
        : level === 2
          ? activityMedium
          : activityHigh

  return (
    <div className="mx-auto max-w-7xl space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-primary sm:text-3xl">
          {welcomePrefix} {teacher.firstName}
          {welcomeSuffix}
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">{intro}</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="card flex items-center gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
              />
            </svg>
          </div>
          <div>
            <p className="text-2xl font-bold text-foreground">{stats.totalStudents}</p>
            <p className="text-xs text-muted-foreground">{statTotalStudents}</p>
          </div>
        </div>
        <div className="card flex items-center gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-500/10 text-green-500">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div>
            <p className="text-2xl font-bold text-foreground">{stats.activeStudents}</p>
            <p className="text-xs text-muted-foreground">{statActiveWeek}</p>
          </div>
        </div>
        <div className="card flex items-center gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-accent">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
          </div>
          <div>
            <p
              className={`text-2xl font-bold ${gcseGradeColor(percentageToGCSEGrade(stats.averageScore))}`}
            >
              {gradePrefix} {percentageToGCSEGrade(stats.averageScore)}
            </p>
            <p className="text-xs text-muted-foreground">{statAvgGrade}</p>
          </div>
        </div>
        <div className="card flex items-center gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-amber-500/10 text-amber-500">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </div>
          <div>
            <p className="text-2xl font-bold text-foreground">{stats.submissionsThisWeek}</p>
            <p className="text-xs text-muted-foreground">{statSubmissionsWeek}</p>
          </div>
        </div>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <Link
          href="/dashboard/teacher/students"
          className="card flex items-center gap-3 hover:border-accent/40 hover:shadow-md transition-all"
        >
          <svg
            className="h-5 w-5 shrink-0 text-accent"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
          <span className="text-sm font-medium text-foreground">{actionViewStudentWork}</span>
        </Link>
        <Link
          href="/dashboard/teacher/assignments"
          className="card flex items-center gap-3 hover:border-accent/40 hover:shadow-md transition-all"
        >
          <svg
            className="h-5 w-5 shrink-0 text-accent"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="text-sm font-medium text-foreground">{actionAssignTasks}</span>
        </Link>
        <Link
          href="/dashboard/teacher/assignments"
          className="card flex items-center gap-3 hover:border-accent/40 hover:shadow-md transition-all"
        >
          <svg
            className="h-5 w-5 shrink-0 text-accent"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
            />
          </svg>
          <span className="text-sm font-medium text-foreground">{actionCreateAssessment}</span>
        </Link>
        <Link
          href="/dashboard/teacher/analytics"
          className="card flex items-center gap-3 hover:border-accent/40 hover:shadow-md transition-all"
        >
          <svg
            className="h-5 w-5 shrink-0 text-accent"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            />
          </svg>
          <span className="text-sm font-medium text-foreground">{actionViewAnalytics}</span>
        </Link>
      </div>
      <div className="grid gap-8 lg:grid-cols-3">
        <section className="lg:col-span-2" aria-labelledby="submissions-heading">
          <div className="flex items-center justify-between mb-4">
            <h2 id="submissions-heading" className="text-lg font-semibold text-foreground">
              {recentSubmissionsLabel}
            </h2>
            <Link
              href="/dashboard/teacher/assignments"
              className="text-sm font-medium text-accent hover:text-primary"
            >
              {viewAllLabel}
            </Link>
          </div>
          <ul className="space-y-3" role="list">
            {MOCK_RECENT_SUBMISSIONS.map((sub) => (
              <li key={sub.id}>
                <div className="card flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-medium text-foreground">{sub.studentName}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground truncate">
                      {sub.essayTitle} &middot; {sub.subject}
                    </p>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      {new Date(sub.submittedAt).toLocaleDateString('en-GB', {
                        day: 'numeric',
                        month: 'short',
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${statusBadge(sub.status)}`}
                    >
                      {sub.status === 'graded' ? statusGraded : statusPending}
                    </span>
                    {sub.score !== null && (
                      <span className="text-lg font-bold text-foreground">
                        {percentageToGCSEGradeLabel(sub.score)}
                      </span>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>
        <section aria-labelledby="progress-heading">
          <h2 id="progress-heading" className="text-lg font-semibold text-foreground mb-4">
            {studentActivityLabel}
          </h2>
          <div className="card overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr>
                  <th className="text-left font-medium text-muted-foreground pb-2 pr-2">
                    {colStudent}
                  </th>
                  {WEEK_LABELS.map((w) => (
                    <th key={w} className="text-center font-medium text-muted-foreground pb-2 px-1">
                      {w}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {MOCK_PROGRESS_GRID.map((student) => (
                  <tr key={student.name}>
                    <td className="py-1 pr-2 font-medium text-foreground whitespace-nowrap">
                      {student.name}
                    </td>
                    {student.weeks.map((level, i) => (
                      <td key={i} className="py-1 px-1">
                        <div
                          className={`w-6 h-6 rounded-sm mx-auto ${heatmapColor(level)}`}
                          title={`${student.name} - ${WEEK_LABELS[i]}: ${activityLabel(level)}`}
                        />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
              <span>{legendLess}</span>
              <div className="w-4 h-4 rounded-sm bg-muted" />
              <div className="w-4 h-4 rounded-sm bg-primary/15" />
              <div className="w-4 h-4 rounded-sm bg-primary/30" />
              <div className="w-4 h-4 rounded-sm bg-accent" />
              <span>{legendMore}</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
