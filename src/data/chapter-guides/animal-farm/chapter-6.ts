import type { ChapterGuide } from '@/lib/study-guides/chapter-guide'

/**
 * Animal Farm, Chapter 6: the windmill year, the first trade with humans, the
 * pigs in the farmhouse beds, and the first time Snowball is blamed.
 *
 * Every close-reading quotation is from section-6 of
 * src/data/full-texts/animal-farm.ts (the Project Gutenberg Australia text).
 * Phrases quoted in the prose from other chapters say which chapter, and the
 * test finds them elsewhere in the same edition.
 *
 * Orwell's own words from OUTSIDE the novella (the Ukrainian preface and the
 * letter to Dwight Macdonald) are in single quotation marks. The chapter-guide
 * test looks for every double-quoted phrase in the novel, so they would fail
 * there; they were checked instead against the sources listed at the end.
 *
 * Things the checking turned up, recorded so nobody reintroduces them:
 * - "Leader" as Napoleon's title first appears in this chapter, used by
 *   Squealer. It is not new in Chapter 8, as the chapters page says.
 * - The narrator gives only a gale for the windmill's fall. That the walls
 *   were too thin is the neighbouring farmers' claim, in Chapter 7.
 * - The text never says who altered the Fourth Commandment. Chapter 8, with
 *   Squealer beside a ladder and a pot of white paint, is the nearest it comes.
 * - Wikipedia's Leon Trotsky article says he was sentenced to death in absentia
 *   in 1936; its Moscow trials article mentions no such sentence. Only what both
 *   support, that the trials implicated him, is said here.
 *
 * An adversarial review the same day (26 September 2026) re-read Chapter VI
 * in full against every statement here, re-fetched every outside source, and
 * corrected the following, so nobody puts them back:
 * - The resolution against trade is what the animals "thought that they
 *   remembered"; the text never confirms it was passed. The guide had stated it
 *   as fact. The farmhouse resolution, by contrast, is passed in Chapter 2, so
 *   the reader knows Squealer is wrong about that one.
 * - The four young pigs are silenced by the dogs; the sheep's bleating comes
 *   after, and smooths the awkwardness over. It does not silence them.
 * - Five humans no longer to feed is about food; the labour saved is the
 *   weeding and the hedges. The guide had merged the two.
 * - The eggs are to be sold only "if more money were needed", not "soon".
 * - No rule on the farm forbids forced labour, so the voluntary-work analysis
 *   no longer says one is being broken.
 * - The pigs' later mornings meet no half-remembered rule, only no complaint,
 *   so the structure section no longer says they "pass this way".
 * - Old Major's four bans: the chapter shows the house, the beds and trade.
 *   Nobody is shown touching money, so the guide no longer says all four go.
 * - Wikipedia's Shakhty Trial article contradicts itself on executions (six
 *   executed, and also six of eleven sentences commuted), so no number of
 *   executions is given. The Dnieper turbines came from General Electric AND
 *   Newport News Shipbuilding, not General Electric alone.
 * - Two source URLs were redirects (Wrecking, Stalin's cult of personality) and
 *   now point at the articles' current titles.
 * - Techniques renamed to fit the words quoted: Boxer's slogans are not
 *   understatement ("seemed to him" marks his point of view), and nothing in
 *   Squealer's bed sentences is a euphemism (the whole-text guide still says
 *   "Euphemism and redefinition" for the same line).
 * - The Moscow trials source no longer says Trotsky was "not a defendant":
 *   the Trotsky article says he was sentenced in absentia.
 * - Added, as a reading: the Wikipedia article on the novella links the
 *   Whymper dealings to the Treaty of Rapallo (1922).
 */
export const chapter: ChapterGuide = {
  slug: 'animal-farm',
  chapter: 6,
  part: 'Chapter 6',
  title: 'Trade, beds and the fallen windmill',
  atAGlance:
    'A year of hard labour on the windmill is also a year of quiet reversals: Napoleon starts trading with humans through a solicitor, Mr Whymper, and the pigs move into the farmhouse and sleep in beds. Each time the animals half-remember a rule against what the pigs are doing, Squealer or the barn wall tells them they are wrong. When a November gale brings down the half-built windmill, Napoleon blames the absent Snowball, and the farm gains an enemy who can explain every failure to come.',

  summary: [
    "The chapter covers the rest of the year after Snowball's expulsion, from spring to November. The animals work a sixty-hour week, and in August Napoleon adds Sunday afternoons, which are called voluntary although any animal who stays away loses half its rations. Even so, the harvest is a little less successful than the year before and two fields go unsown, so the coming winter looks hard. The windmill is slow to start because no animal can use a pick or a crowbar; the answer is to haul huge boulders up the quarry slope and topple them over the edge to smash. The building goes on under the pigs' supervision, and the pigs join in the hauling only now and then, at critical moments.",
    'Boxer, whose strength seems equal to all the other animals put together, holds the rope when a boulder starts to slip, has the cockerel wake him three-quarters of an hour early instead of half an hour, and hauls stone alone in his spare moments. Clover warns him not to overstrain himself, and he does not listen. Through the summer the animals are no worse fed than under Jones, since they no longer feed five humans as well, and some work is easier: weeding is more thorough, and because no animal steals, hedges and gates need less upkeep. But the farm needs things it cannot produce: paraffin oil, nails, string, dog biscuits and iron for horseshoes, and later seeds, artificial manures and machinery for the windmill.',
    "One Sunday Napoleon announces a new policy: the farm will trade with its neighbours, selling hay and part of the wheat crop now, and eggs later if more money is needed; the hens should welcome the sacrifice. The animals feel uneasy, because they remember, or think they remember, resolving never to deal with humans, trade or use money. The four young pigs who protested in Chapter 5 raise their voices again and are silenced by the dogs' growling, and the sheep's bleating smooths the moment over. A solicitor from Willingdon, Mr Whymper, will act as go-between, visiting every Monday. Afterwards Squealer tells the animals that no such resolution was ever passed and asks whether it is written down anywhere; since it is not, they decide they were mistaken.",
    "Whymper is a “sly-looking little man” who has seen that a broker's commissions will be worth having. The animals dread him, yet feel proud watching Napoleon, on all fours, give orders to a man standing on two legs. The neighbouring humans hate the farm more now that it prospers and prove in the pubs that the windmill must fall, but they have started calling it Animal Farm and have given up on Jones, who has moved away. Rumour says Napoleon is about to do business with Mr Pilkington of Foxwood or Mr Frederick of Pinchfield, though never, it is noticed, with both at once.",
    'Then the pigs move into the farmhouse. Again the animals seem to remember a resolution against it, and this time the reader saw one passed, in Chapter 2, but again Squealer convinces them otherwise. He says the brains of the farm need a quiet place to work, and that a house suits the dignity of the Leader, a title he has lately begun to use for Napoleon. When the animals hear that the pigs eat in the kitchen, use the drawing-room for recreation and sleep in the beds, Clover remembers a ruling against beds. She can read only single letters, so she fetches Muriel, who spells out the Fourth Commandment: no animal may sleep in a bed “with sheets”. Clover does not remember those words, but trusts the wall. Squealer, passing with two or three dogs, explains that a bed is only a place to sleep, that the pigs have taken the sheets off, and asks whether anyone wants Jones back. Nobody objects, then or when the pigs decide to get up an hour later than everyone else.',
    "By autumn the animals are tired but happy, and the windmill is almost half built. Boxer works on it by the light of the harvest moon; Benjamin alone stays unimpressed, saying nothing beyond his cryptic remark that donkeys live a long time. In November, wind and rain stop the building. One night a gale rocks the farm buildings, the hens dream of a distant gunshot, and in the morning the flagstaff is down, an elm has been uprooted and the windmill is in ruins. Napoleon, who seldom moves faster than a walk, races to the site, sniffs the ground, and then announces that Snowball did it. He sentences Snowball to death and offers rewards for his capture. The footprints of a pig are found near the knoll, apparently leading to a hole in the hedge, and Napoleon declares them to be Snowball's. He orders the rebuilding to begin that morning and to go on all winter.",
  ],

  keyEvents: [
    'In August Napoleon adds Sunday afternoon work, calling it voluntary while halving the rations of any animal who stays away.',
    "The animals learn to break stone by toppling boulders into the quarry, and the building begins under the pigs' supervision, with Boxer doing the heaviest work.",
    "Napoleon announces trade with the neighbouring farms through a solicitor, Mr Whymper, against Old Major's warning and what the animals remember as one of their first resolutions; the dogs growl the four young pigs' protest down.",
    'Squealer tells the animals that the resolution against trade was never passed, and they accept it because nothing was written down.',
    'The pigs move into the farmhouse and sleep in the beds; the Fourth Commandment on the wall now forbids only beds with sheets, and the pigs begin rising an hour later than the rest.',
    'A violent November gale brings down the half-built windmill.',
    'Napoleon blames Snowball, sentences him to death, offers a reward for his capture and orders the windmill rebuilt at once.',
  ],

  closeReading: [
    {
      quote: 'All that year the animals worked like slaves. But they were happy in their work',
      technique: 'Simile set against an ironic contrast',
      analysis:
        "The first sentence compares the animals to slaves, the very condition the Rebellion was meant to end, and the next answers it with happiness. The conjunction “But” places the two side by side without comment: the narrator reports the animals' contentment in their own terms, while the simile tells the reader what it is worth. Orwell lets the reader see what the animals cannot, that the Rebellion has changed who commands their labour rather than the labour itself.",
    },
    {
      quote:
        'This work was strictly voluntary, but any animal who absented himself from it would have his rations reduced by half.',
      technique: 'Self-contradiction in official language',
      analysis:
        'The adverb “strictly” insists on a freedom that the clause after “but” takes away. An order backed by hunger is not voluntary, yet the regime keeps the word because it sounds like a choice. The flat reporting voice presents the contradiction as ordinary policy, and that is the point: official language here does not deny the facts, it describes them in words that mean their opposite, so the pigs can compel labour while still speaking of free choice.',
    },
    {
      quote: 'His two slogans … seemed to him a sufficient answer to all problems.',
      technique: "Deadpan irony through Boxer's point of view",
      analysis:
        "The two slogans are “I will work harder” and “Napoleon is always right”. The words “seemed to him” mark the judgement as Boxer's, and the narrator reports it without comment, which lets the reader hear how little two slogans can answer. The first makes Boxer the farm's greatest asset; the second hands every judgement to Napoleon. Together they explain why the pigs can take so much from him: his goodness and his obedience have become the same quality. The chapter shows him hauling stone alone, admirable and tragically easy to use.",
    },
    {
      quote:
        'Are you certain that this is not something that you have dreamed, comrades? … Is it written down anywhere?',
      technique: 'Rhetorical questions',
      analysis:
        'Squealer answers a doubt with questions, and each one moves the burden of proof onto the animals. The first calls their shared memory a dream; the last makes a written record the only test of truth, on a farm where most animals cannot read and the pigs did the writing. Because nothing was written, the animals decide they were mistaken. Orwell shows a past being abolished for want of a document, and a people taught to distrust their own minds.',
    },
    {
      quote:
        'the sight of Napoleon, on all fours, delivering orders to Whymper, who stood on two legs, roused their pride',
      technique: 'Visual contrast and dramatic irony',
      analysis:
        "The picture flatters the animals: a pig giving orders to a man turns the old order upside down, and they take comfort from it. But four legs set against two recalls the slogan the sheep bleat, and the reader remembers that Old Major, in Chapter 1, forbade trade altogether. The animals' pride hides the real change, which is that Napoleon now needs Whymper. In Chapter 10 the image is reversed, when Napoleon himself walks upright.",
    },
    {
      quote:
        'Clover had not remembered that the Fourth Commandment mentioned sheets; but as it was there on the wall, it must have done so.',
      technique: 'Free indirect style and the naive narrator',
      analysis:
        "The sentence follows Clover's own reasoning, so it sounds sensible, and that is the irony. She trusts the painted wall over her memory, although the reader, who saw this Commandment painted in Chapter 2, knows it has changed; Chapter 8, with Squealer, a ladder and a pot of white paint, all but shows who changes the Commandments. The words that open the full sentence, “Curiously enough”, are the narrator's dry hint, but the conclusion is left to the reader. Rewritten history works best when its victims supply the logic themselves.",
    },
    {
      quote:
        'A bed merely means a place to sleep in. A pile of straw in a stall is a bed, properly regarded.',
      technique: 'Redefinition and minimising language',
      analysis:
        'Squealer does not deny that the pigs sleep in beds; he changes what the word means. The adverb “merely” and the phrase “properly regarded” make the new definition sound modest and learned, and stretching the word to cover straw implies every animal has always slept in a bed, so the rule can only ever have meant sheets. He speaks with dogs at his side and finishes with the threat of Jones. Whoever controls the words can break the rules without appearing to.',
    },
    {
      quote:
        'Do you know the enemy who has come in the night and overthrown our windmill? SNOWBALL!',
      technique: 'Rhetorical question, capitals and scapegoating',
      analysis:
        "Napoleon begins quietly and builds to a name printed in capitals, roared out. The question pretends to invite thought, but only one answer is allowed, and the evidence comes afterwards, when he sniffs a few yards of footprints and pronounces them Snowball's. The narrator has just described a violent gale, so the reader holds an explanation that Napoleon never mentions, though the animals lived through the same storm. An absent enemy cannot answer back, and from now on Snowball can be blamed for any failure the regime would otherwise have to own.",
    },
  ],

  characters: [
    {
      name: 'Napoleon',
      development:
        "Chapter 6 shows Napoleon ruling without being seen to argue. He announces the trade himself but leaves the explaining to Squealer, and presents dealing with humans as a burden he takes on for everyone, while the farm pays in hay, wheat and, if more money is needed, eggs. At the ruined windmill the narrator's deadpan note that his twitching tail is “a sign in him of intense mental activity” suggests calculation rather than grief: within minutes he has a culprit, a death sentence and a new rallying cry. It is the first disaster to be blamed on Snowball.",
    },
    {
      name: 'Squealer',
      development:
        "Squealer does the chapter's most important work. He persuades the animals that the resolution against trade never existed and that their memory of it probably came from Snowball's lies; he redefines the word bed to excuse the pigs; and he ends his argument with the fear of Jones. Two or three dogs attend him when he explains the beds, as three stood growling beside him in Chapter 5, so his persuasion has force beside it. He is also the pig who has begun to call Napoleon the Leader, an early sign of a cult of personality.",
    },
    {
      name: 'Boxer',
      development:
        "Boxer is the windmill's strength, and the narrator says nothing could have been achieved without him. He stops sliding boulders, rises three-quarters of an hour early, hauls stone alone and works by moonlight after the harvest. His answer to the pigs moving into the farmhouse is his second slogan, and he never listens when Clover warns him not to overstrain himself. The chapter makes his loyalty both moving and dangerous, and prepares for his collapse in Chapter 9.",
    },
    {
      name: 'Clover',
      development:
        "Clover remembers the rules better than she can check them. She remembers a ruling against beds, but she can read only single letters, so she has to fetch Muriel, and when the wall says otherwise she decides her memory was at fault. She is also the one who worries about Boxer's health. Her doubt, quickly given up, looks ahead to Chapter 7, where she grieves over what the Rebellion has become but still resolves to stay loyal.",
    },
    {
      name: 'Muriel',
      development:
        'Muriel the goat reads better than the dogs, Chapter 3 says, yet she spells out the altered Commandment only with some difficulty. She reads exactly what is written and no more, so her reading confirms the change instead of exposing it. She is fetched again in Chapter 8, when another Commandment turns out to have changed.',
    },
    {
      name: 'Benjamin',
      development:
        'Benjamin, the old donkey, is the only animal who will not grow enthusiastic about the windmill. His cryptic remark that donkeys live a long time, which he first made in Chapter 3, suggests he expects no regime to change much. He can read as well as any pig, but the chapter gives him no part in checking the wall; one reading is that his detachment is a failure of its own.',
    },
    {
      name: 'Snowball',
      development:
        "Snowball never appears, yet he takes over the chapter's ending. Squealer has already hinted that the animals' memories of the resolution against trade came from his lies, and when the windmill falls Napoleon makes him the culprit, sentences him to death and offers apples for his capture. The only evidence is a trail of pig's footprints that can be followed for a few yards. From here on he is less a character than an explanation.",
    },
    {
      name: 'Mr Whymper',
      development:
        'Whymper is the first human to deal regularly with the farm since the Rebellion. A solicitor in a very small way of business, he has seen before anyone else that the farm will need a broker, and he serves it for the commissions, not out of sympathy. The animals dread him, but the sight of him taking orders partly reconciles them to the arrangement. In Chapter 7 Napoleon will use him to deceive the outside world.',
    },
    {
      name: 'The dogs and the sheep',
      development:
        'Between them they end the only protest in the chapter. The dogs growl the four young pigs into silence and two or three of them attend Squealer when he explains the beds; they need attack no one, because the threat is enough. The sheep then bleat their slogan, and the moment of awkwardness is smoothed over. Force and noise now do the work that argument once did.',
    },
    {
      name: 'The four young pigs',
      development:
        'The four pigs who protested in Chapter 5 when Napoleon abolished the Meetings speak up again, timidly, against trade, and are silenced by the dogs. They are the same four who will confess and be killed in Chapter 7, so their brief courage here is also a warning of what dissent will cost.',
    },
  ],

  themes: [
    {
      theme: 'Class and Labour',
      development:
        "The chapter opens with the animals working like slaves and ends with their year's labour in ruins. The pigs supervise, joining in only at critical moments, then move into the farmhouse and take an extra hour in bed while Boxer rises earlier. Food has become a tool of discipline, halved for any animal who misses voluntary work. The narrator is fair about it, noting that the animals eat no less than under Jones, which makes the growing division harder for them to see.",
    },
    {
      theme: 'Language and Propaganda',
      development:
        "Squealer works in three ways here: denial (the resolution never existed), redefinition (a bed is only a place to sleep) and fear (surely no one wants Jones back). The sheep's slogan ends discussion, the title Leader appears, and the altered Commandment shows propaganda written into the record itself. At the windmill Napoleon adds a fourth method, the scapegoat.",
    },
    {
      theme: 'Power and Corruption',
      development:
        'In Chapter 1 Old Major warned that no animal must ever live in a house, sleep in a bed, touch money or engage in trade. In this one chapter the pigs move into a house and its beds, and the farm begins to trade and to raise money, and each step is presented as a duty rather than a privilege: the burden of trade, the brainwork that needs quiet, the beds they need if they are not to be too tired for their duties. Corruption arrives dressed as sacrifice.',
    },
    {
      theme: 'Revolution and Betrayal',
      development:
        'What the animals resolved after the Rebellion, or remember resolving, is undone one step at a time, each step small enough to accept. The meeting that announces trade still ends with Beasts of England, so the song of the Rebellion is sung over its betrayal. And the windmill, which Snowball promised in Chapter 5 would cut the working week to three days, has become the reason for a sixty-hour week.',
    },
    {
      theme: 'Education and Ignorance',
      development:
        "Clover cannot read beyond single letters and Muriel reads with difficulty, so what is written on the wall defeats what is remembered. Squealer's question about a written record works only because few animals can make or check one. Benjamin, who can read as well as any pig, is not the one Clover asks. The chapter shows literacy as power: the pigs write, and everyone else must trust the writing.",
    },
  ],

  context: [
    {
      heading: "The windmill and Stalin's Five-Year Plans (a reading)",
      body: "The windmill is usually read as Soviet industrialisation. From 1923 Trotsky's Left Opposition had argued for faster industrial growth; Trotsky was expelled from the party in 1927, and Stalin launched the first Five-Year Plan on 1 October 1928, so Napoleon building his exiled rival's windmill fits the history. The plan put about 86 per cent of industrial investment into heavy industry and was officially reported as 93.7 per cent fulfilled in four years and three months. Its human cost was enormous: the industrialisation and collectivisation it drove led to a famine that peaked in the winter of 1932 to 1933 and killed an estimated 3.3 to 7 million people. The sixty-hour week and the compulsory voluntary work can be read as that pressure in miniature. In the same years Stalin's cult of personality began, which the historian Archie Brown dates from his fiftieth birthday in December 1929; Squealer's new title for Napoleon, the Leader, belongs to the same story.",
    },
    {
      heading: 'Trading with the capitalists (a reading)',
      body: "Napoleon's new policy breaks Old Major's warning against trade, and what the animals remember as one of their first resolutions. The Soviet state, founded to overthrow capitalism, paid for its industrialisation partly by buying grain cheaply from the peasants and exporting it at higher prices, and it imported technology from the leading industrial powers, above all the United States and Germany. In February 1930 the firm of the American architect Albert Kahn agreed to act as chief consultant on Soviet industrial construction, and the American dam-builder Hugh Cooper was chief consultant for the Dnieper hydroelectric station, whose turbines were bought from General Electric and Newport News Shipbuilding. Read this way, the hay, wheat and eggs sold to buy what the windmill needs stand for that grain, and Mr Whymper, who serves the farm for his commissions, for the Western businesses that profited from the trade. Another reading, recorded in the Wikipedia article on the novella, links Napoleon's dealings with Whymper to the Treaty of Rapallo of April 1922, by which Soviet Russia and Germany renounced their claims against each other and opened friendly relations. The rumours of a deal with Pilkington or Frederick, never both at once, look ahead to Chapter 8, where Frederick's forged banknotes are often read as a parallel to the Nazi-Soviet Pact of August 1939.",
    },
    {
      heading: 'Wreckers and the absent traitor (a reading)',
      body: "Blaming Snowball for a collapse that follows a violent gale matches a pattern in Stalin's Soviet Union. Wrecking, or undermining the economy, was a crime under Article 58 of the Soviet Russian penal code, and when the Five-Year Plan's targets were missed, the failures were blamed on wreckers. In the first great case, the Shakhty Trial of 1928, fifty-three engineers and managers from a mining town were charged with conspiring with the mines' former owners to sabotage the economy, and eleven were sentenced to death. That charge of working for the old owners is the one Squealer brings against Snowball in Chapter 7. Stalin's exiled rival was cast in the same role: the Moscow show trials of 1936 to 1938, built on forced confessions, implicated Trotsky in the plots, and in 1940 he was killed in Mexico City by Ramón Mercader, a Stalinist agent. Napoleon's death sentence on Snowball, passed in his absence, looks ahead to both.",
    },
    {
      heading: 'What Orwell said about the allegory',
      body: 'Orwell warned against reading the novella as a strict timeline. In his preface to the Ukrainian edition (March 1947), whose English original is lost and which survives only as a translation back from the Ukrainian, he said the episodes are taken from the history of the Russian Revolution but treated schematically, with their order changed for the symmetry of the story; so a single farming year here can gather events that took years. He wrote there that he had long been convinced the ‘destruction of the Soviet myth’ was essential for a revival of the socialist movement, and had thought of exposing that myth in a story almost anyone could understand. In a letter to Dwight Macdonald in December 1946 he called the book primarily a satire on the Russian revolution with a wider application, and said revolutions only bring real improvement when the masses are alert and know how to ‘chuck out their leaders’. The animals who half-remember the rule against trade, and let Squealer talk them out of it, can be read as the opposite of those alert masses.',
    },
  ],

  structure:
    "Chapter 6 opens the second half of the novella and covers most of a farming year, from the spring and summer labour to the November gale, so the seasons give it its shape. Within that year it repeats one pattern: the pigs take something, the animals half-remember a rule against it, and Squealer or the wall corrects them. Trade, the farmhouse and the beds each pass this way, and each objection is weaker than the last, until the pigs' later mornings draw no complaint at all. The windmill runs underneath as the measure of the animals' effort; its fall comes at the very end, so the chapter closes on Napoleon's accusation and his order to rebuild. Several threads run on from here: the hens' eggs and the fate of the four protesting pigs in Chapter 7, the rival buyers Pilkington and Frederick in Chapters 7 and 8, and a windmill built and destroyed again.",

  vocabulary: [
    {
      term: 'Superintendence',
      meaning:
        'Supervision. The building goes on under the superintendence of the pigs: they direct the work, joining in only at critical moments.',
    },
    {
      term: 'Procured',
      meaning:
        'Obtained, usually with some effort. Nobody can imagine how the nails, paraffin and machinery the farm needs are to be procured, which prepares for trade.',
    },
    {
      term: 'Intermediary',
      meaning:
        'A go-between who deals with each side for the other. Mr Whymper is the intermediary between Animal Farm and the outside world.',
    },
    {
      term: 'Solicitor',
      meaning:
        "A lawyer who handles clients' legal and business affairs. Whymper is one in a very small way of business, not an important man.",
    },
    {
      term: 'Broker',
      meaning:
        'Someone who arranges sales and purchases for others in return for a fee. Whymper sees before anyone else that the farm will need one.',
    },
    {
      term: 'Commissions',
      meaning:
        'Fees a broker earns as a share of each deal. They are why Whymper wants the work, which tells the reader his motive is money.',
    },
    {
      term: 'Article of faith',
      meaning:
        'A belief held firmly without needing proof. Every human holds it as an article of faith that the farm will go bankrupt: a phrase from religion, which suggests their certainty is belief rather than knowledge.',
    },
    {
      term: 'Perpendicularity',
      meaning:
        "Standing exactly upright. The animals admire the perpendicularity of the windmill's walls, a long, proud word for a building about to fall.",
    },
    {
      term: 'Cryptic',
      meaning:
        "Mysterious, with a hidden meaning. Benjamin's cryptic remark that donkeys live a long time leaves the others to work out what he means.",
    },
    {
      term: 'Malignity',
      meaning:
        'A deep wish to do harm. Napoleon claims Snowball destroyed the windmill in sheer malignity, a grand word that turns the collapse of the windmill into a crime.',
    },
    {
      term: 'Ignominious',
      meaning:
        "Shameful and humiliating. Napoleon calls Snowball's expulsion ignominious, rewriting the attack by his own dogs as Snowball's disgrace.",
    },
  ],

  examQuestion: {
    question:
      'Starting with Chapter 6, explore how Orwell presents the ways the pigs control what the other animals believe. Write about Chapter 6 and about the novella as a whole.',
    guidance: [
      "Open with an argument, not a summary: in Chapter 6 the pigs control belief with three tools that work together, Squealer's words, the written record, and the threat behind both, the dogs and the fear of Jones.",
      "Analyse Squealer's answer on trade. His rhetorical questions, ending “Is it written down anywhere?”, make the animals' memory the problem and a document the only proof.",
      'Analyse the beds. Clover trusts the wall over her memory, and Squealer redefines the word, “A bed merely means a place to sleep in”, with dogs at his side. Persuasion and force arrive together.',
      'Analyse the fall of the windmill. The narrator gives a gale; Napoleon gives an enemy. Explain how a scapegoat protects the regime from ever being wrong.',
      "Reach back: in Chapter 3 Squealer secures the milk and apples by warning that “Jones would come back”, and in Chapter 5 the dogs end debate and Squealer calls Napoleon's change of mind tactics. Chapter 6 shows the same tools used as routine.",
      'Reach forward: the forced confessions of Chapter 7, the Commandments that gain “without cause” and “to excess” in Chapter 8, and the single Commandment and “Four legs good, two legs better!” in Chapter 10.',
      "Finish with context and purpose: link Snowball's scapegoating, as a reading, to the Soviet hunt for wreckers and to Trotsky, and to Orwell's view that revolutions go wrong when people are not alert enough to challenge their leaders.",
    ],
    tips: [
      "Keep quotations short and embedded. Some of this chapter's best evidence is two words long, such as “strictly voluntary” or “with sheets”.",
      "Be precise about who is speaking. The narrator's “Curiously enough” is irony, Squealer's lines are persuasion and Napoleon's accusation is performance; saying which is which shows you understand how the satire works.",
      'Present the history as a reading (Napoleon can be read as Stalin) and make it precise: the Five-Year Plans, the wrecking trials and Trotsky earn more credit than a general mention of Russia.',
      'Track the Commandments in order: the beds here in Chapter 6, killing and alcohol in Chapter 8, and the single Commandment left in Chapter 10.',
    ],
  },

  quiz: [
    {
      question: 'How long a working week do the animals work through the spring and summer?',
      options: ['Forty hours', 'Fifty hours', 'Sixty hours', 'Seventy hours'],
      answer: 2,
      explanation:
        'The narrator says they worked a sixty-hour week, and from August Sunday afternoons were added as well.',
    },
    {
      question: 'What happens to an animal who does not turn up for the Sunday afternoon work?',
      options: [
        'It is sent to work in the quarry at night',
        'Its rations are cut by half',
        'It loses its vote at the Sunday Meeting',
        'It is named as a friend of Snowball',
      ],
      answer: 1,
      explanation:
        "The work is called “strictly voluntary”, yet staying away costs half an animal's rations. There are no votes to lose: Napoleon abolished the Sunday Meetings in Chapter 5.",
    },
    {
      question: 'Who is Mr Whymper?',
      options: [
        "A solicitor from Willingdon who acts as the farm's go-between",
        "Mr Pilkington's farm manager",
        'A vet who treats the animals',
        'One of the men who fought for Jones at the Battle of the Cowshed',
      ],
      answer: 0,
      explanation:
        'Whymper is a solicitor living in Willingdon who agrees to act as intermediary between Animal Farm and the outside world, visiting every Monday morning to receive his instructions.',
    },
    {
      question: 'What does Muriel read on the barn wall when Clover asks about beds?',
      options: [
        'No animal shall sleep in a bed',
        'No animal shall sleep in the farmhouse',
        'No animal shall sleep in a bed after sunrise',
        'No animal shall sleep in a bed with sheets',
      ],
      answer: 3,
      explanation:
        'The first option is the Fourth Commandment as painted in Chapter 2. By Chapter 6 it ends with two extra words, which Clover does not remember but accepts because they are on the wall.',
    },
    {
      question: "How does Squealer deal with the animals' memory of a resolution against trade?",
      options: [
        'He admits it was passed but says circumstances have changed',
        'He says Napoleon voted against it at the time',
        'He says it was never passed and asks whether it is written down anywhere',
        'He promises that trade will stop once the windmill is built',
      ],
      answer: 2,
      explanation:
        "Squealer calls the resolution pure imagination, probably traced to Snowball's lies, and asks for a written record. Since there is none, the animals decide they were mistaken.",
    },
    {
      question: 'According to the narrator, what happened on the night the windmill fell?',
      options: [
        'Snowball was seen crossing the knoll',
        'A gale rocked the farm buildings',
        "Jones's men attacked with guns",
        'Rats undermined the walls',
      ],
      answer: 1,
      explanation:
        'The narrator describes a gale so violent that the buildings rocked, tiles blew off the barn and an elm was uprooted. The hens only dreamed of a gun. Napoleon replaces the storm with an enemy.',
    },
    {
      question: 'What does Napoleon offer to any animal who captures Snowball alive?',
      options: [
        'A full bushel of apples',
        'Animal Hero, First Class',
        'A double ration of oats',
        'A place to sleep in the farmhouse',
      ],
      answer: 0,
      explanation:
        'Animal Hero, Second Class and half a bushel of apples go to any animal who brings Snowball to justice, and a full bushel to anyone who captures him alive.',
    },
    {
      question: 'How does Benjamin respond to the half-built windmill?',
      options: [
        'He works on it by moonlight with Boxer',
        'He warns Boxer that it will fall',
        'He reminds the others that Snowball designed it',
        'He remarks only that donkeys live a long time',
      ],
      answer: 3,
      explanation:
        'Benjamin alone refuses to grow enthusiastic, and says nothing beyond his cryptic remark about donkeys. It is Boxer who works by the harvest moon.',
    },
  ],

  sources: [
    {
      label:
        'The held edition, src/data/full-texts/animal-farm.ts (Project Gutenberg Australia, eBook 0100011h): section-6 for every close-reading quotation and event; sections 1, 2, 3, 5, 7, 8, 9 and 10 for the phrases and events from other chapters',
      url: 'https://gutenberg.net.au/ebooks01/0100011h.html',
    },
    {
      label:
        'Orwell, preface to the Ukrainian edition of Animal Farm (March 1947), at the Orwell Foundation: episodes taken from the history of the Russian Revolution, dealt with schematically and their chronological order changed for symmetry; the destruction of the Soviet myth as necessary for a revival of the socialist movement. The page says the English original is lost and the text is a back-translation from the Ukrainian',
      url: 'https://www.orwellfoundation.com/the-orwell-foundation/orwell/essays-and-other-works/preface-to-the-ukrainian-edition-of-animal-farm/',
    },
    {
      label:
        'Orwell, letter to Dwight Macdonald (December 1946), printed in The New York Review of Books, 11 July 2013: primarily a satire on the Russian revolution with a wider application; revolutions only effect a radical improvement when the masses are alert and know how to chuck out their leaders',
      url: 'https://www.nybooks.com/articles/2013/07/11/animal-farm-what-orwell-really-meant/',
    },
    {
      label:
        "Wikipedia, Animal Farm: the windmill and the five-year plans; Frederick's forged banknotes as a parallel to the Molotov-Ribbentrop Pact of August 1939; Napoleon's dealings with Whymper and the Willingdon markets in Chapter VI as a parallel to the Treaty of Rapallo (1922); Whymper as the liaison between the farm and human society. Its plot summary says the windmill fell because of its thin walls, which in the novella is only the farmers' claim, so that was not followed",
      url: 'https://en.wikipedia.org/wiki/Animal_Farm',
    },
    {
      label:
        'Wikipedia, Treaty of Rapallo (1922): signed on 16 April 1922 by Germany and Soviet Russia, which renounced all territorial and financial claims against each other and opened friendly diplomatic relations',
      url: 'https://en.wikipedia.org/wiki/Treaty_of_Rapallo_(1922)',
    },
    {
      label:
        'Wikipedia, Five-year plans of the Soviet Union: the first plan from 1 October 1928 to 31 December 1932; about 86 per cent of industrial investment to heavy industry; officially 93.7 per cent fulfilled in four years and three months; the famine of 1932 to 1933, an estimated 3.3 to 7 million dead',
      url: 'https://en.wikipedia.org/wiki/Five-year_plans_of_the_Soviet_Union',
    },
    {
      label:
        'Wikipedia, Industrialization in the Soviet Union: grain bought at low prices and exported at higher ones; technology imported from the United States and Germany; the February 1930 agreement with Albert Kahn, Inc., the firm of the American architect Albert Kahn; Hugh Cooper as chief consultant for the DneproGES, with hydro turbines bought from General Electric and Newport News Shipbuilding; failures to meet the plan blamed on saboteurs after the Shakhty Trial',
      url: 'https://en.wikipedia.org/wiki/Industrialization_in_the_Soviet_Union',
    },
    {
      label:
        'Wikipedia, Wrecking (crime) (formerly titled Wrecking (Soviet Union)): a sub-article of Article 58 of the RSFSR Penal Code, its meaning closer to undermining, and covering acts in the interests of the former capitalist owners; in practice applied to failing to meet economic targets; the Shakhty Trial (1928), the Industrial Party Trial (1930) and the Metro-Vickers affair (1933)',
      url: 'https://en.wikipedia.org/wiki/Wrecking_(crime)',
    },
    {
      label:
        'Wikipedia, Shakhty Trial: 1928; fifty-three engineers and managers from Shakhty, in the North Caucasus, accused of conspiring with the former owners of the coal mines to sabotage the economy; eleven sentenced to death. The article gives two accounts of how many were executed (six executed, and six of the death sentences commuted), so no number is given here',
      url: 'https://en.wikipedia.org/wiki/Shakhty_Trial',
    },
    {
      label:
        'Wikipedia, Moscow trials: August 1936, January 1937 and March 1938; nominally directed against Trotskyists, with the exiled Trotsky charged with having instructed the accused, charges the Dewey Commission of 1937 examined; the confessions coerced, some possibly under torture',
      url: 'https://en.wikipedia.org/wiki/Moscow_trials',
    },
    {
      label:
        'Wikipedia, Leon Trotsky: led the Left Opposition from 1923, which supported greater industrialisation; expelled from the party in 1927 and deported in 1929; assassinated in Mexico City in 1940 by Ramón Mercader, a Stalinist agent',
      url: 'https://en.wikipedia.org/wiki/Leon_Trotsky',
    },
    {
      label:
        "Wikipedia, Joseph Stalin's cult of personality: the historian Archie Brown dates its start to the celebration of Stalin's fiftieth birthday on 21 December 1929",
      url: 'https://en.wikipedia.org/wiki/Joseph_Stalin%27s_cult_of_personality',
    },
  ],
}
