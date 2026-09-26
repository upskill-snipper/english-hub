'use client'

import Link from 'next/link'
import {
  ArrowLeft,
  BookOpen,
  Eye,
  Lightbulb,
  PenLine,
  Quote,
  ScrollText,
  Sparkles,
  Telescope,
} from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import StudyTools from '@/components/study/StudyTools'
import { useT } from '@/lib/i18n/use-t'

// ── Types ─────────────────────────────────────────────────────────────────────

/** One numbered line of the extract, as cut from the held edition by page.tsx. */
export type ExtractLine = {
  n: number
  text: string
}

export type Segment = {
  range: string
  lines: number[]
  notice: string
  say: string
  zoomOut: string
}

// ── Page component ────────────────────────────────────────────────────────────

/**
 * The walkthrough itself. The extract's lines arrive from page.tsx, which cuts
 * them from the held edition on the server, so the whole play never reaches
 * the browser for the sake of 28 lines.
 */
export function MacbethExtractWalkthrough({
  lines: EXTRACT_LINES,
  segments: SEGMENTS,
}: {
  lines: ExtractLine[]
  segments: Segment[]
}) {
  const t = useT()
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl space-y-10 px-4 py-8 sm:px-6 lg:px-8">
        <StudyTools textName="Macbeth" textType="play" examBoard="AQA" />

        {/* Hero */}
        <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-violet-500/[0.04] p-6 sm:p-8 lg:p-10">
          <div className="pointer-events-none absolute -end-20 -top-20 h-64 w-64 rounded-full bg-violet-500/5 blur-3xl" />
          <div className="relative">
            <Button
              variant="ghost"
              size="sm"
              className="mb-4 -ms-2 text-muted-foreground"
              render={<Link href="/revision/texts/macbeth" />}
            >
              <ArrowLeft className="size-3.5" />
              {t('rev.texts.common.back_to_overview').replace('{text}', 'Macbeth')}
            </Button>
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <Badge variant="secondary">
                <ScrollText className="me-1 size-3 text-violet-400" />
                {t('rev.texts.macbeth.extract.badge')}
              </Badge>
              <Badge variant="outline">
                {t('rev.texts.common.act_n_scene_s').replace('{n}', '1').replace('{s}', '7')}
              </Badge>
              <Badge variant="outline">{t('rev.texts.macbeth.extract.lines_badge')}</Badge>
              <Badge variant="outline">{t('rev.texts.macbeth.extract.aqa_style_badge')}</Badge>
            </div>
            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
              {t('rev.texts.macbeth.extract.title')}
            </h1>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              {t('rev.texts.macbeth.extract.intro')}
            </p>
          </div>
        </section>

        {/* Brief context */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="size-5 text-violet-400" />
              {t('rev.texts.macbeth.extract.where_we_are_h')}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-muted-foreground leading-relaxed">
              We are at the start of Act 1, Scene 7, inside Macbeth’s castle at Inverness. King
              Duncan has arrived as an honoured guest and a banquet is underway offstage. Macbeth
              slips out alone to think.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Lady Macbeth has already received his letter (1.5), invoked the spirits to
              &ldquo;unsex&rdquo; her, and resolved that Duncan must die that very night. Macbeth
              has been named Thane of Cawdor, has heard the witches’ prophecy that he &ldquo;shalt
              be king hereafter,&rdquo; and has aside-confessed his &ldquo;black and deep
              desires&rdquo; (1.4).
            </p>
            <p className="text-muted-foreground leading-relaxed">
              In the moments after this soliloquy ends, Lady Macbeth enters and shames him back into
              the plan with the lines &ldquo;When you durst do it, then you were a man.&rdquo; By
              the end of the scene the murder is fixed. This soliloquy is therefore the last point
              at which Macbeth could turn back - and the place where he proves to himself that he
              should.
            </p>
          </CardContent>
        </Card>

        {/* The full extract */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Quote className="size-5 text-amber-500" />
              {t('rev.texts.macbeth.extract.the_extract_h')}
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              {t('rev.texts.macbeth.extract.extract_source')}
            </p>
          </CardHeader>
          <CardContent>
            <div className="rounded-lg border border-border/60 bg-muted/20 p-5 sm:p-6">
              <ol className="space-y-1 font-heading text-base leading-loose sm:text-lg">
                {EXTRACT_LINES.map((line) => (
                  <li key={line.n} className="flex gap-4 sm:gap-6">
                    <span className="w-6 shrink-0 select-none text-end text-xs text-muted-foreground-subtle tabular-nums">
                      {line.n}
                    </span>
                    <span>{line.text}</span>
                  </li>
                ))}
              </ol>
            </div>
            <p className="mt-3 text-xs text-muted-foreground-subtle">
              {t('rev.texts.macbeth.extract.text_pd_note')}
            </p>
          </CardContent>
        </Card>

        {/* Walkthrough */}
        <section className="space-y-2">
          <h2 className="text-xl font-bold tracking-tight sm:text-2xl">
            {t('rev.texts.macbeth.extract.segment_h')}
          </h2>
          <p className="text-sm text-muted-foreground">
            {t('rev.texts.macbeth.extract.segment_desc')}
          </p>
        </section>

        {SEGMENTS.map((seg, idx) => {
          const segLines = EXTRACT_LINES.filter((l) => seg.lines.includes(l.n))
          return (
            <Card key={idx}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="size-5 text-violet-400" />
                  {seg.range}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                {/* Re-quoted lines */}
                <div className="rounded-lg border border-border/60 bg-muted/20 p-4">
                  <ol className="space-y-1 font-heading text-base leading-loose">
                    {segLines.map((line) => (
                      <li key={line.n} className="flex gap-4">
                        <span className="w-6 shrink-0 select-none text-end text-xs text-muted-foreground-subtle tabular-nums">
                          {line.n}
                        </span>
                        <span>{line.text}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Notice */}
                <div>
                  <h4 className="mb-1 flex items-center gap-1.5 font-semibold">
                    <Eye className="size-4 text-violet-400" /> {t('rev.texts.common.notice')}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">{seg.notice}</p>
                </div>

                {/* Say */}
                <div>
                  <h4 className="mb-1 flex items-center gap-1.5 font-semibold">
                    <PenLine className="size-4 text-amber-500" />{' '}
                    {t('rev.texts.macbeth.extract.say_ao2')}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">{seg.say}</p>
                </div>

                {/* Zoom out */}
                <div className="rounded-lg border border-violet-500/20 bg-violet-500/[0.04] p-4">
                  <h4 className="mb-1 flex items-center gap-1.5 font-semibold text-violet-700 dark:text-violet-300">
                    <Telescope className="size-4" /> {t('rev.texts.common.zoom_out')}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{seg.zoomOut}</p>
                </div>
              </CardContent>
            </Card>
          )
        })}

        {/* Model paragraph */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="size-5 text-amber-500" />
              {t('rev.texts.macbeth.extract.model_para_h')}
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              {t('rev.texts.macbeth.extract.model_para_desc')}
            </p>
          </CardHeader>
          <CardContent>
            <div className="rounded-lg border border-amber-500/20 bg-amber-500/[0.04] p-5 leading-relaxed text-foreground">
              <p>
                Shakespeare uses Macbeth’s &ldquo;If it were done&rdquo; soliloquy to expose
                ambition as a force its possessor recognises and yet cannot resist. The opening
                threefold repetition of &ldquo;done&rdquo; is a verbal flinch: Macbeth refuses to
                name the murder, hiding it inside an abstract verb, which dramatises ambition’s
                first effect - the corruption of language itself. The speech then constructs a
                meticulous moral argument against the deed. Through the legal lexis of
                &ldquo;judgement,&rdquo; &ldquo;instructions&rdquo; and &ldquo;even-handed
                justice,&rdquo; and the sacramental image of the &ldquo;poison’d chalice&rdquo;
                returning to the mixer’s lips, Shakespeare lets Macbeth voice the play’s cosmic
                order: ambition that violates divinely ordained kingship will recoil. He then
                catalogues his three duties - &ldquo;kinsman,&rdquo; &ldquo;subject,&rdquo;
                &ldquo;host&rdquo; - and canonises Duncan with celestial diction
                (&ldquo;trumpet-tongued&rdquo; angels, &ldquo;cherubin&rdquo;), so that the
                metaphysical conceit of pity as &ldquo;a naked new-born babe, / Striding the
                blast&rdquo; can deliver its verdict: moral feeling will out-roar ambition’s storm.
                And yet, devastatingly, Macbeth concludes with the equestrian metaphor of
                &ldquo;Vaulting ambition, which o’erleaps itself / And falls on th’ other&rdquo;.
                The enjambment enacts the fall; the unfinished final line leaves ambition hanging in
                mid-air, waiting for Lady Macbeth’s entrance to push it over. This is the play’s
                tragic engine in miniature: a man who has reasoned himself out of regicide and will
                commit it anyway, because ambition, once acknowledged, has already won.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-4 pb-4">
          <Button variant="outline" render={<Link href="/revision/texts/macbeth/key-quotes" />}>
            <ArrowLeft className="size-4 me-1" /> {t('rev.texts.common.key_quotes')}
          </Button>
          <Button variant="outline" render={<Link href="/revision/texts/macbeth/essay-plans" />}>
            {t('rev.texts.common.essay_plans')} <BookOpen className="size-4 ms-1" />
          </Button>
        </div>

        {/* Fair-dealing footer */}
        <p className="pb-8 text-xs text-muted-foreground-subtle leading-relaxed">
          {t('rev.texts.macbeth.extract.fair_dealing')}
        </p>
      </div>
    </div>
  )
}
