import type { Metadata } from 'next'
import Link from 'next/link'
import { headers } from 'next/headers'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
import {
  QUALIFICATION,
  SECTIONS,
  QUESTION_TYPES,
  ASSESSMENT_OBJECTIVES,
  SPEC_ATTRIBUTION,
} from '@/lib/ilowersecondary/spec'

const PAGE_URL = 'https://theenglishhub.app/ks3/ilowersecondary/reference/command-words'

export const metadata: Metadata = {
  openGraph: {
    title: 'iLowerSecondary English command words (LEH11/01)',
    description:
      'A definitive glossary of the command and question words used in the LEH11/01 reading paper: what each one really asks, the response shape it demands, typical marks and an original model answer.',
  },
  title: 'iLowerSecondary English command words (LEH11/01)',
  description:
    'A definitive glossary of the command and question words used in the LEH11/01 reading paper: what each one really asks, the response shape it demands, typical marks and an original model answer.',
  alternates: { canonical: PAGE_URL },
}

type QuestionTypeId = (typeof QUESTION_TYPES)[number]['id']

/**
 * Each command word maps to a canonical QUESTION_TYPES entry so typical
 * marks, AO and format are never restated inline — they are read from
 * the single source of truth.
 */
const COMMAND_WORDS: {
  word: string
  mapsTo: QuestionTypeId
  reallyAsking: string
  responseShape: string
  do: string
  dont: string
  model: string
}[] = [
  {
    word: 'Circle…',
    mapsTo: 'synonym-select',
    reallyAsking:
      'Show that you understand a word in its exact context by choosing the option that means the same thing here.',
    responseShape:
      'A single clean ring around one of the four printed options — no writing, no explanation.',
    do: 'Test your choice by reading it back into the original sentence to check the meaning is unchanged.',
    dont: 'Do not circle two options "to be safe" — a second mark cancels the answer.',
    model:
      'In "the path narrowed", the closest meaning of narrowed is tightened, so that single word is circled.',
  },
  {
    word: 'Underline…',
    mapsTo: 'underline-word-class',
    reallyAsking:
      'Identify one precise grammatical item — a particular word class or verb form — within a given line.',
    responseShape: 'One straight underline beneath the single word that matches the named class.',
    do: 'Apply the grammatical label strictly: an imperative commands, a modal signals possibility or obligation.',
    dont: 'Do not underline a whole phrase when only one word is requested — clarity of the indication matters.',
    model: 'In "Pack your bag before dawn", the imperative verb Pack is the word underlined.',
  },
  {
    word: 'Tick the box / Tick which text…',
    mapsTo: 'feature-tick-table',
    reallyAsking:
      'Decide, for each named feature, whether it appears in Text 1, Text 2 or both, by scanning rather than reading deeply.',
    responseShape: 'One tick per row in the correct column of the table — every row attempted.',
    do: 'Hunt for the specific mark named in each row (a dash, a possessive apostrophe, a question mark) before deciding.',
    dont: 'Do not leave rows blank hoping the others carry you — partial credit depends on rows you actually attempt.',
    model: 'Dashes appear only in Text 2, so the tick goes in the Text 2 column for that row.',
  },
  {
    word: '"Why…?" (retrieval)',
    mapsTo: 'short-retrieval',
    reallyAsking: 'Locate the stated reason in the text and report it precisely.',
    responseShape:
      'One short, specific sentence — your own words or a tight quotation — not a vague summary.',
    do: 'Pin the answer to the exact detail the text gives, not a general impression of the paragraph.',
    dont: 'Do not pad with everything around the answer; a loose gist is not credited.',
    model:
      'The lighthouse keeper left because the lamp had finally been made automatic and his post was closed.',
  },
  {
    word: '"Why…?" (inference)',
    mapsTo: 'inference',
    reallyAsking: 'Work out a reason that the writer implies but never states directly.',
    responseShape: 'One clear sentence stating the implied reason — read between the lines.',
    do: 'Base the inference on a specific clue, then state the unstated reason plainly.',
    dont: 'Do not simply copy a literal line; that shows no inference and earns nothing.',
    model:
      'She kept glancing at the door, which suggests she was expecting someone she did not want the others to see.',
  },
  {
    word: '"How does the writer…?" (language / structure)',
    mapsTo: 'language-structure-analysis',
    reallyAsking:
      'Explain the techniques the writer uses and the effect those choices have on the reader.',
    responseShape:
      'Developed points, each anchored to evidence and an explanation of effect — not a list of features.',
    do: 'For each point, name the choice, quote briefly, then explain what it makes the reader feel or think.',
    dont: 'Do not feature-spot ("there is a simile") without explaining why it works here.',
    model:
      'The short sentence "The water rose." isolates the danger, jolting the reader into the same sudden alarm the boy feels.',
  },
  {
    word: '"Explain what the writer means by…?"',
    mapsTo: 'meaning-impact',
    reallyAsking:
      'Unpack the deeper meaning of a phrase and the impression it creates, rather than just translating it.',
    responseShape:
      'An explanation of the underlying meaning plus its effect — your own words doing the work.',
    do: 'Move from what the phrase literally says to what it suggests and why the writer chose it.',
    dont: 'Do not lift the phrase back unchanged; an unexplained quotation is not credited.',
    model:
      '"A city holding its breath" suggests the streets are tense and unnaturally still, building dread before the storm.',
  },
  {
    word: '"What did the writer mean by…?"',
    mapsTo: 'meaning-impact',
    reallyAsking:
      'Show you grasp an intended meaning beneath the surface words and its impact on the reader.',
    responseShape:
      'A two-part answer: the intended meaning, then the effect it has on how we read the text.',
    do: 'State the meaning clearly first, then add the impact the writer is aiming for.',
    dont: 'Do not stop at a one-word gloss; the second mark needs the effect explained.',
    model:
      'Calling the harbour "a graveyard of boats" means it is full of wrecks, making the place feel abandoned and sad.',
  },
  {
    word: '"Compare…" (the two texts)',
    mapsTo: 'comparison-6-mark',
    reallyAsking:
      'Make an explicit, developed comparison of how two quotations reflect each writer’s purpose and effect.',
    responseShape:
      'A levelled extended answer that explains the contrast and covers language, purpose and reader effect for both.',
    do: 'Use explicit comparative links ("whereas", "by contrast") and address both texts in balance.',
    dont: 'Do not write about one text then the other with no connection — implicit contrast stays at the lowest level.',
    model:
      'Text 1 urges the reader with the command "Act now", whereas Text 2 reflects quietly with "Perhaps it was always too late", so one drives action while the other invites regret.',
  },
  {
    word: '"Explain which… is more appealing"',
    mapsTo: 'which-text-appealing',
    reallyAsking:
      'State a reasoned preference between the texts and support it with evidence from the text you chose.',
    responseShape:
      'A clear preference with a reason, plus an appropriate quotation that justifies it.',
    do: 'Commit to one text and back the choice with a specific, well-chosen piece of evidence.',
    dont: 'Do not sit on the fence or give a preference with no textual support.',
    model:
      'Text 2 is more appealing because its vivid promise "you will taste the salt on the wind" makes the journey feel real and inviting.',
  },
]

export default async function CommandWordsPage() {
  const nonce = (await headers()).get('x-nonce') ?? undefined

  const breadcrumb = [
    { name: 'Home', url: 'https://theenglishhub.app' },
    { name: 'KS3', url: 'https://theenglishhub.app/ks3' },
    {
      name: 'iLowerSecondary English',
      url: 'https://theenglishhub.app/ks3/ilowersecondary',
    },
    {
      name: 'Reference',
      url: 'https://theenglishhub.app/ks3/ilowersecondary/reference',
    },
    { name: 'Command words', url: PAGE_URL },
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
        <span>Reference</span>
        <span> · </span>
        <span>Command words</span>
      </p>

      <h1>Command words in the {QUALIFICATION.paperCode} reading paper</h1>
      <p className="lead">
        Every question in {SECTIONS.A.name} is built around a command or question word that tells
        you exactly what the examiner wants. This glossary decodes each one: what is really being
        asked, the shape of answer it demands, the marks at stake, and a short original model.
      </p>

      <section className="my-10">
        <h2>How to use this page</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Each entry is mapped to the canonical question type it appears as, so the typical marks,
          assessment objective and format come straight from the specification reference rather than
          being repeated here. Match the command word in front of you, then deliver the response
          shape it expects — nothing more, nothing less. Every model answer below is an original
          example written by The English Hub and is not taken from any past paper.
        </p>
      </section>

      <section className="my-10">
        <h2>The glossary</h2>
        <div className="not-prose mt-4 space-y-4">
          {COMMAND_WORDS.map((cw) => {
            const qt = QUESTION_TYPES.find((q) => q.id === cw.mapsTo)!
            const ao = qt.ao
            return (
              <article key={cw.word} className="rounded-xl border border-border/60 bg-card p-5">
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <h3 className="text-base font-semibold text-foreground">{cw.word}</h3>
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="rounded-md border border-border/60 px-2 py-0.5 font-mono text-[11px] text-primary">
                      {qt.typicalMarks} {qt.typicalMarks === 1 ? 'mark' : 'marks'}
                    </span>
                    <span className="rounded-md border border-border/60 px-2 py-0.5 font-mono text-[11px] text-primary">
                      {ao}
                    </span>
                  </div>
                </div>

                <p className="mt-1 font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground">
                  Maps to: {qt.name}
                </p>

                <dl className="mt-4 grid gap-3 sm:grid-cols-2">
                  <div>
                    <dt className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-1">
                      What the examiner is really asking
                    </dt>
                    <dd className="text-sm text-foreground leading-relaxed">{cw.reallyAsking}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-1">
                      Response shape it demands
                    </dt>
                    <dd className="text-sm text-foreground leading-relaxed">{cw.responseShape}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-1">
                      Format
                    </dt>
                    <dd className="text-sm text-muted-foreground leading-relaxed">{qt.format}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-1">
                      How to answer
                    </dt>
                    <dd className="text-sm text-muted-foreground leading-relaxed">
                      {qt.howToAnswer}
                    </dd>
                  </div>
                </dl>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-lg border border-border/60 p-3">
                    <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-primary mb-1">
                      Do
                    </p>
                    <p className="text-sm text-foreground leading-relaxed">{cw.do}</p>
                  </div>
                  <div className="rounded-lg border border-border/60 p-3">
                    <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-1">
                      Don&rsquo;t
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{cw.dont}</p>
                  </div>
                </div>

                <div className="mt-3 rounded-lg border border-border/60 bg-background p-3">
                  <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-1">
                    Original model
                  </p>
                  <p className="text-sm text-foreground leading-relaxed">{cw.model}</p>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      <section className="my-10">
        <h2>Mapped assessment objectives</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          The command words above test the reading objectives below. Knowing which objective a
          question targets tells you what the marker is looking for.
        </p>
        <div className="not-prose mt-4 grid gap-3 sm:grid-cols-2">
          {(['RAO1', 'RAO2', 'RAO3', 'RAO4', 'RAO5'] as const).map((key) => {
            const ao = ASSESSMENT_OBJECTIVES[key]
            return (
              <div key={ao.code} className="rounded-xl border border-border/60 bg-card p-4">
                <p className="font-mono text-xs text-primary mb-1">{ao.code}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{ao.descriptor}</p>
              </div>
            )
          })}
        </div>
      </section>

      <footer className="my-12 border-t border-border/60 pt-6">
        <p className="text-xs text-muted-foreground leading-relaxed">{SPEC_ATTRIBUTION}</p>
      </footer>
    </>
  )
}
