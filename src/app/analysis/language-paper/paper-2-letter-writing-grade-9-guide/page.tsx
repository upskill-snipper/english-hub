import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Paper 2 Letter Writing: Grade 9 Guide | The English Hub',
  description:
    'How to write a Grade 9 formal letter for AQA English Language Paper 2 Question 5. Greeting, register, structure and sign-off. Written by GCSE examiners.',
  alternates: {
    canonical:
      'https://theenglishhub.app/analysis/language-paper/paper-2-letter-writing-grade-9-guide',
  },
}

const related = [
  { slug: 'aqa-language-paper-2-question-5-transactional', title: 'Paper 2 Question 5 — transactional writing' },
  { slug: 'paper-2-article-writing-grade-9-guide', title: 'Paper 2 article writing — Grade 9 guide' },
  { slug: 'paper-2-speech-writing-grade-9-guide', title: 'Paper 2 speech writing — Grade 9 guide' },
  { slug: 'persuasive-techniques-aforest-dafforest-explained', title: 'AFOREST persuasive techniques' },
]

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Paper 2 Letter Writing: Grade 9 Guide',
    description:
      'How to write a Grade 9 formal letter for AQA English Language Paper 2 Question 5.',
    author: { '@type': 'Organization', name: 'The English Hub' },
    publisher: { '@type': 'Organization', name: 'The English Hub' },
    mainEntityOfPage:
      'https://theenglishhub.app/analysis/language-paper/paper-2-letter-writing-grade-9-guide',
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
        <span className="text-foreground">Paper 2 letter writing</span>
      </nav>

      <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
        Paper 2 letter writing: Grade 9 guide
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">Written by GCSE examiners</p>

      <article className="mt-8 space-y-6 text-base leading-relaxed text-muted-foreground">
        <p>
          If the examiner asks you to write a letter, they are testing whether you can
          adopt a formal register and hold it for forty minutes. Letters are rewarded
          heavily when done properly and brutally penalised when done badly. This guide
          shows you how to set one out, how to match register to recipient, and how to
          make your argument dignified and devastating at the same time.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">The form essentials</h2>
        <p>
          A formal letter needs: your address (or a placeholder), the recipient&apos;s
          address (or a placeholder), the date, a greeting, an opening paragraph
          establishing purpose, body paragraphs, and a sign-off. You do not need real
          addresses — a box in the top right marked &ldquo;[Your address]&rdquo; is
          enough. The examiner is looking for the shape, not your postcode.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Greetings and sign-offs</h2>
        <p>
          If you know the recipient&apos;s name: &ldquo;Dear Mr Jones&rdquo;, sign off
          &ldquo;Yours sincerely&rdquo;. If you do not: &ldquo;Dear Sir or Madam&rdquo;,
          sign off &ldquo;Yours faithfully&rdquo;. Getting this pairing wrong is the
          easiest way to tell the examiner you have not practised. Finish with a printed
          name below the sign-off.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Opening paragraph</h2>
        <p>
          A Grade 9 opening paragraph states the purpose of the letter in a single
          sentence, names the position you are arguing, and sets a respectful but firm
          tone. Avoid chatty openings. Something like: &ldquo;I am writing to express
          my concern about the recent decision to close our local library, and to
          respectfully request that the council reconsider.&rdquo;
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Register and tone</h2>
        <p>
          Formal does not mean dull. A Grade 9 letter is formal in vocabulary, polite
          in address, and forceful in argument. Use concessive phrases such as
          &ldquo;while I recognise that&hellip;&rdquo;, &ldquo;I fully appreciate the
          constraints&hellip;&rdquo;, and then deliver the rebuttal. This mix of
          courtesy and spine is what examiners mean by sophisticated tone.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Body paragraphs</h2>
        <p>
          Three body paragraphs is ideal. Each should present a different point with
          evidence (a fact, a plausible statistic, an anecdote, a quotation). Start
          each with a clear topic sentence and close each with a sentence that
          highlights the cost of inaction: &ldquo;If this is not addressed, the
          consequence will be&hellip;&rdquo;. This puts pressure on the recipient
          without losing the polite register.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Worked opening</h2>
        <p>
          <em>Dear Ms Carter,</em>
        </p>
        <p>
          <em>I am writing in response to the council&apos;s recent announcement that
          the Riverside Library is to be closed at the end of this financial year. While
          I understand that budgetary pressures are considerable, I would like to urge
          the council to reconsider a decision that, in my view, underestimates both
          the social value of the library and the long-term cost of its absence.</em>
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Persuasive techniques that suit letters</h2>
        <p>
          Letters work best with measured rhetoric: concessive clauses, formal
          vocabulary, precise evidence and restrained emotion. Save the emotive
          crescendo for a single paragraph near the end. Avoid rhetorical questions
          stacked in rows — they feel like a speech, not a letter — but one or two,
          placed carefully, can sharpen the tone.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Closing paragraph</h2>
        <p>
          End with a polite but firm call to action: &ldquo;I would be most grateful if
          the council would reconsider this decision at its next meeting, and I would
          welcome the opportunity to discuss these concerns in person.&rdquo; Then the
          sign-off and printed name.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Common mistakes</h2>
        <p>
          <strong>Forgetting the address block.</strong> A quick placeholder is enough;
          missing it caps your form mark.
        </p>
        <p>
          <strong>Mixing &ldquo;sincerely&rdquo; with &ldquo;Dear Sir&rdquo;.</strong>
          Know the pairing.
        </p>
        <p>
          <strong>Slipping into informal register.</strong> Contractions, slang and
          exclamation marks all drop marks in a formal letter.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Examiner tip</h2>
        <p>
          If in doubt, imagine you are writing to your favourite teacher&apos;s strictest
          boss. That mental image keeps your register formal without forcing you into
          language you do not control.
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
