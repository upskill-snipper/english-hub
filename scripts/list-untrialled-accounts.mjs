// ─── Who never got the trial they were promised ─────────────────────────────
//
// Companion to src/lib/billing/provision-signup-trial.ts. Until 18 September
// 2026 the no-card trial had exactly one writer, POST /api/auth/register, and
// it sat behind a session gate that nothing could satisfy: the register page
// calls it immediately after supabase.auth.signUp(), and with email
// confirmation on there is no session at that instant, so the route answered
// 403 and the call was dropped. On 18 September production held 206 profiles
// and zero TRIALING subscriptions.
//
// Provisioning now happens in the auth callback, which fixes every account
// created from today. It deliberately does NOT reach backwards: the window
// guard means an account created more than 7 days ago gets nothing, so a
// dormant free account cannot be handed a trial simply by logging in.
//
// Whether the accounts that were promised a trial and never received one
// should be given a fresh one now that the AI works is a business decision
// with a real cost attached, and it is Calum's. This script prepares the list
// so the decision can be made on numbers rather than on a guess.
//
// READ ONLY. There is no --apply. It writes nothing, to anything, ever.
//
// It prints ids, dates, roles and counts. It never prints an email address or
// a name: the output is meant to be pasteable into a report.
//
//   node --env-file=.env.local scripts/list-untrialled-accounts.mjs
//   node --env-file=.env.local scripts/list-untrialled-accounts.mjs --days 60
// ────────────────────────────────────────────────────────────────────────────

import pg from 'pg'

const daysArgIndex = process.argv.indexOf('--days')
const DAYS = daysArgIndex !== -1 ? Number(process.argv[daysArgIndex + 1]) : 30
if (!Number.isFinite(DAYS) || DAYS <= 0) {
  console.error('--days must be a positive number')
  process.exit(1)
}

const url = process.env.DIRECT_URL || process.env.DATABASE_URL
if (!url) {
  console.error('No DIRECT_URL or DATABASE_URL in the environment.')
  console.error('Run with: node --env-file=.env.local scripts/list-untrialled-accounts.mjs')
  process.exit(1)
}

const client = new pg.Client({ connectionString: url, ssl: { rejectUnauthorized: false } })
await client.connect()

try {
  // The whole population first, so the shortfall is visible in context rather
  // than as a number with nothing to compare it to.
  const { rows: totals } = await client.query(`
    SELECT
      COUNT(*)                                                       AS profiles,
      COUNT(*) FILTER (WHERE COALESCE(subscription_status,'') IN ('','free')) AS free,
      COUNT(*) FILTER (WHERE subscription_status = 'pro')            AS pro,
      COUNT(*) FILTER (WHERE subscription_status = 'cancelled')      AS cancelled
    FROM public.profiles
  `)

  const { rows: subs } = await client.query(`
    SELECT status, COUNT(*) AS n FROM public."Subscription" GROUP BY status ORDER BY status
  `)

  // Accounts that are free, inside the requested window, and hold no
  // Subscription row of any kind. These are the ones that were shown "your
  // free trial is ready" and then refused on their first essay.
  const { rows: candidates } = await client.query(
    `
    SELECT
      p.id,
      p.created_at,
      COALESCE(p.role, 'unknown')                 AS role,
      COALESCE(p.subscription_status, '(null)')   AS status,
      (u.email_confirmed_at IS NOT NULL)          AS confirmed
    FROM public.profiles p
    LEFT JOIN auth.users u ON u.id = p.id
    -- "supabaseUserId" is uuid, not text. The camelCase Prisma tables mix the
    -- two: "Subscription"."userId" holds a cuid as text, while this column is
    -- a real uuid, so it joins straight to profiles.id with no cast.
    LEFT JOIN public."User" pu ON pu."supabaseUserId" = p.id
    LEFT JOIN public."Subscription" s ON s."userId" = pu.id
    WHERE COALESCE(p.subscription_status, '') IN ('', 'free')
      AND p.created_at >= NOW() - ($1 || ' days')::interval
      AND s.id IS NULL
    ORDER BY p.created_at DESC
  `,
    [String(DAYS)],
  )

  const byRole = {}
  let confirmedCount = 0
  for (const r of candidates) {
    byRole[r.role] = (byRole[r.role] ?? 0) + 1
    if (r.confirmed) confirmedCount++
  }

  console.log('─── Population ───')
  console.table(totals)
  console.log('─── Prisma Subscription rows by status ───')
  console.table(subs)

  console.log(`\n─── Never trialled, created in the last ${DAYS} days ───`)
  console.log(`Accounts:            ${candidates.length}`)
  console.log(`Email confirmed:     ${confirmedCount}`)
  console.log(`Never confirmed:     ${candidates.length - confirmedCount}`)
  console.log(`By role:             ${JSON.stringify(byRole)}`)

  if (candidates.length) {
    console.log(`Oldest:              ${candidates[candidates.length - 1].created_at.toISOString()}`)
    console.log(`Newest:              ${candidates[0].created_at.toISOString()}`)
  }

  console.log('\n─── Ids, for whoever runs the decision ───')
  console.log('Only confirmed accounts are listed: an unconfirmed address cannot')
  console.log('be emailed about a trial, and giving one an entitlement is pointless.')
  for (const r of candidates.filter((r) => r.confirmed)) {
    console.log(`${r.id}  ${r.created_at.toISOString().slice(0, 10)}  ${r.role}`)
  }

  console.log('\nThis script wrote nothing. Granting these accounts a trial is a')
  console.log('separate, deliberate action and is Calum\'s decision to take.')
} finally {
  await client.end()
}
