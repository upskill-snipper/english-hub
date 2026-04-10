import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Paper 1 Descriptive Writing: Grade 9 Guide | The English Hub',
  description:
    'How to write a Grade 9 descriptive piece for AQA English Language Paper 1 Question 5. Sensory imagery, cyclical structure, ambitious punctuation. Written by GCSE examiners.',
  alternates: {
    canonical:
      'https://theenglishhub.app/analysis/language-paper/paper-1-descriptive-writing-grade-9-guide',
  },
}

const related = [
  { slug: 'aqa-language-paper-1-question-5-creative-writing', title: 'Paper 1 Question 5 — creative writing' },
  { slug: 'paper-1-narrative-writing-grade-9-guide', title: 'Paper 1 narrative writing — Grade 9 guide' },
  { slug: '25-language-techniques-every-student-must-know', title: '25 language techniques every student must know' },
  { slug: 'language-paper-grade-9-vocabulary-bank', title: 'Grade 9 vocabulary bank' },
]

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Paper 1 Descriptive Writing: Grade 9 Guide',
    description:
      'How to write a Grade 9 descriptive piece for AQA English Language Paper 1 Question 5.',
    author: { '@type': 'Organization', name: 'The English Hub' },
    publisher: { '@type': 'Organization', name: 'The English Hub' },
    mainEntityOfPage:
      'https://theenglishhub.app/analysis/language-paper/paper-1-descriptive-writing-grade-9-guide',
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
        <span className="text-foreground">Paper 1 descriptive writing</span>
      </nav>

      <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
        Paper 1 descriptive writing: Grade 9 guide
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">Written by GCSE examiners</p>

      <article className="mt-8 space-y-6 text-base leading-relaxed text-muted-foreground">
        <p>
          Descriptive writing is the Paper 1 Question 5 option that most Grade 9 students
          pick, and for a good reason: it rewards imagery and control rather than plot.
          Unlike a story, a description does not need a character, a conflict or a
          resolution. It needs an atmosphere, a central image, and a shift somewhere in
          the middle that changes how the reader feels. This guide shows you how to build
          all three in forty-five minutes under exam pressure.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">What description is not</h2>
        <p>
          It is not a list of pretty adjectives. It is not an attempt to fit every
          technique you have ever learned into five paragraphs. A Grade 9 description is
          focused: it zooms in on one place, at one time, and stays there. Trying to
          describe &ldquo;a day in the city&rdquo; is fatal. Describing five minutes in
          one deserted square is the way to hit the top band.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">The five senses scaffold</h2>
        <p>
          Plan the five senses before you plan paragraphs. What do you see? What do you
          hear? What do you smell? What can you taste in the air? What do you feel
          against your skin? Writing a one-line note for each guarantees that your
          description is three-dimensional. The single most common reason descriptive
          writing drops marks is that students only describe what they see.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Cyclical structure</h2>
        <p>
          The best descriptive pieces return to their opening image at the end, but with a
          twist. If you begin with a candle burning in a window, end with the candle
          extinguished, or snuffed by a gust, or still burning but now surrounded by
          darkness. The cyclical return gives the reader a sense of completeness and
          signals a top-band writer who has planned from the first word.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">The shift in the middle</h2>
        <p>
          Build one clear turning point roughly halfway through. The weather changes. A
          sound arrives. A bird takes off. A cloud crosses the sun. The reader feels the
          atmosphere change even though nothing in the description has &ldquo;happened&rdquo;
          in a plot sense. This shift separates description from drift.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Techniques that hit Level 4</h2>
        <p>
          Extended metaphor that runs through the whole piece. Pathetic fallacy linking
          weather to mood. Personification of inanimate objects. Lists of three, at least
          one of which builds in length. A short sentence for punch. A semi-colon used
          correctly. A colon used to introduce a striking image. A dash used for a sudden
          interruption. Ambitious, precise verbs (shudder, quiver, hover, smoulder) rather
          than adverbs stacked on weak verbs.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Worked paragraph</h2>
        <p>
          <em>Above the rooftops, the sky was bruised — violet at the edges, yellow at the
          heart, as if the clouds had been punched from below. The wind moved through the
          empty square like a stranger looking for something it had left behind, rattling a
          forgotten shutter, lifting a scrap of newspaper, and then — suddenly — falling
          silent. In that silence, the square held its breath.</em>
        </p>
        <p>
          Three techniques in three sentences: personification of the sky and the wind,
          pathetic fallacy, a dash used for effect, a short sentence, and a metaphor. That
          density is what a Grade 9 paragraph looks like.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Ambitious punctuation</h2>
        <p>
          Examiners actively look for a range of punctuation used correctly for effect.
          You do not need every mark. You do need at least one of: a semi-colon joining
          two independent clauses, a colon introducing an image, a pair of dashes
          parenthesising an interruption, and an ellipsis trailing off at the end of a
          paragraph. Use them once each, and the technical accuracy band opens up.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">What to avoid</h2>
        <p>
          Avoid writing in the second person (&ldquo;you walk&rdquo;) — it slips into
          instruction. Avoid dialogue in a pure description. Avoid listing every technique
          you know just to tick boxes; four techniques used well beat a dozen used badly.
          Avoid beginning every paragraph with &ldquo;the&rdquo;.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Examiner tip</h2>
        <p>
          Memorise one extended metaphor you can adapt to almost any scene — for example,
          a comparison of a place to a sleeping body (&ldquo;the town inhaled
          slowly&rdquo;, &ldquo;veins of streetlight&rdquo;, &ldquo;bones of brick&rdquo;).
          A prepared motif gives you a spine on the day and frees your brain to focus on
          punctuation and shift.
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
