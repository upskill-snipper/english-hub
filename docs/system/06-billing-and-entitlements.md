# Billing, subscriptions and entitlements

This chapter covers how money enters The English Hub and how that becomes access. Two things are worth knowing before anything else: the prices in [`src/constants/pricing.ts`](../../src/constants/pricing.ts) are the only prices you should believe, and there are **two** independent entitlement stores that do not talk to each other - `profiles.subscription_status` in Supabase gates the web, and the Prisma `Subscription` row gates mobile. Almost every billing defect in this codebase's history is a consequence of that split, or of the related split between the Supabase auth uuid and the Prisma `User.id` cuid.

---

## The product catalogue and the real prices

[`src/constants/pricing.ts`](../../src/constants/pricing.ts) is the single source of truth. Every markdown file at the repo root that quotes a price has drifted; do not use them. Values are in pounds (major units); [`src/lib/pricing/grandfather.ts:42`](../../src/lib/pricing/grandfather.ts) is the one place that converts to pence.

| Product                  | Early access / actual           | Standard anchor (display only) | Constant                                      |
| ------------------------ | ------------------------------- | ------------------------------ | --------------------------------------------- |
| Student monthly          | £3.99                           | £7.99                          | `STUDENT_MONTHLY`, `STUDENT_MONTHLY_STANDARD` |
| Student annual           | £29.99                          | £69.99                         | `STUDENT_ANNUAL`, `STUDENT_ANNUAL_STANDARD`   |
| Student annual with code | £20.00                          | -                              | `STUDENT_ANNUAL_WITH_CODE`                    |
| Teacher monthly          | £6.99                           | £11.99                         | `TEACHER_MONTHLY`, `TEACHER_MONTHLY_STANDARD` |
| Teacher annual           | £67.99                          | £99.00                         | `TEACHER_ANNUAL`, `TEACHER_ANNUAL_STANDARD`   |
| Teacher annual with code | £58.00                          | -                              | `TEACHER_ANNUAL_WITH_CODE`                    |
| IELTS monthly            | £39.00                          | -                              | `IELTS_MONTHLY`                               |
| IELTS annual             | £249.00                         | -                              | `IELTS_ANNUAL`                                |
| Founding school          | £4,000/yr (first 10)            | £8,000 projected               | `FOUNDER_SCHOOL_MIN`, `SCHOOL_STANDARD`       |
| School pilot             | from £2,500 / £3,000 / £4,000   | -                              | `PILOT_*_FROM`                                |
| School annual deployment | from £6,000 / £12,000 / £25,000 | -                              | `ANNUAL_*_SCHOOL_FROM`                        |

The "standard" column is an anchor shown next to the real price. It is not charged anywhere. What a customer is actually charged is whatever the `STRIPE_PRICE_*` environment variable points at in the Stripe account - the constants file does not drive Stripe.

Two traps in this file:

- **The August 2026 deadline is gone on purpose.** `PRICE_INCREASE_DATE` is now the string `'when the founding period closes'` ([`pricing.ts:117`](../../src/constants/pricing.ts)), because August 2026 arrived with no checkout price change and every banner was advertising an expired deadline. Do not reintroduce a date in copy unless the Stripe prices change on the same day.
- **Free-usage numbers are deliberately absent** ([`pricing.ts:126-146`](../../src/constants/pricing.ts)). The enforced free allowances resolve at call time through `getLimit()` in [`src/lib/usage/limits.ts:237`](../../src/lib/usage/limits.ts), with precedence `AppConfigSetting` (database, no deploy) > env var > code default. Copy must render the number from `getLimit()`, never a literal, or pages and gates drift the first time the founder changes a limit in the database. Current code defaults (overridable, so do not quote them as facts to a user): signed-out IELTS diagnostic 4/month, signed-in 8/month, no-card trial AI ceiling 40 across the trial with a 15/day sub-cap ([`limits.ts:47-105`](../../src/lib/usage/limits.ts)).

Stripe price IDs live in [`src/lib/stripe.ts:9-49`](../../src/lib/stripe.ts). Most go through `requireEnv()`, so a missing variable crashes the module at import. IELTS and the parent tier deliberately do not - they soft-default to `''` / a placeholder so the app boots before those Stripe products exist.

---

## Checkout: two routes, two different promises

|                    | [`/api/stripe/checkout`](../../src/app/api/stripe/checkout/route.ts)                                                            | [`/api/promo/redeem`](../../src/app/api/promo/redeem/route.ts)               |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| Line item          | catalogue `price` id                                                                                                            | ad-hoc `price_data` with the discount baked into `unit_amount`               |
| Trial              | **7 days** (`subscription_data.trial_period_days = PRICING.TRIAL_DAYS`, [line 348](../../src/app/api/stripe/checkout/route.ts)) | **none - charges immediately**                                               |
| Modes              | `subscription` and `payment` (one-off courses)                                                                                  | `subscription` only, annual only                                             |
| Promo field        | `allow_promotion_codes: false`                                                                                                  | not set                                                                      |
| Duplicate guard    | yes, per price ([line 292](../../src/app/api/stripe/checkout/route.ts))                                                         | yes, per `basePriceId` ([line 328](../../src/app/api/promo/redeem/route.ts)) |
| Rate limit         | 10 per IP / 5 min                                                                                                               | 10 per IP / 5 min                                                            |
| Email verification | required (`assertEmailVerifiedFor('stripe_checkout', user)`)                                                                    | required, same policy                                                        |

That trial difference is the single most consequential asymmetry in billing. A standard checkout customer is not charged for seven days and receives a `customer.subscription.trial_will_end` email; a promo redeemer is charged today and never sees that email. The `trial_will_end` copy is written around exactly this ([`webhook/route.ts:1103-1147`](../../src/app/api/stripe/webhook/route.ts)) because an annual subscriber who had already paid read the previous wording as "you are about to bill me again" and wrote in.

`allow_promotion_codes` was switched off deliberately ([checkout line 336-346](../../src/app/api/stripe/checkout/route.ts)). App-level codes such as `2026ENGLISH` and affiliate codes are not Stripe coupons, so Stripe's hosted field rejected them with "This code is invalid", which users read as a broken site. All app-level codes now go through `/api/promo/redeem`.

Other things both routes do that are easy to miss:

- **Stale test-mode customers.** Both verify `profiles.stripe_customer_id` with a `stripe.customers.retrieve()` and clear it on `resource_missing` ([checkout 203-219](../../src/app/api/stripe/checkout/route.ts), [redeem 279-295](../../src/app/api/promo/redeem/route.ts)). Without this, every profile created under `sk_test_` keys fails permanently after the live cutover. It costs one Stripe call per checkout.
- **Affiliate cookie attribution** runs only in the standard route ([lines 258-281](../../src/app/api/stripe/checkout/route.ts)). Before this, link-click attribution was dropped entirely: the middleware set a `teh_aff` cookie and nothing read it, so the webhook - which only books a conversion when `metadata.affiliateId` is present - booked none.
- **Plan resolution falls back** ([`resolvePlanPriceId`, line 54](../../src/app/api/stripe/checkout/route.ts)). `teacher_monthly` falls back to `STRIPE_PRICE_PRO_MONTHLY` when the teacher variable is unset. In an environment missing the teacher variables, a teacher is charged the student price and the subscription records as a student plan. IELTS deliberately has **no** fallback - it returns `undefined` and the route answers 400, because falling back would charge the wrong amount and grant the wrong entitlement.

`/api/promo/redeem` accepts two classes of code ([lines 161-215](../../src/app/api/promo/redeem/route.ts)): the hard-coded `REDEMPTION_RULES` (only `2026ENGLISH`), and any row in `affiliate_accounts` with `status = 'active'`. Affiliate codes redeem the identical prices; only the Stripe line-item description differs so refunds trace back. An affiliate-table outage falls through to "unknown code" rather than blocking the public code. [`/api/promo/validate`](../../src/app/api/promo/validate/route.ts) is the unauthenticated pre-check the `/redeem` page calls; it is web-only by design, because Apple § 3.1.1 forbids presenting promo-coded discounts inside an IAP app.

[`/api/stripe/portal`](../../src/app/api/stripe/portal/route.ts) opens a Stripe billing portal session. [`/api/stripe/cancel`](../../src/app/api/stripe/cancel/route.ts) sets `cancel_at_period_end` on `subscriptions.data[0]` of the customer's active list - it picks the **first** active subscription with no matching on plan, so for a customer holding both Pro and IELTS it cancels an arbitrary one. Treat it as a legacy form-driven path; the portal is the safer route.

---

## The Stripe webhook event map

[`src/app/api/stripe/webhook/route.ts`](../../src/app/api/stripe/webhook/route.ts), 1,260 lines, `runtime = 'nodejs'` because signature verification needs the raw body. Idempotency is a `webhook_events` row keyed on `event.id`, checked at [line 153](../../src/app/api/stripe/webhook/route.ts) and inserted at [line 575](../../src/app/api/stripe/webhook/route.ts). The insert's error is now checked: `supabase-js` returns `{ error }` rather than throwing, so the previous bare try/catch could not see a failing insert, and a persistently failing insert silently disables replay protection.

| Event                                       | Supabase `profiles` write                                                                      | Prisma `Subscription` write                 | Other                                                                 |
| ------------------------------------------- | ---------------------------------------------------------------------------------------------- | ------------------------------------------- | --------------------------------------------------------------------- |
| `checkout.session.completed` (subscription) | `subscription_status` = `pro`/`incomplete`, `subscription_end_date`; skipped when IELTS-only   | upsert via `syncStripeSubscriptionToPrisma` | `ielts_status`; grandfather capture; affiliate conversion             |
| `checkout.session.completed` (payment)      | none                                                                                           | none                                        | upserts an `enrolments` row; throws if `metadata.courseId` missing    |
| `customer.subscription.created`             | same as above                                                                                  | upsert                                      | returns **500** when the user cannot be resolved, so Stripe retries   |
| `customer.subscription.updated`             | `subscription_status` from `statusMap`, `subscription_end_date`; skipped when IELTS-only       | upsert                                      | stale-event guard; `ielts_status`                                     |
| `customer.subscription.deleted`             | `subscription_status` = `cancelled` **unless** IELTS-only or still covered by a live duplicate | upsert (status `CANCELLED`)                 | `ielts_status`; voids `affiliate_referrals` commissions               |
| `invoice.paid`                              | `subscription_status` = `pro`, `subscription_end_date`                                         | none                                        | see the trap below                                                    |
| `invoice.payment_failed`                    | `subscription_status` = `past_due` unless a live duplicate covers the price                    | none                                        | dunning email via Resend                                              |
| `customer.subscription.trial_will_end`      | none                                                                                           | none                                        | trial-ending email via Resend                                         |
| `charge.refunded`                           | none                                                                                           | none                                        | marks `affiliate_referrals` commissions `refunded`                    |
| `charge.succeeded`                          | none                                                                                           | none                                        | explicit no-op, [line 429](../../src/app/api/stripe/webhook/route.ts) |
| anything else                               | none                                                                                           | none                                        | acknowledged, no-op                                                   |

`statusMap` for `customer.subscription.updated` ([line 914](../../src/app/api/stripe/webhook/route.ts)):

| Stripe status                    | `profiles.subscription_status` |
| -------------------------------- | ------------------------------ |
| `active`, `trialing`             | `pro`                          |
| `past_due`                       | `past_due`                     |
| `unpaid`                         | `unpaid`                       |
| `incomplete`                     | `incomplete`                   |
| `canceled`, `incomplete_expired` | `cancelled`                    |
| `paused`                         | `paused`                       |
| unmapped                         | `free`                         |

Traps in this handler set, inline where they bite:

- **`invoice.paid` writes `pro` on the customer, with no IELTS carve-out** ([lines 395-427](../../src/app/api/stripe/webhook/route.ts)). Every other handler checks `isIeltsOnlySubscription()` first. This one does not, so an IELTS-only subscriber's renewal invoice grants them global `pro` and therefore all GCSE content. That is a live hole in the IELTS separation, not a historical note.
- **`invoice.paid` reads `invoice.period_end`** for `subscription_end_date`. That is the invoice's own period, which is not guaranteed to equal the subscription's `current_period_end`. I did not verify how far the two diverge in practice on this account.
- **The stale-event guard** ([lines 932-966](../../src/app/api/stripe/webhook/route.ts)) refuses to re-grant `pro` when the stored status is terminal (`cancelled`/`unpaid`) **and** the stored `subscription_end_date` has passed. Stripe does not guarantee delivery order, so a late `.updated` with `status: active` would otherwise resurrect a cancelled account. The guard's `subscriptionStatus === 'trialing'` disjunct at [line 940](../../src/app/api/stripe/webhook/route.ts) is dead: `statusMap` maps `trialing` to `pro` and never emits `'trialing'`.
- **Every `userId` in this file is a Supabase auth uuid.** The identity note at [lines 28-41](../../src/app/api/stripe/webhook/route.ts) exists because handing that uuid to Prisma is what dropped the `Subscription` row for the overwhelming majority of accounts. Supabase `profiles` writes correctly keep the uuid; every Prisma write goes through `syncStripeSubscriptionToPrisma`.

---

## The two entitlement stores

This is the load-bearing concept of the chapter.

|             | `profiles.subscription_status`                                                                                                                                                                        | Prisma `Subscription` row                                                                                                            |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| Store       | Supabase Postgres, one text column on `profiles`                                                                                                                                                      | Prisma `Subscription`, `userId` `@unique`                                                                                            |
| Keyed by    | Supabase auth uuid (`profiles.id`)                                                                                                                                                                    | Prisma `User.id` (a cuid)                                                                                                            |
| Gates       | **the whole web app**                                                                                                                                                                                 | `/api/me/entitlements`, `/api/me`, the trial banner, trial crons, renewal reminders                                                  |
| Read by     | [`hasActiveSubscription`](../../src/lib/course-access.ts), [`checkCourseAccess`](../../src/lib/course-access.ts), [`hasIeltsAccess`](../../src/lib/course-access.ts), the AI routes, the billing page | [`src/lib/entitlements.ts`](../../src/lib/entitlements.ts), [`src/lib/billing/trial-state.ts`](../../src/lib/billing/trial-state.ts) |
| Test        | **exact string equality with `'pro'`** ([`course-access.ts:98`](../../src/lib/course-access.ts))                                                                                                      | status projection, see below                                                                                                         |
| Cardinality | **one field per person**                                                                                                                                                                              | one row per person                                                                                                                   |
| Written by  | Stripe webhook, signup, school seats, trial-expiry cron                                                                                                                                               | Stripe webhook (via sync), signup, RevenueCat reconciler, trial crons                                                                |

`'pro'` is an exact match. `'active'`, `'trialing'` and `'paused'` all fail the web gate. Anything that writes something other than `'pro'` into that column silently revokes web access.

The mobile contract is [`/api/me/entitlements`](../../src/app/api/me/entitlements/route.ts), which projects the Prisma row through [`pickEntitlement`](../../src/lib/entitlements.ts):

| Prisma `status`                | period still live | wire `status`                    | `pro`    |
| ------------------------------ | ----------------- | -------------------------------- | -------- |
| `ACTIVE`                       | yes / no          | `active` / `expired`             | yes / no |
| `TRIALING`                     | yes / no          | `trialing` / `expired`           | yes / no |
| `PAUSED`                       | either            | `paused`                         | yes      |
| `PAST_DUE`                     | yes / no          | `grace_period` / `billing_retry` | **no**   |
| `CANCELLED` with `cancelledAt` | yes               | `cancelled`                      | yes      |
| `CANCELLED`                    | no                | `expired`                        | no       |

`PAST_DUE` grants read-only access on mobile: the client shows past essays but blocks new marking. `teacher_tools` additionally requires `isTeacherPlan` ([`entitlements.ts:207`](../../src/lib/entitlements.ts)).

**`isTeacherPlan` is never set on the Stripe path.** [`syncStripeSubscriptionToPrisma`](../../src/lib/billing/subscription-sync.ts) writes `userId`, `stripeCustomerId`, `stripeSubscriptionId`, `plan`, `status`, the period dates, `cancelledAt` and `platform`, and nothing else ([lines 269-291](../../src/lib/billing/subscription-sync.ts)). So a teacher who buys Teacher Annual through Stripe gets a row with `isTeacherPlan = false`: no `teacher_tools` on mobile, and the grandfather capture at [webhook line 842](../../src/app/api/stripe/webhook/route.ts) reads `existingSub?.isTeacherPlan ?? false` and locks the **student** price. Only `/api/auth/register` and `/api/auth/teacher-signup` ever set the flag true on a web row.

`pickEntitlement` sorts by `currentPeriodEnd` and returns a `warning` string when more than one row exists. That branch is currently unreachable in practice - `Subscription.userId` is `@unique` in [`prisma/schema.prisma:369`](../../prisma/schema.prisma), so a second subscription overwrites the first rather than adding a row. That uniqueness is itself the reason the September duplicate was invisible from our own database.

### Where the Prisma row goes missing

`Subscription.userId` is a foreign key to `User.id`. The webhook used to pass the Supabase uuid straight into `prisma.subscription.upsert({ where: { userId } })`, the foreign key failed, and the throw was caught and logged as a line saying the row "can be back-filled". It never was. On 2026-09-17 that was 192 of 200 accounts with no `Subscription` row at all, so `/api/me/entitlements` served paying subscribers the free tier, the trial crons skipped them, and grandfathered pricing was never recorded.

[`src/lib/billing/subscription-sync.ts`](../../src/lib/billing/subscription-sync.ts) is the fix. It resolves the uuid through `requirePrismaUserId` in [`src/lib/identity/`](../../src/lib/identity), and when it cannot it is loud: a Sentry error fingerprinted by reason, plus one greppable log line beginning `BILLING_SUBSCRIPTION_UNRECORDED` carrying every fact needed to rebuild the row by hand ([line 60](../../src/lib/billing/subscription-sync.ts)). Do not reword that marker; it is what a log-drain alert matches. It still never throws, because Stripe retries non-2xx for three days and several same-event handlers (affiliate commission booking, IELTS sync) are not idempotent.

Failure reasons are `identity_unresolved`, `identity_conflict` (an email belonging to a Prisma row linked to a different Supabase user - operator review only, merging people is never automatic) and `row_write_failed`.

---

## IELTS as a separate entitlement

IELTS is a standalone subscription at £39/month or £249/year, tracked by `profiles.ielts_status` (`'free' | 'active'`), added by [`supabase/migrations/20260530_ielts_entitlement.sql`](../../supabase/migrations/20260530_ielts_entitlement.sql). It exists because entitlement was one global flag: riding IELTS on `subscription_status` would give a £3.99 student premium IELTS feedback free, and give an IELTS subscriber all GCSE marking.

The rules, implemented by `syncIeltsEntitlement` and `isIeltsOnlySubscription` ([webhook lines 66-97](../../src/app/api/stripe/webhook/route.ts)):

- A subscription whose **every** recurring price is an IELTS price is "IELTS-only" and must never touch `subscription_status`.
- A subscription **containing** an IELTS price sets `ielts_status` to `active` while Stripe says `active`/`trialing`, and `free` otherwise.
- A subscription containing **no** IELTS price leaves `ielts_status` alone, so a GCSE plan can never grant or clear IELTS.

`hasIeltsAccess` ([`course-access.ts:119`](../../src/lib/course-access.ts)) grants on `ielts_status === 'active'` **or** `subscription_status === 'pro'`. The second disjunct is deliberate grandfathering: existing all-access subscribers keep IELTS. It is also why the `invoice.paid` hole above matters in both directions.

`isIeltsPriceId` ([`stripe.ts:47`](../../src/lib/stripe.ts)) matches against `IELTS_PRICE_IDS`, built from the two env vars and filtered for emptiness. **If those env vars are unset, every IELTS check silently returns false** and an IELTS subscription would be treated as a normal Pro subscription. I could not verify which values are set in production.

---

## The September 2026 entitlement-revocation defect

A worked example of why per-subscription events must never be written to a per-person field.

On 8 September 2026 a customer acquired two Teacher Annual subscriptions half an hour apart. Nothing in either checkout route asked whether she already held one.

Be precise about what followed, because the obvious summary is wrong. She was **not** charged twice. One subscription took £67.99 and is the one she has. The other never succeeded: it failed on insufficient funds, retried, failed again, and was still retrying ten days later. No money was owed back. What was owed was cancelling it and voiding its open invoice - a remedy nobody reaches for from the words "charged twice".

The damage was the entitlement. `profiles.subscription_status` is one field per person, and both revocation handlers keyed on the **customer**, not the subscription:

| When          | Event                                                     | What was written                                      | Effect                                |
| ------------- | --------------------------------------------------------- | ----------------------------------------------------- | ------------------------------------- |
| 15 Sept 18:44 | duplicate's invoice fails                                 | `past_due`                                            | access revoked                        |
| 16 Sept 21:15 | the real subscription pays                                | `pro`                                                 | access restored                       |
| 17 Sept 20:44 | duplicate retries and fails                               | `past_due`                                            | access revoked                        |
| 18 Sept 04:18 | duplicate's dunning ends, `customer.subscription.deleted` | `cancelled` + the duplicate's `subscription_end_date` | access revoked, and the repair broken |

That last row is the sharp part. Writing the duplicate's end date over the good subscription's end date put the profile into a terminal status with a past end date, which is precisely the state the stale-event guard refuses to lift. The obvious repair - touching the good subscription in the Stripe dashboard to re-fire a `.updated` - then failed silently with "Refusing to re-grant Pro". A defect in one handler disabled the fix in another.

It was invisible from our side. Stripe listed both subscriptions all along; nothing asked. Our own records could not have held both, because `Subscription.userId` is unique. And in that period the webhook was writing her no Prisma row at all. The first person to notice was the customer. We had also emailed her twice telling her to update her payment method for a subscription she did not knowingly buy.

The three fixes, all live:

1. **Do not sell it twice** - `findDuplicateSubscription` at checkout-session creation in both routes.
2. **Do not revoke on a duplicate's failure** - `invoice.payment_failed` checks whether another live subscription carries the same price, and if so logs `DUPLICATE_INVOICE_FAILED_IGNORED`, leaves the entitlement intact and sends no dunning email ([webhook lines 256-296](../../src/app/api/stripe/webhook/route.ts)).
3. **Do not cancel on a duplicate's deletion** - `customer.subscription.deleted` does the same check, logs `DUPLICATE_SUBSCRIPTION_DELETED_IGNORED`, and leaves both `subscription_status` **and** `subscription_end_date` untouched ([lines 1028-1071](../../src/app/api/stripe/webhook/route.ts)).

The generalisable rule: `profiles.subscription_status` answers "does this person have access", and a Stripe event answers "what happened to this subscription". Those are different questions. Any handler that writes the second answer into the first field must first ask whether some other subscription still justifies the access.

---

## The duplicate-subscription guard, and what it still does not cover

[`src/lib/billing/duplicate-subscription-guard.ts`](../../src/lib/billing/duplicate-subscription-guard.ts). Read the file header before changing anything in it; the reasoning is dense and each paragraph is load-bearing.

- **Per price, not per customer.** A learner may legitimately hold Pro and IELTS at once. Refusing any second subscription would break a real combination to fix a different problem.
- **Matches on two things.** `/api/stripe/checkout` uses a catalogue price id, which compares directly. `/api/promo/redeem` builds an ad-hoc `price_data` whose price id is unique to that redemption and can never match - so it stamps the catalogue price onto the product as `metadata.basePriceId`, and the guard checks both. This is what makes a promo redeemer recognised at standard checkout and vice versa.
- **Stripe is the source of truth**, deliberately not `profiles.subscription_status` and not the Prisma row. Both are written by the webhook, and a guard built on the bookkeeping that was broken would have failed in exactly the case it exists for.
- **`LIVE_SUBSCRIPTION_STATUSES`** is `active`, `trialing`, `past_due`, `unpaid` ([line 75](../../src/lib/billing/duplicate-subscription-guard.ts)). `canceled`, `incomplete_expired` and `paused` are excluded so a lapsed customer can renew; `incomplete` is excluded so a first-attempt card decline does not trap them.
- **It fails open.** If Stripe is unreachable the checkout proceeds, and the failure is logged as `DUPLICATE_SUBSCRIPTION_CHECK_FAILED`. A customer who cannot buy is judged worse than a duplicate that can be unwound. Do not read "recoverable" as "cheap" - the one duplicate found took no money at all and still revoked paid access four times over three days.

**What it does not cover, and this is important:** the check runs at checkout **session creation**. Two sessions opened before either completes both pass, and both become subscriptions. The window is the time between clicking "subscribe" and completing payment, which for a hesitant user is minutes. Closing it properly needs either a Stripe-side constraint or a post-`checkout.session.completed` sweep that cancels the newer of two subscriptions on the same price; neither exists. Duplicates created before 18 September 2026 are also still live in Stripe and this guard does nothing about them.

The detection tool is [`scripts/find-duplicate-stripe-subscriptions.mjs`](../../scripts/find-duplicate-stripe-subscriptions.mjs). It is read-only and enforces that in code: `readOnlyStripe()` hands the rest of the file an object with exactly `subscriptions.list` and `customers.list` on it. Its companion, [`scripts/reconcile-stripe-subscriptions.mjs`](../../scripts/reconcile-stripe-subscriptions.mjs), compares Supabase `profiles` against Prisma rows and does not import the Stripe SDK at all, so it structurally cannot see duplicates. Run both; they answer different questions.

---

## Trials - three distinct things share the name

|                      | Provisioned by                                                                                       | Card       | Prisma row                                                | Ends by                                                                  | Metered |
| -------------------- | ---------------------------------------------------------------------------------------------------- | ---------- | --------------------------------------------------------- | ------------------------------------------------------------------------ | ------- |
| No-card signup trial | [`/api/auth/register:286-330`](../../src/app/api/auth/register/route.ts), `/api/auth/teacher-signup` | no         | `TRIALING`, `stripeSubscriptionId` null, `platform` `WEB` | [`/api/cron/trial-expiry`](../../src/app/api/cron/trial-expiry/route.ts) | **yes** |
| Checkout trial       | `subscription_data.trial_period_days` at checkout                                                    | yes        | `TRIALING` with a Stripe subscription id                  | Stripe, then the webhook                                                 | no      |
| Mobile trial         | RevenueCat `INITIAL_PURCHASE` with `is_trial_period`                                                 | store-held | `TRIALING`, `platform` `IOS`/`ANDROID`                    | RevenueCat `EXPIRATION`                                                  | no      |

Signup writes **both** stores ([register lines 292-325](../../src/app/api/auth/register/route.ts)): a Prisma `TRIALING` row so mobile sees it, and `profiles.subscription_status = 'pro'` so the web gates open. The profile write is guarded to run only when the current status is empty or `'free'`, so a re-POST can never shorten a paid period. Both writes are best-effort and never fail registration.

The consequence is the reason [`src/lib/usage/trial-allowance.ts`](../../src/lib/usage/trial-allowance.ts) exists: to every gate in the codebase a no-card trial account is byte-for-byte a paying account. No card, no identity proof, and nothing stopping a second signup on day 8. The AI ceiling is the only control. Its discriminator must be exact - `TRIALING` **and** `stripeSubscriptionId` null - because a checkout trial has a card, which is its own abuse control, and capping it would break the promise that a paid plan gives the first seven days free.

`/api/cron/trial-expiry` (daily 04:15 UTC per [`vercel.json`](../../vercel.json)) is what actually ends the no-card trial. Without it, signup would grant `'pro'` forever, because the web gates read `subscription_status` and never look at `subscription_end_date`. Its safety filter is `status = TRIALING` **and** `stripeSubscriptionId = null` **and** `currentPeriodEnd < now`, so a paying customer can never be downgraded by it. It flips the profile `'pro'` to `'free'` (guarded to rows still on the trial's `'pro'`) and marks the Prisma row `CANCELLED`.

`/api/cron/trial-ending` (daily 09:00 UTC) is built to warn two days before and follow up within three days after - **but it is off by default and sends nothing until someone turns it on**. The entire body sits behind a feature flag: unless `TRIAL_LIFECYCLE_EMAILS_ENABLED === 'true'`, `executeTrialEndingCron` returns `{ ok: true, skipped: 'disabled - set TRIAL_LIFECYCLE_EMAILS_ENABLED=true to enable' }` and does no work at all ([`trial-ending/route.ts:136`](../../src/app/api/cron/trial-ending/route.ts)). That is deliberate - the founder reviews the copy and confirms the preferences link resolves before enabling it - but it has two consequences a reader planning trial comms must hold on to. The flag check sits **before** `runCron`, so a disabled run writes no observability breadcrumb: the schedule reports 200 and looks healthy whether or not a single email has ever gone out. And because the no-card trial is ended regardless by `/api/cron/trial-expiry`, with the flag off the population is still downgraded on day 7 with no warning and no follow-up, which is the exact defect this route was written to fix. Confirm the variable is set in the Vercel project before assuming any trial email exists.

When it is enabled, read its header ([lines 12-88](../../src/app/api/cron/trial-ending/route.ts)) for one specific trap: `paymentCount` is incremented in exactly one place in the repository, [`src/lib/revenuecat/reconcile.ts`](../../src/lib/revenuecat/reconcile.ts), so it is 0 for every web customer no matter how many invoices Stripe has paid. It is a RevenueCat-only counter and is never proof that nobody has paid. The load-bearing exclusion is `stripeSubscriptionId = null`.

[`src/lib/renewal-reminders.ts`](../../src/lib/renewal-reminders.ts) contains a `sendTrialEndingReminders()` that is **not wired to any route**. It is shaped for Stripe-managed card trials and does not cover the no-card population. Treat it as dead until someone deliberately revives it.

---

## Grandfathered pricing - recorded, never charged

[`src/lib/pricing/grandfather.ts`](../../src/lib/pricing/grandfather.ts) locks the price a subscriber signed up at onto three Prisma columns: `grandfatheredPriceMinor`, `grandfatheredCurrency`, `pricingTier`.

Understand the limit before you rely on it. **Nothing reads `grandfatheredPriceMinor` to decide what to charge.** Grep the repo: every reference outside the capture helpers and the backfill is a write. The customer is charged whatever the `STRIPE_PRICE_*` variables point at. These columns record an intention and support reporting; they do not enforce a price.

`PRICE_INCREASE_DATE` in that module is `2027-08-01` ([line 35](../../src/lib/pricing/grandfather.ts)) and decides only which tier a new row is **recorded** as. The header records that between 2026-08-01 and 2026-08-18 it was set to 2026-08-01 while checkout still charged early-access prices, so any signups in that window were recorded as `standard` while paying `early_access`. Do not move this date until the checkout price variables change on the same day. Repair is [`/api/admin/pricing/backfill`](../../src/app/api/admin/pricing/backfill/route.ts), which drives [`backfillGrandfatheredPrices`](../../src/lib/pricing/backfill-grandfathered.ts) - fills only `NULL` rows, never overwrites, and assumes every pre-migration row is `early_access`.

Capture happens in two places: the webhook's `checkout.session.completed` handler ([lines 820-864](../../src/app/api/stripe/webhook/route.ts)) and the RevenueCat `INITIAL_PURCHASE` / `RENEWAL` branches ([reconcile lines 188-298](../../src/lib/revenuecat/reconcile.ts)). The webhook block previously queried `where: { userId }` with the Supabase uuid, so `existingSub` was always null and nothing was ever written; it now uses the Prisma id returned by the sync and is skipped entirely when no row could be written. RevenueCat preserves an existing locked price on re-purchase after expiry.

**Verify the columns exist before trusting any of this.** [`supabase/migrations/20260421_01_subscription_grandfather_price.sql`](../../supabase/migrations/20260421_01_subscription_grandfather_price.sql) sorts before `BASELINE_CUTOFF = '20260530'` in [`scripts/apply-migrations.mjs:42`](../../scripts/apply-migrations.mjs), which means it was recorded as applied **without being executed**. That exact mechanism already hid a missing `profiles.is_minor` column for four months. Run [`scripts/check-schema-drift.mjs`](../../scripts/check-schema-drift.mjs), which reads `information_schema`, before assuming these columns are present. The IELTS migration (`20260530_ielts_entitlement.sql`) sorts after the cutoff and is genuinely executed.

---

## RevenueCat and mobile purchases

Three files: [`verify.ts`](../../src/lib/revenuecat/verify.ts) (shared-secret Bearer token, SHA-256 digests compared with `timingSafeEqual`, fails closed when the secret is unset), [`events.ts`](../../src/lib/revenuecat/events.ts) (Zod discriminated union over fourteen event types) and [`reconcile.ts`](../../src/lib/revenuecat/reconcile.ts) (the state machine).

[`/api/revenuecat/webhook`](../../src/app/api/revenuecat/webhook/route.ts) verifies, validates, **journals the event into `RevenueCatEvent` before reconciling**, checks idempotency on the journalled id, reconciles, then stamps `processedAt`. Journal-first means a retry after a reconciliation failure is a cheap no-op and the history is replayable. It never logs the payload - the `subscriber` object carries PII; only `scrubForLog` metadata reaches the logs.

| RC event                   | Effect on the Prisma row                                                                                       |
| -------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `INITIAL_PURCHASE`         | upsert `TRIALING` (if `is_trial_period`) or `ACTIVE`; capture grandfather fields, preserving any existing lock |
| `RENEWAL`                  | `ACTIVE`, extend period, `paymentCount` increment                                                              |
| `PRODUCT_CHANGE`           | change `plan` / `isTeacherPlan` / `revenuecatProductId`; skipped if no existing row                            |
| `CANCELLATION`             | stamp `cancelledAt`, status unchanged (auto-renew off, still in period)                                        |
| `UNCANCELLATION`           | clear `cancelledAt`                                                                                            |
| `EXPIRATION`               | `CANCELLED`, set `currentPeriodEnd`                                                                            |
| `BILLING_ISSUE`            | `PAST_DUE`                                                                                                     |
| `SUBSCRIPTION_PAUSED`      | `PAUSED` (Google Play account hold)                                                                            |
| `REFUND`, `CHARGEBACK`     | `CANCELLED` plus `refundedAt`                                                                                  |
| `NON_RENEWING_PURCHASE`    | skipped, not sold                                                                                              |
| `TRANSFER`                 | skipped, manual review                                                                                         |
| `SUBSCRIBER_ALIAS`, `TEST` | journalled only                                                                                                |

`app_user_id` is the Supabase uuid, because mobile calls `Purchases.logIn(supabaseUserId)`. `resolveUserId` ([line 113](../../src/lib/revenuecat/reconcile.ts)) tries `User.supabaseUserId` first and falls back to the Prisma cuid, and shape-checks for a UUID before the first lookup to avoid a Postgres cast error. An unresolvable user returns `skipped: true` and a 200, so RevenueCat stops retrying.

Product SKUs are mapped in `PRODUCT_CATALOGUE` ([lines 60-82](../../src/lib/revenuecat/reconcile.ts)): four iOS bundle ids and four Play ids covering student/teacher by monthly/annual. **An unknown SKU silently defaults to Student Monthly, `isTeacherPlan: false`.** Add new SKUs here at the same time you add them to the stores.

[`/api/revenuecat/reconcile-self`](../../src/app/api/revenuecat/reconcile-self/route.ts) closes the drift window: the mobile client calls it after `restorePurchases()` or when it detects that RevenueCat believes the caller is entitled but the server reads free. It fetches `CustomerInfo` from RevenueCat's REST API, synthesises an event, and runs the identical reconciler. Rate-limited to 5/min per **Supabase auth uuid** - the key is `revenuecat-reconcile-self:${sessionUser.id}` and `sessionUser` comes from `supabase.auth.getUser()` ([`reconcile-self/route.ts:273`](../../src/app/api/revenuecat/reconcile-self/route.ts)) - because the client runs the check on every foreground transition. The route resolves the caller's Prisma cuid separately, a few lines later, for the reconciler itself.

**The gap worth knowing: the RevenueCat path never writes `profiles.subscription_status`.** Grep confirms no Supabase write anywhere in `reconcile.ts` or the RC webhook route. A customer who subscribes on iOS therefore has full mobile entitlement and **no web access at all**. Whether that is intended policy or an unclosed loop I could not determine from the code; nothing in the repository states the intent either way.

---

## School seats - a third grant path

Schools do not buy through Stripe in-app. Two routes grant `profiles.subscription_status = 'pro'` directly when the school row's own `subscription_status` (a column on `schools`, distinct from the one on `profiles`) is `active` or `trialing`: [`/api/school/join:373`](../../src/app/api/school/join/route.ts) and [`/api/school/classes/[classId]/students:450`](../../src/app/api/school/classes/[classId]/students/route.ts).

There is no revocation path. [`/api/cron/school-access`](../../src/app/api/cron/school-access/route.ts) marks the **school** `access_type = 'expired'` and emails the contact, but never touches the seat holders' `profiles.subscription_status`. A pupil granted `'pro'` by a school that has since expired keeps `'pro'` indefinitely, and `/api/cron/trial-expiry` will not catch them because they have no `TRIALING` Prisma row. I found no code that closes this.

---

## What I could not determine

- Which `STRIPE_PRICE_*` variables are actually set in production, and therefore whether IELTS recognition and the teacher-tier prices are live or silently falling back.
- Whether the `grandfathered_*` columns exist in the production database. The migration is baselined, so the migration tracker cannot tell you. Run `check-schema-drift.mjs`.
- Whether mobile purchasers are intended to get web access. Nothing writes it, and nothing documents the intent.
- Whether `TRIAL_LIFECYCLE_EMAILS_ENABLED` is set in the Vercel project, and therefore whether any trial-ending warning or winback has ever been sent. It is not in `.env.local`, but that file does not mirror the Vercel environment, and a disabled run is indistinguishable from a healthy one in the cron logs.
- How far `invoice.period_end` diverges from the subscription period on this account in practice.
