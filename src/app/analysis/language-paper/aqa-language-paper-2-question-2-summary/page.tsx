import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AQA Language Paper 2 Question 2: Summary (8 Marks) | The English Hub',
  description:
    'How to answer AQA English Language Paper 2 Question 2, the summary question worth 8 marks. Inference, contrast, quotations. Written by GCSE examiners.',
  alternates: {
    canonical:
      'https://theenglishhub.app/analysis/language-paper/aqa-language-paper-2-question-2-summary',
  },
}

const related = [
  { slug: 'paper-2-summary-question-step-by-step', title: 'Paper 2 summary question step-by-step' },
  { slug: 'aqa-language-paper-2-question-4-comparison', title: 'Paper 2 Question 4 — comparison' },
  { slug: 'aqa-language-paper-2-question-3-language', title: 'Paper 2 Question 3 — language' },
  { slug: 'common-mistakes-aqa-language-paper-2', title: 'Common mistakes in AQA Language Paper 2' },
]

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'AQA Language Paper 2 Question 2: Summary (8 Marks)',
    description:
      'How to answer AQA English Language Paper 2 Question 2, the summary question worth 8 marks.',
    author: { '@type': 'Organization', name: 'The English Hub' },
    publisher: { '@type': 'Organization', name: 'The English Hub' },
    mainEntityOfPage:
      'https://theenglishhub.app/analysis/language-paper/aqa-language-paper-2-question-2-summary',
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
        <span className="text-foreground">Paper 2 Question 2 summary</span>
      </nav>

      <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
        AQA Language Paper 2 Question 2: summary (8 marks)
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">Written by GCSE examiners</p>

      <article className="mt-8 space-y-6 text-base leading-relaxed text-muted-foreground">
        <p>
          Question 2 on Paper 2 asks you to write a summary of the differences (or
          sometimes similarities) between two sources. It is the only question on the
          whole GCSE where you have to hold two texts in your head at once. Most
          students write a list. Grade 9 students write a synthesis. This guide shows
          you how to move from listing to synthesis, and how to earn all eight marks
          in under ten minutes.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">The exact wording</h2>
        <p>
          The question usually says: &ldquo;You need to refer to Source A and Source B
          for this question. Use details from both sources. Write a summary of the
          differences between X in Source A and Y in Source B.&rdquo; X and Y are the
          same subject across two different time periods, places or perspectives.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">The mark scheme in plain English</h2>
        <p>
          Level 4 (seven to eight marks) rewards perceptive synthesis, detailed
          interpretation of the differences (not just the facts) and well-chosen
          references. You need to do three things to reach it: identify a difference,
          support it with a short quotation from each source, and interpret what the
          difference tells you beyond the literal facts.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">The paragraph shape</h2>
        <p>
          Write three short, dense paragraphs, each following the same four-step
          structure:
        </p>
        <ol className="list-decimal space-y-2 pl-6">
          <li><strong>State the difference</strong> in a single sentence. (&ldquo;In Source A, the narrator finds the city exciting, whereas in Source B the writer finds it oppressive.&rdquo;)</li>
          <li><strong>Quote Source A</strong> briefly to support your point.</li>
          <li><strong>Quote Source B</strong> briefly to support the contrasting point.</li>
          <li><strong>Interpret the difference</strong>. What does it suggest? Why might the writers feel differently? What does it tell us about their attitudes?</li>
        </ol>

        <h2 className="text-2xl font-semibold text-foreground">Worked paragraph</h2>
        <p>
          <em>In Source A, the narrator presents the city as exciting and full of
          possibility, whereas in Source B it is depicted as exhausting and lonely. The
          Victorian writer describes &ldquo;streets alive with promise&rdquo;, suggesting
          energy and forward motion, while the modern journalist writes of
          &ldquo;strangers moving in silence&rdquo;, implying isolation and emotional
          distance. This difference suggests that the Victorian writer sees urban life
          as an adventure to be entered into, whereas the modern writer experiences it as
          something already endured — a change in attitude that reflects over a
          century&apos;s worth of urban expansion and the gradual loss of novelty.</em>
        </p>
        <p>
          Notice the four steps: difference, Source A quote, Source B quote, interpretive
          comment. Every paragraph on Question 2 should have exactly these four steps.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Synthesis versus listing</h2>
        <p>
          A weak answer lists three facts about Source A, then three facts about
          Source B. An average answer identifies three differences and quotes both
          sources. A Grade 9 answer explains what each difference reveals about the
          writers&apos; attitudes, the time periods they are writing in, or the tone of
          each source. Interpretation is the difference between Level 3 and Level 4.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Sentence stems that earn marks</h2>
        <ul className="list-disc space-y-1 pl-6">
          <li>&ldquo;In Source A&hellip; whereas in Source B&hellip;&rdquo;</li>
          <li>&ldquo;Unlike the narrator in Source A, the writer of Source B&hellip;&rdquo;</li>
          <li>&ldquo;This difference suggests that&hellip;&rdquo;</li>
          <li>&ldquo;While both sources mention X, they treat it very differently&hellip;&rdquo;</li>
          <li>&ldquo;The contrast implies&hellip;&rdquo;</li>
        </ul>

        <h2 className="text-2xl font-semibold text-foreground">Common mistakes</h2>
        <p>
          <strong>Analysing language.</strong> This is not Question 3. You should not be
          writing about metaphors or similes. Focus on what the texts say, not how they
          say it.
        </p>
        <p>
          <strong>Writing about only one source.</strong> Both sources must appear in
          every paragraph. A Grade 9 answer references both texts in every single point.
        </p>
        <p>
          <strong>Listing without interpreting.</strong> Facts without a
          &ldquo;suggests that&rdquo; or &ldquo;implies&rdquo; sentence cap you at
          Level 2.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Examiner tip</h2>
        <p>
          Write three paragraphs, not four. Quality beats quantity on this question,
          and three paragraphs with full synthesis will always beat four paragraphs of
          listing. Spend the saved time on Question 3 or Question 4 where the marks are.
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
