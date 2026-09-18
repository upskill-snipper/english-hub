import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import type Stripe from 'stripe'
import {
  findDuplicateSubscription,
  duplicateSubscriptionMessage,
  LIVE_SUBSCRIPTION_STATUSES,
} from '@/lib/billing/duplicate-subscription-guard'

/**
 * On 18 September 2026 a customer wrote in to say we had tried to charge her
 * twice. She was right: two subscriptions existed against her Stripe customer,
 * because neither checkout route asked whether she already had one.
 *
 * It could not be seen from our side either. `Subscription.userId` is
 * `@unique`, so the second subscription overwrote the same Prisma row rather
 * than appearing beside it. No query would have shown two. The only place the
 * defect surfaced was her bank statement.
 *
 * These tests pin the behaviour that closes it, and the two judgement calls
 * inside it that are easy to get wrong in opposite directions:
 *   - too loose, and the duplicate gets through again;
 *   - too tight, and a legitimate second product, or a genuine renewal after
 *     cancelling, is refused.
 */

const PRO_ANNUAL = 'price_pro_annual'
const IELTS_MONTHLY = 'price_ielts_monthly'

function item(priceId: string, productMeta?: Record<string, string>): Stripe.SubscriptionItem {
  return {
    price: {
      id: priceId,
      product: productMeta ? ({ id: 'prod_x', metadata: productMeta } as Stripe.Product) : 'prod_x',
    },
  } as unknown as Stripe.SubscriptionItem
}

function sub(
  id: string,
  status: Stripe.Subscription.Status,
  items: Stripe.SubscriptionItem[],
): Stripe.Subscription {
  return { id, status, items: { data: items } } as unknown as Stripe.Subscription
}

function stripeReturning(subs: Stripe.Subscription[]) {
  return {
    subscriptions: { list: vi.fn().mockResolvedValue({ data: subs }) },
  } as unknown as Stripe
}

describe('findDuplicateSubscription', () => {
  it('blocks a second subscription for a price the customer already pays for', async () => {
    const stripe = stripeReturning([sub('sub_1', 'active', [item(PRO_ANNUAL)])])

    const result = await findDuplicateSubscription(stripe, 'cus_1', PRO_ANNUAL)

    expect(result.duplicate).toBe(true)
    expect(result.existing?.id).toBe('sub_1')
  })

  it('blocks while the first subscription is still in its trial', async () => {
    // Every checkout sets a trial, so this is the state a customer is in for
    // their first week - exactly when a confused second purchase happens.
    const stripe = stripeReturning([sub('sub_1', 'trialing', [item(PRO_ANNUAL)])])

    expect((await findDuplicateSubscription(stripe, 'cus_1', PRO_ANNUAL)).duplicate).toBe(true)
  })

  it('allows a different product, because Pro and IELTS can be held together', async () => {
    const stripe = stripeReturning([sub('sub_1', 'active', [item(IELTS_MONTHLY)])])

    const result = await findDuplicateSubscription(stripe, 'cus_1', PRO_ANNUAL)

    expect(result.duplicate).toBe(false)
    expect(result.existing).toBeNull()
  })

  it('allows a customer whose subscription was cancelled to buy the plan again', async () => {
    // A renewal is not a duplicate. Refusing this would trap a returning
    // customer who cannot see why the site will not take their money.
    const stripe = stripeReturning([sub('sub_old', 'canceled', [item(PRO_ANNUAL)])])

    expect((await findDuplicateSubscription(stripe, 'cus_1', PRO_ANNUAL)).duplicate).toBe(false)
  })

  it('allows a retry after a declined card', async () => {
    // `incomplete` is a checkout whose payment never went through. Blocking on
    // it would lock somebody out over a card their bank refused once.
    const stripe = stripeReturning([sub('sub_dead', 'incomplete', [item(PRO_ANNUAL)])])

    expect((await findDuplicateSubscription(stripe, 'cus_1', PRO_ANNUAL)).duplicate).toBe(false)
  })

  it('recognises a promo redemption of the same plan, which carries an ad-hoc price', async () => {
    // /api/promo/redeem builds `price_data` inline, so its price id is unique
    // to that redemption and matches nothing. The catalogue price it came from
    // is stamped on the product. Without this, a customer who redeemed a code
    // could walk into standard checkout and buy the same plan again.
    const stripe = stripeReturning([
      sub('sub_promo', 'active', [item('price_adhoc_xyz', { basePriceId: PRO_ANNUAL })]),
    ])

    const result = await findDuplicateSubscription(stripe, 'cus_1', PRO_ANNUAL)

    expect(result.duplicate).toBe(true)
    expect(result.existing?.id).toBe('sub_promo')
  })

  it('does not guess when Stripe returns the product unexpanded', async () => {
    const stripe = stripeReturning([sub('sub_promo', 'active', [item('price_adhoc_xyz')])])

    expect((await findDuplicateSubscription(stripe, 'cus_1', PRO_ANNUAL)).duplicate).toBe(false)
  })

  it('allows the purchase when Stripe cannot be reached, and says why', async () => {
    // Fails open on purpose: a customer who cannot buy is a worse outcome than
    // a duplicate we can refund. But the reason has to reach the log, because
    // a silent failure is how this whole class of bug survived.
    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {})
    const stripe = {
      subscriptions: { list: vi.fn().mockRejectedValue(new Error('stripe unreachable')) },
    } as unknown as Stripe

    const result = await findDuplicateSubscription(stripe, 'cus_1', PRO_ANNUAL)

    expect(result.duplicate).toBe(false)
    expect(result.checkFailed).toContain('stripe unreachable')
    expect(errorSpy.mock.calls[0]?.[0]).toContain('DUPLICATE_SUBSCRIPTION_CHECK_FAILED')
    errorSpy.mockRestore()
  })

  it('makes no Stripe call when there is no price to compare', async () => {
    const stripe = stripeReturning([])

    expect((await findDuplicateSubscription(stripe, 'cus_1', '')).duplicate).toBe(false)
    expect((stripe.subscriptions.list as ReturnType<typeof vi.fn>).mock.calls).toHaveLength(0)
  })

  it('counts past_due and unpaid as live, because money is still owed', () => {
    expect([...LIVE_SUBSCRIPTION_STATUSES].sort()).toEqual([
      'active',
      'past_due',
      'trialing',
      'unpaid',
    ])
  })
})

describe('the message the customer sees', () => {
  it('does not blame them, and points somewhere they can act', () => {
    const message = duplicateSubscriptionMessage()
    expect(message).toContain('stopped before charging you again')
    expect(message).toContain('support@theenglishhub.app')
    expect(message).not.toMatch(/you (tried|attempted|already clicked)/i)
  })
})

describe('both subscription-creating routes use the guard', () => {
  // A third route created later that skips this is the whole defect returning.
  // Structural, because the alternative is finding out from a customer again.
  const routes = ['src/app/api/stripe/checkout/route.ts', 'src/app/api/promo/redeem/route.ts']

  for (const route of routes) {
    it(`${route} calls findDuplicateSubscription before creating a session`, () => {
      const source = readFileSync(join(process.cwd(), route), 'utf8')

      expect(source).toContain('findDuplicateSubscription')

      const guardAt = source.indexOf('findDuplicateSubscription(')
      const createAt = source.indexOf('stripe.checkout.sessions.create')
      expect(guardAt).toBeGreaterThan(-1)
      expect(createAt).toBeGreaterThan(-1)
      // Checking the order matters: a guard that runs after the session is
      // created has already charged them.
      expect(guardAt).toBeLessThan(createAt)
    })
  }
})

describe('one-off purchases are untouched', () => {
  it('checkout only guards subscription mode', () => {
    // Courses are bought in `payment` mode and are repeatable by design. A
    // guard applied to them would stop somebody buying a second course.
    const source = readFileSync(join(process.cwd(), 'src/app/api/stripe/checkout/route.ts'), 'utf8')
    const guardAt = source.indexOf('findDuplicateSubscription(')
    // The nearest thing before the guard call must be the mode check, with no
    // closing brace between them - i.e. the guard sits inside it.
    const before = source.slice(0, guardAt)
    const modeCheckAt = before.lastIndexOf("if (mode === 'subscription') {")
    expect(modeCheckAt).toBeGreaterThan(-1)
    expect(before.slice(modeCheckAt)).not.toContain('}')
  })
})

beforeEach(() => vi.clearAllMocks())
afterEach(() => vi.restoreAllMocks())
