import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Info,
  PenTool,
  Target,
  Sparkles,
  ListChecks,
} from 'lucide-react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { requireIgcseBoard } from '@/app/igcse/_lib/guard'

export const metadata: Metadata = {
  title: 'IGCSE Language B course overview | Cambridge IGCSE | The English Hub',
  description:
    'Full overview of the Cambridge IGCSE Language B First Language English course — what is tested across reading and writing, and the skills each paper assesses.',
  alternates: { canonical: 'https://theenglishhub.app/igcse/cambridge/0990/syllabus' },
  robots: { index: false, follow: false },
}

const skills = [
  {
    area: 'Reading',
    title: 'Read for meaning',
    description:
      'Demonstrate understanding of explicit meanings. Select and retrieve specific information from texts.',
  },
  {
    area: 'Reading',
    title: 'Read between the lines',
    description:
      'Demonstrate understanding of implicit meanings and attitudes. Make inferences and read beyond the surface.',
  },
  {
    area: 'Reading',
    title: 'Analyse language',
    description:
      "Analyse, evaluate and develop a personal response to writers' use of language, structure and form — with short relevant quotation.",
  },
  {
    area: 'Reading',
    title: 'Select for summary',
    description:
      'Select information for specific purposes. Summarise key ideas concisely in your own words.',
  },
  {
    area: 'Writing',
    title: 'Write for purpose',
    description:
      'Articulate experience and express what is thought, felt and imagined. Sequence facts, ideas and opinions.',
  },
  {
    area: 'Writing',
    title: 'Use appropriate form and register',
    description:
      'Use language and register appropriate to audience and context. Adapt style for different writing tasks.',
  },
  {
    area: 'Writing',
    title: 'Structure writing',
    description:
      'Organise and structure ideas and opinions for deliberate effect, across paragraphs and sentences.',
  },
  {
    area: 'Writing',
    title: 'Control accuracy',
    description:
      'Use accurate spelling, punctuation and grammar to write clearly and effectively.',
  },
  {
    area: 'Writing',
    title: 'Build vocabulary range',
    description:
      'Use a varied and appropriate vocabulary, including ambitious and precise word choices.',
  },
]

const paperSummary = [
  {
    code: 'Paper 1',
    title: 'Reading',
    weight: '50%',
    marks: '80',
    time: '2 hours',
    tested: 'Comprehension, language analysis, summary',
    content:
      'Two unseen non-fiction texts (Text A and Text B). Three compulsory questions testing comprehension, language analysis and summary.',
    icon: BookOpen,
  },
  {
    code: 'Paper 2',
    title: 'Directed Writing & Composition',
    weight: '50%',
    marks: '80',
    time: '2 hours',
    tested: 'Directed writing, narrative and descriptive composition',
    content:
      'Section A: directed writing in response to a short text. Section B: extended composition — either a narrative or a descriptive task.',
    icon: PenTool,
  },
]

export default async function Cambridge0990SyllabusPage() {
  await requireIgcseBoard(['cambridge-0990'])

  return (
    <div className="space-y-10 pb-16">
      <div>
        <Button
          variant="ghost"
          size="sm"
          render={<Link href="/igcse/cambridge/0990" />}
        >
          <ArrowLeft className="size-3.5" />
          Back to IGCSE Language B hub
        </Button>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-primary/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="relative">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge className="bg-primary/10 text-primary border-primary/20">
              <Sparkles className="mr-1 size-3" />
              Cambridge IGCSE Language B
            </Badge>
            <Badge variant="secondary">Course overview</Badge>
          </div>
          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            Course overview
          </h1>
          <p className="mt-3 max-w-3xl text-body-lg text-muted-foreground">
            Everything assessed in Cambridge IGCSE Language B First Language
            English: the key skills, the two papers and what each one is
            actually testing.
          </p>
        </div>
      </section>

      {/* Revision banner */}
      <section className="flex items-start gap-3 rounded-2xl border border-primary/20 bg-primary/5 p-4 sm:items-center sm:p-5">
        <Info className="mt-0.5 size-5 shrink-0 text-primary sm:mt-0" />
        <p className="text-body-sm text-muted-foreground">
          Looking for revision content?{' '}
          <Link
            href="/igcse/cambridge/0990"
            className="font-medium text-primary underline underline-offset-2"
          >
            Visit our IGCSE Language B hub
          </Link>
        </p>
      </section>

      {/* Overview */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <h2 className="text-heading-md font-heading text-foreground">
          Overview at a glance
        </h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-4">
          <div className="rounded-xl border border-border/60 bg-muted/30 p-4">
            <p className="text-body-xs font-medium text-muted-foreground">
              Total time
            </p>
            <p className="mt-1 text-heading-sm font-heading text-foreground">
              4 hours
            </p>
          </div>
          <div className="rounded-xl border border-border/60 bg-muted/30 p-4">
            <p className="text-body-xs font-medium text-muted-foreground">
              Total marks
            </p>
            <p className="mt-1 text-heading-sm font-heading text-foreground">
              160
            </p>
          </div>
          <div className="rounded-xl border border-border/60 bg-muted/30 p-4">
            <p className="text-body-xs font-medium text-muted-foreground">
              Papers
            </p>
            <p className="mt-1 text-heading-sm font-heading text-foreground">
              2
            </p>
          </div>
          <div className="rounded-xl border border-border/60 bg-muted/30 p-4">
            <p className="text-body-xs font-medium text-muted-foreground">
              Grade scale
            </p>
            <p className="mt-1 text-heading-sm font-heading text-foreground">
              9–1
            </p>
          </div>
        </div>
      </section>

      {/* Papers */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <ListChecks className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">
            The two papers
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {paperSummary.map((p) => {
            const Icon = p.icon
            return (
              <Card key={p.code}>
                <CardHeader className="pb-3">
                  <div className="mb-3 flex items-start justify-between gap-3">
                    <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10">
                      <Icon className="size-5 text-primary" />
                    </div>
                    <Badge className="bg-primary/10 text-primary border-primary/20">
                      {p.weight}
                    </Badge>
                  </div>
                  <CardTitle className="text-heading-md font-heading leading-tight">
                    {p.code}: {p.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-body-sm text-muted-foreground leading-relaxed">
                    {p.content}
                  </p>
                  <dl className="grid gap-2 text-body-xs text-muted-foreground sm:grid-cols-2">
                    <div className="rounded-md border border-border/60 bg-muted/30 p-2">
                      <dt className="font-medium text-foreground">Duration</dt>
                      <dd>{p.time}</dd>
                    </div>
                    <div className="rounded-md border border-border/60 bg-muted/30 p-2">
                      <dt className="font-medium text-foreground">Marks</dt>
                      <dd>{p.marks}</dd>
                    </div>
                    <div className="rounded-md border border-border/60 bg-muted/30 p-2 sm:col-span-2">
                      <dt className="font-medium text-foreground">Skills tested</dt>
                      <dd>{p.tested}</dd>
                    </div>
                  </dl>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      {/* Tested skills */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <Target className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">
            Tested skills in detail
          </h2>
        </div>
        <p className="mb-5 max-w-3xl text-body-sm text-muted-foreground">
          Every question on every paper is marked against one of these nine
          skills. Knowing which skill a question targets tells you what the
          examiner is actually looking for.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="rounded-2xl border border-border/60 bg-card p-5"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 items-center justify-center rounded-lg bg-primary/10 px-2.5 text-body-sm font-semibold text-primary">
                  {skill.area}
                </span>
                <h3 className="text-body font-semibold text-foreground">
                  {skill.title}
                </h3>
              </div>
              <p className="mt-3 text-body-sm text-muted-foreground leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills tested */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <h2 className="text-heading-md font-heading text-foreground">
          Reading skills tested
        </h2>
        <ul className="mt-4 grid gap-2 text-body-sm text-muted-foreground sm:grid-cols-2">
          <li>• Identifying explicit and implicit meaning in non-fiction</li>
          <li>• Inferring attitude, tone and viewpoint</li>
          <li>• Analysing precise effects of word choice and imagery</li>
          <li>• Tracing structural decisions and their effect</li>
          <li>• Selecting relevant material under pressure</li>
          <li>• Summarising key ideas in your own words</li>
        </ul>
        <h2 className="mt-8 text-heading-md font-heading text-foreground">
          Writing skills tested
        </h2>
        <ul className="mt-4 grid gap-2 text-body-sm text-muted-foreground sm:grid-cols-2">
          <li>• Directed writing in response to a stimulus text</li>
          <li>• Matching register and form to audience and purpose</li>
          <li>• Planning and structuring extended compositions</li>
          <li>• Using varied sentence structures for effect</li>
          <li>• Precise and ambitious vocabulary choice</li>
          <li>• Accurate spelling, punctuation and grammar</li>
        </ul>
      </section>

      {/* Next */}
      <section className="rounded-2xl border border-primary/20 bg-primary/5 p-6 sm:p-8">
        <h2 className="text-heading-md font-heading text-foreground">
          Next steps
        </h2>
        <div className="mt-4 flex flex-wrap gap-2">
          <Button size="sm" render={<Link href="/igcse/cambridge/0990/paper-1" />}>
            Paper 1 Reading
            <ArrowRight className="size-3.5" />
          </Button>
          <Button
            size="sm"
            variant="outline"
            render={<Link href="/igcse/cambridge/0990/paper-2" />}
          >
            Paper 2 Writing
          </Button>
          <Button
            size="sm"
            variant="outline"
            render={<Link href="/igcse/cambridge/0990/grade-conversion" />}
          >
            Grade conversion
          </Button>
        </div>
      </section>
    </div>
  )
}
