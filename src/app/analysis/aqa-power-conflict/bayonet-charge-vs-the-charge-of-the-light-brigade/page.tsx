import type { Metadata } from 'next'
import Link from 'next/link'

const PAGE_URL = 'https://theenglishhub.app/analysis/aqa-power-conflict/bayonet-charge-vs-the-charge-of-the-light-brigade'

export const metadata: Metadata = {
  title: 'Bayonet Charge vs The Charge of the Light Brigade | AQA Power and Conflict',
  description:
    'Grade 9 comparison of Hughes\u2019 Bayonet Charge and Tennyson\u2019s Charge of the Light Brigade. Glory, fear, patriotism and the reality of the charge. Written by GCSE examiners.',
  alternates: { canonical: PAGE_URL },
}

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Bayonet Charge vs The Charge of the Light Brigade',
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
        <span className="text-foreground">Bayonet Charge vs Charge of the Light Brigade</span>
      </nav>

      <h1 className="text-4xl font-bold tracking-tight text-foreground">Bayonet Charge vs The Charge of the Light Brigade</h1>
      <p className="mt-3 text-sm text-muted-foreground">Written by GCSE examiners</p>

      <article className="mt-8 space-y-5 text-[17px] leading-relaxed text-foreground">
        <p>
          Ted Hughes&apos;s <em>Bayonet Charge</em> (1957) and Tennyson&apos;s <em>The Charge
          of the Light Brigade</em> (1854) were written a century apart, and the difference
          between them shows you everything about how British poetry&apos;s view of warfare
          changed after the First World War. Tennyson is writing as Poet Laureate about a
          real cavalry charge that had happened just six weeks earlier. Hughes is writing as
          a poet looking back on his father&apos;s First World War generation. Put them
          side by side and you have a perfect contrast between glory and terror.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">Context in one paragraph</h2>
        <p>
          Tennyson was responding to a newspaper report about a catastrophic British cavalry
          charge at the Battle of Balaclava in 1854, in which around 110 British horsemen
          were killed in a few minutes because of a miscommunicated order. Tennyson chose to
          commemorate the bravery rather than criticise the command, and the poem was used
          for recruitment well into the twentieth century. Hughes, whose father survived
          Gallipoli with deep psychological scars, wrote <em>Bayonet Charge</em> to reclaim
          the experience of a single terrified infantryman from the patriotic machinery.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">Three similarities</h2>
        <p>
          <strong>1. Both dramatise a charge in real time.</strong> Tennyson&apos;s galloping
          dactylic rhythm and Hughes&apos;s breathless enjambment both try to put the reader
          inside the body of a soldier moving through fire.
        </p>
        <p>
          <strong>2. Both use the natural world as an enemy.</strong> Tennyson&apos;s soldiers
          ride into <q>the jaws of Death</q>, and the air is thick with <q>shot and shell</q>.
          Hughes gives us <q>bullets smacking the belly out of the air</q>. In both poems
          the landscape is weaponised.
        </p>
        <p>
          <strong>3. Both are about the loss of individual agency.</strong> Tennyson&apos;s
          refrain — <q>Theirs not to reason why, / Theirs but to do and die</q> — and
          Hughes&apos;s image of a soldier who stops being a person and becomes a running
          <q> patriotic tear</q> both insist that the man on the battlefield cannot think
          for himself.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">Three key contrasts</h2>
        <p>
          <strong>1. Tone.</strong> Tennyson is celebratory, even when grieving; Hughes is
          horrified. The Tennyson speaker keeps saying <q>Honour</q> and <q>Noble</q>; the
          Hughes speaker never uses either word.
        </p>
        <p>
          <strong>2. Scale.</strong> Tennyson gives us six hundred; Hughes gives us one. The
          difference between the panoramic and the single terrified body is the most
          examinable contrast in this pairing.
        </p>
        <p>
          <strong>3. Form.</strong> Tennyson uses a regular, chant-like form with a repeated
          refrain that makes the charge feel inevitable and mythic. Hughes uses three
          unbalanced stanzas, erratic line lengths and heavy enjambment to imitate
          psychological collapse.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">Grade 9 thesis you can adapt</h2>
        <p>
          &quot;Both Tennyson and Hughes dramatise the physical rush of a military charge,
          but while Tennyson&apos;s regular rhythms and elevated diction turn the event into
          a national myth of honour, Hughes&apos;s fragmented form and visceral imagery
          reclaim the individual soldier&apos;s terror from that myth.&quot;
        </p>
      </article>

      <section className="mt-12 rounded-xl border border-border bg-muted/40 p-6">
        <h2 className="text-xl font-semibold text-foreground">Related analyses</h2>
        <ul className="mt-3 space-y-2 text-sm">
          <li><Link href="/analysis/aqa-power-conflict/reality-of-conflict-theme-across-anthology" className="text-primary hover:underline">Reality of Conflict — Theme</Link></li>
          <li><Link href="/analysis/aqa-power-conflict/power-of-humans-theme-across-anthology" className="text-primary hover:underline">Power of Humans — Theme</Link></li>
          <li><Link href="/analysis/aqa-power-conflict/suffering-theme-across-anthology" className="text-primary hover:underline">Suffering — Theme</Link></li>
          <li><Link href="/analysis/aqa-power-conflict/form-and-structure-across-anthology" className="text-primary hover:underline">Form and Structure Across the Anthology</Link></li>
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
