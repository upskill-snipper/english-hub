'use client'

import { useState, useRef, useEffect } from 'react'
import { useBoardStore } from '@/store/board-store'
import { BookOpen, ChevronDown, Check } from 'lucide-react'

import type { ExamBoard } from '@/store/board-store'

const BOARDS: { id: ExamBoard; title: string; subtitle: string }[] = [
  { id: 'AQA', title: 'AQA', subtitle: 'GCSE English Language & Literature' },
  { id: 'Edexcel', title: 'Edexcel', subtitle: 'GCSE & IGCSE English' },
]

function SidebarSkeleton() {
  return (
    <>
      {/* Mobile skeleton */}
      <div className="md:hidden flex items-center gap-3 px-4 h-11 bg-brand-card border-b border-brand-border">
        <div className="h-4 w-20 animate-pulse rounded bg-brand-border" />
        <div className="h-6 w-16 animate-pulse rounded-full bg-brand-border" />
      </div>

      {/* Desktop skeleton */}
      <aside className="hidden md:flex md:flex-col w-[200px] shrink-0 h-[calc(100vh-4rem)] sticky top-16 bg-brand-card border-r border-brand-border p-4">
        <div className="h-4 w-20 animate-pulse rounded bg-brand-border mb-4" />
        <div className="h-20 w-full animate-pulse rounded-lg bg-brand-border mb-3" />
        <div className="h-20 w-full animate-pulse rounded-lg bg-brand-border" />
      </aside>
    </>
  )
}

function BoardButton({
  board,
  isSelected,
  onClick,
}: {
  board: (typeof BOARDS)[number]
  isSelected: boolean
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full text-left rounded-lg border p-3 transition-colors duration-200
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brand-bg
        ${
          isSelected
            ? 'bg-brand-accent/10 border-brand-accent text-brand-accent'
            : 'bg-brand-bg border-brand-border text-brand-muted hover:border-brand-accent/40'
        }`}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <div className="text-sm font-semibold">{board.title}</div>
          <div
            className={`text-xs mt-0.5 leading-snug ${
              isSelected ? 'text-brand-accent/70' : 'text-brand-muted/70'
            }`}
          >
            {board.subtitle}
          </div>
        </div>
        {isSelected && <Check className="h-4 w-4 shrink-0 mt-0.5" />}
      </div>
    </button>
  )
}

export function BoardSidebar() {
  const { selectedBoard, _hasHydrated, setBoard } = useBoardStore()
  const [mobileOpen, setMobileOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close mobile dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setMobileOpen(false)
      }
    }
    if (mobileOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [mobileOpen])

  if (!_hasHydrated) return <SidebarSkeleton />

  return (
    <>
      {/* Mobile strip */}
      <div className="md:hidden relative bg-brand-card border-b border-brand-border" ref={dropdownRef}>
        <div className="flex items-center gap-2 px-4 h-11">
          <BookOpen className="h-3.5 w-3.5 text-brand-muted" />
          <span className="text-xs font-semibold uppercase tracking-wider text-brand-muted">
            Exam Board:
          </span>
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex items-center gap-1.5 rounded-full bg-brand-accent/10 border border-brand-accent/30 px-3 py-0.5 text-xs font-semibold text-brand-accent transition-colors hover:bg-brand-accent/20
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brand-bg"
          >
            {selectedBoard ?? 'Select'}
            <ChevronDown
              className={`h-3 w-3 transition-transform duration-200 ${mobileOpen ? 'rotate-180' : ''}`}
            />
          </button>
        </div>

        {/* Mobile dropdown */}
        {mobileOpen && (
          <div className="absolute left-0 right-0 top-full z-40 border-b border-brand-border bg-brand-card p-3 shadow-lg shadow-black/20">
            <div className="flex flex-col gap-2">
              {BOARDS.map((board) => (
                <BoardButton
                  key={board.id}
                  board={board}
                  isSelected={selectedBoard === board.id}
                  onClick={() => {
                    setBoard(board.id)
                    setMobileOpen(false)
                  }}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Desktop sidebar */}
      <aside className="hidden md:flex md:flex-col w-[200px] shrink-0 h-[calc(100vh-4rem)] sticky top-16 bg-brand-card border-r border-brand-border overflow-y-auto">
        <div className="p-4">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="h-4 w-4 text-brand-muted" />
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-muted">
              Exam Board
            </span>
          </div>

          <div className="flex flex-col gap-2.5">
            {BOARDS.map((board) => (
              <BoardButton
                key={board.id}
                board={board}
                isSelected={selectedBoard === board.id}
                onClick={() => setBoard(board.id)}
              />
            ))}
          </div>
        </div>
      </aside>
    </>
  )
}
