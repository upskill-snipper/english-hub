import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  BookOpen,
  Globe,
  GraduationCap,
  Sparkles,
  Clock,
  Scroll,
  ChevronLeft,
  ChevronRight,
  PenTool,
  Brain,
  Gamepad2,
  Layers,
  Wrench,
  Target,
  FileText,
  BarChart3,
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { getBoardMismatchState } from '@/app/igcse/_lib/guard'
import BoardMismatchBanner from '@/components/board/BoardMismatchBanner'
import { t } from '@/lib/i18n/t'

export const metadata: Metadata = {
  title: 'Cambridge IGCSE English — The English Hub',
  description:
    'Cambridge IGCSE English hub. Covers Language A and Language B with full study guides, exam technique and assessment breakdowns.',
  alternates: { canonical: 'https://theenglishhub.app/igcse/cambridge' },
}

// Syllabus card data — visible text fields reference dictionary keys so
// they translate when the AR toggle is active. Static highlight labels
// stay English (they reference very specific Cambridge paper sub-titles
// that don't have AR translations yet — fall back to EN gracefully).
const syllabuses = [
  {
    slug: '0500',
    nameKey: 'igcse.cambridge.0500.name',
    taglineKey: 'igcse.cambridge.0500.tagline',
    descriptionKey: 'igcse.cambridge.0500.description',
    gradingKey: 'igcse.cambridge.0500.grading',
    icon: Globe,
    iconBg: 'bg-primary/10',
    iconText: 'text-primary',
    available: true,
    href: '/igcse/cambridge/0500',
    highlights: [
      {
        label: 'Reading Paper — comprehension, summary and directed writing',
        href: '/igcse/cambridge/0500/paper-1',
      },
      {
        label: 'Writing Paper — directed writing and composition',
        href: '/igcse/cambridge/0500/paper-2',
      },
      {
        label: 'Grade boundaries A*-G',
        href: '/igcse/cambridge/0500/grade-boundaries',
      },
      {
        label: 'Full syllabus breakdown',
        href: '/igcse/cambridge/0500/syllabus',
      },
    ],
  },
  {
    slug: '0990',
    nameKey: 'igcse.cambridge.0990.name',
    taglineKey: 'igcse.cambridge.0990.tagline',
    descriptionKey: 'igcse.cambridge.0990.description',
    gradingKey: 'igcse.cambridge.0990.grading',
    icon: GraduationCap,
    iconBg: 'bg-primary/10',
    iconText: 'text-primary',
    available: true,
    href: '/igcse/cambridge/0990',
    highlights: [
      {
        label: 'Reading Paper — comprehension, summary and language analysis',
        href: '/igcse/cambridge/0990/paper-1',
      },
      {
        label: 'Writing Paper — directed writing and composition',
        href: '/igcse/cambridge/0990/paper-2',
      },
      {
        label: '9-1 vs A*-G grade conversion',
        href: '/igcse/cambridge/0990/grade-conversion',
      },
      {
        label: 'How Language B differs from Language A',
        href: '/igcse/cambridge/0990/difference-vs-0500',
      },
    ],
  },
]

const sharedSkillsLinks = [
  {
    labelKey: 'igcse.cambridge.shared.reading_label',
    descriptionKey: 'igcse.cambridge.shared.reading_desc',
    href: '/igcse/cambridge/reading',
    icon: BookOpen,
  },
  {
    labelKey: 'igcse.cambridge.shared.composition_label',
    descriptionKey: 'igcse.cambridge.shared.composition_desc',
    href: '/igcse/cambridge/composition',
    icon: PenTool,
  },
]

const studyTools = [
  {
    titleKey: 'igcse.tool.ai_marking.title',
    descKey: 'igcse.tool.ai_marking.desc',
    href: '/marking',
    icon: PenTool,
  },
  {
    titleKey: 'igcse.tool.quiz.title',
    descKey: 'igcse.tool.quiz.desc',
    href: '/revision/quiz',
    icon: Brain,
  },
  {
    titleKey: 'igcse.tool.flashcards.title',
    descKey: 'igcse.tool.flashcards.desc',
    href: '/resources/study-tools/flashcards',
    icon: Layers,
  },
  {
    titleKey: 'igcse.tool.games.title',
    descKey: 'igcse.tool.games.desc',
    href: '/games',
    icon: Gamepad2,
  },
  {
    titleKey: 'igcse.tool.toolkit.title',
    descKey: 'igcse.tool.toolkit.desc',
    href: '/toolkit',
    icon: Wrench,
  },
]

export default async function CambridgeHubPage() {
  const mismatch = await getBoardMismatchState(['cambridge-0500', 'cambridge-0990'])

  return (
    <>
      {!mismatch.matched && <BoardMismatchBanner pageBoard="cambridge-0500" />}
      <div className="space-y-12 pb-16">
        {/* ── Back link ─────────────────────────────────────────────── */}
        <div>
          <Button variant="ghost" size="sm" render={<Link href="/igcse" />} className="gap-1">
            <ChevronLeft className="size-4" />
            {await t('igcse.back_to_all_boards')}
          </Button>
        </div>

        {/* ── Hero ────────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-primary/[0.04] p-6 sm:p-8 lg:p-10">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-primary/5 blur-3xl" />

          <div className="relative">
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <Badge variant="secondary">
                <Sparkles className="mr-1 size-3" />
                {await t('igcse.cambridge.hero_badge_intl')}
              </Badge>
              <Badge className="bg-primary/10 text-primary border-primary/20">
                {await t('igcse.cambridge.hero_badge_fle')}
              </Badge>
            </div>
            <h1 className="text-display-sm font-heading text-foreground sm:text-display">
              {await t('igcse.cambridge.hero_title')}
            </h1>
            <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
              {await t('igcse.cambridge.hero_lead')}
            </p>
          </div>
        </section>

        {/* ── Syllabus cards ────────────────────────────────────────── */}
        <section>
          <div className="mb-5 flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10">
              <BookOpen className="size-5 text-primary" />
            </div>
            <h2 className="text-heading-lg font-heading text-foreground">
              {await t('igcse.choose_course')}
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {await Promise.all(
              syllabuses.map(async (syllabus) => {
                const Icon = syllabus.icon
                const name = await t(syllabus.nameKey)
                const tagline = await t(syllabus.taglineKey)
                const description = await t(syllabus.descriptionKey)
                const grading = await t(syllabus.gradingKey)
                const openLabel = await t('igcse.cambridge.open_prefix')
                const papersLabel = await t('igcse.papers.count_2')
                const timeLabel = await t('igcse.cambridge.duration_4h')
                const availableLabel = await t('igcse.badge.available_now')
                return (
                  <Card
                    key={syllabus.slug}
                    className="group relative flex flex-col overflow-hidden transition-all duration-200 hover:border-border hover:shadow-card-hover"
                  >
                    <CardHeader className="pb-3">
                      <div className="mb-3 flex items-start justify-between gap-3">
                        <div
                          className={`flex size-11 items-center justify-center rounded-xl ${syllabus.iconBg}`}
                        >
                          <Icon className={`size-5 ${syllabus.iconText}`} />
                        </div>
                        <Badge className="bg-primary/10 text-primary border-primary/20">
                          {availableLabel}
                        </Badge>
                      </div>
                      <CardTitle className="text-heading-md font-heading leading-tight">
                        {name}
                      </CardTitle>
                      <CardDescription className="text-body-sm">{tagline}</CardDescription>
                    </CardHeader>

                    <CardContent className="flex flex-1 flex-col gap-4">
                      <p className="text-body-sm text-muted-foreground leading-relaxed">
                        {description}
                      </p>

                      <div className="flex flex-wrap gap-3 text-body-xs text-muted-foreground">
                        <span className="inline-flex items-center gap-1.5 rounded-md border border-border/60 bg-muted/40 px-2 py-1">
                          <Scroll className="size-3" />
                          {papersLabel}
                        </span>
                        <span className="inline-flex items-center gap-1.5 rounded-md border border-border/60 bg-muted/40 px-2 py-1">
                          <Clock className="size-3" />
                          {timeLabel}
                        </span>
                        <span className="inline-flex items-center gap-1.5 rounded-md border border-border/60 bg-muted/40 px-2 py-1">
                          <GraduationCap className="size-3" />
                          {grading}
                        </span>
                      </div>

                      {/* Clickable highlight links — paper-specific subtitles
                          stay English-only for now (no AR mapping yet). */}
                      <div className="space-y-1.5">
                        {syllabus.highlights.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="group/link flex items-center justify-between gap-2 rounded-lg border border-border/40 bg-muted/20 px-3 py-2 text-body-sm text-muted-foreground transition-all hover:border-primary/40 hover:bg-primary/[0.04] hover:text-foreground"
                          >
                            <span>{item.label}</span>
                            <ChevronRight className="size-3.5 shrink-0 text-muted-foreground/60 transition-transform group-hover/link:translate-x-0.5 group-hover/link:text-primary" />
                          </Link>
                        ))}
                      </div>

                      <div className="mt-auto pt-2">
                        <Button
                          variant="default"
                          size="sm"
                          className="w-full"
                          render={<Link href={syllabus.href} />}
                        >
                          {openLabel} {name}
                          <ArrowRight className="size-3.5" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )
              }),
            )}
          </div>
        </section>

        {/* ── Shared skills ─────────────────────────────────────────── */}
        <section>
          <div className="mb-5 flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10">
              <Target className="size-5 text-primary" />
            </div>
            <h2 className="text-heading-lg font-heading text-foreground">
              {await t('igcse.section.shared_skills')}
            </h2>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {await Promise.all(
              sharedSkillsLinks.map(async (link) => {
                const Icon = link.icon
                const label = await t(link.labelKey)
                const description = await t(link.descriptionKey)
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group flex items-center gap-4 rounded-xl border border-border/60 bg-card p-5 transition-all duration-200 hover:border-primary/30 hover:bg-primary/[0.03] hover:shadow-card-hover"
                  >
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                      <Icon className="size-5 text-primary" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-heading text-body text-foreground">{label}</h3>
                      <p className="text-body-xs text-muted-foreground">{description}</p>
                    </div>
                    <ArrowRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
                  </Link>
                )
              }),
            )}
          </div>
        </section>

        {/* ── Study Tools ───────────────────────────────────────────── */}
        <section>
          <div className="mb-5 flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10">
              <GraduationCap className="size-5 text-primary" />
            </div>
            <h2 className="text-heading-lg font-heading text-foreground">
              {await t('igcse.section.study_tools')}
            </h2>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {await Promise.all(
              studyTools.map(async (tool) => {
                const Icon = tool.icon
                const title = await t(tool.titleKey)
                const description = await t(tool.descKey)
                return (
                  <Link
                    key={tool.href}
                    href={tool.href}
                    className="group flex items-center gap-4 rounded-xl border border-border/60 bg-card p-4 transition-all duration-200 hover:border-primary/30 hover:bg-primary/[0.03] hover:shadow-card-hover"
                  >
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                      <Icon className="size-5 text-primary" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-heading text-body text-foreground">{title}</h3>
                      <p className="text-body-xs text-muted-foreground">{description}</p>
                    </div>
                    <ArrowRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
                  </Link>
                )
              }),
            )}
          </div>
        </section>

        {/* ── About Cambridge First Language ─────────────────────────── */}
        <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
          <div className="mb-4 flex items-center gap-3">
            <Globe className="size-5 text-primary" />
            <h2 className="text-heading-md font-heading text-foreground">
              {await t('igcse.cambridge.about.title')}
            </h2>
          </div>
          <p className="text-body-sm text-muted-foreground leading-relaxed">
            {await t('igcse.cambridge.about.body')}
          </p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-border/60 bg-muted/30 p-4">
              <h3 className="text-body-sm font-semibold text-foreground">
                {await t('igcse.cambridge.about.reading.title')}
              </h3>
              <p className="mt-1 text-body-xs text-muted-foreground">
                {await t('igcse.cambridge.about.reading.body')}
              </p>
            </div>
            <div className="rounded-xl border border-border/60 bg-muted/30 p-4">
              <h3 className="text-body-sm font-semibold text-foreground">
                {await t('igcse.cambridge.about.writing.title')}
              </h3>
              <p className="mt-1 text-body-xs text-muted-foreground">
                {await t('igcse.cambridge.about.writing.body')}
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
