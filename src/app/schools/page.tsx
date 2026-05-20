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

const OG =
  '/api/og?title=English+department+intelligence,+assessment+and+intervention&subtitle=A+school-ready+platform+for+modern+English+departments'

export const metadata: Metadata = {
  title: 'The English Hub for Schools — assessment, intervention & reporting',
  description:
    'A school-ready English platform helping teachers save time, students improve faster and leaders understand where support is needed across English Language, Literature and EAL.',
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
    title: 'The English Hub for Schools',
    description: 'English department intelligence, assessment and intervention in one platform.',
    url: 'https://theenglishhub.app/schools',
    images: [{ url: OG, width: 1200, height: 630, alt: 'The English Hub for Schools' }],
  },
  twitter: { card: 'summary_large_image', images: [OG] },
}

/* Problem cards — each is a distinct concern, given its own accent border
   and icon to break the monotony of identical bullets. */
const PROBLEMS = [
  {
    icon: Clock,
    accent: 'border-l-clay-500/50',
    body: 'Marking workload is heavy and repetitive, eating into planning and teaching time.',
  },
  {
    icon: Eye,
    accent: 'border-l-ochre-500/50',
    body: 'Student practice is inconsistent and hard to monitor across classes.',
  },
  {
    icon: LineChart,
    accent: 'border-l-sage-500/50',
    body: 'Leaders have limited visibility of progress across year groups.',
  },
  {
    icon: AlertTriangle,
    accent: 'border-l-clay-500/50',
    body: 'Students who need support are often identified too late.',
  },
  {
    icon: Languages,
    accent: 'border-l-teal-500/50',
    body: 'EAL learners need structured support that is hard to resource at scale.',
  },
  {
    icon: FileText,
    accent: 'border-l-ochre-500/50',
    body: 'Reporting is time-consuming and pulls from scattered sources.',
  },
]

/* Aspirational/forward-looking lozenges for the hero stat strip. Qualitative
   only — no fabricated user numbers (brand-voice §9). */
const HERO_LOZENGES = [
  'English Language & Literature',
  'KS3 · GCSE · IGCSE · A-Level',
  'Designed for English departments',
]

/* Forward-looking, qualitative tiles. Real numbers stay out (brand-voice §9). */
const VALUE_TILES = [
  {
    label: 'All boards',
    headline: 'Multi-spec',
    body: 'AQA · Edexcel · OCR · Eduqas · Cambridge',
    icon: Layers,
    accent: 'teal' as const,
  },
  {
    label: 'EAL ready',
    headline: 'Differentiated',
    body: 'Differentiated practice for EAL learners',
    icon: Languages,
    accent: 'sage' as const,
  },
  {
    label: 'School-grade',
    headline: 'Institutional',
    body: 'Designed for English departments',
    icon: Building2,
    accent: 'ochre' as const,
  },
]

const DEMO_CARDS = [
  {
    href: '/demo/school',
    icon: LayoutDashboard,
    accent: 'border-l-teal-500/60',
    title: 'School dashboard',
    body: 'A leadership view of practice activity, intervention insights and department reporting.',
  },
  {
    href: '/demo/teacher',
    icon: ClipboardCheck,
    accent: 'border-l-sage-500/60',
    title: 'Teacher workspace',
    body: 'How a head of English sets practice, reviews marking and tracks class progress.',
  },
  {
    href: '/demo/student',
    icon: GraduationCap,
    accent: 'border-l-clay-500/60',
    title: 'Student experience',
    body: 'The practice, comprehension and feedback flow students see in the platform.',
  },
]

export default function SchoolsPage() {
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
            The English Hub for Schools
          </p>
          <h1 className="mx-auto mt-5 max-w-3xl font-serif text-4xl font-semibold leading-[1.12] tracking-tight text-foreground sm:text-5xl">
            English department intelligence, assessment and intervention in one platform
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            A school-ready platform helping teachers save time, students improve faster and leaders
            understand where support is needed.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              size="lg"
              className="h-12 px-7 text-base"
              render={<Link href="/school-pilot" />}
            >
              Start a 90-Day School Pilot
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-12 px-7 text-base"
              render={<Link href="#pilot" />}
            >
              See how the pilot works
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
              The challenge
            </p>
            <h2
              id="problem-heading"
              className="mt-3 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
            >
              English departments are under pressure
            </h2>
            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted-foreground">
              The work is growing faster than the time available to do it. Most departments tell us
              the same things.
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
              One platform for the whole English department
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              Designed to support teacher judgement and make department-wide work visible and
              manageable.
            </p>
          </div>
          <div className="mt-10">
            <GlassPanel accent="primary" className="p-2 sm:p-3">
              <div className="mb-3 px-3 pt-2 sm:mb-4 sm:px-4 sm:pt-3">
                <PanelEyebrow>The platform</PanelEyebrow>
              </div>
              <FeatureGrid
                items={[
                  {
                    icon: Brain,
                    title: 'AI-assisted marking & feedback',
                    body: 'Structured, criteria-referenced feedback teachers can review and build on.',
                  },
                  {
                    icon: BookOpen,
                    title: 'Student practice & revision',
                    body: 'Specification-aligned practice across English Language and Literature.',
                  },
                  {
                    icon: Layers,
                    title: 'Comprehension & reading support',
                    body: 'Structured reading and comprehension practice across key stages.',
                  },
                  {
                    icon: Languages,
                    title: 'EAL learning support',
                    body: 'Differentiated practice built to support EAL learners.',
                  },
                  {
                    icon: LineChart,
                    title: 'Class & year-group analytics',
                    body: 'Turn student activity into actionable insight for the department.',
                  },
                  {
                    icon: Eye,
                    title: 'Intervention insights',
                    body: 'Surface students who may need support earlier in the term.',
                  },
                  {
                    icon: ClipboardCheck,
                    title: 'Homework & worksheet support',
                    body: 'Set practice and generate teacher resources quickly.',
                  },
                  {
                    icon: FileText,
                    title: 'Student reports',
                    body: 'Clearer progress summaries for parents, reviews and leadership.',
                  },
                  {
                    icon: ScrollText,
                    title: 'Teacher resource generation',
                    body: 'Draft worksheets and practice material aligned to the specification.',
                  },
                ]}
              />
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
            For departments and leaders
          </p>
          <h2
            id="value-heading"
            className="mt-3 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            What schools get from it
          </h2>
        </div>

        {/* Aspirational tiles — qualitative only, no fabricated numbers. */}
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
          <BenefitGrid
            items={[
              {
                icon: Clock,
                title: 'Reduce teacher workload',
                body: 'Reduce repetitive marking so teachers can focus more time on teaching.',
              },
              {
                icon: Eye,
                title: 'Improve intervention visibility',
                body: 'Identify students who need support earlier, before gaps widen.',
              },
              {
                icon: Languages,
                title: 'Support EAL learners',
                body: 'Structured, differentiated practice for EAL cohorts.',
              },
              {
                icon: Target,
                title: 'Strengthen exam readiness',
                body: 'Specification-aligned practice and feedback across the department.',
              },
              {
                icon: FileText,
                title: 'Generate clearer student reports',
                body: 'Turn activity into shareable, leadership-ready summaries.',
              },
              {
                icon: LineChart,
                title: 'Track progress across cohorts',
                body: 'Clearer visibility across classes and year groups.',
              },
            ]}
          />
        </div>
      </section>

      {/* 5. Demo showcase — explore the platform as a guest */}
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
              Interactive walk-through
            </p>
            <h2
              id="demo-heading"
              className="mt-3 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
            >
              See it in action
            </h2>
            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted-foreground">
              Browse the school dashboard, the teacher workspace and the student experience as a
              guest — no sign-up.
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
                    Open the demo
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
              Founder School Programme
            </p>
            <h2
              id="pilot-heading"
              className="mt-3 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
            >
              90-Day Founder School Pilot
            </h2>
            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted-foreground">
              Most schools begin with a structured one-term pilot focused on one year group or the
              English department. The pilot is designed to prove value before wider rollout.
            </p>
          </div>
          <div className="mx-auto mt-12 max-w-3xl">
            <GlassPanel accent="clay" className="p-6 sm:p-8">
              <PanelEyebrow>How the pilot runs</PanelEyebrow>
              <div className="mt-5">
                <PilotTimeline />
              </div>
            </GlassPanel>
          </div>
          <div className="mt-10 text-center">
            <Button size="lg" className="h-12 px-7" render={<Link href="/school-pilot" />}>
              Start a 90-Day School Pilot
            </Button>
          </div>
        </div>
      </section>

      {/* 7. Pricing (pilots + annual) */}
      <section aria-labelledby="pricing-heading" className="border-y border-border/60 bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="text-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-primary">
              Pricing
            </p>
            <h2
              id="pricing-heading"
              className="mt-3 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
            >
              Founder pricing
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              Founder pilots are available for early school partners. Pricing depends on school
              size, scope and rollout requirements.
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
              Talk to us
            </p>
            <h2
              id="cta-heading"
              className="mt-3 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
            >
              Book a School Pilot
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Tell us about your department and the challenge you most want to address. We will
              reply within one UK working day to discuss a pilot scoped to your school.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              {[
                'Start with one year group or the whole department',
                'Structured onboarding and weekly adoption check-ins',
                'End-of-pilot impact report and rollout recommendation',
              ].map((p) => (
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
            <SchoolCTAForm heading="Request Founder School pricing" />
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
          School leader questions
        </h2>
        <SchoolFAQ />
      </section>
    </main>
  )
}
