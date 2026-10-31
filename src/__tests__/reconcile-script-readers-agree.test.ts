import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import type Stripe from 'stripe'
import { subscriptionPeriodEnd, subscriptionPeriodStart } from '@/lib/billing/stripe-shapes'
import { mapStripeToPrismaStatus } from '@/lib/billing/subscription-sync'
import {
  LIVE_SUBSCRIPTION_STATUSES,
  WEB_ACCESS_STATUSES,
  isIeltsOnly,
} from '@/lib/billing/duplicate-subscription-guard'

/**
 * The two Stripe scripts carry hand-made copies of the app's readers, because
 * a plain .mjs cannot import TypeScript behind the `@/` alias. A copy drifts
 * silently: until 23 October 2026 find-duplicate-stripe-subscriptions.mjs read
 * the FIRST item's period end where the app takes the latest, and its comment
 * still described an app function that no longer read that way. Comments
 * saying "same as" proved nothing.
 *
 * So the copies are lifted out of the script source and run against the same
 * fixtures as the originals. If either side changes alone, this fails.
 */

const ROOT = process.cwd()
const RECONCILE = readFileSync(join(ROOT, 'scripts/stripe-reconcile-subscriptions.mjs'), 'utf8')
const FIND_DUPLICATE = readFileSync(
  join(ROOT, 'scripts/find-duplicate-stripe-subscriptions.mjs'),
  'utf8',
)

/** The source of `function <name>(...) { ... }`, by brace matching. */
function functionSource(source: string, name: string): string {
  const start = source.indexOf(`function ${name}(`)
  if (start < 0) throw new Error(`function ${name} not found in the script`)
  const open = source.indexOf('{', start)
  let depth = 0
  for (let i = open; i < source.length; i++) {
    if (source[i] === '{') depth++
    else if (source[i] === '}') {
      depth--
      if (depth === 0) return source.slice(start, i + 1)
    }
  }
  throw new Error(`function ${name} has no closing brace`)
}

/** The script's copy, as a callable. */
function lift<T extends (...args: never[]) => unknown>(source: string, name: string): T {
  // eslint-disable-next-line @typescript-eslint/no-implied-eval, no-new-func
  return new Function(`${functionSource(source, name)}\nreturn ${name}`)() as T
}

/** The members of `const <name> = new Set([...])` in the script. */
function setLiteral(source: string, name: string): string[] {
  const match = source.match(new RegExp(`const ${name} = new Set\\(\\[([^\\]]*)\\]\\)`))
  if (!match) throw new Error(`const ${name} not found in the script`)
  return [...match[1]!.matchAll(/'([^']+)'/g)].map((m) => m[1]!).sort()
}

type Reader = (sub: unknown) => number | null

const fixtures: Array<[string, unknown]> = [
  ['old shape, top-level only', { current_period_start: 100, current_period_end: 200 }],
  [
    'clover, one item',
    { items: { data: [{ current_period_start: 110, current_period_end: 210 }] } },
  ],
  [
    'clover, several items: earliest start, latest end',
    {
      items: {
        data: [
          { current_period_start: 130, current_period_end: 205 },
          { current_period_start: 120, current_period_end: 260 },
          { current_period_start: 125, current_period_end: 230 },
        ],
      },
    },
  ],
  [
    'both shapes: top-level wins',
    {
      current_period_start: 100,
      current_period_end: 200,
      items: { data: [{ current_period_start: 1, current_period_end: 999 }] },
    },
  ],
  ['neither shape', { items: { data: [{}] } }],
  ['no items at all', {}],
  [
    'unusable values',
    {
      current_period_end: 0,
      items: { data: [{ current_period_end: 'soon' }, { current_period_end: -5 }] },
    },
  ],
]

describe('scripts/stripe-reconcile-subscriptions.mjs reads as the app reads', () => {
  const periodEnd = lift<Reader>(RECONCILE, 'periodEnd')
  const periodStart = lift<Reader>(RECONCILE, 'periodStart')
  const mapStatus = lift<(s: string) => string>(RECONCILE, 'mapStatus')

  it.each(fixtures)('period end: %s', (_label, sub) => {
    expect(periodEnd(sub)).toBe(subscriptionPeriodEnd(sub as Stripe.Subscription))
  })

  it.each(fixtures)('period start: %s', (_label, sub) => {
    expect(periodStart(sub)).toBe(subscriptionPeriodStart(sub as Stripe.Subscription))
  })

  it.each([
    'active',
    'trialing',
    'past_due',
    'unpaid',
    'incomplete',
    'incomplete_expired',
    'canceled',
    'paused',
    'something_new',
  ])('status map: %s', (status) => {
    expect(mapStatus(status)).toBe(mapStripeToPrismaStatus(status as Stripe.Subscription.Status))
  })

  it("the live and web-access status sets are the guard module's", () => {
    expect(setLiteral(RECONCILE, 'LIVE_STATUSES')).toEqual([...LIVE_SUBSCRIPTION_STATUSES].sort())
    expect(setLiteral(RECONCILE, 'WEB_ACCESS_STATUSES')).toEqual([...WEB_ACCESS_STATUSES].sort())
  })

  // 31 October 2026. The script chose any live subscription, so `--write`
  // put an IELTS-only one back on the row the webhook keeps it off. Its copy
  // of the test must be the guard module's, or the two disagree silently.
  const scriptIeltsOnly = lift<(sub: unknown, isIelts: (id: unknown) => boolean) => boolean>(
    RECONCILE,
    'isIeltsOnly',
  )
  const isIelts = (id: unknown) => id === 'price_ielts_m' || id === 'price_ielts_a'
  const item = (id: string, recurring = true) => ({
    price: { id, ...(recurring ? { recurring: { interval: 'month' } } : {}) },
  })
  it.each<[string, unknown]>([
    ['one IELTS price', { items: { data: [item('price_ielts_m')] } }],
    ['both IELTS prices', { items: { data: [item('price_ielts_m'), item('price_ielts_a')] } }],
    ['IELTS and a main price', { items: { data: [item('price_ielts_m'), item('price_main')] } }],
    ['a main price only', { items: { data: [item('price_main')] } }],
    [
      'IELTS recurring beside a one-off main price',
      { items: { data: [item('price_ielts_m'), item('price_main', false)] } },
    ],
    ['no recurring price at all', { items: { data: [item('price_ielts_m', false)] } }],
    ['no items', {}],
  ])('isIeltsOnly: %s', (_label, sub) => {
    expect(scriptIeltsOnly(sub, isIelts)).toBe(isIeltsOnly(sub as Stripe.Subscription, isIelts))
  })
})

describe('scripts/find-duplicate-stripe-subscriptions.mjs reads the period end as the app does', () => {
  const periodEnd = lift<Reader>(FIND_DUPLICATE, 'periodEnd')

  it.each(fixtures)('%s', (_label, sub) => {
    expect(periodEnd(sub)).toBe(subscriptionPeriodEnd(sub as Stripe.Subscription))
  })
})
