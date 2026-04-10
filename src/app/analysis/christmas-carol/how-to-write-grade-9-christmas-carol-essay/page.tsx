import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Write a Grade 9 A Christmas Carol Essay — GCSE Guide',
  description:
    'Step-by-step examiner guide to writing a Grade 9 GCSE essay on A Christmas Carol. Structure, language analysis and context tips.',
  alternates: {
    canonical:
      'https://theenglishhub.app/analysis/christmas-carol/how-to-write-grade-9-christmas-carol-essay',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Write a Grade 9 A Christmas Carol Essay',
  description:
    'GCSE examiner guide to writing a Grade 9 essay on A Christmas Carol by Charles Dickens.',
  author: { '@type': 'Organization', name: 'The English Hub — GCSE Examiners' },
  publisher: {
    '@type': 'Organization',
    name: 'The English Hub',
    logo: { '@type': 'ImageObject', url: 'https://theenglishhub.app/icon.svg' },
  },
  datePublished: '2025-11-01',
  dateModified: '2026-01-15',
  mainEntityOfPage:
    'https://theenglishhub.app/analysis/christmas-carol/how-to-write-grade-9-christmas-carol-essay',
}

export default function Page() {
  return (
    <div className="mx-auto max-w-3xl space-y-8 px-4 py-10 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <nav className="text-sm text-muted-foreground">
        <Link href="/analysis/christmas-carol" className="hover:text-primary">
          A Christmas Carol Analysis
        </Link>
      </nav>

      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-primary">
          Essay Guidance
        </p>
        <h1 className="text-4xl font-heading font-bold text-foreground">
          How to Write a Grade 9 A Christmas Carol Essay
        </h1>
        <p className="text-sm text-muted-foreground">
          Written by GCSE examiners · A Christmas Carol, Charles Dickens (1843)
        </p>
      </header>

      <article className="space-y-6 text-base leading-relaxed text-foreground/90">
        <h2 className="text-2xl font-heading font-bold">What a Grade 9 essay actually looks like</h2>
        <p>
          A Grade 9 essay on A Christmas Carol does four things at once. It answers the
          question directly from the opening sentence. It uses a sequence of carefully
          chosen quotations, each analysed at the level of individual words. It weaves
          historical context into the analysis rather than bolting it on in a separate
          paragraph. And it develops an overall argument about Dickens&rsquo;s purpose,
          so that each paragraph contributes to a bigger claim. Candidates who simply
          &ldquo;point, quote, explain&rdquo; cap out at around Grade 6 or 7. To go
          higher, you have to think like an essayist.
        </p>

        <h2 className="text-2xl font-heading font-bold">Step 1: Read the question carefully</h2>
        <p>
          Underline every content word in the question. If the question asks about
          Scrooge&rsquo;s presentation &ldquo;as a greedy man&rdquo;, your essay must
          stay focused on greed specifically — not generalised villainy. Examiners
          reward precise interpretation. Work out, in one sentence, what your answer
          to the question is. That sentence becomes your thesis.
        </p>

        <h2 className="text-2xl font-heading font-bold">Step 2: Plan your argument in three paragraphs</h2>
        <p>
          Good essays move somewhere. Plan your body paragraphs so that each one
          advances your thesis. A common structure is: (1) start with how the extract
          presents the idea, (2) show how the wider novella develops it, (3) show how
          Dickens&rsquo;s purpose reframes the idea in context. Each paragraph should
          introduce a new angle on the thesis rather than restate it.
        </p>

        <h2 className="text-2xl font-heading font-bold">Step 3: Pick quotations that do double duty</h2>
        <p>
          The best quotations contain more than one technique. &ldquo;Solitary as an
          oyster&rdquo; is a Grade 9 quotation because it is a simile, a piece of
          sibilance, and a foreshadowing of the pearl Dickens hints at inside Scrooge.
          One quotation, three arguments. Avoid long block quotations — they waste
          precious exam time and make detailed analysis harder.
        </p>

        <h2 className="text-2xl font-heading font-bold">Step 4: Analyse at word level</h2>
        <p>
          Do not just identify techniques; explain why Dickens chose specific words.
          Ask yourself: why this verb, why this adjective, why this order? A Grade 9
          paragraph might notice that Dickens&rsquo;s verbs &ldquo;squeezing,
          wrenching, grasping, scraping&rdquo; are transitive but lack objects, and
          argue that this grammatical choice turns Scrooge into motiveless greed. That
          observation is not in a revision guide — it is the kind of insight examiners
          reward most highly.
        </p>

        <h2 className="text-2xl font-heading font-bold">Step 5: Weave context in precisely</h2>
        <p>
          Context is worth real marks, but only when it explains the text rather than
          sitting beside it. Do not write a paragraph on the 1834 Poor Law in general.
          Instead, use context to explain a specific line: &ldquo;Scrooge&rsquo;s
          phrase &lsquo;surplus population&rsquo; borrows directly from Thomas
          Malthus, so Dickens is exposing the cruelty of Malthusian logic at the
          precise moment Scrooge speaks it.&rdquo; Context should always be plugged
          into the analysis of a word or sentence.
        </p>

        <h2 className="text-2xl font-heading font-bold">Step 6: Write about structure as well as language</h2>
        <p>
          Many candidates analyse language well but forget to discuss form and
          structure. Dickens calls his chapters &ldquo;staves&rdquo; because a stave
          is a musical unit. The novella&rsquo;s five-stave structure mirrors the
          verses of a carol and gives Scrooge&rsquo;s redemption a musical shape.
          Stave Five is a deliberate inversion of Stave One, almost line for line.
          Noticing these structural patterns lifts an essay into the top band.
        </p>

        <h2 className="text-2xl font-heading font-bold">Step 7: End with Dickens&rsquo;s purpose</h2>
        <p>
          A Grade 9 conclusion does not simply restate the thesis. It zooms out and
          asks what Dickens wanted his readers to feel or do. Dickens wrote the Carol
          as an intervention in the political argument about poverty, and he used a
          ghost story because he believed fiction could change readers&rsquo; hearts
          faster than a pamphlet could. A strong conclusion argues that the novella
          is less a story than a moral weapon.
        </p>

        <h2 className="text-2xl font-heading font-bold">Common Grade 9 phrases to borrow</h2>
        <p>
          These sentence stems are useful in exam conditions because they push your
          thinking towards higher-level analysis:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>&ldquo;Dickens&rsquo;s use of [technique] implies [insight], which
            aligns with his broader purpose of...&rdquo;</li>
          <li>&ldquo;The grammatical choice of [feature] suggests that...&rdquo;</li>
          <li>&ldquo;Structurally, this scene functions as a mirror of...&rdquo;</li>
          <li>&ldquo;In the context of the 1840s, a Victorian reader would have
            understood this line as a direct reference to...&rdquo;</li>
          <li>&ldquo;By the end of the novella, Dickens has redefined the word
            [X] so that it now means...&rdquo;</li>
        </ul>

        <h2 className="text-2xl font-heading font-bold">Top-grade reading</h2>
        <p>
          The single most important habit of a Grade 9 candidate is to treat the
          novella as an argument rather than a story. Dickens is not just telling the
          tale of Scrooge&rsquo;s conversion; he is trying to persuade his reader of
          a set of moral ideas. Every word, every chain, every blessing, every stave
          is designed to move the reader towards those ideas. If you can show that
          you recognise this persuasive design — and can quote the specific words
          that make it work — you will be writing at the very top of the mark scheme.
        </p>
      </article>

      <aside className="rounded-xl border border-border bg-card p-6">
        <h2 className="text-lg font-heading font-bold">Related analyses</h2>
        <ul className="mt-3 space-y-2 text-sm">
          <li>
            <Link
              href="/analysis/christmas-carol/scrooge-character-analysis"
              className="text-primary hover:underline"
            >
              Scrooge — Character Analysis
            </Link>
          </li>
          <li>
            <Link
              href="/analysis/christmas-carol/redemption-theme-analysis"
              className="text-primary hover:underline"
            >
              Redemption Theme
            </Link>
          </li>
          <li>
            <Link
              href="/analysis/christmas-carol/poverty-theme-analysis"
              className="text-primary hover:underline"
            >
              Poverty Theme
            </Link>
          </li>
          <li>
            <Link
              href="/analysis/christmas-carol/dickens-victorian-context"
              className="text-primary hover:underline"
            >
              Dickens and Victorian Context
            </Link>
          </li>
        </ul>
      </aside>

      <div className="rounded-xl border border-border bg-card p-6 text-center">
        <p className="text-muted-foreground">
          Put this into practice with AI-marked GCSE essay questions.
        </p>
        <Link
          href="/revision/texts"
          className="mt-3 inline-flex items-center rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
        >
          Open the Revision Hub
        </Link>
      </div>
    </div>
  )
}
