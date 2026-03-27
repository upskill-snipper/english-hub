import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient } from '@/lib/supabase/server'
import { prisma } from '@/lib/prisma'
import { verifySchoolMember } from '@/lib/school-auth'
import { rateLimit, getClientIp } from '@/lib/rate-limit'

export const dynamic = 'force-dynamic'

const VALID_TYPES = ['HOMEWORK', 'CLASSWORK', 'ASSESSMENT', 'REVISION'] as const
const VALID_STATUSES = ['DRAFT', 'ACTIVE', 'CLOSED'] as const
const STAFF_ROLES = ['admin', 'head_of_department']

type AssignmentTypeValue = (typeof VALID_TYPES)[number]
type AssignmentStatusValue = (typeof VALID_STATUSES)[number]

/**
 * GET /api/school/assignments/[id]
 *
 * Returns a single assignment with its submissions.
 */
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const ip = getClientIp(request.headers)
    const rl = await rateLimit(`school-assignment-get:${ip}`, { limit: 30, windowSeconds: 60 })
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

    const assignment = await prisma.assignment.findUnique({
      where: { id: params.id },
      include: {
        submissions: true,
      },
    })

    if (!assignment) {
      return NextResponse.json({ error: 'Assignment not found' }, { status: 404 })
    }

    // Verify the assignment's class belongs to this member's school
    const { createServiceRoleClient } = await import('@/lib/supabase/server')
    const admin = createServiceRoleClient()
    const { data: classData } = await admin
      .from('classes')
      .select('id')
      .eq('id', assignment.classId)
      .eq('school_id', member.school_id)
      .single()

    if (!classData) {
      return NextResponse.json({ error: 'Assignment not found' }, { status: 404 })
    }

    const submitted = assignment.submissions.filter((s) => s.status !== 'PENDING')
    const scores = assignment.submissions
      .filter((s) => s.score !== null)
      .map((s) => s.score as number)

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
        submissionsCount: submitted.length,
        totalStudents: assignment.submissions.length,
        avgScore: scores.length > 0
          ? Math.round((scores.reduce((x, y) => x + y, 0) / scores.length) * 100) / 100
          : null,
        submissions: assignment.submissions.map((s) => ({
          id: s.id,
          studentId: s.studentId,
          status: s.status,
          score: s.score,
          feedback: s.feedback,
          submittedAt: s.submittedAt?.toISOString() ?? null,
          gradedAt: s.gradedAt?.toISOString() ?? null,
        })),
      },
    })
  } catch (error) {
    console.error('Assignment get error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

/**
 * PATCH /api/school/assignments/[id]
 *
 * Updates an existing assignment. Only the owning teacher, admin, or HoD may update.
 * Allowed fields: title, description, type, status, due_date, course_id, module_ids.
 */
export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const ip = getClientIp(request.headers)
    const rl = await rateLimit(`school-assignment-update:${ip}`, { limit: 15, windowSeconds: 60 })
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

    if (member.role === 'student') {
      return NextResponse.json({ error: 'Forbidden: students cannot update assignments' }, { status: 403 })
    }

    // Fetch existing assignment
    const existing = await prisma.assignment.findUnique({
      where: { id: params.id },
    })

    if (!existing) {
      return NextResponse.json({ error: 'Assignment not found' }, { status: 404 })
    }

    // Verify class belongs to school
    const { createServiceRoleClient } = await import('@/lib/supabase/server')
    const admin = createServiceRoleClient()
    const { data: classData } = await admin
      .from('classes')
      .select('id, teacher_id')
      .eq('id', existing.classId)
      .eq('school_id', member.school_id)
      .single()

    if (!classData) {
      return NextResponse.json({ error: 'Assignment not found' }, { status: 404 })
    }

    // Only the assignment's teacher, class teacher, admin, or HoD can update
    const isOwner = existing.teacherId === member.id
    const isClassTeacher = classData.teacher_id === member.id
    const isStaff = STAFF_ROLES.includes(member.role)
    if (!isOwner && !isClassTeacher && !isStaff) {
      return NextResponse.json(
        { error: 'Forbidden: you can only update your own assignments' },
        { status: 403 }
      )
    }

    let body: {
      title?: string
      description?: string | null
      type?: string
      status?: string
      due_date?: string | null
      course_id?: string | null
      module_ids?: string[]
    }

    try {
      body = await request.json()
    } catch {
      return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
    }

    // ── Build update data ──

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const updateData: any = {}

    if (body.title !== undefined) {
      if (typeof body.title !== 'string' || body.title.trim().length === 0) {
        return NextResponse.json({ error: 'title must be a non-empty string' }, { status: 422 })
      }
      if (body.title.trim().length > 200) {
        return NextResponse.json({ error: 'title must be 200 characters or fewer' }, { status: 422 })
      }
      updateData.title = body.title.trim()
    }

    if (body.description !== undefined) {
      updateData.description = body.description?.trim() || null
    }

    if (body.type !== undefined) {
      const upperType = body.type.toUpperCase() as AssignmentTypeValue
      if (!VALID_TYPES.includes(upperType)) {
        return NextResponse.json(
          { error: `type must be one of: ${VALID_TYPES.join(', ')}` },
          { status: 422 }
        )
      }
      updateData.type = upperType
    }

    if (body.status !== undefined) {
      const upperStatus = body.status.toUpperCase() as AssignmentStatusValue
      if (!VALID_STATUSES.includes(upperStatus)) {
        return NextResponse.json(
          { error: `status must be one of: ${VALID_STATUSES.join(', ')}` },
          { status: 422 }
        )
      }
      updateData.status = upperStatus
    }

    if (body.due_date !== undefined) {
      if (body.due_date === null) {
        updateData.dueDate = null
      } else {
        const parsed = new Date(body.due_date)
        if (isNaN(parsed.getTime())) {
          return NextResponse.json({ error: 'due_date must be a valid ISO date string' }, { status: 422 })
        }
        updateData.dueDate = parsed
      }
    }

    if (body.course_id !== undefined) {
      updateData.courseId = body.course_id || null
    }

    if (body.module_ids !== undefined) {
      if (!Array.isArray(body.module_ids)) {
        return NextResponse.json({ error: 'module_ids must be an array' }, { status: 422 })
      }
      updateData.moduleIds = body.module_ids
    }

    if (Object.keys(updateData).length === 0) {
      return NextResponse.json({ error: 'No valid fields to update' }, { status: 422 })
    }

    const updated = await prisma.assignment.update({
      where: { id: params.id },
      data: updateData,
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
    })

    const submitted = updated.submissions.filter((s) => s.status !== 'PENDING')
    const scores = updated.submissions
      .filter((s) => s.score !== null)
      .map((s) => s.score as number)

    return NextResponse.json({
      assignment: {
        id: updated.id,
        classId: updated.classId,
        teacherId: updated.teacherId,
        title: updated.title,
        description: updated.description,
        type: updated.type,
        status: updated.status,
        courseId: updated.courseId,
        moduleIds: updated.moduleIds,
        dueDate: updated.dueDate?.toISOString() ?? null,
        createdAt: updated.createdAt.toISOString(),
        updatedAt: updated.updatedAt.toISOString(),
        submissionsCount: submitted.length,
        totalStudents: updated.submissions.length,
        avgScore: scores.length > 0
          ? Math.round((scores.reduce((x, y) => x + y, 0) / scores.length) * 100) / 100
          : null,
      },
    })
  } catch (error) {
    console.error('Assignment update error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

/**
 * DELETE /api/school/assignments/[id]
 *
 * Deletes an assignment and all its submissions (cascade).
 * Only the owning teacher, admin, or HoD may delete.
 */
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const ip = getClientIp(request.headers)
    const rl = await rateLimit(`school-assignment-delete:${ip}`, { limit: 10, windowSeconds: 60 })
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

    if (member.role === 'student') {
      return NextResponse.json({ error: 'Forbidden: students cannot delete assignments' }, { status: 403 })
    }

    const existing = await prisma.assignment.findUnique({
      where: { id: params.id },
    })

    if (!existing) {
      return NextResponse.json({ error: 'Assignment not found' }, { status: 404 })
    }

    // Verify class belongs to school
    const { createServiceRoleClient } = await import('@/lib/supabase/server')
    const admin = createServiceRoleClient()
    const { data: classData } = await admin
      .from('classes')
      .select('id, teacher_id')
      .eq('id', existing.classId)
      .eq('school_id', member.school_id)
      .single()

    if (!classData) {
      return NextResponse.json({ error: 'Assignment not found' }, { status: 404 })
    }

    // Only the assignment's teacher, class teacher, admin, or HoD can delete
    const isOwner = existing.teacherId === member.id
    const isClassTeacher = classData.teacher_id === member.id
    const isStaff = STAFF_ROLES.includes(member.role)
    if (!isOwner && !isClassTeacher && !isStaff) {
      return NextResponse.json(
        { error: 'Forbidden: you can only delete your own assignments' },
        { status: 403 }
      )
    }

    // Cascade delete is handled by Prisma schema (onDelete: Cascade on submissions)
    await prisma.assignment.delete({
      where: { id: params.id },
    })

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('Assignment delete error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
