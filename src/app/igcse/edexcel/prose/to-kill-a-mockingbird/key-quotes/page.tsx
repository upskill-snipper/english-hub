import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Sparkles, Info, Quote } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { requireIgcseBoard } from '@/app/igcse/_lib/guard'

import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
export const metadata: Metadata = {
  title: 'To Kill a Mockingbird Key Quotes — Edexcel IGCSE Literature',
  description:
    '20 key quotations from To Kill a Mockingbird organised by theme for Edexcel IGCSE Literature revision: racism, courage, innocence, empathy and the mockingbird motif.',
  alternates: {
    canonical:
      'https://theenglishhub.app/igcse/edexcel/prose/to-kill-a-mockingbird/key-quotes',
  },
}

const themeGroups = [
  {
    theme: 'Racism and justice',
    quotes: [
      {
        text: 'When it\u2019s a white man\u2019s word against a black man\u2019s, the white man always wins.',
        speaker: 'Atticus',
        analysis: 'Names the structural racism of the legal system without rhetorical flourish.',
      },
      {
        text: 'The evil assumption that all Negroes lie, all Negroes are immoral.',
        speaker: 'Atticus (closing speech)',
        analysis: 'Atticus directly challenges the jury\u2019s racial generalisations in legal register.',
      },
      {
        text: 'You\u2019ll see white men cheat black men every day of your life.',
        speaker: 'Atticus',
        analysis: 'A bleak acknowledgement that complicates readings of Atticus as naively optimistic.',
      },
      {
        text: 'They shot him seventeen times.',
        speaker: 'Atticus (on Tom\u2019s death)',
        analysis: 'Blunt factual statement conveys disproportionate violence without commentary.',
      },
    ],
  },
  {
    theme: 'Moral courage',
    quotes: [
      {
        text: 'Real courage is when you\u2019re licked before you begin but you begin anyway.',
        speaker: 'Atticus (on Mrs Dubose)',
        analysis: 'The novel\u2019s working definition of courage: principled action despite certain failure.',
      },
      {
        text: 'Simply because we were licked a hundred years before we started.',
        speaker: 'Atticus',
        analysis: 'Places the trial in a long history of racial injustice; courage lies in trying regardless.',
      },
      {
        text: 'She was the bravest person I ever knew.',
        speaker: 'Atticus (on Mrs Dubose)',
        analysis: 'Superlative praise for an unlikely figure separates courage from moral perfection.',
      },
      {
        text: 'In the name of God, do your duty.',
        speaker: 'Atticus (closing speech)',
        analysis: 'Religious imperative appeals above social hierarchy to individual conscience.',
      },
    ],
  },
  {
    theme: 'Childhood and innocence',
    quotes: [
      {
        text: 'Until I feared I would lose it, I never loved to read.',
        speaker: 'Scout',
        analysis: 'Paradox establishes Scout as literate and observant from the opening chapters.',
      },
      {
        text: 'I\u2019m beginning to understand why Boo Radley\u2019s stayed shut up in the house.',
        speaker: 'Jem',
        analysis: 'Marks Jem\u2019s loss of innocence: he now reads Maycomb as something to retreat from.',
      },
      {
        text: 'It was just him I couldn\u2019t stand.',
        speaker: 'Dill (on Mr Gilmer)',
        analysis: 'Dill\u2019s emotional reaction voices the reader\u2019s moral outrage at the trial.',
      },
      {
        text: 'Jem broke the remaining code of our childhood.',
        speaker: 'Scout (narrator)',
        analysis: 'Narrative commentary marks a decisive loss-of-innocence moment.',
      },
    ],
  },
  {
    theme: 'Empathy and perspective',
    quotes: [
      {
        text: 'You never really understand a person until you consider things from his point of view.',
        speaker: 'Atticus',
        analysis: 'The novel\u2019s central moral instruction, introduced early and fulfilled at the close.',
      },
      {
        text: 'Atticus, he was real nice. Most people are, Scout, when you finally see them.',
        speaker: 'Scout',
        analysis: 'The closing exchange completes the empathy arc begun in Chapter 3.',
      },
      {
        text: 'I had never seen our neighbourhood from this angle.',
        speaker: 'Scout (on the Radley porch)',
        analysis: 'Physical perspective shift embodies the novel\u2019s moral argument about empathy.',
      },
      {
        text: 'A mob\u2019s always made up of people.',
        speaker: 'Atticus',
        analysis: 'Rehumanises the lynch mob, insisting on individual conscience within collective action.',
      },
    ],
  },
  {
    theme: 'The mockingbird motif',
    quotes: [
      {
        text: 'It\u2019s a sin to kill a mockingbird.',
        speaker: 'Miss Maudie (via Atticus)',
        analysis: 'The title symbol introduced: destroying harmless innocence is the novel\u2019s cardinal sin.',
      },
      {
        text: 'Mockingbirds don\u2019t do one thing but make music for us to enjoy.',
        speaker: 'Miss Maudie',
        analysis: 'Elaborates the symbol in plain moral language a child can grasp.',
      },
      {
        text: 'He likened Tom\u2019s death to the senseless slaughter of songbirds.',
        speaker: 'Narrator (on Mr Underwood\u2019s editorial)',
        analysis: 'Makes the Tom Robinson\u2013mockingbird connection explicit through the editorial.',
      },
      {
        text: 'It\u2019d be sort of like shootin\u2019 a mockingbird, wouldn\u2019t it?',
        speaker: 'Scout',
        analysis: 'Scout applies the symbol independently to Boo, showing she has internalised the lesson.',
      },
    ],
  },
]

export default async function TkamKeyQuotesPage() {
  await requireIgcseBoard(['edexcel-igcse'])

  return (
    <div className="space-y-10 pb-16">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://theenglishhub.app" },
          { name: "IGCSE", url: "https://theenglishhub.app/igcse" },
          { name: "Edexcel IGCSE Literature", url: "https://theenglishhub.app/igcse/edexcel" },
          { name: "Prose", url: "https://theenglishhub.app/igcse/edexcel/prose" },
          { name: "To Kill a Mockingbird", url: "https://theenglishhub.app/igcse/edexcel/prose/to-kill-a-mockingbird" },
          { name: "Key Quotations", url: "https://theenglishhub.app/igcse/edexcel/prose/to-kill-a-mockingbird/key-quotes" },
        ]}
      />
      <div>
        <Button
          variant="ghost"
          size="sm"
          render={
            <Link href="/igcse/edexcel/prose/to-kill-a-mockingbird" />
          }
        >
          <ArrowLeft className="size-3.5" />
          Back to To Kill a Mockingbird
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
            To Kill a Mockingbird: Key Quotes
          </h1>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
            20 essential quotations organised by theme. Each quote is 15
            words or fewer, with speaker attribution and brief analysis for
            exam revision.
          </p>
        </div>
      </section>

      <section className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-4 sm:p-5">
        <div className="flex gap-3">
          <Info className="mt-0.5 size-5 shrink-0 text-amber-600 dark:text-clay-600" />
          <div className="space-y-1">
            <h2 className="text-body-sm font-semibold text-foreground">
              Key quotations only — read the full text
            </h2>
            <p className="text-body-xs text-muted-foreground leading-relaxed">
              Short extracts are included under fair dealing (CDPA 1988) for
              study and criticism. Read the complete novel alongside these
              notes.
            </p>
          </div>
        </div>
      </section>

      {themeGroups.map((group) => (
        <section key={group.theme}>
          <div className="mb-5 flex items-center gap-3">
            <Quote className="size-5 text-primary" />
            <h2 className="text-heading-lg font-heading text-foreground">
              {group.theme}
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {group.quotes.map((q, i) => (
              <div
                key={i}
                className="rounded-xl border border-border/60 bg-card p-5"
              >
                <blockquote className="border-l-2 border-primary/40 pl-3 text-body-md italic text-foreground">
                  &ldquo;{q.text}&rdquo;
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
      ))}

      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
        Short quotations reproduced under the fair dealing provision of the
        CDPA 1988 for criticism and review. Full text available from your
        school or local library.
      </p>
    </div>
  )
}
