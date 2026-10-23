#!/usr/bin/env node
// scripts/stripe-reconcile-subscriptions.mjs
// ============================================================================
// Compare what Stripe says about each customer with the Subscription row we
// hold for them, and print the differences. DRY RUN unless --write is passed.
// ============================================================================
//
// THE EXACT COMMAND (run by the founder, with the live key in .env.local)
// ---------------------------------------------------------------------
//
//   node --env-file=.env.local scripts/stripe-reconcile-subscriptions.mjs
//
// That is the dry run. It reads Stripe and the database, prints a table of
// every field that disagrees, and changes nothing anywhere. Read it first.
//
//   node --env-file=.env.local scripts/stripe-reconcile-subscriptions.mjs --write
//
// The same, and then updates the Prisma `Subscription` rows to match Stripe.
// It never writes to `profiles` (reported only), never creates a row for an
// account that has no Prisma `User`, and never touches a customer who holds
// two live subscriptions (reported as DUPLICATE for a person to resolve).
//
// Other flags:
//   --customer=cus_xxx   one Stripe customer only
//   --json               print the findings as JSON instead of a table
//   --max=<n>            stop after n customers (default 2000)
//
// Required env: STRIPE_SECRET_KEY, DATABASE_URL.
//
// WHY THIS EXISTS
// ---------------
// Read-only probes on 20 October 2026 found, on the seven Subscription rows
// linked to Stripe, currentPeriodEnd equal to currentPeriodStart on six and
// paymentCount 0 on all seven, although the webhook journal held 19 paid
// invoices. The cause was the Stripe API shape: the pinned client returns the
// period on each subscription item and the invoice's subscription under
// `parent.subscription_details`, and the webhook read the old fields. The
// webhook is fixed (src/lib/billing/stripe-shapes.ts); the rows written before
// the fix are still wrong, and this script is how they are put right.
//
// It is also how the trial-expiry cron's TRIAL_EXPIRY_SKIPPED_PAID finding is
// repaired: a profile with a Stripe customer and a live Stripe subscription
// whose Prisma row is still the signup trial. The customer ids come from BOTH
// `Subscription.stripeCustomerId` and `profiles.stripe_customer_id`, so that
// case is included.
//
// WHAT IT WILL NEVER DO, AND WHY THAT IS ENFORCED IN CODE
// -------------------------------------------------------
// `readOnlyStripe()` hands the rest of this file an object carrying exactly
// two methods, `subscriptions.list` and `invoices.list`. There is no create,
// update, cancel, del or refund reachable from any line below, because those
// properties do not exist on the object the code holds. Money moves when a
// person decides it moves, in the Stripe dashboard. Never from here.
//
// WHAT IS COMPARED
// ----------------
// For each customer, the relevant Stripe subscription is the live one
// (active, trialing, past_due or unpaid); if none is live, the most recently
// created. Against the Prisma row for that person:
//
//   stripeSubscriptionId  the id
//   status                Stripe's status mapped as the webhook maps it
//   plan                  MONTHLY or ANNUAL from the recurring interval
//   isTeacherPlan         from the price, only when the price says something
//   currentPeriodStart    both API shapes read, as the webhook reads them
//   currentPeriodEnd
//   cancelledAt           ended_at on a cancelled subscription
//   paymentCount          the number of PAID invoices on the subscription that
//                         took money (amount_paid > 0)
//
// `cancel_at_period_end` has no column, so it is printed, not compared. The
// profile's subscription_status is printed beside what the Stripe status
// implies for the web gate, and never written: that field is one per person
// and the webhook's to keep.
//
// The two helper rules duplicated below (the status map and the period
// readers) MUST agree with src/lib/billing/subscription-sync.ts and
// src/lib/billing/stripe-shapes.ts. They are duplicated because this is a
// plain .mjs script and those are TypeScript behind the `@/` alias. If you
// change one, change the other.
// ============================================================================

import Stripe from 'stripe'
import { PrismaClient } from '@prisma/client'

// ── Flags ───────────────────────────────────────────────────────────────────

const argv = process.argv.slice(2)
const WRITE = argv.includes('--write')
const AS_JSON = argv.includes('--json')
const ONLY_CUSTOMER =
  (argv.find((a) => a.startsWith('--customer=')) ?? '').slice('--customer='.length) || null
const MAX_RAW = (argv.find((a) => a.startsWith('--max=')) ?? '').slice('--max='.length)
const MAX_CUSTOMERS = MAX_RAW ? Number.parseInt(MAX_RAW, 10) : 2000

if (!Number.isFinite(MAX_CUSTOMERS) || MAX_CUSTOMERS <= 0) {
  console.error('[reconcile] --max must be a positive integer')
  process.exit(1)
}

// ── Env ─────────────────────────────────────────────────────────────────────

const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY
if (!STRIPE_SECRET_KEY) {
  console.error(
    '[reconcile] Missing STRIPE_SECRET_KEY. Did you forget `--env-file=.env.local`?\n' +
      '  node --env-file=.env.local scripts/stripe-reconcile-subscriptions.mjs',
  )
  process.exit(1)
}
if (!process.env.DATABASE_URL) {
  console.error(
    '[reconcile] Missing DATABASE_URL (Prisma). Did you forget `--env-file=.env.local`?',
  )
  process.exit(1)
}

const KEY_MODE = STRIPE_SECRET_KEY.startsWith('sk_live_')
  ? 'live'
  : STRIPE_SECRET_KEY.startsWith('sk_test_')
    ? 'test'
    : 'unknown'

// ── The read-only Stripe surface ────────────────────────────────────────────

function readOnlyStripe(secretKey) {
  const client = new Stripe(secretKey, {
    // The same version the app pins (src/lib/stripe.ts), so this script and
    // production read identically shaped objects.
    apiVersion: '2026-02-25.clover',
  })
  return Object.freeze({
    subscriptions: Object.freeze({
      list: client.subscriptions.list.bind(client.subscriptions),
    }),
    invoices: Object.freeze({
      list: client.invoices.list.bind(client.invoices),
    }),
  })
}

const stripe = readOnlyStripe(STRIPE_SECRET_KEY)
const prisma = new PrismaClient()

// ── Rules shared with the app (keep in step) ────────────────────────────────

/** Same as LIVE_SUBSCRIPTION_STATUSES in duplicate-subscription-guard.ts. */
const LIVE_STATUSES = new Set(['active', 'trialing', 'past_due', 'unpaid'])

/** Same as mapStripeToPrismaStatus in subscription-sync.ts. */
function mapStatus(stripeStatus) {
  switch (stripeStatus) {
    case 'active':
      return 'ACTIVE'
    case 'trialing':
      return 'TRIALING'
    case 'past_due':
    case 'unpaid':
    case 'incomplete':
    case 'incomplete_expired':
      return 'PAST_DUE'
    case 'canceled':
      return 'CANCELLED'
    case 'paused':
      return 'PAUSED'
    default:
      return 'PAST_DUE'
  }
}

/** Same as subscriptionPeriodEnd in stripe-shapes.ts: top-level, else latest item end. */
function periodEnd(sub) {
  if (typeof sub.current_period_end === 'number' && sub.current_period_end > 0) {
    return sub.current_period_end
  }
  let latest = null
  for (const item of sub.items?.data ?? []) {
    const end = item.current_period_end
    if (typeof end === 'number' && end > 0 && (latest === null || end > latest)) latest = end
  }
  return latest
}

/** Same as subscriptionPeriodStart in stripe-shapes.ts: top-level, else earliest item start. */
function periodStart(sub) {
  if (typeof sub.current_period_start === 'number' && sub.current_period_start > 0) {
    return sub.current_period_start
  }
  let earliest = null
  for (const item of sub.items?.data ?? []) {
    const start = item.current_period_start
    if (typeof start === 'number' && start > 0 && (earliest === null || start < earliest)) {
      earliest = start
    }
  }
  return earliest
}

/** Same as planTierFromSubscription in plan-from-price.ts. */
function envIds(names) {
  return names.map((n) => process.env[n] ?? '').filter((id) => id.length > 0)
}
const STUDENT_IDS = new Set(
  envIds([
    'STRIPE_PRICE_PRO_MONTHLY',
    'STRIPE_PRICE_PRO_ANNUAL',
    'STRIPE_PRICE_STUDENT_MONTHLY',
    'STRIPE_PRICE_STUDENT_ANNUAL',
  ]),
)
const TEACHER_IDS = new Set(
  envIds(['STRIPE_PRICE_TEACHER_MONTHLY', 'STRIPE_PRICE_TEACHER_ANNUAL']).filter(
    (id) => !STUDENT_IDS.has(id),
  ),
)

function planTier(sub) {
  let sawStudent = false
  for (const item of sub.items?.data ?? []) {
    const ids = []
    if (item.price?.id) ids.push(item.price.id)
    const product = item.price?.product
    if (
      product &&
      typeof product === 'object' &&
      !product.deleted &&
      product.metadata?.basePriceId
    ) {
      ids.push(product.metadata.basePriceId)
    }
    for (const id of ids) {
      if (TEACHER_IDS.has(id)) return { isTeacherPlan: true, teacherPriceId: id }
      if (STUDENT_IDS.has(id)) sawStudent = true
    }
  }
  return { isTeacherPlan: sawStudent ? false : null, teacherPriceId: null }
}

function planFromInterval(sub) {
  const interval = sub.items?.data?.[0]?.price?.recurring?.interval
  return interval === 'year' ? 'ANNUAL' : 'MONTHLY'
}

/** What the web gate would hold if the webhook had mirrored this status. */
function impliedProfileStatus(stripeStatus) {
  switch (stripeStatus) {
    case 'active':
    case 'trialing':
      return 'pro'
    case 'past_due':
      return '(unchanged: access kept through retries)'
    case 'unpaid':
      return 'unpaid'
    case 'canceled':
    case 'incomplete_expired':
      return 'cancelled'
    default:
      return stripeStatus
  }
}

function iso(seconds) {
  if (typeof seconds !== 'number' || seconds <= 0) return null
  return new Date(seconds * 1000).toISOString()
}

function dateIso(d) {
  return d instanceof Date ? d.toISOString() : d ? new Date(d).toISOString() : null
}

// ── Reading our side ────────────────────────────────────────────────────────

async function loadDatabaseSide() {
  const rows = await prisma.subscription.findMany({
    where: {
      OR: [{ stripeCustomerId: { not: null } }, { stripeSubscriptionId: { not: null } }],
    },
    include: { user: { select: { id: true, supabaseUserId: true } } },
  })

  // profiles is not a Prisma model; counts and ids only, never names or emails.
  const profiles = await prisma.$queryRaw`
    SELECT id::text AS id, stripe_customer_id, subscription_status, subscription_end_date
    FROM public.profiles
    WHERE stripe_customer_id IS NOT NULL
  `

  const users = await prisma.user.findMany({
    where: { supabaseUserId: { in: profiles.map((p) => p.id) } },
    select: { id: true, supabaseUserId: true, subscription: { select: { id: true } } },
  })
  const prismaUserBySupabaseId = new Map(users.map((u) => [u.supabaseUserId, u]))

  const rowsByCustomer = new Map()
  for (const row of rows) {
    if (row.stripeCustomerId) rowsByCustomer.set(row.stripeCustomerId, row)
  }
  const rowsByPrismaUserId = new Map(rows.map((r) => [r.userId, r]))

  const profileByCustomer = new Map()
  for (const p of profiles) profileByCustomer.set(p.stripe_customer_id, p)

  const customerIds = new Set([...rowsByCustomer.keys(), ...profileByCustomer.keys()])

  return {
    rowsByCustomer,
    rowsByPrismaUserId,
    profileByCustomer,
    prismaUserBySupabaseId,
    customerIds,
  }
}

// ── Reading Stripe ──────────────────────────────────────────────────────────

async function stripeSubscriptionsFor(customerId) {
  const page = await stripe.subscriptions.list({
    customer: customerId,
    status: 'all',
    limit: 100,
    expand: ['data.items.data.price.product'],
  })
  return page.data
}

/** Paid invoices on the subscription that took money. */
async function paidInvoiceCount(subscriptionId) {
  let count = 0
  let startingAfter = null
  for (;;) {
    const page = await stripe.invoices.list({
      subscription: subscriptionId,
      status: 'paid',
      limit: 100,
      ...(startingAfter ? { starting_after: startingAfter } : {}),
    })
    for (const inv of page.data) if ((inv.amount_paid ?? 0) > 0) count++
    if (!page.has_more || page.data.length === 0) break
    startingAfter = page.data[page.data.length - 1].id
  }
  return count
}

function chooseRelevant(subs) {
  const live = subs.filter((s) => LIVE_STATUSES.has(s.status))
  if (live.length > 1) return { duplicate: true, chosen: null, live }
  if (live.length === 1) return { duplicate: false, chosen: live[0], live }
  const sorted = [...subs].sort((a, b) => (b.created ?? 0) - (a.created ?? 0))
  return { duplicate: false, chosen: sorted[0] ?? null, live }
}

// ── Comparison ──────────────────────────────────────────────────────────────

function expectedFromStripe(sub, paidCount) {
  const tier = planTier(sub)
  return {
    stripeSubscriptionId: sub.id,
    status: mapStatus(sub.status),
    plan: planFromInterval(sub),
    isTeacherPlan: tier.isTeacherPlan,
    teacherPriceId: tier.teacherPriceId,
    currentPeriodStart: iso(periodStart(sub)),
    currentPeriodEnd: iso(periodEnd(sub)),
    cancelledAt: sub.status === 'canceled' ? iso(sub.ended_at) : null,
    paymentCount: paidCount,
  }
}

function diffRow(row, expected) {
  const diffs = []
  const compare = (field, db, st) => {
    if (db !== st) diffs.push({ field, db, stripe: st })
  }
  compare('stripeSubscriptionId', row.stripeSubscriptionId ?? null, expected.stripeSubscriptionId)
  compare('status', row.status, expected.status)
  compare('plan', row.plan, expected.plan)
  if (expected.isTeacherPlan !== null)
    compare('isTeacherPlan', row.isTeacherPlan, expected.isTeacherPlan)
  compare('currentPeriodStart', dateIso(row.currentPeriodStart), expected.currentPeriodStart)
  compare('currentPeriodEnd', dateIso(row.currentPeriodEnd), expected.currentPeriodEnd)
  compare('cancelledAt', dateIso(row.cancelledAt), expected.cancelledAt)
  compare('paymentCount', row.paymentCount, expected.paymentCount)
  return diffs
}

/** The Prisma update that would make the row match. Only fields Stripe can speak to. */
function updateData(expected) {
  const data = {
    stripeSubscriptionId: expected.stripeSubscriptionId,
    status: expected.status,
    plan: expected.plan,
    cancelledAt: expected.cancelledAt ? new Date(expected.cancelledAt) : null,
    paymentCount: expected.paymentCount,
  }
  if (expected.currentPeriodStart) data.currentPeriodStart = new Date(expected.currentPeriodStart)
  if (expected.currentPeriodEnd) data.currentPeriodEnd = new Date(expected.currentPeriodEnd)
  if (expected.isTeacherPlan !== null) {
    data.isTeacherPlan = expected.isTeacherPlan
    data.teacherPriceId = expected.teacherPriceId
  }
  return data
}

// ── Main ────────────────────────────────────────────────────────────────────

async function main() {
  const startedAt = new Date()
  const db = await loadDatabaseSide()

  let customers = [...db.customerIds]
  if (ONLY_CUSTOMER) customers = customers.filter((c) => c === ONLY_CUSTOMER)
  const truncated = customers.length > MAX_CUSTOMERS
  customers = customers.slice(0, MAX_CUSTOMERS)

  const findings = []
  const counts = {
    customers: customers.length,
    consistent: 0,
    differs: 0,
    duplicate: 0,
    noStripeSubscription: 0,
    noRow: 0,
    noPrismaUser: 0,
    written: 0,
    writeFailed: 0,
  }

  for (const customerId of customers) {
    const profile = db.profileByCustomer.get(customerId) ?? null
    let row = db.rowsByCustomer.get(customerId) ?? null
    const prismaUser = profile ? (db.prismaUserBySupabaseId.get(profile.id) ?? null) : null
    if (!row && prismaUser) row = db.rowsByPrismaUserId.get(prismaUser.id) ?? null

    const base = {
      customerId,
      supabaseUserId: profile?.id ?? row?.user?.supabaseUserId ?? null,
      prismaUserId: prismaUser?.id ?? row?.userId ?? null,
      rowId: row?.id ?? null,
      profileStatus: profile?.subscription_status ?? null,
      profileEndDate: profile?.subscription_end_date
        ? new Date(profile.subscription_end_date).toISOString()
        : null,
    }

    const subs = await stripeSubscriptionsFor(customerId)
    if (subs.length === 0) {
      counts.noStripeSubscription++
      findings.push({ ...base, state: 'NO_STRIPE_SUBSCRIPTION', diffs: [] })
      continue
    }

    const { duplicate, chosen, live } = chooseRelevant(subs)
    if (duplicate) {
      counts.duplicate++
      findings.push({
        ...base,
        state: 'DUPLICATE',
        liveSubscriptions: live.map((s) => ({
          id: s.id,
          status: s.status,
          created: iso(s.created),
        })),
        diffs: [],
        detail:
          'Two or more live subscriptions on one customer. Nothing written: a person decides which one the customer keeps. See scripts/find-duplicate-stripe-subscriptions.mjs.',
      })
      continue
    }

    const paid = await paidInvoiceCount(chosen.id)
    const expected = expectedFromStripe(chosen, paid)
    const stripeView = {
      ...expected,
      stripeStatus: chosen.status,
      cancelAtPeriodEnd: Boolean(chosen.cancel_at_period_end),
      impliedProfileStatus: impliedProfileStatus(chosen.status),
    }

    if (!row) {
      if (!prismaUser) {
        counts.noPrismaUser++
        findings.push({
          ...base,
          state: 'NO_PRISMA_USER',
          stripe: stripeView,
          diffs: [],
          detail:
            'No Prisma User for this account, so there is nowhere to hang a Subscription row. The identity layer creates the User on the next sign-in; run again after that, or see scripts/reconcile-stripe-subscriptions.mjs.',
        })
        continue
      }
      counts.noRow++
      const finding = { ...base, state: 'NO_ROW', stripe: stripeView, diffs: [], written: false }
      if (WRITE) {
        try {
          await prisma.subscription.create({
            data: {
              userId: prismaUser.id,
              stripeCustomerId: customerId,
              platform: 'WEB',
              ...updateData(expected),
              currentPeriodStart: expected.currentPeriodStart
                ? new Date(expected.currentPeriodStart)
                : new Date(),
              currentPeriodEnd: expected.currentPeriodEnd
                ? new Date(expected.currentPeriodEnd)
                : new Date(),
            },
          })
          finding.written = true
          counts.written++
        } catch (err) {
          finding.writeError = err instanceof Error ? err.message : String(err)
          counts.writeFailed++
        }
      }
      findings.push(finding)
      continue
    }

    const diffs = diffRow(row, expected)
    if (diffs.length === 0) {
      counts.consistent++
      findings.push({ ...base, state: 'CONSISTENT', stripe: stripeView, diffs })
      continue
    }

    counts.differs++
    const finding = { ...base, state: 'DIFFERS', stripe: stripeView, diffs, written: false }
    if (WRITE) {
      try {
        await prisma.subscription.update({
          where: { id: row.id },
          data: { stripeCustomerId: customerId, ...updateData(expected) },
        })
        finding.written = true
        counts.written++
      } catch (err) {
        finding.writeError = err instanceof Error ? err.message : String(err)
        counts.writeFailed++
      }
    }
    findings.push(finding)
  }

  const report = {
    generatedAt: startedAt.toISOString(),
    mode: WRITE ? 'WRITE' : 'DRY RUN',
    stripeKeyMode: KEY_MODE,
    stripeCallsUsed: ['subscriptions.list', 'invoices.list'],
    wroteToStripe: false,
    wroteToProfiles: false,
    truncated,
    counts,
    findings,
  }

  if (AS_JSON) {
    console.log(JSON.stringify(report, null, 2))
    return
  }

  console.log('')
  console.log(`Stripe vs Subscription rows - ${report.mode}${WRITE ? '' : ', nothing was written'}`)
  console.log('==================================================================')
  console.log(`Generated:        ${report.generatedAt}`)
  console.log(`Stripe key:       ${KEY_MODE}`)
  console.log(`Stripe calls:     ${report.stripeCallsUsed.join(', ')} (read only)`)
  console.log(
    `Customers:        ${counts.customers}${truncated ? ` (stopped at --max=${MAX_CUSTOMERS})` : ''}`,
  )
  console.log(`  consistent:     ${counts.consistent}`)
  console.log(`  differs:        ${counts.differs}`)
  console.log(`  no row:         ${counts.noRow}`)
  console.log(`  no Prisma user: ${counts.noPrismaUser}`)
  console.log(`  duplicate:      ${counts.duplicate}`)
  console.log(`  no Stripe sub:  ${counts.noStripeSubscription}`)
  if (WRITE) console.log(`  written:        ${counts.written} (failed: ${counts.writeFailed})`)
  console.log('')

  const pad = (s, n) => String(s ?? '-').padEnd(n)
  for (const f of findings) {
    if (f.state === 'CONSISTENT') continue
    console.log(
      `- ${f.state}  customer=${f.customerId}  user=${f.supabaseUserId ?? '?'}  row=${f.rowId ?? 'none'}`,
    )
    if (f.stripe) {
      console.log(
        `    stripe: ${f.stripe.stripeSubscriptionId} ${f.stripe.stripeStatus}` +
          (f.stripe.cancelAtPeriodEnd ? ' (cancels at period end)' : '') +
          `  ${f.stripe.plan}${f.stripe.isTeacherPlan ? ' teacher' : ''}` +
          `  paid invoices=${f.stripe.paymentCount}`,
      )
      console.log(
        `    profile: ${f.profileStatus ?? '-'}  web gate would hold: ${f.stripe.impliedProfileStatus}`,
      )
    }
    if (f.diffs.length > 0) {
      console.log(`    ${pad('field', 20)} ${pad('database', 28)} stripe`)
      for (const d of f.diffs) {
        console.log(`    ${pad(d.field, 20)} ${pad(d.db, 28)} ${d.stripe ?? '-'}`)
      }
    }
    if (f.liveSubscriptions) {
      for (const s of f.liveSubscriptions)
        console.log(`    live: ${s.id} ${s.status} created=${s.created}`)
    }
    if (f.detail) console.log(`    ${f.detail}`)
    if (
      WRITE &&
      f.state !== 'DUPLICATE' &&
      f.state !== 'NO_PRISMA_USER' &&
      f.state !== 'NO_STRIPE_SUBSCRIPTION'
    ) {
      console.log(
        f.written ? '    written' : `    NOT written${f.writeError ? `: ${f.writeError}` : ''}`,
      )
    }
    console.log('')
  }

  if (!WRITE && counts.differs + counts.noRow > 0) {
    console.log('Dry run. To apply the Subscription row changes above:')
    console.log('  node --env-file=.env.local scripts/stripe-reconcile-subscriptions.mjs --write')
    console.log('profiles.subscription_status is never written by this script.')
  }
}

main()
  .catch((err) => {
    console.error('[reconcile] failed:', err)
    process.exitCode = 1
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
