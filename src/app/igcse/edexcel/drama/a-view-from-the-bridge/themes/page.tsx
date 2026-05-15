import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Sparkles, Info } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { requireIgcseBoard } from '@/app/igcse/_lib/guard'

import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
export const metadata: Metadata = {
  openGraph: {
    title: 'A View from the Bridge Themes — Edexcel IGCSE Literature',
    description:
      'Themes in A View from the Bridge: honour and reputation, masculinity and sexuality, law versus justice, family, immigration and tragic form.',
  },
  title: 'A View from the Bridge Themes — Edexcel IGCSE Literature',
  description:
    'Themes in A View from the Bridge: honour and reputation, masculinity and sexuality, law versus justice, family, immigration and tragic form.',
  alternates: {
    canonical: 'https://theenglishhub.app/igcse/edexcel/drama/a-view-from-the-bridge/themes',
  },
}

const themes = [
  {
    title: 'Honour, reputation and name',
    intro:
      'Eddie\u2019s deepest value is his "name" — his public standing in the close-knit Red Hook community. His final cry, "I want my name!", makes the theme explicit. Marco\u2019s honour code is starker still: an insult to his brother must be answered with physical retribution. Miller builds the play around the collision of two forms of the same value, each of which demands Eddie\u2019s destruction.',
    moments:
      'Eddie\u2019s conversation with Alfieri; Marco spitting in Eddie\u2019s face; the final street confrontation.',
    quote: '”I want my name!\u2026 Marco\u2019s got my name.” — Eddie',
  },
  {
    title: 'Masculinity and sexuality',
    intro:
      'Eddie polices masculinity with a combination of aggression and anxious language ("the guy ain\u2019t right"). Miller stages three tests: the boxing lesson, the forced kiss of Rodolpho, and the final knife fight. Each time, the attempt to assert masculinity exposes it as fragile and, finally, self-destructive. Rodolpho\u2019s un-American male practices — singing, cooking, tailoring — are offered as a less defensive alternative.',
    moments: 'The boxing scene; the Act Two kiss; Beatrice\u2019s accusation; the final fight.',
    quote: '“He give me the look… it comes out queer, like, that\u2019s what I mean.” — Eddie',
  },
  {
    title: 'Law versus justice',
    intro:
      'Alfieri is the play\u2019s legal conscience. He repeatedly tells Eddie that, legally, there is nothing to be done, and that the only solution is patience — to "settle for half". Eddie\u2019s decision to use the law (calling Immigration) is, in the community\u2019s moral economy, a form of lawlessness — a betrayal of solidarity graver than any crime the cousins have committed.',
    moments:
      'Alfieri\u2019s Act One scene with Eddie; Eddie\u2019s phone call to Immigration; Marco\u2019s arrest and accusation.',
    quote: '“The law is very specific. The law does not… even recognise this.” — Alfieri',
  },
  {
    title: 'Family and kinship',
    intro:
      'The Carbone household is a web of kin obligations — niece, wife, cousins-by-marriage — that the play stretches until it breaks. Eddie\u2019s refusal to let Catherine grow up is framed as paternal concern; Beatrice is the first to see it as desire. Marco\u2019s responsibility to his own starving children gives his migration its moral weight and makes the betrayal sting all the more.',
    moments:
      'The early domestic scenes; Beatrice\u2019s private conversations with Catherine; Marco\u2019s confession of family obligations.',
    quote: '“My wife is dying of starvation… they\u2019re hungry.” — Marco',
  },
  {
    title: 'Immigration and community',
    intro:
      'Red Hook in 1950s Brooklyn was an Italian longshoremen\u2019s district with widespread informal harbouring of "submarines" — undocumented cousins. Miller lived and worked in the community while writing the play. Immigration is not a backdrop but a structural condition: the entire plot depends on Marco and Rodolpho\u2019s illegal status, which means Eddie\u2019s betrayal has legal teeth it would not otherwise have.',
    moments:
      'The opening dock scenes; Vinny Bolzano\u2019s cautionary story; Marco and Rodolpho\u2019s arrest.',
    quote:
      '“You don\u2019t know, Baltimore. This is the United States government you\u2019re playing with now.” — Eddie (before becoming exactly what he fears)',
  },
  {
    title: 'Tragic form and Alfieri as chorus',
    intro:
      'Miller adapts the Greek tragic template — prologue, chorus, catastrophe, recognition — to Italian-American Brooklyn. Alfieri\u2019s interjections address the audience directly, framing each scene as something already ended. The play\u2019s structure denies suspense in order to emphasise inevitability: the question is not what Eddie will do but whether he can become conscious of himself in time.',
    moments:
      'Alfieri\u2019s prologue and epilogue; his warnings to Eddie; the final recognition speech.',
    quote: '“We settle for half, and I like it better.” — Alfieri',
  },
]

export default async function AViewThemesPage() {
  await requireIgcseBoard(['edexcel-igcse'])

  return (
    <div className="space-y-10 pb-16">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'IGCSE', url: 'https://theenglishhub.app/igcse' },
          { name: 'Edexcel IGCSE Literature', url: 'https://theenglishhub.app/igcse/edexcel' },
          { name: 'Drama', url: 'https://theenglishhub.app/igcse/edexcel/drama' },
          {
            name: 'A View from the Bridge',
            url: 'https://theenglishhub.app/igcse/edexcel/drama/a-view-from-the-bridge',
          },
          {
            name: 'Themes',
            url: 'https://theenglishhub.app/igcse/edexcel/drama/a-view-from-the-bridge/themes',
          },
        ]}
      />
      <div>
        <Button
          variant="ghost"
          size="sm"
          render={<Link href="/igcse/edexcel/drama/a-view-from-the-bridge" />}
        >
          <ArrowLeft className="size-3.5" />
          Back to A View from the Bridge
        </Button>
      </div>

      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-primary/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="relative">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge className="border-primary/20 bg-primary/10 text-primary">
              <Sparkles className="mr-1 size-3" />
              Edexcel IGCSE Literature
            </Badge>
            <Badge variant="secondary">Themes</Badge>
          </div>
          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            A View from the Bridge: Themes
          </h1>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
            Analytical routes through Miller’s play — honour, masculinity, law vs justice, family,
            immigration and tragic form.
          </p>
        </div>
      </section>

      <section className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-4 sm:p-5">
        <div className="flex gap-3">
          <Info className="mt-0.5 size-5 shrink-0 text-amber-600 dark:text-clay-600" />
          <div className="space-y-1">
            <h2 className="text-body-sm font-semibold text-foreground">
              Key quotations only — read the full text
            </h2>
            <p className="text-body-xs text-muted-foreground leading-relaxed">
              Short extracts are included under fair dealing for study and criticism.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-5">
        {themes.map((t) => (
          <article key={t.title} className="rounded-xl border border-border/60 bg-card p-6">
            <h2 className="text-heading-md font-heading text-foreground">{t.title}</h2>
            <p className="mt-3 text-body-sm leading-relaxed text-muted-foreground">{t.intro}</p>
            <p className="mt-3 text-body-xs text-muted-foreground">
              <span className="font-semibold text-foreground">Key moments:</span> {t.moments}
            </p>
            <blockquote className="mt-3 border-l-2 border-primary/40 pl-3 text-body-sm italic text-foreground">
              {t.quote}
            </blockquote>
          </article>
        ))}
      </section>

      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
        Short quotations reproduced under the fair dealing provision of the CDPA 1988 for criticism
        and review. Full text available from your school or local library.
      </p>
    </div>
  )
}
