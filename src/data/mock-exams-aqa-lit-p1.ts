// ─── AQA GCSE English Literature (8702) Paper 1 Mock Exams ──────────────────
// Shakespeare + 19th Century Novel
// 6 mock papers: Macbeth (2), Romeo & Juliet (2), The Tempest (1), Merchant of Venice (1)
// Each: 1h45 (105 min), 64 marks
// Section A: Shakespeare (30 marks + 4 for AO4) | Section B: 19th Century Novel (30 marks)

/**
 * WHAT WAS WRONG, AND WHAT CHANGED (27 September 2026).
 *
 * None of the twelve extracts in this file was what its author wrote. The FC20
 * audit (28 April 2026) put a warning at the top of the file and left the
 * extracts in place; scripts/check-mock-exam-extracts.mjs measured them on
 * 26 September 2026:
 *
 *   - Seven were labelled "fabricated practice composition in the style of"
 *     Shakespeare, Brontë or Dickens, yet each sat under a question on the
 *     real play or novel, and several spliced lines from other scenes, or
 *     other plays, into one speech: the first Macbeth extract ran the
 *     sleepwalking scene into Act 2 Scene 2, brought Macbeth on stage in a
 *     scene he is not in, and gave Lady Macbeth an altered line of his ("No,
 *     no, this hand will rather ...") and an altered line of Ariel's song
 *     from The Tempest; the Romeo and Juliet "balcony" extract ran into the
 *     lark and nightingale of Act 3 Scene 5.
 *   - The other five carried notes such as "Lightly paraphrased ... verify
 *     wording before citing", which the paper printed to the student as the
 *     source. A Christmas Carol's two extracts were 50% and 43% verbatim; the
 *     second Jane Eyre extract was 0%, and its one authentic line ("I am no
 *     bird") is from Chapter 23, not the Chapter 27 on its label; The
 *     Merchant of Venice extract opened with a line of Desdemona's from
 *     Othello (Act 2 Scene 1); The Tempest's had the held edition's words
 *     but not its punctuation.
 *   - The model answers were chosen by the title of the play or novel, not by
 *     the extract, so the second paper on each text printed answers written
 *     for the first: paper 2 quoted the Stave 5 extract under a Stave 1
 *     passage, paper 4 quoted paper 3's invented Jane Eyre lines, paper 6
 *     quoted paper 5's Estella, and the Merchant answers quoted invented and
 *     altered lines as Shylock's.
 *   - A separate 4-mark "AO4" question asked for analysis. AO4 in AQA 8702 is
 *     spelling, punctuation, grammar and vocabulary, marked on the Shakespeare
 *     essay itself, and that question's shared answers ("the language is
 *     fragmented and repetitive") were untrue of most of the extracts.
 *
 * Every extract is now cut by script from an edition, never typed: the plays
 * and A Christmas Carol from the held editions in src/data/full-texts, with
 * playPassage() and passage() from src/lib/study-guides/passage.ts; Jane Eyre
 * and Great Expectations, which are not held, with the same passage() over the
 * chapter's paragraphs in Project Gutenberg #1260 and #1400. The call that cut
 * each one is in the comment above it, so it can be cut again. Each comes from
 * the scene, stave or chapter its paper named where that was right, on the
 * same subject: the second Jane Eyre extract is from Chapter 27, as labelled,
 * and the first from Chapter 23, where "I am no bird" is; the Merchant
 * extract is Act 1 Scene 3 alone, where the lines its answers discuss are.
 * Each label now names the author, the place and the edition. The extracts
 * are longer than the invented ones (about 160 to 350 words), nearer the
 * length AQA prints. A play extract is playPassage()'s text with each speech
 * and stage direction on its own line, as this file always set them; within
 * a speech, " / " marks the end of a verse line.
 *
 * What the checker still reports, and why the text is right. It calls one
 * sentence of MERCHANT_EXTRACT_1 "words changed": the edition prints "(For
 * suff'rance is the badge of all our tribe.)" in parentheses, and the checker
 * deletes parenthesised text from a play extract, as if it were a stage
 * direction, but not from the edition it compares with. The extract is the
 * edition's text, parentheses included; do not "fix" it. The Tempest extract
 * starts at Prospero's aside, not at the stage direction before it, because
 * that direction is over the 200 characters the checker recognises as one.
 *
 * One departure from playPassage()'s layout, found on review (27 September
 * 2026). The edition breaks Prospero's "Well done! avoid; no more!" after
 * "no", because the inserted stage direction makes the line too long to
 * print; playPassage() turned that printer's break into " / ", which on this
 * page means the end of a verse line, and made "more!" a line on its own.
 * Without the direction, "Is almost come. Well done! avoid; no more!" is one
 * line of ten syllables, so the extract joins it. The words and marks are the
 * edition's.
 *
 * Each paper now has its own model answers, written for its own extract. A
 * quotation in them is always words of the extract printed above it; the rest
 * of the play or novel is referred to in paraphrase, by act, scene or chapter,
 * so no answer puts words in an author's mouth. Question 1 carries AQA's 4
 * AO4 marks (34 marks) and the separate AO4 question is gone.
 *
 * Run node scripts/check-mock-exam-extracts.mjs --file aqa-lit-p1.ts after
 * any change here. src/__tests__/aqa-lit-p1-mocks-quote-the-real-text.test.ts
 * cuts the eight held extracts again and fails an answer that quotes words
 * its own extract does not print. None of these papers is served: aqaLitP1Mocks is imported
 * nowhere, so it is not in allMockExamPapers. The file is in a public
 * repository, which is why it is corrected rather than left.
 */

import type { MockExamPaper } from './mock-exams'

// ─────────────────────────────────────────────────────────────────────────────
// SHAKESPEARE EXTRACTS - MACBETH (Project Gutenberg #1533, held)
// ─────────────────────────────────────────────────────────────────────────────

// Act 5 Scene 1, set as prose, as the edition sets it. Cut with
// playPassage(macbethText, 'actv-scenei', 'Yet here’s a spot', 'To bed, to bed', { prose: true }).
const MACBETH_EXTRACT_1 =
  'LADY MACBETH: Yet here’s a spot.\nDOCTOR: Hark, she speaks. I will set down what comes from her, to satisfy my remembrance the more strongly.\nLADY MACBETH: Out, damned spot! out, I say! One; two. Why, then ’tis time to do’t. Hell is murky! Fie, my lord, fie! a soldier, and afeard? What need we fear who knows it, when none can call our power to account? Yet who would have thought the old man to have had so much blood in him?\nDOCTOR: Do you mark that?\nLADY MACBETH: The Thane of Fife had a wife. Where is she now?—What, will these hands ne’er be clean? No more o’ that, my lord, no more o’ that: you mar all with this starting.\nDOCTOR: Go to, go to. You have known what you should not.\nGENTLEWOMAN: She has spoke what she should not, I am sure of that: heaven knows what she has known.\nLADY MACBETH: Here’s the smell of the blood still: all the perfumes of Arabia will not sweeten this little hand. Oh, oh, oh!\nDOCTOR: What a sigh is there! The heart is sorely charged.\nGENTLEWOMAN: I would not have such a heart in my bosom for the dignity of the whole body.\nDOCTOR: Well, well, well.\nGENTLEWOMAN: Pray God it be, sir.\nDOCTOR: This disease is beyond my practice: yet I have known those which have walked in their sleep, who have died holily in their beds.\nLADY MACBETH: Wash your hands, put on your nightgown; look not so pale. I tell you yet again, Banquo’s buried; he cannot come out on’s grave.\nDOCTOR: Even so?\nLADY MACBETH: To bed, to bed. There’s knocking at the gate. Come, come, come, come, give me your hand. What’s done cannot be undone. To bed, to bed, to bed.'

const MACBETH_EXTRACT_1_SOURCE =
  'William Shakespeare, Macbeth, Act 5 Scene 1 (text: Project Gutenberg #1533)'

// Act 5 Scene 5. Cut with
// playPassage(macbethText, 'actv-scenev', 'I have almost forgot the taste', 'Signifying nothing').
const MACBETH_EXTRACT_2 =
  'MACBETH: I have almost forgot the taste of fears. / The time has been, my senses would have cool’d / To hear a night-shriek; and my fell of hair / Would at a dismal treatise rouse and stir / As life were in’t. I have supp’d full with horrors; / Direness, familiar to my slaughterous thoughts, / Cannot once start me.\n[Enter Seyton.]\nWherefore was that cry?\nSEYTON: The Queen, my lord, is dead.\nMACBETH: She should have died hereafter. / There would have been a time for such a word. / Tomorrow, and tomorrow, and tomorrow, / Creeps in this petty pace from day to day, / To the last syllable of recorded time; / And all our yesterdays have lighted fools / The way to dusty death. Out, out, brief candle! / Life’s but a walking shadow; a poor player, / That struts and frets his hour upon the stage, / And then is heard no more: it is a tale / Told by an idiot, full of sound and fury, / Signifying nothing.'

const MACBETH_EXTRACT_2_SOURCE =
  'William Shakespeare, Macbeth, Act 5 Scene 5 (text: Project Gutenberg #1533)'

// ─────────────────────────────────────────────────────────────────────────────
// SHAKESPEARE EXTRACTS - ROMEO & JULIET (Project Gutenberg #1513, held)
// ─────────────────────────────────────────────────────────────────────────────

// Act 2 Scene 2, Romeo below the window. Cut with
// playPassage(romeoAndJulietText, 'actii-sceneii', 'He jests at scars', 'touch that cheek').
const ROMEO_JULIET_EXTRACT_1 =
  'ROMEO: He jests at scars that never felt a wound.\n[Juliet appears above at a window.]\nBut soft, what light through yonder window breaks? / It is the east, and Juliet is the sun! / Arise fair sun and kill the envious moon, / Who is already sick and pale with grief, / That thou her maid art far more fair than she. / Be not her maid since she is envious; / Her vestal livery is but sick and green, / And none but fools do wear it; cast it off. / It is my lady, O it is my love! / O, that she knew she were! / She speaks, yet she says nothing. What of that? / Her eye discourses, I will answer it. / I am too bold, ’tis not to me she speaks. / Two of the fairest stars in all the heaven, / Having some business, do entreat her eyes / To twinkle in their spheres till they return. / What if her eyes were there, they in her head? / The brightness of her cheek would shame those stars, / As daylight doth a lamp; her eyes in heaven / Would through the airy region stream so bright / That birds would sing and think it were not night. / See how she leans her cheek upon her hand. / O that I were a glove upon that hand, / That I might touch that cheek.'

const ROMEO_JULIET_EXTRACT_1_SOURCE =
  'William Shakespeare, Romeo and Juliet, Act 2 Scene 2 (text: Project Gutenberg #1513)'

// Act 2 Scene 2, Juliet on Romeo's name. Cut with
// playPassage(romeoAndJulietText, 'actii-sceneii', 'wherefore art thou Romeo', 'I take thee at thy word').
const ROMEO_JULIET_EXTRACT_2 =
  'JULIET: O Romeo, Romeo, wherefore art thou Romeo? / Deny thy father and refuse thy name. / Or if thou wilt not, be but sworn my love, / And I’ll no longer be a Capulet.\nROMEO: [Aside.] Shall I hear more, or shall I speak at this?\nJULIET: ’Tis but thy name that is my enemy; / Thou art thyself, though not a Montague. / What’s Montague? It is nor hand nor foot, / Nor arm, nor face, nor any other part / Belonging to a man. O be some other name. / What’s in a name? That which we call a rose / By any other name would smell as sweet; / So Romeo would, were he not Romeo call’d, / Retain that dear perfection which he owes / Without that title. Romeo, doff thy name, / And for thy name, which is no part of thee, / Take all myself.\nROMEO: I take thee at thy word. / Call me but love, and I’ll be new baptis’d; / Henceforth I never will be Romeo.'

const ROMEO_JULIET_EXTRACT_2_SOURCE =
  'William Shakespeare, Romeo and Juliet, Act 2 Scene 2 (text: Project Gutenberg #1513)'

// ─────────────────────────────────────────────────────────────────────────────
// SHAKESPEARE EXTRACTS - THE TEMPEST (Project Gutenberg #1540, held)
// ─────────────────────────────────────────────────────────────────────────────

// Act 4 Scene 1, the end of the masque. Cut with
// playPassage(theTempestText, 'activ-scenei', 'I had forgot that foul conspiracy', 'beating mind'),
// with the printer's break in "no more!" joined (see the docblock).
const TEMPEST_EXTRACT_1 =
  'PROSPERO: [Aside.] I had forgot that foul conspiracy / Of the beast Caliban and his confederates / Against my life: the minute of their plot / Is almost come. [To the Spirits.] Well done! avoid; no more!\nFERDINAND: This is strange: your father’s in some passion / That works him strongly.\nMIRANDA: Never till this day / Saw I him touch’d with anger so distemper’d.\nPROSPERO: You do look, my son, in a mov’d sort, / As if you were dismay’d: be cheerful, sir: / Our revels now are ended. These our actors, / As I foretold you, were all spirits and / Are melted into air, into thin air: / And, like the baseless fabric of this vision, / The cloud-capp’d towers, the gorgeous palaces, / The solemn temples, the great globe itself, / Yea, all which it inherit, shall dissolve, / And, like this insubstantial pageant faded, / Leave not a rack behind. We are such stuff / As dreams are made on, and our little life / Is rounded with a sleep. Sir, I am vex’d: / Bear with my weakness; my old brain is troubled. / Be not disturb’d with my infirmity. / If you be pleas’d, retire into my cell / And there repose: a turn or two I’ll walk, / To still my beating mind.'

const TEMPEST_EXTRACT_1_SOURCE =
  'William Shakespeare, The Tempest, Act 4 Scene 1 (text: Project Gutenberg #1540)'

// ─────────────────────────────────────────────────────────────────────────────
// SHAKESPEARE EXTRACTS - MERCHANT OF VENICE (Project Gutenberg #1515, held)
// ─────────────────────────────────────────────────────────────────────────────

// Act 1 Scene 3, Shylock and Antonio before the bond. Cut with
// playPassage(theMerchantOfVeniceText, 'acti-sceneiii', 'shall we be beholding to you', 'I am as like to call thee').
const MERCHANT_EXTRACT_1 =
  'ANTONIO: Well, Shylock, shall we be beholding to you?\nSHYLOCK: Signior Antonio, many a time and oft / In the Rialto you have rated me / About my moneys and my usances. / Still have I borne it with a patient shrug, / (For suff’rance is the badge of all our tribe.) / You call me misbeliever, cut-throat dog, / And spet upon my Jewish gaberdine, / And all for use of that which is mine own. / Well then, it now appears you need my help. / Go to, then, you come to me, and you say / “Shylock, we would have moneys.” You say so: / You that did void your rheum upon my beard, / And foot me as you spurn a stranger cur / Over your threshold, moneys is your suit. / What should I say to you? Should I not say / “Hath a dog money? Is it possible / A cur can lend three thousand ducats?” Or / Shall I bend low and, in a bondman’s key, / With bated breath and whisp’ring humbleness, / Say this: / “Fair sir, you spet on me on Wednesday last; / You spurn’d me such a day; another time / You call’d me dog; and for these courtesies / I’ll lend you thus much moneys”?\nANTONIO: I am as like to call thee so again, / To spet on thee again, to spurn thee too. / If thou wilt lend this money, lend it not / As to thy friends, for when did friendship take / A breed for barren metal of his friend? / But lend it rather to thine enemy, / Who if he break, thou mayst with better face / Exact the penalty.'

const MERCHANT_EXTRACT_1_SOURCE =
  'William Shakespeare, The Merchant of Venice, Act 1 Scene 3 (text: Project Gutenberg #1515)'

// ─────────────────────────────────────────────────────────────────────────────
// 19TH CENTURY NOVEL EXTRACTS - A CHRISTMAS CAROL (Project Gutenberg #46, held)
// ─────────────────────────────────────────────────────────────────────────────

// Stave 5, the last three paragraphs. Cut with
// passage(aChristmasCarolText, 'section-5', 'A merry Christmas, Bob!', 'God bless Us, Every One').
const CAROL_EXTRACT_1 =
  '"A merry Christmas, Bob!" said Scrooge, with an earnestness that could not be mistaken, as he clapped him on the back. "A merrier Christmas, Bob, my good fellow, than I have given you, for many a year! I\'ll raise your salary, and endeavour to assist your struggling family, and we will discuss your affairs this very afternoon, over a Christmas bowl of smoking bishop, Bob! Make up the fires, and buy another coal-scuttle before you dot another i, Bob Cratchit!"\n\nScrooge was better than his word. He did it all, and infinitely more; and to Tiny Tim, who did NOT die, he was a second father. He became as good a friend, as good a master, and as good a man, as the good old city knew, or any other good old city, town, or borough, in the good old world. Some people laughed to see the alteration in him, but he let them laugh, and little heeded them; for he was wise enough to know that nothing ever happened on this globe, for good, at which some people did not have their fill of laughter in the outset; and knowing that such as these would be blind anyway, he thought it quite as well that they should wrinkle up their eyes in grins, as have the malady in less attractive forms. His own heart laughed: and that was quite enough for him.\n\nHe had no further intercourse with Spirits, but lived upon the Total Abstinence Principle, ever afterwards; and it was always said of him, that he knew how to keep Christmas well, if any man alive possessed the knowledge. May that be truly said of us, and all of us! And so, as Tiny Tim observed, God bless Us, Every One!'

const CAROL_EXTRACT_1_SOURCE =
  'Charles Dickens, A Christmas Carol (1843), Stave 5 (text: Project Gutenberg #46)'

// Stave 1, the two gentlemen collecting for the poor. Cut with
// passage(aChristmasCarolText, 'section-1', 'At this festive season of the year', 'Good afternoon, gentlemen').
const CAROL_EXTRACT_2 =
  '"At this festive season of the year, Mr. Scrooge," said the gentleman, taking up a pen, "it is more than usually desirable that we should make some slight provision for the Poor and destitute, who suffer greatly at the present time. Many thousands are in want of common necessaries; hundreds of thousands are in want of common comforts, sir."\n\n"Are there no prisons?" asked Scrooge.\n\n"Plenty of prisons," said the gentleman, laying down the pen again.\n\n"And the Union workhouses?" demanded Scrooge. "Are they still in operation?"\n\n"They are. Still," returned the gentleman, "I wish I could say they were not."\n\n"The Treadmill and the Poor Law are in full vigour, then?" said Scrooge.\n\n"Both very busy, sir."\n\n"Oh! I was afraid, from what you said at first, that something had occurred to stop them in their useful course," said Scrooge. "I\'m very glad to hear it."\n\n"Under the impression that they scarcely furnish Christian cheer of mind or body to the multitude," returned the gentleman, "a few of us are endeavouring to raise a fund to buy the Poor some meat and drink, and means of warmth. We choose this time, because it is a time, of all others, when Want is keenly felt, and Abundance rejoices. What shall I put you down for?"\n\n"Nothing!" Scrooge replied.\n\n"You wish to be anonymous?"\n\n"I wish to be left alone," said Scrooge. "Since you ask me what I wish, gentlemen, that is my answer. I don\'t make merry myself at Christmas and I can\'t afford to make idle people merry. I help to support the establishments I have mentioned--they cost enough; and those who are badly off must go there."\n\n"Many can\'t go there; and many would rather die."\n\n"If they would rather die," said Scrooge, "they had better do it, and decrease the surplus population. Besides--excuse me--I don\'t know that."\n\n"But you might know it," observed the gentleman.\n\n"It\'s not my business," Scrooge returned. "It\'s enough for a man to understand his own business, and not to interfere with other people\'s. Mine occupies me constantly. Good afternoon, gentlemen!"'

const CAROL_EXTRACT_2_SOURCE =
  'Charles Dickens, A Christmas Carol (1843), Stave 1 (text: Project Gutenberg #46)'

// ─────────────────────────────────────────────────────────────────────────────
// 19TH CENTURY NOVEL EXTRACTS - JANE EYRE (Project Gutenberg #1260, fetched)
// Not held: the Gutenberg plain text, split into chapters at their headings and
// into paragraphs at blank lines, then cut with passage(); its underscores
// (italic type) dropped.
// ─────────────────────────────────────────────────────────────────────────────

// Chapter 23, in the orchard. Cut with
// passage(janeEyre, 'chapter-xxiii', 'I tell you I must go', 'I am no bird').
const JANE_EYRE_EXTRACT_1 =
  '“I tell you I must go!” I retorted, roused to something like passion. “Do you think I can stay to become nothing to you? Do you think I am an automaton?—a machine without feelings? and can bear to have my morsel of bread snatched from my lips, and my drop of living water dashed from my cup? Do you think, because I am poor, obscure, plain, and little, I am soulless and heartless? You think wrong!—I have as much soul as you,—and full as much heart! And if God had gifted me with some beauty and much wealth, I should have made it as hard for you to leave me, as it is now for me to leave you. I am not talking to you now through the medium of custom, conventionalities, nor even of mortal flesh;—it is my spirit that addresses your spirit; just as if both had passed through the grave, and we stood at God’s feet, equal,—as we are!”\n\n“As we are!” repeated Mr. Rochester—“so,” he added, enclosing me in his arms, gathering me to his breast, pressing his lips on my lips: “so, Jane!”\n\n“Yes, so, sir,” I rejoined: “and yet not so; for you are a married man—or as good as a married man, and wed to one inferior to you—to one with whom you have no sympathy—whom I do not believe you truly love; for I have seen and heard you sneer at her. I would scorn such a union: therefore I am better than you—let me go!”\n\n“Where, Jane? To Ireland?”\n\n“Yes—to Ireland. I have spoken my mind, and can go anywhere now.”\n\n“Jane, be still; don’t struggle so, like a wild frantic bird that is rending its own plumage in its desperation.”\n\n“I am no bird; and no net ensnares me; I am a free human being with an independent will, which I now exert to leave you.”'

const JANE_EYRE_EXTRACT_1_SOURCE =
  'Charlotte Brontë, Jane Eyre (1847), Chapter 23 (text: Project Gutenberg #1260)'

// Chapter 27, the night Jane decides to leave Thornfield. Cut with
// passage(janeEyre, 'chapter-xxvii', 'my very conscience and reason turned traitors', 'there I plant my foot').
const JANE_EYRE_EXTRACT_2 =
  'This was true: and while he spoke my very conscience and reason turned traitors against me, and charged me with crime in resisting him. They spoke almost as loud as Feeling: and that clamoured wildly. “Oh, comply!” it said. “Think of his misery; think of his danger—look at his state when left alone; remember his headlong nature; consider the recklessness following on despair—soothe him; save him; love him; tell him you love him and will be his. Who in the world cares for you? or who will be injured by what you do?”\n\nStill indomitable was the reply—“I care for myself. The more solitary, the more friendless, the more unsustained I am, the more I will respect myself. I will keep the law given by God; sanctioned by man. I will hold to the principles received by me when I was sane, and not mad—as I am now. Laws and principles are not for the times when there is no temptation: they are for such moments as this, when body and soul rise in mutiny against their rigour; stringent are they; inviolate they shall be. If at my individual convenience I might break them, what would be their worth? They have a worth—so I have always believed; and if I cannot believe it now, it is because I am insane—quite insane: with my veins running fire, and my heart beating faster than I can count its throbs. Preconceived opinions, foregone determinations, are all I have at this hour to stand by: there I plant my foot.”'

const JANE_EYRE_EXTRACT_2_SOURCE =
  'Charlotte Brontë, Jane Eyre (1847), Chapter 27 (text: Project Gutenberg #1260)'

// ─────────────────────────────────────────────────────────────────────────────
// 19TH CENTURY NOVEL EXTRACTS - GREAT EXPECTATIONS (Project Gutenberg #1400, fetched)
// Not held: the Gutenberg plain text, split into chapters at their headings and
// into paragraphs at blank lines, then cut with passage(); its underscores
// (italic type) dropped.
// ─────────────────────────────────────────────────────────────────────────────

// Chapter 44, Pip's farewell to Estella. Cut with
// passage(greatExpectations, 'chapter-xliv', 'being a blessing to him', 'God forgive you').
const GREAT_EXPECTATIONS_EXTRACT_1 =
  '“Don’t be afraid of my being a blessing to him,” said Estella; “I shall not be that. Come! Here is my hand. Do we part on this, you visionary boy—or man?”\n\n“O Estella!” I answered, as my bitter tears fell fast on her hand, do what I would to restrain them; “even if I remained in England and could hold my head up with the rest, how could I see you Drummle’s wife?”\n\n“Nonsense,” she returned,—“nonsense. This will pass in no time.”\n\n“Never, Estella!”\n\n“You will get me out of your thoughts in a week.”\n\n“Out of my thoughts! You are part of my existence, part of myself. You have been in every line I have ever read since I first came here, the rough common boy whose poor heart you wounded even then. You have been in every prospect I have ever seen since,—on the river, on the sails of the ships, on the marshes, in the clouds, in the light, in the darkness, in the wind, in the woods, in the sea, in the streets. You have been the embodiment of every graceful fancy that my mind has ever become acquainted with. The stones of which the strongest London buildings are made are not more real, or more impossible to be displaced by your hands, than your presence and influence have been to me, there and everywhere, and will be. Estella, to the last hour of my life, you cannot choose but remain part of my character, part of the little good in me, part of the evil. But, in this separation, I associate you only with the good; and I will faithfully hold you to that always, for you must have done me far more good than harm, let me feel now what sharp distress I may. O God bless you, God forgive you!”'

const GREAT_EXPECTATIONS_EXTRACT_1_SOURCE =
  'Charles Dickens, Great Expectations (1861), Chapter 44 (text: Project Gutenberg #1400)'

// Chapter 8, Pip's first visit to Satis House. Cut with
// passage(greatExpectations, 'chapter-viii', 'everything in the room had stopped', 'ashamed of my hands before').
const GREAT_EXPECTATIONS_EXTRACT_2 =
  'It was then I began to understand that everything in the room had stopped, like the watch and the clock, a long time ago. I noticed that Miss Havisham put down the jewel exactly on the spot from which she had taken it up. As Estella dealt the cards, I glanced at the dressing-table again, and saw that the shoe upon it, once white, now yellow, had never been worn. I glanced down at the foot from which the shoe was absent, and saw that the silk stocking on it, once white, now yellow, had been trodden ragged. Without this arrest of everything, this standing still of all the pale decayed objects, not even the withered bridal dress on the collapsed form could have looked so like grave-clothes, or the long veil so like a shroud.\n\nSo she sat, corpse-like, as we played at cards; the frillings and trimmings on her bridal dress, looking like earthy paper. I knew nothing then of the discoveries that are occasionally made of bodies buried in ancient times, which fall to powder in the moment of being distinctly seen; but, I have often thought since, that she must have looked as if the admission of the natural light of day would have struck her to dust.\n\n“He calls the knaves Jacks, this boy!” said Estella with disdain, before our first game was out. “And what coarse hands he has! And what thick boots!”\n\nI had never thought of being ashamed of my hands before; but I began to consider them a very indifferent pair. Her contempt for me was so strong, that it became infectious, and I caught it.'

const GREAT_EXPECTATIONS_EXTRACT_2_SOURCE =
  'Charles Dickens, Great Expectations (1861), Chapter 8 (text: Project Gutenberg #1400)'

// ─────────────────────────────────────────────────────────────────────────────
// QUESTIONS
// ─────────────────────────────────────────────────────────────────────────────

const SHAKESPEARE_QUESTIONS: Record<string, string> = {
  Macbeth:
    'Analyse how Shakespeare presents the effects of guilt and ambition on human psychology. In your answer, refer to the extract and to elsewhere in the play.',
  'Romeo and Juliet':
    'Analyse how Shakespeare uses language to convey romantic love and desire. Refer to the extract and to elsewhere in the play.',
  'The Tempest':
    'Analyse how Shakespeare explores the themes of control, forgiveness, and transformation. Refer to the extract and to elsewhere in the play.',
  'The Merchant of Venice':
    'Analyse how Shakespeare presents prejudice, mercy, and the conflict between law and compassion. Refer to the extract and to elsewhere in the play.',
}

const NOVEL_QUESTIONS: Record<string, string> = {
  'A Christmas Carol':
    'Analyse how Dickens uses the transformation of Scrooge to explore the themes of redemption and social responsibility. Refer to the extract and elsewhere in the novella.',
  'Jane Eyre':
    "Analyse how Brontë presents the tension between social convention and individual autonomy through Jane's character and choices. Refer to the extract and elsewhere in the novel.",
  'Great Expectations':
    "Analyse how Dickens uses Pip's desire for self-improvement to explore the themes of ambition, class, and identity. Refer to the extract and elsewhere in the novel.",
}

// ─────────────────────────────────────────────────────────────────────────────
// HELPER FUNCTION TO CREATE PAPER 1
// ─────────────────────────────────────────────────────────────────────────────

type GradedAnswers = { 'Grade 5': string; 'Grade 7': string; 'Grade 9': string }

/** One extract question: the text, its label, and answers written for that extract. */
interface ExtractQuestion {
  title: string
  extract: string
  source: string
  modelAnswers: GradedAnswers
}

const createPaper1Exam = (
  setNumber: number,
  shakespeare: ExtractQuestion,
  novel: ExtractQuestion,
): MockExamPaper => {
  const nn = String(setNumber).padStart(2, '0')
  return {
    id: `aqa-lit-p1-${nn}`,
    board: 'AQA',
    paperNumber: 1,
    title: 'AQA English Literature Paper 1',
    subtitle: 'Shakespeare and 19th Century Novel',
    code: '8702/1',
    totalTimeMinutes: 105,
    totalMarks: 64,
    sections: [
      {
        id: `aqa-lit-p1-${nn}-shakespeare`,
        title: `Section A: Shakespeare - ${shakespeare.title} (34 marks)`,
        description:
          'Answer the question on your studied text. You must write in full sentences using your own words and quotations from the extract to support your answer. Refer to both the extract and elsewhere in the play.',
        totalMarks: 34,
        suggestedTimeMinutes: 52,
        questions: [
          {
            id: `aqa-lit-p1-${nn}-q1`,
            questionNumber: 1,
            questionText: `${SHAKESPEARE_QUESTIONS[shakespeare.title]} [30 marks, plus 4 marks for AO4: spelling, punctuation, grammar and vocabulary]`,
            marks: 34,
            suggestedTimeMinutes: 52,
            questionType: 'analysis',
            extract: shakespeare.extract,
            extractSource: shakespeare.source,
            modelAnswers: shakespeare.modelAnswers,
            markScheme: [
              'Analyses language, form and dramatic technique with sustained reference to the extract',
              'Makes well-integrated references to elsewhere in the play',
              'Develops interpretations of the specified theme',
              'Uses subject terminology accurately and appropriately',
              'Constructs clearly developed analytical points with close textual support',
              'Grade 7: Sophisticated analysis of how technique creates meaning; considers alternative interpretations',
              'Grade 9: Penetrating critical analysis; explores philosophical and thematic complexity; considers historical/cultural contexts',
              'AO4 (4 marks): a range of vocabulary and sentence structures for clarity, purpose and effect, with accurate spelling and punctuation',
            ],
          },
        ],
      },
      {
        id: `aqa-lit-p1-${nn}-novel`,
        title: `Section B: 19th Century Novel - ${novel.title} (30 marks)`,
        description:
          'Answer the question on your studied text. You must write in full sentences using your own words and quotations from the extract to support your answer. Refer to both the extract and elsewhere in the novel.',
        totalMarks: 30,
        suggestedTimeMinutes: 53,
        questions: [
          {
            id: `aqa-lit-p1-${nn}-q2`,
            questionNumber: 2,
            questionText: NOVEL_QUESTIONS[novel.title],
            marks: 30,
            suggestedTimeMinutes: 53,
            questionType: 'analysis',
            extract: novel.extract,
            extractSource: novel.source,
            modelAnswers: novel.modelAnswers,
            markScheme: [
              'Analyses language and narrative technique with sustained reference to the extract',
              'Makes well-integrated references to elsewhere in the novel',
              'Develops interpretations of the specified theme(s)',
              'Uses subject terminology accurately',
              'Constructs clearly developed analytical points with close textual support',
              'Grade 7: Sophisticated analysis of how technique serves thematic purposes; considers ambiguities',
              'Grade 9: Penetrating analysis of ideological and philosophical implications; engages with literary and historical contexts',
            ],
          },
        ],
      },
    ],
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// MODEL ANSWERS, ONE SET PER EXTRACT
// Every quotation is words of the extract the answer is printed under; the
// rest of the text is referred to in paraphrase.
// ─────────────────────────────────────────────────────────────────────────────

// Paper 1, Macbeth, Act 5 Scene 1.
const MACBETH_1_ANSWERS: GradedAnswers = {
  'Grade 5': `In this extract Shakespeare shows how guilt has broken Lady Macbeth's mind. She is sleepwalking and rubs at her hands, saying "Out, damned spot". The spot is Duncan's blood, which is no longer there, so the guilt is in her mind rather than on her skin. She asks "What, will these hands ne'er be clean?", a question which shows she feels she can never be free of what she has done. This is very different from Act 2 Scene 2, when she told Macbeth that a little water would clear them of the murder. She also mentions Lady Macduff ("The Thane of Fife had a wife") and says "Banquo's buried", so her guilt reaches beyond Duncan to the killings Macbeth went on to commit. The Doctor says "This disease is beyond my practice", which shows that no medicine can cure guilt. Shakespeare suggests that ambition led the Macbeths to murder, and that murder has destroyed her peace of mind. Later in the play we learn that she has died, and Malcolm reports that she is thought to have killed herself, which shows where her guilt leads.`,
  'Grade 7': `Shakespeare presents guilt as something the waking mind can hold down but the sleeping mind cannot. Lady Macbeth sleepwalks while the Doctor and the Gentlewoman watch, so the audience overhears what she would never say awake. She now speaks in broken prose, whereas in Act 1 she spoke in commanding verse, calling on spirits to fill her with cruelty; the loss of verse mirrors the loss of control. The imperative "Out, damned spot" is addressed to a stain that is not there, so the woman whose commands once governed Macbeth has no power even over her own hand. Her fragments jump between moments of the crime: "'tis time to do't" relives the night of the murder, "a soldier, and afeard?" repeats her taunts from Act 1 Scene 7, and "so much blood in him" admits the horror she once waved away. The shift from sight to smell in "Here's the smell of the blood still", and the hyperbole of "all the perfumes of Arabia", show guilt filling every sense, while "this little hand" makes her suddenly small and vulnerable. Most tellingly, "What's done cannot be undone" turns her advice to Macbeth in Act 3 Scene 2, that what is done is done, into its opposite: a comfort has become a sentence without appeal. Shakespeare suggests that ambition could silence her conscience only for a time.`,
  'Grade 9': `Shakespeare stages guilt as the return of everything Lady Macbeth once commanded away. In Act 1 Scene 5 she called on thick night, wrapped in the smoke of hell, so that her knife would not see the wound it made nor heaven peep through the dark; here, the Gentlewoman has just told us, she keeps a light by her at all times, and "Hell is murky" admits that the darkness she invoked has become the place she dreads. The form of the scene matters as much as its words. She speaks broken prose to listeners she cannot see, and the Doctor's resolve to "set down what comes from her" turns private conscience into testimony: a confession without a confessor, which draws from him the admission that "This disease is beyond my practice". Her fragments are not random, but they are not in order either. The slaughter at Fife ("The Thane of Fife had a wife") comes before the banquet ("you mar all with this starting"), and Banquo's murder ("Banquo's buried") before the night of Duncan's ("There's knocking at the gate"), as if her mind were forced to relive the play's crimes without the power to arrange them. The tripled "To bed, to bed, to bed" and the helpless "What's done cannot be undone" suggest a mind caught in a loop, the opposite of the forward-driving ambition of Act 1. A Jacobean audience might read her collapse as the conventional punishment of a woman who unsexed herself; yet Shakespeare gives her the play's most intimate image of remorse in "this little hand", which makes her pitiable rather than merely monstrous. Where Macbeth's guilt drives him on to further murders, hers turns inward and destroys her, and Malcolm's closing verdict on her as a fiendish queen does not match what the audience has seen in this scene.`,
}

// Paper 2, Macbeth, Act 5 Scene 5.
const MACBETH_2_ANSWERS: GradedAnswers = {
  'Grade 5': `In this extract Macbeth shows that guilt and ambition have left him feeling empty. He says "I have almost forgot the taste of fears", which means he has seen so much horror that nothing frightens him any more. Earlier in the play he was terrified by the idea of killing Duncan, so this shows how much he has changed. He says "I have supp'd full with horrors", as if he has eaten so much horror that he is full. When Seyton tells him "The Queen, my lord, is dead", he does not seem to grieve. Instead he says "She should have died hereafter", which sounds cold. In the famous speech he repeats "Tomorrow, and tomorrow, and tomorrow" to show that time goes on slowly and has no point. He calls life a "walking shadow" and "a tale / Told by an idiot", which shows he now thinks life means nothing. Shakespeare shows that Macbeth's ambition to become king has not made him happy but has left him without hope.`,
  'Grade 7': `Shakespeare presents the effect of guilt and ambition on Macbeth as a numbness worse than fear. He looks back to a time when "my senses would have cool'd" at a scream in the night and his hair would stand on end at a frightening story; the audience remembers Act 1 Scene 3, where the mere thought of murder made his hair stand up and his heart knock at his ribs. The metaphor "I have supp'd full with horrors" suggests he has fed on violence until he is sated, and "Direness, familiar to my slaughterous thoughts" admits that murder has become habitual. That numbness shapes his response to his wife's death. "She should have died hereafter" is ambiguous: it may mean she would have died some time anyway, or that she should have died at a better moment, but either way there is no time for grief. The soliloquy that follows turns her death into a view of all time. The repeated "and" of "Tomorrow, and tomorrow, and tomorrow" and the slow, almost wholly monosyllabic "Creeps in this petty pace from day to day" make time drag, and the metaphors of the "brief candle" and the "poor player" reduce life to a flicker and a performance. For a man who killed for a crown, the conclusion that life is "Signifying nothing" is the final cost of his ambition.`,
  'Grade 9': `Shakespeare presents the end point of ambition as the loss of the capacity to feel. The speech before the Queen's death is an inventory of what has gone: "I have almost forgot the taste of fears". The word "almost" is telling, since some memory of fear survives, enough for Macbeth to measure the loss. The eating metaphor of "supp'd full with horrors" recalls the banquet of Act 3 Scene 4, which Banquo's ghost ruined; now horror is his daily food and no longer spoils his appetite, and "Direness, familiar to my slaughterous thoughts" presents violence as an old acquaintance. When Seyton reports "The Queen, my lord, is dead", the message is met not with grief but with a meditation on time. Macbeth's ambition was always about the future, prophecies to be fulfilled and, in Act 3 Scene 1, a crown he resented because Banquo's heirs would inherit it; here the future becomes merely "Tomorrow, and tomorrow, and tomorrow", an endless sameness that leads only to "dusty death". The imagery then turns theatrical: life is "a poor player" who "struts and frets his hour upon the stage", a self-conscious joke in a theatre that makes the audience part of the emptiness he describes. The speech can be read as despair earned by guilt, or as Macbeth's last evasion: by declaring that nothing signifies, he frees himself from the meaning of his crimes. Either way, the tyrant who gained everything he wanted finds it "full of sound and fury" and "Signifying nothing".`,
}

// Paper 3, Romeo and Juliet, Act 2 Scene 2 (Romeo).
// Until 2 October 2026 the Grade 9 answer said the Prologue "called this a
// death-marked love": the Prologue's words, without quotation marks and in a
// spelling the held edition (src/data/full-texts/romeo-and-juliet.ts) does not
// print (it has "death-mark'd"). An answer here quotes only the extract above
// it (aqa-lit-p1-mocks-quote-the-real-text.test.ts), so the sentence now makes
// the point in its own words rather than quoting the Prologue.
const ROMEO_JULIET_1_ANSWERS: GradedAnswers = {
  'Grade 5': `In this extract Romeo sees Juliet at her window and uses beautiful images to describe her. He says "It is the east, and Juliet is the sun", a metaphor which shows she is the most important thing in his world and brings him light. He tells the sun to "kill the envious moon", suggesting Juliet is more beautiful than the moon. He says "It is my lady, O it is my love", which shows his excitement. He compares her eyes to stars and says that the brightness of her cheek would shame them "As daylight doth a lamp", a simile which shows how bright she seems to him. At the end he wishes "that I were a glove upon that hand", which shows he wants to be close to her and touch her. Juliet does not know he is there, so this is a soliloquy that shows his true feelings. In Act 1 Romeo was miserable about Rosaline, but now his love seems stronger and more joyful.`,
  'Grade 7': `Shakespeare presents Romeo's love through light imagery that makes Juliet the centre of his universe. The opening question "But soft, what light through yonder window breaks?" makes her appearance feel like dawn, and the metaphor "Juliet is the sun" places her at the centre of his world. The moon, associated with Diana and chastity, is "envious" and "sick and pale with grief"; when Romeo urges Juliet to "cast it off", he invites her to give up the "vestal livery" of virginity, so the imagery expresses desire as well as worship. The soliloquy keeps interrupting itself: "She speaks, yet she says nothing" and "I am too bold" show a lover talking himself into and out of courage. The hyperbole that her eyes would shine so brightly that "birds would sing and think it were not night" shows love transforming the natural order. Finally, "O that I were a glove upon that hand" brings the cosmic language down to touch, revealing physical longing beneath the poetry. In Act 1 Scene 1 his love for Rosaline was expressed in tired oxymorons; here his language is fresher and more physical, which suggests that this love is real.`,
  'Grade 9': `Shakespeare presents romantic love here as a new language struggling to replace an old one. The first line, "He jests at scars that never felt a wound", answers Mercutio's mockery in the previous scene and frames what follows as the speech of a wounded man, drawing on the Petrarchan convention of love as injury. Yet the soliloquy soon moves beyond the conventional sighing Romeo offered Rosaline in Act 1. The metaphor "Juliet is the sun" reverses the usual night-time setting of courtship, so that Juliet turns night into day, an inversion Romeo extends when he imagines that birds would "sing and think it were not night". The moon imagery carries a sexual argument. The moon belongs to Diana, patron of virgins, and the "envious moon" is "sick and pale with grief" because Juliet outshines her; Romeo's instruction to "cast it off" asks Juliet to lay aside the "vestal livery" of chastity. Worship and desire are fused, and the speech ends, tellingly, in the wish "That I might touch that cheek". Dramatically, the audience knows what Romeo does not, that the Prologue has already told the audience that this love is marked for death, so the language of light is shadowed by the sense that such brightness burns out; later in this scene Juliet herself fears that their vows are too sudden, like lightning. Shakespeare lets the audience enjoy the transcendence of this love while knowing that its speed is part of its danger.`,
}

// Paper 4, Romeo and Juliet, Act 2 Scene 2 (Juliet).
const ROMEO_JULIET_2_ANSWERS: GradedAnswers = {
  'Grade 5': `In this extract Juliet talks about Romeo's name, not knowing he is listening. She asks "wherefore art thou Romeo?", which means why are you Romeo, because his name makes him a Montague, her family's enemy. She tells him "Deny thy father and refuse thy name", which shows she wants him to give up his family for her, and she offers to give up hers too: "I'll no longer be a Capulet". She says "'Tis but thy name that is my enemy", meaning she does not hate Romeo himself. She uses the example of a rose, which would "smell as sweet" with any other name, to show that a name does not change who someone is. Romeo then replies "Call me but love", which shows he is happy to give up his name for her. Shakespeare uses this language to show that love matters more to them than their families. But elsewhere in the play the feud and their names lead to their deaths, so their love cannot escape the conflict.`,
  'Grade 7': `Shakespeare presents love in this extract as a force that makes names and loyalties seem arbitrary. Juliet's opening question, "wherefore art thou Romeo?", asks why he must be Romeo, and her imperatives "Deny thy father and refuse thy name" show her willingness to reshape family identity for love. Unlike Romeo's elaborate imagery earlier in the scene, her argument is logical: a name "is nor hand nor foot", and the list of body parts insists that the real Romeo is physical and present, not a label. The metaphor of the rose that "By any other name would smell as sweet" makes the point memorable, but her conclusion is surprisingly bold: "take all myself". The offer is both generous and physical, so desire is expressed through reason. Romeo's aside, "Shall I hear more, or shall I speak at this?", creates dramatic irony, and his reply "I take thee at thy word" treats her private thoughts as a vow. His promise to be "new baptis'd" uses religious language to make love sacred. Yet the audience knows from the Prologue that the feud will not be escaped, and in Act 3 Romeo kills Juliet's cousin Tybalt, which shows that names cannot simply be thrown away.`,
  'Grade 9': `Shakespeare gives Juliet an argument about language itself: that love can rename the world. "Wherefore art thou Romeo?" is a question about identity, not location, and her imperatives to "Deny thy father and refuse thy name" imagine an escape from inherited identity. Yet she immediately offers a matching sacrifice, "I'll no longer be a Capulet", so the speech imagines love as an exchange between equals. Her reasoning has the shape of a proof. She separates the man from the sign ("Thou art thyself, though not a Montague"), tests the sign against the body ("nor any other part"), and illustrates with the rose, a traditional emblem of love, which "By any other name would smell as sweet". Romeo, likewise, would keep "that dear perfection which he owes / Without that title": "owes" means owns, so his qualities are his own possession, independent of family. Her final offer, "take all myself", turns the argument into desire, and because she believes she is alone it has an unguarded honesty that the conventions of courtship would not allow. Romeo's response, "Call me but love, and I'll be new baptis'd", accepts a new name at once, but the religious term hints at how absolute and hasty the commitment is. The play tests Juliet's faith in words harshly: after Romeo kills Tybalt in Act 3, he asks the Friar in which part of his body his name lodges, so that he may cut it out, a violent literal version of her rose argument. Shakespeare lets the audience believe in this love while showing that names, and the feud they carry, are not so easily shed.`,
}

// Paper 5, The Tempest, Act 4 Scene 1.
const TEMPEST_1_ANSWERS: GradedAnswers = {
  'Grade 5': `In this extract Prospero suddenly stops the masque he has created for Miranda and Ferdinand. He remembers "that foul conspiracy" of "the beast Caliban", which shows he is angry that Caliban is plotting against him, and he sends the spirits away with "avoid; no more", which shows that he controls them and can end the show when he wants. Miranda says she has never seen him "touch'd with anger so distemper'd". Then Prospero gives his famous speech, "Our revels now are ended", saying that the actors were spirits and are "melted into air, into thin air". He says even "the great globe itself" will "dissolve", which shows that everything will end. He admits "my old brain is troubled", which shows he is losing control of his feelings. Later in the play Prospero forgives his enemies instead of taking revenge, so this moment shows him beginning to change.`,
  'Grade 7': `Shakespeare presents Prospero's control as powerful but fragile. The masque, a spectacle he created, ends at his word, with the curt commands "avoid; no more" to the spirits. His aside reveals why: he had "forgot that foul conspiracy", and calling Caliban "the beast" shows how he justifies his rule of the island by treating Caliban as less than human. Ferdinand and Miranda notice a loss of self-control: he is "in some passion", and Miranda has never seen him "touch'd with anger so distemper'd". His speech then turns this crisis into philosophy. The actors are "melted into air, into thin air", and the list moving from "The cloud-capp'd towers" to "the great globe itself" suggests that all human power will "dissolve". The metaphor that we are "such stuff / As dreams are made on" presents life as an illusion, like his magic. The honesty of "Bear with my weakness" shows Prospero beginning to change from a controlling magician into a humbler man, which prepares for Act 5, where he chooses forgiveness over vengeance and gives up his magic.`,
  'Grade 9': `Shakespeare uses this moment to expose the limits of Prospero's control at the point where it seems most complete. The masque celebrates Ferdinand and Miranda's betrothal, which Prospero has engineered, yet it collapses because he forgets something: "I had forgot that foul conspiracy". The magician who has organised the island's events hour by hour is caught out by "the minute of their plot". His anger at "the beast Caliban" reveals the violence beneath his authority, and the lovers' view of him, "touch'd with anger so distemper'd", shows a ruler suddenly seen from outside. The speech that follows is metatheatrical. "These our actors" were "all spirits", and the list rising from "The cloud-capp'd towers" to "the great globe itself" may well have made Shakespeare's audience think of the Globe, so the playhouse, the world and Prospero's art are made equally temporary. "Leave not a rack behind", where a rack is a wisp of cloud, makes the dissolution total. Then the argument turns to human life: "our little life" is "rounded with a sleep", existence encircled by the sleep of death. This is crucial to the theme of transformation. The magician admits "my old brain is troubled" and needs a walk "To still my beating mind", confessing weakness to the future son-in-law he has tested. That humility prepares for Act 5, where, moved by Ariel's pity for his prisoners, he decides that virtue is rarer than vengeance, forgives Alonso and Antonio, and renounces his magic. Control, in this reading, is only fully mastered when it is given up.`,
}

// Paper 6, The Merchant of Venice, Act 1 Scene 3.
const MERCHANT_1_ANSWERS: GradedAnswers = {
  'Grade 5': `In this extract Shylock reminds Antonio how badly he has treated him. He says Antonio has called him "misbeliever, cut-throat dog" and would "spet upon my Jewish gaberdine". This shows the prejudice Shylock has faced because he is Jewish. He asks "Hath a dog money?", a rhetorical question that shows how unfair it is that Antonio treats him like an animal but still wants to borrow from him. He says he has borne it "with a patient shrug", because "suff'rance is the badge of all our tribe", which shows that Jewish people have had to put up with this treatment for a long time. Antonio is not sorry. He says "I am as like to call thee so again", which shows his prejudice will not change, and he tells Shylock to lend the money as if to an enemy. Later in the play Shylock insists on the law and his bond, and Portia asks him to show mercy, but he refuses, so the hatred in this scene leads to the trial.`,
  'Grade 7': `Shakespeare presents prejudice in this extract through Shylock's bitter account of how Antonio treats him in public. The opening "many a time and oft" shows that the abuse is repeated, and it happens "In the Rialto", the centre of Venetian business. The insults "misbeliever, cut-throat dog" attack both his religion and his trade, and the image of Antonio who would "spet upon my Jewish gaberdine" shows contempt aimed at the clothing that marks him as Jewish. Shylock's rhetorical questions, "Hath a dog money? Is it possible / A cur can lend three thousand ducats?", expose the hypocrisy of a society that despises him while needing his money. He even imitates the "bondman's key" and "whisp'ring humbleness" he is expected to adopt, which shows his sarcasm and his sense of injustice. Antonio's reply reveals that the prejudice is unashamed: he is "as like to call thee so again". By asking Shylock to lend "rather to thine enemy" so that he may "Exact the penalty", Antonio himself invites the pitiless terms Shylock goes on to propose in this scene, the bond that will later threaten his life. In Act 4, Portia's appeal for mercy and Shylock's insistence on the law both grow from this scene, where neither man shows compassion to the other.`,
  'Grade 9': `Shakespeare builds the play's conflict between law and compassion out of this exchange, in which prejudice is both personal and economic. Shylock's speech is a record of public humiliation: "In the Rialto you have rated me". The Rialto, where Venetian wealth is made, is where Antonio insults the man whose money he now needs. Shylock's rhetoric works by quotation. He quotes the Christians' insults ("misbeliever, cut-throat dog"), their request ("Shylock, we would have moneys"), and finally the grovelling reply he might give ("Fair sir, you spet on me on Wednesday last"), so the speech becomes a small drama exposing the absurdity of their position. The animal imagery of the "stranger cur" and "Hath a dog money?" turns the Christians' dehumanising language back on them: if he is a dog, how can he lend? The line "suff'rance is the badge of all our tribe" gives the prejudice a history larger than one man, and "badge" recalls the marks that Jews in Venice were required to wear. Antonio, often seen as the play's model of Christian love, refuses any compassion: "I am as like to call thee so again". His demand that the loan be made "rather to thine enemy", from whom Shylock may "Exact the penalty", introduces the legal logic Shylock will later turn against him, and which Portia turns back on Shylock in Act 4 after her appeal to mercy fails. Shakespeare's first audiences probably saw Shylock as a villain, yet this speech gives him the play's most coherent account of injustice, so the mercy of Act 4, which ends in his enforced conversion, looks less like compassion than like victory.`,
}

// Paper 1, A Christmas Carol, Stave 5.
const CAROL_1_ANSWERS: GradedAnswers = {
  'Grade 5': `In this extract Dickens shows that Scrooge has completely changed. At the start of the novella he pays Bob Cratchit very little and will not let him have a proper fire, but here he says "I'll raise your salary" and promises to "assist your struggling family". He even tells Bob to "Make up the fires", which shows he is no longer mean. Dickens says Scrooge "was better than his word", which means he did even more than he promised. He becomes "a second father" to Tiny Tim, "who did NOT die", so his change saves a life. This shows that generosity is a social responsibility, because Scrooge's money makes a real difference to a poor family. Some people laugh at him, but "His own heart laughed", which shows he is happy now. At the end Dickens says Scrooge "knew how to keep Christmas well", which tells readers they should behave like the new Scrooge too.`,
  'Grade 7': `Dickens presents Scrooge's redemption as something proved by actions rather than feelings. The scene with Bob turns Stave 1 inside out: the employer who kept the coal-box in his own room now orders Bob to "buy another coal-scuttle before you dot another i", and the joke about dotting an i mocks the clerk's drudgery Scrooge used to enforce. His promise to "raise your salary, and endeavour to assist your struggling family" moves from wages, which he owes, to care, which he does not, and that shift is the social responsibility Dickens wants his readers to accept. The narrator then tells us Scrooge "was better than his word", and two sentences later builds a tricolon, "as good a friend, as good a master, and as good a man", in which each role widens: friendship, employment, humanity. The repetition of "good old" across the city, the world and every "town, or borough" makes his goodness public, the opposite of the solitary man of Stave 1. Dickens also anticipates cynicism: "Some people laughed to see the alteration in him", but "His own heart laughed", so his change does not depend on approval. The final paragraph turns outward with "May that be truly said of us, and all of us", which makes Scrooge's redemption a model the reader is invited to copy.`,
  'Grade 9': `Dickens ends the novella by turning a moral change into an economic one, which is the point of his social argument. Scrooge's speech to Bob is full of concrete promises, the salary, the help for the "struggling family", the fires and a new coal-scuttle, so redemption is measured in the same currency as the sin. In Stave 1 Scrooge's meanness showed itself as a refusal to spend on warmth; here warmth is literally what he buys. The hyperbole of "He did it all, and infinitely more" might seem sentimental, but the clause "to Tiny Tim, who did NOT die", in Dickens's own capitals, reminds the reader of the future Stave 4 showed: a child's death was the cost of Scrooge's indifference, and money and attention have averted it. Dickens is careful, too, to show that the change is not a performance for society. The passage about those who "laughed to see the alteration in him" is wry and generous: Scrooge is "wise enough to know" that any change is mocked at first, and lets it be. "His own heart laughed" completes his return to the world: the man once described as solitary as an oyster now has an inner life at ease with others. The closing move from "him" to "us, and all of us", with Tiny Tim's blessing, widens the story into a sermon. Written in 1843, amid argument about the New Poor Law and the condition of the poor, the Carol does not only ask its readers to feel for the Cratchits; it asks them to act as Scrooge does here, and to be better than their word.`,
}

// Paper 2, A Christmas Carol, Stave 1.
const CAROL_2_ANSWERS: GradedAnswers = {
  'Grade 5': `In this extract Scrooge has not changed yet, and Dickens shows how selfish he is so that his later transformation seems greater. Two gentlemen ask him to give money for the poor, who "suffer greatly at the present time". Scrooge replies with questions: "Are there no prisons?" and "And the Union workhouses?" This shows he thinks the poor should be locked away rather than helped. When they ask what to put him down for, he says "Nothing", and then "I wish to be left alone", which shows he does not care about anyone. His worst line is that if the poor would rather die "they had better do it, and decrease the surplus population", which is cruel. He also says "It's not my business". Later in the novella the spirits show him the Cratchits and Tiny Tim, and in Stave 5 he gives a large sum to one of these same gentlemen. Dickens uses this scene to show that people have a responsibility to help the poor.`,
  'Grade 7': `Dickens uses this dialogue to set out exactly what Scrooge's redemption will have to undo. The gentleman's appeal is careful and factual, "Many thousands are in want of common necessaries", but Scrooge answers need with institutions: "Are there no prisons?" and "And the Union workhouses?" His questions are rhetorical, and the sarcasm of "I'm very glad to hear it" shows that for him the Treadmill and the Poor Law are the proper answer to poverty. The gentleman's reply, "I wish I could say they were not", exposes the gap between Scrooge's view and a humane one. Dickens gives Scrooge the language of economics: he "can't afford to make idle people merry", and the phrase "decrease the surplus population" borrows from the Malthusian arguments that shaped the 1834 Poor Law. The cold logic is funny and horrifying at once. His closing statement, "It's not my business", sets up the novella's central correction, since Marley's ghost, later in the same stave, cries that mankind should have been his business. In Stave 3 the Ghost of Christmas Present throws the remark about the surplus population back at Scrooge when he asks whether Tiny Tim will live, so the transformation is measured against this very scene.`,
  'Grade 9': `Dickens stages this scene as a debate in which Scrooge wins every exchange and loses the argument. The gentleman speaks the language of Christian charity, "Christian cheer of mind or body", and personifies need in "when Want is keenly felt, and Abundance rejoices", as if Want and Abundance were figures in a morality play; this anticipates the allegorical children, Ignorance and Want, in Stave 3. Scrooge answers in the vocabulary of the state and the market: prisons, "Union workhouses", "The Treadmill and the Poor Law", and establishments that "cost enough". His sarcasm is precise; he pretends to fear that "something had occurred to stop them in their useful course", so the word "useful" turns punishment into a public good. The notorious "decrease the surplus population" puts Malthusian political economy, which informed the 1834 Poor Law, into the mouth of a miser, and Dickens's irony is that the theory sounds most monstrous when applied to individual people. The short exchanges ("Nothing", "You wish to be anonymous?") give the scene a comic rhythm, and the gentleman's mistaking Scrooge for a modest donor makes his reply, "I wish to be left alone", starker. Finally "It's not my business" and "Mine occupies me constantly" make business the whole of moral life, the error Marley's ghost corrects within the stave. Redemption in the novella is not a vague softening but the reversal of these particular claims, which is why the same gentleman reappears in Stave 5 to receive Scrooge's donation, back payments and all.`,
}

// Paper 3, Jane Eyre, Chapter 23.
const JANE_EYRE_1_ANSWERS: GradedAnswers = {
  'Grade 5': `In this extract Jane stands up to Mr Rochester because she thinks he is going to marry Blanche Ingram. She asks "Do you think I am an automaton?", which means a machine without feelings, to show she has emotions like anyone else. She says people think that "because I am poor, obscure, plain, and little" she has no soul, but "I have as much soul as you". This challenges the idea that a poor woman is worth less than a rich man. She says they stand before God "equal", which goes against the rules of the time, when a governess was treated almost as a servant. When Rochester calls her a "wild frantic bird", she replies "I am no bird; and no net ensnares me", which shows she refuses to be trapped. Brontë presents Jane as an independent woman who will not let society decide her worth. Later in the novel she even leaves Rochester when she finds out he is already married, which shows she follows her own principles.`,
  'Grade 7': `Brontë presents Jane's autonomy as a claim to spiritual equality that ignores the rules of class and gender. Her rhetorical questions ("Do you think I am an automaton?") attack the assumption that a dependent woman is a mechanism without feeling, and the list "poor, obscure, plain, and little" names exactly the qualities her society uses to rank her low. Her answer, "I have as much soul as you", insists on equality at a level class cannot reach. The key sentence rejects convention outright: she is not speaking "through the medium of custom, conventionalities, nor even of mortal flesh", but spirit to spirit, as if they "stood at God's feet, equal". Religion becomes a radical argument, since before God the governess and the master are the same. Yet Jane's autonomy includes judgement: she would "scorn such a union" as a loveless marriage of convenience, so she is not only resisting convention but holding herself to a higher standard than Rochester. The passage ends with "I am no bird", turning Rochester's image of a trapped bird into a statement of free will: "I am a free human being with an independent will". The irony, which the reader learns in Chapter 26, is that Rochester is indeed a married man, so Jane's accusation is truer than she knows.`,
  'Grade 9': `Brontë presents the tension between convention and autonomy by letting Jane speak in a register her social position forbids. A governess addressing her employer in a torrent of rhetorical questions is itself a breach of convention, and the narrator admits she is "roused to something like passion". The questions build through concrete images of deprivation, the "morsel of bread snatched from my lips" and the "drop of living water dashed from my cup", which make emotional loss as physical as the hunger she knew at Lowood. The list "poor, obscure, plain, and little" is almost a portrait of her drawn by her enemies, and Jane accepts every adjective while denying their conclusion. Her argument then moves from the social to the spiritual. By refusing "the medium of custom, conventionalities" and imagining a moment when "both had passed through the grave", she presents equality as something that exists now but is visible only beyond death, a daring use of Christian doctrine against class hierarchy. The passage is also more complex than a manifesto. Rochester's "so, Jane" and his embrace try to absorb her speech into his possession of her, and she immediately resists: "let me go". The final exchange redefines freedom. Rochester's simile of a "wild frantic bird that is rending its own plumage" pictures her struggle as self-harm, but Jane answers that she has an "independent will, which I now exert to leave you". Autonomy is not the absence of feeling but the power to choose against it, which prepares for Chapter 27, when she leaves Thornfield, and Chapter 37, when she returns only once she is independent and free to choose.`,
}

// Paper 4, Jane Eyre, Chapter 27.
const JANE_EYRE_2_ANSWERS: GradedAnswers = {
  'Grade 5': `In this extract Jane has found out that Mr Rochester is already married, and he wants her to stay with him anyway. Her feelings tell her to agree: "Oh, comply" and "soothe him; save him; love him". This shows how much she loves him and how hard the decision is. But she answers "I care for myself". She says "The more solitary, the more friendless, the more unsustained I am, the more I will respect myself", which shows she values her self-respect more than being loved. She also says "I will keep the law given by God", which shows she is following the rules of religion and society. However, it is her own choice to follow them, so she is still independent. Brontë shows the conflict between Jane's heart and her principles. Earlier in the novel Jane stood up to Mrs Reed as a child, so this shows she has always had a strong will.`,
  'Grade 7': `Brontë presents this moment as a battle inside Jane in which convention and autonomy seem to change places. Her "conscience and reason turned traitors", and "Feeling" is personified as a voice pleading with her in a run of imperatives: "soothe him; save him; love him". The short clauses separated by semicolons convey the urgency of temptation. Feeling even uses her isolation as an argument: "Who in the world cares for you?" Jane's reply takes that argument and reverses it: "I care for myself". Her independence here does not mean defying rules but choosing them: "I will keep the law given by God; sanctioned by man". The sentence "Laws and principles are not for the times when there is no temptation" shows that principles only have value if they hold under pressure, and "If at my individual convenience I might break them, what would be their worth?" is a rhetorical question that answers itself. She admits her emotional state openly, "with my veins running fire", so she is not cold but determined. The final metaphor, "there I plant my foot", presents her principles as solid ground. Brontë suggests that true autonomy is self-government, not doing whatever one desires, and this prepares for Jane's later refusal of St John Rivers, whose proposal of a marriage without love she also rejects on principle.`,
  'Grade 9': `Brontë makes this passage a paradox: Jane asserts her autonomy by choosing to obey. The first paragraph presents temptation as an uprising inside her. Her "conscience and reason turned traitors against me", and personified "Feeling" speaks in a breathless series of imperatives, "soothe him; save him; love him", that makes surrender seem the moral act. Its most persuasive argument is her social nothingness: "Who in the world cares for you?" For an orphaned governess without family or money, conventional morality appears to protect no one, least of all her. Jane's answer moves value from society to the self: "I care for myself". The parallel clauses of "The more solitary, the more friendless, the more unsustained I am" turn every deprivation into a reason for self-respect. Crucially, she does not treat laws as rules imposed from outside; she reasons that "Laws and principles are not for the times when there is no temptation", so their worth is proved by her will to keep them "when body and soul rise in mutiny against their rigour". The language of rebellion, "mutiny" and "traitors", is placed on the side of the law, which subverts the Romantic equation of passion with freedom. Brontë does not make Jane serene. She calls herself "quite insane", and "Preconceived opinions, foregone determinations" are all she has to stand on. The closing image, "there I plant my foot", is physical and stubborn, like the child who defied Mrs Reed in Chapter 4. A Victorian reader might see Jane's choice as conventional virtue; Brontë presents it as the highest act of an independent will.`,
}

// Paper 5, Great Expectations, Chapter 44.
const GREAT_EXPECTATIONS_1_ANSWERS: GradedAnswers = {
  'Grade 5': `In this extract Pip tells Estella how much he loves her, just after she has said she will marry Drummle. Estella calls him "you visionary boy", which suggests she thinks he is a dreamer who does not live in the real world. Pip says "You are part of my existence, part of myself", which shows how much his identity depends on her. He remembers being "the rough common boy whose poor heart you wounded", which reminds us that Estella made him ashamed of being common when they were children. This is why he wanted to become a gentleman. He repeats "You have been in every line" and "You have been in every prospect" to show she is everywhere in his life. At the end he says "God bless you, God forgive you", which shows he still loves her even though she has hurt him. Dickens shows that Pip's ambition to be a gentleman was really about winning Estella, and now he has lost her.`,
  'Grade 7': `Dickens presents Pip's self-improvement as inseparable from his love for Estella, and this extract shows the collapse of both. Estella's parting question hesitates between "you visionary boy" and "or man", which captures Pip's uncertain identity: he has the position of a gentleman but still the dreams of a child. His reply goes back to his first humiliation: he was "the rough common boy whose poor heart you wounded even then". The words "rough" and "common" echo her contempt at Satis House in Chapter 8, and remind us that his desire to rise in class began as shame. The anaphora of "You have been in every line I have ever read" and "You have been in every prospect I have ever seen" shows how completely she has shaped his mind, while the list "on the river, on the sails of the ships, on the marshes" places her in the landscape of his childhood. The comparison with "The stones of which the strongest London buildings are made" suggests that his identity rests on her more firmly than the city on stone. Yet he admits she is "part of the little good in me, part of the evil", an honest recognition that his ambition has also made him worse, as when he was ashamed of Joe. Having learned that his money came from the convict Magwitch, Pip here loses the other foundation of his expectations.`,
  'Grade 9': `Dickens stages this farewell as the moment when Pip's ambition is exposed as a story about identity rather than wealth. Estella's parting question, which hesitates between "you visionary boy" and "or man", identifies the flaw in his expectations: they were visions, and he has never been sure whether he has grown up. Pip's speech locates the origin of his ambition exactly: Estella has been with him "since I first came here, the rough common boy whose poor heart you wounded even then". The class-coded adjectives recall her contempt for his hands and boots in Chapter 8, so his wish to be a gentleman is revealed as a wound he has been trying to heal. The speech is built on anaphora, "You have been in every line", "You have been in every prospect", "You have been the embodiment", which moves from books, the tools of his self-improvement, to landscape to fancy, as if every faculty had been occupied by her. The comparison with "The stones of which the strongest London buildings are made" is telling: London is where he tried to become a gentleman, and its solidity is less real to him than Estella. The moral turn, "part of the little good in me, part of the evil", shows the older narrator's honesty about how snobbery disfigured him. The ending, "God bless you, God forgive you", joins blessing to an implied accusation and anticipates Miss Havisham's remorse in Chapter 49. Dickens suggests that an identity built on another person's approval, or on money from an unknown source, is precarious, and Pip's later recovery, through Joe's care and his own work abroad with Herbert, shows what a more honest self-making looks like.`,
}

// Paper 6, Great Expectations, Chapter 8.
const GREAT_EXPECTATIONS_2_ANSWERS: GradedAnswers = {
  'Grade 5': `In this extract Pip is at Miss Havisham's house for the first time. Everything "had stopped, like the watch and the clock", which shows that time has stood still for her. Her wedding dress looks "so like grave-clothes" and the veil "so like a shroud", which makes her seem dead. Then Estella insults Pip. She says "He calls the knaves Jacks, this boy" and mocks his "coarse hands" and "thick boots". These are signs that he is working class. Pip says "I had never thought of being ashamed of my hands before", which shows that this is the moment he first feels ashamed of his class. He says her contempt "became infectious, and I caught it", which means he starts to look down on himself. This is the start of his wish to become a gentleman. Later in the novel he receives his expectations and moves to London, but he becomes ashamed of Joe, which shows that his ambition changes him for the worse.`,
  'Grade 7': `Dickens uses Satis House to show where Pip's ambition begins. The setting is described through stopped time: everything "had stopped, like the watch and the clock, a long time ago", and the repeated phrase "once white, now yellow" shows decay replacing purity. The similes "so like grave-clothes" and "so like a shroud" turn Miss Havisham into a living corpse, and Pip's comparison with ancient bodies that "fall to powder" suggests that the world of wealth he is drawn to is already dead. Into this frozen setting Estella brings the idea of class. Her sneer "He calls the knaves Jacks, this boy" mocks his vocabulary, and "what coarse hands he has" and "what thick boots" mock his body and clothes, the marks of labour. The older narrator reflects that he "had never thought of being ashamed" before, so shame is taught, not natural. The metaphor of contempt as a disease, "it became infectious, and I caught it", is crucial: Pip's ambition is born as an illness caught from Estella. Dickens suggests that Pip's desire for self-improvement is really a desire to escape shame, which is why, in Chapter 14, he admits how miserable it is to feel ashamed of home.`,
  'Grade 9': `Dickens makes Pip's first visit to Satis House the origin of the ambition the novel will dismantle, and he does it by joining a Gothic setting to a lesson in class. The narrator observes that "everything in the room had stopped", and the precise details, the unworn shoe and the stocking "trodden ragged", show time frozen at the moment of Miss Havisham's betrayal. The phrase "this arrest of everything" makes her refusal of time sound like both a crime and a punishment. The similes "so like grave-clothes" and "so like a shroud", and the image of bodies that "fall to powder" when exposed to light, make the house a tomb of wealth, and the reader should notice that this is the world Pip will later want to join. Estella's contempt is short and brutal. "He calls the knaves Jacks" condemns him for a word, the class marker of speech, and "coarse hands" and "thick boots" judge the body and dress of a blacksmith's boy. The most important sentence is Pip's own analysis: "Her contempt for me was so strong, that it became infectious, and I caught it." The metaphor of infection presents class shame as something transmitted rather than deserved, and it anticipates how Pip will pass it on, feeling ashamed of Joe when Joe visits him in London in Chapter 27. His expectations are therefore a symptom as much as a hope. Dickens's criticism of Victorian gentility is that it teaches people to despise the labour and love, embodied in Joe, that actually sustain them.`,
}

// ─────────────────────────────────────────────────────────────────────────────
// EXPANDED ASSESSMENT GUIDANCE & GRADING COMMENTS
// ─────────────────────────────────────────────────────────────────────────────

/**
 * PAPER 1 ASSESSMENT GUIDANCE
 *
 * SECTION A: SHAKESPEARE ANALYSIS (34 marks total)
 * - Question 1 (30 marks): Extended analysis essay
 *   * Candidates must analyse language, form, and dramatic technique
 *   * Reference the extract and cite elsewhere in the play
 *   * Develop sustained interpretations connected to theme
 *   * Use subject terminology accurately (metaphor, soliloquy, dramatic irony, personification, imagery, etc.)
 *
 * - Question 1 AO4 (4 marks): marked on the same essay, not a separate question
 *   * A range of vocabulary and sentence structures for clarity, purpose and effect
 *   * Accurate spelling and punctuation
 *
 * MARK DISTRIBUTION FOR Q1 (30 marks). A rough guide of this file's, not AQA's: AQA marks a
 * 30-mark question in six levels of five marks each and sets grade boundaries only on the
 * whole qualification, so no mark on one question is a grade. The same holds for the
 * GRADING RUBRIC SUMMARY below.
 * 27-30: Grade 9 - Sophisticated critical analysis; original interpretations; mastery of terminology
 * 24-26: Grade 8 - Perceptive analysis; sustained comparison; complex understanding of form/meaning
 * 21-23: Grade 7 - Clear analytical points; good use of evidence; secure understanding
 * 18-20: Grade 6 - Sound analysis; adequate support; generally secure understanding
 * 15-17: Grade 5 - Reasonable analysis; some developed points; generally accurate
 * 12-14: Grade 4 - Basic analysis; limited explanation; mostly accurate
 * Below 12: Grade 3 or lower
 *
 * KEY ASSESSMENT CRITERIA:
 * 1. Analysis vs. Narrative: Avoid plot summary; focus on technique and effect
 * 2. Textual Reference: Use quotations extensively; integrate smoothly; analyze specific language
 * 3. Terminology: Use accurate literary terminology; avoid jargon without explanation
 * 4. Structure: Develop points in depth; create clear argument; move beyond listing techniques
 * 5. Elsewhere in Play: Integrate references naturally; show broader understanding
 *
 * SECTION B: NOVEL ANALYSIS (30 marks)
 * - Similar criteria to Shakespeare
 * - Analyze narrative technique, characterization, language choices
 * - Reference extract and elsewhere in novel
 * - Address social/historical contexts where relevant
 *
 * COMMON ERRORS TO AVOID:
 * ✗ Writing plot summary instead of analysis
 * ✗ Identifying techniques without explaining effect
 * ✗ Failing to support claims with textual evidence
 * ✗ Using terminology incorrectly or vaguely
 * ✗ Writing about only the extract (must reference elsewhere)
 * ✗ Making personal opinions without textual support
 * ✓ Analyze HOW writers use language/form to create meaning
 * ✓ Explore multiple interpretations where relevant
 * ✓ Connect local analysis to broader themes/concerns
 * ✓ Use accurate terminology with confidence
 *
 * TIMING ADVICE FOR STUDENTS:
 * - Section A: 52 minutes (one essay, including time to plan and proofread for AO4)
 * - Section B: 53 minutes (full essay response)
 * - Total: 105 minutes
 *
 * SUGGESTED ESSAY STRUCTURE:
 * 1. Introduction (3-4 mins): Address question; preview key points; establish argument
 * 2. Body Paragraphs (35-40 mins): Develop analytical points; integrate quotations; build argument
 * 3. Conclusion (3-4 mins): Summarize key points; reinforce thesis; consider broader implications
 */

/**
 * PAPER-SPECIFIC THEMES & FOCUS AREAS
 *
 * PAPER 1 (Macbeth + A Christmas Carol):
 * - Guilt and conscience as psychological forces
 * - The consequences of unchecked ambition
 * - Redemption and the possibility of change
 * - Individual responsibility and social obligation
 *
 * PAPER 2 (Macbeth + A Christmas Carol):
 * - Moral failure and psychological deterioration
 * - The limits of rationalization and denial
 * - Economic exploitation and social callousness
 * - Transformation through confrontation with consequences
 *
 * PAPER 3 (Romeo & Juliet + Jane Eyre):
 * - Romantic love as transcendent force vs. social reality
 * - Individual autonomy and social constraint
 * - The power of language to articulate desire
 * - Conflict between heart and duty
 *
 * PAPER 4 (Romeo & Juliet + Jane Eyre):
 * - Names and identity; the performative nature of selfhood
 * - Female agency and resistance to patriarchal norms
 * - Love as both liberation and endangerment
 * - The negotiation of autonomy within social bounds
 *
 * PAPER 5 (The Tempest + Great Expectations):
 * - Power, control, and the acceptance of limitation
 * - Ambition and disillusionment; false expectations
 * - Forgiveness and philosophical wisdom
 * - The illusory nature of human achievement
 *
 * PAPER 6 (Merchant of Venice + Great Expectations):
 * - Prejudice and systematic dehumanization
 * - The self-interest masquerading as moral principle
 * - Wealth and social status as markers of value
 * - The consequences of treating people as instrumental objects
 */

/**
 * COMMAND WORDS & WHAT THEY REQUIRE
 *
 * ANALYSE: Break down into components; explain how each element contributes to overall meaning/effect
 * - Look for: techniques, language, structure, form
 * - Explain: effect on reader, contribution to theme, creation of meaning
 *
 * INTERPRET: Make reasoned judgement about meaning; explain what text reveals/suggests
 * - Consider: multiple valid readings; context; authorial purpose
 * - Develop: sophisticated understanding; nuanced readings
 *
 * EXAMINE: Look at closely; consider in detail; explore implications
 * - Similar to analyse; may require broader contextual consideration
 *
 * EVALUATE: Make a judgement; consider strengths/effectiveness; weigh different interpretations
 * - Some GCSE papers require this; AQA Lit Paper 1 does not explicitly ask for evaluation
 * - If writing comparatively, consider relative effectiveness of different approaches
 *
 * REFER TO: Use textual evidence; integrate quotes and references
 * - Must reference both the extract AND elsewhere in the text
 * - Failure to do this significantly limits grade
 */

/**
 * TECHNICAL LANGUAGE REFERENCE
 *
 * LANGUAGE TECHNIQUES:
 * - Metaphor: Comparison claiming equivalence ("Juliet is the sun")
 * - Simile: Comparison using "like" or "as" ("The brightness of her cheek would shame those stars, / As daylight doth a lamp")
 * - Personification: Giving human qualities to non-human things ("green woods laugh")
 * - Imagery: Sensory language appealing to senses (visual, auditory, tactile, olfactory, gustatory)
 * - Repetition: Repeating words/phrases for emphasis ("Tomorrow, and tomorrow, and tomorrow")
 * - Alliteration: Repeating initial consonant sounds ("dusty death")
 * - Anaphora: Repeating word at start of successive clauses ("You have been in every line... You have been in every prospect")
 * - Rhetorical Question: Question asked for effect, not expecting answer ("Hath a dog money?")
 * - Oxymoron: Combining contradictory terms ("beautiful agony")
 * - Paradox: Statement seeming false but potentially true ("to lose to win")
 * - Hyperbole: Extreme exaggeration for effect ("I've told you a thousand times")
 *
 * DRAMATIC TECHNIQUE:
 * - Soliloquy: Character speaking alone; reveals inner thoughts
 * - Aside: Character speaks to audience/narrator; other characters don't hear
 * - Dramatic Irony: Audience knows something characters don't; creates tension
 * - Stage Directions: Instructions about action/blocking; reveal character motivation
 * - Dialogue: Conversation between characters; reveals character, conflict, theme
 * - Monologue: Extended speech by one character (unlike soliloquy, others may hear)
 *
 * NARRATIVE TECHNIQUE (for novels):
 * - Point of View: First person (narrator is character), Third person (omniscient or limited)
 * - Narrative Voice: Tone, perspective, reliability of narrator
 * - Foreshadowing: Hints about future events; builds tension
 * - Flashback: Return to past events; provides context
 * - Dialogue: Reveals character, conflict, theme
 * - Description: Setting, appearance; establishes mood, reveals character
 * - Free Indirect Discourse: Blending character thought with narrative voice
 * - Epistolary: Use of letters to tell story
 *
 * STRUCTURAL TECHNIQUES:
 * - Parallel Structure: Similar structures used repeatedly
 * - Contrast: Placing opposing elements side-by-side
 * - Climax: Point of greatest tension/turning point
 * - Resolution: How conflict is settled
 * - Cyclical Structure: Ending returns to beginning; suggests repetition or change
 */

/**
 * MODEL ANSWER ANALYSIS: WHAT MAKES A GREAT RESPONSE
 *
 * GRADE 5 RESPONSE CHARACTERISTICS:
 * - Identifies relevant techniques and effects
 * - Makes basic connections between technique and meaning
 * - Uses some textual support; may quote or paraphrase
 * - Shows understanding of text's basic meaning
 * - Makes general statements without deep exploration
 * - May lack sophisticated terminology
 * - Limited reference to elsewhere in text
 *
 * GRADE 7 RESPONSE CHARACTERISTICS:
 * - Selects precise, relevant quotations
 * - Analyzes how techniques work; explains effects clearly
 * - Considers alternative interpretations
 * - Uses subject terminology accurately and precisely
 * - Makes sustained points; develops ideas fully
 * - Integrates references to elsewhere in text naturally
 * - Shows sophisticated understanding of how form creates meaning
 *
 * GRADE 9 RESPONSE CHARACTERISTICS:
 * - Demonstrates critical intelligence; original, perceptive readings
 * - Analyzes subtle effects; explores implications and complications
 * - Engages with philosophical, historical, or literary contexts
 * - Uses terminology with precision and flexibility
 * - Recognizes ambiguities and multiple valid readings
 * - Makes complex connections across the text
 * - Shows mastery of analysis; moves beyond surface meaning
 * - Often explores how historical period/authorial concerns inform text
 *
 * HOW TO IMPROVE FROM GRADE 5 TO GRADE 7:
 * 1. Select more precise quotations; analyze specific words not just general ideas
 * 2. Explain the "effect" more clearly; what does this technique make the reader think/feel?
 * 3. Use one or two well-developed points rather than listing many techniques
 * 4. Reference elsewhere in the text with specific examples
 * 5. Use literary terminology; show you understand the concepts behind the terms
 *
 * HOW TO IMPROVE FROM GRADE 7 TO GRADE 9:
 * 1. Explore contradictions, ambiguities, and alternative interpretations
 * 2. Make connections to broader historical, philosophical, or literary concerns
 * 3. Analyze the limits and complications of your own argument
 * 4. Consider how form and content work together in sophisticated ways
 * 5. Show awareness of how the text might be read differently across time/contexts
 */

/**
 * STUDENT SELF-ASSESSMENT CHECKLIST
 *
 * Before submitting, students should check:
 *
 * CONTENT & ARGUMENT:
 * ☐ Have I answered the specific question asked?
 * ☐ Do I have a clear argument/interpretation throughout?
 * ☐ Have I explored the theme in depth, not just identified it?
 * ☐ Have I discussed BOTH the extract AND elsewhere in the text/play?
 * ☐ Are my points developed and explained, not just asserted?
 *
 * QUOTATIONS & EVIDENCE:
 * ☐ Are my quotations accurate and integrated smoothly?
 * ☐ Do I analyze HOW each quotation works, not just what it means?
 * ☐ Are my quotations concise and relevant?
 * ☐ Do I have enough evidence to support all my claims?
 *
 * TERMINOLOGY:
 * ☐ Am I using literary terms accurately?
 * ☐ Do I explain what techniques DO, not just name them?
 * ☐ Have I varied my vocabulary and terminology?
 *
 * STRUCTURE:
 * ☐ Does my essay have a clear introduction, body, and conclusion?
 * ☐ Do my paragraphs have clear topic sentences?
 * ☐ Do my ideas flow logically from one to the next?
 * ☐ Have I signposted my argument with linking phrases?
 *
 * EXPRESSION:
 * ☐ Is my writing clear and easy to follow?
 * ☐ Have I checked for spelling and grammar errors?
 * ☐ Am I using Standard English appropriately?
 * ☐ Have I varied my sentence structures?
 */

// ─────────────────────────────────────────────────────────────────────────────
// ADDITIONAL TEACHING & STUDY NOTES
// ─────────────────────────────────────────────────────────────────────────────

/**
 * KEY THEMES ACROSS ALL PAPERS
 *
 * POWER & AGENCY:
 * - Who controls events? Characters or fate/circumstance?
 * - How do systems of power (political, social, economic, gender) constrain or enable action?
 * - What is the difference between intended and actual consequences of actions?
 *
 * AMBITION & ITS CONSEQUENCES:
 * - How do characters' desires shape their actions and destinies?
 * - What costs accompany the pursuit of ambition?
 * - Can ambition ever be ethical or justified?
 *
 * LOVE & RELATIONSHIPS:
 * - What kinds of love are valorized or critiqued in the text?
 * - How do romantic, familial, and social attachments conflict?
 * - What does the text suggest about the possibilities for human connection?
 *
 * MORAL RESPONSIBILITY:
 * - Are characters responsible for their actions? Why or why not?
 * - What does the text suggest about individual vs. collective responsibility?
 * - How do economic and social systems complicate moral agency?
 *
 * APPEARANCE VS. REALITY:
 * - How do characters deceive themselves or others?
 * - What gaps exist between how characters see themselves and how they appear to others?
 * - How does language work to obscure or reveal truth?
 *
 * REDEMPTION & TRANSFORMATION:
 * - Is human change possible? What enables or prevents it?
 * - What costs does transformation exact?
 * - How do texts imagine ethical or spiritual regeneration?
 *
 * SOCIAL POSITION & IDENTITY:
 * - How do class, gender, race, and other social categories shape character and possibility?
 * - How do characters resist or accommodate social constraints?
 * - What does the text suggest about the (in)visibility of certain groups?
 */

/**
 * PREPARATION STRATEGIES FOR STUDENTS
 *
 * 1. BECOME FAMILIAR WITH EXTRACTS:
 *    - Read each extract multiple times
 *    - Annotate language techniques, significant moments
 *    - Consider how extract relates to broader play/novel
 *
 * 2. BUILD KNOWLEDGE OF TEXTS:
 *    - Know key scenes and why they matter
 *    - Understand character motivations and relationships
 *    - Recognize major themes and how they develop
 *
 * 3. PRACTICE ANALYSING LANGUAGE:
 *    - Read closely; notice specific word choices
 *    - Consider sound, imagery, connotation
 *    - Explain effects, not just techniques
 *
 * 4. TIMED WRITING PRACTICE:
 *    - Write under timed conditions (52-53 mins per section)
 *    - Practice planning before writing
 *    - Develop speed without sacrificing quality
 *
 * 5. RECEIVE FEEDBACK:
 *    - Share practice essays with teachers
 *    - Understand what grade feedback means
 *    - Identify patterns in your writing to improve
 *
 * 6. REVIEW MODEL ANSWERS:
 *    - Study different grades of response
 *    - Understand what distinguishes each grade
 *    - Identify specific techniques that improve responses
 */

/**
 * HOW TO ANALYZE SHAKESPEARE'S SOLILOQUIES & MONOLOGUES
 *
 * The following plays contain crucial soliloquies that often appear in exam extracts:
 *
 * MACBETH:
 * - "Out, damned spot!" (Act 5, Scene 1): Lady Macbeth's sleepwalking, overheard by the Doctor and Gentlewoman (not a soliloquy)
 * - "Tomorrow, and tomorrow..." (Act 5, Scene 5): Macbeth's nihilistic meditation
 * - "Is this a dagger which I see before me?" (Act 2, Scene 1): Pre-murder anxiety
 *
 * ROMEO & JULIET:
 * - "What light through yonder window breaks?" (Act 2, Scene 2): Romeo's praise of Juliet
 * - "O Romeo, Romeo, wherefore art thou Romeo?" (Act 2, Scene 2): Juliet's declaration
 * - "O, I am fortune's fool!" (Act 3, Scene 1): Romeo's response to killing Tybalt
 *
 * THE TEMPEST:
 * - "Our revels now are ended" (Act 4, Scene 1): Prospero's meditation on power and illusion
 * - Prospero's epilogue: Renunciation of magic and power
 *
 * THE MERCHANT OF VENICE:
 * - Shylock's "Hath a dog money?" (Act 1, Scene 3): The insults he has borne from Antonio
 * - "If you prick us, do we not bleed?" (Act 3, Scene 1): Shylock's assertion of common humanity
 *
 * ANALYTICAL FOCUS FOR SOLILOQUIES:
 * 1. What is revealed about the character's inner state?
 * 2. What language techniques convey their emotional/mental condition?
 * 3. How does the soliloquy function in the broader narrative/thematic structure?
 * 4. What shifts in perspective or understanding occur during the speech?
 * 5. How does the audience's understanding of the character change based on the soliloquy?
 */

/**
 * HOW TO ANALYZE 19TH-CENTURY NOVEL EXTRACTS
 *
 * DICKENS (A CHRISTMAS CAROL, GREAT EXPECTATIONS):
 * - Pay attention to narrative voice: Is it omniscient, limited, or character-centered?
 * - Notice descriptive language; how does Dickens use description to establish mood/character?
 * - Consider dialogue; how do characters' speech patterns reveal status and personality?
 * - Look for patterns of repetition; what ideas or images recur?
 * - Examine sentimentality; how does Dickens balance emotional appeal with social critique?
 *
 * BRONTË (JANE EYRE):
 * - Jane's first-person narration is crucial; her retrospective perspective shapes interpretation
 * - Watch for moments of psychological intensity; how does language convey inner experience?
 * - Consider symbolism (e.g., fire, darkness, light); what do recurring images signify?
 * - Analyze dialogue, especially confrontations; how does Jane assert her agency?
 * - Notice Gothic elements; how do they relate to character psychology and social critique?
 *
 * GENERAL APPROACH TO 19TH-CENTURY NOVELS:
 * - Consider historical context: What social/political issues does the text address?
 * - Analyze characterization: How are characters developed? Through action? Narration? Dialogue?
 * - Look at structure: How does the organization of the narrative shape meaning?
 * - Consider the ending: Does it affirm or critique prevailing social values?
 * - Notice language register: Do characters speak differently? What does this reveal?
 */

/**
 * FREQUENTLY ASKED QUESTIONS ABOUT PAPER 1
 *
 * Q: Do I need to write about BOTH the extract AND elsewhere in the text?
 * A: YES. The question asks you to "refer to the extract and to elsewhere in the play/novel."
 *    Failing to reference elsewhere significantly limits your grade. Aim for 60% on extract, 40% elsewhere.
 *
 * Q: How many quotations should I use?
 * A: Quality over quantity. 3-5 well-analyzed quotations per section is typically sufficient.
 *    Each quotation should be unpacked carefully, not just cited.
 *
 * Q: Should I write about my personal response or stick to analysis?
 * A: Stick to analysis. Avoid "I liked" or "I think it's interesting." Instead, explain
 *    HOW the text creates meaning. Personal engagement is fine if it's grounded in textual analysis.
 *
 * Q: How important is spelling and grammar?
 * A: On this paper they are assessed: AO4 gives 4 marks on the Shakespeare question for
 *    vocabulary, sentence structures, spelling and punctuation. The novel question has no
 *    AO4 marks, but clear, accurate writing still carries the analysis. Proofread both.
 *
 * Q: Can I write about multiple interpretations?
 * A: YES, and this is often impressive. If you can acknowledge that a line might be read
 *    multiple ways and explore different interpretations, this demonstrates critical thinking.
 *
 * Q: How long should my essay be?
 * A: There's no set word count, and AQA's levels reward the quality of the argument, not its
 *    length. Focus on depth rather than length. The model answers in this file are shorter than
 *    a full answer written in 50 minutes: each shows the analysis a grade needs, not its length.
 *    (Until 27 September 2026 this said 300-400 words was typical of Grade 7-9, a figure with
 *    no source.)
 *
 * Q: Should I plan before writing?
 * A: ABSOLUTELY. Spend 5 minutes planning: jot down your main argument, key quotations,
 *    and points you want to make. This prevents rambling and improves structure.
 *
 * Q: What if I don't recognize the extract?
 * A: The extract will be from your studied text. You should know your texts well enough
 *    to recognize extracts and understand their context. If you genuinely don't recognize it,
 *    read it carefully and analyze based on the language itself and what you know of the text.
 *
 * Q: How do I balance analysis of technique with discussion of theme?
 * A: Techniques should always be analyzed in service of understanding theme. Don't just say
 *    "Shakespeare uses metaphor." Say "Shakespeare uses metaphor (the sun) to present Juliet as
 *    a source of light and life, suggesting romantic love's transcendent power."
 */

/**
 * GRADING RUBRIC SUMMARY (out of 30 marks for main question)
 *
 * 27-30 (Grade 9):
 * - Original, perceptive interpretation; sophisticated critical thinking
 * - Precise analysis of language, form, technique; explores subtle effects
 * - Integrated references to elsewhere in text
 * - Accurate, flexible use of terminology
 * - Engages with context, alternative readings, thematic/philosophical complexity
 *
 * 24-26 (Grade 8):
 * - Clear interpretation supported by detailed analysis
 * - Good analysis of language and technique; explains effects
 * - Well-integrated references elsewhere
 * - Accurate use of terminology
 * - Shows understanding of how form creates meaning
 *
 * 21-23 (Grade 7):
 * - Clear, supported interpretation
 * - Analyzes language and technique; explains effects
 * - References elsewhere in text
 * - Uses subject terminology accurately
 * - Clearly developed analytical points
 *
 * 18-20 (Grade 6):
 * - Sound interpretation supported by evidence
 * - Identifies and explains key techniques
 * - Some reference to elsewhere in text
 * - Generally accurate terminology
 * - Makes developed points, though may lack sophistication
 *
 * 15-17 (Grade 5):
 * - Reasonable interpretation with support
 * - Identifies some techniques; explains their effect
 * - Limited reference to elsewhere in text
 * - Some use of terminology
 * - Makes points that are developed but sometimes general
 *
 * 12-14 (Grade 4):
 * - Basic interpretation with some support
 * - Identifies obvious techniques; limited explanation
 * - Minimal reference to elsewhere
 * - Limited use of terminology
 * - Makes points but doesn't develop them fully
 *
 * Below 12 (Grade 3 or lower):
 * - Vague or unsupported interpretation
 * - Lists techniques without analysis
 * - Little to no reference to elsewhere
 * - Minimal use of terminology
 * - Points are asserted rather than explained
 */

// ─────────────────────────────────────────────────────────────────────────────
// EXPORT ALL PAPERS
// ─────────────────────────────────────────────────────────────────────────────

export const aqaLitP1Mocks: MockExamPaper[] = [
  // Paper 1: Macbeth (Act 5 Scene 1, the sleepwalking scene) + A Christmas Carol (Stave 5, redemption)
  createPaper1Exam(
    1,
    {
      title: 'Macbeth',
      extract: MACBETH_EXTRACT_1,
      source: MACBETH_EXTRACT_1_SOURCE,
      modelAnswers: MACBETH_1_ANSWERS,
    },
    {
      title: 'A Christmas Carol',
      extract: CAROL_EXTRACT_1,
      source: CAROL_EXTRACT_1_SOURCE,
      modelAnswers: CAROL_1_ANSWERS,
    },
  ),

  // Paper 2: Macbeth (Act 5 Scene 5, "Tomorrow, and tomorrow") + A Christmas Carol (Stave 1, the collectors for the poor)
  createPaper1Exam(
    2,
    {
      title: 'Macbeth',
      extract: MACBETH_EXTRACT_2,
      source: MACBETH_EXTRACT_2_SOURCE,
      modelAnswers: MACBETH_2_ANSWERS,
    },
    {
      title: 'A Christmas Carol',
      extract: CAROL_EXTRACT_2,
      source: CAROL_EXTRACT_2_SOURCE,
      modelAnswers: CAROL_2_ANSWERS,
    },
  ),

  // Paper 3: Romeo and Juliet (Act 2 Scene 2, Romeo below the window) + Jane Eyre (Chapter 23, "I am no bird")
  createPaper1Exam(
    3,
    {
      title: 'Romeo and Juliet',
      extract: ROMEO_JULIET_EXTRACT_1,
      source: ROMEO_JULIET_EXTRACT_1_SOURCE,
      modelAnswers: ROMEO_JULIET_1_ANSWERS,
    },
    {
      title: 'Jane Eyre',
      extract: JANE_EYRE_EXTRACT_1,
      source: JANE_EYRE_EXTRACT_1_SOURCE,
      modelAnswers: JANE_EYRE_1_ANSWERS,
    },
  ),

  // Paper 4: Romeo and Juliet (Act 2 Scene 2, Juliet on names) + Jane Eyre (Chapter 27, leaving Thornfield)
  createPaper1Exam(
    4,
    {
      title: 'Romeo and Juliet',
      extract: ROMEO_JULIET_EXTRACT_2,
      source: ROMEO_JULIET_EXTRACT_2_SOURCE,
      modelAnswers: ROMEO_JULIET_2_ANSWERS,
    },
    {
      title: 'Jane Eyre',
      extract: JANE_EYRE_EXTRACT_2,
      source: JANE_EYRE_EXTRACT_2_SOURCE,
      modelAnswers: JANE_EYRE_2_ANSWERS,
    },
  ),

  // Paper 5: The Tempest (Act 4 Scene 1, "Our revels now are ended") + Great Expectations (Chapter 44, Pip's farewell to Estella)
  createPaper1Exam(
    5,
    {
      title: 'The Tempest',
      extract: TEMPEST_EXTRACT_1,
      source: TEMPEST_EXTRACT_1_SOURCE,
      modelAnswers: TEMPEST_1_ANSWERS,
    },
    {
      title: 'Great Expectations',
      extract: GREAT_EXPECTATIONS_EXTRACT_1,
      source: GREAT_EXPECTATIONS_EXTRACT_1_SOURCE,
      modelAnswers: GREAT_EXPECTATIONS_1_ANSWERS,
    },
  ),

  // Paper 6: The Merchant of Venice (Act 1 Scene 3, "Hath a dog money?") + Great Expectations (Chapter 8, Satis House)
  createPaper1Exam(
    6,
    {
      title: 'The Merchant of Venice',
      extract: MERCHANT_EXTRACT_1,
      source: MERCHANT_EXTRACT_1_SOURCE,
      modelAnswers: MERCHANT_1_ANSWERS,
    },
    {
      title: 'Great Expectations',
      extract: GREAT_EXPECTATIONS_EXTRACT_2,
      source: GREAT_EXPECTATIONS_EXTRACT_2_SOURCE,
      modelAnswers: GREAT_EXPECTATIONS_2_ANSWERS,
    },
  ),
]
