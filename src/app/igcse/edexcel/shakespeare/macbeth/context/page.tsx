import type { Metadata } from 'next'
import Link from 'next/link'
import { GraduationCap } from 'lucide-react'
import { ExamBoardDisclaimer } from '@/components/ExamBoardDisclaimer'
import { requireIgcseBoard } from '@/app/igcse/_lib/guard'

import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
export const metadata: Metadata = {
  openGraph: {
    title: 'Macbeth Context - Edexcel IGCSE Literature',
    description:
      'Jacobean context for Macbeth: James I, the Gunpowder Plot, Daemonologie and witchcraft, the Divine Right of Kings and the Great Chain of Being. For Edexcel IGCSE Literature.',
  },
  alternates: {
    canonical: 'https://theenglishhub.app/igcse/edexcel/shakespeare/macbeth/context',
  },
  title: 'Macbeth Context - Edexcel IGCSE Literature',
  description:
    'Jacobean context for Macbeth: James I, the Gunpowder Plot, Daemonologie and witchcraft, the Divine Right of Kings and the Great Chain of Being. For Edexcel IGCSE Literature.',
}

const CONTEXT_POINTS = [
  {
    topic: 'Jacobean England (1603\u20131625)',
    detail:
      "Macbeth was written around 1606, early in the reign of James I. England had just transitioned from the Tudor to the Stuart dynasty after Elizabeth I died without an heir. The period was politically jittery: memories of the Protestant-Catholic conflict under Mary I, the long Elizabethan settlement, and the new Stuart reign all created an atmosphere of instability. Shakespeare's play is deeply shaped by that nervous moment.",
  },
  {
    topic: 'James I and the Scottish connection',
    detail:
      "James I (James VI of Scotland) was Shakespeare's new royal patron \u2014 the company that staged Macbeth became known as 'The King's Men' after 1603. Macbeth is set in Scotland and flatters James by presenting his ancestor Banquo as noble and morally incorruptible. The procession of eight kings in Act 4 Scene 1 \u2014 descended from Banquo \u2014 is a direct nod to James and his lineage.",
  },
  {
    topic: 'The Gunpowder Plot (1605)',
    detail:
      "On 5 November 1605, a group of Catholic conspirators led by Robert Catesby tried to blow up Parliament and assassinate James I. Guy Fawkes was caught beneath the House of Lords with barrels of gunpowder. The plot was discovered, the conspirators executed, and England rocked. Writing within months of the plot, Shakespeare made regicide the beating heart of Macbeth. The play's repeated imagery of hidden evil, treachery under the roof of a loyal host, and the disturbance of the natural order all resonate with Gunpowder-Plot anxieties.",
  },
  {
    topic: 'Witchcraft and Daemonologie',
    detail:
      'James I was genuinely afraid of witches. In 1597 he wrote Daemonologie, a treatise on witchcraft, and as king he presided over witch trials. The Witchcraft Act of 1604 made it a capital offence to invoke evil spirits. A Jacobean audience would have taken the weird sisters seriously \u2014 not as fantasy, but as real agents of the devil. Shakespeare leans into this by giving them verifiable prophecies and clear demonic associations, which would have made them chillingly recognisable.',
  },
  {
    topic: 'The Divine Right of Kings',
    detail:
      "James I championed the doctrine that kings were appointed directly by God and answerable only to God. Under this doctrine, killing a king was not merely a political act \u2014 it was a sin against the divine order. This is why Duncan's murder is met with unnatural omens (horses eating each other, day turning to night), and why Lady Macbeth's claim that 'a little water clears us of this deed' is grotesque: no amount of water can wash away a sin against God.",
  },
  {
    topic: 'The Great Chain of Being',
    detail:
      "Elizabethan and Jacobean thought inherited a medieval hierarchy called the Great Chain of Being: God at the top, then angels, then the monarch, then nobles, then commoners, then animals, then plants, then stones. Everything had its place. Killing the king didn't just unseat one man \u2014 it ruptured the whole chain. This explains the play's obsession with inversion and unnatural phenomena: they are the cosmos reacting to a broken link.",
  },
  {
    topic: 'Gender in Jacobean society',
    detail:
      "Women were expected to be pious, obedient, silent and nurturing. Lady Macbeth's call to be 'unsexed' \u2014 her demand to have her femininity stripped away so she can act with 'direst cruelty' \u2014 would have been deeply shocking. Her eventual sleepwalking, suicide, and the closing description of her as 'fiend-like' can be read as the play punishing her for that transgression. Macduff's insistence on feeling grief 'as a man' offers a very different, more sympathetic model of masculinity.",
  },
  {
    topic: 'Aristotelian tragedy',
    detail:
      "Shakespeare inherits the Aristotelian model of tragedy: a noble hero with a fatal flaw (hamartia) experiences a reversal of fortune (peripeteia), comes to recognise his situation (anagnorisis), and suffers a catastrophic fall. The audience experiences catharsis \u2014 an emotional release through pity and fear. Macbeth fits this structure neatly: his hamartia is 'vaulting ambition', his peripeteia is the banquet scene, his recognition comes in the 'Tomorrow' soliloquy, and his death delivers the catharsis.",
  },
  {
    topic: 'The Holinshed source',
    detail:
      "Shakespeare drew his raw material from Raphael Holinshed's Chronicles of England, Scotland, and Ireland (1577, expanded 1587). The historical Macbeth was a successful king who reigned for seventeen years \u2014 but Shakespeare compresses time and darkens events to make Macbeth a tyrant and Banquo a saint. Knowing Shakespeare was shaping the source for James I is a powerful context point.",
  },
]

export default async function MacbethContextPage() {
  await requireIgcseBoard(['edexcel-igcse'])

  return (
    <main className="min-h-screen bg-background">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'IGCSE', url: 'https://theenglishhub.app/igcse' },
          { name: 'Edexcel IGCSE Literature', url: 'https://theenglishhub.app/igcse/edexcel' },
          { name: 'Shakespeare', url: 'https://theenglishhub.app/igcse/edexcel/shakespeare' },
          { name: 'Macbeth', url: 'https://theenglishhub.app/igcse/edexcel/shakespeare/macbeth' },
          {
            name: 'Context',
            url: 'https://theenglishhub.app/igcse/edexcel/shakespeare/macbeth/context',
          },
        ]}
      />
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="border-b border-border bg-gradient-to-b from-primary/[0.06] to-transparent px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <Link
            href="/igcse/edexcel/shakespeare/macbeth"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            &larr; Macbeth hub
          </Link>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            <GraduationCap className="h-4 w-4" />
            Edexcel IGCSE Literature
          </div>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Macbeth &mdash; Context
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            Jacobean England, James I, witchcraft, the Gunpowder Plot and the Divine Right of Kings.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-12 sm:py-16">
        <div className="rounded-xl bg-muted p-6">
          <h2 className="text-lg font-bold text-foreground">
            Why context matters for IGCSE Literature
          </h2>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
            On the Edexcel IGCSE Literature Shakespeare question, context is assessed through
            relating to context. The strongest answers <strong>weave context into analysis</strong>{' '}
            rather than treating it as a bolted-on paragraph. Aim for a single sharp sentence of
            context inside each analytical paragraph &mdash; enough to frame a Jacobean
            audience&rsquo;s reaction to a specific moment.
          </p>
        </div>

        <section className="mt-10 space-y-6">
          {CONTEXT_POINTS.map((c) => (
            <article
              key={c.topic}
              className="rounded-xl border border-border bg-card p-6 shadow-md"
            >
              <h3 className="text-lg font-bold text-foreground">{c.topic}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.detail}</p>
            </article>
          ))}
        </section>

        <section className="mt-12 rounded-2xl border-2 border-primary/40 bg-primary/5 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-foreground">How to embed context in an answer</h2>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            Don&rsquo;t open a paragraph with &ldquo;Shakespeare was writing in Jacobean
            England&hellip;&rdquo; Instead, fold context directly into analysis of a quotation. For
            example:
          </p>
          <div className="mt-4 rounded-lg border border-primary/30 bg-card p-4">
            <p className="text-sm text-muted-foreground italic leading-relaxed">
              &ldquo;When Lady Macbeth begs spirits to &lsquo;unsex&rsquo; her, a Jacobean audience
              &mdash; for whom James I&rsquo;s <em>Daemonologie</em> was recent memory &mdash; would
              have heard a genuine demonic invocation. The verb &lsquo;unsex&rsquo; not only rejects
              femininity but pulls her out of the Great Chain of Being altogether.&rdquo;
            </p>
          </div>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            That&rsquo;s one sentence of context doing the work of a whole paragraph &mdash; exactly
            what IGCSE examiners reward.
          </p>
        </section>
      </div>

      <ExamBoardDisclaimer variant="content" className="mx-auto max-w-5xl px-4 py-8" />

      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4 mx-auto max-w-5xl px-4 pb-8">
        Macbeth by William Shakespeare is in the public domain. Quotations are reproduced freely.
      </p>
    </main>
  )
}
