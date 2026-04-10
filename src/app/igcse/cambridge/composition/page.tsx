import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  PenLine,
  Sparkles,
  Eye,
  BookOpen,
  Users,
  MessageSquare,
  Zap,
  Palette,
  Feather,
  ScrollText,
  ListChecks,
  GraduationCap,
  Type,
  Layers,
  Award,
} from 'lucide-react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Cambridge IGCSE Composition — The English Hub',
  description:
    'Master Cambridge IGCSE 0500/0990 Paper 2 Section B composition. Descriptive and narrative writing techniques, Grade 9 model answers, practice prompts and mark scheme breakdown.',
  alternates: {
    canonical: 'https://theenglishhub.app/igcse/cambridge/composition',
  },
}

const descriptiveSections = [
  {
    title: 'Sensory language',
    description:
      'Use all five senses to anchor your reader inside the scene. Move beyond sight to sound, smell, touch and taste.',
    href: '/igcse/cambridge/composition/descriptive/sensory-language',
    icon: Eye,
  },
  {
    title: 'Extended metaphors',
    description:
      'Sustain a single controlling image through paragraphs for a unified, mature descriptive voice.',
    href: '/igcse/cambridge/composition/descriptive/extended-metaphors',
    icon: Palette,
  },
  {
    title: 'Structure (cinematic zoom)',
    description:
      'Shape a scene with a wide, mid, close and inner progression so your piece feels crafted, not listed.',
    href: '/igcse/cambridge/composition/descriptive/structure',
    icon: Layers,
  },
  {
    title: 'Grade 9 model answers',
    description:
      'Three annotated top-band descriptions with examiner commentary on vocabulary, imagery and control.',
    href: '/igcse/cambridge/composition/descriptive/model-answers',
    icon: Award,
  },
  {
    title: '30 practice prompts',
    description:
      'A busy market, an empty beach, a childhood home and 27 more Cambridge-style descriptive titles.',
    href: '/igcse/cambridge/composition/descriptive/practice-prompts',
    icon: ListChecks,
  },
]

const narrativeSections = [
  {
    title: 'Story structure',
    description:
      'Freytag’s triangle, the five-part arc and in medias res openings for a 600–900 word short story.',
    href: '/igcse/cambridge/composition/narrative/structure',
    icon: ScrollText,
  },
  {
    title: 'Character creation',
    description:
      'Build rounded characters fast with show-don’t-tell, interior monologue and the iceberg principle.',
    href: '/igcse/cambridge/composition/narrative/character',
    icon: Users,
  },
  {
    title: 'Dialogue',
    description:
      'Punctuation rules, pacing, subtext and the four jobs every line of speech should do.',
    href: '/igcse/cambridge/composition/narrative/dialogue',
    icon: MessageSquare,
  },
  {
    title: 'Tension and pacing',
    description:
      'Slow the camera, withhold information and deploy cliffhangers without veering into melodrama.',
    href: '/igcse/cambridge/composition/narrative/tension',
    icon: Zap,
  },
  {
    title: 'Grade 9 model answers',
    description:
      'Three annotated top-band stories with examiner commentary on voice, structure and control.',
    href: '/igcse/cambridge/composition/narrative/model-answers',
    icon: Award,
  },
  {
    title: '30 practice prompts',
    description:
      'Cambridge-style narrative titles from “The Visitor” to “Too Late”, graded by difficulty.',
    href: '/igcse/cambridge/composition/narrative/practice-prompts',
    icon: ListChecks,
  },
]

const craftSections = [
  {
    title: 'Vocabulary upgrade',
    description:
      'Replace tired verbs and adjectives with precise alternatives: said → murmured, big → colossal.',
    href: '/igcse/cambridge/composition/vocabulary-upgrade',
    icon: Type,
  },
  {
    title: 'Sentence variety',
    description:
      'Simple, compound, complex and compound-complex sentences plus rhetorical patterning.',
    href: '/igcse/cambridge/composition/sentence-variety',
    icon: Feather,
  },
  {
    title: 'Mark scheme breakdown',
    description:
      'The 16 + 24 split: content and structure vs style and accuracy, with band descriptors.',
    href: '/igcse/cambridge/composition/mark-scheme',
    icon: GraduationCap,
  },
]

export default function CompositionHubPage() {
  return (
    <div className="space-y-10 pb-16">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-primary/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-primary/5 blur-3xl" />

        <div className="relative">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge className="bg-primary/10 text-primary border-primary/20">
              <Sparkles className="mr-1 size-3" />
              Cambridge IGCSE
            </Badge>
            <Badge variant="secondary">Paper 2 — Section B</Badge>
            <Badge variant="secondary">40 marks</Badge>
          </div>
          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            Composition
          </h1>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
            Cambridge IGCSE <strong className="text-foreground">0500</strong>{' '}
            and <strong className="text-foreground">0990</strong> Paper 2
            Section B asks you to write a descriptive or narrative composition
            of <strong className="text-foreground">350–450 words</strong>. It
            is worth <strong className="text-foreground">40 marks</strong> —
            16 for content and structure, 24 for style and accuracy. This hub
            breaks the task into techniques you can learn and rehearse.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button
              size="lg"
              render={<Link href="/igcse/cambridge/composition/descriptive" />}
            >
              <PenLine className="size-4" />
              Descriptive writing
              <ArrowRight className="size-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              render={<Link href="/igcse/cambridge/composition/narrative" />}
            >
              <BookOpen className="size-4" />
              Narrative writing
            </Button>
          </div>
        </div>
      </section>

      {/* Descriptive */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <PenLine className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">
            Descriptive writing
          </h2>
          <Badge variant="secondary" className="ml-auto">
            5 guides
          </Badge>
        </div>
        <p className="mb-6 max-w-3xl text-body-sm text-muted-foreground">
          Description is not about plot. It is about holding a single moment
          still long enough for the reader to feel, smell and hear it.
          Cambridge rewards specificity, control and sustained imagery.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {descriptiveSections.map((s) => {
            const Icon = s.icon
            return (
              <Card
                key={s.href}
                className="group flex flex-col transition-all duration-200 hover:border-border hover:shadow-card-hover"
              >
                <CardHeader className="pb-3">
                  <div className="mb-3 flex size-10 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="size-5 text-primary" />
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
                    <Button
                      variant="ghost"
                      size="sm"
                      render={<Link href={s.href} />}
                    >
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

      {/* Narrative */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <BookOpen className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">
            Narrative writing
          </h2>
          <Badge variant="secondary" className="ml-auto">
            6 guides
          </Badge>
        </div>
        <p className="mb-6 max-w-3xl text-body-sm text-muted-foreground">
          A Cambridge short story is not a novel in miniature. It is a single
          scene, a single turn, a single change. These guides show you how to
          compress character, tension and structure into 450 words.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {narrativeSections.map((s) => {
            const Icon = s.icon
            return (
              <Card
                key={s.href}
                className="group flex flex-col transition-all duration-200 hover:border-border hover:shadow-card-hover"
              >
                <CardHeader className="pb-3">
                  <div className="mb-3 flex size-10 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="size-5 text-primary" />
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
                    <Button
                      variant="ghost"
                      size="sm"
                      render={<Link href={s.href} />}
                    >
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

      {/* Craft */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <Feather className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">
            Craft and assessment
          </h2>
          <Badge variant="secondary" className="ml-auto">
            3 guides
          </Badge>
        </div>
        <p className="mb-6 max-w-3xl text-body-sm text-muted-foreground">
          The 24-mark style and accuracy pillar rewards range and control.
          These guides target the specific moves that push compositions from
          the middle band into the top band.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {craftSections.map((s) => {
            const Icon = s.icon
            return (
              <Card
                key={s.href}
                className="group flex flex-col transition-all duration-200 hover:border-border hover:shadow-card-hover"
              >
                <CardHeader className="pb-3">
                  <div className="mb-3 flex size-10 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="size-5 text-primary" />
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
                    <Button
                      variant="ghost"
                      size="sm"
                      render={<Link href={s.href} />}
                    >
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
    </div>
  )
}
