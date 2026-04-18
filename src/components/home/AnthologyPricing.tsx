'use client'

import Link from 'next/link'
import { PRICING } from '@/constants/pricing'

const tiers = [
  {
    name: 'Free',
    price: '£0',
    period: 'forever',
    description: '3 free uses per feature — no sign-up.',
    features: [
      '3 free uses of every tool',
      'Browse all 470+ lessons',
      'Sample mock papers',
      'Try AI essay feedback',
      'No card required',
    ],
    cta: { label: 'Get started', href: '/courses' },
    featured: false,
    bg: 'bg-white border border-ink-200',
    text: 'text-ink-900',
    sub: 'text-ink-500',
    featureText: 'text-ink-600',
    btnClass:
      'border border-ink-200 text-ink-900 hover:bg-cream-100 hover:border-ink-300',
  },
  {
    name: 'Student',
    price: `${PRICING.CURRENCY}${PRICING.STUDENT_MONTHLY}`,
    period: '/month',
    description: 'Full access — first month free. Cancel anytime.',
    features: [
      'All 470+ structured lessons',
      'All 130+ mock exams',
      'AI essay feedback (10/day)',
      '30 poem deep-dives',
      '7 GCSE revision games',
      '2,000+ flashcards',
      'Grade 1–9 tracking',
      'All exam boards included',
      'Cancel anytime',
    ],
    cta: { label: 'Start free month', href: '/auth/register' },
    featured: true,
    bg: 'bg-teal-800',
    text: 'text-cream-50',
    sub: 'text-teal-300',
    featureText: 'text-cream-200',
    btnClass:
      'bg-clay-500 text-cream-50 hover:bg-clay-400 shadow-lg shadow-clay-500/25',
  },
  {
    name: 'School',
    price: 'Custom',
    period: '',
    description: 'Whole-department access. Founding programme open.',
    features: [
      'Everything in Student',
      'Unlimited students & teachers',
      'Department analytics',
      'Teacher admin portal',
      'Bulk upload (CSV / SSO)',
      'Progress reports',
      'CPD resources',
      'Dedicated support',
    ],
    cta: { label: 'Book a call', href: '/for-schools' },
    featured: false,
    bg: 'bg-white border border-ink-200',
    text: 'text-ink-900',
    sub: 'text-ink-500',
    featureText: 'text-ink-600',
    btnClass:
      'border border-ink-200 text-ink-900 hover:bg-cream-100 hover:border-ink-300',
  },
]

export default function AnthologyPricing() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section head */}
        <div className="mb-12 text-center">
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-clay-500 mb-4">
            Pricing
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-ink-900" style={{ letterSpacing: '-0.035em' }}>
            Simple, <em className="italic text-teal-800">honest</em> pricing.
          </h2>
          <p className="mt-4 text-ink-600 text-lg max-w-md mx-auto font-serif">
            3 free uses per feature. First month free on Student. Cancel anytime.
          </p>
        </div>

        {/* 3-col pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-3xl p-8 flex flex-col transition-all duration-200 hover:-translate-y-1 hover:shadow-lg ${tier.bg} ${tier.text} ${
                tier.featured ? 'ring-2 ring-clay-400/40 scale-[1.02] shadow-lg' : ''
              }`}
            >
              {/* Badge for featured */}
              {tier.featured && (
                <span className="self-start font-mono text-[10px] font-medium uppercase tracking-[0.14em] bg-clay-500 text-cream-50 px-3 py-1 rounded-full mb-4">
                  Most popular
                </span>
              )}

              {/* Name */}
              <h3 className="text-lg font-semibold tracking-tight">{tier.name}</h3>

              {/* Price */}
              <div className="mt-3 mb-1 flex items-baseline gap-1">
                <span className="font-serif text-5xl font-normal tracking-tight" style={{ letterSpacing: '-0.04em' }}>
                  {tier.price}
                </span>
                {tier.period && (
                  <span className={`text-sm ${tier.sub}`}>{tier.period}</span>
                )}
              </div>

              {/* Description */}
              <p className={`text-sm ${tier.sub} mb-6`}>{tier.description}</p>

              {/* Features */}
              <ul className={`space-y-3 text-sm ${tier.featureText} mb-8 flex-1`}>
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-clay-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href={tier.cta.href}
                className={`mt-auto inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-200 ${tier.btnClass}`}
              >
                {tier.cta.label}
                <span>&rarr;</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
