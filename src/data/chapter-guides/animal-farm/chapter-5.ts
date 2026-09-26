import type { ChapterGuide } from '@/lib/study-guides/chapter-guide'

/**
 * Animal Farm, Chapter 5: Mollie's desertion, the windmill vote, Snowball's
 * expulsion and the end of the Sunday debates.
 *
 * QUOTATIONS. Every close-reading quotation and every phrase quoted in the
 * prose was read off Chapter V (section-5) of the held edition,
 * src/data/full-texts/animal-farm.ts (Project Gutenberg Australia), apart
 * from three phrases from other chapters: "Boxer was never seen again."
 * (Chapter 9) and "Four legs good, two legs better!" (Chapter 10, printed
 * there with BETTER in capitals), each named with its chapter where it is
 * used, and "All animals are comrades" (Chapter 1), a wrong option in the
 * quiz. chapter-guides.test.ts checks them all against the edition.
 *
 * ORWELL'S OWN WORDS. His December 1946 letter to Dwight Macdonald and his
 * 1947 preface to the Ukrainian edition are reported, not quoted: the test
 * checks every double-quoted phrase in the prose against the novella, and
 * a quotation from outside it would fail as if it were invented.
 *
 * HISTORY. The Soviet parallels are stated as readings, with dates taken from
 * the sources listed at the foot of the file (fetched 26 September 2026).
 * Things found while checking, recorded so nobody reintroduces them:
 * - Trotsky was expelled from the party in November 1927, exiled to Alma-Ata
 *   in 1928 and deported from the Soviet Union in 1929. The chapters page's
 *   "exile in 1929" is the deportation.
 * - Snowball's pigeons and Napoleon's firearms (the defence debate) are the
 *   chapter's parallel to permanent revolution against socialism in one
 *   country; the windmill U-turn is the parallel to Stalin taking over the
 *   Left Opposition's call for rapid industrialisation.
 *
 * ADVERSARIAL REVIEW (26 September 2026). A second reader checked every plot
 * statement against section-5 and every outside fact against sources fetched
 * again. What it corrected, so nobody reintroduces it:
 * - Mollie is not "the first animal to leave": Moses flies off after Mrs Jones
 *   in Chapter 2. She is the first to desert Animal Farm.
 * - The dogs that wagged their tails to Mr Jones were the farm's OTHER dogs,
 *   not Napoleon's; the theme paragraph had it the other way round.
 * - Chapter 5 is not "the exact middle" of ten chapters.
 * - The chapter says Snowball "often" won the Meetings, that Snowball and
 *   Napoleon (not "the pigs") disagreed about defence, that the pigeons'
 *   report came weeks after Mollie left, and that Napoleon canvassed "in
 *   between times", not in private. Chapter 7 identifies the four pigs; it
 *   does not name them. Only three dogs are with Squealer at the end.
 * - Squealer's "tactics" explains the earlier opposition, not the reversal.
 * - Trotsky's office was People's Commissar for Military and Naval Affairs.
 */
export const chapter: ChapterGuide = {
  slug: 'animal-farm',
  chapter: 5,
  part: 'Chapter 5',
  title: 'The windmill vote and the end of debate',
  atAGlance:
    "Mollie deserts the farm, and the long-running rivalry between Snowball and Napoleon comes to a head over Snowball's plan for a windmill. As the vote is about to go Snowball's way, Napoleon sets nine dogs on him, drives him off the farm and ends the Sunday debates for good. It is the hinge of the novella: from here the farm is ruled by force and explained by propaganda, and within three weeks Squealer is claiming the windmill was Napoleon's idea all along.",

  summary: [
    "As winter comes on, Mollie grows more and more troublesome. She is late for work, complains of mysterious pains and slips away to gaze at her reflection in the drinking pool. Clover tells her she is almost certain she saw one of Mr Pilkington's men, on the Foxwood side of the hedge, stroking her nose. Mollie denies it but cannot look Clover in the face, and under Mollie's straw Clover finds lump sugar and ribbons. Three days later Mollie is gone. Some weeks after that the pigeons report seeing her beyond Willingdon, between the shafts of a smart dogcart outside a public-house, being fed sugar by a red-faced man, and after that none of the animals mentions her again.",
    "In the hard January weather the pigs plan the coming season's work. It is now accepted that the pigs, as the cleverest animals, decide questions of farm policy, although a majority vote must still ratify their decisions. Snowball and Napoleon disagree about everything. Snowball often wins over the Meetings with brilliant speeches and is full of schemes from old farming papers; Napoleon produces no schemes of his own and canvasses support between Meetings, especially among the sheep, who have taken to bleating “Four legs good, two legs bad” at crucial moments in Snowball's speeches.",
    "The bitterest quarrel is over the windmill. Snowball chooses the knoll in the long pasture, works out the plans from three of Mr Jones's books in an old incubator shed, and promises electric light, heating and machines that will do the animals' work for them. The other animals come to look at his chalk drawings every day. Napoleon, against the windmill from the start, inspects them once, urinates on them and leaves without a word. The farm splits into two factions, one behind “Vote for Snowball and the three-day week”, the other behind “Vote for Napoleon and the full manger.” Benjamin sides with neither. Snowball and Napoleon disagree about defence too: Napoleon wants firearms, Snowball wants to send out pigeons to stir up rebellion on other farms, and the animals agree with whichever of them has just spoken.",
    "When the plans are finished, the windmill is put to the vote at a Sunday Meeting. Napoleon speaks against it for barely thirty seconds. Snowball, shouting down the sheep, paints such a picture of an electric farm that the vote is plainly his. Then Napoleon stands, gives a high-pitched whimper, and nine enormous dogs in brass-studded collars burst into the barn and chase Snowball across the long pasture until he escapes through a hole in the hedge. The dogs are the puppies Napoleon took from their mothers in Chapter 3, and they now wag their tails to him as the farm's dogs once did to Mr Jones.",
    'From the raised part of the floor where Major gave his speech, Napoleon ends the Sunday Meetings. A special committee of pigs, with himself presiding, will meet in private and pass on its decisions; the animals will gather on Sundays only to salute the flag, sing Beasts of England and receive their orders. Boxer is troubled but cannot find the words to object. Four young pigs protest, the dogs growl them into silence, and the sheep bleat for nearly a quarter of an hour. Squealer is sent round to explain that leadership is a sacrifice, that the animals might make the wrong decisions, and that Snowball was no better than a criminal whose part in the Battle of the Cowshed will one day be found “much exaggerated”. His question, “Surely, comrades, you do not want Jones back?”, ends the argument, and Boxer adopts a new maxim, “Napoleon is always right”.',
    "By spring the Sundays have a new shape. Major's skull, dug up from the orchard, stands on a stump by the flagstaff beside the gun, and the animals must file past it before entering the barn. Inside, Napoleon, Squealer and a pig called Minimus, a composer of songs and poems, sit on the platform with the nine young dogs in a semicircle round them, and Napoleon reads out the week's orders “in a gruff soldierly style”. On the third Sunday after Snowball's expulsion he announces, without giving a reason, that the windmill will be built after all, at the cost of very hard work and perhaps smaller rations. That evening Squealer explains that the plans were stolen from Napoleon's papers and that his opposition was only a manoeuvre to get rid of Snowball: “Tactics, comrades, tactics!” With three dogs growling beside him, nobody asks any more questions.",
  ],

  keyEvents: [
    'Mollie deserts Animal Farm for a life among humans, after Clover finds sugar and ribbons hidden in her stall.',
    "The winter rivalry between Snowball and Napoleon divides the farm, above all over Snowball's windmill, which Napoleon answers by urinating on the plans.",
    "At the Sunday Meeting called to vote on the windmill, Napoleon's nine dogs chase Snowball off the farm just as the vote is turning his way.",
    'Napoleon abolishes the Sunday debates and hands every decision to a special committee of pigs that he presides over and that meets in private.',
    "Four young pigs who protest are silenced by the dogs' growls and the sheep's bleating.",
    "Squealer presents Napoleon's power as a sacrifice, begins to rewrite Snowball's part in the Battle of the Cowshed, and ends all doubt with the threat of Jones's return.",
    'Boxer adopts his second maxim, “Napoleon is always right”, beside his private motto, “I will work harder”.',
    "Three Sundays later Napoleon announces that the windmill will be built after all, and Squealer claims it was Napoleon's idea from the beginning.",
  ],

  closeReading: [
    {
      quote: 'None of the animals ever mentioned Mollie again.',
      technique: 'Short declarative sentence closing an episode',
      analysis:
        "After the pigeons' vivid report of the dogcart, the scarlet ribbon and the red-faced man, the episode shuts with eight flat words. The silence is collective: no animal decides it, yet all of them keep it. One reading is that this is the first time the farm deals with an awkward truth by not speaking of it, the habit that later lets Squealer rewrite Snowball's story. Orwell repeats the rhythm in Chapter 9: “Boxer was never seen again.”",
    },
    {
      quote: 'he lifted his leg, urinated over the plans, and walked out without uttering a word',
      technique: 'Bathos in a list of three actions',
      analysis:
        'The sentence builds suspense as Napoleon walks heavily round the shed, studies every detail and snuffs at the plans, then drops into a crude animal act. The three verbs move fast and end on “without uttering a word”, which sets Napoleon against Snowball, the pig of speeches and chalk lines. Contempt takes the place of argument. It is comic, but it previews his method in the barn: when he wins, it will be by action, not debate.',
    },
    {
      quote:
        'Windmill or no windmill, he said, life would go on as it had always gone on—that is, badly.',
      technique: 'Reported speech with a delayed final word',
      analysis:
        "Orwell gives Benjamin's view in the narrator's voice and holds back the verdict until the last word, “badly”, which lands like a shrug after the pause of the dash. Repeating the verb, “go on” and then “gone on”, makes life sound like an endless loop. Benjamin is the only animal who refuses both factions, and the rest of the novella largely proves him right about the ordinary animals' lives. Yet one reading is that his clever neutrality is also a failure: seeing through everyone, he stands up to no one.",
    },
    {
      quote:
        'they always found themselves in agreement with the one who was speaking at the moment',
      technique: 'Satirical irony in a deadpan narrative voice',
      analysis:
        "The narrator states the animals' confusion as plain fact, but the joke has a sting: an audience that agrees with whoever happens to be speaking has no judgement of its own to defend. That is why the vote can be swung by eloquence, and why it can be ended by force. Orwell later told Dwight Macdonald that revolutions bring real improvement only when the masses are alert. This line shows a crowd that is not, and the rest of the chapter shows the cost.",
    },
    {
      quote: 'Though not yet full-grown, they were huge dogs, and as fierce-looking as wolves.',
      technique: 'Simile',
      analysis:
        'Farm dogs guard a flock; wolves hunt one. The simile turns animals that should protect the farm into predators, and “not yet full-grown” adds menace, because they will only get bigger. The next sentences complete the picture: they keep close to Napoleon and wag their tails to him as the old dogs did to Mr Jones. The dogs are usually read as the secret police, loyal to one master rather than to the farm.',
    },
    {
      quote:
        'Do not imagine, comrades, that leadership is a pleasure! On the contrary, it is a deep and heavy responsibility.',
      technique: 'Imperative, direct address and antithesis',
      analysis:
        'Squealer rebuts a charge nobody has made out loud. The imperative tells the animals what not to think, “comrades” flatters them as equals, and the antithesis of pleasure and responsibility turns a seizure of power into a burden Napoleon has kindly taken on. The weighty adjectives “deep and heavy” ask for sympathy. Orwell shows propaganda working by reframing: the coup is not denied, only renamed, so the animals are asked to feel grateful for losing their vote.',
    },
    {
      quote: 'If Comrade Napoleon says it, it must be right.',
      technique: 'Conditional sentence',
      analysis:
        'Boxer has had time to think things over, and this is the result: not a reason but a rule for never needing one. The conditional sounds like logic, but it simply hands judgement from Boxer to Napoleon. The narrator says Boxer voiced the general feeling, so the line speaks for the whole farm. Set beside “I will work harder”, it shows the best worker on the farm pledging his mind to the leader as well as his body.',
    },
    {
      quote:
        'Squealer spoke so persuasively, and the three dogs who happened to be with him growled so threateningly',
      technique: 'Parallel structure and irony',
      analysis:
        'The two halves of the sentence are built alike, “so persuasively” and “so threateningly”, as if words and growls were equal kinds of argument. Under Napoleon they are. “Happened to be” borrows the innocent view of the animals, while the reader sees that the dogs are there on purpose. The chapter ends on the partnership that will run the farm from now on: Squealer explains, and the dogs make sure the explanation is accepted.',
    },
  ],

  characters: [
    {
      name: 'Napoleon',
      development:
        "Chapter 5 shows Napoleon's method in full. He argues little, canvasses between Meetings, and has force ready in secret: the dogs are the puppies he took away in Chapter 3, which suggests the coup had been prepared for months. The sheep, with whom he is especially successful, happen to interrupt Snowball at crucial moments. Afterwards he stands where Major stood, ends the debates and reads out orders “in a gruff soldierly style”. His U-turn on the windmill suggests he opposed it only to beat Snowball.",
    },
    {
      name: 'Snowball',
      development:
        "Snowball is at his most brilliant: studious, inventive and a gifted speaker whose vision of an electric farm wins over the Meeting. Orwell does not make him a saint. His plans depend on everyone else's labour, and he never says how the dynamos and cables are to be found. His flight through the hedge is his last appearance in the novella; from now on he exists only in what the pigs say about him, starting with Squealer's claim that he was no better than a criminal.",
    },
    {
      name: 'Squealer',
      development:
        "Squealer becomes the voice of the new order. He presents the coup as Napoleon's sacrifice, uses the fear of Jones to close the discussion, and makes his first attempt to rewrite the past, suggesting that Snowball's part in the Battle of the Cowshed was “much exaggerated”. By the end of the chapter he claims the windmill was Napoleon's creation and explains the earlier opposition as “Tactics, comrades, tactics!”, skipping and laughing while the dogs beside him growl.",
    },
    {
      name: 'Boxer',
      development:
        "Boxer is vaguely troubled by the end of the Meetings. He sets his ears back and tries to marshal his thoughts, but cannot think of anything to say. His loyalty then hardens into a creed: he adopts “Napoleon is always right” alongside “I will work harder”. Old Major warned him in Chapter 1 that he would end at the knacker's; here he hands his judgement to the pigs who will one day send him there.",
    },
    {
      name: 'Clover',
      development:
        "Clover acts as the farm's conscience in the opening scene. She confronts Mollie directly, then checks her suspicion herself and finds the sugar and ribbons under the straw. Her care for the others, first seen when she shelters the lost ducklings in Chapter 1, makes her the animal who notices. It prepares for Chapter 7, where she feels most clearly that the revolution has gone wrong but lacks the words to say so.",
    },
    {
      name: 'Mollie',
      development:
        "Mollie is the first animal to desert Animal Farm; Moses the raven flew off after Mrs Jones during the Rebellion itself, in Chapter 2. The sugar and ribbons hidden in her stall, the very comforts she asked Snowball about in Chapter 2, show that she never gave up her old life. The pigeons' report of her newly clipped coat and scarlet ribbon suggests she is content to serve a human master. She is often read as those who opt out of a revolution for personal comfort, and compared with the people who left Russia after the fall of the Tsar. The farm's silence about her is its first erasure.",
    },
    {
      name: 'Benjamin',
      development:
        'Benjamin is the only animal who refuses to join either faction, believing that life will go on badly with or without a windmill. His cynicism is shrewd, and the novella largely bears it out, but it leads to nothing. In a chapter where the other animals cannot find the arguments they need, the one animal clear-sighted enough to see through both sides keeps his distance, and he is not heard from when the debates are abolished.',
    },
    {
      name: 'The dogs',
      development:
        "The nine dogs are Napoleon's answer to argument. Reared in secret from puppies, they chase Snowball off the farm, keep close to Napoleon, growl the young pigs into silence, sit in a semicircle round the platform, and three of them go with Squealer when he explains. That they wag their tails to Napoleon as the old dogs did to Mr Jones is the first sign that a pig is being treated as the humans were.",
    },
    {
      name: 'The sheep',
      development:
        "The sheep turn Snowball's own slogan against him. Bleating “Four legs good, two legs bad” at crucial moments in his speeches, and for nearly a quarter of an hour after Napoleon's announcement, they show how a slogan repeated without understanding becomes noise that ends discussion. Snowball devised the slogan to teach them in Chapter 3; now, with Napoleon especially successful among them, it works for him, keeping everyone else quiet.",
    },
    {
      name: 'The four young pigs',
      development:
        'Four young porkers in the front row are the only animals who protest out loud against the end of the Meetings. That the objection comes from pigs shows the ruling class is not yet united behind Napoleon, and the growls that silence them show what disagreement will now cost. Chapter 7 brings them back: the same four pigs are the first to confess to plotting with Snowball and are killed by the dogs.',
    },
    {
      name: 'Minimus',
      development:
        'Minimus, a pig with a remarkable gift for composing songs and poems, appears for the first time, seated on the platform beside Napoleon and Squealer. Placing a poet among the rulers suggests that art, too, will now serve the leader. Chapter 7 confirms it when his new song replaces Beasts of England, and Chapter 8 when he writes a poem in praise of Napoleon.',
    },
    {
      name: 'Old Major',
      development:
        'Major is present only as a skull, dug up and set on a stump by the flagstaff for the animals to file past “in a reverent manner”. His teaching has become a relic to be honoured rather than a guide to be followed, and Napoleon abolishes debate standing on the very spot from which Major urged the animals to rebel.',
    },
  ],

  themes: [
    {
      theme: 'Power and Corruption',
      development:
        "Chapter 5 is where power stops being shared. Napoleon wins not by persuading the animals but by preparing force in secret, and once he holds power he removes every means of taking it back: no Meetings, no debates, decisions made in private by a committee he runs. The dogs wagging their tails to him as the farm's other dogs once did to Mr Jones is the first hint that the new master is becoming the old one.",
    },
    {
      theme: 'Language and Propaganda',
      development:
        "Words are turned against thought. The sheep's slogan drowns debate, Squealer recasts a coup as a sacrifice and a U-turn as tactics, and he begins to rewrite the Battle of the Cowshed. His question “Surely, comrades, you do not want Jones back?” allows only one answer. The animals cannot reply, not because Squealer is right but because they lack the words, and because his arguments arrive with dogs beside them.",
    },
    {
      theme: 'Revolution and Betrayal',
      development:
        "Napoleon ends the debates from the raised floor where Major called for rebellion, and the skull turns Major into a relic. Snowball's promise of a three-day week becomes Napoleon's warning of very hard work and perhaps smaller rations. The outward forms of the revolution, the flag, the song and the Sunday gathering, survive, while its purpose, equal animals deciding their future together, is quietly removed.",
    },
    {
      theme: 'Education and Ignorance',
      development:
        "Snowball's plans come out of books; the other animals find his drawings “completely unintelligible but very impressive”. Boxer, troubled, cannot marshal his thoughts, and the animals accept Squealer's explanation without knowing what the word tactics means. Orwell shows that animals who cannot read or argue well are easy to rule, and that the clever pigs have every reason to keep things that way.",
    },
    {
      theme: 'Loyalty and Betrayal',
      development:
        "Two animals choose opposite loyalties. Mollie abandons the farm for sugar and ribbons and is never mentioned again; Boxer pledges his judgement to Napoleon. When Squealer answers that bravery is not enough and “Loyalty and obedience are more important”, he redefines loyalty itself: from now on it means loyalty to a leader, not to the revolution's ideals or to the other animals.",
    },
  ],

  context: [
    {
      heading: 'Snowball and Trotsky: an allegorical reading',
      body: "Snowball is usually read as Leon Trotsky and Napoleon as Joseph Stalin. Trotsky led the Red Army as People's Commissar for Military and Naval Affairs from 1918 to 1925, which is one reason Snowball's courage in the Battle of the Cowshed matters to the allegory. After Lenin died in January 1924, Trotsky lost the struggle for power to Stalin. He was expelled from the Communist Party in November 1927, exiled to Alma-Ata in 1928 and deported from the Soviet Union in 1929; in 1940 he was killed in Mexico City by Ramón Mercader, a Stalinist agent. Orwell squeezes those years into one Sunday Meeting. In his 1947 preface to the Ukrainian edition he said that the book's episodes come from the history of the Russian Revolution but are treated schematically, with their order changed, so read the parallels as parallels, not as a timetable.",
    },
    {
      heading: 'The windmill and the defence debate: two arguments of the 1920s',
      body: "Both of the chapter's quarrels are usually read against arguments inside the Soviet leadership. From 1923 Trotsky's Left Opposition pressed for rapid industrialisation. Stalin, allied from late 1924 with Nikolai Bukharin, a strong supporter of the New Economic Policy and its slower road, stood against the Left. Once the Left was beaten, Stalin sidelined Bukharin and launched rapid industrialisation himself in the first Five-Year Plan, from 1928 to 1932; the historian Sheila Fitzpatrick describes a scholarly consensus that he took over the Left's position. Napoleon opposing the windmill, then adopting it as his own, fits that pattern. The defence debate fits another: Trotsky held that the revolution could survive only if it spread to the more advanced capitalist countries, while Stalin argued from 1924 for socialism in one country, as Snowball's pigeons stand against Napoleon's firearms.",
    },
    {
      heading: 'The dogs, the committee and the skull',
      body: "Three details of the new order are usually given historical readings. The dogs, reared in secret and loyal only to Napoleon, are read as the secret police of Stalin's state, which in the 1920s was the OGPU (1923 to 1934), replaced in 1934 by a directorate of the NKVD. The special committee of pigs meeting in private recalls the Politburo, the party's highest executive body, which under Stalin became an instrument of personal dictatorship. Major's skull, dug up and displayed, recalls Lenin: after his death on 21 January 1924 his body was embalmed and put on show in a mausoleum on Red Square, where it still lies. These are readings, and Orwell's farm never matches history point for point.",
    },
    {
      heading: 'What Orwell said the book was about',
      body: 'In a letter to Dwight Macdonald in December 1946, Orwell wrote that the moral he intended was that revolutions bring a radical improvement only when the masses are alert and know how to throw out their leaders once those leaders have done their job, and that there is no such thing as a benevolent dictatorship. He placed the turning point earlier, when the pigs keep the milk and apples for themselves in Chapter 3, and linked it to Kronstadt, where the Bolsheviks put down a rising of sailors, naval infantry and civilians in March 1921. Chapter 5 shows the price of that first silence: by the time the animals want to object, they cannot find the arguments, and the dogs are already in the barn.',
    },
  ],

  structure:
    "Chapter 5 closes the first half of the novella's ten chapters and is its hinge. Chapters 1 to 4 build the revolution and defend it; Chapters 6 to 10 show it hardening into tyranny. The chapter moves in four stages: Mollie's desertion, a short prologue about leaving; the winter rivalry and the windmill debate, told in long summarising paragraphs; the vote and the chase, one of the fastest-paced passages in the book, full of near misses; and the new order, told largely through Squealer's speeches. The central scenes are set in the big barn of Chapter 1, and Napoleon speaks from Major's platform, so the scene of the dream becomes the scene of its ending. The chapter closes on irony, as the windmill returns as Napoleon's idea, a reversal the reader sees through and the animals do not.",

  vocabulary: [
    {
      term: 'blithely',
      meaning:
        'Cheerfully and without a care. Mollie strolls blithely into the yard just before Clover confronts her, as if she has nothing to hide.',
    },
    {
      term: 'dogcart',
      meaning:
        'A light horse-drawn cart for passengers. Mollie is last seen between the shafts of a smart one, pulling for a human master again.',
    },
    {
      term: 'ratified',
      meaning:
        "Formally approved. The pigs' decisions still had to be ratified by a majority vote, which is exactly the power the animals lose in this chapter.",
    },
    {
      term: 'canvassing',
      meaning:
        'Seeking support person by person, as before an election. Napoleon canvasses between Meetings while Snowball wins over the Meetings themselves with speeches.',
    },
    {
      term: 'dynamo',
      meaning:
        "A machine that turns movement into electricity. Snowball's windmill is meant to drive one and light and heat the stalls.",
    },
    {
      term: 'held aloof',
      meaning:
        "Kept his distance and took no part. Napoleon held aloof from Snowball's drawings until the day he arrived to examine them, and urinated on them.",
    },
    {
      term: 'faction',
      meaning:
        'A group inside a larger body that pushes its own side of an argument. The farm splits into two factions over the windmill.',
    },
    {
      term: 'articulate',
      meaning:
        'Able to put thoughts into clear words. The young pigs are more articulate than Boxer, which is why they are the ones who manage to protest.',
    },
    {
      term: 'moonshine',
      meaning:
        "Foolish, unrealistic nonsense. Squealer dismisses Snowball's windmill as moonshine only weeks before Napoleon announces that it will be built.",
    },
    {
      term: 'maxim',
      meaning:
        'A short rule for how to think or behave. Boxer adopts “Napoleon is always right” as a maxim beside his private motto.',
    },
    {
      term: 'disinterred',
      meaning:
        "Dug up from a grave. Major's skull is disinterred from the orchard and set up by the flagstaff.",
    },
    {
      term: 'manoeuvre',
      meaning:
        "A clever move made to gain an advantage. Squealer claims Napoleon's opposition to the windmill was a manoeuvre to get rid of Snowball.",
    },
  ],

  examQuestion: {
    question:
      'Starting with Chapter 5, explore how Orwell presents the ways opposition is silenced on Animal Farm. Write about Chapter 5 and about the novella as a whole.',
    guidance: [
      'Open with a clear argument, for example: Orwell shows opposition silenced by force, by language and, most troublingly, by the animals themselves, and Chapter 5 is where all three first work together.',
      'Force in Chapter 5: the nine dogs chase Snowball off the farm and growl the four young pigs into silence. Analyse the simile “as fierce-looking as wolves” and the feeble “high-pitched whimper” that summons them.',
      'Language in Chapter 5: the sheep bleat for nearly a quarter of an hour, and Squealer recasts the coup as a sacrifice and asks “Surely, comrades, you do not want Jones back?” Show how a question with only one possible answer ends a debate.',
      'Self-silencing in Chapter 5: Boxer cannot think of anything to say, then adopts “Napoleon is always right”. Explore why an animal who will not question needs no guarding.',
      'Look back to Chapter 3, where Napoleon takes the puppies away and Squealer uses the threat of Jones to keep the milk and apples for the pigs: the roots of Chapter 5 are planted there.',
      'Look forward: Snowball becomes the scapegoat for the fallen windmill in Chapter 6, animals confess and are killed in Chapter 7 and Beasts of England is banned, and in Chapter 10 the sheep bleat “Four legs good, two legs better!” Track how silencing escalates from noise to killing.',
      "Conclude with Orwell's purpose: in a letter of 1946 he said real change needs the masses to be alert and able to remove their leaders. Argue that the novella shows what happens when they are not, and link it to Stalin's Soviet Union as a reading, not a code.",
    ],
    tips: [
      'Embed short quotations in your own sentences and analyse single words, such as “happened to be” or “deep and heavy”, rather than copying out long passages.',
      'Name a technique only when you can say what it does. Simile, rhetorical question and parallel structure are all useful in this chapter; a label with no explanation earns little.',
      "Use context to support a point about the text, for example Trotsky's expulsion alongside Snowball's, and present it as a reading: Orwell himself said he changed the order of events.",
      'Keep Napoleon, Squealer and the dogs in view together. The chapter shows force and persuasion working as partners, and an answer that treats them separately misses that.',
    ],
  },

  quiz: [
    {
      question: "What does Clover find hidden under the straw in Mollie's stall?",
      options: [
        'A message from Mr Pilkington',
        'Corn taken from the store-shed',
        'Lump sugar and bunches of ribbon',
        'A halter and a whip',
      ],
      answer: 2,
      explanation:
        'Sugar and ribbons are the comforts Mollie asked about in Chapter 2, when Snowball called ribbons the badge of slavery. Finding them shows she never gave up her old life, and three days later she disappears.',
    },
    {
      question:
        "Snowball's supporters rallied behind the three-day week. What did Napoleon's supporters promise?",
      options: [
        'The full manger',
        'Electric light in every stall',
        'A pension for every animal',
        'An extra day of rest each week',
      ],
      answer: 0,
      explanation:
        'The slogans were “Vote for Snowball and the three-day week” and “Vote for Napoleon and the full manger.” Napoleon argued that growing food mattered more than the windmill, which makes his later U-turn all the more striking.',
    },
    {
      question: 'How long does Napoleon speak against the windmill at the decisive Meeting?',
      options: [
        'Nearly a quarter of an hour',
        'Barely thirty seconds',
        'Most of the morning',
        'He does not speak at all',
      ],
      answer: 1,
      explanation:
        'He says quietly that the windmill is nonsense and sits down after barely thirty seconds. He does not need to win the argument, because the dogs are waiting outside. Nearly a quarter of an hour is how long the sheep bleat later.',
    },
    {
      question: 'Where do the nine dogs come from?',
      options: [
        'Mr Jones left them behind when he fled',
        'Napoleon bought them from Mr Pilkington',
        'They were strays from Willingdon',
        'Napoleon took them from their mothers as puppies and reared them privately',
      ],
      answer: 3,
      explanation:
        'In Chapter 3 Napoleon took the puppies away as soon as they were weaned, saying he would make himself responsible for their education. Chapter 5 reveals what that education was for.',
    },
    {
      question: 'What replaces the Sunday-morning debates?',
      options: [
        'A special committee of pigs, presided over by Napoleon, meeting in private',
        'A monthly vote of all the animals',
        'A council of the oldest animals, led by Clover',
        'Open debates held in the farmhouse',
      ],
      answer: 0,
      explanation:
        'The animals still gather on Sundays, but only to salute the flag, sing Beasts of England and receive their orders. Napoleon keeps the outward forms of the revolution while removing the part that gave the animals a say.',
    },
    {
      question: 'Who protests out loud when Napoleon ends the Meetings?',
      options: ['Boxer and Clover', 'Benjamin', 'Four young pigs in the front row', 'The hens'],
      answer: 2,
      explanation:
        'Four young porkers squeal their disapproval, but the dogs growl and they sit down again. Boxer is troubled but cannot think of anything to say. In Chapter 7 the same four pigs are the first to confess and be killed.',
    },
    {
      question: "What new maxim does Boxer adopt after Squealer's explanation?",
      options: [
        '“I will work harder”',
        '“Four legs good, two legs bad”',
        '“All animals are comrades”',
        '“Napoleon is always right”',
      ],
      answer: 3,
      explanation:
        '“I will work harder” is his existing private motto. He adds “Napoleon is always right” after saying that whatever Comrade Napoleon says must be right, handing his judgement to the leader.',
    },
    {
      question: "How does Squealer explain Napoleon's sudden support for the windmill?",
      options: [
        "Napoleon has had a dream like Major's",
        'Napoleon only seemed to oppose it, to get rid of Snowball, and the plans were really his',
        'Snowball has written from exile to beg for it',
        'The neighbouring farms are building windmills too',
      ],
      answer: 1,
      explanation:
        "Squealer claims the plans were stolen from among Napoleon's papers and calls the earlier opposition tactics. The animals are not sure what the word means, but Squealer is persuasive and three dogs growl beside him, so they accept it.",
    },
  ],

  sources: [
    {
      label:
        'The held edition, src/data/full-texts/animal-farm.ts: Project Gutenberg Australia transcription (eBook 0100011h). Every quotation and every detail of the chapter read from section-5, with cross-references checked in sections 1, 2, 3, 7, 8, 9 and 10',
      url: 'https://gutenberg.net.au/ebooks01/0100011h.html',
    },
    {
      label:
        "Wikipedia, Animal Farm: Snowball's life parallels Trotsky's; Napoleon is an allegory of Stalin; the puppies parallel the nurture of the secret police; the windmill suggests the five-year plans; Major's skull on display recalls Lenin's embalmed body; Mollie leaves like those who left Russia after the fall of the Tsar",
      url: 'https://en.wikipedia.org/wiki/Animal_Farm',
    },
    {
      label:
        "Wikipedia, Leon Trotsky, re-fetched in review 26 September 2026: People's Commissar for Military and Naval Affairs, 14 March 1918 to 12 January 1925; expelled from the party 1927; exiled to Alma-Ata 1928; deported 1929; killed in Mexico City in 1940 by Ramón Mercader, a Stalinist agent; led the Left Opposition, which supported greater industrialisation; permanent revolution against socialism in one country",
      url: 'https://en.wikipedia.org/wiki/Leon_Trotsky',
    },
    {
      label:
        "Wikipedia, Left Opposition: rapid industrialisation from 1923; Trotsky and Zinoviev expelled from the party in November 1927; Sheila Fitzpatrick on the scholarly consensus that Stalin appropriated the Left Opposition's position on industrialisation",
      url: 'https://en.wikipedia.org/wiki/Left_Opposition',
    },
    {
      label:
        'Wikipedia, Right Opposition: Stalin allied with Bukharin from late 1924; Bukharin a strong supporter of the New Economic Policy; Bukharin and the Right sidelined from 1928 to 1930',
      url: 'https://en.wikipedia.org/wiki/Right_Opposition',
    },
    {
      label:
        'Wikipedia, Socialism in one country: developed by Stalin from 1924, supported by Bukharin in 1925, state policy from 1926, against the Trotskyist view that socialism depended on revolution in the advanced countries',
      url: 'https://en.wikipedia.org/wiki/Socialism_in_one_country',
    },
    {
      label:
        'Wikipedia, Five-year plans of the Soviet Union: the first plan ran from 1 October 1928 to 31 December 1932, with the emphasis on heavy industry',
      url: 'https://en.wikipedia.org/wiki/Five-year_plans_of_the_Soviet_Union',
    },
    {
      label:
        'Wikipedia, Joint State Political Directorate (OGPU): the Soviet secret police from November 1923 to July 1934, replaced by the GUGB within the NKVD',
      url: 'https://en.wikipedia.org/wiki/Joint_State_Political_Directorate',
    },
    {
      label:
        'Wikipedia, Politburo of the Communist Party of the Soviet Union: the de facto highest executive authority in the party; under Stalin it evolved into an instrument of personal dictatorship',
      url: 'https://en.wikipedia.org/wiki/Politburo_of_the_Communist_Party_of_the_Soviet_Union',
    },
    {
      label:
        "Wikipedia, Lenin's Mausoleum: Lenin died on 21 January 1924; his body was embalmed and has been on almost continuous display on Red Square",
      url: 'https://en.wikipedia.org/wiki/Lenin%27s_Mausoleum',
    },
    {
      label:
        'Wikipedia, Kronstadt rebellion: sailors, naval infantry and civilians rose against the Bolshevik government, 1 to 18 March 1921, and were suppressed',
      url: 'https://en.wikipedia.org/wiki/Kronstadt_rebellion',
    },
    {
      label:
        "The New York Review of Books, 'Animal Farm: What Orwell Really Meant' (11 July 2013), printing Orwell's letter to Dwight Macdonald of December 1946: the moral that revolutions only bring radical improvement when the masses are alert and can remove their leaders; the turning point the pigs keeping the milk and apples (Kronstadt); no such thing as a benevolent dictatorship. Reported, not quoted",
      url: 'https://www.nybooks.com/articles/2013/07/11/animal-farm-what-orwell-really-meant/',
    },
    {
      label:
        'Orwell, preface to the Ukrainian edition of Animal Farm (March 1947), at the Orwell Foundation: the episodes are taken from the history of the Russian Revolution but dealt with schematically and their chronological order changed. The English original is lost; the text is a back-translation',
      url: 'https://www.orwellfoundation.com/the-orwell-foundation/orwell/essays-and-other-works/preface-to-the-ukrainian-edition-of-animal-farm/',
    },
  ],
}
