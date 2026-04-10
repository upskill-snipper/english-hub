import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AQA Language Paper 2 Question 3: Language (12 Marks) | The English Hub',
  description:
    'How to answer AQA English Language Paper 2 Question 3, the 12-mark language analysis question on a single non-fiction source. Written by GCSE examiners.',
  alternates: {
    canonical:
      'https://theenglishhub.app/analysis/language-paper/aqa-language-paper-2-question-3-language',
  },
}

const related = [
  { slug: 'aqa-language-paper-2-question-2-summary', title: 'Paper 2 Question 2 — summary' },
  { slug: 'aqa-language-paper-2-question-4-comparison', title: 'Paper 2 Question 4 — comparison' },
  { slug: 'aqa-language-paper-1-question-2-language-analysis', title: 'Paper 1 Question 2 — language analysis' },
  { slug: 'persuasive-techniques-aforest-dafforest-explained', title: 'AFOREST persuasive techniques explained' },
]

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'AQA Language Paper 2 Question 3: Language (12 Marks)',
    description:
      'How to answer AQA English Language Paper 2 Question 3, the 12-mark language analysis question on a single non-fiction source.',
    author: { '@type': 'Organization', name: 'The English Hub' },
    publisher: { '@type': 'Organization', name: 'The English Hub' },
    mainEntityOfPage:
      'https://theenglishhub.app/analysis/language-paper/aqa-language-paper-2-question-3-language',
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
        <span className="text-foreground">Paper 2 Question 3 language</span>
      </nav>

      <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
        AQA Language Paper 2 Question 3: language analysis (12 marks)
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">Written by GCSE examiners</p>

      <article className="mt-8 space-y-6 text-base leading-relaxed text-muted-foreground">
        <p>
          Question 3 on Paper 2 is the language analysis question, worth twelve marks on
          a single non-fiction source. It looks similar to Paper 1 Question 2 but it is
          not the same. You have more marks to aim at and a non-fiction source to
          analyse, which means you should be thinking about tone, attitude, persuasive
          techniques and audience in a way you would not on Paper 1.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">The exact wording</h2>
        <p>
          The question asks: &ldquo;You now need to refer only to Source B. How does the
          writer use language to [achieve a specific effect, for example &lsquo;convey
          how dangerous the journey was&rsquo;]?&rdquo; It lists the same three bullet
          points as Paper 1 Question 2 — words and phrases, language features and
          techniques, sentence forms.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">The mark scheme in plain English</h2>
        <p>
          Twelve marks are split across four levels of three marks each. Level 4
          (10 to 12 marks) rewards detailed, perceptive analysis of language, precise
          subject terminology, and judicious textual detail. You need four PEE
          paragraphs to reach the top band comfortably, each commenting on a different
          technique and each explaining its effect on the reader.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">How Paper 2 Question 3 differs from Paper 1 Question 2</h2>
        <p>
          On Paper 1 you analyse a fiction extract. On Paper 2 you analyse a non-fiction
          source — an article, a letter, a memoir — and the writer&apos;s purpose is
          usually to persuade, inform or entertain rather than to create an
          atmosphere. That means the techniques you look for tilt towards rhetorical
          devices: direct address, rhetorical questions, emotive language, statistics,
          hyperbole, listing, anecdote and contrast.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">The four-paragraph plan</h2>
        <ol className="list-decimal space-y-2 pl-6">
          <li>A word-level point (a single emotive or precise word choice).</li>
          <li>A phrase-level point (a metaphor, simile or piece of imagery).</li>
          <li>A sentence-level point (a rhetorical question, a list of three, a short sentence).</li>
          <li>A rhetorical or structural point (direct address, statistic, anecdote).</li>
        </ol>

        <h2 className="text-2xl font-semibold text-foreground">Worked paragraph</h2>
        <p>
          Source line: <em>These children are not statistics. They are your neighbours,
          your classmates, your friends.</em>
        </p>
        <p>
          <strong>Model analysis.</strong> The writer deploys direct address and a list
          of three (&ldquo;your neighbours, your classmates, your friends&rdquo;) to
          close the emotional distance between the reader and the children in the
          article. The repeated possessive pronoun &ldquo;your&rdquo; forces a sense of
          personal responsibility on the reader, while the rhythmic build of the
          tricolon increases in intimacy from public spaces (neighbours) to school
          (classmates) to private life (friends). The opening short sentence
          &ldquo;These children are not statistics&rdquo; is isolated and forceful,
          rejecting the detached, numerical way we might otherwise think about social
          issues and replacing it with something personal, impossible to ignore.
        </p>
        <p>
          Notice that the paragraph covers a word (&ldquo;your&rdquo;), a sentence form
          (short sentence, tricolon) and a rhetorical feature (direct address) in four
          sentences. That is the density you want.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Timing</h2>
        <p>
          Twelve marks, twelve minutes minimum and fifteen maximum. Any more and you are
          stealing time from Question 4, which is worth sixteen marks and needs a full
          twenty minutes.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Common mistakes</h2>
        <p>
          <strong>Treating it like Paper 1.</strong> Looking for pathetic fallacy in a
          political article wastes time. Look for rhetorical devices instead.
        </p>
        <p>
          <strong>Forgetting the reader.</strong> Every paragraph should end with what
          the effect is <em>on the reader</em>. Without that, you cap at Level 2.
        </p>
        <p>
          <strong>Writing three paragraphs when the mark scheme wants four.</strong>
          Twelve marks is larger than eight, and examiners reward breadth.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Examiner tip</h2>
        <p>
          Always name the writer&apos;s intention in your opening sentence. &ldquo;The
          writer uses language to persuade the reader to feel sympathy for the
          children&rdquo; orients your whole answer around effect and saves you from
          drifting into plain feature-spotting.
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
