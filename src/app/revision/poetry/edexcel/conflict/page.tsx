'use client'

import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  Sparkles,
  Swords,
  BookOpen,
  Lightbulb,
  Lock,
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import StudyTools from '@/components/study/StudyTools'

interface Poem {
  title: string
  poet: string
  slug?: string
  hook: string
  themes: string[]
  copyrighted?: boolean
}

const CONFLICT_POEMS: Poem[] = [
  {
    title: 'A Poison Tree',
    poet: 'William Blake',
    slug: 'a-poison-tree',
    hook: 'A short parable about how suppressed anger grows into deadly hatred.',
    themes: ['Anger', 'Deception', 'Internal conflict'],
  },
  {
    title: 'The Destruction of Sennacherib',
    poet: 'Lord Byron',
    slug: 'the-destruction-of-sennacherib',
    hook: 'A divine, biblical battle scene told in galloping anapaestic rhythm.',
    themes: ['War', 'Religion', 'Power'],
  },
  {
    title: 'Extract from The Prelude',
    poet: 'William Wordsworth',
    hook: 'A boy steals a boat and is confronted by the awesome force of nature.',
    themes: ['Nature', 'Fear', 'Power'],
  },
  {
    title: 'The Man He Killed',
    poet: 'Thomas Hardy',
    hook: 'A soldier reflects on killing a man who could have been his friend.',
    themes: ['War', 'Guilt', 'Class'],
  },
  {
    title: 'Cousin Kate',
    poet: 'Christina Rossetti',
    hook: 'A betrayed woman confronts her cousin and the lord who used them both.',
    themes: ['Betrayal', 'Class', 'Gender'],
  },
  {
    title: 'Half-caste',
    poet: 'John Agard',
    hook: 'A defiant challenge to a racist label, written in Caribbean Creole.',
    themes: ['Identity', 'Racism', 'Language'],
  },
  {
    title: 'Exposure',
    poet: 'Wilfred Owen',
    hook: 'WWI soldiers freeze to death while nothing happens at the front.',
    themes: ['War', 'Suffering', 'Nature'],
  },
  {
    title: 'The Charge of the Light Brigade',
    poet: 'Alfred Lord Tennyson',
    hook: 'Six hundred cavalry ride into certain death with unwavering duty.',
    themes: ['War', 'Honour', 'Duty'],
  },
  {
    title: 'Catrin',
    poet: 'Gillian Clarke',
    hook: 'A mother remembers giving birth and the ongoing tug of love and conflict.',
    themes: ['Family', 'Love', 'Conflict'],
    copyrighted: true,
  },
  {
    title: 'War Photographer',
    poet: 'Carole Satyamurti',
    hook: 'Images of suffering develop in a quiet, sterile darkroom.',
    themes: ['War', 'Memory', 'Detachment'],
    copyrighted: true,
  },
  {
    title: 'Belfast Confetti',
    poet: 'Ciaran Carson',
    hook: 'A bomb in Belfast turns punctuation and street names into shrapnel.',
    themes: ['Conflict', 'Identity', 'Place'],
    copyrighted: true,
  },
  {
    title: 'The Class Game',
    poet: 'Mary Casey',
    hook: 'A defiant working-class voice rejects the markers of middle-class judgement.',
    themes: ['Class', 'Identity', 'Pride'],
    copyrighted: true,
  },
  {
    title: 'Poppies',
    poet: 'Jane Weir',
    hook: 'A mother tenderly remembers her son leaving for war.',
    themes: ['War', 'Loss', 'Memory'],
    copyrighted: true,
  },
  {
    title: 'No Problem',
    poet: 'Benjamin Zephaniah',
    hook: 'A sharp critique of how stereotypes box in young Black men.',
    themes: ['Racism', 'Identity', 'Anger'],
    copyrighted: true,
  },
  {
    title: 'What Were They Like?',
    poet: 'Denise Levertov',
    hook: 'Question and answer voices mourn a culture obliterated by war.',
    themes: ['War', 'Culture', 'Loss'],
    copyrighted: true,
  },
]

const TAG_COLOURS: Record<string, string> = {
  War: 'bg-red-500/15 text-red-300 border-red-500/20',
  Anger: 'bg-orange-500/15 text-clay-600 border-orange-500/20',
  Deception: 'bg-violet-500/15 text-violet-300 border-violet-500/20',
  'Internal conflict': 'bg-amber-500/15 text-amber-700 border-amber-500/20',
  Religion: 'bg-blue-500/15 text-blue-300 border-blue-500/20',
  Power: 'bg-violet-500/15 text-violet-300 border-violet-500/20',
  Nature: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/20',
  Fear: 'bg-orange-500/15 text-clay-600 border-orange-500/20',
  Guilt: 'bg-amber-500/15 text-amber-700 border-amber-500/20',
  Class: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/20',
  Betrayal: 'bg-rose-500/15 text-rose-300 border-rose-500/20',
  Gender: 'bg-pink-500/15 text-pink-300 border-pink-500/20',
  Identity: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/20',
  Racism: 'bg-red-500/15 text-red-300 border-red-500/20',
  Language: 'bg-blue-500/15 text-blue-300 border-blue-500/20',
  Suffering: 'bg-red-500/15 text-red-300 border-red-500/20',
  Honour: 'bg-yellow-500/15 text-amber-700 border-yellow-500/20',
  Duty: 'bg-blue-500/15 text-blue-300 border-blue-500/20',
  Family: 'bg-pink-500/15 text-pink-300 border-pink-500/20',
  Love: 'bg-rose-500/15 text-rose-300 border-rose-500/20',
  Conflict: 'bg-red-500/15 text-red-300 border-red-500/20',
  Memory: 'bg-amber-500/15 text-amber-700 border-amber-500/20',
  Detachment: 'bg-stone-500/15 text-stone-300 border-stone-500/20',
  Place: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/20',
  Pride: 'bg-pink-500/15 text-pink-300 border-pink-500/20',
  Loss: 'bg-rose-500/15 text-rose-300 border-rose-500/20',
  Culture: 'bg-violet-500/15 text-violet-300 border-violet-500/20',
}

export default function EdexcelConflictPage() {
  const available = CONFLICT_POEMS.filter((p) => p.slug && !p.copyrighted)
  const upcoming = CONFLICT_POEMS.filter((p) => !p.slug || p.copyrighted)

  return (
    <div className="space-y-10 pb-16">
      {/* ── Back link ───────────────────────────────────────────────── */}
      <div>
        <Button
          variant="ghost"
          size="sm"
          className="mb-3 -ml-2 text-muted-foreground"
          render={<Link href="/revision/poetry/edexcel" />}
        >
          <ArrowLeft className="size-3.5" />
          Back to Edexcel Poetry
        </Button>
      </div>

      {/* ── Hero ────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-red-500/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-red-500/5 blur-3xl" />

        <div className="relative">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge variant="secondary">
              <Sparkles className="mr-1 size-3" />
              Pearson Edexcel GCSE English Literature
            </Badge>
            <Badge className="bg-primary/10 text-primary border-primary/20">
              Edexcel
            </Badge>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex size-12 items-center justify-center rounded-2xl bg-red-500/10">
              <Swords className="size-6 text-red-400" />
            </div>
            <h1 className="text-display-sm font-heading text-foreground sm:text-display">
              Conflict Cluster
            </h1>
          </div>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
            All 15 poems in the Edexcel Conflict anthology. Conflict is explored
            in many forms &mdash; war and violence, prejudice and racism, family
            tension, internal struggle and the politics of class.
          </p>
        </div>
      </section>

      <StudyTools textName="Edexcel Conflict Anthology" textType="anthology" examBoard="Edexcel" variant="banner" />

      {/* ── Available poems ────────────────────────────────────────── */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <BookOpen className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">
            Study pages
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {available.map((poem) => (
            <Link
              key={poem.title}
              href={`/revision/poetry/edexcel/conflict/${poem.slug}`}
              className="group relative flex flex-col rounded-2xl border border-border/60 bg-card p-5 transition-all duration-200 hover:border-border hover:shadow-card-hover"
            >
              <h3 className="text-heading-md font-heading text-foreground group-hover:text-primary transition-colors">
                {poem.title}
              </h3>
              <p className="mt-0.5 text-caption text-muted-foreground">{poem.poet}</p>
              <p className="mt-3 flex-1 text-body-sm text-muted-foreground leading-relaxed">
                {poem.hook}
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {poem.themes.map((theme) => (
                  <span
                    key={theme}
                    className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[0.65rem] font-medium ${
                      TAG_COLOURS[theme] ?? 'bg-muted text-muted-foreground border-border'
                    }`}
                  >
                    {theme}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                Study this poem
                <ArrowRight className="size-3.5" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Coming soon poems ──────────────────────────────────────── */}
      <section>
        <div className="mb-3 flex items-center gap-3">
          <Lock className="size-5 text-muted-foreground" />
          <h2 className="text-heading-lg font-heading text-foreground">
            Other poems in the cluster
          </h2>
        </div>
        <p className="mb-5 text-body-sm text-muted-foreground max-w-2xl">
          Full study pages for these poems are in development. Many are still
          in copyright, so we will provide key quotations, analysis and
          comparison notes rather than the full text.
        </p>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {upcoming.map((poem) => (
            <div
              key={poem.title}
              className="flex flex-col rounded-xl border border-dashed border-border/60 bg-muted/20 p-4"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <h3 className="truncate text-sm font-semibold text-foreground">
                    {poem.title}
                  </h3>
                  <p className="truncate text-xs text-muted-foreground">{poem.poet}</p>
                </div>
                {poem.copyrighted && (
                  <Badge variant="outline" className="shrink-0 text-[0.6rem] px-1.5 py-0">
                    Quotes only
                  </Badge>
                )}
              </div>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{poem.hook}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Study tip ───────────────────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-gradient-to-r from-amber-500/[0.06] via-card to-primary/[0.04] p-6 sm:p-8">
        <div className="mb-3 flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-amber-500/10">
            <Lightbulb className="size-5 text-clay-600" />
          </div>
          <h2 className="text-heading-md font-heading text-foreground">
            Comparison tip
          </h2>
        </div>
        <p className="text-body-sm text-muted-foreground leading-relaxed">
          Edexcel often pairs a war poem with a poem about a different kind of
          conflict (personal, racial or class-based). Practice pairing
          <em> The Charge of the Light Brigade</em> with <em>Half-caste</em>, or
          <em> Exposure</em> with <em>A Poison Tree</em> &mdash; the differences
          in form and tone give you plenty to write about.
        </p>
      </section>
    </div>
  )
}
