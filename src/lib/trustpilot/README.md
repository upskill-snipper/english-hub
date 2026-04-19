# Trustpilot review solicitation

Scaffolded 19 April 2026. Triggers WIRED but feature-flagged OFF until Trustpilot Business account, SendGrid, and Cloudflare Email Routing are configured.

**Current state:**

- ✅ Templates + dispatcher live
- ✅ Trigger orchestrator live (`trigger-invite.ts`)
- ✅ Supabase migration for dedup table committed
- ✅ `/api/mark/route.ts` wired — fires `student_first_mark` after every successful AI mark
- ✅ `/api/cron/trustpilot-followup-7d` live — runs daily 03:45 UTC
- ✅ `/api/cron/trustpilot-retention-90d` live — runs daily 04:15 UTC
- ⚠️ `student_first_mock` and `teacher_first_bulk_mark` triggers exported but those routes don't exist yet — call `fireStudentFirstMock()` / `fireTeacherFirstBulkMark()` from wherever those events are processed when the routes ship.

**Switch-on procedure:** complete steps 1–5 below, then set `TRUSTPILOT_ENABLED=true` in Vercel.

---

## What this ships

| File                          | Role                                                                                                             |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `email-templates.ts`          | The 6 email bodies (5 live, 1 deferred) with British-English copy, under 200 words each, subjects under 50 chars |
| `send-invite.ts`              | `sendTrustpilotInvite(...)` — logs-only dispatcher until the feature flag is enabled                             |
| `buildTrustpilotInviteLink()` | Helper that constructs a BGL-style link; swap for AFS link once Trustpilot API key is in env                     |
| `trigger-invite.ts`           | Orchestrator: user lookup, under-18 skip, opt-out skip, dedup via Supabase, send, record outcome                 |
| `fire*(...)` convenience fns  | One-liners per trigger used by route handlers + cron jobs                                                        |

All sends go out as `reviews@theenglishhub.app` with `reply-to: info@upskillenergy.com`.

---

## What you still need to do before sends will actually fire

### 1. Cloudflare Email Routing

Set up `reviews@theenglishhub.app` as a forward to `info@upskillenergy.com`. Instructions are in `business-docs/FILING-DAY-WORKSHEET.md`.

### 2. SPF / DKIM authorisation for SendGrid on theenglishhub.app

Without this, emails land in spam. In Cloudflare DNS:

```
TXT @           v=spf1 include:_spf.google.com include:sendgrid.net ~all
CNAME s1._domainkey   s1.domainkey.u123456.wl.sendgrid.net
CNAME s2._domainkey   s2.domainkey.u123456.wl.sendgrid.net
```

The `u123456` number comes from the SendGrid Sender Authentication wizard once you add `theenglishhub.app` as an authenticated domain.

### 3. Trustpilot Business account

Free tier is fine to start. At https://business.trustpilot.com:

1. Claim the `theenglishhub.app` profile.
2. Get the **Business Unit ID** from the admin panel.
3. (Optional, £199/mo Standard plan) Get an **API key** for AFS links with per-invitation tracking. Until then, `buildTrustpilotInviteLink()` generates a BGL link which still works — just without per-invite tracking.

### 4. Environment variables (Vercel → Environment Variables)

```
TRUSTPILOT_ENABLED=true
TRUSTPILOT_BUSINESS_UNIT_ID=<from Trustpilot admin>
TRUSTPILOT_API_KEY=<from Trustpilot API keys page; leave blank for BGL-only>
SENDGRID_API_KEY=<already in use for transactional email — confirm same key works>
SENDGRID_SANDBOX=false
```

Set `TRUSTPILOT_ENABLED=false` and `SENDGRID_SANDBOX=true` in Preview environments so preview deployments never send real emails.

### 5. Database table for dedup (Supabase)

Run the SQL below in the Supabase SQL editor. The `sendTrustpilotInvite` function does not read or write this table — the _calling_ trigger does (so the dedup logic stays close to the business event that fires it).

```sql
create table if not exists public.trustpilot_invite (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  trigger text not null,
  sent_at timestamptz not null default now(),
  message_id text,
  status text not null default 'sent',  -- sent | skipped | failed
  error text,
  unique (user_id, trigger)             -- one invite per trigger per user, ever
);

create index if not exists trustpilot_invite_user_idx on public.trustpilot_invite(user_id);
create index if not exists trustpilot_invite_trigger_idx on public.trustpilot_invite(trigger);

alter table public.trustpilot_invite enable row level security;
create policy "service role manages trustpilot_invite"
  on public.trustpilot_invite
  for all
  using (auth.role() = 'service_role')
  with check (auth.role() = 'service_role');
```

### 6. Triggers — WIRED (no further dev required to activate)

All five active-trigger hook points are live in the codebase. Routes + crons call the orchestrator in `trigger-invite.ts`, which handles dedup, under-18 skip, opt-out skip, send, and write of the dedup row. Activating the flow is a pure configuration step (set `TRUSTPILOT_ENABLED=true`).

| Trigger                          | Firing location                                                                                          | Status                 |
| -------------------------------- | -------------------------------------------------------------------------------------------------------- | ---------------------- |
| `student_first_mark`             | `src/app/api/mark/route.ts` — fire-and-forget after successful AI mark return                            | ✅ Live                |
| `student_first_mark_followup_7d` | `src/app/api/cron/trustpilot-followup-7d/route.ts` — runs daily 03:45 UTC                                | ✅ Live                |
| `student_first_mock`             | No `/api/mock/submit` route exists yet. When it ships, call `fireStudentFirstMock(supabaseUserId, opts)` | ⏸️ Exported, not wired |
| `student_90d_retention`          | `src/app/api/cron/trustpilot-retention-90d/route.ts` — runs daily 04:15 UTC                              | ✅ Live                |
| `teacher_first_bulk_mark`        | No `/api/mark/bulk` route exists yet. When it ships, call `fireTeacherFirstBulkMark(supabaseUserId)`     | ⏸️ Exported, not wired |

Call pattern used in `src/app/api/mark/route.ts`:

```ts
import { fireStudentFirstMark } from '@/lib/trustpilot/trigger-invite'

// …after successful business event, just before NextResponse.json(…):
void fireStudentFirstMark(user.id).catch((err) =>
  console.warn('[api/mark] Trustpilot trigger dispatch failed', err),
)
```

The `void` + `.catch()` pattern is fire-and-forget — it never blocks the route response or surfaces a failure to the client. The orchestrator records a row in `trustpilot_invite` regardless of send outcome (sent / skipped / failed), so audit trails work even while the flag is off (rows will have `status='skipped'`, `skipped_reason='disabled'`).

### 7. Cron smoke test (after migrating the table + setting CRON_SECRET)

```bash
curl -X POST https://theenglishhub.app/api/cron/trustpilot-followup-7d \
  -H "x-cron-secret: $CRON_SECRET"
# Expected: {"ok":true,"candidates":0,"tried":0,"sent":0,"skipped":0,"failed":0}

curl -X POST https://theenglishhub.app/api/cron/trustpilot-retention-90d \
  -H "x-cron-secret: $CRON_SECRET"
# Expected: {"ok":true,"candidates":0,"sent":0,"skipped":0,"failed":0}
```

Both should return HTTP 200 with zero-candidate responses until there are real users matching the time windows.

---

## Compliance notes

Already handled or documented:

- **UK GDPR basis** — legitimate interest (marketing an existing product to an existing customer, with clear opt-out). Add LIA entry in `data-room/03-privacy/legitimate-interest-assessments.md` referencing Trustpilot invitations.
- **Opt-out** — link each email to an account-level preference to disable transactional/review emails. Account settings page must have this toggle before the flag is flipped on.
- **Trustpilot TOS** — do NOT gate invites by sentiment. All eligible users get invited regardless of how happy they seem. Trustpilot's "invitation best practice" is strict on this.
- **Children's Code** — under-18 users: no Trustpilot invites. The trigger must check `users.dob` and skip if < 18.

---

## When flag is flipped on: expected volume (Year 1 Base Case)

| Trigger                        | Sent       | Review conversion | Reviews |
| ------------------------------ | ---------- | ----------------- | ------- |
| student_first_mark             | ~450       | 5%                | 23      |
| student_first_mark_followup_7d | ~200       | 3%                | 6       |
| student_first_mock             | ~350       | 6%                | 21      |
| student_90d_retention          | ~300       | 8%                | 24      |
| teacher_first_bulk_mark        | ~200       | 10%               | 20      |
| **Year 1 total**               | **~1,500** | **6%**            | **~90** |

Adding a gentle retargeting email at Month 6 typically pushes total reviews to **~150**, which is the threshold for a meaningfully-anchored Trustpilot score on homepage + pricing.

---

## Source copy

Full canonical copy in `business-docs/content/trustpilot-review-email-sequence.md`. That file is the source of truth; `email-templates.ts` is its TypeScript implementation. If you edit one, mirror the other.
