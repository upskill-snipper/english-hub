import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase/server'
import { verifySchoolMember } from '@/lib/school-auth'
import { rateLimit, getClientIp } from '@/lib/rate-limit'
import {
  inviteStaff,
  isValidEmail,
  normaliseEmail,
  VALID_INVITE_ROLES,
  type InviteRole,
} from '@/lib/school/invite-staff'
import { isUuid } from '@/lib/school/is-uuid'

export const dynamic = 'force-dynamic'

// ---------------------------------------------------------------------------
// POST /api/school/invite
//
// A school administrator invites staff to their own school. The invitation
// logic lives in src/lib/school/invite-staff.ts (12 October 2026), shared with
// the operator's setup page; this route keeps its auth, rate limit, request
// checks and response shape: `{ sent, alreadyMembers, errors }`.
//
// What changed with the move, as the school sees it:
//   - someone already accepted at ANOTHER school is not invited, and is listed
//     in `errors` (one person in two schools breaks the portal for both);
//   - an invitation whose email could not be sent is listed in `errors`
//     instead of being counted as sent.
// ---------------------------------------------------------------------------

export async function POST(request: NextRequest) {
  try {
    const ip = getClientIp(request.headers)
    const rl = await rateLimit(`school-invite-send:${ip}`, { limit: 20, windowSeconds: 60 })
    if (!rl.success) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        {
          status: 429,
          headers: { 'Retry-After': String(Math.ceil((rl.resetAt - Date.now()) / 1000)) },
        },
      )
    }

    const supabase = createServerSupabaseClient()
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()
    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const actor = await verifySchoolMember(user.id, ['admin'])
    if (!actor) {
      return NextResponse.json(
        { error: 'Forbidden: only school admins can send invitations' },
        { status: 403 },
      )
    }

    let body: { emails?: unknown; role?: unknown; message?: unknown }
    try {
      body = await request.json()
    } catch {
      return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
    }

    // Validate emails array
    if (!Array.isArray(body.emails) || body.emails.length === 0) {
      return NextResponse.json({ error: 'emails must be a non-empty array' }, { status: 422 })
    }

    if (body.emails.length > 50) {
      return NextResponse.json(
        { error: 'Cannot send more than 50 invites at once' },
        { status: 422 },
      )
    }

    const rawEmails = body.emails as unknown[]
    const rawRole = body.role as string | undefined
    const rawMessage = typeof body.message === 'string' ? body.message.slice(0, 500) : undefined

    // Validate role
    if (!rawRole || !VALID_INVITE_ROLES.includes(rawRole as InviteRole)) {
      return NextResponse.json(
        { error: `role must be one of: ${VALID_INVITE_ROLES.join(', ')}` },
        { status: 422 },
      )
    }

    const role = rawRole as InviteRole

    // Validate and normalise each email
    const invalidEmails: string[] = []
    const emails: string[] = []
    for (const e of rawEmails) {
      if (typeof e !== 'string') {
        invalidEmails.push(String(e))
        continue
      }
      const normalised = normaliseEmail(e)
      if (!isValidEmail(normalised)) {
        invalidEmails.push(e)
      } else {
        emails.push(normalised)
      }
    }

    if (invalidEmails.length > 0) {
      return NextResponse.json(
        { error: `Invalid email addresses: ${invalidEmails.join(', ')}` },
        { status: 422 },
      )
    }

    // Deduplicate
    const uniqueEmails = [...new Set(emails)]

    // A site administrator's synthetic membership has no real school to
    // invite anyone into; the operator invites staff from /admin/schools.
    if (!isUuid(actor.school_id)) {
      return NextResponse.json(
        {
          error:
            'This account is not attached to a school. A site administrator invites staff from /admin/schools.',
        },
        { status: 422 },
      )
    }

    const schoolName = (actor.schools as unknown as { name: string } | null)?.name ?? 'your school'

    const results = await inviteStaff({
      admin: createServiceRoleClient(),
      school: { id: actor.school_id, name: schoolName },
      invitees: uniqueEmails.map((email) => ({ email, role })),
      message: rawMessage,
    })

    // The route's response, as before. `alreadyMembers` has always counted
    // an existing account added straight in, as well as a current member.
    let sent = 0
    let alreadyMembers = 0
    const errors: { email: string; reason: string }[] = []
    for (const r of results) {
      switch (r.outcome) {
        case 'invited':
        case 'reinvited':
          if (r.emailSent) sent++
          else
            errors.push({
              email: r.email,
              reason:
                'The invitation was saved, but its email could not be sent. Invite them again to re-send it.',
            })
          break
        case 'added_existing':
          alreadyMembers++
          if (r.emailSent === false) {
            errors.push({
              email: r.email,
              reason: 'Added to the school, but the email telling them could not be sent.',
            })
          }
          break
        case 'already_member':
          alreadyMembers++
          break
        case 'other_school':
          // The other school is not named: that is another school's data.
          errors.push({
            email: r.email,
            reason:
              'Already a member of another school on The English Hub, so not invited. One person cannot belong to two schools.',
          })
          break
        case 'failed':
          errors.push({ email: r.email, reason: r.reason ?? 'Unexpected error' })
          break
      }
    }

    return NextResponse.json({ sent, alreadyMembers, errors }, { status: 200 })
  } catch (error) {
    console.error('[invite] POST error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// ---------------------------------------------------------------------------
// GET /api/school/invite
// ---------------------------------------------------------------------------

export async function GET(request: NextRequest) {
  try {
    const ip = getClientIp(request.headers)
    const rl = await rateLimit(`school-invite-list:${ip}`, { limit: 30, windowSeconds: 60 })
    if (!rl.success) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        {
          status: 429,
          headers: { 'Retry-After': String(Math.ceil((rl.resetAt - Date.now()) / 1000)) },
        },
      )
    }

    const supabase = createServerSupabaseClient()
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()
    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const actor = await verifySchoolMember(user.id, ['admin'])
    if (!actor) {
      return NextResponse.json(
        { error: 'Forbidden: only school admins can view invites' },
        { status: 403 },
      )
    }

    const admin = createServiceRoleClient()

    // Auto-expire any invites whose time has passed
    await admin
      .from('school_members')
      .update({ invite_status: 'expired' })
      .eq('school_id', actor.school_id)
      .eq('invite_status', 'pending')
      .lt('invite_expires_at', new Date().toISOString())

    const { data: invites, error: fetchError } = await admin
      .from('school_members')
      .select('id, email, role, invite_status, invite_token, invite_expires_at, created_at')
      .eq('school_id', actor.school_id)
      .in('invite_status', ['pending', 'expired'])
      .order('created_at', { ascending: false })

    if (fetchError) {
      console.error('[invite] GET list error:', fetchError)
      return NextResponse.json({ error: 'Failed to fetch invites' }, { status: 500 })
    }

    const result = (invites ?? []).map((inv) => ({
      id: inv.id,
      email: inv.email,
      role: inv.role,
      invite_status: inv.invite_status,
      invited_at: inv.created_at,
      expires: inv.invite_expires_at,
    }))

    return NextResponse.json({ invites: result })
  } catch (error) {
    console.error('[invite] GET error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
