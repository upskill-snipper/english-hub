import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, BookOpen, Sparkles, Feather, Info } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { requireIgcseBoard } from '@/app/igcse/_lib/guard'
import { BreadcrumbJsonLd, LearningResourceJsonLd } from '@/components/seo/json-ld'

export const metadata: Metadata = {
  openGraph: {
    title:
      'IGCSE Edexcel prose — Of Mice and Men, To Kill a Mockingbird, Things Fall Apart — The English Hub',
    description:
      'Pearson Edexcel IGCSE Literature 4ET1 modern prose. Three texts: Of Mice and Men, To Kill a Mockingbird, Things Fall Apart. Full study guides.',
  },
  title: 'IGCSE Edexcel prose — Of Mice and Men, To Kill a Mockingbird, Things Fall Apart',
  description:
    'Pearson Edexcel IGCSE Literature 4ET1 modern prose. Three texts: Of Mice and Men, To Kill a Mockingbird, Things Fall Apart. Full study guides.',
  alternates: { canonical: 'https://theenglishhub.app/igcse/edexcel/prose' },
}

const proseTexts = [
  {
    slug: 'to-kill-a-mockingbird',
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    year: '1960',
    blurb:
      'Scout Finch narrates her father Atticus\u2019s defence of a Black man falsely accused of assault in 1930s Alabama, tracing how racism, courage and moral education shape a Southern childhood.',
    themes: ['Racism', 'Justice', 'Innocence', 'Moral courage'],
    available: true,
  },
  {
    slug: 'of-mice-and-men',
    title: 'Of Mice and Men',
    author: 'John Steinbeck',
    year: '1937',
    blurb:
      'Two itinerant ranch hands, George and Lennie, chase the American Dream across Depression-era California in a novella shaped by loneliness, discrimination and impossible hope.',
    themes: ['American Dream', 'Loneliness', 'Friendship', 'Discrimination'],
    available: true,
  },
  {
    slug: 'things-fall-apart',
    title: 'Things Fall Apart',
    author: 'Chinua Achebe',
    year: '1958',
    blurb:
      'Okonkwo\u2019s rise and fall in the Igbo village of Umuofia maps the collision of tradition and colonial Christianity in late nineteenth-century Nigeria.',
    themes: ['Colonialism', 'Masculinity', 'Tradition', 'Change'],
    available: true,
  },
  {
    slug: 'the-whale-rider',
    title: 'The Whale Rider',
    author: 'Witi Ihimaera',
    year: '1987',
    blurb:
      'Kahu, a young M\u0101ori girl, challenges her tribe\u2019s male-only leadership traditions through her mystical bond with the sacred whales of the Ng\u0101ti Konohi people.',
    themes: ['Gender', 'Tradition', 'Identity', 'Nature'],
    available: false,
  },
  {
    slug: 'the-joy-luck-club',
    title: 'The Joy Luck Club',
    author: 'Amy Tan',
    year: '1989',
    blurb:
      'Four Chinese-American mothers and their daughters navigate cultural memory, identity and inheritance across San Francisco and pre-revolutionary China.',
    themes: ['Heritage', 'Mother\u2013daughter bonds', 'Identity', 'Migration'],
    available: false,
  },
  {
    slug: 'the-woman-in-black',
    title: 'The Woman in Black',
    author: 'Susan Hill',
    year: '1983',
    blurb:
      'Young solicitor Arthur Kipps travels to remote Eel Marsh House and encounters a vengeful spectre in a deliberately traditional English ghost story.',
    themes: ['Grief', 'Isolation', 'Fear', 'The supernatural'],
    available: false,
  },
  {
    slug: 'the-color-purple',
    title: 'The Color Purple',
    author: 'Alice Walker',
    year: '1982',
    blurb:
      'Celie\u2019s epistolary voice traces her journey from abuse and silence towards selfhood, sisterhood and spiritual liberation in the early twentieth-century American South.',
    themes: ['Race', 'Gender', 'Voice', 'Sisterhood'],
    available: false,
  },
]

export default async function ProseHubPage() {
  await requireIgcseBoard(['edexcel-igcse'])

  return (
    <div className="space-y-10 pb-16">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'IGCSE', url: 'https://theenglishhub.app/igcse' },
          { name: 'Edexcel IGCSE Literature', url: 'https://theenglishhub.app/igcse/edexcel' },
          { name: 'Prose', url: 'https://theenglishhub.app/igcse/edexcel/prose' },
        ]}
      />
      <LearningResourceJsonLd
        name="Edexcel IGCSE Literature prose section"
        description="Three modern prose texts — Of Mice and Men, To Kill a Mockingbird, Things Fall Apart — for Pearson Edexcel IGCSE Literature 4ET1."
        educationalLevel="IGCSE"
        learningResourceType="Study guide"
        inLanguage="en-GB"
        url="https://theenglishhub.app/igcse/edexcel/prose"
        audienceRole="student"
        isAccessibleForFree={true}
      />
      {/* Breadcrumb */}
      <div>
        <Button variant="ghost" size="sm" render={<Link href="/igcse/edexcel" />}>
          <ArrowLeft className="size-3.5" />
          Back to Edexcel IGCSE Literature
        </Button>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-primary/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="relative">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge className="border-primary/20 bg-primary/10 text-primary">
              <Sparkles className="mr-1 size-3" />
              Edexcel IGCSE Literature
            </Badge>
          </div>
          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            Modern Prose
          </h1>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
            Pick your set prose text to explore plot, characters, themes, context and a curated bank
            of short key quotations. Each guide is built around understanding the text, analysing
            language and structure, and comparing texts.
          </p>
        </div>
      </section>

      {/* Copyright notice */}
      <section className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-4 sm:p-5">
        <div className="flex gap-3">
          <Info className="mt-0.5 size-5 shrink-0 text-amber-600 dark:text-clay-600" />
          <div className="space-y-1">
            <h2 className="text-body-sm font-semibold text-foreground">
              Key quotations only — read the full text
            </h2>
            <p className="text-body-xs text-muted-foreground leading-relaxed">
              These texts are all in copyright. Our guides include short extracts for fair-dealing
              study and analysis only. Students should always read the complete novel alongside
              these notes.
            </p>
            <p className="mt-2 text-body-xs text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Rights notice.</strong> All prose set texts on
              this hub remain in copyright &mdash; including Hill&rsquo;s{' '}
              <em>The Woman in Black</em> (&copy; Vintage / Penguin Random House). Quotations on
              individual set-text pages are short fair-dealing extracts under CDPA 1988 &sect;30
              (criticism, review, quotation). For full text, students should consult the licensed
              school edition.
            </p>
          </div>
        </div>
      </section>

      {/* Text grid */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <BookOpen className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">Choose your set text</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {proseTexts.map((t) => (
            <Card
              key={t.slug}
              className="group relative flex flex-col overflow-hidden transition-all duration-200 hover:border-border hover:shadow-card-hover"
            >
              <CardHeader className="pb-3">
                <div className="mb-3 flex items-start justify-between gap-3">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10">
                    <Feather className="size-5 text-primary" />
                  </div>
                  {t.available ? (
                    <Badge className="border-primary/20 bg-primary/10 text-primary">
                      Available
                    </Badge>
                  ) : (
                    <Badge variant="secondary">Coming soon</Badge>
                  )}
                </div>
                <CardTitle className="text-heading-md font-heading leading-tight">
                  {t.title}
                </CardTitle>
                <CardDescription className="text-body-sm">
                  {t.author} · {t.year}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col gap-4">
                <p className="text-body-sm leading-relaxed text-muted-foreground">{t.blurb}</p>
                <div className="flex flex-wrap gap-1.5">
                  {t.themes.map((theme) => (
                    <span
                      key={theme}
                      className="inline-flex items-center rounded-md border border-border/60 bg-muted/40 px-2 py-0.5 text-body-xs text-muted-foreground"
                    >
                      {theme}
                    </span>
                  ))}
                </div>
                <div className="mt-auto pt-2">
                  {t.available ? (
                    <Button
                      variant="default"
                      size="sm"
                      className="w-full"
                      render={<Link href={`/igcse/edexcel/prose/${t.slug}`} />}
                    >
                      Open study guide
                      <ArrowRight className="size-3.5" />
                    </Button>
                  ) : (
                    <Button variant="outline" size="sm" className="w-full" disabled>
                      Coming soon
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
