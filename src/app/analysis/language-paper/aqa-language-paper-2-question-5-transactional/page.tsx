import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AQA Language Paper 2 Question 5: Transactional Writing (40 Marks) | The English Hub',
  description:
    'How to answer AQA English Language Paper 2 Question 5, the 40-mark transactional writing task. Letter, article, speech structure and tone. Written by GCSE examiners.',
  alternates: {
    canonical:
      'https://theenglishhub.app/analysis/language-paper/aqa-language-paper-2-question-5-transactional',
  },
}

const related = [
  { slug: 'paper-2-article-writing-grade-9-guide', title: 'Paper 2 article writing — Grade 9 guide' },
  { slug: 'paper-2-letter-writing-grade-9-guide', title: 'Paper 2 letter writing — Grade 9 guide' },
  { slug: 'paper-2-speech-writing-grade-9-guide', title: 'Paper 2 speech writing — Grade 9 guide' },
  { slug: 'persuasive-techniques-aforest-dafforest-explained', title: 'AFOREST persuasive techniques explained' },
]

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'AQA Language Paper 2 Question 5: Transactional Writing (40 Marks)',
    description:
      'How to answer AQA English Language Paper 2 Question 5, the 40-mark transactional writing task.',
    author: { '@type': 'Organization', name: 'The English Hub' },
    publisher: { '@type': 'Organization', name: 'The English Hub' },
    mainEntityOfPage:
      'https://theenglishhub.app/analysis/language-paper/aqa-language-paper-2-question-5-transactional',
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
        <span className="text-foreground">Paper 2 Question 5 transactional writing</span>
      </nav>

      <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
        AQA Language Paper 2 Question 5: transactional writing (40 marks)
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">Written by GCSE examiners</p>

      <article className="mt-8 space-y-6 text-base leading-relaxed text-muted-foreground">
        <p>
          Question 5 on Paper 2 is worth forty marks — half of the entire paper. You are
          given a statement or topic and asked to write a piece of non-fiction in a
          specified form (letter, article, speech, essay, leaflet) for a specified
          audience and with a specified purpose. Unlike Paper 1, this is not creative
          writing; it is persuasive or argumentative writing, and the top band rewards
          clear structure, deliberate tone, and a full range of rhetorical techniques.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">What you are actually marked on</h2>
        <p>
          Twenty-four marks go on content and organisation. Sixteen marks go on technical
          accuracy. The content and organisation marks are where you earn voice, tone,
          rhetoric and structure. The technical accuracy marks are where you earn range
          of sentence forms, accurate punctuation, ambitious vocabulary and correct
          spelling.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Form matters</h2>
        <p>
          Form is the single most common way students lose marks. A letter must have an
          opening greeting, a sign-off, and a register appropriate to the recipient. An
          article must have a headline, possibly a subheading, and paragraph breaks. A
          speech should address the audience directly. If you write an article when
          asked for a letter, you will cap at Level 3 no matter how good the writing is.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Purpose and audience</h2>
        <p>
          Read the question twice and underline the purpose (persuade, argue, inform,
          explain) and the audience (MPs, readers of a national newspaper, headteacher,
          peers). Your tone must match both. A letter to a headteacher uses formal
          register and respectful disagreement; an article for readers your own age uses
          a more conversational register and direct address.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">The five-paragraph shape</h2>
        <ol className="list-decimal space-y-2 pl-6">
          <li><strong>Hook.</strong> Open with something arresting — an anecdote, a statistic, a rhetorical question, a surprising claim.</li>
          <li><strong>Thesis.</strong> State your clear, forceful argument in a sentence.</li>
          <li><strong>Main argument.</strong> Two or three paragraphs of reasoning, each with a different rhetorical device.</li>
          <li><strong>Counter-argument.</strong> Acknowledge the other side briefly and rebut it. This is a Grade 9 move most students skip.</li>
          <li><strong>Call to action.</strong> End with a clear, persuasive closing that tells the reader what you want them to think or do.</li>
        </ol>

        <h2 className="text-2xl font-semibold text-foreground">AFOREST or DAFOREST in practice</h2>
        <p>
          Anecdote, Facts and figures, Opinion, Rhetorical question, Emotive language,
          Statistics, Tricolon. (Add a D for Direct address at the start if you prefer
          DAFOREST.) Pick five of these and use them deliberately, marking each one
          into your plan before you start writing. Five techniques, used well and
          spaced across your piece, beat ten piled up in one paragraph.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Worked opening for an article</h2>
        <p>
          <em>Yesterday, I watched a fifteen-year-old girl walk past three vending
          machines on the way to her first GCSE exam. Each one was empty. Each one was
          broken. Each one was a small promise that had been, quietly and
          shamelessly, betrayed.</em>
        </p>
        <p>
          Anecdote, tricolon, anaphora, emotive vocabulary, rhythmic build — five
          techniques in forty words. That is the density the top band rewards.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Common mistakes</h2>
        <p>
          <strong>Ignoring form.</strong> No headline on an article, no greeting on a
          letter, no direct address in a speech. Each of these caps your mark.
        </p>
        <p>
          <strong>One-sided arguments.</strong> Failing to acknowledge a counter-point
          makes you sound immature. A single sentence of concession adds maturity and
          pushes you into Level 4.
        </p>
        <p>
          <strong>Rhetorical overload.</strong> Five rhetorical questions in a row feel
          desperate. Use them sparingly.
        </p>
        <p>
          <strong>No proof-reading.</strong> Technical accuracy is worth sixteen marks.
          Five minutes at the end is non-negotiable.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Examiner tip</h2>
        <p>
          Prepare two or three strong opening hooks on general topics (youth, school,
          environment, technology) and adapt them on the day. A prepared opening gives
          you a running start and stops you staring at a blank page while the clock runs.
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
