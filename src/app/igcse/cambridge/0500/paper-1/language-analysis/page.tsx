import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ChevronLeft,
  Lightbulb,
  Target,
  BookOpen,
  Sparkles,
  CheckCircle2,
  XCircle,
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { requireIgcseBoard } from '@/app/igcse/_lib/guard'

export const metadata: Metadata = {
  openGraph: {
    title: 'Language Analysis - IGCSE Language A Paper 1 Q3',
    description:
      'How to analyse language in IGCSE Language A Paper 1 Question 3, the 10-mark language task: a five-step paragraph framework and a worked paragraph.',
    images: [
      {
        url: '/api/og?title=Language+Analysis+-+IGCSE+Language+A+Paper+1+Q3',
        width: 1200,
        height: 630,
        alt: 'Language Analysis - IGCSE Language A Paper 1 Q3',
      },
    ],
  },
  title: 'Language Analysis - IGCSE Language A Paper 1 Q3',
  description:
    'How to analyse language in IGCSE Language A Paper 1 Question 3, the 10-mark language task: a five-step framework, analytical vocabulary and a worked paragraph.',
  alternates: {
    canonical: 'https://theenglishhub.app/igcse/cambridge/0500/paper-1/language-analysis',
  },
}

const framework = [
  {
    step: 'Point',
    detail: "State which aspect of the writer's language you are examining.",
    example: 'The writer uses violent, combative verbs to describe the storm.',
  },
  {
    step: 'Evidence',
    detail: 'Quote a single word or short phrase - no more than a few words.',
    example: '"lashed", "pounded" and "tore"',
  },
  {
    step: 'Explanation (literal)',
    detail: 'Explain the basic meaning of the word or phrase in this context.',
    example:
      '"Lashed" suggests being struck repeatedly with a whip - an aggressive physical attack.',
  },
  {
    step: 'Analysis (connotations)',
    detail: 'Explore the wider associations and layers of meaning carried by the word.',
    example:
      'The word carries connotations of punishment and cruelty, as though the sea deliberately means to harm the ship.',
  },
  {
    step: 'Effect on the reader',
    detail:
      "State what feeling, image or idea the word creates for the reader and how it links to the writer's purpose.",
    example:
      'Together these verbs create a sense of helplessness, positioning the crew as victims of a hostile, almost sentient storm.',
  },
]

const usefulVocab = [
  {
    category: 'Verbs for the writer',
    words: [
      'suggests',
      'implies',
      'conveys',
      'evokes',
      'emphasises',
      'highlights',
      'portrays',
      'juxtaposes',
    ],
  },
  {
    category: 'Nouns for technique',
    words: [
      'connotation',
      'imagery',
      'metaphor',
      'simile',
      'personification',
      'diction',
      'tone',
      'atmosphere',
    ],
  },
  {
    category: 'Effect phrases',
    words: [
      'creates a sense of',
      'paints a picture of',
      'builds tension by',
      'invites the reader to feel',
      'draws the reader into',
      'establishes a mood of',
    ],
  },
]

const mistakes = [
  'Feature-spotting - naming a device without analysing its effect.',
  'Copying long quotations instead of single well-chosen words.',
  'Generic labels like "it makes it more interesting" or "it adds description".',
  'Confusing similes and metaphors, or calling any adjective "imagery".',
  'Ignoring connotations and just paraphrasing the surface meaning.',
  'Running out of time because every paragraph is too long, so later choices get one line.',
]

export default async function LanguageAnalysisPage() {
  await requireIgcseBoard(['cambridge-0500'])

  return (
    <div className="space-y-10 pb-16">
      {/* ── Back link ─────────────────────────────────────────────── */}
      <div>
        <Button
          variant="ghost"
          size="sm"
          render={<Link href="/igcse/cambridge/0500/paper-1" />}
          className="gap-1"
        >
          <ChevronLeft className="size-4" />
          Paper 1 hub
        </Button>
      </div>

      {/* ── Header ─────────────────────────────────────────────────── */}
      <section>
        <Badge className="mb-3 bg-primary/10 text-primary border-primary/20">
          IGCSE Language A
        </Badge>
        {/* 31 October 2026: this taught the language task as Question 2, 15 marks,
            about 25 minutes and eight choices, with levels out of 15: the 2024-2026
            paper. From 2027 it is the second part of Question 3 on Text C, 10 marks in
            five levels, about 200 to 250 words (src/data/mark-scheme-guides/
            cambridge-0500-paper1.ts). */}
        <h1 className="text-display-sm font-heading text-foreground">Language analysis (Q3)</h1>
        <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
          The language task in Question 3 asks how the writer of Text C uses language to convey
          meaning and create effect, in an extract the question names. Ten marks. Around 13 minutes
          and about 200 to 250 words. Choose a few striking words or phrases (three in the specimen
          paper), including images, and analyse them in layered detail.
        </p>
        <p className="mt-3 max-w-2xl text-body-sm text-muted-foreground">
          This is the paper for exams from 2027. On the November 2026 paper the language task is
          part of Question 2: 15 marks, about 200 to 300 words, on two paragraphs of the text.
        </p>
      </section>

      {/* ── Mark scheme ───────────────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <div className="mb-4 flex items-center gap-3">
          <Target className="size-5 text-primary" />
          <h2 className="text-heading-md font-heading text-foreground">What the examiners want</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-border/60 bg-muted/30 p-4">
            <Badge className="mb-2 bg-primary/10 text-primary border-primary/20">
              Level 5 (9-10)
            </Badge>
            <p className="text-body-sm text-muted-foreground">
              The sharpest choices, each opened up to show what it suggests and why the writer used
              it, with images explained exactly and thoughtfully.
            </p>
          </div>
          <div className="rounded-xl border border-border/60 bg-muted/30 p-4">
            <Badge variant="secondary" className="mb-2">
              Level 2 (3-4)
            </Badge>
            <p className="text-body-sm text-muted-foreground">
              Less telling choices; the comments mostly repeat the text or stay vague, even if
              techniques are named correctly.
            </p>
          </div>
        </div>
      </section>

      {/* ── Framework ─────────────────────────────────────────────── */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <Lightbulb className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">
            A five-step framework for every paragraph
          </h2>
        </div>
        <div className="space-y-4">
          {framework.map((f, i) => (
            <Card key={f.step}>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <span className="flex size-7 items-center justify-center rounded-full bg-primary/10 text-body-xs font-semibold text-primary">
                    {i + 1}
                  </span>
                  <CardTitle className="text-heading-sm font-heading">{f.step}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-body-sm text-muted-foreground leading-relaxed">{f.detail}</p>
                <div className="rounded-lg border border-border/60 bg-muted/30 p-3">
                  <p className="text-body-xs text-foreground italic">{f.example}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ── Analytical vocabulary ─────────────────────────────────── */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <BookOpen className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">
            Useful analytical vocabulary
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {usefulVocab.map((v) => (
            <Card key={v.category}>
              <CardHeader className="pb-2">
                <CardTitle className="text-body-md font-heading">{v.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1 text-body-sm text-muted-foreground">
                  {v.words.map((w) => (
                    <li key={w} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-primary" />
                      <span>{w}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ── Worked sample ─────────────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <div className="mb-4 flex items-center gap-3">
          <Sparkles className="size-5 text-primary" />
          <h2 className="text-heading-md font-heading text-foreground">Worked paragraph</h2>
        </div>
        <p className="mb-3 text-body-sm text-muted-foreground">
          Writer describes a cityscape at dusk: &quot;Skyscrapers loomed like sleeping giants, their
          mirrored faces bleeding orange fire.&quot;
        </p>
        <div className="rounded-xl border border-border/60 bg-muted/30 p-5">
          <p className="text-body-sm text-foreground leading-relaxed">
            The writer personifies the skyscrapers as &quot;sleeping giants&quot;, a simile that
            invests the buildings with both threat and fragility - giants are dangerous, but their
            stillness makes the city feel uncertain and expectant. The verb &quot;loomed&quot; adds
            to this unease, suggesting the buildings tower over the viewer menacingly. The metaphor
            of their windows &quot;bleeding orange fire&quot; evokes violence and destruction,
            transforming the mundane reflection of sunset into something almost apocalyptic.
            Together these choices create a cityscape that feels simultaneously majestic and
            hostile, making the reader sense that the city itself is alive and watching.
          </p>
        </div>
      </section>

      {/* ── Mistakes ──────────────────────────────────────────────── */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <XCircle className="size-5 text-muted-foreground" />
          <h2 className="text-heading-lg font-heading text-foreground">Common mistakes</h2>
        </div>
        <Card>
          <CardContent className="pt-6">
            <ul className="space-y-2 text-body-sm text-muted-foreground">
              {mistakes.map((m) => (
                <li key={m} className="flex items-start gap-2">
                  <XCircle className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
