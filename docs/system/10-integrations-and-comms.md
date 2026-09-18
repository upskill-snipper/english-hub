# Third-party integrations and outbound communication

Everything in this chapter is something the product does not own. Fourteen external
services sit behind The English Hub, and the product's behaviour when one of them is
absent is almost never a crash: it is a quiet degradation that reports success. That is
the single most important thing to carry out of this chapter, because it is how an AI
outage lasted ten weeks and how a whole category of transactional email may never have
been delivered at all. Outbound communication is an integration in its own right here,
because there are five different ways this codebase can send an email and they share no
queue, template store, sender identity or failure mode.

---

## 1. The map

| Service            | What it does here                                                                        | Configured by                                                                            | What breaks when it is down or unset                                               |
| ------------------ | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| Anthropic          | Every AI feature: marking, essay feedback, IELTS, CEFR, blog generation                  | `ANTHROPIC_API_KEY`, `ANTHROPIC_MODEL`, three `MARKING_*_MODEL` vars                     | Every AI route returns a calm 503. Nothing alerts. The rest of the site works      |
| Supabase           | Auth, primary Postgres, RLS, storage, auth emails                                        | `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY` | Total outage. Sign-in, every read, every write                                     |
| Stripe             | Web checkout, subscriptions, the billing portal, webhooks                                | `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`, ~17 `STRIPE_PRICE_*`                       | Module-load throw, see §4. Entitlements freeze at last known state                 |
| RevenueCat         | iOS and Android in-app purchase entitlements                                             | `REVENUECAT_WEBHOOK_SECRET`, `REVENUECAT_SECRET_API_KEY`                                 | Mobile purchases never reach Prisma. Webhook fails closed with a 500               |
| Resend             | Most transactional email (HTTP API, no SDK)                                              | `RESEND_API_KEY`                                                                         | Every send returns `{sent:false}`. Callers continue and report success to the user |
| SMTP / nodemailer  | The other transactional email, including safeguarding and DSAR                           | `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `FROM_EMAIL`                         | Send fails, caller logs and continues. See §6, this is the dangerous one           |
| SendGrid           | Trustpilot invites only, behind a flag the code defaults off but `.env.example` ships on | `SENDGRID_API_KEY`, `TRUSTPILOT_ENABLED`                                                 | Nothing while the flag is off. With it on and no key, silent non-delivery. See §11 |
| Sentry             | Error and performance reporting, cron failure alerts                                     | `SENTRY_DSN`, `NEXT_PUBLIC_SENTRY_DSN`                                                   | Silent. `enabled` is false without a DSN, so errors vanish                         |
| PostHog            | Client-side product analytics (EU region)                                                | `NEXT_PUBLIC_POSTHOG_KEY`, `NEXT_PUBLIC_POSTHOG_HOST`                                    | No events. `initPostHog()` returns early                                           |
| Google Analytics 4 | Aggregate usage, relayed server-side                                                     | `NEXT_PUBLIC_GA4_ID`                                                                     | No events                                                                          |
| Upstash Redis      | Preferred rate-limit backend                                                             | `UPSTASH_REDIS_REST_URL`, `UPSTASH_REDIS_REST_TOKEN`                                     | Falls through to the Postgres limiter. Currently unset in production               |
| Trustpilot         | Review invitations, TrustBox widget                                                      | `TRUSTPILOT_ENABLED`, `TRUSTPILOT_INVITE_EMAIL`, three `NEXT_PUBLIC_TRUSTPILOT_*`        | Nothing customer-visible                                                           |
| Cloudflare         | DNS, CDN, WAF in front of Vercel, email aliases                                          | Dashboard only, no repo config                                                           | Site unreachable, or email DKIM fails and Resend rejects sends                     |
| Vercel             | Hosting, edge, cron scheduler, env store                                                 | `vercel.json`, dashboard                                                                 | Everything, including all fifteen crons                                            |

The canonical typed register of these is [`src/config/subprocessors.ts`](../../src/config/subprocessors.ts).
**Read it, but know that it is inert.** `LIVE_SUBPROCESSORS` at
[`src/config/subprocessors.ts:290`](../../src/config/subprocessors.ts) is exported and
imported by nothing, so the published legal pages still hand-maintain four different
and mutually inconsistent sub-processor lists. The file's own header says so. It also
lists **Microsoft Azure** as live, which refers to the Express app in
[`backend/`](../../backend) deployed by
[`.github/workflows/backend-azure-deploy.yml`](../../.github/workflows/backend-azure-deploy.yml)
to a web app named `english-hub-api`. Nothing in `src/` references that service, and I
could not find any code path in the Next.js app that calls it. Treat it as a separate,
possibly abandoned deployment rather than part of this system, and verify before
repeating the Azure claim to a school.

---

## 2. Anthropic

One provider, one SDK, one construction site. Every AI call goes through
`getAnthropicClient()` in [`src/lib/anthropic-client.ts`](../../src/lib/anthropic-client.ts),
which exists so the data-protection posture has a single citeable home rather than
being re-derived across the fourteen routes that call Claude. That file is worth
reading end to end before you change anything AI-shaped; it is unusually honest about
the difference between what the code enforces and what only a signed contract can.

**The model ids are the recurring outage.** The default model lives at
[`src/lib/anthropic-client.ts:89`](../../src/lib/anthropic-client.ts) and the three
marking tiers at [`src/lib/marking/engine/models.ts:82,90,97`](../../src/lib/marking/engine/models.ts)
(marker, escalation, classifier). All four are env-overridable, which is the fix that
came out of the second outage. The history matters:

- Around 15 June 2026 `claude-sonnet-4-20250514` reached retirement. Every AI feature
  answered 503. Found by hand on 18 August, roughly ten weeks later.
- Around September 2026 `claude-sonnet-4-6` began returning HTTP 400. Same total
  failure, found by hand on 17 September.

Neither announced itself, and that is deliberate at the learner-facing layer: routes
catch provider errors and return "temporarily unavailable" rather than a stack trace
to a fifteen-year-old mid-essay. The cost is that the product can be dead while every
dashboard is green.

[`src/app/api/health/ai/route.ts`](../../src/app/api/health/ai/route.ts) was written to
close that gap. It makes one real eight-token call and reports which model answered.
**It is not scheduled.** There is no entry for it in
[`vercel.json`](../../vercel.json), so the detector for the failure mode that has cost
twenty weeks is built and not plugged in. Wiring it is the first item in
[`docs/HANDOVER.md`](../HANDOVER.md) §5.

`assertNotHaiku` runs at module load ([`src/lib/marking/engine/models.ts:170-171`](../../src/lib/marking/engine/models.ts))
and hard-fails if the marker or escalation tier is pointed at a Haiku-class model. That
is an IELTS specification rule, not a preference; the classifier tier is exempt.

Data posture, in one line: prompts carry the learner's text, the question, the board
and the year, and never a name, email, date of birth or school. No-training and
zero-retention are **contractual**, not a request flag, because the SDK exposes no such
option. `dpaCountersigned`, `writtenZdrConfirmation` and `writtenNoTrainingConfirmation`
are hard-coded `false` and must not be flipped by code. Do not let a public page claim
more than those flags say.

---

## 3. Supabase

Supabase is auth, the primary Postgres and RLS. Three client constructors live in
[`src/lib/supabase/`](../../src/lib/supabase): `client.ts` (browser),
`server.ts` (request-scoped, anon key, respects RLS) and `createServiceRoleClient()`
at [`src/lib/supabase/server.ts:52`](../../src/lib/supabase/server.ts), which uses the
service-role key and **bypasses RLS entirely**. Service-role is used liberally in
cron routes and admin paths. Every one of those call sites is carrying the full
authority of the database with no row-level net underneath it.

Supabase is also a **mail sender you do not control**. `resetPasswordForEmail`, called
from [`src/app/auth/forgot-password/page.tsx:47`](../../src/app/auth/forgot-password/page.tsx)
and [`src/app/admin/school-provisioning/page.tsx:181`](../../src/app/admin/school-provisioning/page.tsx),
sends through Supabase's own SMTP settings and templates in the Supabase dashboard. No
template file in this repo applies to those messages, so if a password-reset email looks
wrong the fix is not in this codebase.
[`src/app/api/auth/resend-verification/route.ts:185`](../../src/app/api/auth/resend-verification/route.ts)
is the hybrid: it asks Supabase Admin to `generateLink()` and posts the link itself
through Resend, so that one email is ours.

Sign-up verification is soft since 28 April 2026
([`src/lib/auth/email-verification-policy.ts`](../../src/lib/auth/email-verification-policy.ts)):
Stripe checkout, changing the primary email and deleting an account require a verified
address; invites do not.

**The schema does not match the migration history.** Verify against `information_schema`
and run [`scripts/check-schema-drift.mjs`](../../scripts/check-schema-drift.mjs) before
trusting any table named in this chapter.

---

## 4. Stripe

The client is constructed at module scope with `requireEnv`
([`src/lib/stripe.ts:4`](../../src/lib/stripe.ts)), and so are eleven price ids. That
means a missing `STRIPE_PRICE_KS3_GRAMMAR` throws at _import_ time, not at checkout,
and takes down every route that transitively imports `@/lib/stripe`. The IELTS and
IELTS price ids were deliberately switched to soft `|| ''` fallbacks
([`src/lib/stripe.ts:26-31`](../../src/lib/stripe.ts)) after exactly that lesson;
`IELTS_PRICE_IDS` filters empties so "IELTS is not sold yet" degrades to an empty list
rather than a crash. `PARENT_MONTHLY` is not the same shape and should not be read as
though it were: it falls back to the non-empty placeholder `'price_TBD_parent'`, which
no empties filter removes and which would reach Stripe looking like a real price id.

The webhook at [`src/app/api/stripe/webhook/route.ts`](../../src/app/api/stripe/webhook/route.ts)
handles nine event types, with the `case` at the line given:
`checkout.session.completed` (164), `customer.subscription.created` (493),
`.updated` (217), `.deleted` (226), `.trial_will_end` (487), `invoice.paid` (395),
`invoice.payment_failed` (235), `charge.succeeded` (429), `charge.refunded` (433).

[`DEPLOYMENT.md`](../../DEPLOYMENT.md) §4 lists only seven of these to register in the
Stripe dashboard, omitting `trial_will_end` and `charge.refunded`. If the dashboard
was configured from that document, two handled events are never delivered. Verify the
endpoint's event list in Stripe before assuming either works.

The webhook also sends two emails by raw `fetch` to Resend, bypassing the shared
wrapper: the payment-failed notice at line 357 and the trial-ending notice at line 1236. Both `from` `noreply@theenglishhub.app`, both log and swallow on failure because
"email is non-critical" to the webhook's 200.

Remember the identity and subscription rules from the orientation chapters here in
particular: `profiles.subscription_status` is one field per person and a person can
hold several Stripe subscriptions. Reuse `findDuplicateSubscription` from
[`src/lib/billing/duplicate-subscription-guard.ts`](../../src/lib/billing/duplicate-subscription-guard.ts)
rather than writing a per-subscription event straight to that column.

**Money is the account owner's.** Only `sk_test_` keys are on the development machine.
Do not cancel, refund, charge or extend anything; prepare the exact steps instead.

---

## 5. RevenueCat

RevenueCat is the mobile counterpart to Stripe: it owns iOS and Android in-app
purchase state, and the web app receives it two ways.

**Webhook**, [`src/app/api/revenuecat/webhook/route.ts`](../../src/app/api/revenuecat/webhook/route.ts).
Verify, journal into `RevenueCatEvent`, deduplicate on `event.id`, reconcile into the
Prisma `Subscription`, stamp `processedAt`. Journaling _before_ reconciling is
deliberate: RevenueCat retries any non-2xx, and the journal makes the retry an
idempotent no-op. It fails closed with a 500 when `REVENUECAT_WEBHOOK_SECRET` is
absent rather than accepting an unverified payload.

Authentication is a **shared bearer secret echoed in the `Authorization` header**, not
an HMAC over the body ([`src/lib/revenuecat/verify.ts`](../../src/lib/revenuecat/verify.ts)).
The file flags this as `ASSUMPTION(W4)` and both sides are SHA-256 hashed before
`timingSafeEqual` so the comparison is constant time and the secret's length does not
leak. If RevenueCat ever moves to a body signature, this one function is the rewrite.

**Pull**, [`src/app/api/revenuecat/reconcile-self/route.ts`](../../src/app/api/revenuecat/reconcile-self/route.ts).
The mobile client calls this after `restorePurchases()` when RevenueCat believes the
user is entitled but the server still reads as free. It fetches
`api.revenuecat.com/v1/subscribers/{appUserId}` with `REVENUECAT_SECRET_API_KEY`,
synthesises an event and runs the same reconciler. `appUserId` is the **Supabase
uuid**, because mobile calls `Purchases.logIn(supabaseUserId)`, and the route then has
to resolve the Prisma cuid itself. That is the two-identity bridge crossing a service
boundary, and it is exactly where it will bite.

One known asymmetry: `paymentCount` is written only by
[`src/lib/revenuecat/reconcile.ts`](../../src/lib/revenuecat/reconcile.ts) and never
for web customers, so anything reading it treats every web payer as having no payment
history. The Trustpilot retention cron is downstream of that and has consequently
never emailed a web payer.

---

## 6. Email: five transports, no queue

This is the part of the system most likely to be wrong in a way nobody notices,
because every path here is written to fail soft.

| Transport               | Entry point                                                                                                | Used by                                                                                                             | Configured?                                                                                                                        |
| ----------------------- | ---------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| Resend, via the wrapper | `sendViaResend()` [`src/lib/email/resend.ts:31`](../../src/lib/email/resend.ts)                            | Account deletion, resend-verification, weekly student digest, affiliate welcome, guardian consent, admin email test | `RESEND_API_KEY`, documented                                                                                                       |
| Resend, raw `fetch`     | three routes, six call sites, listed below                                                                 | Contact form (x2), school enquiry (x2), two Stripe webhook emails                                                   | same key, no shared error handling                                                                                                 |
| SMTP via nodemailer     | `sendEmail()` [`src/lib/email.ts:45`](../../src/lib/email.ts)                                              | 15 modules including safeguarding, DSAR, school invites, parent linking, weekly parent reports                      | **`SMTP_*` appear in no env documentation**                                                                                        |
| Supabase auth mail      | `resetPasswordForEmail`                                                                                    | Password resets                                                                                                     | Supabase dashboard, outside this repo                                                                                              |
| SendGrid                | `sendTrustpilotInvite()` [`src/lib/trustpilot/send-invite.ts:57`](../../src/lib/trustpilot/send-invite.ts) | Trustpilot invites only                                                                                             | `SENDGRID_API_KEY`, in no env documentation; gated by `TRUSTPILOT_ENABLED`, which the code defaults off and `.env.example` sets on |

### The SMTP problem

`src/lib/email.ts` builds its nodemailer transport at module scope from `SMTP_HOST`,
`SMTP_PORT`, `SMTP_USER` and `SMTP_PASS`
([`src/lib/email.ts:8-16`](../../src/lib/email.ts)). Those four names appear **nowhere**
in [`.env.example`](../../.env.example), nowhere in
[`src/lib/env-validation.ts`](../../src/lib/env-validation.ts) and nowhere in
[`DEPLOYMENT.md`](../../DEPLOYMENT.md). Four places defend against it explicitly, across
three files: [`src/app/api/school/consent/route.ts:83,219`](../../src/app/api/school/consent/route.ts)
skips the send when `SMTP_HOST` is unset, and
[`src/lib/parental-consent.ts:390`](../../src/lib/parental-consent.ts) gates on it while
`:581` gates on neither `RESEND_API_KEY` nor `SMTP_HOST` being set. That is strong
evidence it is expected to be missing. Everything else calls `sendEmail()` regardless, gets
`{success:false, error}` back, logs it and carries on.

I could not verify from this machine whether `SMTP_HOST` is set in the Vercel
production environment. **Check that before anything else in this chapter.** If it is
not set, then the following have never been delivered: safeguarding alerts to the
designated lead, DSAR acknowledgements, parent-child link notifications, school
invitations, bulk-import completion notices, dormancy warnings, data-retention
notices, weekly parent reports and the Trustpilot retention invite. Each of those has
a caller that reports success to the user.

`verifyEmailConnection()` at [`src/lib/email.ts:131`](../../src/lib/email.ts) exists to
prove the transport works. Nothing calls it.

### The Resend wrapper and its bypasses

`sendViaResend()` is a deliberate thin `fetch` wrapper rather than the `resend` SDK,
to keep Vercel cold starts down; the `resend` package is genuinely absent from
[`package.json`](../../package.json). It is safe by default: no key means
`{sent:false, reason:'no-key'}` and a `console.warn`, never a throw, so "the
user-facing success state should never depend on email delivery".

Three routes skip it and call `https://api.resend.com/emails` directly, at six call
sites in all: [`src/app/api/contact/route.ts:118,139`](../../src/app/api/contact/route.ts),
[`src/app/api/school-inquiry/route.ts:130,149`](../../src/app/api/school-inquiry/route.ts)
and [`src/app/api/stripe/webhook/route.ts:357,1236`](../../src/app/api/stripe/webhook/route.ts).
(A fourth file, [`src/app/api/admin/email-status/route.ts:87`](../../src/app/api/admin/email-status/route.ts),
also calls Resend by raw `fetch`, but against `/domains` rather than `/emails`; it sends
nothing.) They duplicate the auth header, the payload shape
and the error handling, and none of them tag their sends, so those messages are
invisible in Resend's tag-based analytics. If you are consolidating, this is the
cheapest correct refactor in the file set.

Domain verification is the usual failure: Resend rejects sends from an unverified
domain. [`src/app/api/admin/email-status/route.ts`](../../src/app/api/admin/email-status/route.ts)
calls Resend's `/domains` API and [`/admin/email-diagnostics`](../../src/app/admin/email-diagnostics/page.tsx)
renders the DNS records that must be added **at Cloudflare**. `theenglishhub.app` must
read `verified` there or nothing sends.

### Where the templates live, and which are dead

Four separate template stores, three of them mostly unused:

- [`src/lib/email-templates.ts`](../../src/lib/email-templates.ts) - 1,005 lines, 21
  exported HTML builders. **Four are used.** `parentLinkedEmail` and
  `studentLinkedNotificationEmail` by [`src/app/api/parent/link/route.ts`](../../src/app/api/parent/link/route.ts);
  `trialEndingEmail` and `renewalReminderEmail` by
  [`src/lib/renewal-reminders.ts`](../../src/lib/renewal-reminders.ts), which is itself
  dead (below). The other seventeen, including `welcomeEmail`, `passwordResetEmail`,
  `paymentFailedEmail`, `dsarAcknowledgementEmail`, `schoolWelcomeEmail` and
  `studentWelcomeEmail`, have no caller anywhere in `src/`. They look live. They are not.
- [`src/lib/email-templates/`](../../src/lib/email-templates) - the current directory.
  `parent-consent.ts` and `trial-lifecycle.ts` are wired, to
  [`src/app/api/school/consent/route.ts`](../../src/app/api/school/consent/route.ts) and
  [`src/app/api/cron/trial-ending/route.ts`](../../src/app/api/cron/trial-ending/route.ts)
  respectively. `student-weekly.ts` and `teacher-weekly.ts` and `parent-weekly.ts` have
  no production caller; `buildStudentWeeklyEmail` is referenced only by its own test.
- [`src/lib/email/templates/weekly-student.tsx`](../../src/lib/email/templates/weekly-student.tsx)
  - the one the weekly student digest cron actually renders.
- [`src/emails/weekly-parent-report.tsx`](../../src/emails/weekly-parent-report.tsx) -
  the one the weekly parent cron actually renders. The `.tsx` extension is misleading:
  its own header says React Email is not a dependency and it hand-rolls an HTML string.

Two whole modules are dead and both are traps because they read as production code:

- [`src/lib/renewal-reminders.ts`](../../src/lib/renewal-reminders.ts) implements DMCC
  Act 2024 renewal reminders. Its own comment at line 118 says it "is currently NOT
  wired to a cron route". Nothing calls `checkAndSendReminders()`. If someone believes
  the product meets the DMCC reminder duty because this file exists, they are wrong.
- [`src/lib/weekly-report.ts`](../../src/lib/weekly-report.ts) has
  `[PHASE:db-integration] This file currently returns mock data` on line 4 and no
  caller for `sendWeeklyReport()`.

### The Trustpilot BCC pipeline inside sendEmail

`sendEmail()` grew an optional `trustpilotTrigger` argument. When set, it calls
`shouldBccTrustpilot()` ([`src/lib/trustpilot/should-bcc.ts`](../../src/lib/trustpilot/should-bcc.ts)),
and on an `ok` result appends `TRUSTPILOT_INVITE_EMAIL` to BCC and writes a
`trustpilot_invite` row. The gate refuses under-18s outright, and refuses anyone with
`marketingEnabled=false` or `aiOptOut=true`, plus a 12-month per-trigger and 90-day
global dedup. Failures in the whole pipeline are caught and logged so they cannot
block the primary send. This is the only place a marketing-adjacent recipient is added
to a transactional email, and the age gate in it is a compliance control, not a nicety.

---

## 7. The published address book

Seventeen `@theenglishhub.app` addresses are rendered to users or used as senders from
`src/` alone, and more appear in `docs/` and root markdown
(`reviewer+apple@`, `reviewer+google@`, `partnerships@`, `founding-schools@`,
`affiliates@`, `accessibility@`, `partners@`, `billing@`, `review@`). **I could not
determine which of these mailboxes actually exist.** There is no alias list in the
repo; [`src/lib/trustpilot/send-invite.ts:15-19`](../../src/lib/trustpilot/send-invite.ts)
refers to configuring aliases via Cloudflare Email Routing in a worksheet that is not
in this repository. Verifying the list in the Cloudflare dashboard is a short job and
overdue.

| Address                                    | Published at                                                                                                                                                           | Why it matters                                                                   |
| ------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `dpo@`                                     | [`src/app/legal/privacy/page.tsx`](../../src/app/legal/privacy/page.tsx), `/legal/privacy-qatar`, `/help/contact`, plus four API routes that tell users to write to it | **Regulatory.** A UK GDPR data-protection contact published on a privacy notice  |
| `safeguarding@`                            | [`src/app/safeguarding/page.tsx`](../../src/app/safeguarding/page.tsx) (three times), `/legal/complaints`, `/help/contact`, `/legal/privacy`                           | **Regulatory.** The designated safeguarding lead contact on a children's product |
| `privacy@`, `legal@`, `press@`, `schools@` | [`src/config/company.ts:76`](../../src/config/company.ts) and the i18n legal dictionaries                                                                              | Contractual and procurement-facing                                               |
| `support@`                                 | Stripe webhook emails, FAQs, consent pages, the duplicate-subscription guard                                                                                           | Promised to customers inside billing emails                                      |
| `complaints@`                              | `/legal/complaints`, `/help/contact`                                                                                                                                   | Complaints procedure                                                             |
| `security@`                                | `/help`, `/legal/privacy`                                                                                                                                              | Vulnerability disclosure                                                         |
| `safety@`                                  | `/legal/online-safety`                                                                                                                                                 | Online Safety Act contact                                                        |
| `investors@`                               | `/growth`                                                                                                                                                              | Marketing                                                                        |
| `founder@`                                 | `/auth/login`, `/auth/resend-verification`                                                                                                                             | Legacy-account help                                                              |
| `hello@`                                   | one revision page                                                                                                                                                      | Almost certainly a stray                                                         |
| `reviews@`                                 | Trustpilot sender identity                                                                                                                                             | Only used when the flag is on                                                    |
| `noreply@`                                 | Default `from` for both Resend and SMTP                                                                                                                                | Sender identity, not a mailbox                                                   |
| `admin@`                                   | [`src/lib/admin-auth.ts:4`](../../src/lib/admin-auth.ts)                                                                                                               | **Default admin allowlist when `ADMIN_EMAILS` is unset.** See below              |
| `dmarc@`                                   | `/admin/email-diagnostics` DNS guidance                                                                                                                                | DMARC reporting target                                                           |

Two things in that table are live problems.

**The safeguarding and DPO addresses are contradicted by the code.**
[`src/app/legal/privacy/page.tsx:5-8`](../../src/app/legal/privacy/page.tsx) carries a
comment saying the page uses `cj@upskillenergy.com` "pending dedicated mailbox
provisioning" for `dpo@` and `safeguarding@`. The page carries eight textual occurrences
of that address, but two are inside the header comment itself and the remaining six are
three `mailto:` links written twice each, in the href and again as the link text - so a
reader sees it three times. Meanwhile
[`src/app/safeguarding/page.tsx`](../../src/app/safeguarding/page.tsx),
[`src/app/legal/complaints/page.tsx:140`](../../src/app/legal/complaints/page.tsx) and
[`src/app/help/contact/page.tsx:202`](../../src/app/help/contact/page.tsx) publish
`safeguarding@theenglishhub.app` to children and parents as the route for a
safeguarding concern. The actual alerting code agrees with the privacy page, not the
safeguarding page: [`src/app/api/safeguarding/report/route.ts:17-18`](../../src/app/api/safeguarding/report/route.ts)
routes every in-product report to a hard-coded founder mailbox at `upskillenergy.com`
unless `DSL_EMAIL` and `DSL_FALLBACK_EMAIL` are set, with a comment explaining that
`safeguarding@` is "not-yet-provisioned". So a child who emails the address on the
safeguarding page may reach nothing, while a child who uses the in-product form reaches
a person. Resolve that by provisioning the mailbox, not by editing the page.

**`admin@theenglishhub.app` is the fallback admin allowlist.** If `ADMIN_EMAILS` is
unset in any environment, anyone holding an account at that address passes
`verifyAdmin()`. It is a default, not a documented account. Set `ADMIN_EMAILS`
explicitly everywhere.

Also note `SCHOOL_INQUIRY_EMAIL`
([`src/app/api/school-inquiry/route.ts:9`](../../src/app/api/school-inquiry/route.ts))
and the two `DSL_*` variables default to the same founder mailbox and appear in no env
documentation. `AFFILIATE_ADMIN_EMAIL` is documented in
[`.env.example`](../../.env.example) and in
[`src/app/api/affiliate/README.md`](../../src/app/api/affiliate/README.md) but is read
by no code at all - both affiliate application routes carry a
`TODO(Phase-5)` where the notification would go, so **nobody is emailed when someone
applies to be an affiliate**.

---

## 8. Affiliate programmes: there are two

Two programmes, two table families, two economics, both live, distinguished only by a
plural in the URL. This trips everyone.

|              | Programme A                                                                                                                                                     | Programme B                                                                                                                                                                                                                 |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Routes       | `/api/affiliates/*` (plural)                                                                                                                                    | `/api/affiliate/*` (singular)                                                                                                                                                                                               |
| Tables       | `affiliates`, `affiliate_referrals`, `affiliate_payouts` ([`supabase/migrations/002_affiliate_system.sql`](../../supabase/migrations/002_affiliate_system.sql)) | `affiliate_accounts`, `affiliate_links`, `affiliate_clicks`, `affiliate_conversions`, `affiliate_payout_batches` ([`supabase/migrations/20260420_affiliates_v2.sql`](../../supabase/migrations/20260420_affiliates_v2.sql)) |
| Economics    | Flat GBP per plan, integer tiers, Rewardful-attributed                                                                                                          | Flat GBP per confirmed signup on a five-step lifetime ladder                                                                                                                                                                |
| Confirm cron | `/api/cron/affiliate-confirm`, 30-day window                                                                                                                    | `/api/cron/affiliate-confirm-v2`, 60-day window                                                                                                                                                                             |
| Attribution  | Rewardful referral id from Stripe session metadata ([`src/app/api/stripe/webhook/route.ts:168-174`](../../src/app/api/stripe/webhook/route.ts))                 | `teh_aff` cookie, 30-day last-touch, plus code-based conversions from the webhook at line 640                                                                                                                               |

Three warnings.

**The README is wrong about the economics.**
[`src/app/api/affiliate/README.md`](../../src/app/api/affiliate/README.md) describes
Bronze/Silver/Gold at 10/15/25 per cent of order value, and so does the docstring at
the top of [`src/app/api/affiliate/track-conversion/route.ts`](../../src/app/api/affiliate/track-conversion/route.ts).
The code calls `calculateCommissionPence()` from
[`src/lib/affiliate/tiers.ts:154`](../../src/lib/affiliate/tiers.ts), which pays a flat
five to ten pounds per confirmed signup on a lifetime-count ladder, and writes
`commission_rate: 0`. The percentage model was replaced on 19 April 2026. Thirteen
marketing documents still promise 20 per cent recurring; the site copy was corrected
and the documents were not.

**The route naming does not match the README's mapping.** The README says the plural
routes are the legacy Rewardful system, but `/api/affiliates/enrol` writes to
`affiliate_accounts`, the v2 table, at `status='active'` and `tier='bronze'`. Only
`/api/affiliates/apply` touches the legacy `affiliates` table. Check the table, not
the path.

**Rewardful is optional and thinly wired.** [`src/lib/rewardful.ts`](../../src/lib/rewardful.ts)
is a plain REST wrapper that throws if `REWARDFUL_API_SECRET` is unset; the client-side
snippet is loaded by `<ConsentGatedAnalytics />` only after analytics consent, so
attribution silently does not happen for anyone who declines cookies.

---

## 9. Monitoring and analytics

**Sentry** is initialised from `sentry.server.config.ts` alone.
[`src/instrumentation.ts`](../../src/instrumentation.ts) imports that one file in _both_
branches: `await import('../sentry.server.config')` at line 3 under
`NEXT_RUNTIME === 'nodejs'`, and the same import again at line 22 under
`NEXT_RUNTIME === 'edge'`. `sentry.edge.config.ts` exists and duplicates the scrubbers,
but nothing in the repository imports it, so an edit to that file has no runtime effect
at all. The scrubbing is nevertheless in force on both runtimes, because the server
config is what actually loads on both: it deletes `user.email` and `user.username`,
replaces `request.data` with `[Filtered]`, drops cookies and strips breadcrumb bodies,
which is the control that stops student essay text reaching Sentry. Either delete
`sentry.edge.config.ts` or wire it into the edge branch - left as it is, it invites
someone to harden a scrubber that never runs.

There is a second, competing instrumentation file at the repo root,
[`instrumentation.ts`](../../instrumentation.ts), which duplicates the scrubbers and
additionally exports `onRequestError = Sentry.captureRequestError`. **Next.js resolves
only one.** The compiled `.next/server/instrumentation.js` in the working tree contains
the `env-validation` import and no `onRequestError`, which means `src/instrumentation.ts`
wins and the root file never runs. The PII scrubbing is fine either way because
`sentry.server.config.ts` carries it. What is lost is `onRequestError`, so server-component render
errors are probably not being captured. I inferred this from a local build artifact
rather than from Next's resolution source, so confirm it before acting; the fix either
way is to delete one of the two files.

`SENTRY_DSN` gates `enabled`, so without it Sentry is a no-op that reports nothing and
says nothing. Cron failures reach Sentry only through `runCron()`
([`src/lib/cron/observability.ts`](../../src/lib/cron/observability.ts)), which wraps
the body, captures exceptions with a `cron:<name>` tag and returns 500 so Vercel
retries. Crons that do not use `runCron` are invisible.

**PostHog** ([`src/lib/posthog.ts`](../../src/lib/posthog.ts)) is EU-hosted and every
capture passes `canCaptureAnalytics()`, which returns false unless the
`cookie-consent` localStorage value is `all` **and** `eh-is-minor` is not `'true'`.
That is PECR reg. 6 plus Children's Code standard 15 enforced client-side. Note the
weakness: both signals are localStorage, so a cleared browser defaults a minor to
non-minor. The `isMinorFlagged()` fallback returns `true` server-side and `false` on a
storage error, which is the wrong way round for the error case.

**GA4** ([`src/lib/gtag.ts`](../../src/lib/gtag.ts)) is relayed server-side through
`/api/ga4/track` rather than gtag.js, because content blockers kill roughly a third of
UK traffic to `google-analytics.com` and GA4 stayed empty while PostHog kept receiving.
The route checks a first-party `eh-cookie-consent` cookie rather than trusting the
request body, and never forwards the visitor IP.

**Vercel Analytics and Speed Insights** load through `<ConsentGatedAnalytics />` in
[`src/app/layout.tsx:207`](../../src/app/layout.tsx), behind the same consent gate.

There is no external uptime monitor. That is the one accurate line in
[`MONITORING.md`](../../MONITORING.md), which is otherwise wrong about the cron count,
the Sentry config files and PostHog.

---

## 10. Upstash and rate limiting

Upstash is the _preferred_ rate-limit backend and is **not configured in production**.
[`src/lib/rate-limit.ts`](../../src/lib/rate-limit.ts) now prefers, in order: Upstash
Redis, then a Postgres fixed-window counter in `rate_limit_counter`, then a
process-local `Map`. Before 18 September 2026 there was no Postgres tier, so all 208
call sites were served by the Map, and on serverless a per-instance map that resets on
cold start is not a limit at all. The Postgres tier exists because the same problem was
already solved that way for the free-allowance meter.

Two design decisions you should not undo without reading the file's rationale: it is a
**fixed** window, accepting a 2x burst at the boundary, because a sliding window costs
either a row per request or two round trips; and it **fails open** on a database error,
because it is an abuse control, not an authorisation control. The things that must fail
closed are elsewhere. `consumeAllowance()` in
[`src/lib/usage/free-allowance.ts`](../../src/lib/usage/free-allowance.ts) fails closed
because it guards spend, and the two compose: if Postgres is down the limiter allows
the request and the allowance meter then throws a 503 before any model call is made.

`RATE_LIMIT_REQUIRE_REDIS=true` ([`src/lib/rate-limit.ts:947`](../../src/lib/rate-limit.ts))
turns a missing Upstash config into a startup failure. Leave it unset until the two
variables are set and verified, then turn it on so the state cannot silently regress.

No raw IP is ever written to the counter table; keys are hashed first.

---

## 11. Trustpilot

Three paths, and worth understanding before you flip the flag.

1. **BCC on transactional mail** - `sendEmail(..., {trustpilotTrigger, userId})`, gated
   by `shouldBccTrustpilot()`. Used by
   [`/api/cron/trustpilot-retention-invite`](../../src/app/api/cron/trustpilot-retention-invite/route.ts).
2. **SendGrid direct** - `fireStudentFirstMark` from
   [`/api/mark`](../../src/app/api/mark/route.ts),
   `fireStudentFirstMark7dFollowup` and `fireStudent90dRetention` from their crons, all
   through [`src/lib/trustpilot/trigger-invite.ts`](../../src/lib/trustpilot/trigger-invite.ts)
   into `sendTrustpilotInvite()`.
3. **InviteJS client-side** - [`src/lib/trustpilot/fire-invite-js.ts`](../../src/lib/trustpilot/fire-invite-js.ts),
   deduplicated server-side via `/api/trustpilot/fired-check`.

**Establish first whether the flag is actually off.** `isEnabled()` in
[`src/lib/trustpilot/send-invite.ts`](../../src/lib/trustpilot/send-invite.ts) requires
`TRUSTPILOT_ENABLED === 'true'`, so the code's default is off - but
[`.env.example:264`](../../.env.example) ships `TRUSTPILOT_ENABLED="true"`, annotated
`Real value: "true" (production)`. Anyone who copied that file to `.env.local` has the
flag on, and the comment asserts production has it on too. Read the Vercel environment
rather than assuming either way, and remember that `SENDGRID_API_KEY` is in no env
documentation at all, so "flag on" and "invites sending" are two different questions.

**Path 2 fails silently, not loudly, and that is the trap.** With the flag on and no
SendGrid account behind it, `sendTrustpilotInvite()` throws its own
`SENDGRID_API_KEY not set` at [`src/lib/trustpilot/send-invite.ts:89`](../../src/lib/trustpilot/send-invite.ts),
inside a `try` whose `catch` at
[`send-invite.ts:142`](../../src/lib/trustpilot/send-invite.ts) converts it to
`{ sent: false, error: 'SENDGRID_API_KEY not set' }`. Nothing propagates: the
function's own docstring at line 54 promises it "never throws on expected conditions".
The cron logs the result and carries on with a 200. So the gate opens, nothing is
delivered, and nothing is raised. Do not set that flag as a one-line change; if you do,
read the cron's own output rather than waiting for an error. Path 2 also sends
from `reviews@theenglishhub.app`, which needs a Cloudflare Email Routing alias plus SPF
and DKIM authorising SendGrid, all separate from the Resend DKIM records.

The four canonical BCC triggers are in
[`src/lib/trustpilot/trigger-names.ts`](../../src/lib/trustpilot/trigger-names.ts) and
must stay in step with the `trigger` CHECK constraint on the `trustpilot_invite` table.
The SendGrid path uses trigger names outside that set, which is legitimate but means
the two paths do not share a validator.

---

## 12. Cloudflare and Vercel

**Cloudflare** holds DNS for `theenglishhub.app` and sits in front of Vercel as CDN
and WAF. It has no configuration in this repository. Three things depend on it that you
would not guess: Resend's DKIM CNAMEs (without which email is rejected, which is why
`/admin/email-diagnostics` renders Cloudflare DNS instructions), email routing for
every `@theenglishhub.app` alias in §7, and edge caching that the language toggle has
to work around explicitly
([`src/components/layout/language-toggle.tsx:66`](../../src/components/layout/language-toggle.tsx)).

**Vercel** is hosting, the env store and the cron scheduler.
[`vercel.json`](../../vercel.json) pins region `lhr1`, a 60-second function ceiling for
all API routes, and fifteen crons. Crons require a Pro or Enterprise plan. `CRON_SECRET`
authenticates every `/api/cron/*` route with a `timingSafeEqual` bearer comparison, and
the same pattern guards `/api/health/ai`.

Nine of the fifteen crons contain a path that sends mail to a human, and **two of those
nine are switched off by an environment variable**. Check the flag before you
investigate delivery, SMTP or Resend: an unset variable is by far the commonest reason
an expected email does not exist.

Seven send through the SMTP or Resend transports:

| Cron                          | Schedule     | Note                                                                                                                                                                                                                                                                                           |
| ----------------------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `trial-ending`                | `0 9 * * *`  | **No-op unless `TRIAL_LIFECYCLE_EMAILS_ENABLED=true`** ([`src/app/api/cron/trial-ending/route.ts:136`](../../src/app/api/cron/trial-ending/route.ts), under a comment reading "Feature flag (default OFF)"). Returns `{ok:true, skipped:'disabled'}` with a 200, so the schedule looks healthy |
| `dormancy-check`              | `30 3 * * *` |                                                                                                                                                                                                                                                                                                |
| `data-retention`              | `0 4 * * *`  | Sends from [`src/lib/data-retention.ts:620`](../../src/lib/data-retention.ts)                                                                                                                                                                                                                  |
| `school-access`               | `0 5 * * *`  |                                                                                                                                                                                                                                                                                                |
| `weekly-parent-reports`       | `0 16 * * 0` | **No-op unless `WEEKLY_PARENT_REPORTS_ENABLED=true`** ([`src/app/api/cron/weekly-parent-reports/route.ts:99`](../../src/app/api/cron/weekly-parent-reports/route.ts)). Deliberately off: the 2026-08 audit found no working unsubscribe path for parent reports                                |
| `weekly-student-reports`      | `0 17 * * 0` | No kill switch, by design                                                                                                                                                                                                                                                                      |
| `trustpilot-retention-invite` | `0 15 * * *` |                                                                                                                                                                                                                                                                                                |

Two more send through SendGrid whenever `TRUSTPILOT_ENABLED=true`:
`trustpilot-followup-7d` (`45 3 * * *`) and `trustpilot-retention-90d` (`15 4 * * *`),
both calling `fireStudentFirstMark7dFollowup` and `fireStudent90dRetention` in
[`src/lib/trustpilot/trigger-invite.ts`](../../src/lib/trustpilot/trigger-invite.ts),
which reach `sendTrustpilotInvite()`. See §11 before assuming those are dormant.

The parent digest is scheduled an hour before the student digest so it lands first in a
shared family inbox. That ordering is deliberate, and currently moot: while
`WEEKLY_PARENT_REPORTS_ENABLED` is unset only the student digest is sent, so there is
nothing for it to land ahead of. The remaining six crons are in
[`vercel.json`](../../vercel.json).

Deployment runs two ways at once. [`.github/workflows/deploy.yml`](../../.github/workflows/deploy.yml)
gates on lint, typecheck, tests and a critical-only production `npm audit`, then
deploys with a SHA-pinned Vercel action; Vercel's own Git integration also builds from
`main`. [`.github/workflows/ci.yml`](../../.github/workflows/ci.yml) duplicates the
quality gate. Assume a push to `main` reaches production.

---

## 13. Secrets

Do not print any of these values anywhere, including into a terminal that gets pasted
into a commit. **The repo is public on GitHub.**

| Where                                                    | What                                                                                                                                                               | What it grants an attacker                                                                                                                                                                           |
| -------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`.env.local`](../../.env.local)                         | **This is PRODUCTION.** Contains `SUPABASE_SERVICE_ROLE_KEY`, `ANTHROPIC_API_KEY`, `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`, `DATABASE_URL`, `DIRECT_URL`      | Full read and write of the live database with RLS bypassed, including children's records. Direct Postgres. Unlimited spend on the Anthropic key. Stripe API access at whatever the key's mode allows |
| `.env.production.fresh`                                  | A dump of a Vercel production environment including the service-role and Stripe keys                                                                               | The same. Both files are gitignored; confirm that before any `git add`                                                                                                                               |
| [`secrets/revenuecat-webhook-secret.txt`](../../secrets) | RevenueCat webhook bearer secret                                                                                                                                   | Forge subscription events and grant paid entitlements to any account                                                                                                                                 |
| `secrets/AuthKey_3ZUP487476.p8`                          | App Store Connect API key, per [`docs/EAS_BUILD_RUNBOOK.md:36`](../EAS_BUILD_RUNBOOK.md)                                                                           | Manage and submit builds to the App Store                                                                                                                                                            |
| `secrets/AuthKey_J748RK82Z7.p8`                          | APNs push key, per [`docs/EAS_BUILD_RUNBOOK.md:37`](../EAS_BUILD_RUNBOOK.md)                                                                                       | Send push notifications to every installed device                                                                                                                                                    |
| Vercel env store                                         | The production truth for everything above plus `CRON_SECRET`, `CSRF_SECRET`, `IP_HASH_SALT`, `RESEND_API_KEY`, `REVENUECAT_SECRET_API_KEY`, `REWARDFUL_API_SECRET` | `CRON_SECRET` alone lets an attacker trigger every cron, including `dormancy-purge` and `data-retention`, which delete records                                                                       |
| GitHub Actions secrets                                   | `VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID`, plus the Azure publish profile                                                                               | Deploy arbitrary code to production                                                                                                                                                                  |

`secrets/` and `*.p8` are gitignored ([`.gitignore`](../../.gitignore)), as are
`.env.local` and `.env.production.*`. That protection is the only thing between a
`git add -A` and publishing the service-role key, which is why the standing rule in
[`CLAUDE.md`](../../CLAUDE.md) is to commit by explicit path.

`IP_HASH_SALT` deserves a note. It is classed as recommended rather than required in
[`src/lib/env-validation.ts`](../../src/lib/env-validation.ts), and `resolveIpSalt()` at
[`src/lib/usage/free-allowance.ts:158`](../../src/lib/usage/free-allowance.ts) resolves
it in three steps: `IP_HASH_SALT` if set; otherwise a salt derived as
`sha256('free-allowance-ip-salt:' + CRON_SECRET)`, with a `console.warn`; and only if
**both** are absent, and only in production, a `FreeAllowanceConfigError` that the
routes turn into a 503. The privacy requirement is not relaxed by the fallback - the
salt must still be secret, because a known or absent salt makes the stored hash
reversible across the whole IPv4 space and therefore still personal data. What changed
is where the secret may come from.

Set `IP_HASH_SALT` explicitly anyway: on the derived path, rotating `CRON_SECRET`
resets every anonymous bucket.

The history is the lesson. This function originally read `IP_HASH_SALT` and **threw** in
production when it was unset. That shipped, the variable was not set in Vercel, and the
free IELTS diagnostic - the top-of-funnel lead magnet - returned 503 to every signed-out
visitor before it ever reached the model. The fallback was added on 17 September 2026
and the file's own header records why. Note the direction of travel: a missing
configuration value must not take a learner-facing feature down. Do not reinstate the
throw, and do not read a working diagnostic as proof that the salt is set - it may be
running on the derived fallback. The stale docblock a few lines above `resolveIpSalt()`
still advertises the old `@throws` behaviour; believe the code.

---

## 14. Triage order

**Email:** establish which of the five transports the failing path uses before anything
else. **AI:** `GET /api/health/ai` with the `CRON_SECRET` bearer answers "are the model
ids still callable" in one call; run it before reading code. **Billing:** confirm the
Stripe dashboard is subscribed to all nine events in §4, and whether the customer holds
more than one subscription. **Mobile entitlements:** look for a `RevenueCatEvent` row
with a null `processedAt`; the payload survives even when reconciliation failed.
**A cron that did not run:** Vercel's cron log, then Sentry for a `cron:<name>` tag, and
note that a cron not wrapped in `runCron()` leaves no trace of either kind. **Always:**
run [`scripts/check-schema-drift.mjs`](../../scripts/check-schema-drift.mjs) before
believing that any table or column named in this chapter exists.
