/**
 * Stripe ↔ pricing.ts product/price sync auditor.
 *
 * Reads canonical pricing from `src/constants/pricing.ts`, lists all active
 * Products + Prices in the connected Stripe account, and produces a diff
 * report so the founder can see at a glance which env-var-named prices
 * exist, which are mismatched, and which are missing.
 *
 * Usage:
 *   npx tsx scripts/stripe-sync-products.ts                 # dry-run, no writes
 *   npx tsx scripts/stripe-sync-products.ts --dry-run       # explicit dry-run
 *   npx tsx scripts/stripe-sync-products.ts --apply         # CREATE missing prices
 *   npx tsx scripts/stripe-sync-products.ts --apply --with-webhook
 *                                                          # also create the
 *                                                          # /api/stripe/webhook
 *                                                          # endpoint with the
 *                                                          # 8 required events
 *   npx tsx scripts/stripe-sync-products.ts -v              # verbose logging
 *
 * Exit codes:
 *   0 — every expected price matches Stripe (or env-unset only).
 *   2 — at least one mismatch (Stripe amount differs from pricing.ts).
 *   1 — unexpected error (Stripe API failure, malformed args, etc.).
 *
 * Outputs:
 *   - Console table summarising each expected price.
 *   - Copy-paste `vercel env add` commands for any new STRIPE_PRICE_* IDs.
 *   - business-docs/STRIPE-SYNC-REPORT.md (Markdown report).
 *
 * Safety:
 *   - Defaults to dry-run. Without --apply, the script never POSTs to Stripe;
 *     it only reads. Missing prices are logged with the exact `stripe.prices
 *     .create(...)` arguments that would be sent under --apply.
 *   - The script LOUDLY announces TEST vs LIVE mode at start so you can't
 *     accidentally create LIVE products when you meant test, or vice versa.
 *   - If STRIPE_SECRET_KEY is unset, the script explains how to set it and
 *     exits without throwing — safe to run on a fresh checkout.
 *   - Never deletes or archives anything. Stripe price archival is a manual
 *     step in the Dashboard by design.
 *   - Webhook creation is idempotent: if an endpoint pointing at the same URL
 *     already exists, we don't create a duplicate.
 */

import Stripe from 'stripe'
import { writeFileSync, mkdirSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { PRICING } from '../src/constants/pricing'

// ── Argument parsing ───────────────────────────────────────────────────────

const args = new Set(process.argv.slice(2))
const APPLY = args.has('--apply')
const DRY_RUN = !APPLY // default
const VERBOSE = args.has('--verbose') || args.has('-v')
const WITH_WEBHOOK = args.has('--with-webhook')

// Webhook URL — defaults to production. Override with WEBHOOK_URL env var if
// you want to point at a preview deployment for testing.
const WEBHOOK_URL = process.env.WEBHOOK_URL || 'https://theenglishhub.app/api/stripe/webhook'

// Events the /api/stripe/webhook handler actually subscribes to. Must match
// the list in business-docs/STRIPE-GO-LIVE-CHECKLIST.md §4.
const WEBHOOK_EVENTS: Stripe.WebhookEndpointCreateParams.EnabledEvent[] = [
  'checkout.session.completed',
  'customer.subscription.created',
  'customer.subscription.updated',
  'customer.subscription.deleted',
  'customer.subscription.trial_will_end',
  'invoice.paid',
  'invoice.payment_failed',
  'charge.refunded',
]

// ── Expected-price specification ───────────────────────────────────────────
// Every row here becomes one line in the report and one env-var entry in
// .env.example. `amountPounds` is what pricing.ts says we charge; the script
// converts to pence for Stripe comparison. `productKey` groups prices under
// the same Stripe Product (so monthly + annual sit together in the dashboard).

interface ExpectedPrice {
  envVar: string
  productKey: 'student' | 'student_standard' | 'teacher' | 'teacher_standard'
  productName: string
  nickname: string
  amountPounds: number
  interval: 'month' | 'year'
  /** Free-form note shown in the markdown report. */
  note?: string
}

const EXPECTED: ExpectedPrice[] = [
  // ── Student — Early Access (current live pricing) ──────────────────────
  {
    envVar: 'STRIPE_PRICE_STUDENT_MONTHLY',
    productKey: 'student',
    productName: 'Student Access',
    nickname: 'Student Monthly (Early Access)',
    amountPounds: PRICING.STUDENT_MONTHLY,
    interval: 'month',
    note: 'Early-access founding price. New signups pay this until Aug 2026.',
  },
  {
    envVar: 'STRIPE_PRICE_STUDENT_ANNUAL',
    productKey: 'student',
    productName: 'Student Access',
    nickname: 'Student Annual (Early Access)',
    amountPounds: PRICING.STUDENT_ANNUAL,
    interval: 'year',
    note: 'Early-access founding annual price. Affiliate code 2026ENGLISH discounts to £20.',
  },
  // ── Student — Standard (effective Aug 2026) ────────────────────────────
  {
    envVar: 'STRIPE_PRICE_STUDENT_MONTHLY_STANDARD',
    productKey: 'student_standard',
    productName: 'Student Access (Standard)',
    nickname: 'Student Monthly (Standard, Aug 2026)',
    amountPounds: PRICING.STUDENT_MONTHLY_STANDARD,
    interval: 'month',
    note: 'Anchored standard price shown alongside early-access; goes live Aug 2026.',
  },
  {
    envVar: 'STRIPE_PRICE_STUDENT_ANNUAL_STANDARD',
    productKey: 'student_standard',
    productName: 'Student Access (Standard)',
    nickname: 'Student Annual (Standard, Aug 2026)',
    amountPounds: PRICING.STUDENT_ANNUAL_STANDARD,
    interval: 'year',
    note: 'Anchored standard annual price; goes live Aug 2026.',
  },
  // ── Teacher — Early Access ─────────────────────────────────────────────
  {
    envVar: 'STRIPE_PRICE_TEACHER_MONTHLY',
    productKey: 'teacher',
    productName: 'Teacher Access',
    nickname: 'Teacher Monthly (Early Access)',
    amountPounds: PRICING.TEACHER_MONTHLY,
    interval: 'month',
  },
  {
    envVar: 'STRIPE_PRICE_TEACHER_ANNUAL',
    productKey: 'teacher',
    productName: 'Teacher Access',
    nickname: 'Teacher Annual (Early Access)',
    amountPounds: PRICING.TEACHER_ANNUAL,
    interval: 'year',
  },
  // ── Teacher — Standard ─────────────────────────────────────────────────
  {
    envVar: 'STRIPE_PRICE_TEACHER_MONTHLY_STANDARD',
    productKey: 'teacher_standard',
    productName: 'Teacher Access (Standard)',
    nickname: 'Teacher Monthly (Standard, Aug 2026)',
    amountPounds: PRICING.TEACHER_MONTHLY_STANDARD,
    interval: 'month',
  },
  {
    envVar: 'STRIPE_PRICE_TEACHER_ANNUAL_STANDARD',
    productKey: 'teacher_standard',
    productName: 'Teacher Access (Standard)',
    nickname: 'Teacher Annual (Standard, Aug 2026)',
    amountPounds: PRICING.TEACHER_ANNUAL_STANDARD,
    interval: 'year',
  },
]

// ── Result types ───────────────────────────────────────────────────────────

type Status = 'match' | 'mismatch' | 'missing' | 'env_unset'

interface ResultRow {
  envVar: string
  expectedPence: number
  expectedDisplay: string
  interval: 'month' | 'year'
  productName: string
  nickname: string
  envValue: string | null
  stripePriceId: string | null
  stripeAmountPence: number | null
  status: Status
  note?: string
  /** When status === 'missing', the create-args we *would* send under --apply. */
  proposedCreateArgs?: Stripe.PriceCreateParams
}

// ── Helpers ────────────────────────────────────────────────────────────────

function poundsToPence(p: number): number {
  return Math.round(p * 100)
}

function statusEmoji(s: Status): string {
  switch (s) {
    case 'match':
      return 'OK'
    case 'mismatch':
      return 'MISMATCH'
    case 'missing':
      return 'MISSING'
    case 'env_unset':
      return 'NO-ENV'
  }
}

function fmtPence(pence: number | null): string {
  if (pence === null) return '—'
  return `£${(pence / 100).toFixed(2)}`
}

// ── Main ───────────────────────────────────────────────────────────────────

async function main() {
  const secret = process.env.STRIPE_SECRET_KEY

  // ── Mode banner ─────────────────────────────────────────────────────────
  // Print TEST vs LIVE loudly at the very top so the founder cannot
  // accidentally run --apply against the wrong account.
  const mode: 'OFFLINE' | 'TEST' | 'LIVE' | 'UNKNOWN' = !secret
    ? 'OFFLINE'
    : secret.startsWith('sk_live_')
      ? 'LIVE'
      : secret.startsWith('sk_test_')
        ? 'TEST'
        : 'UNKNOWN'

  console.log('━'.repeat(72))
  console.log(
    `Stripe sync — mode: ${mode}  ·  ${DRY_RUN ? 'DRY RUN (read-only)' : 'APPLY (will create missing prices)'}`,
  )
  if (mode === 'LIVE' && APPLY) {
    console.log('')
    console.log('  ⚠  LIVE MODE + --apply: this will create real Products and Prices')
    console.log('     in your production Stripe account. They cannot be deleted, only')
    console.log('     archived. Press Ctrl-C now if you meant to use sk_test_…')
  }
  console.log('━'.repeat(72))

  // Graceful fallback when no API key is configured locally — common on a
  // fresh founder checkout. The script still produces a useful diff against
  // env vars and writes the report, so the founder sees what's needed.
  let stripeClient: Stripe | null = null
  if (!secret) {
    console.log('')
    console.log('STRIPE_SECRET_KEY is not set. Running in offline mode.')
    console.log('  → No Stripe API calls will be made.')
    console.log('  → Status will be derived from .env presence only.')
    console.log('  → Set STRIPE_SECRET_KEY to your sk_test_… or sk_live_… key,')
    console.log('    then re-run with --dry-run for a full diff, or --apply to create.')
    console.log('')
  } else {
    stripeClient = new Stripe(secret, {
      apiVersion: '2026-02-25.clover',
      typescript: true,
    })
    if (VERBOSE) console.log(`Connected to Stripe (key prefix ${secret.slice(0, 8)}…)`)
  }

  // Pull every active price (paginating). We index by id so we can look up
  // both env-configured prices and search for matches by amount+interval+name.
  const allPrices: Stripe.Price[] = []
  const allProducts: Stripe.Product[] = []

  if (stripeClient) {
    if (VERBOSE) console.log('Listing Stripe products…')
    for await (const product of stripeClient.products.list({ active: true, limit: 100 })) {
      allProducts.push(product)
    }
    if (VERBOSE) console.log(`  → ${allProducts.length} active products`)

    if (VERBOSE) console.log('Listing Stripe prices…')
    for await (const price of stripeClient.prices.list({ active: true, limit: 100 })) {
      allPrices.push(price)
    }
    if (VERBOSE) console.log(`  → ${allPrices.length} active prices`)
  }

  const priceById = new Map(allPrices.map((p) => [p.id, p]))

  // ── Build a result row per expected price ────────────────────────────────
  const results: ResultRow[] = EXPECTED.map((spec) => {
    const expectedPence = poundsToPence(spec.amountPounds)
    const envValue = process.env[spec.envVar] ?? null
    const row: ResultRow = {
      envVar: spec.envVar,
      expectedPence,
      expectedDisplay: `£${spec.amountPounds.toFixed(2)} / ${spec.interval}`,
      interval: spec.interval,
      productName: spec.productName,
      nickname: spec.nickname,
      envValue,
      stripePriceId: null,
      stripeAmountPence: null,
      status: 'env_unset',
      note: spec.note,
    }

    // No Stripe connection → status is derived purely from env presence.
    if (!stripeClient) {
      row.status = envValue ? 'match' : 'env_unset'
      return row
    }

    // Path 1: env var is set and points to a real, active Stripe price.
    if (envValue) {
      const live = priceById.get(envValue)
      if (live && live.unit_amount != null) {
        row.stripePriceId = live.id
        row.stripeAmountPence = live.unit_amount
        const intervalMatches = live.recurring?.interval === spec.interval
        row.status = live.unit_amount === expectedPence && intervalMatches ? 'match' : 'mismatch'
        return row
      }
      // Env points at a price that doesn't exist (or isn't active). Treat as missing.
      row.status = 'missing'
    }

    // Path 2: no env var. See if Stripe already has a price that matches by
    // (amount, currency, interval, nickname) — useful when the founder
    // created the price in the Dashboard but hasn't put the ID in env yet.
    const candidate = allPrices.find(
      (p) =>
        p.unit_amount === expectedPence &&
        p.currency === 'gbp' &&
        p.recurring?.interval === spec.interval &&
        (p.nickname === spec.nickname ||
          (typeof p.product === 'string' &&
            allProducts.find((prod) => prod.id === p.product)?.name === spec.productName)),
    )
    if (candidate) {
      row.stripePriceId = candidate.id
      row.stripeAmountPence = candidate.unit_amount ?? null
      // Env var unset, but a matching price exists — surface so the founder
      // can paste the ID into .env.
      row.status = envValue ? 'match' : 'env_unset'
      return row
    }

    // Path 3: nothing matches — propose creation args.
    const existingProduct = allProducts.find((p) => p.name === spec.productName)
    row.proposedCreateArgs = {
      currency: 'gbp',
      unit_amount: expectedPence,
      recurring: { interval: spec.interval },
      nickname: spec.nickname,
      ...(existingProduct
        ? { product: existingProduct.id }
        : { product_data: { name: spec.productName } }),
    }
    row.status = 'missing'
    return row
  })

  // ── Apply mode: actually create missing prices ───────────────────────────
  if (APPLY && stripeClient) {
    console.log('')
    console.log('--apply specified. Creating missing prices…')
    for (const row of results) {
      if (row.status !== 'missing' || !row.proposedCreateArgs) continue
      try {
        const created = await stripeClient.prices.create(row.proposedCreateArgs)
        row.stripePriceId = created.id
        row.stripeAmountPence = created.unit_amount ?? null
        row.status = 'match'
        console.log(
          `  CREATED ${row.envVar} → ${created.id} (${fmtPence(created.unit_amount ?? null)} / ${row.interval})`,
        )
      } catch (err) {
        console.error(`  FAILED ${row.envVar}:`, err instanceof Error ? err.message : err)
      }
    }
  }

  // ── Webhook endpoint (optional, --with-webhook only) ────────────────────
  // Idempotent: skips if an endpoint already exists for the same URL.
  let webhookEndpoint: { id: string; secret: string | null } | null = null
  if (APPLY && WITH_WEBHOOK && stripeClient) {
    console.log('')
    console.log(`--with-webhook specified. Ensuring webhook endpoint at ${WEBHOOK_URL}…`)
    try {
      // Check for an existing endpoint pointing at the same URL.
      const existing: Stripe.WebhookEndpoint[] = []
      for await (const e of stripeClient.webhookEndpoints.list({ limit: 100 })) {
        existing.push(e)
      }
      const match = existing.find((e) => e.url === WEBHOOK_URL && e.status === 'enabled')
      if (match) {
        webhookEndpoint = { id: match.id, secret: null }
        console.log(`  EXISTS ${match.id}  (signing secret not re-shown by Stripe API)`)
        console.log("         → If you don't already have STRIPE_WEBHOOK_SECRET set,")
        console.log('           open https://dashboard.stripe.com/webhooks/' + match.id)
        console.log('           click "Reveal" next to the signing secret, and copy it.')
      } else {
        const created = await stripeClient.webhookEndpoints.create({
          url: WEBHOOK_URL,
          enabled_events: WEBHOOK_EVENTS,
          description: 'English Hub — main webhook',
          api_version: '2026-02-25.clover',
        })
        webhookEndpoint = { id: created.id, secret: created.secret ?? null }
        console.log(`  CREATED ${created.id}`)
        if (created.secret) {
          console.log(`  STRIPE_WEBHOOK_SECRET = ${created.secret}`)
          console.log('  ↑ Save this immediately — Stripe only shows it once at creation.')
        }
      }
    } catch (err) {
      console.error('  FAILED webhook creation:', err instanceof Error ? err.message : err)
    }
  }

  // ── Console table ────────────────────────────────────────────────────────
  console.log('')
  printConsoleTable(results)

  // ── Vercel env-var paste block ──────────────────────────────────────────
  // After --apply, print the exact `vercel env add` commands the founder can
  // paste into PowerShell to wire the new prices + (optionally) the webhook
  // secret into Vercel Production.
  if (APPLY && stripeClient) {
    const newlyAssigned = results.filter((r) => r.stripePriceId && r.envValue !== r.stripePriceId)
    const webhookLine = webhookEndpoint?.secret
      ? `vercel env add STRIPE_WEBHOOK_SECRET production <<< "${webhookEndpoint.secret}"`
      : null

    if (newlyAssigned.length > 0 || webhookLine || mode === 'LIVE') {
      console.log('')
      console.log('━'.repeat(72))
      console.log('Next step — paste these into Vercel (Production scope):')
      console.log('━'.repeat(72))
      console.log('')
      console.log('# Option A — Vercel CLI (after `npm i -g vercel && vercel link`):')
      for (const r of newlyAssigned) {
        console.log(`vercel env add ${r.envVar} production <<< "${r.stripePriceId}"`)
      }
      if (webhookLine) console.log(webhookLine)
      if (mode === 'LIVE') {
        console.log('vercel env add STRIPE_SECRET_KEY production           # paste your sk_live_…')
        console.log(
          'vercel env add NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY production  # paste pk_live_…',
        )
      }
      console.log('vercel --prod                                          # redeploy')
      console.log('')
      console.log('# Option B — Vercel Dashboard:')
      console.log(
        '# https://vercel.com/upskill-snippers-projects/english-hub/settings/environment-variables',
      )
      for (const r of newlyAssigned) {
        console.log(`#   ${r.envVar} = ${r.stripePriceId}`)
      }
      if (webhookEndpoint?.secret) {
        console.log(`#   STRIPE_WEBHOOK_SECRET = ${webhookEndpoint.secret}`)
      }
      console.log('━'.repeat(72))
    }
  }

  // ── Markdown report ──────────────────────────────────────────────────────
  const reportPath = resolve(__dirname, '..', 'business-docs', 'STRIPE-SYNC-REPORT.md')
  mkdirSync(dirname(reportPath), { recursive: true })
  writeFileSync(
    reportPath,
    buildMarkdownReport(results, { apply: APPLY, hadStripe: !!stripeClient }),
  )
  console.log('')
  console.log(`Report written → ${reportPath}`)

  // ── Summary line ────────────────────────────────────────────────────────
  const counts = {
    match: results.filter((r) => r.status === 'match').length,
    mismatch: results.filter((r) => r.status === 'mismatch').length,
    missing: results.filter((r) => r.status === 'missing').length,
    env_unset: results.filter((r) => r.status === 'env_unset').length,
  }
  console.log('')
  console.log(
    `Summary: ${counts.match} OK · ${counts.mismatch} mismatch · ${counts.missing} missing · ${counts.env_unset} env-unset`,
  )

  if (DRY_RUN && counts.missing > 0) {
    console.log('')
    console.log(
      'To create the missing prices, re-run with: npx tsx scripts/stripe-sync-products.ts --apply',
    )
  }

  // Non-zero exit if anything is mismatched, so CI can flag drift.
  if (counts.mismatch > 0) {
    process.exitCode = 2
  }
}

function printConsoleTable(rows: ResultRow[]) {
  const headers = ['ENV VAR', 'PRICE ID', 'EXPECTED', 'STRIPE', 'STATUS']
  const data = rows.map((r) => [
    r.envVar,
    r.stripePriceId ?? '—',
    r.expectedDisplay,
    fmtPence(r.stripeAmountPence) + (r.stripeAmountPence !== null ? ` / ${r.interval}` : ''),
    statusEmoji(r.status),
  ])
  const widths = headers.map((h, i) => Math.max(h.length, ...data.map((d) => d[i].length)))
  const fmtRow = (cells: string[]) => cells.map((c, i) => c.padEnd(widths[i])).join('  ')
  console.log(fmtRow(headers))
  console.log(widths.map((w) => '─'.repeat(w)).join('  '))
  for (const row of data) console.log(fmtRow(row))
}

function buildMarkdownReport(
  rows: ResultRow[],
  opts: { apply: boolean; hadStripe: boolean },
): string {
  const now = new Date().toISOString()
  const mode = opts.apply ? 'APPLY' : 'DRY-RUN'
  const lines: string[] = []
  lines.push('# Stripe sync report')
  lines.push('')
  lines.push(
    `Generated ${now} · mode \`${mode}\` · Stripe API ${opts.hadStripe ? 'connected' : 'NOT connected (offline)'}`,
  )
  lines.push('')
  lines.push('Source of truth: [`src/constants/pricing.ts`](../src/constants/pricing.ts).')
  lines.push('Generator: [`scripts/stripe-sync-products.ts`](../scripts/stripe-sync-products.ts).')
  lines.push('')
  lines.push('## Summary')
  lines.push('')
  lines.push('| Env var | Stripe price ID | Expected | Stripe actual | Status |')
  lines.push('|---|---|---|---|---|')
  for (const r of rows) {
    const stripeAmount =
      r.stripeAmountPence !== null ? `${fmtPence(r.stripeAmountPence)} / ${r.interval}` : '—'
    lines.push(
      `| \`${r.envVar}\` | \`${r.stripePriceId ?? '—'}\` | ${r.expectedDisplay} | ${stripeAmount} | ${statusEmoji(r.status)} |`,
    )
  }
  lines.push('')

  const missing = rows.filter((r) => r.status === 'missing')
  if (missing.length > 0) {
    lines.push('## Missing prices')
    lines.push('')
    lines.push('Each block below shows the exact `stripe.prices.create(…)` call that would')
    lines.push('be issued under `--apply`. You can also paste these into the Stripe Dashboard.')
    lines.push('')
    for (const r of missing) {
      lines.push(`### ${r.envVar}`)
      lines.push('')
      lines.push(`- Product: **${r.productName}**`)
      lines.push(`- Nickname: \`${r.nickname}\``)
      lines.push(`- Amount: ${r.expectedDisplay}`)
      if (r.note) lines.push(`- Note: ${r.note}`)
      lines.push('')
      lines.push('```js')
      lines.push(`await stripe.prices.create(${JSON.stringify(r.proposedCreateArgs, null, 2)})`)
      lines.push('```')
      lines.push('')
    }
  }

  const mismatched = rows.filter((r) => r.status === 'mismatch')
  if (mismatched.length > 0) {
    lines.push('## Mismatched prices')
    lines.push('')
    lines.push(
      'The env var points at a Stripe price whose amount or interval no longer matches `pricing.ts`.',
    )
    lines.push('Stripe prices are immutable — to fix, create a new price and rotate the env var.')
    lines.push('')
    for (const r of mismatched) {
      lines.push(
        `- \`${r.envVar}\` (\`${r.stripePriceId}\`): expected ${r.expectedDisplay}, Stripe has ${fmtPence(r.stripeAmountPence)} / ${r.interval}`,
      )
    }
    lines.push('')
  }

  lines.push('## How to run')
  lines.push('')
  lines.push('```bash')
  lines.push('# Default — read-only diff')
  lines.push('npx tsx scripts/stripe-sync-products.ts --dry-run')
  lines.push('')
  lines.push('# Create missing prices in the connected Stripe account')
  lines.push('STRIPE_SECRET_KEY=sk_test_… npx tsx scripts/stripe-sync-products.ts --apply')
  lines.push('```')
  lines.push('')
  return lines.join('\n')
}

main().catch((err) => {
  console.error('stripe-sync-products failed:', err)
  process.exit(1)
})
