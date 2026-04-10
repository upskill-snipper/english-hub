import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Identify Language Techniques (AQA Paper 1) | The English Hub',
  description:
    'A practical method for spotting and naming language techniques quickly on AQA English Language Paper 1. Metaphor, simile, imagery, sound. Written by GCSE examiners.',
  alternates: {
    canonical:
      'https://theenglishhub.app/analysis/language-paper/paper-1-how-to-identify-language-techniques',
  },
}

const related = [
  { slug: 'aqa-language-paper-1-question-2-language-analysis', title: 'Paper 1 Question 2 — language analysis' },
  { slug: '25-language-techniques-every-student-must-know', title: '25 language techniques every student must know' },
  { slug: 'paper-1-structural-features-explained', title: 'Structural features explained' },
  { slug: 'language-paper-grade-9-vocabulary-bank', title: 'Grade 9 vocabulary bank' },
]

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'How to Identify Language Techniques (AQA Paper 1)',
    description:
      'A practical method for spotting and naming language techniques quickly on AQA English Language Paper 1.',
    author: { '@type': 'Organization', name: 'The English Hub' },
    publisher: { '@type': 'Organization', name: 'The English Hub' },
    mainEntityOfPage:
      'https://theenglishhub.app/analysis/language-paper/paper-1-how-to-identify-language-techniques',
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
        <span className="text-foreground">How to identify language techniques</span>
      </nav>

      <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
        Paper 1: how to identify language techniques in under a minute
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">Written by GCSE examiners</p>

      <article className="mt-8 space-y-6 text-base leading-relaxed text-muted-foreground">
        <p>
          Question 2 on AQA Paper 1 punishes students who try to spot techniques after
          they have started writing. Grade 9 students recognise them in the first sixty
          seconds of reading the extract. This guide teaches you the three-pass method:
          a reliable, examiner-designed way to identify the specific language features
          that will earn top-band marks, even when the extract is unfamiliar and the
          clock is running.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Pass one: word level</h2>
        <p>
          On your first read, circle any individual word that jumps off the page. It
          might be an unusual verb, a precise adjective, a noun with strong connotations,
          or an adverb that changes the tone of a sentence. You are looking for single
          lexical choices — nothing larger. Aim for three to five circles per extract.
        </p>
        <p>
          Techniques to name at word level: verb choice, noun choice, adjective, adverb,
          connotation, semantic field, contrast, repetition.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Pass two: phrase level</h2>
        <p>
          On your second pass, underline any phrase that goes beyond the literal meaning
          of the words. Similes and metaphors live here, as do personification, pathetic
          fallacy, imagery and symbolism. Phrase-level techniques are the meat of
          Question 2 because they give you plenty to say about effect.
        </p>
        <p>
          Techniques to name at phrase level: simile, metaphor, extended metaphor,
          personification, pathetic fallacy, hyperbole, imagery, symbolism, oxymoron,
          juxtaposition.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Pass three: sentence level</h2>
        <p>
          On your third pass, look at sentence shapes. Is there a very short sentence
          isolated for effect? A long sentence full of commas? A list of three? A
          rhetorical question? An exclamation? A sentence that begins with a verb or with
          a preposition? Sentence-level observations are the hidden key to Level 4, and
          they are the observations most students forget.
        </p>
        <p>
          Techniques to name at sentence level: short sentence, minor sentence, compound
          sentence, complex sentence, list of three (tricolon), anaphora, rhetorical
          question, direct address.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Sound and rhythm</h2>
        <p>
          One underused category is sound. Alliteration, sibilance, assonance and
          onomatopoeia can all earn top-band marks if you explain what the sound does to
          the reader — hisses of sibilance feel threatening or secretive, hard consonants
          feel aggressive, soft vowels feel calm or melancholic.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Worked example</h2>
        <p>
          Source line: <em>The wind whispered through the willows, weaving its way
          between the silent, silvered trunks.</em>
        </p>
        <p>
          <strong>Word level:</strong> the verb &ldquo;whispered&rdquo; carries
          connotations of secrecy and softness; &ldquo;silvered&rdquo; is an unusual,
          poetic adjective.
        </p>
        <p>
          <strong>Phrase level:</strong> the wind is personified as something that can
          whisper and weave, creating an eerie, almost magical atmosphere.
        </p>
        <p>
          <strong>Sentence level:</strong> the sentence is long and flowing, mirroring
          the movement of the wind itself, and the clause order delays the final image
          of the silvered trunks so that it lands like a reveal.
        </p>
        <p>
          <strong>Sound:</strong> the repeated &ldquo;w&rdquo; sounds create a gentle
          hissing alliteration that reinforces the whispered atmosphere of the personified
          wind.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">The mistake to avoid</h2>
        <p>
          Do not spot and name a technique without explaining what it does. &ldquo;The
          writer uses alliteration&rdquo; is worth nothing on its own. &ldquo;The repeated
          &lsquo;w&rsquo; sounds create a hushed, breath-like effect that reinforces the
          stillness of the scene&rdquo; is worth marks.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Examiner tip</h2>
        <p>
          Memorise the three-pass method and practise it on any poem or extract you
          have lying around. Within a week you will find yourself identifying five or six
          techniques in ninety seconds, which means Question 2 becomes a question about
          explaining effects rather than hunting for features.
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
