import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase/server'
import { verifySchoolMember } from '@/lib/school-auth'
import { rateLimit, getClientIp } from '@/lib/rate-limit'

export const dynamic = 'force-dynamic'

// ── Types ──

type ReportType = 'class' | 'student' | 'parent' | 'hod'

interface ReportRequest {
  type: ReportType
  /** Required for class/student/parent reports */
  class_id?: string
  /** Required for student/parent reports */
  student_id?: string
  /** Optional date range filter */
  date_from?: string
  /** Optional date range filter */
  date_to?: string
  /** Whether to include detailed module-level breakdowns */
  include_details?: boolean
}

interface ModuleResult {
  module_id: string
  module_name: string
  course_name: string
  quiz_score: number | null
  completed: boolean
  time_spent_minutes: number
  completed_at: string | null
}

interface ClassReportData {
  class_name: string
  year_group: string | null
  exam_board: string | null
  teacher_name: string | null
  report_period: { from: string; to: string }
  student_count: number
  avg_score: number
  median_score: number | null
  pass_rate: number
  completion_rate: number
  top_performers: Array<{ name: string; avg_score: number }>
  students_needing_support: Array<{ name: string; avg_score: number; issues: string[] }>
  /** Per-student summary rows suitable for a printable class report */
  student_rows: Array<{
    name: string
    avg_score: number
    modules_completed: number
    completion_rate: number
    trajectory: string
    grade_estimate: string
  }>
}

interface StudentReportData {
  student_name: string
  email: string
  year_group: string | null
  class_name: string
  report_period: { from: string; to: string }
  overall_avg_score: number | null
  modules_completed: number
  total_modules: number
  completion_rate: number
  grade_estimate: string
  trajectory: string
  strengths: string[]
  areas_for_improvement: string[]
  module_results: ModuleResult[]
  teacher_comment_placeholder: string
}

interface ParentReportData {
  student_name: string
  class_name: string
  year_group: string | null
  report_period: { from: string; to: string }
  /** Parent-friendly summary (no jargon) */
  summary: string
  overall_grade: string
  effort_indicator: 'excellent' | 'good' | 'satisfactory' | 'needs_improvement'
  subjects_summary: Array<{ area: string; performance: string; comment: string }>
  attendance_note: string
  next_steps: string[]
  teacher_name: string | null
}

interface HodReportData {
  school_name: string
  report_period: { from: string; to: string }
  department_avg_score: number
  total_students: number
  total_classes: number
  pass_rate: number
  class_rankings: Array<{
    class_name: string
    teacher_name: string | null
    avg_score: number
    completion_rate: number
    value_added: number
  }>
  year_group_summary: Array<{
    year_group: string
    avg_score: number
    student_count: number
    pass_rate: number
  }>
  key_concerns: string[]
  recommendations: string[]
}

interface GeneratedReport {
  report_id: string
  type: ReportType
  generated_at: string
  generated_by: string
  data: ClassReportData | StudentReportData | ParentReportData | HodReportData
}

/**
 * POST /api/school/reports/generate
 *
 * Generates formatted report data for different audiences:
 * - "class": Class-wide report with all student summaries (for teacher use)
 * - "student": Detailed individual student report (for student/teacher use)
 * - "parent": Parent-friendly report with simplified language
 * - "hod": Department-level report for Head of Department
 *
 * In production, this would:
 * - Store generated reports in a `reports` table for audit trail
 * - Support PDF export via a separate endpoint
 * - Include data privacy filtering based on consent settings
 * - Use school-specific report templates and branding
 */
export async function POST(request: NextRequest) {
  try {
    const ip = getClientIp(request.headers)
    const rl = await rateLimit(`school-report-gen:${ip}`, { limit: 10, windowSeconds: 60 })
    if (!rl.success) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429, headers: { 'Retry-After': String(Math.ceil((rl.resetAt - Date.now()) / 1000)) } }
      )
    }

    const supabase = createServerSupabaseClient()
    const { data: { user }, error: authError } = await supabase.auth.getUser()
    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const member = await verifySchoolMember(user.id)
    if (!member) {
      return NextResponse.json({ error: 'Forbidden: not a school member' }, { status: 403 })
    }

    let body: ReportRequest
    try {
      body = await request.json()
    } catch {
      return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
    }

    const { type, class_id, student_id, date_from, date_to } = body

    // Validate report type
    const validTypes: ReportType[] = ['class', 'student', 'parent', 'hod']
    if (!type || !validTypes.includes(type)) {
      return NextResponse.json(
        { error: `Invalid report type. Must be one of: ${validTypes.join(', ')}` },
        { status: 422 }
      )
    }

    // HoD reports require admin or head_of_department role
    if (type === 'hod' && !['admin', 'head_of_department'].includes(member.role)) {
      return NextResponse.json(
        { error: 'Forbidden: HoD reports require admin or head of department role' },
        { status: 403 }
      )
    }

    // class, student, parent reports require a class_id
    if (['class', 'student', 'parent'].includes(type) && !class_id) {
      return NextResponse.json({ error: 'class_id is required for this report type' }, { status: 422 })
    }

    // student and parent reports require a student_id
    if (['student', 'parent'].includes(type) && !student_id) {
      return NextResponse.json({ error: 'student_id is required for this report type' }, { status: 422 })
    }

    const admin = createServiceRoleClient()
    const now = new Date()
    const defaultFrom = new Date(now.getFullYear(), now.getMonth() - 3, 1).toISOString()
    const reportPeriod = {
      from: date_from || defaultFrom,
      to: date_to || now.toISOString(),
    }

    const reportId = crypto.randomUUID()

    // ── Generate report based on type ──

    if (type === 'class') {
      const report = await generateClassReport(admin, member, class_id!, reportPeriod)
      if ('error' in report) {
        return NextResponse.json({ error: report.error }, { status: report.status })
      }
      const response: GeneratedReport = {
        report_id: reportId,
        type: 'class',
        generated_at: now.toISOString(),
        generated_by: member.full_name || user.email || user.id,
        data: report,
      }
      return NextResponse.json(response, { status: 201 })
    }

    if (type === 'student') {
      const report = await generateStudentReport(admin, member, class_id!, student_id!, reportPeriod)
      if ('error' in report) {
        return NextResponse.json({ error: report.error }, { status: report.status })
      }
      const response: GeneratedReport = {
        report_id: reportId,
        type: 'student',
        generated_at: now.toISOString(),
        generated_by: member.full_name || user.email || user.id,
        data: report,
      }
      return NextResponse.json(response, { status: 201 })
    }

    if (type === 'parent') {
      const report = await generateParentReport(admin, member, class_id!, student_id!, reportPeriod)
      if ('error' in report) {
        return NextResponse.json({ error: report.error }, { status: report.status })
      }
      const response: GeneratedReport = {
        report_id: reportId,
        type: 'parent',
        generated_at: now.toISOString(),
        generated_by: member.full_name || user.email || user.id,
        data: report,
      }
      return NextResponse.json(response, { status: 201 })
    }

    if (type === 'hod') {
      const report = await generateHodReport(admin, member, reportPeriod)
      if ('error' in report) {
        return NextResponse.json({ error: report.error }, { status: report.status })
      }
      const response: GeneratedReport = {
        report_id: reportId,
        type: 'hod',
        generated_at: now.toISOString(),
        generated_by: member.full_name || user.email || user.id,
        data: report,
      }
      return NextResponse.json(response, { status: 201 })
    }

    return NextResponse.json({ error: 'Unhandled report type' }, { status: 400 })
  } catch (error) {
    console.error('Report generation error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// ── Report generator helpers ──

type AdminClient = ReturnType<typeof createServiceRoleClient>
type SchoolMember = { school_id: string; id: string; full_name: string | null; role: string }

function gradeFromAvg(avg: number | null): string {
  if (avg === null) return 'N/A'
  if (avg >= 90) return '9'
  if (avg >= 80) return '8'
  if (avg >= 70) return '7'
  if (avg >= 60) return '6'
  if (avg >= 50) return '5'
  if (avg >= 40) return '4'
  if (avg >= 30) return '3'
  if (avg >= 20) return '2'
  return '1'
}

function computeTrajectory(scores: number[]): string {
  if (scores.length < 4) return 'insufficient data'
  const mid = Math.floor(scores.length / 2)
  const first = scores.slice(0, mid)
  const second = scores.slice(mid)
  const firstAvg = first.reduce((a, b) => a + b, 0) / first.length
  const secondAvg = second.reduce((a, b) => a + b, 0) / second.length
  const diff = secondAvg - firstAvg
  if (diff > 5) return 'improving'
  if (diff < -5) return 'declining'
  return 'stable'
}

async function generateClassReport(
  admin: AdminClient,
  member: SchoolMember,
  classId: string,
  period: { from: string; to: string }
): Promise<ClassReportData | { error: string; status: number }> {
  const { data: classData } = await admin
    .from('classes')
    .select('id, name, year_group, exam_board, teacher_id')
    .eq('id', classId)
    .eq('school_id', member.school_id)
    .single()

  if (!classData) return { error: 'Class not found', status: 404 }

  // Get teacher name
  let teacherName: string | null = null
  if (classData.teacher_id) {
    const { data: teacher } = await admin
      .from('school_members')
      .select('full_name')
      .eq('id', classData.teacher_id)
      .single()
    teacherName = teacher?.full_name || null
  }

  const { data: classStudents } = await admin
    .from('class_students')
    .select('student_id')
    .eq('class_id', classId)
    .eq('is_active', true)

  const studentIds = (classStudents || []).map((s: { student_id: string }) => s.student_id)

  if (studentIds.length === 0) {
    return {
      class_name: classData.name,
      year_group: classData.year_group,
      exam_board: classData.exam_board,
      teacher_name: teacherName,
      report_period: period,
      student_count: 0,
      avg_score: 0,
      median_score: null,
      pass_rate: 0,
      completion_rate: 0,
      top_performers: [],
      students_needing_support: [],
      student_rows: [],
    }
  }

  const [profilesResult, progressResult] = await Promise.all([
    admin.from('profiles').select('id, full_name, email').in('id', studentIds),
    admin.from('module_progress')
      .select('user_id, quiz_score, completed, completed_at')
      .in('user_id', studentIds)
      .gte('completed_at', period.from)
      .lte('completed_at', period.to),
  ])

  const profiles = (profilesResult.data || []) as Array<{ id: string; full_name: string | null; email: string }>
  const profileMap = new Map(profiles.map(p => [p.id, p]))
  const progress = (progressResult.data || []) as Array<{
    user_id: string; quiz_score: number | null; completed: boolean; completed_at: string | null
  }>

  // Per-student stats
  const studentRows = studentIds.map(sid => {
    const profile = profileMap.get(sid)
    const sp = progress.filter(p => p.user_id === sid)
    const scores = sp.filter(p => p.quiz_score !== null).map(p => p.quiz_score as number)
    const completed = sp.filter(p => p.completed).length
    const avg = scores.length > 0 ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : 0

    return {
      name: profile?.full_name || profile?.email || 'Unknown',
      avg_score: avg,
      modules_completed: completed,
      completion_rate: sp.length > 0 ? Math.round((completed / sp.length) * 100) : 0,
      trajectory: computeTrajectory(scores),
      grade_estimate: gradeFromAvg(avg || null),
      _scores: scores, // internal, stripped later
    }
  }).sort((a, b) => b.avg_score - a.avg_score)

  const allScores = progress.filter(p => p.quiz_score !== null).map(p => p.quiz_score as number)
  const sorted = [...allScores].sort((a, b) => a - b)
  const avg = allScores.length > 0
    ? Math.round(allScores.reduce((a, b) => a + b, 0) / allScores.length) : 0
  let median: number | null = null
  if (sorted.length > 0) {
    const mid = Math.floor(sorted.length / 2)
    median = sorted.length % 2 !== 0
      ? sorted[mid] : Math.round((sorted[mid - 1] + sorted[mid]) / 2)
  }

  const topPerformers = studentRows.filter(s => s.avg_score >= 70).slice(0, 5)
    .map(s => ({ name: s.name, avg_score: s.avg_score }))

  const studentsNeedingSupport = studentRows.filter(s => s.avg_score > 0 && s.avg_score < 50)
    .map(s => {
      const issues: string[] = []
      if (s.avg_score < 30) issues.push('Very low scores')
      if (s.trajectory === 'declining') issues.push('Declining trajectory')
      if (s.completion_rate < 50) issues.push('Low completion rate')
      if (issues.length === 0) issues.push('Below pass threshold')
      return { name: s.name, avg_score: s.avg_score, issues }
    })

  return {
    class_name: classData.name,
    year_group: classData.year_group,
    exam_board: classData.exam_board,
    teacher_name: teacherName,
    report_period: period,
    student_count: studentIds.length,
    avg_score: avg,
    median_score: median,
    pass_rate: allScores.length > 0
      ? Math.round((allScores.filter(s => s >= 40).length / allScores.length) * 100) : 0,
    completion_rate: progress.length > 0
      ? Math.round((progress.filter(p => p.completed).length / progress.length) * 100) : 0,
    top_performers: topPerformers,
    students_needing_support: studentsNeedingSupport,
    student_rows: studentRows.map(({ _scores, ...rest }) => rest),
  }
}

async function generateStudentReport(
  admin: AdminClient,
  member: SchoolMember,
  classId: string,
  studentId: string,
  period: { from: string; to: string }
): Promise<StudentReportData | { error: string; status: number }> {
  const { data: classData } = await admin
    .from('classes')
    .select('id, name')
    .eq('id', classId)
    .eq('school_id', member.school_id)
    .single()

  if (!classData) return { error: 'Class not found', status: 404 }

  const [profileResult, progressResult, modulesResult, coursesResult] = await Promise.all([
    admin.from('profiles').select('id, full_name, email, year_group').eq('id', studentId).single(),
    admin.from('module_progress')
      .select('user_id, module_id, course_id, quiz_score, completed, time_spent_seconds, completed_at')
      .eq('user_id', studentId)
      .gte('completed_at', period.from)
      .lte('completed_at', period.to)
      .order('completed_at', { ascending: true }),
    admin.from('modules').select('id, title, course_id'),
    admin.from('courses').select('id, title'),
  ])

  const profile = profileResult.data as { id: string; full_name: string | null; email: string; year_group: string | null } | null
  if (!profile) return { error: 'Student not found', status: 404 }

  const progress = (progressResult.data || []) as Array<{
    user_id: string; module_id: string; course_id: string;
    quiz_score: number | null; completed: boolean;
    time_spent_seconds: number; completed_at: string | null
  }>
  const moduleMap = new Map(
    (modulesResult.data || []).map((m: { id: string; title: string; course_id: string }) => [m.id, m])
  )
  const courseMap = new Map(
    (coursesResult.data || []).map((c: { id: string; title: string }) => [c.id, c.title])
  )

  const scores = progress.filter(p => p.quiz_score !== null).map(p => p.quiz_score as number)
  const avg = scores.length > 0
    ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : null
  const completed = progress.filter(p => p.completed).length

  // Identify strengths and weaknesses by course
  const courseScores = new Map<string, number[]>()
  for (const p of progress) {
    if (p.quiz_score !== null) {
      const courseName = courseMap.get(p.course_id) || p.course_id
      if (!courseScores.has(courseName)) courseScores.set(courseName, [])
      courseScores.get(courseName)!.push(p.quiz_score)
    }
  }

  const courseAvgs = Array.from(courseScores.entries()).map(([name, s]) => ({
    name,
    avg: Math.round(s.reduce((a, b) => a + b, 0) / s.length),
  })).sort((a, b) => b.avg - a.avg)

  const strengths = courseAvgs.filter(c => c.avg >= 60).slice(0, 3).map(c => `${c.name} (${c.avg}%)`)
  const areasForImprovement = courseAvgs.filter(c => c.avg < 60).slice(0, 3)
    .map(c => `${c.name} (${c.avg}%) - needs additional practice`)

  const moduleResults: ModuleResult[] = progress.map(p => {
    const mod = moduleMap.get(p.module_id) as { title: string; course_id: string } | undefined
    return {
      module_id: p.module_id,
      module_name: mod?.title || p.module_id,
      course_name: courseMap.get(p.course_id) || p.course_id,
      quiz_score: p.quiz_score,
      completed: p.completed,
      time_spent_minutes: Math.round((p.time_spent_seconds || 0) / 60),
      completed_at: p.completed_at,
    }
  })

  return {
    student_name: profile.full_name || profile.email,
    email: profile.email,
    year_group: profile.year_group,
    class_name: classData.name,
    report_period: period,
    overall_avg_score: avg,
    modules_completed: completed,
    total_modules: progress.length,
    completion_rate: progress.length > 0 ? Math.round((completed / progress.length) * 100) : 0,
    grade_estimate: gradeFromAvg(avg),
    trajectory: computeTrajectory(scores),
    strengths: strengths.length > 0 ? strengths : ['Not enough data to determine strengths yet'],
    areas_for_improvement: areasForImprovement.length > 0
      ? areasForImprovement : ['Not enough data to determine areas for improvement'],
    module_results: moduleResults,
    teacher_comment_placeholder: '[ Teacher comment to be added before sending to student/parent ]',
  }
}

async function generateParentReport(
  admin: AdminClient,
  member: SchoolMember,
  classId: string,
  studentId: string,
  period: { from: string; to: string }
): Promise<ParentReportData | { error: string; status: number }> {
  // Re-use the student report data, then reformat for parent audience
  const studentReport = await generateStudentReport(admin, member, classId, studentId, period)
  if ('error' in studentReport) return studentReport

  const sr = studentReport as StudentReportData

  // Determine effort indicator based on completion and engagement
  let effort: ParentReportData['effort_indicator'] = 'satisfactory'
  if (sr.completion_rate >= 80) effort = 'excellent'
  else if (sr.completion_rate >= 60) effort = 'good'
  else if (sr.completion_rate < 40) effort = 'needs_improvement'

  // Build parent-friendly summary
  const gradeDesc = sr.overall_avg_score !== null && sr.overall_avg_score >= 50
    ? 'meeting expectations'
    : sr.overall_avg_score !== null
      ? 'working towards meeting expectations'
      : 'still in the early stages of the course'

  const summary = `${sr.student_name} is currently ${gradeDesc} in English. ` +
    `They have completed ${sr.modules_completed} out of ${sr.total_modules} learning modules ` +
    `during this reporting period, achieving an overall score of ${sr.overall_avg_score ?? 'N/A'}%.`

  // Simplified subject areas
  const subjectsSummary = sr.strengths
    .filter(s => s !== 'Not enough data to determine strengths yet')
    .map(s => ({
      area: s.split(' (')[0],
      performance: 'Strong',
      comment: `${sr.student_name} shows good understanding in this area.`,
    }))
    .concat(
      sr.areas_for_improvement
        .filter(s => s !== 'Not enough data to determine areas for improvement')
        .map(s => ({
          area: s.split(' (')[0],
          performance: 'Developing',
          comment: `Additional practice in this area would help ${sr.student_name} improve.`,
        }))
    )

  // Get teacher name from class
  const { data: classData } = await admin
    .from('classes')
    .select('teacher_id')
    .eq('id', classId)
    .single()

  let teacherName: string | null = null
  if (classData?.teacher_id) {
    const { data: teacher } = await admin
      .from('school_members')
      .select('full_name')
      .eq('id', classData.teacher_id)
      .single()
    teacherName = teacher?.full_name || null
  }

  const nextSteps: string[] = []
  if (sr.completion_rate < 60) {
    nextSteps.push(`Encourage ${sr.student_name} to complete outstanding learning modules regularly.`)
  }
  if (sr.overall_avg_score !== null && sr.overall_avg_score < 50) {
    nextSteps.push('Consider additional revision sessions or tutoring to reinforce key concepts.')
  }
  if (sr.trajectory === 'declining') {
    nextSteps.push('We have noticed a recent dip in performance and will monitor this closely.')
  }
  if (nextSteps.length === 0) {
    nextSteps.push(`${sr.student_name} is making good progress. Continue to encourage regular study habits.`)
  }

  return {
    student_name: sr.student_name,
    class_name: sr.class_name,
    year_group: sr.year_group,
    report_period: period,
    summary,
    overall_grade: `Grade ${sr.grade_estimate}`,
    effort_indicator: effort,
    subjects_summary: subjectsSummary,
    attendance_note: 'Attendance data is managed separately by the school office.',
    next_steps: nextSteps,
    teacher_name: teacherName,
  }
}

async function generateHodReport(
  admin: AdminClient,
  member: SchoolMember,
  period: { from: string; to: string }
): Promise<HodReportData | { error: string; status: number }> {
  const schoolId = member.school_id

  const [schoolResult, classesResult, membersResult] = await Promise.all([
    admin.from('schools').select('name').eq('id', schoolId).single(),
    admin.from('classes')
      .select('id, name, year_group, teacher_id')
      .eq('school_id', schoolId)
      .eq('is_active', true),
    admin.from('school_members')
      .select('id, full_name, role')
      .eq('school_id', schoolId)
      .eq('invite_status', 'accepted'),
  ])

  if (!schoolResult.data) return { error: 'School not found', status: 404 }

  const classes = (classesResult.data || []) as Array<{
    id: string; name: string; year_group: string | null; teacher_id: string | null
  }>
  const memberMap = new Map(
    (membersResult.data || []).map((m: { id: string; full_name: string | null }) => [m.id, m])
  )
  const classIds = classes.map(c => c.id)

  if (classIds.length === 0) {
    return {
      school_name: schoolResult.data.name,
      report_period: period,
      department_avg_score: 0,
      total_students: 0,
      total_classes: 0,
      pass_rate: 0,
      class_rankings: [],
      year_group_summary: [],
      key_concerns: ['No active classes found'],
      recommendations: ['Set up classes and invite teachers to get started'],
    }
  }

  const { data: allClassStudents } = await admin
    .from('class_students')
    .select('student_id, class_id')
    .in('class_id', classIds)
    .eq('is_active', true)

  const classStudentsData = (allClassStudents || []) as Array<{ student_id: string; class_id: string }>
  const allStudentIds = Array.from(new Set(classStudentsData.map(cs => cs.student_id)))

  const studentsByClass = new Map<string, string[]>()
  for (const cs of classStudentsData) {
    if (!studentsByClass.has(cs.class_id)) studentsByClass.set(cs.class_id, [])
    studentsByClass.get(cs.class_id)!.push(cs.student_id)
  }

  let progressData: Array<{
    user_id: string; quiz_score: number | null; completed: boolean; completed_at: string | null
  }> = []

  if (allStudentIds.length > 0) {
    const { data } = await admin
      .from('module_progress')
      .select('user_id, quiz_score, completed, completed_at')
      .in('user_id', allStudentIds)
      .gte('completed_at', period.from)
      .lte('completed_at', period.to)
      .order('completed_at', { ascending: true })
    progressData = (data || []) as typeof progressData
  }

  // Per-student aggregates
  const studentAgg = new Map<string, { totalScore: number; count: number; completed: number; total: number; firstScores: number[]; lastScores: number[] }>()
  for (const p of progressData) {
    if (!studentAgg.has(p.user_id)) {
      studentAgg.set(p.user_id, { totalScore: 0, count: 0, completed: 0, total: 0, firstScores: [], lastScores: [] })
    }
    const agg = studentAgg.get(p.user_id)!
    agg.total++
    if (p.completed) agg.completed++
    if (p.quiz_score !== null) {
      agg.totalScore += p.quiz_score
      agg.count++
      if (agg.firstScores.length < 3) agg.firstScores.push(p.quiz_score)
      agg.lastScores.push(p.quiz_score)
      if (agg.lastScores.length > 3) agg.lastScores.shift()
    }
  }

  // Class rankings
  const classRankings = classes.map(cls => {
    const sids = studentsByClass.get(cls.id) || []
    let totalScore = 0
    let scoreCount = 0
    let completedCount = 0
    let progressCount = 0
    let totalChange = 0
    let changeStudents = 0

    for (const sid of sids) {
      const agg = studentAgg.get(sid)
      if (agg) {
        totalScore += agg.totalScore
        scoreCount += agg.count
        completedCount += agg.completed
        progressCount += agg.total
        if (agg.firstScores.length >= 2 && agg.lastScores.length >= 2) {
          const firstAvg = agg.firstScores.reduce((a, b) => a + b, 0) / agg.firstScores.length
          const lastAvg = agg.lastScores.reduce((a, b) => a + b, 0) / agg.lastScores.length
          totalChange += lastAvg - firstAvg
          changeStudents++
        }
      }
    }

    const teacher = cls.teacher_id ? memberMap.get(cls.teacher_id) : null
    return {
      class_name: cls.name,
      teacher_name: teacher?.full_name || null,
      avg_score: scoreCount > 0 ? Math.round(totalScore / scoreCount) : 0,
      completion_rate: progressCount > 0 ? Math.round((completedCount / progressCount) * 100) : 0,
      value_added: changeStudents > 0 ? Math.round((totalChange / changeStudents) * 10) / 10 : 0,
    }
  }).sort((a, b) => b.avg_score - a.avg_score)

  // Year group summaries
  const yearGroups = Array.from(new Set(classes.map(c => c.year_group || 'Unknown')))
  const yearGroupSummary = yearGroups.map(yg => {
    const ygClasses = classes.filter(c => (c.year_group || 'Unknown') === yg)
    let totalScore = 0
    let scoreCount = 0
    let totalStudents = 0
    let passCount = 0

    for (const cls of ygClasses) {
      const sids = studentsByClass.get(cls.id) || []
      totalStudents += sids.length
      for (const sid of sids) {
        const agg = studentAgg.get(sid)
        if (agg && agg.count > 0) {
          const studentAvg = agg.totalScore / agg.count
          totalScore += studentAvg
          scoreCount++
          if (studentAvg >= 40) passCount++
        }
      }
    }

    return {
      year_group: yg,
      avg_score: scoreCount > 0 ? Math.round(totalScore / scoreCount) : 0,
      student_count: totalStudents,
      pass_rate: scoreCount > 0 ? Math.round((passCount / scoreCount) * 100) : 0,
    }
  })

  // Department-wide stats
  const allScores = progressData.filter(p => p.quiz_score !== null).map(p => p.quiz_score as number)
  const deptAvg = allScores.length > 0
    ? Math.round(allScores.reduce((a, b) => a + b, 0) / allScores.length) : 0
  const deptPassRate = allScores.length > 0
    ? Math.round((allScores.filter(s => s >= 40).length / allScores.length) * 100) : 0

  // Key concerns
  const keyConcerns: string[] = []
  const lowPerformingClasses = classRankings.filter(c => c.avg_score > 0 && c.avg_score < 50)
  if (lowPerformingClasses.length > 0) {
    keyConcerns.push(`${lowPerformingClasses.length} class(es) averaging below 50%: ${lowPerformingClasses.map(c => c.class_name).join(', ')}`)
  }
  const lowCompletionClasses = classRankings.filter(c => c.completion_rate < 50)
  if (lowCompletionClasses.length > 0) {
    keyConcerns.push(`${lowCompletionClasses.length} class(es) with completion rates below 50%`)
  }
  const negativeValueAdded = classRankings.filter(c => c.value_added < -5)
  if (negativeValueAdded.length > 0) {
    keyConcerns.push(`${negativeValueAdded.length} class(es) showing negative value-added (declining student scores)`)
  }
  if (keyConcerns.length === 0) {
    keyConcerns.push('No critical concerns identified in this reporting period')
  }

  // Recommendations
  const recommendations: string[] = []
  if (lowPerformingClasses.length > 0) {
    recommendations.push('Schedule lesson observations or collaborative planning sessions for classes averaging below 50%.')
  }
  if (negativeValueAdded.length > 0) {
    recommendations.push('Investigate declining performance trends and consider providing additional CPD or resources.')
  }
  const highPerformers = classRankings.filter(c => c.avg_score >= 70 && c.value_added > 5)
  if (highPerformers.length > 0) {
    recommendations.push(`Share best practice from high-performing classes: ${highPerformers.map(c => c.class_name).join(', ')}.`)
  }
  if (recommendations.length === 0) {
    recommendations.push('Continue monitoring performance data and schedule regular department reviews.')
  }

  return {
    school_name: schoolResult.data.name,
    report_period: period,
    department_avg_score: deptAvg,
    total_students: allStudentIds.length,
    total_classes: classIds.length,
    pass_rate: deptPassRate,
    class_rankings: classRankings,
    year_group_summary: yearGroupSummary,
    key_concerns: keyConcerns,
    recommendations,
  }
}
