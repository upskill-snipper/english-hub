import type { StudyGuide } from '@/lib/study-guides/types'

/**
 * The Sign of Four, Arthur Conan Doyle (1890). A SUPPLEMENT, mounted below the
 * existing page at /revision/texts/the-sign-of-four, which already carries an
 * overview, context, themes, characters and key quotations. This file adds
 * what that page lacked: passages for close reading, language analysis,
 * structure and form, vocabulary, exam practice and a model answer, plus the
 * timeline and character map the animated visuals draw.
 *
 * Every quotation here, in the extracts, on the scene cards and inside the
 * prose, was copied from the byte copy of Project Gutenberg #2097 held at
 * src/data/full-texts/the-sign-of-four.ts, and its speaker and chapter were
 * checked by reading the whole novel, not by searching for the phrase alone.
 *
 * THE PAGE ABOVE was written before that check. For whoever corrects it
 * (25 September 2026), checked against the same edition:
 * - Not in the novel at all: "I am the last and most unworthy of the
 *   detectives..." (the real Chapter I line is "the last and highest court of
 *   appeal in detection"); "I had, it is true, the consolation of knowing...";
 *   "No treasure could be too great a reward..."; "You'll hang me if you
 *   can..."; "I have had a long score to settle...".
 * - Wrong speaker: "It is a romance! An injured lady..." is Mrs Forrester's,
 *   Chapter IX, not Athelney Jones's, Chapter 10 (REVISION_TOPICS repeats it);
 *   "The treasure is lost" is Mary Morstan's, Chapter XI, not Small's.
 * - Wrong chapter: "Women are never to be entirely trusted" is Chapter IX, not
 *   2; "The main thing with people of that sort" is Chapter VIII, not 7; the
 *   note by Bartholomew's body is Chapter V, not 6; Small's long confession is
 *   Chapter XII, not 11 (quiz question tsotf-10).
 * - Plot: the first pearl came in May 1882, about three and a half years after
 *   Captain Morstan vanished, not six; the thorn is "just above the ear", not in
 *   the neck; Holmes does not call Jones in (he sends Thaddeus to the police,
 *   and Jones happens to be at Norwood station); the laboratory was
 *   Bartholomew's room and the treasure was in the sealed garret above it;
 *   Thaddeus's own house is a new terrace in south London reached through
 *   Cold Harbor Lane, not "a house in Norwood" (Pondicherry Lodge, in Upper
 *   Norwood, is the family house); Small did not kill Bartholomew, Tonga did,
 *   so "Small murders for it twice" (themes, REVISION_TOPICS) overstates.
 * - Misapplied: the theme "Reason versus emotion" says Holmes warns that
 *   emotion is "destructive to the logical faculty". In Chapter I he says that
 *   of guessing: "I never guess. It is a shocking habit,-destructive to the
 *   logical faculty."
 *
 * SECOND PASS (25 September 2026, evening). A second writer re-read all twelve
 * chapters against this file and corrected what the first pass had loosened:
 * the order of the Chapter 1 cards, Mrs Smith's evidence (she never says Small
 * "hired" the launch), the timing of Holmes's two sleepless nights, the guard
 * Small strikes down (the text never says in so many words that he died),
 * where "Sahib", "khitmutgar" and "street Arab" occur, and where Holmes names
 * risus sardonicus.
 *
 * THIRD PASS (26 September 2026). An adversarial check re-read all twelve
 * chapters and every quoted span, and corrected: Jones is never called
 * "Inspector" in the novel (he is "Mr. Athelney Jones, of Scotland Yard", and
 * in Chapter 6 he gives orders to a uniformed inspector), so the rank is gone;
 * the first pearl did not arrive "on 4 May 1882" (that is the date of the
 * advertisement; the pearl came the day Mary answered it), and "a September
 * evening" is mid-Chapter 3, not its opening; Small is hauled aboard "like some
 * evil fish" in the same paragraph as Tonga's fall, not a paragraph later; the
 * fog-bound faces are a street crowd on the Strand, not a theatre crowd; Holmes
 * doubts that justice was on Small's side BEFORE Small tells of the betrayal;
 * Lal Rao is the confederate by Holmes's inference, since Small names no names;
 * Port Blair follows the source (a colony re-established in February 1858, the
 * penal colony for the rebels set up beside it); the order of three scene
 * cards; and the Chapter 11 extract now begins with Mary's "Where is the key?",
 * so that "Small threw it into the Thames" cannot be read as the treasure.
 *
 * Nothing in this file repeats those errors, and where it states the facts it
 * states them correctly, so this supplement and the page above disagree on
 * those points until the page is fixed.
 */
export const guide: StudyGuide = {
  slug: 'the-sign-of-four',
  title: 'The Sign of Four',
  author: 'Arthur Conan Doyle',
  form: 'novella',
  scope:
    "The whole novel, all twelve chapters, from Holmes's cocaine in Chapter 1 to Small's confession in Chapter 12. AQA sets the whole text for GCSE English Literature (8702) and examines it closed book, through an extract printed in the paper and the novel as a whole.",
  rights: {
    status: 'public-domain',
    acknowledgement:
      "First published in Lippincott's Monthly Magazine in February 1890 as The Sign of the Four, and as a book by Spencer Blackett in October 1890. Quotations follow the Project Gutenberg edition (eBook #2097).",
  },

  native: {
    overview: '/revision/texts/the-sign-of-four',
    context: '/revision/texts/the-sign-of-four',
    themes: '/revision/texts/the-sign-of-four',
    characters: '/revision/texts/the-sign-of-four',
    keyQuotes: '/revision/texts/the-sign-of-four',
  },

  extracts: [
    {
      title: 'The opening: Holmes and the syringe',
      where: 'Chapter 1, The Science of Deduction',
      pointer:
        'The first five paragraphs of the novel, from “Sherlock Holmes took his bottle” to Holmes asking Watson “Would you care to try it?”',
      text: 'Sherlock Holmes took his bottle from the corner of the mantel-piece and his hypodermic syringe from its neat morocco case. With his long, white, nervous fingers he adjusted the delicate needle, and rolled back his left shirt-cuff. For some little time his eyes rested thoughtfully upon the sinewy forearm and wrist all dotted and scarred with innumerable puncture-marks. Finally he thrust the sharp point home, pressed down the tiny piston, and sank back into the velvet-lined arm-chair with a long sigh of satisfaction. / Three times a day for many months I had witnessed this performance, but custom had not reconciled my mind to it. On the contrary, from day to day I had become more irritable at the sight, and my conscience swelled nightly within me at the thought that I had lacked the courage to protest. Again and again I had registered a vow that I should deliver my soul upon the subject, but there was that in the cool, nonchalant air of my companion which made him the last man with whom one would care to take anything approaching to a liberty. His great powers, his masterly manner, and the experience which I had had of his many extraordinary qualities, all made me diffident and backward in crossing him. / Yet upon that afternoon, whether it was the Beaune which I had taken with my lunch, or the additional exasperation produced by the extreme deliberation of his manner, I suddenly felt that I could hold out no longer. / “Which is it to-day?” I asked,—“morphine or cocaine?” / He raised his eyes languidly from the old black-letter volume which he had opened. “It is cocaine,” he said,—“a seven-per-cent. solution. Would you care to try it?”',
      annotations: [
        {
          phrase: 'long, white, nervous fingers',
          note: 'Three adjectives build a portrait of a delicate, artistic, highly strung man. “Nervous” is the telling word: the hands that will solve the case are also restless, and the hero is introduced as fragile before he is shown as brilliant.',
        },
        {
          phrase: 'dotted and scarred with innumerable puncture-marks',
          note: "Holmes's own body is the first piece of evidence in the novel. The hyperbole of “innumerable” shows a long habit, not an experiment, and a reader who knows that Holmes reads bodies for clues is invited to read his.",
        },
        {
          phrase: 'a long sigh of satisfaction',
          note: 'The sensual close of the paragraph shows the drug giving Holmes the pleasure that work usually gives him. It prepares his later confession that he craves “mental exaltation”, and it makes the reader uneasy about how much he enjoys it.',
        },
        {
          phrase: 'my conscience swelled nightly within me',
          note: "The first person arrives with a moral response. Watson is a doctor and a friend, and the verb “swelled” makes his unspoken guilt grow like a symptom, setting him up as the conscience beside Holmes's detachment.",
        },
        {
          phrase: 'the cool, nonchalant air of my companion',
          note: "Holmes's calm is the opposite of Watson's agitation. The adjectives anticipate his claim later in the chapter that detection should be “cold and unemotional”, and they explain why even a soldier hesitates to challenge him.",
        },
        {
          phrase: 'diffident and backward in crossing him',
          note: 'Watson admits his own timidity, which makes his protest, when it comes, feel costly. The friendship is unequal at the start, and by the end of the novel Watson has found a life, and a voice, of his own.',
        },
        {
          phrase: 'a seven-per-cent. solution',
          note: "The exact, clinical figure shows Holmes treating his habit as chemistry. His offer, “Would you care to try it?”, is so casual that it shocks, and Watson's blunt refusal in the next line, on the grounds of his own health, shows how far apart the two men stand.",
        },
      ],
      question:
        'How does Conan Doyle use this opening to present Holmes as brilliant but troubled, and Watson as the voice that judges him?',
    },
    {
      title: 'London in the fog',
      where: 'Chapter 3, In Quest of a Solution',
      pointer:
        'The paragraph beginning “It was a September evening”, as the cab drives towards the Lyceum Theatre, ending with Holmes writing “in the light of his pocket-lantern”.',
      text: 'It was a September evening, and not yet seven o’clock, but the day had been a dreary one, and a dense drizzly fog lay low upon the great city. Mud-coloured clouds drooped sadly over the muddy streets. Down the Strand the lamps were but misty splotches of diffused light which threw a feeble circular glimmer upon the slimy pavement. The yellow glare from the shop-windows streamed out into the steamy, vaporous air, and threw a murky, shifting radiance across the crowded thoroughfare. There was, to my mind, something eerie and ghost-like in the endless procession of faces which flitted across these narrow bars of light,—sad faces and glad, haggard and merry. Like all human kind, they flitted from the gloom into the light, and so back into the gloom once more. I am not subject to impressions, but the dull, heavy evening, with the strange business upon which we were engaged, combined to make me nervous and depressed. I could see from Miss Morstan’s manner that she was suffering from the same feeling. Holmes alone could rise superior to petty influences. He held his open note-book upon his knee, and from time to time he jotted down figures and memoranda in the light of his pocket-lantern.',
      annotations: [
        {
          phrase: 'a dense drizzly fog lay low upon the great city',
          note: 'The alliteration of “dense drizzly” thickens the air, and the fog “lay low” like a weight on the city. London is presented as vast and smothered, a place where clues, and people, are easily lost.',
        },
        {
          phrase: 'Mud-coloured clouds drooped sadly over the muddy streets',
          note: "Pathetic fallacy: the sky seems to share the characters' gloom. Repeating “mud” in two forms makes sky and street the same dirty colour, so there is no clean light anywhere in the scene.",
        },
        {
          phrase: 'misty splotches of diffused light',
          note: 'Even the lamps fail to light the way. The ugly noun “splotches” turns them into stains, a fitting image for a case in which every clue so far is blurred.',
        },
        {
          phrase: 'something eerie and ghost-like in the endless procession of faces',
          note: 'Gothic vocabulary turns an ordinary evening crowd on the Strand into spectres. The “endless procession” makes the city anonymous, so that anyone could be watching, which suits a chapter in which the three are led by strangers to an unknown house.',
        },
        {
          phrase:
            'they flitted from the gloom into the light, and so back into the gloom once more',
          note: 'The sentence moves from dark to light to dark, as the faces do. Watson links it to “all human kind”, briefly making the street an image of human life passing between two darknesses.',
        },
        {
          phrase: 'Holmes alone could rise superior to petty influences',
          note: 'The paragraph ends by setting Holmes apart. Watson and Mary are “nervous and depressed”, while Holmes jots down figures: the weather has power over feeling, but it stops at the edge of his mind.',
        },
      ],
      question:
        'How does Conan Doyle use the setting in this passage to create a mood of mystery and unease?',
    },
    {
      title: 'The empty box',
      where: 'Chapter 11, The Great Agra Treasure',
      pointer:
        "From Mary's question “Where is the key?” to the end of the chapter, “I had gained one”.",
      text: '“And so heavy!” she exclaimed, trying to raise it. “The box alone must be of some value. Where is the key?” / “Small threw it into the Thames,” I answered. “I must borrow Mrs. Forrester’s poker.” There was in the front a thick and broad hasp, wrought in the image of a sitting Buddha. Under this I thrust the end of the poker and twisted it outward as a lever. The hasp sprang open with a loud snap. With trembling fingers I flung back the lid. We both stood gazing in astonishment. The box was empty! / No wonder that it was heavy. The iron-work was two-thirds of an inch thick all round. It was massive, well made, and solid, like a chest constructed to carry things of great price, but not one shred or crumb of metal or jewelry lay within it. It was absolutely and completely empty. / “The treasure is lost,” said Miss Morstan, calmly. / As I listened to the words and realised what they meant, a great shadow seemed to pass from my soul. I did not know how this Agra treasure had weighed me down, until now that it was finally removed. It was selfish, no doubt, disloyal, wrong, but I could realise nothing save that the golden barrier was gone from between us. “Thank God!” I ejaculated from my very heart. / She looked at me with a quick, questioning smile. “Why do you say that?” she asked. / “Because you are within my reach again,” I said, taking her hand. She did not withdraw it. “Because I love you, Mary, as truly as ever a man loved a woman. Because this treasure, these riches, sealed my lips. Now that they are gone I can tell you how I love you. That is why I said, ‘Thank God.’” / “Then I say, ‘Thank God,’ too,” she whispered, as I drew her to my side. Whoever had lost a treasure, I knew that night that I had gained one.',
      annotations: [
        {
          phrase: 'wrought in the image of a sitting Buddha',
          note: "The hasp is a sacred image on a box of Indian work, and Watson forces it with Mrs Forrester's poker. One reading is that the moment stages the collision of empire and English home that runs through the novel: an Indian box broken open in a Camberwell drawing-room.",
        },
        {
          phrase: 'The box was empty!',
          note: "The short exclamatory sentence delivers the novel's great anticlimax. After the chase and the capture, the prize that men have killed for is simply absent, and the paragraph break lets the shock land.",
        },
        {
          phrase: 'absolutely and completely empty',
          note: 'Two adverbs doing the same work insist on the absence. The heavy iron walls, measured to two-thirds of an inch, make the emptiness more striking: a chest built for things of great price holds nothing.',
        },
        {
          phrase: 'said Miss Morstan, calmly',
          note: 'The adverb is the key to Mary. She has just lost a fortune, and her calm confirms that she never wanted it, which is why she is the one character the treasure cannot corrupt.',
        },
        {
          phrase: 'the golden barrier was gone from between us',
          note: "The metaphor completes an image from Chapter 7, where the treasure “intervened like an impassable barrier between us”. Wealth has been the wall between them, so its loss is the romance's release.",
        },
        {
          phrase: 'It was selfish, no doubt, disloyal, wrong',
          note: 'Watson judges himself in a list that grows harsher word by word. His honesty about his own selfishness makes him a narrator we trust, and it contrasts with the self-excusing confessions of Major Sholto and Small.',
        },
        {
          phrase: 'I knew that night that I had gained one',
          note: 'The last sentence turns on antithesis: lost a treasure, gained one. Mary becomes the true treasure, a romantic idea that still keeps the language of ownership, so love replaces wealth without leaving the vocabulary of possession behind.',
        },
      ],
      question: 'How does Conan Doyle use this moment to set love against wealth?',
    },
  ],

  languageAnalysis: [
    {
      technique: 'First-person retrospective narration',
      example:
        'Watson writes looking back, from a time when he and Mary are together: “She has told me since that she thought me cold and distant upon that journey” (Chapter 7); “To this day she declares that I told her one moving anecdote” (Chapter 3).',
      effect:
        "Hindsight gives away the happy ending of the romance while the mystery is still unsolved, so the reader enjoys Watson's anxieties rather than sharing them. It also makes Watson, not Holmes, the centre of feeling: we see Holmes from outside, and his thinking stays closed until he chooses to explain it.",
    },
    {
      technique: 'Semantic field of science and machinery',
      example:
        'Holmes calls detection “an exact science” to be treated in a “cold and unemotional manner” (Chapter 1); Watson calls him “an automaton,—a calculating-machine” (Chapter 2); at the crime scene he speaks like “a clinical professor expounding to his class” (Chapter 6).',
      effect:
        "The vocabulary of science and engineering makes Holmes's method sound modern and reliable, but Watson's “automaton” turns the same language into criticism: a mind that works like a machine may also feel like one. The novel keeps both readings open, admiring the method while doubting the man it produces.",
    },
    {
      technique: 'Animal imagery for the hunter',
      example:
        'As Holmes searches the room, his movements are “like those of a trained blood-hound picking out a scent”, and Watson notes his “beady eyes gleaming and deep-set like those of a bird” (Chapter 6).',
      effect:
        'The similes make detection physical and predatory, a hunt rather than a calculation, and they anticipate Toby the tracker dog in the next chapter. Watson follows them with the thought of “what a terrible criminal he would have made”, which suggests the same powers could serve either side of the law.',
    },
    {
      technique: 'Pathetic fallacy and the London fog',
      example:
        '“Mud-coloured clouds drooped sadly over the muddy streets”, and the lamps are “misty splotches of diffused light” (Chapter 3). In Chapter 1 Holmes points to “the yellow fog” outside and calls the world “dreary, dismal, unprofitable”.',
      effect:
        "The weather mirrors the characters' uncertainty: nothing in the city can be seen clearly, just as nothing in the case can yet be explained. Giving the clouds a human mood, “drooped sadly”, lets the setting share Watson's admitted nervousness, while Holmes alone seems untouched by it.",
    },
    {
      technique: 'Contrast and incongruity in interiors',
      example:
        'Thaddeus Sholto calls his room “An oasis of art in the howling desert of South London”, and Watson finds it “as out of place as a diamond of the first water in a setting of brass” (Chapter 4).',
      effect:
        "Tiger-skins, a hookah and Oriental vases sit inside what Watson, arriving at the end of Chapter 3, calls a “third-rate suburban dwelling-house”: the empire's goods have come home to the suburbs. One reading is that Conan Doyle uses the clash to suggest that the wealth of India never quite fits the England that absorbs it; another is that it is simply a comic portrait of an aesthete. The first gains weight once the treasure's history emerges.",
    },
    {
      technique: 'Extended metaphor of the barrier',
      example:
        'The treasure “intervened like an impassable barrier between us” (Chapter 7); when the box is found empty, “the golden barrier was gone from between us” (Chapter 11).',
      effect:
        "Returning to the image from Chapter 7 to Chapter 11 turns money into a wall between two people. Watson's scruple is about class and honour, since he fears being thought “a mere vulgar fortune-seeker”, and the metaphor makes the treasure's disappearance feel like a wall coming down rather than a loss.",
    },
    {
      technique: 'Dehumanising description of Tonga',
      example:
        'In the chase Watson calls Tonga a “savage, distorted creature” with “half animal fury”, and an “unhallowed dwarf” (Chapter 10).',
      effect:
        'Nouns such as “creature” and the adjective “animal” deny Tonga a human inner life, and he is never given a line of speech. Set this beside Small, whose face in repose is “not an unpleasing one” and who is given a whole chapter to explain himself. The contrast shows the racial hierarchy of Victorian imperial thinking at work inside the narrative. A strong answer analyses this language critically rather than repeating it or passing over it.',
    },
    {
      technique: 'Speech that marks class',
      example:
        'Small speaks in the slang of soldiers and convicts: “I don’t believe that I can swing over the job” (Chapter 11). Mrs Smith reports his call to her husband in the night, “Show a leg, matey” (Chapter 8).',
      effect:
        'Non-standard speech marks Small as a working-class private soldier, set against the officers Sholto and Morstan, who speak as gentlemen, yet it is the gentleman Sholto who breaks his word. His plain, blunt voice makes his confession sound honest, which is part of why readers can find him more sympathetic than his crimes deserve.',
    },
    {
      technique: 'Dramatic irony and satire of the official police',
      example:
        'Athelney Jones of Scotland Yard announces “Stern facts here,—no room for theories” and “I am weaving my web round Thaddeus” (Chapter 6); the Standard then praises Jones as “a single vigorous and masterful mind” (Chapter 8).',
      effect:
        "The reader has just watched Holmes read the room correctly, so Jones's confidence becomes comic, and the newspaper's praise shows how easily the public is told a flattering story. Conan Doyle raises his amateur by lowering the professionals, though Holmes calls Jones “not a bad fellow” and lets him keep the credit.",
    },
    {
      technique: 'Listing and precise numbers',
      example:
        "Small's inventory of the jewels: “one hundred and forty-three diamonds of the first water”, “ninety-seven very fine emeralds”, “two hundred and ten sapphires” (Chapter 12).",
      effect:
        'The piled-up numbers dazzle, as Small says it was “blinding to look upon them”, and they also turn beauty into accounting. The list lets the reader feel the pull of the treasure in the very speech that describes the murder committed to get it, which makes the reader briefly share his greed.',
    },
  ],

  structureForm: [
    {
      heading: 'Effects before causes',
      body: 'In Chapter 1 Holmes says the only point worth recording in his last case was his “reasoning from effects to causes”, and The Sign of Four is built the same way. The reader meets the effects first: a missing father, the pearls, a dead man in a locked room. The cause, a murder at Agra during the uprising of 1857, is revealed only in the last chapter, about thirty years back in time. The plot makes the reader work as Holmes does, backwards from evidence to explanation, and the confession of Chapter 12 answers questions the whole book has raised.',
    },
    {
      heading: 'Stories inside stories',
      body: "The novel contains three confessions, each nested inside Watson's narrative. In Chapter 4 Thaddeus retells his father's deathbed statement, a story inside a story inside Watson's account. In Chapter 11 Small begins to explain himself in the launch's cabin, and Chapter 12 is almost entirely his voice. Each confessor presents himself as less guilty than he looks: Major Sholto insists that “I can hardly be blamed in the matter”, and Small that “the best defence I can make is just to hold back nothing”. Watson's reactions, such as his “utmost horror of the man”, guide the reader's judgement, but the form gives the guilty a hearing that the police never would.",
    },
    {
      heading: 'A circular ending',
      body: 'The novel opens with Holmes taking “his bottle from the corner of the mantel-piece” and closes with him stretching his hand up for “the cocaine-bottle”. Between the two, Watson has gained a wife and Jones the credit. The frame suggests that nothing has changed for Holmes: without a problem, his mind returns to the drug. One reading is that Conan Doyle is warning that a life of pure reason leaves a person empty; another is that the ending is a comic shrug that restores the eccentric hero for his next case. The first fits better with the contrast between Holmes and Watson that the novel builds from its opening pages.',
    },
    {
      heading: 'Detective story, romance and adventure',
      body: 'The Sign of Four mixes several forms. It is a detective story, with a locked room, footprints, a false arrest and a reasoned solution; a romance, in which Watson falls in love with the client; an adventure, with a night chase on the Thames; and an imperial tale of treasure, oaths and revenge in India. The novel knows it. In Chapter 1 Holmes complains that Watson tried “to tinge it with romanticism” when writing up their first case, and in Chapter 9 Mrs Forrester delights that the case is “a romance”, its villains taking “the place of the conventional dragon or wicked earl”. Conan Doyle lets his characters name the genres the book is combining.',
    },
    {
      heading: 'A narrator who writes about Holmes',
      body: "In Chapter 1 Watson calls his account of their earlier case, “A Study in Scarlet”, a “small brochure”, and Holmes criticises it. In Chapter 9 Holmes says criminals have begun to recognise him since Watson “took to publishing some of my cases”. The Sign of Four is only the second Holmes novel, after A Study in Scarlet (1887), yet it already plays with the idea that the detective is famous because his friend writes about him. The effect is to make Watson's narration part of the story: we are reading exactly the kind of romantic account Holmes disapproves of.",
    },
    {
      heading: 'Pace: waiting, anticlimax and climax',
      body: "The present-day action takes only a few days, but its pace varies sharply. Chapters 3 to 6 run through a single evening and night, from the fog outside the Lyceum to the discovery of the body and Jones's arrest of Thaddeus. Chapter 7 ends in comic anticlimax when Toby leads the hunters to a barrel of creosote. Chapters 8 and 9 deliberately slow down as the trail goes cold and Holmes paces through the night, which builds frustration before the chase of Chapter 10, the fastest writing in the book. Then Conan Doyle springs a second anticlimax, the empty box, and places the emotional climax there rather than at the arrest.",
    },
    {
      heading: 'Publication, title and chapters',
      body: "The novel first appeared in the February 1890 issue of Lippincott's Monthly Magazine as The Sign of the Four, and as a book from Spencer Blackett in October 1890. Editions still vary between that title and The Sign of Four. Inside the novel the phrase is usually “the sign of the four”, but Small twice says “the sign of four”, in Chapter 12. The twelve chapters are short and titled, from The Science of Deduction to The Strange Story of Jonathan Small, and several titles work as signposts or jokes: The Episode of the Barrel names the anticlimax before the reader reaches it.",
    },
    {
      heading: 'Dates, and a slip worth knowing',
      body: "Conan Doyle gives precise dates that make the case feel documented: Captain Morstan vanished on 3 December 1878, Major Sholto died on 28 April 1882, and on 4 May 1882 an advertisement asked for Mary's address. The first pearl arrived on the day she answered it, which Holmes reckons was within a week of Sholto's death. But the letter in Chapter 2 is postmarked July 7, while that same evening, in Chapter 3, is “a September evening”. The inconsistency is in the text itself, so do not build an argument on the month.",
    },
  ],

  vocabulary: [
    {
      term: 'consulting detective',
      definition:
        "Holmes's name for the profession he says he created: a private expert whom the police consult when a case is beyond them. He calls himself “the last and highest court of appeal in detection” (Chapter 1).",
    },
    {
      term: 'deduction',
      definition:
        "Reasoning from observed facts to a conclusion. In Chapter 1 Holmes separates it from observation: noticing reddish earth on Watson's instep is observation; working out that he sent a telegram is deduction.",
    },
    {
      term: 'monograph',
      definition:
        'A detailed written study of a single subject. Holmes has written several, including one on telling apart the ashes of different tobaccos (Chapter 1).',
    },
    {
      term: 'hypochondriac',
      definition:
        'A person who worries constantly, and without good cause, about their health. Thaddeus Sholto asks Watson to listen to his heart the moment they meet, and in the cab to Norwood, as Thaddeus pours out his symptoms, Watson calls him “a confirmed hypochondriac” (Chapter 4).',
    },
    {
      term: 'valetudinarian',
      definition:
        'A person in poor health, or one obsessed with their own health. Thaddeus uses the word of himself as he buttons up a heavy Astrakhan-collared coat “in spite of the extreme closeness of the night” (Chapter 4).',
    },
    {
      term: 'khitmutgar',
      definition:
        "A male servant in British India who waited at table, from a Hindustani word borrowed from Persian. Thaddeus calls his Indian servant by this title as the visitors arrive (Chapter 3), and Small uses it of Major Sholto's servant (Chapter 12).",
    },
    {
      term: 'Sahib',
      definition:
        "A term of respect for a European man in colonial India, from a Hindustani word meaning lord. Thaddeus's servant uses it (Chapter 3), Lal Chowdar uses it to Major Sholto in the deathbed story (Chapter 4), and Abdullah Khan and the merchant Achmet use it to Small at Agra (Chapter 12).",
    },
    {
      term: 'Feringhee',
      definition:
        'An old word used in India for a European, a foreigner. Abdullah Khan explains that he trusts Small because “an oath is binding upon a Feringhee” (Chapter 12).',
    },
    {
      term: 'sepoy',
      definition:
        'An Indian soldier serving a European power, here the East India Company. The uprising of 1857 began as a mutiny of sepoys, which is why Small complains that the British were fighting “our own picked troops” (Chapter 12).',
    },
    {
      term: 'the Mutiny',
      definition:
        "Small's name for the uprising of 1857 against the rule of the East India Company, which he calls “the great mutiny” (Chapter 12). It is also known as the Indian Rebellion of 1857 and, in India, as the First War of Independence. Afterwards the British Crown took over the government of India from the Company.",
    },
    {
      term: 'penal servitude',
      definition:
        "A prison sentence with forced labour. The three Sikhs receive “penal servitude for life” for the murder of Achmet, and Small's death sentence is reduced to the same (Chapter 12).",
    },
    {
      term: 'creosote (creasote)',
      definition:
        "An oily, strong-smelling liquid distilled from tar and used to preserve wood. The small accomplice treads in creosote that has leaked from a cracked carboy in Bartholomew's room, and Toby follows the smell; the edition spells it both creosote and creasote (Chapters 6 to 8).",
    },
    {
      term: 'risus sardonicus',
      definition:
        "A fixed, grinning spasm of the face muscles, caused by tetanus or by strychnine-like poisons. Watson sees the “horrible smile” on Bartholomew's dead face through the keyhole (Chapter 5), and Holmes names it, “as the old writers called it”, while examining the body (Chapter 6).",
    },
    {
      term: 'chaplet',
      definition:
        'A circlet or string of beads, here of pearls. Major Sholto keeps back a “chaplet dipped with pearls” meant for Mary (Chapter 4), and Thaddeus later sends her its pearls one at a time. In Chapter 12 Small mentions twelve pearls “set in a gold coronet” that were missing from the chest when he recovered it, which suggests where they came from.',
    },
    {
      term: 'street Arab',
      definition:
        'A dated Victorian term, no longer used, for a homeless or ragged child who lived on the streets. A street Arab leads up the cab outside the Lyceum (Chapter 3), and Watson uses the word of the Baker Street Irregulars when they burst into the sitting room (Chapter 8).',
    },
    {
      term: 'wherry',
      definition:
        "A light boat used on rivers and inland waters. Holmes and Watson cross the Thames in one after leaving Mrs Smith's wharf (Chapter 8).",
    },
    {
      term: 'agony column',
      definition:
        "The personal advertisements in a newspaper. Holmes places a notice there asking for news of Mordecai Smith and the Aurora, which Watson recognises as his friend's work (Chapter 9).",
    },
    {
      term: 'half-pay',
      definition:
        'Reduced pay given to an army or navy officer who is not on active service. Watson calls himself “a half-pay surgeon” when he doubts he has the right to speak to Mary (Chapter 7).',
    },
  ],

  examPractice: {
    questions: [
      {
        question:
          'Starting with the extract from Chapter 1 above, how does Conan Doyle present Sherlock Holmes as a brilliant but troubled man? Write about how Conan Doyle presents Holmes in this extract, and how he presents Holmes in the novel as a whole.',
        skill: 'Close analysis of the extract, then whole-text argument',
        guidance: [
          "Open with an argument, not a summary: for example, that Conan Doyle makes Holmes's genius and his self-destruction come from the same restless mind.",
          'In the extract, analyse the precise, almost surgical verbs of the injection, such as “adjusted”, “thrust” and “pressed”, and the evidence written on his body: the forearm “dotted and scarred with innumerable puncture-marks”.',
          "Use Watson's reaction as the moral frame. His “conscience swelled nightly within me”, yet Holmes's “cool, nonchalant air” silences him. Comment on why we first see the hero through a worried friend.",
          "Move to the rest of Chapter 1: Holmes's mind “rebels at stagnation”, and he treats Watson's brother's watch as “an abstract problem” until he sees that he has hurt his friend.",
          'Across the novel, trace how the case changes him: the hunting similes of Chapter 6, the sleepless pacing of Chapter 9, when the problem is “consuming me”, and the return to “the cocaine-bottle” on the last page.',
          "Bring in context where it sharpens the point: Watson objects “as a medical man”, and Conan Doyle, who trained as a doctor at Edinburgh, gives him a doctor's vocabulary of “pathological and morbid” effects.",
          'Conclude by weighing two readings: Holmes as a warning about intellect cut off from feeling, or as an admired eccentric whose drug is one more oddity. Say which the ending supports, and why.',
        ],
      },
      {
        question:
          'Starting with the extract from Chapter 11 above, how does Conan Doyle present the effects of the Agra treasure on the people who want it? Write about how Conan Doyle presents the treasure in this extract, and how he presents it in the novel as a whole.',
        skill: 'Close analysis of the extract, then whole-text argument',
        guidance: [
          'State a line of argument: the treasure harms everyone who desires it, and the one happy ending in the novel depends on its loss.',
          'In the extract, analyse the anticlimax: the short exclamation “The box was empty!” and the emphatic “absolutely and completely empty”.',
          'Contrast the two reactions. Mary speaks “calmly”, while Watson feels “a great shadow” lift and admits his relief was “selfish, no doubt, disloyal, wrong”. Ask what his honesty adds to our trust in him.',
          'Trace the barrier metaphor back to Chapter 7, where the treasure “intervened like an impassable barrier between us”.',
          "Across the novel: Major Sholto's “cursed greed” and his admission that he never even used the treasure (Chapter 4); Bartholomew, murdered almost as soon as he finds it (Chapter 5); Small calling it “a curse” on everyone who owned it (Chapter 11); and the jewels scattered in the Thames (Chapter 12).",
          "Context: the treasure is loot seized during the uprising of 1857, and Abdullah Khan's words to Small, “We ask you to be rich”, can be read as linking private greed to the reasons the British were in India at all.",
          'Evaluate: does the novel condemn greed, or simply exchange one treasure for another when Watson says he has “gained one”?',
        ],
      },
      {
        question:
          "Read Chapter 12 from Small's outburst, “Justice!”, to Watson's remark that Major Sholto had felt no “groundless or unnatural terror”. Starting with this passage, how does Conan Doyle present ideas about justice? Write about how he presents justice in this passage, and in the novel as a whole.",
        skill: 'Close analysis of a passage, then whole-text argument',
        guidance: [
          'Set out the problem the novel poses: the law, private detection and personal revenge all claim to be justice, and they do not agree.',
          "In the passage, analyse Small's rhetorical question, “Whose loot is this, if it is not ours?”, and his list of sufferings, “all day at work under the mangrove-tree, all night chained up in the filthy convict-huts”.",
          'Notice what his argument leaves out. The word “loot” admits the treasure was plunder, and his claim rests on suffering, not ownership. He also frames his grievance in racial terms, which shows the hierarchy he takes for granted.',
          "Look at Holmes's reply, that “we cannot tell how far justice may originally have been on your side”: the detective, unlike Jones, is willing to hear the criminal's case.",
          "Across the novel: the letter promising Mary that she “shall have justice” (Chapter 2); Jones's confident, wrong arrest of Thaddeus (Chapter 6); Holmes's reading of the sign left on Major Sholto's body as, from the four men's point of view, “an act of justice” (Chapter 7); and Major Sholto's betrayal (Chapter 12).",
          "Context: Small's “Twenty long years” as a convict were spent largely in the Andaman Islands, where the British had set up a penal settlement at Port Blair in 1858, mainly for prisoners from the uprising. That places his story inside imperial punishment.",
          'Evaluate: Small is sympathetic but no innocent. He helped to kill Achmet, and he struck down a guard with his wooden leg to escape. Decide whether the novel finally sides with the law, with Holmes, or with nobody.',
        ],
      },
      {
        question:
          'Read Chapter 10 from Jones turning the search-light on the Aurora to the moment Tonga falls into the river. Starting with this passage, how does Conan Doyle present people from outside Britain? Write about how he presents Tonga in this passage, and how he presents people from India and the Andaman Islands in the novel as a whole.',
        skill:
          "Close analysis of a passage, then whole-text argument, handling the novel's racism critically",
        guidance: [
          'Name the issue directly: the novel describes Tonga through the racial prejudices of its time. Your task is to analyse how that language works, not to repeat it approvingly or avoid it.',
          'In the passage, analyse the shift from “a dark mass” and “the huddled bundle” to “creature”: Watson sees an object or an animal before he sees a person.',
          "Compare how the same scene presents Small, “a good-sized, powerful man” whom Watson calls “the white man”. He too is briefly dehumanised moments later, in the same paragraph as Tonga's fall, hauled aboard “like some evil fish”, but he is later given a face “not an unpleasing one” and a whole chapter of speech. Tonga is never given a line.",
          "Widen out to the gazetteer Holmes reads aloud in Chapter 8, which he calls “the very latest authority” and quotes without question, and to Small's admission in Chapter 12 that he exhibited Tonga at fairs for money.",
          "Include the Indian characters: Abdullah Khan, who draws Small into the plot; Lal Chowdar, the servant who helps hide Captain Morstan's body; and Lal Rao, the butler whom Holmes identifies as Small's confederate inside Pondicherry Lodge. Ask whether any is given the inner life of Small or Watson.",
          'Context: the novel appeared in 1890, when the British Crown ruled India directly and held convicts in the Andaman Islands, so the prejudices of the gazetteer were those of a ruling power describing the people it ruled.',
          "Evaluate: one reading is that the novel simply shares its period's racism; another is that by making English officers the real betrayers, it turns part of the charge of savagery back on the British. Argue which is more convincing, with evidence.",
        ],
      },
    ],
    tips: [
      'The exam is closed book: the extract is the only part of the novel in front of you, so arrive with short, flexible quotations from every stage of the plot, especially Chapters 1, 7, 11 and 12.',
      'Spend real time on the extract before you widen out. The strongest answers analyse individual words in the printed passage, then move to the whole novel with precise chapter references.',
      "Write about Watson as a narrator with views of his own, not as a window. Writing that Conan Doyle has Watson describe something, rather than that Watson describes it, keeps your focus on the writer's choices.",
      "Treat Small's confession as evidence to weigh, not as fact: he is explaining himself to the men who caught him, and Watson, who calls the murder a “cold-blooded business”, is repelled by how lightly he tells it.",
      'Handle race and empire head on. Analyse the language used of Tonga and of the Indian characters as evidence of Victorian imperial attitudes, and say what the novel does with them. Ignoring these passages, or condemning them in one sentence and moving on, both miss the analysis.',
      "Check every quotation's speaker and chapter against the novel. Several lines that circulate in revision materials are misattributed: Mrs Forrester, not Athelney Jones, calls the case “a romance” (Chapter 9); Mary, not Small, says “The treasure is lost” (Chapter 11); and Holmes says “Women are never to be entirely trusted” in Chapter 9, not Chapter 2. A line in which Holmes calls himself the last and most unworthy of detectives is not in the novel at all; his real claim is to be “the last and highest court of appeal in detection” (Chapter 1).",
      'Use the chapter titles as a map. Twelve short chapters are easy to learn, and a reference such as Chapter 7, The Episode of the Barrel, shows command of the whole text.',
      "Bring in context only where it explains the text. The uprising of 1857, the East India Company and the Andaman convict settlement are the facts behind Small's story, and they matter most when you write about justice, greed and empire.",
    ],
  },

  modelAnswer: {
    question:
      'Starting with the extract from Chapter 11, how does Conan Doyle present the effects of the Agra treasure on the people who want it?',
    paragraph:
      "Conan Doyle presents the Agra treasure less as a prize than as a weight on everyone who wants it, and this extract is the moment the weight is lifted. The discovery is written as anticlimax: the short exclamation “The box was empty!” is followed by the emphatic “absolutely and completely empty”, so the prose lingers on an absence rather than a fortune. Mary's words, “The treasure is lost”, are given the single adverb “calmly”, which confirms what Chapter 9 suggested, that she is the one character the treasure cannot tempt. Watson's reaction is more revealing. He feels “a great shadow” pass “from my soul”, and his relief that “the golden barrier was gone from between us” completes his fear in Chapter 7 that the treasure “intervened like an impassable barrier between us”, so its loss feels like a wall coming down, not a loss at all. Across the novel the same wealth ruins those who hold it: Major Sholto confesses that “cursed greed” was his “besetting sin”, Bartholomew is murdered almost as soon as he finds it, and Small, who calls it “a curse”, ends by scattering it in the Thames. Yet the final sentence complicates Conan Doyle's moral. When Watson says he had “gained one”, Mary herself becomes the treasure, which suggests that the language of possession survives even inside love.",
    commentary: [
      'It opens with an argument about the treasure across the novel, not a description of the extract, so everything that follows is evidence for a claim.',
      'It analyses single words, such as “calmly” and the paired adverbs in “absolutely and completely empty”, and names their effect, rather than labelling a technique and moving on.',
      'It links the extract to a precise moment elsewhere, the barrier image in Chapter 7, which shows knowledge of the whole novel and of how its imagery develops.',
      'Its whole-text sentence covers three characters in one sweep with short embedded quotations, which is efficient in a timed, closed-book exam.',
      'It ends by complicating its own argument with an alternative reading of the last line, which is what turns a clear answer into a perceptive one.',
    ],
  },

  timeline: [
    {
      where: 'Chapter 1',
      title: 'The seven-per-cent solution',
      summary:
        'At 221B Baker Street, Watson watches Holmes inject cocaine, as he has three times a day for months, and at last protests as a doctor. Holmes replies that his mind “rebels at stagnation”: given problems and work, he can do without “artificial stimulants”.',
      setting: 'The sitting room at 221B Baker Street, with yellow fog in the street outside',
      who: ['Sherlock Holmes', 'Dr John Watson'],
      quote: 'I abhor the dull routine of existence. I crave for mental exaltation.',
      themes: ['Reason versus emotion (Holmes and Watson)'],
      tension: 2,
      significance:
        'It introduces a detective whose brilliance and self-destruction come from the same restless mind, and the last page returns to this bottle.',
    },
    {
      where: 'Chapter 1',
      title: 'The test of the watch',
      summary:
        "Watson hands Holmes a watch to test his methods. Holmes reads from its marks that it belonged to Watson's elder brother, a careless man, often poor, who took to drink and died, and Watson is hurt until Holmes apologises. With no case on hand, Holmes asks what else there is to live for, and calls Watson to the window to see the yellow fog.",
      setting: 'Baker Street, the same afternoon',
      who: ['Sherlock Holmes', 'Dr John Watson'],
      quote:
        'Viewing the matter as an abstract problem, I had forgotten how personal and painful a thing it might be to you.',
      themes: ['Reason versus emotion (Holmes and Watson)'],
      tension: 2,
      significance:
        'Deduction is shown working and shown hurting: the gap between reason and feeling that the whole novel keeps returning to.',
    },
    {
      where: 'Chapter 2',
      title: "Miss Morstan's statement",
      summary:
        'Mary Morstan, a governess, explains that her father vanished in London in December 1878 and that since May 1882 she has been sent a pearl every year. A letter now calls her “a wronged woman” and summons her to the Lyceum Theatre.',
      setting: 'Baker Street, later the same afternoon',
      who: ['Mary Morstan', 'Sherlock Holmes', 'Dr John Watson'],
      quote: 'You really are an automaton,—a calculating-machine!',
      themes: ['Reason versus emotion (Holmes and Watson)', 'Justice and law'],
      tension: 2,
      significance:
        'Watson is drawn to Mary at once while Holmes calls a client “a mere unit”, so the romance and the reasoning begin in the same chapter.',
    },
    {
      where: 'Chapter 3',
      title: 'Into the fog',
      summary:
        "Mary shows Holmes a plan kept among her father's papers, marked “The sign of the four” with four names, among them Jonathan Small. The three then drive through a dense fog from the Lyceum to an unknown house south of the river.",
      setting: 'The Strand and the Lyceum Theatre in fog, then a cab across the river',
      who: ['Mary Morstan', 'Sherlock Holmes', 'Dr John Watson'],
      quote: 'Mud-coloured clouds drooped sadly over the muddy streets.',
      themes: ['Identity and trust', 'Colonialism and empire'],
      tension: 3,
      significance:
        "The title's phrase appears for the first time, and the fog turns the familiar city into a place where nothing, and no one, can be seen clearly.",
    },
    {
      where: 'Chapter 4',
      title: "Thaddeus Sholto's story",
      summary:
        "In a room crowded with Eastern luxuries, Thaddeus reveals that his father confessed on his deathbed to hiding Captain Morstan's body and keeping the treasure, then died on seeing a face at the window. In the cab to Norwood he explains that his twin, Bartholomew, has found the treasure in a sealed garret.",
      setting: "Thaddeus Sholto's rooms in a new terrace in south London",
      who: [
        'Thaddeus Sholto',
        'Mary Morstan',
        'Sherlock Holmes',
        'Dr John Watson',
        'Major John Sholto',
      ],
      quote:
        'The cursed greed which has been my besetting sin through life has withheld from her the treasure',
      themes: ['Greed and the Agra treasure', 'Colonialism and empire'],
      tension: 3,
      significance:
        "A confession inside a story inside Watson's narrative: the first of the novel's nested accounts, each told by a man explaining what the treasure made him do.",
    },
    {
      where: 'Chapter 5',
      title: 'The locked room at Pondicherry Lodge',
      summary:
        'In the dark grounds, Watson and Mary find their hands joined. Upstairs, Holmes and Watson break down a bolted door to find Bartholomew dead in his chair with a fixed grin, a poisoned thorn above his ear, a note reading “The sign of the four”, and the treasure gone.',
      setting: 'Pondicherry Lodge, Upper Norwood, late at night',
      who: [
        'Sherlock Holmes',
        'Dr John Watson',
        'Mary Morstan',
        'Thaddeus Sholto',
        'Bartholomew Sholto',
        'Mrs Bernstone',
      ],
      quote: 'There is something devilish in this, Watson',
      themes: ['Greed and the Agra treasure', 'Justice and law'],
      tension: 4,
      significance:
        'The mystery of a missing father becomes a murder, and the love story begins at the same moment, in the same grounds.',
    },
    {
      where: 'Chapter 6',
      title: 'Holmes gives a demonstration',
      summary:
        'Holmes reads the room: a wooden-legged man climbed a rope to the window, and a tiny barefoot accomplice came in through the roof. Athelney Jones of Scotland Yard arrives, scorns theories and arrests Thaddeus, and Holmes names the wooden-legged man as Jonathan Small.',
      setting: "Bartholomew Sholto's “chemical laboratory” and the garret above it",
      who: ['Sherlock Holmes', 'Dr John Watson', 'Athelney Jones', 'Thaddeus Sholto'],
      quote:
        'when you have eliminated the impossible whatever remains, however improbable, must be the truth',
      themes: ['Justice and law', 'Reason versus emotion (Holmes and Watson)'],
      tension: 3,
      significance:
        'Private reasoning and official procedure are set side by side, and the police arrest the wrong man within minutes.',
    },
    {
      where: 'Chapter 7',
      title: 'Toby and the trail of creosote',
      summary:
        'Watson takes Mary home, keeping his love to himself above all because the treasure would make her rich, then fetches the dog Toby from Pinchin Lane. At dawn Toby follows the creosote across south London, only to lead them to a barrel in a timber-yard.',
      setting: 'Camberwell, Lambeth and the streets of south London at dawn',
      who: ['Dr John Watson', 'Mary Morstan', 'Sherlock Holmes', 'Toby'],
      quote: 'This Agra treasure intervened like an impassable barrier between us.',
      themes: ['Greed and the Agra treasure', 'Reason versus emotion (Holmes and Watson)'],
      tension: 2,
      significance:
        'The comic anticlimax of the novel, and the clearest statement of the obstacle to the romance: money, not feeling, keeps Watson silent.',
    },
    {
      where: 'Chapter 8',
      title: 'The Baker Street Irregulars',
      summary:
        "The true trail ends at Mordecai Smith's wharf, where Holmes coaxes from Mrs Smith that her husband went off in their steam launch, the Aurora, after a wooden-legged man called for him in the night. At Baker Street, Holmes sends a gang of street boys to search the river and reads out a gazetteer's hostile account of the Andaman Islanders.",
      setting: 'A Thames-side wharf opposite Millbank, then Baker Street',
      who: ['Sherlock Holmes', 'Dr John Watson', 'Mrs Smith', 'Wiggins'],
      quote: 'They can go everywhere, see everything, overhear every one.',
      themes: ['Identity and trust', 'The "Other" and racial representation'],
      tension: 2,
      significance:
        "Holmes's network reaches places the police cannot, and the gazetteer shows colonial prejudice, printed as fact, shaping how the novel sees Tonga before he appears.",
    },
    {
      where: 'Chapter 9',
      title: "Mary's indifference to the fortune",
      summary:
        "Watson tells Mary and Mrs Forrester about the case. Mrs Forrester thrills at the romance of it and pictures Mary rich, but Mary shows no elation, to Watson's quiet delight, and says her only anxiety is to clear Thaddeus of the charge.",
      setting: "Mrs Cecil Forrester's house in Camberwell",
      who: ['Dr John Watson', 'Mary Morstan', 'Mrs Cecil Forrester'],
      quote: 'It is for Mr. Thaddeus Sholto that I am anxious',
      themes: ['Greed and the Agra treasure', 'Justice and law'],
      tension: 1,
      significance:
        'Mary is the one character the treasure does not tempt, which is why the novel can make her its moral centre.',
    },
    {
      where: 'Chapter 9',
      title: 'The old sailor',
      summary:
        "When no news of the launch comes, Holmes paces through one night and works at chemistry into the small hours of the next, then leaves at dawn in a sailor's disguise. That afternoon an old seaman arrives at Baker Street, fools both Watson and a humbled Athelney Jones, and turns out to be Holmes, who now plans a trap on the river.",
      setting: 'The sitting room at Baker Street',
      who: ['Sherlock Holmes', 'Dr John Watson', 'Athelney Jones'],
      quote: 'You would have made an actor, and a rare one.',
      themes: ['Identity and trust', 'Justice and law'],
      tension: 3,
      significance:
        "Disguise lets the detective pass unseen among the river's working people, and the official police now agree to take orders from the amateur.",
    },
    {
      where: 'Chapter 10',
      title: 'The chase down the Thames',
      summary:
        'A police launch chases the Aurora down the Thames at night. Tonga raises his blowpipe, Holmes and Watson fire, and he falls into the river; Small runs the launch aground and is trapped when his wooden leg sinks into the mud.',
      setting: 'The Thames from the Tower to the Plumstead Marshes, at night',
      who: ['Sherlock Holmes', 'Dr John Watson', 'Athelney Jones', 'Jonathan Small', 'Tonga'],
      quote:
        'never did sport give me such a wild thrill as this mad, flying man-hunt down the Thames',
      themes: ['Justice and law', 'The "Other" and racial representation'],
      tension: 5,
      significance:
        'The action climax, which Watson calls sport, and in which Tonga, who is never given a line of his own to speak, dies in the river.',
    },
    {
      where: 'Chapter 11',
      title: 'The empty box',
      summary:
        'Small blames Tonga for the murder and calls the treasure a curse. Watson carries the iron box to Mary, forces it open with a poker and finds it empty; Mary says calmly that the treasure is lost, and Watson, relieved, declares his love.',
      setting: "The police launch's cabin, then Mrs Cecil Forrester's drawing-room",
      who: ['Jonathan Small', 'Sherlock Holmes', 'Dr John Watson', 'Mary Morstan'],
      quote: 'Whoever had lost a treasure, I knew that night that I had gained one.',
      themes: ['Greed and the Agra treasure', 'Reason versus emotion (Holmes and Watson)'],
      tension: 4,
      significance:
        "The emotional climax comes before the explanation: the romance is resolved by the treasure's absence, a chapter before anyone learns where it went.",
    },
    {
      where: 'Chapter 12',
      title: "Small's story of Agra",
      summary:
        "Small admits he has scattered the jewels along the Thames. His confession goes back to 1857: a young ex-soldier who had lost a leg to a crocodile, he helped three Sikh partners murder the merchant Achmet in the fort at Agra for a rajah's jewels, and all four were convicted.",
      setting: 'Baker Street at night; in flashback, the fort at Agra during the uprising of 1857',
      who: [
        'Jonathan Small',
        'Sherlock Holmes',
        'Dr John Watson',
        'Athelney Jones',
        'Abdullah Khan',
        'Mahomet Singh',
        'Dost Akbar',
        'Achmet',
      ],
      quote:
        'We only ask you to do that which your countrymen come to this land for. We ask you to be rich.',
      themes: ['Colonialism and empire', 'Greed and the Agra treasure', 'Justice and law'],
      tension: 4,
      significance:
        'The crime behind the whole plot happened about thirty years earlier, thousands of miles away, and began as a murder for loot in a war of empire.',
    },
    {
      where: 'Chapter 12',
      title: "Sholto's betrayal and Small's revenge",
      summary:
        "In the Andaman Islands convict settlement, Small sold the secret to two officers in debt, Major Sholto and Captain Morstan, in return for the four men's freedom. Sholto took the treasure and never came back; Small escaped with Tonga's help, striking down a guard with his wooden leg, and spent years hunting him.",
      setting: 'In flashback, the convict settlement in the Andaman Islands, then England',
      who: ['Jonathan Small', 'Major John Sholto', 'Captain Arthur Morstan', 'Tonga'],
      quote: 'From that day I lived only for vengeance.',
      themes: ['Justice and law', 'Identity and trust', 'Greed and the Agra treasure'],
      tension: 4,
      significance:
        "The respectable officer, not the convict, breaks his sworn word first, which gives weight to what Holmes said before the story began: that justice may once have been on Small's side.",
    },
    {
      where: 'Chapter 12',
      title: 'The division of rewards',
      summary:
        'After Jones takes Small away, Watson announces that Mary has accepted him. Holmes cannot congratulate him, since love is opposed to “true cold reason”; Watson has a wife, Jones the credit, and Holmes reaches for the cocaine.',
      setting: 'Baker Street, late at night',
      who: ['Sherlock Holmes', 'Dr John Watson'],
      quote: 'there still remains the cocaine-bottle',
      themes: ['Reason versus emotion (Holmes and Watson)'],
      tension: 2,
      significance:
        'The ending shares out the rewards unevenly and returns to the opening image, so the book closes on Holmes alone with the bottle.',
    },
  ],

  relationships: [
    {
      from: 'Sherlock Holmes',
      to: 'Dr John Watson',
      kind: 'friends and fellow lodgers; detective and narrator',
      note: 'Watson admires and records Holmes but is not his echo: he protests at the cocaine, is hurt by the watch deduction and falls in love with a client, although Holmes holds that “the emotional qualities are antagonistic to clear reasoning”. At the end he fears this may be the last case he shares.',
    },
    {
      from: 'Dr John Watson',
      to: 'Mary Morstan',
      kind: 'love, then engagement',
      note: 'Their hands meet in the grounds of Pondicherry Lodge in Chapter 5, the treasure keeps Watson silent in Chapter 7, and its loss frees him to speak in Chapter 11. By Chapter 12 she has accepted him.',
    },
    {
      from: 'Sherlock Holmes',
      to: 'Athelney Jones',
      kind: 'amateur and official detective',
      note: 'Jones calls Holmes “the theorist” and arrests Thaddeus; by Chapter 9 he is meek, calls Holmes “a wonderful man” and takes his orders. Holmes lets him keep the official credit.',
    },
    {
      from: 'Jonathan Small',
      to: 'Tonga',
      kind: 'fugitive and devoted companion, on unequal terms',
      note: "Small nursed Tonga through an illness and calls him faithful, but he also exhibited him at fairs for money and beat him with a rope's end after the murder. The novel never lets Tonga speak for himself.",
    },
    {
      from: 'Jonathan Small',
      to: 'Major John Sholto',
      kind: 'betrayed partner and avenger',
      note: 'Sholto broke the bargain made in the Andamans and sailed home with the whole treasure. From then on Small lived “only for vengeance”, though Sholto died, as Small watched through the window, before Small could reach him.',
    },
    {
      from: 'Major John Sholto',
      to: 'Captain Arthur Morstan',
      kind: 'brother officers and friends, then rivals',
      note: "Small calls them “bosom friends”, yet they quarrel over dividing the treasure on the night Morstan reaches London, and Sholto hides his friend's body rather than face an inquiry.",
    },
    {
      from: 'Thaddeus Sholto',
      to: 'Bartholomew Sholto',
      kind: 'twin brothers',
      note: "Thaddeus sends Mary the pearls and wants to share the treasure with her; Bartholomew, who Thaddeus says shared a little of their father's fault, resists. The quarrel sends Thaddeus to live apart, and suspicion falls on him when his twin is murdered.",
    },
    {
      from: 'Thaddeus Sholto',
      to: 'Mary Morstan',
      kind: 'guilty heir and wronged heiress',
      note: 'Thaddeus sees the brothers as her “trustees” and writes the letter that draws her into the case. Mary repays him: in Chapter 9 her only anxiety is to clear his name.',
    },
    {
      from: 'Jonathan Small',
      to: 'Abdullah Khan',
      kind: 'sworn partners in the sign of the four',
      note: 'Abdullah Khan and Mahomet Singh seize Small at his post and draw him into the plot, and all four men swear to act together. Small says he kept that oath to the end, throwing the jewels into the river rather than let anyone else have them.',
    },
    {
      from: 'Mary Morstan',
      to: 'Mrs Cecil Forrester',
      kind: 'governess and employer, treated as a friend',
      note: "Watson sees that Mary is “no mere paid dependant, but an honoured friend”. Mrs Forrester's delight in the case as “a romance” sets off Mary's calm indifference to the fortune.",
    },
    {
      from: 'Captain Arthur Morstan',
      to: 'Mary Morstan',
      kind: 'father and daughter',
      note: 'He sent her home to school in Edinburgh as a child and vanished on the night he arrived in London. The whole plot begins as her need to know what happened to him.',
    },
    {
      from: 'Sherlock Holmes',
      to: 'Wiggins',
      kind: 'employer and leader of the street boys',
      note: 'Holmes pays the Irregulars a shilling each a day, with a guinea for whoever finds the boat, because they go where police cannot. He calls Wiggins his “dirty little lieutenant”.',
    },
  ],

  compareWith: [
    {
      title: 'The Strange Case of Dr Jekyll and Mr Hyde',
      href: '/revision/texts/jekyll-and-hyde',
      reason:
        "Also on the AQA list: another fog-bound London of respectable surfaces and hidden crimes, which ends, as The Sign of Four does, by handing the story to the wrongdoer's own full statement.",
    },
    {
      title: 'Great Expectations',
      href: '/revision/texts/great-expectations',
      reason:
        "Also on the AQA list: a convict who has made money in a colony returns to London, and an escape by boat down the Thames ends in capture, as Small's does.",
    },
  ],

  contentGuidance: [
    'violence',
    'crime_injustice',
    'mortality',
    'addiction',
    'discrimination',
    'colonialism',
    'intimate_relationships',
  ],

  sources: [
    {
      label:
        'The Sign of Four, Project Gutenberg eBook #2097, held as a byte copy at src/data/full-texts/the-sign-of-four.ts. Every quotation, speaker, chapter and plot fact in this file checked against it by reading the whole novel, three times: once by the first writer, again chapter by chapter in the second pass, and again in a third, adversarial pass on 26 September 2026. The second and third passes each located every quoted phrase mechanically by chapter and paragraph.',
      url: 'https://www.gutenberg.org/ebooks/2097',
    },
    {
      label:
        "Wikipedia, The Sign of the Four: first published in the February 1890 issue of Lippincott's Monthly Magazine as The Sign of the Four; book edition by Spencer Blackett, October 1890; editions vary between the two titles; the text nearly always says the sign of the four, and Small twice says the sign of four.",
      url: 'https://en.wikipedia.org/wiki/The_Sign_of_the_Four',
    },
    {
      label:
        "Arthur Conan Doyle Encyclopedia, The Sign of Four: Lippincott's Monthly Magazine, February 1890; Spencer Blackett, 1 October 1890; the twelve chapter titles.",
      url: 'https://www.arthur-conan-doyle.com/index.php/The_Sign_of_Four',
    },
    {
      label:
        'AQA GCSE English Literature 8702 specification, version 1.3, 28 September 2022: The Sign of Four is one of seven set 19th-century novels, studied as a whole text; Paper 1 Section B requires detailed writing on an extract and then on the novel as a whole; all assessments are closed book. Re-read from the PDF on 26 September 2026 (third pass).',
      url: 'https://filestore.aqa.org.uk/resources/english/specifications/AQA-8702-SP-2015.PDF',
    },
    {
      label:
        "Wikipedia, Arthur Conan Doyle: studied medicine at Edinburgh 1876 to 1881 and graduated M.B. C.M. in 1881; A Study in Scarlet appeared in Beeton's Christmas Annual, 1887. Cross-checked with the Arthur Conan Doyle Encyclopedia biography.",
      url: 'https://en.wikipedia.org/wiki/Arthur_Conan_Doyle',
    },
    {
      label:
        "Arthur Conan Doyle Encyclopedia, biography: M.B. C.M. Edinburgh 1881; A Study in Scarlet in Beeton's Christmas Annual 1887; The Sign of Four 1890.",
      url: 'https://www.arthur-conan-doyle.com/index.php/Arthur_Conan_Doyle',
    },
    {
      label:
        'Wikipedia, Indian Rebellion of 1857: an uprising of 1857 to 1858 against the rule of the East India Company, which began on 10 May 1857 as a mutiny of sepoys at Meerut; also called the Indian Mutiny and the First War of Independence; followed by the end of Company rule and direct Crown rule under the Government of India Act 1858.',
      url: 'https://en.wikipedia.org/wiki/Indian_Rebellion_of_1857',
    },
    {
      label:
        'Wikipedia, Port Blair: the British re-established a colony at Port Blair on 22 February 1858, and a new penal colony nearby, on Ross Island, mainly to house prisoners of the Indian rebellion of 1857; the first 200 convicts arrived in March 1858. Rechecked 26 September 2026 (third pass).',
      url: 'https://en.wikipedia.org/wiki/Port_Blair',
    },
    {
      label:
        'Wikipedia, Cellular Jail: rebels of 1857 exiled to the Andamans for life after the rebellion.',
      url: 'https://en.wikipedia.org/wiki/Cellular_Jail',
    },
    {
      label:
        'Wikipedia, Penal servitude: penal labour is forced labour required of prisoners; penal servitude replaced transportation under the Penal Servitude Acts of 1853 and 1857.',
      url: 'https://en.wikipedia.org/wiki/Penal_servitude',
    },
    {
      label:
        'Wiktionary, for the glossary: khitmatgar (khitmutgar: a male servant in British India who waited at table, from Hindustani, from Classical Persian), valetudinarian, Feringhee (obsolete spelling of firangi: a foreigner, from Hindustani via Persian farangi), sepoy, sahib (from Hindustani sahib, lord, via Persian from Arabic), wherry, chaplet, risus sardonicus (characteristic of tetanus and strychnine poisoning), street Arab (dated), hypochondriac, agony column, creosote, half-pay, monograph. Khitmatgar, firangi, sahib, valetudinarian, chaplet, street Arab, risus sardonicus and half-pay rechecked in the second pass.',
      url: 'https://en.wiktionary.org/',
    },
    {
      label:
        "For compareWith: Wikipedia, Abel Magwitch (transported to New South Wales, grew rich, returned to London, captured on the Thames during an escape by boat); and the held edition of Jekyll and Hyde, src/data/full-texts/jekyll-and-hyde.ts, whose last chapter is Henry Jekyll's Full Statement of the Case.",
      url: 'https://en.wikipedia.org/wiki/Abel_Magwitch',
    },
  ],
}
