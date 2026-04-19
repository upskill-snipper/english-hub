# Trustpilot review solicitation

Scaffolded 19 April 2026. **Feature-flagged OFF until Trustpilot Business account, SendGrid, and Cloudflare Email Routing are configured.**

---

## What this ships

| File                          | Role                                                                                                             |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `email-templates.ts`          | The 6 email bodies (5 live, 1 deferred) with British-English copy, under 200 words each, subjects under 50 chars |
| `send-invite.ts`              | `sendTrustpilotInvite(...)` — idempotent-ish dispatcher that logs (not sends) until the feature flag is enabled  |
| `buildTrustpilotInviteLink()` | Helper that constructs a BGL-style link; swap for AFS link once Trustpilot API key is in env                     |

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

### 6. Wire triggers (the final 1% — do after the above)

The dispatch logic lives in the routes that handle each business event. Hook points:

| Trigger                          | Firing location                                                                                                                                                              |
| -------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `student_first_mark`             | `src/app/api/mark/route.ts` — after first successful `prisma.essayMark.create` for a user                                                                                    |
| `student_first_mark_followup_7d` | `src/app/api/cron/` — daily cron: query users whose first mark was 7 days ago AND `essays_submitted_count >= 2` AND no review-left event AND no prior invite of this trigger |
| `student_first_mock`             | `src/app/api/mock/submit/route.ts` — after first mock submission with duration ≥ 45min                                                                                       |
| `student_90d_retention`          | `src/app/api/cron/` — daily cron: users whose first successful payment was exactly 90 days ago                                                                               |
| `teacher_first_bulk_mark`        | `src/app/api/mark/bulk/route.ts` — after first bulk-mark session with `count >= 5`                                                                                           |

In each hook point:

1. Check `trustpilot_invite` table for existing `(user_id, trigger)` row — if present, skip.
2. Build `trustpilot_invite_link` via `buildTrustpilotInviteLink({ email, name, orderId: subscriptionId })`.
3. Call `sendTrustpilotInvite({ trigger, toEmail, vars, userId })`.
4. Insert the result row into `trustpilot_invite` (status = sent | skipped | failed).

Each insert is idempotent thanks to the `UNIQUE (user_id, trigger)` constraint.

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
