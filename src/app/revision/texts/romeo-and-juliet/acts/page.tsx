import type { Metadata } from 'next'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { ArrowLeft, BookOpen, Drama, MessageSquareQuote, Sparkles } from 'lucide-react'

import { getServerBoard } from '@/lib/board/get-server-board'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
export const metadata: Metadata = {
  title: 'Romeo and Juliet — Act-by-Act Analysis | The English Hub',
  description:
    'Detailed act-by-act and scene-by-scene analysis of Romeo and Juliet by William Shakespeare, with language analysis and key quotations for GCSE revision.',
  alternates: {
    canonical:
      'https://theenglishhub.app/revision/texts/romeo-and-juliet/acts',
  },
}

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

type SceneAnalysis = {
  scene: string
  summary: string
  language: string
  keyQuote: { text: string; speaker: string }
}

type ActData = {
  act: number
  title: string
  overview: string
  scenes: SceneAnalysis[]
}

const acts: ActData[] = [
  /* ============ ACT 1 ============ */
  {
    act: 1,
    title: 'Exposition — Love at First Sight',
    overview:
      'Act 1 establishes the feud, introduces the major characters and ends with Romeo and Juliet meeting at the Capulet feast. Shakespeare moves from public conflict to private passion, setting up the collision between love and hatred that will drive the tragedy.',
    scenes: [
      {
        scene: 'Prologue',
        summary:
          'A Chorus delivers a fourteen-line sonnet that summarises the entire plot: two noble families feud in Verona, and their children fall in love and die, ending the conflict. The audience knows the outcome before the action begins.',
        language:
          'The sonnet form is typically associated with love poetry, so Shakespeare ironically uses it to announce death. "Star-cross\'d lovers" introduces the fate motif, while the oxymoron of "death-mark\'d love" yokes together the play\'s two opposing forces. The phrase "civil blood makes civil hands unclean" puns on "civil" (meaning both civilised and civic), suggesting the feud corrupts the whole city.',
        keyQuote: {
          text: 'From forth the fatal loins of these two foes / A pair of star-cross\'d lovers take their life.',
          speaker: 'Chorus',
        },
      },
      {
        scene: 'Scene 1',
        summary:
          'Servants of the Capulet and Montague households brawl in the street. Benvolio tries to keep the peace but Tybalt escalates the fight. Prince Escalus arrives and threatens death to anyone who disturbs Verona\'s peace again. Romeo is revealed to be lovesick over Rosaline, a woman who has rejected him.',
        language:
          'The servants\' crude puns ("I will push Montague\'s men from the wall, and thrust his maids to the wall") ground the feud in low, physical violence before Shakespeare elevates it to the aristocratic level. Romeo\'s speeches about Rosaline are packed with conventional Petrarchan oxymorons — "O brawling love, O loving hate" — which sound hollow and rehearsed, contrasting sharply with the genuine emotion he will feel for Juliet.',
        keyQuote: {
          text: 'O brawling love, O loving hate, / O anything of nothing first create!',
          speaker: 'Romeo',
        },
      },
      {
        scene: 'Scene 2',
        summary:
          'Paris asks Lord Capulet for Juliet\'s hand. Capulet says she is too young but invites Paris to his feast to begin wooing her. Romeo and Benvolio learn of the feast and decide to attend, as Rosaline will be there.',
        language:
          'Capulet\'s metaphor "Earth hath swallowed all my hopes but she" reveals past bereavements and explains his protectiveness. His description of Juliet as "the hopeful lady of my earth" is poignant given the tragedy ahead. The dramatic irony is that Romeo goes to the feast hoping to see Rosaline but will find Juliet instead.',
        keyQuote: {
          text: 'My child is yet a stranger in the world; / She hath not seen the change of fourteen years.',
          speaker: 'Lord Capulet',
        },
      },
      {
        scene: 'Scene 3',
        summary:
          'Lady Capulet asks Juliet to consider marrying Paris. The Nurse rambles about Juliet\'s childhood and makes bawdy jokes. Juliet agrees to look at Paris but makes no commitment.',
        language:
          'Lady Capulet uses an extended conceit comparing Paris to a book ("Read o\'er the volume of young Paris\' face"), treating marriage as an intellectual exercise. The Nurse\'s earthy prose and sexual innuendo ("thou wilt fall backward when thou hast more wit") contrast with Lady Capulet\'s formality, establishing the two different models of womanhood surrounding Juliet. Juliet\'s careful, non-committal reply shows early intelligence.',
        keyQuote: {
          text: 'I\'ll look to like, if looking liking move; / But no more deep will I endart mine eye / Than your consent gives strength to make it fly.',
          speaker: 'Juliet',
        },
      },
      {
        scene: 'Scene 4',
        summary:
          'Romeo, Benvolio and Mercutio head to the Capulet feast in masks. Mercutio delivers the Queen Mab speech to mock Romeo\'s belief in dreams. Romeo has a premonition of doom.',
        language:
          'The Queen Mab speech begins as playful fantasy but darkens into images of soldiers dreaming of "cutting foreign throats" and courtiers\' corruption. Mercutio\'s escalating intensity reveals a mind that veers between comedy and nihilism. Romeo\'s prophetic aside — "my mind misgives / Some consequence yet hanging in the stars" — explicitly links fate to the celestial imagery that will recur throughout the play.',
        keyQuote: {
          text: 'I fear too early, for my mind misgives / Some consequence yet hanging in the stars.',
          speaker: 'Romeo',
        },
      },
      {
        scene: 'Scene 5',
        summary:
          'At the feast, Romeo sees Juliet and falls instantly in love, forgetting Rosaline entirely. Tybalt recognises Romeo and wants to fight, but Capulet forbids it. Romeo and Juliet share a sonnet and two kisses. Both then discover the other belongs to the enemy family.',
        language:
          'Romeo and Juliet\'s first exchange is structured as a shared sonnet with a pilgrim-and-saint conceit: Romeo\'s "lips, two blushing pilgrims" approach Juliet\'s "holy shrine." The religious language elevates their attraction above the bawdy love of the Nurse and the commercial match-making of Paris. The shared sonnet form shows them completing each other\'s thoughts. Juliet\'s oxymoron "My only love sprung from my only hate" encapsulates the paradox that will destroy them.',
        keyQuote: {
          text: 'O, she doth teach the torches to burn bright! / It seems she hangs upon the cheek of night / As a rich jewel in an Ethiope\'s ear.',
          speaker: 'Romeo',
        },
      },
    ],
  },

  /* ============ ACT 2 ============ */
  {
    act: 2,
    title: 'Rising Action — The Secret Marriage',
    overview:
      'Act 2 is dominated by the balcony scene and the secret marriage. The pace is urgent: Romeo and Juliet meet, declare their love, and marry within roughly twenty-four hours. Shakespeare creates a private, lyrical world for the lovers that exists in tension with the public violence of Act 1.',
    scenes: [
      {
        scene: 'Prologue',
        summary:
          'A second Chorus sonnet explains that Romeo\'s old love for Rosaline has died and a new love has replaced it. The lovers are separated by the feud but passion gives them the power to meet.',
        language:
          'The Chorus uses the language of death and rebirth: old desire lies on its "deathbed" while young affection "gapes to be his heir." This foreshadows the death-and-love connection that intensifies throughout the play. The observation that "passion lends them power" suggests love as a force that defies social barriers.',
        keyQuote: {
          text: 'Now old desire doth in his deathbed lie, / And young affection gapes to be his heir.',
          speaker: 'Chorus',
        },
      },
      {
        scene: 'Scene 1',
        summary:
          'Romeo gives his friends the slip after the feast and hides in the Capulet orchard. Mercutio and Benvolio call for him, and Mercutio mocks his lovesickness with crude jokes about Rosaline.',
        language:
          'Mercutio\'s bawdy conjuring ("I conjure thee by Rosaline\'s bright eyes, / By her high forehead and her scarlet lip") reduces love to physical appetite. The comedy is dramatic irony: Mercutio still thinks Romeo pines for Rosaline, unaware that everything has changed. The audience knows more than the characters, a gap Shakespeare exploits for both humour and pathos.',
        keyQuote: {
          text: 'He jests at scars that never felt a wound.',
          speaker: 'Romeo',
        },
      },
      {
        scene: 'Scene 2',
        summary:
          'The balcony scene. Romeo watches Juliet at her window and compares her to the sun. Juliet, unaware he is listening, reflects on the meaninglessness of names. They declare their love and agree to marry the next day.',
        language:
          'Romeo\'s cosmic imagery — "It is the east, and Juliet is the sun" — elevates Juliet to a celestial force. Juliet\'s "What\'s in a name?" speech is philosophical and questioning: she dismantles the social structures that divide them by arguing that identity is not determined by a surname. Her language is more rational and grounded than Romeo\'s, establishing her as the more mature lover. The scene\'s beauty is undercut by its danger: Romeo risks death by being in the orchard.',
        keyQuote: {
          text: 'What\'s in a name? That which we call a rose / By any other word would smell as sweet.',
          speaker: 'Juliet',
        },
      },
      {
        scene: 'Scene 3',
        summary:
          'Romeo visits Friar Lawrence at dawn and asks him to perform the marriage. The Friar is surprised by Romeo\'s sudden switch from Rosaline to Juliet but agrees, hoping the union will end the feud.',
        language:
          'The Friar\'s soliloquy on herbs ("Within the infant rind of this weak flower / Poison hath residence, and medicine power") establishes the duality motif: the same plant can heal or kill, just as love can save or destroy. His warning "Wisely and slow; they stumble that run fast" is proverbial wisdom that he himself will ignore, creating structural irony.',
        keyQuote: {
          text: 'Wisely and slow; they stumble that run fast.',
          speaker: 'Friar Lawrence',
        },
      },
      {
        scene: 'Scene 4',
        summary:
          'Romeo meets his friends in the street. Mercutio and Romeo exchange witty banter, showing Romeo restored to good spirits. The Nurse arrives to arrange the marriage on Juliet\'s behalf, enduring Mercutio\'s teasing.',
        language:
          'Mercutio\'s observation "Now art thou sociable, now art thou Romeo" suggests Romeo\'s identity is restored by love. The rapid prose exchanges show the wit and camaraderie of the young men. The Nurse\'s indignation and long-windedness provide comedy while also showing her genuine devotion to Juliet.',
        keyQuote: {
          text: 'Now art thou sociable, now art thou Romeo; now art thou what thou art, by art as well as by nature.',
          speaker: 'Mercutio',
        },
      },
      {
        scene: 'Scene 5',
        summary:
          'Juliet waits impatiently for the Nurse to return with Romeo\'s message. The Nurse teases her by delaying the news but finally reveals that Romeo will marry her that afternoon at Friar Lawrence\'s cell.',
        language:
          'Juliet\'s frustration builds through a soliloquy that contrasts youth and age: "Old folks, many feign as they were dead; / Unwieldy, slow, heavy and pale as lead." The Nurse\'s deliberate procrastination creates comic tension, and her focus on Romeo\'s physical attributes ("his face be better than any man\'s") reinforces her practical, bodily understanding of love.',
        keyQuote: {
          text: 'But old folks, many feign as they were dead; / Unwieldy, slow, heavy and pale as lead.',
          speaker: 'Juliet',
        },
      },
      {
        scene: 'Scene 6',
        summary:
          'Romeo and Juliet meet at Friar Lawrence\'s cell and are married. The Friar warns that passionate love may have violent consequences.',
        language:
          'The Friar\'s warning "These violent delights have violent ends" uses a chiasmus linking passion to destruction. Romeo\'s defiant declaration that he does not care if death comes, so long as he may call Juliet his, foreshadows his actual death. The scene is unusually brief for a wedding, emphasising the speed and secrecy that characterise the lovers\' relationship.',
        keyQuote: {
          text: 'These violent delights have violent ends / And in their triumph die, like fire and powder, / Which as they kiss consume.',
          speaker: 'Friar Lawrence',
        },
      },
    ],
  },

  /* ============ ACT 3 ============ */
  {
    act: 3,
    title: 'Climax — From Comedy to Tragedy',
    overview:
      'Act 3 is the dramatic turning point. The deaths of Mercutio and Tybalt, Romeo\'s banishment, the forced Paris match, and Juliet\'s isolation transform the play from romantic comedy into tragedy. The act contains some of the most intense and varied writing in the play.',
    scenes: [
      {
        scene: 'Scene 1',
        summary:
          'Tybalt finds Romeo and challenges him to a duel. Romeo, now secretly married to Juliet, refuses to fight. Mercutio fights Tybalt instead and is fatally stabbed when Romeo tries to intervene. Enraged, Romeo kills Tybalt. The Prince banishes Romeo from Verona.',
        language:
          'Mercutio\'s dying words "A plague o\' both your houses!" function as the play\'s moral verdict on the feud. His bitter pun "Ask for me tomorrow, and you shall find me a grave man" shows wit surviving even at the point of death. Romeo\'s agonised cry "O, I am fortune\'s fool!" acknowledges that fate and his own impulsiveness have combined to destroy him. The shift from prose wit to violent action marks the genre change from comedy to tragedy.',
        keyQuote: {
          text: 'A plague o\' both your houses! / They have made worms\' meat of me.',
          speaker: 'Mercutio',
        },
      },
      {
        scene: 'Scene 2',
        summary:
          'Juliet eagerly awaits her wedding night, unaware of the day\'s events. The Nurse arrives with confused and contradictory news. Juliet eventually learns that Romeo has killed Tybalt and been banished. After an initial outburst against Romeo, her love overwhelms her grief for Tybalt.',
        language:
          'Juliet\'s epithalamium ("Gallop apace, you fiery-footed steeds") is a passionate invocation of night that uses classical imagery to express sexual desire. When she hears the news, her oxymorons — "O serpent heart hid with a flow\'ring face! / Did ever dragon keep so fair a cave?" — express the psychological torment of loving the man who killed her cousin. Her rapid shift from condemnation to loyalty dramatises the depth of her love.',
        keyQuote: {
          text: 'O serpent heart hid with a flow\'ring face! / Did ever dragon keep so fair a cave?',
          speaker: 'Juliet',
        },
      },
      {
        scene: 'Scene 3',
        summary:
          'Romeo hides at Friar Lawrence\'s cell and collapses in despair at his banishment. The Friar lectures him on gratitude — he is alive and Juliet still loves him. The Nurse arrives and arranges for Romeo to spend one night with Juliet before fleeing to Mantua.',
        language:
          'Romeo\'s hysterical grief ("There is no world without Verona walls, / But purgatory, torture, hell itself") contrasts with the Friar\'s measured reasoning. The Friar\'s long speech arguing that Romeo should count his blessings is logical but emotionally tone-deaf, revealing the gap between adult reason and youthful passion. Romeo\'s threat to stab himself anticipates his later suicide.',
        keyQuote: {
          text: 'There is no world without Verona walls, / But purgatory, torture, hell itself.',
          speaker: 'Romeo',
        },
      },
      {
        scene: 'Scene 4',
        summary:
          'Lord Capulet tells Paris that Juliet will marry him on Thursday, deciding the match without consulting Juliet. He is confident she will obey.',
        language:
          'This short, businesslike scene contrasts starkly with the emotional intensity of the surrounding scenes. Capulet\'s casual disposal of his daughter\'s future — "I think she will be rul\'d / In all respects by me" — dramatises the patriarchal power that treats Juliet as property. The dramatic irony is devastating: Juliet is at that very moment spending her wedding night with Romeo.',
        keyQuote: {
          text: 'I think she will be rul\'d / In all respects by me; nay, more, I doubt it not.',
          speaker: 'Lord Capulet',
        },
      },
      {
        scene: 'Scene 5',
        summary:
          'Romeo and Juliet wake after their wedding night and part at dawn. Lady Capulet tells Juliet she must marry Paris. Juliet refuses and Lord Capulet erupts in fury, threatening to disown her. The Nurse advises Juliet to forget Romeo and marry Paris. Juliet is devastated and resolves to seek help from Friar Lawrence.',
        language:
          'The aubade (dawn song) debate — "It was the nightingale, and not the lark" — extends the play\'s light/dark imagery: for the lovers, dawn brings danger and separation, inverting the natural association of light with safety. Capulet\'s abusive language ("Hang thee, young baggage! Disobedient wretch!") exposes the violence beneath his earlier indulgence. Juliet\'s aside after the Nurse\'s betrayal — "Thou and my bosom henceforth shall be twain" — marks her final isolation from every adult who might have protected her.',
        keyQuote: {
          text: 'Is there no pity sitting in the clouds / That sees into the bottom of my grief?',
          speaker: 'Juliet',
        },
      },
    ],
  },

  /* ============ ACT 4 ============ */
  {
    act: 4,
    title: 'Falling Action — The Desperate Plan',
    overview:
      'Act 4 centres on Friar Lawrence\'s dangerous plan to fake Juliet\'s death. Juliet shows extraordinary courage in carrying out the scheme alone, while the audience watches the Friar\'s well-intentioned but reckless stratagem unfold with growing unease.',
    scenes: [
      {
        scene: 'Scene 1',
        summary:
          'Juliet goes to the Friar\'s cell, where Paris is also visiting. She speaks to Paris with skilful ambiguity. Once alone with the Friar, she threatens to kill herself rather than marry Paris. The Friar proposes his plan: Juliet will drink a potion that mimics death for forty-two hours. Romeo will be told and will collect her from the tomb.',
        language:
          'Juliet\'s dialogue with Paris is loaded with double meanings: "I will confess to you that I love him" appears to refer to Paris but actually means Romeo. This equivocation mirrors the play\'s broader theme of appearance versus reality. Her willingness to "leap from off the battlements of any tower" or "walk in thievish ways" shows absolute determination. The Friar\'s plan, with its many points of failure, reveals his over-confidence in his own cleverness.',
        keyQuote: {
          text: 'O, bid me leap, rather than marry Paris, / From off the battlements of yonder tower.',
          speaker: 'Juliet',
        },
      },
      {
        scene: 'Scene 2',
        summary:
          'Juliet returns home and pretends to submit to her father\'s wishes, agreeing to marry Paris. Capulet is delighted and brings the wedding forward to Wednesday.',
        language:
          'Juliet\'s performance of obedience — "Henceforward I am ever rul\'d by you" — is a masterful piece of deception that echoes Lady Capulet\'s earlier instruction to "look like the innocent flower." Capulet\'s response, advancing the wedding date, is a tragic acceleration: every attempt to fix the situation makes it worse. The dramatic irony is intense, as the audience knows what Juliet intends.',
        keyQuote: {
          text: 'Henceforward I am ever rul\'d by you.',
          speaker: 'Juliet',
        },
      },
      {
        scene: 'Scene 3',
        summary:
          'Alone in her chamber, Juliet steels herself to take the potion. She imagines waking in the tomb surrounded by dead bodies and the ghost of Tybalt. Overcoming her terror, she drinks.',
        language:
          'Juliet\'s soliloquy is one of Shakespeare\'s greatest passages of psychological realism. She lists her fears systematically — suffocation, madness, Tybalt\'s corpse — each more horrifying than the last. The line "My dismal scene I needs must act alone" uses theatrical language to acknowledge that she has no support. The verb "act" connects to the play\'s theme of performance and reality. Her courage in drinking despite her terror is the act of a mature woman, not the obedient child her father demands.',
        keyQuote: {
          text: 'My dismal scene I needs must act alone. / Come, vial.',
          speaker: 'Juliet',
        },
      },
      {
        scene: 'Scene 4',
        summary:
          'A brief domestic scene. The Capulet household prepares for the wedding. Capulet stays up all night supervising. Paris arrives at dawn and Capulet sends the Nurse to wake Juliet.',
        language:
          'This scene of bustling normality, with Capulet fussing about cooks and spits, creates ironic contrast with the horror of what the Nurse is about to discover. The domestic comedy of Capulet calling himself "a mouse" (meaning a quiet, retiring person) is darkly humorous given his recent tyranny towards Juliet.',
        keyQuote: {
          text: 'Make haste, make haste. / The County will be here with music straight, / For so he said he would.',
          speaker: 'Lord Capulet',
        },
      },
      {
        scene: 'Scene 5',
        summary:
          'The Nurse discovers Juliet apparently dead. The family\'s wedding joy turns to mourning. Friar Lawrence counsels them to take Juliet to the family tomb. Musicians linger awkwardly.',
        language:
          'The lamentations of the Nurse ("O woe! O woeful, woeful, woeful day!"), Paris, and the Capulets are deliberately excessive and formulaic, contrasting with the genuine grief Juliet showed in earlier scenes. Shakespeare may be suggesting that their sorrow, though sincere, is performative and conventional. The Friar\'s homily on death and heaven is appropriate to his role but is also a calculated performance, since he knows Juliet is alive. Capulet\'s image of "Death" as Juliet\'s bridegroom anticipates the final scene in the tomb.',
        keyQuote: {
          text: 'Death lies on her like an untimely frost / Upon the sweetest flower of all the field.',
          speaker: 'Lord Capulet',
        },
      },
    ],
  },

  /* ============ ACT 5 ============ */
  {
    act: 5,
    title: 'Catastrophe — The Tomb',
    overview:
      'Act 5 brings the catastrophe. The Friar\'s plan collapses through bad luck: his letter never reaches Romeo. Every character converges on the Capulet tomb, and the lovers\' deaths finally end the feud. Shakespeare structures the act as a series of near-misses that torment the audience with "what if" possibilities.',
    scenes: [
      {
        scene: 'Scene 1',
        summary:
          'In Mantua, Romeo dreams that Juliet found him dead and kissed him back to life. His servant Balthasar arrives with the news that Juliet is dead. Romeo immediately decides to return to Verona and die beside her. He buys poison from a desperate Apothecary.',
        language:
          'Romeo\'s dream eerily inverts what will actually happen: Juliet will find him dead but will not be able to revive him. His exclamation "Then I defy you, stars!" is a pivotal moment of free will asserting itself against fate. The Apothecary scene explores poverty and desperation: the Apothecary knows selling poison is illegal but "My poverty, but not my will, consents." Romeo\'s observation that gold is a worse "poison" than the drug inverts social values, suggesting the real sickness lies in Verona\'s society.',
        keyQuote: {
          text: 'Is it e\'en so? Then I defy you, stars!',
          speaker: 'Romeo',
        },
      },
      {
        scene: 'Scene 2',
        summary:
          'Friar John reports that he could not deliver Friar Lawrence\'s letter to Romeo because he was quarantined in a house suspected of plague. Friar Lawrence hurries to the tomb, planning to keep Juliet safe until Romeo can be contacted.',
        language:
          'This short scene is the hinge of catastrophe. The reason for the letter\'s failure — plague quarantine — introduces an impersonal force of nature that neither character could control. It is the play\'s clearest example of fate as arbitrary misfortune. Friar Lawrence\'s alarm ("Unhappy fortune!") mirrors Romeo\'s "fortune\'s fool," connecting the two men through the same cruel mechanism.',
        keyQuote: {
          text: 'Unhappy fortune! The letter was not nice but full of charge, / Of dear import.',
          speaker: 'Friar Lawrence',
        },
      },
      {
        scene: 'Scene 3',
        summary:
          'Paris is at Juliet\'s tomb strewing flowers. Romeo arrives, and they fight; Romeo kills Paris. Romeo enters the tomb, delivers his final speech, drinks the poison and dies. Friar Lawrence arrives moments too late. Juliet wakes, finds Romeo dead, and stabs herself with his dagger. The Watch arrives. The Prince, the Montagues, and the Capulets assemble. Friar Lawrence confesses the whole story. The two fathers agree to end the feud and raise gold statues to each other\'s child.',
        language:
          'Romeo\'s final speech is rich with tragic irony: he notes that Juliet still looks alive — "Death, that hath suck\'d the honey of thy breath, / Hath had no power yet upon thy beauty" — because she is alive, but he cannot know it. His "Thus with a kiss I die" unites love and death in a single gesture. Juliet\'s suicide is swift and decisive — "O happy dagger, / This is thy sheath" — using a sexual metaphor that links consummation with death. The Prince\'s closing couplet, "For never was a story of more woe / Than this of Juliet and her Romeo," transforms the private tragedy into a public lesson.',
        keyQuote: {
          text: 'For never was a story of more woe / Than this of Juliet and her Romeo.',
          speaker: 'Prince Escalus',
        },
      },
    ],
  },
]

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default async function RomeoAndJulietActsPage() {
  const board = await getServerBoard()
  const allowedBoards = ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse']
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
          { name: "Romeo and Juliet", url: "https://theenglishhub.app/revision/texts/romeo-and-juliet" },
          { name: "Act-by-Act Analysis", url: "https://theenglishhub.app/revision/texts/romeo-and-juliet/acts" },
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
            Back to Romeo and Juliet
          </Button>

          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge variant="secondary">
              <Drama className="mr-1 size-3 text-violet-400" />
              Shakespeare — Play
            </Badge>
            <Badge variant="outline" className="text-muted-foreground">
              <Sparkles className="mr-1 size-3" />
              AQA / Edexcel / OCR / Eduqas / Edexcel iGCSE
            </Badge>
          </div>

          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            Romeo and Juliet — Act-by-Act Analysis
          </h1>
          <p className="mt-2 text-body-lg text-muted-foreground">
            All five acts analysed scene by scene, with language analysis and key
            quotations.
          </p>
        </div>
      </section>

      {/* Acts */}
      {acts.map((act) => (
        <section key={act.act}>
          <div className="mb-5 flex items-center gap-3">
            <BookOpen className="size-5 text-blue-400" />
            <h2 className="text-heading-lg font-heading text-foreground">
              Act {act.act}: {act.title}
            </h2>
          </div>

          <Card className="mb-4">
            <CardContent className="p-6 sm:p-8 text-body-sm text-muted-foreground">
              <p>{act.overview}</p>
            </CardContent>
          </Card>

          <div className="grid gap-4">
            {act.scenes.map((scene) => (
              <Card key={scene.scene}>
                <CardHeader>
                  <CardTitle className="text-heading-md font-heading">
                    {act.act === 1 && scene.scene === 'Prologue'
                      ? 'Prologue'
                      : act.act === 2 && scene.scene === 'Prologue'
                        ? 'Prologue (Act 2)'
                        : `Act ${act.act}, ${scene.scene}`}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-body-sm text-muted-foreground">
                  <div>
                    <h4 className="mb-1 text-sm font-semibold text-foreground">
                      Summary
                    </h4>
                    <p>{scene.summary}</p>
                  </div>
                  <div>
                    <h4 className="mb-1 text-sm font-semibold text-foreground">
                      Language Analysis
                    </h4>
                    <p>{scene.language}</p>
                  </div>
                  <div className="rounded-lg border border-border/60 bg-muted/30 p-4">
                    <div className="flex items-start gap-2">
                      <MessageSquareQuote className="mt-0.5 size-4 shrink-0 text-violet-400" />
                      <div>
                        <p className="text-body-sm font-medium italic text-foreground">
                          &ldquo;{scene.keyQuote.text}&rdquo;
                        </p>
                        <p className="mt-1 text-caption uppercase tracking-wide text-primary">
                          {scene.keyQuote.speaker}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
