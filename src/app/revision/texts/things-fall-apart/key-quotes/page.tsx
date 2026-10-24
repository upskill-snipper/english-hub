'use client'

import Link from 'next/link'
import { ArrowLeft, BookOpen, Quote, Lightbulb, Sparkles } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import StudyTools from '@/components/study/StudyTools'
import { useT } from '@/lib/i18n/use-t'
import { quotes } from '@/data/key-quotes/things-fall-apart'

/* ── Organise by theme ───────────────────────────────────────────────── */

const themeGroups = [
  'Language & Communication',
  'Masculinity & Fear',
  'Fate & Chi',
  'Tradition vs Change',
  'Religion',
  'Colonialism & Cultural Destruction',
  'Justice & Power',
]

/* ── Page ────────────────────────────────────────────────────────────── */

export default function KeyQuotesPage() {
  const tr = useT()
  return (
    <div className="space-y-10 bg-background pb-16">
      {/* Study Tools */}
      <StudyTools textName="Things Fall Apart" textType="novel" examBoard="IGCSE Edexcel" />

      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-clay-400/[0.06] p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -end-20 -top-20 h-64 w-64 rounded-full bg-clay-400/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -start-16 h-48 w-48 rounded-full bg-ochre-400/5 blur-3xl" />
        <div className="relative">
          <Button
            variant="ghost"
            size="sm"
            className="mb-4 -ms-2 text-muted-foreground"
            render={<Link href="/revision/texts/things-fall-apart" />}
          >
            <ArrowLeft className="size-3.5" />
            {tr('rev.texts.common.back_to_text').replace('{text}', 'Things Fall Apart')}
          </Button>

          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge variant="secondary">
              <Quote className="me-1 size-3 text-clay-500" />
              {tr('rev.texts.common.deep_study')}
            </Badge>
            <Badge variant="outline" className="text-muted-foreground">
              <Sparkles className="me-1 size-3" />
              Edexcel IGCSE / Cambridge IGCSE
            </Badge>
          </div>

          <h1 className="font-heading text-display-sm text-foreground sm:text-display">
            {tr('rev.texts.common.key_quotes_bank')}
          </h1>
          <p className="mt-2 text-body-lg italic text-clay-600 dark:text-clay-300">
            Things Fall Apart by Chinua Achebe
          </p>
          <p className="mt-4 max-w-2xl text-body-md text-muted-foreground">
            {tr('rev.texts2.tfa.key_quotes.intro')}
          </p>
        </div>
      </section>

      {/* Jump to theme */}
      <section>
        <Card>
          <CardContent className="p-4 sm:p-6">
            <h2 className="mb-4 font-heading text-heading-md text-foreground">
              {tr('rev.texts.common.jump_to_theme')}
            </h2>
            <div className="flex flex-wrap gap-2">
              {themeGroups
                .filter((t) => quotes.some((q) => q.themes[0] === t))
                .map((t) => (
                  <a
                    key={t}
                    href={`#theme-${t.toLowerCase().replace(/[\s&]+/g, '-')}`}
                    className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-foreground/20 hover:bg-muted/40"
                  >
                    <BookOpen className="size-3.5 text-clay-500" />
                    {t}
                    <span className="text-xs text-muted-foreground">
                      ({quotes.filter((q) => q.themes[0] === t).length})
                    </span>
                  </a>
                ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Quotes by theme */}
      {themeGroups.map((theme) => {
        const themeQuotes = quotes.filter((q) => q.themes[0] === theme)
        if (themeQuotes.length === 0) return null
        return (
          <section
            key={theme}
            id={`theme-${theme.toLowerCase().replace(/[\s&]+/g, '-')}`}
            className="scroll-mt-8 space-y-5"
          >
            <div className="flex items-center gap-4 border-b border-border/60 pb-4">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-clay-400/10 text-lg font-bold text-clay-600">
                {themeQuotes.length}
              </div>
              <h2 className="font-heading text-heading-lg text-foreground">{theme}</h2>
            </div>

            <div className="grid gap-4">
              {themeQuotes.map((q) => (
                <Card key={q.id}>
                  <CardContent className="space-y-4 p-5 sm:p-6">
                    {/* Quote */}
                    <div className="rounded-lg border-s-4 border-s-clay-500 bg-muted p-4 dark:border-s-clay-400">
                      <p className="font-heading text-body-md font-medium italic text-foreground">
                        {q.quote}
                      </p>
                      <p className="mt-2 text-xs font-mono text-clay-600 dark:text-clay-300">
                        {q.speaker} -- {q.part}
                      </p>
                    </div>

                    {/* Context */}
                    <div>
                      <h4 className="mb-1 text-xs font-mono font-medium uppercase tracking-wider text-muted-foreground">
                        {tr('rev.texts.common.context')}
                      </h4>
                      <p className="text-body-sm text-muted-foreground">{q.context}</p>
                    </div>

                    {/* Analysis */}
                    <div>
                      <h4 className="mb-1 text-xs font-mono font-medium uppercase tracking-wider text-muted-foreground">
                        {tr('rev.texts.common.language_analysis')}
                      </h4>
                      <p className="text-body-sm text-muted-foreground">{q.analysis}</p>
                    </div>

                    {/* Themes */}
                    <div>
                      <h4 className="mb-1.5 text-xs font-mono font-medium uppercase tracking-wider text-muted-foreground">
                        {tr('rev.texts2.common.thematic_links')}
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {q.themes.map((t) => (
                          <span
                            key={t}
                            className="rounded-full bg-clay-200/30 px-2.5 py-0.5 text-[11px] font-medium text-clay-600"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )
      })}

      {/* Fair dealing notice */}
      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
        {tr('rev.texts2.common.fair_dealing_notice')}
      </p>
    </div>
  )
}
