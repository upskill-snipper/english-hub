import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Sparkles, Info } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { requireIgcseBoard } from '@/app/igcse/_lib/guard'

import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
export const metadata: Metadata = {
  openGraph: {
    title: 'An Inspector Calls Themes - Edexcel IGCSE Literature',
    description:
      'Themes in An Inspector Calls: social responsibility, class, gender, age versus youth, morality, power and dramatic form.',
  },
  title: 'An Inspector Calls Themes - Edexcel IGCSE Literature',
  description:
    'Themes in An Inspector Calls: social responsibility, class, gender, age versus youth, morality, power and dramatic form.',
  alternates: {
    canonical: 'https://theenglishhub.app/igcse/edexcel/drama/an-inspector-calls/themes',
  },
}

const themes = [
  {
    title: 'Social responsibility',
    intro:
      'Priestley\u2019s central theme, embodied by the Inspector\u2019s "one body" speech. The play is structured to test whether each character will accept responsibility when confronted with their role in Eva\u2019s story. Priestley\u2019s 1945 audience, emerging from a war fought partly in the name of collective purpose, was being asked whether post-war Britain would regress into the 1912 world or build something new.',
    moments:
      'Birling\u2019s "a man has to make his own way" speech; the Inspector\u2019s Act Three speech; Sheila\u2019s "we all helped to kill her".',
    quote: '”We are members of one body. We are responsible for each other.”',
  },
  {
    title: 'Class and capitalism',
    intro:
      'The Birlings\u2019 dining room is a microcosm of Edwardian capital. Arthur\u2019s factory, Gerald\u2019s aristocratic family, Milwards, the Palace Bar, the charity board - each is a node in the system that passes Eva along until she dies. Priestley uses dramatic irony (the Titanic, Germany) to make the audience see through the Birlings\u2019 certainty.',
    moments: 'Birling\u2019s Act One speech; the wage strike; the charity refusal.',
    quote: '”Come down sharply on some of these people, they\u2019d soon be asking for the earth.”',
  },
  {
    title: 'Gender and power',
    intro:
      'The play stages several versions of female experience: Sybil\u2019s complicit propriety, Sheila\u2019s dawning self-awareness, Eva\u2019s silenced absence. The Birling men each exploit women in different registers - Birling\u2019s factory discipline, Gerald\u2019s protective affair, Eric\u2019s violent drunken encounter - and Priestley insists we name each of them.',
    moments:
      'Sheila at Milwards; Gerald at the Palace Bar; Eric\u2019s confession; Mrs Birling\u2019s charity decision.',
    quote: '”Girls of that class -“ - Mrs Birling',
  },
  {
    title: 'Age versus youth',
    intro:
      'Priestley splits the Birling family along generational lines. The young Birlings - Sheila and Eric - can change; the older ones cannot. Gerald\u2019s regression into denial, despite his relative youth, tracks him with the parents. The play\u2019s hope rests on the assumption that generational turnover can do what argument alone cannot.',
    moments:
      'Sheila\u2019s "it frightens me the way you talk"; Eric\u2019s confrontation with his mother; the Act Three reversal.',
    quote:
      '“You\u2019re just the kind of son-in-law I always wanted.” - Arthur Birling (to Gerald)',
  },
  {
    title: 'Morality, guilt and denial',
    intro:
      'The Inspector\u2019s interrogation is structured like a confessional. Each Birling receives the same moral test, and the play treats their responses as choices rather than character traits. Priestley\u2019s use of dramatic irony and the phone-call twist punishes denial and rewards (at least potentially) acceptance.',
    moments:
      'Each confession in Acts One-Three; the family\u2019s attempt to "laugh it off"; the final phone call.',
    quote: '“Probably a socialist or some sort of crank.” - Arthur Birling on the Inspector',
  },
  {
    title: 'Dramatic form and the "well-made play"',
    intro:
      'Priestley exploits and subverts the conventions of the drawing-room drama. The three-act structure, classical unity of place and time, and photograph-as-evidence motif all belong to the genre; the Inspector\u2019s quasi-supernatural knowledge and the phone-call twist pull against it. The play\u2019s form itself argues that bourgeois realism cannot contain the moral pressures Priestley wants to release.',
    moments:
      'The set description (Act One); the passing of the photograph; the Inspector\u2019s exit; the ringing telephone.',
    quote: '”pink and intimate until the Inspector arrives, and then\u2026 brighter and harder.”',
  },
]

export default async function InspectorCallsThemesPage() {
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
            name: 'Themes',
            url: 'https://theenglishhub.app/igcse/edexcel/drama/an-inspector-calls/themes',
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
            <Badge variant="secondary">Themes</Badge>
          </div>
          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            An Inspector Calls: Themes
          </h1>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
            Analytical routes through Priestley’s play - social responsibility, class, gender, age
            versus youth, morality and dramatic form.
          </p>
        </div>
      </section>

      <section className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-4 sm:p-5">
        <div className="flex gap-3">
          <Info className="mt-0.5 size-5 shrink-0 text-amber-600 dark:text-clay-600" />
          <div className="space-y-1">
            <h2 className="text-body-sm font-semibold text-foreground">
              Key quotations only - read the full text
            </h2>
            <p className="text-body-xs text-muted-foreground leading-relaxed">
              Short extracts are included under fair dealing for study and criticism.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-5">
        {themes.map((t) => (
          <article key={t.title} className="rounded-xl border border-border/60 bg-card p-6">
            <h2 className="text-heading-md font-heading text-foreground">{t.title}</h2>
            <p className="mt-3 text-body-sm leading-relaxed text-muted-foreground">{t.intro}</p>
            <p className="mt-3 text-body-xs text-muted-foreground">
              <span className="font-semibold text-foreground">Key moments:</span> {t.moments}
            </p>
            <blockquote className="mt-3 border-l-2 border-primary/40 pl-3 text-body-sm italic text-foreground">
              {t.quote}
            </blockquote>
          </article>
        ))}
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
