import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

import { getServerBoard } from '@/lib/board/get-server-board'
import { getBoardConfig } from '@/lib/board/board-config'
import { TextGuide, type TextGuideData } from '../_components/text-guide'
import TextStudyHub from '@/components/study/TextStudyHub'
import InlineStudyEngine, { type QuizQuestion } from '@/components/study/InlineStudyEngine'

import { CourseJsonLd, BreadcrumbJsonLd, LearningResourceJsonLd } from '@/components/seo/json-ld'
export const metadata: Metadata = {
  openGraph: {
    title: 'Romeo and Juliet revision guide — themes, characters, key quotes — The English Hub',
    description: 'Romeo and Juliet GCSE revision — Shakespeare',
  },
  title: 'Romeo and Juliet revision guide — themes, characters, key quotes — The English Hub',
  description:
    "Romeo and Juliet GCSE revision — Shakespeare's tragedy with acts, characters, themes, context and key quotes. Aligned to AQA, Edexcel, OCR and Eduqas.",
  alternates: {
    canonical: 'https://theenglishhub.app/revision/texts/romeo-and-juliet',
  },
}

const data: TextGuideData = {
  title: 'Romeo and Juliet',
  author: 'William Shakespeare',
  year: 'c. 1594–96',
  category: 'Play',
  badge: 'AQA / Edexcel / OCR / Eduqas / Edexcel iGCSE',
  intro:
    'Shakespeare\u2019s most famous tragedy tells the story of two young lovers caught between warring families in Verona. Written in the mid-1590s, Romeo and Juliet is a play about passion, impulsiveness and the terrible cost of an inherited feud. It remains one of the most widely studied Shakespeare texts at GCSE, appearing on every major exam board.',
  quickInfo: {
    genre: 'Tragedy / Romance',
    setting: 'Verona and Mantua, Italy',
    length: 'Five-act play (~3,000 lines)',
    published: 'c. 1594–96 (first quarto 1597)',
  },
  plotSummary: [
    'The play opens with a street brawl between servants of the Montague and Capulet households, establishing the ancient feud that poisons Verona. Prince Escalus threatens death to anyone who disturbs the peace again. Meanwhile Romeo, a Montague, is lovesick over a girl called Rosaline. His friends Benvolio and Mercutio persuade him to gate-crash a Capulet feast, where he instantly forgets Rosaline upon seeing Juliet. The two share a sonnet and a kiss before discovering they belong to enemy families. That night Romeo climbs into the Capulet orchard, and in the famous balcony scene the lovers declare their mutual devotion and decide to marry in secret.',
    'In Act 2, Friar Lawrence agrees to marry Romeo and Juliet, hoping the union will reconcile the feuding families. The Nurse acts as go-between, carrying messages and arranging the secret ceremony. But the mood darkens sharply in Act 3. Tybalt, Juliet\u2019s hot-headed cousin, challenges Romeo to a duel. Romeo refuses to fight because Tybalt is now his kinsman by marriage, but Mercutio steps in and is fatally stabbed under Romeo\u2019s arm. Enraged, Romeo kills Tybalt and is banished from Verona by the Prince.',
    'Romeo spends one night with Juliet before fleeing to Mantua. Lord Capulet, unaware of the secret marriage, arranges for Juliet to marry Count Paris. Desperate, Juliet turns to Friar Lawrence, who devises a dangerous plan: she will drink a potion that mimics death for forty-two hours, and Romeo will be sent word to collect her from the family tomb. Juliet takes the potion and is discovered apparently dead by her family, who place her in the Capulet vault.',
    'The Friar\u2019s letter explaining the plan never reaches Romeo. Instead, Romeo\u2019s servant Balthasar brings news that Juliet is dead. Romeo buys poison and rides to the tomb. He encounters Paris, kills him, and then drinks the poison beside Juliet\u2019s body. Juliet wakes moments later, finds Romeo dead, and stabs herself with his dagger. The two families arrive to discover the bodies of their children. Confronted with the consequences of their hatred, Lord Montague and Lord Capulet finally agree to end the feud. The Prince delivers the closing judgement that the tragedy belongs to everyone.',
  ],
  characters: [
    {
      name: 'Romeo Montague',
      role: 'Son of Lord Montague; the male protagonist',
      body: 'Romeo is passionate, impulsive and poetic. He moves from conventional infatuation with Rosaline to a consuming love for Juliet in a matter of hours, and his emotional extremes drive the plot forward. Shakespeare uses Romeo to explore the link between intense love and self-destruction: he acts before he thinks, whether rushing to marry, killing Tybalt in fury, or taking poison without checking whether Juliet is truly dead.',
    },
    {
      name: 'Juliet Capulet',
      role: 'Daughter of Lord Capulet; the female protagonist',
      body: 'Juliet begins the play as an obedient thirteen-year-old but rapidly becomes the more mature and decisive of the two lovers. She questions the meaning of names, negotiates her own marriage, defies her father and takes a terrifying potion alone. Shakespeare gives her some of the play\u2019s most intellectually sophisticated speeches, and her final act of suicide is a deliberate choice rather than an impulsive one.',
    },
    {
      name: 'Tybalt',
      role: 'Juliet\u2019s cousin; a Capulet firebrand',
      body: 'Tybalt is aggressive, honour-obsessed and skilled with a sword. He represents the feud at its most dangerous because he actively seeks conflict rather than simply inheriting it. His killing of Mercutio is the turning point of the play, transforming comedy into tragedy.',
    },
    {
      name: 'Mercutio',
      role: 'Romeo\u2019s close friend; kinsman of the Prince',
      body: 'Witty, bawdy and fearless, Mercutio mocks both love and honour with equal energy. His Queen Mab speech reveals a dark imagination beneath the jokes. His death — caused partly by Romeo\u2019s well-meaning intervention — triggers the chain of catastrophe, and his dying curse on both houses becomes the play\u2019s moral verdict.',
    },
    {
      name: 'The Nurse',
      role: 'Juliet\u2019s nursemaid and confidante',
      body: 'Comic, affectionate and garrulous, the Nurse has raised Juliet since infancy and loves her deeply. She acts as go-between for the lovers, but when the crisis arrives she advises Juliet to forget Romeo and marry Paris. This pragmatic betrayal isolates Juliet at the moment she most needs support.',
    },
    {
      name: 'Friar Lawrence',
      role: 'A Franciscan friar and Romeo\u2019s spiritual adviser',
      body: 'The Friar is well-intentioned, philosophical and dangerously over-confident. He agrees to marry the lovers hoping to end the feud, and when that fails he constructs an increasingly risky plan involving a death-mimicking potion. His schemes collapse because he underestimates the speed of events and the depth of the lovers\u2019 desperation.',
    },
    {
      name: 'Lord Capulet',
      role: 'Juliet\u2019s father; head of the Capulet household',
      body: 'Capulet shifts from an apparently reasonable father who tells Paris to wait and win Juliet\u2019s consent, to a domestic tyrant who threatens to disown her when she refuses the match. His rage exposes the patriarchal power that controls Juliet\u2019s life, and his grief at the end shows the human cost of his stubbornness.',
    },
  ],
  themes: [
    {
      title: 'Love',
      body: 'Shakespeare presents love in many forms: the conventional Petrarchan love Romeo performs for Rosaline, the mutual and transformative love he shares with Juliet, the Nurse\u2019s maternal affection, and Friar Lawrence\u2019s spiritual love. The central love between Romeo and Juliet is defined by its intensity and its opposition to the social world around it. Shakespeare repeatedly links love to light, religion and death, suggesting that in a corrupt society, genuine love can only exist outside ordinary life.',
    },
    {
      title: 'Fate and destiny',
      body: 'The Prologue calls Romeo and Juliet "star-cross\u2019d lovers" whose deaths are "misadventur\u2019d," establishing fate as a force that hangs over the entire play. Shakespeare builds a pattern of unlucky timing: the undelivered letter, Romeo\u2019s arrival minutes before Juliet wakes, the chance encounters that lead to violence. Yet the play also suggests that the feud, parental tyranny and impulsive decisions are human causes of the tragedy, leaving the audience to weigh fate against free will.',
    },
    {
      title: 'Conflict and violence',
      body: 'The feud between Montagues and Capulets saturates every level of Verona, from servants brawling in the streets to Tybalt\u2019s aristocratic code of honour. Shakespeare structures the play so that every moment of love is shadowed by the threat of violence. The public fights force the Prince to intervene, and the private conflicts within the Capulet household mirror the external warfare. Conflict is shown to be self-perpetuating: each act of violence demands revenge, trapping everyone in a cycle only the lovers\u2019 deaths can break.',
    },
    {
      title: 'Youth versus age',
      body: 'The play repeatedly contrasts the passion and idealism of the young with the caution, authority and stubbornness of the old. Romeo and Juliet\u2019s love is spontaneous and absolute; their parents\u2019 feud is inherited and irrational. Lord Capulet\u2019s shift from indulgent father to furious patriarch dramatises how adult power crushes youthful autonomy. Friar Lawrence and the Nurse, the adults closest to the lovers, both fail them at critical moments, suggesting that the older generation\u2019s world is fundamentally hostile to young passion.',
    },
    {
      title: 'Honour and reputation',
      body: 'Honour in Verona is public, male and violent. Tybalt fights to defend the Capulet name; Romeo kills to avenge Mercutio; Lord Capulet forces the Paris match partly to maintain family standing. Shakespeare exposes honour as a destructive social code that values reputation over life. Juliet, excluded from this masculine honour system, is instead controlled by expectations of female obedience and chastity, which constrain her just as lethally.',
    },
    {
      title: 'Light and darkness',
      body: 'Shakespeare fills the play with imagery of light against darkness. Romeo compares Juliet to the sun, to a jewel shining against an dark cheek, and to a snowy dove among crows. Their love scenes happen at night, hidden from the hostile daylight world of the feud. This pattern inverts the usual associations: for the lovers, darkness is safety and intimacy, while the bright public world brings violence and separation. The motif intensifies as the play moves towards the tomb, where the lovers\u2019 final light is extinguished.',
    },
  ],
  historicalContext: [
    'Shakespeare wrote Romeo and Juliet in the mid-1590s, during the reign of Elizabeth I. The Elizabethan theatre was a commercial, popular art form: plays were performed in open-air playhouses like the Globe to audiences of up to three thousand people from every social class. Shakespeare\u2019s company performed for paying crowds in the afternoon and sometimes for the Queen\u2019s court in the evening, and Romeo and Juliet was one of his earliest popular successes.',
    'Marriage in Elizabethan England was a financial and dynastic arrangement, especially among the wealthy. Daughters were expected to obey their fathers in the choice of husband, and a refusal could mean disinheritance. Juliet\u2019s defiance of Lord Capulet would have been shocking to an Elizabethan audience, and the play\u2019s sympathy for her rebellion is quietly radical. The legal age of marriage was twelve for girls with parental consent, so Juliet\u2019s age of thirteen is historically accurate rather than unusual.',
    'Elizabethan England was a patriarchal society in which women had very limited legal rights. A woman passed from the authority of her father to the authority of her husband. Shakespeare\u2019s portrayal of Juliet as intellectually sharp, emotionally courageous and morally independent pushes against these expectations. The Nurse and Lady Capulet, who accept the patriarchal system, are unable to protect Juliet from it, and her isolation in Acts 3 to 5 dramatises the consequences of female powerlessness.',
    'Shakespeare set the play in Verona, drawing on Italian sources including Arthur Brooke\u2019s long narrative poem The Tragicall Historye of Romeus and Juliet (1562). Italy was associated in the English imagination with passion, beauty, vendetta and danger. The Italian setting allowed Shakespeare to explore extreme emotions and family violence at a slight remove from English society, while the themes of parental authority, honour killing and forced marriage resonated directly with his audience\u2019s own experience.',
  ],
  quotations: [
    {
      quote:
        '"Two households, both alike in dignity, / In fair Verona, where we lay our scene, / From ancient grudge break to new mutiny, / Where civil blood makes civil hands unclean."',
      who: 'Chorus — Prologue',
      analysis:
        'The sonnet prologue establishes the feud, foreshadows the tragedy and frames the play as a story whose ending is already known.',
    },
    {
      quote:
        '"From forth the fatal loins of these two foes / A pair of star-cross\'d lovers take their life."',
      who: 'Chorus — Prologue',
      analysis:
        'Introduces the idea of fate ("star-cross\'d") and the double meaning of "take their life" — both born and killed.',
    },
    {
      quote:
        '"O, she doth teach the torches to burn bright! / It seems she hangs upon the cheek of night / As a rich jewel in an Ethiope\'s ear."',
      who: 'Romeo — Act 1, Scene 5',
      analysis:
        'Romeo\u2019s first sight of Juliet, using light and dark imagery to elevate her above the ordinary world.',
    },
    {
      quote:
        '"My only love sprung from my only hate! / Too early seen unknown, and known too late!"',
      who: 'Juliet — Act 1, Scene 5',
      analysis:
        'Juliet recognises the paradox at the heart of the play: love and enmity are inseparable from birth.',
    },
    {
      quote:
        '"But soft, what light through yonder window breaks? / It is the east, and Juliet is the sun."',
      who: 'Romeo — Act 2, Scene 2',
      analysis:
        'The famous balcony speech uses cosmic imagery to present Juliet as a life-giving force that eclipses everything else.',
    },
    {
      quote:
        '"What\'s in a name? That which we call a rose / By any other word would smell as sweet."',
      who: 'Juliet — Act 2, Scene 2',
      analysis:
        'Juliet challenges the idea that identity is determined by family name, striking at the root of the feud.',
    },
    {
      quote:
        '"These violent delights have violent ends / And in their triumph die, like fire and powder, / Which as they kiss consume."',
      who: 'Friar Lawrence — Act 2, Scene 6',
      analysis:
        'The Friar\u2019s warning foreshadows the lovers\u2019 destruction and links passion directly to self-annihilation.',
    },
    {
      quote: '"A plague o\' both your houses!"',
      who: 'Mercutio — Act 3, Scene 1',
      analysis:
        'Mercutio\u2019s dying curse condemns both families equally and voices the play\u2019s moral judgement on the feud.',
    },
    {
      quote: '"O, I am fortune\'s fool!"',
      who: 'Romeo — Act 3, Scene 1',
      analysis:
        'Romeo recognises fate\u2019s hand immediately after killing Tybalt, linking his impulsiveness to cosmic injustice.',
    },
    {
      quote: '"It was the nightingale, and not the lark."',
      who: 'Juliet — Act 3, Scene 5',
      analysis:
        'Juliet tries to deny the coming of dawn and Romeo\u2019s banishment, using birdsong to cling to their last moments together.',
    },
    {
      quote:
        '"Hang thee, young baggage! Disobedient wretch! / I tell thee what: get thee to church o\' Thursday, / Or never after look me in the face."',
      who: 'Lord Capulet — Act 3, Scene 5',
      analysis:
        'Capulet\u2019s fury at Juliet\u2019s refusal exposes the patriarchal violence beneath his earlier reasonableness.',
    },
    {
      quote: '"Is there no pity sitting in the clouds / That sees into the bottom of my grief?"',
      who: 'Juliet — Act 3, Scene 5',
      analysis:
        'Juliet\u2019s appeal to heaven after being abandoned by the Nurse emphasises her total isolation.',
    },
    {
      quote: '"My dismal scene I needs must act alone."',
      who: 'Juliet — Act 4, Scene 3',
      analysis:
        'Juliet steels herself to take the potion, acknowledging that she faces death with no support from anyone.',
    },
    {
      quote: '"Then I defy you, stars!"',
      who: 'Romeo — Act 5, Scene 1',
      analysis:
        'Romeo\u2019s defiant reaction to the news of Juliet\u2019s death, asserting free will against the fate that has governed the play.',
    },
    {
      quote: '"O true apothecary, / Thy drugs are quick. Thus with a kiss I die."',
      who: 'Romeo — Act 5, Scene 3',
      analysis:
        'Romeo\u2019s last words unite love ("a kiss") and death in a single line, encapsulating the play\u2019s central paradox.',
    },
    {
      quote: '"O happy dagger, / This is thy sheath; there rust, and let me die."',
      who: 'Juliet — Act 5, Scene 3',
      analysis:
        'Juliet\u2019s suicide is deliberate and decisive, contrasting with Romeo\u2019s impulsive action and completing their tragic symmetry.',
    },
    {
      quote: '"For never was a story of more woe / Than this of Juliet and her Romeo."',
      who: 'Prince Escalus — Act 5, Scene 3',
      analysis:
        'The Prince\u2019s closing couplet transforms the lovers into a lasting story, suggesting their deaths carry meaning beyond the personal.',
    },
    {
      quote: '"Wisely and slow; they stumble that run fast."',
      who: 'Friar Lawrence — Act 2, Scene 3',
      analysis:
        'Proverbial advice that the Friar himself fails to follow, adding irony to his role as counsellor.',
    },
    {
      quote: '"O serpent heart hid with a flow\'ring face! / Did ever dragon keep so fair a cave?"',
      who: 'Juliet — Act 3, Scene 2',
      analysis:
        'Juliet\u2019s use of oxymoron when she learns Romeo killed Tybalt captures her agonising conflict between love and family loyalty.',
    },
    {
      quote:
        '"Death lies on her like an untimely frost / Upon the sweetest flower of all the field."',
      who: 'Lord Capulet — Act 4, Scene 5',
      analysis:
        'Capulet\u2019s grief uses natural imagery to present Juliet\u2019s apparent death as an unnatural destruction of youth and beauty.',
    },
    {
      quote: '"O, what learning is! / My lord, I\'ll tell my lady you will come."',
      who: 'Nurse — Act 2, Scene 4',
      analysis:
        'The Nurse\u2019s comic admiration for the Friar\u2019s learning contrasts with her practical, bawdy worldview and adds warmth to the middle acts.',
    },
    {
      quote:
        '"Give me my Romeo, and when I shall die / Take him and cut him out in little stars, / And he will make the face of heaven so fine / That all the world will be in love with night."',
      who: 'Juliet — Act 3, Scene 2',
      analysis:
        'Juliet\u2019s epithalamium imagines love as cosmic and eternal, but the word "die" carries a dark premonition alongside its Elizabethan double meaning.',
    },
  ],
}

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'rj-1',
    question: 'What are Romeo and Juliet called in the Prologue?',
    type: 'multiple-choice',
    options: ['Young lovers', "Star-cross'd lovers", 'Forbidden lovers', 'Tragic heroes'],
    correctIndex: 1,
    explanation:
      'The Prologue calls them "star-cross\'d lovers," establishing fate as a force that hangs over the entire play and foreshadowing their deaths.',
    topic: 'Plot',
    difficulty: 'foundation',
  },
  {
    id: 'rj-2',
    question: 'Which two families are feuding in the play?',
    type: 'multiple-choice',
    options: [
      'Capulet and Montague',
      'Benvolio and Tybalt',
      'Verona and Mantua',
      'Escalus and Capulet',
    ],
    correctIndex: 0,
    explanation:
      'The Montagues and Capulets are the feuding families. Their "ancient grudge" poisons Verona and ultimately destroys their children.',
    topic: 'Plot',
    difficulty: 'foundation',
  },
  {
    id: 'rj-3',
    question: 'Who says "A plague o\' both your houses"?',
    type: 'multiple-choice',
    options: ['Romeo', 'Tybalt', 'Mercutio', 'The Prince'],
    correctIndex: 2,
    explanation:
      "Mercutio curses both families as he dies, having been fatally stabbed under Romeo's arm. His dying curse voices the play's moral judgement on the feud.",
    topic: 'Characters',
    difficulty: 'foundation',
  },
  {
    id: 'rj-4',
    question: 'Who kills Tybalt?',
    type: 'multiple-choice',
    options: ['Benvolio', 'Mercutio', 'Romeo', 'Paris'],
    correctIndex: 2,
    explanation:
      "Romeo kills Tybalt in a rage after Tybalt fatally stabs Mercutio. This act of vengeance transforms the play from comedy into tragedy and leads to Romeo's banishment.",
    topic: 'Plot',
    difficulty: 'foundation',
  },
  {
    id: 'rj-5',
    question: "What is Juliet's age in the play?",
    type: 'multiple-choice',
    options: ['Twelve', 'Thirteen', 'Fifteen', 'Sixteen'],
    correctIndex: 1,
    explanation:
      'Juliet is thirteen years old. This was historically accurate for marriage in Elizabethan England (the legal age was twelve with parental consent), but Shakespeare emphasises her youth to heighten the tragedy.',
    topic: 'Characters',
    difficulty: 'foundation',
  },
  {
    id: 'rj-6',
    question: 'Who marries Romeo and Juliet in secret?',
    type: 'multiple-choice',
    options: ['The Nurse', 'The Prince', 'Friar Lawrence', 'Benvolio'],
    correctIndex: 2,
    explanation:
      'Friar Lawrence marries them in secret, hoping the union will reconcile the feuding families. His well-meaning but over-confident schemes ultimately fail.',
    topic: 'Plot',
    difficulty: 'foundation',
  },
  {
    id: 'rj-7',
    question:
      'What does Juliet mean by "What\'s in a name? That which we call a rose / By any other word would smell as sweet"?',
    type: 'multiple-choice',
    options: [
      'She loves flowers',
      "Names are meaningless — Romeo's family name does not define who he is",
      'She wants to change her own name',
      'She is talking about gardening',
    ],
    correctIndex: 1,
    explanation:
      'Juliet challenges the idea that identity is determined by family name, arguing that Romeo would be the same person regardless of being a Montague. This strikes at the root of the feud.',
    topic: 'Themes',
    difficulty: 'foundation',
  },
  {
    id: 'rj-8',
    question: 'Why does Romeo take poison at the end of the play?',
    type: 'multiple-choice',
    options: [
      'He is forced to by Paris',
      "He believes Juliet is truly dead because the Friar's letter never reached him",
      'Juliet asks him to',
      "He is tricked by Tybalt's ghost",
    ],
    correctIndex: 1,
    explanation:
      "The Friar's letter explaining the plan never reaches Romeo. Instead, his servant Balthasar brings news that Juliet is dead. Romeo buys poison and takes it beside her body, not knowing she will wake moments later.",
    topic: 'Plot',
    difficulty: 'foundation',
  },
  {
    id: 'rj-9',
    question:
      'What literary device is used when the Prologue reveals the ending before the play begins?',
    type: 'multiple-choice',
    options: ['Metaphor', 'Dramatic irony / foreshadowing', 'Personification', 'Alliteration'],
    correctIndex: 1,
    explanation:
      "The Prologue tells the audience the lovers will die, creating dramatic irony throughout the play. Every moment of hope is shadowed by the audience's knowledge of the inevitable ending.",
    topic: "Writer's Methods",
    difficulty: 'higher',
  },
  {
    id: 'rj-10',
    question: 'What does Friar Lawrence mean by "These violent delights have violent ends"?',
    type: 'multiple-choice',
    options: [
      'He enjoys violence',
      'Extreme passion leads to self-destruction',
      'He is warning about the weather',
      'He disapproves of marriage',
    ],
    correctIndex: 1,
    explanation:
      'The Friar warns that intense, uncontrolled passion will destroy itself "like fire and powder, / Which as they kiss consume." This foreshadows the lovers\' deaths and links passion to self-annihilation.',
    topic: 'Themes',
    difficulty: 'higher',
  },
  {
    id: 'rj-11',
    question: "How does Lord Capulet's attitude towards Juliet change during the play?",
    type: 'multiple-choice',
    options: [
      'He becomes more lenient',
      'He shifts from apparently reasonable father to domestic tyrant who threatens to disown her',
      'He stays consistently kind',
      'He never interacts with Juliet directly',
    ],
    correctIndex: 1,
    explanation:
      'Capulet initially tells Paris to wait and win Juliet\'s consent, but later threatens to disown her when she refuses the match. His rage ("Hang thee, young baggage! Disobedient wretch!") exposes the patriarchal power controlling Juliet\'s life.',
    topic: 'Characters',
    difficulty: 'higher',
  },
  {
    id: 'rj-12',
    question: 'What does Juliet mean by "My dismal scene I needs must act alone"?',
    type: 'multiple-choice',
    options: [
      'She wants to perform in a play',
      'She must face the terrifying potion and possible death with no support from anyone',
      'She is practising acting',
      'She is running away from home',
    ],
    correctIndex: 1,
    explanation:
      'Juliet steels herself to take the death-mimicking potion alone. By this point, the Nurse has betrayed her and she has no adult support. The theatrical metaphor ("act") highlights her courage in facing death alone.',
    topic: 'Characters',
    difficulty: 'higher',
  },
  {
    id: 'rj-13',
    question: 'How does Shakespeare use light and darkness imagery in the play?',
    type: 'multiple-choice',
    options: [
      'Light = good, darkness = evil (conventional)',
      'The pattern is inverted: darkness is safety and intimacy for the lovers, while daylight brings violence and separation',
      'There is no consistent pattern',
      'Darkness always symbolises death',
    ],
    correctIndex: 1,
    explanation:
      "Shakespeare inverts conventional associations: the lovers' scenes happen at night (safety, intimacy), while the bright daylight world brings fights and death. This intensifies as the play moves towards the tomb.",
    topic: "Writer's Methods",
    difficulty: 'higher',
  },
  {
    id: 'rj-14',
    question: 'Why does the Nurse ultimately fail Juliet?',
    type: 'multiple-choice',
    options: [
      'She dies before she can help',
      'She advises Juliet to forget Romeo and marry Paris, choosing pragmatism over loyalty',
      'She reveals the secret marriage',
      'She sides with Tybalt',
    ],
    correctIndex: 1,
    explanation:
      'When the crisis arrives, the Nurse advises Juliet to forget Romeo and marry Paris. This pragmatic betrayal isolates Juliet at the moment she most needs support, leaving her with no adult ally.',
    topic: 'Characters',
    difficulty: 'higher',
  },
  {
    id: 'rj-15',
    question: "What is the significance of Mercutio's Queen Mab speech?",
    type: 'multiple-choice',
    options: [
      'It is purely comic relief',
      'It reveals a dark imagination beneath his jokes, connecting dreams to desire and violence',
      'It explains the feud',
      'It is a love poem to Juliet',
    ],
    correctIndex: 1,
    explanation:
      "The Queen Mab speech starts as witty fantasy but becomes increasingly dark, exposing the violence and desire beneath surface appearances. It reveals Mercutio's unsettling depth and foreshadows the play's dark turn.",
    topic: 'Characters',
    difficulty: 'higher',
  },
  {
    id: 'rj-16',
    question: "How does Romeo's language about Rosaline differ from his language about Juliet?",
    type: 'multiple-choice',
    options: [
      'Both are identical',
      'His love for Rosaline is conventional Petrarchan posturing; his love for Juliet is mutual, genuine and transformative',
      'He speaks more about Rosaline',
      'He uses prose for Rosaline and verse for Juliet',
    ],
    correctIndex: 1,
    explanation:
      "Romeo's love for Rosaline is performed, using cliched Petrarchan conventions (oxymorons, sighing). His love for Juliet is immediate, mutual, and expressed in a shared sonnet at their first meeting, marking it as genuine.",
    topic: "Writer's Methods",
    difficulty: 'grade-9',
  },
  {
    id: 'rj-17',
    question:
      'What does "Then I defy you, stars!" suggest about the conflict between fate and free will?',
    type: 'multiple-choice',
    options: [
      'Romeo accepts his fate calmly',
      'Romeo asserts free will against the fate that has governed the play, but his defiance leads to the very tragedy fate predicted',
      'Romeo is talking about astrology',
      'Romeo is angry at the night sky',
    ],
    correctIndex: 1,
    explanation:
      "Romeo's defiant cry asserts human agency against cosmic fate. The tragic irony is that his attempt to defy fate (rushing to Juliet's tomb) is exactly what fulfils the \"star-cross'd\" prophecy, suggesting free will and fate are intertwined.",
    topic: 'Themes',
    difficulty: 'grade-9',
  },
  {
    id: 'rj-18',
    question: 'How does Shakespeare use the sonnet form structurally in the play?',
    type: 'multiple-choice',
    options: [
      'All dialogue is in sonnet form',
      'Romeo and Juliet share a sonnet at their first meeting, symbolising their perfect union and elevating their love to a literary ideal',
      'Sonnets are used only in the Prologue',
      'The sonnets show conflict',
    ],
    correctIndex: 1,
    explanation:
      'At their first meeting, Romeo and Juliet share a sonnet, each speaking alternate lines. This shared form symbolises their perfect compatibility and elevates their love above the ordinary. The Prologue is also a sonnet, framing the entire play within the form.',
    topic: "Writer's Methods",
    difficulty: 'grade-9',
  },
  {
    id: 'rj-19',
    question:
      'What is the dramatic significance of the play being set in Italy rather than England?',
    type: 'multiple-choice',
    options: [
      'Shakespeare had visited Italy',
      'Italy was associated with passion, beauty, vendetta and danger, allowing exploration of extreme emotions at a slight remove from English society',
      'It was set in Italy by accident',
      'English settings were banned',
    ],
    correctIndex: 1,
    explanation:
      'Italy was associated in the English imagination with passion, beauty, and vendetta. The Italian setting allowed Shakespeare to explore extreme emotions and family violence at a remove from English society, while themes of forced marriage and honour killing still resonated with his audience.',
    topic: 'Context',
    difficulty: 'grade-9',
  },
  {
    id: 'rj-20',
    question: 'How does the final scene function as a resolution to the feud?',
    type: 'multiple-choice',
    options: [
      'The feud continues after the deaths',
      'The deaths of the children force the families to confront the consequences of their hatred and finally reconcile',
      'The Prince punishes both families with exile',
      'The families agree to a truce before the deaths',
    ],
    correctIndex: 1,
    explanation:
      'The Prince delivers judgement that the tragedy belongs to everyone. Confronted with the bodies of their children, Montague and Capulet finally agree to end the feud, but the price — two young lives — makes the reconciliation feel devastatingly hollow.',
    topic: 'Themes',
    difficulty: 'higher',
  },
]

const REVISION_TOPICS = [
  {
    topic: 'Love',
    summary:
      "Shakespeare presents love in multiple forms, from Romeo's conventional Petrarchan infatuation to the genuine, transformative love he shares with Juliet.",
    keyPoints: [
      'Rosaline = performative love; Juliet = genuine mutual love',
      'The shared sonnet at their first meeting elevates their love',
      'Love is linked to light, religion, and death',
      "The Nurse's maternal love and Friar's spiritual love provide contrast",
      'In a corrupt society, genuine love can only exist outside ordinary life',
    ],
  },
  {
    topic: 'Fate and Destiny',
    summary:
      'The Prologue establishes fate as a governing force, but the play also suggests human choices cause the tragedy.',
    keyPoints: [
      '"Star-cross\'d lovers" introduces the idea of cosmic fate',
      'Unlucky timing: the undelivered letter, Romeo arriving minutes too early',
      '"Then I defy you, stars!" — the tension between fate and free will',
      'The feud, parental tyranny, and impulsiveness are human causes',
      'Shakespeare leaves the audience to weigh fate against free will',
    ],
  },
  {
    topic: 'Conflict and Violence',
    summary:
      'The feud saturates every level of Verona, and every moment of love is shadowed by the threat of violence.',
    keyPoints: [
      'Public brawls force the Prince to threaten death',
      'Tybalt actively seeks conflict rather than merely inheriting it',
      "Mercutio's death is the turning point from comedy to tragedy",
      'Violence is self-perpetuating: each act demands revenge',
      "Only the lovers' deaths can break the cycle",
    ],
  },
  {
    topic: 'Youth vs Age',
    summary:
      'The play contrasts youthful passion with adult authority, showing how the older generation crushes young autonomy.',
    keyPoints: [
      "Romeo and Juliet's love is spontaneous; the feud is inherited",
      'Lord Capulet shifts from indulgent father to furious patriarch',
      'The Nurse and Friar both fail the lovers at critical moments',
      'Elizabethan marriage was a financial arrangement controlled by fathers',
      "The play's sympathy lies with the young, but neither generation escapes blame",
    ],
  },
  {
    topic: 'Honour and Reputation',
    summary:
      'Honour in Verona is public, male, and violent — and Shakespeare exposes it as a destructive social code.',
    keyPoints: [
      'Tybalt fights to defend the Capulet name',
      "Romeo kills to avenge Mercutio's honour",
      'Juliet is controlled by expectations of female obedience',
      'Lord Capulet forces the Paris match partly for family standing',
      'Honour values reputation over human life',
    ],
  },
]

const ESSAY_PROMPTS = [
  'How does Shakespeare present the theme of love in Romeo and Juliet?',
  'How does Shakespeare use the character of Tybalt to explore the theme of conflict?',
  'How does Shakespeare present fate and destiny in Romeo and Juliet?',
  'How does Shakespeare explore the relationship between youth and age?',
  'How does Shakespeare use light and dark imagery to convey meaning in Romeo and Juliet?',
]

export default async function RomeoAndJulietPage() {
  const board = await getServerBoard()
  const allowedBoards = ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse']
  if (board && !allowedBoards.includes(board)) {
    redirect('/revision/texts')
  }
  const userBoardLabel = board ? (getBoardConfig(board)?.shortName ?? 'AQA') : 'AQA'

  return (
    <>
      <CourseJsonLd
        name="Romeo and Juliet — Complete GCSE Study Guide"
        description="In-depth study guide for Romeo and Juliet covering plot, characters, themes, key quotations, historical context and exam essay plans for GCSE English Literature."
      />
      <LearningResourceJsonLd
        name="Romeo and Juliet revision guide"
        description="GCSE-aligned study guide for Shakespeare's Romeo and Juliet, covering plot, characters, themes, key quotations, historical context and exam essay plans."
        educationalLevel="GCSE"
        learningResourceType="Study guide"
        inLanguage="en-GB"
        url="https://theenglishhub.app/revision/texts/romeo-and-juliet"
        about="Romeo and Juliet"
        audienceRole="student"
        isAccessibleForFree={true}
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'Revision', url: 'https://theenglishhub.app/revision' },
          { name: 'Set texts', url: 'https://theenglishhub.app/revision/texts' },
          {
            name: 'Romeo and Juliet',
            url: 'https://theenglishhub.app/revision/texts/romeo-and-juliet',
          },
        ]}
      />
      <TextStudyHub
        textName="Romeo and Juliet"
        textType="play"
        examBoard={userBoardLabel}
        basePath="/revision/texts/romeo-and-juliet"
        subPages={[
          {
            id: 'read',
            href: '/revision/texts/romeo-and-juliet/read',
            icon: 'read' as const,
            title: 'Read Full Text',
            description: 'With annotations',
          },
          {
            id: 'acts',
            href: '/revision/texts/romeo-and-juliet/acts',
            icon: 'acts' as const,
            title: 'Act-by-Act Analysis',
            description: 'Key moments & quotes',
          },
          {
            id: 'characters',
            href: '/revision/texts/romeo-and-juliet/characters',
            icon: 'characters' as const,
            title: 'Characters',
            description: 'Full character guide',
          },
          {
            id: 'themes',
            href: '/revision/texts/romeo-and-juliet/themes',
            icon: 'themes' as const,
            title: 'Themes',
            description: 'Theme analysis',
          },
          {
            id: 'quotes',
            href: '/revision/texts/romeo-and-juliet/key-quotes',
            icon: 'quotes' as const,
            title: 'Key Quotes',
            description: 'Quotes with analysis',
          },
          {
            id: 'context',
            href: '/revision/texts/romeo-and-juliet/context',
            icon: 'context' as const,
            title: 'Context',
            description: 'Historical context',
          },
          {
            id: 'essays',
            href: '/revision/texts/romeo-and-juliet/essay-plans',
            icon: 'essays' as const,
            title: 'Essay Plans',
            description: 'GCSE essay plans',
          },
        ]}
        quizQuotes={data.quotations.slice(0, 10).map((q) => ({
          quote: q.quote.replace(/["\u201C\u201D]/g, ''),
          character: q.who.split('\u2014')[0].trim(),
          context: q.analysis.slice(0, 100) + '...',
        }))}
        essayQuestions={[
          'How does Shakespeare present the theme of love in Romeo and Juliet?',
          'How does Shakespeare use the character of Tybalt to explore the theme of conflict?',
          'How does Shakespeare present fate and destiny in Romeo and Juliet?',
          'How does Shakespeare explore the theme of youth versus age?',
          'How does Shakespeare use light and dark imagery in Romeo and Juliet?',
        ]}
        flashcards={data.quotations.slice(0, 8).map((q) => ({
          front: q.quote,
          back: q.analysis,
        }))}
      />

      <InlineStudyEngine
        textName="Romeo and Juliet"
        questions={QUIZ_QUESTIONS}
        essayPrompts={ESSAY_PROMPTS}
        revisionTopics={REVISION_TOPICS}
      />
      <TextGuide data={data} />
    </>
  )
}
