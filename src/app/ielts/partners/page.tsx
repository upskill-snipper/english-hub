import Link from 'next/link'
import {
  ArrowRight,
  Building2,
  Users2,
  Briefcase,
  LayoutDashboard,
  Languages,
  Sparkles,
  LineChart,
  ShieldCheck,
  GraduationCap,
  ClipboardCheck,
  Layers,
  Compass,
  CheckCircle2,
  Mail,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { GlassPanel, PanelEyebrow } from '@/components/dataviz/GlassPanel'
import { BreadcrumbJsonLd, FAQPageJsonLd } from '@/components/seo/json-ld'
import { t } from '@/lib/i18n/t'

// ─── /ielts/partners - partnerships & institutional overview ────────────────
// SEO landing page for schools, exam centres and education agencies considering
// partnering WITH The English Hub to deliver IELTS Academic preparation. Server
// component so the marketing copy renders statically for SEO/AI answer engines.
// Exactly one <h1>. Section metadata + canonical live in ./layout.tsx.
//
// COMPLIANCE (hard requirement): the British Council UK Agent Hub, the IELTS
// Partnership Programme and UK university recruitment relationships are
// described as routes we are PURSUING and standards we ALIGN TO - never as
// affiliations already held. No third-party logos or trademarked marks are
// used. All copy original.
// ────────────────────────────────────────────────────────────────────────────

const CONTACT_HREF = '/contact'

// Static, non-textual config for each section. Visible copy is resolved from
// the dictionary (ielts.partners.overview.*) at render time so it is bilingual.
// Icons + accents stay here; titleKey/bodyKey point at dictionary entries.
const OFFERINGS = [
  {
    icon: Users2,
    accent: 'border-l-teal-500/60',
    titleKey: 'ielts.partners.overview.offer.bulk.title',
    bodyKey: 'ielts.partners.overview.offer.bulk.body',
  },
  {
    icon: LayoutDashboard,
    accent: 'border-l-sage-500/60',
    titleKey: 'ielts.partners.overview.offer.dashboard.title',
    bodyKey: 'ielts.partners.overview.offer.dashboard.body',
  },
  {
    icon: Languages,
    accent: 'border-l-ochre-500/60',
    titleKey: 'ielts.partners.overview.offer.bilingual.title',
    bodyKey: 'ielts.partners.overview.offer.bilingual.body',
  },
  {
    icon: Sparkles,
    accent: 'border-l-clay-500/60',
    titleKey: 'ielts.partners.overview.offer.feedback.title',
    bodyKey: 'ielts.partners.overview.offer.feedback.body',
  },
  {
    icon: LineChart,
    accent: 'border-l-teal-500/60',
    titleKey: 'ielts.partners.overview.offer.progress.title',
    bodyKey: 'ielts.partners.overview.offer.progress.body',
  },
  {
    icon: ClipboardCheck,
    accent: 'border-l-sage-500/60',
    titleKey: 'ielts.partners.overview.offer.mocks.title',
    bodyKey: 'ielts.partners.overview.offer.mocks.body',
  },
]

// Who this is for - three institutional audiences, two with their own deep
// landing page.
const AUDIENCES = [
  {
    icon: Building2,
    accent: 'teal' as const,
    labelKey: 'ielts.partners.overview.audience.schools.label',
    headlineKey: 'ielts.partners.overview.audience.schools.headline',
    bodyKey: 'ielts.partners.overview.audience.schools.body',
    href: '/ielts/partners/for-schools',
    ctaKey: 'ielts.partners.overview.audience.schools.cta',
  },
  {
    icon: GraduationCap,
    accent: 'ochre' as const,
    labelKey: 'ielts.partners.overview.audience.centres.label',
    headlineKey: 'ielts.partners.overview.audience.centres.headline',
    bodyKey: 'ielts.partners.overview.audience.centres.body',
    href: '/ielts/partners/for-schools',
    ctaKey: 'ielts.partners.overview.audience.centres.cta',
  },
  {
    icon: Briefcase,
    accent: 'sage' as const,
    labelKey: 'ielts.partners.overview.audience.agencies.label',
    headlineKey: 'ielts.partners.overview.audience.agencies.headline',
    bodyKey: 'ielts.partners.overview.audience.agencies.body',
    href: '/ielts/partners/for-agencies',
    ctaKey: 'ielts.partners.overview.audience.agencies.cta',
  },
]

// Partnership roadmap. CRITICAL: every item is framed as intent / alignment,
// NOT a held affiliation. The caveat directly below the list reinforces this.
const ROADMAP = [
  {
    icon: ShieldCheck,
    titleKey: 'ielts.partners.overview.roadmap.bc.title',
    bodyKey: 'ielts.partners.overview.roadmap.bc.body',
  },
  {
    icon: Compass,
    titleKey: 'ielts.partners.overview.roadmap.ipp.title',
    bodyKey: 'ielts.partners.overview.roadmap.ipp.body',
  },
  {
    icon: GraduationCap,
    titleKey: 'ielts.partners.overview.roadmap.uni.title',
    bodyKey: 'ielts.partners.overview.roadmap.uni.body',
  },
]

// Differentiators - short "why us" strip.
const WHY = [
  {
    icon: Sparkles,
    titleKey: 'ielts.partners.overview.why.feedback.title',
    bodyKey: 'ielts.partners.overview.why.feedback.body',
  },
  {
    icon: Languages,
    titleKey: 'ielts.partners.overview.why.bilingual.title',
    bodyKey: 'ielts.partners.overview.why.bilingual.body',
  },
  {
    icon: Layers,
    titleKey: 'ielts.partners.overview.why.loop.title',
    bodyKey: 'ielts.partners.overview.why.loop.body',
  },
]

// JSON-LD source - kept English (structured data, not visible UI). This page
// has no visible FAQ accordion; the bilingual ielts.partners.overview.faq.*
// keys exist in the dictionary for parity with the per-audience pages.
const FAQS = [
  {
    question: 'Is The English Hub an official British Council or IELTS partner?',
    answer:
      'Not currently. The English Hub is an independent IELTS Academic preparation platform. Official British Council and IELTS partnerships are routes we are actively pursuing and standards we align our content and assessment practice to - we will only describe ourselves as holding an affiliation once it is formally granted.',
  },
  {
    question: 'Do you deliver the IELTS test itself?',
    answer:
      'No. We provide preparation - diagnostic placement, a personalised study plan, four-skill practice, AI band feedback and full mock tests. The official IELTS test is sat through authorised test centres.',
  },
  {
    question: 'What does a partnership give our learners?',
    answer:
      'Bulk access to the full IELTS Academic learning loop, a centre dashboard for tracking cohort progress and predicted bands, bilingual English / Arabic delivery, and instant AI feedback on Writing and Speaking against the official band descriptors.',
  },
  {
    question: 'Can teachers see how their cohort is progressing?',
    answer:
      'Yes. The centre dashboard surfaces starting bands, practice activity and predicted overall bands across the cohort, so coordinators can identify who is on track and intervene early where needed.',
  },
  {
    question: 'Is the platform suitable for Arabic-speaking students?',
    answer:
      'Yes. Every learner-facing screen is available in English or Arabic, so instructions and navigation never become a barrier to the practice itself. It is purpose-built for Gulf learners.',
  },
  {
    question: 'How do we start a conversation about partnering?',
    answer:
      'Get in touch through our contact page with a little about your school, centre or agency and the cohort you have in mind, and we will follow up to scope a pilot.',
  },
]

export default async function IeltsPartnersPage() {
  // Resolve every visible string up front (locale read once per t()).
  const offerings = await Promise.all(
    OFFERINGS.map(async (o) => ({
      icon: o.icon,
      accent: o.accent,
      title: await t(o.titleKey),
      body: await t(o.bodyKey),
    })),
  )
  const audiences = await Promise.all(
    AUDIENCES.map(async (a) => ({
      icon: a.icon,
      accent: a.accent,
      href: a.href,
      label: await t(a.labelKey),
      headline: await t(a.headlineKey),
      body: await t(a.bodyKey),
      cta: await t(a.ctaKey),
    })),
  )
  const why = await Promise.all(
    WHY.map(async (w) => ({
      icon: w.icon,
      title: await t(w.titleKey),
      body: await t(w.bodyKey),
    })),
  )
  const roadmap = await Promise.all(
    ROADMAP.map(async (r) => ({
      icon: r.icon,
      title: await t(r.titleKey),
      body: await t(r.bodyKey),
    })),
  )
  // Resolved once - same "Pursuing" badge on every roadmap row (can't await
  // inside the .map() callback below).
  const roadmapBadge = await t('ielts.partners.overview.roadmap.badge')

  return (
    <main className="min-h-screen bg-background">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'IELTS', url: 'https://theenglishhub.app/ielts' },
          { name: 'Partners', url: 'https://theenglishhub.app/ielts/partners' },
        ]}
      />
      <FAQPageJsonLd faqs={FAQS} />

      {/* 1. Hero */}
      <section className="relative overflow-hidden border-b border-border/60">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-primary/5 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-20 -bottom-24 h-80 w-80 rounded-full bg-teal-500/[0.06] blur-3xl"
        />
        <div className="relative mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 sm:py-28">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-clay-500">
            {await t('ielts.partners.overview.hero.eyebrow')}
          </p>
          <h1 className="mx-auto mt-5 max-w-3xl font-serif text-4xl font-semibold leading-[1.12] tracking-tight text-foreground sm:text-5xl">
            {await t('ielts.partners.overview.hero.h1')}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {await t('ielts.partners.overview.hero.lede')}
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              size="lg"
              className="h-12 gap-2 px-7 text-base"
              render={<Link href={CONTACT_HREF} />}
            >
              {await t('ielts.partners.overview.hero.cta_primary')}
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-12 gap-2 px-7 text-base"
              render={<Link href="/ielts" />}
            >
              {await t('ielts.partners.overview.hero.cta_secondary')}
            </Button>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {[
              await t('ielts.partners.overview.hero.pill_schools'),
              await t('ielts.partners.overview.hero.pill_centres'),
              await t('ielts.partners.overview.hero.pill_agencies'),
              await t('ielts.partners.overview.hero.pill_bilingual'),
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

      {/* 2. What we offer institutions */}
      <section aria-labelledby="offer-heading" className="relative overflow-hidden">
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="text-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              {await t('ielts.partners.overview.offer.eyebrow')}
            </p>
            <h2
              id="offer-heading"
              className="mt-3 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
            >
              {await t('ielts.partners.overview.offer.heading')}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted-foreground">
              {await t('ielts.partners.overview.offer.lede')}
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {offerings.map(({ icon: Icon, accent, title, body }) => (
              <Card
                key={title}
                className={`flex flex-col gap-4 border-l-4 ${accent} border-border/50 bg-card p-6`}
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-foreground">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Who it's for */}
      <section aria-labelledby="audience-heading" className="border-y border-border/60 bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="text-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-clay-500">
              {await t('ielts.partners.overview.audience.eyebrow')}
            </p>
            <h2
              id="audience-heading"
              className="mt-3 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
            >
              {await t('ielts.partners.overview.audience.heading')}
            </h2>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {audiences.map(({ icon: Icon, accent, label, headline, body, href, cta }) => (
              <GlassPanel key={headline} accent={accent} className="flex flex-col p-6">
                <div className="flex items-start justify-between gap-3">
                  <PanelEyebrow>{label}</PanelEyebrow>
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-foreground/[0.06]">
                    <Icon className="h-4 w-4 text-muted-foreground" aria-hidden />
                  </span>
                </div>
                <h3 className="mt-3 font-serif text-xl font-semibold tracking-tight text-foreground">
                  {headline}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
                <div className="mt-auto pt-5">
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-1.5"
                    render={<Link href={href} />}
                  >
                    {cta}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Button>
                </div>
              </GlassPanel>
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
            {await t('ielts.partners.overview.why.eyebrow')}
          </p>
          <h2
            id="why-heading"
            className="mt-3 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            {await t('ielts.partners.overview.why.heading')}
          </h2>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {why.map(({ icon: Icon, title, body }) => (
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
      </section>

      {/* 5. Partnership roadmap - framed as INTENT, with explicit caveat */}
      <section aria-labelledby="roadmap-heading" className="border-y border-border/60 bg-muted/30">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="text-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-clay-500">
              {await t('ielts.partners.overview.roadmap.eyebrow')}
            </p>
            <h2
              id="roadmap-heading"
              className="mt-3 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
            >
              {await t('ielts.partners.overview.roadmap.heading')}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted-foreground">
              {await t('ielts.partners.overview.roadmap.lede')}
            </p>
          </div>

          <div className="mt-10">
            <GlassPanel accent="primary" className="p-6 sm:p-8">
              <PanelEyebrow>
                {await t('ielts.partners.overview.roadmap.panel_eyebrow')}
              </PanelEyebrow>
              <ul className="mt-5 space-y-5">
                {roadmap.map(({ icon: Icon, title, body }) => (
                  <li key={title} className="flex items-start gap-4">
                    <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-serif text-lg font-semibold text-foreground">
                          {title}
                        </h3>
                        <Badge
                          variant="outline"
                          className="font-mono text-[10px] uppercase tracking-wide"
                        >
                          {roadmapBadge}
                        </Badge>
                      </div>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </GlassPanel>
          </div>

          {/* Explicit compliance caveat - required. Translated in full (AR keeps
              every "not currently…" disclaimer; see dictionary-ielts-partners.ts). */}
          <p className="mx-auto mt-8 max-w-3xl text-center text-xs leading-relaxed text-muted-foreground">
            {await t('ielts.partners.overview.roadmap.caveat')}
          </p>
        </div>
      </section>

      {/* 6. CTA */}
      <section aria-labelledby="cta-heading" className="border-t border-border/60">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 sm:py-20">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <Mail className="h-5 w-5" aria-hidden />
          </span>
          <h2
            id="cta-heading"
            className="mt-5 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            {await t('ielts.partners.overview.cta.heading')}
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-muted-foreground">
            {await t('ielts.partners.overview.cta.lede')}
          </p>
          <ul className="mx-auto mt-8 flex max-w-md flex-col gap-3 text-left text-sm text-muted-foreground">
            {[
              await t('ielts.partners.overview.cta.bullet_walkthrough'),
              await t('ielts.partners.overview.cta.bullet_bulk'),
              await t('ielts.partners.overview.cta.bullet_pilot'),
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
              {await t('ielts.partners.overview.cta.button')}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
