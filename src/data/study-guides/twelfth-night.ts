import type { StudyGuide } from '@/lib/study-guides/types'

/**
 * Twelfth Night, William Shakespeare. A SUPPLEMENT: the existing page at
 * /revision/texts/twelfth-night keeps its overview, context, themes, characters
 * and key quotations, and this file adds what it lacked: passages for close
 * reading, language analysis, structure and form, vocabulary, exam practice, a
 * model answer, and the timeline and character map the animations draw.
 *
 * Every quotation, extract and quoted phrase was copied from the byte copy of
 * Project Gutenberg #1526 held at src/data/full-texts/twelfth-night.ts, and its
 * speaker and scene were checked by reading the whole play, not by searching
 * for the phrase alone. The three extracts were cut from that file by script,
 * not retyped. Two scenes were cross-checked against the MIT edition, which
 * differs only in punctuation, elisions ("call'd", "thinkest", "murderous"),
 * "a great a pang", "i' the bud" and "given unsought better"; only the last
 * changes a quoted phrase, so it is the one the extract note mentions.
 *
 * Exam formats come from the four specifications themselves (see sources). The
 * guide names no mark tariffs or assessment-objective numbers, because they
 * differ between those boards.
 *
 * RE-VERIFIED 25 September 2026, every quoted phrase located by script with its
 * speaker and scene, and every exam claim read from the board's own document.
 * What that pass found wrong, so it is not reintroduced:
 * - A tip said the Summer 2024 Edexcel paper printed Sebastian's soliloquy
 *   from Act 4, Scene 3. That was Summer 2023 (P72891A, the reference the
 *   source line gave). Summer 2024 (P75434A) printed Act 2, Scene 4, lines 1-35.
 * - The Viola and Orsino note said he calls her Cesario as he offers his hand.
 *   He calls her "Boy" and then "Your master's mistress"; only his final
 *   speech says Cesario.
 * - The Betrothal entry put the vows inside Act 4, Scene 3. They leave for the
 *   chantry at its end; the vows happen offstage.
 * - The A-level and International A-level questions were not in the shape the
 *   boards set. They now follow the Summer 2024 9ET0/01 paper and the January
 *   2023 WET02 paper.
 * - The International A-level source named a specification issue nobody had
 *   read. It now names the documents that were.
 *
 * SECOND PASS 26 September 2026, adversarial: every phrase re-located with its
 * speaker by a separate script, the extracts re-cut line by line, and the exam
 * papers re-read. Corrected so they are not reintroduced:
 * - The disease imagery cited Orsino's "purg'd the air of pestilence" as love
 *   pictured as infection. In that line Olivia is the cure; Olivia's "catch
 *   the plague" is where love itself becomes the disease.
 * - "Olivia hears neither" reading of "That you do think you are not what you
 *   are": her reply turns the line back on Cesario, so she does hear it.
 * - Sebastian in Act 4, Scene 3 was said to decide he is "neither mad nor
 *   dreaming". He says "'tis not madness" and stays unsure; dreaming is 4.1.
 * - The betrothal note had Olivia leading the way to the chantry; she asks the
 *   priest to lead. Feste's closing line promises the players will "strive"
 *   to please, not that they will. Orsino's first image is of Olivia cleansing
 *   the air, Viola's knot is "too hard ... for me", and Malvolio's second cry
 *   echoes rather than repeats his first.
 * - Readings stated as facts ("the quietest scene", "the one character who
 *   tests his senses", Sir Toby as Lord of Misrule, Viola "mostly" in verse)
 *   are now given as readings or narrowed to what the text shows.
 *
 * Timeline theme names match the theme titles on the existing page, so the
 * scene player's filter and the page above use the same words.
 */
export const guide: StudyGuide = {
  slug: 'twelfth-night',
  title: 'Twelfth Night',
  author: 'William Shakespeare',
  form: 'play',
  scope:
    'The whole play, in five acts and eighteen scenes. It is set for the Shakespeare section of Pearson Edexcel GCSE English Literature and Eduqas GCSE English Literature, as a Shakespeare comedy in Component 1 of Pearson Edexcel A-level English Literature, and as a pre-1900 drama text in Unit 2 of Pearson Edexcel International A-level English Literature.',
  rights: {
    status: 'public-domain',
    acknowledgement:
      'Public domain. First printed in the First Folio of 1623. Quotations and extracts follow the modern-spelling Project Gutenberg edition (eBook #1526); punctuation and a few spellings may differ slightly from your own edition.',
  },

  native: {
    overview: '/revision/texts/twelfth-night',
    context: '/revision/texts/twelfth-night',
    themes: '/revision/texts/twelfth-night',
    characters: '/revision/texts/twelfth-night',
    keyQuotes: '/revision/texts/twelfth-night',
  },

  extracts: [
    {
      title: 'Viola and Orsino talk of love',
      where: 'Act 2, Scene 4',
      pointer:
        'From Viola’s “But if she cannot love you, sir?” to her “and yet I know not.”, after Feste’s song. Orsino’s speeches are headed DUKE in this edition.',
      text: 'VIOLA / But if she cannot love you, sir? / DUKE / I cannot be so answer’d. / VIOLA / Sooth, but you must. / Say that some lady, as perhaps there is, / Hath for your love as great a pang of heart / As you have for Olivia: you cannot love her; / You tell her so. Must she not then be answer’d? / DUKE / There is no woman’s sides / Can bide the beating of so strong a passion / As love doth give my heart: no woman’s heart / So big, to hold so much; they lack retention. / Alas, their love may be called appetite, / No motion of the liver, but the palate, / That suffer surfeit, cloyment, and revolt; / But mine is all as hungry as the sea, / And can digest as much. Make no compare / Between that love a woman can bear me / And that I owe Olivia. / VIOLA / Ay, but I know— / DUKE / What dost thou know? / VIOLA / Too well what love women to men may owe. / In faith, they are as true of heart as we. / My father had a daughter loved a man, / As it might be perhaps, were I a woman, / I should your lordship. / DUKE / And what’s her history? / VIOLA / A blank, my lord. She never told her love, / But let concealment, like a worm i’ th’ bud, / Feed on her damask cheek: she pined in thought, / And with a green and yellow melancholy / She sat like patience on a monument, / Smiling at grief. Was not this love, indeed? / We men may say more, swear more, but indeed, / Our shows are more than will; for still we prove / Much in our vows, but little in our love. / DUKE / But died thy sister of her love, my boy? / VIOLA / I am all the daughters of my father’s house, / And all the brothers too: and yet I know not.',
      annotations: [
        {
          phrase: 'Say that some lady, as perhaps there is,',
          note: 'Dramatic irony at its sharpest. Viola is the lady she describes, and “as perhaps there is” lets her come as close to confession as her disguise allows. The audience hears a declaration; Orsino hears a debating point.',
        },
        {
          phrase: 'But mine is all as hungry as the sea,',
          note: 'Orsino’s love is appetite again, as in the play’s first lines, and it contradicts what he told Cesario earlier in this same scene, that men’s fancies are “more giddy and unfirm” than women’s. Shakespeare lets him undo his own argument without noticing.',
        },
        {
          phrase: 'My father had a daughter loved a man,',
          note: 'Viola invents a sister so that she can speak about herself in the third person. The plain words and the missing relative pronoun (a daughter who loved a man) give the line the simplicity of a folk tale, which makes the feeling sound older and truer than Orsino’s ornate complaints.',
        },
        {
          phrase: 'like a worm i’ th’ bud,',
          note: 'A worm hidden inside a bud eats the flower before it can open. Unspoken love, the simile suggests, destroys its owner invisibly. It also answers Orsino’s image earlier in the scene of women as roses whose flower falls as soon as it is displayed.',
        },
        {
          phrase: 'She sat like patience on a monument,',
          note: 'The image suggests a carved figure of Patience on a tomb: still, silent, enduring. Paired with the paradox “Smiling at grief”, it pictures love as endurance rather than pursuit, the opposite of Orsino’s restless, noisy passion.',
        },
        {
          phrase: 'I am all the daughters of my father’s house,',
          note: 'A riddle that is literally true, and the nearest Viola comes to giving herself away. The words that close the next line, “and yet I know not”, turn from love to grief, because she still does not know whether Sebastian is alive.',
        },
      ],
      question:
        'Explore how Shakespeare presents Viola’s love for Orsino in this extract. Refer closely to the extract in your answer.',
    },
    {
      title: 'Olivia declares her love',
      where: 'Act 3, Scene 1',
      pointer:
        'From Olivia’s “Stay: / I prithee tell me what thou think’st of me”, as Cesario is about to leave, to her couplet ending “to like his love.”',
      text: 'OLIVIA / Stay: / I prithee tell me what thou think’st of me. / VIOLA / That you do think you are not what you are. / OLIVIA / If I think so, I think the same of you. / VIOLA / Then think you right; I am not what I am. / OLIVIA / I would you were as I would have you be. / VIOLA / Would it be better, madam, than I am? / I wish it might, for now I am your fool. / OLIVIA / O what a deal of scorn looks beautiful / In the contempt and anger of his lip! / A murd’rous guilt shows not itself more soon / Than love that would seem hid. Love’s night is noon. / Cesario, by the roses of the spring, / By maidhood, honour, truth, and everything, / I love thee so, that maugre all thy pride, / Nor wit nor reason can my passion hide. / Do not extort thy reasons from this clause, / For that I woo, thou therefore hast no cause; / But rather reason thus with reason fetter: / Love sought is good, but given unsought is better. / VIOLA / By innocence I swear, and by my youth, / I have one heart, one bosom, and one truth, / And that no woman has; nor never none / Shall mistress be of it, save I alone. / And so adieu, good madam; never more / Will I my master’s tears to you deplore. / OLIVIA / Yet come again: for thou perhaps mayst move / That heart, which now abhors, to like his love.',
      annotations: [
        {
          phrase: 'That you do think you are not what you are.',
          note: 'This can mean that Olivia is deceived about Cesario, or that she forgets her rank in wooing a servant. Both readings fit, and the line can be played as a warning disguised as a courtesy. Olivia turns it back on Cesario with “If I think so, I think the same of you”, probably meaning that she thinks him more than a servant, which gives Viola the opening for her riddle.',
        },
        {
          phrase: 'I am not what I am.',
          note: 'Viola’s most direct admission of her disguise, and a paradox that sums up the play. The quick exchange of single lines (stichomythia) makes it sound like a duel of wit, but it is one of the few moments she tells Olivia the plain truth.',
        },
        {
          phrase: 'Love’s night is noon.',
          note: 'A compressed paradox: love that tries to hide in darkness shines as if it were midday. Olivia admits she cannot conceal her feeling, the opposite of the sister in Act 2, Scene 4 who “never told her love”.',
        },
        {
          phrase: 'Love sought is good, but given unsought is better.',
          note: 'Olivia ends her declaration on a neat, proverb-like couplet. The balanced antithesis tries to make a bold and even improper choice sound like common wisdom. Some editions print “given unsought better”, so check the wording in your own copy.',
        },
        {
          phrase: 'I have one heart, one bosom, and one truth,',
          note: 'A pattern of three from a character who is living double. Every word is true: no woman will be mistress of her heart except herself, because she is a woman. Olivia hears only a refusal.',
        },
        {
          phrase: 'Will I my master’s tears to you deplore.',
          note: 'Viola promises never again to plead Orsino’s cause, closing her reply in rhyme. Olivia’s answering couplet asks her to come back anyway, so the scene ends with both women trapped exactly where they began.',
        },
      ],
      question:
        'Look at how Olivia and Viola speak and behave here. What does it reveal about their feelings at this point in the play? Refer closely to details from the extract to support your answer.',
    },
    {
      title: 'Malvolio in the dark room',
      where: 'Act 4, Scene 2',
      pointer:
        'From Malvolio’s “Who calls there?”, spoken from inside the dark room, to Feste’s speech ending “lest thou dispossess the soul of thy grandam. Fare thee well.” Feste’s speeches are headed CLOWN in this edition. The scene is in prose, so the line breaks below are this edition’s printed lines, not verse.',
      text: 'MALVOLIO / Who calls there? / CLOWN / Sir Topas the curate, who comes to visit Malvolio the lunatic. / MALVOLIO / Sir Topas, Sir Topas, good Sir Topas, go to my lady. / CLOWN / Out, hyperbolical fiend! how vexest thou this man? Talkest thou nothing / but of ladies? / SIR TOBY / Well said, Master Parson. / MALVOLIO / Sir Topas, never was man thus wronged. Good Sir Topas, do not think I / am mad. They have laid me here in hideous darkness. / CLOWN / Fie, thou dishonest Satan! I call thee by the most modest terms, for I / am one of those gentle ones that will use the devil himself with / courtesy. Say’st thou that house is dark? / MALVOLIO / As hell, Sir Topas. / CLOWN / Why, it hath bay windows transparent as barricadoes, and the / clerestories toward the south-north are as lustrous as ebony; and yet / complainest thou of obstruction? / MALVOLIO / I am not mad, Sir Topas. I say to you this house is dark. / CLOWN / Madman, thou errest. I say there is no darkness but ignorance, in which / thou art more puzzled than the Egyptians in their fog. / MALVOLIO / I say this house is as dark as ignorance, though ignorance were as dark / as hell; and I say there was never man thus abused. I am no more mad / than you are. Make the trial of it in any constant question. / CLOWN / What is the opinion of Pythagoras concerning wildfowl? / MALVOLIO / That the soul of our grandam might haply inhabit a bird. / CLOWN / What think’st thou of his opinion? / MALVOLIO / I think nobly of the soul, and no way approve his opinion. / CLOWN / Fare thee well. Remain thou still in darkness. Thou shalt hold the / opinion of Pythagoras ere I will allow of thy wits, and fear to kill a / woodcock, lest thou dispossess the soul of thy grandam. Fare thee well.',
      annotations: [
        {
          phrase: 'Sir Topas the curate, who comes to visit Malvolio the lunatic.',
          note: 'Feste’s disguise is heard, not seen: Malvolio cannot see him in the dark, as Maria points out once the visit is over. Calling him “the lunatic” in his very first reply decides the verdict before the trial.',
        },
        {
          phrase: 'Well said, Master Parson.',
          note: 'Sir Toby is the audience inside the scene, applauding a performance. His delight reminds the real audience that this is entertainment for the tricksters, and asks whether it is still entertainment for us.',
        },
        {
          phrase: 'They have laid me here in hideous darkness.',
          note: 'Malvolio’s prose is now plain and literal where it used to be pompous. The darkness is real, but it also stands for his situation: he cannot see his tormentors, and they will not let the truth be seen.',
        },
        {
          phrase: 'transparent as barricadoes',
          note: 'Feste’s absurd comparisons, windows as clear as barricades and as bright as ebony, deny what Malvolio can plainly perceive. The comedy of nonsense becomes an attempt to make a sane man doubt his own senses.',
        },
        {
          phrase: 'there is no darkness but ignorance',
          note: 'Feste means that Malvolio’s real darkness is his folly, but the line cuts both ways. The ignorance on stage is arguably the tormentors’, who insist on a madness they invented, and the audience knows it.',
        },
        {
          phrase: 'there was never man thus abused',
          note: 'Malvolio echoes his earlier cry, “never was man thus wronged”, in almost the same shape. Repetition is all he has left in the dark, and his offer of a test, “any constant question”, shows him holding on to reason while the others play.',
        },
        {
          phrase: 'Remain thou still in darkness.',
          note: 'The scene’s cruelty in five words. Feste leaves him in the dark on the absurd grounds that he will not accept Pythagoras’ idea that a grandmother’s soul might live in a bird. Whether an audience laughs or winces here is a choice every production makes.',
        },
      ],
      question:
        'Explore how Shakespeare presents Malvolio’s suffering in this extract. Refer closely to the extract in your answer.',
    },
  ],

  languageAnalysis: [
    {
      technique: 'Imagery of appetite and excess',
      example:
        'Orsino opens the play with “If music be the food of love, play on, / Give me excess of it; that, surfeiting, / The appetite may sicken and so die.” In Act 2, Scene 4 he claims his love is “all as hungry as the sea”.',
      effect:
        'Orsino hopes to cure his love by overdosing on it: he asks for more music only so that his appetite will overeat, sicken and die. The image makes his love sound like consumption rather than devotion, and it keeps returning. In Act 2, Scene 4 he dismisses women’s love as appetite that will “suffer surfeit, cloyment, and revolt”, which is exactly the sickness he wished on himself in the first lines. The contradiction is Shakespeare’s joke at his expense, and it prepares the audience for how quickly his love will change direction.',
    },
    {
      technique: 'Pun and classical allusion',
      example:
        'When Curio asks if he will hunt the hart, Orsino says that on first seeing Olivia “That instant was I turn’d into a hart, / And my desires, like fell and cruel hounds, / E’er since pursue me.” (Act 1, Scene 1)',
      effect:
        'The pun on hart and heart turns an invitation to go hunting into a love complaint. It recalls the story of Actaeon in Ovid’s Metamorphoses, the hunter who saw the goddess Diana bathing, was turned into a stag and was killed by his own hounds. Orsino casts himself as the victim of his own desires, which flatters him and quietly reveals him: nobody is hunting Orsino except Orsino.',
    },
    {
      technique: 'Imagery of plague and infection',
      example:
        'Orsino remembers that on first seeing Olivia he thought she “purg’d the air of pestilence” (Act 1, Scene 1); after Cesario leaves, Olivia asks herself, “Even so quickly may one catch the plague?” (Act 1, Scene 5)',
      effect:
        'The two images point in opposite directions. Orsino makes Olivia a cure, a presence that cleanses the air of disease, which idealises her in the conventional way of love poetry. Olivia, falling in love herself, makes love the disease: it arrives suddenly, through the eyes, and without consent. She feels Cesario’s perfections “creep in at mine eyes” with “an invisible and subtle stealth”, which suggests she knows she is being carried away rather than choosing. The imagery supports the reading that love in this play is a condition that happens to people, not a judgement they make.',
    },
    {
      technique: 'Dramatic irony and double meaning',
      example:
        'Viola tells Orsino of a sister who “never told her love”, then says “I am all the daughters of my father’s house, / And all the brothers too” (Act 2, Scene 4); to Olivia she admits, “I am not what I am.” (Act 3, Scene 1)',
      effect:
        'Viola cannot tell the truth, so she tells it in riddles that only the audience can decode. Each line is literally true and completely misunderstood on stage, which gives her speeches two audiences at once: the character who hears a boy, and the theatre that hears a woman in love. The effect is comic and painful together, and it lets Shakespeare show her feelings with a directness no open confession could have.',
    },
    {
      technique: 'Chiasmus, antithesis and paradox',
      example:
        'Viola sums up Feste’s art in a couplet: “For folly, that he wisely shows, is fit; / But wise men, folly-fall’n, quite taint their wit.” Later in the same scene Olivia declares, “Love sought is good, but given unsought is better.” (Act 3, Scene 1)',
      effect:
        'Chiasmus reverses the order of key words (folly and wisely, then wise men and folly) so that the second half overturns the first. It is the play’s signature move in miniature: the fool is wise, the steward who scorns fools is fooled, and a countess woos a servant. Olivia’s line turns the same kind of balance into an argument for her own boldness. Because it is neat and rhymes, it sounds like a proverb, which is how she tries to make an unconventional choice feel reasonable.',
    },
    {
      technique: 'The language of madness and dreams',
      example:
        'Olivia calls Malvolio’s smiling, letter-quoting behaviour “very midsummer madness” (Act 3, Scene 4). Sebastian, attacked by a stranger, asks “Are all the people mad?”, and once Olivia has claimed him wonders, “Or I am mad, or else this is a dream.” (Act 4, Scene 1)',
      effect:
        'Madness is the explanation characters reach for again and again when the plot outruns them. The word is used of drunkards and lovers alike (Olivia says “I’m as mad as he, / If sad and merry madness equal be”), but only Malvolio is locked up as a madman. The repetition blurs comic bewilderment with real accusation and invites the question of who in Illyria is actually sane. Sebastian’s careful reasoning in Act 4, Scene 3, that this “may be some error, but no madness”, shows him testing his senses rather than trusting a story, as Malvolio also tries to do from the dark room.',
    },
    {
      technique: 'Rhetorical patterning in the forged letter',
      example:
        'Maria’s letter, read aloud by Malvolio in Act 2, Scene 5, flatters him with a three-part pattern that begins “Some are born great” and ends “some have greatness thrust upon ’em”, then gives orders: “Be opposite with a kinsman, surly with servants.”',
      effect:
        'The tricolon builds to the only category Malvolio could belong to, greatness that arrives unearned, so the sentence seems to have been written for him, which it was. The commands that follow are a recipe for making himself ridiculous, and as soon as he has gone Maria tells the plotters that yellow is a “colour she abhors” and cross-gartering “a fashion she detests”. Malvolio repeats the letter’s words to Olivia in Act 3, Scene 4, and Feste throws them back at him in Act 5, Scene 1, so its language follows him through the play.',
    },
    {
      technique: 'Sea and storm imagery',
      example:
        'Viola hopes her brother lives: “Tempests are kind, and salt waves fresh in love!” (Act 3, Scene 4). Sebastian believes his sister is one “Whom the blind waves and surges have devoured.” (Act 5, Scene 1)',
      effect:
        'The sea is the play’s image of chance: it separates the twins, seems to drown them and then gives them back. Viola’s line reverses the usual meaning of a storm, turning the tempest into a gift, and her exclamation shows hope breaking through a careful disguise. Orsino, too, compares his love to the sea, which takes everything in and values nothing; set beside the twins’ real shipwreck, his metaphor sounds more like performance than experience.',
    },
    {
      technique: 'Religious language turned against Malvolio',
      example:
        'Sir Toby approaches Malvolio as if “Legion himself possessed him” (Act 3, Scene 4); as Sir Topas, Feste calls him “hyperbolical fiend” and “dishonest Satan” (Act 4, Scene 2).',
      effect:
        'The tricksters treat Malvolio’s behaviour as possession by devils and borrow the language of exorcism: Legion is the name the unclean spirits give themselves in the Gospel of Mark before Jesus casts them out. It is a pointed joke on a man Maria has called “a kind of Puritan”, although she at once takes that back and calls him a mere “time-pleaser”. The audience laughs at the performance, but the words also show how easily a household can label someone mad or evil to justify treating him badly.',
    },
  ],

  structureForm: [
    {
      heading: 'A festive comedy in five acts',
      body: 'Twelfth Night follows the shape of Shakespearean comedy: a separation, a tangle of mistaken desires, and a final scene that sorts people into couples. Its title names the twelfth night after Christmas, the end of the festive season, and its first recorded performance, noted by the law student John Manningham, was at a feast in Middle Temple Hall on Candlemas night, 2 February 1602. Acts 1 and 2 set up two households and a love triangle; Act 3 brings the plots into collision; Act 4 lets mistaken identity run out of control; Act 5, a single long scene, untangles everything in front of Orsino. Knowing the shape helps you place any extract: ask what the audience knows at that point that the characters do not.',
    },
    {
      heading: 'Two plots that mirror each other',
      body: 'The main plot follows the lovers; the subplot follows the gulling of Malvolio in Olivia’s household. They are joined by place, since much of both happens at Olivia’s house, and by pattern. Orsino loves an idea of Olivia, and Malvolio loves an idea of himself as her husband; Olivia calls Malvolio “sick of self-love”, a phrase that fits Orsino almost as well. Both plots turn on misreading: Olivia misreads Cesario, and Malvolio misreads a letter. The subplot takes the romantic plot’s self-deception and shows its cost when it is laughed at rather than rewarded.',
    },
    {
      heading: 'Letters that drive the plot',
      body: 'Three letters are written in the course of the play, and each is misread or misused. Maria’s forged love letter (Act 2, Scene 5) traps Malvolio. Sir Andrew’s challenge to Cesario (Act 3, Scene 4) is so foolish that Sir Toby decides not to deliver it and carries a more frightening message by word of mouth instead. Malvolio’s letter from the dark room, signed “The madly-used Malvolio”, reaches Olivia only in Act 5, Scene 1, where Feste admits he has held it back and reads it in a mad voice until Olivia tells Fabian to read it. The pattern supports a reading of Illyria as a place where whoever controls a message controls the people in it.',
    },
    {
      heading: 'Twins kept apart',
      body: 'Shakespeare tells the audience that Sebastian is alive in Act 2, Scene 1, long before anyone on stage knows it, and keeps the twins apart until the last scene. From then on every mistake is dramatic irony: when Antonio calls Cesario by Sebastian’s name in Act 3, Scene 4, the audience understands at once what Viola only dares to hope. The recognition, when it comes, is slowed on purpose. The twins test each other with facts about their father, the mole on his brow and his death on the day Viola turned thirteen, and Viola asks her brother not to embrace her until every detail “do cohere and jump / That I am Viola”. The delay turns the reunion from a plot device into a moment of wonder.',
    },
    {
      heading: 'Verse, prose and rhyme',
      body: 'Orsino speaks almost entirely in blank verse, and Sir Toby, Sir Andrew and Maria almost entirely in prose, so the form itself marks the difference between the court of love and the household of revels. The shifts are where the meaning is. Viola’s first meeting with Olivia in Act 1, Scene 5 begins in prose, full of jokes about her memorised speech, and she moves into verse soon after Olivia unveils: “’Tis beauty truly blent” is the moment feeling takes over from performance. The letter scene is mostly prose, while in Act 3, Scene 1 Olivia’s declaration breaks into rhyming couplets, as if she is reaching for the formality of a love poem to say something she knows is improper.',
    },
    {
      heading: 'Couplets that hand the plot to time',
      body: 'Several scenes end on a rhyming couplet that gives the problem away rather than solving it. Viola ends Act 1, Scene 4 with “Whoe’er I woo, myself would be his wife”; Olivia ends Act 1, Scene 5 with “What is decreed must be; and be this so!”; Viola ends Act 2, Scene 2 with “O time, thou must untangle this, not I, / It is too hard a knot for me t’untie!” The rhyme sounds like closure, but what it closes is the character’s power to act. Leaving things to time and fate is comedy’s way of promising that chance, not effort, will bring the ending.',
    },
    {
      heading: 'Music at the edges',
      body: 'The play begins with Orsino calling for music and ends with Feste alone on stage singing, and its songs come at turning points. In Act 2, Scene 3 Feste sings to the revellers about love that will not wait and youth that will not last; in Act 2, Scene 4 he sings Orsino a lament for a lover killed by a cruel maid, which is exactly the self-pity Orsino enjoys. The final song, about growing up through wind and rain, speaks to the audience rather than to anyone in Illyria and sends them back to ordinary weather. The songs let Shakespeare set a melancholy tone against the comic plot without any character having to argue it.',
    },
    {
      heading: 'An ending left open',
      body: 'Act 5 gives the audience the couples comedy promises, but not all at once and not cleanly. Viola never appears in women’s clothes: her “maiden weeds” are with the Captain, who is in prison “at Malvolio’s suit”, and Malvolio storms out before anyone can ask him to free the man. So Orsino’s last lines still call her Cesario, “For so you shall be while you are a man”, and the weddings are promised for later rather than staged. Antonio, whose love for Sebastian is as strong as anyone’s, has no line after his wonder at the twins. With Malvolio’s threat of revenge and Feste’s song still to come, the play ends in a happiness that is real but partial, which is why many readers find the comedy bittersweet.',
    },
    {
      heading: 'A play that knows it is a play',
      body: 'Twelfth Night keeps reminding its audience that they are watching actors. When Olivia asks Cesario “Are you a comedian?”, Viola swears she is not what she plays; and Fabian, just after Malvolio storms off in Act 3, Scene 4, says that “If this were played upon a stage now” he would condemn it as an “improbable fiction”. In Shakespeare’s theatre women’s parts were played by boys, so the first Viola was a boy actor playing a young woman disguised as a young man. These jokes about performance invite the audience to enjoy the artifice and to notice that almost everyone in Illyria, from Orsino in his melancholy to Malvolio in his yellow stockings, is playing a part.',
    },
  ],

  vocabulary: [
    {
      term: 'Illyria',
      definition:
        'The country where the play is set, ruled by Duke Orsino. Viola’s first line asks “What country, friends, is this?”',
    },
    {
      term: 'Elysium',
      definition:
        'In classical myth, the paradise of the blessed dead. Viola’s “My brother he is in Elysium” echoes the sound of Illyria as she fears Sebastian has drowned.',
    },
    {
      term: 'Cesario',
      definition:
        'The name Viola uses in her disguise as Orsino’s page. She tells Olivia “Cesario is your servant’s name”.',
    },
    {
      term: 'Steward',
      definition:
        'The senior servant who runs a great household. It is Malvolio’s post, and the forged letter threatens to leave him “a steward still”.',
    },
    {
      term: 'Gull',
      definition:
        'As a noun, a dupe; as a verb, to trick. Maria promises to “gull him into a nayword”, and Malvolio complains that he has been made “the most notorious geck and gull”.',
    },
    {
      term: 'Device',
      definition:
        'A trick or plot. When Maria explains her plan, Sir Toby says “I smell a device.”',
    },
    {
      term: 'Cross-gartered',
      definition:
        'Wearing garters tied crosswise around the legs. Maria says it is “a fashion she detests”, and mocks Malvolio in it as looking “like a pedant that keeps a school i’ th’ church”.',
    },
    {
      term: 'Puritan',
      definition:
        'A member of the strict Protestant movement that wanted to purify the Church of England and often opposed festivity and the theatre. Maria calls Malvolio “a kind of Puritan”, then takes it back: he is only a “time-pleaser”, someone who flatters whoever is in power.',
    },
    {
      term: 'Lord of Misrule',
      definition:
        'In old Christmas festivities, a figure chosen to preside over the revels and turn ordinary order upside down for a season. Sir Toby is often read as playing this part in Olivia’s household.',
    },
    {
      term: 'Twelfth Night',
      definition:
        'The twelfth night after Christmas, the end of the Christmas season, a time of feasting and holiday licence.',
    },
    {
      term: 'Catch',
      definition:
        'A round: a song for several voices, each starting in turn. Sir Toby calls for one in Act 2, Scene 3, and Maria calls the result “caterwauling”.',
    },
    {
      term: 'Cakes and ale',
      definition:
        'The food and drink of holiday feasting. In Sir Toby’s question to Malvolio it stands for the whole festive life a disapproving steward would forbid.',
    },
    {
      term: 'Allowed fool',
      definition:
        'A licensed household jester, free to mock his betters. Olivia tells Malvolio there is “no slander in an allowed fool”: his jokes are not to be taken as insults.',
    },
    {
      term: 'Motley',
      definition:
        'The fool’s costume of mixed colours. Feste insists “I wear not motley in my brain”: his costume is foolish, his mind is not.',
    },
    {
      term: 'Madonna',
      definition: 'Italian for my lady: Feste’s teasing name for Olivia (“Good madonna”).',
    },
    {
      term: 'Curate',
      definition:
        'A junior clergyman. Feste disguises himself as “Sir Topas the curate” to visit Malvolio in the dark room.',
    },
    {
      term: 'Betrothal',
      definition:
        'A binding promise to marry. At the end of Act 4, Scene 3 Olivia asks the priest to lead her and Sebastian to the chantry (a small chapel) nearby to plight their faith, and in Act 5 the priest describes what passed there as “A contract of eternal bond of love”.',
    },
    {
      term: 'Dramatic irony',
      definition:
        'When the audience knows something a character does not. The audience knows Cesario is Viola and that Sebastian is alive; almost no one on stage does.',
    },
    {
      term: 'Aside',
      definition:
        'A line the audience hears but other characters on stage do not, as when Viola, forced into a duel, says “Pray God defend me!” and fears that a little thing would make her confess “how much I lack of a man”.',
    },
    {
      term: 'Soliloquy',
      definition:
        'A speech by a character alone on stage, revealing their thoughts: Viola’s ring speech in Act 2, Scene 2 and Sebastian’s in Act 4, Scene 3.',
    },
    {
      term: 'Stichomythia',
      definition:
        'Quick dialogue in alternating single lines, often in argument or wit, as in Olivia and Viola’s exchange in Act 3, Scene 1.',
    },
    {
      term: 'Blank verse',
      definition:
        'Unrhymed lines of ten syllables with five stresses (iambic pentameter). Orsino speaks it almost throughout, and Viola uses it for her most serious speeches; the revellers mostly speak prose.',
    },
    {
      term: 'Metatheatre',
      definition:
        'A play drawing attention to itself as a play, as when Fabian says that if Malvolio’s behaviour were played on a stage he would condemn it as an “improbable fiction”.',
    },
  ],

  examPractice: {
    questions: [
      {
        question:
          'Read the extract from Act 2, Scene 4, from “But if she cannot love you, sir?” to “and yet I know not.” (a) Explore how Shakespeare presents Viola’s feelings in this extract. Refer closely to the extract in your answer. (b) In this extract, Viola hides who she is from Orsino. Explain the importance of disguise elsewhere in the play. In your answer, you must consider: the way disguise is shown; the effects of disguise within the play. You must refer to the context of the play in your answer.',
        skill:
          'Two-part extract and whole-play question (the shape of the Edexcel GCSE Shakespeare question): language analysis of the extract, then a theme elsewhere in the play, with context',
        guidance: [
          'Part (a): start with the situation. Viola is alone with the man she loves, disguised as his servant, and has to argue against his love for another woman, so almost everything she says works on two levels.',
          'Analyse the dramatic irony of “Say that some lady, as perhaps there is,”: she is describing herself, and the audience knows it.',
          'Contrast Orsino’s claim that no woman’s heart can “hold so much” with Viola’s answer that women are “as true of heart as we”, and point out that Orsino said the opposite about men earlier in the same scene.',
          'Close-read the images of the invented sister: concealment “like a worm i’ th’ bud”, and the stillness of “patience on a monument, / Smiling at grief”. Say what each suggests about love that cannot be spoken.',
          'Finish part (a) on the riddle “I am all the daughters of my father’s house”, and on the grief for Sebastian in “and yet I know not”.',
          'Part (b): choose three or four other moments. Viola’s decision to disguise herself (Act 1, Scene 2); her admission “Disguise, I see thou art a wickedness” (Act 2, Scene 2); Feste’s disguise as Sir Topas (Act 4, Scene 2); the twins’ recognition (Act 5, Scene 1).',
          'For the effects, show that disguise frees Viola to speak honestly, traps Olivia in a love she cannot fulfil, and in Feste’s hands becomes a weapon.',
          'Bring in context: the holiday reversals of Twelfth Night itself, and the convention that boys played women’s parts, which made the first Viola a boy playing a girl playing a boy.',
        ],
      },
      {
        question:
          'Read the extract from Act 3, Scene 1, from Olivia’s “Stay: / I prithee tell me what thou think’st of me” to “That heart, which now abhors, to like his love.” Look at how Olivia and Viola speak and behave here. What does it reveal about their feelings at this point in the play? Refer closely to details from the extract to support your answer.',
        skill:
          'Extract question: language, structure and form, and what they reveal about character',
        guidance: [
          'Open with an overview: Olivia risks her dignity to declare her love, and Viola answers truthfully in words Olivia cannot understand.',
          'Analyse the quick exchange of single lines and the riddles “you are not what you are” and “I am not what I am”. Both women are hiding something, and only one of them knows it.',
          'Trace how Olivia’s language changes: she finds the “anger of his lip” beautiful, then admits that love cannot be hidden, “Love’s night is noon.”',
          'Comment on the switch into rhyming couplets and on the proverb-like “Love sought is good, but given unsought is better.” Is Olivia persuading Cesario, or herself?',
          'Analyse Viola’s reply: the pattern of three in “one heart, one bosom, and one truth” and the phrase “save I alone”, true of a woman in disguise and heard by Olivia as a refusal.',
          'End with the final couplet. Olivia still asks Cesario to “come again”, which shows how far her feeling has overridden her pride and prepares for her sudden betrothal to Sebastian.',
        ],
      },
      {
        question: 'Write about Malvolio and how he is presented at different points in the play.',
        skill:
          'Whole-play essay: character, dramatic methods, and the audience’s changing response',
        guidance: [
          'Plan a line of argument, not a list of scenes: for example, that Shakespeare builds Malvolio as a figure of fun and then makes the audience uneasy about laughing at him.',
          'Act 1, Scene 5 and Act 2, Scene 3: his contempt for Feste as a “barren rascal”, his attack on the revellers, and Olivia’s judgement that he is “sick of self-love”.',
          'Act 2, Scene 5: the fantasy of being “Count Malvolio” before he has even found the letter, and the way he bends “M.O.A.I.” to fit his name. Show how the hidden watchers shape the audience’s laughter.',
          'Act 3, Scene 4: the yellow stockings and the smiles, and Olivia’s “midsummer madness”. Point out that the plotters decide here to have him “in a dark room and bound”.',
          'Act 4, Scene 2: his plain insistence that he is sane against Feste’s paradoxes. Ask whether the joke has become cruelty, and note that even Sir Toby wishes they were “well rid of this knavery”.',
          'Act 5, Scene 1: his letter, his dignified complaint, Olivia’s “He hath been most notoriously abus’d” and his exit line. Weigh Feste’s reminder that Malvolio mocked him first.',
          'Conclude with a judgement: is he a comic butt, a victim, or both, and what does his story show about the limits of festive misrule?',
        ],
      },
      {
        question:
          'Explore the extent to which the laughter in Twelfth Night depends on cruelty. You must relate your discussion to relevant contextual factors and ideas from your critical reading.',
        skill:
          'A-level essay in the shape of the Edexcel A-level Shakespeare question: argument, dramatic method, context and ideas from wider critical reading',
        guidance: [
          'Define your terms first: festive laughter that includes everyone, and laughter that needs a victim. Decide how far the play’s comedy depends on the second kind before you plan, because a question about extent asks for a measured judgement, not a yes or no.',
          'Test the view on the subplot: the box-tree scene, the dark room and Malvolio’s exit. Consider staging, since the cruelty of Act 4, Scene 2 depends on how dark, how long and how visible his suffering is made.',
          'Extend it beyond Malvolio: Sir Toby spending Sir Andrew’s money (“some two thousand strong”), the manufactured duel, and Orsino’s threat to kill “the lamb that I do love” in Act 5.',
          'Offer the counter-argument: much of the comedy is generous, from Viola’s wit to the reunion of the twins, and Fabian hopes the trick “May rather pluck on laughter than revenge”.',
          'Use context precisely: holiday misrule and its licensed reversals, the attitude to festivity Maria invokes when she calls Malvolio “a kind of Puritan”, and a first recorded performance at a feast in a London Inn of Court on Candlemas night 1602.',
          'Bring in critical perspectives from your reading and argue with them: for example, readings that celebrate the play as festive comedy against readings that stress its melancholy and its outsiders, Antonio and Malvolio.',
          'Conclude with a judgement about the ending: does the final song resolve the tension between laughter and pain, or leave it with the audience?',
        ],
      },
      {
        question:
          '‘In Twelfth Night, love is a kind of madness.’ In the light of this statement, explore Shakespeare’s presentation of love in Twelfth Night. In your answer, you must consider relevant contextual factors.',
        skill:
          'International A-level drama essay in the shape of the Unit 2 questions: a statement to test, dramatic method and context',
        guidance: [
          'Test the statement rather than simply agreeing with it. One position: love in the play is sudden, involuntary and irrational, but Shakespeare separates love that serves the self from love that waits.',
          'Gather the evidence of love as illness: Orsino’s surfeit and his sea-like appetite, Olivia’s fear that she has caught “the plague”, Malvolio’s fantasy.',
          'Use the play’s own vocabulary of madness: Olivia’s “I’m as mad as he, / If sad and merry madness equal be”, and Sebastian’s “Or I am mad, or else this is a dream.”',
          'Offer the counter-case: Viola’s love is constant and clear-sighted, and Antonio’s devotion is steady; neither is presented as madness.',
          'Consider performance and reception: how productions stage the speed of Olivia’s love and Orsino’s turn to Viola, and how modern audiences may read Olivia’s attraction to Cesario, or Antonio’s devotion to Sebastian, differently from the first audience.',
          'Conclude by judging whether the ending cures love’s madness or simply redirects it.',
        ],
      },
    ],
    tips: [
      'Both GCSE specifications examine the play closed book, so learn short quotations exactly. At Edexcel A-level and International A-level you may take a clean copy into the exam, so the skill shifts from remembering lines to choosing and locating them precisely.',
      'Know who is speaking. “Some are born great” is Maria’s writing, read aloud by Malvolio in Act 2, Scene 5; he quotes it to Olivia in Act 3, Scene 4 with “thrust upon them”, and Feste throws it back at him in Act 5, Scene 1 with “thrown upon them”. Precise attribution is itself evidence that you know the play.',
      'Get the twins’ timeline right. Sebastian is alive from Act 2, Scene 1 and in the town by Act 3, Scene 3; Antonio mistakes Viola for him in Act 3, Scene 4; Sebastian is first mistaken for Cesario in Act 4, Scene 1.',
      'Your edition may head Orsino’s speeches Duke and Feste’s Clown. Feste is named only once in the dialogue, by Curio in Act 2, Scene 4, so write Feste in your essay and recognise him either way.',
      'Take the subplot as seriously as the love plot. Stronger answers link Malvolio’s self-love to Orsino’s, and Maria’s forged letter to the play’s other misreadings, rather than treating the gulling as a comic interlude.',
      'Write about the audience, not just the characters. So much of the play is dramatic irony (the box-tree, the twins, the disguise) that asking what the audience knows at any moment will usually give you your best point.',
      'In the Edexcel GCSE whole-play task, references count as well as quotations: the published mark scheme for the Summer 2024 paper rewards relevant textual references or short quotations from elsewhere in the play, including relevant paraphrasing. Name the act and scene and say exactly what happens.',
      'Extracts are not always the famous speeches. The Summer 2023 Edexcel paper printed the opening of Act 4, Scene 3, Sebastian’s soliloquy and Olivia’s arrival with the priest, and asked about social position elsewhere in the play. The Summer 2024 paper printed the first 35 lines of Act 2, Scene 4, before Feste’s song, and asked about sadness. Revise every scene, including the short ones.',
      'Eduqas first examined the play in Summer 2025. Its examiners’ report for that series says it appears no centres had yet taught it, and that the small number of candidates who clearly knew the play were light on specific textual references. Precise, located detail is what lifts an answer.',
      'At A-level the question names a concept for you to define and argue about. The Summer 2024 Edexcel A-level paper asked how far the play is a dark comedy, or how Shakespeare presents status. Decide what the concept means in this play before you choose your scenes.',
    ],
  },

  modelAnswer: {
    question: 'Write about Malvolio and how he is presented at different points in the play.',
    paragraph:
      'Shakespeare first invites the audience to laugh at Malvolio and then makes that laughter increasingly hard to sustain. In Act 2, Scene 5 the joke is that his fantasy runs ahead of any evidence: before he has even picked up the letter he pictures himself “in my branched velvet gown”, lecturing his future kinsman with “You must amend your drunkenness.” The gap between the steward and the “Count Malvolio” of his daydream is comic, and the watchers in the box-tree, spluttering with rage, give the audience permission to laugh; Olivia’s early verdict that he is “sick of self-love” seems proved. Act 4, Scene 2 reverses that position. Shut in the dark, Malvolio speaks in plain, repeated statements, “I am not mad, Sir Topas. I say to you this house is dark”, while Feste’s paradoxes insist that the windows are “as lustrous as ebony”. Now it is the tormentors who deny what is obvious, and because the audience know he is sane, they are made complicit in a trick that has outlived its joke. When he returns in Act 5 with “Madam, you have done me wrong, / Notorious wrong”, the repetition sounds less like pomposity than injury, and even Olivia concedes that “He hath been most notoriously abus’d.” Shakespeare does not settle whether he deserved it, but his exit, refusing the general reconciliation, suggests that festive licence has a cost the comedy cannot quite pay.',
    commentary: [
      'It opens with an argument about the audience’s changing response, so every later sentence has something to prove rather than something to retell.',
      'The quotations are short, exact and embedded, and each is analysed for what it does: the gap between steward and “Count Malvolio”, the plain repetition in the dark room, the doubled “wrong” in Act 5.',
      'It moves across the whole play in one paragraph, from Act 2 through Act 4 to Act 5, which shows the presentation changing rather than listing moments.',
      'It writes about dramatic method and audience, not just character: the watchers in the box-tree, the dramatic irony of the dark room, and the audience being made complicit.',
      'It evaluates and keeps interpretation tentative, saying that Shakespeare leaves open whether Malvolio deserved his treatment, then ends on the play’s larger idea about festive licence. For the Edexcel whole-play task you would add context here, for example Maria’s claim that he is “a kind of Puritan”.',
    ],
  },

  timeline: [
    {
      where: 'Act 1, Scene 1',
      title: 'Music for a lovesick duke',
      summary:
        'Orsino, Duke of Illyria, listens to his musicians and indulges his love for the Countess Olivia. His attendant Valentine reports that for seven years Olivia will walk veiled, like a nun, mourning her dead brother. Orsino takes this as proof of how deeply she will one day love him.',
      setting: 'A room in Orsino’s palace',
      who: ['Orsino'],
      quote: 'If music be the food of love, play on,',
      themes: ['Love and self-deception', 'Melancholy and mortality'],
      tension: 1,
      significance:
        'The first line sets the play’s question: is this love, or a man in love with the feeling of being in love?',
    },
    {
      where: 'Act 1, Scene 2',
      title: 'Shipwrecked in Illyria',
      summary:
        'Viola comes ashore after a shipwreck, fearing that her twin brother Sebastian has drowned, though the Captain saw him tied to a mast and riding the waves. Learning that Orsino rules here and that Olivia shuns the company of men, she asks the Captain to help her disguise herself and enter Orsino’s service.',
      setting: 'The sea-coast of Illyria',
      who: ['Viola', 'The Captain'],
      quote: 'Conceal me what I am, and be my aid',
      themes: [
        'Gender identity and disguise',
        'Appearance versus reality',
        'Melancholy and mortality',
      ],
      tension: 2,
      significance:
        'Disguise begins as survival, not mischief: Viola is alone in a strange country and needs time to decide what to do.',
    },
    {
      where: 'Act 1, Scene 3',
      title: 'Revels at Olivia’s house',
      summary:
        'In Olivia’s house her uncle, Sir Toby Belch, drinks late and brushes off Maria’s warnings. He has brought in Sir Andrew Aguecheek, a foolish knight with three thousand ducats a year, as a hopeless suitor for Olivia, and he persuades him to stay a month longer.',
      setting: 'A room in Olivia’s house',
      who: ['Sir Toby Belch', 'Maria', 'Sir Andrew Aguecheek'],
      quote: 'Ay, but you must confine yourself within the modest limits of order.',
      themes: ['Order versus misrule', 'Class and ambition'],
      tension: 1,
      significance:
        'The subplot’s world of festive disorder is set against the language of order, which Malvolio will soon claim for himself.',
    },
    {
      where: 'Act 1, Scene 4',
      title: 'Cesario sent to woo',
      summary:
        'Three days into her service, Viola, now the page Cesario, is already Orsino’s favourite. He sends her to woo Olivia for him, praising her smooth lip and high voice as like a woman’s. In an aside she reveals that she has fallen in love with him herself.',
      setting: 'Orsino’s palace',
      who: ['Viola', 'Orsino'],
      quote: 'Whoe’er I woo, myself would be his wife.',
      themes: ['Gender identity and disguise', 'Love and self-deception'],
      tension: 2,
      significance:
        'The first side of the love triangle is drawn: Viola must woo for the man she loves.',
    },
    {
      where: 'Act 1, Scene 5',
      title: 'Olivia unveiled',
      summary:
        'Feste teases Olivia about her mourning and Malvolio sneers at him, earning Olivia’s rebuke. Cesario insists on being admitted, persuades Olivia to unveil and pleads Orsino’s love so passionately that Olivia falls for the messenger instead. She sends Malvolio after Cesario with a ring she pretends was left behind.',
      setting: 'Olivia’s house',
      who: ['Olivia', 'Viola', 'Feste', 'Malvolio', 'Maria'],
      quote: 'Even so quickly may one catch the plague?',
      themes: [
        'Love and self-deception',
        'Appearance versus reality',
        'Gender identity and disguise',
      ],
      tension: 3,
      significance:
        'The triangle closes: Orsino loves Olivia, Olivia loves Cesario, and Cesario loves Orsino.',
    },
    {
      where: 'Act 2, Scene 1',
      title: 'Sebastian is alive',
      summary:
        'On another part of the coast Sebastian, Viola’s twin, takes leave of Antonio, the sea captain who pulled him from the sea. Believing his sister drowned, he sets off for Orsino’s court, and Antonio, though he has enemies there, decides out of love to follow him.',
      setting: 'The sea-coast',
      who: ['Sebastian', 'Antonio'],
      quote: 'But come what may, I do adore thee so,',
      themes: ['Love and self-deception', 'Melancholy and mortality'],
      tension: 2,
      significance:
        'The audience now knows what Viola does not, and every later confusion becomes dramatic irony.',
    },
    {
      where: 'Act 2, Scene 2',
      title: 'The ring',
      summary:
        'Malvolio catches up with Cesario and throws down the ring. Alone, Viola works out that Olivia has fallen in love with her disguise, and sees that she, Orsino and Olivia are now caught in a knot too hard for her to untie.',
      setting: 'A street',
      who: ['Viola', 'Malvolio'],
      quote: 'O time, thou must untangle this, not I,',
      themes: ['Gender identity and disguise', 'Love and self-deception'],
      tension: 3,
      significance:
        'Viola’s soliloquy lays the whole problem out for the audience and hands its solution to time.',
    },
    {
      where: 'Act 2, Scene 3',
      title: 'Cakes and ale',
      summary:
        'After midnight Sir Toby, Sir Andrew and Feste sing and roar until Malvolio arrives to threaten them with Olivia’s displeasure, and Sir Toby mocks him as a mere steward. Stung by Malvolio’s threat to report her too, Maria plans revenge: a love letter forged in a hand like Olivia’s.',
      setting: 'Olivia’s house, late at night',
      who: ['Sir Toby Belch', 'Sir Andrew Aguecheek', 'Feste', 'Maria', 'Malvolio'],
      quote: 'because thou art virtuous, there shall be no more cakes and ale?',
      themes: ['Order versus misrule', 'Class and ambition'],
      tension: 3,
      significance:
        'Festivity and order collide head on, and Malvolio’s interruption gives the revellers their motive.',
    },
    {
      where: 'Act 2, Scene 4',
      title: 'Patience on a monument',
      summary:
        'Orsino calls for Feste’s sad song and lectures Cesario on love, first saying men’s affections are more changeable than women’s, then that no woman could love as deeply as he does. Viola answers with the story of a sister who hid her love and pined in silence.',
      setting: 'Orsino’s palace',
      who: ['Orsino', 'Viola', 'Feste'],
      quote: 'She sat like patience on a monument,',
      themes: [
        'Love and self-deception',
        'Gender identity and disguise',
        'Melancholy and mortality',
      ],
      tension: 2,
      significance:
        'In one of the play’s quietest scenes, Viola comes as close as she dares to telling Orsino the truth.',
    },
    {
      where: 'Act 2, Scene 5',
      title: 'The letter in the garden',
      summary:
        'Hidden in a box-tree, Sir Toby, Sir Andrew and Fabian watch Malvolio daydream about marrying Olivia. He finds Maria’s forged letter, decodes “M.O.A.I.” as pointing to himself, and resolves to obey it: to smile, to be haughty with Sir Toby, and to wear yellow stockings, cross-gartered.',
      setting: 'Olivia’s garden, behind a box-tree',
      who: ['Malvolio', 'Sir Toby Belch', 'Sir Andrew Aguecheek', 'Fabian', 'Maria'],
      quote: 'be not afraid of greatness.',
      themes: ['Class and ambition', 'Appearance versus reality', 'Love and self-deception'],
      tension: 3,
      significance:
        'The comic high point of the subplot, built on the gap between what Malvolio is and what he imagines.',
    },
    {
      where: 'Act 3, Scene 1',
      title: 'I am not what I am',
      summary:
        'Viola trades wordplay with Feste and admires the wit it takes to play the fool. Alone with Cesario, Olivia confesses that she sent the ring and then declares her love outright. Viola answers in riddles that are true and swears that no woman will ever be mistress of her heart.',
      setting: 'Olivia’s garden',
      who: ['Viola', 'Olivia', 'Feste'],
      quote: 'Then think you right; I am not what I am.',
      themes: [
        'Gender identity and disguise',
        'Love and self-deception',
        'Appearance versus reality',
      ],
      tension: 3,
      significance:
        'Disguise now hurts two people at once, and Viola can speak the truth only as a paradox.',
    },
    {
      where: 'Act 3, Scene 4',
      title: 'Yellow stockings',
      summary:
        'Malvolio appears before Olivia smiling, cross-gartered and quoting the letter. Olivia thinks he has lost his wits and asks for him to be looked after, so Sir Toby, Maria and Fabian treat him as possessed. When he storms off, Sir Toby plans to keep him bound in a dark room.',
      setting: 'Olivia’s garden',
      who: ['Malvolio', 'Olivia', 'Maria', 'Sir Toby Belch', 'Fabian'],
      quote: 'Why, this is very midsummer madness.',
      themes: ['Class and ambition', 'Appearance versus reality', 'Order versus misrule'],
      tension: 4,
      significance: 'The joke turns from exposing Malvolio to imprisoning him.',
    },
    {
      where: 'Act 3, Scene 4',
      title: 'A duel and an arrest',
      summary:
        'Sir Toby frightens Cesario and Sir Andrew into a duel neither of them wants. Antonio, who lent Sebastian his purse in Act 3, Scene 3, steps in to defend the youth he takes for Sebastian and is arrested by Orsino’s officers. When Cesario denies knowing him he accuses his friend of ingratitude, and Viola begins to hope her brother lives.',
      setting: 'Olivia’s garden',
      who: ['Viola', 'Sir Andrew Aguecheek', 'Sir Toby Belch', 'Fabian', 'Antonio'],
      quote: 'Prove true, imagination, O prove true,',
      themes: [
        'Appearance versus reality',
        'Gender identity and disguise',
        'Love and self-deception',
      ],
      tension: 4,
      significance:
        'Mistaken identity turns painful, and the first clue to the twins’ reunion reaches Viola.',
    },
    {
      where: 'Act 4, Scene 1',
      title: 'Mistaken for Cesario',
      summary:
        'First Feste and then Sir Andrew mistake Sebastian for Cesario; Sir Andrew strikes him and is soundly beaten. Olivia stops Sir Toby’s swordplay, sends him away in disgrace, and invites the bewildered Sebastian into her house, and he agrees to go.',
      setting: 'The street before Olivia’s house',
      who: ['Sebastian', 'Feste', 'Sir Andrew Aguecheek', 'Sir Toby Belch', 'Olivia'],
      quote: 'Or I am mad, or else this is a dream.',
      themes: ['Appearance versus reality', 'Love and self-deception'],
      tension: 3,
      significance:
        'The twin confusion now works in comedy’s favour: the wrong twin receives exactly the right welcome.',
    },
    {
      where: 'Act 4, Scene 2',
      title: 'The dark room',
      summary:
        'Disguised as the curate Sir Topas, Feste visits Malvolio, who is shut in darkness, and tells him he is mad. Sir Toby, already in trouble with Olivia, wants the joke ended. Feste, in his own voice, agrees to bring Malvolio light, paper and ink so that he can write to Olivia.',
      setting: 'A dark room in Olivia’s house',
      who: ['Malvolio', 'Feste', 'Sir Toby Belch', 'Maria'],
      quote: 'They have laid me here in hideous darkness.',
      themes: ['Order versus misrule', 'Appearance versus reality', 'Class and ambition'],
      tension: 4,
      significance:
        'The scene where many audiences stop laughing, and the test of how far misrule should be allowed to go.',
    },
    {
      where: 'Act 4, Scene 3',
      title: 'A pearl and a priest',
      summary:
        'Alone in Olivia’s garden, Sebastian holds the pearl she gave him and reasons that this is wonder but not madness, though he cannot explain his luck and half distrusts his own eyes. Olivia arrives with a priest and asks him to pledge himself to her in the chapel nearby, and he agrees.',
      setting: 'Olivia’s garden',
      who: ['Sebastian', 'Olivia'],
      quote: 'This is the air; that is the glorious sun,',
      themes: ['Love and self-deception', 'Appearance versus reality'],
      tension: 2,
      significance:
        'Sebastian’s calm reasoning contrasts with the madness everyone else sees, and his betrothal sets up the final scene.',
    },
    {
      where: 'Act 5, Scene 1',
      title: 'Husband',
      summary:
        'Orsino arrives at Olivia’s house and hears Antonio’s story of betrayal. Rejected once more, he threatens to kill Cesario to spite Olivia, and Cesario follows him willingly. Olivia calls Cesario her husband, the priest confirms the betrothal, and Sir Andrew and Sir Toby stagger in with broken heads, blaming Cesario.',
      setting: 'Before Olivia’s house',
      who: ['Orsino', 'Viola', 'Olivia', 'Antonio', 'Sir Andrew Aguecheek', 'Sir Toby Belch'],
      quote: 'I’ll sacrifice the lamb that I do love,',
      themes: ['Love and self-deception', 'Gender identity and disguise'],
      tension: 5,
      significance:
        'Every misunderstanding reaches crisis at once, and comedy comes close to violence.',
    },
    {
      where: 'Act 5, Scene 1',
      title: 'One face, one voice',
      summary:
        'Sebastian enters and the twins stand face to face. Questioning each other about their father, they confirm who they are, and Viola explains her disguise. Orsino turns his love to Viola and asks to see her in women’s clothes, but these are with the Captain, now in prison at Malvolio’s suit.',
      setting: 'Before Olivia’s house',
      who: ['Sebastian', 'Viola', 'Orsino', 'Olivia', 'Antonio'],
      quote: 'One face, one voice, one habit, and two persons!',
      themes: [
        'Gender identity and disguise',
        'Appearance versus reality',
        'Melancholy and mortality',
      ],
      tension: 4,
      significance:
        'The recognition releases the tension, but Viola is still dressed as Cesario when the play ends.',
    },
    {
      where: 'Act 5, Scene 1',
      title: 'The whole pack of you',
      summary:
        'Malvolio’s letter is read and he is brought in. He demands to know why Olivia wronged him; she recognises Maria’s handwriting, and Fabian confesses the plot, adding that Sir Toby has married Maria. Feste mocks Malvolio with the letter’s words and with Malvolio’s own old insult, and Malvolio leaves swearing revenge.',
      setting: 'Before Olivia’s house',
      who: ['Malvolio', 'Olivia', 'Fabian', 'Feste', 'Orsino'],
      quote: 'I’ll be revenged on the whole pack of you.',
      themes: ['Order versus misrule', 'Class and ambition'],
      tension: 4,
      significance: 'The one character who refuses the happy ending walks out of it.',
    },
    {
      where: 'Act 5, Scene 1',
      title: 'The wind and the rain',
      summary:
        'Orsino sends someone after Malvolio to make peace and promises weddings when the time is right, still calling Viola Cesario. The lovers leave, and Feste, alone, sings of growing up through wind and rain and ends the play by promising that the players will strive to please the audience every day.',
      setting: 'Before Olivia’s house, with only Feste left on stage',
      who: ['Feste'],
      themes: ['Melancholy and mortality', 'Order versus misrule'],
      tension: 1,
      significance:
        'The festival ends and ordinary weather returns: a comic ending with a melancholy fall.',
    },
  ],

  relationships: [
    {
      from: 'Orsino',
      to: 'Olivia',
      kind: 'suitor and the lady who refuses him',
      note: 'Orsino courts Olivia only through messengers and does not come to her house until Act 5. His love is for an image he feeds with music, and once she is pledged to Sebastian he greets her as “sweet sister”.',
    },
    {
      from: 'Viola',
      to: 'Orsino',
      kind: 'servant and master, secretly in love',
      note: 'As Cesario she becomes his confidant within three days and loves him from Act 1, Scene 4. Their talk of love in Act 2, Scene 4 is the most intimate in the play. In Act 5 he gives her his hand and names her “Your master’s mistress”, yet his final speech still calls her Cesario.',
    },
    {
      from: 'Olivia',
      to: 'Viola',
      kind: 'a love built on disguise',
      note: 'Olivia falls for Cesario at their first meeting, sends a ring after her and declares her love in Act 3, Scene 1. Viola pities her; at the end Olivia gains her as a sister instead.',
    },
    {
      from: 'Olivia',
      to: 'Sebastian',
      kind: 'sudden husband and wife',
      note: 'Olivia mistakes him for Cesario in Act 4, Scene 1 and is betrothed to him before a priest within hours. Sebastian meets the good fortune with wonder rather than suspicion.',
    },
    {
      from: 'Viola',
      to: 'Sebastian',
      kind: 'twins',
      note: 'Each believes the other drowned. Their likeness drives the confusions of Acts 3 to 5, and their slow, questioning reunion is the emotional climax of the final scene.',
    },
    {
      from: 'Antonio',
      to: 'Sebastian',
      kind: 'rescuer and devoted friend',
      note: 'Antonio saved Sebastian from the sea and follows him into a town full of enemies, lending him his purse. His arrest and his sense of betrayal come from the twins’ likeness, and the play gives him no clear reward at the end.',
    },
    {
      from: 'Malvolio',
      to: 'Olivia',
      kind: 'steward and mistress',
      note: 'Olivia values him as “sad and civil” and trusts him to run her house. He imagines marrying her, and she finally admits that he has been “most notoriously abus’d”.',
    },
    {
      from: 'Maria',
      to: 'Malvolio',
      kind: 'enemies',
      note: 'After his rebuke in Act 2, Scene 3, Maria devises and writes the forged letter that ruins him. In Act 5 Olivia recognises the handwriting as hers.',
    },
    {
      from: 'Sir Toby Belch',
      to: 'Sir Andrew Aguecheek',
      kind: 'exploiter and dupe',
      note: 'Toby keeps Andrew in Illyria as a hopeless suitor to Olivia so that he can spend his money, boasting that he has had “some two thousand strong”. Wounded and drunk in Act 5, he turns on him as “An ass-head, and a coxcomb, and a knave”.',
    },
    {
      from: 'Sir Toby Belch',
      to: 'Maria',
      kind: 'fellow plotters, then husband and wife',
      note: 'Toby delights in Maria’s wit, calling her “thou most excellent devil of wit”, and Fabian reports in Act 5 that Toby has married her in return for the letter.',
    },
    {
      from: 'Sir Toby Belch',
      to: 'Olivia',
      kind: 'uncle and niece',
      note: 'Toby lives on Olivia’s hospitality while mocking her mourning. She tolerates him until he draws his sword on Sebastian, then drives him off as an “Ungracious wretch”.',
    },
    {
      from: 'Feste',
      to: 'Malvolio',
      kind: 'fool and critic',
      note: 'Malvolio sneers at Feste in Act 1, Scene 5. Feste torments him as Sir Topas in Act 4, Scene 2 and in Act 5 reminds him of the insult, calling the reversal “the whirligig of time” bringing its revenges.',
    },
  ],

  compareWith: [
    {
      title: 'Much Ado About Nothing',
      href: '/revision/texts/much-ado-about-nothing',
      reason:
        'Another Shakespeare comedy on both the Edexcel and Eduqas GCSE lists, in which staged, overheard tricks fool characters about love, and a comic plot comes close to cruelty.',
    },
    {
      title: 'The Merchant of Venice',
      href: '/revision/texts/the-merchant-of-venice',
      reason:
        'Also on both GCSE lists: a comedy with a heroine disguised as a man, a devoted Antonio left unpaired at the end, and an outsider humiliated while others celebrate.',
    },
    {
      title: 'Romeo and Juliet',
      href: '/revision/texts/romeo-and-juliet',
      reason:
        'On both GCSE lists: Romeo’s early melancholy over Rosaline resembles Orsino’s, and love at first sight drives the plot, but towards tragedy rather than marriage.',
    },
  ],

  contentGuidance: [
    'intimate_relationships',
    'mortality',
    'mental_health',
    'addiction',
    'violence',
    'mythological_religious',
  ],

  // A reading from another edition, quoted in an extract note so that a student
  // whose copy differs is not thrown by it. Not in the held Gutenberg text.
  quotesFromElsewhere: ['given unsought better'],

  sources: [
    {
      label:
        'Twelfth Night, Project Gutenberg eBook #1526: the modern-spelling edition held as a byte copy in src/data/full-texts, from which every quotation, extract and quoted phrase was copied and checked, with its speaker and scene, by reading the whole play',
      url: 'https://www.gutenberg.org/ebooks/1526',
    },
    {
      label:
        'The Complete Works of William Shakespeare (MIT), Twelfth Night Act 2 Scene 4 and Act 3 Scene 1: cross-check of the two verse extracts. Differs only in punctuation, elisions and spellings (“call’d”, “thinkest”, “murderous”, “every thing”), “a great a pang” for “as great a pang”, “i’ the bud” for “i’ th’ bud”, and “given unsought better” for “given unsought is better”',
      url: 'http://shakespeare.mit.edu/twelfth_night/twelfth_night.2.4.html',
    },
    {
      label:
        'Royal Shakespeare Company, Twelfth Night: dating the play. John Manningham, a Middle Temple student, recorded a performance on Candlemas, 2 February 1602; first published in the First Folio of 1623',
      url: 'https://www.rsc.org.uk/twelfth-night/about-the-play/dating-the-play',
    },
    {
      label:
        'Wikipedia, Twelfth Night: Manningham’s diary entry for 2 February (Candlemas night) 1602 at Middle Temple Hall, “At our feast we had a play”; First Folio 1623; boy actors in female roles; the Lord of Misrule; Puritan opposition to Epiphany celebrations. It says the play was probably finished in 1600-1601 and the RSC says likely 1601, so the guide gives no date of writing',
      url: 'https://en.wikipedia.org/wiki/Twelfth_Night',
    },
    {
      label:
        'Folger Shakespeare Library, Twelfth Night: first printed in the 1623 First Folio; named for the twelfth night after Christmas, the end of the Christmas season',
      url: 'https://www.folger.edu/explore/shakespeares-works/twelfth-night/',
    },
    {
      label:
        'Wikipedia, Boy player: female roles on the English Renaissance stage were played by boys. Sources give different dates for when women were first allowed to act, so the guide gives none',
      url: 'https://en.wikipedia.org/wiki/Boy_player',
    },
    {
      label:
        'Wikipedia, Actaeon: in Ovid’s version he sees Diana bathing, is changed by her into a stag, and is killed by his own hounds; the article cites Orsino’s hart lines from Act 1, Scene 1',
      url: 'https://en.wikipedia.org/wiki/Actaeon',
    },
    {
      label:
        'Bible Gateway, Mark 5:1-13 (King James Version): the unclean spirits named Legion, cast out by Jesus',
      url: 'https://www.biblegateway.com/passage/?search=Mark+5%3A1-13&version=KJV',
    },
    {
      label:
        'Pearson Edexcel GCSE (9-1) English Literature 1ET0 specification, Issue 2, June 2019: Twelfth Night on the Shakespeare list; Paper 1 Section A is a two-part question, the first on an extract of about 30 lines, the second on how a theme from the extract is explored elsewhere in the play, with context; closed book',
      url: 'https://qualifications.pearson.com/content/dam/pdf/GCSE/English%20Literature/2015/specification-and-sample-assesment/9781446914359_GCSE_2015_L12_Englit.pdf',
    },
    {
      label:
        'Pearson Edexcel GCSE English Literature 1ET0/01, Summer 2023 question paper (P72891A, 17 May 2023): the Twelfth Night extract was Act 4, Scene 3, lines 1 to 33, and part (b) asked about social position elsewhere in the play',
      url: 'https://qualifications.pearson.com/content/dam/pdf/GCSE/English-Literature/2015/Exam-materials/1et0-01-que-20230518.pdf',
    },
    {
      label:
        'Pearson Edexcel GCSE English Literature 1ET0/01, Summer 2024 question paper (P75434A, 13 May 2024): the Twelfth Night extract was Act 2, Scene 4, lines 1 to 35, and part (b) asked about sadness elsewhere in the play. The wording of the two-part question in this guide follows this paper',
      url: 'https://qualifications.pearson.com/content/dam/pdf/GCSE/English-Literature/2015/Exam-materials/1et0-01-que-20240514.pdf',
    },
    {
      label:
        'Pearson Edexcel GCSE English Literature 1ET0/01, Summer 2024 mark scheme, Question 5(b): candidates are rewarded for relevant textual references or short quotations from elsewhere in the play, outside the extract, including relevant paraphrasing',
      url: 'https://qualifications.pearson.com/content/dam/pdf/GCSE/English-Literature/2015/Exam-materials/1et0-01-rms-20240822.pdf',
    },
    {
      label:
        'WJEC Eduqas GCSE English Literature specification, Version 4, August 2024: Twelfth Night replaced Henry V for assessment from 2025; Component 1 Section A is one extract question and one essay question on the Shakespeare text; learners may not take copies of the set texts into the examination',
      url: 'https://www.eduqas.co.uk/media/42ldm0wa/eduqas-gcse-english-literature-spec-from-2015.pdf',
    },
    {
      label:
        'WJEC Eduqas GCSE Examiners’ Report, English Literature, Summer 2025: it appears no centres had taught Twelfth Night that series; a small number of candidates who clearly knew the text were light on specific textual references',
      url: 'https://www.eduqas.co.uk/media/tbdhukmq/eduqas-gcse-english-literature-s25-e.pdf',
    },
    {
      label:
        'Pearson Edexcel Level 3 Advanced GCE in English Literature (9ET0) specification, Issue 11, August 2025: Twelfth Night among the Shakespeare comedies in Component 1 Drama; one essay question from a choice of two, incorporating ideas from wider critical reading, supported by Shakespeare: A Critical Anthology (Comedy); open book, clean copies of the drama texts',
      url: 'https://qualifications.pearson.com/content/dam/pdf/A%20Level/English%20Literature/2015/Specification%20and%20sample%20assessments/gce2015-a-level-eng-lit-spec.pdf',
    },
    {
      label:
        'Pearson Edexcel A-level English Literature 9ET0/01, Summer 2024 question paper (P77996A, 24 May 2024): the two Twelfth Night questions asked about dark comedy and about status, each requiring contextual factors and ideas from critical reading. The A-level question in this guide follows their shape',
      url: 'https://qualifications.pearson.com/content/dam/pdf/A-Level/English-Literature/2015/Exam-materials/9et0-01-que-20240525.pdf',
    },
    {
      label:
        'Pearson Edexcel International Advanced Level English Literature, Getting Started guide, Issue 4, November 2021: Twelfth Night among the pre-1900 dramas in Unit 2 Drama (WET02); one essay question from a choice of two; open book examination',
      url: 'https://qualifications.pearson.com/content/dam/pdf/International%20Advanced%20Level/english-literature/2015/Teaching%20and%20learning%20materials/IAL-English-Literature-Getting-Started-Guide_issue%204.pdf',
    },
    {
      label:
        'Pearson Edexcel International Advanced Level WET02/01, January 2023 question paper (P69240A): set texts in clean copies only; the Twelfth Night questions give a critical statement to explore in the light of, with relevant contextual factors. The International A-level question in this guide follows that shape',
      url: 'https://qualifications.pearson.com/content/dam/pdf/International%20Advanced%20Level/english-literature/2015/Exam-materials/wet02-01-que-20230119.pdf',
    },
    {
      label:
        'Wikipedia, Antitheatricality: the Puritan attack on English Renaissance theatre, and the closing of the London theatres in 1642',
      url: 'https://en.wikipedia.org/wiki/Antitheatricality',
    },
  ],
}
