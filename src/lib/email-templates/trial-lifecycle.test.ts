/**
 * Tests for the trial lifecycle email templates (M2 and M3).
 *
 * These are copy-integrity tests as much as rendering tests. The defect
 * class this codebase spent August 2026 removing was fabricated data and
 * unhonest marketing claims in a children's product, so the assertions
 * below lock down the house copy rules: no em dashes, no invented
 * statistics or grade promises, no fake urgency, an explicit statement of
 * what stays free, and a working unsubscribe link on every send.
 *
 * Corrected 23 October 2026 with the templates: mock papers are no longer
 * listed as lost (the claim sheet says free, the code gates them, and the
 * founder has not decided), "courses remain free" became "the first module
 * of each course", the opt-out is the signed /unsubscribe link, the reader
 * is greeted "Hi," rather than by a typed name, and a child's copy carries
 * no price and no plan link.
 */

import { describe, it, expect } from 'vitest'

import { buildTrialEndingEmail, buildTrialEndedEmail } from './trial-lifecycle'

const TRIAL_END = new Date('2026-09-01T12:00:00.000Z')
const UNSUBSCRIBE = 'https://theenglishhub.app/unsubscribe?token=abc.def'

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
    const adult = build({
      trialEndsAt: TRIAL_END,
      audience: 'consented-adult',
      unsubscribeUrl: UNSUBSCRIBE,
    })
    const minor = build({
      trialEndsAt: TRIAL_END,
      audience: 'service',
      unsubscribeUrl: UNSUBSCRIBE,
    })

    it('renders a subject, HTML and plain-text body', () => {
      expect(adult.subject.length).toBeGreaterThan(0)
      expect(adult.html).toContain('<!DOCTYPE html>')
      expect(adult.text.length).toBeGreaterThan(0)
    })

    it('greets the reader without a typed name', () => {
      expect(adult.html).toContain('Hi,')
      expect(adult.text.startsWith('Hi,')).toBe(true)
    })

    it('shows the real trial end date and no other deadline', () => {
      expect(adult.html).toContain('1 September 2026')
      expect(adult.text).toContain('1 September 2026')
    })

    it('states what stays free, first module only for courses', () => {
      for (const e of [adult, minor]) {
        expect(e.text).toContain('the first module of each of the 80+ courses')
        expect(e.text).not.toMatch(/courses[^.]*remain free/i)
      }
    })

    it('states that no card was taken, so nothing can be charged', () => {
      expect(adult.text.toLowerCase()).toContain('card details')
      expect(adult.text.toLowerCase()).toMatch(/nothing (will be|was) charged/)
    })

    it('links the signed unsubscribe page, not the privacy settings', () => {
      for (const e of [adult, minor]) {
        expect(e.html).toContain(UNSUBSCRIBE)
        expect(e.text).toContain(UNSUBSCRIBE)
        expect(e.html).not.toContain('/dashboard/privacy')
      }
    })

    it('says nothing about mock papers until the founder decides', () => {
      for (const e of [adult, minor]) {
        expect(`${e.subject} ${e.text}`.toLowerCase()).not.toContain('mock')
      }
    })

    // 'service' is every child, unknown age and every adult who has not
    // consented to marketing (24 October 2026: at first it was children only).
    it('gives a consented adult the price with planned standard pricing, and the service copy neither', () => {
      expect(adult.text).toContain('£3.99 a month or £29.99 a year')
      expect(adult.text).toContain('planned standard pricing £7.99 or £69.99')
      expect(adult.html).toContain('/pricing?src=')
      expect(minor.text).not.toContain('£')
      expect(minor.html).not.toContain('/pricing')
      expect(minor.text).not.toContain('/pricing')
    })

    it('uses no em dashes and no literal double hyphen in prose', () => {
      // Checked against the visible prose, not the raw markup.
      for (const e of [adult, minor]) {
        for (const body of [e.subject, visibleText(e.html), e.text]) {
          expect(body).not.toContain('—')
          expect(body).not.toContain('–')
          expect(body).not.toContain('--')
        }
      }
    })

    it('makes no statistical, grade or scale claim', () => {
      const prose = `${adult.subject} ${adult.text}`.toLowerCase()
      expect(prose).not.toMatch(/\d+\s*%/)
      expect(prose).not.toMatch(/\bgrade\s*[0-9]\b/)
      expect(prose).not.toMatch(/guarantee/)
      expect(prose).not.toMatch(/thousands of|millions of|join \d/)
    })

    it('manufactures no urgency', () => {
      const prose = `${adult.subject} ${adult.text}`.toLowerCase()
      expect(prose).not.toMatch(/act now|last chance|hurry|don.t miss|final call|expires in/)
    })

    it('says the account stays open rather than implying deletion', () => {
      expect(adult.text.toLowerCase()).toMatch(/stays open|is still open/)
    })
  })

  it('lists only what the claim sheet says a plan adds', () => {
    const email = buildTrialEndingEmail({
      trialEndsAt: TRIAL_END,
      audience: 'consented-adult',
      unsubscribeUrl: UNSUBSCRIBE,
    })
    const lost = email.text.split('What stays free:')[0]
    expect(lost).toContain('AI essay marking and feedback')
    expect(lost).toContain('Model answers')
    expect(lost).toContain('Course modules 2 onwards')
    expect(lost.toLowerCase()).not.toContain('flashcard')
    expect(lost.toLowerCase()).not.toContain('revision notes')
    expect(lost.toLowerCase()).not.toContain('lesson plan')
  })

  it('gives a teacher the Teacher price and the examiner tool', () => {
    const email = buildTrialEndingEmail({
      trialEndsAt: TRIAL_END,
      audience: 'consented-adult',
      isTeacher: true,
      unsubscribeUrl: UNSUBSCRIBE,
    })
    expect(email.text).toContain('The examiner marking tool')
    expect(email.text).toContain('£6.99 a month or £67.99 a year')
    expect(email.text).toContain('planned standard pricing £11.99 or £99')
  })

  it('keeps the M3 subject and first lines the brief asked to keep', () => {
    const email = buildTrialEndedEmail({
      trialEndsAt: TRIAL_END,
      audience: 'service',
      unsubscribeUrl: UNSUBSCRIBE,
    })
    expect(email.subject).toBe('Your free trial has ended - your account is still open')
    expect(email.text).toContain(
      'Nothing was charged for the trial: we never took your card details.',
    )
    expect(email.text).toContain('Everything you have already had marked stays where it is.')
    expect(email.html).toContain('/games/texts?src=em-d8')
  })
})
