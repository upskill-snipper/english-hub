import type { Metadata } from 'next'
import Link from 'next/link'
import { ExamBoardDisclaimer } from '@/components/ExamBoardDisclaimer'

/* ─── Metadata ───────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: 'OCR GCSE English Language resources — The English Hub',
  description:
    'OCR GCSE English Language resources. Paper 1 and Paper 2 breakdowns, spoken language assessment, writing skills, mark schemes and grade boundaries.',
  alternates: { canonical: 'https://theenglishhub.app/resources/english-language/ocr' },
}

/* ─── Data ───────────────────────────────────────────────────── */

const sections = [
  {
    title: 'Paper 1: Communicating Information and Ideas',
    href: '/resources/english-language/ocr/paper-1',
    description:
      'Non-fiction and literary non-fiction reading, plus writing to present information and ideas. Worth 50% of the GCSE.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
        />
      </svg>
    ),
  },
  {
    title: 'Paper 2: Exploring Effects and Impact',
    href: '/resources/english-language/ocr/paper-2',
    description:
      'Fiction and literary text reading, plus imaginative and creative writing. Worth 50% of the GCSE.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
        />
      </svg>
    ),
  },
  {
    title: 'Spoken Language Endorsement',
    href: '/resources/english-language/ocr/spoken-language',
    description:
      'Separately reported endorsement for presenting, listening, and responding. Graded Pass, Merit, or Distinction.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z"
        />
      </svg>
    ),
  },
  {
    title: 'Techniques Guide',
    href: '/resources/english-language/ocr/techniques',
    description:
      'Comprehensive guide to language and structural techniques you need for OCR English Language analysis.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
        />
      </svg>
    ),
  },
  {
    title: 'Writing Skills',
    href: '/resources/english-language/ocr/writing-skills',
    description:
      'OCR-specific writing guidance covering writing for real purposes, creative writing, and how to hit the top band.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
        />
      </svg>
    ),
  },
  {
    title: 'Grade Boundaries',
    href: '/resources/english-language/ocr/grade-boundaries',
    description:
      'Historical grade boundaries for OCR GCSE English Language. See the marks needed for each grade across past series.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
        />
      </svg>
    ),
  },
]

/* ─── Page component ─────────────────────────────────────────── */

export default function OCREnglishLanguagePage() {
  return (
    <>
      {/* ── Hero banner ─────────────────────────────────────────── */}
      <section className="border-b bg-gradient-to-b from-primary/[0.06] to-transparent px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            OCR GCSE (J351)
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            English Language
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            Everything you need to revise for OCR GCSE English Language. Two examined components
            plus a spoken language endorsement.
          </p>
        </div>
      </section>

      {/* ── Specification overview ──────────────────────────────── */}
      <div className="mx-auto max-w-4xl px-4 py-12 sm:py-16">
        <section aria-labelledby="overview-heading">
          <h2 id="overview-heading" className="text-2xl font-bold text-foreground">
            Specification Overview
          </h2>
          <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              The OCR GCSE English Language specification (J351) is designed to inspire and engage
              students through a wide range of texts and writing tasks. The qualification is
              assessed through two examined components, each worth 50% of the GCSE, plus a
              separately endorsed spoken language component.
            </p>
            <div className="overflow-x-auto">
              <table className="mt-4 w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b-2 border-primary/20 text-left">
                    <th className="py-3 pr-4 font-semibold text-foreground">Component</th>
                    <th className="py-3 pr-4 font-semibold text-foreground">Title</th>
                    <th className="py-3 pr-4 font-semibold text-foreground">Weighting</th>
                    <th className="py-3 font-semibold text-foreground">Duration</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="py-3 pr-4 font-medium">01</td>
                    <td className="py-3 pr-4">Communicating Information and Ideas</td>
                    <td className="py-3 pr-4">50%</td>
                    <td className="py-3">2 hours</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium">02</td>
                    <td className="py-3 pr-4">Exploring Effects and Impact</td>
                    <td className="py-3 pr-4">50%</td>
                    <td className="py-3">2 hours</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium">03</td>
                    <td className="py-3 pr-4">Spoken Language Endorsement</td>
                    <td className="py-3 pr-4">Separate</td>
                    <td className="py-3">N/A</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* ── Section cards ─────────────────────────────────────── */}
        <section aria-labelledby="resources-heading">
          <h2 id="resources-heading" className="text-2xl font-bold text-foreground">
            Study Resources
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {sections.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group flex flex-col rounded-xl border border-border bg-card p-6 shadow-md transition hover:border-accent/40 hover:shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-accent transition group-hover:bg-primary/15">
                  {s.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground group-hover:text-accent">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {s.description}
                </p>
              </Link>
            ))}
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* ── Assessment objectives ─────────────────────────────── */}
        <section aria-labelledby="ao-heading">
          <h2 id="ao-heading" className="text-2xl font-bold text-foreground">
            Key Skills Assessed
          </h2>
          <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Understanding the key skills assessed is essential for knowing what the marker is
              looking for. OCR English Language tests the following skills:
            </p>
            <div className="space-y-3">
              <div className="rounded-lg border border-border bg-muted p-4">
                <p className="font-semibold text-foreground">
                  Retrieval and inference &mdash; Reading
                </p>
                <p className="mt-1 text-sm">
                  Identify and interpret explicit and implicit information and ideas. Select and
                  synthesise evidence from different texts.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-muted p-4">
                <p className="font-semibold text-foreground">Language analysis &mdash; Reading</p>
                <p className="mt-1 text-sm">
                  Explain, comment on and analyse how writers use language and structure to achieve
                  effects and influence readers, using relevant subject terminology to support their
                  views.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-muted p-4">
                <p className="font-semibold text-foreground">Comparison &mdash; Reading</p>
                <p className="mt-1 text-sm">
                  Compare writers&rsquo; ideas and perspectives, as well as how these are conveyed,
                  across two or more texts.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-muted p-4">
                <p className="font-semibold text-foreground">Evaluation &mdash; Reading</p>
                <p className="mt-1 text-sm">
                  Evaluate texts critically and support this with appropriate textual references.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-muted p-4">
                <p className="font-semibold text-foreground">
                  Content and organisation &mdash; Writing
                </p>
                <p className="mt-1 text-sm">
                  Communicate clearly, effectively and imaginatively, selecting and adapting tone,
                  style and register for different forms, purposes and audiences. Organise
                  information and ideas, using structural and grammatical features to support
                  coherence and cohesion of texts.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-muted p-4">
                <p className="font-semibold text-foreground">Technical accuracy &mdash; Writing</p>
                <p className="mt-1 text-sm">
                  Use a range of vocabulary and sentence structures for clarity, purpose and effect,
                  with accurate spelling and punctuation.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-muted p-4">
                <p className="font-semibold text-foreground">Presenting &mdash; Spoken Language</p>
                <p className="mt-1 text-sm">Demonstrate presentation skills in a formal setting.</p>
              </div>
              <div className="rounded-lg border border-border bg-muted p-4">
                <p className="font-semibold text-foreground">
                  Listening and responding &mdash; Spoken Language
                </p>
                <p className="mt-1 text-sm">
                  Listen and respond appropriately to spoken language, including to questions and
                  feedback on presentations.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-muted p-4">
                <p className="font-semibold text-foreground">
                  Standard English &mdash; Spoken Language
                </p>
                <p className="mt-1 text-sm">
                  Use spoken Standard English effectively in speeches and presentations.
                </p>
              </div>
            </div>
          </div>
        </section>

        <ExamBoardDisclaimer variant="content" className="mt-12" />
      </div>
    </>
  )
}
