import type { Metadata } from 'next'
import Link from 'next/link'

const PAGE_URL = 'https://theenglishhub.app/analysis/aqa-power-conflict/suffering-theme-across-anthology'

export const metadata: Metadata = {
  title: 'Suffering: Theme Across the AQA Power and Conflict Anthology',
  description:
    'Grade 9 analysis of suffering across London, Exposure, Remains, Bayonet Charge and War Photographer. Written by GCSE examiners.',
  alternates: { canonical: PAGE_URL },
}

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Suffering — Theme Across the Anthology',
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
        <span className="text-foreground">Suffering — Theme</span>
      </nav>

      <h1 className="text-4xl font-bold tracking-tight text-foreground">Suffering: Theme Across the Anthology</h1>
      <p className="mt-3 text-sm text-muted-foreground">Written by GCSE examiners</p>

      <article className="mt-8 space-y-5 text-[17px] leading-relaxed text-foreground">
        <p>
          Suffering in the AQA Power and Conflict anthology is almost always presented as
          something caused by power — political, military, institutional or patriarchal.
          The best essays on this theme argue that the poets are not just describing pain,
          they are identifying the people responsible for it and trying to force the
          reader into moral attention.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">London (Blake)</h2>
        <p>
          Blake stages suffering as a chorus heard on a single walk. In <q>every cry of
          every Man, / In every Infant&apos;s cry of fear</q> he hears the consequences of
          industrial London and its institutions. The repeated word <q>every</q> turns
          suffering into something universal and inescapable, and the chimney-sweeper and
          the <q>hapless Soldier&apos;s sigh</q> force the reader to see specific victims
          inside the crowd.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">Exposure (Owen)</h2>
        <p>
          Owen&apos;s trench soldiers suffer from cold, fatigue and despair. The refrain
          <q> But nothing happens</q> transforms waiting itself into pain. Owen writes as
          one of them — the collective <q>we</q> — so that readers cannot hide behind the
          distance of observation.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">Remains (Armitage)</h2>
        <p>
          The suffering in <em>Remains</em> is psychological and long-term. The veteran&apos;s
          self-medication, sleeplessness and flashbacks show that suffering outlasts the
          deployment that caused it. Armitage&apos;s colloquial voice makes the pain feel
          unbearably close.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">Bayonet Charge (Hughes)</h2>
        <p>
          Hughes gives us suffering as adrenaline and terror inside a single minute of
          action. The soldier&apos;s <q>raw / In raw-seamed hot khaki</q> body is in physical
          pain, but the real suffering is the collapse of his belief in what he is doing.
          Hughes compresses the anatomy of pain into a few fractured images.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">War Photographer (Duffy)</h2>
        <p>
          Duffy shows the suffering of civilians caught in wars the reader will never
          visit. The <q>running children in a nightmare heat</q> and the wife of a man
          killed by a booby-trap exist inside the photographer&apos;s mind long after the
          pictures are printed. Duffy&apos;s poem is about witnessing suffering — and about
          the failure of audiences to recognise what they are seeing.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">Grade 9 thesis you can adapt</h2>
        <p>
          &quot;Across the anthology, suffering is presented as the direct consequence of
          human power failing to restrain itself: Blake&apos;s London criticises institutions,
          Owen indicts a whole war, Armitage and Hughes reveal what happens inside the
          individual soldier, and Duffy accuses the comfortable audience of refusing to
          look at the pain their leaders cause.&quot;
        </p>
      </article>

      <section className="mt-12 rounded-xl border border-border bg-muted/40 p-6">
        <h2 className="text-xl font-semibold text-foreground">Related analyses</h2>
        <ul className="mt-3 space-y-2 text-sm">
          <li><Link href="/analysis/aqa-power-conflict/reality-of-conflict-theme-across-anthology" className="text-primary hover:underline">Reality of Conflict — Theme</Link></li>
          <li><Link href="/analysis/aqa-power-conflict/corruption-of-power-theme-across-anthology" className="text-primary hover:underline">Corruption of Power — Theme</Link></li>
          <li><Link href="/analysis/aqa-power-conflict/ozymandias-vs-london" className="text-primary hover:underline">Ozymandias vs London</Link></li>
          <li><Link href="/analysis/aqa-power-conflict/bayonet-charge-vs-the-charge-of-the-light-brigade" className="text-primary hover:underline">Bayonet Charge vs Light Brigade</Link></li>
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
