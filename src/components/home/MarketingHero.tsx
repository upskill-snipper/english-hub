'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import {
  BookOpen,
  Sparkles,
  FileText,
  Layers,
  Lightbulb,
  CheckCircle,
  Target,
} from 'lucide-react'

/* ─────────── Quick Tips Banner ─────────── */

const examTips = [
  'Always plan before you write — even 3 minutes of planning can boost your grade by a full band.',
  'Examiners reward precise vocabulary — swap "good" for "compelling", "bad" for "detrimental".',
  'Re-read the question after every paragraph to make sure you\u2019re still answering it.',
  'Embed context naturally — don\u2019t bolt it on as a separate paragraph. Weave it into your analysis.',
  'Use short, punchy quotes and analyse individual word choices for top marks in any exam board.',
  'For creative writing, a cyclical structure (ending where you began) impresses examiners.',
]

function QuickTipsBanner() {
  const [tipIndex, setTipIndex] = useState(0)
  const tips = examTips

  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (motionQuery.matches) return

    const interval = setInterval(() => {
      setTipIndex((prev) => (prev + 1) % tips.length)
    }, 8000)

    const handleChange = (e: MediaQueryListEvent) => {
      if (e.matches) clearInterval(interval)
    }
    motionQuery.addEventListener('change', handleChange)

    return () => {
      clearInterval(interval)
      motionQuery.removeEventListener('change', handleChange)
    }
  }, [tips.length])

  return (
    <section className="py-5">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center gap-3 px-5 py-4 rounded-2xl border border-primary/20 bg-primary/[0.04]">
          <Lightbulb className="w-5 h-5 text-primary shrink-0" />
          <p className="text-sm text-muted-foreground leading-relaxed transition-opacity duration-500">
            <span className="font-semibold text-primary">Top Tip:</span>{' '}
            {tips[tipIndex]}
          </p>
        </div>
      </div>
    </section>
  )
}

/* ─────────── Marketing hero + social proof ─────────── */

export default function MarketingHero() {
  return (
    <>
      {/* ━━━ HERO (static — critical for LCP) ━━━ */}
      <section className="relative overflow-x-hidden pt-24 pb-28 sm:pt-32 sm:pb-36">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/[0.06] rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-blue-500/[0.03] rounded-full blur-[120px] pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <Badge
            variant="outline"
            className="border-primary/20 bg-primary/[0.06] text-primary text-sm font-semibold mb-10 gap-2 px-4 py-1.5"
          >
            <Sparkles className="w-4 h-4" />
            First Month Free — No Card Required
          </Badge>

          <h1 className="text-foreground">
            Master English.
            <br />
            <span className="text-primary">Ace Your Exams.</span>
          </h1>

          <p className="mt-7 text-body-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            The all-in-one GCSE English platform. Structured courses, AI essay feedback, mock exams, and revision tools
            — all mapped to your exam board. AQA, Edexcel, OCR, WJEC, IGCSE &amp; KS3.
          </p>

          {/* Trust indicators */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-400" /> Written by examiners
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-400" /> GCSE 1–9 grading
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-400" /> Cancel anytime
            </span>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="default"
              size="lg"
              className="text-base px-8 h-12 shadow-lg shadow-primary/20"
              render={<Link href="/auth/register" />}
            >
              Start Free — No Card Needed
            </Button>
            <Button variant="secondary" size="lg" className="text-base px-8 h-12" render={<Link href="/courses" />}>
              Browse Courses
            </Button>
            <Button variant="outline" size="lg" className="text-base px-8 h-12 gap-2" render={<Link href="/demo/school" />}>
              <Sparkles className="w-4 h-4" />
              Try Interactive Demo
            </Button>
          </div>
        </div>
      </section>

      {/* ━━━ SOCIAL PROOF BAR (static — above the fold) ━━━ */}
      <section className="border-y border-border/40 bg-card/30">
        <div className="max-w-5xl mx-auto px-6 py-10">
          <p className="text-center text-muted-foreground text-sm font-medium mb-7">
            Trusted by students, teachers, and schools across the UK
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8">
            {[
              { icon: BookOpen, color: 'text-primary bg-primary/10', value: '470+', label: 'Structured Lessons' },
              { icon: FileText, color: 'text-orange-400 bg-orange-500/10', value: '130+', label: 'Mock Papers' },
              { icon: Lightbulb, color: 'text-rose-400 bg-rose-500/10', value: '30', label: 'Poem Studies' },
              { icon: Sparkles, color: 'text-cyan-400 bg-cyan-500/10', value: '7', label: 'GCSE-Grade Games' },
              { icon: Layers, color: 'text-purple-400 bg-purple-500/10', value: '2,000+', label: 'Flashcards' },
              { icon: Target, color: 'text-emerald-400 bg-emerald-500/10', value: '1–9', label: 'Grade Tracking' },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center gap-3">
                <div className={cn('w-10 h-10 rounded-xl flex items-center justify-center shrink-0', stat.color)}>
                  <stat.icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xl font-bold tracking-tight text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ QUICK TIPS BANNER (static — near fold) ━━━ */}
      <QuickTipsBanner />
    </>
  )
}
