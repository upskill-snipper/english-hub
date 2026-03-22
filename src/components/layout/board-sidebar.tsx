'use client'

import { useBoardStore } from '@/store/board-store'
import { GraduationCap } from 'lucide-react'
import { Skeleton } from '@/components/ui/skeleton'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

import type { ExamBoard } from '@/store/board-store'

const BOARD_INFO: Record<ExamBoard, { subtitle: string; color: string }> = {
  KS3: {
    subtitle: 'Key Stage 3 English',
    color: 'bg-emerald-500',
  },
  AQA: {
    subtitle: 'GCSE English Language & Literature',
    color: 'bg-blue-500',
  },
  Edexcel: {
    subtitle: 'GCSE & IGCSE English',
    color: 'bg-violet-500',
  },
  OCR: {
    subtitle: 'GCSE English Language & Literature',
    color: 'bg-orange-500',
  },
  WJEC: {
    subtitle: 'GCSE English Language & Literature',
    color: 'bg-red-500',
  },
}

function SidebarSkeleton() {
  return (
    <>
      {/* Mobile skeleton */}
      <div className="md:hidden flex items-center gap-3 px-4 h-10 bg-card/60 border-b border-border/40">
        <Skeleton className="h-4 w-20 rounded-full" />
      </div>

      {/* Desktop skeleton */}
      <aside className="hidden md:flex md:flex-col w-[200px] shrink-0 h-[calc(100vh-3.5rem)] sticky top-14 bg-card/40 border-r border-border/40 p-5">
        <Skeleton className="h-3 w-24 rounded mb-3" />
        <Skeleton className="h-5 w-16 rounded mb-2" />
        <Skeleton className="h-3 w-full rounded" />
      </aside>
    </>
  )
}

export function BoardSidebar() {
  const { selectedBoard, _hasHydrated, clearBoard } = useBoardStore()

  if (!_hasHydrated) return <SidebarSkeleton />

  // Don't render when no board is selected — the gate overlay handles selection
  if (!selectedBoard) return null

  const { subtitle, color } = BOARD_INFO[selectedBoard]

  return (
    <>
      {/* Mobile: thin horizontal strip */}
      <div className="md:hidden flex items-center gap-2.5 px-4 h-10 bg-card/60 border-b border-border/40">
        <GraduationCap className="h-3.5 w-3.5 text-muted-foreground" />
        <span className="text-overline font-semibold uppercase tracking-widest text-muted-foreground">
          Board:
        </span>
        <Badge
          variant="outline"
          className={cn(
            'inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-semibold',
            'bg-primary/10 border-primary/25 text-primary'
          )}
        >
          <span className={cn('h-1.5 w-1.5 rounded-full', color)} />
          {selectedBoard}
        </Badge>
        <span className="text-[10px] text-muted-foreground/50 hidden sm:inline truncate">
          {subtitle}
        </span>
      </div>

      {/* Desktop: sticky left sidebar */}
      <aside className="hidden md:flex md:flex-col w-[200px] shrink-0 h-[calc(100vh-3.5rem)] sticky top-14 bg-card/40 border-r border-border/40">
        <div className="flex flex-col justify-between h-full p-5">
          <div>
            {/* Label */}
            <div className="flex items-center gap-2 mb-3">
              <GraduationCap className="h-3.5 w-3.5 text-muted-foreground" />
              <span className="text-overline font-semibold uppercase tracking-widest text-muted-foreground">
                Your Board
              </span>
            </div>

            {/* Board name */}
            <div className="text-xl font-bold tracking-tight text-foreground">
              {selectedBoard}
            </div>

            {/* Subtitle */}
            <div className="text-xs text-muted-foreground mt-1 leading-snug">
              {subtitle}
            </div>

            {/* Accent bar */}
            <div className={cn('h-0.5 w-10 rounded-full mt-5', color)} />
          </div>

          {/* Change link */}
          <Button
            variant="link"
            size="sm"
            onClick={clearBoard}
            className="text-xs text-muted-foreground/40 hover:text-primary p-0 h-auto justify-start"
          >
            Change board
          </Button>
        </div>
      </aside>
    </>
  )
}
