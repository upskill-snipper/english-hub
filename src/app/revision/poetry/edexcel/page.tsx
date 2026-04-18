'use client'

import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Sparkles,
  Swords,
  MapPin,
  Info,
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import StudyTools from '@/components/study/StudyTools'

export default function EdexcelPoetryHubPage() {
  return (
    <div className="space-y-10 pb-16">
      {/* ── Back link ───────────────────────────────────────────────── */}
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
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-primary/5 blur-3xl" />

        <div className="relative">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge variant="secondary">
              <Sparkles className="mr-1 size-3" />
              Pearson Edexcel GCSE English Literature (1ET0)
            </Badge>
            <Badge className="bg-primary/10 text-primary border-primary/20">
              Edexcel
            </Badge>
          </div>
          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            Edexcel Poetry Anthology
          </h1>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
            The Edexcel anthology contains two themed collections of fifteen poems each.
            You only study <strong className="text-foreground">one</strong> cluster &mdash; either
            Conflict or Time and Place. Pick yours below and start with annotated
            study pages, key quotations and comparison practice.
          </p>
        </div>
      </section>

      <StudyTools textName="Edexcel Poetry Anthology" textType="anthology" examBoard="Edexcel" variant="banner" />

      {/* ── Info note ───────────────────────────────────────────────── */}
      <section className="flex items-start gap-3 rounded-xl border border-blue-500/20 bg-blue-500/5 p-4">
        <Info className="mt-0.5 size-4 shrink-0 text-blue-400" />
        <p className="text-body-sm text-muted-foreground">
          Edexcel poetry is assessed in <strong className="text-foreground">Paper 2, Section A</strong>.
          You will answer one comparison question on a named anthology poem and
          one of your own choice from the same cluster, plus an unseen poetry question.
        </p>
      </section>

      {/* ── Cluster cards ───────────────────────────────────────────── */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <BookOpen className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">Choose your cluster</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {/* Conflict card */}
          <Card className="group relative flex flex-col overflow-hidden transition-all duration-200 hover:border-border hover:shadow-card-hover">
            <CardHeader className="pb-3">
              <div className="mb-2 flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-xl bg-red-500/10">
                  <Swords className="size-5 text-red-400" />
                </div>
                <div>
                  <CardTitle className="text-heading-md font-heading">Conflict</CardTitle>
                  <CardDescription>15 poems</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex flex-1 flex-col gap-4">
              <p className="text-body-sm text-muted-foreground leading-relaxed">
                Poems exploring the many faces of conflict &mdash; war and bloodshed,
                personal and political battles, family tensions, prejudice, and
                inner emotional turmoil. Includes Blake, Owen, Byron, Tennyson,
                Hardy, Rossetti, Agard and Zephaniah.
              </p>
              <div className="mt-auto pt-2">
                <Button
                  variant="default"
                  size="sm"
                  className="w-full"
                  render={<Link href="/revision/poetry/edexcel/conflict" />}
                >
                  Study the Conflict cluster
                  <ArrowRight className="size-3.5" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Time and Place card */}
          <Card className="group relative flex flex-col overflow-hidden transition-all duration-200 hover:border-border hover:shadow-card-hover">
            <CardHeader className="pb-3">
              <div className="mb-2 flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-xl bg-emerald-500/10">
                  <MapPin className="size-5 text-emerald-400" />
                </div>
                <div>
                  <CardTitle className="text-heading-md font-heading">Time and Place</CardTitle>
                  <CardDescription>15 poems</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex flex-1 flex-col gap-4">
              <p className="text-body-sm text-muted-foreground leading-relaxed">
                Poems rooted in landscape, memory and journeys &mdash; from Keats and
                Wordsworth to Dickinson, Hardy, Fanthorpe and Grace Nichols. The
                cluster explores how place shapes identity and how time alters
                our relationship with where we have lived.
              </p>
              <div className="mt-auto pt-2">
                <Button
                  variant="default"
                  size="sm"
                  className="w-full"
                  render={<Link href="/revision/poetry/edexcel/time-and-place" />}
                >
                  Study the Time and Place cluster
                  <ArrowRight className="size-3.5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ── Differences from AQA ───────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <h2 className="text-heading-md font-heading text-foreground mb-3">
          How is Edexcel different from AQA?
        </h2>
        <ul className="space-y-2 text-body-sm text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
            Edexcel students study <strong className="text-foreground">one</strong> cluster
            (Conflict <em>or</em> Time and Place), not both.
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
            The exam asks you to compare a named poem with one of your choice
            from the same cluster.
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
            There is an unseen poetry question in the same paper, just like AQA.
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
            Some poets overlap with the AQA anthology (Blake, Wordsworth, Owen,
            Tennyson) but the specific poems are different.
          </li>
        </ul>
      </section>
    </div>
  )
}
