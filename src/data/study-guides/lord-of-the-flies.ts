import type { StudyGuide } from '@/lib/study-guides/types'

/**
 * Lord of the Flies, William Golding (Faber and Faber, September 1954). A
 * SUPPLEMENT: the page at /revision/texts/lord-of-the-flies keeps its overview,
 * context, themes, characters, key quotations, language notes, essay plans and
 * model paragraph. This file adds what it lacked: passages for close reading,
 * structure and form, and a glossary, plus the timeline and character map the
 * animated visuals draw.
 *
 * HOW THE QUOTATIONS WERE CHECKED (26 September 2026). The novel is in UK
 * copyright and no licensed copy is held in src/data/full-texts, so the guide
 * test cannot check these words for us. Every quotation in this file was
 * searched as an exact phrase through Open Library's full-text search of
 * scanned printed books, and kept only when it was found word for word in a
 * printed edition of the novel, an anthology that reprints one of its
 * chapters, or a study guide or critical book on it. Punctuation was compared
 * across the matches, not just the words, and each chapter was checked
 * against the plot. Short or common phrases ("Fun and games", "we'll have
 * fun", "That was murder.") were searched together with a neighbouring word or
 * phrase from the same page, so that the match was the novel and not another
 * book. The American and
 * British editions differ in spelling and hyphenation (colored and coloured,
 * grownups and grown-ups, haircut and hair-cut), so no quotation here contains
 * a word whose spelling changes between them, except "a sign came down from
 * the world of grown-ups", given in the British form the UK sources print.
 *
 * Things the verification turned up, recorded so nobody reintroduces them:
 * - Jack's Chapter 2 line has a semicolon after "We're English", not a comma.
 *   Almost every printed source agrees; the first draft of this file had the
 *   comma.
 * - Shmoop prints "something you could hunt or kill". The printed sources read
 *   "hunt and kill", which is what this file quotes.
 * - The head's "We are going to have fun on this island" comes twice in
 *   Chapter 8, first with a full stop and then with an exclamation mark.
 * - "They looked at each other, baffled, in love and hate" is Chapter 3, after
 *   the argument over the shelters, not the final hunt. Confirmed in five
 *   printed guides that give the chapter.
 * - The officer looks at Ralph "in wary astonishment" (Chapter 12). The word
 *   "ceremonial" is not in that sentence.
 * - Piggy's line in Chapter 11 is "painted Indians", not "painted savages".
 * - "Sucks to your ass-mar!" in Chapter 1 is Ralph's reply to Piggy.
 * - The passage beginning "wearisomeness of this life" opens Chapter 5, not
 *   Chapter 7.
 * - In Chapter 5 it is Ralph, not Piggy, who reasons that if he blows the
 *   conch and the boys do not come back, they have "had it". Piggy is the one
 *   urging him to blow it.
 * - The Coral Island line is "Jolly good show. Like the Coral Island." It is a
 *   separate speech from the officer's "pack of British boys" line.
 */
export const guide: StudyGuide = {
  slug: 'lord-of-the-flies',
  title: 'Lord of the Flies',
  author: 'William Golding',
  form: 'novel',
  scope:
    'The whole novel, all twelve chapters, as set for GCSE English Literature by AQA (8702), Pearson Edexcel (1ET0) and Eduqas. Chapter numbers and titles are the same in every edition but page numbers are not, so this guide locates each moment by chapter and by what happens, not by page.',
  rights: {
    status: 'copyright',
    acknowledgement:
      '© William Golding 1954. First published by Faber and Faber in September 1954. Short quotations are used for criticism and review; longer passages are described and located rather than printed.',
  },
  workLength: {
    words: 60000,
    basis:
      'About 60,000 words in twelve chapters. Published word counts for the novel put it at about 59,900 words, and the first edition ran to 224 pages. A long work, so the 400-word page limit in fair-dealing.ts applies.',
  },

  native: {
    overview: '/revision/texts/lord-of-the-flies',
    context: '/revision/texts/lord-of-the-flies',
    themes: '/revision/texts/lord-of-the-flies',
    characters: '/revision/texts/lord-of-the-flies',
    keyQuotes: '/revision/texts/lord-of-the-flies',
    languageAnalysis: '/revision/texts/lord-of-the-flies',
    examPractice: '/revision/texts/lord-of-the-flies',
    modelAnswer: '/revision/texts/lord-of-the-flies',
  },

  extracts: [
    {
      title: 'Jack paints his face',
      where: 'Chapter 4, Painted Faces and Long Hair',
      pointer:
        'Chapter 4, straight after Roger throws stones around Henry without daring to hit him. It begins as Jack kneels by a small pool with white clay, red clay and a stick of charcoal, and ends with “The mask compelled them.”, just before the scene returns to Ralph at the bathing pool.',
      summary:
        'Jack tells Roger that the pigs can see him, so he needs camouflage like the paint used on ships in the war. His first attempt looks a mess and he washes it off. He then whitens one cheek and eye-socket, reddens the rest of his face and draws a black stripe of charcoal across it from ear to jaw. Looking at his reflection in a coconut shell of water, he no longer recognises himself. He laughs, dances and snarls, frightens Bill away, and orders the protesting twins to join the hunt. They obey.',
      annotations: [
        {
          phrase: 'Like things trying to look like something else',
          note: "Jack's own explanation is practical and borrowed from the adult war: camouflage that makes a thing look like something else. The passage then shows the idea working on Jack himself, since the boy behind the paint does become something else.",
        },
        {
          phrase: 'Jack planned his new face.',
          note: 'A short, flat sentence with a deliberate verb. Jack is not hiding his face but designing a new one, and the word “new” hints that this is a new identity rather than a disguise he will take off.',
        },
        {
          phrase: 'an awesome stranger',
          note: '“Awesome” keeps its older sense of inspiring awe and dread. Jack sees not himself but a stranger in the water, so the first thing the paint destroys is his recognition of who he is.',
        },
        {
          phrase: 'his laughter became a bloodthirsty snarling',
          note: "The verb “became” charts a change in a single clause, from a human sound to an animal one. Coming straight after Roger's stone-throwing, it is another moment where play turns into menace in front of us, a pattern the hunts repeat.",
        },
        {
          phrase: 'liberated from shame and self-consciousness',
          note: '“Liberated” sounds like a gain, but what Jack is freed from is shame, the feeling that keeps a person answerable to others. One reading is that conscience needs a face: once nobody can see Jack, nothing holds him back.',
        },
        {
          phrase: 'The mask compelled them.',
          note: 'The mask, not Jack, is the subject of the sentence. Authority has passed from a boy to an image, and the twins obey it. In the same chapter the fire goes out as a ship passes, and Jack defends taking the twins to the hunt.',
        },
      ],
      question:
        'Starting with this passage, explore how Golding presents the way the boys lose their sense of who they are. Write about the passage and about the novel as a whole.',
    },
    {
      title: 'Simon and the Lord of the Flies',
      where: 'Chapter 8, Gift for the Darkness',
      pointer:
        "Chapter 8, in two parts. It begins after Jack says “This head is for the beast. It's a gift.” and the hunters run off, leaving Simon hidden in his clearing. Golding cuts away to Ralph and Piggy on the beach, where Jack's painted hunters raid them for fire and invite them to a feast, then returns to Simon for the conversation, which runs until Simon falls unconscious at the very end of the chapter.",
      summary:
        "Left alone with the sow's head on its stick, Simon feels that it is talking to him. It tells him to go back to the others, mocks him as a silly boy, and claims to be the Beast. It laughs at the idea that the Beast could be hunted, says it is part of the boys, and threatens that if Simon interferes the others will turn on him, naming Ralph and Piggy among them. Its voice becomes a schoolmaster's, the head seems to swell into a vast mouth, and Simon faints.",
      annotations: [
        {
          phrase: 'the infinite cynicism of adult life',
          note: 'Before the head speaks, Simon reads adult knowledge in its dead eyes. Golding makes evil old and knowing rather than wild, which links the head to the grown-up world at war beyond the island.',
        },
        {
          phrase: "Only me. And I'm the Beast.",
          note: 'The head takes the name the boys have given their fear. The short sentences are the language of a bully cornering a child, and “Only me” stresses how alone Simon is with the truth.',
        },
        {
          phrase: 'Fancy thinking the Beast was something you could hunt and kill',
          note: "The casual, schoolboy “Fancy thinking” turns the boys' plan to hunt the Beast into a joke. It confirms what Simon tried to say in Chapter 5: the thing they fear cannot be tracked down, because it is not outside them.",
        },
        {
          phrase: "I'm part of you",
          note: "The novel's central claim is spoken by evil itself, which is unsettling: the reader has to decide whether to trust it. Many readers do, because what follows in Chapters 9 to 12 seems to bear it out.",
        },
        {
          phrase: 'the voice of a schoolmaster',
          note: 'Evil speaks in the tone of the adult authority the boys were raised under. One reading is that civilisation and savagery are not opposites here, since the Beast sounds exactly like the system that was meant to keep it down.',
        },
        {
          phrase: 'We are going to have fun on this island',
          note: "This twists Ralph's promise in Chapter 2 that they would have fun until the grown-ups came. “Fun” has become a threat, and it will come back once more in the officer's mouth in the last chapter.",
        },
      ],
      question:
        'Starting with this conversation, explore how Golding presents the idea that evil lies inside people rather than outside them. Write about the passage and about the novel as a whole.',
    },
    {
      title: 'The naval officer arrives',
      where: 'Chapter 12, Cry of the Hunters, the final pages',
      pointer:
        'The last pages of the novel. It begins when Ralph, driven out of the burning forest, falls on the sand and looks up at a white-topped cap, and runs to the final sentence, which ends on the officer looking at his ship.',
      summary:
        "Ralph collapses at the feet of a naval officer who has come ashore because he saw the smoke. The painted hunters fall silent and, seen through the officer's eyes, become a crowd of small, dirty boys. The officer treats it as a game until Ralph tells him that two boys have been killed. He says he expected British boys to put up a better show, and when Ralph says they were together at first, the officer compares it to The Coral Island. Ralph breaks down and weeps, the other boys cry with him, and the embarrassed officer turns away to look at his ship.",
      annotations: [
        {
          phrase: 'looking down at Ralph in wary astonishment',
          note: 'The adult looks down from above, and his wariness is real: his hand is on a revolver. The officer is armed for danger and finds a child, which is the first sign that his view of the scene and ours will not match.',
        },
        {
          phrase: 'A semicircle of little boys',
          note: 'The same hunters who were a murderous tribe a page earlier are now “little boys”. Golding shifts the viewpoint to the adult, and both descriptions are true at once: they are children, and they have killed.',
        },
        {
          phrase: 'Fun and games',
          note: "A comfortable adult cliché that completes the novel's pattern of “fun”, from Ralph's promise to the head's threat. The reader knows what the officer does not, so the phrase lands as dramatic irony.",
        },
        {
          phrase: 'Having a war or something?',
          note: 'The officer means it as a joke. The bitter irony is that he is the one having a war: he has come from a warship, part of the same war that brought the boys to the island.',
        },
        {
          phrase: 'Jolly good show. Like the Coral Island.',
          note: 'School-story slang, and the name of the Victorian island adventure Golding was writing against. The officer reaches for the old story just as the novel finishes proving it false, so his words sum up the attitude the book rejects.',
        },
        {
          phrase: 'the trim cruiser in the distance',
          note: '“Trim” suggests neatness and order, but a cruiser is a warship. The novel ends by looking at it, which supports the reading that the boys are not saved from savagery but taken off one island at war and returned to a world at war.',
        },
      ],
      question:
        'Starting with this passage, explore how Golding presents adults and the adult world in Lord of the Flies. Write about the passage and about the novel as a whole.',
    },
  ],

  structureForm: [
    {
      heading: 'Twelve chapters, one line down',
      body: "Golding divides the novel into twelve titled chapters, and the titles alone trace its shape. It opens with The Sound of the Shell, a call to order, and closes with Cry of the Hunters, a call to kill in which the hunters' cry is aimed at a boy. Two titles in the middle make a pair, Beast from Water (Chapter 5) and Beast from Air (Chapter 6), as the boys' fear searches first the sea and then the sky for a monster. The shell returns in the title of Chapter 10, The Shell and the Glasses, the chapter in which Jack's hunters raid the shelters at night and take Piggy's glasses rather than the conch: power has moved from the right to speak to the means of making fire. The descent is not an even slide. The first three chapters are slow and bright, and then the losses come in sequence: the fire goes out as a ship passes (Chapter 4), the night assembly collapses (Chapter 5), Jack leaves to form his own tribe (Chapter 8), Simon is killed (Chapter 9), Piggy is killed and the conch destroyed (Chapter 11), and Ralph is hunted (Chapter 12). Each loss makes the next one easier, which is part of Golding's argument: once order starts to go, the collapse gathers speed.",
    },
    {
      heading: 'The assemblies: order measured in meetings',
      body: "One way to follow the structure is to count the meetings. In Chapter 1 the conch calls the first assembly and a vote makes Ralph chief. In Chapter 2 the assembly makes the conch the right to speak, and Jack agrees to rules because “We're English; and the English are best at everything.” Chapter 5 is the hinge. Ralph calls an assembly to put things right, and it falls apart in the dark over the beast, with Jack defying the rules and leading boys off along the beach. Piggy urges Ralph to blow the conch and call them back; Ralph refuses, reasoning that if he blows and nobody comes, his last authority is gone. In Chapter 8 Jack calls a meeting of his own and asks the boys to vote Ralph out. No hand goes up, and he puts the conch down and walks away: “I'm not going to play any longer.” Chapter 11 opens with a last, pitiful assembly of the few boys still loyal to Ralph, but the conch's final appeal is not made at an assembly at all. Piggy carries the conch to Castle Rock and asks the painted tribe which is better, “to have rules and agree, or to hunt and kill?” The answer is a boulder. Golding makes the fortunes of the meeting the fortunes of democracy, so an essay on order or leadership can follow the conch through these five scenes and show the decline rather than just assert it.",
    },
    {
      heading: 'Rehearsals for murder: the hunts and the chant',
      body: "Golding builds the violence through repetition with a change each time, so that every hunt rehearses the next. In Chapter 1 Jack cannot bring himself to kill a piglet caught in the creepers and promises himself “Next time there would be no mercy.” In Chapter 4 the hunters return with their first pig chanting “Kill the pig. Cut her throat. Spill her blood.”, and after they have eaten, Maurice plays the pig in a dance while the last words change to “Bash her in.” In Chapter 7 the boar the boys wound gets away, and the game is played on Robert instead, and the chant becomes “Kill the pig! Cut his throat! Kill the pig! Bash him in!” The pig has become a boy, and the full stops have become exclamation marks. In Chapter 9 the words are “Kill the beast! Cut his throat! Spill his blood!”, and the figure in the middle of the ring is Simon. The pattern does not stop with him. In Chapter 11 Piggy's body twitches “like a pig's after it has been killed”, and in Chapter 12 the twins tell Ralph that “Roger sharpened a stick at both ends.”, just as Jack had one sharpened for the sow's head in Chapter 8. Ralph has become the pig. Tracing the chant is one of the quickest ways to build a whole-text argument: the words barely change while the victim moves from animal to human.",
    },
    {
      heading: 'Echoes that close the circle',
      body: "Several details are planted early and paid off at the end, so the last chapter answers the first ones. In Chapter 2 Ralph tells the assembly that until they are fetched home “we'll have fun”. In Chapter 8 the Lord of the Flies turns the promise into a threat: “We are going to have fun on this island.” In Chapter 12 the officer looks at the painted boys and says “Fun and games”. The same word moves from innocence to menace to adult blindness. Fire makes the same circle. The first fire, lit with Piggy's glasses in Chapter 2, runs out of control, and afterwards the small boy with the birthmark cannot be found. The last fire, set by Jack's tribe to drive Ralph out of hiding, burns the island, and it is this fire that brings rescue: “We saw your smoke.” The signal the boys failed to keep alight is finally sent by the attempt to kill Ralph. Even the stick returns. In Chapter 12 Ralph smashes the pig's skull and takes the stick it stood on as a spear, while another stick has been sharpened at both ends for him. One reading is that the circle is a trap, and that nothing on the island can escape what the boys brought with them.",
    },
    {
      heading: 'An omniscient narrator who changes where it stands',
      body: "The novel is told in the third person by a narrator who can enter any boy's mind. Most of the time it stays close to Ralph, so the reader shares his bewilderment as the rules fail, but it moves when Golding needs it to: into Jack's frustration as he hunts alone in Chapter 3, into Roger's hesitation in Chapter 4, where he throws stones around Henry but not at him because of “the taboo of the old life”, and into Simon's mind for the scenes nobody else witnesses. The most unsettling moves come when the narrator adopts the boys' view. In Chapter 9, as Simon crawls out of the forest into the dance, the narrator does not use his name: “The beast struggled forward”. For a moment the reader sees what the boys see and is drawn into their mistake. In Chapter 12 the viewpoint moves one last time, to the officer. The sentence “The kid needed a bath” is in his idiom, not the narrator's, a technique called free indirect style, and through his eyes the hunters Ralph has been fleeing shrink to small, dirty children. The change of viewpoint is a change of scale, and it is the novel's final argument: the savagery was real, and so were the children.",
    },
    {
      heading: 'The ending: rescue, or no rescue?',
      body: "After a chapter of pure pursuit, Golding stops the hunt dead with an adult, and the last pages change how the whole book feels. The obvious reading is that the officer is rescue: civilisation returns to put things right. The more convincing reading, because the details support it, is that he is nothing of the kind. He is armed, he came because of smoke from a fire lit to hunt a child down, and his jokes (“Having a war or something?”) miss the fact that he is the one having a war. The novel's last image is his warship. The boys are not being taken from savagery to safety but from one island at war back to a world at war. Golding also refuses a neat moral. Jack, a terrifying chief a page earlier, is now “A little boy who wore the remains of an extraordinary black cap”, and it is Ralph who answers when the officer asks who is in charge. The alternative reading deserves a hearing: Ralph's tears are the fullest recognition anyone on the island makes of what has happened, and some readers find a kind of hope in grief that honest. A strong answer also notices that the ending is abrupt by design, and so is the opening. According to Golding's editor at Faber, Charles Monteith, the novel as first submitted began with a section describing an evacuation from nuclear war, which was removed in editing. The published book starts after the crash and stops at the moment of rescue, so it both begins and ends inside a war it never shows directly.",
    },
    {
      heading: 'A frame of war around the island',
      body: "The war is never shown, but it surfaces at three structural joints. In Chapter 1 Piggy remembers what the pilot said: “About the atom bomb? They're all dead.” At the opening of Chapter 6, halfway through the book, an air battle takes place overhead in the night, “the battle fought at ten miles' height”, and the narrator says that “a sign came down from the world of grown-ups”: a dead airman on a parachute, who lands on the mountain and becomes the beast. In Chapter 12 the war arrives in person, in uniform. So the adult world frames the boys' story at its beginning, middle and end, and that matters for interpretation. If the island were simply a place where children went wrong because adults were absent, adults would be the answer. The frame suggests the opposite: the grown-ups are doing on a vast scale what the boys do on a small one, and the only message their world sends to the island is a corpse. Ralph wished for a sign from the grown-ups; that is the sign he gets.",
    },
    {
      heading: 'Fable, allegory and the island story',
      body: "Lord of the Flies borrows the form of a well-loved kind of book, the desert-island adventure, sometimes called a robinsonade after Robinson Crusoe. The boys know the genre too. In Chapter 2, when Ralph says their situation is like something in a book, they shout out the island stories they have read, Treasure Island, Swallows and Amazons and Coral Island, and Ralph answers “This is our island. It's a good island.” They think they have walked into one of those books. Golding's target is the last of these, R. M. Ballantyne's Victorian novel The Coral Island, whose three shipwrecked heroes are called Ralph, Jack and Peterkin, and whose English boys, unlike Golding's, are never the savages of the story. The officer's “Jolly good show. Like the Coral Island.” names the model at the very moment the novel has finished dismantling it. Golding described the theme, in a publicity questionnaire quoted in E. L. Epstein's note to the American edition, as an attempt to “trace the defects of society back to the defects of human nature”, and he called the book a fable, the title he gave to a lecture about it collected in The Hot Gates (1965). That is why so many readers treat it as allegory, with Ralph as democracy, Jack as dictatorship, Piggy as reason and Simon as spiritual insight. The allegorical reading is useful, but a strong answer does not stop there. The boys are also sharply observed real children who tease, sulk, show off and cry, and the novel's horror depends on believing in them as children rather than as symbols.",
    },
  ],

  vocabulary: [
    {
      term: 'Allegory',
      definition:
        'A story in which characters, objects and events stand for ideas beyond themselves. Lord of the Flies is often read as a political allegory, with Ralph as democracy and Jack as dictatorship, and as a religious one, with Simon as a prophet. Use the word, but show that you know the boys are also realistic children.',
    },
    {
      term: 'Fable',
      definition:
        'A story told to carry a moral, usually in a simplified world. Golding used the word for this novel himself, as the title of a lecture about it that he collected in The Hot Gates (1965).',
    },
    {
      term: 'Microcosm',
      definition:
        'A small world that stands for a larger one. The island is a microcosm of adult society: in their short time there the boys reproduce its elections, rivalries, rituals and finally its war.',
    },
    {
      term: 'Robinsonade',
      definition:
        "A story in which people cut off from civilisation, usually on an island, must improvise to survive. The genre takes its name from Daniel Defoe's Robinson Crusoe (1719). Ballantyne's The Coral Island is a Victorian example, and Lord of the Flies turns the form against itself.",
    },
    {
      term: 'Conch',
      definition:
        'A large spiral sea shell. Ralph and Piggy find one in the lagoon in Chapter 1 and Ralph blows it to call the boys together; from then on whoever holds it may speak at an assembly. It is smashed in Chapter 11, in the same moment that Piggy is killed.',
    },
    {
      term: 'Littluns and biguns',
      definition:
        "The boys' own words for the smallest children and the older boys. The littluns are the first to fear the beast, and the words show the boys building a society with ranks almost as soon as they arrive.",
    },
    {
      term: 'Samneric',
      definition:
        'The single name the boys give the twins, Sam and Eric, because they seem to act and speak as one. It is a small sign of how the group swallows individuals, and it makes their capture by the tribe in Chapter 11 feel like the loss of the last ordinary loyalty.',
    },
    {
      term: 'Castle Rock',
      definition:
        "The rocky outcrop at one end of the island that Jack sees as a fort during the search for the beast in Chapter 6 and that his tribe later holds as its stronghold. Piggy is killed there in Chapter 11. Its name alone shows how the boys' island has turned into a battlefield.",
    },
    {
      term: 'Taboo',
      definition:
        'Something forbidden by custom so strongly that people feel they cannot do it. In Chapter 4 Roger throws stones around a small boy but not at him, held back by the rules of home; by Chapter 11 that restraint has gone completely.',
    },
    {
      term: 'Savage',
      definition:
        "In the novel, a boy who has abandoned rules; by the final chapters the narrator itself calls the painted tribe savages. In Golding's time the word was used for peoples Europeans thought uncivilised, a racist assumption the novel partly repeats (Piggy calls the tribe “painted Indians”) and partly overturns, by showing English schoolboys becoming what their own culture feared in others.",
    },
    {
      term: 'Beelzebub',
      definition:
        "A name for a devil in the Bible. The phrase lord of the flies translates it, from a Hebrew name usually rendered Ba'al zevuv. In the novel the Lord of the Flies is the sow's head on a stick, crawling with flies, which seems to speak to Simon in Chapter 8.",
    },
    {
      term: 'Christ figure',
      definition:
        'A character whose life or death echoes that of Jesus: a good person who brings a truth, is rejected, and is killed by the people he came to help. Simon is often read this way, because he understands the beast, climbs the mountain alone and is killed bringing the news down.',
    },
    {
      term: 'Original sin',
      definition:
        'The Christian teaching that every human being inherits a tendency to do wrong from the Fall of Adam and Eve. Many readers see the novel as a version of the idea without the theology: the capacity for evil is born in the boys, not taught to them.',
    },
    {
      term: 'Scapegoat',
      definition:
        "Someone blamed or punished so that a group can feel better about itself. Piggy is the boys' target from the first chapter, and in Chapter 9 the terrified group kills Simon as the beast it fears.",
    },
    {
      term: 'Demagogue',
      definition:
        "A leader who wins power by working on people's fears and appetites rather than arguing with them. Jack becomes one at the feast in Chapter 9, when he reminds the frightened boys that he gave them food and promises that his hunters will protect them from the beast.",
    },
    {
      term: 'Dazzle paint',
      definition:
        "Jack's phrase in Chapter 4 for the bold patterns painted on ships in wartime, designed to confuse an enemy about a ship's speed and direction rather than to hide it. It was used widely in the First World War and less in the Second. Jack borrows a military idea to hunt, and the camouflage becomes a mask.",
    },
    {
      term: 'Pathetic fallacy',
      definition:
        'Weather or nature that mirrors human feeling. The storm that builds through Chapter 9 and breaks during the dance is the clearest example in the novel.',
    },
    {
      term: 'Free indirect style',
      definition:
        "Third-person narration that takes on a character's own words and way of seeing without quotation marks. In Chapter 12 the narrator describes Ralph in the officer's idiom, which lets the reader see the boys through adult eyes for the first time.",
    },
    {
      term: 'Dramatic irony',
      definition:
        "When the reader understands more than a character does. The officer's cheerful comparison with The Coral Island is a clear case, because the reader knows what has happened on the island and he does not.",
    },
    {
      term: 'Ululation',
      definition:
        "A long, wavering, howling cry. Golding uses the word for the tribe's hunting call in Chapter 12 as they drive Ralph across the island.",
    },
    {
      term: 'Phosphorescence',
      definition:
        "Light given off by tiny living things in dark sea water. In Chapter 9 it gathers round Simon's body as the tide carries it out to sea, one reason many readers see his death as a kind of sanctification.",
    },
  ],

  timeline: [
    {
      where: 'Chapter 1',
      title: 'The conch and the vote',
      summary:
        'After their plane comes down on the island, Ralph and Piggy find a conch and use it to call the scattered boys together. Jack arrives leading his choir. The boys vote Ralph chief, and Ralph lets Jack keep the choir as hunters. Exploring with Ralph and Simon, Jack cannot bring himself to kill a piglet.',
      setting: 'The beach, the lagoon and the platform by the palms',
      who: ['Ralph', 'Piggy', 'Jack', 'Simon'],
      quote: 'Seems to me we ought to have a chief to decide things.',
      themes: ['Order, democracy and dictatorship', 'Civilisation versus savagery'],
      tension: 1,
      significance:
        "The island's first government is made by a vote and a shell, and the rivalry between Ralph and Jack is born with it.",
    },
    {
      where: 'Chapter 2',
      title: 'Rules, a beastie and the first fire',
      summary:
        "At the second assembly the conch becomes the right to speak. A small boy with a birthmark speaks of a snake-thing in the woods. The boys rush to light a signal fire with Piggy's glasses, it spreads out of control, and afterwards the small boy cannot be found.",
      setting: 'The platform, then the mountain top',
      who: ['Ralph', 'Jack', 'Piggy', 'The littluns'],
      quote: "We're English; and the English are best at everything.",
      themes: ['Civilisation versus savagery', 'The beast', 'Order, democracy and dictatorship'],
      tension: 2,
      significance:
        'The first fire seems to cost a life before anyone has meant any harm: good intentions are already out of control.',
    },
    {
      where: 'Chapter 3',
      title: 'Huts on the beach',
      summary:
        'Jack hunts alone and fails again, while Ralph and Simon struggle to finish shelters the others have abandoned. Ralph and Jack argue about rescue and meat and cannot understand each other. Simon helps the littluns reach fruit, then slips away to a hidden place in the forest.',
      setting: 'The forest and the half-built shelters on the beach',
      who: ['Jack', 'Ralph', 'Simon', 'The littluns'],
      quote: 'They looked at each other, baffled, in love and hate.',
      themes: ['Order, democracy and dictatorship', 'Civilisation versus savagery'],
      tension: 2,
      significance:
        "The two leaders' priorities split for good: Ralph wants to be rescued, Jack wants to kill.",
    },
    {
      where: 'Chapter 4',
      title: 'A ship passes, a pig dies',
      summary:
        'Jack paints his face and takes the hunters, twins included, into the forest. A ship appears on the horizon, but the signal fire on the mountain has gone out. The hunters return chanting with their first pig. Ralph confronts Jack, and Jack hits Piggy, breaking one lens of his glasses.',
      setting: 'The bathing pool, the beach and the mountain top',
      who: ['Jack', 'Roger', 'Samneric', 'Ralph', 'Piggy'],
      quote: 'You let the fire go out.',
      themes: ['Civilisation versus savagery', 'Loss of innocence'],
      tension: 3,
      significance:
        "Rescue is lost for meat, the first time the hunters' desires cost the whole group something it cannot get back.",
    },
    {
      where: 'Chapter 5',
      title: 'The assembly in the dark',
      summary:
        'Ralph calls an assembly to restore order, but it is swallowed by fear of the beast. Percival says it comes out of the sea, and Simon, struggling for words, suggests that the beast may be the boys themselves. Jack defies the rules and leads the boys away, and Ralph does not dare blow the conch.',
      setting: 'The platform at nightfall',
      who: ['Ralph', 'Piggy', 'Jack', 'Simon', 'Percival'],
      quote: "maybe it's only us",
      themes: ['The beast', 'Order, democracy and dictatorship'],
      tension: 3,
      significance:
        "Reason loses its first public argument to fear, and Simon's truth is dismissed.",
    },
    {
      where: 'Chapter 6',
      title: 'A sign from the grown-ups',
      summary:
        'During a night air battle a dead parachutist drifts down and lands on the mountain. Sam and Eric, tending the fire, see the figure move in the wind and run in terror. Ralph leads a search for the beast; Jack is thrilled by Castle Rock, and Simon senses that the beast may be human.',
      setting: 'The mountain top at night, then Castle Rock',
      who: ['Samneric', 'Ralph', 'Jack', 'Simon'],
      quote: 'at once heroic and sick',
      themes: ['The beast', 'Innate evil and original sin'],
      tension: 3,
      significance:
        'The only message the adult world sends the island is a corpse, and the boys make it their monster.',
    },
    {
      where: 'Chapter 7',
      title: 'The hunt becomes a game',
      summary:
        'On the way to the mountain Ralph wounds a boar with his spear and is thrilled. The boys act out the hunt with Robert as the pig, and the game turns rough. At dusk Ralph, Jack and Roger climb the mountain, see the shape of the dead parachutist and flee.',
      setting: 'The forest pig-run, then the mountain in darkness',
      who: ['Ralph', 'Jack', 'Roger', 'Robert'],
      quote: 'Kill the pig! Cut his throat! Kill the pig! Bash him in!',
      themes: ['Loss of innocence', 'Innate evil and original sin', 'The beast'],
      tension: 4,
      significance:
        'Even Ralph feels the pleasure of violence, so no boy on the island is exempt from it.',
    },
    {
      where: 'Chapter 8',
      title: 'The gift for the darkness',
      summary:
        'Jack fails to have Ralph voted out and leaves to start his own tribe, and older boys slip away to join him. The hunters kill a sow and leave its head on a stick as a gift for the beast. Hidden in his clearing, Simon seems to hear the head speak to him.',
      setting: "Simon's clearing in the forest",
      who: ['Jack', 'Ralph', 'Piggy', 'Simon', 'Roger'],
      quote: "This head is for the beast. It's a gift.",
      themes: ['Innate evil and original sin', 'The beast', 'Order, democracy and dictatorship'],
      tension: 4,
      significance: 'The island splits into two societies, and the beast is given a face.',
    },
    {
      where: 'Chapter 9',
      title: 'A view to a death',
      summary:
        "Simon climbs the mountain, finds the dead parachutist and frees him from his tangled lines. On the beach Ralph and Piggy join Jack's feast as a storm breaks and the boys dance. Simon crawls out of the forest to tell them the truth, is taken for the beast and is killed. The tide carries his body out to sea.",
      setting: 'The beach at night in a thunderstorm',
      who: ['Simon', 'Jack', 'Ralph', 'Piggy'],
      quote: 'Kill the beast! Cut his throat! Spill his blood!',
      themes: ['Innate evil and original sin', 'The beast', 'Loss of innocence'],
      tension: 5,
      significance:
        'The first killing of a boy is done by the whole group, with Ralph and Piggy drawn into the dance.',
    },
    {
      where: 'Chapter 10',
      title: 'Naming it murder',
      summary:
        "Of the older boys only Ralph, Piggy and the twins are left. Ralph insists that what they did to Simon was murder, and Piggy calls it an accident. At Castle Rock Jack rules as chief and has a boy beaten. That night the hunters raid the shelters and steal Piggy's glasses.",
      setting: 'The platform, then the shelters in darkness',
      who: ['Ralph', 'Piggy', 'Samneric', 'Jack', 'Roger'],
      quote: 'That was murder.',
      themes: ['Innate evil and original sin', 'Order, democracy and dictatorship'],
      tension: 3,
      significance:
        "Ralph's honesty isolates him, and the theft of the glasses hands Jack the power of fire.",
    },
    {
      where: 'Chapter 11',
      title: 'Castle Rock',
      summary:
        'Half-blind, Piggy goes with Ralph and the twins to Castle Rock to demand his glasses back. Ralph and Jack fight, and the twins are seized. Piggy holds up the conch and asks the tribe to choose rules over killing. Roger levers a rock down from above, Piggy is killed and the conch is smashed.',
      setting: 'The narrow neck and cliffs of Castle Rock',
      who: ['Piggy', 'Ralph', 'Samneric', 'Jack', 'Roger'],
      quote: 'to have rules and agree, or to hunt and kill?',
      themes: ['Order, democracy and dictatorship', 'Civilisation versus savagery'],
      tension: 5,
      significance:
        'Reason and democracy are destroyed in a single moment, and the tribe forces the twins to join it.',
    },
    {
      where: 'Chapter 12',
      title: 'Cry of the hunters',
      summary:
        'Alone, Ralph hides from the tribe. The twins, now guarding Castle Rock for Jack, warn him that he is to be hunted. Next day the hunters roll rocks and set the forest alight to drive him out. Running for his life, Ralph falls on the beach at the feet of a naval officer, and weeps.',
      setting: 'The burning forest, then the beach',
      who: ['Ralph', 'Samneric', 'Jack', 'Roger', 'The naval officer'],
      quote: "Ralph wept for the end of innocence, the darkness of man's heart",
      themes: ['Loss of innocence', 'Innate evil and original sin', 'Civilisation versus savagery'],
      tension: 5,
      significance:
        'Rescue arrives from a world at war, and the novel ends on grief rather than relief.',
    },
  ],

  relationships: [
    {
      from: 'Ralph',
      to: 'Jack',
      kind: 'rival leaders',
      note: 'Elected chief and head of the hunters. Their rivalry starts as friendly competition in Chapter 1, is already mixed with love and hate by Chapter 3, and ends with Jack hunting Ralph to kill him.',
    },
    {
      from: 'Ralph',
      to: 'Piggy',
      kind: 'friends and allies',
      note: "Ralph gives away Piggy's hated nickname in Chapter 1, but comes to rely on his thinking, and on the last page Piggy is one of the losses he weeps for.",
    },
    {
      from: 'Jack',
      to: 'Piggy',
      kind: 'tormentor and victim',
      note: "Jack despises Piggy from the start, breaks one lens of his glasses in Chapter 4 and steals them in Chapter 10: the hunter's contempt for the thinker.",
    },
    {
      from: 'Ralph',
      to: 'Simon',
      kind: 'chief and helper',
      note: 'Simon builds the shelters with Ralph when others will not, and in Chapter 7 tells him he will get back home. His loyalty is quiet and practical, and Ralph never fully understands him.',
    },
    {
      from: 'Jack',
      to: 'Roger',
      kind: 'chief and enforcer',
      note: "Roger's cruelty needs Jack's authority to be let loose. By Chapter 11 Roger kills Piggy and then advances on the captured twins with an authority of his own.",
    },
    {
      from: 'Samneric',
      to: 'Ralph',
      kind: 'loyal followers, then captives',
      note: "The twins stay with Ralph after Simon's death, are forced into the tribe in Chapter 11, and still warn Ralph in Chapter 12 while guarding against him.",
    },
    {
      from: 'Roger',
      to: 'Piggy',
      kind: 'killer and victim',
      note: 'Roger throws stones to miss in Chapter 4 and levers down the rock that kills Piggy in Chapter 11: the clearest measure of how far restraint has gone.',
    },
    {
      from: 'The naval officer',
      to: 'Ralph',
      kind: 'rescuer and rescued',
      note: "The officer sees a game where Ralph has seen murder. The distance between what the adult thinks happened and what did is the novel's final irony.",
    },
  ],

  compareWith: [
    {
      title: 'Animal Farm',
      href: '/revision/texts/animal-farm',
      reason:
        'A political allegory on the AQA and Edexcel lists in which a society founded on shared rules is taken over by a leader who rules through fear, as Jack does.',
    },
    {
      title: 'An Inspector Calls',
      href: '/revision/texts/an-inspector-calls',
      reason:
        "On all three boards' lists, and like Golding's novel it tests whether a comfortable, respectable society is as civilised as it believes, then ends by bringing the outside world crashing in.",
    },
    {
      title: 'Blood Brothers',
      href: '/revision/texts/blood-brothers',
      reason:
        "On all three boards' lists, a play in which children's games with toy guns grow into real violence, useful for comparing how each writer presents the loss of innocence.",
    },
  ],

  contentGuidance: [
    'violence',
    'mortality',
    'discrimination',
    'mythological_religious',
    'political_ideology',
  ],

  quotesFromElsewhere: ['trace the defects of society back to the defects of human nature'],

  sources: [
    {
      label:
        'Open Library full-text search of scanned printed books (26 September 2026): every quotation confirmed word for word, with its punctuation, in printed editions of the novel, anthologies that reprint its chapters, and study guides and criticism including York Notes, Letts Explore, John S. Whitley (1970), Kinkead-Weekes and Gregor (1967), Readings on Lord of the Flies (1997) and SparkNotes',
      url: 'https://openlibrary.org/search/inside',
    },
    {
      label: 'Published word counts for the novel (about 59,900 words), used for the length above',
      url: 'https://www.studentary.com/how-many-words-is-lord-of-the-flies-word-count/',
    },
    {
      label:
        'Shmoop, Lord of the Flies quotation pages by theme and chapter (second check of wording and chapter)',
      url: 'https://www.shmoop.com/study-guides/literature/lord-of-the-flies/quotes',
    },
    {
      label:
        'Wikipedia, Lord of the Flies (Faber and Faber, 17 September 1954; Charles Monteith\'s edits including removal of an opening evacuation section, citing his essay "Strangers from Within" in Carey, ed., William Golding: The Man and His Books, Faber 1986, US edition 1987; the title as a translation of Beelzebub; the officer\'s Coral Island line)',
      url: 'https://en.wikipedia.org/wiki/Lord_of_the_Flies',
    },
    {
      label:
        'The official William Golding website, timeline (Monteith took up the typescript at Faber in September 1953; published by Faber and Faber in September 1954)',
      url: 'https://william-golding.co.uk/timeline',
    },
    {
      label:
        "Golding's publicity-questionnaire statement of the theme, as quoted in E. L. Epstein's note and in F. William Nelson's source book (1963), James R. Baker (1965) and Arnold Johnston (1980), confirmed through Open Library full-text search",
      url: 'https://openlibrary.org/search/inside?q=%22trace+the+defects+of+society+back+to+the+defects+of+human+nature%22',
    },
    {
      label:
        "Wikipedia, The Coral Island (Ballantyne, 1857; Ralph Rover, Jack Martin and Peterkin Gay; Golding's novel as a counterpoint to it)",
      url: 'https://en.wikipedia.org/wiki/The_Coral_Island',
    },
    {
      label:
        "Wikipedia, The Hot Gates (1965; the essay Fable, based on lectures Golding gave at UCLA, answering students' questions about the novel)",
      url: 'https://en.wikipedia.org/wiki/The_Hot_Gates',
    },
    {
      label: "Wikipedia, Robinsonade (definition; named after Defoe's Robinson Crusoe, 1719)",
      url: 'https://en.wikipedia.org/wiki/Robinsonade',
    },
    {
      label:
        'Wikipedia, Dazzle camouflage (used extensively in the First World War and less in the Second; meant to confuse range, speed and heading rather than to conceal)',
      url: 'https://en.wikipedia.org/wiki/Dazzle_camouflage',
    },
    {
      label:
        'Board placement for compareWith: AQA 8702, Pearson Edexcel 1ET0 and Eduqas modern prose and drama lists as recorded in src/lib/board/prescribed-texts.ts (read 19 September 2026)',
    },
  ],
}
