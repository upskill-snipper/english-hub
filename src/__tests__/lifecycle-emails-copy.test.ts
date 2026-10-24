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
    name: 'M2 adult',
    email: buildTrialEndingEmail({ trialEndsAt: END, audience: 'adult', unsubscribeUrl: UNSUB }),
    child: false,
  },
  {
    name: 'M2 child',
    email: buildTrialEndingEmail({ trialEndsAt: END, audience: 'minor', unsubscribeUrl: UNSUB }),
    child: true,
  },
  {
    name: 'M3 adult',
    email: buildTrialEndedEmail({ trialEndsAt: END, audience: 'adult', unsubscribeUrl: UNSUB }),
    child: false,
  },
  {
    name: 'M3 child',
    email: buildTrialEndedEmail({ trialEndsAt: END, audience: 'minor', unsubscribeUrl: UNSUB }),
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
      unsubscribeUrl: UNSUB,
    }),
    // The amount is the customer's own payment, not an offer, so the "no £"
    // rule does not apply; the "no price line, no plan link" rule below does.
    child: false,
  },
  {
    name: 'M6 kept',
    email: buildPaymentFailedEmail({
      amountMinor: 699,
      currency: 'gbp',
      accessPaused: false,
      unsubscribeUrl: UNSUB,
    }),
    child: false,
  },
  {
    name: 'M7 cancelled',
    email: buildPlanCancelledEmail({ inTrial: false, unsubscribeUrl: UNSUB }),
    child: true,
  },
  {
    name: 'M7 cancelled in trial',
    email: buildPlanCancelledEmail({ inTrial: true, unsubscribeUrl: UNSUB }),
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
    expect(hrefs[0]).toMatch(/^https:\/\/theenglishhub\.app\/[a-z/-]+\?ref=em-/)
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
    expect(t.html).toContain('/toolkit/examiner?ref=em-d0')
  })

  it('counts quests as the sheet does (§2)', () => {
    const m4 = CASES.find((x) => x.name === 'M4')!.email.text
    expect(m4).toContain('quests for 100+ set texts are free with it: 600+ levels')
  })

  it('M1 names the 50-word minimum the submit page enforces', () => {
    expect(CASES.find((x) => x.name === 'M1')!.email.text).toContain('at least 50 words')
  })
})

describe('M6 says what happened to access, truthfully either way', () => {
  it('says "paused" only when access was removed', () => {
    const paused = CASES.find((x) => x.name === 'M6 paused')!.email
    const kept = CASES.find((x) => x.name === 'M6 kept')!.email
    expect(paused.subject).toBe('Your payment did not go through, so your plan is paused')
    expect(paused.text).toContain(
      'We tried to take £6.99 for your English Hub plan and the payment did not go through, so AI marking and the other paid features are paused until a payment succeeds.',
    )
    expect(kept.subject).toBe('Your payment did not go through')
    expect(kept.text).toContain('Your plan stays active for now.')
    expect(kept.text).not.toContain('paused')
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
      unsubscribeUrl: UNSUB,
    })
    expect(none.text).not.toContain('£')
  })
})

describe('the billing notices sell nothing', () => {
  it('carry no price line and no plan link, since a child may hold a plan', () => {
    for (const name of [
      'M6 paused',
      'M6 kept',
      'M7 cancelled',
      'M7 cancelled in trial',
      'M7 ended',
    ]) {
      const e = CASES.find((x) => x.name === name)!.email
      expect(prose(e), name).not.toMatch(/a month or|planned standard/)
      expect(e.html, name).not.toContain('/pricing')
    }
  })
})

describe('M7 states no date', () => {
  it('until the period-end read is fixed (payments audit item 11)', () => {
    for (const name of ['M7 cancelled', 'M7 cancelled in trial', 'M7 ended']) {
      const text = CASES.find((x) => x.name === name)!.email.text
      expect(text, name).not.toMatch(
        /\b\d{1,2} (January|February|March|April|May|June|July|August|September|October|November|December) \d{4}\b/,
      )
    }
  })
})
