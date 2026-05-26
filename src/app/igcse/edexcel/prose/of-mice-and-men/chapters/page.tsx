import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, BookOpen, Sparkles, Info, Quote, Feather } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { requireIgcseBoard } from '@/app/igcse/_lib/guard'

import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
export const metadata: Metadata = {
  openGraph: {
    title: 'Of Mice and Men Chapter Analysis - Edexcel IGCSE Literature',
    description:
      'Chapter-by-chapter analysis of Steinbeck\u2019s Of Mice and Men for Edexcel IGCSE Literature: summaries, key events, character development, key quotes and language techniques.',
  },
  title: 'Of Mice and Men Chapter Analysis - Edexcel IGCSE Literature',
  description:
    'Chapter-by-chapter analysis of Steinbeck\u2019s Of Mice and Men for Edexcel IGCSE Literature: summaries, key events, character development, key quotes and language techniques.',
  alternates: {
    canonical: 'https://theenglishhub.app/igcse/edexcel/prose/of-mice-and-men/chapters',
  },
}

const chapters = [
  {
    number: 1,
    title: 'The pool by the Salinas River',
    summary:
      'George and Lennie camp by a pool on the Salinas River the night before starting work at a Californian ranch. George confiscates a dead mouse from Lennie, rehearses him on what to say to the boss, and retells their shared dream of owning "a little place" with rabbits. Steinbeck establishes the central relationship, the Dream, and Lennie\u2019s dangerous fixation on soft things.',
    keyEvents: [
      'George and Lennie arrive at the pool after leaving Weed',
      'Lennie hides a dead mouse; George takes it away',
      'George tells the dream of the farm for the first time',
      'George tells Lennie to return to this pool if anything goes wrong',
    ],
    characterDevelopment:
      'George is established as protector, cynic and storyteller. Lennie\u2019s cognitive disability and love of soft things are introduced alongside his enormous physical strength. Their mutual dependence is ritualised through the dream speech.',
    quotes: [
      {
        text: 'Guys like us, that work on ranches, are the loneliest guys in the world.',
        technique: 'Superlative and refrain establish the novel\u2019s central theme of loneliness',
      },
      {
        text: 'I got you to look after me, and you got me to look after you.',
        technique: 'Parallel structure creates a ritual of reciprocal care',
      },
      {
        text: 'Lennie dabbled his big paw in the water.',
        technique: 'Animal imagery ("paw") dehumanises Lennie while keeping him sympathetic',
      },
    ],
  },
  {
    number: 2,
    title: 'Arrival at the ranch',
    summary:
      'George and Lennie arrive at the bunkhouse and meet the boss, his aggressive son Curley, Curley\u2019s flirtatious wife, the ageing swamper Candy, and the skilled mule driver Slim. Steinbeck introduces the ranch\u2019s power dynamics and foreshadows multiple conflicts.',
    keyEvents: [
      'The boss is suspicious about George speaking for Lennie',
      'Curley picks a fight immediately, sizing up Lennie',
      'Curley\u2019s wife appears in the bunkhouse doorway',
      'Slim is introduced as the ranch\u2019s moral authority',
    ],
    characterDevelopment:
      'Curley is established as a physical and social threat. Curley\u2019s wife is introduced through her body and the men\u2019s gaze, unnamed throughout. Slim is marked as a figure of quiet authority.',
    quotes: [
      {
        text: 'He\u2019s alla time picking scraps with big guys.',
        technique: 'Candy\u2019s exposition establishes Curley\u2019s compensatory aggression',
      },
      {
        text: 'She had full, rouged lips and wide-spaced eyes, heavily made up.',
        technique: 'Visual description filters her through the male gaze, denying interiority',
      },
      {
        text: 'There was a gravity in his manner and a quiet so profound that all talk stopped.',
        technique: 'Slim\u2019s introduction uses gravitas language to mark him as moral authority',
      },
    ],
  },
  {
    number: 3,
    title: 'The bunkhouse - evening',
    summary:
      'Slim gives Lennie a puppy. Carlson pressures Candy to let him shoot his old, blind dog; Candy agrees and immediately regrets it. George confides in Slim about Weed. Candy overhears the dream and offers his savings. The dream briefly feels possible. Curley attacks Lennie, who crushes his hand.',
    keyEvents: [
      'Carlson shoots Candy\u2019s old dog',
      'George tells Slim about the incident in Weed',
      'Candy buys into the dream with his life savings',
      'Lennie crushes Curley\u2019s hand in self-defence',
    ],
    characterDevelopment:
      'Candy\u2019s dog scene foreshadows Lennie\u2019s death - "I ought to of shot that dog myself" is the novel\u2019s structural key. The dream becomes financially real for one chapter only. Lennie\u2019s uncontrollable strength is dramatised through the Curley fight.',
    quotes: [
      {
        text: 'I ought to of shot that dog myself, George.',
        technique: 'Foreshadowing: Candy\u2019s regret directly prepares George\u2019s final act',
      },
      {
        text: 'Le\u2019s get that place now.',
        technique:
          'Candy\u2019s urgency marks the dream\u2019s peak - and the start of its collapse',
      },
      {
        text: 'Lennie covered his face with huge paws and bleated with terror.',
        technique: 'Animal imagery ("paws", "bleated") sustains sympathy while showing danger',
      },
    ],
  },
  {
    number: 4,
    title: 'Crooks\u2019s room',
    summary:
      'Lennie wanders into Crooks\u2019s segregated room in the harness shed. Crooks, initially hostile, opens up about his loneliness and briefly believes in the dream. Curley\u2019s wife arrives and threatens Crooks with lynching. He withdraws his interest in the dream and tells Candy to forget he ever wanted to join.',
    keyEvents: [
      'Lennie enters Crooks\u2019s room uninvited',
      'Crooks describes the pain of racial isolation',
      'Crooks briefly believes in the dream',
      'Curley\u2019s wife threatens to have Crooks lynched',
    ],
    characterDevelopment:
      'Crooks is the novella\u2019s most isolated figure: segregated by race, excluded from community. His momentary belief and its immediate destruction is the novel\u2019s most painful narrative beat. Curley\u2019s wife is revealed as both lonely and capable of racial cruelty.',
    quotes: [
      {
        text: 'A guy needs somebody - to be near him. A guy goes nuts if he ain\u2019t got nobody.',
        technique: 'Crooks diagnoses loneliness as pathology, not sentiment',
      },
      {
        text: 'You got no rights comin\u2019 in a colored man\u2019s room.',
        technique: 'Crooks asserts boundaries that segregation itself imposed on him',
      },
      {
        text: 'I could get you strung up on a tree so easy it ain\u2019t even funny.',
        technique: 'Curley\u2019s wife weaponises racial violence to reclaim power',
      },
    ],
  },
  {
    number: 5,
    title: 'The barn',
    summary:
      'Alone in the barn on Sunday afternoon, Lennie accidentally kills his puppy by petting it too hard. Curley\u2019s wife finds him and tells him about her abandoned Hollywood dream. She lets him stroke her hair; he panics when she screams and breaks her neck. Candy discovers the body and alerts George.',
    keyEvents: [
      'Lennie kills his puppy by accident',
      'Curley\u2019s wife reveals her lost dream',
      'Lennie accidentally kills Curley\u2019s wife',
      'Candy and George find the body and know the dream is dead',
    ],
    characterDevelopment:
      'Curley\u2019s wife is finally humanised through her monologue and her appearance in death ("very pretty and simple, and her face was sweet and young"). Lennie\u2019s inability to modulate strength reaches its fatal conclusion. The dream dies the moment Candy sees the body.',
    quotes: [
      {
        text: 'I coulda made somethin\u2019 of myself. Maybe I will yet.',
        technique: 'Her Hollywood dream is a gendered variant of the same American Dream',
      },
      {
        text: 'She was very pretty and simple, and her face was sweet and young.',
        technique: 'Death restores the humanity the narrative withheld in life',
      },
      {
        text: 'I know now. I know now.',
        technique:
          'George\u2019s repeated phrase signals the end of hope in flat, devastated register',
      },
    ],
  },
  {
    number: 6,
    title: 'The pool - the ending',
    summary:
      'Lennie returns to the pool as George instructed. The men form a hunting party. George finds Lennie first, retells the dream one last time while Lennie faces the river, and shoots him in the back of the head with Carlson\u2019s Luger. Slim understands; Carlson does not.',
    keyEvents: [
      'Lennie returns to the pool from Chapter 1',
      'George retells the dream for the last time',
      'George shoots Lennie with Carlson\u2019s gun',
      'Carlson\u2019s final line: "Now what the hell ya suppose is eatin\u2019 them two guys?"',
    ],
    characterDevelopment:
      'George\u2019s mercy killing echoes Carlson\u2019s shooting of Candy\u2019s dog but is qualitatively different: it is an act of love performed in agony. Slim\u2019s quiet understanding validates George\u2019s choice. Carlson\u2019s incomprehension seals the novella\u2019s bleak verdict on a world that cannot recognise friendship.',
    quotes: [
      {
        text: 'Tell me - like you done before. Tell how it\u2019s gonna be.',
        technique: 'The dream is requested as a bedtime story; repetition intensifies the tragedy',
      },
      {
        text: 'I ain\u2019t mad. I never been mad, an\u2019 I ain\u2019t now.',
        technique: 'George\u2019s last words to Lennie are gentle, conversational, devastating',
      },
      {
        text: 'Now what the hell ya suppose is eatin\u2019 them two guys?',
        technique: 'Final line: Carlson\u2019s incomprehension condemns the world of the novella',
      },
    ],
  },
]

export default async function OmamChaptersPage() {
  await requireIgcseBoard(['edexcel-igcse'])

  return (
    <div className="space-y-10 pb-16">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'IGCSE', url: 'https://theenglishhub.app/igcse' },
          { name: 'Edexcel IGCSE Literature', url: 'https://theenglishhub.app/igcse/edexcel' },
          { name: 'Prose', url: 'https://theenglishhub.app/igcse/edexcel/prose' },
          {
            name: 'Of Mice and Men',
            url: 'https://theenglishhub.app/igcse/edexcel/prose/of-mice-and-men',
          },
          {
            name: 'Chapter-by-Chapter Analysis',
            url: 'https://theenglishhub.app/igcse/edexcel/prose/of-mice-and-men/chapters',
          },
        ]}
      />
      <div>
        <Button
          variant="ghost"
          size="sm"
          render={<Link href="/igcse/edexcel/prose/of-mice-and-men" />}
        >
          <ArrowLeft className="size-3.5" />
          Back to Of Mice and Men
        </Button>
      </div>

      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-primary/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="relative">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge className="border-primary/20 bg-primary/10 text-primary">
              <Sparkles className="mr-1 size-3" />
              Edexcel IGCSE Literature
            </Badge>
            <Badge variant="secondary">Chapter analysis</Badge>
          </div>
          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            Of Mice and Men: Chapters
          </h1>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
            All six chapters (sections) analysed with summaries, key events, character development
            and three key quotations with language technique notes for each.
          </p>
        </div>
      </section>

      <section className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-4 sm:p-5">
        <div className="flex gap-3">
          <Info className="mt-0.5 size-5 shrink-0 text-amber-600 dark:text-clay-600" />
          <div className="space-y-1">
            <h2 className="text-body-sm font-semibold text-foreground">
              Key quotations only - read the full text
            </h2>
            <p className="text-body-xs text-muted-foreground leading-relaxed">
              Short extracts are included under fair dealing (CDPA 1988) for study and criticism.
              Read the full novella alongside these notes.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="mb-5 flex items-center gap-3">
          <BookOpen className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">
            Chapter-by-chapter analysis
          </h2>
        </div>
        <div className="space-y-6">
          {chapters.map((ch) => (
            <article key={ch.number} className="rounded-xl border border-border/60 bg-card p-6">
              <div className="flex items-start gap-3 mb-4">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-body-sm font-semibold text-primary">
                  {ch.number}
                </span>
                <div>
                  <h3 className="text-heading-md font-heading text-foreground">
                    Chapter {ch.number}: {ch.title}
                  </h3>
                </div>
              </div>

              <p className="text-body-sm leading-relaxed text-muted-foreground">{ch.summary}</p>

              <div className="mt-4">
                <h4 className="text-body-xs font-semibold uppercase tracking-wide text-foreground">
                  Key events
                </h4>
                <ul className="mt-1.5 space-y-1">
                  {ch.keyEvents.map((evt, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-body-sm text-muted-foreground"
                    >
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary/40" />
                      {evt}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4">
                <h4 className="text-body-xs font-semibold uppercase tracking-wide text-foreground">
                  Character development
                </h4>
                <p className="mt-1.5 text-body-sm leading-relaxed text-muted-foreground">
                  {ch.characterDevelopment}
                </p>
              </div>

              <div className="mt-4">
                <h4 className="text-body-xs font-semibold uppercase tracking-wide text-foreground flex items-center gap-1.5">
                  <Quote className="size-3.5" />
                  Key quotes
                </h4>
                <div className="mt-2 space-y-3">
                  {ch.quotes.map((q, i) => (
                    <div key={i}>
                      <blockquote className="border-l-2 border-primary/40 pl-3 text-body-sm italic text-foreground">
                        &ldquo;{q.text}&rdquo;
                      </blockquote>
                      <p className="mt-1 pl-3 text-body-xs text-muted-foreground">
                        <Feather className="mr-1 inline size-3 text-primary/60" />
                        {q.technique}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
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
