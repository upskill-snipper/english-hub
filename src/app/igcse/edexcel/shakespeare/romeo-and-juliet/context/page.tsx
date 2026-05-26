import type { Metadata } from 'next'
import Link from 'next/link'
import { GraduationCap } from 'lucide-react'
import { ExamBoardDisclaimer } from '@/components/ExamBoardDisclaimer'
import { requireIgcseBoard } from '@/app/igcse/_lib/guard'

import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
export const metadata: Metadata = {
  openGraph: {
    title: 'Romeo and Juliet Context - Edexcel IGCSE Literature',
    description:
      'Elizabethan context for Romeo and Juliet: patriarchal society, arranged marriages, honour culture, the Italian setting and Petrarchan love poetry. For Edexcel IGCSE Literature.',
  },
  alternates: {
    canonical: 'https://theenglishhub.app/igcse/edexcel/shakespeare/romeo-and-juliet/context',
  },
  title: 'Romeo and Juliet Context - Edexcel IGCSE Literature',
  description:
    'Elizabethan context for Romeo and Juliet: patriarchal society, arranged marriages, honour culture, the Italian setting and Petrarchan love poetry. For Edexcel IGCSE Literature.',
}

const CONTEXT_POINTS = [
  {
    topic: 'Elizabethan England (1590s)',
    detail:
      "Romeo and Juliet was written around 1594\u20131596, during the reign of Elizabeth I. England was Protestant, politically stable under an ageing queen, and experiencing a cultural explosion in theatre, poetry and exploration. Shakespeare's company performed at The Theatre (and later the Globe) to audiences ranging from illiterate groundlings to courtiers. The play would have been performed in daylight, with boys playing Juliet and the Nurse, and with minimal set design \u2014 Shakespeare's language had to create Verona in the audience's imagination.",
  },
  {
    topic: 'Patriarchy and the role of women',
    detail:
      "Elizabethan England was a patriarchal society in which women had no legal independence. A daughter was her father's property until marriage, when she became her husband's. Lord Capulet's assumption that he can dictate Juliet's marriage to Paris is not villainy \u2014 it is normal. Juliet's defiance ('He shall not make me there a joyful bride', 3.5) would have been genuinely shocking: a thirteen-year-old daughter openly disobeying her father was a social rupture. The Nurse's eventual advice to marry Paris reflects the pragmatism a woman without power would logically adopt.",
  },
  {
    topic: 'Arranged marriage',
    detail:
      "Among the propertied classes, marriage was a dynastic transaction, not a romantic choice. Parents chose partners based on wealth, status and political alliance. Juliet's feelings about Paris are irrelevant to the Capulets \u2014 what matters is that he is 'a gentleman of noble parentage' (3.5). Shakespeare sets Romeo and Juliet's passionate, freely chosen love against this system. The play's tragedy is partly structural: the lovers' way of choosing is incompatible with the world they live in.",
  },
  {
    topic: 'Honour culture and the blood feud',
    detail:
      "Male honour in Elizabethan society was bound up with reputation, family name and the willingness to fight. The Montague\u2013Capulet feud mirrors real Italian vendettas that English audiences would have known from travellers' tales. Tybalt's fury at Romeo's presence at the ball, Mercutio's insistence on fighting when Romeo will not, and Romeo's revenge killing of Tybalt all follow the logic of honour culture: to back down is to be shamed. Shakespeare shows honour as a system that perpetuates violence precisely because no one can afford to be the first to stop.",
  },
  {
    topic: 'The Italian setting',
    detail:
      "Shakespeare sets the play in Verona, drawing on Arthur Brooke's 1562 poem The Tragicall Historye of Romeus and Juliet. Italy was associated in the English imagination with both romance and danger \u2014 passion, beauty, intrigue and vendetta. Setting the play abroad allowed Shakespeare to explore extreme emotions and violence at a safe distance from English censors, while still making points about honour, patriarchy and youth that applied directly to his own society.",
  },
  {
    topic: 'Petrarchan love poetry',
    detail:
      "The Petrarchan sonnet tradition \u2014 named after the Italian poet Petrarch \u2014 dominated Elizabethan love poetry. It involved a male speaker worshipping an unattainable woman in elaborate, formulaic metaphors: eyes like stars, lips like coral, skin like snow. Romeo's early speeches about Rosaline are pure Petrarchan posturing: 'O brawling love, O loving hate' (1.1). When he meets Juliet, Shakespeare has them share a sonnet (1.5) \u2014 signalling real connection rather than one-sided performance. The play critiques Petrarchan convention even as it uses it.",
  },
  {
    topic: 'The Elizabethan stage and audience',
    detail:
      "The play was written for a bare thrust stage with no sets, no lighting, and no female actors. Juliet's balcony was the gallery above the stage. The audience surrounded the performers on three sides. Soliloquies (Romeo's 'But soft, what light through yonder window breaks?', Juliet's 'O Romeo, Romeo, wherefore art thou Romeo?') work because the actor speaks directly to the audience, creating intimacy. The groundlings paid a penny; the gallery cost more. Shakespeare wrote simultaneously for the educated and the illiterate.",
  },
  {
    topic: 'Fate, fortune and the stars',
    detail:
      "Elizabethans lived in a world where astrology was widely accepted. The stars were believed to influence human destiny. The prologue's 'star-cross'd lovers' would have been taken literally: their fate was written in the heavens. But Shakespeare complicates this by showing human decisions \u2014 the Friar's plan, the Nurse's betrayal, Capulet's ultimatum, Romeo's rashness \u2014 as equally responsible. The play holds fate and free will in tension, never fully resolving which one is to blame.",
  },
  {
    topic: 'Religion and the Friar',
    detail:
      "England was officially Protestant after Henry VIII's break with Rome, but many Elizabethans retained Catholic sympathies. Friar Lawrence is a Catholic monk \u2014 he hears confession, performs secret sacraments, and resorts to a potion rather than legal channels. A Protestant audience might have seen his scheming as characteristically Catholic (equivocation, secrecy), while a Catholic-sympathetic audience might have seen a well-meaning holy man trapped by circumstances. Shakespeare leaves both readings available.",
  },
]

export default async function RomeoAndJulietContextPage() {
  await requireIgcseBoard(['edexcel-igcse'])

  return (
    <main className="min-h-screen bg-background">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'IGCSE', url: 'https://theenglishhub.app/igcse' },
          { name: 'Edexcel IGCSE Literature', url: 'https://theenglishhub.app/igcse/edexcel' },
          { name: 'Shakespeare', url: 'https://theenglishhub.app/igcse/edexcel/shakespeare' },
          {
            name: 'Romeo and Juliet',
            url: 'https://theenglishhub.app/igcse/edexcel/shakespeare/romeo-and-juliet',
          },
          {
            name: 'Context',
            url: 'https://theenglishhub.app/igcse/edexcel/shakespeare/romeo-and-juliet/context',
          },
        ]}
      />
      {/* -- Hero ------------------------------------------------- */}
      <section className="border-b border-border bg-gradient-to-b from-primary/[0.06] to-transparent px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <Link
            href="/igcse/edexcel/shakespeare/romeo-and-juliet"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            &larr; Romeo and Juliet hub
          </Link>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            <GraduationCap className="h-4 w-4" />
            Edexcel IGCSE Literature
          </div>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Romeo and Juliet &mdash; Context
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            Elizabethan society, patriarchy, honour culture, the Italian setting and Petrarchan love
            poetry.
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
            context inside each analytical paragraph &mdash; enough to frame an Elizabethan
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
            Don&rsquo;t open a paragraph with &ldquo;Shakespeare was writing in Elizabethan
            England&hellip;&rdquo; Instead, fold context directly into analysis of a quotation. For
            example:
          </p>
          <div className="mt-4 rounded-lg border border-primary/30 bg-card p-4">
            <p className="text-sm text-muted-foreground italic leading-relaxed">
              &ldquo;When Capulet rages &lsquo;Hang thee, young baggage! disobedient wretch!&rsquo;
              at his thirteen-year-old daughter, an Elizabethan audience might not have condemned
              him outright &mdash; in a patriarchal society where daughters were expected to obey,
              Juliet&rsquo;s refusal is as transgressive as his fury. Shakespeare forces us to feel
              the injustice from Juliet&rsquo;s side even while showing us why Capulet thinks he is
              right.&rdquo;
            </p>
          </div>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            That&rsquo;s context working <em>inside</em> an analytical argument &mdash; exactly what
            IGCSE examiners reward.
          </p>
        </section>
      </div>

      <ExamBoardDisclaimer variant="content" className="mx-auto max-w-5xl px-4 py-8" />

      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4 mx-auto max-w-5xl px-4 pb-8">
        Romeo and Juliet by William Shakespeare is in the public domain. Quotations are reproduced
        freely.
      </p>
    </main>
  )
}
