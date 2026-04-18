'use client'

import Link from 'next/link'
import { ArrowLeft, Users, Quote, Lightbulb } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import StudyTools from '@/components/study/StudyTools'

/* ─── Types ──────────────────────────────────────────────────── */

type CharacterStudy = {
  name: string
  role: string
  analysis: string
  development: string
  keyQuotes: { quote: string; act: string; analysis: string }[]
  themeLinks: string[]
  examTip: string
}

/* ─── Data ───────────────────────────────────────────────────── */

const CHARACTERS: CharacterStudy[] = [
  {
    name: 'Romeo Montague',
    role: 'Son of Lord Montague; the male protagonist',
    analysis:
      'Romeo is passionate, impulsive and poetic. He begins the play performing the role of a Petrarchan lover, using elaborate oxymorons to describe his unrequited love for Rosaline. When he meets Juliet, his language shifts from artificial convention to genuine feeling. Shakespeare uses Romeo to explore the link between intense love and self-destruction: he acts before he thinks, whether rushing into marriage, killing Tybalt in fury, or drinking poison without confirming Juliet is truly dead. His emotional extremes drive the plot forward and ultimately cause the tragedy.',
    development:
      'Romeo develops from a self-indulgent boy wallowing in lovesickness to a young man capable of profound, selfless love. However, he never fully outgrows his impulsiveness. His decision to buy poison and race to the tomb mirrors his earlier recklessness. Shakespeare suggests that while love has matured Romeo emotionally, it cannot cure the fatal speed at which he acts. His arc is a trajectory of escalating intensity that ends in self-destruction.',
    keyQuotes: [
      {
        quote: 'O brawling love, O loving hate, / O anything of nothing first create!',
        act: 'Act 1, Scene 1',
        analysis:
          'The stacked oxymorons reveal Romeo performing the role of a lover rather than experiencing genuine feeling. The paradoxes cancel each other out, suggesting this love for Rosaline is empty and artificial -- a foil for his later authentic passion for Juliet.',
      },
      {
        quote: 'Did my heart love till now? Forswear it, sight! / For I ne\'er saw true beauty till this night.',
        act: 'Act 1, Scene 5',
        analysis:
          'Romeo instantly abandons Rosaline upon seeing Juliet. The rhyming couplet gives his declaration a sense of destiny. "Forswear it, sight" suggests that his previous experience was blindness. Shakespeare presents love at first sight as both transformative and dangerously impulsive.',
      },
      {
        quote: 'Then I defy you, stars!',
        act: 'Act 5, Scene 1',
        analysis:
          'Romeo\'s response to hearing of Juliet\'s death. The short, explosive line reveals his reckless defiance of fate. By attempting to take control of his destiny, he ironically fulfils the very prophecy he resists. Shakespeare positions Romeo as a tragic hero whose courage and impetuosity are inseparable.',
      },
      {
        quote: 'Here\'s to my love! O true apothecary, / Thy drugs are quick. Thus with a kiss I die.',
        act: 'Act 5, Scene 3',
        analysis:
          'Romeo dies with a kiss, linking love and death in a single gesture. "Quick" means both fast-acting and alive, creating a painful pun. His final act mirrors his character throughout: passionate, decisive, and fatally premature.',
      },
    ],
    themeLinks: ['Love', 'Fate & Free Will', 'Youth vs Age', 'Death & Sacrifice'],
    examTip:
      'Compare Romeo\'s language about Rosaline (Act 1) with his language about Juliet (Act 2 onwards). The shift from artifice to authenticity is key evidence for how Shakespeare presents the development of genuine love.',
  },
  {
    name: 'Juliet Capulet',
    role: 'Daughter of Lord Capulet; the female protagonist',
    analysis:
      'Juliet begins the play as an obedient thirteen-year-old who dutifully agrees to consider Paris as a suitor. She rapidly becomes the more mature, rational and decisive of the two lovers. Where Romeo speaks in extravagant metaphors, Juliet questions and analyses. Her balcony speech interrogates the meaning of names and identity with philosophical rigour. She negotiates her own marriage, defies her father, and takes a terrifying potion alone. Shakespeare gives her some of the play\'s most intellectually sophisticated speeches, and her final act of suicide is deliberate and controlled rather than impulsive.',
    development:
      'Juliet\'s arc is the play\'s most dramatic character transformation. She moves from silent obedience ("I\'ll look to like, if looking liking move") to passionate rebellion against her family and society. Her isolation intensifies as the play progresses: the Nurse betrays her, her parents threaten to disown her, and Romeo is banished. By Act 4, she faces the potion alone, showing extraordinary courage. Her death is not an impulsive act but a measured choice, making her arguably the play\'s truest tragic hero.',
    keyQuotes: [
      {
        quote: 'What\'s in a name? That which we call a rose / By any other word would smell as sweet.',
        act: 'Act 2, Scene 2',
        analysis:
          'Juliet\'s philosophical questioning challenges the entire social structure that sustains the feud. Her argument -- that identity is inherent, not imposed by family labels -- is logically rigorous and radical for a thirteen-year-old girl in a patriarchal society. Shakespeare uses love as the catalyst for intellectual awakening.',
      },
      {
        quote: 'My only love sprung from my only hate! / Too early seen unknown, and known too late!',
        act: 'Act 1, Scene 5',
        analysis:
          'The antithesis of "love" and "hate" encapsulates the play\'s central conflict. "Too early" and "too late" introduce the theme of fate -- Juliet recognises immediately that timing and circumstance are against her. The exclamatory couplet conveys both passion and foreboding.',
      },
      {
        quote: 'Give me my Romeo; and when I shall die, / Take him and cut him out in little stars.',
        act: 'Act 3, Scene 2',
        analysis:
          'Juliet\'s epithalamium (wedding-night speech) is bold, sensual and imaginative. She claims ownership of Romeo ("my Romeo") and transforms him into a cosmic image. The verb "die" carries an Elizabethan double meaning (sexual climax), linking love, sex and death in a single image.',
      },
      {
        quote: 'O happy dagger, / This is thy sheath. There rust, and let me die.',
        act: 'Act 5, Scene 3',
        analysis:
          'Juliet\'s final words are brief, decisive and unsentimental -- the opposite of Romeo\'s elaborate dying speech. "Happy dagger" personifies the weapon as willing. Her suicide is an act of agency: she chooses death on her own terms rather than submitting to a life controlled by others.',
      },
    ],
    themeLinks: ['Love', 'Family & Honour', 'Youth vs Age', 'Death & Sacrifice'],
    examTip:
      'Examiners reward candidates who show Juliet as the more mature lover. Track how her language develops from the monosyllabic obedience of Act 1 to the philosophical independence of Act 2 and the desperate courage of Acts 4-5.',
  },
  {
    name: 'Mercutio',
    role: 'Romeo\'s close friend; kinsman of the Prince',
    analysis:
      'Witty, bawdy and fearless, Mercutio is the play\'s most electrifying presence. He mocks both love and honour with equal energy, using puns and innuendo to deflate romantic idealism. His Queen Mab speech (Act 1, Scene 4) begins as comic fantasy but darkens into a vision of nightmare and corruption, revealing a sophisticated intelligence beneath the jokes. Mercutio is neither Montague nor Capulet -- he is the Prince\'s kinsman -- yet he dies because of the feud, making him its most pointless victim.',
    development:
      'Mercutio does not undergo conventional character development; he is consistent in his wit and courage from start to finish. His dramatic function is to be the hinge of the plot: his death transforms comedy into tragedy. When he fights Tybalt and is fatally stabbed under Romeo\'s arm, the play\'s tone shifts permanently. His dying curse, "A plague o\' both your houses," becomes the play\'s moral verdict on the feud.',
    keyQuotes: [
      {
        quote: 'O, then I see Queen Mab hath been with you.',
        act: 'Act 1, Scene 4',
        analysis:
          'The Queen Mab speech begins as playful mockery of Romeo\'s dreams but escalates into a dark vision of human corruption. Mab brings soldiers dreams of "cutting foreign throats" and women dreams of sex. Mercutio reveals that beneath his humour lies a bleak understanding of human nature.',
      },
      {
        quote: 'A plague o\' both your houses! They have made worms\' meat of me.',
        act: 'Act 3, Scene 1',
        analysis:
          'Mercutio\'s dying curse blames both families equally. "Worms\' meat" is brutally physical, reducing his body to food for decay. The curse resonates through the rest of the play, functioning as both prophecy and moral judgement. Shakespeare makes the audience feel the waste of Mercutio\'s death.',
      },
      {
        quote: 'Ask for me tomorrow and you shall find me a grave man.',
        act: 'Act 3, Scene 1',
        analysis:
          'Even dying, Mercutio puns: "grave" means both serious and a burial place. This characteristic wit-in-extremis shows his refusal to be sentimental about death, but also reveals the horror beneath the joke. His humour makes his death more, not less, devastating.',
      },
    ],
    themeLinks: ['Conflict & Violence', 'Fate & Free Will', 'Youth vs Age', 'Death & Sacrifice'],
    examTip:
      'Mercutio is an excellent character to analyse for the theme of conflict. He is neither Montague nor Capulet, so his death proves that the feud destroys everyone in Verona, not just the two families.',
  },
  {
    name: 'Tybalt',
    role: 'Juliet\'s cousin; a Capulet firebrand',
    analysis:
      'Tybalt is aggressive, honour-obsessed and skilled with a sword. He represents the feud at its most dangerous because he actively seeks conflict rather than simply inheriting it. From his very first line ("What, drawn and talk of peace? I hate the word") he is defined by violence. Shakespeare uses Tybalt to show how the culture of honour and masculinity in Verona perpetuates the cycle of bloodshed. His killing of Mercutio is the turning point of the play, transforming comedy into tragedy.',
    development:
      'Tybalt does not develop in a conventional sense -- he is a fixed point of aggression. His function is structural: he is the agent of the play\'s catastrophe. His challenge to Romeo at the feast (Act 1, Scene 5) and his street fight (Act 3, Scene 1) are the two moments that seal the lovers\' fate. Even after death, his presence haunts the play through Juliet\'s grief and the escalating consequences of Romeo\'s banishment.',
    keyQuotes: [
      {
        quote: 'What, drawn and talk of peace? I hate the word, / As I hate hell, all Montagues, and thee.',
        act: 'Act 1, Scene 1',
        analysis:
          'Tybalt\'s first line establishes his character completely. The triple object of hatred (hell, Montagues, Benvolio) escalates with each item. "I hate the word" -- even the concept of peace is repulsive to him. Shakespeare presents Tybalt as a man for whom violence is an identity, not merely a response.',
      },
      {
        quote: 'Romeo, the love I bear thee can afford / No better term than this: thou art a villain.',
        act: 'Act 3, Scene 1',
        analysis:
          'Tybalt\'s challenge to Romeo is formal and deliberate. "Villain" was a serious insult demanding a response. The irony is that Romeo now loves Tybalt as family, but Tybalt\'s code of honour cannot accommodate this. Shakespeare shows how rigid social codes make peace impossible.',
      },
    ],
    themeLinks: ['Conflict & Violence', 'Family & Honour', 'Fate & Free Will'],
    examTip:
      'When writing about Tybalt, focus on what he represents rather than who he is as an individual. He embodies the destructive culture of masculine honour that the play critiques.',
  },
  {
    name: 'The Nurse',
    role: 'Juliet\'s nursemaid and confidante',
    analysis:
      'Comic, affectionate and garrulous, the Nurse has raised Juliet since infancy and loves her deeply. She provides much of the play\'s humour with her rambling anecdotes and bawdy jokes. She acts as go-between for the lovers, carrying messages and arranging the secret ceremony. However, her love is practical rather than principled: when the crisis arrives in Act 3, she advises Juliet to forget Romeo and marry Paris. This pragmatic betrayal isolates Juliet at the moment she most needs support.',
    development:
      'The Nurse shifts from comic ally to unwitting agent of Juliet\'s isolation. In the first half of the play she is Juliet\'s surrogate mother -- warm, indulgent and conspiratorial. But her counsel to marry Paris reveals the limits of her understanding: she sees marriage as a practical arrangement, not a spiritual bond. Juliet\'s devastated response ("Ancient damnation!") marks the moment when the Nurse loses Juliet\'s trust forever. Shakespeare uses the Nurse to show how even loving adults can fail young people when they lack moral courage.',
    keyQuotes: [
      {
        quote: 'Thou wast the prettiest babe that e\'er I nursed. / An I might live to see thee married once, I have my wish.',
        act: 'Act 1, Scene 3',
        analysis:
          'The Nurse\'s love for Juliet is genuine and maternal. Her wish to see Juliet married seems benign but becomes ironic: marriage to Romeo will ultimately cause Juliet\'s death. Shakespeare foreshadows how good intentions lead to catastrophe.',
      },
      {
        quote: 'I think it best you married with the County. / O, he\'s a lovely gentleman! / Romeo\'s a dishclout to him.',
        act: 'Act 3, Scene 5',
        analysis:
          'The Nurse\'s advice to marry Paris is well-meaning but devastating. "Dishclout" (dishcloth) reduces Romeo to a worthless rag. For Juliet, this is the ultimate betrayal: the one adult she trusted has chosen pragmatism over loyalty. Shakespeare shows how the Nurse\'s limited understanding of love makes her unable to support Juliet when it matters most.',
      },
      {
        quote: 'O woeful day! O woeful day!',
        act: 'Act 4, Scene 5',
        analysis:
          'The Nurse\'s grief at Juliet\'s apparent death is repetitive and formulaic, contrasting with the deep, private grief the audience knows Juliet would feel. Shakespeare uses this to distinguish genuine emotion from performed sorrow.',
      },
    ],
    themeLinks: ['Love', 'Youth vs Age', 'Family & Honour'],
    examTip:
      'The Nurse is a useful character for comparing types of love. Her practical, physical love for Juliet contrasts sharply with Romeo and Juliet\'s idealistic, spiritual bond. This comparison illuminates what makes the lovers\' connection unique.',
  },
  {
    name: 'Lord Capulet',
    role: 'Juliet\'s father; head of the Capulet household',
    analysis:
      'Lord Capulet shifts dramatically from an apparently reasonable father to a domestic tyrant. In Act 1, he tells Paris to wait and win Juliet\'s consent ("My will to her consent is but a part"). By Act 3, he threatens to drag her to church and disown her if she refuses. This transformation exposes the patriarchal power that controls Juliet\'s life: Capulet\'s initial reasonableness was conditional on Juliet\'s obedience. When she asserts her own will, he responds with fury. Shakespeare uses Capulet to show how patriarchal authority can become indistinguishable from tyranny.',
    development:
      'Capulet\'s arc reveals the fragility of patriarchal benevolence. His early concern for Juliet\'s youth gives way to rage when she defies him. The speed of his transformation suggests that his gentleness was never secure. His grief at the end of the play ("Death is my son-in-law, Death is my heir") is genuine but comes too late. Shakespeare denies him a comfortable redemption: Capulet must live with the knowledge that his stubbornness contributed to his daughter\'s death.',
    keyQuotes: [
      {
        quote: 'My will to her consent is but a part; / An she agree, within her scope of choice / Lies my consent and fair according voice.',
        act: 'Act 1, Scene 2',
        analysis:
          'Capulet appears progressive, suggesting Juliet should have a voice in choosing her husband. But "scope of choice" implies boundaries -- her choice must fall within limits he defines. Shakespeare reveals how patriarchal control can masquerade as freedom.',
      },
      {
        quote: 'Hang thee, young baggage! Disobedient wretch! / I tell thee what: get thee to church o\' Thursday, / Or never after look me in the face.',
        act: 'Act 3, Scene 5',
        analysis:
          'Capulet\'s violent language ("baggage," "wretch") reduces Juliet to property. The ultimatum -- marry or be disowned -- reveals the absolute power fathers held over daughters. Shakespeare forces the audience to see how patriarchal authority creates the conditions for tragedy.',
      },
      {
        quote: 'Death is my son-in-law, Death is my heir.',
        act: 'Act 4, Scene 5',
        analysis:
          'Capulet personifies Death as a family member, replacing the future he planned for Juliet. The repetition of "Death" hammers home the consequences of his rigidity. The irony is devastating: by trying to control Juliet\'s marriage, he has given her to the one bridegroom he cannot defeat.',
      },
    ],
    themeLinks: ['Family & Honour', 'Youth vs Age', 'Conflict & Violence'],
    examTip:
      'Track Capulet\'s changing attitude across the play. The contrast between Act 1 (reasonable) and Act 3 (tyrannical) is powerful evidence for how Shakespeare explores patriarchal power and its role in the tragedy.',
  },
  {
    name: 'Lady Capulet',
    role: 'Juliet\'s mother; Lord Capulet\'s wife',
    analysis:
      'Lady Capulet is emotionally distant from Juliet, having married young herself and delegated Juliet\'s upbringing to the Nurse. She cannot communicate with her daughter without the Nurse present and promotes the Paris match with transactional language, comparing Paris to a book that Juliet should "read." She represents the older generation of women who have accepted the patriarchal system and now enforce it upon their daughters. When Juliet defies her father, Lady Capulet refuses to intervene: "Talk not to me, for I\'ll not speak a word. / Do as thou wilt, for I have done with thee."',
    development:
      'Lady Capulet does not develop significantly. Her function is to represent the failure of maternal support. Her refusal to defend Juliet against Capulet\'s rage leaves Juliet entirely alone. Her grief at the tomb is conventional and public, never achieving the personal depth that might suggest a genuine maternal bond. Shakespeare uses her to illustrate how the patriarchal system damages women at every level.',
    keyQuotes: [
      {
        quote: 'Read o\'er the volume of young Paris\' face, / And find delight writ there with beauty\'s pen.',
        act: 'Act 1, Scene 3',
        analysis:
          'Lady Capulet describes Paris as a book to be read, reducing marriage to an aesthetic transaction. The extended metaphor reveals her own experience of marriage: she was married for appearance and status, not love. She can only offer Juliet the same impoverished model.',
      },
      {
        quote: 'Talk not to me, for I\'ll not speak a word. / Do as thou wilt, for I have done with thee.',
        act: 'Act 3, Scene 5',
        analysis:
          'Lady Capulet abandons Juliet at her most desperate moment. "I have done with thee" severs the maternal bond entirely. Shakespeare shows how women within the patriarchal system can become its enforcers, perpetuating the very structures that limit them.',
      },
    ],
    themeLinks: ['Family & Honour', 'Youth vs Age', 'Love'],
    examTip:
      'Lady Capulet is a useful lens for discussing patriarchal society. Her distance from Juliet and her inability to challenge her husband reveal how the system silences women across generations.',
  },
  {
    name: 'Friar Lawrence',
    role: 'A Franciscan friar and Romeo\'s spiritual adviser',
    analysis:
      'The Friar is well-intentioned, philosophical and dangerously over-confident. He agrees to marry the lovers hoping to end the feud, and when that fails he constructs increasingly risky plans. His soliloquy on herbs (Act 2, Scene 3) establishes the theme of duality: plants can heal or poison, just as human nature contains both good and evil. However, his schemes collapse because he underestimates the speed of events and the depth of the lovers\' desperation. Shakespeare presents the Friar as a man whose wisdom exists in theory but fails in practice.',
    development:
      'The Friar begins as the voice of moderation ("Wisely and slow; they stumble that run fast") but is progressively drawn into deception. By Act 4, he has moved from spiritual adviser to potion-maker and schemer. His flight from the tomb in Act 5 -- abandoning Juliet beside Romeo\'s body -- is his final moral failure. Shakespeare suggests that even well-meaning authority figures can cause catastrophe when they rely on clever plans rather than honest truth.',
    keyQuotes: [
      {
        quote: 'These violent delights have violent ends / And in their triumph die, like fire and powder, / Which as they kiss consume.',
        act: 'Act 2, Scene 6',
        analysis:
          'The Friar warns that intense passion is self-destructive. The simile of "fire and powder" presents love as a chemical reaction: beautiful but explosive. "As they kiss consume" links the physical act of kissing to mutual destruction. The Friar accurately predicts the tragedy but cannot prevent it.',
      },
      {
        quote: 'Wisely and slow; they stumble that run fast.',
        act: 'Act 2, Scene 3',
        analysis:
          'The Friar\'s proverbial wisdom is sound in principle. The irony is that he himself "runs fast" by agreeing to a hasty secret marriage and later devising increasingly reckless schemes. Shakespeare uses dramatic irony to undermine the Friar\'s authority.',
      },
      {
        quote: 'In one respect I\'ll thy assistant be; / For this alliance may so happy prove / To turn your households\' rancour to pure love.',
        act: 'Act 2, Scene 3',
        analysis:
          'The Friar\'s motive for marrying the lovers is political, not spiritual. He hopes the marriage will end the feud, using Romeo and Juliet as instruments of peace. Shakespeare suggests that even good intentions can be exploitative when they treat individuals as means to an end.',
      },
    ],
    themeLinks: ['Fate & Free Will', 'Youth vs Age', 'Light & Dark imagery', 'Death & Sacrifice'],
    examTip:
      'The Friar is a rich character for discussing dramatic irony. His wise pronouncements consistently foreshadow events he cannot control, creating a tension between knowledge and power that runs through the whole play.',
  },
  {
    name: 'Benvolio',
    role: 'Romeo\'s cousin; a Montague peacemaker',
    analysis:
      'Benvolio is the play\'s voice of reason and moderation. His name means "good will," and he consistently tries to keep the peace, urging Romeo to forget Rosaline and attempting to prevent street fights. He is a foil to Tybalt: where Tybalt seeks conflict, Benvolio seeks harmony. However, his peacemaking is ultimately ineffective -- he cannot prevent Mercutio\'s death or Romeo\'s banishment. Shakespeare uses Benvolio to show that in a society consumed by violence, individual goodness is insufficient.',
    development:
      'Benvolio disappears from the play after Act 3. His absence from the second half of the tragedy is significant: once violence has taken hold, there is no longer a role for the peacemaker. Shakespeare\'s structural decision reinforces the idea that the feud has become unstoppable.',
    keyQuotes: [
      {
        quote: 'I do but keep the peace. Put up thy sword, / Or manage it to part these men with me.',
        act: 'Act 1, Scene 1',
        analysis:
          'Benvolio\'s first action is to try to stop the fighting. "Keep the peace" defines his character entirely. But the paradox of drawing a sword to enforce peace illustrates how violence permeates even peaceful intentions in Verona.',
      },
      {
        quote: 'Tybalt, here slain, whom Romeo\'s hand did slay -- / Romeo, that spoke him fair, bade him bethink / How nice the quarrel was.',
        act: 'Act 3, Scene 1',
        analysis:
          'Benvolio gives a factual, even-handed account of the fight to the Prince. His objectivity contrasts with Lady Capulet\'s call for Romeo\'s execution. Shakespeare uses Benvolio to represent truth and fairness in a world dominated by bias and rage.',
      },
    ],
    themeLinks: ['Conflict & Violence', 'Family & Honour', 'Youth vs Age'],
    examTip:
      'Benvolio is useful as a foil. Compare him to Tybalt to show how Shakespeare presents contrasting responses to the feud, or to Romeo to highlight Romeo\'s impulsiveness.',
  },
  {
    name: 'Paris',
    role: 'A nobleman; suitor to Juliet, kinsman of the Prince',
    analysis:
      'Paris is a conventional, well-meaning nobleman who genuinely believes he loves Juliet. He follows all the proper social conventions: he asks Lord Capulet for permission, he brings gifts, he mourns at her tomb. Yet he represents everything the play critiques about arranged marriage and patriarchal ownership. He never asks Juliet what she wants and is oblivious to her distress. His presence makes Juliet\'s situation unbearable and drives her to the Friar\'s desperate potion plan. Shakespeare presents Paris not as a villain but as a product of a flawed system.',
    development:
      'Paris remains consistent throughout the play. His final appearance at the tomb, where he fights Romeo and dies, gives him a tragic dignity he previously lacked. His dying request to be laid beside Juliet is genuinely moving and reminds the audience that the feud destroys those on its periphery as well as those at its centre.',
    keyQuotes: [
      {
        quote: 'These times of woe afford no times to woo.',
        act: 'Act 3, Scene 4',
        analysis:
          'Paris is sensitive enough to recognise that Juliet is grieving (though he thinks she grieves for Tybalt, not Romeo). The neat alliteration of "woe" and "woo" reveals a man who expresses even empathy in controlled, conventional language. He lacks Romeo\'s passionate authenticity.',
      },
      {
        quote: 'O, I am slain! If thou be merciful, / Open the tomb, lay me with Juliet.',
        act: 'Act 5, Scene 3',
        analysis:
          'Paris\'s dying words are his most human moment. His request to be laid with Juliet reveals genuine love, however conventional. Shakespeare grants Paris a dignity in death that complicates any simple reading of him as a mere obstacle to the lovers.',
      },
    ],
    themeLinks: ['Love', 'Family & Honour', 'Death & Sacrifice'],
    examTip:
      'Paris works well as a comparison to Romeo. Both love Juliet, but Paris loves within social convention while Romeo loves against it. This contrast illuminates what Shakespeare values in love.',
  },
  {
    name: 'The Prince (Escalus)',
    role: 'Prince of Verona; figure of law and authority',
    analysis:
      'Prince Escalus represents civil authority and justice. He appears three times -- at the opening brawl, after Tybalt\'s death, and at the tomb -- each time attempting to restore order. His decree of banishment for Romeo (rather than execution) shows mercy but also proves inadequate: banishment is the catalyst for the lovers\' desperate plan. Shakespeare uses the Prince to explore the limits of political authority: he can punish individuals but cannot heal the deeper social wound of the feud.',
    development:
      'The Prince\'s final speech acknowledges that even he has been punished by the feud ("And I, for winking at your discords too, / Have lost a brace of kinsmen"). His admission of complicity elevates him from a mere authority figure to a participant in the tragedy. Shakespeare distributes responsibility across the entire community.',
    keyQuotes: [
      {
        quote: 'If ever you disturb our streets again, / Your lives shall pay the forfeit of the peace.',
        act: 'Act 1, Scene 1',
        analysis:
          'The Prince\'s ultimatum establishes the stakes from the play\'s opening. "Forfeit of the peace" makes peace a commodity that must be paid for in blood. The threat of death foreshadows the play\'s ending: ultimately, it is the lovers\' lives that pay the price.',
      },
      {
        quote: 'All are punished.',
        act: 'Act 5, Scene 3',
        analysis:
          'The Prince\'s final verdict is devastating in its simplicity. Three words convey the universal scope of the tragedy: no one escapes guilt, no one escapes suffering. Shakespeare refuses a comfortable resolution -- there are no winners, only varying degrees of loss.',
      },
    ],
    themeLinks: ['Conflict & Violence', 'Fate & Free Will', 'Family & Honour'],
    examTip:
      'The Prince\'s three appearances structure the play\'s public narrative. Use his speeches to discuss how Shakespeare frames the feud as a civic crisis, not just a family quarrel.',
  },
]

/* ─── Page ───────────────────────────────────────────────────── */

export default function RomeoAndJulietCharactersPage() {
  return (
    <div className="min-h-screen bg-cream-50">
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <StudyTools textName="Romeo and Juliet" textType="play" />

        {/* Hero */}
        <section className="relative mt-8 overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-rose-500/[0.04] p-6 sm:p-8 lg:p-10">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-rose-500/5 blur-3xl" />
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
                <Users className="mr-1 size-3 text-rose-400" />
                Character Study
              </Badge>
              <Badge variant="outline" className="text-muted-foreground">
                AQA / Edexcel / OCR / Eduqas
              </Badge>
            </div>

            <h1 className="text-display-sm font-heading text-foreground sm:text-display">
              Characters — Deep Study
            </h1>
            <p className="mt-2 text-body-lg text-muted-foreground">
              Romeo and Juliet by William Shakespeare
            </p>
            <p className="mt-4 max-w-2xl text-body-md text-muted-foreground">
              Detailed analysis of every major character with key quotations, character
              development, theme links, and exam tips for top-grade responses.
            </p>
          </div>
        </section>

        {/* Characters */}
        <div className="mt-10 space-y-10">
          {CHARACTERS.map((ch) => (
            <section key={ch.name}>
              <div className="mb-5 flex items-center gap-3">
                <Users className="size-5 text-rose-400" />
                <div>
                  <h2 className="text-heading-lg font-heading text-foreground">{ch.name}</h2>
                  <p className="text-body-sm text-muted-foreground">{ch.role}</p>
                </div>
              </div>

              <div className="space-y-4">
                {/* Analysis */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-heading-md font-heading">Analysis</CardTitle>
                  </CardHeader>
                  <CardContent className="text-body-sm text-muted-foreground">
                    <p>{ch.analysis}</p>
                  </CardContent>
                </Card>

                {/* Character Development */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-heading-md font-heading">Character Development</CardTitle>
                  </CardHeader>
                  <CardContent className="text-body-sm text-muted-foreground">
                    <p>{ch.development}</p>
                  </CardContent>
                </Card>

                {/* Key Quotes */}
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Quote className="size-5 text-violet-400" />
                      <CardTitle className="text-heading-md font-heading">Key Quotations</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-5">
                    {ch.keyQuotes.map((q, i) => (
                      <div key={i} className="space-y-1.5">
                        <p className="text-body-md font-medium italic text-foreground">
                          &ldquo;{q.quote}&rdquo;
                        </p>
                        <p className="text-caption uppercase tracking-wide text-primary">
                          {q.act}
                        </p>
                        <p className="text-body-sm text-muted-foreground">{q.analysis}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Theme links */}
                <Card className="border-l-4 border-l-rose-400">
                  <CardContent className="p-5">
                    <p className="text-sm font-semibold text-foreground mb-2">Theme links</p>
                    <div className="flex flex-wrap gap-2">
                      {ch.themeLinks.map((theme) => (
                        <Badge key={theme} variant="outline" className="text-muted-foreground">
                          {theme}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Exam tip */}
                <Card className="bg-primary/5">
                  <CardContent className="p-5">
                    <div className="flex items-center gap-2 mb-1">
                      <Lightbulb className="size-4 text-amber-400" />
                      <p className="text-sm font-semibold text-foreground">Exam tip</p>
                    </div>
                    <p className="text-body-sm text-muted-foreground">{ch.examTip}</p>
                  </CardContent>
                </Card>
              </div>
            </section>
          ))}
        </div>

        {/* Footer */}
        <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
          <em>Romeo and Juliet</em> (c. 1594-96) by William Shakespeare is in the
          public domain. All quotations are reproduced freely.
        </p>
      </div>
    </div>
  )
}
