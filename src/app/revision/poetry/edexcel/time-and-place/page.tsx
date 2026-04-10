'use client'

import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  Sparkles,
  MapPin,
  BookOpen,
  Lightbulb,
  Lock,
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

interface Poem {
  title: string
  poet: string
  slug?: string
  hook: string
  themes: string[]
  copyrighted?: boolean
}

const TIME_AND_PLACE_POEMS: Poem[] = [
  {
    title: 'To Autumn',
    poet: 'John Keats',
    slug: 'to-autumn',
    hook: 'A sensuous ode celebrating the abundance and quiet beauty of autumn.',
    themes: ['Nature', 'Time', 'Beauty'],
  },
  {
    title: 'Composed Upon Westminster Bridge',
    poet: 'William Wordsworth',
    slug: 'composed-upon-westminster-bridge',
    hook: 'A surprised Romantic finds the city at dawn more beautiful than nature.',
    themes: ['City', 'Beauty', 'Awe'],
  },
  {
    title: 'London',
    poet: 'William Blake',
    slug: 'london',
    hook: 'A walk through London exposes suffering and institutional oppression.',
    themes: ['City', 'Suffering', 'Power'],
  },
  {
    title: 'I started Early – Took my Dog',
    poet: 'Emily Dickinson',
    slug: 'i-started-early-took-my-dog',
    hook: 'A walk to the sea becomes a strange, almost romantic encounter with the tide.',
    themes: ['Nature', 'Identity', 'Fear'],
  },
  {
    title: 'Where the Picnic was',
    poet: 'Thomas Hardy',
    hook: 'A man returns to a deserted picnic spot and meditates on time and loss.',
    themes: ['Memory', 'Loss', 'Time'],
  },
  {
    title: 'Adlestrop',
    poet: 'Edward Thomas',
    hook: 'A train pauses at a tiny station and the speaker hears the whole of England.',
    themes: ['Memory', 'Place', 'Stillness'],
  },
  {
    title: 'Home Thoughts from Abroad',
    poet: 'Robert Browning',
    hook: 'An Englishman abroad longs nostalgically for an idealised English spring.',
    themes: ['Nostalgia', 'Home', 'Nature'],
  },
  {
    title: 'First Flight',
    poet: 'U.A. Fanthorpe',
    hook: 'A nervous flyer and a confident commuter share a plane journey.',
    themes: ['Travel', 'Fear', 'Modernity'],
    copyrighted: true,
  },
  {
    title: 'Stewart Island',
    poet: 'Fleur Adcock',
    hook: 'A holidaymaker realises the postcard-perfect island is not what she imagined.',
    themes: ['Place', 'Disillusion', 'Identity'],
    copyrighted: true,
  },
  {
    title: 'Presents from my Aunts in Pakistan',
    poet: 'Moniza Alvi',
    hook: 'A British-Pakistani teenager feels caught between two cultural worlds.',
    themes: ['Identity', 'Culture', 'Belonging'],
    copyrighted: true,
  },
  {
    title: 'Hurricane Hits England',
    poet: 'Grace Nichols',
    hook: 'A Caribbean storm in England awakens the speaker\u2019s connection to her roots.',
    themes: ['Nature', 'Identity', 'Belonging'],
    copyrighted: true,
  },
  {
    title: "Nothing's Changed",
    poet: 'Tatamkhulu Afrika',
    hook: 'A return to District Six in Cape Town reveals apartheid\u2019s lingering scars.',
    themes: ['Place', 'Anger', 'Race'],
    copyrighted: true,
  },
  {
    title: 'Postcard from a Travel Snob',
    poet: 'Sophie Hannah',
    hook: 'A satirical voice mocks the smug traveller who looks down on tourists.',
    themes: ['Travel', 'Satire', 'Class'],
    copyrighted: true,
  },
  {
    title: 'In Romney Marsh',
    poet: 'John Davidson',
    hook: 'A walker on the Marsh hears the world singing in light, sound and metal.',
    themes: ['Nature', 'Sound', 'Place'],
  },
  {
    title: 'Absence',
    poet: 'Elizabeth Jennings',
    hook: 'A return to a familiar place sharpens the pain of someone\u2019s absence.',
    themes: ['Loss', 'Memory', 'Place'],
    copyrighted: true,
  },
]

const TAG_COLOURS: Record<string, string> = {
  Nature: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/20',
  Time: 'bg-blue-500/15 text-blue-300 border-blue-500/20',
  Beauty: 'bg-pink-500/15 text-pink-300 border-pink-500/20',
  City: 'bg-violet-500/15 text-violet-300 border-violet-500/20',
  Awe: 'bg-amber-500/15 text-amber-300 border-amber-500/20',
  Suffering: 'bg-red-500/15 text-red-300 border-red-500/20',
  Power: 'bg-violet-500/15 text-violet-300 border-violet-500/20',
  Identity: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/20',
  Fear: 'bg-orange-500/15 text-orange-300 border-orange-500/20',
  Memory: 'bg-amber-500/15 text-amber-300 border-amber-500/20',
  Loss: 'bg-rose-500/15 text-rose-300 border-rose-500/20',
  Place: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/20',
  Stillness: 'bg-sky-500/15 text-sky-300 border-sky-500/20',
  Nostalgia: 'bg-rose-500/15 text-rose-300 border-rose-500/20',
  Home: 'bg-amber-500/15 text-amber-300 border-amber-500/20',
  Travel: 'bg-blue-500/15 text-blue-300 border-blue-500/20',
  Modernity: 'bg-stone-500/15 text-stone-300 border-stone-500/20',
  Disillusion: 'bg-violet-500/15 text-violet-300 border-violet-500/20',
  Culture: 'bg-violet-500/15 text-violet-300 border-violet-500/20',
  Belonging: 'bg-teal-500/15 text-teal-300 border-teal-500/20',
  Anger: 'bg-orange-500/15 text-orange-300 border-orange-500/20',
  Race: 'bg-red-500/15 text-red-300 border-red-500/20',
  Satire: 'bg-yellow-500/15 text-yellow-300 border-yellow-500/20',
  Class: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/20',
  Sound: 'bg-blue-500/15 text-blue-300 border-blue-500/20',
}

export default function EdexcelTimeAndPlacePage() {
  const available = TIME_AND_PLACE_POEMS.filter((p) => p.slug && !p.copyrighted)
  const upcoming = TIME_AND_PLACE_POEMS.filter((p) => !p.slug || p.copyrighted)

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
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-emerald-500/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-emerald-500/5 blur-3xl" />

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
            <div className="flex size-12 items-center justify-center rounded-2xl bg-emerald-500/10">
              <MapPin className="size-6 text-emerald-400" />
            </div>
            <h1 className="text-display-sm font-heading text-foreground sm:text-display">
              Time and Place Cluster
            </h1>
          </div>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
            All 15 poems in the Edexcel Time and Place anthology. From Romantic
            celebrations of nature to modern poems about migration, identity
            and belonging, the cluster explores how places shape us and how
            time changes the way we see them.
          </p>
        </div>
      </section>

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
              href={`/revision/poetry/edexcel/time-and-place/${poem.slug}`}
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
            <Lightbulb className="size-5 text-amber-400" />
          </div>
          <h2 className="text-heading-md font-heading text-foreground">
            Comparison tip
          </h2>
        </div>
        <p className="text-body-sm text-muted-foreground leading-relaxed">
          Time and Place rewards strong contrasts of attitude. Pair a
          celebratory poem like <em>Composed Upon Westminster Bridge</em> with
          a darker urban view in <em>London</em> &mdash; they describe the same
          city only a few years apart, with utterly different feelings.
        </p>
      </section>
    </div>
  )
}
