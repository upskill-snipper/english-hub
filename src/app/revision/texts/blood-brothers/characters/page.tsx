import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Drama, Quote, Sparkles, Users } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { getServerBoard } from '@/lib/board/get-server-board'

import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
import { t } from '@/lib/i18n/t'
export const metadata: Metadata = {
  openGraph: {
    title: 'Blood Brothers - Character Analysis | The English Hub',
    description:
      'In-depth character analysis for Blood Brothers by Willy Russell: Mickey, Eddie, Mrs Johnstone, Mrs Lyons, Linda, Narrator and Sammy.',
  },
  title: 'Blood Brothers - Character Analysis',
  description:
    'In-depth character analysis for Blood Brothers by Willy Russell: Mickey, Eddie, Mrs Johnstone, Mrs Lyons, Linda, Narrator and Sammy.',
  alternates: {
    canonical: 'https://theenglishhub.app/revision/texts/blood-brothers/characters',
  },
}

/* ── Character data ────────────────────────────────────────────────────── */

type CharacterProfile = {
  name: string
  role: string
  overview: string
  arc: string
  keyQuotes: { text: string; context: string; analysis: string }[]
  examTip: string
}

const CHARACTERS: CharacterProfile[] = [
  {
    name: 'Mickey Johnstone',
    role: 'The twin raised in poverty',
    overview:
      "Mickey is energetic, funny and warm as a child, then ground down by unemployment, prison and depression as an adult. Russell uses his trajectory to argue that environment, not innate character, decides a person's life. Mickey begins as the more charismatic twin but ends broken, while Edward - genetically identical - thrives.",
    arc: "Mickey moves from childhood innocence through teenage swagger to adult desperation. His decline mirrors Liverpool's economic collapse in the 1980s. After prison, he becomes dependent on antidepressants and cannot reconnect with Linda or with his own sense of self. His final confrontation with Edward is driven not by jealousy alone but by the unbearable realisation that his suffering was arbitrary.",
    keyQuotes: [
      {
        text: '"I wish I was our Sammy."',
        context: 'Act 1 - childhood song',
        analysis:
          "Innocent wish to be older that foreshadows Mickey's later, devastating wish to have been Edward. Russell plants the pattern of wanting a different life early.",
      },
      {
        text: '"Well, how come you got everything... an\' I got nothin\'?"',
        context: 'Act 2 - final scene',
        analysis:
          "The play's thesis distilled into ordinary speech. Mickey articulates class rage as a raw question, making the political argument viscerally personal.",
      },
      {
        text: '"I could have been him."',
        context: 'Act 2 - confrontation',
        analysis:
          'Mickey grasps the nature-versus-nurture argument the audience already knows. Russell delays this revelation to maximum dramatic effect.',
      },
    ],
    examTip:
      "Always connect Mickey's decline to context: 1980s deindustrialisation, Thatcherism and mass unemployment in Liverpool. Examiners reward candidates who treat Mickey as Russell's political argument, not just a tragic individual.",
  },
  {
    name: 'Edward Lyons',
    role: 'The twin raised in wealth',
    overview:
      "Edward is kind, bookish and generous, but his privilege is unmistakable. Russell carefully shows that the same warmth is read as charming in Edward and foolish in Mickey, simply because of accent and address. Edward's advantages - private school, university, a career in local politics - are not earned but inherited.",
    arc: 'Edward moves from sheltered childhood through boarding school to university and a council career. He remains generous throughout, yet Russell never lets the audience forget that his generosity is underwritten by wealth. His attempt to help Mickey in adulthood is well-meaning but patronising, and it accelerates the catastrophe.',
    keyQuotes: [
      {
        text: '"I thought we always stuck together."',
        context: 'Act 2 - confrontation with Mickey',
        analysis:
          "Edward's plea to their boyhood blood-brother bond exposes the gulf between his sentimental faith in friendship and Mickey's lived reality. What he sees as friendship, Mickey experiences as charity - a gulf Russell makes structurally inevitable.",
      },
    ],
    examTip:
      'Avoid reducing Edward to a simple foil for Mickey. Russell makes him likeable precisely so the audience feels the injustice: two identical people, one lucky, one not. Examiners value nuance here.',
  },
  {
    name: 'Mrs Johnstone',
    role: 'Biological mother of both boys',
    overview:
      "Warm, funny, exhausted and trapped, Mrs Johnstone is Russell's portrait of working-class motherhood under Thatcherism. She is not feckless or negligent - she gives up her child because Mrs Lyons exploits her economic vulnerability. Her opening and closing songs frame the play as her testimony.",
    arc: "Mrs Johnstone begins as a young woman abandoned by her husband, working to feed seven children. She agrees to the pact not from greed but from desperation. Throughout the play she carries guilt silently. Her final revelation of the truth to both boys is an act of honesty that arrives too late, underlining Russell's point that class structures deny working-class people the power to shape their own stories.",
    keyQuotes: [
      {
        text: '"Tell me it\'s not true, say it\'s just a story."',
        context: 'Act 2 - closing song',
        analysis:
          'The haunting refrain asks the audience to refuse the tragedy. Russell implicates the viewers: if they are moved, they must ask why society allows this.',
      },
      {
        text: '"Shoes upon the table."',
        context: 'Act 1 - superstition motif',
        analysis:
          "Working-class superstition used as a motif. Russell parallels genuine folk belief with Mrs Lyons's invented curse to question who controls narratives of fate.",
      },
      {
        text: '"Only mine until the time comes round to pay the bill."',
        context: 'Act 1 - giving up the baby',
        analysis:
          "Mrs Johnstone's anguish when she tries to reclaim the child. Russell shows that maternal love is powerless against class privilege.",
      },
    ],
    examTip:
      "Examiners reward candidates who discuss Mrs Johnstone as a structural victim of class, not a bad mother. Connect her songs to Russell's use of the musical form to give working-class women a voice.",
  },
  {
    name: 'Mrs Lyons',
    role: 'Middle-class adoptive mother',
    overview:
      'Lonely, infertile and increasingly unhinged, Mrs Lyons uses class privilege to claim a child she did not bear. Russell refuses simple villainy: her loneliness is real, and her descent into paranoia is tragic in its own right. She fabricates the twins superstition as a weapon of control, then becomes its prisoner.',
    arc: 'Mrs Lyons begins as a desperate but outwardly composed woman. After taking Edward, her fear of discovery grows into obsessive paranoia. She attacks Mrs Johnstone, tries to bribe her and eventually attempts violence. Her trajectory shows that privilege does not bring peace - it only provides different forms of suffering.',
    keyQuotes: [
      {
        text: '"Give one to me."',
        context: 'Act 1 - the pact',
        analysis:
          'A blunt imperative exposing class entitlement. Mrs Lyons frames buying a child as reasonable because her social position permits it.',
      },
      {
        text: '"You do know what they say about twins, secretly parted, don\'t you?"',
        context: 'Act 1 - the invented superstition',
        analysis:
          'Mrs Lyons creates the curse that drives the plot. Russell turns an act of manipulation into a self-fulfilling prophecy driven by class forces.',
      },
      {
        text: '"You see why I don\'t want you mixing with boys like that!"',
        context: 'Act 1 - forbidding friendship',
        analysis:
          "Mrs Lyons polices the class boundary. Her fear is not of Mickey but of what his existence reveals about Edward's origins.",
      },
    ],
    examTip:
      'Compare Mrs Lyons with Mrs Johnstone as a paired study. Russell uses two mothers to show that class determines not only opportunity but also the forms of love and fear available to women.',
  },
  {
    name: 'Linda',
    role: "Mickey's childhood sweetheart and wife",
    overview:
      'Feisty, loyal and outspoken as a girl, Linda grows up alongside Mickey and Edward. She marries Mickey, but as his depression deepens she is left isolated and desperate. Russell uses her to show how poverty and mental illness do not just destroy individuals - they destroy relationships.',
    arc: 'Linda begins as a bold, equal presence in the childhood trio. As an adult, she supports Mickey through unemployment and prison. When Mickey withdraws into medication, she turns to Edward for help - an act of pragmatism, not betrayal. Russell makes clear that her choices are constrained by the same class forces that crush Mickey.',
    keyQuotes: [
      {
        text: '"If you\'d been born here, you would have been just like him."',
        context: 'Act 2 - adolescence',
        analysis:
          "Linda voices the play's central question directly. Russell lets a teenager articulate what adult society refuses to acknowledge.",
      },
      {
        text: '"I wanna kiss y\'."',
        context: 'Act 2 - Mickey to Linda, on medication',
        analysis:
          "A fragmented moment of tenderness from a Mickey numbed by antidepressants. Russell shows love persisting inside structures designed to crush it, while making the cost of poverty and prison painfully visible in Mickey's broken speech.",
      },
    ],
    examTip:
      "Avoid blaming Linda for turning to Edward. Russell constructs her as a victim of the same system. Examiners reward discussion of how Russell presents women's limited choices under poverty.",
  },
  {
    name: 'The Narrator',
    role: 'Choric commentator',
    overview:
      'A brooding, almost supernatural figure who threads the play together with songs and warnings. The Narrator is not a character in the realist sense but a dramatic device. He embodies the sense of class-driven fate, asking the audience to decide whether the tragedy is caused by superstition or by society.',
    arc: "The Narrator is present from the first line to the last. He does not change; instead, his repeated warnings create an atmosphere of inevitability. Russell uses him to keep the audience at a critical distance, preventing pure emotional identification and forcing analytical engagement with the play's politics.",
    keyQuotes: [
      {
        text: '"You know the devil\'s got your number."',
        context: 'Recurring refrain',
        analysis:
          'The "devil" functions as a metaphor for systemic class forces. Russell repurposes superstitious language to critique a fatalistic society.',
      },
      {
        text: '"There\'s a man gone mad in the town tonight."',
        context: 'Act 2 - approaching climax',
        analysis:
          "The Narrator's warning drives rising dread. Russell uses the ballad form to make Mickey's breakdown feel both personal and historically inevitable.",
      },
      {
        text: '"And do we blame superstition for what came to pass?"',
        context: 'Act 2 - final line',
        analysis:
          "The Narrator's closing question rejects the supernatural reading. Russell demands the audience locate blame in class structures, not fate.",
      },
    ],
    examTip:
      'Discuss the Narrator as a Brechtian device. Russell uses him to break the fourth wall and prevent comfortable emotional catharsis, forcing the audience to think critically about why the tragedy happens.',
  },
  {
    name: 'Sammy Johnstone',
    role: "Mickey's older brother",
    overview:
      'Sammy is aggressive, reckless and violent, but Russell does not present him as naturally bad. He is a product of the same deprivation that shapes Mickey. His trajectory from petty childhood troublemaker to armed robber illustrates how poverty escalates risk and narrows choices.',
    arc: "Sammy moves from childhood mischief to violent crime. He drags Mickey into an armed robbery that leads to Mickey's imprisonment. Russell uses Sammy to show the spectrum of working-class outcomes: where Mickey is ground down, Sammy lashes out. Both responses are consequences of the same environment.",
    keyQuotes: [
      {
        text: '"I\'ll get y\' after."',
        context: 'Act 1 - Sammy threatening',
        analysis:
          "Even as children, Sammy's aggression is apparent. Casual childhood threats foreshadow the adult violence that culminates in armed robbery. Russell shows how the Johnstone environment normalises aggression where power is scarce.",
      },
    ],
    examTip:
      'Sammy is a minor character, but he is structurally important. Use him to argue that Russell shows a range of working-class responses to deprivation, avoiding the stereotype that poverty produces a single type of person.',
  },
]

/* ── Page ───────────────────────────────────────────────────────────────── */

export default async function BloodBrothersCharactersPage() {
  const board = await getServerBoard()
  const allowedBoards = ['edexcel', 'eduqas']
  if (board && !allowedBoards.includes(board)) {
    redirect('/revision/texts')
  }

  // Pre-resolve chrome labels used inside .map() callbacks.
  const overviewLabel = await t('rev.texts.common.overview')
  const characterArcLabel = await t('rev.texts2.common.character_arc_sc')
  const keyQuotationsLabel = await t('rev.texts2.common.key_quotations_sc')
  const examTipLabel = await t('rev.texts2.common.exam_tip')

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
            name: 'Characters',
            url: 'https://theenglishhub.app/revision/texts/blood-brothers/characters',
          },
        ]}
      />
      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-emerald-500/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-emerald-500/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-violet-500/5 blur-3xl" />
        <div className="relative">
          <Button
            variant="ghost"
            size="sm"
            className="mb-4 -ml-2 text-muted-foreground"
            render={<Link href="/revision/texts/blood-brothers" />}
          >
            <ArrowLeft className="size-3.5" />
            {(await t('rev.texts.common.back_to_text')).replace('{text}', 'Blood Brothers')}
          </Button>

          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge variant="secondary">
              <Drama className="mr-1 size-3 text-violet-400" />
              {await t('rev.texts2.common.modern_text_play')}
            </Badge>
            <Badge variant="outline" className="text-muted-foreground">
              <Sparkles className="mr-1 size-3" />
              Edexcel / Eduqas
            </Badge>
          </div>

          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            {await t('rev.texts.common.character_analysis')}
          </h1>
          <p className="mt-2 text-body-lg text-muted-foreground">Blood Brothers by Willy Russell</p>
          <p className="mt-4 max-w-2xl text-body-md text-muted-foreground">
            {await t('rev.texts2.bb.characters.intro')}
          </p>
        </div>
      </section>

      {/* Characters */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <Users className="size-5 text-emerald-400" />
          <h2 className="text-heading-lg font-heading text-foreground">
            {await t('rev.texts.common.characters')}
          </h2>
        </div>
        <div className="space-y-6">
          {CHARACTERS.map((c) => (
            <Card key={c.name}>
              <CardHeader>
                <CardTitle className="text-heading-md font-heading">{c.name}</CardTitle>
                <CardDescription>{c.role}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-5">
                {/* Overview */}
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-foreground">{overviewLabel}</h3>
                  <p className="text-body-sm text-muted-foreground">{c.overview}</p>
                </div>

                {/* Arc */}
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-foreground">
                    {characterArcLabel}
                  </h3>
                  <p className="text-body-sm text-muted-foreground">{c.arc}</p>
                </div>

                {/* Key quotes */}
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold text-foreground">{keyQuotationsLabel}</h3>
                  {c.keyQuotes.map((q) => (
                    <div
                      key={q.text}
                      className="rounded-xl border border-border/60 bg-background/50 p-4 space-y-1.5"
                    >
                      <p className="text-body-md font-medium italic text-foreground">{q.text}</p>
                      <p className="text-caption uppercase tracking-wide text-primary">
                        {q.context}
                      </p>
                      <p className="text-body-sm text-muted-foreground">{q.analysis}</p>
                    </div>
                  ))}
                </div>

                {/* Exam tip */}
                <div className="rounded-xl border border-primary/20 bg-primary/5 p-4">
                  <div className="flex items-center gap-2 mb-1.5">
                    <Quote className="size-3.5 text-primary" />
                    <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                      {examTipLabel}
                    </p>
                  </div>
                  <p className="text-body-sm text-muted-foreground">{c.examTip}</p>
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
          {await t('rev.texts2.common.act_by_act_sc')}
          <ArrowRight className="size-3.5" />
        </Button>
        <Button
          variant="outline"
          size="sm"
          render={<Link href="/revision/texts/blood-brothers/themes" />}
        >
          {await t('rev.texts.common.themes')}
          <ArrowRight className="size-3.5" />
        </Button>
        <Button
          variant="outline"
          size="sm"
          render={<Link href="/revision/texts/blood-brothers/key-quotes" />}
        >
          {await t('rev.texts2.common.key_quotes_sc')}
          <ArrowRight className="size-3.5" />
        </Button>
        <Button
          variant="outline"
          size="sm"
          render={<Link href="/revision/texts/blood-brothers/essay-plans" />}
        >
          {await t('rev.texts2.common.essay_plans_sc')}
          <ArrowRight className="size-3.5" />
        </Button>
      </section>

      {/* Copyright notice */}
      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
        <strong>{await t('rev.texts2.common.rights_notice_label')}</strong>
        {await t('rev.texts2.bb.rights_body')}
      </p>
    </div>
  )
}
