import Link from 'next/link'
import {
  ArrowRight,
  Briefcase,
  Languages,
  Sparkles,
  LineChart,
  Globe2,
  Users2,
  Target,
  FileCheck2,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { GlassPanel, PanelEyebrow } from '@/components/dataviz/GlassPanel'
import { BreadcrumbJsonLd, FAQPageJsonLd } from '@/components/seo/json-ld'
import { t } from '@/lib/i18n/t'

// ─── /ielts/partners/for-agencies ──────────────────────────────────────────
// Focused B2B landing page for education / student-recruitment agencies that
// place applicants into English-medium universities and need them IELTS-ready.
// Server component, single <h1>, original copy. Metadata in ./layout.tsx.
//
// COMPLIANCE (hard requirement): The English Hub is NOT an accredited UCAS or
// university recruitment agent and NOT an official British Council / IELTS
// partner. Any reference to those routes is framed as intent / alignment with
// the standards we hold ourselves to — never as a held affiliation. The caveat
// block near the foot of the page reinforces this.
// ────────────────────────────────────────────────────────────────────────────

const CONTACT_HREF = '/contact'

// Pressures an agency placement team feels. Icons + accents only; visible copy
// resolved from ielts.partners.agencies.*.
const CHALLENGES = [
  {
    icon: Target,
    accent: 'border-l-clay-500/50',
    bodyKey: 'ielts.partners.agencies.challenge.stall',
  },
  {
    icon: LineChart,
    accent: 'border-l-ochre-500/50',
    bodyKey: 'ielts.partners.agencies.challenge.advise',
  },
  {
    icon: Languages,
    accent: 'border-l-teal-500/50',
    bodyKey: 'ielts.partners.agencies.challenge.barrier',
  },
  {
    icon: Globe2,
    accent: 'border-l-sage-500/50',
    bodyKey: 'ielts.partners.agencies.challenge.coordination',
  },
]

// What the agency gets.
const FEATURES = [
  {
    icon: Users2,
    titleKey: 'ielts.partners.agencies.features.bulk.title',
    bodyKey: 'ielts.partners.agencies.features.bulk.body',
  },
  {
    icon: FileCheck2,
    titleKey: 'ielts.partners.agencies.features.evidence.title',
    bodyKey: 'ielts.partners.agencies.features.evidence.body',
  },
  {
    icon: Sparkles,
    titleKey: 'ielts.partners.agencies.features.feedback.title',
    bodyKey: 'ielts.partners.agencies.features.feedback.body',
  },
  {
    icon: Languages,
    titleKey: 'ielts.partners.agencies.features.bilingual.title',
    bodyKey: 'ielts.partners.agencies.features.bilingual.body',
  },
  {
    icon: LineChart,
    titleKey: 'ielts.partners.agencies.features.visibility.title',
    bodyKey: 'ielts.partners.agencies.features.visibility.body',
  },
  {
    icon: Globe2,
    titleKey: 'ielts.partners.agencies.features.anywhere.title',
    bodyKey: 'ielts.partners.agencies.features.anywhere.body',
  },
]

// How agencies deploy it.
const USE_CASES = [
  {
    labelKey: 'ielts.partners.agencies.usecase.pre.label',
    headlineKey: 'ielts.partners.agencies.usecase.pre.headline',
    bodyKey: 'ielts.partners.agencies.usecase.pre.body',
  },
  {
    labelKey: 'ielts.partners.agencies.usecase.active.label',
    headlineKey: 'ielts.partners.agencies.usecase.active.headline',
    bodyKey: 'ielts.partners.agencies.usecase.active.body',
  },
  {
    labelKey: 'ielts.partners.agencies.usecase.predeparture.label',
    headlineKey: 'ielts.partners.agencies.usecase.predeparture.headline',
    bodyKey: 'ielts.partners.agencies.usecase.predeparture.body',
  },
]

// Standards strip bullets — framed as INTENT (see caveat block below).
const STANDARDS_BULLET_KEYS = [
  'ielts.partners.agencies.standards.bullet_criteria',
  'ielts.partners.agencies.standards.bullet_bc',
  'ielts.partners.agencies.standards.bullet_ipp',
  'ielts.partners.agencies.standards.bullet_uni',
]

// JSON-LD source — kept English (structured data, not visible UI). No visible
// FAQ accordion renders here; bilingual ielts.partners.agencies.faq.* keys
// exist in the dictionary for parity.
const FAQS = [
  {
    question: 'Is The English Hub an accredited university recruitment agent?',
    answer:
      'No. The English Hub is an independent IELTS preparation platform, not a UCAS or university recruitment agent. We support the preparation side — getting applicants IELTS-ready — and we describe any recruitment or accreditation routes we are pursuing as exactly that: routes we are pursuing, not affiliations we hold.',
  },
  {
    question: 'How does this help our placements?',
    answer:
      'It gets the students you place to the IELTS band their destination requires, and gives you predicted-band evidence to advise applicants honestly and support their applications.',
  },
  {
    question: 'Can applicants prepare from any country?',
    answer:
      'Yes. The platform is cloud-based and bilingual in English and Arabic, so applicants can prepare from anywhere, in the language they are most comfortable navigating.',
  },
  {
    question: 'How do we get started?',
    answer:
      'Contact us with a little about your agency and the applicants you are placing, and we will scope bulk access and a pilot around your intake cycle.',
  },
]

export default async function IeltsPartnersForAgenciesPage() {
  const challenges = await Promise.all(
    CHALLENGES.map(async (c) => ({
      icon: c.icon,
      accent: c.accent,
      body: await t(c.bodyKey),
    })),
  )
  const features = await Promise.all(
    FEATURES.map(async (f) => ({
      icon: f.icon,
      title: await t(f.titleKey),
      body: await t(f.bodyKey),
    })),
  )
  const useCases = await Promise.all(
    USE_CASES.map(async (u) => ({
      label: await t(u.labelKey),
      headline: await t(u.headlineKey),
      body: await t(u.bodyKey),
    })),
  )
  const standardsBullets = await Promise.all(STANDARDS_BULLET_KEYS.map((k) => t(k)))

  return (
    <main className="min-h-screen bg-background">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'IELTS', url: 'https://theenglishhub.app/ielts' },
          { name: 'Partners', url: 'https://theenglishhub.app/ielts/partners' },
          { name: 'For agencies', url: 'https://theenglishhub.app/ielts/partners/for-agencies' },
        ]}
      />
      <FAQPageJsonLd faqs={FAQS} />

      {/* 1. Hero */}
      <section className="relative overflow-hidden border-b border-border/60">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-sage-500/[0.07] blur-3xl"
        />
        <div className="relative mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 sm:py-28">
          <p className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-clay-500">
            <Briefcase className="h-3.5 w-3.5" aria-hidden />
            {await t('ielts.partners.agencies.hero.eyebrow')}
          </p>
          <h1 className="mx-auto mt-5 max-w-3xl font-serif text-4xl font-semibold leading-[1.12] tracking-tight text-foreground sm:text-5xl">
            {await t('ielts.partners.agencies.hero.h1')}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {await t('ielts.partners.agencies.hero.lede')}
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              size="lg"
              className="h-12 gap-2 px-7 text-base"
              render={<Link href={CONTACT_HREF} />}
            >
              {await t('ielts.partners.agencies.hero.cta_primary')}
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-12 px-7 text-base"
              render={<Link href="/ielts/partners" />}
            >
              {await t('ielts.partners.agencies.hero.cta_secondary')}
            </Button>
          </div>
        </div>
      </section>

      {/* 2. Challenges */}
      <section aria-labelledby="challenge-heading" className="relative overflow-hidden">
        <div className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="text-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              {await t('ielts.partners.agencies.challenge.eyebrow')}
            </p>
            <h2
              id="challenge-heading"
              className="mt-3 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
            >
              {await t('ielts.partners.agencies.challenge.heading')}
            </h2>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {challenges.map(({ icon: Icon, accent, body }) => (
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

      {/* 3. What you get */}
      <section aria-labelledby="features-heading" className="border-y border-border/60 bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="text-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-clay-500">
              {await t('ielts.partners.agencies.features.eyebrow')}
            </p>
            <h2
              id="features-heading"
              className="mt-3 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
            >
              {await t('ielts.partners.agencies.features.heading')}
            </h2>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="rounded-2xl border border-border/60 bg-card p-6 shadow-soft"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="mt-4 font-serif text-lg font-semibold text-foreground">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Use cases — across the placement journey */}
      <section
        aria-labelledby="usecase-heading"
        className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20"
      >
        <div className="text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
            {await t('ielts.partners.agencies.usecase.eyebrow')}
          </p>
          <h2
            id="usecase-heading"
            className="mt-3 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            {await t('ielts.partners.agencies.usecase.heading')}
          </h2>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {useCases.map(({ label, headline, body }, i) => (
            <GlassPanel
              key={headline}
              accent={(['sage', 'teal', 'ochre'] as const)[i]}
              className="p-6"
            >
              <PanelEyebrow>{label}</PanelEyebrow>
              <h3 className="mt-3 font-serif text-xl font-semibold tracking-tight text-foreground">
                {headline}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </GlassPanel>
          ))}
        </div>
      </section>

      {/* 5. Standards & compliance — framed as intent */}
      <section
        aria-labelledby="standards-heading"
        className="border-y border-border/60 bg-muted/30"
      >
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20">
          <GlassPanel accent="primary" className="p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-2">
              <PanelEyebrow>{await t('ielts.partners.agencies.standards.eyebrow')}</PanelEyebrow>
              <Badge variant="outline" className="font-mono text-[10px] uppercase tracking-wide">
                {await t('ielts.partners.agencies.standards.badge')}
              </Badge>
            </div>
            <h2
              id="standards-heading"
              className="mt-3 font-serif text-2xl font-semibold tracking-tight text-foreground"
            >
              {await t('ielts.partners.agencies.standards.heading')}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {await t('ielts.partners.agencies.standards.body')}
            </p>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {standardsBullets.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </GlassPanel>

          {/* Explicit compliance caveat — required. Translated in full (AR keeps
              every "not currently…" disclaimer; see dictionary-ielts-partners.ts). */}
          <p className="mx-auto mt-8 max-w-3xl text-center text-xs leading-relaxed text-muted-foreground">
            {await t('ielts.partners.agencies.standards.caveat')}
          </p>
        </div>
      </section>

      {/* 6. CTA */}
      <section aria-labelledby="cta-heading" className="border-t border-border/60">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 sm:py-20">
          <h2
            id="cta-heading"
            className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            {await t('ielts.partners.agencies.cta.heading')}
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-muted-foreground">
            {await t('ielts.partners.agencies.cta.lede')}
          </p>
          <ul className="mx-auto mt-8 flex max-w-md flex-col gap-3 text-left text-sm text-muted-foreground">
            {[
              await t('ielts.partners.agencies.cta.bullet_bulk'),
              await t('ielts.partners.agencies.cta.bullet_evidence'),
              await t('ielts.partners.agencies.cta.bullet_anywhere'),
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-9">
            <Button
              size="lg"
              className="h-12 gap-2 px-7 text-base"
              render={<Link href={CONTACT_HREF} />}
            >
              {await t('ielts.partners.agencies.cta.button')}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
