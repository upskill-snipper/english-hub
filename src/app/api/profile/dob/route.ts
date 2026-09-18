import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient } from '@/lib/supabase/server'
import { prisma } from '@/lib/prisma'
import { rateLimit } from '@/lib/rate-limit'
import {
  tryPrismaUserId,
  isMinorFromDob,
  isPlaceholderDob,
  PLACEHOLDER_DOB_ISO,
} from '@/lib/identity'
import { z } from 'zod'
import { createServiceRoleClient } from '@/lib/supabase/server'
import { applyChildDefaults } from '@/lib/privacy/apply-child-defaults'

// POST /api/profile/dob - update the current user's Prisma User.dateOfBirth.
//
// Context: the 2026-04-20 Prisma User backfill (scripts/backfill-prisma-users.mjs)
// set dateOfBirth to 2000-01-01 for every Supabase user whose user_metadata
// lacked a DOB - 5 users on current prod. That placeholder drives incorrect
// downstream behaviour:
//   - Children's Code isMinor flag (currently derived in the register
//     handler, but stale on backfilled rows).
//   - Dormancy-check cron uses lastLoginAt now, not DOB - so safe there.
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

  // One definition of isMinor, shared with the identity layer and the
  // register route: UNDER 18, which is what the column means and what the
  // Children's Code protections key on. This route used to use 16 and the
  // backfill script used 16 as well, so the same column carried three
  // different meanings depending on who wrote it last.
  const isMinor = isMinorFromDob(newDob)

  // Resolve through the identity module, which projects the Prisma row if
  // this Supabase-native account has none. Without that, ~96% of accounts
  // got a 404 here - and this endpoint is the control the AI gate now names
  // when it blocks someone whose date of birth we do not hold.
  const prismaUserId = await tryPrismaUserId(user.id)
  if (!prismaUserId) {
    return NextResponse.json(
      {
        error:
          'We could not save your date of birth against your account. Please try again, and contact dpo@theenglishhub.app if it keeps happening.',
      },
      { status: 503 },
    )
  }

  await prisma.user.update({
    where: { id: prismaUserId },
    data: { dateOfBirth: newDob, isMinor },
  })

  // ─── The profile, which is what everything else actually reads ─────────
  //
  // THE DEFECT (19 September 2026). This route wrote ONLY the Prisma User
  // row. `profiles.date_of_birth` and `profiles.is_minor` are what the
  // client-side analytics gate, the entitlement checks and the Children's
  // Code defaults all read, and nothing here touched them. So a child could
  // correct their date of birth and remain, as far as every one of those
  // surfaces was concerned, an adult with no age on record.
  //
  // Production on 19 September: 209 profiles, 209 with a NULL date_of_birth
  // and is_minor false.
  //
  // `user.id` is the Supabase auth uuid and IS profiles.id. Do NOT use
  // prismaUserId here - that is a cuid and matches nothing in this table.
  // See CLAUDE.md structural fact 1.
  try {
    const svc = createServiceRoleClient()
    const { error: profileErr } = await svc
      .from('profiles')
      .update({ date_of_birth: parsed.data.dateOfBirth, is_minor: isMinor })
      .eq('id', user.id)
    if (profileErr) {
      console.error('[api/profile/dob] profile write failed:', profileErr)
    }

    // applyChildDefaults() has existed since the Children's Code work and
    // was called by NOTHING - a repo-wide grep found only its definition and
    // a TODO in the register route. It writes the seven high-privacy child
    // columns plus is_minor. It does not write date_of_birth, which is why
    // the update above has to come first.
    //
    // Deliberately one-way: an adult date arriving does NOT loosen the flags
    // back. A mistyped year must never be able to strip a child's privacy
    // defaults, and the cost of the opposite error is only that an adult
    // keeps settings they can change themselves.
    if (isMinor) {
      await applyChildDefaults(user.id)
    }
  } catch (err) {
    // Never fail the correction itself: the Prisma row is already updated and
    // a child re-submitting a date they have just corrected is worse than a
    // retry of the defaults write.
    console.error('[api/profile/dob] profile defaults write threw:', err)
  }

  return NextResponse.json({ ok: true, rows: 1 })
}

// GET /api/profile/dob - returns { hasPlaceholderDob } for the current user.
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

  const prismaUserId = await tryPrismaUserId(user.id)

  if (!prismaUserId) {
    // We cannot address this account in Prisma at all, so we certainly do
    // not hold a date of birth for it. Show the prompt: it is the only
    // self-service way out of the AI gate's date-of-birth refusal.
    return NextResponse.json({ hasPlaceholderDob: true })
  }

  const row = await prisma.user.findUnique({
    where: { id: prismaUserId },
    select: { dateOfBirth: true },
  })

  // Two cases need the prompt, and both mean "we do not hold a usable date":
  //   * NULL - the column is nullable from 2026-09-17 and a projected
  //     account carries NULL rather than an invented date;
  //   * 2000-01-01 - the placeholder the 2026-04-20 backfill invented. A
  //     learner who genuinely has that date simply re-confirms it through
  //     this form, which is a same-value no-op.
  const dob = row?.dateOfBirth ?? null
  return NextResponse.json({
    hasPlaceholderDob: dob === null || isPlaceholderDob(dob),
    placeholderDate: PLACEHOLDER_DOB_ISO,
  })
}
