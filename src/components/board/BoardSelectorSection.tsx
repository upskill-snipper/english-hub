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
  Flag,
  MapPinned,
  Shapes,
} from 'lucide-react'

import {
  BOARDS,
  useBoard,
  type BoardConfig,
  type ExamBoard,
} from '@/lib/board/board-store'
import { cn } from '@/lib/utils'

type Props = {
  /** Where to redirect after a selection (defaults to `/`). */
  redirectTo?: string
  /** When true, do not redirect on selection — used by the modal gate. */
  disableRedirect?: boolean
  /** Callback fired after a successful selection. */
  onSelected?: (board: ExamBoard) => void
  /** Compact layout for use inside a modal. */
  compact?: boolean
}

type StudyLevel = 'ks3' | 'gcse' | 'igcse'

// Colour palette per board — keeps cards visually distinct
const BOARD_THEME: Record<ExamBoard, { gradient: string; ring: string; iconBg: string; iconText: string; accent: string }> = {
  ks3: {
    gradient: 'from-emerald-500/10 via-green-500/5 to-transparent',
    ring: 'hover:ring-emerald-400/40 aria-checked:ring-emerald-500/50',
    iconBg: 'bg-emerald-500/10 group-hover:bg-emerald-500/20',
    iconText: 'text-emerald-600 dark:text-emerald-400',
    accent: 'bg-emerald-500',
  },
  aqa: {
    gradient: 'from-rose-500/10 via-rose-500/5 to-transparent',
    ring: 'hover:ring-rose-400/40 aria-checked:ring-rose-500/50',
    iconBg: 'bg-rose-500/10 group-hover:bg-rose-500/20',
    iconText: 'text-rose-500 dark:text-rose-400',
    accent: 'bg-rose-500',
  },
  edexcel: {
    gradient: 'from-blue-500/10 via-blue-500/5 to-transparent',
    ring: 'hover:ring-blue-400/40 aria-checked:ring-blue-500/50',
    iconBg: 'bg-blue-500/10 group-hover:bg-blue-500/20',
    iconText: 'text-blue-500 dark:text-blue-400',
    accent: 'bg-blue-500',
  },
  ocr: {
    gradient: 'from-amber-500/10 via-amber-500/5 to-transparent',
    ring: 'hover:ring-amber-400/40 aria-checked:ring-amber-500/50',
    iconBg: 'bg-amber-500/10 group-hover:bg-amber-500/20',
    iconText: 'text-amber-500 dark:text-amber-400',
    accent: 'bg-amber-500',
  },
  eduqas: {
    gradient: 'from-teal-500/10 via-teal-500/5 to-transparent',
    ring: 'hover:ring-teal-400/40 aria-checked:ring-teal-500/50',
    iconBg: 'bg-teal-500/10 group-hover:bg-teal-500/20',
    iconText: 'text-teal-500 dark:text-teal-400',
    accent: 'bg-teal-500',
  },
  'edexcel-igcse': {
    gradient: 'from-indigo-500/10 via-indigo-500/5 to-transparent',
    ring: 'hover:ring-indigo-400/40 aria-checked:ring-indigo-500/50',
    iconBg: 'bg-indigo-500/10 group-hover:bg-indigo-500/20',
    iconText: 'text-indigo-500 dark:text-indigo-400',
    accent: 'bg-indigo-500',
  },
  'cambridge-0500': {
    gradient: 'from-violet-500/10 via-violet-500/5 to-transparent',
    ring: 'hover:ring-violet-400/40 aria-checked:ring-violet-500/50',
    iconBg: 'bg-violet-500/10 group-hover:bg-violet-500/20',
    iconText: 'text-violet-500 dark:text-violet-400',
    accent: 'bg-violet-500',
  },
  'cambridge-0990': {
    gradient: 'from-fuchsia-500/10 via-fuchsia-500/5 to-transparent',
    ring: 'hover:ring-fuchsia-400/40 aria-checked:ring-fuchsia-500/50',
    iconBg: 'bg-fuchsia-500/10 group-hover:bg-fuchsia-500/20',
    iconText: 'text-fuchsia-500 dark:text-fuchsia-400',
    accent: 'bg-fuchsia-500',
  },
}

const BOARD_TAGLINE: Record<ExamBoard, string> = {
  ks3: 'Reading, writing, and spoken English skills',
  aqa: 'Power & Conflict, Love & Relationships, AIC, Macbeth',
  edexcel: 'Time & Place, Conflict anthology, AIC, Macbeth',
  ocr: 'Towards a World Unknown, Shakespeare & set texts',
  eduqas: 'Single anthology, unseen poetry, Component 1 & 2',
  'edexcel-igcse': 'Poetry, prose, drama & Shakespeare',
  'cambridge-0500': 'First Language English — A*-G grading',
  'cambridge-0990': 'First Language English — 9-1 grading',
}

const BOARD_ICON: Record<ExamBoard, React.ComponentType<{ className?: string }>> = {
  ks3: Shapes,
  aqa: BookOpen,
  edexcel: GraduationCap,
  ocr: Sparkles,
  eduqas: BookOpen,
  'edexcel-igcse': Globe2,
  'cambridge-0500': Globe2,
  'cambridge-0990': Globe2,
}

export function BoardSelectorSection({
  redirectTo = '/',
  disableRedirect = false,
  onSelected,
  compact,
}: Props) {
  const router = useRouter()
  const { board: currentBoard, setBoard } = useBoard()
  const [studyLevel, setStudyLevel] = React.useState<StudyLevel | null>(null)
  const [loadingBoard, setLoadingBoard] = React.useState<ExamBoard | null>(null)

  const handleSelect = React.useCallback(
    async (board: ExamBoard) => {
      if (loadingBoard) return
      setLoadingBoard(board)
      try {
        setBoard(board)
        onSelected?.(board)
        if (!disableRedirect) {
          router.push(redirectTo)
          router.refresh()
        }
      } catch {
        setLoadingBoard(null)
      }
    },
    [disableRedirect, loadingBoard, onSelected, redirectTo, router, setBoard],
  )

  const handleLevelPick = React.useCallback(
    (level: StudyLevel) => {
      if (level === 'ks3') {
        // KS3 skips board selection — immediately set board and redirect
        handleSelect('ks3')
      } else {
        setStudyLevel(level)
      }
    },
    [handleSelect],
  )

  const gcseBoards = React.useMemo(() => BOARDS.filter((b) => b.type === 'gcse'), [])
  const igcseBoards = React.useMemo(() => BOARDS.filter((b) => b.type === 'igcse'), [])

  // Step 1 — pick study level (KS3 / GCSE / IGCSE)
  if (studyLevel === null) {
    return <LevelStep onPick={handleLevelPick} loadingKs3={loadingBoard === 'ks3'} compact={compact} />
  }

  // Step 2 — pick specific board (GCSE or IGCSE only)
  return (
    <BoardStep
      studyLevel={studyLevel}
      boards={studyLevel === 'gcse' ? gcseBoards : igcseBoards}
      currentBoard={currentBoard}
      loadingBoard={loadingBoard}
      compact={compact}
      onBack={() => setStudyLevel(null)}
      onSelect={handleSelect}
    />
  )
}

// ── Step 1 ─── Study level picker ───────────────────────────────────────────

function LevelStep({
  onPick,
  loadingKs3,
  compact,
}: {
  onPick: (level: StudyLevel) => void
  loadingKs3: boolean
  compact?: boolean
}) {
  return (
    <div className="flex flex-col gap-10">
      <header className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/60 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary backdrop-blur-md">
          <Sparkles className="size-3.5" aria-hidden="true" />
          Welcome to The English Hub
        </span>
        <h1 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          What are you studying?
        </h1>
        <p className="text-base text-muted-foreground sm:text-lg">
          Tell us your level and we&apos;ll tailor every page to your exact course.
        </p>
      </header>

      <div className={cn('mx-auto grid w-full max-w-4xl gap-5', 'sm:grid-cols-3')}>
        <LevelCard
          label="KS3"
          subLabel="Years 7, 8 & 9"
          description="Building your English foundations"
          icon={Shapes}
          gradient="from-emerald-500/20 via-green-500/10 to-lime-500/20"
          iconGradient="from-emerald-500 to-green-600"
          onClick={() => onPick('ks3')}
          loading={loadingKs3}
          compact={compact}
        />
        <LevelCard
          label="GCSE"
          subLabel="Years 10 & 11"
          description="Preparing for your GCSEs (9-1)"
          icon={Flag}
          gradient="from-teal-500/20 via-cyan-500/10 to-teal-500/20"
          iconGradient="from-teal-500 to-cyan-600"
          onClick={() => onPick('gcse')}
          compact={compact}
        />
        <LevelCard
          label="IGCSE"
          subLabel="International"
          description="Studying outside the UK"
          icon={MapPinned}
          gradient="from-indigo-500/20 via-violet-500/10 to-fuchsia-500/20"
          iconGradient="from-indigo-500 to-violet-500"
          onClick={() => onPick('igcse')}
          compact={compact}
        />
      </div>

      <p className="mx-auto max-w-xl text-center text-xs text-muted-foreground">
        You can change this later from the board badge in the header or your settings page.
      </p>
    </div>
  )
}

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
            )}
          >
            {loading ? (
              <Loader2 className="size-7 animate-spin" aria-hidden="true" />
            ) : (
              <Icon className="size-7" aria-hidden="true" />
            )}
          </div>
          <ArrowRight
            className="size-5 text-muted-foreground transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary"
            aria-hidden="true"
          />
        </div>

        <div className="flex flex-col gap-1">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
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

// ── Step 2 ─── Board picker ──────────────────────────────────────────────────

function BoardStep({
  studyLevel,
  boards,
  currentBoard,
  loadingBoard,
  compact,
  onBack,
  onSelect,
}: {
  studyLevel: StudyLevel
  boards: readonly BoardConfig[]
  currentBoard: ExamBoard | null
  loadingBoard: ExamBoard | null
  compact?: boolean
  onBack: () => void
  onSelect: (board: ExamBoard) => void
}) {
  return (
    <div className="flex flex-col gap-8">
      <header className="flex flex-col gap-4">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex w-fit items-center gap-1.5 rounded-full border border-border/60 bg-card/60 px-3 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-md transition-colors hover:text-foreground hover:border-border"
        >
          <ArrowLeft className="size-3.5" aria-hidden="true" />
          Back
        </button>
        <div className="flex flex-col gap-3 text-center sm:text-left">
          <span className="mx-auto inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/60 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary backdrop-blur-md sm:mx-0">
            Step 2 of 2
          </span>
          <h1 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {studyLevel === 'gcse' ? 'Which UK GCSE board?' : 'Which IGCSE board?'}
          </h1>
          <p className="max-w-2xl text-base text-muted-foreground sm:text-lg">
            {studyLevel === 'gcse'
              ? 'Pick your board — we\u0027ll show you only the poems, set texts, and papers you actually study.'
              : 'Choose your board below — each one has different set texts and assessment.'}
          </p>
        </div>
      </header>

      <div
        className={cn(
          'grid gap-4',
          boards.length === 4 && 'sm:grid-cols-2 lg:grid-cols-4',
          boards.length === 3 && 'sm:grid-cols-2 lg:grid-cols-3',
          boards.length === 2 && 'sm:grid-cols-2',
        )}
        role="radiogroup"
        aria-label={`Choose your ${studyLevel === 'gcse' ? 'GCSE' : 'IGCSE'} exam board`}
      >
        {boards.map((board) => (
          <BoardCard
            key={board.id}
            board={board}
            isSelected={currentBoard === board.id}
            isLoading={loadingBoard === board.id}
            disabled={loadingBoard !== null && loadingBoard !== board.id}
            compact={compact}
            onClick={() => onSelect(board.id)}
          />
        ))}
      </div>

      <p className="mx-auto max-w-xl text-center text-xs text-muted-foreground">
        Not sure which board you study? Check your exam timetable, ask your teacher,
        or pick the closest match — you can change it later from your settings.
      </p>
    </div>
  )
}

function BoardCard({
  board,
  isSelected,
  isLoading,
  disabled,
  compact,
  onClick,
}: {
  board: BoardConfig
  isSelected: boolean
  isLoading: boolean
  disabled: boolean
  compact?: boolean
  onClick: () => void
}) {
  const Icon = BOARD_ICON[board.id]
  const theme = BOARD_THEME[board.id]
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      role="radio"
      aria-checked={isSelected}
      aria-busy={isLoading}
      data-board={board.id}
      className={cn(
        'group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border/60 bg-card/60 text-left',
        'backdrop-blur-xl backdrop-saturate-150',
        'shadow-lg shadow-black/5 dark:shadow-black/20',
        'transition-all duration-300 ease-out outline-none',
        'hover:-translate-y-1 hover:shadow-xl hover:ring-2',
        'focus-visible:border-ring focus-visible:ring-4 focus-visible:ring-ring/20',
        'disabled:pointer-events-none disabled:opacity-50',
        'aria-checked:border-primary aria-checked:ring-2',
        theme.ring,
        compact ? 'p-5' : 'p-6',
      )}
    >
      {/* Glass gradient overlay */}
      <div
        aria-hidden="true"
        className={cn(
          'absolute inset-0 bg-gradient-to-br opacity-60 transition-opacity duration-300 group-hover:opacity-90',
          theme.gradient,
        )}
      />
      {/* Top accent bar */}
      <div
        aria-hidden="true"
        className={cn('absolute inset-x-0 top-0 h-1', theme.accent)}
      />

      <div className="relative flex h-full flex-col gap-4">
        <div className="flex items-start justify-between">
          <div
            className={cn(
              'inline-flex size-12 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110',
              theme.iconBg,
              theme.iconText,
              compact && 'size-10',
            )}
          >
            {isLoading ? (
              <Loader2 className={cn('size-6 animate-spin', compact && 'size-5')} aria-hidden="true" />
            ) : (
              <Icon className={cn('size-6', compact && 'size-5')} aria-hidden="true" />
            )}
          </div>
          {isSelected && !isLoading && (
            <span
              className={cn(
                'inline-flex size-7 items-center justify-center rounded-full text-white shadow',
                theme.accent,
              )}
              aria-label="Currently selected"
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
            {board.name}
          </h3>
          <p className={cn('font-medium text-muted-foreground', compact ? 'text-xs' : 'text-sm')}>
            {board.type === 'gcse' ? 'GCSE 9-1' : 'IGCSE'}
          </p>
        </div>

        <p className={cn('text-muted-foreground', compact ? 'text-xs' : 'text-sm')}>
          {BOARD_TAGLINE[board.id]}
        </p>

        <div className="mt-auto flex items-center gap-1.5 pt-2 text-xs font-medium text-foreground">
          <span className="transition-transform duration-300 group-hover:translate-x-0.5">
            {isSelected ? 'Your current board' : isLoading ? 'Loading...' : 'Choose this board'}
          </span>
          {!isLoading && (
            <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
          )}
        </div>
      </div>
    </button>
  )
}

export default BoardSelectorSection
