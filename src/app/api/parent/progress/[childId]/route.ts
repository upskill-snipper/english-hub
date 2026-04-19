import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase/server'
import { rateLimit } from '@/lib/rate-limit'
import {
  assertParentCanAccessChild,
  accessErrorToHttpStatus,
} from '@/lib/parent/access-control'

// ── GET /api/parent/progress/[childId] ──────────────────────────────────────
//
// Returns a read-only snapshot of the specified child's learning data.
// The authenticated user MUST be a parent with an ACTIVE link to that
// child. There are no write operations on this route.

export async function GET(
  _request: NextRequest,
  context: { params: Promise<{ childId: string }> }
) {
  const { childId } = (await context.params)

  try {
    const supabase = createServerSupabaseClient()
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()

    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Rate limit: 30 reads / minute / parent
    const rl = await rateLimit(`parent-progress:${user.id}`, {
      limit: 30,
      windowSeconds: 60,
    })
    if (!rl.success) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    const serviceClient = createServiceRoleClient()

    // ── Authorization ────────────────────────────────────────────────────────
    const access = await assertParentCanAccessChild(
      serviceClient,
      user,
      childId
    )
    if (!access.ok && access.error) {
      const { status, message } = accessErrorToHttpStatus(access.error)
      return NextResponse.json({ error: message }, { status })
    }

    // ── Fetch child profile ──────────────────────────────────────────────────
    const { data: childProfile, error: profileErr } = await serviceClient
      .from('profiles')
      .select('id, full_name, email, year_group, school_name')
      .eq('id', childId)
      .maybeSingle()

    if (profileErr || !childProfile) {
      return NextResponse.json(
        { error: 'Child profile not found.' },
        { status: 404 }
      )
    }

    // ── Fetch learning data in parallel (read-only) ──────────────────────────
    const [enrolRes, progressRes, certRes, recentRes] = await Promise.all([
      serviceClient
        .from('enrolments')
        .select('course_id, enrolled_at')
        .eq('user_id', childId),
      serviceClient
        .from('module_progress')
        .select(
          'id, course_id, module_id, completed, quiz_score, time_spent_seconds, completed_at'
        )
        .eq('user_id', childId),
      serviceClient
        .from('certificates')
        .select('id, course_id, score, grade, issued_at')
        .eq('user_id', childId),
      serviceClient
        .from('module_progress')
        .select('module_id, course_id, completed_at, quiz_score')
        .eq('user_id', childId)
        .not('completed_at', 'is', null)
        .order('completed_at', { ascending: false })
        .limit(10),
    ])

    if (enrolRes.error) {
      console.error('[parent/progress] enrolments error:', enrolRes.error)
    }
    if (progressRes.error) {
      console.error('[parent/progress] progress error:', progressRes.error)
    }
    if (certRes.error) {
      console.error('[parent/progress] certificates error:', certRes.error)
    }
    if (recentRes.error) {
      console.error('[parent/progress] recent activity error:', recentRes.error)
    }

    // ── Aggregate summary metrics (read-only, computed here) ─────────────────
    const modules = progressRes.data ?? []
    const completedModules = modules.filter((m) => m.completed).length
    const totalTimeSeconds = modules.reduce(
      (sum, m) => sum + (m.time_spent_seconds ?? 0),
      0
    )
    const scoredModules = modules.filter(
      (m) => typeof m.quiz_score === 'number' && m.quiz_score !== null
    )
    const avgQuizScore =
      scoredModules.length > 0
        ? Math.round(
            scoredModules.reduce(
              (sum, m) => sum + (m.quiz_score as number),
              0
            ) / scoredModules.length
          )
        : null

    return NextResponse.json(
      {
        child: {
          id: childProfile.id,
          name: childProfile.full_name ?? 'Student',
          email: childProfile.email,
          year_group: childProfile.year_group ?? null,
          school_name: childProfile.school_name ?? null,
        },
        summary: {
          modules_completed: completedModules,
          total_modules_started: modules.length,
          total_time_seconds: totalTimeSeconds,
          average_quiz_score: avgQuizScore,
          certificates_earned: (certRes.data ?? []).length,
        },
        enrolments: enrolRes.data ?? [],
        module_progress: modules,
        certificates: certRes.data ?? [],
        recent_activity: recentRes.data ?? [],
        generated_at: new Date().toISOString(),
      },
      {
        headers: {
          // Read-only, private. Do not cache between users.
          'Cache-Control': 'private, no-store',
        },
      }
    )
  } catch (error) {
    console.error('[parent/progress] unhandled error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
