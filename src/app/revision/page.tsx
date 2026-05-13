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
import { TrialCountdownBannerServer } from '@/components/billing/TrialCountdownBannerServer'
import { t } from '@/lib/i18n/t'

// ─── Section data ──────────────────────────────────────────────────────────

interface RevisionSection {
  /** i18n key for the section title (revision_page.section.*.title). */
  titleKey: string
  /** i18n key for the description. */
  descKey: string
  href: string
  icon: typeof BookOpen
  colour: string
  bgColour: string
  /** i18n key for the stats string. */
  statsKey: string
  /** Optional i18n key for the tag badge ("Popular", "New", "AI"). */
  tagKey?: string
  /** Boards this section is shown to. Omit to show for all. */
  boards?: ExamBoard[]
  /**
   * Which exam paper(s) this section prepares the student for.
   *   ['lit']        → Literature paper only
   *   ['lang']       → Language paper only
   *   ['lit', 'lang']→ Both — cross-paper skill
   *   undefined      → Generic / not paper-specific
   */
  papers?: ReadonlyArray<'lit' | 'lang'>
}

/** Translation key for the paper-badge label. Returns null for generic sections. */
function paperLabelKey(papers: RevisionSection['papers']): string | null {
  if (!papers || papers.length === 0) return null
  const hasLit = papers.includes('lit')
  const hasLang = papers.includes('lang')
  if (hasLit && hasLang) return 'revision_page.paper.lit_lang'
  if (hasLit) return 'revision_page.paper.lit'
  if (hasLang) return 'revision_page.paper.lang'
  return null
}

/** Tailwind classes for the paper badge — colour-coded so eyes can scan. */
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

// ─── Toolkit sections (surfaced from /toolkit/* into the hub) ──────────────

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

function getSectionsForBoard(board: ExamBoard | null): RevisionSection[] {
  if (!board) return ALL_SECTIONS
  return ALL_SECTIONS.filter((s) => !s.boards || s.boards.includes(board))
}

function getToolkitSectionsForBoard(board: ExamBoard | null): RevisionSection[] {
  if (!board) return TOOLKIT_SECTIONS
  return TOOLKIT_SECTIONS.filter((s) => !s.boards || s.boards.includes(board))
}

// ─── Component ──────────────────────────────────────────────────────────────

export default async function RevisionHubPage() {
  const board = await getServerBoard()
  const config = getBoardConfig(board)
  const sections = getSectionsForBoard(board)
  const toolkitSections = getToolkitSectionsForBoard(board)
  const isIgcse = isIgcseBoard(board)
  const isCambridge = board === 'cambridge-0500' || board === 'cambridge-0990'

  const setTexts = getSetTextsForBoard(board)
  const featuredText = setTexts.find((tx) => tx.slug === 'macbeth') ?? setTexts[0]

  const boardName = config?.shortName ?? 'GCSE'
  const headingPrefix = config
    ? await t('revision_page.hero.heading_prefix_board')
    : await t('revision_page.hero.heading_prefix_generic')

  // Resolve i18n strings up-front so JSX stays clean.
  const i18n = {
    heroBadge: config ? config.fullName : await t('revision_page.hero.badge_default'),
    heroSuffix: await t('revision_page.hero.heading_suffix'),
    heroBlurb: isCambridge
      ? (await t('revision_page.hero.blurb_cambridge')).replace('{board}', boardName)
      : (await t('revision_page.hero.blurb_default')).replace('{board}', boardName),
    statSubjects: await t('revision_page.stats.subjects'),
    statResources: await t('revision_page.stats.resources'),
    statFlashcards: await t('revision_page.stats.flashcards'),
    statQuizzes: await t('revision_page.stats.quizzes'),
    snapshotAria: await t('revision_page.snapshot.aria'),
    streakLabel: await t('revision_page.snapshot.streak.label'),
    streakTitle: await t('revision_page.snapshot.streak.title'),
    streakBody: await t('revision_page.snapshot.streak.body'),
    streakCta: await t('revision_page.snapshot.streak.cta'),
    progressLabel: await t('revision_page.snapshot.progress.label'),
    progressTitle: (await t('revision_page.snapshot.progress.title')).replace('{board}', boardName),
    progressBody: (await t('revision_page.snapshot.progress.body')).replace('{board}', boardName),
    progressCta: await t('revision_page.snapshot.progress.cta'),
    aiLabel: await t('revision_page.snapshot.ai.label'),
    aiTitle: await t('revision_page.snapshot.ai.title'),
    aiBody: await t('revision_page.snapshot.ai.body'),
    aiCta: await t('revision_page.snapshot.ai.cta'),
    studyBadge: (await t('revision_page.study_plan.badge')).replace('{board}', boardName),
    studyTitle: await t('revision_page.study_plan.title'),
    studyBody: (await t('revision_page.study_plan.body')).replace('{board}', boardName),
    studyCta: await t('revision_page.study_plan.cta'),
    sectionsHeading: await t('revision_page.sections.heading'),
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
    toolkitHeading: await t('revision_page.toolkit.heading'),
    openTool: await t('revision_page.toolkit.open_tool'),
    analyticsBadge: await t('revision_page.analytics.badge_new'),
    analyticsTitle: await t('revision_page.analytics.title'),
    analyticsBody: await t('revision_page.analytics.body'),
    analyticsCta: await t('revision_page.analytics.cta'),
    featuredBadge: (await t('revision_page.featured.badge')).replace('{board}', boardName),
    motivationTitle: await t('revision_page.motivation.title'),
    motivationBody: await t('revision_page.motivation.body'),
    motivationCta: await t('revision_page.motivation.cta'),
  }

  const featuredBy = featuredText
    ? (await t('revision_page.featured.by')).replace('{author}', featuredText.author)
    : ''
  const featuredCta = await t('revision_page.featured.cta')

  // Helper that bundles i18n lookup of section labels in one place.
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

  const sectionData = await Promise.all(sections.map(getSectionStrings))
  const toolkitData = await Promise.all(toolkitSections.map(getSectionStrings))

  return (
    <div className="space-y-10 pb-16">
      {/* ── Trial countdown banner ─────────────────────────────────── */}
      <TrialCountdownBannerServer />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="revision-hero-heading"
        className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-primary/[0.04] p-6 sm:p-8 lg:p-10"
      >
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
            {i18n.heroBadge}
          </Badge>
          <h1
            id="revision-hero-heading"
            className="text-display-sm font-heading text-foreground sm:text-display"
          >
            {headingPrefix} {boardName} {i18n.heroSuffix}
          </h1>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">{i18n.heroBlurb}</p>

          {/* Quick stats */}
          <div className="mt-6 flex flex-wrap gap-4 sm:gap-6">
            {[
              { label: i18n.statSubjects, value: '7', icon: BookOpen },
              { label: i18n.statResources, value: '200+', icon: FileText },
              { label: i18n.statFlashcards, value: '500+', icon: Layers },
              { label: i18n.statQuizzes, value: '100+', icon: Brain },
            ].map((stat) => (
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

      {/* ── Headline analytics ────────── */}
      <section aria-label={i18n.snapshotAria} className="grid gap-4 sm:grid-cols-3">
        <Link
          href="/revision/analytics"
          className="group flex flex-col justify-between rounded-2xl border border-border/60 bg-card p-5 transition-all hover:border-emerald-500/40 hover:shadow-card-hover"
        >
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-xl bg-emerald-500/10">
              <Flame className="size-5 text-emerald-400" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">
                {i18n.streakLabel}
              </p>
              <p className="text-heading-sm font-heading text-foreground">{i18n.streakTitle}</p>
            </div>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">{i18n.streakBody}</p>
          <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-primary group-hover:gap-2 transition-all">
            {i18n.streakCta} <ArrowRight className="size-3" />
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
              <p className="text-xs uppercase tracking-wider text-muted-foreground">
                {i18n.progressLabel}
              </p>
              <p className="text-heading-sm font-heading text-foreground">{i18n.progressTitle}</p>
            </div>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">{i18n.progressBody}</p>
          <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-primary group-hover:gap-2 transition-all">
            {i18n.progressCta} <ArrowRight className="size-3" />
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
              <p className="text-xs uppercase tracking-wider text-muted-foreground">
                {i18n.aiLabel}
              </p>
              <p className="text-heading-sm font-heading text-foreground">{i18n.aiTitle}</p>
            </div>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">{i18n.aiBody}</p>
          <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-primary group-hover:gap-2 transition-all">
            {i18n.aiCta} <ArrowRight className="size-3" />
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
                {i18n.studyBadge}
              </Badge>
              <h2 className="text-heading-md font-heading text-foreground">{i18n.studyTitle}</h2>
              <p className="mt-1 max-w-xl text-body-sm text-muted-foreground">{i18n.studyBody}</p>
            </div>
          </div>
          <Button variant="default" size="lg" render={<Link href="/revision/study-plan" />}>
            {i18n.studyCta}
            <ArrowRight className="size-4" />
          </Button>
        </div>
      </section>

      {/* ── Section Cards ────────────────────────────────────────────── */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <GraduationCap className="size-5 text-primary" aria-hidden="true" />
          <h2 className="text-heading-lg font-heading text-foreground">{i18n.sectionsHeading}</h2>
          {config && (
            <Badge variant="outline" className="ml-1 text-xs">
              {i18n.forBoardBadge}
            </Badge>
          )}
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sections.map((section, idx) => {
            const data = sectionData[idx]
            return (
              <Link
                key={section.href}
                href={section.href}
                className="group relative flex flex-col rounded-2xl border border-border/60 bg-card p-5 transition-all duration-200 hover:border-border hover:shadow-card-hover"
              >
                {data.tag && (
                  <Badge
                    variant="default"
                    className="absolute right-4 top-4 text-[0.65rem] uppercase tracking-wider"
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
                  <div>
                    <h3 className="text-heading-md font-heading text-foreground group-hover:text-primary transition-colors">
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
                  {i18n.startRevising}
                  <ArrowRight className="size-3.5" aria-hidden="true" />
                </div>
              </Link>
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
                <h3 className="text-heading-md font-heading text-foreground">{i18n.igcseTitle}</h3>
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
      </section>

      {/* ── Your Toolkit ─────────────────────────────────────────────── */}
      <section aria-labelledby="your-toolkit-heading">
        <div className="mb-5 flex items-center gap-3">
          <Wrench className="size-5 text-primary" aria-hidden="true" />
          <h2 id="your-toolkit-heading" className="text-heading-lg font-heading text-foreground">
            {i18n.toolkitHeading}
          </h2>
          {config && (
            <Badge variant="outline" className="ml-1 text-xs">
              {i18n.forBoardBadge}
            </Badge>
          )}
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {toolkitSections.map((section, idx) => {
            const data = toolkitData[idx]
            return (
              <Link
                key={section.href}
                href={section.href}
                className="group relative flex flex-col rounded-2xl border border-border/60 bg-card p-5 transition-all duration-200 hover:border-border hover:shadow-card-hover"
              >
                {data.tag && (
                  <Badge
                    variant="default"
                    className="absolute right-4 top-4 text-[0.65rem] uppercase tracking-wider"
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
                  <div>
                    <h3 className="text-heading-md font-heading text-foreground group-hover:text-primary transition-colors">
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
                  {i18n.openTool}
                  <ArrowRight className="size-3.5" aria-hidden="true" />
                </div>
              </Link>
            )
          })}
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
                {i18n.analyticsBadge}
              </Badge>
              <h2
                id="your-analytics-heading"
                className="text-heading-md font-heading text-foreground group-hover:text-primary transition-colors"
              >
                {i18n.analyticsTitle}
              </h2>
              <p className="mt-1 max-w-xl text-body-sm text-muted-foreground">
                {i18n.analyticsBody}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1 text-sm font-medium text-primary">
            {i18n.analyticsCta}
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

      {/* ── Motivational banner ──────────────────────────────────────── */}
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
    </div>
  )
}
