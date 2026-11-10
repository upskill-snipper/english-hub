// ─── The first fortnight on a new account ───────────────────────────────────
//
// UX-4. A new account landed on a stats row reading "0 courses, 0 modules,
// 0 certificates" - three zeroes and no instruction, on the screen where
// somebody decides whether this product is worth paying for. The flagship
// feature, AI marking, was one chip among nine.
//
// This replaces that row for the first fortnight with three steps that can
// actually be completed on day one. Each one is checked from a signal that
// already exists, so nothing here can claim progress that did not happen:
//
//   1. an exam board is chosen        the english-hub-board cookie
//   2. an essay has been marked       the marking history in localStorage
//   3. a result has been opened       a flag the results page writes
//
// WHY LOCAL SIGNALS RATHER THAN A QUERY. Marking history is already kept in
// localStorage on this device, and the alternative - a round trip per step on
// every dashboard render - would make the page slower to tell a student
// something their own browser already knows. The cost is that the checklist is
// per-device, which is the right trade for a nudge and the wrong one for
// anything that mattered.
//
// EVERY READ IS GUARDED. Private windows, blocked site data and SSR all make
// these throw or return nothing, and a checklist that throws would take the
// dashboard down with it.

/** How long an account counts as new. Two weeks, per the item. */
export const FIRST_WEEK_DAYS = 14

export const RESULT_OPENED_KEY = 'english-hub-result-opened'
const BOARD_COOKIE = 'english-hub-board'
const MARKING_HISTORY_KEY = 'english-hub-marking-history'

export interface FirstWeekSignals {
  boardChosen: boolean
  essayMarked: boolean
  resultOpened: boolean
}

export interface FirstWeekStep {
  id: 'board' | 'marking' | 'result'
  done: boolean
  href: string
}

/**
 * Is this account inside its first fortnight?
 *
 * Returns false when the date is missing or unparseable rather than treating
 * an unknown account as new: showing a first-week checklist to somebody who
 * has been here a year is worse than not showing it at all.
 */
export function isFirstWeek(createdAt: string | null | undefined, now: number): boolean {
  if (!createdAt) return false
  const created = Date.parse(createdAt)
  if (Number.isNaN(created)) return false
  const age = now - created
  if (age < 0) return false
  return age < FIRST_WEEK_DAYS * 24 * 60 * 60 * 1000
}

/** Safe localStorage read. Returns null on any failure, including SSR. */
function readStorage(key: string): string | null {
  try {
    if (typeof window === 'undefined') return null
    return window.localStorage.getItem(key)
  } catch {
    return null
  }
}

/** True when the marking history holds at least one entry. */
export function hasMarkedEssay(rawHistory: string | null): boolean {
  if (!rawHistory) return false
  try {
    const parsed: unknown = JSON.parse(rawHistory)
    return Array.isArray(parsed) && parsed.length > 0
  } catch {
    // A corrupt history is not evidence of a marked essay.
    return false
  }
}

/** Read the three signals from this device. */
export function readFirstWeekSignals(): FirstWeekSignals {
  let boardChosen = false
  try {
    boardChosen =
      typeof document !== 'undefined' &&
      new RegExp(`(?:^|;\\s*)${BOARD_COOKIE}=[^;]+`).test(document.cookie)
  } catch {
    boardChosen = false
  }

  return {
    boardChosen,
    essayMarked: hasMarkedEssay(readStorage(MARKING_HISTORY_KEY)),
    resultOpened: readStorage(RESULT_OPENED_KEY) === '1',
  }
}

/**
 * The three steps, in order, with the marking call to action second.
 *
 * A later step is NOT shown as done just because a further one is: the signals
 * are independent, and inferring backwards would let the card claim a student
 * chose a board when the cookie says they did not.
 */
export function firstWeekSteps(signals: FirstWeekSignals): FirstWeekStep[] {
  return [
    { id: 'board', done: signals.boardChosen, href: '/board-select' },
    { id: 'marking', done: signals.essayMarked, href: '/marking/submit' },
    { id: 'result', done: signals.resultOpened, href: '/marking/history' },
  ]
}

/** The first step still to do, which is what the card points at. */
export function nextStep(steps: FirstWeekStep[]): FirstWeekStep | null {
  return steps.find((s) => !s.done) ?? null
}

/**
 * What the card's last line says about the person's plan.
 *
 * THE DEFECT THIS FIXES (found 10 November 2026). The line was a two-way
 * choice: 'pro' with a date read "Your plan is active until ...", and
 * EVERYTHING else read "You are on the free trial." The card shows for the
 * first fourteen days of an account and the no-card trial lasts seven, so on
 * days 8 to 14 every ex-trialist, whose profile the expiry cron has set back
 * to 'free', was told they were still on the free trial, at the moment the
 * product should have been telling them it had ended and what a plan costs.
 * An account that never had a trial was told the same thing.
 *
 * It reads the same two profile fields as before, because those are what the
 * web gates read. 'free' with an end date in the past is a trial the cron has
 * closed (the cron leaves `subscription_end_date` in place, see
 * src/lib/billing/trial-state.ts). 'cancelled' is somebody who paid, so it is
 * never called a finished trial.
 */
export type PlanLine =
  | { kind: 'active'; until: Date }
  | { kind: 'trial' }
  | { kind: 'trial-ended'; endedAt: Date }
  | { kind: 'free' }
  /** 'pro' with no usable date: say nothing rather than something untrue. */
  | { kind: 'none' }

export function planLine(
  subscriptionStatus: string | null | undefined,
  subscriptionEndDate: string | null | undefined,
  now: number,
): PlanLine {
  const status = (subscriptionStatus ?? '').toLowerCase()
  const end = subscriptionEndDate ? new Date(subscriptionEndDate) : null
  const endOk = end !== null && !Number.isNaN(end.getTime())

  if (status === 'pro') return endOk ? { kind: 'active', until: end! } : { kind: 'none' }
  if (status === 'trialing') return { kind: 'trial' }
  if ((status === 'free' || status === '') && endOk && end!.getTime() <= now) {
    return { kind: 'trial-ended', endedAt: end! }
  }
  return { kind: 'free' }
}

/** Record that a marking result has been opened. Never throws. */
export function markResultOpened(): void {
  try {
    if (typeof window === 'undefined') return
    window.localStorage.setItem(RESULT_OPENED_KEY, '1')
  } catch {
    // A private window cannot record it, and the checklist simply stays on
    // step three. Nothing else depends on this.
  }
}
