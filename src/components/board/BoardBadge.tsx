'use client'

import Link from 'next/link'
import { useBoard } from '@/hooks/useBoard'
import { getBoardConfig } from '@/lib/board/board-store'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { BookOpen, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useT } from '@/lib/i18n/use-t'

type BoardBadgeProps = {
  showChangeButton?: boolean
  className?: string
  variant?: 'default' | 'secondary' | 'outline'
}

/**
 * Small reusable badge that reflects the user's selected exam board.
 * - When a board is set: renders the board shortName as a Badge.
 * - When no board is set: renders a "Select board" CTA linking to /board-select.
 * - Optionally renders a "Change" button alongside the badge.
 */
export function BoardBadge({
  showChangeButton = false,
  className,
  variant = 'secondary',
}: BoardBadgeProps) {
  const { board, isHydrated } = useBoard()
  const t = useT()

  // Avoid hydration mismatch: render nothing until the persisted store has hydrated.
  if (!isHydrated) {
    return null
  }

  const config = getBoardConfig(board)

  if (!config) {
    return (
      <Button
        variant="outline"
        size="sm"
        className={cn('h-8 gap-1.5', className)}
        render={<Link href="/board-select" />}
      >
        <BookOpen className="h-3.5 w-3.5" />
        {t('board.select_cta')}
      </Button>
    )
  }

  return (
    <div className={cn('inline-flex items-center gap-1.5', className)}>
      <Badge variant={variant} className="gap-1" title={config.fullName}>
        <BookOpen className="h-3 w-3" aria-hidden="true" />
        {config.shortName}
      </Badge>
      {showChangeButton && (
        <Button
          variant="ghost"
          size="sm"
          className="h-7 px-2 text-xs text-muted-foreground hover:text-foreground"
          render={<Link href="/board-select?change=1" aria-label={t('board.change_aria')} />}
        >
          {t('board.change')}
          <ChevronRight className="ml-0.5 h-3 w-3" />
        </Button>
      )}
    </div>
  )
}
