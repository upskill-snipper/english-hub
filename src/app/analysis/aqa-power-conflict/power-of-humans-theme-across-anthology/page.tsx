import type { Metadata } from 'next'
import Link from 'next/link'

const PAGE_URL = 'https://theenglishhub.app/analysis/aqa-power-conflict/power-of-humans-theme-across-anthology'

export const metadata: Metadata = {
  title: 'Power of Humans: Theme Across the AQA Power and Conflict Anthology',
  description:
    'Grade 9 analysis of human power across Ozymandias, London, My Last Duchess, Checking Out Me History and more. Written by GCSE examiners.',
  alternates: { canonical: PAGE_URL },
}

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Power of Humans — Theme Across the Anthology',
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
        <span className="text-foreground">Power of Humans — Theme</span>
      </nav>

      <h1 className="text-4xl font-bold tracking-tight text-foreground">Power of Humans: Theme Across the Anthology</h1>
      <p className="mt-3 text-sm text-muted-foreground">Written by GCSE examiners</p>

      <article className="mt-8 space-y-5 text-[17px] leading-relaxed text-foreground">
        <p>
          Human power — political, military, aristocratic, institutional — is the other
          great theme of the AQA Power and Conflict anthology. The best essays on this theme
          argue that the poets rarely present human power as stable. Instead, the anthology
          treats human authority as something loud, brittle and usually exposed by the very
          people who try to wield it. Almost every poem in this group ends by undermining
          the speaker or ruler it describes.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">Ozymandias (Shelley)</h2>
        <p>
          The anchor text for human power. Shelley&apos;s pharaoh has tried to carve his
          authority into stone — <q>My name is Ozymandias, King of Kings</q> — and ends up as
          a <q>colossal wreck</q>. Shelley&apos;s Romantic argument is that political power
          is a form of temporary delusion, and that time is on the side of the reader, not
          the ruler.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">London (Blake)</h2>
        <p>
          Blake attacks living power, not dead kings. He gives us the <q>mind-forg&apos;d
          manacles</q> of a society shaped by church, state and industry. The speaker walks
          through London hearing the misery that institutional power has produced. Unlike
          Shelley, Blake does not wait for time to punish the powerful — he demands that
          readers see the damage now.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">My Last Duchess (Browning)</h2>
        <p>
          Browning&apos;s Duke of Ferrara is human power at its most domestic. His control
          over his late wife&apos;s image — hidden behind a curtain only he can draw — is
          a chilling version of patriarchy turned into art. The Duke shows how charm and
          taste can be a mask for murder.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">The Charge of the Light Brigade (Tennyson)</h2>
        <p>
          Tennyson presents institutional military power as simultaneously awe-inspiring and
          lethally stupid. The soldiers are brave and obedient, but the command that sends
          them into <q>the jaws of Death</q> is never examined. The poem&apos;s hypnotic
          rhythm tries to celebrate the charge, but modern readers hear the criticism
          underneath the triumph.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">Checking Out Me History (Agard)</h2>
        <p>
          Agard dramatises how the power to decide which histories are taught is itself a
          weapon. The British curriculum he attacks is a kind of erasure, and his poem is
          an act of reclamation through Creole voice and irregular structure. Human power
          here is bureaucratic and cultural — and the resistance to it is the shape of the
          poem itself.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">Kamikaze (Garland)</h2>
        <p>
          Garland shows how human power can be exercised by a whole community rather than a
          single tyrant. After the pilot returns alive, his family and neighbours enforce a
          social code so strictly that he is slowly erased from the life he tried to keep.
          The poem is one of the anthology&apos;s most disturbing portraits of collective
          control.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">Grade 9 thesis you can adapt</h2>
        <p>
          &quot;Across the anthology, human power is presented as performative and fragile:
          Shelley exposes its vanity, Blake exposes its cruelty, Browning exposes its
          domestic menace, Tennyson exposes its hollowness, Agard exposes its cultural
          erasures, and Garland exposes the silent violence of communities that enforce
          it together.&quot;
        </p>
      </article>

      <section className="mt-12 rounded-xl border border-border bg-muted/40 p-6">
        <h2 className="text-xl font-semibold text-foreground">Related analyses</h2>
        <ul className="mt-3 space-y-2 text-sm">
          <li><Link href="/analysis/aqa-power-conflict/corruption-of-power-theme-across-anthology" className="text-primary hover:underline">Corruption of Power — Theme</Link></li>
          <li><Link href="/analysis/aqa-power-conflict/ozymandias-vs-my-last-duchess" className="text-primary hover:underline">Ozymandias vs My Last Duchess</Link></li>
          <li><Link href="/analysis/aqa-power-conflict/ozymandias-vs-london" className="text-primary hover:underline">Ozymandias vs London</Link></li>
          <li><Link href="/analysis/aqa-power-conflict/kamikaze-vs-my-last-duchess" className="text-primary hover:underline">Kamikaze vs My Last Duchess</Link></li>
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
