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
      'Detailed guide to answering every Paper 1 question type for Cambridge IGCSE 0500. Step-by-step methods, common mistakes, and examiner tips for Q1, Q2, and Q3.',
  },
  title: 'Comprehension Strategies - IGCSE Language A Paper 1',
  description:
    'Detailed guide to answering every Paper 1 question type for Cambridge IGCSE 0500. Step-by-step methods, common mistakes, and examiner tips for Q1, Q2, and Q3.',
  alternates: {
    canonical: 'https://theenglishhub.app/igcse/cambridge/0500/comprehension-strategies',
  },
}

/* ────────────────────────────────────────────────────────────────────────────
   QUESTION 1 - RETRIEVAL / COMPREHENSION
   ──────────────────────────────────────────────────────────────────────────── */

const q1 = {
  title: 'Question 1 - Retrieval and comprehension',
  marks: '15 marks',
  time: '25 minutes recommended',
  overview:
    'Question 1 tests whether you can find and rephrase information from the passage. You are given a specific focus and must list relevant points. Short notes or complete sentences are both acceptable.',
  steps: [
    {
      step: 'Read the question before the passage',
      detail:
        'Underline the key focus words in the question (e.g. "dangers", "benefits", "reasons"). This tells your brain what to look for as you read.',
    },
    {
      step: 'Read the passage with a pen in hand',
      detail:
        'Underline or number every piece of information that relates to the question focus. Do not worry about phrasing yet -- just mark the raw material.',
    },
    {
      step: 'Count your points',
      detail:
        'Aim for 15 or more. If you have fewer than 12, re-read the passage -- you have probably missed points in the introduction or conclusion, which students often skip.',
    },
    {
      step: 'Rephrase in your own words',
      detail:
        'Write each point as a short, clear note. You do not need full sentences, but you must not copy the passage word-for-word. Change the vocabulary and sentence structure.',
    },
    {
      step: 'Check both halves of the passage',
      detail:
        'Points are spread across the entire passage. If all your answers come from the first half, go back and mine the second half for content you missed.',
    },
    {
      step: 'Avoid repetition',
      detail:
        'Examiners will not credit the same point twice, even if you phrase it differently. Before writing a point, check it is genuinely new information.',
    },
  ],
  mistakes: [
    'Copying directly from the passage instead of using own words.',
    'Writing only 5-6 points when 15 are needed for full marks.',
    'Including irrelevant information that does not match the question focus.',
    'Wasting time on long, essay-style sentences when short notes are quicker.',
    'Ignoring the final paragraphs of the passage.',
    'Repeating the same point in different words.',
  ],
  examinerTips: [
    'You do not lose marks for including extra correct points, so when in doubt, include it.',
    'If a point requires inference (reading between the lines), state it clearly -- inferred points are rewarded at the top end.',
    'Points from both passages (if two are given) must be included for full marks.',
    'Own words do not mean inventing information. Rephrase what the writer says -- do not add your own opinion.',
  ],
}

/* ────────────────────────────────────────────────────────────────────────────
   QUESTION 2 - LANGUAGE ANALYSIS
   ──────────────────────────────────────────────────────────────────────────── */

const q2 = {
  title: 'Question 2 - Language analysis',
  marks: '15 marks',
  time: '25 minutes recommended',
  overview:
    'Question 2 asks you to explain how the writer uses language to create meaning and effect. You must select specific words and phrases, quote them, and analyse their connotations and impact on the reader.',
  steps: [
    {
      step: 'Re-read the specified section',
      detail:
        'The question tells you which lines or paragraphs to focus on. Re-read this section slowly, looking for powerful or unusual word choices.',
    },
    {
      step: 'Select 6-8 words or short phrases',
      detail:
        'Choose words that are rich in connotation -- verbs, adjectives, and figurative language. Avoid selecting whole sentences. Single words or two-word phrases give you the most to analyse.',
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
        'If three words all relate to violence, say so. Identifying a semantic field (a group of words with a shared meaning area) is a top-band skill.',
    },
    {
      step: 'Vary your analytical vocabulary',
      detail:
        'Do not repeat "the writer uses" in every paragraph. Try: "conveys", "evokes", "implies", "establishes a mood of", "positions the reader as".',
    },
  ],
  mistakes: [
    'Feature-spotting: naming a technique (e.g. "this is a metaphor") without explaining its effect.',
    'Quoting entire sentences instead of individual words.',
    'Using vague effect phrases: "it makes it more interesting" or "it adds description".',
    'Confusing techniques (calling personification onomatopoeia, for example).',
    'Writing about the plot or characters instead of the language itself.',
    'Spending too long on the first word and running out of time for the rest.',
  ],
  examinerTips: [
    'The mark scheme uses the word "judicious" -- this means your choices should be well-chosen, not random. Pick the most powerful words, not the first ones you see.',
    'Top-band responses explore layers of meaning: literal, connotative, and the effect on the reader. Three layers per word is the ideal.',
    'You do not need to identify the technique by name to score full marks. Explaining the effect is more important than labelling it.',
    "If you can link your analysis to the writer's overall purpose (e.g. to create sympathy, build tension, persuade), do so.",
  ],
}

/* ────────────────────────────────────────────────────────────────────────────
   QUESTION 3 - SUMMARY
   ──────────────────────────────────────────────────────────────────────────── */

const q3 = {
  title: 'Question 3 - Summary writing',
  marks: '15 marks',
  time: '25 minutes recommended',
  overview:
    'Question 3 asks you to summarise information on a given topic from two passages in a single continuous paragraph of about 250 words. You are marked on content (how many points you include) and language (how well you use your own words and connect your points).',
  steps: [
    {
      step: 'Read the question and identify the focus',
      detail:
        'The question gives you a specific topic (e.g. "the challenges of living in extreme cold"). Underline the focus. Only information related to this topic will earn marks.',
    },
    {
      step: 'Scan both passages for relevant points',
      detail:
        'Go through each passage with a pen, numbering every relevant piece of information. Aim for 8-10 points from each passage (15-20 total).',
    },
    {
      step: 'Group similar points together',
      detail:
        'On rough paper, group points into clusters (e.g. physical challenges, economic challenges, psychological challenges). This will give your summary a logical structure.',
    },
    {
      step: 'Write ONE continuous paragraph',
      detail:
        'Do not use subheadings, bullet points, or multiple paragraphs. The mark scheme requires continuous prose. Aim for exactly 250 words -- not more, not fewer.',
    },
    {
      step: 'Use your own words throughout',
      detail:
        'Rephrase every point. If the passage says "people get very cold", you might write "residents are at risk of hypothermia from prolonged exposure to sub-zero temperatures."',
    },
    {
      step: 'Use connectives to link your points',
      detail:
        'Join points with: "furthermore", "in addition", "similarly", "equally", "moreover", "another significant challenge is". This creates a flowing paragraph rather than a list.',
    },
    {
      step: 'Count and check',
      detail:
        'Underline each distinct point in your summary. If you count fewer than 15, add more. Then count your words -- trim or extend to hit approximately 250.',
    },
  ],
  mistakes: [
    'Quoting directly from the passage. Even small copied phrases lose marks.',
    'Including personal opinions or evaluations. The summary is objective.',
    'Writing an introduction or conclusion. Start with your first point and end with your last.',
    'Using bullet points or numbered lists instead of continuous prose.',
    'Covering only one passage. You must include points from both.',
    'Repeating the same point in different words -- examiners count distinct points only.',
    'Going significantly over 250 words. This usually means you are padding, which wastes time.',
    'Forgetting to use formal, neutral language throughout.',
  ],
  examinerTips: [
    'The content mark (out of 15) is based on the number of relevant, distinct points. Fifteen well-chosen points earns top marks.',
    'The language mark rewards candidates who rephrase fluently. "Own words" does not mean making things up -- it means finding synonyms and restructuring sentences.',
    'Organise your points thematically, not in the order they appear in the passages. This shows you have processed the material.',
    'If you are unsure whether a point is relevant, include it. You will not be penalised for extra correct content.',
    'Practice is the single most effective way to improve at Q3. Write summaries from past papers until you can consistently hit 15 points in 250 words.',
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
      'Many passages change tone partway through -- from positive to negative, from objective to personal. Noticing this shift helps with both Q1 (implicit meaning) and Q2 (language analysis).',
  },
  {
    title: 'Read the final paragraph carefully',
    detail:
      "Students often rush the ending. Final paragraphs frequently contain the writer's most important point or a summary statement.",
  },
  {
    title: 'Do not assume you understand on first glance',
    detail:
      'Some passages are deliberately ambiguous. If a sentence feels simple, re-read it -- there may be irony, subtext, or an implied attitude that changes the meaning.',
  },
]

/* ────────────────────────────────────────────────────────────────────────────
   TIME MANAGEMENT
   ──────────────────────────────────────────────────────────────────────────── */

const timePlan = [
  {
    phase: 'Reading time (given)',
    minutes: '15 min',
    detail: 'Read both passages. Annotate lightly. Do NOT start writing.',
  },
  {
    phase: 'Question 1',
    minutes: '25 min',
    detail: 'Read, underline, rephrase. Aim for 15 points.',
  },
  {
    phase: 'Question 2',
    minutes: '25 min',
    detail: 'Select 6-8 words. Write PEEL paragraphs for each.',
  },
  { phase: 'Question 3', minutes: '25 min', detail: 'Scan, group, write 250-word paragraph.' },
  {
    phase: 'Review',
    minutes: '5 min',
    detail: 'Check spelling, missing points, word count on Q3.',
  },
]

export default async function ComprehensionStrategiesPage() {
  await requireIgcseBoard(['cambridge-0500'])

  const questions = [q1, q2, q3]

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
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="relative">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge className="bg-primary/10 text-primary border-primary/20">
              <Sparkles className="mr-1 size-3" />
              Cambridge IGCSE 0500
            </Badge>
            <Badge variant="secondary">Paper 1 strategy</Badge>
          </div>
          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            Comprehension strategies
          </h1>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
            A detailed guide to answering every Paper 1 question type. Step-by-step methods for
            retrieval (Q1), language analysis (Q2), and summary (Q3), with common mistakes to avoid
            and examiner tips drawn from published mark schemes and examiner reports.
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
      <p className="text-center text-body-xs text-muted-foreground/60">
        Aligns with Cambridge syllabus 0500 &mdash; Paper 1 Reading
      </p>
    </div>
  )
}
