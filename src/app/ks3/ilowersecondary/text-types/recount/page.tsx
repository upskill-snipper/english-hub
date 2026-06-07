import type { Metadata } from 'next'
import Link from 'next/link'
import { t } from '@/lib/i18n/t'
import { headers } from 'next/headers'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
import {
  NON_FICTION_TEXT_TYPES,
  NON_FICTION_PURPOSES,
  WRITING_FORMS,
  GUIDED_READING_PROMPTS,
  ASSESSMENT_OBJECTIVES,
  SPEC_ATTRIBUTION,
} from '@/lib/ilowersecondary/spec'

const PAGE_URL = 'https://theenglishhub.app/ks3/ilowersecondary/text-types/recount'

const RAO3 = ASSESSMENT_OBJECTIVES.RAO3
const WAO1 = ASSESSMENT_OBJECTIVES.WAO1
const READING_TYPE_COUNT = NON_FICTION_TEXT_TYPES.length
const WRITING_FORM_COUNT = WRITING_FORMS.length
const PURPOSE_LIST = (NON_FICTION_PURPOSES as readonly string[]).join(', ')
const GENRE_PROMPTS = GUIDED_READING_PROMPTS.nonFiction.Genre

export const metadata: Metadata = {
  openGraph: {
    title: 'The recount - reading and writing guide (KS3 iLowerSecondary English)',
    description:
      'A KS3 iLowerSecondary English guide to the recount as both a non-fiction text type and a Section B writing form: conventions, structure analysis (RAO3), worked extracts, practice questions with model answers, and a recount-writing task.',
  },
  title: 'The recount - reading and writing guide',
  description:
    'A KS3 iLowerSecondary English guide to the recount as both a non-fiction text type and a Section B writing form: conventions, structure analysis (RAO3), worked extracts, practice questions with model answers, and a recount-writing task.',
  alternates: { canonical: PAGE_URL },
}

// ─── Original teaching content (all examples written by The English Hub) ─

const CONVENTIONS: { feature: string; what: string }[] = [
  {
    feature: 'Chronological order',
    what: 'Events are retold in the order they happened. The reader follows the sequence as if living through it, which is what separates a recount from a report (organised by topic) or an argument (organised by point).',
  },
  {
    feature: 'Past tense',
    what: 'A recount looks back, so verbs are almost always in the past tense ("we arrived", "the engine had stalled"). The simple past carries the action; the past perfect signals an earlier event.',
  },
  {
    feature: 'First or third person',
    what: 'A personal recount uses the first person ("I", "we") and a personal voice. A factual or event recount often uses the third person ("the team", "officials") to sound more objective.',
  },
  {
    feature: 'Time connectives',
    what: 'Words and phrases such as "at first", "soon afterwards", "later that morning", "by the time" and "eventually" thread one event into the next and make the sequence explicit.',
  },
  {
    feature: 'Orientation → events → reorientation',
    what: 'The opening (orientation) tells the reader who, what, where and when. The middle retells the events in order. The close (reorientation) rounds off with a reflection, an outcome or a comment on what it meant.',
  },
  {
    feature: 'Factual but engaging',
    what: 'A recount records what actually happened, so it stays accurate, but a strong recount also selects vivid detail and controls pace so the reader wants to keep reading.',
  },
  {
    feature: 'Personal voice (personal recounts)',
    what: 'In a personal recount the writer shares feelings and reactions ("I could hardly breathe", "we had never felt so small"), so the reader experiences the events through the writer rather than just learning about them.',
  },
]

const OVERLAP: { form: string; shares: string; differs: string }[] = [
  {
    form: 'Diary',
    shares:
      'A diary entry is a recount of one person’s day: chronological order, past tense, first person and a strong personal voice.',
    differs:
      'A diary adds a date, a private address to the self (often informal and reflective) and is written close to the events, so it can sound unfinished or raw.',
  },
  {
    form: 'Letter',
    shares:
      'A letter often contains a recount - "Let me tell you what happened on Saturday…" - retold in order for a named reader.',
    differs:
      'A letter wraps the recount in letter conventions (greeting, sign-off) and shapes it for one specific audience, so the tone and detail are chosen for that reader.',
  },
  {
    form: 'Autobiographical writing',
    shares:
      'Autobiography is an extended personal recount: real events, first person, reflective close.',
    differs:
      'Autobiography usually spans a longer period and steps back to interpret a life, where a recount typically covers a single occasion or trip.',
  },
]

const STRUCTURE_QUESTIONS: { stage: string; askWhenReading: string }[] = [
  {
    stage: 'Orientation',
    askWhenReading:
      'How does the opening set up who, what, where and when? Is anything held back to make me read on?',
  },
  {
    stage: 'Sequence of events',
    askWhenReading:
      'How are the events ordered, and which time connectives mark the moves? Where does the writer slow down for an important moment and where do they speed up?',
  },
  {
    stage: 'Shifts and focus',
    askWhenReading:
      'Where does the writer change time, place or focus? Why place the most striking event where it is rather than first?',
  },
  {
    stage: 'Reorientation',
    askWhenReading:
      'How does the close round the recount off - an outcome, a reflection, a return to an image from the opening?',
  },
]

const PERSONAL_EXTRACT: { text: string; note: string }[] = [
  {
    text: 'It was still dark when my grandmother woke me, pressing a warm flask into my hands and whispering that the boats would not wait.',
    note: 'Orientation: who (grandmother, "me"), when (before dawn), where (implied harbour). The whisper and the flask establish a personal, sensory voice from the first line.',
  },
  {
    text: 'At first I sulked at the cold; soon afterwards, as the harbour lights slid behind us, the sulking simply stopped.',
    note: 'Time connectives "at first" and "soon afterwards" sequence the events. The shift from "sulked" to "stopped" tracks the writer’s changing feelings - a personal recount.',
  },
  {
    text: 'By the time the sun cleared the cliffs, I understood why she had never once let me sleep through this.',
    note: 'Reorientation: "By the time" closes the sequence and the final clause reflects on the meaning of the morning rather than just reporting it.',
  },
]

const EVENT_EXTRACT: { text: string; note: string }[] = [
  {
    text: 'On the morning of 14 March, the lower-school relay team gathered at the track for the county final, having qualified the previous week.',
    note: 'Orientation in the third person: who (the team), what (county final), when (14 March), where (the track). "Having qualified" uses the past perfect for an earlier event.',
  },
  {
    text: 'The first three legs went to plan. Then, on the final changeover, the baton slipped - and for a moment the race seemed lost.',
    note: 'Chronological order with the connective "Then". The dash and short clause slow the pace at the key event, keeping a factual recount engaging.',
  },
  {
    text: 'Despite the fumble, the anchor runner recovered the baton and finished third, securing the team a place at the regional meet.',
    note: 'Reorientation: the outcome and its consequence. The objective tone and absence of "I" mark this as a factual or event recount, not a personal one.',
  },
]

const PRACTICE: { q: string; marks: string; model: string }[] = [
  {
    q: 'In the personal extract, what is the effect of the writer ordering the events from "still dark" to "the sun cleared the cliffs"?',
    marks: '2 marks (RAO3)',
    model:
      'The chronological order takes the reader through the morning in real time, so the change in light mirrors the change in the writer’s feelings. Because the recount moves from darkness to sunrise, the closing realisation feels earned rather than simply stated.',
  },
  {
    q: 'Identify one time connective in the event extract and explain how it organises the recount.',
    marks: '2 marks (RAO3)',
    model:
      '"Then" links the smooth first three legs to the dropped baton. It signals a turning point in the sequence, separating the part that "went to plan" from the crisis, so the reader feels the order of events clearly.',
  },
  {
    q: 'How can you tell the personal extract is a personal recount rather than a factual one?',
    marks: '2 marks (RAO5)',
    model:
      'It is written in the first person ("I", "me") and shares the writer’s changing feelings, moving from sulking to understanding. The voice is reflective rather than neutral, so the reader experiences the morning through the writer instead of only being informed of it.',
  },
  {
    q: 'Explain how the writer of the event extract keeps a factual recount engaging.',
    marks: '3 marks (RAO5)',
    model:
      'The writer keeps the recount accurate - a dated event, a clear result - but selects the dropped baton as the dramatic centre. The dash and the short clause "and for a moment the race seemed lost" slow the pace at the crucial point, creating tension, so the reader stays involved even though the tone stays objective.',
  },
]

const TASK_OPENING: { text: string; note: string }[] = [
  {
    text: 'I had walked past the old library a hundred times, but the morning it finally reopened I was the first in the queue, shifting from foot to foot in the cold.',
    note: 'Orientation: establishes who (first person, "I"), where (the old library), when (the reopening morning) and a hint of feeling, all in one sentence so the events can begin straight away.',
  },
]

export default async function RecountPage() {
  const nonce = (await headers()).get('x-nonce') ?? undefined

  const breadcrumb = [
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
    { name: 'Recount', url: PAGE_URL },
  ]

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumb} nonce={nonce} />

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
        <span>{await t('ks3.page.text_types.recount.bc')}</span>
      </p>

      <h1>The recount &mdash; a reading and writing guide</h1>
      <p className="lead">
        The recount sits in two places on this qualification at once. It is one of the{' '}
        {READING_TYPE_COUNT} set non-fiction text types you may have to read and analyse in Section
        A, and one of the {WRITING_FORM_COUNT} writing forms you may be asked to produce in Section
        B. This guide covers the conventions, how to analyse a recount when reading, and how to
        write a strong one under timed conditions.
      </p>

      {/* ── What a recount is ───────────────────────────────────────── */}
      <section className="my-10">
        <h2>What a recount is</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          A recount retells events that really happened, in the order they happened, so that a
          reader can follow them. Its main purposes are usually to <em>inform</em> and to{' '}
          <em>describe</em> &mdash; two of the recognised non-fiction purposes ({PURPOSE_LIST})
          &mdash; and a personal recount often adds the aim of letting the reader share an
          experience. Because it is anchored to true events, a recount must be accurate; but
          accuracy alone is not enough, so good recounts also select detail and control pace.
        </p>
      </section>

      {/* ── Conventions ─────────────────────────────────────────────── */}
      <section className="my-10">
        <h2>The conventions of a recount</h2>
        <p className="text-sm text-muted-foreground">
          These are the features an examiner expects to see, whether you are spotting them in a
          reading text or building them into your own writing.
        </p>
        <div className="not-prose mt-4 grid gap-3 sm:grid-cols-2">
          {CONVENTIONS.map((c) => (
            <div key={c.feature} className="rounded-xl border border-border/60 bg-card p-4">
              <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-2">
                {c.feature}
              </p>
              <p className="text-sm text-foreground leading-relaxed">{c.what}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Overlap with other forms ────────────────────────────────── */}
      <section className="my-10">
        <h2>How recounts overlap with diary and letter forms</h2>
        <p className="text-sm text-muted-foreground">
          A recount is a way of organising events, so it often lives inside another form.
          Recognising the overlap stops you losing marks for missing the conventions of the form you
          have been set.
        </p>
        <div className="not-prose mt-4 overflow-x-auto rounded-xl border border-border/60">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-card">
                <th className="px-4 py-3 text-left font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground">
                  Form
                </th>
                <th className="px-4 py-3 text-left font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground">
                  What it shares with a recount
                </th>
                <th className="px-4 py-3 text-left font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground">
                  What it adds or changes
                </th>
              </tr>
            </thead>
            <tbody>
              {OVERLAP.map((o) => (
                <tr key={o.form} className="border-t border-border/60 align-top">
                  <td className="px-4 py-3 font-mono text-xs text-primary">{o.form}</td>
                  <td className="px-4 py-3 text-foreground leading-relaxed">{o.shares}</td>
                  <td className="px-4 py-3 text-muted-foreground leading-relaxed">{o.differs}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Analysing structure when reading ────────────────────────── */}
      <section className="my-10">
        <h2>Analysing recount structure when reading ({RAO3.code})</h2>
        <p className="text-sm text-muted-foreground">
          {RAO3.code} rewards you for this: <em>{RAO3.descriptor}</em> A recount has a predictable
          shape, so the marks come from explaining <em>why</em> the writer ordered the events as
          they did, not just labelling the parts. As the Teacher&rsquo;s Guide guided-reading
          prompts put it for any non-fiction text, first decide the genre:
        </p>
        <ul className="not-prose mt-3 space-y-2">
          {GENRE_PROMPTS.map((p) => (
            <li
              key={p}
              className="rounded-xl border border-border/60 bg-card p-3 text-sm text-foreground leading-relaxed"
            >
              {p}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-muted-foreground">
          Once you know it is a recount, work through these structural questions:
        </p>
        <div className="not-prose mt-3 grid gap-3 sm:grid-cols-2">
          {STRUCTURE_QUESTIONS.map((s) => (
            <div key={s.stage} className="rounded-xl border border-border/60 bg-card p-4">
              <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-2">
                {s.stage}
              </p>
              <p className="text-sm text-foreground leading-relaxed">{s.askWhenReading}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Annotated extract: personal recount ─────────────────────── */}
      <section className="my-10">
        <h2>Annotated extract 1 &mdash; a personal recount</h2>
        <p className="text-sm text-muted-foreground">
          An original extract written by The English Hub. Read the left-hand column as the text and
          the right-hand note as the structural analysis.
        </p>
        <div className="not-prose mt-4 space-y-3">
          {PERSONAL_EXTRACT.map((row, i) => (
            <div
              key={i}
              className="grid gap-3 rounded-xl border border-border/60 bg-card p-4 sm:grid-cols-2"
            >
              <p className="text-sm text-foreground leading-relaxed italic">{row.text}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{row.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Annotated extract: event recount ────────────────────────── */}
      <section className="my-10">
        <h2>Annotated extract 2 &mdash; a factual / event recount</h2>
        <p className="text-sm text-muted-foreground">
          A second original extract written by The English Hub. Notice the third-person, objective
          voice compared with extract 1.
        </p>
        <div className="not-prose mt-4 space-y-3">
          {EVENT_EXTRACT.map((row, i) => (
            <div
              key={i}
              className="grid gap-3 rounded-xl border border-border/60 bg-card p-4 sm:grid-cols-2"
            >
              <p className="text-sm text-foreground leading-relaxed italic">{row.text}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{row.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Practice questions ──────────────────────────────────────── */}
      <section className="my-10">
        <h2>Practice questions with model answers</h2>
        <p className="text-sm text-muted-foreground">
          Four questions on the two extracts above. Try each one before reading the model answer.
        </p>
        <ol className="not-prose mt-4 space-y-4">
          {PRACTICE.map((item, i) => (
            <li key={i} className="rounded-xl border border-border/60 bg-card p-4">
              <div className="mb-2 flex items-baseline gap-3">
                <span className="font-mono text-xs font-semibold text-primary">Q{i + 1}</span>
                <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground">
                  {item.marks}
                </span>
              </div>
              <p className="text-sm font-medium text-foreground leading-relaxed">{item.q}</p>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                <span className="font-semibold text-foreground">Model answer: </span>
                {item.model}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* ── Writing a recount for Section B ──────────────────────────── */}
      <section className="my-10">
        <h2>Writing a recount for Section B</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          In Section B a recount is marked under {WAO1.code}: <em>{WAO1.descriptor}</em> The form is
          rewarded when it is established and maintained, so signal it early: open with a clear
          orientation, retell events in chronological order using controlled time connectives, place
          your most striking moment where it has the most impact rather than simply first, and close
          with a reorientation that reflects or states the outcome. If the task names a related form
          &mdash; a diary or a letter &mdash; keep the recount shape but add that form&rsquo;s
          conventions on top.
        </p>
      </section>

      {/* ── Recount-writing task ────────────────────────────────────── */}
      <section className="my-10">
        <h2>Your recount-writing task</h2>
        <div className="not-prose rounded-xl border border-border/60 bg-card p-5">
          <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-2">
            Task (original, written by The English Hub)
          </p>
          <p className="text-sm text-foreground leading-relaxed">
            Write a recount of a day when something you had waited a long time for finally happened.
            Your recount should inform and engage a reader of your own age. Write in the first
            person and aim for four to five paragraphs.
          </p>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          Below is a model opening for this task, with an annotation showing how it uses recount
          structure.
        </p>
        <div className="not-prose mt-3 space-y-3">
          {TASK_OPENING.map((row, i) => (
            <div
              key={i}
              className="grid gap-3 rounded-xl border border-border/60 bg-card p-4 sm:grid-cols-2"
            >
              <p className="text-sm text-foreground leading-relaxed italic">{row.text}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{row.note}</p>
            </div>
          ))}
        </div>
        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
          From here, the next paragraphs would retell the reopening in order &mdash; the doors
          opening, the first room, the moment it met or defied expectation &mdash; linked by time
          connectives, before a short reorientation that reflects on why the wait was worth it. That
          orientation &rarr; events &rarr; reorientation shape is exactly what the {WAO1.code} grid
          means by a form that is &ldquo;established and maintained&rdquo;.
        </p>
      </section>

      {/* ── Fair-dealing footer ─────────────────────────────────────── */}
      <footer className="my-12 border-t border-border/60 pt-6">
        <p className="text-xs text-muted-foreground leading-relaxed">{SPEC_ATTRIBUTION}</p>
      </footer>
    </>
  )
}
