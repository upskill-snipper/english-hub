import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Lightbulb,
  Quote,
  Sparkles,
} from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { getServerBoard } from '@/lib/board/get-server-board'

export const metadata: Metadata = {
  title: 'To Kill a Mockingbird — Themes | The English Hub',
  description:
    'Detailed theme analysis for To Kill a Mockingbird by Harper Lee: Racial Injustice, Moral Education, Loss of Innocence, Courage, Class and Empathy.',
  alternates: {
    canonical:
      'https://theenglishhub.app/revision/texts/to-kill-a-mockingbird/themes',
  },
}

/* ── Theme data ────────────────────────────────────────────────────────── */

type ThemeData = {
  title: string
  overview: string
  howLeePresentsIt: string
  keyQuotes: { text: string; speaker: string; analysis: string }[]
  contextLink: string
  examTip: string
}

const THEMES: ThemeData[] = [
  {
    title: 'Racial injustice',
    overview:
      'Lee exposes a legal system that processes injustice with terrifying politeness. The trial of Tom Robinson is not a miscarriage of justice in the sense of a mistake — it is the system working exactly as designed. The all-white jury convicts a Black man of a crime he could not physically have committed because acquittal would disrupt the racial hierarchy that sustains Maycomb\'s social order. Lee argues that racism is not an aberration but a structural feature of the society.',
    howLeePresentsIt:
      'Lee uses the trial as the novel\'s centrepiece, devoting six chapters to it. She has Atticus dismantle the prosecution\'s case methodically — proving Tom\'s left arm is useless, proving Mayella\'s injuries were inflicted by a left-handed attacker (her father), proving the absence of medical evidence — and then has the jury convict anyway. The gap between evidence and verdict is the gap between law and justice, and Lee makes the reader sit with it.',
    keyQuotes: [
      {
        text: '"People generally see what they look for, and hear what they listen for."',
        speaker: 'Judge Taylor — Chapter 17',
        analysis:
          'The judge acknowledges that perception is shaped by prejudice. Lee uses this to explain why evidence alone cannot overcome entrenched racism.',
      },
      {
        text: '"I felt right sorry for her."',
        speaker: 'Tom Robinson — Chapter 19',
        analysis:
          'Tom\'s compassion for Mayella scandalises the courtroom because it violates the racial hierarchy. Lee shows that empathy across race lines is treated as transgression.',
      },
      {
        text: '"In our courts all men are created equal."',
        speaker: 'Atticus — Chapter 20',
        analysis:
          'Atticus invokes the ideal that the trial has just betrayed. Lee uses the gap between principle and practice to indict the entire system.',
      },
    ],
    contextLink:
      'The Jim Crow laws mandated racial segregation across the American South. All-white juries, Black defendants and predetermined verdicts were standard. The Scottsboro Boys trial of 1931 — in which nine Black teenagers were falsely accused of raping two white women — is widely seen as an inspiration for Tom\'s case.',
    examTip:
      'This is the novel\'s central theme and the safest to lead with. Examiners expect you to discuss the trial in structural terms: not just what happens but how Lee uses narrative technique (child narrator, delayed reveal, dramatic irony) to expose the injustice.',
  },
  {
    title: 'Moral education',
    overview:
      'The novel is a Bildungsroman — a story of moral growth. Scout and Jem learn, through Atticus\'s teaching and their own experience, to distinguish right from wrong in a society where the two are often confused. Lee structures the entire narrative as Scout\'s education: every event, from the Boo Radley game to the trial to the final attack, teaches her something about human nature.',
    howLeePresentsIt:
      'Atticus teaches through example and conversation, not lectures. His key instruction — "You never really understand a person until you consider things from his point of view" — is repeated and tested throughout the novel. Lee also uses other characters as teachers: Calpurnia teaches dignity, Miss Maudie teaches independence, Mrs Dubose teaches courage. Each lesson builds toward Scout\'s final act of empathy: standing on Boo\'s porch and seeing the world through his eyes.',
    keyQuotes: [
      {
        text: '"You never really understand a person until you consider things from his point of view."',
        speaker: 'Atticus — Chapter 3',
        analysis:
          'The novel\'s moral thesis. Lee makes empathy the foundation of all other virtues and the lesson Scout must learn across the entire book.',
      },
      {
        text: '"The one thing that doesn\'t abide by majority rule is a person\'s conscience."',
        speaker: 'Atticus — Chapter 11',
        analysis:
          'Lee places individual moral judgment above social consensus, arguing that conscience is the ultimate authority.',
      },
      {
        text: '"I do my best to love everybody."',
        speaker: 'Atticus — Chapter 11',
        analysis:
          'A deceptively simple statement of ethical commitment. Lee shows that Atticus\'s morality is active, not passive — it requires constant effort.',
      },
    ],
    contextLink:
      'Lee published the novel in 1960, during the Civil Rights Movement. The book is itself an instrument of moral education: it teaches its predominantly white readership to see racism through the eyes of children who are learning to reject it.',
    examTip:
      'Link Scout\'s education to the novel\'s narrative structure. Examiners reward candidates who show how each episode in the plot teaches Scout — and the reader — a specific moral lesson, building toward the final act of empathy.',
  },
  {
    title: 'Loss of innocence',
    overview:
      'Scout and Jem begin the novel treating Boo as a game and end it seeing him as a human being. Their growing understanding of evil is gentle, painful and irreversible. Lee presents innocence not as ignorance but as a state of moral clarity that the adult world systematically destroys. The mockingbird symbol connects this theme to the fates of Tom and Boo — innocents destroyed or threatened by the cruelty of others.',
    howLeePresentsIt:
      'Lee divides the novel into two halves: the first focuses on childhood games and neighbourhood life, the second on the trial and its consequences. This structural shift mirrors the children\'s transition from innocence to experience. Jem\'s loss is more dramatic — he cries after the verdict and cannot reconcile what he has seen — while Scout\'s is slower, culminating in her quiet understanding on Boo\'s porch.',
    keyQuotes: [
      {
        text: '"It\'s a sin to kill a mockingbird."',
        speaker: 'Miss Maudie — Chapter 10',
        analysis:
          'The central symbol defined. Lee argues that innocence — in birds, in Tom, in Boo — must be protected because it does no harm.',
      },
      {
        text: '"I always thought Maycomb folks were the best folks in the world."',
        speaker: 'Jem — Chapter 22',
        analysis:
          'Jem\'s faith in his community collapses after the verdict. Lee captures the exact moment when a child discovers that adults can be collectively wrong.',
      },
      {
        text: '"Atticus, he was real nice."',
        speaker: 'Scout — Chapter 31',
        analysis:
          'Scout\'s final words about Boo recover innocence through empathy. Lee closes with a child\'s simplicity to suggest that goodness survives even after its loss.',
      },
    ],
    contextLink:
      'The novel is set in the 1930s but written in 1960, allowing Lee to present childhood innocence as a historical lens. The children\'s incomprehension of racism mirrors the nation\'s growing recognition that segregation was morally indefensible.',
    examTip:
      'Discuss the mockingbird as the unifying symbol for this theme. Examiners reward candidates who link Tom, Boo and the children as different forms of innocence under threat, showing how Lee connects individual stories to a broader argument.',
  },
  {
    title: 'Courage',
    overview:
      'Atticus defines courage not as physical bravery but as "knowing you\'re licked before you begin but you begin anyway." Lee presents multiple models of courage in the novel: Atticus defending Tom, Mrs Dubose fighting her morphine addiction, Boo emerging from seclusion to save the children, and Scout confronting a mob with nothing but her voice. True courage, the novel argues, is moral persistence in the face of certain failure.',
    howLeePresentsIt:
      'Lee uses the Mrs Dubose subplot to teach the children — and the reader — her definition of courage before the trial begins. This prepares them to understand Atticus\'s decision to defend Tom as an act of courage rather than foolishness. She also contrasts moral courage with physical courage: Atticus is the best shot in Maycomb but refuses to carry a gun, showing that restraint, not violence, is the braver choice.',
    keyQuotes: [
      {
        text: '"Simply because we were licked a hundred years before we started is no reason not to try."',
        speaker: 'Atticus — Chapter 9',
        analysis:
          'Atticus\'s definition of courage. Lee argues that the value of fighting for justice lies in the fight itself, not in the outcome.',
      },
      {
        text: '"Real courage is... when you know you\'re licked before you begin."',
        speaker: 'Atticus — Chapter 11',
        analysis:
          'Explicitly defines the novel\'s model of courage. Lee uses Mrs Dubose\'s struggle as the concrete example before applying it to the trial.',
      },
      {
        text: '"Hey, Mr Cunningham."',
        speaker: 'Scout — Chapter 15',
        analysis:
          'Scout disperses a lynch mob by speaking to one man as an individual. Lee shows that a child\'s courage — naive, personal, direct — can succeed where adult reasoning fails.',
      },
    ],
    contextLink:
      'Lee wrote during the Civil Rights Movement, when ordinary people — Rosa Parks, the Little Rock Nine, the Freedom Riders — were displaying exactly the kind of moral courage Atticus embodies. The novel models the behaviour Lee wanted her readers to adopt.',
    examTip:
      'Contrast different types of courage. Examiners value candidates who discuss physical courage (the mad dog), moral courage (the trial), social courage (Scout at the mob) and endurance courage (Mrs Dubose) as Lee\'s layered exploration of the theme.',
  },
  {
    title: 'Class and social hierarchy',
    overview:
      'Maycomb is rigidly stratified. Old families like the Finches sit at the top. Farming families like the Cunninghams occupy the respectable middle. The Ewells are "white trash" at the bottom of the white hierarchy. The Black community exists below all white people regardless of education, character or wealth. Lee shows how this system creates the conditions for the trial: Bob Ewell can accuse Tom because his whiteness guarantees his word against a Black man\'s.',
    howLeePresentsIt:
      'Lee uses Scout\'s naivety to expose the absurdity of class distinctions. When Scout asks why the Cunninghams are respected but the Ewells are not, Jem tries to explain Maycomb\'s social categories and fails — because they are irrational. Lee also uses the church scene (Chapter 12) to show that the Black community has its own social structures, just as complex, completely ignored by white Maycomb.',
    keyQuotes: [
      {
        text: '"I think there\'s just one kind of folks. Folks."',
        speaker: 'Scout — Chapter 23',
        analysis:
          'Scout rejects the entire class system in a single sentence. Lee gives the moral insight to a child because adults in Maycomb have been taught not to see it.',
      },
      {
        text: '"People generally see what they look for, and hear what they listen for."',
        speaker: 'Atticus — Chapter 17',
        analysis:
          'Lee uses Atticus to explain how class and racial prejudice function: people confirm what they already believe and ignore what contradicts it.',
      },
      {
        text: '"There\'s four kinds of folks in the world."',
        speaker: 'Jem — Chapter 23',
        analysis:
          'Jem tries to map Maycomb\'s class system. Lee shows that even well-meaning children absorb the categories their society imposes.',
      },
    ],
    contextLink:
      'The Depression intensified class divisions. Farming families lost land, the Ewells lived on welfare and the Black community was pushed further to the margins. Lee shows that economic hardship makes people cling to hierarchy rather than question it.',
    examTip:
      'Link class to race. Examiners reward candidates who show how Lee presents racial hierarchy as an extension of class hierarchy — the Ewells have nothing but their whiteness, and they weaponise it against Tom Robinson.',
  },
  {
    title: 'Empathy and understanding',
    overview:
      'Empathy is the novel\'s supreme virtue. Atticus teaches it, Scout learns it, and every moral failure in the book can be traced to its absence. Lee argues that empathy is not a feeling but a discipline: it requires deliberate effort to see the world from another person\'s perspective. The novel\'s entire structure is designed to teach the reader this discipline alongside Scout.',
    howLeePresentsIt:
      'Lee embeds empathy in the novel\'s narrative method. The retrospective first person lets the adult Scout look back with understanding she did not have as a child, modelling the empathetic imagination Atticus teaches. The Boo Radley arc is the fullest expression: the children begin by projecting their fears onto him and end by understanding him as a person. Scout\'s final walk home from Boo\'s porch — seeing the street through his eyes — is the culmination of her moral education.',
    keyQuotes: [
      {
        text: '"You never really understand a person until you consider things from his point of view."',
        speaker: 'Atticus — Chapter 3',
        analysis:
          'The novel\'s foundational statement. Lee makes empathy the prerequisite for justice, courage and all other virtues.',
      },
      {
        text: '"Atticus was right. One time he said you never really know a man until you stand in his shoes."',
        speaker: 'Scout — Chapter 31',
        analysis:
          'Scout applies Atticus\'s lesson after standing on Boo\'s porch. Lee closes the circle: theory becomes practice, and the child surpasses the teacher.',
      },
      {
        text: '"Most people are, Scout, when you finally see them."',
        speaker: 'Atticus — Chapter 31',
        analysis:
          'Atticus\'s response to Scout calling Boo "real nice." Lee ends the novel with qualified optimism: most people are good, but seeing them requires effort.',
      },
    ],
    contextLink:
      'Lee wrote during a period when white Americans were being asked, for the first time at a national level, to see the world from Black Americans\' perspective. The novel is itself an exercise in empathy: it asks its predominantly white readership to feel what Tom Robinson\'s conviction means.',
    examTip:
      'Treat empathy as the novel\'s unifying theme, not just one of several. Examiners reward candidates who show how empathy connects to justice (understanding Tom), courage (understanding Mrs Dubose) and innocence (understanding Boo).',
  },
]

/* ── Page ───────────────────────────────────────────────────────────────── */

export default async function ToKillAMockingbirdThemesPage() {
  const board = await getServerBoard()
  const allowedBoards = ['edexcel-igcse']
  if (board && !allowedBoards.includes(board)) {
    redirect('/revision/texts')
  }

  return (
    <div className="space-y-10 pb-16">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-amber-500/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-amber-500/5 blur-3xl" />
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
            Theme Analysis
          </h1>
          <p className="mt-2 text-body-lg text-muted-foreground">
            To Kill a Mockingbird by Harper Lee
          </p>
          <p className="mt-4 max-w-2xl text-body-md text-muted-foreground">
            Six major themes explored in depth with Lee&apos;s methods, contextual links
            and examiner guidance. All quotes are 15 words or fewer.
          </p>
        </div>
      </section>

      {/* Themes */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <Lightbulb className="size-5 text-amber-400" />
          <h2 className="text-heading-lg font-heading text-foreground">Themes</h2>
        </div>
        <div className="space-y-6">
          {THEMES.map((t) => (
            <Card key={t.title}>
              <CardHeader>
                <CardTitle className="text-heading-md font-heading">{t.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-foreground">Overview</h3>
                  <p className="text-body-sm text-muted-foreground">{t.overview}</p>
                </div>
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-foreground">How Lee presents it</h3>
                  <p className="text-body-sm text-muted-foreground">{t.howLeePresentsIt}</p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold text-foreground">Key quotations</h3>
                  {t.keyQuotes.map((q) => (
                    <div key={q.text} className="rounded-xl border border-border/60 bg-background/50 p-4 space-y-1.5">
                      <p className="text-body-md font-medium italic text-foreground">{q.text}</p>
                      <p className="text-caption uppercase tracking-wide text-primary">{q.speaker}</p>
                      <p className="text-body-sm text-muted-foreground">{q.analysis}</p>
                    </div>
                  ))}
                </div>
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-foreground">Contextual link</h3>
                  <p className="text-body-sm text-muted-foreground">{t.contextLink}</p>
                </div>
                <div className="rounded-xl border border-primary/20 bg-primary/5 p-4">
                  <div className="flex items-center gap-2 mb-1.5">
                    <Quote className="size-3.5 text-primary" />
                    <p className="text-xs font-semibold uppercase tracking-wide text-primary">Exam tip</p>
                  </div>
                  <p className="text-body-sm text-muted-foreground">{t.examTip}</p>
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
