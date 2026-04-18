import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Sparkles, Info, Quote } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { requireIgcseBoard } from '@/app/igcse/_lib/guard'

export const metadata: Metadata = {
  title: 'A View from the Bridge Key Quotes — Edexcel IGCSE Literature',
  description:
    'Fifteen key quotations from A View from the Bridge with speaker, context and analysis for Edexcel IGCSE Literature exam revision.',
  alternates: {
    canonical:
      'https://theenglishhub.app/igcse/edexcel/drama/a-view-from-the-bridge/key-quotes',
  },
}

const quotes = [
  {
    quote: '"This one\u2019s name was Eddie Carbone"',
    speaker: 'Alfieri',
    context: 'Prologue \u2014 opening the play',
    analysis:
      'The past tense announces tragedy. The audience knows from the first line that Eddie\u2019s story has already ended.',
  },
  {
    quote: '"settle for half, and I like it better"',
    speaker: 'Alfieri',
    context: 'Prologue \u2014 on Italian-American compromise',
    analysis:
      'The play\u2019s central moral formula: the accommodation between old-world honour and American law.',
  },
  {
    quote: '"You can\u2019t marry him, you\u2019re a baby"',
    speaker: 'Eddie',
    context: 'Act 1 \u2014 objecting to Catherine and Rodolpho',
    analysis:
      'Eddie infantilises Catherine to disguise his possessiveness. The word "baby" does double work.',
  },
  {
    quote: '"The guy ain\u2019t right"',
    speaker: 'Eddie',
    context: 'Act 1 \u2014 accusing Rodolpho',
    analysis:
      'Homophobic shorthand. Eddie cannot articulate his jealousy and resorts to attacking Rodolpho\u2019s masculinity.',
  },
  {
    quote: '"When am I gonna be a wife again, Eddie?"',
    speaker: 'Beatrice',
    context: 'Act 1 \u2014 confronting Eddie privately',
    analysis:
      'The most devastating domestic line. Beatrice names the sexual withdrawal Eddie cannot explain.',
  },
  {
    quote: '"She\u2019s the madonna type"',
    speaker: 'Eddie',
    context: 'Act 1 \u2014 defending Catherine\u2019s purity',
    analysis:
      'The Madonna-whore framing reveals Eddie\u2019s inability to see Catherine as an adult woman.',
  },
  {
    quote: '"My wife is dying\u2026 they eat the sunshine"',
    speaker: 'Marco',
    context: 'Act 1 \u2014 explaining why he came to America',
    analysis:
      'Marco\u2019s motivation is selfless and desperate. His family\u2019s hunger gives the betrayal its moral weight.',
  },
  {
    quote: '"You can quicker get back a million dollars than a word"',
    speaker: 'Eddie',
    context: 'Act 1 \u2014 the Vinny Bolzano story',
    analysis:
      'Eddie describes the community\u2019s code against informing. He will violate the very principle he articulates.',
  },
  {
    quote: '"He degraded my brother. My blood."',
    speaker: 'Marco',
    context: 'Act 2 \u2014 after the arrest',
    analysis:
      'Marco\u2019s honour code is absolute. His plain noun phrases track a worldview that demands physical retribution.',
  },
  {
    quote: '"You want somethin\u2019 else, Eddie, and you can never have her!"',
    speaker: 'Beatrice',
    context: 'Act 2 \u2014 the climactic accusation',
    analysis:
      'Beatrice finally speaks the unspoken. The line comes too late to save anyone but names the truth.',
  },
  {
    quote: '"I want my name!"',
    speaker: 'Eddie',
    context: 'Act 2 \u2014 the final confrontation',
    analysis:
      'Eddie frames the catastrophe as theft of reputation. Miller lets the audience see he has ruined his own name.',
  },
  {
    quote: '"Oh, B., my B.!"',
    speaker: 'Eddie (dying)',
    context: 'Act 2 \u2014 Eddie\u2019s last words',
    analysis:
      'Eddie\u2019s final line reveals that his real grief is the loss of Beatrice, not Catherine.',
  },
  {
    quote: '"He allowed himself to be wholly known"',
    speaker: 'Alfieri',
    context: 'Epilogue \u2014 closing the play',
    analysis:
      'The play\u2019s ambiguous epitaph. Miller refuses to condemn Eddie, offering the classical tragic gesture.',
  },
  {
    quote: '"To promise not to kill is not dishonourable"',
    speaker: 'Alfieri',
    context: 'Act 2 \u2014 counselling Marco',
    analysis:
      'Alfieri tries to bridge two justice systems. Marco agrees in letter but not in spirit.',
  },
  {
    quote: '"The law is very specific"',
    speaker: 'Alfieri',
    context: 'Act 1 \u2014 Eddie\u2019s first visit',
    analysis:
      'Alfieri tells Eddie the law cannot help him. The legal void forces Eddie toward his own catastrophic solution.',
  },
]

export default async function AViewKeyQuotesPage() {
  await requireIgcseBoard(['edexcel-igcse'])

  return (
    <div className="space-y-10 pb-16">
      <div>
        <Button
          variant="ghost"
          size="sm"
          render={
            <Link href="/igcse/edexcel/drama/a-view-from-the-bridge" />
          }
        >
          <ArrowLeft className="size-3.5" />
          Back to A View from the Bridge
        </Button>
      </div>

      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-primary/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="relative">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge className="border-primary/20 bg-primary/10 text-primary">
              <Sparkles className="mr-1 size-3" />
              Edexcel IGCSE Literature
            </Badge>
            <Badge variant="secondary">Key Quotes</Badge>
          </div>
          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            A View from the Bridge: Key Quotes
          </h1>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
            Fifteen essential quotations with speaker, context and analysis
            &mdash; designed for exam revision and essay planning.
          </p>
        </div>
      </section>

      <section className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-4 sm:p-5">
        <div className="flex gap-3">
          <Info className="mt-0.5 size-5 shrink-0 text-amber-600 dark:text-clay-600" />
          <div className="space-y-1">
            <h2 className="text-body-sm font-semibold text-foreground">
              Fair dealing notice
            </h2>
            <p className="text-body-xs text-muted-foreground leading-relaxed">
              All quotations are short extracts (under 15 words) included
              under the fair dealing provision of the Copyright, Designs and
              Patents Act 1988 for the purpose of criticism, review and
              study. This page is not a substitute for reading the full play.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="mb-5 flex items-center gap-3">
          <Quote className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">
            15 key quotations
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {quotes.map((q, i) => (
            <div
              key={i}
              className="rounded-xl border border-border/60 bg-card p-5"
            >
              <blockquote className="border-l-2 border-primary/40 pl-3 text-body-md italic text-foreground">
                {q.quote}
              </blockquote>
              <p className="mt-2 text-body-xs font-medium text-primary">
                &mdash; {q.speaker}
              </p>
              <p className="mt-1 text-body-xs text-muted-foreground">
                {q.context}
              </p>
              <p className="mt-2 text-body-sm leading-relaxed text-muted-foreground">
                {q.analysis}
              </p>
            </div>
          ))}
        </div>
      </section>

      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
        A View from the Bridge &copy; The Arthur Miller Estate. Short
        quotations reproduced under the fair dealing provision of the
        Copyright, Designs and Patents Act 1988 for the purpose of criticism
        and review.
      </p>
    </div>
  )
}
