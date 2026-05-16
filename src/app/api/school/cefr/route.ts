import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase/server'
import { verifySchoolMember } from '@/lib/school-auth'
import { rateLimit, getClientIp } from '@/lib/rate-limit'
import { summariseCEFRCohort } from '@/lib/eal/cefr-aggregate'

export const dynamic = 'force-dynamic'

// ---------------------------------------------------------------------------
// GET /api/school/cefr
//
// Cohort CEFR placement analytics for the teacher / school dashboard.
//
// Auth + scoping mirror /api/school/analytics EXACTLY:
//   - rate limit by client IP
//   - createServerSupabaseClient() for auth.getUser()
//   - verifySchoolMember(user.id, ["admin","head_of_department","teacher"])
//   - createServiceRoleClient() (`admin`) for the cross-student read
//   - teachers are scoped to students in their own active classes;
//     admins / heads of department see all accepted student members.
//
// Query params:
//   classId  - optional. When present, scope to just that class's
//              active students, provided the class belongs to this
//              school (and to this teacher, if the caller is a teacher).
//
// The aggregation itself lives in src/lib/eal/cefr-aggregate.ts. It
// returns `available: false` (a normal 200) when the progress_cefr
// migration has not been applied yet, and only throws on unexpected
// errors — which we map to a 500.
// ---------------------------------------------------------------------------

export async function GET(request: NextRequest) {
  try {
    // ── Rate limit ──────────────────────────────────────────────────────────
    const ip = getClientIp(request.headers)
    const rl = await rateLimit(`school-cefr:${ip}`, { limit: 20, windowSeconds: 60 })
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

    const { searchParams } = new URL(request.url)
    const classIdParam = searchParams.get('classId')

    // ── Derive scoped student ids ───────────────────────────────────────────
    // Replicates the scopedStudentIds derivation in /api/school/analytics
    // verbatim: teachers → unique student_ids from class_students for their
    // own active classes; admins / HoD → accepted student members' user_ids.
    // progress_cefr.user_id shares the id space of these student ids
    // (same as module_progress.user_id in that route).
    let scopedStudentIds: string[] = []

    if (classIdParam) {
      // Scope to a single class — but only if it belongs to this school
      // (and to this teacher, when the caller is a teacher).
      let classQuery = admin
        .from('classes')
        .select('id, teacher_id, school_id, is_active')
        .eq('id', classIdParam)
        .eq('school_id', schoolId)
        .eq('is_active', true)

      if (isTeacher) {
        classQuery = classQuery.eq('teacher_id', member.id)
      }

      const { data: classRow } = await classQuery.maybeSingle()

      if (!classRow) {
        return NextResponse.json({ error: 'Class not found or not accessible' }, { status: 404 })
      }

      const { data: csRows } = await admin
        .from('class_students')
        .select('student_id')
        .eq('class_id', classIdParam)
        .eq('is_active', true)

      scopedStudentIds = Array.from(
        new Set((csRows ?? []).map((r: { student_id: string }) => r.student_id)),
      )
    } else if (isTeacher) {
      const { data: classRows } = await admin
        .from('classes')
        .select('id')
        .eq('school_id', schoolId)
        .eq('teacher_id', member.id)
        .eq('is_active', true)

      const classIds = (classRows ?? []).map((c: { id: string }) => c.id)

      if (classIds.length > 0) {
        const { data: csRows } = await admin
          .from('class_students')
          .select('student_id')
          .in('class_id', classIds)
          .eq('is_active', true)
        scopedStudentIds = Array.from(
          new Set((csRows ?? []).map((r: { student_id: string }) => r.student_id)),
        )
      }
    } else {
      // Admin / head of department: all accepted student members.
      const { data: memberRows } = await admin
        .from('school_members')
        .select('user_id, role, invite_status')
        .eq('school_id', schoolId)
        .eq('invite_status', 'accepted')
        .eq('role', 'student')

      scopedStudentIds = (memberRows ?? [])
        .map((m: { user_id: string }) => m.user_id)
        .filter(Boolean)
    }

    // ── Aggregate ───────────────────────────────────────────────────────────
    // summariseCEFRCohort returns `available:false` (a normal 200) when the
    // table is not migrated yet; it only throws on unexpected read errors.
    const summary = await summariseCEFRCohort(admin, scopedStudentIds)

    return NextResponse.json(summary)
  } catch (error) {
    console.error('[school/cefr] GET error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
