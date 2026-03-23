import type {
  ClassAnalytics,
  StudentAnalytics,
  SchoolOverview,
  WeakArea,
  Recommendation,
} from '@/lib/types'
import { formatDuration, formatDate } from '@/lib/utils'

// ── Report Data Types ─────────────────────────────────────────────────────────

export interface ReportHeader {
  schoolName: string
  reportTitle: string
  generatedDate: string
  teacherName: string
  academicYear: string
  className?: string
  studentName?: string
  dateRange?: { from: string; to: string }
}

export interface ReportSection {
  title: string
  content: string[]
  type: 'summary' | 'detail' | 'table' | 'recommendation' | 'next-steps'
}

export interface TableRow {
  label: string
  value: string | number
  highlight?: 'good' | 'warning' | 'critical' | 'neutral'
}

export interface ReportTableSection extends ReportSection {
  type: 'table'
  rows: TableRow[]
}

export interface ReportData {
  header: ReportHeader
  sections: (ReportSection | ReportTableSection)[]
}

// ── Helpers ───────────────────────────────────────────────────────────────────

function gradeFromScore(score: number): string {
  if (score >= 90) return '9'
  if (score >= 80) return '8'
  if (score >= 70) return '7'
  if (score >= 60) return '6'
  if (score >= 50) return '5'
  if (score >= 40) return '4'
  if (score >= 30) return '3'
  if (score >= 20) return '2'
  return '1'
}

function trajectoryLabel(trajectory: StudentAnalytics['trajectory']): string {
  switch (trajectory) {
    case 'improving':
      return 'Improving — on an upward trend'
    case 'stable':
      return 'Stable — maintaining consistent performance'
    case 'declining':
      return 'Declining — needs targeted intervention'
  }
}

function severityLabel(severity: WeakArea['severity']): string {
  switch (severity) {
    case 'critical':
      return 'Requires urgent attention'
    case 'warning':
      return 'Needs monitoring'
    case 'minor':
      return 'Minor concern'
  }
}

function highlightFromScore(score: number): TableRow['highlight'] {
  if (score >= 70) return 'good'
  if (score >= 50) return 'warning'
  return 'critical'
}

function makeHeader(
  overrides: Partial<ReportHeader> & Pick<ReportHeader, 'reportTitle'>,
): ReportHeader {
  return {
    schoolName: overrides.schoolName ?? 'English Hub Academy',
    reportTitle: overrides.reportTitle,
    generatedDate: formatDate(new Date()),
    teacherName: overrides.teacherName ?? '',
    academicYear: overrides.academicYear ?? `${new Date().getFullYear() - 1}/${new Date().getFullYear()}`,
    className: overrides.className,
    studentName: overrides.studentName,
    dateRange: overrides.dateRange,
  }
}

// ── Class Report ──────────────────────────────────────────────────────────────

export function generateClassReport(
  classAnalytics: ClassAnalytics,
  students: StudentAnalytics[],
  options?: { schoolName?: string; teacherName?: string },
): ReportData {
  const atRiskStudents = students.filter((s) => s.trajectory === 'declining')
  const topStudents = students
    .filter((s) => s.avg_quiz_score >= 70)
    .sort((a, b) => b.avg_quiz_score - a.avg_quiz_score)
  const improvingStudents = students.filter((s) => s.trajectory === 'improving')

  const header = makeHeader({
    reportTitle: `Class Overview Report — ${classAnalytics.class_name}`,
    schoolName: options?.schoolName,
    teacherName: options?.teacherName,
    className: classAnalytics.class_name,
  })

  const sections: (ReportSection | ReportTableSection)[] = [
    // Summary statistics
    {
      title: 'Summary Statistics',
      type: 'table' as const,
      content: [],
      rows: [
        { label: 'Total Students', value: classAnalytics.student_count, highlight: 'neutral' },
        { label: 'Class Average Score', value: `${classAnalytics.avg_score.toFixed(1)}%`, highlight: highlightFromScore(classAnalytics.avg_score) },
        { label: 'Median Score', value: `${classAnalytics.median_score.toFixed(1)}%`, highlight: highlightFromScore(classAnalytics.median_score) },
        { label: 'Completion Rate', value: `${classAnalytics.completion_rate.toFixed(1)}%`, highlight: highlightFromScore(classAnalytics.completion_rate) },
        { label: 'Avg. Time Spent', value: `${classAnalytics.avg_time_spent_minutes} mins`, highlight: 'neutral' },
        { label: 'Certificates Earned', value: classAnalytics.certificates_count, highlight: 'neutral' },
        { label: 'Students at Risk', value: classAnalytics.students_at_risk, highlight: classAnalytics.students_at_risk > 0 ? 'critical' : 'good' },
      ],
    },

    // Performance distribution
    {
      title: 'Performance Distribution',
      type: 'detail',
      content: [
        `Top Performers (70%+): ${topStudents.length} students (${((topStudents.length / students.length) * 100).toFixed(0)}%)`,
        `Meeting Expectations (50-69%): ${students.filter((s) => s.avg_quiz_score >= 50 && s.avg_quiz_score < 70).length} students`,
        `Below Expectations (<50%): ${students.filter((s) => s.avg_quiz_score < 50).length} students`,
        `Improving trajectory: ${improvingStudents.length} students`,
        `Declining trajectory: ${atRiskStudents.length} students`,
      ],
    },

    // Top performers
    {
      title: 'Top Performers',
      type: 'detail',
      content: topStudents.length > 0
        ? topStudents.slice(0, 5).map(
            (s) =>
              `${s.student_name} — ${s.avg_quiz_score.toFixed(1)}% avg. score, ${s.modules_completed}/${s.total_modules} modules completed`,
          )
        : ['No students currently scoring above 70%.'],
    },

    // Weak areas
    {
      title: 'Areas Requiring Attention',
      type: 'detail',
      content: classAnalytics.weak_areas.length > 0
        ? classAnalytics.weak_areas.map(
            (wa: WeakArea) =>
              `${wa.course_name}${wa.module_name ? ` — ${wa.module_name}` : ''}: ${wa.avg_score.toFixed(1)}% avg. (${wa.students_below_threshold} students below threshold) — ${severityLabel(wa.severity)}`,
          )
        : ['No significant weak areas identified.'],
    },

    // Students at risk
    {
      title: 'Students Requiring Intervention',
      type: 'detail',
      content: atRiskStudents.length > 0
        ? atRiskStudents.map(
            (s) =>
              `${s.student_name} — ${s.avg_quiz_score.toFixed(1)}% avg., trajectory: declining. Weaknesses: ${s.weaknesses.length > 0 ? s.weaknesses.join(', ') : 'N/A'}`,
          )
        : ['No students currently flagged as at risk.'],
    },

    // Recommendations
    {
      title: 'Recommendations',
      type: 'recommendation',
      content: classAnalytics.recommendations.length > 0
        ? classAnalytics.recommendations
            .sort((a: Recommendation, b: Recommendation) => a.priority - b.priority)
            .map(
              (r: Recommendation) =>
                `[Priority ${r.priority}] ${r.title}: ${r.description} — Affects ${r.affected_students} student(s). Suggested action: ${r.suggested_action}`,
            )
        : ['Continue monitoring student progress and maintain current teaching strategies.'],
    },

    // Next steps
    {
      title: 'Next Steps',
      type: 'next-steps',
      content: [
        atRiskStudents.length > 0
          ? `Schedule one-to-one sessions with ${atRiskStudents.length} at-risk student(s) to discuss personalised support plans.`
          : 'Continue to monitor student engagement and quiz performance weekly.',
        classAnalytics.weak_areas.length > 0
          ? `Plan targeted revision sessions for: ${classAnalytics.weak_areas.map((wa: WeakArea) => wa.course_name).join(', ')}.`
          : 'No targeted revision sessions currently required.',
        'Review this report in two weeks to assess progress against identified areas.',
        improvingStudents.length > 0
          ? `Recognise the progress of ${improvingStudents.length} improving student(s) to maintain motivation.`
          : 'Consider strategies to encourage broader engagement across the class.',
      ],
    },
  ]

  return { header, sections }
}

// ── Individual Student Report ─────────────────────────────────────────────────

export function generateStudentReport(
  student: StudentAnalytics,
  options?: { schoolName?: string; teacherName?: string; className?: string },
): ReportData {
  const header = makeHeader({
    reportTitle: `Individual Student Report — ${student.student_name}`,
    schoolName: options?.schoolName,
    teacherName: options?.teacherName,
    className: options?.className,
    studentName: student.student_name,
  })

  const sections: (ReportSection | ReportTableSection)[] = [
    {
      title: 'Student Overview',
      type: 'table' as const,
      content: [],
      rows: [
        { label: 'Student Name', value: student.student_name, highlight: 'neutral' },
        { label: 'Year Group', value: student.year_group ?? 'Not set', highlight: 'neutral' },
        { label: 'Exam Board', value: student.exam_board ?? 'Not set', highlight: 'neutral' },
        { label: 'Average Quiz Score', value: `${student.avg_quiz_score.toFixed(1)}%`, highlight: highlightFromScore(student.avg_quiz_score) },
        { label: 'Current Grade (estimated)', value: gradeFromScore(student.avg_quiz_score), highlight: highlightFromScore(student.avg_quiz_score) },
        { label: 'Predicted Grade', value: student.predicted_grade ?? 'N/A', highlight: 'neutral' },
        { label: 'Trajectory', value: trajectoryLabel(student.trajectory), highlight: student.trajectory === 'improving' ? 'good' : student.trajectory === 'declining' ? 'critical' : 'neutral' },
      ],
    },
    {
      title: 'Progress & Engagement',
      type: 'table' as const,
      content: [],
      rows: [
        { label: 'Modules Completed', value: `${student.modules_completed} / ${student.total_modules}`, highlight: 'neutral' },
        { label: 'Completion Rate', value: `${student.completion_rate.toFixed(1)}%`, highlight: highlightFromScore(student.completion_rate) },
        { label: 'Total Study Time', value: formatDuration(student.total_time_spent_seconds), highlight: 'neutral' },
        { label: 'Practice Sessions', value: student.practice_sessions_count, highlight: 'neutral' },
        { label: 'Avg. Practice Rating', value: `${student.avg_practice_rating.toFixed(1)} / 5`, highlight: student.avg_practice_rating >= 3.5 ? 'good' : student.avg_practice_rating >= 2.5 ? 'warning' : 'critical' },
        { label: 'Certificates Earned', value: student.certificates_count, highlight: 'neutral' },
        { label: 'Last Active', value: student.last_active_at ? formatDate(student.last_active_at) : 'Never', highlight: 'neutral' },
      ],
    },
    {
      title: 'Strengths',
      type: 'detail',
      content: student.strengths.length > 0
        ? student.strengths.map((s) => s)
        : ['No specific strengths have been identified yet. Encourage the student to complete more modules.'],
    },
    {
      title: 'Areas for Improvement',
      type: 'detail',
      content: student.weaknesses.length > 0
        ? student.weaknesses.map((w) => w)
        : ['No specific weaknesses have been identified. Continue with current study plan.'],
    },
    {
      title: 'Recommendations',
      type: 'recommendation',
      content: generateStudentRecommendations(student),
    },
    {
      title: 'Next Steps',
      type: 'next-steps',
      content: [
        student.trajectory === 'declining'
          ? 'Arrange a one-to-one meeting to discuss support strategies and set short-term targets.'
          : 'Continue with current study plan and review progress at next checkpoint.',
        student.completion_rate < 50
          ? `Encourage the student to complete remaining modules (${student.total_modules - student.modules_completed} outstanding).`
          : 'Module completion is on track.',
        student.practice_sessions_count < 5
          ? 'Encourage regular use of practice questions to reinforce learning.'
          : 'Practice engagement is satisfactory.',
        'Review this report at the next assessment point.',
      ],
    },
  ]

  return { header, sections }
}

function generateStudentRecommendations(student: StudentAnalytics): string[] {
  const recs: string[] = []

  if (student.trajectory === 'declining') {
    recs.push('Immediate intervention recommended. Consider arranging additional support sessions or peer tutoring.')
  }

  if (student.avg_quiz_score < 40) {
    recs.push('Core knowledge gaps may be present. Consider diagnostic assessment to identify foundational issues.')
  } else if (student.avg_quiz_score < 60) {
    recs.push('Targeted revision of weaker areas is recommended. Use the practice question bank to reinforce specific topics.')
  }

  if (student.completion_rate < 30) {
    recs.push('Very low completion rate. Check for engagement barriers — is the student logging in regularly?')
  }

  if (student.practice_sessions_count === 0) {
    recs.push('The student has not completed any practice sessions. Introduce them to the practice question feature.')
  }

  if (student.weaknesses.length > 0) {
    recs.push(`Focus revision on: ${student.weaknesses.join(', ')}.`)
  }

  if (student.trajectory === 'improving') {
    recs.push('Positive trajectory. Consider stretch activities or extension tasks to maintain momentum.')
  }

  if (recs.length === 0) {
    recs.push('Student is performing well. Continue with current approach and maintain regular check-ins.')
  }

  return recs
}

// ── Parent Report ─────────────────────────────────────────────────────────────

export function generateParentReport(
  student: StudentAnalytics,
  options?: { schoolName?: string; teacherName?: string; className?: string },
): ReportData {
  const currentGrade = gradeFromScore(student.avg_quiz_score)
  const targetGrade = student.predicted_grade ?? 'Not set'

  const header = makeHeader({
    reportTitle: `Progress Report for ${student.student_name}`,
    schoolName: options?.schoolName,
    teacherName: options?.teacherName,
    className: options?.className,
    studentName: student.student_name,
  })

  const sections: (ReportSection | ReportTableSection)[] = [
    {
      title: 'At a Glance',
      type: 'table' as const,
      content: [],
      rows: [
        { label: 'Current Grade', value: currentGrade, highlight: highlightFromScore(student.avg_quiz_score) },
        { label: 'Target Grade', value: targetGrade, highlight: 'neutral' },
        { label: 'Overall Score', value: `${student.avg_quiz_score.toFixed(0)}%`, highlight: highlightFromScore(student.avg_quiz_score) },
        { label: 'Course Completion', value: `${student.completion_rate.toFixed(0)}%`, highlight: highlightFromScore(student.completion_rate) },
        { label: 'Direction of Travel', value: student.trajectory === 'improving' ? 'Improving' : student.trajectory === 'stable' ? 'Stable' : 'Needs support', highlight: student.trajectory === 'improving' ? 'good' : student.trajectory === 'declining' ? 'critical' : 'neutral' },
      ],
    },
    {
      title: 'What Your Child Is Doing Well',
      type: 'detail',
      content: student.strengths.length > 0
        ? [
            `${student.student_name} has shown particular strength in the following areas:`,
            ...student.strengths.map((s) => `- ${s}`),
          ]
        : [`${student.student_name} is building their skills across all areas. We look forward to identifying specific strengths as they progress further through the course.`],
    },
    {
      title: 'Areas to Improve',
      type: 'detail',
      content: student.weaknesses.length > 0
        ? [
            `We have identified the following areas where ${student.student_name} would benefit from additional practice:`,
            ...student.weaknesses.map((w) => `- ${w}`),
          ]
        : ['No significant areas of concern at this stage.'],
    },
    {
      title: 'How You Can Help at Home',
      type: 'recommendation',
      content: [
        'Encourage regular, short study sessions (20-30 minutes) rather than infrequent long sessions.',
        student.practice_sessions_count < 5
          ? 'Your child would benefit from completing more practice questions on the platform.'
          : 'Your child is making good use of the practice question feature — please encourage them to continue.',
        student.completion_rate < 50
          ? `There are ${student.total_modules - student.modules_completed} modules still to complete. Gentle encouragement to work through these would be very helpful.`
          : 'Course completion is progressing well.',
        'Reading widely — fiction and non-fiction — remains one of the best ways to support English language development.',
        student.trajectory === 'declining'
          ? 'We have noticed a recent dip in performance. Please do get in touch if there are any factors at home that may be affecting their studies.'
          : 'Please do not hesitate to contact us if you have any questions about your child\'s progress.',
      ],
    },
    {
      title: 'Next Steps',
      type: 'next-steps',
      content: [
        student.trajectory === 'declining'
          ? `We will be arranging additional support for ${student.student_name} and will keep you informed of progress.`
          : `We will continue to monitor ${student.student_name}'s progress and provide feedback.`,
        'The next formal report will be issued at the end of the half-term.',
        'Please contact the school if you wish to discuss this report further.',
      ],
    },
  ]

  return { header, sections }
}

// ── Head of Department Report ─────────────────────────────────────────────────

export function generateHoDReport(
  schoolOverview: SchoolOverview,
  classes: ClassAnalytics[],
  options?: { teacherName?: string },
): ReportData {
  const header = makeHeader({
    reportTitle: `Head of Department Report — ${schoolOverview.school.name}`,
    schoolName: schoolOverview.school.name,
    teacherName: options?.teacherName,
  })

  const totalAtRisk = classes.reduce((sum, c) => sum + c.students_at_risk, 0)
  const allWeakAreas = classes.flatMap((c) => c.weak_areas)
  const criticalAreas = allWeakAreas.filter((wa) => wa.severity === 'critical')
  const allRecommendations = classes.flatMap((c) => c.recommendations)

  const sections: (ReportSection | ReportTableSection)[] = [
    {
      title: 'Department Overview',
      type: 'table' as const,
      content: [],
      rows: [
        { label: 'Total Students', value: schoolOverview.total_students, highlight: 'neutral' },
        { label: 'Total Teachers', value: schoolOverview.total_teachers, highlight: 'neutral' },
        { label: 'Total Classes', value: schoolOverview.total_classes, highlight: 'neutral' },
        { label: 'Active Students (this week)', value: schoolOverview.active_students_this_week, highlight: 'neutral' },
        { label: 'Department Average Score', value: `${schoolOverview.avg_score_all.toFixed(1)}%`, highlight: highlightFromScore(schoolOverview.avg_score_all) },
        { label: 'Department Completion Rate', value: `${schoolOverview.completion_rate_all.toFixed(1)}%`, highlight: highlightFromScore(schoolOverview.completion_rate_all) },
        { label: 'Total Students at Risk', value: totalAtRisk, highlight: totalAtRisk > 0 ? 'critical' : 'good' },
      ],
    },
    {
      title: 'Class-by-Class Breakdown',
      type: 'detail',
      content: classes.map(
        (c) =>
          `${c.class_name}: ${c.student_count} students, avg. ${c.avg_score.toFixed(1)}%, completion ${c.completion_rate.toFixed(1)}%, ${c.students_at_risk} at risk`,
      ),
    },
    {
      title: 'Critical Areas Across Department',
      type: 'detail',
      content: criticalAreas.length > 0
        ? criticalAreas.map(
            (wa) =>
              `${wa.course_name}${wa.module_name ? ` — ${wa.module_name}` : ''}: ${wa.avg_score.toFixed(1)}% avg., ${wa.students_below_threshold} students below threshold`,
          )
        : ['No critical areas identified across the department.'],
    },
    {
      title: 'Trends',
      type: 'detail',
      content: schoolOverview.trends.length > 0
        ? [
            `Data points available from ${formatDate(schoolOverview.trends[0].date)} to ${formatDate(schoolOverview.trends[schoolOverview.trends.length - 1].date)}.`,
            `Latest average score: ${schoolOverview.trends[schoolOverview.trends.length - 1].avg_score.toFixed(1)}%`,
            `Latest active students: ${schoolOverview.trends[schoolOverview.trends.length - 1].active_students}`,
            `Latest modules completed: ${schoolOverview.trends[schoolOverview.trends.length - 1].modules_completed}`,
          ]
        : ['No trend data available yet.'],
    },
    {
      title: 'Key Recommendations',
      type: 'recommendation',
      content: allRecommendations.length > 0
        ? allRecommendations
            .sort((a, b) => a.priority - b.priority)
            .slice(0, 10)
            .map(
              (r) =>
                `[P${r.priority}] ${r.title}: ${r.description} (${r.affected_students} students affected)`,
            )
        : ['No urgent recommendations. Continue monitoring department performance.'],
    },
    {
      title: 'Next Steps',
      type: 'next-steps',
      content: [
        totalAtRisk > 0
          ? `Coordinate intervention plans for ${totalAtRisk} at-risk students across ${classes.filter((c) => c.students_at_risk > 0).length} class(es).`
          : 'No immediate interventions required.',
        criticalAreas.length > 0
          ? `Schedule departmental CPD or resource review for critical areas: ${[...new Set(criticalAreas.map((wa) => wa.course_name))].join(', ')}.`
          : 'No critical teaching gaps identified.',
        'Review class-level data with individual teachers at the next department meeting.',
        'Update this report monthly to track department-wide progress.',
      ],
    },
  ]

  return { header, sections }
}

// ── Progress Report ───────────────────────────────────────────────────────────

export function generateProgressReport(
  student: StudentAnalytics,
  dateRange: { from: string; to: string },
  options?: { schoolName?: string; teacherName?: string; className?: string },
): ReportData {
  const header = makeHeader({
    reportTitle: `Progress Report — ${student.student_name}`,
    schoolName: options?.schoolName,
    teacherName: options?.teacherName,
    className: options?.className,
    studentName: student.student_name,
    dateRange,
  })

  const sections: (ReportSection | ReportTableSection)[] = [
    {
      title: 'Report Period',
      type: 'summary',
      content: [
        `This report covers the period from ${formatDate(dateRange.from)} to ${formatDate(dateRange.to)}.`,
        `Student: ${student.student_name}`,
        `Year Group: ${student.year_group ?? 'Not set'}`,
        `Exam Board: ${student.exam_board ?? 'Not set'}`,
      ],
    },
    {
      title: 'Current Attainment',
      type: 'table' as const,
      content: [],
      rows: [
        { label: 'Average Score', value: `${student.avg_quiz_score.toFixed(1)}%`, highlight: highlightFromScore(student.avg_quiz_score) },
        { label: 'Estimated Grade', value: gradeFromScore(student.avg_quiz_score), highlight: highlightFromScore(student.avg_quiz_score) },
        { label: 'Predicted Grade', value: student.predicted_grade ?? 'N/A', highlight: 'neutral' },
        { label: 'Trajectory', value: trajectoryLabel(student.trajectory), highlight: student.trajectory === 'improving' ? 'good' : student.trajectory === 'declining' ? 'critical' : 'neutral' },
      ],
    },
    {
      title: 'Engagement During Period',
      type: 'table' as const,
      content: [],
      rows: [
        { label: 'Modules Completed', value: `${student.modules_completed} / ${student.total_modules}`, highlight: 'neutral' },
        { label: 'Completion Rate', value: `${student.completion_rate.toFixed(1)}%`, highlight: highlightFromScore(student.completion_rate) },
        { label: 'Study Time', value: formatDuration(student.total_time_spent_seconds), highlight: 'neutral' },
        { label: 'Practice Sessions', value: student.practice_sessions_count, highlight: 'neutral' },
        { label: 'Certificates', value: student.certificates_count, highlight: 'neutral' },
        { label: 'Last Active', value: student.last_active_at ? formatDate(student.last_active_at) : 'Never', highlight: 'neutral' },
      ],
    },
    {
      title: 'Strengths Demonstrated',
      type: 'detail',
      content: student.strengths.length > 0
        ? student.strengths
        : ['Strengths will be identified as the student progresses further.'],
    },
    {
      title: 'Areas for Development',
      type: 'detail',
      content: student.weaknesses.length > 0
        ? student.weaknesses
        : ['No significant development areas identified during this period.'],
    },
    {
      title: 'Recommendations',
      type: 'recommendation',
      content: generateStudentRecommendations(student),
    },
    {
      title: 'Next Steps',
      type: 'next-steps',
      content: [
        `Continue to track progress through to the next reporting period.`,
        student.trajectory === 'declining'
          ? 'Prioritise intervention strategies as outlined above.'
          : 'Maintain current study habits and aim to improve engagement where possible.',
        student.modules_completed < student.total_modules
          ? `Focus on completing the remaining ${student.total_modules - student.modules_completed} module(s).`
          : 'All modules completed — focus on revision and exam technique.',
        'Set specific, measurable targets for the next reporting period.',
      ],
    },
  ]

  return { header, sections }
}
