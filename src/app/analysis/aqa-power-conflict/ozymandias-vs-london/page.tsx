import type { Metadata } from 'next'
import Link from 'next/link'
import { AnalysisBoardGate } from '../_components/AnalysisBoardGate'

const PAGE_URL = 'https://theenglishhub.app/analysis/aqa-power-conflict/ozymandias-vs-london'

export const metadata: Metadata = {
  title: 'Ozymandias vs London: Comparison | AQA Power and Conflict',
  description:
    'Grade 9 comparison of Shelley\u2019s Ozymandias and Blake\u2019s London. Tyranny, decay, suffering and Romantic radical politics. Written by GCSE examiners.',
  alternates: { canonical: PAGE_URL },
}

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Ozymandias vs London: Comparison',
    description: 'Grade 9 comparison of Ozymandias and London for AQA Power and Conflict.',
    author: { '@type': 'Organization', name: 'The English Hub' },
    publisher: { '@type': 'Organization', name: 'The English Hub' },
    mainEntityOfPage: PAGE_URL,
  }

  return (
    <AnalysisBoardGate>
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="mb-4 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/analysis/aqa-power-conflict" className="hover:text-foreground">AQA Power and Conflict</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">Ozymandias vs London</span>
      </nav>

      <h1 className="text-4xl font-bold tracking-tight text-foreground">Ozymandias vs London: Comparison</h1>
      <p className="mt-3 text-sm text-muted-foreground">Written by GCSE examiners</p>

      <article className="mt-8 space-y-5 text-[17px] leading-relaxed text-foreground">
        <p>
          Shelley&apos;s <em>Ozymandias</em> (1817) and Blake&apos;s <em>London</em> (1794)
          are the two Romantic radical poems in the AQA Power and Conflict anthology. Both
          were written in response to political systems the poets despised: Blake walking the
          streets of revolutionary-era London, Shelley writing from self-imposed exile against
          the Regency monarchy. The easiest way to turn this pairing into a Grade 9 answer is
          to argue that both poems are angry protest poems, but that Shelley attacks power at
          its most monumental while Blake attacks it at its most everyday.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">Context in one paragraph</h2>
        <p>
          Blake was writing during the French Revolution, outraged by industrialisation, child
          labour and a state church he felt had sold out to political power. Shelley was
          writing twenty-three years later, after Napoleon, after Peterloo was looming, and
          with the bitter sense that revolutionary hope had been crushed. Both men were
          religious radicals, both hated monarchy, and both used poetry as a way of smuggling
          political argument into respectable drawing rooms. Knowing this lets you treat the
          poems as complementary assaults on the idea that authority is natural or permanent.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">Three similarities</h2>
        <p>
          <strong>1. Both attack the misuse of power.</strong> Ozymandias is a long-dead
          tyrant whose arrogance is mocked by time; the king, priest and soldier in London are
          living tyrants whose arrogance is mocked by the blood and sighs they leave behind.
          Both poets refuse to let power present itself as natural.
        </p>
        <p>
          <strong>2. Both use sensory imagery to make abstract power feel physical.</strong>
          Shelley gives us the <q>sneer of cold command</q> carved into stone; Blake gives us
          the <q>mind-forg&apos;d manacles</q> heard in every voice. In both, ideology is made
          audible or visible so that the reader cannot look away from it.
        </p>
        <p>
          <strong>3. Both use tightly controlled forms against a chaotic subject.</strong>
          Shelley writes a sonnet — a form usually reserved for love — and uses it for
          political satire. Blake writes four neat quatrains of iambic tetrameter, as regular
          as a marching step, which makes the horror of what he describes feel inescapable.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">Three key contrasts</h2>
        <p>
          <strong>1. Scale.</strong> Ozymandias is about the vast, historical ego of an
          emperor; London is about ordinary men, women and babies. Shelley zooms out,
          Blake zooms in.
        </p>
        <p>
          <strong>2. Tone.</strong> Shelley&apos;s tone is ironic — almost amused — because
          the tyrant is already dead. Blake&apos;s tone is furious and grieving because the
          tyrants are still in charge.
        </p>
        <p>
          <strong>3. Who suffers.</strong> In Ozymandias the victim is the tyrant himself,
          undone by time. In London the victims are the chimney-sweeper, the soldier and the
          <q> youthful Harlot</q>, each one an individual Blake forces the reader to see.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">Grade 9 thesis you can adapt</h2>
        <p>
          &quot;Both Shelley and Blake use tightly controlled forms to attack abusive power,
          but while Shelley allows time to dismantle a distant tyrant for him, Blake insists
          that the reader see the present-tense suffering that power is inflicting on the
          streets of his own city.&quot;
        </p>
      </article>

      <section className="mt-12 rounded-xl border border-border bg-muted/40 p-6">
        <h2 className="text-xl font-semibold text-foreground">Related analyses</h2>
        <ul className="mt-3 space-y-2 text-sm">
          <li><Link href="/analysis/aqa-power-conflict/ozymandias-vs-my-last-duchess" className="text-primary hover:underline">Ozymandias vs My Last Duchess</Link></li>
          <li><Link href="/analysis/aqa-power-conflict/tissue-vs-ozymandias" className="text-primary hover:underline">Tissue vs Ozymandias</Link></li>
          <li><Link href="/analysis/aqa-power-conflict/suffering-theme-across-anthology" className="text-primary hover:underline">Suffering — Theme Across the Anthology</Link></li>
          <li><Link href="/analysis/aqa-power-conflict/corruption-of-power-theme-across-anthology" className="text-primary hover:underline">Corruption of Power — Theme</Link></li>
        </ul>
      </section>

      <section className="mt-6 rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground">Revising the whole cluster?</h2>
        <p className="mt-2 text-muted-foreground leading-relaxed">
          This page is a quick-answer comparison. For full poem-by-poem study and context,
          head to our main Power and Conflict revision notes.
        </p>
        <div className="mt-4">
          <Link href="/revision/poetry/power-and-conflict" className="inline-flex h-10 items-center justify-center rounded-lg bg-primary px-4 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/85">
            Go to Power and Conflict revision notes
          </Link>
        </div>
      </section>
    </main>
    </AnalysisBoardGate>
  )
}
