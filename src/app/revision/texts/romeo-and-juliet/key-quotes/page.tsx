'use client'

import Link from 'next/link'
import { ArrowLeft, Quote } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import StudyTools from '@/components/study/StudyTools'
import { useT } from '@/lib/i18n/use-t'
import { QUOTES_BY_THEME } from '@/data/key-quotes/romeo-and-juliet'

/* ─── Page ───────────────────────────────────────────────────── */

export default function RomeoAndJulietKeyQuotesPage() {
  const t = useT()
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <StudyTools textName="Romeo and Juliet" textType="play" />

        {/* Hero */}
        <section className="relative mt-8 overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-violet-500/[0.04] p-6 sm:p-8 lg:p-10">
          <div className="pointer-events-none absolute -end-20 -top-20 h-64 w-64 rounded-full bg-violet-500/5 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -start-16 h-48 w-48 rounded-full bg-rose-500/5 blur-3xl" />
          <div className="relative">
            <Button
              variant="ghost"
              size="sm"
              className="mb-4 -ms-2 text-muted-foreground"
              render={<Link href="/revision/texts/romeo-and-juliet" />}
            >
              <ArrowLeft className="size-3.5" />
              {t('rev.texts.common.back_to_text').replace('{text}', 'Romeo and Juliet')}
            </Button>

            <div className="mb-4 flex flex-wrap items-center gap-2">
              <Badge variant="secondary">
                <Quote className="me-1 size-3 text-violet-400" />
                {t('rev.texts.common.key_quotations')}
              </Badge>
              <Badge variant="outline" className="text-muted-foreground">
                AQA / Edexcel / OCR / Eduqas
              </Badge>
            </div>

            <h1 className="text-display-sm font-heading text-foreground sm:text-display">
              {t('rev.texts.rj.quotes.h1')}
            </h1>
            <p className="mt-2 text-body-lg text-muted-foreground">{t('rev.texts.rj.byline')}</p>
            <p className="mt-4 max-w-2xl text-body-md text-muted-foreground">
              {t('rev.texts.rj.quotes.intro_short')}
            </p>
          </div>
        </section>

        {/* Quick-navigation */}
        <section className="mt-10">
          <Card>
            <CardContent className="p-5">
              <p className="text-sm font-semibold text-foreground mb-3">
                {t('rev.texts.common.jump_to_theme_label')}
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
        <div className="mt-10 space-y-10">
          {QUOTES_BY_THEME.map((section) => (
            <section key={section.theme} id={section.theme.toLowerCase().replace(/\s+/g, '-')}>
              <div className="mb-5 flex items-center gap-3">
                <span className={`block size-3 rounded-full ${section.colour}`} />
                <h2 className="text-heading-lg font-heading text-foreground">{section.theme}</h2>
                <Badge variant="outline" className="text-muted-foreground">
                  {t('rev.texts.common.quotes_count').replace('{n}', String(section.quotes.length))}
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
                        <p className="text-caption uppercase tracking-wide text-primary">
                          {q.speaker}
                        </p>
                        <span className="text-border">|</span>
                        <p className="text-caption text-muted-foreground">{q.act}</p>
                      </div>
                      <p className="text-body-sm text-muted-foreground">{q.analysis}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Footer */}
        <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
          {t('rev.texts.rj.public_domain_note')}
        </p>
      </div>
    </div>
  )
}
