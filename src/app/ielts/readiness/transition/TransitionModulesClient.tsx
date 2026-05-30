'use client'

// ─── IELTS-11 Academic-transition modules - interactive client ───────────────
// Four short self-authored modules (academic writing, lectures/contact hours,
// budgeting, accommodation). Each is an expandable read with ONE self-rating.
// The four ratings map exactly onto AcademicTransitionReadinessInput, so on every
// change the client persists the academic slice to the SHARED readiness store via
// setTransitionSlice() — upgrading the Candidate Readiness Report's Transition
// domain (weight 15) from self-report to module-driven, with no extra wiring.
//
// Entitlement: the server page passes `hasAccess`. Free users see a tasteful
// teaser (the module titles, locked) with a CTA to /pricing#ielts. The full
// reads + self-checks render only when entitled.
// ────────────────────────────────────────────────────────────────────────────

import { useCallback, useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  GraduationCap,
  Home,
  Lock,
  NotebookPen,
  PenLine,
  Sparkles,
  Wallet,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useT } from '@/lib/i18n/use-t'
import { cn } from '@/lib/utils'
import { PRICING } from '@/constants/pricing'
import {
  defaultReadinessInputs,
  readinessColour,
  type AcademicTransitionReadinessInput,
} from '@/lib/ielts/readiness'
import { getReadinessInputs, setTransitionSlice } from '@/lib/ielts/readiness-store'
import { TRANSITION_MODULES, type TransitionModule } from '@/lib/ielts/transition-modules'

const ICONS = { PenLine, NotebookPen, Wallet, Home } as const

// How "complete + confident" each module's current answer is, 0..1, used purely
// for the on-page progress meter (the authoritative score is in the report).
function moduleScore(m: TransitionModule, value: string): number {
  const idx = m.options.findIndex((o) => o.value === value)
  if (idx < 0) return 0
  // Best option = 1, worst = 0, evenly spread between.
  return m.options.length === 1 ? 1 : 1 - idx / (m.options.length - 1)
}

export function TransitionModulesClient({ hasAccess }: { hasAccess: boolean }) {
  const tBase = useT()
  const t = useCallback(
    (key: string): string => {
      const v = tBase(key)
      return v.startsWith('[[') ? '' : v
    },
    [tBase],
  )

  const [mounted, setMounted] = useState(false)
  const [academic, setAcademic] = useState<AcademicTransitionReadinessInput>(
    () => defaultReadinessInputs().academic,
  )
  const [open, setOpen] = useState<string | null>(null)

  // On mount: hydrate from the shared readiness store so this tool and the
  // report stay in sync (the report writes the same `academic` slice).
  useEffect(() => {
    const saved = getReadinessInputs()
    setAcademic(saved.academic)
    setMounted(true)
  }, [])

  // Persist the academic slice to the SHARED store on every change after mount.
  useEffect(() => {
    if (mounted && hasAccess) setTransitionSlice(academic)
  }, [academic, mounted, hasAccess])

  const setField = useCallback((field: keyof AcademicTransitionReadinessInput, value: string) => {
    setAcademic((prev) => ({ ...prev, [field]: value }) as AcademicTransitionReadinessInput)
  }, [])

  // On-page progress meter (average of the four module scores).
  const progressPct = useMemo(() => {
    const sum = TRANSITION_MODULES.reduce(
      (acc, m) => acc + moduleScore(m, String(academic[m.field])),
      0,
    )
    return Math.round((sum / TRANSITION_MODULES.length) * 100)
  }, [academic])

  const progressColour = readinessColour(progressPct)
  const PROGRESS_CLASS: Record<typeof progressColour, string> = {
    green: 'text-emerald-600 dark:text-emerald-400',
    amber: 'text-amber-600 dark:text-amber-400',
    red: 'text-rose-600 dark:text-rose-400',
  }

  // ── Pre-hydration skeleton ────────────────────────────────────────────────
  if (!mounted) {
    return (
      <main id="main-content" className="min-h-screen bg-background">
        <Header t={t} />
        <div className="mx-auto max-w-3xl space-y-3 px-4 py-8 sm:px-6">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="h-24 animate-pulse rounded-2xl border border-border bg-card" />
          ))}
        </div>
      </main>
    )
  }

  return (
    <main id="main-content" className="min-h-screen bg-background">
      <Header t={t} />

      <div className="mx-auto max-w-3xl space-y-6 px-4 py-8 pb-20 sm:px-6">
        {/* Intro addressing the UCAS "underprepared" finding */}
        <div className="rounded-2xl border border-border bg-card p-5 shadow-soft sm:p-6">
          <p className="text-sm leading-relaxed text-muted-foreground">
            {t('ielts.transition.intro') ||
              'Many international students arrive feeling underprepared for how UK university actually works — not the English, but the study habits, money and day-to-day life. These short modules close that gap. Read each one and answer a quick self-check; your answers feed the Academic-transition score in your Readiness Report.'}
          </p>
        </div>

        {hasAccess ? (
          <>
            {/* Progress meter */}
            <section className="rounded-2xl border border-border bg-card p-5 shadow-soft">
              <div className="flex items-center justify-between">
                <p className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
                  {t('ielts.transition.progress.label') || 'Your transition readiness'}
                </p>
                <p className={cn('font-mono text-2xl font-bold', PROGRESS_CLASS[progressColour])}>
                  {progressPct}
                  <span className="text-sm text-muted-foreground">/100</span>
                </p>
              </div>
              <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-muted">
                <div
                  className={cn(
                    'h-full rounded-full transition-all',
                    progressColour === 'green'
                      ? 'bg-emerald-500'
                      : progressColour === 'amber'
                        ? 'bg-amber-500'
                        : 'bg-rose-500',
                  )}
                  style={{ width: `${progressPct}%` }}
                />
              </div>
              <p className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" aria-hidden />
                {t('ielts.transition.progress.synced') ||
                  'Saved on this device and feeding your Readiness Report’s Academic-transition domain.'}
              </p>
            </section>

            {/* Modules */}
            <div className="space-y-3">
              {TRANSITION_MODULES.map((m) => {
                const Icon = ICONS[m.icon]
                const isOpen = open === m.id
                const value = String(academic[m.field])
                const answered = m.options.some((o) => o.value === value)
                return (
                  <section
                    key={m.id}
                    className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft"
                  >
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : m.id)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center gap-3 p-5 text-left transition-colors hover:bg-muted/30"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <div className="min-w-0 flex-1">
                        <h2 className="font-serif text-base font-semibold text-foreground">
                          {m.title}
                        </h2>
                        <p className="truncate text-xs text-muted-foreground">{m.summary}</p>
                      </div>
                      {answered && (
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" aria-hidden />
                      )}
                      <ChevronDown
                        className={cn(
                          'h-4 w-4 shrink-0 text-muted-foreground transition-transform',
                          isOpen && 'rotate-180',
                        )}
                        aria-hidden
                      />
                    </button>

                    {isOpen && (
                      <div className="border-t border-border px-5 pb-5 pt-4">
                        {/* Key points */}
                        <div className="mb-4 flex flex-wrap gap-2">
                          {m.keyPoints.map((kp) => (
                            <span
                              key={kp}
                              className="rounded-full border border-border/60 bg-muted/40 px-3 py-1 text-[11px] text-muted-foreground"
                            >
                              {kp}
                            </span>
                          ))}
                        </div>

                        {/* Read */}
                        <div className="space-y-3">
                          {m.body.map((para, i) => (
                            <p key={i} className="text-sm leading-relaxed text-foreground">
                              {para}
                            </p>
                          ))}
                        </div>

                        {/* Self-rating */}
                        <div className="mt-5 rounded-xl border border-primary/20 bg-primary/[0.04] p-4">
                          <p className="mb-3 text-sm font-semibold text-foreground">{m.question}</p>
                          <div className="grid gap-2">
                            {m.options.map((o) => {
                              const selected = value === o.value
                              return (
                                <button
                                  key={o.value}
                                  type="button"
                                  onClick={() => setField(m.field, o.value)}
                                  aria-pressed={selected}
                                  className={cn(
                                    'flex items-center gap-2 rounded-lg border px-3 py-2 text-left text-sm transition-colors',
                                    selected
                                      ? 'border-primary bg-primary/10 text-foreground'
                                      : 'border-border bg-background text-muted-foreground hover:border-primary/40',
                                  )}
                                >
                                  <span
                                    className={cn(
                                      'flex h-4 w-4 shrink-0 items-center justify-center rounded-full border',
                                      selected
                                        ? 'border-primary bg-primary'
                                        : 'border-muted-foreground/40',
                                    )}
                                  >
                                    {selected && (
                                      <span className="h-1.5 w-1.5 rounded-full bg-white" />
                                    )}
                                  </span>
                                  {o.label}
                                </button>
                              )
                            })}
                          </div>
                        </div>
                      </div>
                    )}
                  </section>
                )
              })}
            </div>

            {/* Footer nav */}
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-between">
              <Button variant="outline" render={<Link href="/ielts/readiness" />}>
                <ArrowLeft className="size-4" />
                {t('ielts.transition.cta.report') || 'Back to Readiness Report'}
              </Button>
              <Button render={<Link href="/ielts/readiness/visa-finance" />}>
                {t('ielts.transition.cta.visa') || 'Visa & finance checklist'}
                <ArrowRight className="size-4" />
              </Button>
            </div>
          </>
        ) : (
          <LockedTeaser t={t} />
        )}
      </div>
    </main>
  )
}

// ─── Header ─────────────────────────────────────────────────────────────────

function Header({ t }: { t: (key: string) => string }) {
  return (
    <section className="border-b border-border bg-card">
      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <Link
          href="/ielts/readiness"
          className="mb-4 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          {t('ielts.readiness.header.title') || 'UK Candidate Readiness Report'}
        </Link>
        <div className="flex items-center gap-3">
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10">
            <GraduationCap className="h-6 w-6 text-violet-600 dark:text-violet-400" aria-hidden />
          </span>
          <div>
            <h1 className="font-serif text-2xl font-medium tracking-tight sm:text-3xl">
              {t('ielts.transition.header.title') || 'Academic-transition modules'}
            </h1>
            <p className="text-sm text-muted-foreground">
              {t('ielts.transition.header.subtitle') ||
                'Short reads + self-checks to get ready for studying and living in the UK.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Locked teaser (free users) ─────────────────────────────────────────────

function LockedTeaser({ t }: { t: (key: string) => string }) {
  return (
    <section className="overflow-hidden rounded-2xl border border-sky-500/30 bg-sky-500/[0.06] p-6 text-center sm:p-10">
      <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/10">
        <Sparkles className="h-6 w-6 text-sky-500" aria-hidden />
      </span>
      <h2 className="mt-4 font-serif text-2xl font-semibold tracking-tight text-foreground">
        {t('ielts.transition.locked.title') || 'Unlock the Academic-transition modules'}
      </h2>
      <p className="mx-auto mt-2 max-w-xl leading-relaxed text-muted-foreground">
        {t('ielts.transition.locked.body') ||
          'Four short, self-guided modules — academic writing, lectures & independent study, budgeting, and accommodation — each with a quick self-check that feeds your Readiness Report. Part of the IELTS plan.'}
      </p>

      <div className="mx-auto mt-6 grid max-w-md gap-2 text-left">
        {TRANSITION_MODULES.map((m) => {
          const Icon = ICONS[m.icon]
          return (
            <div
              key={m.id}
              className="flex items-center gap-3 rounded-lg border border-dashed border-border bg-muted/30 px-3 py-2.5"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground">
                <Icon className="h-4 w-4" aria-hidden />
              </span>
              <span className="min-w-0 flex-1 text-sm text-foreground">{m.title}</span>
              <Lock className="h-3.5 w-3.5 shrink-0 text-muted-foreground" aria-hidden />
            </div>
          )
        })}
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
