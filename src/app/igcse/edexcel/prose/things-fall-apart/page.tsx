import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, BookOpen, Sparkles, Info, Quote, Feather } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { requireIgcseBoard } from '@/app/igcse/_lib/guard'
import StudyTools from '@/components/study/StudyTools'

import { CourseJsonLd, BreadcrumbJsonLd } from '@/components/seo/json-ld'
export const metadata: Metadata = {
  openGraph: {
    title: 'Things Fall Apart - Edexcel IGCSE Literature Study Guide',
    description:
      'Chinua Achebe\u2019s Things Fall Apart for Edexcel IGCSE Literature: Okonkwo, Umuofia, the arrival of the missionaries, key themes and quotations.',
  },
  title: 'Things Fall Apart - Edexcel IGCSE Literature Study Guide',
  description:
    'Chinua Achebe\u2019s Things Fall Apart for Edexcel IGCSE Literature: Okonkwo, Umuofia, the arrival of the missionaries, key themes and quotations.',
  alternates: {
    canonical: 'https://theenglishhub.app/igcse/edexcel/prose/things-fall-apart',
  },
}

const plotBeats = [
  {
    part: 'Part One - Umuofia before colonisation',
    summary:
      'Okonkwo, a self-made wrestler and warrior, rises to prominence in the Igbo village of Umuofia. He takes three wives, accumulates yams, and struggles with the memory of his weak, indebted father Unoka. The Oracle commands the killing of Ikemefuna, the boy Okonkwo has come to love as a son.',
  },
  {
    part: 'Part Two - Exile in Mbanta',
    summary:
      'After accidentally killing a clansman\u2019s son, Okonkwo is exiled for seven years to his mother\u2019s village. During this time the first Christian missionaries arrive in Umuofia and Mbanta, converting Okonkwo\u2019s sensitive son Nwoye. Achebe traces the slow, unglamorous beginnings of colonial rule.',
  },
  {
    part: 'Part Three - Return and collapse',
    summary:
      'Okonkwo returns to find Umuofia transformed: a Christian church, a colonial district court, and a clan that will no longer act together. He kills a court messenger in protest and, facing the failure of his community to rise with him, hangs himself. A British District Commissioner plans a paragraph about him for a book on "Primitive Tribes".',
  },
]

const characters = [
  {
    name: 'Okonkwo',
    note: 'Umuofia\u2019s warrior-hero: self-made, rigid, violent, terrified of resembling his father Unoka. His tragedy is the inability to adapt - to the killing of Ikemefuna, to exile, to colonial rule.',
  },
  {
    name: 'Unoka',
    note: 'Okonkwo\u2019s father: a gentle failure. Achebe uses him to explain Okonkwo\u2019s pathological fear of weakness without excusing it.',
  },
  {
    name: 'Nwoye',
    note: 'Okonkwo\u2019s eldest son, drawn to his "feminine" mother\u2019s stories and eventually to Christianity. His conversion is the novel\u2019s most intimate wound to Okonkwo.',
  },
  {
    name: 'Ezinma',
    note: 'Okonkwo\u2019s favourite child, daughter of Ekwefi. Smart, spirited, the child he wishes had been a boy.',
  },
  {
    name: 'Ikemefuna',
    note: 'A hostage boy from Mbaino who lives with Okonkwo\u2019s family for three years, calls him father, and is killed by him on the Oracle\u2019s orders.',
  },
  {
    name: 'Obierika',
    note: 'Okonkwo\u2019s thoughtful friend: the character who asks questions Okonkwo will not, and whose grief at the end provides the novel\u2019s elegiac final note.',
  },
  {
    name: 'Mr Brown',
    note: 'The first, more conciliatory missionary. Represents a softer face of colonial evangelism - still disruptive, but willing to learn.',
  },
  {
    name: 'Reverend Smith',
    note: 'Mr Brown\u2019s rigid successor: uncompromising, zealous, and the catalyst for the final confrontation.',
  },
  {
    name: 'The District Commissioner',
    note: 'The colonial administrator whose bureaucratic closing paragraph reduces Okonkwo\u2019s tragedy to ethnographic footnote.',
  },
]

const keyQuotations = [
  {
    quote: 'Okonkwo was well known throughout the nine villages and even beyond.',
    speaker: 'Narrator (opening)',
    analysis:
      'The opening sentence positions Okonkwo as a public figure of the clan - a reputation the novel will spend its remaining pages dismantling.',
  },
  {
    quote: 'His whole life was dominated by fear, the fear of failure and of weakness.',
    speaker: 'Narrator on Okonkwo',
    analysis:
      'Achebe explicitly psychologises Okonkwo. Note the structural inversion: his reputation for strength is the symptom of fear, not its opposite.',
  },
  {
    quote: 'He was afraid of being thought weak.',
    speaker: 'Narrator on Okonkwo killing Ikemefuna',
    analysis:
      'The reason Okonkwo strikes the fatal blow - the line crystallises his tragedy into a single motive.',
  },
  {
    quote: 'That boy calls you father. Do not bear a hand in his death.',
    speaker: 'Ezeudu',
    analysis:
      'The elder\u2019s warning Okonkwo ignores. Achebe stages the killing of Ikemefuna as a choice, not a command.',
  },
  {
    quote: 'Proverbs are the palm-oil with which words are eaten.',
    speaker: 'Narrator',
    analysis:
      'Achebe\u2019s most quoted line about Igbo orality. It also signals his authorial project: translating that tradition into English prose without subordinating it.',
  },
  {
    quote: 'Now he has won our brothers, and our clan can no longer act like one.',
    speaker: 'Obierika',
    analysis:
      'Obierika\u2019s diagnosis of colonialism as an internal loosening - more powerful than the external force itself.',
  },
  {
    quote: 'He has put a knife on the things that held us together…',
    speaker: 'Obierika',
    analysis:
      'The line that gives the novel its title. Note the passive "have fallen apart" - Achebe holds the clan responsible, too.',
  },
  {
    quote: 'Living fire begets cold, impotent ash.',
    speaker: 'Narrator on Okonkwo and Nwoye',
    analysis:
      'Ironic inversion: Okonkwo the fire produces Nwoye the ash, as he sees it. Foreshadows Nwoye\u2019s conversion and rejection of his father.',
  },
  {
    quote: 'If a man said yes his chi said yes also.',
    speaker: 'Narrator',
    analysis:
      'The Igbo proverb about personal destiny (chi). Achebe complicates it later - "a man could not rise beyond the destiny of his chi" - to show the limits of Okonkwo\u2019s self-determination.',
  },
  {
    quote: 'But a man could not rise beyond the destiny of his chi.',
    speaker: 'Narrator',
    analysis:
      'Rebalances the earlier proverb: the tension between agency and fate is one of the novel\u2019s central theological and narrative engines.',
  },
  {
    quote: 'The arrow flies, and finds its mark hundreds of miles away.',
    speaker: 'Narrator, describing the missionaries\u2019 language',
    analysis:
      'Achebe depicts the translated word as an instrument of colonisation - language itself becomes a weapon.',
  },
  {
    quote: 'Does the white man understand our custom about land?',
    speaker: 'Okonkwo',
    analysis:
      'A question about incommensurable legal systems. Achebe dramatises how colonial courts erase indigenous structures of meaning.',
  },
  {
    quote: 'He knew that Umuofia would not go to war.',
    speaker: 'Narrator',
    analysis:
      'The moment Okonkwo realises his community will not rise with him. The realisation precedes his suicide.',
  },
  {
    quote: 'It is an abomination for a man to take his own life…',
    speaker: 'Obierika',
    analysis:
      'Okonkwo\u2019s end is doubly tragic: the warrior who defined himself by clan law dies outside it.',
  },
  {
    quote: 'The Pacification of the Primitive Tribes of the Lower Niger.',
    speaker: 'The District Commissioner\u2019s book title',
    analysis:
      'The novel\u2019s devastating final move: Okonkwo\u2019s life reduced to a paragraph inside a colonial textbook. Achebe\u2019s own novel is, in part, a rebuttal.',
  },
]

export default async function ThingsFallApartHubPage() {
  await requireIgcseBoard(['edexcel-igcse'])

  return (
    <div className="space-y-10 pb-16">
      <CourseJsonLd
        name="Things Fall Apart - Edexcel IGCSE Literature Study Guide"
        description="In-depth study guide for Things Fall Apart for Edexcel IGCSE English Literature, covering plot, characters, themes, key quotations, context and exam essay plans."
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'IGCSE', url: 'https://theenglishhub.app/igcse' },
          { name: 'Edexcel IGCSE Literature', url: 'https://theenglishhub.app/igcse/edexcel' },
          { name: 'Prose', url: 'https://theenglishhub.app/igcse/edexcel/prose' },
          {
            name: 'Things Fall Apart',
            url: 'https://theenglishhub.app/igcse/edexcel/prose/things-fall-apart',
          },
        ]}
      />
      <div>
        <Button variant="ghost" size="sm" render={<Link href="/igcse/edexcel/prose" />}>
          <ArrowLeft className="size-3.5" />
          Back to Edexcel prose
        </Button>
      </div>

      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-primary/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="relative">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge className="border-primary/20 bg-primary/10 text-primary">
              <Sparkles className="mr-1 size-3" />
              Edexcel IGCSE Literature
            </Badge>
            <Badge variant="secondary">Modern prose</Badge>
          </div>
          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            Things Fall Apart
          </h1>
          <p className="mt-1 text-body-sm text-muted-foreground">Chinua Achebe · 1958</p>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
            Achebe’s landmark novel traces the rise of the Umuofia warrior Okonkwo and the arrival
            of British missionaries and colonial administration in late nineteenth-century Igboland.
          </p>
        </div>
      </section>

      <StudyTools textName="Things Fall Apart" textType="novel" examBoard="Edexcel" />

      <section className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-4 sm:p-5">
        <div className="flex gap-3">
          <Info className="mt-0.5 size-5 shrink-0 text-amber-600 dark:text-clay-600" />
          <div className="space-y-1">
            <h2 className="text-body-sm font-semibold text-foreground">
              Key quotations only - read the full text
            </h2>
            <p className="text-body-xs text-muted-foreground leading-relaxed">
              Things Fall Apart is in copyright. This guide uses short extracts for fair-dealing
              study and criticism. Read the full novel alongside these notes.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="mb-5 flex items-center gap-3">
          <BookOpen className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">Plot overview</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {plotBeats.map((beat) => (
            <Card key={beat.part}>
              <CardHeader className="pb-2">
                <CardTitle className="text-heading-sm font-heading">{beat.part}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-body-sm leading-relaxed text-muted-foreground">{beat.summary}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <div className="mb-5 flex items-center gap-3">
          <Feather className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">Characters at a glance</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {characters.map((c) => (
            <div key={c.name} className="rounded-xl border border-border/60 bg-card p-5">
              <h3 className="text-body-md font-semibold text-foreground">{c.name}</h3>
              <p className="mt-2 text-body-sm leading-relaxed text-muted-foreground">{c.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="mb-5 flex items-center gap-3">
          <Sparkles className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">Deep dive</h2>
        </div>
        <Card className="max-w-md">
          <CardHeader className="pb-3">
            <CardTitle className="text-heading-md font-heading leading-tight">Themes</CardTitle>
            <CardDescription className="text-body-sm">
              Colonialism, masculinity, tradition vs change, fate and language.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button
              variant="outline"
              size="sm"
              className="w-full"
              render={<Link href="/igcse/edexcel/prose/things-fall-apart/themes" />}
            >
              Open themes
              <ArrowRight className="size-3.5" />
            </Button>
          </CardContent>
        </Card>
      </section>

      <section>
        <div className="mb-5 flex items-center gap-3">
          <Quote className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">Key quotations</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {keyQuotations.map((q, i) => (
            <div key={i} className="rounded-xl border border-border/60 bg-card p-5">
              <blockquote className="border-l-2 border-primary/40 pl-3 text-body-md italic text-foreground">
                “{q.quote}”
              </blockquote>
              <p className="mt-2 text-body-xs font-medium text-primary">- {q.speaker}</p>
              <p className="mt-2 text-body-sm leading-relaxed text-muted-foreground">
                {q.analysis}
              </p>
            </div>
          ))}
        </div>
      </section>

      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
        Short quotations reproduced under the fair dealing provision of the CDPA 1988 for criticism
        and review. Full text available from your school or local library.
      </p>
    </div>
  )
}
