'use client'

import * as React from 'react'
import { BookOpen, GraduationCap, Globe2, Sparkles, Loader2, Check } from 'lucide-react'

import { BOARDS, type ExamBoard, type BoardConfig } from '@/lib/board/board-store'
import { cn } from '@/lib/utils'

type BoardSelectorCardsProps = {
  onSelect: (board: ExamBoard) => void | Promise<void>
  /** Current board (highlights the matching card). */
  currentBoard?: ExamBoard | null
  /** Restrict displayed boards (e.g. only 'gcse' or 'igcse'). */
  filterType?: 'gcse' | 'igcse'
  className?: string
  /** Render the cards in a tighter grid — used inside the modal gate. */
  compact?: boolean
}

const BOARD_ICON: Record<ExamBoard, React.ComponentType<{ className?: string }>> = {
  aqa: BookOpen,
  edexcel: GraduationCap,
  ocr: Sparkles,
  eduqas: BookOpen,
  'edexcel-igcse': Globe2,
  'cambridge-0500': Globe2,
  'cambridge-0990': Globe2,
}

const BOARD_TAGLINE: Record<ExamBoard, string> = {
  aqa: 'Power & Conflict, AIC, and Macbeth',
  edexcel: 'Time & Place, AIC, and Macbeth',
  ocr: 'Conflict cluster and Romeo & Juliet',
  eduqas: 'Single anthology and unseen poetry',
  'edexcel-igcse': 'Poetry, prose, drama & Shakespeare',
  'cambridge-0500': 'First Language English (A*-G)',
  'cambridge-0990': 'First Language English (9-1)',
}

const BOARD_BENEFITS: Record<ExamBoard, string[]> = {
  aqa: ['Poetry anthology', 'Set text guides', 'Past paper walkthroughs'],
  edexcel: ['Anthology analysis', 'Set text guides', 'Exam-style tasks'],
  ocr: ['Conflict poetry', 'Shakespeare support', 'Past paper practice'],
  eduqas: ['Anthology mastery', 'Unseen poetry drills', 'Component 1 & 2 prep'],
  'edexcel-igcse': ['Anthology coverage', 'Shakespeare essays', 'Unseen prose & poetry'],
  'cambridge-0500': ['Reading passages', 'Directed writing', 'Composition practice'],
  'cambridge-0990': ['Reading passages', 'Directed writing', 'Composition practice'],
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
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-pressed={isSelected}
      aria-busy={isLoading}
      data-board={board.id}
      className={cn(
        'group/board-card relative flex h-full flex-col gap-3 rounded-2xl border border-border/60 bg-card p-5 text-left',
        'transition-all duration-200 outline-none',
        'hover:border-primary/40 hover:bg-primary/5 hover:shadow-md hover:shadow-primary/5 hover:-translate-y-0.5',
        'focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30',
        'disabled:pointer-events-none disabled:opacity-60',
        'aria-pressed:border-primary aria-pressed:bg-primary/10 aria-pressed:ring-2 aria-pressed:ring-primary/20',
        compact ? 'p-4 gap-2.5' : 'p-5 gap-3',
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <div
          className={cn(
            'inline-flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary',
            'group-hover/board-card:bg-primary/15',
            compact && 'size-9',
          )}
        >
          {isLoading ? (
            <Loader2 className={cn('size-5 animate-spin', compact && 'size-4')} aria-hidden="true" />
          ) : (
            <Icon className={cn('size-5', compact && 'size-4')} aria-hidden="true" />
          )}
        </div>
        {isSelected && !isLoading && (
          <span
            className="inline-flex size-6 items-center justify-center rounded-full bg-primary text-primary-foreground"
            aria-label="Currently selected"
          >
            <Check className="size-3.5" aria-hidden="true" />
          </span>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <h3
          className={cn(
            'font-heading font-semibold leading-snug tracking-tight text-foreground',
            compact ? 'text-sm' : 'text-base',
          )}
        >
          {board.name}
        </h3>
        <p className={cn('text-muted-foreground leading-snug', compact ? 'text-xs' : 'text-sm')}>
          {board.fullName}
        </p>
      </div>

      <p className={cn('text-muted-foreground', compact ? 'text-xs' : 'text-sm')}>
        {BOARD_TAGLINE[board.id]}
      </p>

      {!compact && (
        <ul className="mt-auto flex flex-wrap gap-1.5 pt-1" aria-label={`What you get for ${board.name}`}>
          {BOARD_BENEFITS[board.id].map((benefit) => (
            <li
              key={benefit}
              className="inline-flex items-center gap-1 rounded-full border border-border/60 bg-muted/40 px-2 py-0.5 text-[0.6875rem] font-medium text-muted-foreground"
            >
              {benefit}
            </li>
          ))}
        </ul>
      )}
    </button>
  )
}

export function BoardSelectorCards({
  onSelect,
  currentBoard = null,
  filterType,
  className,
  compact,
}: BoardSelectorCardsProps) {
  const [loadingBoard, setLoadingBoard] = React.useState<ExamBoard | null>(null)

  const visibleBoards = React.useMemo(
    () => (filterType ? BOARDS.filter((b) => b.type === filterType) : BOARDS),
    [filterType],
  )

  const handleSelect = React.useCallback(
    async (board: ExamBoard) => {
      if (loadingBoard) return
      setLoadingBoard(board)
      try {
        await onSelect(board)
      } catch {
        // Reset so the user can try again if the caller threw.
        setLoadingBoard(null)
      }
    },
    [loadingBoard, onSelect],
  )

  return (
    <div
      className={cn(
        'grid gap-3',
        compact
          ? 'grid-cols-1 sm:grid-cols-2'
          : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
        className,
      )}
      role="radiogroup"
      aria-label="Choose your exam board"
    >
      {visibleBoards.map((board) => (
        <BoardCard
          key={board.id}
          board={board}
          isSelected={currentBoard === board.id}
          isLoading={loadingBoard === board.id}
          disabled={loadingBoard !== null && loadingBoard !== board.id}
          compact={compact}
          onClick={() => handleSelect(board.id)}
        />
      ))}
    </div>
  )
}

export default BoardSelectorCards
