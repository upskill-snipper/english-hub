import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AQA Language Paper 2 Question 4: Comparison (16 Marks) | The English Hub',
  description:
    'How to answer AQA English Language Paper 2 Question 4, the 16-mark comparison question. Methods, attitudes, synthesis phrases. Written by GCSE examiners.',
  alternates: {
    canonical:
      'https://theenglishhub.app/analysis/language-paper/aqa-language-paper-2-question-4-comparison',
  },
}

const related = [
  { slug: 'paper-2-comparison-question-phrases-to-use', title: 'Paper 2 comparison question — phrases to use' },
  { slug: 'aqa-language-paper-2-question-3-language', title: 'Paper 2 Question 3 — language' },
  { slug: 'aqa-language-paper-2-question-2-summary', title: 'Paper 2 Question 2 — summary' },
  { slug: 'common-mistakes-aqa-language-paper-2', title: 'Common mistakes in AQA Language Paper 2' },
]

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'AQA Language Paper 2 Question 4: Comparison (16 Marks)',
    description:
      'How to answer AQA English Language Paper 2 Question 4, the 16-mark comparison question comparing writers&#39; attitudes and methods.',
    author: { '@type': 'Organization', name: 'The English Hub' },
    publisher: { '@type': 'Organization', name: 'The English Hub' },
    mainEntityOfPage:
      'https://theenglishhub.app/analysis/language-paper/aqa-language-paper-2-question-4-comparison',
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
        <span className="text-foreground">Paper 2 Question 4 comparison</span>
      </nav>

      <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
        AQA Language Paper 2 Question 4: comparison (16 marks)
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">Written by GCSE examiners</p>

      <article className="mt-8 space-y-6 text-base leading-relaxed text-muted-foreground">
        <p>
          Question 4 is the biggest reading question on Paper 2, worth sixteen marks,
          and the one most students dread. It asks you to compare the two writers&apos;
          attitudes and the methods they use to convey those attitudes. It is a double
          assessment: you have to show you understand what both writers think, and you
          have to show you can analyse how they express it. This guide gives you a
          reliable structure that hits both requirements every time.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">The exact wording</h2>
        <p>
          The question usually says: &ldquo;For this question, you need to refer to the
          whole of Source A, together with the whole of Source B. Compare how the two
          writers convey their different attitudes to [topic]. In your answer, you
          could: compare their different attitudes, compare the methods they use to
          convey their attitudes, and support your response with references to both
          texts.&rdquo;
        </p>

        <h2 className="text-2xl font-semibold text-foreground">The mark scheme in plain English</h2>
        <p>
          Level 4 (13 to 16 marks) rewards perceptive comparison, analysis of how
          writers use methods, well-chosen detail from both texts, and perceptive
          understanding of different perspectives. The word &ldquo;perceptive&rdquo;
          is the one examiners reach for when a student compares attitudes clearly and
          analyses method in the same paragraph, not in two different paragraphs.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">The four-paragraph shape</h2>
        <ol className="list-decimal space-y-2 pl-6">
          <li>
            <strong>Overall comparison.</strong> Open with a single sentence stating the
            broadest difference between the two writers&apos; attitudes.
          </li>
          <li>
            <strong>Attitude comparison 1.</strong> Quote Source A, quote Source B on the
            same topic, and identify a specific difference in attitude.
          </li>
          <li>
            <strong>Method comparison 1.</strong> Analyse how each writer uses a method
            (emotive language, tone, imagery) to convey that attitude.
          </li>
          <li>
            <strong>Attitude and method comparison 2.</strong> Repeat with a second,
            different point, ideally one that shows nuance or partial agreement.
          </li>
        </ol>

        <h2 className="text-2xl font-semibold text-foreground">Worked paragraph</h2>
        <p>
          <em>Both writers discuss the sea, but their attitudes could not be more
          different. The Victorian traveller in Source A describes the ocean as &ldquo;a
          vast, glittering promise&rdquo;, using metaphor and warm, hopeful imagery to
          convey excitement and optimism. In contrast, the modern journalist in Source B
          calls it &ldquo;an unforgiving grey expanse&rdquo;, where the harsh adjective
          &ldquo;unforgiving&rdquo; and the dull, colourless &ldquo;grey&rdquo; combine
          to create a sense of threat and futility. The difference is not just
          atmospheric: the Victorian writer sees the sea as something to be entered,
          while the modern writer sees it as something to be survived. This perhaps
          reflects the shift from Victorian optimism about exploration to a modern
          awareness of climate and risk.</em>
        </p>
        <p>
          Notice how the paragraph moves from attitude (excitement vs threat) to method
          (metaphor and adjective choice) without ever separating them. That is the
          shape that earns top-band marks.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Comparative connectives</h2>
        <p>
          Use explicit comparison words in every paragraph: whereas, in contrast, unlike,
          similarly, both, conversely, on the other hand. Examiners mark for comparison,
          not for two parallel analyses sitting side by side.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Attitude versus method</h2>
        <p>
          The single most common mistake on Question 4 is to compare the texts only on
          attitude, or only on method. You need both. A strong paragraph makes the
          attitude point first (&ldquo;A is enthusiastic, B is weary&rdquo;) and then
          shows how each writer&apos;s chosen method creates that impression
          (&ldquo;A uses warm adjectives, B uses cold ones&rdquo;).
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Timing</h2>
        <p>
          Twenty minutes. Two paragraphs at ten minutes each, or four shorter paragraphs
          if you prefer. Go over twenty-two and you risk eating into your writing
          section, which costs more marks than you will save.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Examiner tip</h2>
        <p>
          End every paragraph with a sentence about why the writers&apos; attitudes might
          be different — historical context, intended audience, personal background. A
          single sentence of contextual awareness per paragraph pushes an answer from
          Level 3 into Level 4 more reliably than any other habit.
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
