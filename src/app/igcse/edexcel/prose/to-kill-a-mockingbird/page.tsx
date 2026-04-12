import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Users,
  Sparkles,
  Globe,
  Info,
  Quote,
  Feather,
} from 'lucide-react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { requireIgcseBoard } from '@/app/igcse/_lib/guard'

export const metadata: Metadata = {
  title: 'To Kill a Mockingbird — Edexcel IGCSE 4ET1 Study Guide',
  description:
    'Study guide for Harper Lee\u2019s To Kill a Mockingbird: plot summary, characters, themes, 1930s Alabama context and key quotations for Edexcel IGCSE 4ET1.',
  alternates: {
    canonical:
      'https://theenglishhub.app/igcse/edexcel/prose/to-kill-a-mockingbird',
  },
}

const plotBeats = [
  {
    part: 'Part One — Chapters 1–11',
    summary:
      'Scout, Jem and Dill spend long Alabama summers obsessing over reclusive neighbour Boo Radley. Atticus accepts the defence of Tom Robinson, a Black man falsely accused by Mayella Ewell, and the Finch children begin to face the town\u2019s hostility.',
  },
  {
    part: 'Part Two — Chapters 12–21',
    summary:
      'Calpurnia takes the children to her Black church. Aunt Alexandra moves in to instil Southern "gentility". The novel builds to Tom\u2019s trial, where Atticus dismantles the Ewell case but the all-white jury still convicts.',
  },
  {
    part: 'Climax and resolution — Chapters 22–31',
    summary:
      'Tom is shot trying to escape prison. Bob Ewell seeks revenge and attacks Scout and Jem on the Halloween walk home; Boo Radley saves them and kills Ewell. Sheriff Tate protects Boo, and Scout finally sees Maycomb from the Radley porch.',
  },
]

const themes = [
  {
    title: 'Racial injustice',
    blurb:
      'Tom Robinson\u2019s trial exposes the legal and social machinery of Jim Crow Alabama, showing how courtrooms can perform fairness while delivering pre-written verdicts.',
  },
  {
    title: 'Moral courage',
    blurb:
      'Atticus defines courage as "licking" a fight "before you begin" — standing by principle even when defeat is certain.',
  },
  {
    title: 'Childhood and innocence',
    blurb:
      'Scout\u2019s narration preserves a child\u2019s bewildered clarity, letting readers watch adult prejudice through eyes that do not yet take it for granted.',
  },
  {
    title: 'Empathy and perspective',
    blurb:
      'Atticus\u2019s instruction to "climb into [another person\u2019s] skin and walk around in it" becomes the novel\u2019s central moral test.',
  },
]

const subPages = [
  {
    href: '/igcse/edexcel/prose/to-kill-a-mockingbird/characters',
    title: 'Characters',
    description:
      'Scout, Atticus, Jem, Tom Robinson, Boo Radley, Calpurnia, the Ewells and more.',
    icon: Users,
  },
  {
    href: '/igcse/edexcel/prose/to-kill-a-mockingbird/themes',
    title: 'Themes',
    description:
      'Racism, justice, moral courage, innocence, empathy and the mockingbird motif.',
    icon: Sparkles,
  },
  {
    href: '/igcse/edexcel/prose/to-kill-a-mockingbird/context',
    title: 'Context',
    description:
      '1930s Alabama, the Scottsboro Boys, Jim Crow laws and the Civil Rights Movement.',
    icon: Globe,
  },
]

const keyQuotations = [
  {
    quote: 'You never really understand a person until you consider things from his point of view\u2026',
    speaker: 'Atticus Finch',
    analysis:
      'Atticus introduces the novel\u2019s ethic of empathy early, framing moral understanding as an imaginative act. The metaphor recurs at the close when Scout stands on the Radley porch.',
  },
  {
    quote: 'It\u2019s a sin to kill a mockingbird.',
    speaker: 'Miss Maudie',
    analysis:
      'The central symbol: mockingbirds (later identified with Tom and Boo) harm nothing and only sing. Killing them indexes the novel\u2019s cruelty without cost.',
  },
  {
    quote: 'Licked a hundred years before we started… no reason not to try to win.',
    speaker: 'Atticus Finch',
    analysis:
      'Redefines courage as principled action rather than confidence in victory — crucial to how we read his defence of Tom Robinson.',
  },
  {
    quote: 'The one thing that doesn\u2019t abide by majority rule is a person\u2019s conscience.',
    speaker: 'Atticus Finch',
    analysis:
      'Individual ethics vs. democratic pressure — a direct warning about how majorities legitimise injustice.',
  },
  {
    quote: 'There\u2019s something in our world that makes men lose their heads\u2026',
    speaker: 'Atticus Finch',
    analysis:
      'Atticus names racism as a kind of collective madness, preparing Jem (and the reader) for the guilty verdict despite clear evidence of Tom\u2019s innocence.',
  },
  {
    quote: 'Real courage is… when you\u2019re licked before you begin but you begin anyway.',
    speaker: 'Atticus Finch on Mrs Dubose',
    analysis:
      'Applied first to Mrs Dubose\u2019s morphine addiction, the definition retroactively frames Atticus\u2019s own doomed defence.',
  },
  {
    quote: 'Until I feared I would lose it, I never loved to read.',
    speaker: 'Scout Finch',
    analysis:
      'Establishes Scout as a literate, observant narrator and sets up Miss Caroline\u2019s class conflict in chapter 2.',
  },
  {
    quote: 'Mockingbirds don\u2019t do one thing but make music for us to enjoy.',
    speaker: 'Miss Maudie',
    analysis:
      'Elaborates the title symbol in plain moral terms a child can grasp — a technique Lee uses throughout.',
  },
  {
    quote: 'Presented themselves… in the cynical confidence that their testimony would not be doubted.',
    speaker: 'Atticus (trial speech)',
    analysis:
      'Exposes how the Ewells weaponise whiteness; the word "cynical" marks the deliberate nature of the racism.',
  },
  {
    quote: 'When it\u2019s a white man\u2019s word against a black man\u2019s, the white man always wins.',
    speaker: 'Atticus Finch',
    analysis:
      'A plain statement of the structural racism the trial will dramatise. Useful for AO4 (context) and AO1.',
  },
  {
    quote: 'Atticus, he was real nice… Most people are, Scout, when you finally see them.',
    speaker: 'Scout Finch',
    analysis:
      'Closing lines. Scout\u2019s revelation about Boo completes her moral education and mirrors Atticus\u2019s earlier lesson.',
  },
  {
    quote: 'People generally see what they look for, and hear what they listen for.',
    speaker: 'Judge Taylor (via Atticus)',
    analysis:
      'A gloss on confirmation bias — central to how Maycomb "sees" Tom and refuses to see Mayella\u2019s real attacker.',
  },
  {
    quote: 'You\u2019ll see white men cheat black men every day of your life.',
    speaker: 'Atticus Finch',
    analysis:
      'A bleak acknowledgement that unsettles the reassuring tone of much of the novel — useful against romanticised readings of Atticus.',
  },
  {
    quote: 'Don\u2019t matter who they are, anybody sets foot in this house\u2019s yo\u2019 comp\u2019ny.',
    speaker: 'Calpurnia',
    analysis:
      'Calpurnia rebukes Scout for mocking Walter Cunningham at lunch — class sits alongside race as a target of Lee\u2019s critique.',
  },
  {
    quote: 'I\u2019m beginning to understand why Boo Radley\u2019s stayed shut up in the house…',
    speaker: 'Jem Finch',
    analysis:
      'Marks Jem\u2019s loss of innocence after the trial: he now reads Maycomb as something to retreat from, not enter.',
  },
]

export default async function TkamHubPage() {
  await requireIgcseBoard(['edexcel-igcse'])

  return (
    <div className="space-y-10 pb-16">
      {/* Breadcrumb */}
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

      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-primary/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="relative">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge className="border-primary/20 bg-primary/10 text-primary">
              <Sparkles className="mr-1 size-3" />
              Edexcel IGCSE 4ET1
            </Badge>
            <Badge variant="secondary">Modern prose</Badge>
          </div>
          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            To Kill a Mockingbird
          </h1>
          <p className="mt-1 text-body-sm text-muted-foreground">
            Harper Lee · 1960
          </p>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
            A Pulitzer-winning bildungsroman set in Depression-era Alabama, in
            which Scout Finch grows up during her father’s defence of Tom
            Robinson, a Black man falsely accused of assaulting a white woman.
          </p>
        </div>
      </section>

      {/* Fair-use notice */}
      <section className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-4 sm:p-5">
        <div className="flex gap-3">
          <Info className="mt-0.5 size-5 shrink-0 text-amber-600 dark:text-amber-400" />
          <div className="space-y-1">
            <h2 className="text-body-sm font-semibold text-foreground">
              Key quotations only — read the full text
            </h2>
            <p className="text-body-xs text-muted-foreground leading-relaxed">
              To Kill a Mockingbird is in copyright. This guide includes short
              extracts for fair-use study and analysis only. Read the complete
              novel alongside these notes.
            </p>
          </div>
        </div>
      </section>

      {/* Plot */}
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

      {/* Themes preview */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <Sparkles className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">
            Core themes
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {themes.map((theme) => (
            <div
              key={theme.title}
              className="rounded-xl border border-border/60 bg-card p-5"
            >
              <h3 className="text-body-md font-semibold text-foreground">
                {theme.title}
              </h3>
              <p className="mt-2 text-body-sm leading-relaxed text-muted-foreground">
                {theme.blurb}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Sub-pages */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <Feather className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">
            Deep dives
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {subPages.map((p) => {
            const Icon = p.icon
            return (
              <Card
                key={p.href}
                className="group flex flex-col transition-all duration-200 hover:border-border hover:shadow-card-hover"
              >
                <CardHeader className="pb-3">
                  <div className="mb-3 flex size-11 items-center justify-center rounded-xl bg-primary/10">
                    <Icon className="size-5 text-primary" />
                  </div>
                  <CardTitle className="text-heading-md font-heading leading-tight">
                    {p.title}
                  </CardTitle>
                  <CardDescription className="text-body-sm">
                    {p.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    render={<Link href={p.href} />}
                  >
                    Open
                    <ArrowRight className="size-3.5" />
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      {/* Key quotations */}
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
    </div>
  )
}
