/**
 * Inviting staff into a school: the logic of POST /api/school/invite, shared
 * with the operator's setup page (POST /api/admin/schools/[schoolId]/staff).
 * Each caller does its own auth and names the school; nothing here derives a
 * school from whoever is calling.
 *
 * Per person, in this order:
 *   1. THE CROSS-SCHOOL GUARD. If the email already has an ACCEPTED
 *      school_members row at a DIFFERENT school, the person is skipped and
 *      reported. Nothing is written and no email is sent.
 *   2. Already a member of this school: an accepted row is left alone; a
 *      pending or expired invite gets a new 7-day token and a new email.
 *   3. Already has an account (a `profiles` row): added straight in as
 *      accepted, after the same guard on their account id, and told by email.
 *   4. Otherwise: a pending row with a 7-day `crypto.randomUUID()` token, and
 *      the invitation email (Resend, through sendEmail).
 * Roles are `teacher` or `head_of_department` only.
 *
 * WHY THE GUARD (12 October 2026). getSchoolAccess, getSchoolForUser and
 * verifySchoolMember all read school_members by user_id and accepted status
 * and call `.single()`. A person with accepted memberships at two schools
 * makes that query return two rows: getSchoolAccess returns null, locking
 * them out of the portal, and verifySchoolMember throws, so every
 * /api/school/* call they make fails (docs/system/08, section 1). Step 3 used
 * to insert an accepted row for any existing account without looking, so
 * inviting a teacher who already worked at another client school broke both
 * of their accounts. The check runs on the email, and again on the account id
 * before step 3 writes, because the `.single()` lookups key on the id.
 * Pending invites elsewhere do not count: they are not yet a membership.
 *
 * ALSO FIXED HERE, because the two callers now report per person: a failed
 * invitation email used to count as "sent" (one branch never read the result,
 * the other logged a warning and counted it anyway), and the re-issue's update
 * was never checked. Each result now says whether its email went.
 *
 * Tested by ./invite-staff.test.ts.
 */

import type { SupabaseClient } from '@supabase/supabase-js'

import { sendEmail } from '@/lib/email'
import { displayNameFromEmail } from '@/lib/school-students'

export const INVITE_TTL_MS = 7 * 24 * 60 * 60 * 1000 // 7 days
export const VALID_INVITE_ROLES = ['teacher', 'head_of_department'] as const
export type InviteRole = (typeof VALID_INVITE_ROLES)[number]

export interface StaffInvitee {
  /** Normalised here as well: lower case, trimmed. Callers pass each email once. */
  readonly email: string
  readonly role: InviteRole
  /** The person's name, when the caller knows it; otherwise derived from the email, as before. */
  readonly fullName?: string
}

export type StaffInviteOutcome =
  /** A new pending invite, with its token and email. */
  | 'invited'
  /** An existing pending or expired invite here, given a new token and a new email. */
  | 'reinvited'
  /** Already had an account: added straight in as accepted, and told by email. */
  | 'added_existing'
  /** Already an accepted member of this school; nothing changed. */
  | 'already_member'
  /** An accepted member of a different school; skipped by the guard. */
  | 'other_school'
  | 'failed'

export interface StaffInviteResult {
  readonly email: string
  readonly role: InviteRole
  readonly outcome: StaffInviteOutcome
  /** true if the email was accepted by the mail service, false if not, null if none was due. */
  readonly emailSent: boolean | null
  /** A short reason, for 'failed', 'other_school', or an email that did not go. */
  readonly reason?: string
  /** The database's or mail service's own words, for the operator. */
  readonly detail?: string
  /** For 'other_school': the school they belong to. For the operator only. */
  readonly otherSchoolId?: string
  /** The school_members row now holding the invite or membership. */
  readonly memberId?: string
}

export interface InviteStaffParams {
  /** The service-role client: invitees are not members yet, so RLS would see nothing. */
  readonly admin: SupabaseClient
  readonly school: { readonly id: string; readonly name: string }
  readonly invitees: ReadonlyArray<StaffInvitee>
  /** An optional note from the inviter, shown in the email. Capped at 500 characters. */
  readonly message?: string
  readonly appUrl?: string
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export function normaliseEmail(email: string): string {
  return email.toLowerCase().trim()
}

function escapeHtml(v: string): string {
  return v
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function reasonOf(e: unknown): string {
  if (e && typeof e === 'object' && 'message' in e) {
    const message = (e as { message?: unknown }).message
    if (typeof message === 'string' && message.trim()) return message.slice(0, 300)
  }
  return e instanceof Error ? e.message.slice(0, 300) : 'no reason given'
}

/**
 * Build the invite-email HTML body inline so we don't require a separate
 * template function. Mirrors the layout used across the rest of the app.
 * The school name is escaped as the message always was; an operator types it.
 */
export function buildInviteEmailHtml(opts: {
  schoolName: string
  role: string
  inviteUrl: string
  message?: string
}): string {
  const BRAND_COLOR = '#1A5276'
  const roleLabel = opts.role === 'head_of_department' ? 'Head of Department' : 'Teacher'
  const schoolName = escapeHtml(opts.schoolName)

  const messageBlock = opts.message
    ? `<p style="margin:0 0 16px;padding:12px 16px;background:#f4f4f4;border-left:4px solid ${BRAND_COLOR};border-radius:4px;font-style:italic;color:#555;">
        ${opts.message.replace(/</g, '&lt;').replace(/>/g, '&gt;')}
      </p>`
    : ''

  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"/><meta name="viewport" content="width=device-width,initial-scale=1.0"/><title>School Invitation</title></head>
<body style="margin:0;padding:0;background:#f4f4f4;font-family:Arial,Helvetica,sans-serif;color:#333;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f4;">
    <tr><td align="center" style="padding:24px 16px;">
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:8px;overflow:hidden;max-width:600px;width:100%;">
        <tr><td style="background:${BRAND_COLOR};padding:24px 32px;text-align:center;">
          <h1 style="margin:0;color:#fff;font-size:24px;font-weight:700;">The English Hub</h1>
        </td></tr>
        <tr><td style="padding:32px;">
          <h2 style="margin:0 0 8px;font-size:20px;color:#111;">You have been invited to join ${schoolName}</h2>
          <p style="margin:0 0 16px;color:#555;">You have been invited as a <strong>${roleLabel}</strong>. Click the button below to accept your invitation. The link expires in 7 days.</p>
          ${messageBlock}
          <div style="text-align:center;margin:24px 0;">
            <a href="${opts.inviteUrl}" style="display:inline-block;padding:14px 28px;background:${BRAND_COLOR};color:#fff;text-decoration:none;border-radius:6px;font-weight:700;font-size:16px;">
              Accept Invitation
            </a>
          </div>
          <p style="margin:16px 0 0;font-size:13px;color:#888;text-align:center;">
            Or copy this link: <a href="${opts.inviteUrl}" style="color:${BRAND_COLOR};">${opts.inviteUrl}</a>
          </p>
          <hr style="margin:24px 0;border:none;border-top:1px solid #eee;"/>
          <p style="margin:0;font-size:12px;color:#aaa;text-align:center;">
            If you were not expecting this invitation, you can safely ignore this email.
          </p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`
}

/**
 * The school, other than `schoolId`, where this email or account already has
 * an ACCEPTED membership; null if none. A read error is returned, not treated
 * as "none": a guard that fails open is no guard.
 */
async function acceptedElsewhere(
  admin: SupabaseClient,
  schoolId: string,
  by: { readonly email: string } | { readonly userId: string },
): Promise<{ schoolId: string | null; error: null } | { schoolId: null; error: string }> {
  const query = admin
    .from('school_members')
    .select('school_id')
    .eq('invite_status', 'accepted')
    .neq('school_id', schoolId)
  const { data, error } = await (
    'email' in by ? query.eq('email', by.email) : query.eq('user_id', by.userId)
  ).limit(1)
  if (error) return { schoolId: null, error: reasonOf(error) }
  const first = ((data ?? []) as Array<{ school_id: unknown }>)[0]
  return {
    schoolId: first && typeof first.school_id === 'string' ? first.school_id : null,
    error: null,
  }
}

// ---------------------------------------------------------------------------
// The invitations
// ---------------------------------------------------------------------------

/**
 * Invite each person, one at a time, and say what happened to each. Never
 * throws for a person; an unexpected error is that person's 'failed'.
 */
export async function inviteStaff(params: InviteStaffParams): Promise<StaffInviteResult[]> {
  const { admin, school, invitees } = params
  const message = params.message?.slice(0, 500)
  const appUrl = params.appUrl ?? process.env.NEXT_PUBLIC_APP_URL ?? 'https://theenglishhub.app'
  const results: StaffInviteResult[] = []

  for (const invitee of invitees) {
    const email = normaliseEmail(invitee.email)
    const role = invitee.role
    const fullName = invitee.fullName?.trim() || undefined
    const failed = (reason: string, detail?: string): StaffInviteResult => ({
      email,
      role,
      outcome: 'failed',
      emailSent: null,
      reason,
      ...(detail ? { detail } : {}),
    })

    if (!isValidEmail(email)) {
      results.push(failed('Not a valid email address'))
      continue
    }
    if (!VALID_INVITE_ROLES.includes(role)) {
      results.push(failed(`Role must be one of: ${VALID_INVITE_ROLES.join(', ')}`))
      continue
    }

    try {
      // 1. The cross-school guard, on the email.
      const elsewhere = await acceptedElsewhere(admin, school.id, { email })
      if (elsewhere.error !== null) {
        console.error(`[invite] Could not check other schools for ${email}:`, elsewhere.error)
        results.push(
          failed('Could not check whether they belong to another school', elsewhere.error),
        )
        continue
      }
      if (elsewhere.schoolId) {
        results.push({
          email,
          role,
          outcome: 'other_school',
          emailSent: null,
          reason:
            'Already an accepted member of another school, so not invited: one person cannot belong to two schools',
          otherSchoolId: elsewhere.schoolId,
        })
        continue
      }

      // 2. Already a member of this school?
      const { data: existingMember, error: existingError } = await admin
        .from('school_members')
        .select('id, invite_status, user_id')
        .eq('school_id', school.id)
        .eq('email', email)
        .maybeSingle()
      if (existingError) {
        console.error(`[invite] Failed to look up ${email}:`, existingError)
        results.push(failed('Could not check existing membership', reasonOf(existingError)))
        continue
      }

      if (existingMember) {
        if (existingMember.invite_status === 'accepted') {
          results.push({
            email,
            role,
            outcome: 'already_member',
            emailSent: null,
            memberId: existingMember.id,
          })
          continue
        }
        // Has a pending/expired invite - re-issue a fresh token rather than erroring
        const newToken = crypto.randomUUID()
        const expiresAt = new Date(Date.now() + INVITE_TTL_MS).toISOString()
        const { error: reissueError } = await admin
          .from('school_members')
          .update({
            invite_token: newToken,
            invite_expires_at: expiresAt,
            invite_status: 'pending',
            role,
            ...(fullName ? { full_name: fullName } : {}),
          })
          .eq('id', existingMember.id)
        if (reissueError) {
          console.error(`[invite] Failed to re-issue the invite for ${email}:`, reissueError)
          results.push(failed('Failed to re-issue the invitation', reasonOf(reissueError)))
          continue
        }

        const inviteUrl = `${appUrl}/school/invite/${newToken}`
        const sent = await sendEmail(
          email,
          `You have been invited to join ${school.name} on The English Hub`,
          buildInviteEmailHtml({ schoolName: school.name, role, inviteUrl, message }),
        )
        if (!sent.success) {
          console.warn(`[invite] Email delivery failed for ${email}: ${sent.error}`)
        }
        results.push({
          email,
          role,
          outcome: 'reinvited',
          emailSent: sent.success,
          memberId: existingMember.id,
          ...(sent.success
            ? {}
            : { reason: 'The invitation email could not be sent', detail: sent.error }),
        })
        continue
      }

      // 3. Does the email belong to an existing Supabase auth user?
      const { data: existingProfile, error: profileError } = await admin
        .from('profiles')
        .select('id, full_name')
        .eq('email', email)
        .maybeSingle()
      if (profileError) {
        console.error(`[invite] Failed to look up the account for ${email}:`, profileError)
        results.push(failed('Could not check for an existing account', reasonOf(profileError)))
        continue
      }

      if (existingProfile) {
        // The guard again, on the account: the portal's lookups key on it.
        const byAccount = await acceptedElsewhere(admin, school.id, { userId: existingProfile.id })
        if (byAccount.error !== null) {
          console.error(`[invite] Could not check other schools for ${email}:`, byAccount.error)
          results.push(
            failed('Could not check whether they belong to another school', byAccount.error),
          )
          continue
        }
        if (byAccount.schoolId) {
          results.push({
            email,
            role,
            outcome: 'other_school',
            emailSent: null,
            reason:
              'Their account is already an accepted member of another school, so not invited: one person cannot belong to two schools',
            otherSchoolId: byAccount.schoolId,
          })
          continue
        }

        // User already has an account - add directly as accepted member.
        // full_name must be supplied: the column predates the 20260818
        // migration on most rows and a name is expected everywhere the
        // member is displayed. Prefer the profile's real name, then the name
        // the caller supplied, then one derived from the email local-part.
        const { data: inserted, error: insertError } = await admin
          .from('school_members')
          .insert({
            school_id: school.id,
            user_id: existingProfile.id,
            role,
            full_name: existingProfile.full_name ?? fullName ?? displayNameFromEmail(email),
            email,
            invite_status: 'accepted',
            invite_token: null,
            invite_expires_at: null,
            last_active_at: new Date().toISOString(),
          })
          .select('id')
          .single()

        if (insertError) {
          console.error(`[invite] Failed to add existing user ${email}:`, insertError)
          results.push(failed('Failed to add to school', reasonOf(insertError)))
          continue
        }

        // Notify them that they have been added
        const sent = await sendEmail(
          email,
          `You have been added to ${school.name} on The English Hub`,
          buildInviteEmailHtml({
            schoolName: school.name,
            role,
            inviteUrl: `${appUrl}/school`,
            message,
          }),
        )
        if (!sent.success) {
          console.warn(`[invite] Email delivery failed for ${email}: ${sent.error}`)
        }
        results.push({
          email,
          role,
          outcome: 'added_existing',
          emailSent: sent.success,
          memberId: (inserted as { id?: string } | null)?.id,
          ...(sent.success
            ? {}
            : { reason: 'The email telling them could not be sent', detail: sent.error }),
        })
        continue
      }

      // 4. New user - create a pending invite with a UUID token.
      const inviteToken = crypto.randomUUID()
      const inviteExpiresAt = new Date(Date.now() + INVITE_TTL_MS).toISOString()

      // full_name is the name the caller supplied, or derived from the email
      // local-part when that is all we know; the acceptance flow can
      // overwrite it once they sign up.
      const { data: inserted, error: insertError } = await admin
        .from('school_members')
        .insert({
          school_id: school.id,
          user_id: null,
          role,
          full_name: fullName ?? displayNameFromEmail(email),
          email,
          invite_status: 'pending',
          invite_token: inviteToken,
          invite_expires_at: inviteExpiresAt,
        })
        .select('id')
        .single()

      if (insertError) {
        console.error(`[invite] Failed to insert pending invite for ${email}:`, insertError)
        results.push(failed('Failed to create invite record', reasonOf(insertError)))
        continue
      }

      const inviteUrl = `${appUrl}/school/invite/${inviteToken}`
      const sent = await sendEmail(
        email,
        `You have been invited to join ${school.name} on The English Hub`,
        buildInviteEmailHtml({ schoolName: school.name, role, inviteUrl, message }),
      )
      if (!sent.success) {
        // The record exists, and inviting them again re-sends it (step 2).
        console.warn(`[invite] Email delivery failed for ${email}: ${sent.error}`)
      }
      results.push({
        email,
        role,
        outcome: 'invited',
        emailSent: sent.success,
        memberId: (inserted as { id?: string } | null)?.id,
        ...(sent.success
          ? {}
          : { reason: 'The invitation email could not be sent', detail: sent.error }),
      })
    } catch (err) {
      console.error(`[invite] Unexpected error for ${email}:`, err)
      results.push(failed('Unexpected error', reasonOf(err)))
    }
  }

  return results
}
