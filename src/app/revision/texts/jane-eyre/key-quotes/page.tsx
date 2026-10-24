import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, BookOpen, Quote, Sparkles } from 'lucide-react'

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { getServerBoard } from '@/lib/board/get-server-board'

import { t } from '@/lib/i18n/t'
import { quotes } from '@/data/key-quotes/jane-eyre'
export const metadata: Metadata = {
  openGraph: {
    title: 'Jane Eyre Key Quotes - 25 Essential Quotations',
    description:
      'Twenty-five key quotations from Jane Eyre by Charlotte Bronte with analysis, context and theme links, for AQA, Edexcel, OCR and Eduqas GCSE English Literature.',
    images: [
      {
        url: '/api/og?title=Jane+Eyre+Key+Quotes+-+25+Essential+Quotations',
        width: 1200,
        height: 630,
        alt: 'Jane Eyre Key Quotes - 25 Essential Quotations',
      },
    ],
  },
  title: 'Jane Eyre Key Quotes - 25 Essential Quotations',
  description:
    'Twenty-five key quotations from Jane Eyre by Charlotte Bronte with analysis, context and theme links, for AQA, Edexcel, OCR and Eduqas GCSE English Literature.',
  alternates: {
    canonical: 'https://theenglishhub.app/revision/texts/jane-eyre/key-quotes',
  },
}

export default async function JaneEyreKeyQuotesPage() {
  const board = await getServerBoard()

  const contextLabel = await t('rev.textgrp4.common.context_label')

  return (
    <div className="space-y-10 pb-16">
      <Breadcrumb
        items={[
          { label: await t('rev.textgrp4.common.bc_revision'), href: '/revision' },
          { label: await t('rev.textgrp4.common.bc_set_texts'), href: '/revision/texts' },
          { label: 'Jane Eyre', href: '/revision/texts/jane-eyre' },
          { label: await t('rev.texts.jane-eyre.quotes.breadcrumb') },
        ]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-violet-500/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -end-20 -top-20 h-64 w-64 rounded-full bg-violet-500/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -start-16 h-48 w-48 rounded-full bg-emerald-500/5 blur-3xl" />
        <div className="relative">
          <Button
            variant="ghost"
            size="sm"
            className="mb-4 -ms-2 text-muted-foreground"
            render={<Link href="/revision/texts/jane-eyre" />}
          >
            <ArrowLeft className="size-3.5" />
            {await t('rev.texts.jane-eyre.quotes.back')}
          </Button>

          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge variant="secondary">
              <BookOpen className="me-1 size-3 text-emerald-400" />
              {await t('rev.textgrp4.common.19c_novel')}
            </Badge>
            <Badge variant="outline" className="text-muted-foreground">
              <Sparkles className="me-1 size-3" />
              AQA / Edexcel / OCR / Eduqas / AQA A-Level / OCR A-Level
            </Badge>
          </div>

          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            {await t('rev.texts.jane-eyre.quotes.title')}
          </h1>
          <p className="mt-2 text-body-lg text-muted-foreground">
            {await t('rev.texts.jane-eyre.quotes.byline')}
          </p>
          <p className="mt-4 max-w-2xl text-body-md text-muted-foreground">
            {await t('rev.texts.jane-eyre.quotes.intro')}
          </p>
        </div>
      </section>

      {/* Quotes */}
      <div className="grid gap-4">
        {quotes.map((q, i) => (
          <Card key={i}>
            <CardContent className="space-y-3 p-5 sm:p-6">
              <div className="flex items-start gap-2">
                <Quote className="mt-1 size-4 shrink-0 text-violet-400" />
                <p className="text-body-md font-medium italic text-foreground">{q.quote}</p>
              </div>
              <p className="text-caption uppercase tracking-wide text-primary">{q.speaker}</p>
              <p className="text-body-sm text-muted-foreground">
                <span className="font-semibold text-foreground">{contextLabel}</span>
                {q.context}
              </p>
              <p className="text-body-sm text-muted-foreground">{q.analysis}</p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {q.themes.map((theme) => (
                  <span
                    key={theme}
                    className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground"
                  >
                    {theme}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Public domain notice */}
      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
        {(await t('rev.textgrp4.common.public_domain'))
          .replace('{title}', 'Jane Eyre')
          .replace('{author}', 'Charlotte Bronte')
          .replace('{year}', '1847')}
      </p>
    </div>
  )
}
