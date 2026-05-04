# Sign-up + Payment Flow Runbook — The English Hub

**Audience** Founder (Calum) verifying the end-to-end registration and Stripe purchase flow on `theenglishhub.app` before, during, and after launch.
**Owner** Release Engineer · **Last updated** 2026-05-01 · **British English throughout**

> Follow the sections in order on the **first** pass — each section assumes the previous one passed. Once everything is green, you can run any single section independently as a smoke test (e.g. after a Stripe price change, just rerun §5).

---

## How to use this runbook

1. Open four browser tabs side by side:
   - **Vercel** → https://vercel.com/upskill-snippers-projects/english-hub/settings/environment-variables
   - **Resend** → https://resend.com/domains
   - **Supabase** → https://supabase.com/dashboard/project/_ → Auth → Emails
   - **Stripe** → https://dashboard.stripe.com (toggle **Test mode** on for the first pass)
2. Have a real test inbox open in a fifth tab — use plus-addressing on a domain you own (e.g. `cj+test1@upskillenergy.com`) so you can spin up new fresh signups without burning real addresses.
3. Tick each [ ] checkbox as you go. If anything fails, jump to **§8 Common failure modes** before retrying.

---

## §1 — Pre-flight env var check

Every variable below must be populated in **Vercel → Production**. Many are also required in **Preview** and **Development** for local testing.

Open **Vercel → Settings → Environment Variables** for the `english-hub` project (link above) and confirm each row is present with a non-empty value. The "Scope" column tells you which environments need it.

### 1.1 Supabase (sign-up flow core)

| Env var | Scope | Value shape | Source |
|---|---|---|---|
| [ ] `NEXT_PUBLIC_SUPABASE_URL` | All | `https://<ref>.supabase.co` | Supabase → Settings → API → Project URL |
| [ ] `NEXT_PUBLIC_SUPABASE_ANON_KEY` | All | `eyJ…` (long JWT) | Supabase → Settings → API → anon key |
| [ ] `SUPABASE_SERVICE_ROLE_KEY` | All | `eyJ…` (long JWT, **never** expose to client) | Supabase → Settings → API → service_role |
| [ ] `DATABASE_URL` | All | `postgresql://postgres.<ref>:<pwd>@aws-…pooler.supabase.com:6543/postgres?…` | Supabase → Settings → Database → Connection string (pooled, port **6543**) |

> Note: the names in `.env.example` are `NEXT_PUBLIC_SUPABASE_URL` / `NEXT_PUBLIC_SUPABASE_ANON_KEY` — **not** plain `SUPABASE_URL` / `SUPABASE_ANON_KEY`. The `NEXT_PUBLIC_` prefix is required because the browser needs to read them. Use the exact names above.

### 1.2 Email (Resend)

| Env var | Scope | Value shape | Source |
|---|---|---|---|
| [ ] `RESEND_API_KEY` | All | `re_…` | resend.com → API Keys |
| [ ] `NEXT_PUBLIC_APP_URL` | All | `https://theenglishhub.app` | Known |
| [ ] `NEXT_PUBLIC_SITE_URL` | All | `https://theenglishhub.app` | Known |

### 1.3 Stripe (payment flow core)

| Env var | Scope | Value shape | Source |
|---|---|---|---|
| [ ] `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | All | `pk_test_…` (testing) / `pk_live_…` (production) | Stripe → Developers → API keys |
| [ ] `STRIPE_SECRET_KEY` | All | `sk_test_…` / `sk_live_…` | Stripe → Developers → API keys |
| [ ] `STRIPE_WEBHOOK_SECRET` | Production | `whsec_…` | Stripe → Developers → Webhooks → your endpoint → Signing secret |

> Webhook secret is **per-endpoint**: the test-mode webhook and the live-mode webhook each have their own `whsec_…`. When you flip Stripe to live mode in §7, you must replace this value.

### 1.4 Stripe price IDs

These are loaded server-side in `/api/stripe/checkout`. If a price ID is missing for the plan a user picks, that plan returns 400 ("Invalid price ID"). At minimum, the **active subscription plans** must be present — one-off course price IDs only block the corresponding course button.

| Env var | Required for | Notes |
|---|---|---|
| [ ] `STRIPE_PRICE_PRO_ANNUAL` | Annual subscription checkout | **Critical** — main plan |
| [ ] `STRIPE_PRICE_PRO_MONTHLY` | Monthly subscription checkout | Marked retired in `ENV-VAR-INVENTORY.md` — leave unset unless monthly is reinstated |
| [ ] `STRIPE_PRICE_KS3_READING` | KS3 Reading one-off | Optional |
| [ ] `STRIPE_PRICE_KS3_WRITING` | KS3 Writing one-off | Optional |
| [ ] `STRIPE_PRICE_KS3_GRAMMAR` | KS3 Grammar one-off | Optional |
| [ ] `STRIPE_PRICE_GCSE_LANG_READING` | GCSE English Language Reading | Optional |
| [ ] `STRIPE_PRICE_GCSE_LANG_WRITING` | GCSE English Language Writing | Optional |
| [ ] `STRIPE_PRICE_GCSE_LIT_POETRY` | GCSE Literature Poetry | Optional |
| [ ] `STRIPE_PRICE_GCSE_LIT_PROSE` | GCSE Literature Prose | Optional |
| [ ] `STRIPE_PRICE_GCSE_REVISION` | GCSE Revision | Optional |
| [ ] `STRIPE_PRICE_BUNDLE` | Course bundle | Optional |
| [ ] `STRIPE_PRICE_EDEXCEL_LANG_P1` | Edexcel Language Paper 1 | Optional |
| [ ] `STRIPE_PRICE_EDEXCEL_LANG_P2` | Edexcel Language Paper 2 | Optional |
| [ ] `STRIPE_PRICE_EDEXCEL_LIT_P1` | Edexcel Literature Paper 1 | Optional |
| [ ] `STRIPE_PRICE_EDEXCEL_LIT_P2` | Edexcel Literature Paper 2 | Optional |
| [ ] `STRIPE_PRICE_EDEXCEL_IGCSE_A` | Edexcel IGCSE Spec A | Optional |
| [ ] `STRIPE_PRICE_EDEXCEL_IGCSE_B` | Edexcel IGCSE Spec B | Optional |

### 1.5 How to verify in Vercel

1. Open https://vercel.com/upskill-snippers-projects/english-hub/settings/environment-variables.
2. In the search box at the top, paste each variable name from the tables above and confirm:
   - It exists.
   - The **Production** environment is ticked (and Preview/Development if "All" is in the Scope column).
   - The value is not empty (Vercel hides the value, but you'll see "Encrypted" or a length indicator if it's set).
3. After fixing anything, **redeploy the production deployment** — env var changes only take effect after a new build.

> Sanity check: the homepage and `/auth/register` should both load without a `500`. If they 500, the server-side env vars are bad — the most common culprits are `SUPABASE_SERVICE_ROLE_KEY`, `STRIPE_SECRET_KEY`, and `CSRF_SECRET`.

---

## §2 — Resend domain verification

Without a verified domain, every transactional email (sign-up confirmation, password reset, payment-failed notice, weekly report) is rejected by Resend with `403 unverified_domain`. Sign-up appears to work but the user never receives the confirm-email link.

### 2.1 Check status at resend.com

1. Open https://resend.com/domains in a new tab.
2. Find the row for **`theenglishhub.app`**.
3. Read the status pill on the right:
   - **Verified** (green) — proceed to §2.4.
   - **Pending** / **Not started** / **Failed** (yellow/red) — DNS records are missing. Continue to §2.2.
   - **No row at all** — click "**+ Add domain**", type `theenglishhub.app`, region `eu-west-1`, save. Then continue to §2.2.

### 2.2 Add the four DNS records at Cloudflare

Open https://dash.cloudflare.com → select `theenglishhub.app` → DNS → Records → **Add record** for each row below. Set **Proxy status: DNS-only (grey cloud)** for all four — these are mail records, never proxy them.

| # | Type | Name | Value | Purpose |
|---|---|---|---|---|
| 1 | TXT | `@` (root) | `v=spf1 include:_spf.resend.com ~all` | SPF — authorises Resend to send for the domain |
| 2 | CNAME | `resend._domainkey` | *(copy verbatim from the Resend dashboard — looks like `<long-hash>.dkim.amazonses.com`)* | DKIM key #1 |
| 3 | CNAME | `resend2._domainkey` | *(second value from Resend dashboard)* | DKIM key #2 |
| 4 | TXT | `_dmarc` | `v=DMARC1; p=none; rua=mailto:dmarc@theenglishhub.app` | DMARC policy + report inbox |

> The DKIM CNAME values are unique to your Resend account and must be copied exactly from `resend.com/domains` → click `theenglishhub.app` → "DNS Records" panel. Don't paste from this runbook — copy the live values.

> **Already have an SPF record?** Cloudflare will warn that two TXT records on `@` starting with `v=spf1` is invalid. Edit the existing one and **append** ` include:_spf.resend.com` before the closing `~all` (do not create a second one).

### 2.3 Re-verify

1. Wait ~5 minutes for DNS propagation.
2. Back on resend.com → click into `theenglishhub.app` → click **"Verify DNS records"**.
3. All four rows should turn green within 1–10 minutes. If any stay red after 30 minutes, double-check the Cloudflare proxy is **off (grey cloud)** for that record.

### 2.4 Send a test email via the admin diagnostic endpoint

The app exposes an admin-gated endpoint that fires a synthetic test email through Resend and returns the API response. This is the fastest way to confirm sending works **before** you trigger a real signup.

**Browser path (recommended):**

1. Sign in to the app as an admin (your `cj@upskillenergy.com` account, present in `ADMIN_EMAILS`).
2. Navigate to https://theenglishhub.app/admin/email-diagnostics.
3. The page calls `GET /api/admin/email-status` on load — confirm the banner reads `theenglishhub.app: VERIFIED`.
4. Use the "Send test email" form on the same page → enter your inbox → submit.
5. Check inbox **and spam folder** within 60 seconds. The subject is *"Test from The English Hub"*.

**curl path (advanced):** in a terminal where you've copied your Supabase auth cookie:

```bash
curl -X POST https://theenglishhub.app/api/admin/email-test \
  -H "Cookie: <your-sb-access-token-cookie>" \
  -H "Content-Type: application/json" \
  -d '{"to":"cj+test@upskillenergy.com"}'
```

A 200 response with `{"ok":true,"messageId":"…"}` means Resend accepted the message. A 502 with `reason:"http-error"` almost always means the domain isn't verified — return to §2.1.

---

## §3 — Supabase SMTP check

Supabase Auth sends confirmation emails on sign-up. By default it uses Supabase's own SMTP server (heavily rate-limited, frequently lands in spam). Production sends must go through Resend's SMTP relay.

### 3.1 Confirm Custom SMTP is enabled

1. Open https://supabase.com/dashboard → select the English Hub project.
2. Auth → **Emails** → "**SMTP Settings**" tab.
3. Toggle **"Enable Custom SMTP"** must be **ON**.
4. Confirm each field:
   - [ ] **Sender email**: `noreply@theenglishhub.app`
   - [ ] **Sender name**: `The English Hub`
   - [ ] **Host**: `smtp.resend.com`
   - [ ] **Port**: `587`
   - [ ] **Username**: `resend`
   - [ ] **Password**: your `RESEND_API_KEY` (the same `re_…` string used in Vercel env)
   - [ ] **Minimum interval between emails**: `60` seconds (Resend free tier guard) — set higher only if you hit rate limits

### 3.2 Send a Supabase test email

1. Still on the SMTP Settings page, scroll to the bottom — there is a **"Send test email"** button.
2. Enter a plus-addressed inbox you control.
3. Click send. The email is sent **through Supabase → Resend** (so this exercises the SMTP path, not just the API path you tested in §2.4).
4. Confirm receipt within 60 seconds. Subject reads something like *"Test email from <project>"*.

> If §2.4 succeeded but §3.2 fails, the API key is fine but the **SMTP password** field in Supabase is wrong. Re-paste the `re_…` key — it's easy to introduce a leading/trailing space.

### 3.3 Confirm Auth email templates are populated

Auth → Emails → **Templates** → at minimum, the **"Confirm signup"** template must have a body. Defaults are fine for launch; just confirm there is a body and the `{{ .ConfirmationURL }}` token is present.

---

## §4 — Sign-up flow test

Now exercise the real registration path end-to-end.

### 4.1 Register a new account

1. Choose a fresh email — plus-addressing on a domain you own (e.g. `cj+test-signup-2026-05-01@upskillenergy.com`). **Never** reuse one across runs; Supabase will recognise it as already-registered.
2. Open https://theenglishhub.app/auth/register in a private/incognito window (no stale session).
3. Fill the form:
   - First name, last name (any test values).
   - Date of birth — **must be ≥ 13 years ago**, otherwise the API returns 403. Use e.g. 1995-01-01 to be safely in the adult flow; use 2014-01-01 to test the under-16 minor flow.
   - Country (any).
   - Email + password (12+ characters).
4. Submit.
5. Expected result: redirect to a "**check your email**" interstitial.

### 4.2 Check the inbox

1. Watch your inbox — confirmation email should arrive within 30 seconds. Subject typically *"Confirm your email — The English Hub"* or the Supabase default.
2. **Always check the spam folder too** on the first run. If the email sits in spam, log it and continue (you'll address deliverability via DKIM/SPF if you haven't already).
3. Click the confirm link inside the email.

### 4.3 Land on dashboard

1. The link routes through `/auth/callback` and sets the session cookie.
2. Expected result: redirect to **`/dashboard`** with the user logged in.
3. Open another tab → https://theenglishhub.app/account → confirm your email + name display.

### 4.4 Confirm the Prisma row was created

The `/api/auth/register` endpoint mirrors the Supabase user into a Prisma `User` row (so dormancy cron, weekly reports, DSAR all work). On the registration page, this is fired automatically after `supabase.auth.signUp()` returns.

1. Open Supabase → **Table Editor** → table `User` (Prisma-managed; not the auth `users` table).
2. Filter `email = your-test-email`.
3. Confirm exactly one row exists with `supabaseUserId` matching the auth user. If the row is missing, the front-end never POSTed — this is a known fallback and does **not** block the email-confirmation step but will cause feature degradation later.

### 4.5 If the email never arrives

In order, try:

1. **Resend the verification link** via `POST /api/auth/resend-verification`:
   ```bash
   curl -X POST https://theenglishhub.app/api/auth/resend-verification \
     -H "Content-Type: application/json" \
     -d '{"email":"cj+test-signup-2026-05-01@upskillenergy.com"}'
   ```
   Always returns 200 (anti-enumeration). Wait 60 seconds, recheck inbox.
2. **Manually verify the user** via the Supabase dashboard:
   - Auth → Users → search for the email → click into the row → click "**Confirm email**" (or set `email_confirmed_at` to now).
   - There is no public admin manual-verify endpoint; this dashboard action is the supported manual route. The user can then log in directly.
3. **Diagnose deliverability**: re-run §2.4 (admin email-test). If that email lands but the Supabase one doesn't, the issue is in §3 (SMTP), not §2 (API).

---

## §5 — Stripe Checkout test (test mode FIRST)

Always run §5 in **test mode** before §7. Test mode uses `sk_test_…` keys and the test card `4242 4242 4242 4242`.

### 5.1 Confirm test mode is active

1. Open https://dashboard.stripe.com → top-right toggle reads **"Viewing test data"** (orange banner).
2. Confirm `STRIPE_SECRET_KEY` and `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` in **Vercel Preview** (not Production) point at `sk_test_…` / `pk_test_…`. Production keys must remain live keys.
3. Set up a **test webhook** if you don't already have one:
   - Stripe → Developers → Webhooks → **+ Add endpoint**.
   - URL: `https://theenglishhub.app/api/stripe/webhook` (or your preview URL if testing on a deploy preview).
   - Events to send (minimum):
     - `checkout.session.completed`
     - `customer.subscription.created`
     - `customer.subscription.updated`
     - `customer.subscription.deleted`
     - `customer.subscription.trial_will_end`
     - `invoice.paid`
     - `invoice.payment_failed`
     - `charge.refunded`
   - Copy the **Signing secret** (`whsec_…`) into `STRIPE_WEBHOOK_SECRET` for the **Preview** environment in Vercel.
   - Redeploy.

### 5.2 Run the upgrade flow

1. Sign in as the test user from §4.
2. Open https://theenglishhub.app/account/billing.
3. Pick **Pro Annual** (or whichever plan you want to test). Click "**Upgrade**" / "**Subscribe**".
4. The button POSTs to `/api/stripe/checkout` and redirects to Stripe Checkout.
5. On the Stripe-hosted page, fill:
   - Card: `4242 4242 4242 4242`
   - Expiry: any future date (e.g. `12/30`)
   - CVC: any 3 digits (e.g. `123`)
   - Postcode: any valid (e.g. `SW1A 1AA`)
6. Submit. Expected: redirect back to `/dashboard?checkout=success`.

### 5.3 Verify the webhook fired

1. Stripe → Developers → Webhooks → click your endpoint → **"Events"** tab.
2. You should see `checkout.session.completed` with status **"Succeeded — 200"** within ~10 seconds of completing the checkout.
3. If status is `Failed (400)` → webhook secret mismatch (see §8.2).

### 5.4 Verify the subscription was granted

1. Open Supabase → Table Editor → table `profiles`.
2. Filter `id = <your test user's auth uid>` (find it under Auth → Users → click row → copy ID).
3. Confirm:
   - [ ] `subscription_status` = `pro`
   - [ ] `stripe_customer_id` = `cus_…` (matches the customer Stripe just created)
   - [ ] `subscription_end_date` is a date ~12 months in the future (or +trial period if applicable)

### 5.5 Verify the receipt email

Stripe sends invoice receipts automatically when configured. To confirm:

1. Stripe → **Settings → Emails**.
2. Toggle **"Successful payments"** ON (under "Customer emails").
3. Toggle **"Refunds"** ON.
4. Toggle **"Subscriptions"** → "Trial ending" + "Renewal" ON.
5. Save.
6. Check the test user's inbox for *"Your receipt from The English Hub"* — should arrive within 60 seconds of the successful charge.

> Stripe-sent receipts originate from `noreply@stripe.com` (or your branded sender if you've configured one in Stripe → Settings → Branding). They are independent of your Resend configuration. Even if Resend is broken, Stripe receipts will arrive.

---

## §6 — Customer portal test

The Stripe Billing Portal lets a logged-in user manage their own subscription (update card, cancel, view invoices). It's exposed via `POST /api/stripe/portal`.

### 6.1 Open the portal

1. Still logged in as the §5 test user, navigate to https://theenglishhub.app/account/billing.
2. Click **"Manage subscription"** (or equivalent CTA).
3. The button POSTs to `/api/stripe/portal` and redirects to the Stripe-hosted portal.

> If the button errors with 400 ("No billing account found"), the user has no `stripe_customer_id` — they never completed checkout. Go back to §5.

### 6.2 Cancel the subscription

1. In the portal, click **"Cancel plan"**.
2. Confirm cancellation.
3. Stripe asks "Cancel immediately or at end of billing period?" — pick **"At end of billing period"** for the realistic flow (this is how a real customer would cancel).
4. Return to the app via the back link.

### 6.3 Verify cancel reflects in the dashboard

1. Stripe → Customers → find your test customer → confirm subscription status reads "**Cancels on <date>**".
2. Wait ~10 seconds for the `customer.subscription.updated` webhook to fire (Stripe → Webhooks → Events).
3. Supabase → `profiles` → filter to your test user. `subscription_status` should still read `pro` (because access continues until period end), but Stripe will eventually fire `customer.subscription.deleted` at period end which flips it to `free`.
4. To force the immediate-cancel path, repeat the flow on a new test user but pick **"Cancel immediately"** in step 6.2.3 — then verify `subscription_status` flips to `cancelled`/`free` within 30 seconds.

---

## §7 — Production cutover

Only proceed once §1–§6 all pass cleanly in **test mode**.

### 7.1 Switch Stripe to live mode

1. Stripe dashboard → top-right toggle → **turn off "Viewing test data"**.
2. Stripe → Developers → API keys → copy the **live** `sk_live_…` and `pk_live_…`.
3. Vercel → Production env vars:
   - [ ] Replace `STRIPE_SECRET_KEY` with `sk_live_…`
   - [ ] Replace `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` with `pk_live_…`
4. Stripe → Developers → Webhooks → ensure the **live** mode endpoint exists pointing at `https://theenglishhub.app/api/stripe/webhook`. If it doesn't, create it now (same event list as §5.1).
5. Copy the live webhook **Signing secret** → Vercel Production → replace `STRIPE_WEBHOOK_SECRET`.
6. Vercel → Deployments → **Redeploy** the production deployment so the new env vars take effect.

### 7.2 Confirm live price IDs are populated

Live mode uses **different price IDs** than test mode. In Stripe live mode → Products, each plan should have a `price_…` ID — paste each into the Vercel Production env vars under the `STRIPE_PRICE_*` names from §1.4. Redeploy.

### 7.3 Real-card £0.01 smoke test

1. Sign in (or register) as a fresh user **on the live site** — use a real email you control.
2. Either temporarily edit `STRIPE_PRICE_PRO_ANNUAL` in Vercel to point at a one-off **£0.01** price you've created in Stripe live, **or** create a 100% off promotion code applied to the existing annual price and use that at checkout. The latter is safer — leave `STRIPE_PRICE_PRO_ANNUAL` alone.
3. Run the §5.2–§5.5 flow with your real card: `cj@upskillenergy.com` user, real Visa, postcode of your address.
4. Confirm:
   - [ ] Payment succeeds.
   - [ ] Stripe webhook fires (Webhooks → Events, 200 response).
   - [ ] `profiles.subscription_status` = `pro`.
   - [ ] Receipt email arrives at `cj@upskillenergy.com`.
5. **Refund**: Stripe → Payments → click the £0.01 charge → "**Refund payment**" → reason "Requested by customer" → submit.
6. Confirm `charge.refunded` webhook fires and (if applicable) commission voiding logs in Supabase `affiliate_referrals`.
7. **Cancel** the subscription via the customer portal (§6) so you don't accrue a real renewal in 12 months.

### 7.4 Final post-cutover check

- [ ] Stripe → Webhooks → live endpoint shows ≥1 successful 200 delivery.
- [ ] Resend → Logs (https://resend.com/emails) shows the receipt email is **not** the only recent email — i.e. Supabase confirmation emails are also showing as `delivered`, not `bounced`.
- [ ] Vercel → Logs → no recurring 500s on `/api/stripe/webhook` or `/api/auth/register`.
- [ ] Vercel → Logs → no errors mentioning `RESEND_API_KEY is not set` or `STRIPE_WEBHOOK_SECRET is not configured`.

---

## §8 — Common failure modes + fixes

### 8.1 Email goes to spam (or never arrives)

**Symptom**: signup completes, but the confirmation link is in spam or never arrives.

**Diagnosis order**:

1. Check `/api/admin/email-status` (§2.4) — does it report `theenglishhub.app: VERIFIED`?
2. If status is anything other than verified, return to §2.2 and add the missing DNS records.
3. If status is verified but emails still spam: check **DKIM** specifically. Open the received email's "Show original" view in Gmail → look for `DKIM-Signature: …` and `dkim=pass`. If `dkim=none`, the CNAME for `resend._domainkey` or `resend2._domainkey` is missing.
4. Check **SPF**: in Gmail's "Show original" → look for `spf=pass`. If `spf=fail`, the TXT record at `@` is missing or mis-formed.
5. Mailing the same address from a fresh sender domain (e.g. via Gmail) — if those land in inbox while Resend lands in spam, the gap is purely DKIM/SPF/DMARC alignment.

**Fix**: complete §2.2's four DNS records. Wait 30 minutes, send a fresh test, look for `dkim=pass` and `spf=pass`.

### 8.2 Webhook returns 400

**Symptom**: Stripe → Webhooks → Events shows `checkout.session.completed` with status `Failed (400)` and message *"Invalid webhook signature"* or *"Webhook signature verification failed"*.

**Cause**: `STRIPE_WEBHOOK_SECRET` doesn't match the secret of the endpoint that's actually firing. Almost always one of:

- You're in **test mode** but Vercel has the **live** secret (or vice versa).
- You regenerated the webhook secret in Stripe but didn't update Vercel.
- You set the secret in **Preview** but the deployment serving traffic is **Production**.

**Fix**:

1. Stripe → Developers → Webhooks → click the endpoint → "**Reveal**" the signing secret → copy.
2. Vercel → env vars → confirm `STRIPE_WEBHOOK_SECRET` matches in the right environment.
3. Redeploy. Stripe → Webhooks → click the failed event → **"Resend"** to verify.

### 8.3 Subscription not granted after successful payment

**Symptom**: Stripe shows a successful charge and the user is back on `/dashboard?checkout=success`, but `profiles.subscription_status` stays `free`.

**Cause**: the webhook's `handleCheckoutCompleted` requires `session.metadata.userId` (set in `/api/stripe/checkout` line 142). If checkout was created without that metadata — e.g. via a Payment Link or a manual Stripe dashboard checkout — the webhook throws `WebhookMetadataError` and the profile is never updated.

**Fix**:

1. Stripe → Webhooks → Events → find the `checkout.session.completed` event → response body should be `{"error":"Missing required metadata in webhook event"}` with status 400.
2. Confirm the user reached checkout via the in-app **"Upgrade"** button (which always sets `userId` metadata), not via a raw Payment Link.
3. As a one-off recovery: manually run an SQL update in Supabase:
   ```sql
   update profiles
     set subscription_status = 'pro',
         stripe_customer_id = 'cus_…',
         subscription_end_date = '2027-05-01'
   where id = '<auth-user-uuid>';
   ```
4. Going forward: never share Payment Links for the subscription tier — always route through `/account/billing` so the userId metadata is attached.

### 8.4 Checkout returns 500

**Symptom**: clicking "Upgrade" redirects to a server-error page or shows a JSON error in the browser console.

**Diagnosis**:

| Error | Likely cause | Fix |
|---|---|---|
| `Invalid price ID` (400) | `STRIPE_PRICE_PRO_ANNUAL` (or whichever plan) is unset or set to a price that doesn't exist in this Stripe mode | Confirm §1.4 — and that the Vercel env var matches the **mode** (test/live) you're hitting |
| `Failed to fetch user profile` (500) | Service role client failed (Supabase) | Check `SUPABASE_SERVICE_ROLE_KEY` in Vercel |
| `Failed to link Stripe customer` (500) | Profile update against `stripe_customer_id` failed | Likely `profiles` table missing `stripe_customer_id` column — re-run latest migration |
| `Payment processing error` (4xx/5xx) | Stripe rejected the create-session call | Check Vercel logs for the underlying Stripe error message; usually points to an inactive price ID or wrong API key |
| Generic 500 | Unhandled exception | Check Vercel → Logs for the stack trace; Sentry will also capture this |

### 8.5 Customer-portal button errors with 400

**Symptom**: "Manage subscription" returns *"No billing account found. Please subscribe first."*

**Cause**: the user has no `stripe_customer_id` in `profiles` — they never finished checkout. The portal cannot be opened until at least one Stripe customer record exists.

**Fix**: have the user complete a Stripe Checkout once (even a £0.01 test purchase). After that, `stripe_customer_id` is set and the portal opens.

### 8.6 Sign-up succeeds but "check your email" loops

**Symptom**: user clicks the confirmation link but lands back on `/auth/login` instead of `/dashboard`.

**Cause**: the `redirectTo` in `generateLink` doesn't match an allowed URL in Supabase **Auth → URL Configuration → Redirect URLs**.

**Fix**: Supabase dashboard → Auth → URL Configuration → ensure `https://theenglishhub.app/auth/callback` is in the allowed redirect URLs list (and `http://localhost:3000/auth/callback` if you ever test locally).

---

## §9 — Quick reference URLs

- **Vercel env vars**: https://vercel.com/upskill-snippers-projects/english-hub/settings/environment-variables
- **Vercel deployments**: https://vercel.com/upskill-snippers-projects/english-hub/deployments
- **Vercel logs**: https://vercel.com/upskill-snippers-projects/english-hub/logs
- **Resend domains**: https://resend.com/domains
- **Resend logs**: https://resend.com/emails
- **Supabase SMTP**: https://supabase.com/dashboard/project/_/auth/templates → SMTP Settings tab
- **Supabase users**: https://supabase.com/dashboard/project/_/auth/users
- **Stripe webhooks**: https://dashboard.stripe.com/webhooks
- **Stripe products / prices**: https://dashboard.stripe.com/products
- **App admin diagnostics**: https://theenglishhub.app/admin/email-diagnostics

---

## §10 — Sign-off checklist

When all of these are ticked, the sign-up + payment flow is launch-ready.

- [ ] §1 All required env vars present in Vercel Production
- [ ] §2 Resend reports `theenglishhub.app: VERIFIED`
- [ ] §2.4 Admin email-test endpoint returns `{ ok: true }`
- [ ] §3 Supabase Custom SMTP enabled, test email delivered
- [ ] §4 Fresh signup → email arrives → confirm link → land on `/dashboard`
- [ ] §5 Test-mode checkout → webhook 200 → `profiles.subscription_status='pro'`
- [ ] §5.5 Stripe receipt email delivered
- [ ] §6 Customer portal → cancel → reflects in Stripe + Supabase
- [ ] §7 Live keys deployed, real-card £0.01 smoke test passed and refunded
- [ ] §7.4 No errors in Vercel logs after 1 hour live

---

*Last updated 2026-05-01 — owner: Release Engineer. If a step diverges from current behaviour, update this doc in the same PR as the code change.*
