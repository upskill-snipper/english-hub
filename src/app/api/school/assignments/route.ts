import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase/server'
import { verifySchoolMember } from '@/lib/school-auth'
import { rateLimit, getClientIp } from '@/lib/rate-limit'

export const dynamic = 'force-dynamic'

// ── Types ──

interface Assignment {
  id: string
  class_id: string
  class_name: string
  teacher_id: string
  teacher_name: string | null
  title: string
  description: string | null
  /** Which course/modules this assignment covers */
  course_id: string | null
  module_ids: string[]
  /** Assignment type: homework, classwork, assessment, revision */
  type: 'homework' | 'classwork' | 'assessment' | 'revision'
  due_date: string | null
  assigned_at: string
  status: 'draft' | 'active' | 'closed'
  /** Number of students who have completed this assignment */
  submissions_count: number
  /** Total students assigned */
  total_students: number
  /** Average score across completed submissions */
  avg_score: number | null
}

interface CreateAssignmentRequest {
  class_id: string
  title: string
  description?: string
  course_id?: string
  module_ids?: string[]
  type: 'homework' | 'classwork' | 'assessment' | 'revision'
  due_date?: string
  status?: 'draft' | 'active'
}

/**
 * GET /api/school/assignments?classId=xxx
 * GET /api/school/assignments (returns all assignments for the teacher's classes)
 *
 * Returns assignments with submission progress.
 *
 * In production, this would query an `assignments` table and join with
 * `assignment_submissions` for completion stats. The assignments table would store:
 * - assignment metadata (title, description, type, due date)
 * - linked course/module IDs
 * - class association
 * The submissions table would track per-student completion and scores.
 */
export async function GET(request: NextRequest) {
  try {
    const ip = getClientIp(request.headers)
    const rl = await rateLimit(`school-assignments:${ip}`, { limit: 30, windowSeconds: 60 })
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

    const { searchParams } = new URL(request.url)
    const classId = searchParams.get('classId')
    const status = searchParams.get('status') // optional: filter by status

    const admin = createServiceRoleClient()

    // Get classes this member has access to
    let classFilter: string[] = []
    if (classId) {
      // Verify class belongs to school
      const { data: classData } = await admin
        .from('classes')
        .select('id')
        .eq('id', classId)
        .eq('school_id', member.school_id)
        .single()

      if (!classData) {
        return NextResponse.json({ error: 'Class not found' }, { status: 404 })
      }
      classFilter = [classId]
    } else {
      // For teachers, show only their classes. For admins/HoDs, show all.
      const staffRoles = ['admin', 'head_of_department']
      let query = admin.from('classes')
        .select('id')
        .eq('school_id', member.school_id)
        .eq('is_active', true)

      if (!staffRoles.includes(member.role)) {
        query = query.eq('teacher_id', member.id)
      }

      const { data: classes } = await query
      classFilter = (classes || []).map((c: { id: string }) => c.id)
    }

    if (classFilter.length === 0) {
      return NextResponse.json({ assignments: [] })
    }

    // In production, this would query the `assignments` table.
    // For now, we generate mock data based on actual class and module progress data.

    const [classesResult, membersResult, classStudentsResult, progressResult] = await Promise.all([
      admin.from('classes')
        .select('id, name, teacher_id')
        .in('id', classFilter),
      admin.from('school_members')
        .select('id, full_name')
        .eq('school_id', member.school_id),
      admin.from('class_students')
        .select('class_id, student_id')
        .in('class_id', classFilter)
        .eq('is_active', true),
      admin.from('module_progress')
        .select('user_id, module_id, course_id, quiz_score, completed, completed_at')
        .in('user_id',
          // We need student IDs but don't have them yet, so we'll process after
          ['placeholder']
        ),
    ])

    const classes = (classesResult.data || []) as Array<{ id: string; name: string; teacher_id: string | null }>
    const membersList = (membersResult.data || []) as Array<{ id: string; full_name: string | null }>
    const memberLookup = new Map(membersList.map(m => [m.id, m.full_name]))
    const classStudents = (classStudentsResult.data || []) as Array<{ class_id: string; student_id: string }>

    // Group students by class
    const studentsByClass = new Map<string, string[]>()
    for (const cs of classStudents) {
      if (!studentsByClass.has(cs.class_id)) studentsByClass.set(cs.class_id, [])
      studentsByClass.get(cs.class_id)!.push(cs.student_id)
    }

    // Fetch actual progress for all students
    const allStudentIds = Array.from(new Set(classStudents.map(cs => cs.student_id)))
    let allProgress: Array<{
      user_id: string; module_id: string; course_id: string;
      quiz_score: number | null; completed: boolean; completed_at: string | null
    }> = []

    if (allStudentIds.length > 0) {
      const { data } = await admin
        .from('module_progress')
        .select('user_id, module_id, course_id, quiz_score, completed, completed_at')
        .in('user_id', allStudentIds)
      allProgress = (data || []) as typeof allProgress
    }

    // Build mock assignments from actual module progress patterns
    // In production: SELECT * FROM assignments WHERE class_id IN (classFilter)
    const assignments: Assignment[] = []

    for (const cls of classes) {
      const classStudentIds = studentsByClass.get(cls.id) || []
      const classProgress = allProgress.filter(p => classStudentIds.includes(p.user_id))

      // Group by course to create assignment-like entries
      const courseModules = new Map<string, Set<string>>()
      for (const p of classProgress) {
        if (!courseModules.has(p.course_id)) courseModules.set(p.course_id, new Set())
        courseModules.get(p.course_id)!.add(p.module_id)
      }

      let assignmentIndex = 0
      for (const [courseId, moduleIds] of courseModules) {
        assignmentIndex++
        const moduleIdArray = Array.from(moduleIds)
        const relevantProgress = classProgress.filter(p => moduleIdArray.includes(p.module_id))
        const completedStudents = new Set(
          relevantProgress.filter(p => p.completed).map(p => p.user_id)
        )
        const scores = relevantProgress
          .filter(p => p.quiz_score !== null)
          .map(p => p.quiz_score as number)

        const assignmentTypes: Assignment['type'][] = ['homework', 'classwork', 'assessment', 'revision']
        const assignmentType = assignmentTypes[assignmentIndex % assignmentTypes.length]

        // Determine status based on progress
        let assignmentStatus: Assignment['status'] = 'active'
        if (completedStudents.size >= classStudentIds.length && classStudentIds.length > 0) {
          assignmentStatus = 'closed'
        }

        const latestActivity = relevantProgress
          .filter(p => p.completed_at)
          .sort((a, b) => new Date(b.completed_at!).getTime() - new Date(a.completed_at!).getTime())[0]

        const assignment: Assignment = {
          id: `${cls.id}-${courseId}-${assignmentIndex}`,
          class_id: cls.id,
          class_name: cls.name,
          teacher_id: cls.teacher_id || member.id,
          teacher_name: cls.teacher_id ? memberLookup.get(cls.teacher_id) || null : null,
          title: `${assignmentType.charAt(0).toUpperCase() + assignmentType.slice(1)} - Module Set ${assignmentIndex}`,
          description: `Covers ${moduleIdArray.length} module(s) from course ${courseId}`,
          course_id: courseId,
          module_ids: moduleIdArray,
          type: assignmentType,
          due_date: latestActivity?.completed_at
            ? new Date(new Date(latestActivity.completed_at).getTime() + 7 * 24 * 60 * 60 * 1000).toISOString()
            : null,
          assigned_at: relevantProgress
            .filter(p => p.completed_at)
            .sort((a, b) => new Date(a.completed_at!).getTime() - new Date(b.completed_at!).getTime())[0]
            ?.completed_at || new Date().toISOString(),
          status: assignmentStatus,
          submissions_count: completedStudents.size,
          total_students: classStudentIds.length,
          avg_score: scores.length > 0
            ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : null,
        }

        // Apply status filter if provided
        if (!status || assignment.status === status) {
          assignments.push(assignment)
        }
      }
    }

    // Sort by assigned_at descending (most recent first)
    assignments.sort((a, b) =>
      new Date(b.assigned_at).getTime() - new Date(a.assigned_at).getTime()
    )

    return NextResponse.json({
      assignments,
      total: assignments.length,
    })
  } catch (error) {
    console.error('Assignments list error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

/**
 * POST /api/school/assignments
 *
 * Creates a new assignment for a class.
 *
 * In production, this would insert into an `assignments` table and optionally
 * create `assignment_submissions` placeholder rows for each student in the class.
 * It would also trigger notifications to students via email or in-app notifications.
 */
export async function POST(request: NextRequest) {
  try {
    const ip = getClientIp(request.headers)
    const rl = await rateLimit(`school-assignments-create:${ip}`, { limit: 10, windowSeconds: 60 })
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

    let body: CreateAssignmentRequest
    try {
      body = await request.json()
    } catch {
      return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
    }

    // Validate required fields
    const { class_id, title, description, course_id, module_ids, type, due_date, status: assignmentStatus } = body

    if (!class_id || typeof class_id !== 'string') {
      return NextResponse.json({ error: 'class_id is required' }, { status: 422 })
    }

    if (!title || typeof title !== 'string' || title.trim().length === 0) {
      return NextResponse.json({ error: 'title is required' }, { status: 422 })
    }

    if (title.trim().length > 200) {
      return NextResponse.json({ error: 'title must be 200 characters or fewer' }, { status: 422 })
    }

    const validTypes = ['homework', 'classwork', 'assessment', 'revision']
    if (!type || !validTypes.includes(type)) {
      return NextResponse.json(
        { error: `type must be one of: ${validTypes.join(', ')}` },
        { status: 422 }
      )
    }

    if (due_date) {
      const parsed = new Date(due_date)
      if (isNaN(parsed.getTime())) {
        return NextResponse.json({ error: 'due_date must be a valid ISO date string' }, { status: 422 })
      }
    }

    const admin = createServiceRoleClient()

    // Verify class belongs to the member's school
    const { data: classData } = await admin
      .from('classes')
      .select('id, name, teacher_id')
      .eq('id', class_id)
      .eq('school_id', member.school_id)
      .single()

    if (!classData) {
      return NextResponse.json({ error: 'Class not found' }, { status: 404 })
    }

    // Only the class teacher, admin, or HoD can create assignments
    const staffRoles = ['admin', 'head_of_department']
    if (!staffRoles.includes(member.role) && classData.teacher_id !== member.id) {
      return NextResponse.json(
        { error: 'Forbidden: you can only create assignments for your own classes' },
        { status: 403 }
      )
    }

    // Get student count for response
    const { data: classStudents } = await admin
      .from('class_students')
      .select('student_id')
      .eq('class_id', class_id)
      .eq('is_active', true)

    const studentCount = (classStudents || []).length

    // In production, this would INSERT INTO assignments (...)
    // For now, return the created assignment as mock data
    const newAssignment: Assignment = {
      id: crypto.randomUUID(),
      class_id,
      class_name: classData.name,
      teacher_id: member.id,
      teacher_name: member.full_name,
      title: title.trim(),
      description: description?.trim() || null,
      course_id: course_id || null,
      module_ids: module_ids || [],
      type,
      due_date: due_date || null,
      assigned_at: new Date().toISOString(),
      status: assignmentStatus || 'active',
      submissions_count: 0,
      total_students: studentCount,
      avg_score: null,
    }

    return NextResponse.json({ assignment: newAssignment }, { status: 201 })
  } catch (error) {
    console.error('Assignment create error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
