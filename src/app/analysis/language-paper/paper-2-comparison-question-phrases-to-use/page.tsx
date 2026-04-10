import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Paper 2 Comparison Question: Phrases to Use | The English Hub',
  description:
    'The exact comparative phrases to use on AQA English Language Paper 2 Question 4. Sentence stems, connectives and synthesis language. Written by GCSE examiners.',
  alternates: {
    canonical:
      'https://theenglishhub.app/analysis/language-paper/paper-2-comparison-question-phrases-to-use',
  },
}

const related = [
  { slug: 'aqa-language-paper-2-question-4-comparison', title: 'Paper 2 Question 4 — comparison' },
  { slug: 'paper-2-summary-question-step-by-step', title: 'Paper 2 summary step-by-step' },
  { slug: 'aqa-language-paper-2-question-2-summary', title: 'Paper 2 Question 2 — summary' },
  { slug: 'language-paper-grade-9-vocabulary-bank', title: 'Grade 9 vocabulary bank' },
]

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Paper 2 Comparison Question: Phrases to Use',
    description:
      'The exact comparative phrases to use on AQA English Language Paper 2 Question 4.',
    author: { '@type': 'Organization', name: 'The English Hub' },
    publisher: { '@type': 'Organization', name: 'The English Hub' },
    mainEntityOfPage:
      'https://theenglishhub.app/analysis/language-paper/paper-2-comparison-question-phrases-to-use',
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
        <span className="text-foreground">Paper 2 comparison phrases</span>
      </nav>

      <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
        Paper 2 comparison question: the phrases Grade 9 students actually use
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">Written by GCSE examiners</p>

      <article className="mt-8 space-y-6 text-base leading-relaxed text-muted-foreground">
        <p>
          Nothing wrecks a Question 4 comparison faster than flat connectives. When every
          paragraph starts with &ldquo;also&rdquo; or &ldquo;but&rdquo;, the examiner
          cannot tell what kind of comparison you are making. A Grade 9 answer uses a
          specific vocabulary of comparative phrases, each chosen to signal whether you
          are showing difference, similarity, degree or contradiction. This guide is a
          bank of those phrases and the exact moments you should use each one.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Opening comparisons</h2>
        <p>
          Your opening sentence should set up the whole comparison. Use:
        </p>
        <ul className="list-disc space-y-1 pl-6">
          <li>Both writers explore&hellip; but they approach the subject from very different angles.</li>
          <li>While Source A presents&hellip; Source B offers a markedly different perspective.</li>
          <li>The two writers agree that&hellip; yet they diverge sharply on&hellip;</li>
          <li>At first glance these two sources seem to share&hellip; but closer reading reveals&hellip;</li>
        </ul>

        <h2 className="text-2xl font-semibold text-foreground">Showing contrast</h2>
        <ul className="list-disc space-y-1 pl-6">
          <li>In contrast,</li>
          <li>Whereas Source A&hellip; Source B&hellip;</li>
          <li>Unlike the writer of Source A, the writer of Source B&hellip;</li>
          <li>Conversely,</li>
          <li>The writer of Source B takes the opposite view when&hellip;</li>
          <li>On the other hand,</li>
        </ul>

        <h2 className="text-2xl font-semibold text-foreground">Showing similarity with nuance</h2>
        <ul className="list-disc space-y-1 pl-6">
          <li>Both writers share a sense that&hellip;</li>
          <li>Similarly, the writer of Source B&hellip;</li>
          <li>Like the Source A writer, Source B&hellip; although to a different degree.</li>
          <li>Both writers draw on&hellip; but for different reasons.</li>
          <li>The two texts share a common concern, though they express it differently.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-foreground">Showing degree</h2>
        <ul className="list-disc space-y-1 pl-6">
          <li>Source A&apos;s tone is more cautious than Source B&apos;s.</li>
          <li>Where Source A merely suggests, Source B insists.</li>
          <li>The contrast is one of degree rather than kind&hellip;</li>
          <li>Source B pushes this further by&hellip;</li>
        </ul>

        <h2 className="text-2xl font-semibold text-foreground">Analysing method, not just content</h2>
        <p>
          Remember Question 4 rewards comparison of methods, not just attitudes. Use
          phrases that make method explicit:
        </p>
        <ul className="list-disc space-y-1 pl-6">
          <li>Source A achieves this through&hellip; while Source B relies on&hellip;</li>
          <li>The two writers use contrasting rhetorical strategies&hellip;</li>
          <li>Source A chooses metaphor where Source B chooses statistic.</li>
          <li>Both writers use direct address, but to very different effect.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-foreground">Interpretive phrases</h2>
        <p>
          Every comparison paragraph should end with a sentence of interpretation. Use:
        </p>
        <ul className="list-disc space-y-1 pl-6">
          <li>This suggests that&hellip;</li>
          <li>The difference reflects&hellip;</li>
          <li>This perhaps indicates that&hellip;</li>
          <li>A perceptive reader might see this as&hellip;</li>
          <li>The contrast implies that&hellip;</li>
          <li>This divergence arguably reveals&hellip;</li>
        </ul>

        <h2 className="text-2xl font-semibold text-foreground">Worked paragraph using these phrases</h2>
        <p>
          <em>Both writers explore the loneliness of travel, but they approach the
          subject from very different angles. While Source A dwells on the quiet
          pleasure of solitude, using gentle imagery of &ldquo;empty roads&rdquo; and
          &ldquo;uninterrupted skies&rdquo;, Source B insists that solitude is a burden,
          describing the same kind of journey as &ldquo;days of swallowing
          silence&rdquo;. The two writers share a common concern with isolation but
          express it differently: Source A treats it as a gift, Source B as a wound.
          This difference perhaps reflects the shift from the Victorian romance of
          travel to a modern anxiety about disconnection.</em>
        </p>

        <h2 className="text-2xl font-semibold text-foreground">One-paragraph rule</h2>
        <p>
          Never write two comparative phrases in the same sentence. One phrase per
          paragraph is usually enough; two is the maximum. Grade 9 answers earn marks
          for precision, not for stuffing signposting into every clause.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Examiner tip</h2>
        <p>
          Learn five phrases from this page by heart and practise them in timed
          paragraphs. Within a week, comparative phrasing will become automatic and
          Question 4 will stop feeling like a translation exercise.
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
