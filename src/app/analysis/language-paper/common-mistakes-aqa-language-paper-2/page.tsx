import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Common Mistakes in AQA Language Paper 2 | The English Hub',
  description:
    'The most common mistakes students make in AQA English Language Paper 2 — and how to avoid each one. Written by GCSE examiners.',
  alternates: {
    canonical:
      'https://theenglishhub.app/analysis/language-paper/common-mistakes-aqa-language-paper-2',
  },
}

const related = [
  { slug: 'aqa-language-paper-2-question-2-summary', title: 'Paper 2 Question 2 — summary' },
  { slug: 'aqa-language-paper-2-question-4-comparison', title: 'Paper 2 Question 4 — comparison' },
  { slug: 'paper-2-comparison-question-phrases-to-use', title: 'Paper 2 comparison phrases' },
  { slug: 'aqa-language-paper-2-question-5-transactional', title: 'Paper 2 Question 5 — transactional writing' },
]

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Common Mistakes in AQA Language Paper 2',
    description:
      'The most common mistakes students make in AQA English Language Paper 2.',
    author: { '@type': 'Organization', name: 'The English Hub' },
    publisher: { '@type': 'Organization', name: 'The English Hub' },
    mainEntityOfPage:
      'https://theenglishhub.app/analysis/language-paper/common-mistakes-aqa-language-paper-2',
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
        <span className="text-foreground">Common mistakes Paper 2</span>
      </nav>

      <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
        Common mistakes in AQA Language Paper 2
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">Written by GCSE examiners</p>

      <article className="mt-8 space-y-6 text-base leading-relaxed text-muted-foreground">
        <p>
          Paper 2 trips students up in specific, repeatable ways that examiners see
          every year. Unlike Paper 1, where the mistakes tend to be about technique,
          Paper 2 errors are more often about failing to notice what the questions
          actually ask for. This guide lists the ten most common Paper 2 mistakes so
          you can cross each one off your list in the fortnight before the exam.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">1. Shading the wrong boxes on Question 1</h2>
        <p>
          Students shade statements that are nearly true but include one changed word.
          The fix is to find the exact line in the source that supports each claim
          before shading.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">2. Writing about language on Question 2</h2>
        <p>
          Question 2 is a summary, not a language analysis. Avoid quoting similes. Focus
          on differences in fact and impression.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">3. Listing without interpreting on Question 2</h2>
        <p>
          Three facts about Source A followed by three facts about Source B is Level 2.
          Every paragraph must interpret what the difference reveals.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">4. Forgetting both sources in each paragraph</h2>
        <p>
          On Question 2 and Question 4, both sources must appear in every paragraph.
          One paragraph about Source A and a separate paragraph about Source B is
          parallel analysis, not comparison.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">5. Only analysing content on Question 4</h2>
        <p>
          Question 4 rewards comparison of attitude <em>and</em> method. Students who
          only compare what the writers say, without commenting on how they say it, cap
          at Level 3.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">6. Treating Paper 2 Q3 like Paper 1 Q2</h2>
        <p>
          Paper 2 Question 3 is about non-fiction. You should be looking for rhetorical
          devices (direct address, rhetorical question, statistic, anecdote), not
          pathetic fallacy.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">7. Ignoring form on Question 5</h2>
        <p>
          No headline on an article, no greeting on a letter, no direct address in a
          speech. Each of these costs easy form marks.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">8. One-sided arguments</h2>
        <p>
          The counter-argument paragraph is the single fastest way to push Question 5
          from Level 3 to Level 4. Skipping it makes you sound immature.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">9. Rhetorical overload</h2>
        <p>
          Five rhetorical questions in a row feel desperate. Pace your techniques
          across the whole piece: one or two rhetorical questions, one tricolon, one
          anecdote, one statistic, one moment of emotive vocabulary.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">10. Not proof-reading Question 5</h2>
        <p>
          Sixteen marks on technical accuracy. Three to five minutes at the end will
          rescue at least three of them.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Three time-management traps</h2>
        <p>
          <strong>Spending too long on Question 4.</strong> Sixteen marks is the
          second-largest reading question, but twenty-two minutes is the maximum.
          Beyond that, you are eating into Question 5.
        </p>
        <p>
          <strong>Rushing Question 3 because you panicked on Question 2.</strong> Take
          a breath between questions. Each one is a fresh mark scheme.
        </p>
        <p>
          <strong>Leaving Question 5 until the last thirty minutes.</strong> Forty
          marks and forty minutes minimum. Start on time, every time.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Examiner tip</h2>
        <p>
          The single most useful revision activity for Paper 2 is to write the same
          Question 2 or Question 4 three times on different pairs of sources. Pattern
          recognition comes faster than you would expect, and comparison becomes a
          reflex rather than a struggle.
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
            This guide is one resource in a wider set. Open the full Language revision
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
