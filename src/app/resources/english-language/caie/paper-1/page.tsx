import type { Metadata } from 'next'
import Link from 'next/link'
import { ExamBoardDisclaimer } from '@/components/ExamBoardDisclaimer'

import { t as _trServer } from '@/lib/i18n/t'
import { STRINGS as _EAL_STRINGS } from './content'
/* ─── Metadata ───────────────────────────────────────────────── */

export const metadata: Metadata = {
  openGraph: {
    title: 'Paper 1: Reading | Cambridge IGCSE English Language',
    description:
      'Complete guide to Cambridge IGCSE English Language Paper 1 (Reading). Covers comprehension question types, summary writing, note-making, and passage analysis with marker tips.',
  },
  alternates: { canonical: 'https://theenglishhub.app/resources/english-language/caie/paper-1' },
  title: 'Paper 1: Reading | Cambridge IGCSE English Language',
  description:
    'Complete guide to Cambridge IGCSE English Language Paper 1 (Reading). Covers comprehension question types, summary writing, note-making, and passage analysis with marker tips.',
  keywords: [
    'IGCSE English Language Paper 1',
    'Cambridge reading comprehension',
    'IGCSE summary writing',
    'IGCSE note-making',
    'CAIE 0500 Paper 1',
    'IGCSE reading tips',
  ],
}

/* ─── Page component ─────────────────────────────────────────── */

export default async function Paper1ReadingPage() {
  // Resolve AR via server-side t() helper + content.ts fallback
  const _hdrs = await (await import('next/headers')).headers()
  const _lang = _hdrs.get('x-lang') === 'ar' ? 'ar' : 'en'
  const _tr = (en: string): string => {
    if (_lang !== 'ar') return en
    for (const v of Object.values(_EAL_STRINGS)) if (v.en === en) return v.ar || en
    return en
  }
  // Note: this server component reads from content.ts directly; the
  // server-side t() helper resolves the locale from the request header.

  return (
    <>
      {/* ── Hero ────────────────────────────────────────────────── */}
      <section className="border-b bg-gradient-to-b from-primary/[0.06] to-transparent px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/resources/english-language/caie"
            className="mb-4 inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-1 h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            {await _trServer('study.lang.caie.back')}
          </Link>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Paper 1: Reading
          </h1>
          <p className="mt-2 text-lg text-muted-foreground">Core Paper 1 &amp; Extended Paper 2</p>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            This paper tests your ability to read and understand passages of writing, identify
            information, select relevant material, and demonstrate understanding of how writers
            achieve effects.
          </p>
        </div>
      </section>

      {/* ── Main content ──────────────────────────────────────── */}
      <div className="mx-auto max-w-4xl px-4 py-12 sm:py-16">
        {/* Paper structure */}
        <section aria-labelledby="structure-heading">
          <h2 id="structure-heading" className="text-2xl font-bold text-foreground">
            Paper Structure
          </h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[500px] text-left text-sm">
              <thead>
                <tr className="border-b-2 border-primary/20">
                  <th className="py-3 pr-4 font-semibold text-foreground">Section</th>
                  <th className="py-3 pr-4 font-semibold text-foreground">{_tr(`What You Do`)}</th>
                  <th className="py-3 pr-4 font-semibold text-foreground">Marks</th>
                  <th className="py-3 font-semibold text-foreground">{_tr(`Suggested Time`)}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-muted-foreground">
                <tr>
                  <td className="py-3 pr-4 font-medium">{_tr(`Question 1`)}</td>
                  <td className="py-3 pr-4">
                    Detailed comprehension &mdash; factual retrieval, inference, vocabulary in
                    context
                  </td>
                  <td className="py-3 pr-4">25</td>
                  <td className="py-3">25 minutes</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium">{_tr(`Question 2`)}</td>
                  <td className="py-3 pr-4">
                    {_tr(`Summary &mdash; select and organise ideas from one or both passages`)}
                  </td>
                  <td className="py-3 pr-4">25</td>
                  <td className="py-3">30 minutes</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium">{_tr(`Question 3`)}</td>
                  <td className="py-3 pr-4">
                    {_tr(
                      `Language analysis &mdash; how the writer uses language to create effects`,
                    )}
                  </td>
                  <td className="py-3 pr-4">25</td>
                  <td className="py-3">55 minutes</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            Extended paper total: 80 marks in 2 hours (plus 5 marks for spelling, punctuation, and
            grammar across the paper). Core candidates sit Paper 1 with slightly different question
            formats.
          </p>
        </section>

        <hr className="my-10 border-border" />

        {/* ── Comprehension question types ─────────────────────── */}
        <section aria-labelledby="comprehension-heading">
          <h2 id="comprehension-heading" className="text-2xl font-bold text-foreground">
            Comprehension Question Types &amp; How to Answer
          </h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Question 1 tests your understanding of the passage through several sub-questions. Here
            are the main types you will encounter:
          </p>

          <div className="mt-6 space-y-6">
            {/* Type 1 */}
            <div className="rounded-lg border border-border bg-card p-5">
              <h3 className="font-semibold text-primary">
                1. Factual Retrieval (&ldquo;According to the passage&hellip;&rdquo;)
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                These questions ask you to find specific information from the passage. The answer is
                explicitly stated in the text.
              </p>
              <div className="mt-3 rounded bg-muted p-3">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  {_tr(`How to answer`)}
                </p>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    Read the question carefully and identify the key words.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    Scan the passage for those key words or synonyms.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    Use your own words where the question asks &mdash; do not &ldquo;lift&rdquo;
                    entire sentences unless instructed.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    Check how many marks are available &mdash; this tells you how many separate
                    points are needed.
                  </li>
                </ul>
              </div>
            </div>

            {/* Type 2 */}
            <div className="rounded-lg border border-border bg-card p-5">
              <h3 className="font-semibold text-primary">
                2. Inference (&ldquo;What do you learn about&hellip;&rdquo;)
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                These questions require you to read between the lines. The answer is implied rather
                than directly stated.
              </p>
              <div className="mt-3 rounded bg-muted p-3">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  {_tr(`How to answer`)}
                </p>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    Identify what is suggested or implied, not just what is literally said.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    Support your inference with a short quotation or textual reference.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    Use phrases like &ldquo;This suggests that&hellip;&rdquo; or &ldquo;This
                    implies&hellip;&rdquo; to show you are inferring.
                  </li>
                </ul>
              </div>
            </div>

            {/* Type 3 */}
            <div className="rounded-lg border border-border bg-card p-5">
              <h3 className="font-semibold text-primary">
                3. Vocabulary in Context (&ldquo;Explain the meaning of&hellip;&rdquo;)
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                You are given a word or phrase from the passage and asked to explain its meaning{' '}
                <em>as it is used in the passage</em>.
              </p>
              <div className="mt-3 rounded bg-muted p-3">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  {_tr(`How to answer`)}
                </p>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    Re-read the sentence containing the word.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    Provide a synonym or short explanation that fits the context.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    Test your answer by mentally substituting it into the original sentence &mdash;
                    it should still make sense.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    Do not just give a dictionary definition if the word is used in an unusual or
                    figurative way.
                  </li>
                </ul>
              </div>
            </div>

            {/* Type 4 */}
            <div className="rounded-lg border border-border bg-card p-5">
              <h3 className="font-semibold text-primary">
                4. Selecting and Using Information (&ldquo;Give two reasons why&hellip;&rdquo;)
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                These questions ask you to pick out specific points from a defined section of the
                passage.
              </p>
              <div className="mt-3 rounded bg-muted p-3">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  {_tr(`How to answer`)}
                </p>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    Note exactly how many points are required (the number of marks or explicit
                    instruction like &ldquo;give three reasons&rdquo;).
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    Make each point separate and distinct &mdash; avoid repeating the same idea in
                    different words.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    Write concisely &mdash; one or two sentences per point is usually sufficient.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* ── Summary writing ──────────────────────────────────── */}
        <section aria-labelledby="summary-heading">
          <h2 id="summary-heading" className="text-2xl font-bold text-foreground">
            Summary Writing (Question 2)
          </h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            The summary question is often the most challenging part of the reading paper. You must
            select relevant ideas from the passage(s) and present them in a concise, coherent piece
            of continuous prose.
          </p>

          {/* Step-by-step */}
          <div className="mt-6 space-y-4">
            <div className="flex gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                1
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{_tr(`Read the question first`)}</h3>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Identify exactly what you are being asked to summarise. Underline the focus of the
                  question &mdash; e.g. &ldquo;the challenges faced by the villagers&rdquo; or
                  &ldquo;the differences between the two writers&rsquo; experiences.&rdquo;
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                2
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{_tr(`Identify relevant points`)}</h3>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Go through the passage(s) and underline or number every point that is relevant to
                  the question. Aim to find at least 12&ndash;15 content points. Do not include
                  examples, quotations, or statistics at this stage &mdash; just the ideas.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                3
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{_tr(`Organise your points`)}</h3>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Group similar ideas together. Decide on a logical order. If you are comparing two
                  passages, you might organise point by point (alternating) or deal with one passage
                  first and then the other.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                4
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{_tr(`Write in your own words`)}</h3>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  This is critical. Cambridge markers specifically penalise &ldquo;lifting&rdquo;
                  (copying directly from the passage). You must rephrase the ideas using your own
                  vocabulary and sentence structures. The marking guide awards up to 15 marks for
                  content (the number of relevant points) and up to 10 marks for quality of writing
                  (use of own words, fluency, accuracy).
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                5
              </div>
              <div>
                <h3 className="font-semibold text-foreground">
                  {_tr(`Stay within the word limit`)}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The question will usually specify a word limit (typically around 200&ndash;250
                  words). Going significantly over may mean you have included irrelevant material or
                  are not being concise enough. Going significantly under may mean you have missed
                  content points.
                </p>
              </div>
            </div>
          </div>

          {/* Common mistakes */}
          <div className="mt-8 rounded-lg border border-warn-200 bg-warn-50 p-5">
            <h3 className="font-semibold text-warn-700">{_tr(`Common Mistakes to Avoid`)}</h3>
            <ul className="mt-3 space-y-2 text-sm text-warn-800">
              <li className="flex items-start gap-2">
                <span className="mt-1 font-bold">&times;</span>
                Copying whole phrases or sentences from the passage (lifting).
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 font-bold">&times;</span>
                Including your own opinions or commentary &mdash; a summary should only contain
                ideas from the passage.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 font-bold">&times;</span>
                Writing in bullet points instead of continuous prose.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 font-bold">&times;</span>
                Repeating the same point in different words (this wastes your word count and does
                not earn additional marks).
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 font-bold">&times;</span>
                Ignoring one of the two passages when the question refers to both.
              </li>
            </ul>
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* ── Note-making ──────────────────────────────────────── */}
        <section aria-labelledby="note-making-heading">
          <h2 id="note-making-heading" className="text-2xl font-bold text-foreground">
            Note-Making Skills
          </h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Some questions (particularly on the Core paper) may test note-making. This is the skill
            of extracting key information from a passage and presenting it in an organised, concise
            format.
          </p>

          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div className="rounded-lg border border-border bg-card p-5">
              <h3 className="font-semibold text-primary">{_tr(`What Markers Want`)}</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Clear, short points &mdash; not full sentences.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Each point should be a separate idea or fact.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Points should be relevant to the question focus.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Use your own words where possible.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Logical grouping or ordering is rewarded.
                </li>
              </ul>
            </div>
            <div className="rounded-lg border border-border bg-card p-5">
              <h3 className="font-semibold text-primary">Technique</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Read the question and identify the focus area.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Skim the passage and underline relevant information.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Convert underlined information into short note form.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Remove unnecessary words (articles, filler phrases).
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Number your points clearly.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* ── Language analysis (Q3) ───────────────────────────── */}
        <section aria-labelledby="analysis-heading">
          <h2 id="analysis-heading" className="text-2xl font-bold text-foreground">
            Language Analysis (Question 3)
          </h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            This is the highest-tariff question and separates good candidates from excellent ones.
            You must analyse <strong>how</strong> the writer uses language to create specific
            effects on the reader.
          </p>

          <div className="mt-6 rounded-lg border border-primary/20 bg-primary/10 p-5">
            <h3 className="font-semibold text-primary">{_tr(`The KEY Formula`)}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              Use this framework for every analytical point you make:
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              <div className="rounded bg-card p-3 text-center shadow-md">
                <p className="text-lg font-bold text-primary">K</p>
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  {_tr(`Keyword / Quote`)}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Select a specific word, phrase, or technique from the passage.
                </p>
              </div>
              <div className="rounded bg-card p-3 text-center shadow-md">
                <p className="text-lg font-bold text-primary">E</p>
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Explain
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Identify the technique and explain what it means literally.
                </p>
              </div>
              <div className="rounded bg-card p-3 text-center shadow-md">
                <p className="text-lg font-bold text-primary">Y</p>
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  {_tr(`Why / Effect`)}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Explain the effect on the reader &mdash; what does the writer achieve?
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-lg border border-border bg-card p-5">
            <h3 className="font-semibold text-foreground">
              Example Response (Band 5&ndash;6 Quality)
            </h3>
            <div className="mt-3 rounded bg-muted p-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                The writer describes the storm as a <em>&ldquo;furious beast&rdquo;</em>, using a{' '}
                <strong>metaphor</strong> to compare the storm to a dangerous animal. The adjective
                &ldquo;furious&rdquo; personifies the storm, suggesting it has human emotions of
                rage, which makes the reader feel that the storm is unpredictable and threatening.
                The noun &ldquo;beast&rdquo; has connotations of something wild and uncontrollable,
                creating a sense of helplessness and fear. This is effective because it makes the
                reader empathise with the characters who are caught in the storm, heightening the
                tension in the narrative.
              </p>
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              Notice: specific quotation &rarr; technique identified &rarr; meaning explained &rarr;
              effect on reader &rarr; link back to question. This is what top-band responses look
              like.
            </p>
          </div>

          <h3 className="mt-8 text-lg font-semibold text-foreground">
            What to Look For in a Passage
          </h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-border p-4">
              <p className="text-sm font-semibold text-primary">Imagery</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Metaphors, similes, personification &mdash; how does the writer paint pictures with
                words?
              </p>
            </div>
            <div className="rounded-lg border border-border p-4">
              <p className="text-sm font-semibold text-primary">{_tr(`Word Choice`)}</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Adjectives, adverbs, verbs with strong connotations. What associations do the chosen
                words carry?
              </p>
            </div>
            <div className="rounded-lg border border-border p-4">
              <p className="text-sm font-semibold text-primary">{_tr(`Sentence Structure`)}</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Short sentences for impact/tension. Long, complex sentences for detailed
                description. Lists for emphasis.
              </p>
            </div>
            <div className="rounded-lg border border-border p-4">
              <p className="text-sm font-semibold text-primary">{_tr(`Tone &amp; Mood`)}</p>
              <p className="mt-1 text-sm text-muted-foreground">
                How does the passage make you feel? Identify the overall tone and explain how
                specific language choices create it.
              </p>
            </div>
            <div className="rounded-lg border border-border p-4">
              <p className="text-sm font-semibold text-primary">{_tr(`Sound Devices`)}</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Alliteration, onomatopoeia, sibilance &mdash; how does the writing sound when read
                aloud?
              </p>
            </div>
            <div className="rounded-lg border border-border p-4">
              <p className="text-sm font-semibold text-primary">
                {_tr(`Contrast &amp; Juxtaposition`)}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Does the writer place opposing ideas side by side to emphasise a point or create
                surprise?
              </p>
            </div>
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* ── Passage analysis strategy ────────────────────────── */}
        <section aria-labelledby="strategy-heading">
          <h2 id="strategy-heading" className="text-2xl font-bold text-foreground">
            Reading Passage Strategy
          </h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            When you first see the passage, follow this approach:
          </p>
          <ol className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                1
              </span>
              <span>
                <strong>{_tr(`Skim-read the entire passage`)}</strong> (2&ndash;3 minutes) to get a
                sense of the subject, tone, and structure.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                2
              </span>
              <span>
                <strong>{_tr(`Read the questions`)}</strong> so you know what to look for on your
                second, more detailed read.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                3
              </span>
              <span>
                <strong>{_tr(`Re-read the passage carefully`)}</strong>, annotating key words,
                techniques, and relevant information for each question.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                4
              </span>
              <span>
                <strong>{_tr(`Answer in order`)}</strong> &mdash; Cambridge questions generally
                follow the passage chronologically, so working through them in order is most
                efficient.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                5
              </span>
              <span>
                <strong>{_tr(`Check mark allocations`)}</strong> &mdash; if a question is worth 3
                marks, you need 3 distinct points. If it is worth 1 mark, keep your answer brief.
              </span>
            </li>
          </ol>
        </section>

        {/* Continue studying */}
        <div className="mt-12 rounded-xl border border-primary/20 bg-primary/5 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-foreground">{_tr(`Continue studying`)}</h2>
          <p className="mt-2 text-muted-foreground">
            Build your reading comprehension and writing skills further.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/resources/english-language/caie/paper-2"
              className="rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition hover:border-primary hover:shadow-md"
            >
              Paper 2: Directed Writing &amp; Composition
            </Link>
            <Link
              href="/resources/english-language/caie/techniques"
              className="rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition hover:border-primary hover:shadow-md"
            >
              Language Techniques Guide
            </Link>
            <Link
              href="/resources/writing-skills"
              className="rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition hover:border-primary hover:shadow-md"
            >
              Writing Skills
            </Link>
            <Link
              href="/practice"
              className="rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition hover:border-primary hover:shadow-md"
            >
              Practice Questions
            </Link>
            <Link
              href="/revision"
              className="rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition hover:border-primary hover:shadow-md"
            >
              Revision Hub
            </Link>
          </div>
        </div>

        {/* ── Disclaimer ────────────────────────────────────────── */}
        <ExamBoardDisclaimer variant="content" className="mt-12" />
      </div>
    </>
  )
}
