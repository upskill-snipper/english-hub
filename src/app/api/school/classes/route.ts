import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase/server'
import { verifySchoolMember } from '@/lib/school-auth'
import { rateLimit, getClientIp } from '@/lib/rate-limit'
import { IN_CHUNK, chunks } from '../_lib/staff-scope'
import { readAllPages } from '../_lib/reads'

export const dynamic = 'force-dynamic'

function getCurrentAcademicYear(): string {
  const now = new Date()
  const year = now.getFullYear()
  const month = now.getMonth() // 0-indexed
  // Academic year starts in September (month 8)
  if (month >= 8) return `${year}-${year + 1}`
  return `${year - 1}-${year}`
}

export async function GET(request: NextRequest) {
  try {
    const ip = getClientIp(request.headers)
    const rl = await rateLimit(`school-classes:${ip}`, { limit: 30, windowSeconds: 60 })
    if (!rl.success) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        {
          status: 429,
          headers: { 'Retry-After': String(Math.ceil((rl.resetAt - Date.now()) / 1000)) },
        },
      )
    }

    const supabase = createServerSupabaseClient()
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()
    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Staff only (12 October 2026). Any member was admitted, so a pupil
    // holding a school_members row could list every class in the school
    // with its teacher's name.
    const member = await verifySchoolMember(user.id, ['admin', 'head_of_department', 'teacher'])
    if (!member) {
      return NextResponse.json({ error: 'Forbidden: school staff only' }, { status: 403 })
    }

    const admin = createServiceRoleClient()
    const schoolId = member.school_id
    const isTeacher = member.role === 'teacher'

    // Fetch classes and school members in parallel
    // Teachers only see their own classes
    let classesQuery = admin
      .from('classes')
      .select('*')
      .eq('school_id', schoolId)
      .order('created_at', { ascending: false })
    if (isTeacher) {
      classesQuery = classesQuery.eq('teacher_id', member.id)
    }

    const [classesResult, membersResult] = await Promise.all([
      classesQuery,
      admin
        .from('school_members')
        .select('id, full_name, role, user_id')
        .eq('school_id', schoolId)
        .eq('invite_status', 'accepted'),
    ])

    // A failed read of teachers, rosters or scores is a failure, not a list
    // of classes with no teacher, no pupils and no scores.
    if (classesResult.error || membersResult.error) {
      console.error('Classes fetch error:', classesResult.error ?? membersResult.error)
      return NextResponse.json({ error: 'Failed to fetch classes' }, { status: 500 })
    }

    const classes = classesResult.data || []
    const membersList = membersResult.data || []
    const memberMap = new Map(
      membersList.map((m: { id: string; full_name: string; role: string }) => [m.id, m]),
    )
    const classIds = classes.map((c: { id: string }) => c.id)

    // Rosters and quiz scores are read in slices and pages: an unpaged read
    // stops at PostgREST's row cap (1,000) without saying so, which for a
    // whole school would quietly average a fraction of its quiz scores.
    const allClassStudents: { student_id: string; class_id: string }[] = []
    for (const chunk of chunks(classIds, IN_CHUNK)) {
      allClassStudents.push(
        ...(await readAllPages<{ student_id: string; class_id: string }>(
          'class_students',
          (from, to) =>
            admin
              .from('class_students')
              .select('student_id, class_id', { count: 'exact' })
              .in('class_id', chunk)
              .eq('is_active', true)
              .order('class_id')
              .order('student_id')
              .range(from, to),
        )),
      )
    }

    // Group students by class
    const studentsByClass = new Map<string, string[]>()
    for (const cs of allClassStudents) {
      if (!studentsByClass.has(cs.class_id)) studentsByClass.set(cs.class_id, [])
      studentsByClass.get(cs.class_id)!.push(cs.student_id)
    }

    // Collect all unique student ids for a single module_progress query
    const allStudentIds = Array.from(new Set(allClassStudents.map((cs) => cs.student_id)))

    const progressByUser = new Map<string, { totalScore: number; scoreCount: number }>()
    const progressData: Array<{ user_id: string; quiz_score: number }> = []
    for (const chunk of chunks(allStudentIds, IN_CHUNK)) {
      progressData.push(
        ...(await readAllPages<{ user_id: string; quiz_score: number }>(
          'module_progress',
          (from, to) =>
            admin
              .from('module_progress')
              .select('user_id, quiz_score', { count: 'exact' })
              .in('user_id', chunk)
              .not('quiz_score', 'is', null)
              .order('user_id')
              .order('module_id')
              .range(from, to),
        )),
      )
    }
    {
      for (const p of progressData) {
        if (!progressByUser.has(p.user_id)) {
          progressByUser.set(p.user_id, { totalScore: 0, scoreCount: 0 })
        }
        const entry = progressByUser.get(p.user_id)!
        entry.totalScore += p.quiz_score
        entry.scoreCount++
      }
    }

    // Enrich each class
    const enriched = classes.map(
      (cls: { id: string; teacher_id: string | null; [key: string]: unknown }) => {
        const classStudentIds = studentsByClass.get(cls.id) || []
        const teacher = cls.teacher_id ? memberMap.get(cls.teacher_id) : null

        // Compute avg score for this class's students
        let totalScore = 0
        let scoreCount = 0
        for (const sid of classStudentIds) {
          const agg = progressByUser.get(sid)
          if (agg) {
            totalScore += agg.totalScore
            scoreCount += agg.scoreCount
          }
        }
        const avgScore = scoreCount > 0 ? Math.round(totalScore / scoreCount) : null

        return {
          ...cls,
          actual_student_count: classStudentIds.length,
          avg_quiz_score: avgScore,
          teacher_name: (teacher as { full_name?: string })?.full_name || null,
        }
      },
    )

    return NextResponse.json({ classes: enriched })
  } catch (error) {
    console.error('Classes list error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const ip = getClientIp(request.headers)
    const rl = await rateLimit(`school-classes-create:${ip}`, { limit: 10, windowSeconds: 60 })
    if (!rl.success) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        {
          status: 429,
          headers: { 'Retry-After': String(Math.ceil((rl.resetAt - Date.now()) / 1000)) },
        },
      )
    }

    const supabase = createServerSupabaseClient()
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()
    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const member = await verifySchoolMember(user.id, ['admin', 'head_of_department'])
    if (!member) {
      return NextResponse.json(
        { error: 'Forbidden: requires admin or head of department role' },
        { status: 403 },
      )
    }

    let body: {
      name?: string
      year_group?: string
      yearGroup?: string
      exam_board?: string
      examBoard?: string
      teacher_id?: string
      teacherId?: string
      academic_year?: string
      academicYear?: string
    }
    try {
      body = await request.json()
    } catch {
      return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
    }

    const {
      name,
      year_group,
      yearGroup,
      exam_board,
      examBoard,
      teacher_id,
      teacherId,
      academic_year,
      academicYear,
    } = body
    const resolvedYearGroup = year_group ?? yearGroup
    const resolvedExamBoard = exam_board ?? examBoard
    const resolvedTeacherIdRaw = teacher_id ?? teacherId
    const resolvedAcademicYear = academic_year ?? academicYear

    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return NextResponse.json({ error: 'Class name is required' }, { status: 422 })
    }

    if (name.trim().length > 100) {
      return NextResponse.json(
        { error: 'Class name must be 100 characters or fewer' },
        { status: 422 },
      )
    }

    if (resolvedYearGroup && typeof resolvedYearGroup !== 'string') {
      return NextResponse.json({ error: 'yearGroup must be a string' }, { status: 422 })
    }

    if (resolvedExamBoard && typeof resolvedExamBoard !== 'string') {
      return NextResponse.json({ error: 'examBoard must be a string' }, { status: 422 })
    }

    if (resolvedAcademicYear && !/^\d{4}-\d{4}$/.test(resolvedAcademicYear)) {
      return NextResponse.json(
        { error: 'academicYear must be in format YYYY-YYYY' },
        { status: 422 },
      )
    }

    const admin = createServiceRoleClient()

    // If a specific teacherId is provided, verify they belong to the same school
    let resolvedTeacherId = member.id
    if (resolvedTeacherIdRaw && typeof resolvedTeacherIdRaw === 'string') {
      const { data: assignedMember, error: memberErr } = await admin
        .from('school_members')
        .select('id')
        .eq('id', resolvedTeacherIdRaw)
        .eq('school_id', member.school_id)
        .eq('invite_status', 'accepted')
        .single()
      if (memberErr || !assignedMember) {
        return NextResponse.json(
          { error: 'Assigned teacher is not a member of this school' },
          { status: 422 },
        )
      }
      resolvedTeacherId = assignedMember.id
    }

    const { data: newClass, error: createError } = await admin
      .from('classes')
      .insert({
        school_id: member.school_id,
        teacher_id: resolvedTeacherId,
        name: name.trim(),
        year_group: resolvedYearGroup || null,
        exam_board: resolvedExamBoard || null,
        academic_year: resolvedAcademicYear || getCurrentAcademicYear(),
      })
      .select()
      .single()

    if (createError) {
      console.error('Class create error:', createError)
      return NextResponse.json({ error: 'Failed to create class' }, { status: 500 })
    }

    return NextResponse.json({ class: newClass }, { status: 201 })
  } catch (error) {
    console.error('Class create error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
