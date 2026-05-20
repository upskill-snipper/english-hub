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
  Sparkles,
  ArrowRight,
  TrendingUp,
  BookText,
  Zap,
  BarChart3,
  CalendarDays,
  FolderOpen,
  ClipboardList,
  Timer,
  Dumbbell,
  Gamepad2,
  Library,
  CheckSquare,
  GitCompare,
  Quote,
  Edit3,
  StickyNote,
  ShieldAlert,
  Languages,
  ChevronDown,
} from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

import { getServerBoard } from '@/lib/board/get-server-board'
import { getBoardConfig, type ExamBoard } from '@/lib/board/board-config'
import { isIgcseBoard } from '@/lib/board/board-filter'
import { getSetTextsForBoard } from '@/lib/board/set-texts'
import { RecentlyStudied } from './_components/recently-studied'
import { RevisionHubLenses, type RecommendedItem } from './_components/revision-hub-lenses'
import { FavouriteToggle } from './_components/favourite-toggle'
import { TrialCountdownBannerServer } from '@/components/billing/TrialCountdownBannerServer'
import { t } from '@/lib/i18n/t'

// ─── Section data ──────────────────────────────────────────────────────────

interface RevisionSection {
  titleKey: string
  descKey: string
  href: string
  icon: typeof BookOpen
  colour: string
  bgColour: string
  statsKey: string
  tagKey?: string
  boards?: ExamBoard[]
  papers?: ReadonlyArray<'lit' | 'lang'>
}

function paperLabelKey(papers: RevisionSection['papers']): string | null {
  if (!papers || papers.length === 0) return null
  const hasLit = papers.includes('lit')
  const hasLang = papers.includes('lang')
  if (hasLit && hasLang) return 'revision_page.paper.lit_lang'
  if (hasLit) return 'revision_page.paper.lit'
  if (hasLang) return 'revision_page.paper.lang'
  return null
}

function paperBadgeClasses(papers: RevisionSection['papers']): string {
  if (!papers || papers.length === 0) return ''
  const hasLit = papers.includes('lit')
  const hasLang = papers.includes('lang')
  if (hasLit && hasLang) return 'bg-amber-500/10 text-amber-300 ring-amber-500/30'
  if (hasLit) return 'bg-blue-500/10 text-blue-300 ring-blue-500/30'
  if (hasLang) return 'bg-violet-500/10 text-violet-300 ring-violet-500/30'
  return ''
}

const ALL_SECTIONS: RevisionSection[] = [
  {
    titleKey: 'revision_page.section.poetry.title',
    descKey: 'revision_page.section.poetry.desc',
    href: '/revision/poetry',
    icon: FileText,
    colour: 'text-rose-400',
    bgColour: 'bg-rose-500/10',
    statsKey: 'revision_page.section.poetry.stats',
    tagKey: 'revision_page.section.poetry.tag',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
    papers: ['lit'],
  },
  {
    titleKey: 'revision_page.section.texts.title',
    descKey: 'revision_page.section.texts.desc',
    href: '/revision/texts',
    icon: BookText,
    colour: 'text-blue-400',
    bgColour: 'bg-blue-500/10',
    statsKey: 'revision_page.section.texts.stats',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
    papers: ['lit'],
  },
  {
    titleKey: 'revision_page.section.language.title',
    descKey: 'revision_page.section.language.desc',
    href: '/revision/language',
    icon: PenTool,
    colour: 'text-violet-400',
    bgColour: 'bg-violet-500/10',
    statsKey: 'revision_page.section.language.stats',
    papers: ['lang'],
  },
  {
    titleKey: 'revision_page.section.flashcards.title',
    descKey: 'revision_page.section.flashcards.desc',
    href: '/revision/flashcards',
    icon: Layers,
    colour: 'text-clay-600',
    bgColour: 'bg-amber-500/10',
    statsKey: 'revision_page.section.flashcards.stats',
    tagKey: 'revision_page.section.flashcards.tag',
  },
  {
    titleKey: 'revision_page.section.exam_technique.title',
    descKey: 'revision_page.section.exam_technique.desc',
    href: '/revision/exam-technique',
    icon: Target,
    colour: 'text-emerald-400',
    bgColour: 'bg-emerald-500/10',
    statsKey: 'revision_page.section.exam_technique.stats',
    papers: ['lit', 'lang'],
  },
  {
    titleKey: 'revision_page.section.grade_targets.title',
    descKey: 'revision_page.section.grade_targets.desc',
    href: '/revision/grade-targets',
    icon: TrendingUp,
    colour: 'text-cyan-400',
    bgColour: 'bg-cyan-500/10',
    statsKey: 'revision_page.section.grade_targets.stats',
    papers: ['lit', 'lang'],
  },
  {
    titleKey: 'revision_page.section.quiz.title',
    descKey: 'revision_page.section.quiz.desc',
    href: '/revision/quiz',
    icon: Zap,
    colour: 'text-clay-600',
    bgColour: 'bg-orange-500/10',
    statsKey: 'revision_page.section.quiz.stats',
    papers: ['lit', 'lang'],
  },
  {
    titleKey: 'revision_page.section.reading_assessment.title',
    descKey: 'revision_page.section.reading_assessment.desc',
    href: '/assessment/reading',
    icon: ClipboardList,
    colour: 'text-blue-400',
    bgColour: 'bg-blue-500/10',
    statsKey: 'revision_page.section.reading_assessment.stats',
    papers: ['lang'],
  },
  {
    titleKey: 'revision_page.section.mock_exams.title',
    descKey: 'revision_page.section.mock_exams.desc',
    href: '/mock-exams',
    icon: Timer,
    colour: 'text-emerald-400',
    bgColour: 'bg-emerald-500/10',
    statsKey: 'revision_page.section.mock_exams.stats',
    papers: ['lit', 'lang'],
  },
  {
    titleKey: 'revision_page.section.practice.title',
    descKey: 'revision_page.section.practice.desc',
    href: '/practice',
    icon: Dumbbell,
    colour: 'text-violet-400',
    bgColour: 'bg-violet-500/10',
    statsKey: 'revision_page.section.practice.stats',
    papers: ['lit', 'lang'],
  },
  {
    titleKey: 'revision_page.section.games.title',
    descKey: 'revision_page.section.games.desc',
    href: '/games',
    icon: Gamepad2,
    colour: 'text-clay-600',
    bgColour: 'bg-amber-500/10',
    statsKey: 'revision_page.section.games.stats',
  },
  {
    titleKey: 'revision_page.section.resources.title',
    descKey: 'revision_page.section.resources.desc',
    href: '/resources',
    icon: Library,
    colour: 'text-amber-400',
    bgColour: 'bg-amber-500/10',
    statsKey: 'revision_page.section.resources.stats',
  },
  {
    titleKey: 'revision_page.section.revision_notes.title',
    descKey: 'revision_page.section.revision_notes.desc',
    href: '/resources/revision-notes',
    icon: StickyNote,
    colour: 'text-blue-400',
    bgColour: 'bg-blue-500/10',
    statsKey: 'revision_page.section.revision_notes.stats',
    papers: ['lit'],
  },
  {
    titleKey: 'revision_page.section.model_answers.title',
    descKey: 'revision_page.section.model_answers.desc',
    href: '/resources/model-answers',
    icon: CheckSquare,
    colour: 'text-emerald-400',
    bgColour: 'bg-emerald-500/10',
    statsKey: 'revision_page.section.model_answers.stats',
    papers: ['lit', 'lang'],
  },
  {
    titleKey: 'revision_page.section.comparison.title',
    descKey: 'revision_page.section.comparison.desc',
    href: '/revision/poetry/love-and-relationships/comparison-guide',
    icon: GitCompare,
    colour: 'text-violet-400',
    bgColour: 'bg-violet-500/10',
    statsKey: 'revision_page.section.comparison.stats',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
    papers: ['lit'],
  },
  {
    titleKey: 'revision_page.section.vocabulary.title',
    descKey: 'revision_page.section.vocabulary.desc',
    href: '/resources/vocabulary',
    icon: Quote,
    colour: 'text-rose-400',
    bgColour: 'bg-rose-500/10',
    statsKey: 'revision_page.section.vocabulary.stats',
    papers: ['lang'],
  },
  {
    titleKey: 'revision_page.section.writing_skills.title',
    descKey: 'revision_page.section.writing_skills.desc',
    href: '/resources/writing-skills',
    icon: Edit3,
    colour: 'text-cyan-400',
    bgColour: 'bg-cyan-500/10',
    statsKey: 'revision_page.section.writing_skills.stats',
    papers: ['lang'],
  },
  {
    titleKey: 'revision_page.section.common_errors.title',
    descKey: 'revision_page.section.common_errors.desc',
    href: '/revision/common-errors',
    icon: ShieldAlert,
    colour: 'text-rose-400',
    bgColour: 'bg-rose-500/10',
    statsKey: 'revision_page.section.common_errors.stats',
    tagKey: 'revision_page.section.common_errors.tag',
    papers: ['lit'],
  },
]

const TOOLKIT_SECTIONS: RevisionSection[] = [
  {
    titleKey: 'revision_page.toolkit.revision_builder.title',
    descKey: 'revision_page.toolkit.revision_builder.desc',
    href: '/toolkit/revision-builder',
    icon: FileText,
    colour: 'text-blue-400',
    bgColour: 'bg-blue-500/10',
    statsKey: 'revision_page.toolkit.revision_builder.stats',
    tagKey: 'revision_page.toolkit.revision_builder.tag',
  },
  {
    titleKey: 'revision_page.toolkit.test_builder.title',
    descKey: 'revision_page.toolkit.test_builder.desc',
    href: '/toolkit/test-builder',
    icon: PenTool,
    colour: 'text-violet-400',
    bgColour: 'bg-violet-500/10',
    statsKey: 'revision_page.toolkit.test_builder.stats',
    tagKey: 'revision_page.toolkit.test_builder.tag',
  },
  {
    titleKey: 'revision_page.toolkit.personalised.title',
    descKey: 'revision_page.toolkit.personalised.desc',
    href: '/toolkit/personalised-revision',
    icon: Target,
    colour: 'text-rose-400',
    bgColour: 'bg-rose-500/10',
    statsKey: 'revision_page.toolkit.personalised.stats',
    tagKey: 'revision_page.toolkit.personalised.tag',
  },
  {
    titleKey: 'revision_page.toolkit.my_materials.title',
    descKey: 'revision_page.toolkit.my_materials.desc',
    href: '/toolkit/my-materials',
    icon: FolderOpen,
    colour: 'text-amber-400',
    bgColour: 'bg-amber-500/10',
    statsKey: 'revision_page.toolkit.my_materials.stats',
  },
  {
    titleKey: 'revision_page.toolkit.progress.title',
    descKey: 'revision_page.toolkit.progress.desc',
    href: '/toolkit/progress',
    icon: BarChart3,
    colour: 'text-emerald-400',
    bgColour: 'bg-emerald-500/10',
    statsKey: 'revision_page.toolkit.progress.stats',
  },
]

const filterByBoard = (rows: RevisionSection[], board: ExamBoard | null) =>
  !board ? rows : rows.filter((s) => !s.boards || s.boards.includes(board))

// ─── Component ──────────────────────────────────────────────────────────────

export default async function RevisionHubPage() {
  const board = await getServerBoard()
  const config = getBoardConfig(board)
  const sections = filterByBoard(ALL_SECTIONS, board)
  const toolkitSections = filterByBoard(TOOLKIT_SECTIONS, board)
  const isIgcse = isIgcseBoard(board)
  const isCambridge = board === 'cambridge-0500' || board === 'cambridge-0990'

  const setTexts = getSetTextsForBoard(board)
  const featuredText = setTexts.find((tx) => tx.slug === 'macbeth') ?? setTexts[0]
  const boardName = config?.shortName ?? 'GCSE'

  // Resolve i18n strings up-front so JSX stays clean.
  const i18n = {
    heroBadge: config ? config.fullName : await t('revision_page.hero.badge_default'),
    heroBlurb: isCambridge
      ? (await t('revision_page.hero.blurb_cambridge')).replace('{board}', boardName)
      : (await t('revision_page.hero.blurb_default')).replace('{board}', boardName),
    forBoardBadge: (await t('revision_page.sections.for_board_badge')).replace(
      '{board}',
      boardName,
    ),
    startRevising: await t('revision_page.sections.start_revising'),
    igcseTitle: await t('revision_page.igcse.title'),
    igcseBody: (await t('revision_page.igcse.body')).replace(
      '{board}',
      config?.fullName ?? (await t('revision_page.igcse.body_fallback')),
    ),
    igcseCta: await t('revision_page.igcse.cta'),
    openTool: await t('revision_page.toolkit.open_tool'),
    featuredBadge: (await t('revision_page.featured.badge')).replace('{board}', boardName),
    ealEyebrow: await t('revision_page.eal_companion.eyebrow'),
    ealTitle: (await t('revision_page.eal_companion.title')).replace('{board}', boardName),
    ealBody: await t('revision_page.eal_companion.body'),
    ealCta: await t('revision_page.eal_companion.cta'),
    motivationTitle: await t('revision_page.motivation.title'),
    motivationBody: await t('revision_page.motivation.body'),
    motivationCta: await t('revision_page.motivation.cta'),
  }

  const featuredBy = featuredText
    ? (await t('revision_page.featured.by')).replace('{author}', featuredText.author)
    : ''
  const featuredCta = await t('revision_page.featured.cta')

  async function getSectionStrings(s: RevisionSection) {
    const [title, desc, stats, tag] = await Promise.all([
      t(s.titleKey),
      t(s.descKey),
      t(s.statsKey),
      s.tagKey ? t(s.tagKey) : Promise.resolve(undefined),
    ])
    const paperKey = paperLabelKey(s.papers)
    const paperLabel = paperKey ? await t(paperKey) : null
    return { title, desc, stats, tag, paperLabel }
  }

  // Merge sections + toolkit into one collapsible "All sections" grid.
  const allSections = [...sections, ...toolkitSections]
  const allSectionData = await Promise.all(allSections.map(getSectionStrings))

  // Build the resolved list passed to the lenses widget so favourites can
  // resolve href → title client-side without re-fetching i18n.
  const lensesAllSections = allSections.map((s, idx) => ({
    href: s.href,
    title: allSectionData[idx].title,
  }))

  // Hardcoded "fast wins" picks per the brief.
  const recommended: RecommendedItem[] = [
    {
      href: '/revision/exam-technique',
      title: 'Exam Technique',
      blurb: 'Boost your timing',
      icon: 'target',
    },
    {
      href: '/revision/flashcards',
      title: 'Flashcards',
      blurb: 'Quick recall practice',
      icon: 'layers',
    },
    {
      href: '/revision/texts',
      title: 'Mock Papers & Texts',
      blurb: 'Last 5 marks',
      icon: 'bookText',
    },
    {
      href: '/revision/grade-targets',
      title: 'Grade Targets',
      blurb: 'Track your trajectory',
      icon: 'trendingUp',
    },
  ]

  return (
    <div className="space-y-8 pb-16">
      {/* ── Trial countdown banner ─────────────────────────────────── */}
      <TrialCountdownBannerServer />

      {/* ── Compact hero ──────────────────────────────────────────── */}
      <section
        aria-labelledby="revision-hero-heading"
        className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-primary/[0.04] p-5 sm:p-6"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/5 blur-3xl"
        />
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          Your Hub
        </p>
        <div className="mt-1 flex flex-wrap items-center gap-2">
          <Badge variant="secondary">
            <Sparkles className="mr-1 size-3" aria-hidden="true" />
            {i18n.heroBadge}
          </Badge>
        </div>
        <h1
          id="revision-hero-heading"
          className="mt-3 max-w-2xl text-heading-lg font-heading text-foreground sm:text-display-sm"
        >
          {i18n.heroBlurb}
        </h1>

        {/* Plain stat pills */}
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border/40 bg-background/50 px-3 py-1 text-xs">
            <Target className="size-3 text-emerald-400" aria-hidden="true" />
            <span className="font-semibold text-foreground">Target G7</span>
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border/40 bg-background/50 px-3 py-1 text-xs">
            <TrendingUp className="size-3 text-cyan-400" aria-hidden="true" />
            <span className="font-semibold text-foreground">Predicted G6</span>
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border/40 bg-background/50 px-3 py-1 text-xs">
            <CalendarDays className="size-3 text-primary" aria-hidden="true" />
            <span className="font-semibold text-foreground">9-day streak</span>
          </span>
        </div>
      </section>

      {/* ── Primary actions row ──────────────────────────────────── */}
      <section
        aria-label="Primary actions"
        className="flex flex-col gap-2 sm:flex-row sm:flex-wrap"
      >
        <Button variant="default" size="lg" render={<Link href="/revision/study-plan" />}>
          Continue last lesson
          <ArrowRight className="size-4" />
        </Button>
        <Button variant="outline" size="lg" render={<Link href="/revision/exam-technique" />}>
          <Sparkles className="size-4" aria-hidden="true" />
          AI focus this week
        </Button>
        <Button variant="outline" size="lg" render={<Link href="/demo/student" />}>
          Open full dashboard
          <ArrowRight className="size-4" />
        </Button>
      </section>

      {/* ── 3-lens grid (In Progress / Recommended / Favourites) ─── */}
      <RevisionHubLenses recommended={recommended} allSections={lensesAllSections} />

      {/* ── EAL learner companion ────────────────────────────────── */}
      <section
        aria-labelledby="eal-companion-heading"
        className="rounded-2xl border border-teal-500/30 bg-gradient-to-r from-teal-500/[0.06] via-card to-teal-500/[0.04] p-6 sm:p-8"
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-4">
            <span
              aria-hidden="true"
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-500/15 text-teal-700 ring-1 ring-teal-500/30 dark:text-teal-300"
            >
              <Languages className="size-5" />
            </span>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-teal-700 dark:text-teal-300">
                {i18n.ealEyebrow}
              </p>
              <h2
                id="eal-companion-heading"
                className="mt-1 text-heading-md font-heading text-foreground"
              >
                {i18n.ealTitle}
              </h2>
              <p className="mt-2 max-w-2xl text-body-sm text-muted-foreground">{i18n.ealBody}</p>
            </div>
          </div>
          <Button
            variant="outline"
            size="lg"
            className="border-teal-500/40 text-teal-700 hover:bg-teal-500/10 hover:text-teal-800 dark:text-teal-300 dark:hover:text-teal-200"
            render={<Link href="/eal" />}
          >
            {i18n.ealCta}
            <ArrowRight className="size-4" />
          </Button>
        </div>
      </section>

      {/* ── Featured set text (board-aware) ──────────────────────── */}
      {featuredText && !isCambridge && (
        <section className="rounded-2xl border border-border/60 bg-gradient-to-r from-blue-500/[0.04] via-card to-primary/[0.04] p-6 sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <Badge variant="secondary" className="mb-2">
                <BookText className="mr-1 size-3" aria-hidden="true" />
                {i18n.featuredBadge}
              </Badge>
              <h2 className="text-heading-md font-heading text-foreground">{featuredText.title}</h2>
              <p className="mt-1 text-body-sm text-muted-foreground">{featuredBy}</p>
            </div>
            <Button
              variant="outline"
              size="lg"
              render={<Link href={`/revision/texts/${featuredText.slug}`} />}
            >
              {featuredCta}
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </section>
      )}

      {/* ── Recently Studied (client) ─────────────────────────────── */}
      <RecentlyStudied />

      {/* ── All sections (collapsible) ────────────────────────────── */}
      <section aria-labelledby="all-sections-heading">
        <details className="group rounded-2xl border border-border/60 bg-card/40 open:bg-card/60">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-3 rounded-2xl px-5 py-4 hover:bg-card/80 [&::-webkit-details-marker]:hidden">
            <div className="flex items-center gap-3">
              <GraduationCap className="size-5 text-primary" aria-hidden="true" />
              <h2
                id="all-sections-heading"
                className="text-heading-lg font-heading text-foreground"
              >
                Browse all sections
              </h2>
              <Badge variant="outline" className="ml-1 text-xs">
                {allSections.length} items
              </Badge>
              {config && (
                <Badge variant="outline" className="text-xs">
                  {i18n.forBoardBadge}
                </Badge>
              )}
            </div>
            <ChevronDown
              className="size-5 text-muted-foreground transition-transform group-open:rotate-180"
              aria-hidden="true"
            />
          </summary>

          <div className="border-t border-border/40 px-5 pb-6 pt-4">
            <p className="mb-4 text-body-sm text-muted-foreground">
              Pick a topic to dive in, or star to pin it to your Favourites above.
            </p>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {allSections.map((section, idx) => {
                const data = allSectionData[idx]
                return (
                  <div key={section.href} className="relative">
                    <FavouriteToggle href={section.href} title={data.title} />
                    <Link
                      href={section.href}
                      className="group flex h-full flex-col rounded-2xl border border-border/60 bg-card p-5 transition-all duration-200 hover:border-border hover:shadow-card-hover"
                    >
                      {data.tag && (
                        <Badge
                          variant="default"
                          className="absolute right-12 top-4 text-[0.65rem] uppercase tracking-wider"
                        >
                          {data.tag}
                        </Badge>
                      )}

                      <div className="mb-3 flex items-center gap-3">
                        <div
                          className={`flex size-10 items-center justify-center rounded-xl ${section.bgColour}`}
                        >
                          <section.icon className={`size-5 ${section.colour}`} aria-hidden="true" />
                        </div>
                        <div className="min-w-0 pr-8">
                          <h3 className="truncate text-heading-md font-heading text-foreground group-hover:text-primary transition-colors">
                            {data.title}
                          </h3>
                          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                            <span className="text-caption text-muted-foreground">{data.stats}</span>
                            {data.paperLabel && (
                              <span
                                className={`inline-flex items-center rounded-full px-2 py-px text-[0.65rem] font-mono uppercase tracking-wider ring-1 ${paperBadgeClasses(section.papers)}`}
                                aria-label={`Prepares for ${data.paperLabel}`}
                              >
                                {data.paperLabel}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      <p className="flex-1 text-body-sm text-muted-foreground leading-relaxed">
                        {data.desc}
                      </p>

                      <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                        {idx < sections.length ? i18n.startRevising : i18n.openTool}
                        <ArrowRight className="size-3.5" aria-hidden="true" />
                      </div>
                    </Link>
                  </div>
                )
              })}
            </div>

            {/* IGCSE deep-link callout */}
            {isIgcse && (
              <div className="mt-5 rounded-2xl border border-cyan-500/20 bg-cyan-500/[0.04] p-5">
                <div className="flex items-start gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10">
                    <GraduationCap className="size-5 text-cyan-400" aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-heading-md font-heading text-foreground">
                      {i18n.igcseTitle}
                    </h3>
                    <p className="mt-1 text-body-sm text-muted-foreground">{i18n.igcseBody}</p>
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
                      {i18n.igcseCta}
                      <ArrowRight className="size-3.5" />
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </details>
      </section>

      {/* ── Motivational banner ──────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-gradient-to-r from-primary/[0.06] via-card to-violet-500/[0.04] p-6 sm:p-8 text-center">
        <BarChart3 className="mx-auto mb-3 size-8 text-primary" aria-hidden="true" />
        <h2 className="text-heading-lg font-heading text-foreground">{i18n.motivationTitle}</h2>
        <p className="mx-auto mt-2 max-w-lg text-body-sm text-muted-foreground">
          {i18n.motivationBody}
        </p>
        <Button
          variant="default"
          size="lg"
          className="mt-5"
          render={<Link href="/revision/flashcards" />}
        >
          {i18n.motivationCta}
          <ArrowRight className="size-4" />
        </Button>
      </section>
      {/* GeoFaq now lives in revision/layout.tsx so it covers this hub
          AND every /revision/* sub-page (texts, poetry, exam-technique,
          language, quiz, flashcards, common-errors) with one source. */}
    </div>
  )
}
