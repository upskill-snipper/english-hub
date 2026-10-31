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
    images: [
      {
        url: '/api/og?title=IGCSE+Language+A+Course+Overview+-+The+English+Hub',
        width: 1200,
        height: 630,
        alt: 'IGCSE Language A Course Overview - The English Hub',
      },
    ],
  },
  title: 'IGCSE Language A Course Overview',
  description:
    'Course overview for Cambridge IGCSE Language A (First Language English). Reading skills, writing skills and paper-by-paper content.',
  alternates: {
    canonical: 'https://theenglishhub.app/igcse/cambridge/0500/syllabus',
  },
  robots: { index: false, follow: false },
}

// 31 October 2026: corrected to the 0500 guides in src/data/mark-scheme-guides/
// cambridge-0500-paper1.ts and -paper2.ts. The reading skills included synthesising
// and comparing across texts, which are not among Cambridge's objectives (R1 to R5,
// below). Paper 1 was the old four-row paper (a 25-mark "directed response" as
// 1(f), language analysis of Text B as Q2, a 250-word summary of Texts A and C as
// Q3) and was split "Reading 50, Writing 30"; Paper 2 "Writing 50, Reading 30".
// Paper 1 carries 65 reading and 15 writing marks, Paper 2 15 and 65. The rows are
// the 2027-2029 syllabus, as the guides and the marker follow.
const readingSkills = [
  'Understand what a text says directly: the facts and details on the page (R1)',
  'Work out what a text suggests, including what the writer or the people in it think and feel (R2)',
  'Examine, judge and develop the facts, ideas and opinions in a text, with details as evidence (R3)',
  'Show how a writer creates effects and influences the reader, for example through word choices (R4)',
  'Select the information a task needs and use it for that task (R5)',
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
    aoSplit: 'Reading skills 65 marks • Writing skills 15 marks',
    questions: [
      {
        q: 'Question 1 - Comprehension',
        marks: 20,
        desc: 'Short-answer questions on Text A: details, word meanings in your own words, and what the writer suggests. Marked point by point.',
      },
      {
        q: 'Question 2 - Summary task',
        marks: 20,
        desc: "On Text B: 2(a) a summary in your own words of no more than 120 words, marked on reading (10) and writing (5); 2(b) a short answer on the writer's attitude (5).",
      },
      {
        q: 'Question 3 - Short answers and language task',
        marks: 20,
        desc: "On Text C: short answers on words and phrases (10), then about 200-250 words on how the writer's language creates effects in an extract (10).",
      },
      {
        q: 'Question 4 - Extended response to reading',
        marks: 20,
        desc: 'About 250-300 words on Text C in a set form, such as a letter, report, journal, speech, interview or article. Tests reading (10) and writing (10).',
      },
    ],
  },
  {
    paper: 'Paper 2',
    title: 'Directed Writing and Composition',
    duration: '2 hours',
    marks: 80,
    aoSplit: 'Writing skills 65 marks • Reading skills 15 marks',
    questions: [
      {
        q: 'Section A - Directed Writing',
        marks: 40,
        desc: 'One question in two parts on one or two short texts: 1(a) a 5-mark structured question on the text, in your own words; 1(b) a speech, letter, article or report of about 250-350 words using the texts. Marked on reading (15) and writing (25).',
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
            <ArrowRight className="ms-1 inline size-3.5" />
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
        <p className="mb-5 text-body-sm text-muted-foreground leading-relaxed">
          These are the papers for exams from 2027. In November 2026 the older 2024-2026 syllabus is
          sat for the last time: its Paper 1 has three questions, worth 30, 25 and 25 marks, and its
          Paper 2 Section A is one directed writing task worth 40 marks. The composition is the
          same.
        </p>
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
