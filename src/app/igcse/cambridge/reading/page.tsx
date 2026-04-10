import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  BookOpen,
  Sparkles,
  Feather,
  Leaf,
  Users,
  MessagesSquare,
  Mountain,
  Eye,
  ScrollText,
  Layers,
  Smile,
  Compass,
  ExternalLink,
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
  title:
    'Cambridge IGCSE Reading Practice Frameworks (0500 / 0990) — The English Hub',
  description:
    'Ten reading practice frameworks for Cambridge IGCSE First Language English Paper 1. Each guide teaches you how to approach a type of passage and links to free public-domain texts on Project Gutenberg.',
  alternates: {
    canonical: 'https://theenglishhub.app/igcse/cambridge/reading',
  },
}

const frameworks = [
  {
    slug: 'classic-novel-openings',
    title: 'Classic Novel Openings',
    blurb:
      'First pages and first paragraphs. Learn to read the cues a writer plants to set tone, voice and expectation.',
    focus: 'Tone, hook and narrative framing',
    icon: BookOpen,
  },
  {
    slug: 'descriptive-nature',
    title: 'Descriptive Nature Passages',
    blurb:
      'Landscapes, weather and the natural world. Practise tracking sensory imagery and mood across a scene.',
    focus: 'Imagery, sound and the senses',
    icon: Leaf,
  },
  {
    slug: 'character-introductions',
    title: 'Character Introductions',
    blurb:
      'How writers present a person for the first time. Appearance, action and inferred personality.',
    focus: 'Characterisation and inference',
    icon: Users,
  },
  {
    slug: 'dialogue-analysis',
    title: 'Dialogue Analysis',
    blurb:
      'What characters say, how they say it and what they leave out. Subtext, register and power.',
    focus: 'Speech, subtext and relationships',
    icon: MessagesSquare,
  },
  {
    slug: 'setting-atmosphere',
    title: 'Setting and Atmosphere',
    blurb:
      'How place generates feeling. Pathetic fallacy, contrast and the controlled release of detail.',
    focus: 'Place, mood and tension',
    icon: Mountain,
  },
  {
    slug: 'narrative-voice',
    title: 'Narrative Voice',
    blurb:
      'First-person, third-person limited and omniscient narration. Trust, distance and bias in the teller.',
    focus: 'Point of view and reliability',
    icon: Eye,
  },
  {
    slug: 'victorian-fiction',
    title: 'Approaching Victorian Fiction',
    blurb:
      'Long sentences, elevated register and dense detail. How to read nineteenth-century prose with confidence.',
    focus: 'Syntax, register and period context',
    icon: ScrollText,
  },
  {
    slug: 'modernist-fiction',
    title: 'Approaching Modernist Fiction',
    blurb:
      'Fragmented time, interior monologue and stream of consciousness. Reading early twentieth-century experiments.',
    focus: 'Interiority and fragmented form',
    icon: Layers,
  },
  {
    slug: 'childrens-classic',
    title: "Children's Classics",
    blurb:
      'Accessible vocabulary, strong voice and clean structure make these ideal practice passages for pace and precision.',
    focus: 'Voice, clarity and pace',
    icon: Smile,
  },
  {
    slug: 'travel-writing',
    title: 'Travel Writing',
    blurb:
      'First-hand accounts of foreign places. Observation, judgement and the cultural eye of the traveller.',
    focus: 'Observation and voice',
    icon: Compass,
  },
]

export default async function ReadingHubPage() {
  await requireIgcseBoard(['cambridge-0500', 'cambridge-0990'])

  return (
    <div className="space-y-10 pb-16">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-primary/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-primary/5 blur-3xl" />

        <div className="relative">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge className="bg-primary/10 text-primary border-primary/20">
              <Sparkles className="mr-1 size-3" />
              Cambridge IGCSE
            </Badge>
            <Badge variant="secondary">Paper 1</Badge>
            <Badge variant="secondary">10 frameworks</Badge>
          </div>
          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            Reading Practice Frameworks
          </h1>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
            Ten structured guides that teach you{' '}
            <strong className="text-foreground">how to approach</strong>{' '}
            different kinds of reading passages for Cambridge IGCSE{' '}
            <strong className="text-foreground">0500</strong> and{' '}
            <strong className="text-foreground">0990</strong>. Each framework
            gives you a set of comprehension questions, a language analysis
            prompt, a summary task and a self-assessment checklist. Every
            practice text links out to{' '}
            <strong className="text-foreground">Project Gutenberg</strong>, so
            you can read the passage for free, legally, in full.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button
              size="lg"
              render={
                <Link href="/igcse/cambridge/reading/classic-novel-openings" />
              }
            >
              <Feather className="size-4" />
              Start with novel openings
              <ArrowRight className="size-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              render={<a href="https://www.gutenberg.org/" target="_blank" rel="noopener noreferrer" />}
            >
              <ExternalLink className="size-4" />
              About Project Gutenberg
            </Button>
          </div>
        </div>
      </section>

      {/* Frameworks grid */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <BookOpen className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">
            Ten practice frameworks
          </h2>
          <Badge variant="secondary" className="ml-auto">
            10 guides
          </Badge>
        </div>
        <p className="mb-6 max-w-3xl text-body-sm text-muted-foreground">
          Pick any framework below. Each one names three suggested texts on
          Project Gutenberg, then walks you through the same structured set of
          questions so you can practise on whichever passage you choose.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {frameworks.map((f) => {
            const Icon = f.icon
            return (
              <Card
                key={f.slug}
                className="group flex flex-col transition-all duration-200 hover:border-border hover:shadow-card-hover"
              >
                <CardHeader className="pb-3">
                  <div className="mb-3 flex size-10 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="size-5 text-primary" />
                  </div>
                  <CardTitle className="text-heading-sm font-heading leading-tight">
                    {f.title}
                  </CardTitle>
                  <CardDescription className="pt-1 text-xs uppercase tracking-wide text-muted-foreground">
                    {f.focus}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col gap-4">
                  <p className="text-body-sm leading-relaxed text-muted-foreground">
                    {f.blurb}
                  </p>
                  <div className="mt-auto">
                    <Button
                      variant="ghost"
                      size="sm"
                      render={
                        <Link href={`/igcse/cambridge/reading/${f.slug}`} />
                      }
                    >
                      Open framework
                      <ArrowRight className="size-3.5" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      {/* How to use */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <div className="mb-4 flex items-center gap-3">
          <Layers className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">
            How to use these frameworks
          </h2>
        </div>
        <ol className="list-decimal space-y-3 pl-5 text-body-sm text-foreground">
          <li>
            Pick a framework that matches the type of passage you want to
            practise.
          </li>
          <li>
            Follow one of the three Project Gutenberg links and read a chunk of
            roughly 600 to 900 words — about the length of a real Paper 1
            extract.
          </li>
          <li>
            Work through the six comprehension questions without looking back
            at the passage more than you have to.
          </li>
          <li>
            Answer the language analysis prompt in a short paragraph, quoting
            two or three phrases.
          </li>
          <li>
            Write a summary using the template, then check yourself against the
            self-assessment list.
          </li>
        </ol>
        <p className="mt-4 rounded-lg bg-muted p-4 text-body-sm text-muted-foreground">
          Every text listed on these pages is in the public domain in the
          United States and hosted by Project Gutenberg. Copyright status may
          vary in your country — always check before redistributing.
        </p>
      </section>
    </div>
  )
}
