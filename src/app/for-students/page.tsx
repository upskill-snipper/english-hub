import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { InfographicBanner } from '@/components/marketing/InfographicBanner'
import { BreadcrumbJsonLd, FAQPageJsonLd } from '@/components/seo/json-ld'
import {
  BookOpen,
  Target,
  TrendingUp,
  Globe2,
  Sparkles,
  ArrowRight,
  GraduationCap,
  Rocket,
} from 'lucide-react'
import { t, tMany } from '@/lib/i18n/t'

export const metadata = {
  title: 'GCSE and IGCSE English revision for students',
  description:
    'Personalised English revision built around your exam board. AI-marked essays, anthology guides, mock papers and grade tracking. Free to start.',
  alternates: { canonical: 'https://theenglishhub.app/for-students' },
  openGraph: {
    title: 'GCSE and IGCSE English revision for students - The English Hub',
    description:
      'Personalised English revision built around your exam board. AI-marked essays, anthology guides, mock papers and grade tracking. Free to start.',
    images: [
      {
        url: '/api/og?title=Your+English+revision,+in+one+place&subtitle=GCSE+and+IGCSE+%E2%80%94+built+around+your+exam+board',
        width: 1200,
        height: 630,
        alt: 'Your English revision, in one place - GCSE and IGCSE built around your exam board',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GCSE and IGCSE English revision for students - The English Hub',
    description:
      'Personalised English revision built around your exam board. AI-marked essays, anthology guides, mock papers and grade tracking. Free to start.',
    images: [
      '/api/og?title=Your+English+revision,+in+one+place&subtitle=GCSE+and+IGCSE+%E2%80%94+built+around+your+exam+board',
    ],
  },
}

// ─── /for-students ──────────────────────────────────────────────────────────
//
// Student-facing marketing page. The infographic banner up top is the
// one-glance product summary. The body repeats the main value props in
// scannable text + points the visitor to registration.
//
// All copy routes through the `student.*` namespace in
// src/lib/i18n/dictionary.ts.
// ────────────────────────────────────────────────────────────────────────────

const featureKeys = [
  {
    icon: BookOpen,
    title: 'student.feature.all_in_one.title',
    desc: 'student.feature.all_in_one.desc',
  },
  {
    icon: Target,
    title: 'student.feature.personalised.title',
    desc: 'student.feature.personalised.desc',
  },
  {
    icon: TrendingUp,
    title: 'student.feature.track.title',
    desc: 'student.feature.track.desc',
  },
  {
    icon: Globe2,
    title: 'student.feature.real_world.title',
    desc: 'student.feature.real_world.desc',
  },
] as const

const outcomeKeys = [
  { icon: GraduationCap, key: 'student.outcome.better_grades' },
  { icon: Rocket, key: 'student.outcome.confidence' },
  { icon: Globe2, key: 'student.outcome.global' },
  { icon: Sparkles, key: 'student.outcome.future' },
] as const

const faqKeyPairs = [
  { q: 'student.faq.boards.q', a: 'student.faq.boards.a' },
  { q: 'student.faq.trial.q', a: 'student.faq.trial.a' },
  { q: 'student.faq.ai.q', a: 'student.faq.ai.a' },
  { q: 'student.faq.switch.q', a: 'student.faq.switch.a' },
  { q: 'student.faq.cost.q', a: 'student.faq.cost.a' },
] as const

export default async function ForStudentsPage() {
  // Resolve all i18n strings up-front.
  const [
    badge,
    heroPre,
    heroEmph,
    heroSubtitle,
    ctaStartFree,
    ctaSeePricing,
    uspTitle,
    uspBody,
    faqHeading,
    bottomTitle,
    bottomBody,
    bottomCtaCreate,
    bottomCtaCompare,
  ] = await tMany([
    'student.badge',
    'student.hero.title_pre',
    'student.hero.title_emph',
    'student.hero.subtitle',
    'student.cta.start_free',
    'student.cta.see_pricing',
    'student.usp.title',
    'student.usp.body',
    'student.faq.heading',
    'student.bottom.title',
    'student.bottom.body',
    'student.bottom.cta_create',
    'student.bottom.cta_compare',
  ])

  const features = await Promise.all(
    featureKeys.map(async (f) => ({
      icon: f.icon,
      title: await t(f.title),
      desc: await t(f.desc),
    })),
  )

  const outcomes = await Promise.all(
    outcomeKeys.map(async (o) => ({ icon: o.icon, label: await t(o.key) })),
  )

  const faqs = await Promise.all(
    faqKeyPairs.map(async (pair) => ({
      question: await t(pair.q),
      answer: await t(pair.a),
    })),
  )

  return (
    <main className="min-h-screen bg-background">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'For Students', url: 'https://theenglishhub.app/for-students' },
        ]}
      />
      {/* Infographic banner - one-glance product summary for students */}
      {/* TODO(designer): regenerate /infographics/for-students.png to remove "Aanya, Student" testimonial */}
      <InfographicBanner
        src="/infographics/for-students.png"
        alt="Infographic: GCSE and IGCSE English revision in one place. Shows progress toward goals, skills being built (reading, writing, listening, speaking), all-in-one learning, personalised recommendations, progress tracking, and real-world confidence."
      />

      {/* Hero + CTAs */}
      <section className="relative overflow-hidden pt-10 pb-16 sm:pt-14 sm:pb-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-primary/[0.06] rounded-full blur-[140px] pointer-events-none" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <Badge
            variant="outline"
            className="border-primary/20 bg-primary/[0.06] text-primary text-sm font-semibold mb-6 gap-2 px-4 py-1.5"
          >
            <GraduationCap className="w-4 h-4" />
            {badge}
          </Badge>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground">
            {heroPre} <span className="text-primary">{heroEmph}</span>
          </h1>
          <p className="mt-5 max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed">
            {heroSubtitle}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              size="lg"
              className="text-base h-12 px-6"
              render={<Link href="/auth/register" />}
            >
              {ctaStartFree}
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base h-12 px-6"
              render={<Link href="/pricing" />}
            >
              {ctaSeePricing}
            </Button>
          </div>
        </div>
      </section>

      {/* Feature grid */}
      <section className="px-4 sm:px-6 pb-20">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((f) => {
              const Icon = f.icon
              return (
                <Card key={f.title} className="border-border/40">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{f.title}</h3>
                        <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                          {f.desc}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* USP banner */}
      <section className="px-4 sm:px-6 pb-20">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/[0.08] to-primary/[0.02] p-8 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Sparkles className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-foreground">{uspTitle}</h2>
            <p className="mt-3 max-w-xl mx-auto text-muted-foreground">{uspBody}</p>
          </div>
        </div>
      </section>

      {/* Outcomes strip */}
      <section className="border-y border-border/40 bg-muted/20 py-10 px-4 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {outcomes.map((o) => {
              const Icon = o.icon
              return (
                <div key={o.label} className="flex flex-col items-center gap-2">
                  <Icon className="h-6 w-6 text-primary" />
                  <p className="text-sm font-medium text-foreground">{o.label}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQ section - also emits FAQPage JSON-LD below for rich results */}
      <section className="px-4 sm:px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-center">
            {faqHeading}
          </h2>
          <dl className="mt-8 space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-xl border border-border/40 p-6">
                <dt className="font-semibold text-foreground">{faq.question}</dt>
                <dd className="mt-2 text-sm text-muted-foreground leading-relaxed">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-4 sm:px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">{bottomTitle}</h2>
          <p className="mt-3 text-muted-foreground">{bottomBody}</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              size="lg"
              className="text-base h-12 px-6"
              render={<Link href="/auth/register" />}
            >
              {bottomCtaCreate}
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base h-12 px-6"
              render={<Link href="/pricing" />}
            >
              {bottomCtaCompare}
            </Button>
          </div>
        </div>
      </section>

      <FAQPageJsonLd faqs={faqs} />
    </main>
  )
}
