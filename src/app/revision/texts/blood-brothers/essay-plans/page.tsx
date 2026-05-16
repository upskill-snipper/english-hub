import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Drama, FileText, Quote, Sparkles } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { getServerBoard } from '@/lib/board/get-server-board'

import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
export const metadata: Metadata = {
  openGraph: {
    title: 'Blood Brothers — Essay Plans | The English Hub',
    description:
      'Five exam-ready essay plans for Blood Brothers by Willy Russell with thesis, paragraph outlines and key quotations.',
  },
  title: 'Blood Brothers — Essay Plans',
  description:
    'Five exam-ready essay plans for Blood Brothers by Willy Russell with thesis, paragraph outlines and key quotations.',
  alternates: {
    canonical: 'https://theenglishhub.app/revision/texts/blood-brothers/essay-plans',
  },
}

/* ── Essay plan data ───────────────────────────────────────────────────── */

type Paragraph = {
  pointHeading: string
  topic: string
  quote: string
  quoteContext: string
  analysis: string
  contextLink: string
}

type EssayPlan = {
  id: number
  question: string
  thesis: string
  paragraphs: Paragraph[]
  conclusion: string
}

const ESSAY_PLANS: EssayPlan[] = [
  {
    id: 1,
    question: 'How does Russell present the theme of class in Blood Brothers?',
    thesis:
      'Russell constructs the play as a controlled experiment — two identical twins raised on opposite sides of the class divide — to argue that social position, not innate character, determines life outcomes.',
    paragraphs: [
      {
        pointHeading: 'The pact as class transaction',
        topic: 'Russell opens by showing how class power enables Mrs Lyons to acquire a child.',
        quote: '"Give one to me."',
        quoteContext: 'Mrs Lyons — Act 1',
        analysis:
          'The blunt imperative reduces a baby to a commodity. Russell shows that wealth confers the power to take what poverty cannot protect. The pact is not a mutual agreement but an exploitation of economic desperation.',
        contextLink:
          'Link to the economic vulnerability of working-class women in 1980s Liverpool, where limited welfare provision left mothers like Mrs Johnstone with impossible choices.',
      },
      {
        pointHeading: 'Parallel childhoods',
        topic:
          "Russell stages the boys' meeting to expose how identical people are treated differently by class.",
        quote: '"We\'re blood brothers."',
        quoteContext: 'Mickey and Edward — Act 1',
        analysis:
          "The ritual of chosen kinship mirrors the biological bond they do not know about. Russell uses dramatic irony to show that class distinctions are imposed from outside, not inherent. The boys' natural equality makes the later divergence feel violent.",
        contextLink:
          'Russell draws on his own experience of cross-class friendships in Liverpool, where children mixed freely until institutional structures — schools, housing, employment — separated them.',
      },
      {
        pointHeading: 'The fatal realisation',
        topic: "Russell delays the class argument's emotional climax to the final scene.",
        quote: '"Well, how come you got everything... an\' I got nothin\'?"',
        quoteContext: 'Mickey — Act 2',
        analysis:
          "Mickey articulates the play's thesis in plain speech. The question is not about envy but about systemic injustice: Russell gives the political argument to the character who has suffered most, making it impossible to dismiss as abstract theory.",
        contextLink:
          "Connect to Thatcherite rhetoric about personal responsibility, which Russell's play directly contradicts by showing that Mickey's decline is caused by structures, not choices.",
      },
    ],
    conclusion:
      'Russell uses the twin structure to strip away every variable except class, proving that inequality is manufactured, not natural. The play ends not with resolution but with a question — forcing the audience to take responsibility for the answer.',
  },
  {
    id: 2,
    question: 'How does Russell use the character of the Narrator in Blood Brothers?',
    thesis:
      'The Narrator functions as a Brechtian chorus figure who prevents comfortable emotional identification, forces critical distance and exposes the political mechanics behind the personal tragedy.',
    paragraphs: [
      {
        pointHeading: 'Framing the story as inevitable',
        topic:
          'The Narrator opens the play by revealing the ending, collapsing suspense in favour of analysis.',
        quote: '"So did y’ hear the story of the Johnstone twins?"',
        quoteContext: 'Narrator — prologue',
        analysis:
          'By telling the audience the outcome before the play begins, Russell redirects attention from what happens to why it happens. The Narrator transforms the play from a story into an argument, inviting the audience to read every scene as evidence.',
        contextLink:
          "Link to Brecht's epic theatre, which Russell studied. The Narrator's function mirrors Brecht's use of alienation effects to prevent passive consumption and promote political engagement.",
      },
      {
        pointHeading: 'Building atmospheric dread',
        topic:
          "The Narrator's recurring refrains create a sense of fate that Russell then critiques.",
        quote: '"You know the devil\'s got your number."',
        quoteContext: 'Narrator — recurring refrain',
        analysis:
          'The "devil" sounds supernatural but functions as a metaphor for class-driven determinism. Russell gives the audience a folk-horror atmosphere while simultaneously undermining it: the real forces at work are economic, not magical.',
        contextLink:
          'Working-class Liverpool had strong traditions of folk superstition. Russell draws on these authentically but uses the Narrator to show that superstition is a symptom of powerlessness, not its cause.',
      },
      {
        pointHeading: 'The final question',
        topic: "The Narrator's closing line forces the audience to choose an explanation.",
        quote: '"And do we blame superstition for what came to pass?"',
        quoteContext: 'Narrator — closing line',
        analysis:
          'Russell uses a direct question to shatter the fourth wall. The Narrator rejects the supernatural reading he has spent the play building, demanding that the audience locate blame in class structures. The play refuses closure: the audience must supply the answer.',
        contextLink:
          "Connect to Russell's political purpose: he wants the audience to leave the theatre angry at inequality, not merely sad about two dead boys.",
      },
    ],
    conclusion:
      "The Narrator is Russell's most sophisticated dramatic tool. He creates the feeling of fate while simultaneously dismantling it, leaving the audience with no comfortable explanation except the one Russell intends: class kills.",
  },
  {
    id: 3,
    question: 'How does Russell present the relationship between Mickey and Edward?',
    thesis:
      "Russell uses the boys' friendship as a controlled experiment in nature versus nurture, showing that genuine human connection cannot survive the structural pressures of class inequality.",
    paragraphs: [
      {
        pointHeading: 'Instant connection in childhood',
        topic:
          "The boys' first meeting demonstrates that without class markers, identity is shared.",
        quote: '"We\'re blood brothers."',
        quoteContext: 'Mickey and Edward — Act 1',
        analysis:
          'The blood-brother ritual is layered with irony: the boys choose kinship before knowing they share it biologically. Russell uses the scene to argue that empathy and connection are natural; division is learned. The childhood equality makes the adult divergence unbearable.',
        contextLink:
          'Russell echoes the Romantic idea of childhood innocence corrupted by society, but grounds it in specific class politics rather than abstract philosophy.',
      },
      {
        pointHeading: 'Adolescent divergence',
        topic: 'As teenagers, the boys begin to occupy different social worlds despite their bond.',
        quote: '"I thought we always stuck together."',
        quoteContext: 'Edward — Act 2 confrontation',
        analysis:
          'Edward’s plea appeals to their blood-brother bond, but Russell exposes how class has already broken it. By adulthood, Edward’s sentimental faith in friendship cannot reach Mickey’s lived reality of unemployment and prison.',
        contextLink:
          'Link to the different educational pathways: Edward attends private school and university; Mickey leaves school for factory work. The education system entrenches the class divide.',
      },
      {
        pointHeading: 'Adult destruction',
        topic: 'The friendship collapses under the weight of inequality in adulthood.',
        quote: '"I could have been him."',
        quoteContext: 'Mickey — Act 2',
        analysis:
          "Mickey's realisation destroys the friendship because it exposes the lie of equality on which it was built. Russell shows that genuine friendship requires genuine equality, and a class-divided society makes both impossible.",
        contextLink:
          "Connect to the mass unemployment of 1980s Liverpool: Mickey's decline is not personal failure but economic catastrophe. Edward's success is not personal merit but inherited advantage.",
      },
    ],
    conclusion:
      "Russell structures the relationship as a tragedy of wasted potential. The boys' natural bond proves that class distinctions are artificial, but the play's ending proves that artificial distinctions have real, lethal consequences.",
  },
  {
    id: 4,
    question: 'How does Russell present mothers and motherhood in Blood Brothers?',
    thesis:
      'Russell uses two mothers — Mrs Johnstone and Mrs Lyons — as a paired study to show that class determines not only life chances but also the forms of love, fear and guilt available to women.',
    paragraphs: [
      {
        pointHeading: 'Mrs Johnstone: love constrained by poverty',
        topic:
          "Russell presents Mrs Johnstone's decision to give up her child as an act forced by economic desperation, not moral failure.",
        quote: '"Only mine until the time comes round to pay the bill."',
        quoteContext: 'Mrs Johnstone — Act 1',
        analysis:
          "Mrs Johnstone's anguish when she tries to reclaim the child shows that maternal love is powerless against class privilege. Russell uses her songs to give a working-class mother a voice that the social structures around her deny.",
        contextLink:
          'Link to the welfare state under Thatcher: cuts to benefits, housing and childcare left working-class mothers with fewer resources and fewer choices.',
      },
      {
        pointHeading: 'Mrs Lyons: love deformed by privilege',
        topic: 'Russell shows that wealth provides Mrs Lyons with power but not peace.',
        quote: '"You do know what they say about twins, secretly parted, don\'t you?"',
        quoteContext: 'Mrs Lyons — Act 1',
        analysis:
          "Mrs Lyons invents the superstition to control Mrs Johnstone, but Russell shows her becoming its prisoner. Her paranoia is a form of guilt that wealth cannot resolve — a mirror to Mrs Johnstone's grief.",
        contextLink:
          'Russell avoids making Mrs Lyons a simple villain. Her infertility and loneliness are genuine, and her descent into obsession is tragic. Class gives her different resources but not different pain.',
      },
      {
        pointHeading: 'The final revelation',
        topic:
          "Mrs Johnstone's confession of the truth triggers the catastrophe, showing that honesty arrives too late in a class-divided world.",
        quote: '"Tell me it\'s not true, say it\'s just a story."',
        quoteContext: 'Mrs Johnstone — closing song',
        analysis:
          "The closing song is Mrs Johnstone's testimony. Russell gives her the last word, framing the entire play as a working-class mother's plea for a world where her children could have survived.",
        contextLink:
          "Connect to the tradition of the working-class maternal voice in British drama, from Shelagh Delaney's A Taste of Honey onward. Russell writes in a lineage of playwrights who centre women's experience of poverty.",
      },
    ],
    conclusion:
      'Russell refuses to condemn either mother. Both love their children; both are shaped and constrained by class. The play argues that a just society would not force mothers into the choices that destroy this family.',
  },
  {
    id: 5,
    question: 'How does Russell use dramatic techniques to engage the audience in Blood Brothers?',
    thesis:
      'Russell combines musical theatre, dramatic irony and Brechtian alienation to create a play that moves the audience emotionally while demanding that they think politically.',
    paragraphs: [
      {
        pointHeading: 'Dramatic irony from the prologue',
        topic:
          'By revealing the ending at the start, Russell transforms the audience from passive spectators into critical analysts.',
        quote: '"So did y’ hear the story of the Johnstone twins?"',
        quoteContext: 'Narrator — prologue',
        analysis:
          'The prologue collapses suspense: the audience watches every scene knowing the outcome. This shifts their attention from plot to cause, turning the play into an argument about why the tragedy happens rather than a surprise that it does.',
        contextLink:
          "Link to Brecht's epic theatre and the alienation effect. Russell studied Brecht and adapts his techniques for a popular audience through the accessible form of musical theatre.",
      },
      {
        pointHeading: 'Songs as emotional and political commentary',
        topic:
          'Russell uses the musical form to compress time, intensify emotion and deliver political argument simultaneously.',
        quote: '"Tell me it\'s not true, say it\'s just a story."',
        quoteContext: 'Mrs Johnstone — closing song',
        analysis:
          "The closing song operates on two levels: emotionally, it is devastating; politically, it asks the audience to refuse inevitability. Russell exploits the directness of song to bypass intellectual resistance and reach the audience's feelings, then redirects those feelings toward political awareness.",
        contextLink:
          'Russell chose the musical form deliberately: it reaches audiences who might never attend a political play. Blood Brothers ran in the West End for over 20 years, proving the strategy worked.',
      },
      {
        pointHeading: 'The Narrator as alienation device',
        topic:
          'The Narrator prevents the audience from losing themselves in emotional identification.',
        quote: '"You know the devil\'s got your number."',
        quoteContext: 'Narrator — recurring refrain',
        analysis:
          'The Narrator interrupts the naturalistic action with stylised, almost supernatural warnings. This keeps the audience at a critical distance, reminding them that they are watching a constructed argument, not a slice of life. Russell balances emotional engagement with analytical detachment.',
        contextLink:
          "The Narrator's choric function echoes Greek tragedy as well as Brecht. Russell synthesises classical and modernist techniques to create a form that is both popular and politically sharp.",
      },
    ],
    conclusion:
      "Russell's genius is structural: he uses the accessibility of musical theatre to deliver a political argument that might otherwise be resisted. The audience leaves moved and angry — exactly the combination Russell intends.",
  },
]

/* ── Page ───────────────────────────────────────────────────────────────── */

export default async function BloodBrothersEssayPlansPage() {
  const board = await getServerBoard()
  const allowedBoards = ['edexcel', 'eduqas']
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
            name: 'Blood Brothers',
            url: 'https://theenglishhub.app/revision/texts/blood-brothers',
          },
          {
            name: 'Essay Plans',
            url: 'https://theenglishhub.app/revision/texts/blood-brothers/essay-plans',
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
            render={<Link href="/revision/texts/blood-brothers" />}
          >
            <ArrowLeft className="size-3.5" />
            Back to Blood Brothers
          </Button>

          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge variant="secondary">
              <Drama className="mr-1 size-3 text-violet-400" />
              Modern Text — Play
            </Badge>
            <Badge variant="outline" className="text-muted-foreground">
              <Sparkles className="mr-1 size-3" />
              Edexcel / Eduqas
            </Badge>
          </div>

          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            Essay Plans
          </h1>
          <p className="mt-2 text-body-lg text-muted-foreground">Blood Brothers by Willy Russell</p>
          <p className="mt-4 max-w-2xl text-body-md text-muted-foreground">
            Five exam-style essay plans with thesis statements, paragraph outlines, embedded
            quotations and contextual links. All quotes are 15 words or fewer.
          </p>
        </div>
      </section>

      {/* Essay Plans */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <FileText className="size-5 text-violet-400" />
          <h2 className="text-heading-lg font-heading text-foreground">Plans</h2>
        </div>
        <div className="space-y-8">
          {ESSAY_PLANS.map((plan) => (
            <Card key={plan.id}>
              <CardHeader>
                <CardTitle className="text-heading-md font-heading">Plan {plan.id}</CardTitle>
                <CardDescription className="text-body-sm font-medium italic">
                  {plan.question}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Thesis */}
                <div className="rounded-xl border border-primary/20 bg-primary/5 p-4">
                  <div className="flex items-center gap-2 mb-1.5">
                    <Quote className="size-3.5 text-primary" />
                    <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                      Thesis
                    </p>
                  </div>
                  <p className="text-body-sm text-muted-foreground">{plan.thesis}</p>
                </div>

                {/* Paragraphs */}
                {plan.paragraphs.map((para, i) => (
                  <div key={i} className="space-y-3">
                    <h3 className="text-sm font-semibold text-foreground">
                      Paragraph {i + 1}: {para.pointHeading}
                    </h3>
                    <p className="text-body-sm text-muted-foreground">{para.topic}</p>

                    <div className="rounded-xl border border-border/60 bg-background/50 p-4 space-y-1.5">
                      <p className="text-body-md font-medium italic text-foreground">
                        {para.quote}
                      </p>
                      <p className="text-caption uppercase tracking-wide text-primary">
                        {para.quoteContext}
                      </p>
                      <p className="text-body-sm text-muted-foreground">{para.analysis}</p>
                    </div>

                    <div className="rounded-lg border border-border/40 bg-muted/30 p-3">
                      <p className="text-xs font-semibold text-foreground mb-1">Context link</p>
                      <p className="text-xs text-muted-foreground">{para.contextLink}</p>
                    </div>
                  </div>
                ))}

                {/* Conclusion */}
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-foreground">Conclusion</h3>
                  <p className="text-body-sm text-muted-foreground">{plan.conclusion}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Navigation */}
      <section className="flex flex-wrap gap-3">
        <Button
          variant="outline"
          size="sm"
          render={<Link href="/revision/texts/blood-brothers/acts" />}
        >
          Act-by-act analysis
          <ArrowRight className="size-3.5" />
        </Button>
        <Button
          variant="outline"
          size="sm"
          render={<Link href="/revision/texts/blood-brothers/characters" />}
        >
          Characters
          <ArrowRight className="size-3.5" />
        </Button>
        <Button
          variant="outline"
          size="sm"
          render={<Link href="/revision/texts/blood-brothers/themes" />}
        >
          Themes
          <ArrowRight className="size-3.5" />
        </Button>
        <Button
          variant="outline"
          size="sm"
          render={<Link href="/revision/texts/blood-brothers/key-quotes" />}
        >
          Key quotes
          <ArrowRight className="size-3.5" />
        </Button>
      </section>

      {/* Copyright notice */}
      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
        <strong>Rights notice:</strong> &copy; Methuen Drama / Bloomsbury on behalf of Willy Russell
        (b. 1947). Quotations are short fair-dealing extracts under CDPA 1988 &sect;30 (criticism,
        review, quotation). For full text, students should consult the licensed school edition.
      </p>
    </div>
  )
}
