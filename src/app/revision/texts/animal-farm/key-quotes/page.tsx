'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, BookOpen, Filter, Lightbulb, Quote, Sparkles } from 'lucide-react'

import StudyTools from '@/components/study/StudyTools'
import { useT } from '@/lib/i18n/use-t'
import { QUOTES } from '@/data/key-quotes/animal-farm'

/* ────────────────────────────────────────────────────────────────────── */
/*  Data                                                                 */
/* ────────────────────────────────────────────────────────────────────── */

const THEME_LIST = [
  'Power & Corruption',
  'Language & Propaganda',
  'Revolution & Betrayal',
  'Class & Inequality',
  'Loyalty & Exploitation',
  'Education & Awareness',
] as const

/* ────────────────────────────────────────────────────────────────────── */
/*  Page                                                                 */
/* ────────────────────────────────────────────────────────────────────── */

export default function AnimalFarmKeyQuotesPage() {
  const t = useT()
  const [filterTheme, setFilterTheme] = useState<string | null>(null)

  const filtered = QUOTES.filter((q) => {
    if (filterTheme && !q.themes.includes(filterTheme)) return false
    return true
  })

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Study Tools */}
        <StudyTools textName="Animal Farm" textType="novella" />

        {/* Hero */}
        <section className="mt-8 rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-primary/[0.04] p-6 sm:p-8 lg:p-10">
          <Link
            href="/revision/texts/animal-farm"
            className="mb-4 inline-flex items-center gap-1 text-sm text-primary hover:text-primary/80"
          >
            <ArrowLeft className="size-3.5" />
            {t('rev.texts.af.back')}
          </Link>

          <div className="mb-4 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1 rounded-full bg-clay-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-clay-700 dark:text-clay-300">
              <Quote className="size-3" />
              {t('rev.texts.common.key_quotes')}
            </span>
            <span className="inline-flex items-center gap-1 rounded-full border border-border/60 px-3 py-1 text-xs text-primary">
              <Sparkles className="size-3" />
              AO1 / AO2
            </span>
          </div>

          <h1 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t('rev.texts.af.quotes.title')}
          </h1>
          <p className="mt-2 text-lg text-muted-foreground">{t('rev.texts.af.quotes.byline')}</p>
          <p className="mt-4 max-w-2xl text-muted-foreground">{t('rev.texts.af.quotes.intro')}</p>
        </section>

        {/* Exam tip banner */}
        <section className="mt-8 rounded-xl border border-clay-500/20 bg-clay-500/10 p-5">
          <div className="flex items-start gap-3">
            <Lightbulb className="mt-0.5 size-5 shrink-0 text-clay-700 dark:text-clay-300" />
            <div className="text-sm text-muted-foreground">
              <p className="mb-1 font-bold text-foreground">
                {t('rev.texts.common.how_to_use_quotes')}
              </p>
              <p>{t('rev.texts.af.quotes.how_to_use_body')}</p>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="mt-8">
          <div className="flex items-center gap-2 mb-3">
            <Filter className="size-4 text-primary" />
            <h2 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
              {t('rev.texts.common.filter_by_theme')}
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setFilterTheme(null)}
              className={`rounded-lg px-3 py-1.5 text-xs font-medium transition ${
                !filterTheme
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-secondary'
              }`}
            >
              {t('rev.texts.common.all_count').replace('{n}', String(QUOTES.length))}
            </button>
            {THEME_LIST.map((theme) => (
              <button
                key={theme}
                onClick={() => setFilterTheme(filterTheme === theme ? null : theme)}
                className={`rounded-lg px-3 py-1.5 text-xs font-medium transition ${
                  filterTheme === theme
                    ? 'bg-clay-600 text-white dark:bg-clay-500'
                    : 'bg-muted text-muted-foreground hover:bg-secondary'
                }`}
              >
                {theme}
              </button>
            ))}
          </div>
        </section>

        {/* Quote cards */}
        <div className="mt-8 space-y-4">
          {filtered.map((q) => (
            <section key={q.id} className="rounded-xl border border-border/60 bg-card p-5">
              {/* Quote */}
              <div className="flex items-start gap-3 mb-3">
                <Quote className="mt-1 size-5 shrink-0 text-clay-700 dark:text-clay-300" />
                <p className="font-heading text-lg font-semibold leading-snug text-foreground">
                  &ldquo;{q.quote}&rdquo;
                </p>
              </div>

              {/* Speaker & chapter */}
              <div className="mb-3 flex flex-wrap items-center gap-2">
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-primary">
                  {q.speaker}
                </span>
                <span className="text-xs text-muted-foreground">&bull;</span>
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-clay-700 dark:text-clay-300">
                  {q.chapter}
                </span>
              </div>

              {/* Context */}
              <div className="mb-3">
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  {t('rev.texts.common.context')}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{q.context}</p>
              </div>

              {/* Analysis */}
              <div className="mb-3">
                <p className="text-xs font-bold uppercase tracking-wider text-primary">
                  {t('rev.texts.common.analysis')}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{q.analysis}</p>
              </div>

              {/* Thematic links */}
              <div className="mb-3 rounded-lg border border-primary/20 bg-primary/5 p-3">
                <p className="mb-1 text-xs font-bold uppercase tracking-wider text-primary">
                  {t('rev.texts.common.thematic_links')}
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">{q.thematicLinks}</p>
              </div>

              {/* Themes */}
              <div className="mb-3 flex flex-wrap gap-1.5">
                {q.themes.map((th) => (
                  <span
                    key={th}
                    className="rounded-full border border-clay-500/30 bg-clay-500/10 px-2.5 py-0.5 text-xs font-medium text-clay-700 dark:text-clay-300"
                  >
                    {th}
                  </span>
                ))}
              </div>

              {/* Exam tip */}
              <div className="rounded-lg bg-clay-500/10 p-3">
                <div className="flex items-start gap-2">
                  <Lightbulb className="mt-0.5 size-3.5 shrink-0 text-clay-700 dark:text-clay-300" />
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    <span className="font-bold text-clay-700 dark:text-clay-300">
                      {t('rev.texts.common.exam_tip_label')}
                    </span>
                    {q.examTip}
                  </p>
                </div>
              </div>
            </section>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="mt-8 rounded-xl border border-border/60 bg-card p-8 text-center">
            <p className="text-sm text-muted-foreground">
              {t('rev.texts.common.no_quotes_match_theme')}
            </p>
          </div>
        )}

        {/* Navigation */}
        <section className="mt-14 rounded-xl border border-border/60 bg-primary/5 p-6">
          <h3 className="font-heading text-xl font-bold text-foreground">
            {t('rev.texts.common.continue_studying')}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            {t('rev.texts.af.quotes.continue_sub')}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Link
              href="/revision/texts/animal-farm/characters"
              className="inline-flex items-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            >
              {t('rev.texts.common.characters')}
            </Link>
            <Link
              href="/revision/texts/animal-farm/themes"
              className="inline-flex items-center rounded-lg border border-border/60 bg-card px-4 py-2 text-sm font-medium text-primary hover:bg-primary/5"
            >
              {t('rev.texts.common.themes')}
            </Link>
            <Link
              href="/revision/texts/animal-farm/context"
              className="inline-flex items-center rounded-lg border border-border/60 bg-card px-4 py-2 text-sm font-medium text-primary hover:bg-primary/5"
            >
              {t('rev.texts.common.context')}
            </Link>
            <Link
              href="/revision/texts/animal-farm/essay-plans"
              className="inline-flex items-center rounded-lg border border-border/60 bg-card px-4 py-2 text-sm font-medium text-primary hover:bg-primary/5"
            >
              {t('rev.texts.common.essay_plans')}
            </Link>
          </div>
        </section>

        {/* Rights / fair-dealing notice */}
        <p className="mt-10 border-t border-border/60 pt-4 text-xs text-muted-foreground">
          {t('rev.texts.af.rights_notice')}
        </p>
      </div>
    </div>
  )
}
