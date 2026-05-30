# IELTS launch — founder setup guide

Everything in code for the IELTS subscription + Google/Apple sign-in is **built
and deployed**, gated safely behind env flags / unset price IDs. This guide is
the dashboard work only you can do to switch it on. Three independent tracks —
do them in any order.

When you set an env var below, set it in **Vercel → Project → Settings →
Environment Variables** (Production), then redeploy (or it applies on the next
deploy — the build now also runs DB migrations automatically).

---

## Track 1 — Stripe: the IELTS subscription (£39/mo, £249/yr, 7-day trial)

Until these two env vars are set, choosing the IELTS plan returns a clean
"Invalid price ID" 400 — nothing is charged. No fallback to the GCSE price
(deliberate, so you never charge the wrong amount).

1. **Stripe Dashboard → Products → Add product.**
   - Name: `The English Hub — IELTS`
   - Add **two recurring prices** to this one product:
     - **£39.00 / month** (GBP, recurring monthly)
     - **£249.00 / year** (GBP, recurring yearly)
2. Copy each **Price ID** (looks like `price_1Q...`). The price ID, not the
   product ID.
3. In Vercel set:
   - `STRIPE_PRICE_IELTS_MONTHLY = price_xxx` (the £39 monthly price)
   - `STRIPE_PRICE_IELTS_ANNUAL  = price_xxx` (the £249 annual price)
4. The **7-day free trial** is applied automatically by the existing checkout
   code (same as your other plans) — nothing to configure on the price.
5. The **webhook already handles IELTS**: when someone subscribes to an IELTS
   price, `profiles.ielts_status` is set to `active`; on cancellation it returns
   to `free`. Your existing Stripe webhook endpoint + `STRIPE_WEBHOOK_SECRET`
   cover this — no new webhook needed.
6. **Test:** subscribe to the IELTS plan with a Stripe test card → confirm
   `profiles.ielts_status = 'active'` for that user → confirm IELTS Writing/
   Speaking feedback works for them, and that they do NOT get GCSE marking
   (unless they also hold the general plan).

**Entitlement model (important):** IELTS is a *separate* entitlement
(`profiles.ielts_status`) from the global `subscription_status='pro'`. An IELTS
subscriber gets IELTS only; a general/Student subscriber's existing access is
unchanged, and all current `'pro'` customers are grandfathered into IELTS (they
keep it). So the £39 IELTS plan is genuinely its own product.

---

## Track 2 — Google sign-in (quick: ~20 min)

The button is built and hidden until the flag is on.

1. **Google Cloud Console** → create / pick a project → **APIs & Services →
   Credentials → Create credentials → OAuth client ID** → type **Web
   application**.
   - **Authorised redirect URI:** your Supabase callback —
     `https://<your-project-ref>.supabase.co/auth/v1/callback`
     (find the exact URL in Supabase → Authentication → Providers → Google.)
2. Copy the **Client ID** and **Client secret**.
3. **Supabase Dashboard → Authentication → Providers → Google** → enable →
   paste the Client ID + secret → save.
4. In Vercel set `NEXT_PUBLIC_GOOGLE_OAUTH_ENABLED = true` → redeploy.
5. **Test:** on `/auth/login` the "Continue with Google" button now appears and
   completes a sign-in.

---

## Track 3 — Apple sign-in (needs an Apple Developer account: ~1–2 hrs + $99/yr)

The button is built and hidden until the flag is on. This is the heaviest setup
because Apple requires a paid developer account.

1. **Apple Developer Program** membership ($99/year) at developer.apple.com.
2. **Certificates, Identifiers & Profiles:**
   - Create an **App ID** (or use your existing one).
   - Create a **Services ID** (this is your OAuth client_id) → enable **Sign in
     with Apple** → configure:
     - **Domain:** `theenglishhub.app`
     - **Return URL:** `https://<your-project-ref>.supabase.co/auth/v1/callback`
   - Create a **Sign in with Apple key** (.p8) → note the **Key ID** and your
     **Team ID**.
3. **Supabase Dashboard → Authentication → Providers → Apple** → enable →
   enter the **Services ID** (client id), **Team ID**, **Key ID**, and the
   **.p8 key contents**. Supabase generates the client secret from these.
4. In Vercel set `NEXT_PUBLIC_APPLE_OAUTH_ENABLED = true` → redeploy.
5. **Test:** "Continue with Apple" appears on `/auth/login` and `/auth/register`
   and completes a sign-in.

> Note: Apple sign-in only needs configuring once; the callback route is already
> provider-agnostic (it exchanges any OAuth code), so no further code is needed.

---

## Env var summary (set in Vercel, Production)

| Variable | Value | Track |
|---|---|---|
| `STRIPE_PRICE_IELTS_MONTHLY` | the £39 monthly Stripe price ID | 1 |
| `STRIPE_PRICE_IELTS_ANNUAL` | the £249 annual Stripe price ID | 1 |
| `NEXT_PUBLIC_GOOGLE_OAUTH_ENABLED` | `true` | 2 |
| `NEXT_PUBLIC_APPLE_OAUTH_ENABLED` | `true` | 3 |

Everything else (checkout wiring, webhook entitlement, the buttons, the
callback) is already live. Each switch is independent — turn them on as each
account is ready.

---

## What is NOT yet done (so expectations are clear)

- The **marketing / CTA reconfiguration** to make IELTS prominent across the
  site (homepage, nav, an IELTS card on /pricing, landing-page CTAs, paywall
  banners that point at the IELTS plan) is a separate piece — the plumbing above
  is what makes those CTAs *work*; the CTAs themselves are the next task.
- Until Track 1 is done, any IELTS "Subscribe" CTA will reach a checkout that
  returns 400 (no price configured) — so do Track 1 before promoting the plan.
