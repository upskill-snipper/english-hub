import type { Metadata } from 'next'
import Link from 'next/link'

const PAGE_URL = 'https://theenglishhub.app/analysis/aqa-power-conflict/corruption-of-power-theme-across-anthology'

export const metadata: Metadata = {
  title: 'Corruption of Power: Theme Across the AQA Power and Conflict Anthology',
  description:
    'Grade 9 analysis of the corruption of power across Ozymandias, London, My Last Duchess and Charge of the Light Brigade. Written by GCSE examiners.',
  alternates: { canonical: PAGE_URL },
}

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Corruption of Power — Theme Across the Anthology',
    description: 'Grade 9 theme analysis for AQA Power and Conflict.',
    author: { '@type': 'Organization', name: 'The English Hub' },
    publisher: { '@type': 'Organization', name: 'The English Hub' },
    mainEntityOfPage: PAGE_URL,
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="mb-4 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/analysis/aqa-power-conflict" className="hover:text-foreground">AQA Power and Conflict</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">Corruption of Power — Theme</span>
      </nav>

      <h1 className="text-4xl font-bold tracking-tight text-foreground">Corruption of Power: Theme Across the Anthology</h1>
      <p className="mt-3 text-sm text-muted-foreground">Written by GCSE examiners</p>

      <article className="mt-8 space-y-5 text-[17px] leading-relaxed text-foreground">
        <p>
          The corruption of power is the theme AQA examiners love most because it cuts
          through the whole anthology. Strong essays on this theme argue that the poets
          are not simply showing bad leaders — they are arguing that power, when
          concentrated and unchecked, always corrupts the person who holds it and the
          people around them. The best answers trace this argument from the monumental to
          the domestic.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">Ozymandias (Shelley)</h2>
        <p>
          Shelley&apos;s pharaoh is the clearest case. Power has warped him into a
          megalomaniac whose <q>sneer of cold command</q> has been preserved precisely
          because the sculptor <q>well those passions read</q>. Shelley shows that power
          corrupts both the ruler and the art that serves him — and that time eventually
          reduces both to rubble.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">London (Blake)</h2>
        <p>
          Blake accuses every institution of corruption at once. The king, the church and
          the army all come in for attack: the <q>hapless Soldier&apos;s sigh / Runs in
          blood down Palace walls</q>, and the <q>Chimney-sweeper&apos;s cry / Every
          blackening Church appalls</q>. For Blake, power is corrupt because it claims
          moral authority while profiting from misery.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">My Last Duchess (Browning)</h2>
        <p>
          Browning&apos;s Duke is the perfect dramatic monologue of domestic corruption.
          His inheritance — the <q>nine-hundred-years-old name</q> — gives him absolute
          power inside his own house, and he uses it to have his wife killed. Browning
          argues that power rots the personal life long before it rots the political one.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">The Charge of the Light Brigade (Tennyson)</h2>
        <p>
          Tennyson tries to celebrate his soldiers, but his own poem betrays him. The
          casual phrase <q>Someone had blunder&apos;d</q> lets the reader see the
          corruption of a command structure in which hundreds of men can die for a
          miscommunication. Even the Victorian laureate cannot hide it.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">Kamikaze (Garland)</h2>
        <p>
          Garland gives us a different kind of corruption: a community so committed to an
          ideology that it cannot forgive a man for choosing to live. The wife and children
          who <q>treated him as though he no longer existed</q> are enforcing a code that
          has corrupted their capacity to love.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">Grade 9 thesis you can adapt</h2>
        <p>
          &quot;Across the anthology, power is always presented as corrupting: Shelley
          corrupts the pharaoh, Blake corrupts the church and state, Browning corrupts the
          marriage, Tennyson corrupts the command structure, and Garland corrupts the
          family — and in each poem the corruption is written into the voice and form
          that carries it.&quot;
        </p>
      </article>

      <section className="mt-12 rounded-xl border border-border bg-muted/40 p-6">
        <h2 className="text-xl font-semibold text-foreground">Related analyses</h2>
        <ul className="mt-3 space-y-2 text-sm">
          <li><Link href="/analysis/aqa-power-conflict/power-of-humans-theme-across-anthology" className="text-primary hover:underline">Power of Humans — Theme</Link></li>
          <li><Link href="/analysis/aqa-power-conflict/ozymandias-vs-my-last-duchess" className="text-primary hover:underline">Ozymandias vs My Last Duchess</Link></li>
          <li><Link href="/analysis/aqa-power-conflict/kamikaze-vs-my-last-duchess" className="text-primary hover:underline">Kamikaze vs My Last Duchess</Link></li>
          <li><Link href="/analysis/aqa-power-conflict/suffering-theme-across-anthology" className="text-primary hover:underline">Suffering — Theme</Link></li>
        </ul>
      </section>

      <section className="mt-6 rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground">Revising the whole cluster?</h2>
        <p className="mt-2 text-muted-foreground leading-relaxed">
          For full poem-by-poem study, head to our Power and Conflict revision notes.
        </p>
        <div className="mt-4">
          <Link href="/revision/poetry/power-and-conflict" className="inline-flex h-10 items-center justify-center rounded-lg bg-primary px-4 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/85">
            Go to Power and Conflict revision notes
          </Link>
        </div>
      </section>
    </main>
  )
}
