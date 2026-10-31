import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ChevronLeft,
  Sparkles,
  Target,
  Lightbulb,
  CheckCircle2,
  XCircle,
  Clock,
  BookOpen,
  AlertTriangle,
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { requireIgcseBoard } from '@/app/igcse/_lib/guard'

export const metadata: Metadata = {
  openGraph: {
    title: 'Comprehension Strategies - IGCSE Language A Paper 1',
    description:
      'Detailed guide to answering every Paper 1 question type for Cambridge IGCSE 0500. Step-by-step methods, common mistakes, and examiner tips for Q1 to Q4.',
    images: [
      {
        url: '/api/og?title=Comprehension+Strategies+-+IGCSE+Language+A+Paper+1',
        width: 1200,
        height: 630,
        alt: 'Comprehension Strategies - IGCSE Language A Paper 1',
      },
    ],
  },
  title: 'Comprehension Strategies - IGCSE Language A Paper 1',
  description:
    'Detailed guide to answering every Paper 1 question type for Cambridge IGCSE 0500. Step-by-step methods, common mistakes, and examiner tips for Q1 to Q4.',
  alternates: {
    canonical: 'https://theenglishhub.app/igcse/cambridge/0500/comprehension-strategies',
  },
}

/* ────────────────────────────────────────────────────────────────────────────
   31 October 2026: rewritten to src/data/mark-scheme-guides/cambridge-0500-paper1.ts.
   This taught three questions of 15 marks: a notes-style "retrieval" Q1 aiming at
   15 points, a language analysis Q2 of 6-8 words and a 250-word summary of two
   passages as Q3, and it had no Question 4. From 2027 Paper 1 is four questions of
   20 on three texts: Q1 comprehension (Text A, point-marked parts), Q2 the summary
   (Text B alone, no more than 120 words, reading 10 and writing 5, then 2(b) on
   the writer's attitude), Q3 short answers and the language task (Text C) and Q4
   the extended response to reading (Text C). The methods keep their advice where
   it serves the real question; the minutes are the guide's suggestion.

   QUESTION 1 - COMPREHENSION
   ──────────────────────────────────────────────────────────────────────────── */

const q1 = {
  title: 'Question 1 - Comprehension (Text A)',
  marks: '20 marks',
  time: 'About 25 minutes',
  overview:
    'Question 1 is a series of short questions on Text A. Some ask you to find a detail, some to explain a word or phrase in your own words, and some to explain what the writer suggests or why something happened. Each part is marked point by point, up to the marks shown for it.',
  steps: [
    {
      step: 'Read each part before you look for its answer',
      detail:
        'Underline the key words in the part (e.g. "explain", "in your own words", "suggests") and note the paragraph or lines it points you to.',
    },
    {
      step: 'Read the named lines with a pen in hand',
      detail:
        'Underline the words that answer the part. Answers come from the paragraph or lines the question points you to, not from elsewhere in the text.',
    },
    {
      step: 'Count your points',
      detail:
        'The marks for each part are printed in square brackets: a [3] part needs three separate points. Count them as you write.',
    },
    {
      step: 'Rephrase in your own words',
      detail:
        'When a part asks for your own words, or asks you to explain, do not copy the passage word-for-word. In the specimen mark scheme an "explain why" answer copied word for word earned nothing, even though the question did not ask for own words.',
    },
    {
      step: 'Explain every part of a phrase',
      detail:
        'When a part asks what a phrase means, explain each part of it. In the specimen paper, explaining only part of the phrase earned 1 of the 2 marks.',
    },
    {
      step: 'Avoid repetition',
      detail:
        'A repeated point earns nothing extra, even if you phrase it differently. Before writing a point, check it is genuinely new information.',
    },
  ],
  mistakes: [
    'Copying directly from the passage instead of using own words.',
    'Giving fewer separate points than the marks in brackets ask for.',
    'Including irrelevant information that does not answer the part.',
    'Writing a paragraph for a 1-mark part, which eats into the time Questions 2 to 4 need.',
    'Using lines outside the ones the part points you to.',
    'Repeating the same point in different words.',
  ],
  examinerTips: [
    'The marks in square brackets are your guide: a [3] part needs three separate points.',
    'If a part asks what the writer suggests, state the implied meaning clearly: points the text only implies are rewarded.',
    'Copying out long stretches of the text in the hope that the answer is somewhere inside does not work: pick out the answer.',
    'Own words do not mean inventing information. Rephrase what the writer says; do not add your own opinion.',
  ],
}

/* ────────────────────────────────────────────────────────────────────────────
   QUESTION 2 - SUMMARY TASK
   ──────────────────────────────────────────────────────────────────────────── */

const q2 = {
  title: 'Question 2 - Summary task (Text B)',
  marks: '20 marks',
  time: 'About 25 minutes: 19 on 2(a), 6 on 2(b)',
  overview:
    "Question 2(a) asks you to summarise the points in Text B that fit a given focus, in continuous writing of no more than 120 words. It is worth 15 marks: 10 for reading (selecting the relevant points) and 5 for writing (clear, concise expression in your own words). Question 2(b), worth 5, asks you to explain the writer's attitude in Text B, with details from the text.",
  steps: [
    {
      step: 'Read the question and identify the focus',
      detail:
        'The question gives you a specific topic (e.g. "the challenges of living in extreme cold"). Underline the focus. Only information related to this topic will earn marks.',
    },
    {
      step: 'Scan Text B for relevant points',
      detail:
        'Go through the text with a pen, numbering every point that fits the focus, including ones the text only implies. Then cross out repeats and examples.',
    },
    {
      step: 'Group similar points together',
      detail:
        'On rough paper, group points into clusters (e.g. physical challenges, economic challenges, psychological challenges). This will give your summary a logical structure.',
    },
    {
      step: 'Write continuous prose',
      detail:
        'Do not use subheadings, bullet points or notes. The summary must be continuous writing, in full and linked sentences, of no more than 120 words.',
    },
    {
      step: 'Use your own words throughout',
      detail:
        'Rephrase every point. If the passage says "people get very cold", you might write "residents risk hypothermia from long exposure to sub-zero temperatures."',
    },
    {
      step: 'Use connectives to link your points',
      detail:
        'Join points with: "furthermore", "in addition", "similarly", "equally", "moreover", "another significant challenge is". This creates a flowing paragraph rather than a list.',
    },
    {
      step: 'Count and check',
      detail:
        'Count your words: no more than 120. Check you have kept the points that matter most and combined related ones into single sentences.',
    },
    {
      step: 'Answer 2(b) briefly',
      detail:
        "Name the writer's attitude in a few words (for example, 'hopeful but cautious'), then give as many details from Text B as the question asks for, each with a few words on what it shows.",
    },
  ],
  mistakes: [
    'Copying from the passage: the writing marks reward your own words.',
    'Including personal opinions or evaluations. The summary is objective.',
    'Writing an introduction or conclusion. Start with your first point and end with your last.',
    'Using bullet points or numbered lists instead of continuous prose.',
    'Including points that fall outside the focus of the question.',
    'Repeating the same point in different words.',
    'Going over the 120-word limit the question sets.',
    'Forgetting to use formal, neutral language throughout.',
  ],
  examinerTips: [
    'The reading mark (out of 10) is given in levels, not by counting points: the top level gathers the points that matter most and never strays from the focus.',
    'The writing mark (out of 5) rewards candidates who rephrase fluently and say a lot in few words. "Own words" does not mean making things up: it means finding synonyms and restructuring sentences.',
    'Organise your points thematically, not in the order they appear in the text. This shows you have processed the material.',
    'If you are unsure whether a point fits the focus, leave it out: 120 words leave no room for material the question did not ask for.',
    'Practice is the single most effective way to improve at the summary. Write summaries from past papers until you can consistently fit the main points into 120 words.',
  ],
}

/* ────────────────────────────────────────────────────────────────────────────
   QUESTION 3 - SHORT ANSWERS AND LANGUAGE TASK
   ──────────────────────────────────────────────────────────────────────────── */

const q3 = {
  title: 'Question 3 - Short answers and language task (Text C)',
  marks: '20 marks',
  time: 'About 25 minutes: 12 on the short answers, 13 on the language task',
  overview:
    "Question 3 starts with short questions on words and phrases in Text C (10 marks), then the language task (10 marks): about 200 to 250 words explaining how the writer's language creates effects in an extract the question names. You select a few words and phrases, quote them, and analyse their connotations and impact on the reader.",
  steps: [
    {
      step: 'Answer the short questions first',
      detail:
        'Give the exact word or phrase when asked for one, and explain words in your own words as they are used in the sentence. Test an explanation by putting it in place of the word.',
    },
    {
      step: 'Re-read the specified extract',
      detail:
        'The language task tells you which part of Text C to focus on. Re-read it slowly, looking for powerful or unusual word choices.',
    },
    {
      step: 'Select a few striking words or short phrases',
      detail:
        'The specimen paper asked for three. Choose words rich in connotation, including images (similes, metaphors), which the higher levels expect you to explain. Single words or two-word phrases give you the most to analyse.',
    },
    {
      step: 'For each word, write a PEEL paragraph',
      detail:
        "Point (what is the writer doing?), Evidence (the quotation), Explanation (literal meaning in context), Link to effect (connotations, reader response, writer's purpose).",
    },
    {
      step: 'Explore connotations, not just definitions',
      detail:
        'The literal meaning is only step one. Ask: what associations does this word carry? What mood does it create? What does it make the reader feel or imagine?',
    },
    {
      step: 'Link words into patterns',
      detail:
        'If several words all relate to violence, say so. Identifying a semantic field (a group of words with a shared meaning area) is a top-band skill.',
    },
  ],
  mistakes: [
    'Feature-spotting: naming a technique (e.g. "this is a metaphor") without explaining its effect.',
    'Quoting entire sentences instead of individual words.',
    'Using vague effect phrases: "it makes it more interesting" or "it adds description".',
    'Confusing techniques (calling personification onomatopoeia, for example).',
    'Writing about lines outside the extract you are given.',
    'Spending too long on the first word and running out of time for the rest.',
  ],
  examinerTips: [
    'Pick the most powerful words, not the first ones you see: the top level rewards the sharpest choices, each opened up to show what it suggests.',
    'Top-band responses explore layers of meaning: literal, connotative, and the effect on the reader.',
    'Comments on grammar, sentence shape or punctuation earn credit only on top of comments on the words themselves.',
    "If you can link your analysis to the writer's overall purpose (e.g. to create sympathy, build tension, persuade), do so.",
  ],
}

/* ────────────────────────────────────────────────────────────────────────────
   QUESTION 4 - EXTENDED RESPONSE TO READING
   ──────────────────────────────────────────────────────────────────────────── */

const q4 = {
  title: 'Question 4 - Extended response to reading (Text C)',
  marks: '20 marks',
  time: 'About 25 minutes',
  overview:
    'Question 4 asks for about 250 to 300 words based on Text C in the form the question sets: a letter, report, journal, speech, interview or article. The question sets the situation and gives bullet points to cover, and you use and develop ideas from the text to answer them. Reading and writing are worth 10 marks each.',
  steps: [
    {
      step: 'Read the task and the bullet points',
      detail:
        'Note the form, who you are writing as, who you are writing for, and every bullet point you must cover.',
    },
    {
      step: 'Gather ideas from Text C under each bullet',
      detail:
        'Note two or three ideas from the text under each bullet, then add what each one suggests or leads to: that development is what the higher reading levels look for.',
    },
    {
      step: 'Reorganise, do not retell',
      detail:
        'Shape the material around the bullet points, not in the order it appears in Text C, and give each bullet a fair share.',
    },
    {
      step: 'Find the right voice',
      detail:
        'Keep a voice that suits the role and the form throughout: in the specimen mark scheme the voice counts towards the reading mark.',
    },
    {
      step: 'Write in your own words',
      detail:
        'Organise the piece for the reader, with varied, precise vocabulary and a style that suits the audience and purpose.',
    },
  ],
  mistakes: [
    'Retelling Text C in its own order instead of reorganising it around the bullet points.',
    'Leaving out a bullet point, or giving one only a line.',
    'Inventing content with no basis in the text: ideas should come from Text C and grow out of it.',
    'Forgetting the form: an interview, a letter and a speech each need their own shape.',
  ],
  examinerTips: [
    'Cover every bullet point in a balanced way.',
    'Back your points with details from Text C, developed beyond what the text says outright.',
    'A few minutes noting ideas under each bullet before you write saves time later.',
  ],
}

/* ────────────────────────────────────────────────────────────────────────────
   GENERAL READING STRATEGIES
   ──────────────────────────────────────────────────────────────────────────── */

const readingStrategies = [
  {
    title: 'First read: get the big picture',
    detail:
      "Read the entire passage once without writing anything. Understand the topic, the tone, and the writer's overall attitude. This takes 3-4 minutes and saves time later.",
  },
  {
    title: 'Second read: answer the question',
    detail:
      'Now read with the specific question in mind. Underline, annotate, and number relevant material. This is your working read.',
  },
  {
    title: 'Track the tone shifts',
    detail:
      "Many passages change tone partway through: from positive to negative, from objective to personal. Noticing this shift helps with Q1 (implicit meaning), Q2(b) (the writer's attitude) and the Q3 language task.",
  },
  {
    title: 'Read the final paragraph carefully',
    detail:
      "Students often rush the ending. Final paragraphs frequently contain the writer's most important point or a summary statement.",
  },
  {
    title: 'Do not assume you understand on first glance',
    detail:
      'Some passages are deliberately ambiguous. If a sentence feels simple, re-read it: there may be irony, subtext, or an implied attitude that changes the meaning.',
  },
]

/* ────────────────────────────────────────────────────────────────────────────
   TIME MANAGEMENT
   ──────────────────────────────────────────────────────────────────────────── */

const timePlan = [
  {
    phase: 'Reading time',
    minutes: '15 min',
    detail: 'Read all three texts. Annotate lightly. Do NOT start writing.',
  },
  {
    phase: 'Question 1',
    minutes: '25 min',
    detail: 'Read each part, find its answer in the lines named, count the marks in brackets.',
  },
  {
    phase: 'Question 2',
    minutes: '25 min',
    detail: 'Point-spot Text B, write the summary of no more than 120 words, then 2(b).',
  },
  {
    phase: 'Question 3',
    minutes: '25 min',
    detail: 'Short answers, then a few words or phrases analysed in about 200-250 words.',
  },
  {
    phase: 'Question 4',
    minutes: '25 min',
    detail: 'Note ideas under each bullet, then write about 250-300 words in the form set.',
  },
  {
    phase: 'Review',
    minutes: '5 min',
    detail: 'Check spelling, missing points and the word count on the summary.',
  },
]

export default async function ComprehensionStrategiesPage() {
  await requireIgcseBoard(['cambridge-0500'])

  const questions = [q1, q2, q3, q4]

  return (
    <div className="space-y-10 pb-16">
      <Button
        variant="ghost"
        size="sm"
        render={<Link href="/igcse/cambridge/0500/paper-1" />}
        className="gap-1"
      >
        <ChevronLeft className="size-4" />
        Paper 1 hub
      </Button>

      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-primary/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -end-20 -top-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="relative">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge className="bg-primary/10 text-primary border-primary/20">
              <Sparkles className="me-1 size-3" />
              Cambridge IGCSE 0500
            </Badge>
            <Badge variant="secondary">Paper 1 strategy</Badge>
          </div>
          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            Comprehension strategies
          </h1>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
            A detailed guide to answering every Paper 1 question type. Step-by-step methods for
            comprehension (Q1), the summary (Q2), short answers and the language task (Q3) and the
            extended response to reading (Q4), with common mistakes to avoid and examiner tips drawn
            from published mark schemes and examiner reports.
          </p>
          <p className="mt-3 max-w-2xl text-body-sm text-muted-foreground">
            This is the paper for exams from 2027. If you sit Paper 1 in November 2026, your paper
            follows the older 2024-2026 syllabus: three questions worth 30, 25 and 25 marks, so its
            question numbers and marks are not the ones below.
          </p>
        </div>
      </section>

      {/* ── Quick navigation ──────────────────────────────────────────── */}
      <div className="flex flex-wrap gap-2">
        <a
          href="#reading-strategies"
          className="inline-flex items-center gap-1.5 rounded-md border border-border/60 bg-muted/40 px-3 py-1.5 text-body-xs text-muted-foreground transition-colors hover:border-primary/40 hover:bg-primary/[0.06] hover:text-primary"
        >
          <BookOpen className="size-3.5" />
          Reading strategies
        </a>
        <a
          href="#time-management"
          className="inline-flex items-center gap-1.5 rounded-md border border-border/60 bg-muted/40 px-3 py-1.5 text-body-xs text-muted-foreground transition-colors hover:border-primary/40 hover:bg-primary/[0.06] hover:text-primary"
        >
          <Clock className="size-3.5" />
          Time management
        </a>
        {questions.map((q) => (
          <a
            key={q.title}
            href={`#${q.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
            className="inline-flex items-center gap-1.5 rounded-md border border-border/60 bg-muted/40 px-3 py-1.5 text-body-xs text-muted-foreground transition-colors hover:border-primary/40 hover:bg-primary/[0.06] hover:text-primary"
          >
            <Target className="size-3.5" />
            {q.title.split(' - ')[0]}
          </a>
        ))}
      </div>

      {/* ── General Reading Strategies ─────────────────────────────────── */}
      <section id="reading-strategies" className="space-y-5 scroll-mt-8">
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10">
            <BookOpen className="size-5 text-primary" />
          </div>
          <h2 className="text-heading-lg font-heading text-foreground">
            General reading strategies
          </h2>
        </div>

        <div className="rounded-xl border border-border/60 bg-muted/30 p-5">
          <p className="text-body-sm text-muted-foreground leading-relaxed">
            Before you answer any question, you need to read effectively. These five strategies
            apply to every Paper 1 sitting.
          </p>
        </div>

        <div className="space-y-3">
          {readingStrategies.map((s, i) => (
            <Card key={s.title}>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <span className="flex size-7 items-center justify-center rounded-full bg-primary/10 text-body-xs font-semibold text-primary">
                    {i + 1}
                  </span>
                  <CardTitle className="text-heading-sm font-heading">{s.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-body-sm text-muted-foreground leading-relaxed">{s.detail}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ── Time Management ───────────────────────────────────────────── */}
      <section
        id="time-management"
        className="scroll-mt-8 rounded-2xl border border-border/60 bg-card p-6 sm:p-8"
      >
        <div className="mb-4 flex items-center gap-3">
          <Clock className="size-5 text-primary" />
          <h2 className="text-heading-md font-heading text-foreground">Recommended time plan</h2>
        </div>
        <p className="mb-5 text-body-sm text-muted-foreground">
          Paper 1 is 2 hours (including 15 minutes reading time). Here is how to divide it so you
          never run out of time.
        </p>
        <div className="space-y-2">
          {timePlan.map((t) => (
            <div
              key={t.phase}
              className="flex items-start gap-4 rounded-xl border border-border/60 bg-muted/20 p-4"
            >
              <Badge variant="secondary" className="shrink-0 mt-0.5">
                {t.minutes}
              </Badge>
              <div>
                <p className="text-body-md font-semibold text-foreground">{t.phase}</p>
                <p className="text-body-sm text-muted-foreground">{t.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Question-by-question guides ───────────────────────────────── */}
      {questions.map((q) => (
        <section
          key={q.title}
          id={q.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}
          className="space-y-6 scroll-mt-8"
        >
          {/* Header */}
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10">
              <Target className="size-5 text-primary" />
            </div>
            <div>
              <h2 className="text-heading-lg font-heading text-foreground">{q.title}</h2>
              <div className="mt-1 flex gap-2">
                <Badge className="bg-primary/10 text-primary border-primary/20">{q.marks}</Badge>
                <Badge variant="secondary">{q.time}</Badge>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-border/60 bg-muted/30 p-5">
            <p className="text-body-sm text-muted-foreground leading-relaxed">{q.overview}</p>
          </div>

          {/* Step-by-step method */}
          <div>
            <div className="mb-3 flex items-center gap-2">
              <Lightbulb className="size-4 text-primary" />
              <h3 className="text-heading-sm font-heading text-foreground">Step-by-step method</h3>
            </div>
            <div className="space-y-3">
              {q.steps.map((s, i) => (
                <Card key={s.step}>
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-3">
                      <span className="flex size-7 items-center justify-center rounded-full bg-primary/10 text-body-xs font-semibold text-primary">
                        {i + 1}
                      </span>
                      <CardTitle className="text-body-md font-heading">{s.step}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-body-sm text-muted-foreground leading-relaxed">{s.detail}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Common mistakes */}
          <div>
            <div className="mb-3 flex items-center gap-2">
              <XCircle className="size-4 text-muted-foreground" />
              <h3 className="text-heading-sm font-heading text-foreground">Common mistakes</h3>
            </div>
            <Card>
              <CardContent className="pt-6">
                <ul className="space-y-2 text-body-sm text-muted-foreground">
                  {q.mistakes.map((m) => (
                    <li key={m} className="flex items-start gap-2">
                      <XCircle className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Examiner tips */}
          <div>
            <div className="mb-3 flex items-center gap-2">
              <AlertTriangle className="size-4 text-primary" />
              <h3 className="text-heading-sm font-heading text-foreground">Examiner tips</h3>
            </div>
            <Card>
              <CardContent className="pt-6">
                <ul className="space-y-2 text-body-sm text-foreground">
                  {q.examinerTips.map((tip) => (
                    <li key={tip} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>
      ))}

      {/* ── Footer ────────────────────────────────────────────────────── */}
      <p className="text-center text-body-xs text-muted-foreground-subtle">
        Aligns with Cambridge syllabus 0500 - Paper 1 Reading
      </p>
    </div>
  )
}
