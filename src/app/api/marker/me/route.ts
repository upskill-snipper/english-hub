// ─── Paid Marker · Profile + Live Counts ───────────────────────────────────
// GET /api/marker/me
//
// Returns the signed-in marker's own profile and three live counts used by
// the console header:
//
//   • assigned       — rows assigned to this marker still awaiting their
//                       review (status = 'teacher_review_required').
//   • doneToday       — rows assigned to this marker that they have approved
//                       since 00:00 UTC today (approved_at >= start of day).
//   • runningTotal    — rows assigned to this marker that they have approved,
//                       all-time.
//
// Authorisation: an ACTIVE marker only (requireMarker → 401/403). A marker
// can only ever see counts for rows assigned to THEM — every count is scoped
// by assigned_marker_id = the resolved marker's id.
//
// Counts use head:true exact-count queries (no rows transferred). Any count
// error degrades that figure to 0 rather than failing the whole request —
// the console prefers a slightly stale number to a broken header.
//
// Supabase generated types don't know about marking_submissions / markers
// yet (Prisma client not regenerated — see migration note); the count
// queries don't need row typing.

import { NextRequest, NextResponse } from 'next/server'
import { createServiceRoleClient } from '@/lib/supabase/server'
import { rateLimit, getClientIp } from '@/lib/rate-limit'
import { rateLimitResponse, serverErrorResponse } from '@/lib/api-response'
import { requireMarker } from '@/lib/marker-auth'

export const dynamic = 'force-dynamic'

function startOfUtcDayIso(): string {
  const now = new Date()
  return new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate())).toISOString()
}

export async function GET(req: NextRequest) {
  try {
    const guard = await requireMarker()
    if (!guard.ok) return guard.response
    const { marker } = guard

    // Per-user rate limit so a runaway client polling can't hammer the DB.
    const ip = getClientIp(req.headers)
    const rl = await rateLimit(`marker-me:${marker.id}:${ip}`, {
      limit: 60,
      windowSeconds: 60,
    })
    if (!rl.success) return rateLimitResponse(rl.resetAt)

    const admin = createServiceRoleClient()

    // Three scoped exact-count queries (head:true → no rows transferred).
    // Each is independently fault-tolerant: a failing count becomes 0.
    const [assignedRes, doneTodayRes, totalRes] = await Promise.all([
      admin
        .from('marking_submissions')
        .select('id', { count: 'exact', head: true })
        .eq('assigned_marker_id', marker.id)
        .eq('status', 'teacher_review_required'),
      admin
        .from('marking_submissions')
        .select('id', { count: 'exact', head: true })
        .eq('assigned_marker_id', marker.id)
        .not('approved_at', 'is', null)
        .gte('approved_at', startOfUtcDayIso()),
      admin
        .from('marking_submissions')
        .select('id', { count: 'exact', head: true })
        .eq('assigned_marker_id', marker.id)
        .not('approved_at', 'is', null),
    ])

    const counts = {
      assigned: assignedRes.error ? 0 : (assignedRes.count ?? 0),
      doneToday: doneTodayRes.error ? 0 : (doneTodayRes.count ?? 0),
      runningTotal: totalRes.error ? 0 : (totalRes.count ?? 0),
    }

    return NextResponse.json({
      marker: {
        id: marker.id,
        display_name: marker.display_name,
        email: marker.email,
        boards: marker.boards ?? [],
        qualification: marker.qualification,
        status: marker.status,
        contract_signed_at: marker.contract_signed_at,
        nda_signed_at: marker.nda_signed_at,
        created_at: marker.created_at,
      },
      counts,
    })
  } catch (err) {
    console.error('[marker/me GET] unexpected error', err)
    return serverErrorResponse('Failed to load marker profile')
  }
}
