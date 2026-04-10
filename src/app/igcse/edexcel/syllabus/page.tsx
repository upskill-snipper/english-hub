import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowLeft,
  Sparkles,
  Target,
  FileText,
  Clock,
  Scale,
  BookOpen,
  PenTool,
  Layers,
  History,
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
  title: 'Edexcel IGCSE 4ET1 Syllabus — The English Hub',
  description:
    'Complete breakdown of the Pearson Edexcel IGCSE English Literature 4ET1 syllabus: assessment objectives AO1–AO4, mark allocations, time limits and paper structure.',
  alternates: { canonical: 'https://theenglishhub.app/igcse/edexcel/syllabus' },
}

const aos = [
  {
    code: 'AO1',
    icon: BookOpen,
    title: 'Read and respond',
    description:
      'Read and understand texts. Maintain a critical style and develop an informed personal response, using textual references including quotations to support and illustrate interpretations.',
  },
  {
    code: 'AO2',
    icon: PenTool,
    title: 'Analyse language, form and structure',
    description:
      'Analyse the language, form and structure used by a writer to create meanings and effects, using relevant subject terminology where appropriate.',
  },
  {
    code: 'AO3',
    icon: History,
    title: 'Contexts',
    description:
      'Show understanding of the relationships between texts and the contexts in which they were written.',
  },
  {
    code: 'AO4',
    icon: Layers,
    title: 'Compare texts',
    description:
      'Explore connections across texts, making comparisons between writers\u2019 use of language, form, structure and ideas.',
  },
]

const paper1Questions = [
  {
    section: 'Section A — Unseen Poetry',
    task: 'One question on a previously unseen poem',
    marks: 20,
    aos: ['AO1', 'AO2'],
    guide: '35 mins',
  },
  {
    section: 'Section B — Anthology Poetry',
    task: 'Comparison of two anthology poems',
    marks: 20,
    aos: ['AO1', 'AO2', 'AO4'],
    guide: '35 mins',
  },
  {
    section: 'Section C — Modern Prose',
    task: 'One essay on a studied modern prose text (closed book)',
    marks: 20,
    aos: ['AO1', 'AO2', 'AO3'],
    guide: '50 mins',
  },
]

const paper2Questions = [
  {
    section: 'Section A — Modern Drama',
    task: 'Extract-based question on a studied modern drama text',
    marks: 20,
    aos: ['AO1', 'AO2'],
    guide: '40 mins',
  },
  {
    section: 'Section B — Literary Heritage',
    task: 'One essay on a studied Shakespeare play (closed book)',
    marks: 20,
    aos: ['AO1', 'AO2', 'AO3'],
    guide: '45 mins',
  },
]

export default function EdexcelSyllabusPage() {
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
          Back to Edexcel 4ET1
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
              Syllabus breakdown
            </Badge>
            <Badge className="bg-primary/10 text-primary border-primary/20">
              Edexcel IGCSE 4ET1
            </Badge>
          </div>
          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            4ET1 Syllabus
          </h1>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
            Everything you need to know about the Pearson Edexcel IGCSE
            English Literature specification — assessment objectives, mark
            allocations, timings and the full structure of each paper.
          </p>
        </div>
      </section>

      {/* ── Assessment at a glance ─────────────────────────────────── */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <Scale className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">
            Assessment at a glance
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="flex items-start gap-3 p-5">
              <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10">
                <FileText className="size-5 text-primary" />
              </div>
              <div>
                <p className="text-heading-md font-heading text-foreground">
                  100 marks
                </p>
                <p className="text-body-xs text-muted-foreground">
                  Total across Paper 1 (60) and Paper 2 (40)
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-start gap-3 p-5">
              <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10">
                <Clock className="size-5 text-primary" />
              </div>
              <div>
                <p className="text-heading-md font-heading text-foreground">
                  3h 30m
                </p>
                <p className="text-body-xs text-muted-foreground">
                  2h for Paper 1 and 1h 30m for Paper 2
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-start gap-3 p-5">
              <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10">
                <BookOpen className="size-5 text-primary" />
              </div>
              <div>
                <p className="text-heading-md font-heading text-foreground">
                  Closed book
                </p>
                <p className="text-body-xs text-muted-foreground">
                  No texts permitted in either exam
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ── Assessment objectives ──────────────────────────────────── */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <Target className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">
            Assessment objectives (AO1–AO4)
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {aos.map((ao) => {
            const Icon = ao.icon
            return (
              <Card key={ao.code}>
                <CardHeader className="pb-3">
                  <div className="mb-2 flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10">
                      <Icon className="size-5 text-primary" />
                    </div>
                    <Badge className="bg-primary/10 text-primary border-primary/20">
                      {ao.code}
                    </Badge>
                  </div>
                  <CardTitle className="text-body-lg font-heading">
                    {ao.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-body-sm text-muted-foreground leading-relaxed">
                    {ao.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      {/* ── Paper 1 detail ─────────────────────────────────────────── */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <FileText className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">
            Paper 1 — Poetry and Modern Prose
          </h2>
        </div>

        <Card>
          <CardHeader className="pb-3">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="secondary">4ET1/01</Badge>
              <Badge variant="secondary">2 hours</Badge>
              <Badge variant="secondary">60 marks</Badge>
              <Badge className="bg-primary/10 text-primary border-primary/20">
                60% of qualification
              </Badge>
            </div>
            <CardDescription className="mt-2">
              Three compulsory sections covering unseen poetry, anthology
              comparison and a studied modern prose text.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-hidden rounded-xl border border-border/60">
              <table className="w-full text-body-sm">
                <thead className="bg-muted/40 text-body-xs uppercase tracking-wide text-muted-foreground">
                  <tr>
                    <th className="px-4 py-3 text-left">Section</th>
                    <th className="px-4 py-3 text-left">Task</th>
                    <th className="px-4 py-3 text-left">Marks</th>
                    <th className="px-4 py-3 text-left">AOs</th>
                    <th className="px-4 py-3 text-left">Suggested time</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/60">
                  {paper1Questions.map((q) => (
                    <tr key={q.section} className="text-muted-foreground">
                      <td className="px-4 py-3 font-medium text-foreground">
                        {q.section}
                      </td>
                      <td className="px-4 py-3">{q.task}</td>
                      <td className="px-4 py-3">{q.marks}</td>
                      <td className="px-4 py-3">{q.aos.join(', ')}</td>
                      <td className="px-4 py-3">{q.guide}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* ── Paper 2 detail ─────────────────────────────────────────── */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <FileText className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">
            Paper 2 — Modern Drama and Literary Heritage
          </h2>
        </div>

        <Card>
          <CardHeader className="pb-3">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="secondary">4ET1/02</Badge>
              <Badge variant="secondary">1 hour 30 minutes</Badge>
              <Badge variant="secondary">40 marks</Badge>
              <Badge className="bg-primary/10 text-primary border-primary/20">
                40% of qualification
              </Badge>
            </div>
            <CardDescription className="mt-2">
              Two compulsory sections: one extract-based modern drama question
              and one Shakespeare essay.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-hidden rounded-xl border border-border/60">
              <table className="w-full text-body-sm">
                <thead className="bg-muted/40 text-body-xs uppercase tracking-wide text-muted-foreground">
                  <tr>
                    <th className="px-4 py-3 text-left">Section</th>
                    <th className="px-4 py-3 text-left">Task</th>
                    <th className="px-4 py-3 text-left">Marks</th>
                    <th className="px-4 py-3 text-left">AOs</th>
                    <th className="px-4 py-3 text-left">Suggested time</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/60">
                  {paper2Questions.map((q) => (
                    <tr key={q.section} className="text-muted-foreground">
                      <td className="px-4 py-3 font-medium text-foreground">
                        {q.section}
                      </td>
                      <td className="px-4 py-3">{q.task}</td>
                      <td className="px-4 py-3">{q.marks}</td>
                      <td className="px-4 py-3">{q.aos.join(', ')}</td>
                      <td className="px-4 py-3">{q.guide}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* ── AO weighting note ──────────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <h2 className="text-heading-md font-heading text-foreground mb-3">
          How AOs are weighted
        </h2>
        <ul className="space-y-2 text-body-sm text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
            <span>
              <strong className="text-foreground">AO1</strong> and{' '}
              <strong className="text-foreground">AO2</strong> are tested in
              every section, forming the core of your response on language,
              structure and personal engagement.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
            <span>
              <strong className="text-foreground">AO3</strong> (context) is
              assessed in the modern prose and Shakespeare essays only. Bring in
              relevant social, historical or literary context.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
            <span>
              <strong className="text-foreground">AO4</strong> (comparison) is
              assessed only in Paper 1 Section B on the anthology poetry
              question.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
            <span>
              Always check the specific assessment grid for the text and
              section you are answering — some tasks weight AO1 more heavily,
              others lean on AO2.
            </span>
          </li>
        </ul>
      </section>
    </div>
  )
}
