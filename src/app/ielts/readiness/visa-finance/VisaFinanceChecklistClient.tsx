'use client'

// ─── IELTS-10 Visa & Finance checklist - interactive client ──────────────────
// A UK Student-route visa + finance readiness checklist. It is fully client-side
// and localStorage-first: on mount it loads the saved Visa & Finance answers
// from the SAME readiness store the Candidate Readiness Report reads, lets the
// learner work through each item, computes a traffic-light "can apply / not yet
// / blocked" status, and on every change persists a VisaFinanceReadinessInput
// back to the store via setVisaSlice(). That means the Readiness Report's Visa &
// Finance domain (weight 20) upgrades from self-report to tool-driven the moment
// the learner uses this tool - no extra wiring.
//
// The maintenance-funds calculator uses the current published figures:
//   • London:        £1,529 / month, up to 9 months
//   • Outside London: £1,171 / month, up to 9 months
// plus the 28-consecutive-days / statement-no-older-than-31-days rules.
//
// Entitlement: the server page passes `hasAccess`. Free users see a tasteful
// teaser (the checklist outline, locked) with a CTA to /pricing#ielts.
//
// This is PREPARATION guidance only - explicitly not immigration advice. Every
// learner is pointed to gov.uk for the authoritative, current rules.
// ────────────────────────────────────────────────────────────────────────────

import { useCallback, useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  Banknote,
  CalendarClock,
  CheckCircle2,
  FileCheck2,
  Lock,
  Plane,
  ShieldAlert,
  Sparkles,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useT } from '@/lib/i18n/use-t'
import { cn } from '@/lib/utils'
import { PRICING } from '@/constants/pricing'
import {
  defaultReadinessInputs,
  type TriState,
  type VisaFinanceReadinessInput,
} from '@/lib/ielts/readiness'
import { getReadinessInputs, setVisaSlice } from '@/lib/ielts/readiness-store'

// ─── Maintenance-funds figures (current UK Student route) ───────────────────
// Monthly maintenance you must evidence, capped at 9 months for a course of 9+
// months. Source: gov.uk Student visa money rules (figures shown as guidance).
const MAINTENANCE = {
  london: 1529,
  outsideLondon: 1171,
  maxMonths: 9,
} as const

type Location = 'london' | 'outsideLondon'

// ─── Overall status traffic light ───────────────────────────────────────────
type ApplyStatus = 'ready' | 'not_yet' | 'blocked'

const STATUS_META: Record<
  ApplyStatus,
  { label: string; blurb: string; text: string; bg: string; dot: string }
> = {
  ready: {
    label: 'Ready to apply',
    blurb:
      'Your core visa and finance items are in place. Confirm your CAS dates, then book your visa appointment.',
    text: 'text-emerald-600 dark:text-emerald-400',
    bg: 'bg-emerald-500/10 border-emerald-500/30',
    dot: 'bg-emerald-500',
  },
  not_yet: {
    label: 'Not yet — items outstanding',
    blurb:
      'You are on track but a few items still need finishing before you can submit a strong visa application.',
    text: 'text-amber-600 dark:text-amber-400',
    bg: 'bg-amber-500/10 border-amber-500/30',
    dot: 'bg-amber-500',
  },
  blocked: {
    label: 'Blocked — must resolve first',
    blurb:
      'One or more items would block a visa application right now. Resolve the blocking items below before applying.',
    text: 'text-rose-600 dark:text-rose-400',
    bg: 'bg-rose-500/10 border-rose-500/30',
    dot: 'bg-rose-500',
  },
}

// ─── Pure status logic from the structured answers ──────────────────────────
// Hard blockers (no funds evidence, invalid passport, an outstanding mandatory
// TB/ATAS) → blocked. Anything still in-progress → not_yet. All clear → ready.
interface ChecklistState extends VisaFinanceReadinessInput {
  fundsHeld28Days: TriState
  statementFresh: TriState
}

function computeStatus(s: ChecklistState): {
  status: ApplyStatus
  blocking: string[]
  outstanding: string[]
} {
  const blocking: string[] = []
  const outstanding: string[] = []

  // Passport
  if (s.passportValid === 'no')
    blocking.push('Passport is not valid — you cannot apply without one.')
  else if (s.passportValid === 'expiring')
    outstanding.push(
      'Passport is expiring / being renewed — make sure it covers your whole course.',
    )

  // Funds evidence (the single most common refusal cause)
  if (s.fundsEvidence === 'none')
    blocking.push('No maintenance-funds evidence yet — this is the top visa-refusal cause.')
  else if (s.fundsEvidence === 'gathering')
    outstanding.push(
      'Still gathering funds evidence — finish before the 28-day clock can be relied on.',
    )

  // 28-day hold + statement freshness only matter once funds exist
  if (s.fundsEvidence !== 'none') {
    if (s.fundsHeld28Days === 'no')
      blocking.push(
        'Funds have not been held for 28 consecutive days — the balance must not dip below the required amount.',
      )
    else if (s.fundsHeld28Days === 'na')
      outstanding.push('Confirm your funds will be held for 28 consecutive days before you apply.')
    if (s.statementFresh === 'no')
      blocking.push(
        'Your closing statement is older than 31 days — get a fresh statement dated within 31 days of applying.',
      )
    else if (s.statementFresh === 'na')
      outstanding.push(
        'Make sure your bank statement is dated no more than 31 days before you apply.',
      )
  }

  // CAS
  if (s.casStage === 'not_started')
    blocking.push(
      'No university application started — you need an offer and a CAS before you can apply for the visa.',
    )
  else if (s.casStage === 'applying' || s.casStage === 'offer_holder')
    outstanding.push(
      'CAS not yet received — you cannot submit the visa application until your university issues it.',
    )

  // Sponsor / scholarship
  if (s.sponsorOrScholarship === 'unknown')
    outstanding.push(
      'Funding source unconfirmed — confirm whether you are self-funded, sponsored or applying for a scholarship.',
    )
  else if (s.sponsorOrScholarship === 'applying')
    outstanding.push(
      'Scholarship / sponsor application pending — have a self-funded backup ready in case it is unsuccessful.',
    )

  // TB test (mandatory only for certain countries; "no" = outstanding required test)
  if (s.tbTest === 'no')
    blocking.push(
      'TB test outstanding — if required for your country it must be done before you apply.',
    )

  // ATAS (mandatory only for certain courses; "no" = outstanding required clearance)
  if (s.atas === 'no')
    blocking.push(
      'ATAS clearance outstanding — if required for your course it must be granted before your CAS is used.',
    )

  const status: ApplyStatus =
    blocking.length > 0 ? 'blocked' : outstanding.length > 0 ? 'not_yet' : 'ready'
  return { status, blocking, outstanding }
}

// ─── English-requirement guidance vs the learner's target band ──────────────
function englishGuidance(): string {
  return 'Degree-level study generally needs CEFR B2, which usually maps to around IELTS 6.0–6.5 overall (with minimum component scores set by each university). Check your offer letter for the exact band — your English readiness is scored separately in your Readiness Report.'
}

export function VisaFinanceChecklistClient({ hasAccess }: { hasAccess: boolean }) {
  const tBase = useT()
  const t = useCallback(
    (key: string): string => {
      const v = tBase(key)
      return v.startsWith('[[') ? '' : v
    },
    [tBase],
  )

  const [mounted, setMounted] = useState(false)
  const [location, setLocation] = useState<Location>('outsideLondon')
  const [months, setMonths] = useState<number>(9)
  const [state, setState] = useState<ChecklistState>(() => ({
    ...defaultReadinessInputs().visa,
    fundsHeld28Days: 'na',
    statementFresh: 'na',
  }))

  // On mount: hydrate from the shared readiness store so this tool and the
  // report stay in sync (the report writes the same `visa` slice).
  useEffect(() => {
    const saved = getReadinessInputs()
    setState((prev) => ({ ...prev, ...saved.visa }))
    setMounted(true)
  }, [])

  // Persist the structured visa slice to the SHARED store on every change after
  // mount, so the Candidate Readiness Report picks it up automatically. The two
  // extra "evidence" answers are tool-local refinements that map onto
  // `fundsEvidence` (kept 'ready' only when both checks pass).
  useEffect(() => {
    if (!mounted || !hasAccess) return
    const fundsEvidence: VisaFinanceReadinessInput['fundsEvidence'] =
      state.fundsEvidence === 'ready' &&
      (state.fundsHeld28Days === 'no' || state.statementFresh === 'no')
        ? 'gathering'
        : state.fundsEvidence
    const slice: VisaFinanceReadinessInput = {
      passportValid: state.passportValid,
      fundsEvidence,
      sponsorOrScholarship: state.sponsorOrScholarship,
      casStage: state.casStage,
      tbTest: state.tbTest,
      atas: state.atas,
    }
    setVisaSlice(slice)
  }, [state, mounted, hasAccess])

  const requiredFunds = useMemo(() => {
    const perMonth = location === 'london' ? MAINTENANCE.london : MAINTENANCE.outsideLondon
    const cappedMonths = Math.min(Math.max(months, 1), MAINTENANCE.maxMonths)
    return perMonth * cappedMonths
  }, [location, months])

  const { status, blocking, outstanding } = useMemo(() => computeStatus(state), [state])

  const patch = useCallback((next: Partial<ChecklistState>) => {
    setState((prev) => ({ ...prev, ...next }))
  }, [])

  // ── Pre-hydration skeleton ────────────────────────────────────────────────
  if (!mounted) {
    return (
      <main id="main-content" className="min-h-screen bg-background">
        <Header t={t} />
        <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
          <div className="h-44 animate-pulse rounded-2xl border border-border bg-card" />
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-32 animate-pulse rounded-2xl border border-border bg-card"
              />
            ))}
          </div>
        </div>
      </main>
    )
  }

  const sm = STATUS_META[status]

  return (
    <main id="main-content" className="min-h-screen bg-background">
      <Header t={t} />

      <div className="mx-auto max-w-4xl space-y-8 px-4 py-8 pb-20 sm:px-6">
        {/* Disclaimer */}
        <div className="flex items-start gap-3 rounded-2xl border border-amber-500/30 bg-amber-500/[0.06] p-4">
          <ShieldAlert className="mt-0.5 size-5 shrink-0 text-amber-500" aria-hidden />
          <p className="text-sm leading-relaxed text-foreground">
            {t('ielts.visa.disclaimer') ||
              'This is preparation guidance only, not immigration advice, and not affiliated with UK Visas & Immigration. Rules and amounts change — always check the current requirements on '}
            <a
              href="https://www.gov.uk/student-visa"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-amber-700 underline underline-offset-2 dark:text-amber-300"
            >
              gov.uk/student-visa
            </a>
            .
          </p>
        </div>

        {!hasAccess ? (
          <LockedTeaser t={t} requiredFunds={requiredFunds} />
        ) : (
          <>
            {/* ── Status traffic light ─────────────────────────────────────── */}
            <section className={cn('rounded-2xl border p-6 sm:p-8', sm.bg)}>
              <p className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
                {t('ielts.visa.status.eyebrow') || 'Visa & finance readiness'}
              </p>
              <div className="mt-3 flex items-center gap-3">
                <span className={cn('h-3.5 w-3.5 rounded-full', sm.dot)} aria-hidden />
                <h2 className={cn('font-serif text-2xl font-semibold sm:text-3xl', sm.text)}>
                  {sm.label}
                </h2>
              </div>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                {sm.blurb}
              </p>

              {(blocking.length > 0 || outstanding.length > 0) && (
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {blocking.length > 0 && (
                    <div className="rounded-xl border border-rose-500/30 bg-rose-500/[0.05] p-4">
                      <p className="mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-rose-600 dark:text-rose-400">
                        <AlertTriangle className="h-3.5 w-3.5" aria-hidden />
                        {t('ielts.visa.status.blocking') || 'Blocking items'}
                      </p>
                      <ul className="space-y-1.5">
                        {blocking.map((b, i) => (
                          <li key={i} className="text-xs leading-relaxed text-foreground">
                            • {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {outstanding.length > 0 && (
                    <div className="rounded-xl border border-amber-500/30 bg-amber-500/[0.05] p-4">
                      <p className="mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-amber-600 dark:text-amber-400">
                        <CalendarClock className="h-3.5 w-3.5" aria-hidden />
                        {t('ielts.visa.status.outstanding') || 'Still to do'}
                      </p>
                      <ul className="space-y-1.5">
                        {outstanding.map((o, i) => (
                          <li key={i} className="text-xs leading-relaxed text-foreground">
                            • {o}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}

              <p className="mt-5 flex items-center gap-2 text-xs text-muted-foreground">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" aria-hidden />
                {t('ielts.visa.status.synced') ||
                  'Your answers feed the Visa & finance domain of your UK Candidate Readiness Report automatically.'}
              </p>
            </section>

            {/* ── Maintenance-funds calculator ─────────────────────────────── */}
            <section className="rounded-2xl border border-border bg-card p-5 shadow-soft sm:p-6">
              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500">
                  <Banknote className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <h2 className="font-serif text-lg font-semibold text-foreground">
                    {t('ielts.visa.funds.title') || 'Maintenance funds you must evidence'}
                  </h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {t('ielts.visa.funds.body') ||
                      'Pick where you will study and your course length (capped at 9 months) to see the total you must hold.'}
                  </p>
                </div>
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block text-xs font-medium text-foreground">
                    {t('ielts.visa.funds.location') || 'Where will you study?'}
                  </span>
                  <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value as Location)}
                    className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                  >
                    <option value="london">
                      {t('ielts.visa.funds.london') || 'In London'} (£{MAINTENANCE.london}/month)
                    </option>
                    <option value="outsideLondon">
                      {t('ielts.visa.funds.outside') || 'Outside London'} (£
                      {MAINTENANCE.outsideLondon}/month)
                    </option>
                  </select>
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-xs font-medium text-foreground">
                    {t('ielts.visa.funds.months') || 'Months to evidence (max 9)'}
                  </span>
                  <select
                    value={months}
                    onChange={(e) => setMonths(Number(e.target.value))}
                    className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((m) => (
                      <option key={m} value={m}>
                        {m} {m === 1 ? 'month' : 'months'}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <div className="mt-5 rounded-xl border border-emerald-500/25 bg-emerald-500/[0.06] p-4 text-center">
                <p className="text-xs uppercase tracking-wide text-muted-foreground">
                  {t('ielts.visa.funds.total') || 'Maintenance funds to evidence'}
                </p>
                <p className="mt-1 font-serif text-3xl font-semibold text-emerald-600 dark:text-emerald-400">
                  £{requiredFunds.toLocaleString('en-GB')}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {(
                    t('ielts.visa.funds.formula') ||
                    '£{rate}/month × {months} months (course-fee balance is in addition).'
                  )
                    .replace(
                      '{rate}',
                      String(
                        location === 'london' ? MAINTENANCE.london : MAINTENANCE.outsideLondon,
                      ),
                    )
                    .replace(
                      '{months}',
                      String(Math.min(Math.max(months, 1), MAINTENANCE.maxMonths)),
                    )}
                </p>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <TriField
                  label={t('ielts.visa.f.fundsHeld') || 'Funds held 28 consecutive days?'}
                  hint={
                    t('ielts.visa.f.fundsHeld_hint') ||
                    'Balance must not dip below the required amount at any point.'
                  }
                  value={state.fundsHeld28Days}
                  onChange={(v) => patch({ fundsHeld28Days: v })}
                  yesLabel={t('ielts.visa.tri.held') || 'Yes — held 28 days'}
                  noLabel={t('ielts.visa.tri.notheld') || 'Not yet'}
                  naLabel={t('ielts.visa.tri.unsure') || 'Unsure / planning'}
                />
                <TriField
                  label={t('ielts.visa.f.statementFresh') || 'Statement dated within 31 days?'}
                  hint={
                    t('ielts.visa.f.statementFresh_hint') ||
                    'Your closing statement must be no older than 31 days when you apply.'
                  }
                  value={state.statementFresh}
                  onChange={(v) => patch({ statementFresh: v })}
                  yesLabel={t('ielts.visa.tri.fresh') || 'Yes — within 31 days'}
                  noLabel={t('ielts.visa.tri.stale') || 'No / too old'}
                  naLabel={t('ielts.visa.tri.unsure') || 'Unsure / planning'}
                />
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                <SelectField
                  label={t('ielts.visa.f.fundsEvidence') || 'Funds evidence ready?'}
                  value={state.fundsEvidence}
                  onChange={(v) => patch({ fundsEvidence: v as ChecklistState['fundsEvidence'] })}
                  options={[
                    { value: 'ready', label: t('ielts.visa.opt.funds.ready') || 'Ready' },
                    {
                      value: 'gathering',
                      label: t('ielts.visa.opt.funds.gathering') || 'Gathering',
                    },
                    { value: 'none', label: t('ielts.visa.opt.funds.none') || 'Not started' },
                  ]}
                />
                <SelectField
                  label={t('ielts.visa.f.sponsor') || 'Sponsor / scholarship'}
                  value={state.sponsorOrScholarship}
                  onChange={(v) =>
                    patch({ sponsorOrScholarship: v as ChecklistState['sponsorOrScholarship'] })
                  }
                  options={[
                    {
                      value: 'self_funded',
                      label: t('ielts.visa.opt.sponsor.self') || 'Self-funded',
                    },
                    {
                      value: 'sponsor_confirmed',
                      label: t('ielts.visa.opt.sponsor.confirmed') || 'Sponsor confirmed',
                    },
                    {
                      value: 'applying',
                      label: t('ielts.visa.opt.sponsor.applying') || 'Applying',
                    },
                    {
                      value: 'unknown',
                      label: t('ielts.visa.opt.sponsor.unknown') || 'Not sure yet',
                    },
                  ]}
                />
                <div className="rounded-lg border border-dashed border-border bg-muted/20 p-3">
                  <p className="text-[11px] leading-relaxed text-muted-foreground">
                    {t('ielts.visa.funds.note') ||
                      'Official-financial-sponsor and Student-loan cases follow different evidence rules — check gov.uk.'}
                  </p>
                </div>
              </div>
            </section>

            {/* ── Documents & stages ───────────────────────────────────────── */}
            <section className="rounded-2xl border border-border bg-card p-5 shadow-soft sm:p-6">
              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-500/10 text-sky-500">
                  <FileCheck2 className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <h2 className="font-serif text-lg font-semibold text-foreground">
                    {t('ielts.visa.docs.title') || 'Documents & application stage'}
                  </h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {t('ielts.visa.docs.body') ||
                      'Work through each item. TB test and ATAS only apply to some countries / courses — mark “Not applicable” if so.'}
                  </p>
                </div>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <SelectField
                  label={t('ielts.visa.f.passport') || 'Passport valid for the whole course?'}
                  value={state.passportValid}
                  onChange={(v) => patch({ passportValid: v as ChecklistState['passportValid'] })}
                  options={[
                    { value: 'yes', label: t('ielts.visa.opt.passport.yes') || 'Valid' },
                    {
                      value: 'expiring',
                      label: t('ielts.visa.opt.passport.expiring') || 'Expiring / renewing',
                    },
                    { value: 'no', label: t('ielts.visa.opt.passport.no') || 'Not valid yet' },
                  ]}
                />
                <SelectField
                  label={t('ielts.visa.f.cas') || 'CAS stage'}
                  value={state.casStage}
                  onChange={(v) => patch({ casStage: v as ChecklistState['casStage'] })}
                  options={[
                    {
                      value: 'received',
                      label: t('ielts.visa.opt.cas.received') || 'CAS received',
                    },
                    {
                      value: 'offer_holder',
                      label: t('ielts.visa.opt.cas.requested') || 'Offer holder / requested',
                    },
                    {
                      value: 'applying',
                      label: t('ielts.visa.opt.cas.applying') || 'Applying / awaiting offer',
                    },
                    {
                      value: 'not_started',
                      label: t('ielts.visa.opt.cas.notstarted') || 'Not started',
                    },
                  ]}
                />
                <SelectField
                  label={t('ielts.visa.f.tb') || 'TB test (if applicable for your country)'}
                  value={state.tbTest}
                  onChange={(v) => patch({ tbTest: v as TriState })}
                  options={[
                    { value: 'na', label: t('ielts.visa.opt.na') || 'Not applicable' },
                    { value: 'yes', label: t('ielts.visa.opt.tb.yes') || 'Done' },
                    { value: 'no', label: t('ielts.visa.opt.tb.no') || 'Required — outstanding' },
                  ]}
                />
                <SelectField
                  label={t('ielts.visa.f.atas') || 'ATAS (if applicable for your course)'}
                  value={state.atas}
                  onChange={(v) => patch({ atas: v as TriState })}
                  options={[
                    { value: 'na', label: t('ielts.visa.opt.na') || 'Not applicable' },
                    { value: 'yes', label: t('ielts.visa.opt.atas.yes') || 'Granted' },
                    { value: 'no', label: t('ielts.visa.opt.atas.no') || 'Required — outstanding' },
                  ]}
                />
              </div>
            </section>

            {/* ── English requirement guidance ─────────────────────────────── */}
            <section className="rounded-2xl border border-primary/20 bg-primary/[0.04] p-5 sm:p-6">
              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <BadgeCheck className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <h2 className="font-serif text-lg font-semibold text-foreground">
                    {t('ielts.visa.english.title') || 'English requirement (CEFR B2)'}
                  </h2>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {t('ielts.visa.english.body') || englishGuidance()}
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-3"
                    render={<Link href="/ielts/readiness" />}
                  >
                    {t('ielts.visa.english.cta') || 'See my English readiness'}
                    <ArrowRight className="size-3.5" />
                  </Button>
                </div>
              </div>
            </section>

            {/* ── Footer nav ───────────────────────────────────────────────── */}
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-between">
              <Button variant="outline" render={<Link href="/ielts/readiness" />}>
                <ArrowLeft className="size-4" />
                {t('ielts.visa.cta.report') || 'Back to Readiness Report'}
              </Button>
              <Button render={<Link href="/ielts/readiness/transition" />}>
                {t('ielts.visa.cta.transition') || 'Academic-transition modules'}
                <ArrowRight className="size-4" />
              </Button>
            </div>
          </>
        )}
      </div>
    </main>
  )
}

// ─── Header ─────────────────────────────────────────────────────────────────

function Header({ t }: { t: (key: string) => string }) {
  return (
    <section className="border-b border-border bg-card">
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
        <Link
          href="/ielts/readiness"
          className="mb-4 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          {t('ielts.readiness.header.title') || 'UK Candidate Readiness Report'}
        </Link>
        <div className="flex items-center gap-3">
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10">
            <Plane className="h-6 w-6 text-emerald-600 dark:text-emerald-400" aria-hidden />
          </span>
          <div>
            <h1 className="font-serif text-2xl font-medium tracking-tight sm:text-3xl">
              {t('ielts.visa.header.title') || 'Visa & finance checklist'}
            </h1>
            <p className="text-sm text-muted-foreground">
              {t('ielts.visa.header.subtitle') ||
                'Work through the UK Student-route money and document rules to get a clear can-apply status.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Locked teaser (free users) ─────────────────────────────────────────────

function LockedTeaser({ t, requiredFunds }: { t: (key: string) => string; requiredFunds: number }) {
  return (
    <section className="overflow-hidden rounded-2xl border border-sky-500/30 bg-sky-500/[0.06] p-6 text-center sm:p-10">
      <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/10">
        <Sparkles className="h-6 w-6 text-sky-500" aria-hidden />
      </span>
      <h2 className="mt-4 font-serif text-2xl font-semibold tracking-tight text-foreground">
        {t('ielts.visa.locked.title') || 'Unlock the Visa & Finance checklist'}
      </h2>
      <p className="mx-auto mt-2 max-w-xl leading-relaxed text-muted-foreground">
        {t('ielts.visa.locked.body') ||
          'Work through the UK Student-route money and document rules — maintenance funds, the 28-day rule, CAS, TB test and ATAS — and get a clear can-apply / not-yet / blocked status that feeds your Readiness Report. Part of the IELTS plan.'}
      </p>

      {/* Teaser: the funds figure is free, the checklist is locked */}
      <div className="mx-auto mt-6 max-w-sm rounded-xl border border-emerald-500/25 bg-emerald-500/[0.06] p-4">
        <p className="text-xs uppercase tracking-wide text-muted-foreground">
          {t('ielts.visa.locked.example') || 'Example: outside London, 9 months'}
        </p>
        <p className="mt-1 font-serif text-2xl font-semibold text-emerald-600 dark:text-emerald-400">
          £{(1171 * 9).toLocaleString('en-GB')}
        </p>
        <p className="mt-1 text-[11px] text-muted-foreground">
          {t('ielts.visa.locked.example_note') || 'Unlock to calculate yours and track every item.'}
        </p>
      </div>

      <div className="mx-auto mt-6 grid max-w-md gap-2 text-left">
        {[
          t('ielts.visa.locked.item1') || 'Maintenance-funds calculator (London vs outside)',
          t('ielts.visa.locked.item2') || '28-day hold + 31-day statement checks',
          t('ielts.visa.locked.item3') || 'CAS, passport, TB test & ATAS tracking',
        ].map((line) => (
          <div
            key={line}
            className="flex items-center gap-2 rounded-lg border border-dashed border-border bg-muted/30 px-3 py-2"
          >
            <Lock className="h-3.5 w-3.5 shrink-0 text-muted-foreground" aria-hidden />
            <span className="text-xs text-muted-foreground">{line}</span>
          </div>
        ))}
      </div>

      <Button
        size="lg"
        className="mt-6 h-12 gap-2 bg-sky-600 px-7 text-base text-white hover:bg-sky-700"
        render={<Link href="/pricing#ielts" />}
      >
        {(t('ielts.readiness.locked.cta') || 'See IELTS plans — {currency}{price}/month')
          .replace('{currency}', PRICING.CURRENCY)
          .replace('{price}', String(PRICING.IELTS_MONTHLY))}
        <ArrowRight className="h-4 w-4" />
      </Button>
    </section>
  )
}

// ─── Field primitives ───────────────────────────────────────────────────────

function SelectField({
  label,
  value,
  onChange,
  options,
}: {
  label: string
  value: string
  onChange: (v: string) => void
  options: { value: string; label: string }[]
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium text-foreground">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </label>
  )
}

function TriField({
  label,
  hint,
  value,
  onChange,
  yesLabel,
  noLabel,
  naLabel,
}: {
  label: string
  hint: string
  value: TriState
  onChange: (v: TriState) => void
  yesLabel: string
  noLabel: string
  naLabel: string
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium text-foreground">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as TriState)}
        className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
      >
        <option value="yes">{yesLabel}</option>
        <option value="no">{noLabel}</option>
        <option value="na">{naLabel}</option>
      </select>
      {hint ? (
        <span className="mt-1 block text-[11px] leading-relaxed text-muted-foreground">{hint}</span>
      ) : null}
    </label>
  )
}
