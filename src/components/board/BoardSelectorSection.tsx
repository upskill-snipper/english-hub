'use client'

import * as React from 'react'
import { useRouter } from 'next/navigation'
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Check,
  GraduationCap,
  Globe2,
  Loader2,
  Sparkles,
  Shapes,
  Award,
  ChevronRight,
} from 'lucide-react'

import { events } from '@/lib/gtag'
import { useBoard, type ExamBoard } from '@/lib/board/board-store'
import { cn } from '@/lib/utils'
import { useT } from '@/lib/i18n/use-t'

/* ────────────────────────────────────────────────────────────────────────────
 * Props
 * ──────────────────────────────────────────────────────────────────────────── */

type Props = {
  /** Where to redirect after a selection (defaults to `/revision`). */
  redirectTo?: string
  /** When true, do not redirect on selection — used by the modal gate. */
  disableRedirect?: boolean
  /** Callback fired after a successful selection. */
  onSelected?: (board: ExamBoard) => void
  /** Compact layout for use inside a modal. */
  compact?: boolean
}

/* ────────────────────────────────────────────────────────────────────────────
 * Types for the funnel
 * ──────────────────────────────────────────────────────────────────────────── */

type StudyLevel = 'ks3' | 'gcse' | 'igcse' | 'ial' | 'a-level'
type AwardingBody =
  | 'aqa'
  | 'edexcel'
  | 'ocr'
  | 'eduqas'
  | 'pearson-igcse'
  | 'cambridge'
  | 'pearson-ial'
  | 'aqa-a-level'
  | 'edexcel-a-level'
  | 'ocr-a-level'
  | 'eduqas-a-level'

/* ────────────────────────────────────────────────────────────────────────────
 * Main component
 * ──────────────────────────────────────────────────────────────────────────── */

export function BoardSelectorSection({
  redirectTo = '/revision',
  disableRedirect = false,
  onSelected,
  compact,
}: Props) {
  const router = useRouter()
  const { board: currentBoard, setBoard } = useBoard()

  const [step, setStep] = React.useState<1 | 2 | 3>(1)
  const [level, setLevel] = React.useState<StudyLevel | null>(null)
  const [awardingBody, setAwardingBody] = React.useState<AwardingBody | null>(null)
  const [loadingBoard, setLoadingBoard] = React.useState<ExamBoard | null>(null)

  /* ── Final selection handler ─────────────────────────────────────────── */

  const handleSelect = React.useCallback(
    async (board: ExamBoard) => {
      if (loadingBoard) return
      setLoadingBoard(board)
      try {
        // Update Zustand + write the cookie via document.cookie so any client
        // UI reading `useBoard()` synchronously sees the new value before we
        // navigate (e.g. the highlighted "current board" tick on Step 3).
        setBoard(board)

        // Fire analytics synchronously — `events.boardSelected` is a sync
        // push to GA4's dataLayer, so it completes before the page tears
        // down on the location change below.
        try {
          events.boardSelected(board)
        } catch {
          /* never break */
        }

        // Allow the host (e.g. <BoardGate> modal) to intercept and handle
        // navigation itself (the modal closes and forwards to its `next`
        // redirect target). When `disableRedirect` is true we never navigate.
        onSelected?.(board)
        if (disableRedirect) return

        // Canonical "explicit board choice" navigation: full reload to
        // `<redirectTo>?setBoard=<board>`. The middleware validates the id,
        // writes the cookie authoritatively (server-side `Set-Cookie`), then
        // redirects to the clean URL — so the server-rendered chrome
        // (sidebar, badge, getServerBoard) re-renders against the new
        // cookie even if Zustand never hydrated. We use `window.location`
        // (not `router.push` + `router.refresh`) because Next.js's client
        // navigation doesn't reliably resend the request with the freshly
        // written cookie on a single tick.
        if (typeof window !== 'undefined') {
          const sep = redirectTo.includes('?') ? '&' : '?'
          window.location.href = `${redirectTo}${sep}setBoard=${encodeURIComponent(board)}`
        } else {
          // SSR fallback (handleSelect should never run server-side, but
          // keep the branch type-safe).
          router.push(redirectTo)
          router.refresh()
        }
      } catch {
        setLoadingBoard(null)
      }
    },
    [disableRedirect, loadingBoard, onSelected, redirectTo, router, setBoard],
  )

  /* ── Step 1 handler ──────────────────────────────────────────────────── */

  const handleLevelPick = React.useCallback(
    (picked: StudyLevel) => {
      if (picked === 'ks3') {
        handleSelect('ks3')
        return
      }
      setLevel(picked)
      setStep(2)
    },
    [handleSelect],
  )

  /* ── Step 2 handler ──────────────────────────────────────────────────── */

  const handleAwardingBodyPick = React.useCallback(
    (body: AwardingBody) => {
      // GCSE boards go directly to done
      if (body === 'aqa') {
        handleSelect('aqa')
        return
      }
      if (body === 'edexcel') {
        handleSelect('edexcel')
        return
      }
      if (body === 'ocr') {
        handleSelect('ocr')
        return
      }
      if (body === 'eduqas') {
        handleSelect('eduqas')
        return
      }

      // IAL has only one awarding body — done immediately
      if (body === 'pearson-ial') {
        handleSelect('ial-edexcel')
        return
      }

      // UK A-Level boards — each maps 1:1 to an ExamBoard
      if (body === 'aqa-a-level') {
        handleSelect('aqa-a-level')
        return
      }
      if (body === 'edexcel-a-level') {
        handleSelect('edexcel-a-level')
        return
      }
      if (body === 'ocr-a-level') {
        handleSelect('ocr-a-level')
        return
      }
      if (body === 'eduqas-a-level') {
        handleSelect('eduqas-a-level')
        return
      }

      // IGCSE awarding bodies go to Step 3 for paper selection
      setAwardingBody(body)
      setStep(3)
    },
    [handleSelect],
  )

  /* ── Navigation helpers ──────────────────────────────────────────────── */

  const goBackToStep1 = React.useCallback(() => {
    setLevel(null)
    setAwardingBody(null)
    setStep(1)
  }, [])

  const goBackToStep2 = React.useCallback(() => {
    setAwardingBody(null)
    setStep(2)
  }, [])

  /* ── Breadcrumb ──────────────────────────────────────────────────────── */

  const breadcrumbParts = React.useMemo(() => {
    const parts: string[] = []
    if (level) {
      if (level === 'ial') parts.push('IAL')
      else if (level === 'a-level') parts.push('A-Level')
      else parts.push(level.toUpperCase())
    }
    if (awardingBody) {
      if (awardingBody === 'pearson-igcse' || awardingBody === 'pearson-ial')
        parts.push('Pearson Edexcel')
      else if (awardingBody === 'cambridge') parts.push('Cambridge')
      else if (awardingBody === 'aqa-a-level') parts.push('AQA')
      else if (awardingBody === 'edexcel-a-level') parts.push('Pearson Edexcel')
      else if (awardingBody === 'ocr-a-level') parts.push('OCR')
      else if (awardingBody === 'eduqas-a-level') parts.push('WJEC Eduqas')
      else parts.push(awardingBody.charAt(0).toUpperCase() + awardingBody.slice(1))
    }
    return parts
  }, [level, awardingBody])

  /* ── Total steps for current path ────────────────────────────────────── */

  const totalSteps = React.useMemo(() => {
    if (!level) return 1
    if (level === 'ks3') return 1
    if (level === 'igcse') return 3
    // GCSE, IAL and UK A-Level are 2-step (level + awarding body)
    return 2
  }, [level])

  /* ── Render ──────────────────────────────────────────────────────────── */

  if (step === 1) {
    return (
      <LevelStep onPick={handleLevelPick} loadingKs3={loadingBoard === 'ks3'} compact={compact} />
    )
  }

  if (step === 2 && level) {
    return (
      <AwardingBodyStep
        level={level}
        loadingBoard={loadingBoard}
        compact={compact}
        currentStep={2}
        totalSteps={totalSteps}
        onBack={goBackToStep1}
        onPick={handleAwardingBodyPick}
      />
    )
  }

  if (step === 3 && level === 'igcse' && awardingBody) {
    return (
      <PaperStep
        awardingBody={awardingBody}
        breadcrumbParts={breadcrumbParts}
        loadingBoard={loadingBoard}
        currentBoard={currentBoard}
        compact={compact}
        onBack={goBackToStep2}
        onSelect={handleSelect}
      />
    )
  }

  // Fallback — should not happen, but reset just in case
  return <LevelStep onPick={handleLevelPick} loadingKs3={false} compact={compact} />
}

/* ═══════════════════════════════════════════════════════════════════════════
 * STEP 1 — Study level
 * ═══════════════════════════════════════════════════════════════════════════ */

function LevelStep({
  onPick,
  loadingKs3,
  compact,
}: {
  onPick: (level: StudyLevel) => void
  loadingKs3: boolean
  compact?: boolean
}) {
  const t = useT()
  return (
    <div className="flex flex-col gap-10">
      <header className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/60 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary backdrop-blur-md">
          <Sparkles className="size-3.5" aria-hidden="true" />
          {t('board.welcome')}
        </span>
        <h1 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          {t('board.level.title')}
        </h1>
        <p className="text-base text-muted-foreground sm:text-lg">{t('board.level.subtitle')}</p>
      </header>

      <div
        className={cn(
          'mx-auto grid w-full max-w-6xl gap-5',
          'sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5',
        )}
      >
        <LevelCard
          label="KS3"
          subLabel={t('board.level.ks3.years')}
          description={t('board.level.ks3.desc')}
          icon={Shapes}
          gradient="from-emerald-500/20 via-green-500/10 to-lime-500/20"
          iconGradient="from-emerald-500 to-green-600"
          onClick={() => onPick('ks3')}
          loading={loadingKs3}
          compact={compact}
        />
        <LevelCard
          label="GCSE"
          subLabel={t('board.level.gcse.years')}
          description={t('board.level.gcse.desc')}
          icon={GraduationCap}
          gradient="from-teal-500/20 via-cyan-500/10 to-teal-500/20"
          iconGradient="from-teal-500 to-cyan-600"
          onClick={() => onPick('gcse')}
          compact={compact}
        />
        <LevelCard
          label="IGCSE"
          subLabel={t('board.level.igcse.years')}
          description={t('board.level.igcse.desc')}
          icon={Globe2}
          gradient="from-indigo-500/20 via-violet-500/10 to-fuchsia-500/20"
          iconGradient="from-indigo-500 to-violet-500"
          onClick={() => onPick('igcse')}
          compact={compact}
        />
        <LevelCard
          label="A-Level"
          subLabel={t('board.level.a_level.years')}
          description={t('board.level.a_level.desc')}
          icon={GraduationCap}
          gradient="from-purple-500/20 via-fuchsia-500/10 to-pink-500/20"
          iconGradient="from-purple-500 to-fuchsia-600"
          onClick={() => onPick('a-level')}
          compact={compact}
        />
        <LevelCard
          label="IAL"
          subLabel={t('board.level.ial.years')}
          description={t('board.level.ial.desc')}
          icon={Award}
          gradient="from-amber-500/20 via-orange-500/10 to-yellow-500/20"
          iconGradient="from-amber-500 to-orange-600"
          onClick={() => onPick('ial')}
          compact={compact}
        />
      </div>

      <p className="mx-auto max-w-xl text-center text-xs text-muted-foreground">
        {t('board.level.footer_hint')}
      </p>
    </div>
  )
}

/* ── Level card ────────────────────────────────────────────────────────── */

function LevelCard({
  label,
  subLabel,
  description,
  icon: Icon,
  gradient,
  iconGradient,
  onClick,
  loading,
  compact,
}: {
  label: string
  subLabel: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  gradient: string
  iconGradient: string
  onClick: () => void
  loading?: boolean
  compact?: boolean
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={loading}
      className={cn(
        'group relative flex flex-col overflow-hidden rounded-3xl border border-border/60 bg-card/60 text-left',
        'backdrop-blur-xl backdrop-saturate-150',
        'shadow-lg shadow-black/5 dark:shadow-black/20',
        'transition-all duration-300 ease-out outline-none',
        'hover:border-primary/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10',
        'focus-visible:border-ring focus-visible:ring-4 focus-visible:ring-ring/20',
        'disabled:pointer-events-none disabled:opacity-70',
        compact ? 'p-6' : 'p-8',
      )}
    >
      {/* Glass gradient overlay */}
      <div
        aria-hidden="true"
        className={cn(
          'absolute inset-0 bg-gradient-to-br opacity-50 transition-opacity duration-300 group-hover:opacity-80',
          gradient,
        )}
      />
      {/* Inner content */}
      <div className="relative flex flex-col gap-5">
        <div className="flex items-start justify-between">
          <div
            className={cn(
              'inline-flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-lg',
              'transition-transform duration-300 group-hover:scale-110',
              iconGradient,
              compact && 'size-11',
            )}
          >
            {loading ? (
              <Loader2 className="size-7 animate-spin" aria-hidden="true" />
            ) : (
              <Icon className={cn('size-7', compact && 'size-5')} aria-hidden="true" />
            )}
          </div>
          <ArrowRight
            className="size-5 text-muted-foreground transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary"
            aria-hidden="true"
          />
        </div>

        <div className="flex flex-col gap-1">
          <p className="font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            {subLabel}
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground">
            {label}
          </h2>
        </div>

        <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
      </div>
    </button>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
 * STEP 2 — Awarding body
 * ═══════════════════════════════════════════════════════════════════════════ */

type AwardingBodyOption = {
  id: AwardingBody
  label: string
  /** Dictionary key for the body subtitle (resolved at render). */
  subtitleKey: string
  icon: React.ComponentType<{ className?: string }>
  gradient: string
  ring: string
  iconBg: string
  iconText: string
  accent: string
}

const GCSE_BODIES: AwardingBodyOption[] = [
  {
    id: 'aqa',
    label: 'AQA',
    subtitleKey: 'board.body_subtitle.aqa_gcse',
    icon: BookOpen,
    gradient: 'from-rose-500/10 via-rose-500/5 to-transparent',
    ring: 'hover:ring-rose-400/40',
    iconBg: 'bg-rose-500/10 group-hover:bg-rose-500/20',
    iconText: 'text-rose-500 dark:text-rose-400',
    accent: 'bg-rose-500',
  },
  {
    id: 'edexcel',
    label: 'Pearson Edexcel',
    subtitleKey: 'board.body_subtitle.edexcel_gcse',
    icon: GraduationCap,
    gradient: 'from-blue-500/10 via-blue-500/5 to-transparent',
    ring: 'hover:ring-blue-400/40',
    iconBg: 'bg-blue-500/10 group-hover:bg-blue-500/20',
    iconText: 'text-blue-500 dark:text-blue-400',
    accent: 'bg-blue-500',
  },
  {
    id: 'ocr',
    label: 'OCR',
    subtitleKey: 'board.body_subtitle.ocr_gcse',
    icon: Sparkles,
    gradient: 'from-amber-500/10 via-amber-500/5 to-transparent',
    ring: 'hover:ring-amber-400/40',
    iconBg: 'bg-amber-500/10 group-hover:bg-amber-500/20',
    iconText: 'text-amber-500',
    accent: 'bg-amber-500',
  },
  {
    id: 'eduqas',
    label: 'WJEC Eduqas',
    subtitleKey: 'board.body_subtitle.eduqas_gcse',
    icon: BookOpen,
    gradient: 'from-teal-500/10 via-teal-500/5 to-transparent',
    ring: 'hover:ring-teal-400/40',
    iconBg: 'bg-teal-500/10 group-hover:bg-teal-500/20',
    iconText: 'text-teal-500 dark:text-teal-400',
    accent: 'bg-teal-500',
  },
]

const IGCSE_BODIES: AwardingBodyOption[] = [
  {
    id: 'pearson-igcse',
    label: 'Pearson Edexcel',
    subtitleKey: 'board.body_subtitle.edexcel_igcse',
    icon: GraduationCap,
    gradient: 'from-indigo-500/10 via-indigo-500/5 to-transparent',
    ring: 'hover:ring-indigo-400/40',
    iconBg: 'bg-indigo-500/10 group-hover:bg-indigo-500/20',
    iconText: 'text-indigo-500 dark:text-indigo-400',
    accent: 'bg-indigo-500',
  },
  {
    id: 'cambridge',
    label: 'Cambridge',
    subtitleKey: 'board.body_subtitle.cambridge_igcse',
    icon: Globe2,
    gradient: 'from-violet-500/10 via-violet-500/5 to-transparent',
    ring: 'hover:ring-violet-400/40',
    iconBg: 'bg-violet-500/10 group-hover:bg-violet-500/20',
    iconText: 'text-violet-500 dark:text-violet-400',
    accent: 'bg-violet-500',
  },
]

const IAL_BODIES: AwardingBodyOption[] = [
  {
    id: 'pearson-ial',
    label: 'Pearson Edexcel',
    subtitleKey: 'board.body_subtitle.edexcel_ial',
    icon: Award,
    gradient: 'from-amber-500/10 via-amber-500/5 to-transparent',
    ring: 'hover:ring-amber-400/40',
    iconBg: 'bg-amber-500/10 group-hover:bg-amber-500/20',
    iconText: 'text-amber-600',
    accent: 'bg-amber-500',
  },
]

const A_LEVEL_BODIES: AwardingBodyOption[] = [
  {
    id: 'aqa-a-level',
    label: 'AQA',
    subtitleKey: 'board.body_subtitle.aqa_a_level',
    icon: BookOpen,
    gradient: 'from-rose-500/10 via-rose-500/5 to-transparent',
    ring: 'hover:ring-rose-400/40',
    iconBg: 'bg-rose-500/10 group-hover:bg-rose-500/20',
    iconText: 'text-rose-500 dark:text-rose-400',
    accent: 'bg-rose-500',
  },
  {
    id: 'edexcel-a-level',
    label: 'Pearson Edexcel',
    subtitleKey: 'board.body_subtitle.edexcel_a_level',
    icon: GraduationCap,
    gradient: 'from-blue-500/10 via-blue-500/5 to-transparent',
    ring: 'hover:ring-blue-400/40',
    iconBg: 'bg-blue-500/10 group-hover:bg-blue-500/20',
    iconText: 'text-blue-500 dark:text-blue-400',
    accent: 'bg-blue-500',
  },
  {
    id: 'ocr-a-level',
    label: 'OCR',
    subtitleKey: 'board.body_subtitle.ocr_a_level',
    icon: Sparkles,
    gradient: 'from-amber-500/10 via-amber-500/5 to-transparent',
    ring: 'hover:ring-amber-400/40',
    iconBg: 'bg-amber-500/10 group-hover:bg-amber-500/20',
    iconText: 'text-amber-500',
    accent: 'bg-amber-500',
  },
  {
    id: 'eduqas-a-level',
    label: 'WJEC Eduqas',
    subtitleKey: 'board.body_subtitle.eduqas_a_level',
    icon: BookOpen,
    gradient: 'from-teal-500/10 via-teal-500/5 to-transparent',
    ring: 'hover:ring-teal-400/40',
    iconBg: 'bg-teal-500/10 group-hover:bg-teal-500/20',
    iconText: 'text-teal-500 dark:text-teal-400',
    accent: 'bg-teal-500',
  },
]

function AwardingBodyStep({
  level,
  loadingBoard,
  compact,
  currentStep,
  totalSteps,
  onBack,
  onPick,
}: {
  level: StudyLevel
  loadingBoard: ExamBoard | null
  compact?: boolean
  currentStep: number
  totalSteps: number
  onBack: () => void
  onPick: (body: AwardingBody) => void
}) {
  const t = useT()
  const bodies =
    level === 'gcse'
      ? GCSE_BODIES
      : level === 'igcse'
        ? IGCSE_BODIES
        : level === 'a-level'
          ? A_LEVEL_BODIES
          : IAL_BODIES

  const heading =
    level === 'gcse'
      ? t('board.body.heading.gcse')
      : level === 'igcse'
        ? t('board.body.heading.igcse')
        : level === 'a-level'
          ? t('board.body.heading.a_level')
          : t('board.body.heading.ial')

  const subheading =
    level === 'gcse'
      ? t('board.body.subheading.gcse')
      : level === 'igcse'
        ? t('board.body.subheading.igcse')
        : level === 'a-level'
          ? t('board.body.subheading.a_level')
          : t('board.body.subheading.ial')

  const levelLabel = level === 'ial' ? 'IAL' : level === 'a-level' ? 'A-Level' : level.toUpperCase()

  // Map awarding body IDs to the ExamBoard they resolve to (for loading state)
  const bodyToBoard: Partial<Record<AwardingBody, ExamBoard>> = {
    aqa: 'aqa',
    edexcel: 'edexcel',
    ocr: 'ocr',
    eduqas: 'eduqas',
    'pearson-ial': 'ial-edexcel',
    'aqa-a-level': 'aqa-a-level',
    'edexcel-a-level': 'edexcel-a-level',
    'ocr-a-level': 'ocr-a-level',
    'eduqas-a-level': 'eduqas-a-level',
  }

  return (
    <div className="flex flex-col gap-8">
      <header className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-card/60 px-3 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-md transition-colors hover:text-foreground hover:border-border"
          >
            <ArrowLeft className="size-3.5" aria-hidden="true" />
            {t('action.back')}
          </button>
          <Breadcrumb parts={[levelLabel]} />
        </div>
        <div className="flex flex-col gap-3 text-center sm:text-left">
          <span className="mx-auto inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/60 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary backdrop-blur-md sm:mx-0">
            {t('board.step_of')
              .replace('{current}', String(currentStep))
              .replace('{total}', String(totalSteps))}
          </span>
          <h1 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {heading}
          </h1>
          <p className="max-w-2xl text-base text-muted-foreground sm:text-lg">{subheading}</p>
        </div>
      </header>

      <div
        className={cn(
          'grid gap-4',
          bodies.length === 4 && 'sm:grid-cols-2 lg:grid-cols-4',
          bodies.length === 3 && 'sm:grid-cols-2 lg:grid-cols-3',
          bodies.length === 2 && 'sm:grid-cols-2',
          bodies.length === 1 && 'sm:grid-cols-1 max-w-md mx-auto w-full',
        )}
        role="radiogroup"
        aria-label={`${t('board.choose')} ${levelLabel}`}
      >
        {bodies.map((body) => {
          const resolvedBoard = bodyToBoard[body.id]
          const isLoading = resolvedBoard ? loadingBoard === resolvedBoard : false
          const isDisabled = loadingBoard !== null && !isLoading

          return (
            <OptionCard
              key={body.id}
              label={body.label}
              subtitle={t(body.subtitleKey)}
              icon={body.icon}
              gradient={body.gradient}
              ring={body.ring}
              iconBg={body.iconBg}
              iconText={body.iconText}
              accent={body.accent}
              isLoading={isLoading}
              disabled={isDisabled}
              compact={compact}
              // IGCSE bodies go to step 3 — show a "next step" arrow instead of "choose"
              showNextArrow={level === 'igcse'}
              onClick={() => onPick(body.id)}
            />
          )
        })}
      </div>

      <p className="mx-auto max-w-xl text-center text-xs text-muted-foreground">
        {t('board.body.not_sure_hint')}
      </p>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
 * STEP 3 — Paper / specification (IGCSE only)
 * ═══════════════════════════════════════════════════════════════════════════ */

type PaperOption = {
  board: ExamBoard
  /** Dictionary key for the paper label (e.g. "Literature" / "Language A"). */
  labelKey: string
  subtitleKey: string
  examCode: string
  icon: React.ComponentType<{ className?: string }>
  gradient: string
  ring: string
  iconBg: string
  iconText: string
  accent: string
}

const EDEXCEL_IGCSE_PAPERS: PaperOption[] = [
  {
    board: 'edexcel-igcse',
    labelKey: 'board.paper.literature',
    subtitleKey: 'board.paper_subtitle.edexcel_igcse_lit',
    examCode: '4ET1',
    icon: BookOpen,
    gradient: 'from-indigo-500/10 via-indigo-500/5 to-transparent',
    ring: 'hover:ring-indigo-400/40',
    iconBg: 'bg-indigo-500/10 group-hover:bg-indigo-500/20',
    iconText: 'text-indigo-500 dark:text-indigo-400',
    accent: 'bg-indigo-500',
  },
  {
    board: 'edexcel-igcse-lang',
    labelKey: 'board.paper.language',
    subtitleKey: 'board.paper_subtitle.edexcel_igcse_lang',
    examCode: '4EA1',
    icon: GraduationCap,
    gradient: 'from-sky-500/10 via-sky-500/5 to-transparent',
    ring: 'hover:ring-sky-400/40',
    iconBg: 'bg-sky-500/10 group-hover:bg-sky-500/20',
    iconText: 'text-sky-500 dark:text-sky-400',
    accent: 'bg-sky-500',
  },
]

const CAMBRIDGE_IGCSE_PAPERS: PaperOption[] = [
  {
    board: 'cambridge-0500',
    labelKey: 'board.paper.language_a',
    subtitleKey: 'board.paper_subtitle.cambridge_0500',
    examCode: '0500',
    icon: Globe2,
    gradient: 'from-violet-500/10 via-violet-500/5 to-transparent',
    ring: 'hover:ring-violet-400/40',
    iconBg: 'bg-violet-500/10 group-hover:bg-violet-500/20',
    iconText: 'text-violet-500 dark:text-violet-400',
    accent: 'bg-violet-500',
  },
  {
    board: 'cambridge-0990',
    labelKey: 'board.paper.language_b',
    subtitleKey: 'board.paper_subtitle.cambridge_0990',
    examCode: '0990',
    icon: Globe2,
    gradient: 'from-fuchsia-500/10 via-fuchsia-500/5 to-transparent',
    ring: 'hover:ring-fuchsia-400/40',
    iconBg: 'bg-fuchsia-500/10 group-hover:bg-fuchsia-500/20',
    iconText: 'text-fuchsia-500 dark:text-fuchsia-400',
    accent: 'bg-fuchsia-500',
  },
  {
    board: 'cambridge-0475',
    labelKey: 'board.paper.literature',
    subtitleKey: 'board.paper_subtitle.cambridge_0475',
    examCode: '0475',
    icon: BookOpen,
    gradient: 'from-purple-500/10 via-purple-500/5 to-transparent',
    ring: 'hover:ring-purple-400/40',
    iconBg: 'bg-purple-500/10 group-hover:bg-purple-500/20',
    iconText: 'text-purple-500 dark:text-purple-400',
    accent: 'bg-purple-500',
  },
]

function PaperStep({
  awardingBody,
  breadcrumbParts,
  loadingBoard,
  currentBoard,
  compact,
  onBack,
  onSelect,
}: {
  awardingBody: AwardingBody
  breadcrumbParts: string[]
  loadingBoard: ExamBoard | null
  currentBoard: ExamBoard | null
  compact?: boolean
  onBack: () => void
  onSelect: (board: ExamBoard) => void
}) {
  const t = useT()
  const papers = awardingBody === 'pearson-igcse' ? EDEXCEL_IGCSE_PAPERS : CAMBRIDGE_IGCSE_PAPERS
  const bodyLabel = awardingBody === 'pearson-igcse' ? 'Pearson Edexcel' : 'Cambridge'

  return (
    <div className="flex flex-col gap-8">
      <header className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-card/60 px-3 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-md transition-colors hover:text-foreground hover:border-border"
          >
            <ArrowLeft className="size-3.5" aria-hidden="true" />
            {t('action.back')}
          </button>
          <Breadcrumb parts={breadcrumbParts} />
        </div>
        <div className="flex flex-col gap-3 text-center sm:text-left">
          <span className="mx-auto inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/60 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary backdrop-blur-md sm:mx-0">
            {t('board.step_of').replace('{current}', '3').replace('{total}', '3')}
          </span>
          <h1 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t('board.paper.heading_before')} {bodyLabel} {t('board.paper.heading_after')}
          </h1>
          <p className="max-w-2xl text-base text-muted-foreground sm:text-lg">
            {t('board.paper.subheading')}
          </p>
        </div>
      </header>

      <div
        className={cn(
          'grid gap-4',
          papers.length === 3 && 'sm:grid-cols-2 lg:grid-cols-3',
          papers.length === 2 && 'sm:grid-cols-2',
        )}
        role="radiogroup"
        aria-label={`${t('board.choose')} ${bodyLabel} IGCSE`}
      >
        {papers.map((paper) => {
          const isSelected = currentBoard === paper.board
          const isLoading = loadingBoard === paper.board
          const isDisabled = loadingBoard !== null && !isLoading

          return (
            <OptionCard
              key={paper.board}
              label={t(paper.labelKey)}
              subtitle={t(paper.subtitleKey)}
              examCode={paper.examCode}
              icon={paper.icon}
              gradient={paper.gradient}
              ring={paper.ring}
              iconBg={paper.iconBg}
              iconText={paper.iconText}
              accent={paper.accent}
              isSelected={isSelected}
              isLoading={isLoading}
              disabled={isDisabled}
              compact={compact}
              onClick={() => onSelect(paper.board)}
            />
          )
        })}
      </div>

      <p className="mx-auto max-w-xl text-center text-xs text-muted-foreground">
        {t('board.paper.not_sure_hint')}
      </p>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
 * Shared — OptionCard (used by Steps 2 & 3)
 * ═══════════════════════════════════════════════════════════════════════════ */

function OptionCard({
  label,
  subtitle,
  examCode,
  icon: Icon,
  gradient,
  ring,
  iconBg,
  iconText,
  accent,
  isSelected,
  isLoading,
  disabled,
  compact,
  showNextArrow,
  onClick,
}: {
  label: string
  subtitle: string
  examCode?: string
  icon: React.ComponentType<{ className?: string }>
  gradient: string
  ring: string
  iconBg: string
  iconText: string
  accent: string
  isSelected?: boolean
  isLoading?: boolean
  disabled?: boolean
  compact?: boolean
  showNextArrow?: boolean
  onClick: () => void
}) {
  const t = useT()
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      role="radio"
      aria-checked={isSelected ?? false}
      aria-busy={isLoading ?? false}
      className={cn(
        'group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border/60 bg-card/60 text-left',
        'backdrop-blur-xl backdrop-saturate-150',
        'shadow-lg shadow-black/5 dark:shadow-black/20',
        'transition-all duration-300 ease-out outline-none',
        'hover:-translate-y-1 hover:shadow-xl hover:ring-2',
        'focus-visible:border-ring focus-visible:ring-4 focus-visible:ring-ring/20',
        'disabled:pointer-events-none disabled:opacity-50',
        'aria-checked:border-primary aria-checked:ring-2',
        ring,
        compact ? 'p-5' : 'p-6',
      )}
    >
      {/* Glass gradient overlay */}
      <div
        aria-hidden="true"
        className={cn(
          'absolute inset-0 bg-gradient-to-br opacity-60 transition-opacity duration-300 group-hover:opacity-90',
          gradient,
        )}
      />
      {/* Top accent bar */}
      <div aria-hidden="true" className={cn('absolute inset-x-0 top-0 h-1', accent)} />

      <div className="relative flex h-full flex-col gap-4">
        <div className="flex items-start justify-between">
          <div
            className={cn(
              'inline-flex size-12 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110',
              iconBg,
              iconText,
              compact && 'size-10',
            )}
          >
            {isLoading ? (
              <Loader2
                className={cn('size-6 animate-spin', compact && 'size-5')}
                aria-hidden="true"
              />
            ) : (
              <Icon className={cn('size-6', compact && 'size-5')} aria-hidden="true" />
            )}
          </div>
          {isSelected && !isLoading && (
            <span
              className={cn(
                'inline-flex size-7 items-center justify-center rounded-full text-white shadow',
                accent,
              )}
              aria-label={t('board.currently_selected')}
            >
              <Check className="size-4" aria-hidden="true" />
            </span>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <h3
            className={cn(
              'font-heading font-bold leading-tight tracking-tight text-foreground',
              compact ? 'text-lg' : 'text-xl',
            )}
          >
            {label}
          </h3>
          {examCode && (
            <p
              className={cn(
                'font-mono font-medium text-muted-foreground',
                compact ? 'text-xs' : 'text-sm',
              )}
            >
              {examCode}
            </p>
          )}
        </div>

        <p className={cn('text-muted-foreground', compact ? 'text-xs' : 'text-sm')}>{subtitle}</p>

        <div className="mt-auto flex items-center gap-1.5 pt-2 text-xs font-medium text-foreground">
          <span className="transition-transform duration-300 group-hover:translate-x-0.5">
            {isSelected
              ? t('board.option.your_current')
              : isLoading
                ? t('action.loading')
                : showNextArrow
                  ? t('board.option.choose_papers')
                  : t('board.option.choose_this')}
          </span>
          {!isLoading && (
            <ArrowRight
              className="size-3.5 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          )}
        </div>
      </div>
    </button>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
 * Shared — Breadcrumb
 * ═══════════════════════════════════════════════════════════════════════════ */

function Breadcrumb({ parts }: { parts: string[] }) {
  const t = useT()
  if (parts.length === 0) return null

  return (
    <nav
      aria-label={t('board.selection_progress')}
      className="flex items-center gap-1 text-xs text-muted-foreground"
    >
      {parts.map((part, i) => (
        <React.Fragment key={i}>
          {i > 0 && <ChevronRight className="size-3 shrink-0" aria-hidden="true" />}
          <span className="font-medium">{part}</span>
        </React.Fragment>
      ))}
    </nav>
  )
}

export default BoardSelectorSection
