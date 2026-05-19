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
        </div>
      </section>

      {/* 2. Problem */}
      <section
        aria-labelledby="problem-heading"
        className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20"
      >
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
        <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/60 sm:grid-cols-2">
          {[
            'Marking workload is heavy and repetitive, eating into planning and teaching time.',
            'Student practice is inconsistent and hard to monitor across classes.',
            'Leaders have limited visibility of progress across year groups.',
            'Students who need support are often identified too late.',
            'EAL learners need structured support that is hard to resource at scale.',
            'Reporting is time-consuming and pulls from scattered sources.',
          ].map((line) => (
            <div key={line} className="bg-card p-6">
              <p className="text-sm leading-relaxed text-foreground">{line}</p>
            </div>
          ))}
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
          </div>
        </div>
      </section>

      {/* 4. School value cards */}
      <section
        aria-labelledby="value-heading"
        className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20"
      >
        <h2
          id="value-heading"
          className="text-center font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
        >
          What schools get from it
        </h2>
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

      {/* 5. Pilot programme */}
      <section
        id="pilot"
        aria-labelledby="pilot-heading"
        className="scroll-mt-24 border-y border-border/60 bg-muted/30"
      >
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
            <PilotTimeline />
          </div>
          <div className="mt-10 text-center">
            <Button size="lg" className="h-12 px-7" render={<Link href="/school-pilot" />}>
              Start a 90-Day School Pilot
            </Button>
          </div>
        </div>
      </section>

      {/* 6. Pricing (pilots + annual) */}
      <section
        aria-labelledby="pricing-heading"
        className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20"
      >
        <div className="text-center">
          <h2
            id="pricing-heading"
            className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            Founder pricing
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Founder pilots are available for early school partners. Pricing depends on school size,
            scope and rollout requirements.
          </p>
        </div>
        <div className="mt-10">
          <SchoolPricingCards />
        </div>
      </section>

      {/* 7. Conversion CTA */}
      <section
        id="contact"
        aria-labelledby="cta-heading"
        className="scroll-mt-24 border-t border-border/60 bg-muted/30"
      >
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2
              id="cta-heading"
              className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
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
          <Card className="p-6 sm:p-8 border-border/50">
            <SchoolCTAForm heading="Request Founder School pricing" />
          </Card>
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
