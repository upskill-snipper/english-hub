# Verifiable Parental Consent Flow — Design (PDPPL Remediation 9)

**Status**: draft v1.0 · authored 2026-05-12 · awaiting engineering review.
**Owner**: Engineering + DPO.
**Trigger**: AI Governance page commit 8f64766 — 16- and 17-year-olds bypass guardian consent today; PDPPL treats all under-18s as needing it. This is the single biggest legal exposure on the platform for the Gulf market.

## 0. Scope shift from today's flow

Today the codebase has three half-fits: (a) `consent_tokens` (school-context, 7-day, random opaque token) — `supabase/migrations/20260419_consent_tokens_table.sql`; (b) a separate `parental_consents` table referenced by `src/lib/consent-check.ts:51`; (c) the legacy "under-16 → parent-notify fire-and-forget" branch in `src/app/auth/register/page.tsx:251`. We unify these into **one consumer flow for all under-18s**, blocking before service access. The school SSO flow keeps its existing table; only the consumer path is rewritten.

## 1. State machine

```
[DOB_GATE]
   │ submit DOB
   ├── age<13 ────────────────────► UNDER13_BLOCKED   (terminal; route to /parent)
   ├── 13<=age<18 ───────────────► GUARDIAN_EMAIL_REQUIRED
   └── age>=18 ──────────────────► ACTIVE (no guardian needed)

[GUARDIAN_EMAIL_REQUIRED]
   │ guardian email + complete signup
   └── account created, email sent ► GUARDIAN_CONFIRMATION_PENDING

[GUARDIAN_CONFIRMATION_PENDING]
   ├── guardian clicks Approve ──► ACTIVE
   ├── guardian clicks Decline ──► GUARDIAN_DENIED  (terminal; data purge in 7 days)
   ├── 30 days no response ─────► GUARDIAN_TIMEOUT (terminal; account suspended, then purged)
   ├── student "I cannot get consent" path ─► GUARDIAN_BLOCKED (terminal, legal flag)
   └── student resends / changes email ─► remains pending (new token)
```

**Persistence.** Two columns drive the state:
- `profiles.consent_status` enum: `not_required | pending | approved | denied | timed_out | self_blocked | under13_blocked`. Default for new under-18 student rows: `'pending'`. For 18+: `'not_required'`.
- `profiles.consent_status_changed_at TIMESTAMPTZ` — drives the 30-day timeout cron.

The full audit chain lives in `parental_consents` (section 5). `consent_status` on `profiles` is a denormalised cache so RLS and feature gates don't have to join.

## 2. UI flow

Refactor `src/app/auth/register/page.tsx` from one mega-form into `<DobStep />`, `<GuardianStep />`, `<AwaitingConsentStep />`. State persisted to `sessionStorage`.

### Screen 1 — DOB gate
- Heading: *Let's check your age first*
- Body: short PDPPL explanation, DOB field, info note about how DOB is used
- Branches: <13 blocked with link to `/parent/signup`; 13-17 to Screen 2; 18+ skips Screen 2

### Screen 2 — Guardian details (under-18 only)
- Guardian's email, relationship (Parent/Guardian/Carer), guardian's full name
- Checkbox confirming the email is real
- Plain-English "what happens next" explanation
- Privacy notice link
- Then existing name/email/password/year-group

### Screen 3 — Awaiting consent
- Status card with sent date + 30-day expiry
- Buttons: Resend (rate-limited to existing 5/hr), Change guardian email, "I cannot get guardian consent"
- Banner persists across the whole authenticated app while `consent_status='pending'`

## 3. Guardian email

From `noreply@theenglishhub.app` (same Resend pipeline). Subject: *Action needed: approve [Student Name]'s English Hub account*. Plain explanation of who we are, what we'd collect, two big buttons (Approve / Decline), expiry note, PDPPL reference. Approve route: distinct page `/consent/confirm` (not the existing `/consent` which is school-context). Approve action is double-confirmed because clicks are often accidental. Decline is irreversible by design.

## 4. Token + signature scheme

HMAC-SHA256 signed token over JSON payload (`v`, `cid`, `geh`=sha256(guardian_email), `nonce`, `iat`, `exp` = iat + 14*86400, `scope`='parental_consent'). Signing key in new env var `PARENTAL_CONSENT_SIGNING_KEY` (>=32 bytes). Verification endpoint `POST /api/auth/parental-consent/verify`:

1. Rate limit by IP (10/hr) — existing `rateLimit()` helper
2. Parse `{token, action: 'approve'|'decline'}` from body
3. Split token on `.`, base64url-decode both halves
4. Recompute HMAC; `constantTimeEqual` vs sig → fail 400 *Invalid link*
5. `JSON.parse(payload)`; check version, scope, expiry → fail 410 *Link has expired*
6. Service-role select on `parental_consents` where `child_user_id=cid AND token_nonce=payload.nonce AND status='pending'` → fail 410 if row missing
7. Verify `sha256(row.guardian_email) === payload.geh` (binding check)
8. Optimistic-lock UPDATE: status=approved/denied, confirmed_at, ip, user_agent
9. UPDATE `profiles.consent_status` to mirror
10. If approved: send "your account is active" email to student; if denied: enqueue 7-day purge job

HMAC over JWT because we control both ends, avoid JWT alg-confusion footguns. Nonce makes the token single-use.

## 5. Database changes

New migration `supabase/migrations/20260513_parental_consents.sql`:

```sql
CREATE TYPE parental_consent_status AS ENUM (
  'pending', 'approved', 'denied', 'expired', 'self_blocked', 'revoked'
);

CREATE TABLE public.parental_consents (
  id                       uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  child_user_id            uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  guardian_email           text NOT NULL,
  guardian_name            text,
  guardian_relationship    text CHECK (guardian_relationship IN
                              ('parent','guardian','carer','other')),
  status                   parental_consent_status NOT NULL DEFAULT 'pending',
  requested_at             timestamptz NOT NULL DEFAULT now(),
  confirmed_at             timestamptz,
  expires_at               timestamptz NOT NULL,           -- requested_at + 14d
  token_nonce              text NOT NULL UNIQUE,           -- matches payload.nonce
  guardian_email_sha256    text NOT NULL,                  -- matches payload.geh
  confirmation_ip          inet,
  confirmation_user_agent  text,
  self_block_reason        text,                           -- when status=self_blocked
  child_self_attestation_ip   inet,                        -- IP at Screen 2
  child_self_attestation_at   timestamptz,
  created_at               timestamptz NOT NULL DEFAULT now(),
  updated_at               timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX parental_consents_child_status_idx
  ON parental_consents (child_user_id, status);
CREATE INDEX parental_consents_pending_expiry_idx
  ON parental_consents (expires_at) WHERE status='pending';

ALTER TABLE parental_consents ENABLE ROW LEVEL SECURITY;
-- Service role only; child can read own row via dedicated RPC for the
-- "awaiting" banner (returns status + masked guardian email).

ALTER TABLE profiles
  ADD COLUMN IF NOT EXISTS consent_status text NOT NULL DEFAULT 'not_required'
    CHECK (consent_status IN ('not_required','pending','approved','denied',
                              'timed_out','self_blocked','under13_blocked')),
  ADD COLUMN IF NOT EXISTS consent_status_changed_at timestamptz;
```

**Critical**: add RLS policies on minor-writable tables (`marking_submissions`, `module_progress`, `practice_sessions`, `quiz_responses`) that **deny INSERT/UPDATE when `consent_status IN ('pending','denied','timed_out','self_blocked')`**. This is the load-bearing check.

## 6. Account lifecycle while pending

- **Can do**: sign in, browse `/revision` public pages, preview quizzes, change DOB or guardian email, withdraw account
- **Cannot do**: submit anything for AI marking, save progress, accept teacher invites, post a review
- Sticky amber banner on every authenticated page: `Waiting for your guardian's approval — sent to p***@example.com` with Resend / Change email / Why? buttons
- Middleware returns 423 Locked JSON for write APIs when `consent_status='pending'`

Extend `src/lib/consent-check.ts:24` to read `profiles.consent_status` as primary source; keep the `parentId`-via-Prisma branch for parent-linked school accounts.

## 7. Edge cases

| Edge case | Behaviour |
|---|---|
| Guardian never replies | Day 14 + Day 21 nudges; Day 30 → `timed_out`; Day 60 → data purge |
| Guardian declines | Status → `denied` immediately; account + child data deleted within 7 days |
| Guardian email bounces | Resend webhook listener at `/api/webhooks/resend`; UI shows red banner; student can change once without restarting the 30-day clock |
| Child enters fake guardian email | Best-effort mitigations: checkbox attestation logged (IP + timestamp), guardian relationship recorded, 24-hour follow-up email with one-tap revoke, guardian must type full name on the consent page (loose match against `guardian_name`). PDPPL accepts "reasonable effort". |
| 17-year-old whose parents won't engage | "I cannot get guardian consent" path → status `self_blocked`, sign-out, free-text reason logged, email to `legal@upskillenergy.com`. Manual review only. |
| Guardian email == child email | Reject at validation, hard error in Screen 2 |
| Guardian forwards the link | Single-use nonce — first click wins |
| Token leaked from inbox | 14-day expiry + single-use nonce + sha256-email-binding limit blast radius |
| Child changes DOB post-signup | Block DOB edits via RLS; support ticket only |

## 8. Migration plan (existing users)

Two cohorts: (a) 16-17s who self-signed under old flow; (b) 13-15s who gave a guardian email to the fire-and-forget endpoint.

One script `scripts/backfill-parental-consents.ts`:

1. Find all `profiles WHERE is_minor=true AND consent_status='not_required'`
2. For each:
   - If `parent_guardian_email` set → create `parental_consents` row with `status='pending'`, send fresh consent email; set `consent_status='pending'`
   - If `parent_guardian_email` NULL (16-17s) → set `consent_status='pending'` banner-only. On next login, intercept with Screen 2: *"We need to add your guardian's email — we have 30 days to get this approved or we'll have to suspend your account."* Read-only access in meantime.
3. One-time announcement email explaining the change

After 30 days from rollout: unapproved → suspended. Plus 30 days: full data deletion.

**Cutover safety**: ship behind feature flag, ramp at 5%, watch error budget for 48 hours.

## 9. File touch list

- `src/app/auth/register/page.tsx` — refactor into 3-step wizard; remove fire-and-forget call at line 251
- `src/app/api/auth/validate-age/route.ts` — extend to require guardian email up to age 18; reject guardian==child
- `src/app/api/auth/parent-notify/route.ts` — replace with signed-token scheme; rename to `parental-consent-request`
- `src/app/api/auth/parental-consent/verify/route.ts` — new endpoint
- `src/app/consent/confirm/page.tsx` — new guardian-facing page (separate from existing `/consent` school flow)
- `src/lib/consent-check.ts` — read `profiles.consent_status` as primary source
- `src/lib/parental-consent/token.ts` — new HMAC sign/verify helpers
- `src/middleware.ts` — gate write APIs for `consent_status IN ('pending','denied',...)`
- `supabase/migrations/20260513_parental_consents.sql` — new (Section 5)
- `scripts/backfill-parental-consents.ts` — new (Section 8)
- Resend templates folder — guardian email body, decline confirmation, timeout nudges

Estimated effort: ~5 working days for one engineer + 1 day legal review.
