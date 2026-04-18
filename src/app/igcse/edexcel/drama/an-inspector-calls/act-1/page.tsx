import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Sparkles, Info, BookOpen } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { requireIgcseBoard } from '@/app/igcse/_lib/guard'

export const metadata: Metadata = {
  title: 'An Inspector Calls Act 1 Analysis — Edexcel IGCSE Literature',
  description:
    'Detailed Act 1 analysis of An Inspector Calls: the dinner party, Birling\u2019s speeches, the Inspector\u2019s arrival and Eva Smith\u2019s story begins.',
  alternates: {
    canonical:
      'https://theenglishhub.app/igcse/edexcel/drama/an-inspector-calls/act-1',
  },
}

const sections = [
  {
    title: 'Opening stage directions',
    analysis:
      'Priestley\u2019s detailed stage directions establish the Birling dining room as "pink and intimate" \u2014 a colour that suggests warmth but also rose-tinted self-satisfaction. The lighting is instructed to become "brighter and harder" once the Inspector arrives, a physical metaphor for the exposure that follows. The heavy furniture, decanter and cigar box signal wealth; the maid Edna\u2019s silent service signals class hierarchy before a word is spoken.',
    quote: '"pink and intimate until the Inspector arrives"',
  },
  {
    title: 'Birling\u2019s dinner speech',
    analysis:
      'Arthur Birling delivers a series of confident predictions to Gerald and Eric: the Titanic is "unsinkable", war is impossible because of trade, and community is "nonsense". Every prediction is wrong. Priestley relies on dramatic irony \u2014 the 1945 audience has already lived through what Birling dismisses. His speech establishes him as the voice of capitalist complacency and allows the rest of the play to dismantle it systematically.',
    quote: '"The Titanic\u2026 unsinkable, absolutely unsinkable"',
  },
  {
    title: 'The engagement celebration',
    analysis:
      'Sheila and Gerald\u2019s engagement is the social occasion for the dinner. It represents an alliance between old money (the Crofts) and new money (the Birlings). Birling\u2019s excitement about a possible knighthood and a business merger with Crofts Limited reveals that he sees the marriage in economic terms. The ring is a symbol that Priestley will later invert \u2014 Sheila hands it back in Act Three when she can no longer accept what it represents.',
    quote: '"You\u2019re just the kind of son-in-law I always wanted"',
  },
  {
    title: 'The Inspector arrives',
    analysis:
      'The stage directions describe Goole as creating "an impression of massiveness, solidity and purposefulness". He cuts into the celebration with news of a dead girl. His entrance is structurally the play\u2019s hinge: the lighting changes, the mood shifts, and the celebratory family becomes the subject of interrogation. Priestley uses the classical unity of time \u2014 the action unfolds in a single evening \u2014 to build claustrophobic pressure.',
    quote: '"An impression of massiveness, solidity and purposefulness"',
  },
  {
    title: 'Birling and the factory',
    analysis:
      'The Inspector reveals that Eva Smith worked at Birling\u2019s factory and was sacked for leading a strike demanding a raise from twenty-two shillings and sixpence to twenty-five shillings a week. Birling defends himself on business grounds: "It\u2019s my duty to keep labour costs down." Priestley uses the specific wage figures to ground the play\u2019s socialism in material reality and to show how small sums can destroy lives while barely registering for employers.',
    quote: '"a man has to make his own way"',
  },
  {
    title: 'Sheila and Milwards',
    analysis:
      'Sheila admits she had Eva dismissed from her job at Milwards department store. She was jealous: the dress suited Eva better than it suited her. The confession marks the beginning of Sheila\u2019s moral awakening. She is horrified by her own behaviour and accepts blame immediately, unlike her parents. Priestley uses the incident to show how casual class power \u2014 a rich customer\u2019s complaint \u2014 can destroy a working-class woman\u2019s livelihood.',
    quote: '"I know I\u2019m to blame \u2014 and I\u2019m desperately sorry"',
  },
  {
    title: 'Gerald\u2019s reaction',
    analysis:
      'When the Inspector mentions "Daisy Renton", Gerald\u2019s reaction is visibly startled. Sheila notices this before anyone else and presses him. The moment establishes Sheila as perceptive and Gerald as compromised. Priestley uses the end of Act One to shift suspense from one family member to the next, a chain-structure that will continue through the remaining two acts.',
    quote: '"You knew her, didn\u2019t you?"',
  },
  {
    title: 'The photograph technique',
    analysis:
      'The Inspector shows a photograph to one character at a time, never to two simultaneously. This staging choice has troubled critics: it raises the possibility that the Birlings may not all be talking about the same girl. Priestley deliberately leaves this ambiguous. Whether Eva is one woman or several, the Inspector insists, the moral point is identical \u2014 each Birling has exploited someone.',
    quote: '"One person and one line of inquiry at a time"',
  },
]

export default async function InspectorCallsAct1Page() {
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
            <Badge variant="secondary">Act 1 Analysis</Badge>
          </div>
          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            An Inspector Calls: Act 1
          </h1>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
            Detailed analysis of the opening act &mdash; from the Birlings'
            celebratory dinner through Birling's capitalist speeches to the
            Inspector's arrival and first interrogations.
          </p>
        </div>
      </section>

      <section className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-4 sm:p-5">
        <div className="flex gap-3">
          <Info className="mt-0.5 size-5 shrink-0 text-amber-600 dark:text-amber-400" />
          <div className="space-y-1">
            <h2 className="text-body-sm font-semibold text-foreground">
              Key quotations only &mdash; read the full text
            </h2>
            <p className="text-body-xs text-muted-foreground leading-relaxed">
              Short extracts are included under fair dealing for study and
              criticism.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="mb-5 flex items-center gap-3">
          <BookOpen className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">
            Scene-by-scene analysis
          </h2>
        </div>
        <div className="space-y-5">
          {sections.map((s) => (
            <article
              key={s.title}
              className="rounded-xl border border-border/60 bg-card p-6"
            >
              <h3 className="text-heading-md font-heading text-foreground">
                {s.title}
              </h3>
              <p className="mt-3 text-body-sm leading-relaxed text-muted-foreground">
                {s.analysis}
              </p>
              <blockquote className="mt-3 border-l-2 border-primary/40 pl-3 text-body-sm italic text-foreground">
                {s.quote}
              </blockquote>
            </article>
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
