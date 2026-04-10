import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AQA Language Paper 1 Question 2: Language Analysis (8 Marks) | The English Hub',
  description:
    'How to answer AQA English Language Paper 1 Question 2, the language analysis question worth 8 marks. Mark scheme, PEE paragraphs, model answer and timing. Written by GCSE examiners.',
  alternates: {
    canonical:
      'https://theenglishhub.app/analysis/language-paper/aqa-language-paper-1-question-2-language-analysis',
  },
}

const related = [
  { slug: 'aqa-language-paper-1-question-1-guide', title: 'Paper 1 Question 1 — list four things' },
  { slug: 'aqa-language-paper-1-question-3-structure', title: 'Paper 1 Question 3 — structure' },
  { slug: 'paper-1-how-to-identify-language-techniques', title: 'How to identify language techniques' },
  { slug: '25-language-techniques-every-student-must-know', title: '25 language techniques every student must know' },
]

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'AQA Language Paper 1 Question 2: Language Analysis (8 Marks)',
    description:
      'How to answer AQA English Language Paper 1 Question 2, the language analysis question worth 8 marks.',
    author: { '@type': 'Organization', name: 'The English Hub' },
    publisher: { '@type': 'Organization', name: 'The English Hub' },
    mainEntityOfPage:
      'https://theenglishhub.app/analysis/language-paper/aqa-language-paper-1-question-2-language-analysis',
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
        <span className="text-foreground">Paper 1 Question 2 language analysis</span>
      </nav>

      <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
        AQA Language Paper 1 Question 2: language analysis (8 marks)
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">Written by GCSE examiners</p>

      <article className="mt-8 space-y-6 text-base leading-relaxed text-muted-foreground">
        <p>
          Question 2 is the first question that tests real analysis, and it is where the
          gap between a Grade 5 and a Grade 9 starts to open. The examiner gives you a
          shorter span of lines than Question 1 and asks you to comment on how the writer
          uses language to describe a specific thing. Your job is not to spot devices and
          name them; it is to explain the effect those devices have on the reader, using
          precise subject terminology and the best-quality quotations the extract has to
          offer.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">The exact wording</h2>
        <p>
          The question almost always says: &ldquo;Look in detail at this extract from lines
          X to Y. How does the writer use language here to describe [subject]?&rdquo; It
          then reminds you to think about words and phrases, language features and
          techniques, and sentence forms. Those three bullet points are a hidden checklist.
          A full-marks answer touches all three categories at least once.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">The mark scheme in plain English</h2>
        <p>
          Eight marks are split across four levels. Level 1 just names devices. Level 2
          makes a simple comment. Level 3 explains an effect clearly. Level 4 analyses the
          effect in detail, using precise terminology and well-chosen quotations. You reach
          the top band when every point you make is about the effect on the reader and
          every quotation is short and surgical.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">The 10-minute method</h2>
        <ol className="list-decimal space-y-2 pl-6">
          <li>Spend ninety seconds annotating the extract. Circle interesting word choices and underline sentence forms that look unusual.</li>
          <li>Pick three quotations that each do different work: one powerful word, one figurative phrase, one sentence form (for example a short sentence or a list).</li>
          <li>Write three tight PEE paragraphs. You do not need a conclusion.</li>
          <li>In each paragraph, name the technique, quote briefly, then explain the effect on the reader in at least two sentences.</li>
          <li>Leave thirty seconds to check you have used subject terminology in every paragraph.</li>
        </ol>

        <h2 className="text-2xl font-semibold text-foreground">The Grade 9 paragraph shape</h2>
        <p>
          A top-band paragraph opens with a short topic sentence that states the overall
          impression. It then embeds a brief quotation — no more than six or seven words —
          and zooms in on a single word from that quotation. The explanation explores
          connotations, then widens out to talk about how the reader is positioned to feel
          or see something. The final sentence links back to the question&apos;s subject.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Worked example</h2>
        <p>
          Source line: <em>The river hissed between the rocks like a wounded animal
          refusing to die.</em>
        </p>
        <p>
          <strong>Model paragraph.</strong> The writer personifies the river as &ldquo;a
          wounded animal refusing to die&rdquo; to make the landscape feel violent and alive.
          The verb &ldquo;hissed&rdquo; carries snake-like connotations, suggesting the water
          is hostile and predatory, while the simile&apos;s stubborn refusal creates an
          impression of suffering that the reader instinctively flinches from. The long,
          drawn-out sentence mirrors the slow death it describes, so that structure and
          imagery combine to unsettle us and prepare us for the danger that arrives in the
          next paragraph.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Three mistakes that cost marks</h2>
        <p>
          <strong>Feature-spotting.</strong> Writing &ldquo;the writer uses a simile&rdquo;
          and moving on is a Level 1 tick. You must explain the effect.
        </p>
        <p>
          <strong>Long quotations.</strong> Quoting full sentences buries the word you want
          to analyse. Keep quotations under seven words and embed them in your own sentence.
        </p>
        <p>
          <strong>Generic vocabulary.</strong> Words like &ldquo;nice&rdquo;,
          &ldquo;interesting&rdquo;, &ldquo;shows&rdquo; and &ldquo;effective&rdquo; cap you
          at Level 2. Reach for precise verbs: evokes, unsettles, amplifies, foreshadows.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Examiner tip</h2>
        <p>
          The single quickest upgrade on this question is to talk about sentence forms. Most
          students only comment on words. If you can add one line about a short sentence,
          a list of three, or a long, breathless clause, you instantly meet the third
          bullet point on the mark scheme and push yourself into the top band.
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
