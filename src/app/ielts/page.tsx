import Link from 'next/link'
import {
  Stethoscope,
  BookOpen,
  BookMarked,
  CalendarDays,
  Map,
  Dumbbell,
  Sparkles,
  ClipboardCheck,
  Gauge,
  ArrowRight,
  LayoutDashboard,
  Languages,
  Zap,
  TrendingUp,
  ChevronRight,
  GraduationCap,
  Users,
  Building2,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { t } from '@/lib/i18n/t'
import { PRICING } from '@/constants/pricing'
import { IELTS_SKILLS, SKILL_META } from '@/lib/ielts/types'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
import { SkillCard } from './_components/SkillCard'
import { LoopStep } from './_components/LoopStep'

// ─── IELTS hub - SEO landing page ──────────────────────────────────────────
// The entry point to the IELTS Academic learning loop. Server component so the
// hero copy, loop labels and CTAs render statically for SEO and resolve the
// learner's locale (en/ar) per request via the server `t()` helper. Exactly
// one <h1> (ielts.hub.title). Section-level <metadata> lives in layout.tsx.
// ────────────────────────────────────────────────────────────────────────────

export default async function IeltsHubPage() {
  // Resolve all shared dictionary copy up front (one locale read, batched-ish).
  const eyebrow = await t('ielts.hub.eyebrow')
  const title = await t('ielts.hub.title')
  const subtitle = await t('ielts.hub.subtitle')
  const startDiagnostic = await t('ielts.cta.start_diagnostic')
  const practiseNow = await t('ielts.cta.practise_now')
  const estimateNote = await t('ielts.estimate_note')

  // Localised skill names - keyed to match IELTS_SKILLS order downstream.
  const skillLabel: Record<(typeof IELTS_SKILLS)[number], string> = {
    listening: await t('ielts.skill.listening'),
    reading: await t('ielts.skill.reading'),
    writing: await t('ielts.skill.writing'),
    speaking: await t('ielts.skill.speaking'),
  }

  // The seven-stage learning loop. Labels come from ielts.loop.*; the detail
  // lines are now translated via ielts.hubx.loop.*.detail (EN + Khaleeji AR).
  const loopSteps = [
    {
      label: await t('ielts.loop.diagnose'),
      icon: Stethoscope,
      detail: await t('ielts.hubx.loop.diagnose.detail'),
    },
    {
      label: await t('ielts.loop.plan'),
      icon: Map,
      detail: await t('ielts.hubx.loop.plan.detail'),
    },
    {
      label: await t('ielts.loop.practise'),
      icon: Dumbbell,
      detail: await t('ielts.hubx.loop.practise.detail'),
    },
    {
      label: await t('ielts.loop.feedback'),
      icon: Sparkles,
      detail: await t('ielts.hubx.loop.feedback.detail'),
    },
    {
      label: await t('ielts.loop.mock'),
      icon: ClipboardCheck,
      detail: await t('ielts.hubx.loop.mock.detail'),
    },
    {
      label: await t('ielts.loop.predict'),
      icon: Gauge,
      detail: await t('ielts.hubx.loop.predict.detail'),
    },
  ]

  // "Auto-marked" vs "AI band score" badge copy + per-skill blurbs.
  const markingLabel = {
    auto: await t('ielts.hubx.marking.auto'),
    ai: await t('ielts.hubx.marking.ai'),
  } as const
  const skillBlurb: Record<(typeof IELTS_SKILLS)[number], string> = {
    listening: await t('ielts.hubx.skill.listening.blurb'),
    reading: await t('ielts.hubx.skill.reading.blurb'),
    writing: await t('ielts.hubx.skill.writing.blurb'),
    speaking: await t('ielts.hubx.skill.speaking.blurb'),
  }

  // "Why The English Hub" differentiators.
  const whyStrip = [
    {
      icon: Zap,
      title: await t('ielts.hubx.why.instant.title'),
      body: await t('ielts.hubx.why.instant.body'),
    },
    {
      icon: Languages,
      title: await t('ielts.hubx.why.bilingual.title'),
      body: await t('ielts.hubx.why.bilingual.body'),
    },
    {
      icon: TrendingUp,
      title: await t('ielts.hubx.why.path.title'),
      body: await t('ielts.hubx.why.path.body'),
    },
  ]

  // "Beyond practice" cards - links resolved up front (server component can't
  // await inside the JSX .map()).
  const moreCards = [
    {
      href: '/ielts/admissions',
      icon: GraduationCap,
      title: await t('ielts.hubx.more.admissions.title'),
      body: await t('ielts.hubx.more.admissions.body'),
    },
    {
      href: '/ielts/centre',
      icon: Users,
      title: await t('ielts.hubx.more.centre.title'),
      body: await t('ielts.hubx.more.centre.body'),
    },
    {
      href: '/ielts/partners',
      icon: Building2,
      title: await t('ielts.hubx.more.partners.title'),
      body: await t('ielts.hubx.more.partners.body'),
    },
  ]

  // "Your readiness program" - direct entry points to the new program surfaces
  // (learn / dashboard / planner / mock / guide). Resolved up front like moreCards.
  const programEyebrow = await t('ielts.hubx.program.eyebrow')
  const programHeading = await t('ielts.hubx.program.heading')
  const programBody = await t('ielts.hubx.program.body')
  const programCards = [
    {
      href: '/ielts/learn',
      icon: BookOpen,
      title: await t('ielts.hubx.program.learn.title'),
      body: await t('ielts.hubx.program.learn.body'),
    },
    {
      href: '/ielts/dashboard',
      icon: LayoutDashboard,
      title: await t('ielts.hubx.program.dashboard.title'),
      body: await t('ielts.hubx.program.dashboard.body'),
    },
    {
      href: '/ielts/planner',
      icon: CalendarDays,
      title: await t('ielts.hubx.program.planner.title'),
      body: await t('ielts.hubx.program.planner.body'),
    },
    {
      href: '/ielts/mock',
      icon: ClipboardCheck,
      title: await t('ielts.hubx.program.mock.title'),
      body: await t('ielts.hubx.program.mock.body'),
    },
    {
      href: '/ielts/guide',
      icon: BookMarked,
      title: await t('ielts.hubx.program.guide.title'),
      body: await t('ielts.hubx.program.guide.body'),
    },
  ]

  // Remaining standalone hub copy - section eyebrows, headings, bodies, the
  // secondary CTA, hero badge chips and inline link labels.
  const viewProgress = await t('ielts.hubx.view_progress')
  const exploreLabel = await t('ielts.hubx.more.explore')
  const heroBadges = [
    await t('ielts.hubx.badge.academic_module'),
    await t('ielts.hubx.badge.four_skills'),
    await t('ielts.hubx.badge.bilingual'),
  ]
  const loopEyebrow = await t('ielts.hubx.loop.eyebrow')
  const loopHeading = await t('ielts.hubx.loop.heading')
  const loopBody = await t('ielts.hubx.loop.body')
  const skillsEyebrow = await t('ielts.hubx.skills.eyebrow')
  const skillsHeading = await t('ielts.hubx.skills.heading')
  const skillsBody = await t('ielts.hubx.skills.body')
  const whyEyebrow = await t('ielts.hubx.why.eyebrow')
  const whyHeading = await t('ielts.hubx.why.heading')
  const moreEyebrow = await t('ielts.hubx.more.eyebrow')
  const moreHeading = await t('ielts.hubx.more.heading')
  const ctaHeading = await t('ielts.hubx.cta.heading')
  const ctaBody = await t('ielts.hubx.cta.body')

  return (
    <main className="min-h-screen bg-background">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'IELTS', url: 'https://theenglishhub.app/ielts' },
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
          className="pointer-events-none absolute -right-20 -bottom-24 h-80 w-80 rounded-full bg-sky-500/[0.06] blur-3xl"
        />
        <div className="relative mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 sm:py-28">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-clay-500">
            {eyebrow}
          </p>
          <h1 className="mx-auto mt-5 max-w-3xl font-serif text-4xl font-semibold leading-[1.12] tracking-tight text-foreground sm:text-5xl">
            {title}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {subtitle}
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              size="lg"
              className="h-12 gap-2 px-7 text-base"
              render={<Link href="/ielts/diagnostic" />}
            >
              {startDiagnostic}
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-12 gap-2 px-7 text-base"
              render={<Link href="/ielts/progress" />}
            >
              <LayoutDashboard className="h-4 w-4" />
              {viewProgress}
            </Button>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {heroBadges.map((l) => (
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

      {/* 1a. Subscription CTA banner - drives to the purchasable IELTS plan */}
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <div className="flex flex-col items-center gap-6 rounded-2xl border border-sky-500/30 bg-sky-500/[0.06] p-8 text-center sm:flex-row sm:text-left">
            <div className="flex-1">
              <h2 className="text-2xl font-semibold tracking-tight text-sky-600 dark:text-sky-300">
                Unlimited AI band feedback — {PRICING.CURRENCY}
                {PRICING.IELTS_MONTHLY}/month
              </h2>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                Unlimited examiner-calibrated feedback on every Writing and Speaking answer. Start
                with a {PRICING.TRIAL_DAYS}-day free trial — cancel anytime.
              </p>
            </div>
            <Button
              size="lg"
              className="h-12 shrink-0 gap-2 bg-sky-600 px-7 text-base text-white hover:bg-sky-700"
              render={<Link href="/pricing#ielts" />}
            >
              See IELTS plans
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* 1b. The readiness program - direct entry points */}
      <section aria-labelledby="program-heading" className="border-b border-border/60 bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="text-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-clay-500">
              {programEyebrow}
            </p>
            <h2
              id="program-heading"
              className="mt-3 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
            >
              {programHeading}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted-foreground">
              {programBody}
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {programCards.map(({ href, icon: Icon, title: cardTitle, body }) => (
              <Link
                key={href}
                href={href}
                className="group flex flex-col rounded-2xl border border-border/60 bg-card p-5 shadow-soft transition-colors hover:border-primary/40"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="mt-4 font-serif text-lg font-semibold text-foreground">
                  {cardTitle}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{body}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary">
                  {exploreLabel}{' '}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 2. The learning loop */}
      <section aria-labelledby="loop-heading" className="relative overflow-hidden">
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="text-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              {loopEyebrow}
            </p>
            <h2
              id="loop-heading"
              className="mt-3 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
            >
              {loopHeading}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted-foreground">
              {loopBody}
            </p>
          </div>

          <ol className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {loopSteps.map((step, i) => (
              <div key={step.label} className="relative flex items-stretch">
                <LoopStep
                  index={i + 1}
                  label={step.label}
                  icon={step.icon}
                  detail={step.detail}
                  className="w-full"
                />
                {i < loopSteps.length - 1 ? (
                  <ChevronRight
                    aria-hidden
                    className="absolute -right-3 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-border lg:block"
                  />
                ) : null}
              </div>
            ))}
          </ol>
        </div>
      </section>

      {/* 3. The four skills */}
      <section aria-labelledby="skills-heading" className="border-y border-border/60 bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="text-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-clay-500">
              {skillsEyebrow}
            </p>
            <h2
              id="skills-heading"
              className="mt-3 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
            >
              {skillsHeading}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted-foreground">
              {skillsBody}
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {IELTS_SKILLS.map((skill) => (
              <SkillCard
                key={skill}
                skill={skill}
                meta={SKILL_META[skill]}
                label={skillLabel[skill]}
                blurb={skillBlurb[skill]}
                markingLabel={markingLabel[SKILL_META[skill].marking]}
                ctaLabel={practiseNow}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why The English Hub */}
      <section
        aria-labelledby="why-heading"
        className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20"
      >
        <div className="text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
            {whyEyebrow}
          </p>
          <h2
            id="why-heading"
            className="mt-3 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            {whyHeading}
          </h2>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {whyStrip.map(({ icon: Icon, title: cardTitle, body }) => (
            <div
              key={cardTitle}
              className="rounded-2xl border border-border/60 bg-card p-6 shadow-soft"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="mt-4 font-serif text-lg font-semibold text-foreground">{cardTitle}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4b. Beyond practice - admissions, educators, partners */}
      <section aria-labelledby="more-heading" className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="text-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              {moreEyebrow}
            </p>
            <h2
              id="more-heading"
              className="mt-3 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
            >
              {moreHeading}
            </h2>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {moreCards.map(({ href, icon: Icon, title: cardTitle, body }) => (
              <Link
                key={href}
                href={href}
                className="group rounded-2xl border border-border/60 bg-card p-6 shadow-soft transition-colors hover:border-primary/40"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="mt-4 font-serif text-lg font-semibold text-foreground">
                  {cardTitle}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary">
                  {exploreLabel}{' '}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Closing CTA */}
      <section aria-labelledby="cta-heading" className="border-t border-border/60 bg-muted/30">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 sm:py-20">
          <h2
            id="cta-heading"
            className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            {ctaHeading}
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-muted-foreground">{ctaBody}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              size="lg"
              className="h-12 gap-2 px-7 text-base"
              render={<Link href="/ielts/diagnostic" />}
            >
              {startDiagnostic}
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-12 px-7 text-base"
              render={<Link href="/ielts/progress" />}
            >
              {viewProgress}
            </Button>
          </div>
          <p className="mt-6 font-mono text-xs text-muted-foreground">{estimateNote}</p>
        </div>
      </section>
    </main>
  )
}
