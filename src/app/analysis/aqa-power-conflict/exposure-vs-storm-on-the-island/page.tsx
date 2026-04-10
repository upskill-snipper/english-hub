import type { Metadata } from 'next'
import Link from 'next/link'

const PAGE_URL = 'https://theenglishhub.app/analysis/aqa-power-conflict/exposure-vs-storm-on-the-island'

export const metadata: Metadata = {
  title: 'Exposure vs Storm on the Island: Comparison | AQA Power and Conflict',
  description:
    'Grade 9 comparison of Owen\u2019s Exposure and Heaney\u2019s Storm on the Island. Nature as enemy, sibilance, pararhyme and the futility of war. Written by GCSE examiners.',
  alternates: { canonical: PAGE_URL },
}

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Exposure vs Storm on the Island: Comparison',
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
        <span className="text-foreground">Exposure vs Storm on the Island</span>
      </nav>

      <h1 className="text-4xl font-bold tracking-tight text-foreground">Exposure vs Storm on the Island: Comparison</h1>
      <p className="mt-3 text-sm text-muted-foreground">Written by GCSE examiners</p>

      <article className="mt-8 space-y-5 text-[17px] leading-relaxed text-foreground">
        <p>
          Wilfred Owen&apos;s <em>Exposure</em> (1918) and Seamus Heaney&apos;s <em>Storm on
          the Island</em> (1966) are the anthology&apos;s most vivid presentations of nature
          as an enemy. Owen writes from a First World War trench in northern France; Heaney
          writes from an imagined Irish island community. At first glance the pairing feels
          odd, but it is an examiner favourite because the question is almost always the same:
          is nature more frightening than the human enemy?
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">Context in one paragraph</h2>
        <p>
          Owen was a soldier-poet who died exactly one week before the Armistice in 1918.
          <em> Exposure</em> was written after a winter spent in waterlogged, frozen trenches
          where more men died of hypothermia than of enemy fire. Heaney grew up in Northern
          Ireland and wrote <em>Storm on the Island</em> in the mid-1960s, just before the
          Troubles escalated. Many critics read the poem&apos;s final word — <q>nothing</q> —
          as a veiled reference to the sectarian violence building on the real Heaney&apos;s
          doorstep. Both poets, then, use natural imagery to talk about human fear.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">Three similarities</h2>
        <p>
          <strong>1. Nature is personified as an attacker.</strong> Owen&apos;s east winds
          <q> knive us</q>; Heaney&apos;s storm fires at the islanders as if the air were
          &quot;bombarded.&quot; In both poems the weather becomes a soldier.
        </p>
        <p>
          <strong>2. Both use sound to mimic threat.</strong> Owen&apos;s pararhyme
          (<q>knive us / nervous</q>) creates an uneasy, off-key music. Heaney&apos;s sibilance
          and plosives turn the air into a physical pressure on the reader&apos;s tongue.
        </p>
        <p>
          <strong>3. Both end on emptiness.</strong> Owen&apos;s refrain — <q>But nothing
          happens</q> — and Heaney&apos;s closing phrase about fearing <q>a huge nothing</q>
          are the two most famous uses of the word &quot;nothing&quot; in the whole anthology.
          In both poems the real horror is the absence of a visible enemy.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">Three key contrasts</h2>
        <p>
          <strong>1. Setting.</strong> Owen writes from inside a war; Heaney writes from
          inside a peacetime community that sees itself as prepared. The contrast lets you
          argue that Heaney is using nature to smuggle in a warning about complacency.
        </p>
        <p>
          <strong>2. Voice.</strong> Owen uses the collective <q>we</q> of exhausted soldiers,
          which forces the reader into the trench with him. Heaney also uses <q>we</q>, but
          his is a proud, almost boastful voice at the start — <q>We are prepared</q> — which
          makes the ending even more destabilising.
        </p>
        <p>
          <strong>3. Form.</strong> Owen&apos;s eight-line stanzas with that repeating refrain
          create the feeling of endless, cyclical misery. Heaney&apos;s single unbroken block
          of nineteen lines mirrors the claustrophobia of an island community trapped
          together.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">Grade 9 thesis you can adapt</h2>
        <p>
          &quot;Both Owen and Heaney present nature as a hostile force that exposes human
          fragility, but while Owen uses his First World War setting to attack the futility
          of war directly, Heaney uses the storm as a metaphor for the invisible threats a
          community can never fully prepare for.&quot;
        </p>
      </article>

      <section className="mt-12 rounded-xl border border-border bg-muted/40 p-6">
        <h2 className="text-xl font-semibold text-foreground">Related analyses</h2>
        <ul className="mt-3 space-y-2 text-sm">
          <li><Link href="/analysis/aqa-power-conflict/the-prelude-vs-storm-on-the-island" className="text-primary hover:underline">The Prelude vs Storm on the Island</Link></li>
          <li><Link href="/analysis/aqa-power-conflict/power-of-nature-theme-across-anthology" className="text-primary hover:underline">Power of Nature — Theme</Link></li>
          <li><Link href="/analysis/aqa-power-conflict/reality-of-conflict-theme-across-anthology" className="text-primary hover:underline">Reality of Conflict — Theme</Link></li>
          <li><Link href="/analysis/aqa-power-conflict/suffering-theme-across-anthology" className="text-primary hover:underline">Suffering — Theme</Link></li>
        </ul>
      </section>

      <section className="mt-6 rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground">Revising the whole cluster?</h2>
        <p className="mt-2 text-muted-foreground leading-relaxed">
          This page is a quick-answer comparison. For full poem-by-poem study, head to our
          Power and Conflict revision notes.
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
