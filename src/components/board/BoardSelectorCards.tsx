'use client'

import * as React from 'react'
import { BookOpen, GraduationCap, Globe2, Sparkles, Award, Loader2, Check } from 'lucide-react'

import { BOARDS, type ExamBoard, type BoardConfig } from '@/lib/board/board-store'
import { cn } from '@/lib/utils'
import { useT } from '@/lib/i18n/use-t'

type BoardSelectorCardsProps = {
  onSelect: (board: ExamBoard) => void | Promise<void>
  /** Current board (highlights the matching card). */
  currentBoard?: ExamBoard | null
  /** Restrict displayed boards (e.g. only 'gcse' or 'igcse'). */
  filterType?: 'gcse' | 'igcse' | 'ial' | 'a-level'
  className?: string
  /** Render the cards in a tighter grid - used inside the modal gate. */
  compact?: boolean
}

const BOARD_ICON: Record<ExamBoard, React.ComponentType<{ className?: string }>> = {
  ks3: BookOpen,
  aqa: BookOpen,
  edexcel: GraduationCap,
  ocr: Sparkles,
  eduqas: BookOpen,
  'edexcel-igcse': Globe2,
  'edexcel-igcse-lang': Globe2,
  'cambridge-0500': Globe2,
  'cambridge-0990': Globe2,
  'cambridge-0475': BookOpen,
  'ial-edexcel': Award,
  'aqa-a-level': Award,
  'edexcel-a-level': Award,
  'ocr-a-level': Award,
  'eduqas-a-level': Award,
}

const BOARD_TAGLINE_KEY: Record<ExamBoard, string> = {
  ks3: 'board.tagline.ks3',
  aqa: 'board.tagline.aqa',
  edexcel: 'board.tagline.edexcel',
  ocr: 'board.tagline.ocr',
  eduqas: 'board.tagline.eduqas',
  'edexcel-igcse': 'board.tagline.edexcel_igcse',
  'edexcel-igcse-lang': 'board.tagline.edexcel_igcse_lang',
  'cambridge-0500': 'board.tagline.cambridge_0500',
  'cambridge-0990': 'board.tagline.cambridge_0990',
  'cambridge-0475': 'board.tagline.cambridge_0475',
  'ial-edexcel': 'board.tagline.ial_edexcel',
  'aqa-a-level': 'board.tagline.aqa_a_level',
  'edexcel-a-level': 'board.tagline.edexcel_a_level',
  'ocr-a-level': 'board.tagline.ocr_a_level',
  'eduqas-a-level': 'board.tagline.eduqas_a_level',
}

const BOARD_BENEFITS_KEYS: Record<ExamBoard, [string, string, string]> = {
  ks3: [
    'board.benefit.reading_comp',
    'board.benefit.creative_writing',
    'board.benefit.grammar_vocab',
  ],
  aqa: [
    'board.benefit.poetry_anthology',
    'board.benefit.set_text_guides',
    'board.benefit.past_paper_walkthroughs',
  ],
  edexcel: [
    'board.benefit.anthology_analysis',
    'board.benefit.set_text_guides',
    'board.benefit.exam_style_tasks',
  ],
  ocr: [
    'board.benefit.conflict_poetry',
    'board.benefit.shakespeare_support',
    'board.benefit.past_paper_practice',
  ],
  eduqas: [
    'board.benefit.anthology_mastery',
    'board.benefit.unseen_poetry_drills',
    'board.benefit.component_1_2_prep',
  ],
  'edexcel-igcse': [
    'board.benefit.anthology_coverage',
    'board.benefit.shakespeare_essays',
    'board.benefit.unseen_prose_poetry',
  ],
  'edexcel-igcse-lang': [
    'board.benefit.reading_passages',
    'board.benefit.transactional_writing',
    'board.benefit.summary_skills',
  ],
  'cambridge-0500': [
    'board.benefit.reading_passages',
    'board.benefit.directed_writing',
    'board.benefit.composition_practice',
  ],
  'cambridge-0990': [
    'board.benefit.reading_passages',
    'board.benefit.directed_writing',
    'board.benefit.composition_practice',
  ],
  'cambridge-0475': [
    'board.benefit.poetry_analysis',
    'board.benefit.prose_drama_texts',
    'board.benefit.unseen_criticism',
  ],
  'ial-edexcel': [
    'board.benefit.advanced_essay',
    'board.benefit.critical_analysis',
    'board.benefit.comparative_study',
  ],
  'aqa-a-level': [
    'board.benefit.coming_soon',
    'board.benefit.cross_board_tools',
    'board.benefit.text_library',
  ],
  'edexcel-a-level': [
    'board.benefit.coming_soon',
    'board.benefit.cross_board_tools',
    'board.benefit.text_library',
  ],
  'ocr-a-level': [
    'board.benefit.coming_soon',
    'board.benefit.cross_board_tools',
    'board.benefit.text_library',
  ],
  'eduqas-a-level': [
    'board.benefit.coming_soon',
    'board.benefit.cross_board_tools',
    'board.benefit.text_library',
  ],
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
  const t = useT()
  const tagline = t(BOARD_TAGLINE_KEY[board.id])
  const benefits = BOARD_BENEFITS_KEYS[board.id].map((k) => t(k))
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
            <Loader2
              className={cn('size-5 animate-spin', compact && 'size-4')}
              aria-hidden="true"
            />
          ) : (
            <Icon className={cn('size-5', compact && 'size-4')} aria-hidden="true" />
          )}
        </div>
        {isSelected && !isLoading && (
          <span
            className="inline-flex size-6 items-center justify-center rounded-full bg-primary text-primary-foreground"
            aria-label={t('board.currently_selected')}
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

      <p className={cn('text-muted-foreground', compact ? 'text-xs' : 'text-sm')}>{tagline}</p>

      {!compact && (
        <ul
          className="mt-auto flex flex-wrap gap-1.5 pt-1"
          aria-label={`${t('board.what_you_get')} ${board.name}`}
        >
          {benefits.map((benefit, i) => (
            <li
              key={i}
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
  const t = useT()

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
      aria-label={t('board.choose')}
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
