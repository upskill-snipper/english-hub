'use client'

import Link from 'next/link'
import { ArrowLeft, BookOpen, Quote, Lightbulb, Sparkles } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import StudyTools from '@/components/study/StudyTools'
import { useT } from '@/lib/i18n/use-t'
import { quotes } from '@/data/key-quotes/a-christmas-carol'

/* ── Page ────────────────────────────────────────────────────────────── */

export default function KeyQuotesPage() {
  const t = useT()
  // Group quotes by stave for navigation
  const staves = ['Stave 1', 'Stave 2', 'Stave 3', 'Stave 4', 'Stave 5']

  return (
    <div className="space-y-10 pb-16">
      {/* Study Tools */}
      <StudyTools textName="A Christmas Carol" textType="novella" />

      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-violet-500/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -end-20 -top-20 h-64 w-64 rounded-full bg-violet-500/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -start-16 h-48 w-48 rounded-full bg-blue-500/5 blur-3xl" />
        <div className="relative">
          <Button
            variant="ghost"
            size="sm"
            className="mb-4 -ms-2 text-muted-foreground"
            render={<Link href="/revision/texts/a-christmas-carol" />}
          >
            <ArrowLeft className="size-3.5" />
            {t('rev.texts.acc.themes.back')}
          </Button>

          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge variant="secondary">
              <Quote className="me-1 size-3 text-violet-400" />
              {t('rev.texts.common.deep_study')}
            </Badge>
            <Badge variant="outline" className="text-muted-foreground">
              <Sparkles className="me-1 size-3" />
              AQA / Edexcel / OCR / Eduqas
            </Badge>
          </div>

          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            {t('rev.texts.common.key_quotes_bank')}
          </h1>
          <p className="mt-2 text-body-lg text-muted-foreground">
            {t('rev.texts.acc.themes.byline')}
          </p>
          <p className="mt-4 max-w-2xl text-body-md text-muted-foreground">
            {t('rev.texts.acc.quotes.intro')}
          </p>
        </div>
      </section>

      {/* Jump to stave */}
      <section>
        <Card>
          <CardContent className="p-4 sm:p-6">
            <h2 className="mb-4 text-heading-md font-heading text-foreground">
              {t('rev.texts.common.jump_to_stave')}
            </h2>
            <div className="flex flex-wrap gap-2">
              {staves.map((s) => (
                <a
                  key={s}
                  href={`#${s.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-foreground/20 hover:bg-muted/40"
                >
                  <BookOpen className="size-3.5 text-violet-400" />
                  {s}
                  <span className="text-xs text-muted-foreground">
                    ({quotes.filter((q) => q.stave === s).length})
                  </span>
                </a>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Quotes by stave */}
      {staves.map((stave) => {
        const staveQuotes = quotes.filter((q) => q.stave === stave)
        return (
          <section
            key={stave}
            id={stave.toLowerCase().replace(/\s+/g, '-')}
            className="scroll-mt-8 space-y-5"
          >
            <div className="flex items-center gap-4 border-b border-border/60 pb-4">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-lg font-bold text-primary">
                {stave.split(' ')[1]}
              </div>
              <h2 className="text-heading-lg font-heading text-foreground">{stave}</h2>
            </div>

            <div className="grid gap-4">
              {staveQuotes.map((q) => (
                <Card key={q.id}>
                  <CardContent className="space-y-4 p-5 sm:p-6">
                    {/* Quote */}
                    <div className="rounded-lg border-s-4 border-s-primary/40 bg-muted/30 p-4">
                      <p className="text-body-md font-medium italic text-foreground">{q.quote}</p>
                      <p className="mt-2 text-xs font-mono text-primary">
                        {q.speaker} -- {q.stave}
                      </p>
                    </div>

                    {/* Context */}
                    <div>
                      <h4 className="mb-1 text-xs font-mono font-medium uppercase tracking-wider text-muted-foreground">
                        {t('rev.texts.common.context')}
                      </h4>
                      <p className="text-body-sm text-muted-foreground">{q.context}</p>
                    </div>

                    {/* Analysis */}
                    <div>
                      <h4 className="mb-1 text-xs font-mono font-medium uppercase tracking-wider text-muted-foreground">
                        {t('rev.texts.common.language_analysis')}
                      </h4>
                      <p className="text-body-sm text-muted-foreground">{q.analysis}</p>
                    </div>

                    {/* Themes & Exam Tip */}
                    <div className="flex flex-col gap-3 sm:flex-row sm:gap-6">
                      <div className="flex-1">
                        <h4 className="mb-1.5 text-xs font-mono font-medium uppercase tracking-wider text-muted-foreground">
                          {t('rev.texts.common.themes')}
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {q.themes.map((themeTag) => (
                            <span
                              key={themeTag}
                              className="rounded-full bg-muted px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground"
                            >
                              {themeTag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="mb-1.5 text-xs font-mono font-medium uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                          <Lightbulb className="size-3 text-clay-600" />
                          {t('rev.texts.common.exam_tip')}
                        </h4>
                        <p className="text-body-sm text-muted-foreground">{q.examTip}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )
      })}

      {/* Public domain notice */}
      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
        {t('rev.texts.acc.themes.public_domain')}
      </p>
    </div>
  )
}
