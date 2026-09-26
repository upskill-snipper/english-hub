import type { ChapterGuide } from '@/lib/study-guides/chapter-guide'

/**
 * Animal Farm, Chapter 7: the hungry winter, the hens' revolt, Snowball made
 * the cause of everything, the confessions and executions, Clover on the
 * knoll and the banning of Beasts of England.
 *
 * QUOTATIONS. Every close-reading quotation and every phrase quoted in the
 * prose was read off Chapter VII (section-7) of the held edition,
 * src/data/full-texts/animal-farm.ts (Project Gutenberg Australia), apart
 * from "five times in succession" (Chapter 1), which the structure note names
 * as such. chapter-guides.test.ts checks them against the edition. Each
 * quotation is kept short on purpose; the chapter itself is one click away.
 *
 * ORWELL'S OWN WORDS. His 1947 preface to the Ukrainian edition is reported,
 * not quoted: the test checks every double-quoted phrase in the prose against
 * the novella, and a quotation from outside it would fail as if it were
 * invented. The preface survives only as a back-translation from the
 * Ukrainian, which the context note says.
 *
 * HISTORY. The Soviet parallels are stated as readings, with dates and figures
 * taken from the sources at the foot of the file (fetched 26 September 2026).
 * Things found while checking, recorded so nobody reintroduces them:
 * - The famine (1932 to 1933), the Moscow trials (1936 to 1938) and the new
 *   Soviet anthem (1943 to 1944) happened years apart. Orwell compresses them
 *   into one winter and spring, and said in the Ukrainian preface that he had
 *   changed the order of real events, so this file never presents the
 *   chapter as a timeline.
 * - Squealer's claim that Napoleon bit Jones's leg at the Battle of the
 *   Cowshed has no support in Chapter 4, which does not mention Napoleon in
 *   the fighting at all. Snowball's squeal there was the planned signal for
 *   the retreat into the yard, which is the real memory Squealer twists.
 * - Animal Hero, Second Class was created in Chapter 4 and given to the dead
 *   sheep; Napoleon awards it to himself here.
 * - The text never says who set the dogs on Boxer. The guide links the attack
 *   to Squealer's ugly look only as a reading.
 * - The chapters page (the Chapter 7 card) calls the hens' revolt a possible
 *   parallel to Ukrainian resistance to collectivisation; Wikipedia's list of
 *   characters calls the hens the Holodomor's victims. Both are readings, and
 *   this file gives both as such.
 *
 * CORRECTED IN REVIEW (26 September 2026), so nobody puts these back:
 * - Not every confessor is linked to Snowball: the goose and the two sheep who
 *   killed the ram are not. Nor does the text name the dogs as the killers of
 *   anyone but the four pigs; the later deaths are in the passive.
 * - The picture of animals "set free from hunger and the whip" is Clover's
 *   own, not Old Major's vision, and the knoll holds nearly every survivor,
 *   not "a few animals".
 * - Squealer gives the reason for the ban only when Muriel asks why.
 * - "The dogs promptly tore their throats out" is the main clause of a short
 *   sentence, not the tail of a long one.
 * - "Final act" is read as a double meaning, not asserted as a theatrical
 *   metaphor, and coccidiosis is a false cause, not a euphemism.
 * - The Dewey Commission was dropped: the Moscow trials article records that
 *   Trotsky's supporters set it up and that some of its own members doubted
 *   its rigour, which a single clause could not fairly carry.
 */
export const chapter: ChapterGuide = {
  slug: 'animal-farm',
  chapter: 7,
  part: 'Chapter 7',
  title: 'Hunger, confessions and a banned song',
  atAGlance:
    "Through a hungry winter Napoleon hides the farm's famine from the outside world, starves the hens into giving up their eggs and turns the absent Snowball into the secret cause of every misfortune. Then animals who confess to crimes, most of them linked to Snowball, are killed in front of everyone, and the narrator notes that no animal had killed another since Jones left the farm. As Clover grieves on the knoll, the song of the Rebellion is banned: this is the chapter where Animalism becomes rule by terror.",
  summary: [
    "The winter is bitter, and the animals rebuild the windmill with walls three feet thick instead of eighteen inches, although they are sure the first one fell because of Snowball and not, as the humans say, because its walls were too thin. They are always cold and usually hungry. Squealer makes speeches on “the joy of service and the dignity of labour”, but the animals take more heart from Boxer. In January the corn ration is cut and the promised potatoes turn out to have been “frosted in the clamps”; for days there is nothing to eat but chaff and mangels, and “Starvation seemed to stare them in the face.” Napoleon's answer is to hide the hunger from the outside world. A few chosen animals, mostly sheep, are told to remark in Mr Whymper's hearing that rations have gone up, and the nearly empty bins in the store-shed are filled with sand and topped with the last of the grain. Whymper is shown them and reports that there is no food shortage.",
    "Napoleon now rarely appears in public. He stays in the farmhouse, guarded by dogs, comes out only with an escort of six dogs, and often sends his orders through another pig, usually Squealer. One Sunday Squealer announces that Napoleon has agreed, through Whymper, to sell four hundred eggs a week to pay for grain. The hens protest that to take their eggs now is murder, and for the first time since Jones was expelled there is “something resembling a rebellion”. Led by three young Black Minorca pullets, they lay their eggs from the rafters so that they smash on the floor. “Napoleon acted swiftly and ruthlessly.” He stops their rations and decrees death for any animal who gives a hen so much as a grain of corn. After five days the hens give in. Nine have died, and it is announced that they died of coccidiosis. Whymper hears nothing, and a grocer's van collects the eggs every week.",
    "Snowball is rumoured to be hiding at Foxwood or Pinchfield, and his hiding place seems to move with Napoleon's plans to sell a pile of timber: whenever Napoleon leans towards Frederick, Snowball is at Foxwood; whenever he leans towards Pilkington, at Pinchfield. In early spring the animals learn that Snowball is “secretly frequenting the farm by night”, and he is blamed for every broken window and blocked drain, even for a lost key that is later found under a sack of meal. Napoleon tours the farm with his dogs, sniffing out traces of Snowball almost everywhere, and the dogs growl at the very name. To the frightened animals Snowball becomes “some kind of invisible influence”.",
    "That evening Squealer brings worse news. Snowball has sold himself to Frederick, who is planning to attack, and documents Snowball left behind, Squealer claims, prove that he was Jones's agent from the very start. The animals are stupefied. Boxer objects that he saw Snowball fight bravely at the Battle of the Cowshed, wounded and decorated. Squealer answers that it was all part of the plot, that Snowball fled at the critical moment, and that Napoleon saved the day by crying “Death to Humanity!” and biting Jones's leg. As he describes it, “it seemed to the animals that they did remember it.” Boxer still doubts, until Squealer says that Napoleon has stated it categorically. “If Comrade Napoleon says it, it must be right,” says Boxer, and Squealer gives him “a very ugly look” and warns that Snowball's secret agents are hiding among them.",
    "Four days later Napoleon calls the animals into the yard, wearing two medals he has recently awarded himself, Animal Hero, First Class and Animal Hero, Second Class. At his “high-pitched whimper” the dogs drag four pigs to his feet by their ears. Three dogs then attack Boxer, who pins one to the ground and looks to Napoleon, who orders him to let it go. The four pigs, the same four who protested in Chapter 5 when Napoleon abolished the Sunday Meetings, confess to working with Snowball, helping to destroy the windmill and plotting to hand the farm to Frederick, and “the dogs promptly tore their throats out”. Napoleon demands more confessions. The three hens who led the egg revolt say that Snowball urged them on in a dream, and they too are slaughtered. A goose confesses to hiding six ears of corn, one sheep to urinating in the drinking pool and two more to killing an old ram, and “They were all slain on the spot.” The confessions go on until there is a pile of corpses before Napoleon's feet and the air is heavy with “the smell of blood”.",
    "The surviving animals, apart from the pigs and dogs, creep away to the knoll by the half-built windmill; the only one missing is the cat, who vanished just before the assembly. Boxer decides the fault must be theirs and goes to haul stone, resolving to get up “a full hour earlier” from now on. Clover looks down at the farm in the spring evening light and weeps. She had imagined a society of animals “set free from hunger and the whip”, with “the strong protecting the weak”, and instead “no one dared speak his mind”. She will stay loyal, but she cannot find words for what she feels, so she begins to sing Beasts of England, and the others join in “slowly and mournfully”. Squealer arrives with two dogs to announce that, by a special decree of Napoleon, the song is abolished. When Muriel asks why, he answers that “the Rebellion is now completed”, so the song has no purpose. The sheep's bleating ends any protest, and the song Minimus has written to replace it, sung every Sunday, never seems to the animals as good as the old one.",
  ],
  keyEvents: [
    'Napoleon hides the famine from Mr Whymper with store-shed bins filled with sand and topped with grain, so the human world hears that there is no food shortage on Animal Farm.',
    'Ordered to give up their eggs for sale, the hens stage the first revolt since Jones was expelled; Napoleon stops their food, nine hens die, and their deaths are officially put down to disease.',
    "Snowball becomes the hidden cause of every mishap, and Napoleon's sniffing tour of the farm turns rumour into official fact.",
    "Squealer rewrites the Battle of the Cowshed, making Snowball Jones's agent and Napoleon the hero, and Boxer's doubts give way the moment he is told that Napoleon has said so.",
    "At a public assembly the dogs seize four pigs and attack Boxer, who pins one dog down but releases it on Napoleon's order.",
    'Animals confess to crimes, most of them linked to Snowball, and are killed on the spot: the narrator notes that until that day no animal had killed another since Jones left the farm.',
    "On the knoll Clover grieves for what they had hoped for on the night of Old Major's speech but resolves to stay loyal, and the animals sing Beasts of England slowly and mournfully.",
    'Squealer announces that Beasts of England is abolished because the Rebellion is complete, and a song by Minimus addressed to the farm replaces it.',
  ],
  closeReading: [
    {
      quote: 'filled nearly to the brim with sand',
      technique: 'Symbolism: a false front',
      analysis:
        "“Nearly to the brim” is the language of plenty, and Orwell attaches it to sand: the bins look full and hold almost nothing to eat. They can be read as a picture of the whole regime, a thin layer of grain on top and sand underneath. Napoleon's answer to famine is not to feed the animals but to control what an outsider sees, so the lie is aimed at Whymper and, through him, the human world. The selected animals told to mention rising rations show hungry subjects enlisted to act out plenty.",
    },
    {
      quote: 'it was given out that they had died of coccidiosis',
      technique: 'Agentless passive and clinical jargon as a cover story',
      analysis:
        "The passive “it was given out” names no speaker, so the lie seems to come from nowhere and from everyone. Coccidiosis is a real parasitic disease of the gut that can kill young animals, and its clinical sound turns a punishment into a misfortune. The reader has just been told that Napoleon stopped the hens' food and that nine died while it was stopped; the official record says illness. This is the chapter's pattern in miniature: an act of power, then an explanation that removes the person who did it.",
    },
    {
      quote: 'Curiously enough, they went on believing this even after the mislaid key was found',
      technique: 'Ironic narrative comment (understatement)',
      analysis:
        "The narrator's mild “Curiously enough” pretends to be only a little surprised at something that should alarm the reader: a belief has survived the evidence that disproves it. Once Snowball is the explanation for everything, facts can no longer touch him. Orwell sets this comic detail beside others, such as the cows claiming Snowball milks them in their sleep, so that the scapegoating looks absurd. A few pages later the same absurdity turns deadly, when animals confess to Snowball's crimes and are killed.",
    },
    {
      quote: 'in his own writing, if you were able to read it',
      technique: 'Conditional clause and an appeal to evidence that cannot be checked',
      analysis:
        'Squealer claims that proof exists and, in the same breath, tells the animals they could not check it. The conditional clause turns their illiteracy into a reason to trust him, so ignorance itself becomes evidence. The secret documents are never produced. Boxer, the animal Squealer is answering, never got beyond the letter D in the reading lessons of Chapter 3, and Orwell shows the cost here: whoever controls reading and writing controls the past, and the animals are defenceless against a rewritten history.',
    },
    {
      quote: 'Boxer looked at Napoleon to know whether he should crush the dog to death',
      technique: 'Symbolic gesture and dramatic irony',
      analysis:
        "For one moment the balance of power is visible: the strongest animal on the farm has one of Napoleon's enforcers pinned under his hoof. Instead of using his strength, Boxer looks to Napoleon for permission, and lets the dog go when told. The reader sees what Boxer does not: at this moment he could resist, and his obedience is a choice. The narrator's note that Napoleon “appeared to change countenance” hints that the leader, briefly, is afraid, which makes Boxer's deference all the more costly.",
    },
    {
      quote: 'the dogs promptly tore their throats out',
      technique: 'Understatement: flat syntax and a brisk adverb',
      analysis:
        "The first of the killings is told in seven plain words, set between a short clause about the finished confession and Napoleon's demand for more, as if it were the next item of business. The adverb “promptly” suggests efficiency, even routine: execution follows confession automatically. Orwell's calm fable voice refuses to dramatise, and the effect is colder than any description of pain would be. The reader, not the narrator, has to supply the horror.",
    },
    {
      quote: 'Such were her thoughts, though she lacked the words to express them.',
      technique: 'Free indirect discourse, then narratorial intrusion',
      analysis:
        "For a long paragraph the narrator voices Clover's thoughts: the society she had hoped for, with “the strong protecting the weak”. This sentence then steps back to remind us that she could never have said any of it aloud, so the words we have just read were the narrator's, not hers. The irony is painful, because the clearest judgement on the regime comes from an animal who cannot deliver it. Her silence is also the regime's success: a judgement that cannot be put into words cannot be shared or organised.",
    },
    {
      quote: 'The execution of the traitors this afternoon was the final act.',
      technique: 'Loaded diction and a double meaning',
      analysis:
        'The word “traitors” settles a verdict that no trial ever tested, and “execution” makes the killings sound like a lawful sentence. “Final act” means the last deed of the Rebellion, but it can also be heard as the last act of a play, and then it says more than Squealer intends: the confessions were staged in front of an audience. By declaring that “the Rebellion is now completed”, he makes hope itself unnecessary, because a song about a better future has no purpose once that future has officially arrived.',
    },
  ],
  characters: [
    {
      name: 'Napoleon',
      development:
        "Napoleon now rules from a distance. He lives in the farmhouse behind a guard of dogs, appears only with an escort, and speaks through Squealer. He deals with famine by deceiving the outside world, breaks the hens in five days, and stages the confessions himself, demanding in a terrible voice whether anyone else has anything to confess. His self-awarded medals include Animal Hero, Second Class, which in Chapter 4 was given only to a dead sheep: he is now writing his own history as well as the farm's.",
    },
    {
      name: 'Squealer',
      development:
        "Squealer's speech comes four days before the killings and prepares the ground for them. He rewrites the Battle of the Cowshed so that Snowball fled and Napoleon fought, and cites documents the animals cannot read. When Boxer resists, he stops arguing and invokes Napoleon's authority, then casts Boxer “a very ugly look”. After the executions he arrives with two dogs to abolish Beasts of England, presenting a loss as an achievement. Persuasion and force now travel together.",
    },
    {
      name: 'Snowball',
      development:
        "Snowball never appears, yet he is in every scene. His supposed hiding place moves with Napoleon's timber dealings, he is blamed for broken windows, lost keys and troublesome rats, and by the evening he has become Frederick's ally and Jones's agent from the very start. The chapter shows what a scapegoat is for: an absent enemy cannot answer back, and fear of him can justify anything, including the killing of those accused of helping him.",
    },
    {
      name: 'Boxer',
      development:
        "Boxer is the only animal who questions Squealer aloud, because he remembers what he saw at the Battle of the Cowshed. His doubt ends the moment Napoleon's name is invoked. When the dogs attack him he could kill one, and he waits for Napoleon's word instead. After the executions he decides it “must be due to some fault in ourselves” and resolves to work harder still: his loyalty turns horror into extra labour, which is exactly what the regime needs from him.",
    },
    {
      name: 'Clover',
      development:
        "Clover is the chapter's conscience. Looking down from the knoll, she thinks back to the night of Old Major's speech, when she sheltered the lost ducklings with her foreleg, and she knows that “These scenes of terror and slaughter” were not what they had worked for. Yet she resolves to stay faithful, work hard and accept Napoleon's leadership. Singing Beasts of England is the only expression of her grief she can find, and it is not meant as a protest at all.",
    },
    {
      name: 'The hens',
      development:
        'The hens mount the first revolt since Jones was expelled, led by three young Black Minorca pullets. Their only weapon, smashing their own eggs from the rafters, shows how little power the powerless have: they can only destroy what is theirs. Nine die while their food is stopped and are said to have died of disease. The three ringleaders later confess that Snowball appeared to them in a dream and urged them to disobey, and are killed.',
    },
    {
      name: 'The dogs',
      development:
        "The dogs are now Napoleon's permanent guard, and their growl at Snowball's name shows fear being trained into the farm. Once they have tasted blood they seem, for a few moments, to go mad, and three of them turn on Boxer. The text never says whether that attack was ordered. They tear out the four pigs' throats; the later killings are told in the passive, “slaughtered” and “slain”, with no killer named, though Clover remembers comrades “torn to pieces”.",
    },
    {
      name: 'The four pigs and the other confessors',
      development:
        'The four pigs who protested when the Sunday Meetings were abolished in Chapter 5 are the first to die, so dissent is punished long after it was voiced. The other confessions are pitiful: a goose who ate six ears of corn, a sheep who urinated in the drinking pool. Orwell never explains why any of them confess, and that silence is part of the horror.',
    },
    {
      name: 'Mr Whymper',
      development:
        'The solicitor who links the farm to the human world is fooled by the sand in the bins, so he tells the outside world there is no food shortage, and later he hears nothing of the hens. Through him Orwell shows how easily an outside observer can be managed, which can be read alongside what Orwell said about Western observers of the Soviet Union (see Context).',
    },
    {
      name: 'Muriel',
      development:
        "The goat asks the chapter's last question, “Why?”, when Beasts of England is abolished. Squealer answers it, the sheep's bleating ends the discussion, and no one asks another.",
    },
    {
      name: 'Minimus',
      development:
        'The poet pig writes the replacement song, whose old-fashioned line “Never through me shalt thou come to harm” offers loyalty to the farm rather than hope for the future. The narrator notes that neither its words nor its tune ever seem to the animals as good as the old song. In Chapter 8 he writes a poem in praise of Napoleon himself.',
    },
    {
      name: 'The sheep',
      development:
        "The sheep serve the regime twice: first as most of the animals told to mention rising rations in Whymper's hearing, then with their usual bleating of “Four legs good, two legs bad”, which ends any protest about the song, as it drowned out debate in Chapter 5. They have become the regime's noise, and yet three sheep are among the animals killed.",
    },
  ],
  themes: [
    {
      theme: 'Power and Corruption',
      development:
        "Chapter 7 shows power becoming terror. Napoleon no longer needs to win an argument, only to be feared, and his retreat behind the dogs and his self-awarded medals show power moving away from the animals it rules. The executions break the Sixth Commandment, that no animal shall kill another, and Chapter 8 will quietly amend it. The pile of corpses before Napoleon's feet is the chapter's image of where unchecked power leads.",
    },
    {
      theme: 'Language and Propaganda',
      development:
        "Propaganda works in two directions here. Outwards, the sand-filled bins and the story of coccidiosis manage what humans hear. Inwards, Snowball is made responsible for everything, and Squealer's vivid retelling of the Battle of the Cowshed replaces the animals' own memory: “it seemed to the animals that they did remember it.” Even the loss of Beasts of England is announced as an achievement, because the Rebellion is declared complete.",
    },
    {
      theme: 'Revolution and Betrayal',
      development:
        "Clover's thoughts measure the revolution against its promise. Her hope, born on the night of Major's speech, of animals set free from hunger and the whip has become a farm where no one dares speak and comrades are torn to pieces. The song that launched the Rebellion is banned, and Squealer's claim that the Rebellion is over is true in a way he does not mean: its ideals have been abandoned.",
    },
    {
      theme: 'Loyalty and Betrayal',
      development:
        'The regime accuses animals of betrayal while betraying them. Boxer transfers his loyalty from the truth he saw to the leader who contradicts it, and Clover, with no thought of rebellion, resolves to stay faithful to Napoleon even as she weeps for what has been lost. Orwell shows that the loyalty of good animals is what allows a bad regime to survive.',
    },
    {
      theme: 'Education and Ignorance',
      development:
        "Squealer's documents are proof only because the animals cannot read them, and the animals' memories are no match for a confident version of the past. Clover has the clearest moral sense on the farm, but she lacks the words to express it, so her understanding stays private. Ignorance is not only a weakness here; it is something the regime depends on.",
    },
  ],
  context: [
    {
      heading: 'The Great Purge and the Moscow trials',
      body: "The confessions and executions are usually read as Stalin's Great Purge of 1936 to 1938. In three public trials in Moscow, in August 1936, January 1937 and March 1938, leading figures from the revolution, among them Zinoviev, Kamenev and Bukharin, were made to confess to plotting with the exiled Trotsky and, by the last trial, with agents of Germany and Japan. The confessions were extracted by beatings, torture and threats to prisoners' families, and most of the leading defendants were shot. Official figures record 681,692 executions in 1937 and 1938 alone, and for the first time members of the ruling party were among the victims on a massive scale, which the four pigs, early critics of Napoleon, can be read as reflecting. Trotsky, like Snowball, was condemned in his absence, and historians have found no evidence for the charge against him.",
    },
    {
      heading: 'The hens, the famine and the hidden hunger',
      body: "From 1929 the Soviet peasants were forced into collective farms. Many resisted by slaughtering their animals rather than hand them over, and in 1932 and 1933 famine killed millions; in Ukraine it is called the Holodomor, and recent scholarship estimates between 3.5 and 5 million deaths there. Food exports continued during the famine, and the government denied that it existed. The former French prime minister Édouard Herriot, shown a carefully staged Ukraine in 1933, came home insisting there was no famine. The hens, who destroy their own eggs rather than give them up and are then starved into surrender so that the eggs can be sold, are often read as the peasants who resisted collectivisation and as the famine's victims. Whymper and the sand-filled bins can be read as the deceived visitors.",
    },
    {
      heading: 'Beasts of England and the Internationale',
      body: "Beasts of England is usually read as the Internationale, the revolutionary song that served as the Soviet Union's anthem. When the Communist International was dissolved in 1943, to protect the Soviet Union's wartime alliance with the other Allies, a new anthem was needed. The State Anthem of the Soviet Union was first published on 7 November 1943, first broadcast at midnight on 1 January 1944 and officially adopted on 15 March 1944, and its original words praised Stalin by name. Orwell wrote Animal Farm between November 1943 and February 1944, so the real song was being replaced while he wrote. The text never names the Internationale, so the parallel is a reading, but Minimus's song, loyal to the state rather than hopeful, fits that change.",
    },
    {
      heading: 'What Orwell said: Spain, the trials and the cart-horse',
      body: "In a preface for a Ukrainian translation in 1947, which survives only as a translation back into English from the Ukrainian, Orwell explained where the book came from. In Spain he had fought with the POUM militia, and when the Communists began hunting its members down in the middle of 1937, friends of his were shot, imprisoned or simply disappeared, accused of conspiring with the Fascists, and as far as Spain was concerned he had every reason to believe the accusations false. He saw those man-hunts as a supplement to the purges in the USSR, and was struck, back in England, by how many sensible, well-informed people believed the fantastic accounts of conspiracy and sabotage that the press reported from the Moscow trials; the Whymper episode can be read as that lesson in miniature. He also described watching a small boy whip a huge cart-horse and thinking that if such animals became aware of their strength, people would have no power over them, a thought that can be read in Boxer with the dog under his hoof. And he stressed that the book's episodes, though taken from the history of the Russian Revolution, are treated schematically, with their order changed. Read allegorically, this chapter is a clear case: a famine, a purge and a new anthem years apart are compressed into a single winter and spring.",
    },
  ],
  structure:
    "Chapter 7 is the novella's turning point into terror: after it the farm is ruled openly by fear, and the last three chapters show the cost. It is built as a steady escalation, from hunger, to a lie told to outsiders, to a revolt crushed by starvation, to a rumour made official, to history rewritten, to public killing, and each stage ends with the regime's version replacing the truth. Then the scene moves from the crowded yard to the survivors huddled silently on the knoll, and narrows from action to Clover's thoughts. The ending answers Chapter 1, in which the whole farm sang Beasts of England “five times in succession”; here it is sung three times, “slowly and mournfully”, and then banned. Chapter 8 opens a few days later, once the terror has died down.",
  vocabulary: [
    {
      term: 'Clamps',
      meaning:
        'Heaps of root vegetables stored outdoors under a covering of straw, earth or both. The potatoes are “frosted in the clamps” because they were not covered thickly enough.',
    },
    {
      term: 'Mangels',
      meaning:
        'Mangel-wurzels, large beets grown as fodder for livestock. Living on nothing but chaff (grain husks) and mangels shows how close the animals are to starving.',
    },
    {
      term: 'Pretext',
      meaning:
        'A false reason given to hide the real one. Whymper is led through the store-shed “on some suitable pretext” so that he will see the bins.',
    },
    {
      term: 'Pullets',
      meaning:
        "Young hens, usually less than a year old. Three young Black Minorca pullets, a Spanish breed, lead the hens' revolt.",
    },
    {
      term: 'Capitulated',
      meaning:
        'Surrendered or gave in. After five days without food the hens capitulate and go back to their nesting boxes.',
    },
    {
      term: 'Coccidiosis',
      meaning:
        'A parasitic disease of the gut in animals, most dangerous to the young. It is the official cause of death given for the nine hens who were in fact starved.',
    },
    {
      term: 'Stupefied',
      meaning:
        "So shocked as to be unable to think clearly. It describes the animals when Squealer says that Snowball was Jones's agent from the start.",
    },
    {
      term: 'Categorically',
      meaning:
        "Absolutely, with no exception and no room for doubt. Squealer repeats the word to Boxer so that Napoleon's statement cannot be questioned.",
    },
    {
      term: 'Countenance',
      meaning:
        'A face or its expression. The four pigs have guilt “written on every line of their countenances”, and Napoleon “appeared to change countenance” when Boxer pins the dog.',
    },
    {
      term: 'Retribution',
      meaning:
        'Severe punishment for a wrong. The animals cannot tell which is more shocking, the supposed treachery or the cruel retribution they have just watched.',
    },
    {
      term: 'Knoll',
      meaning:
        'A small, rounded hill. The animals gather on the knoll where the half-finished windmill stands, and from it Clover looks down over the whole farm.',
    },
    {
      term: 'Decree',
      meaning:
        'An official order with the force of law. Beasts of England is abolished by a special decree of Comrade Napoleon, not by any vote or discussion.',
    },
  ],
  examQuestion: {
    question:
      'Starting with Chapter 7, explore how Orwell presents fear as a way of controlling the animals in Animal Farm. Write about how Orwell presents fear in Chapter 7 and how he presents it in the novella as a whole.',
    guidance: [
      "Open with a clear argument: by Chapter 7 fear has replaced persuasion as Napoleon's main tool, and it works best when the animals no longer need to be threatened because they police themselves.",
      'Start in the chapter with the hens. “Napoleon acted swiftly and ruthlessly”: analyse how stopping their rations and threatening death to anyone who feeds them makes even a grain of kindness a capital crime, with the dogs to see that the order is kept.',
      "Show how fear is manufactured before it is used: Snowball as “some kind of invisible influence”, the dogs growling at his name, and Squealer's warning that secret agents are among them.",
      'Analyse the executions and their narration: the flat understatement of “the dogs promptly tore their throats out”, the pile of corpses, and the aftermath in which “no one dared speak his mind”.',
      "Reach back: the dogs taken as puppies in Chapter 3 and unleashed on Snowball in Chapter 5, and Squealer's repeated warnings that Jones might come back, which make fear the price of every question.",
      'Reach forward: the Sixth Commandment altered in Chapter 8, Boxer taken away in Chapter 9, and Napoleon walking on two legs with a whip in Chapter 10, when terror of the dogs and long habit keep the animals silent until the chance to protest has passed.',
      "Conclude with purpose and context: the executions are usually read as Stalin's purges, and Orwell wanted to expose the Soviet myth; his point is that terror succeeds when good animals like Boxer and Clover choose loyalty over what they know.",
    ],
    tips: [
      'Quote briefly and exactly. Two to six words from the chapter, analysed closely, earn more than a long quotation copied out.',
      "Treat the history as a reading. Saying the executions are usually read as Stalin's Great Purge is more accurate than saying the four pigs are Zinoviev and Kamenev.",
      "Write about Orwell's choices, not only the animals' behaviour: the calm narrator, the ironic asides and the placing of Clover's grief straight after the killings are all deliberate.",
      'Pair fear with propaganda. In this chapter the dogs and Squealer work together, and the strongest answers show how each makes the other work.',
    ],
  },
  quiz: [
    {
      question: 'What does Napoleon do so that Mr Whymper will report there is no food shortage?',
      options: [
        'He invites Whymper to a feast in the farmhouse',
        'He has the nearly empty store-shed bins filled with sand and topped with grain',
        'He buys extra grain from Mr Pilkington',
        'He keeps Whymper away from the farm all winter',
      ],
      answer: 1,
      explanation:
        'Whymper is led past the bins on a pretext and is deceived. Selected sheep also remark in his hearing that rations have been increased.',
    },
    {
      question: 'Why do the hens rebel?',
      options: [
        'They are ordered to give up their eggs so that they can be sold',
        'Their rations are given to the dogs',
        'They are moved out of the henhouses',
        'They are forbidden to sing Beasts of England',
      ],
      answer: 0,
      explanation:
        'Napoleon has agreed, through Whymper, to sell four hundred eggs a week to pay for grain. The hens protest that taking the eggs now is murder.',
    },
    {
      question: 'What cause of death is announced for the nine hens?',
      options: ['Starvation', 'An attack by the dogs', 'The bitter cold', 'Coccidiosis, a disease'],
      answer: 3,
      explanation:
        'They starved after Napoleon stopped their rations, but it was given out that they had died of coccidiosis, a disease. The lie hides who was responsible.',
    },
    {
      question:
        'Where is Snowball said to be hiding whenever Napoleon seems about to agree a deal with Frederick?',
      options: ['At Pinchfield', 'In Willingdon', 'At Foxwood', 'In the quarry'],
      answer: 2,
      explanation:
        "He is placed at Foxwood, Pilkington's farm, and at Pinchfield, Frederick's, when Napoleon leans towards Pilkington. Snowball is always with whichever neighbour Napoleon is not dealing with.",
    },
    {
      question:
        "How does Boxer first respond when Squealer says Snowball was Jones's agent from the start?",
      options: [
        'He says he saw Snowball fight bravely at the Battle of the Cowshed',
        'He agrees at once',
        'He asks Benjamin to read him the documents',
        'He walks off to work in the quarry',
      ],
      answer: 0,
      explanation:
        "Boxer remembers Snowball's courage and his wound. He gives way only when Squealer says Napoleon has stated the charge categorically.",
    },
    {
      question: 'What happens when three dogs attack Boxer at the assembly?',
      options: [
        'He runs from the yard',
        'Clover drives them off',
        'He pins one to the ground and lets it go when Napoleon orders him to',
        'Napoleon calls them back before they reach him',
      ],
      answer: 2,
      explanation:
        'Boxer catches a dog in mid-air and pins it down, then looks to Napoleon to know whether to kill it. Napoleon sharply orders him to let it go.',
    },
    {
      question: 'Which animal is missing from the group on the knoll after the executions?',
      options: ['Benjamin', 'The cat', 'Muriel', 'The sheep'],
      answer: 1,
      explanation:
        'The cat had disappeared just before Napoleon ordered the animals to assemble, and so escaped the whole scene.',
    },
    {
      question: 'Why does Squealer say Beasts of England is no longer needed?',
      options: [
        'Snowball wrote it',
        'It is too hard for the sheep to learn',
        'The humans have learned the tune',
        'The Rebellion is completed, so a song longing for a better society has no purpose',
      ],
      answer: 3,
      explanation:
        'Squealer claims the better society has now been established, so the song has no purpose. Old Major, not Snowball, taught it in Chapter 1.',
    },
  ],
  sources: [
    {
      label:
        'The held edition, src/data/full-texts/animal-farm.ts (Project Gutenberg Australia, eBook 0100011h): Chapter VII for every quotation and event, Chapters I, III, IV, V and VIII for the cross-references (the singing in Chapter 1, the reading lessons in Chapter 3, the planned retreat and the medals in Chapter 4, the four protesting pigs in Chapter 5, Minimus and the altered Commandment in Chapter 8)',
      url: 'https://gutenberg.net.au/ebooks01/0100011h.html',
    },
    {
      label:
        'Orwell, preface to the Ukrainian edition (March 1947), at the Orwell Foundation: the POUM, the man-hunts of mid-1937 and the accusation of conspiring with the Fascists, which as far as Spain was concerned he believed false, the man-hunts as a supplement to the purges, well-informed observers believing what the press reported from the Moscow trials, the boy and the cart-horse, episodes treated schematically with their order changed, the destruction of the Soviet myth; the page notes the English original is lost and the text is a back-translation',
      url: 'https://www.orwellfoundation.com/the-orwell-foundation/orwell/essays-and-other-works/preface-to-the-ukrainian-edition-of-animal-farm/',
    },
    {
      label:
        'Wikipedia, Great Purge: 1936 to 1938; official figure of 681,692 verifiable executions in 1937 and 1938; for the first time, members of the ruling party among the victims on a massive scale; Trotsky tried in absentia, with no evidence found for the charge',
      url: 'https://en.wikipedia.org/wiki/Great_Purge',
    },
    {
      label:
        'Wikipedia, Moscow trials: the trials of August 1936, January 1937 and March 1938; Zinoviev, Kamenev, Bukharin; alleged plotting with Trotsky and, in the Bukharin trial, with German and Japanese agents; confessions after beatings, torture and threats to arrest and execute prisoners’ families; the leading defendants shot',
      url: 'https://en.wikipedia.org/wiki/Moscow_trials',
    },
    {
      label:
        'Wikipedia, Leon Trotsky: expelled from the party in 1927, deported in 1929; sentenced to death in absentia at the first Moscow trial in 1936',
      url: 'https://en.wikipedia.org/wiki/Leon_Trotsky',
    },
    {
      label:
        'Wikipedia, Holodomor: famine of 1932 to 1933; recent scholarship estimating 3.5 to 5 million victims in Ukraine; food exports continued during the famine; Shaw, Herriot and other prominent Westerners hosted at Potemkin villages and afterwards saying they had not seen hunger',
      url: 'https://en.wikipedia.org/wiki/Holodomor',
    },
    {
      label:
        'Wikipedia, Denial of the Holodomor: the Soviet government denied the famine from the start; Édouard Herriot, former French prime minister, visited Ukraine from 26 August to 9 September 1933, was shown a staged version of it and insisted there was no famine',
      url: 'https://en.wikipedia.org/wiki/Denial_of_the_Holodomor',
    },
    {
      label:
        'Wikipedia, Collectivization in the Soviet Union: accelerated collectivisation decided in November 1929; peasants slaughtering their animals in protest rather than hand them to collective farms',
      url: 'https://en.wikipedia.org/wiki/Collectivization_in_the_Soviet_Union',
    },
    {
      label:
        'Wikipedia, State Anthem of the Soviet Union: replaced the Internationale; Comintern dissolved in 1943; first published 7 November 1943, first broadcast 1 January 1944, adopted 15 March 1944; original words named Stalin',
      url: 'https://en.wikipedia.org/wiki/State_Anthem_of_the_Soviet_Union',
    },
    {
      label:
        "Wikipedia, Animal Farm: written November 1943 to February 1944; chapter seven alluding to the purges, confessions and show trials of the late 1930s; the hens read as the Holodomor's victims; Beasts of England and the Internationale",
      url: 'https://en.wikipedia.org/wiki/Animal_Farm',
    },
    {
      label:
        'Wikipedia, Coccidiosis: a parasitic intestinal disease, most dangerous to young animals',
      url: 'https://en.wikipedia.org/wiki/Coccidiosis',
    },
    {
      label: 'Wikipedia, Mangelwurzel: a beet grown as a fodder crop for livestock',
      url: 'https://en.wikipedia.org/wiki/Mangelwurzel',
    },
    {
      label: 'Wikipedia, Minorca chicken: a Spanish breed',
      url: 'https://en.wikipedia.org/wiki/Minorca_chicken',
    },
    {
      label: 'Wiktionary, pullet: a young hen, especially one less than a year old',
      url: 'https://en.wiktionary.org/wiki/pullet',
    },
    {
      label:
        'Wiktionary, clamp: a compact pile of produce such as root vegetables, stored under straw or earth',
      url: 'https://en.wiktionary.org/wiki/clamp',
    },
  ],
}
