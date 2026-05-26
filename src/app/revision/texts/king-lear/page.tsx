// DRAFT - AWAITING ENGLISH-TEACHER REVIEW
import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

import { getServerBoard } from '@/lib/board/get-server-board'
import { TextGuide, type TextGuideData } from '../_components/text-guide'
import TextStudyHub from '@/components/study/TextStudyHub'
import InlineStudyEngine, { type QuizQuestion } from '@/components/study/InlineStudyEngine'

import { CourseJsonLd, BreadcrumbJsonLd } from '@/components/seo/json-ld'
export const metadata: Metadata = {
  openGraph: {
    title: 'King Lear - Study Guide | The English Hub',
    description:
      'In-depth study guide for King Lear by William Shakespeare: plot, characters, themes, context and key quotations.',
  },
  title: 'King Lear - Study Guide',
  description:
    'In-depth study guide for King Lear by William Shakespeare: plot, characters, themes, context and key quotations.',
  alternates: {
    canonical: 'https://theenglishhub.app/revision/texts/king-lear',
  },
}

const data: TextGuideData = {
  title: 'King Lear',
  author: 'William Shakespeare',
  year: 'c. 1605\u201306',
  category: 'Play',
  badge: 'Edexcel A-Level / AQA A-Level / OCR A-Level',
  intro:
    'Written in the shadow of the Jacobean succession, King Lear is Shakespeare\u2019s most unsparing tragedy. It follows an ageing monarch who divides his kingdom between his daughters on the basis of a love test, only to be cast out when flattery proves hollow and affection real. Across five acts the play ranges from court ritual to a storm-lashed heath, from aristocratic cruelty to the broken truths spoken by a fool, a beggar and a blinded man. Lear\u2019s disintegration is paralleled by the Gloucester subplot, in which a father is similarly deceived by a false child. Shakespeare interweaves both strands to ask what holds society, family and selfhood together once authority collapses. The result is a study of power, ingratitude, madness and, finally, the fragile possibility of redemption extinguished at the last moment.',
  quickInfo: {
    genre: 'Tragedy',
    setting: 'Pre-Christian Britain',
    length: '5-act play (~3,300 lines, one of Shakespeare\u2019s longest)',
    published: 'First quarto 1608; first folio 1623 (textual variants debated)',
  },
  plotSummary: [
    'The play opens in the court of the ageing King Lear, who intends to divide his realm between his three daughters and retire. He stages a love test: whichever daughter professes to love him most will receive the largest share. Goneril and Regan, his elder daughters, deliver extravagant speeches of flattery and are rewarded. Cordelia, his youngest and favourite, refuses to perform. Her answer \u2014 "Nothing, my lord" \u2014 enrages Lear, who disinherits her on the spot. The Earl of Kent defends her and is banished. Cordelia leaves with the King of France, who marries her without a dowry. The kingdom is split between Goneril (married to the Duke of Albany) and Regan (married to the Duke of Cornwall). In a parallel subplot, the Earl of Gloucester is deceived by his illegitimate son Edmund into believing that his legitimate son Edgar is plotting against him. Edgar is forced to flee and disguises himself as "Poor Tom", a mad beggar.',
    'Lear attempts to keep his royal retinue of one hundred knights, moving first to Goneril\u2019s household. She rapidly demands he reduce the number, provoking Lear\u2019s first great explosion of rage. The loyal Kent, disguised as the servant Caius, attaches himself to the King, and the Fool accompanies Lear with riddling, melancholy truth-telling. Lear flees to Regan, only to find she is even harsher, and the two sisters together strip him of every attendant. Humiliated, exposed and beginning to unravel, Lear rushes out onto the heath as a great storm breaks. He rages against the elements \u2014 "Blow, winds, and crack your cheeks!" \u2014 and against filial ingratitude. On the heath he encounters Edgar as Poor Tom, whose wild speeches seem to mirror and accelerate his own descent into madness.',
    'The storm scenes form the moral heart of the play. Gloucester, still loyal to the King, helps smuggle him toward Dover, where Cordelia has landed with a French army to rescue her father. For this act of loyalty Gloucester is captured by Cornwall and Regan, who put out his eyes on stage \u2014 one of the most shocking moments in the Shakespearean canon. In the struggle a servant mortally wounds Cornwall. The blinded Gloucester, cast out onto the heath, is led by Edgar (still disguised) and, despairing, asks to be guided to the cliffs of Dover so that he may kill himself. Edgar saves him through a staged fall that teaches Gloucester a painful patience. Lear, meanwhile, wanders the fields half-mad, crowned with wild flowers, uttering fragmentary truths about justice, authority and human nature.',
    'Cordelia\u2019s forces meet Lear, and father and daughter are briefly reconciled in one of the most tender scenes Shakespeare ever wrote. The French army is nonetheless defeated by the British forces under Edmund, and Lear and Cordelia are captured. Edmund secretly orders their execution. In the final act the subplots converge: Edgar, still disguised, challenges Edmund in single combat and mortally wounds him; Goneril, having poisoned Regan out of jealous rivalry over Edmund, kills herself; the dying Edmund repents and tries to rescind the execution order, but too late. Lear enters carrying the hanged body of Cordelia, howling five times "Never, never, never, never, never" before dying of grief over her. Kent, the Fool having long since vanished from the play, indicates he will follow his master. Albany and Edgar are left to restore a shattered kingdom.',
  ],
  characters: [
    {
      name: 'King Lear',
      role: 'Ageing monarch of Britain; the protagonist',
      body: 'Lear begins the play as an imperious, self-regarding king who confuses flattery with love and rank with identity. His decision to divide the kingdom and demand public declarations of affection exposes a dangerous emotional need beneath the royal surface. Stripped of power, retinue and shelter, he is forced on the heath to confront what he calls "unaccommodated man". His madness is both punishment and revelation: through it he learns pity for the poor, insight into social injustice and, briefly, the capacity to love Cordelia without condition. Shakespeare refuses him a redemptive death; Lear dies believing, perhaps deludedly, that Cordelia still breathes.',
    },
    {
      name: 'Cordelia',
      role: 'Lear\u2019s youngest daughter; Queen of France',
      body: 'Cordelia is truthful, principled and unwilling to flatter. Her refusal to perform love in the opening scene is an act of moral integrity rather than coldness: she will not debase language to win a kingdom. Banished and married into France without a dowry, she returns at the head of an army not for conquest but to rescue her father. Her reconciliation scene with Lear is marked by extraordinary gentleness. Her execution \u2014 carried out off stage on Edmund\u2019s orders \u2014 is the darkest stroke of the play and refuses the audience any comforting providential order.',
    },
    {
      name: 'Goneril',
      role: 'Lear\u2019s eldest daughter; Duchess of Albany',
      body: 'Goneril is ruthless, politically shrewd and contemptuous of her father\u2019s remaining authority. Her flattery in the opening scene is strategic, and once she holds half the kingdom she moves swiftly to strip Lear of his retinue and dignity. Her marriage to the gentler Albany becomes increasingly strained as she pursues Edmund, and she ends the play poisoning her sister Regan out of sexual rivalry before killing herself. She is Shakespeare\u2019s unflinching portrait of appetite \u2014 for power, sex and control \u2014 unchecked by conscience.',
    },
    {
      name: 'Regan',
      role: 'Lear\u2019s middle daughter; Duchess of Cornwall',
      body: 'Regan matches Goneril in cruelty and often exceeds her in performative sadism. She is complicit in the blinding of Gloucester, urging her husband on and physically striking the bound old man. After Cornwall\u2019s death she too pursues Edmund, setting her in fatal competition with her sister. Shakespeare presents the sisters as a pair whose alliance dissolves the moment self-interest diverges, illustrating how loveless power structures destroy themselves.',
    },
    {
      name: 'Edmund',
      role: 'Illegitimate son of Gloucester; the principal antagonist',
      body: 'Edmund is charming, intellectually gifted and coldly Machiavellian. His opening soliloquy \u2014 "Thou, Nature, art my goddess" \u2014 rejects the social and religious codes that brand him a bastard, and he uses deception to oust his brother Edgar and then his father. His seduction of both Goneril and Regan accelerates the sisters\u2019 destruction. Mortally wounded by Edgar in the final act, he experiences a flicker of remorse and attempts too late to save Cordelia, complicating what might otherwise have been a pure study in villainy.',
    },
    {
      name: 'Edgar',
      role: 'Legitimate son of Gloucester; disguised as "Poor Tom"',
      body: 'Edgar is forced by Edmund\u2019s deceit to flee his home and survives by adopting the persona of Poor Tom, a naked, lice-ridden beggar speaking in tatters of religious and folk language. Through this disguise he becomes Lear\u2019s companion on the heath and guides his own blinded father without revealing himself. His range \u2014 from credulous son to feigned madman to avenging knight \u2014 makes him one of Shakespeare\u2019s most theatrically demanding roles. He ends the play speaking the final lines in the Folio text, charged with sustaining a broken kingdom.',
    },
    {
      name: 'The Earl of Gloucester',
      role: 'Lear\u2019s old ally; father of Edgar and Edmund',
      body: 'Gloucester is the play\u2019s second old man, and his fate shadows Lear\u2019s. Like Lear, he is deceived about which child truly loves him, and like Lear he is punished with physical suffering \u2014 in his case the onstage loss of his eyes at Cornwall\u2019s hands. His blinding forces a literalisation of the play\u2019s central metaphor: only when he cannot see does he begin to understand. Guided by the disguised Edgar, he moves from suicidal despair toward a painful, Christian-inflected patience before dying of a heart that "burst smilingly" on learning his son\u2019s identity.',
    },
    {
      name: 'The Fool',
      role: 'Lear\u2019s court jester and truth-teller',
      body: 'The Fool accompanies Lear through the first half of the play, using riddles, songs and bitter proverbs to tell the King the truths no courtier will. Licensed by his role, he mocks Lear\u2019s folly and mourns Cordelia\u2019s absence. As Lear\u2019s madness deepens, the Fool\u2019s function seems to be absorbed into the King himself, and the character disappears from the play after Act 3 with the enigmatic line "And I\u2019ll go to bed at noon." Critics have long debated whether the Fool and Cordelia were doubled on the Jacobean stage \u2014 a theatrical reading that reinforces their linked roles as loving truth-tellers to the King.',
    },
  ],
  themes: [
    {
      title: 'Power and authority',
      body: 'The play opens with an act that ought to be unthinkable: a king formally abdicating his authority while attempting to retain its trappings. Lear\u2019s division of the kingdom destabilises every hierarchy \u2014 royal, familial, cosmological \u2014 that Jacobean society depended upon. Once sovereign power is handed away, it cannot be reclaimed by gesture. Shakespeare dramatises the physical consequences of political authority stripped from its bearer: Lear pleads, rages and is refused even fifty knights, then twenty-five, then one. The play interrogates whether legitimate authority rests on divine right, on force, on reciprocal duty or on performance. The violent struggle between Goneril, Regan, Cornwall, Albany and Edmund shows power as a vacuum that is filled by whoever is most ruthless.',
    },
    {
      title: 'Family and ingratitude',
      body: 'Both the main plot and the Gloucester subplot turn on a parent deceived in his children. Lear\u2019s cry that it is "sharper than a serpent\u2019s tooth" to have a thankless child voices a fear that runs through Jacobean patriarchal ideology, where filial obedience was the foundation of social order. Shakespeare, however, refuses a simple moralism: Cordelia\u2019s apparent ingratitude is in fact the deepest love, and the ostentatious gratitude of Goneril and Regan is performance. The play asks whether love can be spoken at all, and whether the demand to articulate it corrupts the feeling it claims to measure. Edmund\u2019s revolt against his father recasts ingratitude as a political act, the outcast son claiming by cunning what birth denied him.',
    },
    {
      title: 'Madness and wisdom',
      body: 'Lear\u2019s madness, triggered by the storm and by betrayal, becomes the vehicle for his most piercing insights. On the heath he sees with a clarity he never possessed as king: that "unaccommodated man" is a "poor, bare, forked animal", that justice is a theatre of costume, that the rich are indistinguishable from the poor once stripped. The Fool speaks wisdom in the form of nonsense, Edgar feigns madness to survive, and Poor Tom\u2019s fragmented speech is mistaken by Lear for philosophy. Shakespeare complicates the conventional opposition between sanity and insanity, suggesting that institutional reason is itself a kind of blindness and that truth often arrives through disordered speech.',
    },
    {
      title: 'Blindness (literal and figurative)',
      body: 'The play relentlessly links seeing and understanding. Lear cannot see that Cordelia loves him; Gloucester cannot see that Edmund lies. Only when Gloucester is physically blinded \u2014 "Out, vile jelly!" \u2014 does he begin to perceive the truth about his sons, just as Lear\u2019s mental darkness brings intellectual light. The motif is Christianised in parts of the Gloucester plot, where blindness becomes a path to patience, but Shakespeare resists a simple religious reading. The image of an old man led across the heath by the son he wronged, guided toward a cliff that does not exist, is among the most devastating in the canon, and suggests that insight in this play is always purchased at a ruinous price.',
    },
    {
      title: 'Nature and order',
      body: 'The word "nature" recurs in almost every scene, and each character defines it differently. For Lear, nature means the patriarchal and cosmic order in which children owe fathers unconditional duty. For Edmund, nature is a self-interested force that disregards legitimacy: "Thou, Nature, art my goddess". The storm is both a meteorological event and a symbolic rupture of the natural hierarchy \u2014 the heavens themselves protesting the inversions of the opening scene. Shakespeare draws on contemporary debates about whether the universe is benign, indifferent or actively malign; Gloucester\u2019s appalled "As flies to wanton boys are we to th\u2019 gods; / They kill us for their sport" articulates the bleakest answer the play contains.',
    },
    {
      title: 'Suffering and redemption',
      body: 'King Lear is famously the Shakespeare tragedy that refuses consolation. Lear suffers, learns and is reconciled with Cordelia in a scene of extraordinary tenderness \u2014 and then Cordelia is hanged. Samuel Johnson could not bear the ending and preferred Nahum Tate\u2019s rewritten version in which Cordelia survives. Shakespeare\u2019s original denies the audience redemptive closure: suffering produces understanding, but understanding does not save anyone. The play\u2019s final speeches suggest only the exhausted duty of the living to "speak what we feel, not what we ought to say" and to go on. Critics disagree whether the ending is nihilistic, stoic or grimly Christian, but the refusal of easy comfort is central to the play\u2019s power.',
    },
  ],
  historicalContext: [
    'Shakespeare drew his story from two main sources. The first was Raphael Holinshed\u2019s Chronicles (1577/1587), which relates the legendary history of King Leir of Britain, and the second was an older anonymous play called The True Chronicle History of King Leir, printed in 1605. In the older versions of the story Lear is restored to his throne and Cordelia survives; Shakespeare\u2019s decision to end his tragedy with the deaths of both is a radical departure that audiences and later editors found deeply troubling. The Gloucester subplot was adapted from Sir Philip Sidney\u2019s Arcadia.',
    'The play was written in the early years of James I\u2019s reign, a period of acute political anxiety about succession and the unity of the realm. James had inherited the English throne in 1603 and was attempting, against strong parliamentary resistance, to unite England and Scotland into a single kingdom of "Great Britain". A play that opens with a king disastrously dividing Britain into three would have carried obvious contemporary force. The Gunpowder Plot of November 1605, discovered shortly before the play\u2019s likely first performances, intensified fears about political legitimacy, treachery and the fragility of the body politic.',
    'The legal doctrine of primogeniture \u2014 the inheritance of land and title by the eldest son \u2014 underpins the Gloucester subplot. Edmund\u2019s illegitimacy excludes him from inheritance, and his soliloquies give voice to the resentment such exclusion could breed. Lear\u2019s decision to divide his kingdom among daughters (with Cordelia intended as the chief heir) would have struck a Jacobean audience as a fundamental violation of normal inheritance patterns. Shakespeare exposes both the cruelty of the system and the chaos that follows its disruption.',
    'Shakespeare set the action in a legendary, pre-Christian Britain, a choice that allows characters to swear by pagan gods (Apollo, Jupiter, Hecate) without offending Jacobean religious sensibilities. This setting lets the play raise questions about divine justice and cosmic order without tying itself to Christian doctrine. Some critics read the ending as a specifically post-Reformation articulation of a universe in which providence is hidden or absent; others see a quasi-Stoic philosophy of endurance. Either way, the pre-Christian framing lets Shakespeare stage questions about suffering, justice and order at a level more searching than any of his other tragedies.',
  ],
  quotations: [
    {
      quote: '"Nothing will come of nothing: speak again."',
      who: 'King Lear \u2014 Act 1, Scene 1',
      analysis:
        'Lear\u2019s warning to Cordelia fuses logic and threat; the word "nothing" becomes one of the most insistent motifs of the play, echoing through Lear\u2019s madness and the play\u2019s final losses.',
    },
    {
      quote: '"Nothing, my lord."',
      who: 'Cordelia \u2014 Act 1, Scene 1',
      analysis:
        'Cordelia\u2019s refusal to quantify love with rhetoric is the ethical pivot of the play. Her "nothing" exposes the hollowness of her sisters\u2019 speeches and triggers Lear\u2019s catastrophic misjudgement.',
    },
    {
      quote: '"How sharper than a serpent\'s tooth it is / To have a thankless child!"',
      who: 'King Lear \u2014 Act 1, Scene 4',
      analysis:
        'Lear\u2019s curse on Goneril condenses Jacobean anxieties about filial ingratitude into a single image. The biblical resonance of the serpent hints that he reads disobedience as cosmic sin rather than family conflict.',
    },
    {
      quote: '"Thou shouldst not have been old before thou hadst been wise."',
      who: 'The Fool \u2014 Act 1, Scene 5',
      analysis:
        'The Fool diagnoses Lear\u2019s tragedy in a single line: wisdom has arrived after power has been given away. The proverbial form gives the judgement the weight of folk truth.',
    },
    {
      quote: '"Blow, winds, and crack your cheeks! rage! blow!"',
      who: 'King Lear \u2014 Act 3, Scene 2',
      analysis:
        'Lear addresses the storm as a sentient participant in his ordeal, personifying the heavens as allies in his rage. The imperative verbs blur internal fury with external weather, dramatising a collapse of the boundary between self and cosmos.',
    },
    {
      quote: '"I am a man / More sinned against than sinning."',
      who: 'King Lear \u2014 Act 3, Scene 2',
      analysis:
        'Lear\u2019s appeal for moral recognition is ambiguous: the audience has seen him behave tyrannically in the opening scene. The line captures his partial self-awareness and the play\u2019s refusal to let him fully own his share of blame.',
    },
    {
      quote: '"Is man no more than this? Consider him well."',
      who: 'King Lear \u2014 Act 3, Scene 4',
      analysis:
        'Confronted with Poor Tom\u2019s nakedness, Lear is forced to see "unaccommodated man" stripped of borrowed trappings. The question is the play\u2019s central one about human nature and identity.',
    },
    {
      quote: '"Unaccommodated man is no more but such a poor, bare, forked animal as thou art."',
      who: 'King Lear \u2014 Act 3, Scene 4',
      analysis:
        'Lear\u2019s vision of stripped humanity reduces the king and the beggar to the same creature. This levelling moment is the intellectual climax of his madness and of the play\u2019s political radicalism.',
    },
    {
      quote: '"Out, vile jelly! Where is thy lustre now?"',
      who: 'Cornwall \u2014 Act 3, Scene 7',
      analysis:
        'Cornwall\u2019s grotesque address to Gloucester\u2019s torn-out eye enacts the play\u2019s motif of blindness in the most literal and violent form imaginable. The contrast between "jelly" and "lustre" captures Shakespeare\u2019s willingness to render horror in physical detail.',
    },
    {
      quote: '"As flies to wanton boys are we to th\' gods; / They kill us for their sport."',
      who: 'Gloucester \u2014 Act 4, Scene 1',
      analysis:
        'Gloucester\u2019s despair articulates the bleakest cosmology of the play: not a benign providence but an arbitrary, cruel divinity. The domestic image of boys and flies makes the injustice unbearably familiar.',
    },
    {
      quote: '"The worst is not / So long as we can say \'This is the worst.\'"',
      who: 'Edgar \u2014 Act 4, Scene 1',
      analysis:
        'Edgar\u2019s paradox recognises that articulate suffering still implies a speaker, and therefore more suffering to come. The line foreshadows the fresh horrors of Act 5 in which even worse is in fact delivered.',
    },
    {
      quote: '"Pray you now, forget and forgive: I am old and foolish."',
      who: 'King Lear \u2014 Act 4, Scene 7',
      analysis:
        'Lear\u2019s reconciliation with Cordelia strips away royal grandeur to a simple, devastating admission. The line\u2019s plainness contrasts with the rhetorical extravagance of the opening scene and marks his transformation.',
    },
    {
      quote:
        '"The weight of this sad time we must obey; / Speak what we feel, not what we ought to say."',
      who: 'Edgar (Folio) / Albany (Quarto) \u2014 Act 5, Scene 3',
      analysis:
        'The closing couplet of the play, attributed differently in the two texts, demands a new, painful honesty in the ruined kingdom. It signals a moral code earned only through catastrophe.',
    },
    {
      quote: '"Pray you, undo this button."',
      who: 'King Lear \u2014 Act 5, Scene 3',
      analysis:
        'Lear\u2019s quietly domestic request as he dies beside Cordelia\u2019s body is one of the most devastating lines in Shakespeare. The smallness of the request against the enormity of the grief exposes the limits of language under extreme feeling.',
    },
    {
      quote: '"Never, never, never, never, never!"',
      who: 'King Lear \u2014 Act 5, Scene 3',
      analysis:
        'Five identical monosyllables in iambic pentameter render grief as a rhythmic blow. The absolute finality of the word stands against any redemptive reading of the ending.',
    },
    {
      quote: '"Thou, Nature, art my goddess; to thy law / My services are bound."',
      who: 'Edmund \u2014 Act 1, Scene 2',
      analysis:
        'Edmund\u2019s opening soliloquy replaces patriarchal and providential order with a self-serving "nature" that honours no hierarchy. The line crystallises his ideological challenge to the world of the play.',
    },
    {
      quote: '"Kill thy physician, and the fee bestow / Upon thy foul disease."',
      who: 'Kent \u2014 Act 1, Scene 1',
      analysis:
        'Kent\u2019s blunt defence of Cordelia casts Lear\u2019s rejection of her as self-harming folly. The medical metaphor elevates Kent\u2019s loyalty to a kind of moral surgery.',
    },
    {
      quote: '"Allow not nature more than nature needs, / Man\'s life is cheap as beast\'s."',
      who: 'King Lear \u2014 Act 2, Scene 4',
      analysis:
        'Lear\u2019s retort to Regan\u2019s demand that he cut his retinue insists that human dignity depends on more than biological survival. The line anticipates his later discovery that stripped humanity is exactly what he feared.',
    },
    {
      quote: '"O, reason not the need!"',
      who: 'King Lear \u2014 Act 2, Scene 4',
      analysis:
        'Lear\u2019s cry against his daughters\u2019 calculation of how many knights he "needs" is a defence of human excess against pure utility. The line is often cited as a foundational moment in Shakespeare\u2019s interrogation of economic reasoning.',
    },
    {
      quote: '"When we are born, we cry that we are come / To this great stage of fools."',
      who: 'King Lear \u2014 Act 4, Scene 6',
      analysis:
        'Lear\u2019s crowned-in-weeds speech uses the theatrical metaphor to place human life within a tragic drama whose participants do not choose their roles. The line captures the play\u2019s bleakest existential vision.',
    },
  ],
}

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'kl-1',
    question: 'How does Lear decide to divide his kingdom in the opening scene?',
    type: 'multiple-choice',
    options: [
      'By drawing lots',
      'By staging a love test between his three daughters',
      'By consulting his nobles',
      'By leaving it to his eldest son',
    ],
    correctIndex: 1,
    explanation:
      'Lear proposes to give the largest share to whichever daughter professes to love him most. The love test exposes his need for public flattery and triggers the catastrophe.',
    topic: 'Plot',
    difficulty: 'foundation',
  },
  {
    id: 'kl-2',
    question: 'What is Cordelia\u2019s answer when asked how much she loves her father?',
    type: 'multiple-choice',
    options: [
      '"All the world"',
      '"Nothing, my lord"',
      '"More than life itself"',
      '"As a daughter should"',
    ],
    correctIndex: 1,
    explanation:
      'Cordelia refuses to match her sisters\u2019 extravagant flattery and answers simply "Nothing, my lord", prompting Lear\u2019s famous retort "Nothing will come of nothing".',
    topic: 'Plot',
    difficulty: 'foundation',
  },
  {
    id: 'kl-3',
    question: 'Who is Edmund\u2019s father, and what is Edmund\u2019s legal status?',
    type: 'multiple-choice',
    options: [
      'Gloucester; illegitimate son',
      'Kent; legitimate son',
      'Cornwall; adopted son',
      'Albany; stepson',
    ],
    correctIndex: 0,
    explanation:
      'Edmund is the illegitimate son of the Earl of Gloucester. His exclusion from inheritance under primogeniture fuels the revolt set out in his "Thou, Nature, art my goddess" soliloquy.',
    topic: 'Characters',
    difficulty: 'foundation',
  },
  {
    id: 'kl-4',
    question: 'What disguise does Edgar adopt when forced to flee?',
    type: 'multiple-choice',
    options: [
      'A French soldier',
      'A wandering friar',
      '"Poor Tom", a mad beggar',
      'A court musician',
    ],
    correctIndex: 2,
    explanation:
      'Edgar adopts the persona of Poor Tom, a naked, seemingly mad beggar, which allows him to survive, accompany Lear on the heath and later guide his blinded father.',
    topic: 'Characters',
    difficulty: 'foundation',
  },
  {
    id: 'kl-5',
    question: 'Who physically blinds Gloucester on stage?',
    type: 'multiple-choice',
    options: ['Edmund', 'Goneril', 'Cornwall', 'Regan'],
    correctIndex: 2,
    explanation:
      'Cornwall tears out Gloucester\u2019s eyes in Act 3 Scene 7 with "Out, vile jelly!". Regan urges him on and a servant fatally wounds Cornwall during the scene.',
    topic: 'Plot',
    difficulty: 'foundation',
  },
  {
    id: 'kl-6',
    question: 'Which of these lines is spoken during the storm on the heath?',
    type: 'multiple-choice',
    options: [
      '"Pray you, undo this button"',
      '"Blow, winds, and crack your cheeks!"',
      '"Never, never, never, never, never"',
      '"The weight of this sad time we must obey"',
    ],
    correctIndex: 1,
    explanation:
      '"Blow, winds, and crack your cheeks!" is Lear\u2019s rage at the storm in Act 3 Scene 2, personifying the weather as a participant in his suffering.',
    topic: "Writer's Methods",
    difficulty: 'foundation',
  },
  {
    id: 'kl-7',
    question: 'How does Cordelia die?',
    type: 'multiple-choice',
    options: [
      'In battle against her sisters',
      'Hanged on Edmund\u2019s orders',
      'Poisoned by Goneril',
      'By her own hand at the tomb',
    ],
    correctIndex: 1,
    explanation:
      'Edmund secretly orders the execution of Lear and Cordelia after the British victory. Cordelia is hanged off stage; Edmund\u2019s late repentance arrives too late to save her.',
    topic: 'Plot',
    difficulty: 'foundation',
  },
  {
    id: 'kl-8',
    question: 'What happens to Goneril and Regan in Act 5?',
    type: 'multiple-choice',
    options: [
      'They both survive and divide the kingdom',
      'Goneril poisons Regan, then kills herself',
      'They are executed by Albany',
      'They flee to France with Edmund',
    ],
    correctIndex: 1,
    explanation:
      'Jealous rivalry over Edmund destroys the sisters\u2019 alliance. Goneril poisons Regan and, when her own treachery is exposed, kills herself.',
    topic: 'Plot',
    difficulty: 'higher',
  },
  {
    id: 'kl-9',
    question: 'What does Gloucester mean by "As flies to wanton boys are we to th\u2019 gods"?',
    type: 'multiple-choice',
    options: [
      'The gods protect the innocent',
      'The gods are indifferent workers of justice',
      'The gods kill human beings casually and for entertainment',
      'The gods are invented by humans',
    ],
    correctIndex: 2,
    explanation:
      'Gloucester articulates the play\u2019s bleakest cosmology: a cruel and arbitrary divinity that treats human suffering as sport. The domestic image makes the injustice unbearably familiar.',
    topic: 'Themes',
    difficulty: 'higher',
  },
  {
    id: 'kl-10',
    question: 'What is the significance of Lear\u2019s line "Is man no more than this?"',
    type: 'multiple-choice',
    options: [
      'He is admiring Poor Tom\u2019s clothes',
      'He is asking whether humanity stripped of status and shelter is anything at all',
      'He is rejecting human company',
      'He is complaining about the cold',
    ],
    correctIndex: 1,
    explanation:
      'Confronted with Poor Tom\u2019s nakedness, Lear confronts "unaccommodated man" \u2014 humanity stripped of the borrowed trappings of rank and wealth. The question is the intellectual climax of his heath madness.',
    topic: 'Themes',
    difficulty: 'higher',
  },
  {
    id: 'kl-11',
    question: 'Why does the Fool disappear from the play after Act 3?',
    type: 'multiple-choice',
    options: [
      'He is killed off stage',
      'The text leaves it unexplained; some critics link his disappearance to Cordelia\u2019s return',
      'He is banished by Goneril',
      'He reveals himself to be Edgar',
    ],
    correctIndex: 1,
    explanation:
      'Shakespeare never explicitly accounts for the Fool\u2019s exit. His last line is "And I\u2019ll go to bed at noon." Critics have long noted that Cordelia and the Fool may have been doubled on the Jacobean stage, which would reinforce their linked roles as truth-tellers.',
    topic: 'Characters',
    difficulty: 'higher',
  },
  {
    id: 'kl-12',
    question: 'How does Shakespeare use the motif of blindness in the play?',
    type: 'multiple-choice',
    options: [
      'Only as a literal plot event involving Gloucester',
      'As a sustained metaphor linking physical sight and moral understanding',
      'As a comic device',
      'To distinguish royals from commoners',
    ],
    correctIndex: 1,
    explanation:
      'Lear is metaphorically blind to Cordelia\u2019s love and Gloucester to Edmund\u2019s lies. Only when Gloucester is literally blinded does he perceive the truth; Lear\u2019s mental darkness similarly brings intellectual light. Sight and insight are relentlessly linked.',
    topic: "Writer's Methods",
    difficulty: 'higher',
  },
  {
    id: 'kl-13',
    question: 'What does Edmund mean in his "Thou, Nature, art my goddess" soliloquy?',
    type: 'multiple-choice',
    options: [
      'He worships a pagan deity',
      'He rejects the social, legal and religious codes that exclude him as illegitimate, in favour of a self-serving "nature"',
      'He is swearing a formal oath of loyalty',
      'He is mourning his mother',
    ],
    correctIndex: 1,
    explanation:
      'Edmund rejects primogeniture and the providential order and declares allegiance to a competitive nature that honours no hierarchy. The speech crystallises his ideological challenge to the world of the play.',
    topic: 'Themes',
    difficulty: 'higher',
  },
  {
    id: 'kl-14',
    question: 'How does Shakespeare use the parallel Gloucester subplot?',
    type: 'multiple-choice',
    options: [
      'It provides comic relief from the main plot',
      'It is unrelated to the main plot',
      'It universalises the main plot\u2019s concerns by doubling the story of a father deceived about which child loves him',
      'It replaces the main plot in Act 4',
    ],
    correctIndex: 2,
    explanation:
      'Gloucester\u2019s deception by Edmund mirrors Lear\u2019s deception by Goneril and Regan, and Gloucester\u2019s physical blinding parallels Lear\u2019s mental disintegration. The doubling raises the play\u2019s questions from a single family tragedy to a universal diagnosis.',
    topic: "Writer's Methods",
    difficulty: 'higher',
  },
  {
    id: 'kl-15',
    question:
      'What is the dramatic significance of Lear\u2019s final "Never, never, never, never, never"?',
    type: 'multiple-choice',
    options: [
      'Five monosyllables in iambic pentameter render grief as rhythmic absolute, refusing any redemptive closure',
      'It is a prayer for Cordelia\u2019s soul',
      'It is a curse on his enemies',
      'It predicts the return of Kent',
    ],
    correctIndex: 0,
    explanation:
      'The five identical stressed words form a perfect line of iambic pentameter. Their metrical blankness and semantic finality stand against any consoling reading of the ending and leave the audience with the full weight of loss.',
    topic: "Writer's Methods",
    difficulty: 'grade-9',
  },
  {
    id: 'kl-16',
    question:
      'How does the play\u2019s pre-Christian setting affect its treatment of justice and the gods?',
    type: 'multiple-choice',
    options: [
      'It has no effect',
      'It allows Shakespeare to stage questions about divine justice without tying the play to Christian doctrine, permitting bleak answers that a Christian setting would complicate',
      'It means the play has no religious dimension',
      'It means the gods always save the innocent',
    ],
    correctIndex: 1,
    explanation:
      'The pagan setting permits oaths by Apollo, Jupiter and Hecate and lets Shakespeare explore whether the universe is benign, indifferent or cruel. Gloucester\u2019s "wanton boys" speech articulates a cosmology that a fully Christian setting could not have sustained.',
    topic: 'Context',
    difficulty: 'grade-9',
  },
  {
    id: 'kl-17',
    question: 'How does Shakespeare use the motif of "nothing" throughout the play?',
    type: 'multiple-choice',
    options: [
      'It is only used once, in the opening scene',
      'It recurs from Cordelia\u2019s "Nothing, my lord" through Lear\u2019s madness to the final losses, creating a verbal structure of negation and dispossession',
      'It refers only to material property',
      'It is a comic refrain',
    ],
    correctIndex: 1,
    explanation:
      'Cordelia\u2019s "Nothing" triggers the plot; Lear\u2019s "Nothing will come of nothing" becomes prophetic as he loses everything. The word returns in the storm scenes and haunts the final act, structuring the play around negation.',
    topic: "Writer's Methods",
    difficulty: 'grade-9',
  },
  {
    id: 'kl-18',
    question:
      'What is the significance of the textual difference between the 1608 Quarto and the 1623 Folio?',
    type: 'multiple-choice',
    options: [
      'The texts are identical',
      'The two texts differ materially, including in the attribution of the final couplet (Albany in Quarto, Edgar in Folio), and many editors now treat them as separate versions of the play',
      'The Quarto is a forgery',
      'The Folio omits the storm scenes',
    ],
    correctIndex: 1,
    explanation:
      'The 1608 Quarto and 1623 Folio differ in scene structure, attribution and wording. The final couplet is given to Albany in the Quarto and Edgar in the Folio. Modern scholarship (notably Taylor and Warren) treats them as two authorised versions rather than corrupt witnesses of a single lost text.',
    topic: 'Context',
    difficulty: 'grade-9',
  },
  {
    id: 'kl-19',
    question:
      'How might a Jacobean audience have read Lear\u2019s division of the kingdom in the light of James I\u2019s reign?',
    type: 'multiple-choice',
    options: [
      'As unrelated to contemporary politics',
      'As echoing acute anxieties about succession and James\u2019s contested attempt to unite England and Scotland into a single kingdom of Great Britain',
      'As propaganda in favour of division',
      'As purely historical',
    ],
    correctIndex: 1,
    explanation:
      'Writing in 1605\u201306, Shakespeare was working at a moment of intense debate over James\u2019s proposed union of England and Scotland. A play whose disaster begins with a king dividing Britain into three would have carried obvious and loaded contemporary force.',
    topic: 'Context',
    difficulty: 'grade-9',
  },
  {
    id: 'kl-20',
    question:
      'How does the reconciliation scene between Lear and Cordelia function within the play\u2019s bleak design?',
    type: 'multiple-choice',
    options: [
      'It provides the resolution of the tragedy',
      'It offers a brief, painfully earned tenderness that makes Cordelia\u2019s subsequent hanging more devastating rather than less',
      'It undoes the earlier cruelty',
      'It is cut from most editions',
    ],
    correctIndex: 1,
    explanation:
      'Act 4 Scene 7 \u2014 "Pray you now, forget and forgive: I am old and foolish" \u2014 reconciles father and daughter in the gentlest language of the play. Shakespeare then destroys this hard-won love by hanging Cordelia, refusing the audience redemptive closure and intensifying rather than relieving the tragedy.',
    topic: 'Themes',
    difficulty: 'grade-9',
  },
]

const REVISION_TOPICS = [
  {
    topic: 'Power and Authority',
    summary:
      'Lear\u2019s abdication collapses the hierarchies on which Jacobean society depended, leaving a power vacuum filled by whoever is most ruthless.',
    keyPoints: [
      'The opening love test shows authority confused with flattery',
      'Lear cannot reclaim power once the gesture of division has been made',
      'Goneril and Regan strip him of retinue, then dignity',
      'Edmund exploits the vacuum by rejecting legitimacy itself',
      'The play interrogates whether authority rests on divine right, force or reciprocal duty',
    ],
  },
  {
    topic: 'Family and Ingratitude',
    summary:
      'Both main plot and Gloucester subplot turn on a parent deceived about which child truly loves him, exposing the limits of articulating love in words.',
    keyPoints: [
      'Cordelia\u2019s "Nothing, my lord" rejects performative love',
      'Lear\u2019s "serpent\u2019s tooth" speech voices patriarchal fear of filial ingratitude',
      'Edmund\u2019s revolt recasts ingratitude as political claim against primogeniture',
      'Gloucester\u2019s misjudgement of Edgar doubles Lear\u2019s of Cordelia',
      'Shakespeare refuses simple moralism: the "ungrateful" child is often the loving one',
    ],
  },
  {
    topic: 'Madness and Wisdom',
    summary:
      'Lear\u2019s disintegration on the heath becomes the vehicle for his most radical insights into justice, poverty and human nature.',
    keyPoints: [
      'The Fool speaks wisdom in riddles before Lear\u2019s breakdown',
      'Poor Tom\u2019s feigned madness provides the occasion for Lear\u2019s philosophical leap',
      '"Unaccommodated man" strips humanity to the bare, forked animal',
      'Shakespeare unsettles the opposition between institutional reason and disordered speech',
      'Wisdom is shown to arrive too late to save anyone',
    ],
  },
  {
    topic: 'Blindness and Sight',
    summary:
      'The play relentlessly links physical sight to moral understanding, and both Lear\u2019s mental darkness and Gloucester\u2019s literal blinding produce insight only through suffering.',
    keyPoints: [
      'Lear is blind to Cordelia\u2019s love in the opening scene',
      'Gloucester is deceived by Edmund through forged letters',
      'The onstage blinding scene ("Out, vile jelly!") literalises the metaphor',
      'Edgar guides his blinded father in a painfully earned moral education',
      'Insight in the play is always purchased at a ruinous price',
    ],
  },
  {
    topic: 'Nature and Order',
    summary:
      'The word "nature" is contested throughout, with Lear, Edmund and the storm offering radically different visions of cosmic and social order.',
    keyPoints: [
      'For Lear, nature means patriarchal and cosmic hierarchy',
      'For Edmund, nature is self-interested competition disregarding legitimacy',
      'The storm symbolises the rupture of natural order produced by the opening scene',
      'Gloucester\u2019s "wanton boys" speech articulates the bleakest view of the gods',
      'The pre-Christian setting lets Shakespeare pose these questions without Christian resolution',
    ],
  },
]

const ESSAY_PROMPTS = [
  'How does Shakespeare present the collapse of authority in King Lear?',
  'Explore the presentation of ingratitude and filial duty in King Lear.',
  'How does Shakespeare use the motif of blindness across both the main plot and the Gloucester subplot?',
  'Discuss the presentation of madness as a source of insight in King Lear.',
  'How far does the ending of King Lear offer any form of redemption or consolation?',
]

export default async function KingLearPage() {
  const board = await getServerBoard()
  const allowedBoards = ['edexcel', 'aqa', 'ocr']
  if (board && !allowedBoards.includes(board)) {
    redirect('/revision/texts')
  }

  return (
    <>
      <CourseJsonLd
        name="King Lear - Complete A-Level Study Guide"
        description="In-depth study guide for King Lear covering plot, characters, themes, key quotations, historical context and exam essay plans for A-Level English Literature."
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'Revision', url: 'https://theenglishhub.app/revision' },
          { name: 'Set Texts', url: 'https://theenglishhub.app/revision/texts' },
          { name: 'King Lear', url: 'https://theenglishhub.app/revision/texts/king-lear' },
        ]}
      />
      <TextStudyHub
        textName="King Lear"
        textType="play"
        examBoard="Edexcel"
        basePath="/revision/texts/king-lear"
        subPages={[
          {
            id: 'read',
            href: '/revision/texts/king-lear/read',
            icon: 'read' as const,
            title: 'Read Full Text',
            description: 'With annotations',
          },
          {
            id: 'acts',
            href: '/revision/texts/king-lear/acts',
            icon: 'acts' as const,
            title: 'Act-by-Act Analysis',
            description: 'Key moments & quotes',
          },
          {
            id: 'characters',
            href: '/revision/texts/king-lear/characters',
            icon: 'characters' as const,
            title: 'Characters',
            description: 'Full character guide',
          },
          {
            id: 'themes',
            href: '/revision/texts/king-lear/themes',
            icon: 'themes' as const,
            title: 'Themes',
            description: 'Theme analysis',
          },
          {
            id: 'quotes',
            href: '/revision/texts/king-lear/key-quotes',
            icon: 'quotes' as const,
            title: 'Key Quotes',
            description: 'Quotes with analysis',
          },
          {
            id: 'context',
            href: '/revision/texts/king-lear/context',
            icon: 'context' as const,
            title: 'Context',
            description: 'Historical context',
          },
          {
            id: 'essays',
            href: '/revision/texts/king-lear/essay-plans',
            icon: 'essays' as const,
            title: 'Essay Plans',
            description: 'A-Level essay plans',
          },
        ]}
        quizQuotes={data.quotations.slice(0, 10).map((q) => ({
          quote: q.quote.replace(/["\u201C\u201D]/g, ''),
          character: q.who.split('\u2014')[0].trim(),
          context: q.analysis.slice(0, 100) + '...',
        }))}
        essayQuestions={[
          'How does Shakespeare present the collapse of authority in King Lear?',
          'Explore the presentation of ingratitude and filial duty in King Lear.',
          'How does Shakespeare use the motif of blindness across both the main plot and the Gloucester subplot?',
          'Discuss the presentation of madness as a source of insight in King Lear.',
          'How far does the ending of King Lear offer any form of redemption or consolation?',
        ]}
        flashcards={data.quotations.slice(0, 8).map((q) => ({
          front: q.quote,
          back: q.analysis,
        }))}
      />

      <InlineStudyEngine
        textName="King Lear"
        questions={QUIZ_QUESTIONS}
        essayPrompts={ESSAY_PROMPTS}
        revisionTopics={REVISION_TOPICS}
      />
      <div className="mb-6 rounded-lg border border-amber-500/40 bg-amber-500/10 p-4 text-sm text-amber-100">
        <strong className="block text-foreground">Draft study guide</strong>
        <span>
          AI-assisted draft under expert review. Cross-check with your teacher&rsquo;s notes.
        </span>
      </div>
      <TextGuide data={data} />
    </>
  )
}
