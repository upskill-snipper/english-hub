# Parent Tier — API Integration Checklist

Backend routes for the paid **Parent** tier. Parents pay £4.99/month for read-only access to up to 3 linked children's learning progress plus weekly email reports.

This README is the integration checklist for shipping the Parent tier end-to-end. It is intentionally a pre-flight doc — nothing in `src/app/api/parent/*` should be enabled in production until every item below is ticked.

## Routes

| Method | Path                                    | Purpose                                              |
| ------ | --------------------------------------- | ---------------------------------------------------- |
| POST   | `/api/parent/link-child`                | Redeem a 6-char link code to connect parent ↔ child  |
| GET    | `/api/parent/progress/[childId]`        | Read-only snapshot of a linked child's progress      |
| DELETE | `/api/parent/unlink`                    | Soft-unlink a child (audit row is retained)          |

Helpers live in `src/lib/parent/`:

- `link-codes.ts` — 6-char alphabet, generator, validator, TTL helpers
- `access-control.ts` — `isParentRole`, `assertParentCanAccessChild`, error → HTTP mapping

## Pre-launch checklist

### 1. Stripe

- [ ] Create `price_parent_monthly` in Stripe Dashboard (£4.99 / month GBP).
- [ ] Set env var `STRIPE_PRICE_PARENT` in Vercel (Preview + Production).
- [ ] Update `src/lib/stripe.ts` `PRICE_IDS.PARENT_MONTHLY` to read from env.
- [ ] Extend the Stripe webhook handler (`src/app/api/stripe/webhook/route.ts` or equivalent) to upsert `parent_accounts` on:
  - `customer.subscription.created`
  - `customer.subscription.updated`
  - `customer.subscription.deleted`
  - `invoice.payment_failed`
- [ ] On `subscription_status` transitioning off `active`/`trialing`, the webhook MUST mark all of that parent's `parent_child_links` rows as `unlinked` so read endpoints return 403.
- [ ] Add the parent plan to the public pricing page (owned by another agent — coordinate before merging).
- [ ] Add a Customer Portal link to `/parent/settings` for billing self-service.

### 2. Supabase

- [ ] Review `supabase/migrations-pending/001_parent_accounts.sql` with DPO before applying.
- [ ] Move migration from `migrations-pending/` → `migrations/` once approved.
- [ ] Apply on **staging first** and run:
  - RLS dry-run: parent A cannot read parent B's rows
  - RLS dry-run: child cannot read any parent_accounts rows
  - RLS dry-run: unlinked row is not returned by active-link query
- [ ] Backfill: any existing `profiles.role = 'parent'` rows get a matching `parent_accounts` row with `subscription_status = 'inactive'`.
- [ ] Add a nightly cron (Vercel Cron or Supabase scheduled function) to delete expired unconsumed `parent_link_codes` rows older than 24h.
- [ ] Service role key is in Vercel env only — never expose to client.

### 3. DPA / Safeguarding / Legal

- [ ] Parent Data Processing Agreement (DPA) published at `/legal/parent-dpa`.
- [ ] Privacy notice updated to disclose parent-visible data categories:
  - Course enrolments
  - Module completion + time spent
  - Quiz scores (aggregate only)
  - Certificates earned
  - **NOT visible**: free-text essay answers, AI chat transcripts, safeguarding disclosures
- [ ] `parent_accounts.dpa_accepted_at` must be non-null before any read endpoint returns data (add guard in `assertParentCanAccessChild` once column is live).
- [ ] Child-side consent flow in `/dashboard/settings/parent-access`:
  - Child must click "Allow parent access" *before* the link becomes `active`.
  - Child can revoke any time — surfaces in audit log.
- [ ] Safeguarding lead has reviewed and signed off the data-sharing scope.
- [ ] Under-13 accounts: verify COPPA / UK Children's Code position with legal. Current assumption: parent linking is only permitted for students aged 13+.
- [ ] Record of Processing Activity (RoPA) entry created for the Parent tier.

### 4. Rate limits & abuse

- [ ] `POST /api/parent/link-child` — 5 attempts / hour / parent. Tune with real traffic.
- [ ] `GET /api/parent/progress/[childId]` — 30 / min / parent.
- [ ] `DELETE /api/parent/unlink` — 10 / hour / parent.
- [ ] Upstash Redis creds (`UPSTASH_REDIS_REST_URL`, `UPSTASH_REDIS_REST_TOKEN`) configured in production — otherwise rate limiter silently falls back to in-memory and will not be effective across serverless instances.
- [ ] Alert on >50 failed link-code attempts in a 10-min window (possible brute force).

### 5. Email

- [ ] Weekly report template in `src/lib/email-templates.ts` (new template key: `parent_weekly_report`).
- [ ] Scheduled job (Mondays 08:00 UTC) iterates active parents and sends a digest for each linked child. Honours `parent_accounts.weekly_reports_enabled`.
- [ ] Unsubscribe link hits `/api/parent/unsubscribe?token=...` and toggles the flag.

### 6. QA

- [ ] Happy path: student generates code → parent enters → dashboard shows child.
- [ ] Expired code → clear error message, code is discarded.
- [ ] Already-consumed code → 410 Gone with helpful message.
- [ ] Self-linking → 400.
- [ ] Link cap (3 children) → 409 with upgrade prompt.
- [ ] Unlinked child → subsequent `/progress/[childId]` returns 403.
- [ ] Stripe subscription canceled → all links auto-unlinked, subsequent reads return 403.
- [ ] Accessibility: link-code input is keyboard-navigable, paste-friendly, screen-reader labelled.

## Security notes

- All routes use `createServerSupabaseClient()` for auth and `createServiceRoleClient()` for data access. RLS is the second line of defence.
- `parent_child_links` rows are **never hard-deleted** — unlink flips `status` to `unlinked` and sets `unlinked_at`. Hard-delete only via DSAR / retention job.
- Link codes use the alphabet `A-HJ-NP-Z2-9` (30 chars), 6 positions ≈ 29.4 bits. They are strictly single-use and expire after 15 minutes. Do not reuse this alphabet for long-lived tokens.
- The progress endpoint returns aggregated numbers and course-level metadata only — it intentionally excludes raw essay text, AI conversations, and safeguarding notes.
