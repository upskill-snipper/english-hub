'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ExamBoardDisclaimer } from '@/components/ExamBoardDisclaimer'

import { STRINGS } from './content'
import { useLocale } from '@/lib/i18n/use-locale'
import { useT } from '@/lib/i18n/use-t'
function Section({
  title,
  children,
  defaultOpen = false,
}: {
  title: string
  children: React.ReactNode
  defaultOpen?: boolean
}) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="rounded-xl border border-border bg-card">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-start font-bold text-foreground hover:bg-muted transition-colors"
      >
        <span className="text-lg">{title}</span>
        <svg
          className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform ${open ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
      {open && (
        <div className="border-t border-border px-6 py-6 text-muted-foreground leading-relaxed space-y-4">
          {children}
        </div>
      )}
    </div>
  )
}

export default function GradeBoundariesPage() {
  const locale = useLocale()
  const t = useT()
  const tr = (en: string): string => {
    if (locale !== 'ar') return en
    for (const v of Object.values(STRINGS)) if (v.en === en) return v.ar || en
    return en
  }

  return (
    <>
      {/* Hero */}
      <section className="border-b bg-gradient-to-b from-primary/[0.06] to-transparent px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            WJEC Eduqas GCSE English Language (C700QS)
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Grade Boundaries
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Recent grade boundaries, what each grade looks like in practice, and how to push your
            marks into the next band.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav className="mx-auto max-w-5xl px-4 pt-6" aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
          <li>
            <Link href="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link
              href="/resources/english-language/wjec"
              className="hover:text-foreground transition-colors"
            >
              WJEC English Language
            </Link>
          </li>
          <li>/</li>
          <li className="text-foreground font-medium">{tr(`Grade Boundaries`)}</li>
        </ol>
      </nav>

      <div className="mx-auto max-w-5xl px-4 py-10 space-y-6">
        {/* Important note */}
        <div className="rounded-xl border border-warn-200 bg-warn-50 p-6">
          <h2 className="font-bold text-warn-800">{tr(`Important note`)}</h2>
          <p className="mt-2 text-sm text-warn-700">
            Grade boundaries change every year based on the difficulty of the papers and the
            performance of the whole cohort. The boundaries below are from recent exam series and
            are provided as a <strong>guide</strong> only. Your actual grade boundary may be
            slightly higher or lower. Always check the{' '}
            <a
              href="https://www.eduqas.co.uk/qualifications/english-language-gcse/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-semibold hover:text-warn-900"
            >
              WJEC Eduqas website
            </a>{' '}
            for the most up-to-date boundaries after results day.
          </p>
        </div>

        {/* Overall grade boundaries. Corrected 31 October 2026 (second reading): the
            table was on a 160-mark scale with figures matching no series Eduqas published,
            and the paragraph called 160 the total. Eduqas grades C700QS out of 200:
            Component 1 (C700U10, 80 marks) at a weighting factor of 1.0 and Component 2
            (C700U20, 80 marks) at 1.5. The figures are from Eduqas GCSE Grade Points for
            June 2023, June 2024 and June 2025 (eduqas.co.uk/media/y3tczpkq, /giydmniq and
            /g3aohuwq); June 2024 matches src/lib/marking/grade-boundaries/eduqas.ts. */}
        <Section title={tr(`Overall grade boundaries (combined Paper 1 + Paper 2)`)} defaultOpen>
          <p>
            Each component is marked out of 80, but the two are not weighted equally: Paper 1 is
            worth 40% of the GCSE and Paper 2 is worth 60%. To combine them, Eduqas multiplies your
            Paper 2 mark by 1.5, so your overall mark is out of <strong>200</strong> (up to 80 from
            Paper 1 and up to 120 from Paper 2) and each Paper 2 mark counts one and a half times as
            much towards your grade. Below are the boundaries Eduqas published for recent June
            series:
          </p>

          <div className="overflow-x-auto mt-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border text-start text-muted-foreground">
                  <th className="py-2 pe-4">Grade</th>
                  <th className="py-2 pe-4">June 2023</th>
                  <th className="py-2 pe-4">June 2024</th>
                  <th className="py-2 pe-4">June 2025</th>
                  <th className="py-2 pe-4">Approx. %</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr className="bg-success-50">
                  <td className="py-2 pe-4 font-bold text-success-700">9</td>
                  <td className="py-2 pe-4">145</td>
                  <td className="py-2 pe-4">150</td>
                  <td className="py-2 pe-4">152</td>
                  <td className="py-2 pe-4">~76%</td>
                </tr>
                <tr className="bg-success-50/50">
                  <td className="py-2 pe-4 font-bold text-success-700">8</td>
                  <td className="py-2 pe-4">132</td>
                  <td className="py-2 pe-4">138</td>
                  <td className="py-2 pe-4">139</td>
                  <td className="py-2 pe-4">~70%</td>
                </tr>
                <tr>
                  <td className="py-2 pe-4 font-bold text-primary">7</td>
                  <td className="py-2 pe-4">120</td>
                  <td className="py-2 pe-4">126</td>
                  <td className="py-2 pe-4">127</td>
                  <td className="py-2 pe-4">~64%</td>
                </tr>
                <tr>
                  <td className="py-2 pe-4 font-bold text-primary">6</td>
                  <td className="py-2 pe-4">105</td>
                  <td className="py-2 pe-4">112</td>
                  <td className="py-2 pe-4">113</td>
                  <td className="py-2 pe-4">~57%</td>
                </tr>
                <tr>
                  <td className="py-2 pe-4 font-bold text-foreground">5</td>
                  <td className="py-2 pe-4">90</td>
                  <td className="py-2 pe-4">98</td>
                  <td className="py-2 pe-4">99</td>
                  <td className="py-2 pe-4">~50%</td>
                </tr>
                <tr>
                  <td className="py-2 pe-4 font-bold text-yellow-600">4</td>
                  <td className="py-2 pe-4">75</td>
                  <td className="py-2 pe-4">84</td>
                  <td className="py-2 pe-4">86</td>
                  <td className="py-2 pe-4">~43%</td>
                </tr>
                <tr>
                  <td className="py-2 pe-4 font-bold text-muted-foreground">3</td>
                  <td className="py-2 pe-4">56</td>
                  <td className="py-2 pe-4">64</td>
                  <td className="py-2 pe-4">65</td>
                  <td className="py-2 pe-4">~33%</td>
                </tr>
                <tr>
                  <td className="py-2 pe-4 font-bold text-muted-foreground">2</td>
                  <td className="py-2 pe-4">38</td>
                  <td className="py-2 pe-4">44</td>
                  <td className="py-2 pe-4">44</td>
                  <td className="py-2 pe-4">~22%</td>
                </tr>
                <tr>
                  <td className="py-2 pe-4 font-bold text-muted-foreground">1</td>
                  <td className="py-2 pe-4">20</td>
                  <td className="py-2 pe-4">24</td>
                  <td className="py-2 pe-4">24</td>
                  <td className="py-2 pe-4">~12%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-sm text-muted-foreground">
            Note: These are the qualification boundaries, out of 200, that Eduqas published in its
            GCSE Grade Points for June 2023, June 2024 and June 2025. The &ldquo;Approx. %&rdquo;
            column shows the June 2025 boundary as a share of the 200 marks.
          </p>
        </Section>

        {/* What each grade looks like */}
        <Section title={tr(`What each grade looks like in practice`)}>
          <p>
            Understanding the grade descriptors helps you see exactly what markers expect at each
            level. Here is what typical work looks like at the key grade boundaries:
          </p>

          <div className="mt-4 space-y-6">
            <div className="rounded-lg border-s-4 border-success-500 bg-success-50/30 p-5">
              <h3 className="text-lg font-bold text-success-700">Grade 9 - Exceptional</h3>
              <div className="mt-3 space-y-2 text-sm">
                <p>
                  <strong>Reading:</strong>
                </p>
                <ul className="ms-5 list-disc space-y-1">
                  <li>
                    {tr(
                      `Perceptive, original analysis that goes beyond the obvious interpretation.`,
                    )}
                  </li>
                  <li>
                    {tr(
                      `Judicious, precisely selected quotations seamlessly embedded in sentences.`,
                    )}
                  </li>
                  <li>
                    {tr(`Sophisticated subject terminology used accurately and purposefully.`)}
                  </li>
                  <li>
                    {tr(
                      `Critical evaluation that explores multiple interpretations and considers the writer’s intentions.`,
                    )}
                  </li>
                  <li>
                    {tr(
                      `Consistently engages with connotations, nuance, and the subtleties of language.`,
                    )}
                  </li>
                </ul>
                <p className="mt-3">
                  <strong>Writing:</strong>
                </p>
                <ul className="ms-5 list-disc space-y-1">
                  <li>
                    {tr(
                      `Compelling, convincing writing that sustains the reader’s interest throughout.`,
                    )}
                  </li>
                  <li>{tr(`Extensive, ambitious vocabulary used precisely and naturally.`)}</li>
                  <li>
                    {tr(
                      `Varied, inventive structural choices that shape meaning (e.g., cyclical structure, deliberate shifts in pace).`,
                    )}
                  </li>
                  <li>A distinctive, authentic voice that feels crafted, not formulaic.</li>
                  <li>A full range of punctuation used accurately and for deliberate effect.</li>
                  <li>
                    Virtually flawless spelling and grammar, including complex and irregular words.
                  </li>
                </ul>
              </div>
            </div>

            <div className="rounded-lg border-s-4 border-primary bg-blue-500/10/30 p-5">
              <h3 className="text-lg font-bold text-primary">{tr(`Grades 7-8 - Strong`)}</h3>
              <div className="mt-3 space-y-2 text-sm">
                <p>
                  <strong>Reading:</strong>
                </p>
                <ul className="ms-5 list-disc space-y-1">
                  <li>
                    {tr(`Detailed, well-developed analysis with clear explanations of effects.`)}
                  </li>
                  <li>
                    {tr(
                      `Well-chosen quotations with thorough exploration of language and structure.`,
                    )}
                  </li>
                  <li>{tr(`Accurate subject terminology used consistently.`)}</li>
                  <li>
                    Thoughtful evaluation that engages with the text and writer&rsquo;s methods.
                  </li>
                  <li>Some exploration of alternative interpretations.</li>
                </ul>
                <p className="mt-3">
                  <strong>Writing:</strong>
                </p>
                <ul className="ms-5 list-disc space-y-1">
                  <li>
                    {tr(
                      `Engaging, well-crafted writing with a clear sense of purpose and audience.`,
                    )}
                  </li>
                  <li>{tr(`Increasingly sophisticated vocabulary and phrasing.`)}</li>
                  <li>
                    {tr(`Effective structural features that contribute to the overall effect.`)}
                  </li>
                  <li>{tr(`Wide range of sentence structures used for effect.`)}</li>
                  <li>{tr(`Mostly accurate spelling and punctuation with only minor errors.`)}</li>
                </ul>
              </div>
            </div>

            <div className="rounded-lg border-s-4 border-primary bg-blue-500/10/20 p-5">
              <h3 className="text-lg font-bold text-foreground">{tr(`Grades 5-6 - Secure`)}</h3>
              <div className="mt-3 space-y-2 text-sm">
                <p>
                  <strong>Reading:</strong>
                </p>
                <ul className="ms-5 list-disc space-y-1">
                  <li>{tr(`Clear explanations of language and structural effects.`)}</li>
                  <li>{tr(`Relevant quotations selected and commented on.`)}</li>
                  <li>Subject terminology used, mostly accurately.</li>
                  <li>A clear response to questions with some personal engagement.</li>
                  <li>
                    {tr(
                      `Analysis may lack depth or consistency: some points developed well, others more surface-level.`,
                    )}
                  </li>
                </ul>
                <p className="mt-3">
                  <strong>Writing:</strong>
                </p>
                <ul className="ms-5 list-disc space-y-1">
                  <li>
                    {tr(
                      `Writing is clear and communicates effectively with some engaging moments.`,
                    )}
                  </li>
                  <li>
                    {tr(`Vocabulary is chosen for effect, though may occasionally lack precision.`)}
                  </li>
                  <li>{tr(`Paragraphs are used effectively with some structural awareness.`)}</li>
                  <li>{tr(`Some variety in sentence structures.`)}</li>
                  <li>
                    {tr(
                      `Generally accurate spelling and punctuation with some errors on more complex words.`,
                    )}
                  </li>
                </ul>
              </div>
            </div>

            <div className="rounded-lg border-s-4 border-yellow-400 bg-yellow-500/10/30 p-5">
              <h3 className="text-lg font-bold text-yellow-700">{tr(`Grade 4 - Standard pass`)}</h3>
              <div className="mt-3 space-y-2 text-sm">
                <p>
                  <strong>Reading:</strong>
                </p>
                <ul className="ms-5 list-disc space-y-1">
                  <li>
                    {tr(`Some understanding of language effects, but explanations may be thin.`)}
                  </li>
                  <li>
                    {tr(`Some appropriate references to the text, though not always well-chosen.`)}
                  </li>
                  <li>{tr(`Some subject terminology, not always accurate.`)}</li>
                  <li>
                    {tr(`Some response to questions, though may lack detail or development.`)}
                  </li>
                  <li>
                    {tr(`May feature-spot (identify techniques without explaining their effect).`)}
                  </li>
                </ul>
                <p className="mt-3">
                  <strong>Writing:</strong>
                </p>
                <ul className="ms-5 list-disc space-y-1">
                  <li>Writing communicates with some clarity but may drift or lose focus.</li>
                  <li>{tr(`Some attempts at vocabulary for effect.`)}</li>
                  <li>Basic structural features (paragraphs, some variety).</li>
                  <li>
                    {tr(
                      `Sentence demarcation mostly secure but some comma splicing or run-on sentences.`,
                    )}
                  </li>
                  <li>
                    {tr(`Spelling of basic words accurate; errors with more complex vocabulary.`)}
                  </li>
                </ul>
              </div>
            </div>

            <div className="rounded-lg border-s-4 border-border bg-muted/50 p-5">
              <h3 className="text-lg font-bold text-muted-foreground">
                {tr(`Grades 1-3 - Below standard pass`)}
              </h3>
              <div className="mt-3 space-y-2 text-sm">
                <p>
                  <strong>Reading:</strong>
                </p>
                <ul className="ms-5 list-disc space-y-1">
                  <li>{tr(`Simple comments on language with limited or no analysis.`)}</li>
                  <li>{tr(`Simple references that may paraphrase rather than quote.`)}</li>
                  <li>Little or no subject terminology.</li>
                  <li>{tr(`May retell the text rather than analyse or evaluate it.`)}</li>
                </ul>
                <p className="mt-3">
                  <strong>Writing:</strong>
                </p>
                <ul className="ms-5 list-disc space-y-1">
                  <li>{tr(`Simple ideas with limited development.`)}</li>
                  <li>{tr(`Basic, everyday vocabulary.`)}</li>
                  <li>{tr(`Limited structural features; may lack clear paragraphing.`)}</li>
                  <li>
                    {tr(`Simple sentence forms; frequent errors in spelling and punctuation.`)}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Section>

        {/* How to push your grade up */}
        <Section title="How to push your grade higher">
          <p>Here are targeted strategies for moving from one grade band to the next:</p>

          <div className="mt-4 space-y-5">
            <div className="rounded-lg border border-border p-5">
              <h3 className="font-bold text-foreground">{tr(`Grade 4 → Grade 5`)}</h3>
              <ul className="mt-2 ms-5 list-disc space-y-2 text-sm">
                <li>
                  <strong>Reading:</strong> Stop feature-spotting. Every time you identify a
                  technique, write at least two sentences explaining its effect on the reader. Use
                  the formula: &ldquo;This suggests&hellip;&rdquo; or &ldquo;This creates a sense
                  of&hellip;&rdquo;
                </li>
                <li>
                  <strong>Writing:</strong> Focus on technical accuracy. Eliminating comma splicing,
                  using capital letters correctly, and spelling common words accurately can gain you
                  several marks on the writing assessment objectives.
                </li>
                <li>
                  <strong>Timing:</strong> Make sure you attempt every question and complete both
                  the reading and writing sections in full. Leaving questions unanswered is the most
                  common reason students miss a Grade 5 on the WJEC Eduqas paper.
                </li>
              </ul>
            </div>

            <div className="rounded-lg border border-border p-5">
              <h3 className="font-bold text-foreground">{tr(`Grade 5 → Grade 7`)}</h3>
              <ul className="mt-2 ms-5 list-disc space-y-2 text-sm">
                <li>
                  <strong>Reading:</strong> Move from explaining effects to analysing <em>why</em>{' '}
                  the writer made specific choices. Explore connotations of individual words. Use
                  tentative language (&ldquo;Perhaps,&rdquo; &ldquo;This could suggest&rdquo;) to
                  show you are exploring meaning.
                </li>
                <li>
                  <strong>Writing:</strong> Upgrade your vocabulary. Replace basic verbs and
                  adjectives with more precise alternatives. Use a wider range of punctuation:
                  semicolons, colons, and dashes for effect.
                </li>
                <li>
                  <strong>Proofreading:</strong> Neither paper sets a proofreading task, but
                  technical accuracy is 16 of the 40 writing marks on each. Practise spotting your
                  own spelling, punctuation, and grammar errors under timed conditions, and keep a
                  few minutes to check every piece you write.
                </li>
              </ul>
            </div>

            <div className="rounded-lg border border-border p-5">
              <h3 className="font-bold text-foreground">{tr(`Grade 7 → Grade 9`)}</h3>
              <ul className="mt-2 ms-5 list-disc space-y-2 text-sm">
                <li>
                  <strong>Reading:</strong> Develop a critical, evaluative voice. Consider
                  alternative interpretations: &ldquo;While one reading of this image suggests X, it
                  could equally be interpreted as Y.&rdquo; Engage with the writer&rsquo;s broader
                  purpose and the text&rsquo;s context.
                </li>
                <li>
                  <strong>Writing:</strong> Develop a distinctive voice. The difference between
                  Grade 7 and Grade 9 creative writing is often authenticity and originality - the
                  sense that the writing has a unique perspective, not that it follows a formula.
                </li>
                <li>
                  <strong>Precision:</strong> Every word should earn its place. Cut unnecessary
                  phrases. Choose the single best word rather than listing adjectives. Make every
                  literary device feel organic and purposeful.
                </li>
                <li>
                  <strong>{tr(`Reading widely:`)}</strong> Students who achieve Grade 9 almost
                  always read extensively outside of class. Reading high-quality fiction and
                  non-fiction gives you a larger vocabulary, a better sense of style, and more
                  sophisticated structural instincts.
                </li>
              </ul>
            </div>
          </div>
        </Section>

        {/* Marks per question. Corrected 31 October 2026 to the C700 guides in
            src/data/mark-scheme-guides/eduqas-lang-comp1.ts and -comp2.ts. The tables
            gave Paper 1 64 marks with a 24-mark story, and Paper 2 96 marks with a
            5-mark proofreading question Eduqas does not set and writing tasks of 24 and
            27. Each paper is 80 marks: Paper 1 Q01 to Q05 (5, 5, 10, 10, 10) and Q11
            (40); Paper 2 1.1 to 1.6 (3, 10, 3, 10, 4, 10) and two compulsory tasks, 2.1
            and 2.2, of 20 each. The numbering is the live papers'. The weighting
            paragraph above said Paper 1 was "64 marks" and Paper 2 "96"; a proofreading
            tip above, in the Grade 5 to 7 advice, described the same invented task. */}
        <Section title={tr(`Marks per question at a glance`)}>
          <p className="mb-4">
            WJEC Eduqas English Language is split into two components. Paper 1 (20th Century
            Literature Reading and Creative Prose Writing) is worth 40% and Paper 2 (19th and 21st
            Century Non-Fiction Reading and Writing for Real Purposes) is worth 60%.
          </p>

          <h3 className="font-bold text-foreground mb-2">
            {tr(`Paper 1 - 20th Century Literature Reading and Creative Prose Writing (40%)`)}
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border text-start text-muted-foreground">
                  <th className="py-2 pe-4">Section</th>
                  <th className="py-2 pe-4">Question</th>
                  <th className="py-2 pe-4">Marks</th>
                  <th className="py-2 pe-4">Focus</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="py-2 pe-4 font-semibold" rowSpan={5}>
                    A - Reading
                  </td>
                  <td className="py-2 pe-4">Q01</td>
                  <td className="py-2 pe-4">5 marks</td>
                  <td className="py-2 pe-4">{tr(`Retrieval / comprehension`)}</td>
                </tr>
                <tr>
                  <td className="py-2 pe-4">Q02</td>
                  <td className="py-2 pe-4">5 marks</td>
                  <td className="py-2 pe-4">{tr(`Language: impressions (short answer)`)}</td>
                </tr>
                <tr>
                  <td className="py-2 pe-4">Q03</td>
                  <td className="py-2 pe-4">10 marks</td>
                  <td className="py-2 pe-4">{tr(`Language analysis`)}</td>
                </tr>
                <tr>
                  <td className="py-2 pe-4">Q04</td>
                  <td className="py-2 pe-4">10 marks</td>
                  <td className="py-2 pe-4">{tr(`Language and structure`)}</td>
                </tr>
                <tr>
                  <td className="py-2 pe-4">Q05</td>
                  <td className="py-2 pe-4">10 marks</td>
                  <td className="py-2 pe-4">{tr(`Extended critical response`)}</td>
                </tr>
                <tr className="bg-blue-500/5">
                  <td className="py-2 pe-4 font-semibold">B - Writing</td>
                  <td className="py-2 pe-4">Q11</td>
                  <td className="py-2 pe-4">40 marks</td>
                  <td className="py-2 pe-4">{tr(`Creative prose writing`)}</td>
                </tr>
                <tr className="font-bold">
                  <td className="py-2 pe-4" colSpan={2}>
                    {tr(`Paper 1 Total`)}
                  </td>
                  <td className="py-2 pe-4">80 marks</td>
                  <td className="py-2 pe-4">40% of qualification</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="font-bold text-foreground mt-6 mb-2">
            {tr(
              `Paper 2 - 19th and 21st Century Non-Fiction Reading and Writing for Real Purposes (60%)`,
            )}
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border text-start text-muted-foreground">
                  <th className="py-2 pe-4">Section</th>
                  <th className="py-2 pe-4">Question</th>
                  <th className="py-2 pe-4">Marks</th>
                  <th className="py-2 pe-4">Focus</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="py-2 pe-4 font-semibold" rowSpan={6}>
                    A - Reading
                  </td>
                  <td className="py-2 pe-4">1.1</td>
                  <td className="py-2 pe-4">3 marks</td>
                  <td className="py-2 pe-4">{tr(`Retrieval (21st-century text)`)}</td>
                </tr>
                <tr>
                  <td className="py-2 pe-4">1.2</td>
                  <td className="py-2 pe-4">10 marks</td>
                  <td className="py-2 pe-4">
                    {tr(`How the writer achieves a purpose (21st-century text)`)}
                  </td>
                </tr>
                <tr>
                  <td className="py-2 pe-4">1.3</td>
                  <td className="py-2 pe-4">3 marks</td>
                  <td className="py-2 pe-4">{tr(`Understanding (19th-century text)`)}</td>
                </tr>
                <tr>
                  <td className="py-2 pe-4">1.4</td>
                  <td className="py-2 pe-4">10 marks</td>
                  <td className="py-2 pe-4">{tr(`Evaluation (19th-century text)`)}</td>
                </tr>
                <tr>
                  <td className="py-2 pe-4">1.5</td>
                  <td className="py-2 pe-4">4 marks</td>
                  <td className="py-2 pe-4">{tr(`Synthesis (both texts)`)}</td>
                </tr>
                <tr>
                  <td className="py-2 pe-4">1.6</td>
                  <td className="py-2 pe-4">10 marks</td>
                  <td className="py-2 pe-4">{tr(`Comparison of texts`)}</td>
                </tr>
                <tr className="bg-blue-500/5">
                  <td className="py-2 pe-4 font-semibold" rowSpan={2}>
                    B - Writing
                  </td>
                  <td className="py-2 pe-4">2.1</td>
                  <td className="py-2 pe-4">20 marks</td>
                  <td className="py-2 pe-4">
                    {tr(`Transactional / persuasive writing (first compulsory task)`)}
                  </td>
                </tr>
                <tr className="bg-blue-500/5">
                  <td className="py-2 pe-4">2.2</td>
                  <td className="py-2 pe-4">20 marks</td>
                  <td className="py-2 pe-4">
                    {tr(`Transactional / persuasive writing (second compulsory task)`)}
                  </td>
                </tr>
                <tr className="font-bold">
                  <td className="py-2 pe-4" colSpan={2}>
                    {tr(`Paper 2 Total`)}
                  </td>
                  <td className="py-2 pe-4">80 marks</td>
                  <td className="py-2 pe-4">60% of qualification</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-sm text-muted-foreground">
            Notice that writing is half of each component: 40 of its 80 marks. Strong creative and
            writing for real purposes skills can be developed through preparation and practice
            regardless of what unseen text appears on the day.
          </p>
        </Section>

        {/* Back link */}
        <div className="pt-4">
          <Link
            href="/resources/english-language/wjec"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-foreground transition-colors"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
            {t('study.lang.wjec.back')}
          </Link>
        </div>
      </div>

      <ExamBoardDisclaimer />
    </>
  )
}
