import type { Metadata } from 'next'
import Link from 'next/link'

const PAGE_URL = 'https://theenglishhub.app/analysis/aqa-power-conflict/poppies-vs-war-photographer'

export const metadata: Metadata = {
  title: 'Poppies vs War Photographer: Comparison | AQA Power and Conflict',
  description:
    'Grade 9 comparison of Weir\u2019s Poppies and Duffy\u2019s War Photographer. Memory, grief, witnessing and the bystander\u2019s guilt. Written by GCSE examiners.',
  alternates: { canonical: PAGE_URL },
}

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Poppies vs War Photographer: Comparison',
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
        <span className="text-foreground">Poppies vs War Photographer</span>
      </nav>

      <h1 className="text-4xl font-bold tracking-tight text-foreground">Poppies vs War Photographer: Comparison</h1>
      <p className="mt-3 text-sm text-muted-foreground">Written by GCSE examiners</p>

      <article className="mt-8 space-y-5 text-[17px] leading-relaxed text-foreground">
        <p>
          Jane Weir&apos;s <em>Poppies</em> (2009) and Carol Ann Duffy&apos;s <em>War
          Photographer</em> (1985) are the two anthology poems that sit at one remove from
          the battlefield. Neither speaker is a soldier; both are civilians forced to process
          the consequences of a war they were not in. Weir writes in the voice of a mother
          whose son has gone off to fight; Duffy writes about a photographer developing his
          pictures back at home. The pairing is almost always used for questions about
          memory or the effects of war on those left behind.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">Context in one paragraph</h2>
        <p>
          Weir wrote <em>Poppies</em> at the request of Poet Laureate Carol Ann Duffy for an
          anthology called <em>Exit Wounds</em>, published to coincide with the return of
          British soldiers&apos; bodies from Afghanistan and Iraq. The poem deliberately avoids
          naming a particular war, which is why it resonates as a universal mother&apos;s
          lament. Duffy wrote <em>War Photographer</em> after becoming friends with Don
          McCullin and Philip Jones Griffiths, two photojournalists who had covered Vietnam
          and the Troubles. Reading the poems as paired responses to the same problem —
          civilian distance from violence — helps you pull together an argument about
          witnessing.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">Three similarities</h2>
        <p>
          <strong>1. Both use domestic imagery to represent grief.</strong> Weir uses
          needlework — pinning a poppy to her son&apos;s blazer, smoothing his collar —
          as a metaphor for a mother&apos;s need to hold her child still. Duffy uses the
          photographer&apos;s chemicals and trays, domestic tools weaponised for journalistic
          distance. Both poems refuse to leave the home behind.
        </p>
        <p>
          <strong>2. Both contrast control with loss of control.</strong> Weir&apos;s speaker
          keeps trying to manage her emotions — <q>I resisted the impulse / to run my fingers
          through the gelled / blackthorns of your hair</q> — but the poem&apos;s line lengths
          keep collapsing. Duffy&apos;s photographer keeps his photos <q>in ordered rows</q>,
          but his hands &quot;tremble&quot; when the work begins. In both, professional or
          maternal restraint buckles under emotional pressure.
        </p>
        <p>
          <strong>3. Both end in failed witnessing.</strong> Weir&apos;s speaker ends up at a
          war memorial listening <q>hoping to hear / your playground voice catching on the
          wind</q>, unable to reach her son. Duffy&apos;s photographer ends his poem looking
          out of an aeroplane window at <q>a hundred agonies in black-and-white</q> that
          &quot;they&quot; will never really see. Neither poem offers consolation.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">Three key contrasts</h2>
        <p>
          <strong>1. Personal vs professional.</strong> Weir writes as a mother; Duffy writes
          about a professional. The mother&apos;s grief is intimate, the photographer&apos;s
          is a job — which lets Duffy make a political argument about how violence is
          commodified.
        </p>
        <p>
          <strong>2. Form.</strong> Weir&apos;s poem uses free verse and irregular stanzas
          to mimic the drift of memory and the disruption of grief. Duffy&apos;s four regular
          six-line stanzas create ironic order around chaos.
        </p>
        <p>
          <strong>3. Tone.</strong> Weir is tender and elegiac. Duffy is cool and critical,
          especially in her final stanza. The difference lets you argue about whether the
          poem&apos;s job is to mourn or to accuse.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">Grade 9 thesis you can adapt</h2>
        <p>
          &quot;Both Weir and Duffy use civilian speakers to present the emotional cost of
          war, but while Weir uses a mother&apos;s loss to evoke universal grief, Duffy uses
          the photographer to accuse a comfortable Western audience of looking away.&quot;
        </p>
      </article>

      <section className="mt-12 rounded-xl border border-border bg-muted/40 p-6">
        <h2 className="text-xl font-semibold text-foreground">Related analyses</h2>
        <ul className="mt-3 space-y-2 text-sm">
          <li><Link href="/analysis/aqa-power-conflict/remains-vs-war-photographer" className="text-primary hover:underline">Remains vs War Photographer</Link></li>
          <li><Link href="/analysis/aqa-power-conflict/memory-theme-across-anthology" className="text-primary hover:underline">Memory — Theme</Link></li>
          <li><Link href="/analysis/aqa-power-conflict/loss-theme-across-anthology" className="text-primary hover:underline">Loss — Theme</Link></li>
          <li><Link href="/analysis/aqa-power-conflict/reality-of-conflict-theme-across-anthology" className="text-primary hover:underline">Reality of Conflict — Theme</Link></li>
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
