import type { Metadata } from 'next'
import Link from 'next/link'
import { Award, Sparkles, ChevronLeft, Target, ArrowUpDown } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { requireIgcseBoard } from '@/app/igcse/_lib/guard'

export const metadata: Metadata = {
  openGraph: {
    title: 'Paper 1 Model Answers - IGCSE Language A 0500',
    description:
      'Five annotated model answers for Cambridge IGCSE 0500 Paper 1: two sets of summary notes, a 120-word summary, and Grade C and A* language analysis compared.',
    images: [
      {
        url: '/api/og?title=Paper+1+Model+Answers+-+IGCSE+Language+A+0500',
        width: 1200,
        height: 630,
        alt: 'Paper 1 Model Answers - IGCSE Language A 0500',
      },
    ],
  },
  title: 'Paper 1 Model Answers - IGCSE Language A 0500',
  description:
    'Five annotated model answers for Cambridge IGCSE 0500 Paper 1: two sets of summary notes, a 120-word summary, and Grade C and A* language analysis compared.',
  alternates: {
    canonical: 'https://theenglishhub.app/igcse/cambridge/0500/paper-1/model-answers',
  },
}

/* ────────────────────────────────────────────────────────────────────────────
   31 October 2026: rewritten to src/data/mark-scheme-guides/cambridge-0500-paper1.ts.
   The page modelled a paper no 0500 syllabus sets: a notes-style "Q1" marked
   15/15, a language analysis out of 15 as Q2 and a 250-word summary of two
   passages as Q3. From 2027 the summary is Question 2(a), on Text B alone, no
   more than 120 words, 15 marks (reading 10, writing 5); the language task is in
   Question 3, out of 10. The notes below are now the point-selection stage of
   that summary, the summary is cut to the limit, and the language answers are
   re-marked out of 10 on the guide's levels (Level 3 is 5-6, Level 5 is 9-10).
   Second reader: two notes still spoke of point marks and the old "wide-ranging"
   descriptor, and the summary rubric was close to Cambridge's wording; all reworded.

   SUMMARY NOTES: SELECTING THE POINTS FOR QUESTION 2(a) (2 examples)
   ──────────────────────────────────────────────────────────────────────────── */

const q1Models = [
  {
    title: 'Summary notes: Dangers faced by deep-sea divers',
    grade: 'A*/9',
    mark: 'Plan',
    question:
      'Summary focus: what dangers do deep-sea divers face, according to Text B? List the points in short notes first; the summary itself must be continuous writing.',
    points: [
      {
        answer: 'Nitrogen narcosis causes confusion and impaired judgement at depth.',
        note: 'Lifted point but rephrased in own words. "Confusion and impaired judgement" paraphrases the passage\'s "loss of clear thinking", ready for the summary.',
      },
      {
        answer: 'Decompression sickness ("the bends") if they ascend too quickly.',
        note: 'Technical term included alongside the colloquial name. The examiner rewards both precision and accessibility.',
      },
      {
        answer: 'Hypothermia from prolonged exposure to near-freezing water.',
        note: 'Uses "prolonged exposure" rather than the passage\'s "staying too long": own words like this are what the summary\'s writing mark rewards.',
      },
      {
        answer: 'Equipment failure, particularly oxygen supply running out.',
        note: 'Clear, concise point. The "particularly" signals the student has identified the most significant equipment risk mentioned.',
      },
      {
        answer: 'Reduced visibility caused by silt disturbance and darkness.',
        note: 'Combines two related ideas from different parts of the passage into a single coherent point. Examiners reward this kind of grouping.',
      },
      {
        answer: 'Disorientation from losing sight of the guideline or dive partner.',
        note: 'Specific detail from the passage, paraphrased. Not vague -- says what causes the disorientation.',
      },
      {
        answer: 'Physical exhaustion from swimming against strong underwater currents.',
        note: 'Demonstrates the student has read beyond the obvious dangers and found supporting detail about currents.',
      },
      {
        answer: 'Psychological panic which can cause divers to make fatal errors.',
        note: 'This shows awareness of implicit meaning: the passage describes panic without using the word directly, and the summary marks reward points the text only implies.',
      },
    ],
  },
  {
    title: 'Summary notes: Benefits of urban green spaces',
    grade: 'A*/9',
    mark: 'Plan',
    question:
      'Summary focus: what benefits of urban green spaces does Text B describe? List the points in short notes first.',
    points: [
      {
        answer: 'Improved mental health by reducing stress and anxiety levels.',
        note: 'The passage says people "feel calmer". The student upgrades to clinical language -- acceptable and rewarded as own words.',
      },
      {
        answer: 'Physical health benefits from encouraging outdoor exercise.',
        note: 'Clean paraphrase. Does not copy "people jog and walk" but captures the idea.',
      },
      {
        answer: 'Reduction in urban air pollution through trees absorbing carbon dioxide.',
        note: 'Scientific detail retained but rephrased. The examiner notes this as evidence of understanding, not just copying.',
      },
      {
        answer: 'Community cohesion as parks provide spaces for people to socialise.',
        note: 'Abstract concept ("community cohesion") drawn from concrete passage detail ("neighbours meet"). An inferred point like this counts towards the reading mark.',
      },
      {
        answer: 'Habitat for wildlife, maintaining biodiversity within cities.',
        note: 'Precise vocabulary ("biodiversity") that signals a confident reader. The passage mentions "birds and insects" -- the student generalises.',
      },
      {
        answer: 'Reduction of the "urban heat island" effect through tree shade and evaporation.',
        note: 'Technical term from the passage quoted correctly. The explanation around it shows understanding.',
      },
      {
        answer: 'Increased property values in areas close to parks.',
        note: 'Economic benefit mentioned only once in the passage. Spotting it shows thorough reading.',
      },
      {
        answer: 'Educational opportunities for children to learn about nature.',
        note: 'Final point from the last paragraph. Examiners reward candidates who read to the end of the passage.',
      },
    ],
  },
]

/* ────────────────────────────────────────────────────────────────────────────
   QUESTION 3 - LANGUAGE TASK: GRADE C vs A* COMPARISON
   ──────────────────────────────────────────────────────────────────────────── */

const q2Passage =
  'The forest closed around them like a fist. Branches clawed at their sleeves, and the path, which had been clear and sandy an hour ago, had narrowed to a thread of grey mud. Somewhere ahead, a bird screamed once and then was silent, and the silence that followed was worse than the scream.'

const q2GradeC = {
  grade: 'Grade C',
  mark: '5/10',
  paragraphs: [
    {
      text: 'The writer uses a simile "like a fist" which shows the forest is closing in on them. This makes it seem dangerous.',
      note: 'The technique is identified and the simile is quoted correctly, but the analysis stops at surface level. "Dangerous" is too vague -- what kind of danger? There is no exploration of connotation. Level 3.',
    },
    {
      text: 'The word "clawed" is a verb that makes the branches seem like an animal. This is personification and it makes the reader feel scared.',
      note: 'Correct identification of personification, but "makes the reader feel scared" is a generic effect statement. The examiner wants to know what kind of fear, and why "clawed" specifically (as opposed to "grabbed" or "touched"). No connotation analysis.',
    },
    {
      text: 'The bird "screamed" which is onomatopoeia and makes the forest sound frightening. The silence afterwards is also scary.',
      note: '"Screamed" is not onomatopoeia -- it is personification (birds do not literally scream). Misidentifying a technique costs marks. "Scary" repeated from previous paragraph. The point about silence is potentially strong but unexplored.',
    },
  ],
}

const q2GradeA = {
  grade: 'Grade A*/9',
  mark: '9/10',
  paragraphs: [
    {
      text: 'The writer compares the forest to "a fist", a simile that transforms the landscape from a passive setting into an active aggressor. A fist is clenched deliberately, with intent to strike -- the connotation is not merely of enclosure but of violence about to happen. The reader is positioned as the victim inside that fist, trapped and waiting for the blow.',
      note: 'Three layers: technique identified, connotation unpacked ("clenched deliberately... intent to strike"), and reader positioning explained. This is Level 5 analysis -- the student does not stop at "it\'s dangerous" but explains the precise quality of danger.',
    },
    {
      text: 'The verb "clawed" personifies the branches as predatory, suggesting they are not simply obstructing the path but actively hunting. "Clawed" carries associations of wild animals -- talons, desperation, tearing -- and works alongside "fist" to build a coherent pattern of the natural world as hostile and sentient. The shift from "clear and sandy" to "a thread of grey mud" further reinforces this: the path itself is being consumed.',
      note: 'Semantic field analysis (fist + clawed = pattern of hostility). The student links multiple words rather than treating each in isolation: this is the range of choices the higher levels look for. The colour shift (sandy to grey) is a subtle observation.',
    },
    {
      text: 'The bird\'s single scream is given human qualities -- birds call or cry, but "screamed" implies terror, as though the forest frightens even its own inhabitants. The most effective moment, however, is the paradox that follows: "the silence that followed was worse than the scream." By stating that absence of sound is more threatening than the sound itself, the writer forces the reader to imagine what could be so terrible that even the bird has been silenced. The fear shifts from the known to the unknown.',
      note: 'Sophisticated reading: the student identifies personification correctly, then analyses the paradox and its psychological effect. The phrase "fear shifts from the known to the unknown" is the kind of conceptual language that earns Level 5. Notice the student does not just list techniques -- they build an argument.',
    },
  ],
}

/* ────────────────────────────────────────────────────────────────────────────
   QUESTION 2(a) - SUMMARY MODEL ANSWER
   ──────────────────────────────────────────────────────────────────────────── */

const q3Model = {
  title: 'Q2(a) Model: Challenges of living in extreme cold',
  grade: 'A*/9',
  mark: '15/15',
  question:
    'Using Text B, summarise the challenges people face when living in extremely cold environments. Write in continuous prose, not notes, keeping to your own words wherever you can, in no more than 120 words.',
  text: 'People living in extreme cold struggle first to stay warm: long exposure brings hypothermia and frostbite, so they must wear many layers and limit their time outdoors. Because frozen ground prevents farming, communities rely on costly imported or preserved food, and on hunting and fishing. Buildings must be engineered to survive repeated freezing and thawing, and pipes need heavy insulation to stop them bursting. Storms can close roads and runways, cutting settlements off for weeks. Months of darkness bring seasonal depression and disturbed sleep, made worse by isolation. Finally, healthcare is hard to reach, so injuries that would be treated easily elsewhere can become life-threatening.',
  annotations: [
    {
      label: 'Selection',
      note: 'The summary covers the main points from Text B that fit the focus: staying warm, food supply, buildings and pipes, isolation by storms, the effects of darkness and access to healthcare. It leaves out examples and repetition, for which the limit has no room.',
    },
    {
      label: 'Own words',
      note: 'Every point is rephrased. The passage says "people get sad in winter"; the summary says "seasonal depression". The passage mentions "pipes crack"; the summary says "pipes need heavy insulation to stop them bursting." This consistent rephrasing is what the writing marks reward.',
    },
    {
      label: 'Structure',
      note: 'The summary groups related points (physical, food, buildings, isolation, psychological, medical) rather than following the order of the passage. Combining points into single sentences is how it fits so much into so few words.',
    },
    {
      label: 'Formal register',
      note: 'No personal opinion, no rhetorical questions, no quotation marks. The register is neutral throughout, and words like "because", "so" and "finally" link the points without feeling mechanical.',
    },
    {
      label: 'Word count',
      note: 'At about 105 words, it stays within the 120-word limit the question sets. Combining related points, rather than listing them, is how a summary stays inside the limit.',
    },
  ],
}

export default async function Paper1ModelAnswersPage() {
  await requireIgcseBoard(['cambridge-0500'])

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
            <Badge variant="secondary">Paper 1 models</Badge>
          </div>
          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            Paper 1 model answers
          </h1>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
            Five model answers for two Paper 1 tasks: the summary in Question 2(a), from
            point-selection notes to a finished summary, and the Question 3 language task at Grade C
            and A* compared side by side. Every answer includes examiner-style annotations
            explaining exactly what earns marks.
          </p>
          <p className="mt-3 max-w-2xl text-body-sm text-muted-foreground">
            These follow the paper for exams from 2027. On the November 2026 paper the summary is
            part of Question 1, and the language task is part of Question 2 and marked out of 15,
            not 10.
          </p>
        </div>
      </section>

      {/* ── Q2(a) Summary notes ───────────────────────────────────────── */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <Target className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">
            Question 2(a) - Selecting the points
          </h2>
        </div>

        <div className="rounded-xl border border-border/60 bg-muted/30 p-5">
          <p className="text-body-sm text-muted-foreground leading-relaxed">
            The summary in Question 2(a) starts with selection. You are given a focus (e.g.
            &quot;dangers&quot; or &quot;benefits&quot;) and must find the points in Text B that fit
            it, including ones it only implies, in your own words. Short notes are your plan, not
            your answer: the summary itself is continuous writing of no more than 120 words.
          </p>
        </div>

        {q1Models.map((model) => (
          <div key={model.title} className="space-y-4">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Award className="size-5 text-primary" />
                <h3 className="text-heading-md font-heading text-foreground">{model.title}</h3>
              </div>
              <Badge className="bg-primary/10 text-primary border-primary/20">{model.mark}</Badge>
            </div>

            <div className="rounded-xl border border-border/60 bg-muted/20 p-4">
              <p className="text-body-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Question
              </p>
              <p className="mt-1 text-body-sm italic text-foreground">{model.question}</p>
            </div>

            {model.points.map((p, i) => (
              <Card key={i}>
                <CardHeader className="pb-3">
                  <CardTitle className="text-body-xs uppercase tracking-wide text-muted-foreground">
                    Point {i + 1}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-body-md leading-relaxed text-foreground">{p.answer}</p>
                  <div className="rounded-lg border border-border/60 bg-primary/5 p-4">
                    <p className="text-body-xs font-semibold uppercase tracking-wide text-primary">
                      Examiner note
                    </p>
                    <p className="mt-2 text-body-sm text-foreground">{p.note}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ))}
      </section>

      {/* ── Q2(a) Summary Model ──────────────────────────────────────────── */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <Award className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">Question 2(a) - Summary</h2>
        </div>

        <div className="rounded-xl border border-border/60 bg-muted/30 p-5">
          <p className="text-body-sm text-muted-foreground leading-relaxed">
            Question 2(a) asks you to summarise the points in Text B that fit a focus, in continuous
            writing of no more than 120 words. You are marked on reading (how well you select the
            relevant points, 10 marks) and writing (how clearly and concisely you use your own
            words, 5 marks). No quotation, no opinion, no bullet points.
          </p>
        </div>

        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Award className="size-5 text-primary" />
            <h3 className="text-heading-md font-heading text-foreground">{q3Model.title}</h3>
          </div>
          <Badge className="bg-primary/10 text-primary border-primary/20">{q3Model.mark}</Badge>
        </div>

        <div className="rounded-xl border border-border/60 bg-muted/20 p-4">
          <p className="text-body-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Question
          </p>
          <p className="mt-1 text-body-sm italic text-foreground">{q3Model.question}</p>
        </div>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-body-xs uppercase tracking-wide text-muted-foreground">
              Model summary
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="whitespace-pre-line text-body-md leading-relaxed text-foreground">
              {q3Model.text}
            </p>
          </CardContent>
        </Card>

        {q3Model.annotations.map((a) => (
          <div key={a.label} className="rounded-lg border border-border/60 bg-primary/5 p-4">
            <p className="text-body-xs font-semibold uppercase tracking-wide text-primary">
              {a.label}
            </p>
            <p className="mt-2 text-body-sm text-foreground">{a.note}</p>
          </div>
        ))}
      </section>

      {/* ── Q3 Language task: C vs A* ─────────────────────────────── */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <ArrowUpDown className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">
            Question 3 - Language task: Grade C vs A*
          </h2>
        </div>

        <div className="rounded-xl border border-border/60 bg-muted/30 p-5">
          <p className="text-body-sm text-muted-foreground leading-relaxed">
            The language task in Question 3 asks how the writer of Text C uses language to create
            meaning and effect in an extract. Below is the same passage analysed at Grade C and then
            at Grade A*, so you can see precisely what separates an average response from a top-band
            one.
          </p>
        </div>

        {/* Passage */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-body-xs uppercase tracking-wide text-muted-foreground">
              Source passage
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-body-md italic leading-relaxed text-foreground">
              &ldquo;{q2Passage}&rdquo;
            </p>
          </CardContent>
        </Card>

        {/* Grade C response */}
        <div className="space-y-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Award className="size-5 text-muted-foreground" />
              <h3 className="text-heading-md font-heading text-foreground">
                {q2GradeC.grade} response
              </h3>
            </div>
            <Badge variant="secondary">{q2GradeC.mark}</Badge>
          </div>

          {q2GradeC.paragraphs.map((p, i) => (
            <Card key={i}>
              <CardHeader className="pb-3">
                <CardTitle className="text-body-xs uppercase tracking-wide text-muted-foreground">
                  Paragraph {i + 1}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-body-md leading-relaxed text-foreground">{p.text}</p>
                <div className="rounded-lg border border-border/60 bg-muted/40 p-4">
                  <p className="text-body-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Examiner note
                  </p>
                  <p className="mt-2 text-body-sm text-foreground">{p.note}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Grade A* response */}
        <div className="space-y-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Award className="size-5 text-primary" />
              <h3 className="text-heading-md font-heading text-foreground">
                {q2GradeA.grade} response
              </h3>
            </div>
            <Badge className="bg-primary/10 text-primary border-primary/20">{q2GradeA.mark}</Badge>
          </div>

          {q2GradeA.paragraphs.map((p, i) => (
            <Card key={i}>
              <CardHeader className="pb-3">
                <CardTitle className="text-body-xs uppercase tracking-wide text-muted-foreground">
                  Paragraph {i + 1}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-body-md leading-relaxed text-foreground">{p.text}</p>
                <div className="rounded-lg border border-border/60 bg-primary/5 p-4">
                  <p className="text-body-xs font-semibold uppercase tracking-wide text-primary">
                    Examiner note
                  </p>
                  <p className="mt-2 text-body-sm text-foreground">{p.note}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Key differences summary */}
        <Card>
          <CardHeader>
            <CardTitle className="text-heading-sm font-heading">
              What separates Grade C from A*?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-border/60 bg-muted/30 p-4">
                <p className="mb-2 text-body-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Grade C tends to...
                </p>
                <ul className="space-y-1.5 text-body-sm text-muted-foreground">
                  <li>Name a technique without analysing its effect</li>
                  <li>Use vague words like &quot;scary&quot; or &quot;interesting&quot;</li>
                  <li>Treat each word in isolation</li>
                  <li>Misidentify techniques (e.g. calling personification onomatopoeia)</li>
                  <li>Stop at the literal meaning</li>
                </ul>
              </div>
              <div className="rounded-xl border border-border/60 bg-primary/5 p-4">
                <p className="mb-2 text-body-xs font-semibold uppercase tracking-wide text-primary">
                  Grade A* tends to...
                </p>
                <ul className="space-y-1.5 text-body-sm text-foreground">
                  <li>Explore connotations and layers of meaning</li>
                  <li>
                    Use precise vocabulary: &quot;predatory&quot;, &quot;sentient&quot;,
                    &quot;paradox&quot;
                  </li>
                  <li>Link words into patterns and semantic fields</li>
                  <li>Explain the reader&apos;s psychological response</li>
                  <li>Build an argument across the whole response</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* ── Footer ────────────────────────────────────────────────────── */}
      <p className="text-center text-body-xs text-muted-foreground-subtle">
        Aligns with Cambridge syllabus 0500 - Paper 1 Reading
      </p>
    </div>
  )
}
