'use client'

import { usePathname } from 'next/navigation'
import { useBoardStore, useBoardWithHydration } from '@/store/board-store'
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
  CAIE: {
    subtitle: 'Cambridge IGCSE Literature',
    color: 'bg-purple-500',
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

/** Routes where the BoardSidebar is hidden (they have their own navigation). */
const HIDDEN_PREFIXES = ['/dashboard', '/help', '/legal']

export function BoardSidebar() {
  const pathname = usePathname()
  const { selectedBoard, _hasHydrated } = useBoardWithHydration()
  const clearBoard = useBoardStore((s) => s.clearBoard)

  // Hide on routes that don't need board selection
  if (HIDDEN_PREFIXES.some((prefix) => pathname.startsWith(prefix))) return null

  if (!_hasHydrated) return <SidebarSkeleton />

  // Don't render when no board is selected — the gate overlay handles selection
  if (!selectedBoard) return null

  const { subtitle, color } = BOARD_INFO[selectedBoard]

  return (
    <>
      {/* Mobile: minimal horizontal bar */}
      <div className="md:hidden flex items-center justify-between px-4 h-11 bg-card/60 border-b border-border/40">
        <div className="flex items-center gap-2">
          <span className={cn('h-2 w-2 rounded-full shrink-0', color)} />
          <span className="text-xs font-semibold text-foreground">
            {selectedBoard}
          </span>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={clearBoard}
          className="text-xs text-muted-foreground hover:text-primary min-h-[44px] px-3"
        >
          Change
        </Button>
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
            className="text-xs text-muted-foreground/70 hover:text-primary p-0 h-auto justify-start"
          >
            Change board
          </Button>
        </div>
      </aside>
    </>
  )
}
