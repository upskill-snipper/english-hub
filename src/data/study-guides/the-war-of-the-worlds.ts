import type { StudyGuide } from '@/lib/study-guides/types'

/**
 * The War of the Worlds, H. G. Wells (1898). A complete guide: the text had
 * only its full-text reader before this file.
 *
 * Every quotation in keyQuotes and timeline[].quote was copied from the byte
 * copy of Project Gutenberg #36 held at src/data/full-texts/the-war-of-the-worlds.ts,
 * and its speaker and chapter were checked against that edition by reading the
 * whole novel, not by searching for the phrase alone. Context facts are sourced
 * below. Where sources disagreed (the exact words of the conversation with Frank
 * Wells, the date of "The Man of the Year Million"), the guide says less.
 */
export const guide: StudyGuide = {
  slug: 'the-war-of-the-worlds',
  title: 'The War of the Worlds',
  author: 'H. G. Wells',
  form: 'novel',
  scope:
    'The whole novel (1898): Book One, “The Coming of the Martians” (seventeen chapters), and Book Two, “The Earth under the Martians” (ten chapters).',
  rights: {
    status: 'public-domain',
    acknowledgement:
      "First published in book form by William Heinemann in 1898, after serialisation in Pearson's Magazine in 1897. Quotations follow the Project Gutenberg edition (eBook #36).",
  },

  overview: {
    summary: [
      "Some years before he writes, an unnamed narrator, a writer on philosophy living in Woking in Surrey, looks through the astronomer Ogilvy's telescope and sees a flash of gas leave the planet Mars. Later a “falling star” lands on Horsell Common. It is a cylinder, and out of it crawl the Martians: huge, heavy, tentacled creatures who build three-legged fighting-machines, burn the first people to approach them with an invisible Heat-Ray, and begin to advance on London.",
      "Book One follows the narrator's flight across Surrey and, through his younger brother's account, the panic in London: the Martians smother the army's guns with a poisonous Black Smoke, and six million people flee. Book Two, “The Earth under the Martians”, is quieter and stranger. The narrator is trapped for fifteen days in a ruined house beside a Martian pit, for most of the first ten with a curate who is losing his reason, then wanders a London that seems dead. On Primrose Hill he finds the Martians themselves dead, killed not by any human weapon but by the bacteria of the Earth, against which they had no defence.",
      'The novel is short, fast and full of real places, which is why it still frightens. But it is also an argument. Its first chapter asks the reader to judge the Martians against what European settlers had done to the Aboriginal Tasmanians, and by the end humanity has been saved by bacteria rather than by courage or cleverness, leaving the narrator with “an abiding sense of doubt and insecurity”. The strongest answers treat the book as both: a thriller and a sustained attack on human self-satisfaction.',
    ],
  },

  context: [
    {
      heading: 'A writer trained as a scientist',
      body: "Herbert George Wells was born on 21 September 1866 in Bromley, Kent, and died in London on 13 August 1946. In 1884 he won a scholarship to the Normal School of Science in South Kensington, where he studied biology under Thomas Henry Huxley, the most prominent public defender of Darwin's theory of evolution. That training is everywhere in the novel: in the narrator's habit of explaining, in the anatomy of the Martians, and in an ending that turns on bacteria and natural selection. The War of the Worlds followed The Time Machine (1895), The Island of Doctor Moreau (1896) and The Invisible Man (1897) in the run of fiction that made his name. A socialist, Wells joined the Fabian Society in 1903, a few years after the novel appeared.",
    },
    {
      heading: 'A serial first, then a book',
      body: "The novel first appeared as a serial in Pearson's Magazine from April to December 1897, and was published as a book by Heinemann in 1898. Reading it in monthly parts explains a good deal about its shape: short chapters, many of them ending on a new threat. The book is dedicated to Wells's brother Frank as “this rendering of his idea”. Wells later recalled that the idea grew out of a conversation with Frank, and that they may have been talking about the fate of the Aboriginal Tasmanians after European settlement. Accounts of the exact words differ, so it is safest to cite the dedication and the novel's own first chapter.",
    },
    {
      heading: 'Woking, 1895: destroying the neighbourhood',
      body: "In 1895 Wells moved to Woking in Surrey, to a house on Maybury Road, with Amy Catherine Robbins, whom he married that year. He wrote in his autobiography that he “wheeled about the district marking down suitable places and people for destruction by my Martians”. The novel keeps the real map: Horsell Common, the Chobham Road, the canal, Weybridge and Shepperton, and the Oriental College and its mosque, which stand for Woking's real Oriental Institute and the Shah Jahan Mosque, built in 1889. The effect is deliberate. The invasion happens not in some distant colony but in the comfortable suburbs where Wells's first readers lived.",
    },
    {
      heading: 'An empire at its height',
      body: "The serial ran in the year of Queen Victoria's Diamond Jubilee, celebrated on 22 June 1897 as a Festival of the British Empire. Britain ruled a vast empire, justified by the belief that peoples who thought of themselves as civilised had a right to govern those they regarded as inferior. Wells turns that belief round. In the first chapter the narrator reminds the reader that the Tasmanians were “entirely swept out of existence” by European settlers, and asks whether we can complain if the Martians behave the same way. Placing the invasion in June, the month of the Jubilee, is a parallel worth noticing, though nothing Wells wrote says he intended it.",
    },
    {
      heading: 'Darwin, Huxley and the struggle for existence',
      body: "Charles Darwin's On the Origin of Species (1859) argued that living things evolve by natural selection, and its third chapter is titled “Struggle for Existence”. Wells's narrator uses the same phrase in the novel's first chapter: life is “an incessant struggle for existence”, and the Martians, he suspects, believe it too. The Martians are pictured as what evolution might make of a species that lived by intelligence alone, an idea Wells had already sketched in an 1893 essay, “The Man of the Year Million”, which the narrator refers to in Book Two without naming its author. The ending is Darwinian as well: humans survive because a billion deaths over the ages have made them resistant to the Earth's germs.",
    },
    {
      heading: 'Mars in the news',
      body: "In 1877 the Italian astronomer Giovanni Schiaparelli mapped lines on Mars that he called canali, meaning channels; in English they were widely reported as “canals”. In 1895 the American Percival Lowell published Mars, arguing that the lines were irrigation works built by intelligent beings on a drying planet. Wells's first chapter draws on this excitement: it names Schiaparelli, the Lick Observatory and the journal Nature, and its picture of an old, cooling Mars whose inhabitants need a new world follows the same line of speculation.",
    },
    {
      heading: 'Invasion literature',
      body: "In May 1871, after Prussia's defeat of France, George Chesney published The Battle of Dorking anonymously in Blackwood's Magazine. It imagined a surprise invasion of Britain by an enemy readers took to be Germany, ending in defeat at Dorking in Surrey, and it began a craze: more than sixty novels and stories about invasions of Britain appeared between 1871 and 1914. Readers of 1897 knew the formula. Wells's twist is to make the invader not a European rival but a species as far above humans as humans believe themselves above animals.",
    },
  ],

  themes: [
    {
      title: 'Imperialism and colonialism',
      body: "The novel is most convincingly read as the British Empire's story told from the other side. The first chapter compares the Martians directly to the settlers who wiped out the Tasmanians, and the narrator's dodo, which “lorded it in his nest” as it discussed the arrival of “pitiless sailors”, shows the English as the next species to learn what superior technology means. The Martians look across space at a world they want, take it, and treat its people as food. An alternative reading is worth making too: the novel still speaks the empire's language, referring to humanity's “inferior races” even as it condemns the destruction of the Tasmanians. The critique is real, but it comes from inside the imperial mind.",
    },
    {
      title: 'Evolution and the struggle for existence',
      body: 'Wells, a student of Huxley, builds the whole book on Darwin. The Martians are what a species might become if intelligence outgrew the body: “heads”, brains with hands, feeding by injecting blood. Humans, meanwhile, are forced down the evolutionary ladder, compared again and again to rabbits, frogs, ants and rats. The ending completes the argument. The Martians are killed by bacteria because they evolved on a planet without them, and humans survive because “the toll of a billion deaths” has made them resistant. The point is humbling: humanity does not win, it simply turns out to be better adapted to its own planet.',
    },
    {
      title: 'Complacency and human vulnerability',
      body: "The novel's second sentence mocks human beings going about their “little affairs” with “infinite complacency”, and the early chapters show that complacency at work. On the Friday night the Martians have already killed nearly forty people, yet trains run, lovers walk in the lanes and London dismisses the news. The narrator himself dines calmly and predicts that a single shell will finish the invaders. The Epilogue makes the lesson explicit: the invasion has “robbed us” of a “serene confidence in the future” which the narrator calls the most fruitful source of decadence. Wells suggests that security is a habit of mind, and that a habit can be broken in a day.",
    },
    {
      title: 'Science and technology',
      body: 'The Martians are the future of machinery: the Heat-Ray, the Black Smoke, the flexible tripods and the handling-machines that seem more alive than their masters. Human technology, from artillery to the ironclad Thunder Child, wins a few brief victories and then fails. Wells is not simply anti-science, though. His narrator is a scientific observer to the end, studying the Martians through a hole in the wall, and the Epilogue records the “gifts to human science” the invasion brought. The more precise warning is about intelligence cut off from feeling: explaining how the Martians evolved, the narrator reasons that a brain without a body would become “a mere selfish intelligence”.',
    },
    {
      title: 'Religion and faith',
      body: "The curate reads the invasion as Judgement Day and collapses; the narrator attacks a religion that “collapses under calamity” and insists that God is “not an insurance agent” guaranteeing Weybridge. Yet the narrator himself prays on Putney Hill, thanks God on Primrose Hill, and credits the Martians' death to “the humblest things that God, in his wisdom, has put upon this earth”. One reading is that Wells replaces providence with natural selection while keeping religious language for its emotional force. Another is that the narrator's faith is genuinely renewed. The first is more convincing, because the explanation the novel actually supplies is bacterial, not miraculous, but the second explains why the ending feels like deliverance.",
    },
    {
      title: 'Civilisation under pressure',
      body: "Wells shows civilisation as a thin layer. Within days of the first cylinder, London's police are “breaking the heads” of the people they protect, a man is crushed while scrabbling for spilled gold, a committee in Chelmsford seizes the fugitives' pony as food, and the narrator himself strikes down the curate and considers killing a dog to eat. The artilleryman's plan for survival turns quickly into talk of casting out the weak. The narrator's own verdict on the killing of the curate asks the reader for “a wider charity” towards what “tortured men” can do, which suggests Wells is less interested in blaming individuals than in showing how quickly order depends on safety.",
    },
  ],

  characters: [
    {
      name: 'The narrator',
      role: 'Unnamed first-person narrator; a writer on philosophical themes who lives on Maybury Hill, Woking',
      body: 'He tells the story six years later, and that gap matters: he can explain what he did not understand at the time, correct newspaper reports and admit his own failings. He is curious, often more fascinated than frightened, and prone to what he calls a “sense of detachment”. The invasion strips him down. He runs, weeps, kills the curate, loses his reason for three days and comes out of it humbler and less certain. He is also a man of his time, dismissive of the curate as “as lacking in restraint as a silly woman”, and a strong answer notices where the novel trusts his judgement and where it invites us to question it.',
    },
    {
      name: "The narrator's brother",
      role: 'Younger brother; a medical student in London whose flight the narrator retells',
      body: "He carries three chapters of Book One: the slow spread of the news in London, the panic and the exodus north, and the escape by sea. Where the narrator is a watcher, the brother is a man of action, an “expert boxer” who fights off robbers and forces a pony chaise across a road choked with refugees. He lets Wells show what the narrator could not see, the collapse of a whole city, and so turns one man's escape into a picture of a nation. He sees a Martian for the first time only from the deck of the steamer off Essex.",
    },
    {
      name: "The narrator's wife",
      role: 'Unnamed wife; left with her cousins at Leatherhead',
      body: 'She has few lines, but she frames the story. She is the first to believe him, repeating “They may come here”, and her fear is proved right while his confident reassurance is proved wrong. For most of the novel she is absent, a figure he worries about, prays for and assumes is dead. Her return at the end of Book Two, Chapter IX, the last chapter before the Epilogue, gives the book its one private happy ending. One reading is that she stands for the ordinary life the invasion interrupts; the novel gives her too little voice to be more than that, which is itself worth commenting on.',
    },
    {
      name: 'The curate',
      role: "Unnamed clergyman from Weybridge; the narrator's companion in the ruined house",
      body: "Within moments of meeting the narrator he is asking “What do these things mean?”, and he sees the invasion as the end of the world, in words that echo the Book of Revelation. Trapped with the narrator, he eats more than his share, weeps, raves and finally threatens to shout for the Martians, confessing that he had ignored the poor and preached “acceptable folly”. He is a foil: his breakdown, the narrator says, “kept me a sane man”. Readers disagree about how far Wells shares the narrator's contempt. The narrator admits he pitied him, and his death is the most uncomfortable moment in the book.",
    },
    {
      name: 'The artilleryman',
      role: 'Unnamed soldier, a driver in the artillery; met twice',
      body: "On the Saturday evening he survives the destruction of his gun and its team, and that night he shelters in the narrator's house, repeating that the Martians “wiped us out”. In Book Two, on Putney Hill, he has a plan: humans are “beat”, and survivors must live in the drains, keep their science and one day seize the Martians' machines. His speech is exciting and chilling at once, because it includes casting out the weak. The narrator is carried away, then sees the burrow he has dug in a week is “scarcely ten yards long”. He is the novel's portrait of a man whose dreams are larger than his will.",
    },
    {
      name: 'Ogilvy',
      role: 'The astronomer who shows the narrator Mars and finds the first cylinder',
      body: 'A “well-known astronomer” at Ottershaw, he tells the narrator that the chances against anything manlike on Mars are “a million to one”. He is the first to realise the cylinder is hollow and that something inside is unscrewing it, and he runs into Woking to raise the alarm. He dies with the white-flag Deputation, one of the first victims of the Heat-Ray. His confident scepticism, followed so quickly by his death, sets the pattern for human certainty throughout the book.',
    },
    {
      name: 'Miss Elphinstone',
      role: "The younger sister of a Stanmore surgeon; the brother's fellow fugitive",
      body: 'The “slender lady” fights off an attacker with a whip, rescues the brother with a revolver, and drives the pony across the flood of refugees near Barnet. The narrator says that she “proved her quality”, and she keeps watch at night in turn with the brother. She is calm, practical and brave, and a useful counter-example when students generalise about how the novel presents women.',
    },
    {
      name: 'Mrs Elphinstone',
      role: "The Stanmore surgeon's wife; the brother's other fellow fugitive",
      body: 'The “woman in white” screams during the attack, keeps calling for “George”, it seems her missing husband, and at the sight of the sea panics at the thought of a foreign country. She stands for the fixed habits of comfortable suburban life, wanting only to go back to Stanmore, where “things had been always well and safe”. Set beside her sister-in-law, she shows that Wells presents a range of responses rather than one type.',
    },
    {
      name: 'The Martians',
      role: 'The invaders: vast brains with tentacles, fighting from tripod machines',
      body: "Described first with disgust, as “Gorgon groups of tentacles” and “oily brown skin”, and later with a scientist's interest, they are round bodies about four feet across that are “merely heads”, with no digestive system and no sleep. They feed on the blood of living creatures, communicate, the narrator believes, without sound, and work by machines. They are never individual characters and never speak. That is the point: they are to humans what humans are to animals, and they die, at the end, as helplessly as any animal.",
    },
  ],

  keyQuotes: [
    {
      text: 'intellects vast and cool and unsympathetic, regarded this earth with envious eyes, and slowly and surely drew their plans against us',
      where: 'The narrator, Book One, Chapter I',
      analysis:
        "Of the triple adjectives “vast”, “cool” and “unsympathetic”, the last two define the Martians by what they lack, which is feeling. The slow alliteration of “slowly and surely” makes the threat patient and certain. “Envious eyes” gives them a motive readers of empire would recognise: they want another people's land.",
    },
    {
      text: 'With infinite complacency men went to and fro over this globe about their little affairs, serene in their assurance of their empire over matter',
      where: 'The narrator, Book One, Chapter I',
      analysis:
        'The narrator looks down on humanity from above, as the Martians do. “Little affairs” shrinks human business to insect scale, and “empire over matter” turns imperial pride into a joke that the novel will punish. The retrospective voice already knows how misplaced that serenity was.',
    },
    {
      text: 'Are we such apostles of mercy as to complain if the Martians warred in the same spirit?',
      where: 'The narrator, Book One, Chapter I',
      analysis:
        "This rhetorical question, straight after the reference to the Tasmanians, is the most direct statement of the novel's anti-imperial argument. “Apostles of mercy” mocks the religious language used to justify empire. It forces readers to judge the invaders by the standard they apply to themselves, and most cannot.",
    },
    {
      text: 'So some respectable dodo in the Mauritius might have lorded it in his nest',
      where: 'The narrator, Book One, Chapter VII',
      analysis:
        'After predicting over dinner that one shell will kill the Martians, the narrator looks back and sees himself as a dodo, a bird hunted to extinction after sailors arrived. “Respectable” pins the comparison to the Victorian middle class. The irony is that the reader, too, has just trusted his confidence.',
    },
    {
      text: 'What good is religion if it collapses under calamity?',
      where: 'The narrator to the curate, Book One, Chapter XIII',
      analysis:
        'The narrator challenges not faith itself but a faith that expected God to protect Weybridge. The alliteration of “collapses” and “calamity” makes the question sound like a verdict. It sets up the curate as a foil, and it asks what belief is for if it offers no strength in disaster.',
    },
    {
      text: 'It was the beginning of the rout of civilisation, of the massacre of mankind.',
      where: 'The narrator, Book One, Chapter XVII',
      analysis:
        "After the brother's account of the exodus, the narrator widens the view to history. “Rout” is a military word for a defeated army fleeing in disorder, and applying it to “civilisation” suggests that society itself has lost a battle. The balanced phrases give the sentence the weight of a historian's judgement.",
    },
    {
      text: 'They were heads—merely heads.',
      where: 'The narrator, Book Two, Chapter II',
      analysis:
        'The short sentence and the dash give a shock of recognition. “Merely” reduces the terrifying invaders to a single organ, and the idea links to evolution: the narrator goes on to suggest the Martians may descend from beings like us. The heads are both a monster and a possible human future.',
    },
    {
      text: 'a sense of dethronement, a persuasion that I was no longer a master, but an animal among the animals, under the Martian heel',
      where: 'The narrator, Book Two, Chapter VI',
      analysis:
        'Standing in a landscape covered with red weed, the narrator feels what animals feel before humans. “Dethronement” uses the language of kings, so humanity is pictured as a deposed monarch. “Under the Martian heel” reverses the image of empire, and the repetition in “an animal among the animals” stresses his complete loss of status.',
    },
    {
      text: "It never was a war, any more than there's war between man and ants.",
      where: 'The artilleryman, Book Two, Chapter VII',
      analysis:
        "The artilleryman denies the novel's own title. To him, a war needs two sides that can harm each other, and humans are no more a threat to the Martians than ants to a man. The line forces readers to picture their own casual destruction of smaller creatures, and it is echoed when Leatherhead is crushed like “an ant hill”.",
    },
    {
      text: 'this war has taught us pity—pity for those witless souls that suffer our dominion',
      where: 'The narrator, Book Two, Chapter VII',
      analysis:
        'After creeping out of a house “like a rat”, the narrator turns the lesson of the invasion outwards, towards the animals humans rule. The repetition of “pity” across the dash turns a feeling into a moral. “Dominion”, a word from the Book of Genesis, questions the belief that humans were given the Earth to rule.',
    },
    {
      text: "slain, after all man's devices had failed, by the humblest things that God, in his wisdom, has put upon this earth",
      where: 'The narrator, Book Two, Chapter VIII',
      analysis:
        "The anticlimax is the point: after guns, ironclads and Black Smoke, bacteria win. The contrast between “man's devices” and “the humblest things” humbles human pride. The religious phrase “God, in his wisdom” sits beside a scientific explanation, so the reader can take the ending as providence, as natural selection, or both.",
    },
    {
      text: 'it has robbed us of that serene confidence in the future which is the most fruitful source of decadence',
      where: 'The narrator, Book Two, Chapter X (the Epilogue)',
      analysis:
        '“Serene” echoes the “serene” humans of the first chapter, so the novel ends by answering its opening. The paradox is that the loss of confidence is presented as a gain. “Decadence” was a charged word in the 1890s, and the narrator suggests that fear keeps a civilisation from rotting.',
    },
  ],

  // Each passage is copied from the held Project Gutenberg edition, paragraph by
  // paragraph, with paragraphs separated by " / ". The one change is in the third:
  // Gutenberg marks the italic "dead" with underscores, which are dropped here so
  // the page does not print them. The first exam practice question below names
  // the second passage, which is why its bounds are those.
  extracts: [
    {
      title: 'The first Martian leaves the cylinder',
      where: 'Book One, Chapter IV, “The Cylinder Opens”',
      pointer:
        'The middle of Book One, Chapter IV, just after the lid of the cylinder falls onto the gravel at sunset: from “I think everyone expected to see a man emerge” to “I was overcome with disgust and dread.” The Eduqas exemplar question on fear of the unknown uses an extract from this moment, beginning at “A sudden chill came over me”.',
      text: `I think everyone expected to see a man emerge—possibly something a little unlike us terrestrial men, but in all essentials a man. I know I did. But, looking, I presently saw something stirring within the shadow: greyish billowy movements, one above another, and then two luminous disks—like eyes. Then something resembling a little grey snake, about the thickness of a walking stick, coiled up out of the writhing middle, and wriggled in the air towards me—and then another. / A sudden chill came over me. There was a loud shriek from a woman behind. I half turned, keeping my eyes fixed upon the cylinder still, from which other tentacles were now projecting, and began pushing my way back from the edge of the pit. I saw astonishment giving place to horror on the faces of the people about me. I heard inarticulate exclamations on all sides. There was a general movement backwards. I saw the shopman struggling still on the edge of the pit. I found myself alone, and saw the people on the other side of the pit running off, Stent among them. I looked again at the cylinder, and ungovernable terror gripped me. I stood petrified and staring. / A big greyish rounded bulk, the size, perhaps, of a bear, was rising slowly and painfully out of the cylinder. As it bulged up and caught the light, it glistened like wet leather. / Two large dark-coloured eyes were regarding me steadfastly. The mass that framed them, the head of the thing, was rounded, and had, one might say, a face. There was a mouth under the eyes, the lipless brim of which quivered and panted, and dropped saliva. The whole creature heaved and pulsated convulsively. A lank tentacular appendage gripped the edge of the cylinder, another swayed in the air. / Those who have never seen a living Martian can scarcely imagine the strange horror of its appearance. The peculiar V-shaped mouth with its pointed upper lip, the absence of brow ridges, the absence of a chin beneath the wedgelike lower lip, the incessant quivering of this mouth, the Gorgon groups of tentacles, the tumultuous breathing of the lungs in a strange atmosphere, the evident heaviness and painfulness of movement due to the greater gravitational energy of the earth—above all, the extraordinary intensity of the immense eyes—were at once vital, intense, inhuman, crippled and monstrous. There was something fungoid in the oily brown skin, something in the clumsy deliberation of the tedious movements unspeakably nasty. Even at this first encounter, this first glimpse, I was overcome with disgust and dread.`,
      annotations: [
        {
          phrase: 'in all essentials a man',
          note: "The narrator speaks for the whole crowd, and for the reader: everyone expected intelligence to look human. The phrase recalls the first chapter, where people “fancied there might be other men upon Mars”, and the gap between that expectation and what emerges is the first of the novel's many humiliations of human self-importance.",
        },
        {
          phrase: 'two luminous disks—like eyes',
          note: 'The dash is a hesitation. The narrator sees shapes before he can name them, and even then he can only say what they resemble. “Disks” is a geometrical word, so the creature first appears almost as a machine, and the reader, like the narrator, has to assemble it piece by piece out of the shadow.',
        },
        {
          phrase: 'A sudden chill came over me.',
          note: "The paragraph turns to short, plain sentences: a shriek, a movement backwards, people running, the narrator left alone. The pace of the prose imitates the pace of panic. Notice too that Wells shows the horror on the watchers' faces before he describes the Martian itself, so the fear arrives before its cause.",
        },
        {
          phrase: 'it glistened like wet leather',
          note: 'After the eyes and tentacles, a simile from ordinary life. Leather is familiar, even domestic, which makes the comparison worse: the reader can imagine exactly how this skin would look and feel. “Glistened” adds moisture, and a few lines later the creature falls “with a thud like the fall of a great mass of leather”, like a heavy, lifeless thing.',
        },
        {
          phrase: 'had, one might say, a face',
          note: "The commas hold the word “face” back, and “one might say” shows the narrator's reluctance to grant the creature anything human. A face is where we look for feeling, but this one is chiefly a mouth that “quivered and panted, and dropped saliva”: appetite, not expression.",
        },
        {
          phrase: 'Those who have never seen a living Martian',
          note: 'The older narrator, writing six years later, steps out of the moment to address the reader. The phrase assumes that some readers have seen a Martian, which is the documentary pretence at work: the invasion is treated as history. It also sets up a paradox, because the sentence that follows tries to make us imagine what he says we scarcely can.',
        },
        {
          phrase: 'were at once vital, intense, inhuman, crippled and monstrous',
          note: "The sentence withholds its main verb, “were”, until after a list of eight features of the Martian's body, so the reader has to take in feature after feature before being told what they add up to. The adjectives then pull against each other: “vital” and “intense”, yet “crippled”, weighed down by the Earth's stronger gravity. The creature is pitiable and appalling at once.",
        },
        {
          phrase: 'unspeakably nasty',
          note: 'After the scientific “fungoid” and the mythical “Gorgon”, the narrator reaches for a blunt, almost childish word, and “unspeakably” admits that language is failing him. For a writer on philosophy who explains everything, this is a telling moment: disgust has overtaken description, and the passage ends on the pairing of “disgust and dread”.',
        },
      ],
      question:
        'Using this extract and your knowledge of the whole novel, write about how Wells presents fear of the unknown at different points in The War of the Worlds. In the extract, look closely at how he delays and builds up the first full sight of a Martian.',
    },
    {
      title: 'The road at Barnet',
      where: 'Book One, Chapter XVI, “The Exodus from London”',
      pointer:
        "The middle of Book One, Chapter XVI, as the narrator's brother, Mrs Elphinstone and Miss Elphinstone come down a lane to the crossroads south of Barnet, meaning to cross the Great North Road: from “For the main road was a boiling stream of people” to the refrain “Way! Way! The Martians are coming!” It is the passage named in the first exam practice question below.",
      text: `For the main road was a boiling stream of people, a torrent of human beings rushing northward, one pressing on another. A great bank of dust, white and luminous in the blaze of the sun, made everything within twenty feet of the ground grey and indistinct and was perpetually renewed by the hurrying feet of a dense crowd of horses and of men and women on foot, and by the wheels of vehicles of every description. / “Way!” my brother heard voices crying. “Make way!” / It was like riding into the smoke of a fire to approach the meeting point of the lane and road; the crowd roared like a fire, and the dust was hot and pungent. And, indeed, a little way up the road a villa was burning and sending rolling masses of black smoke across the road to add to the confusion. / Two men came past them. Then a dirty woman, carrying a heavy bundle and weeping. A lost retriever dog, with hanging tongue, circled dubiously round them, scared and wretched, and fled at my brother’s threat. / So much as they could see of the road Londonward between the houses to the right was a tumultuous stream of dirty, hurrying people, pent in between the villas on either side; the black heads, the crowded forms, grew into distinctness as they rushed towards the corner, hurried past, and merged their individuality again in a receding multitude that was swallowed up at last in a cloud of dust. / “Go on! Go on!” cried the voices. “Way! Way!” / One man’s hands pressed on the back of another. My brother stood at the pony’s head. Irresistibly attracted, he advanced slowly, pace by pace, down the lane. / Edgware had been a scene of confusion, Chalk Farm a riotous tumult, but this was a whole population in movement. It is hard to imagine that host. It had no character of its own. The figures poured out past the corner, and receded with their backs to the group in the lane. Along the margin came those who were on foot threatened by the wheels, stumbling in the ditches, blundering into one another. / The carts and carriages crowded close upon one another, making little way for those swifter and more impatient vehicles that darted forward every now and then when an opportunity showed itself of doing so, sending the people scattering against the fences and gates of the villas. / “Push on!” was the cry. “Push on! They are coming!” / In one cart stood a blind man in the uniform of the Salvation Army, gesticulating with his crooked fingers and bawling, “Eternity! Eternity!” His voice was hoarse and very loud so that my brother could hear him long after he was lost to sight in the dust. Some of the people who crowded in the carts whipped stupidly at their horses and quarrelled with other drivers; some sat motionless, staring at nothing with miserable eyes; some gnawed their hands with thirst, or lay prostrate in the bottoms of their conveyances. The horses’ bits were covered with foam, their eyes bloodshot. / There were cabs, carriages, shop-carts, waggons, beyond counting; a mail cart, a road-cleaner’s cart marked “Vestry of St. Pancras,” a huge timber waggon crowded with roughs. A brewer’s dray rumbled by with its two near wheels splashed with fresh blood. / “Clear the way!” cried the voices. “Clear the way!” / “Eter-nity! Eter-nity!” came echoing down the road. / There were sad, haggard women tramping by, well dressed, with children that cried and stumbled, their dainty clothes smothered in dust, their weary faces smeared with tears. With many of these came men, sometimes helpful, sometimes lowering and savage. Fighting side by side with them pushed some weary street outcast in faded black rags, wide-eyed, loud-voiced, and foul-mouthed. There were sturdy workmen thrusting their way along, wretched, unkempt men, clothed like clerks or shopmen, struggling spasmodically; a wounded soldier my brother noticed, men dressed in the clothes of railway porters, one wretched creature in a nightshirt with a coat thrown over it. / But varied as its composition was, certain things all that host had in common. There were fear and pain on their faces, and fear behind them. A tumult up the road, a quarrel for a place in a waggon, sent the whole host of them quickening their pace; even a man so scared and broken that his knees bent under him was galvanised for a moment into renewed activity. The heat and dust had already been at work upon this multitude. Their skins were dry, their lips black and cracked. They were all thirsty, weary, and footsore. And amid the various cries one heard disputes, reproaches, groans of weariness and fatigue; the voices of most of them were hoarse and weak. Through it all ran a refrain: / “Way! Way! The Martians are coming!”`,
      annotations: [
        {
          phrase: 'a boiling stream of people, a torrent of human beings',
          note: 'Two metaphors of water side by side, the second stronger than the first. “Boiling” mixes water with heat, as if the Heat-Ray had set the crowd itself on the boil, and “torrent” turns thousands of people into a single force of nature that no one inside it can steer.',
        },
        {
          phrase: 'the crowd roared like a fire',
          note: "The simile gives the crowd the quality of the Martians' own weapon. Fire is what the Heat-Ray brings, and here, miles from any Martian, human panic has become as destructive, with a real villa burning up the road to make the comparison literal.",
        },
        {
          phrase: 'Irresistibly attracted',
          note: 'The brother is drawn towards the road as if by a current, against his judgement. The adverb takes away his will, and once they are on the road, later in the chapter, he “seemed to lose volition, to become a part of that dusty rout”. The extract shows that loss beginning.',
        },
        {
          phrase: 'It had no character of its own.',
          note: 'A short sentence among long ones. “That host”, a word for an army or a vast multitude, is a crowd without a personality, and the people in it have “merged their individuality” into it. The irony is pointed: the Martians are feared as an inhuman mass, and here the fleeing Londoners have become one.',
        },
        {
          phrase: 'a blind man in the uniform of the Salvation Army',
          note: "His cry of “Eternity! Eternity!” is religion reduced to noise, like the curate's panic in Book One, Chapter XIII. His blindness invites a symbolic reading, a faith that cannot see what is happening, and the broken echo, “Eter-nity! Eter-nity!”, shows the word being torn apart by the din of the road.",
        },
        {
          phrase: 'some weary street outcast in faded black rags',
          note: 'Well-dressed women, workmen, men dressed like clerks, railway porters and a street outcast are pushed together, “side by side”. Victorian society was ordered by class, and the long lists in this paragraph show that order dissolving: in flight, respectability no longer buys anyone a place.',
        },
        {
          phrase: 'There were fear and pain on their faces, and fear behind them.',
          note: 'The repetition of “fear” frames the sentence: fear on the faces, fear at their backs. The first is felt and the second is the pursuing Martians, and the sentence makes them the same thing. It is the point where the narrator stops listing differences and names what the whole crowd shares.',
        },
        {
          phrase: 'Through it all ran a refrain:',
          note: "A refrain is the repeated line of a song, and the cries have been repeated all through the passage: “Way!”, “Go on!”, “Push on!”, “Clear the way!” Halfway through, the crowd cries only that “They are coming!”; not until the last line are the Martians named. The short lines of dialogue break into the long descriptive paragraphs just as the shouts break into the brother's hearing.",
        },
      ],
      question:
        'How does Wells use language and structure in this extract to present the crowd as a force that no one inside it can control? Refer closely to his imagery, his lists and the repeated cries.',
    },
    {
      title: 'The dead Martians on Primrose Hill',
      where: 'Book Two, Chapter VIII, “Dead London”',
      pointer:
        'The second half of Book Two, Chapter VIII. At dawn the narrator, in despair, has been walking towards the third Martian, on Primrose Hill, when he sees birds circling its hood: from “I hurried through the red weed that choked St. Edmund’s Terrace” to “the Angel of Death had slain them in the night.”',
      text: `I hurried through the red weed that choked St. Edmund’s Terrace (I waded breast-high across a torrent of water that was rushing down from the waterworks towards the Albert Road), and emerged upon the grass before the rising of the sun. Great mounds had been heaped about the crest of the hill, making a huge redoubt of it—it was the final and largest place the Martians had made—and from behind these heaps there rose a thin smoke against the sky. Against the sky line an eager dog ran and disappeared. The thought that had flashed into my mind grew real, grew credible. I felt no fear, only a wild, trembling exultation, as I ran up the hill towards the motionless monster. Out of the hood hung lank shreds of brown, at which the hungry birds pecked and tore. / In another moment I had scrambled up the earthen rampart and stood upon its crest, and the interior of the redoubt was below me. A mighty space it was, with gigantic machines here and there within it, huge mounds of material and strange shelter places. And scattered about it, some in their overturned war-machines, some in the now rigid handling-machines, and a dozen of them stark and silent and laid in a row, were the Martians—dead!—slain by the putrefactive and disease bacteria against which their systems were unprepared; slain as the red weed was being slain; slain, after all man’s devices had failed, by the humblest things that God, in his wisdom, has put upon this earth. / For so it had come about, as indeed I and many men might have foreseen had not terror and disaster blinded our minds. These germs of disease have taken toll of humanity since the beginning of things—taken toll of our prehuman ancestors since life began here. But by virtue of this natural selection of our kind we have developed resisting power; to no germs do we succumb without a struggle, and to many—those that cause putrefaction in dead matter, for instance—our living frames are altogether immune. But there are no bacteria in Mars, and directly these invaders arrived, directly they drank and fed, our microscopic allies began to work their overthrow. Already when I watched them they were irrevocably doomed, dying and rotting even as they went to and fro. It was inevitable. By the toll of a billion deaths man has bought his birthright of the earth, and it is his against all comers; it would still be his were the Martians ten times as mighty as they are. For neither do men live nor die in vain. / Here and there they were scattered, nearly fifty altogether, in that great gulf they had made, overtaken by a death that must have seemed to them as incomprehensible as any death could be. To me also at that time this death was incomprehensible. All I knew was that these things that had been alive and so terrible to men were dead. For a moment I believed that the destruction of Sennacherib had been repeated, that God had repented, that the Angel of Death had slain them in the night.`,
      annotations: [
        {
          phrase: 'a wild, trembling exultation',
          note: 'Minutes earlier the narrator was walking towards the Martian in despair, and the circling birds have changed everything. “Wild” and “exultation” belong to joy, but “trembling” belongs to fear, so the phrase catches a man whose hope has returned faster than his body can stop shaking.',
        },
        {
          phrase: 'were the Martians—dead!—slain',
          note: "Wells makes the reader wait. The sentence first lists where the bodies lie, in overturned war-machines, in rigid handling-machines, “stark and silent and laid in a row”, and only then names its subject. The single word “dead” is fenced off by dashes and marked for italics in the Gutenberg edition: the exclamation breaks the narrator's usually measured voice at the climax of the novel.",
        },
        {
          phrase: 'slain as the red weed was being slain',
          note: 'Three clauses in a row begin with “slain”, and this middle one uses the word twice, so it sounds four times in one sentence, with the rhythm of a chant. This middle clause is also what makes the ending fair: the red weed has been dying since the start of the chapter, its fronds “whitened in patches by the spreading disease”, so the reader has already watched bacteria at work on Martian life.',
        },
        {
          phrase: 'our microscopic allies',
          note: "A military metaphor for bacteria, and it completes a pattern that began in the novel's first sentence. There, humans were the tiny creatures studied by “a man with a microscope”; here, the microscopic are humanity's only effective army, winning the war that the guns and the Thunder Child could not.",
        },
        {
          phrase: 'By the toll of a billion deaths man has bought his birthright of the earth',
          note: "Two vocabularies meet. “Toll” and “bought” are the language of payment, and “birthright” is the word the Book of Genesis uses for the inheritance Esau sells to Jacob. Humanity's claim to the planet is presented not as a gift or a reward for intelligence but as a price paid in suffering across the whole of evolution.",
        },
        {
          phrase: 'For neither do men live nor die in vain.',
          note: "A short sentence with the cadence of a sermon closes a scientific paragraph. One reading is that Wells gives natural selection the comfort religion used to give: past deaths had a purpose. Another is that the narrator, flooded with relief, reaches for a consolation the science cannot supply. The second is the sharper reading, because the paragraph has just explained the Martians' death as blind biology.",
        },
        {
          phrase: 'the destruction of Sennacherib had been repeated',
          note: "In the Second Book of Kings, chapter 19, the angel of the Lord destroys the Assyrian army of King Sennacherib in a single night, a story Victorian readers knew from the Bible and from Byron's poem “The Destruction of Sennacherib” (1815). The narrator believed it only “For a moment”, and the order matters: Wells gives the scientific explanation first, and the miracle second, as a feeling rather than a fact.",
        },
      ],
      question:
        "Using this extract as a starting point, explore how Wells presents the defeat of the Martians. How far do you agree that the ending humbles humanity more than it rescues it? Refer to the novel's first chapter and to the Epilogue in your answer.",
    },
  ],

  languageAnalysis: [
    {
      technique: 'Extended analogy and reversal of scale',
      example:
        "The opening compares humanity to “the transient creatures that swarm and multiply in a drop of water” under a man's microscope.",
      effect:
        'The reader is placed on the slide, not behind the lens. Wells begins by reversing the scientific gaze that Victorian readers took for granted, and the rest of the novel repeats the move with rabbits, frogs, ants and rats. It prepares the reader to experience humiliation, not just fear.',
    },
    {
      technique: 'Accumulated adjectives and a detached, clinical list',
      example:
        'The first Martian is “vital, intense, inhuman, crippled and monstrous”, with “Gorgon groups of tentacles” and “something fungoid in the oily brown skin”.',
      effect:
        "The list piles up faster than the reader can picture it, which mirrors the narrator's own shock. The words mix the scientific (“fungoid”) with the mythical (“Gorgon”), so the Martian is both a specimen and a monster. Readers who know the Gorgon also know that looking at it could turn a person to stone, which is how the narrator stands, “petrified and staring”.",
    },
    {
      technique: 'Juxtaposition of the ordinary and the alien',
      example:
        'After the first sight of the Martians, “The barrow of ginger beer stood, a queer derelict, black against the burning sky”.',
      effect:
        "A seller's barrow of ginger beer at a day out turns into a wreck in a single sentence. Wells sets the invasion in suburbs full of milkmen, trains and golf links, and the everyday detail makes the destruction believable while showing how fragile ordinary life is.",
    },
    {
      technique: 'Medical metaphor for society',
      example:
        'On the Friday night the cylinder sticks into the Earth “like a poisoned dart”, and “The fever of war that would presently clog vein and artery” has “still to develop”.',
      effect:
        'England is pictured as a body about to fall ill, and the panic later becomes “that swift liquefaction of the social body”. The metaphor foreshadows the ending with a twist: the real disease, the one that kills, will attack the Martians, not the human body politic.',
    },
    {
      technique: 'Animal imagery for humans',
      example:
        'Fleeing the Heat-Ray, people scramble through reeds “like little frogs hurrying through grass from the advance of a man”; later the narrator creeps out of a house “like a rat leaving its hiding place”.',
      effect:
        'The similes push humanity down the scale of creation, making concrete the idea of “dethronement”. They also make the reader uncomfortable about their own treatment of animals, which is exactly the lesson the narrator draws.',
    },
    {
      technique: 'Scientific and journalistic register',
      example:
        "Mars orbits “at a mean distance of 140,000,000 miles”; the Epilogue discusses “Spectrum analysis of the black powder” and scientists' theories about why the Martians died.",
      effect:
        'The narrator writes like a correspondent or a scientist reporting on a real event, quoting newspapers and correcting rumours. This documentary style gives the fantasy the authority of fact, and it lets Wells make his serious points in a voice readers were trained to trust.',
    },
    {
      technique: 'Sound and onomatopoeia',
      example:
        "The fighting-machine howls “Aloo! Aloo!” in the storm; in dead London a Martian's cry of “Ulla, ulla, ulla, ulla” fills the empty streets until it stops.",
      effect:
        'The Martians never speak, so these inhuman sounds are all the reader hears of them. The repetition of “Ulla” becomes a lament, and when it is “cut off” the silence “came like a thunderclap”: Wells makes the absence of sound a turning point in the chapter.',
    },
    {
      technique: 'Biblical and apocalyptic allusion',
      example:
        'The curate cries “As if it were Sodom and Gomorrah!” and echoes the Book of Revelation; on Primrose Hill the narrator thinks “the destruction of Sennacherib had been repeated”.',
      effect:
        "The allusions give the invasion the scale of Judgement Day, and they test the Victorian habit of reading disaster as God's punishment. The narrator mocks the curate's version and then reaches for a Bible story himself, which shows how deep that habit runs.",
    },
  ],

  structureForm: [
    {
      heading: 'A retrospective first-person memoir',
      body: "The narrator writes “six years” after the invasion, so the story is told with hindsight. He can foreshadow (“the last civilised dinner I was to eat”), explain what he did not understand at the time, and correct other accounts. This double view, the terrified man then and the reflective writer now, is the novel's main source of irony. It also creates suspense of a particular kind: we know he survives, but not what it cost him.",
    },
    {
      heading: 'Two books: arrival and aftermath',
      body: 'Book One, “The Coming of the Martians”, is a chase: seventeen chapters of escalating attack, from one cylinder on a common to the fall of London. Book Two, “The Earth under the Martians”, slows almost to stillness: confinement, watching, hunger, empty streets. The change of pace is the point. Book One shows humanity losing a war; Book Two shows what it is like to live as a lesser species. The two books are divided by the sight of something “flat and broad, and very large” in the evening sky, which “rained down darkness upon the land”; only in Book Two does the reader learn that the Martians had built a flying-machine.',
    },
    {
      heading: "The brother's narrative",
      body: "Three chapters of Book One (Chapters XIV, XVI and XVII) are the brother's story, retold. The narrator explains that he has “set forth at length” his brother's account so that readers can see the flight from London as “one of those concerned” saw it. Structurally this lets Wells show the scale of the catastrophe, the whole of London and the sea off Essex, while keeping the intimacy of a single witness. It also means the Thunder Child, the novel's one heroic human victory, is seen from a distance.",
    },
    {
      heading: 'Serial chapters and cliffhangers',
      body: "Written for monthly parts, the chapters are short and often end on a hook: the foreboding last line of Chapter VII, the second cylinder falling at the end of Chapter VIII, the mysterious flying shape at the end of Book One. Titles such as “The Heat-Ray” and “The Death of the Curate” announce the big event, so the suspense lies in how, not whether. Students can use this to explain the novel's rhythm of shock and pause.",
    },
    {
      heading: 'An ending prepared from the first sentence',
      body: "The bacterial ending is sometimes called a cheat, but Wells plants it early. The first sentence calls the Martians “as mortal” as humans; Book Two, Chapter II notes that micro-organisms “have either never appeared upon Mars” or were eliminated there; and the red weed is seen dying of a bacterial disease before the Martians do. The ending therefore follows the novel's own science. It still denies humanity a victory, and that denial is the argument.",
    },
    {
      heading: 'Circular structure and an unsettled close',
      body: 'The narrator ends where he began, at his desk in Woking, and finds his unfinished paper on moral progress, its last sentence broken off at “we may expect”. The Epilogue returns to astronomy, as the first chapter did, and imagines the Martians trying again. The final lines, in which husband and wife have each counted the other “among the dead”, combine relief with lasting unease. The story is over, but the security it destroyed does not come back.',
    },
  ],

  vocabulary: [
    {
      term: 'Complacency',
      definition:
        "Smug, unthinking satisfaction with one's own position, without awareness of danger. The novel's first target.",
    },
    {
      term: 'Opposition',
      definition:
        'In astronomy, the time when the Earth passes between the Sun and Mars, so that Mars is at or near its closest and best seen. The Martians fire their cylinders as Mars approaches opposition.',
    },
    {
      term: 'Infusoria',
      definition:
        'A Victorian word for the tiny organisms seen swimming in a drop of water under a microscope. Wells compares humans to them in the first chapter.',
    },
    {
      term: 'Heat-Ray',
      definition:
        "The Martians' weapon: an invisible beam of heat that sets on fire whatever it touches, thought by many, the narrator reports, to be projected from a polished mirror.",
    },
    {
      term: 'Fighting-machine',
      definition:
        "The Martians' three-legged war engine, “higher than many houses”, with a hood that holds a Martian and flexible metal tentacles.",
    },
    {
      term: 'Handling-machine',
      definition:
        'A crab-like, five-legged Martian machine used for building and digging, which seems to the narrator more alive than the Martians themselves.',
    },
    {
      term: 'Black Smoke',
      definition:
        'A heavy poisonous vapour the Martians fire in canisters to smother guns and people, then clear away with jets of steam.',
    },
    {
      term: 'Red weed',
      definition:
        'A Martian plant that spreads wildly along English rivers during the invasion, then dies of a bacterial disease, foreshadowing the fate of the Martians.',
    },
    {
      term: 'Curate',
      definition: 'A clergyman who assists a parish priest in the Church of England.',
    },
    {
      term: 'Artilleryman',
      definition: 'A soldier in the artillery, the branch of the army that fires large guns.',
    },
    {
      term: 'Heliograph',
      definition:
        'A signalling device that flashes sunlight with a mirror to send messages over long distances.',
    },
    {
      term: 'Ironclad',
      definition:
        'An armoured steam warship. The Thunder Child is a torpedo ram, built to strike enemy vessels with its reinforced bow.',
    },
    {
      term: 'Exodus',
      definition:
        'The mass departure of a people. The chapter title echoes the Book of Exodus, in which the Israelites flee Egypt.',
    },
    {
      term: 'Dethronement',
      definition:
        "The removal of a ruler from the throne. The narrator uses it for humanity's loss of its place at the top of creation.",
    },
    {
      term: 'Natural selection',
      definition:
        "Darwin's explanation of evolution: those best suited to their surroundings survive and pass on their traits. It explains both the Martians' form and their death.",
    },
    {
      term: 'Invasion literature',
      definition:
        'Late-Victorian fiction imagining a foreign invasion of Britain, begun by The Battle of Dorking (1871). Wells borrows and transforms the genre.',
    },
    {
      term: 'Commonweal',
      definition:
        'The common good. The Epilogue claims the invasion promoted “the commonweal of mankind”, a sense of humanity as one community.',
    },
  ],

  examPractice: {
    questions: [
      {
        question:
          'Read the extract from Book One, Chapter XVI, from “For the main road was a boiling stream of people” to the cry “Way! Way! The Martians are coming!” Using this extract and your knowledge of the whole novel, write about how Wells presents the breakdown of society at different points in The War of the Worlds.',
        skill:
          'Extract and whole-text response: language analysis, whole-text knowledge and context',
        guidance: [
          'Open with an overview: Wells presents civilisation as a thin layer of habit that fear strips away in days, and the extract is the moment the whole of London society becomes a crowd.',
          'Analyse the extract closely: the metaphors of water and fire (“a boiling stream”, “a torrent of human beings”), the lists of vehicles and people that erase class, and the repeated cries that replace conversation.',
          'Comment on structure in the extract: the lane as a small calm space beside the “stream”, and the brother pausing before being drawn in, “Irresistibly attracted”.',
          'Move to the wider novel: the complacent Friday night in Woking, the police “breaking the heads” of the crowd in London, the man crushed over his gold, the Chelmsford committee seizing the pony.',
          "Show that the breakdown reaches individuals too: the narrator's fight with the curate, and the artilleryman's plan to cast out the weak.",
          'Link to context: late-Victorian confidence in the Empire and in progress, invasion literature, and the Darwinian idea of the struggle for existence.',
          "End with a judgement: does Wells blame the people, or show that anyone would behave like this? Use the narrator's plea for “a wider charity” as evidence.",
        ],
      },
      {
        question:
          'Explore how Wells uses the curate and the artilleryman to present different human responses to catastrophe in The War of the Worlds.',
        skill: 'Whole-text essay: character, methods and context',
        guidance: [
          'Set up the contrast in your introduction: the curate responds with despair and religious panic, the artilleryman with a dream of survival, and the narrator measures himself against both.',
          "Analyse the curate's first appearance in Book One, Chapter XIII: his repeated questions, the Bible references, and the narrator's challenge that religion should not collapse “under calamity”.",
          "Trace his decline in the ruined house (Book Two, Chapters III and IV): the struggle over food, his confession that he ignored the poor, and the narrator's blow. Discuss how the narrator asks the reader to judge him.",
          'Turn to the artilleryman: the shaken survivor of Book One, Chapter XI, then the confident planner of Book Two, Chapter VII. Analyse the energy of his speech and the ugliness of its ideas about the weak.',
          'Show the turn: the tiny burrow, the cards and champagne, and the narrator seeing “the man plain”.',
          "Use context: Victorian religion and doubt after Darwin, and the army's reputation at the height of empire.",
          'Conclude by evaluating: are these two men failures, or honest pictures of what people do when their world ends?',
        ],
      },
      {
        question:
          "Compare the ways in which writers present the limits of human knowledge and power. Refer to The War of the Worlds and one other text you have studied from the Science and Society theme, and consider how the writers' contexts shape their work.",
        skill:
          'A-level comparative essay: comparison, methods, context and critical interpretation',
        guidance: [
          'Build a thesis that compares from the first sentence: for example, that Frankenstein warns against a single man reaching too far, while Wells shows the whole species discovering it was never as powerful as it believed.',
          "Compare narrative methods: Wells's retrospective memoir and documentary register against the other writer's narrative frame, and what each allows the reader to know.",
          'Compare how each text treats science: in Wells, human science is outclassed and then rescued by nature; set that against the use of science in your second text.',
          "Use Wells's contexts precisely: Huxley and Darwin, the Tasmanians passage and the Empire, Mars speculation in the 1890s, invasion literature.",
          'Bring in a critical perspective and test it: for example, the reading of the novel as a critique of imperialism, and the counter-argument that it still speaks the language of racial hierarchy.',
          'Keep both texts in every paragraph rather than writing two separate essays, and end with a judgement about which text is more pessimistic and why.',
        ],
      },
    ],
    tips: [
      'Do not retell the plot. Examiners know it; they want to see how Wells makes you feel and think. Every paragraph should name a method.',
      'Use the Tasmanians passage in Book One, Chapter I. It is the clearest link between the text and its imperial context, and many answers treat the Martians as simple monsters without it.',
      'Remember the narrator is writing afterwards. Commenting on hindsight (“the last civilised dinner”), foreshadowing and his corrections of other accounts lifts an answer from plot to structure.',
      'Treat the ending as an argument, not a trick: point out that Wells prepares it in the first sentence and with the red weed, and explain why humanity is given no victory.',
      "Name the real places and the suburban detail. Wells's method depends on the ordinary (trains, milkmen, ginger beer) meeting the alien, and quoting that detail is precise evidence.",
      "Keep “Martians” and “machines” distinct. The Martians are sluggish, heavy creatures; the terror comes from their machines, and the narrator's slowness to understand that is itself a point about human assumptions.",
    ],
  },

  modelAnswer: {
    question:
      'Explore how Wells uses the curate and the artilleryman to present different human responses to catastrophe in The War of the Worlds.',
    paragraph:
      "Wells uses the curate and the artilleryman as two failed answers to the question the narrator asks on first meeting the curate: “What are we?” The curate can only read the invasion through the Bible, crying “As if it were Sodom and Gomorrah!”, and the narrator's retort, “What good is religion if it collapses under calamity?”, suggests that Wells is testing not faith itself but a faith that expected God to protect a comfortable suburb. By the time they are trapped beside the pit, the curate's words have become “It is just, O God!”, a confession that “the poor were trodden in the dust, and I held my peace”, which arrives too late to be anything but dangerous noise. The artilleryman seems at first his opposite, a man “grim set on living” whose plan to live in the drains briefly makes the narrator believe in him. Yet the tunnel he has worked on for a week is “scarcely ten yards long”, and the narrator sees “the gulf between his dreams and his powers”. One man trusts God too much and the other trusts his own will; neither survives the narrator's judgement, which leaves the reader with the harder conclusion Wells has been building since the first chapter, that no human system, religious or military, was ready for what came.",
    commentary: [
      "It opens with an argument, not a summary: both characters are “failed answers” to the narrator's own question, which gives the paragraph a thesis to prove.",
      'Quotations are short, embedded and exact, and each one is analysed for what it shows rather than simply dropped in.',
      'It moves across the whole text, from Book One, Chapter XIII to the ruined house and Putney Hill, showing how both characters change.',
      "Context is woven in rather than bolted on: the phrase about “a comfortable suburb” connects the curate to the novel's attack on Victorian complacency.",
      "The final sentence evaluates, linking the two characters to the novel's larger argument about human limits, which is what distinguishes a top-band response.",
    ],
  },

  timeline: [
    {
      where: 'Book One, Chapter I',
      title: 'Watched from Mars',
      summary:
        "The narrator looks back six years to a time when no one imagined Mars was watching the Earth. Looking through the astronomer Ogilvy's telescope at Ottershaw, he sees a reddish flash of gas leave the planet; a flame is seen each night for ten nights, while Ogilvy scoffs at the idea of Martians.",
      setting: 'The observatory at Ottershaw, at night',
      who: ['The narrator', 'Ogilvy', 'The Martians'],
      quote: "intelligences greater than man's and yet as mortal as his own",
      themes: [
        'Complacency and human vulnerability',
        'Imperialism and colonialism',
        'Evolution and the struggle for existence',
      ],
      tension: 1,
      significance:
        "The opening sets the novel's argument: the Martians are to be judged as humans judge colonised peoples, and they are mortal.",
    },
    {
      where: 'Book One, Chapters II to IV',
      title: 'The cylinder opens',
      summary:
        'Ogilvy finds the “falling star” on Horsell Common: a huge, hot cylinder whose top is slowly unscrewing. Crowds gather through the day, and at sunset the lid falls away and a Martian heaves itself out, as big as a bear, while a young shop assistant who was pushed into the pit disappears.',
      setting: 'The sand-pits on Horsell Common, near Woking, at sunset',
      who: ['Ogilvy', 'The narrator', 'The Martians'],
      quote: 'it glistened like wet leather',
      themes: ['Complacency and human vulnerability', 'Science and technology'],
      tension: 3,
      significance:
        'The first sight of the Martians turns curiosity into disgust and fear, and shows how little humans expected.',
    },
    {
      where: 'Book One, Chapters V and VI',
      title: 'The Heat-Ray',
      summary:
        'A Deputation carrying a white flag, including Ogilvy, Stent and Henderson, walks towards the pit to show the Martians that humans are intelligent. An invisible beam of heat destroys them and sweeps across the common, killing nearly forty people, and the narrator flees towards home in blind panic.',
      setting: 'Horsell Common at dusk',
      who: ['The narrator', 'Ogilvy', 'The Martians'],
      quote: 'this invisible, inevitable sword of heat',
      themes: ['Science and technology', 'Imperialism and colonialism'],
      tension: 4,
      significance:
        'The attempt at communication fails at once, and the imbalance of power between the species becomes clear.',
    },
    {
      where: 'Book One, Chapter VII',
      title: 'The last civilised dinner',
      summary:
        "At home in Maybury the narrator tells his frightened wife that the Martians can barely move under Earth's gravity and that one shell will kill them all. Looking back, he compares his confidence to that of a dodo discussing the arrival of hungry sailors.",
      setting: "The narrator's dining room at Maybury, Woking",
      who: ['The narrator', "The narrator's wife"],
      quote: 'the last civilised dinner I was to eat for very many strange and terrible days',
      themes: ['Complacency and human vulnerability', 'Imperialism and colonialism'],
      tension: 2,
      significance:
        'Hindsight turns a calm domestic scene into dramatic irony, and the dodo makes the English the next species to be displaced.',
    },
    {
      where: 'Book One, Chapters IX and X',
      title: 'The fighting-machine in the storm',
      summary:
        "On Saturday the Heat-Ray reaches Maybury Hill, and the narrator drives his wife to her cousins at Leatherhead in a hired dog cart. Returning it that night in a thunderstorm, he sees the Martians' tripods for the first time, is thrown from the cart, and finds the cart's owner dead by the road.",
      setting: 'The road to Maybury Hill in a thunderstorm, at midnight',
      who: ['The narrator', "The narrator's wife", 'The Martians'],
      quote: 'A monstrous tripod, higher than many houses, striding over the young pine trees',
      themes: ['Science and technology', 'Complacency and human vulnerability'],
      tension: 4,
      significance:
        'The belief that the Martians are trapped in their pit collapses: they have built machines, and they can go anywhere.',
    },
    {
      where: 'Book One, Chapters XI and XII',
      title: 'Shepperton',
      summary:
        "A shaken artilleryman shelters in the narrator's house with news that his gun and its team were wiped out. Travelling north together, they reach the Thames at Shepperton, where the narrator, hiding in the river, sees a Martian destroyed by shellfire before the others turn the Heat-Ray on the town and he is badly scalded.",
      setting: 'The meeting of the Wey and the Thames at Shepperton',
      who: ['The narrator', 'The artilleryman', 'The Martians'],
      quote: 'The decapitated colossus reeled like a drunken giant',
      themes: ['Science and technology', 'Civilisation under pressure'],
      tension: 5,
      significance:
        "Humanity's one clear military success shows that the Martians can die, and is followed by devastation.",
    },
    {
      where: 'Book One, Chapter XIII',
      title: 'The curate',
      summary:
        'Drifting downstream in an abandoned boat, the narrator collapses on the bank and wakes beside a curate from Weybridge whose church has been destroyed. The curate sees the invasion as the end of the world, and the narrator angrily tells him that religion must not collapse in a disaster.',
      setting: 'Meadows beside the Thames near Halliford, at sunset',
      who: ['The narrator', 'The curate'],
      quote: 'He is not an insurance agent.',
      themes: ['Religion and faith', 'Civilisation under pressure'],
      tension: 3,
      significance:
        'The narrator gains the companion who will test his own sanity and morality in Book Two.',
    },
    {
      where: 'Book One, Chapters XIV to XVI',
      title: 'The exodus from London',
      summary:
        "In London the narrator's brother, a medical student, hears the news slowly until police wake the city in the small hours of Monday with the cry that the Martians are coming. The Black Smoke has smothered the guns, and he flees north, rescues Mrs Elphinstone and Miss Elphinstone from robbers, and forces a way across a road packed with refugees.",
      setting: 'London at dawn, then a crossroads south of Barnet choked with refugees',
      who: ["The narrator's brother", 'Mrs Elphinstone', 'Miss Elphinstone'],
      quote: 'that swift liquefaction of the social body',
      themes: ['Civilisation under pressure', 'Complacency and human vulnerability'],
      tension: 5,
      significance:
        'The novel widens from one man to a whole city, and shows how quickly order dissolves.',
    },
    {
      where: 'Book One, Chapter XVII',
      title: 'The Thunder Child',
      summary:
        'The brother and the Elphinstones reach the Essex coast and buy a passage on a paddle steamer. As Martians wade out towards the crowded shipping, the ironclad Thunder Child charges them without firing, brings down one Martian and, as she explodes, crushes a second, and the steamer escapes out to sea.',
      setting: 'The sea off the Essex coast, near the mouth of the Blackwater',
      who: ["The narrator's brother", 'Miss Elphinstone', 'Mrs Elphinstone', 'The Martians'],
      quote: 'coming to the rescue of the threatened shipping',
      themes: ['Science and technology', 'Civilisation under pressure'],
      tension: 5,
      significance:
        "The novel's one heroic human victory is also a sacrifice, and Book One ends with a mysterious shape in the sky raining darkness on the land.",
    },
    {
      where: 'Book Two, Chapters I to III',
      title: 'Buried beside the pit',
      summary:
        'The narrator and the curate try to reach Leatherhead, but the fifth cylinder lands beside the house where they shelter and buries them. Through a slit in the wall they watch the Martians assemble machines, and the narrator learns their secret when he sees a captured man lifted from a cage on a fighting-machine: the Martians live on human blood.',
      setting: 'A ruined house between Sheen and Mortlake, on the edge of a new Martian pit',
      who: ['The narrator', 'The curate', 'The Martians'],
      quote: 'the fifth shot from Mars, has struck this house and buried us under the ruins',
      themes: ['Evolution and the struggle for existence', 'Science and technology'],
      tension: 4,
      significance:
        'Humans are now the observed and the hunted, and the narrator studies the Martians as a scientist would study animals.',
    },
    {
      where: 'Book Two, Chapter IV',
      title: 'The death of the curate',
      summary:
        "As the narrator rations their food, the curate grows wild, raving that the invasion is God's punishment and threatening to shout for the Martians. When he makes for the kitchen crying that he must “bear my witness”, the narrator strikes him down with the butt of a meat chopper, and a Martian's tentacle drags the body away and searches the coal cellar where the narrator hides.",
      setting: 'The kitchen, scullery and coal cellar of the ruined house',
      who: ['The narrator', 'The curate', 'The Martians'],
      quote: 'I have been still too long',
      themes: ['Religion and faith', 'Civilisation under pressure'],
      tension: 5,
      significance:
        "The narrator's own civilised self breaks down, and he later asks the reader to judge him.",
    },
    {
      where: 'Book Two, Chapters V and VI',
      title: 'A red world',
      summary:
        'Alone and starving, the narrator waits until the pit falls silent. On the fifteenth day he climbs out to find the Martians gone and the land covered in red weed, and he realises he now lives as an animal lives among its masters.',
      setting: 'The empty pit and the Thames valley, overgrown with red weed',
      who: ['The narrator'],
      quote: 'the landscape, weird and lurid, of another planet',
      themes: ['Evolution and the struggle for existence', 'Imperialism and colonialism'],
      tension: 3,
      significance:
        'The “sense of dethronement” is the emotional centre of the novel, and the dying red weed quietly foreshadows the ending.',
    },
    {
      where: 'Book Two, Chapter VII',
      title: 'The man on Putney Hill',
      summary:
        "The narrator meets the artilleryman again, who declares that humanity is beaten and lays out a plan to live in the drains and one day capture the Martians' machines. The narrator is inspired, then sees how little digging has been done and leaves him to his champagne and cards.",
      setting: 'Putney Hill and the cellar of a house with a half-dug tunnel',
      who: ['The narrator', 'The artilleryman'],
      quote: 'the useless and cumbersome and mischievous have to die',
      themes: ['Civilisation under pressure', 'Evolution and the struggle for existence'],
      tension: 2,
      significance:
        "The artilleryman's vision of survival turns out to be a fantasy, and shows how quickly hope can become cruelty.",
    },
    {
      where: 'Book Two, Chapter VIII',
      title: 'Dead London',
      summary:
        "The narrator walks through an empty London towards a Martian howling in Regent's Park. Despairing, he walks towards another Martian on Primrose Hill meaning to let it kill him, and finds instead that the Martians are dead, killed by the bacteria of the Earth.",
      setting: "Deserted London and the Martians' great redoubt on Primrose Hill, at dawn",
      who: ['The narrator', 'The Martians'],
      quote: 'Ulla, ulla, ulla, ulla',
      themes: ['Evolution and the struggle for existence', 'Religion and faith'],
      tension: 4,
      significance:
        'The climax denies humanity a victory: the invaders are defeated by the humblest life on the planet.',
    },
    {
      where: 'Book Two, Chapters IX and X',
      title: 'Homecoming and epilogue',
      summary:
        'After three days lost in a breakdown, the narrator is told Leatherhead was destroyed, but returns to his house in Woking, where his wife and cousin, who have also come back, find him. The Epilogue discusses what science has learned and warns that the Martians may try again.',
      setting: "The narrator's house at Maybury, Woking, and his study years later",
      who: ['The narrator', "The narrator's wife"],
      quote: 'she has counted me, among the dead',
      themes: ['Complacency and human vulnerability', 'Science and technology'],
      tension: 2,
      significance:
        'The private reunion ends the story, but the lost sense of security does not return.',
    },
  ],

  relationships: [
    {
      from: 'The narrator',
      to: "The narrator's wife",
      kind: 'husband and wife',
      note: 'Separated after he leaves her at Leatherhead, each assumes the other is dead. Her early fear is proved right, and their reunion is the only private happiness the novel allows.',
    },
    {
      from: 'The narrator',
      to: 'The curate',
      kind: 'forced companions',
      note: "Thrown together by chance, they come to loathe each other in the ruined house. The curate is the narrator's foil, and their conflict ends in the narrator's blow.",
    },
    {
      from: 'The narrator',
      to: 'The artilleryman',
      kind: 'fellow survivors',
      note: "First the narrator shelters a shaken soldier; later the soldier's plan briefly carries the narrator away, until he sees the gap between the man's dreams and his powers.",
    },
    {
      from: 'The narrator',
      to: "The narrator's brother",
      kind: 'brothers',
      note: "The narrator retells his brother's escape, so the two accounts together show one man's ordeal and a nation's.",
    },
    {
      from: "The narrator's brother",
      to: 'Miss Elphinstone',
      kind: 'fellow fugitives',
      note: 'He rescues her and she rescues him with her revolver. Their partnership, based on mutual courage, is one of the few examples of co-operation in the novel.',
    },
    {
      from: 'Miss Elphinstone',
      to: 'Mrs Elphinstone',
      kind: 'sisters-in-law',
      note: 'One calm and practical, the other panicked and longing for home: Wells uses them to show opposite responses to the same danger.',
    },
    {
      from: 'The narrator',
      to: 'Ogilvy',
      kind: 'acquaintances',
      note: 'Ogilvy shows the narrator Mars and scoffs at the idea that anything manlike lives there. His death with the Deputation is the first sign of how wrong human confidence is.',
    },
    {
      from: 'The Martians',
      to: 'The narrator',
      kind: 'hunters and hunted',
      note: 'The Martians watch the Earth from space; in Book Two the narrator watches them through a slit in the wall. The reversal turns him from victim into observer, and the novel into a study of one species by another.',
    },
  ],

  compareWith: [
    {
      title: 'Frankenstein',
      href: '/revision/texts/frankenstein',
      reason:
        "The other pre-1900 novel in Edexcel's Science and Society theme: both novels ask what happens when intelligence outruns feeling, and both reach the reader through first-person accounts.",
    },
    {
      title: 'Never Let Me Go',
      href: '/revision/texts/never-let-me-go',
      reason:
        "In the same Edexcel theme: a quiet modern novel about people treated as a resource by those with power over them, which sharpens Wells's picture of humans kept and fed upon by the Martians.",
    },
    {
      title: 'Strange Case of Dr Jekyll and Mr Hyde',
      href: '/revision/texts/jekyll-and-hyde',
      reason:
        'Beside Wells on the Eduqas 19th-century list: another late-Victorian story in which respectable, civilised life turns out to cover something violent.',
    },
  ],

  contentGuidance: [
    'violence',
    'mortality',
    'mental_health',
    'colonialism',
    'discrimination',
    'mythological_religious',
  ],

  // Quoted in the prose above but not the novel's own words, so the held-edition
  // check skips them. Each was checked at the source named beside it.
  quotesFromElsewhere: [
    // The title of Book One. The novel's, but printed before the first chapter,
    // which the held byte copy does not include. Gutenberg plain text and Wikisource.
    'The Coming of the Martians',
    // The dedication to Frank Wells. Checked in the Harper & Brothers printing
    // scanned at Wikisource (a later printing, not the 1898 Heinemann first
    // edition, which carries the same dedication).
    'this rendering of his idea',
    // Wells's Experiment in Autobiography (1934). Wikipedia quotes it, but it was
    // checked in the autobiography's own text: "Later on I wheeled about the
    // district marking down suitable places and people for destruction by my
    // Martians", in the passage on the Maybury Road house (archive.org scan).
    'wheeled about the district marking down suitable places and people for destruction by my Martians',
    // Wells's 1893 essay. The Encyclopedia of Science Fiction.
    'The Man of the Year Million',
    // Darwin's title for Chapter III of On the Origin of Species (1859), quoted in
    // the context entry. The novel happens to use the same three words, which is
    // why the held-edition check passed it, but here they are Darwin's, not
    // Wells's. Project Gutenberg #1228, the first edition.
    'Struggle for Existence',
    // The English rendering of Schiaparelli's canali, quoted in the context entry
    // "Mars in the news". Not a word of the novel, which never uses the plural:
    // it has only the canal at Woking, the Regent's Canal and, once, a
    // "recipient canal" in the Martians' anatomy. A single word, so the
    // held-edition check, which
    // skips spans under two words, could not have caught it. Wikipedia, Martian canals.
    'canals',
    // Byron's poem (1815), cited in the notes on the Primrose Hill extract.
    'The Destruction of Sennacherib',
    // The model answer's own words, quoted back in its commentary.
    'failed answers',
    'a comfortable suburb',
  ],

  sources: [
    {
      label:
        'The War of the Worlds, Project Gutenberg eBook #36: the edition held as a byte copy in src/data/full-texts, from which every quotation was copied and checked, with its speaker and chapter, by reading the whole novel',
      url: 'https://www.gutenberg.org/ebooks/36',
    },
    {
      label:
        'Project Gutenberg #36 plain text: the Kepler epigraph and the titles of Book One and Book Two',
      url: 'https://www.gutenberg.org/cache/epub/36/pg36.txt',
    },
    {
      label:
        'Wikisource, The War of the Worlds (a scanned Harper & Brothers printing, later than 1898): dedication to Frank Wells, epigraph, and book titles, confirming Gutenberg',
      url: 'https://en.wikisource.org/wiki/The_War_of_the_Worlds_(1898)',
    },
    {
      label:
        "Wikipedia, The War of the Worlds: serialisation in Pearson's Magazine April to December 1897; Heinemann 1898; the Tasmanians; Woking; Wells's autobiography quotation; invasion literature and The Battle of Dorking; Schiaparelli and Lowell; Huxley",
      url: 'https://en.wikipedia.org/wiki/The_War_of_the_Worlds',
    },
    {
      label:
        'Wikipedia, H. G. Wells: birth, death, 1884 scholarship to the Normal School of Science, Huxley, move to Woking in 1895 and marriage that October, dates of the early novels',
      url: 'https://en.wikipedia.org/wiki/H._G._Wells',
    },
    {
      label:
        'EBSCO Research Starters, H. G. Wells: joined the Fabian Society in 1903, a membership that lasted five years',
      url: 'https://www.ebsco.com/research-starters/history/h-g-wells',
    },
    {
      label:
        'JSTOR Daily, “What The War of the Worlds Had to Do with Tasmania”: the Tasmanians passage and imperial context',
      url: 'https://daily.jstor.org/what-the-war-of-the-world-had-to-do-with-tasmania',
    },
    {
      label:
        'The Martian Diaries, The War of the Worlds story: dedication to Frank Wells and the Tasmania conversation (details of the exact words vary between sources, so the guide does not quote them)',
      url: 'https://www.martiandiaries.com/The-War-of-the-Worlds-story',
    },
    {
      label:
        "Deakin University, Invasion! the literature of anxiety: The Battle of Dorking, Blackwood's Magazine, May 1871",
      url: 'https://fusion.deakin.edu.au/exhibits/show/invasionliterature/battle_dorking',
    },
    {
      label:
        'Wikipedia, Shah Jahan Mosque, Woking: built 1889 for the Oriental Institute, and its appearance in the novel',
      url: 'https://en.wikipedia.org/wiki/Shah_Jahan_Mosque,_Woking',
    },
    {
      label:
        'Wikipedia, Diamond Jubilee of Queen Victoria: 22 June 1897, the Festival of the British Empire',
      url: 'https://en.wikipedia.org/wiki/Diamond_Jubilee_of_Queen_Victoria',
    },
    {
      label:
        'Wikipedia, Struggle for existence: the title of the third chapter of On the Origin of Species (1859)',
      url: 'https://en.wikipedia.org/wiki/Struggle_for_existence',
    },
    {
      label:
        'The Encyclopedia of Science Fiction, Wells, H G: “The Man of the Year Million” (1893), which the narrator refers to in Book Two, Chapter II',
      url: 'https://sf-encyclopedia.com/entry/wells_h_g',
    },
    {
      label:
        "Space.com, “Mars: A History of False Impressions”: Schiaparelli's canali (1877) and Lowell's Mars (1895)",
      url: 'https://www.space.com/1583-mars-history-false-impressions.html',
    },
    {
      label:
        'OCR, GCSE (9-1) English Literature J352 candidate style answers, Component 1 Section B: 19th century prose, The War of the Worlds (confirms the text is set, and the extract-plus-wider-text style)',
      url: 'https://www.ocr.org.uk/Images/301205-the-war-of-the-worlds-candidate-style-answers.pdf',
    },
    {
      label:
        'WJEC Eduqas, GCSE English Literature Component 2 Section B exemplar: War of the Worlds extract question and indicative content',
      url: 'https://www.wjec.co.uk/media/xovpmv10/19-century-exemplar.pdf',
    },
    {
      label:
        "Pearson Edexcel, A level English Literature Component 2 Prose text support (2021): The War of the Worlds as the pre-1900 text in the Science and Society theme with Frankenstein, Never Let Me Go and The Handmaid's Tale",
      url: 'https://qualifications.pearson.com/content/dam/pdf/A%20Level/English%20Literature/2015/teaching-and-learning-materials/GCELit_Prose_texts_support_forwebsite.pdf',
    },
    {
      label:
        'WJEC Eduqas exemplar (above), read for the extracts: its question on fear of the unknown prints the first sight of the Martians in Book One, Chapter IV, and the candidate scripts confirm the extract opens at “A sudden chill came over me” (where it ends is not stated, so the guide does not say)',
      url: 'https://www.wjec.co.uk/media/xovpmv10/19-century-exemplar.pdf',
    },
    {
      label:
        'Bible Gateway, 2 Kings 19:35 (KJV): the angel of the Lord destroys the Assyrian army in one night, the story behind the Sennacherib allusion in Book Two, Chapter VIII',
      url: 'https://www.biblegateway.com/passage/?search=2%20Kings%2019%3A35&version=KJV',
    },
    {
      label:
        "Wikipedia, The Destruction of Sennacherib: Byron's poem, first published in Hebrew Melodies (1815), retelling 2 Kings 18-19 and Isaiah 36-37",
      url: 'https://en.wikipedia.org/wiki/The_Destruction_of_Sennacherib',
    },
    {
      label:
        'Project Gutenberg #1228, On the Origin of Species (1859, first edition): Chapter III is titled “Struggle for Existence”',
      url: 'https://www.gutenberg.org/ebooks/1228',
    },
    {
      label:
        'Wikipedia, Martian canals: Schiaparelli’s canali (1877), rendered in English as “canals”; Lowell’s Mars (1895)',
      url: 'https://en.wikipedia.org/wiki/Martian_canals',
    },
    {
      label:
        'H. G. Wells, Experiment in Autobiography (1934), volume 2, archive.org scan: the Maybury Road house in Woking, and “Later on I wheeled about the district marking down suitable places and people for destruction by my Martians”',
      url: 'https://archive.org/details/dli.ministry.02032',
    },
    {
      label:
        'Bible Gateway, Genesis 25:29-34 (KJV): Esau sells his birthright to Jacob, for the note on “birthright” in Book Two, Chapter VIII',
      url: 'https://www.biblegateway.com/passage/?search=Genesis%2025%3A29-34&version=KJV',
    },
  ],
}
