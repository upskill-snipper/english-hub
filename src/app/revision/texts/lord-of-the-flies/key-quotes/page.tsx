'use client'

import Link from 'next/link'
import { ArrowLeft, BookOpen, Lightbulb, Quote, Sparkles } from 'lucide-react'

import StudyTools from '@/components/study/StudyTools'
import { useT } from '@/lib/i18n/use-t'
import { QUOTES } from '@/data/key-quotes/lord-of-the-flies'

/* ────────────────────────────────────────────────────────────────────── */
/*  Page                                                                 */
/* ────────────────────────────────────────────────────────────────────── */

export default function LOTFKeyQuotesPage() {
  const t = useT()
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Study Tools */}
        <StudyTools textName="Lord of the Flies" textType="novel" />

        {/* Hero */}
        <section className="mt-8 rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-primary/[0.04] p-6 sm:p-8 lg:p-10">
          <Link
            href="/revision/texts/lord-of-the-flies"
            className="mb-4 inline-flex items-center gap-1 text-sm text-primary hover:text-primary/80"
          >
            <ArrowLeft className="size-3.5" />
            {t('rev.texts.lotf.back')}
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
            {t('rev.texts.lotf.quotes.title')}
          </h1>
          <p className="mt-2 text-lg text-muted-foreground">{t('rev.texts.lotf.quotes.byline')}</p>
          <p className="mt-4 max-w-2xl text-muted-foreground">{t('rev.texts.lotf.quotes.intro')}</p>
        </section>

        {/* Exam tip banner */}
        <section className="mt-8 rounded-xl border border-clay-500/20 bg-clay-500/10 p-5">
          <div className="flex items-start gap-3">
            <Lightbulb className="mt-0.5 size-5 shrink-0 text-clay-700 dark:text-clay-300" />
            <div className="text-sm text-muted-foreground">
              <p className="mb-1 font-bold text-foreground">
                {t('rev.texts.common.how_to_use_quotes')}
              </p>
              <p>
                Aim for 10&ndash;12 quotes you can analyse confidently. Choose quotes that cover
                multiple themes so each one earns maximum marks. For each quote, practise
                identifying the technique (imagery, symbolism, irony), explaining its effect, and
                linking it to Golding&rsquo;s views on human nature.
              </p>
            </div>
          </div>
        </section>

        {/* Quote cards */}
        <section className="mt-10 space-y-6">
          {QUOTES.map((q) => (
            <div key={q.id} className="rounded-xl border border-border/60 bg-card p-5">
              {/* Quote text */}
              <div className="flex items-start gap-3 mb-3">
                <Quote className="mt-1 size-5 shrink-0 text-clay-700 dark:text-clay-300" />
                <p className="font-heading text-lg font-semibold leading-snug text-foreground">
                  &ldquo;{q.quote}&rdquo;
                </p>
              </div>

              {/* Speaker & chapter */}
              <div className="mb-3 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                <span className="rounded-full bg-primary/10 px-2.5 py-0.5 font-medium text-primary">
                  {q.speaker}
                </span>
                <span className="rounded-full border border-border/60 px-2.5 py-0.5">
                  {q.chapter}
                </span>
              </div>

              {/* Context */}
              <p className="mb-3 text-sm italic text-muted-foreground">{q.context}</p>

              {/* Analysis */}
              <div className="mb-3 rounded-lg border border-primary/20 bg-primary/5 p-3">
                <p className="mb-1 text-xs font-bold uppercase tracking-wider text-primary">
                  {t('rev.texts.common.analysis')}
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">{q.analysis}</p>
              </div>

              {/* Themes */}
              <div className="flex flex-wrap gap-1.5">
                {q.themes.map((th) => (
                  <span
                    key={th}
                    className="rounded-full border border-clay-500/30 bg-clay-500/10 px-2.5 py-0.5 text-xs font-medium text-clay-700 dark:text-clay-300"
                  >
                    {th}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Navigation */}
        <section className="mt-14 rounded-xl border border-border/60 bg-primary/5 p-6">
          <h3 className="font-heading text-xl font-bold text-foreground">
            {t('rev.texts.common.continue_studying')}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            {t('rev.texts.lotf.quotes.continue_sub')}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Link
              href="/revision/texts/lord-of-the-flies/characters"
              className="inline-flex items-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            >
              {t('rev.texts.common.characters')}
            </Link>
            <Link
              href="/revision/texts/lord-of-the-flies/themes"
              className="inline-flex items-center rounded-lg border border-border/60 bg-card px-4 py-2 text-sm font-medium text-primary hover:bg-primary/5"
            >
              {t('rev.texts.common.themes')}
            </Link>
            <Link
              href="/revision/texts/lord-of-the-flies/context"
              className="inline-flex items-center rounded-lg border border-border/60 bg-card px-4 py-2 text-sm font-medium text-primary hover:bg-primary/5"
            >
              {t('rev.texts.common.context')}
            </Link>
          </div>
        </section>

        {/* Fair-dealing notice */}
        <p className="mt-10 border-t border-border/60 pt-4 text-xs text-muted-foreground">
          {t('rev.texts.lotf.faber_fair_dealing')}
        </p>
      </div>
    </div>
  )
}
