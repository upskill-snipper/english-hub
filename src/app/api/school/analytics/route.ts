import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase/server'
import { verifySchoolMember } from '@/lib/school-auth'
import { rateLimit, getClientIp } from '@/lib/rate-limit'
import { getSchoolStudents, type SchoolStudentRecord } from '@/lib/school-students'

export const dynamic = 'force-dynamic'

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface AtRiskStudent {
  userId: string
  name: string
  email: string
  yearGroup: string
  lastActiveAt: string
  issues: string[]
}

interface YearGroupStat {
  yearGroup: string
  studentCount: number
  averageProgress: number
  assignmentsCompleted: number
  atRiskCount: number
}

interface TopClass {
  classId: string
  className: string
  teacherName: string
  studentCount: number
  averageScore: number
}

interface ResourceUsage {
  resourceName: string
  accessCount: number
}

interface WeeklyActivity {
  weekStart: string
  activeStudents: number
  assignmentsSubmitted: number
}

interface AnalyticsResponse {
  totalStudents: number
  totalTeachers: number
  totalClasses: number
  activeStudentsThisWeek: number
  assignmentsSubmittedThisWeek: number
  /** Null when no scored work exists yet - never a fabricated value. */
  averageScore: number | null
  atRiskStudents: AtRiskStudent[]
  yearGroupStats: YearGroupStat[]
  topClasses: TopClass[]
  resourceUsage: ResourceUsage[]
  weeklyActivity: WeeklyActivity[]
}

// NOTE: this route previously carried mock/fallback generators (a fixed
// averageScore of 62, three invented classes, six invented resource rows and
// a Math.random() weekly-activity series). All fabricated fallbacks were
// removed on 2026-08-18: a children's education product must never present
// invented figures as real school data. Empty/null values are returned
// honestly and the UI owns the empty states.

// ---------------------------------------------------------------------------
// GET /api/school/analytics
//
// Auth: school admin or teacher (teachers see only their own classes).
// Query params:
//   period  - "week" | "month" | "term" | "year"  (default: "month")
//
// Returns comprehensive analytics for the school dashboard.
// ---------------------------------------------------------------------------

export async function GET(request: NextRequest) {
  try {
    // ── Rate limit ──────────────────────────────────────────────────────────
    const ip = getClientIp(request.headers)
    const rl = await rateLimit(`school-analytics:${ip}`, { limit: 20, windowSeconds: 60 })
    if (!rl.success) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        {
          status: 429,
          headers: { 'Retry-After': String(Math.ceil((rl.resetAt - Date.now()) / 1000)) },
        },
      )
    }

    // ── Auth ────────────────────────────────────────────────────────────────
    const supabase = createServerSupabaseClient()
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()
    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const member = await verifySchoolMember(user.id, ['admin', 'head_of_department', 'teacher'])
    if (!member) {
      return NextResponse.json(
        { error: 'Forbidden: school admin or teacher access required' },
        { status: 403 },
      )
    }

    const isTeacher = member.role === 'teacher'
    const admin = createServiceRoleClient()
    const schoolId = member.school_id as string

    // ── Period window ───────────────────────────────────────────────────────
    const { searchParams } = new URL(request.url)
    const period = searchParams.get('period') ?? 'month'

    const periodMs: Record<string, number> = {
      week: 7 * 24 * 60 * 60 * 1000,
      month: 30 * 24 * 60 * 60 * 1000,
      term: 90 * 24 * 60 * 60 * 1000,
      year: 365 * 24 * 60 * 60 * 1000,
    }
    const windowMs = periodMs[period] ?? periodMs.month
    const periodStart = new Date(Date.now() - windowMs).toISOString()
    const oneWeekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString()
    const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)

    // ── Fetch school members (staff) + canonical students ───────────────────
    // Staff come from school_members; students come from the shared
    // getSchoolStudents helper, which unions school_members role='student'
    // with school_students (the join-code flow) so both write paths count.
    const [schoolResult, membersResult, studentRecords] = await Promise.all([
      admin.from('schools').select('id, name').eq('id', schoolId).single(),
      admin
        .from('school_members')
        .select('id, user_id, full_name, email, role, year_group, last_active_at, invite_status')
        .eq('school_id', schoolId)
        .eq('invite_status', 'accepted'),
      getSchoolStudents(admin, schoolId, { acceptedOnly: true }),
    ])

    if (!schoolResult.data) {
      return NextResponse.json({ error: 'School not found' }, { status: 404 })
    }

    type MemberRow = {
      id: string
      user_id: string
      full_name: string | null
      email: string | null
      role: string
      year_group: string | null
      last_active_at: string | null
      invite_status: string
    }

    const allMembers = (membersResult.data ?? []) as MemberRow[]
    const studentMembers = studentRecords.filter(
      (s): s is SchoolStudentRecord & { user_id: string } => s.user_id !== null,
    )
    const teacherMembers = allMembers.filter(
      (m) => m.role === 'teacher' || m.role === 'head_of_department' || m.role === 'admin',
    )

    // ── Fetch classes ───────────────────────────────────────────────────────
    // Teachers only see their own classes; admins see all.
    let classesQuery = admin
      .from('classes')
      .select('id, name, teacher_id, year_group, is_active')
      .eq('school_id', schoolId)
      .eq('is_active', true)

    if (isTeacher) {
      classesQuery = classesQuery.eq('teacher_id', member.id)
    }

    const { data: classRows } = await classesQuery.order('name')
    type ClassRow = {
      id: string
      name: string
      teacher_id: string | null
      year_group: string | null
      is_active: boolean
    }
    const classes = (classRows ?? []) as ClassRow[]
    const classIds = classes.map((c) => c.id)

    // ── Count unique students in classes (for teacher scope) ────────────────
    // For admins use school_members; for teachers use class_students.
    let scopedStudentIds: string[] = []

    if (isTeacher && classIds.length > 0) {
      const { data: csRows } = await admin
        .from('class_students')
        .select('student_id')
        .in('class_id', classIds)
        .eq('is_active', true)
      scopedStudentIds = Array.from(
        new Set((csRows ?? []).map((r: { student_id: string }) => r.student_id)),
      )
    } else {
      scopedStudentIds = Array.from(new Set(studentMembers.map((m) => m.user_id)))
    }

    const totalStudents = isTeacher ? scopedStudentIds.length : studentMembers.length
    const totalTeachers = teacherMembers.length
    const totalClasses = classes.length

    // ── Active students this week ───────────────────────────────────────────
    // Primary: last_active_at on school_members (students active in last 7 days).
    // Fallback: count from module_progress.
    let activeStudentsThisWeek = 0

    const activeFromMembers = studentMembers.filter(
      (m) =>
        m.last_active_at &&
        new Date(m.last_active_at) >= sevenDaysAgo &&
        (isTeacher ? scopedStudentIds.includes(m.user_id) : true),
    )

    if (activeFromMembers.length > 0) {
      activeStudentsThisWeek = activeFromMembers.length
    } else if (scopedStudentIds.length > 0) {
      // Fallback: derive from module_progress
      const { data: activeRows } = await admin
        .from('module_progress')
        .select('user_id')
        .in('user_id', scopedStudentIds)
        .gte('completed_at', oneWeekAgo)
        .not('completed_at', 'is', null)

      activeStudentsThisWeek = new Set(
        (activeRows ?? []).map((r: { user_id: string }) => r.user_id),
      ).size
    }

    // ── Assignments submitted this week ─────────────────────────────────────
    let assignmentsSubmittedThisWeek = 0

    if (classIds.length > 0) {
      const { count: assignmentCount } = await admin
        .from('assignments')
        .select('id', { count: 'exact', head: true })
        .in('class_id', classIds)
        .gte('created_at', oneWeekAgo)

      assignmentsSubmittedThisWeek = assignmentCount ?? 0
    }

    // ── Average score from module_progress ─────────────────────────────────
    // Null when there is no scored work in the period. The previous fixed
    // fallback of 62 was a fabricated statistic and has been removed.
    let averageScore: number | null = null

    if (scopedStudentIds.length > 0) {
      const { data: scoreRows } = await admin
        .from('module_progress')
        .select('quiz_score')
        .in('user_id', scopedStudentIds)
        .not('quiz_score', 'is', null)
        .gte('completed_at', periodStart)

      const scores = (scoreRows ?? [])
        .map((r: { quiz_score: number }) => r.quiz_score)
        .filter((s: number) => typeof s === 'number')

      if (scores.length > 0) {
        averageScore = Math.round(scores.reduce((a: number, b: number) => a + b, 0) / scores.length)
      }
    }

    // ── At-risk students ────────────────────────────────────────────────────
    // Students inactive for 7+ days OR with low average scores.
    const atRiskStudents: AtRiskStudent[] = []

    const relevantStudentMembers = isTeacher
      ? studentMembers.filter((m) => scopedStudentIds.includes(m.user_id))
      : studentMembers

    // Determine average scores per student for risk detection. The per-student
    // completion counts are kept too so year-group stats can report a REAL
    // completed-work figure instead of the previous invented one.
    let studentScoreMap = new Map<string, number>()
    const studentCompletedCountMap = new Map<string, number>()

    if (scopedStudentIds.length > 0) {
      const { data: allProgressRows } = await admin
        .from('module_progress')
        .select('user_id, quiz_score')
        .in('user_id', scopedStudentIds)
        .not('quiz_score', 'is', null)

      const scoreAccum = new Map<string, { total: number; count: number }>()
      for (const row of allProgressRows ?? []) {
        const r = row as { user_id: string; quiz_score: number }
        if (!scoreAccum.has(r.user_id)) scoreAccum.set(r.user_id, { total: 0, count: 0 })
        const entry = scoreAccum.get(r.user_id)!
        entry.total += r.quiz_score
        entry.count++
      }

      for (const [uid, agg] of scoreAccum) {
        studentScoreMap.set(uid, Math.round(agg.total / agg.count))
        studentCompletedCountMap.set(uid, agg.count)
      }
    }

    for (const student of relevantStudentMembers) {
      const issues: string[] = []
      const lastActive = student.last_active_at ? new Date(student.last_active_at) : null
      const inactiveDays = lastActive
        ? Math.floor((Date.now() - lastActive.getTime()) / (24 * 60 * 60 * 1000))
        : null

      if (inactiveDays !== null && inactiveDays >= 7) {
        issues.push(`Inactive for ${inactiveDays} days`)
      } else if (inactiveDays === null) {
        issues.push('Never logged in')
      }

      const studentAvg = studentScoreMap.get(student.user_id)
      if (studentAvg !== undefined && studentAvg < 40) {
        issues.push(`Low average score: ${studentAvg}%`)
      }

      if (issues.length > 0) {
        const entry: AtRiskStudent = {
          userId: student.user_id,
          name: student.full_name ?? 'Unknown',
          email: member.role === 'admin' ? (student.email ?? '') : '',
          yearGroup: student.year_group ?? 'Unknown',
          lastActiveAt: student.last_active_at ?? new Date(0).toISOString(),
          issues,
        }
        atRiskStudents.push(entry)
      }
    }

    // If no real at-risk data, return empty array (not mocked - it's high-stakes info).
    // Cap at 20 to keep response size reasonable.
    const cappedAtRisk = atRiskStudents.slice(0, 20)

    // ── Year group stats ────────────────────────────────────────────────────
    // Group students by year_group from school_members.
    const yearGroupMap = new Map<string, { studentIds: string[]; atRiskCount: number }>()

    for (const student of relevantStudentMembers) {
      const yg = student.year_group ?? 'Unknown'
      if (!yearGroupMap.has(yg)) yearGroupMap.set(yg, { studentIds: [], atRiskCount: 0 })
      const entry = yearGroupMap.get(yg)!
      entry.studentIds.push(student.user_id)
    }

    // Count at-risk per year group
    for (const risk of cappedAtRisk) {
      const yg = risk.yearGroup
      if (yearGroupMap.has(yg)) {
        yearGroupMap.get(yg)!.atRiskCount++
      }
    }

    const yearGroupStats: YearGroupStat[] = []
    for (const [yg, data] of yearGroupMap) {
      // Compute average progress for this year group from scoreMap
      const ygScores = data.studentIds
        .map((uid) => studentScoreMap.get(uid))
        .filter((s): s is number => s !== undefined)

      const averageProgress =
        ygScores.length > 0 ? Math.round(ygScores.reduce((a, b) => a + b, 0) / ygScores.length) : 0

      // assignmentsCompleted: the real count of scored module completions
      // for this year group's students. Zero when nothing is completed -
      // the previous pseudo-random placeholder was a fabricated statistic.
      const assignmentsCompleted = data.studentIds.reduce(
        (sum, uid) => sum + (studentCompletedCountMap.get(uid) ?? 0),
        0,
      )

      yearGroupStats.push({
        yearGroup: yg,
        studentCount: data.studentIds.length,
        averageProgress,
        assignmentsCompleted,
        atRiskCount: data.atRiskCount,
      })
    }

    // Sort by year group name
    yearGroupStats.sort((a, b) => a.yearGroup.localeCompare(b.yearGroup))

    // ── Top classes by average score ────────────────────────────────────────
    const topClasses: TopClass[] = []

    if (classIds.length > 0) {
      // Fetch class students
      const { data: csAllRows } = await admin
        .from('class_students')
        .select('student_id, class_id')
        .in('class_id', classIds)
        .eq('is_active', true)

      type CSRow = { student_id: string; class_id: string }
      const csByClass = new Map<string, string[]>()
      for (const row of (csAllRows ?? []) as CSRow[]) {
        if (!csByClass.has(row.class_id)) csByClass.set(row.class_id, [])
        csByClass.get(row.class_id)!.push(row.student_id)
      }

      // Build teacher lookup from allMembers (by member id, since teacher_id refs member.id)
      const memberById = new Map(allMembers.map((m) => [m.id, m]))

      for (const cls of classes) {
        const classStudentIds = csByClass.get(cls.id) ?? []
        const classScores = classStudentIds
          .map((uid) => studentScoreMap.get(uid))
          .filter((s): s is number => s !== undefined)

        const avgScore =
          classScores.length > 0
            ? Math.round(classScores.reduce((a, b) => a + b, 0) / classScores.length)
            : 0

        const teacher = cls.teacher_id ? memberById.get(cls.teacher_id) : null

        topClasses.push({
          classId: cls.id,
          className: cls.name,
          teacherName: teacher?.full_name ?? 'Unknown',
          studentCount: classStudentIds.length,
          averageScore: avgScore,
        })
      }

      // Sort descending by averageScore, take top 5
      topClasses.sort((a, b) => b.averageScore - a.averageScore)
      topClasses.splice(5)
    }

    // No class data yet is reported honestly as an empty list. The previous
    // three invented classes (with named teachers) were fabricated data.

    // ── Resource usage ──────────────────────────────────────────────────────
    // No resource-access tracking table exists in the committed schema, so
    // there is nothing truthful to report yet. Empty until real per-resource
    // tracking lands - the previous six invented rows were fabricated data.
    const resourceUsage: ResourceUsage[] = []

    // ── Weekly activity (last 8 weeks) ──────────────────────────────────────
    const weeklyActivity: WeeklyActivity[] = []
    const WEEKS = 8

    if (scopedStudentIds.length > 0) {
      // Fetch module_progress completed_at for all students in this school
      const eightWeeksAgo = new Date(Date.now() - WEEKS * 7 * 24 * 60 * 60 * 1000).toISOString()

      const { data: weeklyProgressRows } = await admin
        .from('module_progress')
        .select('user_id, completed_at')
        .in('user_id', scopedStudentIds)
        .gte('completed_at', eightWeeksAgo)
        .not('completed_at', 'is', null)

      // Also fetch assignment submissions if the table has submitted_at.
      // Scoped to this school's students: without the .in filter this
      // counted every school's submissions into this school's chart.
      const { data: weeklyAssignRows } = await admin
        .from('assignment_submissions')
        .select('student_id, submitted_at')
        .in('student_id', scopedStudentIds)
        .gte('submitted_at', eightWeeksAgo)
        .not('submitted_at', 'is', null)

      type ProgressRow = { user_id: string; completed_at: string }
      type AssignRow = { student_id: string; submitted_at: string }

      const progressRows = (weeklyProgressRows ?? []) as ProgressRow[]
      const assignRows = (weeklyAssignRows ?? []) as AssignRow[]

      for (let i = WEEKS - 1; i >= 0; i--) {
        const wStart = new Date(Date.now() - (i + 1) * 7 * 24 * 60 * 60 * 1000)
        const wEnd = new Date(Date.now() - i * 7 * 24 * 60 * 60 * 1000)
        const wStartISO = wStart.toISOString()
        const wEndISO = wEnd.toISOString()

        const activeInWeek = new Set(
          progressRows
            .filter((r) => r.completed_at >= wStartISO && r.completed_at < wEndISO)
            .map((r) => r.user_id),
        ).size

        const submittedInWeek = assignRows.filter(
          (r) => r.submitted_at >= wStartISO && r.submitted_at < wEndISO,
        ).length

        weeklyActivity.push({
          weekStart: wStart.toISOString().split('T')[0],
          activeStudents: activeInWeek,
          assignmentsSubmitted: submittedInWeek,
        })
      }
    }

    // An all-zero series is returned as-is: it is the truth about a school
    // with no activity yet. The previous Math.random() replacement chart
    // was fabricated data and changed on every refresh.

    // ── Build and return response ────────────────────────────────────────────
    const response: AnalyticsResponse = {
      totalStudents,
      totalTeachers,
      totalClasses,
      activeStudentsThisWeek,
      assignmentsSubmittedThisWeek,
      averageScore,
      atRiskStudents: cappedAtRisk,
      yearGroupStats,
      topClasses,
      resourceUsage,
      weeklyActivity,
    }

    return NextResponse.json(response)
  } catch (error) {
    console.error('[school/analytics] GET error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
