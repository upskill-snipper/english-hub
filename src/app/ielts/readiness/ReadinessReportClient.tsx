'use client'

// ─── UK Candidate Readiness Report - interactive client (IELTS-8) ────────────
// The headline £39 IELTS-plan feature. It is fully client-side and localStorage-
// first: on mount it recomputes the ENGLISH domain from the latest diagnostic +
// practice profile, and loads the SAVED self-report (target band + visa/finance,
// academic-transition + application questionnaire) so a returning user keeps
// their report. Editing any answer recomputes the score live and re-persists.
//
// Output: an overall traffic-light score, four per-domain cards (sub-score, key
// facts, recommendation, and for English a per-skill vs target table), a red-
// flags list, and a 7/30/60-day action plan grouped by owner.
//
// PDF export = window.print() over a print-optimised layout (see
// readiness-print.css). ZERO new dependencies.
//
// Entitlement: the server page passes `hasAccess`. Free users see a tasteful
// teaser (the overall score blurred + the English summary) with a CTA to
// /pricing#ielts; the full interactive report renders only when entitled.
// ────────────────────────────────────────────────────────────────────────────

import { useCallback, useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import './readiness-print.css'
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Download,
  FileText,
  Flag,
  GraduationCap,
  Lock,
  RefreshCw,
  Sparkles,
  Target,
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useT } from '@/lib/i18n/use-t'
import { cn } from '@/lib/utils'
import { PRICING } from '@/constants/pricing'
import { buildIeltsProfile, getDiagnostic, type DiagnosticResult } from '@/lib/ielts/store'
import { bandLabel } from '@/lib/ielts/bands'
import {
  IELTS_SKILLS,
  SKILL_META,
  type Band,
  type IeltsProfile,
  type IeltsSkill,
} from '@/lib/ielts/types'
import {
  computeReadiness,
  defaultReadinessInputs,
  READINESS_TARGET_BANDS,
  type EnglishReadinessInput,
  type ReadinessColour,
  type ReadinessInputs,
  type ReadinessReport,
  type ActionHorizon,
  type ActionOwner,
} from '@/lib/ielts/readiness'
import { getReadinessInputs, saveReadinessInputs } from '@/lib/ielts/readiness-store'

// ─── Traffic-light styling ──────────────────────────────────────────────────

const COLOUR_CLASS: Record<
  ReadinessColour,
  { text: string; bg: string; ring: string; dot: string; label: string }
> = {
  green: {
    text: 'text-emerald-600 dark:text-emerald-400',
    bg: 'bg-emerald-500/10 border-emerald-500/30',
    ring: 'border-emerald-500/40',
    dot: 'bg-emerald-500',
    label: 'On track',
  },
  amber: {
    text: 'text-amber-600 dark:text-amber-400',
    bg: 'bg-amber-500/10 border-amber-500/30',
    ring: 'border-amber-500/40',
    dot: 'bg-amber-500',
    label: 'Some gaps',
  },
  red: {
    text: 'text-rose-600 dark:text-rose-400',
    bg: 'bg-rose-500/10 border-rose-500/30',
    ring: 'border-rose-500/40',
    dot: 'bg-rose-500',
    label: 'Needs work',
  },
}

const OWNER_LABEL: Record<ActionOwner, string> = {
  student: 'Student',
  parent: 'Parent',
  counsellor: 'Counsellor',
}

const HORIZONS: { id: ActionHorizon; label: string }[] = [
  { id: '7-day', label: 'Next 7 days' },
  { id: '30-day', label: 'Next 30 days' },
  { id: '60-day', label: 'Next 60 days' },
]

// ─── Resolve current band per skill (practice wins over diagnostic) ─────────
// Mirrors plan/page.tsx resolveCurrent so the English domain reads the same
// "live current band" the study plan does.
function resolveEnglishInput(
  target: Band,
  profile: IeltsProfile | null,
  diagnostic: DiagnosticResult | null,
): EnglishReadinessInput {
  const perSkill = {} as Record<IeltsSkill, Band | null>
  for (const skill of IELTS_SKILLS) {
    const practice = profile?.skills[skill]?.band ?? null
    const placement = diagnostic?.estimatedBands[skill] ?? null
    perSkill[skill] = practice !== null ? practice : placement
  }
  const overall = profile?.overallBand ?? diagnostic?.overall ?? null
  return { target, overall, perSkill }
}

export function ReadinessReportClient({ hasAccess }: { hasAccess: boolean }) {
  const tBase = useT()
  const t = useCallback(
    (key: string): string => {
      const v = tBase(key)
      return v.startsWith('[[') ? '' : v
    },
    [tBase],
  )

  const [mounted, setMounted] = useState(false)
  const [profile, setProfile] = useState<IeltsProfile | null>(null)
  const [diagnostic, setDiagnostic] = useState<DiagnosticResult | null>(null)
  const [inputs, setInputs] = useState<ReadinessInputs>(() => defaultReadinessInputs())

  // On mount: recompute English from the live profile, load saved self-report.
  useEffect(() => {
    setProfile(buildIeltsProfile())
    setDiagnostic(getDiagnostic())
    setInputs(getReadinessInputs())
    setMounted(true)
  }, [])

  // While the report is on-screen, mark the body so global print CSS can hide
  // app chrome. Cleaned up on unmount.
  useEffect(() => {
    document.body.setAttribute('data-readiness-print', 'true')
    return () => document.body.removeAttribute('data-readiness-print')
  }, [])

  const englishInput = useMemo(
    () => resolveEnglishInput(inputs.target, profile, diagnostic),
    [inputs.target, profile, diagnostic],
  )

  const report: ReadinessReport = useMemo(
    () => computeReadiness(englishInput, inputs),
    [englishInput, inputs],
  )

  // Persist self-report inputs whenever they change (after mount).
  useEffect(() => {
    if (mounted) saveReadinessInputs(inputs)
  }, [inputs, mounted])

  const patch = useCallback((next: Partial<ReadinessInputs>) => {
    setInputs((prev) => ({ ...prev, ...next }))
  }, [])

  const handlePrint = useCallback(() => {
    window.print()
  }, [])

  // ── Pre-hydration skeleton ────────────────────────────────────────────────
  if (!mounted) {
    return (
      <main id="main-content" className="min-h-screen bg-background">
        <ReadinessHeader t={t} onPrint={handlePrint} showPrint={false} />
        <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
          <div className="h-44 animate-pulse rounded-2xl border border-border bg-card" />
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-40 animate-pulse rounded-2xl border border-border bg-card"
              />
            ))}
          </div>
        </div>
      </main>
    )
  }

  const overallColour = COLOUR_CLASS[report.colour]

  return (
    <main id="main-content" className="min-h-screen bg-background">
      <ReadinessHeader t={t} onPrint={handlePrint} showPrint={hasAccess} />

      <div className="readiness-print-root mx-auto max-w-5xl space-y-8 px-4 py-8 sm:px-6">
        {/* Print-only document header (title + date). Hidden on screen. */}
        <div className="readiness-print-only">
          <h1 style={{ fontSize: 22, fontWeight: 700, marginBottom: 4 }}>
            UK Candidate Readiness Report
          </h1>
          <p style={{ fontSize: 12, color: '#444' }}>
            Generated {new Date(report.generatedAt).toLocaleDateString('en-GB')} · The English Hub ·
            IELTS / UK-study preparation
          </p>
        </div>

        {/* ── Overall score ─────────────────────────────────────────── */}
        <section
          className={cn(
            'readiness-card readiness-avoid-break rounded-2xl border p-8 text-center sm:p-10',
            overallColour.bg,
          )}
        >
          <p className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
            {t('ielts.readiness.overall.eyebrow') || 'Overall UK readiness'}
          </p>
          <div className="relative mt-3 inline-flex flex-col items-center">
            <span
              className={cn(
                'font-serif text-6xl font-medium sm:text-7xl',
                overallColour.text,
                !hasAccess && 'select-none blur-md',
              )}
              aria-hidden={!hasAccess}
            >
              {Math.round(report.overall)}
              <span className="text-3xl text-muted-foreground">/100</span>
            </span>
          </div>
          <div className="mt-4 flex items-center justify-center gap-2">
            <span className={cn('h-3 w-3 rounded-full', overallColour.dot)} aria-hidden />
            <span className={cn('text-sm font-semibold', overallColour.text)}>
              {hasAccess ? overallColour.label : t('ielts.readiness.locked.badge') || 'Locked'}
            </span>
          </div>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground">
            {t('ielts.readiness.overall.lead') ||
              'A combined view of how ready you are to study in the UK — across your English, your application, visa & finance, and the move itself.'}
          </p>
        </section>

        {/* ── Target band selector (drives the English domain) ──────── */}
        <section className="print-hide rounded-2xl border border-border bg-card p-5 shadow-soft sm:p-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
              <Target className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
              <div>
                <h2 className="font-serif text-lg font-medium">
                  {t('ielts.readiness.target.title') || 'Your target band'}
                </h2>
                <p className="text-sm text-muted-foreground">
                  {t('ielts.readiness.target.body') ||
                    'Set the overall band your course requires — English readiness is scored against it.'}
                </p>
              </div>
            </div>
            <select
              aria-label={t('ielts.readiness.target.title') || 'Your target band'}
              value={inputs.target}
              onChange={(e) => patch({ target: Number(e.target.value) as Band })}
              className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-base font-semibold outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20 sm:w-40"
            >
              {READINESS_TARGET_BANDS.map((b) => (
                <option key={b} value={b}>
                  {t('ielts.readiness.target.option_prefix') || 'Band'} {bandLabel(b)}
                </option>
              ))}
            </select>
          </div>
        </section>

        {/* ── Per-domain cards ──────────────────────────────────────── */}
        <section className="grid gap-4 sm:grid-cols-2">
          {report.domains.map((d) => {
            const c = COLOUR_CLASS[d.colour]
            const locked = !hasAccess && d.id !== 'english'
            return (
              <div
                key={d.id}
                className={cn(
                  'readiness-card readiness-avoid-break relative flex flex-col rounded-2xl border bg-card p-5 shadow-soft',
                  c.ring,
                )}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-serif text-base font-semibold text-foreground">{d.label}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      {t('ielts.readiness.domain.weight_prefix') || 'Weighted'} {d.weight}{' '}
                      {t('ielts.readiness.domain.weight_suffix') || 'of 100'}
                    </p>
                  </div>
                  <div className="shrink-0 text-right">
                    <p className={cn('font-mono text-2xl font-bold', c.text, locked && 'blur-sm')}>
                      {Math.round(d.earned)}
                      <span className="text-sm text-muted-foreground">/{d.weight}</span>
                    </p>
                    <span
                      className={cn(
                        'mt-1 inline-flex items-center gap-1 text-[11px] font-semibold',
                        c.text,
                      )}
                    >
                      <span className={cn('h-2 w-2 rounded-full', c.dot)} aria-hidden />
                      {locked ? t('ielts.readiness.locked.badge') || 'Locked' : c.label}
                    </span>
                  </div>
                </div>

                {locked ? (
                  <div className="mt-4 flex flex-1 flex-col items-start justify-center rounded-xl border border-dashed border-border bg-muted/30 p-4">
                    <Lock className="h-4 w-4 text-muted-foreground" aria-hidden />
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      {t('ielts.readiness.locked.domain') ||
                        'Unlock the full report to see this domain’s score, facts and recommendation.'}
                    </p>
                  </div>
                ) : (
                  <>
                    <ul className="mt-4 space-y-1.5">
                      {d.facts.map((f, i) => (
                        <li
                          key={i}
                          className="flex gap-2 text-xs leading-relaxed text-muted-foreground"
                        >
                          <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-muted-foreground/60" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>

                    {/* English domain: per-skill vs target table. */}
                    {d.skillRows && (
                      <div className="mt-4 grid grid-cols-2 gap-2">
                        {d.skillRows.map((row) => {
                          const meta = SKILL_META[row.skill]
                          return (
                            <div
                              key={row.skill}
                              className="flex items-center justify-between rounded-lg border border-border/60 bg-background/50 px-3 py-2"
                            >
                              <span className="flex items-center gap-1.5 text-xs font-medium">
                                <span className={cn('font-mono', meta.colour)}>{meta.short}</span>
                                {meta.label}
                              </span>
                              <span className="text-right text-xs">
                                <span className="font-semibold text-foreground">
                                  {bandLabel(row.current)}
                                </span>
                                <span className="text-muted-foreground">
                                  {' '}
                                  / {bandLabel(row.target)}
                                </span>
                                {row.current !== null && !row.meetsTarget ? (
                                  <span className="ml-1 font-semibold text-rose-500">
                                    +{Math.round(row.gap * 10) / 10}
                                  </span>
                                ) : row.current !== null ? (
                                  <CheckCircle2 className="ml-1 inline h-3 w-3 text-emerald-500" />
                                ) : null}
                              </span>
                            </div>
                          )
                        })}
                      </div>
                    )}

                    <div className="mt-4 rounded-xl border border-primary/20 bg-primary/[0.04] p-3">
                      <p className="text-xs leading-relaxed text-foreground">
                        <span className="font-semibold">
                          {t('ielts.readiness.domain.recommend') || 'Recommendation: '}
                        </span>
                        {d.recommendation}
                      </p>
                    </div>

                    {/* Domain → its dedicated tool (IELTS-10 / IELTS-11). */}
                    {d.id === 'visa' && (
                      <Link
                        href="/ielts/readiness/visa-finance"
                        className="print-hide mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
                      >
                        {t('ielts.readiness.tool.visa') || 'Open the Visa & finance checklist'}
                        <ArrowRight className="h-3 w-3" />
                      </Link>
                    )}
                    {d.id === 'academic' && (
                      <Link
                        href="/ielts/readiness/transition"
                        className="print-hide mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
                      >
                        {t('ielts.readiness.tool.academic') ||
                          'Open the Academic-transition modules'}
                        <ArrowRight className="h-3 w-3" />
                      </Link>
                    )}
                  </>
                )}
              </div>
            )
          })}
        </section>

        {/* ── Locked teaser CTA (free users) ────────────────────────── */}
        {!hasAccess && (
          <section className="print-hide overflow-hidden rounded-2xl border border-sky-500/30 bg-sky-500/[0.06] p-6 text-center sm:p-8">
            <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/10">
              <Sparkles className="h-6 w-6 text-sky-500" aria-hidden />
            </span>
            <h2 className="mt-4 font-serif text-2xl font-semibold tracking-tight text-foreground">
              {t('ielts.readiness.locked.title') || 'Unlock your full UK Readiness Report'}
            </h2>
            <p className="mx-auto mt-2 max-w-xl leading-relaxed text-muted-foreground">
              {t('ielts.readiness.locked.body') ||
                'See your overall traffic-light score, every domain’s sub-score, your red flags and a 7/30/60-day action plan — and export it to PDF. Part of the IELTS plan.'}
            </p>
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
        )}

        {/* ── Full report: self-report, red flags, actions ──────────── */}
        {hasAccess && (
          <>
            {/* Red flags */}
            <section className="readiness-card readiness-avoid-break">
              <h2 className="mb-3 flex items-center gap-2 font-serif text-xl font-medium">
                <Flag className="h-5 w-5 text-rose-500" aria-hidden />
                {t('ielts.readiness.flags.title') || 'Red flags'}
              </h2>
              {report.redFlags.length === 0 ? (
                <div className="flex items-center gap-3 rounded-2xl border border-emerald-500/25 bg-emerald-500/[0.06] p-5">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-500" aria-hidden />
                  <p className="text-sm text-muted-foreground">
                    {t('ielts.readiness.flags.none') ||
                      'No red flags right now. Keep your answers up to date as things change.'}
                  </p>
                </div>
              ) : (
                <ul className="space-y-2">
                  {report.redFlags.map((flag, i) => (
                    <li
                      key={i}
                      className={cn(
                        'flex items-start gap-3 rounded-xl border p-3.5',
                        flag.severity === 'high'
                          ? 'border-rose-500/30 bg-rose-500/[0.06]'
                          : 'border-amber-500/30 bg-amber-500/[0.06]',
                      )}
                    >
                      <AlertTriangle
                        className={cn(
                          'mt-0.5 h-4 w-4 shrink-0',
                          flag.severity === 'high' ? 'text-rose-500' : 'text-amber-500',
                        )}
                        aria-hidden
                      />
                      <div>
                        <Badge
                          variant="outline"
                          className={cn(
                            'mb-1 text-[10px] uppercase',
                            flag.severity === 'high' ? 'text-rose-500' : 'text-amber-500',
                          )}
                        >
                          {flag.severity === 'high'
                            ? t('ielts.readiness.flags.high') || 'High priority'
                            : t('ielts.readiness.flags.medium') || 'Worth fixing'}
                        </Badge>
                        <p className="text-sm leading-relaxed text-foreground">{flag.message}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </section>

            {/* Next actions, grouped by horizon */}
            <section className="readiness-avoid-break">
              <h2 className="mb-3 flex items-center gap-2 font-serif text-xl font-medium">
                <Target className="h-5 w-5 text-primary" aria-hidden />
                {t('ielts.readiness.actions.title') || 'Next actions'}
              </h2>
              <div className="grid gap-4 lg:grid-cols-3">
                {HORIZONS.map((h) => {
                  const items = report.actions.filter((a) => a.horizon === h.id)
                  return (
                    <div
                      key={h.id}
                      className="readiness-card rounded-2xl border border-border bg-card p-5 shadow-soft"
                    >
                      <p className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
                        {t(`ielts.readiness.actions.${h.id}`) || h.label}
                      </p>
                      {items.length === 0 ? (
                        <p className="mt-3 text-xs text-muted-foreground">
                          {t('ielts.readiness.actions.empty') || 'Nothing outstanding here.'}
                        </p>
                      ) : (
                        <ul className="mt-3 space-y-3">
                          {items.map((a, i) => (
                            <li key={i} className="text-sm">
                              <Badge variant="secondary" className="mb-1 text-[10px]">
                                {OWNER_LABEL[a.owner]}
                              </Badge>
                              <p className="leading-relaxed text-foreground">{a.text}</p>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )
                })}
              </div>
            </section>

            {/* Self-report editor */}
            <section className="print-hide space-y-6">
              <div className="flex items-center gap-2">
                <RefreshCw className="h-5 w-5 text-muted-foreground" aria-hidden />
                <h2 className="font-serif text-xl font-medium">
                  {t('ielts.readiness.selfreport.title') || 'Update your details'}
                </h2>
              </div>
              <p className="-mt-3 text-sm text-muted-foreground">
                {t('ielts.readiness.selfreport.body') ||
                  'Your answers are saved on this device and the score updates instantly. English readiness is read automatically from your latest diagnostic and practice.'}
              </p>

              <SelfReportEditor t={t} inputs={inputs} patch={patch} />
            </section>

            {/* Disclaimer + export */}
            <section className="readiness-avoid-break space-y-4">
              <div className="flex items-start gap-2 rounded-xl border border-border/60 bg-background/50 p-4 text-xs text-muted-foreground">
                <AlertTriangle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-500" aria-hidden />
                <p>
                  {t('ielts.readiness.disclaimer') ||
                    'This readiness report is preparation guidance only, based on your own answers and your IELTS practice. It is not an official UCAS, university, or UK Visas & Immigration assessment, and not a prediction or guarantee of any outcome.'}
                </p>
              </div>
              <div className="print-hide flex flex-col gap-3 sm:flex-row sm:justify-between">
                <div className="flex flex-wrap gap-3">
                  <Button variant="outline" render={<Link href="/ielts/plan" />}>
                    <FileText className="h-4 w-4" />
                    {t('ielts.readiness.cta.plan') || 'View study plan'}
                  </Button>
                  <Button
                    variant="outline"
                    render={<Link href="/ielts/admissions/personal-statement" />}
                  >
                    <GraduationCap className="h-4 w-4" />
                    {t('ielts.readiness.cta.ps') || 'Personal-Statement Coach'}
                  </Button>
                </div>
                <Button onClick={handlePrint} className="gap-2">
                  <Download className="h-4 w-4" />
                  {t('ielts.readiness.cta.export') || 'Export / Save as PDF'}
                </Button>
              </div>
            </section>
          </>
        )}
      </div>
    </main>
  )
}

// ─── Header ─────────────────────────────────────────────────────────────────

function ReadinessHeader({
  t,
  onPrint,
  showPrint,
}: {
  t: (key: string) => string
  onPrint: () => void
  showPrint: boolean
}) {
  return (
    <section className="print-hide border-b border-border bg-card">
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
        <Link
          href="/ielts"
          className="mb-4 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          {t('ielts.nav') || 'IELTS'}
        </Link>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/10">
              <GraduationCap className="h-6 w-6 text-sky-500" aria-hidden />
            </span>
            <div>
              <h1 className="font-serif text-2xl font-medium tracking-tight sm:text-3xl">
                {t('ielts.readiness.header.title') || 'UK Candidate Readiness Report'}
              </h1>
              <p className="text-sm text-muted-foreground">
                {t('ielts.readiness.header.subtitle') ||
                  'Your traffic-light score across English, application, visa & finance, and the move.'}
              </p>
            </div>
          </div>
          {showPrint && (
            <Button onClick={onPrint} variant="outline" className="shrink-0 gap-2">
              <Download className="h-4 w-4" />
              {t('ielts.readiness.cta.export') || 'Export / Save as PDF'}
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}

// ─── Self-report editor ─────────────────────────────────────────────────────

function Field({
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

function Checkbox({
  label,
  checked,
  onChange,
}: {
  label: string
  checked: boolean
  onChange: (v: boolean) => void
}) {
  return (
    <label className="flex cursor-pointer items-center gap-2 rounded-lg border border-border bg-background px-3 py-2 text-sm">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="h-4 w-4 rounded border-border text-primary focus:ring-primary/30"
      />
      <span className="text-foreground">{label}</span>
    </label>
  )
}

function GroupCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
      <h3 className="mb-4 font-serif text-base font-semibold text-foreground">{title}</h3>
      <div className="grid gap-3 sm:grid-cols-2">{children}</div>
    </div>
  )
}

function SelfReportEditor({
  t,
  inputs,
  patch,
}: {
  t: (key: string) => string
  inputs: ReadinessInputs
  patch: (next: Partial<ReadinessInputs>) => void
}) {
  const app = inputs.application
  const visa = inputs.visa
  const acad = inputs.academic

  return (
    <div className="grid gap-4 lg:grid-cols-2">
      {/* Application */}
      <GroupCard title={t('ielts.readiness.group.application') || 'Application'}>
        <Field
          label={t('ielts.readiness.f.courseClarity') || 'Course / subject choice'}
          value={app.courseClarity}
          onChange={(v) =>
            patch({ application: { ...app, courseClarity: v as typeof app.courseClarity } })
          }
          options={[
            { value: 'decided', label: 'Decided' },
            { value: 'shortlisted', label: 'Shortlisted' },
            { value: 'undecided', label: 'Undecided' },
          ]}
        />
        <Field
          label={t('ielts.readiness.f.refereeStatus') || 'UCAS referee'}
          value={app.refereeStatus}
          onChange={(v) =>
            patch({ application: { ...app, refereeStatus: v as typeof app.refereeStatus } })
          }
          options={[
            { value: 'secured', label: 'Secured' },
            { value: 'asked', label: 'Asked, awaiting' },
            { value: 'none', label: 'Not arranged' },
          ]}
        />
        <Field
          label={t('ielts.readiness.f.transcriptStatus') || 'Academic transcript'}
          value={app.transcriptStatus}
          onChange={(v) =>
            patch({ application: { ...app, transcriptStatus: v as typeof app.transcriptStatus } })
          }
          options={[
            { value: 'ready', label: 'Ready' },
            { value: 'in_progress', label: 'Requested' },
            { value: 'none', label: 'Not started' },
          ]}
        />
        <div className="flex items-end">
          <Checkbox
            label={t('ielts.readiness.f.shortlistDone') || 'Five UCAS choices shortlisted'}
            checked={app.shortlistDone}
            onChange={(v) => patch({ application: { ...app, shortlistDone: v } })}
          />
        </div>
        <div className="sm:col-span-2 grid grid-cols-1 gap-2 sm:grid-cols-3">
          <Checkbox
            label={t('ielts.readiness.f.q1') || 'UCAS Q1 drafted'}
            checked={app.q1Drafted}
            onChange={(v) => patch({ application: { ...app, q1Drafted: v } })}
          />
          <Checkbox
            label={t('ielts.readiness.f.q2') || 'UCAS Q2 drafted'}
            checked={app.q2Drafted}
            onChange={(v) => patch({ application: { ...app, q2Drafted: v } })}
          />
          <Checkbox
            label={t('ielts.readiness.f.q3') || 'UCAS Q3 drafted'}
            checked={app.q3Drafted}
            onChange={(v) => patch({ application: { ...app, q3Drafted: v } })}
          />
        </div>
        <p className="sm:col-span-2 text-[11px] leading-relaxed text-muted-foreground">
          {t('ielts.readiness.f.ps_note') ||
            'Tip: run the Personal-Statement Coach to turn your drafts into scored feedback — that lifts this domain further than drafting alone.'}
        </p>
      </GroupCard>

      {/* Visa & finance */}
      <GroupCard title={t('ielts.readiness.group.visa') || 'Visa & finance'}>
        <Field
          label={t('ielts.readiness.f.passportValid') || 'Passport'}
          value={visa.passportValid}
          onChange={(v) =>
            patch({ visa: { ...visa, passportValid: v as typeof visa.passportValid } })
          }
          options={[
            { value: 'yes', label: 'Valid' },
            { value: 'expiring', label: 'Expiring / renewing' },
            { value: 'no', label: 'Not valid yet' },
          ]}
        />
        <Field
          label={t('ielts.readiness.f.fundsEvidence') || 'Funds evidence'}
          value={visa.fundsEvidence}
          onChange={(v) =>
            patch({ visa: { ...visa, fundsEvidence: v as typeof visa.fundsEvidence } })
          }
          options={[
            { value: 'ready', label: 'Ready (28-day rule met)' },
            { value: 'gathering', label: 'Gathering' },
            { value: 'none', label: 'Not started' },
          ]}
        />
        <Field
          label={t('ielts.readiness.f.sponsor') || 'Sponsor / scholarship'}
          value={visa.sponsorOrScholarship}
          onChange={(v) =>
            patch({
              visa: { ...visa, sponsorOrScholarship: v as typeof visa.sponsorOrScholarship },
            })
          }
          options={[
            { value: 'self_funded', label: 'Self-funded' },
            { value: 'sponsor_confirmed', label: 'Sponsor confirmed' },
            { value: 'applying', label: 'Applying' },
            { value: 'unknown', label: 'Unknown' },
          ]}
        />
        <Field
          label={t('ielts.readiness.f.casStage') || 'CAS / offer stage'}
          value={visa.casStage}
          onChange={(v) => patch({ visa: { ...visa, casStage: v as typeof visa.casStage } })}
          options={[
            { value: 'received', label: 'CAS received' },
            { value: 'offer_holder', label: 'Offer holder' },
            { value: 'applying', label: 'Applying' },
            { value: 'not_started', label: 'Not started' },
          ]}
        />
        <Field
          label={t('ielts.readiness.f.tbTest') || 'TB test (if required)'}
          value={visa.tbTest}
          onChange={(v) => patch({ visa: { ...visa, tbTest: v as typeof visa.tbTest } })}
          options={[
            { value: 'na', label: 'Not applicable' },
            { value: 'yes', label: 'Done' },
            { value: 'no', label: 'Outstanding' },
          ]}
        />
        <Field
          label={t('ielts.readiness.f.atas') || 'ATAS (if required)'}
          value={visa.atas}
          onChange={(v) => patch({ visa: { ...visa, atas: v as typeof visa.atas } })}
          options={[
            { value: 'na', label: 'Not applicable' },
            { value: 'yes', label: 'Granted' },
            { value: 'no', label: 'Outstanding' },
          ]}
        />
      </GroupCard>

      {/* Academic transition */}
      <GroupCard title={t('ielts.readiness.group.academic') || 'Academic transition'}>
        <Field
          label={t('ielts.readiness.f.academicWriting') || 'Academic-writing confidence'}
          value={acad.academicWriting}
          onChange={(v) =>
            patch({ academic: { ...acad, academicWriting: v as typeof acad.academicWriting } })
          }
          options={[
            { value: 'confident', label: 'Confident' },
            { value: 'some', label: 'Some' },
            { value: 'low', label: 'Low' },
          ]}
        />
        <Field
          label={t('ielts.readiness.f.budgeting') || 'Budgeting confidence'}
          value={acad.budgeting}
          onChange={(v) => patch({ academic: { ...acad, budgeting: v as typeof acad.budgeting } })}
          options={[
            { value: 'confident', label: 'Confident' },
            { value: 'some', label: 'Some' },
            { value: 'low', label: 'Low' },
          ]}
        />
        <Field
          label={t('ielts.readiness.f.accommodation') || 'Accommodation'}
          value={acad.accommodation}
          onChange={(v) =>
            patch({ academic: { ...acad, accommodation: v as typeof acad.accommodation } })
          }
          options={[
            { value: 'sorted', label: 'Sorted' },
            { value: 'searching', label: 'Searching' },
            { value: 'not_started', label: 'Not started' },
          ]}
        />
        <Field
          label={t('ielts.readiness.f.contactHours') || 'Understand contact hours'}
          value={acad.contactHours}
          onChange={(v) =>
            patch({ academic: { ...acad, contactHours: v as typeof acad.contactHours } })
          }
          options={[
            { value: 'understand', label: 'Yes, I understand' },
            { value: 'unsure', label: 'Unsure' },
          ]}
        />
      </GroupCard>

      {/* Dedicated tools now feed the Visa & Academic domains. */}
      <div className="rounded-2xl border border-dashed border-border bg-muted/20 p-5">
        <p className="text-xs leading-relaxed text-muted-foreground">
          {t('ielts.readiness.tools_note') ||
            'Want to go deeper? The interactive Visa & Finance checklist and Academic-transition modules feed these scores automatically — work through them to upgrade these domains from self-report to tool-driven.'}
        </p>
        <div className="mt-3 flex flex-wrap gap-3">
          <Button
            variant="outline"
            size="sm"
            render={<Link href="/ielts/readiness/visa-finance" />}
          >
            {t('ielts.readiness.tool.visa') || 'Open the Visa & finance checklist'}
            <ArrowRight className="h-3.5 w-3.5" />
          </Button>
          <Button variant="outline" size="sm" render={<Link href="/ielts/readiness/transition" />}>
            {t('ielts.readiness.tool.academic') || 'Open the Academic-transition modules'}
            <ArrowRight className="h-3.5 w-3.5" />
          </Button>
        </div>
      </div>
    </div>
  )
}
