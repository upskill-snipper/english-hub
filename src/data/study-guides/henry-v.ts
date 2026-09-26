import type { StudyGuide } from '@/lib/study-guides/types'

/**
 * Henry V, William Shakespeare (probably written 1599). A SUPPLEMENT: the page at
 * /revision/texts/henry-v already carries an overview, context, themes,
 * characters and key quotations, and this file adds what it lacked, mounted
 * below it: passages for close reading, language, structure and form,
 * vocabulary, exam practice and a model answer, plus the timeline and character
 * map the animations draw.
 *
 * Every quotation in this file, including every quoted phrase in its prose, was
 * copied from the byte copy of Project Gutenberg #1521 held at
 * src/data/full-texts/henry-v.ts, and its speaker and scene were checked by
 * reading the whole play in that edition, not by searching for the phrase.
 *
 * WHAT THE HELD EDITION LACKS. The held file begins at Act 1, Scene 1: its
 * parser dropped the Prologue ("O for a Muse of fire"), which the Gutenberg
 * original does contain. Because the guide test checks every quotation against
 * the held file, the Prologue is described here in the guide's own words and
 * never quoted. The Choruses to Acts 2 to 5 and the Epilogue are held, appended
 * to the end of the scene before each. The soliloquy "Upon the King!" (4.1) is
 * held as one run-on line, its verse lineation lost, so it is quoted in phrases
 * here and never printed as a passage with invented line breaks.
 *
 * WHY EVERY QUOTATION SITS WITHIN ONE LINE OF THE HELD FILE. The guide test
 * normalises the raw .ts source, where line breaks are the two characters
 * backslash and n; the backslash becomes a space and the n survives, so "of\ngreen"
 * reads as "of ngreen" and any quotation crossing a line break fails. That is
 * why "a babbled of green fields" is not used, and why the Williams debate in
 * 4.1, which is wrapped prose, is summarised rather than printed as an extract.
 * Verse extracts pass because each line is checked separately.
 *
 * WHERE THIS DIFFERS FROM THE PAGE ABOVE, deliberately, because the page is
 * wrong or overstated:
 * - Act 5, Scene 2: the French King and the councils withdraw to study the
 *   articles while Henry woos Katherine, and return having agreed them. The
 *   treaty is not signed before the wooing.
 * - Act 5, Scene 1: this edition, like the Folger, reads "my Doll is dead"; the
 *   MIT (Globe) text reads "my Nell". The page states as fact that Pistol's wife
 *   Mistress Quickly has died; the guide says editions differ.
 * - Act 4, Scenes 6 and 7: Henry's order to kill the prisoners comes at the end
 *   of 4.6, on a new alarm; the killing of the boys is first reported at the
 *   start of 4.7, where Gower gives it as the reason. The page runs the two
 *   together as cause and effect.
 *
 * SECOND PASS, 25 September 2026. Every quotation and quoted phrase was located
 * again in the held edition by a script that reports the scene and speaker of
 * each hit, and the attributions here were checked against that output. Four
 * details were tightened: Henry tells Williams he serves under Erpingham, not
 * that he is an officer; the French King signs the heir clause last, at Henry's
 * request; the Epilogue's "Small time" opens its second quatrain rather than
 * being its turn; and Henry VI "became king" as a baby, which is true both of
 * the Epilogue and of history, where his coronation came years later.
 *
 * THIRD PASS, 26 September 2026 (adversarial fact-check). Every quotation was
 * located again in the held edition with its speaker; all stand. Plot details
 * were corrected where the prose outran the text: the Crispin extract is now the
 * whole speech, with no cuts, so nothing is dropped from its middle; in 3.7 it is
 * the Constable who mocks the Dauphin while Orleans defends him; in 3.2 only
 * Fluellen and Macmorris quarrel; in 3.6 Bardolph is condemned, not hanged on
 * stage, and it is Gower who tells Fluellen that Pistol is a fraud; in 4.7 Gower
 * gives the looting of the King's tent as well as the killing of the boys as the
 * reason for the order; in 4.8 Exeter, not Henry, fills the glove; Falstaff dies
 * before the army sails, not in the war, and was Hal's companion in Henry IV,
 * not Richard II; and the 1415 campaign began with the landing in August, not
 * with the fall of Harfleur.
 */
export const guide: StudyGuide = {
  slug: 'henry-v',
  title: 'Henry V',
  author: 'William Shakespeare',
  form: 'play',
  scope:
    'The whole play: the Prologue, five acts with a speech by the Chorus before each of Acts 2 to 5, and the Epilogue. Not currently prescribed by any board this site covers, so the exam practice is written for GCSE and A-level English Literature in general.',
  rights: {
    status: 'public-domain',
    acknowledgement:
      'First printed in a much shorter quarto in 1600, which has no Chorus, and in the First Folio of 1623, on which modern editions are based. Quotations follow the Project Gutenberg modern-spelling edition (eBook #1521); editions differ in places, so check wording against your own copy.',
  },

  native: {
    overview: '/revision/texts/henry-v',
    context: '/revision/texts/henry-v',
    themes: '/revision/texts/henry-v',
    characters: '/revision/texts/henry-v',
    keyQuotes: '/revision/texts/henry-v',
  },

  extracts: [
    {
      title: 'Henry at the breach',
      where: 'Act 3, Scene 1',
      pointer:
        'The whole of the scene: Henry’s speech before the walls of Harfleur, from “Once more unto the breach, dear friends, once more” to “God for Harry! England and Saint George!”',
      text: 'Once more unto the breach, dear friends, once more, / Or close the wall up with our English dead. / In peace there’s nothing so becomes a man / As modest stillness and humility; / But when the blast of war blows in our ears, / Then imitate the action of the tiger; / Stiffen the sinews, summon up the blood, / Disguise fair nature with hard-favour’d rage; / Then lend the eye a terrible aspect; / Let it pry through the portage of the head / Like the brass cannon; let the brow o’erwhelm it / As fearfully as does a galled rock / O’erhang and jutty his confounded base, / Swill’d with the wild and wasteful ocean. / Now set the teeth and stretch the nostril wide, / Hold hard the breath, and bend up every spirit / To his full height. On, on, you noblest English, / Whose blood is fet from fathers of war-proof! / Fathers that, like so many Alexanders, / Have in these parts from morn till even fought, / And sheath’d their swords for lack of argument. / Dishonour not your mothers; now attest / That those whom you call’d fathers did beget you. / Be copy now to men of grosser blood, / And teach them how to war. And you, good yeomen, / Whose limbs were made in England, show us here / The mettle of your pasture; let us swear / That you are worth your breeding, which I doubt not; / For there is none of you so mean and base, / That hath not noble lustre in your eyes. / I see you stand like greyhounds in the slips, / Straining upon the start. The game’s afoot! / Follow your spirit, and upon this charge / Cry, “God for Harry! England and Saint George!”',
      annotations: [
        {
          phrase: 'Or close the wall up with our English dead',
          note: 'The alternative to victory is stated in the second line: if the breach is not taken, English bodies will fill it. Henry makes death part of the building work of the siege, and the plain monosyllables keep the image unsoftened.',
        },
        {
          phrase: 'In peace there’s nothing so becomes a man',
          note: 'The speech admits that the ideal man is gentle, with “modest stillness and humility”, before asking for the opposite. War is presented as a change of role for a season, which is how Henry makes violence acceptable to men he calls “dear friends”.',
        },
        {
          phrase: 'Disguise fair nature with hard-favour’d rage',
          note: 'The key verb is “Disguise”. Courage here is a costume put on over a man’s “fair nature”, and “imitate the action of the tiger” asks for acting too. The speech about fighting is also a speech about performance, which is the play’s own subject.',
        },
        {
          phrase: 'Like the brass cannon',
          note: 'The simile turns the soldier’s eye into a gun looking out through the “portage” of the skull, and the following simile makes his brow an overhanging rock. The men are asked to become the weapons and landscape of war, not merely to use them.',
        },
        {
          phrase: 'The mettle of your pasture',
          note: 'Henry turns from the nobles to the “good yeomen”, small farmers who owned their land, and praises the English land that bred them: “mettle” means spirit or courage, and “pasture” the fields that fed them. In Shakespeare’s time mettle and metal were one word, so the phrase can also suggest men tempered like weapons by English soil.',
        },
        {
          phrase: 'like greyhounds in the slips',
          note: 'The closing simile is from hunting: dogs straining at the leash before the hare is released. With “The game’s afoot!” war becomes a sport and the soldiers eager animals, a flattering image that also hides the danger they face.',
        },
        {
          phrase: 'God for Harry! England and Saint George!',
          note: 'The final war cry joins God, the king by his familiar name, the nation and its patron saint in one breath. Henry ends by giving the men words to shout, so the speech closes by putting his rhetoric into their mouths.',
        },
      ],
      question:
        'How does Shakespeare use language and structure in this speech to show Henry persuading his soldiers to fight? Refer closely to the extract.',
    },
    {
      title: 'Henry’s prayer before the battle',
      where: 'Act 4, Scene 1',
      pointer:
        'Henry alone at the end of the scene, after his argument with Williams and his speech on ceremony: from “O God of battles! steel my soldiers’ hearts” to “Imploring pardon.”',
      text: 'O God of battles! steel my soldiers’ hearts. / Possess them not with fear. Take from them now / The sense of reckoning, if the opposed numbers / Pluck their hearts from them. Not today, O Lord, / O, not today, think not upon the fault / My father made in compassing the crown! / I Richard’s body have interred new, / And on it have bestow’d more contrite tears / Than from it issued forced drops of blood. / Five hundred poor I have in yearly pay, / Who twice a day their wither’d hands hold up / Toward heaven, to pardon blood; and I have built / Two chantries, where the sad and solemn priests / Sing still for Richard’s soul. More will I do; / Though all that I can do is nothing worth, / Since that my penitence comes after all, / Imploring pardon.',
      annotations: [
        {
          phrase: 'steel my soldiers’ hearts',
          note: 'The metaphor asks God to harden the men’s courage like metal, the work Henry’s own speeches have been doing. In private he admits that his army’s courage is not something he can guarantee himself.',
        },
        {
          phrase: 'The sense of reckoning',
          note: '“Reckoning” means counting, so Henry asks God to stop his men counting the French numbers. It is also the word Williams used minutes earlier, when he said that if the cause were bad the King would face “a heavy reckoning” for the dead. The echo suggests the argument has stayed with him.',
        },
        {
          phrase: 'think not upon the fault',
          note: 'The repeated “Not today, O Lord, / O, not today” is urgent and almost bargaining. The “fault” is his father’s seizure of the crown from Richard II, so on the eve of battle Henry admits that his own title rests on a crime.',
        },
        {
          phrase: 'I Richard’s body have interred new',
          note: 'Henry lists what he has done to make amends: reburying Richard, weeping more tears over his body than the blood forced from it, paying five hundred poor people to pray, and building two chantries. The list sounds like an account being settled, which fits the language of reckoning.',
        },
        {
          phrase: 'Though all that I can do is nothing worth',
          note: 'The prayer turns on this admission. Penance that “comes after all” cannot undo the wrong, and Henry still wears the crown it won. One reading finds a sincere conscience here; another finds a king who knows that no amount of piety can make his claim clean.',
        },
      ],
      question:
        'How does Shakespeare present Henry’s private thoughts about guilt and responsibility in this prayer, and how does it change the audience’s view of him after his argument with Williams earlier in Act 4, Scene 1?',
    },
    {
      title: 'The feast of Crispian',
      where: 'Act 4, Scene 3',
      pointer:
        'Henry’s whole reply to Westmorland’s wish for more men, printed without cuts: from “What’s he that wishes so?” to “That fought with us upon Saint Crispin’s day.”',
      text: 'What’s he that wishes so? / My cousin Westmorland? No, my fair cousin. / If we are mark’d to die, we are enough / To do our country loss; and if to live, / The fewer men, the greater share of honour. / God’s will! I pray thee, wish not one man more. / By Jove, I am not covetous for gold, / Nor care I who doth feed upon my cost; / It yearns me not if men my garments wear; / Such outward things dwell not in my desires; / But if it be a sin to covet honour, / I am the most offending soul alive. / No, faith, my coz, wish not a man from England. / God’s peace! I would not lose so great an honour / As one man more, methinks, would share from me / For the best hope I have. O, do not wish one more! / Rather proclaim it, Westmorland, through my host, / That he which hath no stomach to this fight, / Let him depart. His passport shall be made, / And crowns for convoy put into his purse. / We would not die in that man’s company / That fears his fellowship to die with us. / This day is call’d the feast of Crispian. / He that outlives this day, and comes safe home, / Will stand a tip-toe when this day is named, / And rouse him at the name of Crispian. / He that shall live this day, and see old age, / Will yearly on the vigil feast his neighbours, / And say, “Tomorrow is Saint Crispian.” / Then will he strip his sleeve and show his scars, / And say, “These wounds I had on Crispian’s day.” / Old men forget; yet all shall be forgot, / But he’ll remember with advantages / What feats he did that day. Then shall our names, / Familiar in his mouth as household words, / Harry the King, Bedford, and Exeter, / Warwick and Talbot, Salisbury and Gloucester, / Be in their flowing cups freshly remembered. / This story shall the good man teach his son; / And Crispin Crispian shall ne’er go by, / From this day to the ending of the world, / But we in it shall be remembered, / We few, we happy few, we band of brothers. / For he today that sheds his blood with me / Shall be my brother; be he ne’er so vile, / This day shall gentle his condition; / And gentlemen in England now abed / Shall think themselves accurs’d they were not here, / And hold their manhoods cheap whiles any speaks / That fought with us upon Saint Crispin’s day.',
      annotations: [
        {
          phrase: 'The fewer men, the greater share of honour',
          note: 'Henry turns the army’s weakness into its advantage by treating honour as a fixed treasure divided among those present. The balanced comparison, fewer and greater, makes a desperate situation sound like good fortune.',
        },
        {
          phrase: 'if it be a sin to covet honour',
          note: 'Henry has just said he is “not covetous for gold” and that “outward things” mean nothing to him; now he confesses to a sin in order to boast of it. The admission links him to the play’s competing ideas of honour: the French lords’ vanity, Pistol’s pretence, and a king who claims to want nothing but glory.',
        },
        {
          phrase: 'Let him depart. His passport shall be made',
          note: 'The offer of a safe-conduct and travel money is a shrewd move: nobody on stage accepts it, so the whole army appears to choose to stay. Freedom offered in public becomes pressure to remain.',
        },
        {
          phrase: 'Then will he strip his sleeve and show his scars',
          note: 'Henry imagines the future before the battle has begun, turning wounds into trophies shown off at a neighbours’ feast. Contrast Pistol in Act 5, Scene 1, who plans to pass off the bruises of a cudgelling as wounds from the French wars.',
        },
        {
          phrase: 'Harry the King, Bedford, and Exeter',
          note: 'The list of names that will be “Familiar in his mouth as household words” is a list of lords. The common soldiers are promised remembrance, but the names to be remembered are the nobles’.',
        },
        {
          phrase: 'We few, we happy few, we band of brothers',
          note: 'The tricolon builds from “few” to “happy few” to “band of brothers”, and the repeated “we” includes speaker and listeners in one group. Numbers that should frighten the army become a mark of distinction.',
        },
        {
          phrase: 'This day shall gentle his condition',
          note: '“Gentle” is used as a verb: to make someone a gentleman. Henry promises that shared blood will raise the lowest soldier in rank. Set it beside the English casualty list in Act 4, Scene 8, where after four named men come “None else of name”.',
        },
      ],
      question:
        'Starting with this speech, explore how Shakespeare presents ideas about honour in Henry V. Write about the speech and about the play as a whole.',
    },
  ],

  languageAnalysis: [
    {
      technique: 'Imperatives that script the body',
      example:
        'At Harfleur Henry commands “Stiffen the sinews, summon up the blood”, then “set the teeth and stretch the nostril wide, / Hold hard the breath” (Act 3, Scene 1).',
      effect:
        'The verbs move part by part through the body, sinews, blood, eye, brow, teeth, nostril, breath, as if Henry were a drill sergeant or a director. The alliteration of “Stiffen”, “sinews” and “summon” gives the lines a hissing force. The method shows his power: he does not ask men to feel brave, he tells them how to look brave, and trusts the feeling to follow.',
    },
    {
      technique: 'Animal imagery and war as hunting',
      example:
        'Henry’s soldiers are to “imitate the action of the tiger” and stand “like greyhounds in the slips” (Act 3, Scene 1); in the French camp Orleans calls English mastiffs “Foolish curs”, and the Constable says that, fed on beef, the English will eat like wolves and “fight like devils” (Act 3, Scene 7).',
      effect:
        'Both sides describe men as animals, but to opposite ends. Henry’s images make his soldiers fierce and eager; the French images make the English stupid beasts to be crushed. Shakespeare lets the audience enjoy the French arrogance knowing Agincourt is coming, and also notice that Henry’s own rhetoric needs his men to stop being fully human.',
    },
    {
      technique: 'Extended pun turned into threat',
      example:
        'Replying to the Dauphin’s tennis balls, Henry says “When we have match’d our rackets to these balls” he will play a set in France, and that the mock “Hath turn’d his balls to gun-stones” (Act 1, Scene 2).',
      effect:
        'Henry keeps up the Dauphin’s tennis joke, promising to play a “set” in France, and then turns it into the language of cannon. His control is the point: the jest is met with wit, not rage. The speech also names the cost, “many a thousand widows”, and places the blame on the Dauphin’s scorn, a move Henry repeats at Harfleur.',
    },
    {
      technique: 'Rhetorical questions that move the blame',
      example:
        'To the Governor of Harfleur: “What is’t to me, when you yourselves are cause”, and War is personified as “impious War, / Array’d in flames like to the prince of fiends” (Act 3, Scene 3).',
      effect:
        'The questions expect no answer and hand responsibility to the townspeople: if they do not yield, what follows is their fault. Personifying War as a devil also separates Henry from his own soldiers’ violence, as if it were a force he could not rein in. The comparison with “the wives of Jewry” and “Herod’s bloody-hunting slaughtermen” casts his own army, briefly, as Herod’s killers.',
    },
    {
      technique: 'Apostrophe and personification in soliloquy',
      example:
        'Alone after the soldiers leave, Henry addresses “thou idol Ceremony” and demands “O Ceremony, show me but thy worth!” (Act 4, Scene 1).',
      effect:
        'By speaking to ceremony as if it were a false god, Henry turns the rituals that make him king into an object of doubt. The questions pile up, what are its rents, what is its soul, and the answer implied is nothing but show. With the prayer that follows, it is the longest stretch in which the audience hears Henry think aloud, and it complicates the confident public voice.',
    },
    {
      technique: 'Repetition and religious allusion in the traitors’ scene',
      example:
        'Henry repeats “Why, so didst thou” four times to Scroop, and calls his betrayal “Another fall of man” (Act 2, Scene 2).',
      effect:
        'The repeated phrase answers each virtue a man might show with Scroop’s false show of it, so that every sign of goodness becomes suspect. The allusion to the Fall in Genesis raises a political crime to a spiritual one. The speech is also a performance before the court, reminding everyone that Henry sees through appearances.',
    },
    {
      technique: 'Tricolon and simple inclusive language',
      example: '“We few, we happy few, we band of brothers” (Act 4, Scene 3).',
      effect:
        'After a speech rich in names and ceremony, the climax is almost all single syllables. The triple structure rises to its final phrase, and “we” binds king and soldiers together. The plainness is the art: the line is easy to remember and to repeat, which is what Henry promises his men will do each Crispin’s Day.',
    },
    {
      technique: 'Plainness as a style of persuasion',
      example:
        'Wooing Katherine in prose, Henry says she would find him “such a plain king” that she would think he had sold his farm to buy his crown, offers her “plain and uncoined constancy”, and ends one run with “take a soldier, take a king” (Act 5, Scene 2).',
      effect:
        'Henry claims he has no gift for fine words while using chiasmus, repetition and balanced clauses. The pose of the blunt soldier is itself a technique, the same one he used with the troops. When Katherine refuses a kiss before marriage he overrules her with “O Kate, nice customs curtsy to great kings”, which shows the power under the plain style.',
    },
    {
      technique: 'Dialect and idiolect',
      example:
        'Fluellen’s “look you”, his mispronounced “Alexander the Pig” (Act 4, Scene 7), and the Irish captain’s angry “What ish my nation?” (Act 3, Scene 2).',
      effect:
        'The Welsh, Irish and Scottish captains are written in phonetic accents, and the scenes are played for comedy. The dialect also marks a British army made of four peoples who do not yet understand one another. Macmorris’s question is funny in its accent and serious in its content, and it is never answered.',
    },
    {
      technique: 'Mock-heroic bombast',
      example:
        'Pistol’s “Let floods o’erswell, and fiends for food howl on!” (Act 2, Scene 1), which the Boy later sums up as “so full a voice issue from so empty a heart” (Act 4, Scene 4).',
      effect:
        'Pistol speaks a swollen, old-fashioned heroic verse, heavy with alliteration, about nothing much. He parodies the grand style that Henry uses so well, and invites the audience to ask what separates the King’s great words from Pistol’s empty ones: courage, results, or only rank.',
    },
    {
      technique: 'Providential language',
      example:
        'Canterbury says that when Henry’s father died “Consideration like an angel came / And whipped th’ offending Adam out of him” (Act 1, Scene 1); after the casualty lists Henry cries “O God, thy arm was here” (Act 4, Scene 8).',
      effect:
        'The play frames Henry’s life and his victory in religious terms, from his conversion to the claim that God fought at Agincourt. Believers in the audience could take this at its word. The play also shows the Church with money at stake and Henry praying for his father’s guilt to be forgotten, so the same language can be read as sincere faith or as a political tool.',
    },
  ],

  structureForm: [
    {
      heading: 'A Chorus that frames and bridges',
      body: 'The Chorus speaks the Prologue, returns before Acts 2, 3, 4 and 5, and closes the play. He apologises that a small wooden playhouse cannot hold the fields of France, asks the audience to imagine horses and multiply soldiers, and carries the action across the sea and back again. His last lines before Act 3 ask them to “eke out our performance with your mind”, and before Agincourt he apologises in advance for “four or five most vile and ragged foils”. None of this is in the 1600 quarto, which has no Chorus: it belongs to the Folio text most students read. The effect is to make the audience partners in the patriotic story, and to keep reminding them that it is a story.',
    },
    {
      heading: 'The Chorus against the scenes',
      body: 'The Chorus often describes a world the next scene does not quite show. Before Act 2 he says “honour’s thought / Reigns solely in the breast of every man”; the first scene of the act shows Nym and Pistol drawing swords over a woman and a debt of eight shillings. Before Act 4 he offers “A little touch of Harry in the night”, a king who comforts every soldier; in the next scene Henry, in disguise, is challenged by a soldier who doubts his cause. One reading treats the Chorus as the official version of events, which the play then tests. Another sees the gap as honest: the Chorus says what Henry means to his people, and the scenes show what that costs. Either way, the gap is a structural method worth naming.',
    },
    {
      heading: 'High scenes and low scenes',
      body: 'Shakespeare alternates the court and the battlefield with the tavern world of Eastcheap. The effect is counterpoint. Henry’s “On, on, you noblest English” at Harfleur is followed at once by Bardolph’s “On, on, on, on, on! To the breach, to the breach!” and Nym’s “The knocks are too hot”, then by the Boy’s account of his masters stealing. The comic scenes deflate the heroic ones, and by the end the tavern world is gone: Falstaff dead before the army sails, then, in France, Bardolph and Nym hanged, the Boy apparently among the boys killed at the luggage, and Pistol creeping home.',
    },
    {
      heading: 'Verse, prose and which Henry speaks',
      body: 'Henry speaks verse as king, in council, at Harfleur and at Agincourt. Disguised among his soldiers in Act 4, Scene 1 he speaks prose, the language of ordinary men, and when they leave he returns to verse for his soliloquy and prayer. In the wooing he speaks prose again, and claims plainness. The French lords chat in prose the night before the battle, idle and boastful, and Pistol talks in a comic imitation of old heroic verse. Tracking the form tells you which role Henry is playing, and it supports the reading that his kingship is a set of performances.',
    },
    {
      heading: 'Paired scenes: each triumph has a shadow',
      body: 'Much of the play is built in pairs. In Act 2, Scene 2 Henry pardons a drunk who railed at him, then refuses mercy to the traitors, telling them “The mercy that was quick in us but late” has been killed by their own advice. The rousing Harfleur speech is followed two scenes later by the threats to the town. The St Crispin’s Day promise of brotherhood is followed by Henry’s order to kill the prisoners. Montjoy the herald comes three times, twice to demand ransom and the third time to ask leave to bury the French dead, when Gloucester notes “His eyes are humbler than they us’d to be”. The repetitions measure the change of fortune.',
    },
    {
      heading: 'The order of events at Agincourt',
      body: 'At the end of Act 4, Scene 6, hearing a “new alarum” and seeing that “The French have reinforc’d their scatter’d men”, Henry orders “Then every soldier kill his prisoners”. Only at the start of 4.7 do Fluellen and Gower report that French runaways have killed the boys guarding the luggage and looted the King’s tent, and Gower says that is why the King, “most worthily”, has had every soldier cut his prisoner’s throat, adding “O, ’tis a gallant king!” The Boy had warned in 4.4 that the luggage was guarded only by boys. Shakespeare lets two explanations stand: military necessity in the scene order, and revenge in Gower’s account. Strong answers notice which one they are using.',
    },
    {
      heading: 'History compressed',
      body: 'Historically, Henry landed in France in August 1415, Harfleur surrendered on 22 September and Agincourt was fought on 25 October, but the Treaty of Troyes that made Henry heir of France was not sealed until 21 May 1420. The play moves straight from the victory to the peace, with the Act 5 Chorus asking the audience to “brook abridgement”. It is also the last of four plays that follow the same royal line, after Richard II and the two parts of Henry IV. Falstaff, Henry’s companion in the two parts of Henry IV, never appears here: he is dying offstage, “The King has kill’d his heart” says the Hostess, and in Act 4 Fluellen recalls how Henry “turn’d away the fat knight”. The absent Falstaff is a structural reminder of what the King gave up.',
    },
    {
      heading: 'The glove plot',
      body: 'The quarrel with Williams in Act 4, Scene 1 ends with an exchange of gloves as a pledge to fight later. Henry gives Williams’s glove to Fluellen in 4.7, Williams strikes Fluellen in 4.8, and Henry reveals himself and has Exeter fill the glove with crowns. Williams’s defence, “Your Majesty came not like yourself”, puts the blame on the disguise, and he refuses Fluellen’s shilling: “I will none of your money.” Structurally, the serious night-time argument about a king’s responsibility is resolved not by an answer but by a joke and a payment, which some readers find generous and others find evasive.',
    },
    {
      heading: 'A sonnet to end a war play',
      body: 'The Epilogue is a sonnet of fourteen lines rhymed in the Shakespearean pattern: pen and men, story and glory, through to a closing couplet on sake and take. The form of love poetry closes a play about conquest, and its second quatrain opens on “Small time”: Henry’s life was short, his son became king “in infant bands”, and those who governed for him “lost France and made his England bleed”. The line “Which oft our stage hath shown” reminds the audience that they already know the sequel. The ending undercuts the triumph without cancelling it, which is why it is such good evidence in an essay about how far the play celebrates Henry.',
    },
  ],

  vocabulary: [
    {
      term: 'Chorus',
      definition:
        'In this play, a single speaker who addresses the audience directly before the action, before Acts 2 to 5 and at the end, to describe what the stage cannot show and to link the scenes.',
    },
    {
      term: 'Prologue and Epilogue',
      definition:
        'The opening and closing speeches of a play. Here both are spoken by the Chorus, and the Epilogue is written as a sonnet.',
    },
    {
      term: 'Salic law',
      definition:
        'The rule used in France to bar women from inheriting the crown and from passing a claim to it through the female line. England’s kings claimed France through Edward III’s mother, so Canterbury argues in Act 1, Scene 2 that the law does not apply to France at all.',
    },
    {
      term: 'Dauphin',
      definition:
        'The title of the eldest son and heir of the King of France. In the play he sends Henry the tennis balls and is the most scornful of the French lords.',
    },
    {
      term: 'Constable of France',
      definition:
        'One of the great officers of the French crown. In the play the Constable leads the French army, warns the Dauphin not to underestimate Henry, and is among the dead listed after Agincourt.',
    },
    {
      term: 'Herald',
      definition:
        'An officer who carries formal messages between rulers or armies, recognised by his coat. Montjoy is the French herald, who tells Henry “You know me by my habit.”',
    },
    {
      term: 'Ransom',
      definition:
        'Money paid to free a prisoner. Noble prisoners were valuable, which is why the French repeatedly ask what ransom Henry will pay, and why Pistol bullies his captive for crowns.',
    },
    {
      term: 'Breach',
      definition:
        'A gap broken in a wall or defence by an attack, as at Harfleur in Act 3, Scene 1.',
    },
    {
      term: 'Parley',
      definition:
        'A conference between enemies, usually to discuss terms. “The town sounds a parley” at the end of Act 3, Scene 2, signalling that Harfleur will talk.',
    },
    {
      term: 'Gage',
      definition:
        'A pledge, such as a glove, given or thrown down as a challenge to fight. Henry and Williams exchange gloves as gages in Act 4, Scene 1.',
    },
    {
      term: 'Pax',
      definition:
        'A small carved or painted tablet with a holy image, kissed during Mass. Bardolph is hanged for stealing one from a church in France.',
    },
    {
      term: 'Ancient',
      definition:
        'An old word for an ensign, the officer who carried the company’s flag. It is Pistol’s rank, so Fluellen calls him Anchient Pistol.',
    },
    {
      term: 'Leek',
      definition:
        'The Welsh emblem, worn on St David’s Day, 1 March. Fluellen wears one, Henry says he wears it too “For I am Welsh”, and Pistol is made to eat one.',
    },
    {
      term: 'St Crispin’s Day',
      definition:
        'The feast of Saints Crispin and Crispinian, patron saints of shoemakers and leather workers, on 25 October. The Battle of Agincourt was fought on that day in 1415.',
    },
    {
      term: 'Chantry',
      definition:
        'A chapel, or a gift of money, for priests to sing masses for a dead person’s soul. Henry says he has built two for the soul of Richard II.',
    },
    {
      term: 'Usurpation',
      definition:
        'Taking a throne by force rather than by right. Henry’s father took the crown from Richard II, which is why Henry prays “Not today, O Lord” before the battle.',
    },
    {
      term: 'Ceremony',
      definition:
        'In Henry’s soliloquy in Act 4, Scene 1, the outward show and ritual of royal power: titles, crowns, bowing subjects. He asks what it is worth.',
    },
    {
      term: 'Soliloquy',
      definition:
        'A speech a character makes alone on stage, revealing thoughts to the audience. Henry’s two in Act 4, Scene 1, on ceremony and then in prayer, follow his argument with the soldiers.',
    },
    {
      term: 'Blank verse',
      definition:
        'Unrhymed lines of ten syllables with five stresses (iambic pentameter). Henry’s public speeches use it; his disguised talk and his wooing are in prose.',
    },
    {
      term: 'History play',
      definition:
        'A play dramatising events from a nation’s past, usually the reigns of its kings. Henry V is the last of a sequence of four, after Richard II and the two parts of Henry IV.',
    },
    {
      term: 'Rhetoric',
      definition:
        'The art of persuasive speech, and the techniques it uses: repetition, questions, lists, imagery. The play is full of speeches designed to move listeners to act.',
    },
  ],

  examPractice: {
    questions: [
      {
        question:
          'Read Act 3, Scene 1, from “Once more unto the breach, dear friends, once more” to “God for Harry! England and Saint George!”. Starting with this speech, explore how Shakespeare presents Henry as a leader. Write about how Shakespeare presents Henry in this speech and in the play as a whole.',
        skill:
          'Extract and whole-text response: language analysis, whole-text knowledge and context',
        guidance: [
          'Open with an argument, not a summary: for example, that Shakespeare presents Henry’s leadership as a set of performances, some inspiring and some frightening, and asks the audience to judge them.',
          'Analyse the extract closely: the imperatives that direct the body, the animal and hunting imagery, and the admission in “Disguise fair nature” that courage is acted.',
          'Comment on the speech’s structure: it moves from “dear friends” to “you noblest English” to “good yeomen”, gathering every rank, and ends by giving the soldiers words to shout.',
          'Move to what surrounds it: Bardolph’s comic echo in Act 3, Scene 2, and the threats to the Governor in 3.3, where the same voice turns from inspiring soldiers to terrifying civilians.',
          'Range across the play: the controlled anger of the tennis-ball reply (1.2), the trap for the traitors (2.2), the doubts in disguise (4.1), St Crispin’s Day (4.3), the order to kill the prisoners (4.6) and the wooing (5.2).',
          'Use context to explain, not decorate: the ideal of a Christian warrior king, the Chorus’s praise of “the mirror of all Christian kings”, and how productions differ, such as Olivier’s wartime film of 1944 cutting the darker scenes.',
          'End with a judgement: is Henry an inspiring leader, a skilful manipulator, or both at once, and which moment in the play settles it for you?',
        ],
      },
      {
        question: 'How does Shakespeare present the cost of war in Henry V?',
        skill: 'Whole-text essay: themes, methods and context',
        guidance: [
          'Set up a thesis: the play celebrates victory but keeps counting its cost, in widows, in executions, in the tavern world destroyed, and in a victory lost within a generation.',
          'Start with the language of cost in Act 1 and Act 2: Henry’s “many a thousand widows” in 1.2 and Exeter’s “the widows’ tears, the orphans’ cries” in 2.4. Note that both speeches blame the French for them.',
          'Trace the fate of the Eastcheap characters: Falstaff’s death (2.3), Bardolph condemned for stealing the pax (3.6), the Boy’s report that Bardolph and Nym are both hanged (4.4), the boys killed at the luggage (4.7), and Pistol’s plan to steal home and lie about his scars (5.1).',
          'Analyse Williams in Act 4, Scene 1: the “legs and arms and heads, chopp’d off” that will cry out at the Day of Judgement, and the wives and children left poor. This is the cost seen from below.',
          'Weigh Agincourt itself: Exeter’s account of York and Suffolk dying together is noble and moving, but it sits beside the order to kill the prisoners and a casualty list that names only four English dead and adds “None else of name”.',
          'Use Burgundy’s speech in 5.2, with France’s gardens and vineyards running wild, “naked, poor, and mangled Peace”, as the cost to the land.',
          'Conclude with the Epilogue: those who ruled for Henry’s son lost France and “made his England bleed”. Does this make the play anti-war, or a celebration with its eyes open?',
        ],
      },
      {
        question:
          'Some readers see Henry V as a celebration of an ideal Christian king; others see a study of a ruthless politician who is very good at appearing ideal. Consider both views, with reference to Shakespeare’s methods and to the contexts in which the play has been written and received.',
        skill: 'A-level essay: argument, critical interpretation, methods and context',
        guidance: [
          'Frame the debate with critics. William Hazlitt in 1817 wrote that in the play Henry is “a very amiable monster, a very splendid pageant”; Norman Rabkin’s 1977 essay “Rabbits, Ducks, and Henry V” compared the play to the drawing that looks like a rabbit one moment and a duck the next.',
          'Make the case for the ideal king: his reform, his mercy in 2.2 and at Harfleur, his refusal to be ransomed, his sharing of danger, his giving the glory to God, and the Chorus’s praise.',
          'Make the case for the politician: the Church’s interest in the war (1.1), the trap at Southampton, the threats at Harfleur, the silence over Bardolph, the prisoners, and the shifting of blame in 4.1.',
          'Show how Shakespeare’s methods keep both views alive: the Chorus against the scenes, paired triumphs and shadows, the scene order in 4.6 and 4.7, and the soliloquy that reveals doubt beneath the confidence.',
          'Use contexts of reception: Olivier’s 1944 film, made as a patriotic rallying cry in the Second World War, cut the traitors, the Harfleur threats, the killing of the prisoners and Bardolph’s hanging; Branagh’s 1989 film put more weight on the horrors of war.',
          'Use contexts of production: a play probably written in 1599, whose Act 5 Chorus is usually read as a reference to the Earl of Essex’s campaign in Ireland that year, and whose Epilogue assumes the audience has already seen the loss of France on stage, “Which oft our stage hath shown”.',
          'Reach your own judgement rather than splitting the difference: which view explains more of the play, and what does the other view still explain that yours cannot?',
        ],
      },
      {
        question: 'Explore the dramatic role of the Chorus in Henry V.',
        skill: 'Whole-text essay: form, structure and the audience',
        guidance: [
          'Start with what the Chorus does: he apologises for the stage, bridges time and distance, and asks the audience to imagine armies, fleets and battles.',
          'Analyse his idealised Henry: “the mirror of all Christian kings” before Act 2, “A little touch of Harry in the night” before Act 4, a king “free from vainness and self-glorious pride” before Act 5.',
          'Test his claims against the scenes that follow each speech, especially Act 2, Scene 1 and Act 4, Scene 1, and decide whether the gap is irony, propaganda or honesty about theatre.',
          'Discuss his self-conscious theatre language, such as “eke out our performance with your mind” and “Minding true things by what their mock’ries be”, and what it does to the audience’s role.',
          'Note that the 1600 quarto has no Chorus at all, so the frame is something only the Folio text gives us.',
          'End with the Epilogue sonnet and its turn to loss, and argue what the Chorus finally leaves the audience believing about Henry.',
        ],
      },
    ],
    tips: [
      'Quote the words, not the legend. The line is “Once more unto the breach”, with unto, not into. Editions also differ in small ways: this site’s text reads “thou idol Ceremony” where the Globe-based text prints idle, and “my Doll is dead” where some editions print Nell. If your edition differs, follow your edition.',
      'Keep the order of events at Agincourt straight. Henry orders the prisoners killed at the end of Act 4, Scene 6, on a new alarm; the killing of the boys is reported at the start of 4.7. Saying which explanation you accept, and why, is a mark of a strong answer.',
      'Do not treat the Chorus as Shakespeare speaking. He is a character with a view of Henry, and the best answers test his claims against the scenes that follow.',
      'Use the comic scenes as evidence. Bardolph at the breach, the Boy’s soliloquy, the four captains and Pistol’s leek are where the play questions its own heroism, and many answers ignore them.',
      'Name the form. Henry’s shift from verse to prose in disguise and in the wooing, and back to verse in soliloquy, is precise evidence about performance and power.',
      'Give Katherine her voice. In Act 5, Scene 2 her strongest answers are “Is it possible dat I should love de enemy of France?” and “Dat is as it shall please le roi mon père”, and her father and the councils settle the articles of peace while she is being wooed. Consider how much choice she has.',
      'Handle context precisely and with caution. The play was probably written in 1599; the Act 5 Chorus is usually taken to refer to Essex in Ireland; where it was first staged is uncertain. Claims that are hedged in the scholarship should be hedged in your essay.',
      'Argue, and give the alternative. Examiners reward a clear view of Henry, supported across the play, that also shows you understand the case against it.',
    ],
  },

  modelAnswer: {
    question:
      'Read Act 3, Scene 1, from “Once more unto the breach, dear friends, once more” to “God for Harry! England and Saint George!”. Starting with this speech, explore how Shakespeare presents Henry as a leader.',
    paragraph:
      'Shakespeare presents Henry’s leadership at Harfleur as a performance that can be switched from inspiration to terror, and it is the pairing of two speeches about the same siege that makes the audience notice. In Act 3, Scene 1 Henry tells his men to “imitate the action of the tiger” and to “Disguise fair nature with hard-favour’d rage”: the verbs “imitate” and “Disguise” admit that courage here is acted, a costume worn over “fair nature”, which suggests that the King’s first skill is directing other men’s bodies. The speech moves from “dear friends” to “you noblest English” to “good yeomen”, gathering every rank into one army before the closing cry joins king, nation and saint. Yet two scenes later the same voice warns the Governor that “The gates of mercy shall be all shut up” and asks “What is’t to me, when you yourselves are cause”. The rhetorical question transfers the guilt for what his soldiers might do onto the citizens, just as the first speech transferred his will into his soldiers. One reading is that this is simply good strategy, since the threat works and Henry at once orders Exeter to “Use mercy to them all”. A more convincing reading notices that Henry never has to prove whether he could restrain the “flesh’d soldier”, so the audience is left, as it will be at Agincourt, unsure whether it is watching a Christian king or a man who is very good at sounding like one.',
    commentary: [
      'It opens with an argument about the whole question, leadership as performance, rather than a summary of the speech, and the rest of the paragraph proves it.',
      'Quotations are short, exact and embedded, and single words are analysed where the effect lies in them: “imitate” and “Disguise” carry the point about acting.',
      'It comments on structure within the speech, the movement through the ranks, and on structure across the play, the pairing of 3.1 with 3.3.',
      'It offers two readings of the Harfleur threat, says which is more convincing and why, and supports both from the text.',
      'The final sentence links the moment to the rest of the play and to the central debate about Henry, which is what lifts a strong paragraph above a competent one.',
    ],
  },

  timeline: [
    {
      where: 'Prologue',
      title: 'The Chorus asks for imagination',
      summary:
        'The Chorus apologises that a small wooden playhouse and a handful of actors cannot hold the fields of France or the armies of Agincourt. He asks the audience to imagine the horses, to see each actor as a thousand men, and to let many years pass in the turning of an hour-glass.',
      setting: 'The bare stage of the playhouse',
      who: ['The Chorus'],
      themes: ['Performance and persuasion', 'Nationalism and English identity'],
      tension: 1,
      significance:
        'The play announces at once that it is a performance and makes the audience partners in creating the story of England’s hero.',
    },
    {
      where: 'Act 1, Scene 1',
      title: 'The Church makes an offer',
      summary:
        'The Archbishop of Canterbury and the Bishop of Ely fear a bill that would take half the Church’s lands. Canterbury praises the reformed young king and reveals he has offered Henry a larger sum than the clergy has ever given, in connection with France.',
      setting: 'An antechamber in the King’s palace, London',
      who: ['Archbishop of Canterbury', 'Bishop of Ely'],
      quote: 'Consideration like an angel came',
      themes: [
        'Divine right and providence',
        'Kingship and leadership',
        'Performance and persuasion',
      ],
      tension: 1,
      significance:
        'Before Henry appears, the audience learns the Church has its own reasons to want a war, which colours the case Canterbury makes next.',
    },
    {
      where: 'Act 1, Scene 2',
      title: 'The claim and the tennis balls',
      summary:
        'Henry charges Canterbury on his conscience to say whether the Salic law bars his claim to France, and the Archbishop argues at length that it does not. The Dauphin’s ambassadors then deliver a gift of tennis balls mocking Henry’s youth, and Henry replies that he will answer them with cannon.',
      setting: 'The presence chamber of the palace',
      who: [
        'King Henry V',
        'Archbishop of Canterbury',
        'Bishop of Ely',
        'Exeter',
        'French Ambassador',
      ],
      quote: 'Hath turn’d his balls to gun-stones',
      themes: ['Kingship and leadership', 'War and its cost', 'Divine right and providence'],
      tension: 3,
      significance:
        'Henry makes the war look both lawful and provoked, and lays its cost at the Dauphin’s door.',
    },
    {
      where: 'Act 2, Scene 1',
      title: 'Old friends, new quarrels',
      summary:
        'In a London street Bardolph tries to reconcile Nym and Pistol, who have fallen out over Nell Quickly, now Pistol’s wife, and a betting debt. The Boy, and then the Hostess, call them to Sir John Falstaff, who is very ill, and the Hostess says the King has broken his heart.',
      setting: 'A street in London',
      who: ['Bardolph', 'Nym', 'Pistol', 'Mistress Quickly', 'The Boy'],
      quote: 'The King has kill’d his heart',
      themes: ['War and its cost', 'Kingship and leadership', 'Honour'],
      tension: 2,
      significance:
        'The Chorus has just described a nation united by honour; the first scene shows men squabbling over money, and a friend the new king has cast off.',
    },
    {
      where: 'Act 2, Scene 2',
      title: 'The traitors at Southampton',
      summary:
        'Henry pardons a man who railed at him while drunk, and Cambridge, Scroop and Grey urge him to be harsher. He hands them papers that show he knows they took French money to kill him, turns their own advice against their pleas for mercy, and sends them to execution.',
      setting: 'A council chamber at Southampton',
      who: ['King Henry V', 'Scroop', 'Cambridge', 'Grey', 'Exeter'],
      quote: 'Another fall of man',
      themes: [
        'Kingship and leadership',
        'Performance and persuasion',
        'Divine right and providence',
      ],
      tension: 4,
      significance:
        'Henry stages the trap like a play, and separates his personal hurt from what he calls his kingdom’s safety.',
    },
    {
      where: 'Act 2, Scene 3',
      title: 'The death of Falstaff',
      summary:
        'Outside the tavern the Hostess describes how Falstaff died, fumbling with the sheets, crying out to God, and growing cold from his feet upward. Pistol, Nym, Bardolph and the Boy then set off for France, Pistol urging them to suck blood like horse-leeches.',
      setting: 'Before a tavern in London',
      who: ['Mistress Quickly', 'Pistol', 'Nym', 'Bardolph', 'The Boy'],
      quote: '’A made a finer end',
      themes: ['War and its cost', 'Kingship and leadership'],
      tension: 2,
      significance:
        'A tender comic death offstage marks the end of Henry’s old life, and the survivors go to war for plunder, not glory.',
    },
    {
      where: 'Act 2, Scene 4',
      title: 'The French court divided',
      summary:
        'The French King orders his towns defended, but the Dauphin dismisses England as ruled by a vain, giddy youth. The Constable warns that Henry’s wildness was a disguise, and Exeter arrives to demand the crown of France, threatening war if it is refused.',
      setting: 'The French King’s palace',
      who: ['The French King', 'The Dauphin', 'The Constable', 'Exeter'],
      quote: 'Covering discretion with a coat of folly',
      themes: ['Kingship and leadership', 'Performance and persuasion'],
      tension: 2,
      significance:
        'The French disagree about who Henry really is, which is the question the whole play keeps asking.',
    },
    {
      where: 'Act 3, Scene 1',
      title: 'Once more unto the breach',
      summary:
        'Before the walls of Harfleur, with scaling ladders ready, Henry drives his soldiers back into the gap their guns have made. He tells them to become tigers, to prove their fathers’ blood, and to charge crying for God, Harry and Saint George.',
      setting: 'Before the walls of Harfleur',
      who: ['King Henry V', 'Exeter', 'Bedford', 'Gloucester'],
      quote: 'Once more unto the breach, dear friends, once more',
      themes: [
        'War and its cost',
        'Nationalism and English identity',
        'Performance and persuasion',
      ],
      tension: 4,
      significance:
        'One of the two great battle speeches in the play shows Henry’s power over men, and admits that courage has to be acted.',
    },
    {
      where: 'Act 3, Scene 2',
      title: 'The breach seen from below',
      summary:
        'Bardolph echoes the King’s cry, but Nym, Pistol and the Boy would rather be in a London alehouse until Fluellen drives them on. Alone, the Boy calls his masters cowards and thieves; then the Welsh captain Fluellen and the Irish captain Macmorris quarrel, with the English Gower and the Scottish Jamy looking on, until a parley sounds.',
      setting: 'Near the breach and the mines at Harfleur',
      who: ['Bardolph', 'Nym', 'Pistol', 'The Boy', 'Fluellen', 'Gower', 'Macmorris', 'Jamy'],
      quote: 'What ish my nation?',
      themes: ['Nationalism and English identity', 'War and its cost', 'Honour'],
      tension: 2,
      significance:
        'Comedy tests the heroic speech at once, and the captains show a British army that is not yet one people.',
    },
    {
      where: 'Act 3, Scene 3',
      title: 'The ultimatum to Harfleur',
      summary:
        'Henry warns the Governor that if Harfleur does not surrender his soldiers will be let loose on its people, and says the blame will be the town’s own. Told the Dauphin cannot relieve them, the Governor yields, and Henry orders Exeter to use mercy as sickness spreads through the English army.',
      setting: 'Before the gates of Harfleur',
      who: ['King Henry V', 'Governor of Harfleur', 'Exeter'],
      quote: 'The gates of mercy shall be all shut up',
      themes: ['War and its cost', 'Kingship and leadership', 'Performance and persuasion'],
      tension: 5,
      significance:
        'The voice that inspired soldiers now terrifies civilians, and the audience never learns whether the threat was meant.',
    },
    {
      where: 'Act 3, Scene 4',
      title: 'An English lesson',
      summary:
        'In the French palace Princess Katherine asks her gentlewoman Alice for the English words for hand, arm, neck, chin and foot, and practises them. The scene is almost all in French and comic, but the Chorus has already said her father offered her to Henry.',
      setting: 'The French King’s palace',
      who: ['Princess Katherine', 'Alice'],
      themes: ['Nationalism and English identity', 'Performance and persuasion'],
      tension: 1,
      significance:
        'The princess begins learning the language of the country invading hers, a hint of the marriage the war will end in.',
    },
    {
      where: 'Act 3, Scene 6',
      title: 'Bardolph is condemned',
      summary:
        'Pistol begs Fluellen to plead for Bardolph, condemned for stealing a pax from a church, and Fluellen refuses because discipline must be kept. Told of the sentence, Henry does not mention knowing Bardolph and orders that nothing be taken from the French without payment. Montjoy demands ransom, and Henry admits his army is sick but will not shun a battle.',
      setting: 'The English camp in Picardy',
      who: ['Fluellen', 'Pistol', 'Gower', 'King Henry V', 'Montjoy'],
      quote: 'the gentler gamester is the soonest winner',
      themes: ['Kingship and leadership', 'War and its cost', 'Honour'],
      tension: 3,
      significance:
        'Henry lets an old companion hang without a word about their past, and the audience has to decide whether that is justice or coldness.',
    },
    {
      where: 'Act 3, Scene 7',
      title: 'The French wait for morning',
      summary:
        'In the French camp the night before the battle, the Dauphin praises his horse in extravagant terms. Once he has gone to arm, Orleans defends him while the Constable mocks his courage and the two trade proverbs. They scorn the hungry English and their king, and Orleans reckons that by ten each of them will have a hundred Englishmen.',
      setting: 'The French camp near Agincourt, at night',
      who: ['The Dauphin', 'The Constable', 'Orleans', 'Rambures'],
      quote: 'When I bestride him, I soar, I am a hawk',
      themes: ['Honour', 'Performance and persuasion', 'Nationalism and English identity'],
      tension: 2,
      significance:
        'French overconfidence, in idle prose, is set up to fall, and contrasts with the anxious English camp the Chorus describes next.',
    },
    {
      where: 'Act 4, Chorus',
      title: 'A little touch of Harry',
      summary:
        'The Chorus describes the two camps in the dark: the confident French playing dice for English prisoners, the English sitting like sacrifices by their fires. Henry walks among his men, and the Chorus says every soldier takes comfort from his cheerful looks.',
      setting: 'The two camps at Agincourt, before dawn',
      who: ['The Chorus', 'King Henry V'],
      quote: 'A little touch of Harry in the night',
      themes: ['Kingship and leadership', 'Performance and persuasion'],
      tension: 3,
      significance:
        'The Chorus gives the official picture of a calm and loving king, which the next scene quietly tests.',
    },
    {
      where: 'Act 4, Scene 1',
      title: 'The king in disguise',
      summary:
        'Wearing Sir Thomas Erpingham’s cloak, Henry talks with the soldiers Bates, Court and Williams, who doubt the war’s justice and the King’s promise not to be ransomed. He argues that a king is not answerable for each soldier’s soul, exchanges gloves with Williams as a pledge to fight later, then alone questions the worth of ceremony and prays that God will not punish his father’s seizure of the crown.',
      setting: 'The English camp at Agincourt, before dawn',
      who: [
        'King Henry V',
        'Erpingham',
        'Pistol',
        'Fluellen',
        'Gower',
        'Bates',
        'Court',
        'Williams',
      ],
      quote: 'every subject’s soul is his own',
      themes: ['Kingship and leadership', 'Divine right and providence', 'War and its cost'],
      tension: 4,
      significance:
        'The play’s hardest questions about war are put by a common soldier, and the King’s answer does not quite meet them.',
    },
    {
      where: 'Act 4, Scene 3',
      title: 'The feast of Crispian',
      summary:
        'Told the French outnumber them five to one, Westmorland wishes for more men from England. Henry answers that fewer men means a greater share of honour, offers any man who will not fight his passage home, and promises the rest they will be remembered as brothers every Crispin’s Day. He sends Montjoy away with no ransom.',
      setting: 'The English camp, as the battle begins',
      who: ['King Henry V', 'Westmorland', 'Exeter', 'Salisbury', 'Montjoy', 'York'],
      quote: 'We few, we happy few, we band of brothers',
      themes: ['Honour', 'Nationalism and English identity', 'Performance and persuasion'],
      tension: 4,
      significance:
        'The speech turns impossible odds into a privilege, and makes a promise of brotherhood the rest of the play puts to the test.',
    },
    {
      where: 'Act 4, Scene 4',
      title: 'Pistol takes a prisoner',
      summary:
        'On the battlefield Pistol captures a French soldier who begs for his life, and the Boy translates as Pistol bullies him into promising two hundred crowns. Left alone, the Boy says Bardolph and Nym have both been hanged and that the English luggage is guarded only by boys.',
      setting: 'The field of battle',
      who: ['Pistol', 'The Boy', 'Monsieur le Fer'],
      quote: 'there is none to guard it but boys',
      themes: ['War and its cost', 'Honour'],
      tension: 3,
      significance:
        'A comic scene of ransom-hunting ends by setting up the killing of the boys, reported three scenes later.',
    },
    {
      where: 'Act 4, Scene 6',
      title: 'York, Suffolk and the prisoners',
      summary:
        'Exeter tells Henry how the wounded Duke of York died beside the Earl of Suffolk, kissing him, and confesses he wept at the sight. A new alarm sounds, the French seem to be regrouping, and Henry orders every soldier to kill his prisoners.',
      setting: 'Another part of the field',
      who: ['King Henry V', 'Exeter'],
      quote: 'Then every soldier kill his prisoners',
      themes: ['War and its cost', 'Honour', 'Kingship and leadership'],
      tension: 5,
      significance: 'Chivalric grief and a brutal order sit side by side in one short scene.',
    },
    {
      where: 'Act 4, Scene 7',
      title: 'The boys and the luggage',
      summary:
        'Fluellen and Gower report that French runaways have killed the boys guarding the luggage and looted the King’s tent, and Gower says that is why the King ordered the prisoners’ throats cut. Henry, angry, he says, for the first time since he came to France, threatens the French horsemen and the prisoners he holds; Montjoy arrives to ask leave to bury the dead and admits the day is Henry’s.',
      setting: 'Another part of the field',
      who: ['Fluellen', 'Gower', 'King Henry V', 'Montjoy', 'Exeter', 'Williams'],
      quote: 'I was not angry since I came to France',
      themes: ['War and its cost', 'Kingship and leadership', 'Divine right and providence'],
      tension: 5,
      significance:
        'Gower offers one reason for the killing of the prisoners and the order of the scenes suggests another; the play leaves both standing.',
    },
    {
      where: 'Act 4, Scene 8',
      title: 'The glove and the count of the dead',
      summary:
        'Williams strikes Fluellen, who is wearing the glove Henry gave him, and Henry reveals he was the man Williams quarrelled with, then has Exeter fill the glove with crowns. The herald’s lists give ten thousand French dead against four named Englishmen and twenty-five others, and Henry gives the victory to God alone.',
      setting: 'Before King Henry’s pavilion',
      who: ['Williams', 'Fluellen', 'Gower', 'King Henry V', 'Exeter', 'Warwick', 'Gloucester'],
      quote: 'O God, thy arm was here',
      themes: ['Divine right and providence', 'Kingship and leadership'],
      tension: 3,
      significance:
        'The night’s argument ends in a joke and a payment, and the impossible victory is claimed as God’s.',
    },
    {
      where: 'Act 5, Chorus',
      title: 'Home and back again',
      summary:
        'The Chorus asks the audience to picture Henry’s return: crowds on the beach, Henry at Blackheath refusing to have his dented helmet and bent sword carried before him, and London pouring out to greet him as Rome greeted Caesar. The Chorus compares the welcome to one a general returning from Ireland might receive, then carries the story back to France.',
      setting: 'London and Blackheath, in the imagination',
      who: ['The Chorus', 'King Henry V'],
      quote: 'Being free from vainness and self-glorious pride',
      themes: [
        'Nationalism and English identity',
        'Divine right and providence',
        'Performance and persuasion',
      ],
      tension: 1,
      significance:
        'The play reaches out of 1415 into its audience’s present: the general from Ireland is usually taken to be the Earl of Essex in 1599.',
    },
    {
      where: 'Act 5, Scene 1',
      title: 'Pistol eats the leek',
      summary:
        'Fluellen, still wearing the leek Pistol mocked, beats him with a cudgel until he eats it. Alone, Pistol says “my Doll is dead” of disease in hospital, and resolves to steal his way home to England and swear his cudgel scars are war wounds.',
      setting: 'The English camp in France',
      who: ['Fluellen', 'Pistol', 'Gower'],
      quote: 'By this leek, I will most horribly revenge',
      themes: ['Nationalism and English identity', 'Honour', 'War and its cost'],
      tension: 2,
      significance:
        'The last of the tavern world goes home to lie about the war, a mocking echo of the veteran Henry imagined proudly showing his scars.',
    },
    {
      where: 'Act 5, Scene 2',
      title: 'Peace and the wooing',
      summary:
        'The two courts meet and the Duke of Burgundy describes France’s farms and vineyards running wild for want of peace. While the French King and the councils withdraw to study the terms, Henry woos Katherine in plain prose and broken French. The French King returns having agreed the terms, yields at Henry’s request the one article he had not yet signed, that his formal grants call Henry his son and heir of France, and gives him his daughter.',
      setting: 'A royal palace in France',
      who: [
        'King Henry V',
        'Princess Katherine',
        'Alice',
        'Burgundy',
        'The French King',
        'Queen Isabel',
        'Exeter',
        'Westmorland',
      ],
      quote: 'O Kate, nice customs curtsy to great kings',
      themes: [
        'Kingship and leadership',
        'Nationalism and English identity',
        'Performance and persuasion',
      ],
      tension: 2,
      significance:
        'The war ends in a marriage treaty, and the wooing leaves open whether Katherine is being loved or acquired.',
    },
    {
      where: 'Epilogue',
      title: 'Small time',
      summary:
        'The Chorus returns with a sonnet, apologising for the author’s rough pen and small stage. He reminds the audience that Henry lived only a short time, that his son Henry VI became king while still a baby, and that those who governed for him lost France.',
      setting: 'The stage, after the story has ended',
      who: ['The Chorus'],
      quote: 'That they lost France and made his England bleed',
      themes: [
        'Nationalism and English identity',
        'Kingship and leadership',
        'Divine right and providence',
      ],
      tension: 2,
      significance:
        'The triumph is framed as brief, and the play ends by reminding the audience of the loss to come.',
    },
  ],

  relationships: [
    {
      from: 'King Henry V',
      to: 'The Dauphin',
      kind: 'rivals',
      note: 'The Dauphin mocks Henry’s youth with the tennis balls and scorns him before Agincourt. The two never share a scene, and the Dauphin is absent from the peace in Act 5, so their rivalry is fought through ambassadors, heralds and armies.',
    },
    {
      from: 'King Henry V',
      to: 'Princess Katherine',
      kind: 'wooer and wooed; a treaty marriage',
      note: 'In the Act 3 Chorus her father offers her to Henry with some small dukedoms, and in Act 5 Henry calls her his “capital demand” in the articles of peace. His wooing is charming and plain-spoken, but she is being bargained for while her father studies the terms.',
    },
    {
      from: 'King Henry V',
      to: 'Exeter',
      kind: 'king and uncle',
      note: 'Exeter is Henry’s most trusted servant: he carries the claim to the French court, arrests the traitors, holds the bridge in Picardy and weeps as he reports the deaths of York and Suffolk.',
    },
    {
      from: 'King Henry V',
      to: 'Scroop',
      kind: 'trusted friend turned traitor',
      note: 'Henry’s grief at Scroop, who “didst bear the key of all my counsels”, is more personal than his anger at the other traitors, yet he still sends him to his death for the kingdom’s sake.',
    },
    {
      from: 'King Henry V',
      to: 'Williams',
      kind: 'disguised king and common soldier',
      note: 'Williams argues with a stranger in a borrowed cloak, who says he serves “Under Sir Thomas Erpingham”, about the King’s responsibility for the dead, and pledges to fight him. When the truth comes out he defends himself with dignity, and Henry rewards him with a glove full of crowns.',
    },
    {
      from: 'King Henry V',
      to: 'Fluellen',
      kind: 'king and loyal Welsh captain',
      note: 'Fluellen compares Henry to Alexander and claims him as a fellow Welshman; Henry agrees, “For I am Welsh”, and uses Fluellen in the trick with Williams’s glove.',
    },
    {
      from: 'King Henry V',
      to: 'Bardolph',
      kind: 'old drinking companion',
      note: 'Bardolph belongs to the Eastcheap tavern world of Henry’s youth. When Fluellen reports that he is to be executed for robbing a church, Henry says nothing of their past and answers “We would have all such offenders so cut off”.',
    },
    {
      from: 'Fluellen',
      to: 'Pistol',
      kind: 'enemies',
      note: 'Fluellen first praises Pistol’s bravery at the bridge. When Pistol curses him for refusing to plead for Bardolph, Gower tells him Pistol is a fraud, and Fluellen vows to tell Pistol his mind when the chance comes. He takes his revenge with a cudgel and a leek.',
    },
    {
      from: 'Pistol',
      to: 'Mistress Quickly',
      kind: 'husband and wife',
      note: 'Pistol has married Nell Quickly, the Hostess, who had been promised to Nym. Pistol’s news in Act 5 that “my Doll is dead” is read by some editors as her death, which is why some editions print Nell there.',
    },
    {
      from: 'Fluellen',
      to: 'Gower',
      kind: 'fellow captains and friends',
      note: 'Gower, the English captain, is the patient straight man to Fluellen’s learned speeches, and he defends Fluellen against Pistol’s mockery of the Welsh.',
    },
    {
      from: 'The Dauphin',
      to: 'The Constable',
      kind: 'fellow French commanders',
      note: 'The Constable warns the Dauphin not to underestimate Henry, and on the night before the battle mocks his boasting behind his back. Their divisions foreshadow the disorder of the French defeat.',
    },
    {
      from: 'Archbishop of Canterbury',
      to: 'King Henry V',
      kind: 'Church and crown',
      note: 'Canterbury needs the King to reject a bill against Church lands, and offers money for the war in France. His case for Henry’s claim is learned, but the audience has heard his motive first.',
    },
  ],

  compareWith: [
    {
      title: 'Macbeth',
      href: '/revision/texts/macbeth',
      reason:
        'Both plays test what makes a king legitimate and what guilt a crown carries: Henry prays that God will forget his father’s seizure of the crown, while Macbeth seizes one himself.',
    },
    {
      title: 'Julius Caesar',
      href: '/revision/texts/julius-caesar',
      reason:
        'Both plays are about the power of public speech to move crowds and armies, so Henry’s orations compare closely with the funeral speeches of Brutus and Mark Antony.',
    },
    {
      title: 'Dulce et Decorum Est',
      href: '/revision/poetry/eduqas/dulce-et-decorum-est',
      reason:
        'Wilfred Owen’s poem ends by calling it a lie that it is sweet and fitting to die for one’s country, the very idea the St Crispin’s Day speech makes glorious, so the two test each other.',
    },
  ],

  contentGuidance: [
    'violence',
    'mortality',
    'crime_injustice',
    'mythological_religious',
    'political_ideology',
    'discrimination',
    'intimate_relationships',
  ],

  quotesFromElsewhere: [
    'a very amiable monster, a very splendid pageant',
    'Rabbits, Ducks, and Henry V',
  ],

  sources: [
    {
      label:
        'The held edition: src/data/full-texts/henry-v.ts, a byte copy of Project Gutenberg eBook #1521, King Henry V. Every quotation and quoted phrase in this guide was checked against it, and every speaker and scene by reading the whole play in it. Its Prologue is missing (a parsing loss), so the Prologue is paraphrased, not quoted.',
      url: 'https://www.gutenberg.org/ebooks/1521',
    },
    {
      label:
        'Project Gutenberg #1521 full text, which does contain the Prologue: checked for the content of the Chorus’s opening speech (the wooden O, the horses, one man divided into a thousand, years turned into an hour-glass).',
      url: 'https://www.gutenberg.org/cache/epub/1521/pg1521-images.html',
    },
    {
      label:
        'Folger Shakespeare Library, Henry V: the 1600 quarto is much shorter and lacks all of the Chorus; the 1623 First Folio is the basis of modern editions.',
      url: 'https://www.folger.edu/explore/shakespeares-works/henry-v/',
    },
    {
      label: 'Folger text, Act 5, Scene 1: prints “my Doll is dead”.',
      url: 'https://www.folger.edu/explore/shakespeares-works/henry-v/read/5/1/',
    },
    {
      label:
        'MIT Complete Works (Globe-based text), Act 5, Scene 1 prints “my Nell is dead”; Act 4, Scene 1 prints “thou idle ceremony”. Used only to show where editions differ.',
      url: 'http://shakespeare.mit.edu/henryv/henryv.5.1.html',
    },
    {
      label: 'Royal Shakespeare Company, Henry V: about the play (probably written around 1599).',
      url: 'https://www.rsc.org.uk/henry-v/',
    },
    {
      label:
        'Wikipedia, Henry V (play): dated to early 1599 by the apparent allusion to Essex’s Irish campaign; whether it opened at the Curtain or the new Globe cannot be verified; the final play of a tetralogy; Rabkin’s reading as a picture with two meanings; Olivier’s film as a wartime rallying cry; Branagh’s 1989 film stressing the horrors of war.',
      url: 'https://en.wikipedia.org/wiki/Henry_V_(play)',
    },
    {
      label:
        'Wikipedia, Robert Devereux, 2nd Earl of Essex: landed in Ireland in April 1599, back in London by the end of September 1599.',
      url: 'https://en.wikipedia.org/wiki/Robert_Devereux,_2nd_Earl_of_Essex',
    },
    {
      label:
        'Wikipedia, Henry V (1944 film): premiered November 1944; omits the Southampton traitors, the Harfleur threats, the killing of the prisoners and Bardolph’s hanging.',
      url: 'https://en.wikipedia.org/wiki/Henry_V_(1944_film)',
    },
    {
      label:
        'Wikipedia, Battle of Agincourt: 25 October 1415, St Crispin’s Day; Harfleur surrendered on 22 September 1415.',
      url: 'https://en.wikipedia.org/wiki/Battle_of_Agincourt',
    },
    {
      label:
        'Wikipedia, Henry V of England: born at Monmouth; Treaty of Troyes 21 May 1420 recognised him as heir and regent of France; died 31 August 1422; his son succeeded as a baby.',
      url: 'https://en.wikipedia.org/wiki/Henry_V_of_England',
    },
    {
      label:
        'Wikipedia, Henry VI of England: succeeded on 1 September 1422 (it gives his age as eight months, where earlier notes here said nine, so the guide says only “as a baby”); crowned in England in 1429 and in France in 1431.',
      url: 'https://en.wikipedia.org/wiki/Henry_VI_of_England',
    },
    {
      label:
        'Wikipedia, Saint Crispin’s Day: 25 October; Crispin and Crispinian are patron saints of shoemakers and leather workers.',
      url: 'https://en.wikipedia.org/wiki/Saint_Crispin%27s_Day',
    },
    {
      label: 'Wikipedia, Saint David’s Day: 1 March, and the tradition of the leek.',
      url: 'https://en.wikipedia.org/wiki/Saint_David%27s_Day',
    },
    {
      label:
        'Wikipedia, Salic law: its use in France to bar succession by and through women, and Edward III’s claim.',
      url: 'https://en.wikipedia.org/wiki/Salic_law',
    },
    {
      label:
        'Wikipedia, Constable of France: one of the Great Officers of the Crown; Charles d’Albret was Constable and died at Agincourt.',
      url: 'https://en.wikipedia.org/wiki/Constable_of_France',
    },
    {
      label: 'Wiktionary, pax (the tablet kissed at Mass).',
      url: 'https://en.wiktionary.org/wiki/pax',
    },
    {
      label: 'Wiktionary, ancient (an ensign or standard-bearer).',
      url: 'https://en.wiktionary.org/wiki/ancient',
    },
    {
      label: 'Wiktionary, gage (a glove or pledge thrown down as a challenge).',
      url: 'https://en.wiktionary.org/wiki/gage',
    },
    { label: 'Wiktionary, chantry.', url: 'https://en.wiktionary.org/wiki/chantry' },
    { label: 'Wiktionary, dauphin.', url: 'https://en.wiktionary.org/wiki/dauphin' },
    { label: 'Wiktionary, parley.', url: 'https://en.wiktionary.org/wiki/parley' },
    {
      label:
        'William Hazlitt, Characters of Shakespear’s Plays (1817), chapter on Henry V, Project Gutenberg #5085: the words “a very amiable monster, a very splendid pageant” checked in the text.',
      url: 'https://www.gutenberg.org/ebooks/5085',
    },
    {
      label: 'Wikipedia, Characters of Shakespear’s Plays: first published 1817.',
      url: 'https://en.wikipedia.org/wiki/Characters_of_Shakespear%27s_Plays',
    },
    {
      label:
        'Norman Rabkin, Rabbits, Ducks, and Henry V, Shakespeare Quarterly 28.3 (1977), p. 279: citation confirmed through Crossref.',
      url: 'https://doi.org/10.2307/2869079',
    },
  ],
}
