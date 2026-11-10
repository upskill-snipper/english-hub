import type { Metadata } from 'next'
import Link from 'next/link'
import { ExamBoardDisclaimer } from '@/components/ExamBoardDisclaimer'

import { STRINGS } from './content'
import { headers } from 'next/headers'
import { t } from '@/lib/i18n/t'
/* ─── Metadata ───────────────────────────────────────────────── */

export const metadata: Metadata = {
  openGraph: {
    title: 'Edexcel Paper 2: Non-fiction writing',
    description:
      'Edexcel GCSE English Language Paper 2 (1EN0/02): two linked non-fiction texts, synthesis and comparison, writing for real purposes.',
    images: [
      {
        url: '/api/og?title=Edexcel+Paper+2%3A+Non-fiction+writing',
        width: 1200,
        height: 630,
        alt: 'Edexcel Paper 2: Non-fiction writing',
      },
    ],
  },
  alternates: { canonical: 'https://theenglishhub.app/resources/english-language/edexcel/paper-2' },
  title: 'Edexcel Paper 2: Non-fiction writing',
  description:
    'Edexcel GCSE English Language Paper 2 (1EN0/02): two linked non-fiction texts, synthesis and comparison, writing for real purposes.',
}

/* ─── Page component ─────────────────────────────────────────── */

export default async function Paper2Page() {
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
            Paper 2: Non-Fiction &amp; Writing for Real Purposes
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            2 hours 5 minutes &bull; 96 marks &bull; 60% of your GCSE
          </p>
        </div>
      </section>

      {/* ── Paper overview ────────────────────────────────────────── */}
      <section className="px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">{tr(`Paper Overview`)}</h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            Paper 2 is worth <strong>60% of your GCSE</strong>, the single most important paper. It
            tests your ability to read and compare two unseen non-fiction texts from the 20th and
            21st centuries, linked by a theme, and then write one piece of non-fiction for a real
            purpose. The front of the paper advises about{' '}
            <strong>1 hour 20 minutes on Section A</strong> (reading) and about{' '}
            <strong>45 minutes on Section B</strong> (writing).
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-border bg-card p-6 shadow-md">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-white font-bold text-sm">
                A
              </div>
              <h3 className="mt-3 text-lg font-bold text-foreground">{tr(`Section A: Reading`)}</h3>
              <p className="mt-1 text-sm text-muted-foreground">56 marks &bull; ~1 hr 20 min</p>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Two unseen non-fiction texts, linked by a theme
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Texts from the 20th and 21st centuries, such as memoir, journalism or travel
                  writing
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Questions 1 to 3 on Text 1, Questions 4 to 6 on Text 2, Question 7 on both
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Seven compulsory questions, the last in two parts, testing Reading and retrieval
                  (AO1), Language and structure analysis (AO2), Comparing writers (AO3), and
                  Critical evaluation (AO4)
                </li>
              </ul>
            </div>
            <div className="rounded-xl border border-border bg-card p-6 shadow-md">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white font-bold text-sm">
                B
              </div>
              <h3 className="mt-3 text-lg font-bold text-foreground">
                {tr(`Section B: Writing for Real Purposes`)}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">40 marks &bull; ~45 min</p>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  One piece of writing: Question 8 or Question 9 (pick one)
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Forms such as an article, letter, review, speech or section of a guide
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Topic linked to the reading texts&rsquo; theme
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Assessed on Content and organisation (AO5, 24 marks) and Technical accuracy (AO6,
                  16 marks)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section A: Reading questions ──────────────────────────── */}
      <section className="bg-muted px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            {tr(`Section A: Reading - Question Breakdown`)}
          </h2>

          <div className="mt-8 space-y-6">
            {/* Q1 */}
            <div className="rounded-xl border border-border bg-card p-6 shadow-md">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">
                  1
                </span>
                <h3 className="text-lg font-bold text-foreground">
                  {tr(`Short Retrieval - Text 1 (2 marks)`)}
                </h3>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                <strong>{tr(`Reading and retrieval (AO1)`)}</strong> - From the lines named in the
                question, give two pieces of information from Text 1.
              </p>
              <div className="mt-3 rounded-lg bg-muted p-4">
                <p className="text-sm font-medium text-muted-foreground">
                  {tr(`Example question:`)}
                </p>
                <p className="mt-1 text-sm italic text-foreground">
                  &ldquo;From lines 1-8, give two reasons the writer gives for leaving.&rdquo;
                </p>
              </div>
              <div className="mt-3 rounded-lg bg-primary/10 p-4">
                <p className="text-sm font-medium text-primary">Top tip:</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  One mark per acceptable point, so give two distinct points and stop. Spend about
                  two minutes.
                </p>
              </div>
            </div>

            {/* Q2 */}
            <div className="rounded-xl border border-border bg-card p-6 shadow-md">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">
                  2
                </span>
                <h3 className="text-lg font-bold text-foreground">
                  {tr(`Short Retrieval - Text 1 (2 marks)`)}
                </h3>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                <strong>{tr(`Reading and retrieval (AO1)`)}</strong> - From a further set of named
                lines in Text 1, give two more pieces of information.
              </p>
              <div className="mt-3 rounded-lg bg-muted p-4">
                <p className="text-sm font-medium text-muted-foreground">
                  {tr(`Example question:`)}
                </p>
                <p className="mt-1 text-sm italic text-foreground">
                  &ldquo;From lines 9-15, give two things the writer says about the journey.&rdquo;
                </p>
              </div>
              <div className="mt-3 rounded-lg bg-primary/10 p-4">
                <p className="text-sm font-medium text-primary">Top tip:</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Same technique as Q1. Points must be distinct from one another, not the same idea
                  twice.
                </p>
              </div>
            </div>

            {/* Q3 */}
            <div className="rounded-xl border border-border bg-card p-6 shadow-md">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">
                  3
                </span>
                <h3 className="text-lg font-bold text-foreground">
                  {tr(`Language and Structure - Text 1 (15 marks)`)}
                </h3>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                <strong>{tr(`Language and structure analysis (AO2)`)}</strong> - Analyse how the
                writer of Text 1 uses language and structure to achieve effects. This is one of the
                three highest-tariff reading questions on the paper.
              </p>
              <div className="mt-3 rounded-lg bg-muted p-4">
                <p className="text-sm font-medium text-muted-foreground">
                  {tr(`Example question:`)}
                </p>
                <p className="mt-1 text-sm italic text-foreground">
                  &ldquo;Analyse how the writer uses language and structure to interest and engage
                  the reader.&rdquo;
                </p>
              </div>
              <div className="mt-3 rounded-lg bg-primary/10 p-4">
                <p className="text-sm font-medium text-primary">Top tip:</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Marked on five levels of three marks. Analyse the effect rather than naming the
                  device, and cover structure as well as language: an answer on one of them alone
                  cannot go above Level 2. Spend about 18 minutes.
                </p>
              </div>
            </div>

            {/* Q4 */}
            <div className="rounded-xl border border-border bg-card p-6 shadow-md">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">
                  4
                </span>
                <h3 className="text-lg font-bold text-foreground">
                  {tr(`Short Retrieval - Text 2 (1 mark)`)}
                </h3>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                <strong>{tr(`Reading and retrieval (AO1)`)}</strong> - From the lines named in the
                question, give one piece of information from Text 2.
              </p>
              <div className="mt-3 rounded-lg bg-muted p-4">
                <p className="text-sm font-medium text-muted-foreground">
                  {tr(`Example question:`)}
                </p>
                <p className="mt-1 text-sm italic text-foreground">
                  &ldquo;From lines 1-6, give one thing the writer finds surprising.&rdquo;
                </p>
              </div>
              <div className="mt-3 rounded-lg bg-primary/10 p-4">
                <p className="text-sm font-medium text-primary">Top tip:</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  One mark, one point from the named lines. Answer in a few words and move on.
                </p>
              </div>
            </div>

            {/* Q5 */}
            <div className="rounded-xl border border-border bg-card p-6 shadow-md">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">
                  5
                </span>
                <h3 className="text-lg font-bold text-foreground">
                  {tr(`Short Retrieval - Text 2 (1 mark)`)}
                </h3>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                <strong>{tr(`Reading and retrieval (AO1)`)}</strong> - From a further set of named
                lines in Text 2, give one more piece of information.
              </p>
              <div className="mt-3 rounded-lg bg-muted p-4">
                <p className="text-sm font-medium text-muted-foreground">
                  {tr(`Example question:`)}
                </p>
                <p className="mt-1 text-sm italic text-foreground">
                  &ldquo;From lines 7-12, give one reason the writer gives for staying.&rdquo;
                </p>
              </div>
              <div className="mt-3 rounded-lg bg-primary/10 p-4">
                <p className="text-sm font-medium text-primary">Top tip:</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  As Q4. Together Q1, Q2, Q4 and Q5 are worth six marks of ninety-six, so they
                  should be quick.
                </p>
              </div>
            </div>

            {/* Q6 */}
            <div className="rounded-xl border border-border bg-card p-6 shadow-md">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">
                  6
                </span>
                <h3 className="text-lg font-bold text-foreground">
                  {tr(`Critical Evaluation - Text 2 (15 marks)`)}
                </h3>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                <strong>{tr(`Critical evaluation (AO4)`)}</strong> - Evaluate how successfully the
                writer of Text 2 achieves a stated effect, supporting your views with detailed
                reference to the text.
              </p>
              <div className="mt-3 rounded-lg bg-muted p-4">
                <p className="text-sm font-medium text-muted-foreground">
                  {tr(`Example question:`)}
                </p>
                <p className="mt-1 text-sm italic text-foreground">
                  &ldquo;Evaluate how successfully the writer conveys the difficulty of the
                  decision.&rdquo;
                </p>
              </div>
              <div className="mt-3 rounded-lg bg-primary/10 p-4">
                <p className="text-sm font-medium text-primary">Top tip:</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Marked on five levels of three marks. Open with a clear verdict on how successful
                  the writer is, then test it against Text 2 with detailed references. Mention
                  techniques only where they support your judgement. Spend about 18 minutes.
                </p>
              </div>
            </div>

            {/* Q7(a) */}
            <div className="rounded-xl border border-border bg-card p-6 shadow-md">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">
                  7(a)
                </span>
                <h3 className="text-lg font-bold text-foreground">
                  {tr(`Synthesis across both texts (6 marks)`)}
                </h3>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                <strong>{tr(`Reading and retrieval (AO1)`)}</strong> - Using both texts, bring
                together evidence of the similarities the question names.
              </p>
              <div className="mt-3 rounded-lg bg-muted p-4">
                <p className="text-sm font-medium text-muted-foreground">
                  {tr(`Example question:`)}
                </p>
                <p className="mt-1 text-sm italic text-foreground">
                  &ldquo;Using both texts, explain the similarities between the two journeys.&rdquo;
                </p>
              </div>
              <div className="mt-3 rounded-lg bg-primary/10 p-4">
                <p className="text-sm font-medium text-primary">Top tip:</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Use both texts in every point: an answer on one text alone earns no marks. This is
                  finding and combining evidence, not analysis, so do not write about method here.
                  Spend about 8 minutes.
                </p>
              </div>
            </div>

            {/* Q7(b) */}
            <div className="rounded-xl border border-border bg-card p-6 shadow-md">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">
                  7(b)
                </span>
                <h3 className="text-lg font-bold text-foreground">
                  {tr(`Comparison of ideas and perspectives (14 marks)`)}
                </h3>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                <strong>{tr(`Compare writers’ ideas and perspectives (AO3)`)}</strong> - Compare how
                the writers of Text 1 and Text 2 present their ideas and perspectives, and how these
                are conveyed.
              </p>
              <div className="mt-3 rounded-lg bg-muted p-4">
                <p className="text-sm font-medium text-muted-foreground">
                  {tr(`Example question:`)}
                </p>
                <p className="mt-1 text-sm italic text-foreground">
                  &ldquo;Compare how the writers present their attitudes to risk.&rdquo;
                </p>
              </div>
              <div className="mt-3 rounded-lg bg-primary/10 p-4">
                <p className="text-sm font-medium text-primary">Top tip:</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Both texts must be addressed: a response on one text alone is capped. Use
                  comparative connectives, support every point from both texts, and analyse how each
                  writer&rsquo;s methods shape a different perspective. Spend about 18 minutes.
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-lg border border-border bg-card p-5">
              <p className="text-sm text-muted-foreground">
                {tr(
                  `Section A is worth 56 of the 96 marks on this paper. The level descriptors used by the marking engine follow Pearson’s published band structure, but for the exact wording of each level always work from the mark scheme for your own series.`,
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section B: Writing for Real Purposes ──────────────────────── */}
      <section className="px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            {tr(`Section B: Writing for Real Purposes (40 marks)`)}
          </h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            You write <strong>one piece</strong>, choosing Question 8 or Question 9. The task will
            specify a form (for example an article, a letter, a review, a speech or a section of a
            guide), a purpose (such as to inform, advise or persuade), and an audience, and it is
            linked by theme to the reading texts. You <strong>must</strong> follow the conventions
            of the specified form.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                form: 'Article',
                conventions:
                  'Headline, optional subheading, byline, paragraphs, engaging opening, quotations (optional)',
              },
              {
                form: 'Letter',
                conventions:
                  'Addresses, date, Dear..., formal/informal register, sign-off (Yours sincerely/faithfully)',
              },
              {
                form: 'Speech',
                conventions:
                  'Direct address ("Ladies and gentlemen"), rhetorical devices, repetition, call to action',
              },
              {
                form: 'Review',
                conventions:
                  'Headline, star rating (optional), balanced opinion, personal voice, recommendation',
              },
              {
                form: 'Guide',
                conventions:
                  'Clear title, short sections under subheadings, direct address, practical advice in a sensible order',
              },
            ].map((item) => (
              <div
                key={item.form}
                className="rounded-xl border border-border bg-card p-5 shadow-md"
              >
                <h3 className="font-bold text-primary">{item.form}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.conventions}</p>
              </div>
            ))}
          </div>

          {/* Writing marking guide */}
          <div className="mt-8 overflow-x-auto rounded-xl border border-border bg-card shadow-md">
            <table className="w-full text-start text-sm">
              <thead className="bg-accent text-white">
                <tr>
                  <th className="px-4 py-3 font-semibold">Level</th>
                  <th className="px-4 py-3 font-semibold">
                    {tr(`Content and organisation (AO5, 24)`)}
                  </th>
                  <th className="px-4 py-3 font-semibold">Descriptor</th>
                  <th className="px-4 py-3 font-semibold">{tr(`Technical accuracy (AO6, 16)`)}</th>
                  <th className="px-4 py-3 font-semibold">Descriptor</th>
                </tr>
              </thead>
              {/* Five levels for each objective, as in Pearson's 1EN0/02 mark scheme and
                  src/data/mark-scheme-guides/edexcel-lang-paper2.ts. Until 31 October 2026 this
                  table had four levels, AO5 1-6, 7-12, 13-18, 19-24 and AO6 1-4, 5-8, 9-12, 13-16,
                  which is no grid the board has published. */}
              <tbody className="divide-y divide-border">
                <tr className="hover:bg-muted">
                  <td className="px-4 py-3 font-bold text-foreground">1</td>
                  <td className="px-4 py-3 text-muted-foreground">1-4</td>
                  <td className="px-4 py-3 text-muted-foreground">
                    {tr(
                      `Some ideas come across, but little sense of audience or purpose; loosely organised.`,
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
                      `Knows who the writing is for and why, in a simple, steady tone; ideas set out in order, in paragraphs.`,
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
                      `Ideas and techniques picked to suit the audience and purpose; the tone fits; each point builds on the last, in clear paragraphs.`,
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
                      `Shaped deliberately to affect the reader; tone and register well judged; structure under control across the whole piece.`,
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

          {/* Q7(b) Comparison example */}
          <div className="mt-8 rounded-xl border border-border bg-card p-6 shadow-md">
            <h3 className="text-lg font-bold text-foreground">
              {tr(`Question 7(b) - Comparison (a high-level response)`)}
            </h3>
            <div className="mt-3 rounded-lg bg-muted p-4">
              <p className="text-sm font-medium text-muted-foreground">Question:</p>
              <p className="mt-1 text-sm italic text-foreground">
                &ldquo;Compare how the writers of Text 1 and Text 2 present their ideas about the
                importance of travel.&rdquo;
              </p>
            </div>
            <div className="mt-4 rounded-lg border-s-4 border-accent bg-primary/10 p-4">
              <p className="text-sm font-semibold text-primary">{tr(`Example paragraph:`)}</p>
              <div className="mt-2 text-sm text-foreground leading-relaxed">
                <p>
                  Both writers share an enthusiasm for travel, yet their perspectives differ
                  significantly. The writer of Text 1, looking back on a journey made in the 1950s,
                  presents travel as a transformative, almost spiritual experience, describing the
                  Italian landscape as &ldquo;a revelation that stirred the very foundations of my
                  soul.&rdquo; The noun &ldquo;revelation&rdquo; carries religious connotations,
                  elevating travel beyond mere leisure into something profound and enlightening, and
                  the reverent, elevated tone suggests a writer who expects a journey to change the
                  traveller.
                </p>
                <p className="mt-3">
                  In contrast, the writer of Text 2 adopts a more pragmatic and self-deprecating
                  tone, admitting that &ldquo;most of my so-called adventures involved getting lost
                  and arguing over Google Maps.&rdquo; The colloquial phrase &ldquo;so-called
                  adventures&rdquo; undercuts that lofty ideal, using humour to present travel as
                  imperfect yet still valuable. Where Text 1&rsquo;s writer seeks transcendence,
                  Text 2&rsquo;s writer finds value in the mundane and the human connection. Both,
                  however, ultimately argue that travel expands one&rsquo;s understanding of the
                  world, even if they disagree on how.
                </p>
              </div>
            </div>
            <div className="mt-3 rounded-lg bg-primary/10 p-4">
              <p className="text-sm font-medium text-primary">{tr(`Why this works:`)}</p>
              <ul className="mt-1 space-y-1 text-sm text-muted-foreground">
                <li>
                  &bull; Directly compares both texts throughout (never just discusses one in
                  isolation)
                </li>
                <li>
                  &bull; Uses comparison connectives: &ldquo;In contrast,&rdquo; &ldquo;Where...
                  Text 2&rsquo;s writer...&rdquo;
                </li>
                <li>&bull; Embeds short quotations from both texts and analyses word choices</li>
                <li>
                  &bull; Compares how each writer&rsquo;s tone conveys their perspective, not only
                  what each one thinks
                </li>
                <li>&bull; Identifies both similarities and differences</li>
              </ul>
            </div>
          </div>

          {/* Writing for real purposes example */}
          <div className="mt-8 rounded-xl border border-border bg-card p-6 shadow-md">
            <h3 className="text-lg font-bold text-foreground">
              {tr(`Section B - Speech Writing (Level 4 opening)`)}
            </h3>
            <div className="mt-3 rounded-lg bg-muted p-4">
              <p className="text-sm font-medium text-muted-foreground">Task:</p>
              <p className="mt-1 text-sm italic text-foreground">
                &ldquo;Your headteacher is considering removing art and music from the curriculum.
                Write a speech to deliver at a school assembly arguing against this decision.&rdquo;
              </p>
            </div>
            <div className="mt-4 rounded-lg border-s-4 border-accent bg-primary/10 p-4">
              <p className="text-sm font-semibold text-primary">{tr(`Example opening:`)}</p>
              <div className="mt-2 text-sm text-foreground leading-relaxed">
                <p>
                  Good morning, everyone. I want you to imagine something for me. Imagine walking
                  through these corridors next September and hearing nothing. No choir rehearsals
                  drifting through the hall. No paint-splattered Year 9s laughing on their way to
                  the art block. No drumbeat from the music rooms that makes you tap your foot even
                  when you are trying to concentrate on quadratic equations.
                </p>
                <p className="mt-3">
                  Silence. That is what this school will sound like if we allow art and music to be
                  stripped from our curriculum.
                </p>
                <p className="mt-3">
                  Now, I understand the argument. Budgets are tight. Exam results matter.
                  Universities want to see grades in maths and science and English. And yes, those
                  subjects are important - nobody is denying that. But to suggest that art and music
                  are luxuries we can afford to lose is not just short-sighted; it is fundamentally
                  wrong.
                </p>
              </div>
            </div>
            <div className="mt-3 rounded-lg bg-primary/10 p-4">
              <p className="text-sm font-medium text-primary">Techniques demonstrated:</p>
              <ul className="mt-1 space-y-1 text-sm text-muted-foreground">
                <li>
                  &bull; <strong>{tr(`Direct address:`)}</strong> &ldquo;I want you to
                  imagine&rdquo;
                </li>
                <li>
                  &bull; <strong>Anaphora:</strong> &ldquo;No choir... No paint-splattered... No
                  drumbeat&rdquo;
                </li>
                <li>
                  &bull; <strong>{tr(`Sensory imagery:`)}</strong> sound, sight, touch
                </li>
                <li>
                  &bull; <strong>{tr(`Short sentence for impact:`)}</strong> &ldquo;Silence.&rdquo;
                </li>
                <li>
                  &bull; <strong>{tr(`Counter-argument acknowledged`)}</strong> then rebutted
                </li>
                <li>
                  &bull; <strong>Tricolon:</strong> &ldquo;maths and science and English&rdquo;
                </li>
                <li>
                  &bull; <strong>{tr(`Emotive language:`)}</strong> &ldquo;stripped,&rdquo;
                  &ldquo;fundamentally wrong&rdquo;
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
            The front of the paper advises about 1 hour 20 minutes on Section A and about 45 minutes
            on Section B. The times below are our suggestion, worked out from the marks. Allow about
            6 minutes to read Text 1 before Question 1, and about 6 minutes to read Text 2 before
            Question 4.
          </p>
          <div className="mt-6 overflow-x-auto rounded-xl border border-border bg-card shadow-md">
            <table className="w-full text-start text-sm">
              <thead className="bg-accent text-white">
                <tr>
                  <th className="px-4 py-3 font-semibold">Question</th>
                  <th className="px-4 py-3 font-semibold">AO</th>
                  <th className="px-4 py-3 font-semibold">Marks</th>
                  <th className="px-4 py-3 font-semibold">{tr(`Suggested Time`)}</th>
                  <th className="px-4 py-3 font-semibold">{tr(`Key Advice`)}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {/* Until 31 October 2026 this table gave Paper 2 a 1-mark Q1, two 6-mark
                    language questions, a 10-mark comparison and the writing as Q7: no
                    Pearson paper, and not the question cards above it. It now follows
                    src/data/mark-scheme-guides/edexcel-lang-paper2.ts, minutes included. */}
                <tr className="hover:bg-muted">
                  <td className="px-4 py-3 font-medium">Q1 (Text 1)</td>
                  <td className="px-4 py-3">{tr(`Reading and retrieval (AO1)`)}</td>
                  <td className="px-4 py-3">2</td>
                  <td className="px-4 py-3">2 min</td>
                  <td className="px-4 py-3">{tr(`Two separate points. No analysis needed.`)}</td>
                </tr>
                <tr className="hover:bg-muted">
                  <td className="px-4 py-3 font-medium">Q2 (Text 1)</td>
                  <td className="px-4 py-3">{tr(`Reading and retrieval (AO1)`)}</td>
                  <td className="px-4 py-3">2</td>
                  <td className="px-4 py-3">2 min</td>
                  <td className="px-4 py-3">{tr(`Two separate points. No analysis needed.`)}</td>
                </tr>
                <tr className="hover:bg-muted">
                  <td className="px-4 py-3 font-medium">Q3 (Text 1)</td>
                  <td className="px-4 py-3">{tr(`Language and structure analysis (AO2)`)}</td>
                  <td className="px-4 py-3">15</td>
                  <td className="px-4 py-3">18 min</td>
                  <td className="px-4 py-3">
                    {tr(
                      `Language and structure across the whole text, each point linked to its effect.`,
                    )}
                  </td>
                </tr>
                <tr className="hover:bg-muted">
                  <td className="px-4 py-3 font-medium">Q4 (Text 2)</td>
                  <td className="px-4 py-3">{tr(`Reading and retrieval (AO1)`)}</td>
                  <td className="px-4 py-3">1</td>
                  <td className="px-4 py-3">1 min</td>
                  <td className="px-4 py-3">
                    {tr(`One point from the named lines. Check the line numbers.`)}
                  </td>
                </tr>
                <tr className="hover:bg-muted">
                  <td className="px-4 py-3 font-medium">Q5 (Text 2)</td>
                  <td className="px-4 py-3">{tr(`Reading and retrieval (AO1)`)}</td>
                  <td className="px-4 py-3">1</td>
                  <td className="px-4 py-3">1 min</td>
                  <td className="px-4 py-3">
                    {tr(`One point from the named lines. Check the line numbers.`)}
                  </td>
                </tr>
                <tr className="hover:bg-muted">
                  <td className="px-4 py-3 font-medium">Q6 (Text 2)</td>
                  <td className="px-4 py-3">{tr(`Critical evaluation (AO4)`)}</td>
                  <td className="px-4 py-3">15</td>
                  <td className="px-4 py-3">18 min</td>
                  <td className="px-4 py-3">
                    {tr(`A clear verdict on how well the writer succeeds, tested against Text 2.`)}
                  </td>
                </tr>
                <tr className="hover:bg-muted">
                  <td className="px-4 py-3 font-medium">Q7(a) (Both)</td>
                  <td className="px-4 py-3">{tr(`Reading and retrieval (AO1)`)}</td>
                  <td className="px-4 py-3">6</td>
                  <td className="px-4 py-3">8 min</td>
                  <td className="px-4 py-3">
                    {tr(`Similarities only, with evidence from both texts in every point.`)}
                  </td>
                </tr>
                <tr className="hover:bg-muted">
                  <td className="px-4 py-3 font-medium">Q7(b) (Both)</td>
                  <td className="px-4 py-3">{tr(`Comparing writers (AO3)`)}</td>
                  <td className="px-4 py-3">14</td>
                  <td className="px-4 py-3">18 min</td>
                  <td className="px-4 py-3">
                    {tr(`Compare ideas and methods throughout, with evidence from both texts.`)}
                  </td>
                </tr>
                <tr className="hover:bg-muted">
                  <td className="px-4 py-3 font-medium">Q8 or Q9 (Writing)</td>
                  <td className="px-4 py-3">
                    {tr(`Content, organisation, and accuracy (AO5/AO6)`)}
                  </td>
                  <td className="px-4 py-3">40</td>
                  <td className="px-4 py-3">45 min</td>
                  <td className="px-4 py-3">
                    Answer one. 5 min plan, 35 min write, 5 min check. Follow the form&rsquo;s
                    conventions.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 rounded-xl border border-warn-200 bg-warn-50 p-6">
            <h3 className="font-bold text-warn-700">{tr(`Common Mistakes to Avoid on Paper 2`)}</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-warn" />
                <strong>Q7(b):</strong> Discussing one text then the other (the &ldquo;block&rdquo;
                method). Instead, compare point by point throughout.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-warn" />
                <strong>{tr(`Section B:`)}</strong> Ignoring form conventions. If the task says
                &ldquo;letter,&rdquo; you must include addresses and a salutation.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-warn" />
                <strong>{tr(`Section B:`)}</strong> Writing in the wrong register. A formal letter
                to a headteacher should not use slang.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-warn" />
                <strong>Timing:</strong> Spending too long on the short retrievals Q1, Q2, Q4 and Q5
                (six marks between them) and rushing Q3, Q6 and Q7(b), which are worth 44.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-warn" />
                <strong>Dates:</strong> Ignoring when each text was written. The texts come from the
                20th and 21st centuries, so one may be decades older than the other, and its
                vocabulary and attitudes can show it. Noticing that can sharpen your comparison of
                the writers&rsquo; perspectives in Q7(b).
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Continue studying */}
      <section className="px-4 pb-12">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-xl border border-primary/20 bg-primary/5 p-6 sm:p-8">
            <h2 className="text-xl font-bold text-foreground">{tr(`Continue studying`)}</h2>
            <p className="mt-2 text-muted-foreground">
              Strengthen your reading analysis and writing for real purposes further.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="/resources/english-language/edexcel/paper-1"
                className="rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition hover:border-primary hover:shadow-md"
              >
                Paper 1: Fiction &amp; Imaginative Writing
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
