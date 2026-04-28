import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  alternates: { canonical: 'https://theenglishhub.app/revision' },
}

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
  Wrench,
  FolderOpen,
  LineChart,
  ClipboardList,
  Timer,
  Dumbbell,
  Gamepad2,
  Flame,
  Library,
  CheckSquare,
  GitCompare,
  Quote,
  Edit3,
  StickyNote,
  ShieldAlert,
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
      'Smart review flashcards for quotes, terminology, and key concepts. Study smarter, not harder.',
    href: '/revision/flashcards',
    icon: Layers,
    colour: 'text-clay-600',
    bgColour: 'bg-amber-500/10',
    stats: '500+ cards',
    tag: 'New',
  },
  {
    title: 'Exam Technique',
    description:
      'Essay structures, timing strategies, question types, and marking guide breakdowns for every paper.',
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
    stats: 'Grades 1-9',
  },
  {
    title: 'Quick Quizzes',
    description:
      'Test yourself with timed quizzes on any topic. Instant feedback and progress tracking.',
    href: '/revision/quiz',
    icon: Zap,
    colour: 'text-clay-600',
    bgColour: 'bg-orange-500/10',
    stats: '100+ quizzes',
  },
  {
    title: 'Reading Assessment',
    description:
      'Timed reading tests with extracts and mark schemes. Benchmark your comprehension against GCSE/IGCSE standards.',
    href: '/assessment/reading',
    icon: ClipboardList,
    colour: 'text-blue-400',
    bgColour: 'bg-blue-500/10',
    stats: 'Diagnostic',
  },
  {
    title: 'Mock Exams',
    description:
      'Full timed mock papers for every board with examiner-grade feedback. Build exam stamina before the real thing.',
    href: '/mock-exams',
    icon: Timer,
    colour: 'text-emerald-400',
    bgColour: 'bg-emerald-500/10',
    stats: 'Full papers',
  },
  {
    title: 'Practice',
    description:
      'Bite-sized practice tasks for every skill \u2014 analysis paragraphs, comparisons, creative writing prompts.',
    href: '/practice',
    icon: Dumbbell,
    colour: 'text-violet-400',
    bgColour: 'bg-violet-500/10',
    stats: 'Daily drills',
  },
  {
    title: 'Games',
    description: 'Vocabulary, quote-match and terminology games \u2014 learn faster by playing.',
    href: '/games',
    icon: Gamepad2,
    colour: 'text-clay-600',
    bgColour: 'bg-amber-500/10',
    stats: 'Play to learn',
  },
  {
    title: 'Resources Hub',
    description:
      'The full library: poetry guides, set-text packs, exam papers, themes, context, glossary and more.',
    href: '/resources',
    icon: Library,
    colour: 'text-amber-400',
    bgColour: 'bg-amber-500/10',
    stats: '300+ guides',
  },
  {
    title: 'Revision Notes',
    description:
      'Concise per-text revision notes you can skim before an exam \u2014 every set text, every key topic.',
    href: '/resources/revision-notes',
    icon: StickyNote,
    colour: 'text-blue-400',
    bgColour: 'bg-blue-500/10',
    stats: '20+ texts',
  },
  {
    title: 'Model Answers',
    description:
      'Top-grade exemplar answers for literature essays, language analysis and creative writing tasks.',
    href: '/resources/model-answers',
    icon: CheckSquare,
    colour: 'text-emerald-400',
    bgColour: 'bg-emerald-500/10',
    stats: 'Grade 7-9',
  },
  {
    title: 'Comparison Essay Guide',
    description:
      'Step-by-step structure, sentence stems and worked examples for poetry and unseen comparison questions.',
    href: '/revision/poetry/love-and-relationships/comparison-guide',
    icon: GitCompare,
    colour: 'text-violet-400',
    bgColour: 'bg-violet-500/10',
    stats: 'Structure + stems',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },
  {
    title: 'Vocabulary',
    description:
      'Academic, analytical and descriptive word banks to upgrade your essays and creative writing.',
    href: '/resources/vocabulary',
    icon: Quote,
    colour: 'text-rose-400',
    bgColour: 'bg-rose-500/10',
    stats: '1000+ words',
  },
  {
    title: 'Writing Skills',
    description:
      'Creative, analytical, persuasive and grammar guides \u2014 the craft skills behind every paper.',
    href: '/resources/writing-skills',
    icon: Edit3,
    colour: 'text-cyan-400',
    bgColour: 'bg-cyan-500/10',
    stats: '4 skill areas',
  },
  {
    title: 'Common Errors',
    description:
      '30 mistakes that cost marks \u2014 misquotations, wrong contexts, anthology version mix-ups. Verified against board specs.',
    href: '/revision/common-errors',
    icon: ShieldAlert,
    colour: 'text-rose-400',
    bgColour: 'bg-rose-500/10',
    stats: '30 verified flags',
    tag: 'New',
  },
]

// ─── Toolkit sections (surfaced from /toolkit/* into the hub) ──────────────
// These cards link to the existing /toolkit/* pages so deep links keep working.

const TOOLKIT_SECTIONS: RevisionSection[] = [
  {
    title: 'Revision Builder',
    description:
      'Generate AI revision notes tailored to your weak areas, target grade, and study history.',
    href: '/toolkit/revision-builder',
    icon: FileText,
    colour: 'text-blue-400',
    bgColour: 'bg-blue-500/10',
    stats: 'AI-powered',
    tag: 'AI',
  },
  {
    title: 'Test Builder',
    description:
      'Create custom tests from your board\u2019s texts and topics, auto-scored with grade equivalents.',
    href: '/toolkit/test-builder',
    icon: PenTool,
    colour: 'text-violet-400',
    bgColour: 'bg-violet-500/10',
    stats: 'Custom tests',
    tag: 'AI',
  },
  {
    title: 'Personalised Revision',
    description:
      'A revision guide built from your data \u2014 targets weakest areas, then stretches you higher.',
    href: '/toolkit/personalised-revision',
    icon: Target,
    colour: 'text-rose-400',
    bgColour: 'bg-rose-500/10',
    stats: 'Data-driven',
    tag: 'New',
  },
  {
    title: 'My Materials',
    description:
      'Every custom test, revision note, and quote bank you have saved, in one searchable place.',
    href: '/toolkit/my-materials',
    icon: FolderOpen,
    colour: 'text-amber-400',
    bgColour: 'bg-amber-500/10',
    stats: 'Your library',
  },
  {
    title: 'Progress',
    description:
      'Track scores, study streaks, and predicted grades based on everything you have done.',
    href: '/toolkit/progress',
    icon: BarChart3,
    colour: 'text-emerald-400',
    bgColour: 'bg-emerald-500/10',
    stats: 'Grade predictor',
  },
]

function getSectionsForBoard(board: ExamBoard | null): RevisionSection[] {
  if (!board) return ALL_SECTIONS
  return ALL_SECTIONS.filter((s) => !s.boards || s.boards.includes(board))
}

function getToolkitSectionsForBoard(board: ExamBoard | null): RevisionSection[] {
  // Toolkit tools work across every board — no per-board filtering today,
  // but we keep the same contract as revision sections for future gating.
  if (!board) return TOOLKIT_SECTIONS
  return TOOLKIT_SECTIONS.filter((s) => !s.boards || s.boards.includes(board))
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
  const toolkitSections = getToolkitSectionsForBoard(board)
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
      <section
        aria-labelledby="revision-hero-heading"
        className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-primary/[0.04] p-6 sm:p-8 lg:p-10"
      >
        {/* decorative glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-violet-500/5 blur-3xl"
        />

        <div className="relative">
          <Badge variant="secondary" className="mb-4">
            <Sparkles className="mr-1 size-3" aria-hidden="true" />
            {config ? config.fullName : 'GCSE English Revision'}
          </Badge>
          <h1
            id="revision-hero-heading"
            className="text-display-sm font-heading text-foreground sm:text-display"
          >
            {headingPrefix} Hub
          </h1>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
            {isCambridge
              ? `Your unified home for ${boardName} First Language English. Revision, study tools, progress tracking, and exam technique \u2014 all built around your specification.`
              : `Your unified home for ${boardName} English. Revision guides, AI study tools, progress tracking, and exam technique \u2014 all built around your specification.`}
          </p>

          {/* Quick stats */}
          <div className="mt-6 flex flex-wrap gap-4 sm:gap-6">
            {QUICK_STATS.map((stat) => (
              <div
                key={stat.label}
                className="flex items-center gap-2 rounded-lg border border-border/40 bg-background/50 px-3 py-2"
              >
                <stat.icon className="size-4 text-primary" aria-hidden="true" />
                <span className="text-sm font-semibold text-foreground">{stat.value}</span>
                <span className="text-sm text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Headline analytics (streak, progress, AI feedback) ────────── */}
      <section aria-label="Your progress snapshot" className="grid gap-4 sm:grid-cols-3">
        <Link
          href="/revision/analytics"
          className="group flex flex-col justify-between rounded-2xl border border-border/60 bg-card p-5 transition-all hover:border-emerald-500/40 hover:shadow-card-hover"
        >
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-xl bg-emerald-500/10">
              <Flame className="size-5 text-emerald-400" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Streak</p>
              <p className="text-heading-sm font-heading text-foreground">Your study streak</p>
            </div>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            Keep going daily — every session you complete on a quiz, set text, or mock exam builds
            your streak.
          </p>
          <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-primary group-hover:gap-2 transition-all">
            View full analytics <ArrowRight className="size-3" />
          </span>
        </Link>
        <Link
          href="/revision/analytics"
          className="group flex flex-col justify-between rounded-2xl border border-border/60 bg-card p-5 transition-all hover:border-cyan-500/40 hover:shadow-card-hover"
        >
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-xl bg-cyan-500/10">
              <TrendingUp className="size-5 text-cyan-400" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Progress</p>
              <p className="text-heading-sm font-heading text-foreground">{boardName} coverage</p>
            </div>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            Track how much of the {boardName} syllabus you&apos;ve covered and where you still have
            gaps.
          </p>
          <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-primary group-hover:gap-2 transition-all">
            See what&apos;s next <ArrowRight className="size-3" />
          </span>
        </Link>
        <Link
          href="/revision/analytics"
          className="group flex flex-col justify-between rounded-2xl border border-border/60 bg-card p-5 transition-all hover:border-violet-500/40 hover:shadow-card-hover"
        >
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-xl bg-violet-500/10">
              <Sparkles className="size-5 text-violet-400" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">AI feedback</p>
              <p className="text-heading-sm font-heading text-foreground">Latest marked work</p>
            </div>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            AI grades on your recent essays, with the top three improvements to take forward.
          </p>
          <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-primary group-hover:gap-2 transition-all">
            Open feedback <ArrowRight className="size-3" />
          </span>
        </Link>
      </section>

      {/* ── Study Plan CTA ──────────────────────────────────────────── */}
      <section className="rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/[0.08] via-card to-violet-500/[0.05] p-6 sm:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-4">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/15">
              <CalendarDays className="size-6 text-primary" aria-hidden="true" />
            </div>
            <div>
              <Badge variant="secondary" className="mb-2">
                <Sparkles className="mr-1 size-3" aria-hidden="true" />
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
          <GraduationCap className="size-5 text-primary" aria-hidden="true" />
          <h2 className="text-heading-lg font-heading text-foreground">Explore Sections</h2>
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
                  <section.icon className={`size-5 ${section.colour}`} aria-hidden="true" />
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
                <ArrowRight className="size-3.5" aria-hidden="true" />
              </div>
            </Link>
          ))}
        </div>

        {/* IGCSE deep-link callout */}
        {isIgcse && (
          <div className="mt-5 rounded-2xl border border-cyan-500/20 bg-cyan-500/[0.04] p-5">
            <div className="flex items-start gap-4">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10">
                <GraduationCap className="size-5 text-cyan-400" aria-hidden="true" />
              </div>
              <div className="flex-1">
                <h3 className="text-heading-md font-heading text-foreground">IGCSE Resources</h3>
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

      {/* ── Your Toolkit ─────────────────────────────────────────────── */}
      <section aria-labelledby="your-toolkit-heading">
        <div className="mb-5 flex items-center gap-3">
          <Wrench className="size-5 text-primary" aria-hidden="true" />
          <h2 id="your-toolkit-heading" className="text-heading-lg font-heading text-foreground">
            Your Toolkit
          </h2>
          {config && (
            <Badge variant="outline" className="ml-1 text-xs">
              For {boardName}
            </Badge>
          )}
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {toolkitSections.map((section) => (
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
                  <section.icon className={`size-5 ${section.colour}`} aria-hidden="true" />
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
                Open tool
                <ArrowRight className="size-3.5" aria-hidden="true" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Your Analytics CTA ───────────────────────────────────────── */}
      <section aria-labelledby="your-analytics-heading">
        <Link
          href="/revision/analytics"
          className="group flex flex-col gap-4 rounded-2xl border border-border/60 bg-gradient-to-br from-cyan-500/[0.06] via-card to-primary/[0.04] p-6 sm:p-8 transition-all duration-200 hover:border-border hover:shadow-card-hover sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex items-start gap-4">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10">
              <LineChart className="size-6 text-cyan-400" aria-hidden="true" />
            </div>
            <div>
              <Badge variant="secondary" className="mb-2">
                <Sparkles className="mr-1 size-3" aria-hidden="true" />
                New
              </Badge>
              <h2
                id="your-analytics-heading"
                className="text-heading-md font-heading text-foreground group-hover:text-primary transition-colors"
              >
                Your Analytics
              </h2>
              <p className="mt-1 max-w-xl text-body-sm text-muted-foreground">
                Deep-dive dashboards showing time studied, accuracy by topic, predicted grade
                trajectory, and where to focus next.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1 text-sm font-medium text-primary">
            Open analytics
            <ArrowRight
              className="size-4 transition-transform group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </div>
        </Link>
      </section>

      {/* ── Recently Studied (client) ────────────────────────────────── */}
      <RecentlyStudied />

      {/* ── Featured set text (board-aware) ──────────────────────────── */}
      {featuredText && !isCambridge && (
        <section className="rounded-2xl border border-border/60 bg-gradient-to-r from-blue-500/[0.04] via-card to-primary/[0.04] p-6 sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <Badge variant="secondary" className="mb-2">
                <BookText className="mr-1 size-3" aria-hidden="true" />
                Featured for {boardName}
              </Badge>
              <h2 className="text-heading-md font-heading text-foreground">{featuredText.title}</h2>
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
        <BarChart3 className="mx-auto mb-3 size-8 text-primary" aria-hidden="true" />
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
