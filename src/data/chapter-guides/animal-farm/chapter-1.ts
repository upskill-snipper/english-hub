import type { ChapterGuide } from '@/lib/study-guides/chapter-guide'

/**
 * Animal Farm, Chapter 1: the meeting in the big barn, Old Major's speech and
 * Beasts of England.
 *
 * HOW IT WAS CHECKED (26 September 2026). Every quotation, in closeReading and
 * inside double quotation marks in the prose, was read off the held edition in
 * src/data/full-texts/animal-farm.ts (section-1 for this chapter; the later
 * sections for the cross-references to Chapters 2, 3, 5, 7, 9 and 10), and
 * chapter-guides.test.ts checks each one there. Words from outside the novella
 * (Orwell's prefaces and essays, Hobbes) are in single quotation marks so the
 * test does not look for them in the book; each is in the sources below.
 *
 * Things worth knowing before editing:
 * - Napoleon, Snowball and Squealer are not named in this chapter. The pigs
 *   sit in front of the platform, and that is all the chapter says of them.
 * - "miserable, laborious, and short" has the comma after laborious in this
 *   edition and in the 1945 printing, and none in Peter Davison's text (see
 *   src/data/study-guides/animal-farm.ts). The analysis says so.
 * - Major's speech is 1,391 of the chapter's 2,683 words in this edition, so
 *   "just over half" in the structure note is counted, not estimated. The word
 *   "comrades" occurs fifteen times in the chapter.
 * - The Ukrainian preface survives only as a back-translation, and the context
 *   note says so rather than presenting the words as certainly Orwell's.
 *
 * ADVERSARIAL REVIEW, 26 September 2026 (later the same day). Chapter I was
 * re-read in full against every plot statement, and each outside fact was
 * re-fetched from the source listed. What it corrected, so nobody puts it back:
 * - Major says the cows' milk has gone down human throats, not to market; only
 *   the eggs go to market. The summary sent both to market and the Jones
 *   entry had both "sold".
 * - The song's TUNE was known in his infancy and forgotten; tune and words
 *   came back in the dream. "Remembered from his infancy" was wrong.
 * - The pigs and dogs are examples of "the clever ones", not the only ones.
 * - "Above all" governs tyranny only; killing is a separate rule, and the text
 *   gives no "because" before all animals are equal.
 * - The rats crept out of their holes, not into the barn, and the dogs are
 *   not said to chase them, only to catch sight of them.
 * - Walking on two legs is not one of Major's listed habits of Man; the close
 *   reading no longer counts it as one. "Dramatic irony" was dropped from that
 *   technique, since a first-time reader does not yet know the ending.
 * - The preface says humans unite against animals whenever it is necessary to
 *   exploit them, and the details came to Orwell some time after the idea. The
 *   surplus-value line now follows the Surplus value article (value created
 *   over wages), not a gloss the Karl Marx article does not make.
 * - Wikipedia calls the novel's songs a parallel to the Internationale, so the
 *   note says "often read as a parallel", not "usually read as".
 * - The exam question is marked GCSE-style in the tips, as the other chapter
 *   guides do.
 */
export const chapter: ChapterGuide = {
  slug: 'animal-farm',
  chapter: 1,
  part: 'Chapter 1',
  title: "Old Major's Speech",
  atAGlance:
    'While Mr Jones sleeps off his drink, the animals of Manor Farm gather in the big barn to hear Old Major, the prize boar, tell them that Man steals the produce of their labour and must be overthrown. He forbids them ever to become like Man, teaches them the song Beasts of England, and the meeting ends only when Jones fires his gun into the dark. The Rebellion is still only a dream, but every ideal the rest of the novella betrays is set out here.',
  summary: [
    "The novella opens at night on the Manor Farm. Mr Jones has locked the hen-houses but is too drunk to shut the pop-holes, and he lurches across the yard to bed by the light of his lantern. As soon as his bedroom light goes out, the farm buildings stir. Word has gone round that old Major, the prize Middle White boar, had a strange dream the night before and wants to tell the others about it, and they have agreed to meet in the big barn once Jones is safely out of the way. Major is so respected that everyone is willing to lose an hour's sleep to hear him.",
    "The chapter then introduces the farm's animals as they arrive. Major is already settled on a raised platform under a lantern. The three dogs, Bluebell, Jessie and Pincher, come first, and the pigs settle in the straw directly in front of the platform; the hens, pigeons, sheep and cows follow. The cart-horses Boxer and Clover walk in slowly, setting their hoofs down carefully in case a small animal is hidden in the straw, and after them come Muriel the goat and Benjamin the donkey, the oldest and worst-tempered animal on the farm. Clover shelters a brood of motherless ducklings with her foreleg. Mollie, the pretty white mare who pulls Mr Jones's trap, arrives at the last moment, chewing sugar and showing off the red ribbons in her mane, and the cat squeezes in between the two horses and purrs through the whole speech without listening. Only Moses, Jones's tame raven, is missing: he is asleep on his perch behind the back door.",
    "Major begins by saying that he will not live many more months and wants to pass on what he has learned. The animals, he says, are given just enough food to stay alive, worked to the limit of their strength and slaughtered the moment they stop being useful. This is not the order of nature, because the soil of England could feed far more animals than it does, in comfort. The cause is Man, who takes nearly everything they produce. He makes it personal: the cows' milk has gone down human throats instead of feeding their calves, the hens' eggs have gone to market, and Clover's four foals were each sold at a year old. Then he names the deaths waiting for them: the young porkers at the block within a year, Boxer sold to the knacker once his strength fails, and the old dogs drowned with a brick round their necks.",
    'His answer is Rebellion. He does not know whether it will come in a week or in a hundred years, but the animals must work for it, pass his message on to the generations after them, and never believe that Man and the animals share a common interest. At that moment the dogs spot four rats that have crept out to listen, and the rats only just escape. Major puts a question to the meeting, whether wild creatures such as rats are comrades, and the vote says yes by an overwhelming majority. The only animals against are the three dogs and the cat, who is later found to have voted on both sides.',
    'Major then gives his last instructions. Whatever walks on two legs is an enemy; whatever walks on four legs, or has wings, is a friend. In fighting Man the animals must not copy him: no animal must live in a house, sleep in a bed, wear clothes, drink alcohol, smoke tobacco, touch money or trade. Above all, no animal must tyrannise over his own kind; no animal must kill another; all animals are equal. Only now does he come to the dream, which was of the earth once Man has vanished. It brought back an old song that his mother and the other sows used to sing, of which they knew only the tune and the first three words; in the dream the words returned as well. Hoarse as he is, he sings it to them: Beasts of England.',
    'The song throws the animals into wild excitement. The clever ones, such as the pigs and the dogs, know it by heart within a few minutes, and even the slowest pick up the tune and a few of the words. The whole farm sings it together, each animal in its own voice, five times over. The noise wakes Mr Jones, who is sure there is a fox in the yard. He takes the gun from the corner of his bedroom and fires a charge of shot into the darkness. The pellets bury themselves in the wall of the barn, the meeting breaks up, and within a moment the whole farm is asleep.',
  ],
  keyEvents: [
    'Mr Jones goes to bed too drunk to shut the pop-holes, and as soon as his light goes out the animals gather in secret in the big barn.',
    "The animals take their places before Old Major's raised platform, and the pigs settle directly in front of it, a detail that can be read as an early hint of the place they will take on the farm.",
    'Major tells the animals that their misery is not natural: Man takes the produce of their labour and gives back only enough to keep them alive.',
    "He foretells the deaths waiting for them, naming the young porkers, Boxer and the dogs, and calls for a Rebellion that later generations must carry on if it does not come in his listeners' lifetime.",
    'Four rats interrupt the meeting, and the farm holds its first vote: rats are comrades, with only the three dogs and the cat voting against.',
    'Major lays down his rules: two legs mean an enemy and four legs or wings a friend, no animal must copy the habits of Man, no animal must tyrannise over or kill another, and all animals are equal.',
    'He teaches the animals Beasts of England, an old song whose tune he had known as a little pig and long forgotten. In his dream the tune came back, and the words with it. The farm sings it five times over.',
    'The singing wakes Jones, who fires his gun into the dark, and the meeting breaks up.',
  ],
  closeReading: [
    {
      quote: 'too drunk to remember to shut the pop-holes',
      technique: 'Opening exposition: characterisation through one careless detail',
      analysis:
        "Orwell's first sentence judges the old order before any animal speaks. Jones has done half his job, locking the hen-houses, and his drunkenness leaves the hens unprotected for the night. The plain, fairy-tale sentence makes the neglect sound ordinary, as if this is how the farm is usually run. It gives the reader a reason to want the Rebellion, so the novella cannot be read as a defence of Jones. Drink returns later, when the pigs find a case of whisky in the farmhouse cellars in Chapter 8.",
    },
    {
      quote: 'our lives are miserable, laborious, and short',
      technique: 'Tricolon (a list of three) ending on a blunt monosyllable',
      analysis:
        "The three adjectives build towards the flattest and most final. After the four-syllable “laborious”, the single syllable “short” lands like a verdict. Major states it as something everyone already knows, which makes disagreement feel foolish. The rhythm may recall Thomas Hobbes, who in Leviathan (1651) called life without a strong government ‘solitary, poor, nasty, brutish, and short’; Major draws the opposite conclusion, that the ruler is the cause. Some printings, including Peter Davison's text, have no comma after “laborious”. The words are the same.",
    },
    {
      quote: 'Man is the only creature that consumes without producing.',
      technique: 'Antithesis in an epigram (a short, memorable statement)',
      analysis:
        'The balanced opposites, consumes and producing, turn an economic argument into a line the animals can remember. Major backs it with a list of what Man cannot do: give milk, lay eggs, pull the plough, catch rabbits. The line becomes bitterly ironic as the novella goes on. In Chapter 3 “The pigs did not actually work, but directed and supervised the others”, and they keep the milk and apples for themselves. The definition of the enemy ends up describing the new rulers exactly.',
    },
    {
      quote:
        'Jones will sell you to the knacker, who will cut your throat and boil you down for the foxhounds',
      technique: 'Direct address and foreshadowing',
      analysis:
        "Major turns to a single listener by name, and the sentence moves step by step from the sale, to the cut throat, to the boiling down for dog food. The concrete verbs make the threat impossible to soften. It is the novella's cruellest piece of foreshadowing: in Chapter 9 Boxer is driven away in a van lettered “Horse Slaughterer and Glue Boiler”, and it is the pigs, not Jones, who send him. The prophecy comes true with only the owner changed, which is the shape of the whole book in a single sentence.",
    },
    {
      quote: 'All men are enemies. All animals are comrades.',
      technique: 'Parallelism and antithesis: a two-part slogan',
      analysis:
        'Two short sentences with the same structure split the world into two sides, with no one in between. The symmetry makes the idea easy to chant and hard to question. One reading is that its weakness is its simplicity: the slogan teaches the animals to fear men, not one of their own, so when the pigs become tyrants the animals struggle to name it. After the executions in Chapter 7, Clover “lacked the words to express” her thoughts. In Chapter 10 the custom of calling one another comrade is suppressed, and pigs and men can no longer be told apart. Both halves of the slogan collapse.',
    },
    {
      quote: 'the cat, who was afterwards discovered to have voted on both sides',
      technique: 'Comic irony and understatement',
      analysis:
        "The farm's first democratic vote is undercut in a subordinate clause, told so casually that a reader could miss it. The cat, who purred through the speech without listening, cares only for her own comfort. The other voters against are the dogs, and two of them, Jessie and Bluebell, give birth in Chapter 3 to the puppies Napoleon rears as his guards. Orwell hints early that a vote is only as honest as its voters, and that force sits in the same barn as argument.",
    },
    {
      quote: 'in fighting against Man, we must not come to resemble him',
      technique: 'Foreshadowing: a warning the ending fulfils',
      analysis:
        "This is the warning the whole novella tests. Major follows it with a precise list of Man's habits, from houses and beds to alcohol, tobacco, money and trade, and each item becomes a milestone in the pigs' story: the farmhouse, its beds, trade and money in Chapter 6, whisky in Chapter 8, and in Chapter 10 a pipe and Mr Jones's clothes, worn by pigs who now walk on two legs. A reader who returns to Chapter 1 after finishing the book finds its ending already written here, in the form of a prohibition.",
    },
    {
      quote: 'something between ‘Clementine’ and ‘La Cucaracha’',
      technique: 'Bathos: a solemn moment deflated by a comic comparison',
      analysis:
        "Just as Major's anthem begins, the narrator compares its tune to two popular songs: an American ballad about a miner's daughter who drowns, and a folk song about a cockroach that became popular during the Mexican Revolution. The deflation is gentle, but it keeps the reader a step apart from the animals' excitement. The Rebellion's anthem is stirring and slightly absurd at once, and the narrator lets us feel both. That double view is how the fable lets a reader enjoy the story while staying alert to it.",
    },
  ],
  characters: [
    {
      name: 'Old Major',
      development:
        'The founder of the Rebellion, though he never sees it: he dies three nights later, at the start of Chapter 2. He is twelve years old, a prize boar with over four hundred children, raised above the others on a platform and listened to attentively. Orwell gives him a wise and kindly look, yet notes that “his tushes had never been cut”, a reminder of the strength behind the benevolent face. He admits “I am one of the lucky ones”: the prophet has done well under the system he condemns. His show name, Willingdon Beauty, comes from the nearby town, the same Willingdon whose horse slaughterer sends the van for Boxer in Chapter 9.',
    },
    {
      name: 'Mr Jones',
      development:
        "Seen only at the edges of the chapter, going to bed drunk and waking to fire his gun, Jones is the old order: careless when comfortable and violent when disturbed. He takes the singing for a fox, so he never learns what the animals have heard. Through Major's speech the reader learns what his rule costs: milk taken from the calves, eggs sold at market, foals sold at a year old, old horses sent to the knacker and old dogs drowned. He is usually read as Tsar Nicholas II, the last Russian monarch before the Revolution.",
    },
    {
      name: 'Boxer',
      development:
        'An enormous cart-horse, nearly eighteen hands high and as strong as any two ordinary horses. The narrator says frankly that he is not of first-rate intelligence but is universally respected for his steadiness and his capacity for work. His first action, shared with Clover, is a gentle one: he sets his hoofs down with great care in case a small animal is hidden in the straw. Major singles him out for the knacker, so from his first appearance the reader knows how his strength could end.',
    },
    {
      name: 'Clover',
      development:
        "A stout, motherly mare approaching middle age, who never quite got her figure back after her fourth foal. She shelters the motherless ducklings with her foreleg, the chapter's clearest picture of care, and Major names her loss directly: all four foals were sold at a year old. Orwell brings the image back in Chapter 7. After the executions, Clover thinks of the farm she had hoped for, where the strong would protect the weak as she had protected the ducklings “on the night of Major's speech”.",
    },
    {
      name: 'Benjamin',
      development:
        'The oldest animal on the farm and the worst-tempered. He rarely speaks, and when he does it is usually to make a cynical remark, such as that he would rather have had no tail and no flies. He never laughs, saying he sees nothing to laugh at. Yet he is quietly devoted to Boxer, and the two spend their Sundays grazing side by side without speaking. His refusal to hope can look like wisdom or like giving up, a question the novella keeps open until Chapter 9, when his friendship with Boxer finally makes him act.',
    },
    {
      name: 'Mollie',
      development:
        "The foolish, pretty white mare who draws Mr Jones's trap. She minces in at the last moment, chewing a lump of sugar, and flirts her mane to show off its red ribbons. Sugar and ribbons tie her to human comforts, and they are the subject of her first questions to Snowball in Chapter 2. In Chapter 5 she deserts the farm, and the pigeons later see a man stroking her nose and feeding her sugar.",
    },
    {
      name: 'The pigs',
      development:
        "None is named yet: Napoleon, Snowball and Squealer first appear in Chapter 2. The chapter simply places the pigs in the straw immediately in front of the platform, closest to the speaker, and shows them, with the dogs, learning Beasts of England by heart within a few minutes while slower animals manage a few words. Major's warning to them is that the young porkers will die at the block within a year. Nearest to the speaker and quickest to learn his words, they are set up to become his interpreters.",
    },
    {
      name: 'The dogs',
      development:
        'Bluebell, Jessie and Pincher arrive first. When they catch sight of the rats that have crept out to listen, the rats only just reach their holes, and the dogs then vote against making the rats comrades. Major warns that Jones drowns old dogs with a brick round their necks. In Chapter 3, Jessie and Bluebell give birth to the nine puppies that Napoleon takes away and rears as the force behind his rule.',
    },
    {
      name: 'The cat',
      development:
        "She looks round for the warmest place, purrs through the speech without listening to a word, and votes on both sides. She is comic, but she is also the chapter's picture of an animal who takes part in politics only for her own comfort.",
    },
    {
      name: 'Moses',
      development:
        "The only animal missing from the meeting: Jones's tame raven sleeps on a perch behind the back door. In Chapter 2 he is revealed as Jones's especial pet and a spy who tells the animals about Sugarcandy Mountain, so his absence from the barn marks him as the owner's creature from the start.",
    },
  ],
  themes: [
    {
      theme: 'Revolution and Betrayal',
      development:
        "Chapter 1 gives the Rebellion its ideals before it has a single leader: all animals are equal, no animal must tyrannise over another, and the animals must never come to resemble Man. Every later betrayal is measured against this speech. Major's instruction to pass his message to future generations raises the novella's question of what happens to an idea once others inherit it, and the seeds of the answer are already here, in the seating in the barn and in the speed with which the pigs master the song.",
    },
    {
      theme: 'Class and Labour',
      development:
        "Major's argument is about work and who profits from it: “Our labour tills the soil, our dung fertilises it”, yet no animal owns more than his bare skin. His examples all come from the working animals, the cows' milk, the hens' eggs, Clover's foals and Boxer's muscles. By Orwell's own account, the story began with the thought that humans would have no power over working animals if the animals became aware of their strength, and this chapter is where the animals first hear that thought.",
    },
    {
      theme: 'Language and Propaganda',
      development:
        'The chapter shows persuasive language working before anyone abuses it: direct address, rhetorical questions, lists and slogans, with the word comrades used fifteen times. The song adds rhythm and feeling to the argument, and its last verse changes one line from listening to passing the message on: “Hearken well and spread my tidings”. The same tools, speech, song and slogan, are later used by Squealer, Minimus and the sheep to keep the animals quiet. Orwell presents language here as a power that can free or control, depending on who holds it.',
    },
    {
      theme: 'Education and Ignorance',
      development:
        "Understanding is unequal from the first night. The pigs and dogs know the song by heart in a few minutes; the others pick up the tune and a few words; the cat does not listen at all; Boxer is described as not of first-rate intelligence. That uneven grasp of Major's ideas is what later allows the cleverer animals to become their interpreters, and in time their masters.",
    },
    {
      theme: 'Power and Corruption',
      development:
        "Human power here is careless, drunk and armed, and it ends the meeting with a gun. Major's power is of another kind, the respect owed to age and wisdom, but it too places one animal above the rest on a raised platform. In Chapter 5 Napoleon and the leading pigs sit on the front of that same platform, with the dogs around them and the other animals facing them, and the image of a speaker raised above his audience turns from respect into command.",
    },
  ],
  context: [
    {
      heading: 'Old Major, Marx and Lenin: the usual reading',
      body: "Old Major is usually read as a combination of Karl Marx, the German thinker who wrote The Communist Manifesto (1848) with Friedrich Engels, and Vladimir Lenin, who led the Bolsheviks' October Revolution of 1917 and headed the new Soviet government until his death in 1924. The Manifesto argued that ‘the history of all hitherto existing society is the history of class struggles’, and ended with a call for the workers of every country to unite. Marx also held that profit is the value workers create over and above the wages they are paid, kept by the owner, which is close to Major's complaint that Man gives back the bare minimum and keeps the rest. Marx died in 1883, decades before 1917, as Major dies before the Rebellion he foretells. The Lenin part of the reading comes later: from Chapter 5 Major's skull is set up for the animals to file past, as Lenin's embalmed body was put on public show in Moscow in 1924.",
    },
    {
      heading: 'Beasts of England and the Internationale',
      body: "Beasts of England is often read as a parallel to the Internationale, the anthem of the socialist movement. Its French words were written by Eugène Pottier in June 1871, after the Paris Commune was crushed, and Pierre De Geyter's tune was first performed in Lille in July 1888. Like Major's song, with its “Beasts of every land and clime”, it was meant for workers everywhere, not one nation. The Soviet Union used the Internationale as its national anthem until it was replaced by a new State Anthem, first broadcast at midnight on 1 January 1944, while Orwell was writing Animal Farm (November 1943 to February 1944). In Chapter 7 the pigs ban Beasts of England in its turn, Squealer calling it “the song of the Rebellion” and saying “the Rebellion is now completed”.",
    },
    {
      heading: 'Where Orwell said the story began',
      body: "In a preface written in March 1947 for a Ukrainian translation, Orwell said that on his return from Spain he thought of exposing ‘the Soviet myth’ in a story that could be ‘easily understood by almost anyone’. The details came later, when he saw a boy of about ten driving a huge cart-horse along a narrow path and whipping it whenever it tried to turn: if such animals ‘became aware of their strength’, humans would have no power over them. He then analysed Marx's theory from the animals' point of view, and to them the class struggle between humans was an illusion, since all humans united against animals whenever there were animals to exploit. That is the logic of Major's “All men are enemies”, and one reading sees the huge cart-horse again in Boxer. Orwell's English text is lost; what survives is a translation back from the Ukrainian, so the wording may not be exactly his.",
    },
    {
      heading: 'Manor Farm before the Rebellion',
      body: 'Mr Jones is usually read as Nicholas II, Emperor of Russia from 1894. During the First World War, military losses and economic hardship eroded confidence in his rule; in March 1917 the February Revolution forced him to abdicate, and on 17 July 1918 he and his family were killed by the Bolsheviks. Chapter 1 is the time before that fall: an owner who drinks and neglects, but still keeps a gun in his bedroom, and a people beginning to hear that things need not be as they are. The overthrow itself comes in Chapter 2.',
    },
  ],
  structure:
    "Chapter 1 is the novella's exposition and its measuring stick. Almost nothing happens, only a meeting that is broken up, yet it sets out every ideal the later chapters test. It is built as a frame: Mr Jones opens it, drunk on his way to bed, and closes it, firing blind into the dark, so human power encloses the animals' night. Inside, Orwell moves from a fable-like roll-call of arrivals, to Major's speech, which fills just over half the chapter, to the song, whose last verse repeats its first with one line changed. The novella is circular in the same way. It opens with animals looking up at a pig on a platform and ends, in Chapter 10, with animals looking through a window at pigs and men, on a farm renamed The Manor Farm.",
  vocabulary: [
    {
      term: 'Ensconced',
      meaning:
        'Settled comfortably and securely in a place. Major is already ensconced on his bed of straw when the others arrive, like a figure of authority waiting for his audience.',
    },
    {
      term: 'Tushes',
      meaning:
        "An older word for tusks. Major's have never been cut, so the kindly-looking boar still has his natural weapons.",
    },
    {
      term: 'Hands',
      meaning:
        "The unit for measuring a horse's height, four inches each, from the ground to the top of the shoulders (the withers). Nearly eighteen hands makes Boxer about six feet tall there.",
    },
    {
      term: 'Confinements',
      meaning:
        'An old-fashioned word for giving birth. Major reminds Clover of her four confinements: the four foals she bore and lost.',
    },
    {
      term: 'Porkers',
      meaning:
        "Pigs raised to be killed for meat. Major's young porkers face the block within a year, while he, a prize boar, has lived to twelve.",
    },
    {
      term: 'Knacker',
      meaning:
        'Someone whose trade is slaughtering worn-out animals, especially horses, and selling their parts, for example as animal food. Major warns Boxer that Jones will sell him to one.',
    },
    {
      term: 'Comrade',
      meaning:
        'A fellow member of a political group, especially a communist or socialist one. Major calls the animals comrades from his first word, making a crowd into a movement.',
    },
    {
      term: 'Dissentients',
      meaning:
        'Those who disagree or vote against. In the vote on the rats, the four dissentients are the three dogs and the cat.',
    },
    {
      term: 'Tyrannise',
      meaning:
        "To rule over others cruelly and control everything they do. Major's rule that no animal must tyrannise over his own kind is the one the pigs break most completely.",
    },
    {
      term: 'Clime',
      meaning:
        "A literary word for a region, thought of in terms of its weather. The song's “every land and clime” means everywhere in the world.",
    },
    {
      term: 'Tidings',
      meaning: 'An old word for news. The song brings “joyful tidings” of a future without Man.',
    },
    {
      term: 'Mangel-wurzels',
      meaning:
        'A kind of beet grown mainly to feed cattle. In the song they are part of the plenty the animals will enjoy when the fields are theirs.',
    },
  ],
  examQuestion: {
    question:
      "Starting with Old Major's speech and the song Beasts of England in Chapter 1, explore how Orwell presents the power of words in Animal Farm. Write about Chapter 1 and about the novella as a whole.",
    guidance: [
      "Open with an argument, for example: in Chapter 1 words free the animals' minds, but the same tools of speech, song and slogan become the pigs' means of control, so Orwell warns against audiences who cannot question what they hear.",
      "Chapter 1, the speech: analyse Major's techniques, such as direct address, rhetorical questions, the list of three and the slogan “All men are enemies. All animals are comrades.” Show how they persuade, and how the two-sided picture leaves the animals unready for a tyrant of their own kind.",
      'Chapter 1, the song: explain how rhythm, old-fashioned words and a promised future turn an argument into feeling, and note who learns it fastest: the pigs and the dogs, in a few minutes.',
      "Chapters 3 and 5: show words being shortened and turned. Snowball reduces the Seven Commandments to “Four legs good, two legs bad” for the slower animals, Squealer argues that the milk and apples belong to the pigs, and in Chapter 5 the sheep's bleating ends a debate.",
      'Chapter 7: Beasts of England is banned. Squealer calls it “the song of the Rebellion” and says the Rebellion is complete. You can link this, as a reading, to the Soviet Union replacing the Internationale as its anthem in 1944.',
      "Chapter 10: the slogan becomes “Four legs good, two legs better” and the Commandments shrink to one. Set this ending beside Major's rules in Chapter 1 to show how far the words have travelled while keeping their old shape.",
      "Conclude on Orwell's purpose: he wanted a story almost anyone could understand, so the novella uses plain words to teach its readers to question the kind of language it shows.",
    ],
    tips: [
      "This is a GCSE-style question, not one taken from an exam board's paper. Check your own board's paper for whether you are given an extract and how long you have.",
      'Quote short. A few words you can analyse closely, such as “consumes without producing”, do more than a long passage copied out.',
      "Treat Chapter 1 as your benchmark. Whenever you write about a later chapter, say which of Major's rules or promises it keeps or breaks.",
      'Present the history as a reading: write that Major is usually read as Marx, or that the song recalls the Internationale, and keep context to a sentence that serves your point about the words.',
      'Orwell called Animal Farm the first book in which he tried ‘to fuse political purpose and artistic purpose into one whole’ (Why I Write, 1946), so comment on how the story is written as well as what it says.',
    ],
  },
  quiz: [
    {
      question: 'What has Mr Jones forgotten to do at the start of the chapter?',
      options: [
        'Lock the hen-houses',
        'Shut the pop-holes',
        'Feed the animals',
        'Bolt the barn door',
      ],
      answer: 1,
      explanation:
        'He has locked the hen-houses but is too drunk to shut the pop-holes. The first detail of the novella is a careless owner.',
    },
    {
      question: 'Under what name was Old Major shown at exhibitions?',
      options: ['Manor Champion', 'Middle White', 'Old Glory', 'Willingdon Beauty'],
      answer: 3,
      explanation:
        'He was exhibited as Willingdon Beauty, but everyone calls him Old Major. Middle White is his breed, not his name.',
    },
    {
      question: 'Which animals vote against making the rats comrades?',
      options: [
        'The three dogs and the cat',
        'The pigs',
        'The sheep and the hens',
        'Boxer and Clover',
      ],
      answer: 0,
      explanation:
        'The vote is carried by an overwhelming majority, with four against: the three dogs and the cat, who is later found to have voted on both sides.',
    },
    {
      question: 'What does Major say will happen to Boxer when his strength fails?',
      options: [
        'He will be put out to grass in the paddock',
        'He will be sold at market to another farmer',
        'Jones will sell him to the knacker',
        'Jones will shoot him',
      ],
      answer: 2,
      explanation:
        "Major names Boxer directly. The prophecy comes true in Chapter 9, when a horse slaughterer's van takes him away, sent by the pigs rather than Jones.",
    },
    {
      question: 'Where does the song Beasts of England come from, according to Major?',
      options: [
        'He composed it himself during his long life',
        'His mother and the other sows sang its tune and first three words, and the rest came back to him in his dream',
        'Moses the raven taught it to him',
        'He heard the farmhands singing it',
      ],
      answer: 1,
      explanation:
        'Major says the words were sung by animals long ago and lost for generations until his dream restored them. Presenting the song as ancient gives it the authority of tradition.',
    },
    {
      question: 'Which animals learn the whole song by heart within a few minutes?',
      options: ['The sheep', 'The horses', 'The hens and ducks', 'The pigs and dogs'],
      answer: 3,
      explanation:
        "The clever ones, such as the pigs and dogs, learn it all, while even the slowest pick up the tune and a few words. The gap matters later, when the pigs become the farm's interpreters and the dogs its enforcers.",
    },
    {
      question: 'Which of these does Major NOT forbid?',
      options: ['Sleeping in a bed', 'Drinking alcohol', 'Learning to read', 'Touching money'],
      answer: 2,
      explanation:
        'Major forbids living in a house, sleeping in a bed, wearing clothes, drinking alcohol, smoking tobacco, touching money and trade. He says nothing about reading, and in Chapter 3 the pigs can already read and write perfectly.',
    },
    {
      question: 'How does the meeting end?',
      options: [
        'Jones fires his gun into the darkness, thinking there is a fox in the yard',
        'Old Major dies in his sleep',
        'The dogs chase the rats out of the barn',
        'Dawn breaks and the animals go to work',
      ],
      answer: 0,
      explanation:
        'The singing wakes Jones, who fires a charge of shot into the dark. The pellets hit the barn wall, the animals scatter, and the whole farm is asleep in a moment. Major dies three nights later, at the start of Chapter 2.',
    },
  ],
  sources: [
    {
      label:
        'The held edition, src/data/full-texts/animal-farm.ts (Project Gutenberg Australia, eBook 0100011h): Chapter I for every quotation and event in this guide, and Chapters II to X for each cross-reference. Word counts (speech 1,391 of 2,683 words; comrades fifteen times) counted from it.',
      url: 'https://gutenberg.net.au/ebooks01/0100011h.html',
    },
    {
      label:
        "Orwell, preface to the Ukrainian edition of Animal Farm (March 1947), at the Orwell Foundation: exposing the Soviet myth in a story easily understood by almost anyone, thought of on his return from Spain; the details coming later, from a boy of about ten driving and whipping a huge cart-horse on a narrow path; Marx analysed from the animals' point of view, all humans uniting against animals whenever it was necessary to exploit them; the page notes that the English original is lost and the text is a back-translation from the Ukrainian",
      url: 'https://www.orwellfoundation.com/the-orwell-foundation/orwell/books-by-orwell/animal-farm/preface-to-the-ukrainian-edition-of-animal-farm-by-george-orwell/',
    },
    {
      label:
        'Orwell, Why I Write (Gangrel, Summer 1946), at the Orwell Foundation: Animal Farm as the first book in which he tried to fuse political purpose and artistic purpose',
      url: 'https://www.orwellfoundation.com/the-orwell-foundation/orwell/essays-and-other-works/why-i-write/',
    },
    {
      label:
        "Wikipedia, Animal Farm: written between November 1943 and February 1944; Old Major read as a combination of Marx and Lenin, his skull recalling Lenin's embalmed body; Mr Jones read as Nicholas II; the music in the novel, starting with Beasts of England, read as a parallel to the Internationale and its adoption and repudiation as the Soviet anthem; the original subtitle A Fairy Story",
      url: 'https://en.wikipedia.org/wiki/Animal_Farm',
    },
    {
      label:
        'Wikipedia, The Communist Manifesto: Marx and Engels, published in London in 1848; the history of all hitherto existing society is the history of class struggles; the closing call to working men of all countries to unite',
      url: 'https://en.wikipedia.org/wiki/The_Communist_Manifesto',
    },
    {
      label:
        'Wikipedia, Karl Marx: died 14 March 1883; co-author with Friedrich Engels of The Communist Manifesto (1848)',
      url: 'https://en.wikipedia.org/wiki/Karl_Marx',
    },
    {
      label:
        "Wikipedia, Surplus value: in Marx's theory, the new value workers create in excess of their own labour-cost, taken by the capitalist as profit",
      url: 'https://en.wikipedia.org/wiki/Surplus_value',
    },
    {
      label:
        'Wikipedia, Vladimir Lenin: leader of the October Revolution, in which the Bolsheviks seized power; head of the Soviet government from 1917 until his death on 21 January 1924',
      url: 'https://en.wikipedia.org/wiki/Vladimir_Lenin',
    },
    {
      label:
        "Wikipedia, Lenin's Mausoleum: in Red Square, Moscow; Lenin's body embalmed after his death and on public display since shortly after it, in 1924",
      url: 'https://en.wikipedia.org/wiki/Lenin%27s_Mausoleum',
    },
    {
      label:
        'Wikipedia, The Internationale: an international anthem, a standard of the socialist movement since the late nineteenth century; French words by Eugène Pottier, June 1871, after the Paris Commune was crushed; tune by Pierre De Geyter, first performed in Lille in July 1888; the change of the Soviet anthem away from it',
      url: 'https://en.wikipedia.org/wiki/The_Internationale',
    },
    {
      label:
        'Wikipedia, State Anthem of the Soviet Union: replaced the Internationale; first played on Soviet radio at midnight on 1 January 1944 and officially adopted on 15 March 1944',
      url: 'https://en.wikipedia.org/wiki/State_Anthem_of_the_Soviet_Union',
    },
    {
      label:
        'Wikipedia, Nicholas II: Emperor of Russia from 1 November 1894, the last Russian monarch before the Revolution; military losses and economic hardship in the First World War; abdication forced by the February Revolution in March 1917; killed with his family on 17 July 1918',
      url: 'https://en.wikipedia.org/wiki/Nicholas_II',
    },
    {
      label:
        'Wikipedia, Leviathan (Hobbes book): published 1651; the life of man in the state of nature solitary, poor, nasty, brutish, and short, avoidable only by a strong, undivided government',
      url: 'https://en.wikipedia.org/wiki/Leviathan_(Hobbes_book)',
    },
    {
      label:
        "Wikipedia, Oh My Darling, Clementine: a traditional American Western folk ballad, issued as sheet music in 1884, in which the miner's daughter Clementine drowns",
      url: 'https://en.wikipedia.org/wiki/Oh_My_Darling,_Clementine',
    },
    {
      label:
        'Wikipedia, La Cucaracha: a folk song about a cockroach, Spanish in origin, popular in the 1910s during the Mexican Revolution',
      url: 'https://en.wikipedia.org/wiki/La_Cucaracha',
    },
    {
      label: 'Wikipedia, Hand (unit): four inches; a horse measured from the ground to the withers',
      url: 'https://en.wikipedia.org/wiki/Hand_(unit)',
    },
    {
      label:
        'Cambridge Dictionary, for ensconce, confinement (labour, old-fashioned), porker, knacker, comrade, tyrannize, clime (literary) and tidings (old use)',
      url: 'https://dictionary.cambridge.org/dictionary/english/',
    },
    {
      label:
        'Wiktionary, for tush (a tusk), dissentient (a dissenter) and mangelwurzel (a root vegetable grown chiefly as cattle feed)',
      url: 'https://en.wiktionary.org/',
    },
    {
      label:
        "src/data/study-guides/animal-farm.ts, whose verification against scanned printings (Open Library full-text search) recorded that Major's triplet has a comma after laborious in the 1945 and American printings and none in Peter Davison's text: the source for that note in the close reading",
      url: 'https://openlibrary.org/search/inside',
    },
  ],
}
