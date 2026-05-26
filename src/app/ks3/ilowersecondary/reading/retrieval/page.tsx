import type { Metadata } from 'next'
import Link from 'next/link'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
import {
  ASSESSMENT_OBJECTIVES,
  READING_SKILLS,
  QUESTION_TYPES,
  SPEC_ATTRIBUTION,
} from '@/lib/ilowersecondary/spec'

const RAO1 = ASSESSMENT_OBJECTIVES.RAO1
const SKILL_1_1 = READING_SKILLS.find((s) => s.code === '1.1')!
const RETRIEVAL_Q = QUESTION_TYPES.find((q) => q.id === 'short-retrieval')!

export const metadata: Metadata = {
  title: 'Retrieval (RAO1) - find and quote exact information',
  description:
    `A masterclass on ${RAO1.code}: ${RAO1.descriptor} Learn what retrieval means, ` +
    'how retrieval questions are worded, how to scan and pinpoint exact evidence, ' +
    'and how to quote precisely. Includes original practice extracts, model answers ' +
    'with mark notes, a do/don’t box and a self-check.',
}

type PracticeQ = {
  q: string
  marks: number
  answer: string
  markNote: string
}

type Practice = {
  id: string
  label: string
  title: string
  text: string[]
  questions: PracticeQ[]
}

const PRACTICE: Practice[] = [
  {
    id: 'recycling',
    label: 'Original practice extract 1 - Report',
    title: 'Sorting day at the recycling centre',
    text: [
      'The Hatherly recycling centre opens at seven o’clock every morning, an hour before the rest of the town is awake. The first job of the day belongs to the sorting team. They walk the long conveyor belt and remove anything that does not belong: a garden hose, a broken kettle, the occasional shoe. These items are pulled out by hand because the machines further down the line cannot read them and would simply jam.',
      'Glass is the heaviest material the centre handles, so it is collected in low metal bins rather than the tall plastic crates used for paper. Each colour of glass is kept apart - clear, green and brown - because mixing them lowers the quality of the new bottles that are made later. By the end of a normal Tuesday the team has filled forty bins.',
    ],
    questions: [
      {
        q: 'Why is glass collected in low metal bins rather than tall plastic crates? (1 mark)',
        marks: 1,
        answer: 'Because glass is the heaviest material the centre handles.',
        markNote:
          'One mark for the precise reason stated in the text (its weight). A vague answer such as “because it is different” does not pinpoint the information and scores 0.',
      },
      {
        q: 'Give one reason the sorting team removes some items by hand. (1 mark)',
        marks: 1,
        answer: 'Because the machines further down the line cannot read those items and would jam.',
        markNote:
          'One mark for either idea - the machines cannot read them, or they would jam. The information is explicit; you may answer in your own words or quote the exact phrase.',
      },
      {
        q: 'How many bins had the team filled by the end of a normal Tuesday? (1 mark)',
        marks: 1,
        answer: 'Forty bins.',
        markNote:
          'One mark for the exact figure (forty). “Lots” or “many” is a gist, not retrieval, and scores 0.',
      },
    ],
  },
  {
    id: 'club',
    label: 'Original practice extract 2 - Recount',
    title: 'My first season at the rowing club',
    text: [
      'I joined the Marlow Junior Rowing Club in the September after my twelfth birthday. I had never sat in a boat before, so for the first three weeks I was not allowed on the water at all. Instead I trained on a wooden rowing machine in the boathouse while the coach, Mrs Okafor, watched my technique and corrected my grip.',
      'When I was finally allowed out, the rule was strict: no junior could row alone, and everyone had to wear a buoyancy aid even in calm weather. My favourite session was the early Saturday outing, because the river was still and the only sound was the blades entering the water.',
    ],
    questions: [
      {
        q: 'Why was the writer not allowed on the water for the first three weeks? (1 mark)',
        marks: 1,
        answer: 'Because the writer had never sat in a boat before.',
        markNote:
          'One mark for the explicit reason given in the text. Answering “they were new” only earns the mark if it clearly reflects “never sat in a boat before”.',
      },
      {
        q: 'State two rules that applied once juniors were allowed out on the water. (2 marks)',
        marks: 2,
        answer:
          'No junior could row alone, and everyone had to wear a buoyancy aid even in calm weather.',
        markNote:
          'One mark per rule, two correct rules for full marks. Both are stated directly; precise retrieval of each one is required.',
      },
    ],
  },
  {
    id: 'museum',
    label: 'Original practice extract 3 - Information leaflet',
    title: 'Visiting the Coastline Museum',
    text: [
      'The Coastline Museum is free to enter, but the temporary exhibition on the second floor charges a small fee that goes towards looking after the objects on loan. Tickets for that exhibition must be booked online; they are not sold at the door because the gallery is small and can hold only thirty visitors at a time.',
      'Photography is welcome throughout the building, with one exception. In the Lighthouse Room the lenses are extremely fragile, so flash photography is not allowed there. Guide dogs are welcome everywhere, including the Lighthouse Room.',
    ],
    questions: [
      {
        q: 'Why must tickets for the temporary exhibition be booked online? (1 mark)',
        marks: 1,
        answer: 'Because the gallery is small and can hold only thirty visitors at a time.',
        markNote:
          'One mark for the precise reason. Note the question asks about booking online, not about the fee - retrieving the wrong sentence loses the mark.',
      },
      {
        q: 'Where is flash photography not allowed, and why? (2 marks)',
        marks: 2,
        answer: 'In the Lighthouse Room, because the lenses there are extremely fragile.',
        markNote:
          'One mark for the exact location (the Lighthouse Room) and one mark for the precise reason (the lenses are fragile).',
      },
    ],
  },
]

const DO_LIST = [
  'Scan first: run your eye down the text for the key word in the question (a name, a number, a place) before reading slowly.',
  'Pinpoint the exact sentence that answers the question, then check it actually matches what is being asked.',
  'Answer in your own words or with a short, precise quotation - either is accepted.',
  'Match the number of points to the marks: a 2-mark retrieval question usually needs two separate pieces of information.',
  'Re-read the question word: “Why…?” wants a reason; “How many…?” wants a figure.',
]

const DONT_LIST = [
  'Don’t give a vague gist (“because it was different”) when the text states an exact reason.',
  'Don’t copy a whole paragraph hoping the answer is somewhere inside it - select only the relevant words.',
  'Don’t retrieve from the wrong sentence: a nearby fact that sounds similar will not be credited.',
  'Don’t add your own opinion or background knowledge - retrieval is about what the text actually says.',
  'Don’t leave a 2-mark question with only one point.',
]

const SELF_CHECK = [
  'Can I point to the exact sentence in the text that proves my answer?',
  'Have I answered the question word that was actually asked (why / how / how many / where)?',
  'Is my answer specific, not a vague summary?',
  'If the question is worth 2 marks, have I given two separate pieces of information?',
  'Have I quoted precisely, or put it accurately in my own words - without distorting the meaning?',
]

export default function RetrievalRAO1Page() {
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
            name: 'Reading skills',
            url: 'https://theenglishhub.app/ks3/ilowersecondary/reading-skills',
          },
          {
            name: 'Retrieval (RAO1)',
            url: 'https://theenglishhub.app/ks3/ilowersecondary/reading/retrieval',
          },
        ]}
      />

      <nav aria-label="Breadcrumb" className="not-prose mb-6 text-sm text-muted-foreground">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
          <li>
            <Link href="/" className="hover:text-foreground">
              Home
            </Link>
          </li>
          <li aria-hidden>/</li>
          <li>
            <Link href="/ks3" className="hover:text-foreground">
              KS3
            </Link>
          </li>
          <li aria-hidden>/</li>
          <li>
            <Link href="/ks3/ilowersecondary" className="hover:text-foreground">
              iLowerSecondary English
            </Link>
          </li>
          <li aria-hidden>/</li>
          <li>
            <Link href="/ks3/ilowersecondary/reading-skills" className="hover:text-foreground">
              Reading skills
            </Link>
          </li>
          <li aria-hidden>/</li>
          <li className="text-foreground" aria-current="page">
            Retrieval ({RAO1.code})
          </li>
        </ol>
      </nav>

      <header className="not-prose mb-10">
        <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-3">
          Reading masterclass &middot; {RAO1.code}
        </p>
        <h1 className="text-3xl font-semibold text-foreground sm:text-4xl">
          Retrieval: finding and quoting exact information
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          {RAO1.code} asks you to{' '}
          <span className="text-foreground">
            {RAO1.descriptor.toLowerCase().replace(/\.$/, '')}
          </span>
          . It is the first thing the exam tests and the most reliable mark on the paper &mdash; if
          you can read carefully and point to the right words, you cannot get it wrong.
        </p>
        <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-3 text-sm">
          <div>
            <dt className="text-muted-foreground">Assessment objective</dt>
            <dd className="text-foreground font-medium">{RAO1.code}</dd>
          </div>
          <div>
            <dt className="text-muted-foreground">Reading skill</dt>
            <dd className="text-foreground font-medium">
              {SKILL_1_1.code} {SKILL_1_1.title}
            </dd>
          </div>
          <div>
            <dt className="text-muted-foreground">Question style</dt>
            <dd className="text-foreground font-medium">{RETRIEVAL_Q.name}</dd>
          </div>
        </dl>
      </header>

      <section aria-labelledby="what" className="mb-12">
        <h2 id="what" className="text-2xl font-semibold text-foreground">
          What &ldquo;retrieval&rdquo; actually means
        </h2>
        <p>
          Retrieval is the literal, surface layer of reading. The answer is{' '}
          <strong>already in the text</strong> &mdash; you are not working it out, guessing, or
          reading between the lines. That deeper work belongs to the next reading skill: the second
          bullet of {SKILL_1_1.code} covers{' '}
          <em>{SKILL_1_1.bullets[1].toLowerCase().replace(/\.$/, '')}</em>. Retrieval is only the
          first bullet: <em>{SKILL_1_1.bullets[0].toLowerCase().replace(/\.$/, '')}</em>.
        </p>
        <p>
          Think of it as <strong>locating</strong> rather than <strong>interpreting</strong>. If the
          text says &ldquo;the centre opens at seven o&rsquo;clock&rdquo; and the question asks what
          time it opens, the words you need are sitting there explicitly. Nothing is hidden or
          implied.
        </p>
      </section>

      <section aria-labelledby="worded" className="mb-12">
        <h2 id="worded" className="text-2xl font-semibold text-foreground">
          How retrieval questions are worded
        </h2>
        <p>
          Retrieval items are short and direct. They are worth{' '}
          {RETRIEVAL_Q.typicalMarks === 1
            ? 'one mark (sometimes two)'
            : `${RETRIEVAL_Q.typicalMarks} marks`}{' '}
          and use a {RETRIEVAL_Q.format.toLowerCase()} You will recognise them from openings such
          as:
        </p>
        <ul>
          <li>
            <strong>&ldquo;Why&hellip;?&rdquo;</strong> &mdash; the text gives a stated reason; find
            it.
          </li>
          <li>
            <strong>&ldquo;How does X&hellip;?&rdquo;</strong> &mdash; the method or fact is
            described directly.
          </li>
          <li>
            <strong>
              &ldquo;How many&hellip;?&rdquo; / &ldquo;Where&hellip;?&rdquo; /
              &ldquo;When&hellip;?&rdquo;
            </strong>{' '}
            &mdash; a specific figure, place or time.
          </li>
          <li>
            <strong>&ldquo;Give one/two&hellip;&rdquo;</strong> &mdash; list the exact number asked
            for; no more, no fewer.
          </li>
        </ul>
        <p className="text-sm text-muted-foreground">
          Examiner guidance for this question type: {RETRIEVAL_Q.howToAnswer}
        </p>
      </section>

      <section aria-labelledby="scan" className="mb-12">
        <h2 id="scan" className="text-2xl font-semibold text-foreground">
          Scanning and pinpointing the exact evidence
        </h2>
        <p>The reliable method has three steps:</p>
        <ol>
          <li>
            <strong>Read the question for its key word.</strong> Underline the noun the question is
            really about (a name, a number, an object).
          </li>
          <li>
            <strong>Scan the text for that word</strong> or a close synonym. Move your eye quickly;
            do not read every word yet.
          </li>
          <li>
            <strong>Slow down and read the sentence around it</strong> to check it genuinely answers
            the question that was asked &mdash; not a similar-sounding one nearby.
          </li>
        </ol>
        <p>
          The single most common error is retrieving the right <em>topic</em> but the wrong{' '}
          <em>sentence</em>. A text about a museum might mention a fee <em>and</em> online booking;
          a question about why you book online is not answered by the sentence about the fee.
        </p>
      </section>

      <section aria-labelledby="quoting" className="mb-12">
        <h2 id="quoting" className="text-2xl font-semibold text-foreground">
          Quoting precisely vs answering in your own words
        </h2>
        <p>Both are accepted for retrieval &mdash; but each has a trap.</p>
        <ul>
          <li>
            <strong>A short, precise quotation</strong> is safest when the exact wording matters.
            Quote only the few words you need, not the whole sentence.
          </li>
          <li>
            <strong>Your own words</strong> are fine, but only if they keep the meaning exactly.
            Re-phrasing that drifts into a vague gist (&ldquo;it was different&rdquo;, &ldquo;there
            were lots&rdquo;) loses the mark.
          </li>
        </ul>
        <p>
          A vague gist fails because retrieval is marked for <strong>precision</strong>. The mark
          scheme rewards a clear, specific reference; it does not credit an answer that is roughly
          in the right area. &ldquo;The team filled forty bins&rdquo; earns the mark; &ldquo;the
          team filled lots of bins&rdquo; does not, because &ldquo;lots&rdquo; is not the
          information the text gives.
        </p>
      </section>

      <section aria-labelledby="practice" className="mb-12">
        <h2 id="practice" className="text-2xl font-semibold text-foreground">
          Practice extracts and model answers
        </h2>
        <p>
          Every extract below is an original non-fiction text written for this page. Read each one,
          attempt the questions, then check the model answer and the mark note.
        </p>

        {PRACTICE.map((p) => (
          <article
            key={p.id}
            className="not-prose mt-8 rounded-xl border border-border/60 bg-card p-5 sm:p-6"
          >
            <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-2">
              {p.label}
            </p>
            <h3 className="text-xl font-semibold text-foreground">{p.title}</h3>
            <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-foreground/90">
              {p.text.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            <ol className="mt-6 space-y-5">
              {p.questions.map((qa, i) => (
                <li key={i} className="border-l-2 border-border pl-4">
                  <p className="font-medium text-foreground">{qa.q}</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">Model answer: </span>
                    {qa.answer}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">
                      Mark note ({qa.marks} {qa.marks === 1 ? 'mark' : 'marks'}):{' '}
                    </span>
                    {qa.markNote}
                  </p>
                </li>
              ))}
            </ol>
          </article>
        ))}
      </section>

      <section aria-labelledby="dodont" className="mb-12">
        <h2 id="dodont" className="text-2xl font-semibold text-foreground">
          Do / don&rsquo;t
        </h2>
        <div className="not-prose grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-border/60 bg-card p-5">
            <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-3">
              Do
            </p>
            <ul className="space-y-2 text-sm text-foreground/90">
              {DO_LIST.map((d) => (
                <li key={d} className="flex gap-2">
                  <span aria-hidden className="text-foreground">
                    +
                  </span>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-border/60 bg-card p-5">
            <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-3">
              Don&rsquo;t
            </p>
            <ul className="space-y-2 text-sm text-foreground/90">
              {DONT_LIST.map((d) => (
                <li key={d} className="flex gap-2">
                  <span aria-hidden className="text-muted-foreground">
                    &minus;
                  </span>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section aria-labelledby="selfcheck" className="mb-12">
        <h2 id="selfcheck" className="text-2xl font-semibold text-foreground">
          Self-check before you move on
        </h2>
        <p>
          Run every retrieval answer through these questions. If you cannot say &ldquo;yes&rdquo; to
          all five, your answer is not yet secure.
        </p>
        <ul>
          {SELF_CHECK.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </section>

      <footer className="not-prose mt-16 border-t border-border/60 pt-6 text-xs leading-relaxed text-muted-foreground">
        <p>{SPEC_ATTRIBUTION}</p>
      </footer>
    </>
  )
}
