/**
 * Which tier a Stripe subscription is for, read from its price.
 *
 * ─── The defect this module exists for (webhook:D14) ────────────────────
 *
 * The Prisma `Subscription` row carries `isTeacherPlan`, which mobile reads to
 * decide whether to show teacher tools (`src/lib/entitlements.ts`). The Stripe
 * path never set it: the sync module wrote every web subscription with the
 * column's default, false, so a teacher who paid GBP 67.99 for Teachers Annual
 * through the website lost teacher tools on mobile. Only the RevenueCat
 * reconciler and the signup-trial writers ever set it.
 *
 * ─── What decides it ─────────────────────────────────────────────────────
 *
 * The price. `/api/stripe/checkout` resolves teacher plans to
 * `STRIPE_PRICE_TEACHER_MONTHLY` / `STRIPE_PRICE_TEACHER_ANNUAL`, and
 * `/api/promo/redeem` builds an ad-hoc price whose product carries the
 * catalogue price as `metadata.basePriceId`. Both are read here, the same way
 * `duplicate-subscription-guard.ts` reads them.
 *
 * Three answers, not two. A teacher price is `true`; a known student price is
 * `false`; anything else is `null`, meaning "this price says nothing", so the
 * sync leaves the stored value alone rather than flipping a teacher to student
 * because a price it does not recognise went past.
 *
 * The checkout route falls back to the PRO price when a TEACHER variable is
 * unset, and a teacher charged the student price IS recorded here as a student
 * plan: that is what they are paying for. Whether the variables are set in
 * production is a Vercel check for the founder; this module cannot see it. If
 * a TEACHER variable equals a PRO or STUDENT variable the id is treated as
 * student, because it then proves nothing about the tier.
 *
 * Pure functions over environment and plain objects. Nothing here calls Stripe.
 */

import type Stripe from 'stripe'

function envIds(names: string[]): string[] {
  return names.map((n) => process.env[n] ?? '').filter((id) => id.length > 0)
}

/** The student (Pro) catalogue price ids configured in this environment. */
export function studentPriceIds(): string[] {
  return envIds([
    'STRIPE_PRICE_PRO_MONTHLY',
    'STRIPE_PRICE_PRO_ANNUAL',
    'STRIPE_PRICE_STUDENT_MONTHLY',
    'STRIPE_PRICE_STUDENT_ANNUAL',
  ])
}

/**
 * The teacher catalogue price ids configured in this environment, minus any
 * that are also a student id (an aliased variable proves nothing).
 */
export function teacherPriceIds(): string[] {
  const student = new Set(studentPriceIds())
  return envIds(['STRIPE_PRICE_TEACHER_MONTHLY', 'STRIPE_PRICE_TEACHER_ANNUAL']).filter(
    (id) => !student.has(id),
  )
}

/** The catalogue price ids a subscription item bills on, including a promo base price. */
function priceIdsOnItem(item: Stripe.SubscriptionItem): string[] {
  const out: string[] = []
  if (item.price?.id) out.push(item.price.id)
  const product = item.price?.product
  if (product && typeof product === 'object' && !('deleted' in product && product.deleted)) {
    const base = (product as Stripe.Product).metadata?.basePriceId
    if (base) out.push(base)
  }
  return out
}

export interface PlanTier {
  /** true: a teacher price. false: a student price. null: the price says nothing. */
  isTeacherPlan: boolean | null
  /** The teacher catalogue price that decided it, when it did. */
  teacherPriceId: string | null
}

/** Read the tier off a subscription's prices. */
export function planTierFromSubscription(subscription: Stripe.Subscription): PlanTier {
  const teacher = new Set(teacherPriceIds())
  const student = new Set(studentPriceIds())
  let sawStudent = false
  for (const item of subscription.items?.data ?? []) {
    for (const id of priceIdsOnItem(item)) {
      if (teacher.has(id)) return { isTeacherPlan: true, teacherPriceId: id }
      if (student.has(id)) sawStudent = true
    }
  }
  return { isTeacherPlan: sawStudent ? false : null, teacherPriceId: null }
}
