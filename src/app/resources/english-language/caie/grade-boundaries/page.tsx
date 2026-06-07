'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ExamBoardDisclaimer } from '@/components/ExamBoardDisclaimer'

import { STRINGS } from './content'
import { useLocale } from '@/lib/i18n/use-locale'
import { useT } from '@/lib/i18n/use-t'
/* ─── Collapsible section ────────────────────────────────────── */

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

/* ─── Grade boundary data ────────────────────────────────────── */

interface BoundaryRow {
  series: string
  astar: number
  a: number
  b: number
  c: number
  d: number
  e: number
  f: number
  g: number
  maxMark: number
}

/*
  Note: These are representative grade boundaries based on publicly available
  Cambridge data. Actual boundaries vary by series. Students should always
  check the official Cambridge website for the most recent thresholds.
*/
const EXTENDED_BOUNDARIES: BoundaryRow[] = [
  {
    series: 'Jun 2024',
    astar: 135,
    a: 122,
    b: 109,
    c: 96,
    d: 78,
    e: 60,
    f: 42,
    g: 24,
    maxMark: 160,
  },
  {
    series: 'Mar 2024',
    astar: 133,
    a: 120,
    b: 107,
    c: 94,
    d: 76,
    e: 58,
    f: 40,
    g: 22,
    maxMark: 160,
  },
  {
    series: 'Nov 2023',
    astar: 131,
    a: 118,
    b: 105,
    c: 92,
    d: 74,
    e: 56,
    f: 38,
    g: 20,
    maxMark: 160,
  },
  {
    series: 'Jun 2023',
    astar: 132,
    a: 119,
    b: 106,
    c: 93,
    d: 75,
    e: 57,
    f: 39,
    g: 21,
    maxMark: 160,
  },
  {
    series: 'Mar 2023',
    astar: 130,
    a: 117,
    b: 104,
    c: 91,
    d: 73,
    e: 55,
    f: 37,
    g: 19,
    maxMark: 160,
  },
  {
    series: 'Nov 2022',
    astar: 128,
    a: 115,
    b: 102,
    c: 89,
    d: 71,
    e: 53,
    f: 35,
    g: 17,
    maxMark: 160,
  },
]

interface CoreBoundaryRow {
  series: string
  c: number
  d: number
  e: number
  f: number
  g: number
  maxMark: number
}

const CORE_BOUNDARIES: CoreBoundaryRow[] = [
  { series: 'Jun 2024', c: 72, d: 58, e: 44, f: 30, g: 16, maxMark: 120 },
  { series: 'Mar 2024', c: 70, d: 56, e: 42, f: 28, g: 14, maxMark: 120 },
  { series: 'Nov 2023', c: 68, d: 55, e: 42, f: 29, g: 16, maxMark: 120 },
  { series: 'Jun 2023', c: 69, d: 56, e: 43, f: 30, g: 17, maxMark: 120 },
  { series: 'Mar 2023', c: 67, d: 54, e: 41, f: 28, g: 15, maxMark: 120 },
  { series: 'Nov 2022', c: 65, d: 52, e: 39, f: 26, g: 13, maxMark: 120 },
]

/* ─── Page component ─────────────────────────────────────────── */

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
      {/* ── Hero ────────────────────────────────────────────────── */}
      <section className="border-b bg-gradient-to-b from-primary/[0.06] to-transparent px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Cambridge IGCSE English Language
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Grade Boundaries
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Historical grade boundaries for Core and Extended tiers, what each grade looks like in
            practice, and targeted strategies for reaching the next level.
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
              href="/resources/english-language/caie"
              className="hover:text-foreground transition-colors"
            >
              CAIE English Language
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
              href="https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-igcse-english-first-language-0500/past-papers/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-semibold hover:text-warn-900"
            >
              official Cambridge website
            </a>{' '}
            for the most up-to-date boundaries after results day.
          </p>
        </div>

        {/* ── Core vs Extended explained ──────────────────────── */}
        <Section title={tr(`Core vs Extended tier: which one are you sitting?`)} defaultOpen>
          <p>
            Cambridge IGCSE English Language has two tiers, and the tier you sit determines which
            grades are available to you:
          </p>

          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border-2 border-primary/30 bg-primary/5 p-5">
              <h3 className="text-lg font-bold text-foreground">{tr(`Extended Tier`)}</h3>
              <p className="mt-1 text-sm font-medium text-muted-foreground">
                Paper 2 (Reading) + Paper 4 (Directed Writing &amp; Composition)
              </p>
              <ul className="mt-3 ml-5 list-disc space-y-1 text-sm">
                <li>
                  Grades available: <strong>A* &ndash; G</strong> (or 9&ndash;1 for the 9&ndash;1
                  grading variant)
                </li>
                <li>
                  Maximum combined mark: <strong>160</strong>
                </li>
                <li>{tr(`More challenging reading passages and questions`)}</li>
                <li>Required if targeting grade A* or A</li>
                <li>{tr(`Most international schools enter students for Extended`)}</li>
              </ul>
            </div>
            <div className="rounded-lg border border-border bg-muted p-5">
              <h3 className="text-lg font-bold text-muted-foreground">Core Tier</h3>
              <p className="mt-1 text-sm font-medium text-muted-foreground">
                {tr(`Paper 1 (Reading) + Paper 3 (Directed Writing &amp; Composition)`)}
              </p>
              <ul className="mt-3 ml-5 list-disc space-y-1 text-sm">
                <li>
                  Grades available: <strong>C &ndash; G</strong> (or 4&ndash;1 for the 9&ndash;1
                  grading variant)
                </li>
                <li>
                  Maximum combined mark: <strong>120</strong>
                </li>
                <li>More accessible reading passages</li>
                <li>{tr(`Maximum achievable grade is C`)}</li>
                <li>{tr(`Suitable for students who find the Extended paper too demanding`)}</li>
              </ul>
            </div>
          </div>

          <p className="mt-4 text-sm text-muted-foreground">
            If you are unsure which tier you are sitting, check with your teacher. The tier is
            decided before the exam, not after.
          </p>
        </Section>

        {/* ── Extended tier boundaries ────────────────────────── */}
        <Section title={tr(`Extended tier grade boundaries (Paper 2 + Paper 4)`)} defaultOpen>
          <p>
            The total number of marks across Paper 2 and Paper 4 is <strong>160</strong>. Your raw
            marks from both papers are combined to produce your overall grade. Below are approximate
            boundaries from recent exam series:
          </p>

          <div className="overflow-x-auto mt-4">
            <table className="w-full min-w-[700px] text-sm">
              <thead>
                <tr className="border-b-2 border-primary/20 text-left text-muted-foreground">
                  <th className="py-3 pr-3">Series</th>
                  <th className="py-3 pr-3 text-center bg-primary/10 font-semibold text-foreground">
                    A*
                  </th>
                  <th className="py-3 pr-3 text-center">A</th>
                  <th className="py-3 pr-3 text-center">B</th>
                  <th className="py-3 pr-3 text-center">C</th>
                  <th className="py-3 pr-3 text-center">D</th>
                  <th className="py-3 pr-3 text-center">E</th>
                  <th className="py-3 pr-3 text-center">F</th>
                  <th className="py-3 text-center">G</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {EXTENDED_BOUNDARIES.map((row) => (
                  <tr key={row.series}>
                    <td className="py-3 pr-3 font-medium">{row.series}</td>
                    <td className="py-3 pr-3 text-center bg-primary/5 font-semibold text-primary">
                      {row.astar}
                    </td>
                    <td className="py-3 pr-3 text-center">{row.a}</td>
                    <td className="py-3 pr-3 text-center">{row.b}</td>
                    <td className="py-3 pr-3 text-center">{row.c}</td>
                    <td className="py-3 pr-3 text-center">{row.d}</td>
                    <td className="py-3 pr-3 text-center">{row.e}</td>
                    <td className="py-3 pr-3 text-center">{row.f}</td>
                    <td className="py-3 text-center">{row.g}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-sm text-muted-foreground">
            Marks shown are the minimum total marks required to achieve each grade. For example, in
            June 2024, a total of 135 out of 160 was needed for an A*.
          </p>

          {/* Approximate percentages */}
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border-2 border-primary/30 bg-gradient-to-br from-primary/10 to-primary/5 p-4 text-center">
              <p className="text-3xl font-bold text-primary">84%+</p>
              <p className="mt-1 text-sm font-semibold text-foreground">A*</p>
              <p className="mt-1 text-xs text-muted-foreground">
                {tr(`Exceptional performance across all components`)}
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-4 text-center">
              <p className="text-3xl font-bold text-foreground">76%+</p>
              <p className="mt-1 text-sm font-semibold text-foreground">A</p>
              <p className="mt-1 text-xs text-muted-foreground">
                {tr(`Strong, confident responses with good analysis`)}
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-4 text-center">
              <p className="text-3xl font-bold text-foreground/80">68%+</p>
              <p className="mt-1 text-sm font-semibold text-foreground">B</p>
              <p className="mt-1 text-xs text-muted-foreground">
                {tr(`Good understanding with some strong analysis`)}
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-4 text-center">
              <p className="text-3xl font-bold text-muted-foreground">60%+</p>
              <p className="mt-1 text-sm font-semibold text-foreground">C</p>
              <p className="mt-1 text-xs text-muted-foreground">
                {tr(`Sound understanding of the basics`)}
              </p>
            </div>
          </div>

          <p className="mt-4 text-sm text-muted-foreground">
            These are approximate ranges based on recent trends. The actual percentages vary
            depending on the difficulty of each paper and overall candidate performance.
          </p>
        </Section>

        {/* ── Core tier boundaries ───────────────────────────── */}
        <Section title={tr(`Core tier grade boundaries (Paper 1 + Paper 3)`)}>
          <p>
            The total number of marks across Paper 1 and Paper 3 is <strong>120</strong>. The
            highest grade available on Core is <strong>C</strong>. Below are approximate boundaries
            from recent exam series:
          </p>

          <div className="overflow-x-auto mt-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-border text-left text-muted-foreground">
                  <th className="py-3 pr-3">Series</th>
                  <th className="py-3 pr-3 text-center font-semibold text-muted-foreground">C</th>
                  <th className="py-3 pr-3 text-center">D</th>
                  <th className="py-3 pr-3 text-center">E</th>
                  <th className="py-3 pr-3 text-center">F</th>
                  <th className="py-3 text-center">G</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {CORE_BOUNDARIES.map((row) => (
                  <tr key={row.series}>
                    <td className="py-3 pr-3 font-medium">{row.series}</td>
                    <td className="py-3 pr-3 text-center font-semibold text-muted-foreground">
                      {row.c}
                    </td>
                    <td className="py-3 pr-3 text-center">{row.d}</td>
                    <td className="py-3 pr-3 text-center">{row.e}</td>
                    <td className="py-3 pr-3 text-center">{row.f}</td>
                    <td className="py-3 text-center">{row.g}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-sm text-muted-foreground">
            Core tier boundaries are generally lower in absolute terms, but remember the maximum
            mark is also lower (120 vs 160). In percentage terms, a Core C typically requires around{' '}
            <strong>58&ndash;60%</strong>.
          </p>
        </Section>

        {/* ── 9-1 Grading (0990) ─────────────────────────────── */}
        <Section title="9-1 grading scale">
          <p>
            The 9&ndash;1 grading variant uses the 9&ndash;1 grading scale (aligned with the UK
            reformed GCSE system). The content and papers are identical to the A*&ndash;G variant
            &mdash; only the grading scale differs. Here is how the two scales map onto each other:
          </p>

          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-primary/20 text-left">
                  <th className="py-3 pr-4 font-semibold text-foreground">9&ndash;1 Grade</th>
                  <th className="py-3 pr-4 font-semibold text-foreground">
                    Equivalent A*&ndash;G Grade
                  </th>
                  <th className="py-3 font-semibold text-foreground">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-muted-foreground">
                <tr className="bg-primary/5">
                  <td className="py-3 pr-4 font-bold text-primary">9</td>
                  <td className="py-3 pr-4">High A*</td>
                  <td className="py-3">
                    {tr(`Exceptional &mdash; the very highest level of achievement`)}
                  </td>
                </tr>
                <tr className="bg-primary/5">
                  <td className="py-3 pr-4 font-bold text-primary">8</td>
                  <td className="py-3 pr-4">{tr(`Low A* / High A`)}</td>
                  <td className="py-3">
                    {tr(`Outstanding performance with sophisticated analysis and writing`)}
                  </td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-bold text-foreground">7</td>
                  <td className="py-3 pr-4">A</td>
                  <td className="py-3">{tr(`Very strong performance across all components`)}</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-bold text-foreground">6</td>
                  <td className="py-3 pr-4">High B</td>
                  <td className="py-3">Good performance with consistent quality</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-bold">5</td>
                  <td className="py-3 pr-4">{tr(`Low B / High C`)}</td>
                  <td className="py-3">
                    {tr(`Above average &mdash; solid understanding with some analysis`)}
                  </td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-bold">4</td>
                  <td className="py-3 pr-4">C</td>
                  <td className="py-3">
                    {tr(`Standard pass &mdash; demonstrates basic competence`)}
                  </td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-bold text-muted-foreground">3</td>
                  <td className="py-3 pr-4">D / E</td>
                  <td className="py-3">
                    {tr(`Below average &mdash; some understanding but inconsistent`)}
                  </td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-bold text-muted-foreground">2</td>
                  <td className="py-3 pr-4">E / F</td>
                  <td className="py-3">{tr(`Limited understanding and weak expression`)}</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-bold text-muted-foreground">1</td>
                  <td className="py-3 pr-4">G</td>
                  <td className="py-3">{tr(`Minimal evidence of understanding`)}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-sm text-muted-foreground">
            Key equivalences to remember: Grade 9 = top A*, Grade 7 = A, Grade 4 = C (standard
            pass). The 9&ndash;1 boundaries in raw marks are very similar to the A*&ndash;G variant
            &mdash; they are simply mapped to the different scale.
          </p>
        </Section>

        {/* ── What each grade looks like ──────────────────────── */}
        <Section title={tr(`What each grade looks like in practice`)}>
          <p>
            Understanding the grade descriptors helps you see exactly what markers expect at each
            level. Here is what typical work looks like at the key grade boundaries:
          </p>

          <div className="mt-4 space-y-6">
            <div className="rounded-lg border-l-4 border-primary bg-primary/5 p-5">
              <h3 className="text-lg font-bold text-foreground">
                {tr(`Grade A* (9) &mdash; Exceptional`)}
              </h3>
              <div className="mt-3 space-y-2 text-sm">
                <p>
                  <strong>{tr(`Reading (Paper 2 / Paper 1):`)}</strong>
                </p>
                <ul className="ml-5 list-disc space-y-1">
                  <li>
                    {tr(
                      `Perceptive, original analysis that goes beyond the surface meaning of the text.`,
                    )}
                  </li>
                  <li>
                    {tr(
                      `Precisely selected quotations seamlessly embedded and explored in detail.`,
                    )}
                  </li>
                  <li>
                    {tr(
                      `Confident discussion of how language choices create specific effects on the reader.`,
                    )}
                  </li>
                  <li>
                    Summary responses that cover all content points in fluent, concise own words
                    with varied syntax.
                  </li>
                  <li>
                    {tr(
                      `Sophisticated understanding of how writers use structure, tone, and register for effect.`,
                    )}
                  </li>
                </ul>
                <p className="mt-3">
                  <strong>{tr(`Writing (Paper 4 / Paper 3):`)}</strong>
                </p>
                <ul className="ml-5 list-disc space-y-1">
                  <li>
                    {tr(
                      `Directed writing that is entirely convincing in its adopted voice and format, with ideas that go beyond the passage.`,
                    )}
                  </li>
                  <li>
                    Composition writing with a distinctive, authentic voice that sustains the
                    reader&rsquo;s interest throughout.
                  </li>
                  <li>
                    {tr(
                      `Extensive, ambitious vocabulary used precisely and naturally &mdash; every word earns its place.`,
                    )}
                  </li>
                  <li>
                    {tr(
                      `Varied, inventive structural choices that shape meaning (e.g., cyclical structure, deliberate shifts in pace).`,
                    )}
                  </li>
                  <li>A full range of punctuation used accurately and for deliberate effect.</li>
                  <li>
                    Virtually flawless spelling and grammar, including complex and irregular words.
                  </li>
                </ul>
              </div>
            </div>

            <div className="rounded-lg border-l-4 border-primary bg-primary/5 p-5">
              <h3 className="text-lg font-bold text-foreground">
                {tr(`Grades A&ndash;B (7&ndash;8) &mdash; Strong`)}
              </h3>
              <div className="mt-3 space-y-2 text-sm">
                <p>
                  <strong>Reading:</strong>
                </p>
                <ul className="ml-5 list-disc space-y-1">
                  <li>
                    {tr(
                      `Detailed, well-developed analysis with clear explanations of language effects.`,
                    )}
                  </li>
                  <li>{tr(`Well-chosen quotations with thorough exploration of connotations.`)}</li>
                  <li>Summary covers 12&ndash;14 content points in own words with good fluency.</li>
                  <li>
                    {tr(
                      `Some exploration of why writers make specific choices and how techniques work together.`,
                    )}
                  </li>
                </ul>
                <p className="mt-3">
                  <strong>Writing:</strong>
                </p>
                <ul className="ml-5 list-disc space-y-1">
                  <li>
                    {tr(
                      `Engaging, well-crafted writing with a clear sense of purpose and audience.`,
                    )}
                  </li>
                  <li>
                    {tr(`Increasingly sophisticated vocabulary and phrasing used naturally.`)}
                  </li>
                  <li>
                    {tr(`Effective structural features that contribute to the overall effect.`)}
                  </li>
                  <li>{tr(`Wide range of sentence structures used for effect.`)}</li>
                  <li>Mostly accurate spelling and punctuation with only minor errors.</li>
                </ul>
              </div>
            </div>

            <div className="rounded-lg border-l-4 border-primary/60 bg-primary/5 p-5">
              <h3 className="text-lg font-bold text-foreground/80">
                {tr(`Grades C&ndash;D (4&ndash;5) &mdash; Competent`)}
              </h3>
              <div className="mt-3 space-y-2 text-sm">
                <p>
                  <strong>Reading:</strong>
                </p>
                <ul className="ml-5 list-disc space-y-1">
                  <li>
                    {tr(
                      `Some understanding of language effects, but explanations may be thin or general.`,
                    )}
                  </li>
                  <li>{tr(`Relevant quotations selected, though not always fully explored.`)}</li>
                  <li>
                    Summary covers 8&ndash;10 content points; may still rely on the passage&rsquo;s
                    wording.
                  </li>
                  <li>
                    {tr(
                      `May identify techniques without fully explaining their effect (feature-spotting).`,
                    )}
                  </li>
                </ul>
                <p className="mt-3">
                  <strong>Writing:</strong>
                </p>
                <ul className="ml-5 list-disc space-y-1">
                  <li>
                    {tr(
                      `Writing communicates with some clarity but may drift or lose focus in places.`,
                    )}
                  </li>
                  <li>
                    {tr(
                      `Some attempts at vocabulary for effect, though choices may lack precision.`,
                    )}
                  </li>
                  <li>
                    {tr(
                      `Basic structural features present (paragraphs, some variety in openings).`,
                    )}
                  </li>
                  <li>
                    {tr(
                      `Sentence demarcation mostly secure but some comma splicing or run-on sentences.`,
                    )}
                  </li>
                  <li>Spelling of common words accurate; errors with more complex vocabulary.</li>
                </ul>
              </div>
            </div>

            <div className="rounded-lg border-l-4 border-yellow-400 bg-yellow-500/10/30 p-5">
              <h3 className="text-lg font-bold text-yellow-700">
                {tr(`Grades E&ndash;F (2&ndash;3) &mdash; Developing`)}
              </h3>
              <div className="mt-3 space-y-2 text-sm">
                <p>
                  <strong>Reading:</strong>
                </p>
                <ul className="ml-5 list-disc space-y-1">
                  <li>
                    {tr(`Simple comments on language with limited or no analysis of effect.`)}
                  </li>
                  <li>{tr(`References that tend to paraphrase rather than quote selectively.`)}</li>
                  <li>Summary covers fewer than 8 content points; may copy from the text.</li>
                  <li>{tr(`May retell the text rather than analyse or evaluate it.`)}</li>
                </ul>
                <p className="mt-3">
                  <strong>Writing:</strong>
                </p>
                <ul className="ml-5 list-disc space-y-1">
                  <li>{tr(`Simple ideas with limited development.`)}</li>
                  <li>{tr(`Basic, everyday vocabulary with little variety.`)}</li>
                  <li>{tr(`Limited structural features; may lack clear paragraphing.`)}</li>
                  <li>
                    {tr(`Simple sentence forms; frequent errors in spelling and punctuation.`)}
                  </li>
                </ul>
              </div>
            </div>

            <div className="rounded-lg border-l-4 border-border bg-muted/50 p-5">
              <h3 className="text-lg font-bold text-muted-foreground">
                {tr(`Grade G (1) &mdash; Elementary`)}
              </h3>
              <div className="mt-3 space-y-2 text-sm">
                <p>
                  <strong>Reading:</strong>
                </p>
                <ul className="ml-5 list-disc space-y-1">
                  <li>{tr(`Minimal engagement with the text; may misunderstand the question.`)}</li>
                  <li>Very few references to the passage, if any.</li>
                  <li>{tr(`Summary attempts may be largely copied or irrelevant.`)}</li>
                </ul>
                <p className="mt-3">
                  <strong>Writing:</strong>
                </p>
                <ul className="ml-5 list-disc space-y-1">
                  <li>{tr(`Very basic communication; meaning may be unclear in places.`)}</li>
                  <li>{tr(`Very limited vocabulary.`)}</li>
                  <li>{tr(`No clear structure; errors significantly hinder understanding.`)}</li>
                </ul>
              </div>
            </div>
          </div>
        </Section>

        {/* ── Marks per component ─────────────────────────────── */}
        <Section title={tr(`Marks per component at a glance`)}>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-foreground">{tr(`Extended Tier`)}</h3>
              <div className="overflow-x-auto mt-3">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border text-left text-muted-foreground">
                      <th className="py-2 pr-4">Component</th>
                      <th className="py-2 pr-4">Content</th>
                      <th className="py-2 pr-4">Marks</th>
                      <th className="py-2 pr-4">Weighting</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="py-2 pr-4 font-semibold">Paper 2 &mdash; Reading</td>
                      <td className="py-2 pr-4">
                        {tr(`Comprehension, language analysis, summary, writer&rsquo;s effect`)}
                      </td>
                      <td className="py-2 pr-4">80</td>
                      <td className="py-2 pr-4">50%</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4 font-semibold">
                        {tr(`Paper 4 &mdash; Directed Writing &amp; Composition`)}
                      </td>
                      <td className="py-2 pr-4">
                        {tr(
                          `Directed writing (from passage), narrative or descriptive composition`,
                        )}
                      </td>
                      <td className="py-2 pr-4">80</td>
                      <td className="py-2 pr-4">50%</td>
                    </tr>
                    <tr className="font-bold">
                      <td className="py-2 pr-4">Total</td>
                      <td className="py-2 pr-4"></td>
                      <td className="py-2 pr-4">160</td>
                      <td className="py-2 pr-4">100%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-muted-foreground">Core Tier</h3>
              <div className="overflow-x-auto mt-3">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border text-left text-muted-foreground">
                      <th className="py-2 pr-4">Component</th>
                      <th className="py-2 pr-4">Content</th>
                      <th className="py-2 pr-4">Marks</th>
                      <th className="py-2 pr-4">Weighting</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="py-2 pr-4 font-semibold">{tr(`Paper 1 &mdash; Reading`)}</td>
                      <td className="py-2 pr-4">
                        {tr(`Comprehension, language analysis, summary`)}
                      </td>
                      <td className="py-2 pr-4">60</td>
                      <td className="py-2 pr-4">50%</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4 font-semibold">
                        {tr(`Paper 3 &mdash; Directed Writing &amp; Composition`)}
                      </td>
                      <td className="py-2 pr-4">
                        {tr(`Directed writing, narrative or descriptive composition`)}
                      </td>
                      <td className="py-2 pr-4">60</td>
                      <td className="py-2 pr-4">50%</td>
                    </tr>
                    <tr className="font-bold">
                      <td className="py-2 pr-4">Total</td>
                      <td className="py-2 pr-4"></td>
                      <td className="py-2 pr-4">120</td>
                      <td className="py-2 pr-4">100%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <p className="text-sm text-muted-foreground">
              Notice that reading and writing carry equal weight (50% each). Students who focus only
              on reading and neglect their writing skills are leaving half their marks on the table
              &mdash; and vice versa.
            </p>
          </div>
        </Section>

        {/* ── How to push your grade up ──────────────────────── */}
        <Section title={tr(`How to push your grade higher`)}>
          <p>
            Closing the gap between your current grade and your target is about targeted
            improvement. Here are specific strategies for moving from one grade band to the next:
          </p>

          <div className="mt-4 space-y-5">
            <div className="rounded-lg border border-border p-5">
              <h3 className="font-bold text-muted-foreground">{tr(`Grade D &rarr; Grade C`)}</h3>
              <ul className="mt-2 ml-5 list-disc space-y-2 text-sm">
                <li>
                  <strong>Reading:</strong> Make sure you are answering the question asked, not
                  writing about the passage generally. Check how many marks each question is worth
                  and provide that many distinct points. Always support your points with a short
                  quotation from the text.
                </li>
                <li>
                  <strong>Summary:</strong> Aim for at least 8&ndash;10 relevant content points.
                  Start using your own words instead of copying from the passage &mdash; practise
                  paraphrasing individual sentences as a daily exercise.
                </li>
                <li>
                  <strong>Writing:</strong> Focus on basic accuracy &mdash; full stops, capital
                  letters, consistent tense. Use paragraphs to organise your ideas. Make sure your
                  directed writing uses the correct format (letter, speech, article, etc.).
                </li>
                <li>
                  <strong>Timing:</strong> Ensure you attempt every question. Unanswered questions
                  are the single biggest reason students miss a grade C.
                </li>
              </ul>
            </div>

            <div className="rounded-lg border border-border p-5">
              <h3 className="font-bold text-foreground">{tr(`Grade C &rarr; Grade B`)}</h3>
              <ul className="mt-2 ml-5 list-disc space-y-2 text-sm">
                <li>
                  <strong>Reading:</strong> Start explaining the <em>effect</em> of language
                  choices, not just identifying them. Use the formula: identify the technique, quote
                  the example, then explain what it makes the reader think, feel, or picture.
                </li>
                <li>
                  <strong>Summary:</strong> Aim for 12+ content points. Improve the quality of your
                  own words &mdash; use a wider range of vocabulary and connectives. Group related
                  points together for a more fluent response.
                </li>
                <li>
                  <strong>Writing:</strong> Vary your sentence structures. Include at least
                  3&ndash;4 deliberate language techniques in your composition (simile, metaphor,
                  sensory detail, etc.). Use a wider range of punctuation: semicolons, colons, and
                  dashes.
                </li>
                <li>
                  <strong>{tr(`Directed writing:`)}</strong> Go beyond simply repeating ideas from
                  the passage. Add your own ideas that are relevant to the scenario.
                </li>
              </ul>
            </div>

            <div className="rounded-lg border border-border p-5">
              <h3 className="font-bold text-foreground">{tr(`Grade B &rarr; Grade A`)}</h3>
              <ul className="mt-2 ml-5 list-disc space-y-2 text-sm">
                <li>
                  <strong>Reading:</strong> Analyse connotations of individual words, not just whole
                  phrases. Discuss how multiple techniques work together to create an overall
                  effect. Comment on structure, tone, and register as well as language.
                </li>
                <li>
                  <strong>Summary:</strong> Aim for 14+ content points. Your writing quality should
                  be fluent, concise, and entirely in your own words with varied syntax and
                  vocabulary.
                </li>
                <li>
                  <strong>Writing:</strong> Develop a clear personal voice. Use sophisticated
                  vocabulary naturally (not forced). Ensure your composition has a deliberate
                  structure with purposeful language choices that could be analysed by a reader.
                </li>
                <li>
                  <strong>{tr(`Writer&rsquo;s effect:`)}</strong> This question separates A from B.
                  Practise explaining how specific words and phrases create images, atmosphere, and
                  emotional responses. Use the &ldquo;zoom in&rdquo; technique: quote a short
                  phrase, then explore the connotations of individual words within it.
                </li>
              </ul>
            </div>

            <div className="rounded-lg border-2 border-primary/30 bg-primary/5 p-5">
              <h3 className="font-bold text-primary">Grade A &rarr; Grade A*</h3>
              <ul className="mt-2 ml-5 list-disc space-y-2 text-sm">
                <li>
                  <strong>Reading:</strong> Offer perceptive, original interpretations. Consider
                  alternative readings: &ldquo;While one interpretation of this image suggests X, it
                  could equally be read as Y.&rdquo; Discuss how the writer&rsquo;s choices
                  contribute to the overall purpose and meaning of the text.
                </li>
                <li>
                  <strong>Summary:</strong> Hit all 15 content points. Writing should be polished,
                  with varied syntax and sophisticated use of own words throughout. Your summary
                  should read like a well-crafted piece of writing in its own right.
                </li>
                <li>
                  <strong>Writing:</strong> Every language choice should feel deliberate and
                  controlled. Show a confident, distinctive voice. Use techniques for specific,
                  analysable effects. Accuracy should be near-flawless.
                </li>
                <li>
                  <strong>Precision:</strong> Every word should earn its place. Cut unnecessary
                  phrases. Choose the single best word rather than listing adjectives. Make every
                  literary device feel organic and purposeful, not bolted on for the sake of it.
                </li>
                <li>
                  <strong>{tr(`Reading widely:`)}</strong> Students who achieve A* almost always
                  read extensively outside of class. Reading high-quality fiction, journalism, and
                  non-fiction gives you a larger vocabulary, a better sense of style, and more
                  sophisticated structural instincts.
                </li>
              </ul>
            </div>
          </div>
        </Section>

        {/* ── Common mistakes to avoid ────────────────────────── */}
        <Section title={tr(`Common mistakes that cost marks`)}>
          <p>These are the most frequent errors that hold students back from their target grade:</p>

          <div className="mt-4 space-y-4">
            <div className="rounded-lg bg-red-500/5 border border-red-500/15 p-4">
              <h3 className="font-semibold text-red-700 dark:text-red-300">
                {tr(`Reading responses`)}
              </h3>
              <ul className="mt-2 ml-5 list-disc space-y-1 text-sm text-muted-foreground">
                <li>
                  <strong>Feature-spotting</strong> &mdash; naming a technique (e.g., &ldquo;The
                  writer uses a metaphor&rdquo;) without explaining its effect. Always follow up
                  with &ldquo;This suggests / creates / emphasises...&rdquo;
                </li>
                <li>
                  <strong>{tr(`Retelling the story`)}</strong> &mdash; summarising what happens
                  instead of analysing how the writer achieves their effect.
                </li>
                <li>
                  <strong>{tr(`Ignoring the question focus`)}</strong> &mdash; writing a general
                  response about the passage instead of addressing the specific angle the question
                  asks about.
                </li>
                <li>
                  <strong>{tr(`Using overlong quotations`)}</strong> &mdash; quoting entire
                  sentences when a short, precise phrase would be more effective to analyse.
                </li>
              </ul>
            </div>

            <div className="rounded-lg bg-red-500/5 border border-red-500/15 p-4">
              <h3 className="font-semibold text-red-700 dark:text-red-300">
                {tr(`Summary responses`)}
              </h3>
              <ul className="mt-2 ml-5 list-disc space-y-1 text-sm text-muted-foreground">
                <li>
                  <strong>{tr(`Copying from the passage`)}</strong> &mdash; lifting whole phrases
                  instead of using your own words. Markers specifically look for evidence of your
                  own vocabulary.
                </li>
                <li>
                  <strong>Including irrelevant content</strong> &mdash; adding points that are not
                  relevant to the specific summary question.
                </li>
                <li>
                  <strong>{tr(`Writing too little`)}</strong> &mdash; many students under-write
                  their summary. Aim for a full, developed paragraph.
                </li>
              </ul>
            </div>

            <div className="rounded-lg bg-red-500/5 border border-red-500/15 p-4">
              <h3 className="font-semibold text-red-700 dark:text-red-300">
                {tr(`Writing responses`)}
              </h3>
              <ul className="mt-2 ml-5 list-disc space-y-1 text-sm text-muted-foreground">
                <li>
                  <strong>{tr(`Wrong format in directed writing`)}</strong> &mdash; writing a letter
                  when asked for a speech, or missing key features like addresses and sign-offs.
                </li>
                <li>
                  <strong>Overloading with techniques</strong> &mdash; cramming in every device you
                  know rather than using a few well-chosen ones for genuine effect.
                </li>
                <li>
                  <strong>{tr(`Weak endings`)}</strong> &mdash; trailing off or rushing the
                  conclusion. A strong ending can elevate the whole piece.
                </li>
                <li>
                  <strong>{tr(`Ignoring SPaG`)}</strong> &mdash; spelling, punctuation, and grammar
                  carry significant marks. Basic errors (comma splicing, inconsistent tense, missing
                  capital letters) add up quickly.
                </li>
              </ul>
            </div>
          </div>
        </Section>

        {/* ── Resources ──────────────────────────────────────── */}
        <Section title={tr(`Continue your revision`)}>
          <p>
            Now that you understand the grade boundaries, use our detailed study guides to build the
            skills you need:
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <Link
              href="/resources/english-language/caie/paper-1"
              className="rounded-lg border border-border p-4 transition-colors hover:border-primary/40 hover:bg-primary/5"
            >
              <p className="font-semibold text-foreground">{tr(`Paper 1: Reading (Core)`)}</p>
              <p className="mt-1 text-xs text-muted-foreground">
                {tr(`Comprehension, summary, and language analysis`)}
              </p>
            </Link>
            <Link
              href="/resources/english-language/caie/paper-2"
              className="rounded-lg border border-border p-4 transition-colors hover:border-primary/40 hover:bg-primary/5"
            >
              <p className="font-semibold text-foreground">{tr(`Paper 2: Reading (Extended)`)}</p>
              <p className="mt-1 text-xs text-muted-foreground">
                {tr(`Comprehension, summary, language analysis, and writer&rsquo;s effect`)}
              </p>
            </Link>
            <Link
              href="/resources/english-language/caie/techniques"
              className="rounded-lg border border-border p-4 transition-colors hover:border-primary/40 hover:bg-primary/5"
            >
              <p className="font-semibold text-foreground">{tr(`Language Techniques`)}</p>
              <p className="mt-1 text-xs text-muted-foreground">
                30+ techniques with examples and effects
              </p>
            </Link>
            <Link
              href="/resources/english-language/caie/writing-skills"
              className="rounded-lg border border-border p-4 transition-colors hover:border-primary/40 hover:bg-primary/5"
            >
              <p className="font-semibold text-foreground">{tr(`Writing Skills`)}</p>
              <p className="mt-1 text-xs text-muted-foreground">
                {tr(`All formats, summary technique, and composition`)}
              </p>
            </Link>
          </div>
        </Section>

        {/* Back link */}
        <div className="pt-4">
          <Link
            href="/resources/english-language/caie"
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
            {t('study.lang.caie.back')}
          </Link>
        </div>
      </div>

      <ExamBoardDisclaimer />
    </>
  )
}
