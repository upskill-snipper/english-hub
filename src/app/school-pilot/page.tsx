import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Check,
  Building2,
  Users2,
  Languages,
  BarChart3,
  Compass,
  Users,
  Briefcase,
  Globe,
  Calendar,
  Sparkles,
  FileText,
  MessageSquare,
  Lightbulb,
  Map,
  FileSpreadsheet,
  ShieldCheck,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
import { PilotTimeline } from '@/components/schools/PilotTimeline'
import { SchoolPricingCards } from '@/components/schools/SchoolPricingCards'
import { SchoolFAQ } from '@/components/schools/SchoolFAQ'
import { SchoolCTAForm } from '@/components/schools/SchoolCTAForm'
import { GlassPanel, PanelEyebrow } from '@/components/dataviz/GlassPanel'
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
    highlight: false,
  },
  {
    icon: Building2,
    name: 'English department',
    price: PRICING_DISPLAY.pilotDepartmentFrom,
    body: 'A whole-department pilot across KS3–KS4 English Language and Literature.',
    highlight: true,
  },
  {
    icon: Languages,
    name: 'Multi-campus / group',
    price: PRICING_DISPLAY.pilotMultiCampus,
    body: 'For school groups and multi-campus trusts. Scope and pricing tailored.',
    highlight: false,
  },
]

const AUDIENCES = [
  {
    icon: Users,
    text: 'Heads of English and Heads of Department evaluating department-wide tools',
    border: 'border-l-4 border-l-teal-500/60',
  },
  {
    icon: Briefcase,
    text: 'Senior leaders looking to reduce marking workload and strengthen outcomes',
    border: 'border-l-4 border-l-clay-500/60',
  },
  {
    icon: Languages,
    text: 'Schools with significant EAL cohorts needing structured support',
    border: 'border-l-4 border-l-ochre-500/60',
  },
  {
    icon: Globe,
    text: 'International and IGCSE schools planning English improvement',
    border: 'border-l-4 border-l-sage-500/60',
  },
]

const PILOT_OUTCOMES = [
  { icon: Sparkles, label: 'Setup in week 1' },
  { icon: Calendar, label: 'Adoption check-ins' },
  { icon: BarChart3, label: 'End-of-pilot report' },
]

const END_DELIVERABLES = [
  { icon: FileText, text: 'Usage summary' },
  { icon: MessageSquare, text: 'Teacher feedback summary' },
  { icon: BarChart3, text: 'Student engagement summary' },
  { icon: Lightbulb, text: 'Intervention insight report' },
  { icon: Map, text: 'Recommended rollout plan' },
  { icon: FileSpreadsheet, text: 'Pricing proposal for annual deployment' },
]

const HERO_PILLS = [
  'One term · 8-12 weeks',
  'Single year group or full department',
  'Impact report on completion',
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
        <div
          aria-hidden
          className="pointer-events-none absolute -left-20 -bottom-32 h-72 w-72 rounded-full bg-clay-500/[0.05] blur-3xl"
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

          {/* Mini-pill strip */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {HERO_PILLS.map((pill) => (
              <span
                key={pill}
                className="inline-flex items-center rounded-full border border-border/60 bg-card/60 px-3 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-sm"
              >
                {pill}
              </span>
            ))}
          </div>

          {/* Demo first link */}
          <p className="mt-6 text-sm text-muted-foreground">
            Want to look around before booking?{' '}
            <Link className="font-medium text-primary hover:underline" href="/demo">
              Open the demo
            </Link>
          </p>
        </div>
      </section>

      {/* 1. What the pilot is */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          What the pilot is
        </h2>
        <Card className="mt-6 border-primary/20 bg-primary/[0.02] p-6 sm:p-8">
          <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Compass className="h-5 w-5" />
          </div>
          <p className="leading-relaxed text-foreground">
            The Founder School Pilot is a structured engagement over{' '}
            {PRICING_DISPLAY.schoolPilotLength}. It is designed to embed The English Hub into how
            your department works, gather real adoption and usage signals, and produce an evidence
            base for a wider rollout decision — without committing to a full year up front.
          </p>
        </Card>
      </section>

      {/* 2. Who it is for */}
      <section className="border-y border-border/60 bg-muted/30">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-primary">Audience</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Who it is for
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {AUDIENCES.map(({ icon: Icon, text, border }) => (
              <div
                key={text}
                className={`flex items-start gap-3 rounded-xl border border-border/60 bg-card p-5 ${border}`}
              >
                <Icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <p className="text-sm leading-relaxed text-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. What is included */}
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-primary">
          Programme scope
        </p>
        <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          What is included
        </h2>

        {/* Outcome row */}
        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {PILOT_OUTCOMES.map(({ icon: Icon, label }) => (
            <Card key={label} className="flex items-center gap-3 border-border/50 bg-card p-4">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon className="h-4 w-4" />
              </span>
              <span className="text-sm font-medium text-foreground">{label}</span>
            </Card>
          ))}
        </div>

        <GlassPanel accent="primary" className="mt-6 p-6 sm:p-8">
          <PanelEyebrow>Pilot deliverables</PanelEyebrow>
          <ul className="mt-5 grid gap-x-6 gap-y-3 sm:grid-cols-2">
            {INCLUDED.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-lg border border-border/40 bg-card/60 p-4 backdrop-blur-sm"
              >
                <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <Check className="h-3 w-3" />
                </span>
                <span className="text-sm leading-relaxed text-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </GlassPanel>
      </section>

      {/* 4. Suggested pilot scopes */}
      <section className="border-y border-border/60 bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-primary">
            Pilot scopes
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Suggested pilot scopes
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Start small and expand. Most schools begin with a single year group.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {SCOPES.map(({ icon: Icon, name, price, body, highlight }) => (
              <Card
                key={name}
                className={
                  highlight
                    ? 'relative flex h-full flex-col border-border/50 bg-gradient-to-b from-primary/[0.04] to-transparent p-6 ring-2 ring-primary/30'
                    : 'relative flex h-full flex-col border-border/50 p-6'
                }
              >
                {highlight && (
                  <Badge variant="default" className="absolute -top-2.5 left-1/2 -translate-x-1/2">
                    Most schools start here
                  </Badge>
                )}
                <div
                  className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl ${
                    highlight ? 'bg-primary/15 text-primary' : 'bg-primary/10 text-primary'
                  }`}
                >
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
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-primary">
          Programme cadence
        </p>
        <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Pilot timeline
        </h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          A typical 90-day pilot runs in four phases.
        </p>
        <GlassPanel accent="clay" className="mt-10 p-6 sm:p-8">
          <PanelEyebrow>
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-3 w-3" />
              <span>Four-phase rollout</span>
            </span>
          </PanelEyebrow>
          <div className="mt-5">
            <PilotTimeline />
          </div>
        </GlassPanel>
      </section>

      {/* 6. Pricing */}
      <section className="border-y border-border/60 bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-primary">
            Investment
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Pilot &amp; deployment pricing
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Indicative founder pricing. Final pricing depends on school size, scope and rollout
            requirements.
          </p>
          <GlassPanel accent="ochre" className="mt-10 p-6 sm:p-8">
            <PanelEyebrow>Pilot &amp; annual pricing</PanelEyebrow>
            <div className="mt-5">
              <SchoolPricingCards ctaHref="#book" ctaLabel="Request a pilot proposal" />
            </div>
          </GlassPanel>
        </div>
      </section>

      {/* 7. What the school receives at the end */}
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-primary">
          Final handover
        </p>
        <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          What your school receives at the end
        </h2>
        <Card className="mt-8 border-border/50 bg-muted/40 p-6 sm:p-8">
          <ul className="grid gap-3 sm:grid-cols-2">
            {END_DELIVERABLES.map(({ icon: Icon, text }) => (
              <li
                key={text}
                className="flex items-start gap-3 rounded-xl border border-border/50 bg-card p-4"
              >
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-4 w-4" />
                </span>
                <span className="self-center text-sm font-medium leading-relaxed text-foreground">
                  {text}
                </span>
              </li>
            ))}
          </ul>
        </Card>
      </section>

      {/* 8. CTA form */}
      <section id="book" className="scroll-mt-24 border-t border-border/60 bg-muted/30">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-primary">
              Next step
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
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
          <div>
            {/* Trust pill */}
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/[0.06] px-3 py-1.5 text-xs font-medium text-primary">
              <ShieldCheck className="h-3.5 w-3.5" />
              <span>Reply within one UK working day</span>
            </div>
            <GlassPanel accent="primary" className="p-2 sm:p-3">
              <Card className="border-border/50 p-6 sm:p-8">
                <SchoolCTAForm heading="Request a Founder School Pilot" />
              </Card>
            </GlassPanel>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="text-center font-mono text-[11px] uppercase tracking-[0.14em] text-primary">
          Common questions
        </p>
        <h2 className="mt-3 mb-8 text-center font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Pilot questions
        </h2>
        <SchoolFAQ />
      </section>
    </main>
  )
}
