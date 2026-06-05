'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  Sparkles,
  Heart,
  PoundSterling,
  Rocket,
  ClipboardCheck,
  UserCheck,
  Share2,
  TrendingUp,
  BarChart3,
  Link2,
  Headphones,
  FileText,
  GraduationCap,
  Clock,
  ChevronDown,
  ChevronUp,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  Users,
  Award,
} from 'lucide-react'
import { useT } from '@/lib/i18n/use-t'

interface AffiliatePublicPageProps {
  applicationStatus?: string
  isLoggedIn?: boolean
}

export default function AffiliatePublicPage({
  applicationStatus,
  isLoggedIn,
}: AffiliatePublicPageProps) {
  return (
    <div className="min-h-screen">
      <HeroSection applicationStatus={applicationStatus} isLoggedIn={isLoggedIn} />
      {applicationStatus && <StatusBanner status={applicationStatus} />}
      <WhyPartnerSection />
      <HowItWorksSection />
      <CommissionSection />
      <ImpactSection />
      <WhatYouGetSection />
      <FAQSection />
      <ApplicationSection isLoggedIn={isLoggedIn} />
      <ProgramBasicsSection />
      <BottomCTA isLoggedIn={isLoggedIn} applicationStatus={applicationStatus} />
    </div>
  )
}

/* ─── Hero ──────────────────────────────────────────────────── */

function HeroSection({
  applicationStatus,
  isLoggedIn,
}: {
  applicationStatus?: string
  isLoggedIn?: boolean
}) {
  const t = useT()
  return (
    <section className="relative px-4 pt-24 pb-20 sm:pt-32 sm:pb-28 text-center overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/[0.06] rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
          <Sparkles className="w-4 h-4" />
          {t('aff_comp.public.partnership_badge')}
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
          {t('aff_comp.public.hero.title_part1')}{' '}
          <span className="text-primary">{t('aff_comp.public.hero.title_brand')}</span>
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          {t('aff_comp.public.hero.subtitle')}
        </p>

        {!applicationStatus && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="text-base px-10 h-13 shadow-lg shadow-primary/20"
              render={<a href="#apply" />}
            >
              {t('aff_comp.public.cta.get_code')}
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-base px-8 h-13"
              render={<a href="#how-it-works" />}
            >
              {t('aff_comp.public.cta.learn_more')}
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}

/* ─── Status Banner ─────────────────────────────────────────── */

function StatusBanner({ status }: { status: string }) {
  const t = useT()
  const config: Record<
    string,
    { icon: typeof Clock; titleKey: string; messageKey: string; color: string }
  > = {
    pending: {
      icon: Clock,
      titleKey: 'aff_comp.public.status.pending.title',
      messageKey: 'aff_comp.public.status.pending.message',
      color: 'bg-blue-500/10 border-blue-500/30 text-blue-400',
    },
    agreement_sent: {
      icon: FileText,
      titleKey: 'aff_comp.public.status.agreement_sent.title',
      messageKey: 'aff_comp.public.status.agreement_sent.message',
      color: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400',
    },
    agreement_signed: {
      icon: CheckCircle2,
      titleKey: 'aff_comp.public.status.agreement_signed.title',
      messageKey: 'aff_comp.public.status.agreement_signed.message',
      color: 'bg-primary/10 border-primary/30 text-primary',
    },
  }

  const c = config[status]
  if (!c) return null
  const Icon = c.icon

  return (
    <section className="px-4 pb-8">
      <div className="max-w-3xl mx-auto">
        <div className={`rounded-2xl border p-6 sm:p-8 text-center ${c.color}`}>
          <Icon className="w-8 h-8 mx-auto mb-3" />
          <h2 className="text-xl font-semibold text-foreground mb-2">{t(c.titleKey)}</h2>
          <p className="text-muted-foreground">{t(c.messageKey)}</p>
        </div>
      </div>
    </section>
  )
}

/* ─── Why Partner ────────────────────────────────────────────── */

function WhyPartnerSection() {
  const t = useT()
  const reasons = [
    {
      icon: Heart,
      color: 'text-rose-400 bg-rose-500/10',
      titleKey: 'aff_comp.public.why.reason1.title',
      descKey: 'aff_comp.public.why.reason1.desc',
    },
    {
      icon: PoundSterling,
      color: 'text-emerald-400 bg-emerald-500/10',
      titleKey: 'aff_comp.public.why.reason2.title',
      descKey: 'aff_comp.public.why.reason2.desc',
    },
    {
      icon: Rocket,
      color: 'text-primary bg-primary/10',
      titleKey: 'aff_comp.public.why.reason3.title',
      descKey: 'aff_comp.public.why.reason3.desc',
    },
  ]

  return (
    <section className="px-4 py-20 sm:py-24">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {t('aff_comp.public.why.heading')}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t('aff_comp.public.why.subheading')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reasons.map((r) => (
            <Card
              key={r.titleKey}
              className="text-center p-0 border-border/40 hover:border-border/80 transition-colors"
            >
              <CardContent className="pt-8 pb-8 px-6">
                <div
                  className={`w-14 h-14 rounded-2xl ${r.color} flex items-center justify-center mx-auto mb-5`}
                >
                  <r.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{t(r.titleKey)}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{t(r.descKey)}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── How It Works ───────────────────────────────────────────── */

function HowItWorksSection() {
  const t = useT()
  const steps = [
    {
      icon: ClipboardCheck,
      titleKey: 'aff_comp.public.how.step1.title',
      descKey: 'aff_comp.public.how.step1.desc',
    },
    {
      icon: UserCheck,
      titleKey: 'aff_comp.public.how.step2.title',
      descKey: 'aff_comp.public.how.step2.desc',
    },
    {
      icon: Share2,
      titleKey: 'aff_comp.public.how.step3.title',
      descKey: 'aff_comp.public.how.step3.desc',
    },
    {
      icon: TrendingUp,
      titleKey: 'aff_comp.public.how.step4.title',
      descKey: 'aff_comp.public.how.step4.desc',
    },
  ]

  return (
    <section id="how-it-works" className="px-4 py-20 sm:py-24 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {t('aff_comp.public.how.heading')}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t('aff_comp.public.how.subheading')}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-border" />

          {steps.map((step, i) => (
            <div key={step.titleKey} className="relative text-center">
              {/* Step number circle */}
              <div className="relative mx-auto mb-5">
                <div className="w-20 h-20 rounded-full bg-card border-2 border-primary/20 flex items-center justify-center mx-auto relative z-10">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center z-20">
                  {i + 1}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{t(step.titleKey)}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-[240px] mx-auto">
                {t(step.descKey)}
              </p>
            </div>
          ))}
        </div>

        {/* Annual-only commission rule - most important fact for new affiliates. */}
        <div className="mt-12 max-w-3xl mx-auto rounded-2xl border border-amber-500/30 bg-amber-500/10 p-6 text-center">
          <p className="text-sm font-semibold text-foreground">
            {t('aff_comp.public.how.annual_only_lead')}
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            {t('aff_comp.public.how.annual_only_body')}
          </p>
        </div>
      </div>
    </section>
  )
}

/* ─── Commission Structure ───────────────────────────────────── */

function CommissionSection() {
  const t = useT()
  // Audit remediation (M15, 2026-05-19): the previous hard-coded
  // per-signup commission table (£5/£15/£7/£20) contradicted the
  // single-programme partner copy and the /creators page. Per the
  // anti-hallucination contract no reconciled rate is invented here -
  // the live, verified commission for each referral is shown in the
  // partner dashboard. The canonical commission structure is an open
  // business decision (see BUSINESS-DECISIONS-NEEDED.md).
  return (
    <section className="px-4 py-20 sm:py-24">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {t('aff_comp.public.commission.heading')}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t('aff_comp.public.commission.subheading')}
          </p>
        </div>

        <Card className="border-border/40 p-7">
          <p className="text-foreground leading-relaxed">
            One programme, one set of terms. We don&rsquo;t publish earnings figures we can&rsquo;t
            yet evidence - your partner dashboard shows your real, verified referrals and the exact
            commission for each one, from day one.
          </p>
        </Card>
      </div>
    </section>
  )
}

/* ─── Your Impact ────────────────────────────────────────────── */

function ImpactSection() {
  const t = useT()
  // 2026-04-25: previous stats ("2,400+ Students using the platform",
  // "15,000+ Essays marked by AI", "4.8/5 Average student rating") were
  // not verifiable at launch and have been withdrawn per brand-voice §11.5.
  // Same for the previous fabricated "Sophie T." testimonial. Real Founding
  // Creator testimonials will be added once consenting partners join.
  const stats = [
    {
      valueKey: 'aff_comp.public.impact.stat1.value',
      labelKey: 'aff_comp.public.impact.stat1.label',
      icon: GraduationCap,
    },
    {
      valueKey: 'aff_comp.public.impact.stat2.value',
      labelKey: 'aff_comp.public.impact.stat2.label',
      icon: Users,
    },
    {
      valueKey: 'aff_comp.public.impact.stat3.value',
      labelKey: 'aff_comp.public.impact.stat3.label',
      icon: Award,
    },
  ]

  const testimonials: Array<{ quote: string; name: string; role: string }> = [
    // 2026-04-25: previous "Sophie T." and "Mr. James R." testimonials were
    // fabricated and have been removed. This array stays empty until real
    // Founding Creator quotes are captured with explicit reuse consent.
  ]

  return (
    <section className="px-4 py-20 sm:py-24 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {t('aff_comp.public.impact.heading')}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t('aff_comp.public.impact.subheading')}
          </p>
        </div>

        {/* Stats */}
        <div className="grid sm:grid-cols-3 gap-6 mb-14">
          {stats.map((s) => (
            <Card key={s.labelKey} className="text-center p-0 border-border/40">
              <CardContent className="py-8 px-6">
                <s.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-foreground mb-1">{t(s.valueKey)}</div>
                <div className="text-sm text-muted-foreground">{t(s.labelKey)}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials */}
        {testimonials.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((tm) => (
              <Card key={tm.name} className="p-0 border-border/40">
                <CardContent className="py-8 px-6">
                  <p className="text-foreground leading-relaxed mb-5 italic">
                    &ldquo;{tm.quote}&rdquo;
                  </p>
                  <div>
                    <div className="font-semibold text-foreground">{tm.name}</div>
                    <div className="text-sm text-muted-foreground">{tm.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="max-w-2xl mx-auto text-center">
            <Card className="p-8 border-dashed border-border/60 bg-card/40">
              <p className="text-muted-foreground italic">
                {t('aff_comp.public.impact.empty_testimonials')}
              </p>
            </Card>
          </div>
        )}
      </div>
    </section>
  )
}

/* ─── What You Get ───────────────────────────────────────────── */

function WhatYouGetSection() {
  const t = useT()
  const perks = [
    { icon: Link2, textKey: 'aff_comp.public.what_you_get.perk1' },
    { icon: BarChart3, textKey: 'aff_comp.public.what_you_get.perk2' },
    { icon: GraduationCap, textKey: 'aff_comp.public.what_you_get.perk3' },
    { icon: FileText, textKey: 'aff_comp.public.what_you_get.perk4' },
    { icon: Headphones, textKey: 'aff_comp.public.what_you_get.perk5' },
    { icon: Award, textKey: 'aff_comp.public.what_you_get.perk6' },
  ]

  return (
    <section className="px-4 py-20 sm:py-24">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {t('aff_comp.public.what_you_get.heading')}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t('aff_comp.public.what_you_get.subheading')}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {perks.map((p) => (
            <div
              key={p.textKey}
              className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border/40 hover:border-border/80 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <p.icon className="w-5 h-5 text-primary" />
              </div>
              <p className="text-foreground text-sm leading-relaxed pt-2">{t(p.textKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── FAQ ─────────────────────────────────────────────────────── */

function FAQSection() {
  const t = useT()
  const faqs = [
    { qKey: 'aff_comp.public.faq.q1.q', aKey: 'aff_comp.public.faq.q1.a' },
    { qKey: 'aff_comp.public.faq.q2.q', aKey: 'aff_comp.public.faq.q2.a' },
    { qKey: 'aff_comp.public.faq.q3.q', aKey: 'aff_comp.public.faq.q3.a' },
    { qKey: 'aff_comp.public.faq.q4.q', aKey: 'aff_comp.public.faq.q4.a' },
    { qKey: 'aff_comp.public.faq.q5.q', aKey: 'aff_comp.public.faq.q5.a' },
    { qKey: 'aff_comp.public.faq.q6.q', aKey: 'aff_comp.public.faq.q6.a' },
    { qKey: 'aff_comp.public.faq.q7.q', aKey: 'aff_comp.public.faq.q7.a' },
    { qKey: 'aff_comp.public.faq.q8.q', aKey: 'aff_comp.public.faq.q8.a' },
  ]

  return (
    <section className="px-4 py-20 sm:py-24 bg-muted/30">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {t('aff_comp.public.faq.heading')}
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((f) => (
            <FAQ key={f.qKey} q={t(f.qKey)} a={t(f.aKey)} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FAQ({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="rounded-xl bg-card border border-border/40 overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-muted/30 transition-colors"
      >
        <span className="font-medium text-foreground pr-4">{q}</span>
        {open ? (
          <ChevronUp className="w-4 h-4 text-muted-foreground shrink-0" />
        ) : (
          <ChevronDown className="w-4 h-4 text-muted-foreground shrink-0" />
        )}
      </button>
      {open && <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{a}</div>}
    </div>
  )
}

/* ─── Application Section ────────────────────────────────────── */

function ApplicationSection({ isLoggedIn }: { isLoggedIn?: boolean }) {
  const t = useT()
  return (
    <section id="apply" className="px-4 py-20 sm:py-24">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {t('aff_comp.public.apply.heading')}
          </h2>
          <p className="text-muted-foreground text-lg">
            {isLoggedIn
              ? t('aff_comp.public.apply.subheading_logged_in')
              : t('aff_comp.public.apply.subheading_logged_out')}
          </p>
          <p className="mt-3 text-sm text-muted-foreground max-w-xl mx-auto">
            <span className="font-semibold text-foreground">
              {t('aff_comp.public.apply.annual_only_note_lead')}
            </span>{' '}
            {t('aff_comp.public.apply.annual_only_note_body')}
          </p>
        </div>

        {isLoggedIn ? (
          <EnrolForm />
        ) : (
          <Card className="p-0 border-border/40">
            <CardContent className="py-12 px-6 text-center">
              <UserCheck className="w-12 h-12 text-primary mx-auto mb-5" />
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {t('aff_comp.public.apply.signin_first')}
              </h3>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                {t('aff_comp.public.apply.signin_blurb')}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  size="lg"
                  className="text-base px-8 h-12"
                  render={<Link href="/auth/register?redirect=/affiliates%23apply" />}
                >
                  {t('aff_comp.public.apply.create_account')}
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-base px-8 h-12"
                  render={<Link href="/auth/login?redirect=/affiliates%23apply" />}
                >
                  {t('aff_comp.public.apply.sign_in')}
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  )
}

/* ─── Program Basics ─────────────────────────────────────────── */

function ProgramBasicsSection() {
  const t = useT()
  return (
    <section className="px-4 py-16 sm:py-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8 text-center">
          {t('aff_comp.public.basics.heading')}
        </h2>
        <dl className="grid md:grid-cols-2 gap-4">
          <div className="p-6 rounded-lg border border-border/40 bg-card">
            <dt className="font-semibold text-foreground mb-2">
              {t('aff_comp.public.basics.attribution.title')}
            </dt>
            <dd className="text-muted-foreground">
              {t('aff_comp.public.basics.attribution.desc')}
            </dd>
          </div>
          <div className="p-6 rounded-lg border border-border/40 bg-card">
            <dt className="font-semibold text-foreground mb-2">
              {t('aff_comp.public.basics.min_payout.title')}
            </dt>
            <dd className="text-muted-foreground">{t('aff_comp.public.basics.min_payout.desc')}</dd>
          </div>
          <div className="p-6 rounded-lg border border-border/40 bg-card">
            <dt className="font-semibold text-foreground mb-2">
              {t('aff_comp.public.basics.ltv.title')}
            </dt>
            <dd className="text-muted-foreground">{t('aff_comp.public.basics.ltv.desc')}</dd>
          </div>
          <div className="p-6 rounded-lg border border-border/40 bg-card">
            <dt className="font-semibold text-foreground mb-2">
              {t('aff_comp.public.basics.commission.title')}
            </dt>
            <dd className="text-muted-foreground">{t('aff_comp.public.basics.commission.desc')}</dd>
          </div>
        </dl>
      </div>
    </section>
  )
}

/* ─── Bottom CTA ─────────────────────────────────────────────── */

function BottomCTA({
  isLoggedIn,
  applicationStatus,
}: {
  isLoggedIn?: boolean
  applicationStatus?: string
}) {
  const t = useT()
  if (applicationStatus) return null

  return (
    <section className="px-4 py-20 sm:py-24">
      <div className="max-w-4xl mx-auto">
        <Card className="relative p-12 sm:p-16 overflow-hidden border-border/40 text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/[0.06] rounded-full blur-[120px] pointer-events-none" />

          <div className="relative">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              {t('aff_comp.public.bottom_cta.heading')}
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto mb-8 text-base">
              {t('aff_comp.public.bottom_cta.body')}
            </p>
            <Button
              size="lg"
              className="text-base px-10 h-12 shadow-lg shadow-primary/20"
              render={<a href="#apply" />}
            >
              {t('aff_comp.public.bottom_cta.button')}
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </Card>
      </div>
    </section>
  )
}

/* ─── Enrolment Form ─────────────────────────────────────────── */
// Self-serve instant-approve. No review. User picks (or generates) a code,
// accepts the #ad disclosure + age gate, and gets their referral link +
// starter post templates on the same page. No email wait.

interface EnrolSuccess {
  code: string
  referral_url: string
  dashboard_url: string
  already_enrolled?: boolean
}

function EnrolForm() {
  const t = useT()
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [result, setResult] = useState<EnrolSuccess | null>(null)
  const [chosenCode, setChosenCode] = useState('')
  const [is18Plus, setIs18Plus] = useState(true)
  const [understands, setUnderstands] = useState(false)
  const [codePreview, setCodePreview] = useState('')

  // Live-normalise + preview the chosen code as the user types.
  const handleCodeChange = (raw: string) => {
    setChosenCode(raw)
    setCodePreview(
      raw
        .trim()
        .toUpperCase()
        .replace(/[^A-Z0-9-]/g, ''),
    )
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitting(true)
    setError(null)

    const formData = new FormData(e.currentTarget)
    const body = {
      chosen_code: chosenCode.trim() || undefined,
      display_name: (formData.get('display_name') as string) || undefined,
      understands_disclosure: understands,
      is_18_or_over: is18Plus,
      guardian_name: (formData.get('guardian_name') as string) || undefined,
      guardian_email: (formData.get('guardian_email') as string) || undefined,
    }

    try {
      const res = await fetch('/api/affiliates/enrol', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data.error || t('aff_comp.enrol.error_generic'))
      } else {
        setResult({
          code: data.code,
          referral_url: data.referral_url,
          dashboard_url: data.dashboard_url,
          already_enrolled: data.already_enrolled,
        })
      }
    } catch {
      setError(t('aff_comp.enrol.error_network'))
    }
    setSubmitting(false)
  }

  if (result) {
    return <EnrolSuccessCard result={result} />
  }

  return (
    <Card className="p-0 border-border/40">
      <CardContent className="p-6 sm:p-8">
        <form onSubmit={handleSubmit} className="space-y-5">
          {error && (
            <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-3 text-destructive text-sm flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 mt-0.5 shrink-0" />
              {error}
            </div>
          )}

          <div>
            <label htmlFor="chosen_code" className="label">
              {t('aff_comp.enrol.field.code.label')}{' '}
              <span className="text-muted-foreground font-normal">
                {t('aff_comp.enrol.field.code.optional')}
              </span>
            </label>
            <input
              type="text"
              id="chosen_code"
              name="chosen_code"
              value={chosenCode}
              onChange={(e) => handleCodeChange(e.target.value)}
              placeholder={t('aff_comp.enrol.field.code.placeholder')}
              maxLength={20}
              className="input-field font-mono tracking-wide uppercase"
              autoComplete="off"
            />
            <p className="text-xs text-muted-foreground mt-1.5">
              {t('aff_comp.enrol.field.code.hint')}
              {codePreview && codePreview !== chosenCode.trim() && (
                <>
                  {' '}
                  {t('aff_comp.enrol.field.code.preview_prefix')}{' '}
                  <span className="font-mono text-foreground">{codePreview}</span>
                </>
              )}
            </p>
          </div>

          <div>
            <label htmlFor="display_name" className="label">
              {t('aff_comp.enrol.field.display_name.label')}{' '}
              <span className="text-muted-foreground font-normal">
                {t('aff_comp.enrol.field.display_name.optional')}
              </span>
            </label>
            <input
              type="text"
              id="display_name"
              name="display_name"
              placeholder={t('aff_comp.enrol.field.display_name.placeholder')}
              maxLength={60}
              className="input-field"
            />
          </div>

          {/* Age + guardian fields */}
          <div className="space-y-3 pt-2">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={is18Plus}
                onChange={(e) => setIs18Plus(e.target.checked)}
                className="mt-1"
              />
              <span className="text-sm text-muted-foreground">
                {t('aff_comp.enrol.age.18_plus')}
              </span>
            </label>

            {!is18Plus && (
              <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-5 space-y-4">
                <p className="text-sm text-amber-800 font-medium">
                  {t('aff_comp.enrol.age.under18_lead')}
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="guardian_name" className="label">
                      {t('aff_comp.enrol.field.guardian_name')}
                    </label>
                    <input
                      type="text"
                      id="guardian_name"
                      name="guardian_name"
                      required
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label htmlFor="guardian_email" className="label">
                      {t('aff_comp.enrol.field.guardian_email')}
                    </label>
                    <input
                      type="email"
                      id="guardian_email"
                      name="guardian_email"
                      required
                      className="input-field"
                    />
                  </div>
                </div>
              </div>
            )}

            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={understands}
                onChange={(e) => setUnderstands(e.target.checked)}
                required
                className="mt-1"
              />
              <span className="text-sm text-muted-foreground">
                {t('aff_comp.enrol.disclosure_check_part1')}{' '}
                <strong className="text-foreground">#ad</strong>{' '}
                {t('aff_comp.enrol.disclosure_check_part2')}{' '}
                <Link href="/affiliates/resources" className="underline">
                  {t('aff_comp.enrol.disclosure_check_link')}
                </Link>
                . *
              </span>
            </label>
          </div>

          <Button
            type="submit"
            disabled={submitting || !understands}
            size="lg"
            className="w-full h-12 text-base"
          >
            {submitting ? t('aff_comp.enrol.submit_creating') : t('aff_comp.enrol.submit')}
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            {t('aff_comp.enrol.footnote')}
          </p>
        </form>
      </CardContent>
    </Card>
  )
}

/* ─── Success card - shown after enrolment ───────────────────── */

function EnrolSuccessCard({ result }: { result: EnrolSuccess }) {
  const t = useT()
  return (
    <div className="space-y-6">
      <Card className="p-0 border-border/40">
        <CardContent className="py-10 px-6 sm:px-8">
          <div className="flex items-center justify-center mb-5">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
              <CheckCircle2 className="w-7 h-7 text-primary" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-foreground text-center mb-2">
            {result.already_enrolled
              ? t('aff_comp.enrol.success.title_already')
              : t('aff_comp.enrol.success.title_new')}
          </h3>
          <p className="text-muted-foreground text-center mb-8">
            {t('aff_comp.enrol.success.body')}
          </p>

          <div className="space-y-4">
            <CopyRow label={t('aff_comp.enrol.success.label_code')} value={result.code} monospace />
            <CopyRow label={t('aff_comp.enrol.success.label_link')} value={result.referral_url} />
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Button
              size="lg"
              className="text-base px-6 h-12 flex-1"
              render={<Link href={result.dashboard_url} />}
            >
              {t('aff_comp.enrol.success.go_dashboard')}
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-base px-6 h-12"
              render={<Link href="/affiliates/resources" />}
            >
              {t('aff_comp.enrol.success.full_resources')}
            </Button>
          </div>
        </CardContent>
      </Card>

      <PostTemplates code={result.code} referralUrl={result.referral_url} />
    </div>
  )
}

function CopyRow({
  label,
  value,
  monospace,
}: {
  label: string
  value: string
  monospace?: boolean
}) {
  const t = useT()
  const [copied, setCopied] = useState(false)
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      /* clipboard unavailable */
    }
  }
  return (
    <div>
      <label className="label">{label}</label>
      <div className="flex items-stretch gap-2">
        <div
          className={`flex-1 px-4 py-3 rounded-lg border border-border bg-muted/40 ${
            monospace ? 'font-mono tracking-wide text-base' : 'text-sm'
          } text-foreground break-all`}
        >
          {value}
        </div>
        <Button type="button" variant="outline" onClick={handleCopy} className="px-4 shrink-0">
          {copied ? t('aff_comp.copied') : t('aff_comp.copy')}
        </Button>
      </div>
    </div>
  )
}

/* ─── Post templates (starter kit) ───────────────────────────── */

function PostTemplates({ code, referralUrl }: { code: string; referralUrl: string }) {
  const t = useT()
  // The template bodies stay in English-language source - they are content the
  // affiliate copies to share on social. Surrounding chrome is i18n'd.
  const templates = [
    {
      platform: 'TikTok (15-30s)',
      body: `POV: you found the GCSE English revision tool that actually marks your essays 🔥\n\nThe English Hub gives you AO-aligned feedback in 60 seconds. Built by real examiners (AQA, Pearson, Cambridge, OCR, WJEC).\n\nGrab a trial - code ${code} at checkout for 7 days free.\n\n👉 ${referralUrl}\n\n#GCSE #GCSE2026 #GCSEenglish #revision #studytok #ad`,
    },
    {
      platform: 'Instagram (caption)',
      body: `If you're revising for GCSE English, stop scrolling 🧵\n\nThe English Hub lets you write an essay, submit it, and get a predicted grade + AO-level feedback in a minute. No teacher, no tutor - instant feedback, as many essays as you want.\n\nUse code ${code} for a 7-day free trial. Link: ${referralUrl}\n\n#GCSE #GCSEenglish #revision #TeamEnglish #ad`,
    },
    {
      platform: 'X / Twitter',
      body: `Revising for GCSE English? @theenglishhub marks your essays against real AQA / Edexcel / OCR / Eduqas / Cambridge mark schemes in ~60s.\n\nCode ${code} gets you a 7-day free trial.\n\n${referralUrl}\n\n#GCSE #ad`,
    },
    {
      platform: 'WhatsApp / text message',
      body: `Came across this - The English Hub marks GCSE English essays using real examiner mark schemes. Might be useful. Code ${code} for 7 days free: ${referralUrl} (#ad)`,
    },
  ]

  return (
    <Card className="p-0 border-border/40">
      <CardContent className="p-6 sm:p-8">
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-foreground mb-1">
            {t('aff_comp.public.templates.heading')}
          </h3>
          <p className="text-sm text-muted-foreground">
            {t('aff_comp.public.templates.intro_part1')}{' '}
            <strong className="text-foreground">#ad</strong>{' '}
            {t('aff_comp.public.templates.intro_part2')}
          </p>
        </div>
        <div className="space-y-5">
          {templates.map((tpl) => (
            <PostTemplateCard key={tpl.platform} platform={tpl.platform} body={tpl.body} />
          ))}
        </div>
        <div className="mt-6 rounded-lg border border-amber-500/30 bg-amber-500/10 p-4 text-sm text-amber-900">
          <p className="font-semibold mb-1">{t('aff_comp.public.templates.disclosure_title')}</p>
          <p>
            <strong>#ad</strong> {t('aff_comp.public.templates.disclosure_body_part1')}{' '}
            {t('aff_comp.public.templates.disclosure_body_part2')} <strong>ad</strong>{' '}
            {t('aff_comp.public.templates.disclosure_body_part3')}
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

function PostTemplateCard({ platform, body }: { platform: string; body: string }) {
  const t = useT()
  const [copied, setCopied] = useState(false)
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(body)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      /* clipboard unavailable */
    }
  }
  return (
    <div className="rounded-lg border border-border/40 bg-muted/20 p-4">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          {platform}
        </span>
        <Button type="button" variant="outline" size="sm" onClick={handleCopy}>
          {copied ? t('aff_comp.copied') : t('aff_comp.copy')}
        </Button>
      </div>
      <pre className="whitespace-pre-wrap text-sm text-foreground font-sans leading-relaxed">
        {body}
      </pre>
    </div>
  )
}
