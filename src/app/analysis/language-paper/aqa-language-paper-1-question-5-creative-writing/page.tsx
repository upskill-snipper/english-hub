import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AQA Language Paper 1 Question 5: Creative Writing (40 Marks) | The English Hub',
  description:
    'How to write a Grade 9 response to AQA English Language Paper 1 Question 5, the 40-mark creative writing task. Planning, structure and techniques. Written by GCSE examiners.',
  alternates: {
    canonical:
      'https://theenglishhub.app/analysis/language-paper/aqa-language-paper-1-question-5-creative-writing',
  },
}

const related = [
  { slug: 'paper-1-descriptive-writing-grade-9-guide', title: 'Paper 1 descriptive writing — Grade 9 guide' },
  { slug: 'paper-1-narrative-writing-grade-9-guide', title: 'Paper 1 narrative writing — Grade 9 guide' },
  { slug: '25-language-techniques-every-student-must-know', title: '25 language techniques every student must know' },
  { slug: 'language-paper-grade-9-vocabulary-bank', title: 'Grade 9 vocabulary bank' },
]

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'AQA Language Paper 1 Question 5: Creative Writing (40 Marks)',
    description:
      'How to write a Grade 9 response to AQA English Language Paper 1 Question 5, the 40-mark creative writing task.',
    author: { '@type': 'Organization', name: 'The English Hub' },
    publisher: { '@type': 'Organization', name: 'The English Hub' },
    mainEntityOfPage:
      'https://theenglishhub.app/analysis/language-paper/aqa-language-paper-1-question-5-creative-writing',
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
        <span className="text-foreground">Paper 1 Question 5 creative writing</span>
      </nav>

      <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
        AQA Language Paper 1 Question 5: creative writing (40 marks)
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">Written by GCSE examiners</p>

      <article className="mt-8 space-y-6 text-base leading-relaxed text-muted-foreground">
        <p>
          Question 5 is worth forty marks — half of the entire paper — and it is the
          question where your grade is genuinely won or lost. Twenty-four marks go on
          content and organisation, sixteen marks go on technical accuracy. That split
          matters: a brilliant story with weak punctuation will struggle to cross Grade 7,
          while a carefully planned, carefully punctuated piece will sail into the top
          band even without flashy vocabulary.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">The choice you are given</h2>
        <p>
          You are usually offered a choice between describing an image printed on the
          paper, writing the opening or ending of a story from a title, or writing a
          description of a scene suggested by a short prompt. Most Grade 9 students choose
          description because it is easier to pack with imagery and control.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">The mark scheme in plain English</h2>
        <p>
          For content and organisation, Level 4 means your writing is compelling, your
          tone and register are matched to purpose and audience, and your structure is
          ambitious and varied. For technical accuracy, Level 4 means a full range of
          sentence forms, a range of punctuation used for effect, ambitious vocabulary and
          virtually no spelling errors.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">The 45-minute plan</h2>
        <ol className="list-decimal space-y-2 pl-6">
          <li>Five minutes planning: five senses, five paragraphs, shift in the middle.</li>
          <li>Thirty-five minutes writing, aiming for roughly 500 to 700 words.</li>
          <li>Five minutes proof-reading specifically for capital letters, apostrophes and missed full stops.</li>
        </ol>

        <h2 className="text-2xl font-semibold text-foreground">The five-paragraph shape</h2>
        <p>
          The single strongest structure is a cyclical description with a turning point in
          the middle. Paragraph one zooms in on a specific image (a candle, a footprint, a
          broken window). Paragraph two widens out to the surrounding scene, using all
          five senses. Paragraph three is the shift: something changes — the weather, a
          sound, a figure appearing. Paragraph four intensifies the atmosphere. Paragraph
          five returns to the opening image, transformed.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Techniques to deploy</h2>
        <p>
          You do not need every technique. You need about six, used well. A top-band piece
          will usually contain: one extended metaphor that runs through the whole piece,
          two well-placed similes, personification of setting, pathetic fallacy, a list
          of three, at least one short sentence used for impact, a semi-colon, a dash, a
          colon, and direct sensory detail from all five senses.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Worked opening</h2>
        <p>
          <em>The candle burned alone. Its flame was small and tired, a single amber
          tongue that licked the darkness and flinched away. Wax pooled on the
          windowsill, hardening into pale scars, and the draught that slipped under the
          door carried the smell of rain and something older — damp wood, iron, the
          ghost of a fire long gone out.</em>
        </p>
        <p>
          Notice the personification (&ldquo;tired&rdquo;, &ldquo;flinched&rdquo;), the
          metaphor (&ldquo;scars&rdquo;), the smell-based sensory detail, the dash used for
          effect, and the short opening sentence. Four techniques in forty words. That is
          the density you are aiming for.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Common mistakes that cap a grade</h2>
        <p>
          <strong>No plan.</strong> Students who do not plan waste the middle and end on
          drift and repetition. A one-minute skeleton will save fifteen.
        </p>
        <p>
          <strong>Overwriting.</strong> Thesaurus vocabulary used wrongly drops marks
          faster than simple vocabulary used well.
        </p>
        <p>
          <strong>No shift.</strong> A flat piece with no change in atmosphere caps at
          Level 3. Build in one clear turning point.
        </p>
        <p>
          <strong>Missed punctuation.</strong> A Grade 9 student uses a semi-colon
          correctly at least once in this task. Practise it.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Examiner tip</h2>
        <p>
          Memorise three or four ambitious sentences and adapt them to whatever image you
          are given. This is not cheating; it is how every examiner-trained writer prepares
          for timed assessments. Your prepared sentences give you a foothold in the first
          minute so you can spend the remaining time sustaining quality.
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
