import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Drama, Quote, Sparkles } from 'lucide-react'

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { getServerBoard } from '@/lib/board/get-server-board'

import { t } from '@/lib/i18n/t'
import { KEY_QUOTES } from '@/data/key-quotes/blood-brothers'
export const metadata: Metadata = {
  openGraph: {
    title: 'Blood Brothers - Key Quotes | The English Hub',
    description:
      'Twenty key quotations from Blood Brothers by Willy Russell, each with speaker, context, analysis and theme tags for quick GCSE revision.',
    images: [
      {
        url: '/api/og?title=Blood+Brothers+-+Key+Quotes+%7C+The+English+Hub',
        width: 1200,
        height: 630,
        alt: 'Blood Brothers - Key Quotes | The English Hub',
      },
    ],
  },
  title: 'Blood Brothers - Key Quotes',
  description:
    'Twenty key quotations from Blood Brothers by Willy Russell, each with speaker, context, analysis and theme tags for quick GCSE revision.',
  alternates: {
    canonical: 'https://theenglishhub.app/revision/texts/blood-brothers/key-quotes',
  },
}

/* ── Page ───────────────────────────────────────────────────────────────── */

export default async function BloodBrothersKeyQuotesPage() {
  const board = await getServerBoard()

  const backLabel = (await t('rev.texts.common.back_to_text')).replace('{text}', 'Blood Brothers')

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
            render={<Link href="/revision/texts/blood-brothers" />}
          >
            <ArrowLeft className="size-3.5" />
            {backLabel}
          </Button>

          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge variant="secondary">
              <Drama className="me-1 size-3 text-violet-400" />
              {await t('rev.texts2.common.modern_text_play')}
            </Badge>
            <Badge variant="outline" className="text-muted-foreground">
              <Sparkles className="me-1 size-3" />
              AQA / Edexcel / Eduqas
            </Badge>
          </div>

          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            {await t('rev.texts.common.key_quotations')}
          </h1>
          <p className="mt-2 text-body-lg text-muted-foreground">Blood Brothers by Willy Russell</p>
          <p className="mt-4 max-w-2xl text-body-md text-muted-foreground">
            {await t('rev.texts2.bb.key_quotes.intro')}
          </p>
        </div>
      </section>

      {/* Quotes */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <Quote className="size-5 text-violet-400" />
          <h2 className="text-heading-lg font-heading text-foreground">
            {await t('rev.texts2.bb.key_quotes.title')}
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
          render={<Link href="/revision/texts/blood-brothers/acts" />}
        >
          {await t('rev.texts2.common.act_by_act_sc')}
          <ArrowRight className="size-3.5" />
        </Button>
        <Button
          variant="outline"
          size="sm"
          render={<Link href="/revision/texts/blood-brothers/characters" />}
        >
          {await t('rev.texts.common.characters')}
          <ArrowRight className="size-3.5" />
        </Button>
        <Button
          variant="outline"
          size="sm"
          render={<Link href="/revision/texts/blood-brothers/themes" />}
        >
          {await t('rev.texts.common.themes')}
          <ArrowRight className="size-3.5" />
        </Button>
        <Button
          variant="outline"
          size="sm"
          render={<Link href="/revision/texts/blood-brothers/essay-plans" />}
        >
          {await t('rev.texts2.common.essay_plans_sc')}
          <ArrowRight className="size-3.5" />
        </Button>
      </section>

      {/* Copyright notice */}
      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
        <strong>{await t('rev.texts2.common.rights_notice_label')}</strong>
        {await t('rev.texts2.bb.rights_body')}
      </p>
    </div>
  )
}
