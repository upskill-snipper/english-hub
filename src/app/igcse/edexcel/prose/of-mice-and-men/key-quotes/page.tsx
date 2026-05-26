import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Sparkles, Info, Quote } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { requireIgcseBoard } from '@/app/igcse/_lib/guard'

import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
export const metadata: Metadata = {
  openGraph: {
    title: 'Of Mice and Men Key Quotes - Edexcel IGCSE Literature',
    description:
      '20 key quotations from Of Mice and Men organised by theme for Edexcel IGCSE Literature revision: the American Dream, loneliness, friendship, discrimination and fate.',
  },
  title: 'Of Mice and Men Key Quotes - Edexcel IGCSE Literature',
  description:
    '20 key quotations from Of Mice and Men organised by theme for Edexcel IGCSE Literature revision: the American Dream, loneliness, friendship, discrimination and fate.',
  alternates: {
    canonical: 'https://theenglishhub.app/igcse/edexcel/prose/of-mice-and-men/key-quotes',
  },
}

const themeGroups = [
  {
    theme: 'The American Dream',
    quotes: [
      {
        text: 'An\u2019 live off the fatta the lan\u2019.',
        speaker: 'Lennie (quoting George)',
        analysis: 'The ritual phrase of the Dream. Its repetition makes it a prayer, not a plan.',
      },
      {
        text: 'Le\u2019s get that place now.',
        speaker: 'Candy',
        analysis:
          'The Dream becomes financially real \u2014 and, in Steinbeck\u2019s logic, begins to die.',
      },
      {
        text: 'Every damn one of \u2019em\u2019s got a little piece of land in his head.',
        speaker: 'Crooks',
        analysis: 'Crooks exposes the Dream as universal, recurrent and always disappointed.',
      },
      {
        text: 'I coulda made somethin\u2019 of myself. Maybe I will yet.',
        speaker: 'Curley\u2019s wife',
        analysis: 'Her Hollywood dream is a gendered variant of the same failed ambition.',
      },
    ],
  },
  {
    theme: 'Loneliness and isolation',
    quotes: [
      {
        text: 'Guys like us, that work on ranches, are the loneliest guys in the world.',
        speaker: 'George',
        analysis:
          'The novella\u2019s opening refrain names loneliness as the ranch workers\u2019 defining condition.',
      },
      {
        text: 'A guy needs somebody \u2014 to be near him.',
        speaker: 'Crooks',
        analysis: 'Crooks diagnoses loneliness as a pathology, not simply a mood.',
      },
      {
        text: 'I never get to talk to nobody. I get awful lonely.',
        speaker: 'Curley\u2019s wife',
        analysis: 'The only woman on the ranch voices an isolation the men refuse to acknowledge.',
      },
      {
        text: 'Now what the hell ya suppose is eatin\u2019 them two guys?',
        speaker: 'Carlson (final line)',
        analysis:
          'Carlson\u2019s incomprehension seals the novella\u2019s verdict: the world cannot recognise grief.',
      },
    ],
  },
  {
    theme: 'Friendship and companionship',
    quotes: [
      {
        text: 'I got you to look after me, and you got me to look after you.',
        speaker: 'Lennie',
        analysis:
          'Parallel structure creates the illusion of reciprocity in a one-sided relationship.',
      },
      {
        text: 'We got a future. We got somebody to talk to that gives a damn about us.',
        speaker: 'George',
        analysis: 'Friendship is defined against the ranch\u2019s default of isolation.',
      },
      {
        text: 'I ain\u2019t mad. I never been mad, an\u2019 I ain\u2019t now.',
        speaker: 'George (final scene)',
        analysis: 'George\u2019s last words to Lennie are gentle, conversational and devastating.',
      },
      {
        text: 'Tell me \u2014 like you done before.',
        speaker: 'Lennie',
        analysis: 'The dream is requested as a bedtime story; repetition intensifies the tragedy.',
      },
    ],
  },
  {
    theme: 'Discrimination and powerlessness',
    quotes: [
      {
        text: 'You got no rights comin\u2019 in a colored man\u2019s room.',
        speaker: 'Crooks',
        analysis: 'Crooks asserts the only boundaries segregation allows him: his tiny space.',
      },
      {
        text: 'I could get you strung up on a tree so easy it ain\u2019t even funny.',
        speaker: 'Curley\u2019s wife (to Crooks)',
        analysis: 'She weaponises racial violence to reclaim power from her own marginalisation.',
      },
      {
        text: 'I ought to of shot that dog myself, George.',
        speaker: 'Candy',
        analysis:
          'Foreshadows George\u2019s decision; losing agency over death is presented as a failure.',
      },
      {
        text: 'Lennie covered his face with huge paws and bleated with terror.',
        speaker: 'Narrator',
        analysis:
          'Animal imagery dehumanises Lennie while sustaining sympathy for his vulnerability.',
      },
    ],
  },
  {
    theme: 'Fate and predestination',
    quotes: [
      {
        text: 'The best laid schemes o\u2019 mice an\u2019 men / Gang aft a-gley.',
        speaker: 'Robert Burns (epigraph)',
        analysis: 'The title\u2019s source announces fatalism before the story begins.',
      },
      {
        text: 'She was very pretty and simple, and her face was sweet and young.',
        speaker: 'Narrator (after Curley\u2019s wife\u2019s death)',
        analysis: 'Death restores the humanity the narrative withheld in life.',
      },
      {
        text: 'A silent head and beak lanced down and plucked it out by the head.',
        speaker: 'Narrator (the heron)',
        analysis: 'Nature\u2019s predation in the closing pool scene mirrors the coming violence.',
      },
      {
        text: 'I know now. I know now.',
        speaker: 'George',
        analysis:
          'George\u2019s flat repetition signals the death of hope and the dream simultaneously.',
      },
    ],
  },
]

export default async function OmamKeyQuotesPage() {
  await requireIgcseBoard(['edexcel-igcse'])

  return (
    <div className="space-y-10 pb-16">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'IGCSE', url: 'https://theenglishhub.app/igcse' },
          { name: 'Edexcel IGCSE Literature', url: 'https://theenglishhub.app/igcse/edexcel' },
          { name: 'Prose', url: 'https://theenglishhub.app/igcse/edexcel/prose' },
          {
            name: 'Of Mice and Men',
            url: 'https://theenglishhub.app/igcse/edexcel/prose/of-mice-and-men',
          },
          {
            name: 'Key Quotations',
            url: 'https://theenglishhub.app/igcse/edexcel/prose/of-mice-and-men/key-quotes',
          },
        ]}
      />
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
              Edexcel IGCSE Literature
            </Badge>
            <Badge variant="secondary">Key quotes</Badge>
          </div>
          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            Of Mice and Men: Key Quotes
          </h1>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
            20 essential quotations organised by theme. Each quote is 15 words or fewer, with
            speaker attribution and brief analysis for exam revision.
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
              Short extracts are included under fair dealing (CDPA 1988) for study and criticism.
              Read the full novella alongside these notes.
            </p>
          </div>
        </div>
      </section>

      {themeGroups.map((group) => (
        <section key={group.theme}>
          <div className="mb-5 flex items-center gap-3">
            <Quote className="size-5 text-primary" />
            <h2 className="text-heading-lg font-heading text-foreground">{group.theme}</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {group.quotes.map((q, i) => (
              <div key={i} className="rounded-xl border border-border/60 bg-card p-5">
                <blockquote className="border-l-2 border-primary/40 pl-3 text-body-md italic text-foreground">
                  &ldquo;{q.text}&rdquo;
                </blockquote>
                <p className="mt-2 text-body-xs font-medium text-primary">- {q.speaker}</p>
                <p className="mt-2 text-body-sm leading-relaxed text-muted-foreground">
                  {q.analysis}
                </p>
              </div>
            ))}
          </div>
        </section>
      ))}

      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
        Short quotations reproduced under the fair dealing provision of the CDPA 1988 for criticism
        and review. Full text available from your school or local library.
      </p>
    </div>
  )
}
