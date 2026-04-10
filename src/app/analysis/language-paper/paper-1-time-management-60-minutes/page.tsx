import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Paper 1 Time Management: 60 Minutes for the Reading Section | The English Hub',
  description:
    'Minute-by-minute timing plan for AQA English Language Paper 1 reading section and Question 5. Avoid common timing mistakes. Written by GCSE examiners.',
  alternates: {
    canonical:
      'https://theenglishhub.app/analysis/language-paper/paper-1-time-management-60-minutes',
  },
}

const related = [
  { slug: 'aqa-language-paper-1-question-1-guide', title: 'Paper 1 Question 1 — list four things' },
  { slug: 'aqa-language-paper-1-question-4-evaluation', title: 'Paper 1 Question 4 — evaluation' },
  { slug: 'aqa-language-paper-1-question-5-creative-writing', title: 'Paper 1 Question 5 — creative writing' },
  { slug: 'common-mistakes-aqa-language-paper-1', title: 'Common mistakes in AQA Language Paper 1' },
]

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Paper 1 Time Management: 60 Minutes for the Reading Section',
    description:
      'Minute-by-minute timing plan for AQA English Language Paper 1 reading section and Question 5.',
    author: { '@type': 'Organization', name: 'The English Hub' },
    publisher: { '@type': 'Organization', name: 'The English Hub' },
    mainEntityOfPage:
      'https://theenglishhub.app/analysis/language-paper/paper-1-time-management-60-minutes',
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
        <span className="text-foreground">Paper 1 time management</span>
      </nav>

      <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
        Paper 1 time management: 60 minutes for reading, 45 for writing
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">Written by GCSE examiners</p>

      <article className="mt-8 space-y-6 text-base leading-relaxed text-muted-foreground">
        <p>
          Every year, thousands of students leave marks on the Paper 1 table because they
          spent too long on Question 3 and ran out of time on Question 4 or, worse, on the
          40-mark writing task. The paper lasts one hour and forty-five minutes and is
          usually split 60 minutes on reading (Questions 1 to 4) and 45 minutes on
          creative writing (Question 5). This guide gives you a minute-by-minute plan you
          can actually stick to.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">The headline split</h2>
        <ul className="list-disc space-y-1 pl-6">
          <li>15 minutes — reading the source and planning.</li>
          <li>45 minutes — Questions 1 to 4 (reading responses).</li>
          <li>45 minutes — Question 5 (creative writing).</li>
        </ul>
        <p>
          That adds up to one hour forty-five exactly. If you prefer, you can shift five
          minutes from reading to writing, but never the other way around.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Minute by minute</h2>
        <ul className="list-disc space-y-1 pl-6">
          <li><strong>0 to 5:</strong> Read the source straight through. Pencil in hand.</li>
          <li><strong>5 to 10:</strong> Annotate for Question 2 (language) and Question 3 (structure).</li>
          <li><strong>10 to 15:</strong> Re-read the Question 4 line range and plan four points.</li>
          <li><strong>15 to 20:</strong> Question 1 (4 marks, five minutes).</li>
          <li><strong>20 to 30:</strong> Question 2 (8 marks, ten minutes).</li>
          <li><strong>30 to 40:</strong> Question 3 (8 marks, ten minutes).</li>
          <li><strong>40 to 60:</strong> Question 4 (20 marks, twenty minutes).</li>
          <li><strong>60 to 65:</strong> Plan Question 5.</li>
          <li><strong>65 to 100:</strong> Write Question 5.</li>
          <li><strong>100 to 105:</strong> Proof-read Question 5 for capitals, apostrophes and full stops.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-foreground">Why the split matters</h2>
        <p>
          Question 5 is worth forty marks — exactly half the paper. If you start writing
          it with only thirty minutes left, you cannot physically write 600 words of
          Grade 9 quality and proof-read them. The single biggest score improvement most
          students can make on Paper 1 is to start Question 5 on time, even if they have
          not finished Question 4.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">What to do if you are running late</h2>
        <p>
          If you reach minute 55 and are still on Question 3, stop. Write one more
          paragraph, move to Question 4 and write a shorter but complete answer (three
          points instead of four). You must protect Question 5. A missed paragraph on
          Question 4 costs five marks at most. A missed Question 5 paragraph costs far
          more.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">The one-watch rule</h2>
        <p>
          Bring an analogue watch if your exam hall does not have a clock you can see
          without turning round. Set a time for when you will start each question. Write
          the times on the top of your answer booklet. You now have a physical safety net
          and you can glance once per question without losing focus.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Common timing mistakes</h2>
        <p>
          <strong>Reading too slowly.</strong> You do not need to understand every word
          on the first read. Skim for shape and atmosphere; detail comes on the second
          pass.
        </p>
        <p>
          <strong>Planning Question 4 twice.</strong> Plan once, in the 10-to-15 window,
          and then trust the plan.
        </p>
        <p>
          <strong>Forgetting to plan Question 5.</strong> A four-minute plan saves
          fifteen minutes of drift. Never skip it.
        </p>
        <p>
          <strong>Leaving no proof-reading time.</strong> Technical accuracy is worth
          sixteen marks. The last five minutes are not optional.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Examiner tip</h2>
        <p>
          Practise timed papers with the minute plan written at the top. After three
          practice runs, the pacing becomes automatic and you can stop checking your
          watch entirely. On exam day, the timing will feel natural, and every question
          will finish inside its envelope.
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
