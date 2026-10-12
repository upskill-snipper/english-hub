// ─── GET /api/user/access ───────────────────────────────────────────────────
//
// What the signed-in person may use, for client components that used to work
// it out themselves.
//
// A DEFECT, FIXED 12 OCTOBER 2026. The course and module pages decided paid
// access in the browser with `profile.subscription_status === 'pro'`. Calum
// decided that day that a school pupil's access comes from the school's live
// pilot, checked at the moment of use, with nothing written to that profile
// field (CLAUDE.md, structural fact 2: it is one field per PERSON). A browser
// test of the field would therefore have locked every school pupil out of
// what their school pays for. The answer now comes from the server's one
// paid-access choke point, resolvePaidAccess in src/lib/course-access.ts.
//
// `schoolPupil` is the second thing pages need: a pupil of a live school is
// pointed at Mark an essay rather than the standalone AI essay feedback (see
// src/lib/marking/school-route.ts).
//
// Both answers fail closed. A failed read reports `premium: false` and
// `schoolPupil: false`; the server-side gates make the real decision on every
// AI request in any case, so this can only ever hide or show a control.
// ────────────────────────────────────────────────────────────────────────────

import { NextResponse } from 'next/server'
import { createServerSupabaseClient } from '@/lib/supabase/server'
import { resolvePaidAccess } from '@/lib/course-access'
import { getPupilSchoolAccess } from '@/lib/school-entitlement'

export const dynamic = 'force-dynamic'

/** The response body. Mirrored by PaidAccessState in src/hooks/usePaidAccess.ts. */
interface UserAccess {
  /** May use paid (non-IELTS) features: their own plan, or a live school. */
  premium: boolean
  /** A pupil of a school whose access is live. */
  schoolPupil: boolean
}

export async function GET() {
  const supabase = createServerSupabaseClient()
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser()

  if (authError || !user) {
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })
  }

  try {
    const paid = await resolvePaidAccess(supabase, user.id)
    // resolvePaidAccess only asks the school when the profile does not
    // already answer, so a subscriber who is also a pupil is asked here.
    const schoolPupil =
      paid.allowed && paid.via === 'school' ? true : Boolean(await getPupilSchoolAccess(user.id))

    const body: UserAccess = { premium: paid.allowed, schoolPupil }
    return NextResponse.json(body, { headers: { 'Cache-Control': 'private, no-store' } })
  } catch (err) {
    console.error('[api/user/access] failed', err)
    const body: UserAccess = { premium: false, schoolPupil: false }
    return NextResponse.json(body, { headers: { 'Cache-Control': 'private, no-store' } })
  }
}
