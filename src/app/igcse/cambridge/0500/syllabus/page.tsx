import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ChevronLeft,
  ListChecks,
  BookOpen,
  PenTool,
  Target,
  CheckCircle2,
  ArrowRight,
  Info,
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { requireIgcseBoard } from '@/app/igcse/_lib/guard'

export const metadata: Metadata = {
  openGraph: {
    title: 'IGCSE Language A Course Overview - The English Hub',
    description:
      'Course overview for Cambridge IGCSE Language A (First Language English). Reading skills, writing skills and paper-by-paper content.',
  },
  title: 'IGCSE Language A Course Overview',
  description:
    'Course overview for Cambridge IGCSE Language A (First Language English). Reading skills, writing skills and paper-by-paper content.',
  alternates: {
    canonical: 'https://theenglishhub.app/igcse/cambridge/0500/syllabus',
  },
  robots: { index: false, follow: false },
}

const readingSkills = [
  'Identify and interpret explicit and implicit information and ideas',
  'Select and synthesise evidence from different texts',
  'Explain and comment on how writers use language and structure to achieve effects',
  'Analyse and evaluate how writers present ideas, events and characters',
  "Compare writers' ideas and perspectives across texts",
  'Demonstrate understanding of words in context',
]

const writingSkills = [
  'Communicate clearly, effectively and imaginatively for different purposes and audiences',
  'Organise ideas into coherent paragraphs with logical progression',
  'Use a range of vocabulary and sentence structures for effect',
  'Use tone, style and register appropriate to form and audience',
  'Apply accurate spelling, punctuation and grammar',
  'Adapt writing to directed, descriptive and narrative forms',
]

const paperContent = [
  {
    paper: 'Paper 1',
    title: 'Reading',
    duration: '2 hours',
    marks: 80,
    aoSplit: 'Reading skills 50 marks • Writing skills 30 marks',
    questions: [
      {
        q: 'Question 1',
        marks: 15,
        desc: 'Short-answer comprehension questions on Text A (including word meanings and inference).',
      },
      {
        q: 'Question 1(f) - Directed Response',
        marks: 25,
        desc: 'A longer task based on Text A, usually a letter, interview or speech in response to the ideas in the passage. Tests reading (15) and writing (10).',
      },
      {
        q: 'Question 2 - Language Analysis',
        marks: 15,
        desc: 'Analyse how the writer of Text B uses language to create effects. Focus on word choice, imagery and phrase selection.',
      },
      {
        q: 'Question 3 - Summary',
        marks: 25,
        desc: 'Summarise information from Texts A and C in about 250 words. Tests reading (15) and writing (10).',
      },
    ],
  },
  {
    paper: 'Paper 2',
    title: 'Directed Writing and Composition',
    duration: '2 hours',
    marks: 80,
    aoSplit: 'Writing skills 50 marks • Reading skills 30 marks',
    questions: [
      {
        q: 'Section A - Directed Writing',
        marks: 40,
        desc: 'Read one or two short texts and respond in a specific form: a letter, speech, article or report. 250-350 words. Marked on reading (15) and writing (25).',
      },
      {
        q: 'Section B - Composition (choose one)',
        marks: 40,
        desc: 'Either a descriptive composition (creating vivid setting and atmosphere) or a narrative composition (telling a focused, well-structured story). 350-450 words. Marked on content and structure (16) and style and accuracy (24).',
      },
    ],
  },
]

export default async function SyllabusPage() {
  await requireIgcseBoard(['cambridge-0500'])

  return (
    <div className="space-y-10 pb-16">
      {/* ── Back link ─────────────────────────────────────────────── */}
      <div>
        <Button
          variant="ghost"
          size="sm"
          render={<Link href="/igcse/cambridge/0500" />}
          className="gap-1"
        >
          <ChevronLeft className="size-4" />
          IGCSE Language A hub
        </Button>
      </div>

      {/* ── Banner ────────────────────────────────────────────────── */}
      <div className="rounded-xl border border-primary/20 bg-primary/5 p-4 flex items-center gap-3">
        <Info className="size-5 shrink-0 text-primary" />
        <p className="text-body-sm text-foreground">
          Looking for revision content?{' '}
          <Link
            href="/igcse/cambridge/0500"
            className="font-medium text-primary underline underline-offset-2 hover:text-primary/80"
          >
            Visit our IGCSE Language A hub
            <ArrowRight className="ml-1 inline size-3.5" />
          </Link>
        </p>
      </div>

      {/* ── Header ─────────────────────────────────────────────────── */}
      <section>
        <Badge className="mb-3 bg-primary/10 text-primary border-primary/20">
          IGCSE Language A
        </Badge>
        <h1 className="text-display-sm font-heading text-foreground">Course overview</h1>
        <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
          A topic-by-topic guide to what Cambridge expects you to know, read and be able to write
          for the IGCSE Language A (First Language English) qualification.
        </p>
      </section>

      {/* ── Aims ──────────────────────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <div className="mb-4 flex items-center gap-3">
          <Target className="size-5 text-primary" />
          <h2 className="text-heading-md font-heading text-foreground">Aims of the course</h2>
        </div>
        <p className="text-body-sm text-muted-foreground leading-relaxed">
          IGCSE Language A is designed to enable learners to develop the ability to communicate
          clearly, accurately and effectively in both speech and writing; learn how to use a wide
          range of vocabulary, correct grammar, spelling and punctuation; develop a personal style
          and awareness of the audience being addressed; and develop powers of reading comprehension
          through close reading of a wide range of texts.
        </p>
      </section>

      {/* ── Reading skills ─────────────────────────────────────────── */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <BookOpen className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">Reading skills</h2>
        </div>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-heading-sm font-heading">
              What you need to be able to do
            </CardTitle>
            <CardDescription>Worth 50% of the qualification.</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-body-sm text-muted-foreground">
              {readingSkills.map((skill) => (
                <li key={skill} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* ── Writing skills ─────────────────────────────────────────── */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <PenTool className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">Writing skills</h2>
        </div>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-heading-sm font-heading">
              What you need to be able to do
            </CardTitle>
            <CardDescription>Worth 50% of the qualification.</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-body-sm text-muted-foreground">
              {writingSkills.map((skill) => (
                <li key={skill} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* ── Paper content ─────────────────────────────────────────── */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <ListChecks className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">Paper-by-paper content</h2>
        </div>
        <div className="space-y-6">
          {paperContent.map((paper) => (
            <Card key={paper.paper}>
              <CardHeader className="pb-3">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <CardTitle className="text-heading-md font-heading">
                      {paper.paper}: {paper.title}
                    </CardTitle>
                    <CardDescription>
                      {paper.duration} - {paper.marks} marks - {paper.aoSplit}
                    </CardDescription>
                  </div>
                  <Badge className="bg-primary/10 text-primary border-primary/20">
                    {paper.marks} marks
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {paper.questions.map((item) => (
                    <div
                      key={item.q}
                      className="rounded-xl border border-border/60 bg-muted/30 p-4"
                    >
                      <div className="mb-1 flex items-center justify-between gap-3">
                        <h3 className="text-body-md font-semibold text-foreground">{item.q}</h3>
                        <Badge variant="secondary">{item.marks} marks</Badge>
                      </div>
                      <p className="text-body-sm text-muted-foreground leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
