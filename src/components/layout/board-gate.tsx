'use client'

import { usePathname } from 'next/navigation'
import { BookOpen, GraduationCap, ArrowRight, Pencil, FileText, Globe } from 'lucide-react'
import { useBoard, type ExamBoard } from '@/hooks/useBoard'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

const boards = [
  {
    id: 'aqa' as ExamBoard,
    icon: BookOpen,
    color: 'bg-blue-500',
    title: 'AQA',
    subtitle: 'GCSE English Language & Literature',
    description: 'AQA-specific courses, practice questions, and revision materials.',
  },
  {
    id: 'edexcel' as ExamBoard,
    icon: GraduationCap,
    color: 'bg-violet-500',
    title: 'Edexcel',
    subtitle: 'GCSE, IGCSE & KS3 English',
    description: 'Edexcel-specific courses including International GCSE content.',
  },
  {
    id: 'ocr' as ExamBoard,
    icon: Pencil,
    color: 'bg-orange-500',
    title: 'OCR',
    subtitle: 'GCSE English Language & Literature',
    description: 'OCR-specific practice questions and revision materials.',
  },
  {
    id: 'eduqas' as ExamBoard,
    icon: FileText,
    color: 'bg-red-500',
    title: 'WJEC Eduqas',
    subtitle: 'GCSE English Language & Literature',
    description: 'WJEC Eduqas practice questions and revision materials.',
  },
  {
    id: 'cambridge-0500' as ExamBoard,
    icon: Globe,
    color: 'bg-purple-500',
    title: 'Cambridge 0500',
    subtitle: 'Cambridge IGCSE Literature',
    description: 'Cambridge IGCSE Literature courses covering poetry, prose, and drama.',
  },
] as const

export function BoardGate() {
  const { board: selectedBoard, isHydrated: _hasHydrated, setBoard } = useBoard()
  const pathname = usePathname()

  // Don't render during hydration
  if (!_hasHydrated) return null

  // Board already selected
  if (selectedBoard !== null) return null

  // Skip the homepage (full-width landing page) and auth-related pages
  if (pathname === '/') return null

  const skipPaths = ['/auth', '/verify', '/for-teachers', '/for-parents', '/for-schools', '/account', '/admin', '/affiliates', '/creators', '/school', '/demo', '/help', '/legal', '/dashboard', '/safeguarding']
  if (skipPaths.some((p) => pathname.startsWith(p))) {
    return null
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="board-gate-heading"
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/97 backdrop-blur-lg p-4"
    >
      <div className="w-full max-w-5xl animate-scale-in">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-10">
          <div className="inline-flex items-center justify-center w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-primary/10 mb-3 sm:mb-5">
            <GraduationCap className="w-5 h-5 sm:w-7 sm:h-7 text-primary" />
          </div>
          <h1
            id="board-gate-heading"
            className="text-xl sm:text-3xl font-bold tracking-tight text-foreground mb-2 sm:mb-3"
          >
            Welcome to The English Hub
          </h1>
          <p className="text-muted-foreground leading-relaxed max-w-md mx-auto text-xs sm:text-body-sm">
            Select your exam board to personalise your learning experience. You
            can change this at any time from the sidebar.
          </p>
        </div>

        {/* Board cards */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-2 sm:gap-3">
          {boards.map((board) => {
            const Icon = board.icon
            return (
              <button
                key={board.id}
                onClick={() => setBoard(board.id)}
                className={cn(
                  'group flex flex-col items-center text-center rounded-xl sm:rounded-2xl bg-card p-3 sm:p-5 border border-border/50',
                  'hover:border-primary/30 hover:shadow-card-hover hover:bg-card',
                  'transition-all duration-300',
                  'focus-visible:outline-none focus-visible:ring-2',
                  'focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background'
                )}
              >
                  <div className="flex flex-col items-center">
                    <div
                      className={cn(
                        'flex items-center justify-center w-8 h-8 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl mb-2 sm:mb-4',
                        board.color
                      )}
                    >
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>

                    <h2 className="text-sm sm:text-lg font-bold tracking-tight text-foreground mb-1">
                      {board.title}
                    </h2>

                    <Badge variant="secondary" className="mb-1 sm:mb-2 font-medium text-[9px] sm:text-[10px]">
                      {board.subtitle}
                    </Badge>

                    <p className="hidden sm:block text-xs text-muted-foreground leading-relaxed mb-4">
                      {board.description}
                    </p>

                    <span className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Get started
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
