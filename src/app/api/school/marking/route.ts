// ─── Teacher Marking Submissions Feed ──────────────────────────────────────
// GET /api/school/marking
//
// Returns AI-marked essay submissions visible to the authenticated school
// member, in reverse-chronological order. Authorisation rule mirrors the
// override route:
//
//   • admins / heads_of_department see every submission for their school.
//   • teachers see only submissions whose student is in one of the classes
//     they teach.
//
// The `marking_submissions` Supabase table is created out-of-band by a
// pending migration (see B4 agent report). Until that migration lands the
// endpoint will return an empty `submissions` array — the UI degrades to
// the "no submissions yet" state rather than throwing.

import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient } from '@/lib/supabase/server'
import { verifySchoolMember } from '@/lib/school-auth'
import { rateLimit } from '@/lib/rate-limit'
import {
  forbiddenResponse,
  rateLimitResponse,
  serverErrorResponse,
  unauthorizedResponse,
} from '@/lib/api-response'

export const dynamic = 'force-dynamic'

const PAGE_LIMIT = 100

export async function GET(_req: NextRequest) {
  try {
    const supabase = await createServerSupabaseClient()
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()

    if (authError || !user) {
      return unauthorizedResponse('Sign in required')
    }

    // Per-user rate limit so a runaway client polling can't hammer the DB.
    const limit = await rateLimit(`school-marking-list:${user.id}`, {
      limit: 60,
      windowSeconds: 60,
    })
    if (!limit.success) {
      const retryAfter = Math.max(1, Math.ceil((limit.resetAt - Date.now()) / 1000))
      return rateLimitResponse(retryAfter)
    }

    const member = await verifySchoolMember(user.id, ['admin', 'head_of_department', 'teacher'])
    if (!member) {
      return forbiddenResponse(
        'You must belong to a school as a teacher, head of department, or admin to view submissions.',
      )
    }

    // Build the visibility filter.
    let query = supabase
      .from('marking_submissions')
      .select(
        `
        id,
        student_id,
        class_id,
        exam_board,
        essay_title,
        essay_text,
        ai_grade,
        ai_confidence,
        ai_feedback,
        ai_band_marks,
        teacher_grade,
        teacher_comment,
        status,
        submitted_at,
        teacher_reviewed_at
        `,
      )
      .eq('school_id', member.school_id)
      .order('submitted_at', { ascending: false })
      .limit(PAGE_LIMIT)

    if (member.role === 'teacher') {
      // Teachers only see submissions whose student is enrolled in one of
      // their classes. Two-step lookup keeps the SQL simple and avoids
      // depending on a Postgres function we don't yet ship.
      const { data: ownedClasses, error: classesErr } = await supabase
        .from('classes')
        .select('id')
        .eq('school_id', member.school_id)
        .eq('teacher_id', member.id)

      if (classesErr) {
        // Table may not exist yet (pre-migration). Degrade gracefully.
        return NextResponse.json({ submissions: [] })
      }

      const classIds = (ownedClasses ?? []).map((c) => c.id)
      if (classIds.length === 0) {
        return NextResponse.json({ submissions: [] })
      }

      query = query.in('class_id', classIds)
    }

    const { data: rows, error: queryError } = await query
    if (queryError) {
      // Most likely cause: marking_submissions table doesn't exist yet.
      // The teacher dashboard handles an empty list cleanly.
      return NextResponse.json({ submissions: [] })
    }

    // Hydrate student names + class names in two batched lookups so we
    // never N+1 the database. Failures here also degrade to nulls rather
    // than 500 — the UI prefers a missing label to a broken page.
    const studentIds = Array.from(new Set(rows.map((r) => r.student_id)))
    const classIds = Array.from(new Set(rows.map((r) => r.class_id).filter(Boolean) as string[]))

    const [studentsRes, classesRes] = await Promise.all([
      studentIds.length > 0
        ? supabase.from('profiles').select('id, full_name, email').in('id', studentIds)
        : Promise.resolve({
            data: [] as { id: string; full_name: string | null; email: string | null }[],
            error: null,
          }),
      classIds.length > 0
        ? supabase.from('classes').select('id, name').in('id', classIds)
        : Promise.resolve({ data: [] as { id: string; name: string | null }[], error: null }),
    ])

    const studentNameById = new Map(
      (studentsRes.data ?? []).map((s) => [
        s.id,
        s.full_name?.trim() || s.email?.split('@')[0] || 'Student',
      ]),
    )
    const classNameById = new Map((classesRes.data ?? []).map((c) => [c.id, c.name ?? 'Class']))

    const submissions = rows.map((r) => ({
      id: r.id,
      student_id: r.student_id,
      student_name: studentNameById.get(r.student_id) ?? 'Student',
      class_id: r.class_id ?? '',
      class_name: r.class_id ? (classNameById.get(r.class_id) ?? 'Class') : '',
      exam_board: r.exam_board ?? null,
      essay_title: r.essay_title ?? null,
      essay_text: r.essay_text ?? '',
      ai_grade: r.ai_grade ?? null,
      ai_confidence: r.ai_confidence ?? null,
      ai_feedback: r.ai_feedback ?? null,
      ai_band_marks: Array.isArray(r.ai_band_marks) ? r.ai_band_marks : [],
      teacher_grade: r.teacher_grade ?? null,
      teacher_comment: r.teacher_comment ?? null,
      status: r.status ?? 'pending',
      submitted_at: r.submitted_at,
      reviewed_at: r.teacher_reviewed_at ?? null,
    }))

    return NextResponse.json({ submissions })
  } catch (err) {
    console.error('[school/marking GET] unexpected error', err)
    return serverErrorResponse('Failed to load submissions')
  }
}
