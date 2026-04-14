import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Sparkles,
  Info,
  Quote,
  Drama,
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
  title:
    'The Curious Incident of the Dog in the Night-Time — Edexcel IGCSE IGCSE Literature Study Guide',
  description:
    'Simon Stephens\u2019s stage adaptation of Mark Haddon\u2019s novel for Edexcel IGCSE IGCSE Literature: plot, characters, themes and key quotations.',
  alternates: {
    canonical:
      'https://theenglishhub.app/igcse/edexcel/drama/curious-incident',
  },
}

const plotBeats = [
  {
    part: 'Act One — The dog and the book',
    summary:
      'Christopher Boone, a fifteen-year-old in Swindon, finds his neighbour Mrs Shears\u2019s dog Wellington killed with a garden fork. He decides to investigate, and his teacher Siobhan encourages him to write the investigation as a book. The play\u2019s metatheatrical frame is established: we are watching Siobhan\u2019s class dramatise Christopher\u2019s book.',
  },
  {
    part: 'Act One, second half',
    summary:
      'Christopher\u2019s investigation leads him to discover the letters from his mother — letters his father Ed had told him were impossible because his mother was dead. Ed confesses to hiding the letters and to killing Wellington himself. The Act One curtain falls on an enormous breach of trust.',
  },
  {
    part: 'Act Two — The journey to London',
    summary:
      'Christopher sets out alone to find his mother in London, navigating train stations and the Tube with Siobhan\u2019s words as his guide. He finds his mother living with her lover Mr Shears, returns to Swindon, and prepares for his A-level maths. The play ends with the maths question he promised Siobhan he would appear in the appendix to solve, and the tentative question: "Does that mean I can do anything?"',
  },
]

const characters = [
  {
    name: 'Christopher Boone',
    note:
      'Fifteen-year-old narrator. The novel\u2019s source describes him as having "behavioural difficulties"; Stephens and Haddon both avoid the label "Asperger\u2019s" in official materials. Christopher is literal, mathematically gifted, sensory-sensitive and relentlessly honest.',
  },
  {
    name: 'Ed Boone',
    note:
      'Christopher\u2019s father: loving, overwhelmed, capable of real tenderness and of lies that shatter his son\u2019s world. The play refuses to flatten him into a villain even after his confession.',
  },
  {
    name: 'Judy Boone',
    note:
      'Christopher\u2019s mother, who left the family for Mr Shears. Her letters — first hidden, then discovered — are the play\u2019s emotional hinge.',
  },
  {
    name: 'Siobhan',
    note:
      'Christopher\u2019s teacher. She functions as narrator, confidante and the audience\u2019s guide to Christopher\u2019s worldview. Her voice, reading his book aloud, is a structural device as much as a character.',
  },
  {
    name: 'Mrs Shears',
    note:
      'Wellington\u2019s owner and, we learn, Ed\u2019s former lover. Her accusation of Christopher at the start of the play sets the investigation in motion.',
  },
  {
    name: 'Mr Shears',
    note:
      'Judy\u2019s new partner. Christopher\u2019s father\u2019s rival and, in Christopher\u2019s literal logic, the prime suspect for Wellington\u2019s death until the real killer is revealed.',
  },
  {
    name: 'Toby',
    note:
      'Christopher\u2019s pet rat, who travels with him to London and represents his need for something small, manageable and loyal.',
  },
]

const keyQuotations = [
  {
    quote: 'My name is Christopher John Francis Boone. I know all the countries\u2026',
    speaker: 'Christopher',
    analysis:
      'The opening establishes Christopher\u2019s voice — precise, taxonomic, proud. Stephens preserves the novel\u2019s first-person idiom through Siobhan\u2019s reading aloud.',
  },
  {
    quote: 'Prime numbers are what is left when you have taken all the patterns away.',
    speaker: 'Christopher',
    analysis:
      'Christopher\u2019s philosophical metaphor. The play uses projection and staging to visualise prime numbers, turning an internal monologue into theatrical spectacle.',
  },
  {
    quote: 'I do not tell lies.',
    speaker: 'Christopher',
    analysis:
      'Christopher\u2019s central ethical axiom. The play hinges on the collision between his literal truthfulness and his father\u2019s protective lies.',
  },
  {
    quote: 'I think I would make a very good astronaut.',
    speaker: 'Christopher',
    analysis:
      'Part of a broader motif of enclosed, controllable spaces. The astronaut image resurfaces during the London panic attack.',
  },
  {
    quote: 'Father had murdered Wellington. That meant he could murder me.',
    speaker: 'Christopher',
    analysis:
      'Christopher\u2019s inability to separate literal fact from probability produces the play\u2019s most devastating logic: Ed becomes, in Christopher\u2019s mind, a murderer who might kill him next.',
  },
  {
    quote: 'Sometimes you say things and you don\u2019t even realise they\u2019re important.',
    speaker: 'Siobhan',
    analysis:
      'Siobhan models the emotional literacy Christopher is still acquiring. Her interjections teach the audience how to read him.',
  },
  {
    quote: 'The whole universe is a big computer and we are just the programs.',
    speaker: 'Christopher',
    analysis:
      'Christopher\u2019s metaphysics fuses his love of computing with a quietly consoling determinism.',
  },
  {
    quote: 'I find people confusing.',
    speaker: 'Christopher',
    analysis:
      'Short, plain sentences define Christopher\u2019s register. The play\u2019s ensemble staging externalises that confusion in crowd sequences and overlapping voices.',
  },
  {
    quote: 'I killed Wellington, Christopher.',
    speaker: 'Ed Boone',
    analysis:
      'The play\u2019s first great shock. Stephens stages the confession with quiet restraint, letting the literalism of Christopher\u2019s worldview do the dramatic work.',
  },
  {
    quote: 'You have to do things even if they scare you.',
    speaker: 'Christopher',
    analysis:
      'Christopher\u2019s lesson from the London journey. The line is earned by two acts of mounting dread — the single most theatrically demanding sequence in the play.',
  },
  {
    quote: 'I am going to prove that I can do anything.',
    speaker: 'Christopher',
    analysis:
      'A quiet declaration of independence. The final scene returns to this question as a genuine one: his ability to survive the trip to London is not yet a general principle.',
  },
  {
    quote: 'Does that mean I can do anything?',
    speaker: 'Christopher (final line)',
    analysis:
      'The play ends on a question, not an answer. Stephens lets the audience decide whether Christopher\u2019s triumphs add up to autonomy, or whether the question must remain open.',
  },
  {
    quote: 'The dog was dead… it had a large garden fork sticking out of it.',
    speaker: 'Christopher',
    analysis:
      'Christopher\u2019s forensic calm is simultaneously comic and disturbing — Stephens keeps the novel\u2019s tonal tightrope intact.',
  },
  {
    quote: 'I love Christopher more than anything in the whole wide world.',
    speaker: 'Ed Boone',
    analysis:
      'Ed\u2019s declaration after the confession. Stephens insists on his love without using it as an excuse.',
  },
  {
    quote: 'I\u2019m sorry, Christopher. I promise, I will not tell you any more lies. Ever.',
    speaker: 'Ed Boone',
    analysis:
      'The play ends with a fragile, provisional trust. Christopher does not yet accept the apology — the audience sees him weighing it on his own scales.',
  },
]

export default async function CuriousIncidentHubPage() {
  await requireIgcseBoard(['edexcel-igcse'])

  return (
    <div className="space-y-10 pb-16">
      <div>
        <Button
          variant="ghost"
          size="sm"
          render={<Link href="/igcse/edexcel/drama" />}
        >
          <ArrowLeft className="size-3.5" />
          Back to Edexcel drama
        </Button>
      </div>

      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-primary/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="relative">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge className="border-primary/20 bg-primary/10 text-primary">
              <Sparkles className="mr-1 size-3" />
              Edexcel IGCSE IGCSE Literature
            </Badge>
            <Badge variant="secondary">Modern drama</Badge>
          </div>
          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            The Curious Incident of the Dog in the Night-Time
          </h1>
          <p className="mt-1 text-body-sm text-muted-foreground">
            Simon Stephens (from the novel by Mark Haddon) · 2012
          </p>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
            Simon Stephens’s metatheatrical adaptation of Mark Haddon’s
            2003 novel, in which fifteen-year-old Christopher Boone
            investigates the killing of a neighbour’s dog and discovers
            something much harder to process at home.
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
              Both the play and Haddon’s source novel are in copyright. This
              guide uses short extracts for fair-dealing study and criticism.
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
          <Drama className="size-5 text-primary" />
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
              Neurodivergence, family, truth and lies, independence, order.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button
              variant="outline"
              size="sm"
              className="w-full"
              render={
                <Link href="/igcse/edexcel/drama/curious-incident/themes" />
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
