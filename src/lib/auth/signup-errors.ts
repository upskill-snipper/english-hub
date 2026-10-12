/**
 * The message for a sign-up Supabase refused, as a translation key.
 *
 * A DEFECT, FIXED 12 OCTOBER 2026. The student form answered every refusal
 * with the neutral "if this address is valid and not already registered, we
 * have sent a verification link" wording, and the teacher form showed
 * Supabase's raw English message. A password Supabase rejects, an email rate
 * limit, a mistyped address or an outage therefore told a learner to wait for
 * an email that was never coming. No account is created on those paths, so
 * they left no trace in any count either.
 *
 * Only an address that already has an account keeps the neutral wording: that
 * is the account-enumeration defence (P1-SEC-6), and with email confirmation
 * on, Supabase answers that case with an apparent success rather than an
 * error in any event.
 */
export function signUpErrorMessageKey(err: {
  code?: string
  status?: number
  message?: string
}): string {
  const code = err.code ?? ''
  if (code === 'user_already_exists' || code === 'email_exists') {
    return 'auth.register.neutral_signup_response'
  }
  if (code === 'weak_password') return 'auth.register.error.weak_password'
  if (
    code === 'over_email_send_rate_limit' ||
    code === 'over_request_rate_limit' ||
    err.status === 429
  ) {
    return 'auth.register.error.rate_limited'
  }
  if (
    code === 'email_address_invalid' ||
    (code === 'validation_failed' && /email/i.test(err.message ?? ''))
  ) {
    return 'auth.register.error.invalid_email'
  }
  return 'auth.register.error.unavailable'
}
