import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Paper 2 Speech Writing: Grade 9 Guide | The English Hub',
  description:
    'How to write a Grade 9 speech for AQA English Language Paper 2 Question 5. Direct address, rhetoric, rhythm and structure. Written by GCSE examiners.',
  alternates: {
    canonical:
      'https://theenglishhub.app/analysis/language-paper/paper-2-speech-writing-grade-9-guide',
  },
}

const related = [
  { slug: 'aqa-language-paper-2-question-5-transactional', title: 'Paper 2 Question 5 — transactional writing' },
  { slug: 'paper-2-article-writing-grade-9-guide', title: 'Paper 2 article writing — Grade 9 guide' },
  { slug: 'paper-2-letter-writing-grade-9-guide', title: 'Paper 2 letter writing — Grade 9 guide' },
  { slug: 'persuasive-techniques-aforest-dafforest-explained', title: 'AFOREST persuasive techniques' },
]

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Paper 2 Speech Writing: Grade 9 Guide',
    description:
      'How to write a Grade 9 speech for AQA English Language Paper 2 Question 5.',
    author: { '@type': 'Organization', name: 'The English Hub' },
    publisher: { '@type': 'Organization', name: 'The English Hub' },
    mainEntityOfPage:
      'https://theenglishhub.app/analysis/language-paper/paper-2-speech-writing-grade-9-guide',
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
        <span className="text-foreground">Paper 2 speech writing</span>
      </nav>

      <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
        Paper 2 speech writing: Grade 9 guide
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">Written by GCSE examiners</p>

      <article className="mt-8 space-y-6 text-base leading-relaxed text-muted-foreground">
        <p>
          A speech gives you permission to be the most persuasive you will ever be in a
          GCSE exam. You are writing words intended to be heard, not read, and that
          shifts everything: rhythm matters more, sentences should be shorter, and
          repetition becomes a weapon instead of a habit. This guide shows you how to
          build a speech that sounds inevitable from the first word to the last.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Speak directly to the audience</h2>
        <p>
          Open with a direct address to the specified audience: &ldquo;Good
          afternoon, friends&rdquo;, &ldquo;Fellow students&rdquo;, &ldquo;Members of
          the council&rdquo;. This immediately signals the form to the examiner and
          anchors your tone. You may repeat this address once or twice through the
          speech to maintain the sense of a speaker standing in front of a crowd.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">The rule of three</h2>
        <p>
          Speeches live on the rule of three more than any other form. Three adjectives,
          three clauses, three rising sentences — the pattern is built into the way
          human ears enjoy language. Plan at least two deliberate tricolons into your
          speech, one near the opening and one near the climax.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Anaphora — repetition for rhythm</h2>
        <p>
          Anaphora is the repetition of the same word at the start of successive
          clauses or sentences. &ldquo;We will not forget. We will not pretend. We will
          not go home until this is done.&rdquo; It feels inevitable when read aloud and
          lands brilliantly on the examiner&apos;s ear. Plan at least one anaphoric
          passage into your speech.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">The structure</h2>
        <ol className="list-decimal space-y-2 pl-6">
          <li><strong>Direct greeting and hook.</strong> A question or a striking image.</li>
          <li><strong>The stakes.</strong> Why this matters, right now.</li>
          <li><strong>The first argument.</strong> Evidence and an anecdote.</li>
          <li><strong>The second argument.</strong> Emotional pressure.</li>
          <li><strong>Counter-argument.</strong> Briefly acknowledge, forcefully rebut.</li>
          <li><strong>Call to action.</strong> A forceful, rhythmic, memorable close.</li>
        </ol>

        <h2 className="text-2xl font-semibold text-foreground">Worked opening</h2>
        <p>
          <em>Fellow students, I want you to imagine, just for a moment, that you are
          not sitting in this hall. I want you to imagine you are walking home from
          school, alone, in the rain. I want you to imagine that the bus you rely on
          never comes. This is not a hypothetical. For twelve of our classmates, it is
          Tuesday.</em>
        </p>
        <p>
          Direct address, anaphora (&ldquo;I want you to imagine&rdquo;), the rule of
          three, a short sentence for punch, and a sharp anecdotal twist in the final
          line. That is Grade 9 speech-writing in sixty words.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Rhythm through sentence length</h2>
        <p>
          Vary your sentence length deliberately. Long, flowing sentences build
          momentum; short sentences stop the audience in their tracks. A one-word
          sentence &mdash; &ldquo;Enough.&rdquo; &mdash; placed after a long clause
          creates an audible pause in the reader&apos;s head, even though the examiner
          is reading the speech silently.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Pathos, ethos, logos</h2>
        <p>
          A Grade 9 speech blends three Aristotelian modes: pathos (emotion), ethos
          (credibility) and logos (logic). Use pathos in your anecdote, ethos by
          establishing your position and values early, and logos through one or two
          plausible facts. A speech without all three feels one-note.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Closing</h2>
        <p>
          End with a single-sentence paragraph that can be read aloud on a single
          breath. It should echo the opening image and leave the audience with one
          idea. &ldquo;If we do not act tonight, we will still be standing in this hall
          next year, asking the same question we asked today. And next year, it will be
          too late.&rdquo;
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Common mistakes</h2>
        <p>
          <strong>Forgetting to address the audience.</strong> No greeting means no
          form marks.
        </p>
        <p>
          <strong>Essay tone.</strong> Speeches are not essays with &ldquo;Good
          afternoon&rdquo; taped on top. The rhythm matters.
        </p>
        <p>
          <strong>Too much rhetoric.</strong> Stack every technique into every sentence
          and it reads as desperate. Pace yourself.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Examiner tip</h2>
        <p>
          Read your speech quietly under your breath as you write it. If a sentence is
          too long to say in one breath, cut it. If a paragraph does not sound like
          someone standing on a stage, rewrite it.
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
