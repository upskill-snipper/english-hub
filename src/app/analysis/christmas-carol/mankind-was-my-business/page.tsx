import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '"Mankind was my business" — A Christmas Carol Quote Analysis',
  description:
    'GCSE examiner analysis of Marley\'s declaration "Mankind was my business" in Stave One of A Christmas Carol. Language, context and meaning.',
  alternates: {
    canonical:
      'https://theenglishhub.app/analysis/christmas-carol/mankind-was-my-business',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: '"Mankind was my business" Quote Analysis',
  description:
    'GCSE analysis of Jacob Marley\'s lamenting speech in Stave One of A Christmas Carol and its central moral message.',
  author: { '@type': 'Organization', name: 'The English Hub — GCSE Examiners' },
  publisher: {
    '@type': 'Organization',
    name: 'The English Hub',
    logo: { '@type': 'ImageObject', url: 'https://theenglishhub.app/icon.svg' },
  },
  datePublished: '2025-11-01',
  dateModified: '2026-01-15',
  mainEntityOfPage:
    'https://theenglishhub.app/analysis/christmas-carol/mankind-was-my-business',
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
          Quote Analysis · Stave One
        </p>
        <h1 className="text-4xl font-heading font-bold text-foreground">
          &ldquo;Mankind was my business&rdquo; — Analysis
        </h1>
        <p className="text-sm text-muted-foreground">
          Written by GCSE examiners · A Christmas Carol, Charles Dickens (1843)
        </p>
      </header>

      <article className="space-y-6 text-base leading-relaxed text-foreground/90">
        <blockquote className="border-l-4 border-primary bg-card/60 px-5 py-4 italic text-foreground">
          &ldquo;Business! Mankind was my business. The common welfare was my business;
          charity, mercy, forbearance, and benevolence, were, all, my business. The
          dealings of my trade were but a drop of water in the comprehensive ocean of my
          business!&rdquo;
        </blockquote>

        <h2 className="text-2xl font-heading font-bold">Where it appears</h2>
        <p>
          These words are spoken by Jacob Marley&rsquo;s ghost in Stave One. Marley has
          just shown Scrooge the chain he forged in life and warned him of the three
          spirits who will visit him. When Scrooge tries to defend him — saying that
          Marley was always &ldquo;a good man of business&rdquo; — Marley erupts with this
          passionate cry. It is the novella&rsquo;s clearest statement of Dickens&rsquo;s
          moral thesis.
        </p>

        <h2 className="text-2xl font-heading font-bold">Language analysis</h2>
        <p>
          Marley&rsquo;s speech hinges on a deliberate redefinition of the word
          <strong> &ldquo;business&rdquo;</strong>. Scrooge uses it to mean the
          counting-house, ledgers and profit. Marley hijacks the word and insists it means
          something bigger: duty to humanity. The rhetorical strategy is to show Scrooge
          that he has been using the right word all along but attaching the wrong meaning
          to it. This is one of the most powerful examples of Dickens using language as a
          moral weapon — Marley forces Scrooge to hear a familiar word fresh.
        </p>
        <p>
          The asyndetic list — &ldquo;charity, mercy, forbearance, and benevolence&rdquo;
          — piles virtue upon virtue. Each is a Christian quality associated with the
          ethical life. Marley is not simply regretting his greed; he is listing the
          entire catalogue of moral work he failed to do. The list functions almost like a
          confessional prayer.
        </p>
        <p>
          The metaphor &ldquo;a drop of water in the comprehensive ocean of my business&rdquo;
          is the crowning image of the speech. A merchant of Marley&rsquo;s wealth would
          have thought of his trade as enormous — ships, warehouses, ledgers, fortune. But
          compared with the infinite ocean of moral responsibility, even that great
          enterprise was tiny. Dickens uses the cosmic scale of the ocean to shame the
          narrow scale of the ledger. A Grade 9 student might note that the ocean is also
          an image of endlessness; Marley&rsquo;s failure is unending, and so is the work
          Scrooge still has time to do.
        </p>

        <h2 className="text-2xl font-heading font-bold">Form and structure</h2>
        <p>
          The speech is built on <strong>anaphora</strong>: Marley repeats &ldquo;my
          business&rdquo; four times in quick succession. This rhetorical hammer drives
          the word deep into Scrooge&rsquo;s mind. It also gives the moment a sermon-like
          quality, as if Marley were preaching from beyond the grave. Dickens deliberately
          borrows the rhythms of a Christmas sermon so that his secular novella can carry
          spiritual weight. Structurally, Marley&rsquo;s speech sets up the entire arc of
          the book: everything the three spirits show Scrooge is designed to prove that
          mankind really is his business too.
        </p>

        <h2 className="text-2xl font-heading font-bold">Context</h2>
        <p>
          Dickens had been raised as an Anglican and remained a committed Christian
          throughout his life, though he detested hypocritical piety and doctrinal
          quarrels. His brand of Christianity emphasised practical charity and the
          Sermon on the Mount. Marley&rsquo;s speech reflects this strand of Victorian
          thought, sometimes called &ldquo;social Christianity&rdquo;, which argued that
          the gospel demanded political and economic action on behalf of the poor. It
          directly counters the laissez-faire economics preached by Malthus, Adam Smith
          and David Ricardo, who claimed that interfering with the market would only
          worsen poverty.
        </p>

        <h2 className="text-2xl font-heading font-bold">Top-grade reading</h2>
        <p>
          The strongest essays argue that Marley&rsquo;s speech is not only the moral
          centre of the novella but also a warning about time. Marley says
          &ldquo;mankind was my business&rdquo; — the past tense is crucial. He has run
          out of time to act. By giving Scrooge this speech at the beginning rather than
          the end, Dickens ensures that the remainder of the book is a race against the
          clock. The novella&rsquo;s urgency depends on the difference between
          Marley&rsquo;s &ldquo;was&rdquo; and the possibility, for Scrooge, of still
          saying &ldquo;is&rdquo;. Grade 9 students who link Marley&rsquo;s speech to
          Scrooge&rsquo;s later promise — &ldquo;I will honour Christmas in my heart, and
          try to keep it all the year&rdquo; — can show the full shape of Dickens&rsquo;s
          argument in a single paragraph.
        </p>
      </article>

      <aside className="rounded-xl border border-border bg-card p-6">
        <h2 className="text-lg font-heading font-bold">Related analyses</h2>
        <ul className="mt-3 space-y-2 text-sm">
          <li>
            <Link
              href="/analysis/christmas-carol/i-wear-the-chain-i-forged-in-life"
              className="text-primary hover:underline"
            >
              &ldquo;I wear the chain I forged in life&rdquo;
            </Link>
          </li>
          <li>
            <Link
              href="/analysis/christmas-carol/jacob-marley-character-analysis"
              className="text-primary hover:underline"
            >
              Jacob Marley — Character Analysis
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
              href="/analysis/christmas-carol/marleys-ghost-analysis"
              className="text-primary hover:underline"
            >
              Marley&rsquo;s Ghost — Full Analysis
            </Link>
          </li>
        </ul>
      </aside>

      <div className="rounded-xl border border-border bg-card p-6 text-center">
        <p className="text-muted-foreground">
          Master quotes faster with spaced-repetition flashcards and quizzes.
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
