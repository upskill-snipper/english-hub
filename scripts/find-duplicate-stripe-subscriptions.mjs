#!/usr/bin/env node
// scripts/find-duplicate-stripe-subscriptions.mjs
// ============================================================================
// REPORT ONLY - find customers who are being billed twice for the same thing
// ============================================================================
//
// WHY THIS EXISTS
// ---------------
// On 18 September 2026 a customer wrote in to say we had tried to charge her
// twice. She was right. Her Stripe customer carried TWO subscriptions for the
// same Teacher Annual plan, both created on 8 September:
//
//   - one paid GBP 67.99 on 16 September and is running normally;
//   - the other has been attempting the same GBP 67.99 against the same card
//     ever since, failing on insufficient funds, and is still retrying.
//
// Nothing on our side could see it. `Subscription.userId` is `@unique` in
// `prisma/schema.prisma`, so the second subscription did not appear as a
// second row - it OVERWROTE the first one. There was no query anybody could
// have run against our own database that would have returned two. The only
// system that knows this customer has two subscriptions is Stripe, so this
// script asks Stripe and nothing else.
//
// This is the companion to `scripts/reconcile-stripe-subscriptions.mjs`.
// That script compares Supabase `profiles` to the Prisma billing rows and
// deliberately does not import the Stripe SDK at all. It therefore CANNOT
// detect this defect: two Stripe subscriptions collapse into one Prisma row
// and one profile, which is exactly the state it reads as healthy. Reconcile
// finds records we failed to write. This finds charges we should never have
// made. Run both.
//
// WHY THIS FILE IS READ-ONLY, AND WHY THAT IS ENFORCED IN CODE
// -----------------------------------------------------------
// The population this script exists to look at is, by definition, customers
// whose money we have already handled wrongly. The instinct on finding a
// duplicate is to cancel it, and that instinct is the danger: at the moment
// of discovery we do not yet know which of the two subscriptions is the one
// the customer wants to keep, whether the failing one is a duplicate or a
// second product they genuinely bought, or whether a refund is owed. Getting
// that wrong cancels the subscription somebody has paid for.
//
// So the safety is not a rule in a comment that a later edit can quietly
// drop. `readOnlyStripe()` below hands the rest of this file an object that
// has exactly two methods on it - `subscriptions.list` and `customers.list` -
// and no others. There is no `create`, `update`, `cancel`, `del` or `refund`
// reachable from any line of code in this file, because those properties do
// not exist on the object the code holds. A future edit that tries to cancel
// something does not slip past review; it throws a TypeError immediately.
//
// Money moves when a person decides it moves, in the Stripe dashboard, having
// read this report. Never from here.
//
// WHAT IT LOOKS FOR
// -----------------
// Two groupings, because "charged twice" has two distinct shapes and the
// duplicate-subscription guard shipped in
// `src/lib/billing/duplicate-subscription-guard.ts` only closes the first.
//
//   1. GROUPED BY STRIPE CUSTOMER ID - one customer, several live
//      subscriptions. This is the shape that reached the customer above, and
//      the shape the guard now blocks at checkout.
//
//   2. GROUPED BY EMAIL ACROSS CUSTOMER RECORDS - two Stripe CUSTOMER objects
//      with the same email address, each holding its own subscription. The
//      guard calls `stripe.subscriptions.list({ customer: stripeCustomerId })`,
//      so it is scoped to one customer record and is structurally blind to
//      this. The customer's card is still charged twice; their bank statement
//      cannot tell the two shapes apart. This grouping is the only way to see
//      it, and it is the reason `customers.list` is called at all.
//
// FINDING STATES
// --------------
//   DUPLICATE_PRICE          One Stripe customer holds two or more LIVE
//                            subscriptions carrying the same price. There is
//                            no legitimate reading of this. Highest severity.
//
//   DUPLICATE_CUSTOMER       Two or more Stripe customer records share an
//                            email address and more than one of them holds a
//                            live subscription. Same money, different shape.
//
//   MULTIPLE_LIVE            One customer, several live subscriptions on
//                            DIFFERENT prices. Often legitimate - Pro and
//                            IELTS are separate products a learner may hold at
//                            once (see `isIeltsOnlySubscription` in the
//                            webhook) - so this is reported for a human to
//                            read, not asserted as a defect.
//
//   SHARED_EMAIL_ONE_LIVE    Duplicate customer records, only one live
//                            subscription between them. Nobody has been
//                            charged twice. It is listed because the guard is
//                            keyed on customer id, so this account can still
//                            buy the same plan a second time tomorrow.
//
//   DUNNING                  A live subscription whose latest invoice is
//                            failing. Not a duplicate, reported separately.
//                            It is here because the entitlement consequence is
//                            the same: `invoice.payment_failed` in the webhook
//                            resolves the customer by `stripe_customer_id`
//                            alone and sets `profiles.subscription_status =
//                            'past_due'`, and `hasActiveSubscription` in
//                            `src/lib/course-access.ts` requires exactly
//                            'pro'. Every customer on this list is locked out
//                            of AI marking right now.
//
// The two are combined in one flag worth looking at before anything else:
//
//   entitlementPoisoning     The customer holds a paying subscription AND a
//                            failing one. Both write to the same profile row,
//                            so the failing one has revoked the access the
//                            paying one bought. This is the case where the
//                            customer is both charged wrongly and cut off.
//
// PRIVACY
// -------
// Email addresses are MASKED by default (f****a@g****.com). Pass `--emails`
// only when you are about to contact these people, and do not leave an
// unmasked report on disk - it is a list of paying customers. Stripe customer
// and subscription ids are always shown and are enough to find the account.
//
// USAGE
// -----
//   node --env-file=.env.local scripts/find-duplicate-stripe-subscriptions.mjs
//   node --env-file=.env.local scripts/find-duplicate-stripe-subscriptions.mjs --emails
//   node --env-file=.env.local scripts/find-duplicate-stripe-subscriptions.mjs --json --out=dupes.json
//
// Flags:
//   --emails          show full email addresses instead of masked ones
//   --json            print the findings as JSON instead of a table
//   --out=<path>      also write the JSON findings to a file
//   --all             include customers with nothing wrong in the findings
//   --max=<n>         stop after scanning n subscriptions (default 5000)
//   --no-customers    skip the customers.list pass (customer-id grouping only)
//
// Required env:
//   STRIPE_SECRET_KEY
//
// EXIT CODE
// ---------
// 0 for every finding, including finding nothing and including finding a
// hundred duplicates. This is a report, not a gate: wiring it into CI as a
// pass/fail would put pressure on whoever reads it to make the number go
// down, and the way to make the number go down is to cancel subscriptions.
// A non-zero exit means the script itself failed to run.
// ============================================================================

import { writeFileSync } from 'node:fs'
import Stripe from 'stripe'

// ── Flags ───────────────────────────────────────────────────────────────────

const argv = process.argv.slice(2)
const SHOW_EMAILS = argv.includes('--emails')
const AS_JSON = argv.includes('--json')
const INCLUDE_CLEAN = argv.includes('--all')
const SKIP_CUSTOMERS = argv.includes('--no-customers')
const OUT_PATH = (argv.find((a) => a.startsWith('--out=')) ?? '').slice('--out='.length) || null
const MAX_RAW = (argv.find((a) => a.startsWith('--max=')) ?? '').slice('--max='.length)
const MAX_OBJECTS = MAX_RAW ? Number.parseInt(MAX_RAW, 10) : 5000

if (!Number.isFinite(MAX_OBJECTS) || MAX_OBJECTS <= 0) {
  console.error('[dupes] --max must be a positive integer')
  process.exit(1)
}

// ── Env ─────────────────────────────────────────────────────────────────────

const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY
if (!STRIPE_SECRET_KEY) {
  console.error(
    '[dupes] Missing STRIPE_SECRET_KEY.\n' +
      '  Did you forget `--env-file=.env.local`?\n' +
      '  Example: node --env-file=.env.local scripts/find-duplicate-stripe-subscriptions.mjs',
  )
  process.exit(1)
}

// The key mode goes in the report header. A report that does not say which
// Stripe account it read is a report somebody will one day act on against the
// wrong one.
const KEY_MODE = STRIPE_SECRET_KEY.startsWith('sk_live_')
  ? 'live'
  : STRIPE_SECRET_KEY.startsWith('sk_test_')
    ? 'test'
    : 'unknown'

// ── The read-only Stripe surface ────────────────────────────────────────────

/**
 * Hand back an object carrying ONLY the two list methods this script is
 * allowed to use.
 *
 * This is the enforcement described in the header. The full client is created
 * here and then goes out of scope - the rest of the file never holds a
 * reference to it, so there is no path from any code below to a mutating
 * method. `Object.freeze` stops anything putting one back.
 */
function readOnlyStripe(secretKey) {
  const client = new Stripe(secretKey, {
    // Pinned to the same version the app uses (`src/lib/stripe.ts`) so this
    // report and production are reading identically shaped objects.
    apiVersion: '2026-02-25.clover',
  })

  return Object.freeze({
    subscriptions: Object.freeze({
      list: client.subscriptions.list.bind(client.subscriptions),
    }),
    customers: Object.freeze({
      list: client.customers.list.bind(client.customers),
    }),
  })
}

const stripe = readOnlyStripe(STRIPE_SECRET_KEY)

// ── What counts as live ─────────────────────────────────────────────────────

/**
 * Deliberately the same set as `LIVE_SUBSCRIPTION_STATUSES` in
 * `src/lib/billing/duplicate-subscription-guard.ts`. It is duplicated rather
 * than imported because this is a plain `.mjs` script and the guard is
 * TypeScript behind the `@/` path alias - but the two MUST agree, or this
 * report will describe a population the guard does not actually block. If you
 * change one, change the other.
 *
 * `canceled`, `incomplete_expired` and `paused` are absent: a subscription
 * that ended is not a second charge. `incomplete` is absent: that is a
 * checkout whose payment never completed.
 */
const LIVE_STATUSES = new Set(['active', 'trialing', 'past_due', 'unpaid'])

/** Statuses that mean Stripe is currently chasing money on this subscription. */
const FAILING_STATUSES = new Set(['past_due', 'unpaid'])

// ── Helpers ─────────────────────────────────────────────────────────────────

/** f****a@g****.com - enough to recognise an account, not enough to be a mailing list. */
function maskEmail(email) {
  if (!email || typeof email !== 'string') return null
  if (SHOW_EMAILS) return email
  const at = email.indexOf('@')
  if (at < 1) return '***'
  const local = email.slice(0, at)
  const domain = email.slice(at + 1)
  const dot = domain.lastIndexOf('.')
  const domainName = dot > 0 ? domain.slice(0, dot) : domain
  const tld = dot > 0 ? domain.slice(dot) : ''
  const squash = (s) => (s.length <= 2 ? `${s[0] ?? '*'}*` : `${s[0]}****${s[s.length - 1]}`)
  return `${squash(local)}@${squash(domainName)}${tld}`
}

/** Epoch seconds → ISO string, tolerating null/undefined. */
function iso(seconds) {
  if (!seconds && seconds !== 0) return null
  const d = new Date(seconds * 1000)
  return Number.isNaN(d.getTime()) ? null : d.toISOString()
}

function money(minor, currency) {
  if (minor === null || minor === undefined) return null
  return `${(minor / 100).toFixed(2)} ${(currency ?? '').toUpperCase()}`.trim()
}

/**
 * The set of plan identities a subscription bills on.
 *
 * TWO IDENTITIES PER ITEM, for the reason the guard gives: `/api/stripe/
 * checkout` passes a catalogue price id, but `/api/promo/redeem` builds an
 * ad-hoc `price_data` line so the discount is baked in, which gives that
 * redemption a price id unique to itself that can never match anything. It
 * stamps the catalogue price it came from onto the product as
 * `metadata.basePriceId`. Reading both means a promo redemption and a standard
 * checkout for the same plan are recognised as the same plan - which is
 * precisely the crossing-over case a price-id comparison alone waves through.
 */
function planKeys(subscription) {
  const keys = new Set()
  for (const item of subscription.items?.data ?? []) {
    const price = item.price
    if (!price) continue
    if (price.id) keys.add(`price:${price.id}`)
    const product = price.product
    if (product && typeof product === 'object' && !product.deleted) {
      const base = product.metadata?.basePriceId
      if (base) keys.add(`price:${base}`)
    }
  }
  return keys
}

/** A human label for what the subscription bills, for the printed report. */
function planLabel(subscription) {
  const parts = []
  for (const item of subscription.items?.data ?? []) {
    const price = item.price
    if (!price) continue
    const product = price.product
    const name =
      product && typeof product === 'object' && !product.deleted ? product.name : (product ?? '')
    const amount = money(price.unit_amount, price.currency)
    const interval = price.recurring?.interval ? `/${price.recurring.interval}` : ''
    parts.push([name, amount ? `${amount}${interval}` : null].filter(Boolean).join(' '))
  }
  return parts.join(' + ') || '(no priced items)'
}

/**
 * Stripe moved `current_period_start` / `current_period_end` off the
 * subscription and onto the subscription item in recent API versions. Read
 * whichever is present rather than asserting one - `readSubscriptionFacts` in
 * `src/lib/billing/subscription-sync.ts` reads the subscription-level field,
 * so a report that only read the item-level one could disagree with the app
 * about the same subscription.
 */
function periodEnd(subscription) {
  const top = subscription.current_period_end
  if (top) return top
  return subscription.items?.data?.[0]?.current_period_end ?? null
}

/**
 * Has this subscription taken money, and is it taking money now?
 *
 * Read off `latest_invoice` when it was expanded. `attempt_count` is the
 * number of times Stripe has tried this invoice, so an open invoice with
 * attempts on it is a subscription in active dunning even when the
 * subscription status has not yet flipped to `past_due`.
 */
function invoiceState(subscription) {
  const inv = subscription.latest_invoice
  if (!inv || typeof inv === 'string') {
    return { known: false, paid: null, failing: null, invoice: null }
  }
  const paid = inv.status === 'paid' || (inv.amount_paid ?? 0) > 0
  const failing =
    inv.status === 'open' && (inv.attempt_count ?? 0) > 0 ? true : inv.status === 'uncollectible'
  return {
    known: true,
    paid,
    failing: Boolean(failing),
    invoice: {
      id: inv.id ?? null,
      number: inv.number ?? null,
      status: inv.status ?? null,
      attemptCount: inv.attempt_count ?? null,
      amountDue: money(inv.amount_due, inv.currency),
      amountPaid: money(inv.amount_paid, inv.currency),
      nextPaymentAttempt: iso(inv.next_payment_attempt),
    },
  }
}

// ── Reading Stripe ──────────────────────────────────────────────────────────

/**
 * Expansions, most informative first.
 *
 * `data.items.data.price.product` is what makes the promo path's ad-hoc price
 * comparable to a catalogue price, and `data.latest_invoice` is what tells a
 * paying subscription from a retrying one. Both are parameters on a permitted
 * `subscriptions.list` call - no second endpoint is touched.
 *
 * If Stripe rejects an expansion (a future API version moves a field, an
 * account restricts one) the listing degrades to a shorter set rather than
 * failing. A report with less detail is useful; no report is not. Whatever was
 * dropped is recorded and printed, so nobody reads a degraded report as a
 * complete one.
 */
const EXPAND_LADDER = [
  ['data.items.data.price.product', 'data.latest_invoice'],
  ['data.items.data.price.product'],
  [],
]

const degraded = []

async function listSubscriptionsPage(startingAfter, expandIndex) {
  for (let i = expandIndex; i < EXPAND_LADDER.length; i++) {
    try {
      const page = await stripe.subscriptions.list({
        status: 'all',
        limit: 100,
        ...(startingAfter ? { starting_after: startingAfter } : {}),
        ...(EXPAND_LADDER[i].length > 0 ? { expand: EXPAND_LADDER[i] } : {}),
      })
      return { page, expandIndex: i }
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err)
      if (i === EXPAND_LADDER.length - 1) throw err
      degraded.push(`expand ${JSON.stringify(EXPAND_LADDER[i])} rejected: ${message}`)
    }
  }
  throw new Error('unreachable')
}

/** Every subscription in the account, in one pass, grouped by customer id. */
async function fetchSubscriptionsByCustomer() {
  const byCustomer = new Map()
  let startingAfter = null
  let expandIndex = 0
  let scanned = 0
  let truncated = false

  for (;;) {
    const { page, expandIndex: used } = await listSubscriptionsPage(startingAfter, expandIndex)
    expandIndex = used

    for (const sub of page.data) {
      const customerId =
        typeof sub.customer === 'string' ? sub.customer : (sub.customer?.id ?? null)
      if (!customerId) continue
      if (!byCustomer.has(customerId)) byCustomer.set(customerId, [])
      byCustomer.get(customerId).push(sub)
      scanned++
    }

    if (scanned >= MAX_OBJECTS) {
      truncated = true
      break
    }
    if (!page.has_more || page.data.length === 0) break
    startingAfter = page.data[page.data.length - 1].id
  }

  return { byCustomer, scanned, truncated, expandUsed: EXPAND_LADDER[expandIndex] }
}

/**
 * Every customer in the account, so duplicate customer RECORDS sharing one
 * email can be grouped. This is the second shape of "charged twice" and the
 * only reason this endpoint is called.
 */
async function fetchCustomers() {
  const customers = new Map()
  let startingAfter = null
  let scanned = 0
  let truncated = false

  for (;;) {
    const page = await stripe.customers.list({
      limit: 100,
      ...(startingAfter ? { starting_after: startingAfter } : {}),
    })

    for (const c of page.data) {
      customers.set(c.id, { id: c.id, email: c.email ?? null, created: c.created ?? null })
      scanned++
    }

    if (scanned >= MAX_OBJECTS) {
      truncated = true
      break
    }
    if (!page.has_more || page.data.length === 0) break
    startingAfter = page.data[page.data.length - 1].id
  }

  return { customers, scanned, truncated }
}

// ── Analysis ────────────────────────────────────────────────────────────────

function describeSubscription(sub) {
  const state = invoiceState(sub)
  return {
    subscriptionId: sub.id,
    status: sub.status,
    live: LIVE_STATUSES.has(sub.status),
    plan: planLabel(sub),
    planKeys: [...planKeys(sub)],
    created: iso(sub.created),
    currentPeriodEnd: iso(periodEnd(sub)),
    trialEnd: iso(sub.trial_end),
    cancelAtPeriodEnd: Boolean(sub.cancel_at_period_end),
    // The webhook resolves the account from this first
    // (`handleSubscriptionUpdated`), so it is the fastest way to find the
    // Supabase account this subscription writes to.
    metadataUserId: sub.metadata?.userId ?? null,
    latestInvoice: state.invoice,
    looksPaid: state.known ? state.paid : null,
    looksFailing: state.known
      ? state.failing || FAILING_STATUSES.has(sub.status)
      : FAILING_STATUSES.has(sub.status),
  }
}

/** Do two live subscriptions on this customer bill the same plan? */
function findSharedPlanKeys(liveSubs) {
  const seen = new Map()
  const shared = new Set()
  for (const sub of liveSubs) {
    for (const key of planKeys(sub)) {
      if (seen.has(key) && seen.get(key) !== sub.id) shared.add(key)
      else seen.set(key, sub.id)
    }
  }
  return [...shared]
}

/** Two live subscriptions created within a day of each other. */
function createdCloseTogether(liveSubs) {
  const times = liveSubs
    .map((s) => s.created)
    .filter(Boolean)
    .sort((a, b) => a - b)
  for (let i = 1; i < times.length; i++) {
    if (times[i] - times[i - 1] <= 86_400) return true
  }
  return false
}

async function main() {
  const startedAt = new Date()

  const { byCustomer, scanned, truncated, expandUsed } = await fetchSubscriptionsByCustomer()

  let customerIndex = new Map()
  let customersScanned = 0
  let customersTruncated = false
  if (!SKIP_CUSTOMERS) {
    const result = await fetchCustomers()
    customerIndex = result.customers
    customersScanned = result.scanned
    customersTruncated = result.truncated
  }

  const findings = []
  const dunning = []
  const counts = {
    customersWithSubscriptions: byCustomer.size,
    subscriptionsScanned: scanned,
    customersScanned,
    DUPLICATE_PRICE: 0,
    DUPLICATE_CUSTOMER: 0,
    MULTIPLE_LIVE: 0,
    SHARED_EMAIL_ONE_LIVE: 0,
    DUNNING: 0,
    entitlementPoisoning: 0,
    clean: 0,
  }

  // ── Grouping 1: by Stripe customer id ─────────────────────────────────
  for (const [customerId, subs] of byCustomer) {
    const live = subs.filter((s) => LIVE_STATUSES.has(s.status))
    const described = subs.map(describeSubscription)
    const describedLive = described.filter((d) => d.live)
    const email = customerIndex.get(customerId)?.email ?? null

    // Every live subscription currently failing, whether or not it is a
    // duplicate. This is the list of people locked out of AI marking today.
    for (const d of describedLive) {
      if (d.looksFailing) {
        counts.DUNNING++
        dunning.push({
          state: 'DUNNING',
          customerId,
          email: maskEmail(email),
          ...d,
          detail:
            'Stripe is chasing this invoice. `invoice.payment_failed` in the webhook has set ' +
            "profiles.subscription_status='past_due' for this customer, and hasActiveSubscription " +
            "requires exactly 'pro', so AI marking is refused for the whole account while this runs.",
        })
      }
    }

    const paying = describedLive.filter((d) => d.looksPaid === true)
    const failing = describedLive.filter((d) => d.looksFailing)
    const poisoned = paying.length > 0 && failing.length > 0

    const base = {
      customerId,
      email: maskEmail(email),
      liveSubscriptionCount: describedLive.length,
      subscriptions: described,
      entitlementPoisoning: poisoned,
      createdCloseTogether: createdCloseTogether(live),
    }

    if (poisoned) counts.entitlementPoisoning++

    const shared = findSharedPlanKeys(live)

    if (shared.length > 0) {
      counts.DUPLICATE_PRICE++
      findings.push({
        ...base,
        state: 'DUPLICATE_PRICE',
        sharedPlanKeys: shared,
        detail:
          `This Stripe customer holds ${describedLive.length} live subscriptions billing the same ` +
          'plan. There is no legitimate reading of that: the customer is being charged twice for ' +
          'one thing. Our Prisma Subscription row is @unique on userId, so only one of these was ' +
          'ever recorded - do not assume the row names the one the customer wants to keep.',
      })
      continue
    }

    if (describedLive.length > 1) {
      counts.MULTIPLE_LIVE++
      findings.push({
        ...base,
        state: 'MULTIPLE_LIVE',
        detail:
          'Several live subscriptions on different prices. This can be legitimate - Pro and IELTS ' +
          'are separate products a learner may hold at once - so it is reported, not asserted. ' +
          'Check the plan names below against what the customer believes they bought.',
      })
      continue
    }

    counts.clean++
    if (INCLUDE_CLEAN) {
      findings.push({ ...base, state: 'CLEAN', detail: 'One live subscription, or none.' })
    }
  }

  // ── Grouping 2: by email across customer records ──────────────────────
  //
  // The shipped guard lists subscriptions for ONE customer id. Two customer
  // records for one person are therefore invisible to it, and the customer is
  // charged twice all the same.
  const emailGroups = new Map()
  for (const c of customerIndex.values()) {
    const key = (c.email ?? '').trim().toLowerCase()
    if (!key) continue
    if (!emailGroups.has(key)) emailGroups.set(key, [])
    emailGroups.get(key).push(c)
  }

  for (const [emailKey, records] of emailGroups) {
    if (records.length < 2) continue

    const withLive = records.filter((r) =>
      (byCustomer.get(r.id) ?? []).some((s) => LIVE_STATUSES.has(s.status)),
    )

    const detailRecords = records.map((r) => ({
      customerId: r.id,
      created: iso(r.created),
      liveSubscriptions: (byCustomer.get(r.id) ?? [])
        .filter((s) => LIVE_STATUSES.has(s.status))
        .map(describeSubscription),
    }))

    if (withLive.length > 1) {
      counts.DUPLICATE_CUSTOMER++
      findings.push({
        state: 'DUPLICATE_CUSTOMER',
        email: maskEmail(emailKey),
        customerIds: records.map((r) => r.id),
        customerRecords: detailRecords,
        detail:
          `${withLive.length} separate Stripe customer records for this email each hold a live ` +
          'subscription. The same card is charged twice and the customer cannot tell this apart ' +
          'from the single-customer case. The duplicate-subscription guard cannot see this at ' +
          'all: it lists subscriptions for one customer id.',
      })
    } else {
      counts.SHARED_EMAIL_ONE_LIVE++
      findings.push({
        state: 'SHARED_EMAIL_ONE_LIVE',
        email: maskEmail(emailKey),
        customerIds: records.map((r) => r.id),
        customerRecords: detailRecords,
        detail:
          'Duplicate Stripe customer records, only one live subscription between them. Nobody has ' +
          'been charged twice. Listed because the guard is keyed on customer id, so this account ' +
          'can still buy the same plan a second time through the other record.',
      })
    }
  }

  // Worst first, so the printed report opens on the thing that costs money.
  const SEVERITY = {
    DUPLICATE_PRICE: 0,
    DUPLICATE_CUSTOMER: 1,
    MULTIPLE_LIVE: 2,
    SHARED_EMAIL_ONE_LIVE: 3,
    CLEAN: 4,
  }
  findings.sort((a, b) => {
    if (a.entitlementPoisoning !== b.entitlementPoisoning) return a.entitlementPoisoning ? -1 : 1
    return (SEVERITY[a.state] ?? 9) - (SEVERITY[b.state] ?? 9)
  })

  const report = {
    generatedAt: startedAt.toISOString(),
    reportOnly: true,
    wroteAnything: false,
    stripeCallsUsed: SKIP_CUSTOMERS
      ? ['subscriptions.list']
      : ['subscriptions.list', 'customers.list'],
    stripeKeyMode: KEY_MODE,
    emailsMasked: !SHOW_EMAILS,
    expansionsUsed: expandUsed,
    degraded,
    truncated: truncated || customersTruncated,
    maxObjects: MAX_OBJECTS,
    counts,
    findings,
    dunning,
  }

  if (OUT_PATH) {
    writeFileSync(OUT_PATH, `${JSON.stringify(report, null, 2)}\n`, 'utf8')
  }

  if (AS_JSON) {
    console.log(JSON.stringify(report, null, 2))
    return
  }

  // ── Human-readable ──────────────────────────────────────────────────
  console.log('')
  console.log('Duplicate Stripe subscriptions - REPORT ONLY, nothing was written')
  console.log('=================================================================')
  console.log(`Generated:              ${report.generatedAt}`)
  console.log(`Stripe key:             ${KEY_MODE}`)
  console.log(`Stripe calls used:      ${report.stripeCallsUsed.join(', ')}`)
  console.log(`Subscriptions scanned:  ${counts.subscriptionsScanned}`)
  console.log(`Customers scanned:      ${counts.customersScanned}`)
  console.log('')
  console.log(`  Duplicate price:      ${counts.DUPLICATE_PRICE}`)
  console.log(`  Duplicate customer:   ${counts.DUPLICATE_CUSTOMER}`)
  console.log(`  Multiple live:        ${counts.MULTIPLE_LIVE}`)
  console.log(`  Shared email, 1 live: ${counts.SHARED_EMAIL_ONE_LIVE}`)
  console.log(`  In dunning:           ${counts.DUNNING}`)
  console.log(`  Paying AND failing:   ${counts.entitlementPoisoning}`)
  console.log('')

  if (degraded.length > 0) {
    console.log('PARTIAL: some detail could not be read -')
    for (const d of degraded) console.log(`  - ${d}`)
    console.log('')
  }
  if (report.truncated) {
    console.log(
      `PARTIAL: stopped at --max=${MAX_OBJECTS} objects. Raise it before treating this as complete.`,
    )
    console.log('')
  }

  const actionable = findings.filter((f) => f.state !== 'CLEAN')
  if (actionable.length === 0) {
    console.log('No customer holds two subscriptions for the same plan.')
  } else {
    for (const f of actionable) {
      const flag = f.entitlementPoisoning ? '  [PAYING AND FAILING]' : ''
      console.log(`- ${f.state}${flag}  ${f.email ?? '(no email)'}`)
      if (f.customerId) console.log(`    customer: ${f.customerId}`)
      if (f.customerIds) console.log(`    customers: ${f.customerIds.join(', ')}`)
      const subs = f.subscriptions ?? (f.customerRecords ?? []).flatMap((r) => r.liveSubscriptions)
      for (const s of subs) {
        if (!s.live && f.state !== 'CLEAN') continue
        const inv = s.latestInvoice
        console.log(
          `    ${s.subscriptionId}  ${s.status.padEnd(9)} ${s.plan}` +
            `  created=${s.created ?? '?'}` +
            (inv
              ? `  invoice=${inv.number ?? inv.id} ${inv.status} attempts=${inv.attemptCount}`
              : ''),
        )
      }
      // Only said on a state that is already a duplicate. Two subscriptions
      // created minutes apart is the signature of a double checkout rather
      // than a renewal - but on MULTIPLE_LIVE, where Pro and IELTS bought in
      // one sitting are a perfectly ordinary thing to find, the same fact
      // means nothing and printing it would read as an accusation.
      if (
        f.createdCloseTogether &&
        (f.state === 'DUPLICATE_PRICE' || f.state === 'DUPLICATE_CUSTOMER')
      ) {
        console.log('    Created within 24 hours of each other, so this is not a renewal.')
      }
      console.log(`    ${f.detail}`)
      console.log('')
    }
  }

  if (dunning.length > 0) {
    console.log('')
    console.log('Currently failing payment - these accounts have lost AI marking')
    console.log('---------------------------------------------------------------')
    for (const d of dunning) {
      const inv = d.latestInvoice
      console.log(
        `- ${d.email ?? '(no email)'}  ${d.subscriptionId}  ${d.status}  ${d.plan}` +
          (inv ? `  ${inv.amountDue} ${inv.status} attempts=${inv.attemptCount}` : ''),
      )
      if (inv?.nextPaymentAttempt) console.log(`    next attempt: ${inv.nextPaymentAttempt}`)
    }
    console.log('')
  }

  console.log("Next steps are a person's, not this script's:")
  console.log('  1. Open each customer in the Stripe dashboard and read both subscriptions before')
  console.log(
    '     touching either. The Prisma row names only one of them and may name the wrong one.',
  )
  console.log(
    '  2. Decide with the customer which subscription they keep. Cancelling the wrong one',
  )
  console.log('     takes away something they paid for.')
  console.log('  3. A PAYING AND FAILING customer is cut off right now. Stopping the failing')
  console.log(
    "     subscription's retries restores nothing on its own - profiles.subscription_status",
  )
  console.log("     must be put back to 'pro' as well, because invoice.payment_failed set it to")
  console.log(
    "     'past_due' for the whole account and nothing sets it back except a paid invoice.",
  )
  if (OUT_PATH) console.log(`\nJSON report written to ${OUT_PATH}`)
}

main().catch((err) => {
  // A crash is not a finding. Findings exit 0; a script that could not run
  // exits non-zero, so a scheduled invocation does not report silence as
  // "no duplicates".
  console.error('[dupes] failed:', err)
  process.exitCode = 1
})
