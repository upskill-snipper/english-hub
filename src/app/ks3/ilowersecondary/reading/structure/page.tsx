import type { Metadata } from 'next'
import Link from 'next/link'
import { t } from '@/lib/i18n/t'
import { headers } from 'next/headers'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
import {
  ASSESSMENT_OBJECTIVES,
  READING_SKILLS,
  QUESTION_TYPES,
  GUIDED_READING_PROMPTS,
  SPEC_ATTRIBUTION,
} from '@/lib/ilowersecondary/spec'

const PAGE_URL = 'https://theenglishhub.app/ks3/ilowersecondary/reading/structure'

const RAO3 = ASSESSMENT_OBJECTIVES.RAO3
const SKILL_1_2B = READING_SKILLS.find((s) => s.code === '1.2b')!
const PUNCTUATION_Q = QUESTION_TYPES.find((q) => q.id === 'punctuation-effect')!
const TICK_TABLE_Q = QUESTION_TYPES.find((q) => q.id === 'feature-tick-table')!

export const metadata: Metadata = {
  openGraph: {
    title: 'iLowerSecondary English: structure & organisation of texts (RAO3)',
    description:
      'A masterclass on identifying and commenting on how non-fiction texts are structured - openings, topic sentences, headings, connectives, endings, the punctuation-effect question and the feature-tick-table - with original practice extracts and model answers.',
  },
  title: 'Structure & organisation of texts (RAO3) - a masterclass',
  description:
    'How to identify and comment on the structure and organisation of texts for iLowerSecondary English RAO3: text-level structure, organisational choices and their effect on the reader, the punctuation-effect question and the feature-tick-table, with original practice extracts and model answers in Pearson mark style.',
  alternates: { canonical: PAGE_URL },
}

type StructureFeature = {
  name: string
  what: string
  effect: string
}

const STRUCTURE_FEATURES: StructureFeature[] = [
  {
    name: 'The opening',
    what: 'The very first sentence or paragraph - sometimes a hook, a question, a startling fact, or a scene set in time and place.',
    effect:
      'A strong opening orients the reader and decides whether they read on. A question or a surprising claim makes the reader curious; a calm, factual opening signals a serious, informative purpose.',
  },
  {
    name: 'Paragraph order',
    what: 'The sequence the writer puts ideas in - chronological, problem-then-solution, general-to-specific, or least-to-most important.',
    effect:
      'Order controls how an argument builds. Saving the strongest point for last leaves the reader with it ringing in their ears; opening with the problem makes the later solution feel earned.',
  },
  {
    name: 'Topic sentences',
    what: 'The sentence (usually first) that tells the reader what a paragraph is about; the other sentences develop or support it.',
    effect:
      'Clear topic sentences let the reader follow the argument quickly and see how each paragraph links back to the main idea.',
  },
  {
    name: 'Headings & sub-headings',
    what: 'Short titles that label whole sections of a text.',
    effect:
      'They let a reader navigate and find what they need without reading every word - useful in guides, reports and leaflets where readers scan.',
  },
  {
    name: 'Captions',
    what: 'A short line of text attached to a picture, chart or diagram.',
    effect:
      'A caption tells the reader how to read the image and ties it to the surrounding argument, so the picture is not just decoration.',
  },
  {
    name: 'Lists',
    what: 'Bullet points or numbered steps that break information out of continuous prose.',
    effect:
      'Lists make key points or sequences easy to take in at a glance and signal that each item is separate and equally weighted.',
  },
  {
    name: 'Connectives',
    what: 'Linking words and phrases - however, as a result, in addition, finally - that join sentences and paragraphs.',
    effect:
      'Connectives signpost the relationship between ideas (contrast, cause, addition, sequence) so the reader is steered through the argument rather than left to guess.',
  },
  {
    name: 'Contrast & build-up',
    what: 'Deliberately placing one idea against its opposite, or stacking detail so tension or scale grows.',
    effect:
      'Contrast makes a point stand out sharply; a build-up makes the reader feel a situation getting bigger, worse or more urgent before a key statement lands.',
  },
  {
    name: 'The ending',
    what: 'The final sentence or paragraph - a summary, a call to action, a return to the opening idea, or a memorable last line.',
    effect:
      'An ending that circles back to the opening gives a sense of completeness; a call to action turns the reader from a reader into a doer.',
  },
]

type ModelQA = {
  q: string
  marks: number
  answer: string
  markNote: string
}

type Extract = {
  id: string
  label: string
  title: string
  lines: string[]
  questions: ModelQA[]
}

const EXTRACTS: Extract[] = [
  {
    id: 'extract-1',
    label: 'Practice extract 1',
    title: 'A school newsletter notice (inform / persuade)',
    lines: [
      'Save Our Pond',
      '',
      'The wildlife pond behind the science block is dying. Three years ago it was alive with frogs, newts and dragonflies. This summer, we counted none.',
      '',
      'Why does it matter? A healthy pond is a whole world in miniature. Lose it, and we lose the only place on this site where some of these creatures can breed.',
      '',
      'The good news is that ponds recover quickly - but only if people act. Here is what we are asking you to do:',
      '',
      '• give one lunchtime a term to clearing weed;',
      '• never tip anything into the water;',
      '• tell a teacher the moment you see litter near the bank.',
      '',
      'The pond was here before any of us arrived. With a little effort, it will still be here long after we have left.',
    ],
    questions: [
      {
        q: 'Identify and comment on how the writer has organised this notice. (3)',
        marks: 3,
        answer:
          'The notice opens with a short, blunt statement - "The wildlife pond behind the science block is dying" - which shocks the reader into paying attention. It is then organised as a problem-then-solution: the first two paragraphs explain what is wrong and why it matters, the sub-question "Why does it matter?" acting as a heading that signposts a change of focus. The middle moves to a bulleted list of three actions, which lifts the requests out of prose so the reader can see exactly what is being asked. The writer ends by circling back to the pond outlasting the readers, which gives the notice a sense of completeness and turns information into a call to action.',
        markNote:
          'Pearson style: up to 3 marks for identifying organisational choices (blunt opening, problem-then-solution order, the question used as a sub-heading, the list, the circular ending) AND commenting on the effect on the reader. A bare list of features with no comment on effect would be capped.',
      },
      {
        q: 'What is the effect of the bullet-point list in this notice? (2)',
        marks: 2,
        answer:
          'The list separates the three things the reader is being asked to do so each one stands out clearly and feels manageable (1). Because the actions are pulled out of the paragraph and given equal weight, the reader is more likely to remember them and act, which supports the notice’s persuasive purpose (1).',
        markNote:
          'One mark for naming the effect of the structural feature; one mark for an explanation linked to the text and its purpose.',
      },
    ],
  },
  {
    id: 'extract-2',
    label: 'Practice extract 2',
    title: 'An opening from a travel blog (recount / describe)',
    lines: [
      'I had been warned about the bridge.',
      '',
      'Everyone in the village mentioned it - the teacher, the bus driver, the woman who sold me bread. "The bridge," they said, and then they would stop, as if the word explained itself.',
      '',
      'It did not explain itself. Not until I was standing on it: two ropes, a handful of planks, and a drop so deep the river below was only a sound.',
      '',
      'I crossed it anyway. What else was there to do? The mountain I had come to climb was on the other side, and the mountain did not care how I felt about heights.',
    ],
    questions: [
      {
        q: 'Comment on how the writer has used the opening of this text. (3)',
        marks: 3,
        answer:
          'The writer opens with a single short sentence - "I had been warned about the bridge" - which is a hook: it withholds information and makes the reader want to know what is dangerous about the bridge. The next paragraph builds suspense by repeating the villagers’ warnings without explaining them, so tension grows. The writer then deliberately delays the description of the bridge until the third paragraph, where the build-up pays off with the stark detail of "two ropes, a handful of planks". This ordering controls the reader’s curiosity and makes the eventual description feel earned.',
        markNote:
          'Up to 3 marks for identifying the structural choices (short hook sentence, delayed information, build-up through the paragraph order) and commenting on their effect on the reader.',
      },
      {
        q: 'What is the effect of the dashes in the second paragraph? (2)',
        marks: 2,
        answer:
          'The dashes set off the list of villagers - "the teacher, the bus driver, the woman who sold me bread" - as an aside, drawing the reader’s eye to how many different people gave the same warning (1). This added detail makes the danger feel widely known and so increases the reader’s sense of dread before the bridge is even described (1).',
        markNote:
          'One mark for naming the effect of the punctuation mark (the dashes mark off / emphasise the inserted detail); one mark for explaining the effect using the text.',
      },
    ],
  },
  {
    id: 'extract-3',
    label: 'Practice extract 3',
    title: 'A short report with a sub-heading (explain / inform)',
    lines: [
      'Why the library moved upstairs',
      '',
      'For years the library sat by the main entrance. It was convenient - but it was also the noisiest room in the building.',
      '',
      'The problem',
      '',
      'Every footstep, every door, every conversation in the corridor reached the reading tables. Students said they could not concentrate. Borrowing fell by almost a third.',
      '',
      'What changed',
      '',
      'Over the holidays the library was moved to the quiet top floor. In its first month back, borrowing rose above where it had been before the decline. Sometimes the best fix is simply to move a problem away from its cause.',
    ],
    questions: [
      {
        q: 'Identify and comment on how the sub-headings organise this report. (3)',
        marks: 3,
        answer:
          'The report is broken into labelled sections by the sub-headings "The problem" and "What changed". These divide the text into a clear problem-then-solution structure and let the reader find each part without reading the whole report. The contrast between the two sections is sharpened by this labelling: the reader moves from a section about falling borrowing straight into one about borrowing rising again, so the improvement stands out. The final sentence acts as a closing comment that draws a general lesson from the specific story.',
        markNote:
          'Up to 3 marks for identifying the organisational choices (the sub-headings, the problem-then-solution division, the contrast they frame, the concluding generalisation) and commenting on the effect on the reader.',
      },
      {
        q: 'Tick one box. The dash in the second sentence ("It was convenient - but…") mainly: (2)',
        marks: 2,
        answer:
          'The correct tick is "creates a pause that sets up a contrast". The dash holds the sentence for a beat and then introduces "but it was also the noisiest room" (1). This makes the reader feel the turn from an advantage to a drawback, which is the point the whole report is built around (1).',
        markNote:
          'In a tick-box punctuation question, partial credit is usually available; here the mark is for the correct choice plus a brief justification from the text.',
      },
    ],
  },
]

export default async function StructurePage() {
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
            name: 'Reading skills',
            url: 'https://theenglishhub.app/ks3/ilowersecondary/reading',
          },
          { name: 'Structure & organisation (RAO3)', url: PAGE_URL },
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
        <Link href="/ks3/ilowersecondary/reading" className="hover:text-foreground">
          {await t('ks3.page.bc.reading_skills')}
        </Link>
        <span> · </span>
        <span>{await t('ks3.page.reading.structure.bc')}</span>
      </p>

      <h1>Structure &amp; organisation of texts &mdash; a masterclass</h1>
      <p className="lead">
        This page is a deep dive into one assessment objective: <strong>{RAO3.code}</strong> &mdash;
        &ldquo;{RAO3.descriptor}&rdquo; It is examined under reading skill{' '}
        <strong>
          {SKILL_1_2B.code}: {SKILL_1_2B.title}
        </strong>
        , and it carries a meaningful slice of the reading marks, so it is well worth practising
        deliberately rather than hoping it goes well on the day.
      </p>

      <section className="my-10">
        <h2>What RAO3 is really asking</h2>
        <p>
          {RAO3.code} is not about <em>retrieving</em> information (that is RAO1) or about word- and
          sentence-level language (that is RAO4). It is about the{' '}
          <strong>shape of the whole text</strong> and the{' '}
          <strong>choices the writer made when building it</strong>: where things are placed, how
          they are signposted, and <strong>what those choices do to the reader</strong>.
        </p>
        <p>The reading skill it sits under expects you to do three things:</p>
        <ul className="not-prose my-4 space-y-2">
          {SKILL_1_2B.bullets.map((b) => (
            <li key={b} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
              <span className="text-primary font-mono">·</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
        <p className="text-sm text-muted-foreground">
          The third bullet is the one students forget. Naming a feature is only half the answer
          &mdash; the marks come from explaining{' '}
          <strong>the effect of that choice on the reader</strong>.
        </p>
      </section>

      <section className="my-10">
        <h2>Text-level structure: the toolkit</h2>
        <p>
          When you are asked to comment on structure and organisation, work through the text from
          the outside in: how it begins, how it is ordered, how it is signposted, and how it ends.
          For each feature below, the column that earns marks is the last one &mdash; the effect.
        </p>
        <div className="not-prose my-6 space-y-3">
          {STRUCTURE_FEATURES.map((f) => (
            <div key={f.name} className="rounded-xl border border-border/60 bg-card p-5">
              <p className="text-sm font-medium mb-2">{f.name}</p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                <span className="font-medium text-foreground">What it is: </span>
                {f.what}
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed mt-1">
                <span className="font-medium text-foreground">Effect on the reader: </span>
                {f.effect}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="my-10">
        <h2>Learning toolkit: guided-reading prompts for structure</h2>
        <p>
          These prompts are taken from the iLowerSecondary Teacher&rsquo;s Guide guided-reading
          routine for non-fiction. Use them as questions to ask yourself about any non-fiction text
          before you write a structure answer &mdash; they train you to read like an examiner.
        </p>
        <div className="not-prose my-6 grid gap-3 sm:grid-cols-2">
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
          <div className="rounded-xl border border-primary/30 bg-primary/5 p-5">
            <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-primary mb-3">
              Paragraphs
            </p>
            <ul className="space-y-2">
              {GUIDED_READING_PROMPTS.nonFiction['Paragraphs'].map((p) => (
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
        <h2>The two RAO3 question types to master</h2>
        <p>
          Two question types on the paper test RAO3 directly. Knowing exactly what each one rewards
          is the difference between full and partial marks.
        </p>
        <div className="not-prose my-6 space-y-3">
          {[PUNCTUATION_Q, TICK_TABLE_Q].map((q) => (
            <div key={q.id} className="rounded-xl border border-border/60 bg-card p-5">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
                <span className="text-sm font-medium">{q.name}</span>
                <span className="font-mono text-[10px] tracking-[0.12em] uppercase text-primary">
                  {q.ao}
                </span>
                <span className="font-mono text-[10px] tracking-[0.12em] uppercase text-muted-foreground">
                  {q.typicalMarks} marks (typical)
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
        <div className="not-prose my-6 rounded-xl border border-primary/30 bg-primary/5 p-5">
          <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-primary mb-2">
            The punctuation-effect formula
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            For a 2-mark punctuation-effect question, write <strong>two sentences</strong>. Sentence
            one <strong>names the effect</strong> of the mark &mdash; an exclamation mark adds
            emphasis, surprise or excitement; dashes mark off and emphasise an inserted detail;
            brackets add extra, lower-priority information; a question mark draws the reader in or
            signals doubt. Sentence two <strong>explains that effect using the text</strong> in
            front of you. Naming the mark alone, or quoting without explaining, does not earn the
            second mark.
          </p>
        </div>
        <div className="not-prose my-6 rounded-xl border border-primary/30 bg-primary/5 p-5">
          <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-primary mb-2">
            The feature-tick-table
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Here you are given a small table of features &mdash; question marks, apostrophes for
            possession, dashes, brackets, a heading &mdash; and you tick which text uses each one.
            Work one feature at a time and scan <em>both</em> texts before you tick. Do not leave
            rows blank: partial credit is usually available for most rows correct, so an unsure tick
            beats no tick.
          </p>
        </div>
      </section>

      <section className="my-10">
        <h2>Practice extracts with model answers</h2>
        <p>
          The three extracts below are <strong>original texts written for this page</strong> &mdash;
          they are not from any past paper. Read each one right through first, then attempt the
          questions before you read the model answers. The model answers are written in the Pearson
          mark style: identify the choice, then comment on its effect on the reader.
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
        <h2>A four-step method for any structure question</h2>
        <ol className="not-prose my-6 space-y-3">
          {[
            {
              label: 'Read the whole text first',
              detail:
                'You cannot comment on structure from one paragraph. Read it right through so you can see the shape - where it begins, turns and ends.',
            },
            {
              label: 'Name the choice precisely',
              detail:
                'Use the correct term: opening hook, topic sentence, sub-heading, bulleted list, connective, contrast, build-up, circular ending.',
            },
            {
              label: 'Anchor it to the text',
              detail:
                'Point to where it happens. A precise short reference shows you have located the feature, not guessed it.',
            },
            {
              label: 'Explain the effect on the reader',
              detail:
                'Finish every point with what the choice does to the reader and how it serves the writer’s purpose. This is where the marks are.',
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

      <footer className="mt-16 border-t border-border/60 pt-6">
        <p className="text-[11px] leading-relaxed text-muted-foreground">{SPEC_ATTRIBUTION}</p>
      </footer>
    </>
  )
}
