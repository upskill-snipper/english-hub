import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Sparkles, Info } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { requireIgcseBoard } from '@/app/igcse/_lib/guard'

export const metadata: Metadata = {
  title: 'Things Fall Apart Themes — Edexcel IGCSE 4ET1',
  description:
    'Themes in Achebe\u2019s Things Fall Apart: colonialism, masculinity, tradition vs change, fate and chi, gender, language and narrative form.',
  alternates: {
    canonical:
      'https://theenglishhub.app/igcse/edexcel/prose/things-fall-apart/themes',
  },
}

const themes = [
  {
    title: 'Colonialism and cultural disruption',
    intro:
      'Achebe shows colonisation as a slow, multi-stage process rather than a single catastrophe. Missionaries arrive with songs, then build churches, then administer courts, then call soldiers. By the time Umuofia perceives the threat clearly, the clan has already "fallen apart" from within. The novel refuses two extremes: it neither romanticises pre-colonial Igbo society nor exonerates the colonisers.',
    moments:
      'Mr Brown\u2019s conversations with Akunna; the destruction of the church; the killing of the court messenger; the final paragraph.',
    quote:
      '”He has put a knife on the things that held us together…” — Obierika',
  },
  {
    title: 'Masculinity and fear of weakness',
    intro:
      'Okonkwo\u2019s masculinity is a reaction formation against his father Unoka. He equates strength with violence, feeling with effeminacy, and silence with control. Achebe presents this rigidity as personally destructive — it leads him to kill Ikemefuna, beat his wives, alienate Nwoye and ultimately hang himself. But it is also culturally legible: Umuofia rewards the same qualities it ends up punishing.',
    moments:
      'Okonkwo\u2019s wrestling match memories; the killing of Ikemefuna; the beating of Ojiugo during Peace Week; his reaction to Nwoye\u2019s conversion.',
    quote:
      '“His whole life was dominated by fear, the fear of failure and of weakness.”',
  },
  {
    title: 'Tradition versus change',
    intro:
      'Achebe complicates any simple tradition-vs-modernity binary. Some Igbo customs — the killing of twins, the ostracism of osu (outcasts), the sacrifice of Ikemefuna — draw the sympathies of the young and the disaffected towards Christianity. Nwoye\u2019s conversion is presented partly as a search for moral relief, not merely cultural betrayal.',
    moments:
      'The killing of twins in the Evil Forest; Nwoye\u2019s conversion; the osu joining the church; Okonkwo\u2019s nostalgia on returning from exile.',
    quote:
      '”It was the poetry of the new religion, something felt in the marrow.”',
  },
  {
    title: 'Fate, chi and personal agency',
    intro:
      'Igbo theology gives each person a chi, a personal spiritual double. Achebe sets Okonkwo\u2019s self-reliance against this framework: he refuses to accept that "if a man said yes his chi said yes also", but the narrative eventually forces him to learn that "a man could not rise beyond the destiny of his chi". The tension gives the novel a quasi-tragic structure.',
    moments:
      'Okonkwo\u2019s reflection after his exile; the accidental shooting of Ezeudu\u2019s son; the final scene.',
    quote: '“Clearly his personal god or chi was not made for great things.”',
  },
  {
    title: 'Gender and the feminine principle',
    intro:
      'Umuofia is patriarchal but not one-dimensional. Achebe includes Nneka ("Mother is Supreme"), the women\u2019s market, Chielo the priestess of Agbala, and Ekwefi\u2019s devotion to Ezinma — all of which complicate Okonkwo\u2019s dismissal of "feminine" qualities. His exile in his motherland Mbanta is literally a forced encounter with the feminine principle he has spent his life suppressing.',
    moments:
      'Chielo\u2019s night journey with Ezinma; Uchendu\u2019s "mother is supreme" speech; Ekwefi\u2019s grief; the women\u2019s egwugwu trial.',
    quote:
      '”When there is sorrow and bitterness he finds refuge in his motherland.” — Uchendu',
  },
  {
    title: 'Language, proverbs and narrative form',
    intro:
      'Achebe writes in English but saturates the prose with Igbo proverbs, folktales and ritual speech patterns. The novel\u2019s form is part of its argument: an African voice using the coloniser\u2019s language to tell a story the coloniser could only footnote. The final paragraph, in the District Commissioner\u2019s bureaucratic register, makes the contrast unmistakable.',
    moments:
      'The proverb about palm-oil; the folktale of the tortoise; the final District Commissioner paragraph.',
    quote:
      '“Proverbs are the palm-oil with which words are eaten.”',
  },
]

export default async function ThingsFallApartThemesPage() {
  await requireIgcseBoard(['edexcel-igcse'])

  return (
    <div className="space-y-10 pb-16">
      <div>
        <Button
          variant="ghost"
          size="sm"
          render={<Link href="/igcse/edexcel/prose/things-fall-apart" />}
        >
          <ArrowLeft className="size-3.5" />
          Back to Things Fall Apart
        </Button>
      </div>

      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-primary/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="relative">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge className="border-primary/20 bg-primary/10 text-primary">
              <Sparkles className="mr-1 size-3" />
              Edexcel IGCSE 4ET1
            </Badge>
            <Badge variant="secondary">Themes</Badge>
          </div>
          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            Things Fall Apart: Themes
          </h1>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
            Analytical routes through Achebe’s novel — colonialism,
            masculinity, tradition, chi, gender, language and form.
          </p>
        </div>
      </section>

      <section className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-4 sm:p-5">
        <div className="flex gap-3">
          <Info className="mt-0.5 size-5 shrink-0 text-amber-600 dark:text-amber-400" />
          <div className="space-y-1">
            <h2 className="text-body-sm font-semibold text-foreground">
              Key quotations only — read the full text
            </h2>
            <p className="text-body-xs text-muted-foreground leading-relaxed">
              Short extracts are included under fair use for study and
              criticism.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-5">
        {themes.map((t) => (
          <article
            key={t.title}
            className="rounded-xl border border-border/60 bg-card p-6"
          >
            <h2 className="text-heading-md font-heading text-foreground">
              {t.title}
            </h2>
            <p className="mt-3 text-body-sm leading-relaxed text-muted-foreground">
              {t.intro}
            </p>
            <p className="mt-3 text-body-xs text-muted-foreground">
              <span className="font-semibold text-foreground">
                Key moments:
              </span>{' '}
              {t.moments}
            </p>
            <blockquote className="mt-3 border-l-2 border-primary/40 pl-3 text-body-sm italic text-foreground">
              {t.quote}
            </blockquote>
          </article>
        ))}
      </section>
    </div>
  )
}
