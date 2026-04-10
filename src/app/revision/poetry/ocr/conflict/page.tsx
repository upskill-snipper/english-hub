'use client'

import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  Swords,
  Sparkles,
  BookOpen,
  Lock,
  CheckCircle2,
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

interface Poem {
  title: string
  poet: string
  slug: string
  publicDomain: boolean
  hook: string
}

const POEMS: Poem[] = [
  {
    title: 'The Destruction of Sennacherib',
    poet: 'Lord Byron',
    slug: 'the-destruction-of-sennacherib',
    publicDomain: true,
    hook: 'A galloping retelling of an Old Testament story in which an invading army is annihilated overnight.',
  },
  {
    title: 'The Man He Killed',
    poet: 'Thomas Hardy',
    slug: 'the-man-he-killed',
    publicDomain: true,
    hook: 'A soldier struggles to justify killing a man who, in different circumstances, could have been his friend.',
  },
  {
    title: 'Cousin Kate',
    poet: 'Christina Rossetti',
    slug: 'cousin-kate',
    publicDomain: true,
    hook: 'A betrayed woman accuses her cousin and the lord who used and abandoned her.',
  },
  {
    title: 'Half-caste',
    poet: 'John Agard',
    slug: 'half-caste',
    publicDomain: false,
    hook: 'A defiant challenge to a derogatory term, celebrating mixed heritage with humour and bite.',
  },
  {
    title: 'Exposure',
    poet: 'Wilfred Owen',
    slug: 'exposure',
    publicDomain: true,
    hook: 'Soldiers slowly freeze to death in the trenches while nothing happens on the front line.',
  },
  {
    title: 'The Charge of the Light Brigade',
    poet: 'Alfred Lord Tennyson',
    slug: 'the-charge-of-the-light-brigade',
    publicDomain: true,
    hook: 'Six hundred soldiers ride into certain death with unwavering duty.',
  },
  {
    title: 'Catrin',
    poet: 'Gillian Clarke',
    slug: 'catrin',
    publicDomain: false,
    hook: 'A mother remembers the moment of her daughter\'s birth and their continuing tug-of-war.',
  },
  {
    title: 'War Photographer',
    poet: 'Carole Satyamurti',
    slug: 'war-photographer',
    publicDomain: false,
    hook: "A photographer reflects on the moral cost of capturing other people's suffering.",
  },
  {
    title: 'Belfast Confetti',
    poet: 'Ciaran Carson',
    slug: 'belfast-confetti',
    publicDomain: false,
    hook: "Punctuation and exploding shrapnel collide as the city itself becomes unreadable.",
  },
  {
    title: 'The Class Game',
    poet: 'Mary Casey',
    slug: 'the-class-game',
    publicDomain: false,
    hook: 'A Liverpudlian working-class voice fires back at middle-class snobbery.',
  },
  {
    title: 'Poppies',
    poet: 'Jane Weir',
    slug: 'poppies',
    publicDomain: false,
    hook: 'A mother tenderly remembers her son leaving for war.',
  },
  {
    title: 'No Problem',
    poet: 'Benjamin Zephaniah',
    slug: 'no-problem',
    publicDomain: false,
    hook: "A dub-rhythmed protest against racial stereotyping in modern Britain.",
  },
  {
    title: 'What Were They Like?',
    poet: 'Denise Levertov',
    slug: 'what-were-they-like',
    publicDomain: false,
    hook: 'A series of question and answers laments the destruction of Vietnamese culture in war.',
  },
  {
    title: 'Flag',
    poet: 'John Agard',
    slug: 'flag',
    publicDomain: false,
    hook: 'A piece of cloth that "brings a nation to its knees" -- an interrogation of nationalism.',
  },
  {
    title: 'Honour Killing',
    poet: 'Imtiaz Dharker',
    slug: 'honour-killing',
    publicDomain: false,
    hook: 'A woman strips away the cultural expectations imposed on her, layer by layer.',
  },
]

export default function OCRConflictPage() {
  return (
    <div className="space-y-10 pb-16">
      <div>
        <Button
          variant="ghost"
          size="sm"
          className="mb-3 -ml-2 text-muted-foreground"
          render={<Link href="/revision/poetry/ocr" />}
        >
          <ArrowLeft className="size-3.5" />
          Back to OCR Anthology
        </Button>
      </div>

      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-red-500/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-red-500/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-orange-500/5 blur-3xl" />

        <div className="relative">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge variant="secondary">
              <Sparkles className="mr-1 size-3" />
              OCR Towards a World Unknown
            </Badge>
            <Badge className="bg-primary/10 text-primary border-primary/20">OCR</Badge>
          </div>

          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            Conflict
          </h1>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
            15 poems exploring war, prejudice, identity and personal struggle. From Tennyson and Owen
            to Agard, Zephaniah and Imtiaz Dharker.
          </p>
        </div>
      </section>

      <section>
        <div className="mb-5 flex items-center gap-3">
          <Swords className="size-5 text-red-400" />
          <h2 className="text-heading-lg font-heading text-foreground">All 15 Poems</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {POEMS.map((poem) => (
            <Link
              key={poem.slug}
              href={
                poem.publicDomain
                  ? `/revision/poetry/ocr/conflict/${poem.slug}`
                  : '#'
              }
              className={`group relative flex flex-col rounded-2xl border border-border/60 bg-card p-5 transition-all duration-200 ${
                poem.publicDomain
                  ? 'hover:border-border hover:shadow-card-hover'
                  : 'cursor-not-allowed opacity-70'
              }`}
              onClick={(e) => {
                if (!poem.publicDomain) e.preventDefault()
              }}
            >
              <div className="absolute right-4 top-4">
                {poem.publicDomain ? (
                  <CheckCircle2 className="size-4 text-emerald-400" />
                ) : (
                  <Lock className="size-4 text-muted-foreground/50" />
                )}
              </div>

              <h3 className="pr-8 text-heading-md font-heading text-foreground group-hover:text-primary transition-colors">
                {poem.title}
              </h3>
              <p className="mt-0.5 text-caption text-muted-foreground">{poem.poet}</p>
              <p className="mt-3 flex-1 text-body-sm text-muted-foreground leading-relaxed">
                {poem.hook}
              </p>

              <div className="mt-3">
                <Badge variant="outline" className="text-[0.65rem]">
                  {poem.publicDomain ? 'Full study page' : 'Key quotations only'}
                </Badge>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-border/60 bg-muted/30 p-5 sm:p-6">
        <h2 className="text-heading-sm font-heading text-foreground">
          Why are some poems locked?
        </h2>
        <p className="mt-2 text-body-sm text-muted-foreground leading-relaxed">
          Older poems are public domain so we provide full annotated study pages. More recent poems
          are still in copyright -- for those we offer context, themes and key quotation analysis
          only. You will need a copy of the OCR <em>Towards a World Unknown</em> anthology to read
          the full text.
        </p>
      </section>

      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8 text-center">
        <BookOpen className="mx-auto mb-3 size-8 text-red-400" />
        <h2 className="text-heading-lg font-heading text-foreground">
          Explore other clusters
        </h2>
        <Button
          variant="default"
          size="lg"
          className="mt-5"
          render={<Link href="/revision/poetry/ocr" />}
        >
          Back to OCR Anthology
          <ArrowRight className="size-4" />
        </Button>
      </section>
    </div>
  )
}
