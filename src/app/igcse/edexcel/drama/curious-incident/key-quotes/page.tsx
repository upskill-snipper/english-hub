'use client'

import Link from 'next/link'
import { ArrowLeft, Sparkles, Info, Quote } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import StudyTools from '@/components/study/StudyTools'

const quotes = [
  {
    quote: '\u201cI find people confusing.\u201d',
    speaker: 'Christopher',
    context: 'Early in the play \u2014 Christopher explains his worldview',
    analysis:
      'Christopher\u2019s opening self-description. The line establishes that the play will present a perspective in which social interaction, not logic, is the hard problem.',
  },
  {
    quote: '\u201cI do not tell lies.\u201d',
    speaker: 'Christopher',
    context: 'Explaining his personal code',
    analysis:
      'Christopher\u2019s insistence on literal truth sets up the play\u2019s moral engine. Every hidden thing \u2014 Ed\u2019s lies, the hidden letters \u2014 becomes a betrayal of this principle.',
  },
  {
    quote: '\u201cPrime numbers are what is left when you have taken all the patterns away.\u201d',
    speaker: 'Christopher',
    context: 'Explaining his fascination with mathematics',
    analysis:
      'Mathematics as a refuge from social chaos. Stephens stages these monologues as moments of visual clarity, contrasting them with the noise of human relationships.',
  },
  {
    quote: '\u201cI love Christopher more than anything in the whole wide world.\u201d',
    speaker: 'Ed Boone',
    context: 'Ed speaking to Christopher',
    analysis:
      'Ed\u2019s love is genuine but insufficient to justify his deceptions. The line gains painful irony after Christopher discovers the hidden letters.',
  },
  {
    quote: '\u201cI killed Wellington, Christopher.\u201d',
    speaker: 'Ed Boone',
    context: 'Ed\u2019s confession',
    analysis:
      'The confession collapses Christopher\u2019s trust entirely. Ed\u2019s crime against a dog becomes, for Christopher, proof that his father can do anything \u2014 including harm him.',
  },
  {
    quote: '\u201cI wasn\u2019t a very good mother, Christopher.\u201d',
    speaker: 'Judy Boone',
    context: 'Judy\u2019s letters to Christopher',
    analysis:
      'Judy\u2019s self-assessment is honest but incomplete. The letters reveal exhaustion rather than cruelty, complicating the audience\u2019s judgment.',
  },
  {
    quote: '\u201cIt doesn\u2019t have to have an ending. It\u2019s a very good book.\u201d',
    speaker: 'Siobhan',
    context: 'Responding to Christopher\u2019s book',
    analysis:
      'Siobhan validates Christopher\u2019s storytelling on its own terms. The line is metatheatrical \u2014 it comments on the play we are watching as well as on Christopher\u2019s writing.',
  },
  {
    quote: '\u201cYou have to do things even if they scare you.\u201d',
    speaker: 'Christopher',
    context: 'During the London journey',
    analysis:
      'Christopher\u2019s articulation of bravery. The journey to London is the play\u2019s coming-of-age sequence, and this line is its thesis.',
  },
  {
    quote: '\u201cAll the other children at my school are stupid.\u201d',
    speaker: 'Christopher',
    context: 'Early in the play',
    analysis:
      'Christopher\u2019s bluntness is funny and uncomfortable. Stephens uses it to show how social norms of politeness are invisible to Christopher, not rejected by him.',
  },
  {
    quote: '\u201cI think I\u2019m going to write a book.\u201d',
    speaker: 'Christopher',
    context: 'Early in the play \u2014 establishing the framing device',
    analysis:
      'The metatheatrical frame begins. Christopher\u2019s book becomes the play itself, narrated by Siobhan and performed by his classmates.',
  },
  {
    quote: '\u201cI like dogs. You always know what a dog is thinking.\u201d',
    speaker: 'Christopher',
    context: 'Explaining his investigation',
    analysis:
      'Dogs are readable where humans are not. The dead dog is the perfect mystery for Christopher because animal behaviour follows visible rules.',
  },
  {
    quote: '\u201cYour mother didn\u2019t need to go to hospital, Christopher.\u201d',
    speaker: 'Ed Boone',
    context: 'Ed\u2019s earlier lie about Judy\u2019s death',
    analysis:
      'The foundational lie. Ed rewrites Christopher\u2019s reality to avoid the pain of explaining Judy\u2019s departure.',
  },
  {
    quote: '\u201cI think people believe in heaven because they don\u2019t like the idea of dying.\u201d',
    speaker: 'Christopher',
    context: 'Conversation with the Reverend Peters',
    analysis:
      'Christopher\u2019s literal rationalism meets theological metaphor. The scene is comic but philosophically serious about different ways of making meaning.',
  },
  {
    quote: '\u201cI was brave.\u201d',
    speaker: 'Christopher',
    context: 'After completing the London journey',
    analysis:
      'A quiet, earned statement of self-knowledge. Christopher\u2019s bravery is not conventional heroism but the sustained application of logic under sensory siege.',
  },
  {
    quote: '\u201cDoes that mean I can do anything?\u201d',
    speaker: 'Christopher',
    context: 'The final line of the play',
    analysis:
      'The play\u2019s closing question is left genuinely open. Christopher has proved something to himself, but Stephens refuses to promise that everything will be easy.',
  },
  {
    quote: '\u201cWhat in God\u2019s name have you done to my dog?\u201d',
    speaker: 'Mrs Shears',
    context: 'Opening scene \u2014 discovering Christopher with Wellington',
    analysis:
      'The inciting incident. The accusation is unjust but comprehensible \u2014 Christopher is found holding the dead dog and a garden fork.',
  },
  {
    quote: '\u201cSometimes we get sad about things and we don\u2019t like to tell other people.\u201d',
    speaker: 'Siobhan',
    context: 'Explaining social behaviour to Christopher',
    analysis:
      'Siobhan translates neurotypical social convention into language Christopher can parse. Her patience is the play\u2019s model of good communication.',
  },
  {
    quote: '\u201cI like timetables because they make sure you don\u2019t get lost in time.\u201d',
    speaker: 'Christopher',
    context: 'Explaining his need for routine',
    analysis:
      'Order is not a preference but a survival strategy. Stephens stages Christopher\u2019s routines as anchors against an otherwise overwhelming world.',
  },
]

export default function CuriousIncidentKeyQuotesPage() {
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
            <Badge variant="secondary">Key Quotes</Badge>
          </div>
          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            The Curious Incident: Key Quotes
          </h1>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
            Eighteen essential quotations with speaker, context and analysis
            &mdash; designed for exam revision and essay planning.
          </p>
        </div>
      </section>

      <section className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-4 sm:p-5">
        <div className="flex gap-3">
          <Info className="mt-0.5 size-5 shrink-0 text-amber-600 dark:text-amber-400" />
          <div className="space-y-1">
            <h2 className="text-body-sm font-semibold text-foreground">
              Fair dealing notice
            </h2>
            <p className="text-body-xs text-muted-foreground leading-relaxed">
              All quotations are short extracts included under the fair dealing
              provision of the Copyright, Designs and Patents Act 1988 for the
              purpose of criticism, review and study. This page is not a
              substitute for reading the full play.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="mb-5 flex items-center gap-3">
          <Quote className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">
            18 key quotations
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {quotes.map((q, i) => (
            <div
              key={i}
              className="rounded-xl border border-border/60 bg-card p-5"
            >
              <blockquote className="border-l-2 border-primary/40 pl-3 text-body-md italic text-foreground">
                {q.quote}
              </blockquote>
              <p className="mt-2 text-body-xs font-medium text-primary">
                &mdash; {q.speaker}
              </p>
              <p className="mt-1 text-body-xs text-muted-foreground">
                {q.context}
              </p>
              <p className="mt-2 text-body-sm leading-relaxed text-muted-foreground">
                {q.analysis}
              </p>
            </div>
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
