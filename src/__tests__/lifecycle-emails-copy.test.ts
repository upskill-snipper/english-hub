import { describe, it, expect } from 'vitest'
import { buildTrialEndedEmail, buildTrialEndingEmail } from '@/lib/email-templates/trial-lifecycle'
import {
  buildAccountReadyEmail,
  buildFirstEssayEmail,
  buildOneEssayEmail,
  buildPaymentFailedEmail,
  buildPlanCancelledEmail,
  buildPlanEndedEmail,
  buildQuestsFreeEmail,
  formatAmount,
} from '@/lib/email-templates/lifecycle-emails'
import { AI_MARKING_SENTENCE } from '@/lib/email-templates/lifecycle-shell'
import type { BuiltEmail } from '@/lib/email-templates/lifecycle-shell'

/**
 * Every lifecycle email, pinned to the claim sheet (23 October 2026).
 *
 * In the style of pages-say-what-the-code-does.test.ts: each rule below is a
 * thing an earlier email got wrong, or a line in the claim sheet (TEHC-079)
 * that an email could easily drift from. The emails reach children, so the
 * audience rules are as much a part of the copy as the words: a child's
 * variant carries no price and no plan link.
 */

const END = new Date('2026-10-30T12:00:00.000Z')
const UNSUB = 'https://theenglishhub.app/unsubscribe?token=tok.sig'

type Case = { name: string; email: BuiltEmail; child: boolean }

const CASES: Case[] = [
  {
    name: 'M0 student adult',
    email: buildAccountReadyEmail({
      trialEndsAt: END,
      ageGroup: 'ADULT',
      isTeacher: false,
      unsubscribeUrl: UNSUB,
    }),
    child: false,
  },
  {
    name: 'M0 teacher',
    email: buildAccountReadyEmail({
      trialEndsAt: END,
      ageGroup: 'ADULT',
      isTeacher: true,
      unsubscribeUrl: UNSUB,
    }),
    child: false,
  },
  {
    name: 'M0 under 16',
    email: buildAccountReadyEmail({
      trialEndsAt: END,
      ageGroup: 'MINOR_UNDER_16',
      isTeacher: false,
      unsubscribeUrl: UNSUB,
    }),
    child: true,
  },
  {
    name: 'M0 unknown age',
    email: buildAccountReadyEmail({
      trialEndsAt: END,
      ageGroup: 'UNKNOWN',
      isTeacher: false,
      unsubscribeUrl: UNSUB,
    }),
    child: true,
  },
  {
    name: 'M0 16 or 17',
    email: buildAccountReadyEmail({
      trialEndsAt: END,
      ageGroup: 'MINOR_16_17',
      isTeacher: false,
      unsubscribeUrl: UNSUB,
    }),
    child: true,
  },
  {
    name: 'M1',
    email: buildFirstEssayEmail({ trialEndsAt: END, unsubscribeUrl: UNSUB }),
    child: false,
  },
  {
    name: 'M0 teacher, no date of birth',
    email: buildAccountReadyEmail({
      trialEndsAt: END,
      ageGroup: 'UNKNOWN',
      isTeacher: true,
      unsubscribeUrl: UNSUB,
    }),
    child: true,
  },
  {
    name: 'M2 consented adult',
    email: buildTrialEndingEmail({
      trialEndsAt: END,
      audience: 'consented-adult',
      unsubscribeUrl: UNSUB,
    }),
    child: false,
  },
  {
    // Every child, unknown age, and every adult who has not consented.
    name: 'M2 service',
    email: buildTrialEndingEmail({ trialEndsAt: END, audience: 'service', unsubscribeUrl: UNSUB }),
    child: true,
  },
  {
    name: 'M3 consented adult',
    email: buildTrialEndedEmail({
      trialEndsAt: END,
      audience: 'consented-adult',
      unsubscribeUrl: UNSUB,
    }),
    child: false,
  },
  {
    name: 'M3 service',
    email: buildTrialEndedEmail({ trialEndsAt: END, audience: 'service', unsubscribeUrl: UNSUB }),
    child: true,
  },
  {
    name: 'M4',
    email: buildQuestsFreeEmail({ trialEndedAt: END, isTeacher: false, unsubscribeUrl: UNSUB }),
    child: false,
  },
  {
    name: 'M5',
    email: buildOneEssayEmail({ trialEndedAt: END, isTeacher: false, unsubscribeUrl: UNSUB }),
    child: false,
  },
  {
    name: 'M6 paused',
    email: buildPaymentFailedEmail({
      amountMinor: 699,
      currency: 'gbp',
      accessPaused: true,
      ieltsOnly: false,
      unsubscribeUrl: UNSUB,
    }),
    // The amount is the customer's own payment, not an offer, so the "no £"
    // rule does not apply; the "no price line, no plan link" rule below does.
    child: false,
  },
  {
    name: 'M6 not paused',
    email: buildPaymentFailedEmail({
      amountMinor: 699,
      currency: 'gbp',
      accessPaused: false,
      ieltsOnly: false,
      unsubscribeUrl: UNSUB,
    }),
    child: false,
  },
  {
    name: 'M6 IELTS',
    email: buildPaymentFailedEmail({
      amountMinor: 3900,
      currency: 'gbp',
      // Passed true on purpose: an IELTS invoice must never say "paused".
      accessPaused: true,
      ieltsOnly: true,
      unsubscribeUrl: UNSUB,
    }),
    child: false,
  },
  ...(['active', 'trialing', 'past_due', 'unpaid'] as const).flatMap((status) => [
    {
      name: `M7 cancelled ${status}`,
      email: buildPlanCancelledEmail({
        status,
        ieltsOnly: false,
        otherPlanRemains: false,
        unsubscribeUrl: UNSUB,
      }),
      child: true,
    },
    {
      name: `M7 cancelled ${status}, another plan remains`,
      email: buildPlanCancelledEmail({
        status,
        ieltsOnly: false,
        otherPlanRemains: true,
        unsubscribeUrl: UNSUB,
      }),
      child: true,
    },
  ]),
  {
    name: 'M7 cancelled IELTS',
    email: buildPlanCancelledEmail({
      status: 'active',
      ieltsOnly: true,
      otherPlanRemains: true,
      unsubscribeUrl: UNSUB,
    }),
    child: true,
  },
  { name: 'M7 ended', email: buildPlanEndedEmail({ unsubscribeUrl: UNSUB }), child: true },
]

function visible(html: string): string {
  return html
    .replace(/<!--[\s\S]*?-->/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, '&')
}

function prose(e: BuiltEmail): string {
  return `${e.subject}\n${visible(e.html)}\n${e.text}`
}

describe.each(CASES)('$name', ({ email, child }) => {
  it('states no time for AI marking (§9)', () => {
    // "seconds" plural, or a number of seconds: "a second opinion" (§6.3) is
    // not a time claim.
    expect(prose(email)).not.toMatch(/\b(instant(ly)?|seconds|minutes?|hours?|moments)\b/i)
    expect(prose(email)).not.toMatch(/\b\d+\s*-?\s*second/i)
    expect(prose(email)).not.toMatch(/within a minute|in no time|straight away/i)
  })

  it('says nothing about lesson plans or mock papers (§2, §9)', () => {
    expect(prose(email)).not.toMatch(/lesson plan/i)
    expect(prose(email)).not.toMatch(/\bmock/i)
  })

  it('prices only as "planned standard pricing", never "was" (§4)', () => {
    const text = prose(email)
    if (text.includes('£') && !/did not go through/.test(email.subject)) {
      expect(text).toContain('planned standard pricing')
    }
    expect(text).not.toMatch(/\bwas\s+£/i)
    expect(text).not.toMatch(/\(was\b/i)
  })

  it('uses no exclamation marks and no em or en dashes (§11)', () => {
    expect(prose(email)).not.toContain('!')
    expect(prose(email)).not.toMatch(/[—–]/)
    expect(prose(email)).not.toContain('--')
  })

  it('carries exactly two links: one tracked call to action and the unsubscribe link', () => {
    const hrefs = [...email.html.matchAll(/href="([^"]+)"/g)].map((m) => m[1])
    expect(hrefs).toHaveLength(2)
    // `?src=`, never `?ref=`: ref is the affiliate parameter, and the
    // middleware's last-click rule would let an email link overwrite a real
    // affiliate's attribution (24 October 2026).
    expect(hrefs[0]).toMatch(/^https:\/\/theenglishhub\.app\/[a-z/-]+\?src=em-[a-z0-9-]+$/)
    expect(`${email.html}\n${email.text}`).not.toMatch(/[?&]ref=/)
    expect(hrefs[1]).toBe(UNSUB)
    expect(email.text).toContain(UNSUB)
    expect(email.text).toContain(hrefs[0])
  })

  it('greets with "Hi," and signs off as the house does, with no ICO number', () => {
    expect(email.text.startsWith('Hi,\n')).toBe(true)
    expect(email.text).toContain('We hope to continue to provide the best service possible.')
    expect(email.text).toContain(
      'A product of Upskill Energy Limited, registered in England and Wales, company no. 16511479.',
    )
    expect(prose(email)).not.toMatch(/\bICO\b|ZC016690|trading name/)
  })

  it('makes no grade promise, statistic or urgency', () => {
    const lower = prose(email).toLowerCase()
    expect(lower).not.toMatch(/\d+\s*%/)
    expect(lower).not.toMatch(/\bgrade\s*[0-9]\b/)
    expect(lower).not.toMatch(
      /guarantee|act now|last chance|hurry|don.t miss|accurate|official marks/,
    )
    expect(lower).not.toMatch(/\binstant/)
  })

  if (child) {
    it('gives a child no price and no plan link', () => {
      expect(prose(email)).not.toContain('£')
      expect(email.html).not.toContain('/pricing')
      expect(email.text).not.toContain('/pricing')
    })
  }
})

describe('lines that must be the claim sheet’s own', () => {
  it('describes AI marking with §6.1’s sentence, verbatim', () => {
    for (const name of ['M0 student adult', 'M0 under 16', 'M5']) {
      const c = CASES.find((x) => x.name === name)!
      expect(c.email.text, name).toContain(AI_MARKING_SENTENCE)
    }
  })

  it('tells an under-16 that AI feedback needs approval, and an unknown age the rule', () => {
    const u16 = CASES.find((x) => x.name === 'M0 under 16')!.email.text
    const unknown = CASES.find((x) => x.name === 'M0 unknown age')!.email.text
    const older = CASES.find((x) => x.name === 'M0 16 or 17')!.email.text
    expect(u16).toContain("AI feedback needs a parent's or school's approval first.")
    expect(unknown).toContain(
      "If you are under 16, AI feedback needs a parent's or school's approval first.",
    )
    expect(older).not.toContain('approval')
  })

  it('describes the examiner tool in §6.3’s words for a teacher', () => {
    const t = CASES.find((x) => x.name === 'M0 teacher')!.email
    expect(t.text).toContain('a second opinion, never the award')
    expect(t.html).toContain('/toolkit/examiner?src=em-d0')
    expect(t.text).not.toContain('approval')
  })

  it('gives a teacher with no date of birth the teacher copy and the approval rule', () => {
    const t = CASES.find((x) => x.name === 'M0 teacher, no date of birth')!.email
    expect(t.html).toContain('/toolkit/examiner?src=em-d0')
    expect(t.text).toContain(
      "If you are under 16, AI feedback needs a parent's or school's approval first.",
    )
  })

  it('counts quests as the sheet does (§2)', () => {
    const m4 = CASES.find((x) => x.name === 'M4')!.email.text
    expect(m4).toContain('quests for 100+ set texts are free with it: 600+ levels')
  })

  it('M1 names the 50-word minimum the submit page enforces', () => {
    expect(CASES.find((x) => x.name === 'M1')!.email.text).toContain('at least 50 words')
  })
})

const billing = CASES.filter((c) => /^M[67]/.test(c.name))
const byName = (name: string) => CASES.find((x) => x.name === name)!.email

describe('M6 says what happened to access only where the webhook decided it', () => {
  it('says "paused" only when access was removed', () => {
    const paused = byName('M6 paused')
    expect(paused.subject).toBe('Your payment did not go through, so your plan is paused')
    expect(paused.text).toContain(
      'We tried to take £6.99 for your English Hub plan and the payment did not go through, so AI marking and the other paid features are paused until a payment succeeds.',
    )
  })

  // 24 October 2026. The other variant said "Your plan stays active for now.
  // If no payment succeeds, the plan will end", which went to a customer whose
  // access the same handler had just revoked, and rested on a Stripe dunning
  // setting nobody has confirmed.
  it('otherwise states nothing about access, only the one action', () => {
    const notPaused = byName('M6 not paused')
    expect(notPaused.subject).toBe('Your payment did not go through')
    expect(notPaused.text).toContain(
      'We tried to take £6.99 for your English Hub plan and the payment did not go through.',
    )
    expect(notPaused.text).toContain(
      'To keep your plan, update your payment details on your billing page.',
    )
    expect(prose(notPaused)).not.toMatch(/paused|stays active|will end|will stop|for now/i)
  })

  it('names an IELTS plan, and never says "paused" for one, whatever it is passed', () => {
    const ielts = byName('M6 IELTS')
    expect(ielts.subject).toBe('Your payment did not go through')
    expect(ielts.text).toContain('We tried to take £39.00 for your IELTS plan')
    expect(ielts.text).toContain('To keep your IELTS plan, update your payment details')
    expect(prose(ielts)).not.toMatch(/paused|AI marking|stays active|will end/i)
  })

  it('never promises "to avoid any interruption"', () => {
    for (const c of CASES) expect(prose(c.email)).not.toMatch(/avoid any interruption/i)
  })

  it('states no amount it was not given', () => {
    expect(formatAmount(null, 'gbp')).toBeNull()
    expect(formatAmount(699, null)).toBeNull()
    const none = buildPaymentFailedEmail({
      amountMinor: null,
      currency: null,
      accessPaused: true,
      ieltsOnly: false,
      unsubscribeUrl: UNSUB,
    })
    expect(none.text).not.toContain('£')
  })
})

describe('M7, cancelled: each status gets only what is true for it', () => {
  it('an active plan keeps its paid period and will not charge again', () => {
    const e = byName('M7 cancelled active')
    expect(e.subject).toBe(
      'Your plan is cancelled: access continues until the end of the period you have paid for',
    )
    expect(e.text).toContain(
      'You keep the paid features until the end of the period you have already paid for, and this plan will not charge you again.',
    )
  })

  it('a plan in its free days keeps them and is not charged', () => {
    const e = byName('M7 cancelled trialing')
    expect(e.subject).toBe('Your plan is cancelled: access continues until your free trial ends')
    expect(e.text).toContain(
      'You keep the paid features until your free trial ends, and you will not be charged.',
    )
  })

  // The blocker of 24 October 2026: past_due and unpaid were told they kept a
  // period "already paid for" and would not be charged again. Nothing was
  // paid, access had already gone, and the open invoice survives
  // cancel_at_period_end, so Stripe can still try it.
  it.each(['past_due', 'unpaid'])('%s: no paid period, no promise about charges', (status) => {
    const e = byName(`M7 cancelled ${status}`)
    const text = prose(e)
    expect(e.subject).toBe('Your plan is cancelled')
    expect(e.text).toContain(
      'We have cancelled your English Hub plan, as you asked, so it will not renew.',
    )
    expect(e.text).toContain(
      'The last payment for it did not go through. Cancelling the plan does not cancel that payment.',
    )
    expect(e.text).toContain('When the plan ends, your account stays open on the free plan.')
    expect(text).not.toMatch(
      /paid for|already paid|will not charge|not be charged|keep the paid features|access continues/i,
    )
  })

  it.each(['active', 'trialing', 'past_due', 'unpaid'])(
    '%s with another live plan: no free-plan promise, and says the other plan is untouched',
    (status) => {
      const e = byName(`M7 cancelled ${status}, another plan remains`)
      expect(e.text).toContain('Your other English Hub plan is not changed by this.')
      expect(prose(e)).not.toMatch(/free plan|What stays free/i)
    },
  )

  it('names an IELTS plan', () => {
    const e = byName('M7 cancelled IELTS')
    expect(e.subject).toBe(
      'Your IELTS plan is cancelled: access continues until the end of the period you have paid for',
    )
    expect(e.text).toContain('We have cancelled your IELTS plan, as you asked.')
  })
})

describe('the billing notices sell nothing', () => {
  it('carry no price line and no plan link, since a child may hold a plan', () => {
    expect(billing.length).toBeGreaterThanOrEqual(12)
    for (const { name, email } of billing) {
      expect(prose(email), name).not.toMatch(/a month or|planned standard/)
      expect(email.html, name).not.toContain('/pricing')
    }
  })
})

describe('M7 states no date', () => {
  it('until the period-end read is fixed (payments audit item 11)', () => {
    for (const { name, email } of billing.filter((c) => c.name.startsWith('M7'))) {
      expect(email.text, name).not.toMatch(
        /\b\d{1,2} (January|February|March|April|May|June|July|August|September|October|November|December) \d{4}\b/,
      )
    }
  })
})
