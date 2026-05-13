'use client'

import Link from 'next/link'
import { useT } from '@/lib/i18n/use-t'

// Board codes (AQA/Edexcel/OCR/WJEC/IGCSE/KS3) stay in Latin per i18n policy.
const boards = ['AQA', 'Edexcel', 'OCR', 'WJEC', 'IGCSE', 'KS3']

export default function AnthologyHero() {
  const t = useT()

  /* ─────────── Chip card data ─────────── */
  const chipCards = [
    {
      label: t('home.anth_hero.chip.ai_label'),
      detail: t('home.anth_hero.chip.ai_detail'),
      rotate: '-3deg',
      bg: 'bg-clay-400',
    },
    {
      label: t('home.anth_hero.chip.poems_label'),
      detail: t('home.anth_hero.chip.poems_detail'),
      rotate: '2deg',
      bg: 'bg-sage-500',
    },
    {
      label: t('home.anth_hero.chip.mocks_label'),
      detail: t('home.anth_hero.chip.mocks_detail'),
      rotate: '-1.5deg',
      bg: 'bg-ochre-500',
    },
    {
      label: t('home.anth_hero.chip.ladder_label'),
      detail: t('home.anth_hero.chip.ladder_detail'),
      rotate: '2.5deg',
      bg: 'bg-teal-600',
    },
    {
      label: t('home.anth_hero.chip.games_label'),
      detail: t('home.anth_hero.chip.games_detail'),
      rotate: '-2deg',
      bg: 'bg-ink-700',
    },
  ]

  return (
    <section className="relative overflow-hidden">
      {/* Main card */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-6 pb-2">
        <div className="relative rounded-[32px] bg-teal-800 px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20 overflow-hidden">
          {/* Diagonal line pattern overlay */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                'repeating-linear-gradient(135deg, transparent, transparent 14px, currentColor 14px, currentColor 15px)',
              color: '#FBF7F0',
            }}
          />

          {/* Meta bar */}
          <div className="relative mb-8 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs sm:text-sm font-mono tracking-wide text-cream-200/60">
            <span>{t('home.anth_hero.meta_brand')}</span>
            <span className="hidden sm:inline text-cream-200/30">|</span>
            <span>{t('home.anth_hero.meta_vol')}</span>
            <span className="hidden sm:inline text-cream-200/30">|</span>
            <span>{t('home.anth_hero.meta_stats')}</span>
          </div>

          {/* Grid: content left, chips right */}
          <div className="relative grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16 items-center">
            {/* Left column — text content */}
            <div>
              {/* Eyebrow */}
              <p className="mb-4 text-sm font-medium tracking-widest uppercase text-clay-300">
                {t('home.anth_hero.eyebrow')}
              </p>

              {/* Display heading */}
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-extrabold leading-[1.05] tracking-tight text-cream-50 mb-6">
                {t('home.anth_hero.h1.read')}{' '}
                <em className="italic">{t('home.anth_hero.h1.write')}</em>{' '}
                {t('home.anth_hero.h1.bold')}
                <br />
                {t('home.anth_hero.h1.land')}{' '}
                <span className="relative inline-flex items-center justify-center">
                  <span className="relative z-10">9</span>
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="w-[1.3em] h-[1.3em] rounded-full border-[3px] border-clay-400" />
                  </span>
                </span>
              </h1>

              {/* Dek */}
              <p className="font-serif text-cream-200 text-lg sm:text-[22px] leading-relaxed max-w-lg mb-8">
                {t('home.anth_hero.dek')}
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <Link
                  href="/auth/register"
                  className="inline-flex items-center gap-2 rounded-full bg-clay-500 px-7 py-3 text-sm font-bold text-cream-50 transition-colors hover:bg-clay-600 shadow-lg shadow-clay-500/25"
                >
                  {t('home.anth_hero.cta_start')}
                </Link>
                <Link
                  href="/demo/school"
                  className="inline-flex items-center gap-2 rounded-full border border-cream-200/25 px-6 py-3 text-sm font-semibold text-cream-100 transition-colors hover:bg-cream-50/10"
                >
                  {t('home.anth_hero.cta_demo')}
                </Link>
              </div>

              {/* Board badges (Latin codes — no translation) */}
              <div className="flex flex-wrap items-center gap-2">
                {boards.map((b) => (
                  <span
                    key={b}
                    className="rounded-full border border-cream-200/15 bg-cream-50/[0.06] px-3 py-1 text-xs font-semibold text-cream-200/70 tracking-wide"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>

            {/* Right column — stacked chip tiles */}
            <div
              className="relative hidden lg:flex flex-col items-center gap-3 py-4"
              aria-hidden="true"
            >
              {chipCards.map((chip, i) => (
                <div
                  key={chip.label}
                  className={`${chip.bg} w-full max-w-[280px] rounded-2xl px-5 py-4 text-cream-50 shadow-elevated transition-transform duration-300 hover:scale-[1.03]`}
                  style={{ transform: `rotate(${chip.rotate})`, zIndex: chipCards.length - i }}
                >
                  <p className="text-sm font-bold tracking-tight">{chip.label}</p>
                  <p className="text-xs text-cream-100/70 mt-0.5">{chip.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
