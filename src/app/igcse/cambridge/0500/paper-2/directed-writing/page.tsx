import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronLeft, FileEdit, Mail, Mic, Newspaper, ClipboardList, Target } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { requireIgcseBoard } from '@/app/igcse/_lib/guard'

export const metadata: Metadata = {
  openGraph: {
    title: 'Directed Writing - IGCSE Language A Paper 2 Section A',
    description:
      'Directed writing is Section A of IGCSE Language A Paper 2, worth 40 marks. How the marks split, the four main forms and a seven-step process in the exam.',
    images: [
      {
        url: '/api/og?title=Directed+Writing+-+IGCSE+Language+A+Paper+2+Section+A',
        width: 1200,
        height: 630,
        alt: 'Directed Writing - IGCSE Language A Paper 2 Section A',
      },
    ],
  },
  title: 'Directed Writing - IGCSE Language A Paper 2 Section A',
  description:
    'Directed writing is Section A of IGCSE Language A Paper 2, worth 40 marks. How the marks split, the four main forms and a seven-step process in the exam.',
  alternates: {
    canonical: 'https://theenglishhub.app/igcse/cambridge/0500/paper-2/directed-writing',
  },
}

const forms = [
  {
    form: 'Letter',
    icon: Mail,
    audience: 'A single known reader - often a head teacher, editor, authority figure, or friend.',
    openingClose:
      'Formal: "Dear Sir/Madam" + "Yours faithfully". Semi-formal: "Dear Mr Alvarez" + "Yours sincerely". Informal: "Dear Maria" + "Best wishes".',
    register:
      'Match the relationship - a letter to an MP is formal; to a friend is chatty but still literate.',
    features: [
      'Clear opening stating purpose',
      'Paragraphs for each main point',
      'Polite but firm tone if persuasive',
      'Sign-off appropriate to opening',
    ],
  },
  {
    form: 'Speech',
    icon: Mic,
    audience: 'A live audience - students at assembly, a conference room, a debate chamber.',
    openingClose:
      'Greet the audience directly ("Good morning, ladies and gentlemen"). Close with a memorable call to action or rhetorical question.',
    register:
      'Spoken-feeling but composed. Use rhetorical devices sparingly - one or two per paragraph.',
    features: [
      'Rhetorical questions to involve the listener',
      'Lists of three for emphasis',
      'Direct address ("you", "we", "let us")',
      'Short punchy sentences alongside longer ones',
    ],
  },
  {
    form: 'Article',
    icon: Newspaper,
    audience:
      'Readers of a publication - a school magazine, a website, a newspaper. Imagine them skimming.',
    openingClose:
      'Hook the reader with a surprising fact, anecdote or question. End with a reflective or forward-looking statement.',
    register:
      'Engaging, confident, slightly conversational. You may include an "I" perspective but keep it disciplined.',
    features: [
      'Headline-style title',
      'Hook in the first sentence',
      'Vivid but balanced language',
      'Clear progression of ideas',
    ],
  },
  {
    form: 'Report',
    icon: ClipboardList,
    audience:
      'An official reader - a principal, a committee, a local council. They want facts, not rhetoric.',
    openingClose: 'State the topic and purpose in sentence one. End with clear recommendations.',
    register: 'Formal, neutral, third-person. Avoid humour and exclamation marks.',
    features: [
      'Subheadings are sometimes allowed (check the prompt)',
      'Evidence-led statements',
      'Impersonal phrasing ("It was found that...")',
      'Brief recommendations at the end',
    ],
  },
]

// 31 October 2026: rewritten to src/data/mark-scheme-guides/cambridge-0500-paper2.ts.
// The page treated Section A as one directed writing task, the 2024-2026 paper,
// with purposes of "informing, advising, reporting". From 2027 it is 1(a), a
// 5-mark structured question on the text, then 1(b), 35 marks, a piece that
// discusses, argues or persuades. The marks were right in total (reading 15,
// writing 25); the reading 15 is now 1(a) 5 and 1(b) 10.
const process = [
  'Answer 1(a) first: two or three short judgements in your own words, each followed by the detail from the text that proves it.',
  'Identify the PURPOSE of 1(b): are you asked to discuss (explore different sides), argue (make a case) or persuade (win the reader over)?',
  'Identify the FORM (letter, speech, article or report) and who the reader is.',
  'Annotate the text or texts for every usable idea you can reshape, under each point the question asks you to cover.',
  'Plan three to four paragraphs, each with a clear function, moving the reader towards your view.',
  'Develop and evaluate ideas from the text in your OWN words: do not lift whole phrases.',
  'Open and close in a way that matches the form and purpose.',
]

export default async function DirectedWritingPage() {
  await requireIgcseBoard(['cambridge-0500'])

  return (
    <div className="space-y-10 pb-16">
      {/* ── Back link ─────────────────────────────────────────────── */}
      <div>
        <Button
          variant="ghost"
          size="sm"
          render={<Link href="/igcse/cambridge/0500/paper-2" />}
          className="gap-1"
        >
          <ChevronLeft className="size-4" />
          Paper 2 hub
        </Button>
      </div>

      {/* ── Header ─────────────────────────────────────────────────── */}
      <section>
        <Badge className="mb-3 bg-primary/10 text-primary border-primary/20">
          IGCSE Language A
        </Badge>
        <h1 className="text-display-sm font-heading text-foreground">Directed writing</h1>
        <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
          Section A is worth 40 marks, in two parts. Question 1(a), worth 5, asks you to analyse and
          evaluate something in the text in your own words. Question 1(b), worth 35, is the directed
          writing: 10 marks for how well you use the text and 25 for how well you write for the form
          and audience. The first thing to get right in 1(b) is the shape.
        </p>
        <p className="mt-3 max-w-2xl text-body-sm text-muted-foreground">
          This is the paper for exams from 2027. On the November 2026 paper, Section A is one
          directed writing task worth 40 marks (reading 15, writing 25), with no 1(a), and the form
          is a speech, letter or article.
        </p>
      </section>

      {/* ── Mark split ────────────────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <div className="mb-4 flex items-center gap-3">
          <Target className="size-5 text-primary" />
          <h2 className="text-heading-md font-heading text-foreground">How the 40 marks split</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-border/60 bg-muted/30 p-5">
            <Badge className="mb-2 bg-primary/10 text-primary border-primary/20">
              Reading - 15 marks
            </Badge>
            <p className="text-body-sm text-muted-foreground">
              Five in 1(a): judge something in the text, such as a person&apos;s attitude, with
              details as evidence. Ten in 1(b): use, develop and evaluate the ideas in the text or
              texts, rather than just repeating them.
            </p>
          </div>
          <div className="rounded-xl border border-border/60 bg-muted/30 p-5">
            <Badge className="mb-2 bg-primary/10 text-primary border-primary/20">
              Writing - 25 marks
            </Badge>
            <p className="text-body-sm text-muted-foreground">
              Content and structure, style and accuracy. Register, form, tone, organisation,
              vocabulary, grammar, spelling and punctuation all count.
            </p>
          </div>
        </div>
      </section>

      {/* ── Forms ─────────────────────────────────────────────────── */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <FileEdit className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">The four main forms</h2>
        </div>
        <div className="space-y-6">
          {forms.map((f) => {
            const Icon = f.icon
            return (
              <Card key={f.form}>
                <CardHeader className="pb-3">
                  <div className="flex items-start gap-4">
                    <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10">
                      <Icon className="size-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-heading-md font-heading">{f.form}</CardTitle>
                      <CardDescription>{f.audience}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-body-sm font-semibold text-foreground">
                      Opening and closing
                    </p>
                    <p className="text-body-sm text-muted-foreground">{f.openingClose}</p>
                  </div>
                  <div>
                    <p className="text-body-sm font-semibold text-foreground">Register</p>
                    <p className="text-body-sm text-muted-foreground">{f.register}</p>
                  </div>
                  <div>
                    <p className="text-body-sm font-semibold text-foreground">Key features</p>
                    <ul className="mt-1 space-y-1 text-body-sm text-muted-foreground">
                      {f.features.map((ft) => (
                        <li key={ft} className="flex items-start gap-2">
                          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                          <span>{ft}</span>
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

      {/* ── Process ───────────────────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <h2 className="mb-4 text-heading-md font-heading text-foreground">
          Seven-step process in the exam
        </h2>
        <ol className="space-y-3 text-body-sm text-muted-foreground">
          {process.map((step, i) => (
            <li key={step} className="flex items-start gap-3">
              <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-body-xs font-semibold text-primary">
                {i + 1}
              </span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </section>
    </div>
  )
}
