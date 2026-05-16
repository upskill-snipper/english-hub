// DRAFT — AWAITING ENGLISH-TEACHER REVIEW
import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

import { getServerBoard } from '@/lib/board/get-server-board'
import { TextGuide, type TextGuideData } from '../_components/text-guide'
import TextStudyHub from '@/components/study/TextStudyHub'
import InlineStudyEngine, { type QuizQuestion } from '@/components/study/InlineStudyEngine'

import { CourseJsonLd, BreadcrumbJsonLd } from '@/components/seo/json-ld'
export const metadata: Metadata = {
  openGraph: {
    title: 'Henry V — Study Guide | The English Hub',
    description:
      'In-depth study guide for Henry V by William Shakespeare: plot, characters, themes, context and key quotations.',
  },
  title: 'Henry V — Study Guide',
  description:
    'In-depth study guide for Henry V by William Shakespeare: plot, characters, themes, context and key quotations.',
  alternates: {
    canonical: 'https://theenglishhub.app/revision/texts/henry-v',
  },
}

const data: TextGuideData = {
  title: 'Henry V',
  author: 'William Shakespeare',
  year: 'c. 1599',
  category: 'Play',
  badge: 'Eduqas',
  intro:
    'Henry V is the final play in Shakespeare\u2019s second Henriad, following Richard II and the two parts of Henry IV. Written and first performed around 1599, it dramatises the young king\u2019s invasion of France and his unlikely victory at the Battle of Agincourt in 1415. The play is famous for its soaring patriotic rhetoric \u2014 the St Crispin\u2019s Day speech, the rallying cry at Harfleur \u2014 but it also interrogates the cost of war, the theatricality of kingship, and the moral ambiguity of a ruler who threatens civilian slaughter one scene and walks disguised among his troops the next. A Chorus opens each act, apologising for the inadequacy of the stage and inviting the audience to piece out the play\u2019s imperfections with their thoughts. The result is a drama that is at once a celebration of English national identity and a sustained examination of the rhetoric that creates it.',
  quickInfo: {
    genre: 'History play',
    setting: 'England and France, 1414\u201320',
    length: 'Five-act play (~3,380 lines)',
    published: 'First quarto 1600; First Folio 1623',
  },
  plotSummary: [
    'The play opens with the Chorus inviting the audience to imagine the vast sweep of events the stage cannot show. In the first act, the Archbishop of Canterbury and the Bishop of Ely discuss a bill that threatens church lands, and Canterbury offers Henry a detailed legal justification (the Salic law speech) for pressing his claim to the French throne. The young king, newly transformed from the tavern-haunting Prince Hal of Henry IV, questions the clergy closely before committing to war. A contemptuous gift of tennis balls from the Dauphin of France seals Henry\u2019s resolve, and he promises that the Dauphin\u2019s mockery will be answered with an invasion.',
    'Act 2 moves between the court and the Eastcheap tavern world of Henry\u2019s old companions. Bardolph, Pistol and Nym \u2014 veterans of the Henry IV plays \u2014 prepare to join the French campaign, while Mistress Quickly reports the offstage death of Sir John Falstaff, Henry\u2019s former surrogate father, now rejected and dying of a broken heart. At Southampton, Henry exposes and condemns three English traitors \u2014 Cambridge, Scroop and Grey \u2014 who have been bribed by France to kill him. The army sails, and Act 3 opens at the siege of Harfleur. Henry rouses his soldiers with the famous "Once more unto the breach, dear friends" before the walls, and when the town hesitates he delivers a chilling speech threatening the massacre of infants and the rape of women if Harfleur does not surrender. The governor yields.',
    'As dysentery thins the English ranks, the exhausted army marches towards Calais and is intercepted by a vastly larger French force at Agincourt. The Chorus before Act 4 describes the night before the battle, with the "creeping murmur and the poring dark" of the two camps. Henry borrows a cloak and walks in disguise among his soldiers, arguing with the common man Williams about a king\u2019s responsibility for the souls of his men. Alone, he delivers the "Upon the king!" soliloquy, the most introspective speech of the play, on the burden of ceremony and command. At dawn he answers his cousin Westmoreland\u2019s wish for more troops with the St Crispin\u2019s Day speech \u2014 "We few, we happy few, we band of brothers" \u2014 promising that those who fight with him will be remembered forever.',
    'The English archers destroy the French cavalry and the battle becomes a slaughter. When the French regroup and attack the English baggage train, killing the boys left to guard it, Henry orders the execution of the French prisoners \u2014 a decision the play presents without comment. The losses, as announced, are grotesquely one-sided: thousands of French nobility dead, only a handful of English. Henry credits God for the victory and forbids boasting. In Act 5 the Chorus carries the audience back to England and then across to France for the peace treaty. Henry woos the French Princess Katherine in a mixture of broken French and plain soldier\u2019s English, agreeing the marriage that will make him heir to the French throne. The Chorus closes the play with a sonnet reminding the audience that Henry\u2019s triumph was short-lived: his son Henry VI would lose all his father had won.',
  ],
  characters: [
    {
      name: 'King Henry V',
      role: 'King of England; the protagonist',
      body: 'Henry is the reformed Prince Hal of the Henry IV plays, now a king who combines political cunning, religious conviction and extraordinary rhetorical power. Shakespeare presents him as both the ideal warrior-king celebrated by the Chorus and a more ambiguous figure capable of threatening civilian atrocity at Harfleur, ordering the execution of prisoners, and placing responsibility for the war on the French and the clergy. His night-time soliloquy "Upon the king!" reveals the private burden beneath the public performance, while the wooing scene with Katherine shows a softer, self-consciously plain-speaking register.',
    },
    {
      name: 'The Chorus',
      role: 'Narrator; appears before each act and at the close',
      body: 'The Chorus is Shakespeare\u2019s most sustained use of the convention in any play. Stepping onto the bare stage of the Globe, he apologises for the "unworthy scaffold" and asks the audience to imagine armies, fleets and battles their "imaginary forces" must supply. His speeches are celebratory and patriotic, framing Henry as a hero and the campaign as glorious. But the final sonnet undercuts the triumph by reminding the audience that Henry VI would lose France, inviting the audience to hold praise and scepticism in tension.',
    },
    {
      name: 'The Dauphin',
      role: 'Heir to the French throne',
      body: 'The Dauphin is arrogant, reckless and contemptuous of the English. His gift of tennis balls provokes the invasion, and his boastful night-before-Agincourt speeches \u2014 admiring his own horse, dismissing the English as sickly \u2014 set up the French defeat as a moral as well as military collapse. Shakespeare uses him as a foil to Henry, whose public confidence is always tied to disciplined calculation rather than vanity.',
    },
    {
      name: 'Princess Katherine',
      role: 'Daughter of the French king; Henry\u2019s eventual wife',
      body: 'Katherine appears in two scenes: a comic English lesson with her lady-in-waiting Alice, and the final wooing scene. Shakespeare gives her limited French dialogue with bawdy linguistic comedy, but also a quiet intelligence that sees through Henry\u2019s charm. Her acceptance of the marriage is political \u2014 her father has already signed the treaty \u2014 and her character raises questions about the human cost of dynastic conquest that the triumphal Chorus cannot address.',
    },
    {
      name: 'Fluellen',
      role: 'A Welsh captain in Henry\u2019s army',
      body: 'Fluellen is pedantic, proud and fiercely loyal, forever comparing Henry\u2019s campaigns to the classical wars of Alexander. His Welsh accent and scholarly enthusiasm provide comic energy, but Shakespeare also uses him to celebrate Henry as a multi-national British king: the English, Welsh, Scottish and Irish captains serve side by side. His insistence that Henry punish Bardolph for theft, despite the old friendship, shows the army\u2019s harsh discipline.',
    },
    {
      name: 'Pistol',
      role: 'A braggart soldier; survivor of the Eastcheap tavern world',
      body: 'Pistol speaks in bombastic parody-verse and carries the Falstaffian comic energy into the French campaign. He cheats, loots and boasts his way through the play, is humiliated by Fluellen into eating a leek, and finally slinks home after news that his wife Mistress Quickly has died. Shakespeare uses him to show the ugly underside of war: the common soldier\u2019s motives are plunder and survival, not the Chorus\u2019s glory.',
    },
    {
      name: 'Exeter',
      role: 'Duke of Exeter; Henry\u2019s uncle and trusted ambassador',
      body: 'Exeter is the king\u2019s steady lieutenant: he delivers the declaration of war to the French court, takes charge of the condemned traitors at Southampton, and reports the deaths of York and Suffolk at Agincourt in one of the play\u2019s most moving speeches. Shakespeare uses him as a figure of military gravitas, unshowy loyalty and emotional weight \u2014 the man who carries the play\u2019s sense of what is actually at stake when its rhetoric turns into battlefield reality.',
    },
  ],
  themes: [
    {
      title: 'Kingship and leadership',
      body: 'Henry V is Shakespeare\u2019s most sustained study of what it means to be a king. Henry is shown as deliberative in council, terrifying in the field, charismatic with his soldiers and guarded in private. The "Upon the king!" soliloquy exposes the gap between the ceremonial body and the suffering man beneath it, while the disguised conversation with Williams dramatises the question of a king\u2019s responsibility for the souls of his men. Shakespeare does not settle the question of whether Henry is an ideal ruler or a ruthless political actor, and the play\u2019s power lies in holding both possibilities open.',
    },
    {
      title: 'War and its cost',
      body: 'The play\u2019s rhetoric of glory is repeatedly shadowed by the actual cost of war. Mistress Quickly\u2019s report of Falstaff\u2019s death, Bardolph\u2019s hanging for theft, the dysentery-stricken army dragging itself across France, Exeter\u2019s account of York and Suffolk dying in each other\u2019s arms, and the brutal order to kill the French prisoners all complicate the Chorus\u2019s celebratory frame. Shakespeare forces the audience to weigh the St Crispin\u2019s Day brotherhood against the Harfleur threats, and leaves the moral calculation unresolved.',
    },
    {
      title: 'Nationalism and English identity',
      body: 'Henry V is the most overtly patriotic of Shakespeare\u2019s histories, and its St Crispin\u2019s Day rhetoric has been quoted in English propaganda from the Armada to the Second World War. Yet the play\u2019s nationalism is carefully constructed rather than simply asserted. The multi-national army \u2014 English, Welsh, Scottish, Irish \u2014 presents a British rather than narrowly English identity, while the French characters are given their own language and dignity. The final Chorus\u2019s reminder that Henry VI lost France deflates the triumph, inviting the audience to view national glory as a performance that cannot be sustained.',
    },
    {
      title: 'Performance and persuasion',
      body: 'The play is obsessed with rhetoric: the Archbishop\u2019s legal speech, Henry\u2019s public orations, the Chorus\u2019s framing, the Dauphin\u2019s boasts, Pistol\u2019s parody-verse. Shakespeare shows kingship itself as a performance requiring the right words at the right moment, and the Chorus\u2019s repeated appeals to the audience\u2019s imagination draw attention to the play\u2019s own theatrical artifice. Henry is at his most persuasive when he seems most plain \u2014 before Agincourt, in the wooing scene \u2014 but the play asks the audience to notice that plainness is itself a calculated style.',
    },
    {
      title: 'Honour',
      body: 'Honour runs through the play in competing forms: the aristocratic honour the French lords defend with their lives, the soldierly honour Henry offers his men ("He which hath no stomach to this fight, / Let him depart"), and the tavern-world scepticism about honour inherited from Falstaff in Henry IV Part 1. Shakespeare sets Fluellen\u2019s scholarly honour, Williams\u2019s blunt soldier\u2019s honour and the Dauphin\u2019s vain aristocratic honour against each other, letting the audience see how the same word covers radically different values.',
    },
    {
      title: 'Divine right and providence',
      body: 'Henry invokes God before, during and after Agincourt, and the play\u2019s official frame reads the victory as providential proof of the justness of his cause. But Shakespeare also shows Henry calculating the ethics of that claim: his prayer before the battle, asking God not to remember his father\u2019s usurpation of Richard II, acknowledges that the Lancastrian throne rests on dubious foundations. The theme asks the audience to decide whether God really is on the English side, or whether Henry\u2019s God-talk is itself a form of political rhetoric.',
    },
  ],
  historicalContext: [
    'The historical Battle of Agincourt took place on 25 October 1415, during the Hundred Years\u2019 War between England and France. Henry V, aged around 28, had landed in Normandy earlier that year and captured Harfleur after a gruelling siege. His army, reduced by dysentery, was intercepted on a muddy field near the village of Agincourt by a French force perhaps three times its size. The English longbow and the narrow, waterlogged terrain produced a one-sided slaughter of the French nobility. The victory made Henry a legendary figure in English memory and eventually led, by the Treaty of Troyes in 1420, to his marriage to Princess Katherine of Valois and his recognition as heir to the French throne. He died of dysentery in 1422, and his infant son Henry VI inherited both crowns but lost France within a generation \u2014 the collapse that Shakespeare\u2019s closing Chorus anticipates.',
    'Shakespeare\u2019s primary source was Raphael Holinshed\u2019s Chronicles of England, Scotland, and Ireland (second edition, 1587), which he had already used for Richard II and the Henry IV plays. Holinshed supplied the Salic law arguments, the Southampton plot, the siege of Harfleur, the Agincourt casualty figures and the Treaty of Troyes. Shakespeare also drew on Edward Hall\u2019s Union of the Two Noble Families (1548) and on a popular earlier play, The Famous Victories of Henry V, which survives only in a corrupt 1598 text but supplied the Eastcheap characters and the tennis-ball episode. Shakespeare compresses the campaign\u2019s timeline, invents the wooing scene and adds the Chorus, turning chronicle material into theatre.',
    'The play was written in 1599, late in the reign of Elizabeth I, at a moment of national anxiety. England faced the threat of a renewed Spanish invasion, and the Earl of Essex was leading an ill-fated expedition against rebels in Ireland \u2014 an expedition the Chorus before Act 5 explicitly compares to Henry\u2019s return from France. An Elizabethan audience watching Henry V in the newly opened Globe Theatre would have seen both a celebration of English martial identity and a commentary on their own uncertain campaigns. The Chorus convention \u2014 a single speaker who addresses the audience directly between acts \u2014 was unusual for the public stage, and Shakespeare uses it to draw attention to the limits of theatrical representation, asking the audience to "piece out our imperfections with your thoughts" and so become collaborators in the nation-building the play performs.',
  ],
  quotations: [
    {
      quote:
        '"O for a muse of fire, that would ascend / The brightest heaven of invention, / A kingdom for a stage, princes to act / And monarchs to behold the swelling scene!"',
      who: 'Chorus \u2014 Prologue',
      analysis:
        'The opening lines ask for epic poetic power while apologising for the bare Globe stage, framing the play\u2019s self-conscious theatricality from the first moment.',
    },
    {
      quote:
        '"Piece out our imperfections with your thoughts; / Into a thousand parts divide one man, / And make imaginary puissance."',
      who: 'Chorus \u2014 Prologue',
      analysis:
        'The Chorus invites the audience to collaborate in creating the play\u2019s world, making imagination itself a patriotic act and drawing attention to the artifice of history.',
    },
    {
      quote: '"Consideration like an angel came / And whipp\u2019d the offending Adam out of him."',
      who: 'Archbishop of Canterbury \u2014 Act 1, Scene 1',
      analysis:
        'Canterbury describes Henry\u2019s transformation from Prince Hal into king in biblical terms, establishing the play\u2019s interest in Henry as a reformed and providentially chosen ruler.',
    },
    {
      quote:
        '"We are no tyrant, but a Christian king, / Unto whose grace our passion is as subject / As is our wretches fett\u2019red in our prisons."',
      who: 'King Henry \u2014 Act 1, Scene 2',
      analysis:
        'Henry\u2019s self-presentation to the French ambassadors insists on his moral restraint even as he declares war, showing the careful rhetoric by which he frames aggression as legitimacy.',
    },
    {
      quote:
        '"Once more unto the breach, dear friends, once more; / Or close the wall up with our English dead."',
      who: 'King Henry \u2014 Act 3, Scene 1',
      analysis:
        'The Harfleur rallying cry fuses exhortation with the stark image of English bodies as building material, showing Henry\u2019s ability to make sacrifice sound heroic.',
    },
    {
      quote:
        '"I see you stand like greyhounds in the slips, / Straining upon the start. The game\u2019s afoot: / Follow your spirit, and upon this charge / Cry \u2018God for Harry, England, and Saint George!\u2019"',
      who: 'King Henry \u2014 Act 3, Scene 1',
      analysis:
        'The hunting imagery turns soldiers into hounds and war into sport, while the rallying cry fuses monarch, nation and saint into a single patriotic utterance.',
    },
    {
      quote:
        '"Take pity of your town and of your people / Whiles yet my soldiers are in my command ... / Your naked infants spitted upon pikes."',
      who: 'King Henry \u2014 Act 3, Scene 3',
      analysis:
        'Henry\u2019s threat to the governor of Harfleur shows the dark counterpart to the heroic rhetoric: the same voice that rallies the "band of brothers" can threaten civilian atrocity.',
    },
    {
      quote:
        '"Now entertain conjecture of a time / When creeping murmur and the poring dark / Fills the wide vessel of the universe."',
      who: 'Chorus \u2014 Act 4',
      analysis:
        'The Chorus before Agincourt shifts the play\u2019s register from triumphalism to quiet, fearful anticipation, asking the audience to imagine the two camps through poetic atmosphere rather than spectacle.',
    },
    {
      quote:
        '"For he to-day that sheds his blood with me / Shall be my brother; be he ne\u2019er so vile, / This day shall gentle his condition."',
      who: 'King Henry \u2014 Act 4, Scene 3',
      analysis:
        'Part of the St Crispin\u2019s Day speech, promising that shared sacrifice dissolves class distinction \u2014 a radical claim delivered as battlefield motivation.',
    },
    {
      quote:
        '"We few, we happy few, we band of brothers; / For he to-day that sheds his blood with me / Shall be my brother."',
      who: 'King Henry \u2014 Act 4, Scene 3',
      analysis:
        'The most famous line in the play turns numerical disadvantage into moral superiority, and has been quoted in English military rhetoric ever since.',
    },
    {
      quote:
        '"And gentlemen in England now a-bed / Shall think themselves accurs\u2019d they were not here, / And hold their manhoods cheap whiles any speaks / That fought with us upon Saint Crispin\u2019s day."',
      who: 'King Henry \u2014 Act 4, Scene 3',
      analysis:
        'Henry promises enduring fame as the reward for risk, using the imagined envy of future generations to bind his soldiers to the coming battle.',
    },
    {
      quote:
        '"Upon the king! Let us our lives, our souls, / Our debts, our careful wives, / Our children, and our sins, lay on the king!"',
      who: 'King Henry \u2014 Act 4, Scene 1',
      analysis:
        'Alone at night in the borrowed cloak, Henry voices the private burden of ceremony: every subject\u2019s suffering is laid on his conscience, exposing the hollow cost of royal public performance.',
    },
    {
      quote:
        '"What is\u2019t to me, when you yourselves are cause, / If your pure maidens fall into the hand / Of hot and forcing violation?"',
      who: 'King Henry \u2014 Act 3, Scene 3',
      analysis:
        'Henry displaces responsibility for the threatened sack of Harfleur onto its defenders, a rhetorical manoeuvre that raises hard questions about the ethics of his war.',
    },
    {
      quote: '"If his cause be not good, the king himself hath a heavy reckoning to make."',
      who: 'Williams \u2014 Act 4, Scene 1',
      analysis:
        'The common soldier argues with the disguised Henry that a king bears the souls of all his dead, forcing Henry to defend the morality of his war on equal terms.',
    },
    {
      quote: '"I know not if the day be ours or no."',
      who: 'King Henry \u2014 Act 4, Scene 7',
      analysis:
        'Even at the moment of apparent victory, Henry hesitates \u2014 a rare admission of uncertainty that complicates the providential reading of the battle.',
    },
    {
      quote: '"O God, thy arm was here; / And not to us, but to thy arm alone, / Ascribe we all!"',
      who: 'King Henry \u2014 Act 4, Scene 8',
      analysis:
        'Henry\u2019s reaction to the Agincourt casualty list frames the victory as divine intervention, supporting the play\u2019s providential reading of English success.',
    },
    {
      quote:
        '"\u2019A made a finer end, and went away and it had been any christom child ... his nose was as sharp as a pen, and \u2019a babbled of green fields."',
      who: 'Mistress Quickly \u2014 Act 2, Scene 3',
      analysis:
        'Mistress Quickly\u2019s report of Falstaff\u2019s death is one of the play\u2019s most tender moments, quietly indicting the king who rejected his old companion and carrying the Henry IV plays into Henry V.',
    },
    {
      quote:
        '"Small time, but in that small most greatly lived / This star of England ... / Whose state so many had the managing / That they lost France and made his England bleed."',
      who: 'Chorus \u2014 Epilogue',
      analysis:
        'The final sonnet undercuts the play\u2019s triumph by reminding the audience that Henry VI would lose everything his father won, framing national glory as fleeting.',
    },
  ],
}

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'h5-1',
    question: 'Which battle is the climax of Henry V?',
    type: 'multiple-choice',
    options: ['Bosworth', 'Agincourt', 'Harfleur', 'Crecy'],
    correctIndex: 1,
    explanation:
      'The Battle of Agincourt (25 October 1415) is the play\u2019s climactic event. The English longbow and the muddy, narrow terrain produced a one-sided slaughter of the French nobility.',
    topic: 'Plot',
    difficulty: 'foundation',
  },
  {
    id: 'h5-2',
    question: 'Who speaks before each act of the play?',
    type: 'multiple-choice',
    options: ['The Dauphin', 'The Chorus', 'The Archbishop', 'Fluellen'],
    correctIndex: 1,
    explanation:
      'A single Chorus figure opens every act, apologising for the bare stage and asking the audience to imagine what the theatre cannot show. It is Shakespeare\u2019s most sustained use of the convention.',
    topic: "Writer's Methods",
    difficulty: 'foundation',
  },
  {
    id: 'h5-3',
    question: 'What famous line does Henry use to rally his troops at Harfleur?',
    type: 'multiple-choice',
    options: [
      '"Cry havoc!"',
      '"Once more unto the breach, dear friends"',
      '"Friends, Romans, countrymen"',
      '"The game is up"',
    ],
    correctIndex: 1,
    explanation:
      '"Once more unto the breach, dear friends, once more; / Or close the wall up with our English dead" is delivered before the walls of Harfleur in Act 3, Scene 1.',
    topic: 'Plot',
    difficulty: 'foundation',
  },
  {
    id: 'h5-4',
    question: 'What name does Henry give his soldiers in the Agincourt speech?',
    type: 'multiple-choice',
    options: [
      '"Happy warriors"',
      '"Sons of England"',
      '"We few, we happy few, we band of brothers"',
      '"Soldiers of Saint George"',
    ],
    correctIndex: 2,
    explanation:
      'The St Crispin\u2019s Day speech in Act 4, Scene 3 turns the English army\u2019s numerical disadvantage into moral superiority with the phrase "we band of brothers".',
    topic: 'Plot',
    difficulty: 'foundation',
  },
  {
    id: 'h5-5',
    question: 'What gift does the Dauphin send Henry in Act 1?',
    type: 'multiple-choice',
    options: [
      'A crown of thorns',
      'A basket of tennis balls',
      'A French sword',
      'A letter of challenge',
    ],
    correctIndex: 1,
    explanation:
      'The Dauphin\u2019s mocking gift of tennis balls in Act 1, Scene 2 is meant to remind Henry of his wild youth as Prince Hal, and provokes the invasion of France.',
    topic: 'Plot',
    difficulty: 'foundation',
  },
  {
    id: 'h5-6',
    question: 'Whose death is reported in Act 2 by Mistress Quickly?',
    type: 'multiple-choice',
    options: ['Bardolph', 'Falstaff', 'Nym', 'Scroop'],
    correctIndex: 1,
    explanation:
      'Mistress Quickly reports the offstage death of Sir John Falstaff \u2014 Henry\u2019s former companion, rejected at the end of Henry IV Part 2 \u2014 with the famous detail that "\u2019a babbled of green fields".',
    topic: 'Plot',
    difficulty: 'foundation',
  },
  {
    id: 'h5-7',
    question: 'Princess Katherine is the daughter of which king?',
    type: 'multiple-choice',
    options: [
      'Henry IV of England',
      'The King of France',
      'The King of Burgundy',
      'The King of Navarre',
    ],
    correctIndex: 1,
    explanation:
      'Katherine is the daughter of the French king, and her marriage to Henry is agreed in the Treaty of Troyes that ends the play \u2014 making Henry heir to the French throne.',
    topic: 'Characters',
    difficulty: 'foundation',
  },
  {
    id: 'h5-8',
    question: 'Which Welsh captain compares Henry to Alexander the Great?',
    type: 'multiple-choice',
    options: ['Gower', 'Fluellen', 'Macmorris', 'Jamy'],
    correctIndex: 1,
    explanation:
      'Fluellen, the pedantic and proud Welsh captain, is forever drawing classical parallels. His presence alongside English, Scottish and Irish officers shows the play\u2019s multi-national British identity.',
    topic: 'Characters',
    difficulty: 'foundation',
  },
  {
    id: 'h5-9',
    question: 'What does Shakespeare achieve by having the Chorus apologise for the stage?',
    type: 'multiple-choice',
    options: [
      'It is a joke at the audience\u2019s expense',
      'It draws attention to the play\u2019s theatrical artifice and makes the audience a collaborator in imagining history',
      'It is taken from a French source',
      'It shows Shakespeare did not like the Globe',
    ],
    correctIndex: 1,
    explanation:
      'The Chorus repeatedly asks the audience to "piece out our imperfections with your thoughts" \u2014 foregrounding the gap between event and performance, and making imagination itself a patriotic act.',
    topic: "Writer's Methods",
    difficulty: 'higher',
  },
  {
    id: 'h5-10',
    question: 'What is the significance of the Harfleur threat speech?',
    type: 'multiple-choice',
    options: [
      'It proves Henry is purely noble',
      'It shows Henry threatening civilian atrocity \u2014 "naked infants spitted upon pikes" \u2014 in the same voice he will later use for the St Crispin\u2019s speech, complicating the play\u2019s heroism',
      'It is spoken by the Dauphin',
      'It happens offstage',
    ],
    correctIndex: 1,
    explanation:
      'Henry\u2019s threat to the governor of Harfleur \u2014 including rape and the killing of infants if the town does not surrender \u2014 is delivered in the same play as the celebrated St Crispin\u2019s Day speech, forcing the audience to hold heroism and brutality together.',
    topic: 'Themes',
    difficulty: 'higher',
  },
  {
    id: 'h5-11',
    question: 'What does the "Upon the king!" soliloquy reveal?',
    type: 'multiple-choice',
    options: [
      'Henry\u2019s joy at being king',
      'The private burden of ceremony and responsibility beneath the public performance of kingship',
      'Henry\u2019s fear of the French',
      'Henry\u2019s love for Katherine',
    ],
    correctIndex: 1,
    explanation:
      'Alone at night in a borrowed cloak, Henry voices the weight of "our lives, our souls, our debts, our careful wives" laid on the king. The speech opens a gap between royal body and suffering man.',
    topic: 'Characters',
    difficulty: 'higher',
  },
  {
    id: 'h5-12',
    question:
      'Why does Shakespeare include Bardolph\u2019s hanging and Williams\u2019s argument with the disguised king?',
    type: 'multiple-choice',
    options: [
      'To make the play shorter',
      'To complicate the Chorus\u2019s celebratory frame and show the moral cost of war from ordinary soldiers\u2019 perspectives',
      'Because he ran out of ideas',
      'To give the Welsh characters more scenes',
    ],
    correctIndex: 1,
    explanation:
      'Bardolph \u2014 Henry\u2019s old tavern companion \u2014 is hanged for looting a church, and Williams challenges the disguised Henry with the idea that a king bears the souls of all his dead. Both scenes undercut the celebratory rhetoric of the Chorus.',
    topic: 'Themes',
    difficulty: 'higher',
  },
  {
    id: 'h5-13',
    question: 'What does the closing sonnet of the Epilogue reveal about the play\u2019s politics?',
    type: 'multiple-choice',
    options: [
      'That Henry lived a long life',
      'That Henry\u2019s son Henry VI would lose France, undercutting the triumph and framing national glory as fleeting',
      'That the French won in the end',
      'That Shakespeare wrote a sequel',
    ],
    correctIndex: 1,
    explanation:
      'The final Chorus reminds the audience that the victorious peace dies with Henry in 1422, and Henry VI would lose everything his father won \u2014 a deflationary ending that invites political reflection.',
    topic: "Writer's Methods",
    difficulty: 'higher',
  },
  {
    id: 'h5-14',
    question: 'How does Pistol function in the play?',
    type: 'multiple-choice',
    options: [
      'He is a purely tragic hero',
      'He carries the Eastcheap tavern world into France, exposing the ugly, plundering reality of the common soldier\u2019s war against the Chorus\u2019s heroic rhetoric',
      'He is the Dauphin\u2019s messenger',
      'He is Henry\u2019s closest friend throughout',
    ],
    correctIndex: 1,
    explanation:
      'Pistol\u2019s bombastic parody-verse, his looting, his humiliation by Fluellen and his final sneaking home after Mistress Quickly\u2019s death give the play its anti-heroic counter-voice.',
    topic: 'Characters',
    difficulty: 'higher',
  },
  {
    id: 'h5-15',
    question:
      'How does Shakespeare use the multi-national army (English, Welsh, Scottish, Irish captains)?',
    type: 'multiple-choice',
    options: [
      'As simple comic relief',
      'To construct a British rather than narrowly English national identity, and to dramatise different voices of loyalty around a single king',
      'To make the play shorter',
      'As historical accuracy only',
    ],
    correctIndex: 1,
    explanation:
      'Fluellen (Welsh), Gower (English), Jamy (Scottish) and Macmorris (Irish) serve Henry side by side. Shakespeare uses them to present a unified British army in a play written during a Scottish king\u2019s eventual succession.',
    topic: 'Context',
    difficulty: 'higher',
  },
  {
    id: 'h5-16',
    question: 'What is Shakespeare\u2019s attitude to Henry\u2019s claim to the French throne?',
    type: 'multiple-choice',
    options: [
      'He presents it as unambiguously just',
      'He lets Canterbury\u2019s elaborate legal speech raise suspicion about the claim\u2019s legitimacy while Henry asks pointedly whether his conscience is clear, leaving judgement to the audience',
      'He says it is illegal',
      'He ignores the question',
    ],
    correctIndex: 1,
    explanation:
      'Canterbury\u2019s Salic law speech is hedged with political motive (church lands are at stake), and Henry insists on asking "May I with right and conscience make this claim?" The play sets up the question and lets the audience weigh it.',
    topic: 'Themes',
    difficulty: 'grade-9',
  },
  {
    id: 'h5-17',
    question: 'Why is the wooing scene between Henry and Katherine significant?',
    type: 'multiple-choice',
    options: [
      'It proves Henry is a romantic hero',
      'It shows Henry performing plainness as a calculated style, and raises questions about the human cost of dynastic conquest since the marriage is already politically decided',
      'It is purely comic',
      'It is set in England',
    ],
    correctIndex: 1,
    explanation:
      'The wooing happens after the Treaty of Troyes is effectively signed, so Katherine has no real choice. Henry\u2019s self-conscious "plain soldier" performance is another rhetorical mode in a play obsessed with persuasion.',
    topic: 'Themes',
    difficulty: 'grade-9',
  },
  {
    id: 'h5-18',
    question: 'How does Henry V use the St Crispin\u2019s Day speech to transform class relations?',
    type: 'multiple-choice',
    options: [
      'It abolishes the aristocracy',
      'It promises that "he to-day that sheds his blood with me / Shall be my brother; be he ne\u2019er so vile, / This day shall gentle his condition" \u2014 claiming that shared risk dissolves class distinction within the battle',
      'It is a warning about rebellion',
      'It mocks the common soldier',
    ],
    correctIndex: 1,
    explanation:
      'The speech offers the common soldier symbolic ennoblement in return for battlefield risk. Critics have read this both as radical inclusiveness and as a rhetorical trick that disguises the continuing hierarchy.',
    topic: 'Themes',
    difficulty: 'grade-9',
  },
  {
    id: 'h5-19',
    question:
      'How does the Chorus before Act 5 connect Henry\u2019s return to Elizabethan politics?',
    type: 'multiple-choice',
    options: [
      'It denounces the Queen',
      'It explicitly compares Henry\u2019s victorious return from France to the Earl of Essex\u2019s anticipated return from the Irish campaign, dating the play to 1599 and linking it directly to contemporary English military hopes',
      'It refers to the Spanish Armada only',
      'It quotes a French source',
    ],
    correctIndex: 1,
    explanation:
      'The Chorus imagines Henry returning to London "as, by a lower but loving likelihood, / Were now the general of our gracious empress, / ... from Ireland coming." This is the clearest topical reference in any Shakespeare play.',
    topic: 'Context',
    difficulty: 'grade-9',
  },
  {
    id: 'h5-20',
    question: 'What is the effect of Exeter\u2019s report of the deaths of York and Suffolk?',
    type: 'multiple-choice',
    options: [
      'It is purely informational',
      'It gives the play a moment of sustained elegy that pierces the triumphalist frame, showing the emotional reality of battlefield death beneath the Chorus\u2019s rhetoric of glory',
      'It is meant comically',
      'It causes Henry to retreat',
    ],
    correctIndex: 1,
    explanation:
      'Exeter describes York and Suffolk dying together, kissing "the gashes / That bloodily did yawn upon his face" \u2014 one of the most moving speeches in the play, introducing a note of human grief that the celebratory frame cannot accommodate.',
    topic: "Writer's Methods",
    difficulty: 'grade-9',
  },
]

const REVISION_TOPICS = [
  {
    topic: 'Kingship and Leadership',
    summary:
      'Shakespeare presents Henry as both ideal warrior-king and calculating political actor, holding both possibilities open rather than settling the question.',
    keyPoints: [
      'Henry is the transformed Prince Hal of the Henry IV plays',
      'Public orations vs. the private "Upon the king!" soliloquy',
      'The disguised conversation with Williams tests the king\u2019s responsibility for his men',
      'Harfleur threats and Agincourt prisoner-killing complicate the heroic frame',
      'Shakespeare lets the audience judge rather than telling them what to think',
    ],
  },
  {
    topic: 'War and its Cost',
    summary:
      'The play\u2019s celebratory rhetoric is repeatedly shadowed by the human and moral cost of the French campaign.',
    keyPoints: [
      'Falstaff\u2019s offstage death reported by Mistress Quickly',
      'Bardolph hanged for looting a French church',
      'Dysentery thins the English army before Agincourt',
      'Exeter\u2019s elegy for York and Suffolk',
      'The order to kill the French prisoners',
    ],
  },
  {
    topic: 'Nationalism and English Identity',
    summary:
      'Henry V is the most overtly patriotic of the histories, but its nationalism is carefully constructed rather than simply asserted.',
    keyPoints: [
      'St Crispin\u2019s Day rhetoric has shaped English military identity ever since',
      'Multi-national army: English, Welsh, Scottish, Irish captains serve together',
      'French characters are given their own language and dignity',
      'The Chorus before Act 5 links Henry to Essex\u2019s 1599 Irish campaign',
      'The Epilogue\u2019s sonnet undercuts the triumph by foreshadowing Henry VI\u2019s loss of France',
    ],
  },
  {
    topic: 'Performance and Persuasion',
    summary:
      'The play is obsessed with rhetoric, and shows kingship itself as a performance requiring the right words at the right moment.',
    keyPoints: [
      'Canterbury\u2019s Salic law speech is a calculated legal performance',
      'Henry\u2019s Harfleur and St Crispin\u2019s speeches are masterclasses in military rhetoric',
      'The Chorus repeatedly draws attention to the theatre\u2019s artifice',
      'The wooing scene stages plainness as a deliberate style',
      'Pistol\u2019s parody-verse exposes rhetoric from below',
    ],
  },
  {
    topic: 'Divine Right and Providence',
    summary:
      'Henry invokes God throughout, but the play asks whether providence is real or whether God-talk is another form of political rhetoric.',
    keyPoints: [
      'Henry demands Canterbury\u2019s conscience-proof before going to war',
      'Prayer before Agincourt asks God not to remember his father\u2019s usurpation of Richard II',
      'Victory is credited to God\u2019s "arm" alone and boasting is forbidden',
      'The grotesquely one-sided casualty figures are framed as providential',
      'Shakespeare leaves the providential reading open to scepticism',
    ],
  },
]

const ESSAY_PROMPTS = [
  'How does Shakespeare present the character of Henry V as a king?',
  'How does Shakespeare use the Chorus to shape the audience\u2019s response to the play?',
  'How does Shakespeare present the theme of war in Henry V?',
  'How does Shakespeare explore national identity in Henry V?',
  'How does Shakespeare use rhetoric and performance as a theme in Henry V?',
]

export default async function HenryVPage() {
  const board = await getServerBoard()
  const allowedBoards = ['eduqas']
  if (board && !allowedBoards.includes(board)) {
    redirect('/revision/texts')
  }

  return (
    <>
      <CourseJsonLd
        name="Henry V — Complete GCSE Study Guide"
        description="In-depth study guide for Henry V covering plot, characters, themes, key quotations, historical context and exam essay plans for GCSE English Literature."
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'Revision', url: 'https://theenglishhub.app/revision' },
          { name: 'Set Texts', url: 'https://theenglishhub.app/revision/texts' },
          { name: 'Henry V', url: 'https://theenglishhub.app/revision/texts/henry-v' },
        ]}
      />
      <TextStudyHub
        textName="Henry V"
        textType="play"
        examBoard="Eduqas"
        basePath="/revision/texts/henry-v"
        subPages={[
          {
            id: 'read',
            href: '/revision/texts/henry-v/read',
            icon: 'read' as const,
            title: 'Read Full Text',
            description: 'With annotations',
          },
          {
            id: 'acts',
            href: '/revision/texts/henry-v/acts',
            icon: 'acts' as const,
            title: 'Act-by-Act Analysis',
            description: 'Key moments & quotes',
          },
          {
            id: 'characters',
            href: '/revision/texts/henry-v/characters',
            icon: 'characters' as const,
            title: 'Characters',
            description: 'Full character guide',
          },
          {
            id: 'themes',
            href: '/revision/texts/henry-v/themes',
            icon: 'themes' as const,
            title: 'Themes',
            description: 'Theme analysis',
          },
          {
            id: 'quotes',
            href: '/revision/texts/henry-v/key-quotes',
            icon: 'quotes' as const,
            title: 'Key Quotes',
            description: 'Quotes with analysis',
          },
          {
            id: 'context',
            href: '/revision/texts/henry-v/context',
            icon: 'context' as const,
            title: 'Context',
            description: 'Historical context',
          },
          {
            id: 'essays',
            href: '/revision/texts/henry-v/essay-plans',
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
          'How does Shakespeare present the character of Henry V as a king?',
          'How does Shakespeare use the Chorus to shape the audience\u2019s response to the play?',
          'How does Shakespeare present the theme of war in Henry V?',
          'How does Shakespeare explore national identity in Henry V?',
          'How does Shakespeare use rhetoric and performance as a theme in Henry V?',
        ]}
        flashcards={data.quotations.slice(0, 8).map((q) => ({
          front: q.quote,
          back: q.analysis,
        }))}
      />

      <InlineStudyEngine
        textName="Henry V"
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
