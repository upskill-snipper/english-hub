import type { Metadata } from 'next'
import Link from 'next/link'

const PAGE_URL = 'https://theenglishhub.app/analysis/aqa-power-conflict/kamikaze-vs-my-last-duchess'

export const metadata: Metadata = {
  title: 'Kamikaze vs My Last Duchess: Comparison | AQA Power and Conflict',
  description:
    'Grade 9 comparison of Garland\u2019s Kamikaze and Browning\u2019s My Last Duchess. Power over others, silenced women, and the home as a site of control. Written by GCSE examiners.',
  alternates: { canonical: PAGE_URL },
}

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Kamikaze vs My Last Duchess: Comparison',
    description: 'Grade 9 comparison for AQA Power and Conflict.',
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
        <span className="text-foreground">Kamikaze vs My Last Duchess</span>
      </nav>

      <h1 className="text-4xl font-bold tracking-tight text-foreground">Kamikaze vs My Last Duchess: Comparison</h1>
      <p className="mt-3 text-sm text-muted-foreground">Written by GCSE examiners</p>

      <article className="mt-8 space-y-5 text-[17px] leading-relaxed text-foreground">
        <p>
          At first glance Beatrice Garland&apos;s <em>Kamikaze</em> (2013) and Robert
          Browning&apos;s <em>My Last Duchess</em> (1842) look like very different poems.
          One is a dramatic monologue by a jealous Renaissance Duke; the other is a
          third-person poem about a Japanese pilot&apos;s daughter remembering the day her
          father returned home alive. What links them is something stranger and more
          interesting: in both poems, a family member exercises lethal power over another
          person, and the victim is silenced by the very people who should protect them.
          This pairing works brilliantly for any question about power over others.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">Context in one paragraph</h2>
        <p>
          Browning set his poem in sixteenth-century Ferrara, loosely based on Alfonso II
          d&apos;Este, whose first wife died young under suspicious circumstances. The poem is
          now the most famous example in English of the dramatic monologue. Garland wrote
          <em> Kamikaze</em> in response to the Second World War Japanese tradition of
          suicide pilots and the real cases of men who turned back mid-mission and were
          shunned by their communities and families for the rest of their lives. Both poems
          are about unwritten rules of honour that kill or erase the person who breaks them.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">Three similarities</h2>
        <p>
          <strong>1. Both victims are silenced.</strong> The Duchess is literally killed and
          then reduced to a painting the Duke can hide behind a curtain. The kamikaze pilot
          in Garland&apos;s poem is slowly erased by his wife and children, who
          <q> treated him as though he no longer existed</q>. In both poems the family is
          the enforcer.
        </p>
        <p>
          <strong>2. Both use a frame narrator.</strong> Browning filters the Duchess through
          the Duke&apos;s voice. Garland filters the pilot through his daughter&apos;s
          retelling. In each case the reader has to work to reconstruct the real victim
          through the biased voice of the poem.
        </p>
        <p>
          <strong>3. Both use domestic imagery to stage violence.</strong> The Duke&apos;s
          gallery, with its <q>gift of a nine-hundred-years-old name</q>, is a domestic space
          weaponised by pride. Garland&apos;s kitchen, where the daughter eventually
          <q> learned to be silent</q>, is a domestic space weaponised by shame.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">Three key contrasts</h2>
        <p>
          <strong>1. Who has the power.</strong> Browning&apos;s Duke controls the poem from
          the inside. Garland&apos;s pilot has no voice at all — the poem gives his power
          away to the women of his family, who exercise a slow social violence that lasts
          for years.
        </p>
        <p>
          <strong>2. Form.</strong> Browning&apos;s rhyming couplets are terrifyingly tight.
          Garland uses seven loose, unrhymed stanzas that drift like the pilot&apos;s
          remembered sea imagery.
        </p>
        <p>
          <strong>3. Tone.</strong> Browning&apos;s tone is cold and sinister. Garland&apos;s
          is elegiac and tender toward the pilot, even as the poem describes his erasure.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">Grade 9 thesis you can adapt</h2>
        <p>
          &quot;Both Browning and Garland present families as the enforcers of lethal codes of
          honour, but while Browning uses the cold confidence of the dramatic monologue to
          dramatise one man&apos;s control, Garland uses shifting perspectives and tender
          natural imagery to show how an entire household can silently destroy the person
          it was supposed to love.&quot;
        </p>
      </article>

      <section className="mt-12 rounded-xl border border-border bg-muted/40 p-6">
        <h2 className="text-xl font-semibold text-foreground">Related analyses</h2>
        <ul className="mt-3 space-y-2 text-sm">
          <li><Link href="/analysis/aqa-power-conflict/ozymandias-vs-my-last-duchess" className="text-primary hover:underline">Ozymandias vs My Last Duchess</Link></li>
          <li><Link href="/analysis/aqa-power-conflict/power-of-humans-theme-across-anthology" className="text-primary hover:underline">Power of Humans — Theme</Link></li>
          <li><Link href="/analysis/aqa-power-conflict/corruption-of-power-theme-across-anthology" className="text-primary hover:underline">Corruption of Power — Theme</Link></li>
          <li><Link href="/analysis/aqa-power-conflict/identity-theme-across-anthology" className="text-primary hover:underline">Identity — Theme</Link></li>
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
