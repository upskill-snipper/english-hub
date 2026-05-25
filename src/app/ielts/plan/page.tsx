'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Target,
  Compass,
  TrendingUp,
  CheckCircle2,
  Sparkles,
  Info,
  type LucideIcon,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

import { bandLabel, bandColour, bandBgColour, bandTier } from '@/lib/ielts/bands'
import { buildIeltsProfile, getDiagnostic, type DiagnosticResult } from '@/lib/ielts/store'
import {
  IELTS_SKILLS,
  SKILL_META,
  type Band,
  type IeltsProfile,
  type IeltsSkill,
} from '@/lib/ielts/types'
import { useT } from '@/lib/i18n/use-t'
import { useLocale } from '@/lib/i18n/use-locale'
import { IELTS_DIAGNOSTIC_DICTIONARY } from '@/lib/i18n/dictionary-ielts-diagnostic'

// ─── Local i18n helper ────────────────────────────────────────────────────────
// ielts.plan.* keys live in the dictionary-ielts-diagnostic shard, which isn't
// wired into the global lookup() chain - resolve them here against the live
// locale, falling back to the shared useT() for cross-module ielts.* keys.
// `vars` interpolates {token} placeholders so the prioritised-step copy
// (skill labels, bands, gaps) stays translatable as a whole phrase.
type Vars = Record<string, string | number>
type TFn = (key: string, vars?: Vars) => string

function interpolate(template: string, vars?: Vars): string {
  if (!vars) return template
  return template.replace(/\{(\w+)\}/g, (m, k) =>
    Object.prototype.hasOwnProperty.call(vars, k) ? String(vars[k]) : m,
  )
}

function usePlanT(): TFn {
  const tBase = useT()
  const locale = useLocale()
  return (key: string, vars?: Vars) => {
    const entry = IELTS_DIAGNOSTIC_DICTIONARY[key]
    if (entry) {
      const value = locale === 'ar' && entry.ar ? entry.ar : entry.en
      return interpolate(value, vars)
    }
    return interpolate(tBase(key), vars)
  }
}

// ─── My IELTS Study Plan ─────────────────────────────────────────────────────
// Reads the placement diagnostic + the live attempt profile, then builds a
// prioritised, weakest-first study plan towards a target band. Mirrors the
// spirit of the GCSE personalise engine (src/lib/revision/personalise.ts):
// surface the biggest gaps first, make every item actionable, link straight to
// the module that closes the gap. Empty state nudges the learner to the
// placement test when there is no data yet.
// ──────────────────────────────────────────────────────────────────────────────

// Selectable target bands (the bands realistically targeted by Academic test-takers).
const TARGET_BANDS: Band[] = [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9]
const DEFAULT_TARGET: Band = 6.5

interface SkillRow {
  skill: IeltsSkill
  current: Band | null
  source: 'practice' | 'placement' | 'none'
  gap: number // target - current, clamped at 0; 0 if current is null
  meetsTarget: boolean
}

// Structured plan step. Display copy (headline/action/CTA) is composed from the
// dictionary at render time in PlanStepCard; this keeps prioritisation logic and
// translation cleanly separated. `kind` selects the copy template; `sizeNote`
// picks the gap-size sentence for the 'close' variant.
type StepKind = 'baseline' | 'hold' | 'close'

interface PlanStep {
  priority: number
  skill: IeltsSkill
  current: Band | null
  target: Band
  gap: number
  kind: StepKind
  sizeNote: 'big' | 'medium' | 'small'
  href: string
}

// Merge diagnostic estimate + live profile into one "current band" per skill.
// A real practice attempt (profile) always wins over the placement estimate.
function resolveCurrent(
  skill: IeltsSkill,
  profile: IeltsProfile,
  diagnostic: DiagnosticResult | null,
): { band: Band | null; source: 'practice' | 'placement' | 'none' } {
  const practice = profile.skills[skill]?.band ?? null
  if (practice !== null) return { band: practice, source: 'practice' }
  const placement = diagnostic?.estimatedBands[skill] ?? null
  if (placement !== null) return { band: placement, source: 'placement' }
  return { band: null, source: 'none' }
}

function buildRows(
  target: Band,
  profile: IeltsProfile,
  diagnostic: DiagnosticResult | null,
): SkillRow[] {
  return IELTS_SKILLS.map((skill) => {
    const { band, source } = resolveCurrent(skill, profile, diagnostic)
    const gap = band === null ? 0 : Math.max(0, target - band)
    return {
      skill,
      current: band,
      source,
      gap,
      meetsTarget: band !== null && band >= target,
    }
  })
}

// Weakest-first prioritisation: largest gap first; unknown skills come next
// (we can't measure them yet, so practising them is still a priority); skills
// already at/above target drop to the bottom.
function buildPlan(rows: SkillRow[], target: Band): PlanStep[] {
  const ranked = [...rows].sort((a, b) => {
    const aUnknown = a.current === null
    const bUnknown = b.current === null
    if (aUnknown !== bUnknown) return aUnknown ? 1 : -1 // measured gaps before unknowns
    if (a.meetsTarget !== b.meetsTarget) return a.meetsTarget ? 1 : -1 // unmet before met
    return b.gap - a.gap // biggest gap first
  })

  let priority = 1
  return ranked.map((row) => {
    const meta = SKILL_META[row.skill]
    const kind: StepKind = row.current === null ? 'baseline' : row.meetsTarget ? 'hold' : 'close'
    const sizeNote: 'big' | 'medium' | 'small' =
      row.gap >= 1.5 ? 'big' : row.gap >= 0.5 ? 'medium' : 'small'
    return {
      priority: priority++,
      skill: row.skill,
      current: row.current,
      target,
      gap: row.gap,
      kind,
      sizeNote,
      href: meta.href,
    }
  })
}

// Compose the translated headline + action for a step. Mirrors the original copy
// logic exactly (baseline / hold / close), but reads phrases from the dictionary
// and interpolates skill labels (Latin), bands and gaps (digits) as tokens.
function stepCopy(step: PlanStep, t: TFn): { headline: string; action: string } {
  const meta = SKILL_META[step.skill]
  const skillLabel = meta.label
  const isProductive = step.skill === 'writing' || step.skill === 'speaking'

  if (step.kind === 'baseline') {
    const taskKind = t(
      isProductive ? 'ielts.plan.taskkind.feedback' : 'ielts.plan.taskkind.practice_set',
    )
    return {
      headline: t('ielts.plan.step.baseline.headline', { skill: skillLabel }),
      action: t('ielts.plan.step.baseline.action', {
        skill: skillLabel,
        target: bandLabel(step.target),
        taskKind,
      }),
    }
  }

  if (step.kind === 'hold') {
    return {
      headline: t('ielts.plan.step.hold.headline', {
        skill: skillLabel,
        current: bandLabel(step.current),
      }),
      action: t('ielts.plan.step.hold.action', { target: bandLabel(step.target) }),
    }
  }

  const gapLabel = step.gap % 1 === 0 ? String(step.gap) : step.gap.toFixed(1)
  const sizeKey =
    step.sizeNote === 'big'
      ? 'ielts.plan.step.close.size_big'
      : step.sizeNote === 'medium'
        ? 'ielts.plan.step.close.size_medium'
        : 'ielts.plan.step.close.size_small'
  const actionLead = t('ielts.plan.step.close.action_lead', {
    current: bandLabel(step.current),
    target: bandLabel(step.target),
  })
  const sizeNote = t(sizeKey)
  const actionTail = t(
    isProductive
      ? 'ielts.plan.step.close.action_productive'
      : 'ielts.plan.step.close.action_receptive',
    { skillLower: skillLabel.toLowerCase() },
  )

  return {
    headline: t('ielts.plan.step.close.headline', { gap: gapLabel, skill: skillLabel }),
    action: `${actionLead} ${sizeNote} ${actionTail}`,
  }
}

export default function IeltsPlanPage() {
  const t = usePlanT()
  const [profile, setProfile] = useState<IeltsProfile | null>(null)
  const [diagnostic, setDiagnostic] = useState<DiagnosticResult | null>(null)
  const [target, setTarget] = useState<Band>(DEFAULT_TARGET)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setProfile(buildIeltsProfile())
    setDiagnostic(getDiagnostic())
    setLoaded(true)
  }, [])

  const rows = useMemo(
    () => (profile ? buildRows(target, profile, diagnostic) : []),
    [profile, diagnostic, target],
  )
  const plan = useMemo(() => buildPlan(rows, target), [rows, target])

  const hasAnyData = Boolean(diagnostic) || Boolean(profile?.hasData)
  const currentOverall = profile?.overallBand ?? diagnostic?.overall ?? null

  if (!loaded) {
    return (
      <main className="min-h-screen bg-background">
        <PlanHeader t={t} />
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
          <div className="animate-pulse space-y-4">
            <div className="mx-auto h-8 w-64 rounded bg-muted" />
            <div className="mx-auto h-4 w-96 rounded bg-muted" />
          </div>
        </div>
      </main>
    )
  }

  // ── Empty state: no diagnostic and no attempts yet ──
  if (!hasAnyData) {
    return (
      <main className="min-h-screen bg-background">
        <PlanHeader t={t} />
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-muted/50">
            <Compass className="h-10 w-10 text-muted-foreground" />
          </div>
          <h2 className="mb-3 font-serif text-2xl font-medium">{t('ielts.plan.empty.title')}</h2>
          <p className="mx-auto mb-8 max-w-md leading-relaxed text-muted-foreground">
            {t('ielts.plan.empty.body')}
          </p>
          <Button size="lg" render={<Link href="/ielts/diagnostic" />}>
            <Target className="mr-2 h-4 w-4" />
            {t('ielts.plan.empty.cta')}
          </Button>
        </div>
      </main>
    )
  }

  const topGap = plan.find((s) => s.current !== null && s.gap > 0)

  return (
    <main className="min-h-screen bg-background">
      <PlanHeader t={t} />

      <div className="mx-auto max-w-4xl space-y-12 px-4 py-8 sm:px-6 sm:py-12">
        {/* ── Target + overall ── */}
        <section className="rounded-xl border border-border bg-card p-6 shadow-soft sm:p-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="mb-2 flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-primary" />
                <h2 className="font-serif text-2xl font-medium tracking-tight">
                  {t('ielts.plan.target.heading')}
                </h2>
              </div>
              <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
                {t('ielts.plan.target.body')}
              </p>
            </div>
            <div className="shrink-0">
              <label
                htmlFor="target-band"
                className="mb-1.5 block text-xs font-mono uppercase tracking-wider text-muted-foreground"
              >
                {t('ielts.plan.target.select_label')}
              </label>
              <select
                id="target-band"
                value={target}
                onChange={(e) => setTarget(Number(e.target.value) as Band)}
                className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-base font-semibold outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20 sm:w-40"
              >
                {TARGET_BANDS.map((b) => (
                  <option key={b} value={b}>
                    {t('ielts.plan.target.option', { band: bandLabel(b) })}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Current overall vs target */}
          <div className="mt-6 grid grid-cols-2 gap-3">
            <div className={`rounded-xl border p-4 ${bandBgColour(currentOverall)}`}>
              <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                {t('ielts.plan.overall.current')}
              </p>
              <p className={`text-3xl font-bold ${bandColour(currentOverall)}`}>
                {bandLabel(currentOverall)}
              </p>
              <p className="mt-0.5 text-[11px] text-muted-foreground">{bandTier(currentOverall)}</p>
            </div>
            <div className={`rounded-xl border p-4 ${bandBgColour(target)}`}>
              <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                {t('ielts.plan.overall.target')}
              </p>
              <p className={`text-3xl font-bold ${bandColour(target)}`}>{bandLabel(target)}</p>
              <p className="mt-0.5 text-[11px] text-muted-foreground">{bandTier(target)}</p>
            </div>
          </div>

          {!profile?.hasData && diagnostic && (
            <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
              {t('ielts.plan.overall.from_placement_note')}
            </p>
          )}
        </section>

        {/* ── Current vs target per skill ── */}
        <section>
          <div className="mb-6 flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-primary" />
            <h2 className="font-serif text-2xl font-medium tracking-tight">
              {t('ielts.plan.stand.heading')}
            </h2>
          </div>
          <div className="space-y-3">
            {rows.map((row) => (
              <SkillGapRow key={row.skill} t={t} row={row} target={target} />
            ))}
          </div>
        </section>

        {/* ── Prioritised plan ── */}
        <section>
          <div className="mb-2 flex items-center gap-2">
            <Target className="h-5 w-5 text-primary" />
            <h2 className="font-serif text-2xl font-medium tracking-tight">
              {t('ielts.plan.plan.heading')}
            </h2>
          </div>
          <p className="mb-6 text-sm text-muted-foreground">
            {topGap
              ? t('ielts.plan.plan.lead_gap', {
                  skill: SKILL_META[topGap.skill].label,
                  target: bandLabel(target),
                })
              : t('ielts.plan.plan.lead_on_target')}
          </p>
          <div className="space-y-3">
            {plan.map((step) => (
              <PlanStepCard key={step.skill} t={t} step={step} />
            ))}
          </div>
        </section>

        {/* ── Caveat + refresh CTA ── */}
        <PlanCaveat t={t} />

        <div className="flex flex-col gap-3 sm:flex-row">
          <Button render={<Link href="/ielts/planner" />}>
            <CalendarDays className="mr-2 h-4 w-4" />
            {t('ielts.plan.cta.dated_planner')}
          </Button>
          <Button variant="outline" render={<Link href="/ielts/diagnostic" />}>
            <Target className="mr-2 h-4 w-4" />
            {t('ielts.plan.cta.retake')}
          </Button>
          <Button variant="outline" render={<Link href="/ielts/progress" />}>
            {t('ielts.plan.cta.view_progress')}
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </main>
  )
}

// ─── Header ───────────────────────────────────────────────────────────────────

function PlanHeader({ t }: { t: TFn }) {
  return (
    <section className="border-b border-border bg-card">
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
        <Link
          href="/ielts"
          className="mb-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          {t('ielts.diagnostic.back')}
        </Link>
        <div className="flex items-start gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10">
            <Compass className="h-7 w-7 text-primary" />
          </div>
          <div>
            <h1 className="font-serif text-3xl font-medium tracking-tight sm:text-4xl">
              {t('ielts.plan.title')}
            </h1>
            <p className="mt-1 max-w-2xl text-lg text-muted-foreground">
              {t('ielts.plan.subtitle')}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Skill gap row ──────────────────────────────────────────────────────────

function SkillGapRow({ t, row, target }: { t: TFn; row: SkillRow; target: Band }) {
  const meta = SKILL_META[row.skill]
  const gapLabel = row.gap % 1 === 0 ? String(row.gap) : row.gap.toFixed(1)
  const sourceKey =
    row.source === 'practice'
      ? 'ielts.plan.tag.from_practice'
      : row.source === 'placement'
        ? 'ielts.plan.tag.from_placement'
        : 'ielts.plan.tag.not_assessed'

  return (
    <div className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 shadow-soft">
      <span
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm font-bold ${meta.bgColour} ${meta.colour}`}
      >
        {meta.short}
      </span>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <h3 className="font-serif text-base font-medium">{meta.label}</h3>
          <Badge variant="outline" className="text-[10px]">
            {t(sourceKey)}
          </Badge>
        </div>
        <p className="mt-0.5 text-xs text-muted-foreground">
          {t('ielts.plan.stand.current_label')}
          <span className={`font-semibold ${bandColour(row.current)}`}>
            {bandLabel(row.current)}
          </span>{' '}
          · {t('ielts.plan.stand.target_label')}
          <span className="font-semibold text-foreground">{bandLabel(target)}</span>
        </p>
      </div>
      <div className="shrink-0 text-right">
        {row.current === null ? (
          <span className="text-xs font-medium text-muted-foreground">
            {t('ielts.plan.stand.no_data')}
          </span>
        ) : row.meetsTarget ? (
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
            <CheckCircle2 className="h-3.5 w-3.5" />
            {t('ielts.plan.stand.on_target')}
          </span>
        ) : (
          <span className="text-sm font-bold text-rose-500">+{gapLabel}</span>
        )}
      </div>
    </div>
  )
}

// ─── Plan step card ───────────────────────────────────────────────────────────

function PlanStepCard({ t, step }: { t: TFn; step: PlanStep }) {
  const meta = SKILL_META[step.skill]
  const onTarget = step.current !== null && step.gap === 0
  const unknown = step.current === null
  const { headline, action } = stepCopy(step, t)
  const gapLabel = step.gap % 1 === 0 ? String(step.gap) : step.gap.toFixed(1)

  const accent: { icon: LucideIcon; chip: string } = onTarget
    ? {
        icon: CheckCircle2,
        chip: 'border-emerald-500/25 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
      }
    : unknown
      ? { icon: Info, chip: 'border-sky-500/25 bg-sky-500/10 text-sky-600 dark:text-sky-400' }
      : { icon: Target, chip: 'border-rose-500/25 bg-rose-500/10 text-rose-600 dark:text-rose-400' }

  return (
    <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-4 shadow-soft sm:p-5">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
        {step.priority}
      </span>
      <div className="min-w-0 flex-1">
        <div className="mb-1 flex flex-wrap items-center gap-2">
          <span
            className={`flex h-6 w-6 items-center justify-center rounded text-[10px] font-bold ${meta.bgColour} ${meta.colour}`}
          >
            {meta.short}
          </span>
          <h3 className="font-serif text-base font-medium">{headline}</h3>
          <Badge className={`border text-[10px] ${accent.chip}`}>
            <accent.icon className="h-3 w-3" />
            {onTarget
              ? t('ielts.plan.chip.on_target')
              : unknown
                ? t('ielts.plan.chip.baseline_needed')
                : t('ielts.plan.chip.gap', { gap: gapLabel })}
          </Badge>
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">{action}</p>
        <Link
          href={step.href}
          className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
        >
          {t('ielts.plan.cta.practise', { skill: meta.label })}
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  )
}

// ─── Caveat ───────────────────────────────────────────────────────────────────

function PlanCaveat({ t }: { t: TFn }) {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-amber-500/25 bg-amber-500/10 p-4">
      <Info className="mt-0.5 h-4 w-4 shrink-0 text-amber-600 dark:text-amber-500" />
      <p className="text-xs leading-relaxed text-muted-foreground">
        <span className="font-semibold text-foreground">{t('ielts.plan.caveat.strong')}</span>{' '}
        {t('ielts.plan.caveat.body')}
      </p>
    </div>
  )
}
