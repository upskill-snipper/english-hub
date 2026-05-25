import Link from 'next/link'
import {
  ArrowRight,
  Building2,
  Languages,
  Sparkles,
  LineChart,
  ClipboardCheck,
  LayoutDashboard,
  Clock,
  Target,
  Users2,
  CheckCircle2,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { GlassPanel, PanelEyebrow } from '@/components/dataviz/GlassPanel'
import { BreadcrumbJsonLd, FAQPageJsonLd } from '@/components/seo/json-ld'
import { t } from '@/lib/i18n/t'

// ─── /ielts/partners/for-schools ───────────────────────────────────────────
// Focused B2B landing page for GCC schools, sixth forms and exam-prep centres
// considering an IELTS Academic pathway from The English Hub. Server component,
// single <h1>, original copy. Metadata + canonical in ./layout.tsx.
//
// COMPLIANCE: no claimed British Council / IELTS affiliation; standards we
// align to are described as such on the /ielts/partners overview.
// ────────────────────────────────────────────────────────────────────────────

const CONTACT_HREF = '/contact'

// Pressures a school/centre coordinator feels when standing up IELTS provision.
// Icons + accents only; visible copy resolved from ielts.partners.schools.*.
const CHALLENGES = [
  {
    icon: Clock,
    accent: 'border-l-clay-500/50',
    bodyKey: 'ielts.partners.schools.challenge.marking',
  },
  {
    icon: LineChart,
    accent: 'border-l-ochre-500/50',
    bodyKey: 'ielts.partners.schools.challenge.data',
  },
  {
    icon: Languages,
    accent: 'border-l-teal-500/50',
    bodyKey: 'ielts.partners.schools.challenge.barrier',
  },
  {
    icon: ClipboardCheck,
    accent: 'border-l-sage-500/50',
    bodyKey: 'ielts.partners.schools.challenge.materials',
  },
]

// What the school/centre gets.
const FEATURES = [
  {
    icon: Users2,
    titleKey: 'ielts.partners.schools.features.cohort.title',
    bodyKey: 'ielts.partners.schools.features.cohort.body',
  },
  {
    icon: Sparkles,
    titleKey: 'ielts.partners.schools.features.feedback.title',
    bodyKey: 'ielts.partners.schools.features.feedback.body',
  },
  {
    icon: LayoutDashboard,
    titleKey: 'ielts.partners.schools.features.dashboard.title',
    bodyKey: 'ielts.partners.schools.features.dashboard.body',
  },
  {
    icon: Languages,
    titleKey: 'ielts.partners.schools.features.bilingual.title',
    bodyKey: 'ielts.partners.schools.features.bilingual.body',
  },
  {
    icon: ClipboardCheck,
    titleKey: 'ielts.partners.schools.features.practice.title',
    bodyKey: 'ielts.partners.schools.features.practice.body',
  },
  {
    icon: Target,
    titleKey: 'ielts.partners.schools.features.evidence.title',
    bodyKey: 'ielts.partners.schools.features.evidence.body',
  },
]

// Concrete use cases — how schools/centres actually deploy it.
const USE_CASES = [
  {
    labelKey: 'ielts.partners.schools.usecase.sixthform.label',
    headlineKey: 'ielts.partners.schools.usecase.sixthform.headline',
    bodyKey: 'ielts.partners.schools.usecase.sixthform.body',
  },
  {
    labelKey: 'ielts.partners.schools.usecase.intl.label',
    headlineKey: 'ielts.partners.schools.usecase.intl.headline',
    bodyKey: 'ielts.partners.schools.usecase.intl.body',
  },
  {
    labelKey: 'ielts.partners.schools.usecase.centre.label',
    headlineKey: 'ielts.partners.schools.usecase.centre.headline',
    bodyKey: 'ielts.partners.schools.usecase.centre.body',
  },
]

// JSON-LD source — kept English (structured data, not visible UI). No visible
// FAQ accordion renders on this page; the bilingual ielts.partners.schools.faq.*
// keys exist in the dictionary for parity.
const FAQS = [
  {
    question: 'How do students access the platform?',
    answer:
      'Through bulk access set up under your partnership. Each student gets the full IELTS Academic learning loop, and coordinators get a dashboard view across the cohort.',
  },
  {
    question: 'Does this replace our teachers?',
    answer:
      'No — it extends them. Automatic marking and AI band feedback handle the repetitive load so your teachers can spend their time on instruction, feedback conversations and intervention.',
  },
  {
    question: 'Is it suitable for Arabic-speaking students?',
    answer:
      'Yes. The platform is fully bilingual in English and Arabic, so navigation and instructions never get in the way of the IELTS practice itself. It is purpose-built for Gulf learners.',
  },
  {
    question: 'Can we run a pilot first?',
    answer:
      'Yes. Get in touch and we will scope a pilot around a single class or cohort and your test-prep calendar before any wider rollout.',
  },
]

export default async function IeltsPartnersForSchoolsPage() {
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

  return (
    <main className="min-h-screen bg-background">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'IELTS', url: 'https://theenglishhub.app/ielts' },
          { name: 'Partners', url: 'https://theenglishhub.app/ielts/partners' },
          { name: 'For schools', url: 'https://theenglishhub.app/ielts/partners/for-schools' },
        ]}
      />
      <FAQPageJsonLd faqs={FAQS} />

      {/* 1. Hero */}
      <section className="relative overflow-hidden border-b border-border/60">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-teal-500/[0.07] blur-3xl"
        />
        <div className="relative mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 sm:py-28">
          <p className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-clay-500">
            <Building2 className="h-3.5 w-3.5" aria-hidden />
            {await t('ielts.partners.schools.hero.eyebrow')}
          </p>
          <h1 className="mx-auto mt-5 max-w-3xl font-serif text-4xl font-semibold leading-[1.12] tracking-tight text-foreground sm:text-5xl">
            {await t('ielts.partners.schools.hero.h1')}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {await t('ielts.partners.schools.hero.lede')}
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              size="lg"
              className="h-12 gap-2 px-7 text-base"
              render={<Link href={CONTACT_HREF} />}
            >
              {await t('ielts.partners.schools.hero.cta_primary')}
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-12 px-7 text-base"
              render={<Link href="/ielts/partners" />}
            >
              {await t('ielts.partners.schools.hero.cta_secondary')}
            </Button>
          </div>
        </div>
      </section>

      {/* 2. Challenges */}
      <section aria-labelledby="challenge-heading" className="relative overflow-hidden">
        <div className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="text-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              {await t('ielts.partners.schools.challenge.eyebrow')}
            </p>
            <h2
              id="challenge-heading"
              className="mt-3 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
            >
              {await t('ielts.partners.schools.challenge.heading')}
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
              {await t('ielts.partners.schools.features.eyebrow')}
            </p>
            <h2
              id="features-heading"
              className="mt-3 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
            >
              {await t('ielts.partners.schools.features.heading')}
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

      {/* 4. Use cases */}
      <section
        aria-labelledby="usecase-heading"
        className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20"
      >
        <div className="text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
            {await t('ielts.partners.schools.usecase.eyebrow')}
          </p>
          <h2
            id="usecase-heading"
            className="mt-3 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            {await t('ielts.partners.schools.usecase.heading')}
          </h2>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {useCases.map(({ label, headline, body }, i) => (
            <GlassPanel
              key={headline}
              accent={(['teal', 'ochre', 'sage'] as const)[i]}
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

      {/* 5. CTA */}
      <section aria-labelledby="cta-heading" className="border-t border-border/60 bg-muted/30">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 sm:py-20">
          <h2
            id="cta-heading"
            className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            {await t('ielts.partners.schools.cta.heading')}
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-muted-foreground">
            {await t('ielts.partners.schools.cta.lede')}
          </p>
          <ul className="mx-auto mt-8 flex max-w-md flex-col gap-3 text-left text-sm text-muted-foreground">
            {[
              await t('ielts.partners.schools.cta.bullet_walkthrough'),
              await t('ielts.partners.schools.cta.bullet_bulk'),
              await t('ielts.partners.schools.cta.bullet_pilot'),
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
              {await t('ielts.partners.schools.cta.button')}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
