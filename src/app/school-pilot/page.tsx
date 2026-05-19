import type { Metadata } from 'next'
import Link from 'next/link'
import { Check, Building2, Users2, Languages, BarChart3, ClipboardList } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
import { PilotTimeline } from '@/components/schools/PilotTimeline'
import { SchoolPricingCards } from '@/components/schools/SchoolPricingCards'
import { SchoolFAQ } from '@/components/schools/SchoolFAQ'
import { SchoolCTAForm } from '@/components/schools/SchoolCTAForm'
import { PRICING_DISPLAY } from '@/constants/pricing'

const OG = '/api/og?title=90-Day+Founder+School+Pilot&subtitle=Prove+value+before+wider+rollout'

export const metadata: Metadata = {
  title: 'Founder School Pilot — The English Hub for Schools',
  description:
    'A structured one-term English pilot for schools: onboarding, usage, intervention insights and an end-of-pilot impact report with a rollout recommendation.',
  alternates: { canonical: 'https://theenglishhub.app/school-pilot' },
  keywords: [
    'English school pilot',
    'English department pilot programme',
    'AI English platform pilot',
    'school English intervention pilot',
  ],
  openGraph: {
    title: '90-Day Founder School Pilot — The English Hub',
    description: 'A structured one-term pilot designed to prove value before wider rollout.',
    url: 'https://theenglishhub.app/school-pilot',
    images: [{ url: OG, width: 1200, height: 630, alt: 'Founder School Pilot' }],
  },
  twitter: { card: 'summary_large_image', images: [OG] },
}

const INCLUDED = [
  'Onboarding session with the English team',
  'Teacher setup and student access',
  'Baseline usage review',
  'Weekly adoption check-ins',
  'Class and year-group analytics review',
  'Intervention insight report',
  'End-of-pilot impact report',
  'Recommended rollout plan for wider deployment',
]

const SCOPES = [
  {
    icon: Users2,
    name: 'Single year group',
    price: PRICING_DISPLAY.pilotYearGroupFrom,
    body: 'Focus the pilot on one year group to prove value with minimal change management.',
  },
  {
    icon: Building2,
    name: 'English department',
    price: PRICING_DISPLAY.pilotDepartmentFrom,
    body: 'A whole-department pilot across KS3–KS4 English Language and Literature.',
  },
  {
    icon: Languages,
    name: 'Multi-campus / group',
    price: PRICING_DISPLAY.pilotMultiCampus,
    body: 'For school groups and multi-campus trusts. Scope and pricing tailored.',
  },
]

const END_DELIVERABLES = [
  'Usage summary',
  'Teacher feedback summary',
  'Student engagement summary',
  'Intervention insight report',
  'Recommended rollout plan',
  'Pricing proposal for annual deployment',
]

export default function SchoolPilotPage() {
  return (
    <main className="min-h-screen bg-background">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'Schools', url: 'https://theenglishhub.app/schools' },
          { name: 'School Pilot', url: 'https://theenglishhub.app/school-pilot' },
        ]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border/60">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary/5 blur-3xl"
        />
        <div className="relative mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 sm:py-28">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">
            Founder School Programme
          </p>
          <h1 className="mx-auto mt-5 max-w-3xl font-serif text-4xl font-semibold leading-[1.12] tracking-tight text-foreground sm:text-5xl">
            90-Day Founder School Pilot
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            A structured one-term pilot designed to prove value before wider rollout — focused on
            one year group or the English department.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button size="lg" className="h-12 px-7 text-base" render={<Link href="#book" />}>
              Book a School Pilot
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-12 px-7 text-base"
              render={<Link href="/schools" />}
            >
              Explore the platform
            </Button>
          </div>
        </div>
      </section>

      {/* 1. What the pilot is */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          What the pilot is
        </h2>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          The Founder School Pilot is a structured engagement over{' '}
          {PRICING_DISPLAY.schoolPilotLength}. It is designed to embed The English Hub into how your
          department works, gather real adoption and usage signals, and produce an evidence base for
          a wider rollout decision — without committing to a full year up front.
        </p>
      </section>

      {/* 2. Who it is for */}
      <section className="border-y border-border/60 bg-muted/30">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Who it is for
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              'Heads of English and Heads of Department evaluating department-wide tools',
              'Senior leaders looking to reduce marking workload and strengthen outcomes',
              'Schools with significant EAL cohorts needing structured support',
              'International and IGCSE schools planning English improvement',
            ].map((w) => (
              <div
                key={w}
                className="flex items-start gap-3 rounded-xl border border-border/60 bg-card p-5"
              >
                <ClipboardList className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <p className="text-sm leading-relaxed text-foreground">{w}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. What is included */}
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          What is included
        </h2>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {INCLUDED.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 rounded-xl border border-border/50 bg-card p-4"
            >
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span className="text-sm leading-relaxed text-foreground">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* 4. Suggested pilot scopes */}
      <section className="border-y border-border/60 bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Suggested pilot scopes
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Start small and expand. Most schools begin with a single year group.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {SCOPES.map(({ icon: Icon, name, price, body }) => (
              <Card key={name} className="flex h-full flex-col p-6 border-border/50">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                  {name}
                </p>
                <p className="mt-2 font-serif text-2xl font-semibold text-foreground">{price}</p>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </Card>
            ))}
          </div>
          <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
            {PRICING_DISPLAY.schoolPricingCaveat}
          </p>
        </div>
      </section>

      {/* 5. Timeline */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Pilot timeline
        </h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          A typical 90-day pilot runs in four phases.
        </p>
        <div className="mt-10">
          <PilotTimeline />
        </div>
      </section>

      {/* 6. Pricing */}
      <section className="border-y border-border/60 bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Pilot &amp; deployment pricing
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Indicative founder pricing. Final pricing depends on school size, scope and rollout
            requirements.
          </p>
          <div className="mt-10">
            <SchoolPricingCards ctaHref="#book" ctaLabel="Request a pilot proposal" />
          </div>
        </div>
      </section>

      {/* 7. What the school receives at the end */}
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          What your school receives at the end
        </h2>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {END_DELIVERABLES.map((d) => (
            <li
              key={d}
              className="flex items-start gap-3 rounded-xl border border-border/50 bg-card p-4"
            >
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span className="text-sm leading-relaxed text-foreground">{d}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* 8. CTA form */}
      <section id="book" className="scroll-mt-24 border-t border-border/60 bg-muted/30">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Book a School Pilot
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Tell us about your school and the challenge you most want to address. We will reply
              within one UK working day with a pilot scoped to your department.
            </p>
            <div className="mt-6 flex items-start gap-3 rounded-xl border border-border/60 bg-card p-5">
              <BarChart3 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <p className="text-sm leading-relaxed text-muted-foreground">
                Impact reporting is available during the pilot. We do not publish improvement
                figures we cannot evidence — your pilot generates your own.
              </p>
            </div>
          </div>
          <Card className="p-6 sm:p-8 border-border/50">
            <SchoolCTAForm heading="Request a Founder School Pilot" />
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="mb-8 text-center font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Pilot questions
        </h2>
        <SchoolFAQ />
      </section>
    </main>
  )
}
