import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AQA Language Paper 1 Question 1: How to Answer (4 Marks) | The English Hub',
  description:
    'Step-by-step guide to AQA English Language Paper 1 Question 1: list four things from the extract. Mark scheme, model answer, timing and common mistakes. Written by GCSE examiners.',
  alternates: {
    canonical:
      'https://theenglishhub.app/analysis/language-paper/aqa-language-paper-1-question-1-guide',
  },
}

const related = [
  {
    slug: 'aqa-language-paper-1-question-2-language-analysis',
    title: 'Paper 1 Question 2 — language analysis',
  },
  {
    slug: 'paper-1-time-management-60-minutes',
    title: 'Paper 1 time management in 60 minutes',
  },
  {
    slug: 'common-mistakes-aqa-language-paper-1',
    title: 'Common mistakes in AQA Language Paper 1',
  },
  {
    slug: 'paper-1-how-to-identify-language-techniques',
    title: 'How to identify language techniques',
  },
]

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'AQA Language Paper 1 Question 1: How to Answer (4 Marks)',
    description:
      'Step-by-step guide to answering AQA English Language Paper 1 Question 1: list four things from the extract. Mark scheme, model answer and timing.',
    author: { '@type': 'Organization', name: 'The English Hub' },
    publisher: { '@type': 'Organization', name: 'The English Hub' },
    mainEntityOfPage:
      'https://theenglishhub.app/analysis/language-paper/aqa-language-paper-1-question-1-guide',
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
        <span className="text-foreground">Paper 1 Question 1 guide</span>
      </nav>

      <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
        AQA Language Paper 1 Question 1: how to answer (4 marks)
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">Written by GCSE examiners</p>

      <article className="mt-8 space-y-6 text-base leading-relaxed text-muted-foreground">
        <p>
          Question 1 on AQA English Language Paper 1 is the easiest four marks on the whole
          paper, and yet students lose a third of them every year because they rush, because
          they paraphrase when they should lift, or because they look in the wrong part of
          the source. This guide shows you exactly what the examiner is looking for, how to
          answer in under five minutes, and how to turn a careless three out of four into a
          guaranteed full-marks opener every single time.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">What the question looks like</h2>
        <p>
          The wording almost never changes. The examiner directs you to a specific span of
          lines, usually the first ten to twenty, and asks you to &ldquo;list four things about X
          from this part of the source&rdquo;. X could be a person, a setting, a piece of
          weather, an object or a feeling. Because the range of lines is fixed, anything you
          write that comes from outside that window scores zero, even if it is a perfect
          detail from later in the text.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">The mark scheme in plain English</h2>
        <p>
          There are four marks available and four things to list, so each correct answer is
          worth exactly one mark. The examiner is a computer reader in all but name: they
          scan for four separate, clearly-numbered facts about the subject that appear
          within the stated lines. You do not need to explain, analyse or quote. You do not
          need to write in full sentences. You only need to show that you can read and lift.
        </p>
        <p>
          The only way to lose marks is to repeat yourself (two answers about hair colour
          will only count once), to write something the text does not say, to go outside the
          line range, or to write so vaguely that the examiner cannot tell what detail you
          mean.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">The five-minute method</h2>
        <ol className="list-decimal space-y-2 pl-6">
          <li>
            <strong>Read the question first.</strong> Underline the subject (for example
            &ldquo;the house&rdquo;) and the line range.
          </li>
          <li>
            <strong>Skim only those lines.</strong> Pencil-tick anything that tells you
            something about the subject: an action, a description, a colour, a sound.
          </li>
          <li>
            <strong>Pick the four most obvious.</strong> Avoid inference. If the text says
            the house was old, write &ldquo;the house is old&rdquo; — do not write &ldquo;the
            house feels abandoned&rdquo; unless the text actually says so.
          </li>
          <li>
            <strong>Number your answers 1 to 4</strong> on separate lines.
          </li>
          <li>
            <strong>Move on.</strong> You should spend no more than five minutes on this
            question out of your sixty-minute reading section.
          </li>
        </ol>

        <h2 className="text-2xl font-semibold text-foreground">Worked example</h2>
        <p>
          Imagine the extract begins: <em>The cottage stood alone on the cliff. Its roof was
          made of red tiles that had faded to pink in the sun. Smoke curled from a crooked
          chimney, and a wooden gate creaked in the wind.</em>
        </p>
        <p>
          The question is: <em>List four things from this part of the text about the
          cottage.</em>
        </p>
        <p>A full-marks answer would be:</p>
        <ol className="list-decimal space-y-1 pl-6">
          <li>The cottage is alone on the cliff.</li>
          <li>The roof is made of red tiles.</li>
          <li>Smoke comes out of a crooked chimney.</li>
          <li>There is a wooden gate that creaks.</li>
        </ol>
        <p>
          Notice that each point is about the cottage itself, each comes from the named
          extract, and each is different. You could write them in bullet form or as a simple
          numbered list; both score full marks.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Three mistakes to avoid</h2>
        <p>
          <strong>Do not interpret.</strong> This is not Question 2. Writing &ldquo;the
          cottage seems sad because the tiles have faded&rdquo; is inference, and the examiner
          cannot award a mark for something the text does not literally say.
        </p>
        <p>
          <strong>Do not copy whole sentences.</strong> You are allowed to quote, but long
          lifts risk including extra information that muddies the point. Short, clean facts
          are safer.
        </p>
        <p>
          <strong>Do not answer about the wrong subject.</strong> If the question asks about
          the cottage, the fact that &ldquo;the wind is strong&rdquo; is technically in the
          extract but it is about the weather, not the cottage. Zero marks.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Examiner tip</h2>
        <p>
          The fastest way to check your answer is to tick each point back against the line
          it came from. If you cannot find the exact line, delete it and pick another. A
          clean four out of four here protects your confidence for the harder questions that
          follow, and frees up time for Question 4 where every minute matters.
        </p>

        <div className="rounded-xl border border-border bg-card p-6">
          <h3 className="text-lg font-semibold text-foreground">Related guides</h3>
          <ul className="mt-3 space-y-2 text-sm">
            {related.map((r) => (
              <li key={r.slug}>
                <Link
                  href={`/analysis/language-paper/${r.slug}`}
                  className="text-primary hover:underline"
                >
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
