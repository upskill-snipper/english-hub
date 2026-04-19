/**
 * Trustpilot trigger orchestrator.
 *
 * Single entry point that route handlers + crons call to request a Trustpilot
 * invite on a specific trigger. Handles dedup, under-18 skip, opt-out skip,
 * invite-link construction, send, and the invite record write.
 *
 * Call pattern (fire-and-forget from request handlers):
 *
 *   // after successful business event
 *   triggerTrustpilotInvite({ trigger: 'student_first_mark', supabaseUserId: user.id })
 *     .catch((err) => console.warn('[trustpilot] trigger dispatch failed', err))
 *
 * The function never throws on expected no-send paths (under-18, opted out,
 * already sent). It does log. Never block the response on the result.
 */

import { createServiceRoleClient } from '@/lib/supabase/server'
import { prisma } from '@/lib/prisma'
import { buildTrustpilotInviteLink, sendTrustpilotInvite } from './send-invite'
import type { TrustpilotTrigger, TrustpilotVars } from './email-templates'

export type TriggerTrustpilotInviteInput = {
  trigger: TrustpilotTrigger
  /** Supabase auth user id (UUID). */
  supabaseUserId: string
  /**
   * Optional extra variables for specific triggers (e.g. mock board/paper,
   * retention stats). Will be merged into the template variables.
   */
  extraVars?: Partial<TrustpilotVars>
}

export type TriggerTrustpilotInviteResult = {
  ok: boolean
  skipped?:
    | 'already_invited'
    | 'under_18'
    | 'opted_out'
    | 'user_not_found'
    | 'disabled'
    | 'soft_deleted'
  sent?: boolean
  messageId?: string
  error?: string
}

/**
 * Dispatch a Trustpilot invite for the given trigger.
 *
 * Does in order:
 *   1. Look up the user (Prisma) — if not found or soft-deleted, skip.
 *   2. If user is a minor (Children's Code), skip.
 *   3. Check opt-out preference (placeholder until the privacy toggle ships;
 *      currently always proceeds — see TODO inline).
 *   4. Dedup via `trustpilot_invite` table — if (user_id, trigger) exists, skip.
 *   5. Call sendTrustpilotInvite — which no-ops if TRUSTPILOT_ENABLED is off.
 *   6. Record the outcome in `trustpilot_invite`.
 */
export async function triggerTrustpilotInvite(
  input: TriggerTrustpilotInviteInput,
): Promise<TriggerTrustpilotInviteResult> {
  const { trigger, supabaseUserId, extraVars } = input

  try {
    // ── 1. Look up user details ──────────────────────────────────────
    // The Prisma User model is keyed by email (unique), so we bridge from
    // the Supabase auth UUID to the Prisma row via the Supabase Admin API.
    // If a future schema migration adds `supabaseUserId` to User, this
    // block can be replaced with a direct Prisma lookup on that column.
    const supabase = createServiceRoleClient()
    const { data: authData } = await supabase.auth.admin.getUserById(supabaseUserId)
    const authEmail = authData?.user?.email
    if (!authEmail) {
      return { ok: true, skipped: 'user_not_found' }
    }

    const user = await prisma.user.findUnique({
      where: { email: authEmail },
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        isMinor: true,
        deletedAt: true,
        role: true,
      },
    })

    if (!user) {
      return { ok: true, skipped: 'user_not_found' }
    }
    if (user.deletedAt) {
      return { ok: true, skipped: 'soft_deleted' }
    }

    // ── 2. Children's Code skip ──────────────────────────────────────
    if (user.isMinor) {
      return { ok: true, skipped: 'under_18' }
    }

    // ── 3. Opt-out skip ──────────────────────────────────────────────
    // TODO: once the account-settings "review invitations" toggle ships,
    // read from privacy_settings / user preferences and honour it here.
    // For now we proceed — the scaffold is feature-flagged off anyway.
    const optedOut = false
    if (optedOut) {
      return { ok: true, skipped: 'opted_out' }
    }

    // ── 4. Dedup via Supabase trustpilot_invite table ────────────────
    const { data: existing, error: existingErr } = await supabase
      .from('trustpilot_invite')
      .select('id, status')
      .eq('user_id', supabaseUserId)
      .eq('trigger', trigger)
      .maybeSingle()

    if (existingErr && existingErr.code !== 'PGRST116') {
      // PGRST116 = "no rows" in PostgREST; anything else is a real error.
      console.warn('[trustpilot] dedup lookup failed', existingErr.message)
      // Proceed with send — the unique constraint on (user_id, trigger) in
      // the table will catch any actual duplicate on INSERT below.
    }
    if (existing) {
      return { ok: true, skipped: 'already_invited' }
    }

    // ── 5. Build invite link + vars, then send ───────────────────────
    const displayName = user.firstName?.trim() || (user.email.split('@')[0] ?? 'there')
    const fullName = `${user.firstName ?? ''} ${user.lastName ?? ''}`.trim() || displayName

    const invite_link = buildTrustpilotInviteLink({
      email: user.email,
      name: fullName,
      orderId: user.id,
    })

    const vars: TrustpilotVars = {
      first_name: displayName,
      trustpilot_invite_link: invite_link,
      ...extraVars,
    }

    const result = await sendTrustpilotInvite({
      trigger,
      toEmail: user.email,
      vars,
      userId: supabaseUserId,
    })

    // ── 6. Record outcome (idempotent insert) ────────────────────────
    // If the feature flag is off, result.sent will be false with
    // skipped === 'disabled'. We still insert a row so a later audit can
    // see that the trigger fired correctly — just didn't actually send.
    const status: 'sent' | 'skipped' | 'failed' = result.sent
      ? 'sent'
      : result.skipped
        ? 'skipped'
        : 'failed'

    const { error: insertErr } = await supabase.from('trustpilot_invite').insert({
      user_id: supabaseUserId,
      trigger,
      status,
      message_id: result.messageId ?? null,
      error: result.error ?? null,
      skipped_reason: result.skipped ?? null,
    })

    if (insertErr && insertErr.code !== '23505') {
      // 23505 = unique_violation (another concurrent call beat us)
      console.warn('[trustpilot] invite record insert failed', insertErr.message)
    }

    return {
      ok: true,
      sent: result.sent,
      messageId: result.messageId,
      error: result.error,
      skipped: result.skipped === 'disabled' ? 'disabled' : undefined,
    }
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err)
    console.warn('[trustpilot] triggerTrustpilotInvite error', msg)
    return { ok: false, error: msg }
  }
}

// ── Convenience wrappers per trigger ──────────────────────────────────
//
// These keep call sites tidy: instead of spelling out the full input object
// with the trigger string, callers just do `fireStudentFirstMark(user.id)`.

export const fireStudentFirstMark = (supabaseUserId: string) =>
  triggerTrustpilotInvite({ trigger: 'student_first_mark', supabaseUserId })

export const fireStudentFirstMark7dFollowup = (
  supabaseUserId: string,
  essaysSubmittedCount: number,
) =>
  triggerTrustpilotInvite({
    trigger: 'student_first_mark_followup_7d',
    supabaseUserId,
    extraVars: { essays_submitted_count: essaysSubmittedCount },
  })

export const fireStudentFirstMock = (
  supabaseUserId: string,
  opts: { mock_board: string; mock_paper: string; mock_duration_minutes: number },
) =>
  triggerTrustpilotInvite({
    trigger: 'student_first_mock',
    supabaseUserId,
    extraVars: opts,
  })

export const fireStudent90dRetention = (
  supabaseUserId: string,
  opts: {
    modules_completed: number
    essays_submitted_count: number
    mock_exams_taken: number
    grade_start: string
    grade_current: string
  },
) =>
  triggerTrustpilotInvite({
    trigger: 'student_90d_retention',
    supabaseUserId,
    extraVars: opts,
  })

export const fireTeacherFirstBulkMark = (supabaseUserId: string) =>
  triggerTrustpilotInvite({ trigger: 'teacher_first_bulk_mark', supabaseUserId })
