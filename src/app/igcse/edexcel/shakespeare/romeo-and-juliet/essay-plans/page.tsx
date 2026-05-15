import type { Metadata } from 'next'
import Link from 'next/link'
import { GraduationCap } from 'lucide-react'
import { ExamBoardDisclaimer } from '@/components/ExamBoardDisclaimer'
import { requireIgcseBoard } from '@/app/igcse/_lib/guard'

import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
export const metadata: Metadata = {
  openGraph: {
    title: 'Romeo and Juliet Essay Plans — Edexcel IGCSE Literature',
    description:
      'Five model essay plans for Romeo and Juliet with paragraph-by-paragraph structure, key quotations and context for Edexcel IGCSE English Literature.',
  },
  alternates: {
    canonical: 'https://theenglishhub.app/igcse/edexcel/shakespeare/romeo-and-juliet/essay-plans',
  },
  title: 'Romeo and Juliet Essay Plans — Edexcel IGCSE Literature',
  description:
    'Five model essay plans for Romeo and Juliet with paragraph-by-paragraph structure, key quotations and context for Edexcel IGCSE English Literature.',
}

const ESSAY_PLANS = [
  {
    id: 'love',
    question: 'How does Shakespeare present love in Romeo and Juliet?',
    introduction:
      "Define love as the play's central subject, but note that Shakespeare stages multiple competing versions of it. Thesis: Shakespeare presents love as a transformative, dangerous force that is most powerful when it is most genuine -- and most destructive when it collides with a society built on patriarchy, honour and feuding.",
    paragraphs: [
      {
        topic: "Romeo's Petrarchan love for Rosaline as performance",
        argument:
          "Romeo's opening speeches are saturated with Petrarchan convention: 'O brawling love, O loving hate' (1.1). The oxymorons are self-conscious and borrowed. He is in love with the idea of being in love. Shakespeare deliberately establishes this artificial version first so that the audience can measure it against the real thing when Juliet appears.",
        key_quote: '"O brawling love, O loving hate, O anything of nothing first create!" (1.1)',
        context:
          "Petrarchan love poetry dominated Elizabethan culture. Shakespeare's audience would have recognised Romeo's language as a literary pose -- fashionable, expected, and hollow.",
      },
      {
        topic: 'The shared sonnet -- love as mutual creation',
        argument:
          'When Romeo and Juliet meet (1.5), they share a sonnet, alternating lines in a pattern of pilgrim and saint. Neither dominates -- the language is collaborative. Shakespeare uses the sonnet form itself to signal that this love is different: it is structured, reciprocal, and creative rather than one-sided and performative.',
        key_quote:
          '"If I profane with my unworthiest hand this holy shrine, the gentle sin is this: my lips, two blushing pilgrims, ready stand to smooth that rough touch with a tender kiss" (1.5)',
        context:
          'The sonnet was the most prestigious poetic form of the era. By having the lovers compose one together in dialogue, Shakespeare signals that their love has the weight and seriousness of art.',
      },
      {
        topic: 'Love against the world -- the balcony scene',
        argument:
          "In the balcony scene (2.2), Juliet challenges Romeo to move beyond names and surfaces: 'What's in a name? That which we call a rose by any other word would smell as sweet.' Shakespeare shows Juliet as the more clear-sighted lover -- she sees that names are the obstacle and is willing to renounce hers. Love in this scene is defined by its willingness to sacrifice social identity.",
        key_quote:
          '"What\'s in a name? That which we call a rose by any other word would smell as sweet" (2.2)',
        context:
          "In Elizabethan society, a family name carried legal, financial and social weight. Juliet's willingness to abandon hers is radical -- it means giving up inheritance, protection and status.",
      },
      {
        topic: 'Love tested by violence -- Act 3 as the turning point',
        argument:
          "After Tybalt's death, Romeo cries 'O, I am fortune's fool!' (3.1). Love and violence have collided. Juliet's response when she learns Romeo killed her cousin is extraordinary: 'My husband lives, that Tybalt would have slain, and Tybalt's dead, that would have slain my husband' (3.2). She chooses love over family loyalty in a single line of reasoning. Shakespeare shows love surviving the test but at the cost of isolation from everyone else.",
        key_quote: '"O, I am fortune\'s fool!" (3.1)',
        context:
          "The pivot from comedy to tragedy in Act 3 mirrors the structure of the play's source, Brooke's poem, but Shakespeare compresses it to heighten the sense that love and violence are inseparable in a feuding society.",
      },
      {
        topic: 'Love and death -- the tomb as wedding chamber',
        argument:
          "In the tomb (5.3), Romeo calls death a lover: 'Shall I believe that unsubstantial Death is amorous, and that the lean abhorred monster keeps thee here in dark to be his paramour?' The tomb becomes a twisted wedding chamber. Shakespeare's final argument about love is that in a world that cannot accommodate it, love and death become the same thing. The lovers' sacrifice is what finally ends the feud.",
        key_quote: '"Thus with a kiss I die" (5.3)',
        context:
          "The Elizabethan audience would have understood 'die' as carrying a sexual double meaning. Shakespeare deliberately conflates erotic love and literal death throughout the final scene.",
      },
    ],
    conclusion:
      'Shakespeare presents love as the most powerful force in the play -- powerful enough to transcend names, families and social convention. But he also shows that this kind of love cannot survive in a world governed by patriarchal control and honour violence. The tragedy is not that Romeo and Juliet love too much, but that their world is too small for what they feel.',
  },
  {
    id: 'fate',
    question: 'How does Shakespeare present fate in Romeo and Juliet?',
    introduction:
      "Define fate as the play's structural framework. Thesis: Shakespeare presents fate as an inescapable force that the prologue announces and the plot confirms -- but he simultaneously seeds the play with human decisions that could have changed everything, keeping both fate and free will alive as explanations for the tragedy.",
    paragraphs: [
      {
        topic: 'The prologue announces fate before the play begins',
        argument:
          "The Chorus names the lovers as 'star-cross'd' and tells us they will 'take their life' before we have met a single character. Shakespeare removes all suspense about the outcome so that the audience watches not to discover what happens, but to understand how and why. The prologue frames the entire play as a tragedy already written in the stars.",
        key_quote: '"A pair of star-cross\'d lovers take their life" (Prologue)',
        context:
          "Elizabethans widely accepted astrology as a real influence on human destiny. 'Star-cross'd' would have been taken literally -- the stars themselves have doomed these lovers.",
      },
      {
        topic: "Romeo's premonitions -- fate felt before it arrives",
        argument:
          "Before the Capulet ball, Romeo has a foreboding: 'my mind misgives some consequence yet hanging in the stars shall bitterly begin his fearful date with this night's revels' (1.4). He senses catastrophe but goes anyway. Shakespeare uses premonition to strengthen the feeling of inevitability while simultaneously showing that Romeo has the freedom to stay home -- and chooses not to.",
        key_quote:
          '"Some consequence yet hanging in the stars shall bitterly begin his fearful date with this night\'s revels" (1.4)',
        context:
          "The tension between predestination and free will was a major theological debate. Calvinist Protestants believed God had already determined every soul's fate; others insisted on human agency.",
      },
      {
        topic: "Fortune's fool -- fate and the Act 3 pivot",
        argument:
          "After killing Tybalt, Romeo cries 'O, I am fortune's fool!' (3.1). The word 'fool' suggests he is fate's plaything -- a puppet on fortune's wheel. But Shakespeare has just shown us a chain of human decisions: Tybalt challenges Romeo, Romeo refuses, Mercutio intervenes, Romeo tries to stop the fight, Mercutio dies, Romeo avenges him. Every step is a choice. Shakespeare lets Romeo blame fate while showing us free will.",
        key_quote: '"O, I am fortune\'s fool!" (3.1)',
        context:
          "The medieval concept of Fortune's Wheel -- where every rise guarantees a fall -- was still a powerful image for Elizabethan audiences. Romeo sees himself at the bottom of the wheel.",
      },
      {
        topic: "The Friar's letter -- fate or bad luck?",
        argument:
          "Friar Lawrence's letter explaining Juliet's fake death never reaches Romeo because Friar John is quarantined in a plague house (5.2). Shakespeare introduces plague -- random, uncontrollable, lethal -- as the mechanism that makes the plan fail. Is this fate intervening, or is it sheer bad luck amplified by a reckless plan? Shakespeare deliberately refuses to answer, preserving the play's double vision.",
        key_quote:
          '"Unhappy fortune! The letter was not nice but full of charge, of dear import" (5.2)',
        context:
          'Plague was a constant reality in Elizabethan London -- theatres were regularly closed during outbreaks. The audience would have felt the horror of quarantine viscerally.',
      },
      {
        topic: 'Romeo defies the stars -- but too late',
        argument:
          "When Romeo hears of Juliet's death, he cries 'Then I defy you, stars!' (5.1). This is his most assertive moment -- he refuses to accept what fate has dealt him. But his defiance leads him to buy poison and race to the tomb, arriving minutes before Juliet wakes. Shakespeare's cruellest irony is that the one moment Romeo exercises total free will is the moment that seals the tragedy.",
        key_quote: '"Then I defy you, stars!" (5.1)',
        context:
          "The dramatic irony depends on the audience knowing from the prologue that Romeo's defiance is futile. Shakespeare makes us watch him run toward a death we have already been told about.",
      },
    ],
    conclusion:
      "Shakespeare presents fate not as a simple mechanism but as an open question. The prologue says the lovers are doomed; the plot shows human decisions at every turning point; the Friar's letter fails by accident; Romeo's defiance of fate produces the very outcome fate predicted. Shakespeare holds both readings in tension to the end, and the play's power comes from that refusal to choose between them.",
  },
  {
    id: 'conflict',
    question: 'How does Shakespeare present conflict in Romeo and Juliet?',
    introduction:
      'Define conflict as both physical (the feud, the duels) and structural (love vs hate, youth vs age, individual vs society). Thesis: Shakespeare presents conflict as a self-perpetuating system that poisons every relationship in the play, and that can only be ended by the sacrifice of the innocent.',
    paragraphs: [
      {
        topic: 'The opening brawl -- conflict as inherited habit',
        argument:
          "The play opens with servants trading insults ('Do you bite your thumb at us, sir?', 1.1) that escalate into a street fight. The servants do not know why they are fighting -- they have inherited the feud along with their livery. Shakespeare shows conflict as a social reflex rather than a reasoned response. The Prince's intervention and death threat establish that the feud has exhausted civic tolerance.",
        key_quote: '"Do you bite your thumb at us, sir?" (1.1)',
        context:
          "Street violence was a real problem in Elizabethan London. Apprentice riots were common. Shakespeare's audience would have recognised the opening brawl as uncomfortably familiar, not distant and foreign.",
      },
      {
        topic: 'Tybalt as the feud personified',
        argument:
          "Tybalt embodies the feud in its purest form. He hates the word 'peace' (1.1), refuses to tolerate Romeo's presence at the ball ('Now by the stock and honour of my kin, to strike him dead I hold it not a sin', 1.5), and hunts Romeo through the streets. Shakespeare does not make Tybalt a villain -- he makes him a product of the system. He does exactly what honour culture expects.",
        key_quote:
          '"What, drawn, and talk of peace? I hate the word, as I hate hell, all Montagues, and thee" (1.1)',
        context:
          "Honour duelling was technically illegal in Elizabethan England but widely practised among young men. Tybalt's behaviour would have been recognisable, if not admirable.",
      },
      {
        topic: "Mercutio's death -- the comedy dies with him",
        argument:
          "Mercutio is killed by Tybalt under Romeo's arm as Romeo tries to make peace (3.1). His dying curse -- 'A plague o' both your houses!' -- is repeated three times. Shakespeare makes the point explicit: the feud kills the play's most vital, entertaining character. From this moment the tone shifts permanently from comedy to tragedy. Conflict has consumed the possibility of laughter.",
        key_quote:
          '"A plague o\u2019 both your houses! They have made worms\u2019 meat of me" (3.1)',
        context:
          "Mercutio is the Prince's kinsman -- neither Montague nor Capulet. His death shows that the feud does not stay contained within the two families; it damages everyone in its orbit.",
      },
      {
        topic: "Domestic conflict -- Capulet's rage at Juliet",
        argument:
          "When Juliet refuses to marry Paris, Capulet erupts: 'Hang thee, young baggage! disobedient wretch!' (3.5). The feud has moved indoors. Shakespeare stages conflict not just as swords in the street but as patriarchal violence in the home. Lady Capulet sides with her husband; the Nurse capitulates. Juliet is left entirely alone -- the conflict has stripped away every source of support.",
        key_quote: '"Hang thee, young baggage! disobedient wretch!" (3.5)',
        context:
          "A father's right to choose his daughter's husband was legally and socially unchallenged. Capulet's fury, while shocking, would not have been considered illegitimate by much of the audience.",
      },
      {
        topic: 'Resolution through sacrifice -- the tomb',
        argument:
          "The feud ends only when the Capulets and Montagues stand over the bodies of their children. The Prince's closing verdict -- 'All are punish'd' (5.3) -- spreads guilt evenly. Shakespeare's structural argument is devastating: the conflict could not be resolved by the Prince's threats, by the Friar's schemes, or by the lovers' marriage. Only death had enough force to break the cycle.",
        key_quote: '"All are punish\u2019d" (5.3)',
        context:
          'The reconciliation over the bodies echoes the medieval morality play, where suffering produces moral instruction. Shakespeare uses the convention but makes it cost two innocent lives.',
      },
    ],
    conclusion:
      'Shakespeare presents conflict as a system with its own momentum. It is inherited by servants who do not understand it, enforced by young men who cannot escape it, and suffered most acutely by the young people who had no part in starting it. The play argues that entrenched hatred can only be broken by loss so extreme that even the most stubborn participants are forced to grieve together.',
  },
  {
    id: 'juliet',
    question: 'How does Shakespeare present Juliet as a strong character?',
    introduction:
      "Define strength not as physical power but as intellectual clarity, emotional courage and the willingness to defy social expectations. Thesis: Shakespeare presents Juliet as the play's strongest character by tracking her growth from obedient daughter to independent thinker, defiant rebel and, finally, someone who chooses death on her own terms.",
    paragraphs: [
      {
        topic: 'Obedience as starting point -- strength is learned',
        argument:
          "In Act 1 Scene 3, Juliet tells her mother 'It is an honour that I dream not of' when asked about marriage. The line is deferential and dutiful. But Shakespeare also makes it ambiguous -- 'dream not of' could mean she has not yet thought about it, or that she does not consider it an honour at all. Even in obedience, her language hints at a mind that is working independently.",
        key_quote: '"It is an honour that I dream not of" (1.3)',
        context:
          "A daughter's obedience to her parents was expected in Elizabethan society -- it was a religious and legal duty. Juliet's starting position is entirely conventional.",
      },
      {
        topic: 'Intellectual strength -- the balcony scene',
        argument:
          "In the balcony scene (2.2), Juliet is the more rational speaker. While Romeo swears by the moon, she stops him: 'O, swear not by the moon, the inconstant moon, that monthly changes in her circled orb, lest that thy love prove likewise variable.' She demands sincerity over romance. Her question 'What's in a name?' is a philosophical argument that goes further than Romeo ever goes -- she is willing to think her way out of the feud rather than just feel her way.",
        key_quote: '"O, swear not by the moon, the inconstant moon" (2.2)',
        context:
          "For a girl of nearly fourteen to correct her suitor's rhetoric would have been striking. Shakespeare gives Juliet the intellectual authority that Elizabethan convention reserved for men.",
      },
      {
        topic: 'Emotional strength -- choosing Romeo over Tybalt',
        argument:
          "When Juliet learns that Romeo has killed Tybalt, her initial reaction is shock and contradiction: 'Beautiful tyrant! fiend angelical!' (3.2). But she resolves the conflict within the same scene, reasoning that 'My husband lives, that Tybalt would have slain'. Shakespeare shows her choosing love over blood-family in a single passage of internal argument -- a decision of extraordinary emotional courage for a character her age.",
        key_quote:
          '"My husband lives, that Tybalt would have slain, and Tybalt\'s dead, that would have slain my husband. All this is comfort. Wherefore weep I then?" (3.2)',
        context:
          'Family loyalty was paramount in Elizabethan society. For Juliet to side with her husband against her own kinsman was a profound social transgression.',
      },
      {
        topic: 'Defiance -- refusing Paris and her father',
        argument:
          "Juliet's refusal to marry Paris in Act 3 Scene 5 is her most openly rebellious moment. She faces down her father's rage ('Hang thee, young baggage!'), her mother's cold withdrawal ('Talk not to me, for I'll not speak a word'), and the Nurse's pragmatic betrayal. Shakespeare strips away every support structure and leaves Juliet standing alone. Her response -- 'If all else fail, myself have power to die' -- shows strength defined not by winning but by refusing to surrender.",
        key_quote: '"If all else fail, myself have power to die" (3.5)',
        context:
          'For an Elizabethan daughter to openly defy her father risked disinheritance and social ruin. Juliet knows exactly what she is sacrificing.',
      },
      {
        topic: 'Final strength -- choosing death on her own terms',
        argument:
          "In the tomb (5.3), Juliet wakes to find Romeo dead. The Friar urges her to flee; she refuses. She kisses Romeo's lips hoping for residual poison, and when that fails, takes his dagger: 'O happy dagger! This is thy sheath; there rust, and let me die.' Shakespeare gives her the play's most decisive action. Romeo hesitated, soliloquised, and was talked out of things throughout the play. Juliet acts without hesitation. Her suicide is not weakness but the final expression of a will that refuses to live on anyone else's terms.",
        key_quote: '"O happy dagger! This is thy sheath; there rust, and let me die" (5.3)',
        context:
          "Suicide was a mortal sin in Elizabethan theology, yet Shakespeare frames Juliet's death with tragic dignity. The audience is invited to grieve, not to judge.",
      },
    ],
    conclusion:
      "Shakespeare presents Juliet's strength as a process of growth. She begins as a conventional obedient daughter, but each crisis forces her to think, choose and act with increasing independence. By the end she is the play's most decisive character -- stronger than Romeo, clearer than the Friar, braver than the Nurse. Her tragedy is that the world she lives in has no room for a woman that strong.",
  },
  {
    id: 'youth-vs-age',
    question:
      'How does Shakespeare present the conflict between youth and age in Romeo and Juliet?',
    introduction:
      "Define the generational divide as a structural conflict. Thesis: Shakespeare presents the adults in the play as well-meaning but ultimately catastrophic, using the contrast between youthful intensity and adult caution to argue that the older generation's failures -- not the younger generation's passions -- are the true cause of the tragedy.",
    paragraphs: [
      {
        topic: "Capulet's early protectiveness -- age as care",
        argument:
          "In Act 1 Scene 2, Capulet tells Paris that Juliet is too young: 'My child is yet a stranger in the world.' He insists that Paris 'woo her, gentle Paris, get her heart; my will to her consent is but a part'. Shakespeare initially presents age as a protective, respectful force. This makes Capulet's later reversal -- forcing the marriage in Act 3 -- all the more shocking.",
        key_quote: '"My child is yet a stranger in the world" (1.2)',
        context:
          "The age of consent for marriage was twelve for girls in Elizabethan England. Juliet at nearly fourteen was marriageable, but Capulet's initial restraint would have seemed admirable.",
      },
      {
        topic: "The Friar's caution -- 'wisely and slow'",
        argument:
          "Friar Lawrence warns Romeo: 'Wisely and slow; they stumble that run fast' (2.3), and later 'These violent delights have violent ends' (2.6). He represents the voice of adult experience and moderation. But Shakespeare undercuts him: the Friar's own plans are neither wise nor slow. His secret marriage, his potion scheme, his failed letter -- every adult intervention makes things worse. Age has wisdom in theory but not in practice.",
        key_quote: '"Wisely and slow; they stumble that run fast" (2.3)',
        context:
          "The Friar's herbal knowledge -- 'poison hath residence, and medicine power' in the same plant -- is a metaphor for his own interventions, which are both curative and lethal.",
      },
      {
        topic: "Capulet's reversal -- age as tyranny",
        argument:
          "After Tybalt's death, Capulet reverses his earlier position entirely: Juliet must marry Paris immediately. When she refuses, he explodes: 'Hang thee, young baggage! disobedient wretch!' (3.5). Lady Capulet is cold ('Talk not to me') and the Nurse capitulates. Shakespeare shows that adult care collapses under pressure into patriarchal control -- the father who once asked for Juliet's consent now demands it.",
        key_quote: '"Hang thee, young baggage! disobedient wretch!" (3.5)',
        context:
          "Capulet's rage reflects the legal reality: a father had absolute authority over his unmarried daughter. What Shakespeare makes us feel as monstrous, his audience would have recognised as lawful.",
      },
      {
        topic: "The Nurse's betrayal -- adult pragmatism vs youthful faith",
        argument:
          "The Nurse, who helped arrange the secret marriage, now advises Juliet to forget Romeo and marry Paris: 'I think it best you married with the County' (3.5). She makes a practical argument -- Paris is a better match, Romeo is banished, life must go on. Shakespeare uses her to show the gap between adult pragmatism and youthful conviction. Juliet's response -- 'Ancient damnation!' -- marks the moment she is forced to act entirely alone.",
        key_quote: '"I think it best you married with the County" (3.5)',
        context:
          "The Nurse's change of position reflects how women without power survived in Elizabethan society -- by adapting to whoever held authority. Shakespeare makes the audience feel her betrayal from Juliet's perspective.",
      },
      {
        topic: "The Prince's verdict -- all adults share the blame",
        argument:
          "The Prince's closing speech -- 'All are punish'd' (5.3) -- holds the adult generation collectively responsible. He does not blame Romeo and Juliet for loving recklessly; he blames the Capulets, the Montagues, and himself for failing to stop the feud before it consumed the young. Shakespeare's structural argument is that youth did not fail -- age failed youth.",
        key_quote: '"All are punish\u2019d" (5.3)',
        context:
          "The Prince's authority was unable to stop the feud despite multiple threats. Shakespeare suggests that political authority without moral authority is insufficient.",
      },
    ],
    conclusion:
      "Shakespeare presents youth and age not as equally flawed but as differently flawed. The young characters love too fast, fight too easily, and die too soon. But the adults who should protect them -- Capulet, Lady Capulet, the Nurse, the Friar, even the Prince -- fail through cowardice, rigidity, pragmatism and over-engineering. The play's deepest accusation is that the older generation created the world that killed its children, and that only the children's deaths were enough to force them to change it.",
  },
]

export default async function RomeoAndJulietEssayPlansPage() {
  await requireIgcseBoard(['edexcel-igcse'])

  return (
    <main className="min-h-screen bg-background">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'IGCSE', url: 'https://theenglishhub.app/igcse' },
          { name: 'Edexcel IGCSE Literature', url: 'https://theenglishhub.app/igcse/edexcel' },
          { name: 'Shakespeare', url: 'https://theenglishhub.app/igcse/edexcel/shakespeare' },
          {
            name: 'Romeo and Juliet',
            url: 'https://theenglishhub.app/igcse/edexcel/shakespeare/romeo-and-juliet',
          },
          {
            name: 'Essay Plans',
            url: 'https://theenglishhub.app/igcse/edexcel/shakespeare/romeo-and-juliet/essay-plans',
          },
        ]}
      />
      {/* -- Hero ------------------------------------------------- */}
      <section className="border-b border-border bg-gradient-to-b from-primary/[0.06] to-transparent px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <Link
            href="/igcse/edexcel/shakespeare/romeo-and-juliet"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            &larr; Romeo and Juliet hub
          </Link>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            <GraduationCap className="h-4 w-4" />
            Edexcel IGCSE Literature
          </div>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Romeo and Juliet &mdash; Essay Plans
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            Five model essay plans with paragraph structure, key quotations and context &mdash;
            ready to adapt for the IGCSE Shakespeare question.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-12 sm:py-16">
        {/* -- How to use ----------------------------------------- */}
        <div className="rounded-xl bg-muted p-6">
          <h2 className="text-lg font-bold text-foreground">How to use these plans</h2>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
            Each plan gives you a thesis, five analytical paragraphs and a conclusion. Every
            paragraph has a topic sentence, an argument, a key quote and a context point. In the
            exam, adapt the structure to the specific question &mdash; don&rsquo;t reproduce plans
            from memory, but use the paragraph logic and quotation pairings as building blocks.
          </p>
        </div>

        {/* -- Quick nav ------------------------------------------ */}
        <nav className="mt-8 rounded-xl bg-muted p-6">
          <h2 className="text-lg font-bold text-foreground">On this page</h2>
          <ul className="mt-3 grid gap-2 text-sm sm:grid-cols-2 lg:grid-cols-3">
            {ESSAY_PLANS.map((p) => (
              <li key={p.id}>
                <a href={`#${p.id}`} className="text-primary hover:underline">
                  {p.question}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <section className="mt-14 space-y-16">
          {ESSAY_PLANS.map((plan) => (
            <article key={plan.id} id={plan.id} className="scroll-mt-20">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-md sm:p-8">
                <h2 className="text-2xl font-bold text-foreground">{plan.question}</h2>

                {/* Introduction */}
                <div className="mt-6 rounded-lg border border-primary/30 bg-primary/5 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                    Introduction
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {plan.introduction}
                  </p>
                </div>

                {/* Paragraphs */}
                <div className="mt-6 space-y-6">
                  {plan.paragraphs.map((para, i) => (
                    <div key={i} className="rounded-lg border border-border bg-muted p-4 sm:p-5">
                      <div className="flex items-center gap-3">
                        <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                          {i + 1}
                        </span>
                        <h3 className="text-base font-bold text-foreground">{para.topic}</h3>
                      </div>
                      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                        {para.argument}
                      </p>
                      <div className="mt-3 rounded border border-primary/20 bg-card p-3">
                        <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                          Key quote
                        </p>
                        <p className="mt-1 text-sm italic text-muted-foreground">
                          {para.key_quote}
                        </p>
                      </div>
                      <div className="mt-3 rounded border border-border bg-card p-3">
                        <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                          Context
                        </p>
                        <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                          {para.context}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Conclusion */}
                <div className="mt-6 rounded-lg border border-primary/30 bg-primary/5 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                    Conclusion
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {plan.conclusion}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </section>
      </div>

      <ExamBoardDisclaimer variant="content" className="mx-auto max-w-5xl px-4 py-8" />

      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4 mx-auto max-w-5xl px-4 pb-8">
        Romeo and Juliet by William Shakespeare is in the public domain. Quotations are reproduced
        freely.
      </p>
    </main>
  )
}
