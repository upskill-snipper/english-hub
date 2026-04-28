'use client'

import Link from 'next/link'
import { ArrowLeft, ArrowRight, Heart, Sparkles, BookOpen, Lock, CheckCircle2 } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import StudyTools from '@/components/study/StudyTools'

interface Poem {
  title: string
  poet: string
  slug: string
  publicDomain: boolean
  hook: string
}

const POEMS: Poem[] = [
  {
    title: 'She Walks in Beauty',
    poet: 'Lord Byron',
    slug: 'she-walks-in-beauty',
    publicDomain: true,
    hook: 'A celebration of harmonious beauty that combines outer grace with inner virtue.',
  },
  {
    title: 'A Child to his Sick Grandfather',
    poet: 'Joanna Baillie',
    slug: 'a-child-to-his-sick-grandfather',
    publicDomain: true,
    hook: 'A young child speaks tenderly to a dying grandfather, blending innocence with grief.',
  },
  {
    title: 'She Dwelt Among the Untrodden Ways',
    poet: 'William Wordsworth',
    slug: 'she-dwelt-among-the-untrodden-ways',
    publicDomain: true,
    hook: 'An elegy for an unknown country girl whose death moves only the speaker.',
  },
  {
    title: 'A Complaint',
    poet: 'William Wordsworth',
    slug: 'a-complaint',
    publicDomain: true,
    hook: 'Wordsworth mourns the cooling of a once-warm friendship.',
  },
  {
    title: 'Neutral Tones',
    poet: 'Thomas Hardy',
    slug: 'neutral-tones',
    publicDomain: true,
    hook: 'A bleak winter scene mirrors the death of a relationship.',
  },
  {
    title: 'Long Distance II',
    poet: 'Tony Harrison',
    slug: 'long-distance-ii',
    publicDomain: false,
    hook: "A father's grief, a son's frustration, and the comforting illusions we keep alive.",
  },
  {
    title: 'The Manhunt',
    poet: 'Simon Armitage',
    slug: 'the-manhunt',
    publicDomain: false,
    hook: 'A wife maps the physical and psychological wounds of her soldier husband.',
  },
  {
    title: 'Sonnet 43',
    poet: 'Elizabeth Barrett Browning',
    slug: 'sonnet-43',
    publicDomain: true,
    hook: '"How do I love thee? Let me count the ways" -- one of English literature\'s most famous declarations of love.',
  },
  {
    title: 'Valentine',
    poet: 'Carol Ann Duffy',
    slug: 'valentine',
    publicDomain: false,
    hook: 'An onion as an unconventional symbol of honest, painful love.',
  },
  {
    title: 'One Flesh',
    poet: 'Elizabeth Jennings',
    slug: 'one-flesh',
    publicDomain: false,
    hook: 'A daughter observes the emotional distance between her aged parents.',
  },
  {
    title: 'i wanna be yours',
    poet: 'John Cooper Clarke',
    slug: 'i-wanna-be-yours',
    publicDomain: false,
    hook: 'A punk-poet promises devotion through everyday objects in playful, repeated imagery.',
  },
  {
    title: "Love's Dog",
    poet: 'Jen Hadfield',
    slug: 'loves-dog',
    publicDomain: false,
    hook: 'A list-poem cataloguing what the speaker loves and hates about love itself.',
  },
  {
    title: 'Nettles',
    poet: 'Vernon Scannell',
    slug: 'nettles',
    publicDomain: false,
    hook: "A father's anger after his son is stung becomes a meditation on protective love and life's pain.",
  },
  {
    title: "The Farmer's Bride",
    poet: 'Charlotte Mew',
    slug: 'the-farmers-bride',
    publicDomain: true,
    hook: "A frustrated farmer narrates his wife's flight from him in a chilling rural monologue.",
  },
  {
    title: 'Taller',
    poet: 'Toby Campion',
    slug: 'taller',
    publicDomain: false,
    hook: 'A young speaker reflects on identity, family and growing into himself.',
  },
]

export default function OCRLoveAndRelationshipsPage() {
  return (
    <div className="space-y-10 pb-16">
      {/* ── Back link ───────────────────────────────────────────────── */}
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

      {/* ── Hero ────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-pink-500/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-pink-500/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-rose-500/5 blur-3xl" />

        <div className="relative">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge variant="secondary">
              <Sparkles className="mr-1 size-3" />
              OCR Towards a World Unknown
            </Badge>
            <Badge className="bg-primary/10 text-primary border-primary/20">OCR</Badge>
          </div>

          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            Love and Relationships
          </h1>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
            15 poems exploring romantic, familial and complex relationships across more than two
            centuries. From Byron's celebration of beauty to John Cooper Clarke's punk devotion.
          </p>
        </div>
      </section>

      <StudyTools
        textName="OCR Love and Relationships"
        textType="anthology"
        examBoard="OCR"
        variant="banner"
      />

      {/* ── Poem grid ───────────────────────────────────────────────── */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <Heart className="size-5 text-pink-400" />
          <h2 className="text-heading-lg font-heading text-foreground">All 15 Poems</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {POEMS.map((poem) => (
            <Link
              key={poem.slug}
              href={
                poem.publicDomain ? `/revision/poetry/ocr/love-and-relationships/${poem.slug}` : '#'
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
                {poem.publicDomain ? (
                  <Badge variant="outline" className="text-[0.65rem]">
                    Full study page
                  </Badge>
                ) : (
                  <Badge variant="outline" className="text-[0.65rem]">
                    Key quotations only
                  </Badge>
                )}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Copyright note ──────────────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-muted/30 p-5 sm:p-6">
        <h2 className="text-heading-sm font-heading text-foreground">Rights notice</h2>
        <p className="mt-2 text-body-sm text-muted-foreground leading-relaxed">
          Older poems by Byron, Wordsworth, Hardy, Browning and Mew are in the public domain, so we
          provide full annotated study pages. More recent poems in this cluster remain in copyright
          &mdash; Harrison&rsquo;s <em>Long Distance II</em> (&copy; Bloodaxe Books),
          Armitage&rsquo;s <em>The Manhunt</em> (&copy; Faber &amp; Faber), Duffy&rsquo;s{' '}
          <em>Valentine</em> (&copy; Picador / Pan Macmillan), Jennings&rsquo;s <em>One Flesh</em>{' '}
          (&copy; Carcanet Press), Cooper Clarke&rsquo;s <em>i wanna be yours</em> (&copy; Vintage /
          Penguin Random House), Hadfield&rsquo;s <em>Love&rsquo;s Dog</em> (&copy; Bloodaxe Books),
          Scannell&rsquo;s <em>Nettles</em> (&copy; estate of Vernon Scannell) and Campion&rsquo;s{' '}
          <em>Taller</em> (&copy; Burning Eye Books). Quotations are short fair-dealing extracts
          under CDPA 1988 &sect;30 (criticism, review, quotation) &mdash; for full text, you will
          need a copy of the board-licensed OCR <em>Towards a World Unknown</em> anthology (J352,
          ISBN 9781398384408).
        </p>
      </section>

      {/* ── Back CTA ────────────────────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8 text-center">
        <BookOpen className="mx-auto mb-3 size-8 text-pink-400" />
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
