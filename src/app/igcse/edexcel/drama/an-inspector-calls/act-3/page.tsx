import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Sparkles, Info, BookOpen } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { requireIgcseBoard } from '@/app/igcse/_lib/guard'
import { t } from '@/lib/i18n/t'

import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
export const metadata: Metadata = {
  openGraph: {
    title: 'An Inspector Calls Act 3 Analysis - Edexcel IGCSE Literature',
    description:
      'Detailed Act 3 analysis of An Inspector Calls: Eric\u2019s confession, the Inspector\u2019s final speech, the family splits, and the phone-call twist.',
  },
  title: 'An Inspector Calls Act 3 Analysis - Edexcel IGCSE Literature',
  description:
    'Detailed Act 3 analysis of An Inspector Calls: Eric\u2019s confession, the Inspector\u2019s final speech, the family splits, and the phone-call twist.',
  alternates: {
    canonical: 'https://theenglishhub.app/igcse/edexcel/drama/an-inspector-calls/act-3',
  },
}

const sections = [
  {
    title: 'Eric\u2019s confession',
    analysis:
      'Eric returns and confesses. He met Eva at the Palace Bar, forced himself on her while drunk ("I was in that state when a chap easily turns nasty"), got her pregnant, and stole money from his father\u2019s firm to support her. The confession is the play\u2019s ugliest moment. Priestley does not soften it: the phrase "turns nasty" is a euphemism the audience is meant to hear through. Yet, unlike his parents, Eric accepts responsibility \u2014 the gap between what he did and what he admits is smaller than anyone else\u2019s.',
    quote: '"I was in that state when a chap easily turns nasty"',
  },
  {
    title: 'Eric confronts his mother',
    analysis:
      'When Eric learns that his mother refused Eva help at the charity, his fury is explosive: "You killed her \u2014 and the child she\u2019d have had too." The confrontation shatters the family\u2019s pretence of unity. Priestley uses Eric\u2019s directness to align the younger generation with the Inspector\u2019s moral position. The scene also reveals that Eric\u2019s drinking has been an open secret the family chose to ignore \u2014 another instance of wilful blindness.',
    quote: '"You killed her \u2014 and the child she\u2019d have had too"',
  },
  {
    title: 'The Inspector\u2019s final speech',
    analysis:
      'The Inspector\u2019s exit speech is the play\u2019s rhetorical climax. "We are members of one body. We are responsible for each other. And I tell you that the time will soon come when, if men will not learn that lesson, then they will be taught it in fire and blood and anguish." The speech has the cadence of a sermon and the politics of a Labour manifesto. The phrase "fire and blood and anguish" resonates with a 1945 audience who have already lived through two world wars \u2014 the "lesson" the Birlings refused to learn.',
    quote: '"fire and blood and anguish"',
  },
  {
    title: 'The family splits',
    analysis:
      'After the Inspector leaves, the family divides along generational lines. Birling, Sybil and Gerald attempt to prove the Inspector was a fraud: they phone the Infirmary (no recent suicide), check the police (no Inspector Goole on the force). Sheila and Eric refuse to participate in the retreat. Sheila\u2019s line \u2014 "You\u2019re beginning to pretend now that nothing\u2019s really happened at all" \u2014 is the moral axis of Act Three. Priestley makes clear that whether the Inspector was real is irrelevant to the question of responsibility.',
    quote: '"You\u2019re beginning to pretend now that nothing\u2019s really happened"',
  },
  {
    title: 'Gerald\u2019s regression',
    analysis:
      'Gerald returns with "good news": no Inspector Goole exists on the police register. He offers Sheila her ring back, as though the evening can be undone. Gerald\u2019s regression is significant because he is young enough to have changed \u2014 but chooses the comfort of denial. Priestley uses him as a counterweight to Sheila and Eric: youth alone is not enough; moral courage is also required.',
    quote: '"Everything\u2019s all right now, Sheila. What about this ring?"',
  },
  {
    title: 'Birling\u2019s relief and its limits',
    analysis:
      'Birling\u2019s primary concern after the Inspector leaves is his knighthood. He worries about a "public scandal" and is visibly relieved when the hoax theory takes hold. Priestley uses Birling\u2019s relief to demonstrate that he has learned nothing. His values are intact; his self-interest is undented. The audience is positioned to condemn him precisely because they have seen his convictions tested and found empty.',
    quote: '"The whole thing\u2019s different now"',
  },
  {
    title: 'The phone-call twist',
    analysis:
      'The telephone rings. A girl has just died in the Infirmary after swallowing disinfectant, and a police inspector is on his way. The play ends. Priestley\u2019s twist serves multiple purposes: it punishes the Birlings\u2019 complacency; it suggests a cyclical or supernatural structure (the Inspector as rehearsal, warning or ghost); and it forces the audience to ask whether the Birlings will behave any differently the second time. The answer, for the older Birlings, is almost certainly no.',
    quote: '"A girl has just died \u2014 after swallowing some disinfectant"',
  },
  {
    title: 'Priestley\u2019s use of time',
    analysis:
      'The phone-call ending connects to Priestley\u2019s interest in cyclical time, influenced by J. W. Dunne\u2019s theories. The Birlings may be caught in a loop, offered a rehearsal they squander. This reading gives the play a quasi-supernatural dimension: the Inspector is not investigating a past event but staging a future one. The 1945 audience, watching from the other side of two world wars, is effectively the Inspector\u2019s collaborator \u2014 they know the Birlings\u2019 world will collapse.',
    quote: '"We are members of one body"',
  },
]

export default async function InspectorCallsAct3Page() {
  await requireIgcseBoard(['edexcel-igcse'])

  return (
    <div className="space-y-10 pb-16">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'IGCSE', url: 'https://theenglishhub.app/igcse' },
          { name: 'Edexcel IGCSE Literature', url: 'https://theenglishhub.app/igcse/edexcel' },
          { name: 'Drama', url: 'https://theenglishhub.app/igcse/edexcel/drama' },
          {
            name: 'An Inspector Calls',
            url: 'https://theenglishhub.app/igcse/edexcel/drama/an-inspector-calls',
          },
          {
            name: 'Act 3',
            url: 'https://theenglishhub.app/igcse/edexcel/drama/an-inspector-calls/act-3',
          },
        ]}
      />
      <div>
        <Button
          variant="ghost"
          size="sm"
          render={<Link href="/igcse/edexcel/drama/an-inspector-calls" />}
        >
          <ArrowLeft className="size-3.5" />
          {await t('igcse.page.back_to')} An Inspector Calls
        </Button>
      </div>

      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-primary/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="relative">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge className="border-primary/20 bg-primary/10 text-primary">
              <Sparkles className="mr-1 size-3" />
              {await t('igcse.page.badge_edexcel_lit')}
            </Badge>
            <Badge variant="secondary">Act 3 Analysis</Badge>
          </div>
          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            An Inspector Calls: Act 3
          </h1>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
            Detailed analysis of the final act &mdash; Eric's confession, the Inspector's "fire and
            blood" speech, the generational split, and the devastating phone-call twist.
          </p>
        </div>
      </section>

      <section className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-4 sm:p-5">
        <div className="flex gap-3">
          <Info className="mt-0.5 size-5 shrink-0 text-amber-600 dark:text-clay-600" />
          <div className="space-y-1">
            <h2 className="text-body-sm font-semibold text-foreground">
              {await t('igcse.page.copyright_heading')}
            </h2>
            <p className="text-body-xs text-muted-foreground leading-relaxed">
              {await t('igcse.page.fair_dealing_body')}
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="mb-5 flex items-center gap-3">
          <BookOpen className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">Scene-by-scene analysis</h2>
        </div>
        <div className="space-y-5">
          {sections.map((s) => (
            <article key={s.title} className="rounded-xl border border-border/60 bg-card p-6">
              <h3 className="text-heading-md font-heading text-foreground">{s.title}</h3>
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
        An Inspector Calls &copy; The Estate of J.B. Priestley. Short quotations reproduced under
        the fair dealing provision of the Copyright, Designs and Patents Act 1988 for the purpose of
        criticism and review.
      </p>
    </div>
  )
}
