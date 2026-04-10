import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Common Mistakes in AQA Language Paper 1 | The English Hub',
  description:
    'The most common mistakes students make in AQA English Language Paper 1 — and how to avoid each one. Written by GCSE examiners.',
  alternates: {
    canonical:
      'https://theenglishhub.app/analysis/language-paper/common-mistakes-aqa-language-paper-1',
  },
}

const related = [
  { slug: 'aqa-language-paper-1-question-1-guide', title: 'Paper 1 Question 1 — list four things' },
  { slug: 'aqa-language-paper-1-question-3-structure', title: 'Paper 1 Question 3 — structure' },
  { slug: 'paper-1-time-management-60-minutes', title: 'Paper 1 time management' },
  { slug: 'aqa-language-paper-1-question-5-creative-writing', title: 'Paper 1 Question 5 — creative writing' },
]

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Common Mistakes in AQA Language Paper 1',
    description:
      'The most common mistakes students make in AQA English Language Paper 1.',
    author: { '@type': 'Organization', name: 'The English Hub' },
    publisher: { '@type': 'Organization', name: 'The English Hub' },
    mainEntityOfPage:
      'https://theenglishhub.app/analysis/language-paper/common-mistakes-aqa-language-paper-1',
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
        <span className="text-foreground">Common mistakes Paper 1</span>
      </nav>

      <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
        Common mistakes in AQA Language Paper 1
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">Written by GCSE examiners</p>

      <article className="mt-8 space-y-6 text-base leading-relaxed text-muted-foreground">
        <p>
          Every summer, examiners meet in standardisation rooms and discuss the same
          handful of mistakes that dragged thousands of scripts down a grade. The good
          news is that almost all of these mistakes are habits, and habits can be
          unlearned in the two weeks before an exam. This guide lists the ten most
          common errors on Paper 1, with a one-line fix for each.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">1. Ignoring the line range on Question 1</h2>
        <p>
          Students write about the wrong part of the extract. The fix is to underline
          the line numbers before you read the question, and write your answers only
          from those lines.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">2. Inferring on Question 1</h2>
        <p>
          Question 1 is literal. &ldquo;The narrator seems angry&rdquo; is inference.
          Write only what the text explicitly says.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">3. Feature-spotting on Question 2</h2>
        <p>
          &ldquo;The writer uses a simile&rdquo; and nothing else is Level 1. You must
          explain the effect on the reader in at least two sentences.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">4. Writing a language answer for Question 3</h2>
        <p>
          If your Question 3 answer quotes a single adjective, you have slipped back
          into Question 2. Zoom out to the whole text and comment on structural
          movement, not words.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">5. Only writing about the opening on Question 3</h2>
        <p>
          The mark scheme asks for the beginning, the middle and the end. Cover all
          three or cap at Level 2.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">6. Forgetting to evaluate on Question 4</h2>
        <p>
          Students analyse beautifully but forget that Question 4 asks whether they
          agree with a statement. Every paragraph must return to the statement.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">7. Running out of time on Question 5</h2>
        <p>
          Students spend forty minutes on Question 3 and then cannot write a coherent
          description. Start Question 5 at the one-hour mark whatever happens.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">8. No planning on Question 5</h2>
        <p>
          Forty-mark answers without a plan drift. Spend four minutes on a five-bullet
          plan before you write a single sentence.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">9. Overwriting</h2>
        <p>
          Thesaurus vocabulary used wrongly drops marks. If you are not sure what a
          word means, do not use it. Precise simple words beat imprecise grand ones.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">10. Skipping proof-reading</h2>
        <p>
          Technical accuracy is worth sixteen marks on Question 5. Five minutes of
          proof-reading at the end can rescue six or seven of them — that is half a
          grade.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Three mistakes that cost whole grades</h2>
        <p>
          <strong>Confusing Question 2 and Question 3.</strong> These are two different
          assessment objectives. Practising past papers is the quickest way to stop
          mixing them up.
        </p>
        <p>
          <strong>Writing a narrative when you cannot finish it.</strong> If plot
          resolution scares you, pick description. You can stop a description at any
          point; you cannot stop a story mid-crisis without losing marks.
        </p>
        <p>
          <strong>Ignoring sentence forms on Question 2.</strong> The third mark scheme
          bullet point is about sentence forms. Most students only comment on words.
          Mentioning one short sentence or one list of three is worth marks.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Examiner tip</h2>
        <p>
          The quickest way to avoid common mistakes is to mark your own past papers
          against the mark scheme before you read a model answer. Seeing how the
          examiner thinks changes the way you write the next paper.
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
