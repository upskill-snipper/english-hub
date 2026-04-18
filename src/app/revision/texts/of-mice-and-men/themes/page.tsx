import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Lightbulb,
  Quote,
  Sparkles,
} from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { getServerBoard } from '@/lib/board/get-server-board'

export const metadata: Metadata = {
  title: 'Of Mice and Men — Themes | The English Hub',
  description:
    'Detailed theme analysis for Of Mice and Men by John Steinbeck: The American Dream, Loneliness, Power, Friendship, Prejudice and Nature.',
  alternates: {
    canonical:
      'https://theenglishhub.app/revision/texts/of-mice-and-men/themes',
  },
}

/* ── Theme data ────────────────────────────────────────────────────────── */

type ThemeData = {
  title: string
  overview: string
  howSteinbeckPresentsIt: string
  keyQuotes: { text: string; speaker: string; analysis: string }[]
  contextLink: string
  examTip: string
}

const THEMES: ThemeData[] = [
  {
    title: 'The American Dream',
    overview:
      'Steinbeck systematically dismantles the myth of the self-made man. The dream of owning "a little house and a couple of acres" is repeated like a prayer throughout the novella, but it is crushed at the exact moment it seems achievable. The title itself, taken from Robert Burns\'s poem "To a Mouse," warns that the best-laid plans of mice and men go awry. Every character who dares to dream is punished for it.',
    howSteinbeckPresentsIt:
      'Steinbeck structures the dream as a call-and-response ritual between George and Lennie, giving it the rhythm of scripture. When Candy adds his savings, the dream shifts from fantasy to realistic possibility — Steinbeck briefly lets the reader hope too. This makes the destruction more painful. The dream is never achieved because the economic system makes it impossible: wages are spent in cat houses, workers are atomised, and one mistake erases everything.',
    keyQuotes: [
      {
        text: '"We\'re gonna get a little place."',
        speaker: 'George — Chapter 1',
        analysis:
          'The dream in its simplest form. Steinbeck uses repetition to make it feel like a ritual of survival, not a plan.',
      },
      {
        text: '"Ever\'body wants a little piece of lan\'."',
        speaker: 'Crooks — Chapter 4',
        analysis:
          'Crooks has seen hundreds of men with the same dream and none who achieved it. Steinbeck uses him to expose the dream as a collective delusion.',
      },
      {
        text: '"I think I knowed from the very first. I think I knowed we\'d never do her."',
        speaker: 'George — Chapter 5',
        analysis:
          'George admits the dream was always impossible. Steinbeck collapses hope and self-awareness in a single devastating line.',
      },
    ],
    contextLink:
      'The American Dream — the belief that hard work guarantees prosperity — was central to national identity. The Great Depression exposed it as a myth for millions. Steinbeck, writing in 1937, shows that the dream survives precisely because people have nothing else. It is both medicine and poison.',
    examTip:
      'This is the safest theme to lead with in an essay because it connects to every character. Examiners expect you to discuss the dream as a structural device, not just a motif. Show how Steinbeck raises and destroys hope deliberately.',
  },
  {
    title: 'Loneliness and isolation',
    overview:
      'Nearly every character in the novella is alone in some fundamental way. Candy clings to his dog, Crooks clings to his books, Curley\'s wife clings to faded dreams of Hollywood. Soledad, the name of the nearest town, means "solitude" in Spanish — Steinbeck turns the very landscape into a metaphor for the workers\' isolation. The novella argues that loneliness is not a personal failing but a structural condition of migrant labour.',
    howSteinbeckPresentsIt:
      'Steinbeck uses George and Lennie\'s companionship as a contrast to the loneliness around them. Their bond is repeatedly noted as unusual — Slim says "ain\'t many guys travel around together" — which makes the isolation of the other characters more visible. The novella\'s circular structure, opening and closing at the same pool, suggests that nothing has changed and the loneliness will continue after Lennie is gone.',
    keyQuotes: [
      {
        text: '"A guy needs somebody — to be near him."',
        speaker: 'Crooks — Chapter 4',
        analysis:
          'The simplest and most powerful statement of the theme. Steinbeck gives the most isolated character the clearest articulation of universal human need.',
      },
      {
        text: '"I never get to talk to nobody. I get awful lonely."',
        speaker: 'Curley\'s Wife — Chapter 5',
        analysis:
          'Her loneliness humanises her moments before her death. Steinbeck forces the reader to see her as a person, not a plot device.',
      },
      {
        text: '"Ain\'t many guys travel around together."',
        speaker: 'Slim — Chapter 3',
        analysis:
          'Slim identifies what makes George and Lennie special and, by implication, how unusual connection is in their world.',
      },
    ],
    contextLink:
      'Migrant ranch workers in 1930s California moved constantly, never staying long enough to form lasting bonds. Steinbeck knew this world from his own experience in Salinas Valley. The itinerant labour system was designed for economic efficiency, not human connection.',
    examTip:
      'Connect loneliness to the setting. Examiners reward candidates who discuss Soledad as a symbolic name and who show how Steinbeck uses the bunkhouse — shared space but no real intimacy — as a physical representation of emotional isolation.',
  },
  {
    title: 'Power and powerlessness',
    overview:
      'The novella maps a rigid hierarchy of power. The Boss owns the ranch. Curley inherits authority. Slim earns respect. Below them, every other character is vulnerable in a different way: Lennie through disability, Crooks through race, Curley\'s wife through gender, Candy through age. Steinbeck shows how those without power turn on each other — Curley\'s wife threatens Crooks with lynching — because attacking downward is the only form of agency available.',
    howSteinbeckPresentsIt:
      'Steinbeck uses physical settings to signal power: the Boss has his own house, the workers share a bunkhouse, Crooks is confined to the harness room. He also uses Curley\'s gloved hand as a symbol of insecure masculinity and borrowed power. The crushing of that hand by Lennie briefly overturns the hierarchy, but the restoration is swift and violent.',
    keyQuotes: [
      {
        text: '"I could get you strung up on a tree so easy."',
        speaker: 'Curley\'s Wife to Crooks — Chapter 4',
        analysis:
          'The powerless woman uses racial violence as a weapon against the only person lower in the hierarchy. Steinbeck shows how oppression is reproduced within oppressed groups.',
      },
      {
        text: '"You keep your place then, Nigger. I could get you strung up."',
        speaker: 'Curley\'s Wife — Chapter 4',
        analysis:
          'The slur and the threat expose the intersection of racism and sexism. Steinbeck shows that even the most marginalised characters can weaponise what little power they have.',
      },
      {
        text: '"Think I don\'t like to talk to somebody ever\' once in a while?"',
        speaker: 'Curley\'s Wife — Chapter 4',
        analysis:
          'Her need for companionship is genuine, but her only tool is the power her whiteness and femininity give her over men like Crooks.',
      },
    ],
    contextLink:
      'The 1930s ranch system concentrated power in the hands of landowners. Workers had no unions, no contracts and no legal protections. Steinbeck, sympathetic to labour movements, uses the novella to expose how this power structure turns workers against each other instead of against the system.',
    examTip:
      'Discuss power as intersectional. Examiners reward candidates who show how race, gender, age and disability create overlapping forms of powerlessness, and who analyse Chapter 4 as the key scene where these dynamics collide.',
  },
  {
    title: 'Friendship and loyalty',
    overview:
      'George and Lennie\'s bond is what sets them apart from "the loneliest guys in the world." Steinbeck treats their friendship as both sacred and fragile, showing that it cannot survive the economic and social pressures of the age. The novella\'s deepest tragedy is not Lennie\'s death but the destruction of the bond itself — George survives, but alone.',
    howSteinbeckPresentsIt:
      'Steinbeck presents the friendship through ritualised speech: the dream recitation is a shared liturgy that both men need. He also uses contrast: every other relationship in the novella is transactional or antagonistic. The Boss is suspicious of their friendship. Curley\'s marriage is hollow. The workers drink and fight alone. Against this, George and Lennie\'s bond is extraordinary — and therefore doomed.',
    keyQuotes: [
      {
        text: '"Because I got you an\' you got me."',
        speaker: 'Lennie — Chapter 1',
        analysis:
          'The simplest expression of mutual need. Steinbeck gives the most emotionally intelligent line to the character the world considers least intelligent.',
      },
      {
        text: '"We got a future."',
        speaker: 'George — Chapter 1',
        analysis:
          'George believes it when he says it. Steinbeck makes the reader believe it too, which is what makes the ending unbearable.',
      },
      {
        text: '"Ain\'t many guys travel around together... Maybe ever\'body in the whole world is scared of each other."',
        speaker: 'Slim — Chapter 3',
        analysis:
          'Slim identifies both what is special about the friendship and what destroys it in everyone else: fear. Steinbeck uses Slim as the voice of structural analysis.',
      },
    ],
    contextLink:
      'Migrant labour was designed to prevent solidarity. Workers moved constantly, were paid just enough to survive and were set in competition with each other for scarce jobs. Steinbeck shows that friendship under these conditions is not just rare — it is an act of resistance.',
    examTip:
      'Avoid sentimentality. Examiners value candidates who discuss the friendship as Steinbeck\'s structural critique of an economic system that makes human connection nearly impossible, not as a simple love story.',
  },
  {
    title: 'Prejudice and discrimination',
    overview:
      'The novella is a catalogue of prejudice: racism against Crooks, sexism toward Curley\'s wife, ableism toward Lennie and ageism toward Candy. Steinbeck shows that a rigid social hierarchy turns vulnerable people into targets and that the powerless sometimes turn on each other to feel strong. Prejudice is not presented as individual malice but as a systemic feature of the society.',
    howSteinbeckPresentsIt:
      'Steinbeck uses segregation as a physical marker: Crooks lives apart, Curley\'s wife is confined to the house, Lennie is kept away from others. He also uses language — the casual racial slurs, the refusal to name Curley\'s wife — to show how prejudice is embedded in everyday speech. Chapter 4, set in Crooks\'s room, is the novella\'s most concentrated exploration of intersecting prejudices.',
    keyQuotes: [
      {
        text: '"I ain\'t wanted in the bunk house."',
        speaker: 'Crooks — Chapter 4',
        analysis:
          'A factual statement delivered without self-pity. Steinbeck lets the injustice speak for itself, which is more powerful than any polemic.',
      },
      {
        text: '"They left all the weak ones here."',
        speaker: 'Curley\'s Wife — Chapter 4',
        analysis:
          'She identifies the marginalised group — the old, the Black, the disabled — but does not recognise herself as part of it. Steinbeck shows how internalised prejudice blinds people to their own oppression.',
      },
      {
        text: '"Why ain\'t you wanted?"',
        speaker: 'Lennie — Chapter 4',
        analysis:
          'Lennie\'s innocent question forces Crooks to explain segregation. Steinbeck uses Lennie\'s lack of social awareness to expose racism as learned, not natural.',
      },
    ],
    contextLink:
      'Racial segregation was legal in 1930s America and would not be formally challenged until the Civil Rights Movement of the 1950s and 1960s. Women had limited legal rights and economic independence. Disability was poorly understood and often met with institutionalisation or exploitation.',
    examTip:
      'Examiners reward candidates who treat prejudice as systemic rather than individual. Discuss how Steinbeck uses the novella\'s structure — placing all the marginalised characters together in Chapter 4 — to make the point that prejudice is interconnected.',
  },
  {
    title: 'Nature and animals',
    overview:
      'The novella opens and closes at the same pool by the Salinas River, creating a circular structure that suggests nature\'s indifference to human suffering. Animals recur throughout: Lennie\'s dead mice, the puppy, Candy\'s dog, the heron eating the water snake. Steinbeck draws a consistent parallel between the natural world\'s casual violence and the social world\'s treatment of vulnerable people.',
    howSteinbeckPresentsIt:
      'Steinbeck uses the pastoral opening to establish a brief Eden before the ranch intrudes. The pool is a place of safety — Lennie is told to return there if he gets into trouble — but it is also the place of his death. The heron kills a water snake in both the opening and closing chapters, a repeated image that frames human tragedy within natural cycles of predation. Candy\'s dog is shot in a scene that foreshadows and structurally mirrors Lennie\'s death.',
    keyQuotes: [
      {
        text: '"A water snake glided smoothly up the pool."',
        speaker: 'Narrator — Chapter 1 and Chapter 6',
        analysis:
          'The repeated image creates circularity. Nature continues regardless of human suffering. Steinbeck uses the snake\'s indifference to underscore the novella\'s tragic determinism.',
      },
      {
        text: '"I don\'t know why I can\'t keep it. It ain\'t nobody\'s mouse."',
        speaker: 'Lennie — Chapter 1',
        analysis:
          'Lennie\'s love of soft things is established immediately. Steinbeck sets up the escalating pattern — mice, puppy, woman — that drives the plot to its conclusion.',
      },
      {
        text: '"He ain\'t no good to himself. Why\'n\'t you shoot him?"',
        speaker: 'Carlson on Candy\'s dog — Chapter 3',
        analysis:
          'Carlson\'s pragmatic cruelty toward the dog foreshadows the treatment of Lennie. Steinbeck draws a direct line between how society treats animals and how it treats vulnerable people.',
      },
    ],
    contextLink:
      'Steinbeck grew up in the Salinas Valley and knew its landscape intimately. His naturalism — the belief that environment shapes destiny — is evident in every description. The natural world in the novella is beautiful but indifferent, offering no moral comfort.',
    examTip:
      'Link the natural imagery to structure. Examiners reward candidates who discuss the circular opening and closing, the foreshadowing chain of animal deaths, and Steinbeck\'s use of pathetic fallacy — or its deliberate absence.',
  },
]

/* ── Page ───────────────────────────────────────────────────────────────── */

export default async function OfMiceAndMenThemesPage() {
  const board = await getServerBoard()
  const allowedBoards = ['edexcel-igcse']
  if (board && !allowedBoards.includes(board)) {
    redirect('/revision/texts')
  }

  return (
    <div className="space-y-10 pb-16">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-amber-500/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-amber-500/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-violet-500/5 blur-3xl" />
        <div className="relative">
          <Button
            variant="ghost"
            size="sm"
            className="mb-4 -ml-2 text-muted-foreground"
            render={<Link href="/revision/texts/of-mice-and-men" />}
          >
            <ArrowLeft className="size-3.5" />
            Back to Of Mice and Men
          </Button>

          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge variant="secondary">
              <BookOpen className="mr-1 size-3 text-violet-400" />
              Modern Text — Novella
            </Badge>
            <Badge variant="outline" className="text-muted-foreground">
              <Sparkles className="mr-1 size-3" />
              Edexcel IGCSE
            </Badge>
          </div>

          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            Theme Analysis
          </h1>
          <p className="mt-2 text-body-lg text-muted-foreground">
            Of Mice and Men by John Steinbeck
          </p>
          <p className="mt-4 max-w-2xl text-body-md text-muted-foreground">
            Six major themes explored in depth with Steinbeck&apos;s methods, contextual links
            and examiner guidance. All quotes are 15 words or fewer.
          </p>
        </div>
      </section>

      {/* Themes */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <Lightbulb className="size-5 text-clay-600" />
          <h2 className="text-heading-lg font-heading text-foreground">Themes</h2>
        </div>
        <div className="space-y-6">
          {THEMES.map((t) => (
            <Card key={t.title}>
              <CardHeader>
                <CardTitle className="text-heading-md font-heading">{t.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                {/* Overview */}
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-foreground">Overview</h3>
                  <p className="text-body-sm text-muted-foreground">{t.overview}</p>
                </div>

                {/* How Steinbeck presents it */}
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-foreground">
                    How Steinbeck presents it
                  </h3>
                  <p className="text-body-sm text-muted-foreground">
                    {t.howSteinbeckPresentsIt}
                  </p>
                </div>

                {/* Key quotes */}
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold text-foreground">Key quotations</h3>
                  {t.keyQuotes.map((q) => (
                    <div
                      key={q.text}
                      className="rounded-xl border border-border/60 bg-background/50 p-4 space-y-1.5"
                    >
                      <p className="text-body-md font-medium italic text-foreground">
                        {q.text}
                      </p>
                      <p className="text-caption uppercase tracking-wide text-primary">
                        {q.speaker}
                      </p>
                      <p className="text-body-sm text-muted-foreground">{q.analysis}</p>
                    </div>
                  ))}
                </div>

                {/* Context link */}
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-foreground">
                    Contextual link
                  </h3>
                  <p className="text-body-sm text-muted-foreground">{t.contextLink}</p>
                </div>

                {/* Exam tip */}
                <div className="rounded-xl border border-primary/20 bg-primary/5 p-4">
                  <div className="flex items-center gap-2 mb-1.5">
                    <Quote className="size-3.5 text-primary" />
                    <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                      Exam tip
                    </p>
                  </div>
                  <p className="text-body-sm text-muted-foreground">{t.examTip}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Navigation */}
      <section className="flex flex-wrap gap-3">
        <Button
          variant="outline"
          size="sm"
          render={<Link href="/revision/texts/of-mice-and-men/characters" />}
        >
          Characters
          <ArrowRight className="size-3.5" />
        </Button>
        <Button
          variant="outline"
          size="sm"
          render={<Link href="/revision/texts/of-mice-and-men/key-quotes" />}
        >
          Key quotes
          <ArrowRight className="size-3.5" />
        </Button>
        <Button
          variant="outline"
          size="sm"
          render={<Link href="/revision/texts/of-mice-and-men/context" />}
        >
          Context
          <ArrowRight className="size-3.5" />
        </Button>
      </section>

      {/* Copyright notice */}
      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
        Short quotations reproduced under the fair dealing provision of the Copyright,
        Designs and Patents Act 1988 for criticism and review. Full text available from
        your school or local library.
      </p>
    </div>
  )
}
