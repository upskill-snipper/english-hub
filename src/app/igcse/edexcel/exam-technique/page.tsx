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
import { t } from '@/lib/i18n/t'

// 10 October 2026: the description, the hero and the second card offered
// "extract-based" questions on Paper 2's drama section, and the essay card
// called both papers closed book and literary heritage Shakespeare. No 4ET1
// paper prints an extract: Paper 2's questions, from the May 2023 and May 2024
// papers, are whole-text essays, some opening with a short quotation, and
// the specification (Issue 3, PDF pp11, 14 and 19) makes Paper 2 open book and
// lets literary heritage be a novel by Austen, Dickens or Hawthorne.
export const metadata: Metadata = {
  openGraph: {
    title: 'Edexcel IGCSE Literature Exam Technique - The English Hub',
    description:
      'Paper 1 and Paper 2 exam technique for Pearson Edexcel IGCSE English Literature: the unseen poem, the poetry comparison and whole-text essay questions.',
    images: [
      {
        url: '/api/og?title=Edexcel+IGCSE+Literature+Exam+Technique+-+The+English+Hub',
        width: 1200,
        height: 630,
        alt: 'Edexcel IGCSE Literature Exam Technique - The English Hub',
      },
    ],
  },
  title: 'Edexcel IGCSE Literature Exam Technique',
  description:
    'Paper 1 and Paper 2 exam technique for Pearson Edexcel IGCSE English Literature: the unseen poem, the poetry comparison and whole-text essay questions.',
  alternates: {
    canonical: 'https://theenglishhub.app/igcse/edexcel/exam-technique',
  },
}

const questionTypes = [
  {
    icon: Layers,
    title: 'Comparison questions',
    subtitle: 'Paper 1, Section B - Anthology poetry',
    // Until 10 October 2026 this described only one of the two questions (one
    // named poem, the second of your choice) and listed AO1 among the skills.
    // Section B offers a choice of two comparisons, one naming both poems, and
    // is marked on AO2 and AO3 (specification Issue 3; every paper to June 2025).
    description:
      'You answer one of two questions, and both ask you to compare two Part 3 poems: one names both poems, the other names one and lets you choose the second from Part 3. Every Part 3 poem is printed in a Poetry Booklet that comes with the paper.',
    technique: [
      'Plan a thesis that captures similarity and difference in one sentence.',
      'Structure four integrated paragraphs, not two separate mini-essays.',
      'Use connective phrases: "whereas", "similarly", "by contrast", "in the same way".',
      'Compare writers\u2019 methods (language and structure) and effects, not just subject matter.',
      'Keep comparison front and centre: almost every paragraph should reference both poems.',
    ],
    ao: ['Analysing language and structure', 'Comparing texts'],
  },
  {
    icon: ScanText,
    title: 'Drama essay questions',
    subtitle: 'Paper 2, Section A - Modern Drama',
    description:
      'You answer one of two essay questions on your play, for 30 marks. No extract is printed: some questions open with a short quotation or a statement, but each asks about the play as a whole and tells you to consider language, form and structure. The paper is open book, so you may take in a clean, unmarked copy of the play.',
    technique: [
      'Spend a few minutes planning: choose moments from across the play that answer the question.',
      'Anchor every paragraph in a specific quotation or stage direction.',
      'Range across the whole play - its opening, turning points and ending.',
      'Track dramatic methods: stage directions, dialogue, silence, lighting.',
      'Your copy is clean, so know where the key scenes are: searching for them costs time.',
    ],
    ao: ['Understanding the text', 'Analysing language and structure'],
  },
  {
    icon: PencilRuler,
    title: 'Essay-style questions',
    subtitle: 'Paper 1 Section C and Paper 2 Section B',
    description:
      'Each is one essay from a choice of two on your text, argued in response to the question. Paper 1 Section C (modern prose) is closed book, so you quote from memory, and it is marked for knowledge of the text and for context. Paper 2 Section B (literary heritage: a Shakespeare play, or a novel by Austen, Dickens or Hawthorne) is open book, with a clean copy of your text allowed, and is marked for knowledge of the text, language, form and structure, and context.',
    technique: [
      'For Paper 1, learn short, flexible quotations: your prose text is not allowed in.',
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
    // Section A is marked on AO2 alone (specification Issue 3; every mark
    // scheme to June 2025). Until 10 October 2026 this also listed AO1.
    ao: ['Analysing language and structure'],
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
    // Until 10 October 2026: "spending 75% of your answer on one poem caps your
    // comparison mark". The mark scheme has no such rule. Its cap is for an
    // answer that considers only one poem: no higher than the top of Level 2.
    detail:
      'In Paper 1 Section B, an answer that considers only one poem cannot go beyond the top of Level 2, 12 of the 30 marks, and one that neglects a poem has less to compare. Keep both poems in every paragraph.',
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
          className="mb-3 -ms-2 text-muted-foreground"
          render={<Link href="/igcse/edexcel" />}
        >
          <ArrowLeft className="size-3.5" />
          {await t('igcse.page.back_to_edexcel_igcse')}
        </Button>
      </div>

      {/* ── Hero ────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-primary/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -end-20 -top-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -start-16 h-48 w-48 rounded-full bg-primary/5 blur-3xl" />

        <div className="relative">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge variant="secondary">
              <Sparkles className="me-1 size-3" />
              Exam technique
            </Badge>
            <Badge className="bg-primary/10 text-primary border-primary/20">
              {await t('igcse.page.badge_edexcel_lit')}
            </Badge>
          </div>
          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            IGCSE Literature Exam Technique
          </h1>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
            Specific strategies for the question types in Edexcel IGCSE English Literature: the
            unseen poem, the poetry comparison, and the essay questions on your prose, drama and
            literary heritage texts. Each approach is mapped to the skills the mark schemes reward.
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
