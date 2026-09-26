import type { StudyGuide } from '@/lib/study-guides/types'

/**
 * Great Expectations, Charles Dickens (1860 to 1861). A supplement: the page at
 * /revision/texts/great-expectations keeps its overview, context, themes,
 * characters, key quotations and exam practice, and this file adds what it
 * lacked (passages for close reading, language analysis, structure and form,
 * vocabulary) together with the timeline and character map the visuals draw.
 *
 * No edition of this novel is held in src/data/full-texts, so the test cannot
 * check these quotations. Every passage, scene-card quotation and quoted phrase
 * below was copied from Project Gutenberg eBook #1400 and matched against it
 * word for word, and its speaker and chapter were checked by reading the
 * chapter it comes from, not by searching for the phrase alone. Chapter numbers
 * are the continuous 1 to 59 of that edition.
 *
 * SECOND PASS (25 September 2026). Every quoted string was re-checked against
 * the same edition by script, chapter by chapter, and the plot statements read
 * against their chapters. The quotations all held; several summaries did not.
 * The theft was dated to Christmas Eve (it is at first light on Christmas
 * morning, Chapter 2); on the river it read as if Magwitch pulled the cloak from
 * his own face (it is Compeyson's, Chapter 54); Pip was said to repeat Miss
 * Havisham's "Love her" to his pillow (he adapts it to "I love her", Chapter
 * 29); and Pip's return to Satis House in Chapter 59 is the evening after he
 * reaches the forge, not the same one. Check a summary against its chapter as
 * hard as a quotation.
 *
 * THIRD PASS (26 September 2026, adversarial check). All 117 quoted strings
 * matched the Gutenberg text again, in the chapters cited. The paraphrase still
 * drifted in places, and these were corrected: Miss Havisham's "Break their
 * hearts" is murmured while she embraces Estella at cards (Chapter 12), not
 * while Pip wheels her chair; Magwitch tells his story at breakfast in Pip's
 * chambers, having come round from his lodging in Essex Street (Chapters 41 and
 * 42), so he is not "hidden" there; Miss Havisham admits she "let" Pip go on in
 * his mistake (Chapter 44), she told him no lie; Pip sees the fire after going
 * back upstairs to check on her (Chapter 49); Magwitch pulls the cloak from
 * Compeyson's neck (Chapter 54); Biddy's wedding is in June (Chapter 58); Pip
 * sets little Pip on the tombstone (Chapter 59); Estella says they "will
 * continue friends apart", she does not say she hopes it; the premium bag is
 * handed to Pip to give to Joe (Chapter 13); Pip kicks a wall in the brewery
 * lane (Chapter 8). The AQA source now claims only what was checked on AQA's
 * own page, that it prints "Great Expectations (1867)".
 *
 * The existing page above this supplement carries several quotations that are
 * not in the novel in the form printed, and a quiz answer that has Magwitch die
 * awaiting trial. They are listed in the report that produced this file; none
 * of them is repeated here.
 */
export const guide: StudyGuide = {
  slug: 'great-expectations',
  title: 'Great Expectations',
  author: 'Charles Dickens',
  form: 'novel',
  scope:
    "The whole novel: fifty-nine chapters, divided by Dickens into three stages of Pip's expectations (Chapters 1 to 19, 20 to 39 and 40 to 59), first published weekly in All the Year Round from December 1860 to August 1861 and as a book in 1861.",
  rights: {
    status: 'public-domain',
    acknowledgement:
      "First published in weekly parts in All the Year Round (1860 to 1861) and in three volumes by Chapman and Hall in 1861. Passages and quotations follow the Project Gutenberg edition, eBook #1400, which Project Gutenberg labels the 1867 edition, the edition AQA's GCSE specification names; editions based on the 1861 text differ from it in some punctuation and in the wording of the final sentence.",
  },

  native: {
    overview: '/revision/texts/great-expectations',
    context: '/revision/texts/great-expectations',
    themes: '/revision/texts/great-expectations',
    characters: '/revision/texts/great-expectations',
    keyQuotes: '/revision/texts/great-expectations',
    examPractice: '/revision/texts/great-expectations',
    modelAnswer: '/revision/texts/great-expectations',
  },

  extracts: [
    {
      title: 'Pip meets the convict',
      where: 'Chapter 1',
      pointer:
        'The third paragraph of the novel and the two that follow: from “Ours was the marsh country” to “as he seized me by the chin.”',
      text: 'Ours was the marsh country, down by the river, within, as the river wound, twenty miles of the sea. My first most vivid and broad impression of the identity of things seems to me to have been gained on a memorable raw afternoon towards evening. At such a time I found out for certain that this bleak place overgrown with nettles was the churchyard; and that Philip Pirrip, late of this parish, and also Georgiana wife of the above, were dead and buried; and that Alexander, Bartholomew, Abraham, Tobias, and Roger, infant children of the aforesaid, were also dead and buried; and that the dark flat wilderness beyond the churchyard, intersected with dikes and mounds and gates, with scattered cattle feeding on it, was the marshes; and that the low leaden line beyond was the river; and that the distant savage lair from which the wind was rushing was the sea; and that the small bundle of shivers growing afraid of it all and beginning to cry, was Pip.\n\n“Hold your noise!” cried a terrible voice, as a man started up from among the graves at the side of the church porch. “Keep still, you little devil, or I’ll cut your throat!”\n\nA fearful man, all in coarse grey, with a great iron on his leg. A man with no hat, and with broken shoes, and with an old rag tied round his head. A man who had been soaked in water, and smothered in mud, and lamed by stones, and cut by flints, and stung by nettles, and torn by briars; who limped, and shivered, and glared, and growled; and whose teeth chattered in his head as he seized me by the chin.',
      annotations: [
        {
          phrase: 'the dark flat wilderness beyond the churchyard',
          note: 'A “wilderness” is a place outside human order, and the marshes lie beyond even the churchyard, the last sign of settled life. The flat, dark land has no shelter in it, so the setting makes the child look exposed before anyone appears.',
        },
        {
          phrase: 'the distant savage lair from which the wind was rushing was the sea',
          note: 'Personification turns the sea into a wild animal and the wind into something hunting, so danger is building before the convict arrives. The word “lair” prepares us for a man who will later growl like a beast.',
        },
        {
          phrase:
            'the small bundle of shivers growing afraid of it all and beginning to cry, was Pip',
          note: 'The long sentence has listed graves, marshes, river and sea with “and that”, and it ends on the smallest thing in the landscape. The older narrator sees his younger self from outside, as an object, with gentle irony and pity at once.',
        },
        {
          phrase: 'Keep still, you little devil, or I’ll cut your throat!',
          note: 'After a slow, winding sentence, two short imperatives break in. The shock is in the rhythm as much as the threat, and the reader is jolted exactly as Pip is.',
        },
        {
          phrase: 'A fearful man, all in coarse grey, with a great iron on his leg.',
          note: "A minor sentence with no main verb, like a child taking in details in the order he sees them. “Fearful” works both ways: the man causes fear and is full of it. The leg-iron starts the novel's chain of iron images, and “coarse” is the word Estella will later use of Pip's hands.",
        },
        {
          phrase: 'who limped, and shivered, and glared, and growled',
          note: "Polysyndeton piles up verbs of suffering (limped, shivered) beside verbs of threat (glared, growled). Dickens lets the reader feel the child's terror while noticing that this man is cold, hurt and hunted, which prepares for the sympathy the novel will later ask for.",
        },
      ],
      question:
        "Starting with this extract, explore how Dickens presents fear. Write about how he presents Pip's fear in this extract, and how he presents fear, and the people who cause it, in the novel as a whole.",
    },
    {
      title: 'The first sight of Miss Havisham',
      where: 'Chapter 8',
      pointer:
        "Pip's first visit to Satis House, just after he enters the candlelit dressing-room: from “Whether I should have made out this object so soon” to “had stopped at twenty minutes to nine.”",
      text: 'Whether I should have made out this object so soon if there had been no fine lady sitting at it, I cannot say. In an arm-chair, with an elbow resting on the table and her head leaning on that hand, sat the strangest lady I have ever seen, or shall ever see.\n\nShe was dressed in rich materials,—satins, and lace, and silks,—all of white. Her shoes were white. And she had a long white veil dependent from her hair, and she had bridal flowers in her hair, but her hair was white. Some bright jewels sparkled on her neck and on her hands, and some other jewels lay sparkling on the table. Dresses, less splendid than the dress she wore, and half-packed trunks, were scattered about. She had not quite finished dressing, for she had but one shoe on,—the other was on the table near her hand,—her veil was but half arranged, her watch and chain were not put on, and some lace for her bosom lay with those trinkets, and with her handkerchief, and gloves, and some flowers, and a Prayer-Book all confusedly heaped about the looking-glass.\n\nIt was not in the first few moments that I saw all these things, though I saw more of them in the first moments than might be supposed. But I saw that everything within my view which ought to be white, had been white long ago, and had lost its lustre and was faded and yellow. I saw that the bride within the bridal dress had withered like the dress, and like the flowers, and had no brightness left but the brightness of her sunken eyes. I saw that the dress had been put upon the rounded figure of a young woman, and that the figure upon which it now hung loose had shrunk to skin and bone. Once, I had been taken to see some ghastly waxwork at the Fair, representing I know not what impossible personage lying in state. Once, I had been taken to one of our old marsh churches to see a skeleton in the ashes of a rich dress that had been dug out of a vault under the church pavement. Now, waxwork and skeleton seemed to have dark eyes that moved and looked at me. I should have cried out, if I could.\n\n“Who is it?” said the lady at the table.\n\n“Pip, ma’am.”\n\n“Pip?”\n\n“Mr. Pumblechook’s boy, ma’am. Come—to play.”\n\n“Come nearer; let me look at you. Come close.”\n\nIt was when I stood before her, avoiding her eyes, that I took note of the surrounding objects in detail, and saw that her watch had stopped at twenty minutes to nine, and that a clock in the room had stopped at twenty minutes to nine.',
      annotations: [
        {
          phrase: 'the strangest lady I have ever seen, or shall ever see',
          note: 'The older narrator speaks across the whole of his life, past and future, and fixes Miss Havisham as unique. The tense shift to “shall” reminds us that this is a memory told by a man who knows what she will mean to him.',
        },
        {
          phrase: 'but her hair was white',
          note: 'The paragraph repeats “white” for bridal purity, then turns it with “but”: the white of her hair is age, not innocence. One word carries both the wedding day and the years that have passed since it.',
        },
        {
          phrase: 'she had but one shoe on',
          note: 'The half-finished dressing freezes a single moment: she stopped mid-action and never went on. The detail is almost comic, and that makes the idea of a life halted at one instant more unsettling.',
        },
        {
          phrase: 'had withered like the dress, and like the flowers',
          note: "The simile puts the woman on the same level as her clothes and her bouquet. She has become one more decaying object in the room, which is the novel's first image of what refusing to let time move does to a person.",
        },
        {
          phrase: 'waxwork and skeleton seemed to have dark eyes that moved and looked at me',
          note: 'Gothic imagery of the living dead: Pip joins two childhood memories, a fairground figure and a body dug from a vault, and they come alive in her. The horror is that the corpse-like figure is watching him.',
        },
        {
          phrase: 'I should have cried out, if I could.',
          note: 'After long, piled-up sentences, a short one. Pip is struck still, as frozen as the room itself, and the reader feels his paralysis in the sudden stop.',
        },
        {
          phrase: 'had stopped at twenty minutes to nine',
          note: "The stopped watch and clock are the scene's central symbol. Miss Havisham has halted time at the moment of her humiliation, and the rest of her story shows the cost of living inside one moment for decades.",
        },
      ],
      question:
        'Starting with this extract, explore how Dickens presents Miss Havisham as a woman trapped by the past. Write about how he presents her in this extract, and in the novel as a whole.',
    },
    {
      title: 'Magwitch reveals himself',
      where: 'Chapter 39',
      pointer:
        "Near the middle of the chapter, after Magwitch guesses the first letter of Jaggers's name and Pip nearly faints: from “Yes, Pip, dear boy, I’ve made a gentleman on you!” to “and beat ’em!”",
      text: '“Yes, Pip, dear boy, I’ve made a gentleman on you! It’s me wot has done it! I swore that time, sure as ever I earned a guinea, that guinea should go to you. I swore arterwards, sure as ever I spec’lated and got rich, you should get rich. I lived rough, that you should live smooth; I worked hard, that you should be above work. What odds, dear boy? Do I tell it, fur you to feel a obligation? Not a bit. I tell it, fur you to know as that there hunted dunghill dog wot you kep life in, got his head so high that he could make a gentleman,—and, Pip, you’re him!”\n\nThe abhorrence in which I held the man, the dread I had of him, the repugnance with which I shrank from him, could not have been exceeded if he had been some terrible beast.\n\n“Look’ee here, Pip. I’m your second father. You’re my son,—more to me nor any son. I’ve put away money, only for you to spend. When I was a hired-out shepherd in a solitary hut, not seeing no faces but faces of sheep till I half forgot wot men’s and women’s faces wos like, I see yourn. I drops my knife many a time in that hut when I was a-eating my dinner or my supper, and I says, ‘Here’s the boy again, a looking at me whiles I eats and drinks!’ I see you there a many times, as plain as ever I see you on them misty marshes. ‘Lord strike me dead!’ I says each time,—and I goes out in the air to say it under the open heavens,—‘but wot, if I gets liberty and money, I’ll make that boy a gentleman!’ And I done it. Why, look at you, dear boy! Look at these here lodgings of yourn, fit for a lord! A lord? Ah! You shall show money with lords for wagers, and beat ’em!”',
      annotations: [
        {
          phrase: 'I’ve made a gentleman on you! It’s me wot has done it!',
          note: "Dialect (“on you”, “wot”) and exclamations give Magwitch's voice its rough energy. The verb “made” matters: he speaks like a craftsman proud of a finished object, which is how Miss Havisham treats Estella, and which Pip experiences as horror.",
        },
        {
          phrase:
            'I lived rough, that you should live smooth; I worked hard, that you should be above work.',
          note: "Balanced antithesis gives the sacrifice a moving dignity. It is also ironic: the novel values honest work, as Joe's forge does, so being “above work” is the very thing that has made Pip idle and in debt.",
        },
        {
          phrase: 'that there hunted dunghill dog wot you kep life in',
          note: 'Magwitch describes himself in the language society used against him, an animal lower than a dog. The phrase also reminds Pip, and the reader, that his own childhood act of feeding a starving man is where this fortune began.',
        },
        {
          phrase: 'could not have been exceeded if he had been some terrible beast',
          note: "The narrator records his younger self's reaction without softening it. The three nouns (abhorrence, dread, repugnance) build to “beast”, just after Magwitch has called himself a dog: Pip accepts the label that Magwitch was trying to rise above.",
        },
        {
          phrase: 'I’m your second father.',
          note: 'A short, simple claim of kinship. The reader knows Pip already has a father-figure in Joe, whom he has neglected, so “second” is painfully ironic, and the novel will test which kind of father counts.',
        },
        {
          phrase: 'not seeing no faces but faces of sheep',
          note: "The double negative is Magwitch's dialect, but the image is of extreme loneliness in the colony. Pip's remembered face kept him going, which makes Pip's disgust in this scene all the more cruel.",
        },
      ],
      question:
        'Starting with this extract, explore how Dickens presents the relationship between Pip and Magwitch. Write about how he presents it in this extract, and how it develops in the novel as a whole.',
    },
  ],

  languageAnalysis: [
    {
      technique: 'Retrospective first-person narration and self-judgement',
      example:
        "Before Joe's visit in Chapter 27 the older Pip admits, “If I could have kept him away by paying money, I certainly would have paid money”, and during it, “I had neither the good sense nor the good feeling to know that this was all my fault”.",
      effect:
        'Two voices speak at once: the young snob who felt it, and the older narrator who records it without excuse. The flat, balanced syntax of the first sentence makes the snobbery sound like a business calculation, which is exactly what it was. Because the narrator refuses to flatter his past self, the reader trusts him. One reading is that the honesty is itself a kind of repayment: the book is the apology Pip could not make to Joe at the time.',
    },
    {
      technique: 'Polysyndeton and accumulation',
      example:
        'In Chapter 1 the convict is “soaked in water, and smothered in mud, and lamed by stones, and cut by flints, and stung by nettles, and torn by briars”.',
      effect:
        "Each “and” adds another injury, so the sentence itself seems to limp along. The passive verbs matter: all these things have been done to him. On the surface the passage is a child's terror, but the list quietly asks for pity, preparing the reader for the revelation that this frightening man is the most generous figure in Pip's life.",
    },
    {
      technique: 'Gothic imagery and the symbolism of decay',
      example:
        'In Chapter 11 the cobwebbed centrepiece on the feast table, which Miss Havisham reveals is her bride-cake, seems to grow “like a black fungus”, with “speckle-legged spiders with blotchy bodies running home to it”; in Chapter 8 the bride “had withered like the dress, and like the flowers”.',
      effect:
        "Dickens borrows the Gothic's ruined house, living corpse and darkness, but uses them psychologically. Food meant for a celebration has become a breeding ground, and a woman has become part of her furniture. The imagery argues that refusing to let time pass does not preserve the past but rots it. The comic touch of the busy spiders keeps the scene grotesque rather than simply horrifying, which is typical of Dickens.",
    },
    {
      technique: 'Pathetic fallacy and repetition',
      example:
        'Early in Chapter 39 the weather is “stormy and wet, stormy and wet; and mud, mud, mud, deep in all the streets”, and the wind rushing up the river shakes the house where Pip lives “like discharges of cannon, or breakings of a sea”.',
      effect:
        "The heavy, repeated words create dread before anything has happened, and the storm keeps sounding through the scene until Pip says he “could not separate his voice from those voices”. The weather arrives with Magwitch and wrecks Pip's world with him. At the end of the chapter Dickens turns it into Pip's own metaphor: he sees that “the ship in which I had sailed was gone to pieces”.",
    },
    {
      technique: 'Dialect and idiolect',
      example:
        'Joe in Chapter 27: “Diwisions among such must come, and must be met as they come.” Magwitch in Chapter 39: “It’s me wot has done it!”',
      effect:
        "Dickens spells out the sounds of working-class speech, and a snobbish reader, like the young Pip, might laugh at them. The novel then gives some of its wisest and most loving words to its least correct speakers. Joe's farewell is plain, rhythmic and exact about who he is; Magwitch's broken grammar carries years of devotion. The gap between how they speak and what they mean is the novel's argument about class in miniature: correct speech can be learnt, and so can snobbery, but decency shows itself either way.",
    },
    {
      technique: 'Extended metaphor of iron, chains and the forge',
      example:
        'Chapter 9 asks the reader to think of “the long chain of iron or gold, of thorns or flowers” that one day can begin; Joe says life is “ever so many partings welded together” (Chapter 27); Pip feels Magwitch has loaded him with “gold and silver chains” (Chapter 39).',
      effect:
        "The novel opens with a leg-iron and a stolen file, and its images keep returning to metal. Chains suggest that people are bound by what happens to them and by what they owe. Joe's version is the gentlest, a blacksmith's way of making parting part of the work of life. Pip's is the bitterest: the fortune that looked like freedom is really another fetter, forged by a convict.",
    },
    {
      technique: 'Repetition, anaphora and the imperative',
      example:
        'In Chapter 29 Miss Havisham commands, “Love her, love her, love her!”, and Pip confesses that he loved Estella “against reason, against promise, against peace, against hope, against happiness, against all discouragement that could be”.',
      effect:
        "Miss Havisham's triple imperative sounds less like advice than a spell, and that night Pip adapts it into “I love her, I love her, I love her!” and says it to his pillow “hundreds of times”. His own sentence works the other way: the anaphora piles up everything his love defies, so the syntax acts out a will overriding judgement. Together they present love in this novel as something taught, repeated and obeyed, and the older narrator knows it.",
    },
    {
      technique: 'Legal language and rhetorical repetition',
      example:
        "In Chapter 51 Jaggers tells Estella's history without admitting anything, as a hypothetical: “Put the case that a woman, under such circumstances as you have mentioned, held her child concealed”, and he repeats “Put the case” again and again.",
      effect:
        'Jaggers speaks like a barrister building an argument in court, so even a story about saving a child comes out cold and careful. The repeated formula lets him confess the truth while protecting himself, which is typical of a man who “washed his clients off, as if he were a surgeon or a dentist” (Chapter 26). Yet the case he puts is about pity for children who grow up “to be hanged”, so the legal manner, which admits nothing, half hides the one kind act the case reveals.',
    },
    {
      technique: 'Hands as a recurring symbol',
      example:
        "Estella's scorn in Chapter 8, “And what coarse hands he has! And what thick boots!”; Mrs Joe's “hard and heavy hand” in Chapter 2; the hands of Jaggers's housekeeper, which Pip compares “with other hands” in Chapter 48.",
      effect:
        "Hands carry class, violence and guilt. Pip's working hands shame him; Mrs Joe's are for beating; Jaggers scrubs his after every case; the housekeeper's give away Estella's parentage. Near the end the symbol turns tender: Pip burns his hands saving Miss Havisham, and Magwitch dies with Pip's hand on his breast. Tracing hands is an effective way to write about the whole novel in an answer on a single extract.",
    },
    {
      technique: 'Caricature and tag phrases',
      example:
        "Wemmick's motto, “Get hold of portable property” (Chapter 24); Joe's “what larks” and his “Ever the best of friends”, which return in Chapter 57.",
      effect:
        "Dickens fixes characters in the memory with a repeated phrase or habit, a method well suited to readers following a story week by week. The tags are comic, but they also carry meaning: Wemmick's shows how a London clerk survives among money and crime, while Joe's become a moral touchstone. When Joe says “what larks” at Pip's sickbed, the old phrase measures how far Pip has travelled and how little Joe has changed.",
    },
  ],

  structureForm: [
    {
      heading: 'A retrospective first-person bildungsroman',
      body: "Pip tells his own story from many years later, and the gap between the two Pips shapes every page. The older narrator knows how things end, so he can judge his younger self and draw general lessons in the present tense: “It is a most miserable thing to feel ashamed of home” (Chapter 14). A bildungsroman follows a young person's growth to maturity. This one follows a boy educated into the wrong values and then, painfully, out of them. One reading is that the telling is the final stage of that education: Pip has learnt to see himself clearly enough to write the book, and the self-criticism is the proof. Another is that he is still shaping the story in his own favour. The first is more convincing, because the narrator keeps choosing the most damaging version of his own behaviour.",
    },
    {
      heading: 'Three stages, three volumes',
      body: "Dickens divides the novel into three stages and marks the end of the first two in capitals: “THIS IS THE END OF THE FIRST STAGE OF PIP’S EXPECTATIONS” closes Chapter 19, and the same line for the second stage closes Chapter 39. The first stage is childhood on the marshes and at Satis House; the second is Pip's life as a gentleman in London; the third is the unravelling and the reckoning. The stages run to 19, 20 and 20 chapters, and in the first book edition of 1861 each filled one of three volumes and numbered its chapters from one again, so some editions call Chapter 39 Chapter XX of Volume II. Each stage ends at a threshold. The first ends in the morning, as the mists rise and “the world lay spread before me”; the second ends after Magwitch's return in “the thick black darkness”. Set side by side, the two endings trace the whole arc of Pip's hopes.",
    },
    {
      heading: 'Written for weekly parts',
      body: "The novel first appeared in thirty-six weekly instalments in Dickens's own magazine, All the Year Round, from 1 December 1860 to 3 August 1861. Dickens began it when the magazine's sales fell and its current serial, Charles Lever's A Day's Ride, lost favour with readers. Weekly publication shaped the book: short chapters, strong scene endings, repeated phrases that readers would recognise a week later, and a central mystery that could hold an audience for months. It is worth remembering in an answer that the first readers reached the revelation of Chapter 39 after many weeks in which the narration, following Pip, took for granted that Miss Havisham was his patron.",
    },
    {
      heading: 'A mystery with fair clues',
      body: "The plot runs on withheld information: who Pip's benefactor is, who attacked Mrs Joe, who Estella's parents are. The narrator knows every answer but tells the story as he lived it, so the reader shares his mistakes. Yet the clues are fair. In Chapter 10 a stranger at the Three Jolly Bargemen stirs his drink with Joe's file and gives Pip a shilling wrapped in two one-pound notes; in Chapter 16 the weapon used on Mrs Joe is a convict's leg-iron “which had been filed asunder”; in Chapter 48 Pip notices the hands and eyes of Jaggers's housekeeper. On a second reading the preparation is everywhere, and so is Pip's refusal to see it. That is the stronger point to argue: the plot punishes a way of seeing people, not just a wrong guess.",
    },
    {
      heading: 'Doubles and parallels',
      body: "Dickens pairs characters so that each explains the other. Two people make a child for their own ends: Magwitch makes Pip a gentleman, and Miss Havisham makes Estella a weapon, until Estella tells her, “I am what you have made me” (Chapter 38). Pip has two fathers, Joe and Magwitch, who calls himself “your second father”, and two women he might marry, Biddy and Estella. Magwitch and Compeyson are the same crime seen through class: at their trial the gentleman got seven years and the rough man fourteen (Chapter 42). Wemmick splits himself between the office and his home, since Walworth “is one place, and this office is another” (Chapter 36). Orlick is Pip's dark double, who insists in Chapter 53 that the attack on Mrs Joe was Pip's doing. The pairings let the novel argue by comparison rather than by lecture.",
    },
    {
      heading: 'A circular return',
      body: "The novel ends where it began. In Chapter 59, after eleven years abroad, Pip finds Joe and Biddy's son, named Pip, sitting on his own old stool by the kitchen fire, and takes him to the churchyard, where he sets the boy on a tombstone and the boy shows him the stone of “Philip Pirrip, late of this Parish”: the scene of Chapter 1 replayed without the terror. The mists that rose when Pip first left the forge in Chapter 19 rise again in the last sentence, now in the evening. The repetitions invite comparison, the same places and a changed man. Whether the circle promises a new beginning, or shows an older, sadder Pip returning to what he threw away, is a real question for an answer to weigh.",
    },
    {
      heading: 'Two endings, and a last sentence that divides readers',
      body: "Dickens first wrote a sadder ending, in which Pip, still single, briefly sees Estella in London years later; after Drummle's death she has married again. The novelist Edward Bulwer-Lytton told him it was too sad, and Dickens rewrote it before publication, so that they meet in the ruins of Satis House. Even the published ending is double-edged. Estella says they “will continue friends apart”, yet the final clause says Pip “saw no shadow of another parting from her”. Is that hope, or the voice of a man who has always seen what he wished to see? The more convincing reading keeps both: Dickens offers hope, but phrases it as the absence of a shadow rather than a promise. Check your own edition, too, because the final clause was worded differently in the first edition of 1861 and revised by Dickens later.",
    },
  ],

  vocabulary: [
    {
      term: 'Bildungsroman',
      definition:
        "A novel that follows a young person's growth from childhood to maturity, especially their moral and social education. Great Expectations reverses the usual pattern for much of its length: Pip is educated into false values before he learns better ones.",
    },
    {
      term: 'Expectations',
      definition:
        "In Pip's time, money or property that someone could expect to inherit. Jaggers announces that Pip is to be brought up as “a young fellow of great expectations” (Chapter 18); the title plays on this legal sense and the everyday sense of hopes.",
    },
    {
      term: 'Benefactor',
      definition:
        "A person who gives money or help. Pip's benefactor is kept secret, and he wrongly assumes it is Miss Havisham; Jaggers calls the secret “a profound secret, until the person chooses to reveal it” (Chapter 18).",
    },
    {
      term: 'Transportation',
      definition:
        'A sentence under which convicts were shipped to a penal colony, above all in Australia. Magwitch was transported to New South Wales for life, and coming back was punishable by death: “It’s death to come back” (Chapter 39). The officers who arrest him call him “a returned Transport” (Chapter 54).',
    },
    {
      term: 'The Hulks',
      definition:
        'Old ships moored in rivers and used as floating prisons. Mrs Joe tells Pip that “People are put in the Hulks because they murder, and because they rob, and forge” (Chapter 2); the two escaped convicts come from them.',
    },
    {
      term: 'Indentures',
      definition:
        'The legal contract that bound an apprentice to a master for a fixed term. Pip is bound apprentice to Joe before the magistrates in the Town Hall (Chapter 13), and he and Joe burn the indentures before he leaves for London (Chapter 19).',
    },
    {
      term: 'Premium',
      definition:
        'A fee paid to a master for taking on an apprentice. Miss Havisham hands Pip a bag of “five-and-twenty guineas” and tells him to give it to his master, Joe, as the premium Pip has earned (Chapter 13).',
    },
    {
      term: 'Gentleman',
      definition:
        "A man of good social standing who did not work with his hands, marked by education, manners and money. The novel asks whether a gentleman is made by money, as Pip is, or shown by conduct, as Joe's is.",
    },
    {
      term: 'Brought up by hand',
      definition:
        'Fed from a bottle or spoon as a baby rather than breastfed, and so raised with extra trouble. Mrs Joe boasts that she brought Pip up “by hand”; knowing her “hard and heavy hand”, Pip assumes it means hitting (Chapter 2).',
    },
    {
      term: 'Wittles',
      definition:
        "Magwitch's pronunciation of victuals, meaning food (Chapter 1). Dickens often turns v into w in the speech of Magwitch and Joe, as in Joe's “Diwisions”.",
    },
    {
      term: 'Satis',
      definition:
        "Latin for enough, though Estella, who cannot say which language it is, simply calls it the word for enough. She explains that the house's name meant whoever had it “could want nothing else” (Chapter 8): an irony in a house where nothing and no one is ever satisfied.",
    },
    {
      term: 'Epergne',
      definition:
        'A decorative centrepiece for a dining table, usually silver, with a central bowl and branching holders for fruit or flowers. In Chapter 11 Pip takes the object in the middle of the rotting feast for an epergne, but it is so thick with cobwebs that “its form was quite undistinguishable”, and Miss Havisham tells him it is her bride-cake.',
    },
    {
      term: 'Portable property',
      definition:
        "Wemmick's phrase for valuables that can be carried away, such as the mourning rings he collects from clients. It sums up a world in which people are valued for what can be pocketed.",
    },
    {
      term: 'Sessions',
      definition:
        'The regular sittings of a criminal court. Magwitch is tried as soon as the Sessions come round, after a request to postpone the trial is refused (Chapter 56).',
    },
  ],

  timeline: [
    {
      where: 'First stage, Chapter 1',
      title: 'The convict in the churchyard',
      summary:
        "On a raw afternoon, as the orphan Pip stands crying among his family's graves on the marshes, an escaped convict starts up from among the graves, turns him upside down and empties his pockets. He orders Pip to bring him a file and food early the next morning, and threatens him with a young man who will tear out his heart and liver.",
      setting: 'The churchyard on the marshes, towards evening',
      who: ['Pip', 'Abel Magwitch'],
      quote: 'Keep still, you little devil, or I’ll cut your throat!',
      themes: ['Guilt and atonement', 'Identity and self-knowledge'],
      tension: 4,
      significance:
        "The meeting sets the whole plot going: the boy's frightened help is the debt the convict spends his life repaying.",
    },
    {
      where: 'First stage, Chapters 2 to 5',
      title: 'Stolen food and a recaptured convict',
      summary:
        "On Christmas Eve Pip hides his bread and butter for the convict, and at first light on Christmas morning he steals bread, cheese, mincemeat, brandy, a pork pie and a file from Joe's tools, and takes them to the man on the misty marshes. On Christmas Day soldiers come to the forge; Joe and Pip follow the hunt and see two convicts dragged fighting from a ditch. Pip's convict says he stole the food himself, from the blacksmith's.",
      setting: 'The forge kitchen, then the marshes',
      who: ['Pip', 'Abel Magwitch', 'Joe Gargery', 'Mrs Joe Gargery', 'Compeyson'],
      quote:
        'We don’t know what you have done, but we wouldn’t have you starved to death for it, poor miserable fellow-creatur.',
      themes: ['Guilt and atonement', 'Appearance vs true worth'],
      tension: 4,
      significance:
        "Magwitch shields Pip, and Joe's instinctive mercy to a convict sets the moral standard against which Pip will be measured.",
    },
    {
      where: 'First stage, Chapter 8',
      title: 'First visit to Satis House',
      summary:
        'Uncle Pumblechook delivers Pip to Satis House, where Miss Havisham sits in her yellowed wedding dress, her watch and clock stopped at twenty minutes to nine. She makes him play cards with Estella, who mocks his hands, his boots and his words, and gives him his food in the yard like a dog. Alone behind a gate in the brewery lane, Pip cries and kicks the wall.',
      setting: 'Satis House: a candlelit dressing-room with no daylight',
      who: ['Pip', 'Miss Havisham', 'Estella', 'Mr Pumblechook'],
      quote: 'And what coarse hands he has! And what thick boots!',
      themes: ['Social class and mobility', 'Appearance vs true worth'],
      tension: 3,
      significance:
        "Pip learns to see himself through Estella's contempt, and the shame he feels here becomes the engine of his ambition.",
    },
    {
      where: 'First stage, Chapters 11 to 13',
      title: 'Visits, a fight and an apprenticeship',
      summary:
        "On later visits Pip sees the rotting wedding feast, fights a pale young gentleman in the garden, and pushes Miss Havisham round her rooms in a wheeled chair. When they play cards he hears her embrace Estella and murmur something that sounds like an order to break men's hearts. At last she hands Pip twenty-five guineas for Joe as a premium, and Pip is bound apprentice to Joe at the Town Hall.",
      setting: 'Satis House, then the Town Hall',
      who: ['Pip', 'Miss Havisham', 'Estella', 'Herbert Pocket', 'Joe Gargery'],
      quote: 'Break their hearts my pride and hope, break their hearts and have no mercy!',
      themes: ['Parenthood and family (Joe as moral centre)', 'Ambition and disappointment'],
      tension: 2,
      significance:
        "The boy who dreamed of Satis House is sent back to the forge, and his discontent with Joe's trade, and with Joe, begins in earnest.",
    },
    {
      where: 'First stage, Chapters 15 and 16',
      title: 'The attack on Mrs Joe',
      summary:
        "Coming home one night, Pip finds the kitchen full of people: his sister has been struck down from behind by an unknown hand. Beside her lies a convict's leg-iron, filed through long before. She survives, but with her sight, hearing, memory and speech damaged, and Biddy comes to live at the forge to look after her.",
      setting: 'The forge kitchen at night',
      who: ['Pip', 'Mrs Joe Gargery', 'Joe Gargery', 'Orlick', 'Biddy'],
      quote: 'a convict’s leg-iron which had been filed asunder',
      themes: ['Guilt and atonement'],
      tension: 4,
      significance:
        'Pip feels he supplied the weapon, and the leg-iron ties the convict of Chapter 1 to violence at home; the attacker is named only in Chapter 53.',
    },
    {
      where: 'First stage, Chapter 18',
      title: 'Great expectations',
      summary:
        "In the fourth year of Pip's apprenticeship, the London lawyer Mr Jaggers announces that Pip will come into a handsome property and be brought up as a gentleman. There are conditions: he must always keep the name Pip, and he must not ask who his benefactor is. Pip is certain it is Miss Havisham.",
      setting: 'The Three Jolly Bargemen, then the forge',
      who: ['Pip', 'Mr Jaggers', 'Joe Gargery', 'Biddy'],
      quote: 'in a word, as a young fellow of great expectations',
      themes: ['Ambition and disappointment', 'Social class and mobility'],
      tension: 3,
      significance:
        "The title arrives as a legal formula, and Pip's wrong guess about its source shapes everything he does for the next twenty chapters.",
    },
    {
      where: 'First stage, Chapter 19',
      title: 'Leaving the forge',
      summary:
        'Pip and Joe burn his indentures, and Pip spends his last days talking down to Biddy and wishing Joe were more refined. Walking away alone, he breaks into tears at the finger-post at the end of the village, and the coach carries him towards London as the mists rise.',
      setting: 'The village and the road out of it, in the early morning',
      who: ['Pip', 'Joe Gargery', 'Biddy'],
      quote: 'Heaven knows we need never be ashamed of our tears',
      themes: ['Identity and self-knowledge', 'Guilt and atonement'],
      tension: 2,
      significance:
        "The first stage ends with Pip free and ashamed at once, and the rising mists of this morning return in the novel's last sentence.",
    },
    {
      where: 'Second stage, Chapter 27',
      title: "Joe's visit to London",
      summary:
        "Joe comes to Pip's rooms at Barnard's Inn with a message from Miss Havisham. Pip, ashamed of him, is cold and irritable; Joe, stiff in his best clothes, keeps calling him sir and fighting a losing battle with his hat. Leaving early, he tells Pip with quiet dignity that he belongs at the forge.",
      setting: "Pip's chambers at Barnard's Inn, London, on a drizzly morning",
      who: ['Pip', 'Joe Gargery', 'Herbert Pocket'],
      quote: 'life is made of ever so many partings welded together',
      themes: ['Social class and mobility', 'Appearance vs true worth'],
      tension: 2,
      significance:
        'The chapter shows Pip at his worst and Joe at his best, and the narrator admits the awkwardness was his own fault.',
    },
    {
      where: 'Second stage, Chapter 29',
      title: "Miss Havisham's command",
      summary:
        'Pip returns to Satis House and meets Estella, grown up and just home from France, who warns him plainly that she has no heart. Miss Havisham pulls his head down to hers and orders him to love Estella whatever she does to him. That night he turns her command into his own words and repeats them to his pillow.',
      setting: 'Satis House',
      who: ['Pip', 'Estella', 'Miss Havisham', 'Mr Jaggers'],
      quote: 'Love her, love her, love her!',
      themes: ['Ambition and disappointment', 'Identity and self-knowledge'],
      tension: 3,
      significance:
        "Pip's love is presented as something ordered and taught, and Estella's own warning is ignored.",
    },
    {
      where: 'Second stage, Chapter 38',
      title: 'Estella turns on her maker',
      summary:
        'At Satis House, Miss Havisham, fiercely possessive, accuses Estella of coldness towards her. Estella answers that she is only what Miss Havisham made her: it was Miss Havisham who taught her to be proud and hard. Later, at a ball at Richmond, Pip watches her let the brutish Bentley Drummle hang about her. When he protests, she tells him she deceives and entraps Drummle and many others, but not Pip.',
      setting: 'Satis House, by the great chimney-piece',
      who: ['Estella', 'Miss Havisham', 'Pip', 'Bentley Drummle'],
      quote: 'I am what you have made me.',
      themes: ['Parenthood and family (Joe as moral centre)', 'Identity and self-knowledge'],
      tension: 3,
      significance:
        "Miss Havisham's plan turns back on her, and the novel's idea that people are made by how they are raised is spoken aloud.",
    },
    {
      where: 'Second stage, Chapter 39',
      title: 'The convict returns',
      summary:
        'On a night of storm, Pip, now twenty-three and alone in his rooms in the Temple, hears a step on the stair. A weather-beaten man of about sixty holds out both hands: it is the convict from the marshes, back from transportation, and he reveals that he, not Miss Havisham, has paid for everything. Coming back means death if he is caught.',
      setting: "Pip's chambers in the Temple, London, at eleven at night in a storm",
      who: ['Pip', 'Abel Magwitch'],
      quote: 'Yes, Pip, dear boy, I’ve made a gentleman on you!',
      themes: [
        'Social class and mobility',
        'Appearance vs true worth',
        'Ambition and disappointment',
      ],
      tension: 5,
      significance:
        "The central revelation destroys Pip's picture of himself and his future, and the second stage ends in darkness.",
    },
    {
      where: 'Third stage, Chapter 42',
      title: "Magwitch's story",
      summary:
        "Magwitch tells Pip and Herbert his life, from a child stealing turnips to years in and out of jail. He fell in with Compeyson, a swindler with a gentleman's manners; when both were tried, Compeyson got seven years and Magwitch fourteen. Herbert passes Pip a note: Compeyson is the man who pretended to love Miss Havisham.",
      setting: "Pip's chambers in the Temple, at breakfast; Magwitch lodges nearby in Essex Street",
      who: ['Abel Magwitch', 'Pip', 'Herbert Pocket', 'Compeyson', 'Miss Havisham'],
      quote: 'In jail and out of jail, in jail and out of jail, in jail and out of jail.',
      themes: ['Social class and mobility', 'Appearance vs true worth'],
      tension: 3,
      significance:
        "The trial shows the law judging men by class, and joins the two halves of the plot: Pip's convict and Miss Havisham's betrayer are old partners.",
    },
    {
      where: 'Third stage, Chapter 44',
      title: "Estella's engagement",
      summary:
        'At Satis House Pip tells Miss Havisham that he now knows who his patron is, and she admits that she let him go on in his mistake. He tells Estella he loves her; she answers calmly that she is going to marry Drummle. Pip pours out his feelings, leaves, and walks all the way back to London.',
      setting: 'Satis House',
      who: ['Pip', 'Estella', 'Miss Havisham', 'Bentley Drummle'],
      quote: 'You are part of my existence, part of myself.',
      themes: ['Ambition and disappointment', 'Identity and self-knowledge'],
      tension: 4,
      significance:
        "Pip's romantic hopes collapse after his financial ones, and his outburst is what finally shows Miss Havisham what she has done.",
    },
    {
      where: 'Third stage, Chapter 49',
      title: 'Remorse and fire',
      summary:
        "Miss Havisham agrees to pay for Herbert's partnership and kneels to beg Pip's forgiveness, crying out again and again over what she has done to Estella. Pip leaves her, then goes back upstairs to make sure she is safe, and sees her dress catch fire by the hearth. He smothers the flames with his coats and the tablecloth, badly burning his hands, but she does not recover.",
      setting: 'Satis House, by the fire',
      who: ['Miss Havisham', 'Pip'],
      quote: 'What have I done! What have I done!',
      themes: ['Guilt and atonement', 'Parenthood and family (Joe as moral centre)'],
      tension: 5,
      significance:
        "The woman who stopped time is consumed in her wedding dress, and Pip's forgiveness shows how far he has moved from resentment.",
    },
    {
      where: 'Third stage, Chapters 50 and 51',
      title: "Estella's parents",
      summary:
        "Herbert passes on Magwitch's story of a jealous young woman, tried for murder and acquitted with Mr Jaggers defending her, who swore to destroy their little daughter. Remembering the hands and eyes of Molly, Jaggers's housekeeper, Pip realises that Molly is Estella's mother and Magwitch her father, and Jaggers, admitting nothing, puts the case that confirms it.",
      setting: "Pip's rooms, then Jaggers's office in Little Britain",
      who: ['Pip', 'Herbert Pocket', 'Molly', 'Mr Jaggers', 'Abel Magwitch', 'Estella'],
      quote: 'And the man we have in hiding down the river, is Estella’s Father.',
      themes: ['Parenthood and family (Joe as moral centre)', 'Appearance vs true worth'],
      tension: 3,
      significance:
        "The proud lady Pip worshipped is a convict's child, and the novel's worlds of wealth and crime turn out to be one family.",
    },
    {
      where: 'Third stage, Chapter 53',
      title: "Orlick's trap",
      summary:
        "An anonymous letter draws Pip at night to a sluice-house by the limekiln on the marshes. Orlick, who has always resented him, ties him up, confesses that he struck down Mrs Joe, blames Pip for it, and means to kill him. Herbert, Startop and Trabb's boy arrive just in time.",
      setting: 'A sluice-house by the limekiln on the marshes, at night',
      who: ['Pip', 'Orlick', 'Herbert Pocket'],
      themes: ['Guilt and atonement'],
      tension: 5,
      significance:
        'The attacker is named at last, and Pip refuses the guilt Orlick tries to lay on him.',
    },
    {
      where: 'Third stage, Chapter 54',
      title: 'Escape down the river',
      summary:
        "Pip, Herbert and Startop row Magwitch down the Thames to meet a steamer bound for Hamburg. A galley sent to arrest Magwitch intercepts them, with Compeyson, cloaked, on board. Magwitch pulls the cloak from Compeyson's neck and uncovers his face, the steamer drives down on the boats, and the two convicts go into the river together; Compeyson drowns. Magwitch, badly injured, is taken prisoner, and Pip's disgust at him melts away.",
      setting: 'The Thames below Gravesend, between Kent and Essex',
      who: ['Pip', 'Abel Magwitch', 'Herbert Pocket', 'Compeyson'],
      quote: 'I only saw in him a much better man than I had been to Joe.',
      themes: ['Guilt and atonement', 'Appearance vs true worth'],
      tension: 5,
      significance:
        "The escape fails, but Pip's change of heart does not: he chooses loyalty to Magwitch over his own safety and reputation.",
    },
    {
      where: 'Third stage, Chapter 56',
      title: "Magwitch's death",
      summary:
        'Magwitch is tried for returning from transportation, found guilty, and sentenced to death with thirty-one others. Pip writes petitions for mercy and visits him daily in the prison infirmary. Before the sentence can be carried out Magwitch dies, after Pip tells him that his lost child lived and is now a beautiful lady, and that Pip loves her.',
      setting: 'The criminal court in April, then the prison infirmary',
      who: ['Abel Magwitch', 'Pip'],
      quote: 'She is living now. She is a lady and very beautiful. And I love her!',
      themes: ['Parenthood and family (Joe as moral centre)', 'Guilt and atonement'],
      tension: 4,
      significance:
        'Condemned by the court, Magwitch dies comforted and loved, and Pip gives him the one gift he still can.',
    },
    {
      where: 'Third stage, Chapters 57 and 58',
      title: "Joe's care and Biddy's wedding",
      summary:
        "Pip falls into a long fever and is arrested for debt, but is too ill to be moved. When he comes round, Joe is nursing him; Joe pays the debt in secret and slips away. Pip goes home meaning to ask Biddy to marry him, and arrives on the day she has married Joe. He goes abroad to work for Herbert's firm.",
      setting: "Pip's rooms in the Temple, then the forge in June",
      who: ['Pip', 'Joe Gargery', 'Biddy', 'Herbert Pocket'],
      quote: 'O God bless this gentle Christian man!',
      themes: ['Parenthood and family (Joe as moral centre)', 'Guilt and atonement'],
      tension: 2,
      significance:
        'Pip is repaid with kindness he did not earn, and learns to work for his living instead of expecting it.',
    },
    {
      where: 'Third stage, Chapter 59',
      title: 'Eleven years later',
      summary:
        "Home from the East after eleven years, Pip finds Joe and Biddy's little son, named Pip, on his own old stool by the fire. The next evening he walks alone to the cleared ground where Satis House stood and meets Estella, widowed after an unhappy marriage and softened by suffering. They leave the ruined place together.",
      setting: 'The forge, then the site of Satis House in an evening mist',
      who: ['Pip', 'Estella', 'Joe Gargery', 'Biddy'],
      quote: 'I have been bent and broken, but—I hope—into a better shape.',
      themes: ['Identity and self-knowledge', 'Ambition and disappointment'],
      tension: 2,
      significance:
        "The ending returns to the novel's first places and leaves the reader to judge how much hope its last sentence holds.",
    },
  ],

  relationships: [
    {
      from: 'Pip',
      to: 'Joe Gargery',
      kind: 'brother-in-law and true father',
      note: 'Joe raises Pip with patience and calls them “ever the best of friends”. Pip is ashamed of him in London, and their friendship is restored only when Joe nurses him and pays his debt.',
    },
    {
      from: 'Pip',
      to: 'Abel Magwitch',
      kind: 'benefactor and adopted son',
      note: 'Terror in the churchyard becomes revulsion at the revelation and, on the river, love. The relationship is the clearest measure of how Pip changes.',
    },
    {
      from: 'Pip',
      to: 'Estella',
      kind: 'unrequited love',
      note: 'Drawn to her from their first meeting, he goes on loving her despite her own warnings; she was raised to wound men like him. Their meeting in the ruins leaves open whether they have a future.',
    },
    {
      from: 'Miss Havisham',
      to: 'Estella',
      kind: 'adoptive mother and daughter',
      note: "Miss Havisham raises Estella to break men's hearts, then finds the girl cannot love her either. Her remorse comes too late to undo the upbringing.",
    },
    {
      from: 'Miss Havisham',
      to: 'Pip',
      kind: 'supposed patroness',
      note: 'She lets Pip believe she is his benefactor and uses him to torment her relations. Near the end she begs his forgiveness, and he gives it.',
    },
    {
      from: 'Abel Magwitch',
      to: 'Compeyson',
      kind: 'former partners, then enemies',
      note: 'The gentleman swindler used Magwitch and got the lighter sentence. Their hatred drives the recapture in Chapter 5 and ends with Compeyson drowned in the Thames.',
    },
    {
      from: 'Compeyson',
      to: 'Miss Havisham',
      kind: 'false lover',
      note: 'The man who pretended to love her and abandoned her is the cause of the stopped clocks. One villain links the two halves of the plot.',
    },
    {
      from: 'Abel Magwitch',
      to: 'Estella',
      kind: 'father and daughter',
      note: 'He believed his child destroyed, and the boy in the churchyard brought her to his mind (Chapter 50). The novel never shows Estella learning who her father was; Pip, who has pieced the truth together, tells the dying man that she lives.',
    },
    {
      from: 'Mr Jaggers',
      to: 'Molly',
      kind: 'lawyer and housekeeper',
      note: "Jaggers won her acquittal on a murder charge and keeps her as his housekeeper. He placed her daughter with Miss Havisham, and holds the secret of Estella's birth.",
    },
    {
      from: 'Pip',
      to: 'Herbert Pocket',
      kind: 'friends',
      note: "They fight as boys and share rooms as young men; Herbert renames Pip Handel. Pip secretly pays for Herbert's partnership, his one wholly good use of his fortune.",
    },
    {
      from: 'Pip',
      to: 'Biddy',
      kind: 'friends and confidants',
      note: 'Biddy teaches Pip and sees through him; he talks down to her. He comes home to propose to her and finds she has married Joe.',
    },
    {
      from: 'Joe Gargery',
      to: 'Mrs Joe Gargery',
      kind: 'husband and wife',
      note: 'She beats Pip and bullies Joe. Joe puts up with it because he saw his father beat his mother, and he would rather suffer himself than risk treating a woman badly.',
    },
    {
      from: 'Orlick',
      to: 'Pip',
      kind: 'rivals',
      note: "The journeyman at the forge resents the favoured boy. He strikes down Mrs Joe and, years later, tries to kill Pip, insisting that the attack on Mrs Joe was Pip's doing because Pip was favoured and Orlick was bullied.",
    },
    {
      from: 'Estella',
      to: 'Bentley Drummle',
      kind: 'wife and husband',
      note: 'She marries the brutish Drummle as “my own act”, tired of the life she has led. He treats her with great cruelty, and dies in an accident after ill-treating a horse.',
    },
    {
      from: 'Mr Jaggers',
      to: 'Pip',
      kind: 'guardian and ward',
      note: "Jaggers manages Pip's money and never corrects his mistaken belief about his benefactor: “Take nothing on its looks; take everything on evidence.”",
    },
  ],

  compareWith: [
    {
      title: 'Jane Eyre',
      href: '/revision/texts/jane-eyre',
      reason:
        "On the same Edexcel GCSE 19th-century novel list: another orphan's first-person story of growing up, in which an older narrator looks back on a humiliated childhood.",
    },
    {
      title: 'A Christmas Carol',
      href: '/revision/texts/a-christmas-carol',
      reason:
        'Dickens again, on the same Edexcel list: a shorter, openly moral story of a man transformed, useful for comparing how Dickens presents money, guilt and redemption.',
    },
    {
      title: 'Silas Marner',
      href: '/revision/texts/silas-marner',
      reason:
        'Also on the Edexcel list: a novel of chosen parenthood, in which love for an adopted child matters more than blood, a sharp comparison with Joe, Magwitch and Miss Havisham.',
    },
    {
      title: 'Pride and Prejudice',
      href: '/revision/texts/pride-and-prejudice',
      reason:
        'Beside Great Expectations on the Edexcel International GCSE literary heritage list: a novel about class pride and first impressions, in which a proud misjudgement has to be unlearnt.',
    },
  ],

  contentGuidance: [
    'violence',
    'crime_injustice',
    'mortality',
    'mental_health',
    'intimate_relationships',
    'discrimination',
    'colonialism',
  ],

  sources: [
    {
      label:
        'Great Expectations, Project Gutenberg eBook #1400 (labelled the 1867 edition): every passage, scene-card quotation and quoted phrase in this file was copied from it and matched word for word, and the chapters cited were read in full to check speakers and plot facts',
      url: 'https://www.gutenberg.org/ebooks/1400',
    },
    {
      label:
        'Project Gutenberg #1400 plain text, used for the word-for-word checks and the stage markers at the ends of Chapters 19 and 39',
      url: 'https://www.gutenberg.org/cache/epub/1400/pg1400.txt',
    },
    {
      label:
        "Wikisource, Great Expectations (1st edition), Chapman and Hall 1861: three volumes of 19, 20 and 20 chapters, each volume numbering its chapters from I; the first edition's wording of the final clause, which differs from the Gutenberg text",
      url: 'https://en.wikisource.org/wiki/Great_Expectations_(1st_edition)',
    },
    {
      label:
        "Wikipedia, Great Expectations: serialisation in All the Year Round in thirty-six weekly parts from 1 December 1860 to 3 August 1861; falling sales and Lever's A Day's Ride; Chapman and Hall three-volume edition of 1861; the original ending and Bulwer-Lytton's comments; the later revision of the final clause (Wikipedia's wording of the 1861 clause differs from the Wikisource transcription, so this guide does not quote it)",
      url: 'https://en.wikipedia.org/wiki/Great_Expectations',
    },
    {
      label:
        'Pearson Edexcel GCSE (9–1) English Literature (1ET0) specification, Issue 2: Great Expectations on the Component 2 19th-century novel list with Jane Eyre, Dr Jekyll and Mr Hyde, A Christmas Carol, Pride and Prejudice, Silas Marner and Frankenstein',
    },
    {
      label:
        'src/lib/board/edexcel-igcse-literature.ts (verified specification module): Great Expectations and Pride and Prejudice on the Edexcel International GCSE 4ET1 literary heritage list',
    },
    {
      label:
        'AQA GCSE English Literature (8702) specification, subject content as published on aqa.org.uk: the 19th-century novel list prints the text as Great Expectations (1867)',
    },
    {
      label:
        "The Victorian Web, The Serialisation of Great Expectations in All the Year Round: thirty-six instalments, 1 December 1860 to 3 August 1861; the three stages corresponding to the three volumes; Dickens on the failure of A Day's Ride",
      url: 'https://victorianweb.org/authors/dickens/ge/geserialisation.html',
    },
    {
      label:
        'Wikisource, Great Expectations (1st edition), Volume 2: twenty chapters numbered I to XX, title page London: Chapman and Hall, 1861',
      url: 'https://en.wikisource.org/wiki/Great_Expectations_(1st_edition)/Volume_2',
    },
    {
      label:
        'Wiktionary, by hand: of raising a child, without suckling it (the glossary entry on brought up by hand)',
      url: 'https://en.wiktionary.org/wiki/by_hand',
    },
    {
      label:
        'Wiktionary, epergne: a table centrepiece, usually silver, with a central bowl and radiating holders',
      url: 'https://en.wiktionary.org/wiki/epergne',
    },
    {
      label: 'Wiktionary, satis (Latin): enough, sufficient',
      url: 'https://en.wiktionary.org/wiki/satis',
    },
  ],
}
