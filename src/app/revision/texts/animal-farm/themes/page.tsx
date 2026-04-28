import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import {
  ArrowLeft,
  BookOpen,
  Crown,
  Lightbulb,
  Megaphone,
  Flame,
  GraduationCap,
  Heart,
  Scale,
} from 'lucide-react'

import { getServerBoard } from '@/lib/board/get-server-board'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
export const metadata: Metadata = {
  title: 'Animal Farm Themes — In-Depth Analysis | The English Hub',
  description:
    'Explore the key themes in Animal Farm: power and corruption, class, language and propaganda, revolution, education and loyalty. GCSE revision with quotes and exam guidance.',
  alternates: {
    canonical: 'https://theenglishhub.app/revision/texts/animal-farm/themes',
  },
}

/* ── Theme data ────────────────────────────────────────────────────────── */

type ThemeData = {
  title: string
  icon: typeof Lightbulb
  iconColour: string
  overview: string
  keyPoints: string[]
  howOrwellPresents: string[]
  relevantQuotes: { text: string; context: string }[]
  examLinks: string[]
}

const themes: ThemeData[] = [
  {
    title: 'Power and Corruption',
    icon: Crown,
    iconColour: 'text-clay-600',
    overview:
      "Orwell's central argument: power corrupts absolutely when there are no checks on authority. The pigs begin as liberators and end as oppressors indistinguishable from the humans they replaced. The novel is structured as a slow, inexorable slide from shared idealism to totalitarian dictatorship.",
    keyPoints: [
      "The Seven Commandments are systematically altered to justify the pigs' growing power -- each change marks a new stage of corruption.",
      'Napoleon never seizes power through charisma or argument; he uses dogs (violence) and Squealer (propaganda). Orwell suggests tyranny requires both.',
      "The final scene -- pigs and humans playing cards, indistinguishable from each other -- is Orwell's verdict: unchecked power always produces the same result, regardless of ideology.",
      "Power is shown to corrupt not just the leaders but the led: Boxer's unquestioning loyalty enables Napoleon's tyranny as much as the dogs do.",
    ],
    howOrwellPresents: [
      'Structure: The novel traces a clear arc from Chapter 2 (equality) to Chapter 10 (total inequality). This mirroring of beginning and end reinforces the cyclical nature of corruption.',
      "Symbolism: The farmhouse represents privilege. The pigs' move from the barn to the farmhouse is a physical enactment of their moral decline.",
      'Irony: The final commandment -- "some animals are more equal than others" -- is an oxymoron. Orwell uses logical impossibility to expose political dishonesty.',
      'Characterisation: Napoleon is deliberately given no redeeming qualities. Orwell refuses to make tyranny glamorous.',
    ],
    relevantQuotes: [
      { text: '"All animals are equal"', context: 'The original commandment -- the ideal' },
      {
        text: '"All animals are equal, but some are more equal"',
        context: 'The corrupted commandment -- the reality',
      },
      {
        text: '"Napoleon is always right"',
        context: 'Boxer -- how the powerless enable the powerful',
      },
    ],
    examLinks: [
      'Compare with Lord Acton\'s maxim: "Power tends to corrupt, and absolute power corrupts absolutely."',
      "Link to Orwell's Nineteen Eighty-Four for his continued exploration of totalitarian power.",
      'Discuss whether the corruption was inevitable or could have been prevented (e.g. if Snowball had stayed).',
    ],
  },
  {
    title: 'Class and Labour',
    icon: Scale,
    iconColour: 'text-blue-400',
    overview:
      'Animal Farm is a story about class. The animals overthrow the human ruling class only to see a new ruling class -- the pigs -- emerge in its place. The working animals (horses, hens, sheep) do all the physical labour while the pigs take all the rewards. Orwell shows that revolution without structural change merely replaces one elite with another.',
    keyPoints: [
      'From Chapter 3 onwards, the pigs "did not actually work, but directed and supervised." The class divide is immediate.',
      "Boxer represents the exploited proletariat: he gives everything and receives nothing. His death -- sold to the knacker -- is the book's most brutal image of class betrayal.",
      'The sheep, taught to chant simplified slogans, represent how the ruling class keeps the working class intellectually passive.',
      "The animals' inability to read (except Benjamin) leaves them dependent on the pigs for information -- literacy is a class weapon.",
    ],
    howOrwellPresents: [
      'Allegory: The class structure of the farm directly mirrors Marxist analysis of society -- bourgeoisie (pigs), proletariat (horses, hens), lumpenproletariat (Mollie, Moses).',
      "Pathos: Boxer's death creates devastating emotional impact precisely because the reader has watched him give everything to the revolution. His betrayal is felt, not just understood.",
      'Contrast: The pigs eat apples and drink milk from Chapter 3; the others go hungry from Chapter 7. Orwell tracks the material gap between classes throughout.',
      'Irony: The revolution was supposed to end class. Instead it created a more rigid hierarchy, where the ruling class (pigs) has even more contempt for the workers than Jones did.',
    ],
    relevantQuotes: [
      { text: '"I will work harder"', context: 'Boxer -- devotion that the ruling class exploits' },
      {
        text: '"Surely you do not want Jones back?"',
        context: 'Squealer -- class anxiety weaponised as propaganda',
      },
      {
        text: '"The creatures outside looked from pig to man"',
        context: 'The new ruling class is identical to the old',
      },
    ],
    examLinks: [
      'Orwell was a democratic socialist. Discuss how Animal Farm criticises Stalinism without rejecting socialism itself.',
      "Compare Boxer's fate with real-world exploitation of workers under totalitarian regimes.",
      "Link the theme of class to the theme of education -- the pigs maintain power partly through the animals' illiteracy.",
    ],
  },
  {
    title: 'Language and Propaganda',
    icon: Megaphone,
    iconColour: 'text-red-400',
    overview:
      'Language is the most dangerous weapon in Animal Farm. Squealer\'s propaganda does not just support Napoleon\'s power -- it creates it. By controlling language, the pigs control reality itself. Orwell, who wrote the essay "Politics and the English Language" in the same year, regarded the corruption of language as the deepest form of political corruption.',
    keyPoints: [
      'Squealer systematically rewrites the Seven Commandments. Each alteration shows how language can be used to change history in plain sight.',
      '"Four legs good, two legs bad" reduces complex ideology to a chant. Simplified language prevents critical thought.',
      'The sheep are trained to bleat over any dissent. Language is used not to communicate but to silence.',
      'Statistics are fabricated: Squealer reads out figures showing increased production while the animals go hungry. Numbers become propaganda.',
      'When "Beasts of England" is banned and replaced by Minimus\'s poem, the regime controls not just information but emotion and aspiration.',
    ],
    howOrwellPresents: [
      "Squealer as a character: He is the novel's most important structural device. Every lie in the book passes through him.",
      'The commandments as motif: Their gradual alteration is a visual, physical representation of propaganda. The reader watches truth being erased in real time.',
      "Dramatic irony: The reader can see the lies, but the animals cannot. This gap is Orwell's method for making the reader feel both anger and helplessness.",
      'The paint and ladder scene: Squealer is found at night beneath the barn wall with paint. The physical act of propaganda is briefly made visible -- then immediately covered up.',
    ],
    relevantQuotes: [
      {
        text: '"Squealer could turn black into white"',
        context: 'Narrator -- the power of propaganda distilled',
      },
      { text: '"Four legs good, two legs bad"', context: 'The slogan that replaces thought' },
      {
        text: '"No animal shall sleep in a bed with sheets"',
        context: 'Altered commandment -- language bent to serve power',
      },
    ],
    examLinks: [
      'Link directly to "Politics and the English Language" (1946) -- Orwell argues that vague language enables political tyranny.',
      'Compare Squealer\'s techniques with real-world propaganda: state media, censorship, "alternative facts."',
      "Discuss how the animals' inability to read enables propaganda -- education and language are linked.",
    ],
  },
  {
    title: 'Revolution and Betrayal',
    icon: Flame,
    iconColour: 'text-clay-600',
    overview:
      "Animal Farm does not argue that revolution is wrong. It argues that revolution is tragically vulnerable to betrayal. The animals' Rebellion is justified -- Jones is a drunk who starves them. The tragedy is what happens afterwards: the ideals that inspired the revolution are hijacked by those who learned only its mechanics and none of its principles.",
    keyPoints: [
      'The Rebellion succeeds because it is spontaneous and collective. No single animal plans it; they act together when pushed too far.',
      'The betrayal is gradual, not sudden. Each chapter marks a small step further from the original ideals -- making it harder for the animals to identify the moment things went wrong.',
      'By Chapter 10, the revolution has been so thoroughly betrayed that the farm is renamed "Manor Farm" -- back to where it started.',
      'Orwell suggests that revolutions fail when the revolutionaries replace the old hierarchy rather than dismantling hierarchy itself.',
    ],
    howOrwellPresents: [
      'Circular structure: The novel begins and ends on the same farm under the same name. The revolution has achieved nothing.',
      "Clover's grief in Chapter 7: Her silent, inarticulate sadness after the executions is the emotional centre of the betrayal. She knows it has gone wrong but cannot say how.",
      "The windmill: Built, destroyed and rebuilt, it becomes a symbol of futile labour -- the revolution's promises endlessly deferred.",
      'The final image: Pigs and humans are indistinguishable. The revolution has produced a mirror of the regime it replaced.',
    ],
    relevantQuotes: [
      {
        text: '"These scenes of terror were not what they had looked forward to"',
        context: 'Clover -- the betrayal felt but not articulated',
      },
      {
        text: '"The creatures outside looked from pig to man"',
        context: 'The revolution has come full circle',
      },
    ],
    examLinks: [
      'Orwell fought in the Spanish Civil War and saw communist betrayal first-hand. His personal experience shapes this theme.',
      "Compare the Russian Revolution's ideals with its Stalinist outcome.",
      'Discuss whether Orwell believes all revolutions are doomed or only those without democratic safeguards.',
    ],
  },
  {
    title: 'Education and Ignorance',
    icon: GraduationCap,
    iconColour: 'text-violet-400',
    overview:
      "Education -- or the lack of it -- determines who holds power on Animal Farm. The pigs can read and write; most other animals cannot. This gap in literacy is the foundation of the pigs' control. Orwell shows that an uneducated population cannot defend its own freedom, because it cannot read the laws that govern it.",
    keyPoints: [
      'Snowball attempts to educate the animals, but most fail to learn more than a few letters. Only the pigs and Benjamin achieve full literacy.',
      'The sheep learn only a single slogan: "Four legs good, two legs bad." Their education is designed to prevent thought, not encourage it.',
      'Napoleon takes the puppies to "educate" them privately. His version of education is indoctrination and violence.',
      "The animals' inability to remember the original commandments allows Squealer to alter them. Memory and education are linked.",
      "Benjamin can read but refuses to. His literacy without action is as useless as the other animals' illiteracy.",
    ],
    howOrwellPresents: [
      'The Seven Commandments as a test: They are written on the barn wall for all to see, but only those who can read can verify them. Education is literally the ability to detect lies.',
      'Irony: The most educated animal (Benjamin) does the least to resist. Education without courage is worthless.',
      'The puppies: Napoleon\'s "education" of the dogs is the dark mirror of Snowball\'s committees. Both are education, but one produces thinkers and the other produces enforcers.',
      "Structural progression: As the animals' education fails, the pigs' control increases. The two are inversely correlated throughout.",
    ],
    relevantQuotes: [
      {
        text: '"Four legs good, two legs bad"',
        context: 'Education reduced to a slogan -- thought replaced by repetition',
      },
      {
        text: '"Fools! Do you not see what is written?"',
        context: 'Benjamin -- literacy without action is futile',
      },
    ],
    examLinks: [
      'Link to the theme of propaganda: propaganda works because the animals cannot verify information independently.',
      'Discuss whether Orwell blames the animals for their ignorance or the pigs for exploiting it.',
      'Compare with Orwell\'s views in "Politics and the English Language" on the relationship between clear thinking and clear language.',
    ],
  },
  {
    title: 'Loyalty and Betrayal',
    icon: Heart,
    iconColour: 'text-rose-400',
    overview:
      "Loyalty in Animal Farm is shown to be admirable but dangerous. Boxer's loyalty to Napoleon is the most moving and the most destructive force in the novel. The animals' collective loyalty to the revolution is what makes them vulnerable to exploitation. Orwell suggests that loyalty without critical thought is not a virtue but a weakness.",
    keyPoints: [
      'Boxer\'s two maxims define the tragedy: "I will work harder" (selfless devotion) and "Napoleon is always right" (uncritical obedience). The first is noble; the second is fatal.',
      "Clover's loyalty is different from Boxer's -- she senses the betrayal but cannot articulate it. Her loyalty is to the original ideals, not to Napoleon.",
      "The animals' loyalty to the revolution is what makes the betrayal so devastating. They are not passive victims; they actively built the new society, which makes its corruption unbearable.",
      "Napoleon has no loyalty to anyone. He betrays Snowball, Boxer, the hens and ultimately the entire revolution. His disloyalty is the counterpoint to the animals' misplaced faith.",
    ],
    howOrwellPresents: [
      "Boxer's death: The most emotionally devastating scene in the book. Orwell ensures the reader feels the full weight of loyalty betrayed.",
      "Repetition: Boxer's maxims are repeated throughout the novel, becoming more painful each time as the reader watches his loyalty being exploited.",
      "Contrast: The animals' loyalty is contrasted with the pigs' cynicism. The gap between the two creates the novel's moral force.",
      "Clover's gaze in Chapter 7: Looking over the farm, she embodies loyalty to an ideal rather than to a leader -- a distinction Orwell insists upon.",
    ],
    relevantQuotes: [
      { text: '"I will work harder"', context: 'Loyalty as devotion -- admirable but exploited' },
      {
        text: '"Napoleon is always right"',
        context: 'Loyalty as obedience -- dangerous and enabling',
      },
      {
        text: '"These scenes of terror were not what they had looked forward to"',
        context: 'Clover -- loyalty to the ideal, grief at its betrayal',
      },
    ],
    examLinks: [
      'Explore whether Orwell sees loyalty as inherently dangerous or only dangerous when combined with ignorance.',
      "Compare Boxer's loyalty with Benjamin's cynicism. Neither saves the farm. What does Orwell suggest is the alternative?",
      "Discuss how Napoleon exploits loyalty: through Squealer (propaganda), the dogs (fear) and Boxer's own maxim (self-policing).",
    ],
  },
]

/* ── Page ───────────────────────────────────────────────────────────────── */

export default async function ThemesPage() {
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
          { name: 'Themes', url: 'https://theenglishhub.app/revision/texts/animal-farm/themes' },
        ]}
      />
      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-amber-500/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-amber-500/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-violet-500/5 blur-3xl" />
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
              <Lightbulb className="mr-1 size-3 text-clay-600" />
              Deep Study
            </Badge>
            <Badge variant="outline" className="text-muted-foreground">
              AQA / Edexcel / OCR
            </Badge>
          </div>

          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            Themes Analysis
          </h1>
          <p className="mt-2 text-body-lg text-muted-foreground">Animal Farm by George Orwell</p>
          <p className="mt-4 max-w-2xl text-body-md text-muted-foreground">
            Six major themes explored in depth: overview, key points, how Orwell presents each theme
            through literary methods, relevant quotations and links to exam questions.
          </p>
        </div>
      </section>

      {/* Themes */}
      {themes.map((theme) => {
        const Icon = theme.icon
        return (
          <section key={theme.title} id={theme.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}>
            <div className="mb-5 flex items-center gap-3">
              <Icon className={`size-5 ${theme.iconColour}`} />
              <h2 className="text-heading-lg font-heading text-foreground">{theme.title}</h2>
            </div>

            <div className="space-y-4">
              {/* Overview */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-heading-md font-heading">Overview</CardTitle>
                </CardHeader>
                <CardContent className="text-body-sm text-muted-foreground">
                  <p>{theme.overview}</p>
                </CardContent>
              </Card>

              <div className="grid gap-4 lg:grid-cols-2">
                {/* Key Points */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-heading-md font-heading">Key Points</CardTitle>
                  </CardHeader>
                  <CardContent className="text-body-sm text-muted-foreground">
                    <ul className="list-disc space-y-2 pl-4">
                      {theme.keyPoints.map((p, i) => (
                        <li key={i}>{p}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* How Orwell Presents This Theme */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-heading-md font-heading">
                      How Orwell Presents This
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-body-sm text-muted-foreground">
                    <ul className="list-disc space-y-2 pl-4">
                      {theme.howOrwellPresents.map((p, i) => (
                        <li key={i}>{p}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Quotes */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-heading-md font-heading">Relevant Quotes</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-body-sm">
                  {theme.relevantQuotes.map((q, i) => (
                    <div key={i} className="rounded-lg border border-border/60 bg-muted/30 p-3">
                      <p className="font-medium italic text-foreground">{q.text}</p>
                      <p className="mt-1 text-caption text-primary">{q.context}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Exam Links */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-heading-md font-heading">
                    Exam Discussion Points
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-body-sm text-muted-foreground">
                  <ul className="list-disc space-y-2 pl-4">
                    {theme.examLinks.map((p, i) => (
                      <li key={i}>{p}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>
        )
      })}

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
