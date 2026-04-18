import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Users, Sparkles, Info } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { requireIgcseBoard } from '@/app/igcse/_lib/guard'

export const metadata: Metadata = {
  title: 'A View from the Bridge Characters — Edexcel IGCSE Literature',
  description:
    'Character analysis for A View from the Bridge: Eddie Carbone, Catherine, Beatrice, Marco, Rodolpho and Alfieri.',
  alternates: {
    canonical:
      'https://theenglishhub.app/igcse/edexcel/drama/a-view-from-the-bridge/characters',
  },
}

const characters = [
  {
    name: 'Eddie Carbone',
    role: 'Longshoreman and tragic protagonist',
    analysis:
      'Eddie is a hard-working, well-respected docker in Red Hook who has raised his orphaned niece Catherine as his own. His protectiveness toward her gradually reveals itself as something more possessive and darker \u2014 a repressed desire he cannot name. Miller frames Eddie as a flawed tragic hero in the Greek mould: a man of genuine loyalty and decency who is destroyed by the one feeling he refuses to acknowledge. His decision to call Immigration and betray Marco and Rodolpho is the play\u2019s catastrophe, transforming him from community man to pariah. His final demand \u2014 "I want my name!" \u2014 shows that honour and reputation are the only currencies he understands, even as he has squandered both.',
    quote: '"I want my name!\u2026 Marco\u2019s got my name"',
  },
  {
    name: 'Catherine',
    role: 'Eddie and Beatrice\u2019s niece',
    analysis:
      'Catherine is seventeen, bright and eager for independence. Her excitement about her first job and her growing love for Rodolpho represent normal adolescent development, but Eddie experiences them as abandonment and betrayal. Miller positions Catherine as innocent but not passive: she challenges Eddie\u2019s authority with increasing confidence as the play progresses. Her affection for Eddie is genuine and uncomplicated \u2014 she loves him as a father \u2014 which makes his feelings all the more tragic. By the final scene, she has moved from dependence to a painful kind of autonomy.',
    quote: '"I\u2019m not a baby. I know a lot more than people think"',
  },
  {
    name: 'Beatrice',
    role: 'Eddie\u2019s wife',
    analysis:
      'Beatrice is the play\u2019s most emotionally intelligent character. She is the first to see what Eddie cannot admit about his feelings for Catherine, and she names it directly in the climax: "You want somethin\u2019 else, Eddie, and you can never have her!" She is also the character who suffers most quietly \u2014 her question "When am I gonna be a wife again?" reveals that Eddie has withdrawn from their marriage. Miller gives Beatrice a double burden: she loves a husband who is emotionally absent and must protect a niece who is emotionally blind to the danger. Her presence in the final scene, holding Eddie as he dies, is the play\u2019s emotional anchor.',
    quote: '"When am I gonna be a wife again, Eddie?"',
  },
  {
    name: 'Marco',
    role: 'Beatrice\u2019s older cousin from Italy',
    analysis:
      'Marco is physically powerful, quiet and driven by an absolute code of honour. He has come to America to earn money for his starving wife and children in Sicily \u2014 his motivation is entirely selfless. When Eddie betrays the cousins to Immigration, Marco\u2019s response is governed by the Sicilian honour code: a wrong done to his family must be answered. His public accusation ("That one! He killed my children!") and the final street fight are the inevitable consequences of Eddie\u2019s betrayal. Miller uses Marco to show that the old-world code Eddie once claimed to respect is also the instrument of his destruction.',
    quote: '"He degraded my brother. My blood."',
  },
  {
    name: 'Rodolpho',
    role: 'Beatrice\u2019s younger cousin from Italy',
    analysis:
      'Rodolpho is blond, cheerful, and talented in ways that make Eddie suspicious: he sings, cooks, sews and dreams of motorcycles. His un-stereotypical masculinity \u2014 he does not conform to Eddie\u2019s definition of what a man should be \u2014 becomes the axis on which the plot turns. Eddie labels him "the guy ain\u2019t right", using homophobic shorthand to rationalise his jealousy. Miller presents Rodolpho sympathetically: his love for Catherine appears genuine, and his desire for American citizenship, while real, does not cancel out his feelings. He represents a more flexible, less self-destructive model of manhood than Eddie can tolerate.',
    quote: '"I want to be an American so I can work"',
  },
  {
    name: 'Alfieri',
    role: 'Lawyer and chorus',
    analysis:
      'Alfieri is an Italian-American lawyer who functions as the play\u2019s narrator and Greek chorus. His opening and closing speeches frame the action as a tragedy whose end is already known: "This one\u2019s name was Eddie Carbone." He attempts to counsel Eddie within the limits of the law but cannot prevent the catastrophe. His phrase "settle for half" \u2014 meaning the compromise between old-world honour and American legality \u2014 is the play\u2019s central moral formula. Alfieri\u2019s final speech refuses to condemn Eddie, instead offering the ambiguous tribute: "He allowed himself to be wholly known." Miller uses Alfieri to hold judgement and compassion in tension.',
    quote: '"He allowed himself to be wholly known"',
  },
]

export default async function AViewCharactersPage() {
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
            <Badge variant="secondary">Characters</Badge>
          </div>
          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            A View from the Bridge: Characters
          </h1>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
            Analytical profiles of Eddie, Catherine, Beatrice, Marco,
            Rodolpho and Alfieri &mdash; with one short, fair-dealing
            quotation each.
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
        A View from the Bridge &copy; The Arthur Miller Estate. Short
        quotations reproduced under the fair dealing provision of the
        Copyright, Designs and Patents Act 1988 for the purpose of criticism
        and review.
      </p>
    </div>
  )
}
