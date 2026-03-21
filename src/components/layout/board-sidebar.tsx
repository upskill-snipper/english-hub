'use client'

import { useBoardStore } from '@/store/board-store'
import { GraduationCap } from 'lucide-react'

import type { ExamBoard } from '@/store/board-store'

const BOARD_INFO: Record<ExamBoard, { subtitle: string; color: string }> = {
  AQA: {
    subtitle: 'GCSE English Language & Literature',
    color: 'bg-purple-500',
  },
  Edexcel: {
    subtitle: 'GCSE & IGCSE English',
    color: 'bg-sky-500',
  },
}

function SidebarSkeleton() {
  return (
    <>
      {/* Mobile skeleton */}
      <div className="md:hidden flex items-center gap-3 px-4 h-11 bg-brand-card border-b border-brand-border">
        <div className="h-5 w-20 animate-pulse rounded-full bg-brand-border" />
      </div>

      {/* Desktop skeleton */}
      <aside className="hidden md:flex md:flex-col w-[200px] shrink-0 h-[calc(100vh-4rem)] sticky top-16 bg-brand-card border-r border-brand-border p-5">
        <div className="h-3 w-24 animate-pulse rounded bg-brand-border mb-3" />
        <div className="h-5 w-16 animate-pulse rounded bg-brand-border mb-2" />
        <div className="h-3 w-full animate-pulse rounded bg-brand-border" />
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
      <div className="md:hidden flex items-center gap-2.5 px-4 h-11 bg-brand-card border-b border-brand-border">
        <GraduationCap className="h-3.5 w-3.5 text-brand-muted" />
        <span className="text-xs font-semibold uppercase tracking-wider text-brand-muted">
          Board:
        </span>
        <span
          className={`inline-flex items-center gap-1.5 rounded-full px-3 py-0.5 text-xs font-semibold
            bg-brand-accent/10 border border-brand-accent/30 text-brand-accent`}
        >
          <span className={`h-1.5 w-1.5 rounded-full ${color}`} />
          {selectedBoard}
        </span>
        <span className="text-[10px] text-brand-muted/60 hidden sm:inline truncate">
          {subtitle}
        </span>
      </div>

      {/* Desktop: sticky left sidebar */}
      <aside className="hidden md:flex md:flex-col w-[200px] shrink-0 h-[calc(100vh-4rem)] sticky top-16 bg-brand-card border-r border-brand-border">
        <div className="flex flex-col justify-between h-full p-5">
          <div>
            {/* Label */}
            <div className="flex items-center gap-2 mb-3">
              <GraduationCap className="h-3.5 w-3.5 text-brand-muted" />
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-muted">
                Your Exam Board
              </span>
            </div>

            {/* Board name */}
            <div className="text-lg font-bold text-brand-text">
              {selectedBoard}
            </div>

            {/* Subtitle */}
            <div className="text-xs text-brand-muted mt-0.5 leading-snug">
              {subtitle}
            </div>

            {/* Accent bar */}
            <div className={`h-1 w-10 rounded-full mt-4 ${color}`} />
          </div>

          {/* Change link — the only way to switch boards */}
          <button
            type="button"
            onClick={clearBoard}
            className="text-xs text-brand-muted/50 hover:text-brand-accent transition-colors text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brand-card rounded"
          >
            Change board
          </button>
        </div>
      </aside>
    </>
  )
}
