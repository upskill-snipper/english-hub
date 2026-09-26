import type { StudyGuide } from '@/lib/study-guides/types'

/**
 * King Lear, William Shakespeare (probably written late 1605 or early 1606). A
 * supplement: the existing page at /revision/texts/king-lear keeps its
 * overview, context, themes, characters and key quotations, and this file adds
 * the close-reading passages, language analysis, structure and form,
 * vocabulary, exam practice, a model answer and the scene data for the
 * animated visuals.
 *
 * Every quotation, in the passages, the scene cards and the prose, was copied
 * from the byte copy of Project Gutenberg #1532 held at
 * src/data/full-texts/king-lear.ts, after reading the whole play in that
 * edition (25 September 2026). The guide test checks that each one is in the
 * edition; it does not check who says it or where, so every speaker, act and
 * scene was checked separately against the same reading.
 *
 * The held edition is a conflated text: it combines the 1608 Quarto and the
 * 1623 Folio, as most school editions do. Where the guide leans on a passage
 * found in only one of them, it says so, from the Internet Shakespeare
 * Editions texts of each: the mock trial in Act 3, Scene 6 is Quarto only; the
 * Fool's Merlin prophecy in Act 3, Scene 2 and his last line are Folio only;
 * and the play's closing lines are Edgar's in the Folio and Albany's in the
 * Quarto.
 *
 * Theme titles on the scene cards match the six themes on the existing page
 * exactly. Character names follow the page for King Lear, Cordelia, Goneril,
 * Regan, Edmund, Edgar and The Fool; Gloucester is named as the play's speech
 * prefixes name him, because the page's "The Earl of Gloucester" draws as an
 * unreadable monogram on the character map.
 *
 * THE PAGE ABOVE THIS FILE carries errors that this file does not repeat and
 * cannot fix, because it may not edit that page. They are listed in the report
 * that produced this file, and the notes below teach the correct forms: the
 * "Never" line is five trochees, not iambic pentameter; Kent says "the foul
 * disease", not "thy", in both early texts; Lear's "Howl" on his entrance and
 * his "Never" as he dies are two separate moments.
 *
 * FACT-CHECKED AGAIN, 26 September 2026, against the Internet Shakespeare
 * Editions' modern texts of the 1608 Quarto and the 1623 Folio, scene by scene,
 * because the first draft had treated the held edition as if it were the play.
 * It is one editor's combination of two texts, and a student's copy may follow
 * either. What that check changed:
 * - The counts at the end are edition-dependent. The held edition prints four
 *   "Howl"s, from the Quarto; the Folio, and the Folger edition, have three.
 *   It prints five "Never"s, from the Folio; the Quarto has three. The draft
 *   told students to "count them exactly" as four and five.
 * - The Fool's "before thou hadst been wise" is the Quarto's reading, not an
 *   invention: the Folio has "till". The page above is inconsistent with the
 *   site's edition there, not wrong about the play.
 * - Two words in the held edition are in neither early text: "rough world"
 *   (both read "tough") and "men of stone" (both read "stones"). Neither is
 *   used as a scene-card quotation any more, and the passage note says so.
 * - Lines found in only one text are now labelled where they are quoted: from
 *   the Quarto, Albany's "Tigers, not daughters", the Gentleman's "little world
 *   of man", the Fool's "All thy other titles", Gloucester's plea against the
 *   stocks and the servants' "Women will all turn monsters"; from the Folio,
 *   "In, boy; go first" and Lear's dying "Look there". Where the Quarto's
 *   wording of a famous line differs ("can" for "will" in "Nothing will come of
 *   nothing", "great" or "small" vices), the note says so. Quarto readings
 *   of more than one word are quoted and listed in quotesFromElsewhere, so the
 *   test knows they come from the other early text, not from the held edition.
 *
 * CHECKED A THIRD TIME, 26 September 2026, by an adversarial pass: every
 * quotation located by script in the held edition with its scene and speaker,
 * every Quarto-only and Folio-only claim re-read in the ISE modern texts, and
 * the Folger readings re-fetched. What that pass changed: the love-test card no
 * longer puts Gloucester and Edmund on stage (they leave before it begins); the
 * blinding card no longer puts Goneril, Edmund and Oswald there (they leave
 * before Gloucester is brought in), and its summary now has the eyes in the
 * order the text gives them; Cornwall's "form of justice" comes before
 * Gloucester is brought in, not during the questioning; Cordelia's "No cause"
 * answers "You have some cause", not a request for forgiveness; Edmund offers
 * forgiveness before Edgar's "Let's exchange charity"; the date of writing is
 * given as probable, as the evidence allows; and readings of the ending are
 * attributed to readers rather than stated as a consensus.
 */
export const guide: StudyGuide = {
  slug: 'king-lear',
  title: 'King Lear',
  author: 'William Shakespeare',
  form: 'play',
  scope:
    'The whole play, in five acts. The edition quoted here, like most school editions, combines the 1608 Quarto and the 1623 Folio and has twenty-six scenes. The Folio has no Act 4, Scene 3, so an edition that follows the Folio alone may number the later scenes of Act 4 differently.',
  rights: {
    status: 'public-domain',
    acknowledgement:
      'Probably written in late 1605 or early 1606, first printed in a quarto of 1608 and then, in a different version, in the First Folio of 1623. Quotations follow the modern-spelling Project Gutenberg edition (eBook #1532) held on this site, which combines the two texts. Your own edition may differ from it in spelling, punctuation, line division and, in places, whole passages, so check a quotation against your own copy before you learn it.',
  },

  native: {
    overview: '/revision/texts/king-lear',
    context: '/revision/texts/king-lear',
    themes: '/revision/texts/king-lear',
    characters: '/revision/texts/king-lear',
    keyQuotes: '/revision/texts/king-lear',
  },

  extracts: [
    {
      title: 'The love test',
      where: 'Act 1, Scene 1',
      pointer:
        "Early in the first scene, after Lear asks “Which of you shall we say doth love us most?”: from Goneril's “Sir, I love you more than word can wield the matter;” to Cordelia's “According to my bond; no more nor less.” The wording is the Folio's, which most editions follow here. The 1608 Quarto differs in many small words, gives Lear shorter speeches (its map speech has no “champains” and no “plenteous rivers”) and has no second exchange of “Nothing”, so a Quarto-based edition will not match line for line.",
      text: 'GONERIL: / Sir, I love you more than word can wield the matter; / Dearer than eyesight, space, and liberty; / Beyond what can be valu’d, rich or rare; / No less than life, with grace, health, beauty, honour; / As much as child e’er lov’d, or father found; / A love that makes breath poor and speech unable; / Beyond all manner of so much I love you. / CORDELIA: / What shall Cordelia speak? Love, and be silent. / LEAR: / Of all these bounds, even from this line to this, / With shadowy forests and with champains rich’d, / With plenteous rivers and wide-skirted meads, / We make thee lady: to thine and Albany’s issue / Be this perpetual.—What says our second daughter, / Our dearest Regan, wife of Cornwall? Speak. / REGAN: / Sir, I am made of the self mettle as my sister, / And prize me at her worth. In my true heart / I find she names my very deed of love; / Only she comes too short, that I profess / Myself an enemy to all other joys / Which the most precious square of sense possesses, / And find I am alone felicitate / In your dear highness’ love. / CORDELIA: / Then poor Cordelia, / And yet not so; since, I am sure, my love’s / More ponderous than my tongue. / LEAR: / To thee and thine hereditary ever / Remain this ample third of our fair kingdom; / No less in space, validity, and pleasure / Than that conferr’d on Goneril.—Now, our joy, / Although the last and least; to whose young love / The vines of France and milk of Burgundy / Strive to be interess’d; what can you say to draw / A third more opulent than your sisters? Speak. / CORDELIA: / Nothing, my lord. / LEAR: / Nothing? / CORDELIA: / Nothing. / LEAR: / Nothing will come of nothing: speak again. / CORDELIA: / Unhappy that I am, I cannot heave / My heart into my mouth: I love your majesty / According to my bond; no more nor less.',
      annotations: [
        {
          phrase: 'more than word can wield the matter',
          note: 'Goneril claims her love is too great for words, then spends six more fluent lines describing it. The paradox is the first sign that in this play eloquence and truth pull apart: the daughter who says language cannot hold her love is the one using language most skilfully.',
        },
        {
          phrase: 'Dearer than eyesight',
          note: 'A conventional compliment that the play turns into a grim irony. Sight becomes one of its central images, and in Act 3, Scene 7 it is Goneril who first proposes the punishment for Gloucester with “Pluck out his eyes.”',
        },
        {
          phrase: 'Love, and be silent.',
          note: 'Cordelia speaks aside, so the audience alone hears that her silence is a choice made out of love, not coldness. The aside sets up a gap between what we know and what Lear hears, and he never hears this line.',
        },
        {
          phrase: 'With shadowy forests and with champains rich’d',
          note: 'Lear is pointing at the map he called for as soon as he entered. The kingdom is described as property, lush and measurable, and it is handed over as payment for a speech: the land that should secure order becomes a prize in a performance.',
        },
        {
          phrase: 'Only she comes too short',
          note: "Regan outbids her sister by claiming that Goneril's extravagant speech falls short. The competition is already visible in the love test, and it looks forward to the rivalry over Edmund that finally destroys both sisters in Act 5.",
        },
        {
          phrase: 'More ponderous than my tongue.',
          note: '“Ponderous” means heavy. Cordelia gives her love weight and substance, against the airy words of her sisters, and the image of weighing love recurs when Lear later bargains over his knights as if they were a measure of affection. “Ponderous” is the Folio’s word; the 1608 Quarto reads “More richer than my tongue”, which loses the sense of weight.',
        },
        {
          phrase: 'A third more opulent than your sisters?',
          note: 'Lear speaks the language of a market: Cordelia is asked to “draw”, to earn, a richer share with words (the 1608 Quarto has “win”). The question shows that he has already planned the best third for her, which makes her answer feel to him like a public humiliation.',
        },
        {
          phrase: 'Nothing will come of nothing: speak again.',
          note: 'Lear turns a proverb, that nothing can be made from nothing, into a threat. It becomes one of the key words of the play: the Fool turns it back on him in Act 1, Scene 4, where Lear himself repeats it, and by Act 2, Scene 3 Edgar can say “Edgar I nothing am.” Learn the line from your own copy: the Folio, followed by most editions, has “will come”, but the 1608 Quarto has “can come”.',
        },
        {
          phrase: 'According to my bond; no more nor less.',
          note: 'A bond is a binding tie, here the natural duty between child and parent. Lear hears a limit, but Cordelia means a complete and exact obligation. In Act 2, Scene 4 Lear himself appeals to “The offices of nature, bond of childhood” when he turns to Regan after Goneril has cut his knights.',
        },
      ],
      question:
        'Explore the significance of this exchange in relation to the tragedy as a whole. In your answer, analyse the dramatic methods Shakespeare uses in the extract and link them to later moments in the play.',
    },
    {
      title: 'The tempest in my mind',
      where: 'Act 3, Scene 4',
      pointer:
        "The opening of the scene before the hovel on the heath, in the storm: from Lear's “Thou think’st ’tis much that this contentious storm” to “And show the heavens more just.”, just before Edgar, as Poor Tom, cries out from inside the hovel. Small words differ between editions here (both early texts have “the roaring sea” where this one has “the raging sea”), so check your own copy before you quote.",
      text: 'LEAR: / Thou think’st ’tis much that this contentious storm / Invades us to the skin: so ’tis to thee, / But where the greater malady is fix’d, / The lesser is scarce felt. Thou’dst shun a bear; / But if thy flight lay toward the raging sea, / Thou’dst meet the bear i’ the mouth. When the mind’s / free, / The body’s delicate: the tempest in my mind / Doth from my senses take all feeling else / Save what beats there. Filial ingratitude! / Is it not as this mouth should tear this hand / For lifting food to’t? But I will punish home; / No, I will weep no more. In such a night / To shut me out! Pour on; I will endure: / In such a night as this! O Regan, Goneril! / Your old kind father, whose frank heart gave all, / O, that way madness lies; let me shun that; / No more of that. / KENT: / Good my lord, enter here. / LEAR: / Prythee go in thyself; seek thine own ease: / This tempest will not give me leave to ponder / On things would hurt me more. But I’ll go in. / In, boy; go first. You houseless poverty, / Nay, get thee in. I’ll pray, and then I’ll sleep. / Poor naked wretches, wheresoe’er you are, / That bide the pelting of this pitiless storm, / How shall your houseless heads and unfed sides, / Your loop’d and window’d raggedness, defend you / From seasons such as these? O, I have ta’en / Too little care of this! Take physic, pomp; / Expose thyself to feel what wretches feel, / That thou mayst shake the superflux to them / And show the heavens more just.',
      annotations: [
        {
          phrase: 'the tempest in my mind',
          note: 'Lear names the link the storm scenes depend on: the weather outside matches the turmoil inside him. He claims the greater pain drowns out the lesser, so that the cold barely touches him, which is itself a sign of how far his mind has been overwhelmed.',
        },
        {
          phrase: 'Is it not as this mouth should tear this hand / For lifting food to’t?',
          note: 'Ingratitude is imagined as a body attacking itself: the daughters are the mouth, Lear the hand that fed them. The image belongs to a pattern of family and body turned against themselves, which returns later in the scene when he calls them “pelican daughters”.',
        },
        {
          phrase: 'O, that way madness lies; let me shun that;',
          note: 'Lear sees madness ahead and tries to steer his thoughts away from it, just as he tries to shun the bear. The broken, self-correcting rhythm, followed by “No more of that”, shows a mind struggling to keep control of itself.',
        },
        {
          phrase: 'In, boy; go first. You houseless poverty,',
          note: 'The king who once demanded to be served first now sends the Fool into shelter ahead of him. It is a small action, but it marks a turn in a man who has always expected to be served: he puts the Fool’s need before his own, and the word “houseless” carries straight into his prayer. This line and the next are in the Folio only, so a Quarto-based edition moves straight to the prayer.',
        },
        {
          phrase: 'Poor naked wretches, wheresoe’er you are,',
          note: 'An apostrophe, a speech addressed to people who are not there. Lear imagines the homeless poor of his whole kingdom enduring the same storm, and the private grief of a father becomes a public, political thought about those he ruled.',
        },
        {
          phrase: 'Your loop’d and window’d raggedness',
          note: 'Rags full of holes are pictured as a building with loopholes and windows, so the clothing of the poor becomes a house that cannot keep out the weather. The play keeps joining clothing and shelter, the two things Lear loses.',
        },
        {
          phrase: 'Take physic, pomp;',
          note: '“Physic” is medicine and “pomp” is the splendour of the great. Lear prescribes suffering as the cure for the rich, and since he was the greatest of them, the line is also a diagnosis of himself: the storm is the medicine he is taking.',
        },
        {
          phrase: 'shake the superflux to them',
          note: 'The “superflux” is the surplus the rich do not need. The idea of sharing it returns in Act 4, Scene 1, when the blinded Gloucester gives his purse to Poor Tom and says “So distribution should undo excess, / And each man have enough.”',
        },
        {
          phrase: 'And show the heavens more just.',
          note: 'A daring thought: if the gods do not seem just, human beings must make them look so by their own charity. Whether the heavens are just at all is a question the play keeps asking and, in its final scene, refuses to answer.',
        },
      ],
      question:
        'How does Shakespeare present Lear’s suffering in this extract, and how far does the storm change him? Refer closely to the extract and to the play as a whole.',
    },
    {
      title: "Lear's death",
      where: 'Act 5, Scene 3',
      pointer:
        "The last moments of the play, after Albany offers to return his power to the King: from Lear's “And my poor fool is hang’d! No, no, no life!” to Kent's “He but usurp’d his life.” This is the Folio’s version of Lear’s death, which most editions print. The 1608 Quarto’s is shorter and different, as the notes explain.",
      text: 'LEAR: / And my poor fool is hang’d! No, no, no life! / Why should a dog, a horse, a rat have life, / And thou no breath at all? Thou’lt come no more, / Never, never, never, never, never! / Pray you undo this button. Thank you, sir. / Do you see this? Look on her: look, her lips, / Look there, look there! / EDGAR: / He faints! My lord, my lord! / KENT: / Break, heart; I prythee break! / EDGAR: / Look up, my lord. / KENT: / Vex not his ghost: O, let him pass! He hates him / That would upon the rack of this rough world / Stretch him out longer. / EDGAR: / He is gone indeed. / KENT: / The wonder is, he hath endur’d so long: / He but usurp’d his life.',
      annotations: [
        {
          phrase: 'And my poor fool is hang’d!',
          note: 'The context points to Cordelia, who has just been hanged: “fool” could be a word of pity and tenderness, as when Lear tells the Fool in the storm “Poor fool and knave, I have one part in my heart”. But the phrase cannot help recalling the Fool, who vanished after Act 3, Scene 6, and the play joins the two truth-tellers in a single cry.',
        },
        {
          phrase: 'Why should a dog, a horse, a rat have life,',
          note: 'The list descends to the lowest creature, and the question has no answer. In Act 3, Scene 4 Lear asked whether a man is “no more” than an animal; here he asks why animals should live when the best of people is dead, and the play offers no reply.',
        },
        {
          phrase: 'Never, never, never, never, never!',
          note: '“Never” has two syllables with the stress on the first, so the line is five trochees, the exact reverse of the iambic rhythm of blank verse. The metre itself is turned upside down as Lear accepts that she will not return. It is not a line of iambic pentameter. The five come from the Folio; the Quarto has the word only three times.',
        },
        {
          phrase: 'Pray you undo this button. Thank you, sir.',
          note: 'After the vastness of “Never”, a small, physical request. In the storm he tore at his own clothes; now he asks someone to loosen them, and thanks him. The courtesy of the man who once cursed his daughters is part of what makes the moment so painful.',
        },
        {
          phrase: 'Look on her: look, her lips,',
          note: 'Lear dies, as the stage direction marks, looking at Cordelia. Earlier he called for a looking glass and watched a feather for her breath. Readers divide over whether he dies in a final delusion, believing she lives, or in a moment of joy; the text allows both. But these lines are in the Folio only. In the 1608 Quarto Lear gives a wordless cry instead, and his own last line is “Break, heart; I prythee break!”, which the Folio and this edition give to Kent. Many readers take the Quarto’s as a death in despair, and the Folio’s as one that at least allows hope.',
        },
        {
          phrase: 'upon the rack',
          note: 'The rack was an instrument of torture that stretched the body. Kent’s image makes life itself the torment, and death a release, echoing Lear’s own picture of himself in Act 4, Scene 7 as “bound / Upon a wheel of fire”. This edition prints “this rough world”; both early texts read “this tough world”, as the Folger and most modern editions do, so learn the line in that form.',
        },
        {
          phrase: 'He but usurp’d his life.',
          note: 'To usurp is to hold a throne without right. Kent’s bitter pun suggests Lear has held on to life past his due, as a usurper holds a crown. The king who gave away his throne ends the play described as a usurper of his own existence.',
        },
      ],
      question:
        'How far do you agree that the ending of King Lear offers its audience no consolation? Refer closely to this extract and to the play as a whole.',
    },
  ],

  languageAnalysis: [
    {
      technique: 'Repetition of “nothing”',
      example:
        'Cordelia’s “Nothing, my lord.” and Lear’s “Nothing will come of nothing: speak again.” (Act 1, Scene 1); the Fool’s “Now thou art an O without a figure” and “I am a fool, thou art nothing.” (Act 1, Scene 4); Edgar’s “Edgar I nothing am.” (Act 2, Scene 3).',
      effect:
        "The word that starts the tragedy keeps returning, and each time it lands on someone new. Lear's proverb is meant as a threat to Cordelia but comes true of him: the Fool calls him a zero, an O with no figure in front of it to give it value. Edmund even answers Gloucester's question about his forged letter with the same words, “Nothing, my lord.” (Act 1, Scene 2). Tracing the word lets a student show a whole-text pattern of loss.",
    },
    {
      technique: 'Animal imagery',
      example:
        'Lear calls Goneril a “Detested kite” and warns her that Regan will “flay thy wolvish visage” (Act 1, Scene 4); in the storm he names his elder daughters “pelican daughters” (Act 3, Scene 4); Albany calls the sisters “Tigers, not daughters” (Act 4, Scene 2, in lines found only in the Quarto).',
      effect:
        "Birds of prey, wolves and tigers turn the daughters into predators. The pelican was believed to feed its young on its own blood, so the image makes Lear the parent consumed by the children he fed. Albany's fear, in the same Quarto-only passage, that “Humanity must perforce prey on itself, / Like monsters of the deep.” widens the imagery into the play's central question: what, if anything, separates human beings from beasts.",
    },
    {
      technique: 'Sight and blindness',
      example:
        'Kent’s “See better, Lear” (Act 1, Scene 1); the blinded Gloucester’s “I stumbled when I saw.” (Act 4, Scene 1); the mad Lear’s claim that a man may see how the world goes “with no eyes”, and his “Look with thine ears.” (Act 4, Scene 6).',
      effect:
        "Seeing stands for understanding, and the play makes the metaphor literal. Lear cannot see Cordelia's love, and Gloucester cannot see Edmund's lies until he has lost his eyes. When Lear tells the blind man that he can still see how the world goes, Gloucester answers “I see it feelingly.”: knowledge now comes through suffering and touch, not sight. Lear takes the point further, that eyes are not needed at all. The paradox that the blind see is one of the play's bleakest consolations.",
    },
    {
      technique: 'Clothing and nakedness',
      example:
        'In the storm Lear calls his clothes “lendings” and cries “Come, unbutton here.” (Act 3, Scene 4); in madness he sees that “Through tatter’d clothes great vices do appear; / Robes and furr’d gowns hide all.” (Act 4, Scene 6); dying, he asks “Pray you undo this button.” (Act 5, Scene 3).',
      effect:
        "Clothes are the borrowed signs of rank, and Lear strips them off to find “the thing itself”, the bare human being beneath. In Act 4 the image becomes social criticism: rich robes hide crimes that rags cannot. Check that line in your own copy: “great” is the Folio's word, but many editions, the Folger among them, print “small”, from the Quarto's “Through tattered rags small vices do appear”, which sharpens the contrast, since even small vices show through rags. The final button brings the pattern down to a single physical detail, and the stripping that began as a symbol ends as a real body in distress.",
    },
    {
      technique: 'The storm as mirror of the mind and the kingdom',
      example:
        '“Blow, winds, and crack your cheeks! Rage! blow!” (Act 3, Scene 2); a Gentleman reports that Lear “Strives in his little world of man to outscorn / The to-and-fro-conflicting wind and rain.” (Act 3, Scene 1, in a passage found only in the Quarto).',
      effect:
        "Lear gives the weather orders in a string of imperatives, still speaking like a king, but the elements do not obey. The Gentleman's “little world of man” draws on the idea that a person is a small copy of the universe, so the chaos in Lear's mind, his family and his kingdom is echoed in the heavens. Lear even excuses the storm, “I tax not you, you elements, with unkindness.”, because it owes him nothing, unlike his daughters.",
    },
    {
      technique: 'Personified Nature',
      example:
        'Edmund: “Thou, Nature, art my goddess; to thy law / My services are bound.” (Act 1, Scene 2); Lear cursing Goneril: “Hear, nature, hear; dear goddess, hear!” (Act 1, Scene 4).',
      effect:
        "Both men pray to Nature as a goddess, but they mean opposite things. For Edmund, Nature is the raw force of appetite and ability, owing nothing to law or custom; for Lear, it is the order that binds children to fathers, which his daughters break. The critic John F. Danby built a whole reading of the play on these two natures. A strong essay notices that Lear's own curse, calling on Nature to make his daughter barren, is itself unnatural.",
    },
    {
      technique: 'Plain speech against flattery',
      example:
        'Cordelia says she lacks “that glib and oily art” of her sisters, and Kent insists “To plainness honour’s bound / When majesty falls to folly.” (Act 1, Scene 1).',
      effect:
        "The play distrusts eloquence. Its honest characters speak bluntly and are punished for it, while flatterers are rewarded. But Shakespeare complicates the contrast: in Act 2, Scene 2 Cornwall mocks Kent's bluntness as a pose, “he cannot flatter, he, / An honest mind and plain, he must speak truth!”, and Edmund wins his father's trust with a show of reluctant honesty. The closing couplet's “Speak what we feel, not what we ought to say.” reads as the lesson the whole play has paid for.",
    },
    {
      technique: "The Fool's riddles, songs and proverbs",
      example:
        '“Truth’s a dog must to kennel;” and “All thy other titles thou hast given away;” (Act 1, Scene 4, the second in a passage found only in the Quarto); “Thou shouldst not have been old till thou hadst been wise.” (Act 1, Scene 5, where the Quarto has “before” for “till”).',
      effect:
        "As a licensed fool he may say what no courtier dares, provided it sounds like a joke. His jingles and riddles repeat one truth in many forms: Lear has given away his power and made his daughters his masters. The inversion is the point, since the fool is wise and the king foolish, and once Lear begins to speak truths in madness the Fool's work is done; he says his last line in Act 3, Scene 6.",
    },
    {
      technique: 'Verse, prose and the language of madness',
      example:
        'On the heath Lear questions Poor Tom in prose, “Is man no more than this?” (Act 3, Scene 4); in Act 4, Scene 6 his speech moves between prose and verse until Edgar cries “O, matter and impertinency mix’d! / Reason in madness!”',
      effect:
        "Blank verse is the language of the court and of self-command. Lear has already bantered with the Fool in prose, but on the heath and at Dover his prose is no longer play: it marks the breakdown of his order. Yet his mad speeches contain some of the sharpest criticism of power in the play, from “Ay, every inch a king.” to the dog “obeyed in office”. Edgar's phrase, reason in madness, is a useful name for the paradox: sense survives inside nonsense, and an essay can argue that Lear is wisest when least sane.",
    },
    {
      technique: "Edgar's disguised voices",
      example:
        'As Poor Tom: “This is the foul fiend Flibbertigibbet:” (Act 3, Scene 4); as a peasant defending his father against Oswald: “Chill not let go, zir, without vurther ’casion.” (Act 4, Scene 6).',
      effect:
        "Edgar survives by becoming other people, and each disguise has its own voice. Some of Poor Tom's language, including the devil's name Flibbertigibbet, comes from Samuel Harsnett's attack on fraudulent exorcisms, published in 1603, so part of the madness Edgar performs is borrowed from a book exposing fake possession. The peasant's dialect makes him a nobody Oswald despises. When he answers the trumpet to fight Edmund he still hides his name, “Know my name is lost;”, while insisting, in the Folio, “Yet am I noble as the adversary”, and he claims it only after the fight: “My name is Edgar and thy father’s son.”",
    },
    {
      technique: 'The wheel',
      example:
        'Kent in the stocks: “Fortune, good night: smile once more, turn thy wheel!” (Act 2, Scene 2); Lear to Cordelia: “I am bound / Upon a wheel of fire,” (Act 4, Scene 7); the dying Edmund: “The wheel is come full circle; I am here.” (Act 5, Scene 3).',
      effect:
        'The medieval Wheel of Fortune carried people up to greatness and down to ruin, a reminder that worldly power does not last. Kent hopes it will turn upward; Lear turns it into a wheel of fire, an image of punishment; Edmund accepts that his rise has carried him round to his fall. The image gives the tragedy its shape in miniature.',
    },
    {
      technique: 'Repetition at the limit of language',
      example:
        '“Howl, howl, howl, howl!” as Lear enters with Cordelia’s body, and later “Never, never, never, never, never!” (Act 5, Scene 3).',
      effect:
        "These are two different moments, a cry as he enters and a line as he dies, and the number of repetitions depends on your edition. This one prints four cries of “Howl”, as the 1608 Quarto does; the Folio, followed by the Folger and many other editions, has three. It prints five of “Never”, from the Folio; the Quarto has three. So count them in your own copy before you write a number. What does not change is the effect: at the height of grief, language shrinks to one word said again and again. “Never” is stressed on its first syllable, so the Folio's line is five trochees: ten syllables like a line of blank verse, but with the rhythm reversed. The world of the play has been turned upside down, and so has its metre.",
    },
    {
      technique: 'Rhyming couplets',
      example:
        'Edmund: “Let me, if not by birth, have lands by wit; / All with me’s meet that I can fashion fit.” (Act 1, Scene 2); the closing lines: “The weight of this sad time we must obey; / Speak what we feel, not what we ought to say.” (Act 5, Scene 3).',
      effect:
        "Couplets close scenes on a maxim, giving a character's resolution the force of a proverb. Edmund's is a motto for self-made success at any cost. The final couplet asks for honest feeling in the most formal form the play has, which makes it sound both earned and strained. In the Folio Edgar speaks it; in the 1608 Quarto the closing lines are Albany's.",
    },
  ],

  structureForm: [
    {
      heading: 'Two plots, one pattern',
      body: "Shakespeare runs two stories side by side, a plot for Lear taken from the legendary history of Britain and a plot for Gloucester adapted from a tale in Sidney's Arcadia. Both old fathers misjudge their children, reject the loyal one and trust the false; both are driven out of doors, Regan telling Gloucester to “Shut up your doors” on the King; both suffer, one in mind and one in body. The doubling stops the tragedy being read as one foolish king's bad luck: it becomes a pattern in the world. Edgar says so in a speech found only in the Quarto, “He childed as I fathered!” The two stories cross on the heath in Act 3 and come closest in Act 4, Scene 6, where the mad King and the blind Earl talk together, and Edgar, watching, says “I would not take this from report, / It is, and my heart breaks at it.” In Act 5 Edmund binds them together, as the lover of both sisters and the commander who orders Cordelia's death.",
    },
    {
      heading: 'The stripping of Lear',
      body: 'Acts 1 and 2 work like a countdown. Lear begins with a hundred knights; Goneril halves them, and he cries “What, fifty of my followers at a clap?”; Regan will allow only twenty-five; Goneril asks “What need you five-and-twenty? Ten? Or five?”; Regan finishes with “What need one?” The bargaining is the love test in reverse. In Act 1 love was measured in land; now it is measured in followers, and Lear, still counting, tells Goneril “Thy fifty yet doth double five-and-twenty, / And thou art twice her love.” When there is nothing left to take, the storm begins, and he goes out into it.',
    },
    {
      heading: 'The storm at the centre',
      body: "Act 3 alternates the heath with rooms in Gloucester's castle. Outside, Lear goes mad in the rain and learns pity; inside, Edmund calmly betrays his father. The placing of Scenes 6 and 7 is especially sharp. In the farmhouse, in the Quarto's version of the scene, the mad King puts his daughters on trial in an imaginary court; in the very next scene Cornwall admits, before Gloucester is brought in, that he may not put him to death “Without the form of justice”, then questions him and punishes him anyway. The play sets a mad court against a cruel one and invites the audience to decide which is more insane. The Fool speaks his last line in Scene 6 and is never seen again.",
    },
    {
      heading: 'False dawns',
      body: "The last two acts keep raising hope and taking it away. Lear and Cordelia are reconciled in Act 4, Scene 7, and then the battle that should rescue them is lost in a stage direction and a single line: “King Lear hath lost, he and his daughter ta’en:”. In Act 5, Scene 3 Edmund, dying, tries to undo his order; Albany prays “The gods defend her!”, and Lear enters with Cordelia dead in his arms. Kent's “Is this the promis’d end?” and Edgar's “Or image of that horror?” compare the moment to the end of the world. Edgar had already stated the principle in Act 4, Scene 1: “The worst is not / So long as we can say ‘This is the worst.’” The structure proves him right.",
    },
    {
      heading: 'An ending that breaks the story',
      body: "In the older versions of the story Cordelia's side wins the battle, and Lear is restored to his throne. The anonymous play King Leir, printed in 1605, ends there, with the old king alive and crowned. In the legendary history Shakespeare read in Holinshed's Chronicles, Leir reigns again until his death, and Cordelia dies only years later, by her own hand, after her nephews have overthrown her. Shakespeare brings her death forward to just after she and her father are reunited, makes it a murder, and lets Lear die of grief over her. The choice was so hard for later audiences to accept that in 1681 Nahum Tate rewrote the play with a happy ending, in which Lear regains his throne, there is no Fool and Cordelia marries Edgar. Tate's version kept Shakespeare's off the professional stage until 1838, apart from a brief attempt by Edmund Kean to restore the tragic ending in 1823. Samuel Johnson wrote that he had been so shocked by Cordelia's death that he could hardly bear to read the last scenes again. An exam answer on the ending should take a view on why Shakespeare broke the story, not only describe that he did.",
    },
    {
      heading: 'Two texts of King Lear',
      body: "The play survives in two versions. The 1608 Quarto calls it a True Chronicle History; the 1623 Folio calls it The Tragedy of King Lear. The Quarto has close to three hundred lines the Folio lacks, including the whole of Act 4, Scene 3 and the mock trial in Act 3, Scene 6; the Folio has about a hundred of its own, including the Fool's prophecy of Merlin at the end of Act 3, Scene 2 and his last line, “And I’ll go to bed at noon.” The Quarto gives the closing lines to Albany, the Folio to Edgar, which changes who seems to inherit the kingdom. The two texts even differ in lines students learn by heart: where the Folio's Lear warns that nothing “will” come of nothing, the Quarto's says it “can”; the Fool's “till thou hadst been wise” is “before thou hadst been wise” in the Quarto; and Lear dies differently in each, as the notes on the passage of his death explain. Since the early eighteenth century editors have usually combined the two, and the edition quoted here does so. But the two often offer alternative readings that cannot both stand, and editors do not always choose the same one, so if you quote a line, check it is in your own edition.",
    },
    {
      heading: 'Verse, prose and song',
      body: "The court speaks blank verse, unrhymed lines usually of ten syllables and five stresses. The Fool speaks prose broken by rhymes and songs; Poor Tom speaks a torrent of prose made of prayers, curses and devils' names; Lear's madness moves in and out of prose. Edmund's first soliloquy is in verse and his second, mocking astrology, in prose, and his manipulation of Gloucester in Act 1, Scene 2 is in plain prose, the voice of a reasonable son. Kent even parodies courtly verse to Cornwall, then drops it, saying he meant “To go out of my dialect”. Noticing which form a character chooses, and when it changes, is one of the quickest ways to write about dramatic method.",
    },
    {
      heading: 'From palace to heath to Dover',
      body: "The settings move steadily outward, from a room of state in Lear's palace to the houses of his daughters and of Gloucester, then to the open heath and a hovel, then to the country near Dover and the military camps. As Lear loses his titles he loses his roofs, and doors keep closing on him. The Dover cliff scene in Act 4, Scene 6 shows the play's awareness of its own stage: Edgar describes a dizzying drop, “How fearful / And dizzy ’tis to cast one’s eyes so low!”, on a bare stage where there is no cliff at all, and the audience, like the blind Gloucester, has to take it on trust. Lear gives the idea its most famous form in the same scene: we are born crying because we have come “To this great stage of fools.”",
    },
  ],

  vocabulary: [
    {
      term: 'Nuncle',
      definition:
        'The Fool’s name for Lear, formed from mine uncle. The affectionate family word, used by a servant to a king, shows how the Fool’s licence works: “Can you make no use of nothing, nuncle?” (Act 1, Scene 4).',
    },
    {
      term: 'Coxcomb',
      definition:
        'The fool’s cap. In Act 1, Scene 4 the Fool offers his to the disguised Kent, “Let me hire him too; here’s my coxcomb.”, joking that anyone who follows Lear now must be a fool.',
    },
    {
      term: 'Dower',
      definition:
        'The property a bride brings to her marriage, a dowry. Lear disinherits Cordelia with “thy truth then be thy dower”, and France takes her anyway, saying “She is herself a dowry.” (Act 1, Scene 1).',
    },
    {
      term: 'Moiety',
      definition:
        'A share or portion. In the play’s opening lines Gloucester remarks that the shares are so even that no one could choose between “either’s moiety”, before Lear’s love test upsets the plan.',
    },
    {
      term: 'Bond',
      definition:
        'A binding tie or duty. Cordelia loves Lear “According to my bond; no more nor less.”, meaning the natural obligation of a child to a parent.',
    },
    {
      term: 'Legitimate, base and bastard',
      definition:
        'A legitimate child is born to married parents; base and bastard were terms of contempt for a child born outside marriage. Edmund worries at the words in his first soliloquy: “Why bastard? Wherefore base?” (Act 1, Scene 2).',
    },
    {
      term: 'Primogeniture',
      definition:
        'The right, by law or custom, of the firstborn legitimate child to inherit most or all of a parent’s estate. It is why Edgar, the elder and legitimate son, is the heir, and Edmund, a year or so younger and illegitimate, has nothing: “Legitimate Edgar, I must have your land:”.',
    },
    {
      term: 'Train',
      definition:
        'The followers who attend a great person, here Lear’s hundred knights. Goneril asks him “A little to disquantity your train;” (Act 1, Scene 4), and the sisters reduce it until nothing is left.',
    },
    {
      term: 'Unaccommodated',
      definition:
        'Without the things, such as clothes and shelter, that civilisation provides. Lear looks at Poor Tom and sees “unaccommodated man”, the human being with nothing added (Act 3, Scene 4).',
    },
    {
      term: 'Bedlam',
      definition:
        'Bethlem Royal Hospital in London. Tom o’Bedlam beggars were vagrants who had, or pretended to have, mental illness, and Edgar disguises himself as one. Edmund plans a sigh “like Tom o’Bedlam” in Act 1, Scene 2, before his brother adopts the part.',
    },
    {
      term: 'Foul fiend',
      definition:
        'The devil who, Poor Tom claims, torments him: “Away! the foul fiend follows me!” (Act 3, Scene 4). The name of one of his devils, Flibbertigibbet, and some of his mad language come from Samuel Harsnett’s Declaration of Egregious Popish Impostures (1603).',
    },
    {
      term: 'Hysterica passio',
      definition:
        'Lear’s Latin name for the choking grief he calls “this mother” in Act 2, Scene 4. The word hysteria comes from the Greek for womb, and Lear pictures the grief as something climbing up from below towards his heart, which is why he orders it “down”.',
    },
    {
      term: 'Stocks',
      definition:
        'A wooden frame that locked an offender’s legs as a public punishment. Cornwall and Regan put Kent, the King’s messenger, in them in Act 2, Scene 2. In the Quarto Gloucester protests that the stocks are for the “basest and contemned’st wretches”; the Folio keeps only his warning that the King will take it ill.',
    },
    {
      term: 'Pelican',
      definition:
        'In medieval belief the pelican wounded its own breast to feed its young with its blood. Lear’s “pelican daughters” (Act 3, Scene 4) are children who feed on the parent who gave them life.',
    },
    {
      term: 'Samphire',
      definition:
        'Rock samphire, a plant gathered from sea cliffs and eaten or pickled, dangerous work. Edgar’s imaginary view down Dover cliff includes one who gathers it: “Hangs one that gathers samphire—dreadful trade!” (Act 4, Scene 6).',
    },
    {
      term: 'Superflux',
      definition:
        'A surplus, more than is needed. Lear’s prayer in Act 3, Scene 4 asks the rich to “shake the superflux” to the poor.',
    },
    {
      term: 'Wheel of Fortune',
      definition:
        'The medieval image of Fortune turning a wheel that lifts some people to greatness and throws others down. Kent, Lear and Edmund all use it, and Edmund’s “The wheel is come full circle” marks his fall.',
    },
    {
      term: 'Blank verse',
      definition:
        'Unrhymed lines with a regular metre, usually iambic pentameter: ten syllables and five stresses, with the stress falling on every second syllable. It is the main form of the play, and Lear’s turns into prose on the heath and at Dover are one sign of his madness.',
    },
    {
      term: 'Trochee',
      definition:
        'A metrical foot of a stressed syllable followed by an unstressed one, the reverse of an iamb. Lear’s “Never, never, never, never, never!” is five trochees in the Folio’s version of the line; the Quarto has three.',
    },
    {
      term: 'Hamartia',
      definition:
        'Aristotle’s term for the error, or on another reading the flaw, that leads a tragic hero to his downfall. For Lear the candidates include pride, rashness and his confusion of flattery with love.',
    },
    {
      term: 'Peripeteia',
      definition:
        'A reversal of circumstances, the point at which the action turns to its opposite. Lear falls from a king giving away kingdoms to a man shut out in a storm within two acts.',
    },
    {
      term: 'Anagnorisis',
      definition:
        'The moment of recognition, when a character passes from ignorance to knowledge. One candidate for Lear’s is his waking to know Cordelia in Act 4, Scene 7; Gloucester’s when Regan tells him Edmund betrayed him, with “Then Edgar was abus’d.” (Act 3, Scene 7).',
    },
  ],

  examPractice: {
    questions: [
      {
        question:
          'Read Act 1, Scene 1 from Goneril’s “Sir, I love you more than word can wield the matter;” to Cordelia’s “According to my bond; no more nor less.” Explore the significance of this extract in relation to the tragedy as a whole.',
        skill:
          'A-level extract-based essay: close analysis of the passage, linked to the whole play',
        guidance: [
          'Open with the dramatic situation: a public ceremony, a map on stage and a king who has already decided the outcome, since the best third is waiting for Cordelia.',
          'Analyse the sisters’ language as performance: Goneril’s claim that love is beyond words set against her fluent list of comparisons, and Regan’s competitive “Only she comes too short”.',
          'Analyse Cordelia’s asides, which let the audience alone hear her reasons, then her answer. Show how “Nothing” works as a word and as a refusal to perform.',
          'Explain the language of trade: “draw”, “opulent”, the kingdom as “this ample third”. Love is being bought.',
          'Link forward: the countdown of knights in Act 2, Scene 4 reverses the love test; Lear’s appeal to the “bond of childhood” echoes Cordelia’s “bond”; the word “nothing” returns through the Fool and Edgar.',
          'Bring in context where it sharpens the argument: James I, King of England from 1603, had proclaimed himself King of Great Britain in 1604, so a play opening on a king dividing Britain carried a political charge.',
          'Weigh interpretations: is Cordelia’s answer integrity, or a pride that matches her father’s? Lear calls it “pride, which she calls plainness”. Decide and say why.',
          'Conclude on significance: the scene sets up every pattern the tragedy follows, of speech and silence, sight and blindness, and the value of what cannot be measured.',
        ],
      },
      {
        question: 'How far do you agree that Lear is “More sinn’d against than sinning”?',
        skill: 'A-level essay: whole-text argument about the tragic hero',
        guidance: [
          'Place the line: Act 3, Scene 2, at the height of the storm, in a speech calling on the gods to expose hidden criminals. Lear says it of himself.',
          'Make the case for the claim: the daughters’ cruelty in Act 2, Scene 4, the doors shut against him in a storm, and the scale of his suffering against the scale of his error.',
          'Make the case against: the love test, the banishment of Kent and Cordelia, his curse on Goneril in Act 1, Scene 4, and his readiness to be flattered.',
          'Track his self-knowledge as a process: “I did her wrong” (Act 1, Scene 5), “O, I have ta’en / Too little care of this!” (Act 3, Scene 4), “I am a very foolish fond old man,” (Act 4, Scene 7).',
          'Use the subplot to test your view: Gloucester is sinned against by Edmund, but Edgar says his father’s adultery “Cost him his eyes.” Does the play see suffering as deserved?',
          'Use critics as positions: A. C. Bradley’s reading of Lear as redeemed through suffering against readings, such as Jan Kott’s, that link the play to the absurd world of Beckett’s Endgame.',
          'Conclude with a judgement: the strongest answers argue that the claim is true and incomplete, and that the tragedy lies in Lear’s discovery of both halves of it.',
        ],
      },
      {
        question:
          'Some critics argue that King Lear shows a universe without justice, in which the gods are either cruel or absent. How far do you agree?',
        skill: 'A-level essay: argument, context and critical views',
        guidance: [
          'Define the question: justice from the gods, and justice among human beings. The play keeps the two apart.',
          'The case for cruelty: Gloucester’s “As flies to wanton boys are we to the gods, / They kill us for their sport.” (Act 4, Scene 1), and Albany’s prayer “The gods defend her!” answered by Lear’s entrance with Cordelia’s body.',
          'The case for a kind of justice: Albany’s “This shows you are above,” when he hears of Cornwall’s death (Act 4, Scene 2), and Edgar’s “The gods are just, and of our pleasant vices / Make instruments to plague us:” (Act 5, Scene 3, where the Quarto has “scourge” for “plague”). Ask who is speaking and whether the play endorses them.',
          'Human justice: the mock trial in the farmhouse (a Quarto passage), Cornwall’s trial of Gloucester without “the form of justice”, and Lear’s vision in Act 4, Scene 6 of the justice who is no better than the thief.',
          'Context: the play is set in pagan, pre-Christian Britain, so its characters swear by Apollo and Jupiter, yet it was written for a Christian audience. Consider what that distance allows Shakespeare to ask.',
          'Test the ending: the villains die, but so do Cordelia, Lear and Gloucester. Is that justice, or its absence?',
          'Conclude with your own position, and say which moment in the play decides it for you.',
        ],
      },
      {
        question:
          'Explore the ways Shakespeare uses the Gloucester subplot to shape the audience’s response to Lear’s story.',
        skill: 'A-level essay: structure and dramatic methods',
        guidance: [
          'Set out the parallels: two fathers, a loyal child rejected and a false one trusted, both deceived by persuasive words.',
          'Contrast the methods of deception: Goneril and Regan flatter in public, while Edmund pretends reluctance in private with the letter he says is “Nothing, my lord.”',
          'Show how the subplot makes metaphors literal: Lear is blind to the truth, Gloucester is blinded; Lear goes mad, Edgar pretends to be mad.',
          'Analyse the meeting in Act 4, Scene 6 as the point where the two stories come closest: the mad King and the blind Earl, watched by a son who cannot yet reveal himself.',
          'Consider difference as well as likeness: Gloucester is offered a staged rescue at Dover and dies of joy and grief on learning who Edgar is; Lear is given a real reunion and then loses it.',
          'Conclude: the subplot universalises the tragedy, making it a pattern in the world rather than the misfortune of one king.',
        ],
      },
      {
        question: 'How far do you agree that Goneril and Regan are presented simply as monsters?',
        skill: 'A-level essay: character, gender and context',
        guidance: [
          'Start from the play’s own verdicts: Albany’s “Proper deformity seems not in the fiend / So horrid as in woman.” (Act 4, Scene 2), and a servant’s fear after the blinding that “Women will all turn monsters.” (Act 3, Scene 7, in an exchange found only in the Quarto).',
          'Give them their case in Act 1: Goneril complains “His knights grow riotous” (Act 1, Scene 3), and Regan observes that their father “hath ever but slenderly” known himself. An audience may partly agree at first.',
          'Trace the escalation beyond reason: from cutting the train to shutting out an old man in a storm, to Goneril’s “Pluck out his eyes.” and Regan’s part in the blinding.',
          'Consider their position in a patriarchal world: their power comes only through land and husbands, and Goneril’s defiant “the laws are mine, not thine:” (Act 5, Scene 3) shows what happens when that order breaks down.',
          'Use a critical lens: Coppélia Kahn’s psychoanalytic reading of the play’s absent mother, in which the ageing Lear looks to his daughters for the love a mother gives, offers a way to read them as more than villains.',
          'Compare them with Cordelia and with each other: their alliance collapses over Edmund, which suggests the play is as interested in how selfishness destroys itself as in their wickedness.',
          'Conclude: they are frightening, but the play gives them reasons, and a strong answer judges how far those reasons go.',
        ],
      },
    ],
    tips: [
      'Quote from your own edition. King Lear exists in two early texts, and editions differ in words as well as spelling: the edition quoted here gives Gloucester “to the gods” where the Folger edition elides the word, for example. A short quotation that is exactly right is worth more than a famous line half-remembered.',
      'Count in your own copy at the end of the play, not from memory or from this page. Lear’s cry of “Howl” as he enters and his “Never” as he dies are two separate moments, and the number of each varies between editions: this one has four and five, the Folger three and five, the 1608 Quarto four and three. In the Folio’s five-fold line, “Never” is five trochees, stressed on the first syllable of each pair, not iambic pentameter.',
      'Use the subplot in every essay. Almost any question about Lear can be sharpened by setting Gloucester beside him, because Shakespeare built the play so that each story comments on the other.',
      'Build whole-text arguments from patterns of language: nothing, sight and blindness, clothing, animals, nature. Tracing one word across the play shows range and control more quickly than retelling the plot.',
      'Do not make Cordelia a simple saint or Lear a simple victim. The strongest answers weigh her plainness against her father’s charge of pride, and his suffering against his faults.',
      'Give Edgar, Albany and Kent their due. The play ends with the question of who will rule, and Kent’s refusal, “My master calls me, I must not say no.”, is part of its bleakness.',
      'Tie context to the text. James I’s union of the crowns, the custom of primogeniture and the pre-Christian setting are useful only when they explain a specific moment, such as the division of the kingdom in the first lines.',
      'Treat critics as positions to test, not authorities to quote. Say whether Bradley’s redemptive reading or Kott’s absurd one fits the final scene better, and prove it from the text.',
    ],
  },

  modelAnswer: {
    question: 'How far do you agree that Lear is “More sinn’d against than sinning”?',
    paragraph:
      "Lear's claim to be “More sinn’d against than sinning” (Act 3, Scene 2) comes at the height of the storm, and Shakespeare frames it so that an audience is asked to test it rather than accept it. The speech in which it appears calls on the gods to expose hidden crimes: Lear summons the “perjur’d” and the “simular of virtue” to burst from hiding and “cry / These dreadful summoners grace”, that is, to beg mercy of the storm, and only then turns to himself. Yet the audience has watched him reward exactly such false seeming in Act 1, Scene 1, where he prized the “glib and oily art”, as Cordelia calls it, of her sisters and banished the two people who spoke plainly. The claim is true in a narrow sense, since no one in the play suffers more than he does, but the balanced antithesis weighs his wrongs against his sins and finds in his own favour, which sounds more like a verdict he has passed on himself than like understanding. The more convincing reading is that the storm scenes show a process rather than a verdict. Within the same scene Lear admits “My wits begin to turn” and asks the Fool “Art cold?” before he confesses “I am cold myself”, an early sign of a king feeling another's need as his own, and in Act 3, Scene 4 he goes further: “O, I have ta’en / Too little care of this!” Lear is sinned against, then, but the tragedy lies in his slow discovery that he has sinned too, and only in Act 4, Scene 7, with “I am a very foolish fond old man,” does he stop weighing and simply confess.",
    commentary: [
      'It opens by placing the quotation in its scene and by stating a method, testing the claim rather than accepting it, so the paragraph argues from its first sentence.',
      'Every quotation is short, exact and built into the sentence, and each is followed by what it shows, including a gloss of the difficult “cry / These dreadful summoners grace”.',
      'It uses the structure of the play, linking Act 3 back to the love test in Act 1 and forward to Act 4, Scene 7, which turns one line into a whole-text argument.',
      'It comments on form as well as meaning: the balanced antithesis of the line is read as a sign of Lear’s self-justification.',
      'It takes a position, that the storm is a process and not a verdict, and presents it as the more convincing of two readings, which is what separates a strong answer from a competent one.',
    ],
  },

  timeline: [
    {
      where: 'Act 1, Scene 1',
      title: 'The love test',
      summary:
        'Lear announces that he has divided his kingdom into three and will give the largest share to the daughter who loves him most. Goneril and Regan answer with extravagant speeches and are rewarded. Cordelia will say only that she loves him as a daughter should, and he disowns her.',
      setting: 'A room of state in King Lear’s palace, with a map of the kingdom',
      who: ['King Lear', 'Goneril', 'Regan', 'Cordelia', 'Kent', 'Albany', 'Cornwall'],
      quote: 'Nothing will come of nothing: speak again.',
      themes: ['Power and authority', 'Family and ingratitude'],
      tension: 4,
      significance:
        'The opening decision sets every part of the tragedy in motion, and the word nothing becomes its refrain.',
    },
    {
      where: 'Act 1, Scene 1',
      title: 'Kent banished, Cordelia taken by France',
      summary:
        'Kent protests and is banished on pain of death. Burgundy will not marry Cordelia without a dowry, but the King of France takes her as she is. Left alone, Goneril and Regan agree that their father is rash and that they must act together against him.',
      setting: 'The same room of state',
      who: ['Kent', 'King Lear', 'Cordelia', 'France', 'Burgundy', 'Goneril', 'Regan'],
      quote: 'See better, Lear; and let me still remain / The true blank of thine eye.',
      themes: [
        'Blindness (literal and figurative)',
        'Power and authority',
        'Family and ingratitude',
      ],
      tension: 4,
      significance:
        'Lear drives away the two people who love him most in one scene, and the sisters show their hand as soon as he leaves.',
    },
    {
      where: 'Act 1, Scene 2',
      title: "Edmund's letter",
      summary:
        "Edmund, Gloucester's illegitimate son, resolves to take the inheritance of his legitimate brother Edgar. He lets Gloucester find a letter, supposedly from Edgar, suggesting that the brothers could share their father's revenue if the old man were out of the way, then warns Edgar that their father is angry with him.",
      setting: "A hall in the Earl of Gloucester's castle",
      who: ['Edmund', 'Gloucester', 'Edgar'],
      quote: 'Now, gods, stand up for bastards!',
      themes: ['Nature and order', 'Family and ingratitude', 'Blindness (literal and figurative)'],
      tension: 3,
      significance:
        'The subplot begins as a mirror of the main plot: another father is about to trust the wrong child.',
    },
    {
      where: 'Act 1, Scene 4',
      title: "Goneril's house",
      summary:
        "Kent returns in disguise and is taken into Lear's service, and the Fool mocks Lear for giving his kingdom away. Goneril demands that her father reduce his hundred knights. Lear curses her, discovers that fifty of his followers have been dismissed at a stroke, and leaves for Regan's house.",
      setting: "A hall in the Duke of Albany's palace",
      who: ['King Lear', 'Kent', 'The Fool', 'Goneril', 'Albany', 'Oswald'],
      quote: 'Who is it that can tell me who I am?',
      themes: ['Power and authority', 'Family and ingratitude', 'Madness and wisdom'],
      tension: 4,
      significance:
        'Without his power Lear no longer knows who he is, and the question drives the rest of his story.',
    },
    {
      where: 'Act 1, Scene 5',
      title: "The Fool's warning",
      summary:
        'Lear sends Kent ahead with letters. The Fool teases him that Regan will treat him just as Goneril did, and Lear, apparently thinking of Cordelia, admits “I did her wrong” before praying that he will not go mad.',
      setting: "The court before Albany's palace",
      who: ['King Lear', 'The Fool', 'Kent'],
      quote: 'Thou shouldst not have been old till thou hadst been wise.',
      themes: ['Madness and wisdom', 'Family and ingratitude'],
      tension: 3,
      significance:
        'The first sign of self-knowledge in Lear, and of the fear of madness that the storm will make real.',
    },
    {
      where: 'Act 2, Scene 1',
      title: 'Edgar framed',
      summary:
        'Edmund stages a sword fight with Edgar, wounds his own arm, and tells Gloucester that Edgar attacked him for refusing to help murder their father. Gloucester outlaws Edgar and promises Edmund his lands, and the newly arrived Cornwall and Regan take Edmund into their service.',
      setting: "A court within Gloucester's castle, at night",
      who: ['Edmund', 'Edgar', 'Gloucester', 'Cornwall', 'Regan'],
      quote: 'Loyal and natural boy,',
      themes: ['Nature and order', 'Blindness (literal and figurative)', 'Family and ingratitude'],
      tension: 3,
      significance:
        "Gloucester's praise is bitterly ironic: a natural son was the term for an illegitimate one, and Edmund is anything but loyal.",
    },
    {
      where: 'Act 2, Scene 2',
      title: 'Kent in the stocks',
      summary:
        "Kent beats Oswald, Goneril's steward, outside Gloucester's castle. Cornwall and Regan put the King's messenger in the stocks overnight despite Gloucester's protest. Alone, Kent reads a letter from Cordelia and falls asleep.",
      setting: "Before Gloucester's castle, from night to morning",
      who: ['Kent', 'Oswald', 'Cornwall', 'Regan', 'Gloucester', 'Edmund'],
      quote: 'Nothing almost sees miracles / But misery.',
      themes: ['Power and authority', 'Suffering and redemption'],
      tension: 3,
      significance:
        "An insult to the King's messenger is an insult to the King, and the first sign that his authority is gone.",
    },
    {
      where: 'Act 2, Scene 3',
      title: 'Edgar becomes Poor Tom',
      summary:
        'Hunted as an outlaw, with every port watched, Edgar resolves to survive by disguising himself as a Bedlam beggar, dirty, nearly naked and apparently mad.',
      setting: 'The open country',
      who: ['Edgar'],
      quote: 'Poor Turlygod! poor Tom, / That’s something yet: Edgar I nothing am.',
      themes: ['Madness and wisdom', 'Nature and order'],
      tension: 2,
      significance:
        "The legitimate heir becomes the lowest of the low, and the play's nothing now describes a son as well as a father.",
    },
    {
      where: 'Act 2, Scene 4',
      title: 'Stripped of his knights',
      summary:
        'Lear finds Kent in the stocks. Regan refuses to take his side, Goneril arrives, and together the sisters cut the followers they will allow him from fifty to twenty-five, to ten, to none. As a storm begins, Lear rushes out into it and the doors are shut behind him.',
      setting: "Before Gloucester's castle, as a storm gathers",
      who: [
        'King Lear',
        'Regan',
        'Goneril',
        'Cornwall',
        'Gloucester',
        'Kent',
        'The Fool',
        'Oswald',
      ],
      quote: 'O fool, I shall go mad!',
      themes: ['Power and authority', 'Family and ingratitude', 'Madness and wisdom'],
      tension: 5,
      significance:
        'The love test in reverse: love measured in knights, until there is nothing left to give.',
    },
    {
      where: 'Act 3, Scene 2',
      title: 'Defying the storm',
      summary:
        'On the heath Lear commands the wind, rain and thunder to destroy the world, then calls himself their slave. Kent finds him and leads him towards a hovel, and Lear, feeling his wits begin to turn, shows pity for the Fool beside him in the cold.',
      setting: 'The heath, in a storm with thunder and lightning',
      who: ['King Lear', 'The Fool', 'Kent'],
      quote: 'Here I stand your slave, / A poor, infirm, weak, and despis’d old man:',
      themes: ['Nature and order', 'Madness and wisdom', 'Suffering and redemption'],
      tension: 5,
      significance: 'The storm in the heavens matches the storm in the kingdom and in Lear’s mind.',
    },
    {
      where: 'Act 3, Scene 4',
      title: 'Poor Tom in the hovel',
      summary:
        'Before he will shelter, Lear prays for the homeless poor. Edgar, as Poor Tom, bursts out raving about devils, and Lear, seeing a man with nothing, tears at his own clothes. Gloucester arrives with a torch to lead them to shelter, not knowing his son.',
      setting: 'A part of the heath with a hovel, in the storm',
      who: ['King Lear', 'Kent', 'The Fool', 'Edgar', 'Gloucester'],
      quote: 'Poor naked wretches, wheresoe’er you are,',
      themes: ['Suffering and redemption', 'Madness and wisdom', 'Nature and order'],
      tension: 4,
      significance: 'The king learns pity by sharing the condition of the poorest of his subjects.',
    },
    {
      where: 'Act 3, Scene 6',
      title: 'The farmhouse',
      summary:
        "In a farmhouse Lear, in the Quarto's version of the scene, holds an imaginary trial of Goneril and Regan. Gloucester brings news of a plot against the King's life, and Kent, Gloucester and the Fool carry the sleeping Lear away towards Dover. The Fool leaves with them and never appears again; his last line is found only in the Folio.",
      setting: 'A chamber in a farmhouse near the castle',
      who: ['King Lear', 'Edgar', 'The Fool', 'Kent', 'Gloucester'],
      quote: 'And I’ll go to bed at noon.',
      themes: ['Madness and wisdom', 'Family and ingratitude', 'Suffering and redemption'],
      tension: 4,
      significance:
        'A mad court of justice, placed just before the cruel one in the next scene, and the end of the Fool.',
    },
    {
      where: 'Act 3, Scene 7',
      title: 'The blinding of Gloucester',
      summary:
        'Betrayed by Edmund, Gloucester is seized for helping the King. Cornwall and Regan bind him and demand why he sent Lear to Dover, and Cornwall puts out one of his eyes. A servant who tries to stop him wounds Cornwall and is killed by Regan. Cornwall puts out the other eye, and Regan tells Gloucester that Edmund informed against him.',
      setting: "A room in Gloucester's own castle",
      who: ['Cornwall', 'Regan', 'Gloucester'],
      quote: 'All dark and comfortless. Where’s my son Edmund?',
      themes: [
        'Blindness (literal and figurative)',
        'Power and authority',
        'Suffering and redemption',
      ],
      tension: 5,
      significance:
        'The metaphor of blindness becomes literal, and Gloucester learns the truth only when he can no longer see.',
    },
    {
      where: 'Act 4, Scene 1',
      title: 'The blind led by the mad',
      summary:
        'Edgar, believing the worst is over, meets his blinded father led by an old tenant. Gloucester asks the man he takes for a mad beggar to lead him to the cliffs of Dover, meaning to end his life there.',
      setting: 'The heath',
      who: ['Edgar', 'Gloucester'],
      quote: 'I stumbled when I saw.',
      themes: [
        'Blindness (literal and figurative)',
        'Suffering and redemption',
        'Nature and order',
      ],
      tension: 3,
      significance:
        'Father and son are reunited without the father knowing it, and the son must keep up his disguise.',
    },
    {
      where: 'Act 4, Scene 2',
      title: 'Albany turns',
      summary:
        'Goneril sends Edmund back with a love token, contemptuous of “our mild husband”. Albany condemns her treatment of her father, and news arrives that Cornwall has died of his wound and that Gloucester has lost both eyes. Albany vows to revenge Gloucester’s eyes.',
      setting: "Before the Duke of Albany's palace",
      who: ['Goneril', 'Edmund', 'Oswald', 'Albany'],
      quote: 'O Goneril! / You are not worth the dust which the rude wind / Blows in your face!',
      themes: ['Power and authority', 'Family and ingratitude', 'Nature and order'],
      tension: 3,
      significance:
        'The mildest character finds his voice, and the alliance against Lear begins to split.',
    },
    {
      where: 'Act 4, Scene 6',
      title: 'Dover cliff',
      summary:
        'Edgar tells his blind father they stand at the edge of the cliff, describing a drop that is not there. Gloucester renounces the world, leaps and falls flat on level ground; Edgar, now playing a stranger below, persuades him that he has survived a great fall by a miracle.',
      setting: 'The country near Dover',
      who: ['Edgar', 'Gloucester'],
      quote: 'How fearful / And dizzy ’tis to cast one’s eyes so low!',
      themes: [
        'Suffering and redemption',
        'Blindness (literal and figurative)',
        'Nature and order',
      ],
      tension: 4,
      significance:
        'A staged fall that cures despair, and a scene that asks the audience to see a cliff that is not there.',
    },
    {
      where: 'Act 4, Scene 6',
      title: 'Reason in madness',
      summary:
        "Lear, decked with wild flowers, meets the blind Gloucester and speaks in fragments about flattery, lust and corrupt justice. When Cordelia's attendants come to take him to her, he runs from them. Oswald tries to kill Gloucester and is killed by Edgar, who finds Goneril's letter urging Edmund to murder Albany.",
      setting: 'The country near Dover',
      who: ['King Lear', 'Gloucester', 'Edgar', 'Oswald'],
      quote: 'Ay, every inch a king.',
      themes: ['Madness and wisdom', 'Blindness (literal and figurative)', 'Power and authority'],
      tension: 4,
      significance:
        'The two fathers meet as fellow sufferers, and the scene invites the reading that the mad King and the blind Earl now see the world more truly than they did when sane and sighted.',
    },
    {
      where: 'Act 4, Scene 7',
      title: 'Lear wakes',
      summary:
        'In the French camp Lear, dressed in fresh clothes, wakes (to music, in the Quarto). At first he thinks he is dead and Cordelia a spirit; then he recognises her and tries to kneel to her. When he tells her she has cause not to love him, she answers “No cause, no cause.”',
      setting: 'A tent in the French camp',
      who: ['Cordelia', 'King Lear', 'Kent'],
      quote: 'I am a very foolish fond old man,',
      themes: ['Family and ingratitude', 'Suffering and redemption'],
      tension: 2,
      significance: 'The recognition the play has worked towards, spoken in its plainest language.',
    },
    {
      where: 'Act 5, Scene 2',
      title: 'The battle lost',
      summary:
        "Cordelia's army marches past. Edgar leaves Gloucester under a tree and returns with news that the battle is lost and Lear and Cordelia captured. When Gloucester wishes to stay and die, Edgar urges him on.",
      setting: 'A field between the two camps',
      who: ['Edgar', 'Gloucester', 'King Lear', 'Cordelia'],
      quote: 'Men must endure / Their going hence, even as their coming hither; / Ripeness is all.',
      themes: ['Suffering and redemption', 'Nature and order'],
      tension: 3,
      significance:
        'The rescue the audience has been waiting for fails in a few lines, and endurance is all that is left.',
    },
    {
      where: 'Act 5, Scene 3',
      title: 'Birds in the cage',
      summary:
        'Taken prisoner, Lear tells Cordelia that in prison they will live together, singing and telling old tales. Edmund sends a captain after them with a secret written order.',
      setting: 'The British camp near Dover',
      who: ['King Lear', 'Cordelia', 'Edmund'],
      quote: 'We two alone will sing like birds i’ the cage:',
      themes: ['Family and ingratitude', 'Suffering and redemption', 'Power and authority'],
      tension: 3,
      significance:
        'Lear no longer wants power, only Cordelia, and the audience knows the order that will take her.',
    },
    {
      where: 'Act 5, Scene 3',
      title: 'The wheel comes full circle',
      summary:
        "Albany arrests Edmund for treason. Regan, taken ill, is led away. An unknown armed challenger answers the herald's trumpet, wounds Edmund mortally and reveals himself as Edgar. News comes that Goneril has poisoned Regan and killed herself.",
      setting: 'The British camp near Dover',
      who: ['Albany', 'Edmund', 'Goneril', 'Regan', 'Edgar'],
      quote: 'The wheel is come full circle; I am here.',
      themes: ['Nature and order', 'Family and ingratitude', 'Power and authority'],
      tension: 4,
      significance:
        'The villains fall, as a tragedy leads the audience to expect, but the order Edmund gave is still in motion.',
    },
    {
      where: 'Act 5, Scene 3',
      title: 'Too late',
      summary:
        'Kent arrives to bid his master goodbye. The dying Edmund, wishing to do some good, reveals his order for the deaths of Lear and Cordelia, and a messenger is sent to stop it. Lear enters carrying Cordelia’s body; he has killed the man who hanged her.',
      setting: 'The British camp near Dover',
      who: ['Edmund', 'Albany', 'Edgar', 'Kent', 'King Lear', 'Cordelia'],
      quote: 'Is this the promis’d end?',
      themes: ['Suffering and redemption', 'Family and ingratitude'],
      tension: 5,
      significance:
        'The false dawn of the whole last act ends here, in an image Kent and Edgar compare to the end of the world.',
    },
    {
      where: 'Act 5, Scene 3',
      title: "Lear's death",
      summary:
        'Lear hardly recognises Kent. Albany offers to return his power to the King, but Lear, still looking for signs of life in Cordelia, dies. Kent says he must soon follow his master, and Edgar speaks the closing lines, which the 1608 Quarto gives to Albany.',
      setting: 'The British camp near Dover',
      who: ['King Lear', 'Cordelia', 'Kent', 'Edgar', 'Albany'],
      quote: 'Never, never, never, never, never!',
      themes: ['Suffering and redemption', 'Power and authority', 'Nature and order'],
      tension: 5,
      significance:
        'The play refuses the happy ending of its sources and leaves the survivors to speak what they feel.',
    },
  ],

  relationships: [
    {
      from: 'King Lear',
      to: 'Cordelia',
      kind: 'father and favourite daughter',
      note: 'Lear says “I lov’d her most” in the same breath as he disowns her. She returns with a French army to rescue him, they are reconciled in Act 4, Scene 7, and he dies over her body.',
    },
    {
      from: 'King Lear',
      to: 'Goneril',
      kind: 'father and eldest daughter',
      note: 'Rewarded for her flattery, she is the first to cut his knights, and he answers with a curse on her power to bear children. She ends the play by her own hand.',
    },
    {
      from: 'King Lear',
      to: 'Regan',
      kind: 'father and second daughter',
      note: 'Lear believes her gentler than her sister, “Thy tender-hefted nature shall not give / Thee o’er to harshness.”, and she proves harsher, finishing the countdown of his knights with “What need one?”',
    },
    {
      from: 'King Lear',
      to: 'Kent',
      kind: 'king and loyal servant',
      note: 'Banished for speaking plainly, Kent returns in disguise and serves the man who condemned him. Lear barely recognises him at the end, and Kent says he will soon follow his master.',
    },
    {
      from: 'King Lear',
      to: 'The Fool',
      kind: 'master and licensed fool',
      note: 'The Fool calls Lear nuncle and tells him the truths no courtier dares. He follows him into the storm, then vanishes after Act 3, Scene 6, and Lear’s dying cry over his “poor fool” seems to recall him.',
    },
    {
      from: 'King Lear',
      to: 'Gloucester',
      kind: 'king and old ally',
      note: 'Gloucester loses his eyes for helping the King. They meet at Dover, one mad and one blind, and Lear tells him “I know thee well enough, thy name is Gloucester.”',
    },
    {
      from: 'Gloucester',
      to: 'Edgar',
      kind: 'father and legitimate son',
      note: 'Deceived by a letter, Gloucester outlaws Edgar, who then leads his blinded father as Poor Tom. Edgar reveals himself only before the duel, and his father’s heart “Burst smilingly”.',
    },
    {
      from: 'Gloucester',
      to: 'Edmund',
      kind: 'father and illegitimate son',
      note: 'Gloucester jokes in front of Edmund about his birth, then trusts him completely. Edmund betrays him to Cornwall, and Regan tells the blinded Gloucester who informed against him.',
    },
    {
      from: 'Edmund',
      to: 'Edgar',
      kind: 'half-brothers and rivals',
      note: 'Edmund plots to take his brother’s land and title. Edgar defeats him in single combat; the dying Edmund forgives his unknown opponent if he is noble, and Edgar answers “Let’s exchange charity.”',
    },
    {
      from: 'Edmund',
      to: 'Goneril',
      kind: 'lovers and conspirators',
      note: 'Goneril sends Edmund a love token and a letter urging him to murder her husband. He pledges himself “Yours in the ranks of death.”, and she dies, as he says, for his sake.',
    },
    {
      from: 'Edmund',
      to: 'Regan',
      kind: 'suitor and widow',
      note: 'After Cornwall’s death Regan claims Edmund as her lord. He has sworn love to both sisters and waits to see which survives.',
    },
    {
      from: 'Goneril',
      to: 'Regan',
      kind: 'sisters turned rivals',
      note: 'United against their father in Acts 1 and 2, they are divided by their desire for Edmund. Goneril poisons Regan, then kills herself.',
    },
    {
      from: 'Goneril',
      to: 'Albany',
      kind: 'wife and husband',
      note: 'She scorns his “milky gentleness”; he finds his courage in Act 4, condemns her cruelty and exposes her letter to Edmund in Act 5.',
    },
    {
      from: 'Regan',
      to: 'Cornwall',
      kind: 'wife and husband',
      note: 'Partners in cruelty, they put Kent in the stocks and blind Gloucester together. A servant’s sword wounds Cornwall during the blinding, and he dies of it.',
    },
    {
      from: 'Edgar',
      to: 'King Lear',
      kind: 'Poor Tom and the mad King',
      note: 'On the heath Lear takes the disguised Edgar for a wise man, his “Noble philosopher”. The sight of Poor Tom’s nakedness shapes Lear’s thinking about what a human being is.',
    },
  ],

  compareWith: [
    {
      title: 'Othello',
      href: '/revision/texts/othello',
      reason:
        "Another tragedy studied at A-level in which a trusting man is worked on by a deceiver: Edmund's show of reluctance over the letter works on Gloucester much as Iago's hesitations work on Othello.",
    },
    {
      title: 'Hamlet',
      href: '/revision/texts/hamlet',
      reason:
        'A tragedy of fathers and children in which a son feigns madness, as Edgar does, and a ruined state is left to the survivors.',
    },
    {
      title: 'A Streetcar Named Desire',
      href: '/revision/texts/a-streetcar-named-desire',
      reason:
        'A modern tragedy in which a character stripped of home and status is driven into madness, useful for comparing how two dramatists stage a mind breaking down.',
    },
  ],

  contentGuidance: [
    'violence',
    'mortality',
    'mental_health',
    'crime_injustice',
    'intimate_relationships',
    'mythological_religious',
    'discrimination',
  ],

  // Readings from the 1608 Quarto or from both early texts that the held
  // edition, a conflated text, does not print. Each was read in the Internet
  // Shakespeare Editions modern texts (Quarto scenes 1, 5, 11, 20 and 24;
  // Folio 3.4 and 5.3) on 26 September 2026.
  quotesFromElsewhere: [
    'More richer than my tongue',
    'can come',
    'the roaring sea',
    'this tough world',
    'Through tattered rags small vices do appear',
    'before thou hadst been wise',
  ],

  sources: [
    {
      label:
        'King Lear, Project Gutenberg eBook #1532: the modern-spelling conflated edition held as a byte copy in src/data/full-texts/king-lear.ts. The whole play was read in it; every quotation and all three passages were copied from it, and each speaker and scene checked against that reading',
      url: 'https://www.gutenberg.org/ebooks/1532',
    },
    {
      label:
        "Wikipedia, King Lear: written late 1605 or early 1606; performed before James I at Whitehall on 26 December 1606; Q1 (1608) has 285 lines not in F1 and F1 about 100 not in Q1; conflation began with Pope; sources in Holinshed (1587), the anonymous King Leir (published 1605, in which Cordelia restores Lear), Sidney's Arcadia for the Gloucester plot, Spenser's Cordelia, Harsnett for Edgar's mad language; Tate's 1681 version displaced Shakespeare's from the professional stage until 1838, Kean's three performances with the tragic ending in 1823, Macready's restoration in 1838; Bradley's redemptive reading, Kott and Endgame, Danby's two natures (1949), Kahn's maternal subtext",
      url: 'https://en.wikipedia.org/wiki/King_Lear',
    },
    {
      label:
        'Folger Shakespeare Library, King Lear, An Introduction to This Text: the Quarto and Folio titles; the Folio has over 100 lines not in Q1 and lacks about 300, including the whole of 4.3; editors have conflated the two since the early eighteenth century',
      url: 'https://www.folger.edu/explore/shakespeares-works/king-lear/an-introduction-to-this-text/',
    },
    {
      label:
        'Internet Shakespeare Editions, King Lear, 1608 Quarto (modern), scene 24: the closing lines spoken by Albany',
      url: 'https://internetshakespeare.uvic.ca/doc/Lr_Q1M/scene/24/',
    },
    {
      label:
        'Internet Shakespeare Editions, King Lear, 1608 Quarto (modern), scene 13: contains the mock trial and Edgar’s closing couplets, and not the Fool’s “bed at noon” line',
      url: 'https://internetshakespeare.uvic.ca/doc/Lr_Q1M/scene/13/',
    },
    {
      label:
        'Internet Shakespeare Editions, King Lear, 1608 Quarto (modern), scene 9: the storm scene without the Fool’s Merlin prophecy',
      url: 'https://internetshakespeare.uvic.ca/doc/Lr_Q1M/scene/9/',
    },
    {
      label:
        'Internet Shakespeare Editions, King Lear, Folio (modern), 3.6: no mock trial; contains the Fool’s last line',
      url: 'https://internetshakespeare.uvic.ca/doc/Lr_FM/scene/3.6/',
    },
    {
      label:
        'Internet Shakespeare Editions, King Lear, 1608 Quarto (modern), all 24 scenes, and Folio (modern), all scenes, compared line by line with every quotation in this guide on 26 September 2026. Findings used here: Q has four Howls and three Nevers, F three and five; Q and F both read tough world and men of stones; Q reads before where F reads till (1.5), can where F reads will (1.1), richer for ponderous and win for draw (1.1), small vices in rags where F has great vices in clothes (4.6), justicers where F has justices (4.2); Q only: Tigers, not daughters and Humanity must perforce prey on itself (4.2), little world of man (3.1), All thy other titles (1.4), basest and contemned’st wretches (2.2), Women will all turn monsters (3.7), He childed as I fathered (3.6), the mock trial (3.6), the music in 4.7, and Lear’s own Break heart as his last line; F only: In, boy; go first (3.4), Look on her and Look there (5.3), the Merlin prophecy (3.2) and bed at noon (3.6)',
      url: 'https://internetshakespeare.uvic.ca/doc/Lr_Q1M/scene/1/',
    },
    {
      label:
        'Internet Shakespeare Editions, 1608 Quarto (modern) scenes 1-5, 7, 8, 11, 13-16, 20, 21, 23 and 24, and Folio (modern) 1.1, 1.4, 1.5, 2.2, 3.1, 3.4, 3.6, 3.7, 4.1, 4.2, 4.5, 4.6 and 5.3, re-read on 26 September 2026 for the adversarial check. Confirmed: Q reads More richer than my tongue, win, can come (1.1) and gives a shorter map speech without champains or plenteous rivers; both texts read the roaring sea (3.4) and this tough world (5.3); Q reads Through tattered rags small vices do appear (4.6) and scourge for plague (5.3); Q has Yet ere I move’t where F has Yet am I noble as the adversary (5.3). The Folio numbers the Dover scene 4.5 and the reunion 4.6, because it has no 4.3',
      url: 'https://internetshakespeare.uvic.ca/doc/Lr_Q1M/scene/20/',
    },
    {
      label:
        'Internet Shakespeare Editions, King Lear, Folio (modern), 5.3: Howl three times, Never five times, Look there, Kent speaks Break heart',
      url: 'https://internetshakespeare.uvic.ca/doc/Lr_FM/scene/5.3/',
    },
    {
      label:
        "Folger Shakespeare Library, King Lear 4.1: the Folger text reads to th' gods in Gloucester's line, where the held edition reads to the gods",
      url: 'https://www.folger.edu/explore/shakespeares-works/king-lear/read/4/1/',
    },
    {
      label:
        'Folger Shakespeare Library, King Lear 5.3 and 4.6: Howl three times, men of stones, Never five times, tough world; Through tattered clothes small vices do appear',
      url: 'https://www.folger.edu/explore/shakespeares-works/king-lear/read/5/3/',
    },
    {
      label:
        "Holinshed's Chronicles on Leir, as printed by Shakespeare Navigators: Leir restored by Cordeilla's army, reigning two years until his death; Cordeilla later imprisoned by her nephews Margan and Cunedag, where she killed herself",
      url: 'https://shakespeare-navigators.ewu.edu/king_lear/King_Lear_in_Holinshed.html',
    },
    {
      label:
        'Wikipedia, Cordelia of Britain: the legend from Geoffrey of Monmouth, in which Cordelia restores Leir and later, deposed and imprisoned by her nephews, kills herself',
      url: 'https://en.wikipedia.org/wiki/Cordelia_of_Britain',
    },
    {
      label:
        'Wikipedia, King Leir: Leir is alive and restored to his kingship at the end of the play; no Gloucester subplot',
      url: 'https://en.wikipedia.org/wiki/King_Leir',
    },
    {
      label:
        "Wikipedia, The History of King Lear: Tate's adaptation of 1681, without the Fool, with a romance between Cordelia and Edgar and Lear restored; it supplanted Shakespeare's play from 1681 to 1838; Samuel Johnson's shock at Cordelia's death",
      url: 'https://en.wikipedia.org/wiki/The_History_of_King_Lear',
    },
    {
      label:
        "Wikipedia, Flibbertigibbet: the name taken from Samuel Harsnett's Declaration of Egregious Popish Impostures (1603)",
      url: 'https://en.wikipedia.org/wiki/Flibbertigibbet',
    },
    {
      label:
        "Wikipedia, Tom o' Bedlam: beggars who had or feigned mental illness, claimed to be former inmates of the Bethlem Royal Hospital; Edgar's disguise",
      url: 'https://en.wikipedia.org/wiki/Tom_o%27_Bedlam',
    },
    {
      label: 'Wiktionary, nuncle: from rebracketing of mine uncle; cites King Lear',
      url: 'https://en.wiktionary.org/wiki/nuncle',
    },
    {
      label:
        'Wikipedia, Pelican in her piety: the medieval belief that the pelican fed its young with blood from its own breast',
      url: 'https://en.wikipedia.org/wiki/Pelican_in_her_piety',
    },
    {
      label: 'Wikipedia, Hysteria: the word from the Ancient Greek for womb',
      url: 'https://en.wikipedia.org/wiki/Hysteria',
    },
    {
      label:
        'Wikipedia, Crithmum (rock samphire): gathered from sea cliffs, eaten and pickled; Shakespeare on the dangerous trade; Samphire Hoe near Dover',
      url: 'https://en.wikipedia.org/wiki/Crithmum',
    },
    {
      label:
        'Wikipedia, Union of the Crowns: James VI of Scotland became James I of England on 24 March 1603 and proclaimed himself King of Great Britain on 20 October 1604',
      url: 'https://en.wikipedia.org/wiki/Union_of_the_Crowns',
    },
    {
      label:
        'Wikipedia, Primogeniture: the right of the firstborn legitimate child to inherit all or most of an estate',
      url: 'https://en.wikipedia.org/wiki/Primogeniture',
    },
    {
      label:
        'Wikipedia, Rota Fortunae: the Wheel of Fortune as a symbol of the changing fortunes of the powerful; cites Kent and Lear',
      url: 'https://en.wikipedia.org/wiki/Rota_Fortunae',
    },
    {
      label:
        'Wiktionary, never: pronounced with the stress on the first of two syllables; Wikipedia, Trochee: a stressed syllable followed by an unstressed one, the reverse of an iamb. Together these give the scansion of the “Never” line as five trochees',
      url: 'https://en.wiktionary.org/wiki/never',
    },
    {
      label: 'Wikipedia, Trochee',
      url: 'https://en.wikipedia.org/wiki/Trochee',
    },
    {
      label:
        'Wikipedia, Blank verse: unrhymed lines with a regular metre, usually iambic pentameter',
      url: 'https://en.wikipedia.org/wiki/Blank_verse',
    },
    {
      label:
        "Wikipedia, Hamartia, Peripeteia and Anagnorisis: Aristotle's terms from the Poetics, and the debate over flaw or error",
      url: 'https://en.wikipedia.org/wiki/Hamartia',
    },
  ],
}
