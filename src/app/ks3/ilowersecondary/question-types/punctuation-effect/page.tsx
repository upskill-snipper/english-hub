import type { Metadata } from 'next'
import Link from 'next/link'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
import { QUESTION_TYPES, ASSESSMENT_OBJECTIVES, SPEC_ATTRIBUTION } from '@/lib/ilowersecondary/spec'

const PUNCTUATION_TYPE = QUESTION_TYPES.find((q) => q.id === 'punctuation-effect')!
const TICK_TABLE_TYPE = QUESTION_TYPES.find((q) => q.id === 'feature-tick-table')!
const RAO3 = ASSESSMENT_OBJECTIVES.RAO3

export const metadata: Metadata = {
  title: 'Effect of a punctuation mark - iLowerSecondary English question masterclass',
  description:
    'Master the 2-mark punctuation-effect question in the Pearson Edexcel iLowerSecondary English achievement test: an effects reference for every mark, worked extracts and split model answers.',
  alternates: {
    canonical: 'https://theenglishhub.app/ks3/ilowersecondary/question-types/punctuation-effect',
  },
  openGraph: {
    title:
      'Effect of a punctuation mark - iLowerSecondary English question masterclass - The English Hub',
    description:
      'How to earn both marks on the punctuation-effect question: name the effect, then explain it from the text. Original worked examples and model answers.',
  },
}

type EffectEntry = {
  mark: string
  glyph: string
  effects: string[]
  example: string
  effectNote: string
}

const EFFECTS_REFERENCE: EffectEntry[] = [
  {
    mark: 'Exclamation mark',
    glyph: '!',
    effects: ['emphasis', 'surprise', 'excitement', 'urgency'],
    example: 'The roof was already burning when we reached the door!',
    effectNote:
      'The exclamation mark adds urgency and emphasis, making the danger feel sudden and forcing the reader to share the panic of the moment.',
  },
  {
    mark: 'Question mark',
    glyph: '?',
    effects: ['engages the reader', 'invites thought', 'rhetorical effect'],
    example: 'How would you cope if the river never came back?',
    effectNote:
      'The question mark turns the sentence into a direct rhetorical appeal; the reader is pulled in and made to imagine the situation rather than simply being told about it.',
  },
  {
    mark: 'Dash',
    glyph: '-',
    effects: ['adds extra information', 'creates a dramatic pause'],
    example: 'She opened the box slowly - and found it completely empty.',
    effectNote:
      'The dash creates a dramatic pause that builds suspense before the disappointing discovery, so the empty box lands with greater impact.',
  },
  {
    mark: 'Brackets',
    glyph: '( )',
    effects: ['adds extra or aside information', 'gives a quiet, confiding tone'],
    example: 'The expedition (which had taken three years to plan) finally set off at dawn.',
    effectNote:
      'The brackets slip in extra background information as an aside, so the writer can add detail without interrupting the main point of the sentence.',
  },
  {
    mark: 'Ellipsis',
    glyph: '…',
    effects: ['creates suspense', 'suggests trailing off', 'leaves a thought unfinished'],
    example: 'I reached for the handle, but then I heard something behind me…',
    effectNote:
      'The ellipsis makes the sentence trail off unfinished, creating suspense and leaving the reader anxious about what the narrator heard.',
  },
  {
    mark: 'Colon',
    glyph: ':',
    effects: ['introduces information', 'sets up an explanation or a list'],
    example: 'There was only one thing left to do: run.',
    effectNote:
      'The colon introduces and points forward to the single decisive action, giving the word that follows it extra weight and finality.',
  },
  {
    mark: 'Semicolon',
    glyph: ';',
    effects: ['links two closely related ideas', 'shows balance or contrast'],
    example: 'The city slept; the harbour worked on through the night.',
    effectNote:
      'The semicolon links two related ideas in one sentence, balancing the sleeping city against the busy harbour so the contrast feels deliberate.',
  },
  {
    mark: 'Apostrophe',
    glyph: '’',
    effects: ['shows possession', 'shows omission (a contraction)'],
    example: 'The diver’s torch flickered; she couldn’t see the seabed below.',
    effectNote:
      'The first apostrophe in "diver’s" shows possession (the torch belonging to the diver); the second, in "couldn’t", marks omitted letters and gives the writing a more informal, urgent voice.',
  },
  {
    mark: 'Comma',
    glyph: ',',
    effects: ['adds clarity', 'separates items in a list', 'marks a parenthesis'],
    example: 'My grandmother, who had never flown before, gripped the armrest tightly.',
    effectNote:
      'The pair of commas marks a parenthesis, holding the extra detail apart so the main idea stays clear while still adding important information about the grandmother.',
  },
  {
    mark: 'Speech marks',
    glyph: '“ ”',
    effects: ['show a speaker’s exact words', 'add voice and realism'],
    example: '“We are not turning back now,” the captain said quietly.',
    effectNote:
      'The speech marks present the captain’s exact words, adding a realistic voice and letting the reader hear the determination directly rather than being told about it.',
  },
]

type WorkedExample = {
  id: string
  extract: string
  question: string
  mark1: string
  mark2: string
}

const WORKED_EXAMPLES: WorkedExample[] = [
  {
    id: 'we1',
    extract:
      'The forecast had promised a calm afternoon. Within an hour the sky had turned the colour of slate, and the first hailstones struck the tents like gravel - the storm had arrived early.',
    question: 'How does the writer use the dash in this extract to add effect? (2 marks)',
    mark1:
      'Mark 1 - name the effect: the dash creates a dramatic pause and adds extra information that completes the idea.',
    mark2:
      'Mark 2 - explain it from the text: it holds the reader back for a moment after the build-up of the darkening sky and hail, so the short statement "the storm had arrived early" lands with more impact and confirms how suddenly the weather changed.',
  },
  {
    id: 'we2',
    extract:
      'You have read the safety leaflet. You have packed the right boots. But when the ground gives way beneath you, will any of that be enough?',
    question: 'How does the writer use the question mark in this extract to add effect? (2 marks)',
    mark1:
      'Mark 1 - name the effect: the question mark creates a rhetorical question that directly engages the reader.',
    mark2:
      'Mark 2 - explain it from the text: after listing the preparations the reader has made, the unanswered question forces them to imagine the danger themselves, making the warning feel personal and persuasive rather than just informative.',
  },
  {
    id: 'we3',
    extract:
      'The museum (closed to the public since the flood) still held one locked room that no curator would discuss. We were not supposed to be there at all.',
    question: 'How do the brackets add effect in this extract? (2 marks)',
    mark1: 'Mark 1 - name the effect: the brackets add extra, aside information about the museum.',
    mark2:
      'Mark 2 - explain it from the text: they quietly slip in the detail that the museum has been "closed to the public since the flood" without interrupting the main idea, which deepens the sense of mystery around the locked room.',
  },
  {
    id: 'we4',
    extract:
      'Everything we needed was on the far bank: fresh water, dry wood, and a path that led home. Everything we feared was in the river between us and it.',
    question: 'How does the writer use the colon to add effect? (2 marks)',
    mark1:
      'Mark 1 - name the effect: the colon introduces an explanation, setting up the list that follows it.',
    mark2:
      'Mark 2 - explain it from the text: it points forward to "fresh water, dry wood, and a path that led home", emphasising exactly what the characters could see but could not safely reach, which sharpens the tension of the crossing.',
  },
  {
    id: 'we5',
    extract:
      'The lighthouse keeper’s journal stopped mid-sentence. The last words on the page read: "The light has gone out and the boats are still…"',
    question:
      'How does the writer use the ellipsis at the end of this extract to add effect? (2 marks)',
    mark1:
      'Mark 1 - name the effect: the ellipsis makes the writing trail off and creates suspense.',
    mark2:
      'Mark 2 - explain it from the text: because the journal "stopped mid-sentence", the unfinished words leave the reader uncertain about what happened to the keeper, building tension and a sense of something gone wrong.',
  },
  {
    id: 'we6',
    extract:
      '“Stay close and don’t let go,” my brother said, though his voice shook. The crowd pushed forward; the gates were closing fast.',
    question: 'How does the writer use the semicolon in this extract to add effect? (2 marks)',
    mark1:
      'Mark 1 - name the effect: the semicolon links two closely related ideas in a single sentence.',
    mark2:
      'Mark 2 - explain it from the text: it joins "The crowd pushed forward" and "the gates were closing fast" so the two pressures feel connected and simultaneous, increasing the sense of urgency around the brother’s warning.',
  },
]

export default function PunctuationEffectPage() {
  return (
    <>
      <BreadcrumbJsonLd
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
          {
            name: 'Punctuation effect',
            url: 'https://theenglishhub.app/ks3/ilowersecondary/question-types/punctuation-effect',
          },
        ]}
      />

      <article className="mx-auto my-12 max-w-3xl px-4">
        <header className="mb-10">
          <nav aria-label="Breadcrumb" className="mb-4 text-xs text-muted-foreground">
            <ol className="flex flex-wrap items-center gap-1.5">
              <li>
                <Link href="/ks3" className="hover:text-primary">
                  KS3
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/ks3/ilowersecondary" className="hover:text-primary">
                  iLowerSecondary English
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/ks3/ilowersecondary/question-types" className="hover:text-primary">
                  Question types
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="font-semibold text-muted-foreground">Punctuation effect</li>
            </ol>
          </nav>

          <p className="mb-2 font-mono text-xs font-semibold uppercase tracking-wide text-primary">
            Question masterclass
          </p>
          <h1 className="mb-4 font-heading text-3xl font-semibold text-foreground sm:text-4xl">
            {PUNCTUATION_TYPE.name}
          </h1>
          <p className="text-base leading-relaxed text-muted-foreground">
            This is a short open-response reading question worth {PUNCTUATION_TYPE.typicalMarks}{' '}
            marks. It assesses {RAO3.code}: {RAO3.descriptor.toLowerCase()} The examiner is not
            asking you to spot the mark &mdash; you can already see it &mdash; but to explain what
            it <em>does</em> for the reader at that exact point in the text.
          </p>
        </header>

        <section
          aria-labelledby="how-marks-work"
          className="mb-10 rounded-lg bg-muted p-6 border border-border/60 sm:p-8"
        >
          <h2
            id="how-marks-work"
            className="mb-3 font-heading text-2xl font-semibold text-foreground"
          >
            How the two marks are awarded
          </h2>
          <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
            The mark scheme splits the {PUNCTUATION_TYPE.typicalMarks} marks cleanly.{' '}
            {PUNCTUATION_TYPE.howToAnswer}
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-md bg-card p-4 border border-border/60">
              <p className="mb-1 font-mono text-xs font-semibold text-primary">
                Mark 1 &mdash; name the effect
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                State what kind of effect the punctuation mark has, using clear terminology &mdash;
                for example, that an exclamation mark adds emphasis, or that a dash creates a
                dramatic pause.
              </p>
            </div>
            <div className="rounded-md bg-card p-4 border border-border/60">
              <p className="mb-1 font-mono text-xs font-semibold text-primary">
                Mark 2 &mdash; explain it from the text
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Link that effect to the actual content of the extract. Refer to what is being
                described and explain why the mark suits that moment for the reader.
              </p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            A common reason for losing a mark is naming the effect but never connecting it to the
            text, or describing the content without ever naming what the punctuation actually does.
            You need both halves.
          </p>
        </section>

        <section aria-labelledby="effects-reference" className="mb-12">
          <h2
            id="effects-reference"
            className="mb-2 font-heading text-2xl font-semibold text-foreground"
          >
            Effects reference
          </h2>
          <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
            Use this as a memory aid for Mark 1. Every example sentence below is original. Learn the
            effect words first, then practise writing the explanation in your own words.
          </p>
          <div className="space-y-4">
            {EFFECTS_REFERENCE.map((entry) => (
              <div key={entry.mark} className="rounded-lg bg-card p-5 border border-border/60">
                <div className="mb-2 flex items-baseline gap-3">
                  <span aria-hidden="true" className="font-mono text-xl font-semibold text-primary">
                    {entry.glyph}
                  </span>
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    {entry.mark}
                  </h3>
                </div>
                <p className="mb-2 text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Common effects: </span>
                  {entry.effects.join('; ')}.
                </p>
                <p className="mb-2 font-heading text-base italic leading-snug text-foreground">
                  &ldquo;{entry.example}&rdquo;
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  <span className="font-semibold text-foreground">Effect: </span>
                  {entry.effectNote}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="worked-examples" className="mb-12">
          <h2
            id="worked-examples"
            className="mb-2 font-heading text-2xl font-semibold text-foreground"
          >
            Worked extracts and {PUNCTUATION_TYPE.typicalMarks}-mark model answers
          </h2>
          <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
            Each extract below is an original short passage. Read the extract, attempt the question
            yourself, then check your response against the model answer, which is split into the two
            separate marks.
          </p>
          <ol className="space-y-6">
            {WORKED_EXAMPLES.map((ex, i) => (
              <li key={ex.id} className="rounded-lg bg-muted p-6 border border-border/60">
                <p className="mb-3 font-mono text-xs font-semibold text-primary">Extract {i + 1}</p>
                <p className="mb-4 border-l-4 border-primary/40 pl-4 font-heading text-base italic leading-relaxed text-foreground">
                  {ex.extract}
                </p>
                <p className="mb-4 text-sm font-semibold text-foreground">{ex.question}</p>
                <div className="space-y-3 rounded-md bg-card p-4 border border-border/60">
                  <p className="text-sm leading-relaxed text-muted-foreground">{ex.mark1}</p>
                  <p className="text-sm leading-relaxed text-muted-foreground">{ex.mark2}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section
          aria-labelledby="tick-table"
          className="mb-12 rounded-lg bg-muted p-6 border border-border/60 sm:p-8"
        >
          <h2 id="tick-table" className="mb-3 font-heading text-2xl font-semibold text-foreground">
            Related question: {TICK_TABLE_TYPE.name}
          </h2>
          <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
            The same punctuation knowledge is tested in a closed {TICK_TABLE_TYPE.typicalMarks}-mark
            question that also assesses {RAO3.code}. {TICK_TABLE_TYPE.format}{' '}
            {TICK_TABLE_TYPE.howToAnswer}
          </p>
          <div className="overflow-x-auto rounded-md border border-border/60">
            <table className="w-full border-collapse text-sm">
              <caption className="sr-only">
                Worked example of a feature-tick table comparing two original texts
              </caption>
              <thead>
                <tr className="bg-card text-left">
                  <th scope="col" className="p-3 font-semibold text-foreground">
                    Feature
                  </th>
                  <th scope="col" className="p-3 font-semibold text-foreground">
                    Text 1
                  </th>
                  <th scope="col" className="p-3 font-semibold text-foreground">
                    Text 2
                  </th>
                  <th scope="col" className="p-3 font-semibold text-foreground">
                    Both texts
                  </th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-t border-border/60">
                  <td className="p-3">Uses a rhetorical question to address the reader</td>
                  <td className="p-3">&#10003;</td>
                  <td className="p-3"></td>
                  <td className="p-3"></td>
                </tr>
                <tr className="border-t border-border/60">
                  <td className="p-3">Uses an apostrophe to show possession</td>
                  <td className="p-3"></td>
                  <td className="p-3"></td>
                  <td className="p-3">&#10003;</td>
                </tr>
                <tr className="border-t border-border/60">
                  <td className="p-3">Uses a dash to add extra information</td>
                  <td className="p-3"></td>
                  <td className="p-3">&#10003;</td>
                  <td className="p-3"></td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Work one row at a time and check both texts before you tick. &ldquo;Both texts&rdquo;
            only counts if the feature genuinely appears in each. Because partial credit is usually
            available, never leave a row blank &mdash; an informed choice can still earn a mark.
          </p>
        </section>

        <section aria-labelledby="exam-tips" className="mb-12">
          <h2 id="exam-tips" className="mb-4 font-heading text-2xl font-semibold text-foreground">
            Quick checklist before you move on
          </h2>
          <ul className="space-y-3 text-sm leading-relaxed text-muted-foreground">
            <li className="flex gap-3">
              <span aria-hidden="true" className="text-primary">
                &#10003;
              </span>
              Have I named the effect with clear terminology (emphasis, pause, suspense, possession
              and so on)?
            </li>
            <li className="flex gap-3">
              <span aria-hidden="true" className="text-primary">
                &#10003;
              </span>
              Have I tied that effect to what the extract is actually describing, not just to the
              mark in general?
            </li>
            <li className="flex gap-3">
              <span aria-hidden="true" className="text-primary">
                &#10003;
              </span>
              Have I mentioned the reader &mdash; what the punctuation makes them feel, expect or
              do?
            </li>
            <li className="flex gap-3">
              <span aria-hidden="true" className="text-primary">
                &#10003;
              </span>
              Is my answer concise? This is a short-response question; two clear sentences are
              enough for full marks.
            </li>
          </ul>
        </section>

        <footer className="mt-12 border-t border-border/60 pt-6 text-xs leading-relaxed text-muted-foreground">
          <p>{SPEC_ATTRIBUTION}</p>
          <p className="mt-3">
            This page is provided for educational instruction and criticism under fair dealing. All
            extracts, example sentences and model answers above are original works written by The
            English Hub and are not reproduced from any past paper or copyrighted source booklet.
            The English Hub is an independent study resource and is not affiliated with or endorsed
            by Pearson.
          </p>
        </footer>
      </article>
    </>
  )
}
