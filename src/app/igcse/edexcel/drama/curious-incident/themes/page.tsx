import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Sparkles, Info } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { requireIgcseBoard } from '@/app/igcse/_lib/guard'

import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
export const metadata: Metadata = {
  title: 'Curious Incident Themes — Edexcel IGCSE Literature',
  description:
    'Themes in The Curious Incident of the Dog in the Night-Time: neurodivergence, family, truth and lies, independence, order and theatrical form.',
  alternates: {
    canonical: 'https://theenglishhub.app/igcse/edexcel/drama/curious-incident/themes',
  },
}

const themes = [
  {
    title: 'Neurodivergence and perception',
    intro:
      'Christopher experiences the world with heightened sensory sensitivity, a literal interpretation of language and a preference for order. Neither Haddon nor Stephens uses a diagnostic label in official materials; both treat Christopher\u2019s way of seeing as a different, coherent worldview rather than a deficit. The play\u2019s staging — projections, ensemble, sudden noise and light — externalises his experience for a neurotypical audience.',
    moments:
      'The sensory overload on the Underground; the grid of the stage floor; Christopher\u2019s lists and diagrams.',
    quote: '“I find people confusing.” — Christopher',
  },
  {
    title: 'Family, love and failure',
    intro:
      'Ed and Judy Boone both love Christopher; both fail him in different ways. Ed lies to protect him and destroys the protection. Judy cannot cope with his needs and leaves. The play refuses to make either parent a villain, presenting their exhaustion with sympathy while refusing to excuse the damage. Christopher\u2019s final, uncertain trust is the play\u2019s most hard-won moment.',
    moments:
      'Ed\u2019s bedtime scenes; Judy\u2019s hidden letters; Christopher\u2019s arrival at Judy\u2019s London flat; the final reconciliation.',
    quote: '“I love Christopher more than anything in the whole wide world.” — Ed',
  },
  {
    title: 'Truth and lies',
    intro:
      'Christopher\u2019s insistence that he "cannot tell lies" sets up the play\u2019s moral engine. The plot runs on lies of omission — the mother\u2019s letters, the dog\u2019s death — and Christopher\u2019s literal-truth ethic forces every hidden thing into the open. Siobhan\u2019s voice gently teaches him that social life is full of white lies, and the play takes this tension seriously rather than resolving it.',
    moments:
      'Christopher\u2019s "I do not tell lies" list; Ed\u2019s confession; the discovered letters.',
    quote: '”I do not tell lies.” — Christopher',
  },
  {
    title: 'Independence and growing up',
    intro:
      'The London journey is the play\u2019s coming-of-age sequence. Christopher moves through tube stations, crowds and unfamiliar noise by drawing on Siobhan\u2019s voice in his head and the rigorous maths of navigation. His success does not mean everything is now easy — the play closes on a question, not a declaration — but it does mean his future is genuinely open.',
    moments:
      'The Swindon to London journey; the A-level maths result; the final question to Siobhan.',
    quote: '“You have to do things even if they scare you.” — Christopher',
  },
  {
    title: 'Order, mathematics and control',
    intro:
      'Mathematics functions for Christopher as a refuge: prime numbers, geometry, logic puzzles and maps make the world predictable. Stephens stages Christopher\u2019s mathematical monologues as moments of visual clarity, contrasting them with the chaos of social interaction. The final appendix — Christopher\u2019s proof — is performed as an epilogue, making formal order the play\u2019s last word.',
    moments:
      'The prime number sequence; Christopher\u2019s map of the neighbourhood; the A-level maths proof.',
    quote:
      '“Prime numbers are what is left when you have taken all the patterns away.” — Christopher',
  },
  {
    title: 'Theatrical form and metatheatre',
    intro:
      'Stephens frames the play as a rehearsal of Christopher\u2019s book by Siobhan and the class. The device allows Christopher to be simultaneously a character and a subject being read, and lets the staging slip between naturalism and stylised movement. The National Theatre\u2019s original production used a gridded LED stage, projection and ensemble work to make the inner life of an intensely private narrator visible. The form is inseparable from the themes.',
    moments:
      'The opening frame; Siobhan\u2019s narration throughout; the ensemble movement sequences; the post-bow maths proof.',
    quote: '“I think I\u2019m going to write a book.” — Christopher, early in Act One',
  },
]

export default async function CuriousIncidentThemesPage() {
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
            name: 'The Curious Incident of the Dog in the Night-Time',
            url: 'https://theenglishhub.app/igcse/edexcel/drama/curious-incident',
          },
          {
            name: 'Themes',
            url: 'https://theenglishhub.app/igcse/edexcel/drama/curious-incident/themes',
          },
        ]}
      />
      <div>
        <Button
          variant="ghost"
          size="sm"
          render={<Link href="/igcse/edexcel/drama/curious-incident" />}
        >
          <ArrowLeft className="size-3.5" />
          Back to The Curious Incident
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
            The Curious Incident: Themes
          </h1>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
            Analytical routes through Stephens and Haddon’s play — neurodivergence, family, truth,
            independence, order and form.
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
