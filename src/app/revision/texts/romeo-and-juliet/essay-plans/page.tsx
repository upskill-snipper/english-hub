import type { Metadata } from 'next'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { ArrowLeft, BookOpen, Drama, Lightbulb, MessageSquareQuote, Sparkles } from 'lucide-react'

import { getServerBoard } from '@/lib/board/get-server-board'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
import { t } from '@/lib/i18n/t'
export const metadata: Metadata = {
  openGraph: {
    title: 'Romeo and Juliet - GCSE Essay Plans | The English Hub',
    description:
      'Five GCSE-ready essay plans for Romeo and Juliet by William Shakespeare, with thesis statements, paragraph plans, key quotations and examiner tips.',
  },
  title: 'Romeo and Juliet - GCSE Essay Plans',
  description:
    'Five GCSE-ready essay plans for Romeo and Juliet by William Shakespeare, with thesis statements, paragraph plans, key quotations and examiner tips.',
  alternates: {
    canonical: 'https://theenglishhub.app/revision/texts/romeo-and-juliet/essay-plans',
  },
}

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

type ParagraphPlan = {
  point: string
  quotation: string
  analysis: string
}

type EssayPlan = {
  id: number
  question: string
  thesis: string
  paragraphs: ParagraphPlan[]
  conclusion: string
  examinerTip: string
}

const essayPlans: EssayPlan[] = [
  /* ---- Essay 1 ---- */
  {
    id: 1,
    question: 'How does Shakespeare present the theme of love in Romeo and Juliet?',
    thesis:
      'Shakespeare presents love as a powerful, transformative force that exists in constant tension with the social world of Verona. Through contrasting types of love - Petrarchan convention, mutual passion, and familial duty - he suggests that genuine love is simultaneously the most beautiful and the most destructive force in the play.',
    paragraphs: [
      {
        point:
          "Shakespeare initially presents Romeo's love for Rosaline as conventional and shallow, using Petrarchan cliches to show love as a performance rather than a genuine emotion.",
        quotation: '"O brawling love, O loving hate, / O anything of nothing first create!"',
        analysis:
          'The stacked oxymorons sound rehearsed and artificial, revealing that Romeo is performing the role of a lover rather than experiencing real feeling. The paradoxes cancel each other out, suggesting this "love" is empty. Shakespeare uses this as a foil so the audience can measure the depth of Romeo\'s later love for Juliet against this hollow starting point.',
      },
      {
        point:
          'The love between Romeo and Juliet is presented as mutual, transformative and sacred through the shared sonnet at their first meeting.',
        quotation:
          '"If I profane with my unworthiest hand / This holy shrine, the gentle sin is this: / My lips, two blushing pilgrims, ready stand / To smooth that rough touch with a tender kiss."',
        analysis:
          'The pilgrim-and-saint conceit elevates physical attraction into a religious experience. By structuring their first exchange as a shared sonnet - Romeo speaks the first quatrain, Juliet responds with the second, they share the third and the couplet - Shakespeare shows them completing each other\'s thoughts. The religious language ("shrine," "pilgrims," "saints") sanctifies their love, setting it apart from Mercutio\'s bawdy reductions and the Nurse\'s pragmatism.',
      },
      {
        point:
          "Juliet's love matures her from obedient daughter to courageous, independent woman, and Shakespeare presents this love as intellectually sophisticated rather than merely emotional.",
        quotation:
          '"What\'s in a name? That which we call a rose / By any other word would smell as sweet."',
        analysis:
          "Juliet's philosophical questioning of names challenges the entire social structure that sustains the feud. Her argument - that identity is inherent, not imposed by family labels - is logically rigorous and radical for a thirteen-year-old girl in a patriarchal society. Shakespeare uses love as the catalyst for intellectual awakening, showing that genuine passion stimulates thought rather than silencing it.",
      },
      {
        point:
          'Shakespeare links love and death throughout the play, suggesting that in a society poisoned by hatred, true love can only be fully expressed through self-destruction.',
        quotation:
          '"These violent delights have violent ends / And in their triumph die, like fire and powder, / Which as they kiss consume."',
        analysis:
          'The Friar\'s simile of "fire and powder" presents love as a chemical reaction: beautiful in its intensity but inherently self-destructive. The verb "consume" means both to fulfil and to destroy. Shakespeare foreshadows the lovers\' deaths while also arguing that the speed and intensity of their love is inseparable from its tragedy - you cannot have one without the other.',
      },
    ],
    conclusion:
      "Shakespeare presents love as the play's most powerful force, capable of transcending social barriers and inspiring extraordinary courage, but ultimately unable to survive in a world defined by hatred and patriarchal control. The tragedy is not that Romeo and Juliet loved too much, but that Verona's society could not accommodate their love.",
    examinerTip:
      'Examiners reward candidates who distinguish between different types of love in the play (Petrarchan, mutual, parental, bawdy). Show how Shakespeare uses each type to illuminate the others, rather than treating "love" as a single, unchanging concept.',
  },

  /* ---- Essay 2 ---- */
  {
    id: 2,
    question: 'How does Shakespeare present conflict in Romeo and Juliet?',
    thesis:
      'Shakespeare presents conflict as pervasive and self-perpetuating, operating at every level of Veronese society from street brawls to domestic tyranny. The play argues that conflict is not natural but manufactured by codes of honour and patriarchal authority, and that it can only be ended through catastrophic sacrifice.',
    paragraphs: [
      {
        point:
          'Shakespeare establishes the feud as an inherited, irrational force that infects all levels of society, from servants to princes.',
        quotation:
          '"Two households, both alike in dignity, / In fair Verona, where we lay our scene, / From ancient grudge break to new mutiny, / Where civil blood makes civil hands unclean."',
        analysis:
          'The Prologue\'s phrase "ancient grudge" suggests the feud\'s origins are so old they have been forgotten - the violence is now purposeless habit. The pun on "civil" (civilised and civic) argues that the conflict corrupts both individual morality and public order. "Both alike in dignity" emphasises the symmetry of blame: neither family is justified.',
      },
      {
        point:
          'Tybalt embodies the feud at its most dangerous: he actively seeks violence as a matter of personal honour, transforming inherited hatred into individual aggression.',
        quotation:
          '"What, drawn, and talk of peace! I hate the word, / As I hate hell, all Montagues, and thee."',
        analysis:
          'The tricolon places hatred of the Montagues between hatred of hell and hatred of Benvolio (a peacemaker), equating family enmity with damnation. Tybalt\'s contempt for "peace" as a concept reveals how the honour code has distorted values: violence is virtuous, peace is cowardly. Shakespeare presents him as the feud\'s most willing instrument.',
      },
      {
        point:
          'The conflict between parent and child mirrors the public feud, showing that patriarchal power within the family is as destructive as violence in the streets.',
        quotation:
          '"Hang thee, young baggage! Disobedient wretch! / I tell thee what: get thee to church o\' Thursday, / Or never after look me in the face."',
        analysis:
          'Capulet\'s shift from indulgent father to domestic tyrant is abrupt and shocking. The insults "baggage" and "wretch" dehumanise Juliet, reducing her to an object that has failed to fulfil its function. His ultimatum - marry or be disowned - weaponises economic dependence. Shakespeare draws a direct parallel between the public violence of the feud and the private violence of patriarchal authority.',
      },
      {
        point:
          "Shakespeare uses the lovers' deaths to argue that only catastrophic loss can break the cycle of conflict.",
        quotation:
          '"See what a scourge is laid upon your hate, / That heaven finds means to kill your joys with love."',
        analysis:
          'The Prince\'s judgement frames the tragedy as divine punishment: "heaven" has used love itself as the instrument of retribution. The paradox of killing "joys with love" mirrors the play\'s central oxymorons. The word "scourge" implies a whip used on sinners, suggesting the families\' suffering is deserved. Shakespeare argues that the cost of ending entrenched conflict is appallingly high.',
      },
    ],
    conclusion:
      "Shakespeare presents conflict not as a single dramatic event but as a pervasive social disease that operates at every level - street, court, and household. The play's structure, in which every moment of love is shadowed by the threat of violence, argues that conflict and love are locked in a cycle that only death can break.",
    examinerTip:
      'Strong responses connect public conflict (the feud, the street fights) to private conflict (Capulet vs Juliet, Romeo vs himself). Show you understand that Shakespeare is examining how social structures create and sustain violence, not just depicting exciting sword fights.',
  },

  /* ---- Essay 3 ---- */
  {
    id: 3,
    question:
      'How does Shakespeare present Juliet as a young woman growing up in a patriarchal society?',
    thesis:
      "Shakespeare charts Juliet's transformation from an obedient, sheltered daughter into the play's most courageous and intellectually independent character. Her growth is driven by love but defined by her increasingly defiant resistance to the patriarchal structures that seek to control her body, her marriage, and her identity.",
    paragraphs: [
      {
        point:
          "Juliet is initially presented as an obedient daughter who defines herself in relation to her parents' wishes.",
        quotation:
          '"I\'ll look to like, if looking liking move; / But no more deep will I endart mine eye / Than your consent gives strength to make it fly."',
        analysis:
          'Juliet\'s careful, conditional phrasing ("if looking liking move") is deferential but not passive: she agrees to look but reserves the right to feel nothing. The archery metaphor ("endart mine eye") is controlled and precise, suggesting intelligence beneath her compliance. Shakespeare shows a young woman navigating patriarchal expectations with quiet skill.',
      },
      {
        point:
          "Meeting Romeo catalyses Juliet's intellectual independence; she begins to question the social structures that define her world.",
        quotation:
          '"What\'s in a name? That which we call a rose / By any other word would smell as sweet."',
        analysis:
          "The balcony speech marks Juliet's philosophical awakening. She challenges the idea that identity is determined by a family name - an argument that strikes at the root of the patriarchal system, which assigns women to families and transfers them like property through marriage. Her reasoning is logical, systematic, and far more intellectually mature than Romeo's romantic effusions in the same scene.",
      },
      {
        point:
          "Juliet's defiance of her father represents a direct challenge to patriarchal authority, and Shakespeare makes the cost of that defiance brutally clear.",
        quotation:
          '"Is there no pity sitting in the clouds / That sees into the bottom of my grief?"',
        analysis:
          'After being abandoned by both parents and the Nurse, Juliet appeals directly to heaven, bypassing all human authority. The phrase "bottom of my grief" suggests a depth of suffering that no one around her can reach. Shakespeare isolates Juliet completely at this moment: the patriarchal world offers her no support because she has defied its central demand - obedience.',
      },
      {
        point:
          "Juliet's decision to take the potion represents the ultimate act of female agency in the play, as she takes control of her own body in a society that treats it as male property.",
        quotation: '"My dismal scene I needs must act alone. / Come, vial."',
        analysis:
          'The theatrical language ("scene," "act") shows Juliet aware that she is performing a role - but a role she has chosen for herself, not one assigned by her father. The soliloquy before she drinks, with its terrifying catalogue of fears, demonstrates extraordinary courage. Shakespeare gives her the most psychologically complex solo scene in the play, elevating her far above the passive female ideal of Elizabethan convention.',
      },
    ],
    conclusion:
      "Shakespeare presents Juliet's journey as both inspiring and tragic. She grows from an obedient child into a woman capable of philosophical reasoning, emotional resilience and astonishing bravery. But the patriarchal society that surrounds her offers no space for such independence, and her death is the direct consequence of a world in which a young woman's only escape from male control is self-destruction.",
    examinerTip:
      "This question invites you to discuss context meaningfully. Link Juliet's experience to Elizabethan expectations of female obedience, the legal status of women, and the arranged marriage system. Examiners reward candidates who show Shakespeare challenging, not merely reflecting, the attitudes of his time.",
  },

  /* ---- Essay 4 ---- */
  {
    id: 4,
    question: 'How does Shakespeare use the theme of fate in Romeo and Juliet?',
    thesis:
      "Shakespeare constructs fate as a structural principle that operates through the Prologue's foreknowledge, patterns of unlucky timing, and the characters' own language of destiny. However, the play deliberately leaves open the question of whether the lovers are destroyed by cosmic forces or by human failures, creating a tension between fate and free will that the audience must resolve for themselves.",
    paragraphs: [
      {
        point:
          "The Prologue establishes the lovers as fated from the outset, shaping the audience's experience of every subsequent event as inevitable.",
        quotation:
          "\"A pair of star-cross'd lovers take their life; / Whose misadventur'd piteous overthrows / Doth with their death bury their parents' strife.\"",
        analysis:
          'The term "star-cross\'d" draws on the Elizabethan belief that the stars governed human destiny, presenting the lovers as cosmically doomed. The double meaning of "take their life" - both born and killed - compresses their entire existence into a single phrase. By revealing the ending at the start, Shakespeare transforms the audience into witnesses of fate in action: we know what is coming but are powerless to prevent it.',
      },
      {
        point:
          'Shakespeare builds fate through a pattern of ominous premonitions that the characters recognise but cannot act upon.',
        quotation:
          '"I fear too early, for my mind misgives / Some consequence yet hanging in the stars."',
        analysis:
          'Romeo senses his fate before the Capulet feast but goes anyway, establishing a pattern in which characters perceive their doom but are unable to change course. The phrase "hanging in the stars" literalises the astrological metaphor: Romeo\'s destiny is written above him. Shakespeare uses these premonitions to create dramatic irony and to suggest that the characters are drawn towards their destruction by a force they can feel but not resist.',
      },
      {
        point:
          "The play's catastrophe depends on a sequence of unlucky coincidences - the undelivered letter, Romeo's timing - that can be read as either fate or sheer bad luck.",
        quotation:
          '"Unhappy fortune! The letter was not nice but full of charge, / Of dear import."',
        analysis:
          'Friar Lawrence\'s exclamation when he learns the letter failed uses the word "fortune," connecting the plot mechanism to the play\'s larger fate motif. The cause - a plague quarantine - is utterly arbitrary, raising the question of whether fate is a deliberate force or simply random chance. Shakespeare refuses to answer definitively, leaving the audience to weigh cosmic design against human error.',
      },
      {
        point:
          'Romeo\'s final act of defiance - "Then I defy you, stars!" - asserts free will at the moment fate seems most powerful, but his defiance only accelerates the very outcome fate has decreed.',
        quotation: '"Is it e\'en so? Then I defy you, stars!"',
        analysis:
          'The monosyllabic force of "Then I defy you, stars!" is the play\'s most dramatic assertion of human agency. Romeo chooses to act rather than accept what fate has apparently dictated. But the tragic irony is devastating: his act of defiance - racing to the tomb to die beside Juliet - is exactly what fate requires for the prophecy to be fulfilled. Shakespeare suggests that free will and fate may not be opposites but collaborators in the tragic outcome.',
      },
    ],
    conclusion:
      'Shakespeare uses fate as both a dramatic structure and a philosophical question. The Prologue, the premonitions, and the chain of coincidences all suggest a universe governed by forces beyond human control. But the play also shows characters making choices - to fight, to marry in secret, to trust a dangerous plan - that contribute to their destruction. The genius of the play is that it sustains both readings simultaneously.',
    examinerTip:
      "Top-band answers avoid treating fate as a simple force that controls everything. Show that Shakespeare creates ambiguity: the audience can never be sure whether the tragedy is caused by the stars, the feud, or the characters' own choices. Discussing this uncertainty is what elevates an answer from competent to excellent.",
  },

  /* ---- Essay 5 ---- */
  {
    id: 5,
    question:
      'How does Shakespeare present the relationship between youth and age in Romeo and Juliet?',
    thesis:
      "Shakespeare presents the divide between youth and age as a central structural opposition in the play. The young are passionate, impulsive and idealistic; the old are cautious, authoritarian and ultimately ineffective. The tragedy arises precisely because neither generation can communicate with the other, and the adults' attempts to control the young succeed only in driving them towards destruction.",
    paragraphs: [
      {
        point:
          'Shakespeare presents youthful love as spontaneous, absolute and unconcerned with consequences, using the balcony scene to show Romeo and Juliet creating a private world that excludes adult authority.',
        quotation:
          '"But soft, what light through yonder window breaks? / It is the east, and Juliet is the sun."',
        analysis:
          "Romeo's cosmic metaphor - Juliet as the sun - expresses a devotion that is total and immediate. The imagery is excessive by any adult standard, but Shakespeare presents it without irony: this is what first love feels like. The scene takes place at night, in the Capulet orchard, literally trespassing on adult territory. The young lovers create their own sacred space within a landscape owned and controlled by the older generation.",
      },
      {
        point:
          "The older generation's attempts at wisdom consistently fail because they cannot understand the intensity of youthful feeling.",
        quotation: '"Wisely and slow; they stumble that run fast."',
        analysis:
          "The Friar's proverbial advice is sensible in the abstract but useless in the context of Romeo's urgency. More importantly, the Friar himself fails to follow his own counsel: he rushes into a secret marriage, then a reckless faking-death plan. Shakespeare uses the gap between the Friar's wisdom and his actions to criticise the adult world's hypocrisy. The older generation preaches restraint but acts impulsively when their own plans are threatened.",
      },
      {
        point:
          "Lord Capulet's shift from apparently reasonable father to domestic tyrant dramatises how adult authority, when challenged by youthful independence, reveals itself as raw power.",
        quotation:
          '"Hang thee, young baggage! Disobedient wretch! / I tell thee what: get thee to church o\' Thursday, / Or never after look me in the face."',
        analysis:
          'Capulet\'s fury is triggered by disobedience, not by concern for Juliet\'s happiness. The insults reduce her from beloved daughter to disposable property. Shakespeare shows that the surface indulgence of Act 1 ("my will to her consent is but a part") was conditional: the moment Juliet exercises genuine autonomy, the patriarchal mask drops. The scene exposes the generational contract as one-sided: youth must obey, or be destroyed.',
      },
      {
        point:
          "The Nurse's betrayal - advising Juliet to forget Romeo and marry Paris - shows even the most sympathetic adult prioritising safety and convention over youthful passion.",
        quotation:
          '"I think it best you married with the County. / O, he\'s a lovely gentleman! / Romeo\'s a dishclout to him."',
        analysis:
          'The Nurse\'s advice is pragmatic and, from an adult perspective, sensible: Paris is wealthy, available, and legitimate. But Shakespeare frames it as a devastating betrayal because it values security over love. The crude comparison of Romeo to a "dishclout" (dishcloth) shows the Nurse reducing transcendent passion to a practical calculation. Her abandonment leaves Juliet completely alone, with no adult ally.',
      },
    ],
    conclusion:
      'Shakespeare presents the youth-versus-age divide as irreconcilable. The young love too absolutely for the adult world to accommodate, and the old are too invested in authority and convention to listen. The tragedy is that the adults learn the value of what they have destroyed only when it is too late, and the price of their education is the death of their children.',
    examinerTip:
      'Avoid presenting the young as wholly right and the old as wholly wrong. Shakespeare gives both generations genuine qualities and genuine flaws. The best answers show that the tragedy arises from the failure of communication between them, not from the villainy of one side.',
  },
]

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default async function RomeoAndJulietEssayPlansPage() {
  const board = await getServerBoard()
  const allowedBoards = ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse']
  if (board && !allowedBoards.includes(board)) {
    redirect('/revision/texts')
  }

  const essayNLabel = await t('rev.texts.common.essay_n')
  const thesisLabel = await t('rev.texts.common.thesis')
  const paragraphNLabel = await t('rev.texts.common.paragraph_n')
  const pointLabel = await t('rev.texts.common.point')
  const analysisLabel = await t('rev.texts.common.analysis')
  const conclusionLabel = await t('rev.texts.common.conclusion')
  const examinerTipLabel = await t('rev.texts.common.examiner_tip')

  return (
    <div className="space-y-10 pb-16">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'Revision', url: 'https://theenglishhub.app/revision' },
          { name: 'Set Texts', url: 'https://theenglishhub.app/revision/texts' },
          {
            name: 'Romeo and Juliet',
            url: 'https://theenglishhub.app/revision/texts/romeo-and-juliet',
          },
          {
            name: 'Essay Plans',
            url: 'https://theenglishhub.app/revision/texts/romeo-and-juliet/essay-plans',
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
            render={<Link href="/revision/texts/romeo-and-juliet" />}
          >
            <ArrowLeft className="size-3.5" />
            {(await t('rev.texts.common.back_to_text')).replace('{text}', 'Romeo and Juliet')}
          </Button>

          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge variant="secondary">
              <Drama className="mr-1 size-3 text-violet-400" />
              {await t('rev.texts.common.shakespeare_play_badge')}
            </Badge>
            <Badge variant="outline" className="text-muted-foreground">
              <Sparkles className="mr-1 size-3" />
              AQA / Edexcel / OCR / Eduqas / Edexcel iGCSE
            </Badge>
          </div>

          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            {await t('rev.texts.rj.essays.title')}
          </h1>
          <p className="mt-2 max-w-2xl text-body-lg text-muted-foreground">
            {await t('rev.texts.rj.essays.intro')}
          </p>
        </div>
      </section>

      {/* Essay Plans */}
      {essayPlans.map((essay) => (
        <section key={essay.id}>
          <div className="mb-5 flex items-center gap-3">
            <BookOpen className="size-5 text-blue-400" />
            <h2 className="text-heading-lg font-heading text-foreground">
              {essayNLabel.replace('{n}', String(essay.id))}
            </h2>
          </div>

          {/* Question */}
          <Card className="mb-4">
            <CardHeader>
              <CardTitle className="text-heading-md font-heading">{essay.question}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-body-sm text-muted-foreground">
              <div>
                <h4 className="mb-1 text-sm font-semibold text-foreground">{thesisLabel}</h4>
                <p>{essay.thesis}</p>
              </div>
            </CardContent>
          </Card>

          {/* Paragraphs */}
          <div className="grid gap-4">
            {essay.paragraphs.map((para, i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle className="text-heading-md font-heading">
                    {paragraphNLabel.replace('{n}', String(i + 1))}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-body-sm text-muted-foreground">
                  <div>
                    <h4 className="mb-1 text-sm font-semibold text-foreground">{pointLabel}</h4>
                    <p>{para.point}</p>
                  </div>

                  <div className="rounded-lg border border-border/60 bg-muted/30 p-4">
                    <div className="flex items-start gap-2">
                      <MessageSquareQuote className="mt-0.5 size-4 shrink-0 text-violet-400" />
                      <p className="text-body-sm font-medium italic text-foreground">
                        {para.quotation}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="mb-1 text-sm font-semibold text-foreground">{analysisLabel}</h4>
                    <p>{para.analysis}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Conclusion & Tip */}
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-heading-md font-heading">{conclusionLabel}</CardTitle>
              </CardHeader>
              <CardContent className="text-body-sm text-muted-foreground">
                <p>{essay.conclusion}</p>
              </CardContent>
            </Card>

            <Card className="border-amber-500/20 bg-amber-500/[0.03]">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Lightbulb className="size-4 text-clay-600" />
                  <CardTitle className="text-heading-md font-heading">{examinerTipLabel}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-body-sm text-muted-foreground">
                <p>{essay.examinerTip}</p>
              </CardContent>
            </Card>
          </div>
        </section>
      ))}
    </div>
  )
}
