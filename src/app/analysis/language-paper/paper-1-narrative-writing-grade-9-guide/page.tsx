import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Paper 1 Narrative Writing: Grade 9 Guide | The English Hub',
  description:
    'How to write a Grade 9 story for AQA English Language Paper 1 Question 5. Freytag plot, strong openings, dialogue and endings. Written by GCSE examiners.',
  alternates: {
    canonical:
      'https://theenglishhub.app/analysis/language-paper/paper-1-narrative-writing-grade-9-guide',
  },
}

const related = [
  { slug: 'aqa-language-paper-1-question-5-creative-writing', title: 'Paper 1 Question 5 — creative writing' },
  { slug: 'paper-1-descriptive-writing-grade-9-guide', title: 'Paper 1 descriptive writing — Grade 9 guide' },
  { slug: '25-language-techniques-every-student-must-know', title: '25 language techniques every student must know' },
  { slug: 'common-mistakes-aqa-language-paper-1', title: 'Common mistakes in AQA Language Paper 1' },
]

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Paper 1 Narrative Writing: Grade 9 Guide',
    description:
      'How to write a Grade 9 story for AQA English Language Paper 1 Question 5.',
    author: { '@type': 'Organization', name: 'The English Hub' },
    publisher: { '@type': 'Organization', name: 'The English Hub' },
    mainEntityOfPage:
      'https://theenglishhub.app/analysis/language-paper/paper-1-narrative-writing-grade-9-guide',
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
        <span className="text-foreground">Paper 1 narrative writing</span>
      </nav>

      <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
        Paper 1 narrative writing: Grade 9 guide
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">Written by GCSE examiners</p>

      <article className="mt-8 space-y-6 text-base leading-relaxed text-muted-foreground">
        <p>
          Choosing to write a story on Paper 1 Question 5 is the harder option, but it can
          be the more rewarding one if you know how to handle plot under time pressure.
          A Grade 9 narrative does not try to tell a whole adventure. It zooms in on one
          small moment, one choice, one turn of events, and uses description, dialogue and
          pacing to make that moment feel enormous. This guide shows you how to plan a
          story in four minutes and write it in forty.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Forget epics</h2>
        <p>
          You have forty-five minutes and roughly 600 words. That is enough for one scene,
          not a novel. Students who try to write a full story usually run out of time and
          resolve the plot in three rushed sentences at the end. Instead, pick one
          moment: the second before a decision, the hour after bad news, the walk home in
          the rain. Everything you describe is in service of that single moment.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">The five-part shape</h2>
        <ol className="list-decimal space-y-2 pl-6">
          <li><strong>Opening image.</strong> A single, striking detail that anchors the reader.</li>
          <li><strong>Character in motion.</strong> Introduce your narrator or protagonist through action.</li>
          <li><strong>Rising tension.</strong> Something begins to change — an arrival, a sound, a realisation.</li>
          <li><strong>Turning point.</strong> The key moment. Slow it down with short sentences and sensory detail.</li>
          <li><strong>Resonant ending.</strong> Echo the opening. Leave the reader with a question, not an answer.</li>
        </ol>

        <h2 className="text-2xl font-semibold text-foreground">First-person versus third</h2>
        <p>
          First person (&ldquo;I&rdquo;) gives you immediate access to feeling and voice.
          Third person gives you distance and control. Either can reach Grade 9. Pick
          whichever the prompt invites — if the title begins with &ldquo;I&rdquo;, write
          in the first person.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Dialogue done right</h2>
        <p>
          Use dialogue sparingly. One line of speech, placed at the turning point, can
          carry more weight than a whole conversation. Always punctuate it correctly:
          speech marks, a comma before the speech tag, a new line for every new speaker.
          If you are not confident with dialogue punctuation, use only one line of speech
          in the whole piece.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Pacing through sentence length</h2>
        <p>
          Pace in a story comes from sentence length. Long, flowing sentences in the
          opening slow the reader. Short, clipped sentences at the turning point
          accelerate them. A sudden one-word sentence — &ldquo;Silence.&rdquo; — can
          freeze an entire scene. Control your pace deliberately, paragraph by paragraph.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Worked opening</h2>
        <p>
          <em>I had been watching the letter on the kitchen table for twenty-three
          minutes. It was the kind of letter you do not open straight away, the kind with
          a crest embossed at the top and a name typed in the address box that was almost
          mine. My mother was upstairs, humming an old song I had never learned the
          words to. Outside, the rain had softened into mist. I put my hand on the
          envelope and felt, for a moment, the weight of every possibility inside it.</em>
        </p>
        <p>
          Notice how much is set up in five sentences: a tense moment, a character with
          history, a setting, a sound, a decision about to happen. The reader is already
          invested and no plot has happened.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Endings that don&apos;t fizzle</h2>
        <p>
          The weakest narratives end with &ldquo;and then I woke up&rdquo; or &ldquo;and
          everything was fine&rdquo;. A Grade 9 ending leaves something unresolved. The
          envelope is still closed at the end of the paragraph. The footsteps in the
          hallway stop just outside the door. The reader has to complete the story in
          their own head, which is the single most sophisticated thing a short narrative
          can do.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Technical accuracy</h2>
        <p>
          Sixteen of the forty marks are for technical accuracy. Take a full five minutes
          at the end of the exam to hunt capital letters, full stops, apostrophes and
          misspellings. A Grade 9 student fixes at least two things in every
          proof-reading pass.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Examiner tip</h2>
        <p>
          Start in media res — in the middle of things. Do not waste the first paragraph
          on backstory. The reader should be inside a moment by the end of the first
          sentence, and you can weave in background gently as the scene unfolds.
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
