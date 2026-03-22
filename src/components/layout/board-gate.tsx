'use client'

import { usePathname } from 'next/navigation'
import { BookOpen, GraduationCap, ArrowRight, Layers, Pencil, FileText } from 'lucide-react'
import { useBoardStore, type ExamBoard } from '@/store/board-store'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

const boards = [
  {
    id: 'KS3' as ExamBoard,
    icon: Layers,
    color: 'bg-emerald-500',
    title: 'KS3',
    subtitle: 'Key Stage 3 English',
    description: 'Foundation courses in reading, writing, and grammar for Years 7–9.',
  },
  {
    id: 'AQA' as ExamBoard,
    icon: BookOpen,
    color: 'bg-blue-500',
    title: 'AQA',
    subtitle: 'GCSE English Language & Literature',
    description: 'AQA-specific courses, practice questions, and revision materials, plus KS3 foundations.',
  },
  {
    id: 'Edexcel' as ExamBoard,
    icon: GraduationCap,
    color: 'bg-violet-500',
    title: 'Edexcel',
    subtitle: 'GCSE, IGCSE & KS3 English',
    description: 'Edexcel-specific courses including International GCSE content, plus KS3 foundations.',
  },
  {
    id: 'OCR' as ExamBoard,
    icon: Pencil,
    color: 'bg-orange-500',
    title: 'OCR',
    subtitle: 'GCSE English Language & Literature',
    description: 'OCR-specific practice questions and revision materials, plus KS3 foundations.',
  },
  {
    id: 'WJEC' as ExamBoard,
    icon: FileText,
    color: 'bg-red-500',
    title: 'WJEC Eduqas',
    subtitle: 'GCSE English Language & Literature',
    description: 'WJEC Eduqas practice questions and revision materials, plus KS3 foundations.',
  },
] as const

export function BoardGate() {
  const { selectedBoard, _hasHydrated, setBoard } = useBoardStore()
  const pathname = usePathname()

  // Don't render during hydration
  if (!_hasHydrated) return null

  // Board already selected
  if (selectedBoard !== null) return null

  // Only skip auth-related pages (users must be able to log in/register without a board)
  if (pathname.startsWith('/auth') || pathname.startsWith('/verify')) {
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
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 mb-5">
            <GraduationCap className="w-7 h-7 text-primary" />
          </div>
          <h1
            id="board-gate-heading"
            className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-3"
          >
            Welcome to The English Hub
          </h1>
          <p className="text-muted-foreground leading-relaxed max-w-md mx-auto text-body-sm">
            Select your exam board to personalise your learning experience. You
            can change this at any time from the sidebar.
          </p>
        </div>

        {/* Board cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {boards.map((board) => {
            const Icon = board.icon
            return (
              <button
                key={board.id}
                onClick={() => setBoard(board.id)}
                className={cn(
                  'group flex flex-col items-center text-center rounded-2xl bg-card p-5 border border-border/50',
                  'hover:border-primary/30 hover:shadow-card-hover hover:bg-card',
                  'transition-all duration-300',
                  'focus-visible:outline-none focus-visible:ring-2',
                  'focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background'
                )}
              >
                  <div className="flex flex-col items-center">
                    <div
                      className={cn(
                        'flex items-center justify-center w-11 h-11 rounded-xl mb-4',
                        board.color
                      )}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </div>

                    <h2 className="text-lg font-bold tracking-tight text-foreground mb-1">
                      {board.title}
                    </h2>

                    <Badge variant="secondary" className="mb-2 font-medium text-[10px]">
                      {board.subtitle}
                    </Badge>

                    <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                      {board.description}
                    </p>

                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
