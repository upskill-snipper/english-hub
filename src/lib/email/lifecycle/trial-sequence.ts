// ─── The daily trial sequence: M1 to M5, run by /api/cron/trial-ending ──────
//
// ADDED 23 October 2026 (document 08, Part B). The 09:00 trial-ending cron
// used to send two emails: a trial-ending warning to everyone and a winback,
// gated on marketing consent, after the trial ended. It now runs the whole
// no-card sequence, behind the same TRIAL_LIFECYCLE_EMAILS_ENABLED switch:
//
//   M2  trial ending     TRIALING, ends within 2 days     every trialist; price adults only
//   M3  trial ended      CANCELLED, ended in last 3 days  every trialist; price adults only
//   M1  first essay      TRIALING, started 3+ days ago,   adults, not teachers, nothing
//                        not yet in M2's window           marked or submitted yet
//   M4  quests are free  CANCELLED, ended 7 to 10 days    consented adults, still free, no
//                        ago                              Stripe customer, no sign-in since
//   M5  one essay        CANCELLED, ended 30 to 33 days   as M4
//                        ago
//
// WHAT CHANGED FOR M3. It was marketing and reached only users with
// PrivacySettings.marketingEnabled, which defaults to false and had two rows
// set in production on 12 October, so almost nobody whose trial ended was told.
// The facts in it are about the person's own account, so it is now a service
// notice to every trialist; the price and the plan link go to adults only.
//
// WHY M1 DOES NOT READ ONLY `Essay`. Document 08 specified "no Essay since
// currentPeriodStart". The site's own marking page saves to the Supabase
// table marking_submissions, keyed on the Supabase uuid, and writes no Prisma
// Essay at all (src/lib/marking/persistence.ts). Reading Essay alone would have
// told nearly everyone who had marked an essay that none had been marked. So M1
// checks Essay, marking_submissions and IELTS attempts, and skips anyone whose
// history it cannot read.
//
// AGE. Every recipient's age group comes from emailAgeGroup
// (src/lib/identity/age.ts): profiles first, then the Prisma row, never the
// 2000-01-01 placeholder, and unknown is a child. Under-13s are skipped as bad
// data. A child receives M2 and M3 with no price and no plan link, and never
// M1, M4 or M5, whatever their marketing setting says (§8 and the guardian
// email's promise that children's data is not used for marketing).
//
// BACKLOG. Every window is bounded, so turning the switch on cannot reach old
// trials, and MAX_SENDS_PER_RUN caps any single run. The LifecycleEmail
// ledger, claimed before each send and released on failure, makes a re-run
// send nothing twice.
// ────────────────────────────────────────────────────────────────────────────

import { ReminderType, SubscriptionPlatform, SubscriptionStatus } from '@prisma/client'
import { prisma } from '@/lib/prisma'
import { createServiceRoleClient } from '@/lib/supabase/server'
import { emailAgeGroup, isAdultForEmail, type EmailAgeGroup } from '@/lib/identity'
import { isMarketingAllowed } from '@/lib/email/marketing-preference'
import {
  buildTrialEndedEmail,
  buildTrialEndingEmail,
  type BuiltEmail,
} from '@/lib/email-templates/trial-lifecycle'
import {
  buildFirstEssayEmail,
  buildOneEssayEmail,
  buildQuestsFreeEmail,
} from '@/lib/email-templates/lifecycle-emails'
import {
  LIFECYCLE_KIND,
  claimThenSendLifecycle,
  unsubscribeLinkFor,
  type LifecycleSendOutcome,
} from './send'

const LOG = '[cron:trial-ending]'
const DAY_MS = 24 * 60 * 60 * 1000

/** Warn when the trial ends within this many days (M2). */
const WARN_LEAD_DAYS = 2
/** Tell a trialist their trial ended within this many days of it ending (M3). */
const FOLLOW_UP_WINDOW_DAYS = 3
/** M1 goes once the trial is this many days old. */
const FIRST_ESSAY_AFTER_DAYS = 3
/** M4 and M5: days after the trial ended, and how long each stays eligible. */
const QUESTS_FREE_AFTER_END_DAYS = 7
const ONE_ESSAY_AFTER_END_DAYS = 30
const WINBACK_WINDOW_DAYS = 3
/** Safety valve: cap the blast radius of any single run. */
export const MAX_SENDS_PER_RUN = 200

// ─── Types ──────────────────────────────────────────────────────────────────

/** Not an interface: runCron needs an implicit index signature. */
export type TrialSequenceResult = {
  candidatesEndingSoon: number
  candidatesRecentlyExpired: number
  candidatesFirstEssay: number
  candidatesQuestsFree: number
  candidatesOneEssay: number
  warned: number
  followedUp: number
  nudged: number
  questsFree: number
  oneEssay: number
  skipped: Record<string, number>
}

type CandidateUser = {
  id: string
  supabaseUserId: string | null
  email: string | null
  dateOfBirth: Date | null
  isMinor: boolean
  role: string
  lastLoginAt: Date | null
}

type Candidate = {
  id: string
  currentPeriodStart: Date
  currentPeriodEnd: Date
  isTeacherPlan: boolean
  user: CandidateUser | null
  renewalReminders: Array<{ sentAt: Date; nextPaymentDate: Date }>
}

type ProfileFacts = {
  id: string
  role: string | null
  date_of_birth: string | null
  is_minor: boolean | null
  subscription_status: string | null
  stripe_customer_id: string | null
}

interface Run {
  now: Date
  budget: number
  skipped: Record<string, number>
}

// ─── Shared query pieces ────────────────────────────────────────────────────

/**
 * The no-card discriminator, mirroring /api/cron/trial-expiry: never a Stripe
 * subscription, never a mobile RevenueCat row (those also carry a null Stripe
 * id), never a row with a recorded payment. See the route's header for why
 * `stripeSubscriptionId = null` is the load-bearing one.
 */
const NO_CARD = {
  stripeSubscriptionId: null,
  platform: SubscriptionPlatform.WEB,
  revenuecatAppUserId: null,
  paymentCount: 0,
} as const

const ACTIVE_USER = { deletedAt: null, accountStatus: 'ACTIVE' } as const

const CANDIDATE_SELECT = {
  id: true,
  currentPeriodStart: true,
  currentPeriodEnd: true,
  isTeacherPlan: true,
  user: {
    select: {
      id: true,
      supabaseUserId: true,
      email: true,
      dateOfBirth: true,
      isMinor: true,
      role: true,
      lastLoginAt: true,
    },
  },
  renewalReminders: {
    where: { type: ReminderType.TRIAL_ENDING },
    select: { sentAt: true, nextPaymentDate: true },
  },
} as const

function count(run: Run, reason: string): void {
  run.skipped[reason] = (run.skipped[reason] ?? 0) + 1
}

/**
 * The profiles rows for a batch of Supabase ids, or null when the read
 * failed. A failed read is not a fact about anyone: the age group then rests
 * on the Prisma row alone, which without a real date or a teacher or parent
 * role is a child, and M4 and M5 skip, because only the profile proves the
 * account is still on the free plan.
 */
async function readProfiles(ids: string[]): Promise<Map<string, ProfileFacts> | null> {
  if (ids.length === 0) return new Map()
  try {
    const { data, error } = await createServiceRoleClient()
      .from('profiles')
      .select('id, role, date_of_birth, is_minor, subscription_status, stripe_customer_id')
      .in('id', ids)
    if (error) {
      console.error(`${LOG} profiles read failed: ${error.message}`)
      return null
    }
    return new Map(((data ?? []) as ProfileFacts[]).map((r) => [r.id, r]))
  } catch (err) {
    console.error(`${LOG} profiles read threw: ${err instanceof Error ? err.message : String(err)}`)
    return null
  }
}

function supabaseIdsOf(candidates: Candidate[]): string[] {
  return candidates.map((c) => c.user?.supabaseUserId).filter((id): id is string => Boolean(id))
}

function ageGroupOf(user: CandidateUser, profile: ProfileFacts | undefined, now: Date) {
  return emailAgeGroup(
    {
      profileDob: profile?.date_of_birth ?? null,
      prismaDob: user.dateOfBirth,
      profileIsMinor: profile?.is_minor ?? null,
      prismaIsMinor: user.isMinor,
      roles: [profile?.role ?? null, user.role],
    },
    now,
  )
}

function isTeacherOf(c: Candidate, profile: ProfileFacts | undefined): boolean {
  return (
    c.isTeacherPlan ||
    (profile?.role ?? '').toLowerCase() === 'teacher' ||
    (c.user?.role ?? '').toUpperCase() === 'TEACHER'
  )
}

/** Count one send outcome, and spend budget only on a real send. */
function tally(run: Run, outcome: LifecycleSendOutcome): boolean {
  if (outcome === 'sent' || outcome === 'sent-unledgered') {
    run.budget--
    return true
  }
  if (outcome === 'already-sent') count(run, 'alreadySent')
  else if (outcome === 'claim-failed') count(run, 'claimFailed')
  else count(run, 'sendFailed')
  return false
}

async function send(
  run: Run,
  c: Candidate & { user: CandidateUser & { email: string } },
  kind: string,
  build: (unsubscribeUrl: string) => BuiltEmail,
  alsoClaim?: () => Promise<() => Promise<void>>,
): Promise<boolean> {
  const unsubscribe = unsubscribeLinkFor(c.user.supabaseUserId, run.now.getTime())
  const email = build(unsubscribe.pageUrl)
  const outcome = await claimThenSendLifecycle({
    userId: c.user.id,
    kind,
    to: c.user.email,
    subject: email.subject,
    html: email.html,
    text: email.text,
    headers: unsubscribe.headers,
    logPrefix: LOG,
    ...(alsoClaim ? { alsoClaim } : {}),
  })
  return tally(run, outcome)
}

/**
 * The RenewalReminder TRIAL_ENDING row the cron has always written for M2 and
 * M3, kept beside the new ledger so the record it has always left still
 * appears. `amount` 0 and 'GBP' because no payment is due: the templates show
 * no amount. Warning rows are written before the trial boundary and follow-up
 * rows after it, which is how the pre-checks below tell them apart.
 */
function renewalReminderClaim(subscriptionId: string, trialEnd: Date) {
  return async () => {
    const claim = await prisma.renewalReminder.create({
      data: {
        subscriptionId,
        type: ReminderType.TRIAL_ENDING,
        amount: 0,
        currency: 'GBP',
        nextPaymentDate: trialEnd,
      },
      select: { id: true },
    })
    return async () => {
      await prisma.renewalReminder.delete({ where: { id: claim.id } })
    }
  }
}

/** The checks every candidate passes first. Returns the user when it may be emailed. */
function eligibleUser(
  run: Run,
  c: Candidate,
  group: EmailAgeGroup | null,
): (CandidateUser & { email: string }) | null {
  if (!c.user?.email) {
    count(run, 'noEmail')
    return null
  }
  if (group === 'UNDER_13') {
    // Registration enforces 13 and over; anything younger is bad data and
    // must not be emailed.
    count(run, 'underAge')
    return null
  }
  return c.user as CandidateUser & { email: string }
}

function hasBudget(run: Run): boolean {
  if (run.budget > 0) return true
  count(run, 'budgetExhausted')
  return false
}

// ─── M2: trial ending ───────────────────────────────────────────────────────

async function trialEnding(run: Run): Promise<{ candidates: number; sent: number }> {
  const warnCutoff = new Date(run.now.getTime() + WARN_LEAD_DAYS * DAY_MS)
  const rows = (await prisma.subscription.findMany({
    where: {
      status: SubscriptionStatus.TRIALING,
      ...NO_CARD,
      currentPeriodEnd: { gt: run.now, lte: warnCutoff },
      user: ACTIVE_USER,
    },
    select: CANDIDATE_SELECT,
  })) as Candidate[]

  const profiles = await readProfiles(supabaseIdsOf(rows))
  let sent = 0
  for (const c of rows) {
    // A warning row is one written before the trial boundary.
    if (c.renewalReminders.some((r) => r.sentAt <= r.nextPaymentDate)) {
      count(run, 'alreadySent')
      continue
    }
    const profile = c.user?.supabaseUserId ? profiles?.get(c.user.supabaseUserId) : undefined
    const group = c.user ? ageGroupOf(c.user, profile, run.now) : null
    const user = eligibleUser(run, c, group)
    if (!user || !hasBudget(run)) continue

    const audience = group && isAdultForEmail(group) ? 'adult' : 'minor'
    const isTeacher = isTeacherOf(c, profile)
    const ok = await send(
      run,
      { ...c, user },
      LIFECYCLE_KIND.TRIAL_ENDING,
      (unsubscribeUrl) =>
        buildTrialEndingEmail({
          trialEndsAt: c.currentPeriodEnd,
          audience,
          isTeacher,
          unsubscribeUrl,
        }),
      renewalReminderClaim(c.id, c.currentPeriodEnd),
    )
    if (ok) sent++
  }
  return { candidates: rows.length, sent }
}

// ─── M3: trial ended ────────────────────────────────────────────────────────

async function trialEnded(run: Run): Promise<{ candidates: number; sent: number }> {
  // trial-expiry flips these rows to CANCELLED, so that is the state looked
  // for. The marketing-consent filter this query used to carry is gone: see
  // the header.
  const floor = new Date(run.now.getTime() - FOLLOW_UP_WINDOW_DAYS * DAY_MS)
  const rows = (await prisma.subscription.findMany({
    where: {
      status: SubscriptionStatus.CANCELLED,
      ...NO_CARD,
      currentPeriodEnd: { lt: run.now, gte: floor },
      user: ACTIVE_USER,
    },
    select: CANDIDATE_SELECT,
  })) as Candidate[]

  const profiles = await readProfiles(supabaseIdsOf(rows))
  let sent = 0
  for (const c of rows) {
    // A follow-up row is one written after the trial boundary.
    if (c.renewalReminders.some((r) => r.sentAt > r.nextPaymentDate)) {
      count(run, 'alreadySent')
      continue
    }
    const profile = c.user?.supabaseUserId ? profiles?.get(c.user.supabaseUserId) : undefined
    const group = c.user ? ageGroupOf(c.user, profile, run.now) : null
    const user = eligibleUser(run, c, group)
    if (!user || !hasBudget(run)) continue

    const audience = group && isAdultForEmail(group) ? 'adult' : 'minor'
    const isTeacher = isTeacherOf(c, profile)
    const ok = await send(
      run,
      { ...c, user },
      LIFECYCLE_KIND.TRIAL_ENDED,
      (unsubscribeUrl) =>
        buildTrialEndedEmail({
          trialEndsAt: c.currentPeriodEnd,
          audience,
          isTeacher,
          unsubscribeUrl,
        }),
      renewalReminderClaim(c.id, c.currentPeriodEnd),
    )
    if (ok) sent++
  }
  return { candidates: rows.length, sent }
}

// ─── M1: the first marked essay ─────────────────────────────────────────────

/**
 * Has this person submitted anything for marking since the trial began? True,
 * false, or null when any of the three reads failed or the account has no
 * Supabase id to look marking_submissions up by. Null skips the email: telling
 * someone "no essay has been marked yet" needs all three to say so.
 */
async function hasStartedMarking(
  prismaUserId: string,
  supabaseUserId: string | null,
  since: Date,
): Promise<boolean | null> {
  if (!supabaseUserId) return null
  try {
    const essays = await prisma.essay.count({
      where: { userId: prismaUserId, createdAt: { gte: since } },
    })
    if (essays > 0) return true
    const ielts = await prisma.iELTSAttempt.count({
      where: { userId: prismaUserId, createdAt: { gte: since } },
    })
    if (ielts > 0) return true
    const { count: submissions, error } = await createServiceRoleClient()
      .from('marking_submissions')
      .select('id', { count: 'exact', head: true })
      .eq('student_id', supabaseUserId)
      .gte('submitted_at', since.toISOString())
    if (error || typeof submissions !== 'number') {
      console.warn(`${LOG} M1 marking history unreadable: ${error?.message ?? 'no count'}`)
      return null
    }
    return submissions > 0
  } catch (err) {
    // Said, not swallowed: if a table here is missing, M1 skips everyone, and
    // the only other trace would be the checkFailed count in the run result.
    console.warn(
      `${LOG} M1 marking history unreadable: ${err instanceof Error ? err.message : String(err)}`,
    )
    return null
  }
}

async function firstEssay(run: Run): Promise<{ candidates: number; sent: number }> {
  const startedBy = new Date(run.now.getTime() - FIRST_ESSAY_AFTER_DAYS * DAY_MS)
  // Before M2's window opens, so the two never land on the same morning.
  const endsAfter = new Date(run.now.getTime() + WARN_LEAD_DAYS * DAY_MS)
  const rows = (await prisma.subscription.findMany({
    where: {
      status: SubscriptionStatus.TRIALING,
      ...NO_CARD,
      currentPeriodStart: { lte: startedBy },
      currentPeriodEnd: { gt: endsAfter },
      user: ACTIVE_USER,
    },
    select: CANDIDATE_SELECT,
  })) as Candidate[]

  const profiles = await readProfiles(supabaseIdsOf(rows))
  let sent = 0
  for (const c of rows) {
    const profile = c.user?.supabaseUserId ? profiles?.get(c.user.supabaseUserId) : undefined
    const group = c.user ? ageGroupOf(c.user, profile, run.now) : null
    const user = eligibleUser(run, c, group)
    if (!user) continue
    if (!group || !isAdultForEmail(group)) {
      // Nudges are off for under-18s (§8), and unknown age is a child.
      count(run, 'notAdult')
      continue
    }
    if (isTeacherOf(c, profile)) {
      // A teacher's trial is the examiner tool, whose runs this cannot see.
      count(run, 'teacher')
      continue
    }
    const started = await hasStartedMarking(user.id, user.supabaseUserId, c.currentPeriodStart)
    if (started === null) {
      count(run, 'checkFailed')
      continue
    }
    if (started) {
      count(run, 'alreadyMarking')
      continue
    }
    if (!hasBudget(run)) continue

    const ok = await send(run, { ...c, user }, LIFECYCLE_KIND.FIRST_ESSAY, (unsubscribeUrl) =>
      buildFirstEssayEmail({ trialEndsAt: c.currentPeriodEnd, unsubscribeUrl }),
    )
    if (ok) sent++
  }
  return { candidates: rows.length, sent }
}

// ─── M4 and M5: consented adults whose trial ended ──────────────────────────

async function winback(
  run: Run,
  afterEndDays: number,
  kind: string,
  build: (args: { trialEndedAt: Date; isTeacher: boolean; unsubscribeUrl: string }) => BuiltEmail,
): Promise<{ candidates: number; sent: number }> {
  const latestEnd = new Date(run.now.getTime() - afterEndDays * DAY_MS)
  const earliestEnd = new Date(latestEnd.getTime() - WINBACK_WINDOW_DAYS * DAY_MS)
  const rows = (await prisma.subscription.findMany({
    where: {
      status: SubscriptionStatus.CANCELLED,
      ...NO_CARD,
      currentPeriodEnd: { lte: latestEnd, gt: earliestEnd },
      user: ACTIVE_USER,
    },
    select: CANDIDATE_SELECT,
  })) as Candidate[]

  const profiles = await readProfiles(supabaseIdsOf(rows))
  let sent = 0
  for (const c of rows) {
    const profile = c.user?.supabaseUserId ? profiles?.get(c.user.supabaseUserId) : undefined
    const group = c.user ? ageGroupOf(c.user, profile, run.now) : null
    const user = eligibleUser(run, c, group)
    if (!user) continue
    if (!group || !isAdultForEmail(group)) {
      // A child gets no marketing, whatever their setting says.
      count(run, 'notAdult')
      continue
    }
    // Still on the free plan, never through checkout: both read from the
    // profile, so a missing profile is a skip, not a pass.
    if (
      !profile ||
      (profile.subscription_status ?? '').toLowerCase() !== 'free' ||
      profile.stripe_customer_id
    ) {
      count(run, 'notFree')
      continue
    }
    // "No sign-in since": a person who has come back needs no reason to.
    if (user.lastLoginAt && user.lastLoginAt.getTime() > c.currentPeriodEnd.getTime()) {
      count(run, 'signedInSince')
      continue
    }
    if (!(await isMarketingAllowed(user.supabaseUserId))) {
      count(run, 'notConsented')
      continue
    }
    if (!hasBudget(run)) continue

    const isTeacher = isTeacherOf(c, profile)
    const ok = await send(run, { ...c, user }, kind, (unsubscribeUrl) =>
      build({ trialEndedAt: c.currentPeriodEnd, isTeacher, unsubscribeUrl }),
    )
    if (ok) sent++
  }
  return { candidates: rows.length, sent }
}

// ─── The run ────────────────────────────────────────────────────────────────

/**
 * Run the whole sequence once. Service notices first (M2, M3), so a budget
 * that runs out spends itself on what a trialist most needs to know.
 */
export async function runTrialSequence(now: Date = new Date()): Promise<TrialSequenceResult> {
  const run: Run = {
    now,
    budget: MAX_SENDS_PER_RUN,
    skipped: {
      alreadySent: 0,
      noEmail: 0,
      underAge: 0,
      claimFailed: 0,
      sendFailed: 0,
      budgetExhausted: 0,
    },
  }

  const m2 = await trialEnding(run)
  const m3 = await trialEnded(run)
  const m1 = await firstEssay(run)
  const m4 = await winback(run, QUESTS_FREE_AFTER_END_DAYS, LIFECYCLE_KIND.QUESTS_FREE, (a) =>
    buildQuestsFreeEmail(a),
  )
  const m5 = await winback(run, ONE_ESSAY_AFTER_END_DAYS, LIFECYCLE_KIND.ONE_ESSAY, (a) =>
    buildOneEssayEmail(a),
  )

  return {
    candidatesEndingSoon: m2.candidates,
    candidatesRecentlyExpired: m3.candidates,
    candidatesFirstEssay: m1.candidates,
    candidatesQuestsFree: m4.candidates,
    candidatesOneEssay: m5.candidates,
    warned: m2.sent,
    followedUp: m3.sent,
    nudged: m1.sent,
    questsFree: m4.sent,
    oneEssay: m5.sent,
    skipped: run.skipped,
  }
}
