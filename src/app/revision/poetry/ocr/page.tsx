'use client'

import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  Sparkles,
  BookOpen,
  Heart,
  Swords,
  Clock,
  Mountain,
  Info,
} from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

interface Cluster {
  slug: string
  title: string
  description: string
  count: number
  icon: typeof Heart
  iconColor: string
  iconBg: string
}

const CLUSTERS: Cluster[] = [
  {
    slug: 'love-and-relationships',
    title: 'Love and Relationships',
    description:
      'Romantic, familial and complex relationships from Byron and Wordsworth to Carol Ann Duffy and John Cooper Clarke.',
    count: 15,
    icon: Heart,
    iconColor: 'text-pink-400',
    iconBg: 'bg-pink-500/10',
  },
  {
    slug: 'conflict',
    title: 'Conflict',
    description:
      'War, prejudice and personal struggle, from Tennyson and Owen to Agard, Zephaniah and Imtiaz Dharker.',
    count: 15,
    icon: Swords,
    iconColor: 'text-red-400',
    iconBg: 'bg-red-500/10',
  },
  {
    slug: 'youth-and-age',
    title: 'Youth and Age',
    description:
      'Childhood, growing up, parenthood and mortality, from Yeats and Keats to Helen Dunmore and Carol Rumens.',
    count: 15,
    icon: Clock,
    iconColor: 'text-amber-400',
    iconBg: 'bg-amber-500/10',
  },
  {
    slug: 'power-and-natural-world',
    title: 'Power and the Natural World',
    description:
      'Nature, environment and human power, from Shelley and Blake to Ted Hughes, Seamus Heaney and Achebe.',
    count: 15,
    icon: Mountain,
    iconColor: 'text-emerald-400',
    iconBg: 'bg-emerald-500/10',
  },
]

export default function OCRPoetryHubPage() {
  return (
    <div className="space-y-10 pb-16">
      {/* ── Back nav ────────────────────────────────────────────────── */}
      <div>
        <Button
          variant="ghost"
          size="sm"
          className="mb-3 -ml-2 text-muted-foreground"
          render={<Link href="/revision/poetry" />}
        >
          <ArrowLeft className="size-3.5" />
          Back to Poetry
        </Button>
      </div>

      {/* ── Hero ────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-primary/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-violet-500/5 blur-3xl" />

        <div className="relative">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge variant="secondary">
              <Sparkles className="mr-1 size-3" />
              OCR GCSE English Literature J352
            </Badge>
            <Badge className="bg-primary/10 text-primary border-primary/20">
              OCR
            </Badge>
          </div>

          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            Towards a World Unknown
          </h1>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
            The OCR poetry anthology contains 60 poems split across 4 themed clusters of 15 poems each.
            For your exam, you only need to study <strong className="text-foreground">one cluster</strong> --
            the one chosen by your school or teacher.
          </p>
        </div>
      </section>

      {/* ── Info banner ─────────────────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-card p-5 sm:p-6">
        <div className="flex items-start gap-3">
          <Info className="mt-0.5 size-5 shrink-0 text-primary" />
          <div>
            <h2 className="text-heading-sm font-heading text-foreground">
              Which cluster do I study?
            </h2>
            <p className="mt-1 text-body-sm text-muted-foreground">
              Check with your teacher to find out which of the 4 clusters your class is studying.
              Most schools choose one cluster at the start of Year 10 and stick with it through to the exam.
              You will be assessed on poems from that cluster only.
            </p>
          </div>
        </div>
      </section>

      {/* ── Cluster cards ───────────────────────────────────────────── */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <BookOpen className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">
            The Four Clusters
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {CLUSTERS.map((cluster) => (
            <Card
              key={cluster.slug}
              className="group relative flex flex-col overflow-hidden transition-all duration-200 hover:border-border hover:shadow-card-hover"
            >
              <CardHeader className="pb-3">
                <div className="mb-2 flex items-center gap-3">
                  <div
                    className={`flex size-10 items-center justify-center rounded-xl ${cluster.iconBg}`}
                  >
                    <cluster.icon className={`size-5 ${cluster.iconColor}`} />
                  </div>
                  <div>
                    <CardTitle className="text-heading-md font-heading">
                      {cluster.title}
                    </CardTitle>
                    <CardDescription>{cluster.count} poems</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col gap-4">
                <p className="text-body-sm text-muted-foreground leading-relaxed">
                  {cluster.description}
                </p>
                <div className="mt-auto pt-2">
                  <Button
                    variant="default"
                    size="sm"
                    className="w-full"
                    render={<Link href={`/revision/poetry/ocr/${cluster.slug}`} />}
                  >
                    Study {cluster.title}
                    <ArrowRight className="size-3.5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ── Copyright note ──────────────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-muted/30 p-5 sm:p-6">
        <h2 className="text-heading-sm font-heading text-foreground">
          About these study pages
        </h2>
        <p className="mt-2 text-body-sm text-muted-foreground leading-relaxed">
          For older, public-domain poems we provide full interactive study pages with annotations,
          context, and quotation analysis. For poems still in copyright, we provide context, themes,
          and key quotation analysis only -- you will need a copy of the OCR anthology
          (<em>Towards a World Unknown</em>, ISBN 9781398384408) to read the full text.
        </p>
      </section>

      {/* ── Back to Poetry CTA ──────────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8 text-center">
        <BookOpen className="mx-auto mb-3 size-8 text-primary" />
        <h2 className="text-heading-lg font-heading text-foreground">
          Studying a different exam board?
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-body-sm text-muted-foreground">
          Head back to the Poetry hub to switch boards or explore unseen poetry techniques and
          general poetry skills that apply to every exam board.
        </p>
        <Button
          variant="default"
          size="lg"
          className="mt-5"
          render={<Link href="/revision/poetry" />}
        >
          Back to Poetry Hub
          <ArrowRight className="size-4" />
        </Button>
      </section>
    </div>
  )
}
