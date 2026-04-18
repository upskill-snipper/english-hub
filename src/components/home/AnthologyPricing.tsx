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
    bg: 'bg-cream-100/[0.04] border border-cream-200/10',
    text: 'text-cream-50',
    sub: 'text-cream-200/60',
    btnClass:
      'border border-cream-200/20 text-cream-100 hover:bg-cream-50/10',
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
    sub: 'text-cream-200/70',
    btnClass:
      'bg-clay-500 text-cream-50 hover:bg-clay-600 shadow-lg shadow-clay-500/25',
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
    bg: 'bg-cream-100/[0.04] border border-cream-200/10',
    text: 'text-cream-50',
    sub: 'text-cream-200/60',
    btnClass:
      'border border-cream-200/20 text-cream-100 hover:bg-cream-50/10',
  },
]

export default function AnthologyPricing() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section head */}
        <div className="mb-12 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-cream-50">
            Simple, honest pricing.
          </h2>
          <p className="mt-3 text-cream-200/50 text-lg max-w-md mx-auto">
            3 free uses per feature. First month free on Student. Cancel anytime.
          </p>
        </div>

        {/* 3-col pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-2xl p-8 flex flex-col ${tier.bg} ${tier.text} ${
                tier.featured ? 'ring-2 ring-clay-400/40 scale-[1.02] shadow-elevated' : ''
              }`}
            >
              {/* Name */}
              <h3 className="text-lg font-bold tracking-tight">{tier.name}</h3>

              {/* Price */}
              <div className="mt-3 mb-1 flex items-baseline gap-1">
                <span className="font-serif text-4xl font-extrabold tracking-tight">
                  {tier.price}
                </span>
                {tier.period && (
                  <span className={`text-sm ${tier.sub}`}>{tier.period}</span>
                )}
              </div>
              <p className={`text-sm mb-6 ${tier.sub}`}>{tier.description}</p>

              {/* Feature list */}
              <ul className="space-y-2.5 mb-8 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className={`flex items-start gap-2.5 text-sm ${tier.sub}`}>
                    <span className="mt-1.5 block w-1 h-1 rounded-full bg-clay-400 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href={tier.cta.href}
                className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-bold transition-colors ${tier.btnClass}`}
              >
                {tier.cta.label} &rarr;
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
