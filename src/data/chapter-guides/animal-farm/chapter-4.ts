import type { ChapterGuide } from '@/lib/study-guides/chapter-guide'

/**
 * Animal Farm, Chapter 4: the Battle of the Cowshed.
 *
 * Every quotation was located in the held edition
 * (src/data/full-texts/animal-farm.ts, section-4) and chapter-guides.test.ts
 * checks each one there. Outside facts come only from the sources listed at
 * the foot of the file, fetched on 26 September 2026.
 *
 * Two points of precision, recorded so nobody reintroduces the looser version:
 * - Napoleon is never named in the battle. He is not shown to be absent
 *   either: he may be one of "the rest of the pigs" in the cowshed ambush. The
 *   chapter's silence is the point, because Chapter 7 gives him the victory.
 * - Stalin did take part in the Russian Civil War (Tsaritsyn in 1918; in 1920
 *   the Southwest Front, in the war with Poland), so Napoleon's silence here
 *   reads as satire of how the war was later remembered, not as a record of
 *   Stalin staying away.
 *
 * Corrected on review, 26 September 2026, so the looser versions stay out:
 * - The first close reading was labelled foreshadowing, but its own analysis
 *   says the prophesied doom never comes; it is irony, not foreshadowing.
 * - The Caesar reading said force "decides a vote" in Chapter 5. It does not:
 *   the dogs chase Snowball out before the windmill vote is taken.
 * - Benjamin never volunteers for EXTRA work (Chapter 3), not for anything;
 *   the humans only pretend to laugh; the news reaches half the county; and in
 *   Chapter 10 Pilkington sits at the pigs' table rather than dines. */
export const chapter: ChapterGuide = {
  slug: 'animal-farm',
  chapter: 4,
  part: 'Chapter 4',
  title: 'The Battle of the Cowshed',
  atAGlance:
    "News of the Rebellion spreads across half the county, the neighbouring farmers answer it with lies, and in October Mr Jones and his men try to retake the farm. Snowball's plan wins the Battle of the Cowshed, and he and Boxer are decorated as heroes. The chapter matters because Snowball's courage here is later denied, detail by detail, so it is the record the reader can hold against Squealer's rewriting of the past.",

  summary: [
    'By late summer the story of the Rebellion has travelled across half the county. Snowball and Napoleon send out flights of pigeons every day to tell animals on other farms what happened and to teach them the tune of Beasts of England. Mr Jones, meanwhile, sits in the taproom of the Red Lion at Willingdon, complaining to anyone who will listen. The other farmers sympathise in principle but at first give him little help, because each is quietly wondering how to profit from his bad luck. Luckily for the animals, the two farms next door belong to men who cannot stand each other: Mr Pilkington of Foxwood, an easy-going gentleman farmer with a large, neglected farm, and Mr Frederick of Pinchfield, a tough, shrewd man with a smaller, better-kept one who is always in lawsuits.',
    'Both men are frightened that their own animals will learn about the Rebellion, so they fight it with words. At first they pretend to laugh at the idea and say it will be over in a fortnight. They refuse to call the place Animal Farm and put it about that the animals there are always fighting and starving to death. When the animals obviously do not starve, the stories grow darker, with tales of cannibalism and torture with red-hot horseshoes. The stories are never fully believed. Instead, “a wave of rebelliousness ran through the countryside”: bulls turn savage, cows kick over the pail, and hunting horses throw their riders. Beasts of England is heard everywhere, and although any animal caught singing it is flogged, the humans secretly tremble when they hear it.',
    "Early in October, when the corn has been cut, the pigeons bring urgent news. Jones and all his men, with half a dozen others from Foxwood and Pinchfield, are coming up the cart-track, carrying sticks, with Jones marching ahead holding a gun. The attack has long been expected. Snowball, who has studied an old book about Julius Caesar's campaigns, is in charge, and within a couple of minutes every animal is at its post.",
    "Snowball's plan unfolds in stages. First the thirty-five pigeons drop their droppings on the men from the air while the geese rush out from behind the hedge to peck at their legs. Then Snowball leads Muriel, Benjamin and the sheep in a second attack, butting and prodding from every side. When the men's sticks and boots prove too strong, a squeal from Snowball sends the animals fleeing into the yard, and the men charge after them in triumph. It is a trap. The three horses, the three cows and the rest of the pigs burst out of the cowshed behind them. Snowball runs straight at Jones, who fires: the shot tears along Snowball's back and kills a sheep, but Snowball knocks Jones into a pile of dung and the gun flies from his hands. Boxer, rearing up and striking with his iron-shod hoofs, fells a stable-lad from Foxwood. The men panic, every animal takes revenge in its own way, even the cat, and within five minutes the humans are fleeing down the road with the geese hissing after them.",
    'In the yard, Boxer paws at the stable-lad, who lies still in the mud. Believing he has killed the boy, Boxer is full of sorrow and fears no one will believe it was an accident. Snowball, still bleeding, tells him there is no room for sentiment in war, but Boxer repeats that he has no wish to take any life. Then someone notices that Mollie is missing. She is found hiding in her stall, her head buried in the hay, having fled when the gun went off. By the time the animals return from searching, the stable-lad, who was only stunned, has come round and escaped.',
    "The animals celebrate at once. The flag is raised, Beasts of England is sung, and the dead sheep is given a funeral, with a hawthorn bush planted on her grave and a speech from Snowball urging every animal to be ready to die for the farm. They create a military decoration, “Animal Hero, First Class”, and give it to Snowball and Boxer; the dead sheep receives “Animal Hero, Second Class” after her death. The fight is named the Battle of the Cowshed, after the site of the ambush, and Jones's gun is set up at the foot of the flagstaff, to be fired twice a year: on 12 October, the anniversary of the battle, and on Midsummer Day, the anniversary of the Rebellion.",
  ],

  keyEvents: [
    'The pigeons carry the story of the Rebellion and Beasts of England to other farms, and a wave of rebelliousness spreads through the countryside.',
    'Mr Pilkington and Mr Frederick, who dislike each other intensely, spread lies about Animal Farm, from mass starvation to cannibalism, but the stories are never fully believed.',
    'Early in October Jones and his men, with half a dozen others from Foxwood and Pinchfield, march on the farm to retake it, Jones carrying a gun.',
    "Snowball's planned retreat draws the men into the yard, where the ambush from the cowshed cuts them off; wounded by Jones's shot, Snowball still charges and floors him.",
    'Boxer strikes down a stable-lad from Foxwood and grieves, thinking he has killed him; Snowball answers that war is war.',
    'The men flee within five minutes. One sheep is dead, Mollie is found hiding in her stall, and the stable-lad, only stunned, escapes.',
    'Snowball and Boxer receive “Animal Hero, First Class”, the dead sheep is honoured after her death, and the battle is given its name.',
    "Jones's gun is mounted at the foot of the flagstaff, to be fired on the anniversaries of the battle and of the Rebellion.",
  ],

  closeReading: [
    {
      quote: 'hearing in it a prophecy of their future doom',
      technique: 'Portentous language and irony',
      analysis:
        'The words prophecy and doom are solemn, almost religious, and the humans “secretly trembled”, so the song sounds like a sentence passed on their power. For a while it seems to come true, since Jones is beaten off within the chapter. A reader who knows the whole novella sees the larger irony: no lasting doom arrives for the humans. By Chapter 7 Napoleon has abolished the song, and by Chapter 10 pigs and farmers share a table. The line can be read as a warning that a revolution is more likely to be betrayed from within than defeated from outside.',
    },
    {
      quote: 'This was what came of rebelling against the laws of Nature',
      technique: 'Appeal to nature, in reported speech',
      analysis:
        "The farmers defend their rule by calling it natural, so that rebellion looks like a crime against the order of the world rather than against them. The capital N makes Nature sound like a lawgiver. Because the narrator reports the claim from a distance, with the tag that Frederick and Pilkington said it, the reader hears how hollow it is. It is human propaganda working as Squealer's will: a moral drawn from frightening stories that need no evidence, placed straight after a list of lies.",
    },
    {
      quote: "Snowball, who had studied an old book of Julius Caesar's campaigns",
      technique: 'Allusion',
      analysis:
        "Snowball's victory comes from reading. The battle unfolds like a lesson from his book, in the language of a military report: a first attack, a “second line of attack”, a pretended retreat, an ambush and a charge. The allusion can also be read as a warning. Julius Caesar was a Roman general who became dictator of the Roman Republic and helped bring about its collapse. Read this way, it links military glory with seizing power, a danger the farm meets in the very next chapter, though from Napoleon rather than Snowball, when dogs chase Snowball out before the windmill vote can be taken.",
    },
    {
      quote: "The pellets scored bloody streaks along Snowball's back",
      technique: 'Concrete visual imagery',
      analysis:
        "The verb scored makes the wounds sharp and visible, lines cut into the body that anyone could see. The detail is stated plainly, and it will become evidence. In Chapter 7 Squealer claims Jones's shot only grazed Snowball, and in Chapter 9 the wounds are said to have been made by Napoleon's teeth. The reader, who saw the wound as it happened, can test each later version against this sentence. The animals have only their memories to go on, and they are talked out of them.",
    },
    {
      quote: 'No sentimentality, comrade! ... War is war. The only good human being is a dead one.',
      technique: 'Tautology and a ruthless maxim',
      analysis:
        "Still bleeding, Snowball answers Boxer's grief with slogans. “War is war” is a tautology: it explains nothing and simply closes the argument. The maxim that follows turns Old Major's teaching that all men are enemies into permission to kill. Orwell will not let the reader treat the hero of the battle as simply good. Snowball's hardness can be read as a small version of the ruthlessness that later rules the farm, and the chapter sets it directly against Boxer's tears.",
    },
    {
      quote: 'I have no wish to take life, not even human life',
      technique: 'Repetition and an intensifying afterthought',
      analysis:
        "Boxer “repeated” his point, so he will not let Snowball's slogan settle the matter, and the word life comes twice in the sentence itself. The afterthought, not even human life, stretches his sympathy to the enemy who has just attacked him, which goes further than Old Major's teaching ever did. The strongest animal on the farm is also the gentlest, and his tears show that he understands what violence costs. Yet the argument is simply dropped when somebody asks after Mollie, and the same horse later accepts whatever Napoleon says.",
    },
    {
      quote: 'they were really some old horse-brasses which had been found in the harness-room',
      technique: 'Parenthetical aside and bathos',
      analysis:
        'The grand title of the new medal is deflated in brackets: it is an old harness ornament. Horse brasses decorated the harness of working horses in England, so the animals honour their heroes with a relic of their own servitude, found in the room the pigs already use as their headquarters. The quiet aside hints that the new order borrows the trappings of the old. It also prepares for later chapters, where Napoleon awards medals to himself and decoration becomes vanity rather than reward.',
    },
    {
      quote:
        'It was decided to set the gun up at the foot of the Flagstaff, like a piece of artillery',
      technique: 'Impersonal passive, simile and symbol',
      analysis:
        "Jones's gun, the old master's weapon, becomes a monument of the new farm. The simile makes the farm sound like a nation with an army, and the impersonal “It was decided” does not say who decided, although after “much discussion” the choice here seems to be shared. Firing the gun on anniversaries turns victory into ritual, and whoever controls the rituals can later control the memory. In Chapter 5 Major's skull is placed beside this gun, and in Chapter 8 it is also fired on Napoleon's birthday.",
    },
  ],

  characters: [
    {
      name: 'Snowball',
      development:
        "This is Snowball at his best. Having studied a book of Caesar's campaigns, he commands the defence, leads the second attack himself and charges straight at Jones's gun. Wounded, he keeps fighting, and he is decorated alongside Boxer. The chapter also shows a harder side: he brushes aside Boxer's grief with “No sentimentality, comrade” and at the graveside tells the animals to be ready to die for the farm. Because the reader sees his courage first-hand, the later claims that he was Jones's agent (Chapter 7) and a coward (Chapter 8) can be tested against this chapter.",
    },
    {
      name: 'Napoleon',
      development:
        "Napoleon appears only at the start, sharing with Snowball the work of sending out the pigeons. He is never named in the battle, the aftermath or the awards; at most he is one of “the rest of the pigs” waiting in the cowshed. That silence matters later. In Chapter 7 Squealer tells the animals that Napoleon saved the day by biting Jones's leg with a cry of “Death to Humanity!”, and the animals come to believe they remember it. The reader can search this chapter and find no such moment.",
    },
    {
      name: 'Boxer',
      development:
        "Boxer is the battle's most terrifying fighter, rearing up and striking with iron-shod hoofs, and one blow fells a stable-lad. His reaction reveals him: he tries to turn the boy over, fears nobody will believe it was an accident, and weeps. Both his strength and his conscience are on show, and both will be used by others. In Chapter 7 it is Boxer who remembers this battle truly, defending Snowball's courage and recalling the medal Snowball was given alongside him, until Squealer appeals to Napoleon's authority and Boxer gives way.",
    },
    {
      name: 'Mr Jones',
      development:
        "Jones begins the chapter in the taproom of the Red Lion, pitying himself over the injustice done to him. In the battle he fires the shot that wounds Snowball and kills a sheep, then is hurled into a pile of dung and loses his gun. Orwell makes the old master self-pitying and then ridiculous, so the reader is given no reason to want him back. His lost gun becomes the farm's trophy, so his defeat gives the new order one of its symbols.",
    },
    {
      name: 'Mr Pilkington and Mr Frederick',
      development:
        "Introduced here as the owners of the neighbouring farms: Pilkington of Foxwood, an easy-going gentleman farmer who spends his time fishing or hunting while his land runs down, and Frederick of Pinchfield, tough, shrewd and always in lawsuits. They dislike each other so much that they struggle to agree even to protect their own interests. That rivalry shapes the rest of the novella: Napoleon later plays one against the other over the sale of timber, and in Chapter 10 Pilkington sits at the pigs' table.",
    },
    {
      name: 'Mollie',
      development:
        'Mollie runs as soon as the gun goes off and is found afterwards with her head buried in the hay of her manger. The other animals fear she has been hurt or carried off, which shows their concern for her, but her flight is in character: she values her own comfort above the farm. It prepares for Chapter 5, when she deserts Animal Farm for a human owner who feeds her sugar.',
    },
    {
      name: 'Benjamin',
      development:
        'The cynical donkey, who never volunteers for extra work, fights in the second attack, turning round to lash at the men with his small hoofs. The detail is brief but telling. Whatever doubts he has about the Rebellion, he fights against Jones when it matters, which makes his refusal to speak out in later chapters a choice rather than a sign that he wants the old master back.',
    },
    {
      name: 'The other animals',
      development:
        "This is the novella's clearest picture of the farm united against a common enemy. The pigeons attack from the air, the geese peck at the men's legs, and even the cat, who avoided work in Chapter 3, leaps from a roof onto a cowman's shoulders. One sheep is killed, and the animals give her a funeral, a hawthorn bush on her grave and the first “Animal Hero, Second Class”. For once the equality Old Major preached is real: the humblest creatures fight beside the strongest, and a dead sheep is honoured like a hero.",
    },
  ],

  themes: [
    {
      theme: 'Revolution and Betrayal',
      development:
        "For one afternoon the Rebellion looks like Old Major's vision: every animal, weak or strong, fights for a farm they own together, and the old owner is driven off in humiliation. The betrayal is still to come, but the chapter lays its ground. Both heroes of the battle are later destroyed by the regime, Snowball driven out and blamed for everything, Boxer taken away in a horse slaughterer's van. The victory over the humans ends, in Chapter 10, with pigs and humans at the same table.",
    },
    {
      theme: 'Loyalty and Betrayal',
      development:
        "The battle tests loyalty in action. Boxer, Snowball, Benjamin and even the idle cat fight; Mollie runs. The animals reward loyalty with the first honours on the farm. Later the meaning of loyalty is changed: in Chapter 5 Squealer answers a reminder of Snowball's courage with “Bravery is not enough”, insisting that loyalty and obedience matter more. The brave Snowball of this chapter is then recast as the farm's great traitor.",
    },
    {
      theme: 'Language and Propaganda',
      development:
        "Both sides fight with words before they fight with sticks. The farmers refuse to say Animal Farm and spread tales of starvation and cannibalism, while the pigeons spread the song across the county. After the battle the animals make their own record: a name, medals, a funeral and anniversaries. That record is what the regime has to rewrite. In Chapter 5 Squealer suggests that Snowball's part was “much exaggerated”, in Chapter 7 he turns Snowball into Jones's agent, and in Chapter 8 the animals are told that the medal was only ever a legend.",
    },
    {
      theme: 'Power and Corruption',
      development:
        "The chapter militarises the farm. The animals invent a military decoration, rank their heroes by class, and mount Jones's gun like artillery to be fired on anniversaries. None of this is corrupt yet: the animals decide together and the honours are earned. But the equipment of power now exists, and later Napoleon awards the medals to himself and has the gun fired on his own birthday. Snowball's cold maxim about dead humans shows how quickly killing can be made to sound simple.",
    },
    {
      theme: 'Education and Ignorance',
      development:
        "Knowledge wins the battle. Snowball has read about Caesar's campaigns, and the other animals follow a plan he drew up. It is the clearest case of the pigs' learning serving everyone. But the others' dependence on that learning is also their weakness. In Chapter 7 Squealer claims secret documents prove Snowball's treachery and says he could show them “if you were able to read it”, knowing that they cannot check.",
    },
  ],

  context: [
    {
      heading: 'Revolution spreads, and the old order strikes back',
      body: 'The two halves of the chapter can be read against the years after 1917. First the idea spreads: the Russian Revolution inspired a wave of revolts abroad, among them the German Revolution of 1918 to 1919 and the Hungarian Soviet Republic of 1919, and in March 1919 a congress in Moscow founded the Soviet-led Communist International to work for the overthrow of capitalism worldwide. Then the old order strikes back. The Russian Civil War lasted from 1917 to 1922, and from 1918 Britain, France, the United States, Japan and others sent troops; most Western forces had gone by 1920. Jones returning with men from neighbouring farms is often read as that foreign intervention and the defeat of the White armies.',
    },
    {
      heading: 'Snowball, Trotsky and the Red Army',
      body: "Snowball is usually read as Leon Trotsky, who as People's Commissar for Military and Naval Affairs from March 1918 to January 1925 built the Red Army and led it to victory in the civil war. The farm's first military decoration can be set beside the Soviet state's first, the Order of the Red Banner, created in September 1918 for courage in battle; Trotsky was among those who received it. Under Stalin, Trotsky was written out of official history: a 1918 Pravda article in which Stalin credited Trotsky with directing the practical work of the October uprising was quoted in Stalin's own 1934 book, then cut from Stalin's collected Works in 1949. Read this way, Snowball's wounds and medal are rewritten in the same manner in Chapters 7 to 9.",
    },
    {
      heading: "Stalin's war, and how it was remembered",
      body: "Napoleon's silence in this chapter is Orwell's choice, not a record of Stalin, who did take part in the civil war. Sent to Tsaritsyn in 1918 to obtain grain, Stalin took a hand in the city's defence and was recalled that November for disobeying orders; in 1920 he served on the Southwest Front in the war with Poland. Because he had been there, the defence of Tsaritsyn became one of the most commemorated events of the war in Soviet histories, art and propaganda, and in 1925 the city was renamed Stalingrad. Squealer's claim in Chapter 7 that Napoleon saved the Battle of the Cowshed can be read as a satire of that kind of memory.",
    },
    {
      heading: 'What Orwell said about the book',
      body: "In his 1947 preface to the Ukrainian edition, which survives only in translation, Orwell said the idea came to him on seeing a boy of about ten whipping a large cart-horse along a narrow path whenever it tried to turn. If such animals became aware of their strength, he reflected, humans would have no power over them, and men exploit animals much as the rich exploit the working class. Boxer rearing up in this chapter can be read as that thought made action. Orwell added that the story's episodes come from the history of the Russian Revolution but are handled schematically, with their order changed, so the battle is best read as a pattern, not a timetable.",
    },
  ],

  structure:
    "Chapter 4 can be read as the close of the novella's first movement, the rise of the Rebellion, and as its high point: the farm's one clear victory, won by the animals together. Chapter 5 breaks that unity, and the Battle of the Windmill in Chapter 8 mirrors this battle as a costly, hollow victory. The chapter is built in three parts. First, months pass in summary as rumour and song spread. Then time slows to a moment-by-moment account of a fight lasting five minutes, told in the ordered stages of a military report. Last comes the aftermath, in which the animals turn the battle into history with a funeral, medals, a name and anniversaries. That ending matters most, because this official memory is exactly what later chapters rewrite.",

  vocabulary: [
    {
      term: 'Taproom',
      meaning:
        'The bar of a pub, where drink is served. Jones spends his time in the taproom of the Red Lion at Willingdon, complaining.',
    },
    {
      term: 'Tractable',
      meaning:
        'Easy to control or lead. Bulls that had always been tractable suddenly turn savage as the spirit of rebellion spreads.',
    },
    {
      term: 'Hunters',
      meaning:
        'Horses bred and trained for hunting. Here they refuse the jumps and throw their riders over to the other side.',
    },
    {
      term: 'Irrepressible',
      meaning:
        'Impossible to hold back or silence. Flogging cannot stop Beasts of England, which spreads from birds in the hedges to church bells.',
    },
    {
      term: 'Muted',
      meaning:
        'An old word meaning, of a bird, to let fall its droppings. The pigeons muted upon the men from the air.',
    },
    {
      term: 'Skirmishing manoeuvre',
      meaning:
        'A skirmish is a small, brief fight before or apart from the main battle, and a manoeuvre is a planned military movement. The first attack is meant only to cause a little disorder.',
    },
    {
      term: 'Hobnailed boots',
      meaning:
        "Heavy boots with short, large-headed nails in the soles. Together with the men's sticks, they beat back the second attack.",
    },
    {
      term: 'Ignominious',
      meaning:
        'Shameful and humiliating. The men end up in ignominious retreat, fleeing the way they came with geese pecking at them.',
    },
    {
      term: 'Sentimentality',
      meaning:
        "Too much tender feeling, especially where it is thought out of place. Snowball dismisses Boxer's grief for the stable-lad as sentimentality.",
    },
    {
      term: 'Impromptu',
      meaning:
        'Done on the spot, without planning. The celebration of the victory is held immediately.',
    },
    {
      term: 'Posthumously',
      meaning:
        'After death. The sheep killed in the battle is given “Animal Hero, Second Class” after she has died.',
    },
    {
      term: 'Horse-brasses',
      meaning:
        "Brass ornaments fixed to the harness of working horses. The animals' medals are really old horse-brasses from the harness-room.",
    },
  ],

  examQuestion: {
    question:
      'Starting with the Battle of the Cowshed in Chapter 4, explore how Orwell presents the control of the past in Animal Farm. Write about the chapter and about the novella as a whole.',
    guidance: [
      "Begin with what Chapter 4 actually shows: Snowball in command, wounded by Jones's gun and decorated with Boxer, and Napoleon never named in the fighting. This is the record the rest of your essay measures against.",
      "Show how the animals make an official memory at the end of the chapter: the name of the battle, the medals, the funeral, and anniversaries marked with Jones's gun. Explain that ceremonies decide what a community remembers.",
      "Trace the rewriting step by step: in Chapter 5 Squealer says Snowball's part was “much exaggerated”; in Chapter 7 Snowball becomes Jones's agent and Napoleon the hero; in Chapter 8 the medal is called a legend; in Chapter 9 Snowball is said to have fought openly for Jones.",
      "Analyse the methods: Squealer's rhetorical questions, secret documents the animals cannot read, and appeals to Napoleon's authority, after which Boxer gives way in Chapter 7: “If Comrade Napoleon says it, it must be right.”",
      'Link the rewritten battle to the altered Commandments: the same control of written records lets the pigs change the rules, so memory and law fall together.',
      "Bring in context as a reading, not a fact: Snowball is usually read as Trotsky, whom Stalin's regime wrote out of official history, while Soviet propaganda made much of Stalin's own part in the civil war.",
      "Conclude on Orwell's purpose: people who cannot check their own past can be told anything, which is why the plain record of this chapter matters.",
    ],
    tips: [
      "This is a GCSE-style question, not one taken from an exam board's paper. Check your own board's paper for whether you are given an extract and how long you have.",
      'Embed short quotations in your sentences. A few precise words, such as the pellets that “scored bloody streaks”, do more than a long quotation.',
      "Keep the allegory in its place: say the battle is usually read as the Russian Civil War, then return to what Orwell's words do.",
      'Use the gap between what the reader saw in Chapter 4 and what the animals are told later. That dramatic irony is the heart of a strong answer.',
    ],
  },

  quiz: [
    {
      question: 'Who is in charge of the defence of the farm?',
      options: ['Napoleon', 'Snowball', 'Boxer', 'Squealer'],
      answer: 1,
      explanation:
        'Snowball has prepared for the attack and gives the orders. Napoleon is never named during the battle.',
    },
    {
      question: 'Where had Snowball learned how to fight a battle?',
      options: [
        "From Old Major's speech in the big barn",
        'From scraps of newspaper that Muriel read aloud',
        'From watching the men train on the neighbouring farms',
        "From an old book of Julius Caesar's campaigns found in the farmhouse",
      ],
      answer: 3,
      explanation:
        'He had studied the book, and his plan works in stages like a military campaign: an opening attack, a second line, a pretended retreat, an ambush and a charge.',
    },
    {
      question: 'What is the signal for the animals to pretend to retreat into the yard?',
      options: [
        'A squeal from Snowball',
        "A shot from Jones's gun",
        'A neigh from Boxer',
        'The bleating of the sheep',
      ],
      answer: 0,
      explanation:
        "Snowball's squeal sends the animals running into the yard. The men think they have won and charge after them into the ambush.",
    },
    {
      question: 'Which animal is killed in the battle?',
      options: ['One of the geese', 'Mollie', 'A sheep', 'One of the pigeons'],
      answer: 2,
      explanation:
        'The same shot that wounds Snowball kills a sheep. She is buried with a hawthorn bush on her grave and given “Animal Hero, Second Class” after her death.',
    },
    {
      question: 'What happens to the stable-lad whom Boxer strikes?',
      options: [
        'He dies and is buried in the orchard',
        'He is kept prisoner on the farm',
        "He is carried away by Jones's men",
        'He was only stunned, and he comes round and escapes',
      ],
      answer: 3,
      explanation:
        'Boxer believes he has killed the boy and grieves, but while the animals are searching for Mollie the stable-lad recovers and makes off.',
    },
    {
      question: 'What are the new medals really made from?',
      options: [
        'Coins found in the farmhouse',
        'Old horse-brasses from the harness-room',
        "Pellets from the cartridges of Jones's gun",
        'Tin from the store-shed',
      ],
      answer: 1,
      explanation:
        'The narrator adds, in brackets, that the brass medals were old horse-brasses, the ornaments of working horses: an honour made from a relic of servitude.',
    },
    {
      question: 'Why is the fight named the Battle of the Cowshed?',
      options: [
        'Because the ambush was sprung from the cowshed',
        'Because the cows fought hardest',
        'Because Jones fell there',
        'Because the medals were awarded there',
      ],
      answer: 0,
      explanation:
        'The horses, the cows and the rest of the pigs had been lying in ambush in the cowshed, and burst out behind the men once they were inside the yard.',
    },
    {
      question: "What does Chapter 4 say about Napoleon's part in the battle?",
      options: [
        'He leads the second line of attack',
        "He bites Jones's leg and turns the battle",
        'Nothing: he is never named in the fighting',
        'He guards the farmhouse with his dogs',
      ],
      answer: 2,
      explanation:
        "Napoleon is mentioned only at the start of the chapter. In Chapter 7 Squealer claims Napoleon bit Jones's leg and saved the day, a story this chapter never supports.",
    },
  ],

  sources: [
    {
      label:
        'The held edition: Animal Farm, Project Gutenberg Australia transcription, in src/data/full-texts/animal-farm.ts. Every quotation and event is taken from Chapter IV (section-4), with cross-references checked in Chapters III, V and VII to X.',
      url: 'https://gutenberg.net.au/ebooks01/0100011h.html',
    },
    {
      label:
        "Wikipedia, Russian Civil War: 7 November 1917 to 25 October 1922, full-scale from May to June 1918; Trotsky as People's Commissar for Military and Naval Affairs reorganised the Red Guards into the Red Army",
      url: 'https://en.wikipedia.org/wiki/Russian_Civil_War',
    },
    {
      label:
        'Wikipedia, Allied intervention in the Russian Civil War: from March 1918; the United Kingdom, France, the United States, Japan and others; the Western powers ended their interventions in 1920, Japan in Siberia continued until 1922; aims included helping the White forces',
      url: 'https://en.wikipedia.org/wiki/Allied_intervention_in_the_Russian_Civil_War',
    },
    {
      label:
        'Wikipedia, Revolutions of 1917 to 1923: a revolutionary wave inspired by the Russian Revolution, including the German Revolution (1918 to 1919) and the Hungarian Soviet Republic (1919)',
      url: 'https://en.wikipedia.org/wiki/Revolutions_of_1917%E2%80%931923',
    },
    {
      label:
        'Wikipedia, Communist International: founded at a congress in Moscow, formally established 4 March 1919, for the overthrow of capitalism worldwide',
      url: 'https://en.wikipedia.org/wiki/Communist_International',
    },
    {
      label:
        'Wikipedia, Animal Farm: the Battle of the Cowshed has been said to represent the Allied invasion of Soviet Russia in 1918 and the defeat of the White Russians; Snowball parallels Trotsky',
      url: 'https://en.wikipedia.org/wiki/Animal_Farm',
    },
    {
      label:
        "Wikipedia, Leon Trotsky: People's Commissar for Military and Naval Affairs, 14 March 1918 to 12 January 1925; built the Red Army and led it to victory; written out of official history under Stalin; Stalin's Pravda article of 6 November 1918 crediting Trotsky with the uprising, quoted in The October Revolution (1934) and expunged from Stalin's Works (1949)",
      url: 'https://en.wikipedia.org/wiki/Leon_Trotsky',
    },
    {
      label:
        'Wikipedia, Order of the Red Banner: established 16 September 1918, the first Soviet military decoration, for heroism and courage in battle; Trotsky listed among its recipients',
      url: 'https://en.wikipedia.org/wiki/Order_of_the_Red_Banner',
    },
    {
      label:
        'Wikipedia, Joseph Stalin: sent to Tsaritsyn in May 1918 to take charge of food procurement, took control of regional military operations; moved to the Southwest Front in May 1920, during the Polish-Soviet War',
      url: 'https://en.wikipedia.org/wiki/Joseph_Stalin',
    },
    {
      label:
        'Wikipedia, Battle of Tsaritsyn: Stalin joined the command despite being sent for grain, was recalled in November 1918 for insubordination; the defence became one of the most commemorated events of the Civil War in Soviet historiography, art and propaganda because Stalin took part; the city renamed Stalingrad in 1925',
      url: 'https://en.wikipedia.org/wiki/Battle_of_Tsaritsyn',
    },
    {
      label:
        'Orwell, preface to the Ukrainian edition (March 1947), at the Orwell Foundation: the boy of about ten whipping a large cart-horse; animals unaware of their strength; men exploit animals as the rich exploit the proletariat; the episodes taken from the Russian Revolution but dealt with schematically and their chronological order changed. The English original is lost; the text is a back-translation',
      url: 'https://www.orwellfoundation.com/the-orwell-foundation/orwell/essays-and-other-works/preface-to-the-ukrainian-edition-of-animal-farm/',
    },
    {
      label:
        'Wikipedia, Julius Caesar: Roman general, statesman and author, dictator of the Roman Republic, whose actions helped bring about its collapse',
      url: 'https://en.wikipedia.org/wiki/Julius_Caesar',
    },
    {
      label:
        'Wikipedia, Horse brass: brass plaques decorating the harness of working and parade horses, popular in England from the mid-19th century',
      url: 'https://en.wikipedia.org/wiki/Horse_brass',
    },
    {
      label: 'Wiktionary, mute (verb): of a bird, to defecate (archaic)',
      url: 'https://en.wiktionary.org/wiki/mute',
    },
    {
      label: 'Wiktionary, hunter: a horse bred and trained for hunting',
      url: 'https://en.wiktionary.org/wiki/hunter',
    },
  ],
}
