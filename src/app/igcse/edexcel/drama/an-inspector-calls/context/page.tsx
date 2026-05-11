import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Globe, Info, Sparkles } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { requireIgcseBoard } from '@/app/igcse/_lib/guard'

import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
export const metadata: Metadata = {
  title: 'An Inspector Calls Context — Edexcel IGCSE Literature',
  description:
    'Context for An Inspector Calls: Edwardian 1912 vs 1945 Britain, J. B. Priestley\u2019s socialism, the welfare state, dramatic inheritance.',
  alternates: {
    canonical: 'https://theenglishhub.app/igcse/edexcel/drama/an-inspector-calls/context',
  },
}

const contextBlocks = [
  {
    title: 'Two historical moments: 1912 and 1945',
    body: 'Priestley sets An Inspector Calls in the spring of 1912 but wrote and first staged it in 1945. That double date is the heart of the play\u2019s dramatic irony: a 1945 audience, having lived through two world wars, the 1918 flu pandemic, the General Strike, the Great Depression and the Labour landslide, hears Birling\u2019s Edwardian confidence as absurd. Everything the characters trust — empire, capital, class — has already been shattered by the time the play is performed.',
  },
  {
    title: 'Edwardian Britain (1901–1914)',
    body: 'The "Edwardian summer" is often remembered as a period of stability but was, in reality, riven by strikes, suffragette militancy, Irish home rule crises and German naval rivalry. Trade union membership doubled between 1910 and 1914, and female workers — like Priestley\u2019s Eva — organised for better wages in industries including textiles and domestic service. Priestley\u2019s Birling, dismissing "community and all that nonsense", misreads a genuinely turbulent moment as one of certain progress.',
  },
  {
    title: 'J. B. Priestley\u2019s socialism',
    body: 'Priestley (1894–1984) was a Yorkshire-born novelist, playwright and broadcaster. His WWII Postscript broadcasts on the BBC — second only to Churchill in their reach — articulated a vision of post-war Britain built on collective responsibility. He helped found the Common Wealth Party and the later Campaign for Nuclear Disarmament. The Inspector\u2019s "one body" speech is essentially an articulation of Priestley\u2019s democratic socialism on stage.',
  },
  {
    title: 'Post-WW2 Britain and the welfare state',
    body: 'An Inspector Calls premiered in Moscow in 1945 and in London in 1946 — between the end of the war and the Attlee government\u2019s creation of the NHS (1948) and welfare state. Priestley\u2019s play functions as rhetorical support for that project: by showing 1912 capitalism as morally bankrupt, it implicitly argues that the post-war settlement should look radically different.',
  },
  {
    title: 'The Beveridge Report and "Five Giants"',
    body: 'Beveridge\u2019s 1942 report on "Social Insurance and Allied Services" identified five "giants" blocking post-war reconstruction: Want, Disease, Ignorance, Squalor and Idleness. Priestley\u2019s Eva embodies all five. The report\u2019s recommendations informed the NHS, the welfare state, and the 1944 Education Act — and Priestley is in effect dramatising the moral argument that Beveridge made in actuarial language.',
  },
  {
    title: 'The "well-made play" tradition',
    body: 'Priestley inherits a late Victorian and Edwardian tradition of the "well-made play" (the pièce bien faite): three acts, a drawing-room set, exposition by servants, a late-revealed secret. He uses this inheritance to lull the audience into expecting a domestic thriller, then turns it into a political sermon with the Inspector\u2019s arrival. The play\u2019s form is part of its argument.',
  },
  {
    title: 'Priestley, time and metaphysics',
    body: 'Priestley was influenced by J. W. Dunne\u2019s "An Experiment with Time" and other non-linear theories of time. His earlier "time plays" — Dangerous Corner, Time and the Conways, I Have Been Here Before — use plot loops, dream structures and alternative timelines. An Inspector Calls\u2019 phone-call twist is part of the same body of work: it implies the Birlings are being offered a rehearsal, a second chance they are already on the verge of squandering.',
  },
  {
    title: 'Reception and lasting influence',
    body: 'The play fell somewhat out of fashion in the 1950s and 60s before Stephen Daldry\u2019s radical 1992 National Theatre revival reframed it as a Brechtian political parable. That production, still touring, is the version most students will see. It remains one of the most performed and studied modern British plays, particularly in schools.',
  },
]

export default async function InspectorCallsContextPage() {
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
            name: 'Context',
            url: 'https://theenglishhub.app/igcse/edexcel/drama/an-inspector-calls/context',
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
            <Badge variant="secondary">Context</Badge>
          </div>
          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            An Inspector Calls: Context
          </h1>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
            Historical, biographical and dramatic context for Priestley’s play — essential for
            Relating to context responses on social, cultural and historical context.
          </p>
        </div>
      </section>

      <section className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-4 sm:p-5">
        <div className="flex gap-3">
          <Info className="mt-0.5 size-5 shrink-0 text-amber-600 dark:text-clay-600" />
          <div className="space-y-1">
            <h2 className="text-body-sm font-semibold text-foreground">
              Key quotations only — read the full text
            </h2>
            <p className="text-body-xs text-muted-foreground leading-relaxed">
              This guide is a study companion, not a replacement for reading or watching the play.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="mb-5 flex items-center gap-3">
          <Globe className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">
            Historical and dramatic context
          </h2>
        </div>
        <div className="space-y-5">
          {contextBlocks.map((c) => (
            <article key={c.title} className="rounded-xl border border-border/60 bg-card p-6">
              <h3 className="text-heading-sm font-heading text-foreground">{c.title}</h3>
              <p className="mt-3 text-body-sm leading-relaxed text-muted-foreground">{c.body}</p>
            </article>
          ))}
        </div>
      </section>

      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
        An Inspector Calls &copy; The Estate of J.B. Priestley. Short quotations reproduced under
        the fair dealing provision of the Copyright, Designs and Patents Act 1988 for the purpose of
        criticism and review.
      </p>

      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
        Short quotations reproduced under the fair dealing provision of the CDPA 1988 for criticism
        and review. Full text available from your school or local library.
      </p>
    </div>
  )
}
