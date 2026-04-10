import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Paper 2 Article Writing: Grade 9 Guide | The English Hub',
  description:
    'How to write a Grade 9 article for AQA English Language Paper 2 Question 5. Headline, hook, structure, rhetorical techniques and tone. Written by GCSE examiners.',
  alternates: {
    canonical:
      'https://theenglishhub.app/analysis/language-paper/paper-2-article-writing-grade-9-guide',
  },
}

const related = [
  { slug: 'aqa-language-paper-2-question-5-transactional', title: 'Paper 2 Question 5 — transactional writing' },
  { slug: 'paper-2-letter-writing-grade-9-guide', title: 'Paper 2 letter writing — Grade 9 guide' },
  { slug: 'paper-2-speech-writing-grade-9-guide', title: 'Paper 2 speech writing — Grade 9 guide' },
  { slug: 'persuasive-techniques-aforest-dafforest-explained', title: 'AFOREST persuasive techniques' },
]

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Paper 2 Article Writing: Grade 9 Guide',
    description:
      'How to write a Grade 9 article for AQA English Language Paper 2 Question 5.',
    author: { '@type': 'Organization', name: 'The English Hub' },
    publisher: { '@type': 'Organization', name: 'The English Hub' },
    mainEntityOfPage:
      'https://theenglishhub.app/analysis/language-paper/paper-2-article-writing-grade-9-guide',
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
        <span className="text-foreground">Paper 2 article writing</span>
      </nav>

      <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
        Paper 2 article writing: Grade 9 guide
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">Written by GCSE examiners</p>

      <article className="mt-8 space-y-6 text-base leading-relaxed text-muted-foreground">
        <p>
          Articles are the form most often set on Paper 2 Question 5, and they are the
          form students mishandle most frequently. A Grade 9 article is not a school
          essay with a title glued on top. It is a piece of real-world journalism that
          knows exactly who is reading it, hooks them in the first sentence, and leaves
          them with a clear, forceful takeaway. This guide shows you how to build one
          in forty-five minutes.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Start with the features</h2>
        <p>
          Every article must have a headline. It should also have a subheading — a
          single line beneath the headline that expands the hook. Paragraphs should be
          short (two to four sentences) and varied. A standfirst paragraph at the top —
          a single, punchy sentence in bold if you can manage it — signals to the
          examiner that you know the form.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Headlines that work</h2>
        <p>
          A strong GCSE article headline is short, provocative and specific. Avoid
          generic labels like &ldquo;An Article About Social Media&rdquo;. Better:
          &ldquo;We Owe Our Teenagers a Better Summer&rdquo; or &ldquo;Stop Pretending
          the High Street is Alive&rdquo;. Use the headline to signal your argument and
          tone in under eight words.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">The opening hook</h2>
        <p>
          The first paragraph is where you win or lose your reader. A Grade 9 article
          opens with one of: a striking anecdote, a single vivid image, a provocative
          statistic, a rhetorical question, or a direct challenge to the reader. Never
          open with &ldquo;In today&apos;s society&hellip;&rdquo; or &ldquo;Many people
          believe&hellip;&rdquo;. Examiners sigh.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">The argument structure</h2>
        <ol className="list-decimal space-y-2 pl-6">
          <li><strong>Hook paragraph.</strong> Anecdote or statistic.</li>
          <li><strong>Context paragraph.</strong> Where does this fit into a bigger picture?</li>
          <li><strong>First main argument.</strong> Evidence plus emotional weight.</li>
          <li><strong>Second main argument.</strong> Evidence plus another angle.</li>
          <li><strong>Counter-argument paragraph.</strong> Acknowledge and rebut.</li>
          <li><strong>Call to action.</strong> A sharp, memorable final sentence.</li>
        </ol>

        <h2 className="text-2xl font-semibold text-foreground">Tone and register</h2>
        <p>
          Match your register to the specified publication. A broadsheet article uses
          formal vocabulary, longer sentences, and restrained rhetoric. A lifestyle
          magazine uses informal direct address (&ldquo;you&rdquo;), shorter paragraphs,
          and humour. If the question does not specify, aim for a broadsheet tone: it is
          harder to get wrong.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Techniques to deploy</h2>
        <p>
          Direct address, rhetorical question, anecdote, hyperbole, list of three,
          contrast, humour, emotive language, statistic (you may invent plausible
          figures — the examiner will not check), short sentence for impact, long
          sentence for nuance. Use six or seven of these spread across the whole piece.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Worked opening</h2>
        <p>
          <strong>Headline:</strong> <em>Libraries Were My Childhood. We Owe Them
          Ours.</em>
        </p>
        <p>
          <strong>Opening paragraph:</strong> <em>I was eight years old the first time I
          walked into a public library on my own. The librarian smiled as if she had
          been expecting me. Twenty years later, that same library is boarded up, its
          windows patched with plywood, its steps grown over with weeds. We told
          ourselves we could not afford to keep it open. The truth is, we could not
          afford to let it close.</em>
        </p>
        <p>
          Anecdote, contrast, short sentence, rhetorical reversal. The reader has not
          yet read the argument but already knows exactly where it is going.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Common mistakes</h2>
        <p>
          <strong>Forgetting the headline.</strong> Examiners look for it. No headline,
          no form marks.
        </p>
        <p>
          <strong>Lecture tone.</strong> Articles are not essays. Use personal voice.
        </p>
        <p>
          <strong>Over-quoting statistics.</strong> One plausible figure is powerful.
          Five feels desperate.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Examiner tip</h2>
        <p>
          Always end with a single-sentence paragraph that either challenges the reader
          or restates the stakes. A final solo sentence, printed alone on the page,
          lingers far longer than a neat summary.
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
