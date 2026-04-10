import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Paper 1 Structural Features Explained | The English Hub',
  description:
    'Every structural feature you need for AQA English Language Paper 1 Question 3 explained with examples. Focus, shifts, cyclical, foreshadowing. Written by GCSE examiners.',
  alternates: {
    canonical:
      'https://theenglishhub.app/analysis/language-paper/paper-1-structural-features-explained',
  },
}

const related = [
  { slug: 'aqa-language-paper-1-question-3-structure', title: 'Paper 1 Question 3 — structure' },
  { slug: 'paper-1-how-to-identify-language-techniques', title: 'How to identify language techniques' },
  { slug: '25-language-techniques-every-student-must-know', title: '25 language techniques every student must know' },
  { slug: 'common-mistakes-aqa-language-paper-1', title: 'Common mistakes in AQA Language Paper 1' },
]

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Paper 1 Structural Features Explained',
    description:
      'Every structural feature you need for AQA English Language Paper 1 Question 3 explained with examples.',
    author: { '@type': 'Organization', name: 'The English Hub' },
    publisher: { '@type': 'Organization', name: 'The English Hub' },
    mainEntityOfPage:
      'https://theenglishhub.app/analysis/language-paper/paper-1-structural-features-explained',
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
        <span className="text-foreground">Structural features explained</span>
      </nav>

      <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
        Paper 1 structural features explained
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">Written by GCSE examiners</p>

      <article className="mt-8 space-y-6 text-base leading-relaxed text-muted-foreground">
        <p>
          Structure is the invisible scaffolding of a text. Examiners complain year after
          year that students can name devices but cannot recognise structural features,
          and that is why Question 3 is the lowest-scoring of the eight-mark questions.
          This guide is a glossary of the structural features most likely to earn marks
          on Paper 1, with a one-line example of each so you can see what to look for.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Focus and shifts</h2>
        <p>
          <strong>Focus</strong> is what the writer is directing your attention towards in
          a given paragraph. A <strong>shift</strong> is the moment that focus changes. A
          paragraph that focuses on a character and then shifts to the landscape has two
          focuses and one shift. Examiners love this vocabulary.
        </p>
        <p>
          <strong>Zoom in</strong>: the writer narrows the focus from a wide view to a
          single small detail (for example, from a whole battlefield to a single boot).
          <strong> Zoom out</strong>: the writer pulls back from a specific detail to show
          the wider scene.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Openings and endings</h2>
        <p>
          <strong>In media res</strong>: beginning in the middle of action, which
          immediately pulls the reader into tension.
          <strong> Cyclical structure</strong>: the ending returns to an image or idea from
          the opening, creating a sense of completeness.
          <strong> Linear structure</strong>: events follow a clear chronological order.
          <strong> Non-linear</strong>: the narrative jumps around in time, often using
          flashbacks.
          <strong> Cliffhanger ending</strong>: the text ends mid-action, leaving the
          reader wanting resolution.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Juxtaposition and contrast</h2>
        <p>
          <strong>Juxtaposition</strong> is the deliberate placement of two contrasting
          ideas next to each other to highlight their difference. A calm opening paragraph
          followed by a violent second paragraph is juxtaposition. Writers use it to
          shock, to build contrast, or to reinforce a theme through opposites.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Foreshadowing and flashback</h2>
        <p>
          <strong>Foreshadowing</strong> is when an early detail hints at something that
          will happen later — a broken clock in paragraph one, a death in paragraph five.
          <strong> Flashback</strong> is a sudden jump backwards in time to show something
          that has already happened. Both give the reader information they would not
          otherwise have and shift the pace.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Pace and tension</h2>
        <p>
          Pace is the speed at which the text moves. <strong>Fast pacing</strong> comes
          from short sentences, short paragraphs and quick action verbs.
          <strong> Slow pacing</strong> comes from long sentences, long paragraphs and
          descriptive detail. A writer might slow the pace to build tension and then
          accelerate into the climax.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Perspective shifts</h2>
        <p>
          When the text changes whose viewpoint you are seeing through — from a
          third-person narrator to a character&apos;s internal monologue, or from one
          character&apos;s perspective to another&apos;s — you can name this a
          &ldquo;shift in narrative perspective&rdquo;. Explain the effect: it might
          make the reader sympathise with a different character, or reveal information
          the first perspective hid.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Paragraph length and isolation</h2>
        <p>
          A single-sentence paragraph stands out because it is surrounded by white space.
          Writers use isolated paragraphs for emphasis, for shock, or for emotional
          weight. If you spot one in a Paper 1 source, comment on it — it is nearly
          always placed for a reason.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Repetition and motif</h2>
        <p>
          A <strong>motif</strong> is a repeated image that carries symbolic weight — a
          red door, a ticking clock, a single bird. If you see the same image more than
          once in a Paper 1 source, that is a motif, and it is a structural feature worth
          discussing because it stitches the text together across paragraphs.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">How to use these on Question 3</h2>
        <p>
          You do not need all of them. Pick three that actually appear in the extract you
          are given, spread across beginning, middle and end, and explain what each does
          to the reader. The mark scheme rewards breadth, so a Grade 9 answer will almost
          always mention one opening feature, one middle shift, and one ending feature.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Examiner tip</h2>
        <p>
          Practise by reading the opening two paragraphs of any novel and asking yourself
          which structural features are present. Within a week you will stop confusing
          structure with language, and Question 3 will start to feel like the easiest
          eight marks on the paper rather than the hardest.
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
