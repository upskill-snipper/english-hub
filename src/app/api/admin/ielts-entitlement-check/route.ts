// ─── Admin · IELTS Entitlement Check ────────────────────────────────────────
// GET /api/admin/ielts-entitlement-check?email=<email>
//
// Founder tool: after a Stripe purchase, verify a user's IELTS entitlement by
// email. Returns the user's subscription_status + ielts_status and the computed
// hasIeltsAccess flag (the same rule as hasIeltsAccess() in lib/course-access).
//
// Auth: site-admin only (verifyAdmin) — never returns another user's data to a
// non-admin. The caller is authenticated via their session; the SERVICE-ROLE
// client is used only to resolve the looked-up user (profiles is keyed by id and
// has no email column, so email→id is resolved via the auth admin API).

import { NextRequest, NextResponse } from 'next/server'
import { createServiceRoleClient } from '@/lib/supabase/server'
import { verifyAdmin } from '@/lib/admin-auth'

export const dynamic = 'force-dynamic'

interface ProfileRow {
  subscription_status: string | null
  ielts_status: string | null
}

export async function GET(request: NextRequest) {
  // 1. Authenticate + authorise the CALLER via the same session mechanism the
  //    other admin routes use (see calibration/run/route.ts:197-200).
  const { error: authError } = await verifyAdmin()
  if (authError === 'Unauthorized')
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  if (authError === 'Forbidden') return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

  // 2. Read + validate the email query param.
  const emailParam = request.nextUrl.searchParams.get('email')?.trim()
  if (!emailParam) {
    return NextResponse.json({ error: 'Missing required query param: email' }, { status: 400 })
  }
  const email = emailParam.toLowerCase()

  const admin = createServiceRoleClient()

  // 3. Resolve email → auth user. profiles has no email column (it is keyed by
  //    id), so resolve via the service-role auth admin API, then read profiles
  //    by id. listUsers is paginated; walk pages until we find a match.
  let userId: string | null = null
  let page = 1
  const perPage = 1000

  for (;;) {
    const { data, error } = await admin.auth.admin.listUsers({ page, perPage })
    if (error) {
      console.error('[admin/ielts-entitlement-check] listUsers failed', error)
      return NextResponse.json({ error: 'Could not look up user.' }, { status: 500 })
    }

    const match = data.users.find((u) => (u.email ?? '').toLowerCase() === email)
    if (match) {
      userId = match.id
      break
    }

    if (data.users.length < perPage) break
    page += 1
  }

  // No such user — 200 with found:false (not an error), per spec.
  if (!userId) {
    return NextResponse.json({ email, found: false }, { status: 200 })
  }

  // 4. Read the user's profile (status fields ONLY — no other PII).
  const { data: profile, error: profileError } = await admin
    .from('profiles')
    .select('subscription_status, ielts_status')
    .eq('id', userId)
    .maybeSingle<ProfileRow>()

  if (profileError) {
    console.error('[admin/ielts-entitlement-check] profile query failed', profileError)
    return NextResponse.json({ error: 'Could not load user profile.' }, { status: 500 })
  }

  const subscription_status = profile?.subscription_status ?? null
  const ielts_status = profile?.ielts_status ?? null

  // Same rule as hasIeltsAccess() in lib/course-access.ts.
  const hasIeltsAccess = ielts_status === 'active' || subscription_status === 'pro'

  return NextResponse.json(
    {
      email,
      found: true,
      userId,
      subscription_status,
      ielts_status,
      hasIeltsAccess,
    },
    { status: 200 },
  )
}
