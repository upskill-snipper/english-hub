import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Sparkles,
  Info,
  Quote,
  Feather,
} from 'lucide-react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { requireIgcseBoard } from '@/app/igcse/_lib/guard'

export const metadata: Metadata = {
  title: 'Of Mice and Men — Edexcel IGCSE Literature Study Guide',
  description:
    'Steinbeck\u2019s Of Mice and Men for Edexcel IGCSE Literature: plot, characters, themes, Great Depression context and key quotations.',
  alternates: {
    canonical:
      'https://theenglishhub.app/igcse/edexcel/prose/of-mice-and-men',
  },
}

const plotBeats = [
  {
    part: 'Section 1 — The pool by the Salinas River',
    summary:
      'George Milton and Lennie Small camp overnight before starting work at a Californian ranch. George rehearses Lennie on what to say to the boss, rescues a dead mouse from Lennie\u2019s pocket and tells the shared dream of owning "a little place" with rabbits.',
  },
  {
    part: 'Sections 2–4 — The bunkhouse',
    summary:
      'On the ranch, George and Lennie meet Candy, the aggressive Curley, his flirtatious wife, the Black stable hand Crooks, and Slim. Candy buys into the dream with his life savings. Lennie crushes Curley\u2019s hand. Crooks is briefly drawn into the dream before Curley\u2019s wife shatters his fragile hope.',
  },
  {
    part: 'Sections 5–6 — The barn and the river',
    summary:
      'Lennie accidentally kills his puppy, then Curley\u2019s wife when she lets him stroke her hair. The men form a lynch mob. George finds Lennie at the original camping spot, retells the dream one last time, and shoots him in the back of the head — an act of mercy echoing Candy\u2019s earlier loss of his dog.',
  },
]

const characters = [
  {
    name: 'George Milton',
    note:
      'Small, sharp, protective. George both resents and depends on his responsibility for Lennie; his final act is both mercy killing and self-execution of the dream.',
  },
  {
    name: 'Lennie Small',
    note:
      'Large, cognitively disabled, incapable of modulating his own strength. His obsession with "soft things" foreshadows every disaster in the novella.',
  },
  {
    name: 'Candy',
    note:
      'An aging, one-handed swamper whose dog is shot early in the book — a direct structural parallel to Lennie\u2019s death. Candy\u2019s savings briefly make the dream feel reachable.',
  },
  {
    name: 'Curley',
    note:
      'The boss\u2019s son: short, aggressive, newly married. His glove "fulla vaseline" makes him one of Steinbeck\u2019s most viscerally unpleasant minor characters.',
  },
  {
    name: 'Curley\u2019s wife',
    note:
      'Unnamed throughout — Steinbeck\u2019s deliberate choice, making her a symbol as much as a person. Lonely, performative, and ultimately a victim of the same isolation the men suffer.',
  },
  {
    name: 'Crooks',
    note:
      'The only Black worker on the ranch; segregated to his own room in the harness shed. His brief belief in the dream and its immediate destruction is the novel\u2019s most painful scene.',
  },
  {
    name: 'Slim',
    note:
      'The "jerkline skinner": a moral authority whose "majesty… only achieved by royalty and master craftsmen" offers one of the book\u2019s few genuinely decent voices.',
  },
]

const keyQuotations = [
  {
    quote: 'Guys like us… are the loneliest guys in the world.',
    speaker: 'George',
    analysis:
      'Names the novella\u2019s central problem. The line is repeated across the book in slightly different forms, acting as a refrain.',
  },
  {
    quote: 'We got a future. We got somebody to talk to…',
    speaker: 'George',
    analysis:
      'Completes the refrain with the dream of belonging. The repetition emphasises that this dream is partly spoken into existence.',
  },
  {
    quote: 'I got you to look after me, and you got me to look after you.',
    speaker: 'Lennie',
    analysis:
      'Lennie\u2019s echo of the dream ritual. The reciprocity is, tragically, only real from George\u2019s side.',
  },
  {
    quote: 'Le\u2019s get that place now.',
    speaker: 'Candy',
    analysis:
      'The moment the dream becomes financially concrete — and therefore, in Steinbeck\u2019s pessimistic logic, the moment it begins to die.',
  },
  {
    quote: 'A guy needs somebody… a guy gets too lonely an\u2019 he gets sick.',
    speaker: 'Crooks',
    analysis:
      'Extends the novella\u2019s loneliness theme to the ranch\u2019s most isolated figure. Crooks diagnoses loneliness as a pathology, not a mood.',
  },
  {
    quote: 'You got no rights comin\u2019 in a colored man\u2019s room…',
    speaker: 'Crooks',
    analysis:
      'Crooks both asserts and explains the segregation imposed on him — a micro-history of Jim Crow inside a Californian bunkhouse.',
  },
  {
    quote: 'I coulda made somethin\u2019 of myself… maybe I will yet.',
    speaker: 'Curley\u2019s wife',
    analysis:
      'Her unfulfilled Hollywood dream is a gendered variant of the same American Dream that undoes the men.',
  },
  {
    quote: 'The best laid schemes o\u2019 mice an\u2019 men / Gang aft a-gley.',
    speaker: 'Robert Burns (epigraph)',
    analysis:
      'Steinbeck\u2019s title comes from Burns\u2019s poem "To a Mouse". The epigraph announces fatalism before the story even begins.',
  },
  {
    quote: 'I ought to of shot that dog myself, George.',
    speaker: 'Candy',
    analysis:
      'The line Steinbeck uses to prepare George\u2019s final decision — it frames killing Lennie as the most honourable option available.',
  },
  {
    quote: 'I ain\u2019t mad. I never been mad, an\u2019 I ain\u2019t now.',
    speaker: 'George',
    analysis:
      'George\u2019s last words before shooting Lennie. The simple, conversational register makes the moment more devastating.',
  },
  {
    quote: 'An\u2019 live off the fatta the lan\u2019.',
    speaker: 'Lennie (quoting George)',
    analysis:
      'The ritual phrase from the dream, repeated throughout the text to mark its emotional ownership.',
  },
  {
    quote: 'Tell how it\u2019s gonna be.',
    speaker: 'Lennie',
    analysis:
      'Lennie asks for the dream as if for a bedtime story. By the time the request comes on the riverbank, the reader knows exactly what it means.',
  },
  {
    quote: 'Lennie covered his face with huge paws and bleated with terror.',
    speaker: 'Narrator',
    analysis:
      'Steinbeck\u2019s animal imagery for Lennie ("paws", "bleated") is constant. It keeps him sympathetic while reminding us of his dangerous strength.',
  },
  {
    quote: 'She was very pretty and simple, and her face was sweet and young.',
    speaker: 'Narrator (after Curley\u2019s wife\u2019s death)',
    analysis:
      'In death she briefly becomes a person rather than a threat — a small act of authorial mercy with significant critical weight.',
  },
  {
    quote: 'Now, what the hell ya suppose is eatin\u2019 them two guys?',
    speaker: 'Carlson (final line)',
    analysis:
      'The last line of the book. Carlson\u2019s incomprehension seals Steinbeck\u2019s bleak verdict on the world he has described.',
  },
]

export default async function OmamHubPage() {
  await requireIgcseBoard(['edexcel-igcse'])

  return (
    <div className="space-y-10 pb-16">
      <div>
        <Button
          variant="ghost"
          size="sm"
          render={<Link href="/igcse/edexcel/prose" />}
        >
          <ArrowLeft className="size-3.5" />
          Back to Edexcel prose
        </Button>
      </div>

      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-primary/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="relative">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge className="border-primary/20 bg-primary/10 text-primary">
              <Sparkles className="mr-1 size-3" />
              Edexcel IGCSE Literature
            </Badge>
            <Badge variant="secondary">Modern prose</Badge>
          </div>
          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            Of Mice and Men
          </h1>
          <p className="mt-1 text-body-sm text-muted-foreground">
            John Steinbeck · 1937
          </p>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
            A short, theatrical novella set on a Californian ranch during the
            Great Depression, in which two itinerant workers chase a shared
            dream that the book’s structure was always going to deny them.
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
              Of Mice and Men is in copyright. This guide uses short extracts
              for fair-dealing study and criticism. Read the full novella alongside
              these notes.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="mb-5 flex items-center gap-3">
          <BookOpen className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">
            Plot overview
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {plotBeats.map((beat) => (
            <Card key={beat.part}>
              <CardHeader className="pb-2">
                <CardTitle className="text-heading-sm font-heading">
                  {beat.part}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-body-sm leading-relaxed text-muted-foreground">
                  {beat.summary}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <div className="mb-5 flex items-center gap-3">
          <Feather className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">
            Characters at a glance
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {characters.map((c) => (
            <div
              key={c.name}
              className="rounded-xl border border-border/60 bg-card p-5"
            >
              <h3 className="text-body-md font-semibold text-foreground">
                {c.name}
              </h3>
              <p className="mt-2 text-body-sm leading-relaxed text-muted-foreground">
                {c.note}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="mb-5 flex items-center gap-3">
          <Sparkles className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">
            Deep dive
          </h2>
        </div>
        <Card className="max-w-md">
          <CardHeader className="pb-3">
            <CardTitle className="text-heading-md font-heading leading-tight">
              Themes
            </CardTitle>
            <CardDescription className="text-body-sm">
              American Dream, loneliness, friendship, discrimination and fate.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button
              variant="outline"
              size="sm"
              className="w-full"
              render={
                <Link href="/igcse/edexcel/prose/of-mice-and-men/themes" />
              }
            >
              Open themes
              <ArrowRight className="size-3.5" />
            </Button>
          </CardContent>
        </Card>
      </section>

      <section>
        <div className="mb-5 flex items-center gap-3">
          <Quote className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">
            Key quotations
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {keyQuotations.map((q, i) => (
            <div
              key={i}
              className="rounded-xl border border-border/60 bg-card p-5"
            >
              <blockquote className="border-l-2 border-primary/40 pl-3 text-body-md italic text-foreground">
                “{q.quote}”
              </blockquote>
              <p className="mt-2 text-body-xs font-medium text-primary">
                — {q.speaker}
              </p>
              <p className="mt-2 text-body-sm leading-relaxed text-muted-foreground">
                {q.analysis}
              </p>
            </div>
          ))}
        </div>
      </section>

      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
        Short quotations reproduced under the fair dealing provision of the CDPA 1988 for criticism and review. Full text available from your school or local library.
      </p>
    </div>
  )
}
