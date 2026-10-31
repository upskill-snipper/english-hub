import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, BookOpen, Quote, Sparkles } from 'lucide-react'

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { getServerBoard } from '@/lib/board/get-server-board'

import { t } from '@/lib/i18n/t'
import { KEY_QUOTES } from '@/data/key-quotes/of-mice-and-men'
export const metadata: Metadata = {
  openGraph: {
    title: 'Of Mice and Men - Key Quotes | The English Hub',
    description:
      'Twenty-four key quotations from Of Mice and Men by John Steinbeck, each with speaker, context, analysis and theme tags for IGCSE revision.',
    images: [
      {
        url: '/api/og?title=Of+Mice+and+Men+-+Key+Quotes+%7C+The+English+Hub',
        width: 1200,
        height: 630,
        alt: 'Of Mice and Men - Key Quotes | The English Hub',
      },
    ],
  },
  title: 'Of Mice and Men - Key Quotes',
  description:
    'Twenty-four key quotations from Of Mice and Men by John Steinbeck, each with speaker, context, analysis and theme tags for IGCSE revision.',
  alternates: {
    canonical: 'https://theenglishhub.app/revision/texts/of-mice-and-men/key-quotes',
  },
}

/* ── Page ───────────────────────────────────────────────────────────────── */

export default async function OfMiceAndMenKeyQuotesPage() {
  const board = await getServerBoard()

  const backLabel = (await t('rev.texts.common.back_to_text')).replace('{text}', 'Of Mice and Men')

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
            render={<Link href="/revision/texts/of-mice-and-men" />}
          >
            <ArrowLeft className="size-3.5" />
            {backLabel}
          </Button>

          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge variant="secondary">
              <BookOpen className="me-1 size-3 text-violet-400" />
              {await t('rev.texts2.common.modern_text_novella')}
            </Badge>
            <Badge variant="outline" className="text-muted-foreground">
              <Sparkles className="me-1 size-3" />
              Edexcel IGCSE
            </Badge>
          </div>

          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            {await t('rev.texts.common.key_quotations')}
          </h1>
          <p className="mt-2 text-body-lg text-muted-foreground">
            Of Mice and Men by John Steinbeck
          </p>
          <p className="mt-4 max-w-2xl text-body-md text-muted-foreground">
            {await t('rev.texts2.omam.key_quotes.intro')}
          </p>
        </div>
      </section>

      {/* Quotes */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <Quote className="size-5 text-violet-400" />
          <h2 className="text-heading-lg font-heading text-foreground">
            {await t('rev.texts2.tkam.key_quotes.title')}
          </h2>
        </div>
        <div className="grid gap-4">
          {KEY_QUOTES.map((q) => (
            <Card key={q.id}>
              <CardContent className="space-y-3 p-5">
                <div className="flex items-start justify-between gap-4">
                  <p className="text-body-md font-medium italic text-foreground">{q.text}</p>
                  <span className="shrink-0 flex size-7 items-center justify-center rounded-full bg-muted text-xs font-semibold text-muted-foreground">
                    {q.id}
                  </span>
                </div>
                <p className="text-caption uppercase tracking-wide text-primary">
                  {q.speaker} - {q.context}
                </p>
                <p className="text-body-sm text-muted-foreground">{q.analysis}</p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {q.themes.map((theme) => (
                    <span
                      key={theme}
                      className="rounded-full bg-muted px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground"
                    >
                      {theme}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Navigation */}
      <section className="flex flex-wrap gap-3">
        <Button
          variant="outline"
          size="sm"
          render={<Link href="/revision/texts/of-mice-and-men/characters" />}
        >
          {await t('rev.texts.common.characters')}
          <ArrowRight className="size-3.5" />
        </Button>
        <Button
          variant="outline"
          size="sm"
          render={<Link href="/revision/texts/of-mice-and-men/themes" />}
        >
          {await t('rev.texts.common.themes')}
          <ArrowRight className="size-3.5" />
        </Button>
        <Button
          variant="outline"
          size="sm"
          render={<Link href="/revision/texts/of-mice-and-men/context" />}
        >
          {await t('rev.texts.common.context')}
          <ArrowRight className="size-3.5" />
        </Button>
      </section>

      {/* Copyright notice */}
      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
        {await t('rev.texts2.common.fair_dealing_notice')}
      </p>
    </div>
  )
}
