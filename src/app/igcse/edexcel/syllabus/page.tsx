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
  Info,
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { requireIgcseBoard } from '@/app/igcse/_lib/guard'
import { t } from '@/lib/i18n/t'

export const metadata: Metadata = {
  openGraph: {
    title: 'Edexcel IGCSE Literature Syllabus - The English Hub',
    description:
      'Complete breakdown of the Pearson Edexcel IGCSE English Literature syllabus: what the examiners are looking for, mark allocations, time limits and paper structure.',
  },
  title: 'Edexcel IGCSE Literature Syllabus',
  description:
    'Complete breakdown of the Pearson Edexcel IGCSE English Literature syllabus: what the examiners are looking for, mark allocations, time limits and paper structure.',
  alternates: { canonical: 'https://theenglishhub.app/igcse/edexcel/syllabus' },
  robots: { index: false },
}

const aos = [
  {
    code: 'Reading & Responding',
    icon: BookOpen,
    title: 'Show you understand the text',
    description:
      'Read carefully, form your own opinion about the text, and back up every point with short quotations or references. The examiner wants to see that you can think for yourself and prove it with evidence.',
  },
  {
    code: 'Language & Structure',
    icon: PenTool,
    title: 'Explain how the writer creates effects',
    description:
      'Look at the words, techniques, and structure a writer uses and explain why they matter. Use literary terms where you can, but the key thing is explaining the effect on the reader.',
  },
  {
    code: 'Context',
    icon: History,
    title: 'Connect the text to its background',
    description:
      'Show you understand how the time period, society, or the writer\u2019s own life shaped the text. This only comes up in the prose and Shakespeare essays, so weave it in naturally rather than bolting it on.',
  },
  {
    code: 'Comparison',
    icon: Layers,
    title: 'Compare texts side by side',
    description:
      'Find similarities and differences between two texts \u2014 their language, structure, form, and ideas. This is tested only in the anthology poetry comparison on Paper 1.',
  },
]

const paper1Questions = [
  {
    section: 'Section A - Unseen Poetry',
    task: 'One question on a previously unseen poem',
    marks: 20,
    aos: ['Reading & Responding', 'Language & Structure'],
    guide: '35 mins',
  },
  {
    section: 'Section B - Anthology Poetry',
    task: 'Comparison of two anthology poems',
    marks: 20,
    aos: ['Reading & Responding', 'Language & Structure', 'Comparison'],
    guide: '35 mins',
  },
  {
    section: 'Section C - Modern Prose',
    task: 'One essay on a studied modern prose text (closed book)',
    marks: 20,
    aos: ['Reading & Responding', 'Language & Structure', 'Context'],
    guide: '50 mins',
  },
]

const paper2Questions = [
  {
    section: 'Section A - Modern Drama',
    task: 'Extract-based question on a studied modern drama text',
    marks: 20,
    aos: ['Reading & Responding', 'Language & Structure'],
    guide: '40 mins',
  },
  {
    section: 'Section B - Literary Heritage',
    task: 'One essay on a studied Shakespeare play (closed book)',
    marks: 20,
    aos: ['Reading & Responding', 'Language & Structure', 'Context'],
    guide: '45 mins',
  },
]

export default async function EdexcelSyllabusPage() {
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
          {await t('igcse.page.back_to_lit')}
        </Button>
      </div>

      {/* ── Redirect banner ──────────────────────────────────────────── */}
      <div className="flex items-start gap-3 rounded-xl border border-primary/20 bg-primary/5 p-4">
        <Info className="mt-0.5 size-5 shrink-0 text-primary" />
        <p className="text-body-sm text-foreground">
          Looking for revision content? Visit our{' '}
          <Link
            href="/igcse/edexcel"
            className="font-medium text-primary underline underline-offset-2 hover:text-primary/80"
          >
            IGCSE Literature hub
          </Link>{' '}
          for study guides, practice questions, and more.
        </p>
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
              {await t('igcse.page.badge_edexcel_lit')}
            </Badge>
          </div>
          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            IGCSE Literature Syllabus
          </h1>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
            Everything you need to know about the Pearson Edexcel IGCSE English Literature
            specification - assessment objectives, mark allocations, timings and the full structure
            of each paper.
          </p>
        </div>
      </section>

      {/* ── Assessment at a glance ─────────────────────────────────── */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <Scale className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">Assessment at a glance</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="flex items-start gap-3 p-5">
              <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10">
                <FileText className="size-5 text-primary" />
              </div>
              <div>
                <p className="text-heading-md font-heading text-foreground">100 marks</p>
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
                <p className="text-heading-md font-heading text-foreground">3h 30m</p>
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
                <p className="text-heading-md font-heading text-foreground">Closed book</p>
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
            What the examiners are looking for
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
                  <CardTitle className="text-body-lg font-heading">{ao.title}</CardTitle>
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
            Paper 1 - Poetry and Modern Prose
          </h2>
        </div>

        <Card>
          <CardHeader className="pb-3">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="secondary">Paper 1</Badge>
              <Badge variant="secondary">2 hours</Badge>
              <Badge variant="secondary">60 marks</Badge>
              <Badge className="bg-primary/10 text-primary border-primary/20">
                60% of qualification
              </Badge>
            </div>
            <CardDescription className="mt-2">
              Three compulsory sections covering unseen poetry, anthology comparison and a studied
              modern prose text.
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
                    <th className="px-4 py-3 text-left">Skills tested</th>
                    <th className="px-4 py-3 text-left">Suggested time</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/60">
                  {paper1Questions.map((q) => (
                    <tr key={q.section} className="text-muted-foreground">
                      <td className="px-4 py-3 font-medium text-foreground">{q.section}</td>
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
            Paper 2 - Modern Drama and Literary Heritage
          </h2>
        </div>

        <Card>
          <CardHeader className="pb-3">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="secondary">Paper 2</Badge>
              <Badge variant="secondary">1 hour 30 minutes</Badge>
              <Badge variant="secondary">40 marks</Badge>
              <Badge className="bg-primary/10 text-primary border-primary/20">
                40% of qualification
              </Badge>
            </div>
            <CardDescription className="mt-2">
              Two compulsory sections: one extract-based modern drama question and one Shakespeare
              essay.
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
                    <th className="px-4 py-3 text-left">Skills tested</th>
                    <th className="px-4 py-3 text-left">Suggested time</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/60">
                  {paper2Questions.map((q) => (
                    <tr key={q.section} className="text-muted-foreground">
                      <td className="px-4 py-3 font-medium text-foreground">{q.section}</td>
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
          Where each skill matters most
        </h2>
        <ul className="space-y-2 text-body-sm text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
            <span>
              <strong className="text-foreground">Reading & Responding</strong> and{' '}
              <strong className="text-foreground">Language & Structure</strong> are tested in every
              section. These are the backbone of every answer you write - show you understand the
              text and can explain how the writer creates effects.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
            <span>
              <strong className="text-foreground">Context</strong> only comes up in the modern prose
              and Shakespeare essays. Weave in social, historical, or literary background naturally
              rather than adding it as a separate paragraph.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
            <span>
              <strong className="text-foreground">Comparison</strong> is tested only in Paper 1
              Section B, the anthology poetry question. Make sure you discuss both poems throughout
              your answer rather than writing about one and then the other.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
            <span>
              Always check the mark scheme for the specific question you are answering - some tasks
              lean more on your personal response while others focus on close language analysis.
            </span>
          </li>
        </ul>
      </section>
    </div>
  )
}
