import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase/server'
import { verifySchoolMember } from '@/lib/school-auth'
import { rateLimit, getClientIp } from '@/lib/rate-limit'

export const dynamic = 'force-dynamic'

// ── Types ──

interface TeacherPerformanceSummary {
  teacher_id: string
  teacher_name: string | null
  classes: Array<{
    class_id: string
    class_name: string
    year_group: string | null
    student_count: number
    avg_score: number
    completion_rate: number
    students_at_risk: number
  }>
  overall_avg_score: number
  overall_completion_rate: number
  total_students: number
  total_at_risk: number
}

interface CrossClassComparison {
  class_id: string
  class_name: string
  year_group: string | null
  teacher_name: string | null
  avg_score: number
  median_score: number | null
  completion_rate: number
  student_count: number
  /** Difference from the year-group average */
  variance_from_year_group_avg: number | null
}

interface ValueAddedMetric {
  class_id: string
  class_name: string
  teacher_name: string | null
  /** Average improvement from first to most recent assessment */
  avg_score_change: number
  /** Percentage of students who improved */
  pct_students_improved: number
  /** Percentage of students who met or exceeded expectations */
  pct_meeting_target: number
}

interface YearGroupSummary {
  year_group: string
  class_count: number
  student_count: number
  avg_score: number
  completion_rate: number
  at_risk_count: number
}

interface DepartmentOverviewResponse {
  school_id: string
  school_name: string
  teacher_summaries: TeacherPerformanceSummary[]
  cross_class_comparisons: CrossClassComparison[]
  value_added_metrics: ValueAddedMetric[]
  year_group_summaries: YearGroupSummary[]
  department_avg_score: number
  department_completion_rate: number
  total_students: number
  total_classes: number
  generated_at: string
}

/**
 * GET /api/school/analytics/department-overview
 *
 * Head of Department dashboard data. Restricted to admin and head_of_department roles.
 *
 * Returns:
 * - Per-teacher performance summaries (their classes, avg scores, at-risk counts)
 * - Cross-class comparisons within the same year group
 * - Value-added metrics: how much students have improved under each teacher
 * - Year group summaries
 *
 * In production, value-added metrics would use baseline assessments (e.g., CAT scores
 * or KS2 SATs results) compared against current performance to measure genuine
 * progress rather than raw attainment.
 */
export async function GET(request: NextRequest) {
  try {
    const ip = getClientIp(request.headers)
    const rl = await rateLimit(`school-dept-overview:${ip}`, { limit: 15, windowSeconds: 60 })
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

    // Restricted to HoD and admin roles
    const member = await verifySchoolMember(user.id, ['admin', 'head_of_department'])
    if (!member) {
      return NextResponse.json(
        { error: 'Forbidden: requires admin or head of department role' },
        { status: 403 }
      )
    }

    const admin = createServiceRoleClient()
    const schoolId = member.school_id

    // Fetch school, members, and classes in parallel
    const [schoolResult, membersResult, classesResult] = await Promise.all([
      admin.from('schools').select('id, name').eq('id', schoolId).single(),
      admin.from('school_members')
        .select('id, user_id, full_name, role')
        .eq('school_id', schoolId)
        .eq('invite_status', 'accepted'),
      admin.from('classes')
        .select('id, name, year_group, exam_board, teacher_id, is_active')
        .eq('school_id', schoolId)
        .eq('is_active', true)
        .order('year_group')
        .order('name'),
    ])

    if (!schoolResult.data) {
      return NextResponse.json({ error: 'School not found' }, { status: 404 })
    }

    const school = schoolResult.data
    const members = (membersResult.data || []) as Array<{
      id: string; user_id: string; full_name: string | null; role: string
    }>
    const classes = (classesResult.data || []) as Array<{
      id: string; name: string; year_group: string | null;
      exam_board: string | null; teacher_id: string | null; is_active: boolean
    }>

    const memberMap = new Map(members.map(m => [m.id, m]))
    const teachers = members.filter(m => m.role === 'teacher' || m.role === 'head_of_department')
    const classIds = classes.map(c => c.id)

    if (classIds.length === 0) {
      const emptyResponse: DepartmentOverviewResponse = {
        school_id: schoolId,
        school_name: school.name,
        teacher_summaries: [],
        cross_class_comparisons: [],
        value_added_metrics: [],
        year_group_summaries: [],
        department_avg_score: 0,
        department_completion_rate: 0,
        total_students: 0,
        total_classes: 0,
        generated_at: new Date().toISOString(),
      }
      return NextResponse.json(emptyResponse)
    }

    // Fetch class students and progress
    const { data: allClassStudents } = await admin
      .from('class_students')
      .select('student_id, class_id')
      .in('class_id', classIds)
      .eq('is_active', true)

    const classStudentsData = (allClassStudents || []) as Array<{ student_id: string; class_id: string }>
    const allStudentIds = Array.from(new Set(classStudentsData.map(cs => cs.student_id)))

    // Group students by class
    const studentsByClass = new Map<string, string[]>()
    for (const cs of classStudentsData) {
      if (!studentsByClass.has(cs.class_id)) studentsByClass.set(cs.class_id, [])
      studentsByClass.get(cs.class_id)!.push(cs.student_id)
    }

    // Fetch all progress data
    let progressData: Array<{
      user_id: string; module_id: string; quiz_score: number | null;
      completed: boolean; completed_at: string | null
    }> = []

    if (allStudentIds.length > 0) {
      const { data } = await admin
        .from('module_progress')
        .select('user_id, module_id, quiz_score, completed, completed_at')
        .in('user_id', allStudentIds)
        .order('completed_at', { ascending: true })
      progressData = (data || []) as typeof progressData
    }

    // Build per-student score aggregates
    const studentScoreAgg = new Map<string, {
      totalScore: number; count: number; completed: number; total: number
      firstScores: number[]; lastScores: number[]
    }>()

    for (const p of progressData) {
      if (!studentScoreAgg.has(p.user_id)) {
        studentScoreAgg.set(p.user_id, {
          totalScore: 0, count: 0, completed: 0, total: 0,
          firstScores: [], lastScores: [],
        })
      }
      const agg = studentScoreAgg.get(p.user_id)!
      agg.total++
      if (p.completed) agg.completed++
      if (p.quiz_score !== null) {
        agg.totalScore += p.quiz_score
        agg.count++
        // Track first 3 and last 3 scores for value-added
        if (agg.firstScores.length < 3) agg.firstScores.push(p.quiz_score)
        agg.lastScores.push(p.quiz_score)
        if (agg.lastScores.length > 3) agg.lastScores.shift()
      }
    }

    // ── Helper: compute class-level stats ──
    const computeClassStats = (classStudentIds: string[]) => {
      let totalScore = 0
      let scoreCount = 0
      let completedTotal = 0
      let progressTotal = 0
      let atRisk = 0
      const allClassScores: number[] = []

      for (const sid of classStudentIds) {
        const agg = studentScoreAgg.get(sid)
        if (agg) {
          totalScore += agg.totalScore
          scoreCount += agg.count
          completedTotal += agg.completed
          progressTotal += agg.total
          if (agg.count > 0) {
            const studentAvg = agg.totalScore / agg.count
            allClassScores.push(studentAvg)
            if (studentAvg < 50) atRisk++
          }
        }
      }

      const avgScore = scoreCount > 0 ? Math.round(totalScore / scoreCount) : 0
      const completionRate = progressTotal > 0
        ? Math.round((completedTotal / progressTotal) * 100) : 0

      // Median
      let medianScore: number | null = null
      if (allClassScores.length > 0) {
        const sorted = [...allClassScores].sort((a, b) => a - b)
        const mid = Math.floor(sorted.length / 2)
        medianScore = sorted.length % 2 !== 0
          ? Math.round(sorted[mid])
          : Math.round((sorted[mid - 1] + sorted[mid]) / 2)
      }

      return { avgScore, medianScore, completionRate, atRisk }
    }

    // ── Teacher summaries ──
    const teacherSummaries: TeacherPerformanceSummary[] = teachers.map(teacher => {
      const teacherClasses = classes.filter(c => c.teacher_id === teacher.id)
      const classSummaries = teacherClasses.map(cls => {
        const classStudentIds = studentsByClass.get(cls.id) || []
        const stats = computeClassStats(classStudentIds)
        return {
          class_id: cls.id,
          class_name: cls.name,
          year_group: cls.year_group,
          student_count: classStudentIds.length,
          avg_score: stats.avgScore,
          completion_rate: stats.completionRate,
          students_at_risk: stats.atRisk,
        }
      })

      const totalStudents = classSummaries.reduce((sum, c) => sum + c.student_count, 0)
      const totalAtRisk = classSummaries.reduce((sum, c) => sum + c.students_at_risk, 0)

      // Weighted averages across classes
      let weightedScoreSum = 0
      let weightedCompletionSum = 0
      let totalWeight = 0
      for (const c of classSummaries) {
        if (c.student_count > 0) {
          weightedScoreSum += c.avg_score * c.student_count
          weightedCompletionSum += c.completion_rate * c.student_count
          totalWeight += c.student_count
        }
      }

      return {
        teacher_id: teacher.id,
        teacher_name: teacher.full_name,
        classes: classSummaries,
        overall_avg_score: totalWeight > 0 ? Math.round(weightedScoreSum / totalWeight) : 0,
        overall_completion_rate: totalWeight > 0 ? Math.round(weightedCompletionSum / totalWeight) : 0,
        total_students: totalStudents,
        total_at_risk: totalAtRisk,
      }
    })

    // ── Cross-class comparisons ──
    // Group classes by year_group to compute year-group averages
    const yearGroupAvgs = new Map<string, { totalScore: number; count: number }>()
    for (const cls of classes) {
      const yg = cls.year_group || 'Unknown'
      const classStudentIds = studentsByClass.get(cls.id) || []
      const stats = computeClassStats(classStudentIds)
      if (!yearGroupAvgs.has(yg)) yearGroupAvgs.set(yg, { totalScore: 0, count: 0 })
      const entry = yearGroupAvgs.get(yg)!
      if (classStudentIds.length > 0) {
        entry.totalScore += stats.avgScore * classStudentIds.length
        entry.count += classStudentIds.length
      }
    }

    const crossClassComparisons: CrossClassComparison[] = classes.map(cls => {
      const classStudentIds = studentsByClass.get(cls.id) || []
      const stats = computeClassStats(classStudentIds)
      const teacher = cls.teacher_id ? memberMap.get(cls.teacher_id) : null
      const yg = cls.year_group || 'Unknown'
      const ygEntry = yearGroupAvgs.get(yg)
      const ygAvg = ygEntry && ygEntry.count > 0
        ? Math.round(ygEntry.totalScore / ygEntry.count) : null

      return {
        class_id: cls.id,
        class_name: cls.name,
        year_group: cls.year_group,
        teacher_name: teacher?.full_name || null,
        avg_score: stats.avgScore,
        median_score: stats.medianScore,
        completion_rate: stats.completionRate,
        student_count: classStudentIds.length,
        variance_from_year_group_avg: ygAvg !== null ? stats.avgScore - ygAvg : null,
      }
    })

    // ── Value-added metrics ──
    // Compare each student's first 3 scores to their last 3 scores
    const valueAddedMetrics: ValueAddedMetric[] = classes.map(cls => {
      const classStudentIds = studentsByClass.get(cls.id) || []
      const teacher = cls.teacher_id ? memberMap.get(cls.teacher_id) : null

      let totalChange = 0
      let changeCount = 0
      let improvedCount = 0
      let meetingTargetCount = 0 // Students with avg >= 50% (Grade 4+)
      let eligibleStudents = 0

      for (const sid of classStudentIds) {
        const agg = studentScoreAgg.get(sid)
        if (agg && agg.firstScores.length >= 2 && agg.lastScores.length >= 2) {
          eligibleStudents++
          const firstAvg = agg.firstScores.reduce((a, b) => a + b, 0) / agg.firstScores.length
          const lastAvg = agg.lastScores.reduce((a, b) => a + b, 0) / agg.lastScores.length
          const change = lastAvg - firstAvg
          totalChange += change
          changeCount++
          if (change > 0) improvedCount++
          if (lastAvg >= 50) meetingTargetCount++
        }
      }

      return {
        class_id: cls.id,
        class_name: cls.name,
        teacher_name: teacher?.full_name || null,
        avg_score_change: changeCount > 0 ? Math.round((totalChange / changeCount) * 10) / 10 : 0,
        pct_students_improved: eligibleStudents > 0
          ? Math.round((improvedCount / eligibleStudents) * 100) : 0,
        pct_meeting_target: eligibleStudents > 0
          ? Math.round((meetingTargetCount / eligibleStudents) * 100) : 0,
      }
    })

    // ── Year group summaries ──
    const yearGroups = Array.from(new Set(classes.map(c => c.year_group || 'Unknown')))
    const yearGroupSummaries: YearGroupSummary[] = yearGroups.map(yg => {
      const ygClasses = classes.filter(c => (c.year_group || 'Unknown') === yg)
      let totalStudents = 0
      let totalAtRisk = 0
      let weightedScore = 0
      let weightedCompletion = 0
      let weight = 0

      for (const cls of ygClasses) {
        const classStudentIds = studentsByClass.get(cls.id) || []
        const stats = computeClassStats(classStudentIds)
        totalStudents += classStudentIds.length
        totalAtRisk += stats.atRisk
        if (classStudentIds.length > 0) {
          weightedScore += stats.avgScore * classStudentIds.length
          weightedCompletion += stats.completionRate * classStudentIds.length
          weight += classStudentIds.length
        }
      }

      return {
        year_group: yg,
        class_count: ygClasses.length,
        student_count: totalStudents,
        avg_score: weight > 0 ? Math.round(weightedScore / weight) : 0,
        completion_rate: weight > 0 ? Math.round(weightedCompletion / weight) : 0,
        at_risk_count: totalAtRisk,
      }
    })

    // ── Department-wide aggregates ──
    let deptTotalScore = 0
    let deptScoreCount = 0
    let deptCompleted = 0
    let deptTotal = 0

    for (const agg of studentScoreAgg.values()) {
      deptTotalScore += agg.totalScore
      deptScoreCount += agg.count
      deptCompleted += agg.completed
      deptTotal += agg.total
    }

    const response: DepartmentOverviewResponse = {
      school_id: schoolId,
      school_name: school.name,
      teacher_summaries: teacherSummaries,
      cross_class_comparisons: crossClassComparisons,
      value_added_metrics: valueAddedMetrics,
      year_group_summaries: yearGroupSummaries,
      department_avg_score: deptScoreCount > 0 ? Math.round(deptTotalScore / deptScoreCount) : 0,
      department_completion_rate: deptTotal > 0 ? Math.round((deptCompleted / deptTotal) * 100) : 0,
      total_students: allStudentIds.length,
      total_classes: classIds.length,
      generated_at: new Date().toISOString(),
    }

    return NextResponse.json(response)
  } catch (error) {
    console.error('Department overview error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
