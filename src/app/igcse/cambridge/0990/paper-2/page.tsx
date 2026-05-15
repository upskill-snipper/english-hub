import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  PenTool,
  Clock,
  Sparkles,
  Target,
  CheckCircle2,
  Timer,
  Feather,
  FileText,
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { requireIgcseBoard } from '@/app/igcse/_lib/guard'

export const metadata: Metadata = {
  openGraph: {
    title: 'Paper 2 Directed Writing & Composition | Cambridge IGCSE Language B | The English Hub',
    description:
      'Cambridge IGCSE Language B Paper 2 Directed Writing and Composition: full breakdown, timing, grade boundaries and exam technique.',
  },
  title: 'Paper 2 Directed Writing & Composition | Cambridge IGCSE Language B | The English Hub',
  description:
    'Cambridge IGCSE Language B Paper 2 Directed Writing and Composition: full breakdown, timing, grade boundaries and exam technique.',
  alternates: { canonical: 'https://theenglishhub.app/igcse/cambridge/0990/paper-2' },
}

const sections = [
  {
    code: 'Section A',
    title: 'Directed Writing',
    marks: '40 marks (25 writing + 15 reading)',
    wordCount: '250–350 words',
    description:
      'Respond to a short text by writing in a specified form — e.g. a speech, letter, article or report — for a defined audience and purpose.',
    forms: ['Speech', 'Letter', 'Journal entry', 'Article', 'Report', 'Interview'],
    icon: FileText,
  },
  {
    code: 'Section B',
    title: 'Composition',
    marks: '40 marks (24 content + 16 style)',
    wordCount: '350–450 words',
    description:
      'Choose one task from four options — two narrative and two descriptive — and write an extended composition. Plan carefully before you begin.',
    forms: ['Narrative (x2)', 'Descriptive (x2)'],
    icon: Feather,
  },
]

const boundaries = [
  { grade: 9, mark: 68 },
  { grade: 8, mark: 62 },
  { grade: 7, mark: 55 },
  { grade: 6, mark: 48 },
  { grade: 5, mark: 41 },
  { grade: 4, mark: 34 },
  { grade: 3, mark: 27 },
]

const timingRows = [
  { step: 'Read Section A stimulus text and plan', time: '15 min' },
  { step: 'Write Section A directed writing', time: '45 min' },
  { step: 'Choose and plan Section B task', time: '10 min' },
  { step: 'Write Section B composition', time: '45 min' },
  { step: 'Proofread both answers', time: '5 min' },
]

export default async function Paper2Page() {
  await requireIgcseBoard(['cambridge-0990'])

  return (
    <div className="space-y-10 pb-16">
      <div>
        <Button variant="ghost" size="sm" render={<Link href="/igcse/cambridge/0990" />}>
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
            <Badge variant="secondary">Paper 2</Badge>
            <Badge variant="secondary">Writing</Badge>
          </div>
          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            Paper 2: Directed Writing & Composition
          </h1>
          <p className="mt-3 max-w-3xl text-body-lg text-muted-foreground">
            Two hours. Two pieces of writing — one directed response and one extended composition.
            80 marks, worth 50% of the IGCSE Language B qualification.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-body-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5 rounded-md border border-border/60 bg-muted/40 px-3 py-1.5">
              <Clock className="size-3.5" />2 hours
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-md border border-border/60 bg-muted/40 px-3 py-1.5">
              <PenTool className="size-3.5" />
              80 marks
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-md border border-border/60 bg-muted/40 px-3 py-1.5">
              <Target className="size-3.5" />
              50% of total
            </span>
          </div>
        </div>
      </section>

      {/* Sections */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <PenTool className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">Paper structure</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {sections.map((s) => {
            const Icon = s.icon
            return (
              <Card key={s.code}>
                <CardHeader className="pb-3">
                  <div className="mb-3 flex items-start justify-between gap-3">
                    <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10">
                      <Icon className="size-5 text-primary" />
                    </div>
                    <Badge className="bg-primary/10 text-primary border-primary/20">
                      {s.marks.split(' ')[0]} marks
                    </Badge>
                  </div>
                  <CardTitle className="text-heading-md font-heading leading-tight">
                    {s.code}: {s.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-body-sm text-muted-foreground leading-relaxed">
                    {s.description}
                  </p>
                  <div className="grid gap-2 text-body-xs text-muted-foreground sm:grid-cols-2">
                    <div className="rounded-md border border-border/60 bg-muted/30 p-2">
                      <p className="font-medium text-foreground">Marks</p>
                      <p>{s.marks}</p>
                    </div>
                    <div className="rounded-md border border-border/60 bg-muted/30 p-2">
                      <p className="font-medium text-foreground">Word count</p>
                      <p>{s.wordCount}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-body-xs font-medium text-foreground">Typical forms</p>
                    <ul className="mt-1 flex flex-wrap gap-1.5">
                      {s.forms.map((f) => (
                        <li key={f}>
                          <Badge variant="secondary">{f}</Badge>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      {/* Grade boundaries */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <Target className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">
            9-1 grade boundaries (indicative)
          </h2>
        </div>
        <div className="overflow-hidden rounded-2xl border border-border/60 bg-card">
          <div className="overflow-x-auto">
            <table className="w-full text-body-sm">
              <thead className="border-b border-border/60 bg-muted/40 text-body-xs uppercase text-muted-foreground">
                <tr>
                  <th className="px-4 py-3 text-left">Grade</th>
                  <th className="px-4 py-3 text-left">Mark (of 80)</th>
                  <th className="px-4 py-3 text-left">Percentage</th>
                  <th className="px-4 py-3 text-left">A*-G equivalent</th>
                </tr>
              </thead>
              <tbody>
                {boundaries.map((b) => (
                  <tr key={b.grade} className="border-b border-border/40 last:border-0">
                    <td className="px-4 py-3 font-semibold text-foreground">{b.grade}</td>
                    <td className="px-4 py-3 text-muted-foreground">{b.mark}</td>
                    <td className="px-4 py-3 text-muted-foreground">
                      {Math.round((b.mark / 80) * 100)}%
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">
                      {b.grade === 9
                        ? 'Above A*'
                        : b.grade === 8
                          ? 'A*/A'
                          : b.grade === 7
                            ? 'A'
                            : b.grade === 6
                              ? 'B'
                              : b.grade === 5
                                ? 'B/C'
                                : b.grade === 4
                                  ? 'C'
                                  : 'D'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Timing */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <div className="mb-4 flex items-center gap-3">
          <Timer className="size-5 text-primary" />
          <h2 className="text-heading-md font-heading text-foreground">
            Suggested timing (120 minutes)
          </h2>
        </div>
        <ul className="space-y-3">
          {timingRows.map((t) => (
            <li
              key={t.step}
              className="flex items-center justify-between gap-3 rounded-xl border border-border/60 bg-muted/30 p-4"
            >
              <span className="text-body-sm text-foreground">{t.step}</span>
              <Badge variant="secondary">{t.time}</Badge>
            </li>
          ))}
        </ul>
      </section>

      {/* What examiners reward */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <h2 className="text-heading-md font-heading text-foreground">What examiners reward</h2>
        <ul className="mt-4 space-y-3 text-body-sm text-muted-foreground">
          <li className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
            <span>
              <strong className="text-foreground">A clear voice.</strong> Match register to the form
              — a speech sounds different from a journal entry. Don&apos;t write both in the same
              voice.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
            <span>
              <strong className="text-foreground">Varied sentence structure.</strong> Mix short,
              punchy sentences with longer flowing ones for deliberate effect.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
            <span>
              <strong className="text-foreground">Ambitious vocabulary used accurately.</strong>{' '}
              Precise word choices beat obscure ones. If you&apos;re not sure of a word, don&apos;t
              use it.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
            <span>
              <strong className="text-foreground">Structural control.</strong> Openings that hook,
              paragraphs that build, endings that land. Use a plan — don&apos;t draft as you write.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
            <span>
              <strong className="text-foreground">Section A uses the text.</strong> The 15 reading
              marks come from how well you develop ideas from the stimulus. Don&apos;t ignore it.
            </span>
          </li>
        </ul>
      </section>

      {/* Next */}
      <section className="rounded-2xl border border-primary/20 bg-primary/5 p-6 sm:p-8">
        <h2 className="text-heading-md font-heading text-foreground">Next steps</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          <Button size="sm" render={<Link href="/igcse/cambridge/0990/practice-paper-2" />}>
            Practice Paper 2 with model answers
            <ArrowRight className="size-3.5" />
          </Button>
          <Button
            size="sm"
            variant="outline"
            render={<Link href="/igcse/cambridge/0990/grade-9-guide" />}
          >
            Grade 9 writing guide
          </Button>
        </div>
      </section>
    </div>
  )
}
