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
  ChevronDown,
  Globe,
  Award,
  BookOpen,
  Compass,
} from 'lucide-react'
import { TrackEvent } from '@/components/analytics/TrackEvent'
import { GeoFaq, GCSE_BOARD_FAQS } from '@/components/seo/GeoFaq'
import { LanguageToggle } from '@/components/layout/language-toggle'
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
      {await HomeHero()}

      {/* ───── Students: choose your exam board (existing funnel preserved) ───── */}
      <section
        aria-labelledby="students-board-heading"
        className="border-t border-border/60 bg-muted/30"
      >
        <div className="mx-auto max-w-[1400px] px-4 pt-14 sm:px-6 sm:pt-20">
          <div className="text-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              {await t('home.students.eyebrow')}
            </p>
            <h2
              id="students-board-heading"
              className="mt-3 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
            >
              {await t('home.students.heading')}
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              {await t('home.students.body')}
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
      {await AudienceSection()}

      {/* 3. School platform section */}
      {await SchoolPlatformSection()}

      {/* 4. Key benefits */}
      {await KeyBenefitsSection()}

      {/* 5 + 6. AI-assisted marking + analytics/intervention */}
      {await CapabilitiesSection()}

      {/* 7. EAL support */}
      {await EalSection()}

      {/* 7.5 Demo showcase */}
      <DemoShowcase />

      {/* 8. Founder school pilot CTA */}
      {await PilotCtaSection()}

      {/* 9. Pricing preview */}
      {await PricingPreviewSection()}

      {/* 10. FAQ */}
      <section aria-labelledby="home-faq-heading" className="border-t border-border/60">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
          <h2
            id="home-faq-heading"
            className="mb-8 text-center font-serif text-3xl font-semibold tracking-tight text-foreground"
          >
            {await t('home.faq.school_leaders')}
          </h2>
          {/* emitJsonLd=false: the homepage's single FAQPage block is the
              consumer GeoFaq above (GCSE_BOARD_FAQS). Two FAQPage entities on
              one URL is invalid/duplicate structured data (was Google's "2
              invalid items" on the homepage), so this B2B block renders
              visibly but does not emit a second FAQPage. */}
          <SchoolFAQ emitJsonLd={false} />
        </div>
      </section>

      {/* 11. Final CTA */}
      {await FinalCtaSection()}
    </main>
  )
}

/* ───────────────────── Institutional sections ───────────────────── */

/**
 * Landing page hero — 2026-06-08 redesign per founder ask.
 *
 *   Headline: "Intelligent English Learning for Everyone".
 *   Underneath: 5 track buttons (IELTS, EAL, KS3, GCSE, IGCSE).
 *   GCSE + IGCSE expand to a board sub-selector via native <details>
 *   so no client-side state is needed and the hero stays a server
 *   component. Each board routes through /revision?setBoard=<id>
 *   so the middleware sets the cookie and lands the visitor in the
 *   live revision hub (the real "demo" experience).
 *   Language toggle is surfaced inline at the top of the hero so
 *   Arabic visitors can switch without scrolling to the header.
 *
 * Copy is hard-coded English literals so this commit can ship
 * standalone. Khaleeji Arabic translation can follow in a small
 * dictionary update without touching this file.
 */
async function HomeHero() {
  // 7-card "explore a demo" grid. The five learner tracks come first
  // (IELTS, EAL, KS3, GCSE, IGCSE — board pickers expand inline via
  // <details>) followed by the two audience demos (Teachers, Schools).
  // Every destination is a demo experience: /ielts and /eal are full
  // public hubs that ARE the demo, /demo/student is the student
  // dashboard demo (board context primed via ?setBoard=… so the
  // middleware sets the cookie before redirecting to the clean URL),
  // and /demo/teacher + /demo/school are the role-specific dashboard
  // demos shipped in the SEO wave 2 commit.
  const TRACKS: Array<{
    label: string
    sub: string
    href?: string
    icon: typeof Award
    accent: string
  }> = [
    {
      label: 'IELTS',
      sub: 'Academic English exam',
      href: '/ielts',
      icon: Award,
      accent:
        'from-violet-500/15 to-violet-500/5 ring-violet-500/25 text-violet-700 dark:text-violet-300',
    },
    {
      label: 'EAL',
      sub: 'English as Additional Language',
      href: '/eal',
      icon: Languages,
      accent: 'from-teal-500/15 to-teal-500/5 ring-teal-500/25 text-teal-700 dark:text-teal-300',
    },
    {
      label: 'KS3',
      sub: 'Years 7–9',
      href: '/demo/student?setBoard=ks3',
      icon: BookOpen,
      accent: 'from-clay-500/15 to-clay-500/5 ring-clay-500/25 text-clay-700 dark:text-clay-300',
    },
    {
      label: 'GCSE',
      sub: 'Pick your board',
      icon: Compass,
      accent:
        'from-emerald-500/15 to-emerald-500/5 ring-emerald-500/25 text-emerald-700 dark:text-emerald-300',
    },
    {
      label: 'IGCSE',
      sub: 'Pick your board',
      icon: Globe,
      accent:
        'from-ochre-500/15 to-ochre-500/5 ring-ochre-500/25 text-ochre-700 dark:text-ochre-300',
    },
    {
      label: 'Teachers',
      sub: 'AI marking & insight',
      href: '/demo/teacher',
      icon: Users2,
      accent: 'from-sage-500/15 to-sage-500/5 ring-sage-500/25 text-sage-700 dark:text-sage-300',
    },
    {
      label: 'Schools',
      sub: 'Department portal',
      href: '/demo/school',
      icon: Building2,
      accent: 'from-primary/15 to-primary/5 ring-primary/25 text-primary dark:text-primary',
    },
  ]

  // GCSE / IGCSE board pickers — clicking a board sets the board cookie
  // via the middleware then redirects to the clean /demo/student URL so
  // the visitor lands in the student demo dashboard with their board
  // context primed for the real product later.
  const GCSE_BOARDS = [
    { name: 'AQA', href: '/demo/student?setBoard=aqa' },
    { name: 'Pearson Edexcel', href: '/demo/student?setBoard=edexcel' },
    { name: 'OCR', href: '/demo/student?setBoard=ocr' },
    { name: 'WJEC Eduqas', href: '/demo/student?setBoard=eduqas' },
  ]
  const IGCSE_BOARDS = [
    { name: 'Cambridge IGCSE (0500 / 0990)', href: '/demo/student?setBoard=cambridge-0500' },
    { name: 'Pearson Edexcel IGCSE Literature', href: '/demo/student?setBoard=edexcel-igcse' },
    { name: 'Pearson Edexcel IGCSE Language A', href: '/demo/student?setBoard=edexcel-igcse-lang' },
  ]

  return (
    <section className="relative overflow-hidden border-b border-border/60">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary/5 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-40 h-72 w-72 rounded-full bg-clay-500/[0.06] blur-3xl"
      />
      <div className="relative mx-auto max-w-5xl px-4 py-16 text-center sm:px-6 sm:py-24">
        {/* Language toggle, surfaced in-hero so visitors can switch
            without scrolling to the header. */}
        <div className="mb-8 flex items-center justify-center">
          <LanguageToggle />
        </div>

        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">
          The English Hub
        </p>
        <h1 className="mx-auto mt-5 max-w-3xl font-serif text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl">
          Intelligent English Learning for Everyone
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Personalised, exam-aligned and AI-assisted — from Years 7–9 through GCSE, IGCSE and IELTS,
          and structured English support for EAL learners. Pick your track to explore the live demo.
        </p>

        {/* Seven primary demo buttons — five learner tracks (IELTS · EAL ·
            KS3 · GCSE · IGCSE) followed by two audience demos
            (Teachers, Schools). Responsive grid: 2-col on mobile,
            4-col at md, 7-col at lg so they sit in a single row on
            laptop+ widths. */}
        <div className="mx-auto mt-10 grid w-full max-w-5xl gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
          {TRACKS.map((track) => {
            const Icon = track.icon
            const inner = (
              <span className="flex flex-col items-center gap-2 px-4 py-4">
                <span
                  className={`inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br ring-1 ${track.accent}`}
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="text-sm font-semibold text-foreground">{track.label}</span>
                <span className="text-[11px] text-muted-foreground">{track.sub}</span>
              </span>
            )
            if (track.href) {
              return (
                <Link
                  key={track.label}
                  href={track.href}
                  aria-label={`Explore ${track.label} — ${track.sub}`}
                  className="group rounded-2xl border border-border/60 bg-card text-center transition-all hover:border-primary/40 hover:shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  {inner}
                </Link>
              )
            }
            // Expandable GCSE / IGCSE tile — native <details> so no
            // client-side state is required and the section ships from
            // the server component.
            const boards = track.label === 'GCSE' ? GCSE_BOARDS : IGCSE_BOARDS
            return (
              <details
                key={track.label}
                className="group rounded-2xl border border-border/60 bg-card text-center transition-all hover:border-primary/40 hover:shadow-sm sm:col-span-1 [&[open]>summary>span.chev]:rotate-180"
              >
                <summary className="cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  {inner}
                  <span className="chev mt-1 inline-flex items-center justify-center text-muted-foreground transition-transform duration-200">
                    <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                </summary>
                <ul className="space-y-1 border-t border-border/40 px-2 py-3 text-left">
                  {boards.map((b) => (
                    <li key={b.href}>
                      <Link
                        href={b.href}
                        className="flex items-center justify-between gap-2 rounded-lg px-2.5 py-1.5 text-xs text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                      >
                        <span>{b.name}</span>
                        <ArrowRight className="h-3 w-3 shrink-0" aria-hidden="true" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
            )
          })}
        </div>

        {/* Single high-intent CTA below the demo grid — the Schools card
            in the grid covers the audience entry point; the school
            pilot is kept as a distinct conversion path because it is
            the primary Qatar Expo / GCC school sales motion. */}
        <div className="mt-9 flex items-center justify-center">
          <Button
            variant="outline"
            size="lg"
            className="h-11 px-6"
            render={<Link href="/school-pilot" />}
          >
            Book a school pilot
            <ArrowRight className="ml-1 h-3.5 w-3.5" aria-hidden="true" />
          </Button>
        </div>

        <p className="mx-auto mt-8 max-w-xl text-xs leading-relaxed text-muted-foreground">
          Personalised practice + AI-assisted feedback aligned to AQA, Edexcel, OCR, Eduqas,
          Cambridge IGCSE and Pearson Edexcel International specifications.
        </p>
      </div>
    </section>
  )
}

async function AudienceSection() {
  const cards = [
    {
      icon: GraduationCap,
      title: await t('home.audience.students.title'),
      body: await t('home.audience.students.body'),
      href: '/students',
      cta: await t('home.audience.students.cta'),
    },
    {
      icon: Users2,
      title: await t('home.audience.teachers.title'),
      body: await t('home.audience.teachers.body'),
      href: '/teachers',
      cta: await t('home.audience.teachers.cta'),
    },
    {
      icon: Building2,
      title: await t('home.audience.schools.title'),
      body: await t('home.audience.schools.body'),
      href: '/schools',
      cta: await t('home.audience.schools.cta'),
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
          {await t('home.audience.heading')}
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
          {await t('home.audience.body')}
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

async function SchoolPlatformSection() {
  return (
    <section aria-labelledby="platform-heading" className="border-y border-border/60 bg-muted/30">
      <div className="mx-auto max-w-5xl px-4 py-16 text-center sm:px-6 sm:py-20">
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-primary">
          {await t('home.platform.eyebrow')}
        </p>
        <h2
          id="platform-heading"
          className="mx-auto mt-4 max-w-3xl font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
        >
          {await t('home.platform.heading')}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted-foreground">
          {await t('home.platform.body')}
        </p>
      </div>
    </section>
  )
}

async function KeyBenefitsSection() {
  return (
    <section
      aria-labelledby="benefits-heading"
      className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20"
    >
      <h2
        id="benefits-heading"
        className="text-center font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
      >
        {await t('home.benefits.heading')}
      </h2>
      <div className="mt-10">
        <BenefitGrid
          items={[
            {
              icon: Clock,
              title: await t('home.benefits.workload.title'),
              body: await t('home.benefits.workload.body'),
            },
            {
              icon: Eye,
              title: await t('home.benefits.intervention.title'),
              body: await t('home.benefits.intervention.body'),
            },
            {
              icon: Languages,
              title: await t('home.benefits.eal.title'),
              body: await t('home.benefits.eal.body'),
            },
            {
              icon: Target,
              title: await t('home.benefits.readiness.title'),
              body: await t('home.benefits.readiness.body'),
            },
            {
              icon: FileText,
              title: await t('home.benefits.reports.title'),
              body: await t('home.benefits.reports.body'),
            },
            {
              icon: LineChart,
              title: await t('home.benefits.cohorts.title'),
              body: await t('home.benefits.cohorts.body'),
            },
          ]}
        />
      </div>
    </section>
  )
}

async function CapabilitiesSection() {
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
            {await t('home.capabilities.heading')}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            {await t('home.capabilities.body')}
          </p>
        </div>
        <div className="mt-10">
          <FeatureGrid
            items={[
              {
                icon: Brain,
                title: await t('home.capabilities.feedback.title'),
                body: await t('home.capabilities.feedback.body'),
              },
              {
                icon: LineChart,
                title: await t('home.capabilities.analytics.title'),
                body: await t('home.capabilities.analytics.body'),
              },
              {
                icon: Eye,
                title: await t('home.capabilities.insights.title'),
                body: await t('home.capabilities.insights.body'),
              },
              {
                icon: ClipboardCheck,
                title: await t('home.capabilities.homework.title'),
                body: await t('home.capabilities.homework.body'),
              },
              {
                icon: FileText,
                title: await t('home.capabilities.reports.title'),
                body: await t('home.capabilities.reports.body'),
              },
              {
                icon: Layers,
                title: await t('home.capabilities.reading.title'),
                body: await t('home.capabilities.reading.body'),
              },
            ]}
          />
        </div>
      </div>
    </section>
  )
}

async function EalSection() {
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
          {await t('home.eal.heading')}
        </h2>
        <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">
          {await t('home.eal.body')}
        </p>
        <Button variant="outline" size="lg" className="mt-6 h-11" render={<Link href="/eal" />}>
          {await t('home.eal.cta')}
        </Button>
      </div>
    </section>
  )
}

async function PilotCtaSection() {
  return (
    <section className="border-y border-border/60 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-20">
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-primary-foreground/70">
          {await t('home.pilot.eyebrow')}
        </p>
        <h2 className="mx-auto mt-4 max-w-2xl font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
          {await t('home.pilot.heading')}
        </h2>
        <p className="mx-auto mt-4 max-w-xl leading-relaxed text-primary-foreground/80">
          {await t('home.pilot.body')}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
            size="lg"
            variant="secondary"
            className="h-12 px-7 text-base"
            render={<Link href="/school-pilot" />}
          >
            {await t('home.pilot.cta_book')}
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="h-12 border-primary-foreground/30 px-7 text-base text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            render={<Link href="/schools" />}
          >
            {await t('home.pilot.cta_deploy')}
          </Button>
        </div>
      </div>
    </section>
  )
}

async function PricingPreviewSection() {
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
          {await t('home.pricing.heading')}
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
          {await t('home.pricing.body')}
        </p>
      </div>
      <div className="mt-10 grid gap-5 sm:grid-cols-3">
        <Card className="p-6 border-border/50">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
            {await t('home.pricing.student.label')}
          </p>
          <p className="mt-2 font-serif text-2xl font-semibold text-foreground">
            {PRICING_DISPLAY.studentMonthly}
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            {await t('home.pricing.student.body')}
          </p>
        </Card>
        <Card className="p-6 border-border/50">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
            {await t('home.pricing.teacher.label')}
          </p>
          <p className="mt-2 font-serif text-2xl font-semibold text-foreground">
            {PRICING_DISPLAY.teacherMonthly}
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            {await t('home.pricing.teacher.body')}
          </p>
        </Card>
        <Card className="p-6 border-primary/40 ring-1 ring-primary/15">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
            {await t('home.pricing.schools.label')}
          </p>
          <p className="mt-2 font-serif text-2xl font-semibold text-foreground">
            {await t('home.pricing.schools.pilots_prefix')} {PRICING_DISPLAY.pilotFrom}
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            {await t('home.pricing.schools.annual_prefix')} {PRICING_DISPLAY.annualSmallFrom}.
          </p>
        </Card>
      </div>
      <div className="mt-8 text-center">
        <Button size="lg" className="h-12" render={<Link href="/pricing" />}>
          {await t('home.pricing.cta')}
        </Button>
        <p className="mx-auto mt-4 max-w-xl text-xs text-muted-foreground">
          {PRICING_DISPLAY.schoolPricingCaveat}
        </p>
      </div>
    </section>
  )
}

async function FinalCtaSection() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6">
      <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {await t('home.final.heading')}
      </h2>
      <p className="mx-auto mt-3 max-w-xl text-muted-foreground">{await t('home.final.body')}</p>
      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Button size="lg" className="h-12 px-7 text-base" render={<Link href="/school-pilot" />}>
          {await t('home.final.cta_book')}
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="h-12 px-7 text-base"
          render={<Link href="/contact" />}
        >
          {await t('home.final.cta_rollout')}
        </Button>
      </div>
    </section>
  )
}

/* ───────────────────── Additional tracks rail (IELTS + EAL) ───────────────────── */

// IELTS + EAL get a top-of-page rail with full-width cards. Both are
// their own routes (/ielts, /eal) and run alongside any GCSE / IGCSE
// board choice - they do not set a board cookie. KS3 lives in the
// level/board picker grids below (KS3 / GCSE / IGCSE), not here, so the
// KS3 choice is not duplicated.
async function FeatureRail() {
  const c = {
    kicker: await t('homepage.rail.kicker'),
    heading: await t('homepage.rail.heading'),
    intro: await t('homepage.rail.intro'),
    ieltsBadge: await t('homepage.rail.ielts.badge'),
    ieltsTitle: await t('homepage.rail.ielts.title'),
    ieltsSubtitle: await t('homepage.rail.ielts.subtitle'),
    ieltsBody: await t('homepage.rail.ielts.body'),
    ieltsCta: await t('homepage.rail.ielts.cta'),
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
            href="/ielts"
            className="group relative flex flex-col gap-4 rounded-2xl border border-sky-500/30 bg-sky-500/[0.06] p-6 sm:p-7 transition-all hover:border-sky-500/60 hover:bg-sky-500/[0.10] hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <span
              aria-hidden="true"
              className="absolute right-4 top-4 inline-flex items-center rounded-full border border-sky-500/40 px-2 py-0.5 font-mono text-[10px] tracking-[0.12em] uppercase text-sky-600 dark:text-sky-300"
            >
              {c.ieltsBadge}
            </span>
            <div className="flex items-center gap-4 pr-20">
              <span
                aria-hidden="true"
                className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full ring-1 bg-sky-500/15 text-sky-600 dark:text-sky-300 ring-sky-500/30 font-mono text-[11px] font-bold tracking-wide"
              >
                IELTS
              </span>
              <div>
                <h3 className="font-heading text-xl sm:text-2xl font-semibold text-foreground leading-tight">
                  {c.ieltsTitle}
                </h3>
                <p className="text-xs uppercase tracking-wider text-sky-600/80 dark:text-sky-300/80 mt-1">
                  {c.ieltsSubtitle}
                </p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{c.ieltsBody}</p>
            <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-sky-600 dark:text-sky-300 group-hover:text-sky-700 dark:group-hover:text-sky-200 transition-colors">
              {c.ieltsCta} <span aria-hidden="true">&rarr;</span>
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
