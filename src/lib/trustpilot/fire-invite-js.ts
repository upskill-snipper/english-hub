/**
 * Client-side helper to fire a Trustpilot InviteJS invitation for the
 * currently-signed-in user. Goes through the same server-side dedup as the
 * BCC path via `POST /api/trustpilot/fired-check` - if that endpoint says
 * "don't fire", we respect it silently.
 *
 * Usage (client component):
 *   await fireTrustpilotInvite({
 *     email: user.email,
 *     name: user.firstName,
 *     referenceId: user.id,
 *     products: ['subscription'],
 *   })
 *
 * Never throws. Callers may `void`-prefix the call.
 */

import type { TrustpilotBccTrigger } from './trigger-names'

export type FireTrustpilotInviteInput = {
  email: string
  name: string
  referenceId: string
  products?: string[]
  trigger?: TrustpilotBccTrigger
}

export type FireTrustpilotInviteResult = {
  fired: boolean
  reason?: string
}

export async function fireTrustpilotInvite(
  input: FireTrustpilotInviteInput,
): Promise<FireTrustpilotInviteResult> {
  if (typeof window === 'undefined') return { fired: false, reason: 'no_window' }
  if (typeof window.tp !== 'function') {
    return { fired: false, reason: 'tp_not_loaded' }
  }
  if (!input.email || !input.referenceId) {
    return { fired: false, reason: 'invalid_input' }
  }

  const trigger: TrustpilotBccTrigger = input.trigger ?? 'student_90d_retention'

  // Atomic reserve-or-deny via the dedup endpoint.
  let allowed: { canFire: boolean; reason?: string }
  try {
    const res = await fetch('/api/trustpilot/fired-check', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ trigger, referenceId: input.referenceId }),
    })
    if (!res.ok) {
      return { fired: false, reason: `fired_check_${res.status}` }
    }
    allowed = (await res.json()) as { canFire: boolean; reason?: string }
  } catch (err) {
    return {
      fired: false,
      reason: err instanceof Error ? err.message : 'fired_check_failed',
    }
  }

  if (!allowed.canFire) {
    return { fired: false, reason: allowed.reason ?? 'denied' }
  }

  try {
    window.tp('createInvitation', {
      recipientEmail: input.email,
      recipientName: input.name,
      referenceId: input.referenceId,
      source: 'InvitationLinkApi',
      productSkus: input.products ?? [],
    })
    return { fired: true }
  } catch (err) {
    return {
      fired: false,
      reason: err instanceof Error ? err.message : 'tp_threw',
    }
  }
}
