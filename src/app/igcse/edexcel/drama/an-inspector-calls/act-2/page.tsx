import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Sparkles, Info, BookOpen } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { requireIgcseBoard } from '@/app/igcse/_lib/guard'

export const metadata: Metadata = {
  title: 'An Inspector Calls Act 2 Analysis — Edexcel IGCSE Literature',
  description:
    'Detailed Act 2 analysis of An Inspector Calls: Gerald\u2019s affair with Daisy Renton, Mrs Birling\u2019s charity refusal, and the trap that closes on Eric.',
  alternates: {
    canonical:
      'https://theenglishhub.app/igcse/edexcel/drama/an-inspector-calls/act-2',
  },
}

const sections = [
  {
    title: 'Gerald\u2019s confession',
    analysis:
      'Act Two opens with the Inspector pressing Gerald about his relationship with Eva, now living under the name Daisy Renton. Gerald met her at the Palace Bar \u2014 a venue associated with prostitution \u2014 and set her up in rooms at Morgan Terrace. He frames the relationship as rescue, but Priestley complicates it: Gerald had power, money and a home to offer, and Daisy had none. His claim that "I didn\u2019t install her there so that I could make love to her" invites scepticism. The affair is presented with more sympathy than Birling\u2019s factory sacking, but it is still exploitation disguised as kindness.',
    quote: '"She was young and pretty and warm-hearted"',
  },
  {
    title: 'Sheila\u2019s growing awareness',
    analysis:
      'Sheila becomes increasingly sharp during Act Two. She warns her mother not to build "a wall" between herself and the Inspector because "he\u2019ll just break it down". She is the first to understand the Inspector\u2019s method and the first to anticipate that her mother is walking into a trap. Priestley uses Sheila as a moral barometer: her perceptiveness grows in proportion to her parents\u2019 denial.',
    quote: '"You mustn\u2019t try to build up a kind of wall"',
  },
  {
    title: 'The engagement ring returned',
    analysis:
      'Sheila hands back Gerald\u2019s engagement ring. The gesture is quiet but seismic. The ring, which in Act One symbolised social alliance and family ambition, now represents a relationship built on concealment. Sheila\u2019s decision to return it marks her refusal to participate in the system her parents defend. Priestley stages the ring as a recurring symbol whose meaning inverts across the play.',
    quote: '"Not yet. It\u2019s too soon."',
  },
  {
    title: 'Mrs Birling and the charity board',
    analysis:
      'Sybil Birling chaired the Brumley Women\u2019s Charity Organisation and refused Eva\u2019s appeal for help. Her reasons are class-based: Eva used the name "Mrs Birling", which Sybil found presumptuous, and Eva\u2019s account of her situation seemed "a pack of lies". Sybil\u2019s language \u2014 "girls of that class" \u2014 reduces Eva to a social category. Priestley structures the scene so that Sybil unwittingly condemns her own son: she argues that "the father of the child" should bear full responsibility.',
    quote: '"Girls of that class \u2014"',
  },
  {
    title: 'The trap closes on Eric',
    analysis:
      'By the end of Act Two, the audience and Sheila know what Sybil does not: the father of Eva\u2019s child is Eric. Sybil\u2019s demand that "the father" be held entirely responsible becomes a demand for her own son\u2019s punishment. Priestley builds the dramatic irony with surgical precision, allowing Sybil to dig her own moral grave before the curtain falls. The act ends with Sybil beginning to understand, her confidence collapsing in real time.',
    quote: '"I accept no blame for it at all"',
  },
  {
    title: 'The Inspector\u2019s method in Act Two',
    analysis:
      'The Inspector controls the pace and order of revelations. He refuses to let Birling see the photograph; he addresses one person at a time; he already seems to know the answers before he asks. Priestley uses this quasi-omniscient technique to build a sense of inevitability \u2014 the Birlings are not being investigated but being confronted with what they already know and have hidden from themselves.',
    quote: '"I\u2019ve been round to the room she had"',
  },
  {
    title: 'Gender and power in Act Two',
    analysis:
      'Act Two places gender at the centre of the interrogation. Gerald\u2019s rescue narrative, the Palace Bar context, and Mrs Birling\u2019s refusal to help a pregnant woman all expose how the play\u2019s male characters use economic power over women, and how Mrs Birling\u2019s class prejudice overrides any solidarity she might feel as a woman. Priestley shows that patriarchy is sustained not only by men but by women who benefit from the class system.',
    quote: '"She\u2019d impertinently made use of our name"',
  },
]

export default async function InspectorCallsAct2Page() {
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
            <Badge variant="secondary">Act 2 Analysis</Badge>
          </div>
          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            An Inspector Calls: Act 2
          </h1>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
            Detailed analysis of the middle act &mdash; Gerald's affair, Mrs
            Birling's charity refusal, and the dramatic irony that closes
            around Eric.
          </p>
        </div>
      </section>

      <section className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-4 sm:p-5">
        <div className="flex gap-3">
          <Info className="mt-0.5 size-5 shrink-0 text-amber-600 dark:text-clay-600" />
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
