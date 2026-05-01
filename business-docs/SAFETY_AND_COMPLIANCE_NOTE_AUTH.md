# Safety and Compliance Note: Soft Email Verification

**Status:** Active
**Effective:** 28 April 2026
**Owner:** Calum Johnson, founder
**Audience:** School heads of English, MAT procurement, parents, ICO Children's Code reviewers, future engineers

---

## 1. Summary (TL;DR)

From 28 April 2026, The English Hub no longer requires email-link verification at sign-up. Verification is still enforced before sensitive actions: Stripe checkout, changing primary email, and account deletion. The change was made because real users — including a documented internal test case — were getting stuck at sign-up when verification emails did not land or were missed in the inbox. The headline compliance position is unchanged: GDPR, the UK Data Protection Act 2018, and the ICO's Children's Code are unaffected, because the platform's safety floor for under-18 users is the date-of-birth age-gate plus parent-guardian email for under-16s, not the email-verification step.

## 2. What changed

- The Supabase "Confirm email" toggle is set to **off** for new sign-ups.
- New users land directly in an authenticated session and can begin revising immediately.
- A soft-verification policy module was added at `src/lib/auth/email-verification-policy.ts`. It defines which actions require a verified email and is the single source of truth for that gate.
- Existing flows for resending verification, changing email, and verifying via the link are retained.

This is a Supabase dashboard toggle plus a new policy module. It is not a wholesale rewrite of the auth system, and both code paths (verification-required and verification-soft) remain live.

## 3. What we still verify (the safety floor)

- **Date of birth at sign-up.** Server-side validated at `/api/auth/validate-age`. The DOB is collected before account creation; client-side controls cannot bypass the server check.
- **Under-13s blocked.** Sign-up is refused for any user whose DOB indicates they are under 13. They never reach Supabase auth.
- **Under-16s require a parent-guardian email.** A parental notification email is sent via `/api/auth/parent-notify` at sign-up time, and the under-16 account is created with high-privacy defaults applied automatically.
- **Password rules.** Minimum 8 characters, enforced server-side.
- **Account-enumeration defences.** The login, signup, and resend-verification endpoints are written to avoid leaking whether an email is registered (see the `P1-SEC-5` and `P1-SEC-6` review comments in the auth route handlers). Error messages are deliberately generic.
- **Rate-limiting on `/api/auth/resend-verification`.** Currently 3 requests per IP per hour and 5 per email address per day. Prevents using the resend endpoint as an email-bomb relay.
- **Children's Code high-privacy defaults at sign-up.** Under-16 profiles are created with analytics off, marketing off, profile visibility off, and other privacy-by-default settings without requiring the user or guardian to opt out.
- **Verified email REQUIRED before sensitive actions.** The `email-verification-policy.ts` module enforces that the user's email must be verified before:
  - Stripe checkout
  - Changing the primary email on the account
  - Deleting the account

## 4. What we no longer verify

- **Email deliverability at sign-up.** A user who mistypes their email can complete sign-up but will not be able to receive a password-reset link later. Mitigations:
  - Google OAuth is offered as the primary alternative on the sign-up page. Google has already verified the email address, so OAuth users land verified by definition.
  - The resend-verification page remains available and is linked from the dashboard.
  - The soft-verification gate at Stripe checkout means a typo'd account cannot complete payment, so the worst-case commercial outcome (taking money from an account the user cannot recover) is prevented.
  - `founder@theenglishhub.app` provides a manual rescue path for users who lose access.

## 5. Compliance assessment

### GDPR / UK Data Protection Act 2018

There is no statutory requirement under GDPR or the UK DPA to verify a user's email at sign-up. Compliance turns on the lawful basis for processing (consent or legitimate interest), data minimisation, retention, and the rights of the data subject — none of which depend on the verification step. Article 5(1)(d) requires that personal data be accurate and kept up to date; we discharge this by encouraging users to verify their email and providing self-serve tools (resend-verification, change-email) to keep the address current.

### ICO Children's Code (UK)

The Code's safety net for under-18s is age-appropriate design, not email verification. Specifically:

- **Under-16 path.** DOB at sign-up, parental notification email, high-privacy defaults, no targeted advertising or behavioural profiling. All of these are preserved by this change.
- **Under-13 path.** Sign-up is refused outright. Preserved.

The ICO Children's Code prioritises age-appropriate design and the best interests of the child; nothing in the standards we have reviewed requires email-link confirmation as a condition of compliance.

### COPPA (US)

We do not actively target the US market. The under-13 sign-up block is consistent with COPPA's general restriction on collecting personal information from children under 13 without verifiable parental consent. Preserved.

### Stripe Acceptable Use Policy

Stripe does not require verified email at account sign-up but does require accurate customer details at checkout. Our soft-verification gate — a verified email is mandatory before Stripe checkout proceeds — is consistent with that requirement.

## 6. Risk register

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| Spam sign-ups inflate user count | Medium | Low | Rate-limiting on auth endpoints; optional CAPTCHA on `/auth/register` if abuse is detected |
| Typo'd email leaves account unrecoverable | Low | Medium | Google OAuth available; resend-verification page; `founder@theenglishhub.app` rescue path; soft-verification gate at checkout prevents payment from a typo'd account |
| Email-bombing (someone signs another person up) | Low | Low | Per-email rate limit on the verification-email send; the verification-pending state is not claimed unless the user logs in, so typing a victim's email into our form does nothing harmful to them |
| Phishing pretending to be us | Same as before | Same as before | DKIM and DMARC configured on the Resend sending domain; users are told we never ask for a password by email |

## 7. Rollback plan

If abuse spikes or a regulator raises a concern:

1. Re-enable the Supabase "Confirm email" toggle. The codebase already handles both paths: the `data.session` check at `register/page.tsx` line 284 fires only when confirmation is off, and the verification-pending success card fires when confirmation is on.
2. Optionally, switch `email-verification-policy.ts` POLICY map values to `true` for additional sensitive actions (for example, requiring verification before joining a class or posting in a group).

No code rollback is required for either step. Both paths are live in the codebase by design.

## 8. Acceptance / sign-off

Decision logged 28 April 2026 by Calum Johnson, founder, after Lauren Johnson (test user) flagged the friction publicly. This document is reviewed at each major release or on receipt of a substantive compliance query, whichever is sooner.
