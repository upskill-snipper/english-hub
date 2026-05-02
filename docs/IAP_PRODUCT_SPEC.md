# IAP product spec — App Store Connect (Apple) and Google Play (Android)

This is the canonical mapping of every in-app purchase the mobile app
sells, plus the data we need to type into the App Store Connect UI when
the Apple Developer membership activates.

Pricing source of truth: `src/constants/pricing.ts`. RevenueCat product
catalogue: `src/lib/revenuecat/reconcile.ts` (function
`PRODUCT_CATALOGUE`).

Everything below uses British English and GBP prices. VAT is not yet
charged — Apple collects and remits VAT in the UK on our behalf under
their Paid Apps agreement; we do not need to register for VAT until our
own taxable turnover crosses the threshold.

---

## Why four products, not nine

Earlier planning notes mentioned a 2-year plan and a "school" IAP.
Both have been removed:

- **2-year plan** — not part of `PRICING` constants, not wired into
  RevenueCat reconcile. Defer until post-launch.
- **School IAP** — Founding Schools is sold via Stripe direct invoice
  (£4,000/year), not Apple IAP. Apple's commission and the lack of
  invoiced billing make IAP the wrong rail for B2B school sales.

So at launch there are **four** auto-renewing subscriptions, all
consumer-tier:

| Audience | Period  | Price (GBP) | iOS product ID                                    | Android SKU          |
| -------- | ------- | ----------- | ------------------------------------------------- | -------------------- |
| Student  | Monthly | £3.99       | `com.upskillenergy.theenglishhub.student.monthly` | `eh_student_monthly` |
| Student  | Annual  | £29.99      | `com.upskillenergy.theenglishhub.student.annual`  | `eh_student_annual`  |
| Teacher  | Monthly | £6.99       | `com.upskillenergy.theenglishhub.teacher.monthly` | `eh_teacher_monthly` |
| Teacher  | Annual  | £67.99      | `com.upskillenergy.theenglishhub.teacher.annual`  | `eh_teacher_annual`  |

---

## Apple — App Store Connect form fields

For each of the four iOS products, the App Store Connect "In-App
Purchases" page asks for the values in the table below. **Reference Name**
is internal-only; **Display Name** and **Description** are shown to the
buyer at the system purchase sheet.

### 1. Student — Monthly (£3.99)

| Field                 | Value                                                                                                                              |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| Reference Name        | Student Monthly                                                                                                                    |
| Product ID            | `com.upskillenergy.theenglishhub.student.monthly`                                                                                  |
| Type                  | Auto-Renewable Subscription                                                                                                        |
| Subscription Group    | English Hub Student                                                                                                                |
| Subscription Duration | 1 Month                                                                                                                            |
| Price (Tier)          | UK £3.99 — let App Store Connect set the matching tier in other regions                                                            |
| Free Trial            | 7 days (set on subscription group)                                                                                                 |
| Display Name (en-GB)  | The English Hub — Student Monthly                                                                                                  |
| Description (en-GB)   | Unlimited AI essay feedback, mock papers, and revision content for GCSE and IGCSE English. Auto-renews each month until cancelled. |
| Review Notes          | See `docs/REVIEWER_NOTES_APPLE.md`. Use sandbox tester credentials.                                                                |

### 2. Student — Annual (£29.99)

| Field                 | Value                                                                                                                                                                |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Reference Name        | Student Annual                                                                                                                                                       |
| Product ID            | `com.upskillenergy.theenglishhub.student.annual`                                                                                                                     |
| Type                  | Auto-Renewable Subscription                                                                                                                                          |
| Subscription Group    | English Hub Student                                                                                                                                                  |
| Subscription Duration | 1 Year                                                                                                                                                               |
| Price (Tier)          | UK £29.99                                                                                                                                                            |
| Free Trial            | 7 days (inherited from group)                                                                                                                                        |
| Display Name (en-GB)  | The English Hub — Student Annual                                                                                                                                     |
| Description (en-GB)   | Save versus monthly. Unlimited AI essay feedback, mock papers, and revision content for GCSE and IGCSE English for 12 months. Auto-renews each year until cancelled. |

### 3. Teacher — Monthly (£6.99)

| Field                 | Value                                                                                                                                             |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| Reference Name        | Teacher Monthly                                                                                                                                   |
| Product ID            | `com.upskillenergy.theenglishhub.teacher.monthly`                                                                                                 |
| Type                  | Auto-Renewable Subscription                                                                                                                       |
| Subscription Group    | English Hub Teacher                                                                                                                               |
| Subscription Duration | 1 Month                                                                                                                                           |
| Price (Tier)          | UK £6.99                                                                                                                                          |
| Free Trial            | 7 days                                                                                                                                            |
| Display Name (en-GB)  | The English Hub — Teacher Monthly                                                                                                                 |
| Description (en-GB)   | Lesson builder, homework setting, AI marking, and class progress tracking for secondary English teachers. Auto-renews each month until cancelled. |

### 4. Teacher — Annual (£67.99)

| Field                 | Value                                                                                                                                                |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| Reference Name        | Teacher Annual                                                                                                                                       |
| Product ID            | `com.upskillenergy.theenglishhub.teacher.annual`                                                                                                     |
| Type                  | Auto-Renewable Subscription                                                                                                                          |
| Subscription Group    | English Hub Teacher                                                                                                                                  |
| Subscription Duration | 1 Year                                                                                                                                               |
| Price (Tier)          | UK £67.99                                                                                                                                            |
| Free Trial            | 7 days                                                                                                                                               |
| Display Name (en-GB)  | The English Hub — Teacher Annual                                                                                                                     |
| Description (en-GB)   | Save versus monthly. Lesson builder, homework setting, AI marking, and class progress tracking for 12 months. Auto-renews each year until cancelled. |

### Subscription groups (create these first)

Before adding the four products, create two subscription groups in
App Store Connect:

1. **English Hub Student** — contains the two student products. Buyers
   can switch between Monthly and Annual within the same group, and
   Apple handles proration.
2. **English Hub Teacher** — contains the two teacher products.

A user is only ever in one group at a time. A teacher who upgrades
from a student plan moves between groups, which Apple treats as an
upgrade purchase rather than a switch — billing handles this cleanly.

### Free trial — group-level, not per-product

Set the **7-day free trial** offer on each subscription group, applied
to first-time buyers only. Trials are billed by Apple as a
zero-charge initial period; we still receive an `INITIAL_PURCHASE`
RevenueCat event with `is_trial_period: true`, which our reconciler
maps to `SubscriptionStatus.TRIALING`.

### Family Sharing

Off for all four products. The English Hub is a personal-progress
service — sharing a subscription would let two pupils' work mix in
one account.

---

## Apple — Shared Secret (for receipt validation)

Once the membership is active and the products exist in App Store
Connect, generate the **App-Specific Shared Secret** under:

App Store Connect → My Apps → The English Hub → App Information →
App-Specific Shared Secret → Generate

Copy the resulting 32-character hex string into the deployment env
under `REVENUECAT_APPLE_SHARED_SECRET`. RevenueCat (not our own
backend) uses this to verify receipts against Apple servers.

---

## Google Play — Console form fields

Mirror the Apple set with Play's slightly looser SKU rules. Create in
Google Play Console → Monetise → Subscriptions.

### 1. `eh_student_monthly` (£3.99)

| Field          | Value                                                                                                               |
| -------------- | ------------------------------------------------------------------------------------------------------------------- |
| Product ID     | `eh_student_monthly`                                                                                                |
| Name (en-GB)   | The English Hub — Student Monthly                                                                                   |
| Description    | Unlimited AI essay feedback, mock papers, and revision for GCSE/IGCSE English. Auto-renews monthly until cancelled. |
| Billing Period | Monthly                                                                                                             |
| Default Price  | £3.99 GBP (let Play auto-convert other regions)                                                                     |
| Free Trial     | 7 days                                                                                                              |
| Grace Period   | 7 days (Play default)                                                                                               |

### 2. `eh_student_annual` (£29.99)

| Field          | Value                                                                                                                            |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| Product ID     | `eh_student_annual`                                                                                                              |
| Name (en-GB)   | The English Hub — Student Annual                                                                                                 |
| Description    | Save versus monthly. Unlimited AI essay feedback, mock papers, and revision for 12 months. Auto-renews annually until cancelled. |
| Billing Period | Yearly                                                                                                                           |
| Default Price  | £29.99 GBP                                                                                                                       |
| Free Trial     | 7 days                                                                                                                           |

### 3. `eh_teacher_monthly` (£6.99)

| Field          | Value                                                                                                           |
| -------------- | --------------------------------------------------------------------------------------------------------------- |
| Product ID     | `eh_teacher_monthly`                                                                                            |
| Name (en-GB)   | The English Hub — Teacher Monthly                                                                               |
| Description    | Lesson builder, homework setting, AI marking, and class progress tracking. Auto-renews monthly until cancelled. |
| Billing Period | Monthly                                                                                                         |
| Default Price  | £6.99 GBP                                                                                                       |
| Free Trial     | 7 days                                                                                                          |

### 4. `eh_teacher_annual` (£67.99)

| Field          | Value                                                                                                                                               |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| Product ID     | `eh_teacher_annual`                                                                                                                                 |
| Name (en-GB)   | The English Hub — Teacher Annual                                                                                                                    |
| Description    | Save versus monthly. Lesson builder, homework setting, AI marking, and class progress tracking for 12 months. Auto-renews annually until cancelled. |
| Billing Period | Yearly                                                                                                                                              |
| Default Price  | £67.99 GBP                                                                                                                                          |
| Free Trial     | 7 days                                                                                                                                              |

---

## RevenueCat — Offerings + Entitlements

Once both stores have the products, link them in RevenueCat:

1. **Entitlement** — single entitlement named `premium`. Both student
   and teacher SKUs grant `premium`. The web app reads this from the
   reconciler; nothing client-side branches on it.
2. **Offering** — single default offering called `default`. Add all
   four packages: `student_monthly`, `student_annual`, `teacher_monthly`,
   `teacher_annual`.
3. Map each package to the iOS + Android SKU pair from the tables
   above. RevenueCat will surface whichever store the user is on.
4. **Webhook URL** — point at
   `https://theenglishhub.app/api/revenuecat/webhook` and use the
   shared secret stored in `REVENUECAT_WEBHOOK_SECRET`. The handler
   journals every event, then reconciles via `reconcileEvent()`.

---

## Tax and legal

- **VAT**: Apple and Google collect and remit VAT to HMRC under the
  Paid Apps agreement. We do not need to register for VAT until
  Upskill Energy Limited's own taxable turnover crosses the threshold.
- **Refunds**: handled by the store. RevenueCat sends a `REFUND`
  event; the reconciler stamps `refundedAt` and revokes access. We do
  not surface a refund button in-app.
- **Cancellation**: handled by the store's standard subscription
  management UI. The web Account → Billing page links out to
  `https://apps.apple.com/account/subscriptions` for iOS users so they
  can cancel without leaving the brand.

---

## Sandbox testers (for QA)

Once the membership is active, create two sandbox testers in App Store
Connect → Users and Access → Sandbox Testers:

- `eh-sandbox-student@upskillenergy.com`
- `eh-sandbox-teacher@upskillenergy.com`

Use them on a TestFlight build to walk the trial → renewal → cancel
loop end-to-end before the first real user lands.
