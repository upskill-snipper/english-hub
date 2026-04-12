'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CommissionCalculator } from '@/components/affiliate/CommissionCalculator'
import { TierBadge, TIER_CONFIG } from '@/components/affiliate/TierBadge'
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
  return (
    <section className="relative px-4 pt-24 pb-16 sm:pt-32 sm:pb-24 text-center overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/[0.06] rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
          <Sparkles className="w-4 h-4" />
          3-Tier Affiliate Programme
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
          Earn up to{' '}
          <span className="text-primary">25% commission</span> with The English Hub
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
          Join our partnership programme and earn recurring revenue by sharing a
          product you already love with your audience.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button size="lg" render={<Link href="/affiliate/signup" />}>
            Apply now
            <ArrowRight className="w-4 h-4" />
          </Button>
          <Button size="lg" variant="outline" render={<Link href="/affiliate/login" />}>
            Partner login
          </Button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mt-12 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-primary" />
            30-day cookie window
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-primary" />
            Monthly payouts
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-primary" />
            No minimum audience
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Tiers ─────────────────────────────────────────────────── */

function TierBreakdownSection() {
  const tiers = (['bronze', 'silver', 'gold'] as const).map((id) => ({
    id,
    ...TIER_CONFIG[id],
  }))

  return (
    <section className="px-4 py-16 sm:py-24 bg-muted/20 border-y border-border/60">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
            Three tiers. One clear path.
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            The more students you refer, the higher your commission rate climbs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {tiers.map((tier, idx) => (
            <Card
              key={tier.id}
              className={
                tier.id === 'gold'
                  ? 'border-primary/40 shadow-lg shadow-primary/5 relative'
                  : 'relative'
              }
            >
              {tier.id === 'gold' && (
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-bl-xl rounded-tr-2xl">
                  Top tier
                </div>
              )}
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <TierBadge tier={tier.id} size="lg" />
                  <span className="text-xs text-muted-foreground">Tier {idx + 1}</span>
                </div>
                <div className="flex items-baseline gap-1 pt-4">
                  <span className="text-5xl font-bold text-foreground">
                    {tier.commission}
                  </span>
                  <span className="text-2xl font-bold text-muted-foreground">%</span>
                </div>
                <p className="text-sm text-muted-foreground">commission on every sale</p>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-foreground">{tier.description}</p>
                <ul className="space-y-2 pt-3 border-t border-border/40">
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">
                      {tier.minReferrals === 0
                        ? 'Open to everyone'
                        : `${tier.minReferrals}+ referred students`}
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">Marketing asset library</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">Real-time tracking</span>
                  </li>
                  {tier.id !== 'bronze' && (
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">Priority support</span>
                    </li>
                  )}
                  {tier.id === 'gold' && (
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">Dedicated partner manager</span>
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
  return (
    <section className="px-4 py-16 sm:py-24">
      <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Calculate your earnings
          </h2>
          <p className="text-muted-foreground text-lg mb-6">
            Move the slider to see how many referrals translate to monthly and yearly
            commission. The calculator automatically factors in your tier bonus.
          </p>
          <ul className="space-y-3">
            {[
              { icon: TrendingUp, label: 'Automatic tier upgrades' },
              { icon: Users, label: 'Commission on every paying student' },
              { icon: Globe, label: 'Global — any language, any country' },
            ].map((item) => {
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
  const steps = [
    {
      icon: Share2,
      title: 'Share your link',
      description:
        'Generate personalised tracking links from your dashboard and share them anywhere.',
    },
    {
      icon: Users,
      title: 'Students sign up',
      description:
        'When someone clicks your link and subscribes, we automatically attribute the sale to you.',
    },
    {
      icon: BarChart3,
      title: 'Earn commission',
      description:
        'Track conversions in real time and get paid monthly via PayPal or bank transfer.',
    },
  ]

  return (
    <section className="px-4 py-16 sm:py-24 bg-muted/20 border-y border-border/60">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
            How it works
          </h2>
          <p className="text-muted-foreground text-lg">
            Get approved, share your links, and start earning in minutes.
          </p>
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
                      Step {i + 1}
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

const FAQS = [
  {
    q: 'Who can become an affiliate?',
    a: 'Anyone with an audience interested in English learning — teachers, tutors, content creators, bloggers, parents, and education communities. There is no minimum follower requirement.',
  },
  {
    q: 'How and when do I get paid?',
    a: 'Payouts are issued monthly via PayPal or bank transfer, once your balance reaches the £50 minimum threshold. Commissions are locked in after a 14-day refund window.',
  },
  {
    q: 'How long do tracking cookies last?',
    a: 'We use a 30-day cookie window. If a student clicks your link today and subscribes up to 30 days later, you still earn commission on the sale.',
  },
  {
    q: 'Do I earn on renewals?',
    a: 'Yes — you earn commission on the first payment for every new subscriber. Gold-tier partners also receive ongoing renewal commission for the first 12 months.',
  },
  {
    q: 'How do I move up tiers?',
    a: 'Tiers are calculated automatically based on your total successful referrals. Silver unlocks at 10 referrals, and Gold unlocks at 25 — no application needed.',
  },
]

function FAQSection() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="px-4 py-16 sm:py-24">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
            Frequently asked
          </h2>
          <p className="text-muted-foreground text-lg">
            Can&apos;t find what you&apos;re looking for? Drop us a note.
          </p>
        </div>

        <div className="space-y-2">
          {FAQS.map((faq, i) => {
            const isOpen = open === i
            return (
              <div
                key={faq.q}
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
  return (
    <section className="px-4 py-16 sm:py-24 bg-muted/20 border-t border-border/60">
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
          <HeartHandshake className="w-4 h-4" />
          Ready when you are
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
          Start earning today
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
          Applications are reviewed within 48 hours. Once approved, you&apos;ll get
          instant access to your dashboard and marketing assets.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button size="lg" render={<Link href="/affiliate/signup" />}>
            Apply now
            <ArrowRight className="w-4 h-4" />
          </Button>
          <Button size="lg" variant="outline" render={<Link href="/affiliate/login" />}>
            Partner login
          </Button>
        </div>
      </div>
    </section>
  )
}
