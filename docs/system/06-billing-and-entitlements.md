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

That trial difference is the single most consequential asymmetry in billing. A standard checkout customer is not charged for seven days and receives a `customer.subscription.trial_will_end` email; a promo redeemer is charged today and never sees that email. The `trial_will_end` copy is written around exactly this ([`webhook/route.ts:1678-1722`](../../src/app/api/stripe/webhook/route.ts)) because an annual subscriber who had already paid read the previous wording as "you are about to bill me again" and wrote in.

`allow_promotion_codes` was switched off deliberately ([checkout line 336-346](../../src/app/api/stripe/checkout/route.ts)). App-level codes such as `2026ENGLISH` and affiliate codes are not Stripe coupons, so Stripe's hosted field rejected them with "This code is invalid", which users read as a broken site. All app-level codes now go through `/api/promo/redeem`.

Other things both routes do that are easy to miss:

- **Stale test-mode customers.** Both verify `profiles.stripe_customer_id` with a `stripe.customers.retrieve()` and clear it on `resource_missing` ([checkout 203-219](../../src/app/api/stripe/checkout/route.ts), [redeem 279-295](../../src/app/api/promo/redeem/route.ts)). Without this, every profile created under `sk_test_` keys fails permanently after the live cutover. It costs one Stripe call per checkout.
- **Affiliate cookie attribution** runs only in the standard route ([lines 258-281](../../src/app/api/stripe/checkout/route.ts)). Before this, link-click attribution was dropped entirely: the middleware set a `teh_aff` cookie and nothing read it, so the webhook - which only books a conversion when `metadata.affiliateId` is present - booked none.
- **Plan resolution falls back** ([`resolvePlanPriceId`, line 54](../../src/app/api/stripe/checkout/route.ts)). `teacher_monthly` falls back to `STRIPE_PRICE_PRO_MONTHLY` when the teacher variable is unset. In an environment missing the teacher variables, a teacher is charged the student price and the subscription records as a student plan. IELTS deliberately has **no** fallback - it returns `undefined` and the route answers 400, because falling back would charge the wrong amount and grant the wrong entitlement.

`/api/promo/redeem` accepts two classes of code ([lines 161-215](../../src/app/api/promo/redeem/route.ts)): the hard-coded `REDEMPTION_RULES` (only `2026ENGLISH`), and any row in `affiliate_accounts` with `status = 'active'`. Affiliate codes redeem the identical prices; only the Stripe line-item description differs so refunds trace back. An affiliate-table outage falls through to "unknown code" rather than blocking the public code. [`/api/promo/validate`](../../src/app/api/promo/validate/route.ts) is the unauthenticated pre-check the `/redeem` page calls; it is web-only by design, because Apple § 3.1.1 forbids presenting promo-coded discounts inside an IAP app.

[`/api/stripe/portal`](../../src/app/api/stripe/portal/route.ts) opens a Stripe billing portal session. [`/api/stripe/cancel`](../../src/app/api/stripe/cancel/route.ts) sets `cancel_at_period_end` on `subscriptions.data[0]` of the customer's active list - it picks the **first** active subscription with no matching on plan, so for a customer holding both Pro and IELTS it cancels an arbitrary one. Treat it as a legacy form-driven path; the portal is the safer route.

---

## The Stripe webhook event map

[`src/app/api/stripe/webhook/route.ts`](../../src/app/api/stripe/webhook/route.ts), 1,835 lines, `runtime = 'nodejs'` because signature verification needs the raw body. Much of what follows was rewritten on 23-24 October 2026 (branch `fix/stripe-webhook-2026-10-23`); where a sentence says "until 23 October 2026", that is the behaviour it replaced.

**Idempotency claims the event before running it** ([`claimWebhookEvent`, line 330](../../src/app/api/stripe/webhook/route.ts)). The route inserts the `webhook_events` row first; a second delivery's insert fails with `23505` and is answered 200 without running. If a handler throws, the claim is released ([`releaseWebhookEvent`, line 357](../../src/app/api/stripe/webhook/route.ts)) so Stripe's retry can run, and a failed release is reported at error level because that retry will then be refused. If the claim fails for any other reason the event is still processed and the 200 carries `idempotency: 'unprotected'`. Until 23 October 2026 the route did SELECT, process, INSERT: two concurrent deliveries both processed, and the SELECT's discarded error read a missing table as "never seen". **The scheme depends on `event_id` being the primary key**, and [`20260419_webhook_events_table.sql`](../../supabase/migrations/20260419_webhook_events_table.sql) sorts before `BASELINE_CUTOFF`, so prove the constraint with `information_schema.table_constraints`, never with the tracker.

**Two Stripe API shapes.** [`src/lib/stripe.ts`](../../src/lib/stripe.ts) pins `2026-02-25.clover`. In that shape a Subscription has no `current_period_start`/`current_period_end` (they are on each subscription item), an Invoice has no top-level `subscription` (it is `parent.subscription_details.subscription`), an invoice line has no `price` (it is `pricing.price_details.price`) and a Charge has no `invoice` at all. Webhook payloads follow the API version set on the **endpoint** in the Stripe dashboard, which may be older. Every read goes through [`src/lib/billing/stripe-shapes.ts`](../../src/lib/billing/stripe-shapes.ts) (`subscriptionPeriodEnd`, `subscriptionPeriodStart`, `invoiceSubscriptionId`, `chargeInvoiceId`, `idOf`) or `pricesOnInvoice`, each of which accepts both. Reading only the old fields is what wrote `now` into both period columns of six of the seven Stripe-linked Prisma rows and left `paymentCount` at 0 beside 19 paid invoices (read-only probes, 20 October 2026).

| Event                                       | Supabase `profiles` write                                                                                                                                                        | Prisma `Subscription` write                                                      | Other                                                                                                                                                                                                       |
| ------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `checkout.session.completed` (subscription) | `pro` when the retrieved subscription is live; `incomplete` only over a profile that is not `pro`; `subscription_end_date` with the status; skipped when IELTS-only              | upsert via `syncStripeSubscriptionToPrisma`; none for an IELTS-only subscription | `ielts_status`; grandfather capture; affiliate conversion                                                                                                                                                   |
| `checkout.session.completed` (payment)      | none                                                                                                                                                                             | none                                                                             | upserts an `enrolments` row; throws if `metadata.courseId` missing                                                                                                                                          |
| `customer.subscription.created`             | acts on the subscription as Stripe holds it **now** (retrieved): live grants `pro` with the current period; `incomplete` as at checkout; any other current status writes nothing | upsert, unless stale or IELTS-only                                               | no resolvable user: 200 with `ignored: 'unresolved_user'` and a Sentry message; Stripe unreachable over a `cancelled`/`unpaid` profile: 500, so Stripe retries                                              |
| `customer.subscription.updated`             | `statusMap` below, after the coverage check for any non-live status; `subscription_end_date`                                                                                     | upsert, unless covered or IELTS-only                                             | stale-event guards; `ielts_status`                                                                                                                                                                          |
| `customer.subscription.deleted`             | `cancelled` and the end date **unless** IELTS-only or covered by another subscription that keeps access                                                                          | upsert (`CANCELLED`), unless covered or IELTS-only                               | `ielts_status`; voids `affiliate_referrals` commissions; M7 "your plan has ended" only when it revoked access, behind `TRIAL_LIFECYCLE_EMAILS_ENABLED`                                                      |
| `invoice.paid`                              | `pro` and the subscription's period end, only when the retrieved subscription is still live; skipped when IELTS-only                                                             | upsert, none for IELTS-only; `paymentCount` + 1 when the invoice took money      | IELTS-only: `ielts_status` only                                                                                                                                                                             |
| `invoice.payment_failed`                    | **none** (the retry-window choice below)                                                                                                                                         | none                                                                             | dunning email (M6) through the lifecycle sender, one per invoice, unless another live subscription on the same price covers it; never "paused", because nothing here removes access (`accessPaused: false`) |
| `customer.subscription.trial_will_end`      | none                                                                                                                                                                             | none                                                                             | trial-ending email via Resend                                                                                                                                                                               |
| `charge.refunded`                           | none                                                                                                                                                                             | none                                                                             | marks the subscription's `affiliate_referrals` commissions `refunded`; invoice from `charge.invoice`, or under clover from the InvoicePayment for the payment intent; an unresolvable charge goes to Sentry |
| `charge.succeeded`                          | none                                                                                                                                                                             | none                                                                             | explicit no-op, [line 793](../../src/app/api/stripe/webhook/route.ts)                                                                                                                                       |
| anything else                               | none                                                                                                                                                                             | none                                                                             | acknowledged, no-op                                                                                                                                                                                         |

`statusMap` for `customer.subscription.updated` ([line 1343](../../src/app/api/stripe/webhook/route.ts)), applied only after the coverage check:

| Stripe status        | `profiles.subscription_status`                        |
| -------------------- | ----------------------------------------------------- |
| `active`, `trialing` | `pro`                                                 |
| `past_due`           | left as it is (the retry window); end date still kept |
| `unpaid`             | `unpaid`                                              |
| `incomplete`         | `incomplete`, never over a `pro` profile              |
| `incomplete_expired` | `cancelled`, never over a `pro` profile               |
| `canceled`           | `cancelled`                                           |
| `paused`             | `paused`                                              |
| unmapped             | `free`                                                |

Traps in this handler set, inline where they bite:

- **Access survives Stripe's retry window, and that rests on a dashboard setting** ([lines 556-601](../../src/app/api/stripe/webhook/route.ts)). Until 23 October 2026 the first failed payment wrote `past_due`, which fails the exact-`'pro'` web gate while Stripe's own retries were still scheduled. Now nothing is written until Stripe gives up (`unpaid`, or deletion). That is only true if Stripe Dashboard > Settings > Billing > Subscriptions and emails > Manage failed payments ends the retries with "cancel the subscription" or "mark it unpaid". If it is "leave the subscription past due", nothing ever revokes, and a card trialist whose first payment declined keeps `pro` without paying. Nobody on this machine can see that setting; the founder confirms it and records which it is in the route. The choice is shared by `ielts_status` (past_due leaves it alone) and by `WEB_ACCESS_STATUSES` in the guard module, which the coverage check and the trial-expiry cron both read; reversing it means changing all three.
- **The coverage check asks about access, not prices, and fails closed.** Before any non-paying write, `.updated` and `.deleted` call `findCoveringSubscription` ([guard line 266](../../src/lib/billing/duplicate-subscription-guard.ts)): is there another subscription in `WEB_ACCESS_STATUSES` (active, trialing, past_due) that is not IELTS-only, or for an IELTS-only event another that carries IELTS? It never compares prices, because the per-price rule borrowed from checkout revoked a customer who moved from monthly to annual, and could never match a promo-built price. `unpaid` is not cover, because two dead subscriptions covered each other. When Stripe cannot be asked it throws, the claim is released and Stripe retries; reading "unknown" as "not covered" is the 18 September deletion exactly.
- **Stale and out-of-order events.** Stripe delivers at least once and in no order. `invoice.paid` grants only when the retrieved subscription is still live. `customer.subscription.created` acts on the retrieved current state, so a late copy writes neither `pro` over `cancelled` nor the first period over a renewed one. `.updated` refuses to re-grant `pro` over a `cancelled`/`unpaid` profile whose end date has passed ([line 1377](../../src/app/api/stripe/webhook/route.ts)), and a `past_due` over such a profile does not move its end date ([line 1466](../../src/app/api/stripe/webhook/route.ts)), because a future date there reopened that guard. The Prisma row has its own refusals, below.
- **A database error is not an answer.** The profile reads in `resolveSubscriptionUser`, `profileIsPro`, `readProfileState` and `invoice.paid` throw on any error except "no row" (`PGRST116`), so the claim is released and Stripe retries. Those reads used to discard the error, read it as "no profile" or "not pro", answer 200 and keep the claim.
- **Every `userId` in this file is a Supabase auth uuid.** The identity note at [lines 38-50](../../src/app/api/stripe/webhook/route.ts) exists because handing that uuid to Prisma is what dropped the `Subscription` row for the overwhelming majority of accounts. Supabase `profiles` writes correctly keep the uuid; every Prisma write goes through `syncStripeSubscriptionToPrisma`.

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
| Written by  | Stripe webhook, signup, trial-expiry cron (school enrolment stopped writing it on 12 October 2026)                                                                                                    | Stripe webhook (via sync), signup, RevenueCat reconciler, trial crons                                                                |

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

**`isTeacherPlan` is read from the price on the Stripe path** since 23 October 2026 ([`src/lib/billing/plan-from-price.ts`](../../src/lib/billing/plan-from-price.ts)). Before that the sync never wrote it, so a teacher who bought Teacher Annual through Stripe got `isTeacherPlan = false`: no `teacher_tools` on mobile, and the grandfather capture in `handleCheckoutCompleted` locked the **student** price. A teacher price is `true`, a known student price `false`, anything else leaves the stored value alone. Rows written before the change are corrected by `scripts/stripe-reconcile-subscriptions.mjs --write`.

`pickEntitlement` sorts by `currentPeriodEnd` and returns a `warning` string when more than one row exists. That branch is currently unreachable in practice - `Subscription.userId` is `@unique` in [`prisma/schema.prisma:369`](../../prisma/schema.prisma), so a second subscription overwrites the first rather than adding a row. That uniqueness is itself the reason the September duplicate was invisible from our own database.

**One row per person cannot hold two subscriptions.** Since 24 October 2026 the row records the main entitlement only: an IELTS-only subscription writes no row from any handler (`recordSubscriptionRow` in the webhook), as it already wrote no `subscription_status`. Until then every handler wrote it, and the sync lets any live subscription take the row, so `/api/me/entitlements` read `pro: true` for an IELTS-only payer on mobile, a Pro and IELTS holder's row followed whichever subscription last sent an event (and IELTS ending wrote `CANCELLED` over a paying main-plan customer), and a no-card trialist who bought IELTS lost the trial row to it, so the trial-expiry cron never ended their trial. Rows written before the change may still hold an IELTS subscription; nobody has checked production for one. **Still open:** the RevenueCat reconciler has no live-row protection, so a store purchase and a Stripe subscription on one person overwrite each other's record (the reconcile script reports such a row as `MOBILE_ROW` and leaves it). The fix for that is a row per subscription or a per-product entitlement column.

### Where the Prisma row goes missing

`Subscription.userId` is a foreign key to `User.id`. The webhook used to pass the Supabase uuid straight into `prisma.subscription.upsert({ where: { userId } })`, the foreign key failed, and the throw was caught and logged as a line saying the row "can be back-filled". It never was. On 2026-09-17 that was 192 of 200 accounts with no `Subscription` row at all, so `/api/me/entitlements` served paying subscribers the free tier, the trial crons skipped them, and grandfathered pricing was never recorded.

[`src/lib/billing/subscription-sync.ts`](../../src/lib/billing/subscription-sync.ts) is the fix. It resolves the uuid through `requirePrismaUserId` in [`src/lib/identity/`](../../src/lib/identity), and when it cannot it is loud: a Sentry error fingerprinted by reason, plus one greppable log line beginning `BILLING_SUBSCRIPTION_UNRECORDED` carrying every fact needed to rebuild the row by hand ([line 60](../../src/lib/billing/subscription-sync.ts)). Do not reword that marker; it is what a log-drain alert matches. It still never throws, because Stripe retries non-2xx for three days and several same-event handlers (affiliate commission booking, IELTS sync) are not idempotent.

Failure reasons are `identity_unresolved`, `identity_conflict` (an email belonging to a Prisma row linked to a different Supabase user - operator review only, merging people is never automatic) and `row_write_failed`, all reported as above. Three more are deliberate refusals, logged at warn level with their own markers, because the row is right and the event is not ([step 2](../../src/lib/billing/subscription-sync.ts)):

- `live_row_protected` (`BILLING_LIVE_ROW_PROTECTED`): a dead subscription of a different id arriving over a live, in-period row. This is the second layer under the coverage check, and the reason the 18 September deletion can no longer overwrite the paid subscription's record even if Stripe and our row disagree.
- `unlinked_row_protected` (`BILLING_UNLINKED_ROW_PROTECTED`): a non-live subscription arriving over a row with no Stripe id, which is a no-card trial or a store purchase. A stalled checkout used to write its `incomplete` subscription over a trialist's row, after which the trial-expiry cron never saw the trial again. A live subscription still takes the row; that is trial conversion. The accepted cost: a once-live subscription whose row write was missed cannot record its later past_due or cancellation there, which the cron (it asks Stripe) and the reconcile script cover.
- `stale_event` (`BILLING_STALE_EVENT_REFUSED`): any status other than cancelled for the very subscription the row records as `CANCELLED` with a `cancelledAt`. Stripe never moves a canceled subscription to another status. A genuine re-subscription has a new id and takes the row.

There is deliberately no "the period never moves backwards" rule: a plan change with `billing_cycle_anchor: now` legitimately shortens it.

---

## IELTS as a separate entitlement

IELTS is a standalone subscription at £39/month or £249/year, tracked by `profiles.ielts_status` (`'free' | 'active'`), added by [`supabase/migrations/20260530_ielts_entitlement.sql`](../../supabase/migrations/20260530_ielts_entitlement.sql). It exists because entitlement was one global flag: riding IELTS on `subscription_status` would give a £3.99 student premium IELTS feedback free, and give an IELTS subscriber all GCSE marking.

The rules, implemented by `syncIeltsEntitlement` and `isIeltsOnlySubscription` ([webhook lines 67-110](../../src/app/api/stripe/webhook/route.ts)), with `isIeltsOnly` itself in the guard module so the coverage check applies the same test to the customer's other subscriptions:

- A subscription whose **every** recurring price is an IELTS price is "IELTS-only" and must never touch `subscription_status`, `subscription_end_date` or the Prisma `Subscription` row. That includes `invoice.paid`, whose missing carve-out handed the whole catalogue to IELTS subscribers until 18 September 2026. Until 24 October 2026 the checkout and `.created` handlers still wrote a live IELTS-only subscription's period end over the date a trial or main plan runs on, and every handler wrote its row.
- A subscription **containing** an IELTS price sets `ielts_status` to `active` while Stripe says `active`/`trialing`, leaves it alone while `past_due` (the retry window, as for Pro), and sets `free` otherwise.
- A subscription containing **no** IELTS price leaves `ielts_status` alone, so a GCSE plan can never grant or clear IELTS.

`hasIeltsAccess` ([`course-access.ts:119`](../../src/lib/course-access.ts)) grants on `ielts_status === 'active'` **or** `subscription_status === 'pro'`. The second disjunct is deliberate grandfathering: existing all-access subscribers keep IELTS. It is also why a `pro` granted by an IELTS-only subscription would matter in both directions.

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

The fixes. The first three went live on 18 September 2026; the rest are on branch `fix/stripe-webhook-2026-10-23`, because the September repair left the same outcome open through other doors:

1. **Do not sell it twice** - `findDuplicateSubscription` at checkout-session creation in both routes.
2. **Do not revoke on a payment failure at all** - `invoice.payment_failed` writes nothing to the entitlement (the retry-window choice above). Its per-price duplicate check now decides only whether the dunning email goes: when another live subscription carries the same price it logs `DUPLICATE_INVOICE_FAILED_IGNORED` and sends none ([webhook lines 510-554](../../src/app/api/stripe/webhook/route.ts)).
3. **Do not cancel on a duplicate's deletion** - `customer.subscription.deleted` asks `findCoveringSubscription`, logs `DUPLICATE_SUBSCRIPTION_DELETED_IGNORED` when covered, and leaves `subscription_status`, `subscription_end_date`, `ielts_status` and the Prisma row untouched ([lines 1535-1606](../../src/app/api/stripe/webhook/route.ts)). Until 23 October 2026 this check was per price and failed open, so it revoked a monthly-to-annual customer and would have repeated the 18 September outcome whenever Stripe was unreachable.
4. **Do not mirror a duplicate's status on update** - `customer.subscription.updated` runs the same check for every non-live status (`DUPLICATE_SUBSCRIPTION_UPDATED_IGNORED`). It used to write past_due, unpaid and cancelled straight onto the profile.
5. **Do not overwrite the paid subscription's record** - the sync module refuses a dead subscription of a different id over a live row (`BILLING_LIVE_ROW_PROTECTED`), on its own evidence, so it holds even when Stripe and our row disagree.
6. **Do not process a delivery twice** - claim-first idempotency, so two concurrent deliveries of one event cannot both write.

The generalisable rule: `profiles.subscription_status` answers "does this person have access", and a Stripe event answers "what happened to this subscription". Those are different questions. Any handler that writes the second answer into the first field must first ask whether some other subscription still justifies the access.

---

## The duplicate-subscription guard, and what it still does not cover

[`src/lib/billing/duplicate-subscription-guard.ts`](../../src/lib/billing/duplicate-subscription-guard.ts). Read the file header before changing anything in it; the reasoning is dense and each paragraph is load-bearing.

- **Per price, not per customer.** A learner may legitimately hold Pro and IELTS at once. Refusing any second subscription would break a real combination to fix a different problem.
- **Matches on two things.** `/api/stripe/checkout` uses a catalogue price id, which compares directly. `/api/promo/redeem` builds an ad-hoc `price_data` whose price id is unique to that redemption and can never match - so it stamps the catalogue price onto the product as `metadata.basePriceId`, and the guard checks both. This is what makes a promo redeemer recognised at standard checkout and vice versa.
- **Stripe is the source of truth**, deliberately not `profiles.subscription_status` and not the Prisma row. Both are written by the webhook, and a guard built on the bookkeeping that was broken would have failed in exactly the case it exists for.
- **`LIVE_SUBSCRIPTION_STATUSES`** is `active`, `trialing`, `past_due`, `unpaid` ([line 82](../../src/lib/billing/duplicate-subscription-guard.ts)). `canceled`, `incomplete_expired` and `paused` are excluded so a lapsed customer can renew; `incomplete` is excluded so a first-attempt card decline does not trap them. It answers "is this customer on the hook for money", which is the checkout question.
- **It fails open.** If Stripe is unreachable the checkout proceeds, and the failure is logged as `DUPLICATE_SUBSCRIPTION_CHECK_FAILED`. A customer who cannot buy is judged worse than a duplicate that can be unwound. Do not read "recoverable" as "cheap" - the one duplicate found took no money at all and still revoked paid access four times over three days.

**The webhook asks a different question and uses a different function.** `findCoveringSubscription` ([line 266](../../src/lib/billing/duplicate-subscription-guard.ts)) answers "does another subscription still justify this person's access" before a revocation. It differs from the checkout guard on all three points above, on purpose: it does not compare prices; it counts only `WEB_ACCESS_STATUSES` (`active`, `trialing`, `past_due`, [line 105](../../src/lib/billing/duplicate-subscription-guard.ts)), because an unpaid subscription keeps nobody's access; and it fails **closed**, by throwing, because the caller is about to write a non-paying value over a per-person field. Until 23 October 2026 the webhook borrowed `findDuplicateSubscription` and inherited all three of the checkout answers, each wrong for it. `pricesOnInvoice` reads both invoice-line shapes; from an invoice the `basePriceId` of a promo-built price is readable only in the old shape with an expanded product, so the payment-failed email check recognises a promo-built duplicate through the other subscription, which the guard lists with the product expanded.

**What it does not cover, and this is important:** the check runs at checkout **session creation**. Two sessions opened before either completes both pass, and both become subscriptions. The window is the time between clicking "subscribe" and completing payment, which for a hesitant user is minutes. Closing it properly needs either a Stripe-side constraint or a post-`checkout.session.completed` sweep that cancels the newer of two subscriptions on the same price; neither exists. Duplicates created before 18 September 2026 are also still live in Stripe and this guard does nothing about them.

The detection tool is [`scripts/find-duplicate-stripe-subscriptions.mjs`](../../scripts/find-duplicate-stripe-subscriptions.mjs). It is read-only and enforces that in code: `readOnlyStripe()` hands the rest of the file an object with exactly `subscriptions.list` and `customers.list` on it. Its companion, [`scripts/reconcile-stripe-subscriptions.mjs`](../../scripts/reconcile-stripe-subscriptions.mjs), compares Supabase `profiles` against Prisma rows and does not import the Stripe SDK at all, so it structurally cannot see duplicates. Run both; they answer different questions.

The third, [`scripts/stripe-reconcile-subscriptions.mjs`](../../scripts/stripe-reconcile-subscriptions.mjs) (23 October 2026), compares each Stripe customer's subscription with the Prisma row and, only with `--write`, updates the row: id, status, plan, `isTeacherPlan`, the period in both shapes, `cancelledAt` and `paymentCount` recounted from paid invoices. Its Stripe object exposes only `subscriptions.list` and `invoices.list`, and it never writes `profiles`. It repairs the trial-expiry cron's `TRIAL_EXPIRY_SKIPPED_PAID` case (the trial row is found by Prisma user id and updated in place), leaves a store-purchase row alone (`MOBILE_ROW`), lets only a subscription that keeps access take a row with no Stripe id (`UNLINKED_ROW_KEPT` otherwise) and resolves the Prisma `User` in the order `src/lib/identity/lookup.ts` uses. Its copies of the app's readers are pinned to the originals by `src/__tests__/reconcile-script-readers-agree.test.ts`. The rows written before the shape fix are wrong until the founder runs it.

---

## Trials - three distinct things share the name

|                      | Provisioned by                                                                                       | Card       | Prisma row                                                | Ends by                                                                  | Metered |
| -------------------- | ---------------------------------------------------------------------------------------------------- | ---------- | --------------------------------------------------------- | ------------------------------------------------------------------------ | ------- |
| No-card signup trial | [`/api/auth/register:286-330`](../../src/app/api/auth/register/route.ts), `/api/auth/teacher-signup` | no         | `TRIALING`, `stripeSubscriptionId` null, `platform` `WEB` | [`/api/cron/trial-expiry`](../../src/app/api/cron/trial-expiry/route.ts) | **yes** |
| Checkout trial       | `subscription_data.trial_period_days` at checkout                                                    | yes        | `TRIALING` with a Stripe subscription id                  | Stripe, then the webhook                                                 | no      |
| Mobile trial         | RevenueCat `INITIAL_PURCHASE` with `is_trial_period`                                                 | store-held | `TRIALING`, `platform` `IOS`/`ANDROID`                    | RevenueCat `EXPIRATION`                                                  | no      |

Signup writes **both** stores ([register lines 292-325](../../src/app/api/auth/register/route.ts)): a Prisma `TRIALING` row so mobile sees it, and `profiles.subscription_status = 'pro'` so the web gates open. The profile write is guarded to run only when the current status is empty or `'free'`, so a re-POST can never shorten a paid period. Both writes are best-effort and never fail registration.

The consequence is the reason [`src/lib/usage/trial-allowance.ts`](../../src/lib/usage/trial-allowance.ts) exists: to every gate in the codebase a no-card trial account is byte-for-byte a paying account. No card, no identity proof, and nothing stopping a second signup on day 8. The AI ceiling is the only control. Its discriminator must be exact - `TRIALING` **and** `stripeSubscriptionId` null - because a checkout trial has a card, which is its own abuse control, and capping it would break the promise that a paid plan gives the first seven days free.

`/api/cron/trial-expiry` (daily 04:15 UTC per [`vercel.json`](../../vercel.json)) is what actually ends the no-card trial. Without it, signup would grant `'pro'` forever, because the web gates read `subscription_status` and never look at `subscription_end_date`. Its filter is `status = TRIALING` **and** `stripeSubscriptionId = null` **and** `platform = WEB` **and** `currentPeriodEnd < now`. It flips the profile `'pro'` to `'free'` (guarded to rows still on the trial's `'pro'`) and marks the Prisma row `CANCELLED`.

That filter used to be called airtight on the grounds that a payer always carries a Stripe id. A payer carries one only when the webhook managed to write the row; when the sync failed, the trial row stayed and day eight revoked the access they had paid for. So before downgrading, the cron now asks Stripe about any profile with a `stripe_customer_id` ([`trial-expiry/route.ts`](../../src/app/api/cron/trial-expiry/route.ts)). A subscription in `WEB_ACCESS_STATUSES` (the guard module's list, not a copy, so `past_due` counts as the webhook says it does) that is not IELTS-only means skip, log `TRIAL_EXPIRY_SKIPPED_PAID` with the ids, raise a Sentry warning and leave the row for `scripts/stripe-reconcile-subscriptions.mjs`. Stripe unreachable (`TRIAL_EXPIRY_STRIPE_UNREACHABLE`) or the profile unreadable (`TRIAL_EXPIRY_PROFILE_UNREADABLE`) means skip and try again tomorrow: a day's grace on an unpaid trial costs pennies. An IELTS-only subscription grants `ielts_status`, never the `'pro'` this cron ends, so it does not count; until 24 October 2026 it did, and a trialist who bought IELTS, or took a seven-day IELTS card trial that took no money, kept the trial's `'pro'` on every run.

`/api/cron/trial-ending` (daily 09:00 UTC) runs the no-card sequence (since 23 October 2026: a day-3 first-essay nudge, the warning two days before, the trial-ended notice within three days after, and day-14 and day-30 emails to consented adults; see [`src/lib/email/lifecycle/trial-sequence.ts`](../../src/lib/email/lifecycle/trial-sequence.ts)) - **but it is off by default and sends nothing until someone turns it on**. The entire body sits behind a feature flag: unless `TRIAL_LIFECYCLE_EMAILS_ENABLED === 'true'`, `executeTrialEndingCron` returns `{ ok: true, skipped: 'disabled - set TRIAL_LIFECYCLE_EMAILS_ENABLED=true to enable' }` and does no work at all ([`trial-ending/route.ts`](../../src/app/api/cron/trial-ending/route.ts)). That is deliberate - the founder reviews the copy, confirms the `LifecycleEmail` table exists and the unsubscribe link resolves before enabling it - but it has two consequences a reader planning trial comms must hold on to. The flag check sits **before** `runCron`, so a disabled run writes no observability breadcrumb: the schedule reports 200 and looks healthy whether or not a single email has ever gone out. And because the no-card trial is ended regardless by `/api/cron/trial-expiry`, with the flag off the population is still downgraded on day 7 with no warning and no follow-up, which is the exact defect this route was written to fix. Confirm the variable is set in the Vercel project before assuming any trial email exists.

When it is enabled, read its header ([`route.ts`](../../src/app/api/cron/trial-ending/route.ts)) and the `NO_CARD` filter in [`trial-sequence.ts`](../../src/lib/email/lifecycle/trial-sequence.ts) for one specific trap: `paymentCount` is never proof that nobody has paid. Until 23 October 2026 it was incremented only by [`src/lib/revenuecat/reconcile.ts`](../../src/lib/revenuecat/reconcile.ts), so it was 0 for every web customer. The Stripe webhook now adds one per `invoice.paid` that took money (a £0 trial-start invoice is not a payment), but rows written before then stay at 0 until the reconcile script recounts them. The load-bearing exclusion is `stripeSubscriptionId = null`.

**A consequence that reaches customers.** [`/api/cron/trustpilot-retention-90d`](../../src/app/api/cron/trustpilot-retention-90d/route.ts) emails a Trustpilot invitation to adult accounts created 90 days ago whose row has `paymentCount >= 1`. With the counter at 0 it had never selected a web payer. Once the webhook counts payments, or the reconcile script back-fills the count, web payers start receiving that email on their ninetieth day. That is the cron's intent, but nobody has yet decided it for web customers.

[`src/lib/renewal-reminders.ts`](../../src/lib/renewal-reminders.ts) contains a `sendTrialEndingReminders()` that is **not wired to any route**. It is shaped for Stripe-managed card trials and does not cover the no-card population. Treat it as dead until someone deliberately revives it.

---

## Grandfathered pricing - recorded, never charged

[`src/lib/pricing/grandfather.ts`](../../src/lib/pricing/grandfather.ts) locks the price a subscriber signed up at onto three Prisma columns: `grandfatheredPriceMinor`, `grandfatheredCurrency`, `pricingTier`.

Understand the limit before you rely on it. **Nothing reads `grandfatheredPriceMinor` to decide what to charge.** Grep the repo: every reference outside the capture helpers and the backfill is a write. The customer is charged whatever the `STRIPE_PRICE_*` variables point at. These columns record an intention and support reporting; they do not enforce a price.

`PRICE_INCREASE_DATE` in that module is `2027-08-01` ([line 35](../../src/lib/pricing/grandfather.ts)) and decides only which tier a new row is **recorded** as. The header records that between 2026-08-01 and 2026-08-18 it was set to 2026-08-01 while checkout still charged early-access prices, so any signups in that window were recorded as `standard` while paying `early_access`. Do not move this date until the checkout price variables change on the same day. Repair is [`/api/admin/pricing/backfill`](../../src/app/api/admin/pricing/backfill/route.ts), which drives [`backfillGrandfatheredPrices`](../../src/lib/pricing/backfill-grandfathered.ts) - fills only `NULL` rows, never overwrites, and assumes every pre-migration row is `early_access`.

Capture happens in two places: the webhook's `checkout.session.completed` handler ([lines 1250-1294](../../src/app/api/stripe/webhook/route.ts)) and the RevenueCat `INITIAL_PURCHASE` / `RENEWAL` branches ([reconcile lines 188-298](../../src/lib/revenuecat/reconcile.ts)). The webhook block previously queried `where: { userId }` with the Supabase uuid, so `existingSub` was always null and nothing was ever written; it now uses the Prisma id returned by the sync and is skipped entirely when no row could be written. RevenueCat preserves an existing locked price on re-purchase after expiry.

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

## School pupils - access from the school, checked at use

**Changed 12 October 2026 (Calum's decision).** A school pupil's access comes from the school's live pilot, checked at the moment of use, and nothing is written to their `profiles.subscription_status`.

- **The choke point.** `resolvePaidAccess` in [`src/lib/course-access.ts`](../../src/lib/course-access.ts), which `hasActiveSubscription` now wraps, answers yes for `'pro'` or for a pupil of a school whose access is live: `getPupilSchoolAccess` in [`src/lib/school-entitlement.ts`](../../src/lib/school-entitlement.ts), which reads `school_members` (role student, accepted), `school_students` (active) and `class_students` (active, in an active class), keyed on the Supabase uuid, and applies `isSchoolAccessActive`. Any read error answers "not a pupil". IELTS is not covered. Client pages ask `GET /api/user/access` instead of reading the profile.
- **No grant is written.** The join-code and class-enrolment routes used to write `'pro'` when the school's own `subscription_status` was `active` or `trialing`; the trial-expiry cron then wiped it after seven days, a grant made before first sign-in never expired, and nothing revoked it when the school lapsed. Both writes are gone, so an expired school's pupils lose access at once.
- **No trial meter, no trial.** On the GCSE routes (`enforceTrialAllowance(..., { schoolFunded: true })`) a pupil of a live school is not metered against a no-card trial, and `provisionSignupTrial` gives no trial to one, so an uploaded pupil is never told their trial has ended. The routes' own daily caps (20 submissions, 30 marking runs) still apply.

Mobile still reads the Prisma `Subscription` row through `/api/me/entitlements`, which knows nothing of schools.

---

## What I could not determine

- Which `STRIPE_PRICE_*` variables are actually set in production, and therefore whether IELTS recognition and the teacher-tier prices are live or silently falling back.
- Whether the `grandfathered_*` columns exist in the production database. The migration is baselined, so the migration tracker cannot tell you. Run `check-schema-drift.mjs`.
- Whether mobile purchasers are intended to get web access. Nothing writes it, and nothing documents the intent.
- Whether `TRIAL_LIFECYCLE_EMAILS_ENABLED` is set in the Vercel project, and therefore whether any trial-ending warning or winback has ever been sent. It is not in `.env.local`, but that file does not mirror the Vercel environment, and a disabled run is indistinguishable from a healthy one in the cron logs.
- What Stripe does after the final retry of a failed payment (Dashboard > Settings > Billing > Subscriptions and emails > Manage failed payments). The retry-window choice is safe only if it cancels the subscription or marks it unpaid.
- Which API version the webhook **endpoint** is set to in the Stripe dashboard, and therefore which shape the payloads arrive in. The readers accept both, so this decides nothing, but the fixtures cannot be checked against a real delivery from here.
- Whether `webhook_events.event_id` is the primary key in production, which the claim-first idempotency needs. The migration is baselined.
