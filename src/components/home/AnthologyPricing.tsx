'use client'

import Link from 'next/link'
import { PRICING } from '@/constants/pricing'
import { VAT_LABEL } from '@/lib/copy/pricing'
import { PromoCodePrompt } from '@/components/billing/AffiliateCodeField'
import { useT } from '@/lib/i18n/use-t'

type Tier = {
  name: string
  price: string
  period: string
  anchorPrice?: string
  anchorPeriod?: string
  annual: string
  description: string
  badge?: string
  features: string[]
  cta: { label: string; href: string }
  featured: boolean
  bg: string
  text: string
  sub: string
  featureText: string
  btnClass: string
}

export default function AnthologyPricing() {
  const t = useT()

  const tiers: Tier[] = [
    {
      name: 'Student',
      price: `${PRICING.CURRENCY}${PRICING.STUDENT_MONTHLY}`,
      period: '/month',
      anchorPrice: `${PRICING.CURRENCY}${PRICING.STUDENT_MONTHLY_STANDARD}`,
      anchorPeriod: '/month',
      annual: `${t('pricing.anth.student.annual_prefix')} ${PRICING.CURRENCY}${PRICING.STUDENT_ANNUAL}/year · ${PRICING.CURRENCY}${PRICING.STUDENT_ANNUAL_WITH_CODE}/year ${t('pricing.anth.with_code')} ${PRICING.AFFILIATE_PROMO_CODE}`,
      description: t('pricing.anth.student.desc'),
      badge: t('pricing.badge.early_access'),
      features: [
        t('pricing.anth.student.feat.lessons'),
        t('pricing.anth.student.feat.mocks'),
        t('pricing.anth.student.feat.ai_feedback'),
        t('pricing.anth.student.feat.poems'),
        t('pricing.anth.student.feat.games'),
        t('pricing.anth.student.feat.quizzes'),
        t('pricing.anth.student.feat.grade_track'),
        t('pricing.anth.student.feat.all_boards'),
        `${PRICING.TRIAL_TEXT} · ${t('pricing.card_cancel')}`,
      ],
      cta: { label: t('pricing.cta.start_trial_7day'), href: '/auth/register' },
      featured: false,
      bg: 'bg-card border border-border',
      text: 'text-ink-900',
      sub: 'text-ink-500',
      featureText: 'text-ink-600',
      btnClass: 'bg-teal-800 text-cream-50 hover:bg-teal-900 shadow-md',
    },
    {
      name: 'Teacher',
      price: `${PRICING.CURRENCY}${PRICING.TEACHER_MONTHLY}`,
      period: '/month',
      anchorPrice: `${PRICING.CURRENCY}${PRICING.TEACHER_MONTHLY_STANDARD}`,
      anchorPeriod: '/month',
      annual: `${t('pricing.anth.teacher.annual_prefix')} ${PRICING.CURRENCY}${PRICING.TEACHER_ANNUAL}/year (${t('pricing.anth.save42')})`,
      description: t('pricing.anth.teacher.desc'),
      badge: t('pricing.badge.early_access'),
      features: [
        t('pricing.anth.teacher.feat.everything_student'),
        t('pricing.anth.teacher.feat.lesson_plan_ai'),
        t('pricing.anth.teacher.feat.ppt'),
        t('pricing.anth.teacher.feat.assignment_tracker'),
        t('pricing.anth.teacher.feat.ai_essay_ao'),
        t('pricing.anth.teacher.feat.class_analytics'),
        t('pricing.anth.teacher.feat.downloadable_plans'),
        t('pricing.anth.teacher.feat.homework_gen'),
        t('pricing.anth.teacher.feat.resource_library'),
      ],
      cta: { label: t('pricing.cta.start_trial_7day'), href: '/auth/register' },
      featured: true,
      bg: 'bg-teal-800',
      text: 'text-cream-50',
      sub: 'text-teal-300',
      featureText: 'text-cream-200',
      btnClass: 'bg-clay-500 text-cream-50 hover:bg-clay-400 shadow-lg shadow-clay-500/25',
    },
    {
      name: 'Founding School',
      price: `${PRICING.CURRENCY}${(PRICING.FOUNDER_SCHOOL_MIN / 1000).toFixed(0)}k`,
      period: '/year',
      anchorPrice: `${PRICING.CURRENCY}${(PRICING.SCHOOL_STANDARD / 1000).toFixed(0)}k`,
      anchorPeriod: '/year',
      annual: `${t('pricing.anth.founding.only_prefix')} ${PRICING.FOUNDER_SCHOOL_LIMIT} ${t('pricing.anth.founding.places_locked')}`,
      description: t('pricing.anth.founding.desc'),
      badge: t('pricing.badge.founding_10_only'),
      features: [
        t('pricing.anth.founding.feat.everything_teacher'),
        t('pricing.anth.founding.feat.unlimited'),
        t('pricing.anth.founding.feat.dept_analytics'),
        t('pricing.anth.founding.feat.student_tracking'),
        t('pricing.anth.founding.feat.bulk_csv'),
        t('pricing.anth.founding.feat.safeguarding'),
        t('pricing.anth.founding.feat.onboarding'),
        t('pricing.anth.founding.feat.feature_priority'),
        t('pricing.anth.founding.feat.price_locked'),
        `${t('pricing.anth.founding.feat.only_prefix')} ${PRICING.FOUNDER_SCHOOL_LIMIT} ${t('pricing.anth.founding.feat.places_avail')}`,
      ],
      cta: { label: t('pricing.cta.book_founding_call'), href: '/for-schools' },
      featured: false,
      bg: 'bg-ink-950',
      text: 'text-cream-50',
      sub: 'text-ink-400',
      featureText: 'text-ink-300',
      btnClass: 'bg-clay-500 text-cream-50 hover:bg-clay-400 shadow-lg',
    },
  ]

  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section head */}
        <div className="mb-12 text-center">
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-clay-500 mb-4">
            {t('pricing.section_eyebrow')}
          </p>
          <h2
            className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-ink-900"
            style={{ letterSpacing: '-0.035em' }}
          >
            {t('pricing.anth.headline_prefix')}{' '}
            <em className="italic text-teal-800">{t('pricing.anth.headline_emphasis')}</em>{' '}
            {t('pricing.anth.headline_suffix')}.
          </h2>
          <p className="mt-4 text-ink-600 text-lg max-w-xl mx-auto font-serif">
            {t('pricing.anth.trial_blurb_prefix')} £{PRICING.STUDENT_ANNUAL_SAVINGS}{' '}
            {t('pricing.anth.trial_blurb_suffix')}{' '}
            <code className="font-mono text-teal-800 bg-teal-50 px-1.5 py-0.5 rounded">
              {PRICING.AFFILIATE_PROMO_CODE}
            </code>
            .
          </p>
          <p className="mt-3 inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-amber-500/10 px-4 py-1.5 text-[11px] font-mono font-medium uppercase tracking-[0.14em] text-amber-700">
            ⚡ {PRICING.PRICE_INCREASE_MESSAGE} - {t('pricing.anth.lock_in_early')}
          </p>
        </div>

        {/* Promo code prompt - type a code, click Apply, lands on
            /pricing?code=X where the full field auto-applies. */}
        <PromoCodePrompt className="mb-8" />

        {/* 3-col pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-3xl p-8 flex flex-col transition-all duration-200 hover:-translate-y-1 hover:shadow-lg ${tier.bg} ${tier.text} ${
                tier.featured ? 'ring-2 ring-clay-400/40 scale-[1.02] shadow-lg' : ''
              }`}
            >
              {/* Badge row: Early Access / Founding + Most popular */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                {tier.badge && (
                  <span className="font-mono text-[10px] font-medium uppercase tracking-[0.14em] bg-amber-500/90 text-ink-900 px-3 py-1 rounded-full">
                    {tier.badge}
                  </span>
                )}
                {tier.featured && (
                  <span className="font-mono text-[10px] font-medium uppercase tracking-[0.14em] bg-clay-500 text-cream-50 px-3 py-1 rounded-full">
                    {t('pricing.badge.most_popular')}
                  </span>
                )}
              </div>

              {/* Name */}
              <h3 className="text-lg font-semibold tracking-tight">{tier.name}</h3>

              {/* Price */}
              <div className="mt-3 mb-1 flex items-baseline gap-1">
                <span
                  className="font-serif text-5xl font-normal tracking-tight"
                  style={{ letterSpacing: '-0.04em' }}
                >
                  {tier.price}
                </span>
                {tier.period && <span className={`text-sm ${tier.sub}`}>{tier.period}</span>}
              </div>

              {/* Standard-price anchor (strikethrough) */}
              {tier.anchorPrice && (
                <p className={`text-xs ${tier.sub} mb-1 font-mono`}>
                  {t('pricing.anth.standard_prefix')}{' '}
                  <span className="line-through decoration-2 decoration-clay-500/70">
                    {tier.anchorPrice}
                    {tier.anchorPeriod}
                  </span>{' '}
                  {t('pricing.anth.from_date_prefix')} {PRICING.PRICE_INCREASE_DATE}
                </p>
              )}

              {/* Annual option */}
              {tier.annual && <p className={`text-xs ${tier.sub} mb-2 font-mono`}>{tier.annual}</p>}

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

        <p className="mt-10 text-center text-xs text-ink-500 max-w-2xl mx-auto font-mono">
          {VAT_LABEL}
        </p>
      </div>
    </section>
  )
}
