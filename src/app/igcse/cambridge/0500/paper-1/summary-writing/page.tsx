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
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { requireIgcseBoard } from '@/app/igcse/_lib/guard'

export const metadata: Metadata = {
  openGraph: {
    title: 'Summary Writing - IGCSE Language A Paper 1 Q2',
    description:
      'Question 2(a) of IGCSE Language A Paper 1 is a 15-mark summary of Text B. How the reading and writing marks split, a five-step method and a worked opening.',
    images: [
      {
        url: '/api/og?title=Summary+Writing+-+IGCSE+Language+A+Paper+1+Q2',
        width: 1200,
        height: 630,
        alt: 'Summary Writing - IGCSE Language A Paper 1 Q2',
      },
    ],
  },
  title: 'Summary Writing - IGCSE Language A Paper 1 Q2',
  description:
    'Question 2(a) of IGCSE Language A Paper 1 is a 15-mark summary of Text B. How the reading and writing marks split, a five-step method and a worked opening.',
  alternates: {
    canonical: 'https://theenglishhub.app/igcse/cambridge/0500/paper-1/summary-writing',
  },
}

// 31 October 2026: rewritten to src/data/mark-scheme-guides/cambridge-0500-paper1.ts.
// This taught the summary as Question 3, 25 marks (15 + 10), about 250 words from
// Texts A and C, marked one mark per point. From 2027 it is Question 2(a): Text B
// only, no more than 120 words of continuous writing, reading 10 and writing 5,
// each marked in levels, beside a 5-mark 2(b) on the writer's attitude. The
// method and lists keep their advice, resized to that task. Second reader: "Level 5"
// and "Level 2-3" below fit only the reading grid (writing has three levels), and the
// worked opening is 59 words, not "about 70".
const method = [
  {
    step: '1. Read the question first',
    detail:
      'Underline the focus (e.g. "dangers of mountaineering" or "reasons people volunteer"). Only content about the focus counts.',
  },
  {
    step: '2. Point-spot',
    detail:
      'Read Text B with your pen in hand. Underline every point that fits the focus, including ones the text only implies, then cross out repeats and examples.',
  },
  {
    step: '3. Group and rewrite',
    detail:
      'On rough paper, write each point in your own words as a short phrase. Group related points together so you can combine them and avoid repetition.',
  },
  {
    step: '4. Build the summary',
    detail:
      'Write continuous prose, in full and linked sentences, of no more than 120 words. Use formal, neutral language. No quotation, no opinion, no examples, no introduction.',
  },
  {
    step: '5. Check the count',
    detail:
      'Count your words: no more than 120. Check you have the points that matter most, with related ones combined and repeats cut.',
  },
]

const dos = [
  'Use your own words wherever possible',
  'Write in formal, neutral prose',
  'Connect points with: also, in addition, furthermore, similarly, equally',
  'Write one continuous paragraph',
  'Stay within 120 words',
  'Include points the text only implies, if they fit the focus',
]

const donts = [
  'Do not quote directly from Text B',
  'Do not include your own opinion or evaluation',
  'Do not repeat the same point in different words',
  'Do not give a long introduction or conclusion',
  'Do not include examples, even ones the writer gives',
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
        <h1 className="text-display-sm font-heading text-foreground">Summary writing (Q2)</h1>
        <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
          Question 2 is worth 20 marks. Part (a), the summary of Text B, carries 15: ten for reading
          (selecting the points that fit the focus) and five for writing (how concisely and clearly
          you express them in your own words). Part (b), worth 5, asks about the writer&apos;s
          attitude.
        </p>
        <p className="mt-3 max-w-2xl text-body-sm text-muted-foreground">
          This is the paper for exams from 2027. On the November 2026 paper the summary is part of
          Question 1, with the same 120-word limit and the same 15 marks.
        </p>
      </section>

      {/* ── Marking split ─────────────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <div className="mb-4 flex items-center gap-3">
          <Target className="size-5 text-primary" />
          <h2 className="text-heading-md font-heading text-foreground">
            How the 15 summary marks split
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-border/60 bg-muted/30 p-5">
            <Badge className="mb-2 bg-primary/10 text-primary border-primary/20">
              Reading skills - 10 marks
            </Badge>
            <h3 className="text-body-md font-semibold text-foreground">Content points</h3>
            <p className="mt-1 text-body-sm text-muted-foreground">
              Marked in five levels for the points from Text B that fit the focus. The top level
              gathers the points that matter most and never strays from the focus.
            </p>
          </div>
          <div className="rounded-xl border border-border/60 bg-muted/30 p-5">
            <Badge className="mb-2 bg-primary/10 text-primary border-primary/20">
              Writing skills - 5 marks
            </Badge>
            <h3 className="text-body-md font-semibold text-foreground">
              Style, structure, own words
            </h3>
            <p className="mt-1 text-body-sm text-muted-foreground">
              Level 3 (4-5 marks): smooth, well ordered, saying a lot in few words, in a good range
              of your own words. No lifting.
            </p>
          </div>
        </div>
      </section>

      {/* ── Method ────────────────────────────────────────────────── */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <ListChecks className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">Five-step method</h2>
        </div>
        <div className="space-y-4">
          {method.map((m) => (
            <Card key={m.step}>
              <CardHeader className="pb-2">
                <CardTitle className="text-heading-sm font-heading">{m.step}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-body-sm text-muted-foreground leading-relaxed">{m.detail}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ── Do and don't ──────────────────────────────────────────── */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <FileDigit className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">Do and don&apos;t</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-heading-sm font-heading">Do</CardTitle>
              <CardDescription>These habits push you towards the top levels.</CardDescription>
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
              <CardTitle className="text-heading-sm font-heading">Don&apos;t</CardTitle>
              <CardDescription>These habits keep you in the lower levels.</CardDescription>
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
            Worked opening - dangers of urban cycling
          </h2>
        </div>
        <p className="mb-3 text-body-sm text-muted-foreground">
          Imagine the question asks for the dangers faced by city cyclists. Here is an opening that
          covers six points in about 60 words:
        </p>
        <div className="rounded-xl border border-border/60 bg-muted/30 p-5">
          <p className="text-body-sm text-foreground leading-relaxed">
            City cyclists face busy roads where lorries and buses struggle to see them, especially
            at junctions. Poorly maintained cycle lanes leave riders vulnerable to potholes and
            sudden diversions. Motor traffic produces pollution that harms riders&apos; lungs over
            time. Drivers who are distracted or impatient increase the risk of collisions, and
            inadequate lighting after dark makes cyclists harder to spot.
          </p>
        </div>
        <p className="mt-3 text-body-xs text-muted-foreground">
          Notice: no quotation, no opinion, every sentence a new point, and the phrasing is the
          student&apos;s own.
        </p>
      </section>
    </div>
  )
}
