import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, BookOpen, Quote } from 'lucide-react'

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { getServerBoard } from '@/lib/board/get-server-board'
import { t } from '@/lib/i18n/t'
import { KEY_QUOTES } from '@/data/key-quotes/great-expectations'

export const metadata: Metadata = {
  openGraph: {
    title: 'Great Expectations Key Quotes | The English Hub',
    description:
      '25 essential quotations from Great Expectations by Charles Dickens with speaker, context and detailed analysis for AQA GCSE English Literature.',
    images: [
      {
        url: '/api/og?title=Great+Expectations+Key+Quotes+%7C+The+English+Hub',
        width: 1200,
        height: 630,
        alt: 'Great Expectations Key Quotes | The English Hub',
      },
    ],
  },
  title: 'Great Expectations Key Quotes',
  description:
    '25 essential quotations from Great Expectations by Charles Dickens with speaker, context and detailed analysis for AQA GCSE English Literature.',
  alternates: {
    canonical: 'https://theenglishhub.app/revision/texts/great-expectations/key-quotes',
  },
}

export default async function GreatExpectationsKeyQuotesPage() {
  const board = await getServerBoard()

  const analysisLabel = await t('rev.texts.common.analysis')

  return (
    <div className="space-y-10 pb-16">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-violet-500/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -end-20 -top-20 h-64 w-64 rounded-full bg-violet-500/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -start-16 h-48 w-48 rounded-full bg-blue-500/5 blur-3xl" />
        <div className="relative">
          <Button
            variant="ghost"
            size="sm"
            className="mb-4 -ms-2 text-muted-foreground"
            render={<Link href="/revision/texts/great-expectations" />}
          >
            <ArrowLeft className="size-3.5" />
            {(await t('rev.texts.common.back_to_text')).replace('{text}', 'Great Expectations')}
          </Button>

          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge variant="secondary">
              <BookOpen className="me-1 size-3 text-emerald-400" />
              {await t('rev.texts2.common.c19_novel')}
            </Badge>
            <Badge variant="outline" className="text-muted-foreground">
              AQA / Edexcel / OCR / Edexcel IGCSE / Edexcel IAL
            </Badge>
          </div>

          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            {await t('rev.texts.common.key_quotations')}
          </h1>
          <p className="mt-2 text-body-lg text-muted-foreground">
            Great Expectations - Charles Dickens
          </p>
          <p className="mt-4 max-w-2xl text-body-md text-muted-foreground">
            {await t('rev.texts2.ge.key_quotes.intro')}
          </p>
        </div>
      </section>

      {/* Quotes */}
      <div className="grid gap-4">
        {KEY_QUOTES.map((q, i) => (
          <Card key={i}>
            <CardContent className="space-y-3 p-5 sm:p-6">
              <div className="flex items-start gap-3">
                <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-violet-500/10 text-xs font-bold text-violet-400">
                  {i + 1}
                </div>
                <div className="space-y-3 min-w-0">
                  <p className="text-body-md font-medium italic text-foreground">{q.quote}</p>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                    <p className="text-caption font-medium uppercase tracking-wide text-primary">
                      {q.speaker}
                    </p>
                    <p className="text-caption text-muted-foreground">{q.chapter}</p>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {q.themes.map((theme) => (
                      <span
                        key={theme}
                        className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground"
                      >
                        {theme}
                      </span>
                    ))}
                  </div>
                  <div className="rounded-xl border border-border/60 bg-muted/20 p-4">
                    <p className="flex items-center gap-1.5 mb-1.5 text-xs font-medium uppercase tracking-wide text-foreground">
                      <Quote className="size-3 text-violet-400" />
                      {analysisLabel}
                    </p>
                    <p className="text-body-sm text-muted-foreground">{q.analysis}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Public domain notice */}
      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
        <em>Great Expectations</em>
        {await t('rev.texts2.common.public_domain_dickens_after')}
      </p>
    </div>
  )
}
