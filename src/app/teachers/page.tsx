import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Brain,
  LineChart,
  ClipboardCheck,
  FileText,
  BookOpen,
  Languages,
  Target,
  ScrollText,
  X,
  Clock,
  Frown,
  AlertCircle,
  Check,
  Zap,
  Eye,
  TrendingUp,
  Calendar,
  PenTool,
  MessageSquare,
  BarChart3,
  ChevronRight,
  Shield,
  ArrowRight,
  Sparkles,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
import { FeatureGrid } from '@/components/schools/FeatureGrid'
import { SchoolFAQ } from '@/components/schools/SchoolFAQ'
import { GlassPanel, PanelEyebrow } from '@/components/dataviz/GlassPanel'
import { t } from '@/lib/i18n/t'

const OG =
  '/api/og?title=Support+every+student+without+adding+to+your+workload&subtitle=AI-assisted+feedback+for+English+teachers'

export async function generateMetadata(): Promise<Metadata> {
  const [title, description, ogTitle, ogDescription, ogImageAlt] = await Promise.all([
    t('mkt.teachers.meta.title'),
    t('mkt.teachers.meta.description'),
    t('mkt.teachers.meta.og_title'),
    t('mkt.teachers.meta.og_description'),
    t('mkt.teachers.meta.og_image_alt'),
  ])
  return {
    title,
    description,
    alternates: { canonical: 'https://theenglishhub.app/teachers' },
    keywords: [
      'AI marking for English teachers',
      'teacher workload reduction EdTech',
      'English teacher feedback tool',
      'English homework setting',
    ],
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      url: 'https://theenglishhub.app/teachers',
      images: [{ url: OG, width: 1200, height: 630, alt: ogImageAlt }],
    },
    twitter: { card: 'summary_large_image', images: [OG] },
  }
}

const WITHOUT_ICONS: (typeof X)[] = [Clock, X, Frown, AlertCircle]
const WITH_ICONS: (typeof Check)[] = [Zap, Check, Eye, TrendingUp]
const WEEK_ICONS: (typeof Calendar)[] = [Calendar, PenTool, MessageSquare, BarChart3]
const FEATURE_ICONS: (typeof Brain)[] = [
  Brain,
  LineChart,
  ClipboardCheck,
  ScrollText,
  FileText,
  BookOpen,
  Languages,
  Target,
]

export default async function TeachersPage() {
  const heroPills = [
    await t('mkt.teachers.hero.pill_reduce_marking'),
    await t('mkt.teachers.hero.pill_class_insight'),
    await t('mkt.teachers.hero.pill_spec_aligned'),
  ] as const

  const withoutPoints: { icon: typeof X; label: string }[] = [
    { icon: WITHOUT_ICONS[0], label: await t('mkt.teachers.shift.without.point_late_nights') },
    {
      icon: WITHOUT_ICONS[1],
      label: await t('mkt.teachers.shift.without.point_scattered_feedback'),
    },
    {
      icon: WITHOUT_ICONS[2],
      label: await t('mkt.teachers.shift.without.point_late_identification'),
    },
    {
      icon: WITHOUT_ICONS[3],
      label: await t('mkt.teachers.shift.without.point_invisible_patterns'),
    },
  ]

  const withPoints: { icon: typeof Check; label: string }[] = [
    { icon: WITH_ICONS[0], label: await t('mkt.teachers.shift.with.point_faster_turnaround') },
    {
      icon: WITH_ICONS[1],
      label: await t('mkt.teachers.shift.with.point_structured_commentary'),
    },
    { icon: WITH_ICONS[2], label: await t('mkt.teachers.shift.with.point_earlier_surfacing') },
    { icon: WITH_ICONS[3], label: await t('mkt.teachers.shift.with.point_class_patterns') },
  ]

  const weekSteps: {
    icon: typeof Calendar
    day: string
    body: string
  }[] = [
    {
      icon: WEEK_ICONS[0],
      day: await t('mkt.teachers.week.monday.day'),
      body: await t('mkt.teachers.week.monday.body'),
    },
    {
      icon: WEEK_ICONS[1],
      day: await t('mkt.teachers.week.tue_thu.day'),
      body: await t('mkt.teachers.week.tue_thu.body'),
    },
    {
      icon: WEEK_ICONS[2],
      day: await t('mkt.teachers.week.friday.day'),
      body: await t('mkt.teachers.week.friday.body'),
    },
    {
      icon: WEEK_ICONS[3],
      day: await t('mkt.teachers.week.half_term.day'),
      body: await t('mkt.teachers.week.half_term.body'),
    },
  ]

  const featureItems = [
    {
      icon: FEATURE_ICONS[0],
      title: await t('mkt.teachers.features.ai_feedback.title'),
      body: await t('mkt.teachers.features.ai_feedback.body'),
    },
    {
      icon: FEATURE_ICONS[1],
      title: await t('mkt.teachers.features.class_weaknesses.title'),
      body: await t('mkt.teachers.features.class_weaknesses.body'),
    },
    {
      icon: FEATURE_ICONS[2],
      title: await t('mkt.teachers.features.homework_setting.title'),
      body: await t('mkt.teachers.features.homework_setting.body'),
    },
    {
      icon: FEATURE_ICONS[3],
      title: await t('mkt.teachers.features.worksheet_builder.title'),
      body: await t('mkt.teachers.features.worksheet_builder.body'),
    },
    {
      icon: FEATURE_ICONS[4],
      title: await t('mkt.teachers.features.student_reports.title'),
      body: await t('mkt.teachers.features.student_reports.body'),
    },
    {
      icon: FEATURE_ICONS[5],
      title: await t('mkt.teachers.features.reading_support.title'),
      body: await t('mkt.teachers.features.reading_support.body'),
    },
    {
      icon: FEATURE_ICONS[6],
      title: await t('mkt.teachers.features.eal_support.title'),
      body: await t('mkt.teachers.features.eal_support.body'),
    },
    {
      icon: FEATURE_ICONS[7],
      title: await t('mkt.teachers.features.targeted_revision.title'),
      body: await t('mkt.teachers.features.targeted_revision.body'),
    },
  ]

  const stepLabel = await t('mkt.teachers.week.step_label')

  return (
    <main className="min-h-screen bg-background">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'Teachers', url: 'https://theenglishhub.app/teachers' },
        ]}
      />

      {/* 1. Hero */}
      <section className="relative overflow-hidden border-b border-border/60">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary/5 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -left-20 -bottom-32 h-72 w-72 rounded-full bg-clay-500/[0.05] blur-3xl"
        />
        <div className="relative mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 sm:py-28">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">
            {await t('mkt.teachers.hero.eyebrow')}
          </p>
          <h1 className="mx-auto mt-5 max-w-3xl font-serif text-4xl font-semibold leading-[1.12] tracking-tight text-foreground sm:text-5xl">
            {await t('mkt.teachers.hero.title')}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {await t('mkt.teachers.hero.subtitle')}
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button size="lg" className="h-12 px-7 text-base" render={<Link href="/pricing" />}>
              {await t('mkt.teachers.hero.cta_primary')}
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-12 px-7 text-base"
              render={<Link href="/schools" />}
            >
              {await t('mkt.teachers.hero.cta_secondary')}
            </Button>
          </div>
          <ul className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {heroPills.map((pill) => (
              <li
                key={pill}
                className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-card/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur-sm"
              >
                <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-primary/70" />
                {pill}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 2. Before / After */}
      <section
        aria-labelledby="change-heading"
        className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20"
      >
        <div className="text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
            {await t('mkt.teachers.shift.eyebrow')}
          </p>
          <h2
            id="change-heading"
            className="mt-3 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            {await t('mkt.teachers.shift.title')}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted-foreground">
            {await t('mkt.teachers.shift.lead')}
          </p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {/* Without */}
          <Card className="relative overflow-hidden p-6 sm:p-7">
            <span
              aria-hidden
              className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-destructive/[0.06] blur-3xl"
            />
            <div className="relative">
              <div className="flex items-center gap-2">
                <p className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  {await t('mkt.teachers.shift.without.eyebrow')}
                </p>
                <span className="h-px flex-1 bg-border/60" />
              </div>
              <h3 className="mt-2 font-serif text-xl font-semibold tracking-tight text-foreground">
                {await t('mkt.teachers.shift.without.title')}
              </h3>
              <ul className="mt-5 space-y-3.5">
                {withoutPoints.map(({ icon: Icon, label }) => (
                  <li key={label} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-destructive/10 text-destructive">
                      <Icon className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-sm leading-relaxed text-foreground">{label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>

          {/* With */}
          <Card className="relative overflow-hidden border-teal-500/30 p-6 sm:p-7">
            <span
              aria-hidden
              className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-teal-500/[0.08] blur-3xl"
            />
            <div className="relative">
              <div className="flex items-center gap-2">
                <p className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-teal-600 dark:text-teal-400">
                  {await t('mkt.teachers.shift.with.eyebrow')}
                </p>
                <span className="h-px flex-1 bg-border/60" />
              </div>
              <h3 className="mt-2 font-serif text-xl font-semibold tracking-tight text-foreground">
                {await t('mkt.teachers.shift.with.title')}
              </h3>
              <ul className="mt-5 space-y-3.5">
                {withPoints.map(({ icon: Icon, label }) => (
                  <li key={label} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-teal-500/15 text-teal-600 dark:text-teal-400">
                      <Icon className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-sm leading-relaxed text-foreground">{label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        </div>
      </section>

      {/* 3. Feature grid — what it does for teachers */}
      <section
        aria-labelledby="what-it-does-heading"
        className="border-y border-border/60 bg-muted/30"
      >
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="text-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-primary">
              {await t('mkt.teachers.features.eyebrow')}
            </p>
            <h2
              id="what-it-does-heading"
              className="mt-3 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
            >
              {await t('mkt.teachers.features.title')}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted-foreground">
              {await t('mkt.teachers.features.lead')}
            </p>
          </div>
          <div className="mt-10">
            <GlassPanel accent="primary" className="p-2 sm:p-3">
              <div className="px-4 pt-4 sm:px-5 sm:pt-5">
                <PanelEyebrow>{await t('mkt.teachers.features.panel_eyebrow')}</PanelEyebrow>
              </div>
              <div className="p-2 sm:p-3">
                <FeatureGrid items={featureItems} />
              </div>
            </GlassPanel>
          </div>

          {/* Trust statement — pulled out as deliberate footer card */}
          <Card className="mx-auto mt-8 max-w-3xl p-5 sm:p-6">
            <div className="flex items-start gap-4">
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Shield className="h-5 w-5" />
              </span>
              <div>
                <p className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-primary">
                  {await t('mkt.teachers.features.trust.eyebrow')}
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-foreground">
                  {await t('mkt.teachers.features.trust.body')}
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* 4. A typical week */}
      <section
        aria-labelledby="week-heading"
        className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20"
      >
        <div className="text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
            {await t('mkt.teachers.week.eyebrow')}
          </p>
          <h2
            id="week-heading"
            className="mt-3 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            {await t('mkt.teachers.week.title')}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted-foreground">
            {await t('mkt.teachers.week.lead')}
          </p>
        </div>
        <ol className="mt-12 grid items-stretch gap-3 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr]">
          {weekSteps.map(({ icon: Icon, day, body }, i) => (
            <li key={day} className="contents">
              <Card className="relative h-full p-5">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-4.5 w-4.5" />
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                      {stepLabel} {i + 1}
                    </span>
                  </div>
                </div>
                <p className="mt-3 font-serif text-base font-semibold tracking-tight text-foreground">
                  {day}
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </Card>
              {i < weekSteps.length - 1 && (
                <div
                  aria-hidden
                  className="hidden items-center justify-center text-muted-foreground/50 md:flex"
                >
                  <ChevronRight className="h-5 w-5" />
                </div>
              )}
            </li>
          ))}
        </ol>
      </section>

      {/* 5. Demo CTA */}
      <section aria-labelledby="demo-heading" className="border-y border-border/60 bg-muted/30">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-20">
          <GlassPanel accent="teal" className="p-8 sm:p-12">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">
              {await t('mkt.teachers.demo.eyebrow')}
            </p>
            <h2
              id="demo-heading"
              className="mx-auto mt-3 max-w-2xl font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
            >
              {await t('mkt.teachers.demo.title')}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
              {await t('mkt.teachers.demo.lead')}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3">
              <Button
                size="lg"
                className="h-12 px-7 text-base"
                render={<Link href="/demo/teacher" />}
              >
                <Sparkles className="mr-1 h-4 w-4" />
                {await t('mkt.teachers.demo.cta_primary')}
              </Button>
              <Link
                href="/demo/school"
                className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {await t('mkt.teachers.demo.cta_secondary')}
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </GlassPanel>
        </div>
      </section>

      {/* 6. FAQ */}
      <section
        aria-labelledby="faq-heading"
        className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20"
      >
        <div className="text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
            {await t('mkt.teachers.faq.eyebrow')}
          </p>
          <h2
            id="faq-heading"
            className="mt-3 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            {await t('mkt.teachers.faq.title')}
          </h2>
        </div>
        <GlassPanel accent="sage" className="mt-10 p-5 sm:p-7">
          <PanelEyebrow className="mb-5">{await t('mkt.teachers.faq.panel_eyebrow')}</PanelEyebrow>
          <SchoolFAQ />
        </GlassPanel>
      </section>

      {/* 7. Final CTA strip */}
      <section
        aria-labelledby="final-cta-heading"
        className="border-t border-border/60 bg-background"
      >
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 px-4 py-12 text-center sm:px-6 sm:py-14 md:flex-row md:text-left">
          <div>
            <h2
              id="final-cta-heading"
              className="font-serif text-xl font-semibold tracking-tight text-foreground sm:text-2xl"
            >
              {await t('mkt.teachers.final.title')}
            </h2>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
              {await t('mkt.teachers.final.body')}
            </p>
          </div>
          <div className="flex flex-col items-center gap-3 sm:flex-row">
            <Link
              href="/pricing"
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-foreground transition-colors hover:text-primary"
            >
              {await t('mkt.teachers.final.cta_pricing')}
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <span aria-hidden className="hidden h-4 w-px bg-border sm:block" />
            <Link
              href="/schools"
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-foreground transition-colors hover:text-primary"
            >
              {await t('mkt.teachers.final.cta_school')}
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
