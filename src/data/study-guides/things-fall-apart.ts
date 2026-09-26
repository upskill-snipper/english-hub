import type { StudyGuide } from '@/lib/study-guides/types'

/**
 * Things Fall Apart, Chinua Achebe (1958). A SUPPLEMENT: the page at
 * /revision/texts/things-fall-apart already carries the overview, context,
 * themes, characters and key quotations, so this file adds what it lacked:
 * passages for close reading, language analysis, structure and form, a
 * glossary, exam practice and a model paragraph, plus the timeline and
 * character map that the animated visuals draw. Timeline theme names are the
 * native page's theme titles, word for word.
 *
 * THE NOVEL IS IN COPYRIGHT and no licensed copy is held here, so the guide
 * test cannot check these quotations. How they were checked:
 * - 25 September 2026, first draft: located by chapter in a scanned US
 *   (Anchor Books) edition.
 * - 26 September 2026, fact-check: every quotation and plot fact re-checked
 *   against the UK editions through the Internet Archive full-text index
 *   (Open Library "search inside"), chiefly the Penguin Red Classics scan of
 *   2006 (ISBN 0141023384, the edition Pearson recommends), with the Penguin
 *   2001 and Heinemann 1994 and 2000 scans. Chapter placement was fixed from
 *   the chapter openings those scans print ("Chapter Eight Okonkwo did not
 *   taste any food...") and the context either side of each quotation.
 *
 * WHAT THE FACT-CHECK CHANGED. The first draft said no quotation here
 * contained a word spelt differently in the US and UK editions. Three did:
 * - UK editions print "matchet" where US editions print "machete": "Dazed
 *   with fear, Okonkwo drew his matchet and cut him down", "In a flash
 *   Okonkwo drew his matchet", and the efulefu image of a man who "sold his
 *   matchet". A student quoting from the Penguin set text would have been
 *   taught the US spelling.
 * - UK editions print "like a fish on to a dry, sandy beach"; US "onto".
 * The guide's own prose still says machete, which is the ordinary British
 * spelling today; a tip tells the student which spelling each edition uses.
 * Also changed: the claim that Achebe "decided to become a writer" because of
 * Joyce Cary's Mister Johnson (sources disagree; the model answer now says
 * only what the Mister Johnson article supports); "four lines" of Yeats as
 * the epigraph (not confirmed; the epigraph itself is); "about three-fifths"
 * for Part One (now "more than half", from the Penguin pagination: Chapter 13
 * has begun by page 113 and the last chapter by page 195); Unoka laughing at
 * Okoye (not found); the court messengers "beat" the leaders in Chapter 23
 * (the text has the prisoners' heads shaved, and the messengers taunt them
 * and knock their heads together); the District Commissioner
 * "appears in person in Chapters 23 to 25" and is "never named" (he is not in
 * Chapter 24, and the second claim could not be proved from here).
 *
 * SECOND FACT-CHECK, 26 September 2026, same index, context words checked
 * around every match. Fixed: the ozo entry said Okonkwo was glad the clan
 * held the title "in high esteem" (not in the text; Obierika's regret is
 * about the rule that stops a titled man tapping the tall palm trees, and
 * Okonkwo answers that the law must be obeyed); the Chapter 7 summary gave
 * Ikemefuna a "three-year-old sister" (she was three when he left and
 * would now be six); the note on the deathly silence said the boy did not
 * know (the text says he somehow knew he would not see his mother and
 * sister again); the
 * Chapter 23 summary had the messengers shaving the heads (the text shows
 * the heads shaved without saying by whom); an exam point put Chapter 17 in
 * Part Three (it is Part Two); Unoka, dead before the story opens, was
 * listed as present in Chapter 2, and Okonkwo was listed at the Chapter 22
 * unmasking and burning, where the summary does not place him.
 *
 * ERRORS FOUND ON THE PAGES ABOVE THIS ONE, recorded so the next editor fixes
 * them and does not copy them (each checked in the Penguin 2006 scan):
 * - "He was afraid of being thought weak" is Chapter 7, at Ikemefuna's
 *   death, not Chapter 2 (page.tsx, key-quotes, characters, themes).
 * - "When did you become a shivering old woman" is Chapter 8, not Chapter 7.
 * - "He could hardly imagine that Okonkwo was not his real father" is
 *   Chapter 7, Ikemefuna's thought on the walk into the forest, not Chapter 4.
 * - "Does the white man understand our custom about land?" is Okonkwo's
 *   question in Chapter 20, and Obierika answers it with the speech that
 *   ends "we have fallen apart" (Okonkwo's next line is tagged "asked
 *   Okonkwo"). The characters page gives the question to Obierika.
 * - "Ekwefi had suffered a great deal in her life" is not in the novel.
 *   Chapter 9 has "a good deal in her life".
 * - "She understood things" is Chapter 20 ("She understood things so
 *   perfectly"), not Chapter 11. "He remembered this period very vaguely"
 *   and "a constant point of sorrow" return nothing in any scanned edition.
 * - The page quotes a Chapter 1 sentence as "Among the Igbo"; every UK and
 *   US edition prints "Among the Ibo". Only study guides print "Igbo" there.
 * - The themes page puts Mr Brown's conversations with Akunna in Part Two.
 *   They are in Chapter 21, Part Three.
 */
export const guide: StudyGuide = {
  slug: 'things-fall-apart',
  title: 'Things Fall Apart',
  author: 'Chinua Achebe',
  form: 'novel',
  scope:
    'The whole novel (1958): twenty-five chapters in three parts. It is set for Pearson Edexcel International GCSE English Literature as one of the modern prose texts, a closed-book examination in which you answer one essay question from a choice of two, and the questions test your knowledge of the novel and its context. It is also set for Cambridge IGCSE Literature in English (0475) as a prose text for examination in 2026 and 2027, again closed book, with a choice of two questions on the novel; any passage a question is based on is printed in the paper. Chapter references here work in any edition.',
  rights: {
    status: 'copyright',
    acknowledgement:
      '© Chinua Achebe 1958. First published by William Heinemann Ltd, 1958. The edition Pearson recommends for the International GCSE is the Penguin Red Classics paperback (January 2006, ISBN 9780141023380). Short quotations are used for the purposes of criticism and review.',
  },
  workLength: {
    words: 50000,
    basis:
      'Approximate. The first draft counted about 51,000 words in a scanned US edition, headings and page numbers included; the page above this one also gives about 50,000 words. Any length above 3,000 words puts the novel under the long-work limit, so the rounding cannot loosen the quotation limits.',
  },

  native: {
    overview: '/revision/texts/things-fall-apart',
    context: '/revision/texts/things-fall-apart',
    themes: '/revision/texts/things-fall-apart',
    characters: '/revision/texts/things-fall-apart',
    keyQuotes: '/revision/texts/things-fall-apart',
  },

  extracts: [
    {
      title: 'Unoka and Okoye: the kola and the chalk lines',
      where: 'Chapter 1, Part One',
      pointer:
        'From “Unoka, the grown-up, was a failure.” to “Okoye rolled his goatskin and departed.” It sits in the middle of the chapter, straight after the memory of Unoka as a boy welcoming the kites back from their journey.',
      summary:
        "Okonkwo's father, Unoka, is poor, in debt and laughed at, yet he always manages to borrow more. His neighbour Okoye, also a musician, is about to take the Idemili title, an expensive ceremony, which is why he has come. Unoka offers him kola, and the two men talk about the rains, the next ancestral feast and the impending war with Mbaino, until Unoka steers the talk to music. Okoye then asks, through a long run of proverbs, for the two hundred cowries Unoka borrowed from him more than two years before. Unoka points to the lines of chalk on his wall that record his debts and says he will pay his big debts first. Okoye leaves.",
      annotations: [
        {
          phrase: 'Unoka, the grown-up, was a failure',
          note: "The flat verdict comes straight after a tender memory of Unoka as a boy. Setting the two side by side can make the judgement sound like the clan's rather than the narrator's, and it quietly invites the reader to question it.",
        },
        {
          phrase: 'He who brings kola brings life',
          note: 'Okoye answers the offer of kola with a saying that turns it into a blessing. Before any business is done the men perform a courtesy with its own words, which shows from the first chapter that this society runs on shared ritual and values.',
        },
        {
          phrase: 'proverbs are the palm-oil with which words are eaten',
          note: 'The narrator steps out of the scene to explain the custom to a reader who may not know it, and does so in an image of food. Talk is to be savoured, not hurried, and the sentence practises the art it describes.',
        },
        {
          phrase: 'skirting round the subject and then hitting it finally',
          note: 'Indirectness is presented as a skill, not a failure to get to the point. Remember it in Chapter 25, where the District Commissioner finds exactly this habit infuriating.',
        },
        {
          phrase: 'there was sorrow and grief there',
          note: "The narrator hears in Unoka's flute what the clan does not see in the man. It is an early sign that the novel is gentler towards Unoka than his son is, and that a man judged a failure can still have depth.",
        },
      ],
      question:
        'How does Achebe present Unoka, and the customs of Umuofia, in this passage? Refer closely to the language of the passage.',
    },
    {
      title: 'The killing of Ikemefuna',
      where: 'Chapter 7, Part One',
      pointer:
        'From the day after Ikemefuna is told he is going home, when the men set out with him carrying a pot of wine, to the end of the chapter, where Nwoye knows as soon as his father walks in that Ikemefuna has been killed.',
      summary:
        "Umuofia has decided, on the word of the Oracle of the Hills and the Caves, that Ikemefuna must die, and Ogbuefi Ezeudu has warned Okonkwo not to take part. Ikemefuna has been told he is going home. The men walk deep into the forest with the boy carrying the wine. He thinks of his mother and of his little sister, who would be six by now, and plays a childhood song-game in his head to settle whether his mother is alive. When one of the men raises his machete, Okonkwo looks away; the boy runs to him calling him father, and Okonkwo cuts him down. The chapter ends with Nwoye's grief, and his memory of hearing an abandoned infant crying in the forest.",
      annotations: [
        {
          phrase: "A deathly silence descended on Okonkwo's compound.",
          note: 'The household knows what the boy has only half guessed. The adjective deathly anticipates the end of the journey, and the silence of a family that cannot speak is the first sign that the killing is felt as a wrong even by people who accept it.',
        },
        {
          phrase: 'He could hardly imagine that Okonkwo was not his real father.',
          note: "Achebe moves into Ikemefuna's mind at the worst possible moment, so the reader shares his trust in the man walking behind him. The thought comes on the walk itself, which is why it hurts so much.",
        },
        {
          phrase: 'My father, they have killed me',
          note: 'The boy runs for help to the very man who will kill him. The word father condenses three years of family life into one cry, and the scene turns on it.',
        },
        {
          phrase: 'Dazed with fear, Okonkwo drew his matchet and cut him down.',
          note: 'The narration refuses to linger: one plain sentence, no description, no thought from Okonkwo. The opening phrase matters most, because it names fear, not courage or duty, as the cause of the act. UK editions spell the weapon matchet; US editions print machete.',
        },
        {
          phrase: 'He was afraid of being thought weak.',
          note: "Seven words that explain the tragedy. The passive being thought shows Okonkwo fearing other men's judgement more than the act itself. The sentence belongs here, at the killing in Chapter 7; it is often wrongly cited as Chapter 2.",
        },
        {
          phrase: 'like the snapping of a tightened bow',
          note: "Nwoye's grief is pictured through an image from the hunter's world, a bow under strain that finally breaks. It marks the moment he begins to move away from his father, and Achebe links it at once to the infant left crying in the forest.",
        },
      ],
      question:
        'How does Achebe make this such a shocking and significant moment in the novel? Refer closely to the passage.',
    },
    {
      title: 'The ending: the District Commissioner at the tree',
      where: 'Chapter 25, Part Three (the final chapter)',
      pointer:
        "The whole of the short final chapter, from the District Commissioner arriving at Okonkwo's compound at the head of an armed band to the last words of the novel, the title of the book he plans to write.",
      summary:
        "The Commissioner comes to arrest Okonkwo for killing the head messenger. Obierika and a few others lead him to a small bush behind the compound, where Okonkwo has hanged himself. The men explain that their custom forbids clansmen to touch the body of a man who has taken his own life, so they ask the Commissioner's men to take it down, because they are strangers. Obierika turns on the Commissioner and blames him for his friend's death, then cannot go on, and a messenger orders him to be quiet. The Commissioner leaves the task to his chief messenger and walks away thinking about his book, in which Okonkwo's story might earn a paragraph.",
      annotations: [
        {
          phrase: 'their love of superfluous words',
          note: "Here the narration moves into the Commissioner's thoughts, and it condemns the very habit Chapter 1 celebrated. Obierika's words were not superfluous at all; the Commissioner simply could not hear what they meant.",
        },
        {
          phrase: 'The resolute administrator in him gave way to the student of primitive customs.',
          note: 'The sentence is ironic. At the tree, with Okonkwo’s body in front of him, the Commissioner becomes curious rather than moved: Okonkwo has turned into material. The word primitive is his, and the novel has spent twenty-four chapters showing how wrong it is.',
        },
        {
          phrase: 'It is an abomination for a man to take his own life.',
          note: "Okonkwo, who feared all his life being thought weak, ends by breaking one of his clan's gravest laws. The clan's customs still bind its people at the moment its power has gone, which makes the ending doubly tragic.",
        },
        {
          phrase: 'That man was one of the greatest men in Umuofia.',
          note: "Obierika insists on Okonkwo's greatness, speaking for the clan and for the reader. His voice fails him, and a messenger's order to be quiet shows who now controls speech in Umuofia.",
        },
        {
          phrase: 'now he will be buried like a dog',
          note: 'The simile states the humiliation plainly. A great man who cannot be buried by his own kinsmen is the final picture of a society whose order has been broken from outside.',
        },
        {
          phrase: 'a reasonable paragraph, at any rate',
          note: "The reader has just finished twenty-five chapters about Okonkwo; the Commissioner would give him a paragraph. The gap between the two is Achebe's point about who has the power to tell African stories.",
        },
        {
          phrase: 'The Pacification of the Primitive Tribes of the Lower Niger',
          note: 'The last words of the novel belong to the coloniser, and each is a euphemism or an insult: pacification for conquest, primitive tribes for a society the novel has shown in full. Ending on them leaves the reader to reject them.',
        },
      ],
      question:
        'How does Achebe make the ending of the novel so powerful and disturbing? Refer closely to the passage.',
    },
  ],

  languageAnalysis: [
    {
      technique: 'Proverbs as argument',
      example:
        'The narrator’s definition in Chapter 1, “proverbs are the palm-oil with which words are eaten”; Okika’s warning to the assembly in Chapter 24, remembered from his father, about “a toad jumping in broad daylight”.',
      effect:
        'Proverbs show a culture with its own wisdom and its own rhetoric, which answers the colonial claim that it had neither. They also do work in the plot: speakers use them to persuade, to soften a demand, or, like Okika, to warn that the clan’s life is under threat. They can justify as well as illuminate: in Chapter 8 Okonkwo defends his part in Ikemefuna’s death to Obierika with a proverb about a mother putting hot yam into her child’s palm, and Obierika agrees with the proverb while refusing its conclusion.',
    },
    {
      technique: 'Similes drawn from the Igbo world',
      example:
        'After Ikemefuna’s death Okonkwo feels “like a drunken giant walking with the limbs of a mosquito” (Chapter 8). In exile he has been cast out of his clan “like a fish on to a dry, sandy beach” (Chapter 14).',
      effect:
        'Achebe’s comparisons come from farm, forest, river and village rather than from European literature, so the reader sees through the characters’ own frame of reference. The giant with a mosquito’s limbs is almost comic, which makes it more painful: the greatest wrestler in the nine villages has been undone by a grief he will not admit. The fish on the sand, panting, turns exile into a struggle to breathe.',
    },
    {
      technique: 'Fire imagery for Okonkwo',
      example:
        'Okonkwo is known as the “Roaring Flame” and tells himself “He was a flaming fire” before judging his son: “Living fire begets cold, impotent ash.” (Chapter 17). In Chapter 24 a crowd falls silent “as though cold water had been poured on a roaring flame”.',
      effect:
        'Fire is energy, but it consumes what it touches and leaves ash. Okonkwo’s own metaphor turns against him: the novel suggests that his fierceness is what burned away his bond with Nwoye, so the ash is his doing, not a failure of inheritance. One reading of the image in Chapter 24, used just before Okonkwo’s last act of defiance, is that it quietly anticipates his fire being put out.',
    },
    {
      technique: 'Restraint in describing violence',
      example:
        'Ikemefuna’s death takes a single sentence: “Dazed with fear, Okonkwo drew his matchet and cut him down.” (Chapter 7). The killing of the head messenger in Chapter 24 is almost as brief, and it begins “In a flash Okonkwo drew his matchet”.',
      effect:
        'Achebe does not dramatise the violence or enter Okonkwo’s mind as he acts. The flatness leaves the reader to supply the horror, and the repeated action links the two killings: the first done for fear of the clan’s judgement, the second done for the clan, which then fails to follow him.',
    },
    {
      technique: 'An ironic narrative voice (free indirect style)',
      example:
        'In Chapter 4 “Okonkwo was provoked to justifiable anger” when his youngest wife was late home to cook; in Chapter 25 the District Commissioner is irritated by the people’s “love of superfluous words”.',
      effect:
        'The narrator often reports a character’s view in the narrator’s own words. Justifiable is Okonkwo’s judgement, not Achebe’s, since the anger ends in a beating during the sacred Week of Peace. The same method in the last chapter lets the Commissioner condemn himself: we hear his contempt in his own terms, and judge it.',
    },
    {
      technique: 'Igbo words, and the stories inside the story',
      example:
        'Chi, obi, egwugwu and efulefu are left in Igbo, and the narrator explains the image behind efulefu as “a man who sold his matchet and wore the sheath to battle” (Chapter 16). Nwoye prefers his mother’s tales of the tortoise and of Earth and Sky to his father’s “masculine stories of violence and bloodshed” (Chapter 7).',
      effect:
        'Leaving Igbo words untranslated asks the reader to learn the culture’s own terms rather than have them converted into English equivalents. The embedded folk tales show an oral culture that teaches through story, and they are divided by gender: Okonkwo dismisses his mother’s tale of Mosquito and Ear as “as silly as all women’s stories” (Chapter 9), which tells us more about him than about the tale.',
    },
    {
      technique: 'Sound, rhythm and call and response',
      example:
        'Chapter 13 opens with the sound of the ekwe, the wooden drum, “Go-di-di-go-go-di-go”, carrying news of a death. At the great meetings a speaker bellows “Umuofia kwenu” and the crowd roars back: the orator Ogbuefi Ezeugo in Chapter 2, turning to face a different direction each time; the leading egwugwu, Evil Forest, at the trial in Chapter 10; and the salutes before and by Okika in Chapter 24.',
      effect:
        'The novel brings the sounds of an oral, musical culture onto the page: drums that carry messages, songs, greetings shouted to the whole clan. It gives the community a collective voice, which makes its breaking in Part Three, when the clan no longer speaks as one, something the reader hears as well as sees.',
    },
  ],

  structureForm: [
    {
      heading: 'Three parts, unequal by design',
      body: 'Part One (Chapters 1 to 13) takes thirteen of the twenty-five chapters and more than half the book, and shows Umuofia before any European appears in it. Part Two (Chapters 14 to 19) covers the seven years of exile in Mbanta, when the missionaries arrive. Part Three (Chapters 20 to 25) is the return and the collapse. The proportions are an argument. Achebe builds a whole society, with its law, religion, farming year, marriages, disputes and stories, before anything threatens it, so the reader knows exactly what is lost. Some readers find Part One slow; the more convincing view is that the slowness is the point, and that the short, fast later parts make the speed of change felt.',
    },
    {
      heading: 'Three openings that trace a fall',
      body: 'Each part begins with a sentence about Okonkwo’s place in a community. Part One: “Okonkwo was well known throughout the nine villages and even beyond.” Part Two: “Okonkwo was well received by his mother’s kinsmen in Mbanta.” Part Three: “Seven years was a long time to be away from one’s clan.” Read together they move from fame, to hospitality as a guest, to absence, and Chapter 20 goes on to say that as soon as he left, “someone else rose and filled it”. The structure tells Okonkwo’s story before the plot does.',
    },
    {
      heading: 'Episodes and the farming year',
      body: 'Part One moves by seasons and ceremonies rather than by a single line of plot: the Week of Peace, the New Yam Festival, the wrestling match, the locusts, the bride-price and the uri, the funeral. This episodic shape resembles oral storytelling, and it means that what might look like digressions are the substance of the book. A thread of tension runs through it all the same. Ikemefuna arrives in Chapter 2 and is killed in Chapter 7, and the last paragraph of Chapter 1 has already called him “the doomed lad”, so every happy scene with him is read in the shadow of that knowledge.',
    },
    {
      heading: 'Echoes and foreshadowing',
      body: 'Achebe plants moments that return. Ogbuefi Ezeudu’s warning not to take part in Ikemefuna’s death (Chapter 7) comes back to Okonkwo when Ezeudu dies (Chapter 13), and it is at Ezeudu’s funeral that Okonkwo’s gun explodes and kills the old man’s sixteen-year-old son. Okonkwo draws his machete to kill in Chapter 7 and again in Chapter 24. Obierika’s account of Abame, wiped out after its people killed a white man (Chapter 15), warns of what resistance will cost. Many readers also see the locusts that descend on Umuofia in Chapter 7, welcomed and eaten as a delicacy, as a foreshadowing of the Europeans who will arrive in numbers; that is an interpretation, not something the novel states, but it is well supported by where the episode is placed.',
    },
    {
      heading: 'A tragic hero',
      body: 'The novel has the shape of a classical tragedy: a great man, admired by his people, falls through a flaw in his own character and through forces larger than himself, and his death is his own act. Achebe gives the fall two causes and keeps both in view. Okonkwo’s fear of weakness drives him to kill Ikemefuna and to drive Nwoye away long before any missionary arrives; colonial power then removes the world in which his kind of strength made sense. Using a form associated with European literature for an Igbo farmer and wrestler is itself a claim that his life has tragic dignity.',
    },
    {
      heading: 'Who tells the story, and who gets the last word',
      body: 'The third-person narrator knows the community from the inside but explains it for an outsider, and sometimes speaks of the clan at a slight distance: “among these people a man was judged according to his worth” (Chapter 1). In the final chapter the same two words, “these people”, turn up in the District Commissioner’s thoughts, this time with contempt. The narrative voice stays in his mind for the closing paragraphs, so the novel ends inside the head of the coloniser. The effect is to make the reader weigh the two accounts: the twenty-five chapters just read, and the single paragraph he plans.',
    },
    {
      heading: 'The title and the epigraph',
      body: 'The novel takes its title, and its epigraph, from W. B. Yeats’s poem The Second Coming (1919), a vision of a world whose centre cannot hold. Achebe takes a European poet’s vision of collapse and applies it to a collapse that Europeans brought about, which is a quiet irony in itself. The phrase returns inside the novel in Chapter 20, when Obierika tells Okonkwo that the white man “has put a knife on the things that held us together” and that “we have fallen apart”. The centre that cannot hold is the clan.',
    },
  ],

  vocabulary: [
    {
      term: 'chi',
      definition:
        'A person’s personal god or spirit, which shapes their fortune. In Chapter 4 the narrator gives the proverb that when a man says yes, his chi says yes also; in exile in Chapter 14 Okonkwo concludes instead that “A man could not rise beyond the destiny of his chi.”',
    },
    {
      term: 'obi',
      definition:
        'The large hut of the head of a family, where he lives and receives visitors. Okonkwo’s wives each have their own huts in his compound.',
    },
    {
      term: 'egwugwu',
      definition:
        'Masked men who impersonate the ancestral spirits of the clan. In Chapter 10 nine egwugwu, one for each village, sit in judgement on a dispute. Unmasking one in public, as Enoch does in Chapter 22, is one of the greatest crimes a man can commit.',
    },
    {
      term: 'ogbanje',
      definition:
        'A child believed to die again and again and return to its mother to be reborn. Ekwefi, nine of whose ten children died in infancy, fears that Ezinma is one.',
    },
    {
      term: 'iyi-uwa',
      definition:
        'A stone that links an ogbanje to the spirit world. Ezinma’s, a smooth pebble wrapped in a dirty rag, was dug up by the medicine man Okagbue, as Chapter 9 recalls.',
    },
    {
      term: 'osu',
      definition:
        'An outcast, dedicated to a god and forbidden to mix with the freeborn. The church at Mbanta takes the osu in (Chapter 18), which shows why the new religion appeals to those the clan rejects.',
    },
    {
      term: 'efulefu',
      definition:
        'A worthless man. The clan uses the word of the first converts in Chapter 16, men with no titles whose words carry no weight in the assembly.',
    },
    {
      term: 'agbala',
      definition:
        'A woman, and also a man who has taken no title. A playmate once told Okonkwo that his father was agbala, and he never forgot it (Chapter 2). Agbala is also the name of the Oracle of the Hills and the Caves, whose priestess is Chielo.',
    },
    {
      term: 'nso-ani',
      definition:
        'An offence against the earth goddess that everyone abhors. Beating his wife during the Week of Peace is Okonkwo’s nso-ani in Chapter 4, and he must bring offerings to the shrine of Ani.',
    },
    {
      term: 'ozo',
      definition:
        'One of the titles a man can take by wealth and achievement. Obierika tells Okonkwo that he sometimes wishes he had not taken it, because in Umuofia a titled man may not climb the tall palm trees to tap them; Okonkwo answers that the law must be obeyed. Titles are the measure of standing that Unoka never reached.',
    },
    {
      term: 'kotma',
      definition:
        'A court messenger of the colonial administration, hated in Umuofia as a foreigner and for his arrogance (Chapter 20). The glossary in the Heinemann edition notes that the word is not Igbo in origin but a corruption of the English words court messenger.',
    },
    {
      term: 'umunna',
      definition:
        'A wide group of kinsmen. Okonkwo’s farewell feast in Chapter 19 is given for his mother’s umunna, and an elder uses it to warn the young about the strength of the bond of kinship.',
    },
    {
      term: 'uri',
      definition:
        'Part of a betrothal ceremony. At the uri of Obierika’s daughter in Chapter 12, her suitor, who has already paid the greater part of her bride-price, brings palm-wine for her parents and for the whole umunna.',
    },
    {
      term: 'kola nut',
      definition:
        'A nut broken and shared at the start of a visit, with prayers to the ancestors. The ritual of hospitality opens the novel’s first scene between two men (Chapter 1).',
    },
    {
      term: 'cowries',
      definition:
        'Small shells used as money. Debts, fines and bride-prices in the novel are counted in them.',
    },
    {
      term: 'harmattan',
      definition:
        'The cold, dry wind that blows from the north in the dry season. Unoka loves this season of the year (Chapter 1).',
    },
    {
      term: 'the Evil Forest',
      definition:
        'The forest where those who die of the most feared diseases, such as leprosy and smallpox, are buried. The rulers of Mbanta give the missionaries land in theirs, expecting them to die (Chapter 17). Evil Forest is also the name of the leading egwugwu in Chapter 10.',
    },
    {
      term: 'District Commissioner',
      definition:
        'The British official who governs a district and presides over its court. His court is described in Chapter 20; he acts in person when he imprisons the six leaders in Chapter 23 and in the final chapter.',
    },
    {
      term: 'tragic hero',
      definition:
        'A great figure whose downfall comes from a flaw in their own character as well as from circumstance. Okonkwo’s flaw is his fear of weakness.',
    },
    {
      term: 'free indirect style',
      definition:
        'Third-person narration that takes on a character’s point of view and words without quotation marks, so the reader can hear the character’s judgement and weigh it.',
    },
  ],

  examPractice: {
    questions: [
      {
        question:
          'Explore tragic events in Things Fall Apart. You must consider the context of the novel in your answer.',
        skill:
          'Whole-text essay, Pearson Edexcel style (this is the question set in November 2023): knowledge of the whole novel, an informed personal response and context',
        guidance: [
          'Decide what you mean by tragic before you start: events that destroy something valuable, and that come from a flaw in a person as well as from forces beyond them. Say so in your opening.',
          'Pearson’s examiners described as sustained and thoughtful an answer that began with the title’s source in Yeats and then moved through Ikemefuna’s death, the accidental killing of Ezeudu’s son and the exile, colonisation, and Okonkwo’s death. That is a good spine: one tragic event per paragraph, in the order of the novel.',
          'Chapter 7: analyse the killing of Ikemefuna, “Dazed with fear”, and the reason the narrator gives for it. Show that the tragedy begins inside Okonkwo, not with the Europeans.',
          'Chapter 13: the gun that explodes at a funeral, a crime the clan counts as inadvertent, and the seven years of exile that remove Okonkwo just as the missionaries arrive.',
          'Parts Two and Three: Nwoye’s loss (Chapter 17), the court, the prison and Obierika’s knife speech (Chapter 20), and the humiliation of the leaders (Chapter 23). Tie in context here: the British missions, courts and district commissioners that the novel dramatises.',
          'End with Chapter 25: a death his clan cannot bury, and the Commissioner’s paragraph. Judge which is the greater tragedy, the man or the society, and say why.',
        ],
      },
      {
        question:
          'Read the passage in Chapter 7 from the men setting out with Ikemefuna to the end of the chapter. How does Achebe make this such a shocking and significant moment in the novel?',
        skill:
          'Close reading of a printed passage, Cambridge style: language, structure and effect, with a personal response',
        guidance: [
          'Open with a clear line of argument, for example that the horror comes from restraint: Achebe tells us almost nothing at the moment of the killing, and everything around it.',
          'Show how the passage builds dread through the reader’s knowledge: the deathly silence in the compound, the men’s talk dying away as they go deeper into the forest, the man who clears his throat.',
          'Analyse the move into Ikemefuna’s mind, his thoughts of his mother and sister and his trust in Okonkwo, and explain how it makes the reader share his hope.',
          'Analyse the killing itself: the cry of “My father”, the single plain sentence, “Dazed with fear”, and the explanation that follows. Comment on the passive being thought.',
          'Move to Nwoye’s response and the simile of the tightened bow, and link it to his memory of the infant crying in the forest.',
          'Widen out briefly: say why this is the turning point, with its consequences for Nwoye’s conversion and Okonkwo’s grief in Chapter 8, and end with your own judgement of where Achebe’s sympathy lies.',
        ],
      },
      {
        question: 'To what extent does Achebe make you sympathise with Okonkwo?',
        skill:
          'Whole-text essay, Cambridge style: an argued personal response supported by knowledge of the whole novel',
        guidance: [
          'Answer the question in your first sentence and qualify it: for example, that sympathy is real but limited, and that Achebe controls it carefully.',
          'Against sympathy: his harshness to his wives and children, the beating in the Week of Peace (Chapter 4), the shot he fires at Ekwefi (Chapter 5), the killing of Ikemefuna against Ezeudu’s advice (Chapter 7), and his violence towards Nwoye (Chapter 17).',
          'For sympathy: the fear behind the harshness (Chapter 2), his hidden grief in Chapter 8, and his four trips to the shrine in the night after Chielo takes Ezinma, told in Chapter 12.',
          'Show how the novel’s method shapes your response: restraint at the moments of violence, and the rare glimpses inside his mind.',
          'Consider Part Three: his loss of place, the humiliation of the leaders in Chapter 23, and his isolation when the clan will not go to war in Chapter 24.',
          'End with Obierika’s verdict in Chapter 25 and the Commissioner’s paragraph, and say whether the ending changes how you judge him.',
        ],
      },
      {
        question:
          'Explore how Achebe presents the impact of Christianity and colonial rule on Mbanta and Umuofia. You must consider the context of the novel in your answer.',
        skill:
          'Whole-text essay, Pearson Edexcel style: knowledge of the whole novel, an informed personal response and context',
        guidance: [
          'Set out your argument: for example, that Achebe shows change succeeding because it exploits real divisions in the clan, not because the clan is weak.',
          'Part Two: the missionaries at Mbanta, the land in the Evil Forest, and who converts first, the efulefu, the osu, and Nwoye (Chapters 16 to 18).',
          'Part Three: the court, the prison and the kotma, Aneto’s hanging, and Obierika’s knife speech (Chapter 20).',
          'Compare Mr Brown’s patience and his talks with Akunna (Chapter 21) with Reverend James Smith’s zeal and Enoch’s unmasking of an egwugwu (Chapter 22).',
          'Bring in context at the point it explains something: the arrival of British missions and colonial courts in Igboland, which the novel dramatises, and its publication in 1958, two years before Nigeria became independent in 1960.',
          'Conclude on the ending: the Commissioner’s book title as the colonial version of the story you have just read.',
        ],
      },
      {
        question:
          'Explore the significance of Okonkwo’s relationship with his son Nwoye. You must consider the context of the novel in your answer.',
        skill:
          'Whole-text essay, Pearson Edexcel style: knowledge of the whole novel, an informed personal response and context',
        guidance: [
          'Start with Unoka: Okonkwo’s fear of resembling his father (Chapter 2) is what he sees, wrongly, in his son.',
          'Show the pressure on Nwoye in Part One: the masculine stories, the beatings, and Ikemefuna, who kindles a new fire in him (Chapters 4 and 7).',
          'Treat Chapter 7 as the break: Nwoye’s grief after Ikemefuna’s death, and the link Achebe draws with the infant crying in the forest.',
          'Analyse the conversion in Chapters 16 and 17: the hymn’s appeal, Okonkwo’s attack, and his verdict “Living fire begets cold, impotent ash.”',
          'Use context: the appeal of mission schools and churches to the young, and Nwoye, now called Isaac, sent by Mr Brown to the new training college for teachers in Umuru (Chapter 21).',
          'End with a judgement: is Nwoye’s departure a loss, a liberation or both, and what does it show about Okonkwo’s idea of strength?',
        ],
      },
      {
        question: 'Explore the ways in which Achebe presents women and their place in Umuofia.',
        skill:
          'Whole-text essay, Cambridge style: an argued personal response supported by knowledge of the whole novel',
        guidance: [
          'Argue a clear position: for example, that the society is ruled by men but the novel gives women power and inner lives that Okonkwo refuses to see.',
          'Use Okonkwo’s attitudes as evidence of his view, not the novel’s: the word agbala, his wish that Ezinma were a boy (Chapter 8), his dismissal of women’s stories (Chapter 9).',
          'Set against them Ekwefi’s courage and grief (Chapters 5, 9 and 11), and her friendship with Chielo.',
          'Analyse Chielo, priestess of Agbala, carrying Ezinma to the caves: a woman whose spiritual authority Okonkwo cannot challenge (Chapter 11).',
          'Discuss Uchendu’s speech on Nneka, Mother is Supreme (Chapter 14), and the idea that a man finds refuge in his motherland.',
          'Conclude by weighing the two: what the clan allows women, and what Achebe’s narrative allows them.',
        ],
      },
    ],
    tips: [
      'Know your paper. Both boards set the novel closed book. Pearson’s questions ask you to consider the novel’s context, and the essay rewards close knowledge of the whole novel and an informed personal response. Cambridge offers a choice of two questions on the novel, prints any passage a question is based on, and rewards comment on Achebe’s language and methods as well as knowledge and personal response.',
      'Answer the question, not the topic. Pearson’s examiners, reporting on the November 2023 paper, found that answers on tragic events did well but at times could have referred more to the question, and that some answers on Unoka were brief, undeveloped or short of examples. Range across the novel and keep every paragraph pointed at the question’s key word.',
      'Learn short quotations, five to ten words each, and learn their chapters. Several often-quoted lines are sometimes mislabelled: the killing of Ikemefuna and the line about fear of being thought weak are Chapter 7, and Okonkwo’s self-reproach about becoming a shivering old woman is Chapter 8.',
      'Quote the spelling in your own copy. The UK editions, including the Penguin one Pearson recommends, print matchet and on to (“like a fish on to a dry, sandy beach”); US editions print machete and onto. Achebe’s text prints Ibo, and study guides that print Igbo inside a quotation have changed it. In your own sentences Igbo is the modern spelling and is correct.',
      'Do not write primitive or tribe in your own voice. Those are the District Commissioner’s words, and the novel’s last line exists to make the reader reject them. Write clan, society or the Igbo people.',
      'Avoid the two easy readings. Okonkwo is not simply a victim of colonialism, since his flaw is visible long before the missionaries arrive, and Igbo society is not idealised, since Achebe shows twins abandoned, the osu shunned and a boy killed on the word of the Oracle.',
      'Use the structure as evidence. The length of Part One, the three opening sentences of the parts, and the final shift into the Commissioner’s mind are all points about method that most answers miss.',
      'Context has to be used, not listed. The arrival of missionaries and colonial courts in Igboland, and a novel published in London in 1958 by a Nigerian writer, two years before independence, should each appear at the moment they explain something in your argument.',
      'Give the minor characters their due. Obierika, Uchendu, Ekwefi, Mr Brown and Akunna carry much of the novel’s argument about tradition and change, and answers that mention only Okonkwo miss it.',
    ],
  },

  modelAnswer: {
    question: 'To what extent does Achebe make you sympathise with Okonkwo?',
    paragraph:
      "Achebe makes sympathy for Okonkwo difficult but never impossible, and his main method is restraint. At the killing of Ikemefuna in Chapter 7 the narration gives only one flat sentence, “Dazed with fear, Okonkwo drew his matchet and cut him down”, and then an explanation: “He was afraid of being thought weak.” The passive “being thought” is revealing, because it shows that Okonkwo is driven not by cruelty, or even by duty, but by dread of other men's judgement, the same dread that has made him define himself against his father. This does not excuse him, since Ogbuefi Ezeudu had warned him to take no part in the death of a boy who called him father, but it turns a brutal act into a frightened one. Achebe then shows the cost. In Chapter 8 Okonkwo cannot eat for two days and feels “like a drunken giant walking with the limbs of a mosquito”, a simile that is almost comic until we realise that the greatest wrestler in the nine villages has been felled by a grief he will not name. Achebe said that Joyce Cary's novel Mister Johnson struck him as superficial and helped form his determination to write his own novels about Nigeria, and here he gives an Igbo man the divided inner life of a tragic hero. My sympathy is therefore real but limited: the novel asks us to pity Okonkwo's fear without forgiving what it makes him do.",
    commentary: [
      'It answers “to what extent” in its first sentence and qualifies the answer in its last, so the whole paragraph is an argument rather than a list of points.',
      'Every quotation is short, exact and analysed at the level of the word: the paragraph picks out the passive “being thought” and explains what it reveals.',
      'It weighs evidence against its own view, Ezeudu’s warning, which makes the final judgement more convincing than simple sympathy would be.',
      'It moves across the novel from Chapter 7 to Chapter 8 and comments on method, restraint and simile, not only on what happens.',
      'Context is tied to the argument at the point it matters, what Achebe said he was writing against, rather than bolted on at the end. For a Pearson answer context is required; for a Cambridge answer it supports the personal response.',
    ],
  },

  timeline: [
    {
      where: 'Chapter 1, Part One',
      title: 'The greatest wrestler in the nine villages',
      summary:
        'At eighteen Okonkwo won fame by throwing Amalinze the Cat, and he is now a wealthy farmer with two barns full of yams who has just married his third wife. His father, Unoka, a gentle flute player, died in debt and without a title. The chapter ends by introducing Ikemefuna as a doomed boy.',
      setting: 'Umuofia, the nine villages, in the dry season',
      who: ['Okonkwo', 'Unoka', 'Okoye'],
      quote: 'Okonkwo was well known throughout the nine villages and even beyond.',
      themes: ['Masculinity and fear', 'Language and storytelling'],
      tension: 1,
      significance:
        'Okonkwo’s greatness and his shame about his father are set up together, so the rise and the fall have one root.',
    },
    {
      where: 'Chapter 2, Part One',
      title: 'A killing at Mbaino market',
      summary:
        'The town crier’s gong summons the clan at night. A daughter of Umuofia has been murdered at Mbaino, and Umuofia offers Mbaino war or compensation. Mbaino gives a young virgin and a boy, Ikemefuna, who is placed in Okonkwo’s care. The narrator explains the fear that rules Okonkwo’s life.',
      setting: 'Okonkwo’s compound at night, then the marketplace crowded with the men of Umuofia',
      who: ['Okonkwo', 'Ikemefuna'],
      quote: 'lest he should be found to resemble his father',
      themes: ['Masculinity and fear', 'Tradition and change'],
      tension: 2,
      significance:
        'Ikemefuna enters the story, and fear is named as the force behind everything Okonkwo does.',
    },
    {
      where: 'Chapter 4, Part One',
      title: 'The Week of Peace broken',
      summary:
        'Okonkwo grows fond of Ikemefuna, inwardly, and the boy becomes part of the family. Okonkwo beats his youngest wife, Ojiugo, during the sacred Week of Peace because she went to plait her hair and was not back to cook. Ezeani, priest of the earth goddess, rebukes him and orders offerings at the shrine of Ani.',
      setting: 'Okonkwo’s compound in the week before planting',
      who: ['Okonkwo', 'Ojiugo', 'Ezeani', 'Ikemefuna', 'Nwoye'],
      quote: 'Okonkwo was provoked to justifiable anger',
      themes: ['Masculinity and fear', 'Tradition and change'],
      tension: 2,
      significance:
        'Okonkwo’s temper puts him in conflict with the clan’s own religion, long before any missionary arrives.',
    },
    {
      where: 'Chapter 7, Part One',
      title: 'The killing of Ikemefuna',
      summary:
        'After three years with the family, Ikemefuna is to die by the Oracle’s decree. Ogbuefi Ezeudu warns Okonkwo not to take part. In the forest, when the boy runs to him calling him father, Okonkwo cuts him down. Nwoye knows at once what has happened.',
      setting: 'A footpath deep in the forest outside Umuofia',
      who: ['Okonkwo', 'Ikemefuna', 'Nwoye', 'Ogbuefi Ezeudu'],
      quote: 'He was afraid of being thought weak.',
      themes: ['Masculinity and fear', 'Tradition and change', 'Fate and personal chi'],
      tension: 5,
      significance:
        'The moral turning point of the novel: it breaks Nwoye’s bond with his father and marks the start of Okonkwo’s decline.',
    },
    {
      where: 'Chapter 8, Part One',
      title: 'Grief that cannot be admitted',
      summary:
        'Okonkwo drinks palm-wine, eats nothing for two days and cannot sleep. Ezinma brings him food, and he thinks she should have been a boy. He visits Obierika, who says that he would neither dispute the Oracle nor be the one to carry out its decree.',
      setting: 'Okonkwo’s obi, then Obierika’s compound',
      who: ['Okonkwo', 'Ezinma', 'Obierika'],
      quote: 'He felt like a drunken giant walking with the limbs of a mosquito.',
      themes: ['Masculinity and fear', 'Tradition and change'],
      tension: 3,
      significance:
        'Okonkwo’s hidden love is shown in his body, and Obierika offers the thoughtful alternative to his friend’s rigidity.',
    },
    {
      where: 'Chapters 9 to 12, Part One',
      title: 'Ezinma and the Oracle',
      summary:
        'Ezinma, feared to be an ogbanje, falls ill with iba, a fever, and Okonkwo gathers leaves, roots and barks to make her medicine. One night Chielo, priestess of Agbala, carries her away to the caves of the Oracle, and Ekwefi follows through the dark. Chapter 12 tells how Okonkwo, after waiting what he thought a manly interval, went to the shrine with his machete and found Ekwefi only on his fourth trip.',
      setting: 'Paths through the villages at night, and the mouth of the Oracle’s cave',
      who: ['Ezinma', 'Ekwefi', 'Chielo', 'Okonkwo'],
      themes: ['Fate and personal chi', 'Tradition and change'],
      tension: 4,
      significance:
        'A mother’s courage and a father’s secret anxiety show a family life far tenderer than Okonkwo lets anyone see.',
    },
    {
      where: 'Chapter 13, Part One',
      title: 'The gun explodes',
      summary:
        'At Ogbuefi Ezeudu’s funeral Okonkwo’s gun explodes and kills the dead man’s sixteen-year-old son. Because the killing was inadvertent, he must leave the clan and may return after seven years. At dawn men from Ezeudu’s quarter, Obierika among them, destroy his compound to cleanse the land, and Obierika then mourns his friend and questions the custom.',
      setting: 'The funeral in Okonkwo’s village of Iguedo, then his compound at dawn',
      who: ['Okonkwo', 'Obierika', 'Ogbuefi Ezeudu'],
      quote: 'Obierika was a man who thought about things.',
      themes: ['Fate and personal chi', 'Tradition and change'],
      tension: 4,
      significance:
        'The man who warned Okonkwo about Ikemefuna is at the centre of his downfall, and Okonkwo is removed from Umuofia just as change is coming.',
    },
    {
      where: 'Chapters 14 and 15, Part Two',
      title: 'Exile in Mbanta',
      summary:
        'Okonkwo’s mother’s kinsmen take him in, but he is in despair. His uncle Uchendu asks why a common name is Nneka and teaches him that a man finds refuge in his motherland. In the second year Obierika brings news that Abame was wiped out after its people killed a white man.',
      setting: 'Mbanta, his mother’s village, and Uchendu’s compound',
      who: ['Okonkwo', 'Uchendu', 'Obierika'],
      quote: 'Mother is Supreme',
      themes: [
        'Fate and personal chi',
        'Colonialism and cultural collision',
        'Masculinity and fear',
      ],
      tension: 3,
      significance:
        'Uchendu offers Okonkwo a gentler idea of strength, and Abame is the first sign of what colonial power will do.',
    },
    {
      where: 'Chapters 16 and 17, Part Two',
      title: 'Nwoye and the new religion',
      summary:
        'Missionaries arrive in Mbanta and are given land in the Evil Forest, where they survive. Nwoye is drawn to their hymns and joins them. When Okonkwo seizes and beats him, Uchendu intervenes, and Nwoye leaves for Umuofia, where the missionary has set up a school.',
      setting: 'The marketplace and the new church in the Evil Forest at Mbanta',
      who: ['Nwoye', 'Okonkwo', 'Uchendu'],
      quote: 'It was the poetry of the new religion, something felt in the marrow.',
      themes: [
        'Colonialism and cultural collision',
        'Tradition and change',
        'Masculinity and fear',
      ],
      tension: 4,
      significance:
        'Christianity wins its first convert in Okonkwo’s own family, answering the questions Ikemefuna’s death left in Nwoye.',
    },
    {
      where: 'Chapters 20 and 21, Part Three',
      title: 'Return to a changed Umuofia',
      summary:
        'Okonkwo returns after seven years to find a church, a court and a prison, and court messengers enforcing colonial law. Obierika explains how the white man divided the clan. Mr Brown wins respect with his school and hospital and debates religion with Akunna; Umuofia takes no special notice of Okonkwo’s return.',
      setting: 'Umuofia, Obierika’s obi, and the mission school',
      who: ['Okonkwo', 'Obierika', 'Mr Brown', 'Akunna'],
      quote: 'He has put a knife on the things that held us together',
      themes: ['Colonialism and cultural collision', 'Tradition and change'],
      tension: 3,
      significance:
        'The clan Okonkwo planned to lead has changed beyond recognition, and the phrase of the title is heard at last.',
    },
    {
      where: 'Chapter 22, Part Three',
      title: 'The unmasking',
      summary:
        'Reverend James Smith replaces Mr Brown and encourages the zealots. At the annual worship of the earth goddess, which falls on a Sunday, the convert Enoch unmasks an egwugwu. The egwugwu destroy Enoch’s compound and then the church, though Mr Smith stands his ground.',
      setting: 'The paths of Umuofia on a Sunday, and the church',
      who: ['Reverend James Smith', 'Enoch'],
      quote: 'danced a furious step and so the drums went mad',
      themes: ['Colonialism and cultural collision', 'Tradition and change'],
      tension: 4,
      significance:
        'Confrontation replaces compromise, and the burning of the church gives the colonial government its pretext.',
    },
    {
      where: 'Chapter 23, Part Three',
      title: 'The leaders humiliated',
      summary:
        'The District Commissioner calls six leaders of Umuofia, including Okonkwo, to a meeting and has them handcuffed and held. He fines the village two hundred bags of cowries. The prisoners’ heads are shaved, and the court messengers taunt them and knock their heads together. The messengers tell the village the fine is two hundred and fifty bags, so that fifty will go to them.',
      setting: 'The District Commissioner’s headquarters and guardroom',
      who: ['The District Commissioner', 'Okonkwo'],
      themes: ['Colonialism and cultural collision'],
      tension: 4,
      significance:
        'Colonial power shows itself as trickery and force, and Okonkwo’s hatred hardens into a resolve to fight.',
    },
    {
      where: 'Chapter 24, Part Three',
      title: 'The meeting at the marketplace',
      summary:
        'Released, the men of Umuofia meet to decide whether to fight. As Okika urges war, five court messengers arrive to stop the meeting. Okonkwo kills the head messenger with his machete, but the others are allowed to escape, and he hears voices asking why he did it.',
      setting: 'The marketplace of Umuofia, crowded, early in the morning',
      who: ['Okonkwo', 'Okika'],
      quote: 'He knew that Umuofia would not go to war.',
      themes: ['Colonialism and cultural collision', 'Masculinity and fear'],
      tension: 5,
      significance:
        'Okonkwo acts alone for a clan that no longer acts as one, and understands that his world has gone.',
    },
    {
      where: 'Chapter 25, Part Three',
      title: 'The Commissioner’s book',
      summary:
        'The Commissioner arrives to arrest Okonkwo and is led to the tree where he has hanged himself. His clansmen may not touch his body. Obierika blames the Commissioner for his friend’s death. The Commissioner walks away planning a book in which Okonkwo might earn a paragraph.',
      setting: 'A small bush behind Okonkwo’s compound',
      who: ['Obierika', 'The District Commissioner', 'Okonkwo'],
      quote: 'The Pacification of the Primitive Tribes of the Lower Niger',
      themes: ['Colonialism and cultural collision', 'Language and storytelling'],
      tension: 5,
      significance:
        'The novel ends with the coloniser’s version of the story, and the reader has just read the answer to it.',
    },
  ],

  relationships: [
    {
      from: 'Okonkwo',
      to: 'Unoka',
      kind: 'son and father',
      note: 'Okonkwo is ruled by one passion, “to hate everything that his father Unoka had loved” (Chapter 2). The novel shows the cost: in rejecting Unoka’s weakness he also rejects his music, his warmth and his ease with people.',
    },
    {
      from: 'Okonkwo',
      to: 'Nwoye',
      kind: 'father and eldest son',
      note: 'Okonkwo fears he sees Unoka in Nwoye and tries to beat it out of him. After Ikemefuna’s death the boy drifts away, and his conversion in Chapters 16 and 17 ends the relationship.',
    },
    {
      from: 'Okonkwo',
      to: 'Ikemefuna',
      kind: 'guardian and ward',
      note: 'Ikemefuna calls Okonkwo father, and Okonkwo grows very fond of him, inwardly, never showing it. He strikes the final blow in Chapter 7 because he fears being thought weak.',
    },
    {
      from: 'Nwoye',
      to: 'Ikemefuna',
      kind: 'like brothers',
      note: 'Ikemefuna kindles a new fire in the younger boy and makes him feel grown-up. The older boy’s death breaks something in Nwoye that the missionaries’ hymns later seem to answer.',
    },
    {
      from: 'Okonkwo',
      to: 'Ezinma',
      kind: 'father and favourite daughter',
      note: 'She understands him better than any of his other children, he thinks in Chapter 20, and he can only praise her by wishing she were a boy. His hidden fear for her shows in Chapter 12.',
    },
    {
      from: 'Okonkwo',
      to: 'Ekwefi',
      kind: 'husband and second wife',
      note: 'She ran away from her first husband, Anene, to live with him, and he once fired his gun at her in anger (Chapter 5). Their shared fear for Ezinma is the tenderest thing in the marriage.',
    },
    {
      from: 'Ekwefi',
      to: 'Ezinma',
      kind: 'mother and only surviving child',
      note: 'After nine children died in infancy, Ekwefi’s bond with Ezinma is almost that of equals. She follows Chielo through the night rather than let her daughter go alone.',
    },
    {
      from: 'Chielo',
      to: 'Ekwefi',
      kind: 'friends, and priestess and worshipper',
      note: 'In ordinary life Chielo shares a market shed with Ekwefi and calls Ezinma her daughter; as priestess of Agbala she carries the child to the caves, and Ekwefi must obey and follow.',
    },
    {
      from: 'Okonkwo',
      to: 'Obierika',
      kind: 'closest friends',
      note: 'Obierika questions where Okonkwo obeys, helps him in exile, explains the colonial takeover to him, and speaks for him at the end.',
    },
    {
      from: 'Okonkwo',
      to: 'Uchendu',
      kind: 'nephew and maternal uncle',
      note: 'Uchendu shelters him in exile and tries to teach him that strength includes finding comfort, a lesson Okonkwo cannot fully accept.',
    },
    {
      from: 'Mr Brown',
      to: 'Reverend James Smith',
      kind: 'predecessor and successor',
      note: 'Brown restrains his converts and learns about the clan’s religion; Smith openly condemns Brown’s policy of compromise and encourages the zealots, and the conflict follows.',
    },
    {
      from: 'Mr Brown',
      to: 'Akunna',
      kind: 'missionary and elder in debate',
      note: 'Their long talks about God and Chukwu convert neither man, but they show two systems of belief meeting as equals, which does not last.',
    },
    {
      from: 'Obierika',
      to: 'The District Commissioner',
      kind: 'accuser and colonial official',
      note: 'At the tree in Chapter 25 Obierika blames him for Okonkwo’s death. The Commissioner cannot understand what Obierika means and plans to reduce the story to a paragraph.',
    },
  ],

  compareWith: [
    {
      title: 'The Whale Rider',
      href: '/revision/texts/the-whale-rider',
      reason:
        'On the same Pearson modern prose list: Koro, like Okonkwo, holds so hard to a masculine idea of tradition that he harms what he means to protect, but Ihimaera ends in renewal where Achebe ends in tragedy.',
    },
    {
      title: 'To Kill a Mockingbird',
      href: '/revision/texts/to-kill-a-mockingbird',
      reason:
        'Set for both the Pearson and the Cambridge papers: another novel about a community’s ideas of justice and a court whose verdict reflects power rather than truth.',
    },
    {
      title: 'The Danger of a Single Story',
      href: '/revision/texts/the-danger-of-a-single-story',
      reason:
        'In the Pearson Edexcel anthology: Chimamanda Ngozi Adichie names Achebe, with Camara Laye, as the writers who showed her that people like her could exist in books, and the Commissioner’s planned paragraph can be read as exactly the kind of single story she warns against.',
    },
  ],

  // The model answer's commentary quotes the question it answers, not the novel.
  quotesFromElsewhere: ['to what extent'],

  contentGuidance: [
    'violence',
    'mortality',
    'mental_health',
    'colonialism',
    'discrimination',
    'crime_injustice',
    'mythological_religious',
    'supernatural',
  ],

  sources: [
    {
      label:
        'Internet Archive full-text index (the Open Library search-inside service), 26 September 2026: every quotation and every plot fact in this file checked in the scanned Penguin Red Classics edition (London, 2006; ISBN 0141023384; archive identifier thingsfallapart00chin_0), with the Penguin 2001 (thingsfallapartp0000chin) and Heinemann 1994 and 2000 (thingsfallaparta00chin, thingsfallaparta00chin_0) scans, and compared with the US Anchor and Fawcett scans to find the spellings that differ. Chapter placement from the chapter openings the Penguin scan prints. The Heinemann 1994 copyright page reads © Chinua Achebe 1958, first published by William Heinemann Ltd, 1958; its glossary gives kotma as a corruption of court messenger.',
      url: 'https://openlibrary.org/search/inside',
    },
    {
      label:
        'Second fact-check, 26 September 2026, through the same index: every quotation re-found in the UK scans, and the surrounding words of each checked for speaker and scene, together with the plot details in the summaries (the deathly silence falling as the party sets out, the sister who would now be six, the ozo title and the palm trees, the prisoners’ shaved heads in Chapter 23, the Sunday of the earth goddess’s worship in Chapter 22).',
    },
    {
      label:
        'The first draft (25 September 2026) located quotations in a scanned US (Anchor Books, 1994) edition. No link is recorded: it is a user upload of a copyrighted book, and this repository is public. Nothing in this file now rests on it alone.',
    },
    {
      label:
        'Secondary confirmations of chapter attribution found through the same index: a student’s guide to the novel placing “He was afraid of being thought weak” in Chapter 7; The Norton Anthology of World Literature printing Chapter 4 with “Okonkwo was provoked to justifiable anger”; the SparkNotes guide placing “destiny of his chi” in Chapter 14; Chinua Achebe’s Things Fall Apart: A Casebook (Oxford University Press, 2003) and a Norton teaching guide on the title and epigraph from Yeats.',
    },
    {
      label:
        'Pearson Edexcel International GCSE in English Literature (4ET1) Specification, Issue 3, August 2025: modern prose is Component 1 Section C, one essay question from a choice of two on each set text, closed book; recommended edition Penguin Red Classics, January 2006, ISBN 9780141023380',
      url: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/English%20Literature/2016/Specification%20and%20sample%20assessments/international-gcse-english-literature-specification.pdf',
    },
    {
      label:
        'Pearson Edexcel 4ET1/01 question paper, 6 November 2023: Question 12, Explore tragic events in Things Fall Apart, and Question 13, on Unoka; every Section C question ends by asking candidates to consider the context of the novel; 45 minutes advised for the section. And the Principal Examiner’s report on that series (published January 2024), on what the stronger and weaker answers on both questions did.',
    },
    {
      label:
        'Cambridge IGCSE Literature in English 0475 syllabus for examination in 2026, Version 2: Things Fall Apart set for Paper 1 Section B (Prose); a choice of two questions on each text; relevant passages printed; candidates may not take set texts into the exam room. The 2027 syllabus (Version 2, October 2024) also lists it.',
      url: 'https://www.cambridgeinternational.org/Images/697163-2026-syllabus.pdf',
    },
    {
      label:
        'Wikipedia, Mister Johnson (novel): Achebe said the novel struck him as superficial and helped form his determination to write his own novels about Nigeria. The Wikipedia article on Achebe goes further and says he decided to become a writer after reading it. The sources do not agree on how far the novel drove him, so the guide says only the former.',
      url: 'https://en.wikipedia.org/wiki/Mister_Johnson_(novel)',
    },
    {
      label:
        'Wikipedia, Chinua Achebe: born 16 November 1930 at Nneobi, near Ogidi, died 21 March 2013; Heinemann published Things Fall Apart on 17 June 1958',
      url: 'https://en.wikipedia.org/wiki/Chinua_Achebe',
    },
    {
      label:
        'Wikipedia, Things Fall Apart: first published in London by Heinemann, 17 June 1958; the title taken from Yeats’s 1919 poem The Second Coming',
      url: 'https://en.wikipedia.org/wiki/Things_Fall_Apart',
    },
    {
      label:
        'Wikipedia, Nigerian Independence Day: sovereignty transferred at midnight on 1 October 1960',
      url: 'https://en.wikipedia.org/wiki/Nigerian_Independence_Day',
    },
  ],
}
