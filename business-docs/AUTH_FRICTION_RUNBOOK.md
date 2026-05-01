# Auth Friction Runbook

Owner: Calum
Last updated: 2026-05-01
Stack: Next.js 14 App Router, Supabase Auth, Stripe, Resend SMTP

## 1. TL;DR

Three real customers are stuck in Supabase with "Waiting for verification" status because the email confirmation step is failing or being ignored. Unstick them by hand in the Supabase dashboard, then turn email verification OFF at signup so future users land straight in the dashboard. The codebase already handles the no-confirmation path (`src/app/auth/register/page.tsx` line 284 auto-redirects when a session is returned). Optionally add Google OAuth for one-click signup. This is GDPR, UK-DPA, COPPA and ICO Children's Code compliant because the safety floor (DOB age-gate, parent-guardian email for under-16, password rules, rate-limiting, account-enumeration defences) stays in place. Roll back any time by flipping the toggle back on.

## 2. Step 1: Unstick the three real customers

Log in to the Supabase dashboard, then for each user:

```
Authentication -> Users -> search by email -> click the 3-dot menu -> "Confirm email"
```

Repeat for all three:

- Esa Mohammed Naveed - `esanaveed1@gmail.com` - signed up 26 Apr 2026
- Lucie - `luciel0u1704@gmail.com` - signed up 20 Apr 2026
- M Karts - `m4.karts@gmail.com` - signed up 15 Apr 2026

Each click flips `email_confirmed_at` from null to a timestamp. The user can then sign in normally.

Alternative (programmatic):

```bash
npx tsx scripts/confirm-stuck-users.ts
```

This script (forthcoming) does the same thing via the Supabase service-role API. Use it if you prefer not to click, or if more users get stuck before Step 2 lands.

After confirming, send each user a short email letting them know their account is active and they can log in at `https://theenglishhub.app/auth/login`.

## 3. Step 2: Disable email confirmation at signup (the friction fix)

In the Supabase dashboard:

```
Authentication -> Sign In / Providers -> Email -> toggle "Confirm email" OFF -> Save
```

That is the entire engineering change. The codebase already handles the unconfirmed-but-session-present case: `src/app/auth/register/page.tsx` line 284 reads

```ts
if (data.session) window.location.assign('/dashboard?welcome=true')
```

so as soon as Supabase returns a session on signup (which it now will, because no confirmation is required), the user is auto-logged-in and lands on the dashboard. No "Check your email" screen, no broken handoff to Resend, no stuck users.

## 4. Step 3: Enable Google OAuth (optional but recommended)

Most users will pick this if it is offered, and Google OAuth users come pre-verified, so they bypass the verification question entirely.

In the Supabase dashboard:

```
Authentication -> Sign In / Providers -> Add provider -> Google -> toggle Enable
```

Then:

1. In Google Cloud Console, create an OAuth 2.0 Client ID (Web application). Steps: https://console.cloud.google.com/apis/credentials -> Create Credentials -> OAuth client ID.
2. Set the authorised redirect URI to `https://theenglishhub.app/auth/callback`.
3. Copy the Client ID and Client Secret into Supabase.
4. Save.

The login and register pages already render a Google button when the provider is enabled.

## 5. Step 4 (optional, defence-in-depth): Soft-verification at checkout

Engineering will add a check before Stripe checkout that requires `email_confirmed_at` to be non-null. So an unverified account can browse, try free features, and create a session, but must verify the email before paying. This recovers the "we have a deliverable email on file for every paying customer" guarantee that you would otherwise lose by removing verification at signup.

Trade-off: a small number of users will hit a verification wall at the checkout moment, which is the worst time to add friction. Mitigate by sending the verification email the moment the user starts checkout, and by having a clear "Resend verification" affordance on the checkout page. The benefit (clean billing data, deliverable receipts, fraud reduction) outweighs the cost.

## 6. Compliance check

Question: is removing email verification at signup still compliant with GDPR, the UK Data Protection Act 2018, COPPA, and the ICO Age Appropriate Design Code (Children's Code)?

Answer: yes.

- GDPR and UK-DPA: there is no requirement to verify a user's email at signup. Article 5 governs lawful, fair and transparent processing - it says nothing about email confirmation. Plenty of compliant SaaS products (Notion, Linear, Vercel) ship without verifying email at signup.
- COPPA (US): protects under-13s. Our defence here is the DOB age-gate at registration, not email verification. Under-13s are blocked from creating accounts entirely.
- ICO Children's Code (UK): protects under-18s, with extra duties for under-16s. The code's expectation is age-appropriate access and parental consent for under-16s, gated by DOB - again, not by email verification. The under-16 parent-guardian-email flow is unaffected and continues to gate consent.
- Spam protection: rate-limiting, password rules and an optional CAPTCHA still apply.
- The "we have a deliverable email" guarantee is partly lost at signup, but is recovered by Google OAuth (Google verifies for us) and by the checkout soft-gate in Step 4.

## 7. What we still verify (the safety floor)

- DOB collected at signup, validated server-side at `/api/auth/validate-age`.
- Parent or guardian email required for under-16 accounts.
- Password minimum 8 characters.
- Rate-limiting at `/api/auth/resend-verification`: 3 per IP per hour, 5 per email per day. Mirror the same limits onto the signup endpoint if not already present.
- Account-enumeration defences on login and password-reset (responses are constant-time and identical regardless of whether the email exists).
- COPPA: under-13s blocked from creating accounts entirely.

## 8. Risk register and rollback

| Risk | Mitigation |
| --- | --- |
| Spam signups inflate user counts | Add hCaptcha to `/auth/register` if abuse is detected. Daily monitor on signup volume. |
| Typo'd email leaves user without recovery | Promote Google OAuth as the primary path. Password-reset flow tolerates unverified-but-deliverable. |
| Loss of deliverable-email guarantee for billing | Step 4 soft-gates Stripe checkout on a verified email. |
| Supabase outage during the toggle change | Toggle is reversible; keep both code paths (which we already do). |

Rollback: re-enable the "Confirm email" toggle in Supabase. The code already handles both paths, so no deploy is required.

## 9. Acceptance criteria

- [ ] Esa, Lucie and M Karts can log in at `https://theenglishhub.app/auth/login`.
- [ ] A new signup with a fresh email lands on `/dashboard?welcome=true` with no "Check your email" screen.
- [ ] `/auth/login` shows a "Sign in with Google" button (after Step 3).
- [ ] `/auth/register` shows a "Sign in with Google" button (after Step 3).
- [ ] Stripe checkout still requires a verified email (after Step 4).
- [ ] Rate limits on `/api/auth/resend-verification` confirmed live (3 per IP per hour, 5 per email per day).
- [ ] DOB age-gate at `/api/auth/validate-age` still blocks under-13s.
- [ ] Under-16 signup still requires a parent or guardian email.
