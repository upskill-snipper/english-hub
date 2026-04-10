# Affiliate Programme Backend — The English Hub

This directory houses the **new percentage-tier affiliate programme** for
The English Hub. It lives alongside — but is **separate from** — the legacy
Rewardful-based flat-rate system under `src/app/api/affiliates/` (note the
plural `affiliates` vs. this singular `affiliate`).

## Why two systems?

| Surface              | Path                          | Tiers                  | Commission        | Source of truth          |
| -------------------- | ----------------------------- | ---------------------- | ----------------- | ------------------------ |
| Legacy (Rewardful)   | `/api/affiliates/*`           | `1 / 2 / 3`            | Flat GBP per plan | `affiliates`, `affiliate_referrals`, `affiliate_payouts` |
| **New (this dir)**   | `/api/affiliate/*`            | `bronze / silver / gold` | % of order value  | `affiliate_accounts`, `affiliate_links`, `affiliate_clicks`, `affiliate_conversions`, `affiliate_payouts` (v2) |

The new system is **not wired to Stripe yet**. Until the migration below is
applied and the Stripe webhook is updated, this backend is inert: all routes
will return `500`/`404` because the target tables do not exist.

## Files

```
src/app/api/affiliate/
├── README.md                       # this file
├── signup/route.ts                 # POST new application
├── generate-link/route.ts          # POST generate trackable link
├── track-click/route.ts            # GET|POST click beacon + cookie write
├── track-conversion/route.ts       # POST conversion event (with attribution)
└── payouts/route.ts                # GET payout history + tier summary

src/lib/affiliate/
├── tiers.ts                        # NEW — Bronze/Silver/Gold tier math
├── tracking-cookie.ts              # NEW — teh_aff cookie helpers
├── attribution-v2.ts               # NEW — first-touch / last-touch resolver
├── attribution.ts                  # LEGACY — Rewardful, still used by Stripe webhook
└── utils.ts                        # LEGACY — Rewardful plan type helpers

src/middleware-affiliate.ts         # NEW — helper, called from src/middleware.ts
src/middleware.ts                   # EXTENDED — now invokes applyAffiliateTracking()

supabase/migrations-pending/
└── 002_affiliates.sql               # NEW (pending) — schema + RLS for the new tables
```

### Important file-naming note

The brief asked for `src/lib/affiliate/attribution.ts`, but a file with that
name already exists and is imported by the Stripe webhook
(`src/app/api/stripe/webhook/route.ts`) for the legacy Rewardful flow.
To avoid breaking that path, the new logic lives at
`src/lib/affiliate/attribution-v2.ts`. When the legacy system is retired, we
can delete the old file and rename v2 back.

## Tier ladder

Defined in `src/lib/affiliate/tiers.ts`.

| Tier   | Confirmed referrals | Commission |
| ------ | ------------------- | ---------- |
| Bronze | 0–4                 | 10%        |
| Silver | 5–24                | 15%        |
| Gold   | 25+                 | 25%        |

A referral is "confirmed" when the `affiliate_conversions.status` moves from
`pending` → `confirmed` (or `paid`). The `recount_affiliate_referrals(uuid)`
SQL helper keeps `affiliate_accounts.confirmed_referral_count` in sync and
bumps the stored `tier` accordingly — call it from an admin cron or a
post-insert trigger.

## Attribution

Default model is **30-day last-touch**. Both the model and window are
overridable per-call in `resolveAttribution()`. The `teh_aff` cookie also has
a 30-day `Max-Age` so stale cookies naturally fall out of scope.

Cookie schema (base64url-encoded JSON):

```json
{
  "ref": "alex-abc123",
  "linkId": "9f2c7…",
  "firstTouchAt": "2026-04-01T12:00:00.000Z",
  "lastTouchAt":  "2026-04-08T09:31:11.123Z",
  "clickCount": 3
}
```

Cookie name: `teh_aff` — `httpOnly`, `sameSite=Lax`, `secure` in production,
`path=/`.

## Integration checklist

### 1. Apply the database migration

```bash
# Review supabase/migrations-pending/002_affiliates.sql first
cp supabase/migrations-pending/002_affiliates.sql supabase/migrations/<timestamp>_affiliates_v2.sql
supabase db push
```

Before applying, decide whether the legacy Rewardful tables (`affiliates`,
`affiliate_referrals`, legacy `affiliate_payouts`) should be dropped, renamed,
or kept alongside. The new tables are all named `affiliate_*` (with different
columns), so there is **one name collision**: both migrations create
`affiliate_payouts`. Rename either the old or the new table to avoid a
conflict before pushing.

### 2. Wire the Stripe webhook

Add a call to `/api/affiliate/track-conversion` from
`src/app/api/stripe/webhook/route.ts` on `checkout.session.completed`. The
existing call to `attributeAffiliateReferral()` (Rewardful) should remain
until the legacy system is decommissioned.

```ts
// Pseudo:
await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/affiliate/track-conversion`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json', cookie: req.headers.get('cookie') ?? '' },
  body: JSON.stringify({
    external_id: session.id,
    order_value_pence: session.amount_total ?? 0,
    currency: session.currency,
    product_type: 'subscription',
    referred_user_id: profile?.id ?? undefined,
  }),
})
```

Note: the `cookie` header is needed so the attribution resolver can read
`teh_aff`. If the webhook is a server-to-server call without a cookie, call
`resolveAttribution` directly against a stored cookie snapshot (e.g. written
into Stripe checkout `metadata` at session-creation time).

### 3. Environment variables

| Variable               | Purpose                                         |
| ---------------------- | ----------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | Base URL used to build share/short URLs         |
| `AFFILIATE_IP_SALT`    | Salt for the click-log IP hash (random 32-char) |
| `AFFILIATE_ADMIN_EMAIL`| Where to send new-application notifications    |

### 4. Short-URL redirect

`generate-link` returns `short_url: ${SITE}/r/${token}`. A `/r/[token]` route
handler (not included in this patch) needs to:

1. Resolve the token to `affiliate_links.target_path` + `affiliate_accounts.code`.
2. Bump `affiliate_links.click_count` + `last_clicked_at`.
3. Call `/api/affiliate/track-click` internally OR write the cookie directly.
4. `307` redirect to `${target_path}?ref=${code}&aff_link=${token}`.

### 5. Admin surfaces

Not included here — another agent is building the `/affiliate/*` UI pages.
This backend exposes everything the UI needs:

- `GET /api/affiliate/payouts` — dashboard summary + payout history
- `POST /api/affiliate/generate-link` — new-link modal
- `POST /api/affiliate/signup` — public apply form

### 6. Rollout order

1. ✅ Land this PR (code only — no DB changes yet).
2. Resolve the `affiliate_payouts` table-name conflict with the legacy migration.
3. Apply `002_affiliates.sql`.
4. Wire the Stripe webhook.
5. Build `/r/[token]` redirect handler.
6. Smoke-test the tracking cookie via `?ref=test` in dev.
7. Announce programme launch.

## Things this PR deliberately does NOT do

- Does not touch `src/app/page.tsx`, the header, or the footer.
- Does not modify or remove the legacy Rewardful attribution flow.
- Does not run `npm install`, `next build`, or any migration.
- Does not implement the `/r/[token]` short-URL redirect.
- Does not wire `track-conversion` into the Stripe webhook.
- Does not add any affiliate UI pages (another agent owns those).
