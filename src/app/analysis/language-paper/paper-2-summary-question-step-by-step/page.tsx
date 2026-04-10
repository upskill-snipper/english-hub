import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Paper 2 Summary Question: Step-by-Step Method | The English Hub',
  description:
    'A step-by-step method for the AQA English Language Paper 2 summary question. Plan, quote, synthesise, interpret. Written by GCSE examiners.',
  alternates: {
    canonical:
      'https://theenglishhub.app/analysis/language-paper/paper-2-summary-question-step-by-step',
  },
}

const related = [
  { slug: 'aqa-language-paper-2-question-2-summary', title: 'Paper 2 Question 2 — summary' },
  { slug: 'aqa-language-paper-2-question-4-comparison', title: 'Paper 2 Question 4 — comparison' },
  { slug: 'paper-2-comparison-question-phrases-to-use', title: 'Paper 2 comparison phrases' },
  { slug: 'common-mistakes-aqa-language-paper-2', title: 'Common mistakes in AQA Language Paper 2' },
]

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Paper 2 Summary Question: Step-by-Step Method',
    description:
      'A step-by-step method for the AQA English Language Paper 2 summary question.',
    author: { '@type': 'Organization', name: 'The English Hub' },
    publisher: { '@type': 'Organization', name: 'The English Hub' },
    mainEntityOfPage:
      'https://theenglishhub.app/analysis/language-paper/paper-2-summary-question-step-by-step',
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
        <span className="text-foreground">Paper 2 summary step-by-step</span>
      </nav>

      <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
        Paper 2 summary question: the step-by-step method
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">Written by GCSE examiners</p>

      <article className="mt-8 space-y-6 text-base leading-relaxed text-muted-foreground">
        <p>
          If Question 2 on Paper 2 is the one you always lose marks on, this guide is for
          you. The summary question asks you to compare details across two sources and
          synthesise those details into an interpretation. Most students list. Grade 9
          students synthesise. The difference is a set of habits you can learn in an
          evening and practise in a week.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Step 1: Read the question twice</h2>
        <p>
          Underline the subject (for example &ldquo;the working conditions&rdquo;) and
          the direction word (differences, similarities, attitudes). Write a single
          sentence at the top of your plan summarising exactly what you are comparing.
          If you cannot summarise the task in one sentence, you have not understood it
          yet.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Step 2: Annotate Source A</h2>
        <p>
          Highlight three details in Source A that are directly relevant to the subject.
          Write a one-word label above each (for example: &ldquo;hours&rdquo;,
          &ldquo;pay&rdquo;, &ldquo;safety&rdquo;). You are not analysing language; you
          are identifying facts and impressions that the text gives you.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Step 3: Annotate Source B</h2>
        <p>
          Find three details in Source B that speak to the same three labels. If
          Source A talks about &ldquo;hours&rdquo;, find Source B&apos;s equivalent
          detail about hours. This cross-referencing is the single most important habit
          for the summary question.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Step 4: Write three paragraphs</h2>
        <p>
          Each paragraph pairs one detail from Source A with one detail from Source B,
          using a comparative connective, and finishes with a sentence of
          interpretation. Three paragraphs, three pairs, three interpretations, and you
          are done.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">The paragraph template</h2>
        <p>
          &ldquo;Whereas in Source A the workers [fact A], in Source B the workers
          [fact B]. The contrast is reinforced by the A writer&apos;s use of
          &lsquo;[quote]&rsquo; and the B writer&apos;s &lsquo;[quote]&rsquo;. This
          suggests that [interpretation about the different realities of the two
          sources].&rdquo;
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Worked example</h2>
        <p>
          <em>Subject: factory conditions in Source A (1820) and Source B (2020).</em>
        </p>
        <p>
          <em>Paragraph 1:</em> Whereas in Source A the factory workers are described as
          toiling for &ldquo;fourteen hours a day without respite&rdquo;, in Source B
          the modern worker complains of being &ldquo;chained to a single nine-hour
          screen-shift&rdquo;. The Victorian writer uses a dehumanising description of
          unbroken labour, while the modern journalist focuses on a different kind of
          confinement — one defined by the screen rather than the loom. The difference
          suggests that although physical exhaustion has decreased, a new form of
          monotony has taken its place.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Why interpretation matters</h2>
        <p>
          The mark scheme rewards &ldquo;perceptive interpretation of differences&rdquo;
          in Level 4. That phrase is literal: you must interpret. Every paragraph must
          include a sentence beginning with &ldquo;This suggests&hellip;&rdquo;,
          &ldquo;This implies&hellip;&rdquo;, or &ldquo;This reflects&hellip;&rdquo;.
          Without interpretation, you cap at Level 2 no matter how many quotations you
          include.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Timing</h2>
        <p>
          Eight to ten minutes. If you have not finished after ten, move on — one strong
          paragraph of synthesis is worth more than two unfinished ones and a hasty
          third.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Examiner tip</h2>
        <p>
          Keep your quotations short. The ideal summary paragraph contains two quotations
          of no more than five words each. Long lifts waste words that should be spent
          on interpretation.
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
