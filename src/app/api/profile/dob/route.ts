import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient } from '@/lib/supabase/server'
import { prisma } from '@/lib/prisma'
import { rateLimit } from '@/lib/rate-limit'
import { z } from 'zod'

// POST /api/profile/dob — update the current user's Prisma User.dateOfBirth.
//
// Context: the 2026-04-20 Prisma User backfill (scripts/backfill-prisma-users.mjs)
// set dateOfBirth to 2000-01-01 for every Supabase user whose user_metadata
// lacked a DOB — 5 users on current prod. That placeholder drives incorrect
// downstream behaviour:
//   - Children's Code isMinor flag (currently derived in the register
//     handler, but stale on backfilled rows).
//   - Dormancy-check cron uses lastLoginAt now, not DOB — so safe there.
//
// Paired with src/components/profile/DobNudge.tsx which shows a banner on
// /dashboard for users with the placeholder and calls this endpoint.

const DobSchema = z.object({
  dateOfBirth: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, 'Expected YYYY-MM-DD')
    .refine((s) => {
      const d = new Date(s + 'T00:00:00Z')
      if (isNaN(d.getTime())) return false
      const now = new Date()
      const minAge = 5 // no realistic GCSE user is under 5
      const maxAge = 120
      const ageYears = (now.getTime() - d.getTime()) / (365.25 * 24 * 3600 * 1000)
      return ageYears >= minAge && ageYears <= maxAge
    }, 'Unrealistic date of birth'),
})

export async function POST(request: NextRequest) {
  const supabase = createServerSupabaseClient()
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser()
  if (authError || !user || !user.email) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const rl = await rateLimit(`profile-dob:${user.id}`, { limit: 5, windowSeconds: 3600 })
  if (!rl.success) {
    return NextResponse.json({ error: 'Rate limited' }, { status: 429 })
  }

  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
  }

  const parsed = DobSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json(
      { error: 'Invalid date of birth', issues: parsed.error.flatten() },
      { status: 400 },
    )
  }

  const newDob = new Date(parsed.data.dateOfBirth + 'T00:00:00Z')
  const ageYears = (Date.now() - newDob.getTime()) / (365.25 * 24 * 3600 * 1000)
  const MINOR_AGE_THRESHOLD = 16
  const isMinor = ageYears < MINOR_AGE_THRESHOLD

  // Match by supabaseUserId (preferred) OR email fallback — same pattern as
  // Identity PR-3. updateMany so we never throw if the Prisma row is missing.
  const result = await prisma.user.updateMany({
    where: {
      OR: [{ supabaseUserId: user.id }, { email: user.email.toLowerCase() }],
    },
    data: { dateOfBirth: newDob, isMinor },
  })

  if (result.count === 0) {
    return NextResponse.json({ error: 'Profile not found' }, { status: 404 })
  }

  return NextResponse.json({ ok: true, rows: result.count })
}

// GET /api/profile/dob — returns { hasPlaceholderDob } for the current user.
// Used by DobNudge to decide whether to render the banner.
export async function GET() {
  const supabase = createServerSupabaseClient()
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser()
  if (authError || !user || !user.email) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const row = await prisma.user.findFirst({
    where: { OR: [{ supabaseUserId: user.id }, { email: user.email.toLowerCase() }] },
    select: { dateOfBirth: true },
  })

  if (!row) {
    // No Prisma row → nothing to nudge. Register handler should create it
    // on next login, but don't surface that here.
    return NextResponse.json({ hasPlaceholderDob: false })
  }

  // Placeholder sentinel from the 2026-04-20 backfill. Treat any DOB on
  // 2000-01-01 as placeholder; if a real user genuinely has that DOB they
  // can just re-confirm it via the nudge form (same-value update is a no-op).
  const iso = row.dateOfBirth.toISOString().slice(0, 10)
  return NextResponse.json({ hasPlaceholderDob: iso === '2000-01-01' })
}
