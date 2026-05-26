import type { Metadata } from 'next'
import Link from 'next/link'
import { headers } from 'next/headers'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
import {
  ASSESSMENT_OBJECTIVES,
  READING_SKILLS,
  QUESTION_TYPES,
  GUIDED_READING_PROMPTS,
  SPEC_ATTRIBUTION,
} from '@/lib/ilowersecondary/spec'

const PAGE_URL = 'https://theenglishhub.app/ks3/ilowersecondary/reading/language'

const RAO4 = ASSESSMENT_OBJECTIVES.RAO4
const SKILL_1_3 = READING_SKILLS.find((s) => s.code === '1.3')!
const SYNONYM_Q = QUESTION_TYPES.find((q) => q.id === 'synonym-select')!
const WORD_CLASS_Q = QUESTION_TYPES.find((q) => q.id === 'underline-word-class')!
const LANG_ANALYSIS_Q = QUESTION_TYPES.find((q) => q.id === 'language-structure-analysis')!
const STYLE_TOOLKIT = GUIDED_READING_PROMPTS.fiction['Style and language']

export const metadata: Metadata = {
  openGraph: {
    title: 'Language analysis masterclass (RAO4) - iLowerSecondary English',
    description:
      "The flagship guide to RAO4: exploring writers' grammatical and literary language at word and sentence level, with original practice extracts and model answers.",
  },
  title: 'Language analysis masterclass (RAO4) - iLowerSecondary English',
  description:
    "The flagship guide to RAO4: exploring writers' grammatical and literary language at word and sentence level, with original practice extracts and model answers.",
  alternates: { canonical: PAGE_URL },
}

// ── Original device glossary ────────────────────────────────────────
const DEVICE_GLOSSARY: { term: string; meaning: string; example: string }[] = [
  {
    term: 'Simile',
    meaning: 'A comparison of one thing to another using "like" or "as".',
    example: 'The corridor was as silent as a held breath.',
  },
  {
    term: 'Metaphor',
    meaning: 'A comparison that states one thing is another, without "like" or "as".',
    example: 'Her patience was a thinning thread.',
  },
  {
    term: 'Personification',
    meaning: 'Giving human qualities to an object, animal or idea.',
    example: 'The old gate groaned and refused to let us pass.',
  },
  {
    term: 'Alliteration',
    meaning: 'The repetition of the same consonant sound at the start of nearby words.',
    example: 'The wind whipped and worried at the washing line.',
  },
  {
    term: 'Onomatopoeia',
    meaning: 'A word whose sound imitates the noise it describes.',
    example: 'The kettle hissed, then began to gurgle.',
  },
  {
    term: 'Repetition',
    meaning: 'Deliberately repeating a word or phrase for emphasis.',
    example: 'We waited. We waited until waiting became the day.',
  },
  {
    term: 'Contrast',
    meaning: 'Placing opposite ideas close together to sharpen each one.',
    example: 'The hall was bright; the news was dark.',
  },
]

// ── Original word-level techniques ──────────────────────────────────
const WORD_LEVEL: { focus: string; explanation: string; example: string }[] = [
  {
    focus: 'Connotation',
    explanation:
      'The feelings or ideas a word carries beyond its dictionary meaning. "Home" and "house" point to the same building, but "home" suggests warmth and belonging.',
    example:
      '"She slipped into the cottage" - "slipped" connotes secrecy and care, far more than the neutral "went".',
  },
  {
    focus: 'Verb choice',
    explanation:
      'A precise verb does the work of a whole sentence. Strong verbs control pace, energy and the reader’s impression of a character.',
    example:
      '"He stormed across the yard" - "stormed" shows anger and speed without the writer ever naming the emotion.',
  },
  {
    focus: 'Adjective choice',
    explanation:
      'Adjectives shape how we picture a noun. Swapping one adjective changes the mood entirely.',
    example:
      '"The brittle smile" feels fragile and forced; "the easy smile" would feel relaxed and genuine.',
  },
  {
    focus: 'Adverb choice',
    explanation: 'Adverbs modify how an action happens, often revealing attitude or atmosphere.',
    example:
      '"She answered carefully" hints she is hiding something; "she answered cheerfully" would not.',
  },
  {
    focus: 'Semantic field',
    explanation:
      'A group of words that all belong to the same topic. A run of war words, for instance, can make an ordinary event feel like a battle.',
    example:
      '"He defended his answer, retreated, then surrendered the point" - the military field turns a debate into a fight.',
  },
  {
    focus: 'Emotive / positive / negative diction',
    explanation:
      'Word choices that load a text with feeling. Writers steer the reader by choosing positive or negative words for the same fact.',
    example:
      'A "crowded" beach (negative) versus a "lively" beach (positive) describe the same scene very differently.',
  },
]

// ── Original sentence-level techniques ──────────────────────────────
const SENTENCE_LEVEL: { focus: string; explanation: string; example: string }[] = [
  {
    focus: 'Short sentences',
    explanation:
      'A short, simple sentence stops the reader. It creates tension, shock or a blunt, final tone - especially after a long sentence.',
    example: '"Nothing moved. Then it did."',
  },
  {
    focus: 'Long sentences',
    explanation:
      'A long sentence, built from clauses joined by conjunctions, can pile up detail, slow the pace, or sweep the reader along with a feeling that does not stop.',
    example:
      '"The river kept going, past the mill and the broken jetty and the houses with their lights just coming on, never once pausing for us."',
  },
  {
    focus: 'Sentence openings',
    explanation:
      'Starting sentences in different ways - with an adverb, an -ing word, or a subordinate clause - controls rhythm and emphasis. Repeated identical openings can feel relentless or list-like.',
    example:
      '"Slowly, the door opened. Watching from the stairs, I did not move. Because I could not."',
  },
  {
    focus: 'Sentence types',
    explanation:
      'Statements inform; questions invite the reader in; commands (imperatives) instruct or urge; exclamations add force. The mix tells you about purpose and tone.',
    example:
      '"Look closer. Do you see it now? You should." - command, question, statement, in three short beats.',
  },
]

// ── Original grammatical-terminology reference ──────────────────────
const GRAMMAR_TERMS: { term: string; meaning: string; example: string }[] = [
  {
    term: 'Imperative verb',
    meaning: 'A verb that gives an instruction or command.',
    example: '"Press the green button firmly." - "Press" is imperative.',
  },
  {
    term: 'Modal verb',
    meaning:
      'A verb (can, could, may, might, must, shall, should, will, would) that shows possibility, necessity or certainty.',
    example: '"You must arrive early." - "must" signals obligation.',
  },
  {
    term: 'Auxiliary (helping) verb',
    meaning:
      'A verb (be, have, do) that supports a main verb to form tenses, questions or negatives.',
    example: '"She has finished." - "has" is the auxiliary; "finished" is the main verb.',
  },
  {
    term: 'Irregular verb',
    meaning: 'A verb whose past form does not follow the usual "-ed" pattern.',
    example: '"go → went", "swim → swam", "bring → brought".',
  },
]

// ── Original practice extracts (100% original) ──────────────────────
const PRACTICE: {
  id: string
  label: string
  kind: string
  extract: string[]
  questions: {
    q: string
    type: string
    marks: string
    model: string
    markNote: string
  }[]
}[] = [
  {
    id: 'extract-a',
    label: 'Extract A',
    kind: 'Non-fiction - magazine article',
    extract: [
      'Every spring, the salt marsh wakes up. For months it has lain flat and grey, a quiet stretch of mud that visitors hurry past without a second glance. Then, almost overnight, the channels begin to glitter and the birds return in their hundreds.',
      'Conservation volunteers patrol the boardwalk at dawn, counting nests and clearing litter. Their work is slow, careful and largely invisible. Yet without it, this fragile habitat would vanish within a single generation - and so would the creatures that depend on it.',
    ],
    questions: [
      {
        q: 'Look at the word "glitter" in the first paragraph. Circle the word closest in meaning to "glitter".  A jump   B sparkle   C overflow   D darken',
        type: 'synonym-select',
        marks: '(1 mark)',
        model: 'B - sparkle',
        markNote:
          'Award 1 mark for B only. "Sparkle" preserves the meaning of light catching the water. Do not credit more than one circled answer.',
      },
      {
        q: 'The writer describes the marsh as a place visitors "hurry past without a second glance." How does the writer use language here to change how the reader sees the marsh? Use evidence from the text.',
        type: 'language-structure-analysis',
        marks: '(4 marks)',
        model:
          'The writer first personifies the marsh - "the salt marsh wakes up" - which turns a dull "stretch of mud" into a living thing that is worth our attention, encouraging the reader to look again at something they would normally ignore. The writer also chooses the verb "glitter" and the contrast between "flat and grey" and the channels that "begin to glitter": this sudden shift from negative, lifeless diction to bright, positive diction makes the transformation feel dramatic and surprising, so the reader shares the writer’s sense that the marsh is precious.',
        markNote:
          'Two developed points, each with evidence and an explanation of the effect on the reader (2 + 2). Reward precise reference to language at word level; an unexplained lift is not credited.',
      },
    ],
  },
  {
    id: 'extract-b',
    label: 'Extract B',
    kind: 'Fiction - opening of a short story',
    extract: [
      'The lighthouse had not spoken in years. Its lamp was dark, its door was rusted shut, and the path to it had been swallowed by gorse.',
      'Mara climbed anyway. She climbed because the village had told her not to, and because the wind that morning carried a sound she could not name - thin, insistent, almost like a question. At the top she stopped. She listened. Somewhere below the rotten boards, something tapped back.',
    ],
    questions: [
      {
        q: 'In the sentence "Mara climbed anyway", underline the verb. Then state whether "climbed" is a regular or an irregular verb.',
        type: 'underline-word-class',
        marks: '(1 mark)',
        model: 'Underline "climbed". It is a regular verb (past tense formed by adding "-ed").',
        markNote:
          'Any clear positive indication of "climbed" is accepted. The verb must be correctly identified as regular for the mark; apply grammatical terminology precisely.',
      },
      {
        q: 'How does the writer use sentence structure in the second paragraph to build tension? Use evidence from the text.',
        type: 'language-structure-analysis',
        marks: '(4 marks)',
        model:
          'The writer uses a long, flowing sentence - "She climbed because the village had told her not to, and because the wind… carried a sound she could not name" - to draw the reader steadily towards the danger, the piled-up clauses delaying the moment and making us wait. The writer then breaks this rhythm with three abrupt short sentences: "She stopped. She listened. Somewhere below the rotten boards, something tapped back." The sudden shift to short, simple sentences halts the pace and isolates the final action, so the unexplained tap lands on the reader as a shock and the tension peaks.',
        markNote:
          'Two developed points (contrast of long versus short sentences; effect of the final short sentence), each with evidence and effect on the reader (2 + 2).',
      },
    ],
  },
  {
    id: 'extract-c',
    label: 'Extract C',
    kind: 'Non-fiction - advice leaflet',
    extract: [
      'Plan your route before you set out. Check the forecast, charge your phone, and tell someone exactly where you are going.',
      'The hills can change in minutes. A clear morning can become a wall of grey cloud, and a path that looked friendly can turn treacherous, slick and unforgiving. Respect the weather. It will not respect you.',
    ],
    questions: [
      {
        q: 'Look at the verbs "Plan", "Check" and "tell" in the first paragraph. What type of verb are these, and why has the writer chosen them?',
        type: 'underline-word-class',
        marks: '(2 marks)',
        model:
          'They are imperative verbs (commands). One mark: correctly naming them as imperative. One mark: the writer uses commands to give the reader clear, direct instructions and to make the safety advice feel urgent and authoritative.',
        markNote:
          'One mark for accurate grammatical terminology ("imperative" / command). One mark for a sensible explanation of the effect linked to the leaflet’s purpose.',
      },
      {
        q: 'How does the writer use language to warn the reader in the second paragraph? Use evidence from the text.',
        type: 'language-structure-analysis',
        marks: '(4 marks)',
        model:
          'The writer personifies the weather in the short, blunt sentences "Respect the weather. It will not respect you." Giving the weather the human power to refuse respect makes it feel like a deliberate enemy, which warns the reader to take it seriously. The writer also uses a list of negative adjectives - "treacherous, slick and unforgiving" - building a semantic field of danger so that the safe-sounding "friendly" path is overturned, leaving the reader alert to how quickly conditions can turn.',
        markNote:
          'Two developed points (personification of the weather; negative adjective list / contrast), each with evidence and effect (2 + 2).',
      },
    ],
  },
]

export default async function LanguageRAO4Page() {
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
      url: 'https://theenglishhub.app/ks3/ilowersecondary/reading',
    },
    { name: 'Language (RAO4)', url: PAGE_URL },
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
        <Link href="/ks3/ilowersecondary/reading" className="hover:text-foreground">
          Reading skills
        </Link>
        <span> · </span>
        <span>Language (RAO4)</span>
      </p>

      <h1>Language analysis masterclass</h1>
      <p className="lead">
        How to explore a writer&rsquo;s grammatical and literary language at word and sentence level
        &mdash; the single highest-weighted reading skill on the paper. This is the masterclass for{' '}
        {RAO4.code}.
      </p>

      {/* ── Why this matters ──────────────────────────────────────── */}
      <section className="my-10">
        <h2>Why {RAO4.code} matters most</h2>
        <div className="not-prose grid gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-border/60 bg-card p-4 sm:col-span-2">
            <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-2">
              {RAO4.code} &mdash; assessment objective
            </p>
            <p className="text-sm text-foreground leading-relaxed">{RAO4.descriptor}</p>
          </div>
          <div className="rounded-xl border border-primary/40 bg-card p-4">
            <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-2">
              Weighting of the qualification
            </p>
            <p className="text-3xl font-semibold text-primary">{RAO4.weightPct}%</p>
            <p className="text-xs text-muted-foreground mt-1">
              the largest of any single assessment objective
            </p>
          </div>
        </div>
        <div className="not-prose mt-3 rounded-xl border border-border/60 bg-card p-4">
          <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-2">
            Content skill {SKILL_1_3.code} &mdash; {SKILL_1_3.title}
          </p>
          <ul className="space-y-1.5 text-sm text-muted-foreground">
            {SKILL_1_3.bullets.map((b) => (
              <li key={b} className="flex gap-2">
                <span className="text-primary" aria-hidden>
                  ·
                </span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
          Because this objective carries more marks than any other, it repays careful practice. The
          key is precision: name the technique, quote the exact word or sentence, and explain its
          effect on the reader. A vague gist earns nothing; a small, well-chosen piece of evidence
          with a clear explanation earns full marks.
        </p>
      </section>

      {/* ── Word-level analysis ───────────────────────────────────── */}
      <section className="my-10">
        <h2>Word-level analysis</h2>
        <p className="text-sm text-muted-foreground">
          Writers control meaning one word at a time. Each example below is original and shows the
          technique in action.
        </p>
        <div className="not-prose mt-4 grid gap-3 sm:grid-cols-2">
          {WORD_LEVEL.map((w) => (
            <div key={w.focus} className="rounded-xl border border-border/60 bg-card p-4">
              <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-2">
                {w.focus}
              </p>
              <p className="text-sm text-foreground leading-relaxed">{w.explanation}</p>
              <p className="mt-2 text-sm text-muted-foreground italic leading-relaxed">
                {w.example}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Sentence-level analysis ───────────────────────────────── */}
      <section className="my-10">
        <h2>Sentence-level analysis</h2>
        <p className="text-sm text-muted-foreground">
          Sentence length, openings and types shape pace, tension and tone. Compare a short sentence
          with a long one and ask why the writer chose each.
        </p>
        <div className="not-prose mt-4 grid gap-3 sm:grid-cols-2">
          {SENTENCE_LEVEL.map((s) => (
            <div key={s.focus} className="rounded-xl border border-border/60 bg-card p-4">
              <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-2">
                {s.focus}
              </p>
              <p className="text-sm text-foreground leading-relaxed">{s.explanation}</p>
              <p className="mt-2 text-sm text-muted-foreground italic leading-relaxed">
                {s.example}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Device glossary box ───────────────────────────────────── */}
      <section className="my-10">
        <h2>Literary device glossary</h2>
        <div className="not-prose rounded-xl border border-primary/40 bg-card p-5">
          <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-4">
            Quick reference &mdash; every example original
          </p>
          <dl className="grid gap-4 sm:grid-cols-2">
            {DEVICE_GLOSSARY.map((d) => (
              <div key={d.term} className="border-t border-border/60 pt-3">
                <dt className="text-sm font-semibold text-foreground">{d.term}</dt>
                <dd className="mt-1 text-sm text-muted-foreground leading-relaxed">{d.meaning}</dd>
                <dd className="mt-1 text-sm text-foreground italic leading-relaxed">
                  &ldquo;{d.example}&rdquo;
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── Grammatical terminology ───────────────────────────────── */}
      <section className="my-10">
        <h2>Applying grammatical terminology precisely</h2>
        <p className="text-sm text-muted-foreground">
          Closed questions may ask you to name a verb class. Use the exact term &mdash; an examiner
          accepts any clear positive indication, but only the correct terminology earns the mark.
        </p>
        <div className="not-prose mt-4 grid gap-3 sm:grid-cols-2">
          {GRAMMAR_TERMS.map((g) => (
            <div key={g.term} className="rounded-xl border border-border/60 bg-card p-4">
              <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-2">
                {g.term}
              </p>
              <p className="text-sm text-foreground leading-relaxed">{g.meaning}</p>
              <p className="mt-2 text-sm text-muted-foreground italic leading-relaxed">
                {g.example}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── The two RAO4 closed question types ────────────────────── */}
      <section className="my-10">
        <h2>The {RAO4.code} closed question types</h2>
        <div className="not-prose grid gap-3 sm:grid-cols-2">
          {[SYNONYM_Q, WORD_CLASS_Q, LANG_ANALYSIS_Q].map((qt) => (
            <div key={qt.id} className="rounded-xl border border-border/60 bg-card p-4">
              <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-1">
                {qt.name}
              </p>
              <p className="text-xs text-muted-foreground mb-2">
                {qt.ao} &middot; {qt.typicalMarks} mark
                {qt.typicalMarks === 1 ? '' : 's'} &middot; {qt.format}
              </p>
              <p className="text-sm text-foreground leading-relaxed">{qt.howToAnswer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Original practice extracts ────────────────────────────── */}
      <section className="my-10">
        <h2>Practice extracts and model answers</h2>
        <p className="text-sm text-muted-foreground">
          Three short, original extracts &mdash; non-fiction and fiction &mdash; with {RAO4.code}{' '}
          questions and model answers written in the Pearson mark style. None of these texts is
          reproduced from any past paper.
        </p>
        <div className="not-prose mt-4 space-y-6">
          {PRACTICE.map((p) => (
            <div key={p.id} className="rounded-xl border border-border/60 bg-card p-5">
              <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-1">
                {p.label}
              </p>
              <p className="text-xs text-muted-foreground mb-3">{p.kind}</p>
              <div className="space-y-2 rounded-lg border border-border/60 bg-background p-4">
                {p.extract.map((para, i) => (
                  <p key={i} className="text-sm text-foreground leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
              <ol className="mt-4 space-y-4">
                {p.questions.map((item, i) => (
                  <li key={i}>
                    <p className="text-sm font-semibold text-foreground leading-relaxed">
                      {i + 1}. {item.q}{' '}
                      <span className="font-normal text-muted-foreground">{item.marks}</span>
                    </p>
                    <div className="mt-2 rounded-lg border border-primary/40 bg-background p-3">
                      <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-1">
                        Model answer
                      </p>
                      <p className="text-sm text-foreground leading-relaxed">{item.model}</p>
                      <p className="mt-2 font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-1">
                        Mark scheme guidance
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.markNote}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </section>

      {/* ── Style and language toolkit ────────────────────────────── */}
      <section className="my-10">
        <h2>Style and language toolkit</h2>
        <p className="text-sm text-muted-foreground">
          When you meet any fiction extract, work through these guided-reading prompts from the
          iLowerSecondary Teacher&rsquo;s Guide. They turn {RAO4.code} into a checklist.
        </p>
        <div className="not-prose mt-4 rounded-xl border border-border/60 bg-card p-5">
          <ul className="space-y-2 text-sm text-muted-foreground">
            {STYLE_TOOLKIT.map((prompt) => (
              <li key={prompt} className="flex gap-2">
                <span className="text-primary" aria-hidden>
                  →
                </span>
                <span>{prompt}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Fair-dealing footer ───────────────────────────────────── */}
      <footer className="my-12 border-t border-border/60 pt-6">
        <p className="text-xs text-muted-foreground leading-relaxed">{SPEC_ATTRIBUTION}</p>
      </footer>
    </>
  )
}
