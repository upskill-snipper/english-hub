import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Users, Sparkles, Info } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { requireIgcseBoard } from '@/app/igcse/_lib/guard'

import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
export const metadata: Metadata = {
  title: 'An Inspector Calls Characters — Edexcel IGCSE IGCSE Literature',
  description:
    'Character analysis for An Inspector Calls: Arthur and Sybil Birling, Sheila, Eric, Gerald Croft, Eva Smith/Daisy Renton and Inspector Goole.',
  alternates: {
    canonical:
      'https://theenglishhub.app/igcse/edexcel/drama/an-inspector-calls/characters',
  },
}

const characters = [
  {
    name: 'Arthur Birling',
    role: 'Self-made industrialist',
    analysis:
      'A "heavy-looking, rather portentous man" in his mid-fifties, Birling is the voice of the capitalist status quo. His opening speeches — about unsinkable ships, unstoppable progress and the nonsense of "community" — are demolished by every subsequent revelation. Priestley uses him to show how men in power absorb new information without updating their convictions. His preoccupation with his possible knighthood reveals an unshaken faith that the social order will reward him.',
    quote:
      '”It would be very awkward, wouldn\u2019t it?”',
  },
  {
    name: 'Sybil Birling',
    role: '"Cold" wife and charity board chair',
    analysis:
      'Socially superior to her husband (stage directions: "her husband\u2019s social superior"), Sybil weaponises class and respectability. As chair of the Brumley Women\u2019s Charity Organisation she refuses Eva help and blames "the father of the child", unaware she is condemning her own son. Priestley gives her the play\u2019s most chilling moments of self-protective denial.',
    quote:
      '“I accept no blame for it at all.”',
  },
  {
    name: 'Sheila Birling',
    role: 'Daughter and moral barometer',
    analysis:
      'Early in Act One Sheila is "pretty" and "pleased with life". By Act Three she has become the play\u2019s sharpest conscience — alert, sarcastic, morally clear. Priestley uses her trajectory as evidence that young women can shed the worldview they are raised into. Her engagement ring is first a symbol of belonging and later a symbol of what she chooses to set down.',
    quote:
      '“These girls aren\u2019t cheap labour — they\u2019re people.”',
  },
  {
    name: 'Eric Birling',
    role: 'Son and alcoholic heir',
    analysis:
      'Eric is "half shy, half assertive" and clearly drinks heavily. His exploitation of Eva — which tips into what the text treats as something like rape ("I was in that state when a chap easily turns nasty") — is the play\u2019s ugliest moment. Yet, like Sheila, he accepts responsibility where his parents refuse. Priestley gives him no easy redemption but does give him a future.',
    quote:
      '“You don\u2019t understand anything. You never did. You never even tried.”',
  },
  {
    name: 'Gerald Croft',
    role: 'Sheila\u2019s fiancé',
    analysis:
      '"An attractive chap about thirty", Gerald is the old-money aristocrat among the new-money Birlings. His affair with Daisy Renton is presented with complicated sympathy — the Inspector treats him more gently than the others — but by Act Three he has chosen to join the Birling parents in denial, offering Sheila her ring back. His decision to retreat marks him as more Birling than he first appears.',
    quote:
      '“Everything\u2019s all right now, Sheila. What about this ring?”',
  },
  {
    name: 'Eva Smith / Daisy Renton',
    role: 'The absent victim',
    analysis:
      'Eva never appears on stage. Priestley\u2019s most important dramatic choice: she is reconstructed entirely through the Birlings\u2019 stories and the Inspector\u2019s photographs. Her absence makes her a representative figure — the name changes (Eva Smith, Daisy Renton, Mrs Birling) tracking the working-class woman\u2019s instability in the Edwardian economy. Whether "she" is one person or several, the Inspector argues, the moral calculus is identical.',
    quote:
      'Inspector: “Young women living that sort of existence in every city… Miss Birling.”',
  },
  {
    name: 'Inspector Goole',
    role: 'The interrogator',
    analysis:
      '"Not a big man but… an impression of massiveness, solidity and purposefulness." Priestley\u2019s stage directions deliberately mark Goole as more than human. He knows details he could not know; his name is a pun on "ghoul"; his final speech has the cadence of a sermon. Whether he is a spirit, a dream, a rehearsal, or a device, his function is to collapse Edwardian complacency in two hours of stage time.',
    quote:
      '”We are members of one body. We are responsible for each other.”',
  },
  {
    name: 'Edna',
    role: 'The maid',
    analysis:
      'A non-speaking or minimally speaking presence, Edna is the only working-class character physically onstage. Her silent work at the start of Act One quietly enacts the servant relation Priestley wants his audience to notice.',
    quote:
      '“Yes, ma\u2019am.”',
  },
]

export default async function InspectorCallsCharactersPage() {
  await requireIgcseBoard(['edexcel-igcse'])

  return (
    <div className="space-y-10 pb-16">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://theenglishhub.app" },
          { name: "IGCSE", url: "https://theenglishhub.app/igcse" },
          { name: "Edexcel IGCSE Literature", url: "https://theenglishhub.app/igcse/edexcel" },
          { name: "Drama", url: "https://theenglishhub.app/igcse/edexcel/drama" },
          { name: "An Inspector Calls", url: "https://theenglishhub.app/igcse/edexcel/drama/an-inspector-calls" },
          { name: "Characters", url: "https://theenglishhub.app/igcse/edexcel/drama/an-inspector-calls/characters" },
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
              Edexcel IGCSE IGCSE Literature
            </Badge>
            <Badge variant="secondary">Characters</Badge>
          </div>
          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            An Inspector Calls: Characters
          </h1>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
            Analytical profiles of the Birlings, Gerald Croft, Eva Smith and
            Inspector Goole — with one short, fair-dealing quotation each.
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
              Short extracts are included under fair dealing for study and
              criticism.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="mb-5 flex items-center gap-3">
          <Users className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">
            Character profiles
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {characters.map((c) => (
            <article
              key={c.name}
              className="rounded-xl border border-border/60 bg-card p-5"
            >
              <h3 className="text-heading-sm font-heading text-foreground">
                {c.name}
              </h3>
              <p className="mt-0.5 text-body-xs font-medium uppercase tracking-wide text-primary">
                {c.role}
              </p>
              <p className="mt-3 text-body-sm leading-relaxed text-muted-foreground">
                {c.analysis}
              </p>
              <blockquote className="mt-3 border-l-2 border-primary/40 pl-3 text-body-sm italic text-foreground">
                {c.quote}
              </blockquote>
            </article>
          ))}
        </div>
      </section>

      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
        An Inspector Calls &copy; The Estate of J.B. Priestley. Short quotations reproduced under the fair dealing provision of the Copyright, Designs and Patents Act 1988 for the purpose of criticism and review.
      </p>

      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
        Short quotations reproduced under the fair dealing provision of the CDPA 1988 for criticism and review. Full text available from your school or local library.
      </p>
    </div>
  )
}
