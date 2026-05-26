import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Clock,
  Eye,
  Languages,
  Target,
  FileText,
  LineChart,
  Brain,
  ClipboardCheck,
  BookOpen,
  Layers,
  Users2,
  ScrollText,
  AlertTriangle,
  ArrowRight,
  Building2,
  GraduationCap,
  LayoutDashboard,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
import { BenefitGrid } from '@/components/schools/BenefitCard'
import { FeatureGrid } from '@/components/schools/FeatureGrid'
import { PilotTimeline } from '@/components/schools/PilotTimeline'
import { SchoolPricingCards } from '@/components/schools/SchoolPricingCards'
import { SchoolFAQ } from '@/components/schools/SchoolFAQ'
import { SchoolCTAForm } from '@/components/schools/SchoolCTAForm'
import { GlassPanel, PanelEyebrow } from '@/components/dataviz/GlassPanel'
import { PRICING_DISPLAY } from '@/constants/pricing'
import { t } from '@/lib/i18n/t'

const OG =
  '/api/og?title=English+department+intelligence,+assessment+and+intervention&subtitle=A+school-ready+platform+for+modern+English+departments'

export async function generateMetadata(): Promise<Metadata> {
  const title = await t('mkt.schools.meta.title')
  const description = await t('mkt.schools.meta.description')
  const ogTitle = await t('mkt.schools.meta.og_title')
  const ogDescription = await t('mkt.schools.meta.og_description')
  const ogAlt = await t('mkt.schools.meta.og_alt')
  return {
    title,
    description,
    alternates: { canonical: 'https://theenglishhub.app/schools' },
    keywords: [
      'AI English platform for schools',
      'English intervention platform',
      'English department analytics',
      'school English assessment platform',
      'AI marking for English teachers',
      'IGCSE English support',
    ],
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      url: 'https://theenglishhub.app/schools',
      images: [{ url: OG, width: 1200, height: 630, alt: ogAlt }],
    },
    twitter: { card: 'summary_large_image', images: [OG] },
  }
}

export default async function SchoolsPage() {
  /* Problem cards - each is a distinct concern, given its own accent border
     and icon to break the monotony of identical bullets. */
  const PROBLEMS = [
    {
      icon: Clock,
      accent: 'border-l-clay-500/50',
      body: await t('mkt.schools.problem.card.marking_workload'),
    },
    {
      icon: Eye,
      accent: 'border-l-ochre-500/50',
      body: await t('mkt.schools.problem.card.practice_inconsistent'),
    },
    {
      icon: LineChart,
      accent: 'border-l-sage-500/50',
      body: await t('mkt.schools.problem.card.limited_visibility'),
    },
    {
      icon: AlertTriangle,
      accent: 'border-l-clay-500/50',
      body: await t('mkt.schools.problem.card.late_identification'),
    },
    {
      icon: Languages,
      accent: 'border-l-teal-500/50',
      body: await t('mkt.schools.problem.card.eal_support'),
    },
    {
      icon: FileText,
      accent: 'border-l-ochre-500/50',
      body: await t('mkt.schools.problem.card.reporting_scattered'),
    },
  ]

  /* Aspirational/forward-looking lozenges for the hero stat strip. Qualitative
     only - no fabricated user numbers (brand-voice §9). */
  const HERO_LOZENGES = [
    await t('mkt.schools.hero.lozenge.language_literature'),
    await t('mkt.schools.hero.lozenge.levels'),
    await t('mkt.schools.hero.lozenge.designed_for_departments'),
  ]

  /* Forward-looking, qualitative tiles. Real numbers stay out (brand-voice §9). */
  const VALUE_TILES = [
    {
      label: await t('mkt.schools.value.tile.all_boards.label'),
      headline: await t('mkt.schools.value.tile.all_boards.headline'),
      body: await t('mkt.schools.value.tile.all_boards.body'),
      icon: Layers,
      accent: 'teal' as const,
    },
    {
      label: await t('mkt.schools.value.tile.eal.label'),
      headline: await t('mkt.schools.value.tile.eal.headline'),
      body: await t('mkt.schools.value.tile.eal.body'),
      icon: Languages,
      accent: 'sage' as const,
    },
    {
      label: await t('mkt.schools.value.tile.institutional.label'),
      headline: await t('mkt.schools.value.tile.institutional.headline'),
      body: await t('mkt.schools.value.tile.institutional.body'),
      icon: Building2,
      accent: 'ochre' as const,
    },
  ]

  const DEMO_CARDS = [
    {
      href: '/demo/school',
      icon: LayoutDashboard,
      accent: 'border-l-teal-500/60',
      title: await t('mkt.schools.demo.card.school.title'),
      body: await t('mkt.schools.demo.card.school.body'),
    },
    {
      href: '/demo/teacher',
      icon: ClipboardCheck,
      accent: 'border-l-sage-500/60',
      title: await t('mkt.schools.demo.card.teacher.title'),
      body: await t('mkt.schools.demo.card.teacher.body'),
    },
    {
      href: '/demo/student',
      icon: GraduationCap,
      accent: 'border-l-clay-500/60',
      title: await t('mkt.schools.demo.card.student.title'),
      body: await t('mkt.schools.demo.card.student.body'),
    },
  ]

  const demoOpenLabel = await t('mkt.schools.demo.card.cta_open')

  const ctaBullets = [
    await t('mkt.schools.cta.bullet.scope'),
    await t('mkt.schools.cta.bullet.onboarding'),
    await t('mkt.schools.cta.bullet.impact_report'),
  ]

  const featureItems = [
    {
      icon: Brain,
      title: await t('mkt.schools.solution.feature.marking.title'),
      body: await t('mkt.schools.solution.feature.marking.body'),
    },
    {
      icon: BookOpen,
      title: await t('mkt.schools.solution.feature.practice.title'),
      body: await t('mkt.schools.solution.feature.practice.body'),
    },
    {
      icon: Layers,
      title: await t('mkt.schools.solution.feature.comprehension.title'),
      body: await t('mkt.schools.solution.feature.comprehension.body'),
    },
    {
      icon: Languages,
      title: await t('mkt.schools.solution.feature.eal.title'),
      body: await t('mkt.schools.solution.feature.eal.body'),
    },
    {
      icon: LineChart,
      title: await t('mkt.schools.solution.feature.analytics.title'),
      body: await t('mkt.schools.solution.feature.analytics.body'),
    },
    {
      icon: Eye,
      title: await t('mkt.schools.solution.feature.intervention.title'),
      body: await t('mkt.schools.solution.feature.intervention.body'),
    },
    {
      icon: ClipboardCheck,
      title: await t('mkt.schools.solution.feature.homework.title'),
      body: await t('mkt.schools.solution.feature.homework.body'),
    },
    {
      icon: FileText,
      title: await t('mkt.schools.solution.feature.reports.title'),
      body: await t('mkt.schools.solution.feature.reports.body'),
    },
    {
      icon: ScrollText,
      title: await t('mkt.schools.solution.feature.resource_gen.title'),
      body: await t('mkt.schools.solution.feature.resource_gen.body'),
    },
  ]

  const benefitItems = [
    {
      icon: Clock,
      title: await t('mkt.schools.benefit.workload.title'),
      body: await t('mkt.schools.benefit.workload.body'),
    },
    {
      icon: Eye,
      title: await t('mkt.schools.benefit.intervention.title'),
      body: await t('mkt.schools.benefit.intervention.body'),
    },
    {
      icon: Languages,
      title: await t('mkt.schools.benefit.eal.title'),
      body: await t('mkt.schools.benefit.eal.body'),
    },
    {
      icon: Target,
      title: await t('mkt.schools.benefit.exam_readiness.title'),
      body: await t('mkt.schools.benefit.exam_readiness.body'),
    },
    {
      icon: FileText,
      title: await t('mkt.schools.benefit.reports.title'),
      body: await t('mkt.schools.benefit.reports.body'),
    },
    {
      icon: LineChart,
      title: await t('mkt.schools.benefit.cohorts.title'),
      body: await t('mkt.schools.benefit.cohorts.body'),
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'Schools', url: 'https://theenglishhub.app/schools' },
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
          className="pointer-events-none absolute -right-20 -bottom-20 h-80 w-80 rounded-full bg-clay-500/[0.06] blur-3xl"
        />
        <div className="relative mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 sm:py-28">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">
            {await t('mkt.schools.hero.eyebrow')}
          </p>
          <h1 className="mx-auto mt-5 max-w-3xl font-serif text-4xl font-semibold leading-[1.12] tracking-tight text-foreground sm:text-5xl">
            {await t('mkt.schools.hero.title')}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {await t('mkt.schools.hero.lede')}
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              size="lg"
              className="h-12 px-7 text-base"
              render={<Link href="/school-pilot" />}
            >
              {await t('mkt.schools.hero.cta_primary')}
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-12 px-7 text-base"
              render={<Link href="#pilot" />}
            >
              {await t('mkt.schools.hero.cta_secondary')}
            </Button>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {HERO_LOZENGES.map((l) => (
              <span
                key={l}
                className="rounded-full border border-border/60 bg-card/60 px-3 py-1 text-xs text-muted-foreground"
              >
                {l}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Problem */}
      <section aria-labelledby="problem-heading" className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-clay-500/[0.05] blur-3xl"
        />
        <div className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="text-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              {await t('mkt.schools.problem.eyebrow')}
            </p>
            <h2
              id="problem-heading"
              className="mt-3 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
            >
              {await t('mkt.schools.problem.title')}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted-foreground">
              {await t('mkt.schools.problem.lede')}
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {PROBLEMS.map(({ icon: Icon, accent, body }) => (
              <Card
                key={body}
                className={`flex items-start gap-4 border-l-4 ${accent} border-border/50 bg-card p-5 sm:p-6`}
              >
                <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-foreground/[0.05] text-muted-foreground">
                  <Icon className="h-4 w-4" aria-hidden />
                </span>
                <p className="text-sm leading-relaxed text-foreground">{body}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Solution */}
      <section aria-labelledby="solution-heading" className="border-y border-border/60 bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="text-center">
            <h2
              id="solution-heading"
              className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
            >
              {await t('mkt.schools.solution.title')}
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              {await t('mkt.schools.solution.lede')}
            </p>
          </div>
          <div className="mt-10">
            <GlassPanel accent="primary" className="p-2 sm:p-3">
              <div className="mb-3 px-3 pt-2 sm:mb-4 sm:px-4 sm:pt-3">
                <PanelEyebrow>{await t('mkt.schools.solution.panel_eyebrow')}</PanelEyebrow>
              </div>
              <FeatureGrid items={featureItems} />
            </GlassPanel>
          </div>
        </div>
      </section>

      {/* 4. School value cards */}
      <section
        aria-labelledby="value-heading"
        className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20"
      >
        <div className="text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
            {await t('mkt.schools.value.eyebrow')}
          </p>
          <h2
            id="value-heading"
            className="mt-3 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            {await t('mkt.schools.value.title')}
          </h2>
        </div>

        {/* Aspirational tiles - qualitative only, no fabricated numbers. */}
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {VALUE_TILES.map(({ label, headline, body, icon: Icon, accent }) => (
            <GlassPanel key={label} accent={accent} className="p-5">
              <div className="flex items-start justify-between gap-3">
                <PanelEyebrow>{label}</PanelEyebrow>
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-foreground/[0.06]">
                  <Icon className="h-4 w-4 text-muted-foreground" aria-hidden />
                </span>
              </div>
              <p className="mt-3 font-serif text-2xl font-semibold tracking-tight text-foreground">
                {headline}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </GlassPanel>
          ))}
        </div>

        <div className="mt-10">
          <BenefitGrid items={benefitItems} />
        </div>
      </section>

      {/* 5. Demo showcase - explore the platform as a guest */}
      <section
        aria-labelledby="demo-heading"
        className="relative overflow-hidden border-y border-border/60 bg-muted/30"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -left-20 top-0 h-80 w-80 rounded-full bg-teal-500/[0.06] blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-sage-500/[0.06] blur-3xl"
        />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="text-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-primary">
              {await t('mkt.schools.demo.eyebrow')}
            </p>
            <h2
              id="demo-heading"
              className="mt-3 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
            >
              {await t('mkt.schools.demo.title')}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted-foreground">
              {await t('mkt.schools.demo.lede')}
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {DEMO_CARDS.map(({ href, icon: Icon, accent, title, body }) => (
              <Card
                key={href}
                className={`flex flex-col gap-4 border-l-4 ${accent} border-border/50 bg-card p-6`}
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-foreground">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
                </div>
                <div className="mt-auto pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-1.5"
                    render={<Link href={href} />}
                  >
                    {demoOpenLabel}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Pilot programme */}
      <section id="pilot" aria-labelledby="pilot-heading" className="scroll-mt-24">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="text-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-primary">
              {await t('mkt.schools.pilot.eyebrow')}
            </p>
            <h2
              id="pilot-heading"
              className="mt-3 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
            >
              {await t('mkt.schools.pilot.title')}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted-foreground">
              {await t('mkt.schools.pilot.lede')}
            </p>
          </div>
          <div className="mx-auto mt-12 max-w-3xl">
            <GlassPanel accent="clay" className="p-6 sm:p-8">
              <PanelEyebrow>{await t('mkt.schools.pilot.panel_eyebrow')}</PanelEyebrow>
              <div className="mt-5">
                <PilotTimeline />
              </div>
            </GlassPanel>
          </div>
          <div className="mt-10 text-center">
            <Button size="lg" className="h-12 px-7" render={<Link href="/school-pilot" />}>
              {await t('mkt.schools.pilot.cta')}
            </Button>
          </div>
        </div>
      </section>

      {/* 7. Pricing (pilots + annual) */}
      <section aria-labelledby="pricing-heading" className="border-y border-border/60 bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="text-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-primary">
              {await t('mkt.schools.pricing.eyebrow')}
            </p>
            <h2
              id="pricing-heading"
              className="mt-3 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
            >
              {await t('mkt.schools.pricing.title')}
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              {await t('mkt.schools.pricing.lede')}
            </p>
          </div>
          <div className="mt-10">
            <GlassPanel accent="ochre" className="p-4 sm:p-6">
              <SchoolPricingCards />
            </GlassPanel>
          </div>
        </div>
      </section>

      {/* 8. Conversion CTA */}
      <section
        id="contact"
        aria-labelledby="cta-heading"
        className="scroll-mt-24 border-t border-border/60"
      >
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-primary">
              {await t('mkt.schools.cta.eyebrow')}
            </p>
            <h2
              id="cta-heading"
              className="mt-3 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
            >
              {await t('mkt.schools.cta.title')}
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              {await t('mkt.schools.cta.lede')}
            </p>
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              {ctaBullets.map((p) => (
                <li key={p} className="flex items-start gap-2.5">
                  <Users2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {p}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
              {PRICING_DISPLAY.schoolPricingCaveat}
            </p>
          </div>
          <GlassPanel accent="primary" className="p-6 sm:p-8">
            <SchoolCTAForm heading={await t('mkt.schools.cta.form_heading')} />
          </GlassPanel>
        </div>
      </section>

      {/* FAQ */}
      <section
        aria-labelledby="faq-heading"
        className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20"
      >
        <h2
          id="faq-heading"
          className="mb-8 text-center font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
        >
          {await t('mkt.schools.faq.title')}
        </h2>
        <SchoolFAQ />
      </section>
    </main>
  )
}
