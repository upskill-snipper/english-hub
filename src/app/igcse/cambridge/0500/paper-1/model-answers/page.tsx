import type { Metadata } from 'next'
import Link from 'next/link'
import { Award, Sparkles, ChevronLeft, Target, ArrowUpDown } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { requireIgcseBoard } from '@/app/igcse/_lib/guard'

export const metadata: Metadata = {
  title: 'Paper 1 Model Answers — IGCSE Language A 0500',
  description:
    'Five Grade A*/9 model answers for Cambridge IGCSE 0500 Paper 1: retrieval (Q1), language analysis (Q2 at Grade C and A* compared), and summary (Q3). Each with examiner annotations.',
  alternates: {
    canonical:
      'https://theenglishhub.app/igcse/cambridge/0500/paper-1/model-answers',
  },
}

/* ────────────────────────────────────────────────────────────────────────────
   Q1 — RETRIEVAL MODEL ANSWERS (2 examples)
   ──────────────────────────────────────────────────────────────────────────── */

const q1Models = [
  {
    title: 'Q1 Model: Dangers faced by deep-sea divers',
    grade: 'A*/9',
    mark: '15/15',
    question:
      'According to the passage, what dangers do deep-sea divers face? Write your answer using short notes. You do not need to use complete sentences.',
    points: [
      {
        answer: 'Nitrogen narcosis causes confusion and impaired judgement at depth.',
        note: 'Lifted point but rephrased in own words. "Confusion and impaired judgement" paraphrases the passage\'s "loss of clear thinking". Full mark.',
      },
      {
        answer: 'Decompression sickness ("the bends") if they ascend too quickly.',
        note: 'Technical term included alongside the colloquial name. The examiner rewards both precision and accessibility.',
      },
      {
        answer: 'Hypothermia from prolonged exposure to near-freezing water.',
        note: 'Uses "prolonged exposure" rather than the passage\'s "staying too long" -- own words earn full credit.',
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
        note: 'This shows awareness of implicit meaning -- the passage describes panic without using the word directly. Inference marks earned.',
      },
    ],
  },
  {
    title: 'Q1 Model: Benefits of urban green spaces',
    grade: 'A*/9',
    mark: '15/15',
    question:
      'What benefits of urban green spaces are described in the passage? Write your answer using short notes.',
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
        note: 'Abstract concept ("community cohesion") drawn from concrete passage detail ("neighbours meet"). This inference earns full marks.',
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
   Q2 — LANGUAGE ANALYSIS: GRADE C vs A* COMPARISON
   ──────────────────────────────────────────────────────────────────────────── */

const q2Passage =
  'The forest closed around them like a fist. Branches clawed at their sleeves, and the path, which had been clear and sandy an hour ago, had narrowed to a thread of grey mud. Somewhere ahead, a bird screamed once and then was silent, and the silence that followed was worse than the scream.'

const q2GradeC = {
  grade: 'Grade C',
  mark: '8/15',
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
  mark: '14/15',
  paragraphs: [
    {
      text: 'The writer compares the forest to "a fist", a simile that transforms the landscape from a passive setting into an active aggressor. A fist is clenched deliberately, with intent to strike -- the connotation is not merely of enclosure but of violence about to happen. The reader is positioned as the victim inside that fist, trapped and waiting for the blow.',
      note: 'Three layers: technique identified, connotation unpacked ("clenched deliberately... intent to strike"), and reader positioning explained. This is Level 5 analysis -- the student does not stop at "it\'s dangerous" but explains the precise quality of danger.',
    },
    {
      text: 'The verb "clawed" personifies the branches as predatory, suggesting they are not simply obstructing the path but actively hunting. "Clawed" carries associations of wild animals -- talons, desperation, tearing -- and works alongside "fist" to build a coherent pattern of the natural world as hostile and sentient. The shift from "clear and sandy" to "a thread of grey mud" further reinforces this: the path itself is being consumed.',
      note: 'Semantic field analysis (fist + clawed = pattern of hostility). The student links multiple words rather than treating each in isolation -- this is what "wide-ranging" means in the mark scheme. The colour shift (sandy to grey) is a subtle observation.',
    },
    {
      text: 'The bird\'s single scream is given human qualities -- birds call or cry, but "screamed" implies terror, as though the forest frightens even its own inhabitants. The most effective moment, however, is the paradox that follows: "the silence that followed was worse than the scream." By stating that absence of sound is more threatening than the sound itself, the writer forces the reader to imagine what could be so terrible that even the bird has been silenced. The fear shifts from the known to the unknown.',
      note: 'Sophisticated reading: the student identifies personification correctly, then analyses the paradox and its psychological effect. The phrase "fear shifts from the known to the unknown" is the kind of conceptual language that earns Level 5. Notice the student does not just list techniques -- they build an argument.',
    },
  ],
}

/* ────────────────────────────────────────────────────────────────────────────
   Q3 — SUMMARY MODEL ANSWER
   ──────────────────────────────────────────────────────────────────────────── */

const q3Model = {
  title: 'Q3 Model: Challenges of living in extreme cold',
  grade: 'A*/9',
  mark: '15/15',
  question:
    'Using information from both texts, summarise the challenges people face when living in extremely cold environments. Write approximately 250 words. You must use continuous writing (not note form) and your own words as far as possible.',
  text: 'Living in extremely cold environments presents numerous physical and logistical challenges. The most immediate difficulty is maintaining body temperature, as prolonged exposure to sub-zero conditions leads to hypothermia and frostbite, both of which can cause permanent tissue damage or death. Residents must wear multiple insulating layers and limit time outdoors, particularly during polar winters when temperatures may fall below minus fifty degrees.\n\nThe cold also creates significant challenges for food production. Agricultural land is either frozen or covered in snow for most of the year, meaning communities depend heavily on imported supplies, preserved foods, and, in indigenous populations, traditional hunting and fishing. The cost of transporting provisions to remote arctic settlements can be extraordinarily high, placing financial strain on inhabitants.\n\nInfrastructure is equally affected. Buildings must be specially engineered to withstand the expansion and contraction caused by freeze-thaw cycles, and water pipes require extensive insulation to prevent them from bursting. Roads and runways become impassable during severe storms, isolating communities for days or weeks at a time.\n\nFurthermore, the psychological impact of extended darkness during winter months is considerable. Seasonal depression affects a significant proportion of residents, and the limited daylight disrupts normal sleep patterns, reducing productivity and overall wellbeing. Social isolation compounds this, as harsh weather discourages outdoor activity and limits opportunities for communal interaction.\n\nFinally, access to healthcare and emergency services is severely restricted in remote frozen regions, meaning that injuries or illnesses which would be easily treated elsewhere can become life-threatening.',
  annotations: [
    {
      label: 'Point density',
      note: 'The answer contains 15 distinct content points drawn from both passages: body temperature, hypothermia, frostbite, layered clothing, limited outdoor time, frozen agricultural land, imported food, traditional hunting, transport costs, building engineering, pipe insulation, road closure, seasonal depression, sleep disruption, and healthcare access. This comfortably exceeds the threshold for top marks.',
    },
    {
      label: 'Own words',
      note: 'Every point is rephrased. The passage says "people get sad in winter" -- the summary says "seasonal depression affects a significant proportion of residents." The passage mentions "pipes crack" -- the summary says "water pipes require extensive insulation to prevent them from bursting." This consistent rephrasing earns full marks for language.',
    },
    {
      label: 'Structure',
      note: 'The summary is organised thematically (physical, food, infrastructure, psychological, medical) rather than following the order of the passages. This shows the student has processed and reorganised the material, which the mark scheme rewards.',
    },
    {
      label: 'Formal register',
      note: 'No personal opinion, no rhetorical questions, no quotation marks. The register is neutral and academic throughout. Phrases like "furthermore" and "meaning that" provide cohesion without feeling mechanical.',
    },
    {
      label: 'Word count',
      note: 'At approximately 250 words, this sits within the expected range. Going significantly over risks repetition; going significantly under risks missing points.',
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
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="relative">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge className="bg-primary/10 text-primary border-primary/20">
              <Sparkles className="mr-1 size-3" />
              Cambridge IGCSE 0500
            </Badge>
            <Badge variant="secondary">Paper 1 models</Badge>
          </div>
          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            Paper 1 model answers
          </h1>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
            Five model answers across all three Paper 1 question types: retrieval
            (Q1), language analysis (Q2 at Grade C and A* compared side by side),
            and summary writing (Q3). Every answer includes examiner-style
            annotations explaining exactly what earns marks.
          </p>
        </div>
      </section>

      {/* ── Q1 Retrieval Models ───────────────────────────────────────── */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <Target className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">
            Question 1 — Retrieval
          </h2>
        </div>

        <div className="rounded-xl border border-border/60 bg-muted/30 p-5">
          <p className="text-body-sm text-muted-foreground leading-relaxed">
            Question 1 tests your ability to locate and rephrase information from
            the passage. You are given a specific focus (e.g. &quot;dangers&quot;
            or &quot;benefits&quot;) and must list relevant points in your own
            words. Short notes are acceptable. Aim for 12&ndash;15 points to be
            safe &mdash; the mark scheme rewards breadth of reading.
          </p>
        </div>

        {q1Models.map((model) => (
          <div key={model.title} className="space-y-4">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Award className="size-5 text-primary" />
                <h3 className="text-heading-md font-heading text-foreground">
                  {model.title}
                </h3>
              </div>
              <Badge className="bg-primary/10 text-primary border-primary/20">
                {model.mark}
              </Badge>
            </div>

            <div className="rounded-xl border border-border/60 bg-muted/20 p-4">
              <p className="text-body-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Question
              </p>
              <p className="mt-1 text-body-sm italic text-foreground">
                {model.question}
              </p>
            </div>

            {model.points.map((p, i) => (
              <Card key={i}>
                <CardHeader className="pb-3">
                  <CardTitle className="text-body-xs uppercase tracking-wide text-muted-foreground">
                    Point {i + 1}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-body-md leading-relaxed text-foreground">
                    {p.answer}
                  </p>
                  <div className="rounded-lg border border-border/60 bg-primary/5 p-4">
                    <p className="text-body-xs font-semibold uppercase tracking-wide text-primary">
                      Examiner note
                    </p>
                    <p className="mt-2 text-body-sm text-foreground">
                      {p.note}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ))}
      </section>

      {/* ── Q2 Language Analysis: C vs A* ─────────────────────────────── */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <ArrowUpDown className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">
            Question 2 — Language analysis: Grade C vs A*
          </h2>
        </div>

        <div className="rounded-xl border border-border/60 bg-muted/30 p-5">
          <p className="text-body-sm text-muted-foreground leading-relaxed">
            Question 2 asks how the writer uses language to create meaning and
            effect. Below is the same passage analysed at Grade C and then at
            Grade A*, so you can see precisely what separates an average response
            from a top-band one.
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
                <p className="text-body-md leading-relaxed text-foreground">
                  {p.text}
                </p>
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
            <Badge className="bg-primary/10 text-primary border-primary/20">
              {q2GradeA.mark}
            </Badge>
          </div>

          {q2GradeA.paragraphs.map((p, i) => (
            <Card key={i}>
              <CardHeader className="pb-3">
                <CardTitle className="text-body-xs uppercase tracking-wide text-muted-foreground">
                  Paragraph {i + 1}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-body-md leading-relaxed text-foreground">
                  {p.text}
                </p>
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
                  <li>Use precise vocabulary: &quot;predatory&quot;, &quot;sentient&quot;, &quot;paradox&quot;</li>
                  <li>Link words into patterns and semantic fields</li>
                  <li>Explain the reader&apos;s psychological response</li>
                  <li>Build an argument across the whole response</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* ── Q3 Summary Model ──────────────────────────────────────────── */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <Award className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">
            Question 3 — Summary
          </h2>
        </div>

        <div className="rounded-xl border border-border/60 bg-muted/30 p-5">
          <p className="text-body-sm text-muted-foreground leading-relaxed">
            Question 3 asks you to summarise information from two passages into a
            single continuous paragraph of about 250 words. You are marked on
            content (how many relevant points you include) and language (how
            effectively you use your own words). No quotation, no opinion, no
            bullet points.
          </p>
        </div>

        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Award className="size-5 text-primary" />
            <h3 className="text-heading-md font-heading text-foreground">
              {q3Model.title}
            </h3>
          </div>
          <Badge className="bg-primary/10 text-primary border-primary/20">
            {q3Model.mark}
          </Badge>
        </div>

        <div className="rounded-xl border border-border/60 bg-muted/20 p-4">
          <p className="text-body-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Question
          </p>
          <p className="mt-1 text-body-sm italic text-foreground">
            {q3Model.question}
          </p>
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
          <div
            key={a.label}
            className="rounded-lg border border-border/60 bg-primary/5 p-4"
          >
            <p className="text-body-xs font-semibold uppercase tracking-wide text-primary">
              {a.label}
            </p>
            <p className="mt-2 text-body-sm text-foreground">{a.note}</p>
          </div>
        ))}
      </section>

      {/* ── Footer ────────────────────────────────────────────────────── */}
      <p className="text-center text-body-xs text-muted-foreground/60">
        Aligns with Cambridge syllabus 0500 &mdash; Paper 1 Reading
      </p>
    </div>
  )
}
