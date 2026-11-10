'use client'

import Link from 'next/link'
import { ArrowLeft, Quote, Lightbulb, BookOpen } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import StudyTools from '@/components/study/StudyTools'
import { useT } from '@/lib/i18n/use-t'
import { QUOTES_BY_ACT } from '@/data/key-quotes/macbeth'

// ── Page component ────────────────────────────────────────────────────────────

export default function MacbethKeyQuotesPage() {
  const tr = useT()
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl space-y-10 px-4 py-8 sm:px-6 lg:px-8">
        <StudyTools textName="Macbeth" textType="play" examBoard="AQA" />

        {/* Header */}
        <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-amber-500/[0.04] p-6 sm:p-8 lg:p-10">
          <div className="pointer-events-none absolute -end-20 -top-20 h-64 w-64 rounded-full bg-amber-500/5 blur-3xl" />
          <div className="relative">
            <Button
              variant="ghost"
              size="sm"
              className="mb-4 -ms-2 text-muted-foreground"
              render={<Link href="/revision/texts/macbeth" />}
            >
              <ArrowLeft className="size-3.5" />
              {tr('rev.texts.common.back_to_overview').replace('{text}', 'Macbeth')}
            </Button>
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <Badge variant="secondary">
                <Quote className="me-1 size-3 text-clay-700 dark:text-clay-300" />
                {tr('rev.texts.macbeth.quotes.bank_badge')}
              </Badge>
              <Badge variant="outline">
                {/* Counted, not typed: it said 30 while the page held 34 (24 October 2026). */}
                {tr('rev.texts.common.quotes_count').replace(
                  '{n}',
                  String(QUOTES_BY_ACT.reduce((n, act) => n + act.quotes.length, 0)),
                )}
              </Badge>
            </div>
            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
              {tr('rev.texts.macbeth.quotes.title')}
            </h1>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              {tr('rev.texts.macbeth.quotes.intro')}
            </p>
          </div>
        </section>

        {/* Exam tip */}
        <div className="rounded-lg border border-amber-500/20 bg-amber-500/[0.04] p-4">
          <h4 className="mb-1 flex items-center gap-1.5 font-semibold text-amber-700 dark:text-amber-300">
            <Lightbulb className="size-4" /> {tr('rev.texts.macbeth.quotes.how_to_use_h')}
          </h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            You do not need to memorise every quote -- aim for 10-15 that you can analyse in depth.
            Choose quotes that work for multiple themes and characters so each one earns maximum
            marks. For each quote, practise identifying the technique, explaining its effect, and
            linking it to context.
          </p>
        </div>

        {/* Quote cards by act */}
        {QUOTES_BY_ACT.map((act) => (
          <Card key={act.act}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className={`size-3 rounded-full ${act.colour}`} />
                {act.act} - {act.label}
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                {tr('rev.texts.common.key_quotes_count').replace('{n}', String(act.quotes.length))}
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              {act.quotes.map((q, i) => (
                <div key={i} className="rounded-lg border border-border/60 p-4 space-y-2">
                  <p className="text-lg font-medium leading-snug">&ldquo;{q.quote}&rdquo;</p>
                  <p className="text-xs text-muted-foreground-subtle">
                    {q.speaker} - {q.actScene}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <span className="font-medium text-foreground">
                      {tr('rev.texts.common.analysis')}:{' '}
                    </span>
                    {q.analysis}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {q.themes.map((t) => (
                      <Badge key={t} variant="outline" className="text-xs">
                        {t}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        ))}

        {/* Navigation */}
        <div className="flex justify-between items-center pt-4 pb-8">
          <Button variant="outline" render={<Link href="/revision/texts/macbeth" />}>
            <ArrowLeft className="size-4 me-1" /> {tr('rev.texts.common.overview')}
          </Button>
          <Button variant="outline" render={<Link href="/revision/texts/macbeth/context" />}>
            {tr('rev.texts.common.context')} <BookOpen className="size-4 ms-1" />
          </Button>
        </div>
      </div>
    </div>
  )
}
