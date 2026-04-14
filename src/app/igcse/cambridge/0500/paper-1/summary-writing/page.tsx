import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ChevronLeft,
  FileDigit,
  CheckCircle2,
  XCircle,
  Target,
  ListChecks,
  Lightbulb,
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
  title: 'Summary Writing — IGCSE Language A Paper 1 Q3',
  description:
    'How to write a top-mark summary for IGCSE Language A Paper 1 Question 3. Method, model paragraph and marking criteria explained. Aligns with Cambridge syllabus 0500.',
  alternates: {
    canonical:
      'https://theenglishhub.app/igcse/cambridge/0500/paper-1/summary-writing',
  },
}

const method = [
  {
    step: '1. Read the question first',
    detail:
      'Underline the focus (e.g. "dangers of mountaineering" or "reasons people volunteer"). Only content about the focus counts.',
  },
  {
    step: '2. Point-spot',
    detail:
      'Read Texts A and C with your pen in hand. Underline every discrete piece of relevant information. Aim for 20 points so you have room to cut.',
  },
  {
    step: '3. Group and rewrite',
    detail:
      'On rough paper, write each point in your own words as a short phrase. Group similar points together so you avoid repetition.',
  },
  {
    step: '4. Build the paragraph',
    detail:
      'Write ONE continuous paragraph of about 250 words. Use formal, neutral language. No quotation, no opinion, no introduction.',
  },
  {
    step: '5. Check the count',
    detail:
      'Underline every point you think you have made. If you cannot find 15, add more detail. If you are over 250 words, cut filler.',
  },
]

const dos = [
  'Use your own words wherever possible',
  'Write in formal, neutral prose',
  'Connect points with: also, in addition, furthermore, similarly, equally',
  'Write a single long paragraph',
  'Stay within 240–260 words',
  'Cover points from BOTH texts',
]

const donts = [
  'Do not quote directly from the passages',
  'Do not include your own opinion or evaluation',
  'Do not repeat the same point in different words',
  'Do not give a long introduction or conclusion',
  'Do not add examples the writer did not give',
  'Do not use subheadings, bullet points or lists',
]

export default async function SummaryWritingPage() {
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
        <h1 className="text-display-sm font-heading text-foreground">
          Summary writing (Q3)
        </h1>
        <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
          Question 3 is worth 25 marks — the biggest single mark chunk in
          Paper 1. Fifteen marks are for reading (the points you find) and
          ten are for writing (how concisely and clearly you express them).
        </p>
      </section>

      {/* ── Marking split ─────────────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <div className="mb-4 flex items-center gap-3">
          <Target className="size-5 text-primary" />
          <h2 className="text-heading-md font-heading text-foreground">
            How the 25 marks split
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-border/60 bg-muted/30 p-5">
            <Badge className="mb-2 bg-primary/10 text-primary border-primary/20">
              Reading skills — 15 marks
            </Badge>
            <h3 className="text-body-md font-semibold text-foreground">
              Content points
            </h3>
            <p className="mt-1 text-body-sm text-muted-foreground">
              One mark per relevant idea identified from Texts A and C. Top
              candidates identify around 15 distinct points.
            </p>
          </div>
          <div className="rounded-xl border border-border/60 bg-muted/30 p-5">
            <Badge className="mb-2 bg-primary/10 text-primary border-primary/20">
              Writing skills — 10 marks
            </Badge>
            <h3 className="text-body-md font-semibold text-foreground">
              Style, structure, own words
            </h3>
            <p className="mt-1 text-body-sm text-muted-foreground">
              Level 5 (9–10 marks): concise, fluent, cohesive, consistently in
              your own words. No lifting.
            </p>
          </div>
        </div>
      </section>

      {/* ── Method ────────────────────────────────────────────────── */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <ListChecks className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">
            Five-step method
          </h2>
        </div>
        <div className="space-y-4">
          {method.map((m) => (
            <Card key={m.step}>
              <CardHeader className="pb-2">
                <CardTitle className="text-heading-sm font-heading">
                  {m.step}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-body-sm text-muted-foreground leading-relaxed">
                  {m.detail}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ── Do and don't ──────────────────────────────────────────── */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <FileDigit className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">
            Do and don&apos;t
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-heading-sm font-heading">Do</CardTitle>
              <CardDescription>These habits push you to Level 5.</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-body-sm text-muted-foreground">
                {dos.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-heading-sm font-heading">
                Don&apos;t
              </CardTitle>
              <CardDescription>These habits cap you in Level 2–3.</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-body-sm text-muted-foreground">
                {donts.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <XCircle className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ── Worked example ────────────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <div className="mb-4 flex items-center gap-3">
          <Lightbulb className="size-5 text-primary" />
          <h2 className="text-heading-md font-heading text-foreground">
            Worked opening — dangers of urban cycling
          </h2>
        </div>
        <p className="mb-3 text-body-sm text-muted-foreground">
          Imagine the question asks for the dangers faced by city cyclists.
          Here is an opening that covers six points in about 70 words:
        </p>
        <div className="rounded-xl border border-border/60 bg-muted/30 p-5">
          <p className="text-body-sm text-foreground leading-relaxed">
            City cyclists face busy roads where lorries and buses struggle to
            see them, especially at junctions. Poorly maintained cycle lanes
            leave riders vulnerable to potholes and sudden diversions. Motor
            traffic produces pollution that harms riders&apos; lungs over time.
            Drivers who are distracted or impatient increase the risk of
            collisions, and inadequate lighting after dark makes cyclists harder
            to spot.
          </p>
        </div>
        <p className="mt-3 text-body-xs text-muted-foreground">
          Notice: no quotation, no opinion, every sentence a new point, and
          the phrasing is the student&apos;s own.
        </p>
      </section>
    </div>
  )
}
