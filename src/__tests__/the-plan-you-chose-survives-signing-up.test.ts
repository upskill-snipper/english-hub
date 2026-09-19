import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'

/**
 * The plan a visitor chose was forgotten the moment they registered.
 *
 * /pricing builds this return URL itself when an anonymous visitor clicks a
 * plan, and the comment on that line says exactly what it is for:
 *
 *   // Anonymous user -> send them to register with a return URL that brings
 *   // them back here so they can complete the purchase.
 *   window.location.href = `/auth/register?next=${encodeURIComponent(`/pricing?plan=${plan}`)}`
 *
 * They come back to /pricing?plan=student_annual, and nothing on this page has
 * ever read `plan`. The intent survived the round trip in the URL and was
 * thrown away on arrival, so someone who had already chosen and already handed
 * over their details had to find the plan and decide a second time. On the
 * paid conversion path.
 *
 * Found by listing every internal link in the product that carries a query
 * string and checking whether the destination reads it. The register page's own
 * `next` handling was fixed at some point - the note above it describes the
 * same bug - but only half the journey was.
 *
 * WHAT THIS DELIBERATELY DOES NOT DO. Resume the checkout by itself. It would
 * be one line, and it would mean a page load sending somebody to a payment page
 * without their having clicked anything on it. The choice is restored and put
 * one click away; deciding to start a purchase on someone's behalf is a
 * different thing and not this change's to make.
 */

const ROOT = process.cwd()
const PRICING = readFileSync(join(ROOT, 'src/app/pricing/page.tsx'), 'utf8')
const CODE = PRICING.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/.*/g, '')

describe('the round trip', () => {
  it('still sends the plan to the register page', () => {
    // If this stops happening there is nothing to come back to, and the rest of
    // this file would be guarding a journey that no longer exists.
    expect(CODE).toContain('/pricing?plan=${plan}')
  })

  it('and the plan is now read when they return', () => {
    expect(CODE).toContain("searchParams.get('plan')")
  })
})

describe('what it accepts', () => {
  it('only the six real plans', () => {
    // A URL is user input. `?plan=` naming anything else must leave the page as
    // it was rather than render a banner for a plan that does not exist.
    expect(CODE).toContain('CHECKOUT_PLANS.includes(rawPlan as CheckoutPlan)')
  })

  it('and the runtime list is complete', () => {
    // The union and the list are separate declarations and could drift. Every
    // member of the type must appear in the array.
    const union = PRICING.slice(
      PRICING.indexOf('type CheckoutPlan ='),
      PRICING.indexOf('/**\n * The same six'),
    )
    const members = [...union.matchAll(/'([a-z_]+)'/g)].map((m) => m[1])
    expect(members.length).toBe(6)
    const list = PRICING.slice(
      PRICING.indexOf('const CHECKOUT_PLANS'),
      PRICING.indexOf('/** Wording for the resume banner. */'),
    )
    for (const m of members) {
      expect(list, `${m} is missing from CHECKOUT_PLANS`).toContain(`'${m}'`)
    }
  })

  it('and every plan has wording for the banner', () => {
    const labels = PRICING.slice(
      PRICING.indexOf('const PLAN_LABELS'),
      PRICING.indexOf('// Wrapper page'),
    )
    for (const m of [
      'student_monthly',
      'student_annual',
      'teacher_monthly',
      'teacher_annual',
      'ielts_monthly',
      'ielts_annual',
    ]) {
      expect(labels, `${m} has no label`).toContain(`${m}:`)
    }
  })
})

describe('what it shows', () => {
  it('names the plan they chose', () => {
    expect(CODE).toContain('PLAN_LABELS[resumePlan]')
    expect(PRICING).toContain('You were signing up for')
  })

  it('and offers one click to continue', () => {
    expect(CODE).toContain('onClick={() => handleCheckout(resumePlan)}')
  })

  it('which is disabled while a checkout is already opening', () => {
    // Two Stripe sessions from two clicks is a worse outcome than the bug.
    expect(CODE).toContain('disabled={checkoutLoading !== null}')
  })
})

describe('what it will not do on its own', () => {
  it('never calls handleCheckout from an effect', () => {
    // The line that must not exist: a page load that sends someone to a payment
    // page without their having clicked anything on it.
    expect(CODE).not.toMatch(/useEffect\([^)]*\)\s*=>\s*\{[^}]*handleCheckout/)
    expect(CODE).not.toMatch(/useEffect\(\s*\(\)\s*=>\s*handleCheckout/)
  })

  it('and the banner is the only new caller', () => {
    // handleCheckout is called by the six plan buttons and now the banner.
    const calls = (CODE.match(/handleCheckout\(/g) ?? []).length
    expect(calls).toBe(8) // 6 buttons + the banner + the declaration
  })
})
