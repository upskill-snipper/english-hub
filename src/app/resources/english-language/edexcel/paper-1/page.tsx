import type { Metadata } from 'next'
import Link from 'next/link'
import { ExamBoardDisclaimer } from '@/components/ExamBoardDisclaimer'

import { STRINGS } from './content'
import { headers } from 'next/headers'
import { t } from '@/lib/i18n/t'
/* ─── Metadata ───────────────────────────────────────────────── */

export const metadata: Metadata = {
  openGraph: {
    title: 'Edexcel Paper 1: Fiction and writing',
    description:
      'Edexcel GCSE English Language Paper 1 (1EN0/01): 19th-century fiction reading, imaginative writing, level descriptors and example responses.',
    images: [
      {
        url: '/api/og?title=Edexcel+Paper+1%3A+Fiction+and+writing',
        width: 1200,
        height: 630,
        alt: 'Edexcel Paper 1: Fiction and writing',
      },
    ],
  },
  alternates: { canonical: 'https://theenglishhub.app/resources/english-language/edexcel/paper-1' },
  title: 'Edexcel Paper 1: Fiction and writing',
  description:
    'Edexcel GCSE English Language Paper 1 (1EN0/01): 19th-century fiction reading, imaginative writing, level descriptors and example responses.',
}

/* ─── Page component ─────────────────────────────────────────── */

export default async function Paper1Page() {
  const _hdrs = await headers()
  const _lang = _hdrs.get('x-lang') === 'ar' ? 'ar' : 'en'
  const tr = (en: string): string => {
    if (_lang !== 'ar') return en
    for (const v of Object.values(STRINGS)) if (v.en === en) return v.ar || en
    return en
  }

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="border-b bg-gradient-to-b from-primary/[0.06] to-transparent px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <Link
            href="/resources/english-language/edexcel"
            className="mb-4 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
            {await t('study.lang.edexcel.back')}
          </Link>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Paper 1: Fiction &amp; Imaginative Writing
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            1 hour 45 minutes &bull; 64 marks &bull; 40% of your GCSE
          </p>
        </div>
      </section>

      {/* ── Paper overview ────────────────────────────────────────── */}
      <section className="px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">{tr(`Paper Overview`)}</h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            Paper 1 tests your ability to read and analyse an extract from a 19th-century novel or
            story, then produce your own piece of imaginative writing. The paper is split into two
            sections, and the front of the paper advises about
            <strong> 1 hour on Section A</strong> (reading) and{' '}
            <strong>45 minutes on Section B</strong> (writing).
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-border bg-card p-6 shadow-md">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white font-bold text-sm">
                A
              </div>
              <h3 className="mt-3 text-lg font-bold text-foreground">{tr(`Section A: Reading`)}</h3>
              <p className="mt-1 text-sm text-muted-foreground">24 marks &bull; ~1 hour</p>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  One unseen 19th-century fiction extract (about 650 words)
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Four compulsory questions testing Reading and retrieval (AO1), Language and
                  structure analysis (AO2), and Critical evaluation (AO4)
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Typical authors: Dickens, Hardy, Shelley, Stevenson, Bront&euml;, Conan Doyle
                </li>
              </ul>
            </div>
            <div className="rounded-xl border border-border bg-card p-6 shadow-md">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-white font-bold text-sm">
                B
              </div>
              <h3 className="mt-3 text-lg font-bold text-foreground">
                {tr(`Section B: Imaginative Writing`)}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">40 marks &bull; ~45 minutes</p>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Choice of two tasks, Question 5 or Question 6 (pick one)
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Both linked by theme to the reading extract; one comes with two pictures
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Assessed on Content and organisation (AO5, 24 marks) and Technical accuracy (AO6,
                  16 marks)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section A: Reading questions breakdown ────────────────── */}
      <section className="bg-muted px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            {tr(`Section A: Reading - Question Breakdown`)}
          </h2>
          <p className="mt-3 text-muted-foreground">
            Each question targets a different skill. Here is the exact structure you will see in the
            exam.
          </p>

          <div className="mt-8 space-y-6">
            {/* Q1 */}
            <div className="rounded-xl border border-border bg-card p-6 shadow-md">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                  1
                </span>
                <h3 className="text-lg font-bold text-foreground">
                  {tr(`Short Retrieval (1 mark)`)}
                </h3>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                <strong>{tr(`Reading and retrieval (AO1)`)}</strong> - A single-mark question asking
                you to retrieve explicit information from a specific part of the text.
              </p>
              <div className="mt-3 rounded-lg bg-muted p-4">
                <p className="text-sm font-medium text-muted-foreground">
                  {tr(`Example question:`)}
                </p>
                <p className="mt-1 text-sm italic text-foreground">
                  &ldquo;From lines 1-5, identify the phrase that tells us the weather was
                  unpleasant.&rdquo;
                </p>
              </div>
              <div className="mt-3 rounded-lg bg-primary/10 p-4">
                <p className="text-sm font-medium text-primary">Top tip:</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Copy the exact phrase from the text. Do not waste time explaining - this is a
                  simple retrieval question. Spend about 2 minutes here.
                </p>
              </div>
            </div>

            {/* Q2 */}
            <div className="rounded-xl border border-border bg-card p-6 shadow-md">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                  2
                </span>
                <h3 className="text-lg font-bold text-foreground">
                  {tr(`Short Retrieval / Summary (2 marks)`)}
                </h3>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                <strong>{tr(`Reading and retrieval (AO1)`)}</strong> - Two retrieval points from a
                specified section of the text. You need to identify two things.
              </p>
              <div className="mt-3 rounded-lg bg-muted p-4">
                <p className="text-sm font-medium text-muted-foreground">
                  {tr(`Example question:`)}
                </p>
                <p className="mt-1 text-sm italic text-foreground">
                  &ldquo;From lines 6-14, give two reasons why the narrator felt
                  uncomfortable.&rdquo;
                </p>
              </div>
              <div className="mt-3 rounded-lg bg-primary/10 p-4">
                <p className="text-sm font-medium text-primary">Top tip:</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Write two clear, separate points. Quote briefly or paraphrase. Do not
                  over-explain. Spend about 4 minutes.
                </p>
              </div>
            </div>

            {/* Q3 */}
            <div className="rounded-xl border border-border bg-card p-6 shadow-md">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                  3
                </span>
                <h3 className="text-lg font-bold text-foreground">
                  {tr(`Language and Structure (6 marks)`)}
                </h3>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                <strong>{tr(`Language and structure analysis (AO2)`)}</strong> - Explain how the
                writer uses language and structure to show something the question names, such as
                what a character feels. The question names a short section of the extract, and
                recent papers print it with the question.
              </p>
              <div className="mt-3 rounded-lg bg-muted p-4">
                <p className="text-sm font-medium text-muted-foreground">
                  {tr(`Example question:`)}
                </p>
                <p className="mt-1 text-sm italic text-foreground">
                  &ldquo;In lines 15-25, how does the writer use language and structure to show the
                  narrator&rsquo;s unease?&rdquo;
                </p>
              </div>
              <div className="mt-3 rounded-lg bg-primary/10 p-4">
                <p className="text-sm font-medium text-primary">Top tip:</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Use the <strong>What-How-Why</strong> method: identify a technique (what), name it
                  using subject terminology (how), and explain the effect on the reader (why). Write
                  about structure as well as language, such as how the section opens, where the
                  focus shifts and how it ends: an answer on language alone stays in Level 1. Spend
                  about 12 minutes.
                </p>
              </div>
              <div className="mt-4 rounded-lg border border-primary/20 bg-primary/10 p-4">
                <p className="text-sm font-semibold text-primary">
                  {tr(`Marking guide - Level descriptors:`)}
                </p>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  <li>
                    <strong>{tr(`Level 1 (1-2 marks):`)}</strong> A few comments on the writing,
                    with suitable quotations, but brief explanations. An answer on language only, or
                    structure only, cannot go above this level.
                  </li>
                  <li>
                    <strong>{tr(`Level 2 (3-4 marks):`)}</strong> Explains how both the language and
                    the structure create effects, with well-matched quotations.
                  </li>
                  <li>
                    <strong>{tr(`Level 3 (5-6 marks):`)}</strong> Analyses closely how both the
                    language and the structure work on the reader, with carefully picked quotations
                    that sharpen every point.
                  </li>
                </ul>
              </div>
            </div>

            {/* Q4 */}
            <div className="rounded-xl border border-border bg-card p-6 shadow-md">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                  4
                </span>
                <h3 className="text-lg font-bold text-foreground">
                  {tr(`Critical Evaluation (15 marks)`)}
                </h3>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                <strong>{tr(`Critical evaluation (AO4)`)}</strong> - The question names an effect
                the writer is trying to create, such as tension or sympathy for a character, and
                asks how successfully it is achieved. Recent papers have asked about the whole
                extract, so check the question for any line numbers.
              </p>
              <div className="mt-3 rounded-lg bg-muted p-4">
                <p className="text-sm font-medium text-muted-foreground">
                  {tr(`Example question:`)}
                </p>
                <p className="mt-1 text-sm italic text-foreground">
                  &ldquo;In this extract, the writer attempts to create a sense of danger. Evaluate
                  how successfully this is achieved. Support your views with detailed reference to
                  the text.&rdquo;
                </p>
              </div>
              <div className="mt-3 rounded-lg bg-primary/10 p-4">
                <p className="text-sm font-medium text-primary">Top tip:</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  This is the highest-tariff reading question. Structure your response as a
                  mini-essay. Open with a clear verdict on how successfully the effect is created,
                  then test it with quotations from across the extract. Mention techniques only
                  where they support your judgement. Spend about 32 minutes. Aim for 3-4 paragraphs.
                </p>
              </div>
              <div className="mt-4 rounded-lg border border-primary/20 bg-primary/10 p-4">
                <p className="text-sm font-semibold text-primary">
                  {tr(`Marking guide - Level descriptors:`)}
                </p>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  <li>
                    <strong>{tr(`Level 1 (1-3 marks):`)}</strong> Mostly describes what happens.
                    Opinions are given without reasons, and there are few quotations.
                  </li>
                  <li>
                    <strong>{tr(`Level 2 (4-6 marks):`)}</strong> Comments on what happens and
                    offers simple opinions, backed by quotations that fit but are not explored.
                  </li>
                  <li>
                    <strong>Level 3 (7-9 marks):</strong> Explains how the writing creates the
                    effect and gives a reasoned view of how well it works, with suitable quotations.
                  </li>
                  <li>
                    <strong>{tr(`Level 4 (10-12 marks):`)}</strong> Analyses the extract and builds
                    a well-argued judgement, with detailed quotations backing up every point.
                  </li>
                  <li>
                    <strong>{tr(`Level 5 (13-15 marks):`)}</strong> Evaluates the extract as a whole
                    with a consistent, thoughtful judgement, and every reference is chosen to make
                    the argument convincing.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section B: Imaginative Writing ────────────────────────── */}
      <section className="px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            {tr(`Section B: Imaginative Writing (40 marks)`)}
          </h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            You will be given a <strong>choice of two tasks</strong>, Question 5 or Question 6, and
            you answer one. Pick the one that sparks your imagination. Both are linked by theme to
            the Section A extract. You might write a story, a description or a monologue, and one
            task comes with two pictures you can use for ideas, or ignore.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-primary/20 bg-primary/10 p-6">
              <h3 className="font-bold text-primary">
                {tr(`Content and Organisation (AO5, 24 marks)`)}
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Communicate clearly, effectively, and imaginatively
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Select and adapt tone, style, and register
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Use structural features including paragraphs, varied sentence forms, and discourse
                  markers
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Engage and sustain the reader&rsquo;s interest throughout
                </li>
              </ul>
            </div>
            <div className="rounded-xl border border-primary/20 bg-primary/10 p-6">
              <h3 className="font-bold text-primary">{tr(`Technical Accuracy (AO6, 16 marks)`)}</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Wide range of vocabulary chosen for effect
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Varied and controlled sentence structures (simple, compound, complex)
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Accurate spelling including ambitious vocabulary
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Full range of punctuation used accurately (commas, semicolons, colons, dashes,
                  ellipses)
                </li>
              </ul>
            </div>
          </div>

          {/* Marking guide levels */}
          <div className="mt-8 overflow-x-auto rounded-xl border border-border bg-card shadow-md">
            <table className="w-full text-start text-sm">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-4 py-3 font-semibold">Level</th>
                  <th className="px-4 py-3 font-semibold">
                    {tr(`Content and organisation (AO5) Marks`)}
                  </th>
                  <th className="px-4 py-3 font-semibold">
                    Content and organisation (AO5) Descriptor
                  </th>
                  <th className="px-4 py-3 font-semibold">
                    {tr(`Technical accuracy (AO6) Marks`)}
                  </th>
                  <th className="px-4 py-3 font-semibold">
                    {tr(`Technical accuracy (AO6) Descriptor`)}
                  </th>
                </tr>
              </thead>
              {/* Five levels for each objective, as in Pearson's 1EN0/01 mark scheme and
                  src/data/mark-scheme-guides/edexcel-lang-paper1.ts. Until 31 October 2026 this
                  table had four levels, AO5 1-6, 7-12, 13-18, 19-24 and AO6 1-4, 5-8, 9-12, 13-16,
                  which is no grid the board has published. */}
              <tbody className="divide-y divide-border">
                <tr className="hover:bg-muted">
                  <td className="px-4 py-3 font-bold text-foreground">1</td>
                  <td className="px-4 py-3 text-muted-foreground">1-4</td>
                  <td className="px-4 py-3 text-muted-foreground">
                    {tr(
                      `Some ideas come across, but little sense of who the piece is for or what it is trying to do; loosely organised.`,
                    )}
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">1-4</td>
                  <td className="px-4 py-3 text-muted-foreground">
                    {tr(
                      `Simple, everyday words with frequent spelling mistakes; shaky punctuation; short or repetitive sentences.`,
                    )}
                  </td>
                </tr>
                <tr className="hover:bg-muted">
                  <td className="px-4 py-3 font-bold text-foreground">2</td>
                  <td className="px-4 py-3 text-muted-foreground">5-9</td>
                  <td className="px-4 py-3 text-muted-foreground">
                    {tr(
                      `Knows what the piece is for and who will read it, in a simple, steady tone; ideas follow in order, in paragraphs, with some linking.`,
                    )}
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">5-7</td>
                  <td className="px-4 py-3 text-muted-foreground">
                    {tr(
                      `Everyday words spelt correctly; punctuation mostly right; some varied sentences, including ones joined with words such as because or although.`,
                    )}
                  </td>
                </tr>
                <tr className="hover:bg-muted">
                  <td className="px-4 py-3 font-bold text-foreground">3</td>
                  <td className="px-4 py-3 text-muted-foreground">10-14</td>
                  <td className="px-4 py-3 text-muted-foreground">
                    {tr(
                      `Ideas and techniques picked to suit the task; the tone fits; each idea builds on the last, in paragraphs that are easy to follow.`,
                    )}
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">8-10</td>
                  <td className="px-4 py-3 text-muted-foreground">
                    {tr(
                      `A good choice of words; tricky spellings mostly right; a mix of punctuation used correctly; sentences shaped to help the purpose.`,
                    )}
                  </td>
                </tr>
                <tr className="hover:bg-muted">
                  <td className="px-4 py-3 font-bold text-foreground">4</td>
                  <td className="px-4 py-3 text-muted-foreground">15-19</td>
                  <td className="px-4 py-3 text-muted-foreground">
                    {tr(
                      `Shaped deliberately to affect the reader; tone and style well judged; structure under control from start to finish.`,
                    )}
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">11-13</td>
                  <td className="px-4 py-3 text-muted-foreground">
                    {tr(
                      `Words chosen with care from a wide range; only the odd spelling slip; punctuation placed to make meaning clear; sentences built with a purpose in mind.`,
                    )}
                  </td>
                </tr>
                <tr className="hover:bg-muted">
                  <td className="px-4 py-3 font-bold text-foreground">5</td>
                  <td className="px-4 py-3 text-muted-foreground">20-24</td>
                  <td className="px-4 py-3 text-muted-foreground">
                    {tr(
                      `Steers the reader’s response in subtle ways; a confident voice throughout; complex ideas arranged so the whole piece holds together.`,
                    )}
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">14-16</td>
                  <td className="px-4 py-3 text-muted-foreground">
                    {tr(
                      `Ambitious vocabulary used with purpose; errors so rare they never get in the way; precise punctuation and a full range of sentence types, each chosen for its effect.`,
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Example responses ─────────────────────────────────────── */}
      <section className="bg-muted px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            {tr(`Example Responses`)}
          </h2>

          {/* Q3 example */}
          <div className="mt-8 rounded-xl border border-border bg-card p-6 shadow-md">
            <h3 className="text-lg font-bold text-foreground">
              {tr(`Question 3: Language and Structure (Level 3, 6 marks)`)}
            </h3>
            <div className="mt-3 rounded-lg bg-muted p-4">
              <p className="text-sm font-medium text-muted-foreground">Question:</p>
              <p className="mt-1 text-sm italic text-foreground">
                &ldquo;In lines 10-20, how does the writer use language and structure to create a
                sense of fear?&rdquo;
              </p>
              <p className="mt-2 text-sm font-medium text-muted-foreground">
                {tr(`Extract context (imagined):`)}
              </p>
              <p className="mt-1 text-sm italic text-muted-foreground">
                &ldquo;The darkness swallowed him whole, pressing against his skin like a living
                creature. Each footstep echoed through the hollow corridor, returning to him
                distorted and strange, as though the house itself were mocking his courage.&rdquo;
              </p>
            </div>
            <div className="mt-4 rounded-lg border-s-4 border-accent bg-primary/10 p-4">
              <p className="text-sm font-semibold text-primary">{tr(`Example response:`)}</p>
              <div className="mt-2 space-y-3 text-sm text-foreground leading-relaxed">
                <p>
                  The writer uses personification in &ldquo;the darkness swallowed him whole&rdquo;
                  to present the darkness as a predatory force, suggesting the character has been
                  consumed and is powerless. The verb &ldquo;swallowed&rdquo; has connotations of
                  being devoured, implying the character is vulnerable prey, which creates fear in
                  the reader as the darkness is transformed from a passive absence of light into an
                  active, threatening entity.
                </p>
                <p>
                  Furthermore, the simile &ldquo;pressing against his skin like a living
                  creature&rdquo; reinforces this sense of the supernatural by giving the darkness a
                  physical, tactile quality. The word &ldquo;pressing&rdquo; suggests claustrophobia
                  and entrapment, making the reader feel the character&rsquo;s growing panic.
                </p>
                <p>
                  The writer also personifies the house itself, saying it was &ldquo;mocking his
                  courage,&rdquo; which subverts the reader&rsquo;s expectation that a house should
                  be a place of safety. This creates an unsettling sense that the environment is
                  hostile and sentient, deepening the atmosphere of fear.
                </p>
                <p>
                  Structurally, the section moves from the darkness pressing against him to the echo
                  of his own footsteps, and ends on the house itself, so the threat seems to
                  surround him more completely as the section goes on. Ending on &ldquo;mocking his
                  courage&rdquo; leaves the reader with his fear rather than with any escape.
                </p>
              </div>
            </div>
            <div className="mt-3 rounded-lg bg-primary/10 p-4">
              <p className="text-sm font-medium text-primary">Marker commentary:</p>
              <p className="mt-1 text-sm text-muted-foreground">
                This response reaches Level 3 because it analyses both language and structure: it
                uses precise subject terminology (personification, simile, connotations), embeds
                quotations fluently, and explains how the order of the section, not only its word
                choices, works on the reader. Without the paragraph on structure it could not go
                above Level 1.
              </p>
            </div>
          </div>

          {/* Q4 example */}
          <div className="mt-8 rounded-xl border border-border bg-card p-6 shadow-md">
            <h3 className="text-lg font-bold text-foreground">
              {tr(`Question 4 - Critical Evaluation (Level 4-5 / 13-15 marks)`)}
            </h3>
            <div className="mt-3 rounded-lg bg-muted p-4">
              <p className="text-sm font-medium text-muted-foreground">Question:</p>
              <p className="mt-1 text-sm italic text-foreground">
                &ldquo;In this extract, the writer attempts to create a character the reader
                admires. Evaluate how successfully this is achieved.&rdquo;
              </p>
            </div>
            <div className="mt-4 rounded-lg border-s-4 border-accent bg-primary/10 p-4">
              <p className="text-sm font-semibold text-primary">
                {tr(`Example opening paragraph:`)}
              </p>
              <div className="mt-2 text-sm text-foreground leading-relaxed">
                <p>
                  The writer is largely successful in creating a character the reader admires,
                  establishing the protagonist as admirable from the outset through her defiance of
                  social conventions. In the opening lines, the narrator states she &ldquo;refused
                  to lower her gaze,&rdquo; which immediately signals resilience and self-assurance.
                  The verb &ldquo;refused&rdquo; is decisive and active, placing her in control of
                  the situation. For a 19th-century female character, this refusal to submit to
                  societal pressure would have been particularly striking to a contemporary reader,
                  and it positions her as a figure worthy of admiration. However, the writer also
                  introduces complexity by hinting at the personal cost of this defiance through the
                  adverb &ldquo;wearily,&rdquo; suggesting that maintaining her principles is
                  exhausting, which makes her more human and therefore more deserving of the
                  reader&rsquo;s respect.
                </p>
              </div>
            </div>
            <div className="mt-3 rounded-lg bg-primary/10 p-4">
              <p className="text-sm font-medium text-primary">{tr(`Why this works:`)}</p>
              <ul className="mt-1 space-y-1 text-sm text-muted-foreground">
                <li>
                  &bull; Opens with a clear verdict on how successful the writer is (&ldquo;largely
                  successful&rdquo;)
                </li>
                <li>&bull; Embeds quotations and uses specific word choices as evidence</li>
                <li>
                  &bull; Uses the century the story was written in to explain why her defiance
                  stands out, in support of the judgement
                </li>
                <li>&bull; Offers a balanced view (&ldquo;However...&rdquo;)</li>
                <li>&bull; Discusses effect on the reader throughout</li>
              </ul>
            </div>
          </div>

          {/* Section B example */}
          <div className="mt-8 rounded-xl border border-border bg-card p-6 shadow-md">
            <h3 className="text-lg font-bold text-foreground">
              {tr(`Section B - Imaginative Writing (Level 4 opening)`)}
            </h3>
            <div className="mt-3 rounded-lg bg-muted p-4">
              <p className="text-sm font-medium text-muted-foreground">Task:</p>
              <p className="mt-1 text-sm italic text-foreground">
                &ldquo;Write a description suggested by one of the two pictures: a lone figure
                standing at the edge of a cliff at sunset.&rdquo;
              </p>
            </div>
            <div className="mt-4 rounded-lg border-s-4 border-accent bg-primary/10 p-4">
              <p className="text-sm font-semibold text-primary">{tr(`Example opening:`)}</p>
              <div className="mt-2 text-sm text-foreground leading-relaxed">
                <p>
                  The world burned. Not with flames, but with colour - great swathes of amber and
                  crimson bleeding across the horizon as though the sky had been wounded. She stood
                  at the precipice, her silhouette carved against the dying light, and felt the wind
                  tear at her coat like desperate hands trying to pull her back.
                </p>
                <p className="mt-3">
                  Below, the sea churned. Restless. Relentless. It threw itself against the cliff
                  face with the patience of something that knew, eventually, it would win. The spray
                  reached her like cold whispers, settling on her cheeks and mingling with salt of a
                  different kind.
                </p>
                <p className="mt-3">
                  She did not move. There was something defiant in her stillness - a refusal to be
                  rushed by the encroaching darkness, by the gulls that screamed overhead, by the
                  distant hum of a world that had already moved on without her. Here, at the edge of
                  everything, time had agreed to wait.
                </p>
              </div>
            </div>
            <div className="mt-3 rounded-lg bg-primary/10 p-4">
              <p className="text-sm font-medium text-primary">Techniques demonstrated:</p>
              <ul className="mt-1 space-y-1 text-sm text-muted-foreground">
                <li>
                  &bull; <strong>{tr(`One-line paragraph opener`)}</strong> for impact
                </li>
                <li>
                  &bull; <strong>{tr(`Metaphor & personification:`)}</strong> &ldquo;the sky had
                  been wounded,&rdquo; &ldquo;cold whispers&rdquo;
                </li>
                <li>
                  &bull; <strong>{tr(`Minor sentences:`)}</strong> &ldquo;Restless.
                  Relentless.&rdquo; for rhythm and emphasis
                </li>
                <li>
                  &bull; <strong>{tr(`Sensory detail:`)}</strong> touch (spray, wind), sight
                  (colour), sound (gulls, hum)
                </li>
                <li>
                  &bull; <strong>{tr(`Varied sentence structure:`)}</strong> short declarative,
                  complex, and compound sentences
                </li>
                <li>
                  &bull; <strong>{tr(`Ambitious vocabulary:`)}</strong> &ldquo;precipice,&rdquo;
                  &ldquo;encroaching,&rdquo; &ldquo;silhouette&rdquo;
                </li>
                <li>
                  &bull; <strong>{tr(`Semicolons and dashes`)}</strong> used accurately for effect
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Exam strategy ─────────────────────────────────────────── */}
      <section className="px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            {tr(`Exam Strategy & Timing`)}
          </h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            The front of the paper advises about 1 hour on Section A and about 45 minutes on Section
            B. The times below are our suggestion, worked out from the marks, after about 10 minutes
            reading the extract.
          </p>
          <div className="mt-6 overflow-x-auto rounded-xl border border-border bg-card shadow-md">
            <table className="w-full text-start text-sm">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-4 py-3 font-semibold">Question</th>
                  <th className="px-4 py-3 font-semibold">Marks</th>
                  <th className="px-4 py-3 font-semibold">{tr(`Suggested Time`)}</th>
                  <th className="px-4 py-3 font-semibold">{tr(`Key Advice`)}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr className="hover:bg-muted">
                  <td className="px-4 py-3 font-medium text-foreground">Q1</td>
                  <td className="px-4 py-3 text-muted-foreground">1</td>
                  <td className="px-4 py-3 text-muted-foreground">2 min</td>
                  <td className="px-4 py-3 text-muted-foreground">
                    Copy exact phrase. Do not explain.
                  </td>
                </tr>
                <tr className="hover:bg-muted">
                  <td className="px-4 py-3 font-medium text-foreground">Q2</td>
                  <td className="px-4 py-3 text-muted-foreground">2</td>
                  <td className="px-4 py-3 text-muted-foreground">4 min</td>
                  <td className="px-4 py-3 text-muted-foreground">
                    {tr(`Two clear, separate points. Brief quotation or paraphrase.`)}
                  </td>
                </tr>
                <tr className="hover:bg-muted">
                  <td className="px-4 py-3 font-medium text-foreground">Q3</td>
                  <td className="px-4 py-3 text-muted-foreground">6</td>
                  <td className="px-4 py-3 text-muted-foreground">12 min</td>
                  <td className="px-4 py-3 text-muted-foreground">
                    Language and structure, each quotation linked to its effect.
                  </td>
                </tr>
                <tr className="hover:bg-muted">
                  <td className="px-4 py-3 font-medium text-foreground">Q4</td>
                  <td className="px-4 py-3 text-muted-foreground">15</td>
                  <td className="px-4 py-3 text-muted-foreground">32 min</td>
                  <td className="px-4 py-3 text-muted-foreground">
                    {tr(
                      `Mini-essay. A clear verdict on how successfully the effect is created, with evidence from the whole extract.`,
                    )}
                  </td>
                </tr>
                <tr className="hover:bg-muted">
                  <td className="px-4 py-3 font-medium text-foreground">
                    {tr(`Q5 or Q6 (Writing)`)}
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">40</td>
                  <td className="px-4 py-3 text-muted-foreground">45 min</td>
                  <td className="px-4 py-3 text-muted-foreground">
                    5 min planning, 35 min writing, 5 min proofreading.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-success-200 bg-success-50 p-5">
              <h3 className="font-bold text-success-700">Do:</h3>
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                <li>&bull; Read the extract twice before answering</li>
                <li>&bull; Highlight or underline key words in each question</li>
                <li>&bull; Only write about the specified line references</li>
                <li>
                  &bull; Use short, embedded quotations (&ldquo;zoom in&rdquo; on individual words)
                </li>
                <li>&bull; Plan your creative writing before starting</li>
                <li>&bull; Leave 5 minutes at the end to proofread</li>
              </ul>
            </div>
            <div className="rounded-xl border border-warn-200 bg-warn-50 p-5">
              <h3 className="font-bold text-warn-700">Don&rsquo;t:</h3>
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                <li>&bull; Feature-spot without analysing effect</li>
                <li>&bull; Retell or paraphrase the story</li>
                <li>&bull; Write outside the given line references</li>
                <li>&bull; Use overly long quotations</li>
                <li>&bull; Try to write a full novel - quality over quantity</li>
                <li>&bull; Forget punctuation variety in your creative writing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Continue studying */}
      <section className="px-4 pb-12">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-xl border border-primary/20 bg-primary/5 p-6 sm:p-8">
            <h2 className="text-xl font-bold text-foreground">{tr(`Continue studying`)}</h2>
            <p className="mt-2 text-muted-foreground">
              Build your reading analysis and imaginative writing skills further.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="/resources/english-language/edexcel/paper-2"
                className="rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition hover:border-primary hover:shadow-md"
              >
                Paper 2: Non-Fiction &amp; Writing for Real Purposes
              </Link>
              <Link
                href="/resources/english-language/edexcel/techniques"
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
        </div>
      </section>

      <ExamBoardDisclaimer />
    </>
  )
}
