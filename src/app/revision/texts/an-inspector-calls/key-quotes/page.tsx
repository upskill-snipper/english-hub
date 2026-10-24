'use client'

import Link from 'next/link'
import { ArrowLeft, BookOpen, Lightbulb, Quote, Sparkles, Filter } from 'lucide-react'

import StudyTools from '@/components/study/StudyTools'
import { useT } from '@/lib/i18n/use-t'
import { QUOTES } from '@/data/key-quotes/an-inspector-calls'

/* ────────────────────────────────────────────────────────────────────── */
/*  Data                                                                 */
/* ────────────────────────────────────────────────────────────────────── */

const ACTS = ['Act 1', 'Act 2', 'Act 3'] as const
const THEME_LIST = [
  'Social Responsibility',
  'Class & Inequality',
  'Gender',
  'Age & Generational Change',
  'Power & Abuse of Power',
  'Guilt & Morality',
  'Capitalism vs Socialism',
] as const

/* ────────────────────────────────────────────────────────────────────── */
/*  Page                                                                 */
/* ────────────────────────────────────────────────────────────────────── */

import { useState } from 'react'

export default function KeyQuotesPage() {
  const t = useT()
  const [filterAct, setFilterAct] = useState<string | null>(null)
  const [filterTheme, setFilterTheme] = useState<string | null>(null)

  const filtered = QUOTES.filter((q) => {
    if (filterAct && q.act !== filterAct) return false
    if (filterTheme && !q.themes.includes(filterTheme)) return false
    return true
  })

  return (
    <div className="min-h-screen bg-background font-heading">
      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Study Tools */}
        <StudyTools textName="An Inspector Calls" textType="play" />

        {/* Hero */}
        <section className="mt-8 rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-primary/[0.06] p-6 sm:p-8 lg:p-10">
          <Link
            href="/revision/texts/an-inspector-calls"
            className="mb-4 inline-flex items-center gap-1 text-sm text-teal-600 hover:text-teal-700 dark:text-teal-300 dark:hover:text-teal-200"
          >
            <ArrowLeft className="size-3.5" />
            {t('rev.texts.aic.back')}
          </Link>

          <div className="mb-4 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1 rounded-full bg-teal-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-teal-700 dark:text-teal-300">
              <Quote className="size-3" />
              {t('rev.texts.common.key_quotes_bank')}
            </span>
            <span className="inline-flex items-center gap-1 rounded-full border border-clay-500/30 px-3 py-1 text-xs text-clay-700 dark:text-clay-300">
              <Sparkles className="size-3" />
              AQA / Edexcel / OCR / Eduqas
            </span>
          </div>

          <h1 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t('rev.texts.aic.quotes.title')}
          </h1>
          <p className="mt-2 text-lg text-muted-foreground">{t('rev.texts.aic.byline')}</p>
          <p className="mt-4 max-w-2xl text-muted-foreground">{t('rev.texts.aic.quotes.intro')}</p>
        </section>

        {/* Exam tip banner */}
        <section className="mt-8 rounded-xl border border-clay-500/20 bg-clay-500/10 p-5">
          <div className="flex items-start gap-3">
            <Lightbulb className="mt-0.5 size-5 shrink-0 text-clay-600 dark:text-clay-300" />
            <div className="text-sm text-muted-foreground">
              <p className="mb-1 font-bold text-foreground">
                {t('rev.texts.common.exam_technique')}
              </p>
              <p>{t('rev.texts.aic.quotes.exam_technique_body')}</p>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="mt-8">
          <div className="flex items-center gap-2 mb-3">
            <Filter className="size-4 text-teal-600 dark:text-teal-300" />
            <h2 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
              {t('rev.texts.common.filter_quotes')}
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => {
                setFilterAct(null)
                setFilterTheme(null)
              }}
              className={`rounded-lg px-3 py-1.5 text-xs font-medium transition ${
                !filterAct && !filterTheme
                  ? 'bg-teal-600 text-white'
                  : 'bg-muted text-muted-foreground hover:bg-secondary'
              }`}
            >
              {t('rev.texts.common.all_count').replace('{n}', String(QUOTES.length))}
            </button>
            {ACTS.map((act) => (
              <button
                key={act}
                onClick={() => {
                  setFilterAct(filterAct === act ? null : act)
                  setFilterTheme(null)
                }}
                className={`rounded-lg px-3 py-1.5 text-xs font-medium transition ${
                  filterAct === act
                    ? 'bg-teal-600 text-white'
                    : 'bg-muted text-muted-foreground hover:bg-secondary'
                }`}
              >
                {act} ({QUOTES.filter((q) => q.act === act).length})
              </button>
            ))}
          </div>
          <div className="mt-2 flex flex-wrap gap-2">
            {THEME_LIST.map((theme) => (
              <button
                key={theme}
                onClick={() => {
                  setFilterTheme(filterTheme === theme ? null : theme)
                  setFilterAct(null)
                }}
                className={`rounded-lg px-3 py-1.5 text-xs font-medium transition ${
                  filterTheme === theme
                    ? 'bg-clay-600 text-white'
                    : 'bg-muted text-muted-foreground hover:bg-secondary'
                }`}
              >
                {theme}
              </button>
            ))}
          </div>
        </section>

        {/* Quotes */}
        <div className="mt-8 space-y-4">
          {filtered.map((q) => (
            <section key={q.id} className="rounded-xl border border-border/60 bg-muted p-5">
              {/* Quote */}
              <p className="text-lg font-medium italic text-foreground">{q.quote}</p>
              <div className="mt-2 flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-teal-700 dark:text-teal-300">
                  {q.speaker}
                </span>
                <span className="text-xs text-muted-foreground">&bull;</span>
                <span className="text-xs font-semibold uppercase tracking-wider text-clay-600 dark:text-clay-300">
                  {q.act}
                </span>
              </div>

              {/* Context */}
              <div className="mt-3">
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  {t('rev.texts.common.context')}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{q.context}</p>
              </div>

              {/* AO2 */}
              <div className="mt-3">
                <p className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-300">
                  {t('rev.texts.common.ao2_language_analysis')}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {q.ao2Analysis}
                </p>
              </div>

              {/* AO3 */}
              <div className="mt-3">
                <p className="text-xs font-bold uppercase tracking-wider text-clay-600 dark:text-clay-300">
                  {t('rev.texts.common.ao3_context_link_dash')}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{q.ao3Context}</p>
              </div>

              {/* Themes */}
              <div className="mt-3 flex flex-wrap gap-1">
                {q.themes.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-teal-500/[0.08] px-2.5 py-0.5 text-xs font-medium text-teal-700 dark:text-teal-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Exam tip */}
              <div className="mt-3 rounded-lg bg-clay-500/10 p-3">
                <div className="flex items-start gap-2">
                  <Lightbulb className="mt-0.5 size-3.5 shrink-0 text-clay-600 dark:text-clay-300" />
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    <span className="font-bold text-clay-600 dark:text-clay-300">
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
          <div className="mt-8 rounded-xl border border-border/60 bg-muted p-8 text-center">
            <p className="text-sm text-muted-foreground">{t('rev.texts.common.no_quotes_match')}</p>
          </div>
        )}

        {/* Navigation */}
        <section className="mt-14 rounded-xl border border-teal-500/20 bg-teal-500/5 p-6">
          <h3 className="font-heading text-xl font-bold text-foreground">
            {t('rev.texts.common.continue_studying')}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            {t('rev.texts.aic.context.continue_sub')}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Link
              href="/revision/texts/an-inspector-calls/characters"
              className="inline-flex items-center rounded-lg bg-teal-600 px-4 py-2 text-sm font-medium text-white hover:bg-teal-700"
            >
              {t('rev.texts.common.characters')}
            </Link>
            <Link
              href="/revision/texts/an-inspector-calls/themes"
              className="inline-flex items-center rounded-lg border border-teal-500/30 bg-card px-4 py-2 text-sm font-medium text-teal-700 hover:bg-teal-500/5 dark:text-teal-300"
            >
              {t('rev.texts.common.themes')}
            </Link>
            <Link
              href="/revision/texts/an-inspector-calls/context"
              className="inline-flex items-center rounded-lg border border-teal-500/30 bg-card px-4 py-2 text-sm font-medium text-teal-700 hover:bg-teal-500/5 dark:text-teal-300"
            >
              {t('rev.texts.common.context')}
            </Link>
          </div>
        </section>

        {/* Fair-dealing notice */}
        <p className="mt-10 border-t border-border/60 pt-4 text-xs text-muted-foreground">
          {t('rev.texts.aic.fair_dealing')}
        </p>
      </div>
    </div>
  )
}
