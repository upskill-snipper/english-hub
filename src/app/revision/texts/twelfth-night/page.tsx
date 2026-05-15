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
    title: 'Twelfth Night — Study Guide | The English Hub',
    description:
      'In-depth study guide for Twelfth Night by William Shakespeare: plot, characters, themes, context and key quotations.',
  },
  title: 'Twelfth Night — Study Guide | The English Hub',
  description:
    'In-depth study guide for Twelfth Night by William Shakespeare: plot, characters, themes, context and key quotations.',
  alternates: {
    canonical: 'https://theenglishhub.app/revision/texts/twelfth-night',
  },
}

const data: TextGuideData = {
  title: 'Twelfth Night',
  author: 'William Shakespeare',
  year: 'c. 1601\u201302',
  category: 'Play',
  badge: 'Edexcel',
  intro:
    'Shakespeare\u2019s festive comedy Twelfth Night, or What You Will was written around 1601\u201302 at the height of his creative powers. Set in the imagined Mediterranean court of Illyria, it is a play of shipwrecks, mistaken identities and sudden loves. A young woman, Viola, washes ashore believing her twin brother Sebastian has drowned. Disguising herself as a boy called Cesario, she enters the service of Duke Orsino and is sent to woo the mourning Countess Olivia on his behalf. The result is one of Shakespeare\u2019s most ingenious love triangles. Yet beneath the laughter runs a melancholy undertow: Feste\u2019s songs insist that \u201cyouth\u2019s a stuff will not endure,\u201d Malvolio is humiliated to the edge of cruelty, and the play ends with one character promising revenge and another walking alone into the rain. Twelfth Night explores gender, desire, class and festive misrule with a tenderness that sits strangely alongside its darker notes, making it one of the richest of Shakespeare\u2019s comedies for study.',
  quickInfo: {
    genre: 'Comedy (with dark undercurrents)',
    setting: 'Illyria (imagined Mediterranean court)',
    length: 'Five-act play (~2,600 lines)',
    published: 'First Folio 1623',
  },
  plotSummary: [
    'The play opens in Duke Orsino\u2019s court, where he indulges his melancholy passion for the Countess Olivia with the famous line, \u201cIf music be the food of love, play on.\u201d Olivia, mourning her dead brother, has sworn to avoid all male company for seven years. On a nearby coast, Viola is washed ashore after a shipwreck and fears her twin brother Sebastian has drowned. With the help of a Sea Captain, she decides to disguise herself as a young man named Cesario and seek employment at Orsino\u2019s court. Orsino quickly grows fond of his new page and sends Cesario to carry his love messages to Olivia. The plan misfires spectacularly: Olivia rejects Orsino yet falls in love with Cesario, while Viola, in her disguise, falls silently in love with Orsino.',
    'A parallel plot unfolds in Olivia\u2019s household. Her drunken uncle Sir Toby Belch is sponging off his foolish friend Sir Andrew Aguecheek, whom he has persuaded is a suitor for Olivia. Her steward Malvolio, a pompous Puritan-leaning figure, disapproves of the late-night revels and is loathed by the household. Maria, Olivia\u2019s quick-witted servingwoman, hatches a revenge: she forges a letter in Olivia\u2019s handwriting to make Malvolio believe his mistress loves him. The conspiracy draws in Toby, Sir Andrew and Fabian. The letter instructs Malvolio to smile constantly, wear yellow stockings cross-gartered and behave with haughty superiority. Reading that \u201csome are born great, some achieve greatness, and some have greatness thrust upon \u2019em,\u201d he believes himself singled out by fortune.',
    'When Malvolio appears before Olivia in this absurd costume, she assumes he has gone mad and entrusts his care to Sir Toby, who locks him in a dark room and torments him further, with Feste the clown disguising himself as a curate called Sir Topas. Meanwhile, Sebastian has in fact survived the shipwreck, rescued by the sea-captain Antonio, who follows him devotedly to Illyria. The twins\u2019 identical appearance produces a cascade of confusion: Sir Andrew, goaded by Toby into challenging Cesario, instead meets Sebastian and is beaten; Antonio, seeing Cesario, believes Sebastian has betrayed him; and Olivia, encountering Sebastian, sweeps him into an immediate betrothal that the astonished but delighted young man accepts.',
    'In the final act, all the strands converge before Orsino. Antonio is brought in as a prisoner, Olivia arrives calling Cesario her husband, and Sir Andrew and Sir Toby stagger in wounded. The confusion breaks when Sebastian enters and sees Viola: the twins are reunited and the disguise is revealed. Orsino, realising that Cesario is a woman who has loved him all along, offers Viola his hand with the words \u201cCesario, come\u2014/ For so you shall be while you are a man.\u201d Olivia is happily matched with Sebastian, and Maria and Toby have secretly married. Malvolio is released, realises he has been gulled by the forged letter and storms off crying \u201cI\u2019ll be revenged on the whole pack of you.\u201d The play closes not with wedding songs but with Feste\u2019s haunting solo about wind and rain, leaving the comedy\u2019s happiness tinged with loss.',
  ],
  characters: [
    {
      name: 'Viola / Cesario',
      role: 'Shipwrecked noblewoman who disguises herself as a young man',
      body: 'Viola is the moral and emotional centre of the play. Stranded in a strange land and fearing her twin brother dead, she invents the persona of Cesario as a means of survival and rapidly becomes indispensable at Orsino\u2019s court. Shakespeare gives her a witty, observant voice and moments of extraordinary feeling, particularly the \u201cpatience on a monument\u201d speech in which she describes her own love in the third person. Her line \u201cI am not what I am\u201d captures the painful doubleness of her position, loving Orsino while forced to woo Olivia for him.',
    },
    {
      name: 'Duke Orsino',
      role: 'Ruler of Illyria, in love with Olivia',
      body: 'Orsino opens the play luxuriating in unrequited love, calling for music to feed his passion and demanding the same melancholy tune repeatedly. Shakespeare presents him as self-indulgent and inconstant: he claims a man\u2019s love is deeper than a woman\u2019s, yet switches his affections from Olivia to Viola within minutes of the reveal. His relationship with Cesario is unusually intimate, and the play hints that his bond with the boy-page has already become emotional long before he learns Cesario is female.',
    },
    {
      name: 'Olivia',
      role: 'A wealthy countess in mourning for her dead brother',
      body: 'Olivia begins the play in performative grief, vowing seven years of seclusion, but is jolted out of her mourning by Cesario\u2019s visit and falls with the same sudden intensity that Orsino claims. She is capable of real decisiveness, running her household, rebuffing Orsino firmly and marrying Sebastian on almost no acquaintance. Shakespeare uses her to parallel Orsino\u2019s self-deception: both discover that what they thought was love was merely a pose.',
    },
    {
      name: 'Malvolio',
      role: 'Olivia\u2019s steward; the target of the gulling plot',
      body: 'Malvolio is proud, humourless and contemptuous of the revelling in Olivia\u2019s household, which makes him the perfect victim for Maria\u2019s forged letter. His fantasy of marrying Olivia and ruling the household exposes both class ambition and sexual vanity. Yet Shakespeare complicates the comedy by pushing the prank too far: the dark-room scene is genuinely cruel, and his final vow of revenge breaks the festive resolution. Audiences often leave the play uneasy about whether he deserved his humiliation.',
    },
    {
      name: 'Feste',
      role: 'Olivia\u2019s clown; a licensed fool',
      body: 'Feste moves between Olivia\u2019s and Orsino\u2019s households as the play\u2019s sharpest observer. His wordplay exposes the self-deceptions of the lovers, and his songs provide the play\u2019s emotional counter-current: \u201cwhat is love? \u2019tis not hereafter,\u201d \u201cyouth\u2019s a stuff will not endure.\u201d He is also the engine of some of the darkest comedy, impersonating Sir Topas to torment the imprisoned Malvolio. The final song about wind and rain leaves him alone on stage and gives the comedy its melancholy close.',
    },
    {
      name: 'Sir Toby Belch',
      role: 'Olivia\u2019s uncle; a drunken reveller',
      body: 'Toby embodies the Lord of Misrule spirit of the play\u2019s title. He drinks through the night, fleeces Sir Andrew of his money, and leads the conspiracy against Malvolio. His defence of cakes and ale against Malvolio\u2019s puritanism voices one of the play\u2019s central oppositions. Yet Shakespeare also shows his cruelty: he takes the prank against Malvolio further than Maria intends, and his treatment of Sir Andrew is blunt and mercenary. He eventually marries Maria, rewarding her wit with a place in the family.',
    },
    {
      name: 'Sebastian',
      role: 'Viola\u2019s twin brother, believed drowned',
      body: 'Sebastian\u2019s arrival in Illyria in Act 4 unlocks the plot. Rescued from the wreck by the devoted sea-captain Antonio, he is bewildered to find himself attacked by Sir Andrew, embraced by Olivia and married within hours. Shakespeare uses him to double and complete Viola: where she must disguise and wait, he acts immediately, accepting Olivia\u2019s offer on the spot. His reunion with Viola is the emotional climax of the final scene.',
    },
  ],
  themes: [
    {
      title: 'Love and self-deception',
      body: 'Almost every character in Twelfth Night mistakes their own feelings. Orsino claims to love Olivia but is really in love with the pose of lovesickness; Olivia claims seven years of mourning yet falls for a stranger in a single scene; Malvolio convinces himself that Olivia secretly loves him from a forged letter. Shakespeare uses these parallel delusions to suggest that love is often self-generated, a projection onto a convenient object. Only Viola\u2019s quiet, constant love for Orsino feels different in kind: she endures without reward, content merely to serve. The play ends with couples paired off, but Shakespeare leaves open the question of how much any of them really know each other.',
    },
    {
      title: 'Gender identity and disguise',
      body: 'Viola\u2019s disguise as Cesario drives the central romance and allows Shakespeare to blur the lines of gender more radically than anywhere else in his comedies. As Cesario, Viola attracts Olivia\u2019s genuine desire and forms an intimate bond with Orsino that survives her unmasking. The complication is deepened by the Elizabethan convention of boy-actors playing women: the audience watches a boy playing Viola playing a boy. The line \u201cI am not what I am\u201d resonates across the play, and Orsino\u2019s closing address to \u201cCesario\u201d rather than Viola suggests that desire, once formed, cannot simply be re-gendered to fit a tidy heterosexual ending.',
    },
    {
      title: 'Order versus misrule',
      body: 'The play\u2019s title points to the festival of the Twelfth Night of Christmas, traditionally presided over by a Lord of Misrule who inverted normal hierarchies for a single night of revelry. Sir Toby and his companions embody this festive disorder, drinking, singing and refusing Malvolio\u2019s attempts to impose bedtimes and sobriety. Malvolio himself represents the opposing force of puritan order: \u201cDost thou think, because thou art virtuous, there shall be no more cakes and ale?\u201d Toby asks. Shakespeare does not simply endorse misrule, however; the gulling of Malvolio becomes cruel, and the play ends with order restored through marriage. The tension between festive freedom and social discipline is never fully resolved.',
    },
    {
      title: 'Melancholy and mortality',
      body: 'For a comedy, Twelfth Night is unusually preoccupied with loss. Viola believes her brother dead, Olivia mourns hers, Orsino wallows in lovesick melancholy, and Feste\u2019s songs insist repeatedly that time is short and youth will not endure. Even the play\u2019s happy ending is shadowed: Malvolio leaves swearing revenge, Antonio\u2019s devotion to Sebastian is quietly set aside, and the final song of wind and rain replaces the expected wedding dance. Shakespeare gives the comedy a dying fall, reminding the audience that festive joy is temporary.',
    },
    {
      title: 'Class and ambition',
      body: 'Much of the play\u2019s humour turns on characters reaching above their station. Malvolio fantasises about marrying Olivia and becoming \u201cCount Malvolio,\u201d addressing Sir Toby as a social inferior. Maria, a gentlewoman servant, ends the play married to Sir Toby for her wit. Sir Andrew is a gull whose wealth buys him nominal status but no real welcome. Shakespeare is ambivalent about these ambitions: Maria\u2019s rise is rewarded, Malvolio\u2019s is savagely punished. The difference may be that Maria acts with humour and loyalty while Malvolio acts out of vanity, but the play also exposes how narrowly the Elizabethan social order could bend before it snapped.',
    },
    {
      title: 'Appearance versus reality',
      body: 'Disguise is everywhere in Illyria. Viola wears Cesario\u2019s clothes, Feste wears a curate\u2019s gown to torment Malvolio, Malvolio puts on yellow stockings convinced they will win him a countess, and the identical twins are mistaken for each other again and again. Shakespeare extends this beyond costume to the way characters perform emotions: Orsino performs melancholy, Olivia performs mourning, Malvolio performs dignity. The play suggests that identity itself is a kind of costume, and that the line between sincere feeling and theatrical display is harder to draw than the characters imagine.',
    },
  ],
  historicalContext: [
    'Twelfth Night takes its name from the twelfth night of Christmas, celebrated on 5 or 6 January as the eve of Epiphany. In Elizabethan England this was the climax of the Christmas holidays, marked by feasting, music, cross-dressing games and the appointment of a \u201cLord of Misrule\u201d who presided over an inverted social order for the night. Servants were briefly served by masters, and the normal rules of dignity and deference were suspended. Shakespeare\u2019s play absorbs this festive atmosphere into its plot: Sir Toby\u2019s revels, Feste\u2019s licensed mockery, Viola\u2019s cross-dressing and Malvolio\u2019s humiliation all echo the rhythms of the Twelfth Night feast. The subtitle \u201cWhat You Will\u201d reinforces the mood of holiday freedom.',
    'On the Elizabethan stage, all female roles were played by boys, since women were forbidden from acting publicly. This convention shapes the gender play of Twelfth Night at every level. When Viola dresses as Cesario, the audience watches a boy actor playing a woman playing a young man — a layering that the play explicitly draws attention to in moments like Viola\u2019s reference to \u201cmy little body.\u201d The first audience would have found the device less jarring than a modern one, and the fluidity between male and female roles was part of the theatrical pleasure. When Orsino addresses Viola as \u201cCesario\u201d at the close of the play, the line acknowledges that the boy-actor on stage has not, in fact, changed costume.',
    'Shakespeare also drew on the long tradition of Italian commedia erudita and commedia dell\u2019arte for the play\u2019s structure. A direct source is the Italian play Gl\u2019Ingannati (\u201cThe Deceived\u201d, 1531), which features separated twins, a disguised heroine who falls in love with her employer, and a mistaken-identity resolution. Shipwrecked twins and cross-dressing heroines were staples of Italian comedy, and English dramatists borrowed freely. Shakespeare adds the melancholy songs, the sub-plot of Malvolio\u2019s gulling and the figure of Feste, transforming the conventional comic formula into something unusually reflective. Twelfth Night was performed at the Inns of Court in February 1602 and is thought to have been written in the preceding months, placing it alongside Hamlet as one of the plays of Shakespeare\u2019s great transitional period.',
  ],
  quotations: [
    {
      quote:
        '"If music be the food of love, play on, / Give me excess of it, that, surfeiting, / The appetite may sicken and so die."',
      who: 'Orsino \u2014 Act 1, Scene 1',
      analysis:
        'The play\u2019s opening line establishes Orsino\u2019s self-indulgent, performative melancholy: he wants love to exhaust itself like an over-fed appetite.',
    },
    {
      quote: '"I am not what I am."',
      who: 'Viola \u2014 Act 3, Scene 1',
      analysis:
        'Viola\u2019s hint to Olivia captures the play\u2019s central paradox of disguise and identity, and deliberately echoes the devil\u2019s inversion of God\u2019s \u201cI am that I am.\u201d',
    },
    {
      quote:
        '"Some are born great, some achieve greatness, and some have greatness thrust upon \u2019em."',
      who: 'Malvolio \u2014 Act 2, Scene 5 (reading the letter)',
      analysis:
        'The forged letter\u2019s most famous line feeds Malvolio\u2019s class ambition and sets up the cruel comedy of his gulling.',
    },
    {
      quote: '"I\'ll be revenged on the whole pack of you."',
      who: 'Malvolio \u2014 Act 5, Scene 1',
      analysis:
        'Malvolio\u2019s exit line refuses the comedy\u2019s happy resolution and casts a shadow over the final pairings.',
    },
    {
      quote:
        '"She never told her love, / But let concealment, like a worm i\' the bud, / Feed on her damask cheek."',
      who: 'Viola \u2014 Act 2, Scene 4',
      analysis:
        'Viola describes her own hidden love for Orsino in the third person, using the image of a canker-worm to capture the self-consuming pain of silence.',
    },
    {
      quote: '"Youth\'s a stuff will not endure."',
      who: 'Feste \u2014 Act 2, Scene 3',
      analysis:
        'The refrain of Feste\u2019s song introduces the play\u2019s melancholy undertow, reminding the revellers that festive time is always running out.',
    },
    {
      quote: '"Journeys end in lovers meeting, / Every wise man\'s son doth know."',
      who: 'Feste \u2014 Act 2, Scene 3',
      analysis:
        'Feste\u2019s song foreshadows the play\u2019s resolution in marriage, but the proverbial form hints at how conventional the comic ending will be.',
    },
    {
      quote:
        '"Cesario, come\u2014 / For so you shall be while you are a man; / But when in other habits you are seen, / Orsino\'s mistress and his fancy\'s queen."',
      who: 'Orsino \u2014 Act 5, Scene 1',
      analysis:
        'Orsino\u2019s closing offer keeps addressing Viola as \u201cCesario,\u201d suggesting that the desire formed under her disguise persists beyond the reveal.',
    },
    {
      quote: '"Dost thou think, because thou art virtuous, there shall be no more cakes and ale?"',
      who: 'Sir Toby Belch \u2014 Act 2, Scene 3',
      analysis:
        'Toby\u2019s retort to Malvolio crystallises the play\u2019s opposition between festive misrule and puritan order.',
    },
    {
      quote: '"Be not afraid of greatness."',
      who: 'Maria\u2019s forged letter \u2014 Act 2, Scene 5',
      analysis:
        'The letter pitches directly at Malvolio\u2019s vanity, inviting him to believe his ambitions are being invited rather than mocked.',
    },
    {
      quote: '"If this were played upon a stage now, I could condemn it as an improbable fiction."',
      who: 'Fabian \u2014 Act 3, Scene 4',
      analysis:
        'Fabian\u2019s metatheatrical aside winks at the audience, acknowledging how contrived the comic machinery has become.',
    },
    {
      quote: '"Better a witty fool than a foolish wit."',
      who: 'Feste \u2014 Act 1, Scene 5',
      analysis:
        'Feste\u2019s inversion defines the licensed fool\u2019s role: wisdom speaks through apparent folly, a recurring motif in the play.',
    },
    {
      quote:
        '"O mistress mine, where are you roaming? / O stay and hear, your true-love\'s coming, / That can sing both high and low."',
      who: 'Feste \u2014 Act 2, Scene 3',
      analysis:
        'Feste\u2019s song to the revellers is gentle on the surface but insists that present joy must be seized before it fades.',
    },
    {
      quote: '"What country, friends, is this?"',
      who: 'Viola \u2014 Act 1, Scene 2',
      analysis:
        'Viola\u2019s first line establishes her as a stranger and frames Illyria as an unknown, almost dreamlike country shaped by her arrival.',
    },
    {
      quote: '"Disguise, I see thou art a wickedness, / Wherein the pregnant enemy does much."',
      who: 'Viola \u2014 Act 2, Scene 2',
      analysis:
        'Viola recognises that her own disguise has unintentionally ensnared Olivia, acknowledging the moral danger of pretence.',
    },
    {
      quote: '"I was adored once too."',
      who: 'Sir Andrew Aguecheek \u2014 Act 2, Scene 3',
      analysis:
        'Sir Andrew\u2019s sudden wistfulness breaks the comic surface and gives even the play\u2019s gull a flash of loneliness.',
    },
    {
      quote: '"And thus the whirligig of time brings in his revenges."',
      who: 'Feste \u2014 Act 5, Scene 1',
      analysis:
        'Feste taunts Malvolio in the final scene, reminding him (and the audience) that comic reversal is itself a kind of revenge.',
    },
    {
      quote: '"The rain it raineth every day."',
      who: 'Feste \u2014 Act 5, Scene 1 (closing song)',
      analysis:
        'The refrain of the play\u2019s final song replaces the expected wedding celebration with a weary acknowledgement of ordinary life resuming.',
    },
  ],
}

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'tn-1',
    question: 'Where is Twelfth Night set?',
    type: 'multiple-choice',
    options: ['Verona', 'Illyria', 'Venice', 'Athens'],
    correctIndex: 1,
    explanation:
      'The play is set in Illyria, an imagined Mediterranean court rather than a realistic location. The exotic-sounding name gave Shakespeare freedom to create a dreamlike world.',
    topic: 'Plot',
    difficulty: 'foundation',
  },
  {
    id: 'tn-2',
    question: 'What name does Viola take when she disguises herself as a young man?',
    type: 'multiple-choice',
    options: ['Sebastian', 'Cesario', 'Fabian', 'Valentine'],
    correctIndex: 1,
    explanation:
      'Viola adopts the name Cesario to enter Orsino\u2019s court. The disguise drives the central romantic confusion of the play.',
    topic: 'Characters',
    difficulty: 'foundation',
  },
  {
    id: 'tn-3',
    question:
      'Who speaks the famous opening line \u201cIf music be the food of love, play on\u201d?',
    type: 'multiple-choice',
    options: ['Feste', 'Sir Toby', 'Orsino', 'Sebastian'],
    correctIndex: 2,
    explanation:
      'Orsino opens the play indulging his lovesick melancholy. The line establishes him as a character in love with the idea of being in love.',
    topic: 'Characters',
    difficulty: 'foundation',
  },
  {
    id: 'tn-4',
    question: 'Who forges the letter that tricks Malvolio?',
    type: 'multiple-choice',
    options: ['Olivia', 'Maria', 'Feste', 'Viola'],
    correctIndex: 1,
    explanation:
      'Maria, Olivia\u2019s sharp-witted servingwoman, forges the letter in Olivia\u2019s handwriting. Her wit is later rewarded when she marries Sir Toby.',
    topic: 'Plot',
    difficulty: 'foundation',
  },
  {
    id: 'tn-5',
    question: 'What costume does Malvolio put on because he believes the letter tells him to?',
    type: 'multiple-choice',
    options: [
      'A clown\u2019s motley',
      'Yellow stockings, cross-gartered',
      'A friar\u2019s robe',
      'Black mourning clothes',
    ],
    correctIndex: 1,
    explanation:
      'The forged letter instructs Malvolio to appear in yellow stockings cross-gartered and to smile constantly. The absurd costume makes Olivia think he has gone mad.',
    topic: 'Plot',
    difficulty: 'foundation',
  },
  {
    id: 'tn-6',
    question: 'Who is Viola\u2019s twin brother?',
    type: 'multiple-choice',
    options: ['Antonio', 'Sebastian', 'Orsino', 'Sir Andrew'],
    correctIndex: 1,
    explanation:
      'Sebastian is Viola\u2019s twin brother. Both survive the shipwreck independently, and their identical appearance drives much of the final-act confusion.',
    topic: 'Characters',
    difficulty: 'foundation',
  },
  {
    id: 'tn-7',
    question: 'What role does Feste play in Olivia\u2019s household?',
    type: 'multiple-choice',
    options: ['The steward', 'The clown / licensed fool', 'The butler', 'The chaplain'],
    correctIndex: 1,
    explanation:
      'Feste is Olivia\u2019s clown, a \u201clicensed fool\u201d whose role is to speak wittily and sometimes cuttingly to his betters. He moves freely between Olivia\u2019s and Orsino\u2019s households.',
    topic: 'Characters',
    difficulty: 'foundation',
  },
  {
    id: 'tn-8',
    question:
      'Who says \u201cSome are born great, some achieve greatness, and some have greatness thrust upon \u2019em\u201d?',
    type: 'multiple-choice',
    options: ['Orsino', 'Sir Toby', 'Malvolio (reading the forged letter)', 'Feste'],
    correctIndex: 2,
    explanation:
      'Malvolio reads the line from Maria\u2019s forged letter in Act 2 Scene 5. The line feeds his class ambition and sets up the cruel comedy of his gulling.',
    topic: 'Themes',
    difficulty: 'foundation',
  },
  {
    id: 'tn-9',
    question: 'What does Viola mean when she says \u201cI am not what I am\u201d?',
    type: 'multiple-choice',
    options: [
      'She is lying about her age',
      'She hints at her true female identity beneath the Cesario disguise',
      'She is quoting a song',
      'She denies loving Orsino',
    ],
    correctIndex: 1,
    explanation:
      'The line hints to Olivia that Cesario is not what he appears. It captures the play\u2019s central paradox of disguise and echoes God\u2019s \u201cI am that I am\u201d in inverted form.',
    topic: 'Writer\u2019s Methods',
    difficulty: 'higher',
  },
  {
    id: 'tn-10',
    question: 'Who is part of the conspiracy against Malvolio?',
    type: 'multiple-choice',
    options: [
      'Viola, Sebastian, Feste, Toby',
      'Maria, Sir Toby, Sir Andrew, Fabian',
      'Orsino, Olivia, Antonio, Feste',
      'Only Maria and Feste',
    ],
    correctIndex: 1,
    explanation:
      'Maria plans the prank, and she is joined by Sir Toby, Sir Andrew and Fabian. Feste is drawn in later to impersonate the curate Sir Topas in the dark-room scene.',
    topic: 'Plot',
    difficulty: 'higher',
  },
  {
    id: 'tn-11',
    question: 'How does Shakespeare use Feste\u2019s songs in the play?',
    type: 'multiple-choice',
    options: [
      'Purely for comic distraction',
      'To reinforce the festive atmosphere with no deeper meaning',
      'To introduce a melancholy counter-current that complicates the comedy',
      'To summarise the plot for the audience',
    ],
    correctIndex: 2,
    explanation:
      'Feste\u2019s songs insist on the brevity of youth (\u201cyouth\u2019s a stuff will not endure\u201d) and close the play with a weary vision of rain. They give the comedy its melancholy undertow.',
    topic: 'Writer\u2019s Methods',
    difficulty: 'higher',
  },
  {
    id: 'tn-12',
    question: 'How does the ending complicate the comedy\u2019s happy resolution?',
    type: 'multiple-choice',
    options: [
      'All characters are paired off happily with no reservations',
      'Malvolio vows revenge, Antonio is left alone, and Feste\u2019s closing song is about wind and rain',
      'Orsino refuses to marry Viola',
      'Sebastian dies before the final scene',
    ],
    correctIndex: 1,
    explanation:
      'The play ends with Malvolio\u2019s \u201cI\u2019ll be revenged on the whole pack of you,\u201d Antonio\u2019s devotion quietly set aside, and Feste alone on stage singing \u201cthe rain it raineth every day.\u201d The comic resolution is shadowed throughout.',
    topic: 'Themes',
    difficulty: 'higher',
  },
  {
    id: 'tn-13',
    question:
      'What does Sir Toby mean by \u201cDost thou think, because thou art virtuous, there shall be no more cakes and ale\u201d?',
    type: 'multiple-choice',
    options: [
      'He is planning a feast',
      'He defends festive revelry against Malvolio\u2019s puritan disapproval',
      'He is mocking Feste',
      'He is apologising to Olivia',
    ],
    correctIndex: 1,
    explanation:
      'Toby\u2019s retort crystallises the play\u2019s opposition between festive misrule and puritan order. Cakes and ale stand for the life of the body that Malvolio would suppress.',
    topic: 'Themes',
    difficulty: 'higher',
  },
  {
    id: 'tn-14',
    question:
      'What is the significance of Viola\u2019s speech about \u201cpatience on a monument\u201d and the sister who \u201cnever told her love\u201d?',
    type: 'multiple-choice',
    options: [
      'She is gossiping about a relative',
      'She describes her own hidden love for Orsino in the third person, capturing the pain of silent devotion',
      'She is warning Orsino about Olivia',
      'She is trying to change the subject',
    ],
    correctIndex: 1,
    explanation:
      'Viola invents an imaginary \u201csister\u201d who loved in silence so that she can describe her own feelings to Orsino without breaking her disguise. The passage is one of the most moving in the play.',
    topic: 'Characters',
    difficulty: 'higher',
  },
  {
    id: 'tn-15',
    question:
      'Why does Shakespeare give the play the title \u201cTwelfth Night, or What You Will\u201d?',
    type: 'multiple-choice',
    options: [
      'It was written on 6 January',
      'It refers to the festival of misrule at the end of the Christmas holidays, in which hierarchies were inverted for a night of revelry',
      'It means \u201cthe twelfth play he wrote\u201d',
      'It is a reference to an Italian folk song',
    ],
    correctIndex: 1,
    explanation:
      'Twelfth Night (5\u20136 January, eve of Epiphany) was the climax of the Elizabethan Christmas holidays, marked by a \u201cLord of Misrule\u201d who inverted social hierarchies for a night. The subtitle \u201cWhat You Will\u201d extends the mood of holiday licence.',
    topic: 'Context',
    difficulty: 'higher',
  },
  {
    id: 'tn-16',
    question: 'How is the Elizabethan convention of boy-actors significant in Twelfth Night?',
    type: 'multiple-choice',
    options: [
      'It has no bearing on the play\u2019s meaning',
      'A boy actor plays Viola playing Cesario, layering the gender play and making the line between male and female deliberately unstable',
      'It means female characters speak less',
      'It explains why the play was banned',
    ],
    correctIndex: 1,
    explanation:
      'Because women were forbidden from the stage, a boy actor played Viola playing a young man. This theatrical convention is fully absorbed into the play\u2019s exploration of gender and desire and is implicit in Orsino\u2019s decision to keep calling Viola \u201cCesario\u201d at the end.',
    topic: 'Context',
    difficulty: 'grade-9',
  },
  {
    id: 'tn-17',
    question:
      'What does Orsino\u2019s closing line \u201cCesario, come \u2014 for so you shall be while you are a man\u201d suggest about desire in the play?',
    type: 'multiple-choice',
    options: [
      'Orsino is confused and cannot remember her name',
      'Orsino\u2019s desire was attached to Cesario, the male persona, and does not simply re-gender itself once Viola is revealed',
      'It is a printing error in the First Folio',
      'He rejects her and loves Olivia after all',
    ],
    correctIndex: 1,
    explanation:
      'By continuing to address Viola as Cesario, Orsino implies that the intimate bond he formed with his page persists. Shakespeare leaves the play\u2019s supposedly heterosexual resolution deliberately unstable.',
    topic: 'Themes',
    difficulty: 'grade-9',
  },
  {
    id: 'tn-18',
    question: 'How does the gulling of Malvolio complicate the play\u2019s status as a comedy?',
    type: 'multiple-choice',
    options: [
      'It is entirely light-hearted',
      'The dark-room scene and Malvolio\u2019s final vow of revenge push the cruelty too far for a purely festive ending, leaving audiences uneasy',
      'Malvolio laughs along with the joke',
      'Malvolio dies offstage',
    ],
    correctIndex: 1,
    explanation:
      'The imprisonment of Malvolio in a dark room and Feste\u2019s impersonation of Sir Topas drive the prank into genuine cruelty. Malvolio\u2019s \u201cI\u2019ll be revenged on the whole pack of you\u201d refuses the comic resolution, giving the play a famously bitter aftertaste.',
    topic: 'Writer\u2019s Methods',
    difficulty: 'grade-9',
  },
  {
    id: 'tn-19',
    question: 'What Italian source is Twelfth Night partly based on?',
    type: 'multiple-choice',
    options: [
      'Dante\u2019s Inferno',
      'Gl\u2019Ingannati (\u201cThe Deceived\u201d, 1531), an Italian commedia play featuring separated twins and a disguised heroine',
      'A commedia dell\u2019arte opera',
      'A poem by Petrarch',
    ],
    correctIndex: 1,
    explanation:
      'Shakespeare drew on the Italian comedy Gl\u2019Ingannati, which features separated twins, a disguised heroine who falls in love with her employer, and a mistaken-identity resolution. Italian commedia provided the structural scaffolding for the play.',
    topic: 'Context',
    difficulty: 'grade-9',
  },
  {
    id: 'tn-20',
    question:
      'How does Shakespeare use Feste\u2019s closing song \u201cThe rain it raineth every day\u201d?',
    type: 'multiple-choice',
    options: [
      'As a triumphant wedding song',
      'To shift the play out of festival time and into ordinary, weather-beaten life, leaving the comedy with a melancholy close',
      'To introduce a new plot',
      'To mock the audience',
    ],
    correctIndex: 1,
    explanation:
      'Instead of the expected wedding dance, the play ends with Feste alone on stage singing a weary ballad about wind and rain. The song moves the play from holiday licence back into everyday life and gives the comedy its famously melancholy close.',
    topic: 'Writer\u2019s Methods',
    difficulty: 'grade-9',
  },
]

const REVISION_TOPICS = [
  {
    topic: 'Love and Self-Deception',
    summary:
      'Almost every character in Illyria mistakes their own feelings, and Shakespeare exposes love as often a projection rather than a response.',
    keyPoints: [
      'Orsino is in love with being in love, not with Olivia',
      'Olivia\u2019s seven-year mourning collapses within one scene of meeting Cesario',
      'Malvolio is gulled into believing Olivia secretly adores him',
      'Viola\u2019s silent love for Orsino is the only constant love in the play',
      'The final pairings are happy but founded on very little knowledge',
    ],
  },
  {
    topic: 'Gender Identity and Disguise',
    summary:
      'Viola\u2019s disguise as Cesario lets Shakespeare explore the instability of gender and desire more radically than in any other comedy.',
    keyPoints: [
      'Viola\u2019s line \u201cI am not what I am\u201d captures the doubleness of her role',
      'Olivia falls in love with Cesario, a woman in male disguise',
      'Orsino forms an intimate bond with Cesario before the reveal',
      'Elizabethan boy-actors add another layer to the gender play',
      'Orsino closes the play still addressing Viola as \u201cCesario\u201d',
    ],
  },
  {
    topic: 'Order vs Misrule',
    summary:
      'The play\u2019s festive title points to a night of licensed inversion; its plot sets revellers against a puritan steward.',
    keyPoints: [
      'Sir Toby and friends embody the Lord of Misrule spirit',
      'Malvolio represents puritan order: sober, judgemental, ambitious',
      '\u201cCakes and ale\u201d stands for the life of the body Malvolio would suppress',
      'Maria\u2019s forged letter is the festival\u2019s inversion pushed to cruelty',
      'The final act tries to restore order but the resolution is uneasy',
    ],
  },
  {
    topic: 'Melancholy and Mortality',
    summary:
      'For a comedy, Twelfth Night is unusually shadowed by loss, and Feste\u2019s songs keep reminding the audience that time is short.',
    keyPoints: [
      'Viola and Olivia both mourn brothers believed dead',
      'Orsino\u2019s love is laced with melancholy from the opening line',
      'Feste\u2019s refrain \u201cyouth\u2019s a stuff will not endure\u201d haunts the revellers',
      'The gulling of Malvolio ends with a vow of revenge, not laughter',
      'The closing song \u201cthe rain it raineth every day\u201d gives the comedy a dying fall',
    ],
  },
  {
    topic: 'Class and Ambition',
    summary:
      'The play is fascinated by characters who try to move above their social station, and rewards them unevenly.',
    keyPoints: [
      'Malvolio fantasises about becoming \u201cCount Malvolio\u201d',
      '\u201cSome are born great, some achieve greatness\u2026\u201d feeds his class ambition',
      'Maria, a gentlewoman servant, wins Sir Toby through wit',
      'Sir Andrew\u2019s wealth buys him status but no real welcome',
      'The difference between Maria\u2019s rise and Malvolio\u2019s fall exposes the narrowness of the Elizabethan order',
    ],
  },
]

const ESSAY_PROMPTS = [
  'How does Shakespeare present love and self-deception in Twelfth Night?',
  'How does Shakespeare use Viola\u2019s disguise as Cesario to explore gender and identity?',
  'How does Shakespeare present the conflict between festive misrule and puritan order?',
  'How does Shakespeare use Feste and his songs to complicate the comedy?',
  'How far do you agree that the gulling of Malvolio pushes the play beyond comedy?',
]

export default async function TwelfthNightPage() {
  const board = await getServerBoard()
  const allowedBoards = ['edexcel']
  if (board && !allowedBoards.includes(board)) {
    redirect('/revision/texts')
  }

  return (
    <>
      <CourseJsonLd
        name="Twelfth Night — Complete GCSE Study Guide"
        description="In-depth study guide for Twelfth Night covering plot, characters, themes, key quotations, historical context and exam essay plans for GCSE English Literature."
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'Revision', url: 'https://theenglishhub.app/revision' },
          { name: 'Set Texts', url: 'https://theenglishhub.app/revision/texts' },
          { name: 'Twelfth Night', url: 'https://theenglishhub.app/revision/texts/twelfth-night' },
        ]}
      />
      <TextStudyHub
        textName="Twelfth Night"
        textType="play"
        examBoard="Edexcel"
        basePath="/revision/texts/twelfth-night"
        subPages={[
          {
            id: 'read',
            href: '/revision/texts/twelfth-night/read',
            icon: 'read' as const,
            title: 'Read Full Text',
            description: 'With annotations',
          },
          {
            id: 'acts',
            href: '/revision/texts/twelfth-night/acts',
            icon: 'acts' as const,
            title: 'Act-by-Act Analysis',
            description: 'Key moments & quotes',
          },
          {
            id: 'characters',
            href: '/revision/texts/twelfth-night/characters',
            icon: 'characters' as const,
            title: 'Characters',
            description: 'Full character guide',
          },
          {
            id: 'themes',
            href: '/revision/texts/twelfth-night/themes',
            icon: 'themes' as const,
            title: 'Themes',
            description: 'Theme analysis',
          },
          {
            id: 'quotes',
            href: '/revision/texts/twelfth-night/key-quotes',
            icon: 'quotes' as const,
            title: 'Key Quotes',
            description: 'Quotes with analysis',
          },
          {
            id: 'context',
            href: '/revision/texts/twelfth-night/context',
            icon: 'context' as const,
            title: 'Context',
            description: 'Historical context',
          },
          {
            id: 'essays',
            href: '/revision/texts/twelfth-night/essay-plans',
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
          'How does Shakespeare present love and self-deception in Twelfth Night?',
          'How does Shakespeare use Viola\u2019s disguise as Cesario to explore gender and identity?',
          'How does Shakespeare present the conflict between festive misrule and puritan order?',
          'How does Shakespeare use Feste and his songs to complicate the comedy?',
          'How far do you agree that the gulling of Malvolio pushes the play beyond comedy?',
        ]}
        flashcards={data.quotations.slice(0, 8).map((q) => ({
          front: q.quote,
          back: q.analysis,
        }))}
      />

      <InlineStudyEngine
        textName="Twelfth Night"
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
