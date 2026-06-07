import type { Metadata } from 'next'
import Link from 'next/link'
import { t } from '@/lib/i18n/t'
import { headers } from 'next/headers'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
import {
  NON_FICTION_TEXT_TYPES,
  NON_FICTION_PURPOSES,
  GUIDED_READING_PROMPTS,
  SPEC_ATTRIBUTION,
} from '@/lib/ilowersecondary/spec'

const PAGE_URL = 'https://theenglishhub.app/ks3/ilowersecondary/text-types/instructions'

const TEXT_TYPE = NON_FICTION_TEXT_TYPES.find((t) => t === 'instructions')!
const PURPOSE_INFORM = NON_FICTION_PURPOSES.find((p) => p === 'inform')!
const PURPOSE_EXPLAIN = NON_FICTION_PURPOSES.find((p) => p === 'explain')!

export const metadata: Metadata = {
  openGraph: {
    title: 'iLowerSecondary English: instructional texts - reading & writing guide',
    description:
      'How instructional texts work for LEH11: sequential steps, imperative verbs, time and sequence connectives, lists, second person and precise vocabulary - how they are tested in RAO3 and RAO4, with original annotated extracts, practice questions and a write-instructions task with model.',
  },
  title: 'Instructional texts - a reading & writing guide',
  description:
    'A complete guide to instructional texts for iLowerSecondary English: conventions (sequential steps, imperative verbs, sequence connectives, lists, second person, concrete vocabulary, materials lists, labelled diagrams), how the imperative-verb and sequencing language is tested in RAO3 and RAO4, with original annotated extracts, practice questions, model answers and a Section B writing task.',
  alternates: { canonical: PAGE_URL },
}

type Convention = {
  name: string
  what: string
  effect: string
}

const CONVENTIONS: Convention[] = [
  {
    name: 'Clear sequential steps',
    what: 'The instructions are broken into separate, ordered actions, each usually a single step done before the next.',
    effect:
      'A clear sequence lets the reader follow along while doing the task, one action at a time, without losing their place or skipping a stage.',
  },
  {
    name: 'Imperative (command) verbs',
    what: 'Each step usually begins with a bossy "do this" verb - cut, fold, press, wait, check - with no subject before it.',
    effect:
      'The imperative speaks straight to the reader and tells them exactly what to do, which makes the text feel direct, brisk and easy to act on.',
  },
  {
    name: 'Time and sequence connectives',
    what: 'Linking words and phrases that order the steps - first, next, then, after that, once, while, finally.',
    effect:
      'These signpost the order so the reader knows what comes before what, and never has to guess whether a step can wait or must happen now.',
  },
  {
    name: 'Numbered or bulleted lists',
    what: 'Steps are pulled out of continuous prose into a numbered list (for an order) or bullets (for items that have no order).',
    effect:
      'Numbering makes the sequence visible at a glance and lets the reader return to the exact step they were on; bullets show items are separate but equal.',
  },
  {
    name: 'Second person',
    what: 'The reader is addressed directly as "you", or addressed by an implied "you" inside the imperative itself.',
    effect:
      'Second person makes the instructions feel personal and aimed at the reader, as if the writer is standing beside them guiding the task.',
  },
  {
    name: 'Precise, concrete vocabulary',
    what: 'Exact nouns, numbers and measurements - "the small screw", "for thirty seconds", "two centimetres" - rather than vague words.',
    effect:
      'Precision removes guesswork. The reader can carry out the step correctly the first time because nothing is left open to interpretation.',
  },
  {
    name: 'Optional materials list',
    what: 'A short list at the start of everything the reader needs to gather before they begin.',
    effect:
      'It lets the reader prepare in advance, so they are not forced to stop halfway through the steps to fetch something they are missing.',
  },
  {
    name: 'Diagrams and labels',
    what: 'A picture of the object or stage, with labels naming the parts, often placed next to the step it illustrates.',
    effect:
      'A labelled diagram shows what words struggle to describe and ties a name to a part, so the reader can match the instruction to the real object.',
  },
]

type ModelQA = {
  q: string
  marks: number
  answer: string
  markNote: string
}

type Annotation = {
  feature: string
  note: string
}

type Extract = {
  id: string
  label: string
  title: string
  lines: string[]
  annotations: Annotation[]
  questions: ModelQA[]
}

const EXTRACTS: Extract[] = [
  {
    id: 'extract-1',
    label: 'Practice extract 1',
    title: 'How to make a paper seed pot (inform / explain)',
    lines: [
      'How to make a paper seed pot',
      '',
      'You will need: one sheet of old newspaper, a clean jam jar, and a little water.',
      '',
      '1. First, tear the sheet of newspaper in half along the fold.',
      '2. Lay one half flat and place the jam jar on its side at one edge.',
      '3. Next, roll the paper tightly around the jar until none is left.',
      '4. Once the paper is rolled, fold the loose end in over the base of the jar to close the bottom.',
      '5. Then slide the jar out carefully so the paper tube keeps its shape.',
      '6. Finally, press the folded base flat and pour in a little water to settle the pot.',
    ],
    annotations: [
      {
        feature: 'Imperative verbs',
        note: 'Every step opens with a command verb: "tear", "Lay", "place", "roll", "fold", "slide", "press", "pour". None has a subject in front of it - the reader is the implied "you", which keeps the text direct.',
      },
      {
        feature: 'Sequence markers',
        note: '"First", "Next", "Once… ", "Then" and "Finally" order the steps, and the list is numbered 1-6, so the reader always knows which action comes next.',
      },
      {
        feature: 'Other conventions',
        note: 'A materials list ("You will need: …") lets the reader prepare; precise vocabulary ("along the fold", "a little water") removes guesswork; "You will need" addresses the reader in the second person.',
      },
    ],
    questions: [
      {
        q: 'Underline the imperative verb in step 3. (1)',
        marks: 1,
        answer:
          'The imperative verb is "roll" - "Next, roll the paper tightly around the jar". (The word "Next" is a sequence connective, not the command verb; "roll" is the action the reader is ordered to perform.)',
        markNote:
          'Pearson style: a closed underline / identify-the-word-class item. Any clear positive indication of "roll" is accepted. Selecting "Next" or "paper" would not earn the mark - the question targets the command verb specifically.',
      },
      {
        q: 'How does the writer make the order of the steps clear to the reader? (2)',
        marks: 2,
        answer:
          'The writer numbers the steps 1 to 6 and opens them with time and sequence connectives such as "First", "Next", "Then" and "Finally" (1). This signposts exactly which action comes before another, so the reader can follow the process one stage at a time without skipping or repeating a step (1).',
        markNote:
          'One mark for identifying the organisational choice (numbered list / sequence connectives); one mark for explaining the effect on the reader linked to the text.',
      },
    ],
  },
  {
    id: 'extract-2',
    label: 'Practice extract 2',
    title: 'How to fold a simple paper boat (inform)',
    lines: [
      'How to fold a paper boat',
      '',
      '1. Begin with a rectangular sheet of paper placed flat in front of you.',
      '2. Fold the sheet exactly in half, top edge down to bottom edge, and press the crease firmly.',
      '3. After that, fold it in half again, this time from side to side, then open this second fold back out.',
      '4. Bring the two top corners down to meet the centre crease so they form a neat triangle.',
      '5. While holding the triangle, fold the strip of paper at the bottom up on the front side.',
      '6. Turn the model over and fold the remaining strip up on the back as well.',
      '7. Lastly, hold the open base, pull the two sides apart gently, and reshape the paper into a boat.',
    ],
    annotations: [
      {
        feature: 'Imperative verbs',
        note: '"Begin", "Fold", "press", "fold", "open", "Bring", "fold", "Turn", "hold", "pull", "reshape" - each step is built on a command verb that tells the reader the precise action.',
      },
      {
        feature: 'Sequence markers',
        note: 'The numbered steps 1-7 are reinforced by connectives of time: "After that", "While holding", and "Lastly". "While" shows two actions happen at the same time, not one after the other.',
      },
      {
        feature: 'Other conventions',
        note: 'Concrete, precise vocabulary ("top edge down to bottom edge", "the centre crease", "a neat triangle") leaves nothing to guess; "in front of you" addresses the reader directly in the second person.',
      },
    ],
    questions: [
      {
        q: 'Identify two different sequence connectives the writer uses, and say what each one tells the reader. (2)',
        marks: 2,
        answer:
          '"After that" (step 3) tells the reader the fold must happen once the previous fold is complete - the actions are in order (1). "While holding" (step 5) tells the reader two things happen at the same moment: they must keep holding the triangle as they make the next fold (1).',
        markNote:
          'One mark for each correctly identified connective with an accurate explanation of the relationship it signals (sequence vs simultaneous action). A bare list of words with no comment would be capped at one mark.',
      },
      {
        q: 'What is the effect of beginning almost every step with a command (imperative) verb? (2)',
        marks: 2,
        answer:
          'Opening each step with a verb such as "Fold", "Bring" or "Turn" speaks straight to the reader and names the exact action with no wasted words (1). This makes the instructions feel direct and easy to act on, so the reader can do each step while reading it rather than having to work out what is being asked (1).',
        markNote:
          'One mark for naming the effect of the language feature; one mark for an explanation linked to the text and the purpose of instructions.',
      },
    ],
  },
]

const PRACTICE_TASK_MODEL = [
  'How to plant a sunflower seed in a cup',
  '',
  'You will need: a paper cup, some soil, one sunflower seed, and a little water.',
  '',
  '1. First, fill the paper cup about three-quarters full with soil.',
  '2. Next, press a small hole in the middle of the soil with your finger, about two centimetres deep.',
  '3. Drop one sunflower seed into the hole.',
  '4. After that, cover the seed gently with a thin layer of soil.',
  '5. Then pour in a little water until the soil looks dark and damp, but not flooded.',
  '6. Finally, place the cup on a bright windowsill and check it every day, adding a little water whenever the soil feels dry.',
]

export default async function InstructionsPage() {
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
            name: 'Text types',
            url: 'https://theenglishhub.app/ks3/ilowersecondary/text-types',
          },
          { name: 'Instructions', url: PAGE_URL },
        ]}
      />

      <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-muted-foreground">
        <Link href="/" className="hover:text-foreground">
          {await t('ks3.page.bc.home')}
        </Link>
        <span> · </span>
        <Link href="/ks3" className="hover:text-foreground">
          {await t('ks3.page.bc.ks3')}
        </Link>
        <span> · </span>
        <Link href="/ks3/ilowersecondary" className="hover:text-foreground">
          {await t('ks3.page.bc.ils')}
        </Link>
        <span> · </span>
        <Link href="/ks3/ilowersecondary/text-types" className="hover:text-foreground">
          {await t('ks3.page.bc.text_types')}
        </Link>
        <span> · </span>
        <span>{await t('ks3.page.text_types.instructions.bc')}</span>
      </p>

      <h1>Instructional texts &mdash; a reading &amp; writing guide</h1>
      <p className="lead">
        <strong>Instructions</strong> are one of the non-fiction <strong>{TEXT_TYPE}</strong> text
        types you may meet in Section A, and the form you may be asked to write in Section B. Their
        purpose is to <strong>{PURPOSE_INFORM}</strong> and to <strong>{PURPOSE_EXPLAIN}</strong>{' '}
        &mdash; they tell the reader how to do something, step by step, so clearly that the reader
        can do it themselves. This page shows you how the form works, how it is tested, and how to
        write it.
      </p>

      <section className="my-10">
        <h2>What an instructional text is for</h2>
        <p>
          An instructional text has one job: to get the reader from not being able to do something
          to being able to do it. Everything about the way it is written serves that job. There is
          no room for opinion, for atmosphere, or for the writer&rsquo;s own story &mdash; only the
          actions the reader must take, in the right order, in words the reader cannot
          misunderstand.
        </p>
        <p>
          That single, practical purpose is why instructions look the way they do. The conventions
          below are not decoration; each one removes a way the reader could get lost or get it
          wrong.
        </p>
      </section>

      <section className="my-10">
        <h2>The conventions of instructions</h2>
        <p>
          When you read an instructional text in the exam &mdash; or write one &mdash; these are the
          features to recognise. For each one, the column that earns marks is the last:{' '}
          <strong>the effect on the reader</strong>.
        </p>
        <div className="not-prose my-6 space-y-3">
          {CONVENTIONS.map((c) => (
            <div key={c.name} className="rounded-xl border border-border/60 bg-card p-5">
              <p className="text-sm font-medium mb-2">{c.name}</p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                <span className="font-medium text-foreground">What it is: </span>
                {c.what}
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed mt-1">
                <span className="font-medium text-foreground">Effect on the reader: </span>
                {c.effect}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="my-10">
        <h2>How instructions are tested</h2>
        <p>
          Instructions are a gift in the reading paper because their language is so distinctive.
          Examiners use them to test two assessment objectives in particular.
        </p>
        <div className="not-prose my-6 space-y-3">
          <div className="rounded-xl border border-border/60 bg-card p-5">
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
              <span className="text-sm font-medium">Word class &mdash; the imperative verb</span>
              <span className="font-mono text-[10px] tracking-[0.12em] uppercase text-primary">
                RAO4
              </span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              You may be asked to <strong>underline</strong> or name the imperative (command) verb
              in a step, or to explain the effect of the imperative voice. Use the exact grammatical
              term: <em>imperative</em>. The command verb is the bossy &ldquo;do this&rdquo; word
              with no subject in front of it &mdash; <em>cut</em>, <em>fold</em>, <em>wait</em>{' '}
              &mdash; not the connective (<em>first</em>, <em>then</em>) that orders the steps.
            </p>
          </div>
          <div className="rounded-xl border border-border/60 bg-card p-5">
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
              <span className="text-sm font-medium">Structure &mdash; the sequence</span>
              <span className="font-mono text-[10px] tracking-[0.12em] uppercase text-primary">
                RAO3
              </span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              You may be asked how the writer makes the order clear, or to comment on the effect of
              the numbered list or the time and sequence connectives. Name the choice precisely
              (numbered list, sequence connective) and always finish with{' '}
              <strong>what it does for the reader</strong> &mdash; that is where the marks are.
            </p>
          </div>
        </div>
        <div className="not-prose my-6 rounded-xl border border-primary/30 bg-primary/5 p-5">
          <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-primary mb-2">
            Don&rsquo;t confuse the verb with the connective
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            In &ldquo;<strong>Next, roll</strong> the paper tightly&rdquo;, the imperative verb is{' '}
            <strong>roll</strong> &mdash; the action. <strong>Next</strong> is a sequence connective
            &mdash; it orders the step, but it is not a command. The most common lost mark on the
            underline question is selecting the connective instead of the verb.
          </p>
        </div>
      </section>

      <section className="my-10">
        <h2>Learning toolkit: guided-reading prompts for instructions</h2>
        <p>
          These prompts come from the iLowerSecondary Teacher&rsquo;s Guide guided-reading routine
          for non-fiction. Ask them of any instructional text before you answer a question about it
          &mdash; the genre prompt in particular names the exact features you should be hunting for.
        </p>
        <div className="not-prose my-6 grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-primary/30 bg-primary/5 p-5">
            <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-primary mb-3">
              Genre
            </p>
            <ul className="space-y-2">
              {GUIDED_READING_PROMPTS.nonFiction['Genre'].map((p) => (
                <li key={p} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                  <span className="text-primary font-mono">·</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-primary/30 bg-primary/5 p-5">
            <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-primary mb-3">
              Text structure
            </p>
            <ul className="space-y-2">
              {GUIDED_READING_PROMPTS.nonFiction['Text structure'].map((p) => (
                <li key={p} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                  <span className="text-primary font-mono">·</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="my-10">
        <h2>Practice extracts with annotations &amp; model answers</h2>
        <p>
          The two extracts below are <strong>original texts written for this page</strong> &mdash;
          they are not from any past paper. Read each one through, study the annotations that point
          out the imperative verbs and sequence markers, then attempt the questions before checking
          the model answers.
        </p>

        {EXTRACTS.map((ex) => (
          <div key={ex.id} id={ex.id} className="my-8">
            <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-primary mb-2">
              {ex.label}
            </p>
            <h3>{ex.title}</h3>
            <div className="not-prose my-4 rounded-xl border border-border/60 bg-card p-5">
              {ex.lines.map((line, i) =>
                line === '' ? (
                  <div key={i} className="h-3" aria-hidden="true" />
                ) : (
                  <p key={i} className="text-sm text-foreground leading-relaxed">
                    {line}
                  </p>
                ),
              )}
            </div>
            <div className="not-prose my-4 rounded-xl border border-primary/30 bg-primary/5 p-5">
              <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-primary mb-3">
                Annotation
              </p>
              <div className="space-y-2">
                {ex.annotations.map((a) => (
                  <p key={a.feature} className="text-xs text-muted-foreground leading-relaxed">
                    <span className="font-medium text-foreground">{a.feature}: </span>
                    {a.note}
                  </p>
                ))}
              </div>
            </div>
            <div className="not-prose my-4 space-y-4">
              {ex.questions.map((qa) => (
                <div key={qa.q} className="rounded-xl border border-border/60 bg-card p-5">
                  <p className="text-sm font-medium mb-2">
                    <span className="font-mono text-primary mr-2">Q</span>
                    {qa.q}
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    <span className="font-medium text-foreground">Model answer: </span>
                    {qa.answer}
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed mt-2 border-t border-border/60 pt-2">
                    <span className="font-medium text-foreground">Mark-scheme note: </span>
                    {qa.markNote}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="my-10">
        <h2>Writing instructions for Section B</h2>
        <p>
          If Section B asks for instructions, the examiner is testing whether you can match form,
          audience and purpose (WAO1) and write accurately (WAO2). The way to score well is to make
          the conventions obvious:
        </p>
        <ol className="not-prose my-6 space-y-3">
          {[
            {
              label: 'Open with a clear title and a materials list',
              detail:
                'A heading that names the task, then a short "You will need:" list, shows the examiner you know the form before you write a single step.',
            },
            {
              label: 'Use a numbered list, one action per step',
              detail:
                'Numbering makes the sequence visible and stops you cramming three actions into one step. If two things happen together, say so with "while".',
            },
            {
              label: 'Start every step with an imperative verb',
              detail:
                'Cut, fold, pour, wait, check. Begin steps with the action, and order them with sequence connectives: first, next, then, after that, finally.',
            },
            {
              label: 'Be precise and concrete',
              detail:
                'Give exact amounts, times and parts - "for thirty seconds", "the small screw" - so the reader cannot misread the step.',
            },
            {
              label: 'Keep the second person and check the order',
              detail:
                'Address the reader directly, then reread your steps to make sure nothing is needed before it appears. Proofread for accurate punctuation and spelling (WAO2).',
            },
          ].map((step, i) => (
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
        <h2>Write clear instructions &mdash; task &amp; model</h2>
        <div className="not-prose my-6 rounded-xl border border-primary/30 bg-primary/5 p-5">
          <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-primary mb-2">
            Your task
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Write a clear set of instructions, for a reader of your own age, explaining{' '}
            <strong>how to plant a sunflower seed in a cup</strong>. Include a title and a list of
            what is needed, then numbered steps. Use imperative verbs and sequence connectives, and
            make every step precise.
          </p>
        </div>
        <p>
          The model below is an <strong>original answer written for this page</strong>. Notice the
          title, the &ldquo;You will need&rdquo; list, the numbered steps, the imperative verb
          opening every step, the sequence connectives (&ldquo;First&rdquo;, &ldquo;Next&rdquo;,
          &ldquo;After that&rdquo;, &ldquo;Then&rdquo;, &ldquo;Finally&rdquo;) and the precise
          detail (&ldquo;three-quarters full&rdquo;, &ldquo;about two centimetres deep&rdquo;).
        </p>
        <div className="not-prose my-4 rounded-xl border border-border/60 bg-card p-5">
          {PRACTICE_TASK_MODEL.map((line, i) =>
            line === '' ? (
              <div key={i} className="h-3" aria-hidden="true" />
            ) : (
              <p key={i} className="text-sm text-foreground leading-relaxed">
                {line}
              </p>
            ),
          )}
        </div>
        <div className="not-prose my-4 rounded-xl border border-primary/30 bg-primary/5 p-5">
          <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-primary mb-2">
            Why this would score well
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            The form is established and maintained throughout (WAO1): a title, a materials list, and
            six numbered steps each opening with an imperative verb (&ldquo;fill&rdquo;,
            &ldquo;press&rdquo;, &ldquo;Drop&rdquo;, &ldquo;cover&rdquo;, &ldquo;pour&rdquo;,
            &ldquo;place&rdquo;). Sequence connectives order the steps so the process is fully
            coherent. The vocabulary is concrete and precise, and the sentences are correctly
            demarcated, supporting the WAO2 marks for accurate grammar, punctuation and spelling.
          </p>
        </div>
      </section>

      <footer className="mt-16 border-t border-border/60 pt-6">
        <p className="text-[11px] leading-relaxed text-muted-foreground">{SPEC_ATTRIBUTION}</p>
      </footer>
    </>
  )
}
