import type { Metadata } from 'next'
import Link from 'next/link'
import {
  PenLine,
  BookOpen,
  MessageSquare,
  BarChart3,
  Languages,
  GraduationCap,
  Compass,
  BookA,
  ChevronRight,
  Info,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
import { BenefitGrid } from '@/components/schools/BenefitCard'
import { GlassPanel, PanelEyebrow } from '@/components/dataviz/GlassPanel'
import { t } from '@/lib/i18n/t'

const OG =
  '/api/og?title=Practise,+improve+and+understand+English&subtitle=Clearer+feedback,+aligned+to+your+exam'

export async function generateMetadata(): Promise<Metadata> {
  const [title, description, ogTitle, ogDescription, ogImageAlt] = await Promise.all([
    t('mkt.students.meta.title'),
    t('mkt.students.meta.description'),
    t('mkt.students.meta.og_title'),
    t('mkt.students.meta.og_description'),
    t('mkt.students.meta.og_image_alt'),
  ])
  return {
    title,
    description,
    alternates: { canonical: 'https://theenglishhub.app/students' },
    keywords: [
      'GCSE English revision platform',
      'IGCSE English support',
      'English essay practice feedback',
      'English revision platform for schools',
    ],
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      url: 'https://theenglishhub.app/students',
      images: [{ url: OG, width: 1200, height: 630, alt: ogImageAlt }],
    },
    twitter: { card: 'summary_large_image', images: [OG] },
  }
}

export default async function StudentsPage() {
  // Resolve every visible string once per render. headers() inside t()
  // is per-request cached so this is effectively a single locale read.
  const [
    breadcrumbHome,
    breadcrumbStudents,
    heroEyebrow,
    heroTitle,
    heroSubtitle,
    heroCtaPrimary,
    heroCtaSecondary,
    heroPillBoards,
    heroPillAiFeedback,
    heroPillLevels,
    journeyEyebrow,
    journeyTitle,
    journeySubtitle,
    journeyStepLabel,
    journeyStep1Title,
    journeyStep1Body,
    journeyStep2Title,
    journeyStep2Body,
    journeyStep3Title,
    journeyStep3Body,
    journeyStep4Title,
    journeyStep4Body,
    journeyStep5Title,
    journeyStep5Body,
    insideEyebrow,
    insideTitle,
    insideSubtitle,
    insideBoardEyebrow,
    benefitRevisionTitle,
    benefitRevisionBody,
    benefitEssayTitle,
    benefitEssayBody,
    benefitFeedbackTitle,
    benefitFeedbackBody,
    benefitLitLangTitle,
    benefitLitLangBody,
    benefitEalTitle,
    benefitEalBody,
    benefitProgressTitle,
    benefitProgressBody,
    subjectsEyebrow,
    subjectsTitle,
    subjectsSubtitle,
    subjectKs3Title,
    subjectKs3Body,
    subjectLangTitle,
    subjectLangBody,
    subjectLitTitle,
    subjectLitBody,
    subjectIgcseAlevelTitle,
    subjectIgcseAlevelBody,
    demoEyebrow,
    demoTitle,
    demoSubtitle,
    demoCtaPrimary,
    demoCtaSecondary,
    noteTitle,
    noteBody,
  ] = await Promise.all([
    t('mkt.students.breadcrumb.home'),
    t('mkt.students.breadcrumb.students'),
    t('mkt.students.hero.eyebrow'),
    t('mkt.students.hero.title'),
    t('mkt.students.hero.subtitle'),
    t('mkt.students.hero.cta_primary'),
    t('mkt.students.hero.cta_secondary'),
    t('mkt.students.hero.pill_boards'),
    t('mkt.students.hero.pill_ai_feedback'),
    t('mkt.students.hero.pill_levels'),
    t('mkt.students.journey.eyebrow'),
    t('mkt.students.journey.title'),
    t('mkt.students.journey.subtitle'),
    t('mkt.students.journey.step_label'),
    t('mkt.students.journey.step1.title'),
    t('mkt.students.journey.step1.body'),
    t('mkt.students.journey.step2.title'),
    t('mkt.students.journey.step2.body'),
    t('mkt.students.journey.step3.title'),
    t('mkt.students.journey.step3.body'),
    t('mkt.students.journey.step4.title'),
    t('mkt.students.journey.step4.body'),
    t('mkt.students.journey.step5.title'),
    t('mkt.students.journey.step5.body'),
    t('mkt.students.inside.eyebrow'),
    t('mkt.students.inside.title'),
    t('mkt.students.inside.subtitle'),
    t('mkt.students.inside.board_eyebrow'),
    t('mkt.students.inside.benefit.revision.title'),
    t('mkt.students.inside.benefit.revision.body'),
    t('mkt.students.inside.benefit.essay.title'),
    t('mkt.students.inside.benefit.essay.body'),
    t('mkt.students.inside.benefit.feedback.title'),
    t('mkt.students.inside.benefit.feedback.body'),
    t('mkt.students.inside.benefit.lit_lang.title'),
    t('mkt.students.inside.benefit.lit_lang.body'),
    t('mkt.students.inside.benefit.eal.title'),
    t('mkt.students.inside.benefit.eal.body'),
    t('mkt.students.inside.benefit.progress.title'),
    t('mkt.students.inside.benefit.progress.body'),
    t('mkt.students.subjects.eyebrow'),
    t('mkt.students.subjects.title'),
    t('mkt.students.subjects.subtitle'),
    t('mkt.students.subjects.ks3.title'),
    t('mkt.students.subjects.ks3.body'),
    t('mkt.students.subjects.lang.title'),
    t('mkt.students.subjects.lang.body'),
    t('mkt.students.subjects.lit.title'),
    t('mkt.students.subjects.lit.body'),
    t('mkt.students.subjects.igcse_alevel.title'),
    t('mkt.students.subjects.igcse_alevel.body'),
    t('mkt.students.demo.eyebrow'),
    t('mkt.students.demo.title'),
    t('mkt.students.demo.subtitle'),
    t('mkt.students.demo.cta_primary'),
    t('mkt.students.demo.cta_secondary'),
    t('mkt.students.note.title'),
    t('mkt.students.note.body'),
  ])

  const JOURNEY_STEPS = [
    {
      icon: Compass,
      title: journeyStep1Title,
      body: journeyStep1Body,
    },
    {
      icon: BookOpen,
      title: journeyStep2Title,
      body: journeyStep2Body,
    },
    {
      icon: PenLine,
      title: journeyStep3Title,
      body: journeyStep3Body,
    },
    {
      icon: MessageSquare,
      title: journeyStep4Title,
      body: journeyStep4Body,
    },
    {
      icon: BarChart3,
      title: journeyStep5Title,
      body: journeyStep5Body,
    },
  ]

  const EXAM_BOARDS = ['AQA', 'Edexcel', 'OCR', 'Eduqas / Cambridge IGCSE']

  const SUBJECTS: Array<{
    icon: typeof BookA
    title: string
    body: string
    iconClass: string
    ringClass: string
  }> = [
    {
      icon: BookA,
      title: subjectKs3Title,
      body: subjectKs3Body,
      iconClass: 'bg-violet-500/10 text-violet-600 dark:text-violet-300',
      ringClass: 'hover:border-violet-500/40',
    },
    {
      icon: PenLine,
      title: subjectLangTitle,
      body: subjectLangBody,
      iconClass: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-300',
      ringClass: 'hover:border-emerald-500/40',
    },
    {
      icon: BookOpen,
      title: subjectLitTitle,
      body: subjectLitBody,
      iconClass: 'bg-clay-500/10 text-clay-600 dark:text-clay-500',
      ringClass: 'hover:border-clay-500/40',
    },
    {
      icon: GraduationCap,
      title: subjectIgcseAlevelTitle,
      body: subjectIgcseAlevelBody,
      iconClass: 'bg-ochre-500/10 text-ochre-600 dark:text-ochre-400',
      ringClass: 'hover:border-ochre-500/40',
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <BreadcrumbJsonLd
        items={[
          { name: breadcrumbHome, url: 'https://theenglishhub.app' },
          { name: breadcrumbStudents, url: 'https://theenglishhub.app/students' },
        ]}
      />

      {/* 1. Hero */}
      <section className="relative overflow-hidden border-b border-border/60">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-primary/5 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-ochre-500/[0.06] blur-3xl"
        />
        <div className="relative mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 sm:py-28">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">
            {heroEyebrow}
          </p>
          <h1 className="mx-auto mt-5 max-w-3xl font-serif text-4xl font-semibold leading-[1.12] tracking-tight text-foreground sm:text-5xl">
            {heroTitle}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {heroSubtitle}
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              size="lg"
              className="h-12 px-7 text-base"
              render={<Link href="/board-select" />}
            >
              {heroCtaPrimary}
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-12 px-7 text-base"
              render={<Link href="/pricing" />}
            >
              {heroCtaSecondary}
            </Button>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {[heroPillBoards, heroPillAiFeedback, heroPillLevels].map((pill) => (
              <span
                key={pill}
                className="inline-flex items-center rounded-full border border-border/60 bg-card/70 px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm backdrop-blur-sm"
              >
                {pill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Student journey */}
      <section aria-labelledby="journey-heading" className="border-b border-border/60 bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="text-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              {journeyEyebrow}
            </p>
            <h2
              id="journey-heading"
              className="mt-3 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
            >
              {journeyTitle}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted-foreground">
              {journeySubtitle}
            </p>
          </div>

          {/* Horizontal flow on lg+, vertical on mobile */}
          <div className="relative mt-12">
            {/* Decorative connector line behind cards (lg+) */}
            <div
              aria-hidden
              className="pointer-events-none absolute left-6 right-6 top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-clay-500/40 lg:block"
            />

            <ol className="relative flex flex-col gap-4 sm:gap-5 lg:flex-row lg:items-stretch lg:gap-2">
              {JOURNEY_STEPS.map((step, i) => {
                const Icon = step.icon
                const isLast = i === JOURNEY_STEPS.length - 1
                return (
                  <li
                    key={step.title}
                    className="flex flex-col items-stretch lg:flex-1 lg:flex-row lg:items-center"
                  >
                    <Card className="relative w-full gap-2 border-border/50 bg-card/90 p-5 backdrop-blur-sm lg:h-full">
                      <div className="flex items-center gap-3">
                        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
                          <Icon className="h-5 w-5" aria-hidden />
                        </span>
                        <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                          {journeyStepLabel} {i + 1}
                        </span>
                      </div>
                      <h3 className="mt-2 font-serif text-base font-semibold leading-snug text-foreground">
                        {step.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">{step.body}</p>
                    </Card>

                    {/* Connector — horizontal chevron on lg, vertical bar on mobile */}
                    {!isLast && (
                      <div
                        aria-hidden
                        className="flex items-center justify-center py-1 lg:px-1 lg:py-0"
                      >
                        {/* Mobile vertical connector */}
                        <span className="block h-4 w-px bg-gradient-to-b from-teal-500/40 to-clay-500/30 lg:hidden" />
                        {/* Desktop horizontal chevron */}
                        <ChevronRight
                          className="hidden h-5 w-5 text-muted-foreground/60 lg:block"
                          aria-hidden
                        />
                      </div>
                    )}
                  </li>
                )
              })}
            </ol>
          </div>
        </div>
      </section>

      {/* 3. What's inside (BenefitGrid wrapped in GlassPanel) */}
      <section
        aria-labelledby="inside-heading"
        className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20"
      >
        <GlassPanel accent="teal" className="p-2 sm:p-3">
          <div className="rounded-xl bg-background/30 p-6 sm:p-8">
            <div className="text-center">
              <PanelEyebrow>{insideEyebrow}</PanelEyebrow>
              <h2
                id="inside-heading"
                className="mt-3 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
              >
                {insideTitle}
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">{insideSubtitle}</p>
            </div>

            {/* Exam board strip */}
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {EXAM_BOARDS.map((board) => (
                <div
                  key={board}
                  className="rounded-xl border border-border/60 bg-card/80 p-4 text-center shadow-sm backdrop-blur-sm"
                >
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    {insideBoardEyebrow}
                  </p>
                  <p className="mt-1 font-serif text-lg font-semibold tracking-tight text-foreground">
                    {board}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <BenefitGrid
                items={[
                  {
                    icon: BookOpen,
                    title: benefitRevisionTitle,
                    body: benefitRevisionBody,
                  },
                  {
                    icon: PenLine,
                    title: benefitEssayTitle,
                    body: benefitEssayBody,
                  },
                  {
                    icon: MessageSquare,
                    title: benefitFeedbackTitle,
                    body: benefitFeedbackBody,
                  },
                  {
                    icon: GraduationCap,
                    title: benefitLitLangTitle,
                    body: benefitLitLangBody,
                  },
                  {
                    icon: Languages,
                    title: benefitEalTitle,
                    body: benefitEalBody,
                  },
                  {
                    icon: BarChart3,
                    title: benefitProgressTitle,
                    body: benefitProgressBody,
                  },
                ]}
              />
            </div>
          </div>
        </GlassPanel>
      </section>

      {/* 4. Subjects */}
      <section aria-labelledby="subjects-heading" className="border-y border-border/60 bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="text-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              {subjectsEyebrow}
            </p>
            <h2
              id="subjects-heading"
              className="mt-3 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
            >
              {subjectsTitle}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted-foreground">
              {subjectsSubtitle}
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SUBJECTS.map((s) => {
              const Icon = s.icon
              return (
                <Card
                  key={s.title}
                  className={`h-full border-border/50 p-6 transition-colors ${s.ringClass}`}
                >
                  <div
                    className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl ${s.iconClass}`}
                  >
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <h3 className="font-serif text-lg font-semibold tracking-tight text-foreground">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* 5. Demo CTA */}
      <section
        aria-labelledby="demo-heading"
        className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20"
      >
        <GlassPanel accent="clay" className="p-8 sm:p-12">
          <div className="text-center">
            <PanelEyebrow>{demoEyebrow}</PanelEyebrow>
            <h2
              id="demo-heading"
              className="mt-3 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
            >
              {demoTitle}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted-foreground">
              {demoSubtitle}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                size="lg"
                className="h-12 px-7 text-base"
                render={<Link href="/demo/student" />}
              >
                {demoCtaPrimary}
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="h-12 px-7 text-base"
                render={<Link href="/board-select" />}
              >
                {demoCtaSecondary}
              </Button>
            </div>
          </div>
        </GlassPanel>
      </section>

      {/* 6. Friendly teacher note */}
      <section className="mx-auto max-w-3xl px-4 pb-20 sm:px-6 sm:pb-24">
        <Card className="flex-row items-start gap-4 border-primary/20 bg-primary/[0.03] p-5 sm:p-6">
          <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Info className="h-4 w-4" aria-hidden />
          </span>
          <div className="min-w-0">
            <p className="font-serif text-sm font-semibold tracking-tight text-foreground">
              {noteTitle}
            </p>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{noteBody}</p>
          </div>
        </Card>
      </section>
    </main>
  )
}
