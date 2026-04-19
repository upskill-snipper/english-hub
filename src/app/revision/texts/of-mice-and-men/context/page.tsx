import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Clock,
  Globe,
  Quote,
  Sparkles,
  Users,
} from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { getServerBoard } from '@/lib/board/get-server-board'

import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
export const metadata: Metadata = {
  title: 'Of Mice and Men — Historical Context | The English Hub',
  description:
    'Historical and social context for Of Mice and Men by John Steinbeck: the Great Depression, migrant workers, racial segregation, women\'s roles and Steinbeck\'s background.',
  alternates: {
    canonical:
      'https://theenglishhub.app/revision/texts/of-mice-and-men/context',
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
    title: 'The Great Depression',
    icon: 'clock',
    content: [
      'The Wall Street Crash of October 1929 triggered the worst economic crisis in modern American history. Banks collapsed, businesses closed and unemployment soared from 3% to 25% by 1933. Millions of Americans lost their savings, their homes and their farms overnight.',
      'In rural California, where Steinbeck grew up and set Of Mice and Men, the Depression hit farming communities with particular brutality. Crop prices fell, land was foreclosed and tens of thousands of workers were left with nothing but the clothes they wore and the hope of finding seasonal work on the ranches of the Salinas Valley.',
      'The Depression did not affect all Americans equally. Those already at the bottom — migrant workers, racial minorities, the disabled, the elderly — suffered most and recovered last. Steinbeck wrote Of Mice and Men in 1937, at the height of the crisis, as a deliberate act of witness.',
    ],
    keyLink:
      'The economic desperation of the Depression is the engine of the novella\'s plot. Without it, the dream of owning land would be achievable. With it, the dream becomes both essential for survival and impossible to realise.',
    examTip:
      'Always name the Wall Street Crash and date it to 1929. Examiners reward specific historical knowledge, not vague references to "hard times." Connect the Depression directly to the characters\' powerlessness.',
  },
  {
    title: 'Migrant workers and itinerant labour',
    icon: 'users',
    content: [
      'The Dust Bowl of the early 1930s devastated the Great Plains, driving waves of displaced farmers — often called "Okies" — westward to California. They joined an existing population of migrant labourers who moved from ranch to ranch following the harvest cycle: barley, lettuce, cotton, fruit.',
      'Migrant workers had no job security, no unions, no contracts and no legal protections. They were hired by the day or the week, paid just enough to survive and discarded the moment the work was done. The system was designed to keep labour cheap and workers atomised — men who travelled together, as George and Lennie do, were unusual and treated with suspicion.',
      'Living conditions were harsh. Workers slept in bunkhouses on narrow beds, owned almost nothing and spent their wages in town on Saturday nights. There was no pension, no sickness pay and no safety net. When a worker was too old, too injured or too sick to work, he was simply replaced.',
    ],
    keyLink:
      'The itinerant labour system explains almost every element of the novella: the loneliness, the fragility of the dream, the disposability of Candy and his dog, the Boss\'s suspicion of friendship, and the men\'s reliance on cat houses and gambling for human contact.',
    examTip:
      'Use the term "itinerant" or "migrant labour" in your essays. Examiners reward precise vocabulary. Show how Steinbeck uses the ranch as a microcosm of 1930s American capitalism.',
  },
  {
    title: 'Racial segregation in 1930s America',
    icon: 'globe',
    content: [
      'Racial segregation was legal and widespread in the United States during the 1930s. The Jim Crow laws, enacted in the late 19th century, mandated separation of Black and white Americans in schools, transport, churches, hospitals and workplaces. In California, segregation was enforced by custom even where specific statutes did not exist.',
      'Crooks sleeps in the harness room not by choice but by the unwritten rules of the ranch. He is excluded from card games, from the bunkhouse and from the social life that gives the other men what little companionship they have. His books and his copy of the California civil code are his only protection.',
      'Lynching was a real and present threat. Between 1882 and 1968, nearly 5,000 recorded lynchings took place in the United States, the vast majority of Black men. When Curley\'s wife threatens Crooks with being "strung up on a tree," she is invoking a genuine, documented terror. Steinbeck includes this moment to show how even the most powerless white character can weaponise racial violence.',
    ],
    keyLink:
      'Crooks\'s isolation is Steinbeck\'s most direct critique of American racism. His segregation mirrors the loneliness of the other characters but is enforced by law and violence rather than economics alone. His brief hope and rapid retreat in Chapter 4 mirror the structure of the American Dream itself.',
    examTip:
      'Reference the Jim Crow laws by name. Examiners expect candidates studying for Edexcel IGCSE to demonstrate specific contextual knowledge. Discuss how Crooks\'s physical segregation in the harness room symbolises his social exclusion.',
  },
  {
    title: 'Women\'s roles in 1930s America',
    icon: 'users',
    content: [
      'Women in 1930s rural America had severely limited economic and social options. They could not easily own property, access credit or find professional employment outside teaching and nursing. Marriage was often the only route to financial security, and divorce carried enormous social stigma.',
      'Curley\'s wife is never given a name — she is defined entirely by her relationship to her husband. This is not Steinbeck\'s carelessness but his critique: in the world of the novella, a woman exists only as someone\'s daughter or someone\'s wife. Her dream of Hollywood represents the only alternative narrative available to her, and it was crushed by a man who promised her stardom and never wrote.',
      'The men on the ranch view Curley\'s wife as either a sexual temptation or a threat — "jail bait," George calls her. Steinbeck initially presents her through the men\'s eyes, then gradually reveals her humanity, forcing the reader to confront their own assumptions. Her death, like Lennie\'s, is a consequence of the social structures that trapped her.',
    ],
    keyLink:
      'Curley\'s wife\'s namelessness is one of the novella\'s most discussed features. Steinbeck uses it to show how the patriarchal system of the 1930s erased women\'s identities. Her loneliness connects her to every other isolated character, but her gender makes her isolation uniquely invisible.',
    examTip:
      'Discuss Curley\'s wife\'s namelessness as a deliberate structural choice, not an oversight. Examiners reward candidates who analyse Steinbeck\'s presentation of gender alongside race and class, showing how multiple forms of prejudice intersect.',
  },
  {
    title: 'Attitudes to disability',
    icon: 'users',
    content: [
      'In the 1930s, learning disabilities were poorly understood and heavily stigmatised. People with intellectual disabilities were often institutionalised in state hospitals where conditions were harsh and abusive. Those who remained in the community were frequently exploited for cheap labour or treated as objects of pity and contempt.',
      'Lennie\'s condition is never clinically named in the novella, but Steinbeck makes clear that he has a significant intellectual disability. He cannot remember instructions, cannot control his strength and cannot understand the consequences of his actions. Despite this, he is capable of love, loyalty and joy — qualities the supposedly "normal" characters often lack.',
      'Steinbeck presents Lennie with consistent sympathy, challenging the ableism of his era. George\'s care for Lennie is presented as heroic, not shameful, and the other workers\' casual cruelty toward those they consider "weak" is implicitly condemned. The shooting of Candy\'s dog — useless, old, unwanted — is Steinbeck\'s clearest parallel to the treatment of disabled people in a system that values only productive labour.',
    ],
    keyLink:
      'Lennie\'s disability makes him vulnerable to a society that has no structures of care. Steinbeck uses him to argue that a society that shoots its weakest members — whether dogs or men — is morally bankrupt.',
    examTip:
      'Avoid the word "retarded" or other outdated terms in your essays. Use "learning disability" or "intellectual disability." Examiners reward sensitive, precise language and analysis of how Steinbeck challenges 1930s attitudes.',
  },
  {
    title: 'Steinbeck\'s background and literary context',
    icon: 'clock',
    content: [
      'John Steinbeck (1902-1968) was born in Salinas, California, the setting for Of Mice and Men. He worked as a farm labourer and ranch hand in his youth, giving him first-hand knowledge of the migrant workers he would later write about. His sympathy for the dispossessed was grounded in personal experience, not abstract politics.',
      'Steinbeck was influenced by naturalism — the literary belief that environment, not individual character, determines human destiny. This is visible in the novella\'s structure: the characters are shaped and ultimately destroyed by forces larger than themselves. He was also sympathetic to socialist ideas about workers\' solidarity, though he never joined a political party.',
      'The title Of Mice and Men is taken from Robert Burns\'s 1785 poem "To a Mouse": "The best-laid schemes o\' mice an\' men / Gang aft agley" (often go awry). The allusion establishes the novella\'s central irony: planning is futile when the system is designed to crush the planner. Steinbeck wrote the novella in a form he called a "play-novelette" — designed to be easily adapted for the stage — which explains its tight, six-chapter structure, limited settings and dialogue-heavy scenes.',
      'Of Mice and Men was published in 1937 and adapted for the stage the same year. It won the New York Drama Critics\' Circle Award. Steinbeck went on to write The Grapes of Wrath (1939) and won the Nobel Prize in Literature in 1962.',
    ],
    keyLink:
      'Steinbeck\'s personal experience as a ranch worker gives the novella its authenticity. His naturalist philosophy explains its deterministic structure. His socialist sympathies explain its compassion for the powerless.',
    examTip:
      'Reference the Burns poem by name and explain its significance. Examiners reward candidates who show understanding of why Steinbeck chose that title and how it frames the novella\'s argument about the futility of individual ambition under capitalism.',
  },
]

const ICON_MAP = {
  clock: Clock,
  globe: Globe,
  users: Users,
}

/* ── Page ───────────────────────────────────────────────────────────────── */

export default async function OfMiceAndMenContextPage() {
  const board = await getServerBoard()
  const allowedBoards = ['edexcel-igcse']
  if (board && !allowedBoards.includes(board)) {
    redirect('/revision/texts')
  }

  return (
    <div className="space-y-10 pb-16">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://theenglishhub.app" },
          { name: "Revision", url: "https://theenglishhub.app/revision" },
          { name: "Set Texts", url: "https://theenglishhub.app/revision/texts" },
          { name: "Of Mice and Men", url: "https://theenglishhub.app/revision/texts/of-mice-and-men" },
          { name: "Context", url: "https://theenglishhub.app/revision/texts/of-mice-and-men/context" },
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
            render={<Link href="/revision/texts/of-mice-and-men" />}
          >
            <ArrowLeft className="size-3.5" />
            Back to Of Mice and Men
          </Button>

          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge variant="secondary">
              <BookOpen className="mr-1 size-3 text-violet-400" />
              Modern Text — Novella
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
            Of Mice and Men by John Steinbeck
          </p>
          <p className="mt-4 max-w-2xl text-body-md text-muted-foreground">
            The essential background you need for the exam: the Great Depression,
            migrant labour, racial segregation, women&apos;s roles and Steinbeck&apos;s own life.
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
                  {/* Main content */}
                  <div className="space-y-3">
                    {s.content.map((para, i) => (
                      <p key={i} className="text-body-sm text-muted-foreground">
                        {para}
                      </p>
                    ))}
                  </div>

                  {/* Link to text */}
                  <div>
                    <h3 className="mb-1 text-sm font-semibold text-foreground">
                      Link to the text
                    </h3>
                    <p className="text-body-sm text-muted-foreground">{s.keyLink}</p>
                  </div>

                  {/* Exam tip */}
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
          render={<Link href="/revision/texts/of-mice-and-men/characters" />}
        >
          Characters
          <ArrowRight className="size-3.5" />
        </Button>
        <Button
          variant="outline"
          size="sm"
          render={<Link href="/revision/texts/of-mice-and-men/themes" />}
        >
          Themes
          <ArrowRight className="size-3.5" />
        </Button>
        <Button
          variant="outline"
          size="sm"
          render={<Link href="/revision/texts/of-mice-and-men/key-quotes" />}
        >
          Key quotes
          <ArrowRight className="size-3.5" />
        </Button>
      </section>

      {/* Copyright notice */}
      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
        Short quotations reproduced under the fair dealing provision of the Copyright,
        Designs and Patents Act 1988 for criticism and review. Full text available from
        your school or local library.
      </p>
    </div>
  )
}
