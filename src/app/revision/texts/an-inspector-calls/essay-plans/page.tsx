import type { Metadata } from 'next'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Drama,
  FileText,
  Lightbulb,
  PenTool,
  Quote,
  Sparkles,
  Target,
} from 'lucide-react'

import { getServerBoard } from '@/lib/board/get-server-board'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'An Inspector Calls Essay Plans | The English Hub',
  description:
    'Five GCSE essay plans for An Inspector Calls by J.B. Priestley with thesis statements, paragraph structures and key quotes for exam preparation.',
  alternates: {
    canonical:
      'https://theenglishhub.app/revision/texts/an-inspector-calls/essay-plans',
  },
}

/* ────────────────────────────────────────────────────────────────────── */
/*  Data                                                                 */
/* ────────────────────────────────────────────────────────────────────── */

type ParagraphPlan = {
  point: string
  quote: string
  analysis: string
  link: string
}

type EssayPlan = {
  id: number
  question: string
  thesis: string
  paragraphs: ParagraphPlan[]
  conclusion: string
}

const essayPlans: EssayPlan[] = [
  {
    id: 1,
    question:
      'How does Priestley present the theme of social responsibility in An Inspector Calls?',
    thesis:
      'Priestley uses the Inspector as a dramatic device to argue that society must accept collective responsibility for its weakest members, contrasting those who learn this lesson with those who refuse to.',
    paragraphs: [
      {
        point:
          'Birling\u2019s opening speeches establish the capitalist rejection of social responsibility that the play will dismantle.',
        quote: '"a man has to look after himself and his own"',
        analysis:
          'Birling limits moral obligation to the family unit. The dramatic irony of his wrong predictions discredits his philosophy before the Inspector arrives, inviting the audience to reject individualism alongside his factual errors.',
        link: 'This self-serving worldview is the precise target of the Inspector\u2019s investigation, which exposes how each Birling\u2019s self-interest harmed Eva.',
      },
      {
        point:
          'Sheila\u2019s rapid acceptance of guilt models the moral response Priestley wants from his audience.',
        quote: '"But these girls aren\u2019t cheap labour \u2014 they\u2019re people."',
        analysis:
          'Sheila rejects her father\u2019s economic language and insists on Eva\u2019s humanity. The short, emphatic sentence marks a turning point: Sheila moves from passive complicity to active moral awareness.',
        link: 'Her transformation represents the younger generation\u2019s capacity for change, directly contrasting with her parents\u2019 stubborn refusal.',
      },
      {
        point:
          'The Inspector\u2019s final speech delivers the play\u2019s political thesis as a prophetic warning.',
        quote: '"We are members of one body. We are responsible for each other."',
        analysis:
          'The biblical register gives the socialist message moral authority. The simple present tense makes collective responsibility a permanent fact, not an aspiration. The prophecy of "fire and blood and anguish" was fulfilled by two world wars.',
        link: 'Priestley wrote in 1945 as Britain built the welfare state; the Inspector\u2019s speech endorses that political moment and warns against returning to 1912 values.',
      },
      {
        point:
          'The telephone call at the end forces the cycle to repeat, denying the audience comfortable closure.',
        quote: '"It\u2019s what happened to the girl and what we all did to her that matters."',
        analysis:
          'Sheila insists the moral lesson matters regardless of the Inspector\u2019s identity. The cyclical structure \u2014 a new inspector is coming \u2014 suggests that moral reckoning cannot be evaded, only postponed.',
        link: 'The ending is directed at the audience: if the Birlings refuse to learn, will you?',
      },
    ],
    conclusion:
      'Priestley structures the entire play as an argument for social responsibility, moving from Birling\u2019s complacent individualism through a chain of revelations to the Inspector\u2019s prophetic warning. The generational split at the end offers the audience a choice: learn the lesson now, or face the reckoning again.',
  },
  {
    id: 2,
    question:
      'How does Priestley use the character of Sheila to convey his message?',
    thesis:
      'Priestley uses Sheila\u2019s transformation from sheltered socialite to moral conscience to demonstrate that the younger generation can reject their parents\u2019 values and build a more just society.',
    paragraphs: [
      {
        point:
          'Sheila begins the play as a product of her privileged upbringing, complicit in the system without understanding it.',
        quote: '"I\u2019ll never, never do it again to anybody."',
        analysis:
          'The repetition of "never" conveys genuine remorse. Sheila is the first character to accept full responsibility, and her response is immediate and unconditional. Priestley models the moral change he wants from his audience.',
        link: 'Her rapid guilt contrasts sharply with her father\u2019s defensiveness, establishing the generational divide that structures the play\u2019s argument.',
      },
      {
        point:
          'Sheila becomes the Inspector\u2019s ally, seeing through evasion and demanding honesty from her family.',
        quote: '"But these girls aren\u2019t cheap labour \u2014 they\u2019re people."',
        analysis:
          'Sheila challenges her father\u2019s dehumanising economic language directly. By insisting on Eva\u2019s personhood, she articulates the play\u2019s core socialist argument in simple, forceful terms.',
        link: 'Her growing moral clarity mirrors the Inspector\u2019s function: she begins to interrogate her own family, extending the investigation beyond the Inspector\u2019s departure.',
      },
      {
        point:
          'Sheila returns the engagement ring, showing that moral awakening has real personal consequences.',
        quote: '"I didn\u2019t feel about her as she felt about me."',
        analysis:
          'Although this is Gerald\u2019s line, Sheila\u2019s response to it \u2014 returning the ring \u2014 is the key dramatic action. She refuses to build her future on a relationship tainted by exploitation, demonstrating that responsibility extends to personal choices.',
        link: 'Priestley shows that genuine moral change is costly. Sheila sacrifices comfort for integrity.',
      },
      {
        point:
          'After the Inspector leaves, Sheila becomes the play\u2019s moral centre, holding the lesson alive against her parents\u2019 attempts to forget it.',
        quote: '"You began to learn something. And now you\u2019ve stopped."',
        analysis:
          'Sheila accuses Gerald and her parents of moral regression. The short, accusatory sentences convey frustrated disappointment and position her as the audience\u2019s representative on stage.',
        link: 'Priestley uses Sheila to address the 1945 audience directly: do not let the lesson slip away once the pressure is removed.',
      },
    ],
    conclusion:
      'Sheila undergoes the most complete transformation in the play, moving from naive privilege to principled resistance. Priestley makes her the voice of the generation he believed could build a fairer post-war Britain, and her final defiance challenges the audience to follow her example.',
  },
  {
    id: 3,
    question:
      'How does Priestley present ideas about class in An Inspector Calls?',
    thesis:
      'Priestley exposes the Edwardian class system as a structure of exploitation and moral evasion, showing how wealth insulates the Birlings from accountability while crushing those without power.',
    paragraphs: [
      {
        point:
          'Birling treats his workers as disposable economic units, not as people with rights or dignity.',
        quote: '"a man has to look after himself and his own"',
        analysis:
          'Birling\u2019s philosophy explicitly excludes the working class from moral consideration. "His own" draws a boundary around family and class, leaving people like Eva outside the circle of responsibility.',
        link: 'This attitude is the foundation of the class system the play dismantles: the idea that some people simply do not matter.',
      },
      {
        point:
          'Sybil\u2019s class prejudice is embedded in her language and her instinctive reactions.',
        quote: '"Girls of that class\u2014"',
        analysis:
          'The interrupted phrase is more revealing than a completed sentence. Sybil categorises Eva by class before she has finished speaking, showing that prejudice is reflexive, not reasoned. The dash suggests the Inspector cut her off, refusing to let her finish the dehumanising thought.',
        link: 'Priestley shows that class prejudice operates through language itself. The way the Birlings talk about Eva reveals how they think about the poor.',
      },
      {
        point:
          'Gerald\u2019s relationship with Daisy Renton exposes how class power enables exploitation in personal relationships.',
        quote: '"I didn\u2019t feel about her as she felt about me."',
        analysis:
          'Gerald\u2019s admission reveals the power asymmetry. He could leave; she could not. His class position gave him the freedom to treat the relationship as temporary, while Daisy\u2019s poverty made her dependent.',
        link: 'Priestley demonstrates that class is not just an economic issue but a system that shapes personal relationships and emotional power.',
      },
      {
        point:
          'Eva\u2019s unseen presence represents the voiceless working class, denied a platform by the very structures the play critiques.',
        quote: '"One Eva Smith has gone \u2014 but there are millions and millions of Eva Smiths"',
        analysis:
          'The Inspector universalises Eva\u2019s suffering, turning a single case into a systemic argument. Priestley\u2019s choice to keep Eva off stage mirrors the way the class system renders the poor invisible.',
        link: 'By never giving Eva a voice of her own, Priestley forces the audience to confront the silence that class imposes on the powerless.',
      },
    ],
    conclusion:
      'Priestley uses every character\u2019s interaction with Eva to expose a different facet of class exploitation: economic, charitable, sexual and social. The play argues that class is not a natural hierarchy but a man-made system of privilege that must be dismantled if society is to be just.',
  },
  {
    id: 4,
    question:
      'How does Priestley use Inspector Goole to convey his ideas?',
    thesis:
      'Priestley creates the Inspector as a morally authoritative figure who operates outside normal social hierarchies, using him as a dramatic device to interrogate capitalist values and deliver the play\u2019s socialist argument.',
    paragraphs: [
      {
        point:
          'The Inspector controls the pace and direction of the investigation, overriding Birling\u2019s social authority.',
        quote: '"Public men, Mr Birling, have responsibilities as well as privileges."',
        analysis:
          'The balanced phrasing frames social duty as non-negotiable. The Inspector speaks to Birling as a moral equal \u2014 or superior \u2014 despite Birling\u2019s wealth and status. Priestley inverts the class hierarchy to subject the powerful to scrutiny.',
        link: 'The Inspector\u2019s authority is moral, not social. He demonstrates that true power comes from integrity, not money.',
      },
      {
        point:
          'The Inspector reveals information one character at a time, constructing a chain of collective guilt.',
        quote: '"It\u2019s what happened to the girl and what we all did to her that matters."',
        analysis:
          'Although Sheila says this, it summarises the Inspector\u2019s method: each character\u2019s individual action is connected to every other. The Inspector\u2019s sequential revelations build the play\u2019s argument that responsibility is shared, not individual.',
        link: 'Priestley\u2019s structural choice \u2014 one confession triggering the next \u2014 dramatises the interconnectedness the Inspector preaches.',
      },
      {
        point:
          'The Inspector\u2019s final speech functions as a political manifesto addressed to the audience as much as the characters.',
        quote: '"We are members of one body. We are responsible for each other."',
        analysis:
          'The biblical register lends the message an authority that transcends politics. The simple present tense and the inclusive pronoun "we" make the audience complicit: Priestley is not asking for agreement but assuming it.',
        link: 'The Inspector becomes Priestley\u2019s mouthpiece, translating the playwright\u2019s democratic socialism into dramatic language.',
      },
      {
        point:
          'The ambiguity of the Inspector\u2019s identity \u2014 real police officer, ghost, or supernatural figure \u2014 reinforces his symbolic function.',
        quote: '"Fire and blood and anguish."',
        analysis:
          'The prophetic warning suggests the Inspector exists outside time. His name, a pun on "ghoul," hints at a spectral presence. Priestley makes his identity unresolvable because his function is moral, not literal.',
        link: 'By making the Inspector\u2019s reality uncertain, Priestley ensures that the audience cannot dismiss his message by discrediting the messenger.',
      },
    ],
    conclusion:
      'Inspector Goole is Priestley\u2019s most powerful dramatic creation: a figure of moral authority who cannot be placed within the social hierarchy he has come to judge. His ambiguity \u2014 real or supernatural \u2014 makes the play\u2019s message harder to dismiss, and his final speech remains the clearest expression of Priestley\u2019s vision of collective responsibility.',
  },
  {
    id: 5,
    question:
      'How does Priestley explore the conflict between generations in An Inspector Calls?',
    thesis:
      'Priestley uses the generational divide between the older and younger Birlings to dramatise his argument that social progress depends on the willingness of the young to reject their parents\u2019 values.',
    paragraphs: [
      {
        point:
          'Arthur and Sybil represent the pre-war generation whose values Priestley wanted post-war Britain to reject.',
        quote: '"a man has to look after himself and his own"',
        analysis:
          'Birling\u2019s capitalist philosophy is presented as generational: it belongs to the Edwardian world of 1912 that the audience knows has been swept away by two wars. Priestley invites the audience to see his values as historically defeated.',
        link: 'The older generation\u2019s refusal to change is positioned as both morally wrong and historically obsolete.',
      },
      {
        point:
          'Sheila\u2019s moral transformation is rapid and total, representing the potential of the younger generation.',
        quote: '"I\u2019ll never, never do it again to anybody."',
        analysis:
          'Sheila accepts guilt without evasion. The immediacy of her response contrasts with her parents\u2019 denial and shows that the young are capable of genuine moral growth when confronted with truth.',
        link: 'Priestley makes Sheila the model for his 1945 audience: young people who could choose to build a different world.',
      },
      {
        point:
          'Eric\u2019s confrontation with his father exposes the emotional failure beneath the older generation\u2019s authority.',
        quote: '"You\u2019re not the kind of father a chap could go to."',
        analysis:
          'Eric\u2019s accusation reveals that Birling\u2019s patriarchal authority is hollow. The family\u2019s dysfunction was not caused by the Inspector but was always present, concealed by social convention.',
        link: 'Priestley argues that the older generation\u2019s moral failure extends to their personal relationships, not just their politics.',
      },
      {
        point:
          'After the Inspector leaves, the generational split becomes absolute: the young cannot return to ignorance.',
        quote: '"You began to learn something. And now you\u2019ve stopped."',
        analysis:
          'Sheila accuses Gerald and her parents of choosing comfort over truth. The short, accusing sentences express frustration that the older generation has retreated to their pre-Inspector complacency.',
        link: 'The ending offers the audience a stark choice: align with the young, who have learned, or with the old, who have refused to.',
      },
    ],
    conclusion:
      'The generational conflict is the engine of the play\u2019s final act and its most enduring message. Priestley wrote for a 1945 audience standing at a crossroads: they could rebuild society on principles of shared responsibility, or they could return to the selfish individualism of 1912. The play\u2019s cyclical ending suggests the choice is never settled \u2014 each generation must make it again.',
  },
]

/* ────────────────────────────────────────────────────────────────────── */
/*  Page                                                                 */
/* ────────────────────────────────────────────────────────────────────── */

export default async function EssayPlansPage() {
  const board = await getServerBoard()
  const allowedBoards = ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse']
  if (board && !allowedBoards.includes(board)) {
    redirect('/revision/texts')
  }

  return (
    <div className="space-y-10 pb-16">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-emerald-500/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-emerald-500/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-blue-500/5 blur-3xl" />
        <div className="relative">
          <Button
            variant="ghost"
            size="sm"
            className="mb-4 -ml-2 text-muted-foreground"
            render={<Link href="/revision/texts/an-inspector-calls" />}
          >
            <ArrowLeft className="size-3.5" />
            Back to An Inspector Calls
          </Button>

          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge variant="secondary">
              <PenTool className="mr-1 size-3 text-emerald-400" />
              GCSE Essay Plans
            </Badge>
            <Badge variant="outline" className="text-muted-foreground">
              <Sparkles className="mr-1 size-3" />
              AQA / Edexcel / OCR / Eduqas / Edexcel IGCSE
            </Badge>
          </div>

          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            An Inspector Calls &mdash; Essay Plans
          </h1>
          <p className="mt-2 text-body-lg text-muted-foreground">
            by J.B. Priestley &mdash; 1945
          </p>
          <p className="mt-4 max-w-2xl text-body-md text-muted-foreground">
            Five structured GCSE essay plans with thesis statements, paragraph
            plans, key quotes and analytical points. Use these as a framework
            for timed practice.
          </p>
        </div>
      </section>

      {/* Exam tip */}
      <Card className="border-amber-500/20 bg-amber-500/[0.03]">
        <CardContent className="flex items-start gap-3 p-5">
          <Lightbulb className="mt-0.5 size-5 shrink-0 text-amber-400" />
          <div className="text-body-sm text-muted-foreground">
            <p className="mb-1 font-semibold text-foreground">Exam tip</p>
            <p>
              These plans follow a four-paragraph structure (plus introduction
              and conclusion) suitable for a 45-minute GCSE literature response.
              Each paragraph uses a <strong>Point &rarr; Quote &rarr;
              Analysis &rarr; Link</strong> structure. Adapt the plans to match
              the specific wording of your exam question.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Essay Plans */}
      {essayPlans.map((plan) => (
        <section key={plan.id} className="space-y-5">
          <div className="flex items-start gap-3">
            <div className="flex size-10 items-center justify-center rounded-xl bg-emerald-500/10">
              <FileText className="size-5 text-emerald-400" />
            </div>
            <div>
              <p className="text-caption uppercase tracking-wide text-muted-foreground">
                Essay {plan.id}
              </p>
              <h2 className="text-heading-md font-heading text-foreground">
                {plan.question}
              </h2>
            </div>
          </div>

          {/* Thesis */}
          <Card className="border-primary/20 bg-primary/[0.03]">
            <CardContent className="p-5">
              <p className="mb-1 text-caption font-semibold uppercase tracking-wide text-primary">
                Thesis
              </p>
              <p className="text-body-sm text-foreground">{plan.thesis}</p>
            </CardContent>
          </Card>

          {/* Paragraphs */}
          <div className="grid gap-4">
            {plan.paragraphs.map((para, i) => (
              <Card key={i}>
                <CardHeader>
                  <CardDescription className="text-caption font-semibold uppercase tracking-wide">
                    Paragraph {i + 1}
                  </CardDescription>
                  <CardTitle className="text-heading-md font-heading">
                    {para.point}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Quote className="mt-0.5 size-4 shrink-0 text-amber-400" />
                    <p className="text-body-sm font-medium italic text-foreground">
                      {para.quote}
                    </p>
                  </div>
                  <div>
                    <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      Analysis
                    </p>
                    <p className="text-body-sm text-muted-foreground">
                      {para.analysis}
                    </p>
                  </div>
                  <div>
                    <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      Link
                    </p>
                    <p className="text-body-sm text-muted-foreground">
                      {para.link}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Conclusion */}
          <Card className="border-muted bg-muted/20">
            <CardContent className="p-5">
              <p className="mb-1 text-caption font-semibold uppercase tracking-wide text-muted-foreground">
                Conclusion
              </p>
              <p className="text-body-sm text-muted-foreground">
                {plan.conclusion}
              </p>
            </CardContent>
          </Card>

          {/* Divider between plans */}
          {plan.id < essayPlans.length && (
            <div className="border-t border-border/40 pt-4" />
          )}
        </section>
      ))}

      {/* Navigation */}
      <section>
        <Card className="bg-primary/5">
          <CardContent className="flex flex-col items-start gap-4 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div>
              <h3 className="text-heading-md font-heading text-foreground">
                Continue studying
              </h3>
              <p className="mt-1 text-body-sm text-muted-foreground">
                Deepen your knowledge with act analysis and key quotes.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button
                variant="default"
                size="sm"
                render={<Link href="/revision/texts/an-inspector-calls/acts" />}
              >
                Acts Analysis
              </Button>
              <Button
                variant="outline"
                size="sm"
                render={<Link href="/revision/texts/an-inspector-calls/key-quotes" />}
              >
                Key Quotes
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Fair-dealing notice */}
      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
        Short quotations (&le;15 words each) reproduced under the fair dealing
        provision of the Copyright, Designs and Patents Act 1988 for the purpose
        of criticism, review and educational study.{' '}
        <em>An Inspector Calls</em> &copy; J.B. Priestley Estate. Full text
        available from your school or local library.
      </p>
    </div>
  )
}
