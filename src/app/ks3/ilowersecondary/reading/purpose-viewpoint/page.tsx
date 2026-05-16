import type { Metadata } from 'next'
import Link from 'next/link'
import { headers } from 'next/headers'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
import {
  ASSESSMENT_OBJECTIVES,
  READING_SKILLS,
  QUESTION_TYPES,
  NON_FICTION_PURPOSES,
  SPEC_ATTRIBUTION,
} from '@/lib/ilowersecondary/spec'

const PAGE_URL = 'https://theenglishhub.app/ks3/ilowersecondary/reading/purpose-viewpoint'

const RAO5 = ASSESSMENT_OBJECTIVES.RAO5
const SKILL_14 = READING_SKILLS.find((s) => s.code === '1.4')!
const MEANING_Q = QUESTION_TYPES.find((q) => q.id === 'meaning-impact')!
const APPEAL_Q = QUESTION_TYPES.find((q) => q.id === 'which-text-appealing')!

export const metadata: Metadata = {
  openGraph: {
    title: 'Purpose & viewpoint (RAO5) — iLowerSecondary English reading masterclass',
    description:
      "A masterclass on RAO5: identifying a writer's purpose and signposting language, detecting viewpoint, bias and tone across a whole text, and answering the meaning/impact and text-appeal questions in Pearson style.",
  },
  title: 'Purpose & viewpoint (RAO5) — reading masterclass',
  description:
    "A masterclass on RAO5: identifying a writer's purpose and signposting language, detecting viewpoint, bias and tone across a whole text, and answering the meaning/impact and text-appeal questions in Pearson style.",
  alternates: { canonical: PAGE_URL },
}

// ── Purpose families ───────────────────────────────────────────────────
// One card per NON_FICTION_PURPOSES value; signposting language helps a
// reader recognise the purpose from the language alone.
const PURPOSE_GUIDE: Record<
  (typeof NON_FICTION_PURPOSES)[number],
  { aim: string; signposts: string[]; tellTale: string }
> = {
  argue: {
    aim: 'To put forward one side of a debate and win the reader round to a position.',
    signposts: [
      'Firstly… / Furthermore… / Therefore… (logical connectives that build a case)',
      'Surely no reasonable person would… (assumes the reader agrees)',
      'It is clear that… / The evidence proves… (assertive, confident claims)',
      'Counter-and-rebut moves: "Some claim X. However, this ignores…"',
    ],
    tellTale:
      'A consistent, one-sided stance. The writer wants you to end up agreeing, not just informed.',
  },
  describe: {
    aim: 'To create a vivid picture so the reader can imagine a place, person or moment.',
    signposts: [
      'Sensory detail — what things look, sound, smell, feel like',
      'Adjectives and adverbs stacked for atmosphere ("a thin, grey light")',
      'Similes and metaphors that compare to make the unfamiliar clear',
      'Slowed pace; little new information, much sensory texture',
    ],
    tellTale: 'You could draw the scene afterwards. Mood matters more than facts or instructions.',
  },
  explain: {
    aim: 'To make a process, idea or reason clear — answering "how?" or "why?"',
    signposts: [
      'Because… / This happens when… / As a result… (cause and effect)',
      'Sequencing: "First… then… finally…"',
      'Defining language: "This means that…", "In other words…"',
      'A calm, neutral tone that assumes the reader does not yet understand',
    ],
    tellTale: 'After reading you understand a process or reason — not just a list of facts.',
  },
  inform: {
    aim: 'To give the reader accurate facts and information about a subject.',
    signposts: [
      'Facts, dates, statistics and named sources',
      'A neutral, impersonal tone with few opinion words',
      'Third person; the writer stays out of the way',
      'Sub-headings, figures and clear topic sentences',
    ],
    tellTale: 'Mostly verifiable facts. Remove the opinions and almost nothing changes.',
  },
  persuade: {
    aim: 'To move the reader towards an action, choice or feeling.',
    signposts: [
      'Direct address ("you", "imagine", "join us")',
      'Emotive vocabulary and rhetorical questions',
      'Rule of three, repetition and a memorable closing call to action',
      'Selective, flattering evidence — the best case, not the full picture',
    ],
    tellTale:
      'You are nudged to do or buy or believe something. Feeling is targeted, not just thought.',
  },
}

// ── Detective toolkit ──────────────────────────────────────────────────
const DETECTIVE_STEPS = [
  {
    clue: 'Form & where it appeared',
    ask: 'Is it a leaflet, blog, news article, biography? A charity leaflet usually persuades; a report usually informs.',
  },
  {
    clue: 'Headline & opening',
    ask: 'Does the first line state a fact, paint a picture, ask you something, or push an opinion? Openings declare intent.',
  },
  {
    clue: 'Pronouns',
    ask: '"You/we" pulls the reader in (persuade/argue). Steady third person keeps distance (inform/explain).',
  },
  {
    clue: 'Fact-to-opinion ratio',
    ask: 'Count them. Mostly checkable facts → inform. Mostly loaded claims → argue or persuade.',
  },
  {
    clue: 'Loaded vs neutral words',
    ask: 'Swap an emotive word for a plain one. If the meaning barely changes it was informing; if the feeling collapses it was persuading.',
  },
  {
    clue: 'Tone across the whole text',
    ask: 'Is the attitude steady or does it shift? Track tone start, middle and end — viewpoint lives in the pattern, not one line.',
  },
  {
    clue: 'What is left out',
    ask: 'A one-sided selection of evidence is itself a sign of bias and a persuasive or argumentative purpose.',
  },
  {
    clue: 'The ending',
    ask: 'A call to action = persuade. A summary of findings = inform/explain. A resolved mood = describe.',
  },
]

// ── Effect-on-the-reader vocabulary ────────────────────────────────────
const EFFECT_VOCAB: { band: string; words: string }[] = [
  {
    band: 'Makes the reader think',
    words:
      'challenges, provokes, questions, persuades, convinces, reassures, informs, clarifies, alerts',
  },
  {
    band: 'Makes the reader feel',
    words: 'sympathy, outrage, alarm, nostalgia, admiration, unease, pity, urgency, guilt, hope',
  },
  {
    band: 'Describing the writer’s tone',
    words:
      'critical, admiring, ironic, urgent, measured, sceptical, affectionate, indignant, detached, playful',
  },
  {
    band: 'Describing the overall effect',
    words:
      'engaging, compelling, moving, unsettling, balanced, one-sided, vivid, authoritative, alarming, uplifting',
  },
]

// ── Original practice extracts (100% original — no past-paper text) ────
const EXTRACTS = [
  {
    label: 'Extract A',
    source: 'From a town council information leaflet (purpose: inform)',
    purpose: 'inform',
    viewpoint: 'Neutral and impersonal. The writer stays out of the way and lets the facts speak.',
    text: [
      'The new river path opened in March. It runs for two kilometres between the old mill and the railway bridge, and is surfaced for wheelchairs and pushchairs. The path is lit until ten o’clock each evening. Dogs are welcome if kept on a lead. A small car park with twelve spaces sits at the mill end; the nearest bus stop is on Bridge Road, a four-minute walk away.',
    ],
    question: {
      stem: 'The writer says the path "is surfaced for wheelchairs and pushchairs". What did the writer mean by including this detail, and what is its effect on the reader? (2 marks)',
      qType: MEANING_Q,
      model:
        'The writer means the path has a smooth, hard surface chosen so that wheels do not sink or get stuck, so people who use wheelchairs or push prams can use it easily (1 mark — explains the deeper meaning, not just a lift). The effect is that the reader sees the path as welcoming and open to everyone, which reassures families and disabled visitors that it has been planned with them in mind (1 mark — effect on the reader).',
      markNote:
        'This is the RAO5 "What did the writer mean / impact" item: 1 mark for explaining the deeper meaning (an unexplained copy of the words scores nothing), 1 mark for the effect on the reader.',
    },
  },
  {
    label: 'Extract B',
    source: 'From a campaign blog post (purpose: persuade / argue)',
    purpose: 'persuade',
    viewpoint:
      'Strongly one-sided. The writer is committed to the cause and wants the reader to act, using "you", emotive words and a closing call to action.',
    text: [
      'Picture your last walk by the river. Now picture it lined with discarded bottles, the reeds choking on plastic. This is not a distant problem — it is happening on your doorstep, today. Every bag you carry home, every litter pick you join, turns the tide a little. Surely none of us wants to hand our children a poisoned river. Give one Saturday morning this month. The river cannot wait, and neither should you.',
    ],
    question: {
      stem: 'How does the writer try to influence the reader in this extract? Explain the writer’s viewpoint and its effect. (2 marks)',
      qType: MEANING_Q,
      model:
        'The writer’s viewpoint is that river pollution is an urgent local crisis that every reader is personally responsible for solving (1 mark — identifies the viewpoint across the text, not one phrase). The effect is achieved through direct address ("your", "you") and the emotive image of children inheriting a "poisoned river", which makes the reader feel guilt and urgency and so more likely to volunteer (1 mark — effect on the reader linked to method).',
      markNote:
        'Viewpoint is judged across the whole extract: the steady one-sided stance plus the final call to action ("Give one Saturday") confirms a persuasive purpose, not a neutral one.',
    },
  },
  {
    label: 'Extract C',
    source: 'From a memoir (purpose: describe, with a personal viewpoint)',
    purpose: 'describe',
    viewpoint:
      'Affectionate and nostalgic. The writer looks back fondly; the tone is warm and the detail sensory rather than factual.',
    text: [
      'The river of my childhood was brown and slow and smelled of cut grass and diesel. On hot afternoons we lay on the warm planks of the jetty until the wood stuck to our skin, and watched the heron stand so still it might have been carved. Nothing happened there, and that was the point. The river kept its own unhurried time, and for one long summer it lent that time to us.',
    ],
    question: {
      stem: 'Texts B and C both describe a river. Which text do you find more appealing? Give one piece of evidence to support your choice. (2 marks)',
      qType: APPEAL_Q,
      model:
        'I find Text C more appealing because its calm, sensory description ("we lay on the warm planks of the jetty until the wood stuck to our skin") lets me picture and almost feel the lazy summer scene, which is more enjoyable to read than Text B’s pressure to act (1 mark — reasonable explanation of preference; 1 mark — appropriate textual evidence). [A choice of Text B, justified with its own evidence such as the emotive image of a "poisoned river", is equally creditable.]',
      markNote:
        'The RAO5 "which text is more appealing" item: 1 mark for a reasonable explanation of the preference and 1 mark for appropriate evidence. Either text can be chosen — the marks are for the quality of the reason and the evidence, not which one is picked.',
    },
  },
] as const

export default async function PurposeViewpointPage() {
  const nonce = (await headers()).get('x-nonce') ?? undefined

  const breadcrumb = [
    { name: 'Home', url: 'https://theenglishhub.app' },
    { name: 'KS3', url: 'https://theenglishhub.app/ks3' },
    {
      name: 'iLowerSecondary English',
      url: 'https://theenglishhub.app/ks3/ilowersecondary',
    },
    {
      name: 'Reading skills',
      url: 'https://theenglishhub.app/ks3/ilowersecondary',
    },
    { name: 'Purpose & viewpoint (RAO5)', url: PAGE_URL },
  ]

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumb} nonce={nonce} />

      <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-muted-foreground">
        <Link href="/" className="hover:text-foreground">
          Home
        </Link>
        <span> · </span>
        <Link href="/ks3" className="hover:text-foreground">
          KS3
        </Link>
        <span> · </span>
        <Link href="/ks3/ilowersecondary" className="hover:text-foreground">
          iLowerSecondary English
        </Link>
        <span> · </span>
        <Link href="/ks3/ilowersecondary" className="hover:text-foreground">
          Reading skills
        </Link>
        <span> · </span>
        <span>Purpose &amp; viewpoint (RAO5)</span>
      </p>

      <h1>Purpose &amp; viewpoint — the {RAO5.code} masterclass</h1>
      <p className="lead">
        {RAO5.code} asks you to {RAO5.descriptor.toLowerCase()} It is one of the most heavily
        weighted reading objectives on the paper, and it is the skill behind two short questions
        every candidate must answer well. This masterclass shows you how to spot a writer’s purpose,
        track viewpoint across a whole text, and write answers that match the Pearson mark scheme.
      </p>

      {/* ── What RAO5 is ──────────────────────────────────────────────── */}
      <section className="my-10">
        <h2>What {RAO5.code} rewards</h2>
        <div className="not-prose grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-border/60 bg-card p-5">
            <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-2">
              The objective
            </p>
            <p className="text-sm text-foreground leading-relaxed">{RAO5.descriptor}</p>
            <p className="mt-3 font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-1">
              Qualification weighting
            </p>
            <p className="text-sm text-muted-foreground">
              {RAO5.weightPct}% of the whole qualification — among the largest single reading
              weightings.
            </p>
          </div>
          <div className="rounded-xl border border-border/60 bg-card p-5">
            <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-2">
              Content skill {SKILL_14.code} — {SKILL_14.title}
            </p>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              {SKILL_14.bullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="text-primary" aria-hidden>
                    ·
                  </span>
                  <span className="leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
          In plain English: the examiner wants proof that you have worked out <em>why</em> the
          writer wrote the text, what attitude they hold towards the subject, and how the text is
          designed to land on you, the reader. It is not enough to copy out the writer’s words — you
          must explain the thinking behind them.
        </p>
      </section>

      {/* ── Identifying purpose ───────────────────────────────────────── */}
      <section className="my-10">
        <h2>Step 1 — Identify the purpose</h2>
        <p className="text-sm text-muted-foreground">
          Every non-fiction text in Section A is written to do one main job. The five purposes you
          will meet are below, each with the signposting language that gives the game away. Most
          real texts mix purposes — name the <em>dominant</em> one.
        </p>
        <div className="not-prose mt-4 grid gap-3 sm:grid-cols-2">
          {NON_FICTION_PURPOSES.map((p) => {
            const g = PURPOSE_GUIDE[p]
            return (
              <div key={p} className="rounded-xl border border-border/60 bg-card p-5">
                <h3 className="text-base font-semibold text-foreground capitalize">To {p}</h3>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{g.aim}</p>
                <p className="mt-3 font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-1">
                  Signposting language
                </p>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  {g.signposts.map((s) => (
                    <li key={s} className="flex gap-2">
                      <span className="text-primary" aria-hidden>
                        ·
                      </span>
                      <span className="leading-relaxed">{s}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-sm text-foreground leading-relaxed">
                  <span className="font-semibold">Tell-tale: </span>
                  {g.tellTale}
                </p>
              </div>
            )
          })}
        </div>
      </section>

      {/* ── Detecting viewpoint, bias and tone ────────────────────────── */}
      <section className="my-10">
        <h2>Step 2 — Track viewpoint, bias and tone</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Purpose is <em>what</em> the text is for; viewpoint is the writer’s attitude towards the
          subject. Viewpoint is rarely stated in one sentence — it builds across the whole text, so
          you must read for the pattern, not a single line.
        </p>
        <div className="not-prose mt-4 grid gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-border/60 bg-card p-4">
            <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-2">
              Viewpoint
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The writer’s stance: are they for or against the subject, warmly attached to it, or
              coolly detached? Look at which ideas are given most space and which words carry
              approval or disapproval.
            </p>
          </div>
          <div className="rounded-xl border border-border/60 bg-card p-4">
            <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-2">
              Bias
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A one-sided selection. Ask what evidence has been left out, whether opposing views are
              dismissed quickly, and whether the language is loaded rather than neutral.
            </p>
          </div>
          <div className="rounded-xl border border-border/60 bg-card p-4">
            <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-2">
              Tone
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The "voice" you hear: urgent, admiring, critical, ironic, measured. Tone can shift —
              track it at the start, the middle and the end to read viewpoint accurately.
            </p>
          </div>
        </div>
      </section>

      {/* ── Purpose detective toolkit ─────────────────────────────────── */}
      <section className="my-10">
        <div className="not-prose rounded-xl border border-primary/40 bg-primary/5 p-6">
          <p className="font-mono text-[11px] tracking-[0.16em] uppercase text-primary mb-1">
            Toolkit
          </p>
          <h2 className="text-xl font-semibold text-foreground mb-2">The purpose detective</h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            Run any unseen text through these eight clues. Two or three pointing the same way is
            usually enough to name the purpose and viewpoint with confidence.
          </p>
          <ol className="space-y-3">
            {DETECTIVE_STEPS.map((d, i) => (
              <li key={d.clue} className="flex gap-3">
                <span className="font-mono text-xs text-primary mt-0.5">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-sm text-muted-foreground leading-relaxed">
                  <span className="font-semibold text-foreground">{d.clue}. </span>
                  {d.ask}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── The two RAO5 short questions ──────────────────────────────── */}
      <section className="my-10">
        <h2>The two {RAO5.code} short questions — and how each is marked</h2>
        <p className="text-sm text-muted-foreground">
          Two short open-response questions test this objective directly. Knowing exactly where each
          mark comes from is the difference between one mark and two.
        </p>
        <div className="not-prose mt-4 grid gap-3 lg:grid-cols-2">
          {[MEANING_Q, APPEAL_Q].map((q) => (
            <div key={q.id} className="rounded-xl border border-border/60 bg-card p-5">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="text-base font-semibold text-foreground">{q.name}</h3>
                <span className="font-mono text-xs text-primary">{q.typicalMarks} marks</span>
              </div>
              <p className="mt-1 font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground">
                Assesses {q.ao} · {q.format}
              </p>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{q.howToAnswer}</p>
            </div>
          ))}
        </div>
        <div className="not-prose mt-3 grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-border/60 bg-card p-4">
            <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-2">
              Mark 1 + Mark 2 — meaning / impact
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              One mark for explaining the deeper meaning behind the words; one mark for the effect
              on the reader. An unexplained lift of the writer’s words earns nothing — you must add
              the thinking.
            </p>
          </div>
          <div className="rounded-xl border border-border/60 bg-card p-4">
            <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-2">
              Mark 1 + Mark 2 — which text is more appealing
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              One mark for a reasonable explanation of your preference; one mark for appropriate
              textual evidence. There is no "right" text — both choices are creditable if the reason
              and evidence hold up.
            </p>
          </div>
        </div>
      </section>

      {/* ── Effect-on-the-reader vocabulary ───────────────────────────── */}
      <section className="my-10">
        <h2>Effect-on-the-reader vocabulary</h2>
        <p className="text-sm text-muted-foreground">
          {RAO5.code} answers reward precise words for <em>what</em> a text does to its reader.
          Reach past "interesting" and "good" for the vocabulary below.
        </p>
        <div className="not-prose mt-4 grid gap-3 sm:grid-cols-2">
          {EFFECT_VOCAB.map((v) => (
            <div key={v.band} className="rounded-xl border border-border/60 bg-card p-4">
              <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-2">
                {v.band}
              </p>
              <p className="text-sm text-foreground leading-relaxed">{v.words}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Worked practice extracts ──────────────────────────────────── */}
      <section className="my-10">
        <h2>Worked practice — three texts, three purposes</h2>
        <p className="text-sm text-muted-foreground">
          Three short original extracts about the same subject, each written for a different purpose
          and viewpoint, with an exam- style question and a model answer marked in Pearson style.
          These texts are original works written for this page.
        </p>
        <div className="not-prose mt-4 space-y-4">
          {EXTRACTS.map((ex) => (
            <article key={ex.label} className="rounded-xl border border-border/60 bg-card p-5">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="text-base font-semibold text-foreground">{ex.label}</h3>
                <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-primary">
                  Purpose: {ex.purpose}
                </span>
              </div>
              <p className="mt-1 font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground">
                {ex.source}
              </p>
              <div className="mt-3 space-y-2 rounded-lg border border-border/60 bg-background p-4">
                {ex.text.map((para, i) => (
                  <p key={i} className="text-sm text-foreground leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                <span className="font-semibold text-foreground">Viewpoint &amp; tone: </span>
                {ex.viewpoint}
              </p>

              <div className="mt-4 rounded-lg border border-border/60 p-4">
                <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-1">
                  Exam-style question · {ex.question.qType.typicalMarks} marks ·{' '}
                  {ex.question.qType.ao}
                </p>
                <p className="text-sm text-foreground leading-relaxed">{ex.question.stem}</p>
                <p className="mt-3 font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-1">
                  Model answer
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">{ex.question.model}</p>
                <p className="mt-3 font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-1">
                  How the marks are awarded
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {ex.question.markNote}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── Quick revision checklist ──────────────────────────────────── */}
      <section className="my-10">
        <h2>Before the exam — the {RAO5.code} checklist</h2>
        <div className="not-prose rounded-xl border border-border/60 bg-card p-5">
          <ul className="space-y-2 text-sm text-muted-foreground">
            {[
              'Name the dominant purpose using the signposting language, not a guess.',
              'State the viewpoint as a stance ("the writer is critical of…"), not a summary of content.',
              'Track tone at the start, middle and end before deciding the overall effect.',
              'For "what did the writer mean?": explain the meaning AND the effect — never lift without explaining.',
              'For "which text is more appealing?": give a clear reason AND one piece of evidence.',
              'Use precise effect-on-the-reader vocabulary instead of "interesting" or "good".',
            ].map((c) => (
              <li key={c} className="flex gap-2">
                <span className="text-primary" aria-hidden>
                  ✓
                </span>
                <span className="leading-relaxed">{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Fair-dealing footer ───────────────────────────────────────── */}
      <footer className="my-12 border-t border-border/60 pt-6">
        <p className="text-xs text-muted-foreground leading-relaxed">{SPEC_ATTRIBUTION}</p>
      </footer>
    </>
  )
}
