// ─── Core Data Aggregation Queries ──────────────────────────────────────────

import { createServiceRoleClient } from '@/lib/supabase/server'
import { allCourses } from '@/data/courses'
import { calculateTrajectory, predictGrade } from './trajectory'
import { identifyWeakAreas, buildModuleScoreData } from './weak-areas'
import type {
  StudentAnalytics,
  ClassAnalytics,
  SchoolOverview,
  TrendDataPoint,
} from './types'

// ─── Module / Course Name Maps ──────────────────────────────────────────────

const courseNameMap = new Map<string, string>(
  allCourses.map((c) => [c.id, c.title])
)

const moduleNameMap = new Map<string, string>()
const moduleToCourse = new Map<string, string>()
const courseModuleCounts = new Map<string, number>()

for (const course of allCourses) {
  courseModuleCounts.set(course.id, course.moduleList.length)
  for (const mod of course.moduleList) {
    moduleNameMap.set(mod.id, mod.title)
    moduleToCourse.set(mod.id, course.id)
  }
}

// Total modules across all courses (used as fallback)
const totalModulesAllCourses = allCourses.reduce(
  (sum, c) => sum + c.moduleList.length,
  0
)

// ─── getStudentProgress ─────────────────────────────────────────────────────

/**
 * Fetch raw progress data for a single student.
 * Returns modules completed, quiz scores, time spent, practice sessions, certificates.
 */
export async function getStudentProgress(studentId: string) {
  const supabase = createServiceRoleClient()

  const [progressRes, assessmentsRes, practiceRes, certsRes, profileRes, enrolmentsRes] =
    await Promise.all([
      supabase
        .from('module_progress')
        .select('module_id, course_id, completed, quiz_score, quiz_attempts, time_spent_seconds, completed_at')
        .eq('user_id', studentId),
      supabase
        .from('assessment_attempts')
        .select('course_id, score, passed, time_taken_seconds, attempted_at')
        .eq('user_id', studentId)
        .order('attempted_at', { ascending: true }),
      supabase
        .from('practice_sessions')
        .select('id, self_rating, time_spent_seconds, created_at')
        .eq('user_id', studentId),
      supabase
        .from('certificates')
        .select('id, course_id, score, grade, issued_at')
        .eq('user_id', studentId),
      supabase
        .from('profiles')
        .select('full_name, email, year_group, exam_board')
        .eq('id', studentId)
        .single(),
      supabase
        .from('enrolments')
        .select('course_id')
        .eq('user_id', studentId),
    ])

  return {
    progress: progressRes.data ?? [],
    assessments: assessmentsRes.data ?? [],
    practiceSessions: practiceRes.data ?? [],
    certificates: certsRes.data ?? [],
    profile: profileRes.data,
    enrolments: enrolmentsRes.data ?? [],
  }
}

// ─── getClassStudentIds ─────────────────────────────────────────────────────

export async function getClassStudentIds(classId: string): Promise<string[]> {
  const supabase = createServiceRoleClient()
  const { data } = await supabase
    .from('class_students')
    .select('student_id')
    .eq('class_id', classId)
    .eq('is_active', true)

  return (data ?? []).map((row: { student_id: string }) => row.student_id)
}

// ─── getStudentDetailedAnalytics ────────────────────────────────────────────

export async function getStudentDetailedAnalytics(
  studentId: string
): Promise<StudentAnalytics> {
  const raw = await getStudentProgress(studentId)

  // Calculate total modules from enrolled courses
  const enrolledCourseIds = raw.enrolments.map((e: { course_id: string }) => e.course_id)
  const totalModules = enrolledCourseIds.length > 0
    ? enrolledCourseIds.reduce(
        (sum: number, cid: string) => sum + (courseModuleCounts.get(cid) ?? 0),
        0
      )
    : totalModulesAllCourses

  const modulesCompleted = raw.progress.filter(
    (p: { completed: boolean }) => p.completed
  ).length
  const completionRate =
    totalModules > 0 ? Math.round((modulesCompleted / totalModules) * 100) : 0

  // Quiz scores per module
  const quizScores = raw.progress
    .filter((p: { quiz_score: number | null }) => p.quiz_score !== null)
    .map((p: { module_id: string; course_id: string; quiz_score: number }) => ({
      moduleId: p.module_id,
      moduleName: moduleNameMap.get(p.module_id) ?? p.module_id,
      courseId: p.course_id,
      courseName: courseNameMap.get(p.course_id) ?? p.course_id,
      score: p.quiz_score,
    }))

  const avgQuizScore =
    quizScores.length > 0
      ? Math.round(quizScores.reduce((s: number, q: { score: number }) => s + q.score, 0) / quizScores.length)
      : 0

  // Assessment scores
  const assessmentScores = raw.assessments.map(
    (a: { course_id: string; score: number; attempted_at: string }) => ({
      courseId: a.course_id,
      courseName: courseNameMap.get(a.course_id) ?? a.course_id,
      score: a.score,
      date: a.attempted_at,
    })
  )

  const avgAssessmentScore =
    assessmentScores.length > 0
      ? Math.round(
          assessmentScores.reduce((s: number, a: { score: number }) => s + a.score, 0) /
            assessmentScores.length
        )
      : 0

  // Time spent
  const timeSpentSeconds = raw.progress.reduce(
    (s: number, p: { time_spent_seconds: number }) => s + (p.time_spent_seconds ?? 0),
    0
  )

  // Trajectory - use assessment scores (they have dates)
  const allScoresWithDates = assessmentScores.map((a: { date: string; score: number }) => ({
    date: a.date,
    score: a.score,
  }))
  // Also add quiz scores with completed_at dates
  for (const p of raw.progress) {
    if (p.quiz_score !== null && p.completed_at) {
      allScoresWithDates.push({ date: p.completed_at, score: p.quiz_score })
    }
  }

  const trajectory = calculateTrajectory(allScoresWithDates)

  // Best overall score for grade prediction (use avg of quiz + assessment)
  const overallAvg =
    allScoresWithDates.length > 0
      ? allScoresWithDates.reduce((s: number, x: { score: number }) => s + x.score, 0) /
        allScoresWithDates.length
      : 0

  const examBoard = raw.profile?.exam_board ?? undefined
  const predicted = predictGrade(overallAvg, completionRate, trajectory, examBoard)

  // Strengths / weaknesses by course
  const courseScoreMap = new Map<string, { total: number; count: number }>()
  for (const q of quizScores) {
    const existing = courseScoreMap.get(q.courseId) ?? { total: 0, count: 0 }
    existing.total += q.score
    existing.count += 1
    courseScoreMap.set(q.courseId, existing)
  }
  for (const a of assessmentScores) {
    const existing = courseScoreMap.get(a.courseId) ?? { total: 0, count: 0 }
    existing.total += a.score
    existing.count += 1
    courseScoreMap.set(a.courseId, existing)
  }

  const courseAverages = Array.from(courseScoreMap.entries())
    .map(([courseId, { total, count }]) => ({
      courseId,
      courseName: courseNameMap.get(courseId) ?? courseId,
      avgScore: Math.round(total / count),
    }))
    .sort((a, b) => b.avgScore - a.avgScore)

  const strengths = courseAverages.slice(0, 3)
  const weaknesses = [...courseAverages].sort((a, b) => a.avgScore - b.avgScore).slice(0, 3)

  return {
    studentId,
    fullName: raw.profile?.full_name ?? null,
    email: raw.profile?.email ?? '',
    yearGroup: raw.profile?.year_group ?? null,
    examBoard: raw.profile?.exam_board ?? null,
    modulesCompleted,
    totalModules,
    completionRate,
    avgQuizScore,
    avgAssessmentScore,
    quizScores,
    assessmentScores,
    timeSpentSeconds,
    practiceSessions: raw.practiceSessions.length,
    certificates: raw.certificates.length,
    trajectory,
    predictedGrade: predicted,
    strengths,
    weaknesses,
  }
}

// ─── aggregateClassData ─────────────────────────────────────────────────────

export async function aggregateClassData(classId: string): Promise<ClassAnalytics> {
  const supabase = createServiceRoleClient()

  // Get class metadata
  const { data: classRow } = await supabase
    .from('classes')
    .select('id, name, year_group, exam_board, teacher_id')
    .eq('id', classId)
    .single()

  // Get student IDs
  const studentIds = await getClassStudentIds(classId)

  // Fetch detailed analytics for each student in parallel
  const studentAnalytics = await Promise.all(
    studentIds.map((sid) => getStudentDetailedAnalytics(sid))
  )

  const studentCount = studentAnalytics.length

  // Aggregate averages
  const avgCompletionRate =
    studentCount > 0
      ? Math.round(
          studentAnalytics.reduce((s, sa) => s + sa.completionRate, 0) / studentCount
        )
      : 0

  const avgQuizScore =
    studentCount > 0
      ? Math.round(
          studentAnalytics.reduce((s, sa) => s + sa.avgQuizScore, 0) / studentCount
        )
      : 0

  const avgAssessmentScore =
    studentCount > 0
      ? Math.round(
          studentAnalytics.reduce((s, sa) => s + sa.avgAssessmentScore, 0) / studentCount
        )
      : 0

  const totalTimeSpentSeconds = studentAnalytics.reduce(
    (s, sa) => s + sa.timeSpentSeconds,
    0
  )

  const totalPracticeSessions = studentAnalytics.reduce(
    (s, sa) => s + sa.practiceSessions,
    0
  )

  const totalCertificates = studentAnalytics.reduce(
    (s, sa) => s + sa.certificates,
    0
  )

  // Grade distribution
  const gradeDistribution: Record<string, number> = {}
  for (const sa of studentAnalytics) {
    const g = sa.predictedGrade
    gradeDistribution[g] = (gradeDistribution[g] ?? 0) + 1
  }

  // Trajectory breakdown
  const trajectoryBreakdown = { improving: 0, stable: 0, declining: 0 }
  for (const sa of studentAnalytics) {
    trajectoryBreakdown[sa.trajectory] += 1
  }

  // Build weak areas from all students' quiz scores
  // Fetch all module_progress rows for these students in one query
  const { data: allProgressRows } = await supabase
    .from('module_progress')
    .select('module_id, course_id, quiz_score, user_id')
    .in('user_id', studentIds.length > 0 ? studentIds : ['__none__'])

  const moduleScoreData = buildModuleScoreData(
    allProgressRows ?? [],
    moduleNameMap,
    courseNameMap
  )
  const weakAreas = identifyWeakAreas(moduleScoreData)

  return {
    classId,
    className: classRow?.name ?? 'Unknown Class',
    yearGroup: classRow?.year_group ?? null,
    examBoard: classRow?.exam_board ?? null,
    teacherId: classRow?.teacher_id ?? null,
    studentCount,
    avgCompletionRate,
    avgQuizScore,
    avgAssessmentScore,
    totalTimeSpentSeconds,
    totalPracticeSessions,
    totalCertificates,
    gradeDistribution,
    trajectoryBreakdown,
    students: studentAnalytics,
    weakAreas,
  }
}

// ─── aggregateSchoolData ────────────────────────────────────────────────────

export async function aggregateSchoolData(
  schoolId: string
): Promise<SchoolOverview> {
  const supabase = createServiceRoleClient()

  // School metadata
  const { data: schoolRow } = await supabase
    .from('schools')
    .select('id, name')
    .eq('id', schoolId)
    .single()

  // Classes in this school
  const { data: classRows } = await supabase
    .from('classes')
    .select('id, name, year_group, exam_board')
    .eq('school_id', schoolId)
    .eq('is_active', true)

  const classes = classRows ?? []

  // Teachers count
  const { count: teacherCount } = await supabase
    .from('school_members')
    .select('id', { count: 'exact', head: true })
    .eq('school_id', schoolId)
    .in('role', ['teacher', 'head_of_department', 'admin'])
    .eq('invite_status', 'accepted')

  // For each class, get student count + aggregate data
  // To avoid N+1 queries for large schools, we'll do a batch approach
  const allStudentIds = new Set<string>()
  const classSummaries: SchoolOverview['classes'] = []

  // Gather all student IDs across all classes
  const classIds = classes.map((c: { id: string }) => c.id)
  const { data: allClassStudents } = await supabase
    .from('class_students')
    .select('class_id, student_id')
    .in('class_id', classIds.length > 0 ? classIds : ['__none__'])
    .eq('is_active', true)

  const classStudentMap = new Map<string, string[]>()
  for (const row of allClassStudents ?? []) {
    allStudentIds.add(row.student_id)
    const existing = classStudentMap.get(row.class_id) ?? []
    existing.push(row.student_id)
    classStudentMap.set(row.class_id, existing)
  }

  const allStudentIdArray = Array.from(allStudentIds)

  // Fetch all module_progress for all students in one go
  const { data: allProgress } = await supabase
    .from('module_progress')
    .select('user_id, module_id, course_id, completed, quiz_score, time_spent_seconds')
    .in('user_id', allStudentIdArray.length > 0 ? allStudentIdArray : ['__none__'])

  // Fetch all assessment_attempts for all students
  const { data: allAssessments } = await supabase
    .from('assessment_attempts')
    .select('user_id, score')
    .in('user_id', allStudentIdArray.length > 0 ? allStudentIdArray : ['__none__'])

  // Fetch all certificates
  const { data: allCerts } = await supabase
    .from('certificates')
    .select('user_id')
    .in('user_id', allStudentIdArray.length > 0 ? allStudentIdArray : ['__none__'])

  const progressRows = allProgress ?? []
  const assessmentRows = allAssessments ?? []
  const certRows = allCerts ?? []

  // Build per-student quick aggregates
  const studentQuizAvg = new Map<string, { total: number; count: number }>()
  const studentCompletion = new Map<string, { completed: number; total: number }>()

  // Get enrolled course counts per student
  const { data: allEnrolments } = await supabase
    .from('enrolments')
    .select('user_id, course_id')
    .in('user_id', allStudentIdArray.length > 0 ? allStudentIdArray : ['__none__'])

  const studentTotalModules = new Map<string, number>()
  for (const e of allEnrolments ?? []) {
    const current = studentTotalModules.get(e.user_id) ?? 0
    studentTotalModules.set(
      e.user_id,
      current + (courseModuleCounts.get(e.course_id) ?? 0)
    )
  }

  for (const row of progressRows) {
    // Quiz scores
    if (row.quiz_score !== null) {
      const existing = studentQuizAvg.get(row.user_id) ?? { total: 0, count: 0 }
      existing.total += row.quiz_score
      existing.count += 1
      studentQuizAvg.set(row.user_id, existing)
    }

    // Completion
    const comp = studentCompletion.get(row.user_id) ?? { completed: 0, total: 0 }
    if (row.completed) comp.completed += 1
    comp.total = studentTotalModules.get(row.user_id) ?? totalModulesAllCourses
    studentCompletion.set(row.user_id, comp)
  }

  const studentAssessAvg = new Map<string, { total: number; count: number }>()
  for (const row of assessmentRows) {
    const existing = studentAssessAvg.get(row.user_id) ?? { total: 0, count: 0 }
    existing.total += row.score
    existing.count += 1
    studentAssessAvg.set(row.user_id, existing)
  }

  // Build class summaries
  let schoolAvgCompletion = 0
  let schoolAvgQuiz = 0
  let schoolAvgAssess = 0
  let schoolStudentsWithData = 0

  for (const cls of classes) {
    const studentsInClass = classStudentMap.get(cls.id) ?? []
    let classQuizTotal = 0
    let classQuizCount = 0
    let classCompTotal = 0
    let classCompCount = 0

    for (const sid of studentsInClass) {
      const quiz = studentQuizAvg.get(sid)
      if (quiz && quiz.count > 0) {
        classQuizTotal += quiz.total / quiz.count
        classQuizCount += 1
      }

      const comp = studentCompletion.get(sid)
      if (comp && comp.total > 0) {
        classCompTotal += (comp.completed / comp.total) * 100
        classCompCount += 1
      }
    }

    const avgQS = classQuizCount > 0 ? Math.round(classQuizTotal / classQuizCount) : 0
    const avgCR = classCompCount > 0 ? Math.round(classCompTotal / classCompCount) : 0

    classSummaries.push({
      classId: cls.id,
      className: cls.name,
      yearGroup: cls.year_group ?? null,
      examBoard: cls.exam_board ?? null,
      studentCount: studentsInClass.length,
      avgQuizScore: avgQS,
      avgCompletionRate: avgCR,
    })

    if (classQuizCount > 0) {
      schoolAvgQuiz += classQuizTotal
      schoolStudentsWithData += classQuizCount
    }
    if (classCompCount > 0) {
      schoolAvgCompletion += classCompTotal
    }
  }

  // School-wide averages
  const totalStudents = allStudentIdArray.length
  const overallAvgQuiz =
    schoolStudentsWithData > 0 ? Math.round(schoolAvgQuiz / schoolStudentsWithData) : 0
  const overallAvgCompletion =
    totalStudents > 0 ? Math.round(schoolAvgCompletion / totalStudents) : 0

  // School-wide assessment average
  let assessTotal = 0
  let assessCount = 0
  for (const [, val] of Array.from(studentAssessAvg.entries())) {
    assessTotal += val.total / val.count
    assessCount += 1
  }
  const overallAvgAssess = assessCount > 0 ? Math.round(assessTotal / assessCount) : 0

  // Grade distribution (school-wide)
  const gradeDistribution: Record<string, number> = {}
  const trajectoryBreakdown = { improving: 0, stable: 0, declining: 0 }

  for (const sid of allStudentIdArray) {
    const quiz = studentQuizAvg.get(sid)
    const comp = studentCompletion.get(sid)
    const avgScore = quiz && quiz.count > 0 ? quiz.total / quiz.count : 0
    const compRate =
      comp && comp.total > 0
        ? Math.round((comp.completed / comp.total) * 100)
        : 0

    // Simple trajectory: we don't have full score history here, so default to stable
    const grade = predictGrade(avgScore, compRate, 'stable')
    gradeDistribution[grade] = (gradeDistribution[grade] ?? 0) + 1
    // For trajectory we'd need more data; count all as stable for the overview
    trajectoryBreakdown.stable += 1
  }

  return {
    schoolId,
    schoolName: schoolRow?.name ?? 'Unknown School',
    totalStudents,
    totalClasses: classes.length,
    totalTeachers: teacherCount ?? 0,
    avgCompletionRate: overallAvgCompletion,
    avgQuizScore: overallAvgQuiz,
    avgAssessmentScore: overallAvgAssess,
    totalCertificates: certRows.length,
    classes: classSummaries,
    gradeDistribution,
    trajectoryBreakdown,
  }
}

// ─── getTrendData ───────────────────────────────────────────────────────────

/**
 * Get time-series trend data for a school (optionally filtered by class).
 * Returns weekly buckets of avg scores, active students, and modules completed.
 */
export async function getTrendData(
  schoolId: string,
  classId?: string,
  days: number = 56 // 8 weeks default
): Promise<TrendDataPoint[]> {
  const supabase = createServiceRoleClient()

  // Determine which students to include
  let studentIds: string[]

  if (classId) {
    studentIds = await getClassStudentIds(classId)
  } else {
    // All students in the school
    const { data: classRows } = await supabase
      .from('classes')
      .select('id')
      .eq('school_id', schoolId)
      .eq('is_active', true)

    const classIds = (classRows ?? []).map((c: { id: string }) => c.id)
    const { data: studentRows } = await supabase
      .from('class_students')
      .select('student_id')
      .in('class_id', classIds.length > 0 ? classIds : ['__none__'])
      .eq('is_active', true)

    const idSet = new Set<string>()
    for (const row of studentRows ?? []) {
      idSet.add(row.student_id)
    }
    studentIds = Array.from(idSet)
  }

  if (studentIds.length === 0) return []

  const cutoff = new Date(Date.now() - days * 24 * 60 * 60 * 1000).toISOString()

  // Fetch module completions with dates
  const { data: completions } = await supabase
    .from('module_progress')
    .select('user_id, completed_at')
    .in('user_id', studentIds)
    .eq('completed', true)
    .gte('completed_at', cutoff)

  // Fetch assessment scores with dates
  const { data: assessments } = await supabase
    .from('assessment_attempts')
    .select('user_id, score, attempted_at')
    .in('user_id', studentIds)
    .gte('attempted_at', cutoff)

  // Fetch quiz scores with dates (from module_progress.completed_at)
  const { data: quizData } = await supabase
    .from('module_progress')
    .select('user_id, quiz_score, completed_at')
    .in('user_id', studentIds)
    .not('quiz_score', 'is', null)
    .gte('completed_at', cutoff)

  // Build weekly buckets
  const now = new Date()
  const weekCount = Math.ceil(days / 7)
  const buckets: TrendDataPoint[] = []

  for (let i = weekCount - 1; i >= 0; i--) {
    const weekStart = new Date(now.getTime() - (i + 1) * 7 * 24 * 60 * 60 * 1000)
    const weekEnd = new Date(now.getTime() - i * 7 * 24 * 60 * 60 * 1000)

    // Modules completed in this week
    const weekCompletions = (completions ?? []).filter((c: { completed_at: string }) => {
      const d = new Date(c.completed_at)
      return d >= weekStart && d < weekEnd
    })

    // Assessment scores in this week
    const weekAssessments = (assessments ?? []).filter(
      (a: { attempted_at: string }) => {
        const d = new Date(a.attempted_at)
        return d >= weekStart && d < weekEnd
      }
    )

    // Quiz scores in this week
    const weekQuizzes = (quizData ?? []).filter(
      (q: { completed_at: string }) => {
        const d = new Date(q.completed_at)
        return d >= weekStart && d < weekEnd
      }
    )

    // Combine all scores for avg
    const allScores = [
      ...weekAssessments.map((a: { score: number }) => a.score),
      ...weekQuizzes.map((q: { quiz_score: number }) => q.quiz_score),
    ]
    const avgScore =
      allScores.length > 0
        ? Math.round(allScores.reduce((s: number, v: number) => s + v, 0) / allScores.length)
        : 0

    // Active students = unique students who did anything this week
    const activeSet = new Set<string>()
    for (const c of weekCompletions) activeSet.add(c.user_id)
    for (const a of weekAssessments) activeSet.add(a.user_id)
    for (const q of weekQuizzes) activeSet.add(q.user_id)

    buckets.push({
      weekStart: weekStart.toISOString().split('T')[0],
      avgScore,
      activeStudents: activeSet.size,
      modulesCompleted: weekCompletions.length,
    })
  }

  return buckets
}
