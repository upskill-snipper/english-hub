'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { CommissionCalculator } from '@/components/affiliate/CommissionCalculator'
import { TierBadge, TIER_CONFIG } from '@/components/affiliate/TierBadge'
import { useT } from '@/lib/i18n/use-t'
import {
  Sparkles,
  TrendingUp,
  Users,
  Globe,
  Share2,
  BarChart3,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  CheckCircle2,
  HeartHandshake,
} from 'lucide-react'

export default function AffiliateLandingPage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <TierBreakdownSection />
      <CalculatorSection />
      <HowItWorksSection />
      <FAQSection />
      <CtaSection />
    </div>
  )
}

/* ─── Hero ──────────────────────────────────────────────────── */

function HeroSection() {
  const t = useT()
  return (
    <section className="relative px-4 pt-24 pb-16 sm:pt-32 sm:pb-24 text-center overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/[0.06] rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
          <Sparkles className="w-4 h-4" />
          {t('aff.hero.eyebrow')}
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
          {t('aff.hero.title_lead')}{' '}
          <span className="text-primary">{t('aff.hero.title_highlight')}</span>{' '}
          {t('aff.hero.title_tail')}
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
          {t('aff.hero.subtitle')}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button size="lg" render={<Link href="/affiliate/signup" />}>
            {t('aff.cta.apply_now')}
            <ArrowRight className="w-4 h-4" />
          </Button>
          <Button size="lg" variant="outline" render={<Link href="/affiliate/login" />}>
            {t('aff.cta.partner_login')}
          </Button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mt-12 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-primary" />
            {t('aff.hero.bullet_cookie')}
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-primary" />
            {t('aff.hero.bullet_payouts')}
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-primary" />
            {t('aff.hero.bullet_no_minimum')}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Tiers ─────────────────────────────────────────────────── */

function TierBreakdownSection() {
  const t = useT()
  const tiers = (['tier-1', 'tier-2', 'tier-3', 'tier-4', 'tier-5'] as const).map((id) => ({
    id,
    ...TIER_CONFIG[id],
  }))

  return (
    <section className="px-4 py-16 sm:py-24 bg-muted/20 border-y border-border/60">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
            {t('aff.tiers.heading')}
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            {t('aff.tiers.subheading')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-5">
          {tiers.map((tier, idx) => (
            <Card
              key={tier.id}
              className={
                tier.id === 'tier-5'
                  ? 'border-primary/40 shadow-lg shadow-primary/5 relative'
                  : 'relative'
              }
            >
              {tier.id === 'tier-5' && (
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-bl-xl rounded-tr-2xl">
                  {t('aff.tiers.top_tier_badge')}
                </div>
              )}
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <TierBadge tier={tier.id} size="lg" />
                  <span className="text-xs text-muted-foreground">
                    {t('aff.tiers.tier_n')} {idx + 1}
                  </span>
                </div>
                <div className="flex items-baseline gap-1 pt-4">
                  <span className="text-xs text-muted-foreground">£</span>
                  <span className="text-5xl font-bold text-foreground">{tier.commission}</span>
                  <span className="text-base font-medium text-muted-foreground">
                    {t('aff.tiers.per_signup_suffix')}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {t('aff.tiers.flat_commission_caption')}
                </p>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-foreground">{t(`aff.tiers.${tier.id}.description`)}</p>
                <ul className="space-y-2 pt-3 border-t border-border/40">
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">
                      {tier.minReferrals === 0
                        ? t('aff.tiers.open_from_first_signup')
                        : t('aff.tiers.from_signup_n').replace(
                            '{n}',
                            String(tier.minReferrals + 1),
                          )}
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">
                      {t('aff.tiers.feature_marketing_assets')}
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">
                      {t('aff.tiers.feature_realtime_tracking')}
                    </span>
                  </li>
                  {tier.id !== 'tier-1' && (
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">
                        {t('aff.tiers.feature_priority_support')}
                      </span>
                    </li>
                  )}
                  {tier.id === 'tier-5' && (
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">
                        {t('aff.tiers.feature_partner_manager')}
                      </span>
                    </li>
                  )}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Calculator ────────────────────────────────────────────── */

function CalculatorSection() {
  const t = useT()
  const items = [
    { icon: TrendingUp, label: t('aff.calc.bullet_auto_upgrades') },
    { icon: Users, label: t('aff.calc.bullet_every_student') },
    { icon: Globe, label: t('aff.calc.bullet_global') },
  ]

  return (
    <section className="px-4 py-16 sm:py-24">
      <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {t('aff.calc.heading')}
          </h2>
          <p className="text-muted-foreground text-lg mb-6">{t('aff.calc.body')}</p>
          <ul className="space-y-3">
            {items.map((item) => {
              const Icon = item.icon
              return (
                <li key={item.label} className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-foreground">{item.label}</span>
                </li>
              )
            })}
          </ul>
        </div>
        <CommissionCalculator />
      </div>
    </section>
  )
}

/* ─── How It Works ──────────────────────────────────────────── */

function HowItWorksSection() {
  const t = useT()
  const steps = [
    {
      icon: Share2,
      title: t('aff.how.step1_title'),
      description: t('aff.how.step1_body'),
    },
    {
      icon: Users,
      title: t('aff.how.step2_title'),
      description: t('aff.how.step2_body'),
    },
    {
      icon: BarChart3,
      title: t('aff.how.step3_title'),
      description: t('aff.how.step3_body'),
    },
  ]

  return (
    <section className="px-4 py-16 sm:py-24 bg-muted/20 border-y border-border/60">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
            {t('aff.how.heading')}
          </h2>
          <p className="text-muted-foreground text-lg">{t('aff.how.subheading')}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <Card key={step.title}>
                <CardContent className="pt-2">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 text-primary">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                      {t('aff.how.step_label')} {i + 1}
                    </span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ─── FAQ ───────────────────────────────────────────────────── */

const FAQ_IDS = ['eligibility', 'payouts', 'cookies', 'renewals', 'tier_upgrade'] as const

function FAQSection() {
  const t = useT()
  const [open, setOpen] = useState<number | null>(0)

  const faqs = FAQ_IDS.map((id) => ({
    id,
    q: t(`aff.faq.${id}.q`),
    a: t(`aff.faq.${id}.a`),
  }))

  return (
    <section className="px-4 py-16 sm:py-24">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
            {t('aff.faq.heading')}
          </h2>
          <p className="text-muted-foreground text-lg">{t('aff.faq.subheading')}</p>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, i) => {
            const isOpen = open === i
            return (
              <div
                key={faq.id}
                className="rounded-xl border border-border/60 bg-card overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left font-medium text-foreground hover:bg-accent/40 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-muted-foreground shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-muted-foreground shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed border-t border-border/40 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ─── CTA ───────────────────────────────────────────────────── */

function CtaSection() {
  const t = useT()
  return (
    <section className="px-4 py-16 sm:py-24 bg-muted/20 border-t border-border/60">
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
          <HeartHandshake className="w-4 h-4" />
          {t('aff.cta.eyebrow')}
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
          {t('aff.cta.heading')}
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">{t('aff.cta.body')}</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button size="lg" render={<Link href="/affiliate/signup" />}>
            {t('aff.cta.apply_now')}
            <ArrowRight className="w-4 h-4" />
          </Button>
          <Button size="lg" variant="outline" render={<Link href="/affiliate/login" />}>
            {t('aff.cta.partner_login')}
          </Button>
        </div>
      </div>
    </section>
  )
}
