'use client'

/**
 * EAL (English as Additional Language) landing page - the hub.
 *
 * Rebuilt to match the site's standard hub pattern (mirrors
 * `/revision`): a gradient hero with stat boxes, a standout primary
 * CTA (the CEFR placement test), category-grouped topic card grids,
 * a practice & assessment section and a games card.
 *
 * Designed for Arabic L1 learners preparing for UK GCSE/IGCSE.
 * Every user-facing string is bilingual EN + Khaleeji Arabic via the
 * existing `useLocale` hook and `loc()` helper - EAL content stays in
 * the EAL curriculum + inline bilingual strings (no `t()` dictionary).
 *
 * Metadata lives in `src/app/eal/layout.tsx` - do NOT duplicate here.
 */

import Link from 'next/link'
import {
  Sparkles,
  ArrowRight,
  GraduationCap,
  Target,
  ClipboardCheck,
  BookOpen,
  Layers,
  Languages,
  Gamepad2,
  Blocks,
  SpellCheck2,
  BookA,
  Volume2,
  AlertTriangle,
  PenTool,
  Mic,
  Headphones,
  BookText,
  Globe,
  Eye,
  LineChart,
} from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

import { EAL } from '@/lib/eal/curriculum'
import {
  EAL_CATEGORY_LABEL,
  EAL_CATEGORY_DESCRIPTION,
  type EALCategory,
  loc,
} from '@/lib/eal/types'
import { MKT_EAL_DICTIONARY } from '@/lib/i18n/dictionary-mkt-eal'
import { useLocale } from '@/lib/i18n/use-locale'
import { useT } from '@/lib/i18n/use-t'

// ─── Category presentation ─────────────────────────────────────────────────
// Order + per-category lucide icon and colour tile, matching the
// /revision card language (coloured rounded tile + size-5 icon).

const CATEGORY_ORDER: EALCategory[] = [
  'sentence',
  'grammar',
  'vocabulary',
  'pronunciation',
  'common_errors',
]

const CATEGORY_ICON: Record<EALCategory, typeof BookOpen> = {
  sentence: Blocks,
  grammar: SpellCheck2,
  vocabulary: BookA,
  pronunciation: Volume2,
  common_errors: AlertTriangle,
}

const CATEGORY_COLOUR: Record<EALCategory, string> = {
  sentence: 'text-amber-400',
  grammar: 'text-primary',
  vocabulary: 'text-teal-400',
  pronunciation: 'text-violet-400',
  common_errors: 'text-rose-400',
}

const CATEGORY_BG: Record<EALCategory, string> = {
  sentence: 'bg-amber-500/10',
  grammar: 'bg-primary/10',
  vocabulary: 'bg-teal-500/10',
  pronunciation: 'bg-violet-500/10',
  common_errors: 'bg-rose-500/10',
}

// ─── Banded practice (mock exams) ──────────────────────────────────────────

const PRACTICE_BANDS: ReadonlyArray<{
  band: 'a2' | 'b1' | 'b2' | 'c1'
  label: string
  colour: string
  bg: string
}> = [
  { band: 'a2', label: 'A2', colour: 'text-emerald-400', bg: 'bg-emerald-500/10' },
  { band: 'b1', label: 'B1', colour: 'text-cyan-400', bg: 'bg-cyan-500/10' },
  { band: 'b2', label: 'B2', colour: 'text-violet-400', bg: 'bg-violet-500/10' },
  { band: 'c1', label: 'C1', colour: 'text-rose-400', bg: 'bg-rose-500/10' },
]

export default function EALHubPage() {
  const locale = useLocale()
  const isAr = locale === 'ar'
  const dir = isAr ? 'rtl' : 'ltr'
  const t = (s: { en: string; ar?: string }) => loc(s, locale)

  // Key-based bilingual lookup for MKT_EAL_DICTIONARY (the page-local
  // shard for this marketing hub). Aliased to `tx` because `t` above is
  // already the local LocalizedString shape-resolver used for curriculum
  // data. Prefers the page-local shard; falls back to the master
  // dictionary via `useT()` for any future master-wired key.
  const baseT = useT()
  const tx = (key: string): string => {
    const entry = MKT_EAL_DICTIONARY[key]
    if (entry) return locale === 'ar' && entry.ar ? entry.ar : entry.en
    return baseT(key)
  }

  // ── Group topics by category, preserving curriculum order ──────────────
  const groups: Record<EALCategory, typeof EAL.topics> = {
    sentence: [],
    grammar: [],
    vocabulary: [],
    pronunciation: [],
    common_errors: [],
  }
  EAL.topics.forEach((topic) => groups[topic.category].push(topic))

  // ── Real stats for the hero ────────────────────────────────────────────
  const topicCount = EAL.topics.length
  const totalExercises = EAL.topics.reduce((n, topic) => n + topic.exercises.length, 0)

  const heroStats = [
    {
      icon: BookOpen,
      value: String(topicCount),
      label: tx('mkt.eal.hero_stat.lessons'),
    },
    {
      icon: Layers,
      value: 'A2-C1',
      label: tx('mkt.eal.hero_stat.cefr_levels'),
    },
    {
      icon: Target,
      value: `${totalExercises}+`,
      label: tx('mkt.eal.hero_stat.exercises'),
    },
    {
      icon: ClipboardCheck,
      value: tx('mkt.eal.hero_stat.free_value'),
      label: tx('mkt.eal.hero_stat.placement_test_label'),
    },
  ]

  return (
    <div className="space-y-10 pb-16" dir={dir}>
      {/* ── Institutional hero: school-grade EAL framing ─────────────── */}
      <section
        aria-labelledby="eal-institutional-heading"
        className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-teal-500/[0.04] p-6 sm:p-8 lg:p-10"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-teal-500/[0.05] blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-teal-500/[0.05] blur-3xl"
        />

        <div className="relative">
          <Badge variant="secondary" className="mb-4">
            <GraduationCap className="mr-1 size-3" aria-hidden="true" />
            <span dir="auto">{tx('mkt.eal.inst.badge')}</span>
          </Badge>
          <h1
            id="eal-institutional-heading"
            className="text-display-sm font-heading text-foreground sm:text-display"
            dir="auto"
          >
            {tx('mkt.eal.inst.heading')}
          </h1>
          <p className="mt-3 max-w-3xl text-body-lg text-muted-foreground" dir="auto">
            {tx('mkt.eal.inst.lead')}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button variant="default" size="lg" render={<Link href="/schools" />}>
              <span dir="auto">{tx('mkt.eal.inst.cta_schools')}</span>
              <ArrowRight className="size-4" aria-hidden="true" />
            </Button>
            <Button variant="outline" size="lg" render={<Link href="#cefr-test" />}>
              <span dir="auto">{tx('mkt.eal.inst.cta_test')}</span>
            </Button>
          </div>
        </div>
      </section>

      {/* ── 3 benefit cards row ──────────────────────────────────────── */}
      <section aria-label="EAL benefits for schools">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <div className="mb-3 flex size-10 items-center justify-center rounded-xl bg-teal-500/10">
                <BookA className="size-5 text-teal-400" aria-hidden="true" />
              </div>
              <CardTitle dir="auto">{tx('mkt.eal.benefit.curriculum.title')}</CardTitle>
              <CardDescription dir="auto">{tx('mkt.eal.benefit.curriculum.desc')}</CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <div className="mb-3 flex size-10 items-center justify-center rounded-xl bg-primary/10">
                <Globe className="size-5 text-primary" aria-hidden="true" />
              </div>
              <CardTitle dir="auto">{tx('mkt.eal.benefit.intl.title')}</CardTitle>
              <CardDescription dir="auto">{tx('mkt.eal.benefit.intl.desc')}</CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <div className="mb-3 flex size-10 items-center justify-center rounded-xl bg-violet-500/10">
                <Eye className="size-5 text-violet-400" aria-hidden="true" />
              </div>
              <CardTitle dir="auto">{tx('mkt.eal.benefit.teacher.title')}</CardTitle>
              <CardDescription dir="auto">{tx('mkt.eal.benefit.teacher.desc')}</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* ── What teachers see ────────────────────────────────────────── */}
      <section aria-label="What teachers see">
        <Card>
          <CardHeader>
            <div className="flex items-start gap-4">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-teal-500/10">
                <LineChart className="size-6 text-teal-400" aria-hidden="true" />
              </div>
              <div>
                <CardTitle className="text-heading-md" dir="auto">
                  {tx('mkt.eal.teacher_view.title')}
                </CardTitle>
                <CardDescription className="mt-2 max-w-3xl text-body-sm" dir="auto">
                  {tx('mkt.eal.teacher_view.desc')}
                </CardDescription>
              </div>
            </div>
          </CardHeader>
        </Card>
      </section>

      {/* ── Separator between institutional framing and learner content ─ */}
      <div className="border-t border-border/60 my-12" />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="eal-hero-heading"
        className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-primary/[0.04] p-6 sm:p-8 lg:p-10"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-violet-500/5 blur-3xl"
        />

        <div className="relative">
          <Badge variant="secondary" className="mb-4">
            <Sparkles className="mr-1 size-3" aria-hidden="true" />
            <span dir="auto">{tx('mkt.eal.hero.badge')}</span>
          </Badge>
          <h1
            id="eal-hero-heading"
            className="text-display-sm font-heading text-foreground sm:text-display"
            dir="auto"
          >
            {tx('mkt.eal.hero.heading')}
          </h1>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground" dir="auto">
            {tx('mkt.eal.hero.lead')}
          </p>

          {/* Quick stats */}
          <div className="mt-6 flex flex-wrap gap-4 sm:gap-6">
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="flex items-center gap-2 rounded-lg border border-border/40 bg-background/50 px-3 py-2"
              >
                <stat.icon className="size-4 text-primary" aria-hidden="true" />
                <span className="text-sm font-semibold text-foreground">{stat.value}</span>
                <span className="text-sm text-muted-foreground" dir="auto">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Primary CTA: CEFR placement test ─────────────────────────── */}
      <section
        id="cefr-test"
        className="scroll-mt-24 rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/[0.08] via-card to-violet-500/[0.05] p-6 sm:p-8"
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-4">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/15">
              <ClipboardCheck className="size-6 text-primary" aria-hidden="true" />
            </div>
            <div>
              <Badge variant="secondary" className="mb-2">
                <Sparkles className="mr-1 size-3" aria-hidden="true" />
                <span dir="auto">{tx('mkt.eal.cta.start_here_badge')}</span>
              </Badge>
              <h2 className="text-heading-md font-heading text-foreground" dir="auto">
                {tx('mkt.eal.cta.heading')}
              </h2>
              <p className="mt-1 max-w-xl text-body-sm text-muted-foreground" dir="auto">
                {tx('mkt.eal.cta.lead')}
              </p>
            </div>
          </div>
          <Button variant="default" size="lg" render={<Link href="/eal/diagnostic" />}>
            <span dir="auto">{tx('mkt.eal.cta.button')}</span>
            <ArrowRight className="size-4" aria-hidden="true" />
          </Button>
        </div>
      </section>

      {/* ── Topic section cards, grouped by category ─────────────────── */}
      <section aria-labelledby="eal-topics-heading">
        <div className="mb-5 flex items-center gap-3">
          <GraduationCap className="size-5 text-primary" aria-hidden="true" />
          <h2
            id="eal-topics-heading"
            className="text-heading-lg font-heading text-foreground"
            dir="auto"
          >
            {tx('mkt.eal.topics.heading')}
          </h2>
        </div>

        <div className="space-y-8">
          {CATEGORY_ORDER.map((cat) => {
            const topics = groups[cat]
            if (topics.length === 0) return null
            const Icon = CATEGORY_ICON[cat]
            return (
              <div key={cat}>
                <div className="mb-3 flex items-start gap-3">
                  <div
                    className={`flex size-10 shrink-0 items-center justify-center rounded-xl ${CATEGORY_BG[cat]}`}
                  >
                    <Icon className={`size-5 ${CATEGORY_COLOUR[cat]}`} aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-heading-md font-heading text-foreground" dir="auto">
                      {t(EAL_CATEGORY_LABEL[cat])}
                    </h3>
                    <p className="mt-0.5 max-w-2xl text-body-sm text-muted-foreground" dir="auto">
                      {t(EAL_CATEGORY_DESCRIPTION[cat])}
                    </p>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {topics.map((topic) => (
                    <Link
                      key={topic.id}
                      href={`/eal/${topic.id}`}
                      className="group relative flex flex-col rounded-2xl border border-border/60 bg-card p-5 transition-all duration-200 hover:border-border hover:shadow-card-hover"
                    >
                      <Badge
                        variant="outline"
                        className="absolute right-4 top-4 text-[0.65rem] uppercase tracking-wider"
                      >
                        {topic.cefr}
                      </Badge>

                      <div className="mb-3 flex items-center gap-3">
                        <div
                          className={`flex size-10 items-center justify-center rounded-xl ${CATEGORY_BG[cat]}`}
                        >
                          <Icon className={`size-5 ${CATEGORY_COLOUR[cat]}`} aria-hidden="true" />
                        </div>
                        <div>
                          <h4
                            className="text-heading-md font-heading text-foreground transition-colors group-hover:text-primary"
                            dir="auto"
                          >
                            {t(topic.title)}
                          </h4>
                          <span className="text-caption text-muted-foreground" dir="auto">
                            {topic.examples.length} {tx('mkt.eal.topics.examples_label')}
                            {' · '}
                            {topic.exercises.length} {tx('mkt.eal.topics.exercises_label')}
                          </span>
                        </div>
                      </div>

                      <p
                        className="flex-1 text-body-sm leading-relaxed text-muted-foreground"
                        dir="auto"
                      >
                        {t(topic.description)}
                      </p>

                      <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                        <span dir="auto">{tx('mkt.eal.topics.open_lesson')}</span>
                        <ArrowRight className="size-3.5" aria-hidden="true" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* ── Practice & assessment ────────────────────────────────────── */}
      <section aria-labelledby="eal-practice-heading">
        <div className="mb-5 flex items-center gap-3">
          <Target className="size-5 text-primary" aria-hidden="true" />
          <h2
            id="eal-practice-heading"
            className="text-heading-lg font-heading text-foreground"
            dir="auto"
          >
            {tx('mkt.eal.practice.heading')}
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* Banded mock exams */}
          {PRACTICE_BANDS.map((b) => (
            <Link
              key={b.band}
              href={`/eal/practice/mock-exam-${b.band}`}
              className="group relative flex flex-col rounded-2xl border border-border/60 bg-card p-5 transition-all duration-200 hover:border-border hover:shadow-card-hover"
            >
              <div className="mb-3 flex items-center gap-3">
                <div className={`flex size-10 items-center justify-center rounded-xl ${b.bg}`}>
                  <BookText className={`size-5 ${b.colour}`} aria-hidden="true" />
                </div>
                <div>
                  <h3
                    className="text-heading-md font-heading text-foreground transition-colors group-hover:text-primary"
                    dir="auto"
                  >
                    {tx('mkt.eal.practice.mock_exam_title').replace('{level}', b.label)}
                  </h3>
                  <span className="text-caption text-muted-foreground" dir="auto">
                    {tx('mkt.eal.practice.mock_exam_subtitle').replace('{level}', b.label)}
                  </span>
                </div>
              </div>
              <p className="flex-1 text-body-sm leading-relaxed text-muted-foreground" dir="auto">
                {tx('mkt.eal.practice.mock_exam_body').replace('{level}', b.label)}
              </p>
              <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                <span dir="auto">{tx('mkt.eal.practice.start_practice')}</span>
                <ArrowRight className="size-3.5" aria-hidden="true" />
              </div>
            </Link>
          ))}

          {/* AI-assessed writing & speaking */}
          <Link
            href={`/eal/${EAL.topics[0]?.id ?? 'articles'}/writing`}
            className="group relative flex flex-col rounded-2xl border border-border/60 bg-card p-5 transition-all duration-200 hover:border-border hover:shadow-card-hover"
          >
            <Badge
              variant="default"
              className="absolute right-4 top-4 text-[0.65rem] uppercase tracking-wider"
            >
              <span dir="auto">{tx('mkt.eal.practice.ai_badge')}</span>
            </Badge>
            <div className="mb-3 flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-cyan-500/10">
                <PenTool className="size-5 text-cyan-400" aria-hidden="true" />
              </div>
              <div>
                <h3
                  className="text-heading-md font-heading text-foreground transition-colors group-hover:text-primary"
                  dir="auto"
                >
                  {tx('mkt.eal.practice.ai_title')}
                </h3>
                <span className="text-caption text-muted-foreground" dir="auto">
                  {tx('mkt.eal.practice.ai_subtitle')}
                </span>
              </div>
            </div>
            <p className="flex-1 text-body-sm leading-relaxed text-muted-foreground" dir="auto">
              {tx('mkt.eal.practice.ai_body')}
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-3 text-caption text-muted-foreground">
              <span className="inline-flex items-center gap-1">
                <BookText className="size-3.5" aria-hidden="true" />
                <span dir="auto">{tx('mkt.eal.practice.skill_reading')}</span>
              </span>
              <span className="inline-flex items-center gap-1">
                <Headphones className="size-3.5" aria-hidden="true" />
                <span dir="auto">{tx('mkt.eal.practice.skill_listening')}</span>
              </span>
              <span className="inline-flex items-center gap-1">
                <PenTool className="size-3.5" aria-hidden="true" />
                <span dir="auto">{tx('mkt.eal.practice.skill_writing')}</span>
              </span>
              <span className="inline-flex items-center gap-1">
                <Mic className="size-3.5" aria-hidden="true" />
                <span dir="auto">{tx('mkt.eal.practice.skill_speaking')}</span>
              </span>
            </div>
            <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
              <span dir="auto">{tx('mkt.eal.practice.try_it_now')}</span>
              <ArrowRight className="size-3.5" aria-hidden="true" />
            </div>
          </Link>
        </div>
      </section>

      {/* ── Games CTA card ───────────────────────────────────────────── */}
      <section aria-labelledby="eal-games-heading">
        <Link
          href="/games"
          className="group flex flex-col gap-4 rounded-2xl border border-border/60 bg-gradient-to-br from-amber-500/[0.06] via-card to-primary/[0.04] p-6 transition-all duration-200 hover:border-border hover:shadow-card-hover sm:flex-row sm:items-center sm:justify-between sm:p-8"
        >
          <div className="flex items-start gap-4">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-amber-500/10">
              <Gamepad2 className="size-6 text-amber-400" aria-hidden="true" />
            </div>
            <div>
              <Badge variant="secondary" className="mb-2">
                <Sparkles className="mr-1 size-3" aria-hidden="true" />
                <span dir="auto">{tx('mkt.eal.games.badge')}</span>
              </Badge>
              <h2
                id="eal-games-heading"
                className="text-heading-md font-heading text-foreground transition-colors group-hover:text-primary"
                dir="auto"
              >
                {tx('mkt.eal.games.heading')}
              </h2>
              <p className="mt-1 max-w-xl text-body-sm text-muted-foreground" dir="auto">
                {tx('mkt.eal.games.lead')}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1 text-sm font-medium text-primary">
            <span dir="auto">{tx('mkt.eal.games.play_now')}</span>
            <ArrowRight
              className="size-4 transition-transform group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </div>
        </Link>
      </section>

      {/* ── How to use this section ──────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-gradient-to-r from-primary/[0.06] via-card to-violet-500/[0.04] p-6 sm:p-8">
        <div className="mb-4 flex items-center gap-3">
          <Languages className="size-5 text-primary" aria-hidden="true" />
          <h2 className="text-heading-md font-heading text-foreground" dir="auto">
            {tx('mkt.eal.howto.heading')}
          </h2>
        </div>
        <ol className="space-y-2 text-body-sm text-muted-foreground" dir="auto">
          <li>
            <strong className="text-foreground">{tx('mkt.eal.howto.step1.bold')}</strong>
            {' - '}
            {tx('mkt.eal.howto.step1.body')}
          </li>
          <li>
            <strong className="text-foreground">{tx('mkt.eal.howto.step2.bold')}</strong>
            {' - '}
            {tx('mkt.eal.howto.step2.body')}
          </li>
          <li>
            <strong className="text-foreground">{tx('mkt.eal.howto.step3.bold')}</strong>
            {' - '}
            {tx('mkt.eal.howto.step3.body')}
          </li>
          <li>
            <strong className="text-foreground">{tx('mkt.eal.howto.step4.bold')}</strong>
            {' - '}
            {tx('mkt.eal.howto.step4.body')}
          </li>
        </ol>
      </section>
    </div>
  )
}
