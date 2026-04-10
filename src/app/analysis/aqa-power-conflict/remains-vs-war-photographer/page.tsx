import type { Metadata } from 'next'
import Link from 'next/link'

const PAGE_URL = 'https://theenglishhub.app/analysis/aqa-power-conflict/remains-vs-war-photographer'

export const metadata: Metadata = {
  title: 'Remains vs War Photographer: Comparison | AQA Power and Conflict',
  description:
    'Grade 9 comparison of Armitage\u2019s Remains and Duffy\u2019s War Photographer. Trauma, witnessing, PTSD and the reality of modern conflict. Written by GCSE examiners.',
  alternates: { canonical: PAGE_URL },
}

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Remains vs War Photographer: Comparison',
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
        <span className="text-foreground">Remains vs War Photographer</span>
      </nav>

      <h1 className="text-4xl font-bold tracking-tight text-foreground">Remains vs War Photographer: Comparison</h1>
      <p className="mt-3 text-sm text-muted-foreground">Written by GCSE examiners</p>

      <article className="mt-8 space-y-5 text-[17px] leading-relaxed text-foreground">
        <p>
          Simon Armitage&apos;s <em>Remains</em> (2008) and Carol Ann Duffy&apos;s <em>War
          Photographer</em> (1985) are the two AQA poems that focus on the psychological
          aftermath of witnessing violence. Armitage writes from the perspective of a British
          soldier based on an Iraq veteran interviewed for a Channel 4 documentary;
          Duffy writes about a fictional photographer back home in a dark-room in
          &quot;rural England&quot;. Both poets are interested in the gap between what happens in
          a war zone and what the people at home are willing to see. The pairing is almost
          always about trauma and witnessing.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">Context in one paragraph</h2>
        <p>
          Armitage wrote <em>Remains</em> for <em>The Not Dead</em>, a TV documentary about
          post-traumatic stress disorder in British veterans. The poem is essentially a
          rearranged verbatim interview, which is why it sounds so colloquial. Duffy&apos;s
          <em> War Photographer</em> was written during the 1980s, a decade that saw the
          Falklands, Lebanon and the famine in Ethiopia flood newspapers with imagery most
          British readers found easy to turn away from. She was reportedly inspired by a
          friendship with the photographer Don McCullin. Both poets, then, are writing about
          the moral failure of an audience that refuses to look.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">Three similarities</h2>
        <p>
          <strong>1. Both are about returning home with trauma.</strong> Armitage&apos;s
          speaker is haunted by a man he shot; Duffy&apos;s photographer is haunted by the
          images in his trays. Neither man can leave the war zone mentally. Both poets use
          domestic settings (a bedroom, a dark-room) to show how home has become a place
          where the war keeps replaying.
        </p>
        <p>
          <strong>2. Both use enjambment to mimic intrusive memory.</strong> Armitage&apos;s
          lines spill over as thoughts push in on the speaker&apos;s story. Duffy&apos;s third
          stanza enjambs as the photograph begins to <q>twist</q> in the chemicals. In both
          poems form is pressured by the thing the speaker cannot suppress.
        </p>
        <p>
          <strong>3. Both criticise the audience at home.</strong> The soldier in <em>Remains</em>
          tries self-medication because no one back home will understand him. Duffy&apos;s
          final image of a Sunday newspaper reader whose <q>eyeballs prick / with tears
          between the bath and pre-lunch beers</q> is the most famous indictment of middle-class
          apathy in the anthology.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">Three key contrasts</h2>
        <p>
          <strong>1. First person vs third person.</strong> Armitage&apos;s poem is
          first-person and colloquial, which makes the horror feel unmediated. Duffy&apos;s
          poem is third-person, which creates a cooler, more analytical tone. The contrast is
          between being the victim of trauma and studying it.
        </p>
        <p>
          <strong>2. Action vs reflection.</strong> Armitage dramatises the killing itself —
          the physical act and its replay in the speaker&apos;s head. Duffy stays almost
          entirely in the dark-room, dramatising the way images are processed and sold.
        </p>
        <p>
          <strong>3. Form.</strong> Armitage uses loose, conversational stanzas that mirror
          the speaker&apos;s fractured memory. Duffy uses four perfectly regular six-line
          stanzas and a disciplined rhyme scheme, which creates an ironic contrast between
          the orderly form and the chaos it contains.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">Grade 9 thesis you can adapt</h2>
        <p>
          &quot;Both Armitage and Duffy present men who have been damaged by what they have
          witnessed, but while Armitage uses a colloquial first-person voice to drop the
          reader into the soldier&apos;s trauma, Duffy uses the detached figure of the
          photographer to indict an audience that refuses to look.&quot;
        </p>
      </article>

      <section className="mt-12 rounded-xl border border-border bg-muted/40 p-6">
        <h2 className="text-xl font-semibold text-foreground">Related analyses</h2>
        <ul className="mt-3 space-y-2 text-sm">
          <li><Link href="/analysis/aqa-power-conflict/poppies-vs-war-photographer" className="text-primary hover:underline">Poppies vs War Photographer</Link></li>
          <li><Link href="/analysis/aqa-power-conflict/bayonet-charge-vs-the-charge-of-the-light-brigade" className="text-primary hover:underline">Bayonet Charge vs Charge of the Light Brigade</Link></li>
          <li><Link href="/analysis/aqa-power-conflict/reality-of-conflict-theme-across-anthology" className="text-primary hover:underline">Reality of Conflict — Theme</Link></li>
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
