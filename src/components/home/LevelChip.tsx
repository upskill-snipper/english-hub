import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

/**
 * LevelChip — a small pill that labels a board card with its qualification level
 * (GCSE, IGCSE, KS3, A-Level). Sits in the top-right corner of a card so users
 * can't conflate GCSE with IGCSE specifications.
 *
 * Accessibility:
 * The chip itself is decorative-plus-label. It is rendered as a `<span>` with
 * the level text visible, but screen-reader users may navigate by interactive
 * element (the parent link/button) rather than reading every child node.
 * Therefore, **the parent card MUST set its own `aria-label` that includes the
 * level**, e.g. "Pearson Edexcel — GCSE — open board". Don't rely on the chip
 * text alone to disambiguate boards.
 *
 * @example
 * ```tsx
 * <Link href="/revision/poetry/edexcel" aria-label="Pearson Edexcel — GCSE — open board">
 *   <span className="flex items-center justify-between">
 *     <h3>Pearson Edexcel</h3>
 *     <LevelChip level="gcse" />
 *   </span>
 * </Link>
 * ```
 */
export type Level = 'gcse' | 'igcse' | 'ks3' | 'a-level'

interface LevelChipProps {
  level: Level
  className?: string
  /** Override the default label text. Use sparingly — default labels are
   *  consistent across the app and aid recognition. */
  children?: ReactNode
}

const LEVEL_LABELS: Record<Level, string> = {
  gcse: 'GCSE',
  igcse: 'IGCSE',
  ks3: 'KS3',
  'a-level': 'A-LEVEL',
}

const LEVEL_STYLES: Record<Level, string> = {
  gcse: 'bg-emerald-400/15 text-emerald-300 ring-emerald-400/30',
  igcse: 'bg-clay-300/15 text-clay-300 ring-clay-300/30',
  ks3: 'bg-blue-400/15 text-blue-300 ring-blue-400/30',
  'a-level': 'bg-violet-400/15 text-violet-300 ring-violet-400/30',
}

export default function LevelChip({ level, className, children }: LevelChipProps): JSX.Element {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-transparent px-2.5 py-1',
        'font-mono text-[0.6875rem] uppercase tracking-[0.14em] leading-none',
        'ring-1',
        LEVEL_STYLES[level],
        className,
      )}
    >
      {children ?? LEVEL_LABELS[level]}
    </span>
  )
}
