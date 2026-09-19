#!/usr/bin/env node
/**
 * The Friday growth report (SM-9).
 *
 * WHY. The KPI framework rules that first payment comes from Stripe only, and
 * that PostHog undercounts by design - it is consent-gated, minors are excluded
 * and autocapture is off. Today the only conversion signals are client-side: a
 * `subscription_started` fired on a redirect, a GA4 purchase on
 * `?checkout=success`, and `first_essay_submitted` from one page. Every one of
 * those is a number that can be wrong in the direction that flatters.
 *
 * Nothing produced the weekly report the roadmap commits to, so the registers
 * and the product already disagree: the affiliate register in the business
 * folder is empty while the database holds two active affiliate accounts.
 *
 * READ-ONLY, STRUCTURALLY. Every query here is a SELECT. There is no INSERT,
 * UPDATE or DELETE anywhere in this file and no code path that could add one,
 * which matters because it runs against a production database holding
 * children's data.
 *
 * NO PERSONAL DATA LEAVES THE MACHINE. The report contains counts. No email, no
 * name, no school, no identifier of any kind. `assertNoPii` checks the output
 * before it is written rather than trusting that.
 *
 * COUNTS, NOT PERCENTAGES, BELOW THIRTY. KPI rule 2. A conversion rate computed
 * from four events is not a rate, it is an anecdote with a decimal point.
 *
 * WHAT IS MISSING AND WHY. The money half. Only `sk_test_` keys are on this
 * machine, so trials started, first payments, active subscriptions and MRR
 * cannot be read. That needs a restricted read-only LIVE key, which only the
 * account owner can issue. The report says so in place rather than leaving a
 * blank that reads as a zero.
 *
 *   node --env-file=.env.local scripts/growth-report.mjs
 *   node --env-file=.env.local scripts/growth-report.mjs --write
 */

import { writeFileSync, mkdirSync, existsSync } from 'node:fs'
import { join, resolve } from 'node:path'
import pg from 'pg'

const WRITE = process.argv.includes('--write')
const BUSINESS = resolve('C:/Users/calum/OneDrive/Desktop/The English Hub - Business')
const OUT_DIR = join(BUSINESS, '10 Growth & Analytics')

/** KPI rule 2: below this many events, report the count and not a rate. */
const RATE_FLOOR = 30

function formatCount(n, of) {
  if (of !== undefined && of >= RATE_FLOOR) {
    return `${n} (${Math.round((n / of) * 100)}%)`
  }
  return String(n)
}

/**
 * Refuse to write anything that looks like personal data.
 *
 * The report is counts by design, but "by design" is what the five public forms
 * that wrote to nothing were too. This checks.
 */
export function assertNoPii(text) {
  const patterns = [
    [/[\w.+-]+@[\w-]+\.[\w.]+/, 'an email address'],
    [/\b[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}\b/i, 'a uuid'],
    [/\bc[a-z0-9]{24}\b/, 'a cuid'],
  ]
  for (const [pattern, what] of patterns) {
    const m = text.match(pattern)
    if (m) throw new Error(`the report contains ${what} (${m[0]}); it must contain counts only`)
  }
}

const QUERIES = {
  signupsByWeek: `
    select to_char(date_trunc('week', created_at), 'YYYY-MM-DD') as week,
           count(*)::int as signups
      from profiles
     where created_at > now() - interval '12 weeks'
     group by 1 order by 1`,

  signupsByRole: `
    select coalesce(role, '(none)') as role, count(*)::int as n
      from profiles group by 1 order by n desc`,

  subscriptionStatus: `
    select coalesce(subscription_status, '(none)') as status, count(*)::int as n
      from profiles group by 1 order by n desc`,

  attribution: `
    select coalesce(utm_source, '(none)') as source,
           coalesce(utm_medium, '(none)') as medium,
           coalesce(utm_campaign, '(none)') as campaign,
           count(*)::int as n
      from profiles
     where utm_source is not null
     group by 1,2,3 order by n desc`,

  // NOT "adult" and "minor". `profiles.is_minor` is NOT NULL with DEFAULT
  // false, so it cannot express "we do not know" - and on 19 September exactly
  // ONE of 210 accounts had a date of birth on file. Reporting 209 adults
  // would be reporting a column default as a fact about children, on a product
  // whose age gate and parental-consent flow depend on this field.
  ageBands: `
    select case when is_minor is true then 'flagged as a minor'
                when date_of_birth is not null then 'date of birth held, not a minor'
                else 'no date of birth held (column defaults to false)' end as band,
           count(*)::int as n
      from profiles group by 1 order by n desc`,

  affiliates: `
    select coalesce(status, '(none)') as status, count(*)::int as n
      from affiliate_accounts group by 1 order by n desc`,
}

/** Tables that may not exist. A missing one is reported, never counted as zero. */
const OPTIONAL = {
  markingSubmissions: `select count(*)::int as n from marking_submissions`,
  affiliateReferrals: `select count(*)::int as n from affiliate_referrals`,
  cancellationFeedback: `select count(*)::int as n from cancellation_feedback`,
  essays: `select count(*)::int as n from "Essay"`,
  aiFeedback: `select count(*)::int as n from "AIFeedback"`,
}

async function main() {
  const client = new pg.Client({
    connectionString: process.env.DIRECT_URL ?? process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
  })
  await client.connect()

  const data = {}
  for (const [name, sql] of Object.entries(QUERIES)) {
    data[name] = (await client.query(sql)).rows
  }
  for (const [name, sql] of Object.entries(OPTIONAL)) {
    try {
      data[name] = (await client.query(sql)).rows
    } catch (err) {
      // A missing table is a FACT about the product, not a zero. Reporting it
      // as 0 is how "school analytics counted rows in tables that do not
      // exist" happened.
      data[name] = { unavailable: err.message.split('\n')[0] }
    }
  }
  await client.end()

  const totalProfiles = data.signupsByRole.reduce((sum, r) => sum + r.n, 0)
  const lines = []
  const push = (s = '') => lines.push(s)

  push('# Growth report')
  push()
  push(`Generated from the production database, read-only. ${totalProfiles} accounts in total.`)
  push()
  push('Counts, not percentages, wherever the denominator is under 30 (KPI rule 2).')
  push()

  push('## The money half is missing')
  push()
  push('Trials started, first payments, active subscriptions and MRR are NOT in this')
  push('report. The KPI framework rules that first payment comes from Stripe only, and')
  push('only test keys are on this machine. It needs a restricted read-only LIVE key,')
  push('which only you can issue. This section is left stated rather than blank,')
  push('because a blank reads as a zero.')
  push()

  push('## Signups by week')
  push()
  push('| Week beginning | Signups |')
  push('|---|---|')
  for (const r of data.signupsByWeek) push(`| ${r.week} | ${r.signups} |`)
  push()

  push('## Who they are')
  push()
  push('| Role | Accounts |')
  push('|---|---|')
  for (const r of data.signupsByRole) push(`| ${r.role} | ${formatCount(r.n, totalProfiles)} |`)
  push()

  push('## Entitlement state')
  push()
  push('| subscription_status | Accounts |')
  push('|---|---|')
  for (const r of data.subscriptionStatus) push(`| ${r.status} | ${r.n} |`)
  push()

  push('## Where they came from')
  push()
  const attributed = data.attribution.reduce((sum, r) => sum + r.n, 0)
  push(`${attributed} of ${totalProfiles} accounts carry an attribution tag.`)
  push()
  push('| Source | Medium | Campaign | Accounts |')
  push('|---|---|---|---|')
  for (const r of data.attribution) {
    push(`| ${r.source} | ${r.medium} | ${r.campaign} | ${r.n} |`)
  }
  push()

  push('## What we know about age')
  push()
  push('`profiles.is_minor` is NOT NULL with a default of false, so it cannot record')
  push('"unknown". Read the third row as "no age information", not as "adult". On a')
  push('product built for children, with an age gate and a parental-consent flow that')
  push('both read this field, that distinction is the whole point.')
  push()
  push('| Band | Accounts |')
  push('|---|---|')
  for (const r of data.ageBands) push(`| ${r.band} | ${r.n} |`)
  push()

  push('## Activation and affiliates')
  push()
  push('Two stores hold marked work and they do not agree, so both are reported')
  push('rather than one being chosen: `marking_submissions` is the examiner path,')
  push('`Essay`/`AIFeedback` the learner one. A single number here would be a guess')
  push('about which one counts.')
  push()
  for (const [label, key] of [
    ['marking_submissions rows', 'markingSubmissions'],
    ['Essay rows', 'essays'],
    ['AIFeedback rows', 'aiFeedback'],
    ['Affiliate referrals', 'affiliateReferrals'],
    ['Cancellation reasons captured', 'cancellationFeedback'],
  ]) {
    const value = data[key]
    push(
      Array.isArray(value)
        ? `- ${label}: ${value[0].n}`
        : `- ${label}: TABLE UNAVAILABLE - ${value.unavailable}`,
    )
  }
  push()
  push('| Affiliate account status | Count |')
  push('|---|---|')
  for (const r of data.affiliates) push(`| ${r.status} | ${r.n} |`)
  push()

  const markdown = lines.join('\n') + '\n'
  assertNoPii(markdown)

  const csv = [
    'section,key,value',
    ...data.signupsByWeek.map((r) => `signups_by_week,${r.week},${r.signups}`),
    ...data.signupsByRole.map((r) => `signups_by_role,${r.role},${r.n}`),
    ...data.subscriptionStatus.map((r) => `subscription_status,${r.status},${r.n}`),
    ...data.attribution.map((r) => `attribution,${r.source}|${r.medium}|${r.campaign},${r.n}`),
    ...data.ageBands.map((r) => `age_band,${r.band},${r.n}`),
    ...data.affiliates.map((r) => `affiliate_status,${r.status},${r.n}`),
  ].join('\n')
  assertNoPii(csv)

  console.log(markdown)

  if (WRITE) {
    if (!existsSync(OUT_DIR)) mkdirSync(OUT_DIR, { recursive: true })
    // The date comes from the environment so a re-run produces the same
    // filename and the diff shows what changed rather than that it ran again.
    const stamp = process.env.REPORT_DATE ?? new Date().toISOString().slice(0, 10)
    writeFileSync(join(OUT_DIR, `${stamp}-growth.md`), markdown, 'utf8')
    writeFileSync(join(OUT_DIR, `${stamp}-growth.csv`), csv + '\n', 'utf8')
    console.log(`Wrote ${stamp}-growth.md and .csv into 10 Growth & Analytics`)
  } else {
    console.log('Nothing written. Re-run with --write.')
  }
}

if (process.argv[1] && process.argv[1].endsWith('growth-report.mjs')) {
  await main()
}
