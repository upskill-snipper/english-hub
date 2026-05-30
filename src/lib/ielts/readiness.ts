// ─── UK Candidate Readiness scoring (IELTS-8) ───────────────────────────────
// The deterministic engine behind the headline "Candidate Readiness Report".
// It turns the learner's existing IELTS data (diagnostic + practice profile)
// PLUS a short self-report into a single 0-100 readiness score with a
// traffic-light band, broken into FOUR weighted domains:
//
//   • English readiness           (40) - real data: profile/diagnostic bands vs target
//   • Application readiness        (25) - UCAS Q1/Q2/Q3 quality (PS scores or self-report)
//   • Visa & finance readiness     (20) - short self-report (IELTS-10 will feed this later)
//   • Academic transition readiness(15) - short self-report (IELTS-11 will feed this later)
//
// There are NO AI calls here - this is pure, testable scoring from data the app
// already has + a questionnaire. The input shapes for the visa/finance and
// academic-transition domains are deliberately small and clean so the fuller
// interactive modules (IELTS-10 / IELTS-11) can later produce the SAME shape and
// be dropped in without touching this file.
// ────────────────────────────────────────────────────────────────────────────

import type { Band, IeltsSkill } from './types'
import { IELTS_SKILLS } from './types'
import { bandLabel } from './bands'

// ─── Public colour band ─────────────────────────────────────────────────────
// 80-100 GREEN, 60-79 AMBER, <60 RED. Applied to the overall score AND each
// domain sub-score (each is normalised to /100 for the colour decision).

export type ReadinessColour = 'green' | 'amber' | 'red'

export function readinessColour(scoreOutOf100: number): ReadinessColour {
  if (scoreOutOf100 >= 80) return 'green'
  if (scoreOutOf100 >= 60) return 'amber'
  return 'red'
}

export const READINESS_COLOUR_LABEL: Record<ReadinessColour, string> = {
  green: 'On track',
  amber: 'Some gaps',
  red: 'Needs work',
}

// ─── Domain identity + weights (total = 100) ────────────────────────────────

export type ReadinessDomainId = 'english' | 'application' | 'visa' | 'academic'

export const DOMAIN_WEIGHTS: Record<ReadinessDomainId, number> = {
  english: 40,
  application: 25,
  visa: 20,
  academic: 15,
}

export const DOMAIN_META: Record<
  ReadinessDomainId,
  { id: ReadinessDomainId; label: string; weight: number; blurb: string }
> = {
  english: {
    id: 'english',
    label: 'English readiness',
    weight: 40,
    blurb: 'Your IELTS bands against the band your course requires.',
  },
  application: {
    id: 'application',
    label: 'Application readiness',
    weight: 25,
    blurb: 'Your UCAS application: personal statement, shortlist and references.',
  },
  visa: {
    id: 'visa',
    label: 'Visa & finance readiness',
    weight: 20,
    blurb: 'Passport, funds evidence, sponsorship and your CAS / visa stage.',
  },
  academic: {
    id: 'academic',
    label: 'Academic transition readiness',
    weight: 15,
    blurb: 'Ready to study, budget and live in the UK once you arrive.',
  },
}

// ─── Inputs ─────────────────────────────────────────────────────────────────

/** Selectable target bands - the bands realistically targeted by applicants. */
export const READINESS_TARGET_BANDS: Band[] = [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9]
export const DEFAULT_READINESS_TARGET: Band = 6.5

/**
 * English-domain input: the resolved current band per skill (practice attempt
 * winning over the diagnostic estimate, as the plan page does) + the overall
 * and the user-chosen target. `null` = not yet assessed for that skill.
 */
export interface EnglishReadinessInput {
  target: Band
  overall: Band | null
  perSkill: Record<IeltsSkill, Band | null>
}

/**
 * Application-domain input. If `psScores` (the per-question UCAS coach ratings,
 * 0-5 each) are available client-side they are PREFERRED; otherwise the
 * self-report below derives the score. Both may be present - psScores wins for
 * the three "drafted" questions, the self-report supplies the rest.
 */
export interface ApplicationReadinessInput {
  /** UCAS Personal-Statement Coach per-question average ratings (0-5), if known. */
  psScores?: { q1?: number; q2?: number; q3?: number }
  /** Self-report fallback / supplement. */
  courseClarity: 'decided' | 'shortlisted' | 'undecided'
  shortlistDone: boolean
  refereeStatus: 'secured' | 'asked' | 'none'
  transcriptStatus: 'ready' | 'in_progress' | 'none'
  q1Drafted: boolean
  q2Drafted: boolean
  q3Drafted: boolean
}

/**
 * Visa & finance self-report. Kept deliberately small + flat so the fuller
 * IELTS-10 checklist can emit exactly this shape later. `na` (not applicable)
 * neutralises a line so a candidate who (e.g.) needs no TB test or ATAS isn't
 * penalised for it.
 */
export type TriState = 'yes' | 'no' | 'na'

export interface VisaFinanceReadinessInput {
  passportValid: 'yes' | 'no' | 'expiring' // expiring = <6 months / renewing
  fundsEvidence: 'ready' | 'gathering' | 'none'
  sponsorOrScholarship: 'self_funded' | 'sponsor_confirmed' | 'applying' | 'unknown'
  casStage: 'received' | 'offer_holder' | 'applying' | 'not_started'
  tbTest: TriState
  atas: TriState
}

/**
 * Academic-transition self-report. Small + flat for the same reason - IELTS-11's
 * fuller modules will later produce this shape.
 */
export type ConfidenceLevel = 'confident' | 'some' | 'low'

export interface AcademicTransitionReadinessInput {
  academicWriting: ConfidenceLevel
  budgeting: ConfidenceLevel
  accommodation: 'sorted' | 'searching' | 'not_started'
  contactHours: 'understand' | 'unsure'
}

/** The full set of report inputs (what we persist to localStorage). */
export interface ReadinessInputs {
  target: Band
  application: ApplicationReadinessInput
  visa: VisaFinanceReadinessInput
  academic: AcademicTransitionReadinessInput
}

// ─── Outputs ────────────────────────────────────────────────────────────────

export interface SkillTargetRow {
  skill: IeltsSkill
  current: Band | null
  target: Band
  gap: number // max(0, target - current); 0 when unknown
  meetsTarget: boolean
}

export interface DomainResult {
  id: ReadinessDomainId
  label: string
  weight: number // contribution to the 100-point total
  /** Points earned out of `weight`. */
  earned: number
  /** Sub-score normalised to /100 (earned / weight * 100) for the colour. */
  percent: number
  colour: ReadinessColour
  /** 1-2 line, domain-specific recommendation. */
  recommendation: string
  /** Short bullet facts shown on the card. */
  facts: string[]
  /** English domain only: the per-skill vs target table. */
  skillRows?: SkillTargetRow[]
}

export interface RedFlag {
  domain: ReadinessDomainId
  severity: 'high' | 'medium'
  message: string
}

export type ActionOwner = 'student' | 'parent' | 'counsellor'
export type ActionHorizon = '7-day' | '30-day' | '60-day'

export interface NextAction {
  horizon: ActionHorizon
  owner: ActionOwner
  text: string
  domain: ReadinessDomainId
}

export interface ReadinessReport {
  /** 0-100 overall readiness score (sum of domain `earned`). */
  overall: number
  colour: ReadinessColour
  domains: DomainResult[]
  redFlags: RedFlag[]
  actions: NextAction[]
  generatedAt: string // ISO
}

// ─── Helpers ────────────────────────────────────────────────────────────────

function clamp01(n: number): number {
  return Math.max(0, Math.min(1, n))
}

function round1(n: number): number {
  return Math.round(n * 10) / 10
}

const SKILL_LABEL: Record<IeltsSkill, string> = {
  listening: 'Listening',
  reading: 'Reading',
  writing: 'Writing',
  speaking: 'Speaking',
}

// ─── 1. English readiness (40) - REAL DATA ──────────────────────────────────
// Full marks when overall AND every component meets target. Otherwise partial
// credit for closeness: each skill contributes a fraction = 1 - (gap / 2),
// floored at 0 (a 2-band gap scores nothing for that skill); unknown skills
// score a neutral half (we can't measure them, so we don't fully punish or
// reward). The overall band contributes a parallel closeness factor. Skills are
// weighted 70% of the domain, overall band the remaining 30%.

function scoreEnglish(input: EnglishReadinessInput): DomainResult {
  const weight = DOMAIN_WEIGHTS.english
  const target = input.target

  const skillRows: SkillTargetRow[] = IELTS_SKILLS.map((skill) => {
    const current = input.perSkill[skill] ?? null
    const gap = current === null ? 0 : Math.max(0, target - current)
    return { skill, current, target, gap, meetsTarget: current !== null && current >= target }
  })

  // Per-skill closeness (0..1). Unknown = 0.5 neutral.
  const skillFactors = skillRows.map((row) => {
    if (row.current === null) return 0.5
    if (row.current >= target) return 1
    return clamp01(1 - row.gap / 2)
  })
  const skillScore = skillFactors.reduce((a, b) => a + b, 0) / skillFactors.length

  // Overall-band closeness (0..1). Unknown overall = 0.5 neutral.
  let overallFactor: number
  if (input.overall === null) overallFactor = 0.5
  else if (input.overall >= target) overallFactor = 1
  else overallFactor = clamp01(1 - Math.max(0, target - input.overall) / 2)

  const fraction = skillScore * 0.7 + overallFactor * 0.3
  const earned = round1(fraction * weight)
  const percent = Math.round(fraction * 100)

  const belowTarget = skillRows.filter((r) => r.current !== null && !r.meetsTarget)
  const unknown = skillRows.filter((r) => r.current === null)

  const facts: string[] = []
  facts.push(`Target band ${bandLabel(target)} · current overall ${bandLabel(input.overall)}`)
  if (belowTarget.length > 0) {
    facts.push(
      `${belowTarget.length} skill${belowTarget.length > 1 ? 's' : ''} below target: ${belowTarget
        .map((r) => `${SKILL_LABEL[r.skill]} (+${round1(r.gap)})`)
        .join(', ')}`,
    )
  }
  if (unknown.length > 0) {
    facts.push(
      `${unknown.length} skill${unknown.length > 1 ? 's' : ''} not yet assessed: ${unknown
        .map((r) => SKILL_LABEL[r.skill])
        .join(', ')}`,
    )
  }
  if (belowTarget.length === 0 && unknown.length === 0) {
    facts.push('Every skill currently meets your target band.')
  }

  let recommendation: string
  if (unknown.length > 0) {
    recommendation = `Sit the diagnostic for your un-assessed skill${
      unknown.length > 1 ? 's' : ''
    } so this score reflects your real level, then close the biggest gap first.`
  } else if (belowTarget.length > 0) {
    const worst = [...belowTarget].sort((a, b) => b.gap - a.gap)[0]
    recommendation = `Prioritise ${SKILL_LABEL[
      worst.skill
    ].toLowerCase()} — it is ${round1(worst.gap)} band${
      worst.gap === 1 ? '' : 's'
    } below your target of ${bandLabel(target)}.`
  } else {
    recommendation = `You meet your target across the board. Keep practising to hold the band on test day.`
  }

  return {
    id: 'english',
    label: DOMAIN_META.english.label,
    weight,
    earned,
    percent,
    colour: readinessColour(percent),
    recommendation,
    facts,
    skillRows,
  }
}

// ─── 2. Application readiness (25) - PS SCORES or SELF-REPORT ────────────────
// Composed of: personal-statement quality (12), course/shortlist decisions (7),
// references + transcript (6). PS quality uses the coach's per-question 0-5
// ratings when available; otherwise "drafted vs not" from the self-report.

function scoreApplication(input: ApplicationReadinessInput): DomainResult {
  const weight = DOMAIN_WEIGHTS.application
  const PS_MAX = 12
  const DECISION_MAX = 7
  const DOCS_MAX = 6

  const facts: string[] = []

  // ── Personal statement (12) ──
  const drafted = [input.q1Drafted, input.q2Drafted, input.q3Drafted]
  const draftedCount = drafted.filter(Boolean).length
  const scores = input.psScores
  const hasPsScores =
    !!scores && [scores.q1, scores.q2, scores.q3].some((s) => typeof s === 'number' && s > 0)

  let psFraction: number
  if (hasPsScores) {
    // Average the available 0-5 ratings; a missing/zero question counts as 0.
    const vals = [scores!.q1 ?? 0, scores!.q2 ?? 0, scores!.q3 ?? 0]
    psFraction = clamp01(vals.reduce((a, b) => a + b, 0) / (vals.length * 5))
    facts.push(
      `Personal statement coached — average ${round1(
        vals.reduce((a, b) => a + b, 0) / vals.length,
      )}/5 across the three questions.`,
    )
  } else {
    // No coach scores: credit drafting only, but cap below "coached" so the
    // user is nudged to actually run the coach.
    psFraction = (draftedCount / 3) * 0.7
    facts.push(
      draftedCount === 3
        ? 'All three UCAS questions drafted (not yet checked by the coach).'
        : `${draftedCount} of 3 UCAS questions drafted.`,
    )
  }
  const psEarned = psFraction * PS_MAX

  // ── Course + shortlist decisions (7) ──
  const clarityFraction =
    input.courseClarity === 'decided' ? 1 : input.courseClarity === 'shortlisted' ? 0.6 : 0.2
  const shortlistFraction = input.shortlistDone ? 1 : 0
  const decisionEarned = (clarityFraction * 0.6 + shortlistFraction * 0.4) * DECISION_MAX
  facts.push(
    input.courseClarity === 'decided'
      ? 'Course / subject decided.'
      : input.courseClarity === 'shortlisted'
        ? 'Course shortlisted, not yet final.'
        : 'Course / subject still undecided.',
  )

  // ── References + transcript (6) ──
  const refFraction =
    input.refereeStatus === 'secured' ? 1 : input.refereeStatus === 'asked' ? 0.5 : 0
  const transcriptFraction =
    input.transcriptStatus === 'ready' ? 1 : input.transcriptStatus === 'in_progress' ? 0.5 : 0
  const docsEarned = (refFraction * 0.5 + transcriptFraction * 0.5) * DOCS_MAX

  const earned = round1(psEarned + decisionEarned + docsEarned)
  const percent = Math.round((earned / weight) * 100)

  let recommendation: string
  if (!hasPsScores && draftedCount < 3) {
    recommendation =
      'Draft all three UCAS answers, then run the Personal-Statement Coach to get them assessed.'
  } else if (!hasPsScores) {
    recommendation = 'Run the Personal-Statement Coach to turn your drafts into scored feedback.'
  } else if (input.refereeStatus !== 'secured' || input.transcriptStatus !== 'ready') {
    recommendation = 'Lock in your referee and get your transcript ready — these block submission.'
  } else if (input.courseClarity !== 'decided') {
    recommendation = 'Finalise your course choice and confirm your five UCAS choices.'
  } else {
    recommendation = 'Your application is in good shape — review once more, then submit on UCAS.'
  }

  return {
    id: 'application',
    label: DOMAIN_META.application.label,
    weight,
    earned,
    percent,
    colour: readinessColour(percent),
    recommendation,
    facts,
  }
}

// ─── 3. Visa & finance readiness (20) - SELF-REPORT ─────────────────────────
// passport (4), funds (6), sponsor (3), CAS (4), TB (1.5), ATAS (1.5).
// `na` lines award full marks (nothing left to do) and are not flagged.

function scoreVisaFinance(input: VisaFinanceReadinessInput): DomainResult {
  const weight = DOMAIN_WEIGHTS.visa
  const facts: string[] = []

  const passport = input.passportValid === 'yes' ? 4 : input.passportValid === 'expiring' ? 1.5 : 0
  const funds = input.fundsEvidence === 'ready' ? 6 : input.fundsEvidence === 'gathering' ? 3 : 0
  const sponsor =
    input.sponsorOrScholarship === 'sponsor_confirmed' ||
    input.sponsorOrScholarship === 'self_funded'
      ? 3
      : input.sponsorOrScholarship === 'applying'
        ? 1.5
        : 0
  const cas =
    input.casStage === 'received'
      ? 4
      : input.casStage === 'offer_holder'
        ? 2.5
        : input.casStage === 'applying'
          ? 1.5
          : 0
  const tb = input.tbTest === 'na' ? 1.5 : input.tbTest === 'yes' ? 1.5 : 0
  const atas = input.atas === 'na' ? 1.5 : input.atas === 'yes' ? 1.5 : 0

  const earned = round1(passport + funds + sponsor + cas + tb + atas)
  const percent = Math.round((earned / weight) * 100)

  facts.push(
    input.passportValid === 'yes'
      ? 'Passport valid for study.'
      : input.passportValid === 'expiring'
        ? 'Passport expiring / renewing.'
        : 'Passport not valid yet.',
  )
  facts.push(
    input.fundsEvidence === 'ready'
      ? 'Funds evidence ready (28-day rule met).'
      : input.fundsEvidence === 'gathering'
        ? 'Gathering funds evidence.'
        : 'No funds evidence yet.',
  )
  facts.push(
    input.casStage === 'received'
      ? 'CAS received.'
      : input.casStage === 'offer_holder'
        ? 'Offer holder — CAS not yet issued.'
        : input.casStage === 'applying'
          ? 'Applying / awaiting offer.'
          : 'Not yet applied.',
  )

  let recommendation: string
  if (input.fundsEvidence !== 'ready') {
    recommendation =
      'Get your maintenance funds into an eligible account and held for the required 28 days — this is the most common visa refusal cause.'
  } else if (input.casStage !== 'received') {
    recommendation =
      'Chase your CAS from your chosen university — you cannot apply for the visa without it.'
  } else if (input.passportValid !== 'yes') {
    recommendation = 'Renew your passport now so it is valid well beyond your course start date.'
  } else {
    recommendation =
      'Visa and finance look ready — book your appointment once your CAS dates are set.'
  }

  return {
    id: 'visa',
    label: DOMAIN_META.visa.label,
    weight,
    earned,
    percent,
    colour: readinessColour(percent),
    recommendation,
    facts,
  }
}

// ─── 4. Academic transition readiness (15) - SELF-REPORT ────────────────────
// academic writing (5), budgeting (4), accommodation (3), contact hours (3).

function scoreAcademic(input: AcademicTransitionReadinessInput): DomainResult {
  const weight = DOMAIN_WEIGHTS.academic
  const conf = (c: ConfidenceLevel) => (c === 'confident' ? 1 : c === 'some' ? 0.5 : 0)

  const writing = conf(input.academicWriting) * 5
  const budgeting = conf(input.budgeting) * 4
  const accommodation =
    input.accommodation === 'sorted' ? 3 : input.accommodation === 'searching' ? 1.5 : 0
  const contact = input.contactHours === 'understand' ? 3 : 0

  const earned = round1(writing + budgeting + accommodation + contact)
  const percent = Math.round((earned / weight) * 100)

  const facts: string[] = [
    `Academic-writing confidence: ${input.academicWriting}.`,
    `Budgeting confidence: ${input.budgeting}.`,
    input.accommodation === 'sorted'
      ? 'Accommodation sorted.'
      : input.accommodation === 'searching'
        ? 'Looking for accommodation.'
        : 'Accommodation not started.',
  ]

  let recommendation: string
  if (input.academicWriting === 'low') {
    recommendation =
      'Build academic-writing habits now — referencing, paraphrasing and avoiding plagiarism are assessed from week one.'
  } else if (input.contactHours === 'unsure') {
    recommendation =
      'Read your course handbook so you know your contact hours vs independent-study expectations.'
  } else if (input.accommodation !== 'sorted') {
    recommendation = 'Sort accommodation early — university halls and city lets fill up fast.'
  } else if (input.budgeting !== 'confident') {
    recommendation =
      'Build a monthly UK budget (rent, food, transport, phone) so funds last the year.'
  } else {
    recommendation = 'You are set up well for the transition — keep your handbook and budget handy.'
  }

  return {
    id: 'academic',
    label: DOMAIN_META.academic.label,
    weight,
    earned,
    percent,
    colour: readinessColour(percent),
    recommendation,
    facts,
  }
}

// ─── Red flags ──────────────────────────────────────────────────────────────

function collectRedFlags(
  english: DomainResult,
  application: ApplicationReadinessInput,
  applicationResult: DomainResult,
  visa: VisaFinanceReadinessInput,
  academic: AcademicTransitionReadinessInput,
): RedFlag[] {
  const flags: RedFlag[] = []

  // English: any assessed component a full band or more below target.
  for (const row of english.skillRows ?? []) {
    if (row.current !== null && row.gap >= 1) {
      flags.push({
        domain: 'english',
        severity: row.gap >= 1.5 ? 'high' : 'medium',
        message: `${SKILL_LABEL[row.skill]} is ${round1(row.gap)} band${
          row.gap === 1 ? '' : 's'
        } below your target of ${bandLabel(row.target)}.`,
      })
    }
  }

  // Application: weak / un-coached personal statement, missing referee/transcript.
  const psWeak =
    application.psScores &&
    [application.psScores.q1, application.psScores.q2, application.psScores.q3].some(
      (s) => typeof s === 'number' && s > 0 && s < 3,
    )
  if (psWeak) {
    flags.push({
      domain: 'application',
      severity: 'medium',
      message: 'At least one UCAS answer scored below 3/5 — redraft before submitting.',
    })
  }
  if (application.refereeStatus === 'none') {
    flags.push({
      domain: 'application',
      severity: 'high',
      message:
        'No referee secured — your UCAS application cannot be submitted without a reference.',
    })
  }
  if (application.transcriptStatus === 'none') {
    flags.push({
      domain: 'application',
      severity: 'medium',
      message: 'Academic transcript not started — request it from your school/college now.',
    })
  }

  // Visa & finance: funds + passport + CAS are the hard blockers.
  if (visa.fundsEvidence !== 'ready') {
    flags.push({
      domain: 'visa',
      severity: visa.fundsEvidence === 'none' ? 'high' : 'medium',
      message:
        'Funds evidence incomplete — the 28-day maintenance rule is the top visa-refusal cause.',
    })
  }
  if (visa.passportValid === 'no') {
    flags.push({
      domain: 'visa',
      severity: 'high',
      message: 'Passport is not valid — renew it before applying for your visa.',
    })
  }

  // Academic transition: low academic-writing confidence is a real risk.
  if (academic.academicWriting === 'low') {
    flags.push({
      domain: 'academic',
      severity: 'medium',
      message: 'Low confidence in academic writing — a common cause of early-term difficulty.',
    })
  }

  // Surface highest-severity first.
  return flags.sort((a, b) => (a.severity === b.severity ? 0 : a.severity === 'high' ? -1 : 1))
}

// ─── Next actions (7 / 30 / 60 day, with an owner) ──────────────────────────

function buildActions(
  english: DomainResult,
  application: ApplicationReadinessInput,
  visa: VisaFinanceReadinessInput,
  academic: AcademicTransitionReadinessInput,
): NextAction[] {
  const actions: NextAction[] = []

  // 7-day: the most urgent unblockers.
  const worstSkill = [...(english.skillRows ?? [])]
    .filter((r) => r.current !== null && !r.meetsTarget)
    .sort((a, b) => b.gap - a.gap)[0]
  if (worstSkill) {
    actions.push({
      horizon: '7-day',
      owner: 'student',
      domain: 'english',
      text: `Do two focused ${SKILL_LABEL[worstSkill.skill].toLowerCase()} practice sets this week to start closing the +${round1(
        worstSkill.gap,
      )} gap.`,
    })
  }
  if ((english.skillRows ?? []).some((r) => r.current === null)) {
    actions.push({
      horizon: '7-day',
      owner: 'student',
      domain: 'english',
      text: 'Complete the diagnostic for any skill not yet assessed so your readiness score is accurate.',
    })
  }
  if (visa.fundsEvidence !== 'ready') {
    actions.push({
      horizon: '7-day',
      owner: 'parent',
      domain: 'visa',
      text: 'Confirm where the maintenance funds will sit and start the 28-day holding period.',
    })
  }
  if (application.refereeStatus === 'none') {
    actions.push({
      horizon: '7-day',
      owner: 'student',
      domain: 'application',
      text: 'Ask a teacher or counsellor to be your UCAS referee.',
    })
  }

  // 30-day: build the application + book what needs lead time.
  if (!application.q1Drafted || !application.q2Drafted || !application.q3Drafted) {
    actions.push({
      horizon: '30-day',
      owner: 'student',
      domain: 'application',
      text: 'Draft all three UCAS personal-statement answers and run the coach on each.',
    })
  } else if (!application.psScores) {
    actions.push({
      horizon: '30-day',
      owner: 'student',
      domain: 'application',
      text: 'Run the Personal-Statement Coach to get your drafts scored and improved.',
    })
  }
  if (application.courseClarity !== 'decided' || !application.shortlistDone) {
    actions.push({
      horizon: '30-day',
      owner: 'counsellor',
      domain: 'application',
      text: 'Finalise the five UCAS course choices with your counsellor.',
    })
  }
  if (visa.casStage === 'not_started' || visa.casStage === 'applying') {
    actions.push({
      horizon: '30-day',
      owner: 'student',
      domain: 'visa',
      text: 'Submit university applications so you can progress to an offer and CAS.',
    })
  }
  if (academic.academicWriting !== 'confident') {
    actions.push({
      horizon: '30-day',
      owner: 'student',
      domain: 'academic',
      text: 'Work through academic-writing basics (referencing, paraphrasing, structure).',
    })
  }

  // 60-day: pre-departure + the final visa/transition steps.
  if (visa.casStage !== 'received') {
    actions.push({
      horizon: '60-day',
      owner: 'student',
      domain: 'visa',
      text: 'Once you hold an offer, confirm your CAS and prepare your visa application.',
    })
  }
  if (academic.accommodation !== 'sorted') {
    actions.push({
      horizon: '60-day',
      owner: 'parent',
      domain: 'academic',
      text: 'Secure accommodation (university halls or a private let) before term starts.',
    })
  }
  if (academic.budgeting !== 'confident') {
    actions.push({
      horizon: '60-day',
      owner: 'student',
      domain: 'academic',
      text: 'Build a monthly UK living budget and a plan for opening a UK bank account.',
    })
  }
  if (academic.contactHours === 'unsure') {
    actions.push({
      horizon: '60-day',
      owner: 'student',
      domain: 'academic',
      text: 'Read your course handbook to understand contact hours and independent study load.',
    })
  }

  return actions
}

// ─── Top-level compute ──────────────────────────────────────────────────────

export function computeReadiness(
  english: EnglishReadinessInput,
  inputs: ReadinessInputs,
): ReadinessReport {
  const englishResult = scoreEnglish(english)
  const applicationResult = scoreApplication(inputs.application)
  const visaResult = scoreVisaFinance(inputs.visa)
  const academicResult = scoreAcademic(inputs.academic)

  const domains = [englishResult, applicationResult, visaResult, academicResult]
  const overall = round1(domains.reduce((sum, d) => sum + d.earned, 0))

  return {
    overall,
    colour: readinessColour(overall),
    domains,
    redFlags: collectRedFlags(
      englishResult,
      inputs.application,
      applicationResult,
      inputs.visa,
      inputs.academic,
    ),
    actions: buildActions(englishResult, inputs.application, inputs.visa, inputs.academic),
    generatedAt: new Date().toISOString(),
  }
}

// ─── Sensible defaults for a brand-new report ───────────────────────────────

export function defaultReadinessInputs(target: Band = DEFAULT_READINESS_TARGET): ReadinessInputs {
  return {
    target,
    application: {
      courseClarity: 'undecided',
      shortlistDone: false,
      refereeStatus: 'none',
      transcriptStatus: 'none',
      q1Drafted: false,
      q2Drafted: false,
      q3Drafted: false,
    },
    visa: {
      passportValid: 'no',
      fundsEvidence: 'none',
      sponsorOrScholarship: 'unknown',
      casStage: 'not_started',
      tbTest: 'na',
      atas: 'na',
    },
    academic: {
      academicWriting: 'some',
      budgeting: 'some',
      accommodation: 'not_started',
      contactHours: 'unsure',
    },
  }
}
