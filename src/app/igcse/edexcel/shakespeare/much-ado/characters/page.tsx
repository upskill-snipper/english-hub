'use client'

import Link from 'next/link'
import { ArrowLeft, Users, Sparkles, Info } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import StudyTools from '@/components/study/StudyTools'

const characters = [
  {
    name: 'Beatrice',
    role: 'Leonato\u2019s niece and the play\u2019s sharpest wit',
    analysis:
      'Beatrice is intelligent, independent, and fluent in the verbal combat that defines Messina\u2019s social world. Her "merry war" with Benedick is the play\u2019s engine, and Shakespeare gives her the faster, funnier lines. But Beatrice is also deeply aware of her powerlessness as a woman: in Act 4, after Hero\u2019s shaming, she rages "O God, that I were a man! I would eat his heart in the market-place." Because she cannot act herself, she asks Benedick to do it for her with "Kill Claudio" \u2014 two words that test whether his love is real. Her final acceptance of Benedick ("I yield upon great persuasion") keeps the scepticism alive inside the comedy.',
    quote:
      '\u201cI had rather hear my dog bark at a crow than a man swear he loves me.\u201d',
  },
  {
    name: 'Benedick',
    role: 'Soldier and self-declared bachelor',
    analysis:
      'Benedick is witty, self-mocking, and loudly anti-marriage \u2014 until the eavesdropping scene converts him in a single soliloquy. Shakespeare makes his transformation both comic and sincere: "The world must be peopled" is his pragmatic capitulation, but his commitment to Beatrice in Act 4 is genuinely courageous. When she says "Kill Claudio", he agrees, choosing love over male solidarity. Benedick\u2019s growth is the play\u2019s strongest argument that language and wit can build real trust.',
    quote:
      '\u201cI do love nothing in the world so well as you \u2014 is not that strange?\u201d',
  },
  {
    name: 'Claudio',
    role: 'Young soldier and Hero\u2019s suitor',
    analysis:
      'Claudio falls in love with Hero almost without speaking to her, woos her through Don Pedro, and rejects her publicly on the basis of one unverified rumour. Shakespeare gives him the play\u2019s ugliest speech \u2014 "Give not this rotten orange to your friend" \u2014 and never fully redeems him. His love is real but thin: it cannot survive a single test. Critics debate whether the play forgives Claudio or merely marries him off; the wedding in Act 5 is a restoration of social order, not necessarily of moral clarity.',
    quote:
      '\u201cGive not this rotten orange to your friend.\u201d',
  },
  {
    name: 'Hero',
    role: 'Leonato\u2019s daughter',
    analysis:
      'Hero barely speaks in the first three acts \u2014 she is spoken for, spoken about, and spoken at. Her silence is not a dramatic oversight but a portrait of how little real power women have in Messina. When she is publicly shamed at the altar, she faints and has no legal or social recourse; only the Friar\u2019s pretence of her death can save her. Hero\u2019s return in Act 5 is conditional: she can only re-enter society when her honour has been restored on male terms.',
    quote:
      '\u201cIs my lord well that he doth speak so wide?\u201d',
  },
  {
    name: 'Don Pedro',
    role: 'Prince of Aragon',
    analysis:
      'Don Pedro is the play\u2019s social authority: he arranges the match between Claudio and Hero, engineers the trick on Beatrice and Benedick, and joins the public shaming at the altar. He is generous, powerful, and easily manipulated by his brother. Shakespeare uses him to show how benevolent authority and malicious deception can produce identical results when the powerful are credulous. He ends the play alone \u2014 Benedick offers to find him a wife, but the moment sits uncomfortably.',
    quote:
      '\u201cI will in the interim undertake one of Hercules\u2019 labours.\u201d',
  },
  {
    name: 'Don John',
    role: 'Don Pedro\u2019s illegitimate brother',
    analysis:
      'Don John is the play\u2019s self-declared villain: "I am a plain-dealing villain." He schemes to destroy Claudio\u2019s marriage out of envy and resentment, using Borachio to stage the window trick. Shakespeare gives him no complex motivation \u2014 he is bitter about his illegitimacy and takes pleasure in disruption. His thinness as a character is arguably the point: it takes very little malice to destroy a woman\u2019s reputation in a world built on male honour.',
    quote:
      '\u201cI am a plain-dealing villain.\u201d',
  },
  {
    name: 'Leonato',
    role: 'Governor of Messina and Hero\u2019s father',
    analysis:
      'Leonato is a loving father until his daughter\u2019s honour is questioned, at which point he collapses into "Death is the fairest cover for her shame." His reaction \u2014 preferring his daughter\u2019s death to the survival of gossip \u2014 is the play\u2019s most chilling exposure of the honour system. Shakespeare does not entirely condemn Leonato (he follows the Friar\u2019s plan), but his first instinct reveals how fragile a father\u2019s love can be when it depends on a daughter\u2019s sexual reputation.',
    quote:
      '\u201cDeath is the fairest cover for her shame.\u201d',
  },
  {
    name: 'Dogberry',
    role: 'Constable of the Watch',
    analysis:
      'Dogberry is Shakespeare\u2019s comic policeman: pompous, illiterate, and accidentally effective. His malapropisms ("O villain! thou wilt be condemned into everlasting redemption") are the play\u2019s broadest comedy, but his Watch actually captures Borachio and uncovers the truth. Shakespeare uses him to show that justice arrives through absurd channels when the powerful are too proud to see what is in front of them.',
    quote:
      '\u201cO villain! thou wilt be condemned into everlasting redemption.\u201d',
  },
  {
    name: 'Borachio',
    role: 'Don John\u2019s follower',
    analysis:
      'Borachio executes the window trick, staging the scene with Margaret that convinces Claudio of Hero\u2019s infidelity. His name comes from the Spanish for "drunkard", and it is his drunken confession to Conrade that Dogberry\u2019s Watch overhears. He is the mechanism of the plot\u2019s crisis and, when caught, its resolution.',
    quote:
      '\u201cI have tonight wooed Margaret, the Lady Hero\u2019s gentlewoman, by the name of Hero.\u201d',
  },
  {
    name: 'Margaret',
    role: 'Hero\u2019s gentlewoman',
    analysis:
      'Margaret unknowingly participates in Borachio\u2019s deception by appearing at Hero\u2019s window. Shakespeare never fully explains whether she understood what was happening, leaving her role ambiguous. She is also witty and sexually confident in her exchanges with Benedick, providing a lower-class counterpart to Beatrice\u2019s verbal energy.',
    quote:
      '\u201cWill you then write me a sonnet in praise of my beauty?\u201d',
  },
]

export default function MuchAdoCharactersPage() {
  return (
    <div className="space-y-10 pb-16">
      <div>
        <Button
          variant="ghost"
          size="sm"
          render={<Link href="/igcse/edexcel/shakespeare/much-ado" />}
        >
          <ArrowLeft className="size-3.5" />
          Back to Much Ado About Nothing
        </Button>
      </div>

      <StudyTools
        textName="Much Ado About Nothing"
        textType="play"
        examBoard="IGCSE Edexcel"
      />

      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-primary/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="relative">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge className="border-primary/20 bg-primary/10 text-primary">
              <Sparkles className="mr-1 size-3" />
              Edexcel IGCSE Literature
            </Badge>
            <Badge variant="secondary">Characters</Badge>
          </div>
          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            Much Ado About Nothing: Characters
          </h1>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
            Character profiles for Shakespeare&rsquo;s comedy &mdash; Beatrice,
            Benedick, Claudio, Hero, Don Pedro, Don John and the Watch.
          </p>
        </div>
      </section>

      <section className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-4 sm:p-5">
        <div className="flex gap-3">
          <Info className="mt-0.5 size-5 shrink-0 text-amber-600 dark:text-clay-600" />
          <div className="space-y-1">
            <h2 className="text-body-sm font-semibold text-foreground">
              Public domain text
            </h2>
            <p className="text-body-xs text-muted-foreground leading-relaxed">
              Much Ado About Nothing by William Shakespeare is in the public
              domain. Quotations are reproduced freely.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="mb-5 flex items-center gap-3">
          <Users className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">
            Character profiles
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {characters.map((c) => (
            <article
              key={c.name}
              className="rounded-xl border border-border/60 bg-card p-5"
            >
              <h3 className="text-heading-sm font-heading text-foreground">
                {c.name}
              </h3>
              <p className="mt-0.5 text-body-xs font-medium uppercase tracking-wide text-primary">
                {c.role}
              </p>
              <p className="mt-3 text-body-sm leading-relaxed text-muted-foreground">
                {c.analysis}
              </p>
              <blockquote className="mt-3 border-l-2 border-primary/40 pl-3 text-body-sm italic text-foreground">
                {c.quote}
              </blockquote>
            </article>
          ))}
        </div>
      </section>

      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
        Much Ado About Nothing by William Shakespeare is in the public domain.
        Quotations are reproduced freely.
      </p>
    </div>
  )
}
