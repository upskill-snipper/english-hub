import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { planLine } from '@/lib/dashboard/first-week'

/**
 * The last line of the first-fortnight card.
 *
 * THE DEFECT (found 10 November 2026). The card shows for an account's first
 * fourteen days and the no-card trial lasts seven. The line only knew two
 * states, so from day 8 every ex-trialist (profile back to 'free', end date
 * kept) was told "You are on the free trial." at the moment the dashboard
 * should have said the trial had ended and offered a plan.
 */

const NOW = Date.parse('2026-11-10T12:00:00Z')
const PAST = '2026-11-05T09:00:00Z'
const FUTURE = '2026-11-14T09:00:00Z'

describe('planLine', () => {
  it('names a trial the expiry cron has closed, with its date', () => {
    const line = planLine('free', PAST, NOW)
    expect(line.kind).toBe('trial-ended')
    expect(line.kind === 'trial-ended' && line.endedAt.toISOString()).toBe(
      new Date(PAST).toISOString(),
    )
  })

  it('never calls a finished trial "the free trial"', () => {
    expect(planLine('free', PAST, NOW).kind).not.toBe('trial')
  })

  it('reports a live plan with its date', () => {
    expect(planLine('pro', FUTURE, NOW).kind).toBe('active')
  })

  it('says nothing for a plan with no usable date, rather than something untrue', () => {
    expect(planLine('pro', null, NOW).kind).toBe('none')
    expect(planLine('pro', 'not a date', NOW).kind).toBe('none')
  })

  it('says free plan to an account that never had a trial', () => {
    expect(planLine('free', null, NOW).kind).toBe('free')
    expect(planLine(null, null, NOW).kind).toBe('free')
  })

  it('never tells somebody who paid that their free trial ended', () => {
    expect(planLine('cancelled', PAST, NOW).kind).toBe('free')
    expect(planLine('past_due', PAST, NOW).kind).toBe('free')
  })

  it('keeps the legacy trialing status as a trial', () => {
    expect(planLine('trialing', FUTURE, NOW).kind).toBe('trial')
  })
})

describe('the card', () => {
  const src = readFileSync(
    join(process.cwd(), 'src/components/dashboard/FirstWeekCard.tsx'),
    'utf8',
  )

  it('takes its plan line from planLine', () => {
    expect(src).toContain('planLine(subscriptionStatus, subscriptionEndDate')
  })

  it('offers plans when the trial has ended or never started', () => {
    expect(src).toContain("plan.kind === 'trial-ended'")
    expect(src).toContain('/pricing?plan=student_monthly')
  })
})
