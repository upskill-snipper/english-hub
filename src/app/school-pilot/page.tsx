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
import { tMany } from '@/lib/i18n/t'

const OG = '/api/og?title=90-Day+Founder+School+Pilot&subtitle=Prove+value+before+wider+rollout'

export async function generateMetadata(): Promise<Metadata> {
  const [metaTitle, metaDescription, ogTitle, ogDescription, ogAlt] = await tMany([
    'mkt.pilot.meta.title',
    'mkt.pilot.meta.description',
    'mkt.pilot.meta.og_title',
    'mkt.pilot.meta.og_description',
    'mkt.pilot.meta.og_alt',
  ])
  return {
    title: metaTitle,
    description: metaDescription,
    alternates: { canonical: 'https://theenglishhub.app/school-pilot' },
    keywords: [
      'English school pilot',
      'English department pilot programme',
      'AI English platform pilot',
      'school English intervention pilot',
    ],
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      url: 'https://theenglishhub.app/school-pilot',
      images: [{ url: OG, width: 1200, height: 630, alt: ogAlt }],
    },
    twitter: { card: 'summary_large_image', images: [OG] },
  }
}

const INCLUDED_KEYS = [
  'mkt.pilot.included.onboarding',
  'mkt.pilot.included.teacher_setup',
  'mkt.pilot.included.baseline',
  'mkt.pilot.included.weekly_checkins',
  'mkt.pilot.included.analytics_review',
  'mkt.pilot.included.intervention_report',
  'mkt.pilot.included.impact_report',
  'mkt.pilot.included.rollout_plan',
]

const SCOPES = [
  {
    icon: Users2,
    nameKey: 'mkt.pilot.scopes.year_group.name',
    price: PRICING_DISPLAY.pilotYearGroupFrom,
    bodyKey: 'mkt.pilot.scopes.year_group.body',
    highlight: false,
  },
  {
    icon: Building2,
    nameKey: 'mkt.pilot.scopes.department.name',
    price: PRICING_DISPLAY.pilotDepartmentFrom,
    bodyKey: 'mkt.pilot.scopes.department.body',
    highlight: true,
  },
  {
    icon: Languages,
    nameKey: 'mkt.pilot.scopes.multi_campus.name',
    price: PRICING_DISPLAY.pilotMultiCampus,
    bodyKey: 'mkt.pilot.scopes.multi_campus.body',
    highlight: false,
  },
]

const AUDIENCES = [
  {
    icon: Users,
    textKey: 'mkt.pilot.audiences.hods',
    border: 'border-l-4 border-l-teal-500/60',
  },
  {
    icon: Briefcase,
    textKey: 'mkt.pilot.audiences.senior_leaders',
    border: 'border-l-4 border-l-clay-500/60',
  },
  {
    icon: Languages,
    textKey: 'mkt.pilot.audiences.eal',
    border: 'border-l-4 border-l-ochre-500/60',
  },
  {
    icon: Globe,
    textKey: 'mkt.pilot.audiences.international',
    border: 'border-l-4 border-l-sage-500/60',
  },
]

const PILOT_OUTCOMES = [
  { icon: Sparkles, labelKey: 'mkt.pilot.outcomes.setup' },
  { icon: Calendar, labelKey: 'mkt.pilot.outcomes.checkins' },
  { icon: BarChart3, labelKey: 'mkt.pilot.outcomes.report' },
]

const END_DELIVERABLES = [
  { icon: FileText, textKey: 'mkt.pilot.end.usage_summary' },
  { icon: MessageSquare, textKey: 'mkt.pilot.end.teacher_feedback' },
  { icon: BarChart3, textKey: 'mkt.pilot.end.student_engagement' },
  { icon: Lightbulb, textKey: 'mkt.pilot.end.intervention_report' },
  { icon: Map, textKey: 'mkt.pilot.end.rollout_plan' },
  { icon: FileSpreadsheet, textKey: 'mkt.pilot.end.pricing_proposal' },
]

const HERO_PILL_KEYS = [
  'mkt.pilot.hero.pill_length',
  'mkt.pilot.hero.pill_scope',
  'mkt.pilot.hero.pill_report',
]

export default async function SchoolPilotPage() {
  const [
    heroEyebrow,
    heroTitle,
    heroLede,
    heroCtaPrimary,
    heroCtaSecondary,
    heroDemoPrompt,
    heroDemoLink,
    aboutHeading,
    aboutBodyPrefix,
    aboutBodySuffix,
    audienceEyebrow,
    audienceHeading,
    scopeEyebrow,
    includedHeading,
    pilotDeliverablesEyebrow,
  ] = await tMany([
    'mkt.pilot.hero.eyebrow',
    'mkt.pilot.hero.title',
    'mkt.pilot.hero.lede',
    'mkt.pilot.hero.cta_primary',
    'mkt.pilot.hero.cta_secondary',
    'mkt.pilot.hero.demo_prompt',
    'mkt.pilot.hero.demo_link',
    'mkt.pilot.about.heading',
    'mkt.pilot.about.body_prefix',
    'mkt.pilot.about.body_suffix',
    'mkt.pilot.audience.eyebrow',
    'mkt.pilot.audience.heading',
    'mkt.pilot.scope.eyebrow',
    'mkt.pilot.included.heading',
    'mkt.pilot.included.panel_eyebrow',
  ])

  const heroPills = await tMany(HERO_PILL_KEYS)
  const audiences = await tMany(AUDIENCES.map((a) => a.textKey))
  const outcomes = await tMany(PILOT_OUTCOMES.map((o) => o.labelKey))
  const included = await tMany(INCLUDED_KEYS)
  const scopeNames = await tMany(SCOPES.map((s) => s.nameKey))
  const scopeBodies = await tMany(SCOPES.map((s) => s.bodyKey))
  const endDeliverables = await tMany(END_DELIVERABLES.map((d) => d.textKey))

  const [
    suggestedScopesEyebrow,
    suggestedScopesHeading,
    suggestedScopesLede,
    suggestedScopesBadge,
    timelineEyebrow,
    timelineHeading,
    timelineLede,
    timelinePanelEyebrow,
    pricingEyebrow,
    pricingHeading,
    pricingLede,
    pricingPanelEyebrow,
    pricingCtaLabel,
    endEyebrow,
    endHeading,
    bookEyebrow,
    bookHeading,
    bookLede,
    bookImpactNote,
    bookTrustPill,
    bookFormHeading,
    faqEyebrow,
    faqHeading,
  ] = await tMany([
    'mkt.pilot.suggested_scopes.eyebrow',
    'mkt.pilot.suggested_scopes.heading',
    'mkt.pilot.suggested_scopes.lede',
    'mkt.pilot.suggested_scopes.badge',
    'mkt.pilot.timeline.eyebrow',
    'mkt.pilot.timeline.heading',
    'mkt.pilot.timeline.lede',
    'mkt.pilot.timeline.panel_eyebrow',
    'mkt.pilot.pricing.eyebrow',
    'mkt.pilot.pricing.heading',
    'mkt.pilot.pricing.lede',
    'mkt.pilot.pricing.panel_eyebrow',
    'mkt.pilot.pricing.cta_label',
    'mkt.pilot.end.eyebrow',
    'mkt.pilot.end.heading',
    'mkt.pilot.book.eyebrow',
    'mkt.pilot.hero.cta_primary',
    'mkt.pilot.book.lede',
    'mkt.pilot.book.impact_note',
    'mkt.pilot.book.trust_pill',
    'mkt.pilot.book.form_heading',
    'mkt.pilot.faq.eyebrow',
    'mkt.pilot.faq.heading',
  ])

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
            {heroEyebrow}
          </p>
          <h1 className="mx-auto mt-5 max-w-3xl font-serif text-4xl font-semibold leading-[1.12] tracking-tight text-foreground sm:text-5xl">
            {heroTitle}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {heroLede}
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button size="lg" className="h-12 px-7 text-base" render={<Link href="#book" />}>
              {heroCtaPrimary}
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-12 px-7 text-base"
              render={<Link href="/schools" />}
            >
              {heroCtaSecondary}
            </Button>
          </div>

          {/* Mini-pill strip */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {heroPills.map((pill, i) => (
              <span
                key={HERO_PILL_KEYS[i]}
                className="inline-flex items-center rounded-full border border-border/60 bg-card/60 px-3 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-sm"
              >
                {pill}
              </span>
            ))}
          </div>

          {/* Demo first link */}
          <p className="mt-6 text-sm text-muted-foreground">
            {heroDemoPrompt}{' '}
            <Link className="font-medium text-primary hover:underline" href="/demo">
              {heroDemoLink}
            </Link>
          </p>
        </div>
      </section>

      {/* 1. What the pilot is */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {aboutHeading}
        </h2>
        <Card className="mt-6 border-primary/20 bg-primary/[0.02] p-6 sm:p-8">
          <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Compass className="h-5 w-5" />
          </div>
          <p className="leading-relaxed text-foreground">
            {aboutBodyPrefix}
            {PRICING_DISPLAY.schoolPilotLength}
            {aboutBodySuffix}
          </p>
        </Card>
      </section>

      {/* 2. Who it is for */}
      <section className="border-y border-border/60 bg-muted/30">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-primary">
            {audienceEyebrow}
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {audienceHeading}
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {AUDIENCES.map(({ icon: Icon, textKey, border }, i) => (
              <div
                key={textKey}
                className={`flex items-start gap-3 rounded-xl border border-border/60 bg-card p-5 ${border}`}
              >
                <Icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <p className="text-sm leading-relaxed text-foreground">{audiences[i]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. What is included */}
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-primary">
          {scopeEyebrow}
        </p>
        <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {includedHeading}
        </h2>

        {/* Outcome row */}
        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {PILOT_OUTCOMES.map(({ icon: Icon, labelKey }, i) => (
            <Card key={labelKey} className="flex items-center gap-3 border-border/50 bg-card p-4">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon className="h-4 w-4" />
              </span>
              <span className="text-sm font-medium text-foreground">{outcomes[i]}</span>
            </Card>
          ))}
        </div>

        <GlassPanel accent="primary" className="mt-6 p-6 sm:p-8">
          <PanelEyebrow>{pilotDeliverablesEyebrow}</PanelEyebrow>
          <ul className="mt-5 grid gap-x-6 gap-y-3 sm:grid-cols-2">
            {included.map((item, i) => (
              <li
                key={INCLUDED_KEYS[i]}
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
            {suggestedScopesEyebrow}
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {suggestedScopesHeading}
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">{suggestedScopesLede}</p>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {SCOPES.map(({ icon: Icon, nameKey, price, highlight }, i) => (
              <Card
                key={nameKey}
                className={
                  highlight
                    ? 'relative flex h-full flex-col border-border/50 bg-gradient-to-b from-primary/[0.04] to-transparent p-6 ring-2 ring-primary/30'
                    : 'relative flex h-full flex-col border-border/50 p-6'
                }
              >
                {highlight && (
                  <Badge variant="default" className="absolute -top-2.5 left-1/2 -translate-x-1/2">
                    {suggestedScopesBadge}
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
                  {scopeNames[i]}
                </p>
                <p className="mt-2 font-serif text-2xl font-semibold text-foreground">{price}</p>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {scopeBodies[i]}
                </p>
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
          {timelineEyebrow}
        </p>
        <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {timelineHeading}
        </h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">{timelineLede}</p>
        <GlassPanel accent="clay" className="mt-10 p-6 sm:p-8">
          <PanelEyebrow>
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-3 w-3" />
              <span>{timelinePanelEyebrow}</span>
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
            {pricingEyebrow}
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {pricingHeading}
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">{pricingLede}</p>
          <GlassPanel accent="ochre" className="mt-10 p-6 sm:p-8">
            <PanelEyebrow>{pricingPanelEyebrow}</PanelEyebrow>
            <div className="mt-5">
              <SchoolPricingCards ctaHref="#book" ctaLabel={pricingCtaLabel} />
            </div>
          </GlassPanel>
        </div>
      </section>

      {/* 7. What the school receives at the end */}
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-primary">
          {endEyebrow}
        </p>
        <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {endHeading}
        </h2>
        <Card className="mt-8 border-border/50 bg-muted/40 p-6 sm:p-8">
          <ul className="grid gap-3 sm:grid-cols-2">
            {END_DELIVERABLES.map(({ icon: Icon, textKey }, i) => (
              <li
                key={textKey}
                className="flex items-start gap-3 rounded-xl border border-border/50 bg-card p-4"
              >
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-4 w-4" />
                </span>
                <span className="self-center text-sm font-medium leading-relaxed text-foreground">
                  {endDeliverables[i]}
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
              {bookEyebrow}
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              {bookHeading}
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">{bookLede}</p>
            <div className="mt-6 flex items-start gap-3 rounded-xl border border-border/60 bg-card p-5">
              <BarChart3 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <p className="text-sm leading-relaxed text-muted-foreground">{bookImpactNote}</p>
            </div>
          </div>
          <div>
            {/* Trust pill */}
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/[0.06] px-3 py-1.5 text-xs font-medium text-primary">
              <ShieldCheck className="h-3.5 w-3.5" />
              <span>{bookTrustPill}</span>
            </div>
            <GlassPanel accent="primary" className="p-2 sm:p-3">
              <Card className="border-border/50 p-6 sm:p-8">
                <SchoolCTAForm heading={bookFormHeading} />
              </Card>
            </GlassPanel>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="text-center font-mono text-[11px] uppercase tracking-[0.14em] text-primary">
          {faqEyebrow}
        </p>
        <h2 className="mt-3 mb-8 text-center font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {faqHeading}
        </h2>
        <SchoolFAQ />
      </section>
    </main>
  )
}
