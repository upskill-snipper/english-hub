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
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-bold text-foreground hover:bg-muted transition-colors"
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
            Cambridge IGCSE English Literature (0475/0992)
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
              href="/resources/english-literature/caie"
              className="hover:text-foreground transition-colors"
            >
              CAIE English Literature
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
            Grade boundaries change every exam series based on the difficulty of the papers and the
            performance of the whole cohort. The boundaries below are from recent exam series and
            are provided as a <strong>guide</strong> only. Your actual grade boundary may be
            slightly higher or lower. Always check the{' '}
            <a
              href="https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-igcse-literature-in-english-0475/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-semibold hover:text-warn-900"
            >
              Cambridge International website
            </a>{' '}
            for the most up-to-date boundaries after results day.
          </p>
        </div>

        {/* Overall grade boundaries */}
        <Section title={tr(`Overall grade boundaries (Paper 1 + Paper 2)`)} defaultOpen>
          <p>
            The total number of marks across both papers is <strong>100</strong>. Paper 1 (Poetry
            and Prose) is worth 50 marks and Paper 2 (Drama) is worth 50 marks. Your raw marks from
            both papers are combined to produce your overall grade. Below are the approximate
            boundaries from recent exam series:
          </p>

          <div className="overflow-x-auto mt-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border text-left text-muted-foreground">
                  <th className="py-2 pr-4">Grade</th>
                  <th className="py-2 pr-4">{tr(`Approx. marks (out of 100)`)}</th>
                  <th className="py-2 pr-4">Approx. %</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr className="bg-success-50">
                  <td className="py-2 pr-4 font-bold text-success-700">A*</td>
                  <td className="py-2 pr-4">90</td>
                  <td className="py-2 pr-4">~90%</td>
                </tr>
                <tr className="bg-success-50/50">
                  <td className="py-2 pr-4 font-bold text-success-700">A</td>
                  <td className="py-2 pr-4">80</td>
                  <td className="py-2 pr-4">~80%</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-bold text-primary">B</td>
                  <td className="py-2 pr-4">70</td>
                  <td className="py-2 pr-4">~70%</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-bold text-primary">C</td>
                  <td className="py-2 pr-4">60</td>
                  <td className="py-2 pr-4">~60%</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-bold text-foreground">D</td>
                  <td className="py-2 pr-4">50</td>
                  <td className="py-2 pr-4">~50%</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-bold text-yellow-600">E</td>
                  <td className="py-2 pr-4">40</td>
                  <td className="py-2 pr-4">~40%</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-bold text-muted-foreground">F</td>
                  <td className="py-2 pr-4">30</td>
                  <td className="py-2 pr-4">~30%</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-bold text-muted-foreground">G</td>
                  <td className="py-2 pr-4">20</td>
                  <td className="py-2 pr-4">~20%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-sm text-muted-foreground">
            Note: These boundaries are approximate and based on publicly available Cambridge
            International data. The total marks may vary between 100 and 120 depending on the paper
            combination and exam series. Actual boundaries fluctuate each session.
          </p>
        </Section>

        {/* What each grade looks like */}
        <Section title={tr(`What each grade looks like in practice`)}>
          <p>
            Understanding the grade descriptors helps you see exactly what markers expect at each
            level. Here is what typical work looks like at the key grade boundaries:
          </p>

          <div className="mt-4 space-y-6">
            <div className="rounded-lg border-l-4 border-success-500 bg-success-50/30 p-5">
              <h3 className="text-lg font-bold text-success-700">
                {tr(`Grade A* &mdash; Exceptional`)}
              </h3>
              <div className="mt-3 space-y-2 text-sm">
                <ul className="ml-5 list-disc space-y-1">
                  <li>
                    {tr(
                      `Insightful, original personal response demonstrating a critical engagement with the text.`,
                    )}
                  </li>
                  <li>{tr(`Precise, well-integrated quotations that are analysed in depth.`)}</li>
                  <li>
                    {tr(
                      `Sophisticated analysis of the writer&rsquo;s methods, including language, form, and structure.`,
                    )}
                  </li>
                  <li>
                    {tr(
                      `Perceptive understanding of how the writer creates meaning and effects on the reader.`,
                    )}
                  </li>
                  <li>
                    Mature appreciation of context, genre, and literary tradition woven naturally
                    into analysis.
                  </li>
                  <li>Assured, fluent writing with a sustained critical voice throughout.</li>
                </ul>
              </div>
            </div>

            <div className="rounded-lg border-l-4 border-primary bg-blue-500/10/30 p-5">
              <h3 className="text-lg font-bold text-primary">
                {tr(`Grades A&ndash;B &mdash; Strong`)}
              </h3>
              <div className="mt-3 space-y-2 text-sm">
                <ul className="ml-5 list-disc space-y-1">
                  <li>
                    {tr(`Thoughtful, well-developed personal response with a clear argument.`)}
                  </li>
                  <li>
                    {tr(`Apt references and quotations used to support detailed interpretation.`)}
                  </li>
                  <li>
                    Effective analysis of the writer&rsquo;s methods with accurate use of literary
                    terminology.
                  </li>
                  <li>
                    {tr(`Clear understanding of how language, form, and structure shape meaning.`)}
                  </li>
                  <li>Considered exploration of context and its influence on the text.</li>
                  <li>
                    Well-organised, clearly expressed writing with consistent analytical focus.
                  </li>
                </ul>
              </div>
            </div>

            <div className="rounded-lg border-l-4 border-primary bg-blue-500/10/20 p-5">
              <h3 className="text-lg font-bold text-foreground">
                {tr(`Grades C&ndash;D &mdash; Competent`)}
              </h3>
              <div className="mt-3 space-y-2 text-sm">
                <ul className="ml-5 list-disc space-y-1">
                  <li>
                    {tr(
                      `Sustained response to the text with relevant ideas and some personal engagement.`,
                    )}
                  </li>
                  <li>
                    {tr(`References used to support explanations, though analysis may be uneven.`)}
                  </li>
                  <li>
                    {tr(
                      `Some explanation of the writer&rsquo;s methods with appropriate literary terminology.`,
                    )}
                  </li>
                  <li>{tr(`General understanding of how the writer creates effects.`)}</li>
                  <li>
                    {tr(`Some awareness of contextual factors, though integration may be limited.`)}
                  </li>
                  <li>{tr(`Structured writing with a clear focus on the question.`)}</li>
                </ul>
              </div>
            </div>

            <div className="rounded-lg border-l-4 border-yellow-400 bg-yellow-500/10/30 p-5">
              <h3 className="text-lg font-bold text-yellow-700">
                {tr(`Grade E &mdash; Basic pass`)}
              </h3>
              <div className="mt-3 space-y-2 text-sm">
                <ul className="ml-5 list-disc space-y-1">
                  <li>
                    {tr(`Some response to the text, though may lack development or consistency.`)}
                  </li>
                  <li>
                    {tr(`References used to support some points, though not always well-selected.`)}
                  </li>
                  <li>
                    {tr(
                      `Some awareness of the writer&rsquo;s methods; some literary terminology used.`,
                    )}
                  </li>
                  <li>{tr(`Basic comment on the effects of the writer&rsquo;s choices.`)}</li>
                  <li>{tr(`Limited awareness of context, which may appear bolted on.`)}</li>
                  <li>{tr(`Writing may lack structure or clear focus in places.`)}</li>
                </ul>
              </div>
            </div>

            <div className="rounded-lg border-l-4 border-border bg-muted/50 p-5">
              <h3 className="text-lg font-bold text-muted-foreground">
                {tr(`Grades F&ndash;G &mdash; Below pass`)}
              </h3>
              <div className="mt-3 space-y-2 text-sm">
                <ul className="ml-5 list-disc space-y-1">
                  <li>{tr(`Simple, limited comments on texts with little development.`)}</li>
                  <li>{tr(`References may be general or paraphrased rather than specific.`)}</li>
                  <li>
                    Limited awareness of the writer&rsquo;s methods; little or no literary
                    terminology.
                  </li>
                  <li>{tr(`May retell the plot or describe events rather than analyse.`)}</li>
                  <li>Little or no reference to context.</li>
                  <li>{tr(`Writing may be disorganised or unclear.`)}</li>
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
              <h3 className="font-bold text-foreground">{tr(`Grade E &rarr; Grade C`)}</h3>
              <ul className="mt-2 ml-5 list-disc space-y-2 text-sm">
                <li>
                  <strong>Quotations:</strong> Move beyond retelling the story. Select short,
                  specific quotations and explain what they reveal about the character, theme, or
                  writer&rsquo;s purpose.
                </li>
                <li>
                  <strong>Terminology:</strong> Learn and use key literary terms accurately &mdash;
                  metaphor, simile, pathetic fallacy, iambic pentameter, enjambment. Even basic
                  terminology used correctly lifts your analysis.
                </li>
                <li>
                  <strong>Completeness:</strong> Attempt every question in full. Leaving out a
                  question or running out of time is the most common reason students miss a Grade C.
                </li>
                <li>
                  <strong>Structure:</strong> Plan your essays briefly before writing. A clear
                  introduction, structured paragraphs, and a conclusion show the marker you can
                  organise your ideas.
                </li>
              </ul>
            </div>

            <div className="rounded-lg border border-border p-5">
              <h3 className="font-bold text-foreground">{tr(`Grade C &rarr; Grade A`)}</h3>
              <ul className="mt-2 ml-5 list-disc space-y-2 text-sm">
                <li>
                  <strong>{tr(`Analysis depth:`)}</strong> Move from explaining what a quotation
                  means to analysing <em>how</em> the language creates its effect. Explore
                  connotations of individual words and consider why the writer chose them.
                </li>
                <li>
                  <strong>Context:</strong> Integrate contextual knowledge naturally. Instead of a
                  separate paragraph about context, weave it into your analysis: &ldquo;Shakespeare
                  uses this to reflect the Elizabethan belief that&hellip;&rdquo;
                </li>
                <li>
                  <strong>Personal response:</strong> Develop a genuine personal engagement with the
                  text. Show the marker you have thought independently about the writer&rsquo;s
                  intentions and effects.
                </li>
                <li>
                  <strong>{tr(`Form and structure:`)}</strong> Go beyond commenting on language.
                  Consider how the structure of the text (narrative arc, stanza form, dramatic
                  structure) contributes to meaning.
                </li>
              </ul>
            </div>

            <div className="rounded-lg border border-border p-5">
              <h3 className="font-bold text-foreground">{tr(`Grade A &rarr; Grade A*`)}</h3>
              <ul className="mt-2 ml-5 list-disc space-y-2 text-sm">
                <li>
                  <strong>{tr(`Conceptualised response:`)}</strong> Frame your essay around a clear
                  argument or interpretation. An A* response has a thesis &mdash; a thread that runs
                  through every paragraph, not a series of disconnected points.
                </li>
                <li>
                  <strong>{tr(`Alternative interpretations:`)}</strong> Explore how a text could be
                  read differently: &ldquo;A feminist reading might suggest&hellip;&rdquo; or
                  &ldquo;While the surface reading implies X, the imagery subtly undermines
                  this&hellip;&rdquo;
                </li>
                <li>
                  <strong>{tr(`Writer&rsquo;s craft:`)}</strong> Go beyond individual techniques to
                  consider how the whole text is constructed. How does the opening relate to the
                  ending? How does the structure mirror the themes?
                </li>
                <li>
                  <strong>{tr(`Wider reading:`)}</strong> Students who achieve A* read widely and
                  bring a mature critical vocabulary to their analysis. Read literary criticism,
                  reviews, and essays to develop a sophisticated analytical voice.
                </li>
              </ul>
            </div>
          </div>
        </Section>

        {/* Paper breakdown */}
        <Section title={tr(`Paper breakdown at a glance`)}>
          <p className="mb-4">
            Cambridge IGCSE English Literature (0475/0992) is assessed through two papers. Each
            paper is worth 50 marks and lasts 1 hour 30 minutes.
          </p>

          <h3 className="font-bold text-foreground mb-2">
            {tr(`Paper 1 &mdash; Poetry and Prose (50%)`)}
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border text-left text-muted-foreground">
                  <th className="py-2 pr-4">Section</th>
                  <th className="py-2 pr-4">Marks</th>
                  <th className="py-2 pr-4">Time</th>
                  <th className="py-2 pr-4">Focus</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="py-2 pr-4 font-semibold">Poetry</td>
                  <td className="py-2 pr-4">25 marks</td>
                  <td className="py-2 pr-4 text-muted-foreground" rowSpan={2}>
                    1h 30m total
                  </td>
                  <td className="py-2 pr-4">
                    Set poetry texts &mdash; passage-based and essay questions
                  </td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-semibold">Prose</td>
                  <td className="py-2 pr-4">25 marks</td>
                  <td className="py-2 pr-4">
                    {tr(`Set prose texts &mdash; passage-based and essay questions`)}
                  </td>
                </tr>
                <tr className="font-bold">
                  <td className="py-2 pr-4">{tr(`Paper 1 Total`)}</td>
                  <td className="py-2 pr-4">50 marks</td>
                  <td className="py-2 pr-4">1h 30m</td>
                  <td className="py-2 pr-4">50% of qualification</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="font-bold text-foreground mt-6 mb-2">
            {tr(`Paper 2 &mdash; Drama (50%)`)}
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border text-left text-muted-foreground">
                  <th className="py-2 pr-4">Section</th>
                  <th className="py-2 pr-4">Marks</th>
                  <th className="py-2 pr-4">Time</th>
                  <th className="py-2 pr-4">Focus</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="py-2 pr-4 font-semibold">Drama</td>
                  <td className="py-2 pr-4">50 marks</td>
                  <td className="py-2 pr-4">1h 30m</td>
                  <td className="py-2 pr-4">
                    {tr(`Set drama texts &mdash; passage-based and essay questions`)}
                  </td>
                </tr>
                <tr className="font-bold">
                  <td className="py-2 pr-4">{tr(`Paper 2 Total`)}</td>
                  <td className="py-2 pr-4">50 marks</td>
                  <td className="py-2 pr-4">1h 30m</td>
                  <td className="py-2 pr-4">50% of qualification</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-sm text-muted-foreground">
            Both papers carry equal weight. Strong performance across both poetry/prose and drama is
            essential for achieving the highest grades. Practising passage-based questions under
            timed conditions is one of the most effective ways to improve your overall Literature
            grade.
          </p>
        </Section>

        {/* Back link */}
        <div className="pt-4">
          <Link
            href="/resources/english-literature/caie"
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
            {t('study.lit.back.caie')}
          </Link>
        </div>
      </div>

      <ExamBoardDisclaimer />
    </>
  )
}
