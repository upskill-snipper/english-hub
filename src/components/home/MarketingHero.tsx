'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { BookOpen, Sparkles, FileText, Layers, Lightbulb, CheckCircle, Target } from 'lucide-react'
import { useT } from '@/lib/i18n/use-t'

/* ─────────── Quick Tips Banner ─────────── */

const tipKeys = [
  'home.tip.plan',
  'home.tip.vocab',
  'home.tip.reread',
  'home.tip.context',
  'home.tip.quotes',
  'home.tip.cyclical',
]

function QuickTipsBanner() {
  const t = useT()
  const [tipIndex, setTipIndex] = useState(0)

  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (motionQuery.matches) return

    const interval = setInterval(() => {
      setTipIndex((prev) => (prev + 1) % tipKeys.length)
    }, 8000)

    const handleChange = (e: MediaQueryListEvent) => {
      if (e.matches) clearInterval(interval)
    }
    motionQuery.addEventListener('change', handleChange)

    return () => {
      clearInterval(interval)
      motionQuery.removeEventListener('change', handleChange)
    }
  }, [])

  return (
    <section className="py-5">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center gap-3 px-5 py-4 rounded-2xl border border-primary/20 bg-primary/[0.04]">
          <Lightbulb className="w-5 h-5 text-primary shrink-0" />
          <p className="text-sm text-muted-foreground leading-relaxed transition-opacity duration-500">
            <span className="font-semibold text-primary">{t('home.tip.label')}</span>{' '}
            {t(tipKeys[tipIndex])}
          </p>
        </div>
      </div>
    </section>
  )
}

/* ─────────── Marketing hero + social proof ─────────── */

export default function MarketingHero() {
  const t = useT()
  const stats: Array<{ icon: typeof BookOpen; color: string; value: string; labelKey: string }> = [
    {
      icon: BookOpen,
      color: 'text-primary bg-primary/10',
      value: '470+',
      labelKey: 'home.stat.lessons',
    },
    {
      icon: FileText,
      color: 'text-clay-600 bg-orange-500/10',
      value: '130+',
      labelKey: 'home.stat.mocks',
    },
    {
      icon: Lightbulb,
      color: 'text-rose-400 bg-rose-500/10',
      value: '30',
      labelKey: 'home.stat.poems',
    },
    {
      icon: Sparkles,
      color: 'text-cyan-400 bg-cyan-500/10',
      value: '7',
      labelKey: 'home.stat.games',
    },
    {
      icon: Layers,
      color: 'text-purple-400 bg-purple-500/10',
      value: '2,000+',
      labelKey: 'home.stat.flashcards',
    },
    {
      icon: Target,
      color: 'text-emerald-400 bg-emerald-500/10',
      value: '1-9',
      labelKey: 'home.stat.grading',
    },
  ]
  return (
    <>
      {/* ━━━ HERO (static - critical for LCP) ━━━ */}
      <section className="relative overflow-x-hidden pt-24 pb-28 sm:pt-32 sm:pb-36">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/[0.06] rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-blue-500/[0.03] rounded-full blur-[120px] pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <Badge
            variant="outline"
            className="border-primary/20 bg-primary/[0.06] text-primary text-sm font-semibold mb-10 gap-2 px-4 py-1.5"
          >
            <Sparkles className="w-4 h-4" />
            {t('home.hero.badge')}
          </Badge>

          <h1 className="text-foreground">
            {t('home.hero.title_line1')}
            <br />
            <span className="text-primary">{t('home.hero.title_line2')}</span>
          </h1>

          <p className="mt-7 text-body-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t('home.hero.subtitle')}
          </p>

          {/* Trust indicators */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-400" /> {t('home.hero.trust.teachers')}
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-400" /> {t('home.hero.trust.grading')}
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-400" /> {t('home.cancel_anytime')}
            </span>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="default"
              size="lg"
              className="text-base px-8 h-12 shadow-lg shadow-primary/20"
              render={<Link href="/auth/register" />}
            >
              {t('home.hero.cta_start_free')}
            </Button>
            <Button
              variant="secondary"
              size="lg"
              className="text-base px-8 h-12"
              render={<Link href="/courses" />}
            >
              {t('home.hero.cta_browse')}
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-base px-8 h-12 gap-2"
              render={<Link href="/demo/school" />}
            >
              <Sparkles className="w-4 h-4" />
              {t('home.hero.cta_demo')}
            </Button>
          </div>
        </div>
      </section>

      {/* ━━━ SOCIAL PROOF BAR (static - above the fold) ━━━ */}
      <section className="border-y border-border/40 bg-card/30">
        <div className="max-w-5xl mx-auto px-6 py-10">
          <p className="text-center text-muted-foreground text-sm font-medium mb-7">
            {t('home.social_proof.heading')}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8">
            {stats.map((stat) => (
              <div key={stat.labelKey} className="flex items-center gap-3">
                <div
                  className={cn(
                    'w-10 h-10 rounded-xl flex items-center justify-center shrink-0',
                    stat.color,
                  )}
                >
                  <stat.icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xl font-bold tracking-tight text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{t(stat.labelKey)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ QUICK TIPS BANNER (static - near fold) ━━━ */}
      <QuickTipsBanner />
    </>
  )
}
