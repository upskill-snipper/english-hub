import Link from 'next/link'
import {
  ArrowRight,
  Building2,
  ClipboardCheck,
  Gauge,
  GraduationCap,
  Info,
  Layers,
  ListChecks,
  Receipt,
  ShieldAlert,
  Users2,
  XCircle,
} from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { PRICING } from '@/constants/pricing'
import { EAL } from '@/lib/eal/curriculum'
import { t } from '@/lib/i18n/t'

import { CohortEnquiryForm } from './CohortEnquiryForm'

// ─── /business-english - the organisation / institutional surface ──────────
//
// Built 2026-08-23 from capability that ALREADY SHIPS. The founder wants
// corporates served alongside students, teachers and schools; this is the
// smallest offer the current product can actually deliver, described
// without inflation.
//
// The honesty contract for this file, because this is a children's product
// and invented data is the exact defect class the team spent the day
// removing:
//
//   · NO client names, logos, case studies, testimonials, headcounts,
//     "trusted by" strips, outcome percentages or band-gain claims. None
//     exist, so none appear. Do not add them without evidence.
//   · Every number rendered here is READ FROM SOURCE, never typed:
//       topic / exercise counts  <- src/lib/eal/curriculum.ts
//       IELTS prices             <- src/constants/pricing.ts
//     so the copy cannot drift away from the product the way a hardcoded
//     stat does.
//   · The fair-use figures (10 writing, 30 speaking per learner per day)
//     are the real rate limits in /api/ielts/writing-feedback and
//     /api/ielts/speaking-feedback.
//   · The "What is not included" section is deliberately given the same
//     visual weight as the capability section. Implying an enterprise
//     feature set that does not exist (SSO, LMS integration, seat
//     management, accredited certification) is the failure mode this
//     page is designed to avoid.
//
// Server component so all copy is in the HTML for crawlers and resolves
// the request locale (en/ar/es) through the server `t()` helper. Exactly
// one <h1>. Metadata + breadcrumb live in layout.tsx. Only the enquiry
// form is a client island.
// ──────────────────────────────────────────────────────────────────────────

export default async function BusinessEnglishPage() {
  // ── Real counts, read from the curriculum rather than asserted ─────────
  const topicCount = EAL.topics.length
  const exerciseSetCount = EAL.topics.reduce((n, topic) => n + topic.exercises.length, 0)

  // ── Copy (mkt.biz.* lives in dictionary-mkt-eal.ts) ────────────────────
  const copy = {
    badge: await t('mkt.biz.badge'),
    heading: await t('mkt.biz.heading'),
    lead: await t('mkt.biz.lead'),
    ctaPrimary: await t('mkt.biz.cta_primary'),
    ctaSecondary: await t('mkt.biz.cta_secondary'),

    scopeTitle: await t('mkt.biz.scope.title'),
    scopeBody: await t('mkt.biz.scope.body'),

    capsHeading: await t('mkt.biz.caps.heading'),
    capsLead: await t('mkt.biz.caps.lead'),
    ealTitle: await t('mkt.biz.cap.eal.title'),
    ealDesc: (await t('mkt.biz.cap.eal.desc'))
      .replace('{topics}', String(topicCount))
      .replace('{exercises}', String(exerciseSetCount)),
    ealLink: await t('mkt.biz.cap.eal.link'),
    placementTitle: await t('mkt.biz.cap.placement.title'),
    placementDesc: await t('mkt.biz.cap.placement.desc'),
    placementLink: await t('mkt.biz.cap.placement.link'),
    ieltsTitle: await t('mkt.biz.cap.ielts.title'),
    ieltsDesc: await t('mkt.biz.cap.ielts.desc'),
    ieltsLink: await t('mkt.biz.cap.ielts.link'),
    fairUse: await t('mkt.biz.cap.fairuse'),

    cohortHeading: await t('mkt.biz.cohort.heading'),
    cohortBody: await t('mkt.biz.cohort.body'),
    cohortPoints: [
      await t('mkt.biz.cohort.point1'),
      await t('mkt.biz.cohort.point2'),
      await t('mkt.biz.cohort.point3'),
    ],
    cohortCaveat: await t('mkt.biz.cohort.caveat'),

    exclHeading: await t('mkt.biz.excl.heading'),
    exclLead: await t('mkt.biz.excl.lead'),
    exclItems: [
      await t('mkt.biz.excl.item1'),
      await t('mkt.biz.excl.item2'),
      await t('mkt.biz.excl.item3'),
      await t('mkt.biz.excl.item4'),
      await t('mkt.biz.excl.item5'),
      await t('mkt.biz.excl.item6'),
    ],

    pricingHeading: await t('mkt.biz.pricing.heading'),
    pricingIelts: (await t('mkt.biz.pricing.ielts'))
      .replace('{monthly}', String(PRICING.IELTS_MONTHLY))
      .replace('{annual}', String(PRICING.IELTS_ANNUAL)),
    pricingEal: await t('mkt.biz.pricing.eal'),
    pricingVolume: await t('mkt.biz.pricing.volume'),
    pricingLink: await t('mkt.biz.pricing.link'),

    nextHeading: await t('mkt.biz.next.heading'),
    nextSteps: [
      await t('mkt.biz.next.step1'),
      await t('mkt.biz.next.step2'),
      await t('mkt.biz.next.step3'),
      await t('mkt.biz.next.step4'),
    ],

    formHeading: await t('mkt.biz.form.heading'),
    formLead: await t('mkt.biz.form.lead'),

    footData: await t('mkt.biz.foot.data'),
    footPrivacyLink: await t('mkt.biz.foot.privacy_link'),
    footSchools: await t('mkt.biz.foot.schools'),
  }

  const capabilities = [
    {
      icon: Layers,
      tone: 'text-teal-400',
      bg: 'bg-teal-500/10',
      title: copy.ealTitle,
      desc: copy.ealDesc,
      href: '/eal',
      linkLabel: copy.ealLink,
    },
    {
      icon: ClipboardCheck,
      tone: 'text-primary',
      bg: 'bg-primary/10',
      title: copy.placementTitle,
      desc: copy.placementDesc,
      href: '/eal/diagnostic',
      linkLabel: copy.placementLink,
    },
    {
      icon: Gauge,
      tone: 'text-violet-400',
      bg: 'bg-violet-500/10',
      title: copy.ieltsTitle,
      desc: copy.ieltsDesc,
      href: '/ielts',
      linkLabel: copy.ieltsLink,
    },
  ]

  return (
    <div className="space-y-10 pb-16">
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="biz-hero-heading"
        className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-primary/[0.04] p-6 sm:p-8 lg:p-10"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-primary/[0.05] blur-3xl"
        />
        <div className="relative">
          <Badge variant="secondary" className="mb-4">
            <Building2 className="mr-1 size-3" aria-hidden="true" />
            <span dir="auto">{copy.badge}</span>
          </Badge>
          <h1
            id="biz-hero-heading"
            className="text-display-sm font-heading text-foreground sm:text-display"
            dir="auto"
          >
            {copy.heading}
          </h1>
          <p className="mt-3 max-w-3xl text-body-lg text-muted-foreground" dir="auto">
            {copy.lead}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button size="lg" render={<Link href="#enquire" />}>
              <span dir="auto">{copy.ctaPrimary}</span>
              <ArrowRight className="size-4" aria-hidden="true" />
            </Button>
            <Button variant="outline" size="lg" render={<Link href="/eal/diagnostic" />}>
              <span dir="auto">{copy.ctaSecondary}</span>
            </Button>
          </div>
        </div>
      </section>

      {/* ── Scope honesty: what this platform actually is ──────────────── */}
      <section aria-labelledby="biz-scope-heading">
        <div className="rounded-2xl border border-amber-500/25 bg-amber-500/[0.04] p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/10">
              <Info className="size-5 text-amber-400" aria-hidden="true" />
            </div>
            <div>
              <h2
                id="biz-scope-heading"
                className="text-heading-md font-heading text-foreground"
                dir="auto"
              >
                {copy.scopeTitle}
              </h2>
              <p
                className="mt-2 max-w-3xl text-body-sm leading-relaxed text-muted-foreground"
                dir="auto"
              >
                {copy.scopeBody}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Capabilities ──────────────────────────────────────────────── */}
      <section aria-labelledby="biz-caps-heading">
        <div className="mb-5">
          <div className="flex items-center gap-3">
            <GraduationCap className="size-5 text-primary" aria-hidden="true" />
            <h2
              id="biz-caps-heading"
              className="text-heading-lg font-heading text-foreground"
              dir="auto"
            >
              {copy.capsHeading}
            </h2>
          </div>
          <p className="mt-2 max-w-3xl text-body-sm text-muted-foreground" dir="auto">
            {copy.capsLead}
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {capabilities.map((cap) => (
            <Card key={cap.title} className="flex flex-col">
              <CardHeader>
                <div
                  className={`mb-3 flex size-10 items-center justify-center rounded-xl ${cap.bg}`}
                >
                  <cap.icon className={`size-5 ${cap.tone}`} aria-hidden="true" />
                </div>
                <CardTitle dir="auto">{cap.title}</CardTitle>
                <CardDescription className="leading-relaxed" dir="auto">
                  {cap.desc}
                </CardDescription>
                <Link
                  href={cap.href}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                >
                  <span dir="auto">{cap.linkLabel}</span>
                  <ArrowRight className="size-3.5" aria-hidden="true" />
                </Link>
              </CardHeader>
            </Card>
          ))}
        </div>

        <p className="mt-4 flex items-start gap-2 text-caption text-muted-foreground" dir="auto">
          <ShieldAlert className="mt-0.5 size-3.5 shrink-0" aria-hidden="true" />
          {copy.fairUse}
        </p>
      </section>

      {/* ── Cohort visibility ─────────────────────────────────────────── */}
      <section aria-labelledby="biz-cohort-heading">
        <div className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-teal-500/10">
              <Users2 className="size-6 text-teal-400" aria-hidden="true" />
            </div>
            <div className="min-w-0">
              <h2
                id="biz-cohort-heading"
                className="text-heading-md font-heading text-foreground"
                dir="auto"
              >
                {copy.cohortHeading}
              </h2>
              <p className="mt-2 max-w-3xl text-body-sm text-muted-foreground" dir="auto">
                {copy.cohortBody}
              </p>
              <ul className="mt-4 space-y-3">
                {copy.cohortPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <ListChecks
                      className="mt-0.5 size-4 shrink-0 text-teal-400"
                      aria-hidden="true"
                    />
                    <span className="text-body-sm text-muted-foreground" dir="auto">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
              <p
                className="mt-4 border-t border-border/60 pt-4 text-caption text-muted-foreground"
                dir="auto"
              >
                {copy.cohortCaveat}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── What is NOT included ──────────────────────────────────────── */}
      <section aria-labelledby="biz-excl-heading">
        <div className="rounded-2xl border border-border/60 bg-muted/20 p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <XCircle className="size-5 text-muted-foreground" aria-hidden="true" />
            <h2
              id="biz-excl-heading"
              className="text-heading-lg font-heading text-foreground"
              dir="auto"
            >
              {copy.exclHeading}
            </h2>
          </div>
          <p className="mt-2 max-w-3xl text-body-sm text-muted-foreground" dir="auto">
            {copy.exclLead}
          </p>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {copy.exclItems.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl border border-border/40 bg-background/40 px-4 py-3"
              >
                <XCircle
                  className="mt-0.5 size-4 shrink-0 text-muted-foreground/70"
                  aria-hidden="true"
                />
                <span className="text-body-sm text-muted-foreground" dir="auto">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Pricing ───────────────────────────────────────────────────── */}
      <section aria-labelledby="biz-pricing-heading">
        <div className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
              <Receipt className="size-5 text-primary" aria-hidden="true" />
            </div>
            <div>
              <h2
                id="biz-pricing-heading"
                className="text-heading-md font-heading text-foreground"
                dir="auto"
              >
                {copy.pricingHeading}
              </h2>
              <div className="mt-3 space-y-3 text-body-sm text-muted-foreground">
                <p dir="auto">{copy.pricingIelts}</p>
                <p dir="auto">{copy.pricingEal}</p>
                <p dir="auto">{copy.pricingVolume}</p>
              </div>
              <Link
                href="/pricing"
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
              >
                <span dir="auto">{copy.pricingLink}</span>
                <ArrowRight className="size-3.5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── What happens next ─────────────────────────────────────────── */}
      <section aria-labelledby="biz-next-heading">
        <h2
          id="biz-next-heading"
          className="mb-5 text-heading-lg font-heading text-foreground"
          dir="auto"
        >
          {copy.nextHeading}
        </h2>
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {copy.nextSteps.map((step, i) => (
            <li
              key={step}
              className="rounded-2xl border border-border/60 bg-card p-5 text-body-sm text-muted-foreground"
            >
              <span
                className="mb-3 inline-flex size-8 items-center justify-center rounded-lg bg-primary/10 text-sm font-semibold text-primary"
                aria-hidden="true"
              >
                {i + 1}
              </span>
              <p dir="auto">{step}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* ── Enquiry form ──────────────────────────────────────────────── */}
      <section
        id="enquire"
        aria-labelledby="biz-form-heading"
        className="scroll-mt-24 rounded-2xl border border-primary/25 bg-gradient-to-br from-primary/[0.06] via-card to-violet-500/[0.04] p-6 sm:p-8"
      >
        <div className="mx-auto max-w-2xl">
          <h2
            id="biz-form-heading"
            className="text-heading-lg font-heading text-foreground"
            dir="auto"
          >
            {copy.formHeading}
          </h2>
          <p className="mb-6 mt-2 text-body-sm text-muted-foreground" dir="auto">
            {copy.formLead}
          </p>
          <CohortEnquiryForm />
        </div>
      </section>

      {/* ── Footnotes ─────────────────────────────────────────────────── */}
      <section aria-label="Additional information">
        <div className="space-y-3 text-caption text-muted-foreground">
          <p dir="auto">
            {copy.footData}{' '}
            <Link href="/legal/privacy" className="text-primary hover:underline">
              {copy.footPrivacyLink}
            </Link>
            .
          </p>
          <p dir="auto">
            {copy.footSchools}{' '}
            <Link href="/schools" className="text-primary hover:underline">
              /schools
            </Link>
          </p>
        </div>
      </section>
    </div>
  )
}
