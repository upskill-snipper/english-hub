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
  title: 'To Kill a Mockingbird — Character Analysis | The English Hub',
  description:
    'In-depth character analysis for To Kill a Mockingbird by Harper Lee: Scout, Atticus, Jem, Boo Radley, Tom Robinson, Bob Ewell, Calpurnia, Miss Maudie and Dill.',
  alternates: {
    canonical:
      'https://theenglishhub.app/revision/texts/to-kill-a-mockingbird/characters',
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
    name: 'Scout Finch (Jean Louise)',
    role: 'Narrator and young protagonist',
    overview:
      'Scout is the novel\'s narrator, a tomboy who begins as a scrappy six-year-old and ends as a nine-year-old with a far deeper understanding of her town. Her perspective combines childlike innocence with the adult Jean Louise looking back, and this double vision lets Lee critique Maycomb\'s racism without sermonising. Scout\'s outsider voice — she fights, asks awkward questions and refuses to wear dresses — makes her the ideal lens through which to expose the town\'s hypocrisy.',
    arc: 'Scout begins the novel treating Boo Radley as a game and Maycomb as a safe place. The trial of Tom Robinson strips away her innocence: she watches her father fight for justice and lose, sees her neighbours turn cruel and learns that the law and morality are not the same thing. By the final chapter, when she stands on Boo\'s porch and sees Maycomb from his perspective, she has learned Atticus\'s lesson about walking in another person\'s skin.',
    keyQuotes: [
      {
        text: '"Atticus, he was real nice."',
        context: 'Chapter 31 — on Boo Radley',
        analysis:
          'Scout\'s final line about Boo shows innocence recovered through empathy. Lee closes the novel with a child\'s simplicity that carries enormous moral weight.',
      },
      {
        text: '"I think there\'s just one kind of folks. Folks."',
        context: 'Chapter 23 — to Jem',
        analysis:
          'Scout articulates the novel\'s moral thesis in five words. Lee gives the clearest insight to a child because adults in Maycomb have been taught not to see it.',
      },
      {
        text: '"Until I feared I would lose it, I never loved to read."',
        context: 'Chapter 2 — on reading',
        analysis:
          'Establishes Scout as intellectually curious and foreshadows her larger lesson: you only understand the value of something when it is threatened.',
      },
    ],
    examTip:
      'Always discuss Scout as both child narrator and adult retrospective voice. Examiners reward candidates who analyse how Lee uses the gap between what Scout sees and what she understands to create irony and gradual revelation.',
  },
  {
    name: 'Atticus Finch',
    role: 'Lawyer, widower, moral centre',
    overview:
      'Atticus is patient, principled and quietly radical for his time and place. He teaches his children through example rather than instruction, defending Tom Robinson because it is right, not because he expects to win. Lee presents him as the novel\'s moral compass, but he is not perfect — his faith in the legal system is ultimately disappointed, and his quiet approach does not prevent the jury\'s verdict.',
    arc: 'Atticus does not undergo a dramatic transformation; instead, he remains steady while the world around him shifts. His consistency is the point: he teaches Scout and Jem that courage means doing right even when you know you will lose. His stoicism is tested by the trial, by Bob Ewell\'s threats and by the attack on his children, but he never breaks. His moral authority is what makes the verdict so devastating.',
    keyQuotes: [
      {
        text: '"You never really understand a person until you consider things from his point of view."',
        context: 'Chapter 3 — to Scout',
        analysis:
          'The novel\'s moral compass statement. Lee makes empathy the foundation of Atticus\'s teaching and the lesson Scout must learn across the entire book.',
      },
      {
        text: '"Simply because we were licked a hundred years before we started is no reason not to try."',
        context: 'Chapter 9 — on defending Tom',
        analysis:
          'Atticus\'s definition of moral courage. Lee shows that he fights not for victory but for integrity, knowing the system is rigged against him.',
      },
      {
        text: '"The one thing that doesn\'t abide by majority rule is a person\'s conscience."',
        context: 'Chapter 11 — to Scout',
        analysis:
          'Places private morality above social pressure. Lee uses Atticus to argue that justice is personal before it is political.',
      },
    ],
    examTip:
      'Avoid idealising Atticus uncritically. Examiners reward candidates who acknowledge his limitations — his faith in the system, his restraint in the face of injustice — alongside his virtues. Discuss him as Lee\'s argument for moral courage, not as a flawless hero.',
  },
  {
    name: 'Jem Finch',
    role: 'Scout\'s older brother',
    overview:
      'Jem bridges childhood and adolescence. He begins the novel as Scout\'s adventurous playmate and ends it as a young man whose trust in the adult world has been shattered. The trial hits Jem harder than it hits Scout because he is old enough to understand what the verdict means. Lee uses his disillusionment to show that the loss of innocence is not gentle — it is violent and permanent.',
    arc: 'Jem moves from boyish bravery — daring to touch the Radley house — to genuine moral courage. After the verdict, he cries openly and cannot reconcile Maycomb\'s decency with its racism. His broken arm, sustained in Bob Ewell\'s attack, becomes a physical symbol of the damage the trial inflicts on the Finch family. Lee uses Jem to show the cost of growing up in a society that fails its own values.',
    keyQuotes: [
      {
        text: '"It\'s like bein\' a caterpillar in a cocoon."',
        context: 'Chapter 22 — on Maycomb',
        analysis:
          'Jem recognises that Maycomb is trapped in its own prejudice. Lee uses the metaphor to suggest that transformation is possible but has not yet happened.',
      },
      {
        text: '"I always thought Maycomb folks were the best folks in the world."',
        context: 'Chapter 22 — after the verdict',
        analysis:
          'The verdict shatters Jem\'s belief in his community. Lee captures the precise moment when childhood trust in adult goodness collapses.',
      },
    ],
    examTip:
      'Jem is often overlooked in favour of Scout and Atticus. Examiners value candidates who discuss his loss of innocence as a parallel and contrast to Scout\'s — he loses more because he understands more.',
  },
  {
    name: 'Boo (Arthur) Radley',
    role: 'Reclusive neighbour and silent protector',
    overview:
      'Boo is imagined by the children as a monster — pale, insane, dangerous — but is gradually revealed as a shy, gentle man who watches over them from behind closed shutters. He is one of the novel\'s two "mockingbirds": an innocent harmed by the cruelty of others. His father locked him away as a teenager, and the town turned his seclusion into myth. Lee uses him to argue that the people society fears are often the people it has failed.',
    arc: 'Boo\'s arc is unusual because it happens almost entirely offstage. We learn about him through gifts in the tree, a blanket placed over Scout\'s shoulders during a fire, and finally through his rescue of the children from Bob Ewell. He appears physically only in the last two chapters, and his silence speaks louder than any dialogue. Sheriff Tate\'s refusal to expose him is the final act of empathy in the novel.',
    keyQuotes: [
      {
        text: '"Boo was our neighbour. He gave us two soap dolls, a broken watch and chain."',
        context: 'Chapter 31 — Scout reflecting',
        analysis:
          'Scout lists Boo\'s quiet gifts. Lee shows that he communicated love through small acts while the town projected horror onto him.',
      },
      {
        text: '"To drag him into the limelight would be a sin."',
        context: 'Chapter 30 — Sheriff Tate',
        analysis:
          'Tate protects Boo from public exposure, applying the mockingbird principle. Lee shows that sometimes justice means choosing silence over truth.',
      },
    ],
    examTip:
      'Link Boo to the mockingbird symbol and to Tom Robinson. Both are innocents harmed by society. Examiners reward candidates who discuss how Lee uses Boo\'s arc to complete Scout\'s moral education.',
  },
  {
    name: 'Tom Robinson',
    role: 'The accused — a Black field hand',
    overview:
      'Tom is decent, gentle and physically disabled — his left arm was mangled in a cotton gin as a child. Lee uses him as the novel\'s literal mockingbird: a harmless man destroyed by prejudice despite overwhelming evidence of his innocence. His trial exposes the machinery of racial injustice in 1930s Alabama, and his death removes any remaining illusion that the legal system protects the innocent.',
    arc: 'Tom has limited agency in the novel because the system denies it to him. He is accused, tried, convicted and killed, and at no point does his actual innocence change his fate. Atticus proves that Tom could not physically have inflicted Mayella\'s injuries, but the all-white jury convicts him anyway. His attempt to escape prison — he is shot seventeen times — is Lee\'s most brutal indictment of the society she portrays.',
    keyQuotes: [
      {
        text: '"I felt right sorry for her."',
        context: 'Chapter 19 — during the trial',
        analysis:
          'Tom expresses compassion for Mayella, and the courtroom reacts with hostility. Lee shows that a Black man expressing pity for a white woman violates the racial hierarchy more than any crime.',
      },
      {
        text: '"You felt sorry for her, you felt sorry for her?"',
        context: 'Chapter 19 — Mr Gilmer cross-examining',
        analysis:
          'The prosecutor\'s outrage reveals the real offence: not the alleged assault, but the disruption of racial power. Lee exposes the trial as a ritual of racial enforcement.',
      },
    ],
    examTip:
      'Discuss Tom as a structural victim, not just a sympathetic character. Examiners reward candidates who analyse how Lee uses the trial to expose systemic racism and who connect Tom\'s death to the mockingbird symbol.',
  },
  {
    name: 'Bob Ewell',
    role: 'Villain — poor white father of Mayella',
    overview:
      'Bob Ewell is poor, abusive, alcoholic and full of wounded pride. He occupies the bottom of Maycomb\'s white social hierarchy, and his only source of power is his whiteness. Lee uses him to show how racism functions as a tool for the poorest white people to maintain status: Ewell\'s accusation against Tom is not about justice but about reasserting racial dominance after his public humiliation at the trial.',
    arc: 'Ewell begins by accusing Tom and ends by attacking the Finch children. His escalation from legal violence to physical violence shows the logical endpoint of the racism the town tolerates. He is killed by Boo Radley, and Sheriff Tate declares he "fell on his knife" — an act of community justice that the legal system cannot provide.',
    keyQuotes: [
      {
        text: '"I seen that black nigger yonder ruttin\' on my Mayella."',
        context: 'Chapter 17 — testimony',
        analysis:
          'The language is deliberately shocking. Lee uses Ewell\'s vocabulary to expose the dehumanising reality of racism, forcing the reader to confront what polite language conceals.',
      },
      {
        text: '"Too proud to fight, you nigger-lovin\' bastard?"',
        context: 'Chapter 23 — confronting Atticus',
        analysis:
          'Ewell attacks Atticus for defending Tom. Lee shows that in Maycomb, treating a Black man as human is considered a betrayal of whiteness.',
      },
    ],
    examTip:
      'Discuss Ewell in terms of class and race together. Examiners value candidates who show how Lee presents racism as a tool used by poor whites to claim status in a rigid hierarchy.',
  },
  {
    name: 'Calpurnia',
    role: 'The Finch family\'s cook and surrogate mother',
    overview:
      'Calpurnia is the Finch children\'s primary caretaker, a Black woman who bridges the racial divide in a segregated town. She is strict, loving and commands respect in both white and Black Maycomb. Lee uses her to show that the boundaries between the two communities are both rigid and porous, maintained by convention rather than genuine difference.',
    arc: 'Calpurnia\'s role deepens when she takes Scout and Jem to her Black church. This scene reveals her as a woman who navigates two worlds, adjusting her language and behaviour to fit each one. Lee uses the church visit to expose the separate-but-equal fiction and to give Scout her first understanding of the Black community as real people with their own culture, conflicts and generosity.',
    keyQuotes: [
      {
        text: '"It\'s not necessary to tell all you know."',
        context: 'Chapter 12 — to Scout',
        analysis:
          'Calpurnia teaches discretion as survival. Lee shows that Black people in the South had to manage white perceptions carefully, a constant performance of deference.',
      },
      {
        text: '"Suppose you and Scout talked coloured-folks\' talk at home."',
        context: 'Chapter 12 — explaining code-switching',
        analysis:
          'Calpurnia explains why she speaks differently in different settings. Lee uses this to show Scout — and the reader — that language is shaped by power, not intelligence.',
      },
    ],
    examTip:
      'Calpurnia is a bridge character. Examiners reward candidates who discuss how Lee uses her to connect the Finch children to the Black community and to complicate the novel\'s treatment of race by showing agency within oppression.',
  },
  {
    name: 'Miss Maudie Atkinson',
    role: 'Neighbour and moral voice',
    overview:
      'Miss Maudie is the Finch children\'s most perceptive adult neighbour. She is frank, kind, and shares Atticus\'s values without his restraint. Lee uses her to provide Scout with a female role model who is neither conformist nor eccentric, and to offer the reader a perspective on events that Atticus is too diplomatic to voice.',
    arc: 'Miss Maudie does not change dramatically, but her commentary tracks the novel\'s moral development. She explains the mockingbird metaphor, defends Atticus when the town attacks him, and provides measured hope after the verdict. Her house burns down in an early chapter — Lee uses the fire to show the community coming together, a contrast with the division the trial will cause.',
    keyQuotes: [
      {
        text: '"It\'s a sin to kill a mockingbird."',
        context: 'Chapter 10 — explaining Atticus\'s rule',
        analysis:
          'The novel\'s central symbol, defined. Lee uses Miss Maudie to make the metaphor explicit: innocence must be protected, not destroyed.',
      },
      {
        text: '"People in their right minds never take pride in their talents."',
        context: 'Chapter 10 — on Atticus\'s marksmanship',
        analysis:
          'Miss Maudie explains Atticus\'s humility. Lee uses her to define the kind of quiet courage the novel values over showmanship.',
      },
    ],
    examTip:
      'Miss Maudie is a useful character for discussing Lee\'s presentation of women. Examiners reward candidates who contrast her independence with Aunt Alexandra\'s conformity and with Mayella\'s entrapment.',
  },
  {
    name: 'Dill (Charles Baker Harris)',
    role: 'Scout and Jem\'s summer friend',
    overview:
      'Dill is small, imaginative and emotionally neglected by his wealthy, absent parents. He spends summers in Maycomb and becomes the Finch children\'s constant companion. Lee based him on her childhood friend Truman Capote, and his outsider perspective lets him see Maycomb\'s cruelty more clearly than those who have grown up with it.',
    arc: 'Dill begins as the instigator of the Boo Radley game and ends as the child most visibly shattered by the trial. He cries in the courtroom not at the verdict but at Mr Gilmer\'s disrespectful treatment of Tom — Lee gives him the emotional response that the adults of Maycomb have trained themselves to suppress. His sensitivity makes him a moral barometer.',
    keyQuotes: [
      {
        text: '"It was just him I couldn\'t stand."',
        context: 'Chapter 19 — on Mr Gilmer\'s treatment of Tom',
        analysis:
          'Dill responds to the casual cruelty of the cross-examination. Lee uses a child\'s instinctive empathy to expose what adult Maycomb has learned to accept.',
      },
      {
        text: '"I\'m little but I\'m old."',
        context: 'Chapter 14',
        analysis:
          'Dill\'s self-description captures his dual nature: physically small but emotionally precocious. Lee uses him to show that experience, not size, creates understanding.',
      },
    ],
    examTip:
      'Dill is often underused in essays. Examiners value candidates who discuss his role as an outsider whose emotional sensitivity contrasts with the town\'s learned indifference. Link him to the loss of innocence theme.',
  },
]

/* ── Page ───────────────────────────────────────────────────────────────── */

export default async function ToKillAMockingbirdCharactersPage() {
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
          <Button
            variant="ghost"
            size="sm"
            className="mb-4 -ml-2 text-muted-foreground"
            render={<Link href="/revision/texts/to-kill-a-mockingbird" />}
          >
            <ArrowLeft className="size-3.5" />
            Back to To Kill a Mockingbird
          </Button>

          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge variant="secondary">
              <BookOpen className="mr-1 size-3 text-violet-400" />
              Modern Text — Novel
            </Badge>
            <Badge variant="outline" className="text-muted-foreground">
              <Sparkles className="mr-1 size-3" />
              Edexcel IGCSE
            </Badge>
          </div>

          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            Character Analysis
          </h1>
          <p className="mt-2 text-body-lg text-muted-foreground">
            To Kill a Mockingbird by Harper Lee
          </p>
          <p className="mt-4 max-w-2xl text-body-md text-muted-foreground">
            Deep profiles for every major character: overview, arc, key quotations and
            examiner tips. All quotes are 15 words or fewer.
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
                    <div
                      key={q.text}
                      className="rounded-xl border border-border/60 bg-background/50 p-4 space-y-1.5"
                    >
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
        <Button variant="outline" size="sm" render={<Link href="/revision/texts/to-kill-a-mockingbird/themes" />}>
          Themes <ArrowRight className="size-3.5" />
        </Button>
        <Button variant="outline" size="sm" render={<Link href="/revision/texts/to-kill-a-mockingbird/key-quotes" />}>
          Key quotes <ArrowRight className="size-3.5" />
        </Button>
        <Button variant="outline" size="sm" render={<Link href="/revision/texts/to-kill-a-mockingbird/context" />}>
          Context <ArrowRight className="size-3.5" />
        </Button>
      </section>

      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
        Short quotations reproduced under the fair dealing provision of the Copyright,
        Designs and Patents Act 1988 for criticism and review. Full text available from
        your school or local library.
      </p>
    </div>
  )
}
