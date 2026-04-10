import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AQA Language Paper 2 Question 1: True or False (4 Marks) | The English Hub',
  description:
    'How to answer AQA English Language Paper 2 Question 1, the true/false statements question worth 4 marks. Method, traps and worked example. Written by GCSE examiners.',
  alternates: {
    canonical:
      'https://theenglishhub.app/analysis/language-paper/aqa-language-paper-2-question-1-true-false',
  },
}

const related = [
  { slug: 'aqa-language-paper-2-question-2-summary', title: 'Paper 2 Question 2 — summary' },
  { slug: 'aqa-language-paper-2-question-4-comparison', title: 'Paper 2 Question 4 — comparison' },
  { slug: 'common-mistakes-aqa-language-paper-2', title: 'Common mistakes in AQA Language Paper 2' },
  { slug: 'paper-2-summary-question-step-by-step', title: 'Paper 2 summary question step-by-step' },
]

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'AQA Language Paper 2 Question 1: True or False (4 Marks)',
    description:
      'How to answer AQA English Language Paper 2 Question 1, the true/false statements question worth 4 marks.',
    author: { '@type': 'Organization', name: 'The English Hub' },
    publisher: { '@type': 'Organization', name: 'The English Hub' },
    mainEntityOfPage:
      'https://theenglishhub.app/analysis/language-paper/aqa-language-paper-2-question-1-true-false',
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav className="mb-4 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/analysis/language-paper" className="hover:text-foreground">Language Paper</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">Paper 2 Question 1 true/false</span>
      </nav>

      <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
        AQA Language Paper 2 Question 1: true or false (4 marks)
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">Written by GCSE examiners</p>

      <article className="mt-8 space-y-6 text-base leading-relaxed text-muted-foreground">
        <p>
          Question 1 on Paper 2 is a gift and a trap. The examiner gives you eight
          statements about a specific part of one of the two sources and asks you to
          shade the boxes next to the four that are true. Most students assume it is
          easy. Most students lose at least one mark. This guide shows you why the
          statements are so carefully written to trick you, and how to avoid every trap.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">What the question looks like</h2>
        <p>
          The wording is: &ldquo;Read again the first part of Source A, from lines X to Y.
          Choose four statements below which are true. Shade the boxes of the ones that
          you think are true.&rdquo; You are given eight statements and told that each
          true statement is worth one mark. Shade more than four and you lose marks;
          shade fewer than four and you throw marks away.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">The mark scheme in plain English</h2>
        <p>
          Each correct shading is worth one mark. There are no half-marks and no
          explanations required. The only way to score is to shade exactly the right
          four boxes. Question 1 on Paper 2 is a reading accuracy test, not an analysis
          test.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">The three traps</h2>
        <p>
          <strong>The nearly-true trap.</strong> A statement sounds almost right but one
          word has been changed. The source says the man was &ldquo;tall&rdquo; but the
          statement says he was &ldquo;the tallest man in the room&rdquo;. False.
        </p>
        <p>
          <strong>The outside-the-range trap.</strong> A statement is factually true
          about the source but the detail it refers to happens outside the specified
          line range. False.
        </p>
        <p>
          <strong>The inference trap.</strong> The statement asks you to interpret rather
          than read. &ldquo;The narrator is afraid&rdquo; might be true in spirit but if
          the word &ldquo;afraid&rdquo; does not appear and no clear synonym does, you
          should be suspicious.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">The method</h2>
        <ol className="list-decimal space-y-2 pl-6">
          <li>Underline the line range the question specifies.</li>
          <li>Read each statement once and tick it with a pencil mark — T, F or M (maybe).</li>
          <li>For every T or M, find the exact line in the source that supports it and write the line number in the margin.</li>
          <li>If you cannot find a supporting line, the statement is false.</li>
          <li>If you have more than four ticks, re-read each carefully and downgrade the weakest to M.</li>
          <li>Shade the four strongest.</li>
        </ol>

        <h2 className="text-2xl font-semibold text-foreground">Worked example</h2>
        <p>
          Source lines: <em>The station was crowded that morning. A man in a grey coat
          stood on platform four, reading a newspaper. Beside him, a small boy held a
          leather suitcase with both hands. The train was fifteen minutes late.</em>
        </p>
        <ul className="list-disc space-y-1 pl-6">
          <li>1. The station was busy. <strong>True</strong> (&ldquo;crowded&rdquo;).</li>
          <li>2. The man is waiting on platform three. <strong>False</strong> (platform four).</li>
          <li>3. The man is reading a newspaper. <strong>True</strong>.</li>
          <li>4. The boy is carrying a leather suitcase. <strong>True</strong>.</li>
          <li>5. The boy is the man&apos;s son. <strong>False</strong> (not stated).</li>
          <li>6. The train arrived on time. <strong>False</strong> (it was fifteen minutes late).</li>
          <li>7. The train was late. <strong>True</strong>.</li>
          <li>8. The boy is holding the suitcase with one hand. <strong>False</strong> (both hands).</li>
        </ul>
        <p>Four true: 1, 3, 4 and 7. Shade those boxes.</p>

        <h2 className="text-2xl font-semibold text-foreground">Timing</h2>
        <p>
          Question 1 should take no more than five minutes. You are aiming for four out
          of four with time to spare, so that you can move confidently into the harder
          summary question next.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Examiner tip</h2>
        <p>
          If you find yourself choosing between two plausible statements, always go with
          the one where you can point to a specific word in the source. The examiner
          will always reward readers who can trace their answer back to the text, and
          punish readers who infer beyond it.
        </p>

        <div className="rounded-xl border border-border bg-card p-6">
          <h3 className="text-lg font-semibold text-foreground">Related guides</h3>
          <ul className="mt-3 space-y-2 text-sm">
            {related.map((r) => (
              <li key={r.slug}>
                <Link href={`/analysis/language-paper/${r.slug}`} className="text-primary hover:underline">
                  {r.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border border-border bg-muted/40 p-6">
          <h3 className="text-lg font-semibold text-foreground">Revise the whole paper</h3>
          <p className="mt-2 text-sm">
            This guide is one question in a larger paper. Open the full Language revision
            hub to work through reading, writing and SPAG in order.
          </p>
          <div className="mt-4">
            <Link
              href="/revision/language"
              className="inline-flex h-10 items-center justify-center rounded-lg bg-primary px-4 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/85"
            >
              Open the Language revision hub
            </Link>
          </div>
        </div>
      </article>
    </main>
  )
}
