import type { Metadata } from 'next'
import Link from 'next/link'
import { getServerBoard } from '@/lib/board/get-server-board'
import { getBoardConfig, type ExamBoard } from '@/lib/board/board-config'
import { tMany } from '@/lib/i18n/t'

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
  titleKey: string
  descKey: string
  href: string
  icon: LucideIcon
  // Boards this card is relevant to. Omit (or 'all') to show for everyone.
  boards?: ExamBoard[]
}

const QUICK_START: ResourceCard[] = [
  {
    titleKey: 'resources.hub.quick.revision_notes.title',
    descKey: 'resources.hub.quick.revision_notes.desc',
    href: '/resources/revision-notes',
    icon: BookOpen,
  },
  {
    titleKey: 'resources.hub.quick.writing_skills.title',
    descKey: 'resources.hub.quick.writing_skills.desc',
    href: '/resources/writing-skills',
    icon: PenTool,
  },
  {
    titleKey: 'resources.hub.quick.poetry.title',
    descKey: 'resources.hub.quick.poetry.desc',
    href: '/resources/poetry',
    icon: Feather,
    // Cambridge IGCSE has no set poetry anthology
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },
  {
    titleKey: 'resources.hub.quick.techniques.title',
    descKey: 'resources.hub.quick.techniques.desc',
    href: '/resources/techniques',
    icon: Sparkles,
  },
  {
    titleKey: 'resources.hub.quick.model_answers.title',
    descKey: 'resources.hub.quick.model_answers.desc',
    href: '/resources/model-answers',
    icon: FileText,
  },
  {
    titleKey: 'resources.hub.quick.study_tools.title',
    descKey: 'resources.hub.quick.study_tools.desc',
    href: '/resources/study-tools',
    icon: Wrench,
  },
]

/* ─── All Categories ─────────────────────────────────────────── */

type Category = {
  nameKey: string
  href: string
  icon: LucideIcon
  boards?: ExamBoard[]
}

const ALL_CATEGORIES: Category[] = [
  {
    nameKey: 'resources.hub.cat.english_literature',
    href: '/resources/english-literature',
    icon: BookMarked,
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },
  {
    nameKey: 'resources.hub.cat.english_language',
    href: '/resources/english-language',
    icon: MessageSquare,
  },
  {
    nameKey: 'resources.hub.cat.revision_notes',
    href: '/resources/revision-notes',
    icon: BookOpen,
  },
  {
    nameKey: 'resources.hub.cat.poetry',
    href: '/resources/poetry',
    icon: Feather,
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },
  { nameKey: 'resources.hub.cat.writing_skills', href: '/resources/writing-skills', icon: PenTool },
  { nameKey: 'resources.hub.cat.techniques', href: '/resources/techniques', icon: Sparkles },
  { nameKey: 'resources.hub.cat.model_answers', href: '/resources/model-answers', icon: FileText },
  {
    nameKey: 'resources.hub.cat.exam_technique',
    href: '/resources/exam-technique',
    icon: GraduationCap,
  },
  { nameKey: 'resources.hub.cat.grade_targets', href: '/resources/grade-targets', icon: Target },
  { nameKey: 'resources.hub.cat.study_tools', href: '/resources/study-tools', icon: Wrench },
  { nameKey: 'resources.hub.cat.vocabulary', href: '/resources/vocabulary', icon: Search },
  { nameKey: 'resources.hub.cat.glossary', href: '/resources/glossary', icon: Library },
  { nameKey: 'resources.hub.cat.context', href: '/resources/context', icon: Lightbulb },
  { nameKey: 'resources.hub.cat.themes', href: '/resources/themes', icon: Layers },
  { nameKey: 'resources.hub.cat.authors', href: '/resources/authors', icon: Quote },
  { nameKey: 'resources.hub.cat.spoken_language', href: '/resources/spoken-language', icon: Mic },
  { nameKey: 'resources.hub.cat.teaching', href: '/resources/teaching', icon: Users },
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

  // Collect all i18n keys (hero + quick + categories + section headings) in
  // one batched lookup. Keeps the AR variant a single cookie-flip away.
  const quickTitleKeys = quickStart.map((q) => q.titleKey)
  const quickDescKeys = quickStart.map((q) => q.descKey)
  const categoryKeys = categories.map((c) => c.nameKey)

  const staticKeys = [
    'resources.hub.eyebrow',
    'resources.hub.title',
    'resources.hub.subtitle',
    'resources.hub.board_prefix',
    'resources.hub.stat.study_guides',
    'resources.hub.stat.categories',
    'resources.hub.popular.title',
    'resources.hub.popular.subtitle',
    'resources.hub.all.title',
    'resources.hub.all.subtitle',
  ]

  const labels = await tMany([...staticKeys, ...quickTitleKeys, ...quickDescKeys, ...categoryKeys])

  const [
    eyebrow,
    title,
    subtitle,
    boardPrefix,
    statStudyGuides,
    statCategories,
    popularTitle,
    popularSubtitle,
    allTitle,
    allSubtitle,
  ] = labels
  const offset = staticKeys.length
  const quickTitles = labels.slice(offset, offset + quickTitleKeys.length)
  const quickDescs = labels.slice(
    offset + quickTitleKeys.length,
    offset + quickTitleKeys.length + quickDescKeys.length,
  )
  const categoryNames = labels.slice(offset + quickTitleKeys.length + quickDescKeys.length)

  return (
    <main className="min-h-screen bg-background">
      {/* ── Hero Section ─────────────────────────────────────────── */}
      <section className="border-b border-border/40">
        <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            {eyebrow}
          </span>

          <div className="mt-6 flex items-center justify-center gap-2">
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              {title}
            </h1>
            <LearningTip categories={['resource', 'study']} side="bottom" size="md" />
          </div>

          {boardConfig && (
            <div className="mt-4 flex justify-center">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                {boardPrefix} {boardConfig.shortName}
              </span>
            </div>
          )}

          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">{subtitle}</p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <span className="rounded-full border border-border bg-card px-3.5 py-1 text-sm font-medium text-muted-foreground">
              {quickStart.length + categories.length} {statStudyGuides}
            </span>
            <span className="text-border">·</span>
            <span className="rounded-full border border-border bg-card px-3.5 py-1 text-sm font-medium text-muted-foreground">
              {categories.length} {statCategories}
            </span>
          </div>
        </div>
      </section>

      {/* ── Quick Start Grid ─────────────────────────────────────── */}
      <section className="border-b border-border/40">
        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-2">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">{popularTitle}</h2>
            <LearningTip categories={['resource', 'study']} />
          </div>
          <p className="mx-auto mt-3 max-w-xl text-center text-muted-foreground">
            {popularSubtitle}
          </p>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {quickStart.map((item, i) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.titleKey}
                  href={item.href}
                  className="group rounded-xl border border-border bg-card p-6 transition-all duration-200 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {quickTitles[i]}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {quickDescs[i]}
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
            <h2 className="text-2xl font-bold tracking-tight text-foreground">{allTitle}</h2>
            <LearningTip categories={['resource', 'exam']} />
          </div>
          <p className="mt-2 text-muted-foreground">{allSubtitle}</p>

          <div className="mt-10 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
            {categories.map((cat, i) => {
              const Icon = cat.icon
              return (
                <Link
                  key={cat.nameKey}
                  href={cat.href}
                  className="group flex items-center gap-3 rounded-lg border border-transparent px-4 py-3 transition-colors hover:border-border hover:bg-muted"
                >
                  <Icon className="h-4 w-4 shrink-0 text-muted-foreground group-hover:text-primary transition-colors" />
                  <span className="text-sm font-medium text-foreground">{categoryNames[i]}</span>
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
