import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Drama,
  Globe,
  Quote,
  Sparkles,
  Users,
} from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { getServerBoard } from '@/lib/board/get-server-board'

export const metadata: Metadata = {
  title: 'A View from the Bridge — Historical Context | The English Hub',
  description:
    'Historical and social context for A View from the Bridge by Arthur Miller: 1950s Red Hook Brooklyn, Italian immigration, McCarthyism and Greek tragedy.',
  alternates: {
    canonical:
      'https://theenglishhub.app/revision/texts/a-view-from-the-bridge/context',
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
    title: '1950s Red Hook, Brooklyn',
    icon: 'globe',
    content: [
      'Red Hook was a dockside neighbourhood on the western edge of Brooklyn, dominated by the shipping industry and its longshoremen. In the 1950s it was a tight-knit, working-class, predominantly Italian-American community where families had lived for generations and where the rhythms of daily life were shaped by the waterfront.',
      'The docks were controlled by powerful unions, and work was distributed through a "shape-up" system where men gathered each morning hoping to be selected for the day. This created both solidarity and competition. Corruption was endemic — the waterfront was controlled partly by organised crime — and loyalty within the community was a matter of survival as well as honour.',
      'Housing was cramped, families lived on top of each other and privacy was rare. Eddie\'s apartment, where much of the action takes place, is a pressure cooker: small enough that every emotion is visible and every conversation audible. Miller uses the physical setting to create the claustrophobic intensity the tragedy requires.',
    ],
    keyLink:
      'Red Hook is not just a setting but a character. The community\'s unwritten codes of loyalty and silence — particularly around illegal immigration — are what Eddie violates when he makes his phone call. Miller uses the neighbourhood to show that justice operates differently in close communities than it does in courtrooms.',
    examTip:
      'Name Red Hook and describe it specifically. Examiners reward candidates who treat the setting as integral to the play\'s themes, not just background scenery. Connect the physical claustrophobia of the apartment to Eddie\'s psychological claustrophobia.',
  },
  {
    title: 'Italian immigration to America',
    icon: 'users',
    content: [
      'Italian immigration to America peaked between 1880 and 1920, when millions of people left southern Italy and Sicily — regions devastated by poverty, malaria and political instability — in search of work. By the 1950s, established Italian-American communities existed in every major American city, with Brooklyn\'s being among the largest and most cohesive.',
      'Illegal immigration from Italy continued after the formal quota systems of the 1920s and the Immigration and Nationality Act of 1952 restricted legal entry. Immigrants were smuggled into port cities and absorbed into existing communities. Harbouring illegals was common and openly tolerated, provided the community code of silence was maintained.',
      'The code of omerta — silence — was central to the culture Marco and Eddie share. Informing to the authorities was considered the worst possible betrayal: it endangered not just the individual but the entire network of families who depended on each other. Eddie\'s phone call violates this code absolutely, and the community\'s response — shunning, accusation, violence — is predictable within the cultural framework Miller establishes.',
    ],
    keyLink:
      'The play\'s immigration context explains why Eddie\'s phone call is the unforgivable sin. In a community built on mutual protection of illegal immigrants, informing is not just a personal betrayal but an attack on the collective. Miller uses this to give Eddie\'s action the weight of a taboo violation.',
    examTip:
      'Reference the code of omerta by name. Examiners value candidates who demonstrate understanding of the specific cultural values that Eddie violates, not just a general sense that "informing is wrong."',
  },
  {
    title: 'McCarthyism and naming names',
    icon: 'clock',
    content: [
      'The House Un-American Activities Committee (HUAC) was established in 1938 but reached its peak influence in the late 1940s and 1950s, when Senator Joseph McCarthy led a campaign to identify and blacklist suspected Communists in American public life. Artists, writers, filmmakers and academics were called before the committee and pressured to name colleagues who had attended Communist Party meetings.',
      'Arthur Miller was called before HUAC in 1956 — the same year the revised version of A View from the Bridge was published. He refused to name names and was found in contempt of Congress. Several of his friends and colleagues, including the director Elia Kazan, did cooperate with the committee, and the resulting betrayals destroyed friendships and careers.',
      'The parallel with Eddie\'s phone call is unmistakable. Both acts involve informing on people to a government agency, both destroy relationships and communities, and both raise the question of whether any principle can justify betraying the people who trust you. Miller said he did not write the play as a direct allegory of McCarthyism, but the connections are too precise to be accidental.',
    ],
    keyLink:
      'McCarthyism gives the play its political urgency. Eddie\'s phone call is not just a plot device but a dramatisation of the act that was tearing American intellectual life apart in the 1950s. Miller uses a working-class immigrant story to address a middle-class political crisis.',
    examTip:
      'Always link Eddie\'s phone call to McCarthyism. Examiners expect this contextual connection for Edexcel IGCSE. Name HUAC, explain what "naming names" meant, and show how Miller uses Eddie\'s betrayal to dramatise the moral costs of informing.',
  },
  {
    title: 'Greek tragedy and classical influences',
    icon: 'clock',
    content: [
      'Miller consciously modelled A View from the Bridge on Greek tragedy. Alfieri\'s opening monologue reaches back to Roman times and explicitly invokes the classical sense of fate. The play\'s tight structure — a single main setting, a compressed timeline, an inevitable ending — mirrors the unities of time, place and action that Aristotle prescribed for tragedy.',
      'In Greek tragedy, the protagonist is a figure of stature who is destroyed by a flaw he cannot see: hubris (excessive pride), hamartia (a fatal error of judgment) or ate (divinely sent blindness). Eddie fits all three: his pride prevents him from seeing his own desires, his error is the phone call, and his blindness to his feelings is the engine of his destruction.',
      'Alfieri functions as the chorus of Greek drama: a commentator who stands outside the action, addresses the audience directly and provides the moral framework within which the tragedy is understood. His inability to prevent the catastrophe is central to the form — the chorus sees everything and changes nothing, forcing the audience to ask why tragedy happens rather than whether it can be stopped.',
      'The play\'s ending — Eddie\'s death at Marco\'s hands — echoes the violence of Greek tragedy, where the protagonist\'s destruction is both punishment and revelation. Miller insists that working-class characters deserve the same tragic dignity that Sophocles gave to kings.',
    ],
    keyLink:
      'The Greek tragedy structure gives the play its formal power. Without it, Eddie\'s story would be a domestic dispute. With it, his story becomes universal: a man destroyed by feelings he cannot name, in a world that offers no mercy for self-ignorance.',
    examTip:
      'Reference specific Greek tragedy conventions: the chorus (Alfieri), the tragic flaw (Eddie\'s blindness), the unities (time, place, action). Examiners reward candidates who show how Miller adapts classical form to a modern working-class setting.',
  },
  {
    title: 'Miller\'s own experience and artistic vision',
    icon: 'users',
    content: [
      'Arthur Miller (1915-2005) was the son of Polish-Jewish immigrants and grew up in Brooklyn during the Depression. His family\'s experience of economic hardship and social marginality shaped his lifelong commitment to writing about ordinary people with dignity and seriousness.',
      'Miller heard the story that became A View from the Bridge from a lawyer friend who worked in the Red Hook docks. The real incident involved a longshoreman who informed on two of his wife\'s relatives because one of them was having a relationship with his niece. Miller was haunted by the story and wrote the first version as a one-act play in 1955, before expanding it to two acts in 1956.',
      'Miller\'s artistic vision was shaped by his belief that tragedy is not the exclusive property of kings and nobles. He argued in his 1949 essay "Tragedy and the Common Man" that ordinary people can achieve tragic stature when they are willing to lay down their lives rather than surrender their sense of personal dignity. Eddie Carbone is the fullest expression of this argument.',
      'Miller\'s marriage to Marilyn Monroe (1956-1961) and his HUAC testimony happened during the same period as the play\'s composition. His personal life was turbulent, and the themes of desire, betrayal and public exposure in the play resonate with his own experience, though he always denied direct autobiography.',
    ],
    keyLink:
      'Miller\'s background explains why he insists on Eddie\'s dignity even as he condemns Eddie\'s actions. The play is an argument that working-class lives contain the same moral complexity as royal ones, and that the waterfront deserves the same theatrical gravity as the palace.',
    examTip:
      'Reference "Tragedy and the Common Man" by name. Examiners value candidates who can discuss Miller\'s theoretical commitment to democratic tragedy and who connect it to the specific choices he makes in the play.',
  },
]

const ICON_MAP = {
  clock: Clock,
  globe: Globe,
  users: Users,
}

/* ── Page ───────────────────────────────────────────────────────────────── */

export default async function AViewFromTheBridgeContextPage() {
  const board = await getServerBoard()
  const allowedBoards = ['edexcel-igcse']
  if (board && !allowedBoards.includes(board)) {
    redirect('/revision/texts')
  }

  return (
    <div className="space-y-10 pb-16">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-blue-500/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-violet-500/5 blur-3xl" />
        <div className="relative">
          <Button variant="ghost" size="sm" className="mb-4 -ml-2 text-muted-foreground" render={<Link href="/revision/texts/a-view-from-the-bridge" />}>
            <ArrowLeft className="size-3.5" /> Back to A View from the Bridge
          </Button>
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge variant="secondary"><Drama className="mr-1 size-3 text-violet-400" />Modern Text — Play</Badge>
            <Badge variant="outline" className="text-muted-foreground"><Sparkles className="mr-1 size-3" />Edexcel IGCSE</Badge>
          </div>
          <h1 className="text-display-sm font-heading text-foreground sm:text-display">Historical &amp; Social Context</h1>
          <p className="mt-2 text-body-lg text-muted-foreground">A View from the Bridge by Arthur Miller</p>
          <p className="mt-4 max-w-2xl text-body-md text-muted-foreground">
            The essential background you need for the exam: 1950s Red Hook Brooklyn, Italian immigration, McCarthyism, Greek tragedy and Miller&apos;s own life.
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
                      <p key={i} className="text-body-sm text-muted-foreground">{para}</p>
                    ))}
                  </div>
                  <div>
                    <h3 className="mb-1 text-sm font-semibold text-foreground">Link to the text</h3>
                    <p className="text-body-sm text-muted-foreground">{s.keyLink}</p>
                  </div>
                  <div className="rounded-xl border border-primary/20 bg-primary/5 p-4">
                    <div className="flex items-center gap-2 mb-1.5">
                      <Quote className="size-3.5 text-primary" />
                      <p className="text-xs font-semibold uppercase tracking-wide text-primary">Exam tip</p>
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
        <Button variant="outline" size="sm" render={<Link href="/revision/texts/a-view-from-the-bridge/characters" />}>Characters <ArrowRight className="size-3.5" /></Button>
        <Button variant="outline" size="sm" render={<Link href="/revision/texts/a-view-from-the-bridge/themes" />}>Themes <ArrowRight className="size-3.5" /></Button>
        <Button variant="outline" size="sm" render={<Link href="/revision/texts/a-view-from-the-bridge/key-quotes" />}>Key quotes <ArrowRight className="size-3.5" /></Button>
      </section>

      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
        Short quotations reproduced under the fair dealing provision of the Copyright, Designs and Patents Act 1988 for criticism and review. Full text available from your school or local library.
      </p>
    </div>
  )
}
