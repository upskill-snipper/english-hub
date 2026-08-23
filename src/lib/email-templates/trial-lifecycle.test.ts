/**
 * Tests for the trial lifecycle email templates.
 *
 * These are copy-integrity tests as much as rendering tests. The defect
 * class this codebase spent August 2026 removing was fabricated data and
 * unhonest marketing claims in a children's product, so the assertions
 * below lock down the house copy rules: no em dashes, no invented
 * statistics or grade promises, no fake urgency, an explicit statement of
 * what stays free, and a working email-preferences link on every send.
 */

import { describe, it, expect } from 'vitest'

import { buildTrialEndingEmail, buildTrialEndedEmail } from './trial-lifecycle'

const TRIAL_END = new Date('2026-09-01T00:00:00.000Z')

const both = [
  ['trial ending', buildTrialEndingEmail],
  ['trial ended', buildTrialEndedEmail],
] as const

/** Strips HTML comments and tags so assertions run against readable prose. */
function visibleText(html: string): string {
  return html.replace(/<!--[\s\S]*?-->/g, ' ').replace(/<[^>]+>/g, ' ')
}

describe('trial lifecycle emails', () => {
  describe.each(both)('%s', (_label, build) => {
    const email = build({ firstName: 'Amira', trialEndsAt: TRIAL_END })

    it('renders a subject, HTML and plain-text body', () => {
      expect(email.subject.length).toBeGreaterThan(0)
      expect(email.html).toContain('<!DOCTYPE html>')
      expect(email.text.length).toBeGreaterThan(0)
    })

    it('addresses the recipient by name', () => {
      expect(email.html).toContain('Hi Amira,')
      expect(email.text).toContain('Hi Amira,')
    })

    it('shows the real trial end date and no other deadline', () => {
      expect(email.html).toContain('1 September 2026')
      expect(email.text).toContain('1 September 2026')
    })

    it('states what stays free', () => {
      const claim =
        'Exam-board aligned courses, revision notes and flashcards remain free with a registered account.'
      expect(email.html).toContain(claim)
      expect(email.text).toContain(claim)
    })

    it('states that no card was taken, so nothing can be charged', () => {
      expect(email.text.toLowerCase()).toContain('card details')
      expect(email.text.toLowerCase()).toMatch(/nothing (will be|was) charged/)
    })

    it('includes a working email-preferences link', () => {
      // /dashboard/privacy is the page that actually renders the
      // marketingEnabled toggle. The /unsubscribe?token= route referenced
      // by the weekly report templates does not exist yet.
      expect(email.html).toContain('/dashboard/privacy')
      expect(email.text).toContain('/dashboard/privacy')
    })

    it('uses no em dashes and no literal double hyphen in prose', () => {
      // Checked against the visible prose, not the raw markup: HTML comment
      // delimiters legitimately contain a double hyphen.
      for (const body of [email.subject, visibleText(email.html), email.text]) {
        expect(body).not.toContain('—')
        expect(body).not.toContain('–')
        expect(body).not.toContain('--')
      }
    })

    it('makes no statistical, grade or scale claim', () => {
      const prose = `${email.subject} ${email.text}`.toLowerCase()
      // Percentages, "x times", "grade 9", "guarantee", "thousands of".
      expect(prose).not.toMatch(/\d+\s*%/)
      expect(prose).not.toMatch(/\bgrade\s*[0-9]\b/)
      expect(prose).not.toMatch(/guarantee/)
      expect(prose).not.toMatch(/thousands of|millions of|join \d/)
    })

    it('manufactures no urgency', () => {
      const prose = `${email.subject} ${email.text}`.toLowerCase()
      expect(prose).not.toMatch(/act now|last chance|hurry|don.t miss|final call|expires in/)
    })

    it('escapes HTML in the recipient name', () => {
      const hostile = build({
        firstName: '<script>alert(1)</script>',
        trialEndsAt: TRIAL_END,
      })
      expect(hostile.html).not.toContain('<script>')
      expect(hostile.html).toContain('&lt;script&gt;')
    })
  })

  it('only claims loss of features that are genuinely behind a live gate', () => {
    // Each of these is enforced by requireSubscription or the marking
    // paywall. If a gate is ever removed, this test should fail before the
    // email starts telling a child they lost something they still have.
    const email = buildTrialEndingEmail({ firstName: 'Amira', trialEndsAt: TRIAL_END })
    expect(email.text).toContain('AI essay marking and feedback')
    expect(email.text).toContain('Mock exam papers')
    expect(email.text).toContain('Revision study plan and revision analytics')
  })

  it('never claims the recipient loses something the free line promises', () => {
    // Courses, revision notes and flashcards are promised as free in the
    // same email, so they must never appear in the "what you lose" list.
    for (const [, build] of both) {
      const email = build({ firstName: 'Amira', trialEndsAt: TRIAL_END })
      const lostList = email.text.split('What stays free:')[0].toLowerCase()
      expect(lostList).not.toContain('flashcard')
      expect(lostList).not.toContain('revision notes')
      expect(lostList).not.toContain('course content')
      expect(lostList).not.toContain('lesson plan')
    }
  })

  it('falls back to a neutral greeting when the first name is empty', () => {
    const email = buildTrialEndingEmail({ firstName: '', trialEndsAt: TRIAL_END })
    expect(email.html).toContain('Hi there,')
  })

  it('says the account stays open rather than implying deletion', () => {
    for (const [, build] of both) {
      const email = build({ firstName: 'Amira', trialEndsAt: TRIAL_END })
      expect(email.text.toLowerCase()).toContain('account')
      expect(email.text.toLowerCase()).toMatch(/stays open|is still open/)
    }
  })
})
