import type { Metadata } from 'next'
import Link from 'next/link'
import { getServerBoard } from '@/lib/board/get-server-board'
import { getBoardConfig, type ExamBoard } from '@/lib/board/board-config'

export const metadata: Metadata = {
  title: 'Free English Resources',
  description:
    'Free GCSE and IGCSE English resources: revision notes, poetry guides, writing skills, exam techniques, vocabulary builders, and study tools for all boards.',
  alternates: { canonical: 'https://theenglishhub.app/resources' },
  openGraph: {
    title: 'Free English Resources — The English Hub',
    description:
      'Free GCSE and IGCSE English resources: revision notes, poetry guides, writing skills, exam techniques, vocabulary builders, and study tools for all boards.',
  },
}
import {
  BookOpen,
  PenTool,
  Feather,
  Sparkles,
  FileText,
  Wrench,
  BookMarked,
  MessageSquare,
  GraduationCap,
  Target,
  Lightbulb,
  Layers,
  Quote,
  Mic,
  Users,
  Search,
  ArrowRight,
  Library,
  type LucideIcon,
} from 'lucide-react'
import { LearningTip } from '@/components/ui/learning-tip'

/* ─── Quick Start Cards ──────────────────────────────────────── */

type ResourceCard = {
  title: string
  description: string
  href: string
  icon: LucideIcon
  // Boards this card is relevant to. Omit (or 'all') to show for everyone.
  boards?: ExamBoard[]
}

const QUICK_START: ResourceCard[] = [
  {
    title: 'Revision Notes',
    description: 'Concise, exam-focused notes for every text and topic.',
    href: '/resources/revision-notes',
    icon: BookOpen,
  },
  {
    title: 'Writing Skills',
    description: 'Master creative, persuasive, and analytical writing.',
    href: '/resources/writing-skills',
    icon: PenTool,
  },
  {
    title: 'Poetry Hub',
    description: 'Poem-by-poem guides for every anthology cluster.',
    href: '/resources/poetry',
    icon: Feather,
    // Cambridge IGCSE has no set poetry anthology
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },
  {
    title: 'Techniques',
    description: 'Language and structural techniques with real examples.',
    href: '/resources/techniques',
    icon: Sparkles,
  },
  {
    title: 'Model Answers',
    description: 'Grade 9 exemplars with marker commentary.',
    href: '/resources/model-answers',
    icon: FileText,
  },
  {
    title: 'Study Tools',
    description: 'Flashcards, planners, and revision checklists.',
    href: '/resources/study-tools',
    icon: Wrench,
  },
]

/* ─── All Categories ─────────────────────────────────────────── */

type Category = {
  name: string
  href: string
  icon: LucideIcon
  boards?: ExamBoard[]
}

const ALL_CATEGORIES: Category[] = [
  {
    name: 'English Literature',
    href: '/resources/english-literature',
    icon: BookMarked,
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },
  { name: 'English Language', href: '/resources/english-language', icon: MessageSquare },
  { name: 'Revision Notes', href: '/resources/revision-notes', icon: BookOpen },
  {
    name: 'Poetry',
    href: '/resources/poetry',
    icon: Feather,
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },
  { name: 'Writing Skills', href: '/resources/writing-skills', icon: PenTool },
  { name: 'Techniques', href: '/resources/techniques', icon: Sparkles },
  { name: 'Model Answers', href: '/resources/model-answers', icon: FileText },
  { name: 'Exam Technique', href: '/resources/exam-technique', icon: GraduationCap },
  { name: 'Grade Targets', href: '/resources/grade-targets', icon: Target },
  { name: 'Study Tools', href: '/resources/study-tools', icon: Wrench },
  { name: 'Vocabulary', href: '/resources/vocabulary', icon: Search },
  { name: 'Glossary', href: '/resources/glossary', icon: Library },
  { name: 'Context', href: '/resources/context', icon: Lightbulb },
  { name: 'Themes', href: '/resources/themes', icon: Layers },
  { name: 'Authors', href: '/resources/authors', icon: Quote },
  { name: 'Spoken Language', href: '/resources/spoken-language', icon: Mic },
  { name: 'Teaching', href: '/resources/teaching', icon: Users },
]

function relevantToBoard<T extends { boards?: ExamBoard[] }>(
  items: T[],
  board: ExamBoard | null,
): T[] {
  if (!board) return items
  return items.filter((item) => !item.boards || item.boards.includes(board))
}

/* ─── Page ────────────────────────────────────────────────────── */

export default async function ResourcesPage() {
  const board = await getServerBoard()
  const boardConfig = getBoardConfig(board)
  const quickStart = relevantToBoard(QUICK_START, board)
  const categories = relevantToBoard(ALL_CATEGORIES, board)

  return (
    <main className="min-h-screen bg-background">
      {/* ── Hero Section ─────────────────────────────────────────── */}
      <section className="border-b border-border/40">
        <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            Study Resources
          </span>

          <div className="mt-6 flex items-center justify-center gap-2">
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              Everything You Need to Master English
            </h1>
            <LearningTip categories={['resource', 'study']} side="bottom" size="md" />
          </div>

          {boardConfig && (
            <div className="mt-4 flex justify-center">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                For {boardConfig.shortName}
              </span>
            </div>
          )}

          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
            A comprehensive library of revision notes, model answers, technique guides, and exam
            preparation tools -- built for GCSE and IGCSE English students.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <span className="rounded-full border border-border bg-card px-3.5 py-1 text-sm font-medium text-muted-foreground">
              {quickStart.length + categories.length} Study Guides
            </span>
            <span className="text-border">·</span>
            <span className="rounded-full border border-border bg-card px-3.5 py-1 text-sm font-medium text-muted-foreground">
              {categories.length} Categories
            </span>
          </div>
        </div>
      </section>

      {/* ── Quick Start Grid ─────────────────────────────────────── */}
      <section className="border-b border-border/40">
        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-2">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">Popular Resources</h2>
            <LearningTip categories={['resource', 'study']} />
          </div>
          <p className="mx-auto mt-3 max-w-xl text-center text-muted-foreground">
            Jump straight into the most-used study materials.
          </p>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {quickStart.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group rounded-xl border border-border bg-card p-6 transition-all duration-200 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── All Categories Grid ──────────────────────────────────── */}
      <section className="border-b border-border/40">
        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">All Categories</h2>
            <LearningTip categories={['resource', 'exam']} />
          </div>
          <p className="mt-2 text-muted-foreground">
            Browse every resource type available on the platform.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
            {categories.map((cat) => {
              const Icon = cat.icon
              return (
                <Link
                  key={cat.name}
                  href={cat.href}
                  className="group flex items-center gap-3 rounded-lg border border-transparent px-4 py-3 transition-colors hover:border-border hover:bg-muted"
                >
                  <Icon className="h-4 w-4 shrink-0 text-muted-foreground group-hover:text-primary transition-colors" />
                  <span className="text-sm font-medium text-foreground">{cat.name}</span>
                  <ArrowRight className="ml-auto h-3.5 w-3.5 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}
