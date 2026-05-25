'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
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

interface PlanStep {
  priority: number
  skill: IeltsSkill
  current: Band | null
  target: Band
  gap: number
  headline: string
  action: string
  href: string
  ctaLabel: string
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
    const step = stepCopy(row, target)
    return {
      priority: priority++,
      skill: row.skill,
      current: row.current,
      target,
      gap: row.gap,
      headline: step.headline,
      action: step.action,
      href: meta.href,
      ctaLabel: `Practise ${meta.label}`,
    }
  })
}

function stepCopy(row: SkillRow, target: Band): { headline: string; action: string } {
  const meta = SKILL_META[row.skill]
  const isProductive = row.skill === 'writing' || row.skill === 'speaking'

  if (row.current === null) {
    return {
      headline: `Get a baseline in ${meta.label}`,
      action: `You haven’t practised ${meta.label} yet, so we can’t measure the gap to Band ${bandLabel(target)}. Do one ${isProductive ? 'task with AI feedback' : 'practice set'} to set your starting point — it will reshape this whole plan.`,
    }
  }

  if (row.meetsTarget) {
    return {
      headline: `Hold your ${meta.label} at Band ${bandLabel(row.current)}`,
      action: `You’re already at or above your target of Band ${bandLabel(target)} here. Keep it sharp with occasional timed practice so it doesn’t slip, and pour your energy into your weaker skills first.`,
    }
  }

  const gapLabel = row.gap % 1 === 0 ? String(row.gap) : row.gap.toFixed(1)
  const sizeNote =
    row.gap >= 1.5
      ? 'This is your biggest gap, so it deserves the most time.'
      : row.gap >= 0.5
        ? 'A focused push here should move the needle quickly.'
        : 'You’re close — a little polish should get you there.'

  return {
    headline: `Close a ${gapLabel}-band gap in ${meta.label}`,
    action: `You’re estimated at Band ${bandLabel(row.current)} and aiming for Band ${bandLabel(target)}. ${sizeNote} ${
      isProductive
        ? `Submit a ${meta.label.toLowerCase()} task to get AI band feedback against the official criteria.`
        : `Work through targeted ${meta.label.toLowerCase()} practice sets and review every answer you miss.`
    }`,
  }
}

export default function IeltsPlanPage() {
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
        <PlanHeader />
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
        <PlanHeader />
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-muted/50">
            <Compass className="h-10 w-10 text-muted-foreground" />
          </div>
          <h2 className="mb-3 font-serif text-2xl font-medium">Take the placement test first</h2>
          <p className="mx-auto mb-8 max-w-md leading-relaxed text-muted-foreground">
            Your study plan is built from where you are now. Take the quick placement test and we’ll
            show you your current band per skill, the gap to your target, and exactly what to work
            on first.
          </p>
          <Button size="lg" render={<Link href="/ielts/diagnostic" />}>
            <Target className="mr-2 h-4 w-4" />
            Take the placement test
          </Button>
        </div>
      </main>
    )
  }

  const topGap = plan.find((s) => s.current !== null && s.gap > 0)

  return (
    <main className="min-h-screen bg-background">
      <PlanHeader />

      <div className="mx-auto max-w-4xl space-y-12 px-4 py-8 sm:px-6 sm:py-12">
        {/* ── Target + overall ── */}
        <section className="rounded-xl border border-border bg-card p-6 shadow-soft sm:p-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="mb-2 flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-primary" />
                <h2 className="font-serif text-2xl font-medium tracking-tight">Your target</h2>
              </div>
              <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
                Pick the overall band you’re aiming for. Most universities ask for 6.0–7.0 overall.
                We’ll prioritise your weakest skills to get you there.
              </p>
            </div>
            <div className="shrink-0">
              <label
                htmlFor="target-band"
                className="mb-1.5 block text-xs font-mono uppercase tracking-wider text-muted-foreground"
              >
                Target band
              </label>
              <select
                id="target-band"
                value={target}
                onChange={(e) => setTarget(Number(e.target.value) as Band)}
                className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-base font-semibold outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20 sm:w-40"
              >
                {TARGET_BANDS.map((b) => (
                  <option key={b} value={b}>
                    Band {bandLabel(b)}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Current overall vs target */}
          <div className="mt-6 grid grid-cols-2 gap-3">
            <div className={`rounded-xl border p-4 ${bandBgColour(currentOverall)}`}>
              <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                Current overall
              </p>
              <p className={`text-3xl font-bold ${bandColour(currentOverall)}`}>
                {bandLabel(currentOverall)}
              </p>
              <p className="mt-0.5 text-[11px] text-muted-foreground">{bandTier(currentOverall)}</p>
            </div>
            <div className={`rounded-xl border p-4 ${bandBgColour(target)}`}>
              <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                Target overall
              </p>
              <p className={`text-3xl font-bold ${bandColour(target)}`}>{bandLabel(target)}</p>
              <p className="mt-0.5 text-[11px] text-muted-foreground">{bandTier(target)}</p>
            </div>
          </div>

          {!profile?.hasData && diagnostic && (
            <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
              These figures come from your placement test. Once you complete real practice in each
              module, your plan will update to use those results instead.
            </p>
          )}
        </section>

        {/* ── Current vs target per skill ── */}
        <section>
          <div className="mb-6 flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-primary" />
            <h2 className="font-serif text-2xl font-medium tracking-tight">Where you stand</h2>
          </div>
          <div className="space-y-3">
            {rows.map((row) => (
              <SkillGapRow key={row.skill} row={row} target={target} />
            ))}
          </div>
        </section>

        {/* ── Prioritised plan ── */}
        <section>
          <div className="mb-2 flex items-center gap-2">
            <Target className="h-5 w-5 text-primary" />
            <h2 className="font-serif text-2xl font-medium tracking-tight">
              Your plan — weakest skills first
            </h2>
          </div>
          <p className="mb-6 text-sm text-muted-foreground">
            {topGap
              ? `Start with ${SKILL_META[topGap.skill].label} — it has the largest gap to Band ${bandLabel(target)}. Work down the list in order.`
              : 'You’re meeting your target across the board. Keep practising to stay sharp and consider raising your target.'}
          </p>
          <div className="space-y-3">
            {plan.map((step) => (
              <PlanStepCard key={step.skill} step={step} />
            ))}
          </div>
        </section>

        {/* ── Caveat + refresh CTA ── */}
        <PlanCaveat />

        <div className="flex flex-col gap-3 sm:flex-row">
          <Button variant="outline" render={<Link href="/ielts/diagnostic" />}>
            <Target className="mr-2 h-4 w-4" />
            Retake the placement test
          </Button>
          <Button variant="outline" render={<Link href="/ielts/progress" />}>
            View my progress
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </main>
  )
}

// ─── Header ───────────────────────────────────────────────────────────────────

function PlanHeader() {
  return (
    <section className="border-b border-border bg-card">
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
        <Link
          href="/ielts"
          className="mb-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to IELTS
        </Link>
        <div className="flex items-start gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10">
            <Compass className="h-7 w-7 text-primary" />
          </div>
          <div>
            <h1 className="font-serif text-3xl font-medium tracking-tight sm:text-4xl">
              My IELTS Study Plan
            </h1>
            <p className="mt-1 max-w-2xl text-lg text-muted-foreground">
              A prioritised, weakest-first route to your target band — built from your placement
              test and practice so far.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Skill gap row ──────────────────────────────────────────────────────────

function SkillGapRow({ row, target }: { row: SkillRow; target: Band }) {
  const meta = SKILL_META[row.skill]
  const gapLabel = row.gap % 1 === 0 ? String(row.gap) : row.gap.toFixed(1)

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
            {row.source === 'practice'
              ? 'From practice'
              : row.source === 'placement'
                ? 'From placement'
                : 'Not assessed'}
          </Badge>
        </div>
        <p className="mt-0.5 text-xs text-muted-foreground">
          Current{' '}
          <span className={`font-semibold ${bandColour(row.current)}`}>
            {bandLabel(row.current)}
          </span>{' '}
          · target <span className="font-semibold text-foreground">{bandLabel(target)}</span>
        </p>
      </div>
      <div className="shrink-0 text-right">
        {row.current === null ? (
          <span className="text-xs font-medium text-muted-foreground">No data yet</span>
        ) : row.meetsTarget ? (
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
            <CheckCircle2 className="h-3.5 w-3.5" />
            On target
          </span>
        ) : (
          <span className="text-sm font-bold text-rose-500">+{gapLabel}</span>
        )}
      </div>
    </div>
  )
}

// ─── Plan step card ───────────────────────────────────────────────────────────

function PlanStepCard({ step }: { step: PlanStep }) {
  const meta = SKILL_META[step.skill]
  const onTarget = step.current !== null && step.gap === 0
  const unknown = step.current === null

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
          <h3 className="font-serif text-base font-medium">{step.headline}</h3>
          <Badge className={`border text-[10px] ${accent.chip}`}>
            <accent.icon className="h-3 w-3" />
            {onTarget
              ? 'On target'
              : unknown
                ? 'Baseline needed'
                : `+${step.gap % 1 === 0 ? step.gap : step.gap.toFixed(1)} band`}
          </Badge>
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">{step.action}</p>
        <Link
          href={step.href}
          className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
        >
          {step.ctaLabel}
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  )
}

// ─── Caveat ───────────────────────────────────────────────────────────────────

function PlanCaveat() {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-amber-500/25 bg-amber-500/10 p-4">
      <Info className="mt-0.5 h-4 w-4 shrink-0 text-amber-600 dark:text-amber-500" />
      <p className="text-xs leading-relaxed text-muted-foreground">
        <span className="font-semibold text-foreground">Bands here are estimates.</span> Placement
        and Writing/Speaking self-estimates are starting points, not official results. The more real
        practice you do in each module, the more accurate this plan becomes.
      </p>
    </div>
  )
}
