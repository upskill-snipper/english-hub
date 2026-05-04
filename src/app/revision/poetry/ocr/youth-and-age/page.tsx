'use client'

import Link from 'next/link'
import { ArrowLeft, ArrowRight, Clock, Sparkles, BookOpen, Lock, CheckCircle2 } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import StudyTools from '@/components/study/StudyTools'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'

interface Poem {
  title: string
  poet: string
  slug: string
  publicDomain: boolean
  hook: string
}

const POEMS: Poem[] = [
  {
    title: 'The Song of the Old Mother',
    poet: 'W.B. Yeats',
    slug: 'the-song-of-the-old-mother',
    publicDomain: true,
    hook: "A weary old woman contrasts her ceaseless labour with her children's idle ease.",
  },
  {
    title: 'Death the Leveller',
    poet: 'James Shirley',
    slug: 'death-the-leveller',
    publicDomain: true,
    hook: 'A solemn reminder that no rank, sceptre or crown can shield anyone from the grave.',
  },
  {
    title: 'Crossing the Bar',
    poet: 'Alfred Lord Tennyson',
    slug: 'crossing-the-bar',
    publicDomain: true,
    hook: "Tennyson's calm meditation on death as a peaceful sea voyage out to meet his Pilot.",
  },
  {
    title: 'When I Have Fears',
    poet: 'John Keats',
    slug: 'when-i-have-fears',
    publicDomain: true,
    hook: 'Keats confronts his terror of dying before he can write all the poetry inside him.',
  },
  {
    title: 'On My First Son',
    poet: 'Ben Jonson',
    slug: 'on-my-first-son',
    publicDomain: true,
    hook: 'A father\'s anguished elegy for his seven-year-old son, his "best piece of poetry".',
  },
  {
    title: 'Piano',
    poet: 'D.H. Lawrence',
    slug: 'piano',
    publicDomain: true,
    hook: "A song carries the speaker back to the lost intimacy of childhood by his mother's knee.",
  },
  {
    title: 'Walking Away',
    poet: 'C. Day-Lewis',
    slug: 'walking-away',
    publicDomain: false,
    hook: 'A father remembers the moment he first watched his young son walk away into independence.',
  },
  {
    title: 'Follower',
    poet: 'Seamus Heaney',
    slug: 'follower',
    publicDomain: false,
    hook: 'A son who once worshipped his ploughman father now finds the roles reversed.',
  },
  {
    title: 'On an Old Song',
    poet: 'Douglas Dunn',
    slug: 'on-an-old-song',
    publicDomain: false,
    hook: 'A folk tune unlocks a meditation on time, memory and the lives of past generations.',
  },
  {
    title: 'Lineage',
    poet: 'Margaret Walker',
    slug: 'lineage',
    publicDomain: false,
    hook: 'A granddaughter celebrates the strength and resilience of her foremothers.',
  },
  {
    title: 'The Émigrée',
    poet: 'Carol Rumens',
    slug: 'the-emigree',
    publicDomain: false,
    hook: 'A woman clings to a sunlit memory of the homeland she can never return to.',
  },
  {
    title: 'Where They Lived',
    poet: 'Norman MacCaig',
    slug: 'where-they-lived',
    publicDomain: false,
    hook: 'An empty house becomes haunted by the absence of those who once filled it.',
  },
  {
    title: 'I Remember, I Remember',
    poet: 'Thomas Hood',
    slug: 'i-remember-i-remember',
    publicDomain: true,
    hook: 'Nostalgia for the unselfconscious joys of childhood, now lost to the speaker as an adult.',
  },
  {
    title: 'Little Boy Crying',
    poet: 'Mervyn Morris',
    slug: 'little-boy-crying',
    publicDomain: false,
    hook: 'A father watches his small son rage after a smack and reflects on the pain of discipline.',
  },
  {
    title: 'To My Nine-Year-Old Self',
    poet: 'Helen Dunmore',
    slug: 'to-my-nine-year-old-self',
    publicDomain: false,
    hook: 'An adult writes an apologetic letter to her younger, more fearless self.',
  },
]

export default function OCRYouthAndAgePage() {
  return (
    <div className="space-y-10 pb-16">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'Revision', url: 'https://theenglishhub.app/revision' },
          { name: 'Poetry', url: 'https://theenglishhub.app/revision/poetry' },
          { name: 'OCR', url: 'https://theenglishhub.app/revision/poetry/ocr' },
          {
            name: 'Youth and Age',
            url: 'https://theenglishhub.app/revision/poetry/ocr/youth-and-age',
          },
        ]}
      />
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

      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-amber-500/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-amber-500/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-yellow-500/5 blur-3xl" />

        <div className="relative">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge variant="secondary">
              <Sparkles className="mr-1 size-3" />
              OCR Towards a World Unknown
            </Badge>
            <Badge className="bg-primary/10 text-primary border-primary/20">OCR</Badge>
          </div>

          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            Youth and Age
          </h1>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
            15 poems exploring childhood, growing up, parenthood and mortality. From Yeats and Keats
            to Helen Dunmore and Carol Rumens.
          </p>
        </div>
      </section>

      <StudyTools
        textName="OCR Youth and Age Poetry"
        textType="anthology"
        examBoard="OCR"
        variant="banner"
      />

      <section>
        <div className="mb-5 flex items-center gap-3">
          <Clock className="size-5 text-clay-600" />
          <h2 className="text-heading-lg font-heading text-foreground">All 15 Poems</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {POEMS.map((poem) => (
            <Link
              key={poem.slug}
              href={poem.publicDomain ? `/revision/poetry/ocr/youth-and-age/${poem.slug}` : '#'}
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
        <h2 className="text-heading-sm font-heading text-foreground">Why are some poems locked?</h2>
        <p className="mt-2 text-body-sm text-muted-foreground leading-relaxed">
          Older poems are public domain so we provide full annotated study pages. More recent poems
          are still in copyright -- for those we offer context, themes and key quotation analysis
          only. You will need a copy of the OCR <em>Towards a World Unknown</em> anthology to read
          the full text.
        </p>
      </section>

      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8 text-center">
        <BookOpen className="mx-auto mb-3 size-8 text-clay-600" />
        <h2 className="text-heading-lg font-heading text-foreground">Explore other clusters</h2>
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
