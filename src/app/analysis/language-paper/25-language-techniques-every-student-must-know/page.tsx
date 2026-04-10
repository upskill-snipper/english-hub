import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '25 Language Techniques Every GCSE Student Must Know | The English Hub',
  description:
    'A complete glossary of 25 language techniques for AQA GCSE English Language Paper 1 and Paper 2. Definitions, examples and effects. Written by GCSE examiners.',
  alternates: {
    canonical:
      'https://theenglishhub.app/analysis/language-paper/25-language-techniques-every-student-must-know',
  },
}

const related = [
  { slug: 'paper-1-how-to-identify-language-techniques', title: 'How to identify language techniques' },
  { slug: 'persuasive-techniques-aforest-dafforest-explained', title: 'AFOREST persuasive techniques' },
  { slug: 'language-paper-grade-9-vocabulary-bank', title: 'Grade 9 vocabulary bank' },
  { slug: 'paper-1-structural-features-explained', title: 'Structural features explained' },
]

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '25 Language Techniques Every GCSE Student Must Know',
    description:
      'A complete glossary of 25 language techniques for AQA GCSE English Language Paper 1 and Paper 2.',
    author: { '@type': 'Organization', name: 'The English Hub' },
    publisher: { '@type': 'Organization', name: 'The English Hub' },
    mainEntityOfPage:
      'https://theenglishhub.app/analysis/language-paper/25-language-techniques-every-student-must-know',
  }

  const techniques = [
    { name: 'Simile', def: 'A comparison using &ldquo;like&rdquo; or &ldquo;as&rdquo;.', effect: 'Creates vivid imagery by linking one thing to another.' },
    { name: 'Metaphor', def: 'A direct comparison stating one thing is another.', effect: 'Condenses meaning and creates striking imagery.' },
    { name: 'Extended metaphor', def: 'A metaphor sustained across multiple lines or paragraphs.', effect: 'Builds a coherent symbolic thread through the text.' },
    { name: 'Personification', def: 'Giving human qualities to objects or ideas.', effect: 'Makes settings feel alive or threatening.' },
    { name: 'Pathetic fallacy', def: 'Weather or setting reflecting mood.', effect: 'Links environment to emotion for atmosphere.' },
    { name: 'Hyperbole', def: 'Deliberate exaggeration.', effect: 'Emphasises emotion or makes a point forcefully.' },
    { name: 'Onomatopoeia', def: 'Words that sound like what they describe.', effect: 'Creates an auditory impression for the reader.' },
    { name: 'Alliteration', def: 'Repetition of initial consonant sounds.', effect: 'Creates rhythm and makes phrases memorable.' },
    { name: 'Sibilance', def: 'Repetition of hissing &ldquo;s&rdquo; sounds.', effect: 'Often creates a soft, secretive or threatening tone.' },
    { name: 'Assonance', def: 'Repetition of vowel sounds.', effect: 'Slows or softens a phrase musically.' },
    { name: 'Symbolism', def: 'An object or image that carries wider meaning.', effect: 'Adds layers of meaning beyond the literal.' },
    { name: 'Imagery', def: 'Descriptive language that appeals to the senses.', effect: 'Makes scenes vivid and immersive.' },
    { name: 'Juxtaposition', def: 'Placing contrasting ideas side by side.', effect: 'Highlights difference and creates tension.' },
    { name: 'Oxymoron', def: 'Two contradictory words placed together.', effect: 'Captures contradictory feelings or ideas in one phrase.' },
    { name: 'Repetition', def: 'Deliberate repeating of a word or phrase.', effect: 'Creates emphasis and rhythm.' },
    { name: 'Anaphora', def: 'Repetition at the start of successive clauses.', effect: 'Builds rhetorical momentum.' },
    { name: 'Tricolon', def: 'A list of three items.', effect: 'Rhythmic, persuasive and memorable.' },
    { name: 'Rhetorical question', def: 'A question that does not expect an answer.', effect: 'Involves the reader and provokes thought.' },
    { name: 'Direct address', def: 'Speaking to the reader as &ldquo;you&rdquo;.', effect: 'Creates intimacy and urgency.' },
    { name: 'Emotive language', def: 'Words that trigger strong feelings.', effect: 'Persuades through emotional response.' },
    { name: 'Semantic field', def: 'A group of words linked by meaning.', effect: 'Creates a consistent tone or atmosphere.' },
    { name: 'Caesura', def: 'A pause within a line or sentence.', effect: 'Creates hesitation, emphasis or shock.' },
    { name: 'Enjambment', def: 'A sentence running over a line break (in poetry) or paragraph.', effect: 'Controls pace and creates surprise.' },
    { name: 'Euphemism', def: 'A softer word used for something harsh.', effect: 'Reveals attitudes through what is avoided.' },
    { name: 'Irony', def: 'A gap between what is said and what is meant.', effect: 'Creates humour, critique or layered meaning.' },
  ]

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
        <span className="text-foreground">25 language techniques</span>
      </nav>

      <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
        25 language techniques every GCSE student must know
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">Written by GCSE examiners</p>

      <article className="mt-8 space-y-6 text-base leading-relaxed text-muted-foreground">
        <p>
          There is no prize for naming the most obscure technique in the history of
          English Language. Examiners reward students who can identify a handful of
          techniques confidently and explain their effect on the reader. This glossary
          contains the twenty-five techniques that actually appear in AQA mark schemes,
          with a one-line definition and a one-line effect for each. Learn these and
          you will have a Grade 9 vocabulary for both Paper 1 Question 2 and Paper 2
          Question 3.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">How to use this list</h2>
        <p>
          Do not memorise the list in alphabetical order — that is the fastest way to
          forget it. Instead, group the techniques by where they live in a text. Word
          level: metaphor, simile, personification, hyperbole, euphemism, emotive
          language, semantic field. Sentence level: tricolon, rhetorical question,
          anaphora, repetition, direct address, caesura, enjambment, juxtaposition.
          Sound level: alliteration, sibilance, assonance, onomatopoeia. Structural and
          rhetorical: extended metaphor, symbolism, irony, pathetic fallacy, imagery,
          oxymoron. When you annotate a text, hunt by level.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">The 25 techniques</h2>
        <ol className="list-decimal space-y-3 pl-6">
          {techniques.map((t) => (
            <li key={t.name}>
              <strong>{t.name}.</strong>{' '}
              <span dangerouslySetInnerHTML={{ __html: t.def }} />{' '}
              <em>{t.effect}</em>
            </li>
          ))}
        </ol>

        <h2 className="text-2xl font-semibold text-foreground">Five techniques that always earn marks</h2>
        <p>
          If you are short on revision time, prioritise these five: extended metaphor,
          personification, tricolon, direct address and juxtaposition. Each of them can
          be identified quickly in almost any text, each has a clear effect you can
          explain, and each gives you a range of the three categories the mark scheme
          asks for (words, phrases, sentence forms).
        </p>

        <h2 className="text-2xl font-semibold text-foreground">The effect is everything</h2>
        <p>
          A common mistake is to define the technique in your answer. Do not.
          &ldquo;Simile is a comparison using like or as&rdquo; is a definition, not
          analysis. The mark scheme rewards effect on the reader. Write &ldquo;the
          simile creates an impression of&hellip;&rdquo; or &ldquo;the simile positions
          the reader to feel&hellip;&rdquo; every time.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Examiner tip</h2>
        <p>
          Build a flashcard deck of these twenty-five techniques and practise retrieving
          definitions and effects daily for two weeks. On exam day, your brain will
          reach for the right terminology automatically, and you will stop wasting time
          hunting for the name of something you already know.
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
            This guide is one glossary in a wider resource. Open the full Language
            revision hub to work through reading, writing and SPAG in order.
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
