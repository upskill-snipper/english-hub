import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Quote,
  Sparkles,
} from 'lucide-react'

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { getServerBoard } from '@/lib/board/get-server-board'

export const metadata: Metadata = {
  title: 'To Kill a Mockingbird — Key Quotes | The English Hub',
  description:
    'Twenty-five essential quotations from To Kill a Mockingbird by Harper Lee with speaker, context and detailed analysis.',
  alternates: {
    canonical:
      'https://theenglishhub.app/revision/texts/to-kill-a-mockingbird/key-quotes',
  },
}

/* ── Quote data ────────────────────────────────────────────────────────── */

type KeyQuote = {
  id: number
  text: string
  speaker: string
  context: string
  analysis: string
  themes: string[]
}

const KEY_QUOTES: KeyQuote[] = [
  {
    id: 1,
    text: '"You never really understand a person until you consider things from his point of view."',
    speaker: 'Atticus',
    context: 'Chapter 3 — to Scout',
    analysis:
      'The novel\'s moral thesis. Lee makes empathy the foundation of justice, courage and all other virtues. Scout must learn this lesson across the entire book, and her success is measured by whether she can apply it.',
    themes: ['Empathy', 'Moral education'],
  },
  {
    id: 2,
    text: '"It\'s a sin to kill a mockingbird."',
    speaker: 'Miss Maudie',
    context: 'Chapter 10 — explaining Atticus\'s rule',
    analysis:
      'The central symbol defined. Lee argues that innocence — in birds, in Tom Robinson, in Boo Radley — must be protected because it does nothing but good. Destroying it is the novel\'s supreme moral crime.',
    themes: ['Innocence', 'Racial injustice'],
  },
  {
    id: 3,
    text: '"Simply because we were licked a hundred years before we started is no reason not to try."',
    speaker: 'Atticus',
    context: 'Chapter 9 — on defending Tom Robinson',
    analysis:
      'Atticus\'s definition of moral courage. Lee shows that he fights not for victory but for integrity, knowing the system is rigged. The "hundred years" places the trial in the long history of racial injustice.',
    themes: ['Courage', 'Racial injustice'],
  },
  {
    id: 4,
    text: '"The one thing that doesn\'t abide by majority rule is a person\'s conscience."',
    speaker: 'Atticus',
    context: 'Chapter 11 — to Scout',
    analysis:
      'Lee places individual moral judgment above social consensus. In a town where the majority supports racism, conscience is the only reliable guide to justice.',
    themes: ['Moral education', 'Courage'],
  },
  {
    id: 5,
    text: '"People generally see what they look for, and hear what they listen for."',
    speaker: 'Judge Taylor',
    context: 'Chapter 17 — during the trial',
    analysis:
      'The judge names the mechanism of prejudice: confirmation bias. Lee explains why evidence alone cannot overcome racism — people see what they have been taught to see.',
    themes: ['Racial injustice', 'Class'],
  },
  {
    id: 6,
    text: '"Atticus, he was real nice."',
    speaker: 'Scout',
    context: 'Chapter 31 — on Boo Radley',
    analysis:
      'Scout\'s final assessment of Boo recovers innocence through empathy. Lee closes the novel with a child\'s simplicity that carries the weight of everything she has learned.',
    themes: ['Empathy', 'Innocence'],
  },
  {
    id: 7,
    text: '"I do my best to love everybody."',
    speaker: 'Atticus',
    context: 'Chapter 11 — to Scout',
    analysis:
      'A deceptively simple statement of the ethical code Atticus lives by. Lee shows that active, universal compassion requires constant effort and is the hardest form of courage.',
    themes: ['Empathy', 'Moral education'],
  },
  {
    id: 8,
    text: '"I felt right sorry for her."',
    speaker: 'Tom Robinson',
    context: 'Chapter 19 — during cross-examination',
    analysis:
      'Tom\'s compassion for Mayella scandalises the courtroom. Lee shows that a Black man expressing pity for a white woman violates the racial hierarchy more than any alleged crime.',
    themes: ['Racial injustice', 'Empathy'],
  },
  {
    id: 9,
    text: '"Real courage is... when you know you\'re licked before you begin."',
    speaker: 'Atticus',
    context: 'Chapter 11 — on Mrs Dubose',
    analysis:
      'Lee\'s explicit definition of courage. By placing it in the context of Mrs Dubose\'s addiction, she separates moral courage from physical bravery and prepares the reader for the trial.',
    themes: ['Courage'],
  },
  {
    id: 10,
    text: '"Most people are, Scout, when you finally see them."',
    speaker: 'Atticus',
    context: 'Chapter 31 — responding to Scout calling Boo "nice"',
    analysis:
      'The novel\'s closing moral statement. Lee ends with qualified optimism: most people are good, but seeing their goodness requires the empathetic effort Atticus has taught.',
    themes: ['Empathy', 'Moral education'],
  },
  {
    id: 11,
    text: '"I think there\'s just one kind of folks. Folks."',
    speaker: 'Scout',
    context: 'Chapter 23 — to Jem',
    analysis:
      'Scout rejects Maycomb\'s class and racial categories. Lee gives the moral insight to a child because the adults of the town have been taught not to see the obvious truth.',
    themes: ['Class', 'Racial injustice'],
  },
  {
    id: 12,
    text: '"In our courts all men are created equal."',
    speaker: 'Atticus',
    context: 'Chapter 20 — closing argument',
    analysis:
      'Atticus invokes the principle the trial will immediately betray. Lee uses the gap between American ideals and American practice as the novel\'s deepest irony.',
    themes: ['Racial injustice', 'Courage'],
  },
  {
    id: 13,
    text: '"I always thought Maycomb folks were the best folks in the world."',
    speaker: 'Jem',
    context: 'Chapter 22 — after the verdict',
    analysis:
      'Jem\'s faith in his community collapses. Lee captures the precise moment when childhood trust in adult goodness is destroyed by a single act of collective injustice.',
    themes: ['Innocence', 'Racial injustice'],
  },
  {
    id: 14,
    text: '"To drag him into the limelight would be a sin."',
    speaker: 'Sheriff Tate',
    context: 'Chapter 30 — protecting Boo',
    analysis:
      'Tate applies the mockingbird principle. Lee shows that sometimes justice means protecting the vulnerable from public exposure, even if it means bending the law.',
    themes: ['Innocence', 'Empathy'],
  },
  {
    id: 15,
    text: '"Hey, Mr Cunningham."',
    speaker: 'Scout',
    context: 'Chapter 15 — confronting the lynch mob',
    analysis:
      'Scout disperses a mob by addressing one man as an individual, not part of a crowd. Lee shows that a child\'s naive empathy can succeed where adult argument fails.',
    themes: ['Courage', 'Empathy'],
  },
  {
    id: 16,
    text: '"You felt sorry for her, you felt sorry for her?"',
    speaker: 'Mr Gilmer',
    context: 'Chapter 19 — cross-examining Tom',
    analysis:
      'The prosecutor\'s outrage reveals that Tom\'s real offence is disrupting the racial hierarchy. Lee makes the courtroom\'s double standard explicit through repetition.',
    themes: ['Racial injustice'],
  },
  {
    id: 17,
    text: '"Mockingbirds don\'t do one thing but make music for us to enjoy."',
    speaker: 'Miss Maudie',
    context: 'Chapter 10',
    analysis:
      'The extended mockingbird metaphor. Lee defines innocence as something that exists solely to benefit others and argues that destroying it is always morally wrong.',
    themes: ['Innocence'],
  },
  {
    id: 18,
    text: '"It\'s not necessary to tell all you know."',
    speaker: 'Calpurnia',
    context: 'Chapter 12 — to Scout at church',
    analysis:
      'Calpurnia teaches survival through discretion. Lee shows that Black people in the South had to manage white perceptions constantly — a form of everyday resistance.',
    themes: ['Racial injustice', 'Class'],
  },
  {
    id: 19,
    text: '"People in their right minds never take pride in their talents."',
    speaker: 'Miss Maudie',
    context: 'Chapter 10 — on Atticus\'s marksmanship',
    analysis:
      'Lee uses Atticus\'s hidden skill with a gun to distinguish genuine strength from showmanship. True courage is quiet, not performative.',
    themes: ['Courage', 'Moral education'],
  },
  {
    id: 20,
    text: '"There\'s four kinds of folks in the world."',
    speaker: 'Jem',
    context: 'Chapter 23 — explaining Maycomb\'s hierarchy',
    analysis:
      'Jem tries to map the class system and cannot make it logical. Lee uses his failure to show that social categories are irrational constructions, not natural facts.',
    themes: ['Class'],
  },
  {
    id: 21,
    text: '"I seen that black nigger yonder ruttin\' on my Mayella."',
    speaker: 'Bob Ewell',
    context: 'Chapter 17 — testimony',
    analysis:
      'Lee uses Ewell\'s language to make racism physically repulsive to the reader. The crude vocabulary exposes what polite Southern manners conceal.',
    themes: ['Racial injustice', 'Class'],
  },
  {
    id: 22,
    text: '"Shoot all the bluejays you want, if you can hit \'em, but remember it\'s a sin to kill a mockingbird."',
    speaker: 'Atticus',
    context: 'Chapter 10',
    analysis:
      'The full statement of the novel\'s central metaphor. Lee distinguishes between those who cause harm (bluejays) and those who are harmless (mockingbirds), making protection of innocence a moral imperative.',
    themes: ['Innocence', 'Moral education'],
  },
  {
    id: 23,
    text: '"It was just him I couldn\'t stand."',
    speaker: 'Dill',
    context: 'Chapter 19 — on Mr Gilmer\'s cross-examination',
    analysis:
      'Dill responds instinctively to cruelty. Lee gives a child the emotional response that adult Maycomb has trained itself to suppress, making him a moral barometer.',
    themes: ['Empathy', 'Innocence'],
  },
  {
    id: 24,
    text: '"Atticus was right. One time he said you never really know a man until you stand in his shoes."',
    speaker: 'Scout',
    context: 'Chapter 31 — on Boo\'s porch',
    analysis:
      'Scout applies the lesson. Lee closes the novel\'s moral arc: theory becomes practice, and the student finally understands what the teacher meant.',
    themes: ['Empathy', 'Moral education'],
  },
  {
    id: 25,
    text: '"With him, life was routine; without him, life was unbearable."',
    speaker: 'Scout (narrating)',
    context: 'Chapter 12 — on Atticus\'s absence',
    analysis:
      'Scout describes Atticus\'s stabilising presence. Lee shows that moral guidance is not dramatic but steady — a daily presence that children depend on without realising it.',
    themes: ['Moral education'],
  },
]

/* ── Page ───────────────────────────────────────────────────────────────── */

export default async function ToKillAMockingbirdKeyQuotesPage() {
  const board = await getServerBoard()
  const allowedBoards = ['edexcel-igcse']
  if (board && !allowedBoards.includes(board)) {
    redirect('/revision/texts')
  }

  return (
    <div className="space-y-10 pb-16">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-violet-500/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-violet-500/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-blue-500/5 blur-3xl" />
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
            Key Quotations
          </h1>
          <p className="mt-2 text-body-lg text-muted-foreground">
            To Kill a Mockingbird by Harper Lee
          </p>
          <p className="mt-4 max-w-2xl text-body-md text-muted-foreground">
            Twenty-five essential quotations for exam revision. Each quote is 15 words or fewer,
            with speaker, context, analysis and theme tags for quick reference.
          </p>
        </div>
      </section>

      {/* Quotes */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <Quote className="size-5 text-violet-400" />
          <h2 className="text-heading-lg font-heading text-foreground">25 Key Quotes</h2>
        </div>
        <div className="grid gap-4">
          {KEY_QUOTES.map((q) => (
            <Card key={q.id}>
              <CardContent className="space-y-3 p-5">
                <div className="flex items-start justify-between gap-4">
                  <p className="text-body-md font-medium italic text-foreground">{q.text}</p>
                  <span className="shrink-0 flex size-7 items-center justify-center rounded-full bg-muted text-xs font-semibold text-muted-foreground">{q.id}</span>
                </div>
                <p className="text-caption uppercase tracking-wide text-primary">{q.speaker} — {q.context}</p>
                <p className="text-body-sm text-muted-foreground">{q.analysis}</p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {q.themes.map((theme) => (
                    <span key={theme} className="rounded-full bg-muted px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground">{theme}</span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Navigation */}
      <section className="flex flex-wrap gap-3">
        <Button variant="outline" size="sm" render={<Link href="/revision/texts/to-kill-a-mockingbird/characters" />}>
          Characters <ArrowRight className="size-3.5" />
        </Button>
        <Button variant="outline" size="sm" render={<Link href="/revision/texts/to-kill-a-mockingbird/themes" />}>
          Themes <ArrowRight className="size-3.5" />
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
