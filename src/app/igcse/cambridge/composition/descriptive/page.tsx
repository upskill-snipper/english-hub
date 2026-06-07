import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  PenLine,
  Sparkles,
  Eye,
  Palette,
  Layers,
  Award,
  ListChecks,
  ChevronLeft,
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { requireIgcseBoard } from '@/app/igcse/_lib/guard'
import { t } from '@/lib/i18n/t'

export const metadata: Metadata = {
  openGraph: {
    title: 'Descriptive Writing - Cambridge IGCSE Composition',
    description:
      'Cambridge IGCSE descriptive writing techniques. Sensory language, extended metaphors, cinematic zoom structure, Grade 9 model answers and 30 practice prompts.',
  },
  title: 'Descriptive Writing - Cambridge IGCSE Composition',
  description:
    'Cambridge IGCSE descriptive writing techniques. Sensory language, extended metaphors, cinematic zoom structure, Grade 9 model answers and 30 practice prompts.',
  alternates: {
    canonical: 'https://theenglishhub.app/igcse/cambridge/composition/descriptive',
  },
}

const sections = [
  {
    title: 'Sensory language',
    description:
      'The five-sense checklist. How to describe without relying only on sight, and how to weave senses together into a single image.',
    href: '/igcse/cambridge/composition/descriptive/sensory-language',
    icon: Eye,
    level: 'Foundation',
  },
  {
    title: 'Extended metaphors',
    description:
      'Build a single controlling image - the city as a sleeping animal, the storm as an orchestra - and sustain it across paragraphs.',
    href: '/igcse/cambridge/composition/descriptive/extended-metaphors',
    icon: Palette,
    level: 'Intermediate',
  },
  {
    title: 'Structure (cinematic zoom)',
    description:
      'The wide-mid-close-inner move, time shifts, and the rule of returning to your opening image for a crafted shape.',
    href: '/igcse/cambridge/composition/descriptive/structure',
    icon: Layers,
    level: 'Intermediate',
  },
  {
    title: 'Grade 9 model answers',
    description:
      'Three full top-band descriptions with paragraph-by-paragraph examiner annotations showing exactly what is being rewarded.',
    href: '/igcse/cambridge/composition/descriptive/model-answers',
    icon: Award,
    level: 'Advanced',
  },
  {
    title: '30 practice prompts',
    description:
      'Cambridge-style titles graded by difficulty - from a crowded market to a derelict fairground - with planning frames.',
    href: '/igcse/cambridge/composition/descriptive/practice-prompts',
    icon: ListChecks,
    level: 'All levels',
  },
]

export default async function DescriptivePage() {
  await requireIgcseBoard(['cambridge-0500', 'cambridge-0990'])

  return (
    <div className="space-y-10 pb-16">
      <Button variant="ghost" size="sm" render={<Link href="/igcse/cambridge/composition" />}>
        <ChevronLeft className="size-3.5" />
        {await t('igcse.page.back_to_composition')}
      </Button>

      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-primary/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="relative">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge className="bg-primary/10 text-primary border-primary/20">
              <Sparkles className="mr-1 size-3" />
              {await t('igcse.cambridge.badge.cambridge_igcse')}
            </Badge>
            <Badge variant="secondary">Descriptive</Badge>
          </div>
          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            Descriptive writing
          </h1>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
            A descriptive composition should make the examiner see a place or moment in sharp,
            unfamiliar detail. Plot is not required. What is required is{' '}
            <strong className="text-foreground">precision, variety and sustained control</strong> -
            the three words Cambridge examiner reports return to every year.
          </p>
        </div>
      </section>

      <section>
        <div className="mb-5 flex items-center gap-3">
          <PenLine className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">
            Five descriptive techniques
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sections.map((s) => {
            const Icon = s.icon
            return (
              <Card
                key={s.href}
                className="group flex flex-col transition-all duration-200 hover:border-border hover:shadow-card-hover"
              >
                <CardHeader className="pb-3">
                  <div className="mb-3 flex items-start justify-between">
                    <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="size-5 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {s.level}
                    </Badge>
                  </div>
                  <CardTitle className="text-heading-sm font-heading leading-tight">
                    {s.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col gap-4">
                  <CardDescription className="text-body-sm leading-relaxed">
                    {s.description}
                  </CardDescription>
                  <div className="mt-auto">
                    <Button variant="ghost" size="sm" render={<Link href={s.href} />}>
                      Open guide
                      <ArrowRight className="size-3.5" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <h2 className="text-heading-md font-heading text-foreground">What examiners reward</h2>
        <ul className="mt-4 space-y-3 text-body-sm text-muted-foreground">
          <li className="flex gap-3">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
            <span>
              <strong className="text-foreground">Specific, unusual detail</strong> in place of
              generic adjectives. &ldquo;A woman in a mustard cardigan&rdquo; earns where &ldquo;an
              old lady&rdquo; does not.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
            <span>
              <strong className="text-foreground">Sustained imagery</strong> - a metaphor that
              returns, evolves or inverts rather than appearing once and vanishing.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
            <span>
              <strong className="text-foreground">Controlled shape</strong> - an opening that is not
              the same as the end. Movement through space, time or perspective.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
            <span>
              <strong className="text-foreground">Range of sentence structures</strong>, including
              deliberate short sentences for emphasis.
            </span>
          </li>
        </ul>
      </section>
    </div>
  )
}
