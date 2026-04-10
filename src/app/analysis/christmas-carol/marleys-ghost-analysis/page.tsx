import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Marley\'s Ghost Analysis — A Christmas Carol Scene Study',
  description:
    'GCSE examiner analysis of Marley\'s Ghost in Stave One of A Christmas Carol. Gothic conventions, language, and the moral warning to Scrooge.',
  alternates: {
    canonical: 'https://theenglishhub.app/analysis/christmas-carol/marleys-ghost-analysis',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Marley\'s Ghost — Full Scene Analysis',
  description:
    'GCSE analysis of the appearance of Marley\'s Ghost in Stave One of A Christmas Carol, including Gothic tropes and moral meaning.',
  author: { '@type': 'Organization', name: 'The English Hub — GCSE Examiners' },
  publisher: {
    '@type': 'Organization',
    name: 'The English Hub',
    logo: { '@type': 'ImageObject', url: 'https://theenglishhub.app/icon.svg' },
  },
  datePublished: '2025-11-01',
  dateModified: '2026-01-15',
  mainEntityOfPage:
    'https://theenglishhub.app/analysis/christmas-carol/marleys-ghost-analysis',
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
          Scene Analysis · Stave One
        </p>
        <h1 className="text-4xl font-heading font-bold text-foreground">
          Marley&rsquo;s Ghost — Full Analysis
        </h1>
        <p className="text-sm text-muted-foreground">
          Written by GCSE examiners · A Christmas Carol, Charles Dickens (1843)
        </p>
      </header>

      <article className="space-y-6 text-base leading-relaxed text-foreground/90">
        <blockquote className="border-l-4 border-primary bg-card/60 px-5 py-4 italic text-foreground">
          &ldquo;Marley&rsquo;s face. [...] It looked like a bad lobster in a dark cellar
          [...] The chain he drew was clasped about his middle. It was long, and wound
          about him like a tail; and it was made (for Scrooge observed it closely) of
          cash-boxes, keys, padlocks, ledgers, deeds, and heavy purses wrought in steel.&rdquo;
        </blockquote>

        <h2 className="text-2xl font-heading font-bold">Where it appears</h2>
        <p>
          Marley&rsquo;s Ghost appears at the end of Stave One, the first of the four
          supernatural visitors. Marley&rsquo;s face first surfaces on Scrooge&rsquo;s
          door-knocker, then the full figure manifests in Scrooge&rsquo;s lodgings. This
          long Gothic sequence takes up nearly a quarter of the opening stave and sets
          up the rest of the novella.
        </p>

        <h2 className="text-2xl font-heading font-bold">Gothic conventions</h2>
        <p>
          Dickens draws on several standard Gothic features. There is a <strong>haunted
          interior</strong> (Scrooge&rsquo;s dark, cold rooms), <strong>supernatural
          transformation</strong> (the door-knocker changing into a face), <strong>sound
          effects</strong> (&ldquo;a clanking noise, deep down below&rdquo;), and a
          <strong> ghost who moans and rattles his chains</strong>. But Dickens uses
          these conventions with careful irony. Marley&rsquo;s face is compared to
          &ldquo;a bad lobster in a dark cellar&rdquo; — a startlingly undignified simile
          that is almost comic. Dickens wants the reader to understand that the Gothic
          is not being taken entirely seriously; it is being repurposed for moral
          instruction rather than horror.
        </p>

        <h2 className="text-2xl font-heading font-bold">Language analysis</h2>
        <p>
          The description of the chain is the most powerful moment in the sequence. The
          list of objects — &ldquo;cash-boxes, keys, padlocks, ledgers, deeds, and heavy
          purses wrought in steel&rdquo; — converts the instruments of business into
          instruments of punishment. Each noun is a tool Marley would have used during
          his working life. In death, they have become his shackles. The metaphor implies
          that what a man worships in life will weigh him down in death, a warning
          consistent with Christian teachings on idolatry.
        </p>
        <p>
          The verb &ldquo;wrought&rdquo; is worth stopping on. It is an old form of the
          verb &ldquo;to work&rdquo; and implies craftsmanship. Dickens chooses it to
          emphasise that the chain was handmade, link by link, just as Marley&rsquo;s
          later speech makes explicit. The Gothic imagery is never just decoration for
          Dickens; it is always a vehicle for a moral claim.
        </p>
        <p>
          The face of Marley is given &ldquo;dismal light&rdquo;, described as a
          &ldquo;phantom&rsquo;s spectacles turned up on its ghostly forehead&rdquo; —
          tiny, almost humorous details that make the ghost recognisably the dead man
          Scrooge worked with. Dickens is not trying to create pure terror; he is
          trying to make Marley feel personal. The point is that Scrooge is staring at
          what he himself will become.
        </p>

        <h2 className="text-2xl font-heading font-bold">Form and structure</h2>
        <p>
          The scene functions as the narrative&rsquo;s hinge. Until Marley arrives,
          nothing supernatural has happened, and Scrooge appears to be simply an
          unpleasant businessman. Marley&rsquo;s visit transforms the genre of the book:
          the realist opening yields to a ghost story. This structural pivot is signalled
          by the length and detail Dickens gives the scene. He wants readers to feel the
          floor shift beneath them.
        </p>
        <p>
          Marley also introduces the three-act structure that follows. He announces that
          Scrooge will be &ldquo;haunted by Three Spirits&rdquo;, telling the reader
          exactly what to expect. This clarity is unusual in ghost stories, which often
          rely on suspense. Dickens prefers moral clarity: the book is not about whether
          the ghosts will come but about what they will show.
        </p>

        <h2 className="text-2xl font-heading font-bold">Context</h2>
        <p>
          The Gothic novel was an established genre by 1843 — Horace Walpole&rsquo;s
          The Castle of Otranto (1764), Mary Shelley&rsquo;s Frankenstein (1818) and Ann
          Radcliffe&rsquo;s works were well known. Dickens grew up reading ghost stories
          and had earlier used supernatural elements in The Pickwick Papers. Victorian
          London was also home to a thriving industry of published ghost stories, popular
          especially at Christmas. Dickens fuses that tradition with his social reform
          agenda, so that the frightening parts of the novella serve a political purpose.
        </p>

        <h2 className="text-2xl font-heading font-bold">Top-grade reading</h2>
        <p>
          The strongest essays notice that Marley is the only spirit in the book who can
          be clearly identified as a dead human being. The three spirits that follow are
          allegorical figures rather than ghosts in the literal sense. Marley therefore
          plays a unique role: he bridges the world of the living and the world of moral
          symbols, acting as a kind of translator. Without him, Scrooge would have no
          reason to trust the more abstract visions that follow. Dickens uses Marley&rsquo;s
          specific, personal identity to make the abstract moral machinery of the rest of
          the book feel real and trustworthy.
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
              href="/analysis/christmas-carol/mankind-was-my-business"
              className="text-primary hover:underline"
            >
              &ldquo;Mankind was my business&rdquo;
            </Link>
          </li>
          <li>
            <Link
              href="/analysis/christmas-carol/the-chains-he-drew-were-clasped"
              className="text-primary hover:underline"
            >
              &ldquo;The chain he drew was clasped about his middle&rdquo;
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
        </ul>
      </aside>

      <div className="rounded-xl border border-border bg-card p-6 text-center">
        <p className="text-muted-foreground">
          Revise every stave of A Christmas Carol with examiner-written guides.
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
