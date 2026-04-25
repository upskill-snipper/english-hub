import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, BookOpen, Sparkles, Globe, Info, Clock } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Breadcrumb } from '@/components/ui/breadcrumb'

export const metadata: Metadata = {
  title: 'AQA Worlds and Lives Poetry Anthology | The English Hub',
  description:
    'The AQA Worlds and Lives poetry cluster (15 poems) covers identity, place, belonging and memory. Revision pages with annotations, themes and comparison practice — coming soon.',
}

interface AnthologyPoem {
  title: string
  poet: string
}

// Official AQA Worlds and Lives cluster (first assessed 2025).
const WORLDS_AND_LIVES: AnthologyPoem[] = [
  { title: 'Lines Composed a Few Miles above Tintern Abbey', poet: 'William Wordsworth' },
  { title: 'England in 1819', poet: 'Percy Bysshe Shelley' },
  { title: 'Shall earth no more inspire thee?', poet: 'Emily Brontë' },
  { title: 'In a London Drawingroom', poet: 'George Eliot' },
  { title: 'On an Afternoon Train from Purley to Victoria, 1955', poet: 'James Berry' },
  { title: 'Name Journeys', poet: 'Raman Mundair' },
  { title: 'pot', poet: 'Shamshad Khan' },
  { title: 'A Wider View', poet: 'Seni Seneviratne' },
  { title: 'Thirteen', poet: 'Caleb Femi' },
  { title: 'A Century Later', poet: 'Imtiaz Dharker' },
  { title: "With Birds You're Never Lonely", poet: 'Raymond Antrobus' },
  { title: 'Homing', poet: 'Liz Berry' },
  { title: 'A Portable Paradise', poet: 'Roger Robinson' },
  { title: 'The Jewellery Maker', poet: 'Louisa Adjoa Parker' },
  { title: 'Like an Heiress', poet: 'Grace Nichols' },
]

export default function AqaWorldsAndLivesHubPage() {
  const breadcrumbItems = [
    { label: 'Revision', href: '/revision' },
    { label: 'Poetry', href: '/revision/poetry' },
    { label: 'AQA Worlds and Lives' },
  ]

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
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
        <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-emerald-500/[0.04] p-6 sm:p-8 lg:p-10">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-emerald-500/5 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-violet-500/5 blur-3xl" />

          <div className="relative">
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <Badge variant="secondary">
                <Sparkles className="mr-1 size-3" />
                AQA GCSE English Literature (8702)
              </Badge>
              <Badge className="border-emerald-500/20 bg-emerald-500/10 text-emerald-300">
                Worlds and Lives
              </Badge>
            </div>
            <h1 className="text-display-sm font-heading text-foreground sm:text-display">
              AQA Worlds and Lives Anthology
            </h1>
            <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
              The newest AQA cluster brings together fifteen poems on{' '}
              <strong className="text-foreground">identity, place, belonging and memory</strong>.
              From Wordsworth and Shelley to Caleb Femi and Roger Robinson, the anthology spans two
              centuries of voices reflecting on the worlds we live in and the lives we lead.
            </p>
          </div>
        </section>

        {/* ── Info note ───────────────────────────────────────────────── */}
        <section className="flex items-start gap-3 rounded-xl border border-blue-500/20 bg-blue-500/5 p-4">
          <Info className="mt-0.5 size-4 shrink-0 text-blue-400" />
          <p className="text-body-sm text-muted-foreground">
            Worlds and Lives is one of three AQA clusters — schools choose either{' '}
            <Link
              href="/revision/poetry/power-and-conflict"
              className="font-medium text-foreground underline-offset-4 hover:underline"
            >
              Power and Conflict
            </Link>
            ,{' '}
            <Link
              href="/revision/poetry/love-and-relationships"
              className="font-medium text-foreground underline-offset-4 hover:underline"
            >
              Love and Relationships
            </Link>
            , or Worlds and Lives. Check with your teacher which cluster your class is studying.
          </p>
        </section>

        {/* ── Coming soon banner ──────────────────────────────────────── */}
        <section className="rounded-2xl border border-amber-500/20 bg-amber-500/[0.04] p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-amber-500/10">
              <Clock className="size-6 text-amber-400" />
            </div>
            <div className="flex-1 space-y-2">
              <h2 className="text-heading-md font-heading text-foreground">
                Detailed study pages coming soon
              </h2>
              <p className="text-body-sm text-muted-foreground">
                We are writing full annotations, key quotations, technique analysis and comparison
                pairings for every poem in this anthology. In the meantime, the full poem list is
                below so you know exactly what you need to revise. Power and Conflict and Love and
                Relationships are already available in full if your class studies one of those.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <Button
                  variant="outline"
                  size="sm"
                  render={<Link href="/revision/poetry/power-and-conflict" />}
                >
                  Power and Conflict (full)
                  <ArrowRight className="size-3.5" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  render={<Link href="/revision/poetry/love-and-relationships" />}
                >
                  Love and Relationships (full)
                  <ArrowRight className="size-3.5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ── Poem list ───────────────────────────────────────────────── */}
        <section>
          <div className="mb-5 flex items-center gap-3">
            <BookOpen className="size-5 text-emerald-400" />
            <h2 className="text-heading-lg font-heading text-foreground">
              All 15 Worlds and Lives poems
            </h2>
          </div>

          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {WORLDS_AND_LIVES.map((poem) => (
              <div
                key={poem.title}
                className="flex items-center gap-3 rounded-xl border border-border/60 bg-card p-3"
              >
                <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10">
                  <Globe className="size-4 text-emerald-400" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-foreground">{poem.title}</p>
                  <p className="truncate text-xs text-muted-foreground">{poem.poet}</p>
                </div>
                <Badge
                  variant="outline"
                  className="shrink-0 text-[0.65rem] uppercase tracking-wider"
                >
                  Soon
                </Badge>
              </div>
            ))}
          </div>
        </section>

        {/* ── Themes overview ─────────────────────────────────────────── */}
        <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
          <h2 className="text-heading-md font-heading text-foreground">
            Key themes across the anthology
          </h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="space-y-1">
              <h3 className="text-sm font-semibold text-foreground">Identity and heritage</h3>
              <p className="text-body-sm text-muted-foreground">
                Naming, ancestry and the negotiation of cultural identity in poems like Name
                Journeys, A Portable Paradise and pot.
              </p>
            </div>
            <div className="space-y-1">
              <h3 className="text-sm font-semibold text-foreground">Place and landscape</h3>
              <p className="text-body-sm text-muted-foreground">
                Landscapes as memory, refuge or critique — Tintern Abbey, In a London Drawingroom
                and Homing.
              </p>
            </div>
            <div className="space-y-1">
              <h3 className="text-sm font-semibold text-foreground">Power and politics</h3>
              <p className="text-body-sm text-muted-foreground">
                Poetry as protest and witness in England in 1819, Thirteen and On an Afternoon Train
                from Purley to Victoria, 1955.
              </p>
            </div>
            <div className="space-y-1">
              <h3 className="text-sm font-semibold text-foreground">Belonging and migration</h3>
              <p className="text-body-sm text-muted-foreground">
                Crossings, arrivals and the search for home in A Wider View, A Century Later and
                With Birds You&apos;re Never Lonely.
              </p>
            </div>
          </div>
        </section>

        {/* ── Footer CTA ──────────────────────────────────────────────── */}
        <section className="rounded-2xl border border-border/60 bg-gradient-to-r from-emerald-500/[0.06] via-card to-violet-500/[0.04] p-6 text-center sm:p-8">
          <Globe className="mx-auto mb-3 size-8 text-emerald-400" />
          <h2 className="text-heading-lg font-heading text-foreground">Want a poem prioritised?</h2>
          <p className="mx-auto mt-2 max-w-lg text-body-sm text-muted-foreground">
            We are publishing Worlds and Lives study pages in batches. If your class is on a poem
            that is still &ldquo;coming soon&rdquo;, the existing AQA Power and Conflict and Love
            and Relationships pages show the depth of analysis you can expect.
          </p>
          <Button
            variant="default"
            size="lg"
            className="mt-5"
            render={<Link href="/revision/poetry" />}
          >
            Back to poetry hub
            <ArrowRight className="size-4" />
          </Button>
        </section>
      </div>
    </>
  )
}
