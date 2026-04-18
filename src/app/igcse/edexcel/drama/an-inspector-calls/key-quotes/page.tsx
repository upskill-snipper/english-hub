import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Sparkles, Info, Quote } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { requireIgcseBoard } from '@/app/igcse/_lib/guard'

export const metadata: Metadata = {
  title: 'An Inspector Calls Key Quotes — Edexcel IGCSE Literature',
  description:
    'Twenty key quotations from An Inspector Calls with speaker, context and analysis for Edexcel IGCSE Literature exam revision.',
  alternates: {
    canonical:
      'https://theenglishhub.app/igcse/edexcel/drama/an-inspector-calls/key-quotes',
  },
}

const quotes = [
  {
    quote: '"a man has to make his own way"',
    speaker: 'Arthur Birling',
    context: 'Act 1 \u2014 Birling\u2019s dinner speech',
    analysis:
      'Priestley\u2019s target capitalist creed, placed just before the Inspector arrives so the play can systematically dismantle it.',
  },
  {
    quote: '"unsinkable, absolutely unsinkable"',
    speaker: 'Arthur Birling',
    context: 'Act 1 \u2014 predicting the Titanic\u2019s success',
    analysis:
      'Dramatic irony for a 1945 audience. Birling\u2019s confidence discredits the worldview it expresses.',
  },
  {
    quote: '"community and all that nonsense"',
    speaker: 'Arthur Birling',
    context: 'Act 1 \u2014 rejecting collective responsibility',
    analysis:
      'The Inspector\u2019s "one body" speech will directly answer this line. Priestley sets up thesis and antithesis.',
  },
  {
    quote: '"pink and intimate\u2026 brighter and harder"',
    speaker: 'Stage directions',
    context: 'Act 1 \u2014 lighting change at the Inspector\u2019s arrival',
    analysis:
      'The lighting shift externalises the moral exposure the Inspector brings. Comfort gives way to scrutiny.',
  },
  {
    quote: '"an impression of massiveness, solidity and purposefulness"',
    speaker: 'Stage directions',
    context: 'Act 1 \u2014 the Inspector\u2019s entrance',
    analysis:
      'The description marks Goole as more than an ordinary policeman. His presence is disproportionate to his stated role.',
  },
  {
    quote: '"I know I\u2019m to blame \u2014 and I\u2019m desperately sorry"',
    speaker: 'Sheila Birling',
    context: 'Act 1 \u2014 after confessing about Milwards',
    analysis:
      'Sheila accepts guilt immediately. Her directness contrasts sharply with her parents\u2019 deflection.',
  },
  {
    quote: '"these girls aren\u2019t cheap labour \u2014 they\u2019re people"',
    speaker: 'Sheila Birling',
    context: 'Act 1 \u2014 responding to her father\u2019s indifference',
    analysis:
      'Sheila\u2019s moral shift begins. She uses "people" against her father\u2019s economic language.',
  },
  {
    quote: '"I\u2019m not a child, don\u2019t forget"',
    speaker: 'Sheila Birling',
    context: 'Act 1 \u2014 asserting her right to stay',
    analysis:
      'Signals generational revolt. Priestley aligns the right to know with the younger Birlings.',
  },
  {
    quote: '"She was young and pretty and warm-hearted"',
    speaker: 'Gerald Croft',
    context: 'Act 2 \u2014 describing Daisy Renton',
    analysis:
      'Gerald\u2019s rescue narrative is sympathetic but built on power imbalance. Priestley invites scepticism.',
  },
  {
    quote: '"Girls of that class \u2014"',
    speaker: 'Mrs Birling',
    context: 'Act 2 \u2014 dismissing Eva\u2019s claim',
    analysis:
      'The unfinished sentence is the play\u2019s most chilling moment. Sybil reduces a person to a category.',
  },
  {
    quote: '"I accept no blame for it at all"',
    speaker: 'Mrs Birling',
    context: 'Act 2 \u2014 refusing responsibility',
    analysis:
      'Absolute denial. Priestley places the line just before the revelation about Eric, maximising ironic force.',
  },
  {
    quote: '"the father of the child\u2026 is entirely responsible"',
    speaker: 'Mrs Birling',
    context: 'Act 2 \u2014 unwittingly condemning Eric',
    analysis:
      'Dramatic irony at its sharpest. Sybil demands punishment for her own son without knowing it.',
  },
  {
    quote: '"I was in that state when a chap easily turns nasty"',
    speaker: 'Eric Birling',
    context: 'Act 3 \u2014 confessing how he treated Eva',
    analysis:
      'A euphemism the audience is meant to hear through. Priestley does not soften Eric\u2019s exploitation.',
  },
  {
    quote: '"You killed her \u2014 and the child she\u2019d have had too"',
    speaker: 'Eric Birling',
    context: 'Act 3 \u2014 confronting his mother',
    analysis:
      'Eric\u2019s fury aligns him with the Inspector\u2019s position. The family pretence of unity shatters.',
  },
  {
    quote: '"We are members of one body"',
    speaker: 'Inspector Goole',
    context: 'Act 3 \u2014 the final speech',
    analysis:
      'The play\u2019s socialist thesis. Biblical language gives it moral weight beyond politics.',
  },
  {
    quote: '"fire and blood and anguish"',
    speaker: 'Inspector Goole',
    context: 'Act 3 \u2014 warning of consequences',
    analysis:
      'Post-WW1 and WW2 resonance. The audience has already lived through the "fire" the Birlings refused to learn from.',
  },
  {
    quote: '"Public men have responsibilities as well as privileges"',
    speaker: 'Inspector Goole',
    context: 'Act 1 \u2014 challenging Birling',
    analysis:
      'Reverses Birling\u2019s "every man for himself". The Inspector stages a different moral order.',
  },
  {
    quote: '"You\u2019re beginning to pretend now that nothing\u2019s really happened"',
    speaker: 'Sheila Birling',
    context: 'Act 3 \u2014 rejecting the retrenchment',
    analysis:
      'Sheila sees through the attempted retreat. Her sarcasm is the play\u2019s sharpest moral moment.',
  },
  {
    quote: '"Everything\u2019s all right now, Sheila. What about this ring?"',
    speaker: 'Gerald Croft',
    context: 'Act 3 \u2014 offering the ring back',
    analysis:
      'Gerald\u2019s regression into denial. He is young enough to change but chooses not to.',
  },
  {
    quote: '"A girl has just died \u2014 after swallowing some disinfectant"',
    speaker: 'Arthur Birling (final line)',
    context: 'Act 3 \u2014 the phone-call twist',
    analysis:
      'The ending collapses the Birlings\u2019 relief. Priestley denies the comfort of dismissing the lesson as a hoax.',
  },
]

export default async function InspectorCallsKeyQuotesPage() {
  await requireIgcseBoard(['edexcel-igcse'])

  return (
    <div className="space-y-10 pb-16">
      <div>
        <Button
          variant="ghost"
          size="sm"
          render={<Link href="/igcse/edexcel/drama/an-inspector-calls" />}
        >
          <ArrowLeft className="size-3.5" />
          Back to An Inspector Calls
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
            An Inspector Calls: Key Quotes
          </h1>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
            Twenty essential quotations with speaker, context and analysis
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
            20 key quotations
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
        An Inspector Calls &copy; The Estate of J.B. Priestley. Short
        quotations reproduced under the fair dealing provision of the
        Copyright, Designs and Patents Act 1988 for the purpose of criticism
        and review.
      </p>
    </div>
  )
}
