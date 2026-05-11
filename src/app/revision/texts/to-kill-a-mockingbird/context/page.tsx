import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, BookOpen, Clock, Globe, Quote, Sparkles, Users } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { getServerBoard } from '@/lib/board/get-server-board'

import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
export const metadata: Metadata = {
  title: 'To Kill a Mockingbird — Historical Context | The English Hub',
  description:
    "Historical and social context for To Kill a Mockingbird by Harper Lee: 1930s Alabama, Jim Crow laws, the Great Depression, Harper Lee's biography and the Scottsboro Boys.",
  alternates: {
    canonical: 'https://theenglishhub.app/revision/texts/to-kill-a-mockingbird/context',
  },
}

/* ── Context data ──────────────────────────────────────────────────────── */

type ContextSection = {
  title: string
  icon: 'clock' | 'globe' | 'users'
  content: string[]
  keyLink: string
  examTip: string
}

const SECTIONS: ContextSection[] = [
  {
    title: '1930s Alabama and the Jim Crow South',
    icon: 'globe',
    content: [
      'The novel is set in the fictional town of Maycomb, Alabama, between 1933 and 1935. Alabama was part of the "Deep South" — the group of states where racial segregation was most rigidly enforced and where the legacy of slavery was most deeply embedded in law, custom and daily life.',
      'The Jim Crow laws, enacted across the South from the 1870s onward, mandated racial segregation in schools, courtrooms, churches, hospitals, transport, restaurants and public spaces. Black and white Americans used separate drinking fountains, entrances and cemeteries. The laws were backed by both state violence and mob violence, including lynching.',
      "In the courtroom, Jim Crow meant all-white juries, white judges and a legal system that treated Black testimony as inherently less credible than white testimony. The conviction of Tom Robinson in the novel is not a dramatic exaggeration — it is a faithful representation of how the system operated. Atticus's surprise is not that the jury convicts but that they deliberate for several hours before doing so.",
    ],
    keyLink:
      "The Jim Crow system is the structural foundation of the novel's central conflict. Without it, the trial cannot happen as it does, the verdict cannot stand and the themes of racial injustice and moral courage have no anchor. Lee makes Maycomb a microcosm of the segregated South.",
    examTip:
      'Name the Jim Crow laws specifically and date them to the 1870s onward. Examiners reward candidates who treat segregation as a legal system, not just a cultural attitude. Show how Lee uses the courtroom as a stage where this system is both displayed and challenged.',
  },
  {
    title: 'The Great Depression',
    icon: 'clock',
    content: [
      'The novel is set during the Great Depression, which began with the Wall Street Crash of 1929 and lasted through the 1930s. Unemployment reached 25% nationally and was even higher in the rural South, where agriculture had already been in decline.',
      'In Maycomb, the Depression is visible in every detail. The Cunninghams pay their debts in hickory nuts and turnip greens. The Ewells live on relief cheques in a cabin behind the town dump. Atticus accepts goods instead of money from his poorer clients. Lee uses economic hardship to explain — without excusing — the rigidity of the class system: when people have almost nothing, they cling harder to whatever status they have.',
      "The Depression also explains the racial dynamics. Poor white families like the Ewells maintain their self-respect by positioning themselves above the Black community. Bob Ewell's accusation against Tom Robinson is partly motivated by economic resentment: a Black man who shows compassion to a white woman threatens the only form of status Ewell has left.",
    ],
    keyLink:
      "The Depression intensifies every conflict in the novel. It makes the class system more rigid, makes racial hierarchy more precious to those at the bottom of the white ladder, and makes Atticus's defence of Tom more politically costly. Lee uses economic desperation to explain why good people fail to act.",
    examTip:
      'Connect the Depression to both class and race. Examiners value candidates who show how Lee uses poverty to explain why the Ewells need the racial hierarchy and why the Cunninghams can be persuaded to join a mob.',
  },
  {
    title: 'The Scottsboro Boys trial',
    icon: 'users',
    content: [
      'In March 1931, nine Black teenagers were arrested in Scottsboro, Alabama, and accused of raping two white women on a freight train. Despite flimsy evidence and the later recantation of one of the accusers, all nine were convicted by all-white juries. Several were sentenced to death.',
      'The Scottsboro case became a national and international cause, exposing the injustice of the Southern legal system to audiences who had previously ignored it. The case went to the US Supreme Court twice and resulted in landmark rulings on the right to adequate defence and the exclusion of Black jurors.',
      "The parallels with Tom Robinson's case are striking: a Black man accused by a white woman, an all-white jury, overwhelming evidence of innocence ignored, and a defence lawyer who is vilified by his own community. Lee almost certainly drew on the Scottsboro case, though she never explicitly confirmed it.",
    ],
    keyLink:
      "The Scottsboro case provides a real-world parallel for Tom's trial. Understanding it helps demonstrate that Lee's novel is not an exaggeration of Southern justice but a faithful dramatisation of documented reality. The case also shows that public awareness — the kind Lee's novel creates — is a necessary step toward change.",
    examTip:
      'Reference the Scottsboro Boys by name and date (1931). Examiners value specific historical parallels. Show how Lee uses fiction to expose the same injustice that the Scottsboro case exposed in reality.',
  },
  {
    title: "Harper Lee's biography",
    icon: 'users',
    content: [
      "Nelle Harper Lee (1926-2016) was born in Monroeville, Alabama, a small Southern town that is widely recognised as the model for Maycomb. Her father, Amasa Coleman Lee, was a lawyer who once defended two Black men accused of murder — an experience that clearly informs Atticus's characterisation.",
      "Lee's childhood friend was Truman Capote, a small, imaginative boy who spent summers with relatives in Monroeville. Capote is the obvious model for Dill, and the two remained friends into adulthood — Lee accompanied Capote to Kansas during his research for In Cold Blood.",
      "To Kill a Mockingbird was published in 1960, at the height of the Civil Rights Movement. It won the Pulitzer Prize in 1961 and was adapted into an Academy Award-winning film starring Gregory Peck in 1962. Lee published only one other novel, Go Set a Watchman, in 2015, which was written before Mockingbird but set later in Scout's life.",
      "Lee was a private person who gave almost no interviews after the novel's success. She lived quietly in Monroeville until her death in 2016. Her reticence has contributed to the novel's mystique and has also made biographical readings of the text both tempting and speculative.",
    ],
    keyLink:
      "Lee's personal background gives the novel its authority. The small-town details — heat, porches, church suppers, gossip — are drawn from direct experience. Her father's legal career and her friendship with Capote provide the raw material from which Atticus and Dill are shaped.",
    examTip:
      'Use biographical detail sparingly and always connect it to the text. Examiners reward candidates who note that Lee based Maycomb on Monroeville and Dill on Capote, but do not reward pure biography without textual analysis.',
  },
  {
    title: 'The Civil Rights Movement and publication context',
    icon: 'clock',
    content: [
      'Although the novel is set in the 1930s, it was published in 1960, during one of the most transformative periods in American history. The Montgomery Bus Boycott (1955-56), the desegregation of Little Rock Central High School (1957) and the sit-in movement (1960) were all recent or ongoing events when readers first encountered Scout, Atticus and Tom Robinson.',
      "Lee's novel spoke directly to a white audience that was being forced to confront the reality of racial injustice. By narrating from a white child's perspective, she made the argument accessible to readers who might have resisted a Black narrator or a more overtly political text. The novel's power lies partly in its strategy: it makes white readers identify with characters who choose justice over conformity.",
      'The novel has been taught continuously in American and British schools since its publication, making it one of the most widely read texts in the English-speaking world. It has also been challenged and banned in some districts for its use of racial slurs and its depiction of racism, though defenders argue that the novel condemns the very attitudes it depicts.',
    ],
    keyLink:
      'Understanding the publication context helps explain why Lee chose a historical setting for a contemporary argument. By placing the story in the 1930s, she invited readers to see the continuity between past and present racism and to recognise that the fight Atticus wages in the courtroom was still being fought in 1960.',
    examTip:
      'Distinguish between setting (1930s) and publication date (1960). Examiners reward candidates who discuss why Lee chose to set a Civil Rights era novel in the past, and who analyse the novel as both a historical portrait and a contemporary intervention.',
  },
  {
    title: 'Racial violence and lynching',
    icon: 'globe',
    content: [
      'Lynching — the extrajudicial killing of Black Americans by white mobs — was widespread in the South from the 1880s through the 1950s. Between 1877 and 1950, more than 4,000 Black people were lynched in the United States, the vast majority in the former Confederate states. Alabama was one of the worst-affected states.',
      'Lynchings were often public spectacles. White families attended, photographs were taken and distributed, and local law enforcement frequently participated or looked away. The threat of lynching was used to enforce racial subordination: any Black person who challenged white authority — by voting, by succeeding economically, by showing insufficient deference — could be targeted.',
      "Lee dramatises this directly through the lynch mob scene (Chapter 15), in which a group of Maycomb men gather outside the jail intending to seize Tom Robinson before his trial. The mob is dispersed only by Scout's innocent conversation with Mr Cunningham. Lee uses this scene to show that ordinary, decent people can participate in collective violence — and that breaking the anonymity of the mob by addressing one man as an individual is the only way to stop them.",
    ],
    keyLink:
      "The threat of lynching hangs over the entire novel. Tom Robinson's trial is in some sense a legalised alternative to lynching: the outcome is predetermined, and the process exists to give injustice the appearance of law. Lee shows that the courtroom and the lynch mob serve the same function.",
    examTip:
      'Reference specific historical details about lynching. Examiners expect candidates to treat it as a documented reality, not a literary invention. Link the lynch mob scene to the trial to argue that Lee presents legal injustice and mob violence as two forms of the same system.',
  },
]

const ICON_MAP = {
  clock: Clock,
  globe: Globe,
  users: Users,
}

/* ── Page ───────────────────────────────────────────────────────────────── */

export default async function ToKillAMockingbirdContextPage() {
  const board = await getServerBoard()
  const allowedBoards = ['edexcel-igcse']
  if (board && !allowedBoards.includes(board)) {
    redirect('/revision/texts')
  }

  return (
    <div className="space-y-10 pb-16">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'Revision', url: 'https://theenglishhub.app/revision' },
          { name: 'Set Texts', url: 'https://theenglishhub.app/revision/texts' },
          {
            name: 'To Kill a Mockingbird',
            url: 'https://theenglishhub.app/revision/texts/to-kill-a-mockingbird',
          },
          {
            name: 'Context',
            url: 'https://theenglishhub.app/revision/texts/to-kill-a-mockingbird/context',
          },
        ]}
      />
      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-blue-500/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/5 blur-3xl" />
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
            Historical &amp; Social Context
          </h1>
          <p className="mt-2 text-body-lg text-muted-foreground">
            To Kill a Mockingbird by Harper Lee
          </p>
          <p className="mt-4 max-w-2xl text-body-md text-muted-foreground">
            The essential background you need for the exam: 1930s Alabama, Jim Crow laws, the Great
            Depression, Harper Lee&apos;s life and the Scottsboro Boys trial.
          </p>
        </div>
      </section>

      {/* Context sections */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <Clock className="size-5 text-blue-400" />
          <h2 className="text-heading-lg font-heading text-foreground">Context</h2>
        </div>
        <div className="space-y-6">
          {SECTIONS.map((s) => {
            const Icon = ICON_MAP[s.icon]
            return (
              <Card key={s.title}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex size-9 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="size-4 text-primary" />
                    </div>
                    <CardTitle className="text-heading-md font-heading">{s.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-5">
                  <div className="space-y-3">
                    {s.content.map((para, i) => (
                      <p key={i} className="text-body-sm text-muted-foreground">
                        {para}
                      </p>
                    ))}
                  </div>
                  <div>
                    <h3 className="mb-1 text-sm font-semibold text-foreground">Link to the text</h3>
                    <p className="text-body-sm text-muted-foreground">{s.keyLink}</p>
                  </div>
                  <div className="rounded-xl border border-primary/20 bg-primary/5 p-4">
                    <div className="flex items-center gap-2 mb-1.5">
                      <Quote className="size-3.5 text-primary" />
                      <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                        Exam tip
                      </p>
                    </div>
                    <p className="text-body-sm text-muted-foreground">{s.examTip}</p>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      {/* Navigation */}
      <section className="flex flex-wrap gap-3">
        <Button
          variant="outline"
          size="sm"
          render={<Link href="/revision/texts/to-kill-a-mockingbird/characters" />}
        >
          Characters <ArrowRight className="size-3.5" />
        </Button>
        <Button
          variant="outline"
          size="sm"
          render={<Link href="/revision/texts/to-kill-a-mockingbird/themes" />}
        >
          Themes <ArrowRight className="size-3.5" />
        </Button>
        <Button
          variant="outline"
          size="sm"
          render={<Link href="/revision/texts/to-kill-a-mockingbird/key-quotes" />}
        >
          Key quotes <ArrowRight className="size-3.5" />
        </Button>
      </section>

      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
        Short quotations reproduced under the fair dealing provision of the Copyright, Designs and
        Patents Act 1988 for criticism and review. Full text available from your school or local
        library.
      </p>
    </div>
  )
}
