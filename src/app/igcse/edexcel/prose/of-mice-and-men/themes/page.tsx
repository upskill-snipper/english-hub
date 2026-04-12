import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Sparkles, Info } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { requireIgcseBoard } from '@/app/igcse/_lib/guard'

export const metadata: Metadata = {
  title: 'Of Mice and Men Themes — Edexcel IGCSE 4ET1',
  description:
    'Themes in Steinbeck\u2019s Of Mice and Men: the American Dream, loneliness, friendship, discrimination, fate, power and nature.',
  alternates: {
    canonical:
      'https://theenglishhub.app/igcse/edexcel/prose/of-mice-and-men/themes',
  },
}

const themes = [
  {
    title: 'The American Dream',
    intro:
      'The dream of owning "a little place" runs through the novella as ritual rather than plan. Steinbeck treats the American Dream as both a necessary fiction — without it, the ranch workers could not endure their conditions — and a cruelty, because the novella\u2019s form is tightly structured to make the dream unattainable. Candy\u2019s money, Crooks\u2019s momentary belief and Curley\u2019s wife\u2019s Hollywood ambition are all versions of the same disappointment.',
    moments:
      'George\u2019s retellings of the dream; Candy\u2019s offer to buy in; Crooks\u2019s hopeful interjection; Curley\u2019s wife\u2019s Salinas story.',
    quote:
      '”Every damn one of \u2019em\u2019s got a little piece of land in his head.” — Crooks',
  },
  {
    title: 'Loneliness',
    intro:
      'Loneliness is the condition the ranch workers share but cannot name to each other. Steinbeck puts the diagnosis in the mouths of the characters who are most isolated by other factors: Crooks by race, Candy by age and disability, Curley\u2019s wife by gender. The novella\u2019s setting, Soledad ("solitude"), is itself a thematic pun.',
    moments:
      'Crooks\u2019s speech in his room; Curley\u2019s wife\u2019s monologue in the barn; George\u2019s confession to Slim.',
    quote:
      '“A guy needs somebody — to be near him.” — Crooks',
  },
  {
    title: 'Friendship and companionship',
    intro:
      'Against the grain of the itinerant ranch economy, George and Lennie travel together. Their companionship is protective, irritating, ritualised — and it is the novel\u2019s only functioning relationship. Slim\u2019s quiet approval of it functions as the moral authority\u2019s verdict: such friendships are rare and precious.',
    moments:
      'The opening by the pool; the recited dream; Slim\u2019s "you guys travel around together?"',
    quote:
      '“We got somebody to talk to that gives a damn about us.” — George',
  },
  {
    title: 'Discrimination and powerlessness',
    intro:
      'Steinbeck layers forms of discrimination: racial (Crooks), disability (Candy, Lennie), age (Candy), and gender (Curley\u2019s wife). Each character experiences powerlessness in a different register, and Steinbeck refuses to rank them — instead he shows how all of them are exploited by the ranch economy and by Curley\u2019s unchecked aggression.',
    moments:
      'Candy\u2019s dog; Crooks\u2019s segregated room; Curley\u2019s wife\u2019s threat to have Crooks lynched; the fight in the bunkhouse.',
    quote:
      '”I could get you strung up on a tree so easy it ain\u2019t even funny.” — Curley\u2019s wife',
  },
  {
    title: 'Fate and predestination',
    intro:
      'Structurally, Of Mice and Men is built as a tragedy. The Burns epigraph, the parallel deaths of Candy\u2019s dog and Lennie, and the return to the opening river setting all signal that the events are pre-shaped. Critics often describe the novella as a "playable novel" because of its tight dramatic arc.',
    moments:
      'The opening description of the pool; Candy\u2019s dog being shot; George\u2019s final shot fired in the same place.',
    quote:
      '“The best laid schemes o\u2019 mice an\u2019 men / Gang aft a-gley.” — Burns (epigraph)',
  },
  {
    title: 'Power and masculinity',
    intro:
      'Steinbeck examines how masculinity is constructed around physical strength (Lennie, Slim) and social power (Curley, the boss). Curley\u2019s violence is a compensation for stature; Lennie\u2019s strength becomes a liability; Slim\u2019s "majesty" comes from competence rather than domination. The novella is sceptical of every model it depicts.',
    moments:
      'Curley\u2019s attack on Lennie; Slim\u2019s quiet authority; Lennie\u2019s accidental killings.',
    quote:
      '“He\u2019s alla time picking scraps with big guys.” — Candy on Curley',
  },
  {
    title: 'Nature and setting',
    intro:
      'Steinbeck frames the novella with two scenes at the pool. Nature is peaceful, indifferent and, ultimately, the only place refuge is possible — though even that refuge is temporary. The contrast with the bunkhouse, the barn and the harness shed maps the novella\u2019s human environments onto an increasingly claustrophobic progression.',
    moments:
      'The opening pool description; Lennie\u2019s return at the end; the heron eating the water snake.',
    quote:
      '”A silent head and beak lanced down and plucked it out by the head.”',
  },
]

export default async function OmamThemesPage() {
  await requireIgcseBoard(['edexcel-igcse'])

  return (
    <div className="space-y-10 pb-16">
      <div>
        <Button
          variant="ghost"
          size="sm"
          render={<Link href="/igcse/edexcel/prose/of-mice-and-men" />}
        >
          <ArrowLeft className="size-3.5" />
          Back to Of Mice and Men
        </Button>
      </div>

      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-primary/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="relative">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge className="border-primary/20 bg-primary/10 text-primary">
              <Sparkles className="mr-1 size-3" />
              Edexcel IGCSE 4ET1
            </Badge>
            <Badge variant="secondary">Themes</Badge>
          </div>
          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            Of Mice and Men: Themes
          </h1>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
            Analytical routes through Steinbeck’s novella — the American
            Dream, loneliness, friendship, discrimination, fate, power and
            setting.
          </p>
        </div>
      </section>

      <section className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-4 sm:p-5">
        <div className="flex gap-3">
          <Info className="mt-0.5 size-5 shrink-0 text-amber-600 dark:text-amber-400" />
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

      <section className="space-y-5">
        {themes.map((t) => (
          <article
            key={t.title}
            className="rounded-xl border border-border/60 bg-card p-6"
          >
            <h2 className="text-heading-md font-heading text-foreground">
              {t.title}
            </h2>
            <p className="mt-3 text-body-sm leading-relaxed text-muted-foreground">
              {t.intro}
            </p>
            <p className="mt-3 text-body-xs text-muted-foreground">
              <span className="font-semibold text-foreground">
                Key moments:
              </span>{' '}
              {t.moments}
            </p>
            <blockquote className="mt-3 border-l-2 border-primary/40 pl-3 text-body-sm italic text-foreground">
              {t.quote}
            </blockquote>
          </article>
        ))}
      </section>

      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
        Short quotations reproduced under the fair dealing provision of the CDPA 1988 for criticism and review. Full text available from your school or local library.
      </p>
    </div>
  )
}
