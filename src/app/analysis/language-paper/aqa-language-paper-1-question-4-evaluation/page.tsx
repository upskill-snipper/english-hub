import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AQA Language Paper 1 Question 4: Evaluation (20 Marks) | The English Hub',
  description:
    'How to answer AQA English Language Paper 1 Question 4, the 20-mark evaluation question. Agree/disagree structure, model paragraph and timing. Written by GCSE examiners.',
  alternates: {
    canonical:
      'https://theenglishhub.app/analysis/language-paper/aqa-language-paper-1-question-4-evaluation',
  },
}

const related = [
  { slug: 'aqa-language-paper-1-question-3-structure', title: 'Paper 1 Question 3 — structure' },
  { slug: 'aqa-language-paper-1-question-5-creative-writing', title: 'Paper 1 Question 5 — creative writing' },
  { slug: 'paper-1-time-management-60-minutes', title: 'Paper 1 time management in 60 minutes' },
  { slug: 'common-mistakes-aqa-language-paper-1', title: 'Common mistakes in AQA Language Paper 1' },
]

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'AQA Language Paper 1 Question 4: Evaluation (20 Marks)',
    description:
      'How to answer AQA English Language Paper 1 Question 4, the 20-mark evaluation question.',
    author: { '@type': 'Organization', name: 'The English Hub' },
    publisher: { '@type': 'Organization', name: 'The English Hub' },
    mainEntityOfPage:
      'https://theenglishhub.app/analysis/language-paper/aqa-language-paper-1-question-4-evaluation',
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
        <span className="text-foreground">Paper 1 Question 4 evaluation</span>
      </nav>

      <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
        AQA Language Paper 1 Question 4: evaluation (20 marks)
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">Written by GCSE examiners</p>

      <article className="mt-8 space-y-6 text-base leading-relaxed text-muted-foreground">
        <p>
          Question 4 is worth twenty marks — a quarter of the entire paper — and it is the
          last reading question before you turn to creative writing. Examiners describe it
          as the question that separates students who understand a text from students who
          only notice what is on the surface. The trick is that Question 4 gives you an
          opinion and asks you to respond to it. You must analyse the text, but you must
          also evaluate whether the opinion is justified, and say so clearly and
          repeatedly.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">What the question looks like</h2>
        <p>
          You are given a line range (usually the final third of the source), a statement
          that a student made about the text, and the instruction: &ldquo;To what extent
          do you agree?&rdquo;. The statement is always debatable. You are then told to
          consider your own impressions of something (a character, a situation, an idea),
          evaluate how the writer has created these impressions, and support your response
          with references to the text.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">The mark scheme in plain English</h2>
        <p>
          Twenty marks are split across four level bands. Level 4 answers evaluate
          critically and in detail, show perceptive understanding of methods, select
          judicious textual detail and develop a convincing response to the focus of the
          question. The word that matters most is &ldquo;evaluate&rdquo;: you must keep
          reminding the examiner that you are weighing the statement.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">The 25-minute structure</h2>
        <ol className="list-decimal space-y-2 pl-6">
          <li>Spend three minutes highlighting the line range and planning four points.</li>
          <li>Write an opening sentence that states your overall position — strongly agree, partly agree, disagree.</li>
          <li>Write four PEE paragraphs, each making a different point, and each explicitly agreeing, partly agreeing, or disagreeing with the statement.</li>
          <li>Finish with a final sentence that re-states your overall judgement.</li>
        </ol>

        <h2 className="text-2xl font-semibold text-foreground">The Grade 9 sentence stems</h2>
        <p>
          To hit Level 4 you must evaluate out loud. Use phrases such as: &ldquo;The
          student&apos;s claim is convincing because&hellip;&rdquo;, &ldquo;This is only
          partly true — while X is clearly presented, Y complicates the idea
          because&hellip;&rdquo;, &ldquo;The writer reinforces this impression by&hellip;&rdquo;,
          &ldquo;A more nuanced reading might suggest&hellip;&rdquo;. Those stems force you to
          weigh the statement, which is exactly what the mark scheme rewards.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Worked paragraph</h2>
        <p>
          <em>Statement: &ldquo;The narrator seems brave in this section.&rdquo; Agree.</em>
        </p>
        <p>
          The student&apos;s claim is largely convincing, because the writer repeatedly
          places the narrator in physical danger yet refuses to let him retreat. The short,
          decisive sentence &ldquo;I stepped forward&rdquo; is structurally isolated from
          the long descriptions around it, forcing the reader to pause on the moment of
          choice and recognise its courage. However, this bravery is complicated by the
          earlier admission that his hands &ldquo;trembled&rdquo;, which shows the writer
          is presenting a more realistic, frightened version of heroism — not an absence
          of fear, but action in spite of it. The impression is therefore one of
          vulnerable courage rather than reckless bravery, and the student&apos;s view is
          valid but could be sharpened.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Four common mistakes</h2>
        <p>
          <strong>Forgetting to evaluate.</strong> If your answer reads like Question 2 or
          Question 3, you are analysing but not evaluating. Return to the statement every
          paragraph.
        </p>
        <p>
          <strong>Sitting on the fence.</strong> &ldquo;I agree and disagree&rdquo; is fine
          if you explain why. It is not fine if you are just hedging because you did not
          plan.
        </p>
        <p>
          <strong>Ignoring methods.</strong> The mark scheme explicitly rewards
          &ldquo;perceptive understanding of writer&apos;s methods&rdquo;. Name techniques
          and explain their effect.
        </p>
        <p>
          <strong>Running out of time.</strong> Twenty minutes is the absolute minimum, but
          twenty-five is safer. Do not let Question 3 eat into this question.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Examiner tip</h2>
        <p>
          If you cannot think of a reason to disagree, force yourself to imagine a student
          who holds the opposite view, and write one sentence defending them before
          returning to your side. That single sentence demonstrates critical evaluation
          and almost always nudges an answer up a band.
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
