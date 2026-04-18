'use client'

import Link from 'next/link'
import { ArrowLeft, Users, Sparkles, Info } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import StudyTools from '@/components/study/StudyTools'

const characters = [
  {
    name: 'Christopher John Francis Boone',
    role: 'Narrator and protagonist',
    analysis:
      'Christopher is fifteen, brilliant at mathematics, and experiences the world with heightened sensory intensity. He cannot tolerate being touched, reads faces with difficulty, and insists on literal truth. Stephens and Haddon refuse to name a diagnosis, presenting Christopher\u2019s perspective as coherent and complete rather than deficient. His detective investigation — modelled on Sherlock Holmes, whom he admires — drives the plot, but his real journey is towards independence. The London trip is the play\u2019s coming-of-age sequence: Christopher navigates crowds, noise and the Underground using logic, Siobhan\u2019s internalised voice, and sheer will. His final question — "Does that mean I can do anything?" — is left genuinely open.',
    quote:
      '"I find people confusing."',
  },
  {
    name: 'Ed Boone',
    role: 'Christopher\u2019s father',
    analysis:
      'Ed is a single parent doing his best under impossible pressure. He cooks Christopher\u2019s meals in the right order, manages his routines, and shows fierce physical protectiveness. But he is also the man who killed Wellington, hid Judy\u2019s letters, and told Christopher his mother was dead. Stephens presents Ed\u2019s lies as coming from love — he wanted to shield Christopher from Judy\u2019s departure — but the play does not excuse the damage. Ed\u2019s confession scene is the play\u2019s most painful moment: a father losing his child\u2019s trust in real time.',
    quote:
      '"I love Christopher more than anything in the whole wide world."',
  },
  {
    name: 'Judy Boone',
    role: 'Christopher\u2019s mother',
    analysis:
      'Judy left the family because she could not cope with the demands of raising Christopher. Her hidden letters — discovered midway through the play — reveal a woman overwhelmed by her own inadequacy rather than lacking in love. She is impulsive, emotional and self-critical. When Christopher arrives at her London flat, she takes him in, but the play makes clear that she too will struggle. Stephens refuses to make her either a villain or a saint, presenting her departure as the result of exhaustion, not indifference.',
    quote:
      '"I wasn\u2019t a very good mother, Christopher."',
  },
  {
    name: 'Siobhan',
    role: 'Christopher\u2019s teaching assistant and narrator',
    analysis:
      'Siobhan reads Christopher\u2019s book aloud to the audience, functioning as both a character within the story and the play\u2019s narrator. She is patient, calm and consistently respectful of Christopher\u2019s boundaries. Her voice in Christopher\u2019s head during the London journey represents the internalised guidance of a trusted adult. The metatheatrical frame — Siobhan is staging Christopher\u2019s book as a school play — makes her the bridge between Christopher\u2019s inner world and the audience\u2019s understanding.',
    quote:
      '"It doesn\u2019t have to have an ending. It\u2019s a very good book."',
  },
  {
    name: 'Mrs Shears',
    role: 'Neighbour and Wellington\u2019s owner',
    analysis:
      'Mrs Shears\u2019s dead poodle triggers Christopher\u2019s investigation. She had a relationship with Ed after Judy left, which ended badly — Ed killed Wellington in a rage against her. Mrs Shears functions as the connecting point between the mystery plot and the family drama. Her anger at Christopher\u2019s questions foreshadows the darker revelations to come.',
    quote:
      '"What in God\u2019s name have you done to my dog?"',
  },
  {
    name: 'Mrs Alexander',
    role: 'Elderly neighbour',
    analysis:
      'Mrs Alexander is the kindly neighbour who inadvertently gives Christopher the information about Ed and Mrs Shears\u2019s affair, and about Judy\u2019s affair with Mr Shears. She treats Christopher with genuine patience and warmth, offering him biscuits and conversation. She represents the ordinary decency of the neighbourhood and the way adult secrets leak through social interaction.',
    quote:
      '"Maybe you should ask your father about this."',
  },
  {
    name: 'Roger Shears (Mr Shears)',
    role: 'Judy\u2019s partner in London',
    analysis:
      'Roger Shears had an affair with Judy while still married to Mrs Shears, and Judy eventually left Ed to live with him in London. He is impatient with Christopher and does not understand his needs. His flat becomes the destination of Christopher\u2019s journey but not a safe haven. Roger\u2019s frustration with Christopher\u2019s presence creates tension that ultimately pushes Judy to leave him and return to Swindon.',
    quote:
      '"He can stay for a few days."',
  },
  {
    name: 'Reverend Peters',
    role: 'Local vicar',
    analysis:
      'The Reverend Peters appears briefly when Christopher asks him about heaven. Christopher\u2019s literal response to the vicar\u2019s metaphorical language highlights the play\u2019s central tension between different ways of processing the world. The scene is comic but also philosophically serious.',
    quote:
      '"Well, when I say heaven, I don\u2019t necessarily mean somewhere above."',
  },
]

export default function CuriousIncidentCharactersPage() {
  return (
    <div className="space-y-10 pb-16">
      <div>
        <Button
          variant="ghost"
          size="sm"
          render={<Link href="/igcse/edexcel/drama/curious-incident" />}
        >
          <ArrowLeft className="size-3.5" />
          Back to The Curious Incident
        </Button>
      </div>

      <StudyTools
        textName="The Curious Incident of the Dog in the Night-Time"
        textType="play"
        examBoard="IGCSE Edexcel"
      />

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
            The Curious Incident: Characters
          </h1>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
            Character profiles for Stephens and Haddon&rsquo;s play &mdash;
            Christopher, Ed, Judy, Siobhan and the Swindon neighbours.
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
        The Curious Incident of the Dog in the Night-Time &copy; Mark Haddon
        (novel) / Simon Stephens (play). Short quotations reproduced under the
        fair dealing provision of the CDPA 1988 for criticism and review.
      </p>
    </div>
  )
}
