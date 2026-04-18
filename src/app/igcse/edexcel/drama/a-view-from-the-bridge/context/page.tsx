import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Globe, Info, Sparkles } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { requireIgcseBoard } from '@/app/igcse/_lib/guard'

export const metadata: Metadata = {
  title: 'A View from the Bridge Context — Edexcel IGCSE Literature',
  description:
    'Context for A View from the Bridge: 1950s Red Hook Brooklyn, Italian-American immigration, McCarthyism, Arthur Miller\u2019s background and Greek tragic form.',
  alternates: {
    canonical:
      'https://theenglishhub.app/igcse/edexcel/drama/a-view-from-the-bridge/context',
  },
}

const contextBlocks = [
  {
    title: '1950s Red Hook, Brooklyn',
    body:
      'Red Hook was a working-class waterfront neighbourhood dominated by Italian-American longshoremen. The docks provided hard, insecure work governed by the "shape-up" system, in which men were selected daily by hiring bosses. The close-knit community operated partly outside American law, with unwritten codes of loyalty, silence and mutual protection \u2014 especially regarding illegal immigrants. Miller lived and worked in Red Hook while researching the play, and the setting is not backdrop but a structural condition of the action.',
  },
  {
    title: 'Italian-American immigration',
    body:
      'The first major waves of Italian immigration to New York arrived between the 1880s and 1920s. By the 1950s, Italian-Americans in Red Hook were established citizens, but many still harboured "submarines" \u2014 undocumented relatives who entered illegally to work and send money home. The Immigration and Nationality Act of 1952 tightened controls. Marco and Rodolpho arrive into this exact legal landscape: tolerated by the community but vulnerable to a single phone call. Eddie\u2019s betrayal has teeth because of the law\u2019s severity.',
  },
  {
    title: 'The Italian-American honour code',
    body:
      'Sicilian culture brought to Red Hook a code of honour (onore) in which a man\u2019s reputation, his family\u2019s good name and the obligation of vendetta were paramount. Informing on a neighbour to the authorities was the gravest violation of this code \u2014 the story of Vinny Bolzano, thrown down the stairs by his own family for informing, establishes this early in the play. Eddie\u2019s tragedy is that he invokes the very code he betrays.',
  },
  {
    title: 'McCarthyism and "naming names"',
    body:
      'Miller wrote A View from the Bridge during the McCarthy era, when the House Un-American Activities Committee (HUAC) pressured writers, actors and directors to name colleagues with Communist sympathies. Miller himself was called before HUAC in 1956 and refused to name names. Eddie\u2019s decision to inform on Marco and Rodolpho can be read as a parable about McCarthyism: the informer destroys himself and his community in the act of betrayal. Miller denied the play was a direct allegory but acknowledged the parallel.',
  },
  {
    title: 'Arthur Miller\u2019s background',
    body:
      'Miller (1915\u20132005) was the son of Polish-Jewish immigrants and grew up in Harlem and Brooklyn during the Depression. His major works \u2014 Death of a Salesman, The Crucible, A View from the Bridge \u2014 share a preoccupation with the gap between the American Dream and American reality, and with ordinary men whose self-deceptions lead to catastrophe. A View from the Bridge began as a one-act play in 1955 and was revised into the two-act version studied today in 1956.',
  },
  {
    title: 'Greek tragedy and the chorus',
    body:
      'Miller explicitly modelled A View from the Bridge on Greek tragedy. Alfieri functions as the chorus, framing the action as a story whose end is already known. The play observes near-classical unities of time and place: the action unfolds over a few weeks in and around the Carbone apartment. Eddie\u2019s hamartia (tragic flaw) is his inability to recognise his own desire; his anagnorisis (recognition) comes too late, in the moment of death. Miller wanted to prove that tragedy was possible with an ordinary protagonist.',
  },
  {
    title: 'Masculinity in 1950s America',
    body:
      'The post-war era enforced rigid gender roles. Working-class masculinity was defined by physical labour, provider status and heterosexual dominance. Rodolpho\u2019s singing, cooking and blond hair violate these norms, and Eddie\u2019s anxiety about Rodolpho\u2019s sexuality reflects 1950s homophobia. Miller uses the community\u2019s narrow definition of manhood to expose its fragility: Eddie\u2019s compulsive policing of masculinity is itself a sign of his insecurity.',
  },
  {
    title: 'The play\u2019s two versions',
    body:
      'The original 1955 one-act version was staged as a double bill with another Miller play, A Memory of Two Mondays. Miller revised it into a two-act play in 1956 for a London production directed by Peter Brook. The two-act version \u2014 the one studied at IGCSE \u2014 expanded Beatrice\u2019s role, deepened Catherine\u2019s character and gave Alfieri\u2019s chorus speeches greater weight. The revision shifted the balance from parable toward psychological drama.',
  },
]

export default async function AViewContextPage() {
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
            <Badge variant="secondary">Context</Badge>
          </div>
          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            A View from the Bridge: Context
          </h1>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
            Historical, biographical and dramatic context for Miller's play
            &mdash; essential for responses on social, cultural and
            historical context.
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
              This guide is a study companion, not a replacement for reading
              or watching the play.
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
            <article
              key={c.title}
              className="rounded-xl border border-border/60 bg-card p-6"
            >
              <h3 className="text-heading-sm font-heading text-foreground">
                {c.title}
              </h3>
              <p className="mt-3 text-body-sm leading-relaxed text-muted-foreground">
                {c.body}
              </p>
            </article>
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
