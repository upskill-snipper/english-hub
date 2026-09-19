import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'

/**
 * SF-7's funnel read.
 *
 * The day-8 card shipped: `NotOnProCard` replaces the countdown banner once the
 * trial end is past, states what happened, what the student keeps and what it
 * costs, with prices from constants so they cannot drift from the checkout.
 *
 * The two events the item asked for did not ship, and that is the same shape as
 * UX-2: the surface exists and nothing can say whether it works. It matters
 * more here. This is a no-card trial, so day 8 is the only moment the product
 * asks for money, and without these "nobody upgraded" and "nobody ever saw the
 * card" are indistinguishable - they need opposite fixes.
 */

const ROOT = process.cwd()
const CARD = readFileSync(join(ROOT, 'src/components/billing/NotOnProCard.tsx'), 'utf8')
const TRACKING = readFileSync(join(ROOT, 'src/components/billing/NotOnProTracking.tsx'), 'utf8')
const POSTHOG = readFileSync(join(ROOT, 'src/lib/posthog.ts'), 'utf8')
const BANNER = readFileSync(
  join(ROOT, 'src/components/billing/TrialCountdownBannerServer.tsx'),
  'utf8',
)

describe('the events exist under names something else can join to', () => {
  it.each([
    ["TRIAL_ENDED_SEEN: 'trial_ended_seen'"],
    ["TRIAL_ENDED_UPGRADE_CLICKED: 'trial_ended_upgrade_clicked'"],
  ])('%s', (constant) => {
    // Asserted against the constants, not the string: an event fired under a
    // name nothing else knows is a row no funnel will ever join.
    expect(POSTHOG).toContain(constant)
  })
})

describe('the card reports itself', () => {
  it('fires the seen event', () => {
    expect(CARD).toContain('<NotOnProSeen kind={kind} />')
    expect(TRACKING).toContain('capture(EVENTS.TRIAL_ENDED_SEEN')
  })

  it('and the upgrade click', () => {
    expect(CARD).toContain('<NotOnProUpgradeClick kind={kind}>')
    expect(TRACKING).toContain('capture(EVENTS.TRIAL_ENDED_UPGRADE_CLICKED')
  })

  it('and both carry which card it was', () => {
    // 'trial-ended' and 'never-trialed' are different people wanting different
    // things. One number covering both answers nothing.
    expect(TRACKING).toContain('TRIAL_ENDED_SEEN, { kind }')
    expect(TRACKING).toContain('TRIAL_ENDED_UPGRADE_CLICKED, { kind }')
  })

  it('through the consent-gated wrapper, never posthog directly', () => {
    // THE ASSERTION THAT MATTERS on a product with child users. capture()
    // returns false for minors and for anyone who has not consented.
    expect(TRACKING).toContain("import { capture, EVENTS } from '@/lib/posthog'")
    expect(TRACKING).not.toMatch(/from 'posthog-js'/)
  })
})

describe('the seen event is fired once, not twice', () => {
  it('guarded against StrictMode running the effect twice', () => {
    // React 18 runs effects twice in development. A "seen" fired twice halves
    // the apparent conversion rate of the one screen this item measures.
    expect(TRACKING).toContain('const fired = useRef(false)')
    expect(TRACKING).toContain('if (fired.current) return')
  })
})

describe('the click is reported before the page leaves', () => {
  it('on capture, not bubble', () => {
    // The link navigates away. An event queued behind a navigation may never
    // be sent, so it fires on the capture phase.
    expect(TRACKING).toContain('onClickCapture')
  })

  it('and the wrapper does not break the button layout', () => {
    // `display: contents` keeps the flex row intact. Without it the wrapping
    // span becomes a layout box and the CTA moves, which is the kind of
    // regression an analytics change should never cause.
    expect(TRACKING).toContain('className="contents"')
  })
})

describe('the card it measures is still the one that renders', () => {
  it('mounted where the countdown banner used to fall silent', () => {
    // If the banner stops rendering the card, these events measure nothing and
    // the absence would look exactly like a card nobody clicks.
    expect(BANNER).toContain('<NotOnProCard kind={kind} endedAt={trialEndedAt}')
  })

  it('and only for the two states it can honestly name', () => {
    // 'unknown' means the read failed. Telling somebody their trial ended
    // because Prisma timed out would be worse than saying nothing.
    expect(BANNER).toContain("kind === 'trial-ended' || kind === 'never-trialed'")
  })

  it('and never to a paying customer', () => {
    expect(BANNER).toContain('if (isPremium) return null')
  })
})

describe('the prices on it still come from the constants', () => {
  it('not a hard-coded number', () => {
    // Guarded because this file now has more reasons to be edited.
    expect(CARD).toContain('PRICING.STUDENT_MONTHLY')
    expect(CARD).toContain('PRICING.STUDENT_ANNUAL')
    const copy = CARD.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/.*/g, '')
    expect(copy).not.toMatch(/£\s*\d/)
  })
})
