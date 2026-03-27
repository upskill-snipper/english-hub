import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient } from '@/lib/supabase/server'
import { prisma } from '@/lib/prisma'
import { verifySchoolMember } from '@/lib/school-auth'
import { rateLimit, getClientIp } from '@/lib/rate-limit'

export const dynamic = 'force-dynamic'

// ── Helpers ──

const VALID_TYPES = ['HOMEWORK', 'CLASSWORK', 'ASSESSMENT', 'REVISION'] as const
const VALID_STATUSES = ['DRAFT', 'ACTIVE', 'CLOSED'] as const
const STAFF_ROLES = ['admin', 'head_of_department']

type AssignmentTypeValue = (typeof VALID_TYPES)[number]
type AssignmentStatusValue = (typeof VALID_STATUSES)[number]

/**
 * GET /api/school/assignments?classId=xxx&status=ACTIVE
 *
 * Teachers see assignments for their own classes.
 * Admins / HoDs see all assignments in the school.
 * Students see assignments for classes they belong to.
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
    const statusFilter = searchParams.get('status')?.toUpperCase() as AssignmentStatusValue | undefined

    // Determine which class IDs this user may view
    let classIds: string[] = []

    if (classId) {
      // Verify class belongs to the member's school (via Supabase, since classes live there)
      const { createServiceRoleClient } = await import('@/lib/supabase/server')
      const admin = createServiceRoleClient()
      const { data: classData } = await admin
        .from('classes')
        .select('id')
        .eq('id', classId)
        .eq('school_id', member.school_id)
        .single()

      if (!classData) {
        return NextResponse.json({ error: 'Class not found' }, { status: 404 })
      }
      classIds = [classId]
    } else {
      // Fetch classes from Supabase
      const { createServiceRoleClient } = await import('@/lib/supabase/server')
      const admin = createServiceRoleClient()

      if (member.role === 'student') {
        // Student: get classes they are enrolled in
        const { data: enrollments } = await admin
          .from('class_students')
          .select('class_id')
          .eq('student_id', member.id)
          .eq('is_active', true)
        classIds = (enrollments || []).map((e: { class_id: string }) => e.class_id)
      } else if (STAFF_ROLES.includes(member.role)) {
        // Admin / HoD: all school classes
        const { data: classes } = await admin
          .from('classes')
          .select('id')
          .eq('school_id', member.school_id)
          .eq('is_active', true)
        classIds = (classes || []).map((c: { id: string }) => c.id)
      } else {
        // Teacher: only their classes
        const { data: classes } = await admin
          .from('classes')
          .select('id')
          .eq('school_id', member.school_id)
          .eq('teacher_id', member.id)
          .eq('is_active', true)
        classIds = (classes || []).map((c: { id: string }) => c.id)
      }
    }

    if (classIds.length === 0) {
      return NextResponse.json({ assignments: [], total: 0 })
    }

    // Build Prisma query
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const where: any = { classId: { in: classIds } }
    if (statusFilter && VALID_STATUSES.includes(statusFilter)) {
      where.status = statusFilter
    }

    const assignments = await prisma.assignment.findMany({
      where,
      include: {
        submissions: {
          select: {
            id: true,
            studentId: true,
            status: true,
            score: true,
            submittedAt: true,
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    })

    // Map to response shape
    const mapped = assignments.map((a) => {
      const submitted = a.submissions.filter((s) => s.status !== 'PENDING')
      const scores = a.submissions
        .filter((s) => s.score !== null)
        .map((s) => s.score as number)

      return {
        id: a.id,
        classId: a.classId,
        teacherId: a.teacherId,
        title: a.title,
        description: a.description,
        type: a.type,
        status: a.status,
        courseId: a.courseId,
        moduleIds: a.moduleIds,
        dueDate: a.dueDate?.toISOString() ?? null,
        createdAt: a.createdAt.toISOString(),
        updatedAt: a.updatedAt.toISOString(),
        submissionsCount: submitted.length,
        totalStudents: a.submissions.length,
        avgScore: scores.length > 0
          ? Math.round((scores.reduce((x, y) => x + y, 0) / scores.length) * 100) / 100
          : null,
      }
    })

    return NextResponse.json({ assignments: mapped, total: mapped.length })
  } catch (error) {
    console.error('Assignments list error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

/**
 * POST /api/school/assignments
 *
 * Creates a new assignment. Only the class teacher, admin, or HoD may create.
 * Automatically creates PENDING submission rows for every active student in the class.
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

    // Students cannot create assignments
    if (member.role === 'student') {
      return NextResponse.json({ error: 'Forbidden: students cannot create assignments' }, { status: 403 })
    }

    let body: {
      class_id: string
      title: string
      description?: string
      course_id?: string
      module_ids?: string[]
      type: string
      due_date?: string
      status?: string
    }

    try {
      body = await request.json()
    } catch {
      return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
    }

    const { class_id, title, description, course_id, module_ids, type, due_date, status: assignmentStatus } = body

    // ── Validation ──

    if (!class_id || typeof class_id !== 'string') {
      return NextResponse.json({ error: 'class_id is required' }, { status: 422 })
    }

    if (!title || typeof title !== 'string' || title.trim().length === 0) {
      return NextResponse.json({ error: 'title is required' }, { status: 422 })
    }

    if (title.trim().length > 200) {
      return NextResponse.json({ error: 'title must be 200 characters or fewer' }, { status: 422 })
    }

    const upperType = type?.toUpperCase() as AssignmentTypeValue
    if (!upperType || !VALID_TYPES.includes(upperType)) {
      return NextResponse.json(
        { error: `type must be one of: ${VALID_TYPES.join(', ')}` },
        { status: 422 }
      )
    }

    let parsedDueDate: Date | undefined
    if (due_date) {
      parsedDueDate = new Date(due_date)
      if (isNaN(parsedDueDate.getTime())) {
        return NextResponse.json({ error: 'due_date must be a valid ISO date string' }, { status: 422 })
      }
    }

    const upperStatus = (assignmentStatus?.toUpperCase() || 'ACTIVE') as AssignmentStatusValue
    if (!VALID_STATUSES.includes(upperStatus)) {
      return NextResponse.json(
        { error: `status must be one of: ${VALID_STATUSES.join(', ')}` },
        { status: 422 }
      )
    }

    // ── Verify class belongs to school ──

    const { createServiceRoleClient } = await import('@/lib/supabase/server')
    const admin = createServiceRoleClient()

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
    if (!STAFF_ROLES.includes(member.role) && classData.teacher_id !== member.id) {
      return NextResponse.json(
        { error: 'Forbidden: you can only create assignments for your own classes' },
        { status: 403 }
      )
    }

    // ── Get students in class for submission placeholders ──

    const { data: classStudents } = await admin
      .from('class_students')
      .select('student_id')
      .eq('class_id', class_id)
      .eq('is_active', true)

    const studentIds: string[] = (classStudents || []).map((cs: { student_id: string }) => cs.student_id)

    // ── Create assignment + submissions in a transaction ──

    const assignment = await prisma.assignment.create({
      data: {
        classId: class_id,
        teacherId: member.id,
        title: title.trim(),
        description: description?.trim() || null,
        type: upperType,
        status: upperStatus,
        courseId: course_id || null,
        moduleIds: module_ids || [],
        dueDate: parsedDueDate || null,
        submissions: studentIds.length > 0
          ? {
            createMany: {
              data: studentIds.map((studentId) => ({
                studentId,
                status: 'PENDING' as const,
              })),
            },
          }
          : undefined,
      },
      include: {
        submissions: {
          select: {
            id: true,
            studentId: true,
            status: true,
          },
        },
      },
    })

    return NextResponse.json({
      assignment: {
        id: assignment.id,
        classId: assignment.classId,
        teacherId: assignment.teacherId,
        title: assignment.title,
        description: assignment.description,
        type: assignment.type,
        status: assignment.status,
        courseId: assignment.courseId,
        moduleIds: assignment.moduleIds,
        dueDate: assignment.dueDate?.toISOString() ?? null,
        createdAt: assignment.createdAt.toISOString(),
        updatedAt: assignment.updatedAt.toISOString(),
        submissionsCount: 0,
        totalStudents: assignment.submissions.length,
        avgScore: null,
      },
    }, { status: 201 })
  } catch (error) {
    console.error('Assignment create error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
