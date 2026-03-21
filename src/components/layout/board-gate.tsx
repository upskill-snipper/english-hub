'use client'

import { usePathname } from 'next/navigation'
import { BookOpen, GraduationCap, ArrowRight, Layers, Pencil, FileText } from 'lucide-react'
import { useBoardStore, type ExamBoard } from '@/store/board-store'

const boards = [
  {
    id: 'KS3' as ExamBoard,
    icon: Layers,
    color: 'bg-emerald-500',
    title: 'KS3',
    subtitle: 'Key Stage 3 English',
    description: 'Foundation courses in reading, writing, and grammar for Years 7–9',
  },
  {
    id: 'AQA' as ExamBoard,
    icon: BookOpen,
    color: 'bg-blue-500',
    title: 'AQA',
    subtitle: 'GCSE English Language & Literature',
    description: 'AQA-specific courses, practice questions, and revision materials plus KS3 foundations',
  },
  {
    id: 'Edexcel' as ExamBoard,
    icon: GraduationCap,
    color: 'bg-violet-500',
    title: 'Edexcel',
    subtitle: 'GCSE, IGCSE & KS3 English',
    description: 'Edexcel-specific courses including International GCSE content plus KS3 foundations',
  },
  {
    id: 'OCR' as ExamBoard,
    icon: Pencil,
    color: 'bg-orange-500',
    title: 'OCR',
    subtitle: 'GCSE English Language & Literature',
    description: 'OCR-specific practice questions and revision materials plus KS3 foundations',
  },
  {
    id: 'WJEC' as ExamBoard,
    icon: FileText,
    color: 'bg-red-500',
    title: 'WJEC Eduqas',
    subtitle: 'GCSE English Language & Literature',
    description: 'WJEC Eduqas practice questions and revision materials plus KS3 foundations',
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-brand-bg/95 backdrop-blur-sm p-4">
      <div className="w-full max-w-5xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-accent/10 mb-5">
            <GraduationCap className="w-8 h-8 text-brand-accent" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-brand-text mb-3">
            Welcome to The English Hub
          </h1>
          <p className="text-brand-muted leading-relaxed max-w-md mx-auto">
            Select your exam board to personalise your learning experience. You
            can change this at any time from the sidebar.
          </p>
        </div>

        {/* Board cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {boards.map((board) => {
            const Icon = board.icon
            return (
              <button
                key={board.id}
                onClick={() => setBoard(board.id)}
                className="group flex flex-col items-center text-center bg-brand-card border border-brand-border rounded-xl p-6
                           hover:border-brand-accent/40 hover:shadow-lg hover:shadow-brand-accent/5
                           transition-all duration-200 focus-visible:outline-none focus-visible:ring-2
                           focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brand-bg"
              >
                <div
                  className={`flex items-center justify-center w-12 h-12 rounded-full ${board.color} mb-4`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>

                <h2 className="text-lg font-bold text-brand-text mb-1">
                  {board.title}
                </h2>

                <p className="text-sm font-medium text-brand-accent mb-2">
                  {board.subtitle}
                </p>

                <p className="text-sm text-brand-muted leading-relaxed mb-4">
                  {board.description}
                </p>

                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-accent opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  Get started
                  <ArrowRight className="w-4 h-4" />
                </span>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
