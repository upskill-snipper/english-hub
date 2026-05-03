# Stripe go-live checklist — The English Hub

**Audience** Founder (Calum) · **British English throughout** · **Last updated** 2026-05-03

> **Why this exists.** A pricing audit on 2026-05-02 found two production-blocking issues:
>
> 1. Production is running Stripe in **TEST mode** — both `STRIPE_SECRET_KEY` and `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` in Vercel start with `sk_test_…` / `pk_test_…`. **No real money can move through the site until these are replaced with live keys.**
> 2. Production has only the legacy `STRIPE_PRICE_PRO_MONTHLY` / `STRIPE_PRICE_PRO_ANNUAL` env vars set. The site advertises Student £3.99/mo · £29.99/yr and Teacher £6.99/mo · £67.99/yr, but the checkout falls back to the legacy `PRO_*` price IDs whenever the tier-specific ones aren't set — meaning Teacher buyers are charged the Student price (or whatever £ the legacy price was created at).
>
> Both are founder-action items in Stripe Dashboard + Vercel env. This runbook is the minimum sequence to fix them safely.

> **Scope.** This is the LIVE-mode cutover only. For end-to-end signup + payment testing in TEST mode first, follow `SIGNUP-PAYMENT-RUNBOOK.md` §1–§6 before doing this. Don't skip the test pass.

---

## Fast path — one command does Steps 1, 3, and 4

If you'd rather skip the manual Dashboard work, the repo ships a script that creates every missing GBP Price + the webhook endpoint in your LIVE Stripe account and prints the exact `vercel env add` commands at the end. You still have to do Step 2 (replace the keys) yourself because Stripe never re-shows live secret keys via API — you have to copy them out of the Dashboard.

```powershell
# 1. Get your sk_live_… key:
#    https://dashboard.stripe.com/apikeys → "Reveal live key" → copy.
$env:STRIPE_SECRET_KEY = "sk_live_…"

# 2. Dry-run first (read-only — confirms which prices are missing):
npx tsx scripts/stripe-sync-products.ts --dry-run -v

# 3. Apply (creates all 8 prices: 4 early-access + 4 standard-anchor + the webhook):
npx tsx scripts/stripe-sync-products.ts --apply --with-webhook

# 4. The script prints `vercel env add` lines. Copy and paste them.
#    Then add the two key env vars manually:
vercel env add STRIPE_SECRET_KEY production           # paste sk_live_…
vercel env add NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY production  # paste pk_live_…
vercel --prod                                         # redeploy
```

The script is idempotent — re-running it is safe (it skips prices that already exist, and matches webhooks by URL). It also prints a loud `mode: LIVE` banner at the top and a 5-second window to Ctrl-C if you accidentally pasted a test key.

The manual Dashboard path below is unchanged — use whichever you prefer. Step 2 (key replacement), Step 5 (redeploy), Step 6 (smoke test), and Step 7 (post-cutover verification) are mandatory either way.

---

## Step 1 — Create the 4 GBP Prices in Stripe LIVE mode

1. Open <https://dashboard.stripe.com>.
2. Top-right toggle: turn **OFF** "Viewing test data". The banner colour changes from orange to white. You are now in LIVE mode.
3. Go to **Products → + Add product**. Create the four products below. For each one, after saving the product, click **+ Add another price** to add the annual price alongside the monthly one (one product, two prices each — keeps the dashboard tidy).

   | Product name | Description shown to customer | Tax behaviour |
   |---|---|---|
   | The English Hub — Student | GCSE/IGCSE English revision platform. AI essay marking, study plans, full revision-notes library. | **Inclusive** |
   | The English Hub — Teacher | Lesson planning, marking, analytics, resource export. Includes everything in Student. | **Inclusive** |

4. For each product, add the prices below. **All amounts are GBP. Recurring. Tax: inclusive (UK VAT registration handles the split).**

   | Product | Price | Billing period | Lookup key (optional but recommended) |
   |---|---|---|---|
   | Student | £3.99 | Monthly | `student_monthly_v1` |
   | Student | £29.99 | Yearly | `student_annual_v1` |
   | Teacher | £6.99 | Monthly | `teacher_monthly_v1` |
   | Teacher | £67.99 | Yearly | `teacher_annual_v1` |

5. After saving, **copy each Price ID** (they look like `price_1Q…`). You'll paste them into Vercel in Step 3. Stash them in a notes app temporarily — there are four to track.

   > **Don't copy the Product ID** (`prod_…`). You want the Price ID (`price_…`). They're different.

---

## Step 2 — Replace TEST keys with LIVE keys in Vercel

1. Stripe → Developers → API keys → **Reveal live key** for the Secret key (`sk_live_…`). Copy it.
2. Copy the **Publishable key** (`pk_live_…`) too — it's visible by default on the same page.
3. Open Vercel: <https://vercel.com/upskill-snippers-projects/english-hub/settings/environment-variables>.
4. Find each row below, click the **⋯ menu → Edit**, paste the new value, leave the **Production** scope ticked, save.

   | Env var | New value (from Stripe LIVE) |
   |---|---|
   | `STRIPE_SECRET_KEY` | `sk_live_…` |
   | `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | `pk_live_…` |

   > **Do not edit Preview / Development scopes.** Leave those on `sk_test_…` / `pk_test_…` so you can keep testing without spending real money.

---

## Step 3 — Add the 4 new tier-specific Price ID env vars in Vercel

In the same Vercel Environment Variables page, click **Add new** and create each of the four below. Scope = **Production only**. Paste the Price IDs you copied in Step 1.

| Env var | Value |
|---|---|
| `STRIPE_PRICE_STUDENT_MONTHLY` | `price_…` (Student Monthly £3.99) |
| `STRIPE_PRICE_STUDENT_ANNUAL` | `price_…` (Student Annual £29.99) |
| `STRIPE_PRICE_TEACHER_MONTHLY` | `price_…` (Teacher Monthly £6.99) |
| `STRIPE_PRICE_TEACHER_ANNUAL` | `price_…` (Teacher Annual £67.99) |

> **What about the legacy `STRIPE_PRICE_PRO_*` vars?** Leave them set for now — the checkout endpoint uses them only as a fallback. Once you've confirmed the tier-specific vars are working (Step 6 below), you can delete the legacy pair to keep the env clean.

---

## Step 4 — Create the LIVE-mode webhook endpoint in Stripe

The TEST-mode webhook does **not** carry over to LIVE — Stripe keeps them separate. You need to create a new endpoint and paste its signing secret into Vercel.

1. Stripe (still in LIVE mode) → Developers → Webhooks → **+ Add endpoint**.
2. **Endpoint URL**: `https://theenglishhub.app/api/stripe/webhook`
3. **Description** (optional): `Production — main webhook`
4. **Events to send** — click "Select events" and tick exactly these (eight total):
   - `checkout.session.completed`
   - `customer.subscription.created`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`
   - `customer.subscription.trial_will_end`
   - `invoice.paid`
   - `invoice.payment_failed`
   - `charge.refunded`
5. Save.
6. On the endpoint detail page, click **Reveal** next to "Signing secret" → copy the `whsec_…` value.
7. Vercel env vars → edit `STRIPE_WEBHOOK_SECRET` → paste the LIVE `whsec_…` over the test value. Production scope. Save.

---

## Step 5 — Redeploy production

Env var changes only take effect after a new build.

1. Vercel → Deployments → find the latest production deployment.
2. Click the **⋯ menu → Redeploy** → **Use existing Build Cache: OFF** → Redeploy.
3. Wait for the deployment to go green (~3 minutes).

---

## Step 6 — Live smoke test (£0.01, then refunded)

You must verify that real cards work end-to-end before declaring go-live. Run this once with a real card you control.

### 6.1 Create a one-off £0.01 test discount

Easier than editing the live price. In Stripe (LIVE mode):

1. Products → click **The English Hub — Student** → click **+ Add another price**.
2. Type "Smoke test" as the nickname, set price to **£0.01**, recurring **monthly**, tax inclusive. Save.
3. Copy this `price_…` — you'll only use it for this one test, then delete it.

Alternative: create a 100% off promotion code instead. Stripe → Products → Coupons → **+ New** → 100% off, one-time, applies to "specific products: Student Annual". Then **+ Promotion code** → code = `SMOKETEST_<today>` → max redemptions = 1. This way you don't have to edit any price IDs.

### 6.2 Run the upgrade flow on the live site

1. In a private/incognito window, register a fresh user on `https://theenglishhub.app/auth/register` with a real email you control. Verify the confirmation email lands.
2. Sign in. Navigate to `/pricing`.
3. Click **"Start 7-day trial"** on Student Annual.
4. On the Stripe-hosted page, paste your real card. **If you used the smoke-test price**, the line item shows £0.01 — pay it. **If you used a 100% off promo code**, type the code and watch the total drop to £0.00 — submit.
5. You're redirected back to `/dashboard?checkout=success`.

### 6.3 Verify the webhook + database

1. Stripe → Developers → Webhooks → click your live endpoint → **Events** tab.
2. You should see `checkout.session.completed` with status **Succeeded — 200** within ~10 seconds.
3. Supabase → Table Editor → `profiles` → filter to your test user. Confirm:
   - `subscription_status` = `pro`
   - `stripe_customer_id` = `cus_…`
   - `subscription_end_date` is ~12 months in the future

### 6.4 Confirm the receipt arrived

Check the test user's inbox for a Stripe receipt within 60 seconds. Stripe sends these automatically when **Settings → Emails → Customer emails → Successful payments** is ON (verify this is on in LIVE mode — settings are mode-specific).

### 6.5 Refund + cancel

1. Stripe → Payments → click your £0.01 charge → **Refund payment** → reason "Requested by customer" → submit. (Skip if you used the 100% off code — there's nothing to refund.)
2. Have the test user cancel their subscription via `/account/billing` → "Manage subscription" → Cancel plan → **immediately** (so it doesn't auto-renew in 12 months).

### 6.6 Tidy up

1. Stripe → Products → archive the £0.01 "Smoke test" price (Products → click product → click the price → Archive). Don't delete — Stripe keeps it for audit trail.
2. Or, if you used the promo code: leave it expired — single-redemption codes can't be reused.

---

## Step 7 — Post-cutover verification

Run these immediately after Step 6, then again 1 hour later:

- [ ] Stripe → Developers → Webhooks → live endpoint shows ≥1 successful 200 delivery.
- [ ] Stripe → Payments → at least one Succeeded charge from the smoke test.
- [ ] Vercel → Logs (last 1 hour) → no recurring 500s on `/api/stripe/webhook` or `/api/stripe/checkout`.
- [ ] Vercel → Logs → no errors mentioning `Invalid price ID` (would mean the env vars in Step 3 are wrong).
- [ ] Pricing page (`/pricing`) → click each plan → reaches Stripe Checkout → header reads the right amount (£3.99, £29.99, £6.99, or £67.99 — never £9.99 or £79).

---

## Step 8 — Founding Schools (optional, defer to launch)

The site advertises a Founding Schools £4,000/year tier (first 10 schools only). This is **not** a self-serve checkout — it's sales-led, with a "Book a call" CTA. No Stripe Price needs to exist for this until you onboard the first school.

When you onboard your first founding school:

1. Stripe → Products → **+ Add product** → name "The English Hub — Founding School (School Name)" → price £4,000/year, recurring annual, GBP, tax inclusive.
2. Email them a Stripe-hosted Payment Link or invoice from that price. **Do not** wire it into the checkout endpoint — keep it sales-led so each school gets their own product/price record (cleaner for invoicing and auditing).

> Founding Schools pricing is locked at £4,000/year for the life of the contract. The advertised "Standard £8,000" is the projected post-August-2026 rate, not a current Stripe Price.

---

## Common failure modes

### "Invalid price ID" on checkout

You're hitting the live site, but a price ID env var still points at a TEST-mode price (or vice versa). Stripe price IDs are mode-specific.

**Fix**: re-check Step 3 — every `price_…` you pasted into Vercel must have been copied from the dashboard while it was in **LIVE mode** (white banner, not orange).

### Webhook returns 400 ("Invalid signature")

`STRIPE_WEBHOOK_SECRET` doesn't match the LIVE endpoint's signing secret.

**Fix**: re-do Step 4.6–4.7. Most common cause: you copied the test webhook's `whsec_…` instead of the live one.

### Subscription created in Stripe but `profiles.subscription_status` stays `free`

The webhook needs `metadata.userId` on the checkout session to match the user back. The in-app upgrade flow always sets this (see `src/app/api/stripe/checkout/route.ts:204`), but if you ever share a raw Stripe Payment Link, the webhook will fail with `WebhookMetadataError`.

**Fix**: only ever route subscription purchases through `/pricing` or `/account/billing` — never share Payment Links for the subscription tier.

---

## Sign-off checklist

When all of these are ticked, payments are live:

- [ ] Step 1: 4 GBP Prices created in Stripe LIVE mode (Student Monthly £3.99, Student Annual £29.99, Teacher Monthly £6.99, Teacher Annual £67.99)
- [ ] Step 2: `STRIPE_SECRET_KEY` and `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` replaced with `sk_live_…` / `pk_live_…` in Vercel Production
- [ ] Step 3: `STRIPE_PRICE_STUDENT_MONTHLY` / `STUDENT_ANNUAL` / `TEACHER_MONTHLY` / `TEACHER_ANNUAL` set in Vercel Production
- [ ] Step 4: Live webhook endpoint created, `STRIPE_WEBHOOK_SECRET` updated to live `whsec_…`
- [ ] Step 5: Production redeployed
- [ ] Step 6: Real-card £0.01 (or 100% off) smoke test passed and refunded/cancelled
- [ ] Step 7: Vercel logs clean for 1 hour, no 500s on `/api/stripe/*`

---

*Last updated 2026-05-02. If a step diverges from current behaviour, update this doc in the same PR as the code change.*
