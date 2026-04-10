import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AQA Language Paper 1 Question 3: Structure (8 Marks) | The English Hub',
  description:
    'How to answer AQA English Language Paper 1 Question 3, the structure question worth 8 marks. Zoom method, shifts, foreshadowing and a model answer. Written by GCSE examiners.',
  alternates: {
    canonical:
      'https://theenglishhub.app/analysis/language-paper/aqa-language-paper-1-question-3-structure',
  },
}

const related = [
  { slug: 'aqa-language-paper-1-question-2-language-analysis', title: 'Paper 1 Question 2 — language analysis' },
  { slug: 'aqa-language-paper-1-question-4-evaluation', title: 'Paper 1 Question 4 — evaluation' },
  { slug: 'paper-1-structural-features-explained', title: 'Structural features explained' },
  { slug: 'common-mistakes-aqa-language-paper-1', title: 'Common mistakes in AQA Language Paper 1' },
]

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'AQA Language Paper 1 Question 3: Structure (8 Marks)',
    description:
      'How to answer AQA English Language Paper 1 Question 3, the structure question worth 8 marks.',
    author: { '@type': 'Organization', name: 'The English Hub' },
    publisher: { '@type': 'Organization', name: 'The English Hub' },
    mainEntityOfPage:
      'https://theenglishhub.app/analysis/language-paper/aqa-language-paper-1-question-3-structure',
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
        <span className="text-foreground">Paper 1 Question 3 structure</span>
      </nav>

      <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
        AQA Language Paper 1 Question 3: structure (8 marks)
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">Written by GCSE examiners</p>

      <article className="mt-8 space-y-6 text-base leading-relaxed text-muted-foreground">
        <p>
          Question 3 is the most feared question on the whole paper, and it is also the
          question where good students can pick up eight relatively quick marks because
          almost everyone else writes about language by mistake. The key to Question 3 is
          to force yourself, from the first word of your answer, to think about the text as
          a whole thing that has been built, paragraph by paragraph, and to zoom in and out
          of it like a camera.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">What the question asks</h2>
        <p>
          The wording is: &ldquo;You now need to think about the whole of the source. How
          has the writer structured the text to interest you as a reader?&rdquo; Underneath,
          three bullet points ask you to think about what the writer focuses your attention
          on at the beginning, how and why the writer changes this focus, and any other
          structural features that interest you. Those three bullets are the skeleton of
          a perfect answer.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">The mark scheme in plain English</h2>
        <p>
          Level 4 answers analyse effects on the reader with detail, use precise subject
          terminology (shift, focus, zoom, juxtaposition, cyclical, foreshadowing) and
          choose a range of examples from across the text. If any of your examples come
          from the same three lines, you have written a language answer. Spread out.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">The zoom method</h2>
        <p>
          Imagine a camera moving through the text. Ask three questions in order. One:
          where does the writer point the camera at the very beginning? Two: when and why
          does the camera move — does it zoom in on a detail, cut to a different character,
          pull back to show a landscape, or jump forward in time? Three: where does the
          camera leave us at the end, and how does the final image connect to the opening?
          Answer those three questions and you have a full answer with movement built in.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Three paragraphs, three structural moves</h2>
        <ol className="list-decimal space-y-2 pl-6">
          <li>
            <strong>Opening focus.</strong> Where does the text begin? A wide shot of a
            landscape? A close-up on an object? A character mid-action? Explain the effect
            on the reader of starting there.
          </li>
          <li>
            <strong>The shift.</strong> Find the moment the focus changes. Name it
            (a zoom, a flashback, a new paragraph&apos;s change of perspective, a shift in
            tense) and explain what it does to the reader.
          </li>
          <li>
            <strong>The ending.</strong> Connect the end back to the beginning. Is it
            cyclical? Does it foreshadow danger that never arrives? Does it leave us on a
            cliffhanger? Explain the effect.
          </li>
        </ol>

        <h2 className="text-2xl font-semibold text-foreground">Structural terminology you should use</h2>
        <p>
          Focus, shift, zoom in, zoom out, juxtaposition, contrast, cyclical structure,
          linear, non-linear, flashback, foreshadowing, narrative perspective, pace,
          temporal shift, dialogue break, caesura between paragraphs. Pick three or four
          per answer and use them naturally.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Worked paragraph</h2>
        <p>
          <em>At the opening, the writer zooms in on a single candle burning in the
          window, which narrows the reader&apos;s focus to a solitary, fragile point of
          light and immediately creates an atmosphere of vulnerability.</em> Notice how the
          paragraph mentions the structural choice (zoom), the effect (fragility) and the
          reader (&ldquo;us&rdquo;). That is the whole template.
        </p>
        <p>
          <em>Halfway through the source there is a sudden shift from the interior of the
          house to a wide, panoramic view of the moor at night. This juxtaposition between
          enclosed safety and open, limitless darkness unsettles the reader and plants the
          idea that something beyond the walls is about to intrude on the calm we have
          just been shown.</em>
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Common mistakes</h2>
        <p>
          <strong>Writing about language.</strong> If you find yourself quoting a single
          adjective, you have slipped into Question 2. Zoom back out.
        </p>
        <p>
          <strong>Only writing about the beginning.</strong> Two of the three bullet points
          concern the middle and the end. Cover all three or you cap yourself at four marks.
        </p>
        <p>
          <strong>Listing without effect.</strong> &ldquo;The writer shifts focus&rdquo; is a
          feature. It needs the effect on the reader — fear, tension, relief, curiosity —
          to score in Level 3 or 4.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Examiner tip</h2>
        <p>
          Plan the whole text in the margin before you start writing. Label the opening,
          the middle shift and the ending with two-word summaries. Your answer will
          automatically cover the whole source, which is the single thing the mark scheme
          cares about most.
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
