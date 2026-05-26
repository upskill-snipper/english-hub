'use client'

import Link from 'next/link'
import {
  ArrowLeft,
  BookOpen,
  Eye,
  MessageSquare,
  Telescope,
  PenLine,
  Quote,
  ScrollText,
} from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

import { BreadcrumbJsonLd } from '@/components/seo/json-ld'

/* ── Extract data ───────────────────────────────────────────────────────── */

// VERIFIED: Animal Farm Ch.10 closing - Penguin Classics 2000 edn p.95 and Project Gutenberg Australia (https://gutenberg.net.au/ebooks01/0100011h.html). "Twelve" capitalised; comma after "now"; semicolon before "but already".
const EXTRACT_LINES: string[] = [
  'Twelve voices were shouting in anger, and they were all alike.',
  'No question, now, what had happened to the faces of the pigs.',
  'The creatures outside looked from pig to man, and from man to pig, and from pig to man again;',
  'but already it was impossible to say which was which.',
]

/* ── Walkthrough cards ──────────────────────────────────────────────────── */

type WalkthroughCard = {
  stage: 'Notice' | 'Say' | 'Zoom out'
  title: string
  icon: typeof Eye
  iconColour: string
  body: string[]
  evidence?: string
}

const WALKTHROUGH: WalkthroughCard[] = [
  {
    stage: 'Notice',
    title: 'The number "twelve" and its biblical echo',
    icon: Eye,
    iconColour: 'text-amber-400',
    body: [
      'Orwell does not write "many voices" or "a chorus of voices" - he specifies twelve. Six pigs and six humans round the table.',
      'Twelve is the number of the apostles. The dinner party is a parodic Last Supper, but here the disciples have become indistinguishable from those they were meant to oppose.',
      'The choice of "shouting in anger" instead of celebrating fellowship inverts the communion image: this is not a meal of unity but a quarrel over a card game.',
    ],
    evidence: '"Twelve voices were shouting in anger, and they were all alike."',
  },
  {
    stage: 'Notice',
    title: 'Cyclical structure - the farm renamed Manor Farm',
    icon: ScrollText,
    iconColour: 'text-rose-400',
    body: [
      'Earlier in this same chapter Napoleon abolishes the name "Animal Farm" and restores the original "Manor Farm". The closing image completes that circle visually as well as nominally.',
      'The novella opens with Mr Jones drunk and neglectful inside the farmhouse; it closes with the pigs drunk and indistinguishable inside the same farmhouse. Orwell ends exactly where he began.',
      'The cyclical form is itself the argument: a revolution that simply replaces one elite with another has not progressed at all - it has rotated.',
    ],
  },
  {
    stage: 'Say',
    title: 'Pig and man as one - the equation of oppressors',
    icon: MessageSquare,
    iconColour: 'text-blue-400',
    body: [
      'The triple repetition "from pig to man, and from man to pig, and from pig to man again" enacts the dizzying back-and-forth of the animals\' gaze. The grammar mimics the impossibility of distinguishing them.',
      'The blunt monosyllabic verdict - "it was impossible to say which was which" - refuses elaboration. There is no commentary, no lament, no rhetorical flourish: only the bare fact that the equation has been made.',
      'Orwell denies the reader any comforting moral framing. The animals outside the window are us - silent, watching, too late.',
    ],
    evidence:
      '"The creatures outside looked from pig to man, and from man to pig, and from pig to man again; but already it was impossible to say which was which."',
  },
  {
    stage: 'Say',
    title: 'The gradual perversion of Animalism',
    icon: PenLine,
    iconColour: 'text-emerald-400',
    body: [
      'Old Major\'s founding doctrine was that "whatever goes upon two legs is an enemy". By the closing scene the pigs walk on two legs, wear human clothes, carry whips and host the neighbouring farmers.',
      'Each commandment has been quietly amended - "no animal shall sleep in a bed" gained "with sheets"; "no animal shall kill any other animal" gained "without cause"; "all animals are equal" gained "but some animals are more equal than others".',
      'The closing tableau is the logical endpoint of this slow erosion: not a sudden coup but the steady accretion of small betrayals, each one defensible in the moment, ruinous in sum.',
    ],
  },
  {
    stage: 'Zoom out',
    title: "Orwell's bleak verdict on revolution betrayed",
    icon: Telescope,
    iconColour: 'text-violet-400',
    body: [
      'Orwell wrote Animal Farm in 1943-44, between the Tehran Conference and the end of the Second World War. The closing dinner deliberately echoes the meetings of Stalin, Churchill and Roosevelt - the dictator now welcomed at the same table as the capitalists he had pledged to overthrow.',
      // VERIFIED: Orwell's 1947 preface to the Ukrainian edition is reproduced at the Orwell Foundation (https://www.orwellfoundation.com/the-orwell-foundation/orwell/essays-and-other-works/preface-to-the-ukrainian-edition-of-animal-farm/). The phrasing below paraphrases his stated theme rather than quoting verbatim.
      'The novella enacts the argument Orwell set out in his 1947 preface to the Ukrainian edition: that the Soviet experiment had degenerated because its leaders were never made answerable to the people they ruled, and that a socialism worth defending would have to be built on democratic accountability.',
      'The final image is therefore not a despairing claim that all revolutions must fail - it is a precise, narrow indictment of one revolution in particular, and a warning about the conditions under which any revolution can be hijacked.',
    ],
  },
  {
    stage: 'Zoom out',
    title: 'Absolute power and the universal moral',
    icon: BookOpen,
    iconColour: 'text-clay-600',
    body: [
      'Behind the specific allegory lies the broader Actonian thesis: "power tends to corrupt, and absolute power corrupts absolutely". The pigs were not uniquely wicked - they were uniquely unaccountable.',
      "Orwell is careful to give Snowball no halo and Napoleon no charisma. The point is not that Napoleon's personal cruelty caused the betrayal but that the absence of dissent, the silencing of debate and the monopoly of force made any leader's corruption inevitable.",
      'The closing image reaches beyond Stalinism to any movement - left or right - that begins with utopian language and ends by adopting the methods of those it sought to displace.',
    ],
  },
]

/* ── Page ───────────────────────────────────────────────────────────────── */

export default function ExtractWalkthroughPage() {
  return (
    <div className="space-y-10 pb-16">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'Revision', url: 'https://theenglishhub.app/revision' },
          { name: 'Set Texts', url: 'https://theenglishhub.app/revision/texts' },
          { name: 'Animal Farm', url: 'https://theenglishhub.app/revision/texts/animal-farm' },
          {
            name: 'Extract Walkthrough',
            url: 'https://theenglishhub.app/revision/texts/animal-farm/extract-walkthrough',
          },
        ]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-violet-500/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-violet-500/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-blue-500/5 blur-3xl" />
        <div className="relative">
          <Button
            variant="ghost"
            size="sm"
            className="mb-4 -ml-2 text-muted-foreground"
            render={<Link href="/revision/texts/animal-farm" />}
          >
            <ArrowLeft className="size-3.5" />
            Back to Animal Farm
          </Button>

          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge variant="secondary">
              <Quote className="mr-1 size-3 text-violet-400" />
              Extract Walkthrough
            </Badge>
            <Badge variant="outline" className="text-muted-foreground">
              AQA / Edexcel / OCR
            </Badge>
          </div>

          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            The Closing Paragraph: &ldquo;impossible to say which was which&rdquo;
          </h1>
          <p className="mt-2 text-body-lg text-muted-foreground">
            Animal Farm by George Orwell - final paragraph of Chapter 10
          </p>
          <p className="mt-4 max-w-2xl text-body-md text-muted-foreground">
            A guided walkthrough using the <strong>Notice / Say / Zoom out</strong> framework. Use
            this to model how examiners want you to move from observation, to analysis, to wider
            argument - without losing grip on the words on the page.
          </p>
        </div>
      </section>

      {/* The extract */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <Quote className="size-5 text-violet-400" />
          <h2 className="text-heading-lg font-heading text-foreground">The Extract</h2>
        </div>
        <Card>
          <CardContent className="space-y-3 pt-6">
            <p className="text-caption uppercase tracking-wide text-muted-foreground">
              Closing paragraph, Chapter 10
            </p>
            <blockquote className="space-y-2 border-l-4 border-violet-400/60 pl-4 text-body-md italic text-foreground">
              {EXTRACT_LINES.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </blockquote>
            <p className="pt-2 text-caption text-muted-foreground">
              George Orwell, <em>Animal Farm</em> (1945), final paragraph.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Walkthrough cards grouped by stage */}
      {(['Notice', 'Say', 'Zoom out'] as const).map((stage) => {
        const cards = WALKTHROUGH.filter((c) => c.stage === stage)
        const stageColour =
          stage === 'Notice'
            ? 'text-amber-400'
            : stage === 'Say'
              ? 'text-blue-400'
              : 'text-violet-400'
        const stageHelper =
          stage === 'Notice'
            ? 'Surface details a careful reader would mark in the margin.'
            : stage === 'Say'
              ? 'Turn the noticed details into argued analysis with evidence.'
              : 'Step back to context, allegory and the broader thesis.'
        return (
          <section key={stage}>
            <div className="mb-5">
              <div className="mb-1 flex items-center gap-3">
                {stage === 'Notice' && <Eye className={`size-5 ${stageColour}`} />}
                {stage === 'Say' && <MessageSquare className={`size-5 ${stageColour}`} />}
                {stage === 'Zoom out' && <Telescope className={`size-5 ${stageColour}`} />}
                <h2 className="text-heading-lg font-heading text-foreground">{stage}</h2>
              </div>
              <p className="text-body-sm text-muted-foreground">{stageHelper}</p>
            </div>

            <div className="grid gap-4 lg:grid-cols-2">
              {cards.map((card) => {
                const Icon = card.icon
                return (
                  <Card key={card.title}>
                    <CardHeader>
                      <CardTitle className="flex items-start gap-2 text-heading-md font-heading">
                        <Icon className={`mt-0.5 size-4 shrink-0 ${card.iconColour}`} />
                        <span>{card.title}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3 text-body-sm text-muted-foreground">
                      {card.body.map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                      {card.evidence && (
                        <div className="rounded-lg border border-border/60 bg-muted/30 p-3">
                          <p className="text-caption uppercase tracking-wide text-primary">
                            Evidence
                          </p>
                          <p className="mt-1 italic text-foreground">{card.evidence}</p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </section>
        )
      })}

      {/* Model paragraph */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <PenLine className="size-5 text-emerald-400" />
          <h2 className="text-heading-lg font-heading text-foreground">
            Model Paragraph (~250 words)
          </h2>
        </div>
        <Card>
          <CardHeader>
            <CardTitle className="text-heading-md font-heading">
              How the ending fulfils Orwell&rsquo;s allegory
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-body-md text-foreground">
            <p>
              The closing paragraph of <em>Animal Farm</em> is the moment Orwell&rsquo;s allegory
              snaps shut. The specification of &ldquo;twelve voices&rdquo; - six pigs and six
              farmers - converts the dinner into a parodic Last Supper, the apostles having become
              the persecutors; the &ldquo;shouting in anger&rdquo; over a card game replaces
              communion with quarrel. Structurally, the novel ends where it began: Manor Farm
              restored in name and in conduct, with a drunken master inside the farmhouse and the
              animals shut out. That cyclical form is the argument. By 1943, when Orwell began
              writing, Stalin had purged the Old Bolsheviks, signed and broken his pact with Hitler
              and arrived at Tehran as a peer of Churchill and Roosevelt - the precise tableau
              Orwell stages here. The novella is therefore an indictment of Stalinism as the
              betrayal of 1917, rather than of the October Revolution itself. Yet the wider thesis
              is broader: power exercised without democratic constraint will corrupt any movement,
              regardless of the ideology it began with. The pigs were never uniquely wicked, only
              uniquely unaccountable; the silencing of debate, the monopoly of force, and the quiet
              rewriting of the Seven Commandments made the final equation inevitable. The
              triple-clause sweep - &ldquo;from pig to man, and from man to pig, and from pig to man
              again&rdquo; - enacts that exhaustion in the reader. Orwell denies us comfort: there
              is no rebellion brewing outside the window, only animals who can no longer tell the
              difference. That refusal is the moral.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Rights / fair-dealing notice */}
      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
        <strong>Rights notice:</strong> <em>Animal Farm</em> entered the UK public domain in 2021
        (70 years after Orwell&rsquo;s death in 1950) but remains in copyright in the United States
        until 2041. As The English Hub serves international students, the extract above is
        reproduced as a short fair-dealing quotation under the Copyright, Designs and Patents Act
        1988 (s.30) for the purpose of criticism, review and educational study. <em>Animal Farm</em>{' '}
        by George Orwell is published by Penguin Books; the Orwell estate is administered by AM
        Heath. Students outside the UK should consult a school-licensed edition.
      </p>
    </div>
  )
}
