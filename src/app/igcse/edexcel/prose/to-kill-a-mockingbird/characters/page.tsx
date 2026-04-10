import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Users, Sparkles, Info } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'To Kill a Mockingbird Characters — Edexcel IGCSE 4ET1',
  description:
    'Character analysis for To Kill a Mockingbird: Scout, Atticus, Jem, Tom Robinson, Boo Radley, Calpurnia, Bob and Mayella Ewell, Aunt Alexandra.',
  alternates: {
    canonical:
      'https://theenglishhub.app/igcse/edexcel/prose/to-kill-a-mockingbird/characters',
  },
}

const characters = [
  {
    name: 'Scout (Jean Louise) Finch',
    role: 'Narrator and protagonist',
    analysis:
      'Six to nine years old across the novel, Scout is a tomboyish, fiercely literate narrator whose first-person voice sits at a productive distance from her child-self. Lee uses a dual perspective: the child\u2019s bewildered observation and the adult\u2019s retrospective judgement. Scout\u2019s moral arc moves from literal, tit-for-tat thinking towards Atticus\u2019s ethic of empathy.',
    quote:
      '“Until I feared I would lose it, I never loved to read. One does not love breathing.”',
  },
  {
    name: 'Atticus Finch',
    role: 'Father, lawyer, moral centre',
    analysis:
      'A widowed state legislator and defence attorney, Atticus is principled, patient and almost impossibly self-controlled. Critics since the publication of Go Set a Watchman have contested the "saintly" reading, but in Mockingbird he functions as a moral yardstick — teaching courage without confidence of victory, empathy before judgement, and the separation of public duty from private feeling.',
    quote:
      '“The one thing that doesn\u2019t abide by majority rule is a person\u2019s conscience.”',
  },
  {
    name: 'Jem (Jeremy) Finch',
    role: 'Scout\u2019s older brother',
    analysis:
      'Four years older than Scout, Jem undergoes the novel\u2019s most visible loss of innocence. His fascination with Boo Radley, his growing admiration of Atticus and his shattered faith in Maycomb after Tom\u2019s conviction trace a more bruised coming-of-age than Scout\u2019s. His broken arm, mentioned on page one, becomes the novel\u2019s framing wound.',
    quote:
      '“I always thought Maycomb folks were the best folks in the world, least that\u2019s what they seemed like.”',
  },
  {
    name: 'Tom Robinson',
    role: 'The accused',
    analysis:
      'A hard-working, physically disabled Black labourer, Tom is falsely accused of raping Mayella Ewell after he responds to her loneliness with kindness. His disabled left arm makes the alleged assault physically impossible, yet the jury still convicts. His death, shot "seventeen times" while trying to escape prison, exposes the hollowness of Atticus\u2019s faith in appeal.',
    quote:
      '“I felt right sorry for her” — the line that, by expressing a Black man\u2019s pity for a white woman, seals his fate in court.',
  },
  {
    name: 'Arthur "Boo" Radley',
    role: 'Reclusive neighbour',
    analysis:
      'The novel\u2019s second "mockingbird". Boo is first a Gothic childhood legend — a figure of rumour and dares — before emerging as the silent protector who stitches Jem\u2019s trousers, leaves gifts in the oak, and finally kills Bob Ewell to save the children. His one spoken line in the novel ("Will you take me home?") is devastating in its quietness.',
    quote:
      '“Atticus, he was real nice… Most people are, Scout, when you finally see them.”',
  },
  {
    name: 'Calpurnia',
    role: 'The Finches\u2019 housekeeper and Black maternal figure',
    analysis:
      'Calpurnia is bilingual in dialects — "white" at the Finches, African-American Vernacular English at First Purchase Church — embodying the double consciousness Black characters must navigate in Maycomb. She disciplines Scout, models rigorous moral expectations, and offers the children their only serious exposure to Black community life.',
    quote:
      '“Don\u2019t matter who they are, anybody sets foot in this house\u2019s yo\u2019 comp\u2019ny.”',
  },
  {
    name: 'Bob Ewell',
    role: 'Antagonist',
    analysis:
      'The unemployed, alcoholic patriarch of the Ewell family, Bob represents the "poor white" demographic whose only social currency is whiteness. Lee uses him to separate racism from ignorance (Atticus distinguishes the Ewells from the Cunninghams) and to show how racial hierarchy props up otherwise failing masculinities.',
    quote:
      'He dies attacking Scout and Jem on Halloween — his revenge plot collapsing under Boo\u2019s kitchen knife.',
  },
  {
    name: 'Mayella Ewell',
    role: 'Complicated victim-accuser',
    analysis:
      'Nineteen, isolated, and abused by her father, Mayella is both victim and perpetrator — a figure through whom Lee examines how gender and class intersect with race. Her seven red geraniums, tended "as carefully as Miss Maudie Atkinson", register a yearning for beauty the novel treats with uncomfortable sympathy before her false testimony condemns Tom.',
    quote:
      'Atticus: “Who beat you up? Tom Robinson or your father?”',
  },
  {
    name: 'Aunt Alexandra',
    role: 'Atticus\u2019s sister',
    analysis:
      'Alexandra arrives during Part Two to drill Scout in "ladylike" behaviour and enforce a hereditary sense of Finch family pride. She represents the Southern aristocratic code Atticus has partly rejected; her tea-party grace under pressure after Tom\u2019s death reveals a harder decency than Scout expects.',
    quote:
      '“Jean Louise, stop scratching your head.”',
  },
  {
    name: 'Dill (Charles Baker Harris)',
    role: 'Summer friend',
    analysis:
      'Based on Lee\u2019s real childhood friend Truman Capote, Dill brings imagination and melodrama to the Boo Radley games and weeps openly in the courtroom. His tears function as the novel\u2019s emotional interpreter for readers who might otherwise read the trial as procedural.',
    quote:
      '“It was just him I couldn\u2019t stand… that old Mr Gilmer doin\u2019 him thataway, talking so hateful to him.”',
  },
  {
    name: 'Miss Maudie Atkinson',
    role: 'Neighbour and Atticus\u2019s ally',
    analysis:
      'A progressive Baptist widow, Miss Maudie articulates the mockingbird symbol, defends Atticus\u2019s character to the children, and after her house burns down greets the loss with humour. She is the adult female voice the novel most trusts.',
    quote:
      '“Mockingbirds don\u2019t do one thing but make music for us to enjoy.”',
  },
]

export default function TkamCharactersPage() {
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
            <Badge variant="secondary">Characters</Badge>
          </div>
          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            To Kill a Mockingbird: Characters
          </h1>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
            Analytical profiles of the Finches, Ewells, Robinson, Radley and
            the wider Maycomb cast — with one short, fair-use quotation each.
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
              criticism. Read the complete novel for the full characterisation.
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
    </div>
  )
}
