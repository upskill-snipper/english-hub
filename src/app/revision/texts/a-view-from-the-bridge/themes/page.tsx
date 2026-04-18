import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  Drama,
  Lightbulb,
  Quote,
  Sparkles,
} from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { getServerBoard } from '@/lib/board/get-server-board'

export const metadata: Metadata = {
  title: 'A View from the Bridge — Themes | The English Hub',
  description:
    'Detailed theme analysis for A View from the Bridge by Arthur Miller: Justice vs Law, Masculinity, Immigration, Betrayal, Love and The American Dream.',
  alternates: {
    canonical:
      'https://theenglishhub.app/revision/texts/a-view-from-the-bridge/themes',
  },
}

/* ── Theme data ────────────────────────────────────────────────────────── */

type ThemeData = {
  title: string
  overview: string
  howMillerPresentsIt: string
  keyQuotes: { text: string; speaker: string; analysis: string }[]
  contextLink: string
  examTip: string
}

const THEMES: ThemeData[] = [
  {
    title: 'Justice versus law',
    overview:
      'The play stages a collision between two systems of justice: American law, represented by Alfieri, and the older Sicilian honour code, represented by Marco. Eddie exists between them, invoking community codes when they suit him and the law when he feels powerless. Miller shows that neither system alone is adequate: the law cannot address Eddie\'s feelings, and the honour code cannot prevent his death.',
    howMillerPresentsIt:
      'Miller uses Alfieri as the voice of the law throughout. Alfieri repeatedly tells Eddie that the law cannot help him, that there is "no legal question" in his situation. When Eddie calls Immigration, he turns to the law as a weapon — but the community judges him by the older code. Marco\'s accusation and the final knife fight represent the honour code\'s verdict. Miller places the audience in Alfieri\'s position: watching, understanding, unable to intervene.',
    keyQuotes: [
      {
        text: '"Most of the time now we settle for half, and I like it better."',
        speaker: 'Alfieri — opening monologue',
        analysis:
          'The play\'s thesis on compromise. Miller defines the law as civilisation\'s willingness to accept imperfect justice, and Eddie as the man who refuses to.',
      },
      {
        text: '"In my country he would be dead now."',
        speaker: 'Marco — Act 2',
        analysis:
          'Marco invokes a justice system that is older, simpler and more violent than American law. Miller shows that the two systems cannot coexist.',
      },
      {
        text: '"The law is only a word for what has a right to happen."',
        speaker: 'Alfieri — Act 2',
        analysis:
          'Alfieri acknowledges the law\'s limitations. Miller uses this admission to validate Marco\'s position even as the play refuses to endorse its violence.',
      },
    ],
    contextLink:
      'Miller was writing during the McCarthy era, when the government pressured citizens to inform on their neighbours. The play\'s treatment of informing — Eddie\'s phone call — parallels the HUAC hearings, where "naming names" destroyed careers and friendships. Miller himself refused to inform.',
    examTip:
      'This is the play\'s most distinctive theme and the safest to lead with. Examiners reward candidates who compare the two justice systems structurally, not just thematically, and who link Eddie\'s phone call to Miller\'s own experience with McCarthyism.',
  },
  {
    title: 'Masculinity and honour',
    overview:
      'Eddie clings to a rigid code of manhood that equates masculinity with physical strength, heterosexuality and authority over women. He reads Rodolpho\'s cooking, singing and blond hair as evidence of effeminacy, and his contempt is fuelled by his own suppressed feelings. Miller uses Eddie\'s narrow definition of masculinity to expose how fragile male identity becomes when it has nothing but contempt to defend it.',
    howMillerPresentsIt:
      'Miller tests masculinity through physical confrontation. The boxing match, the chair-lifting scene and the final knife fight are all contests where men assert their status through strength. Eddie\'s forced kiss of Rodolpho is simultaneously an assertion of dominance, an exposure of Rodolpho and — unconsciously — a revelation of Eddie\'s own confused desires. Miller makes the body the language of power.',
    keyQuotes: [
      {
        text: '"I want my name!"',
        speaker: 'Eddie — Act 2',
        analysis:
          'Eddie demands the return of his reputation — the only form of masculine capital he has. Miller shows that honour, once lost, cannot be reclaimed by force.',
      },
      {
        text: '"He\'s like a weird... he ain\'t right."',
        speaker: 'Eddie on Rodolpho — Act 1',
        analysis:
          'Eddie cannot articulate his objection because it is not really about Rodolpho. Miller uses Eddie\'s inarticulate hostility to show that prejudice fills the space where self-knowledge should be.',
      },
      {
        text: '"Paper Doll they call him. Blondie."',
        speaker: 'Eddie — Act 1',
        analysis:
          'Eddie feminises Rodolpho through nicknames. Miller shows how language is used to police gender boundaries and to disguise jealousy as concern.',
      },
    ],
    contextLink:
      'The Italian-American dockworker community of the 1950s prized traditional masculinity: physical labour, heterosexuality, authority within the family. Homosexuality was criminalised and deeply stigmatised. Eddie\'s attack on Rodolpho\'s masculinity reflects real cultural anxieties about gender nonconformity.',
    examTip:
      'Discuss masculinity as a performance. Examiners value candidates who show how Miller uses physical staging — the boxing, the kiss, the chair lift — to make masculinity visible as a set of performed behaviours rather than natural attributes.',
  },
  {
    title: 'Immigration and the American Dream',
    overview:
      'Set among illegal Italian immigrants on the Brooklyn waterfront, the play examines what America offers and what it takes. Marco comes to feed his starving family; Rodolpho comes for a new life. Both are promised the American Dream and both are betrayed — Marco by Eddie\'s phone call, Rodolpho by the system that makes his status dependent on marriage. Miller shows that immigration is not a simple journey to freedom but a transaction with hidden costs.',
    howMillerPresentsIt:
      'Miller uses the cousins\' arrival as the inciting event. Their illegal status makes them vulnerable: they depend on Eddie\'s hospitality and silence, which gives him power over them. When Eddie betrays them, the play exposes the precariousness of immigrant life. Marco\'s arrest — in front of his family\'s only breadwinner — is Miller\'s sharpest image of the American Dream\'s failure.',
    keyQuotes: [
      {
        text: '"You can quicker get back a million dollars that was stole than a word that you gave away."',
        speaker: 'Eddie — Act 1',
        analysis:
          'Eddie defines the community\'s code of silence about immigrants. Miller uses the line to establish the standard Eddie will later violate.',
      },
      {
        text: '"Marco goes around shakin\' hands."',
        speaker: 'Louis — Act 2',
        analysis:
          'The community learns of Eddie\'s betrayal. Miller shows that in Red Hook, information travels through handshakes and glances, not formal announcements.',
      },
    ],
    contextLink:
      'Italian immigration to America peaked in the early 20th century. By the 1950s, established Italian-American communities operated as tight networks with unwritten codes of loyalty. Illegal immigration was common and openly tolerated, provided no one broke silence. The Immigration and Nationality Act of 1952 tightened restrictions.',
    examTip:
      'Link immigration to the American Dream. Examiners reward candidates who discuss how Miller uses Marco and Rodolpho to show two different immigrant experiences and who connect Eddie\'s phone call to the play\'s broader argument about loyalty and community.',
  },
  {
    title: 'Betrayal',
    overview:
      'Eddie\'s phone call to the Immigration Bureau is the play\'s central act of betrayal and the moment from which there is no return. It violates the community\'s most sacred code — silence about illegal immigrants — and it destroys Eddie\'s name, his family and ultimately his life. Miller structures the play so that the audience sees the betrayal coming long before it happens, creating an agonising sense of dramatic irony.',
    howMillerPresentsIt:
      'Miller uses Alfieri\'s narration to foreshadow the betrayal from the opening monologue. The audience knows Eddie will cross a line; the tension lies in watching him approach it. The phone call itself is staged starkly — Eddie alone in a phone booth, a glowing light, the mechanical act of dialling — making it feel both intimate and irreversible. After the call, Miller accelerates the action: arrest, accusation, death.',
    keyQuotes: [
      {
        text: '"He\'s gonna take that back."',
        speaker: 'Eddie — Act 2, after Marco spits in his face',
        analysis:
          'Eddie demands that Marco retract the public accusation. Miller shows that Eddie still believes he can control his reputation even after destroying it.',
      },
      {
        text: '"His eyes were like tunnels."',
        speaker: 'Alfieri — Act 1',
        analysis:
          'Alfieri sees Eddie\'s fixation narrowing his vision. Miller uses the metaphor to show that obsession eliminates the ability to see consequences.',
      },
    ],
    contextLink:
      'Miller\'s own refusal to name names before the House Un-American Activities Committee in 1956 gives this theme personal urgency. Eddie\'s phone call parallels the act of informing that Miller witnessed colleagues perform under McCarthyism. The play asks whether any cause can justify betraying your community.',
    examTip:
      'Analyse the phone call as a dramatic turning point. Examiners reward candidates who discuss how Miller stages the moment — lighting, isolation, Alfieri\'s commentary — and who link it to the McCarthy context.',
  },
  {
    title: 'Love and obsession',
    overview:
      'Eddie\'s feelings for Catherine are the unspeakable centre of the play. He loves her as a father, but his love has mutated into something he cannot name and will not acknowledge. Alfieri sees it, Beatrice sees it, and Eddie refuses to see it. Miller uses this gap between what is true and what can be said to generate the play\'s tragic energy. The tragedy is not that Eddie desires Catherine but that he cannot admit it, and his denial destroys everyone around him.',
    howMillerPresentsIt:
      'Miller communicates Eddie\'s obsession through behaviour rather than dialogue. He watches Catherine walk, comments on her skirts, objects to her high heels and cannot let her out of his sight. The two kisses — one to Catherine, one to Rodolpho — are physical eruptions of feelings that language cannot contain. Miller never has Eddie confess his desires; instead, the audience reads his body language and draws the conclusion he refuses to.',
    keyQuotes: [
      {
        text: '"She\'s a baby."',
        speaker: 'Eddie — Act 1',
        analysis:
          'Eddie\'s repeated refusal to see Catherine as adult. Miller makes clear that keeping her a child is the only way Eddie can justify his possessiveness.',
      },
      {
        text: '"You want somethin\' else, Eddie, and you can never have her."',
        speaker: 'Beatrice — Act 2',
        analysis:
          'The play\'s most explosive line. Miller gives Beatrice the truth that Eddie, Alfieri and the audience have all known but no one has spoken aloud.',
      },
      {
        text: '"He allowed himself to be wholly known."',
        speaker: 'Alfieri — closing monologue',
        analysis:
          'Alfieri\'s final assessment suggests that Eddie\'s destruction made his inner life fully visible. Miller turns self-destruction into a terrible form of honesty.',
      },
    ],
    contextLink:
      'In the 1950s, incestuous desire was an absolute cultural taboo, even more unspeakable than it is today. Miller knew he was placing something profoundly disturbing at the centre of his play. Eddie\'s inability to name his feelings reflects a society that had no language for them.',
    examTip:
      'Discuss the physical staging of Eddie\'s feelings. Examiners value candidates who analyse how Miller uses stage directions, body language and the two kisses to communicate what dialogue cannot, rather than simply identifying the obsession.',
  },
  {
    title: 'The American Dream',
    overview:
      'The play tests the American Dream from two angles. For Marco, the dream is economic survival: earning enough money to feed his starving family in Sicily. For Rodolpho, it is a new identity: becoming American, wearing stylish clothes, driving a motorbike. Both versions fail. Marco is arrested and deported. Rodolpho can stay only through marriage to Catherine, making his dream dependent on another person\'s tragedy.',
    howMillerPresentsIt:
      'Miller uses the contrast between Marco and Rodolpho to show that the American Dream means different things to different immigrants. Marco\'s dream is selfless — he works for his family, not himself — while Rodolpho\'s is personal and aspirational. Eddie weaponises this difference, accusing Rodolpho of pursuing Catherine for a green card rather than love. Miller leaves the audience uncertain, creating moral complexity rather than easy answers.',
    keyQuotes: [
      {
        text: '"He degraded my brother. My blood."',
        speaker: 'Marco — Act 2',
        analysis:
          'Marco\'s dream — providing for his family — is destroyed by Eddie\'s betrayal. Miller shows that the American Dream depends on community trust, which one phone call can shatter.',
      },
      {
        text: '"Most of the time now we settle for half."',
        speaker: 'Alfieri — opening',
        analysis:
          'Alfieri defines the American Dream as compromise: accepting imperfect outcomes in exchange for order. Miller suggests that this settling is itself a kind of loss.',
      },
    ],
    contextLink:
      'The post-war American Dream promised prosperity and freedom to anyone willing to work hard. For immigrants, the promise was especially powerful — and especially fragile. Miller, himself the son of immigrants, understood both the attraction and the vulnerability.',
    examTip:
      'Compare Marco\'s and Rodolpho\'s different dreams. Examiners value candidates who show how Miller uses two immigrant experiences to complicate the American Dream rather than simply endorse or reject it.',
  },
]

/* ── Page ───────────────────────────────────────────────────────────────── */

export default async function AViewFromTheBridgeThemesPage() {
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
          <Button variant="ghost" size="sm" className="mb-4 -ml-2 text-muted-foreground" render={<Link href="/revision/texts/a-view-from-the-bridge" />}>
            <ArrowLeft className="size-3.5" /> Back to A View from the Bridge
          </Button>
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge variant="secondary"><Drama className="mr-1 size-3 text-violet-400" />Modern Text — Play</Badge>
            <Badge variant="outline" className="text-muted-foreground"><Sparkles className="mr-1 size-3" />Edexcel IGCSE</Badge>
          </div>
          <h1 className="text-display-sm font-heading text-foreground sm:text-display">Theme Analysis</h1>
          <p className="mt-2 text-body-lg text-muted-foreground">A View from the Bridge by Arthur Miller</p>
          <p className="mt-4 max-w-2xl text-body-md text-muted-foreground">
            Six major themes explored in depth with Miller&apos;s methods, contextual links and examiner guidance. All quotes are 15 words or fewer.
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
              <CardHeader><CardTitle className="text-heading-md font-heading">{t.title}</CardTitle></CardHeader>
              <CardContent className="space-y-5">
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-foreground">Overview</h3>
                  <p className="text-body-sm text-muted-foreground">{t.overview}</p>
                </div>
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-foreground">How Miller presents it</h3>
                  <p className="text-body-sm text-muted-foreground">{t.howMillerPresentsIt}</p>
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
        <Button variant="outline" size="sm" render={<Link href="/revision/texts/a-view-from-the-bridge/characters" />}>Characters <ArrowRight className="size-3.5" /></Button>
        <Button variant="outline" size="sm" render={<Link href="/revision/texts/a-view-from-the-bridge/key-quotes" />}>Key quotes <ArrowRight className="size-3.5" /></Button>
        <Button variant="outline" size="sm" render={<Link href="/revision/texts/a-view-from-the-bridge/context" />}>Context <ArrowRight className="size-3.5" /></Button>
      </section>

      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
        Short quotations reproduced under the fair dealing provision of the Copyright, Designs and Patents Act 1988 for criticism and review. Full text available from your school or local library.
      </p>
    </div>
  )
}
