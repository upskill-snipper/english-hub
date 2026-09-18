#!/usr/bin/env node
// scripts/reconcile-stripe-subscriptions.mjs
// ============================================================================
// REPORT ONLY - find customers who look like payers but have no billing record
// ============================================================================
//
// WHY THIS EXISTS
// ---------------
// /api/stripe/webhook resolved the customer to a SUPABASE auth uuid and passed
// it to `prisma.subscription.upsert({ where: { userId } })`. `Subscription.
// userId` is a foreign key to the Prisma `User.id`, which is a cuid, so the
// upsert threw. The throw was caught and logged as a line saying the row
// "can be back-filled". It never was.
//
// The result: for every customer without a Prisma `User` row - on 2026-09-17
// that was 192 of 200 accounts - NO `Subscription` row was ever written. The
// Supabase `profiles` row said 'pro' and the Prisma side said nothing at all,
// so `/api/me/entitlements`, the trial lifecycle crons and the renewal logic
// all read those customers as free users.
//
// The webhook is fixed (src/lib/billing/subscription-sync.ts). This script
// finds the customers the broken version already lost, so they can be put
// right.
//
// WHAT THIS SCRIPT WILL NOT DO
// ----------------------------
//   - It does not write. Not to Prisma, not to Supabase, not anywhere. Every
//     query below is a read.
//   - It does not talk to Stripe. The Stripe SDK is deliberately not imported,
//     so this file cannot create, modify, refund or charge anything even by
//     accident. Money movement is the founder's decision, taken in the Stripe
//     dashboard, never a script's.
//   - It does not decide who is owed what. It reports a disagreement between
//     two systems and leaves the judgement to a person.
//
// HOW TO READ THE OUTPUT
// ----------------------
// Each finding is one account in one of four states:
//
//   NO_PRISMA_USER       profiles says this account is paying; there is no
//                        Prisma `User` row at all, so there is nowhere for a
//                        `Subscription` row to hang. This is the population
//                        the identity defect created.
//
//   NO_SUBSCRIPTION_ROW  the Prisma `User` row exists but carries no
//                        `Subscription`. The billing record was dropped.
//
//   STATUS_DISAGREES     both rows exist but tell different stories, e.g.
//                        profiles says 'pro' while the Prisma row says
//                        CANCELLED. Usually a write that landed in one system
//                        and not the other.
//
//   CONSISTENT           the two agree. Reported only in the counts.
//
// PRIVACY
// -------
// Email addresses are MASKED by default (f****a@g****.com). Pass `--emails`
// when you genuinely need to contact the people in the report, and do not
// leave an unmasked report file lying around - it is a list of paying
// customers. The Supabase user id is always shown and is enough to find the
// account in either system.
//
// USAGE
// -----
//   node --env-file=.env.local scripts/reconcile-stripe-subscriptions.mjs
//   node --env-file=.env.local scripts/reconcile-stripe-subscriptions.mjs --emails
//   node --env-file=.env.local scripts/reconcile-stripe-subscriptions.mjs --json --out=report.json
//
// Flags:
//   --emails         show full email addresses instead of masked ones
//   --json           print the findings as JSON instead of a table
//   --out=<path>     also write the JSON findings to a file
//   --all            include CONSISTENT accounts in the findings list
//   --limit=<n>      stop after examining n candidate profiles
//
// Required env:
//   DATABASE_URL, NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY
//
// EXIT CODE
// ---------
// 0 when it ran, whatever it found - this is a report, not a gate. A non-zero
// exit means the script itself failed.
// ============================================================================

import { writeFileSync } from 'node:fs'
import { createClient } from '@supabase/supabase-js'
import { PrismaClient } from '@prisma/client'

// ── Flags ───────────────────────────────────────────────────────────────────

const argv = process.argv.slice(2)
const SHOW_EMAILS = argv.includes('--emails')
const AS_JSON = argv.includes('--json')
const INCLUDE_CONSISTENT = argv.includes('--all')
const OUT_PATH = (argv.find((a) => a.startsWith('--out=')) ?? '').slice('--out='.length) || null
const LIMIT_RAW = (argv.find((a) => a.startsWith('--limit=')) ?? '').slice('--limit='.length)
const LIMIT = LIMIT_RAW ? Number.parseInt(LIMIT_RAW, 10) : null

if (LIMIT !== null && (!Number.isFinite(LIMIT) || LIMIT <= 0)) {
  console.error('[reconcile] --limit must be a positive integer')
  process.exit(1)
}

// ── What counts as "profiles says they are paying" ──────────────────────────
//
// 'pro' is the live paid/trial state the entitlement gates read.
// 'past_due' and 'unpaid' are payers whose card has failed - they have paid
// before, so a missing billing record still matters.
// 'cancelled' and 'paused' are former payers; their row should exist too.
// 'free' and 'incomplete' are NOT included: nothing says money ever changed
// hands, and guessing would inflate the report.
const PAYING_STATUSES = ['pro', 'past_due', 'unpaid', 'cancelled', 'paused']

// IELTS is a standalone product. An IELTS-only subscription deliberately
// leaves `subscription_status` alone (see isIeltsOnlySubscription in the
// webhook), so an IELTS payer looks 'free' on that column. They are pulled in
// separately on `ielts_status = 'active'` or they would be invisible here.
const IELTS_ACTIVE = 'active'

// The Prisma statuses that are consistent with a live 'pro' profile.
const LIVE_PRISMA_STATUSES = new Set(['ACTIVE', 'TRIALING', 'PAUSED'])

const PAGE_SIZE = 500

// ── Env ─────────────────────────────────────────────────────────────────────

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY
const DATABASE_URL = process.env.DATABASE_URL

const missing = []
if (!SUPABASE_URL) missing.push('NEXT_PUBLIC_SUPABASE_URL')
if (!SUPABASE_SERVICE_ROLE_KEY) missing.push('SUPABASE_SERVICE_ROLE_KEY')
if (!DATABASE_URL) missing.push('DATABASE_URL')
if (missing.length > 0) {
  console.error(
    `[reconcile] Missing required env vars: ${missing.join(', ')}.\n` +
      '  Did you forget `--env-file=.env.local`?\n' +
      '  Example: node --env-file=.env.local scripts/reconcile-stripe-subscriptions.mjs',
  )
  process.exit(1)
}

const prisma = new PrismaClient()
const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
  auth: { persistSession: false, autoRefreshToken: false },
})

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

function iso(value) {
  if (!value) return null
  const d = value instanceof Date ? value : new Date(value)
  return Number.isNaN(d.getTime()) ? null : d.toISOString()
}

/**
 * Read every `profiles` row that claims a paid relationship, paging through
 * the table. Read-only.
 */
async function fetchPayingProfiles() {
  const rows = []
  let from = 0

  for (;;) {
    const { data, error } = await supabase
      .from('profiles')
      .select(
        'id, email, subscription_status, subscription_end_date, ielts_status, stripe_customer_id, created_at',
      )
      .or(`subscription_status.in.(${PAYING_STATUSES.join(',')}),ielts_status.eq.${IELTS_ACTIVE}`)
      .order('created_at', { ascending: true })
      .range(from, from + PAGE_SIZE - 1)

    if (error) {
      throw new Error(`profiles read failed: ${error.message}`)
    }
    if (!data || data.length === 0) break

    rows.push(...data)
    if (data.length < PAGE_SIZE) break
    if (LIMIT !== null && rows.length >= LIMIT) break
    from += PAGE_SIZE
  }

  return LIMIT !== null ? rows.slice(0, LIMIT) : rows
}

/**
 * Resolve the Prisma `User` for a Supabase account WITHOUT creating one.
 *
 * Mirrors the lookup order in src/lib/identity/lookup.ts - `supabaseUserId`
 * first, then the legacy primary-key match - plus an email match, because an
 * unadopted pre-existing row is exactly the case this report needs to see.
 * It deliberately does NOT project a missing account: a report must not
 * change the thing it is reporting on.
 */
async function findPrismaUser(profile) {
  const bySupabaseId = await prisma.user.findFirst({
    where: { supabaseUserId: profile.id },
    select: { id: true, email: true, supabaseUserId: true },
  })
  if (bySupabaseId) return { user: bySupabaseId, matchedOn: 'supabaseUserId' }

  const byPk = await prisma.user.findUnique({
    where: { id: profile.id },
    select: { id: true, email: true, supabaseUserId: true },
  })
  if (byPk) return { user: byPk, matchedOn: 'id' }

  const email = (profile.email ?? '').trim().toLowerCase()
  if (email) {
    const byEmail = await prisma.user.findUnique({
      where: { email },
      select: { id: true, email: true, supabaseUserId: true },
    })
    if (byEmail) return { user: byEmail, matchedOn: 'email' }
  }

  return { user: null, matchedOn: null }
}

/** Does the Prisma row tell the same story as the profile? */
function statusesAgree(profileStatus, ieltsStatus, sub) {
  if (profileStatus === 'pro') return LIVE_PRISMA_STATUSES.has(sub.status)
  if (profileStatus === 'past_due' || profileStatus === 'unpaid') return sub.status === 'PAST_DUE'
  if (profileStatus === 'cancelled') return sub.status === 'CANCELLED'
  if (profileStatus === 'paused') return sub.status === 'PAUSED'
  // An IELTS-only payer has no expectation on `subscription_status` at all;
  // any live Prisma row is consistent with holding IELTS access.
  if (ieltsStatus === IELTS_ACTIVE) return true
  return true
}

// ── Main ────────────────────────────────────────────────────────────────────

async function main() {
  const startedAt = new Date()
  const profiles = await fetchPayingProfiles()

  const counts = {
    profilesExamined: profiles.length,
    NO_PRISMA_USER: 0,
    NO_SUBSCRIPTION_ROW: 0,
    STATUS_DISAGREES: 0,
    CONSISTENT: 0,
  }
  const findings = []

  for (const profile of profiles) {
    const { user, matchedOn } = await findPrismaUser(profile)

    const base = {
      supabaseUserId: profile.id,
      email: maskEmail(profile.email),
      profileSubscriptionStatus: profile.subscription_status ?? null,
      profileIeltsStatus: profile.ielts_status ?? null,
      profileSubscriptionEndDate: iso(profile.subscription_end_date),
      stripeCustomerId: profile.stripe_customer_id ?? null,
      prismaUserId: user?.id ?? null,
      prismaUserMatchedOn: matchedOn,
    }

    if (!user) {
      counts.NO_PRISMA_USER++
      findings.push({
        ...base,
        state: 'NO_PRISMA_USER',
        detail:
          'profiles records a paid relationship, but this account has no Prisma User row, so a ' +
          'Subscription row could never have been written for it.',
      })
      continue
    }

    const sub = await prisma.subscription.findUnique({
      where: { userId: user.id },
      select: {
        id: true,
        status: true,
        plan: true,
        platform: true,
        stripeCustomerId: true,
        stripeSubscriptionId: true,
        currentPeriodStart: true,
        currentPeriodEnd: true,
        cancelledAt: true,
        paymentCount: true,
        grandfatheredPriceMinor: true,
      },
    })

    if (!sub) {
      counts.NO_SUBSCRIPTION_ROW++
      findings.push({
        ...base,
        state: 'NO_SUBSCRIPTION_ROW',
        detail:
          'The Prisma User row exists but carries no Subscription row, so entitlements, the ' +
          'trial lifecycle and renewal logic all read this customer as a free user.',
      })
      continue
    }

    const subFacts = {
      subscriptionRowId: sub.id,
      prismaStatus: sub.status,
      prismaPlan: sub.plan,
      prismaPlatform: sub.platform,
      prismaStripeCustomerId: sub.stripeCustomerId,
      prismaStripeSubscriptionId: sub.stripeSubscriptionId,
      currentPeriodStart: iso(sub.currentPeriodStart),
      currentPeriodEnd: iso(sub.currentPeriodEnd),
      cancelledAt: iso(sub.cancelledAt),
      paymentCount: sub.paymentCount,
      grandfatheredPriceMinor: sub.grandfatheredPriceMinor,
    }

    if (!statusesAgree(profile.subscription_status, profile.ielts_status, sub)) {
      counts.STATUS_DISAGREES++
      findings.push({
        ...base,
        ...subFacts,
        state: 'STATUS_DISAGREES',
        detail:
          `profiles.subscription_status is '${profile.subscription_status}' but the Prisma row ` +
          `says '${sub.status}'. One of the two writes did not land.`,
      })
      continue
    }

    counts.CONSISTENT++
    if (INCLUDE_CONSISTENT) {
      findings.push({ ...base, ...subFacts, state: 'CONSISTENT', detail: 'The two systems agree.' })
    }
  }

  const report = {
    generatedAt: startedAt.toISOString(),
    reportOnly: true,
    wroteAnything: false,
    contactedStripe: false,
    emailsMasked: !SHOW_EMAILS,
    limitApplied: LIMIT,
    payingStatusesQueried: PAYING_STATUSES,
    counts,
    findings,
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
  console.log('Stripe subscription reconciliation - REPORT ONLY, nothing was written')
  console.log('====================================================================')
  console.log(`Generated:            ${report.generatedAt}`)
  console.log(`Profiles examined:    ${counts.profilesExamined}`)
  console.log(`  No Prisma User:     ${counts.NO_PRISMA_USER}`)
  console.log(`  No Subscription:    ${counts.NO_SUBSCRIPTION_ROW}`)
  console.log(`  Status disagrees:   ${counts.STATUS_DISAGREES}`)
  console.log(`  Consistent:         ${counts.CONSISTENT}`)
  console.log('')

  const unreconciled = counts.NO_PRISMA_USER + counts.NO_SUBSCRIPTION_ROW
  if (unreconciled === 0 && counts.STATUS_DISAGREES === 0) {
    console.log('No disagreement found between profiles and the Prisma billing records.')
  } else {
    console.log(
      `${unreconciled} account(s) look like payers with no billing record, and ` +
        `${counts.STATUS_DISAGREES} disagree on status. Listed below.`,
    )
    console.log('')
    for (const f of findings) {
      if (f.state === 'CONSISTENT') continue
      console.log(`- ${f.state}  ${f.supabaseUserId}  ${f.email ?? '(no email on profile)'}`)
      console.log(
        `    profiles: subscription_status=${f.profileSubscriptionStatus ?? 'null'}` +
          `, ielts_status=${f.profileIeltsStatus ?? 'null'}` +
          `, stripe_customer=${f.stripeCustomerId ?? 'null'}`,
      )
      if (f.prismaStatus) {
        console.log(
          `    prisma:   status=${f.prismaStatus}, plan=${f.prismaPlan}` +
            `, stripe_subscription=${f.prismaStripeSubscriptionId ?? 'null'}` +
            `, period_end=${f.currentPeriodEnd ?? 'null'}`,
        )
      }
      console.log(`    ${f.detail}`)
    }
  }

  console.log('')
  console.log("Next steps are a person's, not this script's:")
  console.log('  1. Confirm each account against the Stripe dashboard before acting on it.')
  console.log('  2. A NO_PRISMA_USER account needs its identity projected first -')
  console.log('     src/lib/identity/ does that the moment the customer next signs in,')
  console.log('     or scripts/backfill-prisma-users.mjs can do it in bulk.')
  console.log("  3. Replaying the customer's latest Stripe subscription event through the")
  console.log('     fixed webhook writes the billing record. Do not create rows by hand.')
  if (OUT_PATH) console.log(`\nJSON report written to ${OUT_PATH}`)
}

main()
  .catch((err) => {
    console.error('[reconcile] failed:', err)
    process.exitCode = 1
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
