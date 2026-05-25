'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  ClipboardCheck,
  Clock,
  Dumbbell,
  Flag,
  Info,
  Save,
  Sparkles,
  Target,
  type LucideIcon,
} from 'lucide-react'

import { Button } from '@/components/ui/button'

import { bandLabel, bandColour, bandBgColour, bandTier } from '@/lib/ielts/bands'
import {
  LEVELS,
  levelMeta,
  unitsForSkill,
  type IeltsLevel,
  type Unit,
} from '@/lib/ielts/curriculum'
import {
  buildIeltsProfile,
  daysUntilExam,
  getDiagnostic,
  getGoals,
  setGoals,
  type DiagnosticResult,
  type IeltsGoals,
} from '@/lib/ielts/store'
import {
  IELTS_SKILLS,
  SKILL_META,
  type Band,
  type IeltsProfile,
  type IeltsSkill,
} from '@/lib/ielts/types'

// ─── IELTS Study Planner (exam-date, time-aware) ────────────────────────────
// Sibling to /ielts/plan (the weakest-first band-gap plan). This page adds the
// TIME dimension: it takes the saved exam date + current level + the learner's
// weakest skills and lays out a DATED schedule working backwards from the exam,
// front-loading weak skills and reserving the final week for a full mock. A
// separate "what can I do right now?" panel turns "I have 15/30/60 minutes" into
// one concrete, correctly-sized next action. All goals persist through the
// store's setGoals/getGoals — no parallel localStorage keys.
// ────────────────────────────────────────────────────────────────────────────

// Selectable target bands (the bands realistically targeted by Academic test-takers).
const TARGET_BANDS: Band[] = [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9]
const DEFAULT_TARGET: Band = 6.5

const PRACTICE_HREF: Record<IeltsSkill, string> = {
  listening: '/ielts/listening',
  reading: '/ielts/reading',
  writing: '/ielts/writing',
  speaking: '/ielts/speaking',
}

const MS_PER_DAY = 86_400_000

// ─── Current-band resolution (practice beats placement; unknown = baseline) ──
// Mirrors /ielts/plan: a real practice attempt always wins over the diagnostic
// estimate so the plan reacts to actual progress.
function resolveCurrent(
  skill: IeltsSkill,
  profile: IeltsProfile | null,
  diagnostic: DiagnosticResult | null,
): { band: Band | null; source: 'practice' | 'placement' | 'none' } {
  const practice = profile?.skills[skill]?.band ?? null
  if (practice !== null) return { band: practice, source: 'practice' }
  const placement = diagnostic?.estimatedBands[skill] ?? null
  if (placement !== null) return { band: placement, source: 'placement' }
  return { band: null, source: 'none' }
}

interface RankedSkill {
  skill: IeltsSkill
  current: Band | null
  gap: number // target - current (0 when unknown or already met)
  /** Lower rank = more urgent. Weakest measured gap first, then unknowns. */
  weight: number
}

// Weakest-first ordering used to front-load the schedule. Largest measured gap
// is most urgent; unknown skills come next (still worth a baseline); on-target
// skills sink to the bottom.
function rankSkills(
  target: Band,
  profile: IeltsProfile | null,
  diagnostic: DiagnosticResult | null,
): RankedSkill[] {
  const rows: RankedSkill[] = IELTS_SKILLS.map((skill) => {
    const { band } = resolveCurrent(skill, profile, diagnostic)
    const gap = band === null ? 0 : Math.max(0, target - band)
    // weight: smaller = higher priority. Measured gaps get negative weight
    // proportional to size; unknowns sit at 0; met skills at +1.
    const weight = band === null ? 0 : gap > 0 ? -gap : 1
    return { skill, current: band, gap, weight }
  })
  return rows.sort((a, b) => a.weight - b.weight)
}

// ─── Dated plan generation ──────────────────────────────────────────────────
// We split the runway into BLOCKS. With a comfortable runway we use 7-day
// weeks; very far out (a long campaign) we collapse into multi-week PHASES so
// the list stays scannable; very close to the exam we still show whole weeks
// but compress focus. Each block names a focus skill (cycling weakest-first),
// the units to learn for it (from UNITS via unitsForSkill), the matching
// practice link, and — in the final block — a full mock.

type BlockKind = 'learn-practice' | 'consolidate' | 'mock-week'

interface PlanBlock {
  index: number
  kind: BlockKind
  label: string // "Week 1", "Phase 1 (weeks 1–3)", "Final week"
  startOffsetDays: number // days from today to block start
  spanDays: number
  focus: IeltsSkill[] // skills to front-load this block (1–2)
  learnUnits: Unit[] // concrete units to study this block
  includeMock: boolean
  note: string
}

interface Milestone {
  label: string
  whenDays: number // days from today
  done?: boolean
}

interface GeneratedPlan {
  blocks: PlanBlock[]
  milestones: Milestone[]
  mode: 'weeks' | 'phases'
  weeks: number
}

function addDays(base: Date, days: number): Date {
  return new Date(base.getTime() + days * MS_PER_DAY)
}

// Build the dated, weakest-first schedule from the runway + ranked skills.
function generatePlan(daysLeft: number, ranked: RankedSkill[], level: IeltsLevel): GeneratedPlan {
  // Skills ordered weakest-first; rotate them through the blocks so the most
  // urgent skill is touched earliest and most often.
  const focusOrder = ranked.map((r) => r.skill)
  const weeks = Math.max(1, Math.ceil(daysLeft / 7))

  // Cap how many learn-units we surface per block so it stays achievable;
  // foundation learners get a slightly heavier learn load early on.
  const unitsPerBlock = level === 'foundation' ? 3 : 2

  // Track which units we've already scheduled per skill so we don't repeat.
  const used: Record<IeltsSkill, number> = {
    listening: 0,
    reading: 0,
    writing: 0,
    speaking: 0,
  }
  function nextUnits(skill: IeltsSkill, count: number): Unit[] {
    const all = unitsForSkill(skill)
    const start = used[skill]
    const slice = all.slice(start, start + count)
    used[skill] = Math.min(all.length, start + count)
    // If we've exhausted a skill's units, wrap so later blocks still have
    // something concrete to revise.
    if (slice.length < count && all.length > 0) {
      const wrap = all.slice(0, count - slice.length)
      return [...slice, ...wrap]
    }
    return slice
  }

  const phaseMode = weeks > 10
  const blocks: PlanBlock[] = []

  if (phaseMode) {
    // Long runway → 4 phases: Foundations, Build technique, Sharpen, Exam-ready.
    const phaseNames = [
      'Phase 1 — Foundations & weak spots',
      'Phase 2 — Build technique across all four skills',
      'Phase 3 — Sharpen under time pressure',
      'Phase 4 — Exam-ready & full mocks',
    ]
    const phaseSpan = Math.floor(weeks / 4)
    let weekCursor = 0
    for (let p = 0; p < 4; p++) {
      const isLast = p === 3
      const spanWeeks = isLast ? weeks - weekCursor : phaseSpan
      const startWeek = weekCursor + 1
      const endWeek = weekCursor + spanWeeks
      // Phase 1 & 2 front-load the two weakest skills; later phases cover all.
      const focus = p === 0 ? focusOrder.slice(0, 2) : p === 1 ? focusOrder.slice(0, 3) : focusOrder
      const learnUnits = focus.flatMap((s) => nextUnits(s, p < 2 ? unitsPerBlock : 1))
      blocks.push({
        index: p,
        kind: isLast ? 'mock-week' : p === 2 ? 'consolidate' : 'learn-practice',
        label:
          spanWeeks <= 1
            ? `${phaseNames[p]} (week ${startWeek})`
            : `${phaseNames[p]} (weeks ${startWeek}–${endWeek})`,
        startOffsetDays: weekCursor * 7,
        spanDays: spanWeeks * 7,
        focus,
        learnUnits,
        includeMock: isLast,
        note: phaseNote(p, focus),
      })
      weekCursor += spanWeeks
    }
  } else {
    // Comfortable / tight runway → week-by-week.
    for (let w = 0; w < weeks; w++) {
      const isFinal = w === weeks - 1
      const isPenultimate = w === weeks - 2 && weeks >= 3
      // Cycle the weakest-first order across weeks, 1 primary focus + 1 secondary.
      const primary = focusOrder[w % focusOrder.length]
      const secondary = focusOrder[(w + 1) % focusOrder.length]
      const focus = isFinal ? focusOrder : [primary, secondary]
      const learnUnits = isFinal
        ? []
        : focus.flatMap((s) => nextUnits(s, s === primary ? unitsPerBlock : 1))
      blocks.push({
        index: w,
        kind: isFinal ? 'mock-week' : isPenultimate ? 'consolidate' : 'learn-practice',
        label: isFinal ? `Final week — exam ready` : `Week ${w + 1}`,
        startOffsetDays: w * 7,
        spanDays: 7,
        focus,
        learnUnits,
        includeMock: isFinal,
        note: isFinal
          ? 'Sit a full timed mock, review every mistake, and rest the day before.'
          : isPenultimate
            ? 'Consolidate: redo your weakest question types and a half-length timed set.'
            : weekNote(primary, secondary),
      })
    }
  }

  // ── Milestones (anchored to the runway) ──
  const milestones: Milestone[] = []
  milestones.push({ label: 'Plan starts — first focus session', whenDays: 0 })
  if (daysLeft >= 21) {
    milestones.push({
      label: `Mid-point check-in — re-take the diagnostic`,
      whenDays: Math.round(daysLeft / 2),
    })
  }
  if (daysLeft >= 7) {
    milestones.push({ label: 'Full mock exam', whenDays: Math.max(0, daysLeft - 5) })
  }
  milestones.push({ label: 'Rest & light review', whenDays: Math.max(0, daysLeft - 1) })
  milestones.push({ label: 'Exam day', whenDays: daysLeft })

  return { blocks, milestones, mode: phaseMode ? 'phases' : 'weeks', weeks }
}

function weekNote(primary: IeltsSkill, secondary: IeltsSkill): string {
  return `Main focus: ${SKILL_META[primary].label}. Keep ${SKILL_META[
    secondary
  ].label.toLowerCase()} warm with one short set.`
}

function phaseNote(phase: number, focus: IeltsSkill[]): string {
  const list = focus.map((s) => SKILL_META[s].label).join(', ')
  switch (phase) {
    case 0:
      return `Get the fundamentals solid and attack your weakest skills first: ${list}.`
    case 1:
      return `Learn a reliable method for every question type across ${list}.`
    case 2:
      return 'Practise everything to time. Tighten accuracy and pacing on all four skills.'
    default:
      return 'Full timed mocks, targeted fixes from each mock, and confidence work.'
  }
}

// ─── Time-aware "right now" suggestion ──────────────────────────────────────
// Maps a session length to ONE correctly-sized action. 15 min → a single
// lesson; 30 min → a focused practice section; 60 min → a full mock (or a long
// practice if a mock feels too heavy this early). Always points at the weakest
// skill so the scarce minutes go where they matter most.

type Minutes = 15 | 30 | 60

interface RightNowAction {
  kind: 'learn' | 'practice' | 'mock'
  title: string
  body: string
  href: string
  cta: string
  icon: LucideIcon
}

function rightNowAction(
  minutes: Minutes,
  weakest: IeltsSkill | null,
  ranked: RankedSkill[],
): RightNowAction {
  // Pick the skill to target: explicit weakest from the profile, else the top
  // of the weakest-first ranking, else reading as a safe default.
  const target = weakest ?? ranked[0]?.skill ?? 'reading'
  const meta = SKILL_META[target]
  const firstUnit = unitsForSkill(target)[0]

  if (minutes === 15) {
    return {
      kind: 'learn',
      title: `Learn: ${firstUnit ? firstUnit.title : meta.label}`,
      body: firstUnit
        ? `A focused ${meta.label.toLowerCase()} lesson — ${firstUnit.blurb} Just enough to move one thing forward.`
        : `One short ${meta.label.toLowerCase()} lesson to keep momentum.`,
      href: '/ielts/learn',
      cta: 'Open a lesson',
      icon: BookOpen,
    }
  }

  if (minutes === 30) {
    return {
      kind: 'practice',
      title: `Practise: a ${meta.label} section`,
      body: `Do one timed ${meta.label.toLowerCase()} section, then read every answer explanation. This is where your weakest skill improves fastest.`,
      href: PRACTICE_HREF[target],
      cta: `Start ${meta.label.toLowerCase()} practice`,
      icon: Dumbbell,
    }
  }

  // 60 minutes
  return {
    kind: 'mock',
    title: 'Sit a full mock section (or a mini mock)',
    body: 'An hour is enough for a full Listening or Reading test under exam conditions — the single best way to build stamina and spot weak points. Mark it and note what to fix.',
    href: '/ielts/mock',
    cta: 'Go to mock exams',
    icon: ClipboardCheck,
  }
}

// ─── Page ───────────────────────────────────────────────────────────────────

export default function IeltsPlannerPage() {
  const [loaded, setLoaded] = useState(false)
  const [profile, setProfile] = useState<IeltsProfile | null>(null)
  const [diagnostic, setDiagnostic] = useState<DiagnosticResult | null>(null)

  // Live goal state (the form is the source of truth once mounted).
  const [goals, setGoalsState] = useState<IeltsGoals>({})
  const [savedTick, setSavedTick] = useState(0) // bumps the "saved" confirmation
  const [minutes, setMinutes] = useState<Minutes>(30)

  // Hydrate from the store on mount (localStorage is client-only).
  useEffect(() => {
    const g = getGoals()
    const diag = getDiagnostic()
    // Pre-fill a sensible target from the diagnostic overall when none saved.
    const seededTarget =
      g.targetBand ??
      (diag?.overall != null ? (Math.min(9, diag.overall + 1) as Band) : DEFAULT_TARGET)
    setGoalsState({ ...g, targetBand: seededTarget })
    setProfile(buildIeltsProfile())
    setDiagnostic(diag)
    setLoaded(true)
  }, [])

  const daysLeft = useMemo(() => {
    if (!goals.examDate) return null
    const ms = new Date(`${goals.examDate}T00:00:00`).getTime() - Date.now()
    return Math.max(0, Math.ceil(ms / MS_PER_DAY))
  }, [goals.examDate])

  const target = goals.targetBand ?? DEFAULT_TARGET
  const level: IeltsLevel = goals.level ?? 'foundation'

  const ranked = useMemo(
    () => rankSkills(target, profile, diagnostic),
    [target, profile, diagnostic],
  )

  const plan = useMemo(
    () => (daysLeft !== null ? generatePlan(daysLeft, ranked, level) : null),
    [daysLeft, ranked, level],
  )

  const weakest = profile?.weakestSkill ?? ranked[0]?.skill ?? null
  const action = useMemo(() => rightNowAction(minutes, weakest, ranked), [minutes, weakest, ranked])

  const today = useMemo(() => new Date(), [])

  // ── Persist via the store (single source of truth) ──
  function saveField(patch: IeltsGoals) {
    const next = { ...goals, ...patch }
    setGoalsState(next)
    setGoals(patch) // store merges with existing
    setSavedTick((n) => n + 1)
  }

  const hasGoals = Boolean(goals.examDate) || Boolean(goals.level) || Boolean(goals.targetBand)
  const hasExamDate = Boolean(goals.examDate)

  if (!loaded) {
    return (
      <main className="min-h-screen bg-background">
        <PlannerHeader />
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
          <div className="animate-pulse space-y-4">
            <div className="mx-auto h-8 w-64 rounded bg-muted" />
            <div className="mx-auto h-4 w-96 rounded bg-muted" />
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      <PlannerHeader />

      <div className="mx-auto max-w-4xl space-y-12 px-4 py-8 sm:px-6 sm:py-12">
        {/* ── Countdown banner (only once an exam date is set) ── */}
        {daysLeft !== null && (
          <Countdown daysLeft={daysLeft} examDate={goals.examDate!} target={target} />
        )}

        {/* ── Goals form ── */}
        <GoalsForm
          goals={goals}
          target={target}
          level={level}
          savedTick={savedTick}
          onSave={saveField}
        />

        {/* ── Time-aware "right now" panel (always useful) ── */}
        <RightNowPanel minutes={minutes} onMinutes={setMinutes} action={action} weakest={weakest} />

        {/* ── Dated plan, or an empty/initial nudge ── */}
        {hasExamDate && plan ? (
          <PlanTimeline
            plan={plan}
            today={today}
            target={target}
            ranked={ranked}
            hasProfileData={Boolean(profile?.hasData) || Boolean(diagnostic)}
          />
        ) : (
          <EmptyPlanState hasGoals={hasGoals} />
        )}

        {/* ── Footer caveat + cross-links ── */}
        <PlannerCaveat />
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button variant="outline" render={<Link href="/ielts/plan" />}>
            <Target className="mr-2 h-4 w-4" />
            See your weakest-first plan
          </Button>
          <Button variant="outline" render={<Link href="/ielts/diagnostic" />}>
            Take the placement test
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </main>
  )
}

// ─── Header ───────────────────────────────────────────────────────────────────

function PlannerHeader() {
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
            <CalendarDays className="h-7 w-7 text-primary" />
          </div>
          <div>
            <h1 className="font-serif text-3xl font-medium tracking-tight sm:text-4xl">
              IELTS Study Planner
            </h1>
            <p className="mt-1 max-w-2xl text-lg text-muted-foreground">
              Tell us your exam date and target band, and we&apos;ll plan backwards from the exam —
              front-loading your weakest skills, week by week.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Countdown ──────────────────────────────────────────────────────────────

function Countdown({
  daysLeft,
  examDate,
  target,
}: {
  daysLeft: number
  examDate: string
  target: Band
}) {
  const weeks = Math.floor(daysLeft / 7)
  const days = daysLeft % 7
  const examLabel = new Date(`${examDate}T00:00:00`).toLocaleDateString('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
  const urgency =
    daysLeft === 0
      ? "It's exam day — you've got this."
      : daysLeft <= 7
        ? 'Final stretch: practise to time, rest well, stay calm.'
        : daysLeft <= 28
          ? "You're close. Tighten technique and sit at least one full mock."
          : 'Plenty of runway — build the habit and the bands will follow.'

  return (
    <section
      className={`rounded-2xl border p-6 shadow-soft sm:p-8 ${bandBgColour(target)}`}
      aria-label="Exam countdown"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
            Countdown to your exam
          </p>
          <p className="mt-1 text-4xl font-bold tracking-tight sm:text-5xl">
            {daysLeft === 0 ? 'Today' : `${daysLeft} ${daysLeft === 1 ? 'day' : 'days'}`}
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            {daysLeft > 7 && (
              <>
                {weeks} {weeks === 1 ? 'week' : 'weeks'}
                {days > 0 && ` and ${days} ${days === 1 ? 'day' : 'days'}`} ·{' '}
              </>
            )}
            {examLabel}
          </p>
        </div>
        <div className="shrink-0 text-left sm:text-right">
          <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
            Target band
          </p>
          <p className={`text-3xl font-bold ${bandColour(target)}`}>{bandLabel(target)}</p>
          <p className="text-[11px] text-muted-foreground">{bandTier(target)}</p>
        </div>
      </div>
      <p className="mt-4 text-sm font-medium text-foreground">{urgency}</p>
    </section>
  )
}

// ─── Goals form ─────────────────────────────────────────────────────────────

function GoalsForm({
  goals,
  target,
  level,
  savedTick,
  onSave,
}: {
  goals: IeltsGoals
  target: Band
  level: IeltsLevel
  savedTick: number
  onSave: (patch: IeltsGoals) => void
}) {
  // Minimum selectable exam date is today (no point planning for the past).
  const todayIso = new Date().toISOString().slice(0, 10)

  return (
    <section className="rounded-xl border border-border bg-card p-6 shadow-soft sm:p-8">
      <div className="mb-6 flex items-center gap-2">
        <Sparkles className="h-5 w-5 text-primary" />
        <h2 className="font-serif text-2xl font-medium tracking-tight">Your goals</h2>
      </div>

      <div className="grid gap-5 sm:grid-cols-3">
        {/* Target band */}
        <div>
          <label
            htmlFor="planner-target"
            className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-muted-foreground"
          >
            Target band
          </label>
          <select
            id="planner-target"
            value={target}
            onChange={(e) => onSave({ targetBand: Number(e.target.value) as Band })}
            className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-base font-semibold outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
          >
            {TARGET_BANDS.map((b) => (
              <option key={b} value={b}>
                Band {bandLabel(b)}
              </option>
            ))}
          </select>
        </div>

        {/* Exam date */}
        <div>
          <label
            htmlFor="planner-date"
            className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-muted-foreground"
          >
            Exam date
          </label>
          <input
            id="planner-date"
            type="date"
            min={todayIso}
            value={goals.examDate ?? ''}
            onChange={(e) => onSave({ examDate: e.target.value || undefined })}
            className="h-[46px] w-full rounded-lg border border-border bg-background px-4 py-2.5 text-base outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>

        {/* Current level */}
        <div>
          <label
            htmlFor="planner-level"
            className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-muted-foreground"
          >
            Your level now
          </label>
          <select
            id="planner-level"
            value={level}
            onChange={(e) => onSave({ level: e.target.value as IeltsLevel })}
            className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-base font-semibold outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
          >
            {LEVELS.map((l) => (
              <option key={l.id} value={l.id}>
                {l.label} ({l.bandRange})
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between gap-3">
        <p className="text-xs leading-relaxed text-muted-foreground">{levelMeta(level).blurb}</p>
        {savedTick > 0 && (
          <span
            key={savedTick}
            className="inline-flex shrink-0 items-center gap-1.5 text-xs font-medium text-emerald-600 dark:text-emerald-400"
          >
            <Save className="h-3.5 w-3.5" />
            Saved
          </span>
        )}
      </div>
    </section>
  )
}

// ─── Time-aware "right now" panel ────────────────────────────────────────────

const MINUTE_OPTIONS: Minutes[] = [15, 30, 60]

function RightNowPanel({
  minutes,
  onMinutes,
  action,
  weakest,
}: {
  minutes: Minutes
  onMinutes: (m: Minutes) => void
  action: RightNowAction
  weakest: IeltsSkill | null
}) {
  return (
    <section className="rounded-xl border border-border bg-card p-6 shadow-soft sm:p-8">
      <div className="mb-1 flex items-center gap-2">
        <Clock className="h-5 w-5 text-primary" />
        <h2 className="font-serif text-2xl font-medium tracking-tight">What can I do right now?</h2>
      </div>
      <p className="mb-5 text-sm text-muted-foreground">
        Tell us how long you&apos;ve got and we&apos;ll pick one thing
        {weakest ? <> — aimed at your weakest skill, {SKILL_META[weakest].label}.</> : '.'}
      </p>

      {/* Minutes selector */}
      <div
        className="mb-5 inline-flex rounded-lg border border-border bg-background p-1"
        role="group"
        aria-label="Time available"
      >
        {MINUTE_OPTIONS.map((m) => (
          <button
            key={m}
            type="button"
            onClick={() => onMinutes(m)}
            aria-pressed={minutes === m}
            className={`rounded-md px-4 py-2 text-sm font-semibold transition-colors ${
              minutes === m
                ? 'bg-primary text-primary-foreground shadow-sm'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            {m} min
          </button>
        ))}
      </div>

      {/* Live recommendation */}
      <div className="flex items-start gap-4 rounded-xl border border-primary/20 bg-primary/[0.04] p-4 sm:p-5">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <action.icon className="h-5 w-5" />
        </span>
        <div className="min-w-0 flex-1">
          <h3 className="font-serif text-base font-medium">{action.title}</h3>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{action.body}</p>
          <Button size="sm" className="mt-3" render={<Link href={action.href} />}>
            {action.cta}
            <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
          </Button>
        </div>
      </div>
    </section>
  )
}

// ─── Dated plan timeline ─────────────────────────────────────────────────────

const BLOCK_ICON: Record<BlockKind, LucideIcon> = {
  'learn-practice': BookOpen,
  consolidate: Dumbbell,
  'mock-week': ClipboardCheck,
}

function PlanTimeline({
  plan,
  today,
  target,
  ranked,
  hasProfileData,
}: {
  plan: GeneratedPlan
  today: Date
  target: Band
  ranked: RankedSkill[]
  hasProfileData: boolean
}) {
  const weakestTwo = ranked.slice(0, 2).map((r) => SKILL_META[r.skill].label)

  return (
    <section>
      <div className="mb-2 flex items-center gap-2">
        <CalendarDays className="h-5 w-5 text-primary" />
        <h2 className="font-serif text-2xl font-medium tracking-tight">Your dated plan</h2>
      </div>
      <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
        {plan.mode === 'phases' ? (
          <>
            With {plan.weeks} weeks to go, here&apos;s a phased plan towards Band{' '}
            {bandLabel(target)}. It opens on your weakest skills
            {weakestTwo.length ? <> ({weakestTwo.join(' and ')})</> : null} and builds to full mocks
            before the exam.
          </>
        ) : (
          <>
            A week-by-week plan towards Band {bandLabel(target)}, front-loading your weakest skills
            {weakestTwo.length ? <> ({weakestTwo.join(' and ')})</> : null} and finishing with a
            full mock.
          </>
        )}
      </p>

      {!hasProfileData && (
        <div className="mb-5 flex items-start gap-3 rounded-xl border border-sky-500/25 bg-sky-500/10 p-4">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-sky-600 dark:text-sky-500" />
          <p className="text-xs leading-relaxed text-muted-foreground">
            We don&apos;t have any results yet, so this plan starts even across all four skills.{' '}
            <Link href="/ielts/diagnostic" className="font-medium text-primary hover:underline">
              Take the 10-minute placement test
            </Link>{' '}
            and the plan will re-focus on your real weak spots.
          </p>
        </div>
      )}

      {/* Milestones strip */}
      <Milestones milestones={plan.milestones} today={today} />

      {/* Blocks */}
      <ol className="mt-6 space-y-3">
        {plan.blocks.map((block) => (
          <PlanBlockCard key={block.index} block={block} today={today} />
        ))}
      </ol>
    </section>
  )
}

function Milestones({ milestones, today }: { milestones: Milestone[]; today: Date }) {
  return (
    <div className="rounded-xl border border-border bg-muted/30 p-4">
      <p className="mb-3 flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-muted-foreground">
        <Flag className="h-3.5 w-3.5" />
        Milestones
      </p>
      <ul className="grid gap-2 sm:grid-cols-2">
        {milestones.map((m, i) => {
          const date = new Date(today.getTime() + m.whenDays * MS_PER_DAY)
          const dateLabel = date.toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'short',
          })
          return (
            <li key={i} className="flex items-center gap-2 text-sm">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 font-mono text-[11px] font-semibold text-primary">
                {m.whenDays === 0 ? '0' : `${m.whenDays}d`}
              </span>
              <span className="text-foreground">{m.label}</span>
              <span className="ml-auto shrink-0 font-mono text-[11px] text-muted-foreground">
                {dateLabel}
              </span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

function PlanBlockCard({ block, today }: { block: PlanBlock; today: Date }) {
  const Icon = BLOCK_ICON[block.kind]
  const start = new Date(today.getTime() + block.startOffsetDays * MS_PER_DAY)
  const end = new Date(today.getTime() + (block.startOffsetDays + block.spanDays - 1) * MS_PER_DAY)
  const fmt = (d: Date) => d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })
  const dateRange = block.spanDays <= 1 ? fmt(start) : `${fmt(start)} – ${fmt(end)}`

  return (
    <li className="rounded-xl border border-border bg-card p-4 shadow-soft sm:p-5">
      <div className="flex items-start gap-4">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Icon className="h-4.5 w-4.5" />
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <h3 className="font-serif text-base font-medium">{block.label}</h3>
            <span className="font-mono text-[11px] text-muted-foreground">{dateRange}</span>
          </div>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{block.note}</p>

          {/* Learn items */}
          {block.learnUnits.length > 0 && (
            <div className="mt-3">
              <p className="mb-1.5 flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                <BookOpen className="h-3 w-3" />
                Learn
              </p>
              <ul className="space-y-1">
                {block.learnUnits.map((u) => (
                  <li key={`${block.index}-${u.id}`} className="text-sm">
                    <Link
                      href="/ielts/learn"
                      className="inline-flex items-baseline gap-1.5 text-foreground hover:text-primary"
                    >
                      <span
                        className={`font-mono text-[10px] font-semibold ${
                          u.skill === 'foundation'
                            ? 'text-muted-foreground'
                            : SKILL_META[u.skill].colour
                        }`}
                      >
                        {u.skill === 'foundation' ? 'F' : SKILL_META[u.skill].short}
                      </span>
                      {u.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Practice links for the focus skills */}
          <div className="mt-3 flex flex-wrap gap-2">
            {block.focus.map((skill) => (
              <Link
                key={`${block.index}-prac-${skill}`}
                href={PRACTICE_HREF[skill]}
                className={`inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1 text-xs font-medium transition-colors hover:border-primary/40 ${SKILL_META[skill].bgColour} ${SKILL_META[skill].colour}`}
              >
                <Dumbbell className="h-3 w-3" />
                Practise {SKILL_META[skill].label.toLowerCase()}
              </Link>
            ))}
            {block.includeMock && (
              <Link
                href="/ielts/mock"
                className="inline-flex items-center gap-1.5 rounded-lg border border-primary/30 bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary transition-colors hover:border-primary/50"
              >
                <ClipboardCheck className="h-3 w-3" />
                Full mock exam
              </Link>
            )}
          </div>
        </div>
      </div>
    </li>
  )
}

// ─── Empty / initial state ───────────────────────────────────────────────────

function EmptyPlanState({ hasGoals }: { hasGoals: boolean }) {
  return (
    <section className="rounded-xl border border-dashed border-border bg-card/50 p-8 text-center sm:p-12">
      <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-muted/50">
        <CalendarDays className="h-8 w-8 text-muted-foreground" />
      </div>
      <h2 className="mb-2 font-serif text-xl font-medium">
        {hasGoals ? 'Add your exam date to build the plan' : 'Set your goals to get a dated plan'}
      </h2>
      <p className="mx-auto mb-6 max-w-md text-sm leading-relaxed text-muted-foreground">
        {hasGoals
          ? 'Pick your exam date above and we’ll lay out a week-by-week schedule that works backwards from the exam, front-loading your weakest skills.'
          : 'Choose a target band, exam date and your current level above. Not sure where you stand? Take the quick placement test first and we’ll tailor the plan to your weak spots.'}
      </p>
      <Button render={<Link href="/ielts/diagnostic" />}>
        <Target className="mr-2 h-4 w-4" />
        Take the placement test
      </Button>
    </section>
  )
}

// ─── Caveat ───────────────────────────────────────────────────────────────────

function PlannerCaveat() {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-amber-500/25 bg-amber-500/10 p-4">
      <Info className="mt-0.5 h-4 w-4 shrink-0 text-amber-600 dark:text-amber-500" />
      <p className="text-xs leading-relaxed text-muted-foreground">
        <span className="font-semibold text-foreground">
          This plan is a guide, not a guarantee.
        </span>{' '}
        It adapts to your exam date and results, but real progress comes from consistent practice.
        Adjust the pace to fit your week — little and often beats cramming.
      </p>
    </div>
  )
}
