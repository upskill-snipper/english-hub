import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Brain,
  LineChart,
  Languages,
  ClipboardCheck,
  Users2,
  GraduationCap,
  Building2,
  Clock,
  Eye,
  Target,
  FileText,
  Layers,
  ArrowRight,
} from 'lucide-react'
import { TrackEvent } from '@/components/analytics/TrackEvent'
import { GeoFaq, GCSE_BOARD_FAQS } from '@/components/seo/GeoFaq'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { BenefitGrid } from '@/components/schools/BenefitCard'
import { DemoShowcase } from '@/components/schools/DemoShowcase'
import { FeatureGrid } from '@/components/schools/FeatureGrid'
import { SchoolFAQ } from '@/components/schools/SchoolFAQ'
import { PRICING_DISPLAY } from '@/constants/pricing'
import { t } from '@/lib/i18n/t'

const OG =
  '/api/og?title=GCSE+%26+IGCSE+English+Revision,+AI-marked&subtitle=Practice+papers,+model+answers+and+instant+AI+feedback+for+students,+parents+and+schools'

export const metadata: Metadata = {
  title: 'GCSE & IGCSE English Revision, AI-marked',
  description:
    'Revise GCSE and IGCSE English with practice papers, model answers and instant AI marking against the real exam mark scheme, across AQA, Edexcel, OCR, Eduqas and Cambridge IGCSE. Built for students and parents, trusted by schools.',
  alternates: { canonical: 'https://theenglishhub.app' },
  keywords: [
    'GCSE English revision',
    'IGCSE English revision',
    'GCSE English Language revision',
    'GCSE English Literature revision',
    'AI English marking',
    'AQA English revision',
    'Edexcel English revision',
    'OCR English revision',
    'EAL English support',
    'English platform for schools',
  ],
  openGraph: {
    title: 'GCSE & IGCSE English Revision, AI-marked - The English Hub',
    description:
      'Practice papers, model answers and instant AI marking against the real exam mark scheme. For students and parents, trusted by schools.',
    url: 'https://theenglishhub.app',
    images: [
      {
        url: OG,
        width: 1200,
        height: 630,
        alt: 'The English Hub - GCSE & IGCSE English revision, AI-marked',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: [OG],
  },
}

/* ───────────────────── Main Page ───────────────────── */
//
// 02 May 2026 - homepage is now a single-purpose board picker. Marketing
// sections (TryAFeature / AnthologyPricing / FinalCTA) were removed at
// the founder's instruction so the homepage does one job: pick exam
// board, land in your hub. Pricing + product copy live on dedicated
// pages and are surfaced inside Your Hub (/revision) instead.
//
export default async function Home() {
  // Resolve i18n strings up-front so JSX stays clean (mirrors the
  // server-page pattern used in src/app/revision/page.tsx).
  const copy = {
    gcseKicker: await t('homepage.gcse.kicker'),
    gcseHeading: await t('homepage.gcse.heading'),
    gcseSubheading: await t('homepage.gcse.subheading'),
    ks3Kicker: await t('homepage.ks3.kicker'),
    ks3Heading: await t('homepage.ks3.heading'),
    ks3Subheading: await t('homepage.ks3.subheading'),
    igcseHeading: await t('homepage.igcse.heading'),
    igcseSubheading: await t('homepage.igcse.subheading'),
    faqHeading: await t('homepage.faq.heading'),
  }
  return (
    <main className="min-h-screen bg-background">
      {/* Funnel: home_viewed (consent-gated in src/lib/posthog.ts) */}
      <TrackEvent event="home_viewed" />

      {/* 1. Institutional hero */}
      <HomeHero />

      {/* ───── Students: choose your exam board (existing funnel preserved) ───── */}
      <section
        aria-labelledby="students-board-heading"
        className="border-t border-border/60 bg-muted/30"
      >
        <div className="mx-auto max-w-[1400px] px-4 pt-14 sm:px-6 sm:pt-20">
          <div className="text-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              For students &amp; parents
            </p>
            <h2
              id="students-board-heading"
              className="mt-3 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
            >
              Studying for an English exam? Choose your board
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Individual learners and families can start straight away - pick your exam board and
              land in a personalised revision hub.
            </p>
          </div>
        </div>
      </section>
      {await FeatureRail()}
      <BoardPickerSection
        level="ks3"
        boards={KS3_BOARDS}
        sectionId="ks3-boards"
        kicker={copy.ks3Kicker}
        heading={copy.ks3Heading}
        subheading={copy.ks3Subheading}
        showHelpLink={false}
        headingLevel="h2"
        showDivider
      />
      <BoardPickerSection
        level="gcse"
        boards={GCSE_BOARDS}
        sectionId="gcse-boards"
        kicker={copy.gcseKicker}
        heading={copy.gcseHeading}
        subheading={copy.gcseSubheading}
        showHelpLink={false}
        headingLevel="h2"
        showDivider
      />
      <BoardPickerSection
        level="igcse"
        boards={IGCSE_BOARDS}
        sectionId="igcse-boards"
        heading={copy.igcseHeading}
        subheading={copy.igcseSubheading}
        showHelpLink
        showDivider
      />
      <div className="mx-auto w-full max-w-5xl px-4 pb-16 sm:px-6">
        <GeoFaq faqs={GCSE_BOARD_FAQS} heading={copy.faqHeading} />
      </div>

      {/* 2. Built for students, teachers and schools */}
      <AudienceSection />

      {/* 3. School platform section */}
      <SchoolPlatformSection />

      {/* 4. Key benefits */}
      <KeyBenefitsSection />

      {/* 5 + 6. AI-assisted marking + analytics/intervention */}
      <CapabilitiesSection />

      {/* 7. EAL support */}
      <EalSection />

      {/* 7.5 Demo showcase */}
      <DemoShowcase />

      {/* 8. Founder school pilot CTA */}
      <PilotCtaSection />

      {/* 9. Pricing preview */}
      <PricingPreviewSection />

      {/* 10. FAQ */}
      <section aria-labelledby="home-faq-heading" className="border-t border-border/60">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
          <h2
            id="home-faq-heading"
            className="mb-8 text-center font-serif text-3xl font-semibold tracking-tight text-foreground"
          >
            Questions from school leaders
          </h2>
          <SchoolFAQ />
        </div>
      </section>

      {/* 11. Final CTA */}
      <FinalCtaSection />
    </main>
  )
}

/* ───────────────────── Institutional sections ───────────────────── */

function HomeHero() {
  return (
    <section className="relative overflow-hidden border-b border-border/60">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary/5 blur-3xl"
      />
      <div className="relative mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 sm:py-28">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">
          GCSE, IGCSE &amp; KS3 English revision
        </p>
        <h1 className="mx-auto mt-5 max-w-3xl font-serif text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl md:text-6xl">
          Revise GCSE and IGCSE English, marked by AI against the real mark scheme
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Practice papers, model answers and instant feedback on your essays, aligned to your exam
          board: AQA, Edexcel, OCR, Eduqas and Cambridge IGCSE. Free to start, built for students
          and parents, and trusted by schools.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button size="lg" className="h-12 px-7 text-base" render={<Link href="#gcse-boards" />}>
            Choose your exam board
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="h-12 px-7 text-base"
            render={<Link href="/schools" />}
          >
            For schools and teachers
          </Button>
        </div>
        <p className="mx-auto mt-8 max-w-xl text-xs leading-relaxed text-muted-foreground">
          English Language, Literature and EAL. KS3 to A-Level, aligned to your specification.
        </p>
      </div>
    </section>
  )
}

function AudienceSection() {
  const cards = [
    {
      icon: GraduationCap,
      title: 'Students',
      body: 'Structured practice, essay feedback and revision aligned to the specification their school teaches.',
      href: '/students',
      cta: 'For students',
    },
    {
      icon: Users2,
      title: 'Teachers',
      body: 'AI-assisted feedback, homework setting and clearer insight into class weaknesses - without adding workload.',
      href: '/teachers',
      cta: 'For teachers',
    },
    {
      icon: Building2,
      title: 'Schools',
      body: 'Department-wide assessment, intervention insight and reporting that leaders can act on.',
      href: '/schools',
      cta: 'For schools',
    },
  ]
  return (
    <section
      aria-labelledby="audience-heading"
      className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20"
    >
      <div className="text-center">
        <h2
          id="audience-heading"
          className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
        >
          Built for students, teachers and schools
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
          One platform that supports the whole English department - from individual practice to
          department-wide intelligence.
        </p>
      </div>
      <div className="mt-10 grid gap-5 sm:grid-cols-3">
        {cards.map(({ icon: Icon, title, body, href, cta }) => (
          <Card key={title} className="flex h-full flex-col p-6 border-border/50">
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="font-serif text-xl font-semibold text-foreground">{title}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{body}</p>
            <Link
              href={href}
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
            >
              {cta} <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </Card>
        ))}
      </div>
    </section>
  )
}

function SchoolPlatformSection() {
  return (
    <section aria-labelledby="platform-heading" className="border-y border-border/60 bg-muted/30">
      <div className="mx-auto max-w-5xl px-4 py-16 text-center sm:px-6 sm:py-20">
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-primary">
          School infrastructure for English departments
        </p>
        <h2
          id="platform-heading"
          className="mx-auto mt-4 max-w-3xl font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
        >
          From revision support to department-wide English intelligence
        </h2>
        <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted-foreground">
          The English Hub is designed to become embedded in how an English department works -
          assessment, feedback, intervention and reporting in one place, supporting teacher
          judgement rather than replacing it.
        </p>
      </div>
    </section>
  )
}

function KeyBenefitsSection() {
  return (
    <section
      aria-labelledby="benefits-heading"
      className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20"
    >
      <h2
        id="benefits-heading"
        className="text-center font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
      >
        What it helps schools do
      </h2>
      <div className="mt-10">
        <BenefitGrid
          items={[
            {
              icon: Clock,
              title: 'Reduce teacher workload',
              body: 'Reduce repetitive marking workload so teachers can focus more time on teaching.',
            },
            {
              icon: Eye,
              title: 'Improve intervention visibility',
              body: 'Identify students who may need support earlier, before gaps widen.',
            },
            {
              icon: Languages,
              title: 'Support EAL learners',
              body: 'Structured practice designed to build EAL learners’ confidence in English.',
            },
            {
              icon: Target,
              title: 'Strengthen exam readiness',
              body: 'Specification-aligned practice across English Language and Literature.',
            },
            {
              icon: FileText,
              title: 'Generate clearer student reports',
              body: 'Turn student activity into clearer, shareable progress summaries.',
            },
            {
              icon: LineChart,
              title: 'Track progress across cohorts',
              body: 'Give leaders clearer visibility across classes and year groups.',
            },
          ]}
        />
      </div>
    </section>
  )
}

function CapabilitiesSection() {
  return (
    <section
      aria-labelledby="capabilities-heading"
      className="border-y border-border/60 bg-muted/30"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="text-center">
          <h2
            id="capabilities-heading"
            className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            AI-assisted marking, analytics and intervention
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Designed to support teacher judgement and surface where attention is needed - not to
            replace professional assessment.
          </p>
        </div>
        <div className="mt-10">
          <FeatureGrid
            items={[
              {
                icon: Brain,
                title: 'AI-assisted marking & feedback',
                body: 'Students receive structured, criteria-referenced feedback teachers can review and build on.',
              },
              {
                icon: LineChart,
                title: 'Class & year-group analytics',
                body: 'See patterns across cohorts and where the department should focus next.',
              },
              {
                icon: Eye,
                title: 'Intervention insights',
                body: 'Surface students who may need support earlier in the term.',
              },
              {
                icon: ClipboardCheck,
                title: 'Homework & worksheet support',
                body: 'Set practice and generate resources aligned to the specification.',
              },
              {
                icon: FileText,
                title: 'Student reports',
                body: 'Clearer progress summaries for parents, reviews and leadership.',
              },
              {
                icon: Layers,
                title: 'Reading & comprehension support',
                body: 'Structured comprehension and reading practice across key stages.',
              },
            ]}
          />
        </div>
      </div>
    </section>
  )
}

function EalSection() {
  return (
    <section
      aria-labelledby="eal-heading"
      className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20"
    >
      <div className="rounded-2xl border border-border/60 bg-card p-8 sm:p-10">
        <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Languages className="h-5 w-5" />
        </div>
        <h2
          id="eal-heading"
          className="mt-5 font-serif text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
        >
          Structured English support for EAL learners
        </h2>
        <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">
          A growing priority for international and GCC schools. The English Hub is built to help EAL
          learners develop vocabulary, reading fluency, comprehension and writing confidence, with
          teacher visibility over progress and differentiated support.
        </p>
        <Button variant="outline" size="lg" className="mt-6 h-11" render={<Link href="/eal" />}>
          Explore EAL support
        </Button>
      </div>
    </section>
  )
}

function PilotCtaSection() {
  return (
    <section className="border-y border-border/60 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-20">
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-primary-foreground/70">
          Founder School Programme
        </p>
        <h2 className="mx-auto mt-4 max-w-2xl font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
          Start a 90-day Founder School Pilot
        </h2>
        <p className="mx-auto mt-4 max-w-xl leading-relaxed text-primary-foreground/80">
          Most schools begin with a structured one-term pilot focused on one year group or the
          English department. The pilot is designed to prove value before wider rollout.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
            size="lg"
            variant="secondary"
            className="h-12 px-7 text-base"
            render={<Link href="/school-pilot" />}
          >
            Book a School Pilot
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="h-12 border-primary-foreground/30 px-7 text-base text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            render={<Link href="/schools" />}
          >
            Explore School Deployment
          </Button>
        </div>
      </div>
    </section>
  )
}

function PricingPreviewSection() {
  return (
    <section
      aria-labelledby="pricing-preview-heading"
      className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20"
    >
      <div className="text-center">
        <h2
          id="pricing-preview-heading"
          className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
        >
          Pricing
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
          Individual access for learners and teachers, and structured pilots and annual deployment
          for schools.
        </p>
      </div>
      <div className="mt-10 grid gap-5 sm:grid-cols-3">
        <Card className="p-6 border-border/50">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
            Student
          </p>
          <p className="mt-2 font-serif text-2xl font-semibold text-foreground">
            {PRICING_DISPLAY.studentMonthly}
          </p>
          <p className="mt-2 text-sm text-muted-foreground">Individual learner access.</p>
        </Card>
        <Card className="p-6 border-border/50">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
            Teacher
          </p>
          <p className="mt-2 font-serif text-2xl font-semibold text-foreground">
            {PRICING_DISPLAY.teacherMonthly}
          </p>
          <p className="mt-2 text-sm text-muted-foreground">Teacher tools and classroom support.</p>
        </Card>
        <Card className="p-6 border-primary/40 ring-1 ring-primary/15">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
            Schools
          </p>
          <p className="mt-2 font-serif text-2xl font-semibold text-foreground">
            Pilots {PRICING_DISPLAY.pilotFrom}
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Annual deployment {PRICING_DISPLAY.annualSmallFrom}.
          </p>
        </Card>
      </div>
      <div className="mt-8 text-center">
        <Button size="lg" className="h-12" render={<Link href="/pricing" />}>
          Request School Pricing
        </Button>
        <p className="mx-auto mt-4 max-w-xl text-xs text-muted-foreground">
          {PRICING_DISPLAY.schoolPricingCaveat}
        </p>
      </div>
    </section>
  )
}

function FinalCtaSection() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6">
      <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        Discuss your English department&rsquo;s needs
      </h2>
      <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
        Talk to us about a pilot, an annual deployment, or how The English Hub could support your
        department.
      </p>
      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Button size="lg" className="h-12 px-7 text-base" render={<Link href="/school-pilot" />}>
          Book a School Pilot
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="h-12 px-7 text-base"
          render={<Link href="/contact" />}
        >
          Discuss a School Rollout
        </Button>
      </div>
    </section>
  )
}

/* ───────────────────── Foundation / bilingual rail ───────────────────── */

// KS3 + EAL get a top-of-page rail with full-width cards. KS3 hits via
// `?setBoard=ks3` so the middleware writes the board cookie and the
// landing page loads the KS3-gated hub. EAL is its own route - no board
// cookie change, because EAL is a learning track that runs alongside
// any board choice.
async function FeatureRail() {
  const c = {
    kicker: await t('homepage.rail.kicker'),
    heading: await t('homepage.rail.heading'),
    intro: await t('homepage.rail.intro'),
    ks3Badge: await t('homepage.rail.ks3.badge'),
    ks3Title: await t('homepage.rail.ks3.title'),
    ks3Subtitle: await t('homepage.rail.ks3.subtitle'),
    ks3Body: await t('homepage.rail.ks3.body'),
    ks3Cta: await t('homepage.rail.ks3.cta'),
    ealBadge: await t('homepage.rail.eal.badge'),
    ealTitle: await t('homepage.rail.eal.title'),
    ealSubtitle: await t('homepage.rail.eal.subtitle'),
    ealBody: await t('homepage.rail.eal.body'),
    ealCta: await t('homepage.rail.eal.cta'),
  }
  return (
    <section aria-labelledby="feature-rail-heading" className="bg-background pb-10 sm:pb-14">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 pt-12 sm:pt-16">
        <div className="text-center mb-8 sm:mb-10">
          <p className="font-mono text-[11px] tracking-[0.14em] uppercase mb-3 text-violet-600 dark:text-violet-300">
            {c.kicker}
          </p>
          <h2
            id="feature-rail-heading"
            className="font-heading text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-foreground leading-tight"
          >
            {c.heading}
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-sm sm:text-base text-muted-foreground leading-relaxed">
            {c.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          <Link
            href="/revision?setBoard=ks3"
            className="group relative flex flex-col gap-4 rounded-2xl border border-violet-500/30 bg-violet-500/[0.06] p-6 sm:p-7 transition-all hover:border-violet-500/60 hover:bg-violet-500/[0.10] hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <span
              aria-hidden="true"
              className="absolute right-4 top-4 inline-flex items-center rounded-full border border-violet-500/40 px-2 py-0.5 font-mono text-[10px] tracking-[0.12em] uppercase text-violet-600 dark:text-violet-300"
            >
              {c.ks3Badge}
            </span>
            <div className="flex items-center gap-4 pr-20">
              <span
                aria-hidden="true"
                className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full ring-1 bg-violet-500/15 text-violet-600 dark:text-violet-300 ring-violet-500/30 font-mono text-sm font-bold tracking-wide"
              >
                KS3
              </span>
              <div>
                <h3 className="font-heading text-xl sm:text-2xl font-semibold text-foreground leading-tight">
                  {c.ks3Title}
                </h3>
                <p className="text-xs uppercase tracking-wider text-violet-600/80 dark:text-violet-300/80 mt-1">
                  {c.ks3Subtitle}
                </p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{c.ks3Body}</p>
            <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-violet-600 dark:text-violet-300 group-hover:text-violet-700 dark:group-hover:text-violet-200 transition-colors">
              {c.ks3Cta} <span aria-hidden="true">&rarr;</span>
            </span>
          </Link>

          <Link
            href="/eal"
            className="group relative flex flex-col gap-4 rounded-2xl border border-teal-500/30 bg-teal-500/[0.06] p-6 sm:p-7 transition-all hover:border-teal-500/60 hover:bg-teal-500/[0.10] hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <span
              aria-hidden="true"
              className="absolute right-4 top-4 inline-flex items-center rounded-full border border-teal-500/40 px-2 py-0.5 font-mono text-[10px] tracking-[0.12em] uppercase text-teal-600 dark:text-teal-300"
            >
              {c.ealBadge}
            </span>
            <div className="flex items-center gap-4 pr-20">
              <span
                aria-hidden="true"
                className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full ring-1 bg-teal-500/15 text-teal-600 dark:text-teal-300 ring-teal-500/30 font-mono text-sm font-bold tracking-wide"
              >
                EAL
              </span>
              <div>
                <h3 className="font-heading text-xl sm:text-2xl font-semibold text-foreground leading-tight">
                  {c.ealTitle}
                </h3>
                <p className="text-xs uppercase tracking-wider text-teal-600/80 dark:text-teal-300/80 mt-1">
                  {c.ealSubtitle}
                </p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{c.ealBody}</p>
            <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-teal-600 dark:text-teal-300 group-hover:text-teal-700 dark:group-hover:text-teal-200 transition-colors">
              {c.ealCta} <span aria-hidden="true">&rarr;</span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ───────────────────── Board picker (the main event) ───────────────────── */

type BoardLevel = 'gcse' | 'igcse' | 'ks3'

type Board = {
  name: string
  initials: string
  href: string
  // i18n key (homepage.board.*.blurb) resolved server-side via t().
  blurbKey: string
  level: BoardLevel
  // Tailwind classes for the initials disc.
  discClass: string
}

// 02 May 2026 - every homepage card sends the user into their Your Hub
// at /revision with the board cookie set. The middleware validates
// `?setBoard=<id>` against BOARDS, writes the cookie, and 307-redirects
// to clean /revision - which then renders the personalised hub
// (Poetry, Set Texts, Mock Papers, Practice, Progress, etc.) keyed off
// that cookie. See business-docs/BOARD_NAVIGATION_MODEL.md.
const GCSE_BOARDS: Board[] = [
  {
    name: 'AQA',
    initials: 'AQA',
    href: '/revision?setBoard=aqa',
    blurbKey: 'homepage.board.aqa.blurb',
    level: 'gcse',
    discClass: 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-300 ring-emerald-500/30',
  },
  {
    name: 'Pearson Edexcel GCSE',
    initials: 'EDX',
    href: '/revision?setBoard=edexcel',
    blurbKey: 'homepage.board.edexcel.blurb',
    level: 'gcse',
    discClass: 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-300 ring-emerald-500/30',
  },
  {
    name: 'OCR',
    initials: 'OCR',
    href: '/revision?setBoard=ocr',
    blurbKey: 'homepage.board.ocr.blurb',
    level: 'gcse',
    discClass: 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-300 ring-emerald-500/30',
  },
  {
    name: 'WJEC Eduqas',
    initials: 'WJEC',
    href: '/revision?setBoard=eduqas',
    blurbKey: 'homepage.board.eduqas.blurb',
    level: 'gcse',
    discClass: 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-300 ring-emerald-500/30',
  },
]

// 2026-05-20: KS3 is now ALSO surfaced as its own board picker section
// (in addition to the FeatureRail entry above). Younger learners and
// parents were missing KS3 in the main "Choose your board" grid; the
// rail entry alone was not discoverable enough below the fold.
const KS3_BOARDS: Board[] = [
  {
    name: 'KS3 English (Years 7-9)',
    initials: 'KS3',
    href: '/revision?setBoard=ks3',
    blurbKey: 'homepage.board.ks3.blurb',
    level: 'ks3',
    discClass: 'bg-violet-500/15 text-violet-600 dark:text-violet-300 ring-violet-500/30',
  },
]

const IGCSE_BOARDS: Board[] = [
  {
    name: 'Cambridge IGCSE (CIE 0500 / 0990)',
    initials: 'CIE',
    href: '/revision?setBoard=cambridge-0500',
    blurbKey: 'homepage.board.cambridge.blurb',
    level: 'igcse',
    discClass: 'bg-orange-500/15 text-orange-700 dark:text-orange-300 ring-orange-500/30',
  },
  {
    name: 'Pearson Edexcel IGCSE Literature (4ET1)',
    initials: 'iEDX-Lit',
    href: '/revision?setBoard=edexcel-igcse',
    blurbKey: 'homepage.board.edexcel_igcse_lit.blurb',
    level: 'igcse',
    discClass: 'bg-orange-500/15 text-orange-700 dark:text-orange-300 ring-orange-500/30',
  },
  {
    name: 'Pearson Edexcel IGCSE Language A (4EA1)',
    initials: 'iEDX-Lang',
    href: '/revision?setBoard=edexcel-igcse-lang',
    blurbKey: 'homepage.board.edexcel_igcse_lang.blurb',
    level: 'igcse',
    discClass: 'bg-orange-500/15 text-orange-700 dark:text-orange-300 ring-orange-500/30',
  },
]

type BoardPickerSectionProps = {
  level: BoardLevel
  boards: Board[]
  sectionId: string
  heading: string
  subheading: string
  kicker?: string
  showHelpLink?: boolean
  showDivider?: boolean
  headingLevel?: 'h1' | 'h2'
}

async function BoardPickerSection({
  level,
  boards,
  sectionId,
  heading,
  subheading,
  kicker,
  showHelpLink = false,
  showDivider = false,
  headingLevel = 'h2',
}: BoardPickerSectionProps) {
  const headingId = `${sectionId}-heading`
  const isGcse = level === 'gcse'
  const isKs3 = level === 'ks3'
  const HeadingTag = headingLevel
  // Resolve i18n strings up-front so JSX stays clean. Board blurbs are
  // keyed per board (homepage.board.*.blurb); shared labels (CTA, help
  // line) resolve once for the whole section.
  const blurbs = await Promise.all(boards.map((b) => t(b.blurbKey)))
  const ctaKs3 = await t('homepage.board.cta.ks3')
  const ctaBoard = await t('homepage.board.cta.board')
  const helpText = await t('homepage.board.help.text')
  const helpLink = await t('homepage.board.help.link')
  // EAL is a cross-cutting concern: every board picker card shows that
  // EAL learner support is included so EAL learners do not feel they
  // have to choose between "their board" and "an EAL track".
  const ealSupportedText = await t('homepage.board.eal_supported')
  const ealSupportedAria = await t('homepage.board.eal_supported.aria')
  // Per-level palette. KS3 picks violet to keep visual separation from
  // GCSE (emerald) and IGCSE (clay → orange). Each accent uses the
  // light/dark dual shade so the tint is legible on the cream :root
  // theme AND the ink .dark theme. The kicker line uses the same tint
  // so all three sections feel like siblings.
  const kickerClass = isGcse
    ? 'text-emerald-600 dark:text-emerald-300'
    : isKs3
      ? 'text-violet-600 dark:text-violet-300'
      : 'text-orange-700 dark:text-orange-300'
  const helpLinkClass = isKs3
    ? 'hover:text-violet-600 dark:hover:text-violet-300'
    : 'hover:text-orange-700 dark:hover:text-orange-300'

  return (
    <section
      aria-labelledby={headingId}
      className={`bg-background pb-14 sm:pb-20${showDivider ? ' border-t border-border/60' : ''}`}
    >
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 pt-12 sm:pt-16">
        <div className="text-center mb-10 sm:mb-12">
          {kicker ? (
            <p className={`font-mono text-[11px] tracking-[0.14em] uppercase mb-3 ${kickerClass}`}>
              {kicker}
            </p>
          ) : null}
          <HeadingTag
            id={headingId}
            className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-foreground leading-tight"
          >
            {heading}
          </HeadingTag>
          <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-muted-foreground leading-relaxed">
            {subheading}
          </p>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {boards.map((b, i) => (
            <li key={b.name}>
              <Link
                href={b.href}
                className={`group relative flex h-full flex-col gap-4 rounded-2xl border border-border/60 bg-card p-5 sm:p-6 transition-all hover:bg-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                  b.level === 'gcse'
                    ? 'hover:border-emerald-500/40 focus-visible:ring-emerald-500'
                    : b.level === 'ks3'
                      ? 'hover:border-violet-500/40 focus-visible:ring-violet-500'
                      : 'hover:border-orange-500/40 focus-visible:ring-orange-500'
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`absolute right-4 top-4 inline-flex items-center rounded-full border px-2 py-0.5 font-mono text-[10px] tracking-[0.12em] uppercase ${
                    b.level === 'gcse'
                      ? 'border-emerald-500/40 text-emerald-600 dark:text-emerald-300'
                      : b.level === 'ks3'
                        ? 'border-violet-500/40 text-violet-600 dark:text-violet-300'
                        : 'border-orange-500/40 text-orange-700 dark:text-orange-300'
                  }`}
                >
                  {b.level === 'gcse' ? 'GCSE' : b.level === 'ks3' ? 'KS3' : 'IGCSE'}
                </span>
                <div className="flex items-center gap-4 pr-16">
                  <span
                    aria-hidden="true"
                    className={`inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full ring-1 ${b.discClass} font-mono text-xs sm:text-sm font-bold tracking-wide`}
                  >
                    {b.initials}
                  </span>
                  <h3 className="font-heading text-lg sm:text-xl font-semibold text-foreground leading-tight">
                    {b.name}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{blurbs[i]}</p>
                {/* EAL support indicator - every board includes it. */}
                <span
                  aria-label={ealSupportedAria}
                  className="inline-flex items-center gap-1.5 text-[11px] font-medium text-muted-foreground"
                >
                  <Languages
                    aria-hidden="true"
                    className="h-3.5 w-3.5 text-teal-600 dark:text-teal-300"
                  />
                  {ealSupportedText}
                </span>
                <span
                  className={`mt-auto inline-flex items-center gap-1.5 text-sm font-medium transition-colors ${
                    b.level === 'gcse'
                      ? 'text-emerald-600 dark:text-emerald-300 group-hover:text-emerald-700 dark:group-hover:text-emerald-200'
                      : b.level === 'ks3'
                        ? 'text-violet-600 dark:text-violet-300 group-hover:text-violet-700 dark:group-hover:text-violet-200'
                        : 'text-orange-700 dark:text-orange-300 group-hover:text-orange-800 dark:group-hover:text-orange-200'
                  }`}
                >
                  {b.level === 'ks3' ? ctaKs3 : ctaBoard} <span aria-hidden="true">&rarr;</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>

        {showHelpLink ? (
          <p className="mt-8 text-center text-xs text-muted-foreground">
            {helpText}{' '}
            <Link href="/board-select" className={`underline underline-offset-4 ${helpLinkClass}`}>
              {helpLink}
            </Link>
          </p>
        ) : null}
      </div>
    </section>
  )
}

/*
 * 02 May 2026 - TryAFeatureSection / FEATURES dataset removed.
 *
 * The board picker is the only thing the homepage does now. The 3 demo
 * cards (AI feedback, mock papers, study plan) live inside Your Hub
 * (/revision) where they are gated to the user's chosen exam board, so
 * showing them on the unkeyed homepage was duplication that distracted
 * from the single decision visitors are here to make: pick your board.
 *
 * AnthologyPricing + FinalCTA were similarly removed; pricing surfaces
 * inside Your Hub on a per-board basis (different tiers per spec) and
 * is also reachable directly via /pricing for ad-landers.
 */
