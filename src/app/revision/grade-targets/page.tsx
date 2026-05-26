import {
  TrendingUp,
  ArrowLeft,
  ArrowRight,
  Target,
  BarChart3,
  Star,
  CheckCircle2,
  GraduationCap,
  Lightbulb,
  Info,
} from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { getServerBoard } from '@/lib/board/get-server-board'
import { getBoardConfig } from '@/lib/board/board-config'
import {
  getGradeSystemForBoard,
  getPaperReferencesForBoard,
  GRADE_BOUNDARIES,
} from '@/lib/board/grade-boundaries'
import { GradeTargetsQuiz } from './grade-targets-quiz'
import { t } from '@/lib/i18n/t'

/* ── Grade card data ──────────────────────────────────────────────────── */

type GradeCard = {
  grade: string
  letterEquivalentKey?: string
  titleKey: string
  subtitleKey: string
  href: string
  colour: string
  bgColour: string
  borderHover: string
  skillKeys: string[]
}

const NINE_ONE_GRADE_CARDS: GradeCard[] = [
  {
    grade: '5',
    titleKey: 'revision.grade_targets.grade5.title',
    subtitleKey: 'revision.grade_targets.grade5.subtitle',
    href: '/revision/grade-targets/grade-5',
    colour: 'text-cyan-400',
    bgColour: 'bg-cyan-500/10',
    borderHover: 'hover:border-cyan-500/30',
    skillKeys: [
      'revision.grade_targets.skill.clear_explanations',
      'revision.grade_targets.skill.subject_terminology',
      'revision.grade_targets.skill.writer_methods',
    ],
  },
  {
    grade: '7',
    titleKey: 'revision.grade_targets.grade7.title',
    subtitleKey: 'revision.grade_targets.grade7.subtitle',
    href: '/revision/grade-targets/grade-7',
    colour: 'text-emerald-400',
    bgColour: 'bg-emerald-500/10',
    borderHover: 'hover:border-emerald-500/30',
    skillKeys: [
      'revision.grade_targets.skill.developed_analysis',
      'revision.grade_targets.skill.judicious_quotes',
      'revision.grade_targets.skill.meanings_shaped',
    ],
  },
  {
    grade: '9',
    titleKey: 'revision.grade_targets.grade9.title',
    subtitleKey: 'revision.grade_targets.grade9.subtitle',
    href: '/revision/grade-targets/grade-9',
    colour: 'text-clay-600',
    bgColour: 'bg-amber-500/10',
    borderHover: 'hover:border-amber-500/30',
    skillKeys: [
      'revision.grade_targets.skill.conceptualised',
      'revision.grade_targets.skill.alt_interpretations',
      'revision.grade_targets.skill.sophisticated_expression',
    ],
  },
]

const LETTER_GRADE_CARDS: GradeCard[] = [
  {
    grade: 'C',
    letterEquivalentKey: 'revision.grade_targets.gradeC.equivalent',
    titleKey: 'revision.grade_targets.gradeC.title',
    subtitleKey: 'revision.grade_targets.gradeC.subtitle',
    href: '/revision/grade-targets/grade-5',
    colour: 'text-cyan-400',
    bgColour: 'bg-cyan-500/10',
    borderHover: 'hover:border-cyan-500/30',
    skillKeys: [
      'revision.grade_targets.skill.clear_explanations',
      'revision.grade_targets.skill.subject_terminology',
      'revision.grade_targets.skill.writer_methods',
    ],
  },
  {
    grade: 'A',
    letterEquivalentKey: 'revision.grade_targets.gradeA.equivalent',
    titleKey: 'revision.grade_targets.gradeA.title',
    subtitleKey: 'revision.grade_targets.gradeA.subtitle',
    href: '/revision/grade-targets/grade-7',
    colour: 'text-emerald-400',
    bgColour: 'bg-emerald-500/10',
    borderHover: 'hover:border-emerald-500/30',
    skillKeys: [
      'revision.grade_targets.skill.developed_analysis',
      'revision.grade_targets.skill.judicious_quotes',
      'revision.grade_targets.skill.meanings_shaped',
    ],
  },
  {
    grade: 'A*',
    letterEquivalentKey: 'revision.grade_targets.gradeAstar.equivalent',
    titleKey: 'revision.grade_targets.gradeAstar.title',
    subtitleKey: 'revision.grade_targets.gradeAstar.subtitle',
    href: '/revision/grade-targets/grade-9',
    colour: 'text-clay-600',
    bgColour: 'bg-amber-500/10',
    borderHover: 'hover:border-amber-500/30',
    skillKeys: [
      'revision.grade_targets.skill.conceptualised',
      'revision.grade_targets.skill.alt_interpretations',
      'revision.grade_targets.skill.sophisticated_expression',
    ],
  },
]

/* ── Component ────────────────────────────────────────────────────────── */

export default async function GradeTargetsPage() {
  const board = await getServerBoard()
  const boardConfig = getBoardConfig(board)
  const gradeSystem = getGradeSystemForBoard(board)
  const papers = getPaperReferencesForBoard(board)
  const isLetterSystem = gradeSystem === 'A*-G'
  const gradeCards = isLetterSystem ? LETTER_GRADE_CARDS : NINE_ONE_GRADE_CARDS

  const boundaries = board ? GRADE_BOUNDARIES[board] : null

  const gradeSystemLabel = isLetterSystem ? 'A*-G' : '9-1'

  const breadcrumbRevision = await t('poetry.breadcrumb_revision')
  const breadcrumbGradeTargets = await t('revision.grade_targets.breadcrumb_label')
  const backToHub = await t('revision.grade_targets.back_to_hub')
  const pageTitle = await t('revision.grade_targets.page_title')
  const pageSubtitle = boardConfig
    ? (await t('revision.grade_targets.subtitle_board'))
        .replace('{board}', boardConfig.shortName)
        .replace('{system}', gradeSystemLabel)
    : await t('revision.grade_targets.subtitle_generic')
  const boardContextLabel = boardConfig
    ? (await t('revision.grade_targets.board_context_board_label')).replace(
        '{board}',
        papers.boardLabel,
      )
    : ''
  const boardContextNote = isLetterSystem
    ? await t('revision.grade_targets.letter_grade_note')
    : (await t('revision.grade_targets.nine_one_note')).replace(
        '{board}',
        boardConfig?.shortName ?? '',
      )

  const understandingHeading = await t('revision.grade_targets.understanding_heading')
  const understandingIntro = boardConfig
    ? (await t('revision.grade_targets.understanding_intro_board')).replace(
        '{board}',
        boardConfig.fullName,
      )
    : await t('revision.grade_targets.understanding_intro_generic')
  const workingAtTitle = await t('revision.grade_targets.working_at_title')
  const workingAtBody = await t('revision.grade_targets.working_at_body')
  const predictedTitle = await t('revision.grade_targets.predicted_title')
  const predictedBody = await t('revision.grade_targets.predicted_body')
  const targetTitle = await t('revision.grade_targets.target_title')
  const targetBody = await t('revision.grade_targets.target_body')
  const boundariesHeading = boardConfig
    ? (await t('revision.grade_targets.boundaries_heading')).replace(
        '{board}',
        boardConfig.shortName,
      )
    : ''
  const boundariesGradeLabel = await t('revision.grade_targets.boundaries_grade_label')
  const boundariesNote = boardConfig
    ? (await t('revision.grade_targets.boundaries_note')).replace('{board}', boardConfig.shortName)
    : ''
  const keyInsightLabel = await t('revision.grade_targets.key_insight_label')
  const keyInsightBody = await t('revision.grade_targets.key_insight_body')
  const gradeGuidesHeading = isLetterSystem
    ? await t('revision.grade_targets.grade_guides_heading_letter')
    : await t('revision.grade_targets.grade_guides_heading_91')
  const gradeGuidesIntro = isLetterSystem
    ? await t('revision.grade_targets.grade_guides_intro_letter')
    : await t('revision.grade_targets.grade_guides_intro_91')
  const readTheGuide = await t('revision.grade_targets.read_the_guide')

  // Resolve grade card strings up-front
  const resolvedCards = await Promise.all(
    gradeCards.map(async (card) => ({
      ...card,
      title: await t(card.titleKey),
      subtitle: await t(card.subtitleKey),
      letterEquivalent: card.letterEquivalentKey ? await t(card.letterEquivalentKey) : undefined,
      skills: await Promise.all(card.skillKeys.map((k) => t(k))),
    })),
  )

  return (
    <div className="space-y-10 pb-16">
      <Breadcrumb
        items={[
          { label: breadcrumbRevision, href: '/revision' },
          { label: breadcrumbGradeTargets },
        ]}
      />
      {/* ── Header ──────────────────────────────────────────────── */}
      <div>
        <Button
          variant="ghost"
          size="sm"
          className="mb-3 -ml-2 text-muted-foreground"
          render={<Link href="/revision" />}
        >
          <ArrowLeft className="size-3.5" />
          {backToHub}
        </Button>
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-cyan-500/10">
            <TrendingUp className="size-5 text-cyan-400" />
          </div>
          <div>
            <h1 className="text-heading-lg font-heading text-foreground">
              {boardConfig ? `${pageTitle} - ${boardConfig.shortName}` : pageTitle}
            </h1>
            <p className="text-body-sm text-muted-foreground">{pageSubtitle}</p>
          </div>
        </div>
      </div>

      {/* ── Board context banner ────────────────────────────────── */}
      {board && boardConfig && (
        <div className="rounded-xl border border-primary/20 bg-primary/[0.04] p-4 flex items-start gap-3">
          <Info className="size-4 shrink-0 text-primary mt-0.5" />
          <div className="text-xs text-muted-foreground leading-relaxed">
            <span className="font-semibold text-foreground">{boardContextLabel}</span>{' '}
            {boardContextNote}
          </div>
        </div>
      )}

      {/* ── Understanding Grades ──────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <div className="flex items-center gap-3 mb-5">
          <div className="flex size-9 items-center justify-center rounded-lg bg-violet-500/10">
            <BarChart3 className="size-4.5 text-violet-400" />
          </div>
          <h2 className="text-heading-md font-heading text-foreground">{understandingHeading}</h2>
        </div>

        <p className="text-body-sm text-muted-foreground mb-6 max-w-3xl">{understandingIntro}</p>

        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-border/40 bg-background/50 p-5">
            <div className="flex items-center gap-2 mb-3">
              <BarChart3 className="size-4 text-blue-400" />
              <h3 className="text-sm font-semibold text-foreground">{workingAtTitle}</h3>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">{workingAtBody}</p>
          </div>

          <div className="rounded-xl border border-border/40 bg-background/50 p-5">
            <div className="flex items-center gap-2 mb-3">
              <Target className="size-4 text-emerald-400" />
              <h3 className="text-sm font-semibold text-foreground">{predictedTitle}</h3>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">{predictedBody}</p>
          </div>

          <div className="rounded-xl border border-border/40 bg-background/50 p-5">
            <div className="flex items-center gap-2 mb-3">
              <Star className="size-4 text-clay-600" />
              <h3 className="text-sm font-semibold text-foreground">{targetTitle}</h3>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">{targetBody}</p>
          </div>
        </div>

        {/* ── Board-specific boundaries ─────────────────────────── */}
        {boundaries && boardConfig && (
          <div className="mt-6">
            <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
              <Target className="size-4 text-primary" />
              {boundariesHeading}
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
              {Object.entries(boundaries).map(([grade, pct]) => (
                <div
                  key={grade}
                  className="rounded-lg border border-border/40 bg-background/50 p-3 text-center"
                >
                  <div className="text-[10px] uppercase tracking-wide text-muted-foreground">
                    {boundariesGradeLabel}
                  </div>
                  <div className="text-lg font-bold text-foreground">{grade}</div>
                  <div className="text-[11px] text-muted-foreground">{pct}%</div>
                </div>
              ))}
            </div>
            <p className="text-[11px] text-muted-foreground mt-3 italic">{boundariesNote}</p>
          </div>
        )}

        <div className="mt-5 flex items-start gap-2.5 rounded-lg border border-primary/20 bg-primary/[0.04] p-4">
          <Lightbulb className="size-4 shrink-0 text-primary mt-0.5" />
          <p className="text-xs text-muted-foreground leading-relaxed">
            <span className="font-semibold text-foreground">{keyInsightLabel} </span>
            {keyInsightBody}
          </p>
        </div>
      </section>

      {/* ── Grade Specific Pages ──────────────────────────────── */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <GraduationCap className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">{gradeGuidesHeading}</h2>
        </div>
        <p className="text-body-sm text-muted-foreground mb-5 max-w-2xl">{gradeGuidesIntro}</p>

        <div className="grid gap-4 sm:grid-cols-3">
          {resolvedCards.map((card) => (
            <Link
              key={card.grade}
              href={card.href}
              className={`group relative flex flex-col rounded-2xl border border-border/60 bg-card p-5 transition-all duration-200 hover:border-border hover:shadow-card-hover ${card.borderHover}`}
            >
              <div className="mb-3 flex items-center gap-3">
                <div
                  className={`flex size-10 items-center justify-center rounded-xl ${card.bgColour}`}
                >
                  <span className={`text-lg font-bold ${card.colour}`}>{card.grade}</span>
                </div>
                <div>
                  <h3 className="text-heading-md font-heading text-foreground group-hover:text-primary transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-caption text-muted-foreground">{card.subtitle}</p>
                  {card.letterEquivalent && (
                    <p className="text-[10px] text-muted-foreground/80 italic mt-0.5">
                      {card.letterEquivalent}
                    </p>
                  )}
                </div>
              </div>

              <ul className="flex-1 space-y-2 mb-4">
                {card.skills.map((skill) => (
                  <li key={skill} className="flex items-start gap-2 text-xs text-muted-foreground">
                    <CheckCircle2 className={`size-3.5 shrink-0 mt-0.5 ${card.colour}`} />
                    {skill}
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                {readTheGuide}
                <ArrowRight className="size-3.5" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Self-Assessment Quiz (client island) ──────────────── */}
      <GradeTargetsQuiz
        paperLiterature={papers.literature}
        paperLanguage={papers.language}
        gradeSystem={gradeSystem}
      />
    </div>
  )
}
