import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowLeft,
  Sparkles,
  Target,
  Layers,
  ScanText,
  PencilRuler,
  Quote,
  Compass,
  AlertTriangle,
  CheckCircle2,
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { requireIgcseBoard } from '@/app/igcse/_lib/guard'

export const metadata: Metadata = {
  openGraph: {
    title: 'Edexcel IGCSE Literature Exam Technique - The English Hub',
    description:
      'Paper 1 and Paper 2 exam technique for Pearson Edexcel IGCSE English Literature. Comparison, extract-based and essay-style question strategies.',
  },
  title: 'Edexcel IGCSE Literature Exam Technique',
  description:
    'Paper 1 and Paper 2 exam technique for Pearson Edexcel IGCSE English Literature. Comparison, extract-based and essay-style question strategies.',
  alternates: {
    canonical: 'https://theenglishhub.app/igcse/edexcel/exam-technique',
  },
}

const questionTypes = [
  {
    icon: Layers,
    title: 'Comparison questions',
    subtitle: 'Paper 1, Section B - Anthology poetry',
    description:
      'You are given one named anthology poem and asked to compare how another poem of your choice from the anthology presents a particular idea, theme or feeling.',
    technique: [
      'Plan a thesis that captures similarity and difference in one sentence.',
      'Structure four integrated paragraphs, not two separate mini-essays.',
      'Use connective phrases: "whereas", "similarly", "by contrast", "in the same way".',
      'Compare writers\u2019 methods (language and structure) and effects, not just subject matter.',
      'Keep comparison front and centre: almost every paragraph should reference both poems.',
    ],
    ao: ['Understanding the text', 'Analysing language and structure', 'Comparing texts'],
  },
  {
    icon: ScanText,
    title: 'Extract-based questions',
    subtitle: 'Paper 2, Section A - Modern Drama',
    description:
      'You are given a short extract from the studied drama text and asked to analyse how the writer presents a character, theme or dramatic moment in the extract and wider play.',
    technique: [
      'Spend 5 minutes annotating the extract before writing.',
      'Anchor every paragraph in a specific quotation or stage direction from the extract.',
      'Zoom out regularly - show how the moment connects to the whole play.',
      'Track dramatic methods: stage directions, dialogue, silence, lighting.',
      'Balance extract and wider play - roughly 60% extract, 40% elsewhere.',
    ],
    ao: ['Understanding the text', 'Analysing language and structure'],
  },
  {
    icon: PencilRuler,
    title: 'Essay-style questions',
    subtitle: 'Paper 1 Section C and Paper 2 Section B',
    description:
      'Closed-book essays on modern prose and Shakespeare. You must recall quotations from memory and structure a sustained argument in response to a thematic prompt.',
    technique: [
      'Memorise 20-30 short, flexible quotations per text - prioritise range over length.',
      'Open with a clear, argumentative thesis. Avoid plot summary.',
      'Use a five-paragraph PEEAL (Point, Evidence, Explain, Analyse, Link) structure.',
      'Weave context into analysis, not a separate paragraph.',
      'Keep an eye on the time - aim to finish with 3-5 minutes to review.',
    ],
    ao: ['Understanding the text', 'Analysing language and structure', 'Relating to context'],
  },
  {
    icon: Quote,
    title: 'Unseen poetry',
    subtitle: 'Paper 1, Section A',
    description:
      'You are given a previously unseen poem and asked to explore how the poet uses language, structure and form to create meaning.',
    technique: [
      'Read the poem twice before annotating - first for sense, then for method.',
      'Identify the core feeling or argument, then track how it develops.',
      'Comment on form (sonnet, free verse, dramatic monologue) where relevant.',
      'Use subject terminology precisely - enjambment, caesura, sibilance.',
      'Write analytically, not descriptively: always link method to effect.',
    ],
    ao: ['Understanding the text', 'Analysing language and structure'],
  },
]

const pitfalls = [
  {
    title: 'Feature spotting without effect',
    detail:
      'Naming "alliteration" without explaining how it creates meaning scores very few language-and-structure marks.',
  },
  {
    title: 'Over-quoting',
    detail:
      'Short embedded quotations outscore block quotations. Use three to five words at a time and analyse closely.',
  },
  {
    title: 'Ignoring the question wording',
    detail:
      'Every sentence in your essay should push the precise command of the question (e.g. "how does the writer present tension").',
  },
  {
    title: 'Context as biography',
    detail:
      'The context strand wants contextual analysis, not author life-story. Link historical or social ideas directly to the writer\u2019s choices.',
  },
  {
    title: 'Uneven comparison',
    detail:
      'In Paper 1 Section B, spending 75% of your answer on one poem caps your comparison mark. Alternate texts paragraph by paragraph.',
  },
  {
    title: 'Running out of time',
    detail:
      'Work to strict timings per section. Two half-finished answers will outscore one polished answer and one blank page.',
  },
]

const checklist = [
  'Thesis statement in the opening paragraph',
  'Every paragraph tracks back to the question wording',
  'Short, embedded, well-chosen quotations (3-5 words)',
  'Writer\u2019s methods named and effects explained (language and structure)',
  'Relevant context woven into analysis (where assessed)',
  'Comparison integrated paragraph by paragraph (anthology only)',
  'Clear conclusion that returns to the thesis',
  'Time for a final read-through and correction',
]

export default async function EdexcelExamTechniquePage() {
  await requireIgcseBoard(['edexcel-igcse'])

  return (
    <div className="space-y-10 pb-16">
      {/* ── Back link ───────────────────────────────────────────────── */}
      <div>
        <Button
          variant="ghost"
          size="sm"
          className="mb-3 -ml-2 text-muted-foreground"
          render={<Link href="/igcse/edexcel" />}
        >
          <ArrowLeft className="size-3.5" />
          Back to Edexcel IGCSE
        </Button>
      </div>

      {/* ── Hero ────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-primary/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-primary/5 blur-3xl" />

        <div className="relative">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge variant="secondary">
              <Sparkles className="mr-1 size-3" />
              Exam technique
            </Badge>
            <Badge className="bg-primary/10 text-primary border-primary/20">
              Edexcel IGCSE Literature
            </Badge>
          </div>
          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            IGCSE Literature Exam Technique
          </h1>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
            Specific strategies for the three question types that show up in Edexcel IGCSE English
            Literature - comparison, extract-based and essay-style questions. Each approach is
            mapped to what examiners are actually rewarding.
          </p>
        </div>
      </section>

      {/* ── Question types ─────────────────────────────────────────── */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <Target className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">
            Techniques by question type
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {questionTypes.map((q) => {
            const Icon = q.icon
            return (
              <Card
                key={q.title}
                className="flex flex-col transition-all duration-200 hover:border-border hover:shadow-card-hover"
              >
                <CardHeader className="pb-3">
                  <div className="mb-3 flex items-start justify-between gap-3">
                    <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10">
                      <Icon className="size-5 text-primary" />
                    </div>
                    <div className="flex flex-wrap justify-end gap-1">
                      {q.ao.map((ao) => (
                        <Badge key={ao} className="bg-primary/10 text-primary border-primary/20">
                          {ao}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <CardTitle className="text-heading-md font-heading">{q.title}</CardTitle>
                  <CardDescription>{q.subtitle}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col gap-4">
                  <p className="text-body-sm text-muted-foreground leading-relaxed">
                    {q.description}
                  </p>
                  <ul className="space-y-2 text-body-sm text-muted-foreground">
                    {q.technique.map((t) => (
                      <li key={t} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      {/* ── Common pitfalls ────────────────────────────────────────── */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <AlertTriangle className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">Common pitfalls to avoid</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {pitfalls.map((p) => (
            <Card key={p.title}>
              <CardContent className="flex flex-col gap-2 p-5">
                <h3 className="text-body-sm font-semibold text-foreground">{p.title}</h3>
                <p className="text-body-xs text-muted-foreground leading-relaxed">{p.detail}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ── Final checklist ────────────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <div className="mb-4 flex items-center gap-3">
          <Compass className="size-5 text-primary" />
          <h2 className="text-heading-md font-heading text-foreground">Pre-hand-in checklist</h2>
        </div>
        <p className="text-body-sm text-muted-foreground mb-4">
          Run through this checklist in the last two minutes of every exam answer. If anything is
          missing, prioritise adding it before polishing anything else.
        </p>
        <ul className="grid gap-2 sm:grid-cols-2">
          {checklist.map((item) => (
            <li key={item} className="flex items-start gap-2 text-body-sm text-muted-foreground">
              <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
