import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Sparkles, Info } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { requireIgcseBoard } from '@/app/igcse/_lib/guard'

export const metadata: Metadata = {
  title: 'To Kill a Mockingbird Themes — Edexcel IGCSE 4ET1',
  description:
    'Themes in To Kill a Mockingbird: racism and justice, moral courage, childhood innocence, empathy, class, gender and the mockingbird motif.',
  alternates: {
    canonical:
      'https://theenglishhub.app/igcse/edexcel/prose/to-kill-a-mockingbird/themes',
  },
}

const themes = [
  {
    title: 'Racism and justice',
    intro:
      'The novel\u2019s central theme is the legal and social machinery of Jim Crow Alabama. Tom Robinson\u2019s trial is structured to look fair — Judge Taylor is competent, Atticus is diligent, the Ewell case falls apart under cross-examination — yet the verdict is pre-written by race. Lee distinguishes between overt racism (the Ewells, the lynch mob) and "polite" racism (the ladies\u2019 missionary society) to show how the whole social tissue of Maycomb sustains injustice.',
    textualMoments:
      'The trial chapters (17–21); the Missionary Society tea (ch. 24); Atticus\u2019s closing speech; the night at the jail (ch. 15).',
    quote:
      '”When it\u2019s a white man\u2019s word against a black man\u2019s, the white man always wins.”',
  },
  {
    title: 'Moral courage',
    intro:
      'Courage in Mockingbird is redefined away from physical bravery. Atticus\u2019s definition — via Mrs Dubose\u2019s morphine withdrawal — is the book\u2019s working theory of ethical action: doing the right thing when you already know you will lose. This makes the trial itself an act of courage rather than a failed rescue mission.',
    textualMoments:
      'Mrs Dubose chapters (11); the mad-dog shot (10); Atticus\u2019s defence; Boo\u2019s intervention.',
    quote:
      '”Real courage is… when you\u2019re licked before you begin but you begin anyway.”',
  },
  {
    title: 'Childhood innocence and its loss',
    intro:
      'The dual-voice narration lets Lee track the children\u2019s loss of innocence in slow motion. Scout keeps hers longer than Jem, partly because the trial\u2019s sexual charge passes over her head. Jem is shattered; Dill, more sensitive still, weeps openly. The novel refuses the easy consolation that growing up means understanding — it often means unlearning.',
    textualMoments:
      'The Radley games (ch. 1–5); Jem\u2019s reaction to the verdict (ch. 22); the final walk home.',
    quote:
      '”Like watching Atticus walk into the street, raise a rifle… knowing the gun was empty.”',
  },
  {
    title: 'Empathy and perspective',
    intro:
      'Atticus\u2019s instruction to "climb into [another person\u2019s] skin and walk around in it" functions as the novel\u2019s moral engine. Scout applies it variously — to Walter Cunningham, Miss Caroline, eventually Boo Radley — and Lee uses its successful and failed applications to measure each character\u2019s growth.',
    textualMoments:
      'Walter Cunningham at lunch (ch. 3); the final scene on Boo\u2019s porch (ch. 31).',
    quote:
      '“You never really understand a person until you consider things from his point of view.”',
  },
  {
    title: 'The mockingbird motif',
    intro:
      'Two characters are identified as mockingbirds: Tom Robinson (innocent, destroyed by the town) and Boo Radley (dragged into daylight by Bob Ewell\u2019s attack). Sheriff Tate\u2019s closing decision to protect Boo from publicity — "it\u2019d be sort of like shootin\u2019 a mockingbird" — turns the motif into a principle of active protection, not just passive pity.',
    textualMoments:
      'Miss Maudie\u2019s explanation (ch. 10); Tom\u2019s death in ch. 25; Tate\u2019s decision in ch. 30.',
    quote: '“It\u2019s a sin to kill a mockingbird.”',
  },
  {
    title: 'Class and the Southern hierarchy',
    intro:
      'Jem\u2019s taxonomy of Maycomb — "our kind of folks don\u2019t like the Cunninghams, the Cunninghams don\u2019t like the Ewells, and the Ewells hate and despise the colored folks" — lays out the brittle class system that racial scapegoating holds together. Lee repeatedly shows how class anxiety feeds racial violence.',
    textualMoments:
      'Scout\u2019s lunch with Walter (ch. 3); Jem\u2019s taxonomy (ch. 23); Aunt Alexandra\u2019s Finch Family lectures.',
    quote:
      '“There\u2019s four kinds of folks in the world.”',
  },
  {
    title: 'Gender and Southern womanhood',
    intro:
      'Scout\u2019s refusal of dresses, overalls and Alexandra\u2019s "ladylike" curriculum positions gender as another system of control. Mayella\u2019s isolation exposes the darker side of the same pressure: white Southern femininity is both prized and weaponised. Miss Maudie offers an alternative model of adult womanhood — sharp, independent and unmarried.',
    textualMoments:
      'Scout\u2019s clashes with Alexandra; Mayella\u2019s testimony; the Missionary Society tea.',
    quote:
      '“I was not so sure, but Jem told me I was being a girl.”',
  },
]

export default async function TkamThemesPage() {
  await requireIgcseBoard(['edexcel-igcse'])

  return (
    <div className="space-y-10 pb-16">
      <div>
        <Button
          variant="ghost"
          size="sm"
          render={
            <Link href="/igcse/edexcel/prose/to-kill-a-mockingbird" />
          }
        >
          <ArrowLeft className="size-3.5" />
          Back to To Kill a Mockingbird
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
            To Kill a Mockingbird: Themes
          </h1>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
            Analytical routes through Lee’s novel for AO1, AO2 and AO4
            — racism, courage, innocence, empathy, class, gender and the
            mockingbird motif.
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
              Short extracts are included under fair dealing for study and
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
              {t.textualMoments}
            </p>
            <blockquote className="mt-3 border-l-2 border-primary/40 pl-3 text-body-sm italic text-foreground">
              {t.quote}
            </blockquote>
          </article>
        ))}
      </section>

      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
        Short quotations reproduced under the fair dealing provision of the CDPA 1988 for criticism and review. Full text available from your school or local library.
      </p>
    </div>
  )
}
