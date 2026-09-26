import type { ChapterGuide } from '@/lib/study-guides/chapter-guide'

/**
 * Animal Farm, Chapter 2: the Rebellion, the Seven Commandments and the milk.
 *
 * Every quotation is from the held edition, src/data/full-texts/animal-farm.ts
 * (section-2 for the close reading), and chapter-guides.test.ts checks each one
 * against it. Outside facts come from the sources listed at the end, fetched
 * and read on 26 September 2026.
 *
 * Things checked while writing, recorded so nobody reintroduces them:
 * - The Rebellion is not led by the pigs. A cow breaks into the store-shed and
 *   the rising is explicitly unplanned; Snowball and Napoleon take the lead only
 *   afterwards, at the farmhouse door and the gate.
 * - Old Major's rules in Chapter 1 ban houses, beds, clothes, alcohol, tobacco,
 *   money, trade, tyranny and killing. The Seven Commandments keep beds,
 *   clothes, alcohol and killing and drop the rest. The farmhouse is protected
 *   only by a spoken resolution, which is why Squealer can deny it in Chapter 6.
 * - The text never says whether Napoleon followed the others to the hayfield,
 *   only that the milk had gone by evening. The guide does not claim he stayed.
 * - Orwell's words from outside the novella (the 1947 preface and his December
 *   1946 letter to Dwight Macdonald) are given in reported speech, not inside
 *   quotation marks, because the test checks every double-quoted phrase against
 *   the novella itself.
 * - Many guides equate the Rebellion with the October Revolution while also
 *   calling Jones the Tsar, who fell in February 1917. The context section
 *   separates the two revolutions and states the parallel as a reading.
 *
 * Corrected on review (26 September 2026):
 * - In Chapter 3 the pigs are "in full agreement ... even Snowball" about the
 *   windfall apples; the milk is already going into their mash. The guide had
 *   said Snowball agrees to keep the milk.
 * - The Boxer quiz offered "The whips" and "His harness" as wrong answers, but
 *   the text burns both without saying which animals threw them, so a student
 *   could defend either. The distractors are now things plainly not burned.
 * - "With one accord" comes back in Chapters 6, 7 and 10, not only in 7.
 * - Jones was a hard master who had once been capable, not a master who was
 *   once hard. The spelling book had belonged to his children; the text does
 *   not say who threw it on the rubbish heap.
 */
export const chapter: ChapterGuide = {
  slug: 'animal-farm',
  chapter: 2,
  part: 'Chapter 2',
  title: 'The Rebellion and the Seven Commandments',
  atAGlance:
    "Old Major dies, the pigs turn his dream into Animalism, and one hungry Sunday evening the animals drive Mr Jones off the farm without any plan at all. Next morning they rename it Animal Farm and paint Seven Commandments on the barn wall, but by evening the cows' milk has vanished: the first sign of who the Rebellion will really serve.",

  summary: [
    "Old Major dies three nights after his speech, early in March, and is buried at the foot of the orchard. Over the next three months the cleverer animals prepare for a Rebellion they do not expect to see in their own lifetimes, and the work of teaching falls to the pigs. Orwell now names the three who will matter. Napoleon is a large, rather fierce-looking Berkshire boar, not much of a talker but “with a reputation for getting his own way”. Snowball is livelier, quicker in speech and more inventive, but “not considered to have the same depth of character”. Squealer, a small fat porker with a shrill voice, is a brilliant talker whose skipping and tail-whisking make him strangely persuasive. Together they build Major's ideas into “a complete system of thought” called Animalism and explain it at secret night meetings in the barn.",
    "The meetings run into stupidity and apathy. Some animals talk of loyalty to Jones, others ask why they should care what happens after they are dead, or why they should work for a Rebellion that is coming anyway. Mollie, the vain white mare, asks Snowball whether there will still be sugar and whether she may still wear ribbons; he tells her the ribbons are “the badge of slavery”, and she agrees without sounding convinced. The pigs struggle harder against Moses, Jones's tame raven, “a spy and a tale-bearer” who tells of Sugarcandy Mountain, a paradise in the sky where animals go when they die. The cart-horses Boxer and Clover become the pigs' most faithful disciples: they find it hard to think anything out for themselves, but they absorb everything, pass it on in simple arguments and lead Beasts of England at the end of every meeting.",
    "The Rebellion comes sooner and more easily than anyone expected. Jones, a hard master who had once at least been a capable farmer, has lost money in a lawsuit and taken to drink, and his idle men let the farm decay. On Midsummer's Eve he gets drunk in Willingdon and does not return until midday on Sunday; the men milk the cows and go rabbiting without feeding the animals, and Jones falls asleep on the drawing-room sofa. By evening the animals are still unfed. A cow breaks open the store-shed with her horn, and when Jones and his four men come in lashing out with whips, the animals turn on them together, although nothing had been planned. The men flee down the cart-track to the road, Mrs Jones slips away with a carpet bag, Moses flaps after her, and the animals slam the five-barred gate. The Manor Farm is theirs.",
    "Their first acts wipe out the signs of Jones's rule. Bits, nose-rings, dog-chains and knives go down the well; reins, halters, blinkers, nosebags and whips go on the rubbish fire, and the animals caper with joy to see the whips burn. Snowball adds the ribbons, declaring them clothes, and Boxer throws on the straw hat he wears to keep flies out of his ears. Napoleon leads them to the store-shed for a double ration of corn, with two biscuits for each dog, and after singing Beasts of England seven times they sleep as never before. At dawn they race to a knoll to gaze at the farm that is now theirs, then tiptoe through the farmhouse in awe of its luxury. Mollie is found in the best bedroom, admiring herself with a ribbon of Mrs Jones's. The hams are taken out to be buried, Boxer kicks in the beer barrel, and a unanimous resolution makes the house a museum where no animal may ever live.",
    "After breakfast the pigs reveal that for three months they have been teaching themselves to read and write from an old spelling book that had belonged to Jones's children and been thrown on the rubbish heap. Napoleon sends for black and white paint. Snowball, the best writer, paints out MANOR FARM on the gate and paints ANIMAL FARM in its place, then climbs a ladder at the end wall of the big barn, with Squealer a few rungs below holding the paint-pot. The pigs have reduced the principles of Animalism to Seven Commandments: two about legs (two legs mark an enemy, four legs or wings a friend), four bans (on clothes, beds, alcohol and killing another animal), and last, “All animals are equal.” Apart from two small slips, a misspelt word and a letter S the wrong way round, the work is neat; Snowball reads it aloud for the others, and the cleverer animals begin to learn it by heart.",
    'Snowball calls everyone to the hay harvest, but the three cows, unmilked for twenty-four hours, are lowing loudly, their udders almost bursting. The pigs milk them into five buckets of creamy milk, which many of the animals eye with interest. Someone asks what will happen to it, and a hen remembers that Jones used sometimes to mix some into their mash. Napoleon steps in front of the buckets: “Never mind the milk, comrades!” The harvest matters more, he says, and he will follow Snowball to the field in a few minutes. The animals go off to make hay, and when they come back in the evening, the milk has disappeared.',
  ],

  keyEvents: [
    'Old Major dies early in March, and Snowball, Napoleon and Squealer shape his teaching into Animalism, which they teach at secret meetings in the barn.',
    "Mollie's questions about sugar and ribbons, and Moses's stories of Sugarcandy Mountain, show two of the obstacles the pigs face: comfort that the animals do not want to give up, and a promised reward after death.",
    'Left unfed on a Sunday in June, the animals break into the store-shed and drive out Jones and his men in a rising that nobody planned.',
    "The animals destroy the tools of Jones's rule and burn the whips; Snowball adds the ribbons as clothes, and Boxer his own straw hat.",
    'After an awed tour of the farmhouse the animals resolve, unanimously, that it will be kept as a museum where no animal may ever live.',
    'The pigs reveal they can read and write. Snowball renames the farm Animal Farm and paints the Seven Commandments on the barn wall, with Squealer holding the paint-pot.',
    'Napoleon places himself in front of the fresh milk and sends the animals to the harvest; by evening the milk has disappeared.',
  ],

  closeReading: [
    {
      quote: 'The others said of Squealer that he could turn black into white.',
      technique: 'Idiom used as indirect characterisation',
      analysis:
        'To turn black into white is to make a falsehood look like the truth. Orwell gives the verdict to the other animals rather than stating it himself, so Squealer arrives with a reputation already attached. The idiom turns literal later in this chapter: Napoleon sends for black and white paint, and Squealer holds the pot while the Commandments go up in white letters on a tarred wall. In Chapter 8 he is found at the foot of that wall beside a broken ladder and a pot of white paint.',
    },
    {
      quote:
        'those ribbons that you are so devoted to are the badge of slavery. Can you not understand that liberty is worth more than ribbons?',
      technique: 'Metaphor and rhetorical question',
      analysis:
        "A badge is worn to show whom you belong to, so Snowball's metaphor turns Mollie's decoration into a mark of ownership: she is dressed up as Jones's property. The rhetorical question allows only one answer and makes disagreement sound foolish, a pressure Squealer later uses for far worse ends. Snowball wins the exchange, yet Mollie “did not sound very convinced”, which shows that a slogan can win a point without changing a mind. The sugar and ribbons hidden in her stall in Chapter 5 confirm it.",
    },
    {
      quote: 'it was Sunday seven days a week ... lump sugar and linseed cake grew on the hedges',
      technique: 'Utopian imagery and comic hyperbole',
      analysis:
        "Moses describes heaven in a farm animal's terms: a week with no working days, and treats growing wild on the hedges. The exaggeration is comic, and on the usual reading it satirises a religion that promises the poor a reward after death, which keeps them patient with their masters now. Moses, pointedly, is Jones's pet and does no work. One reading is that his paradise competes directly with Animalism, which promises plenty on earth, so the pigs must argue him down before they can win the animals over.",
    },
    {
      quote:
        'With one accord, though nothing of the kind had been planned beforehand, they flung themselves upon their tormentors.',
      technique: 'Interrupting subordinate clause and a loaded noun',
      analysis:
        "The clause set between commas halts the action to insist that the Rebellion was not planned: after three months of secret meetings, what finally moves the animals is hunger and the whip. “With one accord” makes them a single body, and “tormentors” names the men from the animals' point of view, fixing the reader's sympathy. The pigs do not lead the attack; a cow broke open the store-shed. Because the Rebellion belongs to every animal, its later capture by a few is all the more bitter.",
    },
    {
      quote: 'All the animals capered with joy when they saw the whips going up in flames.',
      technique: 'Symbolism, set up for later reversal',
      analysis:
        "The whip is the plainest symbol of Jones's power, so burning it is the animals' first act of self-government. The verb “capered” is playful, almost childlike, which makes their joy innocent and the reader protective of it. Orwell plants the object in order to bring it back: in Chapter 10 Napoleon appears on two legs with “a whip in his trotter”, and the next day every supervising pig carries one. The whip survives the revolution; only the trotter holding it has changed.",
    },
    {
      quote: 'Yes, it was theirs—everything that they could see was theirs!',
      technique: 'Free indirect speech and repetition',
      analysis:
        "The narrator slips into the animals' own excited voice: “Yes” answers a question they are asking themselves, and the exclamation is theirs, not the narrator's. Ending both halves of the sentence on “theirs” stresses shared ownership, the heart of Animalism. The possessive is tested later. In Chapter 7, after the executions, the animals look down on the farm from a knoll again and remember “with a kind of surprise” that it is their own, as if ownership had become a memory rather than a fact.",
    },
    {
      quote:
        'they would form an unalterable law by which all the animals on Animal Farm must live for ever after',
      technique: 'Dramatic irony and fairy-tale phrasing',
      analysis:
        '“For ever after” echoes the close of a fairy tale, and Orwell subtitled the novella A Fairy Story, so the phrase sounds like a promise and reads like a warning. “Unalterable” is the most ironic word in the chapter: by Chapter 10 the wall holds a single Commandment, and even that one has been altered. The reader can already see why change will be easy. The law is written by the pigs, on a wall, in words that Snowball has to read aloud “for the benefit of the others”.',
    },
    {
      quote: 'when they came back in the evening it was noticed that the milk had disappeared.',
      technique: 'Agentless passive and understatement',
      analysis:
        "The chapter ends on a passive with no agent: nobody in particular notices, and grammatically nobody takes the milk. The naive narrator reports only what the animals see, so the reader must supply the thief, helped by Napoleon's “Never mind the milk, comrades!” and his place in front of the buckets. A hen has just recalled Jones mixing milk into their mash; in Chapter 3 it goes “into the pigs' mash” instead. Orwell called the pigs' keeping of the milk and apples the story's turning point.",
    },
  ],

  characters: [
    {
      name: 'Snowball',
      development:
        "Named for the first time here, Snowball becomes the voice and the hand of the new farm. He answers Mollie with a metaphor, burns the ribbons, paints the new name on the gate and the Commandments on the wall, and leads the animals to the hayfield. He is quick, inventive and sincere, yet already sure he knows what others need (“you do not need sugar”), and the remark that he was not thought to have Napoleon's depth of character leaves his future open. He is usually read as Leon Trotsky.",
    },
    {
      name: 'Napoleon',
      development:
        'Also named for the first time, Napoleon is introduced as a pig who talks little and gets his way, and everything he does here is practical. He hands out the double ration of corn, with two biscuits for each dog, butts open the farmhouse door with Snowball, and sends for the paint and leads the way to the gate. His only recorded speech comes at the end of the chapter: he stands in front of the milk, says it “will be attended to”, and promises to follow in a few minutes. He is usually read as Stalin.',
    },
    {
      name: 'Squealer',
      development:
        'Introduced as a brilliant talker whose skipping and tail-whisking make his arguments persuasive, and who, the others say, “could turn black into white”. In this chapter he says nothing at all. His one task is to hold the paint-pot while Snowball writes the Commandments, a small detail that becomes sinister in Chapter 8, when he is found beneath the same wall with a ladder and paint. He is usually read as the Soviet propaganda machine, including newspapers such as Pravda.',
    },
    {
      name: 'Old Major',
      development:
        "Major dies in the chapter's first sentence, and from then on his dream exists only as the pigs interpret it. Their Seven Commandments keep some of his rules and quietly drop others: he banned houses, tobacco, money, trade and any animal tyrannising over his own kind, and none of those reaches the wall. He is usually read as a blend of Karl Marx and Lenin; dying before the Rebellion he inspired fits the Marx side of that reading.",
    },
    {
      name: 'Mr Jones',
      development:
        'Jones “had fallen on evil days”: a hard master who had once at least been a capable farmer, he has lost money in a lawsuit and taken to drink. His fall comes from neglect rather than any single cruelty, though the knives, chains and whips the animals destroy show the cruelty built into his farm. Orwell makes the old order hard to defend, so the Rebellion itself is never presented as a mistake. He is usually read as Tsar Nicholas II.',
    },
    {
      name: 'Mollie',
      development:
        "Mollie shows the self-interest the Rebellion has to overcome. Her first question is about sugar, her second about ribbons, and in the farmhouse she is caught holding one of Mrs Jones's ribbons to her shoulder and admiring herself “in a very foolish manner”. Her grudging agreement with Snowball prepares for her flight to a human owner in Chapter 5. She is often read as the Russians who fled abroad after the fall of the Tsar.",
    },
    {
      name: 'Moses',
      development:
        "Jones's pet raven is “a spy and a tale-bearer” but also a clever talker, a rival persuader to the pigs. The animals hate him because he tells tales and does no work, yet some believe in his Sugarcandy Mountain. When the humans are driven out he flies off after Mrs Jones, which ties his heaven to the old order. He returns in Chapter 9, and the pigs let him stay.",
    },
    {
      name: 'Boxer and Clover',
      development:
        "The two cart-horses are the pigs' “most faithful disciples”: slow to reason for themselves, they take in everything and pass it on. Boxer's gesture of flinging his own straw hat on the fire, a hat that protects him from flies, takes Snowball's words more literally than anyone asked, even at his own cost, and it is his kick that staves in the beer barrel. That readiness to give up his own comfort and put his strength wherever the new order points is the pattern of his whole life.",
    },
    {
      name: 'The cows and the other animals',
      development:
        "The ordinary animals make the Rebellion. A cow breaks into the store-shed, the whole farm turns on Jones together, and their joy on the knoll is the chapter's emotional peak. At the end they are simply curious about the milk, and a hen's memory that Jones used to mix some into their mash is brushed aside. The pattern is set: the many do the work and take the risks, and the few decide what happens to the produce.",
    },
  ],

  themes: [
    {
      theme: 'Revolution and Betrayal',
      development:
        "The chapter shows the revolution at its purest and plants its betrayal in the last paragraph. The rising is collective and born of hunger, and its first acts are promises: the whips are burned, clothes renounced, the farmhouse kept as a museum, the beer destroyed and the old name painted out. Later chapters break each one. The pigs move into the farmhouse (Chapter 6), drink whisky and beer (Chapters 8 and 9), and carry whips, wear Jones's clothes and restore the name The Manor Farm (Chapter 10). The milk is the first breach.",
    },
    {
      theme: 'Power and Corruption',
      development:
        "Power already flows to whoever controls food and words. Napoleon hands out the corn and later stands between the animals and the milk; Snowball holds the paintbrush. The Commandments also leave gaps: they say nothing about houses, money or trade, and Major's ban on tyranny never reached the wall. The chapter lets the reader watch the first, tiny advantage being taken while everyone's attention is on the harvest.",
    },
    {
      theme: 'Language and Propaganda',
      development:
        "Orwell introduces two professional persuaders in one chapter: Squealer, who “could turn black into white”, and Moses, the clever talker with a heaven to sell. Snowball's own rhetoric, the badge of slavery and the question that allows one answer, shows that the Rebellion's leaders win arguments with the same tools. Above all, the Commandments turn the revolution into written words, and whoever controls writing on this farm can later control what the animals believe they agreed to.",
    },
    {
      theme: 'Education and Ignorance',
      development:
        'The pigs taught themselves to read in secret, from a spelling book on the rubbish heap, and only reveal it once the farm is theirs. From that moment knowledge is power. The Commandments are painted in words most animals cannot yet read, and Snowball has to read them aloud; only the cleverer animals learn them by heart. Boxer and Clover absorb what they are told because they cannot test it, which makes their loyalty admirable and dangerous at once.',
    },
    {
      theme: 'Class and Labour',
      development:
        "Jones's farm fed its animals badly while he drank, and the Rebellion is sparked by labourers left unfed. Yet the chapter ends with the animals sent off to the harvest while the cows' milk is left behind, Napoleon standing in front of the buckets, and by evening it has gone. The hen's remark that even Jones sometimes mixed some of the milk into their mash makes the new arrangement look worse than the old. The pattern of the whole novella, workers producing while an elite consumes, begins here.",
    },
  ],

  context: [
    {
      heading: 'The Rebellion and the two revolutions of 1917',
      body: "Animal Farm is usually read as an allegory of the Russian Revolution, and Orwell called it primarily a satire on that revolution. Russia had two revolutions in 1917. In February (March in the Western calendar), protests against food rationing in Petrograd grew in about eight days into a rising that forced Tsar Nicholas II, the usual reading of Mr Jones, to abdicate. In October (November in the Western calendar), Lenin's Bolsheviks seized power from the Provisional Government that had taken over after his fall. Many guides equate the Rebellion with October, but one reading is that Chapter 2 blends the two: the hungry, unplanned rising that drives out the master is closer to February, while the pigs, who organised in secret and take charge afterwards, resemble the Bolsheviks. In his 1947 preface to the Ukrainian edition, Orwell said the episodes were taken from the history of the Russian Revolution but handled schematically, with their order changed for the symmetry of the story.",
    },
    {
      heading: 'Moses and the Church',
      body: "Moses is usually read as organised religion, and in the Russian allegory as the Orthodox Church. Under the Tsars the Church was governed by the Holy Synod, a body that included laymen appointed by the Tsar, so Church and throne were closely bound; the Synod was abolished after the February Revolution. Orwell makes Moses Jones's pet, fed on bread soaked in beer, and has him fly off after Mrs Jones. Karl Marx had called religion the opium of the people, a comfort for real suffering, and Sugarcandy Mountain offers exactly that: rest after death instead of change before it. In Chapter 9 Moses returns and the pigs, while calling his stories lies, let him stay on a daily allowance of beer.",
    },
    {
      heading: "Orwell's turning point: the milk",
      body: 'In a letter of December 1946 to Dwight Macdonald, editor of the magazine Politics, Orwell explained what he meant. He wrote that revolutions only bring real improvement when the people stay alert and know how to throw out their leaders once the job is done, and that the turning point of the story was meant to be the pigs keeping the milk and apples for themselves, which he linked to Kronstadt. If the other animals had put their foot down then, he said, all would have been well. At Kronstadt, the naval fortress guarding Petrograd, sailors and civilians rose for sixteen days in March 1921 against the Bolshevik government they had helped to consolidate, and were crushed; Trotsky signed the order. The milk vanishes at the end of this chapter, and in Chapter 3, when the windfall apples are reserved for the pigs as well, even Snowball is in full agreement.',
    },
    {
      heading: 'Where the story began: a cart-horse and a whip',
      body: "In the same 1947 preface, which survives only as a translation back from the Ukrainian because Orwell's English original is lost, he described the moment the story came to him. Living in a village, he saw a boy of about ten driving a huge cart-horse along a narrow path and whipping it whenever it tried to turn. It struck him, he wrote, that if such animals became aware of their strength, humans would have no power over them, and that men exploit animals much as the rich exploit the working class. Chapter 2 is that thought acted out: the animals discover their strength in a single evening, and the whips go on the fire.",
    },
  ],

  structure:
    "Chapter 2 is the hinge between dream and reality. It moves at two speeds: three months of secret preparation told in summary, then one Sunday evening and the following day told in close detail, from the rising to the founding acts of the new farm, its new name and its written law. The mood climbs from the flight of Jones to the joy on the knoll, and the final paragraph cuts it off with the missing milk, so the chapter that sets up the ideals also plants their first breach. Its objects are placed to return: the whips, the ribbons, the farmhouse, the beer and the name Manor Farm all come back in the pigs' possession, which begins the novella's circular shape. Even “with one accord” returns: in Chapter 7 for frightened animals huddling together after the executions, and in Chapter 10 for animals creeping up to the farmhouse to watch the pigs with the humans.",

  vocabulary: [
    {
      term: 'Pre-eminent',
      meaning:
        'Standing out above all the others. Snowball and Napoleon are pre-eminent among the pigs, which marks them as the leaders from the start.',
    },
    {
      term: 'Porker',
      meaning:
        'A pig, especially a castrated male, fattened to be killed for meat. Every male pig on the farm except the two young boars, Snowball and Napoleon, is a porker, Squealer among them.',
    },
    {
      term: 'Vivacious',
      meaning:
        'Lively and full of energy. It is the word that first separates Snowball from the quieter, more forceful Napoleon.',
    },
    {
      term: 'Animalism',
      meaning:
        "The complete system of thought the pigs build from Old Major's teaching. In the allegory it stands for communism as a set of ideals.",
    },
    {
      term: 'Apathy',
      meaning:
        'Lack of interest or concern. It is what the pigs meet at the first secret meetings, when some animals ask why they should care about a future they will not live to see.',
    },
    {
      term: 'Expounded',
      meaning:
        'Explained in detail. The pigs expound the principles of Animalism to the others, which puts them in the position of teachers from the beginning.',
    },
    {
      term: 'Disciples',
      meaning:
        "Devoted followers of a teacher, a word with religious overtones. Boxer and Clover are the pigs' most faithful disciples.",
    },
    {
      term: 'Tale-bearer',
      meaning:
        'Someone who spreads gossip or tells tales about others, getting them into trouble. Moses is one, which is part of why the animals hate him.',
    },
    {
      term: 'Blinkers',
      meaning:
        "Flaps on a horse's bridle that stop it seeing behind or to the side, so it looks only ahead, where it is driven. The animals burn them with the reins, halters and nosebags.",
    },
    {
      term: 'Knoll',
      meaning:
        'A small, rounded hill. From the knoll the animals first look out over the farm as its owners.',
    },
    {
      term: 'Unanimous resolution',
      meaning:
        'A decision agreed by everyone at a meeting. The animals pass one to keep the farmhouse as a museum, but it is not among the Commandments, and in Chapter 6 Squealer persuades them it was never passed.',
    },
    {
      term: 'Stove in',
      meaning:
        "Broken inwards by a blow. The barrel of beer in the scullery is stove in by a kick from Boxer, the animals' rejection of the drink that helped to ruin Jones.",
    },
  ],

  examQuestion: {
    question:
      'Starting with Chapter 2, explore how Orwell presents the hopes of the Rebellion and what becomes of them. Write about how Orwell presents the Rebellion and its ideals in Chapter 2, and how he presents what happens to those ideals in the novella as a whole. (GCSE-style question)',
    guidance: [
      'Open with a clear argument, for example: Orwell makes the ideals of the Rebellion genuine and joyful, but in the same chapter shows the first crack, and the rest of the novella widens it until nothing is left.',
      'Explore the hope first. Use the unplanned, collective rising (“with one accord”) and the burning of the whips, and analyse the free indirect speech of the animals on the knoll.',
      "Examine the written law. The Commandments are called “unalterable”, yet they are written by the pigs, with a spelling slip, read aloud for animals who mostly cannot read, and they leave out Major's bans on houses, money, trade, tobacco and tyranny.",
      "Analyse the ending: Napoleon in front of the buckets, “That will be attended to”, and the agentless passive of the final sentence. Link it to Chapter 3, where the milk goes into the pigs' mash, and to Orwell calling this the turning point.",
      "Trace what happens to the chapter's promises across the novella: the farmhouse (Chapter 6), the Commandments altered (Chapters 6 and 8), and the whips, clothes and old name in the pigs' possession (Chapter 10).",
      "Weave in context as a reading: the Rebellion and 1917, the pigs as the Bolsheviks, and Orwell's view that a revolution fails when ordinary people stop watching their leaders.",
      'Conclude with a judgement: were the ideals false, or were they unguarded? Consider how far the other animals share responsibility for letting the milk go.',
    ],
    tips: [
      'Quote briefly and exactly. A few words analysed closely, like “unalterable” or “tormentors”, earn more than a long quotation retold.',
      "Treat the history as a reading, tied to a detail in the text, and keep it short; the essay is about Orwell's methods, not a history lesson.",
      "Write about structure as well as language: the chapter's last sentence matters as much as its climax, and objects planted here return in Chapter 10.",
      'Do not make Snowball a simple hero. He tells Mollie what she needs, and in Chapter 3 he is in full agreement when the windfall apples are reserved for the pigs, whose mash is already taking the milk.',
    ],
  },

  quiz: [
    {
      question: 'What finally sets off the Rebellion?',
      options: [
        "Old Major's death",
        'A signal from Snowball at a secret meeting',
        'The animals are left unfed and a cow breaks into the store-shed',
        'Mr Jones announces he will sell the pigs',
      ],
      answer: 2,
      explanation:
        'Jones is asleep after a drinking bout and his men have gone rabbiting, so by evening the animals are still unfed. The narrator stresses that nothing had been planned: hunger and the whips, not the pigs, start the Rebellion.',
    },
    {
      question: 'Which character do the other animals say could turn black into white?',
      options: ['Squealer', 'Snowball', 'Moses', 'Napoleon'],
      answer: 0,
      explanation:
        "Squealer's skill with words is established before he says anything. Later he makes the pigs' privileges and Napoleon's lies sound reasonable, and in Chapter 8 he is found one night under the Commandments, beside a broken ladder and a pot of white paint.",
    },
    {
      question:
        "Which of these rules from Old Major's speech in Chapter 1 is NOT among the Seven Commandments?",
      options: [
        'No animal shall wear clothes',
        'No animal shall drink alcohol',
        'All animals are equal',
        'No animal shall engage in trade',
      ],
      answer: 3,
      explanation:
        'Major also banned houses, tobacco, money and tyranny, and none of these reaches the wall. In Chapter 6, when Napoleon begins trading, Squealer asks whether any resolution against it is written down, and the animals cannot prove that it is.',
    },
    {
      question: 'Who holds the paint-pot while Snowball paints the Commandments?',
      options: ['Napoleon', 'Squealer', 'Boxer', 'Muriel'],
      answer: 1,
      explanation:
        'Squealer stands a few rungs below Snowball on the ladder. The detail pays off in Chapter 8, when he is found at the foot of the same wall beside a broken ladder and a pot of white paint.',
    },
    {
      question: 'What is wrong with the Commandments as first painted?',
      options: [
        'One Commandment is missing',
        'They are painted in black on a white wall',
        'The last Commandment is written twice',
        'One word is misspelt and one letter S is the wrong way round',
      ],
      answer: 3,
      explanation:
        'Friend is spelt freind and one S is reversed. The small errors show that the “unalterable law” is the work of fallible pigs, and they are writing it for animals who mostly cannot check it.',
    },
    {
      question: 'What does Napoleon do when the animals ask what will happen to the milk?',
      options: [
        'He shares it out equally',
        'He stands in front of the buckets and sends them to the harvest',
        "He mixes it into the hens' mash",
        'He sells it in Willingdon',
      ],
      answer: 1,
      explanation:
        "Napoleon tells them to never mind the milk, promises it will be attended to and says he will follow in a few minutes. By evening the milk has gone, and Chapter 3 reveals it is mixed into the pigs' mash.",
    },
    {
      question:
        'When Snowball says ribbons count as clothes, what does Boxer fetch and fling on the fire?',
      options: [
        'His own straw hat',
        'The hams from the farmhouse kitchen',
        'The News of the World',
        'A horse blanket from the stable',
      ],
      answer: 0,
      explanation:
        'Boxer burns the small straw hat he wears in summer to keep the flies out of his ears. It shows his complete loyalty to the new ideas, even at a cost to himself. The hams are taken out to be buried, not burned, and the newspaper is the one Jones sleeps under.',
    },
    {
      question:
        'Read as allegory, the hungry, unplanned rising that drives Jones out is closest to which of these events?',
      options: [
        'The Kronstadt revolt of 1921',
        'The Five-Year Plans',
        'The February Revolution of 1917',
        'The Great Purge of the 1930s',
      ],
      answer: 2,
      explanation:
        "In February 1917 protests over food rationing in Petrograd led within days to the Tsar's abdication. The Bolsheviks took power only in October. Kronstadt is the parallel Orwell gave for the milk and apples, not for the Rebellion itself.",
    },
  ],

  sources: [
    {
      label:
        'The held edition, src/data/full-texts/animal-farm.ts (Project Gutenberg Australia text): every quotation, read in section-2 for the close reading and in sections 1, 3, 5 to 10 for the links across the novella',
      url: 'https://gutenberg.net.au/ebooks01/0100011h.html',
    },
    {
      label:
        'src/data/study-guides/animal-farm.ts, the verified whole-text guide: character names, theme names and the Chapter 2 timeline moment',
    },
    {
      label:
        'Orwell, preface to the Ukrainian edition of Animal Farm (March 1947), at the Orwell Foundation: the boy whipping a cart-horse, animals becoming aware of their strength, men exploiting animals as the rich exploit the proletariat, and the episodes handled schematically with their chronological order changed; the page notes that the English original is lost and the text is a back-translation from the Ukrainian',
      url: 'https://www.orwellfoundation.com/the-orwell-foundation/orwell/essays-and-other-works/preface-to-the-ukrainian-edition-of-animal-farm/',
    },
    {
      label:
        "Orwell's letter to Dwight Macdonald, December 1946, printed with Peter Davison's notes in The New York Review of Books, 11 July 2013 (Animal Farm: What Orwell Really Meant): primarily a satire on the Russian revolution; revolutions only improve things when the masses are alert and can throw out their leaders; the turning point meant to be the pigs keeping the milk and apples (Kronstadt); if the animals had put their foot down then, all would have been well; Macdonald as editor of Politics",
      url: 'https://www.nybooks.com/articles/2013/07/11/animal-farm-what-orwell-really-meant/',
    },
    {
      label:
        'Wikipedia, February Revolution: the first of two revolutions in 1917; protests against food rationing in Petrograd on 23 February Old Style (8 March New Style); about eight days of revolutionary activity; Nicholas II forced to abdicate; the Provisional Government',
      url: 'https://en.wikipedia.org/wiki/February_Revolution',
    },
    {
      label:
        "Wikipedia, October Revolution: the second revolution of 1917, led by Lenin's Bolsheviks, beginning on 25 October Old Style (7 November New Style), which followed the February Revolution and overthrew the Provisional Government",
      url: 'https://en.wikipedia.org/wiki/October_Revolution',
    },
    {
      label:
        'Wikipedia, Kronstadt rebellion: sailors, naval infantry and civilians at the fortress defending Petrograd rose for sixteen days in March 1921 against the government they had helped to consolidate; suppressed on 18 March; Trotsky signed the order to crush it',
      url: 'https://en.wikipedia.org/wiki/Kronstadt_rebellion',
    },
    {
      label:
        'Wikipedia, Animal Farm: Jones as Nicholas II; Old Major as a combination of Marx and Lenin; Snowball as Trotsky; Napoleon as Stalin; Squealer and Pravda; Mollie and the emigres who left after the fall of the Tsar; Moses as priestcraft, his return likened to Stalin bringing back the Russian Orthodox Church; Animalism as communism; the Rebellion commonly equated with the October Revolution; trade among the rules not carried into the Commandments; originally titled Animal Farm: A Fairy Story',
      url: 'https://en.wikipedia.org/wiki/Animal_Farm',
    },
    {
      label: 'Wikipedia, Karl Marx: died in London on 14 March 1883',
      url: 'https://en.wikipedia.org/wiki/Karl_Marx',
    },
    {
      label:
        'Wikipedia, Most Holy Synod: the governing body of the Russian Orthodox Church from 1721 to 1917, including laymen appointed by the Tsar, abolished after the February Revolution',
      url: 'https://en.wikipedia.org/wiki/Most_Holy_Synod',
    },
    {
      label:
        "Wikipedia, Opium of the people: Marx's description of religion as a comfort for real suffering, written 1843 to 1844",
      url: 'https://en.wikipedia.org/wiki/Opium_of_the_people',
    },
    {
      label:
        'Wiktionary, porker: a pig, especially a castrated male, fattened and raised for slaughter',
      url: 'https://en.wiktionary.org/wiki/porker',
    },
    {
      label:
        'Wiktionary, stave: transitive, usually with in, to break in the staves of, to break a hole in, to burst; past tense stove',
      url: 'https://en.wiktionary.org/wiki/stave',
    },
    {
      label:
        "Wiktionary, blinker (horses, mostly plural): a shield attached to a horse's bridle to stop it seeing things behind it and to its side",
      url: 'https://en.wiktionary.org/wiki/blinker',
    },
    {
      label: 'Wiktionary, talebearer: someone who spreads gossip or blame',
      url: 'https://en.wiktionary.org/wiki/talebearer',
    },
  ],
}
