'use client'

import Link from 'next/link'
import { ArrowLeft, Users, Sparkles, Info } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import StudyTools from '@/components/study/StudyTools'

const characters = [
  {
    name: 'Okonkwo',
    role: 'Protagonist and tragic hero',
    analysis:
      'Okonkwo is the most powerful warrior in Umuofia, a man who has built his reputation through sheer will against the memory of his lazy, debtor father Unoka. His entire identity is a reaction formation: he equates feeling with weakness, gentleness with effeminacy, and silence with control. Achebe presents this rigidity as both culturally legible \u2014 Umuofia rewards exactly the qualities Okonkwo embodies \u2014 and personally destructive. He kills Ikemefuna against Ezeudu\u2019s advice, beats his wives during sacred weeks, and alienates his son Nwoye. His seven-year exile in Mbanta forces a confrontation with the feminine principle he has suppressed, but he returns unchanged. His final act \u2014 killing the court messenger and then hanging himself \u2014 is simultaneously heroic resistance and proof that his inflexibility has nowhere left to go.',
    quote:
      '\u201cHis whole life was dominated by fear, the fear of failure and of weakness.\u201d',
  },
  {
    name: 'Obierika',
    role: 'Okonkwo\u2019s closest friend',
    analysis:
      'Obierika is Okonkwo\u2019s intellectual counterpart: thoughtful, questioning, and willing to voice doubts about Igbo customs. He refuses to join the expedition to kill Ikemefuna. He questions the exile system. He visits Okonkwo in Mbanta and reports on the missionaries\u2019 progress. Achebe uses Obierika to show that critical thinking about tradition is not a colonial import \u2014 it existed within Igbo culture before the Europeans arrived. His final speech to the District Commissioner, "That man was one of the greatest men in Umuofia", is the novel\u2019s moral verdict.',
    quote:
      '\u201cHe has put a knife on the things that held us together and we have fallen apart.\u201d',
  },
  {
    name: 'Nwoye',
    role: 'Okonkwo\u2019s eldest son',
    analysis:
      'Nwoye is sensitive, drawn to his mother\u2019s stories rather than his father\u2019s war tales, and deeply traumatised by the killing of Ikemefuna, whom he loved as a brother. His conversion to Christianity is presented partly as a search for moral relief: the hymn about brothers sitting in darkness speaks to the grief and guilt he cannot express at home. Achebe does not reduce Nwoye\u2019s conversion to weakness or betrayal; it is also an act of survival against a father who considers him worthless.',
    quote:
      '\u201cIt was the poetry of the new religion, something felt in the marrow.\u201d',
  },
  {
    name: 'Ikemefuna',
    role: 'Boy given to Umuofia as settlement',
    analysis:
      'Ikemefuna lives with Okonkwo\u2019s family for three years and becomes, in effect, Okonkwo\u2019s ideal son: brave, hardworking, and a good influence on Nwoye. His killing \u2014 ordered by the Oracle, carried out by Okonkwo personally \u2014 is the novel\u2019s moral turning point. Achebe makes the reader love Ikemefuna precisely so that his death will be felt as an injustice, not merely a ritual necessity. His final cry, "My father, they have killed me!", implicates Okonkwo irreversibly.',
    quote:
      '\u201cMy father, they have killed me!\u201d',
  },
  {
    name: 'Ezinma',
    role: 'Okonkwo\u2019s favourite daughter',
    analysis:
      'Ezinma is the child of Okonkwo and Ekwefi. She is bold, intelligent, and the only person who can argue with Okonkwo. He repeatedly wishes she had been a boy \u2014 a remark that reveals both his genuine respect for her and his inability to value feminine qualities as such. Ezinma\u2019s survival (she was believed to be an ogbanje, a spirit child destined to die young) makes her precious. She represents the suppressed possibility of a different relationship between strength and gender.',
    quote:
      '\u201cShe should have been a boy.\u201d \u2014 Okonkwo',
  },
  {
    name: 'Ekwefi',
    role: 'Okonkwo\u2019s second wife',
    analysis:
      'Ekwefi was once the village beauty who left her first husband for Okonkwo. Her life has been defined by the loss of nine children in infancy before Ezinma survived. Achebe gives her the novel\u2019s most tender chapter: the night journey following Chielo, the priestess, who has taken Ezinma to the Oracle\u2019s cave. Ekwefi\u2019s devotion is fierce, frightened and entirely human.',
    quote:
      '\u201cShe had suffered a good deal in her life.\u201d',
  },
  {
    name: 'Unoka',
    role: 'Okonkwo\u2019s father',
    analysis:
      'Unoka is dead before the novel begins but alive in every decision Okonkwo makes. He was a musician, a debtor, and a man who loved conversation and palm-wine but could not feed his family. Achebe presents him with gentle humour \u2014 his response to a creditor who shows him his debt-sticks is genuinely funny \u2014 but refuses to sentimentalise him. Unoka\u2019s failure is real, and its shadow drives the novel\u2019s tragedy.',
    quote:
      '\u201cHe was lazy and improvident and was quite incapable of thinking about tomorrow.\u201d',
  },
  {
    name: 'Mr Brown',
    role: 'First Christian missionary',
    analysis:
      'Mr Brown is patient, diplomatic, and genuinely curious about Igbo theology. His conversations with Akunna are among the novel\u2019s most intellectually generous scenes. He builds a school and a hospital and wins converts through persuasion rather than force. But Achebe is careful to show that Mr Brown\u2019s gentleness is the first stage of a process that will end in courts, soldiers, and the destruction of the clan\u2019s autonomy.',
    quote:
      '\u201cA frontal attack on it would not succeed.\u201d',
  },
  {
    name: 'Reverend James Smith',
    role: 'Second missionary',
    analysis:
      'Smith replaces Mr Brown and represents the aggressive, intolerant face of Christianity. He views the world in black and white, encourages zealotry, and provokes the conflict that leads to the destruction of the church and the colonial crackdown. Achebe pairs the two missionaries to show that colonialism is a system, not a personality: Brown\u2019s tolerance and Smith\u2019s intolerance produce the same result.',
    quote:
      '\u201cHe saw things as black and white. And black was evil.\u201d',
  },
  {
    name: 'The District Commissioner',
    role: 'Colonial administrator',
    analysis:
      'The District Commissioner appears only in the final pages but delivers the novel\u2019s most devastating irony. Looking at Okonkwo\u2019s body, he considers that the man\u2019s story might merit "a reasonable paragraph" in his planned book, The Pacification of the Primitive Tribes of the Lower Niger. Achebe\u2019s entire novel is the answer to that paragraph \u2014 a complete, complex, dignified account of the world the Commissioner can only footnote.',
    quote:
      '\u201cOne could almost write a whole chapter on him. Perhaps not a whole chapter but a reasonable paragraph.\u201d',
  },
]

export default function ThingsFallApartCharactersPage() {
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

      <StudyTools
        textName="Things Fall Apart"
        textType="novel"
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
            Things Fall Apart: Characters
          </h1>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
            Character profiles for Achebe&rsquo;s novel &mdash; Okonkwo,
            Obierika, Nwoye, Ikemefuna, Ezinma and the missionaries.
          </p>
        </div>
      </section>

      <section className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-4 sm:p-5">
        <div className="flex gap-3">
          <Info className="mt-0.5 size-5 shrink-0 text-amber-600 dark:text-clay-600" />
          <div className="space-y-1">
            <h2 className="text-body-sm font-semibold text-foreground">
              Key quotations only &mdash; read the full text
            </h2>
            <p className="text-body-xs text-muted-foreground leading-relaxed">
              Short extracts are included under fair dealing for study and
              criticism.
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
        Things Fall Apart &copy; The Estate of Chinua Achebe. Short quotations
        reproduced under the fair dealing provision of the CDPA 1988 for
        criticism and review.
      </p>
    </div>
  )
}
