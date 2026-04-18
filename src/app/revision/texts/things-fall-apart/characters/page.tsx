import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Quote,
  Sparkles,
  Users,
} from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { getServerBoard } from '@/lib/board/get-server-board'

export const metadata: Metadata = {
  title: 'Things Fall Apart — Character Analysis | The English Hub',
  description:
    'In-depth character analysis for Things Fall Apart by Chinua Achebe: Okonkwo, Nwoye, Ikemefuna, Obierika, Ezinma, Mr Brown and Reverend Smith.',
  alternates: {
    canonical:
      'https://theenglishhub.app/revision/texts/things-fall-apart/characters',
  },
}

/* ── Character data ────────────────────────────────────────────────────── */

type CharacterProfile = {
  name: string
  role: string
  overview: string
  arc: string
  keyQuotes: { text: string; context: string; analysis: string }[]
  examTip: string
}

const CHARACTERS: CharacterProfile[] = [
  {
    name: 'Okonkwo',
    role: 'Proud warrior and tragic hero',
    overview:
      'Okonkwo is the novel\'s protagonist: a man of enormous physical strength, fierce ambition and a terror of weakness that governs every choice he makes. His father Unoka was a gentle, debt-ridden flute player whom the clan regarded with contempt, and Okonkwo has built his entire life as a repudiation of everything Unoka represented. Achebe shows that this fear of weakness is itself a form of weakness — a rigidity that prevents Okonkwo from adapting when his world changes.',
    arc: 'Okonkwo rises from poverty to become one of the most respected men in Umuofia. His killing of Ikemefuna — against the advice of his elders — marks the beginning of his decline. Exiled for accidentally killing a clansman, he watches from Mbanta as missionaries and colonial administrators dismantle the culture he lived for. When he returns, he kills a court messenger in a doomed act of resistance, realises the clan will not fight, and hangs himself. His suicide is the final, terrible expression of his refusal to submit.',
    keyQuotes: [
      {
        text: '"He was afraid of being thought weak."',
        context: 'Chapter 2 — narrator on Okonkwo',
        analysis:
          'Achebe identifies fear as the engine of Okonkwo\'s character. His strength is not confidence but overcompensation — a distinction that makes his tragedy feel inevitable.',
      },
      {
        text: '"When did you become a shivering old woman?"',
        context: 'Chapter 7 — Okonkwo to himself after Ikemefuna\'s death',
        analysis:
          'Okonkwo suppresses his grief by gendering it as weakness. Achebe shows how toxic masculinity turns legitimate emotion into shame.',
      },
      {
        text: '"He has put a knife on the things that held us together and we have fallen apart."',
        context: 'Chapter 20 — Okonkwo on the missionaries',
        analysis:
          'Okonkwo names the cultural destruction, echoing the novel\'s title. Achebe gives him the diagnosis but not the cure — Okonkwo can see the problem but has no tools except violence.',
      },
    ],
    examTip:
      'Avoid reducing Okonkwo to a simple victim of colonialism. Achebe makes clear that his rigidity is a flaw that predates the missionaries. Examiners reward candidates who discuss him as a man destroyed by two forces simultaneously: his own inflexibility and the colonial invasion.',
  },
  {
    name: 'Nwoye',
    role: 'Okonkwo\'s eldest son — sensitive, alienated, convert',
    overview:
      'Nwoye is everything Okonkwo fears: sensitive, questioning and drawn to stories rather than wrestling. His gentleness reminds Okonkwo of Unoka, and the father\'s contempt pushes the son further from Igbo tradition. Achebe uses Nwoye to show that colonialism succeeds partly by offering refuge to those whom their own culture has failed.',
    arc: 'Nwoye begins as a quiet boy bullied by his father. The killing of Ikemefuna — his closest companion, murdered with Okonkwo\'s participation — breaks something in him. When the missionaries arrive, their hymns and their message of universal love speak to the part of Nwoye that Igbo culture could not accommodate. He converts, takes the name Isaac, and is disowned by Okonkwo. Achebe presents his conversion as both liberation and loss.',
    keyQuotes: [
      {
        text: '"He felt a relief within as the hymn poured into his parched soul."',
        context: 'Chapter 16 — Nwoye hearing the missionaries',
        analysis:
          'Achebe uses sensory language to show that Nwoye\'s conversion is emotional, not intellectual. Christianity fills a void that his father\'s world created.',
      },
      {
        text: '"Living fire begets cold, impotent ash."',
        context: 'Chapter 17 — Okonkwo on Nwoye',
        analysis:
          'Okonkwo\'s bitter judgment of his son. Achebe shows how a father\'s rigidity creates the very outcome he most fears — the fire consumes itself.',
      },
    ],
    examTip:
      'Discuss Nwoye as Achebe\'s answer to the question of why colonialism succeeds. Examiners value candidates who show that Nwoye\'s conversion is not simple weakness but a rational response to a father and a culture that rejected his nature.',
  },
  {
    name: 'Ikemefuna',
    role: 'Adopted ward — the boy who became a son',
    overview:
      'Ikemefuna is given to Umuofia as reparation for a killing and lives with Okonkwo\'s family for three years. He becomes the son Okonkwo wishes Nwoye were: brave, cheerful and eager to learn. His presence improves Nwoye, who blossoms under his friendship. Achebe makes the reader love Ikemefuna specifically to make his death unbearable.',
    arc: 'Ikemefuna\'s arc is brief and devastating. He arrives frightened, adapts beautifully, calls Okonkwo "father" and is then led into the forest to be killed on the Oracle\'s orders. Okonkwo participates in the killing to avoid appearing weak — the act that defines his tragedy. Ikemefuna\'s death is the moral hinge of the novel: it exposes the human cost of both tradition and toxic masculinity.',
    keyQuotes: [
      {
        text: '"My father, they have killed me!"',
        context: 'Chapter 7 — Ikemefuna\'s last words',
        analysis:
          'Ikemefuna calls Okonkwo "father" as the blow falls. Achebe concentrates the novel\'s moral horror in five words — the child trusts the man who kills him.',
      },
      {
        text: '"He could hardly imagine that Okonkwo was not his real father."',
        context: 'Chapter 4 — narrator on Ikemefuna',
        analysis:
          'Achebe establishes the depth of the bond to make its destruction more devastating. The adoption is genuine on both sides, which makes the killing an act of self-mutilation.',
      },
    ],
    examTip:
      'Ikemefuna is a minor character with major structural importance. Examiners reward candidates who discuss his death as the event that fractures Okonkwo\'s family — it alienates Nwoye, it haunts Okonkwo, and it demonstrates that tradition can demand cruelty.',
  },
  {
    name: 'Obierika',
    role: 'Okonkwo\'s closest friend — thoughtful, questioning',
    overview:
      'Obierika is everything Okonkwo is not: reflective, gentle and willing to question tradition without rejecting it. He refuses to participate in Ikemefuna\'s killing not out of cowardice but out of moral conviction. Achebe uses him as a voice of internal critique, showing that Igbo culture contains its own dissenters and reformers. He is the character closest to the reader\'s perspective.',
    arc: 'Obierika maintains his friendship with Okonkwo throughout, visiting him in exile, selling his yams and bringing him news. He questions traditions he finds unjust — why must twins be abandoned? why must a man be exiled for an accident? — but he does so within the culture, not against it. His final words — accusing the District Commissioner of driving Okonkwo to suicide — reclaim Okonkwo\'s death from the colonial record.',
    keyQuotes: [
      {
        text: '"That man was one of the greatest men in Umuofia. You drove him to kill himself."',
        context: 'Chapter 25 — to the District Commissioner',
        analysis:
          'Obierika delivers the novel\'s moral verdict. Achebe uses him to insist that Okonkwo\'s life matters on its own terms, not as a footnote in a colonial report.',
      },
      {
        text: '"The white man is very clever... Now he has won our brothers, and our clan can no longer act like one."',
        context: 'Chapter 20 — to Okonkwo',
        analysis:
          'Obierika analyses the colonial strategy with precision. Achebe shows that understanding the threat is not the same as being able to stop it.',
      },
    ],
    examTip:
      'Use Obierika to counter the argument that Igbo culture was monolithic or unquestioning. Examiners reward candidates who show that Achebe includes internal critics like Obierika to demonstrate that the culture was capable of change from within — change that colonialism foreclosed.',
  },
  {
    name: 'Ezinma',
    role: 'Okonkwo\'s favourite daughter — bold, intelligent',
    overview:
      'Ezinma is the daughter of Okonkwo\'s second wife, Ekwefi, and the only one of Ekwefi\'s ten children to survive infancy. She is bold, perceptive and the only person who can challenge Okonkwo without being crushed. Achebe uses her to show the rigidity of gender roles in Igbo culture: Okonkwo repeatedly wishes she had been born a boy, revealing both his love for her and his inability to value femininity.',
    arc: 'Ezinma grows from a sickly child — feared to be an ogbanje, a spirit child who dies and returns to torment its mother — into a confident young woman. Her survival and strength parallel the resilience of Igbo culture itself. She is loyal to Okonkwo even in exile and refuses to marry in Mbanta, waiting until the family returns to Umuofia. Achebe uses her to show what Igbo womanhood could be if freed from patriarchal constraints.',
    keyQuotes: [
      {
        text: '"She should have been a boy."',
        context: 'Chapter 8 — Okonkwo on Ezinma',
        analysis:
          'Okonkwo\'s highest compliment reveals his deepest limitation. Achebe shows that he can only value strength when it looks masculine.',
      },
      {
        text: '"She understood things."',
        context: 'Chapter 11 — narrator on Ezinma',
        analysis:
          'Achebe presents Ezinma\'s intelligence as intuitive and emotional. She sees what Okonkwo refuses to see, but her gender denies her the authority to act on it.',
      },
    ],
    examTip:
      'Discuss Ezinma in relation to Achebe\'s presentation of gender. Examiners value candidates who show how Okonkwo\'s wish that she were a boy exposes both his love and the patriarchal structure that limits how he can express it.',
  },
  {
    name: 'Mr Brown',
    role: 'First missionary — patient, respectful, strategic',
    overview:
      'Mr Brown is the first Christian missionary to arrive in Umuofia. He is patient, learns about Igbo culture and builds relationships with the elders. He establishes a school and a hospital, winning converts through practical benefits rather than confrontation. Achebe presents him as genuinely well-intentioned but also as the opening wedge of a system that will become far less benign.',
    arc: 'Mr Brown\'s time in Umuofia is marked by relative peace. He discourages zealotry among his converts and engages in theological debate with the clan. But his departure — forced by illness — removes the restraining influence. Achebe uses his replacement by Reverend Smith to show that colonialism\'s initial gentleness is strategic, not permanent.',
    keyQuotes: [
      {
        text: '"A frontal attack on it would not succeed."',
        context: 'Chapter 21 — Mr Brown\'s strategy',
        analysis:
          'Mr Brown\'s patient approach is both admirable and calculating. Achebe shows that the missionary strategy of incremental change is more effective — and therefore more dangerous — than outright confrontation.',
      },
    ],
    examTip:
      'Do not present Mr Brown as simply "good." Examiners reward candidates who discuss how Achebe uses the contrast between Brown and Smith to show that colonialism operates through a spectrum of approaches, all of which serve the same end.',
  },
  {
    name: 'Reverend James Smith',
    role: 'Second missionary — zealous, confrontational',
    overview:
      'Reverend Smith replaces Mr Brown and brings a fundamentalist approach that provokes direct conflict with the clan. He sees the world in black and white, condemns Igbo religion without understanding it and encourages the most extreme converts. Achebe uses him to show how colonialism escalates: the patient opening is followed by aggressive consolidation.',
    arc: 'Smith arrives and immediately undoes Brown\'s careful diplomacy. He encourages Enoch to unmask an egwugwu — a profound sacrilege — which provokes the clan to burn his church. This in turn gives the District Commissioner a pretext to arrest and humiliate the clan elders. Achebe shows how Smith\'s zealotry creates the very conflict that justifies colonial intervention.',
    keyQuotes: [
      {
        text: '"He saw things as black and white. And black was evil."',
        context: 'Chapter 22 — narrator on Reverend Smith',
        analysis:
          'Achebe uses the colour metaphor to expose the racism embedded in Smith\'s theology. "Black" is both literal and figurative — Smith cannot see Igbo culture as anything other than darkness.',
      },
    ],
    examTip:
      'Compare Mr Brown and Reverend Smith explicitly. Examiners reward candidates who show how Achebe uses the two missionaries to present colonialism as a process with stages: initial patience followed by aggressive imposition.',
  },
]

/* ── Page ───────────────────────────────────────────────────────────────── */

export default async function ThingsFallApartCharactersPage() {
  const board = await getServerBoard()
  const allowedBoards = ['edexcel-igcse']
  if (board && !allowedBoards.includes(board)) {
    redirect('/revision/texts')
  }

  return (
    <div className="space-y-10 pb-16">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-emerald-500/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-emerald-500/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-violet-500/5 blur-3xl" />
        <div className="relative">
          <Button variant="ghost" size="sm" className="mb-4 -ml-2 text-muted-foreground" render={<Link href="/revision/texts/things-fall-apart" />}>
            <ArrowLeft className="size-3.5" /> Back to Things Fall Apart
          </Button>
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge variant="secondary"><BookOpen className="mr-1 size-3 text-violet-400" />Modern Text — Novel</Badge>
            <Badge variant="outline" className="text-muted-foreground"><Sparkles className="mr-1 size-3" />Edexcel IGCSE</Badge>
          </div>
          <h1 className="text-display-sm font-heading text-foreground sm:text-display">Character Analysis</h1>
          <p className="mt-2 text-body-lg text-muted-foreground">Things Fall Apart by Chinua Achebe</p>
          <p className="mt-4 max-w-2xl text-body-md text-muted-foreground">
            Deep profiles for every major character: overview, arc, key quotations and examiner tips. All quotes are 15 words or fewer.
          </p>
        </div>
      </section>

      {/* Characters */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <Users className="size-5 text-emerald-400" />
          <h2 className="text-heading-lg font-heading text-foreground">Characters</h2>
        </div>
        <div className="space-y-6">
          {CHARACTERS.map((c) => (
            <Card key={c.name}>
              <CardHeader>
                <CardTitle className="text-heading-md font-heading">{c.name}</CardTitle>
                <CardDescription>{c.role}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-5">
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-foreground">Overview</h3>
                  <p className="text-body-sm text-muted-foreground">{c.overview}</p>
                </div>
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-foreground">Character arc</h3>
                  <p className="text-body-sm text-muted-foreground">{c.arc}</p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold text-foreground">Key quotations</h3>
                  {c.keyQuotes.map((q) => (
                    <div key={q.text} className="rounded-xl border border-border/60 bg-background/50 p-4 space-y-1.5">
                      <p className="text-body-md font-medium italic text-foreground">{q.text}</p>
                      <p className="text-caption uppercase tracking-wide text-primary">{q.context}</p>
                      <p className="text-body-sm text-muted-foreground">{q.analysis}</p>
                    </div>
                  ))}
                </div>
                <div className="rounded-xl border border-primary/20 bg-primary/5 p-4">
                  <div className="flex items-center gap-2 mb-1.5">
                    <Quote className="size-3.5 text-primary" />
                    <p className="text-xs font-semibold uppercase tracking-wide text-primary">Exam tip</p>
                  </div>
                  <p className="text-body-sm text-muted-foreground">{c.examTip}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Navigation */}
      <section className="flex flex-wrap gap-3">
        <Button variant="outline" size="sm" render={<Link href="/revision/texts/things-fall-apart/themes" />}>Themes <ArrowRight className="size-3.5" /></Button>
        <Button variant="outline" size="sm" render={<Link href="/revision/texts/things-fall-apart/key-quotes" />}>Key quotes <ArrowRight className="size-3.5" /></Button>
        <Button variant="outline" size="sm" render={<Link href="/revision/texts/things-fall-apart/context" />}>Context <ArrowRight className="size-3.5" /></Button>
      </section>

      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
        Short quotations reproduced under the fair dealing provision of the Copyright, Designs and Patents Act 1988 for criticism and review. Full text available from your school or local library.
      </p>
    </div>
  )
}
