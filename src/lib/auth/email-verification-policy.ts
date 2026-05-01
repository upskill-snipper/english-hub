/**
 * Email verification policy (soft-verification model).
 *
 * Background: from 28 Apr 2026 onwards The English Hub no longer requires
 * email verification at sign-up. New users go straight to the product so
 * they can try features without an email-link round-trip. Verification is
 * still required before high-trust actions (Stripe checkout, changing
 * primary email, account deletion). Keeping this gate centralised makes
 * the policy easy to audit and tune.
 *
 * Compliance notes:
 * - GDPR / UK-DPA: no requirement to verify email at signup; lawful
 *   processing turns on consent + necessity, not on verification.
 * - ICO Children's Code: protected by the DOB age-gate at signup, not by
 *   email verification. Under-16 path with parent-guardian email is
 *   unchanged.
 * - Stripe: we still require a verified email at checkout — see
 *   POLICY.stripe_checkout = true. This catches typo accounts before
 *   any money moves.
 */

/**
 * Action that may require a verified email under soft-verification policy.
 * Append-only enum — adding new values is safe; removing is a breaking change.
 */
export type ProtectedAction =
  | 'stripe_checkout'
  | 'change_email'
  | 'delete_account'
  | 'invite_collaborator'
  | 'send_school_invite'

/**
 * Default policy table. Keys are exhaustive over `ProtectedAction` so the
 * compiler will flag any new action that hasn't been categorised.
 */
const POLICY: Readonly<Record<ProtectedAction, boolean>> = {
  stripe_checkout: true, // payment requires verified email
  change_email: true, // changing primary identifier requires verification
  delete_account: true, // destructive, must verify
  invite_collaborator: false, // soft — fine without verification
  send_school_invite: false, // soft — teachers should be able to invite immediately
}

/**
 * Returns true if the action requires the user's email to be verified
 * under the current policy. Centralised so a single edit cascades to
 * every gate site.
 */
export function requiresVerifiedEmail(action: ProtectedAction): boolean {
  return POLICY[action]
}

/**
 * Thrown by `assertEmailVerifiedFor` when the policy gate trips. API
 * routes should catch this and return `emailVerificationRequiredResponse`
 * with HTTP 403.
 */
export class PolicyError extends Error {
  readonly code: 'email-not-verified' = 'email-not-verified'
  readonly action: ProtectedAction

  constructor(action: ProtectedAction) {
    super(`Email verification required for action: ${action}`)
    this.name = 'PolicyError'
    this.action = action
    // Restore prototype chain when targeting ES5 / down-levelled output so
    // `instanceof PolicyError` keeps working across module boundaries.
    Object.setPrototypeOf(this, PolicyError.prototype)
  }
}

/**
 * Server-side helper. Throws PolicyError with code 'email-not-verified'
 * if the user must verify their email before this action.
 *
 * Pass either a Supabase User (from auth.getUser()) or a profile-row-like
 * shape with email_confirmed_at.
 */
export function assertEmailVerifiedFor(
  action: ProtectedAction,
  user: { email_confirmed_at?: string | null } | null,
): void {
  if (!requiresVerifiedEmail(action)) {
    return
  }
  const confirmedAt = user?.email_confirmed_at
  if (!confirmedAt) {
    throw new PolicyError(action)
  }
}

/** Stable JSON shape for the API error response. */
export interface EmailVerificationRequiredError {
  error: 'email_verification_required'
  action: ProtectedAction
  /** Stable, user-readable message safe to render directly in UI. */
  message: string
  /** Where the client can send the user to resolve the gate. */
  resolveUrl: '/auth/resend-verification'
}

/**
 * Build the standard 403 response body for API routes. Callers should
 * pair this with an HTTP 403 status code.
 */
export function emailVerificationRequiredResponse(
  action: ProtectedAction,
): EmailVerificationRequiredError {
  return {
    error: 'email_verification_required',
    action,
    message:
      'Please verify your email address before continuing. Check your inbox for the verification link, or request a new one.',
    resolveUrl: '/auth/resend-verification',
  }
}
