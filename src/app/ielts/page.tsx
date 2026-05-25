import Link from 'next/link'
import {
  Stethoscope,
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
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { t } from '@/lib/i18n/t'
import { IELTS_SKILLS, SKILL_META } from '@/lib/ielts/types'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
import { SkillCard } from './_components/SkillCard'
import { LoopStep } from './_components/LoopStep'

// ─── IELTS hub — SEO landing page ──────────────────────────────────────────
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

  // Localised skill names — keyed to match IELTS_SKILLS order downstream.
  const skillLabel: Record<(typeof IELTS_SKILLS)[number], string> = {
    listening: await t('ielts.skill.listening'),
    reading: await t('ielts.skill.reading'),
    writing: await t('ielts.skill.writing'),
    speaking: await t('ielts.skill.speaking'),
  }

  // The seven-stage learning loop. Labels come from ielts.loop.*; the detail
  // lines are original marketing copy (English — module-specific i18n is a
  // later pass, mirroring the dictionary shard's stated convention).
  const loopSteps = [
    {
      label: await t('ielts.loop.diagnose'),
      icon: Stethoscope,
      detail: 'A short placement test pins your starting band across all four skills.',
    },
    {
      label: await t('ielts.loop.plan'),
      icon: Map,
      detail: 'Get a personalised study plan that targets your weakest skill first.',
    },
    {
      label: await t('ielts.loop.practise'),
      icon: Dumbbell,
      detail: 'Work through Academic Listening, Reading, Writing and Speaking tasks.',
    },
    {
      label: await t('ielts.loop.feedback'),
      icon: Sparkles,
      detail: 'Writing and Speaking get an instant AI band against the official criteria.',
    },
    {
      label: await t('ielts.loop.mock'),
      icon: ClipboardCheck,
      detail: 'Sit a full, timed mock under real exam conditions when you are ready.',
    },
    {
      label: await t('ielts.loop.predict'),
      icon: Gauge,
      detail: 'See your predicted overall band and exactly what will lift it higher.',
    },
  ]

  // "Auto-marked" vs "AI band score" badge copy + per-skill blurbs.
  const markingLabel = { auto: 'Auto-marked', ai: 'AI band score' } as const
  const skillBlurb: Record<(typeof IELTS_SKILLS)[number], string> = {
    listening:
      'Section-by-section question practice with instant scoring and a band from your raw mark.',
    reading:
      'Academic passages with True/False/Not Given, matching and completion — marked the moment you finish.',
    writing:
      'Task 1 data responses and Task 2 essays scored on all four criteria, with fixes you can action.',
    speaking:
      'Parts 1–3 with cue cards and follow-ups, assessed for fluency, vocabulary, grammar and pronunciation.',
  }

  // "Why The English Hub" differentiators.
  const whyStrip = [
    {
      icon: Zap,
      title: 'Instant AI band feedback',
      body: 'No waiting for a tutor. Writing and Speaking responses get a band and targeted next steps in seconds.',
    },
    {
      icon: Languages,
      title: 'Built bilingual for Gulf learners',
      body: 'Every page works in English or Arabic, so instructions never get in the way of the practice.',
    },
    {
      icon: TrendingUp,
      title: 'A starter-to-Band-9 path',
      body: 'Whether you are at Band 4 or chasing Band 8, the loop adapts and tracks every step of the climb.',
    },
  ]

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
              View my progress
            </Button>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {[
              'Academic module',
              'Listening · Reading · Writing · Speaking',
              'English / العربية',
            ].map((l) => (
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

      {/* 2. The learning loop */}
      <section aria-labelledby="loop-heading" className="relative overflow-hidden">
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="text-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              How it works
            </p>
            <h2
              id="loop-heading"
              className="mt-3 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
            >
              One loop, repeated until you are exam-ready
            </h2>
            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted-foreground">
              Every cycle moves you up a band. Diagnose where you are, follow the plan, practise,
              get feedback, then prove it — and repeat.
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
              Four skills, one platform
            </p>
            <h2
              id="skills-heading"
              className="mt-3 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
            >
              Practise every part of the Academic test
            </h2>
            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted-foreground">
              Listening and Reading are marked automatically. Writing and Speaking are scored by AI
              against the official band descriptors — so you always know where you stand.
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
            Why The English Hub
          </p>
          <h2
            id="why-heading"
            className="mt-3 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            Feedback that used to need a tutor — instantly
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

      {/* 5. Closing CTA */}
      <section aria-labelledby="cta-heading" className="border-t border-border/60 bg-muted/30">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 sm:py-20">
          <h2
            id="cta-heading"
            className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            Find your band today — for free
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-muted-foreground">
            Take the placement test, get your personalised plan, and start closing the gap to your
            target band.
          </p>
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
              View my progress
            </Button>
          </div>
          <p className="mt-6 font-mono text-xs text-muted-foreground">{estimateNote}</p>
        </div>
      </section>
    </main>
  )
}
