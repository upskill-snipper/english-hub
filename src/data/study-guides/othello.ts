import type { StudyGuide } from '@/lib/study-guides/types'

/**
 * Othello, William Shakespeare (written about 1603 to 1604). A supplement: the
 * existing page at /revision/texts/othello keeps its overview, context, themes,
 * characters and key quotations, and this file adds the close-reading passages,
 * language analysis, structure, vocabulary, exam practice, model answer and the
 * scene data for the animated visuals.
 *
 * Every quotation, in the passages, the scene cards and the prose, was copied
 * from the byte copy of Project Gutenberg #1531 held at
 * src/data/full-texts/othello.ts. The guide test checks that each one is in
 * that edition; it does not check who says it or where, so every speaker and
 * scene was checked separately, by locating each phrase in its speech and
 * scene in the held edition (25 September 2026).
 *
 * Theme titles on the scene cards match the six themes on the existing page
 * exactly, so a card's theme chip names a theme the page explains. The cast is
 * wider than the page's: the page profiles seven characters, and the cards
 * and the map also name Bianca, Lodovico, Montano, Gratiano and the Duke,
 * because the plot cannot be told without them.
 *
 * EDITIONS. This edition mixes quarto and Folio readings, as most modern
 * editions do, and a student's own copy may differ at three places the guide
 * quotes: "sighs" or "kisses" (Act 1, Scene 3), "her name" or "my name"
 * (Act 3, Scene 3) and "Judean" or "Indian" (Act 5, Scene 2). The notes on
 * those lines say so, from the Folger textual notes for the first two and the
 * Shakespeare Navigators note for the third, so that a student is not taught
 * one reading as the only one.
 *
 * Facts checked and sourced below. Where sources differ on the date of writing
 * (1603 or 1604), the guide gives the range.
 */
export const guide: StudyGuide = {
  slug: 'othello',
  title: 'Othello',
  author: 'William Shakespeare',
  form: 'play',
  scope:
    'The whole play: five acts and fifteen scenes, set first in Venice (Act 1) and then on Cyprus (Acts 2 to 5).',
  rights: {
    status: 'public-domain',
    acknowledgement:
      'Written in about 1603 to 1604 and first printed in a quarto of 1622, then in a longer version in the First Folio of 1623. Quotations follow the modern-spelling Project Gutenberg edition (eBook #1531) held on this site. The quarto and Folio texts differ in hundreds of words, so your own edition may differ from this one in spelling, punctuation and, now and then, a word.',
  },

  native: {
    overview: '/revision/texts/othello',
    context: '/revision/texts/othello',
    themes: '/revision/texts/othello',
    characters: '/revision/texts/othello',
    keyQuotes: '/revision/texts/othello',
  },

  extracts: [
    {
      title: "Othello's defence before the senate",
      where: 'Act 1, Scene 3',
      pointer:
        "Othello's second long speech to the Duke and senators, from “Her father lov’d me, oft invited me” to “This only is the witchcraft I have us’d.”, just before Desdemona enters.",
      text: 'Her father lov’d me, oft invited me, / Still question’d me the story of my life, / From year to year—the battles, sieges, fortunes, / That I have pass’d. / I ran it through, even from my boyish days / To the very moment that he bade me tell it, / Wherein I spake of most disastrous chances, / Of moving accidents by flood and field; / Of hair-breadth scapes i’ th’ imminent deadly breach; / Of being taken by the insolent foe, / And sold to slavery, of my redemption thence, / And portance in my traveler’s history, / Wherein of antres vast and deserts idle, / Rough quarries, rocks, and hills whose heads touch heaven, / It was my hint to speak,—such was the process; / And of the Cannibals that each other eat, / The Anthropophagi, and men whose heads / Do grow beneath their shoulders. This to hear / Would Desdemona seriously incline. / But still the house affairs would draw her thence, / Which ever as she could with haste dispatch, / She’d come again, and with a greedy ear / Devour up my discourse; which I observing, / Took once a pliant hour, and found good means / To draw from her a prayer of earnest heart / That I would all my pilgrimage dilate, / Whereof by parcels she had something heard, / But not intentively. I did consent, / And often did beguile her of her tears, / When I did speak of some distressful stroke / That my youth suffer’d. My story being done, / She gave me for my pains a world of sighs. / She swore, in faith, ’twas strange, ’twas passing strange; / ’Twas pitiful, ’twas wondrous pitiful. / She wish’d she had not heard it, yet she wish’d / That heaven had made her such a man: she thank’d me, / And bade me, if I had a friend that lov’d her, / I should but teach him how to tell my story, / And that would woo her. Upon this hint I spake: / She lov’d me for the dangers I had pass’d, / And I lov’d her that she did pity them. / This only is the witchcraft I have us’d.',
      annotations: [
        {
          phrase: 'Her father lov’d me, oft invited me',
          note: "Othello opens not with himself but with Brabantio's affection. The man now accusing him of witchcraft once welcomed him and asked for his stories, so the charge is weakened before the defence has properly begun, and the senate hears about a guest, not a thief.",
        },
        {
          phrase: 'Of moving accidents by flood and field',
          note: 'The list of adventures, bound together by alliteration and a repeated “Of”, makes his life sound like romance. Earlier in the scene he claimed “Rude am I in my speech”, and this speech proves the claim false: it is some of the most musical verse in the play.',
        },
        {
          phrase: 'The Anthropophagi',
          note: "Cannibals, and men with heads beneath their shoulders, are the marvels of travellers' tales. They make Othello wondrous to his listeners. One reading is that he wins acceptance in Venice partly by performing the strangeness Venice expects of him, which is a sadder thought than it first appears.",
        },
        {
          phrase: 'with a greedy ear',
          note: 'Desdemona is no passive listener: “greedy” and “Devour” give her an appetite for his story. The image honours her independence here, but Iago later twists the same idea of female appetite into lust, telling Roderigo “Her eye must be fed”.',
        },
        {
          phrase: 'a world of sighs',
          note: "Desdemona responds with pity, the feeling the whole courtship rests on. This is the quarto's reading; the Folio has the word kisses here instead, so check which word your own copy uses before you quote it.",
        },
        {
          phrase: 'She lov’d me for the dangers I had pass’d',
          note: "The balanced pair of lines, each turning on “lov’d”, presents the marriage as mutual: she loved his story, he loved her response to it. It is moving but fragile, because a love made from a story can be unmade by a better storyteller, and Iago is the play's great teller of stories.",
        },
        {
          phrase: 'This only is the witchcraft I have us’d.',
          note: "Othello turns Brabantio's accusation into a quiet joke: his only magic is narrative. The line gains irony later, when Iago tells Roderigo “we work by wit, and not by witchcraft”, because Iago's weapon is storytelling too, used to destroy rather than to win.",
        },
      ],
      question:
        "Starting with this speech, explore how Shakespeare presents Othello as a powerful speaker. Write about how he presents Othello's language in this extract, and how it changes in the play as a whole.",
    },
    {
      title: "Iago's warning against jealousy",
      where: 'Act 3, Scene 3',
      pointer:
        "In the long temptation scene, shortly after Iago's speech beginning “Good name in man and woman”: from “O, beware, my lord, of jealousy” to Othello's “Away at once with love or jealousy!”",
      text: 'IAGO: / O, beware, my lord, of jealousy; / It is the green-ey’d monster which doth mock / The meat it feeds on. That cuckold lives in bliss / Who, certain of his fate, loves not his wronger; / But O, what damned minutes tells he o’er / Who dotes, yet doubts, suspects, yet strongly loves! / OTHELLO: / O misery! / IAGO: / Poor and content is rich, and rich enough; / But riches fineless is as poor as winter / To him that ever fears he shall be poor. / Good heaven, the souls of all my tribe defend / From jealousy! / OTHELLO: / Why, why is this? / Think’st thou I’d make a life of jealousy, / To follow still the changes of the moon / With fresh suspicions? No. To be once in doubt / Is once to be resolv’d: exchange me for a goat / When I shall turn the business of my soul / To such exsufflicate and blown surmises, / Matching thy inference. ’Tis not to make me jealous, / To say my wife is fair, feeds well, loves company, / Is free of speech, sings, plays, and dances well; / Where virtue is, these are more virtuous: / Nor from mine own weak merits will I draw / The smallest fear or doubt of her revolt, / For she had eyes, and chose me. No, Iago, / I’ll see before I doubt; when I doubt, prove; / And on the proof, there is no more but this: / Away at once with love or jealousy!',
      annotations: [
        {
          phrase: 'It is the green-ey’d monster which doth mock',
          note: 'Jealousy is personified as a beast that mocks the flesh it eats, so the jealous man both feeds the monster and is devoured by it. The warning is also the method: by naming jealousy so vividly, Iago plants the very idea he pretends to warn against.',
        },
        {
          phrase: 'Who dotes, yet doubts, suspects, yet strongly loves!',
          note: 'The line swings between love and suspicion on each “yet”, and “dotes” and “doubts” sound almost alike. Iago is describing, in advance, exactly the torment Othello will be suffering by the end of the scene.',
        },
        {
          phrase: 'Think’st thou I’d make a life of jealousy',
          note: "Othello answers with a rhetorical question that sounds confident, but he has taken up Iago's word. The conversation has already moved from whether Cassio is honest to whether Othello could ever be jealous, which is the shift Iago wanted.",
        },
        {
          phrase: 'exchange me for a goat',
          note: "Animal imagery, the language of Iago's opening scene, now enters Othello's own speech. It echoes Iago's “old black ram” in Act 1, Scene 1 and looks forward to Othello's cry of “Goats and monkeys!” in Act 4, Scene 1, tracing how Iago's language is taking him over.",
        },
        {
          phrase: 'For she had eyes, and chose me.',
          note: "Plain monosyllables rest his security on Desdemona's free choice. Moments later Iago turns that choice against her with “She did deceive her father, marrying you”, showing how every strength of the marriage can be recast as a weakness.",
        },
        {
          phrase: 'I’ll see before I doubt; when I doubt, prove;',
          note: 'Othello presents himself as a soldier who acts only on evidence. The tragic irony is that before the scene ends he accepts, in place of the “ocular proof” he demanded, a report of a dream and a story about a handkerchief he has not seen.',
        },
      ],
      question:
        "Explore the significance of this exchange in relation to Shakespeare's presentation of jealousy in the play as a whole.",
    },
    {
      title: "Othello's final speech",
      where: 'Act 5, Scene 2',
      pointer:
        'Near the very end of the play, after Lodovico announces that Othello will be held prisoner: from “Soft you; a word or two before you go.” to “And smote him, thus.”',
      text: 'Soft you; a word or two before you go. / I have done the state some service, and they know’t. / No more of that. I pray you, in your letters, / When you shall these unlucky deeds relate, / Speak of me as I am. Nothing extenuate, / Nor set down aught in malice. Then must you speak / Of one that loved not wisely, but too well; / Of one not easily jealous, but being wrought, / Perplex’d in the extreme; of one whose hand, / Like the base Judean, threw a pearl away / Richer than all his tribe; of one whose subdu’d eyes, / Albeit unused to the melting mood, / Drop tears as fast as the Arabian trees / Their medicinal gum. Set you down this. / And say besides, that in Aleppo once, / Where a malignant and a turban’d Turk / Beat a Venetian and traduc’d the state, / I took by the throat the circumcised dog, / And smote him, thus.',
      annotations: [
        {
          phrase: 'I have done the state some service, and they know’t.',
          note: 'He begins with his public record, the identity Venice valued him for, then waves it away with “No more of that”. The move reminds his listeners of his worth while appearing modest, and shows how much of his sense of himself depends on service to the state.',
        },
        {
          phrase: 'Speak of me as I am. Nothing extenuate,',
          note: "The imperatives ask for an honest record, neither softened nor exaggerated. Set against Iago's “I am not what I am”, the words “as I am” sound like a claim to the self-knowledge Iago lacks, though an audience may doubt that Othello has fully reached it.",
        },
        {
          phrase: 'Of one that loved not wisely, but too well;',
          note: 'The antithesis offers the epitaph Othello wants. Many readers find it too kind to himself: the play has shown love turned to murder by jealousy and pride, not simply an excess of love, so this line opens a debate rather than settling one.',
        },
        {
          phrase: 'Of one not easily jealous, but being wrought,',
          note: 'To be “wrought” is to be worked upon, as a craftsman works metal, and the word places the blame on Iago. Whether an audience accepts “not easily jealous” depends on how it judged the speed of his collapse in Act 3, Scene 3.',
        },
        {
          phrase: 'threw a pearl away',
          note: "Desdemona becomes a jewel worth more than a whole tribe, and his act a failure to see value. Othello here casts himself as the base man who could not recognise what he held, a striking reversal for a hero who has always insisted on his nobility. Check your own copy: this edition follows the Folio's “base Judean”, read by some editors as an allusion to Judas or to Herod, while the 1622 quarto reads Indian, a man ignorant of the worth of what he finds, and many editions print that instead.",
        },
        {
          phrase: 'I took by the throat the circumcised dog,',
          note: 'Othello tells of killing a Turk who had attacked a Venetian, then stabs himself on the word “thus”. In one gesture he is both the loyal servant of Venice and its outsider enemy, turning the language of religious and racial contempt upon himself.',
        },
      ],
      question:
        "How far do you agree that Othello's final speech restores his nobility? Refer closely to this extract and to the play as a whole.",
    },
  ],

  languageAnalysis: [
    {
      technique: 'Animal imagery',
      example:
        'Iago wakes Brabantio with “an old black ram / Is tupping your white ewe” (Act 1, Scene 1); by Act 4, Scene 1 Othello himself is crying “Goats and monkeys!”',
      effect:
        "Iago's images reduce Othello and Desdemona to beasts, turning a marriage into something animal and fusing racism with sexual disgust. The imagery also tracks the tragedy: when Othello begins to speak in Iago's animals, the audience can hear how far the poison has spread.",
    },
    {
      technique: 'Repetition of “honest”',
      example:
        'Othello calls him “Honest Iago” as early as Act 1, Scene 3, and is still insisting on “My friend, thy husband, honest, honest Iago” in Act 5, Scene 2.',
      effect:
        "The word is attached to the play's liar so often that it empties of meaning, and each use is dramatic irony, because the audience has heard Iago reveal himself from the first scene onwards. Iago even plays with it himself, “I should be wise; for honesty’s a fool”, making honesty sound like weakness.",
    },
    {
      technique: 'Insinuation through echo and hesitation',
      example:
        'In Act 3, Scene 3 Iago answers questions with questions (“Indeed?”, “Honest, my lord?”, “Think, my lord?”) until Othello cries “By heaven, he echoes me”.',
      effect:
        "At first Iago never makes an accusation. His pauses and echoes make Othello supply the suspicion himself, which is more persuasive than any lie because the thought feels like Othello's own. The scene is a model of manipulation by suggestion.",
    },
    {
      technique: 'Soliloquy and dramatic irony',
      example:
        'Iago ends Act 1, Scene 3 alone with “I hate the Moor” and a plan “to abuse Othello’s ear”; in Act 2, Scene 3 he asks the audience “And what’s he then, that says I play the villain?”',
      effect:
        "The soliloquies make the audience Iago's confidant, so every later scene is watched with knowledge the victims lack. The effect is uncomfortable: we are drawn into admiring his wit while dreading its results, and Othello, who is not given a soliloquy until Act 3, Scene 3, is kept at a distance.",
    },
    {
      technique: 'Poison and disease imagery',
      example:
        '“I’ll pour this pestilence into his ear” (Act 2, Scene 3); “The Moor already changes with my poison” (Act 3, Scene 3); “Work on, / My medicine, work!” (Act 4, Scene 1).',
      effect:
        'Jealousy is presented as an infection that enters through the ear and spreads slowly: “Dangerous conceits are in their natures poisons”. Shakespeare suggests that words act on the mind as a drug acts on the body, which helps explain how quickly a noble man is changed.',
    },
    {
      technique: 'Light and dark, black and white',
      example:
        "Iago plans to “turn her virtue into pitch” (Act 2, Scene 3); Othello says Desdemona's name is now “begrim’d and black / As mine own face” (Act 3, Scene 3; the Folio reads my name for her name, so in some editions it is his own reputation he sees blackened); before the murder he says “Put out the light, and then put out the light” (Act 5, Scene 2).",
      effect:
        "The play draws on its audience's habit of linking blackness with sin and whiteness with purity, then questions it. The Duke tells Brabantio that his son-in-law “is far more fair than black”, and Emilia calls Othello “the blacker devil”, yet the real darkness belongs to Iago, a Venetian insider. One of the saddest moments is Othello turning Venice's colour prejudice on his own face.",
    },
    {
      technique: "The breakdown of Othello's verse",
      example:
        'Compare the measured opening of his senate speech, “Most potent, grave, and reverend signiors” (Act 1, Scene 3), with the broken prose of Act 4, Scene 1, “Handkerchief—confessions—handkerchief!”, just before he falls in a trance.',
      effect:
        "Othello's grand, rhythmical blank verse is the sound of his self-command. When Iago's suggestions take hold, his speech collapses into prose, repetition and disconnected nouns, then into silence as he falls. The form of the language acts out the collapse of the mind.",
    },
    {
      technique: 'Extended simile',
      example:
        'As he vows revenge in Act 3, Scene 3: “Like to the Pontic Sea, / Whose icy current and compulsive course / Ne’er feels retiring ebb”.',
      effect:
        'Othello compares his bloody thoughts to a sea current that never flows back. The image is grand and far-travelled, recalling the voice of Act 1, but it now serves revenge, and it reveals something tragic in him: a mind that, once moving, cannot turn round.',
    },
    {
      technique: 'Oxymoron and antithesis',
      example:
        '“Excellent wretch!” (Act 3, Scene 3); “I that am cruel am yet merciful” and “I kiss’d thee ere I kill’d thee” (Act 5, Scene 2).',
      effect:
        'Love and violence are fused in single phrases. The contradictions show Othello trying to hold together feelings that cannot coexist, and in his dying words the alliteration of kiss and kill binds his love to his crime in a way he cannot escape.',
    },
    {
      technique: 'Prose and verse as a sign of character',
      example:
        'With Roderigo, Iago speaks brisk prose and repeats “put money in thy purse” again and again (Act 1, Scene 3); in his soliloquies, and with Othello in the temptation scene, he speaks verse.',
      effect:
        'Iago changes his register to suit his listener: coarse and practical with a fool, poised and careful with his general. The shift shows that his style, like his honesty, is a performance put on for whoever he needs to use.',
    },
    {
      technique: 'Embedded stage directions',
      example:
        "“Keep up your bright swords” (Act 1, Scene 2) tells us the weapons are drawn; Othello's last speech ends “And smote him, thus.”, and he stabs himself on the final word (Act 5, Scene 2).",
      effect:
        "Shakespeare writes the action into the lines, so an actor's gesture is fixed by the words themselves. In Act 1 the command shows Othello calming a street fight with a quiet word. In Act 5 the word “thus” is both the end of a story about Aleppo and the act of suicide: the storyteller of Act 1 acts out his last tale on his own body, which is why many readers find the moment both noble and deeply disturbing.",
    },
  ],

  structureForm: [
    {
      heading: 'From Venice to Cyprus',
      body: 'Act 1 takes place in Venice, a city of law, where a charge against Othello is heard by the Duke and senate and dismissed. The rest of the play is set on Cyprus, a military outpost under threat from the Turks. In Act 2, Scene 1 a storm wrecks the Turkish fleet and Othello announces “our wars are done, the Turks are drown’d”. With the outside enemy gone, the war turns inward. On Cyprus there is no senate to appeal to, Othello is the highest authority, and Iago can arrange every meeting.',
    },
    {
      heading: 'The shape of a tragedy',
      body: "The play can be mapped onto the pattern of tragedy described in Aristotle's Poetics, though Shakespeare was not writing to a rulebook. A noble hero is vindicated in public in Act 1; the reversal, or peripeteia, comes in Act 3, Scene 3; and the recognition, or anagnorisis, comes too late in Act 5, Scene 2, when Emilia reveals the truth about the handkerchief, Cassio confirms it and Othello cries “O fool! fool! fool!” Whether his fall comes from a flaw of character, such as jealousy or pride, or from an error of judgement worked on by an enemy is the central question critics argue over, and a strong answer takes a side.",
    },
    {
      heading: 'The temptation scene at the centre',
      body: 'Act 3, Scene 3 is the longest scene in the play and its hinge. Early in it Othello cannot refuse Desdemona anything, “I will deny thee nothing”, and it ends with him kneeling to vow revenge and making Iago his lieutenant. Shakespeare puts the whole change of a mind into one continuous scene, so the audience watches each step: the hint, the warning, the soliloquy of doubt, the handkerchief, the demand for proof and the vow. Placed at the centre of a five-act play, it gives the drama a clear shape: rise before it, fall after it.',
    },
    {
      heading: 'Double time',
      body: "Counted by the clock, the action on Cyprus takes about thirty-three hours by one common reckoning: the arrival and the brawl on the first night, the temptation the next day, the murder that night. Yet the play also implies weeks. Bianca complains that Cassio has kept “a week away”, Emilia says Iago has asked her to steal the handkerchief “a hundred times”, and Othello believes the adultery was committed “A thousand times”. Critics call this double time, an idea usually credited to articles by John Wilson in Blackwood's Magazine in 1849 and 1850, though others had noticed the problem earlier. The short clock gives the play its speed and leaves Othello no time to check anything; the long clock makes the affair seem possible. Few in an audience notice the gap, which is itself a lesson in how easily we accept a story.",
    },
    {
      heading: "Iago's soliloquies, then his silence",
      body: "In the first two acts Iago repeatedly speaks to the audience alone: at the end of Act 1, Scene 3, at the end of Act 2, Scene 1 and three times in Act 2, Scene 3, each time adding to a plan that, at the end of Act 2, Scene 1, he admits is still “confus’d”. The soliloquies make him the play's director, planning scenes before the other characters act them out. In Act 5, Scene 2 the structure closes on the opposite: asked to explain himself, he says “From this time forth I never will speak word.” The character who controlled the play through words ends it by withholding them, and the audience, which heard all his reasons, may be left feeling that none of them explains him.",
    },
    {
      heading: 'Verse, prose and couplets',
      body: "Most of the play is in blank verse, unrhymed lines of ten syllables and five stresses, and Shakespeare varies it to show character and state of mind. Iago moves easily between prose, as when he works on Roderigo in Act 1, Scene 3 and on Cassio after the brawl, and verse, in his soliloquies and through most of the temptation scene. Othello speaks verse of unusual music in Act 1 but breaks into prose fragments in Act 4, Scene 1 before he collapses. Rhyming couplets mark moments of judgement or warning. Brabantio's parting couplet, “Look to her, Moor, if thou hast eyes to see: / She has deceiv’d her father, and may thee”, sounds like a proverb, which may be why it lodges in Othello's mind, and Iago revives it in Act 3.",
    },
    {
      heading: 'Opening and closing in the dark',
      body: "The play begins at night in a Venetian street, in the middle of an argument about money and hatred, and it ends in a bedchamber lit by a single light. Several of its crises happen at night: the alarm at Brabantio's house, the brawl, the ambush of Cassio and the murder. The last image is of the bed itself. Lodovico tells Iago to “Look on the tragic loading of this bed” and then orders “Let it be hid”, as if Venice cannot bear to look at what has been done, before he leaves to report the story to the senate. The ending returns the play to the public world of Act 1, but with its hero gone.",
    },
  ],

  vocabulary: [
    {
      term: 'Ancient',
      definition:
        "An ensign, the officer who carried the company's flag. It is Iago's rank, below Cassio the lieutenant: he calls himself “his Moorship’s ancient” with contempt in Act 1, Scene 1.",
    },
    {
      term: 'Lieutenant',
      definition:
        "Othello's second in command. Cassio holds the post when the play begins; Iago is given it at the end of Act 3, Scene 3 with “Now art thou my lieutenant”.",
    },
    {
      term: 'Moor',
      definition:
        "In Shakespeare's time a loose term for a person from North Africa, and often for any dark-skinned person. The play never fixes Othello's exact origin, and Iago and Roderigo use the word, and worse, as an insult.",
    },
    {
      term: 'Cuckold',
      definition:
        "A man whose wife is unfaithful, traditionally mocked as wearing horns. Othello's horror of the name explains his line “A horned man’s a monster and a beast” in Act 4, Scene 1.",
    },
    {
      term: 'Ocular proof',
      definition:
        'Proof that can be seen with the eyes. Othello demands it in Act 3, Scene 3; Iago supplies instead a report of a dream and a story about a handkerchief, and Othello accepts them.',
    },
    {
      term: 'Magnifico',
      definition:
        'A Venetian nobleman. Iago uses the word of Brabantio in Act 1, Scene 2, warning Othello that the old senator is much loved and powerful.',
    },
    {
      term: 'Signiory',
      definition:
        "The governing lords of Venice. Othello trusts that “My services, which I have done the signiory” will outweigh Brabantio's complaints.",
    },
    {
      term: 'Ottomites',
      definition:
        "The Ottoman Turks, Venice's enemy in the war over Cyprus. Their fleet is destroyed by the storm in Act 2, Scene 1, so the battle the characters sail to fight never happens.",
    },
    {
      term: 'Cashier',
      definition:
        'To dismiss someone from their post. In Act 1, Scene 1 Iago sneers at loyal servants who are cashiered when they grow old. In Act 2, Scene 3 he consoles Roderigo, who was beaten in the brawl, by telling him that the small hurt has “cashier’d Cassio”.',
    },
    {
      term: 'Anthropophagi',
      definition:
        'Cannibals. Othello names them among the wonders of his travels when he tells the senate how he won Desdemona in Act 1, Scene 3.',
    },
    {
      term: 'Soliloquy',
      definition:
        "A speech in which a character alone on stage speaks their thoughts to the audience. Iago's soliloquies reveal his plots; Othello's first comes in Act 3, Scene 3.",
    },
    {
      term: 'Aside',
      definition:
        "A line spoken so that the audience, but not the other characters, can hear it, as when Iago comments on Cassio taking Desdemona's hand in Act 2, Scene 1.",
    },
    {
      term: 'Dramatic irony',
      definition:
        'When the audience knows something a character does not. Every time Othello calls Iago honest, the audience knows otherwise, and the tension of the play depends on it.',
    },
    {
      term: 'Hamartia',
      definition:
        "Aristotle's term for the error or flaw that brings about a tragic hero's fall. For Othello the candidates include jealousy, pride, credulity and his readiness to believe Iago over Desdemona.",
    },
    {
      term: 'Peripeteia',
      definition:
        'A reversal of fortune in a tragedy. In Othello it turns within Act 3, Scene 3, from a husband who will deny his wife nothing to one who swears to kill her.',
    },
    {
      term: 'Anagnorisis',
      definition:
        "The moment of recognition, when a tragic character passes from ignorance to knowledge. Othello's comes in Act 5, Scene 2, when Emilia reveals the truth about the handkerchief.",
    },
    {
      term: 'Double time',
      definition:
        "The critics' name for the play's two clocks: a short one of about thirty-three hours on Cyprus, from the landing to the murder, and a long one implied by talk of weeks and repeated meetings.",
    },
    {
      term: 'Blank verse',
      definition:
        "Unrhymed lines of ten syllables and five stresses, the main form of the play. Its breakdown in Othello's speech in Act 4 is a sign of his collapse.",
    },
  ],

  examPractice: {
    questions: [
      {
        question:
          'Read Act 3, Scene 3 from “O, beware, my lord, of jealousy” to “Away at once with love or jealousy!” (a) What does this extract show an audience about the way Iago manipulates Othello? Refer closely to details from the extract to support your answer. (b) Write about jealousy and how it is presented at different points in the play.',
        skill:
          'GCSE-style two-part question: close reading of an extract, then an essay tracking a theme across the whole play',
        guidance: [
          "For part (a), stay inside the extract and start with Iago's method, not the plot: he warns against jealousy in order to plant it.",
          'Analyse the personification of the “green-ey’d monster”, then the see-saw rhythm of “dotes, yet doubts, suspects, yet strongly loves”.',
          "Show Othello's reply working against itself: the confident rhetorical question, the animal image of the goat, and the plain line “For she had eyes, and chose me”.",
          'End part (a) with the tragic irony of “I’ll see before I doubt”: the audience already suspects what kind of proof he will accept.',
          "For part (b), choose three or four moments across the play: Iago's own suspicion of Othello and Emilia (Act 2, Scene 1), Bianca's jealousy over the handkerchief (Act 3, Scene 4), Othello's collapse (Act 4, Scene 1) and the murder (Act 5, Scene 2).",
          "Use Emilia's definition of jealousy as a monster “Begot upon itself, born on itself” (Act 3, Scene 4) to argue that in this play jealousy needs no real cause.",
          "Spend part (b) on the play, not on background. Eduqas's own teacher guidance says context is not assessed in the GCSE Shakespeare essay and warns against spending time on it, so instead of background on honour, analyse how the play voices it, as in Othello's “A horned man’s a monster and a beast” (Act 4, Scene 1).",
          'Conclude with a judgement: is jealousy in the play a response to evidence, or a monster that feeds itself?',
        ],
      },
      {
        question:
          'How far do you agree that Othello is not jealous by nature, but is made jealous by Iago?',
        skill: 'A-level essay: argument, dramatic methods, context and critical views',
        guidance: [
          'Take a clear line in your first paragraph. One strong thesis: Othello is not naturally jealous, but he has no experience of doubt, and that makes him easy to push from suspicion to certainty.',
          "Use Act 3, Scene 3 closely: Othello's resistance (“I’ll see before I doubt; when I doubt, prove”), then the speed of the change to “Now art thou my lieutenant”.",
          "Weigh the evidence about his nature: Desdemona's belief that the sun where he was born “Drew all such humours from him” (Act 3, Scene 4) and Othello's own claim to be “one not easily jealous” (Act 5, Scene 2). Ask how reliable each speaker is.",
          "Weigh Iago's methods: echo, hesitation, the handkerchief and the staged conversation about Bianca in Act 4, Scene 1. Show that each works on something already in Othello, such as his insecurity about race, manners and age in the soliloquy beginning “This fellow’s of exceeding honesty”.",
          "Bring in context: Venice's treatment of Othello as a valued outsider, and an honour code in which a husband's standing depended on his wife.",
          "Use critical views as positions to test. Coleridge's phrase “motiveless malignity” and A. C. Bradley's treatment of Iago as Shakespeare's supreme portrait of evil shift the weight to Iago; a reading that stresses Othello's pride and self-dramatising shifts it back.",
          'Conclude by judging where the balance lies, and why.',
        ],
      },
      {
        question:
          'How far do you agree that the women of Othello are silenced by the men around them?',
        skill: 'A-level essay: gender, dramatic methods and context',
        guidance: [
          'Define silencing as the play shows it: being spoken for, being named and judged by men, and being ordered to be quiet.',
          'Desdemona: her public voice in Act 1, Scene 3 (“I do perceive here a divided duty”), her persistence for Cassio, and her quieter voice by the willow scene. Consider whether her dying answer, “Nobody; I myself”, is silence or a final choice.',
          "Emilia: from taking the handkerchief “but to please his fantasy” to refusing Iago's order to be quiet with “I will not charm my tongue; I am bound to speak”.",
          'Bianca: judged by the men around her, including Cassio, who laughs at the idea of marrying her, and Iago, who blames her for the ambush; yet she answers Emilia with “I am no strumpet, but of life as honest / As you that thus abuse me”.',
          "Use Emilia's speech in Act 4, Scene 3 (“Let husbands know / Their wives have sense like them”) as the play's clearest challenge to the men's view of women.",
          "Context: a patriarchal society in which a daughter passed from her father's authority to her husband's, so that Desdemona's marriage without consent is itself a defiance.",
          'Conclude: the women are silenced by violence, but the truth of the play is finally spoken by a woman who refused to stay silent.',
        ],
      },
      {
        question:
          "Explore the significance of Othello's final speech in Act 5, Scene 2, from “Soft you; a word or two before you go.” to “And smote him, thus.”, in relation to the play as a whole.",
        skill: 'A-level extract-based essay: close analysis linked to the whole play',
        guidance: [
          'Establish the dramatic situation: he is a prisoner whose power is “taken off”, and he wants control of the story that will be told about him.',
          'Analyse his requests and self-descriptions (“Speak of me as I am”, “loved not wisely, but too well”, “not easily jealous”) and test each against what the audience has seen.',
          'Look at the images: the pearl thrown away, the tears falling like gum from “Arabian trees”, the story of Aleppo. Link them to the travel stories of Act 1, Scene 3: Othello ends as he began, as a storyteller.',
          'Analyse the suicide on the word “thus”: he casts himself as both the Venetian and the “turban’d Turk”, the defender of the state and its enemy.',
          'Set out the two main responses, that the speech restores the nobility of Act 1, and that it is a man trying to make himself feel better about what he has done. Decide which you find more convincing, and say why.',
          "End with Lodovico's reply, “O bloody period!”, and his order to hide the bed: the last word belongs to Venice, not to Othello.",
        ],
      },
    ],
    tips: [
      'Quote short and exactly. A three-word quotation that is right and analysed is worth more than a famous line half-remembered, and editions of this play differ in spelling, so learn the version in your own copy.',
      "Track Iago's language entering Othello's: animals, poison and the word honest. Showing a change of voice across the play is one of the surest ways to build a whole-text argument.",
      "Keep the audience in view. Iago's soliloquies mean we always know more than Othello; write about what that dramatic irony makes us feel, not only what it shows.",
      "Treat race as central, not as a side issue. From the insults of Act 1 to Othello's own “Haply, for I am black”, the strongest answers show how Venetian prejudice gives Iago his material.",
      "Do not let Iago's motives take over the essay. He offers several (the promotion, the rumour about Emilia, his claim to love Desdemona) and none settles the question; that uncertainty is the point to analyse.",
      "Remember the women. Emilia's and Bianca's scenes are often skipped in revision, but answers that see how Desdemona, Emilia and Bianca are judged by the same men stand out.",
      'Use double time as a point about speed and pressure, not as a mistake for Shakespeare to be marked down for.',
    ],
  },

  modelAnswer: {
    question:
      'How far do you agree that Othello is not jealous by nature, but is made jealous by Iago?',
    paragraph:
      "Shakespeare gives Othello a clear defence against jealousy in Act 3, Scene 3, but the way he phrases it suggests that Iago's work has already begun. Othello promises to “see before I doubt; when I doubt, prove”, a carefully balanced line that presents him as a soldier who acts only on evidence, and he rests his confidence on Desdemona's free choice: “For she had eyes, and chose me.” Yet the need to say this aloud shows that Iago has made him wonder what she saw, and moments later Iago turns the same fact against her with “She did deceive her father, marrying you”, reviving Brabantio's warning from Act 1. By the end of the scene the man who would rather be exchanged “for a goat” than live in suspicion is demanding “the ocular proof”, and accepting as proof a handkerchief he has not seen and a dream that Iago admits was “but his dream”. This suggests that Othello is not jealous by nature, as Desdemona believes when she says the sun where he was born “Drew all such humours from him”, but that he is dangerously unpractised in doubt. His own maxim, that “To be once in doubt / Is once to be resolv’d”, becomes the trap: a man who cannot live with uncertainty will seize any certainty, even a false one. Iago makes him jealous, then, but Shakespeare locates the tragedy in how quickly a trusting mind turns suspicion into conviction.",
    commentary: [
      'It answers the question in its first sentence and then complicates the answer, which gives the paragraph an argument rather than a list of points.',
      "Every quotation is short, exact and embedded in the sentence, and each is followed by what it shows about Othello's mind.",
      'It tracks change across a single scene, from resistance to the demand for proof, which shows structure without retelling the plot.',
      "It links Act 3 back to Act 1 (Brabantio's warning) and forward to Act 3, Scene 4 (Desdemona's view of him), so the argument reaches across the play.",
      'It offers an interpretation of its own, that Othello is unpractised in doubt rather than jealous by nature, and presents it as a reading, which is what lifts a response from competent to strong.',
    ],
  },

  timeline: [
    {
      where: 'Act 1, Scene 1',
      title: 'Iago wakes Venice',
      summary:
        'Iago tells Roderigo that he hates Othello for promoting Cassio over him, and serves him only to serve himself. They wake the senator Brabantio at night and, in crude animal images, tell him that his daughter Desdemona has eloped with Othello.',
      setting: "A street in Venice, outside Brabantio's house, at night",
      who: ['Iago', 'Roderigo', 'Brabantio'],
      quote: 'I am not what I am',
      themes: ['Appearance vs reality', 'Race and otherness', 'Manipulation and trust'],
      tension: 3,
      significance:
        "The play opens on Iago's hatred and racist language before Othello has spoken, so the audience meets the hero first through his enemy's eyes.",
    },
    {
      where: 'Act 1, Scene 2',
      title: 'Othello will not hide',
      summary:
        'Iago warns Othello that Brabantio is coming for him. Othello refuses to hide, trusting his record, and when Brabantio arrives with armed men and accuses him of enchanting Desdemona with charms and drugs, Othello calmly stops the fight.',
      setting: 'A street in Venice at night, with torches and drawn swords',
      who: ['Othello', 'Iago', 'Cassio', 'Brabantio', 'Roderigo'],
      quote: 'Keep up your bright swords, for the dew will rust them.',
      themes: ['Race and otherness', 'Honour and reputation'],
      tension: 3,
      significance:
        "Othello's first appearance contradicts everything said about him in the opening scene: he is calm, dignified and in command.",
    },
    {
      where: 'Act 1, Scene 3',
      title: 'Before the senate',
      summary:
        'The Duke and senators, who need Othello to defend Cyprus against the Turks, hear him explain that Desdemona fell in love with the stories of his life. Desdemona confirms it and asks to go with him. Brabantio gives her up with a warning that she may deceive Othello as she deceived her father.',
      setting: 'The council chamber in Venice, at night',
      who: ['Othello', 'Desdemona', 'Brabantio', 'The Duke', 'Iago', 'Roderigo'],
      quote: 'She lov’d me for the dangers I had pass’d, / And I lov’d her that she did pity them.',
      themes: ['Race and otherness', 'Gender and marriage', 'Honour and reputation'],
      tension: 3,
      significance:
        "Othello's public triumph, and the only time in the play that the marriage is judged fairly and in the open.",
    },
    {
      where: 'Act 1, Scene 3',
      title: "Iago's plan is born",
      summary:
        "Iago mocks Roderigo's threat to drown himself and tells him again and again to put money in his purse. Alone, he says he hates Othello, repeats a rumour that Othello has slept with his wife, and begins to plan: he will persuade Othello that Cassio is too familiar with Desdemona.",
      setting: 'The emptied council chamber, late at night',
      who: ['Iago', 'Roderigo'],
      quote:
        'I have’t. It is engender’d. Hell and night / Must bring this monstrous birth to the world’s light.',
      themes: ['Manipulation and trust', 'Jealousy', 'Appearance vs reality'],
      tension: 3,
      significance:
        "The first soliloquy makes the audience Iago's confidant: the plot is announced before it begins.",
    },
    {
      where: 'Act 2, Scene 1',
      title: 'Storm and reunion on Cyprus',
      summary:
        'A storm wrecks the Turkish fleet and separates the Venetian ships. Cassio, then Desdemona with Iago and Emilia, and finally Othello land safely, and Othello greets Desdemona with overwhelming joy. Alone, Iago says he suspects both Othello and Cassio with his own wife, and resolves to put Othello into a jealousy that judgement cannot cure.',
      setting: 'A harbour on Cyprus, after a storm',
      who: ['Othello', 'Desdemona', 'Cassio', 'Iago', 'Emilia', 'Roderigo', 'Montano'],
      quote: 'If it were now to die, / ’Twere now to be most happy',
      themes: ['Jealousy', 'Gender and marriage', 'Manipulation and trust'],
      tension: 2,
      significance:
        "The height of the couple's happiness, spoken in words that sound like a premonition of death.",
    },
    {
      where: 'Act 2, Scene 3',
      title: 'The drunken brawl',
      summary:
        'On the night of the celebrations Iago gets Cassio drunk, and Roderigo provokes him into a fight in which Montano is wounded. Othello dismisses Cassio from his post. Iago advises the despairing Cassio to ask Desdemona to plead for him, and privately plans to make her pleading look like desire.',
      setting: 'The castle on Cyprus, late at night',
      who: ['Cassio', 'Iago', 'Roderigo', 'Montano', 'Othello', 'Desdemona'],
      quote: 'Reputation, reputation, reputation! O, I have lost my reputation!',
      themes: ['Honour and reputation', 'Manipulation and trust', 'Appearance vs reality'],
      tension: 4,
      significance:
        "Iago's first success: Cassio loses his place and Desdemona is drawn into the plot.",
    },
    {
      where: 'Act 3, Scene 3',
      title: 'The temptation begins',
      summary:
        'Desdemona promises Cassio she will plead for him. As Cassio slips away when Othello arrives, Iago mutters “Ha, I like not that”, and Desdemona pleads for Cassio. Then, by hints, echoes and warnings, Iago leads Othello to suspect them. Left alone, Othello wonders whether his race, his manners or his age have lost him his wife.',
      setting: 'The garden of the castle on Cyprus',
      who: ['Othello', 'Iago', 'Desdemona', 'Cassio', 'Emilia'],
      quote:
        'O, beware, my lord, of jealousy; / It is the green-ey’d monster which doth mock / The meat it feeds on.',
      themes: ['Jealousy', 'Manipulation and trust', 'Race and otherness'],
      tension: 4,
      significance: 'The turning point of the play: a mind is changed within a single scene.',
    },
    {
      where: 'Act 3, Scene 3',
      title: 'The handkerchief is dropped',
      summary:
        "Othello pushes away the handkerchief with which Desdemona tries to bind his aching head, and it falls. Emilia picks it up, because Iago has often asked her to steal it, and gives it to him; he resolves to leave it in Cassio's lodging.",
      setting: 'The garden of the castle on Cyprus',
      who: ['Desdemona', 'Othello', 'Emilia', 'Iago'],
      quote:
        'Trifles light as air / Are to the jealous confirmations strong / As proofs of holy writ.',
      themes: ['Appearance vs reality', 'Manipulation and trust', 'Gender and marriage'],
      tension: 4,
      significance:
        'A lost object becomes false evidence, and Emilia supplies it without knowing why.',
    },
    {
      where: 'Act 3, Scene 3',
      title: 'The vow of revenge',
      summary:
        "Othello turns on Iago and demands proof. Iago describes a night when Cassio spoke of Desdemona in his sleep and claims to have seen Cassio wipe his beard with her handkerchief. Othello kneels and vows revenge, demands Cassio's death within three days, and makes Iago his lieutenant.",
      setting: 'The garden of the castle on Cyprus',
      who: ['Othello', 'Iago'],
      quote: 'Now art thou my lieutenant.',
      themes: ['Jealousy', 'Manipulation and trust', 'Honour and reputation'],
      tension: 5,
      significance: 'Iago gains the place he wanted in Act 1, and the tragedy is sealed.',
    },
    {
      where: 'Act 3, Scene 4',
      title: 'The magic in the handkerchief',
      summary:
        'Othello asks Desdemona for the handkerchief and tells her an Egyptian charmer gave it to his mother. Desdemona insists it is not lost and pleads for Cassio, while Othello demands it again and again. Cassio, who found it in his room, gives it to Bianca to copy.',
      setting: 'Before the castle on Cyprus',
      who: ['Othello', 'Desdemona', 'Emilia', 'Cassio', 'Bianca', 'Iago'],
      quote: 'There’s magic in the web of it.',
      themes: ['Jealousy', 'Appearance vs reality', 'Gender and marriage'],
      tension: 4,
      significance:
        'The handkerchief gains a history and a magic, so to Othello its loss seems a sign in itself.',
    },
    {
      where: 'Act 4, Scene 1',
      title: 'The trance and the blow',
      summary:
        "Iago's crude insinuations drive Othello into a trance. Hidden, Othello watches Cassio laugh about Bianca, believes he is laughing about Desdemona, and then sees Bianca return the handkerchief to Cassio in a temper. When Lodovico arrives from Venice with orders recalling Othello, Othello strikes Desdemona in front of him.",
      setting: 'Before the castle on Cyprus',
      who: ['Othello', 'Iago', 'Cassio', 'Bianca', 'Lodovico', 'Desdemona'],
      quote: 'Is this the noble Moor, whom our full senate / Call all in all sufficient?',
      themes: ['Jealousy', 'Appearance vs reality', 'Race and otherness'],
      tension: 5,
      significance:
        'The private collapse becomes public: Venice sees what Iago has made of its general.',
    },
    {
      where: 'Act 4, Scene 2',
      title: 'The accusation',
      summary:
        'Othello questions Emilia, then accuses Desdemona of adultery, speaking to Emilia as if she kept a brothel. Desdemona, bewildered, asks Iago to help her win Othello back, while Emilia guesses exactly what has happened without knowing it is her husband. Roderigo complains that he has been cheated, and Iago persuades him to kill Cassio.',
      setting: 'A room in the castle on Cyprus',
      who: ['Othello', 'Emilia', 'Desdemona', 'Iago', 'Roderigo'],
      quote: 'I will be hang’d, if some eternal villain, / Some busy and insinuating rogue',
      themes: ['Gender and marriage', 'Appearance vs reality', 'Honour and reputation'],
      tension: 4,
      significance: 'Dramatic irony at its sharpest: Emilia describes the villain to his face.',
    },
    {
      where: 'Act 4, Scene 3',
      title: 'The willow song',
      summary:
        "Othello orders Desdemona to bed and tells her to dismiss Emilia. As Emilia helps her undress, Desdemona sings the willow song of her mother's maid Barbary, and the two women talk about unfaithful wives. Emilia argues that husbands who mistreat their wives teach them to do wrong.",
      setting: 'A room in the castle on Cyprus, at night',
      who: ['Desdemona', 'Emilia', 'Othello', 'Lodovico'],
      quote: 'Let husbands know / Their wives have sense like them',
      themes: ['Gender and marriage', 'Jealousy'],
      tension: 2,
      significance:
        "A quiet scene before the catastrophe, and the play's clearest statement of a woman's point of view.",
    },
    {
      where: 'Act 5, Scene 1',
      title: 'Ambush in the dark',
      summary:
        "In a dark street Roderigo attacks Cassio and is wounded, and Iago, unseen, cuts Cassio's leg. Othello hears Cassio's cries and leaves, believing Iago has kept his word. When Lodovico and Gratiano arrive and Iago returns with a light, he stabs the wounded Roderigo to silence him, and later tries to throw suspicion on Bianca.",
      setting: 'A street on Cyprus, at night',
      who: ['Iago', 'Roderigo', 'Cassio', 'Othello', 'Lodovico', 'Gratiano', 'Bianca', 'Emilia'],
      quote: 'He hath a daily beauty in his life / That makes me ugly.',
      themes: ['Manipulation and trust', 'Appearance vs reality'],
      tension: 4,
      significance:
        "Iago's plan begins to fail: Cassio survives, and Iago must improvise in front of witnesses.",
    },
    {
      where: 'Act 5, Scene 2',
      title: 'The murder',
      summary:
        'Othello stands over the sleeping Desdemona, determined to kill her as an act of justice. She wakes, denies giving Cassio the handkerchief and begs to live, but he smothers her. Emilia calls at the door with news of the fight, and Desdemona revives long enough to say that she dies guiltless and to blame herself, then dies.',
      setting: 'The bedchamber in the castle, lit by a single light',
      who: ['Othello', 'Desdemona', 'Emilia'],
      quote: 'Put out the light, and then put out the light',
      themes: ['Jealousy', 'Gender and marriage', 'Honour and reputation'],
      tension: 5,
      significance:
        'The catastrophe: Othello believes he is making a sacrifice, and the scene shows him committing a murder.',
    },
    {
      where: 'Act 5, Scene 2',
      title: 'Emilia speaks',
      summary:
        'Othello tells Emilia that her husband told him of the affair. Emilia calls it a lie, raises the alarm, and in front of Montano, Gratiano and Iago reveals that she found the handkerchief and gave it to Iago. Iago stabs her and runs; she asks to be laid beside her mistress and dies insisting that Desdemona was chaste.',
      setting: 'The bedchamber in the castle',
      who: ['Emilia', 'Othello', 'Iago', 'Montano', 'Gratiano'],
      quote: 'I will not charm my tongue; I am bound to speak.',
      themes: ['Gender and marriage', 'Appearance vs reality', 'Honour and reputation'],
      tension: 5,
      significance:
        'The truth is spoken, at the cost of her life, by the wife Iago treated as a fool.',
    },
    {
      where: 'Act 5, Scene 2',
      title: "Othello's last words",
      summary:
        'Iago is brought back a prisoner; Othello wounds him but cannot kill him, and Iago refuses to say another word. Letters found on Roderigo confirm the plot. Othello asks to be remembered truly, stabs himself and dies upon a kiss. Cassio is left to govern Cyprus and Iago to be punished.',
      setting: 'The bedchamber in the castle',
      who: ['Othello', 'Iago', 'Lodovico', 'Cassio', 'Gratiano', 'Montano'],
      quote: 'Speak of me as I am. Nothing extenuate, / Nor set down aught in malice.',
      themes: ['Race and otherness', 'Honour and reputation', 'Appearance vs reality'],
      tension: 5,
      significance:
        'The hero reclaims his voice as the villain gives up his, and the ending leaves the audience to judge them both.',
    },
  ],

  relationships: [
    {
      from: 'Othello',
      to: 'Desdemona',
      kind: 'husband and wife',
      note: "Married in secret and defended in public, their love rests on story and pity. Iago persuades Othello that Desdemona's kindness is desire, and the marriage ends with her murder and his suicide on the same bed.",
    },
    {
      from: 'Iago',
      to: 'Othello',
      kind: 'ensign and general',
      note: 'Othello trusts Iago completely and calls him honest almost to the end; Iago follows him, in his own words, “to serve my turn upon him”. Their kneeling vow in Act 3, Scene 3 can be read as a dark parody of a marriage.',
    },
    {
      from: 'Iago',
      to: 'Emilia',
      kind: 'husband and wife',
      note: 'Iago treats Emilia with contempt and uses her to get the handkerchief. She obeys him until she learns what he has done, then exposes him in front of witnesses, and he kills her.',
    },
    {
      from: 'Iago',
      to: 'Roderigo',
      kind: 'manipulator and dupe',
      note: "Iago takes Roderigo's money and jewels, promising him Desdemona, and uses him first to provoke Cassio and then to attack him. When Roderigo becomes a danger, Iago kills him.",
    },
    {
      from: 'Iago',
      to: 'Cassio',
      kind: 'rivals',
      note: "Iago resents Cassio's promotion and poses as his friend while ruining him. Cassio calls him honest and takes his advice, which is how Iago draws Desdemona into the plot.",
    },
    {
      from: 'Othello',
      to: 'Cassio',
      kind: 'general and lieutenant',
      note: "Cassio went between Othello and Desdemona during the courtship. Dismissed after the brawl and then suspected as Desdemona's lover, he ends the play in Othello's place as governor of Cyprus.",
    },
    {
      from: 'Desdemona',
      to: 'Emilia',
      kind: 'mistress and attendant',
      note: "Their trust grows as the men turn against them. In the willow scene they speak frankly about marriage, and Emilia dies defending her mistress's honour.",
    },
    {
      from: 'Brabantio',
      to: 'Desdemona',
      kind: 'father and daughter',
      note: 'Brabantio believes his daughter could only have loved Othello through witchcraft, and gives her up bitterly. In Act 5, Scene 2 Gratiano reports that grief at the marriage killed him.',
    },
    {
      from: 'Brabantio',
      to: 'Othello',
      kind: 'host turned accuser',
      note: 'Brabantio often invited Othello and asked for his stories, but turned against him on hearing of the marriage. His parting warning is the seed Iago plants again in Act 3.',
    },
    {
      from: 'Cassio',
      to: 'Bianca',
      kind: 'unequal lovers',
      note: 'Bianca loves Cassio and is jealous of the handkerchief; Cassio laughs at the idea of marrying her. Iago uses her twice, as the subject of the conversation Othello misreads and as a suspect after the ambush.',
    },
    {
      from: 'Lodovico',
      to: 'Desdemona',
      kind: 'cousins',
      note: 'Lodovico brings the letter recalling Othello and sees him strike Desdemona. As the voice of Venice he closes the play, ordering the bed hidden and Iago punished.',
    },
  ],

  compareWith: [
    {
      title: 'King Lear',
      href: '/revision/texts/king-lear',
      reason:
        "Another Shakespeare tragedy set for A-level, in which a father believes a deceiver over those who love him, and Edmund's reluctant showing of a forged letter works on Gloucester much as Iago's hesitations work on Othello.",
    },
    {
      title: 'The Merchant of Venice',
      href: '/revision/texts/the-merchant-of-venice',
      reason:
        "Shakespeare's other Venetian play, also on the Eduqas GCSE list: it too shows a wealthy Christian Venice judging outsiders, Shylock and the Prince of Morocco, a Moor who comes to woo.",
    },
    {
      title: 'Hamlet',
      href: '/revision/texts/hamlet',
      reason:
        'Another Shakespeare tragedy set for A-level, and a play of seeming and being: Hamlet stages a play to test a suspicion, where Iago stages scenes to create one.',
    },
  ],

  contentGuidance: [
    'violence',
    'mortality',
    'discrimination',
    'intimate_relationships',
    'mental_health',
    'crime_injustice',
    'addiction',
    'mythological_religious',
  ],

  quotesFromElsewhere: ['motiveless malignity'],

  sources: [
    {
      label:
        'Othello, Project Gutenberg eBook #1531: the modern-spelling edition held as a byte copy in src/data/full-texts/othello.ts, from which every quotation and all three passages were copied, with speakers and scenes checked by reading the whole play',
      url: 'https://www.gutenberg.org/ebooks/1531',
    },
    {
      label:
        "Folger Shakespeare Library, Othello: first published in a 1622 quarto and a 1623 Folio in a different version; the quarto's “world of sighs” against the Folio's “world of kisses” in Act 1, Scene 3",
      url: 'https://www.folger.edu/explore/shakespeares-works/othello/',
    },
    {
      label:
        'Folger Shakespeare Library, Othello, An Introduction to This Text: the Folio has about 160 lines not in the quarto, and the two differ in hundreds of words',
      url: 'https://www.folger.edu/explore/shakespeares-works/othello/an-introduction-to-this-text/',
    },
    {
      label:
        "Wikipedia, Othello: scholars date the play 1603 to 1604; performed at court by the King's Men on 1 November 1604; first printed in a 1622 quarto, then in the First Folio; the double time scheme, an estimated 33 hours on Cyprus, its discovery ascribed to John Wilson in Blackwood's Magazine, 1849 and 1850; Coleridge's marginal note on Iago's closing speech of Act 1, which it prints as “motive-hunting of motive-less Malignity”; Cinthio's ending, the ensign tortured to death for unrelated reasons and the Moor killed by Disdemona's family",
      url: 'https://en.wikipedia.org/wiki/Othello',
    },
    {
      label: 'Royal Shakespeare Company, Othello past productions: the play written around 1604',
      url: 'https://www.rsc.org.uk/othello/past-productions',
    },
    {
      label:
        "Wikipedia, Iago: Coleridge's “motiveless malignity”; A. C. Bradley on Iago as supreme among Shakespeare's evil characters; Iago has 1,097 lines, more than Othello",
      url: 'https://en.wikipedia.org/wiki/Iago',
    },
    {
      label:
        "The Literary Remains of Samuel Taylor Coleridge, Volume 2, edited by Henry Nelson Coleridge, Project Gutenberg eBook #8533, Notes on Othello: on Iago's soliloquy at the end of Act 1, Scene 3, “the motive-hunting of a motiveless malignity”, the familiar wording; Coleridge's own manuscript note, as the Shakespeare Navigators note on the phrase gives it, has no “a” and a capital M",
      url: 'https://www.gutenberg.org/ebooks/8533',
    },
    {
      label:
        'Shakespeare Navigators, A Note on "The Motive-Hunting of Motiveless Malignity": the phrase comes from a note Coleridge wrote in his copy of Shakespeare while preparing his lectures of 1818 to 1819, on the end of Act 1, Scene 3',
      url: 'https://shakespeare-navigators.ewu.edu/othello/motiveless.html',
    },
    {
      label: 'Wikipedia, A. C. Bradley: Shakespearean Tragedy (1904)',
      url: 'https://en.wikipedia.org/wiki/A._C._Bradley',
    },
    {
      label:
        "Wikipedia, Othello (character): the Renaissance term Moor was vague and inconsistent, and there is no consensus on Othello's exact origin",
      url: 'https://en.wikipedia.org/wiki/Othello_(character)',
    },
    {
      label: 'Wiktionary, ancient: an archaic noun for a flag or ensign, and for its bearer',
      url: 'https://en.wiktionary.org/wiki/ancient',
    },
    {
      label:
        "Wikipedia, Hamartia: Aristotle's term in the Poetics, and the flaw versus error-of-judgement debate",
      url: 'https://en.wikipedia.org/wiki/Hamartia',
    },
    {
      label:
        "Wikipedia, Anagnorisis: Aristotle's recognition, a change from ignorance to knowledge, and its link to peripeteia, a reversal",
      url: 'https://en.wikipedia.org/wiki/Anagnorisis',
    },
    {
      label:
        "Cinthio's tale of the Moor of Venice, trans. J. E. Taylor (1855), on Wikisource: used to check the existing page's claims about the source. The handkerchief is already in Cinthio (the ensign draws it from Disdemona's sash while she holds his little daughter); the ensign, not the Moor, beats her to death with a sand-filled stocking; the ensign is later tortured for another matter and dies; the Moor is never named, is banished and is killed by Disdemona's kin",
      url: 'https://en.wikisource.org/wiki/The_Moor_of_Venice/The_Story',
    },
    {
      label:
        "Folger Shakespeare Library, Othello, Textual Notes: at 3.3 “Her” is the 1630 second quarto's reading and “My” the Folio's; at 1.3 “sighs” is the quarto's and “kisses” the Folio's",
      url: 'https://www.folger.edu/explore/shakespeares-works/othello/textual-notes/',
    },
    {
      label:
        "Shakespeare Navigators, note to Othello 5.2: Indian is the 1622 quarto's reading, Judean (Iudean) the Folio's, taken by some editors as an allusion to Judas or to Herod",
      url: 'https://shakespeare-navigators.ewu.edu/othello/Othello_Note_5_2_347.html',
    },
    {
      label:
        'Eduqas GCSE English Literature Component 1 question paper, 15 May 2019: Othello among the six Shakespeare plays, set as an extract question (what the extract shows an audience, referring closely to details) followed by an essay on a character or theme at different points in the play',
      url: 'https://www.eduqas.co.uk/media/dv4jhle3/11-english-literature-component-1-paper-2019.pdf',
    },
    {
      label:
        'WJEC Eduqas teacher guidance, Component 1 Section A, the Shakespeare essay question: contextual factors are not assessed in the essay, and candidates should range across the whole play',
      url: 'https://resource.download.wjec.co.uk/vtc/2016-17/gft/eduqas/english/C1SA-The%20Essay%20Question.pdf',
    },
    {
      label:
        "Held editions of King Lear, The Merchant of Venice and Hamlet in src/data/full-texts: checked for the comparison notes (Edmund's letter shown to Gloucester, the Prince of Morocco, Hamlet's play to catch the King's conscience)",
    },
  ],
}
