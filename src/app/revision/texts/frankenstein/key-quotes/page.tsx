import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, BookOpen, Quote } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { getServerBoard } from '@/lib/board/get-server-board'
import { t } from '@/lib/i18n/t'
import { QUOTES_BY_THEME } from '@/data/key-quotes/frankenstein'

export const metadata: Metadata = {
  openGraph: {
    title: 'Frankenstein Key Quotes by Theme | The English Hub',
    description:
      'Twenty-five key quotations from Frankenstein by Mary Shelley organised by theme with detailed analysis for GCSE revision.',
    images: [
      {
        url: '/api/og?title=Frankenstein+Key+Quotes+by+Theme+%7C+The+English+Hub',
        width: 1200,
        height: 630,
        alt: 'Frankenstein Key Quotes by Theme | The English Hub',
      },
    ],
  },
  title: 'Frankenstein Key Quotes by Theme',
  description:
    'Twenty-five key quotations from Frankenstein by Mary Shelley organised by theme with detailed analysis for GCSE revision.',
  alternates: {
    canonical: 'https://theenglishhub.app/revision/texts/frankenstein/key-quotes',
  },
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default async function FrankensteinKeyQuotesPage() {
  const board = await getServerBoard()

  const tQuotesCountTpl = await t('rev.texts.common.quotes_count')

  return (
    <div className="space-y-10 pb-16">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-violet-500/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -end-20 -top-20 h-64 w-64 rounded-full bg-violet-500/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -start-16 h-48 w-48 rounded-full bg-emerald-500/5 blur-3xl" />
        <div className="relative">
          <Button
            variant="ghost"
            size="sm"
            className="mb-4 -ms-2 text-muted-foreground"
            render={<Link href="/revision/texts/frankenstein" />}
          >
            <ArrowLeft className="size-3.5" />
            {await t('rev.texts.fr.back')}
          </Button>

          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge variant="secondary">
              <Quote className="me-1 size-3 text-violet-400" />
              {await t('rev.texts.common.key_quotations')}
            </Badge>
            <Badge variant="outline" className="text-muted-foreground">
              AQA / Edexcel / Edexcel IAL / Edexcel A-Level / OCR A-Level
            </Badge>
          </div>

          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            {await t('rev.texts.fr.quotes.title')}
          </h1>
          <p className="mt-2 text-body-lg text-muted-foreground">
            {await t('rev.texts.fr.byline')}
          </p>
          <p className="mt-4 max-w-2xl text-body-md text-muted-foreground">
            {await t('rev.texts.fr.quotes.intro')}
          </p>
        </div>
      </section>

      {/* Quick-navigation */}
      <section>
        <Card>
          <CardContent className="p-5">
            <p className="text-sm font-semibold text-foreground mb-3">
              {await t('rev.texts.fr.quotes.jump_to_theme')}
            </p>
            <div className="flex flex-wrap gap-2">
              {QUOTES_BY_THEME.map((section) => (
                <a
                  key={section.theme}
                  href={`#${section.theme.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted/80 hover:text-foreground"
                >
                  <span className={`block size-2 rounded-full ${section.colour}`} />
                  {section.theme}
                </a>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Quotes by theme */}
      {QUOTES_BY_THEME.map((section) => (
        <section key={section.theme} id={section.theme.toLowerCase().replace(/\s+/g, '-')}>
          <div className="mb-5 flex items-center gap-3">
            <span className={`block size-3 rounded-full ${section.colour}`} />
            <h2 className="text-heading-lg font-heading text-foreground">{section.theme}</h2>
            <Badge variant="outline" className="text-muted-foreground">
              {tQuotesCountTpl.replace('{n}', String(section.quotes.length))}
            </Badge>
          </div>

          <div className="grid gap-4">
            {section.quotes.map((q, i) => (
              <Card key={i}>
                <CardContent className="space-y-2 p-5">
                  <p className="text-body-md font-medium italic text-foreground">
                    &ldquo;{q.quote}&rdquo;
                  </p>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <p className="text-caption uppercase tracking-wide text-primary">{q.speaker}</p>
                    <span className="text-border">|</span>
                    <p className="text-caption text-muted-foreground">{q.chapter}</p>
                  </div>
                  <p className="text-body-sm text-muted-foreground">{q.analysis}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      ))}

      {/* Footer */}
      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
        {await t('rev.texts.fr.quotes.public_domain')}
      </p>
    </div>
  )
}
