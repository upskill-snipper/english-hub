import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, BookOpen, Sparkles, Drama, Info } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { requireIgcseBoard } from '@/app/igcse/_lib/guard'
import { BreadcrumbJsonLd, LearningResourceJsonLd } from '@/components/seo/json-ld'

export const metadata: Metadata = {
  title:
    'IGCSE Edexcel drama — An Inspector Calls, View from the Bridge, Curious Incident — The English Hub',
  description:
    'Pearson Edexcel IGCSE Literature 4ET1 modern drama. Three plays: An Inspector Calls, A View from the Bridge, The Curious Incident. Full study guides.',
  alternates: { canonical: 'https://theenglishhub.app/igcse/edexcel/drama' },
}

const dramaTexts = [
  {
    slug: 'an-inspector-calls',
    title: 'An Inspector Calls',
    author: 'J. B. Priestley',
    year: '1945 (set 1912)',
    blurb:
      'A morality play about the Birling family of wealthy industrialists, whose smug dinner party is interrupted by the mysterious Inspector Goole and his investigation into a young woman\u2019s suicide.',
    themes: ['Social responsibility', 'Class', 'Gender', 'Age vs youth'],
    available: true,
  },
  {
    slug: 'a-view-from-the-bridge',
    title: 'A View from the Bridge',
    author: 'Arthur Miller',
    year: '1955',
    blurb:
      'A modern Greek tragedy set in Red Hook, Brooklyn. Longshoreman Eddie Carbone\u2019s repressed feelings for his niece Catherine destroy him when Italian immigrant cousins arrive in his home.',
    themes: ['Honour', 'Masculinity', 'Law vs justice', 'Immigration'],
    available: true,
  },
  {
    slug: 'curious-incident',
    title: 'The Curious Incident of the Dog in the Night-Time',
    author: 'Simon Stephens (Mark Haddon\u2019s novel)',
    year: '2012 play',
    blurb:
      'A stage adaptation of Haddon\u2019s novel, narrated through the perspective of Christopher Boone, a fifteen-year-old with a neurodivergent way of seeing the world, as he investigates the killing of his neighbour\u2019s dog.',
    themes: ['Autism', 'Family', 'Truth', 'Independence'],
    available: true,
  },
  {
    slug: 'death-of-a-salesman',
    title: 'Death of a Salesman',
    author: 'Arthur Miller',
    year: '1949',
    blurb:
      'Willy Loman, an ageing travelling salesman, collapses under the weight of a failing career, a strained marriage and his disappointed sons in one of the twentieth century\u2019s most influential tragedies.',
    themes: ['American Dream', 'Family', 'Identity', 'Masculinity'],
    available: false,
  },
]

export default async function DramaHubPage() {
  await requireIgcseBoard(['edexcel-igcse'])

  return (
    <div className="space-y-10 pb-16">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'IGCSE', url: 'https://theenglishhub.app/igcse' },
          { name: 'Edexcel IGCSE Literature', url: 'https://theenglishhub.app/igcse/edexcel' },
          { name: 'Drama', url: 'https://theenglishhub.app/igcse/edexcel/drama' },
        ]}
      />
      <LearningResourceJsonLd
        name="Edexcel IGCSE Literature drama section"
        description="Three modern drama texts — An Inspector Calls, A View from the Bridge, The Curious Incident — for Pearson Edexcel IGCSE Literature 4ET1."
        educationalLevel="IGCSE"
        learningResourceType="Study guide"
        inLanguage="en-GB"
        url="https://theenglishhub.app/igcse/edexcel/drama"
        audienceRole="student"
        isAccessibleForFree={true}
      />
      <div>
        <Button variant="ghost" size="sm" render={<Link href="/igcse/edexcel" />}>
          <ArrowLeft className="size-3.5" />
          Back to Edexcel IGCSE Literature
        </Button>
      </div>

      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-primary/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="relative">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge className="border-primary/20 bg-primary/10 text-primary">
              <Sparkles className="mr-1 size-3" />
              Edexcel IGCSE IGCSE Literature
            </Badge>
            <Badge variant="secondary">Paper 2 · Section A</Badge>
          </div>
          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            Modern Drama
          </h1>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
            Pick your set modern drama text for full study notes covering plot, characters, themes,
            context and a bank of short key quotations built around Understanding the text,
            Analysing language and structure, and Comparing texts.
          </p>
        </div>
      </section>

      <section className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-4 sm:p-5">
        <div className="flex gap-3">
          <Info className="mt-0.5 size-5 shrink-0 text-amber-600 dark:text-clay-600" />
          <div className="space-y-1">
            <h2 className="text-body-sm font-semibold text-foreground">
              Key quotations only — read the full text
            </h2>
            <p className="text-body-xs text-muted-foreground leading-relaxed">
              These plays are all in copyright. Our guides include short extracts for fair-dealing
              study only. Students should always read or watch the full play alongside these notes.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="mb-5 flex items-center gap-3">
          <BookOpen className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">Choose your set text</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {dramaTexts.map((t) => (
            <Card
              key={t.slug}
              className="group relative flex flex-col overflow-hidden transition-all duration-200 hover:border-border hover:shadow-card-hover"
            >
              <CardHeader className="pb-3">
                <div className="mb-3 flex items-start justify-between gap-3">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10">
                    <Drama className="size-5 text-primary" />
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
                      render={<Link href={`/igcse/edexcel/drama/${t.slug}`} />}
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
