import type { Metadata } from 'next'
import Link from 'next/link'
import { headers } from 'next/headers'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
import { QUESTION_TYPES, ASSESSMENT_OBJECTIVES, SPEC_ATTRIBUTION } from '@/lib/ilowersecondary/spec'

const PAGE_URL = 'https://theenglishhub.app/ks3/ilowersecondary/question-types/feature-tables'

export const metadata: Metadata = {
  openGraph: {
    title: 'iLowerSecondary English: tables & closed questions masterclass',
    description:
      'Master the closed iLowerSecondary English items — feature tick-tables with partial credit, A/B/C/D multiple choice, underline/circle the correct word, and the “which text is more appealing” evidence question. Worked examples and technique.',
  },
  title: 'Tables & closed questions: a masterclass',
  description:
    'Master the closed iLowerSecondary English items — feature tick-tables with partial credit, A/B/C/D multiple choice, underline/circle the correct word, and the “which text is more appealing” evidence question. Worked examples and technique.',
  alternates: { canonical: PAGE_URL },
}

// Pull the four closed-type structures from the canonical spec so marks and
// AO codes are never restated inline.
const TICK_TABLE = QUESTION_TYPES.find((q) => q.id === 'feature-tick-table')!
const MCQ = QUESTION_TYPES.find((q) => q.id === 'multiple-choice')!
const UNDERLINE = QUESTION_TYPES.find((q) => q.id === 'underline-word-class')!
const APPEALING = QUESTION_TYPES.find((q) => q.id === 'which-text-appealing')!

const RAO3 = ASSESSMENT_OBJECTIVES.RAO3
const RAO4 = ASSESSMENT_OBJECTIVES.RAO4
const RAO5 = ASSESSMENT_OBJECTIVES.RAO5

// ─── Scanning technique ───────────────────────────────────────────────

const SCANNING_STEPS = [
  {
    label: 'Name the feature before you scan',
    detail:
      'Say the feature to yourself in plain words first. A question mark ends a question. An apostrophe for possession shows belonging (the dog’s lead), not a missing letter. A dash interrupts or adds an afterthought. Brackets enclose an aside. Knowing exactly what the symbol does stops you ticking the wrong column.',
  },
  {
    label: 'Sweep one text for one feature at a time',
    detail:
      'Run your eye down Text 1 looking only for that single feature, then do the same for Text 2. Hunting for everything at once is how marks are lost. One feature, one text, one sweep.',
  },
  {
    label: 'Mark a tiny tick on the text as you find it',
    detail:
      'Put a faint pencil mark next to the first clear example you spot. One genuine example is enough to justify the column — you do not need to count them all.',
  },
  {
    label: 'Decide the column deliberately',
    detail:
      'Only after both sweeps choose Text 1, Text 2 or Both. “Both” means you found at least one clear example in each text, not that you ran out of time.',
  },
]

const ELIMINATION_STEPS = [
  {
    label: 'Re-read the quoted words in the text',
    detail:
      'A multiple-choice item almost always quotes a phrase. Find it and read the sentence it sits in. The answer depends on meaning in context, not on the option that looks cleverest on its own.',
  },
  {
    label: 'Cross out what cannot be true',
    detail:
      'Test each option against the text. Strike through any that contradict it or that the text never supports. Wrong options are usually true-sounding but unsupported, or true elsewhere but not here.',
  },
  {
    label: 'Choose from what survives',
    detail:
      'If two options remain, pick the one that matches the exact words, not a loose paraphrase. The closest fit to the writer’s meaning is the answer.',
  },
  {
    label: 'Mark one box, clearly',
    detail:
      'Put one unambiguous cross in one box. If you change your mind, put a line through the old box and cross the new one. Two crosses earn nothing.',
  },
]

// ─── Paired-extract feature-table sets (all original) ─────────────────

type FeatureRow = { feature: string; answer: string; why: string }
type PairedSet = {
  id: string
  theme: string
  text1Label: string
  text1: string
  text2Label: string
  text2: string
  rows: FeatureRow[]
}

const PAIRED_SETS: PairedSet[] = [
  {
    id: 'rockpools',
    theme: 'Theme: the natural world',
    text1Label: 'Text 1 — a leaflet for a coastal nature reserve',
    text1:
      'Welcome to Saltmarsh Point! Have you ever wondered what hides beneath a rock pool? Crouch down — quietly — and a whole tiny world appears. Crabs scuttle. Anemones bloom. The reserve’s wardens (all of them volunteers) ask one thing of every visitor: leave each pool exactly as you found it.',
    text2Label: 'Text 2 — a diary entry by a young rock-pooler',
    text2:
      'Today was the best day of the whole holiday. I found a crab the size of my thumbnail and watched it sidestep across the sand. Dad said it was probably a shore crab. I wanted to keep it, but I knew I shouldn’t, so I tipped it gently back into the cold water and we walked home.',
    rows: [
      {
        feature: 'A question to draw the reader in',
        answer: 'Text 1',
        why: 'Text 1 asks “Have you ever wondered what hides beneath a rock pool?”. Text 2 contains no question mark, so the credited column is Text 1 only — proof that you must scan, not assume.',
      },
      {
        feature: 'An exclamation mark',
        answer: 'Text 1',
        why: 'Text 1: “Welcome to Saltmarsh Point!” Text 2 ends every sentence with a full stop and has no exclamation mark, so a careful scan gives Text 1 only.',
      },
      {
        feature: 'A dash used to interrupt',
        answer: 'Text 1',
        why: 'Text 1 uses “Crouch down — quietly —” to break the sentence and add a whispered instruction. Text 2 has no dash.',
      },
      {
        feature: 'Brackets enclosing extra information',
        answer: 'Text 1',
        why: 'Text 1: “(all of them volunteers)” adds an aside. Text 2 uses no brackets.',
      },
      {
        feature: 'First-person pronouns',
        answer: 'Both texts',
        why: 'Text 1 addresses the reader and uses the reserve’s voice; Text 2 is a personal recount full of “I”, “my” and “we”. Both contain first-person reference, so the column is Both texts.',
      },
    ],
  },
  {
    id: 'storm',
    theme: 'Theme: facing danger',
    text1Label: 'Text 1 — a news report on a coastal storm',
    text1:
      'A severe storm battered the harbour town overnight. Wind speeds reached ninety miles an hour. Three boats were torn from their moorings. The lifeboat crew, who launched twice before dawn, rescued all six fishermen. No injuries were reported.',
    text2Label: 'Text 2 — the opening of an adventure story',
    text2:
      'The wave didn’t roar — it screamed. Mara’s hands locked round the wheel. Could the little boat hold? She didn’t know. She only knew that letting go meant the sea would take her, and she had not come this far to be taken.',
    rows: [
      {
        feature: 'A rhetorical or unanswered question',
        answer: 'Text 2',
        why: 'Text 2 asks “Could the little boat hold?” to build tension. Text 1 reports facts and asks nothing.',
      },
      {
        feature: 'Precise statistics',
        answer: 'Text 1',
        why: 'Text 1 gives “ninety miles an hour”, “Three boats” and “all six fishermen”. Text 2 uses no figures.',
      },
      {
        feature: 'A dash used for dramatic effect',
        answer: 'Text 2',
        why: 'Text 2 uses “The wave didn’t roar — it screamed.” to delay and punch the verb. Text 1 contains no dash.',
      },
      {
        feature: 'A pair of commas marking off extra information',
        answer: 'Text 1',
        why: 'Text 1: “The lifeboat crew, who launched twice before dawn, rescued…” brackets a clause with a comma pair. Text 2 uses no such pair, so the column is Text 1 — train yourself to check, not guess.',
      },
      {
        feature: 'Past-tense narrative verbs',
        answer: 'Both texts',
        why: 'Both are written in the past tense (“battered”, “rescued” / “locked”, “knew”), so this feature appears in both texts.',
      },
    ],
  },
  {
    id: 'food',
    theme: 'Theme: food and culture',
    text1Label: 'Text 1 — a recipe instruction sheet',
    text1:
      'First, warm the oil gently. Add the onions and stir until they soften. Do not let them brown! Next, pour in the stock and simmer for twenty minutes. Finally, taste and season before serving.',
    text2Label: 'Text 2 — a blog post about a family kitchen',
    text2:
      'My grandmother’s kitchen always smelled of cinnamon and patience. She never measured anything; her hands simply knew. “A little more,” she would murmur, tipping in spices as though she were telling the pot a secret.',
    rows: [
      {
        feature: 'Imperative (command) verbs',
        answer: 'Text 1',
        why: 'Text 1 instructs: “warm”, “Add”, “stir”, “pour”, “taste”. Text 2 describes and never commands the reader.',
      },
      {
        feature: 'Time connectives ordering steps',
        answer: 'Text 1',
        why: 'Text 1 sequences with “First”, “Next”, “Finally”. Text 2 has no step order.',
      },
      {
        feature: 'An apostrophe for possession',
        answer: 'Text 2',
        why: 'Text 2: “My grandmother’s kitchen” shows belonging. Text 1 uses no possessive apostrophe.',
      },
      {
        feature: 'Direct speech in quotation marks',
        answer: 'Text 2',
        why: 'Text 2 quotes “A little more,”. Text 1 contains no speech.',
      },
      {
        feature: 'A semicolon joining linked ideas',
        answer: 'Text 2',
        why: 'Text 2: “She never measured anything; her hands simply knew.” Text 1 uses only full stops and an exclamation mark.',
      },
    ],
  },
  {
    id: 'space',
    theme: 'Theme: exploration',
    text1Label: 'Text 1 — a magazine article about a space mission',
    text1:
      'Could humans ever live on Mars? Scientists believe the answer is “perhaps”. The planet is freezing, dry and bathed in radiation — yet its frozen poles hold water, and water means hope. The next robotic lander is due to touch down in 2031.',
    text2Label: 'Text 2 — a science-fiction story extract',
    text2:
      'The hatch hissed open. Red dust swirled past Nadia’s boots and settled, slow as snow. She had trained for eleven years for this single, silent step. Behind her visor, she allowed herself one whispered word: “Finally.”',
    rows: [
      {
        feature: 'A direct question to the reader',
        answer: 'Text 1',
        why: 'Text 1 opens “Could humans ever live on Mars?”. Text 2 asks nothing.',
      },
      {
        feature: 'A dash to add a contrasting idea',
        answer: 'Text 1',
        why: 'Text 1: “bathed in radiation — yet its frozen poles hold water” pivots with a dash. Text 2 has no dash.',
      },
      {
        feature: 'A specific future date',
        answer: 'Text 1',
        why: 'Text 1 states “in 2031”. Text 2 measures time only as “eleven years”, with no date.',
      },
      {
        feature: 'Quotation marks around a single word',
        answer: 'Both texts',
        why: 'Text 1: “perhaps”. Text 2: “Finally.” Both texts isolate one word in quotation marks.',
      },
      {
        feature: 'A possessive apostrophe',
        answer: 'Text 2',
        why: 'Text 2: “Nadia’s boots”. Text 1 uses no possessive form.',
      },
    ],
  },
]

// ─── Multiple-choice items (all original) ─────────────────────────────

type McqItem = {
  id: string
  context: string
  stem: string
  options: { letter: 'A' | 'B' | 'C' | 'D'; text: string }[]
  answer: 'A' | 'B' | 'C' | 'D'
  rationale: string
}

const MCQ_ITEMS: McqItem[] = [
  {
    id: 'mcq1',
    context: '“The old bridge groaned under the weight of the lorry.”',
    stem: 'In this sentence, the word “groaned” suggests the bridge is:',
    options: [
      { letter: 'A', text: 'newly built' },
      { letter: 'B', text: 'under strain' },
      { letter: 'C', text: 'brightly painted' },
      { letter: 'D', text: 'completely safe' },
    ],
    answer: 'B',
    rationale:
      '“Groaned” personifies the bridge, giving it a sound a person makes under effort or pain — so it is being strained. A contradicts “old”; C and D are never suggested.',
  },
  {
    id: 'mcq2',
    context: '“She read the letter again, then folded it very, very slowly.”',
    stem: 'The repetition of “very” mainly shows that the character is:',
    options: [
      { letter: 'A', text: 'in a hurry' },
      { letter: 'B', text: 'bored by the letter' },
      { letter: 'C', text: 'reluctant or thoughtful' },
      { letter: 'D', text: 'angry with the writer' },
    ],
    answer: 'C',
    rationale:
      'Repeating “very” stretches the action out, implying she is delaying — reluctant or deep in thought. A is the opposite of slow; B and D are not supported by the careful re-reading.',
  },
  {
    id: 'mcq3',
    context: '“The market was a riot of colour and noise.”',
    stem: 'The word “riot” is used here to mean:',
    options: [
      { letter: 'A', text: 'a violent crowd' },
      { letter: 'B', text: 'a great, overwhelming amount' },
      { letter: 'C', text: 'a quiet space' },
      { letter: 'D', text: 'a police event' },
    ],
    answer: 'B',
    rationale:
      'In context “a riot of colour” is a positive image of abundance. A and D take the literal meaning, which the cheerful context rules out; C contradicts “noise”.',
  },
  {
    id: 'mcq4',
    context: '“‘We’ll be fine,’ he said, glancing back at the rising water.”',
    stem: 'The contrast between his words and his action suggests he is:',
    options: [
      { letter: 'A', text: 'genuinely confident' },
      { letter: 'B', text: 'lying to be reassuring' },
      { letter: 'C', text: 'not paying attention' },
      { letter: 'D', text: 'making a joke' },
    ],
    answer: 'B',
    rationale:
      'Saying “We’ll be fine” while nervously checking the “rising water” shows he is masking worry to reassure someone. A ignores the glance; C and D are not supported.',
  },
  {
    id: 'mcq5',
    context: '“The instructions were clear: do not, under any circumstances, open the valve.”',
    stem: 'The phrase “under any circumstances” is included to:',
    options: [
      { letter: 'A', text: 'soften the instruction' },
      { letter: 'B', text: 'add a polite tone' },
      { letter: 'C', text: 'make the rule absolute' },
      { letter: 'D', text: 'give an example' },
    ],
    answer: 'C',
    rationale:
      'The phrase removes every exception, making the prohibition total. A is the opposite effect; B and D misread the function of the phrase.',
  },
  {
    id: 'mcq6',
    context: '“Hours passed. Still no one came. The torch began to flicker.”',
    stem: 'The writer uses three short sentences here mainly to:',
    options: [
      { letter: 'A', text: 'speed up the action' },
      { letter: 'B', text: 'build a slow, tense atmosphere' },
      { letter: 'C', text: 'list useful facts' },
      { letter: 'D', text: 'show the character is calm' },
    ],
    answer: 'B',
    rationale:
      'Clipped sentences and the failing torch create mounting dread and isolation. A misreads pace here as fast; C and D ignore the threatening detail.',
  },
  {
    id: 'mcq7',
    context: '“The charity needs your help today — every coin counts.”',
    stem: 'The main purpose of this sentence is to:',
    options: [
      { letter: 'A', text: 'inform the reader of opening times' },
      { letter: 'B', text: 'describe a place' },
      { letter: 'C', text: 'persuade the reader to give money' },
      { letter: 'D', text: 'explain how a charity is run' },
    ],
    answer: 'C',
    rationale:
      '“needs your help today” and “every coin counts” are direct appeals for donations — persuasion. The other options name purposes the sentence does not serve.',
  },
  {
    id: 'mcq8',
    context: '“The garden, once her mother’s pride, was now a tangle of weeds.”',
    stem: 'The sentence mainly suggests that:',
    options: [
      { letter: 'A', text: 'the garden has been carefully kept' },
      { letter: 'B', text: 'time and neglect have changed the garden' },
      { letter: 'C', text: 'the mother is gardening now' },
      { letter: 'D', text: 'weeds are good for gardens' },
    ],
    answer: 'B',
    rationale:
      'The contrast between “once her mother’s pride” and “now a tangle of weeds” shows decline through neglect. A and C contradict “tangle of weeds”; D is irrelevant.',
  },
  {
    id: 'mcq9',
    context: '“He smiled, but his eyes did not.”',
    stem: 'This sentence implies the character’s smile is:',
    options: [
      { letter: 'A', text: 'warm and genuine' },
      { letter: 'B', text: 'false or hiding something' },
      { letter: 'C', text: 'painful' },
      { letter: 'D', text: 'tired' },
    ],
    answer: 'B',
    rationale:
      'A smile the eyes do not share is the classic signal of insincerity. A is the opposite; C and D add feelings the text never states.',
  },
  {
    id: 'mcq10',
    context: '“Recycling one tonne of paper saves about seventeen trees.”',
    stem: 'The writer includes this figure mainly to:',
    options: [
      { letter: 'A', text: 'entertain the reader with a story' },
      { letter: 'B', text: 'give convincing factual support' },
      { letter: 'C', text: 'describe what paper looks like' },
      { letter: 'D', text: 'confuse the reader' },
    ],
    answer: 'B',
    rationale:
      'A precise statistic lends authority and makes the argument convincing. A and C misname the technique; D is never a writer’s aim in an informative text.',
  },
]

// ─── “Which text is more appealing” worked answers ────────────────────

const APPEALING_ANSWERS = [
  {
    pairing: 'Comparing the Saltmarsh Point leaflet (Text 1) with the rock-pooler’s diary (Text 2)',
    question:
      'Which text did you find more appealing, and why? Support your answer with evidence from the text. (See the spec card below for how the two marks are split.)',
    answer:
      'I found Text 2 more appealing because it tells a real, personal experience that makes me feel I was there with the writer. The detail “a crab the size of my thumbnail” is so exact that I can picture the tiny creature, and the moment the writer “tipped it gently back into the cold water” makes the kindness feel genuine rather than instructed.',
    marks: [
      'Reason / explanation of preference: a clear preference (Text 2) with a developed reason — the personal recount makes the reader feel present.',
      'Textual evidence: an apt, embedded quotation (“a crab the size of my thumbnail”) that genuinely supports the reason.',
    ],
  },
  {
    pairing:
      'Comparing the Mars magazine article (Text 1) with the science-fiction extract (Text 2)',
    question:
      'Which text did you find more appealing, and why? Support your answer with evidence from the text.',
    answer:
      'I preferred Text 1 because it answers a question I genuinely wonder about and makes the science feel hopeful. The line “water means hope” turns a dry fact into something I want to keep reading about, and the promise that a lander is “due to touch down in 2031” gives me a real event to look forward to, which the story version does not.',
    marks: [
      'Reason / explanation of preference: a clear preference (Text 1) with a developed reason — the article makes real science feel hopeful and forward-looking.',
      'Textual evidence: a precise supporting quotation (“water means hope” / “due to touch down in 2031”) tied directly to the reason.',
    ],
  },
]

const PARTIAL_CREDIT_NOTES = [
  'A feature table is not all-or-nothing. Getting most rows right usually still earns a mark, so always attempt every row — never leave one blank because you are unsure.',
  'A blank row scores nothing; a guessed row at least has a chance. With three columns (Text 1 / Text 2 / Both), an informed elimination is far better than no answer.',
  'One clear example is enough to justify a column. You do not need to find or count every instance of the feature.',
  '“Both texts” is only correct when you have actually found the feature in each text — not when you are running out of time and hedging.',
]

const COMMON_MISTAKES = [
  'Ticking a column from memory instead of checking the text — always find a real example on the page first.',
  'Confusing an apostrophe for possession (the dog’s lead) with an apostrophe for omission (don’t). The table usually names which one it wants.',
  'Leaving feature-table rows blank — partial credit means a sensible attempt can still score.',
  'Crossing two boxes on a multiple-choice item, so the examiner can award nothing.',
  'On the “which text is more appealing” question, giving a preference but no quotation — that throws away the evidence mark.',
  'Underlining or circling more than one option when only one is correct.',
]

export default async function FeatureTablesPage() {
  const nonce = (await headers()).get('x-nonce') ?? undefined

  return (
    <>
      <BreadcrumbJsonLd
        nonce={nonce}
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'KS3', url: 'https://theenglishhub.app/ks3' },
          {
            name: 'iLowerSecondary English',
            url: 'https://theenglishhub.app/ks3/ilowersecondary',
          },
          {
            name: 'Question types',
            url: 'https://theenglishhub.app/ks3/ilowersecondary/question-types',
          },
          { name: 'Tables & closed questions', url: PAGE_URL },
        ]}
      />

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
        <Link href="/ks3/ilowersecondary/question-types" className="hover:text-foreground">
          Question types
        </Link>
        <span> · </span>
        <span>Tables &amp; closed questions</span>
      </p>

      <h1>Tables &amp; closed questions: a masterclass</h1>
      <p className="lead">
        The closed questions are the marks you should never drop. They test whether you can scan
        accurately and read precisely — not whether you can write at length. This masterclass covers
        four of them: the feature tick-table, the A/B/C/D multiple-choice item, the
        underline/circle-the-correct-word item, and the short &ldquo;which text is more
        appealing&rdquo; question that needs a reason <em>and</em> a quotation.
      </p>

      <section className="my-10">
        <h2>The four closed types at a glance</h2>
        <p>
          Each card below names the assessment objective it targets, the typical mark and format,
          and what the mark scheme rewards. The marks and formats are drawn from the canonical
          specification data.
        </p>
        <div className="not-prose my-6 space-y-3">
          {[TICK_TABLE, MCQ, UNDERLINE, APPEALING].map((q) => (
            <div key={q.id} className="rounded-xl border border-border/60 bg-card p-5">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
                <span className="text-sm font-medium">{q.name}</span>
                <span className="font-mono text-[10px] tracking-[0.12em] uppercase text-primary">
                  {q.ao}
                </span>
                <span className="font-mono text-[10px] tracking-[0.12em] uppercase text-muted-foreground">
                  {q.typicalMarks} mark{q.typicalMarks === 1 ? '' : 's'} (typical)
                </span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                <span className="font-medium text-foreground">Format: </span>
                {q.format}
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed mt-1">
                <span className="font-medium text-foreground">How to answer: </span>
                {q.howToAnswer}
              </p>
            </div>
          ))}
        </div>
        <p className="text-sm text-muted-foreground">
          The feature-table and appeal items target {RAO3.code} ({RAO3.descriptor.toLowerCase()})
          and {RAO5.code} ({RAO5.descriptor.toLowerCase()}); the multiple-choice and underline items
          also draw on {RAO4.code} ({RAO4.descriptor.toLowerCase()}).
        </p>
      </section>

      <section className="my-10">
        <h2>Scanning technique for feature tables</h2>
        <p>
          A feature tick-table gives you a list of language or punctuation features and asks whether
          each one appears in Text 1, Text 2, or both. The skill is disciplined scanning, not deep
          analysis. Work like this:
        </p>
        <ol className="not-prose my-6 space-y-3">
          {SCANNING_STEPS.map((step, i) => (
            <li key={step.label} className="rounded-xl border border-border/60 bg-card p-4">
              <p className="text-sm font-medium">
                <span className="font-mono text-primary mr-2">{i + 1}.</span>
                {step.label}
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed mt-1">{step.detail}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="my-10">
        <h2>Partial credit: why you must attempt every row</h2>
        <p>
          This is the single most important habit for the feature table. The item is marked on how
          many rows are correct, so a careful attempt at every row almost always beats leaving rows
          blank.
        </p>
        <ul className="not-prose my-4 space-y-2">
          {PARTIAL_CREDIT_NOTES.map((n) => (
            <li key={n} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
              <span className="text-primary font-mono">·</span>
              <span>{n}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="my-10">
        <h2>Worked feature tables: four paired-extract sets</h2>
        <p>
          Each set below is an original pair of short extracts followed by a completed table. Read
          the two texts, decide each row yourself, then check your answers against the
          &ldquo;why&rdquo; column. The texts are deliberately short so you can practise the scan
          quickly.
        </p>
        <div className="not-prose my-6 space-y-8">
          {PAIRED_SETS.map((set) => (
            <div key={set.id} className="rounded-xl border border-border/60 bg-card p-5">
              <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-primary mb-3">
                {set.theme}
              </p>
              <div className="grid gap-4 sm:grid-cols-2 mb-5">
                <div className="rounded-lg border border-border/60 bg-background p-4">
                  <p className="font-mono text-[10px] tracking-[0.12em] uppercase text-muted-foreground mb-2">
                    {set.text1Label}
                  </p>
                  <p className="text-sm leading-relaxed">{set.text1}</p>
                </div>
                <div className="rounded-lg border border-border/60 bg-background p-4">
                  <p className="font-mono text-[10px] tracking-[0.12em] uppercase text-muted-foreground mb-2">
                    {set.text2Label}
                  </p>
                  <p className="text-sm leading-relaxed">{set.text2}</p>
                </div>
              </div>
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 pr-3 font-medium">Feature</th>
                    <th className="text-left py-2 pr-3 font-medium">Answer</th>
                    <th className="text-left py-2 font-medium">Why</th>
                  </tr>
                </thead>
                <tbody>
                  {set.rows.map((row) => (
                    <tr key={row.feature} className="border-b border-border/40 align-top">
                      <td className="py-2 pr-3">{row.feature}</td>
                      <td className="py-2 pr-3 font-medium text-primary whitespace-nowrap">
                        {row.answer}
                      </td>
                      <td className="py-2 text-muted-foreground leading-relaxed">{row.why}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
        <p className="text-sm text-muted-foreground">
          Notice how often the right answer is decided by one clear example. You never have to find
          every instance — just one that genuinely shows the feature in that text.
        </p>
      </section>

      <section className="my-10">
        <h2>Eliminating options on multiple choice</h2>
        <p>
          A multiple-choice item quotes a phrase and asks you to cross one of four boxes. The wrong
          options are designed to look reasonable, so do not pick the first answer that sounds
          right. Eliminate instead:
        </p>
        <ol className="not-prose my-6 space-y-3">
          {ELIMINATION_STEPS.map((step, i) => (
            <li key={step.label} className="rounded-xl border border-border/60 bg-card p-4">
              <p className="text-sm font-medium">
                <span className="font-mono text-primary mr-2">{i + 1}.</span>
                {step.label}
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed mt-1">{step.detail}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="my-10">
        <h2>Ten worked multiple-choice items</h2>
        <p>
          Each item below is original. Decide your answer before you read the rationale. The
          rationale always explains why the wrong options are wrong — that is the elimination skill
          you are training.
        </p>
        <div className="not-prose my-6 space-y-4">
          {MCQ_ITEMS.map((item, idx) => (
            <div key={item.id} className="rounded-xl border border-border/60 bg-card p-5">
              <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-2">
                Item {idx + 1}
              </p>
              <p className="text-sm italic leading-relaxed mb-2">{item.context}</p>
              <p className="text-sm font-medium mb-3">{item.stem}</p>
              <ul className="space-y-1 mb-3">
                {item.options.map((opt) => {
                  const correct = opt.letter === item.answer
                  return (
                    <li
                      key={opt.letter}
                      className={
                        'flex gap-2 text-sm leading-relaxed ' +
                        (correct ? 'font-medium text-primary' : 'text-muted-foreground')
                      }
                    >
                      <span className="font-mono">{opt.letter}.</span>
                      <span>
                        {opt.text}
                        {correct ? ' ✓' : ''}
                      </span>
                    </li>
                  )
                })}
              </ul>
              <p className="text-xs text-muted-foreground leading-relaxed">
                <span className="font-medium text-foreground">Answer {item.answer} — why: </span>
                {item.rationale}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="my-10">
        <h2>Underline or circle the correct word</h2>
        <p>
          This item asks you to underline or circle one option — for example the imperative verb,
          the modal verb, or the word that is a synonym for a word in the text.{' '}
          {UNDERLINE.howToAnswer} Two rules matter most: apply the grammatical word precisely, and
          mark only one option.
        </p>
        <div className="not-prose my-6 space-y-3">
          <div className="rounded-xl border border-border/60 bg-card p-5">
            <p className="text-sm font-medium mb-2">
              Underline the imperative verb in this instruction:
            </p>
            <p className="text-sm leading-relaxed mb-2">
              &ldquo;Before you <span className="text-muted-foreground">leave</span> the lab, always{' '}
              <span className="font-medium text-primary underline">wash</span> your{' '}
              <span className="text-muted-foreground">hands</span>.&rdquo;
            </p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              <span className="font-medium text-foreground">Answer: wash. </span>
              An imperative gives a direct command. &ldquo;leave&rdquo; sits in a subordinate clause
              (&ldquo;Before you leave&rdquo;) and is not the command; &ldquo;hands&rdquo; is a
              noun. Only &ldquo;wash&rdquo; commands the reader.
            </p>
          </div>
          <div className="rounded-xl border border-border/60 bg-card p-5">
            <p className="text-sm font-medium mb-2">Circle the modal verb in this sentence:</p>
            <p className="text-sm leading-relaxed mb-2">
              &ldquo;Visitors <span className="font-medium text-primary underline">must</span>{' '}
              report to reception and <span className="text-muted-foreground">sign</span> the
              book.&rdquo;
            </p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              <span className="font-medium text-foreground">Answer: must. </span>A modal verb
              expresses obligation, possibility or permission. &ldquo;must&rdquo; expresses
              obligation; &ldquo;report&rdquo; and &ldquo;sign&rdquo; are ordinary main verbs.
            </p>
          </div>
          <div className="rounded-xl border border-border/60 bg-card p-5">
            <p className="text-sm font-medium mb-2">
              Underline the word closest in meaning to <span className="italic">enormous</span>:
            </p>
            <p className="text-sm leading-relaxed mb-2">
              <span className="text-muted-foreground">tiny</span> ·{' '}
              <span className="font-medium text-primary underline">vast</span> ·{' '}
              <span className="text-muted-foreground">narrow</span> ·{' '}
              <span className="text-muted-foreground">empty</span>
            </p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              <span className="font-medium text-foreground">Answer: vast. </span>A synonym replaces
              the word without changing the meaning. &ldquo;vast&rdquo; means very large, like
              &ldquo;enormous&rdquo;. &ldquo;tiny&rdquo; is an antonym; &ldquo;narrow&rdquo; and
              &ldquo;empty&rdquo; describe different qualities entirely.
            </p>
          </div>
        </div>
      </section>

      <section className="my-10">
        <h2>&ldquo;Which text is more appealing&rdquo; — reason + quotation</h2>
        <p>
          This short item is worth two marks, and the two marks do different jobs.{' '}
          {APPEALING.howToAnswer} In plain terms: one mark is for a sensible reason for your
          preference, and one mark is for a quotation that genuinely backs that reason. A preference
          with no quotation can only ever score half. State the text you prefer, give a clear
          reason, then quote a few words that prove it.
        </p>
        <div className="not-prose my-6 space-y-6">
          {APPEALING_ANSWERS.map((a) => (
            <div key={a.pairing} className="rounded-xl border border-border/60 bg-card p-5">
              <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-primary mb-3">
                {a.pairing}
              </p>
              <p className="text-sm font-medium mb-2">{a.question}</p>
              <p className="text-sm leading-relaxed mb-4 border-l-2 border-primary/40 pl-4">
                {a.answer}
              </p>
              <p className="font-mono text-[10px] tracking-[0.12em] uppercase text-muted-foreground mb-2">
                How the two marks are earned
              </p>
              <ul className="space-y-2">
                {a.marks.map((m) => (
                  <li key={m} className="flex gap-3 text-xs text-muted-foreground leading-relaxed">
                    <span className="text-primary font-mono">✓</span>
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="my-10">
        <h2>Common mistakes to avoid</h2>
        <ul className="not-prose my-4 space-y-2">
          {COMMON_MISTAKES.map((m) => (
            <li key={m} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
              <span className="text-destructive font-mono">×</span>
              <span>{m}</span>
            </li>
          ))}
        </ul>
      </section>

      <footer className="mt-16 border-t border-border/60 pt-6">
        <p className="text-[11px] leading-relaxed text-muted-foreground">{SPEC_ATTRIBUTION}</p>
      </footer>
    </>
  )
}
