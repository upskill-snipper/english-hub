import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, BookOpen, FileText, Lightbulb } from 'lucide-react'

import { getServerBoard } from '@/lib/board/get-server-board'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
export const metadata: Metadata = {
  openGraph: {
    title: 'Animal Farm Essay Plans — GCSE Revision | The English Hub',
    description:
      'Five full essay plans for Animal Farm by George Orwell. Structured introductions, paragraph plans with quotes, and conclusions for GCSE English Literature.',
  },
  title: 'Animal Farm Essay Plans — GCSE Revision',
  description:
    'Five full essay plans for Animal Farm by George Orwell. Structured introductions, paragraph plans with quotes, and conclusions for GCSE English Literature.',
  alternates: {
    canonical: 'https://theenglishhub.app/revision/texts/animal-farm/essay-plans',
  },
}

/* ── Essay plan data ───────────────────────────────────────────────────── */

type Paragraph = {
  point: string
  evidence: string
  analysis: string
}

type EssayPlan = {
  number: number
  question: string
  thesisStatement: string
  introduction: string
  paragraphs: Paragraph[]
  conclusion: string
  examTip: string
}

const essayPlans: EssayPlan[] = [
  {
    number: 1,
    question:
      'How does Orwell use the character of Napoleon to explore the theme of power and corruption?',
    thesisStatement:
      'Orwell uses Napoleon to demonstrate that power, unchecked by democratic accountability, inevitably corrupts -- transforming a revolutionary leader into an oppressor indistinguishable from the regime he replaced.',
    introduction:
      'Begin by establishing that Animal Farm is a political allegory of the Russian Revolution. Note that Napoleon represents Stalin and that Orwell uses his character arc -- from quiet pig to walking, whip-carrying dictator -- to chart the corruption of revolutionary ideals. State your thesis: Napoleon shows how power corrupts absolutely when there are no checks on authority.',
    paragraphs: [
      {
        point: "Napoleon's early seizure of power through violence, not argument",
        evidence: 'He trains the puppies in secret and uses them to expel Snowball in Chapter 5.',
        analysis:
          'Orwell shows that Napoleon never wins a debate -- he simply eliminates his opponent. The dogs represent the secret police (NKVD). Power here is achieved through brute force, not intellectual merit, which Orwell presents as the defining feature of Stalinist leadership.',
      },
      {
        point: 'The systematic rewriting of the commandments as a marker of corruption',
        evidence: '"No animal shall sleep in a bed with sheets" -- altered from the original.',
        analysis:
          "Each altered commandment represents a new stage of Napoleon's corruption. Orwell uses the commandments as a structural motif -- their gradual erosion mirrors the gradual erosion of the revolution's principles. The fact that the animals cannot remember the originals shows how propaganda enables corruption.",
      },
      {
        point: "Napoleon's transformation into the very thing the revolution opposed",
        evidence: '"The creatures outside looked from pig to man, and from man to pig."',
        analysis:
          "The final image is Orwell's most devastating. Napoleon walks on two legs, carries a whip and dines with the farmers. The circular structure -- Manor Farm returns to its original name -- suggests that unchecked power does not just corrupt individuals but entire revolutions. Napoleon has become Mr Jones.",
      },
    ],
    conclusion:
      "Conclude by linking Napoleon's arc to Orwell's broader argument: that without democratic accountability, any ideology can be twisted to serve the powerful. Napoleon is not an aberration; he is the inevitable product of a system with no checks on authority. Orwell's warning is not against revolution itself but against the concentration of power in any form.",
    examTip:
      "For top marks, avoid simply narrating Napoleon's actions. Focus on HOW Orwell presents him -- through structural choices (circular narrative), literary devices (dramatic irony, the commandment motif) and allegorical parallels (Stalin). Always link back to Orwell's purpose.",
  },
  {
    number: 2,
    question: 'How does Orwell present the theme of language and propaganda in Animal Farm?',
    thesisStatement:
      "Orwell presents language as the most powerful weapon in the novel -- more dangerous than Napoleon's dogs because it controls what the animals can think, remember and believe.",
    introduction:
      'Open by noting that Orwell wrote "Politics and the English Language" in the same year as Animal Farm, arguing that corrupt language enables corrupt politics. In the novel, Squealer is the embodiment of this thesis: a character whose sole function is to turn lies into accepted truth. State your thesis: language is the primary mechanism of oppression on Animal Farm.',
    paragraphs: [
      {
        point: "Squealer's manipulation of language to justify privilege",
        evidence:
          '"Surely you do not want Jones back?" -- Squealer\'s repeated rhetorical question.',
        analysis:
          'Squealer never argues on the merits. He deflects every criticism by invoking the fear of Jones. This is a classic propaganda technique: replacing logical argument with emotional manipulation. Orwell shows that propaganda does not need to be convincing -- it only needs to make the alternative seem worse.',
      },
      {
        point: 'The reduction of ideology to slogans',
        evidence: '"Four legs good, two legs bad" -- the sheep\'s chant.',
        analysis:
          'Snowball reduces the Seven Commandments to a single slogan for the less intelligent animals. This simplification, however well-intentioned, destroys nuance and makes critical thought impossible. Orwell suggests that oversimplified language is inherently dangerous because it replaces understanding with repetition.',
      },
      {
        point: 'The physical rewriting of history',
        evidence: 'Squealer found at night with paint and a ladder beneath the barn wall.',
        analysis:
          "This image -- propaganda as a physical act -- is one of the novel's most powerful. Orwell makes visible what is usually invisible: the deliberate, manual alteration of truth. The scene bridges the abstract (ideological manipulation) and the concrete (paint on a wall), making the reader see propaganda as something that is done, not something that simply happens.",
      },
    ],
    conclusion:
      "Conclude by linking back to Orwell's wider concerns: that the corruption of language is both a symptom and a cause of political tyranny. In Animal Farm, the animals lose their freedom not when Napoleon takes power but when they lose the ability to describe their own oppression. Language is not just a tool of the powerful; it is the battlefield on which freedom is won or lost.",
    examTip:
      'This essay is stronger if you show progression. Start with early, subtle propaganda (Chapter 3) and build to the overt lies of Chapter 10. Examiners reward essays that track how a theme develops across the text.',
  },
  {
    number: 3,
    question: 'How does Orwell use Boxer to present ideas about loyalty and exploitation?',
    thesisStatement:
      "Through Boxer, Orwell presents loyalty as both the working class's greatest virtue and its most dangerous vulnerability -- admirable in itself but fatal when given to those who do not deserve it.",
    introduction:
      'Introduce Boxer as the novel\'s moral and emotional centre. Note that he represents the Soviet working class (proletariat) and that his two maxims -- "I will work harder" and "Napoleon is always right" -- encapsulate the tragedy of misplaced loyalty. State your thesis: Boxer shows how the powerful exploit the loyalty of the powerless.',
    paragraphs: [
      {
        point: "Boxer's selfless devotion as both admirable and dangerous",
        evidence: '"I will work harder" -- Boxer\'s personal maxim, repeated throughout.',
        analysis:
          "Orwell presents Boxer's work ethic with genuine admiration -- his harvests are enormous, his effort unstinting. But the repetition of this maxim becomes increasingly painful as the reader watches the pigs benefit from his labour while giving nothing in return. Orwell suggests that selfless devotion, without critical awareness, is a form of self-destruction.",
      },
      {
        point: 'Uncritical obedience as a pillar of tyranny',
        evidence: '"Napoleon is always right" -- Boxer\'s second maxim, adopted in Chapter 5.',
        analysis:
          'This maxim is the most disturbing line in the novel because it comes from the most sympathetic character. Boxer does not adopt it out of stupidity but out of trust. Orwell shows that totalitarian power depends not just on propaganda and violence but on the voluntary submission of good people. Boxer is both victim and enabler.',
      },
      {
        point: "Boxer's death as the emotional and moral climax",
        evidence:
          '"Fools! Do you not see what is written?" -- Benjamin, reading the knacker\'s van.',
        analysis:
          "Boxer's death -- sold to the knacker so the pigs can buy whisky -- is Orwell's most savage image of class betrayal. The reader's grief is proportional to the injustice: a lifetime of loyalty repaid with slaughter. Orwell deliberately makes this the novel's emotional peak to ensure the reader feels, not just understands, the cost of exploitation.",
      },
    ],
    conclusion:
      'Conclude by arguing that Boxer\'s tragedy is not just personal but structural. He represents an entire class of people whose loyalty was exploited by the Stalinist regime. Orwell does not blame Boxer -- he blames the system that makes loyalty lethal. The message is not "do not be loyal" but "demand that your loyalty be deserved."',
    examTip:
      'Compare Boxer with Benjamin for a strong contrast paragraph. Boxer trusts too much; Benjamin trusts too little. Neither saves the farm. This comparison allows you to explore whether Orwell sees any middle ground.',
  },
  {
    number: 4,
    question:
      'How does Orwell use the structure of Animal Farm to convey his message about revolution?',
    thesisStatement:
      'Orwell structures Animal Farm as a circle -- beginning and ending on the same farm, under the same name, with the same power dynamics -- to argue that revolution without structural change is doomed to replicate the tyranny it overthrew.',
    introduction:
      "Open by identifying the novella's circular structure: it begins on Manor Farm under human rule and ends on Manor Farm under pig rule. Note that this structure is not merely a literary device but an argument: that the revolution has achieved nothing. State your thesis: Orwell uses structure to show that revolution which merely replaces one ruling class with another is no revolution at all.",
    paragraphs: [
      {
        point: 'The rising action: idealism and collective effort',
        evidence:
          "The Rebellion in Chapter 2 and the first harvest in Chapter 3 -- the revolution's high point.",
        analysis:
          'Orwell presents the early days with genuine warmth. The harvest is better than under Jones; the animals work willingly. This optimism is structurally essential: the reader must feel the hope in order to feel its loss. Orwell builds the reader up precisely so the betrayal hits harder.',
      },
      {
        point: "The turning point: Napoleon's coup and the end of democracy",
        evidence: "Snowball's expulsion in Chapter 5 marks the structural midpoint.",
        analysis:
          'From this moment, the trajectory is downward. Orwell places the coup at the structural centre of the novel to create a clear before-and-after. Before Chapter 5, the farm has debate and collective decision-making. After it, there is only decree and obedience. The structure mirrors the historical transition from revolutionary promise to Stalinist dictatorship.',
      },
      {
        point: 'The circular ending: Manor Farm restored',
        evidence: '"The creatures outside looked from pig to man, and from man to pig."',
        analysis:
          "The renaming of Animal Farm back to Manor Farm completes the circle. Orwell's structural choice makes the argument visual and undeniable: the revolution has returned to exactly where it started. The final image -- pigs indistinguishable from humans -- does not merely suggest similarity; it asserts identity. The new rulers are the old rulers, wearing different faces.",
      },
    ],
    conclusion:
      'Conclude by arguing that the circular structure is Orwell\'s most powerful device. It prevents the reader from finding comfort in the idea that the pigs are "better" than Jones. The structure insists that they are the same. Orwell\'s message is that meaningful change requires not just the removal of a ruling class but the creation of democratic safeguards against any new one.',
    examTip:
      'Structure-focused essays score well because they demonstrate understanding of authorial craft. Use terms like "circular narrative", "structural midpoint", "rising action/falling action" and explain why Orwell made these choices. Always link structure to purpose.',
  },
  {
    number: 5,
    question:
      'How does Orwell present the relationship between education and power in Animal Farm?',
    thesisStatement:
      "Orwell presents education as the dividing line between the rulers and the ruled: the pigs' literacy gives them control of the commandments, the statistics and the history, while the other animals' illiteracy leaves them defenceless against propaganda.",
    introduction:
      "Open by noting that the pigs' first act of privilege is intellectual, not material: they learn to read and write while most other animals cannot progress beyond a few letters. This literacy gap is the foundation of every subsequent injustice. State your thesis: education is not just a theme in Animal Farm -- it is the mechanism by which power operates.",
    paragraphs: [
      {
        point: 'Literacy as the basis of political control',
        evidence:
          'The Seven Commandments are painted on the barn wall -- but only the pigs can read them fluently.',
        analysis:
          "Orwell makes the commandments visible to all but readable by few. This is a precise image of how constitutions work under tyranny: the law exists on paper, but only the powerful can interpret it. The animals' illiteracy is not just a disadvantage -- it is the precondition for their oppression.",
      },
      {
        point: "Education weaponised: Napoleon's training of the puppies",
        evidence: 'Napoleon takes the puppies from their mothers to "educate" them privately.',
        analysis:
          "Napoleon's education of the dogs is the dark inverse of Snowball's reading classes. Snowball tries to create citizens; Napoleon creates enforcers. Orwell juxtaposes these two models of education to show that education is not inherently liberating -- it depends entirely on who controls it and for what purpose.",
      },
      {
        point: "Benjamin's literacy as wasted potential",
        evidence:
          '"Fools! Do you not see what is written?" -- Benjamin, too late, at the knacker\'s van.',
        analysis:
          "Benjamin can read as well as any pig. His choice not to use this ability is Orwell's sharpest critique of the intellectual class: education without moral courage is worthless. Benjamin's outburst at the van is the novel's most painful moment of wasted potential -- he had the tools to resist and chose not to use them until it was too late.",
      },
    ],
    conclusion:
      "Conclude by arguing that education in Animal Farm is inseparable from power. The pigs rule because they can read; the animals submit because they cannot. But Orwell is careful to show that literacy alone is not enough -- Benjamin proves that. True education requires both knowledge and the courage to act on it. Orwell's message is a call for critical, active education as the only real defence against tyranny.",
    examTip:
      'This is a less common essay question, which means strong answers will stand out. Make sure you connect education to other themes (propaganda, class, power) to show holistic understanding. Examiners reward cross-referencing between themes.',
  },
]

/* ── Page ───────────────────────────────────────────────────────────────── */

export default async function EssayPlansPage() {
  const board = await getServerBoard()
  const allowedBoards = ['aqa', 'edexcel', 'ocr']
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
          { name: 'Animal Farm', url: 'https://theenglishhub.app/revision/texts/animal-farm' },
          {
            name: 'Essay Plans',
            url: 'https://theenglishhub.app/revision/texts/animal-farm/essay-plans',
          },
        ]}
      />
      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-violet-500/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-violet-500/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-blue-500/5 blur-3xl" />
        <div className="relative">
          <Button
            variant="ghost"
            size="sm"
            className="mb-4 -ml-2 text-muted-foreground"
            render={<Link href="/revision/texts/animal-farm" />}
          >
            <ArrowLeft className="size-3.5" />
            Back to Animal Farm
          </Button>

          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge variant="secondary">
              <FileText className="mr-1 size-3 text-violet-400" />
              Deep Study
            </Badge>
            <Badge variant="outline" className="text-muted-foreground">
              AQA / Edexcel / OCR
            </Badge>
          </div>

          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            Essay Plans
          </h1>
          <p className="mt-2 text-body-lg text-muted-foreground">Animal Farm by George Orwell</p>
          <p className="mt-4 max-w-2xl text-body-md text-muted-foreground">
            Five structured essay plans covering the most common GCSE exam questions on Animal Farm.
            Each plan includes a thesis statement, paragraph-level guidance with evidence and
            analysis, a conclusion and an exam tip.
          </p>
        </div>
      </section>

      {/* Essay Plans */}
      {essayPlans.map((plan) => (
        <section key={plan.number} id={`essay-${plan.number}`}>
          <div className="mb-5 flex items-center gap-3">
            <FileText className="size-5 text-violet-400" />
            <h2 className="text-heading-lg font-heading text-foreground">Essay {plan.number}</h2>
          </div>

          <div className="space-y-4">
            {/* Question & Thesis */}
            <Card>
              <CardHeader>
                <CardTitle className="text-heading-md font-heading">Question</CardTitle>
                <CardDescription className="text-body-md font-medium italic text-foreground">
                  {plan.question}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-body-sm text-muted-foreground">
                <h3 className="mb-1 text-sm font-semibold text-foreground">Thesis Statement</h3>
                <p>{plan.thesisStatement}</p>
              </CardContent>
            </Card>

            {/* Introduction */}
            <Card>
              <CardHeader>
                <CardTitle className="text-heading-md font-heading">Introduction</CardTitle>
              </CardHeader>
              <CardContent className="text-body-sm text-muted-foreground">
                <p>{plan.introduction}</p>
              </CardContent>
            </Card>

            {/* Body Paragraphs */}
            {plan.paragraphs.map((para, i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle className="text-heading-md font-heading">Paragraph {i + 1}</CardTitle>
                  <CardDescription>{para.point}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 text-body-sm text-muted-foreground">
                  <div>
                    <h4 className="mb-1 text-sm font-semibold text-foreground">Evidence</h4>
                    <div className="rounded-lg border border-border/60 bg-muted/30 p-3">
                      <p className="font-medium italic text-foreground">{para.evidence}</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="mb-1 text-sm font-semibold text-foreground">Analysis</h4>
                    <p>{para.analysis}</p>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Conclusion */}
            <Card>
              <CardHeader>
                <CardTitle className="text-heading-md font-heading">Conclusion</CardTitle>
              </CardHeader>
              <CardContent className="text-body-sm text-muted-foreground">
                <p>{plan.conclusion}</p>
              </CardContent>
            </Card>

            {/* Exam Tip */}
            <Card className="border-primary/20 bg-primary/[0.03]">
              <CardContent className="flex items-start gap-3 p-5">
                <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Lightbulb className="size-4 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">Exam Tip</h3>
                  <p className="mt-1 text-body-sm text-muted-foreground">{plan.examTip}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      ))}

      {/* Rights / fair-dealing notice */}
      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
        <strong>Rights notice:</strong> While <em>Animal Farm</em> entered UK public domain in 2021,
        the Orwell estate (AM Heath) actively manages educational use. Quotations on this page are
        short fair-dealing extracts; longer engagement should use a school-licensed edition. Short
        quotations (each under 15 words) reproduced under the fair dealing provision of the
        Copyright, Designs and Patents Act 1988 (s.30) for the purpose of criticism, review and
        educational study. <em>Animal Farm</em> by George Orwell is published by Penguin Books. Full
        text available from your school or local library.
      </p>
    </div>
  )
}
