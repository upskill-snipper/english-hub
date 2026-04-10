import Link from 'next/link'
import {
  BookOpen,
  Layers,
  FileText,
  PenTool,
  GraduationCap,
  Target,
  Brain,
  Sparkles,
  ArrowRight,
  TrendingUp,
  BookText,
  Zap,
  BarChart3,
  CalendarDays,
} from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

import { getServerBoard } from '@/lib/board/get-server-board'
import { getBoardConfig, type ExamBoard } from '@/lib/board/board-config'
import { isIgcseBoard } from '@/lib/board/board-filter'
import { getSetTextsForBoard } from '@/lib/board/set-texts'
import { RecentlyStudied } from './_components/recently-studied'

// ─── Section data ──────────────────────────────────────────────────────────

interface RevisionSection {
  title: string
  description: string
  href: string
  icon: typeof BookOpen
  colour: string
  bgColour: string
  stats: string
  tag?: string
  /** Boards this section is shown to. Omit to show for all. */
  boards?: ExamBoard[]
}

const ALL_SECTIONS: RevisionSection[] = [
  {
    title: 'Poetry',
    description:
      'Interactive analysis of every anthology poem. Annotations, comparisons, and practice questions.',
    href: '/revision/poetry',
    icon: FileText,
    colour: 'text-rose-400',
    bgColour: 'bg-rose-500/10',
    stats: '30+ poems',
    tag: 'Popular',
    // All boards study poetry EXCEPT Cambridge (0500/0990) which are language only
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },
  {
    title: 'Set Texts',
    description:
      'In-depth study guides for Shakespeare, 19th-century novels, and modern texts with reading tracker.',
    href: '/revision/texts',
    icon: BookText,
    colour: 'text-blue-400',
    bgColour: 'bg-blue-500/10',
    stats: '20+ texts',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },
  {
    title: 'Language Skills',
    description:
      'Reading comprehension, creative writing, transactional writing, and SPaG mastery.',
    href: '/revision/language',
    icon: PenTool,
    colour: 'text-violet-400',
    bgColour: 'bg-violet-500/10',
    stats: '4 skill areas',
  },
  {
    title: 'Flashcards',
    description:
      'Spaced repetition flashcards for quotes, terminology, and key concepts. Study smarter, not harder.',
    href: '/revision/flashcards',
    icon: Layers,
    colour: 'text-amber-400',
    bgColour: 'bg-amber-500/10',
    stats: '500+ cards',
    tag: 'New',
  },
  {
    title: 'Exam Technique',
    description:
      'Essay structures, timing strategies, question types, and mark scheme breakdowns for every paper.',
    href: '/revision/exam-technique',
    icon: Target,
    colour: 'text-emerald-400',
    bgColour: 'bg-emerald-500/10',
    stats: '12 guides',
  },
  {
    title: 'Grade Targets',
    description:
      'Personalised revision plans based on your target grade. Know exactly what to focus on.',
    href: '/revision/grade-targets',
    icon: TrendingUp,
    colour: 'text-cyan-400',
    bgColour: 'bg-cyan-500/10',
    stats: 'Grades 4-9',
  },
  {
    title: 'Quick Quizzes',
    description:
      'Test yourself with timed quizzes on any topic. Instant feedback and progress tracking.',
    href: '/revision/quiz',
    icon: Zap,
    colour: 'text-orange-400',
    bgColour: 'bg-orange-500/10',
    stats: '100+ quizzes',
  },
]

function getSectionsForBoard(board: ExamBoard | null): RevisionSection[] {
  if (!board) return ALL_SECTIONS
  return ALL_SECTIONS.filter((s) => !s.boards || s.boards.includes(board))
}

// ─── Quick stats ──────────────────────────────────────────────────────────

const QUICK_STATS = [
  { label: 'Subjects', value: '7', icon: BookOpen },
  { label: 'Resources', value: '200+', icon: FileText },
  { label: 'Flashcards', value: '500+', icon: Layers },
  { label: 'Quizzes', value: '100+', icon: Brain },
]

// ─── Component ──────────────────────────────────────────────────────────────

export default async function RevisionHubPage() {
  const board = await getServerBoard()
  const config = getBoardConfig(board)
  const sections = getSectionsForBoard(board)
  const isIgcse = isIgcseBoard(board)
  const isCambridge = board === 'cambridge-0500' || board === 'cambridge-0990'

  // Pick a board-relevant set text for the suggested-next card
  const setTexts = getSetTextsForBoard(board)
  const featuredText = setTexts.find((t) => t.slug === 'macbeth') ?? setTexts[0]

  const boardName = config?.shortName ?? 'GCSE'
  const headingPrefix = config ? `Your ${boardName}` : 'Your'

  return (
    <div className="space-y-10 pb-16">
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-primary/[0.04] p-6 sm:p-8 lg:p-10">
        {/* decorative glow */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-violet-500/5 blur-3xl" />

        <div className="relative">
          <Badge variant="secondary" className="mb-4">
            <Sparkles className="mr-1 size-3" />
            {config ? config.fullName : 'GCSE English Revision'}
          </Badge>
          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            {headingPrefix} Revision Hub
          </h1>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
            {isCambridge
              ? `Everything you need to ace ${boardName} First Language English. Reading and writing technique, exam strategy, and language analysis -- all built around your specification.`
              : `Everything you need to ace your ${boardName} English exams in one place. Interactive study guides, spaced repetition flashcards, and exam technique mastery -- built around your specification.`}
          </p>

          {/* Quick stats */}
          <div className="mt-6 flex flex-wrap gap-4 sm:gap-6">
            {QUICK_STATS.map((stat) => (
              <div
                key={stat.label}
                className="flex items-center gap-2 rounded-lg border border-border/40 bg-background/50 px-3 py-2"
              >
                <stat.icon className="size-4 text-primary" />
                <span className="text-sm font-semibold text-foreground">{stat.value}</span>
                <span className="text-sm text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Study Plan CTA ──────────────────────────────────────────── */}
      <section className="rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/[0.08] via-card to-violet-500/[0.05] p-6 sm:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-4">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/15">
              <CalendarDays className="size-6 text-primary" />
            </div>
            <div>
              <Badge variant="secondary" className="mb-2">
                <Sparkles className="mr-1 size-3" />
                Personalised for {boardName}
              </Badge>
              <h2 className="text-heading-md font-heading text-foreground">
                Build your study plan
              </h2>
              <p className="mt-1 max-w-xl text-body-sm text-muted-foreground">
                Answer a few quick questions and get a week-by-week revision plan tailored to your
                exam date, target grade, and weakest area -- using {boardName} texts and papers.
              </p>
            </div>
          </div>
          <Button variant="default" size="lg" render={<Link href="/revision/study-plan" />}>
            Start diagnostic
            <ArrowRight className="size-4" />
          </Button>
        </div>
      </section>

      {/* ── Section Cards ────────────────────────────────────────────── */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <GraduationCap className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">
            Explore Sections
          </h2>
          {config && (
            <Badge variant="outline" className="ml-1 text-xs">
              For {boardName}
            </Badge>
          )}
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sections.map((section) => (
            <Link
              key={section.href}
              href={section.href}
              className="group relative flex flex-col rounded-2xl border border-border/60 bg-card p-5 transition-all duration-200 hover:border-border hover:shadow-card-hover"
            >
              {section.tag && (
                <Badge
                  variant="default"
                  className="absolute right-4 top-4 text-[0.65rem] uppercase tracking-wider"
                >
                  {section.tag}
                </Badge>
              )}

              <div className="mb-3 flex items-center gap-3">
                <div
                  className={`flex size-10 items-center justify-center rounded-xl ${section.bgColour}`}
                >
                  <section.icon className={`size-5 ${section.colour}`} />
                </div>
                <div>
                  <h3 className="text-heading-md font-heading text-foreground group-hover:text-primary transition-colors">
                    {section.title}
                  </h3>
                  <span className="text-caption text-muted-foreground">{section.stats}</span>
                </div>
              </div>

              <p className="flex-1 text-body-sm text-muted-foreground leading-relaxed">
                {section.description}
              </p>

              <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                Start revising
                <ArrowRight className="size-3.5" />
              </div>
            </Link>
          ))}
        </div>

        {/* IGCSE deep-link callout */}
        {isIgcse && (
          <div className="mt-5 rounded-2xl border border-cyan-500/20 bg-cyan-500/[0.04] p-5">
            <div className="flex items-start gap-4">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10">
                <GraduationCap className="size-5 text-cyan-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-heading-md font-heading text-foreground">
                  IGCSE Resources
                </h3>
                <p className="mt-1 text-body-sm text-muted-foreground">
                  We have dedicated guides, exam papers, and walkthroughs for{' '}
                  {config?.fullName ?? 'your IGCSE specification'}.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-3"
                  render={
                    <Link
                      href={
                        board === 'edexcel-igcse'
                          ? '/igcse/edexcel'
                          : board === 'cambridge-0500'
                            ? '/igcse/cambridge/0500'
                            : '/igcse/cambridge/0990'
                      }
                    />
                  }
                >
                  Open IGCSE hub
                  <ArrowRight className="size-3.5" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* ── Recently Studied (client) ────────────────────────────────── */}
      <RecentlyStudied />

      {/* ── Featured set text (board-aware) ──────────────────────────── */}
      {featuredText && !isCambridge && (
        <section className="rounded-2xl border border-border/60 bg-gradient-to-r from-blue-500/[0.04] via-card to-primary/[0.04] p-6 sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <Badge variant="secondary" className="mb-2">
                <BookText className="mr-1 size-3" />
                Featured for {boardName}
              </Badge>
              <h2 className="text-heading-md font-heading text-foreground">
                {featuredText.title}
              </h2>
              <p className="mt-1 text-body-sm text-muted-foreground">
                by {featuredText.author}. One of the most-studied texts on your specification.
              </p>
            </div>
            <Button
              variant="outline"
              size="lg"
              render={<Link href={`/revision/texts/${featuredText.slug}`} />}
            >
              Open study guide
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </section>
      )}

      {/* ── Motivational banner ──────────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-gradient-to-r from-primary/[0.06] via-card to-violet-500/[0.04] p-6 sm:p-8 text-center">
        <BarChart3 className="mx-auto mb-3 size-8 text-primary" />
        <h2 className="text-heading-lg font-heading text-foreground">
          Consistent revision beats cramming every time
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-body-sm text-muted-foreground">
          Students who revise for 20 minutes a day outperform those who cram for hours before the
          exam. Start with one section above and build the habit.
        </p>
        <Button
          variant="default"
          size="lg"
          className="mt-5"
          render={<Link href="/revision/flashcards" />}
        >
          Start a quick session
          <ArrowRight className="size-4" />
        </Button>
      </section>
    </div>
  )
}
